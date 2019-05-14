! function (t) {
    function e(n) {
        if (i[n]) {
            return i[n].exports
        }
        var r = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.p = "assets/js", e(0)
}(function (t) {
    for (var e in t) {
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            switch (typeof t[e]) {
                case "function":
                    break;
                case "object":
                    t[e] = function (e) {
                        var i = e.slice(1),
                            n = t[e[0]];
                        return function (t, e, r) {
                            n.apply(this, [t, e, r].concat(i))
                        }
                    }(t[e]);
                    break;
                default:
                    t[e] = t[t[e]]
            }
        }
    }
    return t
}([function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s() {
        var t = (0, p["default"])((window.location.search || "").slice(1).split("&").map(function (t) {
            var e = t.split("="),
                i = m(e, 2),
                n = i[0],
                r = i[1];
            return {
                name: n,
                value: r
            }
        }), function (t) {
            var e = t.name;
            t.value;
            return "noblock" === e
        });
        return "1" !== (0, f["default"])(t, "value")
    }

    function o(t, e) {
        var i = _["default"].browserVersion.split(".").filter(c["default"]).map(function (t) {
                return parseInt(t, 10)
            }),
            n = m(i, 3),
            r = n[0],
            s = (n[1], n[2], (0, f["default"])((0, p["default"])(k, function (e) {
                return e.name === t
            }), "minVersion"));
        return r >= s
    }

    function a(t, e) {
        var i = k.indexOf(_["default"].browserName) >= 0;
        return i || o(t, e)
    }

    function l() {
        var t = a(_["default"].browserName, _["default"].browserVersion);
        if (s() && (!_["default"].webgl || !t)) {
            return new T["default"](".main")
        }
        window.addEventListener("beforeunload", function () {
            S.scrollTo(0, 0)
        });
        var e = document.getElementById("appContainer");
        return new b["default"](e)
    }
    var u = i(1),
        c = r(u),
        h = i(2),
        f = r(h),
        d = i(54),
        p = r(d),
        m = function () {
            function t(t, e) {
                var i = [],
                    n = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0) {}
                } catch (l) {
                    r = !0, s = l
                } finally {
                    try {
                        !n && a["return"] && a["return"]()
                    } finally {
                        if (r) {
                            throw s
                        }
                    }
                }
                return i
            }
            return function (e, i) {
                if (Array.isArray(e)) {
                    return e
                }
                if (Symbol.iterator in Object(e)) {
                    return t(e, i)
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        v = i(117),
        g = r(v),
        y = i(142),
        _ = r(y),
        w = i(145),
        b = r(w),
        x = i(270),
        T = r(x),
        P = i(188),
        S = n(P);
    g["default"].shim();
    var k = ["Android Browser", {
        name: "Chrome",
        minVersion: 58
    }, {
        name: "Chromium",
        minVersion: 58
    }, {
        name: "Edge",
        minVersion: 14
    }, {
        name: "Firefox",
        minVersion: 54
    }, {
        name: "Mobile Safari",
        minVersion: 9
    }, {
        name: "Safari",
        minVersion: 9
    }, {
        name: "WebKit",
        minVersion: 600
    }, "Facebook"];
    l()
}, function (t, e) {
    function i(t) {
        return t
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e, i) {
        var n = null == t ? void 0 : r(t, e);
        return void 0 === n ? i : n
    }
    var r = i(3);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        e = r(e, t);
        for (var i = 0, n = e.length; null != t && i < n;) {
            t = t[s(e[i++])]
        }
        return i && i == n ? t : void 0
    }
    var r = i(4),
        s = i(53);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        return r(t) ? t : s(t, e) ? [t] : o(a(t))
    }
    var r = i(5),
        s = i(6),
        o = i(15),
        a = i(50);
    t.exports = n
}, function (t, e) {
    var i = Array.isArray;
    t.exports = i
}, function (t, e, i) {
    function n(t, e) {
        if (r(t)) {
            return !1
        }
        var i = typeof t;
        return !("number" != i && "symbol" != i && "boolean" != i && null != t && !s(t)) || (a.test(t) || !o.test(t) || null != e && t in Object(e))
    }
    var r = i(5),
        s = i(7),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return "symbol" == typeof t || s(t) && r(t) == o
    }
    var r = i(8),
        s = i(14),
        o = "[object Symbol]";
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return null == t ? void 0 === t ? l : a : (t = Object(t), u && u in t ? s(t) : o(t))
    }
    var r = i(9),
        s = i(12),
        o = i(13),
        a = "[object Null]",
        l = "[object Undefined]",
        u = r ? r.toStringTag : void 0;
    t.exports = n
}, function (t, e, i) {
    var n = i(10),
        r = n.Symbol;
    t.exports = r
}, function (t, e, i) {
    var n = i(11),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = n || r || Function("return this")();
    t.exports = s
}, function (t, e) {
    (function (e) {
        var i = "object" == typeof e && e && e.Object === Object && e;
        t.exports = i
    }).call(e, function () {
        return this
    }())
}, function (t, e, i) {
    function n(t) {
        var e = o.call(t, l),
            i = t[l];
        try {
            t[l] = void 0;
            var n = !0
        } catch (r) {}
        var s = a.call(t);
        return n && (e ? t[l] = i : delete t[l]), s
    }
    var r = i(9),
        s = Object.prototype,
        o = s.hasOwnProperty,
        a = s.toString,
        l = r ? r.toStringTag : void 0;
    t.exports = n
}, function (t, e) {
    function i(t) {
        return r.call(t)
    }
    var n = Object.prototype,
        r = n.toString;
    t.exports = i
}, function (t, e) {
    function i(t) {
        return null != t && "object" == typeof t
    }
    t.exports = i
}, function (t, e, i) {
    var n = i(16),
        r = /^\./,
        s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = n(function (t) {
            var e = [];
            return r.test(t) && e.push(""), t.replace(s, function (t, i, n, r) {
                e.push(n ? r.replace(o, "$1") : i || t)
            }), e
        });
    t.exports = a
}, function (t, e, i) {
    function n(t) {
        var e = r(t, function (t) {
                return i.size === s && i.clear(), t
            }),
            i = e.cache;
        return e
    }
    var r = i(17),
        s = 500;
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) {
            throw new TypeError(s)
        }
        var i = function () {
            var n = arguments,
                r = e ? e.apply(this, n) : n[0],
                s = i.cache;
            if (s.has(r)) {
                return s.get(r)
            }
            var o = t.apply(this, n);
            return i.cache = s.set(r, o) || s, o
        };
        return i.cache = new(n.Cache || r), i
    }
    var r = i(18),
        s = "Expected a function";
    n.Cache = r, t.exports = n
}, function (t, e, i) {
    function n(t) {
        var e = -1,
            i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    var r = i(19),
        s = i(44),
        o = i(47),
        a = i(48),
        l = i(49);
    n.prototype.clear = r, n.prototype["delete"] = s, n.prototype.get = o, n.prototype.has = a, n.prototype.set = l, t.exports = n
}, function (t, e, i) {
    function n() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || s),
            string: new r
        }
    }
    var r = i(20),
        s = i(35),
        o = i(43);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        var e = -1,
            i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    var r = i(21),
        s = i(31),
        o = i(32),
        a = i(33),
        l = i(34);
    n.prototype.clear = r, n.prototype["delete"] = s, n.prototype.get = o, n.prototype.has = a, n.prototype.set = l, t.exports = n
}, function (t, e, i) {
    function n() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
    var r = i(22);
    t.exports = n
}, function (t, e, i) {
    var n = i(23),
        r = n(Object, "create");
    t.exports = r
}, function (t, e, i) {
    function n(t, e) {
        var i = s(t, e);
        return r(i) ? i : void 0
    }
    var r = i(24),
        s = i(30);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        if (!o(t) || s(t)) {
            return !1
        }
        var e = r(t) ? p : u;
        return e.test(a(t))
    }
    var r = i(25),
        s = i(27),
        o = i(26),
        a = i(29),
        l = /[\\^$.*+?()[\]{}|]/g,
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        h = Object.prototype,
        f = c.toString,
        d = h.hasOwnProperty,
        p = RegExp("^" + f.call(d).replace(l, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        if (!s(t)) {
            return !1
        }
        var e = r(t);
        return e == a || e == l || e == o || e == u
    }
    var r = i(8),
        s = i(26),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        l = "[object GeneratorFunction]",
        u = "[object Proxy]";
    t.exports = n
}, function (t, e) {
    function i(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return !!s && s in t
    }
    var r = i(28),
        s = function () {
            var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
    t.exports = n
}, function (t, e, i) {
    var n = i(10),
        r = n["__core-js_shared__"];
    t.exports = r
}, function (t, e) {
    function i(t) {
        if (null != t) {
            try {
                return r.call(t)
            } catch (e) {}
            try {
                return t + ""
            } catch (e) {}
        }
        return ""
    }
    var n = Function.prototype,
        r = n.toString;
    t.exports = i
}, function (t, e) {
    function i(t, e) {
        return null == t ? void 0 : t[e]
    }
    t.exports = i
}, function (t, e) {
    function i(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        var e = this.__data__;
        if (r) {
            var i = e[t];
            return i === s ? void 0 : i
        }
        return a.call(e, t) ? e[t] : void 0
    }
    var r = i(22),
        s = "__lodash_hash_undefined__",
        o = Object.prototype,
        a = o.hasOwnProperty;
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : o.call(e, t)
    }
    var r = i(22),
        s = Object.prototype,
        o = s.hasOwnProperty;
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = r && void 0 === e ? s : e, this
    }
    var r = i(22),
        s = "__lodash_hash_undefined__";
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        var e = -1,
            i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    var r = i(36),
        s = i(37),
        o = i(40),
        a = i(41),
        l = i(42);
    n.prototype.clear = r, n.prototype["delete"] = s, n.prototype.get = o, n.prototype.has = a, n.prototype.set = l, t.exports = n
}, function (t, e) {
    function i() {
        this.__data__ = [], this.size = 0
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        var e = this.__data__,
            i = r(e, t);
        if (i < 0) {
            return !1
        }
        var n = e.length - 1;
        return i == n ? e.pop() : o.call(e, i, 1), --this.size, !0
    }
    var r = i(38),
        s = Array.prototype,
        o = s.splice;
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        for (var i = t.length; i--;) {
            if (r(t[i][0], e)) {
                return i
            }
        }
        return -1
    }
    var r = i(39);
    t.exports = n
}, function (t, e) {
    function i(t, e) {
        return t === e || t !== t && e !== e
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        var e = this.__data__,
            i = r(e, t);
        return i < 0 ? void 0 : e[i][1]
    }
    var r = i(38);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return r(this.__data__, t) > -1
    }
    var r = i(38);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        var i = this.__data__,
            n = r(i, t);
        return n < 0 ? (++this.size, i.push([t, e])) : i[n][1] = e, this
    }
    var r = i(38);
    t.exports = n
}, function (t, e, i) {
    var n = i(23),
        r = i(10),
        s = n(r, "Map");
    t.exports = s
}, function (t, e, i) {
    function n(t) {
        var e = r(this, t)["delete"](t);
        return this.size -= e ? 1 : 0, e
    }
    var r = i(45);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        var i = t.__data__;
        return r(e) ? i["string" == typeof e ? "string" : "hash"] : i.map
    }
    var r = i(46);
    t.exports = n
}, function (t, e) {
    function i(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return r(this, t).get(t)
    }
    var r = i(45);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return r(this, t).has(t)
    }
    var r = i(45);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        var i = r(this, t),
            n = i.size;
        return i.set(t, e), this.size += i.size == n ? 0 : 1, this
    }
    var r = i(45);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return null == t ? "" : r(t)
    }
    var r = i(51);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        if ("string" == typeof t) {
            return t
        }
        if (o(t)) {
            return s(t, n) + ""
        }
        if (a(t)) {
            return c ? c.call(t) : ""
        }
        var e = t + "";
        return "0" == e && 1 / t == -l ? "-0" : e
    }
    var r = i(9),
        s = i(52),
        o = i(5),
        a = i(7),
        l = 1 / 0,
        u = r ? r.prototype : void 0,
        c = u ? u.toString : void 0;
    t.exports = n
}, function (t, e) {
    function i(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length, r = Array(n); ++i < n;) {
            r[i] = e(t[i], i, t)
        }
        return r
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        if ("string" == typeof t || r(t)) {
            return t
        }
        var e = t + "";
        return "0" == e && 1 / t == -s ? "-0" : e
    }
    var r = i(7),
        s = 1 / 0;
    t.exports = n
}, function (t, e, i) {
    var n = i(55),
        r = i(112),
        s = n(r);
    t.exports = s
}, function (t, e, i) {
    function n(t) {
        return function (e, i, n) {
            var a = Object(e);
            if (!s(e)) {
                var l = r(i, 3);
                e = o(e), i = function (t) {
                    return l(a[t], t, a)
                }
            }
            var u = t(e, i, n);
            return u > -1 ? a[l ? e[u] : u] : void 0
        }
    }
    var r = i(56),
        s = i(96),
        o = i(78);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? s(t[0], t[1]) : r(t) : l(t)
    }
    var r = i(57),
        s = i(105),
        o = i(1),
        a = i(5),
        l = i(109);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        var e = s(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (i) {
            return i === t || r(i, t, e)
        }
    }
    var r = i(58),
        s = i(102),
        o = i(104);
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i, n) {
        var l = i.length,
            u = l,
            c = !n;
        if (null == t) {
            return !u
        }
        for (t = Object(t); l--;) {
            var h = i[l];
            if (c && h[2] ? h[1] !== t[h[0]] : !(h[0] in t)) {
                return !1
            }
        }
        for (; ++l < u;) {
            h = i[l];
            var f = h[0],
                d = t[f],
                p = h[1];
            if (c && h[2]) {
                if (void 0 === d && !(f in t)) {
                    return !1
                }
            } else {
                var m = new r;
                if (n) {
                    var v = n(d, p, f, t, e, m)
                }
                if (!(void 0 === v ? s(p, d, o | a, n, m) : v)) {
                    return !1
                }
            }
        }
        return !0
    }
    var r = i(59),
        s = i(65),
        o = 1,
        a = 2;
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    var r = i(35),
        s = i(60),
        o = i(61),
        a = i(62),
        l = i(63),
        u = i(64);
    n.prototype.clear = s, n.prototype["delete"] = o, n.prototype.get = a, n.prototype.has = l, n.prototype.set = u, t.exports = n
}, function (t, e, i) {
    function n() {
        this.__data__ = new r, this.size = 0
    }
    var r = i(35);
    t.exports = n
}, function (t, e) {
    function i(t) {
        var e = this.__data__,
            i = e["delete"](t);
        return this.size = e.size, i
    }
    t.exports = i
}, function (t, e) {
    function i(t) {
        return this.__data__.get(t)
    }
    t.exports = i
}, function (t, e) {
    function i(t) {
        return this.__data__.has(t)
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e) {
        var i = this.__data__;
        if (i instanceof r) {
            var n = i.__data__;
            if (!s || n.length < a - 1) {
                return n.push([t, e]), this.size = ++i.size, this
            }
            i = this.__data__ = new o(n)
        }
        return i.set(t, e), this.size = i.size, this
    }
    var r = i(35),
        s = i(43),
        o = i(18),
        a = 200;
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i, a, l) {
        return t === e || (null == t || null == e || !s(t) && !o(e) ? t !== t && e !== e : r(t, e, i, a, n, l))
    }
    var r = i(66),
        s = i(26),
        o = i(14);
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i, n, v, y) {
        var _ = u(t),
            w = u(e),
            b = p,
            x = p;
        _ || (b = l(t), b = b == d ? m : b), w || (x = l(e), x = x == d ? m : x);
        var T = b == m,
            P = x == m,
            S = b == x;
        if (S && c(t)) {
            if (!c(e)) {
                return !1
            }
            _ = !0, T = !1
        }
        if (S && !T) {
            return y || (y = new r), _ || h(t) ? s(t, e, i, n, v, y) : o(t, e, b, i, n, v, y)
        }
        if (!(i & f)) {
            var k = T && g.call(t, "__wrapped__"),
                M = P && g.call(e, "__wrapped__");
            if (k || M) {
                var E = k ? t.value() : t,
                    O = M ? e.value() : e;
                return y || (y = new r), v(E, O, i, n, y)
            }
        }
        return !!S && (y || (y = new r), a(t, e, i, n, v, y))
    }
    var r = i(59),
        s = i(67),
        o = i(73),
        a = i(77),
        l = i(97),
        u = i(5),
        c = i(83),
        h = i(87),
        f = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        m = "[object Object]",
        v = Object.prototype,
        g = v.hasOwnProperty;
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i, n, u, c) {
        var h = i & a,
            f = t.length,
            d = e.length;
        if (f != d && !(h && d > f)) {
            return !1
        }
        var p = c.get(t);
        if (p && c.get(e)) {
            return p == e
        }
        var m = -1,
            v = !0,
            g = i & l ? new r : void 0;
        for (c.set(t, e), c.set(e, t); ++m < f;) {
            var y = t[m],
                _ = e[m];
            if (n) {
                var w = h ? n(_, y, m, e, t, c) : n(y, _, m, t, e, c)
            }
            if (void 0 !== w) {
                if (w) {
                    continue
                }
                v = !1;
                break
            }
            if (g) {
                if (!s(e, function (t, e) {
                        if (!o(g, e) && (y === t || u(y, t, i, n, c))) {
                            return g.push(e)
                        }
                    })) {
                    v = !1;
                    break
                }
            } else {
                if (y !== _ && !u(y, _, i, n, c)) {
                    v = !1;
                    break
                }
            }
        }
        return c["delete"](t), c["delete"](e), v
    }
    var r = i(68),
        s = i(71),
        o = i(72),
        a = 1,
        l = 2;
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        var e = -1,
            i = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < i;) {
            this.add(t[e])
        }
    }
    var r = i(18),
        s = i(69),
        o = i(70);
    n.prototype.add = n.prototype.push = s, n.prototype.has = o, t.exports = n
}, function (t, e) {
    function i(t) {
        return this.__data__.set(t, n), this
    }
    var n = "__lodash_hash_undefined__";
    t.exports = i
}, function (t, e) {
    function i(t) {
        return this.__data__.has(t)
    }
    t.exports = i
}, function (t, e) {
    function i(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length; ++i < n;) {
            if (e(t[i], i, t)) {
                return !0
            }
        }
        return !1
    }
    t.exports = i
}, function (t, e) {
    function i(t, e) {
        return t.has(e)
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e, i, n, r, T, S) {
        switch (i) {
            case x:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) {
                    return !1
                }
                t = t.buffer, e = e.buffer;
            case b:
                return !(t.byteLength != e.byteLength || !T(new s(t), new s(e)));
            case f:
            case d:
            case v:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case g:
            case _:
                return t == e + "";
            case m:
                var k = l;
            case y:
                var M = n & c;
                if (k || (k = u), t.size != e.size && !M) {
                    return !1
                }
                var E = S.get(t);
                if (E) {
                    return E == e
                }
                n |= h, S.set(t, e);
                var O = a(k(t), k(e), n, r, T, S);
                return S["delete"](t), O;
            case w:
                if (P) {
                    return P.call(t) == P.call(e)
                }
        }
        return !1
    }
    var r = i(9),
        s = i(74),
        o = i(39),
        a = i(67),
        l = i(75),
        u = i(76),
        c = 1,
        h = 2,
        f = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        m = "[object Map]",
        v = "[object Number]",
        g = "[object RegExp]",
        y = "[object Set]",
        _ = "[object String]",
        w = "[object Symbol]",
        b = "[object ArrayBuffer]",
        x = "[object DataView]",
        T = r ? r.prototype : void 0,
        P = T ? T.valueOf : void 0;
    t.exports = n
}, function (t, e, i) {
    var n = i(10),
        r = n.Uint8Array;
    t.exports = r
}, function (t, e) {
    function i(t) {
        var e = -1,
            i = Array(t.size);
        return t.forEach(function (t, n) {
            i[++e] = [n, t]
        }), i
    }
    t.exports = i
}, function (t, e) {
    function i(t) {
        var e = -1,
            i = Array(t.size);
        return t.forEach(function (t) {
            i[++e] = t
        }), i
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e, i, n, o, l) {
        var u = i & s,
            c = r(t),
            h = c.length,
            f = r(e),
            d = f.length;
        if (h != d && !u) {
            return !1
        }
        for (var p = h; p--;) {
            var m = c[p];
            if (!(u ? m in e : a.call(e, m))) {
                return !1
            }
        }
        var v = l.get(t);
        if (v && l.get(e)) {
            return v == e
        }
        var g = !0;
        l.set(t, e), l.set(e, t);
        for (var y = u; ++p < h;) {
            m = c[p];
            var _ = t[m],
                w = e[m];
            if (n) {
                var b = u ? n(w, _, m, e, t, l) : n(_, w, m, t, e, l)
            }
            if (!(void 0 === b ? _ === w || o(_, w, i, n, l) : b)) {
                g = !1;
                break
            }
            y || (y = "constructor" == m)
        }
        if (g && !y) {
            var x = t.constructor,
                T = e.constructor;
            x != T && "constructor" in t && "constructor" in e && !("function" == typeof x && x instanceof x && "function" == typeof T && T instanceof T) && (g = !1)
        }
        return l["delete"](t), l["delete"](e), g
    }
    var r = i(78),
        s = 1,
        o = Object.prototype,
        a = o.hasOwnProperty;
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return o(t) ? r(t) : s(t)
    }
    var r = i(79),
        s = i(92),
        o = i(96);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        var i = o(t),
            n = !i && s(t),
            c = !i && !n && a(t),
            f = !i && !n && !c && u(t),
            d = i || n || c || f,
            p = d ? r(t.length, String) : [],
            m = p.length;
        for (var v in t) {
            !e && !h.call(t, v) || d && ("length" == v || c && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || l(v, m)) || p.push(v)
        }
        return p
    }
    var r = i(80),
        s = i(81),
        o = i(5),
        a = i(83),
        l = i(86),
        u = i(87),
        c = Object.prototype,
        h = c.hasOwnProperty;
    t.exports = n
}, function (t, e) {
    function i(t, e) {
        for (var i = -1, n = Array(t); ++i < t;) {
            n[i] = e(i)
        }
        return n
    }
    t.exports = i
}, function (t, e, i) {
    var n = i(82),
        r = i(14),
        s = Object.prototype,
        o = s.hasOwnProperty,
        a = s.propertyIsEnumerable,
        l = n(function () {
            return arguments
        }()) ? n : function (t) {
            return r(t) && o.call(t, "callee") && !a.call(t, "callee")
        };
    t.exports = l
}, function (t, e, i) {
    function n(t) {
        return s(t) && r(t) == o
    }
    var r = i(8),
        s = i(14),
        o = "[object Arguments]";
    t.exports = n
}, function (t, e, i) {
    (function (t) {
        var n = i(10),
            r = i(85),
            s = "object" == typeof e && e && !e.nodeType && e,
            o = s && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === s,
            l = a ? n.Buffer : void 0,
            u = l ? l.isBuffer : void 0,
            c = u || r;
        t.exports = c
    }).call(e, i(84)(t))
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function (t, e) {
    function i() {
        return !1
    }
    t.exports = i
}, function (t, e) {
    function i(t, e) {
        return e = null == e ? n : e, !!e && ("number" == typeof t || r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = i
}, function (t, e, i) {
    var n = i(88),
        r = i(90),
        s = i(91),
        o = s && s.isTypedArray,
        a = o ? r(o) : n;
    t.exports = a
}, function (t, e, i) {
    function n(t) {
        return o(t) && s(t.length) && !!R[r(t)]
    }
    var r = i(8),
        s = i(89),
        o = i(14),
        a = "[object Arguments]",
        l = "[object Array]",
        u = "[object Boolean]",
        c = "[object Date]",
        h = "[object Error]",
        f = "[object Function]",
        d = "[object Map]",
        p = "[object Number]",
        m = "[object Object]",
        v = "[object RegExp]",
        g = "[object Set]",
        y = "[object String]",
        _ = "[object WeakMap]",
        w = "[object ArrayBuffer]",
        b = "[object DataView]",
        x = "[object Float32Array]",
        T = "[object Float64Array]",
        P = "[object Int8Array]",
        S = "[object Int16Array]",
        k = "[object Int32Array]",
        M = "[object Uint8Array]",
        E = "[object Uint8ClampedArray]",
        O = "[object Uint16Array]",
        A = "[object Uint32Array]",
        R = {};
    R[x] = R[T] = R[P] = R[S] = R[k] = R[M] = R[E] = R[O] = R[A] = !0, R[a] = R[l] = R[w] = R[u] = R[b] = R[c] = R[h] = R[f] = R[d] = R[p] = R[m] = R[v] = R[g] = R[y] = R[_] = !1, t.exports = n
}, function (t, e) {
    function i(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
    var n = 9007199254740991;
    t.exports = i
}, function (t, e) {
    function i(t) {
        return function (e) {
            return t(e)
        }
    }
    t.exports = i
}, function (t, e, i) {
    (function (t) {
        var n = i(11),
            r = "object" == typeof e && e && !e.nodeType && e,
            s = r && "object" == typeof t && t && !t.nodeType && t,
            o = s && s.exports === r,
            a = o && n.process,
            l = function () {
                try {
                    return a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = l
    }).call(e, i(84)(t))
}, function (t, e, i) {
    function n(t) {
        if (!r(t)) {
            return s(t)
        }
        var e = [];
        for (var i in Object(t)) {
            a.call(t, i) && "constructor" != i && e.push(i)
        }
        return e
    }
    var r = i(93),
        s = i(94),
        o = Object.prototype,
        a = o.hasOwnProperty;
    t.exports = n
}, function (t, e) {
    function i(t) {
        var e = t && t.constructor,
            i = "function" == typeof e && e.prototype || n;
        return t === i
    }
    var n = Object.prototype;
    t.exports = i
}, function (t, e, i) {
    var n = i(95),
        r = n(Object.keys, Object);
    t.exports = r
}, function (t, e) {
    function i(t, e) {
        return function (i) {
            return t(e(i))
        }
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return null != t && s(t.length) && !r(t)
    }
    var r = i(25),
        s = i(89);
    t.exports = n
}, function (t, e, i) {
    var n = i(98),
        r = i(43),
        s = i(99),
        o = i(100),
        a = i(101),
        l = i(8),
        u = i(29),
        c = "[object Map]",
        h = "[object Object]",
        f = "[object Promise]",
        d = "[object Set]",
        p = "[object WeakMap]",
        m = "[object DataView]",
        v = u(n),
        g = u(r),
        y = u(s),
        _ = u(o),
        w = u(a),
        b = l;
    (n && b(new n(new ArrayBuffer(1))) != m || r && b(new r) != c || s && b(s.resolve()) != f || o && b(new o) != d || a && b(new a) != p) && (b = function (t) {
        var e = l(t),
            i = e == h ? t.constructor : void 0,
            n = i ? u(i) : "";
        if (n) {
            switch (n) {
                case v:
                    return m;
                case g:
                    return c;
                case y:
                    return f;
                case _:
                    return d;
                case w:
                    return p
            }
        }
        return e
    }), t.exports = b
}, function (t, e, i) {
    var n = i(23),
        r = i(10),
        s = n(r, "DataView");
    t.exports = s
}, function (t, e, i) {
    var n = i(23),
        r = i(10),
        s = n(r, "Promise");
    t.exports = s
}, function (t, e, i) {
    var n = i(23),
        r = i(10),
        s = n(r, "Set");
    t.exports = s
}, function (t, e, i) {
    var n = i(23),
        r = i(10),
        s = n(r, "WeakMap");
    t.exports = s
}, function (t, e, i) {
    function n(t) {
        for (var e = s(t), i = e.length; i--;) {
            var n = e[i],
                o = t[n];
            e[i] = [n, o, r(o)]
        }
        return e
    }
    var r = i(103),
        s = i(78);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return t === t && !r(t)
    }
    var r = i(26);
    t.exports = n
}, function (t, e) {
    function i(t, e) {
        return function (i) {
            return null != i && (i[t] === e && (void 0 !== e || t in Object(i)))
        }
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e) {
        return a(t) && l(e) ? u(c(t), e) : function (i) {
            var n = s(i, t);
            return void 0 === n && n === e ? o(i, t) : r(e, n, h | f)
        }
    }
    var r = i(65),
        s = i(2),
        o = i(106),
        a = i(6),
        l = i(103),
        u = i(104),
        c = i(53),
        h = 1,
        f = 2;
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        return null != t && s(t, e, r)
    }
    var r = i(107),
        s = i(108);
    t.exports = n
}, function (t, e) {
    function i(t, e) {
        return null != t && e in Object(t)
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e, i) {
        e = r(e, t);
        for (var n = -1, c = e.length, h = !1; ++n < c;) {
            var f = u(e[n]);
            if (!(h = null != t && i(t, f))) {
                break
            }
            t = t[f]
        }
        return h || ++n != c ? h : (c = null == t ? 0 : t.length, !!c && l(c) && a(f, c) && (o(t) || s(t)))
    }
    var r = i(4),
        s = i(81),
        o = i(5),
        a = i(86),
        l = i(89),
        u = i(53);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        return o(t) ? r(a(t)) : s(t)
    }
    var r = i(110),
        s = i(111),
        o = i(6),
        a = i(53);
    t.exports = n
}, function (t, e) {
    function i(t) {
        return function (e) {
            return null == e ? void 0 : e[t]
        }
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return function (e) {
            return r(e, t)
        }
    }
    var r = i(3);
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i) {
        var n = null == t ? 0 : t.length;
        if (!n) {
            return -1
        }
        var l = null == i ? 0 : o(i);
        return l < 0 && (l = a(n + l, 0)), r(t, s(e, 3), l)
    }
    var r = i(113),
        s = i(56),
        o = i(114),
        a = Math.max;
    t.exports = n
}, function (t, e) {
    function i(t, e, i, n) {
        for (var r = t.length, s = i + (n ? 1 : -1); n ? s-- : ++s < r;) {
            if (e(t[s], s, t)) {
                return s
            }
        }
        return -1
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        var e = r(t),
            i = e % 1;
        return e === e ? i ? e - i : e : 0
    }
    var r = i(115);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        if (!t) {
            return 0 === t ? t : 0
        }
        if (t = r(t), t === s || t === -s) {
            var e = t < 0 ? -1 : 1;
            return e * o
        }
        return t === t ? t : 0
    }
    var r = i(116),
        s = 1 / 0,
        o = 1.7976931348623157e+308;
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        if ("number" == typeof t) {
            return t
        }
        if (s(t)) {
            return o
        }
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) {
            return 0 === t ? t : +t
        }
        t = t.replace(a, "");
        var i = u.test(t);
        return i || c.test(t) ? h(t.slice(2), i ? 2 : 8) : l.test(t) ? o : +t
    }
    var r = i(26),
        s = i(7),
        o = NaN,
        a = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        h = parseInt;
    t.exports = n
}, function (t, e, i) {
    var n = i(118),
        r = i(122),
        s = i(140),
        o = i(141),
        a = function (t) {
            return r.apply(this || Array, arguments)
        };
    n(a, {
        getPolyfill: s,
        implementation: r,
        shim: o
    }), t.exports = a
}, function (t, e, i) {
    var n = i(119),
        r = i(121),
        s = "function" == typeof Symbol && "symbol" == typeof Symbol(),
        o = Object.prototype.toString,
        a = function (t) {
            return "function" == typeof t && "[object Function]" === o.call(t)
        },
        l = function () {
            var t = {};
            try {
                Object.defineProperty(t, "x", {
                    enumerable: !1,
                    value: t
                });
                for (var e in t) {
                    return !1
                }
                return t.x === t
            } catch (i) {
                return !1
            }
        },
        u = Object.defineProperty && l(),
        c = function (t, e, i, n) {
            (!(e in t) || a(n) && n()) && (u ? Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: i,
                writable: !0
            }) : t[e] = i)
        },
        h = function (t, e) {
            var i = arguments.length > 2 ? arguments[2] : {},
                o = n(e);
            s && (o = o.concat(Object.getOwnPropertySymbols(e))), r(o, function (n) {
                c(t, n, e[n], i[n])
            })
        };
    h.supportsDescriptors = !!u, t.exports = h
}, function (t, e, i) {
    var n = Object.prototype.hasOwnProperty,
        r = Object.prototype.toString,
        s = Array.prototype.slice,
        o = i(120),
        a = Object.prototype.propertyIsEnumerable,
        l = !a.call({
            toString: null
        }, "toString"),
        u = a.call(function () {}, "prototype"),
        c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        h = function (t) {
            var e = t.constructor;
            return e && e.prototype === t
        },
        f = {
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        },
        d = function () {
            if ("undefined" == typeof window) {
                return !1
            }
            for (var t in window) {
                try {
                    if (!f["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) {
                        try {
                            h(window[t])
                        } catch (e) {
                            return !0
                        }
                    }
                } catch (e) {
                    return !0
                }
            }
            return !1
        }(),
        p = function (t) {
            if ("undefined" == typeof window || !d) {
                return h(t)
            }
            try {
                return h(t)
            } catch (e) {
                return !1
            }
        },
        m = function (t) {
            var e = null !== t && "object" == typeof t,
                i = "[object Function]" === r.call(t),
                s = o(t),
                a = e && "[object String]" === r.call(t),
                h = [];
            if (!e && !i && !s) {
                throw new TypeError("Object.keys called on a non-object")
            }
            var f = u && i;
            if (a && t.length > 0 && !n.call(t, 0)) {
                for (var d = 0; d < t.length; ++d) {
                    h.push(String(d))
                }
            }
            if (s && t.length > 0) {
                for (var m = 0; m < t.length; ++m) {
                    h.push(String(m))
                }
            } else {
                for (var v in t) {
                    f && "prototype" === v || !n.call(t, v) || h.push(String(v))
                }
            }
            if (l) {
                for (var g = p(t), y = 0; y < c.length; ++y) {
                    g && "constructor" === c[y] || !n.call(t, c[y]) || h.push(c[y])
                }
            }
            return h
        };
    m.shim = function () {
        if (Object.keys) {
            var t = function () {
                return 2 === (Object.keys(arguments) || "").length
            }(1, 2);
            if (!t) {
                var e = Object.keys;
                Object.keys = function (t) {
                    return e(o(t) ? s.call(t) : t)
                }
            }
        } else {
            Object.keys = m
        }
        return Object.keys || m
    }, t.exports = m
}, function (t, e) {
    var i = Object.prototype.toString;
    t.exports = function (t) {
        var e = i.call(t),
            n = "[object Arguments]" === e;
        return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === i.call(t.callee)), n
    }
}, function (t, e) {
    var i = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString;
    t.exports = function (t, e, r) {
        if ("[object Function]" !== n.call(e)) {
            throw new TypeError("iterator must be a function")
        }
        var s = t.length;
        if (s === +s) {
            for (var o = 0; o < s; o++) {
                e.call(r, t[o], o, t)
            }
        } else {
            for (var a in t) {
                i.call(t, a) && e.call(r, t[a], a, t)
            }
        }
    }
}, function (t, e, i) {
    var n = i(123),
        r = i(118).supportsDescriptors;
    t.exports = function (t) {
        var e = r ? Object.defineProperty : function (t, e, i) {
                t[e] = i.value
            },
            i = this;
        if (null === t || "undefined" == typeof t) {
            throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`")
        }
        var s, o, a = n.ToObject(t);
        if ("undefined" != typeof arguments[1]) {
            if (s = arguments[1], !n.IsCallable(s)) {
                throw new TypeError("When provided, the second argument to `Array.from` must be a function")
            }
            arguments.length > 2 && (o = arguments[2])
        }
        for (var l, u, c = n.ToLength(a.length), h = n.IsCallable(i) ? n.ToObject(new i(c)) : new Array(c), f = 0; f < c;) {
            l = a[f], u = s ? "undefined" == typeof o ? s(l, f) : n.Call(s, o, [l, f]) : l, e(h, f, {
                configurable: !0,
                enumerable: !0,
                value: u,
                writable: !0
            }), f += 1
        }
        return h.length = c, h
    }
}, function (t, e, i) {
    var n = Object.prototype.toString,
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        s = r ? Symbol.prototype.toString : n,
        o = i(124),
        a = i(125),
        l = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
        u = i(126),
        c = i(127),
        h = i(128),
        f = i(129),
        d = i(130),
        p = parseInt,
        m = i(135),
        v = m.call(Function.call, String.prototype.slice),
        g = m.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i),
        y = m.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i),
        _ = ["", "", "￾"].join(""),
        w = new RegExp("[" + _ + "]", "g"),
        b = m.call(Function.call, RegExp.prototype.test, w),
        x = /^[\-\+]0x[0-9a-f]+$/i,
        T = m.call(Function.call, RegExp.prototype.test, x),
        P = ["\t\n\x0B\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
        S = new RegExp("(^[" + P + "]+)|([" + P + "]+$)", "g"),
        k = m.call(Function.call, String.prototype.replace),
        M = function (t) {
            return k(t, S, "")
        },
        E = i(137),
        O = i(139),
        A = u(u({}, E), {
            Call: function (t, e) {
                var i = arguments.length > 2 ? arguments[2] : [];
                if (!this.IsCallable(t)) {
                    throw new TypeError(t + " is not a function")
                }
                return t.apply(e, i)
            },
            ToPrimitive: d,
            ToNumber: function (t) {
                var e = f(t) ? t : d(t, "number");
                if ("symbol" == typeof e) {
                    throw new TypeError("Cannot convert a Symbol value to a number")
                }
                if ("string" == typeof e) {
                    if (g(e)) {
                        return this.ToNumber(p(v(e, 2), 2))
                    }
                    if (y(e)) {
                        return this.ToNumber(p(v(e, 2), 8))
                    }
                    if (b(e) || T(e)) {
                        return NaN
                    }
                    var i = M(e);
                    if (i !== e) {
                        return this.ToNumber(i)
                    }
                }
                return Number(e)
            },
            ToInt16: function (t) {
                var e = this.ToUint16(t);
                return e >= 32768 ? e - 65536 : e
            },
            ToInt8: function (t) {
                var e = this.ToUint8(t);
                return e >= 128 ? e - 256 : e
            },
            ToUint8: function (t) {
                var e = this.ToNumber(t);
                if (o(e) || 0 === e || !a(e)) {
                    return 0
                }
                var i = c(e) * Math.floor(Math.abs(e));
                return h(i, 256)
            },
            ToUint8Clamp: function (t) {
                var e = this.ToNumber(t);
                if (o(e) || e <= 0) {
                    return 0
                }
                if (e >= 255) {
                    return 255
                }
                var i = Math.floor(t);
                return i + 0.5 < e ? i + 1 : e < i + 0.5 ? i : i % 2 !== 0 ? i + 1 : i
            },
            ToString: function (t) {
                if ("symbol" == typeof t) {
                    throw new TypeError("Cannot convert a Symbol value to a string")
                }
                return String(t)
            },
            ToObject: function (t) {
                return this.RequireObjectCoercible(t), Object(t)
            },
            ToPropertyKey: function (t) {
                var e = this.ToPrimitive(t, String);
                return "symbol" == typeof e ? s.call(e) : this.ToString(e)
            },
            ToLength: function (t) {
                var e = this.ToInteger(t);
                return e <= 0 ? 0 : e > l ? l : e
            },
            CanonicalNumericIndexString: function (t) {
                if ("[object String]" !== n.call(t)) {
                    throw new TypeError("must be a string")
                }
                if ("-0" === t) {
                    return -0
                }
                var e = this.ToNumber(t);
                return this.SameValue(this.ToString(e), t) ? e : void 0
            },
            RequireObjectCoercible: E.CheckObjectCoercible,
            IsArray: Array.isArray || function (t) {
                return "[object Array]" === n.call(t)
            },
            IsConstructor: function (t) {
                return "function" == typeof t && !!t.prototype
            },
            IsExtensible: function (t) {
                return !Object.preventExtensions || !f(t) && Object.isExtensible(t)
            },
            IsInteger: function (t) {
                if ("number" != typeof t || o(t) || !a(t)) {
                    return !1
                }
                var e = Math.abs(t);
                return Math.floor(e) === e
            },
            IsPropertyKey: function (t) {
                return "string" == typeof t || "symbol" == typeof t
            },
            IsRegExp: function (t) {
                if (!t || "object" != typeof t) {
                    return !1
                }
                if (r) {
                    var e = t[Symbol.match];
                    if ("undefined" != typeof e) {
                        return E.ToBoolean(e)
                    }
                }
                return O(t)
            },
            SameValueZero: function (t, e) {
                return t === e || o(t) && o(e)
            },
            Type: function (t) {
                return "symbol" == typeof t ? "Symbol" : E.Type(t)
            },
            SpeciesConstructor: function (t, e) {
                if ("Object" !== this.Type(t)) {
                    throw new TypeError("Assertion failed: Type(O) is not Object")
                }
                var i = t.constructor;
                if ("undefined" == typeof i) {
                    return e
                }
                if ("Object" !== this.Type(i)) {
                    throw new TypeError("O.constructor is not an Object")
                }
                var n = r && Symbol.species ? i[Symbol.species] : void 0;
                if (null == n) {
                    return e
                }
                if (this.IsConstructor(n)) {
                    return n
                }
                throw new TypeError("no constructor found")
            }
        });
    delete A.CheckObjectCoercible, t.exports = A
}, function (t, e) {
    t.exports = Number.isNaN || function (t) {
        return t !== t
    }
}, function (t, e) {
    var i = Number.isNaN || function (t) {
        return t !== t
    };
    t.exports = Number.isFinite || function (t) {
        return "number" == typeof t && !i(t) && t !== 1 / 0 && t !== -(1 / 0)
    }
}, function (t, e) {
    var i = Object.prototype.hasOwnProperty;
    t.exports = Object.assign || function (t, e) {
        for (var n in e) {
            i.call(e, n) && (t[n] = e[n])
        }
        return t
    }
}, function (t, e) {
    t.exports = function (t) {
        return t >= 0 ? 1 : -1
    }
}, function (t, e) {
    t.exports = function (t, e) {
        var i = t % e;
        return Math.floor(i >= 0 ? i : i + e)
    }
}, function (t, e) {
    t.exports = function (t) {
        return null === t || "function" != typeof t && "object" != typeof t
    }
}, function (t, e, i) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        r = i(131),
        s = i(132),
        o = i(133),
        a = i(134),
        l = function (t, e) {
            if ("undefined" == typeof t || null === t) {
                throw new TypeError("Cannot call method on " + t)
            }
            if ("string" != typeof e || "number" !== e && "string" !== e) {
                throw new TypeError('hint must be "string" or "number"')
            }
            var i, n, o, a = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (o = 0; o < a.length; ++o) {
                if (i = t[a[o]], s(i) && (n = i.call(t), r(n))) {
                    return n
                }
            }
            throw new TypeError("No default value")
        },
        u = function (t, e) {
            var i = t[e];
            if (null !== i && "undefined" != typeof i) {
                if (!s(i)) {
                    throw new TypeError(i + " returned for property " + e + " of object " + t + " is not a function")
                }
                return i
            }
        };
    t.exports = function (t, e) {
        if (r(t)) {
            return t
        }
        var i = "default";
        arguments.length > 1 && (e === String ? i = "string" : e === Number && (i = "number"));
        var s;
        if (n && (Symbol.toPrimitive ? s = u(t, Symbol.toPrimitive) : a(t) && (s = Symbol.prototype.valueOf)), "undefined" != typeof s) {
            var c = s.call(t, i);
            if (r(c)) {
                return c
            }
            throw new TypeError("unable to convert exotic object to primitive")
        }
        return "default" === i && (o(t) || a(t)) && (i = "string"), l(t, "default" === i ? "number" : i)
    }
}, 129, function (t, e) {
    var i = Function.prototype.toString,
        n = /^\s*class /,
        r = function (t) {
            try {
                var e = i.call(t),
                    r = e.replace(/\/\/.*\n/g, ""),
                    s = r.replace(/\/\*[.\s\S]*\*\//g, ""),
                    o = s.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return n.test(o)
            } catch (a) {
                return !1
            }
        },
        s = function (t) {
            try {
                return !r(t) && (i.call(t), !0)
            } catch (e) {
                return !1
            }
        },
        o = Object.prototype.toString,
        a = "[object Function]",
        l = "[object GeneratorFunction]",
        u = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function (t) {
        if (!t) {
            return !1
        }
        if ("function" != typeof t && "object" != typeof t) {
            return !1
        }
        if (u) {
            return s(t)
        }
        if (r(t)) {
            return !1
        }
        var e = o.call(t);
        return e === a || e === l
    }
}, function (t, e) {
    var i = Date.prototype.getDay,
        n = function (t) {
            try {
                return i.call(t), !0
            } catch (e) {
                return !1
            }
        },
        r = Object.prototype.toString,
        s = "[object Date]",
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function (t) {
        return "object" == typeof t && null !== t && (o ? n(t) : r.call(t) === s)
    }
}, function (t, e) {
    var i = Object.prototype.toString,
        n = "function" == typeof Symbol && "symbol" == typeof Symbol();
    if (n) {
        var r = Symbol.prototype.toString,
            s = /^Symbol\(.*\)$/,
            o = function (t) {
                return "symbol" == typeof t.valueOf() && s.test(r.call(t))
            };
        t.exports = function (t) {
            if ("symbol" == typeof t) {
                return !0
            }
            if ("[object Symbol]" !== i.call(t)) {
                return !1
            }
            try {
                return o(t)
            } catch (e) {
                return !1
            }
        }
    } else {
        t.exports = function (t) {
            return !1
        }
    }
}, function (t, e, i) {
    var n = i(136);
    t.exports = Function.prototype.bind || n
}, function (t, e) {
    var i = "Function.prototype.bind called on incompatible ",
        n = Array.prototype.slice,
        r = Object.prototype.toString,
        s = "[object Function]";
    t.exports = function (t) {
        var e = this;
        if ("function" != typeof e || r.call(e) !== s) {
            throw new TypeError(i + e)
        }
        for (var o, a = n.call(arguments, 1), l = function () {
                if (this instanceof o) {
                    var i = e.apply(this, a.concat(n.call(arguments)));
                    return Object(i) === i ? i : this
                }
                return e.apply(t, a.concat(n.call(arguments)))
            }, u = Math.max(0, e.length - a.length), c = [], h = 0; h < u; h++) {
            c.push("$" + h)
        }
        if (o = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(l), e.prototype) {
            var f = function () {};
            f.prototype = e.prototype, o.prototype = new f, f.prototype = null
        }
        return o
    }
}, function (t, e, i) {
    var n = i(124),
        r = i(125),
        s = i(127),
        o = i(128),
        a = i(132),
        l = i(138),
        u = {
            ToPrimitive: l,
            ToBoolean: function (t) {
                return Boolean(t)
            },
            ToNumber: function (t) {
                return Number(t)
            },
            ToInteger: function (t) {
                var e = this.ToNumber(t);
                return n(e) ? 0 : 0 !== e && r(e) ? s(e) * Math.floor(Math.abs(e)) : e
            },
            ToInt32: function (t) {
                return this.ToNumber(t) >> 0
            },
            ToUint32: function (t) {
                return this.ToNumber(t) >>> 0
            },
            ToUint16: function (t) {
                var e = this.ToNumber(t);
                if (n(e) || 0 === e || !r(e)) {
                    return 0
                }
                var i = s(e) * Math.floor(Math.abs(e));
                return o(i, 65536)
            },
            ToString: function (t) {
                return String(t)
            },
            ToObject: function (t) {
                return this.CheckObjectCoercible(t), Object(t)
            },
            CheckObjectCoercible: function (t, e) {
                if (null == t) {
                    throw new TypeError(e || "Cannot call method on " + t)
                }
                return t
            },
            IsCallable: a,
            SameValue: function (t, e) {
                return t === e ? 0 !== t || 1 / t === 1 / e : n(t) && n(e)
            },
            Type: function (t) {
                return null === t ? "Null" : "undefined" == typeof t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
            }
        };
    t.exports = u
}, function (t, e, i) {
    var n = Object.prototype.toString,
        r = i(131),
        s = i(132),
        o = {
            "[[DefaultValue]]": function (t, e) {
                var i = e || ("[object Date]" === n.call(t) ? String : Number);
                if (i === String || i === Number) {
                    var o, a, l = i === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (a = 0; a < l.length; ++a) {
                        if (s(t[l[a]]) && (o = t[l[a]](), r(o))) {
                            return o
                        }
                    }
                    throw new TypeError("No default value")
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied")
            }
        };
    t.exports = function (t, e) {
        return r(t) ? t : o["[[DefaultValue]]"](t, e)
    }
}, function (t, e) {
    var i = RegExp.prototype.exec,
        n = function (t) {
            try {
                return i.call(t), !0
            } catch (e) {
                return !1
            }
        },
        r = Object.prototype.toString,
        s = "[object RegExp]",
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function (t) {
        return "object" == typeof t && (o ? n(t) : r.call(t) === s)
    }
}, function (t, e, i) {
    var n = i(123),
        r = i(122),
        s = function (t) {
            try {
                return t(), !0
            } catch (e) {
                return !1
            }
        };
    t.exports = function () {
        var t = n.IsCallable(Array.from) && s(function () {
            Array.from({
                length: -(1 / 0)
            })
        }) && !s(function () {
            Array.from([], void 0)
        });
        return t ? Array.from : r
    }
}, function (t, e, i) {
    var n = i(118),
        r = i(140);
    t.exports = function () {
        var t = r();
        return n(Array, {
            from: t
        }, {
            from: function () {
                return Array.from !== t
            }
        }), t
    }
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(143),
        s = n(r),
        o = new s["default"](window.navigator.userAgent);
    e["default"] = {
        canvas: !!window.CanvasRenderingContext2D,
        webgl: function () {
            try {
                var t = document.createElement("canvas");
                return !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
            } catch (e) {
                return !1
            }
        }(),
        workers: !!window.Worker,
        fileapi: window.File && window.FileReader && window.FileList && window.Blob,
        browserName: o.getBrowser().name,
        browserVersion: o.getBrowser().version,
        getWebGLErrorMessage: function () {
            var t = document.createElement("div");
            return t.id = "webgl-error-message", t.style.fontFamily = "monospace", t.style.fontSize = "13px", t.style.fontWeight = "normal", t.style.textAlign = "center", t.style.background = "#fff", t.style.color = "#000", t.style.padding = "1.5em", t.style.width = "400px", t.style.margin = "5em auto 0", this.webgl || (t.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000000">here</a>.'].join("\n")), t
        },
        addGetWebGLMessage: function (t) {
            var e, i, n;
            t = t || {}, e = void 0 !== t.parent ? t.parent : document.body, i = void 0 !== t.id ? t.id : "oldie", n = this.getWebGLErrorMessage(), n.id = i, e.appendChild(n)
        }
    }
}, function (t, e, i) {
    var n;
    ! function (r, s) {
        var o = "0.7.12",
            a = "",
            l = "?",
            u = "function",
            c = "undefined",
            h = "object",
            f = "string",
            d = "major",
            p = "model",
            m = "name",
            v = "type",
            g = "vendor",
            y = "version",
            _ = "architecture",
            w = "console",
            b = "mobile",
            x = "tablet",
            T = "smarttv",
            P = "wearable",
            S = "embedded",
            k = {
                extend: function (t, e) {
                    var i = {};
                    for (var n in t) {
                        e[n] && e[n].length % 2 === 0 ? i[n] = e[n].concat(t[n]) : i[n] = t[n]
                    }
                    return i
                },
                has: function (t, e) {
                    return "string" == typeof t && e.toLowerCase().indexOf(t.toLowerCase()) !== -1
                },
                lowerize: function (t) {
                    return t.toLowerCase()
                },
                major: function (t) {
                    return typeof t === f ? t.replace(/[^\d\.]/g, "").split(".")[0] : s
                },
                trim: function (t) {
                    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            M = {
                rgx: function () {
                    for (var t, e, i, n, r, o, a, l = 0, f = arguments; l < f.length && !o;) {
                        var d = f[l],
                            p = f[l + 1];
                        if (typeof t === c) {
                            t = {};
                            for (n in p) {
                                p.hasOwnProperty(n) && (r = p[n], typeof r === h ? t[r[0]] = s : t[r] = s)
                            }
                        }
                        for (e = i = 0; e < d.length && !o;) {
                            if (o = d[e++].exec(this.getUA())) {
                                for (n = 0; n < p.length; n++) {
                                    a = o[++i], r = p[n], typeof r === h && r.length > 0 ? 2 == r.length ? typeof r[1] == u ? t[r[0]] = r[1].call(this, a) : t[r[0]] = r[1] : 3 == r.length ? typeof r[1] !== u || r[1].exec && r[1].test ? t[r[0]] = a ? a.replace(r[1], r[2]) : s : t[r[0]] = a ? r[1].call(this, a, r[2]) : s : 4 == r.length && (t[r[0]] = a ? r[3].call(this, a.replace(r[1], r[2])) : s) : t[r] = a ? a : s
                                }
                            }
                        }
                        l += 2
                    }
                    return t
                },
                str: function (t, e) {
                    for (var i in e) {
                        if (typeof e[i] === h && e[i].length > 0) {
                            for (var n = 0; n < e[i].length; n++) {
                                if (k.has(e[i][n], t)) {
                                    return i === l ? s : i
                                }
                            }
                        } else {
                            if (k.has(e[i], t)) {
                                return i === l ? s : i
                            }
                        }
                    }
                    return t
                }
            },
            E = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            O = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [m, y],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [m, "Opera Mini"], y
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [m, "Opera"], y
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                    [m, y],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [m, "IE"], y
                    ],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    [m, y],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [m, "Yandex"], y
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [m, /_/g, " "], y
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [m, "WeChat"], y
                    ],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [y, [m, "MIUI Browser"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [m, /(.+)/, "$1 WebView"], y
                    ],
                    [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [y, [m, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [m, y],
                    [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [m, "UCBrowser"], y
                    ],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [m, "Dolphin"], y
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [m, "Chrome"], y
                    ],
                    [/;fbav\/([\w\.]+);/i],
                    [y, [m, "Facebook"]],
                    [/fxios\/([\w\.-]+)/i],
                    [y, [m, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [y, [m, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [y, m],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [m, [y, M.str, E.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [m, y],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [m, "Netscape"], y
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [m, y]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        [_, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [_, k.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [_, "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        [_, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        [_, /ower/, "", k.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [_, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        [_, k.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [p, g, [v, x]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [p, [g, "Apple"],
                        [v, x]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [p, "Apple TV"],
                        [g, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [g, p, [v, x]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [p, [g, "Amazon"],
                        [v, x]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        [p, M.str, E.device.amazon.model],
                        [g, "Amazon"],
                        [v, b]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [p, g, [v, b]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [p, [g, "Apple"],
                        [v, b]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [g, p, [v, b]],
                    [/\(bb10;\s(\w+)/i],
                    [p, [g, "BlackBerry"],
                        [v, b]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [p, [g, "Asus"],
                        [v, x]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [g, "Sony"],
                        [p, "Xperia Tablet"],
                        [v, x]
                    ],
                    [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                    [
                        [g, "Sony"],
                        [p, "Xperia Phone"],
                        [v, b]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [g, p, [v, w]],
                    [/android.+;\s(shield)\sbuild/i],
                    [p, [g, "Nvidia"],
                        [v, w]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [p, [g, "Sony"],
                        [v, w]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [g, M.str, E.device.sprint.vendor],
                        [p, M.str, E.device.sprint.model],
                        [v, b]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [g, p, [v, x]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    [g, [p, /_/g, " "],
                        [v, b]
                    ],
                    [/(nexus\s9)/i],
                    [p, [g, "HTC"],
                        [v, x]
                    ],
                    [/(nexus\s6p)/i],
                    [p, [g, "Huawei"],
                        [v, b]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [g, p, [v, b]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [p, [g, "Microsoft"],
                        [v, w]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [p, /\./g, " "],
                        [g, "Microsoft"],
                        [v, b]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [p, [g, "Motorola"],
                        [v, b]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [p, [g, "Motorola"],
                        [v, x]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [g, k.trim],
                        [p, k.trim],
                        [v, T]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [p, /^/, "SmartTV"],
                        [g, "Samsung"],
                        [v, T]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [p, [g, "Sharp"],
                        [v, T]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [g, "Samsung"], p, [v, x]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [g, [v, T], p],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        [g, "Samsung"], p, [v, b]
                    ],
                    [/sie-(\w+)*/i],
                    [p, [g, "Siemens"],
                        [v, b]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        [g, "Nokia"], p, [v, b]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [p, [g, "Acer"],
                        [v, x]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [g, "LG"], p, [v, x]
                    ],
                    [/(lg) netcast\.tv/i],
                    [g, p, [v, T]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    [p, [g, "LG"],
                        [v, b]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [p, [g, "Lenovo"],
                        [v, x]
                    ],
                    [/linux;.+((jolla));/i],
                    [g, p, [v, b]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [g, p, [v, P]],
                    [/android.+;\s(glass)\s\d/i],
                    [p, [g, "Google"],
                        [v, P]
                    ],
                    [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                    [
                        [p, /_/g, " "],
                        [g, "Xiaomi"],
                        [v, b]
                    ],
                    [/android.+a000(1)\s+build/i],
                    [p, [g, "OnePlus"],
                        [v, b]
                    ],
                    [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [v, k.lowerize], g, p
                    ]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [y, [m, "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [m, y],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [y, m]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [m, y],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [m, [y, M.str, E.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [m, "Windows"],
                        [y, M.str, E.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [m, "BlackBerry"], y
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                    [m, y],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [m, "Symbian"], y
                    ],
                    [/\((series40);/i],
                    [m],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [m, "Firefox OS"], y
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [m, y],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [m, "Chromium OS"], y
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [m, "Solaris"], y
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [m, y],
                    [/(haiku)\s(\w+)/i],
                    [m, y],
                    [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [m, "iOS"],
                        [y, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [m, "Mac OS"],
                        [y, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                    [m, y]
                ]
            },
            A = function (t, e) {
                if (!(this instanceof A)) {
                    return new A(t, e).getResult()
                }
                var i = t || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : a),
                    n = e ? k.extend(O, e) : O;
                return this.getBrowser = function () {
                    var t = M.rgx.apply(this, n.browser);
                    return t.major = k.major(t.version), t
                }, this.getCPU = function () {
                    return M.rgx.apply(this, n.cpu)
                }, this.getDevice = function () {
                    return M.rgx.apply(this, n.device)
                }, this.getEngine = function () {
                    return M.rgx.apply(this, n.engine)
                }, this.getOS = function () {
                    return M.rgx.apply(this, n.os)
                }, this.getResult = function () {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function () {
                    return i
                }, this.setUA = function (t) {
                    return i = t, this
                }, this
            };
        A.VERSION = o, A.BROWSER = {
            NAME: m,
            MAJOR: d,
            VERSION: y
        }, A.CPU = {
            ARCHITECTURE: _
        }, A.DEVICE = {
            MODEL: p,
            VENDOR: g,
            TYPE: v,
            CONSOLE: w,
            MOBILE: b,
            SMARTTV: T,
            TABLET: x,
            WEARABLE: P,
            EMBEDDED: S
        }, A.ENGINE = {
            NAME: m,
            VERSION: y
        }, A.OS = {
            NAME: m,
            VERSION: y
        }, typeof e !== c ? (typeof t !== c && t.exports && (e = t.exports = A), e.UAParser = A) : "function" === u && i(144) ? (n = function () {
            return A
        }.call(e, i, e, t), !(n !== s && (t.exports = n))) : r.UAParser = A;
        var R = r.jQuery || r.Zepto;
        if (typeof R !== c) {
            var C = new A;
            R.ua = C.getResult(), R.ua.get = function () {
                return C.getUA()
            }, R.ua.set = function (t) {
                C.setUA(t);
                var e = C.getResult();
                for (var i in e) {
                    R.ua[i] = e[i]
                }
            }
        }
    }("object" == typeof window ? window : this)
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(e, {})
}, function (t, e, i) {
    (function (t) {
        function n(t) {
            if (t && t.__esModule) {
                return t
            }
            var e = {};
            if (null != t) {
                for (var i in t) {
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
            }
            return e["default"] = t, e
        }

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) {
                    i[e] = t[e]
                }
                return i
            }
            return Array.from(t)
        }

        function o(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function a(t, e) {
            var i = {};
            for (var n in t) {
                e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n])
            }
            return i
        }

        function l() {
            return window.location.hash
        }

        function u() {
            return !(0, y["default"])(l())
        }

        function c(t, e, i) {
            return t.offsetTop <= e + i && t.offsetTop + t.height > e
        }

        function h(t, e) {
            var i = e.window.height,
                n = e.document.documentHeight,
                r = (0, v["default"])(t.map(function (t) {
                    var e = t.isInverted,
                        i = a(t, ["isInverted"]);
                    return w({
                        isInverted: !!e
                    }, i)
                }).filter(function (t) {
                    var e = t.name;
                    return e && e.length > 0
                }), function (t) {
                    return t.offsetTop
                });
            return {
                windowHeight: i,
                documentHeight: n,
                navItems: r
            }
        }

        function f(t) {
            return Modernizr.touchevents ? new D["default"]({
                selector: t
            }).beats : new L["default"]({
                selector: t
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var d = i(147),
            p = r(d),
            m = i(150),
            v = r(m),
            g = i(173),
            y = r(g),
            _ = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            w = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) {
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                }
                return t
            },
            b = i(174);
        i(175), i(176);
        var x = i(177),
            T = r(x),
            P = i(185),
            S = r(P),
            k = i(189),
            M = r(k),
            E = i(196),
            O = r(E),
            A = i(197),
            R = r(A),
            C = i(198),
            L = r(C),
            j = i(225),
            D = r(j),
            F = i(231),
            N = r(F),
            I = i(232),
            q = r(I),
            z = i(227),
            B = r(z),
            H = i(233),
            V = r(H),
            U = i(234),
            W = r(U),
            G = i(235),
            Y = r(G),
            X = i(236),
            $ = r(X),
            Z = i(237),
            Q = r(Z),
            J = i(238),
            K = r(J),
            tt = i(239),
            et = r(tt),
            it = i(242),
            nt = r(it),
            rt = i(243),
            st = r(rt),
            ot = i(244),
            at = r(ot),
            lt = i(246),
            ut = r(lt),
            ct = i(247),
            ht = r(ct),
            ft = i(248),
            dt = r(ft),
            pt = i(188),
            mt = n(pt),
            vt = i(249),
            gt = r(vt),
            yt = i(266),
            _t = r(yt),
            wt = i(222),
            bt = r(wt),
            xt = i(181),
            Tt = n(xt),
            Pt = "#introContainer",
            St = "#volcanoContainer",
            kt = "#dangerousContainer",
            Mt = "#predictiveContainer",
            Et = "#predictiveContainer2",
            Ot = "#rosesWindowContainer",
            At = "#architectureTitleContainer",
            Rt = "#judgementContainer",
            ZX = "#PointContainer",
            Ct = "#judgementContainer2",
            Lt = "#sensorTitle",
            jt = "#architectureContainer",
            Dt = "#lastJudgementContainer",
            Nt = "#olyContainer",
            It = "#eventContainer",
            qt = "#beginningContainer",
            zt = "#finalContainer",
            Bt = -1,
            Ht = 1,
            Vt = 5,
            Ut = function () {
                function e() {
                    var i = this;
                    o(this, e), this.handleBeatScroll = function (t, e) {
                        var n = i.scrollY,
                            r = i.getBeatProgress(e, n),
                            s = r.beatProgress,
                            o = t.canvas.querySelector(".beat--fixed--container");
                        o && (s >= 1 ? (o.classList.add("is-unlocked"), o.classList.add("is-exiting")) : s < 0 ? (o.classList.add("is-unlocked"), o.classList.remove("is-exiting")) : (o.classList.remove("is-unlocked"), o.classList.remove("is-exiting")))
                    }, this.handleTweenedBeatScroll = function (e, n) {
                        var r = i.state.scrollY,
                            s = i.getBeatProgress(n, r),
                            o = s.scrolledToView,
                            a = s.beatProgress,
                            l = s.beatProgressFull;
                        Bt <= l && l <= Ht && e.setProgress && e.setProgress(a, l), e.paused && o ? "function" == typeof e.play ? e.play() : "development" === t.env.NODE_ENV : e.paused || o || ("function" == typeof e.pause ? e.pause() : "development" === t.env.NODE_ENV)
                    }, this.handleJumpTo = function (t) {
                        i.setScroll(t, !1)
                    }, this.fScroll = function () {
                        if (!i.modalOpen) {
                            var t = mt.scrollY();
                            i.beats.forEach(function (e) {
                                e.handleScroll && "function" == typeof e.handleScroll && e.handleScroll(t)
                            })
                        }
                    }, this.handleReady = function () {
                        i.ready = !0;
                        var t = u() ? [] : i.loadSecondaryBeats();
                        Promise.all(t).then(function () {
                            u() && (i.handleResize(), i.handleScroll())
                        }), u() || (i.handleResize(), i.handleScroll())
                    }, this.ready = !1, this.didInitialScroll = !1, this.state = {
                        scrollY: 0
                    }, this.container = document.querySelector(".main"), this.nav = document.querySelector(".nav"), this.navigation = new gt["default"](this.nav), this.modalOpen = !1, new B["default"]({
                        onOpen: function () {
                            i.modalOpen = !0
                        },
                        onClose: function () {
                            i.modalOpen = !1
                        }
                    }), this.container.appendChild(this.nav), [].concat(s(document.querySelectorAll(".accent-line"))).forEach(function (t) {
                        var e = t.getAttribute("data-length"),
                            i = "auto" === e ? Math.floor(t.getBoundingClientRect().height) : parseInt(e, 10);
                        (0, _t["default"])({
                            container: t,
                            length: i
                        })
                    });
                    var n = f(Nt),
                        r = Array.isArray(n) ? n : [n];
                    this.beats = [new S["default"]({
                        selector: Pt
                    }), new O["default"]({
                        selector: Mt
                    }), new R["default"]({
                        selector: Et
                    }), new T["default"]({
                        selector: St
                    }), new M["default"], new q["default"]({
                        selector: At
                    }), new W["default"]({
                        selector: Ot
                    }), new V["default"]({
                        selector: kt
                    }), new Q["default"]({
                        selector: Lt
                    }), new $["default"]({
                        selector: jt
                    }), new Y["default"]({
                        selector: ".beat--team"
                    }), new N["default"]("#beat--enter-the-crater", {
                        name: "Disaster",
                        setsNavMarker: !0
                    }), new K["default"]({
                        selector: Dt
                    })].concat(s(r), [new nt["default"]({
                        selector: Rt
                    }), new st["default"]({
                        selector: Ct
                    }), new at["default"]({
                        selector: It
                    }), new ut["default"]({
                        selector: qt
                    }), new ht["default"]({
                        selector: zt
                    })]), new dt["default"], this.sizes = {
                        window: {},
                        beats: []
                    }, this.render(), this.bindListeners()
                }
                return _(e, [{
                    key: "bindListeners",
                    value: function () {
                        window.addEventListener("resize", (0, p["default"])(this.handleResize.bind(this), 50), !1), this.handleResize(), window.addEventListener("scroll", (0, p["default"])(this.handleScroll.bind(this), 30), !1), window.addEventListener("scroll", this.fScroll), window.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this), !1)
                    }
                }, {
                    key: "handleVisibilityChange",
                    value: function () {
                        var t = this,
                            e = mt.scrollY(),
                            i = this.sizes.window.height;
                        this.sizes.beats.forEach(function (n, r) {
                            if (c(n, e, i)) {
                                var s = t.beats[r];
                                document.hidden ? s.pause() : s.play()
                            }
                        })
                    }
                }, {
                    key: "handleResize",
                    value: function () {
                        var t = {
                                width: window.innerWidth,
                                height: window.innerHeight
                            },
                            e = {
                                height: document.body.getBoundingClientRect().height,
                                documentHeight: mt.getDocumentHeight()
                            },
                            i = this.beats.map(function (i) {
                                return "function" == typeof i.handleResize && i.handleResize(t, e), {
                                    offsetTop: i.canvas.offsetTop,
                                    height: i.canvas.getBoundingClientRect().height
                                }
                            }),
                            n = this.beats.reduce(function (t, e) {
                                return e.navMarkers ? t.concat(e.navMarkers) : t
                            }, []),
                            r = {
                                window: t,
                                document: e,
                                beats: i,
                                navMarkers: n
                            };
                        if (this.ready && this.sizes.document.documentHeight !== this.sizes.document.height && this.sizes.document.documentHeight !== r.document.documentHeight) {
                            var s = this.sizes.document.documentHeight - r.document.documentHeight,
                                o = s > 0 ? s : 0,
                                a = this.sizes.document.documentHeight / this.scrollY,
                                u = mt.getDocumentHeight() / a;
                            this.scrollY + r.window.height + o >= r.document.documentHeight ? window.scrollTo(0, r.document.documentHeight) : window.scrollTo(0, u)
                        }
                        this.sizes = r, this.ready && (this.handleScroll(), this.navigation.init(h(this.sizes.navMarkers, this.sizes), this.scrollY, this.handleJumpTo), this.didInitialScroll || (this.navigation.goTo(l()), this.didInitialScroll = !0))
                    }
                }, {
                    key: "getBeatProgress",
                    value: function (t, e) {
                        var i = this.sizes.beats[t],
                            n = i.offsetTop,
                            r = i.height,
                            s = this.sizes.window.height,
                            o = c(i, e, s),
                            a = Math.max(Bt, Math.min(Ht, (e - n) / (r - s))),
                            l = Math.max(Bt, Math.min(Ht, (e + s - n) / (r + s)));
                        return {
                            scrolledToView: o,
                            beatProgress: a,
                            beatProgressFull: l
                        }
                    }
                }, {
                    key: "setScroll",
                    value: function (t) {
                        var e = this,
                            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        window.Modernizr.csspositionsticky || this.beats.forEach(this.handleBeatScroll), this.tween && (this.tween.kill(), this.tween = null), i ? this.tween = new b.TweenLite(this.state, 0.5, {
                            scrollY: t,
                            onUpdate: function () {
                                e.beats.forEach(e.handleTweenedBeatScroll)
                            }
                        }) : (this.state.scrollY = t, this.beats.forEach(this.handleTweenedBeatScroll)), this.navigation.updateNavState(t)
                    }
                }, {
                    key: "handleScroll",
                    value: function () {
                        this.modalOpen || (this.scrollY = mt.scrollY(), this.setScroll(this.scrollY, !Tt.hasTouch()))
                    }
                }, {
                    key: "loadMainBeats",
                    value: function () {
                        return this.beats.slice(0, Vt).map(function (t) {
                            return t.load()
                        })
                    }
                }, {
                    key: "loadSecondaryBeats",
                    value: function () {
                        var t = Vt,
                            e = this.beats.slice(t).map(function (t) {
                                return t.load()
                            });
                        return e
                    }
                }, {
                    key: "render",
                    value: function () {
                        var t = this,
                            e = this.loadMainBeats();
                        u() ? Promise.all(e).then(function () {
                            var e = t.loadSecondaryBeats();
                            t.loader = new bt["default"]({
                                promises: e,
                                onReady: t.handleReady
                            })
                        }) : this.loader = new bt["default"]({
                            promises: e,
                            onReady: this.handleReady
                        })
                    }
                }]), e
            }();
        e["default"] = Ut
    }).call(e, i(146))
}, function (t, e) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (c === setTimeout) {
            return setTimeout(t, 0)
        }
        if ((c === i || !c) && setTimeout) {
            return c = setTimeout, setTimeout(t, 0)
        }
        try {
            return c(t, 0)
        } catch (e) {
            try {
                return c.call(null, t, 0)
            } catch (e) {
                return c.call(this, t, 0)
            }
        }
    }

    function s(t) {
        if (h === clearTimeout) {
            return clearTimeout(t)
        }
        if ((h === n || !h) && clearTimeout) {
            return h = clearTimeout, clearTimeout(t)
        }
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function o() {
        m && d && (m = !1, d.length ? p = d.concat(p) : v = -1, p.length && a())
    }

    function a() {
        if (!m) {
            var t = r(o);
            m = !0;
            for (var e = p.length; e;) {
                for (d = p, p = []; ++v < e;) {
                    d && d[v].run()
                }
                v = -1, e = p.length
            }
            d = null, m = !1, s(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function u() {}
    var c, h, f = t.exports = {};
    ! function () {
        try {
            c = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            c = i
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            h = n
        }
    }();
    var d, p = [],
        m = !1,
        v = -1;
    f.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                e[i - 1] = arguments[i]
            }
        }
        p.push(new l(t, e)), 1 !== p.length || m || r(a)
    }, l.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function () {
        return "/"
    }, f.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function () {
        return 0
    }
}, function (t, e, i) {
    function n(t, e, i) {
        var n = !0,
            a = !0;
        if ("function" != typeof t) {
            throw new TypeError(o)
        }
        return s(i) && (n = "leading" in i ? !!i.leading : n, a = "trailing" in i ? !!i.trailing : a), r(t, e, {
            leading: n,
            maxWait: e,
            trailing: a
        })
    }
    var r = i(148),
        s = i(26),
        o = "Expected a function";
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i) {
        function n(e) {
            var i = y,
                n = _;
            return y = _ = void 0, P = e, b = t.apply(n, i)
        }

        function c(t) {
            return P = t, x = setTimeout(d, e), S ? n(t) : b
        }

        function h(t) {
            var i = t - T,
                n = t - P,
                r = e - i;
            return k ? u(r, w - n) : r
        }

        function f(t) {
            var i = t - T,
                n = t - P;
            return void 0 === T || i >= e || i < 0 || k && n >= w
        }

        function d() {
            var t = s();
            return f(t) ? p(t) : void(x = setTimeout(d, h(t)))
        }

        function p(t) {
            return x = void 0, M && y ? n(t) : (y = _ = void 0, b)
        }

        function m() {
            void 0 !== x && clearTimeout(x), P = 0, y = T = _ = x = void 0
        }

        function v() {
            return void 0 === x ? b : p(s())
        }

        function g() {
            var t = s(),
                i = f(t);
            if (y = arguments, _ = this, T = t, i) {
                if (void 0 === x) {
                    return c(T)
                }
                if (k) {
                    return x = setTimeout(d, e), n(T)
                }
            }
            return void 0 === x && (x = setTimeout(d, e)), b
        }
        var y, _, w, b, x, T, P = 0,
            S = !1,
            k = !1,
            M = !0;
        if ("function" != typeof t) {
            throw new TypeError(a)
        }
        return e = o(e) || 0, r(i) && (S = !!i.leading, k = "maxWait" in i, w = k ? l(o(i.maxWait) || 0, e) : w, M = "trailing" in i ? !!i.trailing : M), g.cancel = m, g.flush = v, g
    }
    var r = i(26),
        s = i(149),
        o = i(116),
        a = "Expected a function",
        l = Math.max,
        u = Math.min;
    t.exports = n
}, function (t, e, i) {
    var n = i(10),
        r = function () {
            return n.Date.now()
        };
    t.exports = r
}, function (t, e, i) {
    var n = i(151),
        r = i(154),
        s = i(164),
        o = i(172),
        a = s(function (t, e) {
            if (null == t) {
                return []
            }
            var i = e.length;
            return i > 1 && o(t, e[0], e[1]) ? e = [] : i > 2 && o(e[0], e[1], e[2]) && (e = [e[0]]), r(t, n(e, 1), [])
        });
    t.exports = a
}, function (t, e, i) {
    function n(t, e, i, o, a) {
        var l = -1,
            u = t.length;
        for (i || (i = s), a || (a = []); ++l < u;) {
            var c = t[l];
            e > 0 && i(c) ? e > 1 ? n(c, e - 1, i, o, a) : r(a, c) : o || (a[a.length] = c)
        }
        return a
    }
    var r = i(152),
        s = i(153);
    t.exports = n
}, function (t, e) {
    function i(t, e) {
        for (var i = -1, n = e.length, r = t.length; ++i < n;) {
            t[r + i] = e[i]
        }
        return t
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return o(t) || s(t) || !!(a && t && t[a])
    }
    var r = i(9),
        s = i(81),
        o = i(5),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i) {
        var n = -1;
        e = r(e.length ? e : [c], l(s));
        var h = o(t, function (t, i, s) {
            var o = r(e, function (e) {
                return e(t)
            });
            return {
                criteria: o,
                index: ++n,
                value: t
            }
        });
        return a(h, function (t, e) {
            return u(t, e, i)
        })
    }
    var r = i(52),
        s = i(56),
        o = i(155),
        a = i(161),
        l = i(90),
        u = i(162),
        c = i(1);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        var i = -1,
            n = s(t) ? Array(t.length) : [];
        return r(t, function (t, r, s) {
            n[++i] = e(t, r, s)
        }), n
    }
    var r = i(156),
        s = i(96);
    t.exports = n
}, function (t, e, i) {
    var n = i(157),
        r = i(160),
        s = r(n);
    t.exports = s
}, function (t, e, i) {
    function n(t, e) {
        return t && r(t, e, s)
    }
    var r = i(158),
        s = i(78);
    t.exports = n
}, function (t, e, i) {
    var n = i(159),
        r = n();
    t.exports = r
}, function (t, e) {
    function i(t) {
        return function (e, i, n) {
            for (var r = -1, s = Object(e), o = n(e), a = o.length; a--;) {
                var l = o[t ? a : ++r];
                if (i(s[l], l, s) === !1) {
                    break
                }
            }
            return e
        }
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e) {
        return function (i, n) {
            if (null == i) {
                return i
            }
            if (!r(i)) {
                return t(i, n)
            }
            for (var s = i.length, o = e ? s : -1, a = Object(i);
                (e ? o-- : ++o < s) && n(a[o], o, a) !== !1;) {}
            return i
        }
    }
    var r = i(96);
    t.exports = n
}, function (t, e) {
    function i(t, e) {
        var i = t.length;
        for (t.sort(e); i--;) {
            t[i] = t[i].value
        }
        return t
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e, i) {
        for (var n = -1, s = t.criteria, o = e.criteria, a = s.length, l = i.length; ++n < a;) {
            var u = r(s[n], o[n]);
            if (u) {
                if (n >= l) {
                    return u
                }
                var c = i[n];
                return u * ("desc" == c ? -1 : 1)
            }
        }
        return t.index - e.index
    }
    var r = i(163);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        if (t !== e) {
            var i = void 0 !== t,
                n = null === t,
                s = t === t,
                o = r(t),
                a = void 0 !== e,
                l = null === e,
                u = e === e,
                c = r(e);
            if (!l && !c && !o && t > e || o && a && u && !l && !c || n && a && u || !i && u || !s) {
                return 1
            }
            if (!n && !o && !c && t < e || c && i && s && !n && !o || l && i && s || !a && s || !u) {
                return -1
            }
        }
        return 0
    }
    var r = i(7);
    t.exports = n
}, function (t, e, i) {
    function n(t, e) {
        return o(s(t, e, r), t + "")
    }
    var r = i(1),
        s = i(165),
        o = i(167);
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i) {
        return e = s(void 0 === e ? t.length - 1 : e, 0),
            function () {
                for (var n = arguments, o = -1, a = s(n.length - e, 0), l = Array(a); ++o < a;) {
                    l[o] = n[e + o]
                }
                o = -1;
                for (var u = Array(e + 1); ++o < e;) {
                    u[o] = n[o]
                }
                return u[e] = i(l), r(t, this, u)
            }
    }
    var r = i(166),
        s = Math.max;
    t.exports = n
}, function (t, e) {
    function i(t, e, i) {
        switch (i.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, i[0]);
            case 2:
                return t.call(e, i[0], i[1]);
            case 3:
                return t.call(e, i[0], i[1], i[2])
        }
        return t.apply(e, i)
    }
    t.exports = i
}, function (t, e, i) {
    var n = i(168),
        r = i(171),
        s = r(n);
    t.exports = s
}, function (t, e, i) {
    var n = i(169),
        r = i(170),
        s = i(1),
        o = r ? function (t, e) {
            return r(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(e),
                writable: !0
            })
        } : s;
    t.exports = o
}, function (t, e) {
    function i(t) {
        return function () {
            return t
        }
    }
    t.exports = i
}, function (t, e, i) {
    var n = i(23),
        r = function () {
            try {
                var t = n(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (e) {}
        }();
    t.exports = r
}, function (t, e) {
    function i(t) {
        var e = 0,
            i = 0;
        return function () {
            var o = s(),
                a = r - (o - i);
            if (i = o, a > 0) {
                if (++e >= n) {
                    return arguments[0]
                }
            } else {
                e = 0
            }
            return t.apply(void 0, arguments)
        }
    }
    var n = 800,
        r = 16,
        s = Date.now;
    t.exports = i
}, function (t, e, i) {
    function n(t, e, i) {
        if (!a(i)) {
            return !1
        }
        var n = typeof e;
        return !!("number" == n ? s(i) && o(e, i.length) : "string" == n && e in i) && r(i[e], t)
    }
    var r = i(39),
        s = i(96),
        o = i(86),
        a = i(26);
    t.exports = n
}, function (t, e, i) {
    function n(t) {
        if (null == t) {
            return !0
        }
        if (l(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || u(t) || h(t) || o(t))) {
            return !t.length
        }
        var e = s(t);
        if (e == f || e == d) {
            return !t.size
        }
        if (c(t)) {
            return !r(t).length
        }
        for (var i in t) {
            if (m.call(t, i)) {
                return !1
            }
        }
        return !0
    }
    var r = i(92),
        s = i(97),
        o = i(81),
        a = i(5),
        l = i(96),
        u = i(83),
        c = i(93),
        h = i(87),
        f = "[object Map]",
        d = "[object Set]",
        p = Object.prototype,
        m = p.hasOwnProperty;
    t.exports = n
}, function (t, e, i) {
    var n, r;
    (function (s) {
        var o = "undefined" != typeof t && t.exports && "undefined" != typeof s ? s : this || window;
        (o._gsQueue || (o._gsQueue = [])).push(function () {
                o._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                        var n = function (t) {
                                var e, i = [],
                                    n = t.length;
                                for (e = 0; e !== n; i.push(t[e++])) {}
                                return i
                            },
                            r = function (t, e, i) {
                                var n, r, s = t.cycle;
                                for (n in s) {
                                    r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]
                                }
                                delete t.cycle
                            },
                            s = function (t, e, n) {
                                i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                            },
                            o = 1e-10,
                            a = i._internals,
                            l = a.isSelector,
                            u = a.isArray,
                            c = s.prototype = i.to({}, 0.1, {}),
                            h = [];
                        s.version = "1.19.0", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function () {
                            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                        }, c.updateTo = function (t, e) {
                            var n, r = this.ratio,
                                s = this.vars.immediateRender || t.immediateRender;
                            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                            for (n in t) {
                                this.vars[n] = t[n]
                            }
                            if (this._initted || s) {
                                if (e) {
                                    this._initted = !1, s && this.render(0, !0, !0)
                                } else {
                                    if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998) {
                                        var o = this._totalTime;
                                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                                    } else {
                                        if (this._initted = !1, this._init(), this._time > 0 || s) {
                                            for (var a, l = 1 / (1 - r), u = this._firstPT; u;) {
                                                a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next
                                            }
                                        }
                                    }
                                }
                            }
                            return this
                        }, c.render = function (t, e, i) {
                            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                            var n, r, s, l, u, c, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                                p = this._time,
                                m = this._totalTime,
                                v = this._cycle,
                                g = this._duration,
                                y = this._rawPrevTime;
                            if (t >= d - 1e-7 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (y < 0 || t <= 0 && t >= -1e-7 || y === o && "isPause" !== this.data) && y !== t && (i = !0, y > o && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : o)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && y > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !e || t || y === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / g, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= 0.5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / g < 0.5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && v === this._cycle) {
                                return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")))
                            }
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) {
                                    return
                                }
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) {
                                    return this._time = p, this._totalTime = m, this._rawPrevTime = y, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e])
                                }
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== g || e || this._callback("onStart"))), s = this._firstPT; s;) {
                                s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next
                            }
                            this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || r) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === o && f !== o && (this._rawPrevTime = 0)))
                        }, s.to = function (t, e, i) {
                            return new s(t, e, i)
                        }, s.from = function (t, e, i) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                        }, s.fromTo = function (t, e, i, n) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                        }, s.staggerTo = s.allTo = function (t, e, o, a, c, f, d) {
                            a = a || 0;
                            var p, m, v, g, y = 0,
                                _ = [],
                                w = function () {
                                    o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(d || o.callbackScope || this, f || h)
                                },
                                b = o.cycle,
                                x = o.startAt && o.startAt.cycle;
                            for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], a < 0 && (t = n(t), t.reverse(), a *= -1), p = t.length - 1, v = 0; v <= p; v++) {
                                m = {};
                                for (g in o) {
                                    m[g] = o[g]
                                }
                                if (b && (r(m, t, v), null != m.duration && (e = m.duration, delete m.duration)), x) {
                                    x = m.startAt = {};
                                    for (g in o.startAt) {
                                        x[g] = o.startAt[g]
                                    }
                                    r(m.startAt, t, v)
                                }
                                m.delay = y + (m.delay || 0), v === p && c && (m.onComplete = w), _[v] = new s(t[v], e, m), y += a
                            }
                            return _
                        }, s.staggerFrom = s.allFrom = function (t, e, i, n, r, o, a) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                        }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, r, o, a, l) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                        }, s.delayedCall = function (t, e, i, n, r) {
                            return new s(e, 0, {
                                delay: t,
                                onComplete: e,
                                onCompleteParams: i,
                                callbackScope: n,
                                onReverseComplete: e,
                                onReverseCompleteParams: i,
                                immediateRender: !1,
                                useFrames: r,
                                overwrite: 0
                            })
                        }, s.set = function (t, e) {
                            return new s(t, 0, e)
                        }, s.isTweening = function (t) {
                            return i.getTweensOf(t, !0).length > 0
                        };
                        var f = function (t, e) {
                                for (var n = [], r = 0, s = t._first; s;) {
                                    s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(f(s, e)), r = n.length), s = s._next
                                }
                                return n
                            },
                            d = s.getAllTweens = function (e) {
                                return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                            };
                        s.killAll = function (t, i, n, r) {
                            null == i && (i = !0), null == n && (n = !0);
                            var s, o, a, l = d(0 != r),
                                u = l.length,
                                c = i && n && r;
                            for (a = 0; a < u; a++) {
                                o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                            }
                        }, s.killChildTweensOf = function (t, e) {
                            if (null != t) {
                                var r, o, c, h, f, d = a.tweenLookup;
                                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), u(t)) {
                                    for (h = t.length; --h > -1;) {
                                        s.killChildTweensOf(t[h], e)
                                    }
                                } else {
                                    r = [];
                                    for (c in d) {
                                        for (o = d[c].target.parentNode; o;) {
                                            o === t && (r = r.concat(d[c].tweens)), o = o.parentNode
                                        }
                                    }
                                    for (f = r.length, h = 0; h < f; h++) {
                                        e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                                    }
                                }
                            }
                        };
                        var p = function (t, i, n, r) {
                            i = i !== !1, n = n !== !1, r = r !== !1;
                            for (var s, o, a = d(r), l = i && n && r, u = a.length; --u > -1;) {
                                o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                            }
                        };
                        return s.pauseAll = function (t, e, i) {
                            p(!0, t, e, i)
                        }, s.resumeAll = function (t, e, i) {
                            p(!1, t, e, i)
                        }, s.globalTimeScale = function (e) {
                            var n = t._rootTimeline,
                                r = i.ticker.time;
                            return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                        }, c.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                        }, c.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                        }, c.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        }, c.duration = function (e) {
                            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                        }, c.totalDuration = function (t) {
                            return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                        }, c.repeat = function (t) {
                            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        }, c.repeatDelay = function (t) {
                            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        }, c.yoyo = function (t) {
                            return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        }, s
                    }, !0), o._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                        var n = function (t) {
                                e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                                var i, n, r = this.vars;
                                for (n in r) {
                                    i = r[n], u(i) && i.join("").indexOf("{self}") !== -1 && (r[n] = this._swapSelfInParams(i))
                                }
                                u(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                            },
                            r = 1e-10,
                            s = i._internals,
                            a = n._internals = {},
                            l = s.isSelector,
                            u = s.isArray,
                            c = s.lazyTweens,
                            h = s.lazyRender,
                            f = o._gsDefine.globals,
                            d = function (t) {
                                var e, i = {};
                                for (e in t) {
                                    i[e] = t[e]
                                }
                                return i
                            },
                            p = function (t, e, i) {
                                var n, r, s = t.cycle;
                                for (n in s) {
                                    r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length]
                                }
                                delete t.cycle
                            },
                            m = a.pauseCallback = function () {},
                            v = function (t) {
                                var e, i = [],
                                    n = t.length;
                                for (e = 0; e !== n; i.push(t[e++])) {}
                                return i
                            },
                            g = n.prototype = new e;
                        return n.version = "1.19.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function (t, e, n, r) {
                            var s = n.repeat && f.TweenMax || i;
                            return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                        }, g.from = function (t, e, n, r) {
                            return this.add((n.repeat && f.TweenMax || i).from(t, e, n), r)
                        }, g.fromTo = function (t, e, n, r, s) {
                            var o = r.repeat && f.TweenMax || i;
                            return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                        }, g.staggerTo = function (t, e, r, s, o, a, u, c) {
                            var h, f, m = new n({
                                    onComplete: a,
                                    onCompleteParams: u,
                                    callbackScope: c,
                                    smoothChildTiming: this.smoothChildTiming
                                }),
                                g = r.cycle;
                            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], l(t) && (t = v(t)), s = s || 0, s < 0 && (t = v(t), t.reverse(), s *= -1), f = 0; f < t.length; f++) {
                                h = d(r), h.startAt && (h.startAt = d(h.startAt), h.startAt.cycle && p(h.startAt, t, f)), g && (p(h, t, f), null != h.duration && (e = h.duration, delete h.duration)), m.to(t[f], e, h, f * s)
                            }
                            return this.add(m, o)
                        }, g.staggerFrom = function (t, e, i, n, r, s, o, a) {
                            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                        }, g.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
                            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                        }, g.call = function (t, e, n, r) {
                            return this.add(i.delayedCall(0, t, e, n), r)
                        }, g.set = function (t, e, n) {
                            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                        }, n.exportRoot = function (t, e) {
                            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                            var r, s, o = new n(t),
                                a = o._timeline;
                            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) {
                                s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s
                            }
                            return a.add(o, 0), o
                        }, g.add = function (r, s, o, a) {
                            var l, c, h, f, d, p;
                            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                                if (r instanceof Array || r && r.push && u(r)) {
                                    for (o = o || "normal", a = a || 0, l = s, c = r.length, h = 0; h < c; h++) {
                                        u(f = r[h]) && (f = new n({
                                            tweens: f
                                        })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === o ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), l += a
                                    }
                                    return this._uncache(!0)
                                }
                                if ("string" == typeof r) {
                                    return this.addLabel(r, s)
                                }
                                if ("function" != typeof r) {
                                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string."
                                }
                                r = i.delayedCall(0, r)
                            }
                            if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) {
                                for (d = this, p = d.rawTime() > r._startTime; d._timeline;) {
                                    p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline
                                }
                            }
                            return this
                        }, g.remove = function (e) {
                            if (e instanceof t) {
                                this._remove(e, !1);
                                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                            }
                            if (e instanceof Array || e && e.push && u(e)) {
                                for (var n = e.length; --n > -1;) {
                                    this.remove(e[n])
                                }
                                return this
                            }
                            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                        }, g._remove = function (t, i) {
                            e.prototype._remove.call(this, t, i);
                            var n = this._last;
                            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                        }, g.append = function (t, e) {
                            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                        }, g.insert = g.insertMultiple = function (t, e, i, n) {
                            return this.add(t, e || 0, i, n)
                        }, g.appendMultiple = function (t, e, i, n) {
                            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                        }, g.addLabel = function (t, e) {
                            return this._labels[t] = this._parseTimeOrLabel(e), this
                        }, g.addPause = function (t, e, n, r) {
                            var s = i.delayedCall(0, m, n, r || this);
                            return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                        }, g.removeLabel = function (t) {
                            return delete this._labels[t], this
                        }, g.getLabelTime = function (t) {
                            return null != this._labels[t] ? this._labels[t] : -1
                        }, g._parseTimeOrLabel = function (e, i, n, r) {
                            var s;
                            if (r instanceof t && r.timeline === this) {
                                this.remove(r)
                            } else {
                                if (r && (r instanceof Array || r.push && u(r))) {
                                    for (s = r.length; --s > -1;) {
                                        r[s] instanceof t && r[s].timeline === this && this.remove(r[s])
                                    }
                                }
                            }
                            if ("string" == typeof i) {
                                return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n)
                            }
                            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) {
                                null == e && (e = this.duration())
                            } else {
                                if (s = e.indexOf("="), s === -1) {
                                    return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i
                                }
                                i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                            }
                            return Number(e) + i
                        }, g.seek = function (t, e) {
                            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                        }, g.stop = function () {
                            return this.paused(!0)
                        }, g.gotoAndPlay = function (t, e) {
                            return this.play(t, e)
                        }, g.gotoAndStop = function (t, e) {
                            return this.pause(t, e)
                        }, g.render = function (t, e, i) {
                            this._gc && this._enabled(!0, !1);
                            var n, s, o, a, l, u, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                                p = this._time,
                                m = this._startTime,
                                v = this._timeScale,
                                g = this._paused;
                            if (t >= d - 1e-7) {
                                this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = d + 0.0001
                            } else {
                                if (t < 1e-7) {
                                    if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), t < 0) {
                                        this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t
                                    } else {
                                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s) {
                                            for (n = this._first; n && 0 === n._startTime;) {
                                                n._duration || (s = !1), n = n._next
                                            }
                                        }
                                        t = 0, this._initted || (l = !0)
                                    }
                                } else {
                                    if (this._hasPause && !this._forcingPlayhead && !e) {
                                        if (t >= p) {
                                            for (n = this._first; n && n._startTime <= t && !u;) {
                                                n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next
                                            }
                                        } else {
                                            for (n = this._last; n && n._startTime >= t && !u;) {
                                                n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev
                                            }
                                        }
                                        u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                    }
                                    this._totalTime = this._time = this._rawPrevTime = t
                                }
                            }
                            if (this._time !== p && this._first || i || l || u) {
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), f = this._time, f >= p) {
                                    for (n = this._first; n && (o = n._next, f === this._time && (!this._paused || g));) {
                                        (n._active || n._startTime <= f && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o
                                    }
                                } else {
                                    for (n = this._last; n && (o = n._prev, f === this._time && (!this._paused || g));) {
                                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                            if (u === n) {
                                                for (u = n._prev; u && u.endTime() > this._time;) {
                                                    u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev
                                                }
                                                u = null, this.pause()
                                            }
                                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                        }
                                        n = o
                                    }
                                }
                                this._onUpdate && (e || (c.length && h(), this._callback("onUpdate"))), a && (this._gc || m !== this._startTime && v === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (s && (c.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                            }
                        }, g._hasPausedChild = function () {
                            for (var t = this._first; t;) {
                                if (t._paused || t instanceof n && t._hasPausedChild()) {
                                    return !0
                                }
                                t = t._next
                            }
                            return !1
                        }, g.getChildren = function (t, e, n, r) {
                            r = r || -9999999999;
                            for (var s = [], o = this._first, a = 0; o;) {
                                o._startTime < r || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next
                            }
                            return s
                        }, g.getTweensOf = function (t, e) {
                            var n, r, s = this._gc,
                                o = [],
                                a = 0;
                            for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;) {
                                (n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r])
                            }
                            return s && this._enabled(!1, !0), o
                        }, g.recent = function () {
                            return this._recent
                        }, g._contains = function (t) {
                            for (var e = t.timeline; e;) {
                                if (e === this) {
                                    return !0
                                }
                                e = e.timeline
                            }
                            return !1
                        }, g.shiftChildren = function (t, e, i) {
                            i = i || 0;
                            for (var n, r = this._first, s = this._labels; r;) {
                                r._startTime >= i && (r._startTime += t), r = r._next
                            }
                            if (e) {
                                for (n in s) {
                                    s[n] >= i && (s[n] += t)
                                }
                            }
                            return this._uncache(!0)
                        }, g._kill = function (t, e) {
                            if (!t && !e) {
                                return this._enabled(!1, !1)
                            }
                            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1;
                                --n > -1;) {
                                i[n]._kill(t, e) && (r = !0)
                            }
                            return r
                        }, g.clear = function (t) {
                            var e = this.getChildren(!1, !0, !0),
                                i = e.length;
                            for (this._time = this._totalTime = 0; --i > -1;) {
                                e[i]._enabled(!1, !1)
                            }
                            return t !== !1 && (this._labels = {}), this._uncache(!0)
                        }, g.invalidate = function () {
                            for (var e = this._first; e;) {
                                e.invalidate(), e = e._next
                            }
                            return t.prototype.invalidate.call(this)
                        }, g._enabled = function (t, i) {
                            if (t === this._gc) {
                                for (var n = this._first; n;) {
                                    n._enabled(t, !0), n = n._next
                                }
                            }
                            return e.prototype._enabled.call(this, t, i)
                        }, g.totalTime = function (e, i, n) {
                            this._forcingPlayhead = !0;
                            var r = t.prototype.totalTime.apply(this, arguments);
                            return this._forcingPlayhead = !1, r
                        }, g.duration = function (t) {
                            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                        }, g.totalDuration = function (t) {
                            if (!arguments.length) {
                                if (this._dirty) {
                                    for (var e, i, n = 0, r = this._last, s = 999999999999; r;) {
                                        e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e
                                    }
                                    this._duration = this._totalDuration = n, this._dirty = !1
                                }
                                return this._totalDuration
                            }
                            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                        }, g.paused = function (e) {
                            if (!e) {
                                for (var i = this._first, n = this._time; i;) {
                                    i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next
                                }
                            }
                            return t.prototype.paused.apply(this, arguments)
                        }, g.usesFrames = function () {
                            for (var e = this._timeline; e._timeline;) {
                                e = e._timeline
                            }
                            return e === t._rootFramesTimeline
                        }, g.rawTime = function () {
                            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                        }, n
                    }, !0), o._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
                        var n = function (e) {
                                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                            },
                            r = 1e-10,
                            s = e._internals,
                            a = s.lazyTweens,
                            l = s.lazyRender,
                            u = o._gsDefine.globals,
                            c = new i(null, null, 1, 0),
                            h = n.prototype = new t;
                        return h.constructor = n, h.kill()._gc = !1, n.version = "1.19.0", h.invalidate = function () {
                            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                        }, h.addCallback = function (t, i, n, r) {
                            return this.add(e.delayedCall(0, t, n, r), i)
                        }, h.removeCallback = function (t, e) {
                            if (t) {
                                if (null == e) {
                                    this._kill(null, t)
                                } else {
                                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) {
                                        i[n]._startTime === r && i[n]._enabled(!1, !1)
                                    }
                                }
                            }
                            return this
                        }, h.removePause = function (e) {
                            return this.removeCallback(t._internals.pauseCallback, e)
                        }, h.tweenTo = function (t, i) {
                            i = i || {};
                            var n, r, s, o = {
                                    ease: c,
                                    useFrames: this.usesFrames(),
                                    immediateRender: !1
                                },
                                a = i.repeat && u.TweenMax || e;
                            for (r in i) {
                                o[r] = i[r]
                            }
                            return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || 0.001, s = new a(this, n, o), o.onStart = function () {
                                s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                            }, s
                        }, h.tweenFromTo = function (t, e, i) {
                            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                                onComplete: this.seek,
                                onCompleteParams: [t],
                                callbackScope: this
                            }, i.immediateRender = i.immediateRender !== !1;
                            var n = this.tweenTo(e, i);
                            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001)
                        }, h.render = function (t, e, i) {
                            this._gc && this._enabled(!0, !1);
                            var n, s, o, u, c, h, f, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                                m = this._duration,
                                v = this._time,
                                g = this._totalTime,
                                y = this._startTime,
                                _ = this._timeScale,
                                w = this._rawPrevTime,
                                b = this._paused,
                                x = this._cycle;
                            if (t >= p - 1e-7) {
                                this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || w < 0 || w === r) && w !== t && this._first && (c = !0, w > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 0.0001)
                            } else {
                                if (t < 1e-7) {
                                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== v || 0 === m && w !== r && (w > 0 || t < 0 && w >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), t < 0) {
                                        this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, u = "onReverseComplete") : w >= 0 && this._first && (c = !0), this._rawPrevTime = t
                                    } else {
                                        if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s) {
                                            for (n = this._first; n && 0 === n._startTime;) {
                                                n._duration || (s = !1), n = n._next
                                            }
                                        }
                                        t = 0, this._initted || (c = !0)
                                    }
                                } else {
                                    if (0 === m && w < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 0.0001) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                                        if (t = this._time, t >= v) {
                                            for (n = this._first; n && n._startTime <= t && !f;) {
                                                n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next
                                            }
                                        } else {
                                            for (n = this._last; n && n._startTime >= t && !f;) {
                                                n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev
                                            }
                                        }
                                        f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                    }
                                }
                            }
                            if (this._cycle !== x && !this._locked) {
                                var T = this._yoyo && 0 !== (1 & x),
                                    P = T === (this._yoyo && 0 !== (1 & this._cycle)),
                                    S = this._totalTime,
                                    k = this._cycle,
                                    M = this._rawPrevTime,
                                    E = this._time;
                                if (this._totalTime = x * m, this._cycle < x ? T = !T : this._totalTime += m, this._time = v, this._rawPrevTime = 0 === m ? w - 0.0001 : w, this._cycle = x, this._locked = !0, v = T ? 0 : m, this.render(v, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), v !== this._time) {
                                    return
                                }
                                if (P && (v = T ? m + 0.0001 : -0.0001, this.render(v, !0, !1)), this._locked = !1, this._paused && !b) {
                                    return
                                }
                                this._time = E, this._totalTime = S, this._cycle = k, this._rawPrevTime = M
                            }
                            if (!(this._time !== v && this._first || i || c || f)) {
                                return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")))
                            }
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), d = this._time, d >= v) {
                                for (n = this._first; n && (o = n._next, d === this._time && (!this._paused || b));) {
                                    (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o
                                }
                            } else {
                                for (n = this._last; n && (o = n._prev, d === this._time && (!this._paused || b));) {
                                    if (n._active || n._startTime <= v && !n._paused && !n._gc) {
                                        if (f === n) {
                                            for (f = n._prev; f && f.endTime() > this._time;) {
                                                f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev
                                            }
                                            f = null, this.pause()
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                    }
                                    n = o
                                }
                            }
                            this._onUpdate && (e || (a.length && l(), this._callback("onUpdate"))), u && (this._locked || this._gc || y !== this._startTime && _ === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (s && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                        }, h.getActive = function (t, e, i) {
                            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                            var n, r, s = [],
                                o = this.getChildren(t, e, i),
                                a = 0,
                                l = o.length;
                            for (n = 0; n < l; n++) {
                                r = o[n], r.isActive() && (s[a++] = r)
                            }
                            return s
                        }, h.getLabelAfter = function (t) {
                            t || 0 !== t && (t = this._time);
                            var e, i = this.getLabelsArray(),
                                n = i.length;
                            for (e = 0; e < n; e++) {
                                if (i[e].time > t) {
                                    return i[e].name
                                }
                            }
                            return null
                        }, h.getLabelBefore = function (t) {
                            null == t && (t = this._time);
                            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) {
                                if (e[i].time < t) {
                                    return e[i].name
                                }
                            }
                            return null
                        }, h.getLabelsArray = function () {
                            var t, e = [],
                                i = 0;
                            for (t in this._labels) {
                                e[i++] = {
                                    time: this._labels[t],
                                    name: t
                                }
                            }
                            return e.sort(function (t, e) {
                                return t.time - e.time
                            }), e
                        }, h.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                        }, h.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                        }, h.totalDuration = function (e) {
                            return arguments.length ? this._repeat !== -1 && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                        }, h.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        }, h.repeat = function (t) {
                            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        }, h.repeatDelay = function (t) {
                            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        }, h.yoyo = function (t) {
                            return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        }, h.currentLabel = function (t) {
                            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                        }, n
                    }, !0),
                    function () {
                        var t = 180 / Math.PI,
                            e = [],
                            i = [],
                            n = [],
                            r = {},
                            s = o._gsDefine.globals,
                            a = function (t, e, i, n) {
                                i === n && (i = n - (n - e) / 1000000), t === e && (e = t + (i - t) / 1000000), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                            },
                            l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                            u = function (t, e, i, n) {
                                var r = {
                                        a: t
                                    },
                                    s = {},
                                    o = {},
                                    a = {
                                        c: n
                                    },
                                    l = (t + e) / 2,
                                    u = (e + i) / 2,
                                    c = (i + n) / 2,
                                    h = (l + u) / 2,
                                    f = (u + c) / 2,
                                    d = (f - h) / 8;
                                return r.b = l + (t - l) / 4, s.b = h + d, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + f) / 2, o.b = f - d, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                            },
                            c = function (t, r, s, o, a) {
                                var l, c, h, f, d, p, m, v, g, y, _, w, b, x = t.length - 1,
                                    T = 0,
                                    P = t[0].a;
                                for (l = 0; l < x; l++) {
                                    d = t[T], c = d.a, h = d.d, f = t[T + 1].d, a ? (_ = e[l], w = i[l], b = (w + _) * r * 0.25 / (o ? 0.5 : n[l] || 0.5), p = h - (h - c) * (o ? 0.5 * r : 0 !== _ ? b / _ : 0), m = h + (f - h) * (o ? 0.5 * r : 0 !== w ? b / w : 0), v = h - (p + ((m - p) * (3 * _ / (_ + w) + 0.5) / 4 || 0))) : (p = h - (h - c) * r * 0.5, m = h + (f - h) * r * 0.5, v = h - (p + m) / 2), p += v, m += v, d.c = g = p, 0 !== l ? d.b = P : d.b = P = d.a + 0.6 * (d.c - d.a), d.da = h - c, d.ca = g - c, d.ba = P - c, s ? (y = u(c, P, g, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, P = m
                                }
                                d = t[T], d.b = P, d.c = P + 0.4 * (d.d - P), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = P - d.a, s && (y = u(d.a, P, d.c, d.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                            },
                            h = function (t, n, r, s) {
                                var o, l, u, c, h, f, d = [];
                                if (s) {
                                    for (t = [s].concat(t), l = t.length; --l > -1;) {
                                        "string" == typeof (f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)))
                                    }
                                }
                                if (o = t.length - 2, o < 0) {
                                    return d[0] = new a(t[0][n], 0, 0, t[o < -1 ? 0 : 1][n]), d
                                }
                                for (l = 0; l < o; l++) {
                                    u = t[l][n], c = t[l + 1][n], d[l] = new a(u, 0, 0, c), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c))
                                }
                                return d[l] = new a(t[l][n], 0, 0, t[l + 1][n]), d
                            },
                            f = function (t, s, o, a, u, f) {
                                var d, p, m, v, g, y, _, w, b = {},
                                    x = [],
                                    T = f || t[0];
                                u = "string" == typeof u ? "," + u + "," : l, null == s && (s = 1);
                                for (p in t[0]) {
                                    x.push(p)
                                }
                                if (t.length > 1) {
                                    for (w = t[t.length - 1], _ = !0, d = x.length; --d > -1;) {
                                        if (p = x[d], Math.abs(T[p] - w[p]) > 0.05) {
                                            _ = !1;
                                            break
                                        }
                                    }
                                    _ && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                                }
                                for (e.length = i.length = n.length = 0, d = x.length; --d > -1;) {
                                    p = x[d], r[p] = u.indexOf("," + p + ",") !== -1, b[p] = h(t, p, r[p], f)
                                }
                                for (d = e.length; --d > -1;) {
                                    e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d])
                                }
                                if (!a) {
                                    for (d = x.length; --d > -1;) {
                                        if (r[p]) {
                                            for (m = b[x[d]], y = m.length - 1, v = 0; v < y; v++) {
                                                g = m[v + 1].da / i[v] + m[v].da / e[v] || 0, n[v] = (n[v] || 0) + g * g
                                            }
                                        }
                                    }
                                    for (d = n.length; --d > -1;) {
                                        n[d] = Math.sqrt(n[d])
                                    }
                                }
                                for (d = x.length, v = o ? 4 : 1; --d > -1;) {
                                    p = x[d], m = b[p], c(m, s, o, a, r[p]), _ && (m.splice(0, v), m.splice(m.length - v, v))
                                }
                                return b
                            },
                            d = function (t, e, i) {
                                e = e || "soft";
                                var n, r, s, o, l, u, c, h, f, d, p, m = {},
                                    v = "cubic" === e ? 3 : 2,
                                    g = "soft" === e,
                                    y = [];
                                if (g && i && (t = [i].concat(t)), null == t || t.length < v + 1) {
                                    throw "invalid Bezier data"
                                }
                                for (f in t[0]) {
                                    y.push(f)
                                }
                                for (u = y.length; --u > -1;) {
                                    for (f = y[u], m[f] = l = [], d = 0, h = t.length, c = 0; c < h; c++) {
                                        n = null == i ? t[c][f] : "string" == typeof (p = t[c][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && c > 1 && c < h - 1 && (l[d++] = (n + l[d - 2]) / 2), l[d++] = n
                                    }
                                    for (h = d - v + 1, d = 0, c = 0; c < h; c += v) {
                                        n = l[c], r = l[c + 1], s = l[c + 2], o = 2 === v ? 0 : l[c + 3], l[d++] = p = 3 === v ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s)
                                    }
                                    l.length = d
                                }
                                return m
                            },
                            p = function (t, e, i) {
                                for (var n, r, s, o, a, l, u, c, h, f, d, p = 1 / i, m = t.length; --m > -1;) {
                                    for (f = t[m], s = f.a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, c = 1; c <= i; c++) {
                                        u = p * c, h = 1 - u, n = r - (r = (u * u * o + 3 * h * (u * a + h * l)) * u), d = m * i + c - 1, e[d] = (e[d] || 0) + n * n
                                    }
                                }
                            },
                            m = function (t, e) {
                                e = e >> 0 || 6;
                                var i, n, r, s, o = [],
                                    a = [],
                                    l = 0,
                                    u = 0,
                                    c = e - 1,
                                    h = [],
                                    f = [];
                                for (i in t) {
                                    p(t[i], o, e)
                                }
                                for (r = o.length, n = 0; n < r; n++) {
                                    l += Math.sqrt(o[n]), s = n % e, f[s] = l, s === c && (u += l, s = n / e >> 0, h[s] = f, a[s] = u, l = 0, f = [])
                                }
                                return {
                                    length: u,
                                    lengths: a,
                                    segments: h
                                }
                            },
                            v = o._gsDefine.plugin({
                                propName: "bezier",
                                priority: -1,
                                version: "1.3.7",
                                API: 2,
                                global: !0,
                                init: function (t, e, i) {
                                    this._target = t, e instanceof Array && (e = {
                                        values: e
                                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                    var n, r, s, o, a, l = e.values || [],
                                        u = {},
                                        c = l[0],
                                        h = e.autoRotate || i.vars.orientToBezier;
                                    this._autoRotate = h ? h instanceof Array ? h : [
                                        ["x", "y", "rotation", h === !0 ? 0 : Number(h) || 0]
                                    ] : null;
                                    for (n in c) {
                                        this._props.push(n)
                                    }
                                    for (s = this._props.length; --s > -1;) {
                                        n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u)
                                    }
                                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                        var p = m(this._beziers, this._timeRes);
                                        this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                    }
                                    if (h = this._autoRotate) {
                                        for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), s = h.length; --s > -1;) {
                                            for (o = 0; o < 3; o++) {
                                                n = h[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]
                                            }
                                            n = h[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                        }
                                    }
                                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                                },
                                set: function (e) {
                                    var i, n, r, s, o, a, l, u, c, h, f = this._segCount,
                                        d = this._func,
                                        p = this._target,
                                        m = e !== this._startRatio;
                                    if (this._timeRes) {
                                        if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < f - 1) {
                                            for (u = f - 1; r < u && (this._l2 = c[++r]) <= e;) {}
                                            this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                        } else {
                                            if (e < this._l1 && r > 0) {
                                                for (; r > 0 && (this._l1 = c[--r]) >= e;) {}
                                                0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                            }
                                        }
                                        if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                                            for (u = h.length - 1; r < u && (this._s2 = h[++r]) <= e;) {}
                                            this._s1 = h[r - 1], this._si = r
                                        } else {
                                            if (e < this._s1 && r > 0) {
                                                for (; r > 0 && (this._s1 = h[--r]) >= e;) {}
                                                0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                            }
                                        }
                                        a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                    } else {
                                        i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f
                                    }
                                    for (n = 1 - a, r = this._props.length; --r > -1;) {
                                        s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, p)), d[s] ? p[s](l) : p[s] = l
                                    }
                                    if (this._autoRotate) {
                                        var v, g, y, _, w, b, x, T = this._autoRotate;
                                        for (r = T.length; --r > -1;) {
                                            s = T[r][2], b = T[r][3] || 0, x = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], v = this._beziers[T[r][1]], o && v && (o = o[i], v = v[i], g = o.a + (o.b - o.a) * a, _ = o.b + (o.c - o.b) * a, g += (_ - g) * a, _ += (o.c + (o.d - o.c) * a - _) * a, y = v.a + (v.b - v.a) * a, w = v.b + (v.c - v.b) * a, y += (w - y) * a, w += (v.c + (v.d - v.c) * a - w) * a, l = m ? Math.atan2(w - y, _ - g) * x + b : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, p)), d[s] ? p[s](l) : p[s] = l)
                                        }
                                    }
                                }
                            }),
                            g = v.prototype;
                        v.bezierThrough = f, v.cubicToQuadratic = u, v._autoCSS = !0, v.quadraticToCubic = function (t, e, i) {
                            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                        }, v._cssRegister = function () {
                            var t = s.CSSPlugin;
                            if (t) {
                                var e = t._internals,
                                    i = e._parseToProxy,
                                    n = e._setPluginRatio,
                                    r = e.CSSPropTween;
                                e._registerComplexSpecialProp("bezier", {
                                    parser: function (t, e, s, o, a, l) {
                                        e instanceof Array && (e = {
                                            values: e
                                        }), l = new v;
                                        var u, c, h, f = e.values,
                                            d = f.length - 1,
                                            p = [],
                                            m = {};
                                        if (d < 0) {
                                            return a
                                        }
                                        for (u = 0; u <= d; u++) {
                                            h = i(t, f[u], o, a, l, d !== u), p[u] = h.end
                                        }
                                        for (c in e) {
                                            m[c] = e[c]
                                        }
                                        return m.values = p, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (u = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != h.end.left ? [
                                            ["left", "top", "rotation", u, !1]
                                        ] : null != h.end.x && [
                                            ["x", "y", "rotation", u, !1]
                                        ]), m.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(h.proxy, m, o._tween), a
                                    }
                                })
                            }
                        }, g._mod = function (t) {
                            for (var e, i = this._overwriteProps, n = i.length; --n > -1;) {
                                e = t[i[n]], e && "function" == typeof e && (this._mod[i[n]] = e)
                            }
                        }, g._kill = function (t) {
                            var e, i, n = this._props;
                            for (e in this._beziers) {
                                if (e in t) {
                                    for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) {
                                        n[i] === e && n.splice(i, 1)
                                    }
                                }
                            }
                            if (n = this._autoRotate) {
                                for (i = n.length; --i > -1;) {
                                    t[n[i][2]] && n.splice(i, 1)
                                }
                            }
                            return this._super._kill.call(this, t)
                        }
                    }(), o._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                        var i, n, r, s, a = function () {
                                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                            },
                            l = o._gsDefine.globals,
                            u = {},
                            c = a.prototype = new t("css");
                        c.constructor = a, a.version = "1.19.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, c = "px", a.suffixMap = {
                            top: c,
                            right: c,
                            bottom: c,
                            left: c,
                            width: c,
                            height: c,
                            fontSize: c,
                            padding: c,
                            margin: c,
                            perspective: c,
                            lineHeight: ""
                        };
                        var h, f, d, p, m, v, g, y, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                            w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                            x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                            T = /(?:\d|\-|\+|=|#|\.)*/g,
                            P = /opacity *= *([^)]*)/i,
                            S = /opacity:([^;]*)/i,
                            k = /alpha\(opacity *=.+?\)/i,
                            M = /^(rgb|hsl)/,
                            E = /([A-Z])/g,
                            O = /-([a-z])/gi,
                            A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                            R = function (t, e) {
                                return e.toUpperCase()
                            },
                            C = /(?:Left|Right|Width)/i,
                            L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                            j = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                            D = /,(?=[^\)]*(?:\(|$))/gi,
                            F = /[\s,\(]/i,
                            N = Math.PI / 180,
                            I = 180 / Math.PI,
                            q = {},
                            z = document,
                            B = function (t) {
                                return z.createElementNS ? z.createElementNS("http://www.w3.org/1999/xhtml", t) : z.createElement(t)
                            },
                            H = B("div"),
                            V = B("img"),
                            U = a._internals = {
                                _specialProps: u
                            },
                            W = navigator.userAgent,
                            G = function () {
                                var t = W.indexOf("Android"),
                                    e = B("a");
                                return d = W.indexOf("Safari") !== -1 && W.indexOf("Chrome") === -1 && (t === -1 || Number(W.substr(t + 8, 1)) > 3), m = d && Number(W.substr(W.indexOf("Version/") + 8, 1)) < 6, p = W.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                            }(),
                            Y = function (t) {
                                return P.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                            },
                            X = function (t) {
                                window.console
                            },
                            $ = "",
                            Z = "",
                            Q = function (t, e) {
                                e = e || H;
                                var i, n, r = e.style;
                                if (void 0 !== r[t]) {
                                    return t
                                }
                                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];) {}
                                return n >= 0 ? (Z = 3 === n ? "ms" : i[n], $ = "-" + Z.toLowerCase() + "-", Z + t) : null
                            },
                            J = z.defaultView ? z.defaultView.getComputedStyle : function () {},
                            K = a.getStyle = function (t, e, i, n, r) {
                                var s;
                                return G || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || J(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : Y(t)
                            },
                            tt = U.convertToPixels = function (t, i, n, r, s) {
                                if ("px" === r || !r) {
                                    return n
                                }
                                if ("auto" === r || !n) {
                                    return 0
                                }
                                var o, l, u, c = C.test(i),
                                    h = t,
                                    f = H.style,
                                    d = n < 0,
                                    p = 1 === n;
                                if (d && (n = -n), p && (n *= 100), "%" === r && i.indexOf("border") !== -1) {
                                    o = n / 100 * (c ? t.clientWidth : t.clientHeight)
                                } else {
                                    if (f.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) {
                                        f[c ? "borderLeftWidth" : "borderTopWidth"] = n + r
                                    } else {
                                        if (h = t.parentNode || z.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) {
                                            return l.width * n / 100
                                        }
                                        f[c ? "width" : "height"] = n + r
                                    }
                                    h.appendChild(H), o = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(H), c && "%" === r && a.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = o / n * 100), 0 !== o || s || (o = tt(t, i, n, r, !0))
                                }
                                return p && (o /= 100), d ? -o : o
                            },
                            et = U.calculateOffset = function (t, e, i) {
                                if ("absolute" !== K(t, "position", i)) {
                                    return 0
                                }
                                var n = "left" === e ? "Left" : "Top",
                                    r = K(t, "margin" + n, i);
                                return t["offset" + n] - (tt(t, e, parseFloat(r), r.replace(T, "")) || 0)
                            },
                            it = function (t, e) {
                                var i, n, r, s = {};
                                if (e = e || J(t, null)) {
                                    if (i = e.length) {
                                        for (; --i > -1;) {
                                            r = e[i], r.indexOf("-transform") !== -1 && Ot !== r || (s[r.replace(O, R)] = e.getPropertyValue(r))
                                        }
                                    } else {
                                        for (i in e) {
                                            i.indexOf("Transform") !== -1 && Et !== i || (s[i] = e[i])
                                        }
                                    }
                                } else {
                                    if (e = t.currentStyle || t.style) {
                                        for (i in e) {
                                            "string" == typeof i && void 0 === s[i] && (s[i.replace(O, R)] = e[i])
                                        }
                                    }
                                }
                                return G || (s.opacity = Y(t)), n = Ht(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Rt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                            },
                            nt = function (t, e, i, n, r) {
                                var s, o, a, l = {},
                                    u = t.style;
                                for (o in i) {
                                    "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && o.indexOf("Origin") === -1 && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(x, "") ? s : 0 : et(t, o), void 0 !== u[o] && (a = new yt(u, o, u[o], a))))
                                }
                                if (n) {
                                    for (o in n) {
                                        "className" !== o && (l[o] = n[o])
                                    }
                                }
                                return {
                                    difs: l,
                                    firstMPT: a
                                }
                            },
                            rt = {
                                width: ["Left", "Right"],
                                height: ["Top", "Bottom"]
                            },
                            st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                            ot = function (t, e, i) {
                                if ("svg" === (t.nodeName + "").toLowerCase()) {
                                    return (i || J(t))[e] || 0
                                }
                                if (t.getBBox && qt(t)) {
                                    return t.getBBox()[e] || 0
                                }
                                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                    r = rt[e],
                                    s = r.length;
                                for (i = i || J(t, null); --s > -1;) {
                                    n -= parseFloat(K(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(K(t, "border" + r[s] + "Width", i, !0)) || 0
                                }
                                return n
                            },
                            at = function (t, e) {
                                if ("contain" === t || "auto" === t || "auto auto" === t) {
                                    return t + " "
                                }
                                null != t && "" !== t || (t = "0 0");
                                var i, n = t.split(" "),
                                    r = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : n[0],
                                    s = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : n[1];
                                if (n.length > 3 && !e) {
                                    for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) {
                                        t.push(at(n[i]))
                                    }
                                    return t.join(",")
                                }
                                return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && (r + "").indexOf("=") === -1) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = r.indexOf("%") !== -1, e.oyp = s.indexOf("%") !== -1, e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(s.replace(x, "")), e.v = t), e || t
                            },
                            lt = function (t, e) {
                                return "function" == typeof t && (t = t(y, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                            },
                            ut = function (t, e) {
                                return "function" == typeof t && (t = t(y, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                            },
                            ct = function (t, e, i, n) {
                                var r, s, o, a, l, u = 0.000001;
                                return "function" == typeof t && (t = t(y, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (t.indexOf("rad") === -1 ? 1 : I) - (l ? 0 : e), s.length && (n && (n[i] = e + o), t.indexOf("short") !== -1 && (o %= r, o !== o % (r / 2) && (o = o < 0 ? o + r : o - r)), t.indexOf("_cw") !== -1 && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : t.indexOf("ccw") !== -1 && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), a < u && a > -u && (a = 0), a
                            },
                            ht = {
                                aqua: [0, 255, 255],
                                lime: [0, 255, 0],
                                silver: [192, 192, 192],
                                black: [0, 0, 0],
                                maroon: [128, 0, 0],
                                teal: [0, 128, 128],
                                blue: [0, 0, 255],
                                navy: [0, 0, 128],
                                white: [255, 255, 255],
                                fuchsia: [255, 0, 255],
                                olive: [128, 128, 0],
                                yellow: [255, 255, 0],
                                orange: [255, 165, 0],
                                gray: [128, 128, 128],
                                purple: [128, 0, 128],
                                green: [0, 128, 0],
                                red: [255, 0, 0],
                                pink: [255, 192, 203],
                                cyan: [0, 255, 255],
                                transparent: [255, 255, 255, 0]
                            },
                            ft = function (t, e, i) {
                                return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + 0.5 | 0
                            },
                            dt = a.parseColor = function (t, e) {
                                var i, n, r, s, o, a, l, u, c, h, f;
                                if (t) {
                                    if ("number" == typeof t) {
                                        i = [t >> 16, t >> 8 & 255, 255 & t]
                                    } else {
                                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t]) {
                                            i = ht[t]
                                        } else {
                                            if ("#" === t.charAt(0)) {
                                                4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t]
                                            } else {
                                                if ("hsl" === t.substr(0, 3)) {
                                                    if (i = f = t.match(_), e) {
                                                        if (t.indexOf("=") !== -1) {
                                                            return t.match(w)
                                                        }
                                                    } else {
                                                        o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = l <= 0.5 ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = ft(o + 1 / 3, n, r), i[1] = ft(o, n, r), i[2] = ft(o - 1 / 3, n, r)
                                                    }
                                                } else {
                                                    i = t.match(_) || ht.transparent
                                                }
                                            }
                                        }
                                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                    }
                                } else {
                                    i = ht.black
                                }
                                return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, u = Math.max(n, r, s), c = Math.min(n, r, s), l = (u + c) / 2, u === c ? o = a = 0 : (h = u - c, a = l > 0.5 ? h / (2 - u - c) : h / (u + c), o = u === n ? (r - s) / h + (r < s ? 6 : 0) : u === r ? (s - n) / h + 2 : (n - r) / h + 4, o *= 60), i[0] = o + 0.5 | 0, i[1] = 100 * a + 0.5 | 0, i[2] = 100 * l + 0.5 | 0), i
                            },
                            pt = function (t, e) {
                                var i, n, r, s = t.match(mt) || [],
                                    o = 0,
                                    a = s.length ? "" : t;
                                for (i = 0; i < s.length; i++) {
                                    n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = dt(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")"
                                }
                                return a + t.substr(o)
                            },
                            mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                        for (c in ht) {
                            mt += "|" + c + "\\b"
                        }
                        mt = new RegExp(mt + ")", "gi"), a.colorStringFilter = function (t) {
                            var e, i = t[0] + t[1];
                            mt.test(i) && (e = i.indexOf("hsl(") !== -1 || i.indexOf("hsla(") !== -1, t[0] = pt(t[0], e), t[1] = pt(t[1], e)), mt.lastIndex = 0
                        }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                        var vt = function (t, e, i, n) {
                                if (null == t) {
                                    return function (t) {
                                        return t
                                    }
                                }
                                var r, s = e ? (t.match(mt) || [""])[0] : "",
                                    o = t.split(s).join("").match(b) || [],
                                    a = t.substr(0, t.indexOf(o[0])),
                                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                    u = t.indexOf(" ") !== -1 ? " " : ",",
                                    c = o.length,
                                    h = c > 0 ? o[0].replace(_, "") : "";
                                return c ? r = e ? function (t) {
                                    var e, f, d, p;
                                    if ("number" == typeof t) {
                                        t += h
                                    } else {
                                        if (n && D.test(t)) {
                                            for (p = t.replace(D, "|").split("|"), d = 0; d < p.length; d++) {
                                                p[d] = r(p[d])
                                            }
                                            return p.join(",")
                                        }
                                    }
                                    if (e = (t.match(mt) || [s])[0], f = t.split(e).join("").match(b) || [], d = f.length, c > d--) {
                                        for (; ++d < c;) {
                                            f[d] = i ? f[(d - 1) / 2 | 0] : o[d]
                                        }
                                    }
                                    return a + f.join(u) + u + e + l + (t.indexOf("inset") !== -1 ? " inset" : "")
                                } : function (t) {
                                    var e, s, f;
                                    if ("number" == typeof t) {
                                        t += h
                                    } else {
                                        if (n && D.test(t)) {
                                            for (s = t.replace(D, "|").split("|"), f = 0; f < s.length; f++) {
                                                s[f] = r(s[f])
                                            }
                                            return s.join(",")
                                        }
                                    }
                                    if (e = t.match(b) || [], f = e.length, c > f--) {
                                        for (; ++f < c;) {
                                            e[f] = i ? e[(f - 1) / 2 | 0] : o[f]
                                        }
                                    }
                                    return a + e.join(u) + l
                                } : function (t) {
                                    return t
                                }
                            },
                            gt = function (t) {
                                return t = t.split(","),
                                    function (e, i, n, r, s, o, a) {
                                        var l, u = (i + "").split(" ");
                                        for (a = {}, l = 0; l < 4; l++) {
                                            a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0]
                                        }
                                        return r.parse(e, a, s, o)
                                    }
                            },
                            yt = (U._setPluginRatio = function (t) {
                                this.plugin.setRatio(t);
                                for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT, u = 0.000001; l;) {
                                    e = a[l.v], l.r ? e = Math.round(e) : e < u && e > -u && (e = 0), l.t[l.p] = e, l = l._next
                                }
                                if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t) {
                                    for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                        if (i = l.t, i.type) {
                                            if (1 === i.type) {
                                                for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) {
                                                    r += i["xn" + n] + i["xs" + (n + 1)]
                                                }
                                                i[s] = r
                                            }
                                        } else {
                                            i[s] = i.s + i.xs0
                                        }
                                        l = l._next
                                    }
                                }
                            }, function (t, e, i, n, r) {
                                this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                            }),
                            _t = (U._parseToProxy = function (t, e, i, n, r, s) {
                                var o, a, l, u, c, h = n,
                                    f = {},
                                    d = {},
                                    p = i._transform,
                                    m = q;
                                for (i._transform = null, q = e, n = c = i.parse(t, e, n, r), q = m, s && (i._transform = p, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                                    if (n.type <= 1 && (a = n.p, d[a] = n.s + n.c, f[a] = n.s, s || (u = new yt(n, "s", a, u, n.r), n.c = 0), 1 === n.type)) {
                                        for (o = n.l; --o > 0;) {
                                            l = "xn" + o, a = n.p + "_" + l, d[a] = n.data[l], f[a] = n[l], s || (u = new yt(n, l, a, u, n.rxp[l]))
                                        }
                                    }
                                    n = n._next
                                }
                                return {
                                    proxy: f,
                                    end: d,
                                    firstMPT: u,
                                    pt: c
                                }
                            }, U.CSSPropTween = function (t, e, n, r, o, a, l, u, c, h, f) {
                                this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof _t || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, o && (this._next = o, o._prev = this)
                            }),
                            wt = function (t, e, i, n, r, s) {
                                var o = new _t(t, e, i, n - i, r, (-1), s);
                                return o.b = i, o.e = o.xs0 = n, o
                            },
                            bt = a.parseComplex = function (t, e, i, n, r, s, o, l, u, c) {
                                i = i || s || "", "function" == typeof n && (n = n(y, g)), o = new _t(t, e, 0, 0, o, c ? 2 : 1, null, (!1), l, i, n), n += "", r && mt.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
                                var f, d, p, m, v, b, x, T, P, S, k, M, E, O = i.split(", ").join(",").split(" "),
                                    A = n.split(", ").join(",").split(" "),
                                    R = O.length,
                                    C = h !== !1;
                                for (n.indexOf(",") === -1 && i.indexOf(",") === -1 || (O = O.join(" ").replace(D, ", ").split(" "), A = A.join(" ").replace(D, ", ").split(" "), R = O.length), R !== A.length && (O = (s || "").split(" "), R = O.length), o.plugin = u, o.setRatio = c, mt.lastIndex = 0, f = 0; f < R; f++) {
                                    if (m = O[f], v = A[f], T = parseFloat(m), T || 0 === T) {
                                        o.appendXtra("", T, lt(v, T), v.replace(w, ""), C && v.indexOf("px") !== -1, !0)
                                    } else {
                                        if (r && mt.test(m)) {
                                            M = v.indexOf(")") + 1, M = ")" + (M ? v.substr(M) : ""), E = v.indexOf("hsl") !== -1 && G, m = dt(m, E), v = dt(v, E), P = m.length + v.length > 6, P && !G && 0 === v[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(A[f]).join("transparent")) : (G || (P = !1), E ? o.appendXtra(P ? "hsla(" : "hsl(", m[0], lt(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(v[1], m[1]), "%,", !1).appendXtra("", m[2], lt(v[2], m[2]), P ? "%," : "%" + M, !1) : o.appendXtra(P ? "rgba(" : "rgb(", m[0], v[0] - m[0], ",", !0, !0).appendXtra("", m[1], v[1] - m[1], ",", !0).appendXtra("", m[2], v[2] - m[2], P ? "," : M, !0), P && (m = m.length < 4 ? 1 : m[3], o.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, M, !1))), mt.lastIndex = 0
                                        } else {
                                            if (b = m.match(_)) {
                                                if (x = v.match(w), !x || x.length !== b.length) {
                                                    return o
                                                }
                                                for (p = 0, d = 0; d < b.length; d++) {
                                                    k = b[d], S = m.indexOf(k, p), o.appendXtra(m.substr(p, S - p), Number(k), lt(x[d], k), "", C && "px" === m.substr(S + k.length, 2), 0 === d), p = S + k.length
                                                }
                                                o["xs" + o.l] += m.substr(p)
                                            } else {
                                                o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + v : v
                                            }
                                        }
                                    }
                                }
                                if (n.indexOf("=") !== -1 && o.data) {
                                    for (M = o.xs0 + o.data.s, f = 1; f < o.l; f++) {
                                        M += o["xs" + f] + o.data["xn" + f]
                                    }
                                    o.e = M + o["xs" + f]
                                }
                                return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                            },
                            xt = 9;
                        for (c = _t.prototype, c.l = c.pr = 0; --xt > 0;) {
                            c["xn" + xt] = 0, c["xs" + xt] = ""
                        }
                        c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function (t, e, i, n, r, s) {
                            var o = this,
                                a = o.l;
                            return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new _t(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                                s: e + i
                            }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                        };
                        var Tt = function (t, e) {
                                e = e || {}, this.p = e.prefix ? Q(t) || t : t, u[t] = u[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                            },
                            Pt = U._registerComplexSpecialProp = function (t, e, i) {
                                "object" != typeof e && (e = {
                                    parser: i
                                });
                                var n, r, s = t.split(","),
                                    o = e.defaultValue;
                                for (i = i || [o], n = 0; n < s.length; n++) {
                                    e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new Tt(s[n], e)
                                }
                            },
                            St = U._registerPluginProp = function (t) {
                                if (!u[t]) {
                                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                    Pt(t, {
                                        parser: function (t, i, n, r, s, o, a) {
                                            var c = l.com.greensock.plugins[e];
                                            return c ? (c._cssRegister(), u[n].parse(t, i, n, r, s, o, a)) : (X("Error: " + e + " js file not loaded."), s)
                                        }
                                    })
                                }
                            };
                        c = Tt.prototype, c.parseComplex = function (t, e, i, n, r, s) {
                            var o, a, l, u, c, h, f = this.keyword;
                            if (this.multi && (D.test(i) || D.test(e) ? (a = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : f && (a = [e], l = [i])), l) {
                                for (u = l.length > a.length ? l.length : a.length, o = 0; o < u; o++) {
                                    e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && (c = e.indexOf(f), h = i.indexOf(f), c !== h && (h === -1 ? a[o] = a[o].split(f).join("") : c === -1 && (a[o] += " " + f)))
                                }
                                e = a.join(", "), i = l.join(", ")
                            }
                            return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                        }, c.parse = function (t, e, i, n, s, o, a) {
                            return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                        }, a.registerSpecialProp = function (t, e, i) {
                            Pt(t, {
                                parser: function (t, n, r, s, o, a, l) {
                                    var u = new _t(t, r, 0, 0, o, 2, r, (!1), i);
                                    return u.plugin = a, u.setRatio = e(t, n, s._tween, r), u
                                },
                                priority: i
                            })
                        }, a.useSVGTransformAttr = d || p;
                        var kt, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                            Et = Q("transform"),
                            Ot = $ + "transform",
                            At = Q("transformOrigin"),
                            Rt = null !== Q("perspective"),
                            Ct = U.Transform = function () {
                                this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !Rt) && (a.defaultForce3D || "auto")
                            },
                            Lt = window.SVGElement,
                            jt = function (t, e, i) {
                                var n, r = z.createElementNS("http://www.w3.org/2000/svg", t),
                                    s = /([a-z])([A-Z])/g;
                                for (n in i) {
                                    r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n])
                                }
                                return e.appendChild(r), r
                            },
                            Dt = z.documentElement,
                            Nt = function (t, e, i, n, r, s) {
                                var o, l, u, c, h, f, d, p, m, v, g, y, _, w, b = t._gsTransform,
                                    x = Bt(t, !0);
                                b && (_ = b.xOrigin, w = b.yOrigin), (!n || (o = n.split(" ")).length < 2) && (d = t.getBBox(), e = at(e).split(" "), o = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = c = parseFloat(o[0]), i.yOrigin = h = parseFloat(o[1]), n && x !== zt && (f = x[0], d = x[1], p = x[2], m = x[3], v = x[4], g = x[5], y = f * m - d * p, l = c * (m / y) + h * (-p / y) + (p * g - m * v) / y, u = c * (-d / y) + h * (f / y) - (f * g - d * v) / y, c = i.xOrigin = o[0] = l, h = i.yOrigin = o[1] = u), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (l = c - _, u = h - w, b.xOffset += l * x[0] + u * x[2] - l, b.yOffset += l * x[1] + u * x[3] - u) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
                            },
                            It = function (t) {
                                try {
                                    return t.getBBox()
                                } catch (t) {}
                            },
                            qt = function (t) {
                                return !!(Lt && t.getBBox && t.getCTM && It(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                            },
                            zt = [1, 0, 0, 1, 0, 0],
                            Bt = function (t, e) {
                                var i, n, r, s, o, a, l = t._gsTransform || new Ct,
                                    u = 100000,
                                    c = t.style;
                                if (Et ? n = K(t, Ot, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(L), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, i && Et && ((a = "none" === J(t).display) || !t.parentNode) && (a && (s = c.display, c.display = "block"), t.parentNode || (o = 1, Dt.appendChild(t)), n = K(t, Ot, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? c.display = s : a && Gt(c, "display"), o && Dt.removeChild(t)), (l.svg || t.getBBox && qt(t)) && (i && (c[Et] + "").indexOf("matrix") !== -1 && (n = c[Et], i = 0), r = t.getAttribute("transform"), i && r && (r.indexOf("matrix") !== -1 ? (n = r, i = 0) : r.indexOf("translate") !== -1 && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) {
                                    return zt
                                }
                                for (r = (n || "").match(_) || [], xt = r.length; --xt > -1;) {
                                    s = Number(r[xt]), r[xt] = (o = s - (s |= 0)) ? (o * u + (o < 0 ? -0.5 : 0.5) | 0) / u + s : s
                                }
                                return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                            },
                            Ht = U.getTransform = function (t, i, n, r) {
                                if (t._gsTransform && n && !r) {
                                    return t._gsTransform
                                }
                                var s, o, l, u, c, h, f = n ? t._gsTransform || new Ct : new Ct,
                                    d = f.scaleX < 0,
                                    p = 0.00002,
                                    m = 100000,
                                    v = Rt ? parseFloat(K(t, At, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                                    g = parseFloat(a.defaultTransformPerspective) || 0;
                                if (f.svg = !(!t.getBBox || !qt(t)), f.svg && (Nt(t, K(t, At, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), kt = a.useSVGTransformAttr), s = Bt(t), s !== zt) {
                                    if (16 === s.length) {
                                        var y, _, w, b, x, T = s[0],
                                            P = s[1],
                                            S = s[2],
                                            k = s[3],
                                            M = s[4],
                                            E = s[5],
                                            O = s[6],
                                            A = s[7],
                                            R = s[8],
                                            C = s[9],
                                            L = s[10],
                                            j = s[12],
                                            D = s[13],
                                            F = s[14],
                                            N = s[11],
                                            q = Math.atan2(O, L);
                                        f.zOrigin && (F = -f.zOrigin, j = R * F - s[12], D = C * F - s[13], F = L * F + f.zOrigin - s[14]), f.rotationX = q * I, q && (b = Math.cos(-q), x = Math.sin(-q), y = M * b + R * x, _ = E * b + C * x, w = O * b + L * x, R = M * -x + R * b, C = E * -x + C * b, L = O * -x + L * b, N = A * -x + N * b, M = y, E = _, O = w), q = Math.atan2(-S, L), f.rotationY = q * I, q && (b = Math.cos(-q), x = Math.sin(-q), y = T * b - R * x, _ = P * b - C * x, w = S * b - L * x, C = P * x + C * b, L = S * x + L * b, N = k * x + N * b, T = y, P = _, S = w), q = Math.atan2(P, T), f.rotation = q * I, q && (b = Math.cos(-q), x = Math.sin(-q), T = T * b + M * x, _ = P * b + E * x, E = P * -x + E * b, O = S * -x + O * b, P = _), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (Math.sqrt(T * T + P * P) * m + 0.5 | 0) / m, f.scaleY = (Math.sqrt(E * E + C * C) * m + 0.5 | 0) / m, f.scaleZ = (Math.sqrt(O * O + L * L) * m + 0.5 | 0) / m, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = M || E ? Math.atan2(M, E) * I + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (d ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = N ? 1 / (N < 0 ? -N : N) : 0, f.x = j, f.y = D, f.z = F, f.svg && (f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * M), f.y -= f.yOrigin - (f.yOrigin * P - f.xOrigin * E))
                                    } else {
                                        if (!Rt || r || !s.length || f.x !== s[4] || f.y !== s[5] || !f.rotationX && !f.rotationY) {
                                            var z = s.length >= 6,
                                                B = z ? s[0] : 1,
                                                H = s[1] || 0,
                                                V = s[2] || 0,
                                                U = z ? s[3] : 1;
                                            f.x = s[4] || 0, f.y = s[5] || 0, l = Math.sqrt(B * B + H * H), u = Math.sqrt(U * U + V * V), c = B || H ? Math.atan2(H, B) * I : f.rotation || 0, h = V || U ? Math.atan2(V, U) * I + c : f.skewX || 0, Math.abs(h) > 90 && Math.abs(h) < 270 && (d ? (l *= -1, h += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (u *= -1, h += h <= 0 ? 180 : -180)), f.scaleX = l, f.scaleY = u, f.rotation = c, f.skewX = h, Rt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = g, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * B + f.yOrigin * V), f.y -= f.yOrigin - (f.xOrigin * H + f.yOrigin * U))
                                        }
                                    }
                                    f.zOrigin = v;
                                    for (o in f) {
                                        f[o] < p && f[o] > -p && (f[o] = 0)
                                    }
                                }
                                return n && (t._gsTransform = f, f.svg && (kt && t.style[Et] ? e.delayedCall(0.001, function () {
                                    Gt(t.style, Et)
                                }) : !kt && t.getAttribute("transform") && e.delayedCall(0.001, function () {
                                    t.removeAttribute("transform")
                                }))), f
                            },
                            Vt = function (t) {
                                var e, i, n = this.data,
                                    r = -n.rotation * N,
                                    s = r + n.skewX * N,
                                    o = 100000,
                                    a = (Math.cos(r) * n.scaleX * o | 0) / o,
                                    l = (Math.sin(r) * n.scaleX * o | 0) / o,
                                    u = (Math.sin(s) * -n.scaleY * o | 0) / o,
                                    c = (Math.cos(s) * n.scaleY * o | 0) / o,
                                    h = this.t.style,
                                    f = this.t.currentStyle;
                                if (f) {
                                    i = l, l = -u, u = -i, e = f.filter, h.filter = "";
                                    var d, p, m = this.t.offsetWidth,
                                        g = this.t.offsetHeight,
                                        y = "absolute" !== f.position,
                                        _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                        w = n.x + m * n.xPercent / 100,
                                        b = n.y + g * n.yPercent / 100;
                                    if (null != n.ox && (d = (n.oxp ? m * n.ox * 0.01 : n.ox) - m / 2, p = (n.oyp ? g * n.oy * 0.01 : n.oy) - g / 2, w += d - (d * a + p * l), b += p - (d * u + p * c)), y ? (d = m / 2, p = g / 2, _ += ", Dx=" + (d - (d * a + p * l) + w) + ", Dy=" + (p - (d * u + p * c) + b) + ")") : _ += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? h.filter = e.replace(j, _) : h.filter = _ + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === l && 0 === u && 1 === c && (y && _.indexOf("Dx=0, Dy=0") === -1 || P.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && h.removeAttribute("filter")), !y) {
                                        var x, S, k, M = v < 8 ? 1 : -1;
                                        for (d = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (l < 0 ? -l : l) * g)) / 2 + w), n.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (u < 0 ? -u : u) * m)) / 2 + b), xt = 0; xt < 4; xt++) {
                                            S = st[xt], x = f[S], i = x.indexOf("px") !== -1 ? parseFloat(x) : tt(this.t, S, parseFloat(x), x.replace(T, "")) || 0, k = i !== n[S] ? xt < 2 ? -n.ieOffsetX : -n.ieOffsetY : xt < 2 ? d - n.ieOffsetX : p - n.ieOffsetY, h[S] = (n[S] = Math.round(i - k * (0 === xt || 2 === xt ? 1 : M))) + "px"
                                        }
                                    }
                                }
                            },
                            Ut = U.set3DTransformRatio = U.setTransformRatio = function (t) {
                                var e, i, n, r, s, o, a, l, u, c, h, f, d, m, v, g, y, _, w, b, x, T, P, S = this.data,
                                    k = this.t.style,
                                    M = S.rotation,
                                    E = S.rotationX,
                                    O = S.rotationY,
                                    A = S.scaleX,
                                    R = S.scaleY,
                                    C = S.scaleZ,
                                    L = S.x,
                                    j = S.y,
                                    D = S.z,
                                    F = S.svg,
                                    I = S.perspective,
                                    q = S.force3D;
                                if (((1 === t || 0 === t) && "auto" === q && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !q) && !D && !I && !O && !E && 1 === C || kt && F || !Rt) {
                                    return void(M || S.skewX || F ? (M *= N, T = S.skewX * N, P = 100000, e = Math.cos(M) * A, r = Math.sin(M) * A, i = Math.sin(M - T) * -R, s = Math.cos(M - T) * R, T && "simple" === S.skewType && (y = Math.tan(T - S.skewY * N), y = Math.sqrt(1 + y * y), i *= y, s *= y, S.skewY && (y = Math.tan(S.skewY * N), y = Math.sqrt(1 + y * y), e *= y, r *= y)), F && (L += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, j += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset, kt && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), L += 0.01 * S.xPercent * m.width, j += 0.01 * S.yPercent * m.height), m = 0.000001, L < m && L > -m && (L = 0), j < m && j > -m && (j = 0)), w = (e * P | 0) / P + "," + (r * P | 0) / P + "," + (i * P | 0) / P + "," + (s * P | 0) / P + "," + L + "," + j + ")", F && kt ? this.t.setAttribute("transform", "matrix(" + w) : k[Et] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + w) : k[Et] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + R + "," + L + "," + j + ")")
                                }
                                if (p && (m = 0.0001, A < m && A > -m && (A = C = 0.00002), R < m && R > -m && (R = C = 0.00002), !I || S.z || S.rotationX || S.rotationY || (I = 0)), M || S.skewX) {
                                    M *= N, v = e = Math.cos(M), g = r = Math.sin(M), S.skewX && (M -= S.skewX * N, v = Math.cos(M), g = Math.sin(M), "simple" === S.skewType && (y = Math.tan((S.skewX - S.skewY) * N), y = Math.sqrt(1 + y * y), v *= y, g *= y, S.skewY && (y = Math.tan(S.skewY * N), y = Math.sqrt(1 + y * y), e *= y, r *= y))), i = -g, s = v
                                } else {
                                    if (!(O || E || 1 !== C || I || F)) {
                                        return void(k[Et] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + j + "px," + D + "px)" + (1 !== A || 1 !== R ? " scale(" + A + "," + R + ")" : ""))
                                    }
                                    e = s = 1, i = r = 0
                                }
                                u = 1, n = o = a = l = c = h = 0, f = I ? -1 / I : 0, d = S.zOrigin, m = 0.000001, b = ",", x = "0", M = O * N, M && (v = Math.cos(M), g = Math.sin(M), a = -g, c = f * -g, n = e * g, o = r * g, u = v, f *= v, e *= v, r *= v), M = E * N, M && (v = Math.cos(M), g = Math.sin(M), y = i * v + n * g, _ = s * v + o * g, l = u * g, h = f * g, n = i * -g + n * v, o = s * -g + o * v, u *= v, f *= v, i = y, s = _), 1 !== C && (n *= C, o *= C, u *= C, f *= C), 1 !== R && (i *= R, s *= R, l *= R, h *= R), 1 !== A && (e *= A, r *= A, a *= A, c *= A), (d || F) && (d && (L += n * -d, j += o * -d, D += u * -d + d), F && (L += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, j += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset), L < m && L > -m && (L = x), j < m && j > -m && (j = x), D < m && D > -m && (D = 0)), w = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", w += (e < m && e > -m ? x : e) + b + (r < m && r > -m ? x : r) + b + (a < m && a > -m ? x : a), w += b + (c < m && c > -m ? x : c) + b + (i < m && i > -m ? x : i) + b + (s < m && s > -m ? x : s), E || O || 1 !== C ? (w += b + (l < m && l > -m ? x : l) + b + (h < m && h > -m ? x : h) + b + (n < m && n > -m ? x : n), w += b + (o < m && o > -m ? x : o) + b + (u < m && u > -m ? x : u) + b + (f < m && f > -m ? x : f) + b) : w += ",0,0,0,0,1,0,", w += L + b + j + b + D + b + (I ? 1 + -D / I : 1) + ")", k[Et] = w
                            };
                        c = Ct.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                            parser: function (t, e, i, n, s, o, l) {
                                if (n._lastParsedTransform === l) {
                                    return s
                                }
                                n._lastParsedTransform = l;
                                var u;
                                "function" == typeof l[i] && (u = l[i], l[i] = e);
                                var c, h, f, d, p, m, v, _, w, b = t._gsTransform,
                                    x = t.style,
                                    T = 0.000001,
                                    P = Mt.length,
                                    S = l,
                                    k = {},
                                    M = "transformOrigin",
                                    E = Ht(t, r, !0, S.parseTransform),
                                    O = S.transform && ("function" == typeof S.transform ? S.transform(y, g) : S.transform);
                                if (n._transform = E, O && "string" == typeof O && Et) {
                                    h = H.style, h[Et] = O, h.display = "block", h.position = "absolute", z.body.appendChild(H), c = Ht(H, null, !1), E.svg && (m = E.xOrigin, v = E.yOrigin, c.x -= E.xOffset, c.y -= E.yOffset, (S.transformOrigin || S.svgOrigin) && (O = {}, Nt(t, at(S.transformOrigin), O, S.svgOrigin, S.smoothOrigin, !0), m = O.xOrigin, v = O.yOrigin, c.x -= O.xOffset - E.xOffset, c.y -= O.yOffset - E.yOffset), (m || v) && (_ = Bt(H, !0), c.x -= m - (m * _[0] + v * _[2]), c.y -= v - (m * _[1] + v * _[3]))), z.body.removeChild(H), c.perspective || (c.perspective = E.perspective), null != S.xPercent && (c.xPercent = ut(S.xPercent, E.xPercent)), null != S.yPercent && (c.yPercent = ut(S.yPercent, E.yPercent))
                                } else {
                                    if ("object" == typeof S) {
                                        if (c = {
                                                scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, E.scaleX),
                                                scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, E.scaleY),
                                                scaleZ: ut(S.scaleZ, E.scaleZ),
                                                x: ut(S.x, E.x),
                                                y: ut(S.y, E.y),
                                                z: ut(S.z, E.z),
                                                xPercent: ut(S.xPercent, E.xPercent),
                                                yPercent: ut(S.yPercent, E.yPercent),
                                                perspective: ut(S.transformPerspective, E.perspective)
                                            }, p = S.directionalRotation, null != p) {
                                            if ("object" == typeof p) {
                                                for (h in p) {
                                                    S[h] = p[h]
                                                }
                                            } else {
                                                S.rotation = p
                                            }
                                        }
                                        "string" == typeof S.x && S.x.indexOf("%") !== -1 && (c.x = 0, c.xPercent = ut(S.x, E.xPercent)), "string" == typeof S.y && S.y.indexOf("%") !== -1 && (c.y = 0, c.yPercent = ut(S.y, E.yPercent)), c.rotation = ct("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : E.rotation - E.skewY, E.rotation - E.skewY, "rotation", k), Rt && (c.rotationX = ct("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", k), c.rotationY = ct("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", k)), c.skewX = ct(S.skewX, E.skewX - E.skewY), (c.skewY = ct(S.skewY, E.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
                                    }
                                }
                                for (Rt && null != S.force3D && (E.force3D = S.force3D, d = !0), E.skewType = S.skewType || E.skewType || a.defaultSkewType, f = E.force3D || E.z || E.rotationX || E.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, f || null == S.scale || (c.scaleZ = 1); --P > -1;) {
                                    w = Mt[P], O = c[w] - E[w], (O > T || O < -T || null != S[w] || null != q[w]) && (d = !0, s = new _t(E, w, E[w], O, s), w in k && (s.e = k[w]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n))
                                }
                                return O = S.transformOrigin, E.svg && (O || S.svgOrigin) && (m = E.xOffset, v = E.yOffset, Nt(t, at(O), c, S.svgOrigin, S.smoothOrigin), s = wt(E, "xOrigin", (b ? E : c).xOrigin, c.xOrigin, s, M), s = wt(E, "yOrigin", (b ? E : c).yOrigin, c.yOrigin, s, M), m === E.xOffset && v === E.yOffset || (s = wt(E, "xOffset", b ? m : E.xOffset, E.xOffset, s, M), s = wt(E, "yOffset", b ? v : E.yOffset, E.yOffset, s, M)), O = kt ? null : "0px 0px"), (O || Rt && f && E.zOrigin) && (Et ? (d = !0, w = At, O = (O || K(t, w, r, !1, "50% 50%")) + "", s = new _t(x, w, 0, 0, s, (-1), M), s.b = x[w], s.plugin = o, Rt ? (h = E.zOrigin, O = O.split(" "), E.zOrigin = (O.length > 2 && (0 === h || "0px" !== O[2]) ? parseFloat(O[2]) : h) || 0, s.xs0 = s.e = O[0] + " " + (O[1] || "50%") + " 0px", s = new _t(E, "zOrigin", 0, 0, s, (-1), s.n), s.b = h, s.xs0 = s.e = E.zOrigin) : s.xs0 = s.e = O) : at(O + "", E)), d && (n._transformType = E.svg && kt || !f && 3 !== this._transformType ? 2 : 3), u && (l[i] = u), s
                            },
                            prefix: !0
                        }), Pt("boxShadow", {
                            defaultValue: "0px 0px 0px 0px #999",
                            prefix: !0,
                            color: !0,
                            multi: !0,
                            keyword: "inset"
                        }), Pt("borderRadius", {
                            defaultValue: "0px",
                            parser: function (t, e, i, s, o, a) {
                                e = this.format(e);
                                var l, u, c, h, f, d, p, m, v, g, y, _, w, b, x, T, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                    S = t.style;
                                for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < P.length; u++) {
                                    this.p.indexOf("border") && (P[u] = Q(P[u])), f = h = K(t, P[u], r, !1, "0px"), f.indexOf(" ") !== -1 && (h = f.split(" "), f = h[0], h = h[1]), d = c = l[u], p = parseFloat(f), _ = f.substr((p + "").length), w = "=" === d.charAt(1), w ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), y = d.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(d), y = d.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (b = tt(t, "borderLeft", p, _), x = tt(t, "borderTop", p, _), "%" === y ? (f = b / v * 100 + "%", h = x / g * 100 + "%") : "em" === y ? (T = tt(t, "borderLeft", 1, "em"), f = b / T + "em", h = x / T + "em") : (f = b + "px", h = x + "px"), w && (d = parseFloat(f) + m + y, c = parseFloat(h) + m + y)), o = bt(S, P[u], f + " " + h, d + " " + c, !1, "0px", o)
                                }
                                return o
                            },
                            prefix: !0,
                            formatter: vt("0px 0px 0px 0px", !1, !0)
                        }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                            defaultValue: "0px",
                            parser: function (t, e, i, n, s, o) {
                                return bt(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
                            },
                            prefix: !0,
                            formatter: vt("0px 0px", !1, !0)
                        }), Pt("backgroundPosition", {
                            defaultValue: "0 0",
                            parser: function (t, e, i, n, s, o) {
                                var a, l, u, c, h, f, d = "background-position",
                                    p = r || J(t, null),
                                    m = this.format((p ? v ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                    g = this.format(e);
                                if (m.indexOf("%") !== -1 != (g.indexOf("%") !== -1) && g.split(",").length < 2 && (f = K(t, "backgroundImage").replace(A, ""), f && "none" !== f)) {
                                    for (a = m.split(" "), l = g.split(" "), V.setAttribute("src", f), u = 2; --u > -1;) {
                                        m = a[u], c = m.indexOf("%") !== -1, c !== (l[u].indexOf("%") !== -1) && (h = 0 === u ? t.offsetWidth - V.width : t.offsetHeight - V.height, a[u] = c ? parseFloat(m) / 100 * h + "px" : parseFloat(m) / h * 100 + "%")
                                    }
                                    m = a.join(" ")
                                }
                                return this.parseComplex(t.style, m, g, s, o)
                            },
                            formatter: at
                        }), Pt("backgroundSize", {
                            defaultValue: "0 0",
                            formatter: function (t) {
                                return t += "", at(t.indexOf(" ") === -1 ? t + " " + t : t)
                            }
                        }), Pt("perspective", {
                            defaultValue: "0px",
                            prefix: !0
                        }), Pt("perspectiveOrigin", {
                            defaultValue: "50% 50%",
                            prefix: !0
                        }), Pt("transformStyle", {
                            prefix: !0
                        }), Pt("backfaceVisibility", {
                            prefix: !0
                        }), Pt("userSelect", {
                            prefix: !0
                        }), Pt("margin", {
                            parser: gt("marginTop,marginRight,marginBottom,marginLeft")
                        }), Pt("padding", {
                            parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                        }), Pt("clip", {
                            defaultValue: "rect(0px,0px,0px,0px)",
                            parser: function (t, e, i, n, s, o) {
                                var a, l, u;
                                return v < 9 ? (l = t.currentStyle, u = v < 8 ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(K(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                            }
                        }), Pt("textShadow", {
                            defaultValue: "0px 0px 0px #999",
                            color: !0,
                            multi: !0
                        }), Pt("autoRound,strictUnits", {
                            parser: function (t, e, i, n, r) {
                                return r
                            }
                        }), Pt("border", {
                            defaultValue: "0px solid #000",
                            parser: function (t, e, i, n, s, o) {
                                var a = K(t, "borderTopWidth", r, !1, "0px"),
                                    l = this.format(e).split(" "),
                                    u = l[0].replace(T, "");
                                return "px" !== u && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
                            },
                            color: !0,
                            formatter: function (t) {
                                var e = t.split(" ");
                                return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                            }
                        }), Pt("borderWidth", {
                            parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                        }), Pt("float,cssFloat,styleFloat", {
                            parser: function (t, e, i, n, r, s) {
                                var o = t.style,
                                    a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                                return new _t(o, a, 0, 0, r, (-1), i, (!1), 0, o[a], e)
                            }
                        });
                        var Wt = function (t) {
                            var e, i = this.t,
                                n = i.filter || K(this.data, "filter") || "",
                                r = this.s + this.c * t | 0;
                            100 === r && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), n.indexOf("pacity") === -1 ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(P, "opacity=" + r))
                        };
                        Pt("opacity,alpha,autoAlpha", {
                            defaultValue: "1",
                            parser: function (t, e, i, n, s, o) {
                                var a = parseFloat(K(t, "opacity", r, !1, "1")),
                                    l = t.style,
                                    u = "autoAlpha" === i;
                                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === K(t, "visibility", r) && 0 !== e && (a = 0), G ? s = new _t(l, "opacity", a, e - a, s) : (s = new _t(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Wt), u && (s = new _t(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                            }
                        });
                        var Gt = function (t, e) {
                                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
                            },
                            Yt = function (t) {
                                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                    for (var e = this.data, i = this.t.style; e;) {
                                        e.v ? i[e.p] = e.v : Gt(i, e.p), e = e._next
                                    }
                                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                } else {
                                    this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                                }
                            };
                        Pt("className", {
                            parser: function (t, e, n, s, o, a, l) {
                                var u, c, h, f, d, p = t.getAttribute("class") || "",
                                    m = t.style.cssText;
                                if (o = s._classNamePT = new _t(t, n, 0, 0, o, 2), o.setRatio = Yt, o.pr = -11, i = !0, o.b = p, c = it(t, r), h = t._gsClassPT) {
                                    for (f = {}, d = h.data; d;) {
                                        f[d.p] = 1, d = d._next
                                    }
                                    h.setRatio(1)
                                }
                                return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = nt(t, c, it(t), l, f), t.setAttribute("class", p), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)
                            }
                        });
                        var Xt = function (t) {
                            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                var e, i, n, r, s, o = this.t.style,
                                    a = u.transform.parse;
                                if ("all" === this.e) {
                                    o.cssText = "", r = !0
                                } else {
                                    for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) {
                                        i = e[n], u[i] && (u[i].parse === a ? r = !0 : i = "transformOrigin" === i ? At : u[i].p), Gt(o, i)
                                    }
                                }
                                r && (Gt(o, Et), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                            }
                        };
                        for (Pt("clearProps", {
                                parser: function (t, e, n, r, s) {
                                    return s = new _t(t, n, 0, 0, s, 2), s.setRatio = Xt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                                }
                            }), c = "bezier,throwProps,physicsProps,physics2D".split(","), xt = c.length; xt--;) {
                            St(c[xt])
                        }
                        c = a.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function (t, e, o, l) {
                            if (!t.nodeType) {
                                return !1
                            }
                            this._target = g = t, this._tween = o, this._vars = e, y = l, h = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, r = J(t, ""), s = this._overwriteProps;
                            var c, p, v, _, w, b, x, T, P, k = t.style;
                            if (f && "" === k.zIndex && (c = K(t, "zIndex", r), "auto" !== c && "" !== c || this._addLazySet(k, "zIndex", 0)), "string" == typeof e && (_ = k.cssText, c = it(t, r), k.cssText = _ + ";" + e, c = nt(t, c, it(t)).difs, !G && S.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, k.cssText = _), e.className ? this._firstPT = p = u.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                                for (P = 3 === this._transformType, Et ? d && (f = !0, "" === k.zIndex && (x = K(t, "zIndex", r), "auto" !== x && "" !== x || this._addLazySet(k, "zIndex", 0)), m && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : k.zoom = 1, v = p; v && v._next;) {
                                    v = v._next
                                }
                                T = new _t(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, v), T.setRatio = Et ? Ut : Vt, T.data = this._transform || Ht(t, r, !0), T.tween = o, T.pr = -1, s.pop()
                            }
                            if (i) {
                                for (; p;) {
                                    for (b = p._next, v = _; v && v.pr > p.pr;) {
                                        v = v._next
                                    }(p._prev = v ? v._prev : w) ? p._prev._next = p: _ = p, (p._next = v) ? v._prev = p : w = p, p = b
                                }
                                this._firstPT = _
                            }
                            return !0
                        }, c.parse = function (t, e, i, s) {
                            var o, a, l, c, f, d, p, m, v, _, w = t.style;
                            for (o in e) {
                                d = e[o], "function" == typeof d && (d = d(y, g)), a = u[o], a ? i = a.parse(t, d, o, this, i, s, e) : (f = K(t, o, r) + "", v = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || o.indexOf("Color") !== -1 || v && M.test(d) ? (v || (d = dt(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = bt(w, o, f, d, !0, "transparent", i, 0, s)) : v && F.test(d) ? i = bt(w, o, f, d, !0, null, i, 0, s) : (l = parseFloat(f), p = l || 0 === l ? f.substr((l + "").length) : "", "" !== f && "auto" !== f || ("width" === o || "height" === o ? (l = ot(t, o, r), p = "px") : "left" === o || "top" === o ? (l = et(t, o, r), p = "px") : (l = "opacity" !== o ? 0 : 1, p = "")), _ = v && "=" === d.charAt(1), _ ? (c = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), c *= parseFloat(d), m = d.replace(T, "")) : (c = parseFloat(d), m = v ? d.replace(T, "") : ""), "" === m && (m = o in n ? n[o] : p), d = c || 0 === c ? (_ ? c + l : c) + m : e[o], p !== m && "" !== m && (c || 0 === c) && l && (l = tt(t, o, l, p), "%" === m ? (l /= tt(t, o, 100, "%") / 100, e.strictUnits !== !0 && (f = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= tt(t, o, 1, m) : "px" !== m && (c = tt(t, o, c, m), m = "px"), _ && (c || 0 === c) && (d = c + l + m)), _ && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== w[o] && (d || d + "" != "NaN" && null != d) ? (i = new _t(w, o, c || l || 0, 0, i, (-1), o, (!1), 0, f, d), i.xs0 = "none" !== d || "display" !== o && o.indexOf("Style") === -1 ? d : f) : X("invalid " + o + " tween value: " + e[o]) : (i = new _t(w, o, l, c - l, i, 0, o, h !== !1 && ("px" === m || "zIndex" === o), 0, f, d), i.xs0 = m))), s && i && !i.plugin && (i.plugin = s)
                            }
                            return i
                        }, c.setRatio = function (t) {
                            var e, i, n, r = this._firstPT,
                                s = 0.000001;
                            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
                                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001) {
                                    for (; r;) {
                                        if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < s && e > -s && (e = 0), r.type) {
                                            if (1 === r.type) {
                                                if (n = r.l, 2 === n) {
                                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2
                                                } else {
                                                    if (3 === n) {
                                                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3
                                                    } else {
                                                        if (4 === n) {
                                                            r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4
                                                        } else {
                                                            if (5 === n) {
                                                                r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5
                                                            } else {
                                                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) {
                                                                    i += r["xn" + n] + r["xs" + (n + 1)]
                                                                }
                                                                r.t[r.p] = i
                                                            }
                                                        }
                                                    }
                                                }
                                            } else {
                                                r.type === -1 ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t)
                                            }
                                        } else {
                                            r.t[r.p] = e + r.xs0
                                        }
                                        r = r._next
                                    }
                                } else {
                                    for (; r;) {
                                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next
                                    }
                                }
                            } else {
                                for (; r;) {
                                    if (2 !== r.type) {
                                        if (r.r && r.type !== -1) {
                                            if (e = Math.round(r.s + r.c), r.type) {
                                                if (1 === r.type) {
                                                    for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) {
                                                        i += r["xn" + n] + r["xs" + (n + 1)]
                                                    }
                                                    r.t[r.p] = i
                                                }
                                            } else {
                                                r.t[r.p] = e + r.xs0
                                            }
                                        } else {
                                            r.t[r.p] = r.e
                                        }
                                    } else {
                                        r.setRatio(t)
                                    }
                                    r = r._next
                                }
                            }
                        }, c._enableTransforms = function (t) {
                            this._transform = this._transform || Ht(this._target, r, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3
                        };
                        var $t = function (t) {
                            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                        };
                        c._addLazySet = function (t, e, i) {
                            var n = this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2);
                            n.e = i, n.setRatio = $t, n.data = this
                        }, c._linkCSSP = function (t, e, i, n) {
                            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                        }, c._mod = function (t) {
                            for (var e = this._firstPT; e;) {
                                "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                            }
                        }, c._kill = function (e) {
                            var i, n, r, s = e;
                            if (e.autoAlpha || e.alpha) {
                                s = {};
                                for (n in e) {
                                    s[n] = e[n]
                                }
                                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                            }
                            for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) {
                                i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next
                            }
                            return t.prototype._kill.call(this, s)
                        };
                        var Zt = function (t, e, i) {
                            var n, r, s, o;
                            if (t.slice) {
                                for (r = t.length; --r > -1;) {
                                    Zt(t[r], e, i)
                                }
                            } else {
                                for (n = t.childNodes, r = n.length; --r > -1;) {
                                    s = n[r], o = s.type, s.style && (e.push(it(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Zt(s, e, i)
                                }
                            }
                        };
                        return a.cascadeTo = function (t, i, n) {
                            var r, s, o, a, l = e.to(t, i, n),
                                u = [l],
                                c = [],
                                h = [],
                                f = [],
                                d = e._internals.reservedProps;
                            for (t = l._targets || l.target, Zt(t, c, f), l.render(i, !0, !0), Zt(t, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;) {
                                if (s = nt(f[r], c[r], h[r]), s.firstMPT) {
                                    s = s.difs;
                                    for (o in n) {
                                        d[o] && (s[o] = n[o])
                                    }
                                    a = {};
                                    for (o in s) {
                                        a[o] = c[r][o]
                                    }
                                    u.push(e.fromTo(f[r], i, a, s))
                                }
                            }
                            return u
                        }, t.activate([a]), a
                    }, !0),
                    function () {
                        var t = o._gsDefine.plugin({
                                propName: "roundProps",
                                version: "1.6.0",
                                priority: -1,
                                API: 2,
                                init: function (t, e, i) {
                                    return this._tween = i, !0
                                }
                            }),
                            e = function (t) {
                                for (; t;) {
                                    t.f || t.blob || (t.m = Math.round), t = t._next
                                }
                            },
                            i = t.prototype;
                        i._onInitAllProps = function () {
                            for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) {
                                a[s[o]] = Math.round
                            }
                            for (o = s.length; --o > -1;) {
                                for (t = s[o], i = r._firstPT; i;) {
                                    n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n
                                }
                            }
                            return !1
                        }, i._add = function (t, e, i, n) {
                            this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                        }
                    }(),
                    function () {
                        o._gsDefine.plugin({
                            propName: "attr",
                            API: 2,
                            version: "0.6.0",
                            init: function (t, e, i, n) {
                                var r, s;
                                if ("function" != typeof t.setAttribute) {
                                    return !1
                                }
                                for (r in e) {
                                    s = e[r], "function" == typeof s && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r)
                                }
                                return !0
                            }
                        })
                    }(), o._gsDefine.plugin({
                        propName: "directionalRotation",
                        version: "0.3.0",
                        API: 2,
                        init: function (t, e, i, n) {
                            "object" != typeof e && (e = {
                                rotation: e
                            }), this.finals = {};
                            var r, s, o, a, l, u, c = e.useRadians === !0 ? 2 * Math.PI : 360,
                                h = 0.000001;
                            for (r in e) {
                                "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), u = (a + "").split("_"), s = u[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - o, u.length && (s = u.join("_"), s.indexOf("short") !== -1 && (l %= c, l !== l % (c / 2) && (l = l < 0 ? l + c : l - c)), s.indexOf("_cw") !== -1 && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : s.indexOf("ccw") !== -1 && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > h || l < -h) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)))
                            }
                            return !0
                        },
                        set: function (t) {
                            var e;
                            if (1 !== t) {
                                this._super.setRatio.call(this, t)
                            } else {
                                for (e = this._firstPT; e;) {
                                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                                }
                            }
                        }
                    })._autoCSS = !0, o._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                        var e, i, n, r = o.GreenSockGlobals || o,
                            s = r.com.greensock,
                            a = 2 * Math.PI,
                            l = Math.PI / 2,
                            u = s._class,
                            c = function (e, i) {
                                var n = u("easing." + e, function () {}, !0),
                                    r = n.prototype = new t;
                                return r.constructor = n, r.getRatio = i, n
                            },
                            h = t.register || function () {},
                            f = function (t, e, i, n, r) {
                                var s = u("easing." + t, {
                                    easeOut: new e,
                                    easeIn: new i,
                                    easeInOut: new n
                                }, !0);
                                return h(s, t), s
                            },
                            d = function (t, e, i) {
                                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                            },
                            p = function (e, i) {
                                var n = u("easing." + e, function (t) {
                                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                    }, !0),
                                    r = n.prototype = new t;
                                return r.constructor = n, r.getRatio = i, r.config = function (t) {
                                    return new n(t)
                                }, n
                            },
                            m = f("Back", p("BackOut", function (t) {
                                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                            }), p("BackIn", function (t) {
                                return t * t * ((this._p1 + 1) * t - this._p1)
                            }), p("BackInOut", function (t) {
                                return (t *= 2) < 1 ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                            })),
                            v = u("easing.SlowMo", function (t, e, i) {
                                e = e || 0 === e ? e : 0.7, null == t ? t = 0.7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                            }, !0),
                            g = v.prototype = new t;
                        return g.constructor = v, g.getRatio = function (t) {
                            var e = t + (0.5 - t) * this._p;
                            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                        }, v.ease = new v(0.7, 0.7), g.config = v.config = function (t, e, i) {
                            return new v(t, e, i)
                        }, e = u("easing.SteppedEase", function (t) {
                            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                        }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
                            return t < 0 ? t = 0 : t >= 1 && (t = 0.999999999), (this._p2 * t >> 0) * this._p1
                        }, g.config = e.config = function (t) {
                            return new e(t)
                        }, i = u("easing.RoughEase", function (e) {
                            e = e || {};
                            for (var i, n, r, s, o, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), f = h, p = e.randomize !== !1, m = e.clamp === !0, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? 0.4 * e.strength : 0.4; --f > -1;) {
                                i = p ? Math.random() : 1 / h * f, n = v ? v.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (s = 1 - i, r = s * s * g) : "in" === l ? r = i * i * g : i < 0.5 ? (s = 2 * i, r = s * s * 0.5 * g) : (s = 2 * (1 - i), r = s * s * 0.5 * g), p ? n += Math.random() * r - 0.5 * r : f % 2 ? n += 0.5 * r : n -= 0.5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), u[c++] = {
                                    x: i,
                                    y: n
                                }
                            }
                            for (u.sort(function (t, e) {
                                    return t.x - e.x
                                }), a = new d(1, 1, null), f = h; --f > -1;) {
                                o = u[f], a = new d(o.x, o.y, a)
                            }
                            this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
                        }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
                            var e = this._prev;
                            if (t > e.t) {
                                for (; e.next && t >= e.t;) {
                                    e = e.next
                                }
                                e = e.prev
                            } else {
                                for (; e.prev && t <= e.t;) {
                                    e = e.prev
                                }
                            }
                            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                        }, g.config = function (t) {
                            return new i(t)
                        }, i.ease = new i, f("Bounce", c("BounceOut", function (t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
                        }), c("BounceIn", function (t) {
                            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)
                        }), c("BounceInOut", function (t) {
                            var e = t < 0.5;
                            return t = e ? 1 - 2 * t : 2 * t - 1, t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375, e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                        })), f("Circ", c("CircOut", function (t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        }), c("CircIn", function (t) {
                            return -(Math.sqrt(1 - t * t) - 1)
                        }), c("CircInOut", function (t) {
                            return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        })), n = function (e, i, n) {
                            var r = u("easing." + e, function (t, e) {
                                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                                }, !0),
                                s = r.prototype = new t;
                            return s.constructor = r, s.getRatio = i, s.config = function (t, e) {
                                return new r(t, e)
                            }, r
                        }, f("Elastic", n("ElasticOut", function (t) {
                            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                        }, 0.3), n("ElasticIn", function (t) {
                            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                        }, 0.3), n("ElasticInOut", function (t) {
                            return (t *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * 0.5 + 1
                        }, 0.45)), f("Expo", c("ExpoOut", function (t) {
                            return 1 - Math.pow(2, -10 * t)
                        }), c("ExpoIn", function (t) {
                            return Math.pow(2, 10 * (t - 1)) - 0.001
                        }), c("ExpoInOut", function (t) {
                            return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
                        })), f("Sine", c("SineOut", function (t) {
                            return Math.sin(t * l)
                        }), c("SineIn", function (t) {
                            return -Math.cos(t * l) + 1
                        }), c("SineInOut", function (t) {
                            return -0.5 * (Math.cos(Math.PI * t) - 1)
                        })), u("easing.EaseLookup", {
                            find: function (e) {
                                return t.map[e]
                            }
                        }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), m
                    }, !0)
            }), o._gsDefine && o._gsQueue.pop()(),
            function (s, o) {
                var a = {},
                    l = s.GreenSockGlobals = s.GreenSockGlobals || s;
                if (!l.TweenLite) {
                    var u, c, h, f, d, p = function (t) {
                            var e, i = t.split("."),
                                n = l;
                            for (e = 0; e < i.length; e++) {
                                n[i[e]] = n = n[i[e]] || {}
                            }
                            return n
                        },
                        m = p("com.greensock"),
                        v = 1e-10,
                        g = function (t) {
                            var e, i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++])) {}
                            return i
                        },
                        y = function () {},
                        _ = function () {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function (i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                            }
                        }(),
                        w = {},
                        b = function (s, u, c, h) {
                            this.sc = w[s] ? w[s].sc : [], w[s] = this, this.gsClass = null, this.func = c;
                            var f = [];
                            this.check = function (d) {
                                for (var m, v, g, y, _, x = u.length, T = x; --x > -1;) {
                                    (m = w[u[x]] || new b(u[x], [])).gsClass ? (f[x] = m.gsClass, T--) : d && m.sc.push(this)
                                }
                                if (0 === T && c) {
                                    if (v = ("com.greensock." + s).split("."), g = v.pop(), y = p(v.join("."))[g] = this.gsClass = c.apply(c, f), h) {
                                        if (l[g] = a[g] = y, _ = "undefined" != typeof t && t.exports, !_ && i(144)) {
                                            n = [], r = function () {
                                                return y
                                            }.apply(e, n), !(void 0 !== r && (t.exports = r))
                                        } else {
                                            if (_) {
                                                if (s === o) {
                                                    t.exports = a[o] = y;
                                                    for (x in a) {
                                                        y[x] = a[x]
                                                    }
                                                } else {
                                                    a[o] && (a[o][g] = y)
                                                }
                                            }
                                        }
                                    }
                                    for (x = 0; x < this.sc.length; x++) {
                                        this.sc[x].check()
                                    }
                                }
                            }, this.check(!0)
                        },
                        x = s._gsDefine = function (t, e, i, n) {
                            return new b(t, e, i, n)
                        },
                        T = m._class = function (t, e, i) {
                            return e = e || function () {}, x(t, [], function () {
                                return e
                            }, i), e
                        };
                    x.globals = l;
                    var P = [0, 0, 1, 1],
                        S = T("easing.Ease", function (t, e, i, n) {
                            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? P.concat(e) : P
                        }, !0),
                        k = S.map = {},
                        M = S.register = function (t, e, i, n) {
                            for (var r, s, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;) {
                                for (s = l[u], r = n ? T("easing." + s, null, !0) : m.easing[s] || {}, o = c.length; --o > -1;) {
                                    a = c[o], k[s + "." + a] = k[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                                }
                            }
                        };
                    for (h = S.prototype, h._calcEnd = !1, h.getRatio = function (t) {
                            if (this._func) {
                                return this._params[0] = t, this._func.apply(null, this._params)
                            }
                            var e = this._type,
                                i = this._power,
                                n = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
                            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2
                        }, u = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], c = u.length; --c > -1;) {
                        h = u[c] + ",Power" + c, M(new S(null, null, 1, c), h, "easeOut", !0), M(new S(null, null, 2, c), h, "easeIn" + (0 === c ? ",easeNone" : "")), M(new S(null, null, 3, c), h, "easeInOut")
                    }
                    k.linear = m.easing.Linear.easeIn, k.swing = m.easing.Quad.easeInOut;
                    var E = T("events.EventDispatcher", function (t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    h = E.prototype, h.addEventListener = function (t, e, i, n, r) {
                        r = r || 0;
                        var s, o, a = this._listeners[t],
                            l = 0;
                        for (this !== f || d || f.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;) {
                            s = a[o], s.c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1)
                        }
                        a.splice(l, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: r
                        })
                    }, h.removeEventListener = function (t, e) {
                        var i, n = this._listeners[t];
                        if (n) {
                            for (i = n.length; --i > -1;) {
                                if (n[i].c === e) {
                                    return void n.splice(i, 1)
                                }
                            }
                        }
                    }, h.dispatchEvent = function (t) {
                        var e, i, n, r = this._listeners[t];
                        if (r) {
                            for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) {
                                n = r[e], n && (n.up ? n.c.call(n.s || i, {
                                    type: t,
                                    target: i
                                }) : n.c.call(n.s || i))
                            }
                        }
                    };
                    var O = s.requestAnimationFrame,
                        A = s.cancelAnimationFrame,
                        R = Date.now || function () {
                            return (new Date).getTime()
                        },
                        C = R();
                    for (u = ["ms", "moz", "webkit", "o"], c = u.length; --c > -1 && !O;) {
                        O = s[u[c] + "RequestAnimationFrame"], A = s[u[c] + "CancelAnimationFrame"] || s[u[c] + "CancelRequestAnimationFrame"]
                    }
                    T("Ticker", function (t, e) {
                        var i, n, r, s, o, a = this,
                            l = R(),
                            u = !(e === !1 || !O) && "auto",
                            c = 500,
                            h = 33,
                            p = "tick",
                            m = function (t) {
                                var e, u, f = R() - C;
                                f > c && (l += f - h), C += f, a.time = (C - l) / 1000, e = a.time - o, (!i || e > 0 || t === !0) && (a.frame++, o += e + (e >= s ? 0.004 : s - e), u = !0), t !== !0 && (r = n(m)), u && a.dispatchEvent(p)
                            };
                        E.call(a), a.time = a.frame = 0, a.tick = function () {
                            m(!0)
                        }, a.lagSmoothing = function (t, e) {
                            c = t || 1 / v, h = Math.min(e, c, 0)
                        }, a.sleep = function () {
                            null != r && (u && A ? A(r) : clearTimeout(r), n = y, r = null, a === f && (d = !1))
                        }, a.wake = function (t) {
                            null !== r ? a.sleep() : t ? l += -C + (C = R()) : a.frame > 10 && (C = R() - c + 5), n = 0 === i ? y : u && O ? O : function (t) {
                                return setTimeout(t, 1000 * (o - a.time) + 1 | 0)
                            }, a === f && (d = !0), m(2)
                        }, a.fps = function (t) {
                            return arguments.length ? (i = t, s = 1 / (i || 60), o = this.time + s, void a.wake()) : i
                        }, a.useRAF = function (t) {
                            return arguments.length ? (a.sleep(), u = t, void a.fps(i)) : u
                        }, a.fps(t), setTimeout(function () {
                            "auto" === u && a.frame < 5 && "hidden" !== document.visibilityState && a.useRAF(!1)
                        }, 1500)
                    }), h = m.Ticker.prototype = new m.events.EventDispatcher, h.constructor = m.Ticker;
                    var L = T("core.Animation", function (t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, J) {
                            d || f.wake();
                            var i = this.vars.useFrames ? Q : J;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    f = L.ticker = new m.Ticker, h = L.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
                    var j = function () {
                        d && R() - C > 2000 && f.wake(), setTimeout(j, 2000)
                    };
                    j(), h.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, h.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, h.resume = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, h.seek = function (t, e) {
                        return this.totalTime(Number(t), e !== !1)
                    }, h.restart = function (t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                    }, h.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, h.render = function (t, e, i) {}, h.invalidate = function () {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, h.isActive = function () {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
                    }, h._enabled = function (t, e) {
                        return d || f.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, h._kill = function (t, e) {
                        return this._enabled(!1, !1)
                    }, h.kill = function (t, e) {
                        return this._kill(t, e), this
                    }, h._uncache = function (t) {
                        for (var e = t ? this : this.timeline; e;) {
                            e._dirty = !0, e = e.timeline
                        }
                        return this
                    }, h._swapSelfInParams = function (t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) {
                            "{self}" === t[e] && (i[e] = this)
                        }
                        return i
                    }, h._callback = function (t) {
                        var e = this.vars,
                            i = e[t],
                            n = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this,
                            s = n ? n.length : 0;
                        switch (s) {
                            case 0:
                                i.call(r);
                                break;
                            case 1:
                                i.call(r, n[0]);
                                break;
                            case 2:
                                i.call(r, n[0], n[1]);
                                break;
                            default:
                                i.apply(r, n)
                        }
                    }, h.eventCallback = function (t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) {
                                return r[t]
                            }
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = _(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, h.delay = function (t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, h.duration = function (t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, h.totalDuration = function (t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, h.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, h.totalTime = function (t, e, i) {
                        if (d || f.wake(), !arguments.length) {
                            return this._totalTime
                        }
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) {
                                    for (; r._timeline;) {
                                        r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                                    }
                                }
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (q.length && tt(), this.render(t, e, !1), q.length && tt())
                        }
                        return this
                    }, h.progress = h.totalProgress = function (t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, h.startTime = function (t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, h.endTime = function (t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, h.timeScale = function (t) {
                        if (!arguments.length) {
                            return this._timeScale
                        }
                        if (t = t || v, this._timeline && this._timeline.smoothChildTiming) {
                            var e = this._pauseTime,
                                i = e || 0 === e ? e : this._timeline.totalTime();
                            this._startTime = i - (i - this._startTime) * this._timeScale / t
                        }
                        return this._timeScale = t, this._uncache(!1)
                    }, h.reversed = function (t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, h.paused = function (t) {
                        if (!arguments.length) {
                            return this._paused
                        }
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (d || t || f.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var D = T("core.SimpleTimeline", function (t) {
                        L.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    h = D.prototype = new L, h.constructor = D, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function (t, e, i, n) {
                        var r, s;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) {
                            for (s = t._startTime; r && r._startTime > s;) {
                                r = r._prev
                            }
                        }
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, h._remove = function (t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, h.render = function (t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) {
                            n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                        }
                    }, h.rawTime = function () {
                        return d || f.wake(), this._totalTime
                    };
                    var F = T("TweenLite", function (t, e, i) {
                            if (L.call(this, e, i), this.render = F.prototype.render, null == t) {
                                throw ""
                            }
                            this.target = t = "string" != typeof t ? t : F.selector(t) || t;
                            var n, r, o, a = t.jquery || t.length && t !== s && t[0] && (t[0] === s || t[0].nodeType && t[0].style && !t.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? Z[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : Z[l], (a || t instanceof Array || t.push && _(t)) && "number" != typeof t[0]) {
                                for (this._targets = o = g(t), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++) {
                                    r = o[n], r ? "string" != typeof r ? r.length && r !== s && r[0] && (r[0] === s || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(g(r))) : (this._siblings[n] = et(r, this, !1), 1 === l && this._siblings[n].length > 1 && nt(r, this, null, 1, this._siblings[n])) : (r = o[n--] = F.selector(r), "string" == typeof r && o.splice(n + 1, 1)) : o.splice(n--, 1)
                                }
                            } else {
                                this._propLookup = {}, this._siblings = et(t, this, !1), 1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings)
                            }(this.vars.immediateRender || 0 === e && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -v, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        N = function (t) {
                            return t && t.length && t !== s && t[0] && (t[0] === s || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        I = function (t, e) {
                            var i, n = {};
                            for (i in t) {
                                $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!G[i] || G[i] && G[i]._autoCSS) || (n[i] = t[i], delete t[i])
                            }
                            t.css = n
                        };
                    h = F.prototype = new L, h.constructor = F, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, F.version = "1.19.0", F.defaultEase = h._ease = new S(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = f, F.autoSleep = 120, F.lagSmoothing = function (t, e) {
                        f.lagSmoothing(t, e)
                    }, F.selector = s.$ || s.jQuery || function (t) {
                        var e = s.$ || s.jQuery;
                        return e ? (F.selector = e, e(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var q = [],
                        z = {},
                        B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        H = function (t) {
                            for (var e, i = this._firstPT, n = 0.000001; i;) {
                                e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < n && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                            }
                        },
                        V = function (t, e, i, n) {
                            var r, s, o, a, l, u, c, h = [t, e],
                                f = 0,
                                d = "",
                                p = 0;
                            for (h.start = t, i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(B) || [], s = e.match(B) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = s.length, a = 0; a < l; a++) {
                                c = s[a], u = e.substr(f, e.indexOf(c, f) - f), d += u || !a ? u : ",", f += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), c === r[a] || r.length <= a ? d += c : (d && (h.push(d), d = ""), o = parseFloat(r[a]), h.push(o), h._firstPT = {
                                    _next: h._firstPT,
                                    t: h,
                                    p: h.length - 1,
                                    s: o,
                                    c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                                    f: 0,
                                    m: p && p < 4 ? Math.round : 0
                                }), f += c.length
                            }
                            return d += e.substr(f), d && h.push(d), h.setRatio = H, h
                        },
                        U = function (t, e, i, n, r, s, o, a, l) {
                            "function" == typeof n && (n = n(l || 0, t));
                            var u, c, h = "get" === i ? t[e] : i,
                                f = typeof t[e],
                                d = "string" == typeof n && "=" === n.charAt(1),
                                p = {
                                    t: t,
                                    p: e,
                                    s: h,
                                    f: "function" === f,
                                    pg: 0,
                                    n: r || e,
                                    m: s ? "function" == typeof s ? s : Math.round : 0,
                                    pr: 0,
                                    c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                                };
                            if ("number" !== f && ("function" === f && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = h = o ? t[c](o) : t[c]()), "string" == typeof h && (o || isNaN(h)) ? (p.fp = o, u = V(h, n, a || F.defaultStringFilter, p), p = {
                                    t: u,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : d || (p.s = parseFloat(h), p.c = parseFloat(n) - p.s || 0)), p.c) {
                                return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
                            }
                        },
                        W = F._internals = {
                            isArray: _,
                            isSelector: N,
                            lazyTweens: q,
                            blobDif: V
                        },
                        G = F._plugins = {},
                        Y = W.tweenLookup = {},
                        X = 0,
                        $ = W.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1
                        },
                        Z = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            "true": 1,
                            "false": 0
                        },
                        Q = L._rootFramesTimeline = new D,
                        J = L._rootTimeline = new D,
                        K = 30,
                        tt = W.lazyRender = function () {
                            var t, e = q.length;
                            for (z = {}; --e > -1;) {
                                t = q[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1)
                            }
                            q.length = 0
                        };
                    J._startTime = f.time, Q._startTime = f.frame, J._active = Q._active = !0, setTimeout(tt, 1), L._updateRoot = F.render = function () {
                        var t, e, i;
                        if (q.length && tt(), J.render((f.time - J._startTime) * J._timeScale, !1, !1), Q.render((f.frame - Q._startTime) * Q._timeScale, !1, !1), q.length && tt(), f.frame >= K) {
                            K = f.frame + (parseInt(F.autoSleep, 10) || 120);
                            for (i in Y) {
                                for (e = Y[i].tweens, t = e.length; --t > -1;) {
                                    e[t]._gc && e.splice(t, 1)
                                }
                                0 === e.length && delete Y[i]
                            }
                            if (i = J._first, (!i || i._paused) && F.autoSleep && !Q._first && 1 === f._listeners.tick.length) {
                                for (; i && i._paused;) {
                                    i = i._next
                                }
                                i || f.sleep()
                            }
                        }
                    }, f.addEventListener("tick", L._updateRoot);
                    var et = function (t, e, i) {
                            var n, r, s = t._gsTweenID;
                            if (Y[s || (t._gsTweenID = s = "t" + X++)] || (Y[s] = {
                                    target: t,
                                    tweens: []
                                }), e && (n = Y[s].tweens, n[r = n.length] = e, i)) {
                                for (; --r > -1;) {
                                    n[r] === e && n.splice(r, 1)
                                }
                            }
                            return Y[s].tweens
                        },
                        it = function (t, e, i, n) {
                            var r, s, o = t.vars.onOverwrite;
                            return o && (r = o(t, e, i, n)), o = F.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                        },
                        nt = function (t, e, i, n, r) {
                            var s, o, a, l;
                            if (1 === n || n >= 4) {
                                for (l = r.length, s = 0; s < l; s++) {
                                    if ((a = r[s]) !== e) {
                                        a._gc || a._kill(null, t, e) && (o = !0)
                                    } else {
                                        if (5 === n) {
                                            break
                                        }
                                    }
                                }
                                return o
                            }
                            var u, c = e._startTime + v,
                                h = [],
                                f = 0,
                                d = 0 === e._duration;
                            for (s = r.length; --s > -1;) {
                                (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || rt(e, 0, d), 0 === rt(a, u, d) && (h[f++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (h[f++] = a)))
                            }
                            for (s = f; --s > -1;) {
                                if (a = h[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                                    if (2 !== n && !it(a, e)) {
                                        continue
                                    }
                                    a._enabled(!1, !1) && (o = !0)
                                }
                            }
                            return o
                        },
                        rt = function (t, e, i) {
                            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                                if (s += n._startTime, r *= n._timeScale, n._paused) {
                                    return -100
                                }
                                n = n._timeline
                            }
                            return s /= r, s > e ? s - e : i && s === e || !t._initted && s - e < 2 * v ? v : (s += t.totalDuration() / t._timeScale / r) > e + v ? 0 : s - e - v
                        };
                    h._init = function () {
                        var t, e, i, n, r, s, o = this.vars,
                            a = this._overwrittenProps,
                            l = this._duration,
                            u = !!o.immediateRender,
                            c = o.ease;
                        if (o.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in o.startAt) {
                                r[n] = o.startAt[n]
                            }
                            if (r.overwrite = !1, r.immediateRender = !0, r.lazy = u && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = F.to(this.target, 0, r), u) {
                                if (this._time > 0) {
                                    this._startAt = null
                                } else {
                                    if (0 !== l) {
                                        return
                                    }
                                }
                            }
                        } else {
                            if (o.runBackwards && 0 !== l) {
                                if (this._startAt) {
                                    this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null
                                } else {
                                    0 !== this._time && (u = !1), i = {};
                                    for (n in o) {
                                        $[n] && "autoCSS" !== n || (i[n] = o[n])
                                    }
                                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && o.lazy !== !1, i.immediateRender = u, this._startAt = F.to(this.target, 0, i), u) {
                                        if (0 === this._time) {
                                            return
                                        }
                                    } else {
                                        this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                                    }
                                }
                            }
                        }
                        if (this._ease = c = c ? c instanceof S ? c : "function" == typeof c ? new S(c, o.easeParams) : k[c] || F.defaultEase : F.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) {
                            for (s = this._targets.length, t = 0; t < s; t++) {
                                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0)
                            }
                        } else {
                            e = this._initProps(this.target, this._propLookup, this._siblings, a, 0)
                        }
                        if (e && F._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards) {
                            for (i = this._firstPT; i;) {
                                i.s += i.c, i.c = -i.c, i = i._next
                            }
                        }
                        this._onUpdate = o.onUpdate, this._initted = !0
                    }, h._initProps = function (t, e, i, n, r) {
                        var o, a, l, u, c, h;
                        if (null == t) {
                            return !1
                        }
                        z[t._gsTweenID] && tt(), this.vars.css || t.style && t !== s && t.nodeType && G.css && this.vars.autoCSS !== !1 && I(this.vars, t);
                        for (o in this.vars) {
                            if (h = this.vars[o], $[o]) {
                                h && (h instanceof Array || h.push && _(h)) && h.join("").indexOf("{self}") !== -1 && (this.vars[o] = h = this._swapSelfInParams(h, this))
                            } else {
                                if (G[o] && (u = new G[o])._onInitTween(t, this.vars[o], this, r)) {
                                    for (this._firstPT = c = {
                                            _next: this._firstPT,
                                            t: u,
                                            p: "setRatio",
                                            s: 0,
                                            c: 1,
                                            f: 1,
                                            n: o,
                                            pg: 1,
                                            pr: u._priority,
                                            m: 0
                                        }, a = u._overwriteProps.length; --a > -1;) {
                                        e[u._overwriteProps[a]] = this._firstPT
                                    }(u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                                } else {
                                    e[o] = U.call(this, t, o, "get", h, o, 0, null, this.vars.stringFilter, r)
                                }
                            }
                        }
                        return n && this._kill(n, t) ? this._initProps(t, e, i, n, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && nt(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (z[t._gsTweenID] = !0), l)
                    }, h.render = function (t, e, i) {
                        var n, r, s, o, a = this._time,
                            l = this._duration,
                            u = this._rawPrevTime;
                        if (t >= l - 1e-7) {
                            this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && t >= -1e-7 || u === v && "isPause" !== this.data) && u !== t && (i = !0, u > v && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : v)
                        } else {
                            if (t < 1e-7) {
                                this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== v || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : v)), this._initted || (i = !0)
                            } else {
                                if (this._totalTime = this._time = t, this._easeType) {
                                    var c = t / l,
                                        h = this._easeType,
                                        f = this._easePower;
                                    (1 === h || 3 === h && c >= 0.5) && (c = 1 - c), 3 === h && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), 1 === h ? this.ratio = 1 - c : 2 === h ? this.ratio = c : t / l < 0.5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                                } else {
                                    this.ratio = this._ease.getRatio(t / l)
                                }
                            }
                        }
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) {
                                    return
                                }
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) {
                                    return this._time = this._totalTime = a, this._rawPrevTime = u, q.push(this), void(this._lazy = [t, e])
                                }
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) {
                                s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next
                            }
                            this._onUpdate && (t < 0 && this._startAt && t !== -0.0001 && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -0.0001 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === v && o !== v && (this._rawPrevTime = 0)))
                        }
                    }, h._kill = function (t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) {
                            return this._lazy = !1, this._enabled(!1, !1)
                        }
                        e = "string" != typeof e ? e || this._targets || this.target : F.selector(e) || e;
                        var n, r, s, o, a, l, u, c, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((_(e) || N(e)) && "number" != typeof e[0]) {
                            for (n = e.length; --n > -1;) {
                                this._kill(t, e[n], i) && (l = !0)
                            }
                        } else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;) {
                                    if (e === this._targets[n]) {
                                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                                }
                            } else {
                                if (e !== this.target) {
                                    return !1
                                }
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (F.onOverwrite || this.vars.onOverwrite)) {
                                    for (s in u) {
                                        a[s] && (h || (h = []), h.push(s))
                                    }
                                    if ((h || !t) && !it(this, i, e, h)) {
                                        return !1
                                    }
                                }
                                for (s in u) {
                                    (o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1)
                                }!this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, h.invalidate = function () {
                        return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], L.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -v, this.render(Math.min(0, -this._delay))), this
                    }, h._enabled = function (t, e) {
                        if (d || f.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n) {
                                for (i = n.length; --i > -1;) {
                                    this._siblings[i] = et(n[i], this, !0)
                                }
                            } else {
                                this._siblings = et(this.target, this, !0)
                            }
                        }
                        return L.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, F.to = function (t, e, i) {
                        return new F(t, e, i)
                    }, F.from = function (t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new F(t, e, i)
                    }, F.fromTo = function (t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new F(t, e, n)
                    }, F.delayedCall = function (t, e, i, n, r) {
                        return new F(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, F.set = function (t, e) {
                        return new F(t, 0, e)
                    }, F.getTweensOf = function (t, e) {
                        if (null == t) {
                            return []
                        }
                        t = "string" != typeof t ? t : F.selector(t) || t;
                        var i, n, r, s;
                        if ((_(t) || N(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;) {
                                n = n.concat(F.getTweensOf(t[i], e))
                            }
                            for (i = n.length; --i > -1;) {
                                for (s = n[i], r = i; --r > -1;) {
                                    s === n[r] && n.splice(i, 1)
                                }
                            }
                        } else {
                            for (n = et(t).concat(), i = n.length; --i > -1;) {
                                (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1)
                            }
                        }
                        return n
                    }, F.killTweensOf = F.killDelayedCallsTo = function (t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = F.getTweensOf(t, e), r = n.length; --r > -1;) {
                            n[r]._kill(i, t)
                        }
                    };
                    var st = T("plugins.TweenPlugin", function (t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = st.prototype
                    }, !0);
                    if (h = st.prototype, st.version = "1.19.0", st.API = 2, h._firstPT = null, h._addTween = U, h.setRatio = H, h._kill = function (t) {
                            var e, i = this._overwriteProps,
                                n = this._firstPT;
                            if (null != t[this._propName]) {
                                this._overwriteProps = []
                            } else {
                                for (e = i.length; --e > -1;) {
                                    null != t[i[e]] && i.splice(e, 1)
                                }
                            }
                            for (; n;) {
                                null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next
                            }
                            return !1
                        }, h._mod = h._roundProps = function (t) {
                            for (var e, i = this._firstPT; i;) {
                                e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                            }
                        }, F._onPluginEvent = function (t, e) {
                            var i, n, r, s, o, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (o = a._next, n = r; n && n.pr > a.pr;) {
                                        n = n._next
                                    }(a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                                }
                                a = e._firstPT = r
                            }
                            for (; a;) {
                                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next
                            }
                            return i
                        }, st.activate = function (t) {
                            for (var e = t.length; --e > -1;) {
                                t[e].API === st.API && (G[(new t[e])._propName] = t[e])
                            }
                            return !0
                        }, x.plugin = function (t) {
                            if (!(t && t.propName && t.init && t.API)) {
                                throw "illegal plugin definition."
                            }
                            var e, i = t.propName,
                                n = t.priority || 0,
                                r = t.overwriteProps,
                                s = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                o = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                                    st.call(this, i, n), this._overwriteProps = r || []
                                }, t.global === !0),
                                a = o.prototype = new st(i);
                            a.constructor = o, o.API = t.API;
                            for (e in s) {
                                "function" == typeof t[e] && (a[s[e]] = t[e])
                            }
                            return o.version = t.version, st.activate([o]), o
                        }, u = s._gsQueue) {
                        for (c = 0; c < u.length; c++) {
                            u[c]()
                        }
                        for (h in w) {
                            w[h].func || s.console.log("GSAP encountered missing dependency: " + h)
                        }
                    }
                    d = !1
                }
            }("undefined" != typeof t && t.exports && "undefined" != typeof s ? s : this || window, "TweenMax")
    }).call(e, function () {
        return this
    }())
}, function (t, e, i) {
    THREE.OBJLoader = function (t) {
        this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager, this.materials = null, this.regexp = {
            vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
            normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
            uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
            face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
            face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
            face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
            face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
            object_pattern: /^[og]\s*(.+)?/,
            smoothing_pattern: /^s\s+(\d+|on|off)/,
            material_library_pattern: /^mtllib /,
            material_use_pattern: /^usemtl /
        }
    }, THREE.OBJLoader.prototype = {
        constructor: THREE.OBJLoader,
        load: function (t, e, i, n) {
            var r = this,
                s = new THREE.FileLoader(r.manager);
            s.setPath(this.path), s.load(t, function (t) {
                e(r.parse(t))
            }, i, n)
        },
        setPath: function (t) {
            this.path = t
        },
        setMaterials: function (t) {
            this.materials = t
        },
        _createParserState: function () {
            var t = {
                objects: [],
                object: {},
                vertices: [],
                normals: [],
                uvs: [],
                materialLibraries: [],
                startObject: function (t, e) {
                    if (this.object && this.object.fromDeclaration === !1) {
                        return this.object.name = t, void(this.object.fromDeclaration = e !== !1)
                    }
                    var i = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
                    if (this.object && "function" == typeof this.object._finalize && this.object._finalize(!0), this.object = {
                            name: t || "",
                            fromDeclaration: e !== !1,
                            geometry: {
                                vertices: [],
                                normals: [],
                                uvs: []
                            },
                            materials: [],
                            smooth: !0,
                            startMaterial: function (t, e) {
                                var i = this._finalize(!1);
                                i && (i.inherited || i.groupCount <= 0) && this.materials.splice(i.index, 1);
                                var n = {
                                    index: this.materials.length,
                                    name: t || "",
                                    mtllib: Array.isArray(e) && e.length > 0 ? e[e.length - 1] : "",
                                    smooth: void 0 !== i ? i.smooth : this.smooth,
                                    groupStart: void 0 !== i ? i.groupEnd : 0,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: !1,
                                    clone: function (t) {
                                        var e = {
                                            index: "number" == typeof t ? t : this.index,
                                            name: this.name,
                                            mtllib: this.mtllib,
                                            smooth: this.smooth,
                                            groupStart: 0,
                                            groupEnd: -1,
                                            groupCount: -1,
                                            inherited: !1
                                        };
                                        return e.clone = this.clone.bind(e), e
                                    }
                                };
                                return this.materials.push(n), n
                            },
                            currentMaterial: function () {
                                if (this.materials.length > 0) {
                                    return this.materials[this.materials.length - 1]
                                }
                            },
                            _finalize: function (t) {
                                var e = this.currentMaterial();
                                if (e && e.groupEnd === -1 && (e.groupEnd = this.geometry.vertices.length / 3, e.groupCount = e.groupEnd - e.groupStart, e.inherited = !1), t && this.materials.length > 1) {
                                    for (var i = this.materials.length - 1; i >= 0; i--) {
                                        this.materials[i].groupCount <= 0 && this.materials.splice(i, 1)
                                    }
                                }
                                return t && 0 === this.materials.length && this.materials.push({
                                    name: "",
                                    smooth: this.smooth
                                }), e
                            }
                        }, i && i.name && "function" == typeof i.clone) {
                        var n = i.clone(0);
                        n.inherited = !0, this.object.materials.push(n)
                    }
                    this.objects.push(this.object)
                },
                finalize: function () {
                    this.object && "function" == typeof this.object._finalize && this.object._finalize(!0)
                },
                parseVertexIndex: function (t, e) {
                    var i = parseInt(t, 10);
                    return 3 * (i >= 0 ? i - 1 : i + e / 3)
                },
                parseNormalIndex: function (t, e) {
                    var i = parseInt(t, 10);
                    return 3 * (i >= 0 ? i - 1 : i + e / 3)
                },
                parseUVIndex: function (t, e) {
                    var i = parseInt(t, 10);
                    return 2 * (i >= 0 ? i - 1 : i + e / 2)
                },
                addVertex: function (t, e, i) {
                    var n = this.vertices,
                        r = this.object.geometry.vertices;
                    r.push(n[t + 0]), r.push(n[t + 1]), r.push(n[t + 2]), r.push(n[e + 0]), r.push(n[e + 1]), r.push(n[e + 2]), r.push(n[i + 0]), r.push(n[i + 1]), r.push(n[i + 2])
                },
                addVertexLine: function (t) {
                    var e = this.vertices,
                        i = this.object.geometry.vertices;
                    i.push(e[t + 0]), i.push(e[t + 1]), i.push(e[t + 2])
                },
                addNormal: function (t, e, i) {
                    var n = this.normals,
                        r = this.object.geometry.normals;
                    r.push(n[t + 0]), r.push(n[t + 1]), r.push(n[t + 2]), r.push(n[e + 0]), r.push(n[e + 1]), r.push(n[e + 2]), r.push(n[i + 0]), r.push(n[i + 1]), r.push(n[i + 2])
                },
                addUV: function (t, e, i) {
                    var n = this.uvs,
                        r = this.object.geometry.uvs;
                    r.push(n[t + 0]), r.push(n[t + 1]), r.push(n[e + 0]), r.push(n[e + 1]), r.push(n[i + 0]), r.push(n[i + 1])
                },
                addUVLine: function (t) {
                    var e = this.uvs,
                        i = this.object.geometry.uvs;
                    i.push(e[t + 0]), i.push(e[t + 1])
                },
                addFace: function (t, e, i, n, r, s, o, a, l, u, c, h) {
                    var f, d = this.vertices.length,
                        p = this.parseVertexIndex(t, d),
                        m = this.parseVertexIndex(e, d),
                        v = this.parseVertexIndex(i, d);
                    if (void 0 === n ? this.addVertex(p, m, v) : (f = this.parseVertexIndex(n, d), this.addVertex(p, m, f), this.addVertex(m, v, f)), void 0 !== r) {
                        var g = this.uvs.length;
                        p = this.parseUVIndex(r, g), m = this.parseUVIndex(s, g), v = this.parseUVIndex(o, g), void 0 === n ? this.addUV(p, m, v) : (f = this.parseUVIndex(a, g), this.addUV(p, m, f), this.addUV(m, v, f))
                    }
                    if (void 0 !== l) {
                        var y = this.normals.length;
                        p = this.parseNormalIndex(l, y), m = l === u ? p : this.parseNormalIndex(u, y), v = l === c ? p : this.parseNormalIndex(c, y), void 0 === n ? this.addNormal(p, m, v) : (f = this.parseNormalIndex(h, y), this.addNormal(p, m, f), this.addNormal(m, v, f))
                    }
                },
                addLineGeometry: function (t, e) {
                    this.object.geometry.type = "Line";
                    for (var i = this.vertices.length, n = this.uvs.length, r = 0, s = t.length; r < s; r++) {
                        this.addVertexLine(this.parseVertexIndex(t[r], i))
                    }
                    for (var o = 0, s = e.length; o < s; o++) {
                        this.addUVLine(this.parseUVIndex(e[o], n))
                    }
                }
            };
            return t.startObject("", !1), t
        },
        parse: function (t) {
            var e = this._createParserState();
            t.indexOf("\r\n") !== -1 && (t = t.replace(/\r\n/g, "\n")), t.indexOf("\\\n") !== -1 && (t = t.replace(/\\\n/g, ""));
            for (var i = t.split("\n"), n = "", r = "", s = "", o = 0, a = [], l = "function" == typeof "".trimLeft, u = 0, c = i.length; u < c; u++) {
                if (n = i[u], n = l ? n.trimLeft() : n.trim(), o = n.length, 0 !== o && (r = n.charAt(0), "#" !== r)) {
                    if ("v" === r) {
                        if (s = n.charAt(1), " " === s && null !== (a = this.regexp.vertex_pattern.exec(n))) {
                            e.vertices.push(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]))
                        } else {
                            if ("n" === s && null !== (a = this.regexp.normal_pattern.exec(n))) {
                                e.normals.push(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]))
                            } else {
                                if ("t" !== s || null === (a = this.regexp.uv_pattern.exec(n))) {
                                    throw new Error("Unexpected vertex/normal/uv line: '" + n + "'")
                                }
                                e.uvs.push(parseFloat(a[1]), parseFloat(a[2]))
                            }
                        }
                    } else {
                        if ("f" === r) {
                            if (null !== (a = this.regexp.face_vertex_uv_normal.exec(n))) {
                                e.addFace(a[1], a[4], a[7], a[10], a[2], a[5], a[8], a[11], a[3], a[6], a[9], a[12])
                            } else {
                                if (null !== (a = this.regexp.face_vertex_uv.exec(n))) {
                                    e.addFace(a[1], a[3], a[5], a[7], a[2], a[4], a[6], a[8])
                                } else {
                                    if (null !== (a = this.regexp.face_vertex_normal.exec(n))) {
                                        e.addFace(a[1], a[3], a[5], a[7], void 0, void 0, void 0, void 0, a[2], a[4], a[6], a[8])
                                    } else {
                                        if (null === (a = this.regexp.face_vertex.exec(n))) {
                                            throw new Error("Unexpected face line: '" + n + "'")
                                        }
                                        e.addFace(a[1], a[2], a[3], a[4])
                                    }
                                }
                            }
                        } else {
                            if ("l" === r) {
                                var h = n.substring(1).trim().split(" "),
                                    f = [],
                                    d = [];
                                if (n.indexOf("/") === -1) {
                                    f = h
                                } else {
                                    for (var p = 0, m = h.length; p < m; p++) {
                                        var v = h[p].split("/");
                                        "" !== v[0] && f.push(v[0]), "" !== v[1] && d.push(v[1])
                                    }
                                }
                                e.addLineGeometry(f, d)
                            } else {
                                if (null !== (a = this.regexp.object_pattern.exec(n))) {
                                    var g = (" " + a[0].substr(1).trim()).substr(1);
                                    e.startObject(g)
                                } else {
                                    if (this.regexp.material_use_pattern.test(n)) {
                                        e.object.startMaterial(n.substring(7).trim(), e.materialLibraries)
                                    } else {
                                        if (this.regexp.material_library_pattern.test(n)) {
                                            e.materialLibraries.push(n.substring(7).trim())
                                        } else {
                                            if (null === (a = this.regexp.smoothing_pattern.exec(n))) {
                                                if ("\0" === n) {
                                                    continue
                                                }
                                                throw new Error("Unexpected line: '" + n + "'")
                                            }
                                            var y = a[1].trim().toLowerCase();
                                            e.object.smooth = "1" === y || "on" === y;
                                            var _ = e.object.currentMaterial();
                                            _ && (_.smooth = e.object.smooth)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            e.finalize();
            var w = new THREE.Group;
            w.materialLibraries = [].concat(e.materialLibraries);
            for (var u = 0, c = e.objects.length; u < c; u++) {
                var b = e.objects[u],
                    x = b.geometry,
                    T = b.materials,
                    P = "Line" === x.type;
                if (0 !== x.vertices.length) {
                    var S = new THREE.BufferGeometry;
                    S.addAttribute("position", new THREE.BufferAttribute(new Float32Array(x.vertices), 3)), x.normals.length > 0 ? S.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(x.normals), 3)) : S.computeVertexNormals(), x.uvs.length > 0 && S.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(x.uvs), 2));
                    for (var k = [], M = 0, E = T.length; M < E; M++) {
                        var O = T[M],
                            _ = void 0;
                        if (null !== this.materials && (_ = this.materials.create(O.name), P && _ && !(_ instanceof THREE.LineBasicMaterial))) {
                            var A = new THREE.LineBasicMaterial;
                            A.copy(_), _ = A
                        }
                        _ || (_ = P ? new THREE.LineBasicMaterial : new THREE.MeshPhongMaterial, _.name = O.name), _.shading = O.smooth ? THREE.SmoothShading : THREE.FlatShading, k.push(_)
                    }
                    var R;
                    if (k.length > 1) {
                        for (var M = 0, E = T.length; M < E; M++) {
                            var O = T[M];
                            S.addGroup(O.groupStart, O.groupCount, M)
                        }
                        var C = new THREE.MultiMaterial(k);
                        R = P ? new THREE.LineSegments(S, C) : new THREE.Mesh(S, C)
                    } else {
                        R = P ? new THREE.LineSegments(S, k[0]) : new THREE.Mesh(S, k[0])
                    }
                    R.name = b.name, w.add(R)
                }
            }
            return w
        }
    }
}, function (t, e) {
    ! function (t) {
        function e(e, i) {
            var n = new t.Vector3,
                r = new t.Vector3,
                s = new t.Vector3,
                o = new t.Vector3,
                a = new t.Vector3,
                l = i.vertices[e.a],
                u = i.vertices[e.b],
                c = i.vertices[e.c];
            return e instanceof t.Face3 ? (n.subVectors(c, u), r.subVectors(l, u), n.cross(r), n) : e instanceof t.Face4 ? (n = i.vertices[e.d], s.subVectors(n, u), r.subVectors(l, u), s.cross(r), o.subVectors(n, c), a.subVectors(u, c), o.cross(a), o.add(s), o.multiplyScalar(0.5)) : void 0
        }
        t.OBMLoader = function (e) {
            t.OBJLoader.call(this, e)
        }, t.OBMLoader.prototype = Object.create(t.OBJLoader.prototype);
        var i;
        t.OBMLoader.prototype.load = function (e, i, n, r) {
            var s = this,
                o = new t.FileLoader(s.manager);
            o.setPath(this.path), o.load(e, function (t) {
                s.loadString(t, i)
            }, n, r)
        }, t.OBMLoader.prototype.loadString = function (e, n) {
            e = this.preprocess(e);
            var r = this.parse(e);
            i.vn_autocreate && r.children.forEach(function (e, i) {
                e.geometry = (new t.Geometry).fromBufferGeometry(e.geometry), e.geometry.mergeVertices(), e.geometry.computeVertexNormals(), e.geometry = (new t.BufferGeometry).fromGeometry(e.geometry)
            }), i.vn_autocreate_degrees && r.children.forEach(function (e, n) {
                e.geometry = (new t.Geometry).fromBufferGeometry(e.geometry), e.geometry.mergeVertices(), e.geometry.computeVertexNormalsByDegrees(i.vn_autocreate_degrees), e.geometry = (new t.BufferGeometry).fromGeometry(e.geometry)
            }), n(r)
        }, t.OBMLoader.prototype.preprocess = function (t) {
            t = t.replace(/~/g, "//").split("\n");
            for (var e, n, r, s, o = [0, 0, 0], a = [0, 0, 0], l = [0, 0], u = 0, c = t.length; u < c; u++) {
                var h = t[u].trim().split(" "),
                    f = h.shift();
                if ("v" === f) {
                    h[0] = o[0] + parseInt(h[0], 10) / n, h[1] = o[1] + parseInt(h[1], 10) / n, h[2] = o[2] + parseInt(h[2], 10) / n, t[u] = "v " + h[0] * i.scale + " " + h[1] * i.scale + " " + h[2] * i.scale, o = h
                } else {
                    if ("vn" === f) {
                        h[0] = a[0] + parseFloat(h[0]) / s, h[1] = a[1] + parseFloat(h[1]) / s, h[2] = a[2] + parseFloat(h[2]) / s, t[u] = "vn " + h[0] + " " + h[1] + " " + h[2], a = h
                    } else {
                        if ("vt" === f) {
                            "undefined" != typeof l && (h[0] = l[0] + parseFloat(h[0]) / r, h[1] = l[1] + parseFloat(h[1]) / r, h[2] = l[2] + parseFloat(h[2]) / r, t[u] = "vt " + h[0] + " " + h[1] + " " + h[2]), l = h
                        } else {
                            if ("f" === f) {
                                if (h = h.map(function (t) {
                                        return t.split("/")
                                    }), "undefined" == typeof e) {
                                    for (e = h.slice(0), f = 0; f < h.length; f++) {
                                        h[f] = h[f].join("/")
                                    }
                                } else {
                                    for (var f = 0, d = h.length; f < d; f++) {
                                        for (var p = 0, m = h[f].length; p < m; p++) {
                                            e[f] && h[f] && "" !== h[f][p] && (h[f][p] = parseInt(h[f][p], 10) + parseInt(e[f][p], 10))
                                        }
                                    }
                                    for (e = h.slice(0), f = 0; f < d; f++) {
                                        h[f] = h[f].join("/")
                                    }
                                }
                                t[u] = "f " + h.join(" ")
                            } else {
                                "#" === f && "INSTRUCTIONS" === h[0] && (i = JSON.parse(h.slice(1).join(" ")), n = Math.pow(10, i.v_precision), r = Math.pow(10, i.vt_precision), s = Math.pow(10, i.vn_precision))
                            }
                        }
                    }
                }
            }
            return t.join("\n")
        }, t.Geometry.prototype.computeVertexNormalsByDegrees = function (i) {
            for (var n = this.faces, r = this.vertices, s = Array(r.length), o = n.length; o--;) {
                var a = n[o],
                    l = a.normal.length(),
                    u = a.vertexNormals;
                s[a.a] = s[a.a] || [], s[a.a].push({
                    face: a,
                    face_normal_length: l,
                    vertexNormal: u[0],
                    smoothingGroup: []
                }), s[a.b] = s[a.b] || [], s[a.b].push({
                    face: a,
                    face_normal_length: l,
                    vertexNormal: u[1],
                    smoothingGroup: []
                }), s[a.c] = s[a.c] || [], s[a.c].push({
                    face: a,
                    face_normal_length: l,
                    vertexNormal: u[2],
                    smoothingGroup: []
                }), a.d && (s[a.d] = s[a.d] || [], s[a.d].push({
                    face: a,
                    face_normal_length: l,
                    vertexNormal: u[3],
                    smoothingGroup: []
                }))
            }
            for (var c, o = 0, r = r.length; r--;) {
                if (s[r]) {
                    for (a = 0, i_length = s[r].length; a < i_length; a++) {
                        var l = s[r][a],
                            u = s[r][(a + 1) % s[r].length],
                            h = l.face.normal.dot(u.face.normal);
                        180 * Math.acos(h / (l.face_normal_length * u.face_normal_length)) / Math.PI <= i ? (c = !0, l.smoothingGroup.push(o), u.smoothingGroup.push(o)) : (o++, l.vertexNormal.add(s[r][a].face.normal), u.vertexNormal.add(u.face.normal))
                    }
                }
                if (c) {
                    for (o = s[r], c = {}, l = o.length; l--;) {
                        a = o[l].smoothingGroup[0], c[a] ? c[a].averageVec.add(e(o[l].face, this)) : c[a] = {
                            averageVec: e(o[l].face, this)
                        }
                    }
                    for (2 === o[0].smoothingGroup.length && (a = c[o[0].smoothingGroup[0]], o = c[o[0].smoothingGroup[1]], l = (new t.Vector3).addVectors(a.averageVec, o.averageVec), a.averageVec = l, o.averageVec = l), a = c, l = s[r].length; l--;) {
                        c = s[r][l], o = c.smoothingGroup[0], void 0 !== o && c.vertexNormal.copy(a[o].averageVec)
                    }
                }
                c = !1, o = 0
            }
            for (a = n.length; a--;) {
                for (i = n[a].vertexNormals.length; i--;) {
                    n[a].vertexNormals[i].normalize()
                }
            }
        }
    }(THREE)
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(180),
        h = (n(c), i(181)),
        f = n(h),
        d = i(182),
        p = r(d),
        m = function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.video = this.canvas.querySelector("video"), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.paused = !1, this.animationPause = !1, this.state = {
                    progress: 0
                }, this.copyHidden = !0
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), (0, p["default"])(this.video)
                }
            }, {
                key: "init",
                value: function () {
                    this.triggers = [];
                    var t = new u.TimelineLite({
                        paused: !0
                    });
                    t.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: "0",
                        ease: u.Power2.easeOut
                    }, 0.2).staggerTo(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2), this.triggers.push({
                        atProgress: 0,
                        duration: 1,
                        timeline: t
                    })
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    var e = this;
                    this.navMarkers = [{
                        canvas: this.canvas,
                        setJumpToProgress: function () {
                            e.setProgress(0, 0)
                        },
                        name: "History",
                        offsetTop: this.canvas.offsetTop + t.height / 2
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    f.hasTouch() || (this.paused = !1, this.video.play())
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== t && (t > 0.6 && !this.animationPause ? (this.animationPause = !0, this.video.pause()) : t < 0.6 && this.animationPause && (this.animationPause = !1, this.video.play()), this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            l = (0, a["default"])(((o ? e : t) - n) / r, 0, 1);
                        s.progress(l)
                    }), this.progress = t)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = m
}, function (t, e, i) {
    function n(t, e, i) {
        return void 0 === i && (i = e, e = void 0), void 0 !== i && (i = s(i), i = i === i ? i : 0), void 0 !== e && (e = s(e), e = e === e ? e : 0), r(s(t), e, i)
    }
    var r = i(179),
        s = i(116);
    t.exports = n
}, function (t, e) {
    function i(t, e, i) {
        return t === t && (void 0 !== i && (t = t <= i ? t : i), void 0 !== e && (t = t >= e ? t : e)), t
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t, e) {
        var i = t.querySelector(e + " .title-eyebrow"),
            n = t.querySelector(e + " span"),
            r = t.querySelector(e + " h3"),
            s = t.querySelector(e + " p");
        return [i, n, r, s].filter(function (t) {
            return t
        })
    }

    function s(t, e, i, n) {
        var s = r(t, e),
            o = r(t, i),
            a = new f.TimelineLite({
                paused: !0
            }),
            l = f.Power2.easeOut;
        return a.set(s, {
            opacity: 0,
            y: 50
        }).set(o, {
            opacity: 0,
            y: 50
        }).staggerTo(s, 0.3, {
            opacity: 1,
            y: 0,
            ease: l
        }, 0.25), a.staggerTo(s.reverse(), 0.15, {
            opacity: 0,
            ease: l
        }, 0.05), a.addLabel(n), a.staggerTo(o, 0.3, {
            opacity: 1,
            y: 0,
            ease: l
        }, 0.25), a
    }

    function o(t, e, i) {
        var n = t.querySelector(e),
            r = i / 2,
            s = new f.TimelineLite({
                paused: !0
            });
        f.Power2.easeOut;
        return s.set(n, {
            y: r
        }).to(n, 0.4, {
            y: 0
        }), s
    }

    function a(t, e) {
        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            r = n.label,
            s = n.duration,
            o = void 0 === s ? 0.3 : s,
            a = n.stagger,
            l = void 0 === a ? 0.25 : a,
            u = n.ease,
            c = void 0 === u ? f.Power2.easeOut : u;
        t.staggerTo(e, o, {
            opacity: 1,
            y: 0,
            ease: c
        }, l), i && t.staggerTo(e, o, {
            opacity: 0,
            y: -50,
            ease: c
        }, l), r && t.addLabel(r)
    }

    function l(t, e, i) {
        var n = e.map(function (e) {
                return r(t, e)
            }),
            s = new f.TimelineLite({
                paused: !0
            });
        return u(s, n, i)
    }

    function u(t, e, i) {
        var n = (0, h["default"])(i, "fadeLast"),
            r = (0, h["default"])(i, "labelPrefix");
        return e.forEach(function (e) {
            t.set(e, {
                opacity: 0,
                y: 50
            })
        }), e.forEach(function (s, o) {
            a(t, s, o < e.length - 1 || n, Object.assign({}, i, {
                label: r + "_" + o
            }))
        }), t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = i(2),
        h = n(c);
    e.getCopyBlockElements = r, e.getTimelineOriginal = s, e.getGlobeTimeline = o, e.appendCopyElementAnimations = a, e.getTimelineBlocks = l, e.getStaggeredTimeline = u;
    var f = i(174)
}, function (t, e) {
    function i() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.width || window.innerWidth;
        return e <= 960
    }

    function n() {
        return window.Modernizr.touchevents && !window.Modernizr.pointerevents
    }

    function r() {
        return navigator.userAgent.match(/Mobi/)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isMobileResolution = i, e.hasTouch = n, e.isMobile = r
}, function (t, e, i) {
    function n(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) {
                i[e] = t[e]
            }
            return i
        }
        return Array.from(t)
    }

    function r(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!t) {
            return Promise.reject("Video is null")
        }
        if (!e && (0, s.isMobileResolution)()) {
            return Promise.resolve("Ignored")
        } [].concat(n(t.querySelectorAll("source"))).forEach(function (t) {
            t.src = t.getAttribute("data-src")
        });
        var i = new o(function (e) {
            t.addEventListener("canplaythrough", e), t.addEventListener("stalled", e)
        });
        return t.load(), i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(181),
        o = "undefined" == typeof Promise ? i(183).Promise : Promise;
    e["default"] = r
}, function (t, e, i) {
    (function (e, n) {
        ! function (e, i) {
            t.exports = i()
        }(this, function () {
            function t(t) {
                return "function" == typeof t || "object" == typeof t && null !== t
            }

            function r(t) {
                return "function" == typeof t
            }

            function s(t) {
                $ = t
            }

            function o(t) {
                Z = t
            }

            function a() {
                return function () {
                    return e.nextTick(f)
                }
            }

            function l() {
                return "undefined" != typeof X ? function () {
                    X(f)
                } : h()
            }

            function u() {
                var t = 0,
                    e = new K(f),
                    i = document.createTextNode("");
                return e.observe(i, {
                        characterData: !0
                    }),
                    function () {
                        i.data = t = ++t % 2
                    }
            }

            function c() {
                var t = new MessageChannel;
                return t.port1.onmessage = f,
                    function () {
                        return t.port2.postMessage(0)
                    }
            }

            function h() {
                var t = setTimeout;
                return function () {
                    return t(f, 1)
                }
            }

            function f() {
                for (var t = 0; t < Y; t += 2) {
                    var e = it[t],
                        i = it[t + 1];
                    e(i), it[t] = void 0, it[t + 1] = void 0
                }
                Y = 0
            }

            function d() {
                try {
                    var t = i(184);
                    return X = t.runOnLoop || t.runOnContext, l()
                } catch (e) {
                    return h()
                }
            }

            function p(t, e) {
                var i = arguments,
                    n = this,
                    r = new this.constructor(v);
                void 0 === r[rt] && D(r);
                var s = n._state;
                return s ? ! function () {
                    var t = i[s - 1];
                    Z(function () {
                        return C(s, r, t, n._result)
                    })
                }() : E(n, r, t, e), r
            }

            function m(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) {
                    return t
                }
                var i = new e(v);
                return P(i, t), i
            }

            function v() {}

            function g() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function y() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function _(t) {
                try {
                    return t.then
                } catch (e) {
                    return lt.error = e, lt
                }
            }

            function w(t, e, i, n) {
                try {
                    t.call(e, i, n)
                } catch (r) {
                    return r
                }
            }

            function b(t, e, i) {
                Z(function (t) {
                    var n = !1,
                        r = w(i, e, function (i) {
                            n || (n = !0, e !== i ? P(t, i) : k(t, i))
                        }, function (e) {
                            n || (n = !0, M(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                    !n && r && (n = !0, M(t, r))
                }, t)
            }

            function x(t, e) {
                e._state === ot ? k(t, e._result) : e._state === at ? M(t, e._result) : E(e, void 0, function (e) {
                    return P(t, e)
                }, function (e) {
                    return M(t, e)
                })
            }

            function T(t, e, i) {
                e.constructor === t.constructor && i === p && e.constructor.resolve === m ? x(t, e) : i === lt ? M(t, lt.error) : void 0 === i ? k(t, e) : r(i) ? b(t, e, i) : k(t, e)
            }

            function P(e, i) {
                e === i ? M(e, g()) : t(i) ? T(e, i, _(i)) : k(e, i)
            }

            function S(t) {
                t._onerror && t._onerror(t._result), O(t)
            }

            function k(t, e) {
                t._state === st && (t._result = e, t._state = ot, 0 !== t._subscribers.length && Z(O, t))
            }

            function M(t, e) {
                t._state === st && (t._state = at, t._result = e, Z(S, t))
            }

            function E(t, e, i, n) {
                var r = t._subscribers,
                    s = r.length;
                t._onerror = null, r[s] = e, r[s + ot] = i, r[s + at] = n, 0 === s && t._state && Z(O, t)
            }

            function O(t) {
                var e = t._subscribers,
                    i = t._state;
                if (0 !== e.length) {
                    for (var n = void 0, r = void 0, s = t._result, o = 0; o < e.length; o += 3) {
                        n = e[o], r = e[o + i], n ? C(i, n, r, s) : r(s)
                    }
                    t._subscribers.length = 0
                }
            }

            function A() {
                this.error = null
            }

            function R(t, e) {
                try {
                    return t(e)
                } catch (i) {
                    return ut.error = i, ut
                }
            }

            function C(t, e, i, n) {
                var s = r(i),
                    o = void 0,
                    a = void 0,
                    l = void 0,
                    u = void 0;
                if (s) {
                    if (o = R(i, n), o === ut ? (u = !0, a = o.error, o = null) : l = !0, e === o) {
                        return void M(e, y())
                    }
                } else {
                    o = n, l = !0
                }
                e._state !== st || (s && l ? P(e, o) : u ? M(e, a) : t === ot ? k(e, o) : t === at && M(e, o))
            }

            function L(t, e) {
                try {
                    e(function (e) {
                        P(t, e)
                    }, function (e) {
                        M(t, e)
                    })
                } catch (i) {
                    M(t, i)
                }
            }

            function j() {
                return ct++
            }

            function D(t) {
                t[rt] = ct++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            function F(t, e) {
                this._instanceConstructor = t, this.promise = new t(v), this.promise[rt] || D(this.promise), G(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && k(this.promise, this._result))) : M(this.promise, N())
            }

            function N() {
                return new Error("Array Methods must be provided an Array")
            }

            function I(t) {
                return new F(this, t).promise
            }

            function q(t) {
                var e = this;
                return new e(G(t) ? function (i, n) {
                    for (var r = t.length, s = 0; s < r; s++) {
                        e.resolve(t[s]).then(i, n)
                    }
                } : function (t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }

            function z(t) {
                var e = this,
                    i = new e(v);
                return M(i, t), i
            }

            function B() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function H() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function V(t) {
                this[rt] = j(), this._result = this._state = void 0, this._subscribers = [], v !== t && ("function" != typeof t && B(), this instanceof V ? L(this, t) : H())
            }

            function U() {
                var t = void 0;
                if ("undefined" != typeof n) {
                    t = n
                } else {
                    if ("undefined" != typeof self) {
                        t = self
                    } else {
                        try {
                            t = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    }
                }
                var i = t.Promise;
                if (i) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(i.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === r && !i.cast) {
                        return
                    }
                }
                t.Promise = V
            }
            var W = void 0;
            W = Array.isArray ? Array.isArray : function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var G = W,
                Y = 0,
                X = void 0,
                $ = void 0,
                Z = function (t, e) {
                    it[Y] = t, it[Y + 1] = e, Y += 2, 2 === Y && ($ ? $(f) : nt())
                },
                Q = "undefined" != typeof window ? window : void 0,
                J = Q || {},
                K = J.MutationObserver || J.WebKitMutationObserver,
                tt = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e),
                et = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                it = new Array(1000),
                nt = void 0;
            nt = tt ? a() : K ? u() : et ? c() : void 0 === Q ? d() : h();
            var rt = Math.random().toString(36).substring(16),
                st = void 0,
                ot = 1,
                at = 2,
                lt = new A,
                ut = new A,
                ct = 0;
            return F.prototype._enumerate = function () {
                for (var t = this.length, e = this._input, i = 0; this._state === st && i < t; i++) {
                    this._eachEntry(e[i], i)
                }
            }, F.prototype._eachEntry = function (t, e) {
                var i = this._instanceConstructor,
                    n = i.resolve;
                if (n === m) {
                    var r = _(t);
                    if (r === p && t._state !== st) {
                        this._settledAt(t._state, e, t._result)
                    } else {
                        if ("function" != typeof r) {
                            this._remaining--, this._result[e] = t
                        } else {
                            if (i === V) {
                                var s = new i(v);
                                T(s, t, r), this._willSettleAt(s, e)
                            } else {
                                this._willSettleAt(new i(function (e) {
                                    return e(t)
                                }), e)
                            }
                        }
                    }
                } else {
                    this._willSettleAt(n(t), e)
                }
            }, F.prototype._settledAt = function (t, e, i) {
                var n = this.promise;
                n._state === st && (this._remaining--, t === at ? M(n, i) : this._result[e] = i), 0 === this._remaining && k(n, this._result)
            }, F.prototype._willSettleAt = function (t, e) {
                var i = this;
                E(t, void 0, function (t) {
                    return i._settledAt(ot, e, t)
                }, function (t) {
                    return i._settledAt(at, e, t)
                })
            }, V.all = I, V.race = q, V.resolve = m, V.reject = z, V._setScheduler = s, V._setAsap = o, V._asap = Z, V.prototype = {
                constructor: V,
                then: p,
                "catch": function (t) {
                    return this.then(null, t)
                }
            }, V.polyfill = U, V.Promise = V, V
        })
    }).call(e, i(146), function () {
        return this
    }())
}, function (t, e) {}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(180),
        h = n(c),
        f = i(181),
        d = n(f),
        p = i(186),
        m = i(182),
        v = r(m),
        g = i(188),
        y = (n(g), function () {
            function t(e) {
                var i = this,
                    n = e.selector;
                s(this, t), this.handleScroll = function (t) {
                    if (!i.paused) {
                        var e = (i.windowHeight, {
                            position: "absolute",
                            bottom: "auto",
                            top: "0px"
                        });
                        Object.assign(i.videoParent.style, e), i.isMobile && Object.assign(i.dataUiParent.style, e)
                    }
                }, this.canvas = document.querySelector(n), this.video = this.canvas.querySelector("video"), this.copy2 = Array.from(this.canvas.getElementsByClassName("copy2")), this.videoParent = this.canvas.querySelector(".videoParent"), this.dataUiParent = document.querySelector(".dataUiParent"), this.dataUi = document.querySelector(".dataUi"), this.paused = !1, this.animationPause = !1, this.state = {
                    progress: 0
                }, this.isFixed = !1
            }
            return l(t, [{
                key: "load",
                value: function () {
                    var t = this;
                    this.init();
                    var e = (0, v["default"])(this.video);
                    return e.then(function () {
                        d.hasTouch() || t.video.play(), t.copySequence.play()
                    })
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    var e = this;
                    this.windowHeight = t.height, this.isMobile = d.isMobileResolution(t), this.navMarkers = [{
                        canvas: this.canvas,
                        setJumpToProgress: function () {
                            e.setProgress(0, 0)
                        },
                        name: "Introduce",
                        offsetTop: this.canvas.offsetTop
                    }]
                }
            }, {
                key: "init",
                value: function () {
                    this.triggers = [], (0, p.renderDataUi)();
                    var t = new u.TimelineLite({
                        paused: !0
                    });
                    t.staggerTo(this.copy2, 2, {
                        opacity: 0,
                        y: d.isMobile() ? "0" : "-150px",
                        ease: u.Power2.easeOut
                    }, 0.2).to(this.dataUi, 2, {
                        opacity: 1,
                        width: "100vw",
                        ease: u.Power2.easeOut
                    }, 0.25), this.triggers.push({
                        atProgress: 0.25,
                        duration: 0.75,
                        timeline: t
                    });
                    var e = new u.TimelineLite({
                        paused: !0
                    });
                    e.to(this.videoParent, 1, {
                        display: "none"
                    }, "+=1"), this.triggers.push({
                        atProgress: 0.9,
                        duration: 0.1,
                        timeline: e,
                        useFullProgress: !0
                    }), this.copySequence = h.getTimelineBlocks(this.canvas, [".introCopy1"], {
                        duration: 1,
                        stagger: -0.2,
                        fadeLast: !1
                    })
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    this.copySequence.play(), d.hasTouch() || (this.paused = !1, this.video.play())
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress === t && this.fullProgress === e || (t > 0.6 && !this.animationPause ? (this.animationPause = !0, this.video.pause()) : t < 0.6 && this.animationPause && (this.animationPause = !1, this.video.play()), this.progress = t, this.fullProgress = e)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }());
    e["default"] = y
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) {
                i[e] = t[e]
            }
            return i
        }
        return Array.from(t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.renderProgress = e.renderDataUi = void 0;
    var s = i(187),
        o = n(s),
        a = i(174),
        l = document.getElementsByClassName("cParent"),
        u = void 0,
        c = function () {
            return u || (u = [].concat(r(l))), u
        };
    e.renderDataUi = function () {
        c().forEach(function (t, e) {
            var i = t.querySelector(".innerLabel"),
                n = t.querySelector(".outerLabel"),
                r = t.querySelector(".outerVal"),
                s = o["default"][e];
            i.innerHTML = s.unit, r.innerHTML = "--", n.innerHTML = s.label.toUpperCase();
            var a = t.querySelector(".bar"),
                l = a.getAttribute("r"),
                u = Math.PI * (2 * l),
                c = 0;
            c < 0 && (c = 0), c > 100 && (c = 100);
            var h = (100 - c) / 100 * u;
            a.style.strokeDashoffset = h
        })
    }, e.renderProgress = function () {
        c().forEach(function (t, e) {
            var i = o["default"][e],
                n = t.querySelector(".outerVal"),
                r = t.querySelector(".bar"),
                s = r.getAttribute("r"),
                l = Math.PI * (2 * s),
                u = {
                    val: 0
                },
                c = i.precision,
                h = void 0 === c ? 0 : c;
            a.TweenLite.to(u, 1, {
                val: i.val,
                onUpdate: function () {
                    n.innerHTML = u.val.toFixed(h)
                },
                ease: a.Power2.easeOut
            }), i.val < 0 && (i.val = 0), i.val > 100 && (i.val = 100);
            var f = (100 - i.val) / 100 * l;
            r.style.strokeDashoffset = f
        })
    }
}, function (t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e["default"] = [{
        label: "Founded in",
        val: 1163,
        unit: "Y"
    }, {
        label: "long",
        val: 128,
        unit: "M"
    }, {
        label: "width",
        val: 69,
        unit: "M",
        precision: 2
    }, {
        label: "North latitude",
        val: 48.853,
        unit: "°N"
    }, {
        label: "East longitude",
        val: 2.3498,
        unit: "°E"
    }]
}, function (t, e, i) {
    function n(t) {
        return 1 + --t * t * t * t * t
    }

    function r() {
        window.clearInterval(u), c()
    }

    function s(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400;
        return new a(function (i) {
            if (e <= 0) {
                return window.scrollTo(0, t), i()
            }
            var s = Date.now(),
                o = l(),
                a = t - o,
                h = 16;
            u && r(), c = i, u = window.setInterval(function () {
                var t = Math.min(1, (Date.now() - s) / e),
                    i = n(t),
                    l = o + Math.floor(i * a);
                window.scrollTo(0, l), t >= 1 && r()
            }, h)
        })
    }

    function o() {
        var t = document.body,
            e = document.documentElement;
        return Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.scrollTo = s, e.getDocumentHeight = o;
    var a = "undefined" == typeof Promise ? i(183).Promise : Promise,
        l = e.scrollY = function () {
            return "undefined" != typeof window.pageYOffset ? window.pageYOffset : window.scrollY
        },
        u = null,
        c = null
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function o(t) {
        return t * Math.PI / 180
    }

    function a(t, e, i) {
        this.geo = new THREE.Geometry, this.geo.vertices.push(new THREE.Vector3(T.getRandomNumber(20, 5), 0, 0), new THREE.Vector3(0, 1, 1), new THREE.Vector3(0, (-1), 1), new THREE.Vector3(0, (-1), (-1)), new THREE.Vector3(0, 1, (-1))), this.geo.faces.push(new THREE.Face3(0, 2, 1), new THREE.Face3(0, 3, 2), new THREE.Face3(0, 4, 3), new THREE.Face3(0, 1, 4)), this.rotObject = new THREE.Object3D, this.sphereMesh = new THREE.Mesh(this.geo, A), this.sphereMesh.position.set(100, 0, 0), this.sphereMesh.name = "volcanoMarker", this.rotObject.add(this.sphereMesh), this.rotObject.rotation.set(o(0), o(t - 24.5), o(e)), i.add(this.rotObject)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = i(178),
        u = r(l),
        c = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) {
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
            }
            return t
        },
        h = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        f = i(190),
        d = r(f),
        p = i(180),
        m = n(p),
        v = i(191),
        g = r(v),
        y = i(181),
        _ = n(y),
        w = i(192),
        b = r(w),
        x = i(193),
        T = n(x),
        P = i(194),
        S = r(P),
        k = i(174),
        M = i(195),
        E = r(M),
        O = "undefined" == typeof Promise ? i(183).Promise : Promise,
        A = new THREE.MeshStandardMaterial({
            side: THREE.DoubleSide,
            color: "rgb(244, 66, 66)",
            roughness: 0.4,
            metalness: 0.4,
            transparent: !0,
            opacity: 0,
            depthWrite: !0
        }),
        R = function () {
            function t() {
                if (s(this, t), C.call(this), this.isReady = !1, this.world, this.toTween, this.hidingGlobe = !1, this.animTriggers, this.canvas = document.getElementById("worldWrap"), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copy3 = Array.from(this.canvas.getElementsByClassName("copy3")), this.triggers = [], this.veil = this.canvas.querySelector(".worldVeil"), this.sideBar = document.getElementById("world--sidebar"), this.fadeOut = !0, this.paused = !0, !_.isMobile()) {
                    this.canvasEl = document.getElementById("canvasEl"), 
                    this.canvasBackground = document.getElementById("background-canvas"), 
                    this.starDrawn = !1, this.ctx = this.canvasBackground.getContext("2d"), 
                    this.stars = [], this.scene = new THREE.Scene,
                     this.vWidth = this.canvasEl.offsetWidth, this.vHeight = this.canvasEl.offsetHeight, this.canvasBackground.width = this.vWidth, this.canvasBackground.height = this.vHeight, this.fps = 60, this.animationFPS = 24, this.tween = null, this.state = {
                        progress: 0
                    }, this.autoRotateOn = !0, this.isMobileImage = _.hasTouch() ? "_m" : "", this.renderer = new THREE.WebGLRenderer(S["default"].webGlRenderer), S["default"].overrideRenderer(this.renderer), this.bumpMapImage = (new THREE.TextureLoader).load("https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/textures/earth_bump" + this.isMobileImage + ".webp"), this.colorMapImage = (new THREE.TextureLoader).load("https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/textures/earth_white" + this.isMobileImage + ".webp"), this.mapArray = [], this.bumpMapImage.anisotropy = 4, this.bumpMapImage.format = THREE.RGBFormat, this.mapWhiteConfig = {
                        side: THREE.DoubleSide,
                        color: "rgb(240,240,240)",
                        roughness: 0.75,
                        metalness: 0.3,
                        map: this.colorMapImage,
                        bumpScale: 15,
                        transparent: !0,
                        emissiveIntensity: 5,
                        displacementScale: 1
                    }, this.bumpMap = {
                        bumpMap: this.bumpMapImage
                    }, this.mapConfig = _.hasTouch() ? this.mapWhiteConfig : c({}, this.bumpMap, this.mapWhiteConfig);
                    for (var e = 0; e < this.animationFPS; e++) {
                        this.mapArray.push((new THREE.TextureLoader).load("https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/map/earth0.webp"))
                    }
                }
            }
            return h(t, [{
                key: "load",
                value: function () {
                    var t = this;
                    return new O(function (e, i) {
                        _.isMobile() ? (t.init(), e()) : (t.worldLoader = new THREE.OBMLoader, t.worldLoader.load("./assets/models/map.obm", function (i) {
                            t.world = new t.worldObj(i, t), t.init(), e()
                        }, function () {}, i))
                    })
                }
            }, {
                key: "changeTexture",
                value: function (t) {
                    this.world.Sphere.material.map = this.mapArray[t], this.world.Sphere.material.needsUpdate = !0, this.world.Sphere.material.map.needsUpdate = !0
                }
            }, {
                key: "worldObj",
                value: function (t, e) {
                    var i = this;
                    this.matBlack = new THREE.MeshStandardMaterial({
                        side: THREE.DoubleSide,
                        color: "rgb(0,0,0)",
                        roughness: 1,
                        metalness: 0
                    }), this.matWhite = new THREE.MeshStandardMaterial(e.mapConfig), this.mesh = t, this.Sphere = t.children[0], this.Sphere.material = this.matWhite, this.mesh.traverse(function (t) {
                        t instanceof THREE.Mesh && (t.castShadow = !0, t.receiveShadow = !0)
                    }), this.Glow2 = new THREE.PointLight("rgb(252,174,111)", 1, 500, 0.523598775598, 0.476401224402, 0), this.Glow2.position.set(30.728, -70.926, -400.444), this.Glow2.rotation.set(0, 0, 0), this.Glow2.shadow.mapSize.height = 2048, this.Glow2.shadow.mapSize.width = 2048, this.Glow1 = new THREE.PointLight("rgb(106,182,245)", 1, 500, 0.523598775598, 0.476401224402, 0), this.Glow1.position.set(-70, 75.685, -100.444), this.Glow1.rotation.set(0, 0, 0), this.Glow1.shadow.mapSize.height = 2048, this.Glow1.shadow.mapSize.width = 2048, this.Light2 = new THREE.PointLight("rgb(106,182,245)", 0.5, 500, 0.523598775598, 0.476401224402, 0), this.Light2.position.set(241.871, 73.751, -161.728), this.Light2.rotation.set(-2.052, 0, 0), this.Light2.shadow.mapSize.height = 2048, this.Light2.shadow.mapSize.width = 2048, this.Light1 = new THREE.PointLight("rgb(255,162,162)", 0.5, 500, 0.523598775598, 0.476401224402, 2), this.Light1.position.set(-176.833, 73.751, -191.92), this.Light1.rotation.set(-2.052, 0, 0), this.Light1.shadow.mapSize.height = 2048, this.Light1.shadow.mapSize.width = 2048, this.Light = new THREE.AmbientLight("rgb(0,0,0)", 1.5), this.Light.position.set(0, 226.79, -0), this.Light.rotation.set(0, 0, 0), this.flareColor = new THREE.Color("rgb(106,182,245)"), this.flareColor.setHSL(0.55, 0.9, 1), this.textureFlare0 = (new THREE.TextureLoader).load("https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/lensflare1_alpha.webp"), this.Glow1lensFlare = new THREE.LensFlare(this.textureFlare0, 700, 0, THREE.AdditiveBlending, this.flareColor), this.Glow1lensFlare.position.copy(this.Glow1.position), this.Glow1lensFlare.position.x = 0, this.Glow1lensFlare.position.y = 0, this.textureFlare2 = (new THREE.TextureLoader).load("https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/lensflare2_alpha.webp"), this.glow2spriteMaterial = new THREE.SpriteMaterial({
                        map: this.textureFlare2,
                        color: "rgb(80,100,100)"
                    }), this.glow2sprite = new THREE.Sprite(this.glow2spriteMaterial), this.glow2sprite.scale.set(0, 0, 1), this.glow2sprite.position.copy(this.Glow2.position), this.textureFlare3 = (new THREE.TextureLoader).load("https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/lensflare3_alpha.webp"), this.glow3spriteMaterial = new THREE.SpriteMaterial({
                        map: this.textureFlare3,
                        color: "rgb(80,100,100)"
                    }), this.glow3sprite = new THREE.Sprite(this.glow3spriteMaterial), this.glow3sprite.scale.set(0, 0, 1), this.glow3sprite.position.set(0, 75.685, -100.444), this.textureFlare4 = (new THREE.TextureLoader).load("https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/lensflare4_alpha.webp"), this.glow4spriteMaterial = new THREE.SpriteMaterial({
                        map: this.textureFlare4,
                        color: "rgb(80,100,100)"
                    }), this.glow4sprite = new THREE.Sprite(this.glow4spriteMaterial), this.glow4sprite.scale.set(0, 0, 1), this.glow4sprite.position.set(-20, 0, -300), g["default"].map(function (t) {
                        return new a(t[1], t[0], i.Sphere)
                    }), this.camRotWorld = new THREE.Object3D, this.cameraRig = new THREE.Object3D, this.Camera = new THREE.PerspectiveCamera(45, e.canvasEl.offsetWidth / e.canvasEl.offsetHeight, 100, 7000), this.Camera.setViewOffset(e.canvasEl.offsetWidth, e.canvasEl.offsetHeight, 0, 0, e.canvasEl.offsetWidth, e.canvasEl.offsetHeight), this.Camera.setFocalLength(36), this.camRotWorld.add(this.cameraRig), this.cameraRig.add(this.Camera);
                    var n = _.isMobileResolution() ? 0 : -127.266;
                    this.cameraRig.position.set(n, -0.612, 634.059), this.cameraRig.rotation.y = 0, this.Camera.rotation.x = 0, this.Camera.rotation.z = 0, e.scene.add(this.mesh, this.Glow2, this.Glow1, this.Light2, this.Light1, this.Light, this.camRotWorld, this.Glow1lensFlare, this.glow2sprite, this.glow3sprite, this.glow4sprite)
                }
            }, {
                key: "init",
                value: function () {
                    var t = this,
                        e = new k.TimelineLite({
                            paused: !0
                        });
                    e.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: 0,
                        ease: k.Power2.easeOut
                    }, 0.2, 0).staggerTo(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: k.Power2.easeOut
                    }, 0.2, 2).staggerTo(this.copy3, 2, {
                        opacity: 1,
                        y: 0,
                        ease: k.Power2.easeOut
                    }, 0.2, 8).to(this.veil, 2, {
                        opacity: 1,
                        ease: k.Power2.easeOut
                    }, 0), this.globeChangeProgressStart = 0.26, this.globeMarkerEnd = 0.14, this.globeMarkerEndAnim = 0.42, this.globeChangeProgressEnd = 0.75, this.globeInteger = 0.02, this.triggers = [{
                        atProgress: 0,
                        duration: 0.9,
                        timeline: e
                    }], _.isMobile() || (this.renderer.setSize(this.canvasEl.offsetWidth, this.canvasEl.offsetHeight), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.physicallyBasedShading = !0, this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.soft = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, this.renderer.setClearColor(4605510, 0), this.renderer.domElement.setAttribute("id", "world-canvas"), this.canvasEl.appendChild(this.renderer.domElement), this.worldTl = m.getGlobeTimeline(this.canvasEl, "#world-canvas", this.vHeight), this.resize(), this.starsInit(), this.starDraw(), this.renderer.render(this.scene, this.world.Camera), _.isMobile() || new d["default"]({
                        source: this.canvasEl,
                        multiplier: 1,
                        friction: 0.95,
                        update: function (e) {
                            t.world.mesh.rotation.y = e / 100 * 0.5
                        }
                    })), this.isReady = !0
                }
            }, {
                key: "hideDots",
                value: function () {
                    var t = {
                        transparent: !0,
                        opacity: 0,
                        visible: !1,
                        needsUpdate: !0,
                        matrixWorldNeedsUpdate: !0,
                        depthWrite: !1
                    };
                    this.world.Sphere.children.map(function (e) {
                        Object.assign(e.children[0], t)
                    })
                }
            }, {
                key: "showDots",
                value: function () {
                    var t = {
                        transparent: !1,
                        opacity: 1,
                        visible: !0,
                        needsUpdate: !0,
                        matrixWorldNeedsUpdate: !0,
                        depthWrite: !1
                    };
                    this.world.Sphere.children.map(function (e) {
                        return Object.assign(e.children[0], t)
                    })
                }
            }, {
                key: "globeIntroMotion",
                value: function (t) {
                    t < -0.2 && t > -0.6 && this.worldTl.progress((0, b["default"])(t, [-0.6, -0.2], [0, 1]))
                }
            }, {
                key: "globeLightMotion",
                value: function (t) {
                    var e = (0, u["default"])(t, 0, 0.2),
                        i = [0, 0.2];
                    this.hidingGlobe || this.world.Glow1lensFlare.position.set((0, b["default"])(e, i, [60, -70]), (0, b["default"])(e, i, [70, 78.685]), -100.444), this.world.glow2sprite.scale.set((0, b["default"])(e, i, [0, 500]), (0, b["default"])(e, i, [0, 500]), 1), this.world.glow3sprite.scale.set((0, b["default"])(e, i, [0, 500]), (0, b["default"])(e, i, [0, 500]), 1), this.world.glow4sprite.scale.set((0, b["default"])(e, i, [0, 600]), (0, b["default"])(e, i, [0, 600]), 1)
                }
            }, {
                key: "setProgress",
                value: function (t) {
                    var e = this;
                    this.isReady && this.progress !== t && (_.isMobile() || (this.globeLightMotion(t), t <= 0.2 && (this.animateMarkers(t, 0, 0.2, 0, 0.7), this.animateLights(t, 0.2, 0))), this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = Math.min(1, Math.max(0, (t - n) / r));
                        s.progress(o), _.isMobile() || (o >= e.globeChangeProgressStart && o < e.globeChangeProgressEnd ? e.startAnimateGlobe(o) : o < e.globeChangeProgressStart && e.world.Sphere.material.map != e.colorMapImage && (e.world.Sphere.material.map = e.colorMapImage, e.world.Sphere.material.needsUpdate = !0, e.world.Sphere.material.map.needsUpdate = !0), o >= e.globeMarkerEnd && e.animateMarkers(o, e.globeMarkerEnd, e.globeMarkerEndAnim, 0.7, 0))
                    }), _.isMobile() || (t >= 0.75 ? this.hidingGlobe || this.hideGlobe() : this.hidingGlobe && this.showGlobe()), this.progress = t)
                }
            }, {
                key: "animateMarkers",
                value: function (t, e, i, n, r) {
                    A.opacity = (0, b["default"])(t, [e, i], [n, r]), t > this.globeMarkerEnd ? A.depthWrite = !1 : A.depthWrite = !0
                }
            }, {
                key: "animateLights",
                value: function (t, e, i) {
                    this.world.Light1.intensity = (0, b["default"])(t, [e, i], [2.3, 0.5]), this.world.Light2.intensity = (0, b["default"])(t, [e, i], [2, 0.5])
                }
            }, {
                key: "startAnimateGlobe",
                value: function (t) {
                    for (var e = t - this.globeChangeProgressStart, i = 0; i < this.animationFPS; i++) {
                        e > this.globeInteger * i && e < this.globeInteger * (i + 1) && this.changeTexture(i)
                    }
                }
            }, {
                key: "autoRotate",
                value: function () {
                    this.autoRotateOn && (this.world.mesh.rotation.y = this.world.mesh.rotation.y + 0.003)
                }
            }, {
                key: "starsInit",
                value: function () {
                    for (var t = 0; t < 2 * this.canvasBackground.width; t++) {
                        this.stars.push({
                            x: Math.random() * this.canvasBackground.width,
                            y: Math.random() * this.canvasBackground.height,
                            radius: Math.random(),
                            vx: Math.floor(10 * Math.random()) - 5,
                            vy: Math.floor(10 * Math.random()) - 5
                        })
                    }
                }
            }, {
                key: "starDraw",
                value: function () {
                    this.ctx.clearRect(0, 0, this.canvasBackground.width, this.canvasBackground.height), this.ctx.globalCompositeOperation = "lighter";
                    for (var t = 0, e = this.stars.length; t < e; t++) {
                        var i = this.stars[t];
                        this.ctx.fillStyle = "rgba(255, 255, 255, 0.4)", this.ctx.beginPath(), this.ctx.arc(i.x, i.y, i.radius, 0, 2 * Math.PI), this.ctx.fill()
                    }
                    this.starsDrawn = !0
                }
            }, {
                key: "starUpdate",
                value: function () {
                    for (var t = 0, e = this.stars.length; t < e; t++) {
                        var i = this.stars[t];
                        i.x += i.vx / this.fps, i.y += i.vy / this.fps
                    }
                }
            }, {
                key: "resize",
                value: function () {}
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1, this.render()
                }
            }, {
                key: "render",
                value: function () {
                    this.isReady && (this.paused || _.isMobile() || (this.autoRotate(), E["default"].update(), _.isMobile() || this.starUpdate(), this.renderer.render(this.scene, this.world.Camera), requestAnimationFrame(this.render.bind(this))))
                }
            }]), t
        }(),
        C = function () {
            var t = this;
            this.hideGlobe = function () {
                t.hidingGlobe = !0, t.toTween = [t.world.Sphere.material, t.world.Glow1lensFlare.lensFlares[0], t.world.glow2sprite.material, t.world.glow3sprite.material, t.world.glow4sprite.material], _.isMobile() || t.toTween.forEach(function (e, i) {
                    new E["default"].Tween(e).to({
                        opacity: 0
                    }, 1500).easing(E["default"].Easing.Exponential.InOut).onComplete(function () {
                        i === t.toTween.length - 1 && t.world.Glow1lensFlare.position.set(-70, 78.685, -99999)
                    }).start()
                })
            }, this.showGlobe = function () {
                t.hidingGlobe = !1, _.isMobile() || (t.world.Glow1lensFlare.position.set(-70, 78.685, -700), t.toTween.forEach(function (t, e) {
                    new E["default"].Tween(t).to({
                        opacity: 1
                    }, 1500).easing(E["default"].Easing.Exponential.InOut).start()
                }))
            }
        };
    e["default"] = R
}, function (t, e, i) {
    var n, r, s;
    ! function (i, o) {
        r = [e, t], n = o, s = "function" == typeof n ? n.apply(e, r) : n, !(void 0 !== s && (t.exports = s))
    }(this, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var n = 0.3,
            r = 0.04,
            s = 0.11,
            o = function l(t) {
                function e() {
                    x.call(b, V, U)
                }

                function o(t) {
                    if ("touchmove" === t.type || "touchstart" === t.type || "touchend" === t.type) {
                        var e = t.targetTouches[0] || t.changedTouches[0];
                        return {
                            x: e.clientX,
                            y: e.clientY,
                            id: e.identifier
                        }
                    }
                    return {
                        x: t.clientX,
                        y: t.clientY,
                        id: null
                    }
                }

                function u(t) {
                    var e = o(t);
                    Y || X || (Y = !0, $ = !1, z = e.id, F = I = e.x, N = q = e.y, Z = [], d(F, N), document.addEventListener("touchmove", c), document.addEventListener("touchend", h), document.addEventListener("touchcancel", f), document.addEventListener("mousemove", c), document.addEventListener("mouseup", h))
                }

                function c(t) {
                    t.preventDefault();
                    var e = o(t);
                    Y && e.id === z && (I = e.x, q = e.y, d(F, N), v())
                }

                function h(t) {
                    var e = o(t);
                    Y && e.id === z && f()
                }

                function f() {
                    Y = !1, d(F, N), y(), document.removeEventListener("touchmove", c), document.removeEventListener("touchend", h), document.removeEventListener("touchcancel", f), document.removeEventListener("mouseup", h), document.removeEventListener("mousemove", c)
                }

                function d(t, e) {
                    for (var i = Date.now(); Z.length > 0 && !(i - Z[0].time <= 100);) {
                        Z.shift()
                    }
                    Z.push({
                        x: t,
                        y: e,
                        time: i
                    })
                }

                function p() {
                    var t = I - F,
                        i = q - N;
                    if (V += t * P, U += i * P, R) {
                        var n = g();
                        0 !== n.x && (V -= t * m(n.x) * P), 0 !== n.y && (U -= i * m(n.y) * P)
                    } else {
                        g(!0)
                    }
                    e(), F = I, N = q, G = !1
                }

                function m(t) {
                    return 0.000005 * Math.pow(t, 2) + 0.0001 * t + 0.55
                }

                function v() {
                    G || a(p), G = !0
                }

                function g(t) {
                    var e = 0,
                        i = 0;
                    return void 0 !== C && V < C ? e = C - V : void 0 !== L && V > L && (e = L - V), void 0 !== j && U < j ? i = j - U : void 0 !== D && U > D && (i = D - U), t && (0 !== e && (V = e > 0 ? C : L), 0 !== i && (U = i > 0 ? j : D)), {
                        x: e,
                        y: i,
                        inBounds: 0 === e && 0 === i
                    }
                }

                function y() {
                    var t = Z[0],
                        e = Z[Z.length - 1],
                        i = e.x - t.x,
                        n = e.y - t.y,
                        r = e.time - t.time,
                        s = r / 15 / P;
                    B = i / s || 0, H = n / s || 0;
                    var o = g();
                    (Math.abs(B) > 1 || Math.abs(H) > 1 || !o.inBounds) && ($ = !0, a(_))
                }

                function _() {
                    if ($) {
                        B *= k, H *= k, V += B, U += H;
                        var t = g();
                        if (Math.abs(B) > W || Math.abs(H) > W || !t.inBounds) {
                            if (R) {
                                var i = 2.5;
                                if (0 !== t.x) {
                                    if (t.x * B <= 0) {
                                        B += t.x * r
                                    } else {
                                        var n = t.x > 0 ? i : -i;
                                        B = (t.x + n) * s
                                    }
                                }
                                if (0 !== t.y) {
                                    if (t.y * H <= 0) {
                                        H += t.y * r
                                    } else {
                                        var n = t.y > 0 ? i : -i;
                                        H = (t.y + n) * s
                                    }
                                }
                            } else {
                                0 !== t.x && (V = t.x > 0 ? C : L, B = 0), 0 !== t.y && (U = t.y > 0 ? j : D, H = 0)
                            }
                            e(), a(_)
                        } else {
                            $ = !1
                        }
                    }
                }
                var w = t.source,
                    b = void 0 === w ? document : w,
                    x = t.update,
                    T = t.multiplier,
                    P = void 0 === T ? 1 : T,
                    S = t.friction,
                    k = void 0 === S ? 0.92 : S,
                    M = t.initialValues,
                    E = t.boundX,
                    O = t.boundY,
                    A = t.bounce,
                    R = void 0 === A || A;
                i(this, l);
                var C, L, j, D, F, N, I, q, z, B, H, V = 0,
                    U = 0,
                    W = n * P,
                    G = !1,
                    Y = !1,
                    X = !1,
                    $ = !1,
                    Z = [];
                ! function () {
                    if (b = "string" == typeof b ? document.querySelector(b) : b, !b) {
                        throw new Error("IMPETUS: source not found.")
                    }
                    if (!x) {
                        throw new Error("IMPETUS: update function not defined.")
                    }
                    M && (M[0] && (V = M[0]), M[1] && (U = M[1]), e()), E && (C = E[0], L = E[1]), O && (j = O[0], D = O[1]), b.addEventListener("touchstart", u), b.addEventListener("mousedown", u)
                }(), this.pause = function () {
                    Y = !1, X = !0
                }, this.resume = function () {
                    X = !1
                }, this.setValues = function (t, e) {
                    "number" == typeof t && (V = t), "number" == typeof e && (U = e)
                }, this.setMultiplier = function (t) {
                    P = t, W = n * P
                }
            };
        e.exports = o;
        var a = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
                window.setTimeout(t, 1000 / 60)
            }
        }()
    })
}, function (t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e["default"] = [
        [34.5, 131.6],
        [-23.3, -67.62],
        [14.501, -90.876],
        [38.57, 34.52],
        [46.206, -121.49],
        [37.62, 140.28],
        [10.07, 40.84],
        [13.08, 40.85],
        [40.275, 44.75],
        [18.77, 145.67],
        [14.465, -90.743],
        [37.77, -25.47],
        [-50.17, -73.83],
        [-8.342, 115.508],
        [20.42, 145.03],
        [53.98, 159.45],
        [53.983, 159.45],
        [36.53, 139.18],
        [43.38, 144.02],
        [55.43, 158.65],
        [39.75, 140.8],
        [39.97, 140.77],
        [29.45, 129.6],
        [29.461, 129.597],
        [54.13, -165.97],
        [50.858, 155.55],
        [17.6, 145.83],
        [12.88, 40.57],
        [41.73, 12.7],
        [-0.43, -91.12],
        [13.52, 40.63],
        [14.88, 39.92],
        [60.42, -135.42],
        [14.82, -91.48],
        [56.7, 159.65],
        [57.7, 160.4],
        [13.82, 40.55],
        [7.77, 38.78],
        [55.42, -163.15],
        [-0.55, 127.5],
        [17.32, 121.1],
        [0.75, 124.42],
        [-4.08, 153.65],
        [34.55, -115.78],
        [-12.48, 49.1],
        [-16.25, 168.12],
        [15.828, 120.805],
        [-37.83, 77.52],
        [52.5, -171.25],
        [16.35, 145.67],
        [56.32, 158.83],
        [-15.42, -72.33],
        [-75.8, -132.33],
        [-20.2, 169.83],
        [56.88, -158.17],
        [-14.3, 48.67],
        [-19.4, 47.2],
        [-40.771, -72.153],
        [-49.683, 178.767],
        [-0.481, -78.141],
        [-26.083, -67.5],
        [-26.08, -67.5],
        [-25.53, -68],
        [-37.406, -71.349],
        [-15.4, 167.83],
        [32.45, 139.77],
        [13.891, -89.786],
        [13.72, -88.77],
        [6.987, 125.273],
        [12.242, -86.342],
        [-24.27, -67.77],
        [-24.25, -67.767],
        [40.55, 44.12],
        [13.428, -88.105],
        [39.7, 44.28],
        [15.2, 120.742],
        [11.58, 42.47],
        [10.463, -84.703],
        [-47.2, -73.483],
        [15.63, 44.08],
        [-7.725, 112.58],
        [47.5, 120.7],
        [36.4, 138.53],
        [13.07, 41.6],
        [-7.95, -14.37],
        [65.03, -16.75],
        [32.88, 131.1],
        [12.95, 42.43],
        [19.67, 145.4],
        [-0.353, -78.617],
        [23.333, 5.833],
        [14.583, -91.186],
        [52.38, -174.15],
        [57.97, 160.65],
        [19.809, -96.526],
        [44.804, 147.13],
        [-34.65, -70.05],
        [-36.9, 174.87],
        [59.37, -153.42],
        [53.255, 158.83],
        [3.67, 125.5],
        [45.95, -130],
        [10.082, 40.702],
        [1.08, -77.68],
        [-0.9, -91.42],
        [-35.653, -70.761],
        [12.53, -83.87],
        [37.73, 140.25],
        [19.523, 121.94],
        [43.979, -121.688],
        [-6.14, 155.195],
        [53.905, 158.07],
        [48.786, -121.82],
        [14.05, 48.33],
        [8.8, 124.92],
        [-5.83, 154.98],
        [37.328, -112.408],
        [-2.57, 147.28],
        [-7.85, 114.37],
        [5.4, 125.375],
        [-3.6, 144.85],
        [-5.2, 151.23],
        [14.07, 121.48],
        [-4.525, 129.871],
        [37.6, 140.08],
        [3.138, 125.491],
        [45.1, 148.02],
        [19.3, -110.82],
        [64.63, -17.53],
        [52.823, 158.27],
        [12.292, 93.875],
        [2.32, 36.57],
        [8.8, -82.558],
        [10.135, -84.1],
        [10.8, 107.2],
        [-8.242, 115.375],
        [-25.42, -68.58],
        [31.92, 139.92],
        [18.33, 32.75],
        [28.07, 60],
        [55.32, -131.05],
        [51.75, 157.27],
        [-2.82, 102.18],
        [44.285, -121.841],
        [57.88, 160.53],
        [-76.05, -136],
        [8.95, 39.75],
        [44.47, 146.93],
        [-4.43, 103.67],
        [55.978, 160.587],
        [-0.78, 127.72],
        [40.955, -121.365],
        [7.07, 38.1],
        [11.523, 124.534],
        [-6.092, 155.225],
        [15.55, 50.63],
        [18.367, 41.633],
        [8.78, 38.98],
        [10.75, 12],
        [56.53, -158.8],
        [38.97, -112.5],
        [-36.286, -71.009],
        [56.97, 159.78],
        [57.35, 161.367],
        [44.42, -121.77],
        [-3.508, 144.62],
        [51.9, -177.43],
        [44.83, 147.37],
        [53.93, -168.03],
        [-3.994, 144.963],
        [-5.15, 150.03],
        [52.9, 157.78],
        [55.88, 157.78],
        [54.32, 160.02],
        [56.47, 157.8],
        [4.4, 117.88],
        [61.38, -141.75],
        [-37.721, 77.825],
        [8.27, 39.03],
        [13.725, 40.6],
        [13.3, 40.98],
        [11.63, 41.45],
        [8.558, 39.475],
        [-54.42, 3.35],
        [-8.28, 115.13],
        [14.85, -24.72],
        [5.092, -75.3],
        [5.092, -75.3],
        [63.92, -21.83],
        [50.8, -123.4],
        [-62.05, -56.75],
        [-30.23, -178.92],
        [-59.03, -26.58],
        [-34.875, 179.075],
        [41.178, -121.443],
        [-66.8, 163.25],
        [5.95, 121.07],
        [-1.23, 29.72],
        [52.37, 175.98],
        [12.77, 124.05],
        [-0.2, 30.08],
        [-52.33, -73.4],
        [47.12, 109.08],
        [8.05, 38.35],
        [64.07, -148.42],
        [10.287, 125.22],
        [-39.2, -71.83],
        [18.222, 122.123],
        [-35.558, -70.496],
        [38.867, -4.017],
        [7.877, 125.068],
        [-41.326, -72.614],
        [-37.92, -71.45],
        [4.203, 9.17],
        [9.203, 124.673],
        [18.83, 121.86],
        [40.827, 14.139],
        [37.1, 12.7],
        [-57.08, -26.67],
        [52.9, -170.05],
        [-40.35, -72.07],
        [33.78, -105.93],
        [-17.47, -69.82],
        [0.029, -77.986],
        [0.029, -77.986],
        [-41.25, -72.27],
        [-41.25, -72.267],
        [21.125, -104.508],
        [10.158, 109.014],
        [3.5, 36.042],
        [-6.892, 108.4],
        [38.33, 127.33],
        [-0.375, -78.25],
        [-16.191, -71.53],
        [-16.191, -71.53],
        [52.57, -171.13],
        [45.775, 2.967],
        [-42.833, -72.646],
        [41.98, 128.08],
        [-38.37, -71.08],
        [56.82, 159.67],
        [55.55, 157.467],
        [19.08, -99.13],
        [17.36, -93.228],
        [57.13, -157],
        [50.325, 155.458],
        [-23.58, -67.7],
        [-23.583, -67.7],
        [-36.863, -71.377],
        [-1.464, -78.815],
        [13.475, -88.32],
        [14.12, -89.73],
        [14.83, -89.55],
        [6.65, 38.12],
        [48.98, 153.48],
        [45.38, 147.92],
        [46.525, 150.875],
        [39.08, 140.03],
        [-2.68, 37.88],
        [12.53, -86.142],
        [43.241, -122.108],
        [14.02, -89.25],
        [-36.446, 177.839],
        [38.97, -122.77],
        [44.83, -130.3],
        [52.82, -169.95],
        [13.87, -89.55],
        [-46.1, 50.23],
        [19.492, -97.15],
        [-23.23, -67.65],
        [-8.83, 157.17],
        [19.514, -103.62],
        [-18.5, -68.07],
        [-0.17, 121.608],
        [26, -111.92],
        [11.538, -85.622],
        [13.277, -87.853],
        [13.22, -87.765],
        [-54.95, -70.27],
        [-37.85, -71.17],
        [-27.3, -69.13],
        [7.18, 38.43],
        [-43.18, -72.8],
        [-23.85, -67.62],
        [-23.75, -67.53],
        [-25.33, -68.52],
        [29.08, -113.513],
        [-15.52, -72.65],
        [39.67, -31.07],
        [12.98, -87.57],
        [36.03, -117.82],
        [-0.677, -78.436],
        [-42.017, -70.183],
        [42.93, -122.12],
        [-6.58, 145.08],
        [43.42, -113.5],
        [54.7, -130.23],
        [15.38, 109.12],
        [0.308, -78.364],
        [14.333, -90.4],
        [14.33, -90.4],
        [0.98, -77.88],
        [19.15, -97.27],
        [-15.62, -173.67],
        [-15.617, -173.667],
        [-30.542, -178.561],
        [-26.617, -68.35],
        [12.6, 40.48],
        [12.38, 40.07],
        [33.95, 67.92],
        [21.324, 144.194],
        [43.68, 142.88],
        [-5.056, 150.108],
        [13.792, 40.55],
        [14.242, 40.3],
        [11.28, 41.63],
        [35.951, 52.109],
        [55.62, -161.22],
        [-6.2, 105.97],
        [39.7, 45.542],
        [45.33, 114],
        [-0.18, -91.28],
        [-3.38, 102.37],
        [51.97, 178.33],
        [43.57, -121.82],
        [-9.62, 150.88],
        [-62.97, -60.65],
        [45.5, 148.85],
        [-4.03, 103.13],
        [58.42, -154.45],
        [-35.58, -70.75],
        [43.512, -120.861],
        [50.52, 103.25],
        [14.57, 44.67],
        [15.62, -61.45],
        [15.5, -61.42],
        [43.1, -118.75],
        [19.077, 122.202],
        [-7.2, 109.92],
        [51.43, 157],
        [9.35, 40.13],
        [-5.9, 143.15],
        [-36.63, -70.42],
        [38.23, -26.63],
        [1.47, -76.92],
        [39.65, -107.03],
        [58.87, -153.55],
        [27.683, 140.8],
        [13.58, 41.808],
        [1.68, 127.88],
        [56.5, -133.1],
        [24.15, -104.45],
        [55.18, -162.27],
        [53.637, 158.922],
        [41.8, 141.17],
        [40.63, -120.83],
        [-27.15, -109.383],
        [-20.98, 170.28],
        [50.68, 156.02],
        [-8.808, 121.18],
        [-0.63, 36.23],
        [-0.02, -91.546],
        [57.05, -135.75],
        [57.72, -130.63],
        [56.57, 158.52],
        [-39.3, 174.07],
        [-8.67, 122.45],
        [48.958, 153.93],
        [43.33, 42.45],
        [-0.52, 36.27],
        [57.53, 160.53],
        [55.33, -162.07],
        [-6.62, 124.22],
        [1.5, 36.33],
        [47.95, -129.1],
        [-16.68, 168.37],
        [38.52, 35.48],
        [-77.53, 167.17],
        [13.6, 40.67],
        [33.08, 37.15],
        [40.983, -127.5],
        [-25.08, -68.37],
        [64.27, -16.65],
        [15, 145.25],
        [66.35, -164.33],
        [-46.43, 52.2],
        [13.17, -86.4],
        [37.734, 15.004],
        [63.63, -19.62],
        [-20.32, -175.42],
        [20.53, 144.9],
        [38.6, -28.73],
        [57.13, 160.4],
        [8.975, 39.93],
        [-0.37, -91.55],
        [-15.23, -72.63],
        [54.67, -164.35],
        [14.3, -90],
        [39.4, -31.17],
        [14.95, -24.35],
        [-18.02, -174.325],
        [13.4, 143.917],
        [0.7, 30.25],
        [62.93, -137.38],
        [43.361, -120.669],
        [-21.229, 55.713],
        [58.77, -153.68],
        [65.43, -16.65],
        [55.07, -162.82],
        [14.473, -90.88],
        [28.358, -14.02],
        [35.35, 138.73],
        [32.653, 128.851],
        [21.925, 143.442],
        [24.28, 141.52],
        [37.77, -25.32],
        [50.27, 155.25],
        [11.08, 41.27],
        [13.975, 40.408],
        [0.792, -86.15],
        [0.792, -86.15],
        [1.22, -77.37],
        [-9.35, 159.73],
        [-7.25, 108.05],
        [0.8, 127.325],
        [54.973, 160.702],
        [1.375, 127.52],
        [-5.45, 150.03],
        [51.78, -178.8],
        [49.92, -123.03],
        [49.85, -123],
        [-4.692, 149.5],
        [-5.269, 150.088],
        [-14.27, 167.5],
        [8.35, 39.18],
        [-6.78, 106.98],
        [0.32, -89.958],
        [56.33, 158.67],
        [-30.036, -178.713],
        [39.17, 43.33],
        [48.112, -121.113],
        [19.33, -97.25],
        [36.358, -118.32],
        [45.25, 148.35],
        [38.25, 34.57],
        [43.85, 145.53],
        [-9.48, 150.35],
        [62.13, -143.08],
        [52.558, 158.03],
        [46.83, 151.75],
        [57.33, 160.2],
        [39.02, -27.97],
        [28, -15.58],
        [52.08, -176.13],
        [58.35, -155.1],
        [-11.47, 43.33],
        [64.03, -20.87],
        [64.42, -17.33],
        [11.73, 40.25],
        [45.02, 147.87],
        [29.07, -118.28],
        [-0.171, -78.598],
        [-18.42, -69.17],
        [-22.88, -67.58],
        [13.9, -89.12],
        [12.55, 42.53],
        [17.32, 145.85],
        [-7.13, 107.83],
        [-6.642, 126.65],
        [33.13, 139.77],
        [39.95, 140.85],
        [19.7, 110.1],
        [40.65, 140.88],
        [35.22, 139.02],
        [36.15, 136.78],
        [20.708, -156.25],
        [33.37, 126.53],
        [13.72, 42.73],
        [-5.33, 151.1],
        [31.083, 38.417],
        [27.25, 17.5],
        [36.47, 138.88],
        [38.13, 34.17],
        [11.6, 108.2],
        [61.62, -152.48],
        [15.43, 44.78],
        [13.5, 40.72],
        [-35.004, 178.973],
        [-53.106, 73.513],
        [58.6, -131.97],
        [63.98, -19.7],
        [43.5, -112.45],
        [64.18, -21.33],
        [52.75, -170.12],
        [9.78, 40.33],
        [27.73, -18.03],
        [38.6, 140.18],
        [0.88, 127.32],
        [36.95, 139.28],
        [6.78, 37.83],
        [-56.7, -27.15],
        [64.78, -18.92],
        [-0.38, 34.5],
        [-18.992, -174.775],
        [41.47, 113],
        [45.374, -121.694],
        [56.78, -131.28],
        [-41.874, -72.431],
        [64.073, -21.202],
        [19.692, -155.87],
        [-39.87, -71.55],
        [-16.608, -70.85],
        [-74.33, -99.42],
        [-45.9, -72.97],
        [-42.377, -72.578],
        [2.92, -76.05],
        [-5.35, 104.6],
        [19.68, -97.45],
        [-20.57, -175.38],
        [-22.4, 172.05],
        [-2.33, 101.6],
        [-2.333, 101.6],
        [-9, 148.37],
        [-9.52, 150.53],
        [1.475, 127.642],
        [31.22, 130.57],
        [55.68, 157.73],
        [58.4, 161.08],
        [-4.87, 31.92],
        [-8.058, 114.242],
        [58.08, 160.77],
        [60.03, -153.08],
        [-8.342, 123.258],
        [-8.53, 123.42],
        [-8.478, 122.671],
        [-8.54, 123.59],
        [-0.659, -78.714],
        [13.672, -89.053],
        [51.49, 157.2],
        [2.15, 98.93],
        [65.6, -163.92],
        [23, 10.833],
        [45.93, -121.82],
        [61.43, -164.47],
        [-8.73, 120.98],
        [-8.875, 120.95],
        [37.692, -119.02],
        [14.55, -89.63],
        [20.469, 122.01],
        [9.979, -83.852],
        [13.457, 123.457],
        [24.558, 124],
        [-20.73, -68.55],
        [54.75, -163.73],
        [13.658, 123.37],
        [40.73, 13.897],
        [56.58, -130.55],
        [-19.15, -68.83],
        [-19, 46.77],
        [26.58, 40.2],
        [45.77, 149.68],
        [40.65, 140.3],
        [39.85, 141],
        [27.85, 128.25],
        [24.75, 141.33],
        [14.42, -89.68],
        [-8.88, 121.63],
        [-7.97, 113.57],
        [13.813, -89.633],
        [19.179, -98.642],
        [34.92, 139.12],
        [-8.93, 33.4],
        [1.08, 127.42],
        [14.35, 121.33],
        [15.042, 39.82],
        [71.08, -8.17],
        [29.33, -114.5],
        [-19.45, -67.417],
        [44.692, -121.8],
        [44.08, 128.83],
        [19.724, -99.757],
        [19.733, -99.758],
        [43.03, -117.42],
        [11.92, -85.98],
        [-3.52, 102.62],
        [42.55, 44],
        [-3.62, 144.62],
        [52.97, -169.72],
        [58.62, -154.05],
        [26.667, 141],
        [-35.3, 173.9],
        [57.8, 160.67],
        [26.122, 141.102],
        [7.95, 124.8],
        [51.3, 156.87],
        [56.02, 160.593],
        [-8.75, 157.03],
        [51.92, -177.17],
        [10.412, 123.132],
        [-19.667, -175.033],
        [37.67, 39.83],
        [-7.12, 108.08],
        [-6.27, 106.042],
        [2.78, 125.48],
        [37.67, 33.65],
        [-1.5, 29.45],
        [-4.649, 145.964],
        [50.13, 155.37],
        [40.75, 42.9],
        [-11.75, 43.38],
        [54.05, 159.43],
        [52.18, -175.5],
        [42.7, 44.5],
        [21.77, 143.72],
        [63.63, -19.05],
        [58.27, -154.98],
        [-0.47, 30.18],
        [-0.08, 29.92],
        [-9.02, 157.95],
        [-7.92, 112.45],
        [57.1, 159.93],
        [56.4, 158.85],
        [-8.758, 121.83],
        [51.65, 157.35],
        [49.37, 125.92],
        [-7.93, 112.308],
        [-7.23, 107.72],
        [-49.58, 69.5],
        [-1.814, 101.264],
        [47.35, 152.475],
        [54.75, 157.38],
        [48.67, 102.75],
        [49.12, 154.508],
        [25, 39.92],
        [52.063, 157.703],
        [57.38, -156.75],
        [-6.73, 106.65],
        [12.3, -61.63],
        [-9.23, 33.78],
        [30.78, 130.28],
        [54.487, 160.253],
        [19.425, -155.292],
        [-3.07, 37.35],
        [57.35, 160.967],
        [31.93, 130.87],
        [22.8, 41.38],
        [52.1, 177.6],
        [24.414, 141.419],
        [25.43, 141.23],
        [55.13, 160.32],
        [1.47, 125.03],
        [56.057, 160.638],
        [66.67, -18.5],
        [55.07, 160.77],
        [46.042, 150.05],
        [42.07, 140.68],
        [55.032, 160.72],
        [8.8, 39.692],
        [52.22, -175.13],
        [63.6, -170.43],
        [-7.33, 146.708],
        [5.1, 35.88],
        [-17.32, 179.4],
        [0.77, 36.12],
        [53.32, 158.688],
        [51.357, 156.75],
        [19.8, 18.53],
        [34.22, 139.15],
        [55.58, 158.38],
        [65.73, -16.78],
        [56.37, 159.03],
        [63.98, -19.7],
        [-6.102, 105.423],
        [54.593, 160.273],
        [63.98, -21.42],
        [63.93, -22.1],
        [54.753, 160.527],
        [51.8, 157.53],
        [29.97, 129.93],
        [29.964, 129.928],
        [30.43, 130.22],
        [24.85, 121.92],
        [33.08, 131.25],
        [58.47, -154.35],
        [38.58, 28.52],
        [56.37, 158.37],
        [35.52, 80.2],
        [56.02, -159.8],
        [38.95, 140.78],
        [51.45, 157.12],
        [33.4, 139.68],
        [33.4, 139.683],
        [11.88, 41.208],
        [36.62, 138.55],
        [43.55, 144.43],
        [42.5, 141.18],
        [14.5, 25.8],
        [-16.829, 168.536],
        [64.65, -16.72],
        [0.45, 30.25],
        [28.58, -17.83],
        [12.3, -85.73],
        [64.42, 17.33],
        [64.08, -19.4],
        [-8.95, 148.15],
        [-8, 113.342],
        [-5.525, 148.42],
        [64.75, -19.98],
        [-39.633, -71.5],
        [29.03, -13.63],
        [43.25, 10.87],
        [-23.37, -67.73],
        [40.492, -121.508],
        [-25.17, -68.5],
        [-18.806, -174.65],
        [7.65, 124.47],
        [-49.02, -73.55],
        [34.75, -116.625],
        [-7.625, 111.192],
        [20.83, 109.78],
        [-2.751, 35.902],
        [7.393, 126.397],
        [-8.358, 122.842],
        [-56.67, -28.13],
        [57.3, 159.83],
        [58.42, -131.35],
        [-8.53, 122.775],
        [-8.575, 122.78],
        [-8.272, 123.505],
        [-17.87, -69.48],
        [9.57, 40.28],
        [17.37, -62.8],
        [-22.83, -67.88],
        [-3.125, 152.642],
        [-65.03, -60.05],
        [38.48, 14.95],
        [38.483, 14.95],
        [51.95, 178.53],
        [64.87, -22.23],
        [-38.692, -71.729],
        [-24.72, -68.53],
        [18.92, -155.27],
        [1.358, 124.792],
        [-5.47, 150.5],
        [-4.92, 151.158],
        [-6.52, 155.62],
        [50.25, 155.43],
        [-5.358, 147.12],
        [-36.193, -71.161],
        [42.33, 126.5],
        [-0.92, 36.45],
        [-38.377, -71.58],
        [-16.507, 168.346],
        [22.28, 95.1],
        [1.478, 99.209],
        [-4.22, 103.62],
        [25.17, 37.75],
        [-7.7, 113.58],
        [44.62, 147],
        [64.87, -23.25],
        [13.02, 40.2],
        [-45.1, -73.2],
        [-30.2, -178.47],
        [-28.98, -140.25],
        [4.48, -75.4],
        [32.733, -16.967],
        [11.446, -85.515],
        [-9.2, 147.57],
        [9.258, 123.175],
        [58.2, -155.25],
        [10.872, 124.853],
        [1.358, 124.858],
        [-34.161, -69.833],
        [7.647, 124.32],
        [0.32, 127.4],
        [53.9, -166.93],
        [-7.13, 107.65],
        [-8.02, 112.68],
        [13.422, 123.597],
        [19.23, -98.03],
        [8.22, 123.63],
        [13.24, 122.018],
        [0.467, 99.667],
        [13.27, 41.65],
        [55.82, 157.98],
        [54.13, 159.67],
        [-9.08, 148.33],
        [-4.1, 145.061],
        [66.3, -17.1],
        [11.75, 41.483],
        [12.17, 40.82],
        [12.38, 42.2],
        [10.615, 123.22],
        [5.03, 9.83],
        [-5.53, 130.292],
        [23.917, 5.833],
        [14.13, 121.2],
        [-0.381, 100.473],
        [0.33, -90.47],
        [0.57, 127.4],
        [15.28, 44.22],
        [-46.9, 37.75],
        [14.5, 120.5],
        [37.58, -112.67],
        [-38.42, 176.08],
        [12.95, 24.27],
        [2.32, 37.97],
        [58.17, -155.35],
        [13.32, 123.6],
        [11.984, -86.161],
        [20.62, -104.83],
        [51.1, 156.72],
        [43.57, 144.57],
        [13.1, 41.15],
        [-22.33, 171.32],
        [6.37, 125.108],
        [20.017, 145.217],
        [-36.02, -70.58],
        [19.82, -155.47],
        [19.475, -155.608],
        [-0.93, 29.33],
        [13.257, 123.685],
        [-37.28, 176.25],
        [-53.03, 72.6],
        [50.63, -123.5],
        [41.58, -121.57],
        [45.38, 148.83],
        [4.08, 37.42],
        [39.95, 139.73],
        [-17.87, -148.07],
        [15.32, 26.47],
        [-74.35, 164.7],
        [-44.08, -72.88],
        [43.98, 145.7],
        [-0.2, 36.07],
        [-44.67, -73.08],
        [-7.542, 110.442],
        [-7.45, 110.43],
        [-14.45, 168.05],
        [-3.25, 36.75],
        [37.615, 23.336],
        [-19.18, -174.87],
        [57.47, 160.25],
        [-57.78, -26.45],
        [19.48, -102.25],
        [15.33, -61.33],
        [45.28, 106.7],
        [52.5, -128.73],
        [46.82, 151.78],
        [36.699, 24.439],
        [23.507, 141.905],
        [-42.78, -72.43],
        [10.748, -85.153],
        [-16.294, -71.409],
        [34.08, 139.53],
        [-39.927, -72.027],
        [51.93, -176.75],
        [0.133, -78.267],
        [0.13, -78.27],
        [28.317, 140.567],
        [11.826, -85.968],
        [12.422, -86.54],
        [37.6, -25.88],
        [-35.464, -70.8],
        [37.88, -119],
        [38, -119.03],
        [-25.887, -177.188],
        [-58.417, -26.333],
        [-78.5, 163.533],
        [0.45, 127.4],
        [-13.67, 167.67],
        [-18.32, -148.67],
        [12.47, 42.4],
        [14.03, -90.1],
        [-1.38, 29.67],
        [63.98, -19.7],
        [-4.63, 149.35],
        [-6.617, 110.883],
        [-9.308, 148.13],
        [52.453, 158.195],
        [32.1, 139.85],
        [36.88, 138.12],
        [14.601, 144.775],
        [13.37, 41.7],
        [-19.117, 177.983],
        [29.85, 129.87],
        [1.9, 36.27],
        [36.77, 139.5],
        [19.67, -96.75],
        [13.43, 94.25],
        [38.73, 140.73],
        [37.12, 139.97],
        [14.705, 120.4],
        [52.9, -123.73],
        [-8.72, 121.78],
        [-0.83, -91.17],
        [-24.18, -68.25],
        [-24.28, -68.6],
        [0.828, -77.964],
        [12.506, -86.702],
        [12.12, -86.32],
        [49.57, 154.808],
        [38.65, 42.02],
        [-26.48, -68.58],
        [17.15, -62.58],
        [43.722, -121.229],
        [-37.77, 142.5],
        [7.25, 13.67],
        [-39.158, 175.63],
        [-8.97, 33.57],
        [-16.258, -71.753],
        [-6.6, 124.675],
        [-37.417, -12.483],
        [34.37, 139.27],
        [36.92, 138.03],
        [23.075, 142.308],
        [36.8, 139.38],
        [-6.73, 129.5],
        [43.45, 143.03],
        [42.88, 140.63],
        [27.274, 140.882],
        [36.58, 27.18],
        [-15.6, -175.63],
        [36.12, 137.55],
        [42.67, -126.78],
        [42.667, -126.783],
        [4.07, 36.05],
        [44.17, -121.77],
        [-17.45, 168.33],
        [15.833, -105.433],
        [-13.32, 48.48],
        [58.27, -155.16],
        [-19.783, -66.483],
        [37.43, 139.58],
        [60.02, -166.33],
        [0.23, 37.87],
        [-1.408, 29.2],
        [-1.52, 29.25],
        [-14.175, -169.618],
        [-27.12, -68.53],
        [52.7, 98.98],
        [-38.12, 176.5],
        [36.17, 133.33],
        [53.42, -168.13],
        [6.25, 10.5],
        [0.63, 36.08],
        [-20.93, -68.48],
        [-0.904, 36.292],
        [52.077, 157.477],
        [-21.3, -68.18],
        [42.17, 2.53],
        [29.22, 140.8],
        [36.78, 139.5],
        [35.9, 137.48],
        [52.543, 157.335],
        [64, -16.65],
        [19.03, -97.268],
        [26, 57],
        [10.98, -85.473],
        [34.73, 139.38],
        [41.5, 139.37],
        [41.32, 141.08],
        [-41.1, -72.493],
        [52.146, 157.322],
        [58.18, 160.82],
        [52.22, 157.428],
        [-23.35, -67.67],
        [51.88, 157.38],
        [14.381, -90.601],
        [9.593, 125.52],
        [18.13, 145.8],
        [-5.58, 150.52],
        [0.92, 36.18],
        [-52, -70],
        [-43.68, -72.5],
        [39.483, 14.833],
        [-34.608, -70.295],
        [-8.32, 121.708],
        [-20.85, -68.2],
        [36.77, 12.02],
        [-40.77, -71.95],
        [-7.32, 107.73],
        [19.308, -98.7],
        [19.48, -102.25],
        [6.12, 124.892],
        [-4.27, 103.3],
        [15.22, -61.37],
        [-18.05, -69.03],
        [17.147, 120.98],
        [-7.15, 107.37],
        [-63.58, -55.77],
        [55.42, -161.9],
        [55.45, -161.87],
        [-36.42, -69.2],
        [-26.617, -68.15],
        [14.82, -61.17],
        [-7.62, 112.63],
        [-2.82, 102.02],
        [-62.1, -57.93],
        [-6.75, 106.68],
        [1.57, -76.78],
        [-68.85, -90.58],
        [4.914, 96.329],
        [38.47, -28.4],
        [55.42, 167.33],
        [12.495, -86.688],
        [-19.492, -68.65],
        [31.772, -113.498],
        [15.13, 120.35],
        [0.58, -90.75],
        [10, -61],
        [52.113, 157.849],
        [-35.24, -70.57],
        [10.3, -84.366],
        [-72.67, 165.5],
        [55.2, 158.47],
        [57.83, 160.25],
        [52.02, 157.53],
        [10.2, -84.233],
        [13.05, 123.958],
        [-8.68, 120.48],
        [56.85, 159.8],
        [20.87, 95.23],
        [19.023, -98.622],
        [40.017, 45.783],
        [-46.42, 51.63],
        [64.6, -20.58],
        [47.02, 152.12],
        [32.418, -115.305],
        [-46.63, 37.95],
        [-55.92, -28.08],
        [-37.55, -69.62],
        [-37.567, -69.617],
        [-24.18, -68.05],
        [0.038, -78.463],
        [-40.969, -72.264],
        [2.32, -76.4],
        [-23, -67.75],
        [-22.57, -67.87],
        [-40.59, -72.117],
        [-44.3, -72.53],
        [29.4, 57.57],
        [13.83, -61.05],
        [-39.5, -71.7],
        [14.65, -89.35],
        [17.48, -62.95],
        [-0.85, -78.9],
        [-14.37, -71.17],
        [-4.271, 152.203],
        [7.67, 124.5],
        [27.8, 36.17],
        [23.08, 39.78],
        [48.292, 153.25],
        [46.87, -121.758],
        [-5.78, 105.625],
        [-8.62, 120.52],
        [-4.83, 103.92],
        [-29.27, -177.92],
        [47.77, 153.02],
        [-8.125, 114.042],
        [44.073, 145.125],
        [53.15, -168.55],
        [-50.98, -73.7],
        [37.58, -119.05],
        [60.48, -152.75],
        [-38.42, 176.33],
        [-36.45, -70.92],
        [-0.078, -77.656],
        [63.88, -22.5],
        [63.67, -23.33],
        [10.83, -85.324],
        [-8.42, 116.47],
        [-34.933, -70],
        [45.18, 141.25],
        [-5.52, 148.121],
        [-33.658, -78.85],
        [-26.767, -67.717],
        [-17.642, -148.6],
        [55.65, 158.8],
        [12.55, -86.75],
        [54.8, -163.6],
        [-78.25, 163.6],
        [2.28, 125.425],
        [-39.28, 175.57],
        [15.617, 145.567],
        [15.62, 145.57],
        [59.68, -133.32],
        [45.88, 149.83],
        [4.895, -75.322],
        [-35.353, 178.527],
        [-35.745, 178.478],
        [-36.13, 178.05],
        [-36.139, 178.197],
        [-9.13, 33.67],
        [-46.167, -72.667],
        [-8.75, 33.8],
        [17.63, -63.23],
        [38.25, 47.917],
        [-15.78, -71.85],
        [-15.783, -71.85],
        [37.75, 46.433],
        [-22.73, -67.88],
        [-5.414, 148.094],
        [31.58, 130.67],
        [-6.72, 106.73],
        [28.5, -113.75],
        [3.35, 8.52],
        [12.702, -87.004],
        [-0.88, -89.5],
        [14.27, -89.48],
        [-26.27, -80.12],
        [3.35, 8.63],
        [38.65, -28.08],
        [-33.782, -69.897],
        [29.814, -114.384],
        [13.853, -89.63],
        [18.572, -95.169],
        [13.431, -88.272],
        [-21.88, -68.4],
        [-35.989, -70.849],
        [30.468, -115.996],
        [13.736, -89.286],
        [13.623, -88.852],
        [35.13, 132.62],
        [44.38, -121.93],
        [62.22, -144.13],
        [21.45, -104.73],
        [21.45, -104.733],
        [-2.03, -78.33],
        [-8.18, 119.058],
        [-8.68, 120.025],
        [13.853, -89.63],
        [37.257, -113.625],
        [-0.62, -90.33],
        [3.58, 8.75],
        [4.82, -75.37],
        [14.756, -91.552],
        [-0.22, -90.77],
        [14.33, -89.87],
        [17.07, -25.17],
        [16.33, 120.55],
        [36.404, 25.396],
        [0.32, 6.72],
        [16.708, 145.783],
        [16.708, 145.78],
        [0.08, 100.2],
        [48.092, 153.2],
        [52.47, -124.7],
        [-13.612, -172.525],
        [-9.13, 159.82],
        [13.58, 46.12],
        [54.917, 160.633],
        [-65.03, -60.05],
        [13.25, 144.017],
        [57.23, 160.08],
        [1.57, 37.9],
        [52.32, -172.52],
        [52.02, 178.13],
        [-5.12, 104.32],
        [-8.108, 112.92],
        [51.95, 179.62],
        [1.142, 124.73],
        [19.27, -97.47],
        [52.03, -174.93],
        [-6.3, 130],
        [-9.48, 149.13],
        [37.87, -25.78],
        [5.448, 95.658],
        [58.28, 160.87],
        [7.47, 38.55],
        [36.53, 40.85],
        [41.42, -122.2],
        [36.7, 138.52],
        [43.28, 143.08],
        [42.7, 141.33],
        [44.13, 145.17],
        [50.2, 154.98],
        [54.75, -163.97],
        [57.15, 161.083],
        [57.45, 160.37],
        [56.653, 161.36],
        [43.07, -114.43],
        [3.2, 98.52],
        [1.556, 99.255],
        [1.15, 36.23],
        [10.77, 123.23],
        [51.43, -126.3],
        [-8.292, 156.52],
        [3.17, 98.392],
        [48.875, 154.175],
        [22.7, 95.98],
        [14.03, -89.7],
        [-73.43, -126.67],
        [-8.51, 124.148],
        [-7.242, 109.208],
        [44.43, 146.13],
        [31.32, 140.05],
        [19.523, 121.94],
        [64.8, -23.78],
        [58.2, 160.97],
        [58.02, 160.75],
        [58.33, -154.68],
        [0.552, -77.58],
        [-24.4, -68.25],
        [18.78, -110.95],
        [8.43, 39.35],
        [-38.97, -71.52],
        [1.108, 124.725],
        [0.686, 99.539],
        [13.18, 41.725],
        [2.12, -76.58],
        [16.05, -61.67],
        [16.72, -62.18],
        [13.33, -61.18],
        [2.63, 36.6],
        [44.1, -121.77],
        [-18.533, -113.417],
        [-18.175, -113.35],
        [-17.436, -113.206],
        [44.5, 135.5],
        [57.43, -130.68],
        [58.133, 160.817],
        [61.3, -152.25],
        [43.472, -120.754],
        [47.6, 152.92],
        [-2.38, 147.35],
        [12.15, -61.67],
        [46.2, -122.18],
        [63.45, -162.12],
        [-38.72, 77.53],
        [39.375, -119.72],
        [58.43, -154.4],
        [55.929, -160.002],
        [55.954, -159.954],
        [38.789, 15.213],
        [-67.4, 164.83],
        [14.4, -89.78],
        [-8.792, 121.77],
        [-0.538, -77.626],
        [-2.414, 101.728],
        [-7.38, 110.058],
        [31.768, 130.594],
        [-7.3, 109.992],
        [35.37, -111.5],
        [-5.25, 104.27],
        [38.92, 42.82],
        [20.13, 145.1],
        [-13.8, 167.47],
        [-1.175, 36.35],
        [29.53, 129.72],
        [-14.23, -169.454],
        [14.002, 120.993],
        [13.435, -88.532],
        [15.13, -92.112],
        [-17.72, -69.77],
        [28.6, 61.6],
        [-15.367, -174.233],
        [22.667, 5],
        [14.433, -89.9],
        [15.7, 41.742],
        [15.034, -91.903],
        [36.9, 139.78],
        [-76.28, -112.08],
        [51.87, -178.02],
        [-6.442, 155.608],
        [-7.208, 108.07],
        [0.079, 99.98],
        [-0.978, 100.679],
        [-8.25, 118],
        [-6.77, 107.95],
        [52.833, -169.767],
        [51.88, -178.13],
        [-0.433, 100.317],
        [-36.321, 178.028],
        [-6.77, 107.6],
        [49.35, 154.7],
        [-7.792, 123.579],
        [1.78, 127.792],
        [48.17, 99.7],
        [13.28, 41.07],
        [36.57, 137.6],
        [36.1, 138.3],
        [25.17, 121.52],
        [54.53, 159.8],
        [-38.82, 176],
        [-16.82, -179.97],
        [-4.117, 152.2],
        [-17.57, -148.85],
        [13.494, -88.502],
        [14.156, -90.407],
        [12.602, -86.845],
        [-7.37, 110.4],
        [4.77, 96.808],
        [39.33, 43.83],
        [28.271, -16.641],
        [25.32, 98.47],
        [-7.942, 112.95],
        [10.673, -85.015],
        [-6.92, 129.125],
        [7.42, 35.43],
        [38.73, -27.32],
        [57.2, 159.833],
        [65.88, -16.83],
        [-53.93, 5.5],
        [62.27, -17.6],
        [-59.45, -27.37],
        [42.5, 82.5],
        [44.358, 146.27],
        [-16.755, -70.595],
        [0.65, 127.4],
        [0.07, 127.42],
        [13.467, -88.433],
        [13.27, -87.63],
        [19.833, 2.833],
        [-10.38, 165.8],
        [63.78, -19.57],
        [-34.814, -70.352],
        [-27.2, -68.55],
        [-27.2, -68.55],
        [57.4, 160.1],
        [66.3, -17.1],
        [55.25, -133.3],
        [34.52, 139.28],
        [2.58, 98.83],
        [1.625, 127.675],
        [1.22, 127.43],
        [17.683, 8.5],
        [-19.75, -175.07],
        [21.333, 16.333],
        [43.42, 142.68],
        [55.83, 160.33],
        [-38.31, -71.645],
        [-38.31, -71.645],
        [4.67, -75.33],
        [14.612, -91.189],
        [52.63, 157.58],
        [19.108, -99.758],
        [4.75, 9.667],
        [1.23, 124.83],
        [-75.8, -115.83],
        [-39.13, 175.642],
        [1.52, 125.2],
        [-5.83, 154.93],
        [63.92, -19.17],
        [30.48, 140.32],
        [14.93, 108],
        [27.392, -111.858],
        [5.92, 37.57],
        [21.03, 16.45],
        [40.47, 140.92],
        [-18.75, 169.23],
        [27.47, -112.591],
        [45.93, 149.92],
        [58.23, -155.08],
        [-20.514, -29.331],
        [-37.092, -12.28],
        [-37.733, -70.9],
        [64.43, -18.13],
        [-37.142, -70.03],
        [-41.157, -71.885],
        [55.12, -128.9],
        [-2.32, 28.75],
        [39.733, 46.017],
        [33.28, 131.43],
        [-23.83, -67.95],
        [-1.78, -78.613],
        [8.158, 39.13],
        [40.68, -121.55],
        [52.25, 157.6],
        [64.73, -17.92],
        [-1.467, -78.442],
        [51.5, 102.5],
        [-33.4, -69.8],
        [42.9, 89.25],
        [10.03, -83.77],
        [-14.295, -170.7],
        [-17.025, -70.358],
        [59.367, -130.583],
        [-24.05, -66.483],
        [57.32, 159.97],
        [40.78, -121.6],
        [37.02, -117.45],
        [-16.355, -70.903],
        [55.755, 160.527],
        [56.18, 117.47],
        [57.75, -156.37],
        [36.38, -113.13],
        [57.7, 160.58],
        [57.83, -156.52],
        [56.08, 158.38],
        [-5.05, 151.33],
        [53.07, -169.77],
        [37.5, 130.87],
        [52.33, 98],
        [-5.589, 147.875],
        [18.17, 33.83],
        [-7.18, 110.33],
        [9.82, -104.3],
        [21.83, 121.18],
        [20.93, 134.75],
        [-20.85, -175.53],
        [39.25, 45.167],
        [-24.8, -177.017],
        [-21.15, -175.75],
        [-18.325, -174.365],
        [26.133, 144.483],
        [21, 142.9],
        [20.3, 143.2],
        [31.75, -124.25],
        [10.733, -103.583],
        [9.833, -104.3],
        [-8.267, -107.95],
        [-53.9, -140.3],
        [-55.967, -143.167],
        [-25.1, -68.267],
        [85.583, 85],
        [42.45, 44.25],
        [7, -21.83],
        [8.62, 38.95],
        [-0.58, -15.83],
        [-73.45, 164.58],
        [8.7, 39.63],
        [-76.83, 163],
        [8.07, 39.07],
        [7.95, 38.93],
        [-3.5, -24.5],
        [4.2, -21.45],
        [41.55, 43.6],
        [5.65, 37.67],
        [-33.62, -76.83],
        [88.27, -65.6],
        [38.75, -38.08],
        [39.95, -25.83],
        [37.78, -25.67],
        [23.58, -163.83],
        [28, -115],
        [26.13, 144.48],
        [-4.75, 150.85],
        [55.92, 161.75],
        [21.75, -158.75],
        [21, 142.9],
        [20.33, 121.75],
        [-4.311, 146.256],
        [31.75, -124.25],
        [46.47, 151.28],
        [-8.63, 33.57],
        [55.93, -160],
        [35.85, 91.7],
        [52.88, 158.3],
        [46.1, 150.5],
        [45.03, 147.208],
        [-16.992, 168.592],
        [20.3, 143.2],
        [51.6, 156.55],
        [57.87, -155.42],
        [11.75, 80.75],
        [12.25, 45],
        [52.92, 158.52],
        [-3.03, 147.78],
        [28.17, 60.67],
        [24, 121.83],
        [32.658, 36.425],
        [19.17, 132.25],
        [33.308, 36.925],
        [36.67, 37],
        [52.57, 157.02],
        [52.33, 157.33],
        [-29.18, -177.87],
        [-14.23, -169.07],
        [25.42, 122.33],
        [-21.07, -175.33],
        [52, -173.5],
        [-33.622, -78.78],
        [16.13, -61.28],
        [66, -27.75],
        [49, -34.5],
        [48.08, 153.33],
        [-5.2, 148.57],
        [33.15, 36.258],
        [-21.38, -175.65],
        [3.97, 124.17],
        [56.82, 158.95],
        [-53.9, -140.3],
        [-25.78, 168.63],
        [-8.92, 158.03],
        [32.75, 130.3],
        [-13.935, -171.72],
        [47.12, 152.23],
        [47.52, 152.8],
        [56.105, 160.47],
        [42.53, 140.83],
        [13.419, -88.471],
        [16.1, -86.9],
        [27.08, 37.25],
        [54.5, 159.97],
        [34.25, 67.97],
        [8.583, -80.167],
        [56.17, -159.38],
        [56.52, 159.53],
        [50.55, 155.97],
        [63.43, -20.28],
        [40.821, 14.426],
        [9.83, 109.05],
        [-9.2, 149.07],
        [-49.358, -73.28],
        [-39.42, -71.93],
        [52.68, 158.3],
        [-1.47, 29.492],
        [-42.07, -71.65],
        [-31.85, -179.183],
        [20.92, 17.28],
        [58.37, 160.62],
        [53.13, -168.68],
        [38.404, 14.962],
        [42.6, 11.93],
        [-77.17, -126.88],
        [-9.57, 149.075],
        [-13.3, -176.17],
        [-5.53, 150.9],
        [42.88, -113.22],
        [36.4, 137.5],
        [15.307, -61.305],
        [25.05, 17.55],
        [-7.208, 107.63],
        [52.33, -120.57],
        [45.88, -122.08],
        [50.17, 6.85],
        [-15.1, -173.75],
        [54.52, -164.65],
        [-35.75, 174.27],
        [-37.52, 177.18],
        [-7.808, 111.758],
        [0.02, -91.35],
        [62, -144.02],
        [48.72, 126.12],
        [-7.125, 128.675],
        [41.33, 128],
        [36.22, 137.58],
        [36.63, 27.1],
        [10.58, 41.042],
        [57.02, -157.18],
        [-43.5, -72.8],
        [-43.42, -72.83],
        [17.05, 42.83],
        [-19.52, 169.425],
        [-41.755, -72.396],
        [-7.05, 145.858],
        [44.43, -110.67],
        [-7.53, 123.95],
        [14.98, -87.98],
        [-4.92, 146.75],
        [42.83, 140.82],
        [-66.42, 162.45],
        [-17.18, -70.2],
        [-21.5, -67.5],
        [52.63, -170.63],
        [13.33, -87.63],
        [38.15, 140.45],
        [56.88, 159.95],
        [11.73, -85.82],
        [53.905, 158.385],
        [53.905, 158.385],
        [46.925, 151.95],
        [-56.3, -27.57],
        [26.18, 122.458],
        [51.57, 157.323],
        [53.59, 159.147],
        [55.862, 160.603],
        [15.05, 42.18],
        [14.02, 42.75],
        [34.8, -108]
    ]
}, function (t, e) {
    function i(t, e, i) {
        var r = n(e, 2),
            s = r[0],
            o = r[1],
            a = n(i, 2),
            l = a[0],
            u = a[1];
        return (t - s) * (u - l) / (o - s) + l
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t(t, e) {
            var i = [],
                n = !0,
                r = !1,
                s = void 0;
            try {
                for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0) {}
            } catch (l) {
                r = !0, s = l
            } finally {
                try {
                    !n && a["return"] && a["return"]()
                } finally {
                    if (r) {
                        throw s
                    }
                }
            }
            return i
        }
        return function (e, i) {
            if (Array.isArray(e)) {
                return e
            }
            if (Symbol.iterator in Object(e)) {
                return t(e, i)
            }
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    e["default"] = i
}, function (t, e) {
    function i(t, e) {
        return e = e || window.document, e.getElementById(t)
    }

    function n(t) {
        return document.getElementsByClassName(t)
    }

    function r(t) {
        return t * Math.PI / 180
    }

    function s(t) {
        return 2 * atan(17.5 / t)
    }

    function o(t, e) {
        return Math.abs(Math.floor((Math.random() * (t - e) + e) / 2))
    }

    function a(t) {
        var e = navigator.userAgent.match(/mobile/i),
            i = "undefined" != typeof t && e ? t.targetTouches[0] : null;
        return t = "undefined" == typeof t ? null : t, e ? {
            eStart: "touchstart",
            eMove: "touchmove",
            eOut: "touchleave",
            eEnd: "touchend",
            eOver: "touchmove",
            eT: i
        } : {
            eStart: "mousedown",
            eMove: "mousemove",
            eOut: "mouseout",
            eEnd: "mouseup",
            eOver: "mouseover",
            eT: t
        }
    }

    function l(t, e) {
        var i = (new THREE.Geometry).fromBufferGeometry(t.geometry);
        return i.dynamic = !0, i.vertices[3].y += 0.5, i.verticesNeedUpdate = !0, i.groupsNeedUpdate = !0, i.elementsNeedUpdate = !0, i.colorsNeedUpdate = !0, i.computeFaceNormals(!0), i.dispose(), (new THREE.BufferGeometry).fromGeometry(i)
    }

    function u(t, e, i) {
        var n = (new THREE.Geometry).fromBufferGeometry(t.geometry),
            r = 0;
        e.length < i && (r = 1), n.colorsNeedUpdate = !0;
        for (var s = 0; s < e.length; s++) {
            for (var o = 0, a = 0; a < n.faces.length; a++) {
                a == e[s][o] && (n.faces[a].materialIndex = s + r, o++)
            }
        }
        return n
    }

    function c(t, e, i, n, r, s) {
        s && (e < -60 && (e = 0), i.rotation.x -= e / n), r && (t < -60 && (t = 0), i.rotation.y -= t / n)
    }

    function h(t, e, i, n, r, s, o, a, l, u, c, h, f, p) {
        var m = n,
            v = m.children[0];
        this.isClicked = !1, this.isPendulum = !0, this.posDone = !1, this.scaleDone = !1, this.rotDone = !1;
        var g = this;
        "null" == r.value && (this.posDone = !0), "null" == s.value && (this.scaleDone = !0), "null" == o.value && (this.rotDone = !0), l || (this.isClicked = !0), p && (this.eventName = n.name, "" == this.eventName && (this.eventName = n.id), this.event = new CustomEvent(this.eventName, {
            bubbles: !0,
            cancelable: !0
        })), r.frameRate;
        this.durPos = r.duration + 1, this.durScale = s.duration + 1, this.durRot = o.duration + 1, this.counterScale = 0;
        var y = !1,
            _ = null,
            w = null;
        this.lastCounterPos = 0;
        var b = 0,
            x = !1;
        v.setEulerOrder = "YXZ", this.syncPlaybackToStartTime = function (t) {
            _ = t
        }, this.controlAnim = function (t) {
            x = t
        }, this.animRun = function () {
            var t = +new Date;
            _ || (_ = t);
            var a = t - _;
            if (x) {
                return !1
            }
            if (this.counterPos = Math.round(a / 1000 * r.frameRate) % r.duration, r.duration && (this.counterPos <= this.durPos && this.counterPos > 0 && (m.position.set(r[String(this.counterPos)][0], r[String(this.counterPos)][1], r[String(this.counterPos)][2]), this.lastCounterPos !== this.counterPos && (b++, w = t)), this.lastCounterPos = this.counterPos, g.isPendulum && c[0] && !c[1] ? this.counterPos-- : this.counterPos++), s.duration && (this.counterScale = Math.round(a / 1000 * s.frameRate) % s.duration, this.counterScale <= this.durScale && this.counterScale > 0 && v.scale.set(s[String(this.counterScale)][0], s[String(this.counterScale)][1], s[String(this.counterScale)][2]), g.isPendulumisPendulum && c[0] && !c[1] ? this.counterScale-- : this.counterScale++), o.duration && (this.counterRot = Math.round(a / 1000 * o.frameRate) % o.duration, this.counterRot <= this.durRot && this.counterRot > 0 && v.rotation.set(o[String(this.counterRot)][1], o[String(this.counterRot)][0], o[String(this.counterRot)][2]), g.isPendulum && c[0] && !c[1] ? this.counterRot-- : this.counterRot++), c[1]) {
                var l = !1,
                    d = !0;
                this.counterPos == c[1] && (g.isClicked = !1), this.counterScale == c[1] && (g.isClicked = !1), this.counterRot == c[1] && (g.isClicked = !1), !g.isClicked && l, l && i.dispatchEvent(blueEvent), d && i.dispatchEvent(redEvent)
            }
            this.counterPos == this.durPos - 1 && (this.posDone = !0, u || (g.isClicked = !1), c[0] || f || m.position.set(r[String(0)][0], r[String(1)][1], r[String(0)][2]), !g.isPendulum && c[0] ? this.counterPos = this.durPos : this.counterPos = 0, y = !0), 0 == this.counterPos && 0 == this.counterScale && 0 == this.counterRot && (u || (g.isClicked = !1)), this.counterPos == this.durPos && this.counterScale == this.durScale && this.counterRot == this.durRot && h && (e.remove(m), m = n), this.counterScale == this.durScale && (this.scaleDone = !0, u || (g.isClicked = !1), c[0] || v.scale.set(s[String(0)][0], s[String(0)][1], s[String(0)][2]), !g.isPendulum && c[0] ? this.counterScale = this.durScale : this.counterScale = 0, y = !0), this.counterRot == this.durRot - 1 && (this.rotDone = !0, u || (g.isClicked = !1), c[0] || f || v.rotation.set(o[String(0)][1], o[String(0)][0], o[String(0)][2]), !g.isPendulum && c[0] ? this.counterRot = this.durRot : this.counterRot = 0, y = !0), this.posDone && this.scaleDone && this.rotDone && p && (i.dispatchEvent(this.event), "null" == r.value ? this.posDone = !0 : this.posDone = !1, "null" == s.value ? this.scaleDone = !0 : this.scaleDone = !1, "null" == o.value ? this.rotDone = !0 : this.rotDone = !1)
        }, l || this.animRun()
    }

    function f(t, e, i, n, r) {
        function s() {
            return i.duration ? (this.counterPos < this.durPos - 1 ? o.position.set(i[String(this.counterPos)][0], i[String(this.counterPos)][1], i[String(this.counterPos)][2]) : l = !0, this.counterPos++) : l = !0, n.duration ? (this.counterScale < this.durScale - 1 ? a.scale.set(n[String(this.counterScale)][0], n[String(this.counterScale)][1], n[String(this.counterScale)][2]) : u = !0, this.counterScale++) : u = !0, r.duration ? (this.counterRot < this.durRot - 1 ? a.rotation.set(r[String(this.counterRot)][1], r[String(this.counterRot)][0], r[String(this.counterRot)][2]) : c = !0, this.counterRot++) : c = !0, l && u && c ? void t.remove(e) : void requestAnimationFrame(s)
        }
        var o = e,
            a = o.children[0];
        i.frameRate;
        this.durPos = i.duration + 1, this.durScale = n.duration + 1, this.durRot = r.duration + 1, this.counterPos = 0, this.counterRot = 0, this.counterScale = 0;
        var l = !1,
            u = !1,
            c = !1;
        a.setEulerOrder = "YXZ", t.add(e), s()
    }

    function d(t, e, i, n, r) {
        var s = new THREE.Raycaster,
            o = new THREE.Vector2;
        o.x = t.clientX / window.innerWidth * 2 - 1, o.y = 2 * -(t.clientY / window.innerHeight) + 1, s.setFromCamera(o, i);
        var a = s.intersectObjects(r.children, !0),
            l = a[0];
        if (l) {
            var u = l.object.name;
            if ("Object3D" == e.type) {
                var c = u.match(e.name);
                u = c[0] ? c[0] : ""
            }
            u === e.name && (n.isPendulum = !n.isPendulum, n.isClicked = !0)
        }
    }

    function p(t) {
        for (var e = 0; e < t.length; e++) {
            t[e].isClicked && t[e].animRun()
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.id = i, e.cls = n, e.deg2rad = r, e.FL2FOV = s, e.getRandomNumber = o, e.eType = a, e.pointLevelAnim = l, e.addMaterialToSelection = u, e.rotateScene = c, e.triggerAnim = h, e.triggerCloneAnim = f, e.onRayMouseMove = d, e.renderAnims = p
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(142),
        s = n(r),
        o = ["Chrome", "Chromium", "Firefox"],
        a = !0,
        l = {
            webGlRenderer: {
                alpha: !0,
                antialias: o.indexOf(s["default"].browserName) >= 0,
                logarithmicDepthBuffer: !0
            },
            overrideRenderer: function (t) {
                return a && (t.context.getShaderInfoLog = function () {
                    return ""
                }), t
            }
        };
    e["default"] = l
}, function (t, e) {
    void 0 === Date.now && (Date.now = function () {
        return (new Date).valueOf()
    });
    var i = i || function () {
        var t = [];
        return {
            REVISION: "8",
            getAll: function () {
                return t
            },
            removeAll: function () {
                t = []
            },
            add: function (e) {
                t.push(e)
            },
            remove: function (e) {
                var i = t.indexOf(e);
                i !== -1 && t.splice(i, 1)
            },
            update: function (e) {
                if (0 === t.length) {
                    return !1
                }
                var i = 0,
                    n = t.length;
                for (e = void 0 !== e ? e : Date.now(); i < n;) {
                    t[i].update(e) ? i++ : (t.splice(i, 1), n--)
                }
                return !0
            }
        }
    }();
    i.Tween = function (t) {
        var e = t,
            n = {},
            r = {},
            s = 1000,
            o = 0,
            a = null,
            l = i.Easing.Linear.None,
            u = i.Interpolation.Linear,
            c = [],
            h = null,
            f = !1,
            d = null,
            p = null;
        this.to = function (t, e) {
            return void 0 !== e && (s = e), r = t, this
        }, this.start = function (t) {
            i.add(this), f = !1, a = void 0 !== t ? t : Date.now(), a += o;
            for (var s in r) {
                if (null !== e[s] && s in e) {
                    if (r[s] instanceof Array) {
                        if (0 === r[s].length) {
                            continue
                        }
                        r[s] = [e[s]].concat(r[s])
                    }
                    n[s] = e[s]
                }
            }
            return this
        }, this.stop = function () {
            return i.remove(this), this
        }, this.delay = function (t) {
            return o = t, this
        }, this.easing = function (t) {
            return l = t, this
        }, this.interpolation = function (t) {
            return u = t, this
        }, this.chain = function () {
            return c = arguments, this
        }, this.onStart = function (t) {
            return h = t, this
        }, this.onUpdate = function (t) {
            return d = t, this
        }, this.onComplete = function (t) {
            return p = t, this
        }, this.update = function (t) {
            if (t < a) {
                return !0
            }
            f === !1 && (null !== h && h.call(e), f = !0);
            var i = (t - a) / s;
            i = i > 1 ? 1 : i;
            var o = l(i);
            for (var m in n) {
                var v = n[m],
                    g = r[m];
                g instanceof Array ? e[m] = u(g, o) : e[m] = v + (g - v) * o
            }
            if (null !== d && d.call(e, o), 1 == i) {
                null !== p && p.call(e);
                for (var y = 0, _ = c.length; y < _; y++) {
                    c[y].start(t)
                }
                return !1
            }
            return !0
        }
    }, i.Easing = {
        Linear: {
            None: function (t) {
                return t
            }
        },
        Quadratic: {
            In: function (t) {
                return t * t
            },
            Out: function (t) {
                return t * (2 - t)
            },
            InOut: function (t) {
                return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)
            }
        },
        Cubic: {
            In: function (t) {
                return t * t * t
            },
            Out: function (t) {
                return --t * t * t + 1
            },
            InOut: function (t) {
                return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)
            }
        },
        Quartic: {
            In: function (t) {
                return t * t * t * t
            },
            Out: function (t) {
                return 1 - --t * t * t * t
            },
            InOut: function (t) {
                return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
            }
        },
        Quintic: {
            In: function (t) {
                return t * t * t * t * t
            },
            Out: function (t) {
                return --t * t * t * t * t + 1
            },
            InOut: function (t) {
                return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)
            }
        },
        Sinusoidal: {
            In: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Out: function (t) {
                return Math.sin(t * Math.PI / 2)
            },
            InOut: function (t) {
                return 0.5 * (1 - Math.cos(Math.PI * t))
            }
        },
        Exponential: {
            In: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            Out: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            InOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2)
            }
        },
        Circular: {
            In: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Out: function (t) {
                return Math.sqrt(1 - --t * t)
            },
            InOut: function (t) {
                return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }
        },
        Elastic: {
            In: function (t) {
                var e, i = 0.1,
                    n = 0.4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
            },
            Out: function (t) {
                var e, i = 0.1,
                    n = 0.4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            InOut: function (t) {
                var e, i = 0.1,
                    n = 0.4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -0.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * 0.5 + 1)
            }
        },
        Back: {
            In: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            Out: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            },
            InOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? 0.5 * (t * t * ((e + 1) * t - e)) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }
        },
        Bounce: {
            In: function (t) {
                return 1 - i.Easing.Bounce.Out(1 - t)
            },
            Out: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
            },
            InOut: function (t) {
                return t < 0.5 ? 0.5 * i.Easing.Bounce.In(2 * t) : 0.5 * i.Easing.Bounce.Out(2 * t - 1) + 0.5
            }
        }
    }, i.Interpolation = {
        Linear: function (t, e) {
            var n = t.length - 1,
                r = n * e,
                s = Math.floor(r),
                o = i.Interpolation.Utils.Linear;
            return e < 0 ? o(t[0], t[1], r) : e > 1 ? o(t[n], t[n - 1], n - r) : o(t[s], t[s + 1 > n ? n : s + 1], r - s)
        },
        Bezier: function (t, e) {
            var n, r = 0,
                s = t.length - 1,
                o = Math.pow,
                a = i.Interpolation.Utils.Bernstein;
            for (n = 0; n <= s; n++) {
                r += o(1 - e, s - n) * o(e, n) * t[n] * a(s, n)
            }
            return r
        },
        CatmullRom: function (t, e) {
            var n = t.length - 1,
                r = n * e,
                s = Math.floor(r),
                o = i.Interpolation.Utils.CatmullRom;
            return t[0] === t[n] ? (e < 0 && (s = Math.floor(r = n * (1 + e))), o(t[(s - 1 + n) % n], t[s], t[(s + 1) % n], t[(s + 2) % n], r - s)) : e < 0 ? t[0] - (o(t[0], t[0], t[1], t[1], -r) - t[0]) : e > 1 ? t[n] - (o(t[n], t[n], t[n - 1], t[n - 1], r - n) - t[n]) : o(t[s ? s - 1 : 0], t[s], t[n < s + 1 ? n : s + 1], t[n < s + 2 ? n : s + 2], r - s)
        },
        Utils: {
            Linear: function (t, e, i) {
                return (e - t) * i + t
            },
            Bernstein: function (t, e) {
                var n = i.Interpolation.Utils.Factorial;
                return n(t) / n(e) / n(t - e)
            },
            Factorial: function () {
                var t = [1];
                return function (e) {
                    var i, n = 1;
                    if (t[e]) {
                        return t[e]
                    }
                    for (i = e; i > 1; i--) {
                        n *= i
                    }
                    return t[e] = n
                }
            }(),
            CatmullRom: function (t, e, i, n, r) {
                var s = 0.5 * (i - t),
                    o = 0.5 * (n - e),
                    a = r * r,
                    l = r * a;
                return (2 * e - 2 * i + s + o) * l + (-3 * e + 3 * i - 2 * s - o) * a + s * r + e
            }
        }
    }, t.exports = i
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(181),
        h = n(c),
        f = i(186),
        d = i(182),
        p = r(d),
        m = function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.video = this.canvas.querySelector("video"), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copy2 = Array.from(this.canvas.getElementsByClassName("copy2")), this.dataUi = document.querySelector(".dataUiParent"), this.veils = Array.from(this.canvas.getElementsByClassName("veil")), this.paused = !0, this.animationPause = !1, this.setDataProgress = !1
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), (0, p["default"])(this.video)
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "init",
                value: function () {
                    var t = this,
                        e = new u.TimelineLite({
                            paused: !0
                        });
                    e.add(function () {
                        h.hasTouch() || t.video.play()
                    }), e.to(this.dataUi, 2, {
                        opacity: 0,
                        ease: u.Power2.easeOut
                    }), e.to(this.dataUi, 0, {
                        display: "none"
                    }).to(this.veils[0], 2, {
                        opacity: 1,
                        ease: u.Power2.easeOut
                    }, 0).staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2, 2).staggerTo(this.copy1.reverse(), 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2, 8).to(this.veils[1], 2, {
                        opacity: 1,
                        ease: u.Power2.easeOut
                    }, 10).staggerTo(this.copy2, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2, 11), e.add(function () {
                        h.hasTouch() || t.video.pause()
                    }), this.triggers = [{
                        atProgress: 0,
                        duration: 1,
                        timeline: e
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1, h.hasTouch() || (this.paused = !1, this.video.play())
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== e && (e >= 0 && !this.setDataProgress && (this.setDataProgress = !0, (0, f.renderProgress)()), e > 0.6 && !this.animationPause ? (this.animationPause = !0, this.video.pause()) : 0 < e && e < 0.6 && this.animationPause && (this.animationPause = !1, this.video.play()), this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            l = (0, a["default"])(((o ? e : t) - n) / (r / 1.4), 0, 1);
                        s.progress(l)
                    }), this.progress = e)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = m
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(178),
        o = n(s),
        a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(174),
        u = function () {
            function t(e) {
                var i = e.selector;
                r(this, t), this.canvas = document.querySelector(i), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.paused = !0
            }
            return a(t, [{
                key: "load",
                value: function () {
                    return this.init(), Promise.resolve()
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "init",
                value: function () {
                    var t = new l.TimelineLite({
                        paused: !0
                    });
                    t.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: 0,
                        ease: l.Power2.easeOut
                    }, 0.2), this.triggers = [{
                        atProgress: 0.25,
                        duration: 0.5,
                        timeline: t,
                        useFullProgress: !0
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== e && (this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            a = i.useFullProgress,
                            l = (0, o["default"])(((a ? e : t) - n) / (r / 1.4), 0, 1);
                        s.progress(l)
                    }), this.progress = e)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = u
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) {
                i[e] = t[e]
            }
            return i
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function a(t, e, i, n, r) {
        var s = t.querySelector(e, i),
            o = t.querySelector(n),
            a = new p.TimelineLite(d({
                paused: !0
            }, r)),
            l = p.Power2.easeOut;
        return a.to(s, 2, {
            opacity: 0,
            y: "-10px",
            ease: l
        }, 0), a.to(o, 2, {
            opacity: 1,
            ease: l
        }, 0), a.addLabel("lockEvent"), a.to(s, 0, {
            display: "none"
        }), a.addLabel("assetFocused"), w.getStaggeredTimeline(a, [w.getCopyBlockElements(t, ".levels--title--caption--intro")], {
            duration: 1,
            stagger: 0,
            fadeLast: !1
        }), a.addLabel("navStart"), a
    }

    function l(t) {
        var e = (3 - t) / 3,
            i = parseFloat(("" + e).slice(0, 8), 10);
        return i
    }

    function u(t, e, i) {
        return Math.round(t + (e - t) * i)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = i(178),
        h = r(c),
        f = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) {
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
            }
            return t
        },
        p = i(174),
        m = i(188),
        v = n(m),
        g = i(199),
        y = r(g),
        _ = i(180),
        w = n(_),
        b = i(181),
        x = n(b),
        T = i(193),
        P = n(T),
        S = i(207),
        k = i(208),
        M = (r(k), i(215), i(222)),
        E = r(M),
        O = i(194),
        A = r(O),
        R = i(182),
        C = r(R),
        L = "undefined" == typeof Promise ? i(183).Promise : Promise,
        j = function () {
            function t(e) {
                var i = this,
                    n = e.selector;
                o(this, t), this.timeOutFunction = function (t) {
                    i.annotationContainers.map(function (t) {
                        return t.classList.remove("show")
                    }), i.scene.remove(i.levelSwitch[i.globalLevelTracker][2]), i.globalLevelTracker = t, i.level = i.levelSwitch[i.globalLevelTracker], i.scene.add(i.levelSwitch[i.globalLevelTracker][2]), i.levelSwitch[t][1].rotation.set(0, 0, 0), i.levelSwitch[t][1].children[0].rotation.set(0, 0, 0), null !== typeof i.timeout && window.clearTimeout(i.timeout), i.timeout = window.setTimeout(function () {
                        i.objNeedsRender = !0, i.handleFade(t), i.fadedOut = !0, i.titles[t].classList.add("fade-in"), i.buttons[t].classList.add("fade-in"), i.canvasEl.dispatchEvent(i["level" + t + "Event"])
                    }, i.sequenceTimesMs[t])
                }, this.wheelListener = function (t) {
                    t.deltaY < -20 && !i.modalActive && i.canMove && i.state <= 2 && i.previousState(), t.deltaY > 20 && !i.modalActive && i.canMove && i.state >= 0 && i.nextState()
                }, this.timeout = null, this.isReady = !1, this.shouldRender = !1, this.canvas = document.querySelector(n), this.progress = null, this.triggers = [], this.state = 2, this.tween = null, this.scene = new THREE.Scene, this.animTriggers = [], this.paused = !0, this.fadedOut = !1, this.renderer = new THREE.WebGLRenderer(A["default"].webGlRenderer), A["default"].overrideRenderer(this.renderer), this.levels, this.buttons = document.querySelectorAll(".levels--button--container button"), this.titles = document.querySelectorAll(".levels--titles--container section"), this.closeModals = document.querySelectorAll(".levels--modal--close"), this.mouseDown = !1, this.mouseUp = !1, this.level2AnnoOn = !1, this.level1AnnoOn = !1, this.level0AnnoOn = !1, this.mouseX = 0, this.mouseY = 0, this.listener = !1, this.canMove = !0, this.canLock = !0, this.modalActive = !1, this.globalLevelTracker = 2, this.annotationContainers = [], this.objNeedsRender = !1, this.sequenceTimesMs = [5400, 5500, 3500], this.intersected = null, this.opacityClass = document.querySelector(".levels--opacity--anim--js"), this.mobile = navigator.userAgent.match(/mobile/i), this.mouseDownEvent = new CustomEvent("mouseDownCustom", {
                    bubbles: !0,
                    cancelable: !0
                }), this.mouseUpEvent = new CustomEvent("mouseUpCustom", {
                    bubbles: !0,
                    cancelable: !0
                }), this.level0Event = new CustomEvent("level0", {
                    bubbles: !0,
                    cancelable: !0
                }), this.level1Event = new CustomEvent("level1", {
                    bubbles: !0,
                    cancelable: !0
                }), this.level2Event = new CustomEvent("level2", {
                    bubbles: !0,
                    cancelable: !0
                }), Array.from(this.buttons).map(function (t) {
                    t.addEventListener("click", function (t) {
                        i.modalActive = !0
                    })
                }), Array.from(this.closeModals).map(function (t) {
                    t.addEventListener("click", function (t) {
                        i.modalActive = !1
                    })
                }), this.videos = this.canvas.querySelectorAll(".transition-video"), Array.from(this.videos).forEach(function (t, e) {
                    t.addEventListener("ended", function (t) {
                        i.canMove = !0
                    }), t.addEventListener("play", i.timeOutFunction.bind(i, e))
                })
            }
            return f(t, [{
                key: "load",
                value: function () {
                    var t = this,
                        e = Array.from(this.videos).map(function (t) {
                            t.preload = "auto";
                            var e = (0, C["default"])(t);
                            return e
                        }),
                        i = [].concat(s(e), [new L(function (e, i) {
                            t.levelsLoader = new THREE.OBMLoader, t.levelsLoader.load("./assets/models/le.obm", function (i) {
                                t.levels = new t.levelsObj(i, t), t.init(), e()
                            }, function () {}, i)
                        })]);
                    return this.loader = new E["default"]({
                        promises: i,
                        containerSelector: "#olyContainer",
                        progressSelector: ".levels--progress",
                    }), Promise.all(i).then(function () {
                        t.isReady = !0
                    })
                }
            }, {
                key: "handleSwitch",
                value: function (t) {
                    this.globalLevelTracker != t && (this.annotationContainers.map(function (t) {
                        return t.classList.remove("show")
                    }), this.scene.remove(this.levelSwitch[this.globalLevelTracker][2]), this.globalLevelTracker = t), this.level = this.levelSwitch[this.globalLevelTracker], this.scene.add(this.levelSwitch[this.globalLevelTracker][2]), this.levelSwitch[t][1].rotation.set(0, 0, 0), this.levelSwitch[t][1].children[0].rotation.set(0, 0, 0), this.canvasEl.dispatchEvent(this["level" + t + "Event"])
                }
            }, {
                key: "handleFade",
                value: function (t) {
                    document.querySelector(".levels--title--asset").classList.add("fade-out"), document.querySelector("#level" + t + "-sequence-container").classList.add("fade-out"), document.querySelector(".levels--object--container").classList.add("fade-in")
                }
            }, {
                key: "hideTitle",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state;
                    this.titles[t].classList.remove("fade-in")
                }
            }, {
                key: "hideAllTitles",
                value: function () {
                    Array.from(this.titles).forEach(function (t) {
                        t.classList.remove("fade-in")
                    })
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "levelsObj",
                value: function (t, e) {
                    var i = this;
                    this.matMagma = new THREE.MeshStandardMaterial({
                        side: THREE.DoubleSide,
                        color: "rgb(255,187,61)",
                        emissive: "rgb(255,95,60)",
                        emissiveIntensity: 2.5,
                        roughness: 0.9,
                        metalness: 0.2,
                        transparent: !0,
                        opacity: 1
                    }), this.matMat = new THREE.MeshStandardMaterial({
                        side: THREE.DoubleSide,
                        color: "rgb(247,247,247)",
                        roughness: 0.9,
                        metalness: 0.2
                    }), this.mesh = t, this.Magma_2 = t.children[0], this.Magma = t.children[1], this.Magma_1 = t.children[2], this.Magma5 = t.children[3], this.Magma4 = t.children[4], this.Magma3 = t.children[5], this.Magma2 = t.children[6], this.Magma1 = t.children[7], this.Level1Cam = new THREE.Object3D, this.Level1Cam.name = "Level1Cam", this.Level1Cam.position.set(-678.124, 1578.453, -1984.612), this.Level1Cam.rotation.set(0, 0, -0), this.Level2Cam = new THREE.Object3D, this.Level2Cam.name = "Level2Cam", this.Level2Cam.position.set(610.272, 3921.29, 4055.319), this.Level2Cam.rotation.set(-0.191, 0.081, -0.014), S.AnnotationsArray.map(function (t) {
                        t.map(function (t) {
                            i[t.name] = new THREE.Object3D, i[t.name].name = t.name, i[t.name].position.set(t.position[0], t.position[1], t.position[2]), i[t.name].rotation.set(t.rotation[0], t.rotation[1], t.rotation[2])
                        })
                    }), this.VolcanoSurface_1 = t.children[8], e.scene.fog = new THREE.Fog("rgb(10,10,20)", 8000, 13500), this.Magma_2.material = this.matMagma, this.Magma.material = this.matMagma, this.Magma_1.material = this.matMagma, this.Magma5.material = this.matMagma, this.Magma4.material = this.matMagma, this.Magma3.material = this.matMagma, this.Magma2.material = this.matMagma, this.Magma1.material = this.matMagma, this.VolcanoSurface_1.material = this.matMat, this.mesh.traverse(function (t) {
                        t instanceof THREE.Mesh && (t.castShadow = !0, t.receiveShadow = !0)
                    }), this.Ambient = new THREE.AmbientLight("rgb(58,146,255)", 0), this.Ambient.position.set(2248.64, 8271.51, 3829.188), this.Ambient.rotation.set(0, -0.863, 0), this.BlueGlobal = new THREE.PointLight("rgb(62,108,158)", 1.26, 12328.7820701, 0.523598775598, 0.476401224402, 2), this.BlueGlobal.position.set(2248.64, 6943.338, 2693.476), this.BlueGlobal.rotation.set(0, -0.863, 0), this.BlueGlobal.shadow.mapSize.height = 2048, this.BlueGlobal.shadow.mapSize.width = 2048, this.LightLevel2 = new THREE.PointLight("rgb(227,76,43)", 3.51, 5783.73617289, 0.523598775598, 0.476401224402, 2), this.LightLevel2.position.set(-176.744, -263.959, -279.158), this.LightLevel2.rotation.set(0, 0, 0), this.LightLevel2.shadow.mapSize.height = 2048, this.LightLevel2.shadow.mapSize.width = 2048, this.LightLevel1 = new THREE.PointLight("rgb(227,76,43)", 3.51, 4826.52838493, 0.523598775598, 0.476401224402, 2), this.LightLevel1.position.set(-176.744, -263.959, -279.158), this.LightLevel1.rotation.set(0, 0, 0), this.LightLevel1.shadow.mapSize.height = 2048, this.LightLevel1.shadow.mapSize.width = 2048, this.LightLevel0 = new THREE.PointLight("rgb(227,76,43)", 0.51, 4826.52838493, 0.523598775598, 0.476401224402, 2), this.LightLevel0.position.set(-176.744, -263.959, -279.158), this.LightLevel0.rotation.set(0, 0, 0), this.LightLevel0.shadow.mapSize.height = 2048, this.LightLevel0.shadow.mapSize.width = 2048, this.LightLevel0_1 = new THREE.PointLight("rgb(227,113,43)", 0.51, 4826.52838493, 0.523598775598, 0.476401224402, 2), this.LightLevel0_1.position.set(-143.952, -263.959, -107.846), this.LightLevel0_1.rotation.set(0, 0, 0), this.LightLevel0_1.shadow.mapSize.height = 2048, this.LightLevel0_1.shadow.mapSize.width = 2048, this.LightLevel0_2 = new THREE.PointLight("rgb(227,144,43)", 0.24, 4826.52838493, 0.523598775598, 0.476401224402, 2), this.LightLevel0_2.position.set(-11.638, -353.586, -489.476), this.LightLevel0_2.rotation.set(0, 0, 0), this.LightLevel0_2.shadow.mapSize.height = 2048, this.LightLevel0_2.shadow.mapSize.width = 2048, this.subrig1 = new THREE.Object3D, this.camRotWorld1 = new THREE.Object3D, this.camRotWorld1.name = "cam1", this.cameraRig1 = new THREE.Object3D, this.camRotWorld1.add(this.cameraRig1), this.cameraRig1.add(this.subrig1), this.cameraRig1.position.set(0, 0, -0), this.cameraRig1.rotation.y = 0, this.camRotWorld2 = new THREE.Object3D, this.camRotWorld2.name = "cam2", this.subRig2 = new THREE.Object3D, this.cameraRig2 = new THREE.Object3D, this.camRotWorld2.add(this.cameraRig2), this.cameraRig2.add(this.subRig2), this.cameraRig2.position.set(0, 0, -0), this.cameraRig2.rotation.y = -2.29, this.subRig2.rotation.x = 1, this.camRotWorld3 = new THREE.Object3D, this.camRotWorld3.name = "cam3", this.cameraRig3 = new THREE.Object3D, this.camRotWorld3.add(this.cameraRig3), this.cameraRig3.position.set(0, 0, -0), this.cameraRig3.rotation.y = 0, this.Level0Cam = new THREE.Object3D, this.Level0Cam.add(this.camRotWorld1), this.Level0Cam.position.set(-189.101, -6.257, 130.999), this.Level0Cam.rotation.set(-0.209, 0.209, 0), this.Level1Cam = new THREE.Object3D, this.Level1Cam.add(this.camRotWorld2), this.Level1Cam.position.set(-678.124, 1578.453, -1984.612), this.Level1Cam.rotation.set(-0.2, 0.08, 0.05), this.Level2Cam = new THREE.Object3D, this.Level2Cam.add(this.camRotWorld3), this.Level2Cam.position.set(610.272, 3921.29, 4055.319), this.Level2Cam.rotation.set(-0.191, 0.081, 0.014), this.Magma_2AnimRig = new THREE.Object3D, this.Magma_2AnimRig.position.set(-73.356, -517.765, -452.453), THREE.SceneUtils.attach(this.Magma_2, e.scene, this.Magma_2AnimRig), this.Magma_2AnimRig.updateMatrixWorld(), this.Magma_2AnimRig.PosAnim = {
                        value: "null"
                    }, this.Magma_2.ScaleAnim = {
                        value: "null"
                    }, this.Magma_2.RotAnim = {
                        duration: 119,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0, 0.053, -0],
                        2: [0, 0.106, -0],
                        3: [0, 0.158, -0],
                        4: [0, 0.211, -0],
                        5: [0, 0.264, -0],
                        6: [0, 0.317, -0],
                        7: [0, 0.37, -0],
                        8: [0, 0.422, -0],
                        9: [0, 0.475, -0],
                        10: [0, 0.528, -0],
                        11: [0, 0.581, -0],
                        12: [0, 0.634, -0],
                        13: [0, 0.686, -0],
                        14: [0, 0.739, -0],
                        15: [0, 0.792, -0],
                        16: [0, 0.845, -0],
                        17: [0, 0.898, -0],
                        18: [0, 0.95, -0],
                        19: [0, 1.003, -0],
                        20: [0, 1.056, -0],
                        21: [0, 1.109, -0],
                        22: [0, 1.162, -0],
                        23: [0, 1.214, -0],
                        24: [0, 1.267, -0],
                        25: [0, 1.32, -0],
                        26: [0, 1.373, -0],
                        27: [0, 1.426, -0],
                        28: [0, 1.478, -0],
                        29: [0, 1.531, -0],
                        30: [0, 1.584, -0],
                        31: [0, 1.637, -0],
                        32: [0, 1.69, -0],
                        33: [0, 1.742, -0],
                        34: [0, 1.795, -0],
                        35: [0, 1.848, -0],
                        36: [0, 1.901, -0],
                        37: [0, 1.954, -0],
                        38: [0, 2.006, -0],
                        39: [0, 2.059, -0],
                        40: [0, 2.112, -0],
                        41: [0, 2.165, -0],
                        42: [0, 2.218, -0],
                        43: [0, 2.27, -0],
                        44: [0, 2.323, -0],
                        45: [0, 2.376, -0],
                        46: [0, 2.429, -0],
                        47: [0, 2.482, -0],
                        48: [0, 2.534, -0],
                        49: [0, 2.587, -0],
                        50: [0, 2.64, -0],
                        51: [0, 2.693, -0],
                        52: [0, 2.746, -0],
                        53: [0, 2.798, -0],
                        54: [0, 2.851, -0],
                        55: [0, 2.904, -0],
                        56: [0, 2.957, -0],
                        57: [0, 3.01, -0],
                        58: [0, 3.062, -0],
                        59: [0, 3.115, -0],
                        60: [0, 3.168, -0],
                        61: [0, 3.221, -0],
                        62: [0, 3.274, -0],
                        63: [0, 3.326, -0],
                        64: [0, 3.379, -0],
                        65: [0, 3.432, -0],
                        66: [0, 3.485, -0],
                        67: [0, 3.538, -0],
                        68: [0, 3.59, -0],
                        69: [0, 3.643, -0],
                        70: [0, 3.696, -0],
                        71: [0, 3.749, -0],
                        72: [0, 3.802, -0],
                        73: [0, 3.854, -0],
                        74: [0, 3.907, -0],
                        75: [0, 3.96, -0],
                        76: [0, 4.013, -0],
                        77: [0, 4.066, -0],
                        78: [0, 4.118, -0],
                        79: [0, 4.171, -0],
                        80: [0, 4.224, -0],
                        81: [0, 4.277, -0],
                        82: [0, 4.33, -0],
                        83: [0, 4.382, -0],
                        84: [0, 4.435, -0],
                        85: [0, 4.488, -0],
                        86: [0, 4.541, -0],
                        87: [0, 4.594, -0],
                        88: [0, 4.646, -0],
                        89: [0, 4.699, -0],
                        90: [0, 4.752, -0],
                        91: [0, 4.805, -0],
                        92: [0, 4.858, -0],
                        93: [0, 4.91, -0],
                        94: [0, 4.963, -0],
                        95: [0, 5.016, -0],
                        96: [0, 5.069, -0],
                        97: [0, 5.122, -0],
                        98: [0, 5.174, -0],
                        99: [0, 5.227, -0],
                        100: [0, 5.28, -0],
                        101: [0, 5.333, -0],
                        102: [0, 5.386, -0],
                        103: [0, 5.438, -0],
                        104: [0, 5.491, -0],
                        105: [0, 5.544, -0],
                        106: [0, 5.597, -0],
                        107: [0, 5.65, -0],
                        108: [0, 5.702, -0],
                        109: [0, 5.755, -0],
                        110: [0, 5.808, -0],
                        111: [0, 5.861, -0],
                        112: [0, 5.914, -0],
                        113: [0, 5.966, -0],
                        114: [0, 6.019, -0],
                        115: [0, 6.072, -0],
                        116: [0, 6.125, -0],
                        117: [0, 6.178, -0],
                        118: [0, 6.23, -0],
                        119: [0, 6.283, -0]
                    }, this.MagmaAnimRig = new THREE.Object3D, this.MagmaAnimRig.position.set(-39.985, -457.06, -153.172), THREE.SceneUtils.attach(this.Magma, e.scene, this.MagmaAnimRig), this.MagmaAnimRig.updateMatrixWorld(), this.MagmaAnimRig.PosAnim = {
                        value: "null"
                    }, this.Magma.ScaleAnim = {
                        value: "null"
                    }, this.Magma.RotAnim = {
                        duration: 118,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0.053, 0, -0],
                        2: [0.106, 0, -0],
                        3: [0.16, 0, -0],
                        4: [0.213, 0, -0],
                        5: [0.266, 0, -0],
                        6: [0.319, 0, -0],
                        7: [0.373, 0, -0],
                        8: [0.426, 0, -0],
                        9: [0.479, 0, -0],
                        10: [0.532, 0, -0],
                        11: [0.586, 0, -0],
                        12: [0.639, 0, -0],
                        13: [0.692, 0, -0],
                        14: [0.745, 0, -0],
                        15: [0.799, 0, -0],
                        16: [0.852, 0, -0],
                        17: [0.905, 0, -0],
                        18: [0.958, 0, -0],
                        19: [1.012, 0, -0],
                        20: [1.065, 0, -0],
                        21: [1.118, 0, -0],
                        22: [1.171, 0, -0],
                        23: [1.225, 0, -0],
                        24: [1.278, 0, -0],
                        25: [1.331, 0, -0],
                        26: [1.384, 0, -0],
                        27: [1.438, 0, -0],
                        28: [1.491, 0, -0],
                        29: [1.544, 0, -0],
                        30: [1.597, 0, -0],
                        31: [1.651, 0, -0],
                        32: [1.704, 0, -0],
                        33: [1.757, 0, -0],
                        34: [1.81, 0, -0],
                        35: [1.864, 0, -0],
                        36: [1.917, 0, -0],
                        37: [1.97, 0, -0],
                        38: [2.023, 0, -0],
                        39: [2.077, 0, -0],
                        40: [2.13, 0, -0],
                        41: [2.183, 0, -0],
                        42: [2.236, 0, -0],
                        43: [2.29, 0, -0],
                        44: [2.343, 0, -0],
                        45: [2.396, 0, -0],
                        46: [2.449, 0, -0],
                        47: [2.503, 0, -0],
                        48: [2.556, 0, -0],
                        49: [2.609, 0, -0],
                        50: [2.662, 0, -0],
                        51: [2.716, 0, -0],
                        52: [2.769, 0, -0],
                        53: [2.822, 0, -0],
                        54: [2.875, 0, -0],
                        55: [2.929, 0, -0],
                        56: [2.982, 0, -0],
                        57: [3.035, 0, -0],
                        58: [3.088, 0, -0],
                        59: [3.142, 0, -0],
                        60: [3.195, 0, -0],
                        61: [3.248, 0, -0],
                        62: [3.301, 0, -0],
                        63: [3.355, 0, -0],
                        64: [3.408, 0, -0],
                        65: [3.461, 0, -0],
                        66: [3.514, 0, -0],
                        67: [3.568, 0, -0],
                        68: [3.621, 0, -0],
                        69: [3.674, 0, -0],
                        70: [3.727, 0, -0],
                        71: [3.781, 0, -0],
                        72: [3.834, 0, -0],
                        73: [3.887, 0, -0],
                        74: [3.94, 0, -0],
                        75: [3.994, 0, -0],
                        76: [4.047, 0, -0],
                        77: [4.1, 0, -0],
                        78: [4.153, 0, -0],
                        79: [4.207, 0, -0],
                        80: [4.26, 0, -0],
                        81: [4.313, 0, -0],
                        82: [4.366, 0, -0],
                        83: [4.42, 0, -0],
                        84: [4.473, 0, -0],
                        85: [4.526, 0, -0],
                        86: [4.579, 0, -0],
                        87: [4.633, 0, -0],
                        88: [4.686, 0, -0],
                        89: [4.739, 0, -0],
                        90: [4.792, 0, -0],
                        91: [4.846, 0, -0],
                        92: [4.899, 0, -0],
                        93: [4.952, 0, -0],
                        94: [5.005, 0, -0],
                        95: [5.058, 0, -0],
                        96: [5.112, 0, -0],
                        97: [5.165, 0, -0],
                        98: [5.218, 0, -0],
                        99: [5.271, 0, -0],
                        100: [5.325, 0, -0],
                        101: [5.378, 0, -0],
                        102: [5.431, 0, -0],
                        103: [5.484, 0, -0],
                        104: [5.538, 0, -0],
                        105: [5.591, 0, -0],
                        106: [5.644, 0, -0],
                        107: [5.697, 0, -0],
                        108: [5.751, 0, -0],
                        109: [5.804, 0, -0],
                        110: [5.857, 0, -0],
                        111: [5.91, 0, -0],
                        112: [5.964, 0, -0],
                        113: [6.017, 0, -0],
                        114: [6.07, 0, -0],
                        115: [6.123, 0, -0],
                        116: [6.177, 0, -0],
                        117: [6.23, 0, -0],
                        118: [6.283, 0, -0]
                    }, this.Magma_1AnimRig = new THREE.Object3D, this.Magma_1AnimRig.position.set(-235.322, -457.06, -297.922), THREE.SceneUtils.attach(this.Magma_1, e.scene, this.Magma_1AnimRig), this.Magma_1AnimRig.updateMatrixWorld(), this.Magma_1AnimRig.PosAnim = {
                        value: "null"
                    }, this.Magma_1.ScaleAnim = {
                        value: "null"
                    }, this.Magma_1.RotAnim = {
                        duration: 119,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0.053, 0, -0],
                        2: [0.106, 0, -0],
                        3: [0.158, 0, -0],
                        4: [0.211, 0, -0],
                        5: [0.264, 0, -0],
                        6: [0.317, 0, -0],
                        7: [0.37, 0, -0],
                        8: [0.422, 0, -0],
                        9: [0.475, 0, -0],
                        10: [0.528, 0, -0],
                        11: [0.581, 0, -0],
                        12: [0.634, 0, -0],
                        13: [0.686, 0, -0],
                        14: [0.739, 0, -0],
                        15: [0.792, 0, -0],
                        16: [0.845, 0, -0],
                        17: [0.898, 0, -0],
                        18: [0.95, 0, -0],
                        19: [1.003, 0, -0],
                        20: [1.056, 0, -0],
                        21: [1.109, 0, -0],
                        22: [1.162, 0, -0],
                        23: [1.214, 0, -0],
                        24: [1.267, 0, -0],
                        25: [1.32, 0, -0],
                        26: [1.373, 0, -0],
                        27: [1.426, 0, -0],
                        28: [1.478, 0, -0],
                        29: [1.531, 0, -0],
                        30: [1.584, 0, -0],
                        31: [1.637, 0, -0],
                        32: [1.69, 0, -0],
                        33: [1.742, 0, -0],
                        34: [1.795, 0, -0],
                        35: [1.848, 0, -0],
                        36: [1.901, 0, -0],
                        37: [1.954, 0, -0],
                        38: [2.006, 0, -0],
                        39: [2.059, 0, -0],
                        40: [2.112, 0, -0],
                        41: [2.165, 0, -0],
                        42: [2.218, 0, -0],
                        43: [2.27, 0, -0],
                        44: [2.323, 0, -0],
                        45: [2.376, 0, -0],
                        46: [2.429, 0, -0],
                        47: [2.482, 0, -0],
                        48: [2.534, 0, -0],
                        49: [2.587, 0, -0],
                        50: [2.64, 0, -0],
                        51: [2.693, 0, -0],
                        52: [2.746, 0, -0],
                        53: [2.798, 0, -0],
                        54: [2.851, 0, -0],
                        55: [2.904, 0, -0],
                        56: [2.957, 0, -0],
                        57: [3.01, 0, -0],
                        58: [3.062, 0, -0],
                        59: [3.115, 0, -0],
                        60: [3.168, 0, -0],
                        61: [3.221, 0, -0],
                        62: [3.274, 0, -0],
                        63: [3.326, 0, -0],
                        64: [3.379, 0, -0],
                        65: [3.432, 0, -0],
                        66: [3.485, 0, -0],
                        67: [3.538, 0, -0],
                        68: [3.59, 0, -0],
                        69: [3.643, 0, -0],
                        70: [3.696, 0, -0],
                        71: [3.749, 0, -0],
                        72: [3.802, 0, -0],
                        73: [3.854, 0, -0],
                        74: [3.907, 0, -0],
                        75: [3.96, 0, -0],
                        76: [4.013, 0, -0],
                        77: [4.066, 0, -0],
                        78: [4.118, 0, -0],
                        79: [4.171, 0, -0],
                        80: [4.224, 0, -0],
                        81: [4.277, 0, -0],
                        82: [4.33, 0, -0],
                        83: [4.382, 0, -0],
                        84: [4.435, 0, -0],
                        85: [4.488, 0, -0],
                        86: [4.541, 0, -0],
                        87: [4.594, 0, -0],
                        88: [4.646, 0, -0],
                        89: [4.699, 0, -0],
                        90: [4.752, 0, -0],
                        91: [4.805, 0, -0],
                        92: [4.858, 0, -0],
                        93: [4.91, 0, -0],
                        94: [4.963, 0, -0],
                        95: [5.016, 0, -0],
                        96: [5.069, 0, -0],
                        97: [5.122, 0, -0],
                        98: [5.174, 0, -0],
                        99: [5.227, 0, -0],
                        100: [5.28, 0, -0],
                        101: [5.333, 0, -0],
                        102: [5.386, 0, -0],
                        103: [5.438, 0, -0],
                        104: [5.491, 0, -0],
                        105: [5.544, 0, -0],
                        106: [5.597, 0, -0],
                        107: [5.65, 0, -0],
                        108: [5.702, 0, -0],
                        109: [5.755, 0, -0],
                        110: [5.808, 0, -0],
                        111: [5.861, 0, -0],
                        112: [5.914, 0, -0],
                        113: [5.966, 0, -0],
                        114: [6.019, 0, -0],
                        115: [6.072, 0, -0],
                        116: [6.125, 0, -0],
                        117: [6.178, 0, -0],
                        118: [6.23, 0, -0],
                        119: [6.283, 0, -0]
                    }, this.Magma5AnimRig = new THREE.Object3D, this.Magma5AnimRig.position.set(58.462, -405.131, -398.296), THREE.SceneUtils.attach(this.Magma5, e.scene, this.Magma5AnimRig), this.Magma5AnimRig.updateMatrixWorld(), this.Magma5AnimRig.PosAnim = {
                        value: "null"
                    }, this.Magma5.ScaleAnim = {
                        value: "null"
                    }, this.Magma5.RotAnim = {
                        duration: 158,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0.04, 0, 0.04],
                        2: [0.08, 0, 0.08],
                        3: [0.119, 0, 0.119],
                        4: [0.159, 0, 0.159],
                        5: [0.199, 0, 0.199],
                        6: [0.239, 0, 0.239],
                        7: [0.278, 0, 0.278],
                        8: [0.318, 0, 0.318],
                        9: [0.358, 0, 0.358],
                        10: [0.398, 0, 0.398],
                        11: [0.437, 0, 0.437],
                        12: [0.477, 0, 0.477],
                        13: [0.517, 0, 0.517],
                        14: [0.557, 0, 0.557],
                        15: [0.597, 0, 0.597],
                        16: [0.636, 0, 0.636],
                        17: [0.676, 0, 0.676],
                        18: [0.716, 0, 0.716],
                        19: [0.756, 0, 0.756],
                        20: [0.795, 0, 0.795],
                        21: [0.835, 0, 0.835],
                        22: [0.875, 0, 0.875],
                        23: [0.915, 0, 0.915],
                        24: [0.954, 0, 0.954],
                        25: [0.994, 0, 0.994],
                        26: [1.034, 0, 1.034],
                        27: [1.074, 0, 1.074],
                        28: [1.113, 0, 1.113],
                        29: [1.153, 0, 1.153],
                        30: [1.193, 0, 1.193],
                        31: [1.233, 0, 1.233],
                        32: [1.273, 0, 1.273],
                        33: [1.312, 0, 1.312],
                        34: [1.352, 0, 1.352],
                        35: [1.392, 0, 1.392],
                        36: [1.432, 0, 1.432],
                        37: [1.471, 0, 1.471],
                        38: [1.511, 0, 1.511],
                        39: [1.551, 0, 1.551],
                        40: [1.591, 0, 1.591],
                        41: [1.63, 0, 1.63],
                        42: [1.67, 0, 1.67],
                        43: [1.71, 0, 1.71],
                        44: [1.75, 0, 1.75],
                        45: [1.79, 0, 1.79],
                        46: [1.829, 0, 1.829],
                        47: [1.869, 0, 1.869],
                        48: [1.909, 0, 1.909],
                        49: [1.949, 0, 1.949],
                        50: [1.988, 0, 1.988],
                        51: [2.028, 0, 2.028],
                        52: [2.068, 0, 2.068],
                        53: [2.108, 0, 2.108],
                        54: [2.147, 0, 2.147],
                        55: [2.187, 0, 2.187],
                        56: [2.227, 0, 2.227],
                        57: [2.267, 0, 2.267],
                        58: [2.306, 0, 2.306],
                        59: [2.346, 0, 2.346],
                        60: [2.386, 0, 2.386],
                        61: [2.426, 0, 2.426],
                        62: [2.466, 0, 2.466],
                        63: [2.505, 0, 2.505],
                        64: [2.545, 0, 2.545],
                        65: [2.585, 0, 2.585],
                        66: [2.625, 0, 2.625],
                        67: [2.664, 0, 2.664],
                        68: [2.704, 0, 2.704],
                        69: [2.744, 0, 2.744],
                        70: [2.784, 0, 2.784],
                        71: [2.823, 0, 2.823],
                        72: [2.863, 0, 2.863],
                        73: [2.903, 0, 2.903],
                        74: [2.943, 0, 2.943],
                        75: [2.983, 0, 2.983],
                        76: [3.022, 0, 3.022],
                        77: [3.062, 0, 3.062],
                        78: [3.102, 0, 3.102],
                        79: [3.142, 0, 3.142],
                        80: [3.181, 0, 3.181],
                        81: [3.221, 0, 3.221],
                        82: [3.261, 0, 3.261],
                        83: [3.301, 0, 3.301],
                        84: [3.34, 0, 3.34],
                        85: [3.38, 0, 3.38],
                        86: [3.42, 0, 3.42],
                        87: [3.46, 0, 3.46],
                        88: [3.499, 0, 3.499],
                        89: [3.539, 0, 3.539],
                        90: [3.579, 0, 3.579],
                        91: [3.619, 0, 3.619],
                        92: [3.659, 0, 3.659],
                        93: [3.698, 0, 3.698],
                        94: [3.738, 0, 3.738],
                        95: [3.778, 0, 3.778],
                        96: [3.818, 0, 3.818],
                        97: [3.857, 0, 3.857],
                        98: [3.897, 0, 3.897],
                        99: [3.937, 0, 3.937],
                        100: [3.977, 0, 3.977],
                        101: [4.016, 0, 4.016],
                        102: [4.056, 0, 4.056],
                        103: [4.096, 0, 4.096],
                        104: [4.136, 0, 4.136],
                        105: [4.176, 0, 4.176],
                        106: [4.215, 0, 4.215],
                        107: [4.255, 0, 4.255],
                        108: [4.295, 0, 4.295],
                        109: [4.335, 0, 4.335],
                        110: [4.374, 0, 4.374],
                        111: [4.414, 0, 4.414],
                        112: [4.454, 0, 4.454],
                        113: [4.494, 0, 4.494],
                        114: [4.533, 0, 4.533],
                        115: [4.573, 0, 4.573],
                        116: [4.613, 0, 4.613],
                        117: [4.653, 0, 4.653],
                        118: [4.693, 0, 4.693],
                        119: [4.732, 0, 4.732],
                        120: [4.772, 0, 4.772],
                        121: [4.812, 0, 4.812],
                        122: [4.852, 0, 4.852],
                        123: [4.891, 0, 4.891],
                        124: [4.931, 0, 4.931],
                        125: [4.971, 0, 4.971],
                        126: [5.011, 0, 5.011],
                        127: [5.05, 0, 5.05],
                        128: [5.09, 0, 5.09],
                        129: [5.13, 0, 5.13],
                        130: [5.17, 0, 5.17],
                        131: [5.209, 0, 5.209],
                        132: [5.249, 0, 5.249],
                        133: [5.289, 0, 5.289],
                        134: [5.329, 0, 5.329],
                        135: [5.369, 0, 5.369],
                        136: [5.408, 0, 5.408],
                        137: [5.448, 0, 5.448],
                        138: [5.488, 0, 5.488],
                        139: [5.528, 0, 5.528],
                        140: [5.567, 0, 5.567],
                        141: [5.607, 0, 5.607],
                        142: [5.647, 0, 5.647],
                        143: [5.687, 0, 5.687],
                        144: [5.726, 0, 5.726],
                        145: [5.766, 0, 5.766],
                        146: [5.806, 0, 5.806],
                        147: [5.846, 0, 5.846],
                        148: [5.886, 0, 5.886],
                        149: [5.925, 0, 5.925],
                        150: [5.965, 0, 5.965],
                        151: [6.005, 0, 6.005],
                        152: [6.045, 0, 6.045],
                        153: [6.084, 0, 6.084],
                        154: [6.124, 0, 6.124],
                        155: [6.164, 0, 6.164],
                        156: [6.204, 0, 6.204],
                        157: [6.243, 0, 6.243],
                        158: [6.283, 0, 6.283]
                    }, this.Magma4AnimRig = new THREE.Object3D, this.Magma4AnimRig.position.set(-195.511, -429.604, -547.022), THREE.SceneUtils.attach(this.Magma4, e.scene, this.Magma4AnimRig), this.Magma4AnimRig.updateMatrixWorld(), this.Magma4AnimRig.PosAnim = {
                        value: "null"
                    }, this.Magma4.ScaleAnim = {
                        value: "null"
                    }, this.Magma4.RotAnim = {
                        duration: 88,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0.01, -0.071, -0],
                        2: [0.019, -0.143, -0],
                        3: [0.029, -0.214, -0],
                        4: [0.038, -0.286, -0],
                        5: [0.048, -0.357, -0],
                        6: [0.057, -0.428, -0],
                        7: [0.067, -0.5, -0],
                        8: [0.076, -0.571, -0],
                        9: [0.086, -0.643, -0],
                        10: [0.095, -0.714, -0],
                        11: [0.105, -0.785, -0],
                        12: [0.114, -0.857, -0],
                        13: [0.124, -0.928, -0],
                        14: [0.133, -1, -0],
                        15: [0.143, -1.071, -0],
                        16: [0.152, -1.142, -0],
                        17: [0.162, -1.214, -0],
                        18: [0.171, -1.285, -0],
                        19: [0.181, -1.357, -0],
                        20: [0.19, -1.428, -0],
                        21: [0.2, -1.499, -0],
                        22: [0.209, -1.571, -0],
                        23: [0.219, -1.642, -0],
                        24: [0.228, -1.714, -0],
                        25: [0.238, -1.785, -0],
                        26: [0.248, -1.856, -0],
                        27: [0.257, -1.928, -0],
                        28: [0.267, -1.999, -0],
                        29: [0.276, -2.071, -0],
                        30: [0.286, -2.142, -0],
                        31: [0.295, -2.213, -0],
                        32: [0.305, -2.285, -0],
                        33: [0.314, -2.356, -0],
                        34: [0.324, -2.428, -0],
                        35: [0.333, -2.499, -0],
                        36: [0.343, -2.57, -0],
                        37: [0.352, -2.642, -0],
                        38: [0.362, -2.713, -0],
                        39: [0.371, -2.785, -0],
                        40: [0.381, -2.856, -0],
                        41: [0.39, -2.927, -0],
                        42: [0.4, -2.999, -0],
                        43: [0.409, -3.07, -0],
                        44: [0.419, -3.142, -0],
                        45: [0.428, -3.213, -0],
                        46: [0.438, -3.284, -0],
                        47: [0.447, -3.356, -0],
                        48: [0.457, -3.427, -0],
                        49: [0.466, -3.499, -0],
                        50: [0.476, -3.57, -0],
                        51: [0.486, -3.641, -0],
                        52: [0.495, -3.713, -0],
                        53: [0.505, -3.784, -0],
                        54: [0.514, -3.856, -0],
                        55: [0.524, -3.927, -0],
                        56: [0.533, -3.998, -0],
                        57: [0.543, -4.07, -0],
                        58: [0.552, -4.141, -0],
                        59: [0.562, -4.213, -0],
                        60: [0.571, -4.284, -0],
                        61: [0.581, -4.355, -0],
                        62: [0.59, -4.427, -0],
                        63: [0.6, -4.498, -0],
                        64: [0.609, -4.57, -0],
                        65: [0.619, -4.641, -0],
                        66: [0.628, -4.712, -0],
                        67: [0.638, -4.784, -0],
                        68: [0.647, -4.855, -0],
                        69: [0.657, -4.927, -0],
                        70: [0.666, -4.998, -0],
                        71: [0.676, -5.069, -0],
                        72: [0.685, -5.141, -0],
                        73: [0.695, -5.212, -0],
                        74: [0.704, -5.284, -0],
                        75: [0.714, -5.355, -0],
                        76: [0.724, -5.426, -0],
                        77: [0.733, -5.498, -0],
                        78: [0.743, -5.569, -0],
                        79: [0.752, -5.641, -0],
                        80: [0.762, -5.712, -0],
                        81: [0.771, -5.783, -0],
                        82: [0.781, -5.855, -0],
                        83: [0.79, -5.926, -0],
                        84: [0.8, -5.998, -0],
                        85: [0.809, -6.069, -0],
                        86: [0.819, -6.14, -0],
                        87: [0.828, -6.212, -0],
                        88: [0.838, -6.283, -0]
                    }, this.Magma3AnimRig = new THREE.Object3D, this.Magma3AnimRig.position.set(-7.485, -341.3, -330.994), THREE.SceneUtils.attach(this.Magma3, e.scene, this.Magma3AnimRig), this.Magma3AnimRig.updateMatrixWorld(), this.Magma3AnimRig.PosAnim = {
                        value: "null"
                    }, this.Magma3.ScaleAnim = {
                        value: "null"
                    }, this.Magma3.RotAnim = {
                        duration: 72,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0, -0.087, 0.087],
                        2: [0, -0.175, 0.175],
                        3: [0, -0.262, 0.262],
                        4: [0, -0.349, 0.349],
                        5: [0, -0.436, 0.436],
                        6: [0, -0.524, 0.524],
                        7: [0, -0.611, 0.611],
                        8: [0, -0.698, 0.698],
                        9: [0, -0.785, 0.785],
                        10: [0, -0.873, 0.873],
                        11: [0, -0.96, 0.96],
                        12: [0, -1.047, 1.047],
                        13: [0, -1.134, 1.134],
                        14: [0, -1.222, 1.222],
                        15: [0, -1.309, 1.309],
                        16: [0, -1.396, 1.396],
                        17: [0, -1.484, 1.484],
                        18: [0, -1.571, 1.571],
                        19: [0, -1.658, 1.658],
                        20: [0, -1.745, 1.745],
                        21: [0, -1.833, 1.833],
                        22: [0, -1.92, 1.92],
                        23: [0, -2.007, 2.007],
                        24: [0, -2.094, 2.094],
                        25: [0, -2.182, 2.182],
                        26: [0, -2.269, 2.269],
                        27: [0, -2.356, 2.356],
                        28: [0, -2.443, 2.443],
                        29: [0, -2.531, 2.531],
                        30: [0, -2.618, 2.618],
                        31: [0, -2.705, 2.705],
                        32: [0, -2.793, 2.793],
                        33: [0, -2.88, 2.88],
                        34: [0, -2.967, 2.967],
                        35: [0, -3.054, 3.054],
                        36: [0, -3.142, 3.142],
                        37: [0, -3.229, 3.229],
                        38: [0, -3.316, 3.316],
                        39: [0, -3.403, 3.403],
                        40: [0, -3.491, 3.491],
                        41: [0, -3.578, 3.578],
                        42: [0, -3.665, 3.665],
                        43: [0, -3.752, 3.752],
                        44: [0, -3.84, 3.84],
                        45: [0, -3.927, 3.927],
                        46: [0, -4.014, 4.014],
                        47: [0, -4.102, 4.102],
                        48: [0, -4.189, 4.189],
                        49: [0, -4.276, 4.276],
                        50: [0, -4.363, 4.363],
                        51: [0, -4.451, 4.451],
                        52: [0, -4.538, 4.538],
                        53: [0, -4.625, 4.625],
                        54: [0, -4.712, 4.712],
                        55: [0, -4.8, 4.8],
                        56: [0, -4.887, 4.887],
                        57: [0, -4.974, 4.974],
                        58: [0, -5.061, 5.061],
                        59: [0, -5.149, 5.149],
                        60: [0, -5.236, 5.236],
                        61: [0, -5.323, 5.323],
                        62: [0, -5.411, 5.411],
                        63: [0, -5.498, 5.498],
                        64: [0, -5.585, 5.585],
                        65: [0, -5.672, 5.672],
                        66: [0, -5.76, 5.76],
                        67: [0, -5.847, 5.847],
                        68: [0, -5.934, 5.934],
                        69: [0, -6.021, 6.021],
                        70: [0, -6.109, 6.109],
                        71: [0, -6.196, 6.196],
                        72: [0, -6.283, 6.283]
                    }, this.Magma2AnimRig = new THREE.Object3D, this.Magma2AnimRig.position.set(-121.291, -300.029, -58.571), THREE.SceneUtils.attach(this.Magma2, e.scene, this.Magma2AnimRig), this.Magma2AnimRig.updateMatrixWorld(), this.Magma2AnimRig.PosAnim = {
                        value: "null"
                    }, this.Magma2.ScaleAnim = {
                        value: "null"
                    }, this.Magma2.RotAnim = {
                        duration: 187,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [-0.034, 0.034, -0.034],
                        2: [-0.067, 0.067, -0.067],
                        3: [-0.101, 0.101, -0.101],
                        4: [-0.134, 0.134, -0.134],
                        5: [-0.168, 0.168, -0.168],
                        6: [-0.202, 0.202, -0.202],
                        7: [-0.235, 0.235, -0.235],
                        8: [-0.269, 0.269, -0.269],
                        9: [-0.302, 0.302, -0.302],
                        10: [-0.336, 0.336, -0.336],
                        11: [-0.37, 0.37, -0.37],
                        12: [-0.403, 0.403, -0.403],
                        13: [-0.437, 0.437, -0.437],
                        14: [-0.47, 0.47, -0.47],
                        15: [-0.504, 0.504, -0.504],
                        16: [-0.538, 0.538, -0.538],
                        17: [-0.571, 0.571, -0.571],
                        18: [-0.605, 0.605, -0.605],
                        19: [-0.638, 0.638, -0.638],
                        20: [-0.672, 0.672, -0.672],
                        21: [-0.706, 0.706, -0.706],
                        22: [-0.739, 0.739, -0.739],
                        23: [-0.773, 0.773, -0.773],
                        24: [-0.806, 0.806, -0.806],
                        25: [-0.84, 0.84, -0.84],
                        26: [-0.874, 0.874, -0.874],
                        27: [-0.907, 0.907, -0.907],
                        28: [-0.941, 0.941, -0.941],
                        29: [-0.974, 0.974, -0.974],
                        30: [-1.008, 1.008, -1.008],
                        31: [-1.042, 1.042, -1.042],
                        32: [-1.075, 1.075, -1.075],
                        33: [-1.109, 1.109, -1.109],
                        34: [-1.142, 1.142, -1.142],
                        35: [-1.176, 1.176, -1.176],
                        36: [-1.21, 1.21, -1.21],
                        37: [-1.243, 1.243, -1.243],
                        38: [-1.277, 1.277, -1.277],
                        39: [-1.31, 1.31, -1.31],
                        40: [-1.344, 1.344, -1.344],
                        41: [-1.378, 1.378, -1.378],
                        42: [-1.411, 1.411, -1.411],
                        43: [-1.445, 1.445, -1.445],
                        44: [-1.478, 1.478, -1.478],
                        45: [-1.512, 1.512, -1.512],
                        46: [-1.546, 1.546, -1.546],
                        47: [-1.579, 1.579, -1.579],
                        48: [-1.613, 1.613, -1.613],
                        49: [-1.646, 1.646, -1.646],
                        50: [-1.68, 1.68, -1.68],
                        51: [-1.714, 1.714, -1.714],
                        52: [-1.747, 1.747, -1.747],
                        53: [-1.781, 1.781, -1.781],
                        54: [-1.814, 1.814, -1.814],
                        55: [-1.848, 1.848, -1.848],
                        56: [-1.882, 1.882, -1.882],
                        57: [-1.915, 1.915, -1.915],
                        58: [-1.949, 1.949, -1.949],
                        59: [-1.982, 1.982, -1.982],
                        60: [-2.016, 2.016, -2.016],
                        61: [-2.05, 2.05, -2.05],
                        62: [-2.083, 2.083, -2.083],
                        63: [-2.117, 2.117, -2.117],
                        64: [-2.15, 2.15, -2.15],
                        65: [-2.184, 2.184, -2.184],
                        66: [-2.218, 2.218, -2.218],
                        67: [-2.251, 2.251, -2.251],
                        68: [-2.285, 2.285, -2.285],
                        69: [-2.318, 2.318, -2.318],
                        70: [-2.352, 2.352, -2.352],
                        71: [-2.386, 2.386, -2.386],
                        72: [-2.419, 2.419, -2.419],
                        73: [-2.453, 2.453, -2.453],
                        74: [-2.486, 2.486, -2.486],
                        75: [-2.52, 2.52, -2.52],
                        76: [-2.554, 2.554, -2.554],
                        77: [-2.587, 2.587, -2.587],
                        78: [-2.621, 2.621, -2.621],
                        79: [-2.654, 2.654, -2.654],
                        80: [-2.688, 2.688, -2.688],
                        81: [-2.722, 2.722, -2.722],
                        82: [-2.755, 2.755, -2.755],
                        83: [-2.789, 2.789, -2.789],
                        84: [-2.822, 2.822, -2.822],
                        85: [-2.856, 2.856, -2.856],
                        86: [-2.89, 2.89, -2.89],
                        87: [-2.923, 2.923, -2.923],
                        88: [-2.957, 2.957, -2.957],
                        89: [-2.99, 2.99, -2.99],
                        90: [-3.024, 3.024, -3.024],
                        91: [-3.058, 3.058, -3.058],
                        92: [-3.091, 3.091, -3.091],
                        93: [-3.125, 3.125, -3.125],
                        94: [-3.158, 3.158, -3.158],
                        95: [-3.192, 3.192, -3.192],
                        96: [-3.226, 3.226, -3.226],
                        97: [-3.259, 3.259, -3.259],
                        98: [-3.293, 3.293, -3.293],
                        99: [-3.326, 3.326, -3.326],
                        100: [-3.36, 3.36, -3.36],
                        101: [-3.394, 3.394, -3.394],
                        102: [-3.427, 3.427, -3.427],
                        103: [-3.461, 3.461, -3.461],
                        104: [-3.494, 3.494, -3.494],
                        105: [-3.528, 3.528, -3.528],
                        106: [-3.562, 3.562, -3.562],
                        107: [-3.595, 3.595, -3.595],
                        108: [-3.629, 3.629, -3.629],
                        109: [-3.662, 3.662, -3.662],
                        110: [-3.696, 3.696, -3.696],
                        111: [-3.73, 3.73, -3.73],
                        112: [-3.763, 3.763, -3.763],
                        113: [-3.797, 3.797, -3.797],
                        114: [-3.83, 3.83, -3.83],
                        115: [-3.864, 3.864, -3.864],
                        116: [-3.898, 3.898, -3.898],
                        117: [-3.931, 3.931, -3.931],
                        118: [-3.965, 3.965, -3.965],
                        119: [-3.998, 3.998, -3.998],
                        120: [-4.032, 4.032, -4.032],
                        121: [-4.066, 4.066, -4.066],
                        122: [-4.099, 4.099, -4.099],
                        123: [-4.133, 4.133, -4.133],
                        124: [-4.166, 4.166, -4.166],
                        125: [-4.2, 4.2, -4.2],
                        126: [-4.234, 4.234, -4.234],
                        127: [-4.267, 4.267, -4.267],
                        128: [-4.301, 4.301, -4.301],
                        129: [-4.334, 4.334, -4.334],
                        130: [-4.368, 4.368, -4.368],
                        131: [-4.402, 4.402, -4.402],
                        132: [-4.435, 4.435, -4.435],
                        133: [-4.469, 4.469, -4.469],
                        134: [-4.502, 4.502, -4.502],
                        135: [-4.536, 4.536, -4.536],
                        136: [-4.57, 4.57, -4.57],
                        137: [-4.603, 4.603, -4.603],
                        138: [-4.637, 4.637, -4.637],
                        139: [-4.67, 4.67, -4.67],
                        140: [-4.704, 4.704, -4.704],
                        141: [-4.738, 4.738, -4.738],
                        142: [-4.771, 4.771, -4.771],
                        143: [-4.805, 4.805, -4.805],
                        144: [-4.838, 4.838, -4.838],
                        145: [-4.872, 4.872, -4.872],
                        146: [-4.906, 4.906, -4.906],
                        147: [-4.939, 4.939, -4.939],
                        148: [-4.973, 4.973, -4.973],
                        149: [-5.006, 5.006, -5.006],
                        150: [-5.04, 5.04, -5.04],
                        151: [-5.074, 5.074, -5.074],
                        152: [-5.107, 5.107, -5.107],
                        153: [-5.141, 5.141, -5.141],
                        154: [-5.174, 5.174, -5.174],
                        155: [-5.208, 5.208, -5.208],
                        156: [-5.242, 5.242, -5.242],
                        157: [-5.275, 5.275, -5.275],
                        158: [-5.309, 5.309, -5.309],
                        159: [-5.342, 5.342, -5.342],
                        160: [-5.376, 5.376, -5.376],
                        161: [-5.41, 5.41, -5.41],
                        162: [-5.443, 5.443, -5.443],
                        163: [-5.477, 5.477, -5.477],
                        164: [-5.51, 5.51, -5.51],
                        165: [-5.544, 5.544, -5.544],
                        166: [-5.578, 5.578, -5.578],
                        167: [-5.611, 5.611, -5.611],
                        168: [-5.645, 5.645, -5.645],
                        169: [-5.678, 5.678, -5.678],
                        170: [-5.712, 5.712, -5.712],
                        171: [-5.746, 5.746, -5.746],
                        172: [-5.779, 5.779, -5.779],
                        173: [-5.813, 5.813, -5.813],
                        174: [-5.846, 5.846, -5.846],
                        175: [-5.88, 5.88, -5.88],
                        176: [-5.914, 5.914, -5.914],
                        177: [-5.947, 5.947, -5.947],
                        178: [-5.981, 5.981, -5.981],
                        179: [-6.014, 6.014, -6.014],
                        180: [-6.048, 6.048, -6.048],
                        181: [-6.082, 6.082, -6.082],
                        182: [-6.115, 6.115, -6.115],
                        183: [-6.149, 6.149, -6.149],
                        184: [-6.182, 6.182, -6.182],
                        185: [-6.216, 6.216, -6.216],
                        186: [-6.25, 6.25, -6.25],
                        187: [-6.283, 6.283, -6.283]
                    }, this.Magma1AnimRig = new THREE.Object3D, this.Magma1AnimRig.position.set(-194.868, -324.493, -398.461), THREE.SceneUtils.attach(this.Magma1, e.scene, this.Magma1AnimRig), this.Magma1AnimRig.updateMatrixWorld(), this.Magma1AnimRig.PosAnim = {
                        value: "null"
                    }, this.Magma1.ScaleAnim = {
                        value: "null"
                    }, this.Magma1.RotAnim = {
                        duration: 132,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0.048, 0, 0.048],
                        2: [0.095, 0, 0.095],
                        3: [0.143, 0, 0.143],
                        4: [0.19, 0, 0.19],
                        5: [0.238, 0, 0.238],
                        6: [0.286, 0, 0.286],
                        7: [0.333, 0, 0.333],
                        8: [0.381, 0, 0.381],
                        9: [0.428, 0, 0.428],
                        10: [0.476, 0, 0.476],
                        11: [0.524, 0, 0.524],
                        12: [0.571, 0, 0.571],
                        13: [0.619, 0, 0.619],
                        14: [0.666, 0, 0.666],
                        15: [0.714, 0, 0.714],
                        16: [0.762, 0, 0.762],
                        17: [0.809, 0, 0.809],
                        18: [0.857, 0, 0.857],
                        19: [0.904, 0, 0.904],
                        20: [0.952, 0, 0.952],
                        21: [1, 0, 1],
                        22: [1.047, 0, 1.047],
                        23: [1.095, 0, 1.095],
                        24: [1.142, 0, 1.142],
                        25: [1.19, 0, 1.19],
                        26: [1.238, 0, 1.238],
                        27: [1.285, 0, 1.285],
                        28: [1.333, 0, 1.333],
                        29: [1.38, 0, 1.38],
                        30: [1.428, 0, 1.428],
                        31: [1.476, 0, 1.476],
                        32: [1.523, 0, 1.523],
                        33: [1.571, 0, 1.571],
                        34: [1.618, 0, 1.618],
                        35: [1.666, 0, 1.666],
                        36: [1.714, 0, 1.714],
                        37: [1.761, 0, 1.761],
                        38: [1.809, 0, 1.809],
                        39: [1.856, 0, 1.856],
                        40: [1.904, 0, 1.904],
                        41: [1.952, 0, 1.952],
                        42: [1.999, 0, 1.999],
                        43: [2.047, 0, 2.047],
                        44: [2.094, 0, 2.094],
                        45: [2.142, 0, 2.142],
                        46: [2.19, 0, 2.19],
                        47: [2.237, 0, 2.237],
                        48: [2.285, 0, 2.285],
                        49: [2.332, 0, 2.332],
                        50: [2.38, 0, 2.38],
                        51: [2.428, 0, 2.428],
                        52: [2.475, 0, 2.475],
                        53: [2.523, 0, 2.523],
                        54: [2.57, 0, 2.57],
                        55: [2.618, 0, 2.618],
                        56: [2.666, 0, 2.666],
                        57: [2.713, 0, 2.713],
                        58: [2.761, 0, 2.761],
                        59: [2.808, 0, 2.808],
                        60: [2.856, 0, 2.856],
                        61: [2.904, 0, 2.904],
                        62: [2.951, 0, 2.951],
                        63: [2.999, 0, 2.999],
                        64: [3.046, 0, 3.046],
                        65: [3.094, 0, 3.094],
                        66: [3.142, 0, 3.142],
                        67: [3.189, 0, 3.189],
                        68: [3.237, 0, 3.237],
                        69: [3.284, 0, 3.284],
                        70: [3.332, 0, 3.332],
                        71: [3.38, 0, 3.38],
                        72: [3.427, 0, 3.427],
                        73: [3.475, 0, 3.475],
                        74: [3.522, 0, 3.522],
                        75: [3.57, 0, 3.57],
                        76: [3.618, 0, 3.618],
                        77: [3.665, 0, 3.665],
                        78: [3.713, 0, 3.713],
                        79: [3.76, 0, 3.76],
                        80: [3.808, 0, 3.808],
                        81: [3.856, 0, 3.856],
                        82: [3.903, 0, 3.903],
                        83: [3.951, 0, 3.951],
                        84: [3.998, 0, 3.998],
                        85: [4.046, 0, 4.046],
                        86: [4.094, 0, 4.094],
                        87: [4.141, 0, 4.141],
                        88: [4.189, 0, 4.189],
                        89: [4.236, 0, 4.236],
                        90: [4.284, 0, 4.284],
                        91: [4.332, 0, 4.332],
                        92: [4.379, 0, 4.379],
                        93: [4.427, 0, 4.427],
                        94: [4.474, 0, 4.474],
                        95: [4.522, 0, 4.522],
                        96: [4.57, 0, 4.57],
                        97: [4.617, 0, 4.617],
                        98: [4.665, 0, 4.665],
                        99: [4.712, 0, 4.712],
                        100: [4.76, 0, 4.76],
                        101: [4.808, 0, 4.808],
                        102: [4.855, 0, 4.855],
                        103: [4.903, 0, 4.903],
                        104: [4.95, 0, 4.95],
                        105: [4.998, 0, 4.998],
                        106: [5.046, 0, 5.046],
                        107: [5.093, 0, 5.093],
                        108: [5.141, 0, 5.141],
                        109: [5.188, 0, 5.188],
                        110: [5.236, 0, 5.236],
                        111: [5.284, 0, 5.284],
                        112: [5.331, 0, 5.331],
                        113: [5.379, 0, 5.379],
                        114: [5.426, 0, 5.426],
                        115: [5.474, 0, 5.474],
                        116: [5.522, 0, 5.522],
                        117: [5.569, 0, 5.569],
                        118: [5.617, 0, 5.617],
                        119: [5.664, 0, 5.664],
                        120: [5.712, 0, 5.712],
                        121: [5.76, 0, 5.76],
                        122: [5.807, 0, 5.807],
                        123: [5.855, 0, 5.855],
                        124: [5.902, 0, 5.902],
                        125: [5.95, 0, 5.95],
                        126: [5.998, 0, 5.998],
                        127: [6.045, 0, 6.045],
                        128: [6.093, 0, 6.093],
                        129: [6.14, 0, 6.14],
                        130: [6.188, 0, 6.188],
                        131: [6.236, 0, 6.236],
                        132: [6.283, 0, 6.283]
                    }, this.camRotWorld1.PosAnim = {
                        duration: 111,
                        frameRate: 24,
                        1: [-0.729, 12.766, -36.205],
                        2: [-0.714, 13.104, -37.062],
                        3: [-0.738, 13.436, -37.797],
                        4: [-0.697, 13.72, -38.585],
                        5: [-0.709, 14.034, -39.359],
                        6: [-0.788, 14.423, -40.116],
                        7: [-0.838, 14.835, -41.003],
                        8: [-0.953, 15.296, -41.847],
                        9: [-1.044, 15.659, -42.7],
                        10: [-1.113, 16.067, -43.57],
                        11: [-1.156, 16.35, -44.408],
                        12: [-1.216, 16.744, -45.262],
                        13: [-1.262, 17.11, -46.128],
                        14: [-1.262, 17.398, -46.943],
                        15: [-1.315, 17.579, -47.824],
                        16: [-1.348, 17.839, -48.674],
                        17: [-1.412, 18.115, -49.549],
                        18: [-1.519, 18.322, -50.411],
                        19: [-1.516, 18.481, -51.228],
                        20: [-1.556, 18.654, -52.127],
                        21: [-1.615, 18.82, -52.93],
                        22: [-1.672, 18.968, -53.856],
                        23: [-1.717, 19.154, -54.812],
                        24: [-1.757, 19.33, -55.659],
                        25: [-1.807, 19.448, -56.626],
                        26: [-1.824, 19.631, -57.523],
                        27: [-1.836, 19.802, -58.378],
                        28: [-1.89, 19.968, -59.303],
                        29: [-1.908, 20.122, -60.224],
                        30: [-1.951, 20.289, -61.156],
                        31: [-1.986, 20.481, -62.092],
                        32: [-1.976, 20.722, -62.951],
                        33: [-2.011, 20.999, -63.799],
                        34: [-2.049, 21.191, -64.835],
                        35: [-2.094, 21.383, -65.792],
                        36: [-2.114, 21.652, -66.782],
                        37: [-2.133, 21.936, -67.703],
                        38: [-2.228, 22.162, -68.691],
                        39: [-2.27, 22.437, -69.672],
                        40: [-2.28, 22.682, -70.683],
                        41: [-2.283, 22.968, -71.54],
                        42: [-2.248, 23.275, -72.405],
                        43: [-2.267, 23.515, -73.378],
                        44: [-2.323, 23.714, -74.375],
                        45: [-2.34, 23.983, -75.279],
                        46: [-2.357, 24.236, -76.245],
                        47: [-2.406, 24.437, -77.298],
                        48: [-2.452, 24.662, -78.277],
                        49: [-2.482, 24.901, -79.306],
                        50: [-2.544, 25.143, -80.329],
                        51: [-2.532, 25.42, -81.297],
                        52: [-2.659, 25.695, -82.412],
                        53: [-2.68, 25.985, -83.371],
                        54: [-2.606, 26.277, -84.341],
                        55: [-2.573, 26.652, -85.23],
                        56: [-2.655, 26.956, -86.327],
                        57: [-2.628, 27.328, -87.306],
                        58: [-2.626, 27.665, -88.387],
                        59: [-2.562, 28.006, -89.414],
                        60: [-2.659, 28.354, -90.621],
                        61: [-2.587, 28.789, -91.625],
                        62: [-2.485, 29.185, -92.665],
                        63: [-2.585, 29.453, -93.809],
                        64: [-2.534, 29.796, -94.904],
                        65: [-2.46, 30.176, -96.027],
                        66: [-2.051, 30.695, -96.848],
                        67: [-1.843, 31.056, -97.87],
                        68: [-1.491, 31.744, -99.328],
                        69: [-0.671, 32.932, -100.259],
                        70: [-1.046, 33.16, -101.29],
                        71: [-1.04, 34.01, -102.262],
                        72: [-1.101, 33.913, -103.669],
                        73: [-1.073, 34.355, -104.925],
                        74: [-0.754, 34.785, -106.021],
                        75: [-0.677, 34.862, -107.22],
                        76: [-0.601, 34.938, -108.394],
                        77: [-0.527, 35.013, -109.549],
                        78: [-0.453, 35.086, -110.689],
                        79: [-0.381, 35.159, -111.814],
                        80: [-0.309, 35.231, -112.924],
                        81: [-0.238, 35.301, -114.019],
                        82: [-0.169, 35.371, -115.101],
                        83: [-0.1, 35.44, -116.167],
                        84: [-0.032, 35.508, -117.22],
                        85: [0.035, 35.575, -118.257],
                        86: [0.101, 35.641, -119.28],
                        87: [0.166, 35.706, -120.287],
                        88: [0.23, 35.769, -121.278],
                        89: [0.293, 35.832, -122.253],
                        90: [0.355, 35.894, -123.211],
                        91: [0.415, 35.955, -124.151],
                        92: [0.475, 36.014, -125.073],
                        93: [0.533, 36.073, -125.976],
                        94: [0.59, 36.13, -126.859],
                        95: [0.645, 36.185, -127.72],
                        96: [0.7, 36.239, -128.56],
                        97: [0.752, 36.292, -129.376],
                        98: [0.803, 36.343, -130.167],
                        99: [0.853, 36.392, -130.932],
                        100: [0.9, 36.44, -131.668],
                        101: [0.946, 36.485, -132.375],
                        102: [0.989, 36.529, -133.048],
                        103: [1.03, 36.57, -133.685],
                        104: [1.069, 36.609, -134.284],
                        105: [1.105, 36.644, -134.841],
                        106: [1.138, 36.677, -135.35],
                        107: [1.167, 36.707, -135.808],
                        108: [1.193, 36.733, -136.207],
                        109: [1.214, 36.754, -136.539],
                        110: [1.231, 36.771, -136.795],
                        111: [1.242, 36.781, -136.961],
                        112: [1.246, 36.785, -137.021]
                    }, this.cameraRig1.ScaleAnim = {
                        value: "null"
                    }, this.cameraRig1.RotAnim = {
                        duration: 111,
                        frameRate: 24,
                        1: [0.005, -0.006, 0.006],
                        2: [0.005, -0.006, 0.006],
                        3: [0.005, -0.007, 0.006],
                        4: [0.005, -0.006, 0.006],
                        5: [0.005, -0.006, 0.006],
                        6: [0.005, -0.006, 0.006],
                        7: [0.005, -0.007, 0.006],
                        8: [0.005, -0.008, 0.007],
                        9: [0.005, -0.008, 0.007],
                        10: [0.004, -0.008, 0.007],
                        11: [0.005, -0.007, 0.007],
                        12: [0.005, -0.008, 0.008],
                        13: [0.004, -0.008, 0.008],
                        14: [0.004, -0.008, 0.008],
                        15: [0.004, -0.007, 0.007],
                        16: [0.004, -0.008, 0.007],
                        17: [0.004, -0.008, 0.007],
                        18: [0.004, -0.008, 0.007],
                        19: [0.004, -0.007, 0.007],
                        20: [0.004, -0.007, 0.007],
                        21: [0.004, -0.007, 0.007],
                        22: [0.004, -0.007, 0.007],
                        23: [0.004, -0.007, 0.007],
                        24: [0.004, -0.007, 0.007],
                        25: [0.004, -0.007, 0.006],
                        26: [0.004, -0.008, 0.006],
                        27: [0.004, -0.008, 0.006],
                        28: [0.005, -0.008, 0.006],
                        29: [0.005, -0.007, 0.006],
                        30: [0.004, -0.007, 0.006],
                        31: [0.004, -0.007, 0.007],
                        32: [0.004, -0.007, 0.006],
                        33: [0.004, -0.007, 0.006],
                        34: [0.004, -0.007, 0.006],
                        35: [0.004, -0.007, 0.006],
                        36: [0.005, -0.007, 0.006],
                        37: [0.005, -0.007, 0.006],
                        38: [0.004, -0.007, 0.007],
                        39: [0.004, -0.007, 0.007],
                        40: [0.004, -0.007, 0.007],
                        41: [0.004, -0.008, 0.007],
                        42: [0.004, -0.008, 0.007],
                        43: [0.004, -0.008, 0.008],
                        44: [0.004, -0.008, 0.008],
                        45: [0.004, -0.008, 0.008],
                        46: [0.003, -0.008, 0.007],
                        47: [0.003, -0.007, 0.007],
                        48: [0.003, -0.007, 0.007],
                        49: [0.003, -0.007, 0.008],
                        50: [0.003, -0.008, 0.008],
                        51: [0.003, -0.008, 0.008],
                        52: [0.003, -0.008, 0.009],
                        53: [0.003, -0.008, 0.009],
                        54: [0.004, -0.008, 0.008],
                        55: [0.003, -0.008, 0.008],
                        56: [0.003, -0.008, 0.008],
                        57: [0.003, -0.008, 0.009],
                        58: [0.004, -0.008, 0.01],
                        59: [0.004, -0.008, 0.009],
                        60: [0.004, -0.009, 0.01],
                        61: [0.004, -0.009, 0.01],
                        62: [0.004, -0.009, 0.01],
                        63: [0.004, -0.009, 0.01],
                        64: [0.004, -0.009, 0.011],
                        65: [0.004, -0.009, 0.011],
                        66: [0.005, -0.01, 0.011],
                        67: [0.006, -0.01, 0.011],
                        68: [0.007, -0.011, 0.01],
                        69: [0.008, -0.012, 0.01],
                        70: [0.007, -0.012, 0.01],
                        71: [0.007, -0.013, 0.01],
                        72: [0.008, -0.012, 0.01],
                        73: [0.008, -0.012, 0.01],
                        74: [0.008, -0.012, 0.01],
                        75: [-0.018, 0.001, 0.01],
                        76: [-0.044, 0.013, 0.01],
                        77: [-0.069, 0.026, 0.01],
                        78: [-0.094, 0.038, 0.01],
                        79: [-0.119, 0.05, 0.01],
                        80: [-0.143, 0.062, 0.01],
                        81: [-0.167, 0.073, 0.01],
                        82: [-0.191, 0.085, 0.01],
                        83: [-0.215, 0.096, 0.01],
                        84: [-0.238, 0.108, 0.01],
                        85: [-0.26, 0.119, 0.01],
                        86: [-0.283, 0.13, 0.01],
                        87: [-0.305, 0.141, 0.01],
                        88: [-0.327, 0.151, 0.01],
                        89: [-0.348, 0.162, 0.01],
                        90: [-0.369, 0.172, 0.01],
                        91: [-0.39, 0.182, 0.01],
                        92: [-0.41, 0.192, 0.01],
                        93: [-0.43, 0.201, 0.01],
                        94: [-0.449, 0.211, 0.01],
                        95: [-0.468, 0.22, 0.01],
                        96: [-0.487, 0.229, 0.01],
                        97: [-0.505, 0.238, 0.01],
                        98: [-0.522, 0.246, 0.01],
                        99: [-0.539, 0.254, 0.01],
                        100: [-0.555, 0.262, 0.01],
                        101: [-0.57, 0.27, 0.01],
                        102: [-0.585, 0.277, 0.01],
                        103: [-0.599, 0.284, 0.01],
                        104: [-0.612, 0.29, 0.01],
                        105: [-0.625, 0.296, 0.01],
                        106: [-0.636, 0.302, 0.01],
                        107: [-0.646, 0.307, 0.01],
                        108: [-0.655, 0.311, 0.01],
                        109: [-0.662, 0.314, 0.01],
                        110: [-0.667, 0.317, 0.01],
                        111: [-0.671, 0.319, 0.01],
                        112: [-0.672, 0.32, 0.01]
                    }, this.camRotWorld2.PosAnim = {
                        value: "null"
                    }, this.cameraRig2.ScaleAnim = {
                        value: "null"
                    }, this.cameraRig2.RotAnim = {
                        duration: 48,
                        frameRate: 24,
                        0: [-2.359, 0.091, -0],
                        1: [-2.358, 0.09, -0],
                        2: [-2.357, 0.09, -0],
                        3: [-2.356, 0.089, -0],
                        4: [-2.354, 0.089, -0],
                        5: [-2.353, 0.089, -0],
                        6: [-2.352, 0.088, -0],
                        7: [-2.35, 0.088, -0],
                        8: [-2.349, 0.087, -0],
                        9: [-2.348, 0.087, -0],
                        10: [-2.346, 0.087, -0],
                        11: [-2.345, 0.086, -0],
                        12: [-2.344, 0.086, -0],
                        13: [-2.342, 0.086, -0],
                        14: [-2.341, 0.085, -0],
                        15: [-2.339, 0.085, -0],
                        16: [-2.338, 0.085, -0],
                        17: [-2.336, 0.085, -0],
                        18: [-2.335, 0.084, -0],
                        19: [-2.334, 0.084, -0],
                        20: [-2.332, 0.084, -0],
                        21: [-2.331, 0.084, -0],
                        22: [-2.329, 0.083, -0],
                        23: [-2.328, 0.083, -0],
                        24: [-2.326, 0.083, -0],
                        25: [-2.325, 0.083, -0],
                        26: [-2.323, 0.083, -0],
                        27: [-2.322, 0.082, -0],
                        28: [-2.32, 0.082, -0],
                        29: [-2.319, 0.082, -0],
                        30: [-2.317, 0.082, -0],
                        31: [-2.316, 0.082, -0],
                        32: [-2.314, 0.082, -0],
                        33: [-2.313, 0.081, -0],
                        34: [-2.311, 0.081, -0],
                        35: [-2.31, 0.081, -0],
                        36: [-2.308, 0.081, -0],
                        37: [-2.307, 0.081, -0],
                        38: [-2.305, 0.08, -0],
                        39: [-2.303, 0.08, -0],
                        40: [-2.302, 0.08, -0],
                        41: [-2.3, 0.08, -0],
                        42: [-2.299, 0.08, -0],
                        43: [-2.297, 0.08, -0],
                        44: [-2.296, 0.079, -0],
                        45: [-2.294, 0.079, -0],
                        46: [-2.293, 0.079, -0],
                        47: [-2.291, 0.079, -0],
                        48: [-2.29, 0.079, -0]
                    }, this.camRotWorld3.PosAnim = {
                        duration: 97,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0.701, 0.051, -0.826],
                        2: [1.401, 0.106, -1.652],
                        3: [2.101, 0.167, -2.48],
                        4: [2.799, 0.233, -3.313],
                        5: [3.496, 0.305, -4.153],
                        6: [4.191, 0.384, -5.006],
                        7: [4.884, 0.471, -5.881],
                        8: [5.572, 0.565, -6.787],
                        9: [6.255, 0.67, -7.73],
                        10: [6.932, 0.786, -8.712],
                        11: [7.608, 0.917, -9.728],
                        12: [8.29, 1.067, -10.769],
                        13: [8.977, 1.245, -11.828],
                        14: [9.668, 1.471, -12.899],
                        15: [10.372, 1.842, -14.015],
                        16: [11.092, 2.302, -15.195],
                        17: [11.825, 2.798, -16.422],
                        18: [12.565, 3.317, -17.682],
                        19: [13.309, 3.852, -18.966],
                        20: [14.056, 4.399, -20.269],
                        21: [14.803, 4.957, -21.583],
                        22: [15.549, 5.525, -22.905],
                        23: [16.292, 6.1, -24.23],
                        24: [17.032, 6.684, -25.555],
                        25: [17.766, 7.276, -26.876],
                        26: [18.492, 7.875, -28.189],
                        27: [19.21, 8.482, -29.49],
                        28: [19.917, 9.098, -30.776],
                        29: [20.61, 9.722, -32.04],
                        30: [21.288, 10.356, -33.278],
                        31: [21.946, 11.002, -34.482],
                        32: [22.579, 11.661, -35.641],
                        33: [23.182, 12.337, -36.744],
                        34: [23.743, 13.034, -37.77],
                        35: [24.249, 13.765, -38.691],
                        36: [24.722, 14.528, -39.526],
                        37: [25.197, 15.315, -40.317],
                        38: [25.662, 16.13, -41.044],
                        39: [26.1, 16.974, -41.69],
                        40: [26.487, 17.85, -42.236],
                        41: [26.802, 18.758, -42.683],
                        42: [27.036, 19.696, -43.05],
                        43: [27.198, 20.66, -43.367],
                        44: [27.304, 21.646, -43.662],
                        45: [27.371, 22.646, -43.95],
                        46: [27.409, 23.654, -44.244],
                        47: [27.428, 24.664, -44.547],
                        48: [27.434, 25.673, -44.862],
                        49: [27.41, 26.467, -45.326],
                        50: [27.355, 27.052, -45.79],
                        51: [27.282, 27.539, -46.255],
                        52: [27.197, 27.967, -46.72],
                        53: [27.104, 28.352, -47.185],
                        54: [27.004, 28.705, -47.65],
                        55: [26.899, 29.033, -48.115],
                        56: [26.791, 29.34, -48.579],
                        57: [26.68, 29.629, -49.042],
                        58: [26.566, 29.904, -49.503],
                        59: [26.451, 30.165, -49.964],
                        60: [26.335, 30.415, -50.422],
                        61: [26.218, 30.654, -50.878],
                        62: [26.101, 30.883, -51.331],
                        63: [25.983, 31.103, -51.781],
                        64: [25.865, 31.315, -52.227],
                        65: [25.747, 31.519, -52.669],
                        66: [25.63, 31.716, -53.106],
                        67: [25.513, 31.906, -53.537],
                        68: [25.397, 32.089, -53.962],
                        69: [25.282, 32.267, -54.38],
                        70: [25.168, 32.438, -54.79],
                        71: [25.055, 32.603, -55.192],
                        72: [24.944, 32.763, -55.584],
                        73: [24.833, 32.918, -55.966],
                        74: [24.725, 33.067, -56.337],
                        75: [24.618, 33.211, -56.696],
                        76: [24.514, 33.349, -57.042],
                        77: [24.411, 33.483, -57.375],
                        78: [24.311, 33.611, -57.693],
                        79: [24.213, 33.735, -57.996],
                        80: [24.117, 33.853, -58.283],
                        81: [24.025, 33.966, -58.553],
                        82: [23.935, 34.074, -58.807],
                        83: [23.848, 34.177, -59.043],
                        84: [23.765, 34.275, -59.262],
                        85: [23.686, 34.367, -59.462],
                        86: [23.61, 34.454, -59.645],
                        87: [23.539, 34.535, -59.81],
                        88: [23.472, 34.61, -59.957],
                        89: [23.41, 34.679, -60.087],
                        90: [23.353, 34.741, -60.199],
                        91: [23.301, 34.797, -60.295],
                        92: [23.256, 34.846, -60.374],
                        93: [23.217, 34.888, -60.437],
                        94: [23.186, 34.922, -60.486],
                        95: [23.162, 34.946, -60.519],
                        96: [23.148, 34.962, -60.539],
                        97: [23.142, 34.968, -60.546]
                    }, this.cameraRig3.ScaleAnim = {
                        value: "null"
                    }, this.cameraRig3.RotAnim = {
                        duration: 97,
                        frameRate: 24,
                        0: [0, 0, -0],
                        1: [0, 0, -0],
                        2: [0, 0, -0],
                        3: [0, 0, -0],
                        4: [0, 0, -0],
                        5: [0, 0, -0],
                        6: [0, 0, -0],
                        7: [0, 0, -0],
                        8: [0, 0, -0],
                        9: [0, 0, -0],
                        10: [0, 0, -0],
                        11: [-0.001, 0, -0],
                        12: [-0.001, 0, -0],
                        13: [-0.001, 0, -0],
                        14: [-0.001, 0, -0],
                        15: [-0.001, 0, -0],
                        16: [-0.001, 0, -0],
                        17: [-0.001, 0, -0],
                        18: [-0.001, 0, -0],
                        19: [-0.002, 0, -0],
                        20: [-0.002, 0, -0],
                        21: [-0.002, 0, -0],
                        22: [-0.002, 0, -0],
                        23: [-0.002, 0, -0],
                        24: [-0.002, 0, -0],
                        25: [-0.003, 0, -0],
                        26: [-0.003, 0, -0],
                        27: [-0.003, 0, -0],
                        28: [-0.003, 0, -0],
                        29: [-0.003, 0, -0],
                        30: [-0.004, 0, -0],
                        31: [-0.004, 0, -0],
                        32: [-0.004, 0, -0],
                        33: [-0.004, 0, -0],
                        34: [-0.004, 0, -0],
                        35: [-0.004, 0, -0],
                        36: [-0.004, 0, -0],
                        37: [-0.005, 0, -0],
                        38: [-0.005, 0, -0],
                        39: [-0.005, 0, -0],
                        40: [-0.005, 0, -0],
                        41: [-0.005, 0, -0],
                        42: [-0.005, 0, -0],
                        43: [-0.005, 0, -0],
                        44: [-0.005, 0, -0],
                        45: [-0.005, 0.001, -0],
                        46: [-0.005, 0.001, -0],
                        47: [-0.005, 0.001, -0],
                        48: [-0.005, 0.001, -0],
                        49: [-0.005, 0.002, -0],
                        50: [-0.005, 0.002, -0],
                        51: [-0.005, 0.003, 0.001],
                        52: [-0.005, 0.003, 0.001],
                        53: [-0.005, 0.004, 0.001],
                        54: [-0.004, 0.005, 0.002],
                        55: [-0.004, 0.005, 0.002],
                        56: [-0.004, 0.006, 0.003],
                        57: [-0.003, 0.007, 0.004],
                        58: [-0.003, 0.008, 0.005],
                        59: [-0.003, 0.009, 0.005],
                        60: [-0.002, 0.011, 0.006],
                        61: [-0.002, 0.012, 0.007],
                        62: [-0.001, 0.013, 0.008],
                        63: [-0.001, 0.015, 0.009],
                        64: [0, 0.017, 0.01],
                        65: [0, 0.019, 0.011],
                        66: [0.001, 0.021, 0.012],
                        67: [0.001, 0.023, 0.013],
                        68: [0.002, 0.025, 0.014],
                        69: [0.002, 0.028, 0.015],
                        70: [0.003, 0.03, 0.016],
                        71: [0.003, 0.033, 0.017],
                        72: [0.004, 0.036, 0.018],
                        73: [0.004, 0.039, 0.019],
                        74: [0.005, 0.043, 0.02],
                        75: [0.005, 0.047, 0.021],
                        76: [0.006, 0.051, 0.022],
                        77: [0.006, 0.055, 0.023],
                        78: [0.007, 0.059, 0.024],
                        79: [0.007, 0.064, 0.025],
                        80: [0.008, 0.069, 0.026],
                        81: [0.008, 0.074, 0.027],
                        82: [0.009, 0.08, 0.028],
                        83: [0.009, 0.085, 0.028],
                        84: [0.009, 0.09, 0.029],
                        85: [0.01, 0.095, 0.03],
                        86: [0.01, 0.1, 0.031],
                        87: [0.01, 0.104, 0.031],
                        88: [0.011, 0.108, 0.032],
                        89: [0.011, 0.112, 0.033],
                        90: [0.011, 0.115, 0.033],
                        91: [0.012, 0.117, 0.034],
                        92: [0.012, 0.119, 0.034],
                        93: [0.012, 0.121, 0.034],
                        94: [0.012, 0.122, 0.035],
                        95: [0.012, 0.123, 0.035],
                        96: [0.012, 0.123, 0.035],
                        97: [0.012, 0.123, 0.035]
                    }, e.scene.add(this.mesh, this.Magma_2AnimRig, this.MagmaAnimRig, this.Magma_1AnimRig, this.Magma5AnimRig, this.Magma4AnimRig, this.Magma3AnimRig, this.Magma2AnimRig, this.Magma1AnimRig, this.Level0Cam, this.Level1Cam, this.Level1Cam, this.Level2Cam, this.Level2Cam, this.Ambient, this.BlueGlobal)
                }
            }, {
                key: "animateValue",
                value: function (t, e, i, n, r, s) {
                    function o() {
                        var t = (new Date).getTime(),
                            m = Math.max((f - t) / n, 0),
                            v = Math.round(i - m * a);
                        s["LightLevel" + p.state].intensity = v / 100, v == i && (clearInterval(d), e = i, i = P.getRandomNumber(100 * r + 80, 100 * r - 80), n = P.getRandomNumber(2000, 500), a = i - e, l = n / a, c = Math.abs(Math.floor(l)), c = Math.max(c, u), h = (new Date).getTime(), f = h + n, d = setInterval(o, c))
                    }
                    var a = i - e,
                        l = n / a,
                        u = 10,
                        c = Math.abs(Math.floor(l));
                    c = Math.max(c, u);
                    var h = (new Date).getTime(),
                        f = h + n,
                        d = void 0,
                        p = this;
                    d = setInterval(o, c), o()
                }
            }, {
                key: "init",
                value: function () {
                    var t = this;
                    this.renderer.physicallyBasedShading = !0, this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.soft = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, this.renderer.setClearColor(4605510, 0), this.body = document.getElementsByTagName("body")[0], this.camera2triggerAnimation = new P.triggerAnim("level2", this.scene, this.canvasEl, this.levels.camRotWorld3, this.levels.camRotWorld3.PosAnim, this.levels.cameraRig3.ScaleAnim, this.levels.cameraRig3.RotAnim, this.levels.Camera, (!0), (!1), [!1], (!1), (!0), (!0)), this.levelSwitch = [];
                    var e = document.querySelector(".levels--tracker--depth--js"),
                        i = document.querySelector(".levels--tracker--temp--js"),
                        n = {
                            tempLower: 10,
                            tempUpper: 15,
                            elevation: 50
                        },
                        r = [{
                            tempLower: 15,
                            tempUpper: 37,
                            elevation: 0
                        }, {
                            tempLower: 20,
                            tempUpper: 80,
                            elevation: -250
                        }, {
                            tempLower: 45,
                            tempUpper: 1100,
                            elevation: -425
                        }];
                    var s = a(this.canvas, ".levels--title--caption--conclusion", ".levels--title--caption--intro", ".levels--title--asset", {
                        onComplete: function () {
                            t.overrideProgress = !1, t.timeline.pause()
                        }
                    });
                    this.timeline = s, this.lockEventProgress = s.getLabelTime("lockEvent") / s.totalDuration(), this.assetFocusedProgress = s.getLabelTime("assetFocused") / s.totalDuration(), this.navStartProgress = s.getLabelTime("navStart") / s.totalDuration(), this.triggers = [{
                        atProgress: 0.3,
                        duration: 0.5,
                        timeline: s
                    }];
                    var o = 2;
                    this.level = this.levelSwitch[o], this.scene.add(this.level[2]), this.canvasEl.dispatchEvent(this["level" + o + "Event"]), this.canvasEl.addEventListener("mouseDownCustom", function () {
                        t.fadedOut && (t.annotationContainers[t.state].classList.add("show"), t.hideTitle(), t["level" + t.state + "AnnoOn"] = !0)
                    }), this.canvasEl.addEventListener("keypress", function (e) {
                        if ("q" == e.key) {
                            for (var i = 0; i < t.level[2].children.length; i++) {
                                "Object3D" == t.level[2].children[i].type && (t.level[2].children[i].children[0].children[0].children[0] ? t.level[2].children[i].children[0].children[0].children[0].material.opacity = 0 : t.level[2].children[i].children[0].children[0].material.opacity = 0, t.level[2].children[i].children[0].children[1].material.opacity = 0)
                            }
                            t.scene.remove(t.levelSwitch[o][2]), 0 == o ? o = 2 : o -= 1, t.level = t.levelSwitch[o], t.scene.add(t.levelSwitch[o][2]), t.levelSwitch[o][1].rotation.set(0, 0, 0), t.levelSwitch[o][1].children[0].rotation.set(0, 0, 0), 0 == o && t.canvasEl.dispatchEvent(t.level0Event), 1 == o && t.canvasEl.dispatchEvent(t.level1Event), 2 == o && t.canvasEl.dispatchEvent(t.level2Event)
                        }
                    }), this.addMouseHandler(this.canvasEl);
                    var l = this.levels.LightLevel2.intensity,
                        c = 100 * l + 50,
                        h = 100 * l - 50,
                        f = 1000;
                    this.animateValue(this.levels.LightLevel2.intensity, c, h, f, l, this.levels), this.renderer.render(this.scene, this.level[0])
                }
            }, {
                key: "addAnnotations",
                value: function (t, e, i, n) {
                    var r = document.createElement("div");
                    if (r.className = n.hotspot ? "hotspot-label" : "text-label", r.style.position = "absolute", r.style.width = n.width, r.style.height = n.height, r.innerHTML = n.text, r.style.top = -1000, r.style.left = -1000, !n.hotspot && n.description) {
                        var s = document.createElement("div");
                        s.className = "levels--annotation--content";
                        var o = "<h5>" + n.text + "</h5>\n                                 <p>" + n.description + "</p>";
                        s.insertAdjacentHTML("beforeend", o), r.appendChild(s), r.addEventListener("mouseover", function () {
                            t.canvas.classList.contains("annotations--content--enter") || t.canvas.classList.add("annotations--content--enter")
                        }), r.addEventListener("mouseout", function () {
                            t.canvas.classList.contains("annotations--content--enter") && t.canvas.classList.remove("annotations--content--enter")
                        })
                    }
                    return {
                        element: r,
                        parent: i,
                        position: new THREE.Vector3(0, 0, 0),
                        updatePosition: function () {
                            this.position.copy(this.parent.position);
                            var t = this.get2DCoords(this.position, e);
                            this.element.style.left = t.x + "px", this.element.style.top = t.y - n.posAdj + "px"
                        },
                        get2DCoords: function (t, e) {
                            var i = t.project(e);
                            return i.x = (i.x + 1) / 2 * window.innerWidth, i.y = -(i.y - 1) / 2 * window.innerHeight, i
                        }
                    }
                }
            }, {
                key: "playVideo",
                value: function () {
                    x.hasTouch() || (this.canMove = !1, this.videos[2].play())
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1, this.level && this.render()
                }
            }, {
                key: "nextState",
                value: function e() {
                    var t = this;
                    if (this.objNeedsRender = !1, this.buttons[this.state].classList.remove("fade-in"), 0 == this.state) {
                        return this.canLock = !1, this.body.classList.remove("modal--lock"), v.scrollTo(this.canvas.offsetTop + window.outerHeight, 0), this.removeMouseWheelListener(), this.hideAllTitles(), this.canMove = !0, this.state = 2, this.handleSwitch(this.state), this.bar.animate(0), void window.setTimeout(function () {
                            t.canLock = !0
                        }, 500)
                    }
                    this.canMove = !1, this.canvas.classList.add("playing"), this.hideTitle();
                    var e = this.state - 1;
                    this.videos[e].play(), this.bar.animate(l(e), {
                        duration: this.sequenceTimesMs[2 - e]
                    }), document.querySelector(".levels--title--asset").classList.remove("fade-out"), document.querySelector("#level" + this.state + "-sequence-container").classList.add("fade-out"), document.querySelector("#level" + e + "-sequence-container").classList.remove("fade-out"), document.querySelector(".levels--object--container").classList.remove("fade-in"), this.fadedOut = !1, this.state--
                }
            }, {
                key: "previousState",
                value: function () {
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.body.classList.remove("modal--lock"), this.removeMouseWheelListener(), "undefined" != typeof this.timeout && window.clearTimeout(this.timeout), this.canMove = !0, this.hideAllTitles(), this.handleFade(this.state), this.state = 2, this.handleSwitch(this.state), this.fadedOut = !1, this.bar.animate(0)
                }
            }, {
                key: "addMouseWheelListener",
                value: function () {
                    this.listener = !0, window.addEventListener("wheel", this.wheelListener)
                }
            }, {
                key: "removeMouseWheelListener",
                value: function () {
                    this.listener = !1, window.removeEventListener("wheel", this.wheelListener)
                }
            }, {
                key: "setProgress",
                value: function (t) {
                    var e = this;
                    this.modalActive || (t <= -0.25 || t >= 1 ? this.shouldRender = !1 : this.shouldRender = !0, this.isReady && this.progress !== t && (t < 0 && this.level && this.previousState(!1), this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = (0, h["default"])((t - n) / r, 0, 1);
                        !e.overrideProgress && o < e.lockEventProgress && s.progress(o), o > e.lockEventProgress && !e.body.classList.contains("modal--lock") && e.canLock && (e.body.classList.add("modal--lock"), s.progress(1), e.listener || e.addMouseWheelListener()), o > e.assetFocusedProgress ? (e.canvas.classList.add("playing"), e.bar.animate(l(e.state), {
                            duration: e.sequenceTimesMs[2 - e.state]
                        }), e.playVideo()) : (e.body.classList.contains("modal--lock") && e.body.classList.remove("modal--lock"), e.videos[2].pause(), e.bar.animate(0), e.canvas.classList.remove("playing"), document.querySelector(".levels--title--asset").classList.remove("fade-out"), document.querySelector("#level2-sequence-container").classList.remove("fade-out"), document.querySelector(".levels--object--container").classList.remove("fade-in"), e.fadedOut = !1)
                    }), 1 === t && this.body.classList.contains("modal--lock") && this.body.classList.remove("modal--lock"), this.progress = t))
                }
            }, {
                key: "eType",
                value: function (t) {
                    var e = "undefined" != typeof t && this.mobile ? t.targetTouches[0] : null;
                    return t = "undefined" == typeof t ? null : t, this.mobile ? {
                        eStart: "touchstart",
                        eMove: "touchmove",
                        eOut: "touchleave",
                        eEnd: "touchend",
                        eOver: "touchmove",
                        eT: e
                    } : {
                        eStart: "mousedown",
                        eMove: "mousemove",
                        eOut: "mouseout",
                        eEnd: "mouseup",
                        eOver: "mouseover",
                        eT: t
                    }
                }
            }, {
                key: "onMouseDown",
                value: function (t) {
                    t.preventDefault(), t = this.eType(t).eT, this.mouseDown = !0, this.mouseX = t.clientX, this.mouseY = t.clientY, this.canvasEl.dispatchEvent(this.mouseDownEvent)
                }
            }, {
                key: "onMouseUp",
                value: function (t) {
                    t.preventDefault(), t = this.eType(t).eT, this.mouseDown = !1, this.mouseUp = !0, this.canvasEl.dispatchEvent(this.mouseUpEvent), this.canvasEl.classList.contains("grabbing") && this.canvasEl.classList.remove("grabbing")
                }
            }, {
                key: "addMouseHandler",
                value: function (t) {
                    var e = this;
                    t.addEventListener(this.eType().eMove, function (t) {
                        e.onMouseMove(t)
                    }, !1), t.addEventListener(this.eType().eStart, function (t) {
                        e.onMouseDown(t)
                    }, !1), t.addEventListener(this.eType().eEnd, function (t) {
                        e.onMouseUp(t)
                    }, !1)
                }
            }, {
                key: "clamp",
                value: function (t, e, i) {
                    return Math.min(Math.max(t, e), i)
                }
            }, {
                key: "rotateScene",
                value: function (t, e, i, n, r, s) {
                    var o = i.children[0];
                    s && (e < -60 && (e = 0), o.rotation.x -= e / n, o.rotation.x = this.clamp(o.rotation.x, -Math.PI / 4, Math.PI / 4)), r && (t < -60 && (t = 0), i.rotation.y -= t / n, i.rotation.y = this.clamp(i.rotation.y, -Math.PI / 4, Math.PI / 4))
                }
            }, {
                key: "onMouseMove",
                value: function (t) {
                    if (this.mouseDown) {
                        this.canvasEl.classList.contains("grabbing") || this.canvasEl.classList.add("grabbing"), t.preventDefault();
                        var e = t.clientX - window.innerWidth / 2 - this.mouseX,
                            i = t.clientY - window.innerWidth / 2 - this.mouseY;
                        this.mouseX = t.clientX - window.innerWidth / 2, this.mouseY = t.clientY - window.innerWidth / 2, this.rotateScene(e, i, this.level[1], 500, !0, !0)
                    }
                }
            }, {
                key: "render",
                value: function () {
                    requestAnimationFrame(this.render.bind(this)), !this.paused && this.shouldRender && (this.levels.level2Array.map(function (t) {
                        t.updatePosition()
                    }), this.levels.level1Array.map(function (t) {
                        t.updatePosition()
                    }), this.levels.level0Array.map(function (t) {
                        t.updatePosition()
                    }), this.animTriggers[this.globalLevelTracker].isClicked && this.animTriggers[this.globalLevelTracker].animRun(), this.objNeedsRender && this.renderer.render(this.scene, this.level[0]))
                }
            }]), t
        }();
    e["default"] = j
}, function (t, e, i) {
    t.exports = {
        Line: i(200),
        Circle: i(205),
        SemiCircle: i(206),
        Path: i(202),
        Shape: i(201),
        utils: i(204)
    }
}, function (t, e, i) {
    var n = i(201),
        r = i(204),
        s = function (t, e) {
            this._pathTemplate = "M 0,{center} L 100,{center}", n.apply(this, arguments)
        };
    s.prototype = new n, s.prototype.constructor = s, s.prototype._initializeSvg = function (t, e) {
        t.setAttribute("viewBox", "0 0 100 " + e.strokeWidth), t.setAttribute("preserveAspectRatio", "none")
    }, s.prototype._pathString = function (t) {
        return r.render(this._pathTemplate, {
            center: t.strokeWidth / 2
        })
    }, s.prototype._trailString = function (t) {
        return this._pathString(t)
    }, t.exports = s
}, function (t, e, i) {
    var n = i(202),
        r = i(204),
        s = "Object is destroyed",
        o = function a(t, e) {
            if (!(this instanceof a)) {
                throw new Error("Constructor was called without new keyword")
            }
            if (0 !== arguments.length) {
                this._opts = r.extend({
                    color: "#555",
                    strokeWidth: 1,
                    trailColor: null,
                    trailWidth: null,
                    fill: null,
                    text: {
                        style: {
                            color: null,
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            padding: 0,
                            margin: 0,
                            transform: {
                                prefix: !0,
                                value: "translate(-50%, -50%)"
                            }
                        },
                        autoStyleContainer: !0,
                        alignToBottom: !0,
                        value: null,
                        className: "progressbar-text"
                    },
                    svgStyle: {
                        display: "block",
                        width: "100%"
                    },
                    warnings: !1
                }, e, !0), r.isObject(e) && void 0 !== e.svgStyle && (this._opts.svgStyle = e.svgStyle), r.isObject(e) && r.isObject(e.text) && void 0 !== e.text.style && (this._opts.text.style = e.text.style);
                var i, s = this._createSvgView(this._opts);
                if (i = r.isString(t) ? document.querySelector(t) : t, !i) {
                    throw new Error("Container does not exist: " + t)
                }
                this._container = i, this._container.appendChild(s.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && r.setStyles(s.svg, this._opts.svgStyle), this.svg = s.svg, this.path = s.path, this.trail = s.trail, this.text = null;
                var o = r.extend({
                    attachment: void 0,
                    shape: this
                }, this._opts);
                this._progressPath = new n(s.path, o), r.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
            }
        };
    o.prototype.animate = function (t, e, i) {
        if (null === this._progressPath) {
            throw new Error(s)
        }
        this._progressPath.animate(t, e, i)
    }, o.prototype.stop = function () {
        if (null === this._progressPath) {
            throw new Error(s)
        }
        void 0 !== this._progressPath && this._progressPath.stop()
    }, o.prototype.destroy = function () {
        if (null === this._progressPath) {
            throw new Error(s)
        }
        this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
    }, o.prototype.set = function (t) {
        if (null === this._progressPath) {
            throw new Error(s)
        }
        this._progressPath.set(t)
    }, o.prototype.value = function () {
        if (null === this._progressPath) {
            throw new Error(s)
        }
        return void 0 === this._progressPath ? 0 : this._progressPath.value()
    }, o.prototype.setText = function (t) {
        if (null === this._progressPath) {
            throw new Error(s)
        }
        null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), r.isObject(t) ? (r.removeChildren(this.text), this.text.appendChild(t)) : this.text.innerHTML = t
    }, o.prototype._createSvgView = function (t) {
        var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this._initializeSvg(e, t);
        var i = null;
        (t.trailColor || t.trailWidth) && (i = this._createTrail(t), e.appendChild(i));
        var n = this._createPath(t);
        return e.appendChild(n), {
            svg: e,
            path: n,
            trail: i
        }
    }, o.prototype._initializeSvg = function (t, e) {
        t.setAttribute("viewBox", "0 0 100 100")
    }, o.prototype._createPath = function (t) {
        var e = this._pathString(t);
        return this._createPathElement(e, t)
    }, o.prototype._createTrail = function (t) {
        var e = this._trailString(t),
            i = r.extend({}, t);
        return i.trailColor || (i.trailColor = "#eee"), i.trailWidth || (i.trailWidth = i.strokeWidth), i.color = i.trailColor, i.strokeWidth = i.trailWidth, i.fill = null, this._createPathElement(e, i)
    }, o.prototype._createPathElement = function (t, e) {
        var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return i.setAttribute("d", t), i.setAttribute("stroke", e.color), i.setAttribute("stroke-width", e.strokeWidth), e.fill ? i.setAttribute("fill", e.fill) : i.setAttribute("fill-opacity", "0"), i
    }, o.prototype._createTextContainer = function (t, e) {
        var i = document.createElement("div");
        i.className = t.text.className;
        var n = t.text.style;
        return n && (t.text.autoStyleContainer && (e.style.position = "relative"), r.setStyles(i, n), n.color || (i.style.color = t.color)), this._initializeTextContainer(t, e, i), i
    }, o.prototype._initializeTextContainer = function (t, e, i) {}, o.prototype._pathString = function (t) {
        throw new Error("Override this function for each progress bar")
    }, o.prototype._trailString = function (t) {
        throw new Error("Override this function for each progress bar")
    }, o.prototype._warnContainerAspectRatio = function (t) {
        if (this.containerAspectRatio) {
            var e = window.getComputedStyle(t, null),
                i = parseFloat(e.getPropertyValue("width"), 10),
                n = parseFloat(e.getPropertyValue("height"), 10);
            !r.floatEquals(this.containerAspectRatio, i / n)
        }
    }, t.exports = o
}, function (t, e, i) {
    var n = i(203),
        r = i(204),
        s = {
            easeIn: "easeInCubic",
            easeOut: "easeOutCubic",
            easeInOut: "easeInOutCubic"
        },
        o = function a(t, e) {
            if (!(this instanceof a)) {
                throw new Error("Constructor was called without new keyword")
            }
            e = r.extend({
                duration: 800,
                easing: "linear",
                from: {},
                to: {},
                step: function () {}
            }, e);
            var i;
            i = r.isString(t) ? document.querySelector(t) : t, this.path = i, this._opts = e, this._tweenable = null;
            var n = this.path.getTotalLength();
            this.path.style.strokeDasharray = n + " " + n, this.set(0)
        };
    o.prototype.value = function () {
        var t = this._getComputedDashOffset(),
            e = this.path.getTotalLength(),
            i = 1 - t / e;
        return parseFloat(i.toFixed(6), 10)
    }, o.prototype.set = function (t) {
        this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(t);
        var e = this._opts.step;
        if (r.isFunction(e)) {
            var i = this._easing(this._opts.easing),
                n = this._calculateTo(t, i),
                s = this._opts.shape || this;
            e(n, s, this._opts.attachment)
        }
    }, o.prototype.stop = function () {
        this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
    }, o.prototype.animate = function (t, e, i) {
        e = e || {}, r.isFunction(e) && (i = e, e = {});
        var s = r.extend({}, e),
            o = r.extend({}, this._opts);
        e = r.extend(o, e);
        var a = this._easing(e.easing),
            l = this._resolveFromAndTo(t, a, s);
        this.stop(), this.path.getBoundingClientRect();
        var u = this._getComputedDashOffset(),
            c = this._progressToOffset(t),
            h = this;
        this._tweenable = new n, this._tweenable.tween({
            from: r.extend({
                offset: u
            }, l.from),
            to: r.extend({
                offset: c
            }, l.to),
            duration: e.duration,
            easing: a,
            step: function (t) {
                h.path.style.strokeDashoffset = t.offset;
                var i = e.shape || h;
                e.step(t, i, e.attachment)
            },
            finish: function (t) {
                r.isFunction(i) && i()
            }
        })
    }, o.prototype._getComputedDashOffset = function () {
        var t = window.getComputedStyle(this.path, null);
        return parseFloat(t.getPropertyValue("stroke-dashoffset"), 10)
    }, o.prototype._progressToOffset = function (t) {
        var e = this.path.getTotalLength();
        return e - t * e
    }, o.prototype._resolveFromAndTo = function (t, e, i) {
        return i.from && i.to ? {
            from: i.from,
            to: i.to
        } : {
            from: this._calculateFrom(e),
            to: this._calculateTo(t, e)
        }
    }, o.prototype._calculateFrom = function (t) {
        return n.interpolate(this._opts.from, this._opts.to, this.value(), t)
    }, o.prototype._calculateTo = function (t, e) {
        return n.interpolate(this._opts.from, this._opts.to, t, e)
    }, o.prototype._stopTween = function () {
        null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
    }, o.prototype._easing = function (t) {
        return s.hasOwnProperty(t) ? s[t] : t
    }, t.exports = o
}, function (t, e, i) {
    (function () {
        var e = this || Function("return this")(),
            i = function () {
                function i() {}

                function n(t, e) {
                    var i;
                    for (i in t) {
                        Object.hasOwnProperty.call(t, i) && e(i)
                    }
                }

                function r(t, e) {
                    return n(e, function (i) {
                        t[i] = e[i]
                    }), t
                }

                function s(t, e) {
                    n(e, function (i) {
                        "undefined" == typeof t[i] && (t[i] = e[i])
                    })
                }

                function o(t, e, i, n, r, s, o) {
                    var l, u, c, h = t < s ? 0 : (t - s) / r;
                    for (l in e) {
                        e.hasOwnProperty(l) && (u = o[l], c = "function" == typeof u ? u : f[u], e[l] = a(i[l], n[l], c, h))
                    }
                    return e
                }

                function a(t, e, i, n) {
                    return t + (e - t) * i(n)
                }

                function l(t, e) {
                    var i = h.prototype.filter,
                        r = t._filterArgs;
                    n(i, function (n) {
                        "undefined" != typeof i[n][e] && i[n][e].apply(t, r)
                    })
                }

                function u(t, e, i, n, r, s, a, u, c, h, f) {
                    _ = e + i + n, w = Math.min(f || y(), _), b = w >= _, x = n - (_ - w), t.isPlaying() && (b ? (c(a, t._attachment, x), t.stop(!0)) : (t._scheduleId = h(t._timeoutHandler, v), l(t, "beforeTween"), w < e + i ? o(1, r, s, a, 1, 1, u) : o(w, r, s, a, n, e + i, u), l(t, "afterTween"), c(r, t._attachment, x)))
                }

                function c(t, e) {
                    var i = {},
                        r = typeof e;
                    return "string" === r || "function" === r ? n(t, function (t) {
                        i[t] = e
                    }) : n(t, function (t) {
                        i[t] || (i[t] = e[t] || p)
                    }), i
                }

                function h(t, e) {
                    this._currentState = t || {}, this._configured = !1, this._scheduleFunction = d, "undefined" != typeof e && this.setConfig(e)
                }
                var f, d, p = "linear",
                    m = 500,
                    v = 1000 / 60,
                    g = Date.now ? Date.now : function () {
                        return +new Date
                    },
                    y = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : g;
                d = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
                var _, w, b, x;
                return h.prototype.tween = function (t) {
                    return this._isTweening ? this : (void 0 === t && this._configured || this.setConfig(t), this._timestamp = y(), this._start(this.get(), this._attachment), this.resume())
                }, h.prototype.setConfig = function (t) {
                    t = t || {}, this._configured = !0, this._attachment = t.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = t.delay || 0, this._start = t.start || i, this._step = t.step || i, this._finish = t.finish || i, this._duration = t.duration || m, this._currentState = r({}, t.from || this.get()), this._originalState = this.get(), this._targetState = r({}, t.to || this.get());
                    var e = this;
                    this._timeoutHandler = function () {
                        u(e, e._timestamp, e._delay, e._duration, e._currentState, e._originalState, e._targetState, e._easing, e._step, e._scheduleFunction)
                    };
                    var n = this._currentState,
                        o = this._targetState;
                    return s(o, n), this._easing = c(n, t.easing || p), this._filterArgs = [n, this._originalState, o, this._easing], l(this, "tweenCreated"), this
                }, h.prototype.get = function () {
                    return r({}, this._currentState)
                }, h.prototype.set = function (t) {
                    this._currentState = t
                }, h.prototype.pause = function () {
                    return this._pausedAtTime = y(), this._isPaused = !0, this
                }, h.prototype.resume = function () {
                    return this._isPaused && (this._timestamp += y() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
                }, h.prototype.seek = function (t) {
                    t = Math.max(t, 0);
                    var e = y();
                    return this._timestamp + t === 0 ? this : (this._timestamp = e - t, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, u(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, e), this.pause()), this)
                }, h.prototype.stop = function (t) {
                    return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = i, (e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.oCancelAnimationFrame || e.msCancelAnimationFrame || e.mozCancelRequestAnimationFrame || e.clearTimeout)(this._scheduleId), t && (l(this, "beforeTween"), o(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), l(this, "afterTween"), l(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
                }, h.prototype.isPlaying = function () {
                    return this._isTweening && !this._isPaused
                }, h.prototype.setScheduleFunction = function (t) {
                    this._scheduleFunction = t
                }, h.prototype.dispose = function () {
                    var t;
                    for (t in this) {
                        this.hasOwnProperty(t) && delete this[t]
                    }
                }, h.prototype.filter = {}, h.prototype.formula = {
                    linear: function (t) {
                        return t
                    }
                }, f = h.prototype.formula, r(h, {
                    now: y,
                    each: n,
                    tweenProps: o,
                    tweenProp: a,
                    applyFilter: l,
                    shallowCopy: r,
                    defaults: s,
                    composeEasingObject: c
                }), "function" == typeof SHIFTY_DEBUG_NOW && (e.timeoutHandler = u), t.exports = h, h
            }();
        ! function () {
            i.shallowCopy(i.prototype.formula, {
                easeInQuad: function (t) {
                    return Math.pow(t, 2)
                },
                easeOutQuad: function (t) {
                    return -(Math.pow(t - 1, 2) - 1)
                },
                easeInOutQuad: function (t) {
                    return (t /= 0.5) < 1 ? 0.5 * Math.pow(t, 2) : -0.5 * ((t -= 2) * t - 2)
                },
                easeInCubic: function (t) {
                    return Math.pow(t, 3)
                },
                easeOutCubic: function (t) {
                    return Math.pow(t - 1, 3) + 1
                },
                easeInOutCubic: function (t) {
                    return (t /= 0.5) < 1 ? 0.5 * Math.pow(t, 3) : 0.5 * (Math.pow(t - 2, 3) + 2)
                },
                easeInQuart: function (t) {
                    return Math.pow(t, 4)
                },
                easeOutQuart: function (t) {
                    return -(Math.pow(t - 1, 4) - 1)
                },
                easeInOutQuart: function (t) {
                    return (t /= 0.5) < 1 ? 0.5 * Math.pow(t, 4) : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                },
                easeInQuint: function (t) {
                    return Math.pow(t, 5)
                },
                easeOutQuint: function (t) {
                    return Math.pow(t - 1, 5) + 1
                },
                easeInOutQuint: function (t) {
                    return (t /= 0.5) < 1 ? 0.5 * Math.pow(t, 5) : 0.5 * (Math.pow(t - 2, 5) + 2)
                },
                easeInSine: function (t) {
                    return -Math.cos(t * (Math.PI / 2)) + 1
                },
                easeOutSine: function (t) {
                    return Math.sin(t * (Math.PI / 2))
                },
                easeInOutSine: function (t) {
                    return -0.5 * (Math.cos(Math.PI * t) - 1)
                },
                easeInExpo: function (t) {
                    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                },
                easeOutExpo: function (t) {
                    return 1 === t ? 1 : -Math.pow(2, -10 * t) + 1
                },
                easeInOutExpo: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                },
                easeOutCirc: function (t) {
                    return Math.sqrt(1 - Math.pow(t - 1, 2))
                },
                easeInOutCirc: function (t) {
                    return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeOutBounce: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
                },
                easeInBack: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                easeOutBack: function (t) {
                    var e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                easeInOutBack: function (t) {
                    var e = 1.70158;
                    return (t /= 0.5) < 1 ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e)) : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                elastic: function (t) {
                    return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
                },
                swingFromTo: function (t) {
                    var e = 1.70158;
                    return (t /= 0.5) < 1 ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e)) : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                swingFrom: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                swingTo: function (t) {
                    var e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                bounce: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
                },
                bouncePast: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)
                },
                easeFromTo: function (t) {
                    return (t /= 0.5) < 1 ? 0.5 * Math.pow(t, 4) : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                },
                easeFrom: function (t) {
                    return Math.pow(t, 4)
                },
                easeTo: function (t) {
                    return Math.pow(t, 0.25)
                }
            })
        }(),
        function () {
            function t(t, e, i, n, r, s) {
                function o(t) {
                    return ((d * t + p) * t + m) * t
                }

                function a(t) {
                    return ((v * t + g) * t + y) * t
                }

                function l(t) {
                    return (3 * d * t + 2 * p) * t + m
                }

                function u(t) {
                    return 1 / (200 * t)
                }

                function c(t, e) {
                    return a(f(t, e))
                }

                function h(t) {
                    return t >= 0 ? t : 0 - t
                }

                function f(t, e) {
                    var i, n, r, s, a, u;
                    for (r = t, u = 0; u < 8; u++) {
                        if (s = o(r) - t, h(s) < e) {
                            return r
                        }
                        if (a = l(r), h(a) < 0.000001) {
                            break
                        }
                        r -= s / a
                    }
                    if (i = 0, n = 1, r = t, r < i) {
                        return i
                    }
                    if (r > n) {
                        return n
                    }
                    for (; i < n;) {
                        if (s = o(r), h(s - t) < e) {
                            return r
                        }
                        t > s ? i = r : n = r, r = 0.5 * (n - i) + i
                    }
                    return r
                }
                var d = 0,
                    p = 0,
                    m = 0,
                    v = 0,
                    g = 0,
                    y = 0;
                return m = 3 * e, p = 3 * (n - e) - m, d = 1 - m - p, y = 3 * i, g = 3 * (r - i) - y, v = 1 - y - g, c(t, u(s))
            }

            function e(e, i, n, r) {
                return function (s) {
                    return t(s, e, i, n, r, 1)
                }
            }
            i.setBezierFunction = function (t, n, r, s, o) {
                var a = e(n, r, s, o);
                return a.displayName = t, a.x1 = n, a.y1 = r, a.x2 = s, a.y2 = o, i.prototype.formula[t] = a
            }, i.unsetBezierFunction = function (t) {
                delete i.prototype.formula[t]
            }
        }(),
        function () {
            function t(t, e, n, r, s, o) {
                return i.tweenProps(r, e, t, n, 1, o, s)
            }
            var e = new i;
            e._filterArgs = [], i.interpolate = function (n, r, s, o, a) {
                var l = i.shallowCopy({}, n),
                    u = a || 0,
                    c = i.composeEasingObject(n, o || "linear");
                e.set({});
                var h = e._filterArgs;
                h.length = 0, h[0] = l, h[1] = n, h[2] = r, h[3] = c, i.applyFilter(e, "tweenCreated"), i.applyFilter(e, "beforeTween");
                var f = t(n, l, r, s, c, u);
                return i.applyFilter(e, "afterTween"), f
            }
        }(),
        function (t) {
            function e(t, e) {
                var i, n = [],
                    r = t.length;
                for (i = 0; i < r; i++) {
                    n.push("_" + e + "_" + i)
                }
                return n
            }

            function i(t) {
                var e = t.match(b);
                return e ? (1 === e.length || t.charAt(0).match(w)) && e.unshift("") : e = ["", ""], e.join(k)
            }

            function n(e) {
                t.each(e, function (t) {
                    var i = e[t];
                    "string" == typeof i && i.match(S) && (e[t] = r(i))
                })
            }

            function r(t) {
                return l(S, t, s)
            }

            function s(t) {
                var e = o(t);
                return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")"
            }

            function o(t) {
                return t = t.replace(/#/, ""), 3 === t.length && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), M[0] = a(t.substr(0, 2)), M[1] = a(t.substr(2, 2)), M[2] = a(t.substr(4, 2)), M
            }

            function a(t) {
                return parseInt(t, 16)
            }

            function l(t, e, i) {
                var n = e.match(t),
                    r = e.replace(t, k);
                if (n) {
                    for (var s, o = n.length, a = 0; a < o; a++) {
                        s = n.shift(), r = r.replace(k, i(s))
                    }
                }
                return r
            }

            function u(t) {
                return l(T, t, c)
            }

            function c(t) {
                for (var e = t.match(x), i = e.length, n = t.match(P)[0], r = 0; r < i; r++) {
                    n += parseInt(e[r], 10) + ","
                }
                return n = n.slice(0, -1) + ")"
            }

            function h(n) {
                var r = {};
                return t.each(n, function (t) {
                    var s = n[t];
                    if ("string" == typeof s) {
                        var o = g(s);
                        r[t] = {
                            formatString: i(s),
                            chunkNames: e(o, t)
                        }
                    }
                }), r
            }

            function f(e, i) {
                t.each(i, function (t) {
                    for (var n = e[t], r = g(n), s = r.length, o = 0; o < s; o++) {
                        e[i[t].chunkNames[o]] = +r[o]
                    }
                    delete e[t]
                })
            }

            function d(e, i) {
                t.each(i, function (t) {
                    var n = e[t],
                        r = p(e, i[t].chunkNames),
                        s = m(r, i[t].chunkNames);
                    n = v(i[t].formatString, s), e[t] = u(n)
                })
            }

            function p(t, e) {
                for (var i, n = {}, r = e.length, s = 0; s < r; s++) {
                    i = e[s], n[i] = t[i], delete t[i]
                }
                return n
            }

            function m(t, e) {
                E.length = 0;
                for (var i = e.length, n = 0; n < i; n++) {
                    E.push(t[e[n]])
                }
                return E
            }

            function v(t, e) {
                for (var i = t, n = e.length, r = 0; r < n; r++) {
                    i = i.replace(k, +e[r].toFixed(4))
                }
                return i
            }

            function g(t) {
                return t.match(x)
            }

            function y(e, i) {
                t.each(i, function (t) {
                    var n, r = i[t],
                        s = r.chunkNames,
                        o = s.length,
                        a = e[t];
                    if ("string" == typeof a) {
                        var l = a.split(" "),
                            u = l[l.length - 1];
                        for (n = 0; n < o; n++) {
                            e[s[n]] = l[n] || u
                        }
                    } else {
                        for (n = 0; n < o; n++) {
                            e[s[n]] = a
                        }
                    }
                    delete e[t]
                })
            }

            function _(e, i) {
                t.each(i, function (t) {
                    var n = i[t],
                        r = n.chunkNames,
                        s = r.length,
                        o = e[r[0]],
                        a = typeof o;
                    if ("string" === a) {
                        for (var l = "", u = 0; u < s; u++) {
                            l += " " + e[r[u]], delete e[r[u]]
                        }
                        e[t] = l.substr(1)
                    } else {
                        e[t] = o
                    }
                })
            }
            var w = /(\d|\-|\.)/,
                b = /([^\-0-9\.]+)/g,
                x = /[0-9.\-]+/g,
                T = new RegExp("rgb\\(" + x.source + /,\s*/.source + x.source + /,\s*/.source + x.source + "\\)", "g"),
                P = /^.*\(/,
                S = /#([0-9]|[a-f]){3,6}/gi,
                k = "VAL",
                M = [],
                E = [];
            t.prototype.filter.token = {
                tweenCreated: function (t, e, i, r) {
                    n(t), n(e), n(i), this._tokenData = h(t)
                },
                beforeTween: function (t, e, i, n) {
                    y(n, this._tokenData), f(t, this._tokenData), f(e, this._tokenData), f(i, this._tokenData)
                },
                afterTween: function (t, e, i, n) {
                    d(t, this._tokenData), d(e, this._tokenData), d(i, this._tokenData), _(n, this._tokenData)
                }
            }
        }(i)
    }).call(null)
}, function (t, e) {
    function i(t, e, n) {
        t = t || {}, e = e || {}, n = n || !1;
        for (var r in e) {
            if (e.hasOwnProperty(r)) {
                var s = t[r],
                    o = e[r];
                n && c(s) && c(o) ? t[r] = i(s, o, n) : t[r] = o
            }
        }
        return t
    }

    function n(t, e) {
        var i = t;
        for (var n in e) {
            if (e.hasOwnProperty(n)) {
                var r = e[n],
                    s = "\\{" + n + "\\}",
                    o = new RegExp(s, "g");
                i = i.replace(o, r)
            }
        }
        return i
    }

    function r(t, e, i) {
        for (var n = t.style, r = 0; r < p.length; ++r) {
            var s = p[r];
            n[s + o(e)] = i
        }
        n[e] = i
    }

    function s(t, e) {
        h(e, function (e, i) {
            null !== e && void 0 !== e && (c(e) && e.prefix === !0 ? r(t, i, e.value) : t.style[i] = e)
        })
    }

    function o(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    function a(t) {
        return "string" == typeof t || t instanceof String
    }

    function l(t) {
        return "function" == typeof t
    }

    function u(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function c(t) {
        if (u(t)) {
            return !1
        }
        var e = typeof t;
        return "object" === e && !!t
    }

    function h(t, e) {
        for (var i in t) {
            if (t.hasOwnProperty(i)) {
                var n = t[i];
                e(n, i)
            }
        }
    }

    function f(t, e) {
        return Math.abs(t - e) < m
    }

    function d(t) {
        for (; t.firstChild;) {
            t.removeChild(t.firstChild)
        }
    }
    var p = "Webkit Moz O ms".split(" "),
        m = 0.001;
    t.exports = {
        extend: i,
        render: n,
        setStyle: r,
        setStyles: s,
        capitalize: o,
        isString: a,
        isFunction: l,
        isObject: c,
        forEachObject: h,
        floatEquals: f,
        removeChildren: d
    }
}, function (t, e, i) {
    var n = i(201),
        r = i(204),
        s = function (t, e) {
            this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, n.apply(this, arguments)
        };
    s.prototype = new n, s.prototype.constructor = s, s.prototype._pathString = function (t) {
        var e = t.strokeWidth;
        t.trailWidth && t.trailWidth > t.strokeWidth && (e = t.trailWidth);
        var i = 50 - e / 2;
        return r.render(this._pathTemplate, {
            radius: i,
            "2radius": 2 * i
        })
    }, s.prototype._trailString = function (t) {
        return this._pathString(t)
    }, t.exports = s
}, function (t, e, i) {
    var n = i(201),
        r = i(205),
        s = i(204),
        o = function (t, e) {
            this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, n.apply(this, arguments)
        };
    o.prototype = new n, o.prototype.constructor = o, o.prototype._initializeSvg = function (t, e) {
        t.setAttribute("viewBox", "0 0 100 50")
    }, o.prototype._initializeTextContainer = function (t, e, i) {
        t.text.style && (i.style.top = "auto", i.style.bottom = "0", t.text.alignToBottom ? s.setStyle(i, "transform", "translate(-50%, 0)") : s.setStyle(i, "transform", "translate(-50%, 50%)"))
    }, o.prototype._pathString = r.prototype._pathString, o.prototype._trailString = r.prototype._trailString, t.exports = o
}, function (t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.AnnotationsArray = [
        [{
            name: "Sensor1",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [94.871, 179.129, -1425.772],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor6",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [902.413, -666.815, -43.161],
            rotation: [0, 0, -0]
        }, {
            name: "_02ndVent",
            text: "Secondary Vent",
            description: "The most dangerous and unpredictable vent, this one has changed in size over time, and measured about 5 meters wide during the expedition.",
            width: 120,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [1279.309, -230.602, -1036.995],
            rotation: [0, 0, -0]
        }, {
            name: "_0Camp",
            text: "Level 0 Camp",
            description: "The team set up Camp 0 in a partially covered cave, stocked with emergency equipment and contingency air supplies.",
            width: 120,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [722.087, -660.27, 86.885],
            rotation: [0, 0, -0]
        }, {
            name: "_0GravityMeter",
            text: "Gravity Meter",
            description: "To better understand current activity, the team recorded continuous gravity within the crater using a gravimeter.",
            width: 120,
            height: 100,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [218.228, -334.899, 153.427],
            rotation: [0, 0, -0]
        }, {
            name: "_0LavaBomb",
            text: "Lava Bomb",
            description: "Lava splashes that harden before reaching the ground, lava bombs were a constant hazard here, falling at relatively regular intervals.",
            width: 120,
            height: 100,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [218.499, -305.318, -378.896],
            rotation: [0, 0, -0]
        }, {
            name: "_0DegassingWall",
            text: "Degassing Wall",
            description: "The release of gases from volcanic activity occurred here, right above the lava lake, and went all the way up to Level 1.",
            width: 100,
            height: 60,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [-259.602, 229.759, -1108.391],
            rotation: [0, 0, -0]
        }],
        [{
            name: "Sensor3",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [-1348.146, 1620.265, -1278.016],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor4",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [1575.365, 1509.658, -1486.949],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor5",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [1232.772, 1598.97, 1278.272],
            rotation: [0, 0, -0]
        }, {
            name: "_1VentBlastZone",
            text: "HAZARD: Blast Zone",
            description: "Close proximity to the lava lake makes this area especially susceptible should any explosions occur.",
            width: 120,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [-1705.918, 1995.789, -1532.778],
            rotation: [0, 0, -0]
        }, {
            name: "_1Fumerole",
            text: "Fumerole",
            description: "Defined as a vent in the earth’s surface from which steam and volcanic gases are released, this fumarole was especially active, suggesting it could develop eruptive activity in the future.",
            width: 120,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            position: [181.352, 1577.645, -2646.528],
            rotation: [0, 0, -0]
        }, {
            name: "_1OldRepel",
            text: "Old Rappel Zone",
            description: "Abandoned due to intense degassing that quickly damaged the equipment and rendered it unusable.",
            width: 120,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            position: [999.681, 1520.893, -1769.431],
            rotation: [0, 0, -0]
        }, {
            name: "_1LavaTubes",
            text: "Lava Tubes",
            description: "Natural tunnels within a solidified lava flow that were formerly occupied by flowing molten lava.",
            width: 120,
            height: 140,
            posAdj: 158,
            hotspot: !1,
            position: [1886.867, 1445.416, -490.089],
            rotation: [0, 0, -0]
        }, {
            name: "_1FrozenLavaLake",
            text: "Frozen Lava Lake",
            description: "What’s left when active lava lakes solidify. This one is composed mostly of lava emitted during the 1960s.",
            width: 120,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            position: [2706.233, 1445.416, -984.535],
            rotation: [0, 0, -0]
        }, {
            name: "_1RockFalls",
            text: "HAZARD: Rockfalls",
            description: "Dangerous rock falls happen all the time. Piles of rock and rubble mark areas where they occur most frequently.",
            width: 120,
            height: 60,
            posAdj: 158,
            hotspot: !1,
            position: [3306.316, 1447.52, 720.701],
            rotation: [0, 0, -0]
        }, {
            name: "_1RockFalls.1",
            text: "HAZARD: Rockfalls",
            description: "Here, along the fault, there’s a higher probability of rock falls.",
            width: 120,
            height: 60,
            posAdj: 158,
            hotspot: !1,
            position: [1091.878, 1892.214, 2137.103],
            rotation: [0, 0, -0]
        }, {
            name: "_1Camp",
            text: "Level 1 Camp",
            description: "Here, along the fault, there’s a higher probability of rock falls.",
            width: 120,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            position: [1828.993, 1391.032, 624.006],
            rotation: [0, 0, -0]
        }, {
            name: "_1repel",
            text: "Rappel to Level 0",
            description: "Relatively flat compared to the surrounding terrain, this point was selected for the final descent down into the lava lake.",
            width: 120,
            height: 80,
            posAdj: 158,
            hotspot: !1,
            position: [1439.363, 1431.345, 362.767],
            rotation: [0, 0, -0]
        }],
        [{
            name: "Sensor2",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [-1264.057, 3958.488, -4006.273],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor7",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [5466.25, 4553.078, 274.962],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor8",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [-64.191, 3882.355, 3933.375],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor9",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [2370.134, 3987.575, -4373.296],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor10",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [-3810.797, 3963.012, 397.125],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor11",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [888.477, 4428.622, -5375.804],
            rotation: [0, 0, -0]
        }, {
            name: "Sensor12",
            text: "",
            width: 84,
            height: 12,
            posAdj: 50,
            hotspot: !0,
            type: "sensor",
            position: [-2962.331, 4469.396, 1650.23],
            rotation: [0, 0, -0]
        }, {
            name: "_2OldSeismic",
            text: "Old Seismic Station",
            description: "This one no longer contains a seismometer. Today, it’s a bunker covered entirely by a corroded lid.",
            width: 190,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [-3167.395, 3947.112, 237.503],
            rotation: [0, 0, -0]
        }, {
            name: "_2SatelliteStation",
            text: "Satellite Station",
            description: "Located at the vantage point for maximum visibility and signal strength.",
            width: 140,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [-1404.805, 4077.106, 2774.005],
            rotation: [0, 0, -0]
        }, {
            name: "_2FlyProject",
            text: "Hazard: Flying Projectiles",
            description: "Deadly products from explosions that travel at supersonic velocity, meaning they can hit you before you hear the explosion.",
            width: 210,
            height: 200,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [1975.271, 3996.874, -4369.398],
            rotation: [0, 0, -0]
        }, {
            name: "_2Steam",
            text: "Hazard: Steam Vent",
            description: "Formed when ground or rainwater  seeps down into hot volcanic rocks and boils. As a result, hot steam escapes through fissures.",
            width: 180,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [-1561.967, 3954.699, -4442.339],
            rotation: [0, 0, -0]
        }, {
            name: "_2Cross",
            text: "Cross of Bobadilla",
            description: "Thought to prevent eruptions, this giant wooden cross was first installed by a Spanish priest in the 16th century. Since then, it’s been replaced many times.",
            width: 170,
            height: 60,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [878.937, 4500.08, -5049.585],
            rotation: [0, 0, -0]
        }, {
            name: "_2CarPark",
            text: "Visitor Carpark",
            description: "Minor explosions in March, 2016 reached the car park at night. Luckily there were no injuries, but a larger explosion could kill hundreds at once.",
            width: 150,
            height: 160,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [3601.492, 3957.936, -3392.569],
            rotation: [0, 0, -0]
        }, {
            name: "_2KillZone",
            text: "Kill Zone",
            description: "The area of a volcano below which there are no traces of plant or animal life due to gas emissions.",
            width: 100,
            height: 60,
            posAdj: 70,
            hotspot: !1,
            type: "text",
            position: [-2933.742, 3446.97, -3520.927],
            rotation: [0, 0, -0]
        }, {
            name: "_2WallCollapse",
            text: "Hazard: Wall Collapse",
            description: "This section of the wall is detached and ready to fall should an earthquake hit, which could bury the lava lake and cause explosions.",
            width: 190,
            height: 140,
            posAdj: 158,
            hotspot: !1,
            type: "text",
            position: [-2742.483, 3446.97, -1272.089],
            rotation: [0, 0, -0]
        }]
    ]
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(209),
        a = r(o),
        l = i(2),
        u = r(l),
        c = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        h = i(214),
        f = r(h),
        d = i(181),
        p = n(d),
        m = function () {
            function t(e) {
                if (s(this, t), p.hasTouch()) {
                    var i = e.loadCallback;
                    "function" == typeof i && i()
                } else {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) {
                        r[o - 1] = arguments[o]
                    }
                    this.canvasSequence = new(Function.prototype.bind.apply(f["default"], [null].concat([e].concat(r))))
                }
            }
            return c(t, [{
                key: "getStartTime",
                value: function () {
                    return (0, u["default"])(this.canvasSequence, "startTime", 0)
                }
            }, {
                key: "play",
                value: function () {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) {
                        e[i] = arguments[i]
                    }
                    return a["default"].apply(void 0, [this.canvasSequence, "play"].concat(e))
                }
            }, {
                key: "pause",
                value: function () {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) {
                        e[i] = arguments[i]
                    }
                    return a["default"].apply(void 0, [this.canvasSequence, "pause"].concat(e))
                }
            }]), t
        }();
    e["default"] = m
}, function (t, e, i) {
    var n = i(210),
        r = i(164),
        s = r(n);
    t.exports = s
}, function (t, e, i) {
    function n(t, e, i) {
        e = s(e, t), t = a(t, e);
        var n = null == t ? t : t[l(o(e))];
        return null == n ? void 0 : r(n, t, i)
    }
    var r = i(166),
        s = i(4),
        o = i(211),
        a = i(212),
        l = i(53);
    t.exports = n
}, function (t, e) {
    function i(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e) {
        return e.length < 2 ? t : r(t, s(e, 0, -1))
    }
    var r = i(3),
        s = i(213);
    t.exports = n
}, function (t, e) {
    function i(t, e, i) {
        var n = -1,
            r = t.length;
        e < 0 && (e = -e > r ? 0 : r + e), i = i > r ? r : i, i < 0 && (i += r), r = e > i ? 0 : i - e >>> 0, e >>>= 0;
        for (var s = Array(r); ++n < r;) {
            s[n] = t[n + e]
        }
        return s
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    var r, s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        o = function () {
            function t(e, i, r, s, o, a, l) {
                var u = arguments.length <= 7 || void 0 === arguments[7] ? t.PlayMode.SCROLL : arguments[7],
                    c = arguments.length <= 8 || void 0 === arguments[8] ? 24 : arguments[8],
                    h = !(arguments.length <= 9 || void 0 === arguments[9]) && arguments[9];
                return n(this, t), "object" == typeof e ? this.ctor(e) : void this.ctor({
                    canvas: e,
                    sequencePath: i,
                    sequenceStart: r,
                    sequenceEnd: s,
                    fileType: o,
                    loadCallback: a,
                    onDraw: l,
                    mode: u,
                    fps: c,
                    playOnce: h
                })
            }
            return s(t, [{
                key: "ctor",
                value: function (e) {
                    var i = e.canvas,
                        n = e.sequencePath,
                        r = e.sequenceStart,
                        s = e.sequenceEnd,
                        o = e.fileType,
                        a = e.loadCallback,
                        l = e.onDraw,
                        u = e.mode,
                        c = void 0 === u ? t.PlayMode.SCROLL : u,
                        h = e.fps,
                        f = void 0 === h ? 24 : h,
                        d = e.isPaused,
                        p = void 0 !== d && d,
                        m = e.playOnce,
                        v = void 0 !== m && m;
                    this.sequence = [], this.canvas = document.getElementById(i), null !== this.canvas ? this.context = this.canvas.getContext("2d") : void 0, this.sequencePath = n, this.sequenceStart = r, this.sequenceEnd = s, this.sequenceLength = this.sequenceEnd - this.sequenceStart, this.fileType = o || ".webp", this.progress = 0, this.scrollHeight = document.body.scrollHeight, this.loadCallback = a || function () {}, this.onDraw = "function" == typeof l ? l : null, this.mode = c, this.isPaused = p, this.firstLoopEnd = !1, this.fps = f, this.playOnce = v, this.loadSequence()
                }
            }, {
                key: "pause",
                value: function () {
                    this.isPaused = !0
                }
            }, {
                key: "play",
                value: function () {
                    if (this.isPaused) {
                        var t = +new Date;
                        this.startTime = t - this.currentFrame / this.fps * 1000, this.isPaused = !1, this.firstLoopEnd = !1
                    }
                }
            }, {
                key: "addLeadingZeros",
                value: function (t) {
                    for (var e = this.sequenceEnd.toString().length, i = (t > 0 ? t : -t) + "", n = "", r = e - i.length; r > 0; r--) {
                        n += "0"
                    }
                    return n += i, t >= 0 ? n : "-" + n
                }
            }, {
                key: "loadSequence",
                value: function () {
                    for (var t = this, e = [], i = this.sequenceStart; i <= this.sequenceEnd; i++) {
                        var n = this.addLeadingZeros(i),
                            r = this.sequencePath + n + this.fileType,
                            s = new Image;
                        s.src = r;
                        var o = new Promise(function (t, e) {
                            s.onload = t, s.onerror = e
                        });
                        e.push(o), this.sequence.push(s)
                    }
                    Promise.all(e).then(function () {
                        t.renderFrame(), t.loadCallback()
                    })["catch"](function (t) {})
                }
            }, {
                key: "getNextFrameNumber",
                value: function () {
                    return Math.min(this.sequenceLength, Math.max(0, Math.round(this.progress * this.sequenceLength)))
                }
            }, {
                key: "syncScrollPosition",
                value: function () {
                    var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    return t / this.scrollHeight
                }
            }, {
                key: "syncAutoPlayPosition",
                value: function () {
                    var t = +new Date;
                    if (this.startTime || (this.startTime = t), !this.isPaused) {
                        var e = this.sequenceLength / this.fps,
                            i = (t - this.startTime) / 1000 % e;
                        return i / e
                    }
                    return this.progress
                }
            }, {
                key: "syncPlayPosition",
                value: function () {
                    switch (this.mode) {
                        case t.PlayMode.AUTO:
                            this.progress = this.syncAutoPlayPosition();
                            break;
                        case t.PlayMode.MANUAL:
                            break;
                        case t.PlayMode.SCROLL:
                        default:
                            this.progress = this.syncScrollPosition()
                    }
                }
            }, {
                key: "setProgress",
                value: function (e) {
                    this.progress = e, this.mode === t.PlayMode.MANUAL && requestAnimationFrame(this.renderFrame.bind(this))
                }
            }, {
                key: "drawImage",
                value: function (t) {
                    t >= 0 && t < this.sequence.length && (this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.sequence[t].complete ? this.context.drawImage(this.sequence[t], 0, 0, this.canvas.width, this.canvas.height) : void 0)
                }
            }, {
                key: "renderFrame",
                value: function () {
                    this.syncPlayPosition(), this.playOnce && this.firstLoopEnd && this.pause(), this.mode !== t.PlayMode.MANUAL && requestAnimationFrame(this.renderFrame.bind(this)), this.previousFrame = this.currentFrame, this.currentFrame = this.getNextFrameNumber(), (this.currentFrame != this.previousFrame || this.firstLoad) && (this.drawImage(this.currentFrame), this.onDraw && this.onDraw.call(null, this.previousFrame, this.currentFrame)), this.getNextFrameNumber() === this.sequenceEnd - 1 && (this.firstLoopEnd = !0), this.firstLoad = !1
                }
            }]), t
        }();
    o.PlayMode = {
        SCROLL: "SCROLL",
        AUTO: "AUTO",
        MANUAL: "MANUAL"
    }, window.requestAnimationFrame || (window.requestAnimationFrame = function () {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
            window.setTimeout(t, 1000 / 60)
        }
    }()), r = function () {
        return o
    }.call(e, i, e, t), !(void 0 !== r && (t.exports = r))
}, function (t, e, i) {
    var n = i(216);
    e.SpriteText2D = n.SpriteText2D;
    var r = i(221);
    e.MeshText2D = r.MeshText2D;
    var s = i(219);
    e.textAlign = s.textAlign
}, function (t, e, i) {
    var n = this && this.__extends || function (t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e) {
                e.hasOwnProperty(n) && (t[n] = e[n])
            }
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        },
        r = i(217),
        s = i(218),
        o = function (t) {
            function e() {
                t.apply(this, arguments)
            }
            return n(e, t), e.prototype.raycast = function () {
                return this.sprite.raycast.apply(this.sprite, arguments)
            }, e.prototype.updateText = function () {
                this.canvas.drawText(this._text, {
                    font: this._font,
                    fillStyle: this._fillStyle
                }), this.cleanUp(), this.texture = new r.Texture(this.canvas.canvas), this.texture.needsUpdate = !0, this.applyAntiAlias(), this.material ? this.material.map = this.texture : this.material = new r.SpriteMaterial({
                    map: this.texture
                }), this.sprite || (this.sprite = new r.Sprite(this.material), this.geometry = this.sprite.geometry, this.add(this.sprite)), this.sprite.scale.set(this.canvas.width, this.canvas.height, 1), this.sprite.position.x = this.canvas.width / 2 - this.canvas.textWidth / 2 + this.canvas.textWidth / 2 * this.align.x, this.sprite.position.y = -this.canvas.height / 2 + this.canvas.textHeight / 2 * this.align.y
            }, e
        }(s.Text2D);
    e.SpriteText2D = o
}, function (t, e) {
    t.exports = THREE
}, function (t, e, i) {
    var n = this && this.__extends || function (t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e) {
                e.hasOwnProperty(n) && (t[n] = e[n])
            }
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        },
        r = i(217),
        s = i(219),
        o = i(220),
        a = function (t) {
            function e(e, i) {
                void 0 === e && (e = ""), void 0 === i && (i = {}), t.call(this), this._font = i.font || "30px Arial", this._fillStyle = i.fillStyle || "#FFFFFF", this.canvas = new o.CanvasText, this.align = i.align || s.textAlign.center, this.side = i.side || r.DoubleSide, this.antialias = "undefined" == typeof i.antialias || i.antialias, this.text = e
            }
            return n(e, t), Object.defineProperty(e.prototype, "width", {
                get: function () {
                    return this.canvas.textWidth
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function () {
                    return this.canvas.textHeight
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text", {
                get: function () {
                    return this._text
                },
                set: function (t) {
                    this._text !== t && (this._text = t, this.updateText())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "font", {
                get: function () {
                    return this._font
                },
                set: function (t) {
                    this._font !== t && (this._font = t, this.updateText())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fillStyle", {
                get: function () {
                    return this._fillStyle
                },
                set: function (t) {
                    this._fillStyle !== t && (this._fillStyle = t, this.updateText())
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.cleanUp = function () {
                this.texture && this.texture.dispose()
            }, e.prototype.applyAntiAlias = function () {
                this.antialias === !1 && (this.texture.magFilter = r.NearestFilter, this.texture.minFilter = r.LinearMipMapLinearFilter)
            }, e
        }(r.Object3D);
    e.Text2D = a
}, function (t, e, i) {
    function n(t) {
        var e = s[t];
        if (!e) {
            var i = document.getElementsByTagName("body")[0],
                n = document.createElement("div"),
                r = document.createTextNode("MÉq");
            n.appendChild(r), n.setAttribute("style", "font:" + t + ";position:absolute;top:0;left:0"), i.appendChild(n), e = n.offsetHeight, s[t] = e, i.removeChild(n)
        }
        return e
    }
    var r = i(217);
    e.textAlign = {
        center: new r.Vector2(0, 0),
        left: new r.Vector2(1, 0),
        topLeft: new r.Vector2(1, (-1)),
        topRight: new r.Vector2((-1), (-1)),
        right: new r.Vector2((-1), 0),
        bottomLeft: new r.Vector2(1, 1),
        bottomRight: new r.Vector2((-1), 1)
    };
    var s = {};
    e.getFontHeight = n
}, function (t, e, i) {
    var n = i(217),
        r = i(219),
        s = function () {
            function t() {
                this.textWidth = null, this.textHeight = null, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d")
            }
            return Object.defineProperty(t.prototype, "width", {
                get: function () {
                    return this.canvas.width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "height", {
                get: function () {
                    return this.canvas.height
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.drawText = function (t, e) {
                return this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.font = e.font, this.textWidth = Math.ceil(this.ctx.measureText(t).width), this.textHeight = r.getFontHeight(this.ctx.font), this.canvas.width = n.Math.nextPowerOfTwo(this.textWidth), this.canvas.height = n.Math.nextPowerOfTwo(this.textHeight), this.ctx.font = e.font, this.ctx.fillStyle = e.fillStyle, this.ctx.textAlign = "left", this.ctx.textBaseline = "top", this.ctx.fillText(t, 0, 0), this.canvas
            }, t
        }();
    e.CanvasText = s
}, function (t, e, i) {
    var n = this && this.__extends || function (t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e) {
                e.hasOwnProperty(n) && (t[n] = e[n])
            }
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        },
        r = i(217),
        s = i(218),
        o = function (t) {
            function e(e, i) {
                void 0 === e && (e = ""), void 0 === i && (i = {}), t.call(this, e, i)
            }
            return n(e, t), e.prototype.raycast = function () {
                this.mesh.raycast.apply(this.mesh, arguments)
            }, e.prototype.updateText = function () {
                this.cleanUp(), this.canvas.drawText(this._text, {
                    font: this._font,
                    fillStyle: this._fillStyle
                }), this.texture = new r.Texture(this.canvas.canvas), this.texture.needsUpdate = !0, this.applyAntiAlias(), this.material ? this.material.map = this.texture : (this.material = new r.MeshBasicMaterial({
                    map: this.texture,
                    side: this.side
                }), this.material.transparent = !0), this.mesh || (this.geometry = new r.PlaneGeometry(this.canvas.width, this.canvas.height), this.mesh = new r.Mesh(this.geometry, this.material), this.add(this.mesh)), this.mesh.position.x = this.canvas.width / 2 - this.canvas.textWidth / 2 + this.canvas.textWidth / 2 * this.align.x, this.mesh.position.y = -this.canvas.height / 2 + this.canvas.textHeight / 2 * this.align.y, this.geometry.vertices[0].x = this.geometry.vertices[2].x = -this.canvas.width / 2, this.geometry.vertices[1].x = this.geometry.vertices[3].x = this.canvas.width / 2, this.geometry.vertices[0].y = this.geometry.vertices[1].y = this.canvas.height / 2, this.geometry.vertices[2].y = this.geometry.vertices[3].y = -this.canvas.height / 2, this.geometry.verticesNeedUpdate = !0
            }, e
        }(s.Text2D);
    e.MeshText2D = o
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(223),
        o = n(s),
        a = i(224),
        l = n(a),
        u = function c() {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = e.promises,
                n = void 0 === i ? [] : i,
                s = e.containerSelector,
                a = void 0 === s ? ".main" : s,
                u = e.progressSelector,
                h = void 0 === u ? ".loader-progress" : u,
                f = e.loaderContainerSelector,
                d = void 0 === f ? ".main-loader" : f,
                p = e.onReady,
                m = void 0 === p ? o["default"] : p,
                v = e.onProgress,
                g = void 0 === v ? o["default"] : v;
            r(this, c), this.handleProgress = function (e) {
                t.onProgress(e), t.loaderProgress.style.transform = "scaleX(" + e + ")"
            }, this.handleReady = function () {
                t.onReady(), t.container.classList.add("is-loaded"), t.loaderContainer.classList.add("is-loaded"), window.setTimeout(function () {
                    t.loaderContainer.remove()
                }, 1000)
            }, this.container = "string" == typeof a ? document.querySelector(a) : a, this.loaderContainer = "string" == typeof d ? document.querySelector(d) : d, this.loaderProgress = this.loaderContainer.querySelector(h), this.onReady = m, this.onProgress = g, this.loader = new l["default"]({
                promises: n,
                onProgress: this.handleProgress,
                onReady: this.handleReady
            })
        };
    e["default"] = u
}, function (t, e) {
    function i() {}
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(223),
        o = n(s),
        a = function l() {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = e.promises,
                n = void 0 === i ? [] : i,
                s = e.onReady,
                a = void 0 === s ? o["default"] : s,
                u = e.onProgress,
                c = void 0 === u ? o["default"] : u;
            r(this, l), this.handlePromise = function () {
                t.numResolved++;
                var e = t.numResolved / t.promises.length;
                t.onProgress(e), e >= 1 && t.onReady()
            }, this.numResolved = 0, this.onReady = a, this.onProgress = c, this.promises = n.map(function (e) {
                return e.then(t.handlePromise)
            }), 0 === n.length && this.onReady()
        };
    e["default"] = a
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(223),
        o = n(s),
        a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(226),
        u = n(l),
        c = i(192),
        h = (n(c), i(230)),
        f = n(h),
        d = function () {
            function t(e) {
                var i = e.selector,
                    n = e.onNextClick;
                void 0 === n ? o["default"] : n;
                r(this, t), this.canvas = document.querySelector(i), this.paused = !0, this.canvas.innerHTML = "", this.canvas.setAttribute("class", ""), this.beats = this.initLevels()
            }
            return a(t, [{
                key: "initLevels",
                value: function () {
                    var t = this;
                    return f["default"].map(function (e) {
                        return new u["default"](t.canvas, e)
                    })
                }
            }]), t
        }();
    e["default"] = d
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function o(t) {
        return t + "-modal"
    }

    function a(t) {
        var e = t.querySelector(".static-level--intro"),
            i = new d.TimelineLite({
                paused: !0
            }),
            n = d.Linear.easeOut;
        return e && i.set(e, {
            display: "block"
        }).to(e, 2, {
            opacity: 0,
            ease: n
        }).to(e, 0, {
            display: "none"
        }), g.getStaggeredTimeline(i, [g.getCopyBlockElements(t, ".static-level--copy")], {
            duration: 1,
            stagger: 0.2,
            fadeLast: !1
        }), i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = i(178),
        u = r(l),
        c = i(1),
        h = r(c),
        f = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = i(174),
        p = i(227),
        m = r(p),
        v = i(180),
        g = n(v),
        y = function () {
            function t(e, i) {
                s(this, t), this.getStatHtml = function (t) {
                    var e = t.value,
                        i = t.label;
                    return e + i
                }, this.container = e, this.canvas = document.createElement("div"), this.data = i, this.canvas.innerHTML = this.getLevelHtml(i)
            }
            return f(t, [{
                key: "load",
                value: function () {
                    return this.init(), Promise.resolve()
                }
            }, {
                key: "init",
                value: function () {
                    var t = a(this.canvas);
                    this.modalObstructingContent = [this.canvas.querySelector(".static-level--copy"), document.querySelector(".nav"), document.querySelector(".nav--logo--js"), this.canvas.querySelector(".static-level--cta")].filter(h["default"]), this.triggers = [{
                        atProgress: 0,
                        duration: 0.8,
                        timeline: t
                    }]
                }
            }, {
                key: "play",
                value: function () {}
            }, {
                key: "pause",
                value: function () {}
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress === t && this.fullProgress === e || (this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            a = (0, u["default"])(((o ? e : t) - n) / r, 0, 1);
                        s.progress(a)
                    }), this.progress = t, this.fullProgress = e)
                }
            }, {
                key: "getLevelHtml",
                value: function (t) {
                    var e = t.introUrl,
                        i = void 0 === e ? "" : e,
                        n = t.backgroundUrl,
                        r = void 0 === n ? "" : n,
                        s = t.titleEyebrow,
                        a = void 0 === s ? "" : s,
                        l = t.eyebrow,
                        u = void 0 === l ? "" : l,
                        c = t.title,
                        h = void 0 === c ? "" : c,
                        f = t.description,
                        d = void 0 === f ? "" : f,
                        p = t.id,
                        m = void 0 === p ? "" : p;
                    return '\n<div class="static-level beat--fixed--container is-unlocked">\n  <img src="' + r + '" class="beat--background--image static-level--img static-level--bg" />\n  <img src="' + i + '" class="beat--background--image static-level--img static-level--intro" />\n  <div class="static-level--copy beat-copy">\n    <div class="title-eyebrow">\n      ' + a + '\n    </div>\n    <span class="eyebrow">\n      ' + u + "\n    </span>\n    <h3>\n      " + h + "\n    </h3>\n    <p>\n      " + d + '\n    </p>\n  </div>\n  <button class="static-level--cta" data="#' + o(m) + '">\n    <svg class="static-level--cta--icon" width="18" height="18" viewBox="373 31 18 18" xmlns="http://www.w3.org/2000/svg">\n      <path d="M374 40h16M382 48V32"/>\n    </svg>\n  </button>\n</div>\n'
                }
            }]), t
        }();
    e["default"] = y
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) {
                i[e] = t[e]
            }
            return i
        }
        return Array.from(t)
    }

    function a(t) {
        var e = document.querySelector(t),
            i = [].concat(o(e.querySelectorAll(".modal--anim-js"))).filter(function (t) {
                return t
            }),
            n = new m.TimelineLite({
                paused: !0
            }),
            r = m.Power2.easeOut;
        return n.set(i, {
            opacity: 0,
            y: 70
        }).staggerTo(i, 0.4, {
            opacity: 1,
            y: 0,
            ease: r
        }, 0.25), n
    }

    function l(t, e) {
        return new P(function (i) {
            t.addEventListener(e, i)
        })
    }

    function u() {
        var t = document.createElement("div");
        return t.innerHTML = '\n    <svg width="186" height="18" viewBox="0 0 186 18" xmlns="http://www.w3.org/2000/svg">\n      <path class="loader-bg" d="M19.4 17.77l.003-1.37H87.05v1.37z"></path>\n      <path class="loader-progress" d="M19.4 17.77l.003-1.37H87.05v1.37z"></path>\n    </svg>\n  ', t.setAttribute("class", "modal--loader"), t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = i(223),
        h = r(c),
        f = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = i(228),
        p = n(d),
        m = i(174),
        v = i(229),
        g = r(v),
        y = i(182),
        _ = r(y),
        w = i(222),
        b = r(w),
        x = i(188),
        T = n(x),
        P = "undefined" == typeof Promise ? i(183).Promise : Promise,
        S = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = e.openClickListener,
                    n = e.closeClickListener,
                    r = e.onOpen,
                    o = void 0 === r ? h["default"] : r,
                    a = e.onClose,
                    l = void 0 === a ? h["default"] : a;
                s(this, t), this.openClickListener = i || document.querySelectorAll(".modal--trigger--js"), this.closeClickListener = n || document.querySelectorAll(".modal--close--trigger--js"), this.onOpen = o, this.onClose = l, this.addVideoHandler(), this.addOpenClickHandler(), this.addCloseClickHandler(), this.html = document.querySelector("html"), this.windowScrollY = null
            }
            return f(t, [{
                key: "addVideoHandler",
                value: function () {
                    var t = document.querySelectorAll(".modal--video");
                    t && [].concat(o(t)).forEach(function (t) {
                        new g["default"](t)
                    })
                }
            }, {
                key: "addOpenClickHandler",
                value: function () {
                    var t = this;
                    [].concat(o(this.openClickListener)).forEach(function (e) {
                        e.addEventListener("click", function () {
                            var i = e.getAttribute("data"),
                                n = a(i);
                            t.openModal(i, n)
                        })
                    })
                }
            }, {
                key: "addCloseClickHandler",
                value: function () {
                    var t = this;
                    [].concat(o(this.closeClickListener)).forEach(function (e) {
                        e.addEventListener("click", function () {
                            var i = e.getAttribute("data");
                            t.closeModal(i)
                        })
                    })
                }
            }, {
                key: "trackScrollPosition",
                value: function () {
                    this.windowScrollY = T.scrollY()
                }
            }, {
                key: "restoreScrollPosition",
                value: function () {
                    this.windowScrollY && (T.scrollTo(this.windowScrollY, 0), this.windowScrollY = null)
                }
            }, {
                key: "openModal",
                value: function (t, e) {
                    var i = this;
                    this.trackScrollPosition();
                    var n = document.querySelector(t);
                    e.progress(0.001);
                    var r = n.querySelector(".modal--scroll");
                    r && (r.scrollTop = 0), this.onOpen.call(n), p.addClass(n, "open");
                    var s = 200;
                    window.setTimeout(function () {
                        p.addClass(i.html, "modal--lock")
                    }, s);
                    var o = "modal--initialized-js";
                    if (p.hasClass(n, o)) {
                        e.play()
                    } else {
                        var a = u();
                        n.appendChild(a), this.initializeAssets(n, a).then(function () {
                            window.setTimeout(function () {
                                p.addClass(n, o), e.play()
                            }, 500)
                        })
                    }
                }
            }, {
                key: "closeModal",
                value: function (t) {
                    var e = document.querySelector(t);
                    p.removeClass(this.html, "modal--lock"), p.removeClass(e, "open"), this.restoreScrollPosition(), this.onClose.call(e)
                }
            }, {
                key: "initializeAssets",
                value: function (t, e) {
                    var i = [].concat(o(t.querySelectorAll("img"))).filter(function (t) {
                            return "" === t.src
                        }).map(function (t) {
                            var e = l(t, "load");
                            return t.src = t.getAttribute("data-src"), e
                        }),
                        n = [].concat(o(t.querySelectorAll("video"))),
                        r = "data-poster",
                        s = n.filter(function (t) {
                            return "" === t.poster && "" !== t.getAttribute(r)
                        }).map(function (t) {
                            t.poster = t.getAttribute(r);
                            var e = new Image,
                                i = l(e, "load");
                            return e.src = t.poster, i
                        }),
                        a = n.map(function (t) {
                            return (0, _["default"])(t, !0)
                        }),
                        u = [].concat(o(i), o(s), o(a));
                    return this.loader = new b["default"]({
                        promises: u,
                        containerSelector: t,
                        loaderContainerSelector: e
                    }), u.length <= 0 ? Promise.resolve() : Promise.all(u)
                }
            }]), t
        }();
    e["default"] = S
}, function (t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = (e.getNodeIndex = function (t) {
            for (var e = 0; t = t.previousSibling;) {
                3 == t.nodeType && /^\s*$/.test(t.data) || e++
            }
            return e
        }, e.hasClass = function (t, e) {
            return t.classList.contains(e)
        }),
        n = (e.removeClass = function (t, e) {
            t && i(t, e) && t.classList.remove(e)
        }, e.addClass = function (t, e) {
            t && !i(t, e) && t.classList.add(e)
        }, e.preventDefault = function (t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }, e.getChildren = function (t, e) {
            for (var i = []; t; t = t.nextSibling) {
                1 == t.nodeType && t != e && i.push(t)
            }
            return i
        });
    e.getAllSiblings = function (t) {
        return n(t.parentNode.firstChild, t)
    }, e.next = function (t) {
        for (var e = t.nextSibling; e && 1 != e.nodeType;) {
            e = e.nextSibling
        }
        return e
    }, e.prev = function (t) {
        for (var e = t.previousSibling; e && 1 != e.nodeType;) {
            e = e.previousSibling
        }
        return e
    }
}, function (t, e) {
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = function () {
            function t(e) {
                var n = this;
                i(this, t), this.video = e, this.playButton = this.video.parentElement.querySelector(".play--button"), this.category = this.video.dataset.category, this.label = this.video.dataset.label, this.setHeight(), this.bindListeners(), this.onplaying = !1, this.onpause = !0, this.video.onplaying = function () {
                    n.onplaying = !0, n.onpause = !1
                }, this.video.onpause = function () {
                    n.onplaying = !1, n.onpause = !0
                }, this.initialized = !1
            }
            return n(t, [{
                key: "initialize",
                value: function () {
                    this.video.querySelectorAll("source").forEach(function (t) {
                        t.src = t.getAttribute("data-src")
                    }), this.video.load(), this.initialized = !0
                }
            }, {
                key: "playVid",
                value: function () {
                    this.initialized || this.initialize(), this.video.paused && !this.onplaying && (this.video.play(), this.playButton.style.opacity = 0), dataLayer.push({
                        event: "gaEvent",
                        eventCategory: this.category,
                        eventAction: "Click",
                        eventLabel: this.label
                    })
                }
            }, {
                key: "pauseVid",
                value: function () {
                    this.video.paused || this.onpause || (this.video.pause(), this.playButton.style.opacity = 1)
                }
            }, {
                key: "_handleClick",
                value: function () {
                    this.onplaying ? this.pauseVid() : this.playVid()
                }
            }, {
                key: "setHeight",
                value: function () {
                    this.video.height = 0.562 * this.video.offsetWidth
                }
            }, {
                key: "bindListeners",
                value: function () {
                    this.video.addEventListener("click", this._handleClick.bind(this))
                }
            }]), t
        }();
    e["default"] = r
}, function (t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e["default"] = []
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function o(t, e, i, n) {
        var r = t.querySelector(e),
            s = t.querySelectorAll(i),
            o = document.querySelector(".nav--logo--js"),
            a = t.querySelector(".animated--beat--explore--container"),
            l = new h.TimelineLite(c({
                paused: !0
            }, n)),
            u = h.Power2.easeOut;
        r && l.to(r, 2, {
            opacity: 0,
            y: "-10px",
            ease: u
        }, 0), l.to(o, 1, {
            opacity: 0
        }, r ? "-=1" : 0).to(s, 2, {
            opacity: 1,
            ease: u
        }, 0), r && l.to(r, 0, {
            display: "none"
        }), l.addLabel("assetFocused");
        var f = d.getCopyBlockElements(t, ".title--caption--intro");
        return f.length > 0 && d.getStaggeredTimeline(l, [f], {
            duration: 1,
            stagger: 0,
            fadeLast: !1
        }), a && l.to(a, 2, {
            opacity: 1,
            y: "-20px",
            ease: h.Power2.easeOut
        }), l.addLabel("navStart"), l
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(178),
        l = r(a),
        u = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        c = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) {
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
            }
            return t
        },
        h = i(174),
        f = i(180),
        d = n(f),
        p = i(181),
        m = n(p),
        v = i(192),
        g = r(v),
        y = i(182),
        _ = r(y),
        w = function () {
            function t(e, i) {
                var n = i.name,
                    r = void 0 === n ? "" : n,
                    o = i.setsNavMarker,
                    a = void 0 !== o && o;
                s(this, t), this.name = r, this.canvas = document.querySelector(e), this.navLogo = document.querySelector(".nav--logo--js"), this.$video = this.canvas.querySelector("video"), this.progress = null, this.state = {
                    progress: 0
                }, this.tween = null, this.setsNavMarker = a, this.isReady = !1
            }
            return u(t, [{
                key: "load",
                value: function () {
                    var t = this;
                    return this.init(), (0, _["default"])(this.$video).then(function () {
                        t.isReady = !0
                    })
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    var e = this.canvas.offsetTop,
                        i = this.canvas.getBoundingClientRect().height;
                    this.setsNavMarker && (this.navMarkers = [{
                        canvas: this.canvas,
                        onJumpStart: this.setJumpToProgress.bind(this),
                        onJumpComplete: this.playToNavStart.bind(this),
                        name: this.name,
                        offsetTop: Math.floor(e + (i - t.height) * this.navStartProgress)
                    }])
                }
            }, {
                key: "init",
                value: function () {
                    var t = this,
                        e = o(this.canvas, ".title--caption--conclusion", ".title--asset", {
                            onComplete: function () {
                                t.overrideProgress = !1, t.timeline.pause()
                            }
                        });
                    this.timeline = e;
                    var i = e.getLabelTime("assetFocused") / e.totalDuration(),
                        n = 0.3,
                        r = 0.5,
                        s = n + r,
                        a = function (t) {
                            return (0, g["default"])(t, [0, 1], [n, s])
                        };
                    this.assetFocusedProgress = a(i);
                    var l = e.getLabelTime("navStart") / e.totalDuration();
                    this.navStartProgress = a(l);
                    var u = new h.TimelineLite({
                        paused: !0
                    }).to(this.navLogo, 1, {
                        opacity: 1
                    });
                    this.triggers = [{
                        atProgress: 0.3,
                        duration: 0.5,
                        timeline: e
                    }, {
                        atProgress: 0.9,
                        duration: 0.1,
                        useFullProgress: !0,
                        timeline: u
                    }]
                }
            }, {
                key: "playVideo",
                value: function () {
                    m.hasTouch() || this.$video.play()
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    var i = this;
                    !this.isReady || this.progress === t && this.fullProgress === e || (this.triggers.forEach(function (n) {
                        var r = n.atProgress,
                            s = n.duration,
                            o = n.timeline,
                            a = n.useFullProgress,
                            u = a ? e : t,
                            c = (0, g["default"])(u, [r, r + s], [0, 1]),
                            h = (0, l["default"])(c, 0, 1);
                        i.overrideProgress || o.progress(h)
                    }), t >= this.assetFocusedProgress ? this.playVideo() : this.$video.pause(), this.progress = t, this.fullProgress = e)
                }
            }, {
                key: "setJumpToProgress",
                value: function () {
                    this.setProgress(this.assetFocusedProgress, this.assetFocusedProgress), this.overrideProgress = !0
                }
            }, {
                key: "playToNavStart",
                value: function () {
                    this.overrideProgress = !0, this.timeline.play("assetFocused")
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.$video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1, this.progress >= this.assetFocusedProgress && this.playVideo()
                }
            }]), t
        }();
    e["default"] = w
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(181),
        h = n(c),
        f = i(182),
        d = r(f),
        p = function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.video = this.canvas.querySelector("video"), this.triggers = [], this.isMobile = h.isMobileResolution()
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), (0, d["default"])(this.video)
                }
            }, {
                key: "init",
                value: function () {
                    var t = new u.TimelineLite({
                        paused: !0
                    });
                    t.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: "0",
                        ease: u.Power2.easeOut
                    }, 0.2).staggerTo(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2), this.triggers.push({
                        atProgress: 0,
                        duration: 1,
                        timeline: t
                    })
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    var e = this;
                    this.navMarkers = [{
                        canvas: this.canvas,
                        setJumpToProgress: function () {
                            e.setProgress(0, 0)
                        },
                        name: "Architecture",
                        offsetTop: this.canvas.offsetTop + t.height / 2
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    h.hasTouch() || (this.paused = !1, this.video.play())
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== t && (t > 0.6 && !this.animationPause ? (this.animationPause = !0, this.video.pause()) : t < 0.6 && this.animationPause && (this.animationPause = !1, this.video.play()), this.triggers.forEach(function (e) {
                        var i = e.atProgress,
                            n = e.duration,
                            r = e.timeline,
                            s = e.useFullProgress,
                            o = (0, a["default"])(((s ? fullProgress : t) - i) / n, 0, 1);
                        r.progress(o)
                    }), this.progress = t)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = p
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = i(223),
        u = r(l),
        c = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        h = i(174),
        f = i(181),
        d = n(f),
        p = i(182),
        m = r(p),
        v = function () {
            function t(e) {
                var i = e.selector,
                    n = e.onNextClick;
                void 0 === n ? u["default"] : n;
                s(this, t), this.canvas = document.querySelector(i), this.paused = !0, this.background = this.canvas.querySelector(".dangerous--background--js"), this.mobileBackground = this.canvas.querySelector(".dangerous--mobile-background--js"), this.veil1 = this.canvas.querySelector(".dangerous--veil--js"), this.veil2 = this.canvas.querySelector(".veil"), this.video = this.canvas.querySelector("video"), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copy2 = Array.from(this.canvas.getElementsByClassName("copy2")), this.copy3 = Array.from(this.canvas.getElementsByClassName("copy3"))
            }
            return c(t, [{
                key: "load",
                value: function () {
                    return this.init(), (0, m["default"])(this.video)
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "init",
                value: function () {
                    var t = this,
                        e = new h.TimelineLite({
                            paused: !0
                        }),
                        i = h.Linear.easeNone,
                        n = 2,
                        r = {
                            opacity: 1,
                            y: 0,
                            ease: i
                        };
                    e.to(this.copy1, n, r).to(this.copy1, n, {
                        opacity: 0,
                        y: -50,
                        ease: i
                    }, "+=2").add(function () {
                        d.hasTouch() || t.video.play()
                    }).to([this.background, this.mobileBackground], n, {
                        opacity: 1
                    }).to(this.veil1, n, {
                        opacity: 1
                    }, "+=2").staggerTo(this.copy2, n, r, 0.2).staggerTo(this.copy2, n, {
                        opacity: 0,
                        y: "-50px",
                        ease: i
                    }, 0.2).to(this.veil2, 2, {
                        opacity: 1,
                        ease: i
                    }).staggerTo(this.copy3, n, {
                        opacity: 1,
                        y: 0,
                        ease: i
                    }, 0.2).add(function () {
                        d.hasTouch() || t.video.pause()
                    }), this.triggers = [{
                        atProgress: -0.3,
                        duration: 1.2,
                        timeline: e
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== e && this.triggers && (this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            l = (0, a["default"])(((o ? e : t) - n) / (r / 1.4), 0, 1);
                        s.progress(l)
                    }), this.progress = e)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = v
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(180),
        h = (n(c), i(192)),
        f = (r(h), i(181)),
        d = n(f),
        p = function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copy2 = Array.from(this.canvas.getElementsByClassName("copy2")), this.buttons = Array.from(this.canvas.getElementsByClassName("rosesButton")), this.markers = Array.from(this.canvas.getElementsByClassName("marker")), this.paused = !0, this.triggers = [], this.isMobile = d.isMobileResolution()
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), Promise.resolve()
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "init",
                value: function () {
                    var t = this,
                        e = new u.TimelineLite({
                            paused: !0
                        });
                    this.buttons.forEach(function (e, i) {
                        e.addEventListener("mouseover", function () {
                            t.markers[i].classList.add("selected")
                        }), e.addEventListener("mouseout", function () {
                            t.markers.forEach(function (t) {
                                t.classList.contains("selected") && t.classList.remove("selected")
                            })
                        })
                    }), e.to(this.copy1, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }).to(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }).staggerTo(this.copy2, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2), this.triggers = [{
                        atProgress: 0,
                        duration: 1,
                        timeline: e
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== e && (this.triggers && this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            l = (0, a["default"])(((o ? e : t) - n) / (r / 1.4), 0, 1);
                        s.progress(l)
                    }), this.progress = e)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = p
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) {
                i[e] = t[e]
            }
            return i
        }
        return Array.from(t)
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function o(t) {
        var e = t.querySelector(".team--intro--js"),
            i = t.querySelector(".team--grid--js"),
            n = new f.TimelineLite({
                paused: !0
            }),
            r = f.Linear.easeNone,
            s = 2,
            o = {
                opacity: 1,
                y: 0,
                ease: r
            };
        return n.to(e, s, o).to(e, s, {
            opacity: 0,
            y: -50,
            ease: r
        }, "+=2").to(i, s, o, "-=0.5"), n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(178),
        l = n(a),
        u = i(223),
        c = n(u),
        h = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        f = i(174),
        d = i(192),
        p = n(d),
        m = "undefined" == typeof Promise ? i(183).Promise : Promise,
        v = function () {
            function t(e) {
                var i = e.selector,
                    n = e.onNextClick;
                void 0 === n ? c["default"] : n;
                s(this, t), this.canvas = document.querySelector(i), this.paused = !0, this.triggers = []
            }
            return h(t, [{
                key: "load",
                value: function () {
                    var t = this,
                        e = [].concat(r(this.canvas.querySelectorAll("img"))).map(function (t) {
                            return new m(function (e) {
                                t.complete && e(), t.addEventListener("load", function () {
                                    e()
                                }, !1)
                            })
                        });
                    return Promise.all(e).then(function () {
                        t.init()
                    })
                }
            }, {
                key: "initNoObjectFitFallback",
                value: function () {
                    [].concat(r(this.canvas.querySelectorAll(".team--member"))).forEach(function (t) {
                        var e = t.querySelector("img");
                        t.style.backgroundImage = "url(" + e.src + ")"
                    })
                }
            }, {
                key: "init",
                value: function () {
                    Modernizr.objectfit || this.initNoObjectFitFallback(), this.triggers = [{
                        atProgress: -0.3,
                        duration: 0.8,
                        timeline: o(this.canvas)
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== t && (this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            a = (0, p["default"])(o ? e : t, [n, n + r], [0, 1]),
                            u = (0, l["default"])(a, 0, 1);
                        s.progress(u)
                    }), this.progress = t)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = v
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function o(t, e) {
        var i = t.querySelector(".sensor--background-transition"),
            n = t.querySelector(".architecture--container--js"),
            r = t.querySelector(".sensor-quote--js"),
            s = t.querySelector(".sensor-subtitle--js"),
            o = new f.TimelineLite({
                paused: !0
            }),
            a = f.Linear.easeNone;
        return o.set(i, {
            y: "0%"
        }).set(n, {
            y: "100%"
        }).set(r, {
            opacity: 0,
            y: "50%"
        }).to(r, 1, {
            opacity: 1,
            y: "-40%",
            ease: a
        }).to(s, 1, {
            opacity: 1,
            y: "-32.5%",
            ease: a
        }).to(n, 1, {
            y: e ? "29%" : "33%",
            ease: a
        }, "-=1").add([new f.TweenLite(r, 1, {
            opacity: 0,
            y: "-150%",
            ease: a
        })], "+=0.5").add([new f.TweenLite(i, 2, {
            y: "-100%",
            ease: a
        }), new f.TweenLite(n, 2, {
            y: "-30%",
            ease: a
        })], "-=1.3"), o.progress(0.0001), o
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(178),
        l = r(a),
        u = i(223),
        c = r(u),
        h = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        f = i(174),
        d = i(214),
        p = r(d),
        m = i(192),
        v = r(m),
        g = i(181),
        y = n(g),
        _ = "undefined" == typeof Promise ? i(183).Promise : Promise,
        w = "architecture",
        b = function () {
            function t(e) {
                var i = this,
                    n = e.selector,
                    r = e.onNextClick;
                void 0 === r ? c["default"] : r;
                if (s(this, t), this.handleResize = function (t) {
                        i.isMobile = y.isMobileResolution(t);
                        var e = o(i.canvas, i.isMobile);
                        i.triggers = [{
                            atProgress: 0,
                            duration: 0.7,
                            useFullProgress: !0,
                            timeline: e
                        }]
                    }, this.isReady = !1, this.canvas = document.querySelector(n), this.paused = !0, this.isMobile = y.isMobileResolution(), this.isMobile) {
                    var a = this.canvas.querySelector("#" + w);
                    a.width = 621, a.height = 1104
                }
                this.state = {
                    progress: 0
                }, this.progress = 0
            }
            return h(t, [{
                key: "load",
                value: function () {
                    var t = this;
                    this.init();
                    var e = this.isMobile ? "https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/architecture-mobile/judgement" : "https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/architecture/judgement";
                    return new _(function (i) {
                        t.canvasSequence = new p["default"]({
                            canvas: w,
                            sequenceStart: 0,
                            sequencePath: e,
                            sequenceEnd: 85,
                            fileType: ".webp",
                            loadCallback: t.handleSequenceLoad.bind(t, i),
                            mode: p["default"].PlayMode.MANUAL
                        }), t.canvasSequence.pause()
                    })
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    this.isReady = !0, t()
                }
            }, {
                key: "init",
                value: function () {}
            }, {
                key: "pause",
                value: function () {
                    this.canvasSequence && this.canvasSequence.pause(), this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    if (this.isReady) {
                        var i = (0, l["default"])(t, -1, 1),
                            n = (0, l["default"])(e, -1, 1);
                        this.progress === i && this.fullProgress === n || (this.canvasSequence.setProgress((0, v["default"])(i, [0.2, 1], [0, 1])), this.triggers.forEach(function (t) {
                            var e = t.atProgress,
                                i = t.duration,
                                r = t.timeline,
                                s = t.useFullProgress,
                                o = (0, l["default"])(((s ? n : o) - e) / i, 0, 1);
                            r.progress(o)
                        }), this.progress = i, this.fullProgress = n)
                    }
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = b
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(181),
        h = n(c),
        f = i(182),
        d = r(f),
        p = function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.video = this.canvas.querySelector("video"), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.triggers = [], this.isMobile = h.isMobileResolution()
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), (0, d["default"])(this.video)
                }
            }, {
                key: "init",
                value: function () {
                    var t = new u.TimelineLite({
                        paused: !0
                    });
                    this.triggers = [], t.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2).staggerTo(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2), this.triggers.push({
                        atProgress: 0,
                        duration: 1,
                        timeline: t
                    })
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    var e = this;
                    this.navMarkers = [{
                        canvas: this.canvas,
                        setJumpToProgress: function () {
                            e.setProgress(0, 0)
                        },
                        name: "Seine",
                        offsetTop: this.canvas.offsetTop + t.height / 2
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    h.hasTouch() || (this.paused = !1, this.video.play())
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== t && (t > 0.6 && !this.animationPause ? (this.animationPause = !0, this.video.pause()) : t < 0.6 && this.animationPause && (this.animationPause = !1, this.video.play()), this.triggers.forEach(function (e) {
                        var i = e.atProgress,
                            n = e.duration,
                            r = e.timeline,
                            s = e.useFullProgress,
                            o = (0, a["default"])(((s ? fullProgress : t) - i) / n, 0, 1);
                        r.progress(o)
                    }), this.progress = t)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = p
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function o(t, e) {
        var i = t.querySelector(".lastJudgement-quote--js"),
            n = new f.TimelineLite({
                paused: !0
            }),
            r = f.Linear.easeNone;
        return n.set(i, {
            opacity: 1,
            y: "50%"
        }).add([new f.TweenLite(i, 1, {
            opacity: 0,
            y: "-250%",
            ease: r
        })], "+=0.1"), n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(178),
        l = r(a),
        u = i(223),
        c = r(u),
        h = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        f = i(174),
        d = i(214),
        p = r(d),
        m = i(192),
        v = r(m),
        g = i(181),
        y = n(g),
        _ = "undefined" == typeof Promise ? i(183).Promise : Promise,
        w = "lastJudgement-sequence",
        b = function () {
            function t(e) {
                var i = this,
                    n = e.selector,
                    r = e.onNextClick;
                void 0 === r ? c["default"] : r;
                s(this, t), this.showImages = function () {
                    i.showingImages || (i.showingImages = !0, f.TweenMax.to(i.empire, 1, {
                        height: i.isMobile ? "42vw" : "100vw",
                        ease: f.Linear.easeNone
                    }), f.TweenMax.to(i.parent, 1, {
                        backgroundColor: "rgba(44, 46, 49, 1)",
                        ease: f.Linear.easeNone
                    }), f.TweenMax.to(i.strokes, 1, {
                        strokeDashoffset: 0,
                        ease: f.Linear.easeNone
                    }), f.TweenMax.to(i.key, 1, {
                        opacity: 1,
                        ease: f.Linear.easeNone
                    }), f.TweenMax.to(i.seq, 1, {
                        opacity: 1,
                        ease: f.Linear.easeNone,
                        delay: 5.5
                    }))
                }, this.hideImages = function () {
                    i.showingImages && (i.showingImages = !1, f.TweenMax.to(i.seq, 1, {
                        opacity: 1,
                        ease: f.Linear.easeNone
                    }), f.TweenMax.to(i.empire, 1, {
                        height: "0vw",
                        ease: f.Linear.easeNone
                    }), f.TweenMax.to(i.parent, 1, {
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        ease: f.Linear.easeNone
                    }), f.TweenMax.to(i.strokes, 1, {
                        strokeDashoffset: 500,
                        ease: f.Linear.easeNone
                    }), f.TweenMax.to(i.key, 1, {
                        opacity: 0,
                        ease: f.Linear.easeNone
                    }))
                }, this.canvas = document.querySelector(n), this.seq = Array.from(this.canvas.getElementsByTagName("canvas")), this.empire = Array.from(this.canvas.getElementsByClassName("empire")), this.strokes = Array.from(this.canvas.getElementsByClassName("stroke")), this.key = Array.from(this.canvas.getElementsByClassName("key")), this.parent = Array.from(this.canvas.getElementsByClassName("beat--lastJudgement")), this.paused = !0, this.isReady = !1, this.showingImages = !1, this.state = {
                    progress: 0
                }, this.progress = 0
            }
            return h(t, [{
                key: "load",
                value: function () {
                    var t = this;
                    this.init();
                    var e = this.isMobile ? "	https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/lastJudgement/mobile/king" : "	https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/lastJudgement/desktop/king",
                        i = 46;
                    return new _(function (n) {
                        t.canvasSequence = new p["default"]({
                            canvas: w,
                            sequenceStart: 1,
                            sequencePath: e,
                            sequenceEnd: i,
                            fileType: ".webp",
                            loadCallback: t.handleSequenceLoad.bind(t, n),
                            mode: p["default"].PlayMode.MANUAL,
                            isPaused: !0
                        }), t.canvasSequence.pause()
                    }).then(function () {
                        t.isReady = !0
                    })
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    this.isMobile = y.isMobileResolution(t)
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "init",
                value: function () {
                    var t = o(this.canvas, this.isMobile);
                    this.triggers = [{
                        atProgress: 0.1,
                        duration: 0.9,
                        useFullProgress: !0,
                        timeline: t
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.canvasSequence && this.canvasSequence.pause(), this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    if (this.isReady) {
                        1 === t ? this.showImages() : this.hideImages();
                        var i = (0, l["default"])(t, -1, 1),
                            n = (0, l["default"])(e, -1, 1);
                        this.progress === i && this.fullProgress === n || (this.canvasSequence.setProgress((0, v["default"])(i, [0.2, 1], [0, 1])), this.triggers.forEach(function (t) {
                            var e = t.atProgress,
                                i = t.duration,
                                r = t.timeline,
                                s = t.useFullProgress,
                                o = (0, l["default"])(((s ? n : o) - e) / i, 0, 1);
                            r.progress(o)
                        }), this.progress = i, this.fullProgress = n)
                    }
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = b
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = i(223),
        u = r(l),
        c = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        h = i(240),
        f = r(h),
        d = i(180),
        p = (n(d), i(174)),
        m = function () {
            function t(e) {
                var i = e.selector,
                    n = e.onNextClick;
                void 0 === n ? u["default"] : n;
                s(this, t), this.selector = i, this.canvas = document.querySelector(i), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.triggers = null, this.paused = !0, this.state = {
                    progress: 0
                }
            }
            return c(t, [{
                key: "load",
                value: function () {
                    return this.init()
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "init",
                value: function () {
                    var t = new p.TimelineLite({
                        paused: !0
                    });
                    t.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: 0,
                        ease: p.Power2.easeOut
                    }, 0.2), t.progress(0.0001), this.triggers = [{
                        atProgress: 0.6,
                        duration: 0.3,
                        timeline: t
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.model.pause()
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1, this.model.play()
                }
            }, {
                key: "setProgress",
                value: function (t) {
                    if (this.progress !== t) {
                        var e = (0, a["default"])(t, -1, 1);
                        this.triggers && this.triggers.forEach(function (e) {
                            var i = e.atProgress,
                                n = e.duration,
                                r = e.timeline,
                                s = (0, a["default"])((t - i) / n, 0, 1);
                            r.progress(s)
                        }), this.progress = t
                    }
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = m
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e, i) {
        return (0, u["default"])((t - e) / i, 0, 1)
    }

    function o(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!e) {
            return o(t, new m.TimelineLite({
                paused: !0
            }))
        }
        var i = b.isMobileResolution(),
            n = {
                x: "0%",
                y: "-22%",
                scale: 0.8
            },
            r = {
                x: "15.4%",
                y: "0%"
            };
        return e.progress(0).clear().set(t, {
            x: "0%",
            y: "0%",
            scale: 1
        }).to(t, 1, c({}, i ? n : r, {
            ease: m.Linear.easeNone
        }))
    }

    function a(t) {
        function e(t) {
            var e = this;
            this.matLighterBlue = new p.MeshStandardMaterial({
                side: p.DoubleSide,
                color: "rgb(201,204,212)",
                emissive: "rgb(140,150,160)",
                emissiveIntensity: 0.52,
                roughness: 1,
                metalness: 0
            }), this.matMat = new p.MeshStandardMaterial({
                side: p.DoubleSide,
                color: "rgb(204,204,204)",
                roughness: 0.9,
                metalness: 0.2
            }), this.matLightBlue = new p.MeshStandardMaterial({
                side: p.DoubleSide,
                color: "rgb(49,58,79)",
                emissive: "rgb(66,79,107)",
                emissiveIntensity: 0.5,
                roughness: 1,
                metalness: 0
            }), this.matBlue = new p.MeshStandardMaterial({
                side: p.DoubleSide,
                color: "rgb(31,37,50)",
                emissive: "rgb(31,37,50)",
                emissiveIntensity: 0.5,
                roughness: 1,
                metalness: 0
            }), this.mesh = t, this.DotStartPoint = new p.Object3D, this.DotStartPoint.name = "DotStartPoint", this.DotStartPoint.position.set(0, 333.099, -0), this.DotStartPoint.rotation.set(0, 0, -0), this.Model = new p.Object3D, this.Model.name = "Model", this.Model.position.set(0, 0, -0), this.Model.rotation.set(0, 0, -0), this.Sensors = P.map(function (t, e) {
                var i = new p.Object3D;
                return i.name = "Sensor" + (e + 1), i.position.copy(t), i.rotation.set(0, 0, -0), i
            }), this.LargeSQ = t.children[0], this.Layer1_1 = t.children[1], this.Layer2_1 = t.children[2], this.LargeSQ.Polygon_SelectionSelection = _.LargeSQ_Polygon_SelectionSelection, this.LargeSQ.Polygon_Selection_1Selection = _.LargeSQ_Polygon_Selection_1Selection, t.children[0] = new p.Mesh(g.addMaterialToSelection(this.LargeSQ, [this.LargeSQ.Polygon_SelectionSelection, this.LargeSQ.Polygon_Selection_1Selection], 2), new p.MultiMaterial([this.matLighterBlue, this.matMat])), t.children[0].name = this.LargeSQ, this.LargeSQ = t.children[0], this.Layer1_1.material = this.matLightBlue, this.Layer2_1.material = this.matBlue, this.mesh.traverse(function (t) {
                t instanceof p.Mesh && (t.castShadow = !0, t.receiveShadow = !0)
            }), this.Light = new p.AmbientLight("rgb(255,255,255)", 0.27), this.Light.position.set(115.464, 313.455, 118.058), this.Light.rotation.set(0.585, 0.525, 0), this.Light_4 = new p.PointLight("rgb(237,93,93)", 2.28, 47.607739085, 0.523598775598, 0.476401224402, 2), this.Light_4.position.set(-7.776, -42.504, -2.245), this.Light_4.rotation.set(0, 0, 0), this.Light_4.shadow.mapSize.height = 2048, this.Light_4.shadow.mapSize.width = 2048, this.Light_5 = new p.PointLight("rgb(255,255,255)", 2.2, 500, 0.523598775598, 0.476401224402, 0), this.Light_5.position.set(61.164, 313.472, 122.731), this.Light_5.rotation.set(0.585, 0.525, 0), this.Light_5.shadow.mapSize.height = 2048, this.Light_5.shadow.mapSize.width = 2048, this.camRotWorld = new p.Object3D, this.cameraRig = new p.Object3D, this.Camera = new p.PerspectiveCamera(45, M.offsetWidth / M.offsetHeight, 100, 7000), this.Camera.setFocalLength(v), this.camRotWorld.add(this.cameraRig), this.cameraRig.add(this.Camera), this.cameraRig.position.copy(d), this.cameraRig.rotation.y = -2.272, this.Camera.rotation.x = c, this.Camera.rotation.z = 0, this.LineMaterial = new p.LineBasicMaterial({
                color: "rgb(207,78,62)"
            }), this.SphereMat = new p.MeshBasicMaterial({
                color: "rgb(207,78,62)",
                transparent: !1,
                opacity: 0.75,
                side: p.DoubleSide
            }), this.SphereGeo = new p.SphereGeometry(4, 32, 32), this.lineLength = 20, this.SphereLineGeos = this.Sensors.map(function (t) {
                var i = new p.Geometry;
                return i.vertices.push(new p.Vector3(t.position.x, t.position.y, t.position.z), new p.Vector3(t.position.x, t.position.y - e.lineLength, t.position.z)), i
            }), this.SphereLines = this.SphereLineGeos.map(function (t) {
                return new p.Line(t, e.LineMaterial)
            }), this.Spheres = this.Sensors.map(function (t) {
                var i = new p.Mesh(e.SphereGeo, e.SphereMat);
                return i.position.set(t.position.x, t.position.y, t.position.z), i
            }), this.Model.add.apply(this.Model, this.Spheres), this.Model.add.apply(this.Model, this.SphereLines), this.Model.add.apply(this.Model, this.Sensors), this.Model.add(this.LargeSQ, this.Layer1_1, this.Layer2_1), E.add(this.mesh, this.Light, this.Light_4, this.Light_5, this.Model, this.camRotWorld), this.animateSpheres = function (t) {
                this.Spheres.forEach(function (e, i) {
                    var n = P[i];
                    e.position.copy(u.clone().add(n.clone().sub(u).multiplyScalar(t)))
                })
            }, this.animateCamera = function (t) {
                this.cameraRig.position.copy(d.clone().add(w.clone().multiplyScalar(1 - t)))
            }, this.animateCameraRotation = function (t) {
                this.Camera.rotation.x = c + (h - c) * t
            }, this.animateSensorLines = function (t) {
                var e = this;
                this.SphereLineGeos.forEach(function (i) {
                    if (2 === i.vertices.length) {
                        var n = i.vertices[0],
                            r = i.vertices[1];
                        r.y = n.y - e.lineLength * t, i.verticesNeedUpdate = !0
                    }
                })
            }, this.animate = function (t) {
                var e = s(t, 0, 0.4);
                this.animateCamera(e);
                var i = s(t, 0, 0.4);
                this.animateCameraRotation(i);
                var n = s(t, 0, 0.5);
                this.animateSpheres(n);
                var r = s(t, 0.5, 0.1);
                this.animateSensorLines(r);
                var o = s(t, 0.6, 0.2)
            }
        }

        function i(t, i) {
            A = new e(i), n.call(this), this.obj = A, t()
        }

        function n() {
            O.setSize(M.offsetWidth, M.offsetHeight), O.physicallyBasedShading = !0, O.shadowMap.enabled = !0, O.shadowMap.soft = !0, O.shadowMap.type = p.PCFSoftShadowMap, M.appendChild(O.domElement), window.addEventListener("resize", function () {
                A.Camera.aspect = M.offsetWidth / M.offsetHeight, A.Camera.updateProjectionMatrix(), O.setSize(M.offsetWidth, M.offsetHeight), L = o(M, L)
            }, !1), b.hasTouch() || new f["default"]({
                source: M,
                multiplier: 1,
                friction: 0.95,
                update: function (t) {
                    A.Model.rotation.y = t / 100 * 0.5
                }
            }), x = Date.now(), r()
        }

        function r() {
            !A || R && C || (g.renderAnims(l), O.render(E, A.Camera), requestAnimationFrame(r), R || (R = !0))
        }
        var a = this,
            l = [],
            u = new p.Vector3(0, 587, 0),
            c = -0.746,
            h = -0.785,
            d = new p.Vector3((-1701.176), 2225.623, (-1438.152)),
            m = u.clone().sub(d),
            v = 120,
            y = 350,
            w = m.clone().normalize().multiplyScalar(m.length() - y).add(new p.Vector3(0, 20, 0)),
            x = null,
            P = [new p.Vector3((-67.614), 63.671, 29.547), new p.Vector3((-2.311), 66.437, (-89.602)), new p.Vector3((-82.003), 56.3, 8.296), new p.Vector3(22.815, 57.226, (-72.601)), new p.Vector3((-18.467), 56.711, 68.265), new p.Vector3(75.32, 66.042, 6.225), new p.Vector3((-2.075), (-17.442), 0.83), new p.Vector3(3.527, 13.337, 23.239), new p.Vector3(9.337, 12.129, (-23.654)), new p.Vector3((-40.24), 14.527, (-20.111)), new p.Vector3((-38.814), 56.643, (-66.377)), new p.Vector3((-15.769), (-10.334), (-22.617))],
            M = document.getElementById(t),
            E = new p.Scene,
            O = new p.WebGLRenderer(S["default"].webGlRenderer);
        S["default"].overrideRenderer(O);
        var A, R = !1,
            C = !1,
            L = o(M),
            j = new p.OBMLoader;
        this.readyPromise = new k(function (t, e) {
            j.load("./assets/models/tc.obm", i.bind(a, t), function () {}, e)
        }), this.pause = function () {
            C = !0
        }, this.play = function () {
            C && (C = !1, requestAnimationFrame(r))
        }, this.setProgress = function (t) {
            var e = (0, T["default"])(t, [-0.25, 1], [0, 1]);
            A && A.animate(e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = i(178),
        u = r(l),
        c = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) {
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
            }
            return t
        },
        h = i(190),
        f = r(h),
        d = i(217),
        p = n(d),
        m = i(174),
        v = i(193),
        g = n(v),
        y = i(241),
        _ = n(y),
        w = i(181),
        b = n(w),
        x = i(192),
        T = r(x),
        P = i(194),
        S = r(P),
        k = "undefined" == typeof Promise ? i(183).Promise : Promise;
    e["default"] = a
}, function (t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LargeSQ_Polygon_SelectionSelection = [0, 1, 2, 4, 5, 6, 7, 8, 11, 13, 14, 15, 18, 19, 21, 22, 26, 27, 28, 29, 31, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 56, 59, 60, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 90, 95, 96, 97, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 112, 113, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 183, 184, 186, 187, 188, 190, 194, 195, 197, 199, 200, 211, 213, 214, 215, 216, 219, 222, 223, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 237, 238, 245, 246, 247, 248, 250, 251, 252, 254, 255, 256, 259, 260, 261, 262, 264, 265, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 279, 280, 281, 282, 283, 284, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 318, 320, 321, 332, 333, 334, 335, 336, 338, 339, 340, 341, 342, 343, 344, 345, 347, 348, 349, 352, 355, 358, 361, 363, 367, 370, 375, 377, 378, 379, 380, 383, 384, 387, 392, 393, 394, 395, 396, 397, 398, 399, 401, 402, 403, 404, 405, 407, 408, 410, 412, 414, 415, 416, 417, 418, 419, 422, 423, 426, 429, 430, 431, 435, 437, 440, 443, 444, 448, 449, 450, 451, 452, 453, 455, 456, 458, 460, 464, 466, 467, 468, 469, 470, 472, 480, 481, 482, 483, 484, 486, 487, 489, 492, 493, 495, 496, 497, 498, 499, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 513, 514, 515, 516, 517, 519, 520, 521, 522, 523, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 600, 601, 603, 606, 607, 610, 611, 613, 614, 615, 616, 617, 618, 619, 624, 626, 629, 631, 632, 634, 636, 638, 640, 641, 642, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 659, 660, 661, 662, 667, 668, 669, 670, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 762, 763, 765, 766, 769, 770, 771, 772, 775, 776, 777, 778, 781, 783, 800, 802, 803, 804, 807, 808, 810, 813, 814, 817, 818, 819, 820, 824, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 872, 873, 874, 875, 879, 882, 883, 885, 886, 887, 888, 889, 890, 892, 893, 894, 895, 896, 897, 898, 900, 901, 902, 904, 905, 906, 907, 909, 910, 913, 914, 915, 916, 917, 925, 926, 928, 929, 930, 931, 932, 933, 934, 935, 937, 938, 939, 940, 942, 950, 951, 952, 953, 954, 955, 965, 966, 967, 968, 985, 986, 987, 989, 990, 991, 993, 994, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1201, 13708, 13709, 13710, 23360, 23412, 24473, 24474, 24475, 24476, 24477, 24478, 24479, 24480, 24481, 24483, 24484, 24485, 24487, 24488, 24489, 24490, 24491, 24492, 24493, 24494, 24495, 24496, 24497, 24498, 24499, 24500, 24501, 24502, 24503, 24504, 24505, 24506, 24507, 24508, 24509, 24510, 24511, 24512, 24513, 24514, 24515, 24516, 24517, 24518, 24519, 24520, 24521, 24522, 24523, 24524, 24525, 24526, 24527, 24528, 24529, 24530, 24531, 24533, 24534, 24536, 24537, 24538, 24539, 24540, 24541, 24542, 24543, 24544, 24545, 24546, 24547, 24548, 24549, 24550, 24551, 24552, 24553, 24554, 24555, 24556, 24557, 24558, 24559, 24560, 24561, 24562, 24563, 24564, 24565, 24566, 24567, 24568, 24569, 24570, 24571, 24572, 24573, 24574, 24575, 24576, 24577, 24578, 24579, 24580, 24581, 24582, 24583, 24584, 24585, 24586, 24587, 24588, 24589, 24590, 24591, 24592, 24593, 24594, 24595, 24596, 24597, 24598, 24599, 24600, 24601, 24602, 24603, 24604, 24605, 24606, 24607, 24608, 24609, 24610, 24611, 24612, 24613, 24614, 24615, 24616, 24617, 24618, 24619, 24620, 24621, 24622, 24623, 24624, 24625, 24626, 24627, 24628, 24629, 24630, 24631, 24632, 24633, 24634, 24635, 24636, 24637, 24638, 24639, 24640, 24641, 24642, 24643, 24644, 24645, 24646, 24647, 24648, 24649, 24650, 24651, 24652, 24653, 24654, 24655, 24656, 24657, 24658, 24659, 24660, 24661, 24662, 24663, 24664, 24665, 24666, 24667, 24668, 24669, 24670, 24671, 24672, 24673, 24674, 24675, 24676, 24677, 24678, 24679, 24680, 24681, 24682, 24683, 24684, 24685, 24686, 24687, 24688, 24689, 24690, 24691, 24692, 24693, 24694, 24695, 24696, 24697, 24698, 24699, 24700, 24701, 24702, 24703, 24704, 24705, 24706, 24707, 24708, 24709, 24710, 24711, 24712, 24713, 24714, 24715, 24716, 24717, 24718, 24719, 24720, 24721, 24722, 24723, 24724, 24725], e.LargeSQ_Polygon_Selection_1Selection = [3, 9, 10, 12, 16, 17, 20, 23, 24, 25, 30, 32, 33, 34, 38, 39, 46, 54, 55, 57, 58, 61, 70, 72, 84, 91, 92, 93, 94, 98, 102, 108, 111, 114, 145, 148, 152, 159, 163, 164, 165, 166, 168, 170, 179, 180, 181, 182, 185, 189, 191, 192, 193, 196, 198, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 212, 217, 218, 220, 221, 224, 236, 239, 240, 241, 242, 243, 244, 249, 253, 257, 258, 263, 266, 278, 285, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 319, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 337, 346, 350, 351, 353, 354, 356, 357, 359, 360, 362, 364, 365, 366, 368, 369, 371, 372, 373, 374, 376, 381, 382, 385, 386, 388, 389, 390, 391, 400, 406, 409, 411, 413, 420, 421, 424, 425, 427, 428, 432, 433, 434, 436, 438, 439, 441, 442, 445, 446, 447, 454, 457, 459, 461, 462, 463, 465, 471, 473, 474, 475, 476, 477, 478, 479, 485, 488, 490, 491, 494, 500, 512, 518, 524, 539, 599, 602, 604, 605, 608, 609, 612, 620, 621, 622, 623, 625, 627, 628, 630, 633, 635, 637, 639, 643, 658, 663, 664, 665, 666, 671, 690, 691, 692, 718, 758, 759, 760, 761, 764, 767, 768, 773, 774, 779, 780, 782, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 801, 805, 806, 809, 811, 812, 815, 816, 821, 822, 823, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 868, 869, 870, 871, 876, 877, 878, 880, 881, 884, 891, 899, 903, 908, 911, 912, 918, 919, 920, 921, 922, 923, 924, 927, 936, 941, 943, 944, 945, 946, 947, 948, 949, 956, 957, 958, 959, 960, 961, 962, 963, 964, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 988, 992, 995, 996, 997, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548, 2549, 2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2637, 2638, 2639, 2640, 2641, 2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660, 2661, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671, 2672, 2673, 2674, 2675, 2676, 2677, 2678, 2679, 2680, 2681, 2682, 2683, 2684, 2685, 2686, 2687, 2688, 2689, 2690, 2691, 2692, 2693, 2694, 2695, 2696, 2697, 2698, 2699, 2700, 2701, 2702, 2703, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716, 2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727, 2728, 2729, 2730, 2731, 2732, 2733, 2734, 2735, 2736, 2737, 2738, 2739, 2740, 2741, 2742, 2743, 2744, 2745, 2746, 2747, 2748, 2749, 2750, 2751, 2752, 2753, 2754, 2755, 2756, 2757, 2758, 2759, 2760, 2761, 2762, 2763, 2764, 2765, 2766, 2767, 2768, 2769, 2770, 2771, 2772, 2773, 2774, 2775, 2776, 2777, 2778, 2779, 2780, 2781, 2782, 2783, 2784, 2785, 2786, 2787, 2788, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 2798, 2799, 2800, 2801, 2802, 2803, 2804, 2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835, 2836, 2837, 2838, 2839, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2869, 2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877, 2878, 2879, 2880, 2881, 2882, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892, 2893, 2894, 2895, 2896, 2897, 2898, 2899, 2900, 2901, 2902, 2903, 2904, 2905, 2906, 2907, 2908, 2909, 2910, 2911, 2912, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 2923, 2924, 2925, 2926, 2927, 2928, 2929, 2930, 2931, 2932, 2933, 2934, 2935, 2936, 2937, 2938, 2939, 2940, 2941, 2942, 2943, 2944, 2945, 2946, 2947, 2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2969, 2970, 2971, 2972, 2973, 2974, 2975, 2976, 2977, 2978, 2979, 2980, 2981, 2982, 2983, 2984, 2985, 2986, 2987, 2988, 2989, 2990, 2991, 2992, 2993, 2994, 2995, 2996, 2997, 2998, 2999, 3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069, 3070, 3071, 3072, 3073, 3074, 3075, 3076, 3077, 3078, 3079, 3080, 3081, 3082, 3083, 3084, 3085, 3086, 3087, 3088, 3089, 3090, 3091, 3092, 3093, 3094, 3095, 3096, 3097, 3098, 3099, 3100, 3101, 3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3134, 3135, 3136, 3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144, 3145, 3146, 3147, 3148, 3149, 3150, 3151, 3152, 3153, 3154, 3155, 3156, 3157, 3158, 3159, 3160, 3161, 3162, 3163, 3164, 3165, 3166, 3167, 3168, 3169, 3170, 3171, 3172, 3173, 3174, 3175, 3176, 3177, 3178, 3179, 3180, 3181, 3182, 3183, 3184, 3185, 3186, 3187, 3188, 3189, 3190, 3191, 3192, 3193, 3194, 3195, 3196, 3197, 3198, 3199, 3200, 3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3210, 3211, 3212, 3213, 3214, 3215, 3216, 3217, 3218, 3219, 3220, 3221, 3222, 3223, 3224, 3225, 3226, 3227, 3228, 3229, 3230, 3231, 3232, 3233, 3234, 3235, 3236, 3237, 3238, 3239, 3240, 3241, 3242, 3243, 3244, 3245, 3246, 3247, 3248, 3249, 3250, 3251, 3252, 3253, 3254, 3255, 3256, 3257, 3258, 3259, 3260, 3261, 3262, 3263, 3264, 3265, 3266, 3267, 3268, 3269, 3270, 3271, 3272, 3273, 3274, 3275, 3276, 3277, 3278, 3279, 3280, 3281, 3282, 3283, 3284, 3285, 3286, 3287, 3288, 3289, 3290, 3291, 3292, 3293, 3294, 3295, 3296, 3297, 3298, 3299, 3300, 3301, 3302, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310, 3311, 3312, 3313, 3314, 3315, 3316, 3317, 3318, 3319, 3320, 3321, 3322, 3323, 3324, 3325, 3326, 3327, 3328, 3329, 3330, 3331, 3332, 3333, 3334, 3335, 3336, 3337, 3338, 3339, 3340, 3341, 3342, 3343, 3344, 3345, 3346, 3347, 3348, 3349, 3350, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3358, 3359, 3360, 3361, 3362, 3363, 3364, 3365, 3366, 3367, 3368, 3369, 3370, 3371, 3372, 3373, 3374, 3375, 3376, 3377, 3378, 3379, 3380, 3381, 3382, 3383, 3384, 3385, 3386, 3387, 3388, 3389, 3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397, 3398, 3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3407, 3408, 3409, 3410, 3411, 3412, 3413, 3414, 3415, 3416, 3417, 3418, 3419, 3420, 3421, 3422, 3423, 3424, 3425, 3426, 3427, 3428, 3429, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439, 3440, 3441, 3442, 3443, 3444, 3445, 3446, 3447, 3448, 3449, 3450, 3451, 3452, 3453, 3454, 3455, 3456, 3457, 3458, 3459, 3460, 3461, 3462, 3463, 3464, 3465, 3466, 3467, 3468, 3469, 3470, 3471, 3472, 3473, 3474, 3475, 3476, 3477, 3478, 3479, 3480, 3481, 3482, 3483, 3484, 3485, 3486, 3487, 3488, 3489, 3490, 3491, 3492, 3493, 3494, 3495, 3496, 3497, 3498, 3499, 3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545, 3546, 3547, 3548, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3562, 3563, 3564, 3565, 3566, 3567, 3568, 3569, 3570, 3571, 3572, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586, 3587, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3596, 3597, 3598, 3599, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3618, 3619, 3620, 3621, 3622, 3623, 3624, 3625, 3626, 3627, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3638, 3639, 3640, 3641, 3642, 3643, 3644, 3645, 3646, 3647, 3648, 3649, 3650, 3651, 3652, 3653, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3661, 3662, 3663, 3664, 3665, 3666, 3667, 3668, 3669, 3670, 3671, 3672, 3673, 3674, 3675, 3676, 3677, 3678, 3679, 3680, 3681, 3682, 3683, 3684, 3685, 3686, 3687, 3688, 3689, 3690, 3691, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705, 3706, 3707, 3708, 3709, 3710, 3711, 3712, 3713, 3714, 3715, 3716, 3717, 3718, 3719, 3720, 3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728, 3729, 3730, 3731, 3732, 3733, 3734, 3735, 3736, 3737, 3738, 3739, 3740, 3741, 3742, 3743, 3744, 3745, 3746, 3747, 3748, 3749, 3750, 3751, 3752, 3753, 3754, 3755, 3756, 3757, 3758, 3759, 3760, 3761, 3762, 3763, 3764, 3765, 3766, 3767, 3768, 3769, 3770, 3771, 3772, 3773, 3774, 3775, 3776, 3777, 3778, 3779, 3780, 3781, 3782, 3783, 3784, 3785, 3786, 3787, 3788, 3789, 3790, 3791, 3792, 3793, 3794, 3795, 3796, 3797, 3798, 3799, 3800, 3801, 3802, 3803, 3804, 3805, 3806, 3807, 3808, 3809, 3810, 3811, 3812, 3813, 3814, 3815, 3816, 3817, 3818, 3819, 3820, 3821, 3822, 3823, 3824, 3825, 3826, 3827, 3828, 3829, 3830, 3831, 3832, 3833, 3834, 3835, 3836, 3837, 3838, 3839, 3840, 3841, 3842, 3843, 3844, 3845, 3846, 3847, 3848, 3849, 3850, 3851, 3852, 3853, 3854, 3855, 3856, 3857, 3858, 3859, 3860, 3861, 3862, 3863, 3864, 3865, 3866, 3867, 3868, 3869, 3870, 3871, 3872, 3873, 3874, 3875, 3876, 3877, 3878, 3879, 3880, 3881, 3882, 3883, 3884, 3885, 3886, 3887, 3888, 3889, 3890, 3891, 3892, 3893, 3894, 3895, 3896, 3897, 3898, 3899, 3900, 3901, 3902, 3903, 3904, 3905, 3906, 3907, 3908, 3909, 3910, 3911, 3912, 3913, 3914, 3915, 3916, 3917, 3918, 3919, 3920, 3921, 3922, 3923, 3924, 3925, 3926, 3927, 3928, 3929, 3930, 3931, 3932, 3933, 3934, 3935, 3936, 3937, 3938, 3939, 3940, 3941, 3942, 3943, 3944, 3945, 3946, 3947, 3948, 3949, 3950, 3951, 3952, 3953, 3954, 3955, 3956, 3957, 3958, 3959, 3960, 3961, 3962, 3963, 3964, 3965, 3966, 3967, 3968, 3969, 3970, 3971, 3972, 3973, 3974, 3975, 3976, 3977, 3978, 3979, 3980, 3981, 3982, 3983, 3984, 3985, 3986, 3987, 3988, 3989, 3990, 3991, 3992, 3993, 3994, 3995, 3996, 3997, 3998, 3999, 4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013, 4014, 4015, 4016, 4017, 4018, 4019, 4020, 4021, 4022, 4023, 4024, 4025, 4026, 4027, 4028, 4029, 4030, 4031, 4032, 4033, 4034, 4035, 4036, 4037, 4038, 4039, 4040, 4041, 4042, 4043, 4044, 4045, 4046, 4047, 4048, 4049, 4050, 4051, 4052, 4053, 4054, 4055, 4056, 4057, 4058, 4059, 4060, 4061, 4062, 4063, 4064, 4065, 4066, 4067, 4068, 4069, 4070, 4071, 4072, 4073, 4074, 4075, 4076, 4077, 4078, 4079, 4080, 4081, 4082, 4083, 4084, 4085, 4086, 4087, 4088, 4089, 4090, 4091, 4092, 4093, 4094, 4095, 4096, 4097, 4098, 4099, 4100, 4101, 4102, 4103, 4104, 4105, 4106, 4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121, 4122, 4123, 4124, 4125, 4126, 4127, 4128, 4129, 4130, 4131, 4132, 4133, 4134, 4135, 4136, 4137, 4138, 4139, 4140, 4141, 4142, 4143, 4144, 4145, 4146, 4147, 4148, 4149, 4150, 4151, 4152, 4153, 4154, 4155, 4156, 4157, 4158, 4159, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169, 4170, 4171, 4172, 4173, 4174, 4175, 4176, 4177, 4178, 4179, 4180, 4181, 4182, 4183, 4184, 4185, 4186, 4187, 4188, 4189, 4190, 4191, 4192, 4193, 4194, 4195, 4196, 4197, 4198, 4199, 4200, 4201, 4202, 4203, 4204, 4205, 4206, 4207, 4208, 4209, 4210, 4211, 4212, 4213, 4214, 4215, 4216, 4217, 4218, 4219, 4220, 4221, 4222, 4223, 4224, 4225, 4226, 4227, 4228, 4229, 4230, 4231, 4232, 4233, 4234, 4235, 4236, 4237, 4238, 4239, 4240, 4241, 4242, 4243, 4244, 4245, 4246, 4247, 4248, 4249, 4250, 4251, 4252, 4253, 4254, 4255, 4256, 4257, 4258, 4259, 4260, 4261, 4262, 4263, 4264, 4265, 4266, 4267, 4268, 4269, 4270, 4271, 4272, 4273, 4274, 4275, 4276, 4277, 4278, 4279, 4280, 4281, 4282, 4283, 4284, 4285, 4286, 4287, 4288, 4289, 4290, 4291, 4292, 4293, 4294, 4295, 4296, 4297, 4298, 4299, 4300, 4301, 4302, 4303, 4304, 4305, 4306, 4307, 4308, 4309, 4310, 4311, 4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4321, 4322, 4323, 4324, 4325, 4326, 4327, 4328, 4329, 4330, 4331, 4332, 4333, 4334, 4335, 4336, 4337, 4338, 4339, 4340, 4341, 4342, 4343, 4344, 4345, 4346, 4347, 4348, 4349, 4350, 4351, 4352, 4353, 4354, 4355, 4356, 4357, 4358, 4359, 4360, 4361, 4362, 4363, 4364, 4365, 4366, 4367, 4368, 4369, 4370, 4371, 4372, 4373, 4374, 4375, 4376, 4377, 4378, 4379, 4380, 4381, 4382, 4383, 4384, 4385, 4386, 4387, 4388, 4389, 4390, 4391, 4392, 4393, 4394, 4395, 4396, 4397, 4398, 4399, 4400, 4401, 4402, 4403, 4404, 4405, 4406, 4407, 4408, 4409, 4410, 4411, 4412, 4413, 4414, 4415, 4416, 4417, 4418, 4419, 4420, 4421, 4422, 4423, 4424, 4425, 4426, 4427, 4428, 4429, 4430, 4431, 4432, 4433, 4434, 4435, 4436, 4437, 4438, 4439, 4440, 4441, 4442, 4443, 4444, 4445, 4446, 4447, 4448, 4449, 4450, 4451, 4452, 4453, 4454, 4455, 4456, 4457, 4458, 4459, 4460, 4461, 4462, 4463, 4464, 4465, 4466, 4467, 4468, 4469, 4470, 4471, 4472, 4473, 4474, 4475, 4476, 4477, 4478, 4479, 4480, 4481, 4482, 4483, 4484, 4485, 4486, 4487, 4488, 4489, 4490, 4491, 4492, 4493, 4494, 4495, 4496, 4497, 4498, 4499, 4500, 4501, 4502, 4503, 4504, 4505, 4506, 4507, 4508, 4509, 4510, 4511, 4512, 4513, 4514, 4515, 4516, 4517, 4518, 4519, 4520, 4521, 4522, 4523, 4524, 4525, 4526, 4527, 4528, 4529, 4530, 4531, 4532, 4533, 4534, 4535, 4536, 4537, 4538, 4539, 4540, 4541, 4542, 4543, 4544, 4545, 4546, 4547, 4548, 4549, 4550, 4551, 4552, 4553, 4554, 4555, 4556, 4557, 4558, 4559, 4560, 4561, 4562, 4563, 4564, 4565, 4566, 4567, 4568, 4569, 4570, 4571, 4572, 4573, 4574, 4575, 4576, 4577, 4578, 4579, 4580, 4581, 4582, 4583, 4584, 4585, 4586, 4587, 4588, 4589, 4590, 4591, 4592, 4593, 4594, 4595, 4596, 4597, 4598, 4599, 4600, 4601, 4602, 4603, 4604, 4605, 4606, 4607, 4608, 4609, 4610, 4611, 4612, 4613, 4614, 4615, 4616, 4617, 4618, 4619, 4620, 4621, 4622, 4623, 4624, 4625, 4626, 4627, 4628, 4629, 4630, 4631, 4632, 4633, 4634, 4635, 4636, 4637, 4638, 4639, 4640, 4641, 4642, 4643, 4644, 4645, 4646, 4647, 4648, 4649, 4650, 4651, 4652, 4653, 4654, 4655, 4656, 4657, 4658, 4659, 4660, 4661, 4662, 4663, 4664, 4665, 4666, 4667, 4668, 4669, 4670, 4671, 4672, 4673, 4674, 4675, 4676, 4677, 4678, 4679, 4680, 4681, 4682, 4683, 4684, 4685, 4686, 4687, 4688, 4689, 4690, 4691, 4692, 4693, 4694, 4695, 4696, 4697, 4698, 4699, 4700, 4701, 4702, 4703, 4704, 4705, 4706, 4707, 4708, 4709, 4710, 4711, 4712, 4713, 4714, 4715, 4716, 4717, 4718, 4719, 4720, 4721, 4722, 4723, 4724, 4725, 4726, 4727, 4728, 4729, 4730, 4731, 4732, 4733, 4734, 4735, 4736, 4737, 4738, 4739, 4740, 4741, 4742, 4743, 4744, 4745, 4746, 4747, 4748, 4749, 4750, 4751, 4752, 4753, 4754, 4755, 4756, 4757, 4758, 4759, 4760, 4761, 4762, 4763, 4764, 4765, 4766, 4767, 4768, 4769, 4770, 4771, 4772, 4773, 4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781, 4782, 4783, 4784, 4785, 4786, 4787, 4788, 4789, 4790, 4791, 4792, 4793, 4794, 4795, 4796, 4797, 4798, 4799, 4800, 4801, 4802, 4803, 4804, 4805, 4806, 4807, 4808, 4809, 4810, 4811, 4812, 4813, 4814, 4815, 4816, 4817, 4818, 4819, 4820, 4821, 4822, 4823, 4824, 4825, 4826, 4827, 4828, 4829, 4830, 4831, 4832, 4833, 4834, 4835, 4836, 4837, 4838, 4839, 4840, 4841, 4842, 4843, 4844, 4845, 4846, 4847, 4848, 4849, 4850, 4851, 4852, 4853, 4854, 4855, 4856, 4857, 4858, 4859, 4860, 4861, 4862, 4863, 4864, 4865, 4866, 4867, 4868, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4883, 4884, 4885, 4886, 4887, 4888, 4889, 4890, 4891, 4892, 4893, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4903, 4904, 4905, 4906, 4907, 4908, 4909, 4910, 4911, 4912, 4913, 4914, 4915, 4916, 4917, 4918, 4919, 4920, 4921, 4922, 4923, 4924, 4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4944, 4945, 4946, 4947, 4948, 4949, 4950, 4951, 4952, 4953, 4954, 4955, 4956, 4957, 4958, 4959, 4960, 4961, 4962, 4963, 4964, 4965, 4966, 4967, 4968, 4969, 4970, 4971, 4972, 4973, 4974, 4975, 4976, 4977, 4978, 4979, 4980, 4981, 4982, 4983, 4984, 4985, 4986, 4987, 4988, 4989, 4990, 4991, 4992, 4993, 4994, 4995, 4996, 4997, 4998, 4999, 5000, 5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010, 5011, 5012, 5013, 5014, 5015, 5016, 5017, 5018, 5019, 5020, 5021, 5022, 5023, 5024, 5025, 5026, 5027, 5028, 5029, 5030, 5031, 5032, 5033, 5034, 5035, 5036, 5037, 5038, 5039, 5040, 5041, 5042, 5043, 5044, 5045, 5046, 5047, 5048, 5049, 5050, 5051, 5052, 5053, 5054, 5055, 5056, 5057, 5058, 5059, 5060, 5061, 5062, 5063, 5064, 5065, 5066, 5067, 5068, 5069, 5070, 5071, 5072, 5073, 5074, 5075, 5076, 5077, 5078, 5079, 5080, 5081, 5082, 5083, 5084, 5085, 5086, 5087, 5088, 5089, 5090, 5091, 5092, 5093, 5094, 5095, 5096, 5097, 5098, 5099, 5100, 5101, 5102, 5103, 5104, 5105, 5106, 5107, 5108, 5109, 5110, 5111, 5112, 5113, 5114, 5115, 5116, 5117, 5118, 5119, 5120, 5121, 5122, 5123, 5124, 5125, 5126, 5127, 5128, 5129, 5130, 5131, 5132, 5133, 5134, 5135, 5136, 5137, 5138, 5139, 5140, 5141, 5142, 5143, 5144, 5145, 5146, 5147, 5148, 5149, 5150, 5151, 5152, 5153, 5154, 5155, 5156, 5157, 5158, 5159, 5160, 5161, 5162, 5163, 5164, 5165, 5166, 5167, 5168, 5169, 5170, 5171, 5172, 5173, 5174, 5175, 5176, 5177, 5178, 5179, 5180, 5181, 5182, 5183, 5184, 5185, 5186, 5187, 5188, 5189, 5190, 5191, 5192, 5193, 5194, 5195, 5196, 5197, 5198, 5199, 5200, 5201, 5202, 5203, 5204, 5205, 5206, 5207, 5208, 5209, 5210, 5211, 5212, 5213, 5214, 5215, 5216, 5217, 5218, 5219, 5220, 5221, 5222, 5223, 5224, 5225, 5226, 5227, 5228, 5229, 5230, 5231, 5232, 5233, 5234, 5235, 5236, 5237, 5238, 5239, 5240, 5241, 5242, 5243, 5244, 5245, 5246, 5247, 5248, 5249, 5250, 5251, 5252, 5253, 5254, 5255, 5256, 5257, 5258, 5259, 5260, 5261, 5262, 5263, 5264, 5265, 5266, 5267, 5268, 5269, 5270, 5271, 5272, 5273, 5274, 5275, 5276, 5277, 5278, 5279, 5280, 5281, 5282, 5283, 5284, 5285, 5286, 5287, 5288, 5289, 5290, 5291, 5292, 5293, 5294, 5295, 5296, 5297, 5298, 5299, 5300, 5301, 5302, 5303, 5304, 5305, 5306, 5307, 5308, 5309, 5310, 5311, 5312, 5313, 5314, 5315, 5316, 5317, 5318, 5319, 5320, 5321, 5322, 5323, 5324, 5325, 5326, 5327, 5328, 5329, 5330, 5331, 5332, 5333, 5334, 5335, 5336, 5337, 5338, 5339, 5340, 5341, 5342, 5343, 5344, 5345, 5346, 5347, 5348, 5349, 5350, 5351, 5352, 5353, 5354, 5355, 5356, 5357, 5358, 5359, 5360, 5361, 5362, 5363, 5364, 5365, 5366, 5367, 5368, 5369, 5370, 5371, 5372, 5373, 5374, 5375, 5376, 5377, 5378, 5379, 5380, 5381, 5382, 5383, 5384, 5385, 5386, 5387, 5388, 5389, 5390, 5391, 5392, 5393, 5394, 5395, 5396, 5397, 5398, 5399, 5400, 5401, 5402, 5403, 5404, 5405, 5406, 5407, 5408, 5409, 5410, 5411, 5412, 5413, 5414, 5415, 5416, 5417, 5418, 5419, 5420, 5421, 5422, 5423, 5424, 5425, 5426, 5427, 5428, 5429, 5430, 5431, 5432, 5433, 5434, 5435, 5436, 5437, 5438, 5439, 5440, 5441, 5442, 5443, 5444, 5445, 5446, 5447, 5448, 5449, 5450, 5451, 5452, 5453, 5454, 5455, 5456, 5457, 5458, 5459, 5460, 5461, 5462, 5463, 5464, 5465, 5466, 5467, 5468, 5469, 5470, 5471, 5472, 5473, 5474, 5475, 5476, 5477, 5478, 5479, 5480, 5481, 5482, 5483, 5484, 5485, 5486, 5487, 5488, 5489, 5490, 5491, 5492, 5493, 5494, 5495, 5496, 5497, 5498, 5499, 5500, 5501, 5502, 5503, 5504, 5505, 5506, 5507, 5508, 5509, 5510, 5511, 5512, 5513, 5514, 5515, 5516, 5517, 5518, 5519, 5520, 5521, 5522, 5523, 5524, 5525, 5526, 5527, 5528, 5529, 5530, 5531, 5532, 5533, 5534, 5535, 5536, 5537, 5538, 5539, 5540, 5541, 5542, 5543, 5544, 5545, 5546, 5547, 5548, 5549, 5550, 5551, 5552, 5553, 5554, 5555, 5556, 5557, 5558, 5559, 5560, 5561, 5562, 5563, 5564, 5565, 5566, 5567, 5568, 5569, 5570, 5571, 5572, 5573, 5574, 5575, 5576, 5577, 5578, 5579, 5580, 5581, 5582, 5583, 5584, 5585, 5586, 5587, 5588, 5589, 5590, 5591, 5592, 5593, 5594, 5595, 5596, 5597, 5598, 5599, 5600, 5601, 5602, 5603, 5604, 5605, 5606, 5607, 5608, 5609, 5610, 5611, 5612, 5613, 5614, 5615, 5616, 5617, 5618, 5619, 5620, 5621, 5622, 5623, 5624, 5625, 5626, 5627, 5628, 5629, 5630, 5631, 5632, 5633, 5634, 5635, 5636, 5637, 5638, 5639, 5640, 5641, 5642, 5643, 5644, 5645, 5646, 5647, 5648, 5649, 5650, 5651, 5652, 5653, 5654, 5655, 5656, 5657, 5658, 5659, 5660, 5661, 5662, 5663, 5664, 5665, 5666, 5667, 5668, 5669, 5670, 5671, 5672, 5673, 5674, 5675, 5676, 5677, 5678, 5679, 5680, 5681, 5682, 5683, 5684, 5685, 5686, 5687, 5688, 5689, 5690, 5691, 5692, 5693, 5694, 5695, 5696, 5697, 5698, 5699, 5700, 5701, 5702, 5703, 5704, 5705, 5706, 5707, 5708, 5709, 5710, 5711, 5712, 5713, 5714, 5715, 5716, 5717, 5718, 5719, 5720, 5721, 5722, 5723, 5724, 5725, 5726, 5727, 5728, 5729, 5730, 5731, 5732, 5733, 5734, 5735, 5736, 5737, 5738, 5739, 5740, 5741, 5742, 5743, 5744, 5745, 5746, 5747, 5748, 5749, 5750, 5751, 5752, 5753, 5754, 5755, 5756, 5757, 5758, 5759, 5760, 5761, 5762, 5763, 5764, 5765, 5766, 5767, 5768, 5769, 5770, 5771, 5772, 5773, 5774, 5775, 5776, 5777, 5778, 5779, 5780, 5781, 5782, 5783, 5784, 5785, 5786, 5787, 5788, 5789, 5790, 5791, 5792, 5793, 5794, 5795, 5796, 5797, 5798, 5799, 5800, 5801, 5802, 5803, 5804, 5805, 5806, 5807, 5808, 5809, 5810, 5811, 5812, 5813, 5814, 5815, 5816, 5817, 5818, 5819, 5820, 5821, 5822, 5823, 5824, 5825, 5826, 5827, 5828, 5829, 5830, 5831, 5832, 5833, 5834, 5835, 5836, 5837, 5838, 5839, 5840, 5841, 5842, 5843, 5844, 5845, 5846, 5847, 5848, 5849, 5850, 5851, 5852, 5853, 5854, 5855, 5856, 5857, 5858, 5859, 5860, 5861, 5862, 5863, 5864, 5865, 5866, 5867, 5868, 5869, 5870, 5871, 5872, 5873, 5874, 5875, 5876, 5877, 5878, 5879, 5880, 5881, 5882, 5883, 5884, 5885, 5886, 5887, 5888, 5889, 5890, 5891, 5892, 5893, 5894, 5895, 5896, 5897, 5898, 5899, 5900, 5901, 5902, 5903, 5904, 5905, 5906, 5907, 5908, 5909, 5910, 5911, 5912, 5913, 5914, 5915, 5916, 5917, 5918, 5919, 5920, 5921, 5922, 5923, 5924, 5925, 5926, 5927, 5928, 5929, 5930, 5931, 5932, 5933, 5934, 5935, 5936, 5937, 5938, 5939, 5940, 5941, 5942, 5943, 5944, 5945, 5946, 5947, 5948, 5949, 5950, 5951, 5952, 5953, 5954, 5955, 5956, 5957, 5958, 5959, 5960, 5961, 5962, 5963, 5964, 5965, 5966, 5967, 5968, 5969, 5970, 5971, 5972, 5973, 5974, 5975, 5976, 5977, 5978, 5979, 5980, 5981, 5982, 5983, 5984, 5985, 5986, 5987, 5988, 5989, 5990, 5991, 5992, 5993, 5994, 5995, 5996, 5997, 5998, 5999, 6000, 6001, 6002, 6003, 6004, 6005, 6006, 6007, 6008, 6009, 6010, 6011, 6012, 6013, 6014, 6015, 6016, 6017, 6018, 6019, 6020, 6021, 6022, 6023, 6024, 6025, 6026, 6027, 6028, 6029, 6030, 6031, 6032, 6033, 6034, 6035, 6036, 6037, 6038, 6039, 6040, 6041, 6042, 6043, 6044, 6045, 6046, 6047, 6048, 6049, 6050, 6051, 6052, 6053, 6054, 6055, 6056, 6057, 6058, 6059, 6060, 6061, 6062, 6063, 6064, 6065, 6066, 6067, 6068, 6069, 6070, 6071, 6072, 6073, 6074, 6075, 6076, 6077, 6078, 6079, 6080, 6081, 6082, 6083, 6084, 6085, 6086, 6087, 6088, 6089, 6090, 6091, 6092, 6093, 6094, 6095, 6096, 6097, 6098, 6099, 6100, 6101, 6102, 6103, 6104, 6105, 6106, 6107, 6108, 6109, 6110, 6111, 6112, 6113, 6114, 6115, 6116, 6117, 6118, 6119, 6120, 6121, 6122, 6123, 6124, 6125, 6126, 6127, 6128, 6129, 6130, 6131, 6132, 6133, 6134, 6135, 6136, 6137, 6138, 6139, 6140, 6141, 6142, 6143, 6144, 6145, 6146, 6147, 6148, 6149, 6150, 6151, 6152, 6153, 6154, 6155, 6156, 6157, 6158, 6159, 6160, 6161, 6162, 6163, 6164, 6165, 6166, 6167, 6168, 6169, 6170, 6171, 6172, 6173, 6174, 6175, 6176, 6177, 6178, 6179, 6180, 6181, 6182, 6183, 6184, 6185, 6186, 6187, 6188, 6189, 6190, 6191, 6192, 6193, 6194, 6195, 6196, 6197, 6198, 6199, 6200, 6201, 6202, 6203, 6204, 6205, 6206, 6207, 6208, 6209, 6210, 6211, 6212, 6213, 6214, 6215, 6216, 6217, 6218, 6219, 6220, 6221, 6222, 6223, 6224, 6225, 6226, 6227, 6228, 6229, 6230, 6231, 6232, 6233, 6234, 6235, 6236, 6237, 6238, 6239, 6240, 6241, 6242, 6243, 6244, 6245, 6246, 6247, 6248, 6249, 6250, 6251, 6252, 6253, 6254, 6255, 6256, 6257, 6258, 6259, 6260, 6261, 6262, 6263, 6264, 6265, 6266, 6267, 6268, 6269, 6270, 6271, 6272, 6273, 6274, 6275, 6276, 6277, 6278, 6279, 6280, 6281, 6282, 6283, 6284, 6285, 6286, 6287, 6288, 6289, 6290, 6291, 6292, 6293, 6294, 6295, 6296, 6297, 6298, 6299, 6300, 6301, 6302, 6303, 6304, 6305, 6306, 6307, 6308, 6309, 6310, 6311, 6312, 6313, 6314, 6315, 6316, 6317, 6318, 6319, 6320, 6321, 6322, 6323, 6324, 6325, 6326, 6327, 6328, 6329, 6330, 6331, 6332, 6333, 6334, 6335, 6336, 6337, 6338, 6339, 6340, 6341, 6342, 6343, 6344, 6345, 6346, 6347, 6348, 6349, 6350, 6351, 6352, 6353, 6354, 6355, 6356, 6357, 6358, 6359, 6360, 6361, 6362, 6363, 6364, 6365, 6366, 6367, 6368, 6369, 6370, 6371, 6372, 6373, 6374, 6375, 6376, 6377, 6378, 6379, 6380, 6381, 6382, 6383, 6384, 6385, 6386, 6387, 6388, 6389, 6390, 6391, 6392, 6393, 6394, 6395, 6396, 6397, 6398, 6399, 6400, 6401, 6402, 6403, 6404, 6405, 6406, 6407, 6408, 6409, 6410, 6411, 6412, 6413, 6414, 6415, 6416, 6417, 6418, 6419, 6420, 6421, 6422, 6423, 6424, 6425, 6426, 6427, 6428, 6429, 6430, 6431, 6432, 6433, 6434, 6435, 6436, 6437, 6438, 6439, 6440, 6441, 6442, 6443, 6444, 6445, 6446, 6447, 6448, 6449, 6450, 6451, 6452, 6453, 6454, 6455, 6456, 6457, 6458, 6459, 6460, 6461, 6462, 6463, 6464, 6465, 6466, 6467, 6468, 6469, 6470, 6471, 6472, 6473, 6474, 6475, 6476, 6477, 6478, 6479, 6480, 6481, 6482, 6483, 6484, 6485, 6486, 6487, 6488, 6489, 6490, 6491, 6492, 6493, 6494, 6495, 6496, 6497, 6498, 6499, 6500, 6501, 6502, 6503, 6504, 6505, 6506, 6507, 6508, 6509, 6510, 6511, 6512, 6513, 6514, 6515, 6516, 6517, 6518, 6519, 6520, 6521, 6522, 6523, 6524, 6525, 6526, 6527, 6528, 6529, 6530, 6531, 6532, 6533, 6534, 6535, 6536, 6537, 6538, 6539, 6540, 6541, 6542, 6543, 6544, 6545, 6546, 6547, 6548, 6549, 6550, 6551, 6552, 6553, 6554, 6555, 6556, 6557, 6558, 6559, 6560, 6561, 6562, 6563, 6564, 6565, 6566, 6567, 6568, 6569, 6570, 6571, 6572, 6573, 6574, 6575, 6576, 6577, 6578, 6579, 6580, 6581, 6582, 6583, 6584, 6585, 6586, 6587, 6588, 6589, 6590, 6591, 6592, 6593, 6594, 6595, 6596, 6597, 6598, 6599, 6600, 6601, 6602, 6603, 6604, 6605, 6606, 6607, 6608, 6609, 6610, 6611, 6612, 6613, 6614, 6615, 6616, 6617, 6618, 6619, 6620, 6621, 6622, 6623, 6624, 6625, 6626, 6627, 6628, 6629, 6630, 6631, 6632, 6633, 6634, 6635, 6636, 6637, 6638, 6639, 6640, 6641, 6642, 6643, 6644, 6645, 6646, 6647, 6648, 6649, 6650, 6651, 6652, 6653, 6654, 6655, 6656, 6657, 6658, 6659, 6660, 6661, 6662, 6663, 6664, 6665, 6666, 6667, 6668, 6669, 6670, 6671, 6672, 6673, 6674, 6675, 6676, 6677, 6678, 6679, 6680, 6681, 6682, 6683, 6684, 6685, 6686, 6687, 6688, 6689, 6690, 6691, 6692, 6693, 6694, 6695, 6696, 6697, 6698, 6699, 6700, 6701, 6702, 6703, 6704, 6705, 6706, 6707, 6708, 6709, 6710, 6711, 6712, 6713, 6714, 6715, 6716, 6717, 6718, 6719, 6720, 6721, 6722, 6723, 6724, 6725, 6726, 6727, 6728, 6729, 6730, 6731, 6732, 6733, 6734, 6735, 6736, 6737, 6738, 6739, 6740, 6741, 6742, 6743, 6744, 6745, 6746, 6747, 6748, 6749, 6750, 6751, 6752, 6753, 6754, 6755, 6756, 6757, 6758, 6759, 6760, 6761, 6762, 6763, 6764, 6765, 6766, 6767, 6768, 6769, 6770, 6771, 6772, 6773, 6774, 6775, 6776, 6777, 6778, 6779, 6780, 6781, 6782, 6783, 6784, 6785, 6786, 6787, 6788, 6789, 6790, 6791, 6792, 6793, 6794, 6795, 6796, 6797, 6798, 6799, 6800, 6801, 6802, 6803, 6804, 6805, 6806, 6807, 6808, 6809, 6810, 6811, 6812, 6813, 6814, 6815, 6816, 6817, 6818, 6819, 6820, 6821, 6822, 6823, 6824, 6825, 6826, 6827, 6828, 6829, 6830, 6831, 6832, 6833, 6834, 6835, 6836, 6837, 6838, 6839, 6840, 6841, 6842, 6843, 6844, 6845, 6846, 6847, 6848, 6849, 6850, 6851, 6852, 6853, 6854, 6855, 6856, 6857, 6858, 6859, 6860, 6861, 6862, 6863, 6864, 6865, 6866, 6867, 6868, 6869, 6870, 6871, 6872, 6873, 6874, 6875, 6876, 6877, 6878, 6879, 6880, 6881, 6882, 6883, 6884, 6885, 6886, 6887, 6888, 6889, 6890, 6891, 6892, 6893, 6894, 6895, 6896, 6897, 6898, 6899, 6900, 6901, 6902, 6903, 6904, 6905, 6906, 6907, 6908, 6909, 6910, 6911, 6912, 6913, 6914, 6915, 6916, 6917, 6918, 6919, 6920, 6921, 6922, 6923, 6924, 6925, 6926, 6927, 6928, 6929, 6930, 6931, 6932, 6933, 6934, 6935, 6936, 6937, 6938, 6939, 6940, 6941, 6942, 6943, 6944, 6945, 6946, 6947, 6948, 6949, 6950, 6951, 6952, 6953, 6954, 6955, 6956, 6957, 6958, 6959, 6960, 6961, 6962, 6963, 6964, 6965, 6966, 6967, 6968, 6969, 6970, 6971, 6972, 6973, 6974, 6975, 6976, 6977, 6978, 6979, 6980, 6981, 6982, 6983, 6984, 6985, 6986, 6987, 6988, 6989, 6990, 6991, 6992, 6993, 6994, 6995, 6996, 6997, 6998, 6999, 7000, 7001, 7002, 7003, 7004, 7005, 7006, 7007, 7008, 7009, 7010, 7011, 7012, 7013, 7014, 7015, 7016, 7017, 7018, 7019, 7020, 7021, 7022, 7023, 7024, 7025, 7026, 7027, 7028, 7029, 7030, 7031, 7032, 7033, 7034, 7035, 7036, 7037, 7038, 7039, 7040, 7041, 7042, 7043, 7044, 7045, 7046, 7047, 7048, 7049, 7050, 7051, 7052, 7053, 7054, 7055, 7056, 7057, 7058, 7059, 7060, 7061, 7062, 7063, 7064, 7065, 7066, 7067, 7068, 7069, 7070, 7071, 7072, 7073, 7074, 7075, 7076, 7077, 7078, 7079, 7080, 7081, 7082, 7083, 7084, 7085, 7086, 7087, 7088, 7089, 7090, 7091, 7092, 7093, 7094, 7095, 7096, 7097, 7098, 7099, 7100, 7101, 7102, 7103, 7104, 7105, 7106, 7107, 7108, 7109, 7110, 7111, 7112, 7113, 7114, 7115, 7116, 7117, 7118, 7119, 7120, 7121, 7122, 7123, 7124, 7125, 7126, 7127, 7128, 7129, 7130, 7131, 7132, 7133, 7134, 7135, 7136, 7137, 7138, 7139, 7140, 7141, 7142, 7143, 7144, 7145, 7146, 7147, 7148, 7149, 7150, 7151, 7152, 7153, 7154, 7155, 7156, 7157, 7158, 7159, 7160, 7161, 7162, 7163, 7164, 7165, 7166, 7167, 7168, 7169, 7170, 7171, 7172, 7173, 7174, 7175, 7176, 7177, 7178, 7179, 7180, 7181, 7182, 7183, 7184, 7185, 7186, 7187, 7188, 7189, 7190, 7191, 7192, 7193, 7194, 7195, 7196, 7197, 7198, 7199, 7200, 7201, 7202, 7203, 7204, 7205, 7206, 7207, 7208, 7209, 7210, 7211, 7212, 7213, 7214, 7215, 7216, 7217, 7218, 7219, 7220, 7221, 7222, 7223, 7224, 7225, 7226, 7227, 7228, 7229, 7230, 7231, 7232, 7233, 7234, 7235, 7236, 7237, 7238, 7239, 7240, 7241, 7242, 7243, 7244, 7245, 7246, 7247, 7248, 7249, 7250, 7251, 7252, 7253, 7254, 7255, 7256, 7257, 7258, 7259, 7260, 7261, 7262, 7263, 7264, 7265, 7266, 7267, 7268, 7269, 7270, 7271, 7272, 7273, 7274, 7275, 7276, 7277, 7278, 7279, 7280, 7281, 7282, 7283, 7284, 7285, 7286, 7287, 7288, 7289, 7290, 7291, 7292, 7293, 7294, 7295, 7296, 7297, 7298, 7299, 7300, 7301, 7302, 7303, 7304, 7305, 7306, 7307, 7308, 7309, 7310, 7311, 7312, 7313, 7314, 7315, 7316, 7317, 7318, 7319, 7320, 7321, 7322, 7323, 7324, 7325, 7326, 7327, 7328, 7329, 7330, 7331, 7332, 7333, 7334, 7335, 7336, 7337, 7338, 7339, 7340, 7341, 7342, 7343, 7344, 7345, 7346, 7347, 7348, 7349, 7350, 7351, 7352, 7353, 7354, 7355, 7356, 7357, 7358, 7359, 7360, 7361, 7362, 7363, 7364, 7365, 7366, 7367, 7368, 7369, 7370, 7371, 7372, 7373, 7374, 7375, 7376, 7377, 7378, 7379, 7380, 7381, 7382, 7383, 7384, 7385, 7386, 7387, 7388, 7389, 7390, 7391, 7392, 7393, 7394, 7395, 7396, 7397, 7398, 7399, 7400, 7401, 7402, 7403, 7404, 7405, 7406, 7407, 7408, 7409, 7410, 7411, 7412, 7413, 7414, 7415, 7416, 7417, 7418, 7419, 7420, 7421, 7422, 7423, 7424, 7425, 7426, 7427, 7428, 7429, 7430, 7431, 7432, 7433, 7434, 7435, 7436, 7437, 7438, 7439, 7440, 7441, 7442, 7443, 7444, 7445, 7446, 7447, 7448, 7449, 7450, 7451, 7452, 7453, 7454, 7455, 7456, 7457, 7458, 7459, 7460, 7461, 7462, 7463, 7464, 7465, 7466, 7467, 7468, 7469, 7470, 7471, 7472, 7473, 7474, 7475, 7476, 7477, 7478, 7479, 7480, 7481, 7482, 7483, 7484, 7485, 7486, 7487, 7488, 7489, 7490, 7491, 7492, 7493, 7494, 7495, 7496, 7497, 7498, 7499, 7500, 7501, 7502, 7503, 7504, 7505, 7506, 7507, 7508, 7509, 7510, 7511, 7512, 7513, 7514, 7515, 7516, 7517, 7518, 7519, 7520, 7521, 7522, 7523, 7524, 7525, 7526, 7527, 7528, 7529, 7530, 7531, 7532, 7533, 7534, 7535, 7536, 7537, 7538, 7539, 7540, 7541, 7542, 7543, 7544, 7545, 7546, 7547, 7548, 7549, 7550, 7551, 7552, 7553, 7554, 7555, 7556, 7557, 7558, 7559, 7560, 7561, 7562, 7563, 7564, 7565, 7566, 7567, 7568, 7569, 7570, 7571, 7572, 7573, 7574, 7575, 7576, 7577, 7578, 7579, 7580, 7581, 7582, 7583, 7584, 7585, 7586, 7587, 7588, 7589, 7590, 7591, 7592, 7593, 7594, 7595, 7596, 7597, 7598, 7599, 7600, 7601, 7602, 7603, 7604, 7605, 7606, 7607, 7608, 7609, 7610, 7611, 7612, 7613, 7614, 7615, 7616, 7617, 7618, 7619, 7620, 7621, 7622, 7623, 7624, 7625, 7626, 7627, 7628, 7629, 7630, 7631, 7632, 7633, 7634, 7635, 7636, 7637, 7638, 7639, 7640, 7641, 7642, 7643, 7644, 7645, 7646, 7647, 7648, 7649, 7650, 7651, 7652, 7653, 7654, 7655, 7656, 7657, 7658, 7659, 7660, 7661, 7662, 7663, 7664, 7665, 7666, 7667, 7668, 7669, 7670, 7671, 7672, 7673, 7674, 7675, 7676, 7677, 7678, 7679, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7830, 7831, 7832, 7833, 7834, 7835, 7836, 7837, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7936, 7937, 7938, 7939, 7940, 7941, 7942, 7943, 7944, 7945, 7946, 7947, 7948, 7949, 7950, 7951, 7952, 7953, 7954, 7955, 7956, 7957, 7958, 7959, 7960, 7961, 7962, 7963, 7964, 7965, 7966, 7967, 7968, 7969, 7970, 7971, 7972, 7973, 7974, 7975, 7976, 7977, 7978, 7979, 7980, 7981, 7982, 7983, 7984, 7985, 7986, 7987, 7988, 7989, 7990, 7991, 7992, 7993, 7994, 7995, 7996, 7997, 7998, 7999, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8061, 8062, 8063, 8064, 8065, 8066, 8067, 8068, 8069, 8070, 8071, 8072, 8073, 8074, 8075, 8076, 8077, 8078, 8079, 8080, 8081, 8082, 8083, 8084, 8085, 8086, 8087, 8088, 8089, 8090, 8091, 8092, 8093, 8094, 8095, 8096, 8097, 8098, 8099, 8100, 8101, 8102, 8103, 8104, 8105, 8106, 8107, 8108, 8109, 8110, 8111, 8112, 8113, 8114, 8115, 8116, 8117, 8118, 8119, 8120, 8121, 8122, 8123, 8124, 8125, 8126, 8127, 8128, 8129, 8130, 8131, 8132, 8133, 8134, 8135, 8136, 8137, 8138, 8139, 8140, 8141, 8142, 8143, 8144, 8145, 8146, 8147, 8148, 8149, 8150, 8151, 8152, 8153, 8154, 8155, 8156, 8157, 8158, 8159, 8160, 8161, 8162, 8163, 8164, 8165, 8166, 8167, 8168, 8169, 8170, 8171, 8172, 8173, 8174, 8175, 8176, 8177, 8178, 8179, 8180, 8181, 8182, 8183, 8184, 8185, 8186, 8187, 8188, 8189, 8190, 8191, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8203, 8204, 8205, 8206, 8207, 8208, 8209, 8210, 8211, 8212, 8213, 8214, 8215, 8216, 8217, 8218, 8219, 8220, 8221, 8222, 8223, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 8232, 8233, 8234, 8235, 8236, 8237, 8238, 8239, 8240, 8241, 8242, 8243, 8244, 8245, 8246, 8247, 8248, 8249, 8250, 8251, 8252, 8253, 8254, 8255, 8256, 8257, 8258, 8259, 8260, 8261, 8262, 8263, 8264, 8265, 8266, 8267, 8268, 8269, 8270, 8271, 8272, 8273, 8274, 8275, 8276, 8277, 8278, 8279, 8280, 8281, 8282, 8283, 8284, 8285, 8286, 8287, 8288, 8289, 8290, 8291, 8292, 8293, 8294, 8295, 8296, 8297, 8298, 8299, 8300, 8301, 8302, 8303, 8304, 8305, 8306, 8307, 8308, 8309, 8310, 8311, 8312, 8313, 8314, 8315, 8316, 8317, 8318, 8319, 8320, 8321, 8322, 8323, 8324, 8325, 8326, 8327, 8328, 8329, 8330, 8331, 8332, 8333, 8334, 8335, 8336, 8337, 8338, 8339, 8340, 8341, 8342, 8343, 8344, 8345, 8346, 8347, 8348, 8349, 8350, 8351, 8352, 8353, 8354, 8355, 8356, 8357, 8358, 8359, 8360, 8361, 8362, 8363, 8364, 8365, 8366, 8367, 8368, 8369, 8370, 8371, 8372, 8373, 8374, 8375, 8376, 8377, 8378, 8379, 8380, 8381, 8382, 8383, 8384, 8385, 8386, 8387, 8388, 8389, 8390, 8391, 8392, 8393, 8394, 8395, 8396, 8397, 8398, 8399, 8400, 8401, 8402, 8403, 8404, 8405, 8406, 8407, 8408, 8409, 8410, 8411, 8412, 8413, 8414, 8415, 8416, 8417, 8418, 8419, 8420, 8421, 8422, 8423, 8424, 8425, 8426, 8427, 8428, 8429, 8430, 8431, 8432, 8433, 8434, 8435, 8436, 8437, 8438, 8439, 8440, 8441, 8442, 8443, 8444, 8445, 8446, 8447, 8448, 8449, 8450, 8451, 8452, 8453, 8454, 8455, 8456, 8457, 8458, 8459, 8460, 8461, 8462, 8463, 8464, 8465, 8466, 8467, 8468, 8469, 8470, 8471, 8472, 8473, 8474, 8475, 8476, 8477, 8478, 8479, 8480, 8481, 8482, 8483, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8491, 8492, 8493, 8494, 8495, 8496, 8497, 8498, 8499, 8500, 8501, 8502, 8503, 8504, 8505, 8506, 8507, 8508, 8509, 8510, 8511, 8512, 8513, 8514, 8515, 8516, 8517, 8518, 8519, 8520, 8521, 8522, 8523, 8524, 8525, 8526, 8527, 8528, 8529, 8530, 8531, 8532, 8533, 8534, 8535, 8536, 8537, 8538, 8539, 8540, 8541, 8542, 8543, 8544, 8545, 8546, 8547, 8548, 8549, 8550, 8551, 8552, 8553, 8554, 8555, 8556, 8557, 8558, 8559, 8560, 8561, 8562, 8563, 8564, 8565, 8566, 8567, 8568, 8569, 8570, 8571, 8572, 8573, 8574, 8575, 8576, 8577, 8578, 8579, 8580, 8581, 8582, 8583, 8584, 8585, 8586, 8587, 8588, 8589, 8590, 8591, 8592, 8593, 8594, 8595, 8596, 8597, 8598, 8599, 8600, 8601, 8602, 8603, 8604, 8605, 8606, 8607, 8608, 8609, 8610, 8611, 8612, 8613, 8614, 8615, 8616, 8617, 8618, 8619, 8620, 8621, 8622, 8623, 8624, 8625, 8626, 8627, 8628, 8629, 8630, 8631, 8632, 8633, 8634, 8635, 8636, 8637, 8638, 8639, 8640, 8641, 8642, 8643, 8644, 8645, 8646, 8647, 8648, 8649, 8650, 8651, 8652, 8653, 8654, 8655, 8656, 8657, 8658, 8659, 8660, 8661, 8662, 8663, 8664, 8665, 8666, 8667, 8668, 8669, 8670, 8671, 8672, 8673, 8674, 8675, 8676, 8677, 8678, 8679, 8680, 8681, 8682, 8683, 8684, 8685, 8686, 8687, 8688, 8689, 8690, 8691, 8692, 8693, 8694, 8695, 8696, 8697, 8698, 8699, 8700, 8701, 8702, 8703, 8704, 8705, 8706, 8707, 8708, 8709, 8710, 8711, 8712, 8713, 8714, 8715, 8716, 8717, 8718, 8719, 8720, 8721, 8722, 8723, 8724, 8725, 8726, 8727, 8728, 8729, 8730, 8731, 8732, 8733, 8734, 8735, 8736, 8737, 8738, 8739, 8740, 8741, 8742, 8743, 8744, 8745, 8746, 8747, 8748, 8749, 8750, 8751, 8752, 8753, 8754, 8755, 8756, 8757, 8758, 8759, 8760, 8761, 8762, 8763, 8764, 8765, 8766, 8767, 8768, 8769, 8770, 8771, 8772, 8773, 8774, 8775, 8776, 8777, 8778, 8779, 8780, 8781, 8782, 8783, 8784, 8785, 8786, 8787, 8788, 8789, 8790, 8791, 8792, 8793, 8794, 8795, 8796, 8797, 8798, 8799, 8800, 8801, 8802, 8803, 8804, 8805, 8806, 8807, 8808, 8809, 8810, 8811, 8812, 8813, 8814, 8815, 8816, 8817, 8818, 8819, 8820, 8821, 8822, 8823, 8824, 8825, 8826, 8827, 8828, 8829, 8830, 8831, 8832, 8833, 8834, 8835, 8836, 8837, 8838, 8839, 8840, 8841, 8842, 8843, 8844, 8845, 8846, 8847, 8848, 8849, 8850, 8851, 8852, 8853, 8854, 8855, 8856, 8857, 8858, 8859, 8860, 8861, 8862, 8863, 8864, 8865, 8866, 8867, 8868, 8869, 8870, 8871, 8872, 8873, 8874, 8875, 8876, 8877, 8878, 8879, 8880, 8881, 8882, 8883, 8884, 8885, 8886, 8887, 8888, 8889, 8890, 8891, 8892, 8893, 8894, 8895, 8896, 8897, 8898, 8899, 8900, 8901, 8902, 8903, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, 8912, 8913, 8914, 8915, 8916, 8917, 8918, 8919, 8920, 8921, 8922, 8923, 8924, 8925, 8926, 8927, 8928, 8929, 8930, 8931, 8932, 8933, 8934, 8935, 8936, 8937, 8938, 8939, 8940, 8941, 8942, 8943, 8944, 8945, 8946, 8947, 8948, 8949, 8950, 8951, 8952, 8953, 8954, 8955, 8956, 8957, 8958, 8959, 8960, 8961, 8962, 8963, 8964, 8965, 8966, 8967, 8968, 8969, 8970, 8971, 8972, 8973, 8974, 8975, 8976, 8977, 8978, 8979, 8980, 8981, 8982, 8983, 8984, 8985, 8986, 8987, 8988, 8989, 8990, 8991, 8992, 8993, 8994, 8995, 8996, 8997, 8998, 8999, 9000, 9001, 9002, 9003, 9004, 9005, 9006, 9007, 9008, 9009, 9010, 9011, 9012, 9013, 9014, 9015, 9016, 9017, 9018, 9019, 9020, 9021, 9022, 9023, 9024, 9025, 9026, 9027, 9028, 9029, 9030, 9031, 9032, 9033, 9034, 9035, 9036, 9037, 9038, 9039, 9040, 9041, 9042, 9043, 9044, 9045, 9046, 9047, 9048, 9049, 9050, 9051, 9052, 9053, 9054, 9055, 9056, 9057, 9058, 9059, 9060, 9061, 9062, 9063, 9064, 9065, 9066, 9067, 9068, 9069, 9070, 9071, 9072, 9073, 9074, 9075, 9076, 9077, 9078, 9079, 9080, 9081, 9082, 9083, 9084, 9085, 9086, 9087, 9088, 9089, 9090, 9091, 9092, 9093, 9094, 9095, 9096, 9097, 9098, 9099, 9100, 9101, 9102, 9103, 9104, 9105, 9106, 9107, 9108, 9109, 9110, 9111, 9112, 9113, 9114, 9115, 9116, 9117, 9118, 9119, 9120, 9121, 9122, 9123, 9124, 9125, 9126, 9127, 9128, 9129, 9130, 9131, 9132, 9133, 9134, 9135, 9136, 9137, 9138, 9139, 9140, 9141, 9142, 9143, 9144, 9145, 9146, 9147, 9148, 9149, 9150, 9151, 9152, 9153, 9154, 9155, 9156, 9157, 9158, 9159, 9160, 9161, 9162, 9163, 9164, 9165, 9166, 9167, 9168, 9169, 9170, 9171, 9172, 9173, 9174, 9175, 9176, 9177, 9178, 9179, 9180, 9181, 9182, 9183, 9184, 9185, 9186, 9187, 9188, 9189, 9190, 9191, 9192, 9193, 9194, 9195, 9196, 9197, 9198, 9199, 9200, 9201, 9202, 9203, 9204, 9205, 9206, 9207, 9208, 9209, 9210, 9211, 9212, 9213, 9214, 9215, 9216, 9217, 9218, 9219, 9220, 9221, 9222, 9223, 9224, 9225, 9226, 9227, 9228, 9229, 9230, 9231, 9232, 9233, 9234, 9235, 9236, 9237, 9238, 9239, 9240, 9241, 9242, 9243, 9244, 9245, 9246, 9247, 9248, 9249, 9250, 9251, 9252, 9253, 9254, 9255, 9256, 9257, 9258, 9259, 9260, 9261, 9262, 9263, 9264, 9265, 9266, 9267, 9268, 9269, 9270, 9271, 9272, 9273, 9274, 9275, 9276, 9277, 9278, 9279, 9280, 9281, 9282, 9283, 9284, 9285, 9286, 9287, 9288, 9289, 9290, 9291, 9292, 9293, 9294, 9295, 9296, 9297, 9298, 9299, 9300, 9301, 9302, 9303, 9304, 9305, 9306, 9307, 9308, 9309, 9310, 9311, 9312, 9313, 9314, 9315, 9316, 9317, 9318, 9319, 9320, 9321, 9322, 9323, 9324, 9325, 9326, 9327, 9328, 9329, 9330, 9331, 9332, 9333, 9334, 9335, 9336, 9337, 9338, 9339, 9340, 9341, 9342, 9343, 9344, 9345, 9346, 9347, 9348, 9349, 9350, 9351, 9352, 9353, 9354, 9355, 9356, 9357, 9358, 9359, 9360, 9361, 9362, 9363, 9364, 9365, 9366, 9367, 9368, 9369, 9370, 9371, 9372, 9373, 9374, 9375, 9376, 9377, 9378, 9379, 9380, 9381, 9382, 9383, 9384, 9385, 9386, 9387, 9388, 9389, 9390, 9391, 9392, 9393, 9394, 9395, 9396, 9397, 9398, 9399, 9400, 9401, 9402, 9403, 9404, 9405, 9406, 9407, 9408, 9409, 9410, 9411, 9412, 9413, 9414, 9415, 9416, 9417, 9418, 9419, 9420, 9421, 9422, 9423, 9424, 9425, 9426, 9427, 9428, 9429, 9430, 9431, 9432, 9433, 9434, 9435, 9436, 9437, 9438, 9439, 9440, 9441, 9442, 9443, 9444, 9445, 9446, 9447, 9448, 9449, 9450, 9451, 9452, 9453, 9454, 9455, 9456, 9457, 9458, 9459, 9460, 9461, 9462, 9463, 9464, 9465, 9466, 9467, 9468, 9469, 9470, 9471, 9472, 9473, 9474, 9475, 9476, 9477, 9478, 9479, 9480, 9481, 9482, 9483, 9484, 9485, 9486, 9487, 9488, 9489, 9490, 9491, 9492, 9493, 9494, 9495, 9496, 9497, 9498, 9499, 9500, 9501, 9502, 9503, 9504, 9505, 9506, 9507, 9508, 9509, 9510, 9511, 9512, 9513, 9514, 9515, 9516, 9517, 9518, 9519, 9520, 9521, 9522, 9523, 9524, 9525, 9526, 9527, 9528, 9529, 9530, 9531, 9532, 9533, 9534, 9535, 9536, 9537, 9538, 9539, 9540, 9541, 9542, 9543, 9544, 9545, 9546, 9547, 9548, 9549, 9550, 9551, 9552, 9553, 9554, 9555, 9556, 9557, 9558, 9559, 9560, 9561, 9562, 9563, 9564, 9565, 9566, 9567, 9568, 9569, 9570, 9571, 9572, 9573, 9574, 9575, 9576, 9577, 9578, 9579, 9580, 9581, 9582, 9583, 9584, 9585, 9586, 9587, 9588, 9589, 9590, 9591, 9592, 9593, 9594, 9595, 9596, 9597, 9598, 9599, 9600, 9601, 9602, 9603, 9604, 9605, 9606, 9607, 9608, 9609, 9610, 9611, 9612, 9613, 9614, 9615, 9616, 9617, 9618, 9619, 9620, 9621, 9622, 9623, 9624, 9625, 9626, 9627, 9628, 9629, 9630, 9631, 9632, 9633, 9634, 9635, 9636, 9637, 9638, 9639, 9640, 9641, 9642, 9643, 9644, 9645, 9646, 9647, 9648, 9649, 9650, 9651, 9652, 9653, 9654, 9655, 9656, 9657, 9658, 9659, 9660, 9661, 9662, 9663, 9664, 9665, 9666, 9667, 9668, 9669, 9670, 9671, 9672, 9673, 9674, 9675, 9676, 9677, 9678, 9679, 9680, 9681, 9682, 9683, 9684, 9685, 9686, 9687, 9688, 9689, 9690, 9691, 9692, 9693, 9694, 9695, 9696, 9697, 9698, 9699, 9700, 9701, 9702, 9703, 9704, 9705, 9706, 9707, 9708, 9709, 9710, 9711, 9712, 9713, 9714, 9715, 9716, 9717, 9718, 9719, 9720, 9721, 9722, 9723, 9724, 9725, 9726, 9727, 9728, 9729, 9730, 9731, 9732, 9733, 9734, 9735, 9736, 9737, 9738, 9739, 9740, 9741, 9742, 9743, 9744, 9745, 9746, 9747, 9748, 9749, 9750, 9751, 9752, 9753, 9754, 9755, 9756, 9757, 9758, 9759, 9760, 9761, 9762, 9763, 9764, 9765, 9766, 9767, 9768, 9769, 9770, 9771, 9772, 9773, 9774, 9775, 9776, 9777, 9778, 9779, 9780, 9781, 9782, 9783, 9784, 9785, 9786, 9787, 9788, 9789, 9790, 9791, 9792, 9793, 9794, 9795, 9796, 9797, 9798, 9799, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 9812, 9813, 9814, 9815, 9816, 9817, 9818, 9819, 9820, 9821, 9822, 9823, 9824, 9825, 9826, 9827, 9828, 9829, 9830, 9831, 9832, 9833, 9834, 9835, 9836, 9837, 9838, 9839, 9840, 9841, 9842, 9843, 9844, 9845, 9846, 9847, 9848, 9849, 9850, 9851, 9852, 9853, 9854, 9855, 9856, 9857, 9858, 9859, 9860, 9861, 9862, 9863, 9864, 9865, 9866, 9867, 9868, 9869, 9870, 9871, 9872, 9873, 9874, 9875, 9876, 9877, 9878, 9879, 9880, 9881, 9882, 9883, 9884, 9885, 9886, 9887, 9888, 9889, 9890, 9891, 9892, 9893, 9894, 9895, 9896, 9897, 9898, 9899, 9900, 9901, 9902, 9903, 9904, 9905, 9906, 9907, 9908, 9909, 9910, 9911, 9912, 9913, 9914, 9915, 9916, 9917, 9918, 9919, 9920, 9921, 9922, 9923, 9924, 9925, 9926, 9927, 9928, 9929, 9930, 9931, 9932, 9933, 9934, 9935, 9936, 9937, 9938, 9939, 9940, 9941, 9942, 9943, 9944, 9945, 9946, 9947, 9948, 9949, 9950, 9951, 9952, 9953, 9954, 9955, 9956, 9957, 9958, 9959, 9960, 9961, 9962, 9963, 9964, 9965, 9966, 9967, 9968, 9969, 9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9979, 9980, 9981, 9982, 9983, 9984, 9985, 9986, 9987, 9988, 9989, 9990, 9991, 9992, 9993, 9994, 9995, 9996, 9997, 9998, 9999, 10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010, 10011, 10012, 10013, 10014, 10015, 10016, 10017, 10018, 10019, 10020, 10021, 10022, 10023, 10024, 10025, 10026, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10035, 10036, 10037, 10038, 10039, 10040, 10041, 10042, 10043, 10044, 10045, 10046, 10047, 10048, 10049, 10050, 10051, 10052, 10053, 10054, 10055, 10056, 10057, 10058, 10059, 10060, 10061, 10062, 10063, 10064, 10065, 10066, 10067, 10068, 10069, 10070, 10071, 10072, 10073, 10074, 10075, 10076, 10077, 10078, 10079, 10080, 10081, 10082, 10083, 10084, 10085, 10086, 10087, 10088, 10089, 10090, 10091, 10092, 10093, 10094, 10095, 10096, 10097, 10098, 10099, 10100, 10101, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 10110, 10111, 10112, 10113, 10114, 10115, 10116, 10117, 10118, 10119, 10120, 10121, 10122, 10123, 10124, 10125, 10126, 10127, 10128, 10129, 10130, 10131, 10132, 10133, 10134, 10135, 10136, 10137, 10138, 10139, 10140, 10141, 10142, 10143, 10144, 10145, 10146, 10147, 10148, 10149, 10150, 10151, 10152, 10153, 10154, 10155, 10156, 10157, 10158, 10159, 10160, 10161, 10162, 10163, 10164, 10165, 10166, 10167, 10168, 10169, 10170, 10171, 10172, 10173, 10174, 10175, 10176, 10177, 10178, 10179, 10180, 10181, 10182, 10183, 10184, 10185, 10186, 10187, 10188, 10189, 10190, 10191, 10192, 10193, 10194, 10195, 10196, 10197, 10198, 10199, 10200, 10201, 10202, 10203, 10204, 10205, 10206, 10207, 10208, 10209, 10210, 10211, 10212, 10213, 10214, 10215, 10216, 10217, 10218, 10219, 10220, 10221, 10222, 10223, 10224, 10225, 10226, 10227, 10228, 10229, 10230, 10231, 10232, 10233, 10234, 10235, 10236, 10237, 10238, 10239, 10240, 10241, 10242, 10243, 10244, 10245, 10246, 10247, 10248, 10249, 10250, 10251, 10252, 10253, 10254, 10255, 10256, 10257, 10258, 10259, 10260, 10261, 10262, 10263, 10264, 10265, 10266, 10267, 10268, 10269, 10270, 10271, 10272, 10273, 10274, 10275, 10276, 10277, 10278, 10279, 10280, 10281, 10282, 10283, 10284, 10285, 10286, 10287, 10288, 10289, 10290, 10291, 10292, 10293, 10294, 10295, 10296, 10297, 10298, 10299, 10300, 10301, 10302, 10303, 10304, 10305, 10306, 10307, 10308, 10309, 10310, 10311, 10312, 10313, 10314, 10315, 10316, 10317, 10318, 10319, 10320, 10321, 10322, 10323, 10324, 10325, 10326, 10327, 10328, 10329, 10330, 10331, 10332, 10333, 10334, 10335, 10336, 10337, 10338, 10339, 10340, 10341, 10342, 10343, 10344, 10345, 10346, 10347, 10348, 10349, 10350, 10351, 10352, 10353, 10354, 10355, 10356, 10357, 10358, 10359, 10360, 10361, 10362, 10363, 10364, 10365, 10366, 10367, 10368, 10369, 10370, 10371, 10372, 10373, 10374, 10375, 10376, 10377, 10378, 10379, 10380, 10381, 10382, 10383, 10384, 10385, 10386, 10387, 10388, 10389, 10390, 10391, 10392, 10393, 10394, 10395, 10396, 10397, 10398, 10399, 10400, 10401, 10402, 10403, 10404, 10405, 10406, 10407, 10408, 10409, 10410, 10411, 10412, 10413, 10414, 10415, 10416, 10417, 10418, 10419, 10420, 10421, 10422, 10423, 10424, 10425, 10426, 10427, 10428, 10429, 10430, 10431, 10432, 10433, 10434, 10435, 10436, 10437, 10438, 10439, 10440, 10441, 10442, 10443, 10444, 10445, 10446, 10447, 10448, 10449, 10450, 10451, 10452, 10453, 10454, 10455, 10456, 10457, 10458, 10459, 10460, 10461, 10462, 10463, 10464, 10465, 10466, 10467, 10468, 10469, 10470, 10471, 10472, 10473, 10474, 10475, 10476, 10477, 10478, 10479, 10480, 10481, 10482, 10483, 10484, 10485, 10486, 10487, 10488, 10489, 10490, 10491, 10492, 10493, 10494, 10495, 10496, 10497, 10498, 10499, 10500, 10501, 10502, 10503, 10504, 10505, 10506, 10507, 10508, 10509, 10510, 10511, 10512, 10513, 10514, 10515, 10516, 10517, 10518, 10519, 10520, 10521, 10522, 10523, 10524, 10525, 10526, 10527, 10528, 10529, 10530, 10531, 10532, 10533, 10534, 10535, 10536, 10537, 10538, 10539, 10540, 10541, 10542, 10543, 10544, 10545, 10546, 10547, 10548, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10556, 10557, 10558, 10559, 10560, 10561, 10562, 10563, 10564, 10565, 10566, 10567, 10568, 10569, 10570, 10571, 10572, 10573, 10574, 10575, 10576, 10577, 10578, 10579, 10580, 10581, 10582, 10583, 10584, 10585, 10586, 10587, 10588, 10589, 10590, 10591, 10592, 10593, 10594, 10595, 10596, 10597, 10598, 10599, 10600, 10601, 10602, 10603, 10604, 10605, 10606, 10607, 10608, 10609, 10610, 10611, 10612, 10613, 10614, 10615, 10616, 10617, 10618, 10619, 10620, 10621, 10622, 10623, 10624, 10625, 10626, 10627, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10644, 10645, 10646, 10647, 10648, 10649, 10650, 10651, 10652, 10653, 10654, 10655, 10656, 10657, 10658, 10659, 10660, 10661, 10662, 10663, 10664, 10665, 10666, 10667, 10668, 10669, 10670, 10671, 10672, 10673, 10674, 10675, 10676, 10677, 10678, 10679, 10680, 10681, 10682, 10683, 10684, 10685, 10686, 10687, 10688, 10689, 10690, 10691, 10692, 10693, 10694, 10695, 10696, 10697, 10698, 10699, 10700, 10701, 10702, 10703, 10704, 10705, 10706, 10707, 10708, 10709, 10710, 10711, 10712, 10713, 10714, 10715, 10716, 10717, 10718, 10719, 10720, 10721, 10722, 10723, 10724, 10725, 10726, 10727, 10728, 10729, 10730, 10731, 10732, 10733, 10734, 10735, 10736, 10737, 10738, 10739, 10740, 10741, 10742, 10743, 10744, 10745, 10746, 10747, 10748, 10749, 10750, 10751, 10752, 10753, 10754, 10755, 10756, 10757, 10758, 10759, 10760, 10761, 10762, 10763, 10764, 10765, 10766, 10767, 10768, 10769, 10770, 10771, 10772, 10773, 10774, 10775, 10776, 10777, 10778, 10779, 10780, 10781, 10782, 10783, 10784, 10785, 10786, 10787, 10788, 10789, 10790, 10791, 10792, 10793, 10794, 10795, 10796, 10797, 10798, 10799, 10800, 10801, 10802, 10803, 10804, 10805, 10806, 10807, 10808, 10809, 10810, 10811, 10812, 10813, 10814, 10815, 10816, 10817, 10818, 10819, 10820, 10821, 10822, 10823, 10824, 10825, 10826, 10827, 10828, 10829, 10830, 10831, 10832, 10833, 10834, 10835, 10836, 10837, 10838, 10839, 10840, 10841, 10842, 10843, 10844, 10845, 10846, 10847, 10848, 10849, 10850, 10851, 10852, 10853, 10854, 10855, 10856, 10857, 10858, 10859, 10860, 10861, 10862, 10863, 10864, 10865, 10866, 10867, 10868, 10869, 10870, 10871, 10872, 10873, 10874, 10875, 10876, 10877, 10878, 10879, 10880, 10881, 10882, 10883, 10884, 10885, 10886, 10887, 10888, 10889, 10890, 10891, 10892, 10893, 10894, 10895, 10896, 10897, 10898, 10899, 10900, 10901, 10902, 10903, 10904, 10905, 10906, 10907, 10908, 10909, 10910, 10911, 10912, 10913, 10914, 10915, 10916, 10917, 10918, 10919, 10920, 10921, 10922, 10923, 10924, 10925, 10926, 10927, 10928, 10929, 10930, 10931, 10932, 10933, 10934, 10935, 10936, 10937, 10938, 10939, 10940, 10941, 10942, 10943, 10944, 10945, 10946, 10947, 10948, 10949, 10950, 10951, 10952, 10953, 10954, 10955, 10956, 10957, 10958, 10959, 10960, 10961, 10962, 10963, 10964, 10965, 10966, 10967, 10968, 10969, 10970, 10971, 10972, 10973, 10974, 10975, 10976, 10977, 10978, 10979, 10980, 10981, 10982, 10983, 10984, 10985, 10986, 10987, 10988, 10989, 10990, 10991, 10992, 10993, 10994, 10995, 10996, 10997, 10998, 10999, 11000, 11001, 11002, 11003, 11004, 11005, 11006, 11007, 11008, 11009, 11010, 11011, 11012, 11013, 11014, 11015, 11016, 11017, 11018, 11019, 11020, 11021, 11022, 11023, 11024, 11025, 11026, 11027, 11028, 11029, 11030, 11031, 11032, 11033, 11034, 11035, 11036, 11037, 11038, 11039, 11040, 11041, 11042, 11043, 11044, 11045, 11046, 11047, 11048, 11049, 11050, 11051, 11052, 11053, 11054, 11055, 11056, 11057, 11058, 11059, 11060, 11061, 11062, 11063, 11064, 11065, 11066, 11067, 11068, 11069, 11070, 11071, 11072, 11073, 11074, 11075, 11076, 11077, 11078, 11079, 11080, 11081, 11082, 11083, 11084, 11085, 11086, 11087, 11088, 11089, 11090, 11091, 11092, 11093, 11094, 11095, 11096, 11097, 11098, 11099, 11100, 11101, 11102, 11103, 11104, 11105, 11106, 11107, 11108, 11109, 11110, 11111, 11112, 11113, 11114, 11115, 11116, 11117, 11118, 11119, 11120, 11121, 11122, 11123, 11124, 11125, 11126, 11127, 11128, 11129, 11130, 11131, 11132, 11133, 11134, 11135, 11136, 11137, 11138, 11139, 11140, 11141, 11142, 11143, 11144, 11145, 11146, 11147, 11148, 11149, 11150, 11151, 11152, 11153, 11154, 11155, 11156, 11157, 11158, 11159, 11160, 11161, 11162, 11163, 11164, 11165, 11166, 11167, 11168, 11169, 11170, 11171, 11172, 11173, 11174, 11175, 11176, 11177, 11178, 11179, 11180, 11181, 11182, 11183, 11184, 11185, 11186, 11187, 11188, 11189, 11190, 11191, 11192, 11193, 11194, 11195, 11196, 11197, 11198, 11199, 11200, 11201, 11202, 11203, 11204, 11205, 11206, 11207, 11208, 11209, 11210, 11211, 11212, 11213, 11214, 11215, 11216, 11217, 11218, 11219, 11220, 11221, 11222, 11223, 11224, 11225, 11226, 11227, 11228, 11229, 11230, 11231, 11232, 11233, 11234, 11235, 11236, 11237, 11238, 11239, 11240, 11241, 11242, 11243, 11244, 11245, 11246, 11247, 11248, 11249, 11250, 11251, 11252, 11253, 11254, 11255, 11256, 11257, 11258, 11259, 11260, 11261, 11262, 11263, 11264, 11265, 11266, 11267, 11268, 11269, 11270, 11271, 11272, 11273, 11274, 11275, 11276, 11277, 11278, 11279, 11280, 11281, 11282, 11283, 11284, 11285, 11286, 11287, 11288, 11289, 11290, 11291, 11292, 11293, 11294, 11295, 11296, 11297, 11298, 11299, 11300, 11301, 11302, 11303, 11304, 11305, 11306, 11307, 11308, 11309, 11310, 11311, 11312, 11313, 11314, 11315, 11316, 11317, 11318, 11319, 11320, 11321, 11322, 11323, 11324, 11325, 11326, 11327, 11328, 11329, 11330, 11331, 11332, 11333, 11334, 11335, 11336, 11337, 11338, 11339, 11340, 11341, 11342, 11343, 11344, 11345, 11346, 11347, 11348, 11349, 11350, 11351, 11352, 11353, 11354, 11355, 11356, 11357, 11358, 11359, 11360, 11361, 11362, 11363, 11364, 11365, 11366, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11374, 11375, 11376, 11377, 11378, 11379, 11380, 11381, 11382, 11383, 11384, 11385, 11386, 11387, 11388, 11389, 11390, 11391, 11392, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11492, 11493, 11494, 11495, 11496, 11497, 11498, 11499, 11500, 11501, 11502, 11503, 11504, 11505, 11506, 11507, 11508, 11509, 11510, 11511, 11512, 11513, 11514, 11515, 11516, 11517, 11518, 11519, 11520, 11521, 11522, 11523, 11524, 11525, 11526, 11527, 11528, 11529, 11530, 11531, 11532, 11533, 11534, 11535, 11536, 11537, 11538, 11539, 11540, 11541, 11542, 11543, 11544, 11545, 11546, 11547, 11548, 11549, 11550, 11551, 11552, 11553, 11554, 11555, 11556, 11557, 11558, 11559, 11560, 11561, 11562, 11563, 11564, 11565, 11566, 11567, 11568, 11569, 11570, 11571, 11572, 11573, 11574, 11575, 11576, 11577, 11578, 11579, 11580, 11581, 11582, 11583, 11584, 11585, 11586, 11587, 11588, 11589, 11590, 11591, 11592, 11593, 11594, 11595, 11596, 11597, 11598, 11599, 11600, 11601, 11602, 11603, 11604, 11605, 11606, 11607, 11608, 11609, 11610, 11611, 11612, 11613, 11614, 11615, 11616, 11617, 11618, 11619, 11620, 11621, 11622, 11623, 11624, 11625, 11626, 11627, 11628, 11629, 11630, 11631, 11632, 11633, 11634, 11635, 11636, 11637, 11638, 11639, 11640, 11641, 11642, 11643, 11644, 11645, 11646, 11647, 11648, 11649, 11650, 11651, 11652, 11653, 11654, 11655, 11656, 11657, 11658, 11659, 11660, 11661, 11662, 11663, 11664, 11665, 11666, 11667, 11668, 11669, 11670, 11671, 11672, 11673, 11674, 11675, 11676, 11677, 11678, 11679, 11680, 11681, 11682, 11683, 11684, 11685, 11686, 11687, 11688, 11689, 11690, 11691, 11692, 11693, 11694, 11695, 11696, 11697, 11698, 11699, 11700, 11701, 11702, 11703, 11704, 11705, 11706, 11707, 11708, 11709, 11710, 11711, 11712, 11713, 11714, 11715, 11716, 11717, 11718, 11719, 11720, 11721, 11722, 11723, 11724, 11725, 11726, 11727, 11728, 11729, 11730, 11731, 11732, 11733, 11734, 11735, 11736, 11737, 11738, 11739, 11740, 11741, 11742, 11743, 11744, 11745, 11746, 11747, 11748, 11749, 11750, 11751, 11752, 11753, 11754, 11755, 11756, 11757, 11758, 11759, 11760, 11761, 11762, 11763, 11764, 11765, 11766, 11767, 11768, 11769, 11770, 11771, 11772, 11773, 11774, 11775, 11776, 11777, 11778, 11779, 11780, 11781, 11782, 11783, 11784, 11785, 11786, 11787, 11788, 11789, 11790, 11791, 11792, 11793, 11794, 11795, 11796, 11797, 11798, 11799, 11800, 11801, 11802, 11803, 11804, 11805, 11806, 11807, 11808, 11809, 11810, 11811, 11812, 11813, 11814, 11815, 11816, 11817, 11818, 11819, 11820, 11821, 11822, 11823, 11824, 11825, 11826, 11827, 11828, 11829, 11830, 11831, 11832, 11833, 11834, 11835, 11836, 11837, 11838, 11839, 11840, 11841, 11842, 11843, 11844, 11845, 11846, 11847, 11848, 11849, 11850, 11851, 11852, 11853, 11854, 11855, 11856, 11857, 11858, 11859, 11860, 11861, 11862, 11863, 11864, 11865, 11866, 11867, 11868, 11869, 11870, 11871, 11872, 11873, 11874, 11875, 11876, 11877, 11878, 11879, 11880, 11881, 11882, 11883, 11884, 11885, 11886, 11887, 11888, 11889, 11890, 11891, 11892, 11893, 11894, 11895, 11896, 11897, 11898, 11899, 11900, 11901, 11902, 11903, 11904, 11905, 11906, 11907, 11908, 11909, 11910, 11911, 11912, 11913, 11914, 11915, 11916, 11917, 11918, 11919, 11920, 11921, 11922, 11923, 11924, 11925, 11926, 11927, 11928, 11929, 11930, 11931, 11932, 11933, 11934, 11935, 11936, 11937, 11938, 11939, 11940, 11941, 11942, 11943, 11944, 11945, 11946, 11947, 11948, 11949, 11950, 11951, 11952, 11953, 11954, 11955, 11956, 11957, 11958, 11959, 11960, 11961, 11962, 11963, 11964, 11965, 11966, 11967, 11968, 11969, 11970, 11971, 11972, 11973, 11974, 11975, 11976, 11977, 11978, 11979, 11980, 11981, 11982, 11983, 11984, 11985, 11986, 11987, 11988, 11989, 11990, 11991, 11992, 11993, 11994, 11995, 11996, 11997, 11998, 11999, 12000, 12001, 12002, 12003, 12004, 12005, 12006, 12007, 12008, 12009, 12010, 12011, 12012, 12013, 12014, 12015, 12016, 12017, 12018, 12019, 12020, 12021, 12022, 12023, 12024, 12025, 12026, 12027, 12028, 12029, 12030, 12031, 12032, 12033, 12034, 12035, 12036, 12037, 12038, 12039, 12040, 12041, 12042, 12043, 12044, 12045, 12046, 12047, 12048, 12049, 12050, 12051, 12052, 12053, 12054, 12055, 12056, 12057, 12058, 12059, 12060, 12061, 12062, 12063, 12064, 12065, 12066, 12067, 12068, 12069, 12070, 12071, 12072, 12073, 12074, 12075, 12076, 12077, 12078, 12079, 12080, 12081, 12082, 12083, 12084, 12085, 12086, 12087, 12088, 12089, 12090, 12091, 12092, 12093, 12094, 12095, 12096, 12097, 12098, 12099, 12100, 12101, 12102, 12103, 12104, 12105, 12106, 12107, 12108, 12109, 12110, 12111, 12112, 12113, 12114, 12115, 12116, 12117, 12118, 12119, 12120, 12121, 12122, 12123, 12124, 12125, 12126, 12127, 12128, 12129, 12130, 12131, 12132, 12133, 12134, 12135, 12136, 12137, 12138, 12139, 12140, 12141, 12142, 12143, 12144, 12145, 12146, 12147, 12148, 12149, 12150, 12151, 12152, 12153, 12154, 12155, 12156, 12157, 12158, 12159, 12160, 12161, 12162, 12163, 12164, 12165, 12166, 12167, 12168, 12169, 12170, 12171, 12172, 12173, 12174, 12175, 12176, 12177, 12178, 12179, 12180, 12181, 12182, 12183, 12184, 12185, 12186, 12187, 12188, 12189, 12190, 12191, 12192, 12193, 12194, 12195, 12196, 12197, 12198, 12199, 12200, 12201, 12202, 12203, 12204, 12205, 12206, 12207, 12208, 12209, 12210, 12211, 12212, 12213, 12214, 12215, 12216, 12217, 12218, 12219, 12220, 12221, 12222, 12223, 12224, 12225, 12226, 12227, 12228, 12229, 12230, 12231, 12232, 12233, 12234, 12235, 12236, 12237, 12238, 12239, 12240, 12241, 12242, 12243, 12244, 12245, 12246, 12247, 12248, 12249, 12250, 12251, 12252, 12253, 12254, 12255, 12256, 12257, 12258, 12259, 12260, 12261, 12262, 12263, 12264, 12265, 12266, 12267, 12268, 12269, 12270, 12271, 12272, 12273, 12274, 12275, 12276, 12277, 12278, 12279, 12280, 12281, 12282, 12283, 12284, 12285, 12286, 12287, 12288, 12289, 12290, 12291, 12292, 12293, 12294, 12295, 12296, 12297, 12298, 12299, 12300, 12301, 12302, 12303, 12304, 12305, 12306, 12307, 12308, 12309, 12310, 12311, 12312, 12313, 12314, 12315, 12316, 12317, 12318, 12319, 12320, 12321, 12322, 12323, 12324, 12325, 12326, 12327, 12328, 12329, 12330, 12331, 12332, 12333, 12334, 12335, 12336, 12337, 12338, 12339, 12340, 12341, 12342, 12343, 12344, 12345, 12346, 12347, 12348, 12349, 12350, 12351, 12352, 12353, 12354, 12355, 12356, 12357, 12358, 12359, 12360, 12361, 12362, 12363, 12364, 12365, 12366, 12367, 12368, 12369, 12370, 12371, 12372, 12373, 12374, 12375, 12376, 12377, 12378, 12379, 12380, 12381, 12382, 12383, 12384, 12385, 12386, 12387, 12388, 12389, 12390, 12391, 12392, 12393, 12394, 12395, 12396, 12397, 12398, 12399, 12400, 12401, 12402, 12403, 12404, 12405, 12406, 12407, 12408, 12409, 12410, 12411, 12412, 12413, 12414, 12415, 12416, 12417, 12418, 12419, 12420, 12421, 12422, 12423, 12424, 12425, 12426, 12427, 12428, 12429, 12430, 12431, 12432, 12433, 12434, 12435, 12436, 12437, 12438, 12439, 12440, 12441, 12442, 12443, 12444, 12445, 12446, 12447, 12448, 12449, 12450, 12451, 12452, 12453, 12454, 12455, 12456, 12457, 12458, 12459, 12460, 12461, 12462, 12463, 12464, 12465, 12466, 12467, 12468, 12469, 12470, 12471, 12472, 12473, 12474, 12475, 12476, 12477, 12478, 12479, 12480, 12481, 12482, 12483, 12484, 12485, 12486, 12487, 12488, 12489, 12490, 12491, 12492, 12493, 12494, 12495, 12496, 12497, 12498, 12499, 12500, 12501, 12502, 12503, 12504, 12505, 12506, 12507, 12508, 12509, 12510, 12511, 12512, 12513, 12514, 12515, 12516, 12517, 12518, 12519, 12520, 12521, 12522, 12523, 12524, 12525, 12526, 12527, 12528, 12529, 12530, 12531, 12532, 12533, 12534, 12535, 12536, 12537, 12538, 12539, 12540, 12541, 12542, 12543, 12544, 12545, 12546, 12547, 12548, 12549, 12550, 12551, 12552, 12553, 12554, 12555, 12556, 12557, 12558, 12559, 12560, 12561, 12562, 12563, 12564, 12565, 12566, 12567, 12568, 12569, 12570, 12571, 12572, 12573, 12574, 12575, 12576, 12577, 12578, 12579, 12580, 12581, 12582, 12583, 12584, 12585, 12586, 12587, 12588, 12589, 12590, 12591, 12592, 12593, 12594, 12595, 12596, 12597, 12598, 12599, 12600, 12601, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12609, 12610, 12611, 12612, 12613, 12614, 12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622, 12623, 12624, 12625, 12626, 12627, 12628, 12629, 12630, 12631, 12632, 12633, 12634, 12635, 12636, 12637, 12638, 12639, 12640, 12641, 12642, 12643, 12644, 12645, 12646, 12647, 12648, 12649, 12650, 12651, 12652, 12653, 12654, 12655, 12656, 12657, 12658, 12659, 12660, 12661, 12662, 12663, 12664, 12665, 12666, 12667, 12668, 12669, 12670, 12671, 12672, 12673, 12674, 12675, 12676, 12677, 12678, 12679, 12680, 12681, 12682, 12683, 12684, 12685, 12686, 12687, 12688, 12689, 12690, 12691, 12692, 12693, 12694, 12695, 12696, 12697, 12698, 12699, 12700, 12701, 12702, 12703, 12704, 12705, 12706, 12707, 12708, 12709, 12710, 12711, 12712, 12713, 12714, 12715, 12716, 12717, 12718, 12719, 12720, 12721, 12722, 12723, 12724, 12725, 12726, 12727, 12728, 12729, 12730, 12731, 12732, 12733, 12734, 12735, 12736, 12737, 12738, 12739, 12740, 12741, 12742, 12743, 12744, 12745, 12746, 12747, 12748, 12749, 12750, 12751, 12752, 12753, 12754, 12755, 12756, 12757, 12758, 12759, 12760, 12761, 12762, 12763, 12764, 12765, 12766, 12767, 12768, 12769, 12770, 12771, 12772, 12773, 12774, 12775, 12776, 12777, 12778, 12779, 12780, 12781, 12782, 12783, 12784, 12785, 12786, 12787, 12788, 12789, 12790, 12791, 12792, 12793, 12794, 12795, 12796, 12797, 12798, 12799, 12800, 12801, 12802, 12803, 12804, 12805, 12806, 12807, 12808, 12809, 12810, 12811, 12812, 12813, 12814, 12815, 12816, 12817, 12818, 12819, 12820, 12821, 12822, 12823, 12824, 12825, 12826, 12827, 12828, 12829, 12830, 12831, 12832, 12833, 12834, 12835, 12836, 12837, 12838, 12839, 12840, 12841, 12842, 12843, 12844, 12845, 12846, 12847, 12848, 12849, 12850, 12851, 12852, 12853, 12854, 12855, 12856, 12857, 12858, 12859, 12860, 12861, 12862, 12863, 12864, 12865, 12866, 12867, 12868, 12869, 12870, 12871, 12872, 12873, 12874, 12875, 12876, 12877, 12878, 12879, 12880, 12881, 12882, 12883, 12884, 12885, 12886, 12887, 12888, 12889, 12890, 12891, 12892, 12893, 12894, 12895, 12896, 12897, 12898, 12899, 12900, 12901, 12902, 12903, 12904, 12905, 12906, 12907, 12908, 12909, 12910, 12911, 12912, 12913, 12914, 12915, 12916, 12917, 12918, 12919, 12920, 12921, 12922, 12923, 12924, 12925, 12926, 12927, 12928, 12929, 12930, 12931, 12932, 12933, 12934, 12935, 12936, 12937, 12938, 12939, 12940, 12941, 12942, 12943, 12944, 12945, 12946, 12947, 12948, 12949, 12950, 12951, 12952, 12953, 12954, 12955, 12956, 12957, 12958, 12959, 12960, 12961, 12962, 12963, 12964, 12965, 12966, 12967, 12968, 12969, 12970, 12971, 12972, 12973, 12974, 12975, 12976, 12977, 12978, 12979, 12980, 12981, 12982, 12983, 12984, 12985, 12986, 12987, 12988, 12989, 12990, 12991, 12992, 12993, 12994, 12995, 12996, 12997, 12998, 12999, 13000, 13001, 13002, 13003, 13004, 13005, 13006, 13007, 13008, 13009, 13010, 13011, 13012, 13013, 13014, 13015, 13016, 13017, 13018, 13019, 13020, 13021, 13022, 13023, 13024, 13025, 13026, 13027, 13028, 13029, 13030, 13031, 13032, 13033, 13034, 13035, 13036, 13037, 13038, 13039, 13040, 13041, 13042, 13043, 13044, 13045, 13046, 13047, 13048, 13049, 13050, 13051, 13052, 13053, 13054, 13055, 13056, 13057, 13058, 13059, 13060, 13061, 13062, 13063, 13064, 13065, 13066, 13067, 13068, 13069, 13070, 13071, 13072, 13073, 13074, 13075, 13076, 13077, 13078, 13079, 13080, 13081, 13082, 13083, 13084, 13085, 13086, 13087, 13088, 13089, 13090, 13091, 13092, 13093, 13094, 13095, 13096, 13097, 13098, 13099, 13100, 13101, 13102, 13103, 13104, 13105, 13106, 13107, 13108, 13109, 13110, 13111, 13112, 13113, 13114, 13115, 13116, 13117, 13118, 13119, 13120, 13121, 13122, 13123, 13124, 13125, 13126, 13127, 13128, 13129, 13130, 13131, 13132, 13133, 13134, 13135, 13136, 13137, 13138, 13139, 13140, 13141, 13142, 13143, 13144, 13145, 13146, 13147, 13148, 13149, 13150, 13151, 13152, 13153, 13154, 13155, 13156, 13157, 13158, 13159, 13160, 13161, 13162, 13163, 13164, 13165, 13166, 13167, 13168, 13169, 13170, 13171, 13172, 13173, 13174, 13175, 13176, 13177, 13178, 13179, 13180, 13181, 13182, 13183, 13184, 13185, 13186, 13187, 13188, 13189, 13190, 13191, 13192, 13193, 13194, 13195, 13196, 13197, 13198, 13199, 13200, 13201, 13202, 13203, 13204, 13205, 13206, 13207, 13208, 13209, 13210, 13211, 13212, 13213, 13214, 13215, 13216, 13217, 13218, 13219, 13220, 13221, 13222, 13223, 13224, 13225, 13226, 13227, 13228, 13229, 13230, 13231, 13232, 13233, 13234, 13235, 13236, 13237, 13238, 13239, 13240, 13241, 13242, 13243, 13244, 13245, 13246, 13247, 13248, 13249, 13250, 13251, 13252, 13253, 13254, 13255, 13256, 13257, 13258, 13259, 13260, 13261, 13262, 13263, 13264, 13265, 13266, 13267, 13268, 13269, 13270, 13271, 13272, 13273, 13274, 13275, 13276, 13277, 13278, 13279, 13280, 13281, 13282, 13283, 13284, 13285, 13286, 13287, 13288, 13289, 13290, 13291, 13292, 13293, 13294, 13295, 13296, 13297, 13298, 13299, 13300, 13301, 13302, 13303, 13304, 13305, 13306, 13307, 13308, 13309, 13310, 13311, 13312, 13313, 13314, 13315, 13316, 13317, 13318, 13319, 13320, 13321, 13322, 13323, 13324, 13325, 13326, 13327, 13328, 13329, 13330, 13331, 13332, 13333, 13334, 13335, 13336, 13337, 13338, 13339, 13340, 13341, 13342, 13343, 13344, 13345, 13346, 13347, 13348, 13349, 13350, 13351, 13352, 13353, 13354, 13355, 13356, 13357, 13358, 13359, 13360, 13361, 13362, 13363, 13364, 13365, 13366, 13367, 13368, 13369, 13370, 13371, 13372, 13373, 13374, 13375, 13376, 13377, 13378, 13379, 13380, 13381, 13382, 13383, 13384, 13385, 13386, 13387, 13388, 13389, 13390, 13391, 13392, 13393, 13394, 13395, 13396, 13397, 13398, 13399, 13400, 13401, 13402, 13403, 13404, 13405, 13406, 13407, 13408, 13409, 13410, 13411, 13412, 13413, 13414, 13415, 13416, 13417, 13418, 13419, 13420, 13421, 13422, 13423, 13424, 13425, 13426, 13427, 13428, 13429, 13430, 13431, 13432, 13433, 13434, 13435, 13436, 13437, 13438, 13439, 13440, 13441, 13442, 13443, 13444, 13445, 13446, 13447, 13448, 13449, 13450, 13451, 13452, 13453, 13454, 13455, 13456, 13457, 13458, 13459, 13460, 13461, 13462, 13463, 13464, 13465, 13466, 13467, 13468, 13469, 13470, 13471, 13472, 13473, 13474, 13475, 13476, 13477, 13478, 13479, 13480, 13481, 13482, 13483, 13484, 13485, 13486, 13487, 13488, 13489, 13490, 13491, 13492, 13493, 13494, 13495, 13496, 13497, 13498, 13499, 13500, 13501, 13502, 13503, 13504, 13505, 13506, 13507, 13508, 13509, 13510, 13511, 13512, 13513, 13514, 13515, 13516, 13517, 13518, 13519, 13520, 13521, 13522, 13523, 13524, 13525, 13526, 13527, 13528, 13529, 13530, 13531, 13532, 13533, 13534, 13535, 13536, 13537, 13538, 13539, 13540, 13541, 13542, 13543, 13544, 13545, 13546, 13547, 13548, 13549, 13550, 13551, 13552, 13553, 13554, 13555, 13556, 13557, 13558, 13559, 13560, 13561, 13562, 13563, 13564, 13565, 13566, 13567, 13568, 13569, 13570, 13571, 13572, 13573, 13574, 13575, 13576, 13577, 13578, 13579, 13580, 13581, 13582, 13583, 13584, 13585, 13586, 13587, 13588, 13589, 13590, 13591, 13592, 13593, 13594, 13595, 13596, 13597, 13598, 13599, 13600, 13601, 13602, 13603, 13604, 13605, 13606, 13607, 13608, 13609, 13610, 13611, 13612, 13613, 13614, 13615, 13616, 13617, 13618, 13619, 13620, 13621, 13622, 13623, 13624, 13625, 13626, 13627, 13628, 13629, 13630, 13631, 13632, 13633, 13634, 13635, 13636, 13637, 13638, 13639, 13640, 13641, 13642, 13643, 13644, 13645, 13646, 13647, 13648, 13649, 13650, 13651, 13652, 13653, 13654, 13655, 13656, 13657, 13658, 13659, 13660, 13661, 13662, 13663, 13664, 13665, 13666, 13667, 13668, 13669, 13670, 13671, 13672, 13673, 13674, 13675, 13676, 13677, 13678, 13679, 13680, 13681, 13682, 13683, 13684, 13685, 13686, 13687, 13688, 13689, 13690, 13691, 13692, 13693, 13694, 13695, 13696, 13697, 13698, 13699, 13700, 13701, 13702, 13703, 13704, 13705, 13706, 13707, 13711, 13712, 13713, 13714, 13715, 13716, 13717, 13718, 13719, 13720, 13721, 13722, 13723, 13724, 13725, 13726, 13727, 13728, 13729, 13730, 13731, 13732, 13733, 13734, 13735, 13736, 13737, 13738, 13739, 13740, 13741, 13742, 13743, 13744, 13745, 13746, 13747, 13748, 13749, 13750, 13751, 13752, 13753, 13754, 13755, 13756, 13757, 13758, 13759, 13760, 13761, 13762, 13763, 13764, 13765, 13766, 13767, 13768, 13769, 13770, 13771, 13772, 13773, 13774, 13775, 13776, 13777, 13778, 13779, 13780, 13781, 13782, 13783, 13784, 13785, 13786, 13787, 13788, 13789, 13790, 13791, 13792, 13793, 13794, 13795, 13796, 13797, 13798, 13799, 13800, 13801, 13802, 13803, 13804, 13805, 13806, 13807, 13808, 13809, 13810, 13811, 13812, 13813, 13814, 13815, 13816, 13817, 13818, 13819, 13820, 13821, 13822, 13823, 13824, 13825, 13826, 13827, 13828, 13829, 13830, 13831, 13832, 13833, 13834, 13835, 13836, 13837, 13838, 13839, 13840, 13841, 13842, 13843, 13844, 13845, 13846, 13847, 13848, 13849, 13850, 13851, 13852, 13853, 13854, 13855, 13856, 13857, 13858, 13859, 13860, 13861, 13862, 13863, 13864, 13865, 13866, 13867, 13868, 13869, 13870, 13871, 13872, 13873, 13874, 13875, 13876, 13877, 13878, 13879, 13880, 13881, 13882, 13883, 13884, 13885, 13886, 13887, 13888, 13889, 13890, 13891, 13892, 13893, 13894, 13895, 13896, 13897, 13898, 13899, 13900, 13901, 13902, 13903, 13904, 13905, 13906, 13907, 13908, 13909, 13910, 13911, 13912, 13913, 13914, 13915, 13916, 13917, 13918, 13919, 13920, 13921, 13922, 13923, 13924, 13925, 13926, 13927, 13928, 13929, 13930, 13931, 13932, 13933, 13934, 13935, 13936, 13937, 13938, 13939, 13940, 13941, 13942, 13943, 13944, 13945, 13946, 13947, 13948, 13949, 13950, 13951, 13952, 13953, 13954, 13955, 13956, 13957, 13958, 13959, 13960, 13961, 13962, 13963, 13964, 13965, 13966, 13967, 13968, 13969, 13970, 13971, 13972, 13973, 13974, 13975, 13976, 13977, 13978, 13979, 13980, 13981, 13982, 13983, 13984, 13985, 13986, 13987, 13988, 13989, 13990, 13991, 13992, 13993, 13994, 13995, 13996, 13997, 13998, 13999, 14000, 14001, 14002, 14003, 14004, 14005, 14006, 14007, 14008, 14009, 14010, 14011, 14012, 14013, 14014, 14015, 14016, 14017, 14018, 14019, 14020, 14021, 14022, 14023, 14024, 14025, 14026, 14027, 14028, 14029, 14030, 14031, 14032, 14033, 14034, 14035, 14036, 14037, 14038, 14039, 14040, 14041, 14042, 14043, 14044, 14045, 14046, 14047, 14048, 14049, 14050, 14051, 14052, 14053, 14054, 14055, 14056, 14057, 14058, 14059, 14060, 14061, 14062, 14063, 14064, 14065, 14066, 14067, 14068, 14069, 14070, 14071, 14072, 14073, 14074, 14075, 14076, 14077, 14078, 14079, 14080, 14081, 14082, 14083, 14084, 14085, 14086, 14087, 14088, 14089, 14090, 14091, 14092, 14093, 14094, 14095, 14096, 14097, 14098, 14099, 14100, 14101, 14102, 14103, 14104, 14105, 14106, 14107, 14108, 14109, 14110, 14111, 14112, 14113, 14114, 14115, 14116, 14117, 14118, 14119, 14120, 14121, 14122, 14123, 14124, 14125, 14126, 14127, 14128, 14129, 14130, 14131, 14132, 14133, 14134, 14135, 14136, 14137, 14138, 14139, 14140, 14141, 14142, 14143, 14144, 14145, 14146, 14147, 14148, 14149, 14150, 14151, 14152, 14153, 14154, 14155, 14156, 14157, 14158, 14159, 14160, 14161, 14162, 14163, 14164, 14165, 14166, 14167, 14168, 14169, 14170, 14171, 14172, 14173, 14174, 14175, 14176, 14177, 14178, 14179, 14180, 14181, 14182, 14183, 14184, 14185, 14186, 14187, 14188, 14189, 14190, 14191, 14192, 14193, 14194, 14195, 14196, 14197, 14198, 14199, 14200, 14201, 14202, 14203, 14204, 14205, 14206, 14207, 14208, 14209, 14210, 14211, 14212, 14213, 14214, 14215, 14216, 14217, 14218, 14219, 14220, 14221, 14222, 14223, 14224, 14225, 14226, 14227, 14228, 14229, 14230, 14231, 14232, 14233, 14234, 14235, 14236, 14237, 14238, 14239, 14240, 14241, 14242, 14243, 14244, 14245, 14246, 14247, 14248, 14249, 14250, 14251, 14252, 14253, 14254, 14255, 14256, 14257, 14258, 14259, 14260, 14261, 14262, 14263, 14264, 14265, 14266, 14267, 14268, 14269, 14270, 14271, 14272, 14273, 14274, 14275, 14276, 14277, 14278, 14279, 14280, 14281, 14282, 14283, 14284, 14285, 14286, 14287, 14288, 14289, 14290, 14291, 14292, 14293, 14294, 14295, 14296, 14297, 14298, 14299, 14300, 14301, 14302, 14303, 14304, 14305, 14306, 14307, 14308, 14309, 14310, 14311, 14312, 14313, 14314, 14315, 14316, 14317, 14318, 14319, 14320, 14321, 14322, 14323, 14324, 14325, 14326, 14327, 14328, 14329, 14330, 14331, 14332, 14333, 14334, 14335, 14336, 14337, 14338, 14339, 14340, 14341, 14342, 14343, 14344, 14345, 14346, 14347, 14348, 14349, 14350, 14351, 14352, 14353, 14354, 14355, 14356, 14357, 14358, 14359, 14360, 14361, 14362, 14363, 14364, 14365, 14366, 14367, 14368, 14369, 14370, 14371, 14372, 14373, 14374, 14375, 14376, 14377, 14378, 14379, 14380, 14381, 14382, 14383, 14384, 14385, 14386, 14387, 14388, 14389, 14390, 14391, 14392, 14393, 14394, 14395, 14396, 14397, 14398, 14399, 14400, 14401, 14402, 14403, 14404, 14405, 14406, 14407, 14408, 14409, 14410, 14411, 14412, 14413, 14414, 14415, 14416, 14417, 14418, 14419, 14420, 14421, 14422, 14423, 14424, 14425, 14426, 14427, 14428, 14429, 14430, 14431, 14432, 14433, 14434, 14435, 14436, 14437, 14438, 14439, 14440, 14441, 14442, 14443, 14444, 14445, 14446, 14447, 14448, 14449, 14450, 14451, 14452, 14453, 14454, 14455, 14456, 14457, 14458, 14459, 14460, 14461, 14462, 14463, 14464, 14465, 14466, 14467, 14468, 14469, 14470, 14471, 14472, 14473, 14474, 14475, 14476, 14477, 14478, 14479, 14480, 14481, 14482, 14483, 14484, 14485, 14486, 14487, 14488, 14489, 14490, 14491, 14492, 14493, 14494, 14495, 14496, 14497, 14498, 14499, 14500, 14501, 14502, 14503, 14504, 14505, 14506, 14507, 14508, 14509, 14510, 14511, 14512, 14513, 14514, 14515, 14516, 14517, 14518, 14519, 14520, 14521, 14522, 14523, 14524, 14525, 14526, 14527, 14528, 14529, 14530, 14531, 14532, 14533, 14534, 14535, 14536, 14537, 14538, 14539, 14540, 14541, 14542, 14543, 14544, 14545, 14546, 14547, 14548, 14549, 14550, 14551, 14552, 14553, 14554, 14555, 14556, 14557, 14558, 14559, 14560, 14561, 14562, 14563, 14564, 14565, 14566, 14567, 14568, 14569, 14570, 14571, 14572, 14573, 14574, 14575, 14576, 14577, 14578, 14579, 14580, 14581, 14582, 14583, 14584, 14585, 14586, 14587, 14588, 14589, 14590, 14591, 14592, 14593, 14594, 14595, 14596, 14597, 14598, 14599, 14600, 14601, 14602, 14603, 14604, 14605, 14606, 14607, 14608, 14609, 14610, 14611, 14612, 14613, 14614, 14615, 14616, 14617, 14618, 14619, 14620, 14621, 14622, 14623, 14624, 14625, 14626, 14627, 14628, 14629, 14630, 14631, 14632, 14633, 14634, 14635, 14636, 14637, 14638, 14639, 14640, 14641, 14642, 14643, 14644, 14645, 14646, 14647, 14648, 14649, 14650, 14651, 14652, 14653, 14654, 14655, 14656, 14657, 14658, 14659, 14660, 14661, 14662, 14663, 14664, 14665, 14666, 14667, 14668, 14669, 14670, 14671, 14672, 14673, 14674, 14675, 14676, 14677, 14678, 14679, 14680, 14681, 14682, 14683, 14684, 14685, 14686, 14687, 14688, 14689, 14690, 14691, 14692, 14693, 14694, 14695, 14696, 14697, 14698, 14699, 14700, 14701, 14702, 14703, 14704, 14705, 14706, 14707, 14708, 14709, 14710, 14711, 14712, 14713, 14714, 14715, 14716, 14717, 14718, 14719, 14720, 14721, 14722, 14723, 14724, 14725, 14726, 14727, 14728, 14729, 14730, 14731, 14732, 14733, 14734, 14735, 14736, 14737, 14738, 14739, 14740, 14741, 14742, 14743, 14744, 14745, 14746, 14747, 14748, 14749, 14750, 14751, 14752, 14753, 14754, 14755, 14756, 14757, 14758, 14759, 14760, 14761, 14762, 14763, 14764, 14765, 14766, 14767, 14768, 14769, 14770, 14771, 14772, 14773, 14774, 14775, 14776, 14777, 14778, 14779, 14780, 14781, 14782, 14783, 14784, 14785, 14786, 14787, 14788, 14789, 14790, 14791, 14792, 14793, 14794, 14795, 14796, 14797, 14798, 14799, 14800, 14801, 14802, 14803, 14804, 14805, 14806, 14807, 14808, 14809, 14810, 14811, 14812, 14813, 14814, 14815, 14816, 14817, 14818, 14819, 14820, 14821, 14822, 14823, 14824, 14825, 14826, 14827, 14828, 14829, 14830, 14831, 14832, 14833, 14834, 14835, 14836, 14837, 14838, 14839, 14840, 14841, 14842, 14843, 14844, 14845, 14846, 14847, 14848, 14849, 14850, 14851, 14852, 14853, 14854, 14855, 14856, 14857, 14858, 14859, 14860, 14861, 14862, 14863, 14864, 14865, 14866, 14867, 14868, 14869, 14870, 14871, 14872, 14873, 14874, 14875, 14876, 14877, 14878, 14879, 14880, 14881, 14882, 14883, 14884, 14885, 14886, 14887, 14888, 14889, 14890, 14891, 14892, 14893, 14894, 14895, 14896, 14897, 14898, 14899, 14900, 14901, 14902, 14903, 14904, 14905, 14906, 14907, 14908, 14909, 14910, 14911, 14912, 14913, 14914, 14915, 14916, 14917, 14918, 14919, 14920, 14921, 14922, 14923, 14924, 14925, 14926, 14927, 14928, 14929, 14930, 14931, 14932, 14933, 14934, 14935, 14936, 14937, 14938, 14939, 14940, 14941, 14942, 14943, 14944, 14945, 14946, 14947, 14948, 14949, 14950, 14951, 14952, 14953, 14954, 14955, 14956, 14957, 14958, 14959, 14960, 14961, 14962, 14963, 14964, 14965, 14966, 14967, 14968, 14969, 14970, 14971, 14972, 14973, 14974, 14975, 14976, 14977, 14978, 14979, 14980, 14981, 14982, 14983, 14984, 14985, 14986, 14987, 14988, 14989, 14990, 14991, 14992, 14993, 14994, 14995, 14996, 14997, 14998, 14999, 15000, 15001, 15002, 15003, 15004, 15005, 15006, 15007, 15008, 15009, 15010, 15011, 15012, 15013, 15014, 15015, 15016, 15017, 15018, 15019, 15020, 15021, 15022, 15023, 15024, 15025, 15026, 15027, 15028, 15029, 15030, 15031, 15032, 15033, 15034, 15035, 15036, 15037, 15038, 15039, 15040, 15041, 15042, 15043, 15044, 15045, 15046, 15047, 15048, 15049, 15050, 15051, 15052, 15053, 15054, 15055, 15056, 15057, 15058, 15059, 15060, 15061, 15062, 15063, 15064, 15065, 15066, 15067, 15068, 15069, 15070, 15071, 15072, 15073, 15074, 15075, 15076, 15077, 15078, 15079, 15080, 15081, 15082, 15083, 15084, 15085, 15086, 15087, 15088, 15089, 15090, 15091, 15092, 15093, 15094, 15095, 15096, 15097, 15098, 15099, 15100, 15101, 15102, 15103, 15104, 15105, 15106, 15107, 15108, 15109, 15110, 15111, 15112, 15113, 15114, 15115, 15116, 15117, 15118, 15119, 15120, 15121, 15122, 15123, 15124, 15125, 15126, 15127, 15128, 15129, 15130, 15131, 15132, 15133, 15134, 15135, 15136, 15137, 15138, 15139, 15140, 15141, 15142, 15143, 15144, 15145, 15146, 15147, 15148, 15149, 15150, 15151, 15152, 15153, 15154, 15155, 15156, 15157, 15158, 15159, 15160, 15161, 15162, 15163, 15164, 15165, 15166, 15167, 15168, 15169, 15170, 15171, 15172, 15173, 15174, 15175, 15176, 15177, 15178, 15179, 15180, 15181, 15182, 15183, 15184, 15185, 15186, 15187, 15188, 15189, 15190, 15191, 15192, 15193, 15194, 15195, 15196, 15197, 15198, 15199, 15200, 15201, 15202, 15203, 15204, 15205, 15206, 15207, 15208, 15209, 15210, 15211, 15212, 15213, 15214, 15215, 15216, 15217, 15218, 15219, 15220, 15221, 15222, 15223, 15224, 15225, 15226, 15227, 15228, 15229, 15230, 15231, 15232, 15233, 15234, 15235, 15236, 15237, 15238, 15239, 15240, 15241, 15242, 15243, 15244, 15245, 15246, 15247, 15248, 15249, 15250, 15251, 15252, 15253, 15254, 15255, 15256, 15257, 15258, 15259, 15260, 15261, 15262, 15263, 15264, 15265, 15266, 15267, 15268, 15269, 15270, 15271, 15272, 15273, 15274, 15275, 15276, 15277, 15278, 15279, 15280, 15281, 15282, 15283, 15284, 15285, 15286, 15287, 15288, 15289, 15290, 15291, 15292, 15293, 15294, 15295, 15296, 15297, 15298, 15299, 15300, 15301, 15302, 15303, 15304, 15305, 15306, 15307, 15308, 15309, 15310, 15311, 15312, 15313, 15314, 15315, 15316, 15317, 15318, 15319, 15320, 15321, 15322, 15323, 15324, 15325, 15326, 15327, 15328, 15329, 15330, 15331, 15332, 15333, 15334, 15335, 15336, 15337, 15338, 15339, 15340, 15341, 15342, 15343, 15344, 15345, 15346, 15347, 15348, 15349, 15350, 15351, 15352, 15353, 15354, 15355, 15356, 15357, 15358, 15359, 15360, 15361, 15362, 15363, 15364, 15365, 15366, 15367, 15368, 15369, 15370, 15371, 15372, 15373, 15374, 15375, 15376, 15377, 15378, 15379, 15380, 15381, 15382, 15383, 15384, 15385, 15386, 15387, 15388, 15389, 15390, 15391, 15392, 15393, 15394, 15395, 15396, 15397, 15398, 15399, 15400, 15401, 15402, 15403, 15404, 15405, 15406, 15407, 15408, 15409, 15410, 15411, 15412, 15413, 15414, 15415, 15416, 15417, 15418, 15419, 15420, 15421, 15422, 15423, 15424, 15425, 15426, 15427, 15428, 15429, 15430, 15431, 15432, 15433, 15434, 15435, 15436, 15437, 15438, 15439, 15440, 15441, 15442, 15443, 15444, 15445, 15446, 15447, 15448, 15449, 15450, 15451, 15452, 15453, 15454, 15455, 15456, 15457, 15458, 15459, 15460, 15461, 15462, 15463, 15464, 15465, 15466, 15467, 15468, 15469, 15470, 15471, 15472, 15473, 15474, 15475, 15476, 15477, 15478, 15479, 15480, 15481, 15482, 15483, 15484, 15485, 15486, 15487, 15488, 15489, 15490, 15491, 15492, 15493, 15494, 15495, 15496, 15497, 15498, 15499, 15500, 15501, 15502, 15503, 15504, 15505, 15506, 15507, 15508, 15509, 15510, 15511, 15512, 15513, 15514, 15515, 15516, 15517, 15518, 15519, 15520, 15521, 15522, 15523, 15524, 15525, 15526, 15527, 15528, 15529, 15530, 15531, 15532, 15533, 15534, 15535, 15536, 15537, 15538, 15539, 15540, 15541, 15542, 15543, 15544, 15545, 15546, 15547, 15548, 15549, 15550, 15551, 15552, 15553, 15554, 15555, 15556, 15557, 15558, 15559, 15560, 15561, 15562, 15563, 15564, 15565, 15566, 15567, 15568, 15569, 15570, 15571, 15572, 15573, 15574, 15575, 15576, 15577, 15578, 15579, 15580, 15581, 15582, 15583, 15584, 15585, 15586, 15587, 15588, 15589, 15590, 15591, 15592, 15593, 15594, 15595, 15596, 15597, 15598, 15599, 15600, 15601, 15602, 15603, 15604, 15605, 15606, 15607, 15608, 15609, 15610, 15611, 15612, 15613, 15614, 15615, 15616, 15617, 15618, 15619, 15620, 15621, 15622, 15623, 15624, 15625, 15626, 15627, 15628, 15629, 15630, 15631, 15632, 15633, 15634, 15635, 15636, 15637, 15638, 15639, 15640, 15641, 15642, 15643, 15644, 15645, 15646, 15647, 15648, 15649, 15650, 15651, 15652, 15653, 15654, 15655, 15656, 15657, 15658, 15659, 15660, 15661, 15662, 15663, 15664, 15665, 15666, 15667, 15668, 15669, 15670, 15671, 15672, 15673, 15674, 15675, 15676, 15677, 15678, 15679, 15680, 15681, 15682, 15683, 15684, 15685, 15686, 15687, 15688, 15689, 15690, 15691, 15692, 15693, 15694, 15695, 15696, 15697, 15698, 15699, 15700, 15701, 15702, 15703, 15704, 15705, 15706, 15707, 15708, 15709, 15710, 15711, 15712, 15713, 15714, 15715, 15716, 15717, 15718, 15719, 15720, 15721, 15722, 15723, 15724, 15725, 15726, 15727, 15728, 15729, 15730, 15731, 15732, 15733, 15734, 15735, 15736, 15737, 15738, 15739, 15740, 15741, 15742, 15743, 15744, 15745, 15746, 15747, 15748, 15749, 15750, 15751, 15752, 15753, 15754, 15755, 15756, 15757, 15758, 15759, 15760, 15761, 15762, 15763, 15764, 15765, 15766, 15767, 15768, 15769, 15770, 15771, 15772, 15773, 15774, 15775, 15776, 15777, 15778, 15779, 15780, 15781, 15782, 15783, 15784, 15785, 15786, 15787, 15788, 15789, 15790, 15791, 15792, 15793, 15794, 15795, 15796, 15797, 15798, 15799, 15800, 15801, 15802, 15803, 15804, 15805, 15806, 15807, 15808, 15809, 15810, 15811, 15812, 15813, 15814, 15815, 15816, 15817, 15818, 15819, 15820, 15821, 15822, 15823, 15824, 15825, 15826, 15827, 15828, 15829, 15830, 15831, 15832, 15833, 15834, 15835, 15836, 15837, 15838, 15839, 15840, 15841, 15842, 15843, 15844, 15845, 15846, 15847, 15848, 15849, 15850, 15851, 15852, 15853, 15854, 15855, 15856, 15857, 15858, 15859, 15860, 15861, 15862, 15863, 15864, 15865, 15866, 15867, 15868, 15869, 15870, 15871, 15872, 15873, 15874, 15875, 15876, 15877, 15878, 15879, 15880, 15881, 15882, 15883, 15884, 15885, 15886, 15887, 15888, 15889, 15890, 15891, 15892, 15893, 15894, 15895, 15896, 15897, 15898, 15899, 15900, 15901, 15902, 15903, 15904, 15905, 15906, 15907, 15908, 15909, 15910, 15911, 15912, 15913, 15914, 15915, 15916, 15917, 15918, 15919, 15920, 15921, 15922, 15923, 15924, 15925, 15926, 15927, 15928, 15929, 15930, 15931, 15932, 15933, 15934, 15935, 15936, 15937, 15938, 15939, 15940, 15941, 15942, 15943, 15944, 15945, 15946, 15947, 15948, 15949, 15950, 15951, 15952, 15953, 15954, 15955, 15956, 15957, 15958, 15959, 15960, 15961, 15962, 15963, 15964, 15965, 15966, 15967, 15968, 15969, 15970, 15971, 15972, 15973, 15974, 15975, 15976, 15977, 15978, 15979, 15980, 15981, 15982, 15983, 15984, 15985, 15986, 15987, 15988, 15989, 15990, 15991, 15992, 15993, 15994, 15995, 15996, 15997, 15998, 15999, 16000, 16001, 16002, 16003, 16004, 16005, 16006, 16007, 16008, 16009, 16010, 16011, 16012, 16013, 16014, 16015, 16016, 16017, 16018, 16019, 16020, 16021, 16022, 16023, 16024, 16025, 16026, 16027, 16028, 16029, 16030, 16031, 16032, 16033, 16034, 16035, 16036, 16037, 16038, 16039, 16040, 16041, 16042, 16043, 16044, 16045, 16046, 16047, 16048, 16049, 16050, 16051, 16052, 16053, 16054, 16055, 16056, 16057, 16058, 16059, 16060, 16061, 16062, 16063, 16064, 16065, 16066, 16067, 16068, 16069, 16070, 16071, 16072, 16073, 16074, 16075, 16076, 16077, 16078, 16079, 16080, 16081, 16082, 16083, 16084, 16085, 16086, 16087, 16088, 16089, 16090, 16091, 16092, 16093, 16094, 16095, 16096, 16097, 16098, 16099, 16100, 16101, 16102, 16103, 16104, 16105, 16106, 16107, 16108, 16109, 16110, 16111, 16112, 16113, 16114, 16115, 16116, 16117, 16118, 16119, 16120, 16121, 16122, 16123, 16124, 16125, 16126, 16127, 16128, 16129, 16130, 16131, 16132, 16133, 16134, 16135, 16136, 16137, 16138, 16139, 16140, 16141, 16142, 16143, 16144, 16145, 16146, 16147, 16148, 16149, 16150, 16151, 16152, 16153, 16154, 16155, 16156, 16157, 16158, 16159, 16160, 16161, 16162, 16163, 16164, 16165, 16166, 16167, 16168, 16169, 16170, 16171, 16172, 16173, 16174, 16175, 16176, 16177, 16178, 16179, 16180, 16181, 16182, 16183, 16184, 16185, 16186, 16187, 16188, 16189, 16190, 16191, 16192, 16193, 16194, 16195, 16196, 16197, 16198, 16199, 16200, 16201, 16202, 16203, 16204, 16205, 16206, 16207, 16208, 16209, 16210, 16211, 16212, 16213, 16214, 16215, 16216, 16217, 16218, 16219, 16220, 16221, 16222, 16223, 16224, 16225, 16226, 16227, 16228, 16229, 16230, 16231, 16232, 16233, 16234, 16235, 16236, 16237, 16238, 16239, 16240, 16241, 16242, 16243, 16244, 16245, 16246, 16247, 16248, 16249, 16250, 16251, 16252, 16253, 16254, 16255, 16256, 16257, 16258, 16259, 16260, 16261, 16262, 16263, 16264, 16265, 16266, 16267, 16268, 16269, 16270, 16271, 16272, 16273, 16274, 16275, 16276, 16277, 16278, 16279, 16280, 16281, 16282, 16283, 16284, 16285, 16286, 16287, 16288, 16289, 16290, 16291, 16292, 16293, 16294, 16295, 16296, 16297, 16298, 16299, 16300, 16301, 16302, 16303, 16304, 16305, 16306, 16307, 16308, 16309, 16310, 16311, 16312, 16313, 16314, 16315, 16316, 16317, 16318, 16319, 16320, 16321, 16322, 16323, 16324, 16325, 16326, 16327, 16328, 16329, 16330, 16331, 16332, 16333, 16334, 16335, 16336, 16337, 16338, 16339, 16340, 16341, 16342, 16343, 16344, 16345, 16346, 16347, 16348, 16349, 16350, 16351, 16352, 16353, 16354, 16355, 16356, 16357, 16358, 16359, 16360, 16361, 16362, 16363, 16364, 16365, 16366, 16367, 16368, 16369, 16370, 16371, 16372, 16373, 16374, 16375, 16376, 16377, 16378, 16379, 16380, 16381, 16382, 16383, 16384, 16385, 16386, 16387, 16388, 16389, 16390, 16391, 16392, 16393, 16394, 16395, 16396, 16397, 16398, 16399, 16400, 16401, 16402, 16403, 16404, 16405, 16406, 16407, 16408, 16409, 16410, 16411, 16412, 16413, 16414, 16415, 16416, 16417, 16418, 16419, 16420, 16421, 16422, 16423, 16424, 16425, 16426, 16427, 16428, 16429, 16430, 16431, 16432, 16433, 16434, 16435, 16436, 16437, 16438, 16439, 16440, 16441, 16442, 16443, 16444, 16445, 16446, 16447, 16448, 16449, 16450, 16451, 16452, 16453, 16454, 16455, 16456, 16457, 16458, 16459, 16460, 16461, 16462, 16463, 16464, 16465, 16466, 16467, 16468, 16469, 16470, 16471, 16472, 16473, 16474, 16475, 16476, 16477, 16478, 16479, 16480, 16481, 16482, 16483, 16484, 16485, 16486, 16487, 16488, 16489, 16490, 16491, 16492, 16493, 16494, 16495, 16496, 16497, 16498, 16499, 16500, 16501, 16502, 16503, 16504, 16505, 16506, 16507, 16508, 16509, 16510, 16511, 16512, 16513, 16514, 16515, 16516, 16517, 16518, 16519, 16520, 16521, 16522, 16523, 16524, 16525, 16526, 16527, 16528, 16529, 16530, 16531, 16532, 16533, 16534, 16535, 16536, 16537, 16538, 16539, 16540, 16541, 16542, 16543, 16544, 16545, 16546, 16547, 16548, 16549, 16550, 16551, 16552, 16553, 16554, 16555, 16556, 16557, 16558, 16559, 16560, 16561, 16562, 16563, 16564, 16565, 16566, 16567, 16568, 16569, 16570, 16571, 16572, 16573, 16574, 16575, 16576, 16577, 16578, 16579, 16580, 16581, 16582, 16583, 16584, 16585, 16586, 16587, 16588, 16589, 16590, 16591, 16592, 16593, 16594, 16595, 16596, 16597, 16598, 16599, 16600, 16601, 16602, 16603, 16604, 16605, 16606, 16607, 16608, 16609, 16610, 16611, 16612, 16613, 16614, 16615, 16616, 16617, 16618, 16619, 16620, 16621, 16622, 16623, 16624, 16625, 16626, 16627, 16628, 16629, 16630, 16631, 16632, 16633, 16634, 16635, 16636, 16637, 16638, 16639, 16640, 16641, 16642, 16643, 16644, 16645, 16646, 16647, 16648, 16649, 16650, 16651, 16652, 16653, 16654, 16655, 16656, 16657, 16658, 16659, 16660, 16661, 16662, 16663, 16664, 16665, 16666, 16667, 16668, 16669, 16670, 16671, 16672, 16673, 16674, 16675, 16676, 16677, 16678, 16679, 16680, 16681, 16682, 16683, 16684, 16685, 16686, 16687, 16688, 16689, 16690, 16691, 16692, 16693, 16694, 16695, 16696, 16697, 16698, 16699, 16700, 16701, 16702, 16703, 16704, 16705, 16706, 16707, 16708, 16709, 16710, 16711, 16712, 16713, 16714, 16715, 16716, 16717, 16718, 16719, 16720, 16721, 16722, 16723, 16724, 16725, 16726, 16727, 16728, 16729, 16730, 16731, 16732, 16733, 16734, 16735, 16736, 16737, 16738, 16739, 16740, 16741, 16742, 16743, 16744, 16745, 16746, 16747, 16748, 16749, 16750, 16751, 16752, 16753, 16754, 16755, 16756, 16757, 16758, 16759, 16760, 16761, 16762, 16763, 16764, 16765, 16766, 16767, 16768, 16769, 16770, 16771, 16772, 16773, 16774, 16775, 16776, 16777, 16778, 16779, 16780, 16781, 16782, 16783, 16784, 16785, 16786, 16787, 16788, 16789, 16790, 16791, 16792, 16793, 16794, 16795, 16796, 16797, 16798, 16799, 16800, 16801, 16802, 16803, 16804, 16805, 16806, 16807, 16808, 16809, 16810, 16811, 16812, 16813, 16814, 16815, 16816, 16817, 16818, 16819, 16820, 16821, 16822, 16823, 16824, 16825, 16826, 16827, 16828, 16829, 16830, 16831, 16832, 16833, 16834, 16835, 16836, 16837, 16838, 16839, 16840, 16841, 16842, 16843, 16844, 16845, 16846, 16847, 16848, 16849, 16850, 16851, 16852, 16853, 16854, 16855, 16856, 16857, 16858, 16859, 16860, 16861, 16862, 16863, 16864, 16865, 16866, 16867, 16868, 16869, 16870, 16871, 16872, 16873, 16874, 16875, 16876, 16877, 16878, 16879, 16880, 16881, 16882, 16883, 16884, 16885, 16886, 16887, 16888, 16889, 16890, 16891, 16892, 16893, 16894, 16895, 16896, 16897, 16898, 16899, 16900, 16901, 16902, 16903, 16904, 16905, 16906, 16907, 16908, 16909, 16910, 16911, 16912, 16913, 16914, 16915, 16916, 16917, 16918, 16919, 16920, 16921, 16922, 16923, 16924, 16925, 16926, 16927, 16928, 16929, 16930, 16931, 16932, 16933, 16934, 16935, 16936, 16937, 16938, 16939, 16940, 16941, 16942, 16943, 16944, 16945, 16946, 16947, 16948, 16949, 16950, 16951, 16952, 16953, 16954, 16955, 16956, 16957, 16958, 16959, 16960, 16961, 16962, 16963, 16964, 16965, 16966, 16967, 16968, 16969, 16970, 16971, 16972, 16973, 16974, 16975, 16976, 16977, 16978, 16979, 16980, 16981, 16982, 16983, 16984, 16985, 16986, 16987, 16988, 16989, 16990, 16991, 16992, 16993, 16994, 16995, 16996, 16997, 16998, 16999, 17000, 17001, 17002, 17003, 17004, 17005, 17006, 17007, 17008, 17009, 17010, 17011, 17012, 17013, 17014, 17015, 17016, 17017, 17018, 17019, 17020, 17021, 17022, 17023, 17024, 17025, 17026, 17027, 17028, 17029, 17030, 17031, 17032, 17033, 17034, 17035, 17036, 17037, 17038, 17039, 17040, 17041, 17042, 17043, 17044, 17045, 17046, 17047, 17048, 17049, 17050, 17051, 17052, 17053, 17054, 17055, 17056, 17057, 17058, 17059, 17060, 17061, 17062, 17063, 17064, 17065, 17066, 17067, 17068, 17069, 17070, 17071, 17072, 17073, 17074, 17075, 17076, 17077, 17078, 17079, 17080, 17081, 17082, 17083, 17084, 17085, 17086, 17087, 17088, 17089, 17090, 17091, 17092, 17093, 17094, 17095, 17096, 17097, 17098, 17099, 17100, 17101, 17102, 17103, 17104, 17105, 17106, 17107, 17108, 17109, 17110, 17111, 17112, 17113, 17114, 17115, 17116, 17117, 17118, 17119, 17120, 17121, 17122, 17123, 17124, 17125, 17126, 17127, 17128, 17129, 17130, 17131, 17132, 17133, 17134, 17135, 17136, 17137, 17138, 17139, 17140, 17141, 17142, 17143, 17144, 17145, 17146, 17147, 17148, 17149, 17150, 17151, 17152, 17153, 17154, 17155, 17156, 17157, 17158, 17159, 17160, 17161, 17162, 17163, 17164, 17165, 17166, 17167, 17168, 17169, 17170, 17171, 17172, 17173, 17174, 17175, 17176, 17177, 17178, 17179, 17180, 17181, 17182, 17183, 17184, 17185, 17186, 17187, 17188, 17189, 17190, 17191, 17192, 17193, 17194, 17195, 17196, 17197, 17198, 17199, 17200, 17201, 17202, 17203, 17204, 17205, 17206, 17207, 17208, 17209, 17210, 17211, 17212, 17213, 17214, 17215, 17216, 17217, 17218, 17219, 17220, 17221, 17222, 17223, 17224, 17225, 17226, 17227, 17228, 17229, 17230, 17231, 17232, 17233, 17234, 17235, 17236, 17237, 17238, 17239, 17240, 17241, 17242, 17243, 17244, 17245, 17246, 17247, 17248, 17249, 17250, 17251, 17252, 17253, 17254, 17255, 17256, 17257, 17258, 17259, 17260, 17261, 17262, 17263, 17264, 17265, 17266, 17267, 17268, 17269, 17270, 17271, 17272, 17273, 17274, 17275, 17276, 17277, 17278, 17279, 17280, 17281, 17282, 17283, 17284, 17285, 17286, 17287, 17288, 17289, 17290, 17291, 17292, 17293, 17294, 17295, 17296, 17297, 17298, 17299, 17300, 17301, 17302, 17303, 17304, 17305, 17306, 17307, 17308, 17309, 17310, 17311, 17312, 17313, 17314, 17315, 17316, 17317, 17318, 17319, 17320, 17321, 17322, 17323, 17324, 17325, 17326, 17327, 17328, 17329, 17330, 17331, 17332, 17333, 17334, 17335, 17336, 17337, 17338, 17339, 17340, 17341, 17342, 17343, 17344, 17345, 17346, 17347, 17348, 17349, 17350, 17351, 17352, 17353, 17354, 17355, 17356, 17357, 17358, 17359, 17360, 17361, 17362, 17363, 17364, 17365, 17366, 17367, 17368, 17369, 17370, 17371, 17372, 17373, 17374, 17375, 17376, 17377, 17378, 17379, 17380, 17381, 17382, 17383, 17384, 17385, 17386, 17387, 17388, 17389, 17390, 17391, 17392, 17393, 17394, 17395, 17396, 17397, 17398, 17399, 17400, 17401, 17402, 17403, 17404, 17405, 17406, 17407, 17408, 17409, 17410, 17411, 17412, 17413, 17414, 17415, 17416, 17417, 17418, 17419, 17420, 17421, 17422, 17423, 17424, 17425, 17426, 17427, 17428, 17429, 17430, 17431, 17432, 17433, 17434, 17435, 17436, 17437, 17438, 17439, 17440, 17441, 17442, 17443, 17444, 17445, 17446, 17447, 17448, 17449, 17450, 17451, 17452, 17453, 17454, 17455, 17456, 17457, 17458, 17459, 17460, 17461, 17462, 17463, 17464, 17465, 17466, 17467, 17468, 17469, 17470, 17471, 17472, 17473, 17474, 17475, 17476, 17477, 17478, 17479, 17480, 17481, 17482, 17483, 17484, 17485, 17486, 17487, 17488, 17489, 17490, 17491, 17492, 17493, 17494, 17495, 17496, 17497, 17498, 17499, 17500, 17501, 17502, 17503, 17504, 17505, 17506, 17507, 17508, 17509, 17510, 17511, 17512, 17513, 17514, 17515, 17516, 17517, 17518, 17519, 17520, 17521, 17522, 17523, 17524, 17525, 17526, 17527, 17528, 17529, 17530, 17531, 17532, 17533, 17534, 17535, 17536, 17537, 17538, 17539, 17540, 17541, 17542, 17543, 17544, 17545, 17546, 17547, 17548, 17549, 17550, 17551, 17552, 17553, 17554, 17555, 17556, 17557, 17558, 17559, 17560, 17561, 17562, 17563, 17564, 17565, 17566, 17567, 17568, 17569, 17570, 17571, 17572, 17573, 17574, 17575, 17576, 17577, 17578, 17579, 17580, 17581, 17582, 17583, 17584, 17585, 17586, 17587, 17588, 17589, 17590, 17591, 17592, 17593, 17594, 17595, 17596, 17597, 17598, 17599, 17600, 17601, 17602, 17603, 17604, 17605, 17606, 17607, 17608, 17609, 17610, 17611, 17612, 17613, 17614, 17615, 17616, 17617, 17618, 17619, 17620, 17621, 17622, 17623, 17624, 17625, 17626, 17627, 17628, 17629, 17630, 17631, 17632, 17633, 17634, 17635, 17636, 17637, 17638, 17639, 17640, 17641, 17642, 17643, 17644, 17645, 17646, 17647, 17648, 17649, 17650, 17651, 17652, 17653, 17654, 17655, 17656, 17657, 17658, 17659, 17660, 17661, 17662, 17663, 17664, 17665, 17666, 17667, 17668, 17669, 17670, 17671, 17672, 17673, 17674, 17675, 17676, 17677, 17678, 17679, 17680, 17681, 17682, 17683, 17684, 17685, 17686, 17687, 17688, 17689, 17690, 17691, 17692, 17693, 17694, 17695, 17696, 17697, 17698, 17699, 17700, 17701, 17702, 17703, 17704, 17705, 17706, 17707, 17708, 17709, 17710, 17711, 17712, 17713, 17714, 17715, 17716, 17717, 17718, 17719, 17720, 17721, 17722, 17723, 17724, 17725, 17726, 17727, 17728, 17729, 17730, 17731, 17732, 17733, 17734, 17735, 17736, 17737, 17738, 17739, 17740, 17741, 17742, 17743, 17744, 17745, 17746, 17747, 17748, 17749, 17750, 17751, 17752, 17753, 17754, 17755, 17756, 17757, 17758, 17759, 17760, 17761, 17762, 17763, 17764, 17765, 17766, 17767, 17768, 17769, 17770, 17771, 17772, 17773, 17774, 17775, 17776, 17777, 17778, 17779, 17780, 17781, 17782, 17783, 17784, 17785, 17786, 17787, 17788, 17789, 17790, 17791, 17792, 17793, 17794, 17795, 17796, 17797, 17798, 17799, 17800, 17801, 17802, 17803, 17804, 17805, 17806, 17807, 17808, 17809, 17810, 17811, 17812, 17813, 17814, 17815, 17816, 17817, 17818, 17819, 17820, 17821, 17822, 17823, 17824, 17825, 17826, 17827, 17828, 17829, 17830, 17831, 17832, 17833, 17834, 17835, 17836, 17837, 17838, 17839, 17840, 17841, 17842, 17843, 17844, 17845, 17846, 17847, 17848, 17849, 17850, 17851, 17852, 17853, 17854, 17855, 17856, 17857, 17858, 17859, 17860, 17861, 17862, 17863, 17864, 17865, 17866, 17867, 17868, 17869, 17870, 17871, 17872, 17873, 17874, 17875, 17876, 17877, 17878, 17879, 17880, 17881, 17882, 17883, 17884, 17885, 17886, 17887, 17888, 17889, 17890, 17891, 17892, 17893, 17894, 17895, 17896, 17897, 17898, 17899, 17900, 17901, 17902, 17903, 17904, 17905, 17906, 17907, 17908, 17909, 17910, 17911, 17912, 17913, 17914, 17915, 17916, 17917, 17918, 17919, 17920, 17921, 17922, 17923, 17924, 17925, 17926, 17927, 17928, 17929, 17930, 17931, 17932, 17933, 17934, 17935, 17936, 17937, 17938, 17939, 17940, 17941, 17942, 17943, 17944, 17945, 17946, 17947, 17948, 17949, 17950, 17951, 17952, 17953, 17954, 17955, 17956, 17957, 17958, 17959, 17960, 17961, 17962, 17963, 17964, 17965, 17966, 17967, 17968, 17969, 17970, 17971, 17972, 17973, 17974, 17975, 17976, 17977, 17978, 17979, 17980, 17981, 17982, 17983, 17984, 17985, 17986, 17987, 17988, 17989, 17990, 17991, 17992, 17993, 17994, 17995, 17996, 17997, 17998, 17999, 18000, 18001, 18002, 18003, 18004, 18005, 18006, 18007, 18008, 18009, 18010, 18011, 18012, 18013, 18014, 18015, 18016, 18017, 18018, 18019, 18020, 18021, 18022, 18023, 18024, 18025, 18026, 18027, 18028, 18029, 18030, 18031, 18032, 18033, 18034, 18035, 18036, 18037, 18038, 18039, 18040, 18041, 18042, 18043, 18044, 18045, 18046, 18047, 18048, 18049, 18050, 18051, 18052, 18053, 18054, 18055, 18056, 18057, 18058, 18059, 18060, 18061, 18062, 18063, 18064, 18065, 18066, 18067, 18068, 18069, 18070, 18071, 18072, 18073, 18074, 18075, 18076, 18077, 18078, 18079, 18080, 18081, 18082, 18083, 18084, 18085, 18086, 18087, 18088, 18089, 18090, 18091, 18092, 18093, 18094, 18095, 18096, 18097, 18098, 18099, 18100, 18101, 18102, 18103, 18104, 18105, 18106, 18107, 18108, 18109, 18110, 18111, 18112, 18113, 18114, 18115, 18116, 18117, 18118, 18119, 18120, 18121, 18122, 18123, 18124, 18125, 18126, 18127, 18128, 18129, 18130, 18131, 18132, 18133, 18134, 18135, 18136, 18137, 18138, 18139, 18140, 18141, 18142, 18143, 18144, 18145, 18146, 18147, 18148, 18149, 18150, 18151, 18152, 18153, 18154, 18155, 18156, 18157, 18158, 18159, 18160, 18161, 18162, 18163, 18164, 18165, 18166, 18167, 18168, 18169, 18170, 18171, 18172, 18173, 18174, 18175, 18176, 18177, 18178, 18179, 18180, 18181, 18182, 18183, 18184, 18185, 18186, 18187, 18188, 18189, 18190, 18191, 18192, 18193, 18194, 18195, 18196, 18197, 18198, 18199, 18200, 18201, 18202, 18203, 18204, 18205, 18206, 18207, 18208, 18209, 18210, 18211, 18212, 18213, 18214, 18215, 18216, 18217, 18218, 18219, 18220, 18221, 18222, 18223, 18224, 18225, 18226, 18227, 18228, 18229, 18230, 18231, 18232, 18233, 18234, 18235, 18236, 18237, 18238, 18239, 18240, 18241, 18242, 18243, 18244, 18245, 18246, 18247, 18248, 18249, 18250, 18251, 18252, 18253, 18254, 18255, 18256, 18257, 18258, 18259, 18260, 18261, 18262, 18263, 18264, 18265, 18266, 18267, 18268, 18269, 18270, 18271, 18272, 18273, 18274, 18275, 18276, 18277, 18278, 18279, 18280, 18281, 18282, 18283, 18284, 18285, 18286, 18287, 18288, 18289, 18290, 18291, 18292, 18293, 18294, 18295, 18296, 18297, 18298, 18299, 18300, 18301, 18302, 18303, 18304, 18305, 18306, 18307, 18308, 18309, 18310, 18311, 18312, 18313, 18314, 18315, 18316, 18317, 18318, 18319, 18320, 18321, 18322, 18323, 18324, 18325, 18326, 18327, 18328, 18329, 18330, 18331, 18332, 18333, 18334, 18335, 18336, 18337, 18338, 18339, 18340, 18341, 18342, 18343, 18344, 18345, 18346, 18347, 18348, 18349, 18350, 18351, 18352, 18353, 18354, 18355, 18356, 18357, 18358, 18359, 18360, 18361, 18362, 18363, 18364, 18365, 18366, 18367, 18368, 18369, 18370, 18371, 18372, 18373, 18374, 18375, 18376, 18377, 18378, 18379, 18380, 18381, 18382, 18383, 18384, 18385, 18386, 18387, 18388, 18389, 18390, 18391, 18392, 18393, 18394, 18395, 18396, 18397, 18398, 18399, 18400, 18401, 18402, 18403, 18404, 18405, 18406, 18407, 18408, 18409, 18410, 18411, 18412, 18413, 18414, 18415, 18416, 18417, 18418, 18419, 18420, 18421, 18422, 18423, 18424, 18425, 18426, 18427, 18428, 18429, 18430, 18431, 18432, 18433, 18434, 18435, 18436, 18437, 18438, 18439, 18440, 18441, 18442, 18443, 18444, 18445, 18446, 18447, 18448, 18449, 18450, 18451, 18452, 18453, 18454, 18455, 18456, 18457, 18458, 18459, 18460, 18461, 18462, 18463, 18464, 18465, 18466, 18467, 18468, 18469, 18470, 18471, 18472, 18473, 18474, 18475, 18476, 18477, 18478, 18479, 18480, 18481, 18482, 18483, 18484, 18485, 18486, 18487, 18488, 18489, 18490, 18491, 18492, 18493, 18494, 18495, 18496, 18497, 18498, 18499, 18500, 18501, 18502, 18503, 18504, 18505, 18506, 18507, 18508, 18509, 18510, 18511, 18512, 18513, 18514, 18515, 18516, 18517, 18518, 18519, 18520, 18521, 18522, 18523, 18524, 18525, 18526, 18527, 18528, 18529, 18530, 18531, 18532, 18533, 18534, 18535, 18536, 18537, 18538, 18539, 18540, 18541, 18542, 18543, 18544, 18545, 18546, 18547, 18548, 18549, 18550, 18551, 18552, 18553, 18554, 18555, 18556, 18557, 18558, 18559, 18560, 18561, 18562, 18563, 18564, 18565, 18566, 18567, 18568, 18569, 18570, 18571, 18572, 18573, 18574, 18575, 18576, 18577, 18578, 18579, 18580, 18581, 18582, 18583, 18584, 18585, 18586, 18587, 18588, 18589, 18590, 18591, 18592, 18593, 18594, 18595, 18596, 18597, 18598, 18599, 18600, 18601, 18602, 18603, 18604, 18605, 18606, 18607, 18608, 18609, 18610, 18611, 18612, 18613, 18614, 18615, 18616, 18617, 18618, 18619, 18620, 18621, 18622, 18623, 18624, 18625, 18626, 18627, 18628, 18629, 18630, 18631, 18632, 18633, 18634, 18635, 18636, 18637, 18638, 18639, 18640, 18641, 18642, 18643, 18644, 18645, 18646, 18647, 18648, 18649, 18650, 18651, 18652, 18653, 18654, 18655, 18656, 18657, 18658, 18659, 18660, 18661, 18662, 18663, 18664, 18665, 18666, 18667, 18668, 18669, 18670, 18671, 18672, 18673, 18674, 18675, 18676, 18677, 18678, 18679, 18680, 18681, 18682, 18683, 18684, 18685, 18686, 18687, 18688, 18689, 18690, 18691, 18692, 18693, 18694, 18695, 18696, 18697, 18698, 18699, 18700, 18701, 18702, 18703, 18704, 18705, 18706, 18707, 18708, 18709, 18710, 18711, 18712, 18713, 18714, 18715, 18716, 18717, 18718, 18719, 18720, 18721, 18722, 18723, 18724, 18725, 18726, 18727, 18728, 18729, 18730, 18731, 18732, 18733, 18734, 18735, 18736, 18737, 18738, 18739, 18740, 18741, 18742, 18743, 18744, 18745, 18746, 18747, 18748, 18749, 18750, 18751, 18752, 18753, 18754, 18755, 18756, 18757, 18758, 18759, 18760, 18761, 18762, 18763, 18764, 18765, 18766, 18767, 18768, 18769, 18770, 18771, 18772, 18773, 18774, 18775, 18776, 18777, 18778, 18779, 18780, 18781, 18782, 18783, 18784, 18785, 18786, 18787, 18788, 18789, 18790, 18791, 18792, 18793, 18794, 18795, 18796, 18797, 18798, 18799, 18800, 18801, 18802, 18803, 18804, 18805, 18806, 18807, 18808, 18809, 18810, 18811, 18812, 18813, 18814, 18815, 18816, 18817, 18818, 18819, 18820, 18821, 18822, 18823, 18824, 18825, 18826, 18827, 18828, 18829, 18830, 18831, 18832, 18833, 18834, 18835, 18836, 18837, 18838, 18839, 18840, 18841, 18842, 18843, 18844, 18845, 18846, 18847, 18848, 18849, 18850, 18851, 18852, 18853, 18854, 18855, 18856, 18857, 18858, 18859, 18860, 18861, 18862, 18863, 18864, 18865, 18866, 18867, 18868, 18869, 18870, 18871, 18872, 18873, 18874, 18875, 18876, 18877, 18878, 18879, 18880, 18881, 18882, 18883, 18884, 18885, 18886, 18887, 18888, 18889, 18890, 18891, 18892, 18893, 18894, 18895, 18896, 18897, 18898, 18899, 18900, 18901, 18902, 18903, 18904, 18905, 18906, 18907, 18908, 18909, 18910, 18911, 18912, 18913, 18914, 18915, 18916, 18917, 18918, 18919, 18920, 18921, 18922, 18923, 18924, 18925, 18926, 18927, 18928, 18929, 18930, 18931, 18932, 18933, 18934, 18935, 18936, 18937, 18938, 18939, 18940, 18941, 18942, 18943, 18944, 18945, 18946, 18947, 18948, 18949, 18950, 18951, 18952, 18953, 18954, 18955, 18956, 18957, 18958, 18959, 18960, 18961, 18962, 18963, 18964, 18965, 18966, 18967, 18968, 18969, 18970, 18971, 18972, 18973, 18974, 18975, 18976, 18977, 18978, 18979, 18980, 18981, 18982, 18983, 18984, 18985, 18986, 18987, 18988, 18989, 18990, 18991, 18992, 18993, 18994, 18995, 18996, 18997, 18998, 18999, 19000, 19001, 19002, 19003, 19004, 19005, 19006, 19007, 19008, 19009, 19010, 19011, 19012, 19013, 19014, 19015, 19016, 19017, 19018, 19019, 19020, 19021, 19022, 19023, 19024, 19025, 19026, 19027, 19028, 19029, 19030, 19031, 19032, 19033, 19034, 19035, 19036, 19037, 19038, 19039, 19040, 19041, 19042, 19043, 19044, 19045, 19046, 19047, 19048, 19049, 19050, 19051, 19052, 19053, 19054, 19055, 19056, 19057, 19058, 19059, 19060, 19061, 19062, 19063, 19064, 19065, 19066, 19067, 19068, 19069, 19070, 19071, 19072, 19073, 19074, 19075, 19076, 19077, 19078, 19079, 19080, 19081, 19082, 19083, 19084, 19085, 19086, 19087, 19088, 19089, 19090, 19091, 19092, 19093, 19094, 19095, 19096, 19097, 19098, 19099, 19100, 19101, 19102, 19103, 19104, 19105, 19106, 19107, 19108, 19109, 19110, 19111, 19112, 19113, 19114, 19115, 19116, 19117, 19118, 19119, 19120, 19121, 19122, 19123, 19124, 19125, 19126, 19127, 19128, 19129, 19130, 19131, 19132, 19133, 19134, 19135, 19136, 19137, 19138, 19139, 19140, 19141, 19142, 19143, 19144, 19145, 19146, 19147, 19148, 19149, 19150, 19151, 19152, 19153, 19154, 19155, 19156, 19157, 19158, 19159, 19160, 19161, 19162, 19163, 19164, 19165, 19166, 19167, 19168, 19169, 19170, 19171, 19172, 19173, 19174, 19175, 19176, 19177, 19178, 19179, 19180, 19181, 19182, 19183, 19184, 19185, 19186, 19187, 19188, 19189, 19190, 19191, 19192, 19193, 19194, 19195, 19196, 19197, 19198, 19199, 19200, 19201, 19202, 19203, 19204, 19205, 19206, 19207, 19208, 19209, 19210, 19211, 19212, 19213, 19214, 19215, 19216, 19217, 19218, 19219, 19220, 19221, 19222, 19223, 19224, 19225, 19226, 19227, 19228, 19229, 19230, 19231, 19232, 19233, 19234, 19235, 19236, 19237, 19238, 19239, 19240, 19241, 19242, 19243, 19244, 19245, 19246, 19247, 19248, 19249, 19250, 19251, 19252, 19253, 19254, 19255, 19256, 19257, 19258, 19259, 19260, 19261, 19262, 19263, 19264, 19265, 19266, 19267, 19268, 19269, 19270, 19271, 19272, 19273, 19274, 19275, 19276, 19277, 19278, 19279, 19280, 19281, 19282, 19283, 19284, 19285, 19286, 19287, 19288, 19289, 19290, 19291, 19292, 19293, 19294, 19295, 19296, 19297, 19298, 19299, 19300, 19301, 19302, 19303, 19304, 19305, 19306, 19307, 19308, 19309, 19310, 19311, 19312, 19313, 19314, 19315, 19316, 19317, 19318, 19319, 19320, 19321, 19322, 19323, 19324, 19325, 19326, 19327, 19328, 19329, 19330, 19331, 19332, 19333, 19334, 19335, 19336, 19337, 19338, 19339, 19340, 19341, 19342, 19343, 19344, 19345, 19346, 19347, 19348, 19349, 19350, 19351, 19352, 19353, 19354, 19355, 19356, 19357, 19358, 19359, 19360, 19361, 19362, 19363, 19364, 19365, 19366, 19367, 19368, 19369, 19370, 19371, 19372, 19373, 19374, 19375, 19376, 19377, 19378, 19379, 19380, 19381, 19382, 19383, 19384, 19385, 19386, 19387, 19388, 19389, 19390, 19391, 19392, 19393, 19394, 19395, 19396, 19397, 19398, 19399, 19400, 19401, 19402, 19403, 19404, 19405, 19406, 19407, 19408, 19409, 19410, 19411, 19412, 19413, 19414, 19415, 19416, 19417, 19418, 19419, 19420, 19421, 19422, 19423, 19424, 19425, 19426, 19427, 19428, 19429, 19430, 19431, 19432, 19433, 19434, 19435, 19436, 19437, 19438, 19439, 19440, 19441, 19442, 19443, 19444, 19445, 19446, 19447, 19448, 19449, 19450, 19451, 19452, 19453, 19454, 19455, 19456, 19457, 19458, 19459, 19460, 19461, 19462, 19463, 19464, 19465, 19466, 19467, 19468, 19469, 19470, 19471, 19472, 19473, 19474, 19475, 19476, 19477, 19478, 19479, 19480, 19481, 19482, 19483, 19484, 19485, 19486, 19487, 19488, 19489, 19490, 19491, 19492, 19493, 19494, 19495, 19496, 19497, 19498, 19499, 19500, 19501, 19502, 19503, 19504, 19505, 19506, 19507, 19508, 19509, 19510, 19511, 19512, 19513, 19514, 19515, 19516, 19517, 19518, 19519, 19520, 19521, 19522, 19523, 19524, 19525, 19526, 19527, 19528, 19529, 19530, 19531, 19532, 19533, 19534, 19535, 19536, 19537, 19538, 19539, 19540, 19541, 19542, 19543, 19544, 19545, 19546, 19547, 19548, 19549, 19550, 19551, 19552, 19553, 19554, 19555, 19556, 19557, 19558, 19559, 19560, 19561, 19562, 19563, 19564, 19565, 19566, 19567, 19568, 19569, 19570, 19571, 19572, 19573, 19574, 19575, 19576, 19577, 19578, 19579, 19580, 19581, 19582, 19583, 19584, 19585, 19586, 19587, 19588, 19589, 19590, 19591, 19592, 19593, 19594, 19595, 19596, 19597, 19598, 19599, 19600, 19601, 19602, 19603, 19604, 19605, 19606, 19607, 19608, 19609, 19610, 19611, 19612, 19613, 19614, 19615, 19616, 19617, 19618, 19619, 19620, 19621, 19622, 19623, 19624, 19625, 19626, 19627, 19628, 19629, 19630, 19631, 19632, 19633, 19634, 19635, 19636, 19637, 19638, 19639, 19640, 19641, 19642, 19643, 19644, 19645, 19646, 19647, 19648, 19649, 19650, 19651, 19652, 19653, 19654, 19655, 19656, 19657, 19658, 19659, 19660, 19661, 19662, 19663, 19664, 19665, 19666, 19667, 19668, 19669, 19670, 19671, 19672, 19673, 19674, 19675, 19676, 19677, 19678, 19679, 19680, 19681, 19682, 19683, 19684, 19685, 19686, 19687, 19688, 19689, 19690, 19691, 19692, 19693, 19694, 19695, 19696, 19697, 19698, 19699, 19700, 19701, 19702, 19703, 19704, 19705, 19706, 19707, 19708, 19709, 19710, 19711, 19712, 19713, 19714, 19715, 19716, 19717, 19718, 19719, 19720, 19721, 19722, 19723, 19724, 19725, 19726, 19727, 19728, 19729, 19730, 19731, 19732, 19733, 19734, 19735, 19736, 19737, 19738, 19739, 19740, 19741, 19742, 19743, 19744, 19745, 19746, 19747, 19748, 19749, 19750, 19751, 19752, 19753, 19754, 19755, 19756, 19757, 19758, 19759, 19760, 19761, 19762, 19763, 19764, 19765, 19766, 19767, 19768, 19769, 19770, 19771, 19772, 19773, 19774, 19775, 19776, 19777, 19778, 19779, 19780, 19781, 19782, 19783, 19784, 19785, 19786, 19787, 19788, 19789, 19790, 19791, 19792, 19793, 19794, 19795, 19796, 19797, 19798, 19799, 19800, 19801, 19802, 19803, 19804, 19805, 19806, 19807, 19808, 19809, 19810, 19811, 19812, 19813, 19814, 19815, 19816, 19817, 19818, 19819, 19820, 19821, 19822, 19823, 19824, 19825, 19826, 19827, 19828, 19829, 19830, 19831, 19832, 19833, 19834, 19835, 19836, 19837, 19838, 19839, 19840, 19841, 19842, 19843, 19844, 19845, 19846, 19847, 19848, 19849, 19850, 19851, 19852, 19853, 19854, 19855, 19856, 19857, 19858, 19859, 19860, 19861, 19862, 19863, 19864, 19865, 19866, 19867, 19868, 19869, 19870, 19871, 19872, 19873, 19874, 19875, 19876, 19877, 19878, 19879, 19880, 19881, 19882, 19883, 19884, 19885, 19886, 19887, 19888, 19889, 19890, 19891, 19892, 19893, 19894, 19895, 19896, 19897, 19898, 19899, 19900, 19901, 19902, 19903, 19904, 19905, 19906, 19907, 19908, 19909, 19910, 19911, 19912, 19913, 19914, 19915, 19916, 19917, 19918, 19919, 19920, 19921, 19922, 19923, 19924, 19925, 19926, 19927, 19928, 19929, 19930, 19931, 19932, 19933, 19934, 19935, 19936, 19937, 19938, 19939, 19940, 19941, 19942, 19943, 19944, 19945, 19946, 19947, 19948, 19949, 19950, 19951, 19952, 19953, 19954, 19955, 19956, 19957, 19958, 19959, 19960, 19961, 19962, 19963, 19964, 19965, 19966, 19967, 19968, 19969, 19970, 19971, 19972, 19973, 19974, 19975, 19976, 19977, 19978, 19979, 19980, 19981, 19982, 19983, 19984, 19985, 19986, 19987, 19988, 19989, 19990, 19991, 19992, 19993, 19994, 19995, 19996, 19997, 19998, 19999, 20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20034, 20035, 20036, 20037, 20038, 20039, 20040, 20041, 20042, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20054, 20055, 20056, 20057, 20058, 20059, 20060, 20061, 20062, 20063, 20064, 20065, 20066, 20067, 20068, 20069, 20070, 20071, 20072, 20073, 20074, 20075, 20076, 20077, 20078, 20079, 20080, 20081, 20082, 20083, 20084, 20085, 20086, 20087, 20088, 20089, 20090, 20091, 20092, 20093, 20094, 20095, 20096, 20097, 20098, 20099, 20100, 20101, 20102, 20103, 20104, 20105, 20106, 20107, 20108, 20109, 20110, 20111, 20112, 20113, 20114, 20115, 20116, 20117, 20118, 20119, 20120, 20121, 20122, 20123, 20124, 20125, 20126, 20127, 20128, 20129, 20130, 20131, 20132, 20133, 20134, 20135, 20136, 20137, 20138, 20139, 20140, 20141, 20142, 20143, 20144, 20145, 20146, 20147, 20148, 20149, 20150, 20151, 20152, 20153, 20154, 20155, 20156, 20157, 20158, 20159, 20160, 20161, 20162, 20163, 20164, 20165, 20166, 20167, 20168, 20169, 20170, 20171, 20172, 20173, 20174, 20175, 20176, 20177, 20178, 20179, 20180, 20181, 20182, 20183, 20184, 20185, 20186, 20187, 20188, 20189, 20190, 20191, 20192, 20193, 20194, 20195, 20196, 20197, 20198, 20199, 20200, 20201, 20202, 20203, 20204, 20205, 20206, 20207, 20208, 20209, 20210, 20211, 20212, 20213, 20214, 20215, 20216, 20217, 20218, 20219, 20220, 20221, 20222, 20223, 20224, 20225, 20226, 20227, 20228, 20229, 20230, 20231, 20232, 20233, 20234, 20235, 20236, 20237, 20238, 20239, 20240, 20241, 20242, 20243, 20244, 20245, 20246, 20247, 20248, 20249, 20250, 20251, 20252, 20253, 20254, 20255, 20256, 20257, 20258, 20259, 20260, 20261, 20262, 20263, 20264, 20265, 20266, 20267, 20268, 20269, 20270, 20271, 20272, 20273, 20274, 20275, 20276, 20277, 20278, 20279, 20280, 20281, 20282, 20283, 20284, 20285, 20286, 20287, 20288, 20289, 20290, 20291, 20292, 20293, 20294, 20295, 20296, 20297, 20298, 20299, 20300, 20301, 20302, 20303, 20304, 20305, 20306, 20307, 20308, 20309, 20310, 20311, 20312, 20313, 20314, 20315, 20316, 20317, 20318, 20319, 20320, 20321, 20322, 20323, 20324, 20325, 20326, 20327, 20328, 20329, 20330, 20331, 20332, 20333, 20334, 20335, 20336, 20337, 20338, 20339, 20340, 20341, 20342, 20343, 20344, 20345, 20346, 20347, 20348, 20349, 20350, 20351, 20352, 20353, 20354, 20355, 20356, 20357, 20358, 20359, 20360, 20361, 20362, 20363, 20364, 20365, 20366, 20367, 20368, 20369, 20370, 20371, 20372, 20373, 20374, 20375, 20376, 20377, 20378, 20379, 20380, 20381, 20382, 20383, 20384, 20385, 20386, 20387, 20388, 20389, 20390, 20391, 20392, 20393, 20394, 20395, 20396, 20397, 20398, 20399, 20400, 20401, 20402, 20403, 20404, 20405, 20406, 20407, 20408, 20409, 20410, 20411, 20412, 20413, 20414, 20415, 20416, 20417, 20418, 20419, 20420, 20421, 20422, 20423, 20424, 20425, 20426, 20427, 20428, 20429, 20430, 20431, 20432, 20433, 20434, 20435, 20436, 20437, 20438, 20439, 20440, 20441, 20442, 20443, 20444, 20445, 20446, 20447, 20448, 20449, 20450, 20451, 20452, 20453, 20454, 20455, 20456, 20457, 20458, 20459, 20460, 20461, 20462, 20463, 20464, 20465, 20466, 20467, 20468, 20469, 20470, 20471, 20472, 20473, 20474, 20475, 20476, 20477, 20478, 20479, 20480, 20481, 20482, 20483, 20484, 20485, 20486, 20487, 20488, 20489, 20490, 20491, 20492, 20493, 20494, 20495, 20496, 20497, 20498, 20499, 20500, 20501, 20502, 20503, 20504, 20505, 20506, 20507, 20508, 20509, 20510, 20511, 20512, 20513, 20514, 20515, 20516, 20517, 20518, 20519, 20520, 20521, 20522, 20523, 20524, 20525, 20526, 20527, 20528, 20529, 20530, 20531, 20532, 20533, 20534, 20535, 20536, 20537, 20538, 20539, 20540, 20541, 20542, 20543, 20544, 20545, 20546, 20547, 20548, 20549, 20550, 20551, 20552, 20553, 20554, 20555, 20556, 20557, 20558, 20559, 20560, 20561, 20562, 20563, 20564, 20565, 20566, 20567, 20568, 20569, 20570, 20571, 20572, 20573, 20574, 20575, 20576, 20577, 20578, 20579, 20580, 20581, 20582, 20583, 20584, 20585, 20586, 20587, 20588, 20589, 20590, 20591, 20592, 20593, 20594, 20595, 20596, 20597, 20598, 20599, 20600, 20601, 20602, 20603, 20604, 20605, 20606, 20607, 20608, 20609, 20610, 20611, 20612, 20613, 20614, 20615, 20616, 20617, 20618, 20619, 20620, 20621, 20622, 20623, 20624, 20625, 20626, 20627, 20628, 20629, 20630, 20631, 20632, 20633, 20634, 20635, 20636, 20637, 20638, 20639, 20640, 20641, 20642, 20643, 20644, 20645, 20646, 20647, 20648, 20649, 20650, 20651, 20652, 20653, 20654, 20655, 20656, 20657, 20658, 20659, 20660, 20661, 20662, 20663, 20664, 20665, 20666, 20667, 20668, 20669, 20670, 20671, 20672, 20673, 20674, 20675, 20676, 20677, 20678, 20679, 20680, 20681, 20682, 20683, 20684, 20685, 20686, 20687, 20688, 20689, 20690, 20691, 20692, 20693, 20694, 20695, 20696, 20697, 20698, 20699, 20700, 20701, 20702, 20703, 20704, 20705, 20706, 20707, 20708, 20709, 20710, 20711, 20712, 20713, 20714, 20715, 20716, 20717, 20718, 20719, 20720, 20721, 20722, 20723, 20724, 20725, 20726, 20727, 20728, 20729, 20730, 20731, 20732, 20733, 20734, 20735, 20736, 20737, 20738, 20739, 20740, 20741, 20742, 20743, 20744, 20745, 20746, 20747, 20748, 20749, 20750, 20751, 20752, 20753, 20754, 20755, 20756, 20757, 20758, 20759, 20760, 20761, 20762, 20763, 20764, 20765, 20766, 20767, 20768, 20769, 20770, 20771, 20772, 20773, 20774, 20775, 20776, 20777, 20778, 20779, 20780, 20781, 20782, 20783, 20784, 20785, 20786, 20787, 20788, 20789, 20790, 20791, 20792, 20793, 20794, 20795, 20796, 20797, 20798, 20799, 20800, 20801, 20802, 20803, 20804, 20805, 20806, 20807, 20808, 20809, 20810, 20811, 20812, 20813, 20814, 20815, 20816, 20817, 20818, 20819, 20820, 20821, 20822, 20823, 20824, 20825, 20826, 20827, 20828, 20829, 20830, 20831, 20832, 20833, 20834, 20835, 20836, 20837, 20838, 20839, 20840, 20841, 20842, 20843, 20844, 20845, 20846, 20847, 20848, 20849, 20850, 20851, 20852, 20853, 20854, 20855, 20856, 20857, 20858, 20859, 20860, 20861, 20862, 20863, 20864, 20865, 20866, 20867, 20868, 20869, 20870, 20871, 20872, 20873, 20874, 20875, 20876, 20877, 20878, 20879, 20880, 20881, 20882, 20883, 20884, 20885, 20886, 20887, 20888, 20889, 20890, 20891, 20892, 20893, 20894, 20895, 20896, 20897, 20898, 20899, 20900, 20901, 20902, 20903, 20904, 20905, 20906, 20907, 20908, 20909, 20910, 20911, 20912, 20913, 20914, 20915, 20916, 20917, 20918, 20919, 20920, 20921, 20922, 20923, 20924, 20925, 20926, 20927, 20928, 20929, 20930, 20931, 20932, 20933, 20934, 20935, 20936, 20937, 20938, 20939, 20940, 20941, 20942, 20943, 20944, 20945, 20946, 20947, 20948, 20949, 20950, 20951, 20952, 20953, 20954, 20955, 20956, 20957, 20958, 20959, 20960, 20961, 20962, 20963, 20964, 20965, 20966, 20967, 20968, 20969, 20970, 20971, 20972, 20973, 20974, 20975, 20976, 20977, 20978, 20979, 20980, 20981, 20982, 20983, 20984, 20985, 20986, 20987, 20988, 20989, 20990, 20991, 20992, 20993, 20994, 20995, 20996, 20997, 20998, 20999, 21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21032, 21033, 21034, 21035, 21036, 21037, 21038, 21039, 21040, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21051, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 21059, 21060, 21061, 21062, 21063, 21064, 21065, 21066, 21067, 21068, 21069, 21070, 21071, 21072, 21073, 21074, 21075, 21076, 21077, 21078, 21079, 21080, 21081, 21082, 21083, 21084, 21085, 21086, 21087, 21088, 21089, 21090, 21091, 21092, 21093, 21094, 21095, 21096, 21097, 21098, 21099, 21100, 21101, 21102, 21103, 21104, 21105, 21106, 21107, 21108, 21109, 21110, 21111, 21112, 21113, 21114, 21115, 21116, 21117, 21118, 21119, 21120, 21121, 21122, 21123, 21124, 21125, 21126, 21127, 21128, 21129, 21130, 21131, 21132, 21133, 21134, 21135, 21136, 21137, 21138, 21139, 21140, 21141, 21142, 21143, 21144, 21145, 21146, 21147, 21148, 21149, 21150, 21151, 21152, 21153, 21154, 21155, 21156, 21157, 21158, 21159, 21160, 21161, 21162, 21163, 21164, 21165, 21166, 21167, 21168, 21169, 21170, 21171, 21172, 21173, 21174, 21175, 21176, 21177, 21178, 21179, 21180, 21181, 21182, 21183, 21184, 21185, 21186, 21187, 21188, 21189, 21190, 21191, 21192, 21193, 21194, 21195, 21196, 21197, 21198, 21199, 21200, 21201, 21202, 21203, 21204, 21205, 21206, 21207, 21208, 21209, 21210, 21211, 21212, 21213, 21214, 21215, 21216, 21217, 21218, 21219, 21220, 21221, 21222, 21223, 21224, 21225, 21226, 21227, 21228, 21229, 21230, 21231, 21232, 21233, 21234, 21235, 21236, 21237, 21238, 21239, 21240, 21241, 21242, 21243, 21244, 21245, 21246, 21247, 21248, 21249, 21250, 21251, 21252, 21253, 21254, 21255, 21256, 21257, 21258, 21259, 21260, 21261, 21262, 21263, 21264, 21265, 21266, 21267, 21268, 21269, 21270, 21271, 21272, 21273, 21274, 21275, 21276, 21277, 21278, 21279, 21280, 21281, 21282, 21283, 21284, 21285, 21286, 21287, 21288, 21289, 21290, 21291, 21292, 21293, 21294, 21295, 21296, 21297, 21298, 21299, 21300, 21301, 21302, 21303, 21304, 21305, 21306, 21307, 21308, 21309, 21310, 21311, 21312, 21313, 21314, 21315, 21316, 21317, 21318, 21319, 21320, 21321, 21322, 21323, 21324, 21325, 21326, 21327, 21328, 21329, 21330, 21331, 21332, 21333, 21334, 21335, 21336, 21337, 21338, 21339, 21340, 21341, 21342, 21343, 21344, 21345, 21346, 21347, 21348, 21349, 21350, 21351, 21352, 21353, 21354, 21355, 21356, 21357, 21358, 21359, 21360, 21361, 21362, 21363, 21364, 21365, 21366, 21367, 21368, 21369, 21370, 21371, 21372, 21373, 21374, 21375, 21376, 21377, 21378, 21379, 21380, 21381, 21382, 21383, 21384, 21385, 21386, 21387, 21388, 21389, 21390, 21391, 21392, 21393, 21394, 21395, 21396, 21397, 21398, 21399, 21400, 21401, 21402, 21403, 21404, 21405, 21406, 21407, 21408, 21409, 21410, 21411, 21412, 21413, 21414, 21415, 21416, 21417, 21418, 21419, 21420, 21421, 21422, 21423, 21424, 21425, 21426, 21427, 21428, 21429, 21430, 21431, 21432, 21433, 21434, 21435, 21436, 21437, 21438, 21439, 21440, 21441, 21442, 21443, 21444, 21445, 21446, 21447, 21448, 21449, 21450, 21451, 21452, 21453, 21454, 21455, 21456, 21457, 21458, 21459, 21460, 21461, 21462, 21463, 21464, 21465, 21466, 21467, 21468, 21469, 21470, 21471, 21472, 21473, 21474, 21475, 21476, 21477, 21478, 21479, 21480, 21481, 21482, 21483, 21484, 21485, 21486, 21487, 21488, 21489, 21490, 21491, 21492, 21493, 21494, 21495, 21496, 21497, 21498, 21499, 21500, 21501, 21502, 21503, 21504, 21505, 21506, 21507, 21508, 21509, 21510, 21511, 21512, 21513, 21514, 21515, 21516, 21517, 21518, 21519, 21520, 21521, 21522, 21523, 21524, 21525, 21526, 21527, 21528, 21529, 21530, 21531, 21532, 21533, 21534, 21535, 21536, 21537, 21538, 21539, 21540, 21541, 21542, 21543, 21544, 21545, 21546, 21547, 21548, 21549, 21550, 21551, 21552, 21553, 21554, 21555, 21556, 21557, 21558, 21559, 21560, 21561, 21562, 21563, 21564, 21565, 21566, 21567, 21568, 21569, 21570, 21571, 21572, 21573, 21574, 21575, 21576, 21577, 21578, 21579, 21580, 21581, 21582, 21583, 21584, 21585, 21586, 21587, 21588, 21589, 21590, 21591, 21592, 21593, 21594, 21595, 21596, 21597, 21598, 21599, 21600, 21601, 21602, 21603, 21604, 21605, 21606, 21607, 21608, 21609, 21610, 21611, 21612, 21613, 21614, 21615, 21616, 21617, 21618, 21619, 21620, 21621, 21622, 21623, 21624, 21625, 21626, 21627, 21628, 21629, 21630, 21631, 21632, 21633, 21634, 21635, 21636, 21637, 21638, 21639, 21640, 21641, 21642, 21643, 21644, 21645, 21646, 21647, 21648, 21649, 21650, 21651, 21652, 21653, 21654, 21655, 21656, 21657, 21658, 21659, 21660, 21661, 21662, 21663, 21664, 21665, 21666, 21667, 21668, 21669, 21670, 21671, 21672, 21673, 21674, 21675, 21676, 21677, 21678, 21679, 21680, 21681, 21682, 21683, 21684, 21685, 21686, 21687, 21688, 21689, 21690, 21691, 21692, 21693, 21694, 21695, 21696, 21697, 21698, 21699, 21700, 21701, 21702, 21703, 21704, 21705, 21706, 21707, 21708, 21709, 21710, 21711, 21712, 21713, 21714, 21715, 21716, 21717, 21718, 21719, 21720, 21721, 21722, 21723, 21724, 21725, 21726, 21727, 21728, 21729, 21730, 21731, 21732, 21733, 21734, 21735, 21736, 21737, 21738, 21739, 21740, 21741, 21742, 21743, 21744, 21745, 21746, 21747, 21748, 21749, 21750, 21751, 21752, 21753, 21754, 21755, 21756, 21757, 21758, 21759, 21760, 21761, 21762, 21763, 21764, 21765, 21766, 21767, 21768, 21769, 21770, 21771, 21772, 21773, 21774, 21775, 21776, 21777, 21778, 21779, 21780, 21781, 21782, 21783, 21784, 21785, 21786, 21787, 21788, 21789, 21790, 21791, 21792, 21793, 21794, 21795, 21796, 21797, 21798, 21799, 21800, 21801, 21802, 21803, 21804, 21805, 21806, 21807, 21808, 21809, 21810, 21811, 21812, 21813, 21814, 21815, 21816, 21817, 21818, 21819, 21820, 21821, 21822, 21823, 21824, 21825, 21826, 21827, 21828, 21829, 21830, 21831, 21832, 21833, 21834, 21835, 21836, 21837, 21838, 21839, 21840, 21841, 21842, 21843, 21844, 21845, 21846, 21847, 21848, 21849, 21850, 21851, 21852, 21853, 21854, 21855, 21856, 21857, 21858, 21859, 21860, 21861, 21862, 21863, 21864, 21865, 21866, 21867, 21868, 21869, 21870, 21871, 21872, 21873, 21874, 21875, 21876, 21877, 21878, 21879, 21880, 21881, 21882, 21883, 21884, 21885, 21886, 21887, 21888, 21889, 21890, 21891, 21892, 21893, 21894, 21895, 21896, 21897, 21898, 21899, 21900, 21901, 21902, 21903, 21904, 21905, 21906, 21907, 21908, 21909, 21910, 21911, 21912, 21913, 21914, 21915, 21916, 21917, 21918, 21919, 21920, 21921, 21922, 21923, 21924, 21925, 21926, 21927, 21928, 21929, 21930, 21931, 21932, 21933, 21934, 21935, 21936, 21937, 21938, 21939, 21940, 21941, 21942, 21943, 21944, 21945, 21946, 21947, 21948, 21949, 21950, 21951, 21952, 21953, 21954, 21955, 21956, 21957, 21958, 21959, 21960, 21961, 21962, 21963, 21964, 21965, 21966, 21967, 21968, 21969, 21970, 21971, 21972, 21973, 21974, 21975, 21976, 21977, 21978, 21979, 21980, 21981, 21982, 21983, 21984, 21985, 21986, 21987, 21988, 21989, 21990, 21991, 21992, 21993, 21994, 21995, 21996, 21997, 21998, 21999, 22000, 22001, 22002, 22003, 22004, 22005, 22006, 22007, 22008, 22009, 22010, 22011, 22012, 22013, 22014, 22015, 22016, 22017, 22018, 22019, 22020, 22021, 22022, 22023, 22024, 22025, 22026, 22027, 22028, 22029, 22030, 22031, 22032, 22033, 22034, 22035, 22036, 22037, 22038, 22039, 22040, 22041, 22042, 22043, 22044, 22045, 22046, 22047, 22048, 22049, 22050, 22051, 22052, 22053, 22054, 22055, 22056, 22057, 22058, 22059, 22060, 22061, 22062, 22063, 22064, 22065, 22066, 22067, 22068, 22069, 22070, 22071, 22072, 22073, 22074, 22075, 22076, 22077, 22078, 22079, 22080, 22081, 22082, 22083, 22084, 22085, 22086, 22087, 22088, 22089, 22090, 22091, 22092, 22093, 22094, 22095, 22096, 22097, 22098, 22099, 22100, 22101, 22102, 22103, 22104, 22105, 22106, 22107, 22108, 22109, 22110, 22111, 22112, 22113, 22114, 22115, 22116, 22117, 22118, 22119, 22120, 22121, 22122, 22123, 22124, 22125, 22126, 22127, 22128, 22129, 22130, 22131, 22132, 22133, 22134, 22135, 22136, 22137, 22138, 22139, 22140, 22141, 22142, 22143, 22144, 22145, 22146, 22147, 22148, 22149, 22150, 22151, 22152, 22153, 22154, 22155, 22156, 22157, 22158, 22159, 22160, 22161, 22162, 22163, 22164, 22165, 22166, 22167, 22168, 22169, 22170, 22171, 22172, 22173, 22174, 22175, 22176, 22177, 22178, 22179, 22180, 22181, 22182, 22183, 22184, 22185, 22186, 22187, 22188, 22189, 22190, 22191, 22192, 22193, 22194, 22195, 22196, 22197, 22198, 22199, 22200, 22201, 22202, 22203, 22204, 22205, 22206, 22207, 22208, 22209, 22210, 22211, 22212, 22213, 22214, 22215, 22216, 22217, 22218, 22219, 22220, 22221, 22222, 22223, 22224, 22225, 22226, 22227, 22228, 22229, 22230, 22231, 22232, 22233, 22234, 22235, 22236, 22237, 22238, 22239, 22240, 22241, 22242, 22243, 22244, 22245, 22246, 22247, 22248, 22249, 22250, 22251, 22252, 22253, 22254, 22255, 22256, 22257, 22258, 22259, 22260, 22261, 22262, 22263, 22264, 22265, 22266, 22267, 22268, 22269, 22270, 22271, 22272, 22273, 22274, 22275, 22276, 22277, 22278, 22279, 22280, 22281, 22282, 22283, 22284, 22285, 22286, 22287, 22288, 22289, 22290, 22291, 22292, 22293, 22294, 22295, 22296, 22297, 22298, 22299, 22300, 22301, 22302, 22303, 22304, 22305, 22306, 22307, 22308, 22309, 22310, 22311, 22312, 22313, 22314, 22315, 22316, 22317, 22318, 22319, 22320, 22321, 22322, 22323, 22324, 22325, 22326, 22327, 22328, 22329, 22330, 22331, 22332, 22333, 22334, 22335, 22336, 22337, 22338, 22339, 22340, 22341, 22342, 22343, 22344, 22345, 22346, 22347, 22348, 22349, 22350, 22351, 22352, 22353, 22354, 22355, 22356, 22357, 22358, 22359, 22360, 22361, 22362, 22363, 22364, 22365, 22366, 22367, 22368, 22369, 22370, 22371, 22372, 22373, 22374, 22375, 22376, 22377, 22378, 22379, 22380, 22381, 22382, 22383, 22384, 22385, 22386, 22387, 22388, 22389, 22390, 22391, 22392, 22393, 22394, 22395, 22396, 22397, 22398, 22399, 22400, 22401, 22402, 22403, 22404, 22405, 22406, 22407, 22408, 22409, 22410, 22411, 22412, 22413, 22414, 22415, 22416, 22417, 22418, 22419, 22420, 22421, 22422, 22423, 22424, 22425, 22426, 22427, 22428, 22429, 22430, 22431, 22432, 22433, 22434, 22435, 22436, 22437, 22438, 22439, 22440, 22441, 22442, 22443, 22444, 22445, 22446, 22447, 22448, 22449, 22450, 22451, 22452, 22453, 22454, 22455, 22456, 22457, 22458, 22459, 22460, 22461, 22462, 22463, 22464, 22465, 22466, 22467, 22468, 22469, 22470, 22471, 22472, 22473, 22474, 22475, 22476, 22477, 22478, 22479, 22480, 22481, 22482, 22483, 22484, 22485, 22486, 22487, 22488, 22489, 22490, 22491, 22492, 22493, 22494, 22495, 22496, 22497, 22498, 22499, 22500, 22501, 22502, 22503, 22504, 22505, 22506, 22507, 22508, 22509, 22510, 22511, 22512, 22513, 22514, 22515, 22516, 22517, 22518, 22519, 22520, 22521, 22522, 22523, 22524, 22525, 22526, 22527, 22528, 22529, 22530, 22531, 22532, 22533, 22534, 22535, 22536, 22537, 22538, 22539, 22540, 22541, 22542, 22543, 22544, 22545, 22546, 22547, 22548, 22549, 22550, 22551, 22552, 22553, 22554, 22555, 22556, 22557, 22558, 22559, 22560, 22561, 22562, 22563, 22564, 22565, 22566, 22567, 22568, 22569, 22570, 22571, 22572, 22573, 22574, 22575, 22576, 22577, 22578, 22579, 22580, 22581, 22582, 22583, 22584, 22585, 22586, 22587, 22588, 22589, 22590, 22591, 22592, 22593, 22594, 22595, 22596, 22597, 22598, 22599, 22600, 22601, 22602, 22603, 22604, 22605, 22606, 22607, 22608, 22609, 22610, 22611, 22612, 22613, 22614, 22615, 22616, 22617, 22618, 22619, 22620, 22621, 22622, 22623, 22624, 22625, 22626, 22627, 22628, 22629, 22630, 22631, 22632, 22633, 22634, 22635, 22636, 22637, 22638, 22639, 22640, 22641, 22642, 22643, 22644, 22645, 22646, 22647, 22648, 22649, 22650, 22651, 22652, 22653, 22654, 22655, 22656, 22657, 22658, 22659, 22660, 22661, 22662, 22663, 22664, 22665, 22666, 22667, 22668, 22669, 22670, 22671, 22672, 22673, 22674, 22675, 22676, 22677, 22678, 22679, 22680, 22681, 22682, 22683, 22684, 22685, 22686, 22687, 22688, 22689, 22690, 22691, 22692, 22693, 22694, 22695, 22696, 22697, 22698, 22699, 22700, 22701, 22702, 22703, 22704, 22705, 22706, 22707, 22708, 22709, 22710, 22711, 22712, 22713, 22714, 22715, 22716, 22717, 22718, 22719, 22720, 22721, 22722, 22723, 22724, 22725, 22726, 22727, 22728, 22729, 22730, 22731, 22732, 22733, 22734, 22735, 22736, 22737, 22738, 22739, 22740, 22741, 22742, 22743, 22744, 22745, 22746, 22747, 22748, 22749, 22750, 22751, 22752, 22753, 22754, 22755, 22756, 22757, 22758, 22759, 22760, 22761, 22762, 22763, 22764, 22765, 22766, 22767, 22768, 22769, 22770, 22771, 22772, 22773, 22774, 22775, 22776, 22777, 22778, 22779, 22780, 22781, 22782, 22783, 22784, 22785, 22786, 22787, 22788, 22789, 22790, 22791, 22792, 22793, 22794, 22795, 22796, 22797, 22798, 22799, 22800, 22801, 22802, 22803, 22804, 22805, 22806, 22807, 22808, 22809, 22810, 22811, 22812, 22813, 22814, 22815, 22816, 22817, 22818, 22819, 22820, 22821, 22822, 22823, 22824, 22825, 22826, 22827, 22828, 22829, 22830, 22831, 22832, 22833, 22834, 22835, 22836, 22837, 22838, 22839, 22840, 22841, 22842, 22843, 22844, 22845, 22846, 22847, 22848, 22849, 22850, 22851, 22852, 22853, 22854, 22855, 22856, 22857, 22858, 22859, 22860, 22861, 22862, 22863, 22864, 22865, 22866, 22867, 22868, 22869, 22870, 22871, 22872, 22873, 22874, 22875, 22876, 22877, 22878, 22879, 22880, 22881, 22882, 22883, 22884, 22885, 22886, 22887, 22888, 22889, 22890, 22891, 22892, 22893, 22894, 22895, 22896, 22897, 22898, 22899, 22900, 22901, 22902, 22903, 22904, 22905, 22906, 22907, 22908, 22909, 22910, 22911, 22912, 22913, 22914, 22915, 22916, 22917, 22918, 22919, 22920, 22921, 22922, 22923, 22924, 22925, 22926, 22927, 22928, 22929, 22930, 22931, 22932, 22933, 22934, 22935, 22936, 22937, 22938, 22939, 22940, 22941, 22942, 22943, 22944, 22945, 22946, 22947, 22948, 22949, 22950, 22951, 22952, 22953, 22954, 22955, 22956, 22957, 22958, 22959, 22960, 22961, 22962, 22963, 22964, 22965, 22966, 22967, 22968, 22969, 22970, 22971, 22972, 22973, 22974, 22975, 22976, 22977, 22978, 22979, 22980, 22981, 22982, 22983, 22984, 22985, 22986, 22987, 22988, 22989, 22990, 22991, 22992, 22993, 22994, 22995, 22996, 22997, 22998, 22999, 23000, 23001, 23002, 23003, 23004, 23005, 23006, 23007, 23008, 23009, 23010, 23011, 23012, 23013, 23014, 23015, 23016, 23017, 23018, 23019, 23020, 23021, 23022, 23023, 23024, 23025, 23026, 23027, 23028, 23029, 23030, 23031, 23032, 23033, 23034, 23035, 23036, 23037, 23038, 23039, 23040, 23041, 23042, 23043, 23044, 23045, 23046, 23047, 23048, 23049, 23050, 23051, 23052, 23053, 23054, 23055, 23056, 23057, 23058, 23059, 23060, 23061, 23062, 23063, 23064, 23065, 23066, 23067, 23068, 23069, 23070, 23071, 23072, 23073, 23074, 23075, 23076, 23077, 23078, 23079, 23080, 23081, 23082, 23083, 23084, 23085, 23086, 23087, 23088, 23089, 23090, 23091, 23092, 23093, 23094, 23095, 23096, 23097, 23098, 23099, 23100, 23101, 23102, 23103, 23104, 23105, 23106, 23107, 23108, 23109, 23110, 23111, 23112, 23113, 23114, 23115, 23116, 23117, 23118, 23119, 23120, 23121, 23122, 23123, 23124, 23125, 23126, 23127, 23128, 23129, 23130, 23131, 23132, 23133, 23134, 23135, 23136, 23137, 23138, 23139, 23140, 23141, 23142, 23143, 23144, 23145, 23146, 23147, 23148, 23149, 23150, 23151, 23152, 23153, 23154, 23155, 23156, 23157, 23158, 23159, 23160, 23161, 23162, 23163, 23164, 23165, 23166, 23167, 23168, 23169, 23170, 23171, 23172, 23173, 23174, 23175, 23176, 23177, 23178, 23179, 23180, 23181, 23182, 23183, 23184, 23185, 23186, 23187, 23188, 23189, 23190, 23191, 23192, 23193, 23194, 23195, 23196, 23197, 23198, 23199, 23200, 23201, 23202, 23203, 23204, 23205, 23206, 23207, 23208, 23209, 23210, 23211, 23212, 23213, 23214, 23215, 23216, 23217, 23218, 23219, 23220, 23221, 23222, 23223, 23224, 23225, 23226, 23227, 23228, 23229, 23230, 23231, 23232, 23233, 23234, 23235, 23236, 23237, 23238, 23239, 23240, 23241, 23242, 23243, 23244, 23245, 23246, 23247, 23248, 23249, 23250, 23251, 23252, 23253, 23254, 23255, 23256, 23257, 23258, 23259, 23260, 23261, 23262, 23263, 23264, 23265, 23266, 23267, 23268, 23269, 23270, 23271, 23272, 23273, 23274, 23275, 23276, 23277, 23278, 23279, 23280, 23281, 23282, 23283, 23284, 23285, 23286, 23287, 23288, 23289, 23290, 23291, 23292, 23293, 23294, 23295, 23296, 23297, 23298, 23299, 23300, 23301, 23302, 23303, 23304, 23305, 23306, 23307, 23308, 23309, 23310, 23311, 23312, 23313, 23314, 23315, 23316, 23317, 23318, 23319, 23320, 23321, 23322, 23323, 23324, 23325, 23326, 23327, 23328, 23329, 23330, 23331, 23332, 23333, 23334, 23335, 23336, 23337, 23338, 23339, 23340, 23341, 23342, 23343, 23344, 23345, 23346, 23347, 23348, 23349, 23350, 23351, 23352, 23353, 23354, 23355, 23356, 23357, 23358, 23359, 23361, 23362, 23363, 23364, 23365, 23366, 23367, 23368, 23369, 23370, 23371, 23372, 23373, 23374, 23375, 23376, 23377, 23378, 23379, 23380, 23381, 23382, 23383, 23384, 23385, 23386, 23387, 23388, 23389, 23390, 23391, 23392, 23393, 23394, 23395, 23396, 23397, 23398, 23399, 23400, 23401, 23402, 23403, 23404, 23405, 23406, 23407, 23408, 23409, 23410, 23411, 23413, 23414, 23415, 23416, 23417, 23418, 23419, 23420, 23421, 23422, 23423, 23424, 23425, 23426, 23427, 23428, 23429, 23430, 23431, 23432, 23433, 23434, 23435, 23436, 23437, 23438, 23439, 23440, 23441, 23442, 23443, 23444, 23445, 23446, 23447, 23448, 23449, 23450, 23451, 23452, 23453, 23454, 23455, 23456, 23457, 23458, 23459, 23460, 23461, 23462, 23463, 23464, 23465, 23466, 23467, 23468, 23469, 23470, 23471, 23472, 23473, 23474, 23475, 23476, 23477, 23478, 23479, 23480, 23481, 23482, 23483, 23484, 23485, 23486, 23487, 23488, 23489, 23490, 23491, 23492, 23493, 23494, 23495, 23496, 23497, 23498, 23499, 23500, 23501, 23502, 23503, 23504, 23505, 23506, 23507, 23508, 23509, 23510, 23511, 23512, 23513, 23514, 23515, 23516, 23517, 23518, 23519, 23520, 23521, 23522, 23523, 23524, 23525, 23526, 23527, 23528, 23529, 23530, 23531, 23532, 23533, 23534, 23535, 23536, 23537, 23538, 23539, 23540, 23541, 23542, 23543, 23544, 23545, 23546, 23547, 23548, 23549, 23550, 23551, 23552, 23553, 23554, 23555, 23556, 23557, 23558, 23559, 23560, 23561, 23562, 23563, 23564, 23565, 23566, 23567, 23568, 23569, 23570, 23571, 23572, 23573, 23574, 23575, 23576, 23577, 23578, 23579, 23580, 23581, 23582, 23583, 23584, 23585, 23586, 23587, 23588, 23589, 23590, 23591, 23592, 23593, 23594, 23595, 23596, 23597, 23598, 23599, 23600, 23601, 23602, 23603, 23604, 23605, 23606, 23607, 23608, 23609, 23610, 23611, 23612, 23613, 23614, 23615, 23616, 23617, 23618, 23619, 23620, 23621, 23622, 23623, 23624, 23625, 23626, 23627, 23628, 23629, 23630, 23631, 23632, 23633, 23634, 23635, 23636, 23637, 23638, 23639, 23640, 23641, 23642, 23643, 23644, 23645, 23646, 23647, 23648, 23649, 23650, 23651, 23652, 23653, 23654, 23655, 23656, 23657, 23658, 23659, 23660, 23661, 23662, 23663, 23664, 23665, 23666, 23667, 23668, 23669, 23670, 23671, 23672, 23673, 23674, 23675, 23676, 23677, 23678, 23679, 23680, 23681, 23682, 23683, 23684, 23685, 23686, 23687, 23688, 23689, 23690, 23691, 23692, 23693, 23694, 23695, 23696, 23697, 23698, 23699, 23700, 23701, 23702, 23703, 23704, 23705, 23706, 23707, 23708, 23709, 23710, 23711, 23712, 23713, 23714, 23715, 23716, 23717, 23718, 23719, 23720, 23721, 23722, 23723, 23724, 23725, 23726, 23727, 23728, 23729, 23730, 23731, 23732, 23733, 23734, 23735, 23736, 23737, 23738, 23739, 23740, 23741, 23742, 23743, 23744, 23745, 23746, 23747, 23748, 23749, 23750, 23751, 23752, 23753, 23754, 23755, 23756, 23757, 23758, 23759, 23760, 23761, 23762, 23763, 23764, 23765, 23766, 23767, 23768, 23769, 23770, 23771, 23772, 23773, 23774, 23775, 23776, 23777, 23778, 23779, 23780, 23781, 23782, 23783, 23784, 23785, 23786, 23787, 23788, 23789, 23790, 23791, 23792, 23793, 23794, 23795, 23796, 23797, 23798, 23799, 23800, 23801, 23802, 23803, 23804, 23805, 23806, 23807, 23808, 23809, 23810, 23811, 23812, 23813, 23814, 23815, 23816, 23817, 23818, 23819, 23820, 23821, 23822, 23823, 23824, 23825, 23826, 23827, 23828, 23829, 23830, 23831, 23832, 23833, 23834, 23835, 23836, 23837, 23838, 23839, 23840, 23841, 23842, 23843, 23844, 23845, 23846, 23847, 23848, 23849, 23850, 23851, 23852, 23853, 23854, 23855, 23856, 23857, 23858, 23859, 23860, 23861, 23862, 23863, 23864, 23865, 23866, 23867, 23868, 23869, 23870, 23871, 23872, 23873, 23874, 23875, 23876, 23877, 23878, 23879, 23880, 23881, 23882, 23883, 23884, 23885, 23886, 23887, 23888, 23889, 23890, 23891, 23892, 23893, 23894, 23895, 23896, 23897, 23898, 23899, 23900, 23901, 23902, 23903, 23904, 23905, 23906, 23907, 23908, 23909, 23910, 23911, 23912, 23913, 23914, 23915, 23916, 23917, 23918, 23919, 23920, 23921, 23922, 23923, 23924, 23925, 23926, 23927, 23928, 23929, 23930, 23931, 23932, 23933, 23934, 23935, 23936, 23937, 23938, 23939, 23940, 23941, 23942, 23943, 23944, 23945, 23946, 23947, 23948, 23949, 23950, 23951, 23952, 23953, 23954, 23955, 23956, 23957, 23958, 23959, 23960, 23961, 23962, 23963, 23964, 23965, 23966, 23967, 23968, 23969, 23970, 23971, 23972, 23973, 23974, 23975, 23976, 23977, 23978, 23979, 23980, 23981, 23982, 23983, 23984, 23985, 23986, 23987, 23988, 23989, 23990, 23991, 23992, 23993, 23994, 23995, 23996, 23997, 23998, 23999, 24000, 24001, 24002, 24003, 24004, 24005, 24006, 24007, 24008, 24009, 24010, 24011, 24012, 24013, 24014, 24015, 24016, 24017, 24018, 24019, 24020, 24021, 24022, 24023, 24024, 24025, 24026, 24027, 24028, 24029, 24030, 24031, 24032, 24033, 24034, 24035, 24036, 24037, 24038, 24039, 24040, 24041, 24042, 24043, 24044, 24045, 24046, 24047, 24048, 24049, 24050, 24051, 24052, 24053, 24054, 24055, 24056, 24057, 24058, 24059, 24060, 24061, 24062, 24063, 24064, 24065, 24066, 24067, 24068, 24069, 24070, 24071, 24072, 24073, 24074, 24075, 24076, 24077, 24078, 24079, 24080, 24081, 24082, 24083, 24084, 24085, 24086, 24087, 24088, 24089, 24090, 24091, 24092, 24093, 24094, 24095, 24096, 24097, 24098, 24099, 24100, 24101, 24102, 24103, 24104, 24105, 24106, 24107, 24108, 24109, 24110, 24111, 24112, 24113, 24114, 24115, 24116, 24117, 24118, 24119, 24120, 24121, 24122, 24123, 24124, 24125, 24126, 24127, 24128, 24129, 24130, 24131, 24132, 24133, 24134, 24135, 24136, 24137, 24138, 24139, 24140, 24141, 24142, 24143, 24144, 24145, 24146, 24147, 24148, 24149, 24150, 24151, 24152, 24153, 24154, 24155, 24156, 24157, 24158, 24159, 24160, 24161, 24162, 24163, 24164, 24165, 24166, 24167, 24168, 24169, 24170, 24171, 24172, 24173, 24174, 24175, 24176, 24177, 24178, 24179, 24180, 24181, 24182, 24183, 24184, 24185, 24186, 24187, 24188, 24189, 24190, 24191, 24192, 24193, 24194, 24195, 24196, 24197, 24198, 24199, 24200, 24201, 24202, 24203, 24204, 24205, 24206, 24207, 24208, 24209, 24210, 24211, 24212, 24213, 24214, 24215, 24216, 24217, 24218, 24219, 24220, 24221, 24222, 24223, 24224, 24225, 24226, 24227, 24228, 24229, 24230, 24231, 24232, 24233, 24234, 24235, 24236, 24237, 24238, 24239, 24240, 24241, 24242, 24243, 24244, 24245, 24246, 24247, 24248, 24249, 24250, 24251, 24252, 24253, 24254, 24255, 24256, 24257, 24258, 24259, 24260, 24261, 24262, 24263, 24264, 24265, 24266, 24267, 24268, 24269, 24270, 24271, 24272, 24273, 24274, 24275, 24276, 24277, 24278, 24279, 24280, 24281, 24282, 24283, 24284, 24285, 24286, 24287, 24288, 24289, 24290, 24291, 24292, 24293, 24294, 24295, 24296, 24297, 24298, 24299, 24300, 24301, 24302, 24303, 24304, 24305, 24306, 24307, 24308, 24309, 24310, 24311, 24312, 24313, 24314, 24315, 24316, 24317, 24318, 24319, 24320, 24321, 24322, 24323, 24324, 24325, 24326, 24327, 24328, 24329, 24330, 24331, 24332, 24333, 24334, 24335, 24336, 24337, 24338, 24339, 24340, 24341, 24342, 24343, 24344, 24345, 24346, 24347, 24348, 24349, 24350, 24351, 24352, 24353, 24354, 24355, 24356, 24357, 24358, 24359, 24360, 24361, 24362, 24363, 24364, 24365, 24366, 24367, 24368, 24369, 24370, 24371, 24372, 24373, 24374, 24375, 24376, 24377, 24378, 24379, 24380, 24381, 24382, 24383, 24384, 24385, 24386, 24387, 24388, 24389, 24390, 24391, 24392, 24393, 24394, 24395, 24396, 24397, 24398, 24399, 24400, 24401, 24402, 24403, 24404, 24405, 24406, 24407, 24408, 24409, 24410, 24411, 24412, 24413, 24414, 24415, 24416, 24417, 24418, 24419, 24420, 24421, 24422, 24423, 24424, 24425, 24426, 24427, 24428, 24429, 24430, 24431, 24432, 24433, 24434, 24435, 24436, 24437, 24438, 24439, 24440, 24441, 24442, 24443, 24444, 24445, 24446, 24447, 24448, 24449, 24450, 24451, 24452, 24453, 24454, 24455, 24456, 24457, 24458, 24459, 24460, 24461, 24462, 24463, 24464, 24465, 24466, 24467, 24468, 24469, 24470, 24471, 24472, 24486, 24535, 24695, 24696, 24698, 24699]
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(181),
        h = n(c),
        f = i(182),
        d = r(f),
        p = function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.video = this.canvas.querySelector("video"), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copy2 = Array.from(this.canvas.getElementsByClassName("copy2")), this.veils = Array.from(this.canvas.getElementsByClassName("veil")), this.triggers = []
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), (0, d["default"])(this.video)
                }
            }, {
                key: "init",
                value: function () {
                    var t = new u.TimelineLite({
                        paused: !0
                    });
                    t.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2), t.staggerTo(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2, 3).to(this.veils[0], 2, {
                        opacity: 1,
                        ease: u.Power2.easeOut
                    }, 4).staggerTo(this.copy2, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2, 5), this.triggers = [{
                        atProgress: 0,
                        duration: 1,
                        timeline: t
                    }]
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    var e = this;
                    this.navMarkers = [{
                        canvas: this.canvas,
                        setJumpToProgress: function () {
                            e.setProgress(0, 0)
                        },
                        name: "Gallery",
                        offsetTop: this.canvas.offsetTop + 0.3 * t.height
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    h.hasTouch() || (this.paused = !1, this.video.play())
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== t && (t > 0.6 && !this.animationPause ? (this.animationPause = !0, this.video.pause()) : t < 0.6 && this.animationPause && (this.animationPause = !1, this.video.play()), this.triggers.forEach(function (e) {
                        var i = e.atProgress,
                            n = e.duration,
                            r = e.timeline,
                            s = e.useFullProgress,
                            o = (0, a["default"])(((s ? fullProgress : t) - i) / n, 0, 1);
                        r.progress(o)
                    }), this.progress = t)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = p
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(181),
        h = n(c),
        f = i(180),
        d = (n(f), i(182)),
        p = r(d),
        m = function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.video = this.canvas.querySelector("video"), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copy2 = Array.from(this.canvas.getElementsByClassName("copy2")), this.veils = Array.from(this.canvas.getElementsByClassName("veil")), this.paused = !0, this.setCopy = !1, this.triggers = null, this.animationPause = !1, this.setDataProgress = !1
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), (0, p["default"])(this.video)
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "init",
                value: function () {
                    var t = this,
                        e = new u.TimelineLite({
                            paused: !0
                        });
                    e.to(this.veils[0], 2, {
                        opacity: 1,
                        ease: u.Power2.easeOut
                    }).staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2).staggerTo(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2).to(this.veils[1], 2, {
                        opacity: 1,
                        ease: u.Power2.easeOut
                    }).staggerTo(this.copy2, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2), e.add(function () {
                        h.hasTouch() || t.video.play()
                    }), this.triggers = [{
                        atProgress: 0,
                        duration: 1,
                        timeline: e
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1, h.hasTouch() || (this.paused = !1, this.video.play())
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== e && (e > 0.6 && !this.animationPause ? (this.animationPause = !0, this.video.pause()) : e < 0.6 && this.animationPause && (this.animationPause = !1, this.video.play()), this.triggers && this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            l = (0, a["default"])(((o ? e : t) - n) / (r / 1.4), 0, 1);
                        s.progress(l)
                    }), this.progress = e)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = m
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function s(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) {
                i[e] = t[e]
            }
            return i
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = (i(174), i(181)),
        u = (r(l), i(180)),
        c = (r(u), i(245)),
        h = n(c),
        f = i(228),
        d = r(f),
        p = i(188),
        m = (r(p), function () {
            function t(e) {
                var i = this,
                    n = e.selector;
                o(this, t), this.renderEvents = function () {
                    return i.events.forEach(function (t, e) {
                        var i = t.getElementsByClassName("eventLabel")[0],
                            n = t.getElementsByClassName("eventTitle")[0],
                            r = t.getElementsByClassName("eventBody")[0];
                        i.innerHTML = h["default"][e].label, r.innerHTML = h["default"][e].detail, n.innerHTML = h["default"][e].title
                    })
                }, this.getRegCopy = function () {
                    return [].concat(s(i.copy1), s(i.copyD))
                }, this.handleScroll = function (t) {
                    if (!i.paused) {
                        var e = i.getRegCopy(),
                            n = t + 0.12 * i.windowSizes.height - i.canvasOffsetTop;
                        i.paths.forEach(function (t) {
                            t.style.strokeDashoffset = 5000 - n
                        });
                        var r = 0.65 * i.windowSizes.height;
                        e.forEach(function (e, n) {
                            var s = i.canvasOffsetTop + i.regCopyTops[n] - t;
                            s < r ? (d.removeClass(e, "copyT50"), d.removeClass(e, "opac0")) : (d.addClass(e, "opac0"), d.addClass(e, "copyT50"))
                        }), i.eventCopy.forEach(function (e, n) {
                            var s = i.canvasOffsetTop + i.eventCopyTops[n] - t;
                            s < r ? (d.removeClass(e, "translate"), d.removeClass(e, "opac0")) : (d.addClass(e, "translate"), d.addClass(e, "opac0"))
                        })
                    }
                }, this.canvas = document.querySelector(n), this.paths = Array.from(this.canvas.getElementsByClassName("dataPath")), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copyD = Array.from(this.canvas.getElementsByClassName("copyD")), this.events = Array.from(this.canvas.getElementsByClassName("event")), this.eventCopy = Array.from(this.canvas.getElementsByClassName("eventCopy")), this.paused = !0, this.setCopy = !1, this.initialOffset = 5000, this.animationPause = !1, this.setDataProgress = !1
            }
            return a(t, [{
                key: "load",
                value: function () {
                    return this.init(), this.renderEvents(), Promise.resolve()
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "init",
                value: function () {
                    var t = this;
                    this.paths.forEach(function (e) {
                        return e.style.strokeDashoffset = t.initialOffset
                    })
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    var e = this;
                    this.canvasOffsetTop = this.canvas.offsetTop, this.windowSizes = t;
                    var i = this.getRegCopy();
                    this.regCopyTops = i.map(function (t) {
                        return t.offsetTop
                    }), this.eventCopyTops = this.eventCopy.map(function (t) {
                        var i = t.offsetParent,
                            n = 0;
                        return n + t.offsetTop
                    })
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }());
    e["default"] = m
}, function (t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e["default"] = [{
        label: " ",
        title: "1239",
        detail: "King St. Louis placed the crown of thorns in Notre Dame"
    }, {
        label: "",
        title: "1302",
        detail: "Philippe Le Bel opened the first Royal National Convention in Notre Dame. Then there are all kinds of ceremonies: grace ceremonies, weddings, coronations, baptisms, funerals, etc"
    }, {
        label: "7 November",
        title: "1455",
        detail: "Anti-Joan of Arc litigation. Joan De, the national heroine, won the war for the French leader, but was later betrayed and executed by fire. Many years later, the Notre Dame Church put up a statue of Joan of Arc in the courtyard, which was honored as 'Joan of Arc'"
    }, {
        label: "10 September",
        title: "1573",
        detail: "The Cathedral was the site of a vow made by Henry of Valois following the interregnum of the Polish–Lithuanian Commonwealth that he would both respect traditional liberties and the recently passed religious freedom law."
    }, {
        label: " ",
        title: "1831",
        detail: "The novel The Hunchback of Notre-Dame was published by French author Victor Hugo"
    }, {
        label: " ",
        title: "1900",
        detail: "Louis Vierne is appointed organist of Notre-Dame de Paris after a heavy competition (with judges including Charles-Marie Widor) against the 500 most talented organ players of the era. On 2 June 1937 Louis Vierne dies at the cathedral organ (as was his lifelong wish) near the end of his 1750th concert."
    }, {
        label: "26 August",
        title: "1944",
        detail: "A Te Deum Mass takes place in the cathedral to celebrate the liberation of Paris. (According to some accounts the Mass was interrupted by sniper fire from both the internal and external galleries.)"
    }, {
        label: "12 November",
        title: "1970",
        detail: "The Requiem Mass of General Charles de Gaulle is held."
    }, {
        label: "31 May",
        title: "1980",
        detail: "After the Magnificat of this day, Pope John Paul II celebrates Mass on the parvis of the cathedral."
    }, {
        label: "10 August",
        title: "2007",
        detail: "The Requiem Mass of Cardinal Jean-Marie Lustiger, former Archbishop of Paris and famous Jewish convert to Catholicism, is held."
    }, {
        label: "15 April",
        title: "2019",
        detail: "Parts of the roof and spire burned down, eliciting an international response.Plans are being made to rebuild"
    }]
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(181),
        h = n(c),
        f = i(182),
        d = r(f),
        p = function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.video = this.canvas.querySelector("video"), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copy2 = Array.from(this.canvas.getElementsByClassName("copy2")), this.copy3 = Array.from(this.canvas.getElementsByClassName("copy3")), this.veil = Array.from(this.canvas.getElementsByClassName("veil")), this.paused = !1, this.animationPause = !1, this.state = {
                    progress: 0
                }, this.copyHidden = !0, this.triggers = []
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), (0, d["default"])(this.video)
                }
            }, {
                key: "init",
                value: function () {
                    this.triggers = [];
                    var t = new u.TimelineLite({
                        paused: !0
                    });
                    t.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: "0",
                        ease: u.Power2.easeOut
                    }, 0.2).staggerTo(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2).to(this.veil, 2, {
                        opacity: 1,
                        ease: u.Power2.easeOut
                    }).staggerTo(this.copy2, 2, {
                        opacity: 1,
                        y: "0",
                        ease: u.Power2.easeOut
                    }, 0.2).staggerTo(this.copy2, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2).staggerTo(this.copy3, 2, {
                        opacity: 1,
                        y: "0",
                        ease: u.Power2.easeOut
                    }, 0.2), this.triggers.push({
                        atProgress: 0,
                        duration: 1,
                        timeline: t
                    })
                }
            }, {
                key: "handleSequenceLoad",
                value: function (t) {
                    t()
                }
            }, {
                key: "handleResize",
                value: function (t) {
                    var e = this;
                    this.navMarkers = [{
                        canvas: this.canvas,
                        setJumpToProgress: function () {
                            e.setProgress(0, 0)
                        },
                        name: "Future",
                        offsetTop: this.canvas.offsetTop + t.height / 3
                    }]
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0, this.video.pause()
                }
            }, {
                key: "play",
                value: function () {
                    h.hasTouch() || (this.paused = !1, this.video.play())
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== t && (t > 0.3 && !this.animationPause ? (this.animationPause = !0, this.video.pause()) : t < 0.3 && this.animationPause && (this.animationPause = !1, this.video.play()), this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            l = (0, a["default"])(((o ? e : t) - n) / r, 0, 1);
                        s.progress(l)
                    }), this.progress = t)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }();
    e["default"] = p
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(178),
        a = r(o),
        l = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = i(174),
        c = i(181),
        h = (n(c), function () {
            function t(e) {
                var i = e.selector;
                s(this, t), this.canvas = document.querySelector(i), this.copy1 = Array.from(this.canvas.getElementsByClassName("copy1")), this.copy2 = Array.from(this.canvas.getElementsByClassName("copy2")), this.veil = Array.from(this.canvas.getElementsByClassName("genericVeil")), this.paused = !1, this.triggers = []
            }
            return l(t, [{
                key: "load",
                value: function () {
                    return this.init(), Promise.resolve()
                }
            }, {
                key: "init",
                value: function () {
                    this.triggers = [];
                    var t = new u.TimelineLite({
                        paused: !0
                    });
                    t.staggerTo(this.copy1, 2, {
                        opacity: 1,
                        y: "0",
                        ease: u.Power2.easeOut
                    }, 0.2).staggerTo(this.copy1, 2, {
                        opacity: 0,
                        y: "-50px",
                        ease: u.Power2.easeOut
                    }, 0.2, 3).to(this.veil, 2, {
                        opacity: 1,
                        ease: u.Power2.easeOut
                    }, 4).staggerTo(this.copy2, 2, {
                        opacity: 1,
                        y: 0,
                        ease: u.Power2.easeOut
                    }, 0.2, 4), this.triggers.push({
                        atProgress: -0.3,
                        duration: 1,
                        timeline: t
                    })
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "setProgress",
                value: function (t, e) {
                    this.progress !== t && (this.triggers.forEach(function (i) {
                        var n = i.atProgress,
                            r = i.duration,
                            s = i.timeline,
                            o = i.useFullProgress,
                            l = (0, a["default"])(((o ? e : t) - n) / r, 0, 1);
                        s.progress(l)
                    }), this.progress = t)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }());
    e["default"] = h
}, function (t, e) {
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = function () {
            function t() {
                i(this, t), this.document = document.body, this.trackingElements = Array.from(this.document.getElementsByClassName("ga-click-handler")), this.init()
            }
            return n(t, [{
                key: "init",
                value: function () {
                    this.clickEvents = this.trackingElements.map(function (t) {
                        var e = t.dataset.category,
                            i = t.dataset.label;
                        t.addEventListener("click", function (t) {
                            dataLayer.push({
                                event: "gaEvent",
                                eventCategory: e,
                                eventAction: "Click",
                                eventLabel: i
                            })
                        })
                    })
                }
            }]), t
        }();
    e["default"] = r
}, function (t, e, i) {
    function n(t) {
        if (t && t.__esModule) {
            return t
        }
        var e = {};
        if (null != t) {
            for (var i in t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
        }
        return e["default"] = t, e
    }

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function s(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(250),
        a = r(o),
        l = i(2),
        u = r(l),
        c = i(254),
        h = r(c),
        f = i(112),
        d = r(f),
        p = i(264),
        m = r(p),
        v = i(223),
        g = r(v),
        y = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        _ = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) {
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
            }
            return t
        },
        w = i(188),
        b = n(w),
        x = i(174),
        T = i(265),
        P = r(T),
        S = function (t, e, i, n, r, s) {
            var o = n.offsetTop,
                a = s[r + 1],
                l = a ? a.offsetTop : e,
                u = i + 0.3 * t,
                c = o < u && l > u;
            return _({}, n, {
                isActive: c
            })
        },
        k = function () {
            function t(e) {
                var i = this;
                s(this, t), this.goTo = this._goTo.bind(this), this.container = e, this.$dimmer = document.querySelector(".nav--dimmer"), this.$toggle = this.container.querySelector(".nav--toggle--js"), this.gotoFired = !1, this.$toggle.addEventListener("click", function (t) {
                    t.preventDefault(), i.toggleOpenState()
                })
            }
            return y(t, [{
                key: "init",
                value: function (t, e) {
                    var i = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g["default"];
                    this.navData = _({}, this.navData, t), this.updateNavState(e), this.renderNavData(this.container), this.onJumpStart = n;
                    var r = document.querySelector(".nav--logo--js");
                    r.addEventListener("click", function (t) {
                        t.preventDefault(), i.itemClickHandler(0)
                    })
                }
            }, {
                key: "toggleOpenState",
                value: function (t) {
                    var e = t === !0 || t !== !1 && !this.container.classList.contains("is-open");
                    document.querySelector("html").classList.toggle("modal--lock", e), this.container.classList.toggle("is-open", t)
                }
            }, {
                key: "updateNavState",
                value: function (t) {
                    if (this.navData) {
                        var e = this.navData.navItems.map(S.bind(null, this.navData.windowHeight, this.navData.documentHeight, t));
                        (0, m["default"])(this.navData.navItems, e) || (this.gotoFired && dataLayer.push({
                            event: "gaEvent",
                            eventCategory: "Chapters",
                            eventAction: "Scroll",
                            eventLabel: "Chapter " + ((0, d["default"])(e, function (t) {
                                return t.isActive === !0
                            }) + 1) + " - " + e.find(function (t) {
                                return t.isActive === !0
                            }).name
                        }), this.navData.navItems = e, this.renderNavData(this.container, e))
                    }
                }
            }, {
                key: "itemClickHandler",
                value: function (t) {
                    var e = this,
                        i = this.navData.navItems[t],
                        n = i.offsetTop,
                        r = document.querySelector(".nav--logo--js"),
                        s = i.canvas.children[0];
                    this.toggleOpenState(!1), this.onJumpStart(n), i.onJumpStart && i.onJumpStart();
                    var o = new x.TimelineLite({
                        paused: !0
                    });
                    o.set(s, {
                        position: "fixed",
                        top: 0,
                        y: b.scrollY() > n ? "-100%" : "100%",
                        zIndex: 800
                    }).set(this.$dimmer, {
                        display: "block",
                        opacity: 0
                    }), o.add([new x.TweenLite(s, 1, {
                        y: "0%",
                        ease: P["default"]
                    }), new x.TweenLite(this.$dimmer, 1, {
                        opacity: 1,
                        ease: P["default"]
                    }, r, 1, {
                        opacity: 1,
                        ease: P["default"]
                    })]), o.add(function () {
                        o.pause(), b.scrollTo(n, 0).then(function () {
                            o.resume()
                        })
                    }), o.add(function () {
                        i.onJumpComplete && i.onJumpComplete()
                    }), o.add(function () {
                        s.style.cssText = "", e.$dimmer.style.cssText = "", i.canvas.style.cssText = ""
                    }), o.play(), window.location.hash = (0, h["default"])(i.name)
                }
            }, {
                key: "_goTo",
                value: function (t) {
                    var e = (0, h["default"])(t),
                        i = (0, d["default"])(this.navData.navItems, function (t) {
                            return (0, h["default"])(t.name) === e
                        });
                    i >= 0 && this.itemClickHandler(i), dataLayer.push({
                        event: "gaEvent",
                        eventCategory: "Chapters",
                        eventAction: "Scroll",
                        eventLabel: "Chapter " + ((i === -1 ? 0 : i) + 1) + " - " + this.navData.navItems[i === -1 ? 0 : i].name
                    }), this.gotoFired = !0
                }
            }, {
                key: "renderNavData",
                value: function (t) {
                    var e = this,
                        i = Object.assign({
                            elements: {}
                        }, this.navData);
                    i.navItems.forEach(function (n, r) {
                        var s = n.name,
                            o = (n.offsetTop, n.isActive),
                            l = (0, u["default"])(i, ["elements", s]);
                            l || (l = document.createElement("button"), 
                            l.className = "nav--item", 
                            l.innerHTML = '<span class="nav--item--name">\n          <span class="nav--item--text">\n            ' + s + "\n          </span>\n        </span>", 
                            l.addEventListener("click", e.itemClickHandler.bind(e, r)), t.appendChild(l), (0, a["default"])(i, ["elements", s], l)), l.classList.toggle("is-active", o)
                    });
                    var n = i.navItems.find(function (t) {
                        var e = t.isActive;
                        return e
                    });
                    n && t.classList.toggle("is-inverted", n.isInverted), this.navData = i
                }
            }]), t
        }();
    e["default"] = k
}, function (t, e, i) {
    function n(t, e, i) {
        return null == t ? t : r(t, e, i)
    }
    var r = i(251);
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i, n) {
        if (!a(t)) {
            return t
        }
        e = s(e, t);
        for (var u = -1, c = e.length, h = c - 1, f = t; null != f && ++u < c;) {
            var d = l(e[u]),
                p = i;
            if (u != h) {
                var m = f[d];
                p = n ? n(m, d, f) : void 0, void 0 === p && (p = a(m) ? m : o(e[u + 1]) ? [] : {})
            }
            r(f, d, p), f = f[d]
        }
        return t
    }
    var r = i(252),
        s = i(4),
        o = i(86),
        a = i(26),
        l = i(53);
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i) {
        var n = t[e];
        a.call(t, e) && s(n, i) && (void 0 !== i || e in t) || r(t, e, i)
    }
    var r = i(253),
        s = i(39),
        o = Object.prototype,
        a = o.hasOwnProperty;
    t.exports = n
}, function (t, e, i) {
    function n(t, e, i) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
        }) : t[e] = i
    }
    var r = i(170);
    t.exports = n
}, function (t, e, i) {
    var n = i(255),
        r = n(function (t, e, i) {
            return t + (i ? "-" : "") + e.toLowerCase()
        });
    t.exports = r
}, function (t, e, i) {
    function n(t) {
        return function (e) {
            return r(o(s(e).replace(l, "")), t, "")
        }
    }
    var r = i(256),
        s = i(257),
        o = i(260),
        a = "['’]",
        l = RegExp(a, "g");
    t.exports = n
}, function (t, e) {
    function i(t, e, i, n) {
        var r = -1,
            s = null == t ? 0 : t.length;
        for (n && s && (i = t[++r]); ++r < s;) {
            i = e(i, t[r], r, t)
        }
        return i
    }
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return t = s(t), t && t.replace(o, r).replace(f, "")
    }
    var r = i(258),
        s = i(50),
        o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        a = "\\u0300-\\u036f",
        l = "\\ufe20-\\ufe2f",
        u = "\\u20d0-\\u20ff",
        c = a + l + u,
        h = "[" + c + "]",
        f = RegExp(h, "g");
    t.exports = n
}, function (t, e, i) {
    var n = i(259),
        r = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss",
            "Ā": "A",
            "Ă": "A",
            "Ą": "A",
            "ā": "a",
            "ă": "a",
            "ą": "a",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "Ď": "D",
            "Đ": "D",
            "ď": "d",
            "đ": "d",
            "Ē": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ę": "E",
            "Ě": "E",
            "ē": "e",
            "ĕ": "e",
            "ė": "e",
            "ę": "e",
            "ě": "e",
            "Ĝ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ģ": "G",
            "ĝ": "g",
            "ğ": "g",
            "ġ": "g",
            "ģ": "g",
            "Ĥ": "H",
            "Ħ": "H",
            "ĥ": "h",
            "ħ": "h",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "Į": "I",
            "İ": "I",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "į": "i",
            "ı": "i",
            "Ĵ": "J",
            "ĵ": "j",
            "Ķ": "K",
            "ķ": "k",
            "ĸ": "k",
            "Ĺ": "L",
            "Ļ": "L",
            "Ľ": "L",
            "Ŀ": "L",
            "Ł": "L",
            "ĺ": "l",
            "ļ": "l",
            "ľ": "l",
            "ŀ": "l",
            "ł": "l",
            "Ń": "N",
            "Ņ": "N",
            "Ň": "N",
            "Ŋ": "N",
            "ń": "n",
            "ņ": "n",
            "ň": "n",
            "ŋ": "n",
            "Ō": "O",
            "Ŏ": "O",
            "Ő": "O",
            "ō": "o",
            "ŏ": "o",
            "ő": "o",
            "Ŕ": "R",
            "Ŗ": "R",
            "Ř": "R",
            "ŕ": "r",
            "ŗ": "r",
            "ř": "r",
            "Ś": "S",
            "Ŝ": "S",
            "Ş": "S",
            "Š": "S",
            "ś": "s",
            "ŝ": "s",
            "ş": "s",
            "š": "s",
            "Ţ": "T",
            "Ť": "T",
            "Ŧ": "T",
            "ţ": "t",
            "ť": "t",
            "ŧ": "t",
            "Ũ": "U",
            "Ū": "U",
            "Ŭ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ų": "U",
            "ũ": "u",
            "ū": "u",
            "ŭ": "u",
            "ů": "u",
            "ű": "u",
            "ų": "u",
            "Ŵ": "W",
            "ŵ": "w",
            "Ŷ": "Y",
            "ŷ": "y",
            "Ÿ": "Y",
            "Ź": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "ź": "z",
            "ż": "z",
            "ž": "z",
            "Ĳ": "IJ",
            "ĳ": "ij",
            "Œ": "Oe",
            "œ": "oe",
            "ŉ": "'n",
            "ſ": "s"
        },
        s = n(r);
    t.exports = s
}, function (t, e) {
    function i(t) {
        return function (e) {
            return null == t ? void 0 : t[e]
        }
    }
    t.exports = i
}, function (t, e, i) {
    function n(t, e, i) {
        return t = o(t), e = i ? void 0 : e, void 0 === e ? s(t) ? a(t) : r(t) : t.match(e) || []
    }
    var r = i(261),
        s = i(262),
        o = i(50),
        a = i(263);
    t.exports = n
}, function (t, e) {
    function i(t) {
        return t.match(n) || []
    }
    var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    t.exports = i
}, function (t, e) {
    function i(t) {
        return n.test(t)
    }
    var n = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    t.exports = i
}, function (t, e) {
    function i(t) {
        return t.match(H) || []
    }
    var n = "\\ud800-\\udfff",
        r = "\\u0300-\\u036f",
        s = "\\ufe20-\\ufe2f",
        o = "\\u20d0-\\u20ff",
        a = r + s + o,
        l = "\\u2700-\\u27bf",
        u = "a-z\\xdf-\\xf6\\xf8-\\xff",
        c = "\\xac\\xb1\\xd7\\xf7",
        h = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        f = "\\u2000-\\u206f",
        d = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        p = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        m = "\\ufe0e\\ufe0f",
        v = c + h + f + d,
        g = "['’]",
        y = "[" + v + "]",
        _ = "[" + a + "]",
        w = "\\d+",
        b = "[" + l + "]",
        x = "[" + u + "]",
        T = "[^" + n + v + w + l + u + p + "]",
        P = "\\ud83c[\\udffb-\\udfff]",
        S = "(?:" + _ + "|" + P + ")",
        k = "[^" + n + "]",
        M = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        E = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        O = "[" + p + "]",
        A = "\\u200d",
        R = "(?:" + x + "|" + T + ")",
        C = "(?:" + O + "|" + T + ")",
        L = "(?:" + g + "(?:d|ll|m|re|s|t|ve))?",
        j = "(?:" + g + "(?:D|LL|M|RE|S|T|VE))?",
        D = S + "?",
        F = "[" + m + "]?",
        N = "(?:" + A + "(?:" + [k, M, E].join("|") + ")" + F + D + ")*",
        I = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",
        q = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",
        z = F + D + N,
        B = "(?:" + [b, M, E].join("|") + ")" + z,
        H = RegExp([O + "?" + x + "+" + L + "(?=" + [y, O, "$"].join("|") + ")", C + "+" + j + "(?=" + [y, O + R, "$"].join("|") + ")", O + "?" + R + "+" + L, O + "+" + j, q, I, w, B].join("|"), "g");
    t.exports = i
}, function (t, e, i) {
    function n(t, e) {
        return r(t, e)
    }
    var r = i(65);
    t.exports = n
}, function (t, e, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(174),
        r = n.Circ.easeOut;
    e["default"] = r
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t) {
        return Array.isArray(t) ? t : Array.from(t)
    }

    function s(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) {
                i[e] = t[e]
            }
            return i
        }
        return Array.from(t)
    }

    function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.container,
            i = t.length,
            n = t.endPointSpacing,
            r = void 0 === n ? f : n;
        if (!e) {
            return o(Object.assign({}, t, {
                container: document.createElement("svg")
            }))
        }
        e.setAttribute("width", 20), e.setAttribute("height", i);
        var s = p([10, 0], [10, i], Math.floor(i / r)),
            a = v(s);
        return e.innerHTML = '<path fill="none" stroke="#000" stroke-width="1" d="' + a + '" />', e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(178),
        l = n(a),
        u = i(267),
        c = n(u),
        h = function () {
            function t(t, e) {
                var i = [],
                    n = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0) {}
                } catch (l) {
                    r = !0, s = l
                } finally {
                    try {
                        !n && a["return"] && a["return"]()
                    } finally {
                        if (r) {
                            throw s
                        }
                    }
                }
                return i
            }
            return function (e, i) {
                if (Array.isArray(e)) {
                    return e
                }
                if (Symbol.iterator in Object(e)) {
                    return t(e, i)
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        f = 40,
        d = 0.8,
        p = function (t, e, i) {
            var n = h(t, 2),
                r = n[0],
                o = n[1],
                a = h(e, 2),
                l = a[0],
                u = a[1],
                f = l - r,
                d = u - o,
                p = Math.ceil(f / i),
                m = Math.ceil(d / i),
                v = (0, c["default"])(i).map(function (t) {
                    return [r + (t + 1) * p, o + (t + 1) * m]
                });
            return [t].concat(s(v.slice(0, v.length - 1)), [e])
        },
        m = function (t) {
            var e = h(t, 2),
                i = e[0],
                n = e[1];
            return i + "," + n
        },
        v = function (t) {
            var e = r(t),
                i = e[0],
                n = e.slice(1),
                s = n.reduce(function (t, e) {
                    var i = h(e, 2),
                        n = i[0],
                        r = i[1];
                    return t.concat(["S" + m([n - Math.pow((0, l["default"])(Math.random() - (1 - d), 0, 1), 2) * (f / 2), r - f / 2]) + "\n      " + m(e)])
                }, ["M" + m(i)]).join(" ");
            return s
        };
    e["default"] = o
}, function (t, e, i) {
    var n = i(268),
        r = n();
    t.exports = r
}, function (t, e, i) {
    function n(t) {
        return function (e, i, n) {
            return n && "number" != typeof n && s(e, i, n) && (i = n = void 0), e = o(e), void 0 === i ? (i = e, e = 0) : i = o(i), n = void 0 === n ? e < i ? 1 : -1 : o(n), r(e, i, n, t)
        }
    }
    var r = i(269),
        s = i(172),
        o = i(115);
    t.exports = n
}, function (t, e) {
    function i(t, e, i, s) {
        for (var o = -1, a = r(n((e - t) / (i || 1)), 0), l = Array(a); a--;) {
            l[s ? a : ++o] = t, t += i
        }
        return l
    }
    var n = Math.ceil,
        r = Math.max;
    t.exports = i
}, function (t, e, i) {
    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        o = i(222),
        a = n(o),
        l = function () {
            function t(e) {
                r(this, t), this.target = document.querySelector(e), this.target && (this.target.innerHTML = this.getMessageHtml(), this.target.classList.add("main--unsupported"), this.loader = new a["default"])
            }
            return s(t, [{
                key: "getMessageHtml",
                value: function () {
                    return '\n<div class="unsupported--container">\n  <img src="https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/webp/logo.webp" class="unsupported--logo" />\n  <p class="unsupported--message">\n    This site has some features that aren’t supported by your current browser.  \n   For an optimal experience, we recommend using the latest version of Chrome or Firefox.\n  </p><p class="unsupported--message">您的浏览器不支持此站点的一些功能，为了更好的体验，建议您使用最新版的谷歌或者火狐浏览器 \n  </p>\n\n  <a href="https://browsehappy.com/" class="unsupported--cta">\n    Get the latest\n  </a>\n</div>\n'
                }
            }]), t
        }();
    e["default"] = l
}]));