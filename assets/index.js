var ln = Object.defineProperty;
var on = (t, e, n) => e in t ? ln(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var et = (t, e, n) => (on(t, typeof e != "symbol" ? e + "" : e, n),
n);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        s(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function s(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
function q() {}
const jt = t => t;
function St(t, e) {
    for (const n in e)
        t[n] = e[n];
    return t
}
function Wt(t) {
    return t()
}
function ct() {
    return Object.create(null)
}
function _e(t) {
    t.forEach(Wt)
}
function Ae(t) {
    return typeof t == "function"
}
function J(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
function an(t) {
    return Object.keys(t).length === 0
}
function rn(t, ...e) {
    if (t == null) {
        for (const s of e)
            s(void 0);
        return q
    }
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}
function cn(t, e, n) {
    t.$$.on_destroy.push(rn(e, n))
}
function $t(t, e, n, s) {
    if (t) {
        const l = Ht(t, e, n, s);
        return t[0](l)
    }
}
function Ht(t, e, n, s) {
    return t[1] && s ? St(n.ctx.slice(), t[1](s(e))) : n.ctx
}
function qt(t, e, n, s) {
    if (t[2] && s) {
        const l = t[2](s(n));
        if (e.dirty === void 0)
            return l;
        if (typeof l == "object") {
            const i = []
              , o = Math.max(e.dirty.length, l.length);
            for (let a = 0; a < o; a += 1)
                i[a] = e.dirty[a] | l[a];
            return i
        }
        return e.dirty | l
    }
    return e.dirty
}
function Nt(t, e, n, s, l, i) {
    if (l) {
        const o = Ht(e, n, s, i);
        t.p(o, l)
    }
}
function Dt(t) {
    if (t.ctx.length > 32) {
        const e = []
          , n = t.ctx.length / 32;
        for (let s = 0; s < n; s++)
            e[s] = -1;
        return e
    }
    return -1
}
function z(t) {
    return t ?? ""
}
const Ft = typeof window < "u";
let dn = Ft ? () => window.performance.now() : () => Date.now()
  , it = Ft ? t => requestAnimationFrame(t) : q;
const Se = new Set;
function Rt(t) {
    Se.forEach(e => {
        e.c(t) || (Se.delete(e),
        e.f())
    }
    ),
    Se.size !== 0 && it(Rt)
}
function un(t) {
    let e;
    return Se.size === 0 && it(Rt),
    {
        promise: new Promise(n => {
            Se.add(e = {
                c: t,
                f: n
            })
        }
        ),
        abort() {
            Se.delete(e)
        }
    }
}
const fn = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function c(t, e) {
    t.appendChild(e)
}
function zt(t) {
    if (!t)
        return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}
function mn(t) {
    const e = f("style");
    return e.textContent = "/* empty */",
    hn(zt(t), e),
    e.sheet
}
function hn(t, e) {
    return c(t.head || t, e),
    e.sheet
}
function p(t, e, n) {
    t.insertBefore(e, n || null)
}
function h(t) {
    t.parentNode && t.parentNode.removeChild(t)
}
function f(t) {
    return document.createElement(t)
}
function gn(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}
function V(t) {
    return document.createTextNode(t)
}
function g() {
    return V(" ")
}
function It() {
    return V("")
}
function K(t, e, n, s) {
    return t.addEventListener(e, n, s),
    () => t.removeEventListener(e, n, s)
}
function u(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function dt(t, e) {
    for (const n in e)
        u(t, n, e[n])
}
function pn(t) {
    return Array.from(t.childNodes)
}
function We(t, e) {
    e = "" + e,
    t.data !== e && (t.data = e)
}
function bn(t, e, n, s) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, s ? "important" : "")
}
function be(t, e, n) {
    t.classList.toggle(e, !!n)
}
function Yt(t, e, {bubbles: n=!1, cancelable: s=!1}={}) {
    return new CustomEvent(t,{
        detail: e,
        bubbles: n,
        cancelable: s
    })
}
function Xe(t, e) {
    return new t(e)
}
const Ze = new Map;
let Je = 0;
function vn(t) {
    let e = 5381
      , n = t.length;
    for (; n--; )
        e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}
function wn(t, e) {
    const n = {
        stylesheet: mn(e),
        rules: {}
    };
    return Ze.set(t, n),
    n
}
function ut(t, e, n, s, l, i, o, a=0) {
    const r = 16.666 / s;
    let d = `{
`;
    for (let _ = 0; _ <= 1; _ += r) {
        const A = e + (n - e) * i(_);
        d += _ * 100 + `%{${o(A, 1 - A)}}
`
    }
    const w = d + `100% {${o(n, 1 - n)}}
}`
      , m = `__svelte_${vn(w)}_${a}`
      , T = zt(t)
      , {stylesheet: v, rules: b} = Ze.get(T) || wn(T, t);
    b[m] || (b[m] = !0,
    v.insertRule(`@keyframes ${m} ${w}`, v.cssRules.length));
    const x = t.style.animation || "";
    return t.style.animation = `${x ? `${x}, ` : ""}${m} ${s}ms linear ${l}ms 1 both`,
    Je += 1,
    m
}
function yn(t, e) {
    const n = (t.style.animation || "").split(", ")
      , s = n.filter(e ? i => i.indexOf(e) < 0 : i => i.indexOf("__svelte") === -1)
      , l = n.length - s.length;
    l && (t.style.animation = s.join(", "),
    Je -= l,
    Je || _n())
}
function _n() {
    it( () => {
        Je || (Ze.forEach(t => {
            const {ownerNode: e} = t.stylesheet;
            e && h(e)
        }
        ),
        Ze.clear())
    }
    )
}
let Ie;
function Re(t) {
    Ie = t
}
function Qe() {
    if (!Ie)
        throw new Error("Function called outside component initialization");
    return Ie
}
function xn(t) {
    Qe().$$.on_mount.push(t)
}
function kn(t) {
    Qe().$$.on_destroy.push(t)
}
function Tn() {
    const t = Qe();
    return (e, n, {cancelable: s=!1}={}) => {
        const l = t.$$.callbacks[e];
        if (l) {
            const i = Yt(e, n, {
                cancelable: s
            });
            return l.slice().forEach(o => {
                o.call(t, i)
            }
            ),
            !i.defaultPrevented
        }
        return !0
    }
}
function Cn(t, e) {
    return Qe().$$.context.set(t, e),
    e
}
const Be = []
  , ze = [];
let $e = [];
const ft = []
  , An = Promise.resolve();
let st = !1;
function Mn() {
    st || (st = !0,
    An.then(Gt))
}
function Me(t) {
    $e.push(t)
}
const tt = new Set;
let Ee = 0;
function Gt() {
    if (Ee !== 0)
        return;
    const t = Ie;
    do {
        try {
            for (; Ee < Be.length; ) {
                const e = Be[Ee];
                Ee++,
                Re(e),
                On(e.$$)
            }
        } catch (e) {
            throw Be.length = 0,
            Ee = 0,
            e
        }
        for (Re(null),
        Be.length = 0,
        Ee = 0; ze.length; )
            ze.pop()();
        for (let e = 0; e < $e.length; e += 1) {
            const n = $e[e];
            tt.has(n) || (tt.add(n),
            n())
        }
        $e.length = 0
    } while (Be.length);
    for (; ft.length; )
        ft.pop()();
    st = !1,
    tt.clear(),
    Re(t)
}
function On(t) {
    if (t.fragment !== null) {
        t.update(),
        _e(t.before_update);
        const e = t.dirty;
        t.dirty = [-1],
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(Me)
    }
}
function Ln(t) {
    const e = []
      , n = [];
    $e.forEach(s => t.indexOf(s) === -1 ? e.push(s) : n.push(s)),
    n.forEach(s => s()),
    $e = e
}
let De;
function En() {
    return De || (De = Promise.resolve(),
    De.then( () => {
        De = null
    }
    )),
    De
}
function nt(t, e, n) {
    t.dispatchEvent(Yt(`${e ? "intro" : "outro"}${n}`))
}
const Ke = new Set;
let ye;
function Te() {
    ye = {
        r: 0,
        c: [],
        p: ye
    }
}
function Ce() {
    ye.r || _e(ye.c),
    ye = ye.p
}
function P(t, e) {
    t && t.i && (Ke.delete(t),
    t.i(e))
}
function S(t, e, n, s) {
    if (t && t.o) {
        if (Ke.has(t))
            return;
        Ke.add(t),
        ye.c.push( () => {
            Ke.delete(t),
            s && (n && t.d(1),
            s())
        }
        ),
        t.o(e)
    } else
        s && s()
}
const Pn = {
    duration: 0
};
function je(t, e, n, s) {
    let i = e(t, n, {
        direction: "both"
    }), o = s ? 0 : 1, a = null, r = null, d = null, w;
    function m() {
        d && yn(t, d)
    }
    function T(b, x) {
        const _ = b.b - o;
        return x *= Math.abs(_),
        {
            a: o,
            b: b.b,
            d: _,
            duration: x,
            start: b.start,
            end: b.start + x,
            group: b.group
        }
    }
    function v(b) {
        const {delay: x=0, duration: _=300, easing: A=jt, tick: j=q, css: L} = i || Pn
          , W = {
            start: dn() + x,
            b
        };
        b || (W.group = ye,
        ye.r += 1),
        "inert"in t && (b ? w !== void 0 && (t.inert = w) : (w = t.inert,
        t.inert = !0)),
        a || r ? r = W : (L && (m(),
        d = ut(t, o, b, _, x, A, L)),
        b && j(0, 1),
        a = T(W, _),
        Me( () => nt(t, b, "start")),
        un(M => {
            if (r && M > r.start && (a = T(r, _),
            r = null,
            nt(t, a.b, "start"),
            L && (m(),
            d = ut(t, o, a.b, a.duration, 0, A, i.css))),
            a) {
                if (M >= a.end)
                    j(o = a.b, 1 - o),
                    nt(t, a.b, "end"),
                    r || (a.b ? m() : --a.group.r || _e(a.group.c)),
                    a = null;
                else if (M >= a.start) {
                    const k = M - a.start;
                    o = a.a + a.d * A(k / a.duration),
                    j(o, 1 - o)
                }
            }
            return !!(a || r)
        }
        ))
    }
    return {
        run(b) {
            Ae(i) ? En().then( () => {
                i = i({
                    direction: b ? "in" : "out"
                }),
                v(b)
            }
            ) : v(b)
        },
        end() {
            m(),
            a = r = null
        }
    }
}
function Bn(t, e) {
    const n = {}
      , s = {}
      , l = {
        $$scope: 1
    };
    let i = t.length;
    for (; i--; ) {
        const o = t[i]
          , a = e[i];
        if (a) {
            for (const r in o)
                r in a || (s[r] = 1);
            for (const r in a)
                l[r] || (n[r] = a[r],
                l[r] = 1);
            t[i] = a
        } else
            for (const r in o)
                l[r] = 1
    }
    for (const o in s)
        o in n || (n[o] = void 0);
    return n
}
function F(t) {
    t && t.c()
}
function N(t, e, n) {
    const {fragment: s, after_update: l} = t.$$;
    s && s.m(e, n),
    Me( () => {
        const i = t.$$.on_mount.map(Wt).filter(Ae);
        t.$$.on_destroy ? t.$$.on_destroy.push(...i) : _e(i),
        t.$$.on_mount = []
    }
    ),
    l.forEach(Me)
}
function D(t, e) {
    const n = t.$$;
    n.fragment !== null && (Ln(n.after_update),
    _e(n.on_destroy),
    n.fragment && n.fragment.d(e),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function jn(t, e) {
    t.$$.dirty[0] === -1 && (Be.push(t),
    Mn(),
    t.$$.dirty.fill(0)),
    t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function ee(t, e, n, s, l, i, o=null, a=[-1]) {
    const r = Ie;
    Re(t);
    const d = t.$$ = {
        fragment: null,
        ctx: [],
        props: i,
        update: q,
        not_equal: l,
        bound: ct(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (r ? r.$$.context : [])),
        callbacks: ct(),
        dirty: a,
        skip_bound: !1,
        root: e.target || r.$$.root
    };
    o && o(d.root);
    let w = !1;
    if (d.ctx = n ? n(t, e.props || {}, (m, T, ...v) => {
        const b = v.length ? v[0] : T;
        return d.ctx && l(d.ctx[m], d.ctx[m] = b) && (!d.skip_bound && d.bound[m] && d.bound[m](b),
        w && jn(t, m)),
        T
    }
    ) : [],
    d.update(),
    w = !0,
    _e(d.before_update),
    d.fragment = s ? s(d.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            const m = pn(e.target);
            d.fragment && d.fragment.l(m),
            m.forEach(h)
        } else
            d.fragment && d.fragment.c();
        e.intro && P(t.$$.fragment),
        N(t, e.target, e.anchor),
        Gt()
    }
    Re(r)
}
class te {
    constructor() {
        et(this, "$$");
        et(this, "$$set")
    }
    $destroy() {
        D(this, 1),
        this.$destroy = q
    }
    $on(e, n) {
        if (!Ae(n))
            return q;
        const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return s.push(n),
        () => {
            const l = s.indexOf(n);
            l !== -1 && s.splice(l, 1)
        }
    }
    $set(e) {
        this.$$set && !an(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
const Sn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Sn);
function Wn(t) {
    let e;
    return {
        c() {
            e = f("nav"),
            e.innerHTML = '<div class="flex justify-between"><div class="flex"><divs class="font-semibold flex items-center text-slate-700 md:text-xl">Kalachuchi</divs></div> <div class="md:flex items-center space-x-7 hidden"><a href="#home" class="underline">Home</a> <a href="#background" class="underline">Background</a> <a href="#data" class="underline">Data</a> <a href="#methodology" class="underline">Methodology</a> <a href="#results" class="underline">Results</a> <a href="#team" class="underline">Team</a></div></div>',
            u(e, "class", "md:h-16 items-center rounded-lg bg-white shadow-sm px-8 mx-6 pt-5 pb-3")
        },
        m(n, s) {
            p(n, e, s)
        },
        p: q,
        i: q,
        o: q,
        d(n) {
            n && h(e)
        }
    }
}
class $n extends te {
    constructor(e) {
        super(),
        ee(this, e, null, Wn, J, {})
    }
}
function Hn(t) {
    let e, n, s = [{
        width: t[1]
    }, {
        height: t[1]
    }, {
        viewBox: t[2]
    }, {
        style: n = t[3] ? "color: " + t[3] + ";" : ""
    }, {
        "stroke-width": "0"
    }, {
        class: t[4]
    }, t[0].a, t[6], {
        xmlns: "http://www.w3.org/2000/svg"
    }], l = {};
    for (let i = 0; i < s.length; i += 1)
        l = St(l, s[i]);
    return {
        c() {
            e = gn("svg"),
            dt(e, l)
        },
        m(i, o) {
            p(i, e, o),
            e.innerHTML = t[5]
        },
        p(i, [o]) {
            o & 32 && (e.innerHTML = i[5]),
            dt(e, l = Bn(s, [o & 2 && {
                width: i[1]
            }, o & 2 && {
                height: i[1]
            }, o & 4 && {
                viewBox: i[2]
            }, o & 8 && n !== (n = i[3] ? "color: " + i[3] + ";" : "") && {
                style: n
            }, {
                "stroke-width": "0"
            }, o & 16 && {
                class: i[4]
            }, o & 1 && i[0].a, o & 64 && i[6], {
                xmlns: "http://www.w3.org/2000/svg"
            }]))
        },
        i: q,
        o: q,
        d(i) {
            i && h(e)
        }
    }
}
function qn(t, e, n) {
    let {src: s} = e, {size: l="1em"} = e, {viewBox: i=void 0} = e, {color: o="currentColor"} = e, {title: a=void 0} = e, {className: r=""} = e, d, w = {};
    return t.$$set = m => {
        "src"in m && n(0, s = m.src),
        "size"in m && n(1, l = m.size),
        "viewBox"in m && n(2, i = m.viewBox),
        "color"in m && n(3, o = m.color),
        "title"in m && n(7, a = m.title),
        "className"in m && n(4, r = m.className)
    }
    ,
    t.$$.update = () => {
        t.$$.dirty & 9 && (n(6, w = {}),
        o && (s.a.stroke !== "none" && n(6, w.stroke = "currentColor", w),
        s.a.fill !== "none" && n(6, w.fill = "currentColor", w))),
        t.$$.dirty & 129 && n(5, d = (a ? `<title>${a}</title>` : "") + s.c)
    }
    ,
    [s, l, i, o, r, d, w, a]
}
class Oe extends te {
    constructor(e) {
        super(),
        ee(this, e, qn, Hn, J, {
            src: 0,
            size: 1,
            viewBox: 2,
            color: 3,
            title: 7,
            className: 4
        })
    }
}
const mt = {
    a: {
        fill: "currentColor",
        viewBox: "0 0 16 16"
    },
    c: '<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"></path>'
}
  , Ut = {
    a: {
        fill: "currentColor",
        viewBox: "0 0 16 16"
    },
    c: '<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path>'
}
  , Nn = {
    a: {
        fill: "currentColor",
        viewBox: "0 0 16 16"
    },
    c: '<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"></path>'
};
function ht(t) {
    let e;
    return {
        c() {
            e = V(`Gender-based violence is a critical issue that affects communities\r
      worldwide, and social media platforms often become spaces where these\r
      experiences are shared. Our project focuses on analyzing narratives around\r
      gender-based violence within Filipino Reddit communities. By examining\r
      these discussions, we aim to identify patterns and insights that could\r
      inform better responses and preventative measures.`)
        },
        m(n, s) {
            p(n, e, s)
        },
        d(n) {
            n && h(e)
        }
    }
}
function gt(t) {
    let e;
    return {
        c() {
            e = V(`Gender-based violence is a pervasive and distressing issue that affects\r
      individuals across the globe. In the digital age, social media platforms\r
      have become pivotal spaces where people share their experiences and seek\r
      support. This project specifically examines narratives of gender-based\r
      violence within Filipino Reddit communities, aiming to uncover underlying\r
      patterns and trends that could inform more effective responses and\r
      prevention strategies.`)
        },
        m(n, s) {
            p(n, e, s)
        },
        d(n) {
            n && h(e)
        }
    }
}
function pt(t) {
    let e, n, s, l, i;
    return {
        c() {
            e = f("p"),
            e.textContent = "We hypothesize that:",
            n = g(),
            s = f("br"),
            l = g(),
            i = f("ul"),
            i.innerHTML = `<li><b>Content Variation</b> — Posts about gender-based violence will show
          significant variations in engagement and content type based on demographics
          and the time of posting.</li> <li><b>Vulnerability Indicators</b> — Certain times or demographics may be
          more vulnerable, as indicated by higher frequencies of reported incidents.</li> <li><b>Engagement Patterns</b> — Specific types of posts, perhaps those with
          more personal stories or calls for help, may receive higher community engagement,
          indicating a greater collective response.</li> <li><b>Keyword Patterns </b>— Some words may be more commonly used in
          certain contexts which could provide insights on the general outlook
          of the community on gender-based violence topics.</li>`
        },
        m(o, a) {
            p(o, e, a),
            p(o, n, a),
            p(o, s, a),
            p(o, l, a),
            p(o, i, a)
        },
        d(o) {
            o && (h(e),
            h(n),
            h(s),
            h(l),
            h(i))
        }
    }
}
function bt(t) {
    let e;
    return {
        c() {
            e = f("p"),
            e.textContent = `We propose to methodically analyze Reddit posts to uncover patterns and\r
        insights that can help in understanding and mitigating gender-based\r
        violence among the Filipino Reddit community. This includes examining\r
        the frequency of discussions, the context in which they occur, and the\r
        impact of community response on these posts.`
        },
        m(n, s) {
            p(n, e, s)
        },
        d(n) {
            n && h(e)
        }
    }
}
function Dn(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _, A, j, L, W, M, k, C, B, $, E, O = t[0] === "overview" && ht(), I = t[0] === "problem" && gt(), Y = t[0] === "hypothesis" && pt(), R = t[0] === "solution" && bt();
    return {
        c() {
            e = f("div"),
            n = f("h1"),
            n.textContent = "Our Research Focus",
            s = g(),
            l = f("div"),
            i = f("button"),
            o = V("Overview"),
            r = g(),
            d = f("button"),
            w = V("Problem"),
            T = g(),
            v = f("button"),
            b = V("Hypothesis"),
            _ = g(),
            A = f("button"),
            j = V("Solution"),
            W = g(),
            M = f("div"),
            O && O.c(),
            k = g(),
            I && I.c(),
            C = g(),
            Y && Y.c(),
            B = g(),
            R && R.c(),
            u(n, "class", "text-center text-4xl md:text-6xl background"),
            u(i, "class", a = z(t[0] === "overview" ? "active" : "") + " svelte-4fi98p"),
            u(d, "class", m = z(t[0] === "problem" ? "active" : "") + " svelte-4fi98p"),
            u(v, "class", x = z(t[0] === "hypothesis" ? "active" : "") + " svelte-4fi98p"),
            u(A, "class", L = z(t[0] === "solution" ? "active" : "") + " svelte-4fi98p"),
            u(l, "class", "nav-links text-center space-x-2 md:text-lg text-sm svelte-4fi98p"),
            u(M, "class", "pt-8 md:text-xl"),
            u(e, "class", "flex flex-col align-center mx-6 bg-white rounded-2xl py-16 px-8 md:px-48 space-y-2")
        },
        m(U, X) {
            p(U, e, X),
            c(e, n),
            c(e, s),
            c(e, l),
            c(l, i),
            c(i, o),
            c(l, r),
            c(l, d),
            c(d, w),
            c(l, T),
            c(l, v),
            c(v, b),
            c(l, _),
            c(l, A),
            c(A, j),
            c(e, W),
            c(e, M),
            O && O.m(M, null),
            c(M, k),
            I && I.m(M, null),
            c(M, C),
            Y && Y.m(M, null),
            c(M, B),
            R && R.m(M, null),
            $ || (E = [K(i, "click", t[2]), K(d, "click", t[3]), K(v, "click", t[4]), K(A, "click", t[5])],
            $ = !0)
        },
        p(U, [X]) {
            X & 1 && a !== (a = z(U[0] === "overview" ? "active" : "") + " svelte-4fi98p") && u(i, "class", a),
            X & 1 && m !== (m = z(U[0] === "problem" ? "active" : "") + " svelte-4fi98p") && u(d, "class", m),
            X & 1 && x !== (x = z(U[0] === "hypothesis" ? "active" : "") + " svelte-4fi98p") && u(v, "class", x),
            X & 1 && L !== (L = z(U[0] === "solution" ? "active" : "") + " svelte-4fi98p") && u(A, "class", L),
            U[0] === "overview" ? O || (O = ht(),
            O.c(),
            O.m(M, k)) : O && (O.d(1),
            O = null),
            U[0] === "problem" ? I || (I = gt(),
            I.c(),
            I.m(M, C)) : I && (I.d(1),
            I = null),
            U[0] === "hypothesis" ? Y || (Y = pt(),
            Y.c(),
            Y.m(M, B)) : Y && (Y.d(1),
            Y = null),
            U[0] === "solution" ? R || (R = bt(),
            R.c(),
            R.m(M, null)) : R && (R.d(1),
            R = null)
        },
        i: q,
        o: q,
        d(U) {
            U && h(e),
            O && O.d(),
            I && I.d(),
            Y && Y.d(),
            R && R.d(),
            $ = !1,
            _e(E)
        }
    }
}
function Fn(t, e, n) {
    let s = "overview";
    function l(d) {
        n(0, s = d)
    }
    return [s, l, () => l("overview"), () => l("problem"), () => l("hypothesis"), () => l("solution")]
}
class Rn extends te {
    constructor(e) {
        super(),
        ee(this, e, Fn, Dn, J, {})
    }
}
function vt(t) {
    let e, n, s, l, i, o, a, r, d;
    return {
        c() {
            e = f("h2"),
            e.textContent = "Average Engagement Over Time by Holidays",
            n = g(),
            s = f("div"),
            s.innerHTML = '<img src="image/plots/top_5_holidays.png" alt="A chart showing Average Engagement Over Time by Holidays" class="rounded-lg mx-auto md:w-10/12"/>',
            l = g(),
            i = f("p"),
            i.textContent = "Those with high engagement:",
            o = g(),
            a = f("ol"),
            a.innerHTML = `<li class="svelte-1dcowja"><strong>New Year&#39;s Day</strong> — There is a significant spike in engagement
            around New Year&#39;s Day, suggesting that this holiday prompts increased
            discussions or reporting related to gender-based violence.</li> <li class="svelte-1dcowja"><strong>Ninoy Aquino Day</strong> — Another prominent spike is seen around
            Ninoy Aquino Day, indicating a high level of engagement during this period.</li>`,
            r = g(),
            d = f("p"),
            d.textContent = `It is also important to note that by post-2020, there is an increase\r
          in the frequency and intensity of engagement spikes around holidays.\r
          This indicates growing awareness and community responsiveness to\r
          discussions around gender-based violence during these times.`,
            u(e, "class", "text-center text-4xl md:text-6xl pt-12 md:pb-8"),
            u(s, "class", "py-5"),
            u(a, "class", "svelte-1dcowja")
        },
        m(w, m) {
            p(w, e, m),
            p(w, n, m),
            p(w, s, m),
            p(w, l, m),
            p(w, i, m),
            p(w, o, m),
            p(w, a, m),
            p(w, r, m),
            p(w, d, m)
        },
        d(w) {
            w && (h(e),
            h(n),
            h(s),
            h(l),
            h(i),
            h(o),
            h(a),
            h(r),
            h(d))
        }
    }
}
function wt(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x;
    return {
        c() {
            e = f("h2"),
            e.textContent = "Posts per Year",
            n = g(),
            s = f("p"),
            s.textContent = `Our team has first explored the number of reddit posts per year that\r
          mentions gender-based violence keywords.`,
            l = g(),
            i = f("div"),
            i.innerHTML = '<img src="image/plots/posts_per_year.png" alt="A chart showing posts per year" class="rounded-lg mx-auto md:w-10/12"/>',
            o = g(),
            a = f("p"),
            a.textContent = `The chart shows a general increase in the number of posts from 2013 to\r
          2024. There is a noticeable spike in posts starting from 2020, with\r
          the highest number of posts recorded in 2023.`,
            r = g(),
            d = f("p"),
            d.textContent = `Based on the chart, we can infer the following detailed answer to the\r
          key question regarding temporal patterns:`,
            w = g(),
            m = f("ol"),
            m.innerHTML = `<li class="svelte-1dcowja"><strong>Gradual Increase Over Time</strong> — From 2013 to 2019, the
            number of posts regarding gender-based violence remains relatively low
            and stable, indicating that these discussions were not as prominent or
            not as frequently shared on Filipino Reddit communities during these
            years.</li> <li class="svelte-1dcowja"><strong>Significant Spike Starting 2020</strong> — Beginning in 2020,
            there is a marked increase in the number of posts. This could be attributed
            to various factors such as increased awareness, more active community
            engagement, or external societal events prompting more discussions on
            this topic. The year 2020 itself might have seen more discussions due
            to the global COVID-19 pandemic, which had significant social impacts,
            including increased domestic stress and potential increases in gender-based
            violence incidents.</li> <li class="svelte-1dcowja"><strong>Peak in 2023</strong> — The year 2023 records the highest number
            of posts. This peak suggests a continued and growing awareness and willingness
            to discuss gender-based violence on these platforms. It could also indicate
            that the community engagement has become stronger, or there might have
            been significant events or movements related to gender-based violence
            that prompted more discussions.</li>`,
            T = g(),
            v = f("p"),
            v.textContent = `The increasing trend of posts over the years, especially the spike\r
          starting in 2020, indicates that:`,
            b = g(),
            x = f("ol"),
            x.innerHTML = `<li class="svelte-1dcowja"><strong>Growing Awareness</strong> — There is increasing awareness and
            discussion about gender-based violence in Filipino Reddit communities.</li> <li class="svelte-1dcowja"><strong>Community Engagement</strong> — Community engagement on this
            issue has likely improved, as more people are willing to share their
            experiences and discuss this topic.</li> <li class="svelte-1dcowja"><strong>External Factors</strong> — External factors, such as the COVID-19
            pandemic or significant social movements, could have influenced the increase
            in posts.</li>`,
            u(e, "class", "text-center text-4xl md:text-6xl pt-12 md:pb-8"),
            u(i, "class", "py-5"),
            u(m, "class", "svelte-1dcowja"),
            u(x, "class", "svelte-1dcowja")
        },
        m(_, A) {
            p(_, e, A),
            p(_, n, A),
            p(_, s, A),
            p(_, l, A),
            p(_, i, A),
            p(_, o, A),
            p(_, a, A),
            p(_, r, A),
            p(_, d, A),
            p(_, w, A),
            p(_, m, A),
            p(_, T, A),
            p(_, v, A),
            p(_, b, A),
            p(_, x, A)
        },
        d(_) {
            _ && (h(e),
            h(n),
            h(s),
            h(l),
            h(i),
            h(o),
            h(a),
            h(r),
            h(d),
            h(w),
            h(m),
            h(T),
            h(v),
            h(b),
            h(x))
        }
    }
}
function yt(t) {
    let e, n, s, l, i, o, a;
    return {
        c() {
            e = f("h2"),
            e.textContent = "Monthly Analysis of Posts",
            n = g(),
            s = f("div"),
            s.innerHTML = '<img src="image/plots/posts_per_month.png" alt="A chart showing Monthly Analysis of Posts" class="rounded-lg mx-auto md:w-10/12"/>',
            l = g(),
            i = f("p"),
            i.textContent = "Based on the chart,",
            o = g(),
            a = f("ol"),
            a.innerHTML = `<li class="svelte-1dcowja"><strong>March and April</strong> — These months show a significant spike
            in the number of posts, indicating a higher level of discussion or reporting
            of gender-based violence during these periods.</li> <li class="svelte-1dcowja"><strong>June</strong> — This month has the lowest number of posts. The
            decrease in posts during June might be due to various factors such as
            less online activity during summer months, fewer awareness campaigns,
            or simply a lower incidence of discussions around this topic during this
            time.</li>`,
            u(e, "class", "text-center text-4xl md:text-6xl pt-12 md:pb-8"),
            u(s, "class", "py-5"),
            u(a, "class", "svelte-1dcowja")
        },
        m(r, d) {
            p(r, e, d),
            p(r, n, d),
            p(r, s, d),
            p(r, l, d),
            p(r, i, d),
            p(r, o, d),
            p(r, a, d)
        },
        d(r) {
            r && (h(e),
            h(n),
            h(s),
            h(l),
            h(i),
            h(o),
            h(a))
        }
    }
}
function _t(t) {
    let e, n, s, l, i, o, a;
    return {
        c() {
            e = f("h2"),
            e.textContent = "Daily Analysis of Posts",
            n = g(),
            s = f("div"),
            s.innerHTML = '<img src="image/plots/posts_per_day.png" alt="A chart showing Analysis of Posts Per Day" class="rounded-lg mx-auto md:w-10/12"/>',
            l = g(),
            i = f("p"),
            i.textContent = "Based on the chart,",
            o = g(),
            a = f("ol"),
            a.innerHTML = `<li class="svelte-1dcowja"><strong>First Few Days</strong> — The first few days of the month (1st,
            2nd, and 3rd) show a higher number of posts, with the 2nd day having
            the highest number. This indicates that users are more likely to share
            their experiences or report incidents at the beginning of the month.</li> <li class="svelte-1dcowja"><strong>End of the Month</strong> — The 31st day shows the lowest number
            of posts. This might be due to fewer days in some months, leading to
            lower overall activity on the 31st.</li> <li class="svelte-1dcowja"><strong>Mid-Month Consistency</strong> — The middle of the month (days
            10 to 20) shows relatively consistent activity, though not as high as
            the beginning of the month.</li>`,
            u(e, "class", "text-center text-4xl md:text-6xl pt-12 md:pb-8"),
            u(s, "class", "py-5"),
            u(a, "class", "svelte-1dcowja")
        },
        m(r, d) {
            p(r, e, d),
            p(r, n, d),
            p(r, s, d),
            p(r, l, d),
            p(r, i, d),
            p(r, o, d),
            p(r, a, d)
        },
        d(r) {
            r && (h(e),
            h(n),
            h(s),
            h(l),
            h(i),
            h(o),
            h(a))
        }
    }
}
function xt(t) {
    let e, n, s, l, i, o, a;
    return {
        c() {
            e = f("h2"),
            e.textContent = "Weekly Analysis of Posts",
            n = g(),
            s = f("div"),
            s.innerHTML = '<img src="image/plots/posts_per_day_of_week.png" alt="A chart showing Weekly Analysis of Posts" class="rounded-lg mx-auto md:w-10/12"/>',
            l = g(),
            i = f("p"),
            i.textContent = "Based on the chart,",
            o = g(),
            a = f("ul"),
            a.innerHTML = `<li class="svelte-1dcowja"><strong>High Activity Days on Monday and Tuesday</strong> — These days
            have the highest number of posts. This suggests that users are more active
            in sharing their experiences or discussing gender-based violence at the
            beginning of the workweek.</li> <li class="svelte-1dcowja"><strong>Moderate Activity on Wednesday to Thursday</strong> — The number
            of posts on these days is relatively stable and slightly lower than Monday
            and Tuesday, indicating consistent but moderate engagement.</li> <li class="svelte-1dcowja"><strong>Low Activity Days on Friday and Sunday</strong> — These days
            have the lowest number of posts. The slight drop on these days could
            be due to various factors such as end-of-week fatigue or fewer people
            engaging online during weekends.</li>`,
            u(e, "class", "text-center text-4xl md:text-6xl pt-12 md:pb-8"),
            u(s, "class", "py-5")
        },
        m(r, d) {
            p(r, e, d),
            p(r, n, d),
            p(r, s, d),
            p(r, l, d),
            p(r, i, d),
            p(r, o, d),
            p(r, a, d)
        },
        d(r) {
            r && (h(e),
            h(n),
            h(s),
            h(l),
            h(i),
            h(o),
            h(a))
        }
    }
}
function kt(t) {
    let e, n, s, l, i, o, a;
    return {
        c() {
            e = f("h2"),
            e.textContent = "Average Engagement Over Time by Gender",
            n = g(),
            s = f("div"),
            s.innerHTML = '<img src="image/plots/ave_engagement_over_time_gender.png" alt="A chart showing Weekly Analysis of Posts" class="rounded-lg mx-auto md:w-10/12"/>',
            l = g(),
            i = f("p"),
            i.textContent = "Those with high engagement:",
            o = g(),
            a = f("ul"),
            a.innerHTML = `<li class="svelte-1dcowja"><strong>Unknown Gender</strong> — The &quot;Unknown&quot; category shows significant
            spikes in engagement, especially before 2020. This suggests that posts
            where the gender of the poster is not specified tend to receive substantial
            engagement. This might be because these posts focus more on the content
            of the experience rather than the gender of the poster.</li> <li class="svelte-1dcowja"><strong>Female and Male</strong> — After 2020, both Female and Male groups
            show notable spikes in engagement. The engagement for these groups increases
            over time, indicating a growing interest and responsiveness to posts
            where the gender of the poster is specified.</li>`,
            u(e, "class", "text-center text-4xl md:text-6xl pt-12 md:pb-8"),
            u(s, "class", "py-5")
        },
        m(r, d) {
            p(r, e, d),
            p(r, n, d),
            p(r, s, d),
            p(r, l, d),
            p(r, i, d),
            p(r, o, d),
            p(r, a, d)
        },
        d(r) {
            r && (h(e),
            h(n),
            h(s),
            h(l),
            h(i),
            h(o),
            h(a))
        }
    }
}
function Tt(t) {
    let e, n, s, l, i, o, a, r, d, w, m;
    return {
        c() {
            e = f("h2"),
            e.textContent = "Average Engagement Over Time by Age",
            n = g(),
            s = f("div"),
            s.innerHTML = '<img src="image/plots/ave_engagement_over_time_age.png" alt="A chart showing Average Engagement Over Time by Holidays" class="rounded-lg mx-auto md:w-10/12"/>',
            l = g(),
            i = f("p"),
            i.textContent = "Those with high engagement:",
            o = g(),
            a = f("ol"),
            a.innerHTML = `<li class="svelte-1dcowja"><strong>Unknown Age Group</strong> — The &quot;Unknown&quot; category shows the
            highest and most frequent spikes in engagement. This suggests that posts
            where the age of the poster is not specified tend to receive more engagement.
            This could be because these posts may focus more on the content of the
            experience rather than the demographic details.</li> <li class="svelte-1dcowja"><strong>20-29 Age Group</strong> — This group shows several noticeable
            spikes in engagement, particularly in recent years (2022-2024). This
            indicates that posts from individuals in this age group are also receiving
            significant engagement, possibly due to their active presence on social
            media and the relevance of their experiences to the broader community.</li>`,
            r = g(),
            d = f("p"),
            d.textContent = "Those with moderate engagement:",
            w = g(),
            m = f("ol"),
            m.innerHTML = `<li class="svelte-1dcowja"><strong>30-39 and 50+ Age Groups</strong> — These age groups show moderate
            engagement with occasional spikes. This suggests that while these groups
            are active, their posts might not resonate as widely or consistently
            as those from the younger or unspecified age groups.</li> <li class="svelte-1dcowja"><strong>40-49 Age Group</strong> — This group has the least engagement,
            with almost no noticeable spikes. This could indicate that posts from
            this demographic receive less attention or that this age group is less
            active in discussing gender-based violence on Reddit</li>`,
            u(e, "class", "text-center text-4xl md:text-6xl pt-12 md:pb-8"),
            u(s, "class", "py-5"),
            u(a, "class", "svelte-1dcowja"),
            u(m, "class", "svelte-1dcowja")
        },
        m(T, v) {
            p(T, e, v),
            p(T, n, v),
            p(T, s, v),
            p(T, l, v),
            p(T, i, v),
            p(T, o, v),
            p(T, a, v),
            p(T, r, v),
            p(T, d, v),
            p(T, w, v),
            p(T, m, v)
        },
        d(T) {
            T && (h(e),
            h(n),
            h(s),
            h(l),
            h(i),
            h(o),
            h(a),
            h(r),
            h(d),
            h(w),
            h(m))
        }
    }
}
function zn(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _, A, j, L, W, M, k, C, B, $, E, O, I, Y, R, U, X, ne, me, H, Q, ge, ue, de, he, G, xe, He, se = t[0] === "Holiday Engagement Trends" && vt(), ie = t[0] === "Number of Posts per Year" && wt(), le = t[0] === "MONTHLY ANALYSIS OF POSTS" && yt(), oe = t[0] === "Number of Posts per Day" && _t(), ae = t[0] === "Weekly Analysis" && xt(), re = t[0] === "Gender" && kt(), ce = t[0] === "Age" && Tt();
    return {
        c() {
            e = f("div"),
            n = f("div"),
            s = f("h2"),
            s.textContent = "EXPLORATORY DATA ANALYSIS",
            l = g(),
            i = f("div"),
            o = f("button"),
            a = V("HOLIDAY ENGAGEMENT TRENDS"),
            d = g(),
            w = f("button"),
            m = V("POST PER YEAR"),
            v = g(),
            b = f("button"),
            x = V("POST PER DAY"),
            A = g(),
            j = f("button"),
            L = V("MONTHLY ANALYSIS"),
            M = g(),
            k = f("button"),
            C = V("WEEKLY ANALYSIS"),
            $ = g(),
            E = f("button"),
            O = V("ENGAGEMENT BY GENDER"),
            Y = g(),
            R = f("button"),
            U = V("ENGAGEMENT BY AGE"),
            ne = g(),
            me = f("div"),
            H = f("div"),
            se && se.c(),
            Q = g(),
            ie && ie.c(),
            ge = g(),
            le && le.c(),
            ue = g(),
            oe && oe.c(),
            de = g(),
            ae && ae.c(),
            he = g(),
            re && re.c(),
            G = g(),
            ce && ce.c(),
            u(s, "class", "text-center md:text-left text-3xl pb-4"),
            u(o, "class", r = z(t[0] === "Holiday Engagement Trends" ? "active" : "") + " svelte-1dcowja"),
            u(w, "class", T = z(t[0] === "Number of Posts per Year" ? "active" : "") + " svelte-1dcowja"),
            u(b, "class", _ = z(t[0] === "Number of Posts per Day" ? "active" : "") + " svelte-1dcowja"),
            u(j, "class", W = z(t[0] === "MONTHLY ANALYSIS OF POSTS" ? "active" : "") + " svelte-1dcowja"),
            u(k, "class", B = z(t[0] === "Weekly Analysis" ? "active" : "") + " svelte-1dcowja"),
            u(E, "class", I = z(t[0] === "Gender" ? "active" : "") + " svelte-1dcowja"),
            u(R, "class", X = z(t[0] === "Age" ? "active" : "") + " svelte-1dcowja"),
            u(i, "class", "nav-links md:text-right text-center gap-4 svelte-1dcowja"),
            u(n, "class", "md:flex justify-between items-baseline pb-3"),
            u(H, "class", "md:pt-20 md:px-20 space-y-4"),
            u(me, "class", "md:text-xl"),
            u(e, "class", "flex flex-col align-center mx-6 bg-white rounded-2xl px-12 space-y-2 py-12")
        },
        m(Z, pe) {
            p(Z, e, pe),
            c(e, n),
            c(n, s),
            c(n, l),
            c(n, i),
            c(i, o),
            c(o, a),
            c(i, d),
            c(i, w),
            c(w, m),
            c(i, v),
            c(i, b),
            c(b, x),
            c(i, A),
            c(i, j),
            c(j, L),
            c(i, M),
            c(i, k),
            c(k, C),
            c(i, $),
            c(i, E),
            c(E, O),
            c(i, Y),
            c(i, R),
            c(R, U),
            c(e, ne),
            c(e, me),
            c(me, H),
            se && se.m(H, null),
            c(H, Q),
            ie && ie.m(H, null),
            c(H, ge),
            le && le.m(H, null),
            c(H, ue),
            oe && oe.m(H, null),
            c(H, de),
            ae && ae.m(H, null),
            c(H, he),
            re && re.m(H, null),
            c(H, G),
            ce && ce.m(H, null),
            xe || (He = [K(o, "click", t[2]), K(w, "click", t[3]), K(b, "click", t[4]), K(j, "click", t[5]), K(k, "click", t[6]), K(E, "click", t[7]), K(R, "click", t[8])],
            xe = !0)
        },
        p(Z, [pe]) {
            pe & 1 && r !== (r = z(Z[0] === "Holiday Engagement Trends" ? "active" : "") + " svelte-1dcowja") && u(o, "class", r),
            pe & 1 && T !== (T = z(Z[0] === "Number of Posts per Year" ? "active" : "") + " svelte-1dcowja") && u(w, "class", T),
            pe & 1 && _ !== (_ = z(Z[0] === "Number of Posts per Day" ? "active" : "") + " svelte-1dcowja") && u(b, "class", _),
            pe & 1 && W !== (W = z(Z[0] === "MONTHLY ANALYSIS OF POSTS" ? "active" : "") + " svelte-1dcowja") && u(j, "class", W),
            pe & 1 && B !== (B = z(Z[0] === "Weekly Analysis" ? "active" : "") + " svelte-1dcowja") && u(k, "class", B),
            pe & 1 && I !== (I = z(Z[0] === "Gender" ? "active" : "") + " svelte-1dcowja") && u(E, "class", I),
            pe & 1 && X !== (X = z(Z[0] === "Age" ? "active" : "") + " svelte-1dcowja") && u(R, "class", X),
            Z[0] === "Holiday Engagement Trends" ? se || (se = vt(),
            se.c(),
            se.m(H, Q)) : se && (se.d(1),
            se = null),
            Z[0] === "Number of Posts per Year" ? ie || (ie = wt(),
            ie.c(),
            ie.m(H, ge)) : ie && (ie.d(1),
            ie = null),
            Z[0] === "MONTHLY ANALYSIS OF POSTS" ? le || (le = yt(),
            le.c(),
            le.m(H, ue)) : le && (le.d(1),
            le = null),
            Z[0] === "Number of Posts per Day" ? oe || (oe = _t(),
            oe.c(),
            oe.m(H, de)) : oe && (oe.d(1),
            oe = null),
            Z[0] === "Weekly Analysis" ? ae || (ae = xt(),
            ae.c(),
            ae.m(H, he)) : ae && (ae.d(1),
            ae = null),
            Z[0] === "Gender" ? re || (re = kt(),
            re.c(),
            re.m(H, G)) : re && (re.d(1),
            re = null),
            Z[0] === "Age" ? ce || (ce = Tt(),
            ce.c(),
            ce.m(H, null)) : ce && (ce.d(1),
            ce = null)
        },
        i: q,
        o: q,
        d(Z) {
            Z && h(e),
            se && se.d(),
            ie && ie.d(),
            le && le.d(),
            oe && oe.d(),
            ae && ae.d(),
            re && re.d(),
            ce && ce.d(),
            xe = !1,
            _e(He)
        }
    }
}
function In(t, e, n) {
    let s = "Holiday Engagement Trends";
    function l(T) {
        n(0, s = T)
    }
    return [s, l, () => l("Holiday Engagement Trends"), () => l("Number of Posts per Year"), () => l("Number of Posts per Day"), () => l("MONTHLY ANALYSIS OF POSTS"), () => l("Weekly Analysis"), () => l("Gender"), () => l("Age")]
}
class Yn extends te {
    constructor(e) {
        super(),
        ee(this, e, In, zn, J, {})
    }
}
function Gn(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v;
    return {
        c() {
            e = f("a"),
            n = f("div"),
            s = f("p"),
            l = V(t[0]),
            i = g(),
            o = f("p"),
            a = V(t[1]),
            r = g(),
            d = f("div"),
            w = f("p"),
            m = V(t[2]),
            T = g(),
            v = f("p"),
            v.textContent = "Members",
            u(s, "class", "font-semibold"),
            u(n, "class", "w-32"),
            u(w, "class", "font-bold text-lg text-slate-700"),
            u(d, "class", ""),
            u(e, "href", t[3]),
            u(e, "target", "_blank"),
            u(e, "class", "flex flex-col justify-between rounded-lg px-4 py-4 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100")
        },
        m(b, x) {
            p(b, e, x),
            c(e, n),
            c(n, s),
            c(s, l),
            c(n, i),
            c(n, o),
            c(o, a),
            c(e, r),
            c(e, d),
            c(d, w),
            c(w, m),
            c(d, T),
            c(d, v)
        },
        p(b, [x]) {
            x & 1 && We(l, b[0]),
            x & 2 && We(a, b[1]),
            x & 4 && We(m, b[2]),
            x & 8 && u(e, "href", b[3])
        },
        i: q,
        o: q,
        d(b) {
            b && h(e)
        }
    }
}
function Un(t, e, n) {
    let {title: s} = e
      , {description: l} = e
      , {members: i} = e
      , {link: o} = e;
    return t.$$set = a => {
        "title"in a && n(0, s = a.title),
        "description"in a && n(1, l = a.description),
        "members"in a && n(2, i = a.members),
        "link"in a && n(3, o = a.link)
    }
    ,
    [s, l, i, o]
}
class Fe extends te {
    constructor(e) {
        super(),
        ee(this, e, Un, Gn, J, {
            title: 0,
            description: 1,
            members: 2,
            link: 3
        })
    }
}
function Vn(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _, A, j, L, W, M, k, C, B, $, E;
    return a = new Fe({
        props: {
            title: "r/OffmychestPH",
            description: "A Filipino community where we work to make it a safe space in which you can unload your burdens, as well as celebrate your wins and milestones.",
            members: "556k",
            link: "https://www.reddit.com/r/OffmychestPH/"
        }
    }),
    d = new Fe({
        props: {
            title: "r/MentalHealthPH",
            description: "A community of Filipinos here and abroad to find support, share stories, discuss mental health issues and more.",
            members: "49K",
            link: "https://www.reddit.com/r/MentalHealthPH/"
        }
    }),
    m = new Fe({
        props: {
            title: "r/Philippines",
            description: "A subreddit for the Philippines and all things Filipino!",
            members: "1.9M",
            link: "https://www.reddit.com/r/Philippines/"
        }
    }),
    v = new Fe({
        props: {
            title: "r/relationship_advicePH",
            description: "Need advice with your relationship? Whether it's romance, friendship, family, co-workers, or basic human interaction: we're here to help. ",
            members: "134K",
            link: "https://www.reddit.com/r/relationship_advicePH/"
        }
    }),
    x = new Fe({
        props: {
            title: "r/alasjuicy",
            description: "NSFW stories and confessions from Filipino redditors",
            members: "263K",
            link: "https://www.reddit.com/r/alasjuicy/"
        }
    }),
    {
        c() {
            e = f("div"),
            n = f("h2"),
            n.textContent = "Description of the Data Set",
            s = g(),
            l = f("p"),
            l.textContent = `The dataset consists of Reddit posts collected from the following\r
    subreddits:`,
            i = g(),
            o = f("div"),
            F(a.$$.fragment),
            r = g(),
            F(d.$$.fragment),
            w = g(),
            F(m.$$.fragment),
            T = g(),
            F(v.$$.fragment),
            b = g(),
            F(x.$$.fragment),
            _ = g(),
            A = f("h2"),
            A.textContent = "Data Collection Process",
            j = g(),
            L = f("p"),
            L.textContent = `The posts were filtered based on specific search inputs related to different\r
    forms of gender-based violence. The search inputs used are as follows:`,
            W = g(),
            M = f("div"),
            M.innerHTML = '<a href="https://github.com/cessbub/cs132-project/tree/main/dataset" target="_blank" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">abused</a> <a href="https://github.com/cessbub/cs132-project/tree/main/dataset" target="_blank" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">sexual harassment</a> <a href="https://github.com/cessbub/cs132-project/tree/main/dataset" target="_blank" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">Cyberbullying</a> <a href="https://github.com/cessbub/cs132-project/tree/main/dataset" target="_blank" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">domestic violence</a> <a href="https://github.com/cessbub/cs132-project/tree/main/dataset" target="_blank" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">emotional abuse</a> <a href="https://github.com/cessbub/cs132-project/tree/main/dataset" target="_blank" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">physical abuse</a> <a href="https://github.com/cessbub/cs132-project/tree/main/dataset" target="_blank" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">unsolicited pics</a> <a href="https://github.com/cessbub/cs132-project/tree/main/dataset" target="_blank" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">stalking</a>',
            k = g(),
            C = f("p"),
            C.textContent = "The originally scraped dataset contains:",
            B = g(),
            $ = f("ul"),
            $.innerHTML = "<li><strong>title</strong>: The title of the post.</li> <li><strong>body</strong>: The main content of the post.</li> <li><strong>link</strong>: The link URL that directs to the post.</li> <li><strong>author</strong>: Author of the post</li> <li><strong>created</strong>: Date when the post was created.</li> <li><strong>subreddit</strong>: The subreddit from which the post originated.</li> <li><strong>searchinput</strong>: The keyword used for the search input.</li>",
            u(n, "class", "text-4xl"),
            u(o, "class", "pb-1 sbarthin flex text-xs gap-2 font overflow-x-auto"),
            u(A, "class", "text-4xl"),
            u(M, "class", "flex flex-wrap text-xs gap-2 font"),
            u(C, "class", "mb-4"),
            u($, "class", "list-disc list-inside space-y-1"),
            u(e, "class", "md:w-full w-[88vw] bg-white px-12 py-14 rounded-lg shadow-lg mt-16 space-y-4")
        },
        m(O, I) {
            p(O, e, I),
            c(e, n),
            c(e, s),
            c(e, l),
            c(e, i),
            c(e, o),
            N(a, o, null),
            c(o, r),
            N(d, o, null),
            c(o, w),
            N(m, o, null),
            c(o, T),
            N(v, o, null),
            c(o, b),
            N(x, o, null),
            c(e, _),
            c(e, A),
            c(e, j),
            c(e, L),
            c(e, W),
            c(e, M),
            c(e, k),
            c(e, C),
            c(e, B),
            c(e, $),
            E = !0
        },
        p: q,
        i(O) {
            E || (P(a.$$.fragment, O),
            P(d.$$.fragment, O),
            P(m.$$.fragment, O),
            P(v.$$.fragment, O),
            P(x.$$.fragment, O),
            E = !0)
        },
        o(O) {
            S(a.$$.fragment, O),
            S(d.$$.fragment, O),
            S(m.$$.fragment, O),
            S(v.$$.fragment, O),
            S(x.$$.fragment, O),
            E = !1
        },
        d(O) {
            O && h(e),
            D(a),
            D(d),
            D(m),
            D(v),
            D(x)
        }
    }
}
class Kn extends te {
    constructor(e) {
        super(),
        ee(this, e, null, Vn, J, {})
    }
}
const Xn = {
    a: {
        viewBox: "0 0 512 512"
    },
    c: '<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>'
}
  , Zn = {
    a: {
        viewBox: "0 0 512 512"
    },
    c: '<path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>'
};
function Ct(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v;
    return {
        c() {
            e = f("h3"),
            e.textContent = "2. Handling Missing Values:",
            n = g(),
            s = f("ul"),
            s.innerHTML = `<li>We first identify columns with missing values. In our dataset, the
        &#39;body&#39; field sometimes lacks data due to deleted or removed posts.</li> <li>For fields essential to our analysis like &#39;body&#39;, we remove entries
        where this data is missing to maintain the integrity of our analysis.</li>`,
            l = g(),
            i = f("h3"),
            i.textContent = "3. Tokenization and Removal of Stop Words",
            o = g(),
            a = f("ul"),
            a.innerHTML = `<li>We break down the text into individual words or tokens to analyze the
        frequency and presence of certain terms related to gender-based
        violence.</li> <li>Common English words that do not contribute to our specific analysis
        (such as &#39;the&#39;, &#39;is&#39;, &#39;at&#39;) are removed using a predefined list from the
        NLTK library.</li>`,
            r = g(),
            d = f("h3"),
            d.textContent = "4. Feature Engineering",
            w = g(),
            m = f("ul"),
            m.innerHTML = `<li>Where available, we extract age and gender information mentioned within
        the post to analyze demographic patterns.</li> <li>We derive several time-related features from the &#39;created&#39; timestamp,
        including year, month, day, and time of day, to explore trends over
        time.</li> <li>We calculate the length of each post after cleaning to quantify the
        amount of content and analyze its relation to user engagement.</li>`,
            T = g(),
            v = f("div"),
            v.innerHTML = `<h3 class="font-normal tracking-wide">5. Categorization of Data</h3> <p>Using the initial search inputs used to scrape data, each post is tagged
        with keywords that represent the type of violence discussed, aiding in
        categorical analysis.</p> <h3 class="font-normal tracking-wide">6. Engagement Metrics</h3> <ul><li>We normalize upvotes by the average upvotes per month to identify
          posts that have unusually high engagement relative to typical
          subreddit activity.</li> <li>Considering the size of each subreddit, we calculate upvotes per
          capita to determine engagement efficiency relative to the community
          size.</li></ul> <h3 class="font-normal tracking-wide">7. Outlier Detection</h3> <p>While we recognize that outliers can skew data analysis, they often
        contain valuable insights about extreme cases or highly impactful posts.
        We examine these outliers to understand their context and decide on a
        case-by-case basis whether to include them in the final analysis.</p>`,
            u(e, "class", "font-normal tracking-wide"),
            u(i, "class", "font-normal tracking-wide"),
            u(d, "class", "font-normal tracking-wide"),
            u(v, "id", "more-content"),
            bn(v, "display", "none")
        },
        m(b, x) {
            p(b, e, x),
            p(b, n, x),
            p(b, s, x),
            p(b, l, x),
            p(b, i, x),
            p(b, o, x),
            p(b, a, x),
            p(b, r, x),
            p(b, d, x),
            p(b, w, x),
            p(b, m, x),
            p(b, T, x),
            p(b, v, x)
        },
        d(b) {
            b && (h(e),
            h(n),
            h(s),
            h(l),
            h(i),
            h(o),
            h(a),
            h(r),
            h(d),
            h(w),
            h(m),
            h(T),
            h(v))
        }
    }
}
function At(t) {
    let e, n;
    return e = new Oe({
        props: {
            src: Xn
        }
    }),
    {
        c() {
            F(e.$$.fragment)
        },
        m(s, l) {
            N(e, s, l),
            n = !0
        },
        i(s) {
            n || (P(e.$$.fragment, s),
            n = !0)
        },
        o(s) {
            S(e.$$.fragment, s),
            n = !1
        },
        d(s) {
            D(e, s)
        }
    }
}
function Mt(t) {
    let e, n;
    return e = new Oe({
        props: {
            src: Zn
        }
    }),
    {
        c() {
            F(e.$$.fragment)
        },
        m(s, l) {
            N(e, s, l),
            n = !0
        },
        i(s) {
            n || (P(e.$$.fragment, s),
            n = !0)
        },
        o(s) {
            S(e.$$.fragment, s),
            n = !1
        },
        d(s) {
            D(e, s)
        }
    }
}
function Jn(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _ = t[0] ? "Read Less" : "Read More", A, j, L, W, M = t[0] === !0 && Ct(), k = t[0] === !1 && At(), C = t[0] === !0 && Mt();
    return {
        c() {
            e = f("div"),
            n = f("h2"),
            n.textContent = "Preprocessing",
            s = g(),
            l = f("p"),
            l.textContent = `Our preprocessing efforts aim to refine the raw dataset into a clean,\r
    analyzable format that supports reliable data analysis and insight\r
    generation. This process ensures data quality and facilitates effective data\r
    exploration.`,
            i = g(),
            o = f("h2"),
            o.textContent = "Steps in Preprocessing",
            a = g(),
            r = f("h3"),
            r.textContent = "1. Cleaning Text Data",
            d = g(),
            w = f("ul"),
            w.innerHTML = `<li>We strip out irrelevant characters, such as URLs, special characters, and
      formatting elements from the posts&#39; titles and bodies to focus purely on
      textual content.</li> <li>Text data is converted to a uniform case (all lower case) to ensure
      consistency across all text entries.</li>`,
            m = g(),
            M && M.c(),
            T = g(),
            v = f("button"),
            k && k.c(),
            b = g(),
            C && C.c(),
            x = g(),
            A = V(_),
            u(n, "class", "text-4xl"),
            u(o, "class", "text-2xl"),
            u(r, "class", "font-normal tracking-wide"),
            u(v, "class", "hover:text-primary text-lg text-slate-700 downicon flex items-center justify-center svelte-1twrjfq"),
            u(e, "class", "bg-white px-12 py-14 rounded-lg shadow-lg mt-16 space-y-4")
        },
        m(B, $) {
            p(B, e, $),
            c(e, n),
            c(e, s),
            c(e, l),
            c(e, i),
            c(e, o),
            c(e, a),
            c(e, r),
            c(e, d),
            c(e, w),
            c(e, m),
            M && M.m(e, null),
            c(e, T),
            c(e, v),
            k && k.m(v, null),
            c(v, b),
            C && C.m(v, null),
            c(v, x),
            c(v, A),
            j = !0,
            L || (W = K(v, "click", t[1]),
            L = !0)
        },
        p(B, [$]) {
            B[0] === !0 ? M || (M = Ct(),
            M.c(),
            M.m(e, T)) : M && (M.d(1),
            M = null),
            B[0] === !1 ? k ? $ & 1 && P(k, 1) : (k = At(),
            k.c(),
            P(k, 1),
            k.m(v, b)) : k && (Te(),
            S(k, 1, 1, () => {
                k = null
            }
            ),
            Ce()),
            B[0] === !0 ? C ? $ & 1 && P(C, 1) : (C = Mt(),
            C.c(),
            P(C, 1),
            C.m(v, x)) : C && (Te(),
            S(C, 1, 1, () => {
                C = null
            }
            ),
            Ce()),
            (!j || $ & 1) && _ !== (_ = B[0] ? "Read Less" : "Read More") && We(A, _)
        },
        i(B) {
            j || (P(k),
            P(C),
            j = !0)
        },
        o(B) {
            S(k),
            S(C),
            j = !1
        },
        d(B) {
            B && h(e),
            M && M.d(),
            k && k.d(),
            C && C.d(),
            L = !1,
            W()
        }
    }
}
function Qn(t, e, n) {
    let s = !1;
    return [s, () => n(0, s = !s)]
}
class es extends te {
    constructor(e) {
        super(),
        ee(this, e, Qn, Jn, J, {})
    }
}
function ts(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _, A, j, L, W, M, k, C, B;
    return d = new Oe({
        props: {
            src: mt
        }
    }),
    b = new Oe({
        props: {
            src: mt
        }
    }),
    M = new Kn({}),
    C = new es({}),
    {
        c() {
            e = f("div"),
            n = f("div"),
            s = f("h1"),
            s.textContent = "About Our Dataset",
            l = g(),
            i = f("p"),
            i.textContent = `The dataset was collected by scraping posts from Philippine subreddits and\r
      using keywords related to various forms of gender-based violence for the\r
      search inputs. The scraped data had 1,900+ rows in total.`,
            o = g(),
            a = f("div"),
            r = f("a"),
            F(d.$$.fragment),
            w = g(),
            m = f("span"),
            m.textContent = "preprocessed_dataset.csv",
            T = g(),
            v = f("a"),
            F(b.$$.fragment),
            x = g(),
            _ = f("span"),
            _.textContent = "ph_holidays.csv",
            A = g(),
            j = f("div"),
            L = f("div"),
            L.innerHTML = '<a href="https://docs.google.com/spreadsheets/d/1xt632YneUFUZrn8Lc8KlxfnWZYtL25YuKSansk992tc/edit?usp=sharing" class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300 rounded-md"><p class="mx-auto underline text-primary">EXPLORE DATASET</p></a> <a href="/" class="relative"><div class="flex flex-wrap content-center"><img src="image/DatasetTable.png" alt="A dataset containing different data" class="shadow-lg transition-opacity duration-300 hover:opacity-80 rounded-md"/></div></a>',
            W = g(),
            F(M.$$.fragment),
            k = g(),
            F(C.$$.fragment),
            u(s, "class", "text-4xl mb-4 pt-16"),
            u(i, "class", "text-xl mb-8"),
            u(r, "href", "data/preprocessed_dataset.csv"),
            u(r, "download", ""),
            u(r, "class", "rounded-full bg-gdark px-4 py-2 text-white ease-in-out duration-100 flex items-center justify-center space-x-2 hover:bg-slate-600 hover:shadow-lg"),
            u(v, "href", "data/ph_holidays.csv"),
            u(v, "class", "rounded-full bg-gdark px-4 py-2 text-white ease-in-out duration-100 flex items-center justify-center space-x-2 hover:bg-slate-600 hover:shadow-lg"),
            u(a, "class", "flex flex-wrap gap-4 mb-32"),
            u(n, "class", "md:w-5/12 text-xs md:sidebar rounded-2xl md:sticky md:top-0 py-4"),
            u(L, "class", "relative mb-8"),
            u(j, "class", "md:w-7/12"),
            u(e, "class", "md:flex flex-row items-start md:mx-6 rounded-2xl py-16 md:px-12 px-8 md:space-x-10 md:relative z-20 justify-between")
        },
        m($, E) {
            p($, e, E),
            c(e, n),
            c(n, s),
            c(n, l),
            c(n, i),
            c(n, o),
            c(n, a),
            c(a, r),
            N(d, r, null),
            c(r, w),
            c(r, m),
            c(a, T),
            c(a, v),
            N(b, v, null),
            c(v, x),
            c(v, _),
            c(e, A),
            c(e, j),
            c(j, L),
            c(j, W),
            N(M, j, null),
            c(j, k),
            N(C, j, null),
            B = !0
        },
        p: q,
        i($) {
            B || (P(d.$$.fragment, $),
            P(b.$$.fragment, $),
            P(M.$$.fragment, $),
            P(C.$$.fragment, $),
            B = !0)
        },
        o($) {
            S(d.$$.fragment, $),
            S(b.$$.fragment, $),
            S(M.$$.fragment, $),
            S(C.$$.fragment, $),
            B = !1
        },
        d($) {
            $ && h(e),
            D(d),
            D(b),
            D(M),
            D(C)
        }
    }
}
class ns extends te {
    constructor(e) {
        super(),
        ee(this, e, null, ts, J, {})
    }
}
function ss(t) {
    let e;
    return {
        c() {
            e = f("div"),
            e.innerHTML = `<h1 class="pt-4 md:text-7xl gradient m-auto gradient-light pb-4">MEET THE TEAM</h1> <div class="flex flex-col sm:flex-row bg-white flex-row md:w-100vw justify-center gap-4 bg-[#fffcf8] rounded-lg md:w-9/12 w-10/12 m-auto p-6"><div class="md:w-8/12 flex flex-col text-gdark"><h2 class="mb-3 text-[2em] text-left"><span class="gradient-dark">Arian Rey</span>🐣</h2> <p class="md:text-lg text-left">Nice to meet you! I&#39;m Arian Rey<br/><br/>A BS Computer Science student
        at the University of the Philippines - Diliman, specializing in UI/UX
        design, frontend and software development. Currently, I am passionate
        about developing
        <a class="cutelink" href="https://www.facebook.com/100000211194115/videos/1483317855906156/">Keller</a>, a browser extension that helps low-vision and blind people generate
        alternative text for images. With this project, I aim to raise awareness
        and increase efforts to make technology more accessible in the
        Philippines.
        <br/><br/>
        I&#39;ve also worked on other cool projects. If you&#39;re interested, please visit
        my website to check them out:
        <a class="cutelink" href="https://www.arianrey.com/" target="_blank">https://www.arianrey.com/</a></p></div> <div class="rounded-lg sm:w-4/12 sm:order-last order-first"><img class="rounded-2xl m-auto" src="./image/arianlong.png" alt="A girl smiling with a flower in her hair"/></div></div> <div class="flex flex-col sm:flex-row bg-white flex-row w-100vw justify-center gap-4 bg-[#fffcf8] rounded-lg md:w-9/12 w-10/12 m-auto p-6"><div class="md:w-5/12 flex flex-col text-gdark"><img class="rounded-2xl m-auto" src="./image/cess.png" alt="A girl smiling with a flower in her hair"/></div> <div class="md:w-10/12 flex flex-col text-gdark"><h2 class="mb-3 text-[2em] text-left"><span class="gradient-dark">Cess Ventures</span>🌸</h2> <p class="text-md text-left">Hey there! I&#39;m Cess 👋 My journey is at the exciting intersection of
        design and technology.
        <br/><br/>
        I wear many hats—currently a senior standing computer science student at
        UP Diliman, and offering freelance services on UI/UX design and others.
        <br/><br/>
        As a healthtech innovator, CEO and co-founder of VitalRadar, we aim to empower
        people with streamlined health management.
        <br/><br/>
        I find joy in using my skills to design and build solutions that enhance
        people&#39;s lives. I&#39;m a huge believer in the power of human-centered design
        in the potential of machine learning to shape a better future for you and
        me!
        <br/><br/>
        💻 portfolio:
        <a class="cutelink" href="https://princessventures.com/" target="_blank">https://princessventures.com/</a> <br/>
        🚀 github:
        <a class="cutelink" href="https://github.com/cessbub" target="_blank">https://github.com/cessbub</a> <br/>

        👩🏻‍💻 book a call:
        <a class="cutelink" href="https://calendly.com/cessventures/30-min-cal" target="_blank">https://calendly.com/cessventures/30-min-call</a> <br/>
        💌 email:
        <a class="cutelink" href="hello@princessventures.com" target="_blank">hello@princessventures.com</a></p></div></div> <div class="flex flex-col sm:flex-row bg-white flex-row w-100vw justify-center gap-4 bg-[#fffcf8] rounded-lg md:w-9/12 w-10/12 m-auto p-6"><div class="md:w-8/12 flex flex-col text-gdark"><h2 class="mb-3 text-[2em] text-left"><span class="gradient-dark">Christian Quinzon</span>🙉</h2> <p class="md:text-lg text-left">Hi I’m Chrissy! I&#39;m currently a BS Computer Science student at the
        University of the Philippines - Diliman, specializing in Natural
        Language Processing (NLP). I contributed to a published conference paper
        on training the PEGASUS large language model for summarizing COVID-19
        research papers.
        <br/><br/>
        I am also active in student organizations, having served as part of the executive
        committee and as finance head in several teams. I enjoy making music, experimenting
        with painting, sculpting, gaming, and building figurines.
        <br/><br/></p></div> <div class="rounded-lg sm:w-4/12 sm:order-last order-first"><img class="rounded-2xl m-auto" src="./image/chrissy.png" alt="A girl smiling with a flower in her hair"/></div></div>`,
            u(e, "class", "text-white text-center py-12 space-y-14")
        },
        m(n, s) {
            p(n, e, s)
        },
        p: q,
        i: q,
        o: q,
        d(n) {
            n && h(e)
        }
    }
}
class is extends te {
    constructor(e) {
        super(),
        ee(this, e, null, ss, J, {})
    }
}
const Pe = [];
function ls(t, e=q) {
    let n;
    const s = new Set;
    function l(a) {
        if (J(t, a) && (t = a,
        n)) {
            const r = !Pe.length;
            for (const d of s)
                d[1](),
                Pe.push(d, t);
            if (r) {
                for (let d = 0; d < Pe.length; d += 2)
                    Pe[d][0](Pe[d + 1]);
                Pe.length = 0
            }
        }
    }
    function i(a) {
        l(a(t))
    }
    function o(a, r=q) {
        const d = [a, r];
        return s.add(d),
        s.size === 1 && (n = e(l, i) || q),
        a(t),
        () => {
            s.delete(d),
            s.size === 0 && n && (n(),
            n = null)
        }
    }
    return {
        set: l,
        update: i,
        subscribe: o
    }
}
function os(t) {
    const e = t - 1;
    return e * e * e + 1
}
function as(t, {delay: e=0, duration: n=400, easing: s=jt}={}) {
    const l = +getComputedStyle(t).opacity;
    return {
        delay: e,
        duration: n,
        easing: s,
        css: i => `opacity: ${i * l}`
    }
}
function Ot(t, {delay: e=0, duration: n=400, easing: s=os, axis: l="y"}={}) {
    const i = getComputedStyle(t)
      , o = +i.opacity
      , a = l === "y" ? "height" : "width"
      , r = parseFloat(i[a])
      , d = l === "y" ? ["top", "bottom"] : ["left", "right"]
      , w = d.map(A => `${A[0].toUpperCase()}${A.slice(1)}`)
      , m = parseFloat(i[`padding${w[0]}`])
      , T = parseFloat(i[`padding${w[1]}`])
      , v = parseFloat(i[`margin${w[0]}`])
      , b = parseFloat(i[`margin${w[1]}`])
      , x = parseFloat(i[`border${w[0]}Width`])
      , _ = parseFloat(i[`border${w[1]}Width`]);
    return {
        delay: e,
        duration: n,
        easing: s,
        css: A => `overflow: hidden;opacity: ${Math.min(A * 20, 1) * o};${a}: ${A * r}px;padding-${d[0]}: ${A * m}px;padding-${d[1]}: ${A * T}px;margin-${d[0]}: ${A * v}px;margin-${d[1]}: ${A * b}px;border-${d[0]}-width: ${A * x}px;border-${d[1]}-width: ${A * _}px;`
    }
}
const {window: rs} = fn;
function Lt(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _, A, j, L = t[1].closeButton && Et(t);
    var W = t[2];
    function M(k, C) {
        return {}
    }
    return W && (o = Xe(W, M())),
    {
        c() {
            e = f("div"),
            n = f("div"),
            s = f("div"),
            L && L.c(),
            l = g(),
            i = f("div"),
            o && F(o.$$.fragment),
            u(i, "class", a = z(t[1].classContent) + " svelte-yxa4ka"),
            u(i, "style", t[9]),
            be(i, "content", !t[0]),
            u(s, "class", r = z(t[1].classWindow) + " svelte-yxa4ka"),
            u(s, "role", "dialog"),
            u(s, "aria-modal", "true"),
            u(s, "aria-label", d = t[1].ariaLabelledBy ? null : t[1].ariaLabel || null),
            u(s, "aria-labelledby", w = t[1].ariaLabelledBy || null),
            u(s, "style", t[8]),
            be(s, "window", !t[0]),
            u(n, "class", T = z(t[1].classWindowWrap) + " svelte-yxa4ka"),
            u(n, "style", t[7]),
            be(n, "wrap", !t[0]),
            u(e, "aria-hidden", "true"),
            u(e, "id", v = t[1].id),
            u(e, "class", b = z(t[1].classBg) + " svelte-yxa4ka"),
            u(e, "style", t[6]),
            be(e, "bg", !t[0])
        },
        m(k, C) {
            p(k, e, C),
            c(e, n),
            c(n, s),
            L && L.m(s, null),
            c(s, l),
            c(s, i),
            o && N(o, i, null),
            t[50](s),
            t[51](n),
            t[52](e),
            _ = !0,
            A || (j = [K(s, "introstart", function() {
                Ae(t[13]) && t[13].apply(this, arguments)
            }), K(s, "outrostart", function() {
                Ae(t[14]) && t[14].apply(this, arguments)
            }), K(s, "introend", function() {
                Ae(t[15]) && t[15].apply(this, arguments)
            }), K(s, "outroend", function() {
                Ae(t[16]) && t[16].apply(this, arguments)
            }), K(e, "mousedown", t[20]), K(e, "mouseup", t[21])],
            A = !0)
        },
        p(k, C) {
            if (t = k,
            t[1].closeButton ? L ? (L.p(t, C),
            C[0] & 2 && P(L, 1)) : (L = Et(t),
            L.c(),
            P(L, 1),
            L.m(s, l)) : L && (Te(),
            S(L, 1, 1, () => {
                L = null
            }
            ),
            Ce()),
            C[0] & 4 && W !== (W = t[2])) {
                if (o) {
                    Te();
                    const B = o;
                    S(B.$$.fragment, 1, 0, () => {
                        D(B, 1)
                    }
                    ),
                    Ce()
                }
                W ? (o = Xe(W, M()),
                F(o.$$.fragment),
                P(o.$$.fragment, 1),
                N(o, i, null)) : o = null
            }
            (!_ || C[0] & 2 && a !== (a = z(t[1].classContent) + " svelte-yxa4ka")) && u(i, "class", a),
            (!_ || C[0] & 512) && u(i, "style", t[9]),
            (!_ || C[0] & 3) && be(i, "content", !t[0]),
            (!_ || C[0] & 2 && r !== (r = z(t[1].classWindow) + " svelte-yxa4ka")) && u(s, "class", r),
            (!_ || C[0] & 2 && d !== (d = t[1].ariaLabelledBy ? null : t[1].ariaLabel || null)) && u(s, "aria-label", d),
            (!_ || C[0] & 2 && w !== (w = t[1].ariaLabelledBy || null)) && u(s, "aria-labelledby", w),
            (!_ || C[0] & 256) && u(s, "style", t[8]),
            (!_ || C[0] & 3) && be(s, "window", !t[0]),
            (!_ || C[0] & 2 && T !== (T = z(t[1].classWindowWrap) + " svelte-yxa4ka")) && u(n, "class", T),
            (!_ || C[0] & 128) && u(n, "style", t[7]),
            (!_ || C[0] & 3) && be(n, "wrap", !t[0]),
            (!_ || C[0] & 2 && v !== (v = t[1].id)) && u(e, "id", v),
            (!_ || C[0] & 2 && b !== (b = z(t[1].classBg) + " svelte-yxa4ka")) && u(e, "class", b),
            (!_ || C[0] & 64) && u(e, "style", t[6]),
            (!_ || C[0] & 3) && be(e, "bg", !t[0])
        },
        i(k) {
            _ || (P(L),
            o && P(o.$$.fragment, k),
            k && Me( () => {
                _ && (m || (m = je(s, t[12], t[1].transitionWindowProps, !0)),
                m.run(1))
            }
            ),
            k && Me( () => {
                _ && (x || (x = je(e, t[11], t[1].transitionBgProps, !0)),
                x.run(1))
            }
            ),
            _ = !0)
        },
        o(k) {
            S(L),
            o && S(o.$$.fragment, k),
            k && (m || (m = je(s, t[12], t[1].transitionWindowProps, !1)),
            m.run(0)),
            k && (x || (x = je(e, t[11], t[1].transitionBgProps, !1)),
            x.run(0)),
            _ = !1
        },
        d(k) {
            k && h(e),
            L && L.d(),
            o && D(o),
            t[50](null),
            k && m && m.end(),
            t[51](null),
            t[52](null),
            k && x && x.end(),
            A = !1,
            _e(j)
        }
    }
}
function Et(t) {
    let e, n, s, l, i;
    const o = [ds, cs]
      , a = [];
    function r(d, w) {
        return w[0] & 2 && (e = null),
        e == null && (e = !!d[17](d[1].closeButton)),
        e ? 0 : 1
    }
    return n = r(t, [-1, -1, -1]),
    s = a[n] = o[n](t),
    {
        c() {
            s.c(),
            l = It()
        },
        m(d, w) {
            a[n].m(d, w),
            p(d, l, w),
            i = !0
        },
        p(d, w) {
            let m = n;
            n = r(d, w),
            n === m ? a[n].p(d, w) : (Te(),
            S(a[m], 1, 1, () => {
                a[m] = null
            }
            ),
            Ce(),
            s = a[n],
            s ? s.p(d, w) : (s = a[n] = o[n](d),
            s.c()),
            P(s, 1),
            s.m(l.parentNode, l))
        },
        i(d) {
            i || (P(s),
            i = !0)
        },
        o(d) {
            S(s),
            i = !1
        },
        d(d) {
            d && h(l),
            a[n].d(d)
        }
    }
}
function cs(t) {
    let e, n, s, l;
    return {
        c() {
            e = f("button"),
            u(e, "class", n = z(t[1].classCloseButton) + " svelte-yxa4ka"),
            u(e, "aria-label", "Close modal"),
            u(e, "style", t[10]),
            u(e, "type", "button"),
            be(e, "close", !t[0])
        },
        m(i, o) {
            p(i, e, o),
            s || (l = K(e, "click", t[18]),
            s = !0)
        },
        p(i, o) {
            o[0] & 2 && n !== (n = z(i[1].classCloseButton) + " svelte-yxa4ka") && u(e, "class", n),
            o[0] & 1024 && u(e, "style", i[10]),
            o[0] & 3 && be(e, "close", !i[0])
        },
        i: q,
        o: q,
        d(i) {
            i && h(e),
            s = !1,
            l()
        }
    }
}
function ds(t) {
    let e, n, s;
    var l = t[1].closeButton;
    function i(o, a) {
        return {
            props: {
                onClose: o[18]
            }
        }
    }
    return l && (e = Xe(l, i(t))),
    {
        c() {
            e && F(e.$$.fragment),
            n = It()
        },
        m(o, a) {
            e && N(e, o, a),
            p(o, n, a),
            s = !0
        },
        p(o, a) {
            if (a[0] & 2 && l !== (l = o[1].closeButton)) {
                if (e) {
                    Te();
                    const r = e;
                    S(r.$$.fragment, 1, 0, () => {
                        D(r, 1)
                    }
                    ),
                    Ce()
                }
                l ? (e = Xe(l, i(o)),
                F(e.$$.fragment),
                P(e.$$.fragment, 1),
                N(e, n.parentNode, n)) : e = null
            }
        },
        i(o) {
            s || (e && P(e.$$.fragment, o),
            s = !0)
        },
        o(o) {
            e && S(e.$$.fragment, o),
            s = !1
        },
        d(o) {
            o && h(n),
            e && D(e, o)
        }
    }
}
function us(t) {
    let e, n, s, l, i = t[2] && Lt(t);
    const o = t[49].default
      , a = $t(o, t, t[48], null);
    return {
        c() {
            i && i.c(),
            e = g(),
            a && a.c()
        },
        m(r, d) {
            i && i.m(r, d),
            p(r, e, d),
            a && a.m(r, d),
            n = !0,
            s || (l = K(rs, "keydown", t[19]),
            s = !0)
        },
        p(r, d) {
            r[2] ? i ? (i.p(r, d),
            d[0] & 4 && P(i, 1)) : (i = Lt(r),
            i.c(),
            P(i, 1),
            i.m(e.parentNode, e)) : i && (Te(),
            S(i, 1, 1, () => {
                i = null
            }
            ),
            Ce()),
            a && a.p && (!n || d[1] & 131072) && Nt(a, o, r, r[48], n ? qt(o, r[48], d, null) : Dt(r[48]), null)
        },
        i(r) {
            n || (P(i),
            P(a, r),
            n = !0)
        },
        o(r) {
            S(i),
            S(a, r),
            n = !1
        },
        d(r) {
            r && h(e),
            i && i.d(r),
            a && a.d(r),
            s = !1,
            l()
        }
    }
}
function fs(t, e={}) {
    return function(s) {
        return new t({
            ...s,
            props: {
                ...e,
                ...s.props
            }
        })
    }
}
function ms(t, e, n) {
    let {$$slots: s={}, $$scope: l} = e;
    const i = Tn()
      , o = Cn
      , a = y => y.tabIndex >= 0 && !y.hidden && !y.disabled && y.style.display !== "none" && y.type !== "hidden" && !!(y.offsetWidth || y.offsetHeight || y.getClientRects().length);
    let {isTabbable: r=a} = e
      , {show: d=null} = e
      , {id: w=null} = e
      , {key: m="simple-modal"} = e
      , {ariaLabel: T=null} = e
      , {ariaLabelledBy: v=null} = e
      , {closeButton: b=!0} = e
      , {closeOnEsc: x=!0} = e
      , {closeOnOuterClick: _=!0} = e
      , {styleBg: A={}} = e
      , {styleWindowWrap: j={}} = e
      , {styleWindow: L={}} = e
      , {styleContent: W={}} = e
      , {styleCloseButton: M={}} = e
      , {classBg: k=null} = e
      , {classWindowWrap: C=null} = e
      , {classWindow: B=null} = e
      , {classContent: $=null} = e
      , {classCloseButton: E=null} = e
      , {unstyled: O=!1} = e
      , {setContext: I=o} = e
      , {transitionBg: Y=as} = e
      , {transitionBgProps: R={
        duration: 250
    }} = e
      , {transitionWindow: U=Y} = e
      , {transitionWindowProps: X=R} = e
      , {disableFocusTrap: ne=!1} = e;
    const me = {
        id: w,
        ariaLabel: T,
        ariaLabelledBy: v,
        closeButton: b,
        closeOnEsc: x,
        closeOnOuterClick: _,
        styleBg: A,
        styleWindowWrap: j,
        styleWindow: L,
        styleContent: W,
        styleCloseButton: M,
        classBg: k,
        classWindowWrap: C,
        classWindow: B,
        classContent: $,
        classCloseButton: E,
        transitionBg: Y,
        transitionBgProps: R,
        transitionWindow: U,
        transitionWindowProps: X,
        disableFocusTrap: ne,
        isTabbable: r,
        unstyled: O
    };
    let H = {
        ...me
    }, Q = null, ge, ue, de, he, G, xe, He, se, ie, le, oe, ae, re, ce, Z;
    const pe = y => y.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase()
      , qe = y => y ? Object.keys(y).reduce( (Ne, ve) => `${Ne}; ${pe(ve)}: ${y[ve]}`, "") : ""
      , lt = y => !!(y && y.constructor && y.call && y.apply)
      , Vt = () => {
        n(6, G = qe(Object.assign({}, {
            width: window.innerWidth,
            height: window.innerHeight
        }, H.styleBg))),
        n(7, xe = qe(H.styleWindowWrap)),
        n(8, He = qe(H.styleWindow)),
        n(9, se = qe(H.styleContent)),
        n(10, ie = qe(H.styleCloseButton)),
        n(11, le = H.transitionBg),
        n(12, oe = H.transitionWindow)
    }
      , Ye = () => {}
    ;
    let ot = Ye
      , Ge = Ye
      , at = Ye
      , Ue = Ye;
    const rt = (y, Ne={}, ve={}, fe={}) => {
        n(2, Q = fs(y, Ne)),
        n(1, H = {
            ...me,
            ...ve
        }),
        Vt(),
        Jt(),
        n(13, ot = we => {
            fe.onOpen && fe.onOpen(we),
            i("open"),
            i("opening")
        }
        ),
        n(14, Ge = we => {
            fe.onClose && fe.onClose(we),
            i("close"),
            i("closing")
        }
        ),
        n(15, at = we => {
            fe.onOpened && fe.onOpened(we),
            i("opened")
        }
        ),
        n(16, Ue = we => {
            fe.onClosed && fe.onClosed(we),
            i("closed")
        }
        )
    }
      , Le = (y={}) => {
        Q && (n(14, Ge = y.onClose || Ge),
        n(16, Ue = y.onClosed || Ue),
        n(2, Q = null),
        Qt())
    }
      , Kt = y => {
        if (H.closeOnEsc && Q && y.key === "Escape" && (y.preventDefault(),
        Le()),
        Q && y.key === "Tab" && !H.disableFocusTrap) {
            const Ne = de.querySelectorAll("*")
              , ve = Array.from(Ne).filter(H.isTabbable).sort( (we, sn) => we.tabIndex - sn.tabIndex);
            let fe = ve.indexOf(document.activeElement);
            fe === -1 && y.shiftKey && (fe = 0),
            fe += ve.length + (y.shiftKey ? -1 : 1),
            fe %= ve.length,
            ve[fe].focus(),
            y.preventDefault()
        }
    }
      , Xt = y => {
        H.closeOnOuterClick && (y.target === ge || y.target === ue) && (Z = y.target)
    }
      , Zt = y => {
        H.closeOnOuterClick && y.target === Z && (y.preventDefault(),
        Le())
    }
      , Jt = () => {
        he = window.scrollY,
        ae = document.body.style.position,
        re = document.body.style.overflow,
        ce = document.body.style.width,
        document.body.style.position = "fixed",
        document.body.style.top = `-${he}px`,
        document.body.style.overflow = "hidden",
        document.body.style.width = "100%"
    }
      , Qt = () => {
        document.body.style.position = ae || "",
        document.body.style.top = "",
        document.body.style.overflow = re || "",
        document.body.style.width = ce || "",
        window.scrollTo({
            top: he,
            left: 0,
            behavior: "instant"
        })
    }
    ;
    I(m, {
        open: rt,
        close: Le
    });
    let Ve = !1;
    kn( () => {
        Ve && Le()
    }
    ),
    xn( () => {
        n(47, Ve = !0)
    }
    );
    function en(y) {
        ze[y ? "unshift" : "push"]( () => {
            de = y,
            n(5, de)
        }
        )
    }
    function tn(y) {
        ze[y ? "unshift" : "push"]( () => {
            ue = y,
            n(4, ue)
        }
        )
    }
    function nn(y) {
        ze[y ? "unshift" : "push"]( () => {
            ge = y,
            n(3, ge)
        }
        )
    }
    return t.$$set = y => {
        "isTabbable"in y && n(22, r = y.isTabbable),
        "show"in y && n(23, d = y.show),
        "id"in y && n(24, w = y.id),
        "key"in y && n(25, m = y.key),
        "ariaLabel"in y && n(26, T = y.ariaLabel),
        "ariaLabelledBy"in y && n(27, v = y.ariaLabelledBy),
        "closeButton"in y && n(28, b = y.closeButton),
        "closeOnEsc"in y && n(29, x = y.closeOnEsc),
        "closeOnOuterClick"in y && n(30, _ = y.closeOnOuterClick),
        "styleBg"in y && n(31, A = y.styleBg),
        "styleWindowWrap"in y && n(32, j = y.styleWindowWrap),
        "styleWindow"in y && n(33, L = y.styleWindow),
        "styleContent"in y && n(34, W = y.styleContent),
        "styleCloseButton"in y && n(35, M = y.styleCloseButton),
        "classBg"in y && n(36, k = y.classBg),
        "classWindowWrap"in y && n(37, C = y.classWindowWrap),
        "classWindow"in y && n(38, B = y.classWindow),
        "classContent"in y && n(39, $ = y.classContent),
        "classCloseButton"in y && n(40, E = y.classCloseButton),
        "unstyled"in y && n(0, O = y.unstyled),
        "setContext"in y && n(41, I = y.setContext),
        "transitionBg"in y && n(42, Y = y.transitionBg),
        "transitionBgProps"in y && n(43, R = y.transitionBgProps),
        "transitionWindow"in y && n(44, U = y.transitionWindow),
        "transitionWindowProps"in y && n(45, X = y.transitionWindowProps),
        "disableFocusTrap"in y && n(46, ne = y.disableFocusTrap),
        "$$scope"in y && n(48, l = y.$$scope)
    }
    ,
    t.$$.update = () => {
        t.$$.dirty[0] & 8388608 | t.$$.dirty[1] & 65536 && Ve && (lt(d) ? rt(d) : Le())
    }
    ,
    [O, H, Q, ge, ue, de, G, xe, He, se, ie, le, oe, ot, Ge, at, Ue, lt, Le, Kt, Xt, Zt, r, d, w, m, T, v, b, x, _, A, j, L, W, M, k, C, B, $, E, I, Y, R, U, X, ne, Ve, l, s, en, tn, nn]
}
class Pt extends te {
    constructor(e) {
        super(),
        ee(this, e, ms, us, J, {
            isTabbable: 22,
            show: 23,
            id: 24,
            key: 25,
            ariaLabel: 26,
            ariaLabelledBy: 27,
            closeButton: 28,
            closeOnEsc: 29,
            closeOnOuterClick: 30,
            styleBg: 31,
            styleWindowWrap: 32,
            styleWindow: 33,
            styleContent: 34,
            styleCloseButton: 35,
            classBg: 36,
            classWindowWrap: 37,
            classWindow: 38,
            classContent: 39,
            classCloseButton: 40,
            unstyled: 0,
            setContext: 41,
            transitionBg: 42,
            transitionBgProps: 43,
            transitionWindow: 44,
            transitionWindowProps: 45,
            disableFocusTrap: 46
        }, null, [-1, -1, -1])
    }
}
function hs(t) {
    let e;
    return {
        c() {
            e = f("div"),
            e.innerHTML = `<h1 class="text-5xl">Predicting Engagement on Gender-Based Violence Posts</h1> <p>One of the things our team wanted to explore is that using natural language
    processing (NLP) and machine learning techniques, we want to analyze the
    textual content of posts, along with the age and gender of the posters, to
    forecast how much engagement (measured by upvotes, comments, etc.) a post is
    likely to receive.</p> <h2 class="text-3xl">Methodology</h2> <h3 class="font-normal tracking-wide text-xl">1. Data Collection and Preprocessing:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">We collected data from Reddit posts related to gender-based violence.</li> <li class="svelte-8ftu6v">Each post includes the body text, the poster&#39;s age and gender, and the
      date of posting.</li> <li class="svelte-8ftu6v">We extracted and standardized the age and gender information, categorizing
      ages into groups (Under 20, 20-29, 30-39, 40-49, 50+).</li></ul> <h3 class="font-normal tracking-wide text-xl">2. Feature Extraction:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">We used OneHotEncoder to encode categorical features such as age group and
      gender.</li> <li class="svelte-8ftu6v">For textual data, we employed TfidfVectorizer to convert the text into
      numerical features, capturing the importance of each word in the context
      of the dataset.</li></ul> <h3 class="font-normal tracking-wide text-xl">3. Model Training:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">We combined the encoded age, gender, and textual features to form the
      feature set (X).</li> <li class="svelte-8ftu6v">The target variable (y) is the engagement level of each post.</li> <li class="svelte-8ftu6v">We split the data into training and testing sets and trained a
      RandomForestRegressor model to predict engagement levels.</li></ul> <h3 class="font-normal tracking-wide text-xl">4. Evaluation:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">The model&#39;s performance was evaluated using Mean Squared Error (MSE),
      which measures the average of the squares of the errors.</li> <li class="svelte-8ftu6v">Our model achieved an MSE of 32,057.59, indicating the average error
      between the predicted and actual engagement levels.</li></ul> <h3 class="font-normal tracking-wide text-xl">5. Feature Importance:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">To understand which features contributed most to the predictions, we
      analyzed the feature importances from the RandomForestRegressor model.</li> <li class="svelte-8ftu6v">The feature importance analysis revealed these top 10 words influencing
      engagement on Reddit posts about gender-based violence:
      <ol class="custom-bullets svelte-8ftu6v"><br/> <li class="svelte-8ftu6v">lakas (strength)</li> <li class="svelte-8ftu6v">table</li> <li class="svelte-8ftu6v">ngang</li> <li class="svelte-8ftu6v">lang (just)</li> <li class="svelte-8ftu6v">safe</li> <li class="svelte-8ftu6v">gumising (wake up)</li> <li class="svelte-8ftu6v">edit</li> <li class="svelte-8ftu6v">ibang (different)</li> <li class="svelte-8ftu6v">tits</li> <li class="svelte-8ftu6v">screenshot</li></ol></li></ul> <p>These words are significant indicators of engagement, reflecting the themes
    and language that resonate most with the community.</p>`,
            u(e, "class", "bg-white px-4 mt-16 space-y-4 text-xl")
        },
        m(n, s) {
            p(n, e, s)
        },
        p: q,
        i: q,
        o: q,
        d(n) {
            n && h(e)
        }
    }
}
class gs extends te {
    constructor(e) {
        super(),
        ee(this, e, null, hs, J, {})
    }
}
function ps(t) {
    let e;
    return {
        c() {
            e = f("div"),
            e.innerHTML = `<h1 class="text-5xl">Classifying Types of Gender-Based Violence Reports</h1> <p>Our team believes that understanding and categorizing gender-based violence
    is crucial for providing appropriate support and resources. Because of this,
    we wanted to use machine learning to classify Reddit posts about
    gender-based violence into specific categories such as cyberbullying,
    emotional abuse, physical abuse, and more. This helps in understanding the
    prevalent types of violence and tailoring interventions accordingly.</p> <h2 class="text-3xl">Methodology</h2> <h3 class="font-normal tracking-wide text-xl">1. Data Collection and Preprocessing:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">We collected data from Reddit posts related to gender-based violence.</li> <li class="svelte-8ftu6v">Each post includes the text content and the relationship context of the
      poster.</li> <li class="svelte-8ftu6v">Text data was converted into numerical features using TfidfVectorizer,
      capturing the importance of each word.</li></ul> <h3 class="font-normal tracking-wide text-xl">2. Feature Extraction:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">Relationship contexts were encoded using OneHotEncoder to convert
      categorical data into numerical form.</li> <li class="svelte-8ftu6v">The encoded relationship features were combined with text features to form
      the complete feature set (X).</li></ul> <h3 class="font-normal tracking-wide text-xl">3. Model Training:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">The dataset was split into training and testing sets.</li> <li class="svelte-8ftu6v">TA Logistic Regression model with balanced class weights was trained to
      predict the type of violence based on the post content and relationship
      context.</li></ul> <h3 class="font-normal tracking-wide text-xl">4. Evaluation:</h3> <ul class="custom-bullets svelte-8ftu6v"><li class="svelte-8ftu6v">The model’s performance was evaluated using accuracy, precision, recall,
      and F1-score.</li> <li class="svelte-8ftu6v">A confusion matrix was generated to visualize the classification results.</li></ul> <h2 class="text-3xl">Classification Report</h2> <img src="image/plots/classification_report.png" alt="A chart showing classification report" class="rounded-lg mx-auto w-10/12"/> <ol class="svelte-8ftu6v"><li class="svelte-8ftu6v"><b>High Precision and Recall </b>— Categories like &quot;stalking&quot; and
      &quot;unsolicited pics&quot; have high precision and recall, indicating the model’s
      effectiveness in correctly identifying these types of posts.</li> <li class="svelte-8ftu6v"><b>Moderate Performance</b> — Categories like &quot;emotional abuse&quot; and &quot;physical
      abuse&quot; show moderate performance, with a mix of correct and incorrect classifications.</li> <li class="svelte-8ftu6v"><b>Areas for Improvement </b>— The &quot;abused&quot; and &quot;domestic violence&quot;
      categories have lower recall, suggesting the model struggles to correctly
      identify these posts.</li></ol> <h2 class="text-3xl">Classification Report</h2> <img src="image/confusion_matrix.webp" alt="A chart showing classification report" class="rounded-lg mx-auto w-10/12"/> <ol class="svelte-8ftu6v"><li class="svelte-8ftu6v"><b>High Accuracy</b> — &quot;Stalking&quot; and &quot;Unsolicited Pics&quot; categories have the
      highest number of correct classifications (80 and 12, respectively), indicating
      the model is highly accurate in predicting these categories.</li> <li class="svelte-8ftu6v"><b>Moderate Accuracy</b> — &quot;Cyberbullying,&quot; &quot;Sexual Harassment,&quot; and &quot;Physical
      Abuse&quot; categories have moderate accuracy, with significant correct classifications
      but also notable misclassifications.</li> <li class="svelte-8ftu6v"><b>Low Accuracy</b> — &quot;Abused,&quot; &quot;Domestic Violence,&quot; and &quot;Emotional Abuse&quot;
      categories have lower accuracy, with many instances misclassified as other
      types of violence. For example, &quot;Abused&quot; is frequently misclassified as &quot;Physical
      Abuse,&quot; and &quot;Emotional Abuse&quot; is often misclassified as &quot;Physical Abuse.&quot;</li></ol>`,
            u(e, "class", "bg-white px-4 mt-16 space-y-4 text-xl")
        },
        m(n, s) {
            p(n, e, s)
        },
        p: q,
        i: q,
        o: q,
        d(n) {
            n && h(e)
        }
    }
}
class bs extends te {
    constructor(e) {
        super(),
        ee(this, e, null, ps, J, {})
    }
}
function vs(t) {
    let e, n, s, l, i, o, a;
    return n = new Oe({
        props: {
            src: Ut,
            size: "2em"
        }
    }),
    {
        c() {
            e = f("button"),
            F(n.$$.fragment),
            s = g(),
            l = f("span"),
            l.textContent = "Explore The Model",
            u(l, "class", "md:text-xl ml-2"),
            u(e, "class", "righticon flex align-center gap-2")
        },
        m(r, d) {
            p(r, e, d),
            N(n, e, null),
            c(e, s),
            c(e, l),
            i = !0,
            o || (a = K(e, "click", t[2]),
            o = !0)
        },
        p: q,
        i(r) {
            i || (P(n.$$.fragment, r),
            i = !0)
        },
        o(r) {
            S(n.$$.fragment, r),
            i = !1
        },
        d(r) {
            r && h(e),
            D(n),
            o = !1,
            a()
        }
    }
}
function ws(t) {
    let e, n, s, l, i, o, a;
    return n = new Oe({
        props: {
            src: Ut,
            size: "2em"
        }
    }),
    {
        c() {
            e = f("button"),
            F(n.$$.fragment),
            s = g(),
            l = f("span"),
            l.textContent = "Explore The Model",
            u(l, "class", "md:text-xl ml-2"),
            u(e, "class", "righticon flex align-center gap-2")
        },
        m(r, d) {
            p(r, e, d),
            N(n, e, null),
            c(e, s),
            c(e, l),
            i = !0,
            o || (a = K(e, "click", t[3]),
            o = !0)
        },
        p: q,
        i(r) {
            i || (P(n.$$.fragment, r),
            i = !0)
        },
        o(r) {
            S(n.$$.fragment, r),
            i = !1
        },
        d(r) {
            r && h(e),
            D(n),
            o = !1,
            a()
        }
    }
}
function ys(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _, A, j, L, W, M;
    return m = new Pt({
        props: {
            show: t[0],
            $$slots: {
                default: [vs]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    W = new Pt({
        props: {
            show: t[0],
            $$slots: {
                default: [ws]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    {
        c() {
            e = f("div"),
            n = f("p"),
            n.textContent = "MODEL",
            s = g(),
            l = f("div"),
            i = f("div"),
            o = f("div"),
            o.innerHTML = '<h2 class="md:text-5xl text-2xl">Predicting Engagement on Gender-Based Violence Posts</h2>',
            a = g(),
            r = f("p"),
            r.textContent = `One of the things our team wanted to explore is that using natural\r
        language processing (NLP) and machine learning techniques, we want to\r
        analyze the textual content of posts, along with the age and gender of\r
        the posters, to forecast how much engagement (measured by upvotes,\r
        comments, etc.) a post is likely to receive.`,
            d = g(),
            w = f("div"),
            F(m.$$.fragment),
            T = g(),
            v = f("div"),
            b = f("div"),
            x = f("h2"),
            x.textContent = "Classifying Types of Gender-Based Violence Reports",
            _ = g(),
            A = f("p"),
            A.textContent = `Our team believes that understanding and categorizing gender-based\r
        violence is crucial for providing appropriate support and resources.\r
        Because of this, we wanted to use machine learning to classify Reddit\r
        posts about gender-based violence into specific categories such as\r
        cyberbullying, emotional abuse, physical abuse, and more. This helps in\r
        understanding the prevalent types of violence and tailoring\r
        interventions accordingly.`,
            j = g(),
            L = f("div"),
            F(W.$$.fragment),
            u(n, "class", "text-2xl font-semibold gradient-light tracking-widest"),
            u(r, "class", "md:text-xl"),
            u(i, "class", "space-y-4"),
            u(l, "class", "md:flex pb-6 md:w-8/12"),
            u(x, "class", "md:text-5xl text-2xl"),
            u(A, "class", "md:text-xl"),
            u(b, "class", "space-y-4"),
            u(v, "class", "md:flex pb-6 md:w-8/12"),
            u(e, "class", "flex flex-col align-center bg-gdark text-white px-12 space-y-6 py-16 min-h-screen")
        },
        m(k, C) {
            p(k, e, C),
            c(e, n),
            c(e, s),
            c(e, l),
            c(l, i),
            c(i, o),
            c(i, a),
            c(i, r),
            c(i, d),
            c(i, w),
            N(m, w, null),
            c(e, T),
            c(e, v),
            c(v, b),
            c(b, x),
            c(b, _),
            c(b, A),
            c(b, j),
            c(b, L),
            N(W, L, null),
            M = !0
        },
        p(k, [C]) {
            const B = {};
            C & 1 && (B.show = k[0]),
            C & 16 && (B.$$scope = {
                dirty: C,
                ctx: k
            }),
            m.$set(B);
            const $ = {};
            C & 1 && ($.show = k[0]),
            C & 16 && ($.$$scope = {
                dirty: C,
                ctx: k
            }),
            W.$set($)
        },
        i(k) {
            M || (P(m.$$.fragment, k),
            P(W.$$.fragment, k),
            M = !0)
        },
        o(k) {
            S(m.$$.fragment, k),
            S(W.$$.fragment, k),
            M = !1
        },
        d(k) {
            k && h(e),
            D(m),
            D(W)
        }
    }
}
function _s(t, e, n) {
    let s;
    const l = ls(null);
    return cn(t, l, a => n(0, s = a)),
    [s, l, () => l.set(gs), () => l.set(bs)]
}
class xs extends te {
    constructor(e) {
        super(),
        ee(this, e, _s, ys, J, {})
    }
}
function Bt(t) {
    let e, n, s;
    const l = t[4].default
      , i = $t(l, t, t[3], null);
    return {
        c() {
            e = f("div"),
            i && i.c(),
            u(e, "class", "px-4 dropdown-content-wrapper text-neutral-800 space-y-3 svelte-6f6soa")
        },
        m(o, a) {
            p(o, e, a),
            i && i.m(e, null),
            s = !0
        },
        p(o, a) {
            i && i.p && (!s || a & 8) && Nt(i, l, o, o[3], s ? qt(l, o[3], a, null) : Dt(o[3]), null)
        },
        i(o) {
            s || (P(i, o),
            o && Me( () => {
                s && (n || (n = je(e, Ot, {}, !0)),
                n.run(1))
            }
            ),
            s = !0)
        },
        o(o) {
            S(i, o),
            o && (n || (n = je(e, Ot, {}, !1)),
            n.run(0)),
            s = !1
        },
        d(o) {
            o && h(e),
            i && i.d(o),
            o && n && n.end()
        }
    }
}
function ks(t) {
    let e, n, s, l, i, o = t[0] ? "-" : "+", a, r, d, w, m, T, v = t[0] && Bt(t);
    return {
        c() {
            e = f("button"),
            n = f("h2"),
            s = V(t[1]),
            l = g(),
            i = f("h2"),
            a = V(o),
            r = g(),
            d = f("div"),
            v && v.c(),
            u(n, "class", "md:text-2xl font-semibold tracking-widest lowercase"),
            u(i, "class", "md:text-4xl tracking-widest lowercase pr-4"),
            u(e, "class", "pt-3 dropdown flex justify-between align-center svelte-6f6soa"),
            u(d, "class", "dropdown-content md:text-base text-sm svelte-6f6soa")
        },
        m(b, x) {
            p(b, e, x),
            c(e, n),
            c(n, s),
            c(e, l),
            c(e, i),
            c(i, a),
            p(b, r, x),
            p(b, d, x),
            v && v.m(d, null),
            w = !0,
            m || (T = K(e, "click", t[2]),
            m = !0)
        },
        p(b, [x]) {
            (!w || x & 2) && We(s, b[1]),
            (!w || x & 1) && o !== (o = b[0] ? "-" : "+") && We(a, o),
            b[0] ? v ? (v.p(b, x),
            x & 1 && P(v, 1)) : (v = Bt(b),
            v.c(),
            P(v, 1),
            v.m(d, null)) : v && (Te(),
            S(v, 1, 1, () => {
                v = null
            }
            ),
            Ce())
        },
        i(b) {
            w || (P(v),
            w = !0)
        },
        o(b) {
            S(v),
            w = !1
        },
        d(b) {
            b && (h(e),
            h(r),
            h(d)),
            v && v.d(),
            m = !1,
            T()
        }
    }
}
function Ts(t, e, n) {
    let {$$slots: s={}, $$scope: l} = e
      , {title: i} = e
      , {isOpen: o} = e;
    function a() {
        n(0, o = !o)
    }
    return t.$$set = r => {
        "title"in r && n(1, i = r.title),
        "isOpen"in r && n(0, o = r.isOpen),
        "$$scope"in r && n(3, l = r.$$scope)
    }
    ,
    [o, i, a, l, s]
}
class ke extends te {
    constructor(e) {
        super(),
        ee(this, e, Ts, ks, J, {
            title: 1,
            isOpen: 0
        })
    }
}
function Cs(t) {
    let e, n, s;
    return {
        c() {
            e = f("p"),
            e.innerHTML = `<b>Hypothesis</b> <br/>
      Posts about gender-based violence will show significant variations in engagement
      and content type based on demographics and the time of posting.`,
            n = g(),
            s = f("p"),
            s.innerHTML = `<b>Findings</b> <br/>

      The feature importance analysis revealed that specific words such as
      &quot;lakas&quot; (strength), &quot;table,&quot; &quot;ngang,&quot; and &quot;lang&quot; (just) are significant
      indicators of engagement. Posts containing these words tend to receive
      more community engagement, indicating that the content and context of the
      posts do influence engagement levels.`
        },
        m(l, i) {
            p(l, e, i),
            p(l, n, i),
            p(l, s, i)
        },
        p: q,
        d(l) {
            l && (h(e),
            h(n),
            h(s))
        }
    }
}
function As(t) {
    let e, n, s;
    return {
        c() {
            e = f("p"),
            e.innerHTML = `<b>Hypothesis</b> <br/>
      Certain times or demographics may be more vulnerable, as indicated by higher
      frequencies of reported incidents.`,
            n = g(),
            s = f("div"),
            s.innerHTML = `<b>Findings</b> <br/> <ul class="list-disk"><li><span class="font-[400]">Temporal Patterns:</span> There is a noticeable
          spike in posts starting from 2020, with the highest number of posts recorded
          in 2023. March and April show a significant spike in the number of posts,
          while June has the lowest. This indicates that certain periods are associated
          with higher reporting of gender-based violence, possibly due to increased
          awareness or external factors such as the COVID-19 pandemic.</li> <li><span class="font-[400]">Demographic Patterns:</span> The &quot;Unknown&quot; age
          group and the 20-29 age group show the highest engagement, suggesting that
          these demographics might be more active in discussing gender-based violence.
          Similarly, posts with unspecified gender or from both female and male users
          show increased engagement, particularly after 2020.</li></ul>`
        },
        m(l, i) {
            p(l, e, i),
            p(l, n, i),
            p(l, s, i)
        },
        p: q,
        d(l) {
            l && (h(e),
            h(n),
            h(s))
        }
    }
}
function Ms(t) {
    let e, n, s;
    return {
        c() {
            e = f("p"),
            e.innerHTML = `<b>Hypothesis</b> <br/>
      Specific types of posts, perhaps those with more personal stories or calls
      for help, may receive higher community engagement, indicating a greater collective
      response.`,
            n = g(),
            s = f("p"),
            s.innerHTML = `<b>Findings</b> <br/>
      The analysis of engagement over time by gender and age group supports this
      hypothesis. Posts from the &quot;Unknown&quot; gender group and younger age groups (20-29)
      show frequent spikes in engagement, suggesting that these posts resonate more
      with the community. Additionally, posts during certain holidays such as New
      Year&#39;s Day and Ninoy Aquino Day show significant engagement, indicating that
      the community is more responsive during these periods.`
        },
        m(l, i) {
            p(l, e, i),
            p(l, n, i),
            p(l, s, i)
        },
        p: q,
        d(l) {
            l && (h(e),
            h(n),
            h(s))
        }
    }
}
function Os(t) {
    let e;
    return {
        c() {
            e = V(`The RandomForestRegressor model achieved a Mean Squared Error (MSE) of\r
    32,057.59, indicating that while the model can predict engagement levels,\r
    there is room for improvement in accuracy. The most influential features for\r
    predicting engagement included specific keywords and the demographic\r
    information of the poster. Classifying Types of Violence`)
        },
        m(n, s) {
            p(n, e, s)
        },
        d(n) {
            n && h(e)
        }
    }
}
function Ls(t) {
    let e;
    return {
        c() {
            e = V(`The Logistic Regression model, used to classify posts into specific types of\r
    gender-based violence, showed varying levels of accuracy across different\r
    categories. Categories like "stalking" and "unsolicited pics" had high\r
    precision and recall, while categories like "abused" and "domestic violence"\r
    had lower accuracy, indicating the need for further refinement in feature\r
    extraction and model tuning.`)
        },
        m(n, s) {
            p(n, e, s)
        },
        d(n) {
            n && h(e)
        }
    }
}
function Es(t) {
    let e;
    return {
        c() {
            e = V(`The Word2Vec model is used to give words of the gender-based violence reddit\r
    posts corpus an encoding which represents their relative similarity or\r
    relevance.`)
        },
        m(n, s) {
            p(n, e, s)
        },
        d(n) {
            n && h(e)
        }
    }
}
function Ps(t) {
    let e;
    return {
        c() {
            e = f("ol"),
            e.innerHTML = `<li><b>Enhance Feature Engineering</b> <ul><li>Further refine feature extraction techniques to better capture the
            nuances in text that differentiate between various types of
            gender-based violence.</li> <li>Removing Tagalog stop words in the cleaning of the dataset</li></ul></li> <br/> <li><b>Utilization of Word Similarity Encodings</b> <ul><li>Application of Word2Vec on the classification model for possible
            higher accuracy and deeper analysis of results and patterns</li></ul></li> <br/> <li><b>Increase Awareness Campaigns</b> <ul><li>Utilize periods of high engagement (e.g., March, April, New Year&#39;s
            Day, Ninoy Aquino Day) to launch targeted awareness campaigns and
            interventions.</li></ul></li> <br/> <li><b>Community Support Initiatives</b> <ul><li>Develop initiatives that encourage discussions and support for
            demographics showing lower engagement, such as older age groups
            (40-49) and posts misclassified by the model.</li></ul></li> <br/> <li><b>Ongoing Model Improvement</b> <ul><li>Continuously update and train models with new data to improve
            accuracy and adapt to changing trends in discussions around
            gender-based violence.</li></ul></li>`
        },
        m(n, s) {
            p(n, e, s)
        },
        p: q,
        d(n) {
            n && h(e)
        }
    }
}
function Bs(t) {
    let e;
    return {
        c() {
            e = f("p"),
            e.textContent = `Our findings validate the hypotheses that content variation, vulnerability\r
      indicators, and engagement patterns significantly influence community\r
      interactions around gender-based violence posts on Reddit. By leveraging\r
      these insights, we can better support affected individuals and create more\r
      effective awareness and prevention strategies within online communities.`
        },
        m(n, s) {
            p(n, e, s)
        },
        p: q,
        d(n) {
            n && h(e)
        }
    }
}
function js(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _, A, j, L, W, M, k, C, B, $;
    return o = new ke({
        props: {
            isOpen: !1,
            title: "Content Variation",
            $$slots: {
                default: [Cs]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    r = new ke({
        props: {
            isOpen: !1,
            title: "Vulnerability Indicators",
            $$slots: {
                default: [As]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    w = new ke({
        props: {
            isOpen: !1,
            title: "Engagement Patterns",
            $$slots: {
                default: [Ms]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    b = new ke({
        props: {
            isOpen: !1,
            title: "Predicting Engagement",
            $$slots: {
                default: [Os]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    _ = new ke({
        props: {
            isOpen: !1,
            title: "Classifying Types of Violence",
            $$slots: {
                default: [Ls]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    j = new ke({
        props: {
            isOpen: !1,
            title: "Dense Vector Representation of Words",
            $$slots: {
                default: [Es]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    k = new ke({
        props: {
            isOpen: !1,
            title: "Recommendations",
            $$slots: {
                default: [Ps]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    B = new ke({
        props: {
            isOpen: !1,
            title: "Final Thoughts",
            $$slots: {
                default: [Bs]
            },
            $$scope: {
                ctx: t
            }
        }
    }),
    {
        c() {
            e = f("div"),
            n = f("header"),
            n.innerHTML = `<h1 class="md:text-7xl">Conclusion</h1> <p>Our project set out to analyze narratives around gender-based violence
      within Filipino Reddit communities and to test several hypotheses related
      to engagement patterns, vulnerability indicators, and content variation.
      Here, we summarize our findings and evaluate our hypotheses based on the
      extensive exploratory data analysis (EDA) and machine learning models we
      employed.</p>`,
            s = g(),
            l = f("h2"),
            l.textContent = "Key Takeaways",
            i = g(),
            F(o.$$.fragment),
            a = g(),
            F(r.$$.fragment),
            d = g(),
            F(w.$$.fragment),
            m = g(),
            T = f("h2"),
            T.textContent = "Summary of Model Performance",
            v = g(),
            F(b.$$.fragment),
            x = g(),
            F(_.$$.fragment),
            A = g(),
            F(j.$$.fragment),
            L = g(),
            W = f("h2"),
            W.textContent = "Recommendations and Final Thoughts",
            M = g(),
            F(k.$$.fragment),
            C = g(),
            F(B.$$.fragment),
            u(n, "class", "text-center md:w-8/12 mx-auto mt-16 space-y-3"),
            u(l, "class", "md:text-5xl text-2xl md:mt-20 mt-8 md:mb-8"),
            u(T, "class", "md:text-5xl text-2xl md:mt-20 mt-8 md:mb-8"),
            u(W, "class", "md:text-5xl text-2xl md:mt-20 mt-8 md:mb-8"),
            u(e, "class", "md:text-xl flex flex-col align-center mx-6 rounded-2xl md:px-12 gap-3 py-12")
        },
        m(E, O) {
            p(E, e, O),
            c(e, n),
            c(e, s),
            c(e, l),
            c(e, i),
            N(o, e, null),
            c(e, a),
            N(r, e, null),
            c(e, d),
            N(w, e, null),
            c(e, m),
            c(e, T),
            c(e, v),
            N(b, e, null),
            c(e, x),
            N(_, e, null),
            c(e, A),
            N(j, e, null),
            c(e, L),
            c(e, W),
            c(e, M),
            N(k, e, null),
            c(e, C),
            N(B, e, null),
            $ = !0
        },
        p(E, [O]) {
            const I = {};
            O & 1 && (I.$$scope = {
                dirty: O,
                ctx: E
            }),
            o.$set(I);
            const Y = {};
            O & 1 && (Y.$$scope = {
                dirty: O,
                ctx: E
            }),
            r.$set(Y);
            const R = {};
            O & 1 && (R.$$scope = {
                dirty: O,
                ctx: E
            }),
            w.$set(R);
            const U = {};
            O & 1 && (U.$$scope = {
                dirty: O,
                ctx: E
            }),
            b.$set(U);
            const X = {};
            O & 1 && (X.$$scope = {
                dirty: O,
                ctx: E
            }),
            _.$set(X);
            const ne = {};
            O & 1 && (ne.$$scope = {
                dirty: O,
                ctx: E
            }),
            j.$set(ne);
            const me = {};
            O & 1 && (me.$$scope = {
                dirty: O,
                ctx: E
            }),
            k.$set(me);
            const H = {};
            O & 1 && (H.$$scope = {
                dirty: O,
                ctx: E
            }),
            B.$set(H)
        },
        i(E) {
            $ || (P(o.$$.fragment, E),
            P(r.$$.fragment, E),
            P(w.$$.fragment, E),
            P(b.$$.fragment, E),
            P(_.$$.fragment, E),
            P(j.$$.fragment, E),
            P(k.$$.fragment, E),
            P(B.$$.fragment, E),
            $ = !0)
        },
        o(E) {
            S(o.$$.fragment, E),
            S(r.$$.fragment, E),
            S(w.$$.fragment, E),
            S(b.$$.fragment, E),
            S(_.$$.fragment, E),
            S(j.$$.fragment, E),
            S(k.$$.fragment, E),
            S(B.$$.fragment, E),
            $ = !1
        },
        d(E) {
            E && h(e),
            D(o),
            D(r),
            D(w),
            D(b),
            D(_),
            D(j),
            D(k),
            D(B)
        }
    }
}
class Ss extends te {
    constructor(e) {
        super(),
        ee(this, e, null, js, J, {})
    }
}
function Ws(t) {
    let e, n, s, l, i, o, a, r, d, w, m, T, v, b, x, _, A, j, L, W, M, k, C, B, $, E, O, I, Y, R, U, X, ne, me, H, Q, ge, ue, de, he;
    return s = new $n({}),
    A = new Oe({
        props: {
            src: Nn,
            size: "2em"
        }
    }),
    B = new Rn({}),
    O = new ns({}),
    R = new Yn({}),
    ne = new xs({}),
    Q = new Ss({}),
    de = new is({}),
    {
        c() {
            e = f("main"),
            n = f("section"),
            F(s.$$.fragment),
            l = g(),
            i = f("div"),
            o = f("h2"),
            o.textContent = "SPEAK OUT AND BE HEARD",
            a = g(),
            r = f("h1"),
            r.innerHTML = `Uncovering the Shadows of <span class="gradient-title">Gender-Based Violence</span>
        Among Filipino Redditors`,
            d = g(),
            w = f("div"),
            m = f("div"),
            T = f("div"),
            v = f("p"),
            v.textContent = `This initiative seeks to explore and expose the experiences of\r
              gender-based violence as shared by individuals in Filipino Reddit\r
              communities. Our project analyzes the nature of these experiences,\r
              investigates patterns based on demographics, geography, and\r
              special dates, and examines the impact of community engagement on\r
              these critical issues.`,
            b = g(),
            x = f("div"),
            _ = f("a"),
            F(A.$$.fragment),
            j = g(),
            L = f("span"),
            L.textContent = "Explore Our Study",
            W = g(),
            M = f("div"),
            M.innerHTML = '<img src="image/womenrights.jpeg" alt="A Filipino protestor holding a placard reading &#39;Condemn violence - protect women&#39;" class="rounded-lg object-contain"/>',
            k = g(),
            C = f("div"),
            F(B.$$.fragment),
            $ = g(),
            E = f("section"),
            F(O.$$.fragment),
            I = g(),
            Y = f("section"),
            F(R.$$.fragment),
            U = g(),
            X = f("section"),
            F(ne.$$.fragment),
            me = g(),
            H = f("section"),
            F(Q.$$.fragment),
            ge = g(),
            ue = f("section"),
            F(de.$$.fragment),
            u(o, "class", "md:text-4xl text-zinc-700"),
            u(r, "class", "text-4xl text-zinc-800 md:text-8xl"),
            u(v, "class", "md:w-10/12 text-justify md:text-left text-lg"),
            u(L, "class", "text-xl ml-2"),
            u(_, "href", "#background"),
            u(_, "class", "downicon flex align-center gap-2"),
            u(T, "class", "md:w-7/12 pt-6 space-y-8"),
            u(M, "class", "rounded-lg object-contain mt-12 md:mt-[-20px]"),
            u(m, "class", "md:flex flex-row md:space-x-8"),
            u(i, "class", "m-8 md:m-20 mt-18"),
            u(n, "class", "bg-slate-100 py-6"),
            u(C, "id", "background"),
            u(C, "class", "bg-slate-100"),
            u(E, "id", "data"),
            u(E, "class", "bg-slate-100"),
            u(Y, "id", "results"),
            u(Y, "class", "bg-slate-100 pb-20"),
            u(H, "class", "bg-slate-100"),
            u(ue, "id", "team"),
            u(ue, "class", "bg-gdark")
        },
        m(G, xe) {
            p(G, e, xe),
            c(e, n),
            N(s, n, null),
            c(n, l),
            c(n, i),
            c(i, o),
            c(i, a),
            c(i, r),
            c(i, d),
            c(i, w),
            c(w, m),
            c(m, T),
            c(T, v),
            c(T, b),
            c(T, x),
            c(x, _),
            N(A, _, null),
            c(_, j),
            c(_, L),
            c(m, W),
            c(m, M),
            c(e, k),
            c(e, C),
            N(B, C, null),
            c(e, $),
            c(e, E),
            N(O, E, null),
            c(e, I),
            c(e, Y),
            N(R, Y, null),
            c(e, U),
            c(e, X),
            N(ne, X, null),
            c(e, me),
            c(e, H),
            N(Q, H, null),
            c(e, ge),
            c(e, ue),
            N(de, ue, null),
            he = !0
        },
        p: q,
        i(G) {
            he || (P(s.$$.fragment, G),
            P(A.$$.fragment, G),
            P(B.$$.fragment, G),
            P(O.$$.fragment, G),
            P(R.$$.fragment, G),
            P(ne.$$.fragment, G),
            P(Q.$$.fragment, G),
            P(de.$$.fragment, G),
            he = !0)
        },
        o(G) {
            S(s.$$.fragment, G),
            S(A.$$.fragment, G),
            S(B.$$.fragment, G),
            S(O.$$.fragment, G),
            S(R.$$.fragment, G),
            S(ne.$$.fragment, G),
            S(Q.$$.fragment, G),
            S(de.$$.fragment, G),
            he = !1
        },
        d(G) {
            G && h(e),
            D(s),
            D(A),
            D(B),
            D(O),
            D(R),
            D(ne),
            D(Q),
            D(de)
        }
    }
}
class $s extends te {
    constructor(e) {
        super(),
        ee(this, e, null, Ws, J, {})
    }
}
function Hs(t) {
    let e, n, s;
    return n = new $s({}),
    {
        c() {
            e = f("div"),
            F(n.$$.fragment)
        },
        m(l, i) {
            p(l, e, i),
            N(n, e, null),
            s = !0
        },
        p: q,
        i(l) {
            s || (P(n.$$.fragment, l),
            s = !0)
        },
        o(l) {
            S(n.$$.fragment, l),
            s = !1
        },
        d(l) {
            l && h(e),
            D(n)
        }
    }
}
class qs extends te {
    constructor(e) {
        super(),
        ee(this, e, null, Hs, J, {})
    }
}
new qs({
    target: document.getElementById("app")
});
