! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "assets/js", t(0)
}([function (e, t) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (e, t, r) {
        function o(e, t) {
            return ("undefined" == typeof e ? "undefined" : n(e)) === t
        }

        function i() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }

        function s() {
            var e = t.body;
            return e || (e = i(S ? "svg" : "body"), e.fake = !0), e
        }

        function a(e, n, r, o) {
            var a, l, u, f, c = "modernizr",
                p = i("div"),
                d = s();
            if (parseInt(r, 10))
                for (; r--;) u = i("div"), u.id = o ? o[r] : c + (r + 1), p.appendChild(u);
            return a = i("style"), a.type = "text/css", a.id = "s" + c, (d.fake ? d : p).appendChild(a), d.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), p.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", f = x.style.overflow, x.style.overflow = "hidden", x.appendChild(d)), l = n(p, e), d.fake ? (d.parentNode.removeChild(d), x.style.overflow = f, x.offsetHeight) : p.parentNode.removeChild(p), !!l
        }

        function l(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function u(e) {
            return e.replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function f(t, n, r) {
            var o;
            if ("getComputedStyle" in e) {
                o = getComputedStyle.call(e, t, n);
                var i = e.console;
                null !== o ? r && (o = o.getPropertyValue(r)) : i && i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            } else o = !n && t.currentStyle && t.currentStyle[r];
            return o
        }

        function c(t, n) {
            var o = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; o--;)
                    if (e.CSS.supports(u(t[o]), n)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var i = []; o--;) i.push("(" + u(t[o]) + ":" + n + ")");
                return i = i.join(" or "), a("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == f(e, null, "position")
                })
            }
            return r
        }

        function p(e) {
            return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")
        }

        function d(e, t, n, s) {
            function a() {
                f && (delete k.style, delete k.modElem)
            }
            if (s = !o(s, "undefined") && s, !o(n, "undefined")) {
                var u = c(e, n);
                if (!o(u, "undefined")) return u
            }
            for (var f, d, v, m, y, h = ["modernizr", "tspan", "samp"]; !k.style && h.length;) f = !0, k.modElem = i(h.shift()), k.style = k.modElem.style;
            for (v = e.length, d = 0; v > d; d++)
                if (m = e[d], y = k.style[m], l(m, "-") && (m = p(m)), k.style[m] !== r) {
                    if (s || o(n, "undefined")) return a(), "pfx" != t || m;
                    try {
                        k.style[m] = n
                    } catch (e) {}
                    if (k.style[m] != y) return a(), "pfx" != t || m
                } return a(), !1
        }

        function v(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }

        function m(e, t, n) {
            var r;
            for (var i in e)
                if (e[i] in t) return !1 === n ? e[i] : (r = t[e[i]], o(r, "function") ? v(r, n || t) : r);
            return !1
        }

        function y(e, t, n, r, i) {
            var s = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + z.join(s + " ") + s).split(" ");
            return o(t, "string") || o(t, "undefined") ? d(a, t, r, i) : (a = (e + " " + _.join(s + " ") + s).split(" "), m(a, t, n))
        }
        var h = [],
            g = {
                _version: "3.5.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function (e, t) {
                    var n = this;
                    setTimeout(function () {
                        t(n[e])
                    }, 0)
                },
                addTest: function (e, t, n) {
                    h.push({
                        name: e,
                        fn: t,
                        options: n
                    })
                },
                addAsyncTest: function (e) {
                    h.push({
                        name: null,
                        fn: e
                    })
                }
            },
            b = function () {};
        b.prototype = g, b = new b;
        var C = [],
            x = t.documentElement,
            S = "svg" === x.nodeName.toLowerCase(),
            w = "Moz O ms Webkit",
            _ = g._config.usePrefixes ? w.toLowerCase().split(" ") : [];
        g._domPrefixes = _;
        var T = function () {
            var e = !("onblur" in t.documentElement);
            return function (t, n) {
                var o;
                return !!t && (n && "string" != typeof n || (n = i(n || "div")), t = "on" + t, !(o = t in n) && e && (n.setAttribute || (n = i("div")), n.setAttribute(t, ""), o = "function" == typeof n[t], n[t] !== r && (n[t] = r), n.removeAttribute(t)), o)
            }
        }();
        g.hasEvent = T, b.addTest("pointerevents", function () {
            var e = !1,
                t = _.length;
            for (e = b.hasEvent("pointerdown"); t-- && !e;) T(_[t] + "pointerdown") && (e = !0);
            return e
        });
        var j = g._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        g._prefixes = j;
        var E = g.testStyles = a;
        b.addTest("touchevents", function () {
            var n;
            if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
            else {
                var r = ["@media (", j.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                E(r, function (e) {
                    n = 9 === e.offsetTop
                })
            }
            return n
        });
        var z = g._config.usePrefixes ? w.split(" ") : [];
        g._cssomPrefixes = z;
        var P = {
            elem: i("modernizr")
        };
        b._q.push(function () {
            delete P.elem
        });
        var k = {
            style: P.elem.style
        };
        b._q.unshift(function () {
            delete k.style
        }), g.testAllProps = y;
        var A = function (t) {
            var n, o = j.length,
                i = e.CSSRule;
            if (void 0 === i) return r;
            if (!t) return !1;
            if (t = t.replace(/^@/, ""), (n = t.replace(/-/g, "_").toUpperCase() + "_RULE") in i) return "@" + t;
            for (var s = 0; o > s; s++) {
                var a = j[s];
                if (a.toUpperCase() + "_" + n in i) return "@-" + a.toLowerCase() + "-" + t
            }
            return !1
        };
        g.atRule = A;
        var N = g.prefixed = function (e, t, n) {
            return 0 === e.indexOf("@") ? A(e) : (-1 != e.indexOf("-") && (e = p(e)), t ? y(e, t, n) : y(e, "pfx"))
        };
        b.addTest("objectfit", !!N("objectFit"), {
                aliases: ["object-fit"]
            }), b.addTest("csspositionsticky", function () {
                var e = "position:",
                    t = "sticky",
                    n = i("a").style;
                return n.cssText = e + j.join(t + ";" + e).slice(0, -e.length), -1 !== n.position.indexOf(t)
            }),
            function () {
                var e, t, n, r, i, s, a;
                for (var l in h)
                    if (h.hasOwnProperty(l)) {
                        if (e = [], (t = h[l]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                        for (r = o(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], 1 === (a = s.split(".")).length ? b[a[0]] = r : (!b[a[0]] || b[a[0]] instanceof Boolean || (b[a[0]] = new Boolean(b[a[0]])), b[a[0]][a[1]] = r), C.push((r ? "" : "no-") + a.join("-"))
                    }
            }(),
            function (e) {
                var t = x.className,
                    n = b._config.classPrefix || "";
                if (S && (t = t.baseVal), b._config.enableJSClass) {
                    var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                    t = t.replace(r, "$1" + n + "js$2")
                }
                b._config.enableClasses && (t += " " + n + e.join(" " + n), S ? x.className.baseVal = t : x.className = t)
            }(C), delete g.addTest, delete g.addAsyncTest;
        for (var L = 0; L < b._q.length; L++) b._q[L]();
        e.Modernizr = b
    }(window, document)
}]);