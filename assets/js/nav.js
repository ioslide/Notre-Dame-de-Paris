if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
class ScreenFilter extends PIXI.Filter {
  constructor(resolution) {
    super(PIXI.Filter.defaultVertexSrc, ScreenFilter.fragmentSrc);
    this.resolution = resolution;
    this.uniforms.time = 0;
    this.uniforms.mouse = [0, 0];
    this.uniforms.u_resolution = [window.innerWidth * this.resolution, window.innerHeight * this.resolution];
    this.uniforms.ratio = this.uniforms.u_resolution[1] < this.uniforms.u_resolution[0] ? this.uniforms.u_resolution[0] / this.uniforms.u_resolution[1] : this.uniforms.u_resolution[1] / this.uniforms.u_resolution[0];
    this.autoFit = false;
    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize);
  }
  onResize() {
    this.uniforms.u_resolution = [window.innerWidth * this.resolution, window.innerHeight * this.resolution];
    this.uniforms.ratio = this.uniforms.u_resolution[1] < this.uniforms.u_resolution[0] ? this.uniforms.u_resolution[0] / this.uniforms.u_resolution[1] : this.uniforms.u_resolution[1] / this.uniforms.u_resolution[0];
  }
  static get fragmentSrc() {
    return `
  precision highp float;
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler;
  uniform vec4 inputClamp;
  uniform vec4 inputSize;
  uniform vec4 inputPixel;
  uniform vec4 outputFrame;
  uniform vec2 mouse;
  uniform vec2 u_resolution;
  uniform float ratio;
  uniform float time;
  #define PI 3.14159265359
  float rand(vec2 c){
	  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }
  float noise(vec2 p, float freq ){
    float unit = inputSize.x/freq;
    vec2 ij = floor(p/unit);
    vec2 xy = mod(p,unit)/unit;

    xy = .5*(1.-cos(PI*xy));
    float a = rand((ij+vec2(0.,0.)));
    float b = rand((ij+vec2(1.,0.)));
    float c = rand((ij+vec2(0.,1.)));
    float d = rand((ij+vec2(1.,1.)));
    float x1 = mix(a, b, xy.x);
    float x2 = mix(c, d, xy.x);
    return mix(x1, x2, xy.y);
  }

  vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.411764705882353) * direction;
    vec2 off2 = vec2(3.2941176470588234) * direction;
    vec2 off3 = vec2(5.176470588235294) * direction;
    color += texture2D(image, uv) * 0.1964825501511404;
    color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
    color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
    return color;
  }
  void main(void){
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 uvm = uv - mouse;
    uvm /= ratio;
    vec2 raidalmouse = smoothstep(.3, 2., abs(uvm) * 2.);
    vec4 tex = vec4(0.);
    vec2 textureCoord = vTextureCoord - .5;
    vec2 polar = vec2(length(textureCoord), atan(textureCoord.y,textureCoord.x));
    polar.y += smoothstep(.1, 2., abs(uvm.x) * 2.);
    textureCoord = vec2( cos(polar.y) * polar.x, sin(polar.y) * polar.x );
    textureCoord.y *= 1. - abs(uvm.x * 1.5) * .3;
    textureCoord += noise(uv, 10000. + sin(time) * 5000.) * smoothstep(.15, 2., abs(uvm.x)) * .6;
    textureCoord += .5;
    tex = texture2D(uSampler, textureCoord);
    gl_FragColor = tex * 1. - smoothstep(.5, 1.5, length(uvm)*2.);
  }
`;
  }
  apply(filterManager, input, output) {
    this.uniforms.time += .01;
    filterManager.applyFilter(this, input, output);
  }
  set mousepos(value) {
    if (value instanceof Array && value.length === 2 && !isNaN(value[0]) && !isNaN(value[1])) {
      this._mousepos = value;
      this.uniforms.mouse = value;
    }
  }
  get mousepos() {
    return this._mousepos || [0, 0];
  }
}
class HoverFilter extends PIXI.Filter {
  constructor() {
    super(PIXI.Filter.defaultVertexSrc, HoverFilter.fragmentSrc);
    this.uniforms.time = 0;
  }
  static get fragmentSrc() {
    return `
  precision highp float;
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler;
  uniform vec4 inputClamp;
  uniform vec4 inputSize;
  uniform vec4 inputPixel;
  uniform vec4 outputFrame;
  uniform float time;
  #define PI 3.14159265359
  float rand(vec2 c){
	  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }
  #define NUM_OCTAVES 3
  float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
  vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
  vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
  float noise(vec3 p){
      vec3 a = floor(p);
      vec3 d = p - a;
      d = d * d * (3.0 - 2.0 * d);
      vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
      vec4 k1 = perm(b.xyxy);
      vec4 k2 = perm(k1.xyxy + b.zzww);
      vec4 c = k2 + a.zzzz;
      vec4 k3 = perm(c);
      vec4 k4 = perm(c + 1.0);
      vec4 o1 = fract(k3 * (1.0 / 41.0));
      vec4 o2 = fract(k4 * (1.0 / 41.0));
      vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
      vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
      return o4.y * d.y + o4.x * (1.0 - d.y);
  }
  float fbm(vec3 x) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100);
    for (int i = 0; i < NUM_OCTAVES; ++i) {
      v += a * noise(x);
      x = x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }
  float distortedFBM(in vec3 x) {
    float t = fbm(x);
    x.xy += (t -.5);
    t *= fbm(x);
    x.xy += (t -.5) * .6;
    t = fbm(x);
    return t;
  }
  vec4 pattern(vec2 uv) {
    uv *= 4.;
    float t = time*2.;
    float pattern = distortedFBM(vec3(uv, t));
    pattern *= pattern * 1.2;
    vec4 rtn = vec4( 0.81, 0.33, 0, 1. ); 
    rtn = mix(rtn, vec4( 1. ), smoothstep(.0, 1., pattern)); 
    return rtn;
  }
  void main(void){
    vec2 uv = (gl_FragCoord.xy - 0.5 * inputSize.xy) / min(inputSize.x, inputSize.y);
    vec4 tex = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4((tex.a) * pattern(uv));
  }
`;
  }
  apply(filterManager, input, output) {
    this.uniforms.time += .01;
    filterManager.applyFilter(this, input, output);
  }
}
class Navigation {
  constructor(nav) {
    this.nav = nav;
    this.initialised = false;
    this.navItems = [];
    this.app = null;
    this.container = null;
    this.screenFilter = null;
    this.navWidth = null;
    this.background = null;
    this.pointerdown = false;
    this.dragging = false;
    this.targetMousePos = [0, 0];
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.animate = this.animate.bind(this);
  }
  init() {
    this.initialised = true;
    const els = this.nav.querySelectorAll('a');
    els.forEach((el) => {
      this.navItems.push({
        rootElement: el,
        title: el.innerText,
        element: null,
        sprite: null,
        link: el.href
      });
    });
    this.makeNavItems();
    this.setupWebGLContext();
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('resize', this.onResize);
    window.addEventListener('navOpen', this.onOpen);
  }
  makeNavItems() {
    if (!this.initialised) return;
    this.navItems.forEach((navItem, i) => {
      navItem.element = this.makeNavItem(navItem.title, navItem.link);
      navItem.sprite = PIXI.Sprite.from(navItem.element);
      navItem.sprite.interactive = true;
      navItem.sprite.buttonMode = true;
      const filter = new HoverFilter();
      navItem.rootElement.addEventListener('focus', () => {
        this.focusNavItemByIndex(i);
        navItem.sprite.filters = [filter];
      });
      navItem.rootElement.addEventListener('blur', () => {
        navItem.sprite.filters = [];
      });
      navItem.sprite.on('pointerover', (e) => {
        navItem.sprite.filters = [filter];
      });
      navItem.sprite.on('pointerout', (e) => {
        navItem.sprite.filters = [];
      });
      navItem.sprite.on('pointerup', (e) => {
        if (this.dragging) return;
        navItem.rootElement.click();
      });
    });
  }
  makeNavItem(title) {
    if (!this.initialised) return;
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const font = 'tenez';
    const fontSize = 80;
    const fontWeight = 400;
    ctx.font = `${fontWeight} ${fontSize}px ${font}`;
    c.width = ctx.measureText(title).width + 50;
    c.height = fontSize * 1.5;
    ctx.font = `${fontWeight} ${fontSize}px ${font}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "rgba(223,143,86,1)";
    ctx.fillText(title, c.width * .5, c.height - fontSize * .2);
    return c;
  }
  setupWebGLContext() {
    if (!this.initialised) return;
    this.app = new PIXI.Application({
      backgroundColor: this.backgroundColour,
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: 2
    });
    this.app.stage.x = window.innerWidth * .5;
    this.app.stage.y = window.innerHeight * .5;
    this.container = new PIXI.Container();
    this.screenFilter = new ScreenFilter(2);
    this.app.stage.filters = [this.screenFilter];
    let ipos = 0;
    this.navWidth = 0;
    this.navItems.forEach((item) => {
      this.navWidth += item.sprite.width;
    });
    this.navItems.forEach((item) => {
      item.sprite.x = this.navWidth * -.5 + ipos;
      ipos += item.sprite.width;
      this.container.addChild(item.sprite);
    });
    this.background = new PIXI.Graphics();
    this.setupBackground();
    this.app.stage.addChild(this.background);
    this.app.stage.addChild(this.container);
    this.app.view.setAttribute('aria-hidden', 'true');
    this.app.view.setAttribute('tab-index', '-1');
    this.app.view.className = 'main-nav__canvas';
    this.nav.appendChild(this.app.view);
  }
  focusNavItemByIndex(index) {
    if (!this.initialised) return;
    let c = 0;
    this.navItems.forEach((item, i) => {
      let perWidth = item.element.width / this.navWidth;
      if (i < index) {
        c += perWidth;
      } else if (i === index) {
        c += perWidth * .5;
      }
    });
    let mousepos = [window.innerWidth * .1 + (window.innerWidth * .8) * c, window.innerHeight * .5];
    this.mousepos = mousepos;
  }
  deInit() {
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('resize', this.onResize);
  }
  setupBackground() {
    if (!this.initialised) return;
    this.background.clear();
    this.background.beginFill(this.backgroundColour, 0.);
    this.background.position.x = window.innerWidth * -.5;
    this.background.position.y = window.innerHeight * -.5;
    this.background.drawRect(-this.maskpadding, -this.maskpadding, window.innerWidth + this.maskpadding, window.innerHeight + this.maskpadding);
    this.background.endFill();
    const mask = new PIXI.Graphics();
    mask.beginFill(this.backgroundColour, .5);
    mask.position.x = window.innerWidth * -.5;
    mask.position.y = window.innerHeight * -.5;
    mask.drawRect(-this.maskpadding, -this.maskpadding, window.innerWidth + this.maskpadding, window.innerHeight + this.maskpadding);
    mask.endFill();
    this.container.mask = mask;
  }
  fixMousePos(mousepos_px) {
    let ratio = window.innerHeight / window.innerWidth;
    let mousepos = [];
    if (window.innerHeight > window.innerWidth) {
      mousepos[0] = (mousepos_px[0] - window.innerWidth / 2) / window.innerWidth;
      mousepos[1] = (mousepos_px[1] - window.innerHeight / 2) / window.innerHeight * -1 * ratio;
    } else {
      mousepos[0] = (mousepos_px[0] - window.innerWidth / 2) / window.innerWidth / ratio;
      mousepos[1] = (mousepos_px[1] - window.innerHeight / 2) / window.innerHeight * -1;
    }
    return mousepos;
  }

  unfixMousePos(mousepos) {
    let ratio = window.innerHeight / window.innerWidth;
    let mousepos_px = [];
    if (window.innerHeight > window.innerWidth) {
      mousepos_px[0] = mousepos[0] * window.innerWidth + (window.innerWidth / 2);
      mousepos_px[1] = mousepos[1] * window.innerHeight / -1 / ratio + (window.innerHeight / 2);
    } else {
      mousepos_px[0] = mousepos[0] * window.innerWidth * ratio + (window.innerWidth / 2);
      mousepos_px[1] = mousepos[1] * window.innerHeight / -1 + (window.innerHeight / 2);
    }
    return mousepos_px;
  }
  onResize(e) {
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
    this.app.stage.x = window.innerWidth * .5;
    this.app.stage.y = window.innerHeight * .5;

    this.setupBackground();
  }
  onPointerMove(e) {
    if (this.animatingPointer === true) {
      if (this.dragging || e.pointerType === 'mouse') {
        this.targetMousePos = [e.pageX, e.pageY];
      }
      return;
    }
    if (this.dragging || e.pointerType === 'mouse') {
      this.mousepos = [e.pageX, e.pageY];
    }
  }
  onPointerDown(e) {
    this.pointerdown = true;
    setTimeout(() => {
      if (this.pointerdown === true) this.dragging = true;
    }, 300);
  }
  onPointerUp(e) {
    this.pointerdown = false;
    setTimeout(() => {
      this.dragging = false;
    }, 300);
  }
  onOpen() {
    this.animatingPointer = true;
    this.focusNavItemByIndex(0);
    this.targetMousePos = this.unfixMousePos(this.mousepos);
    this.mousepos = [3000, window.innerHeight * .5];
  }
  animate(delta) {
    if (this.animatingPointer === true) requestAnimationFrame(this.animate);
    const pxMousepos = this.unfixMousePos(this.mousepos);
    const diff = [this.targetMousePos[0] - pxMousepos[0], this.targetMousePos[1] - pxMousepos[1]];
    pxMousepos[0] += (diff[0]) * .05;
    pxMousepos[1] += (diff[1]) * .05;
    this.mousepos = pxMousepos;
  }
  set backgroundColour(value) {
    const colourval = /^#([0-9ABCDEF]{6,6})/i.exec(value);
    if (typeof (value) == 'string' && colourval != null) {

      this._backgroundColour = `0x${colourval[1]}` * 1;
    } else if (typeof (value) == 'number') {

      this._backgroundColour = value;
    }
    this.setupBackground();
  }
  get backgroundColour() {
    return this._backgroundColour || 0x151515;
  }
  set animatingPointer(value) {
    const wasAnimating = this.animatingPointer;
    this._animating = value === true;
    if (wasAnimating === false && this.animatingPointer === true) {
      requestAnimationFrame(this.animate);
    }
  }
  get animatingPointer() {
    return this._animating || false;
  }
  set dragging(value) {
    if (value === true) {
      this.old_animatingPointer = this.animatingPointer;
      this.animatingPointer = false;
      this._dragging = true;
    } else {
      this._dragging = false;
    }
  }
  get dragging() {
    return this._dragging || false;
  }
  set mousepos(value) {
    const p = value[0] / window.innerWidth;
    this.container.position.x = -(this.navWidth * .5) + (1. - p) * this.navWidth;
    value = this.fixMousePos(value);
    if (value instanceof Array && value.length === 2 && !isNaN(value[0]) && !isNaN(value[1])) {
      this._mousepos = value;
      if (this.screenFilter) this.screenFilter.mousepos = value;
    }
  }
  get mousepos() {
    return this._mousepos || [0, 0];
  }
  set maskpadding(value) {
    if (!isNaN(value)) this._maskpadding = value;
  }
  get maskpadding() {
    if (!isNaN(this._maskpadding)) return this._maskpadding;
    return 100;
  }
}
const navToggle = document.getElementById('main-nav-toggle');
document.addEventListener('keyup', (e) => {
  if (e.target.className.indexOf('nav-toggle') && (e.keyCode === 13 || e.keyCode === 32)) {
    navToggle.checked = !navToggle.checked;
    e.preventDefault();
  }
});
navToggle.addEventListener('change', (e) => {
  let eventName;
  if (window.CustomEvent) {
    var event = new CustomEvent(eventName);
  } else {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true);
  }
  window.dispatchEvent(event);
});
const lists = document.getElementsByTagName("li");
var Fade = {
  Id: function (name) {
    return document.getElementById("main-nav");
  },
  SetOpacity: function (ev, v) {
    ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
  }
}
for (let i = 0; i < lists.length; i++) {
  lists[i].onclick = function () {
    fadeOut(Fade.Id('fadeOut'), 40);
  }
}
function fadeOut(elem, speed, opacity) {
  speed = speed || 20;
  opacity = opacity || 0;
  var val = 100;
  (function () {
    Fade.SetOpacity(elem, val);
    val -= 10;
    if (val >= opacity) {
      setTimeout(arguments.callee, speed);
    } else if (val < 0) {
      elem.style.display = 'none';
    }
  })();
}
const nav = new Navigation(document.querySelector('.main-nav'));
window.navigation = nav;
WebFont.load({
  typekit: {
    id: 'phg5cnq'
  },
  active: () => {
    nav.init();
    nav.focusNavItemByIndex(0);
    var event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, false);
    navToggle.dispatchEvent(event);
  }
});