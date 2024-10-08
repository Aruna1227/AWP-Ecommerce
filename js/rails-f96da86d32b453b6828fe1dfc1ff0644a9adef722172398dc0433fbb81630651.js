!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
      n = pe.type(e);
    return (
      "function" !== n &&
      !pe.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t, n) {
    if (pe.isFunction(t))
      return pe.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return pe.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (Ce.test(t)) return pe.filter(t, e, n);
      t = pe.filter(t, e);
    }
    return pe.grep(e, function (e) {
      return pe.inArray(e, t) > -1 !== n;
    });
  }
  function i(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  function o(e) {
    var t = {};
    return (
      pe.each(e.match(Ae) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function a() {
    re.addEventListener
      ? (re.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s))
      : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s));
  }
  function s() {
    (re.addEventListener ||
      "load" === e.event.type ||
      "complete" === re.readyState) &&
      (a(), pe.ready());
  }
  function l(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = "data-" + t.replace(Fe, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : qe.test(n)
                ? pe.parseJSON(n)
                : n));
        } catch (e) {}
        pe.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function u(e) {
    var t;
    for (t in e)
      if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  function c(e, t, n, r) {
    if (He(e)) {
      var i,
        o,
        a = pe.expando,
        s = e.nodeType,
        l = s ? pe.cache : e,
        u = s ? e[a] : e[a] && a;
      if (
        (u && l[u] && (r || l[u].data)) ||
        void 0 !== n ||
        "string" != typeof t
      )
        return (
          u || (u = s ? (e[a] = ne.pop() || pe.guid++) : a),
          l[u] || (l[u] = s ? {} : { toJSON: pe.noop }),
          ("object" != typeof t && "function" != typeof t) ||
            (r
              ? (l[u] = pe.extend(l[u], t))
              : (l[u].data = pe.extend(l[u].data, t))),
          (o = l[u]),
          r || (o.data || (o.data = {}), (o = o.data)),
          void 0 !== n && (o[pe.camelCase(t)] = n),
          "string" == typeof t
            ? null == (i = o[t]) && (i = o[pe.camelCase(t)])
            : (i = o),
          i
        );
    }
  }
  function d(e, t, n) {
    if (He(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? pe.cache : e,
        s = o ? e[pe.expando] : pe.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          i = (t = pe.isArray(t)
            ? t.concat(pe.map(t, pe.camelCase))
            : t in r || (t = pe.camelCase(t)) in r
            ? [t]
            : t.split(" ")).length;
          for (; i--; ) delete r[t[i]];
          if (n ? !u(r) : !pe.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, u(a[s]))) &&
          (o
            ? pe.cleanData([e], !0)
            : de.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = void 0));
      }
    }
  }
  function f(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return pe.css(e, t, "");
          },
      l = s(),
      u = (n && n[3]) || (pe.cssNumber[t] ? "" : "px"),
      c = (pe.cssNumber[t] || ("px" !== u && +l)) && Pe.exec(pe.css(e, t));
    if (c && c[3] !== u) {
      (u = u || c[3]), (n = n || []), (c = +l || 1);
      do {
        (c /= o = o || ".5"), pe.style(e, t, c + u);
      } while (o !== (o = s() / l) && 1 !== o && --a);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = u), (r.start = c), (r.end = i))),
      i
    );
  }
  function p(e) {
    var t = Ve.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function h(e, t) {
    var n,
      r,
      i = 0,
      o =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
    return void 0 === t || (t && pe.nodeName(e, t)) ? pe.merge([e], o) : o;
  }
  function m(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"));
  }
  function g(e) {
    $e.test(e.type) && (e.defaultChecked = e.checked);
  }
  function v(e, t, n, r, i) {
    for (
      var o, a, s, l, u, c, d, f = e.length, v = p(t), y = [], b = 0;
      b < f;
      b++
    )
      if ((a = e[b]) || 0 === a)
        if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a);
        else if (Ye.test(a)) {
          for (
            l = l || v.appendChild(t.createElement("div")),
              u = (ze.exec(a) || ["", ""])[1].toLowerCase(),
              d = Ge[u] || Ge._default,
              l.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2],
              o = d[0];
            o--;

          )
            l = l.lastChild;
          if (
            (!de.leadingWhitespace &&
              Ue.test(a) &&
              y.push(t.createTextNode(Ue.exec(a)[0])),
            !de.tbody)
          )
            for (
              o =
                (a =
                  "table" !== u || Je.test(a)
                    ? "<table>" !== d[1] || Je.test(a)
                      ? 0
                      : l
                    : l.firstChild) && a.childNodes.length;
              o--;

            )
              pe.nodeName((c = a.childNodes[o]), "tbody") &&
                !c.childNodes.length &&
                a.removeChild(c);
          for (pe.merge(y, l.childNodes), l.textContent = ""; l.firstChild; )
            l.removeChild(l.firstChild);
          l = v.lastChild;
        } else y.push(t.createTextNode(a));
    for (
      l && v.removeChild(l),
        de.appendChecked || pe.grep(h(y, "input"), g),
        b = 0;
      (a = y[b++]);

    )
      if (r && pe.inArray(a, r) > -1) i && i.push(a);
      else if (
        ((s = pe.contains(a.ownerDocument, a)),
        (l = h(v.appendChild(a), "script")),
        s && m(l),
        n)
      )
        for (o = 0; (a = l[o++]); ) Xe.test(a.type || "") && n.push(a);
    return (l = null), v;
  }
  function y() {
    return !0;
  }
  function b() {
    return !1;
  }
  function x() {
    try {
      return re.activeElement;
    } catch (e) {}
  }
  function w(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        w(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = b;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        (i = function (e) {
          return pe().off(e), a.apply(this, arguments);
        }),
        (i.guid = a.guid || (a.guid = pe.guid++))),
      e.each(function () {
        pe.event.add(this, t, i, r, n);
      })
    );
  }
  function T(e, t) {
    return pe.nodeName(e, "table") &&
      pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function C(e) {
    return (e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type), e;
  }
  function E(e) {
    var t = st.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function k(e, t) {
    if (1 === t.nodeType && pe.hasData(e)) {
      var n,
        r,
        i,
        o = pe._data(e),
        a = pe._data(t, o),
        s = o.events;
      if (s)
        for (n in (delete a.handle, (a.events = {}), s))
          for (r = 0, i = s[n].length; r < i; r++) pe.event.add(t, n, s[n][r]);
      a.data && (a.data = pe.extend({}, a.data));
    }
  }
  function S(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !de.noCloneEvent && t[pe.expando])) {
        for (r in (i = pe._data(t)).events) pe.removeEvent(t, r, i.handle);
        t.removeAttribute(pe.expando);
      }
      "script" === n && t.text !== e.text
        ? ((C(t).text = e.text), E(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          de.html5Clone &&
            e.innerHTML &&
            !pe.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && $e.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
  }
  function N(e, t, n, r) {
    t = oe.apply([], t);
    var i,
      o,
      a,
      s,
      l,
      u,
      c = 0,
      d = e.length,
      f = d - 1,
      p = t[0],
      m = pe.isFunction(p);
    if (m || (d > 1 && "string" == typeof p && !de.checkClone && at.test(p)))
      return e.each(function (i) {
        var o = e.eq(i);
        m && (t[0] = p.call(this, i, o.html())), N(o, t, n, r);
      });
    if (
      d &&
      ((i = (u = v(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === u.childNodes.length && (u = i),
      i || r)
    ) {
      for (a = (s = pe.map(h(u, "script"), C)).length; c < d; c++)
        (o = u),
          c !== f &&
            ((o = pe.clone(o, !0, !0)), a && pe.merge(s, h(o, "script"))),
          n.call(e[c], o, c);
      if (a)
        for (l = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; c < a; c++)
          (o = s[c]),
            Xe.test(o.type || "") &&
              !pe._data(o, "globalEval") &&
              pe.contains(l, o) &&
              (o.src
                ? pe._evalUrl && pe._evalUrl(o.src)
                : pe.globalEval(
                    (o.text || o.textContent || o.innerHTML || "").replace(
                      lt,
                      ""
                    )
                  ));
      u = i = null;
    }
    return e;
  }
  function j(e, t, n) {
    for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || pe.cleanData(h(r)),
        r.parentNode &&
          (n && pe.contains(r.ownerDocument, r) && m(h(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  function D(e, t) {
    var n = pe(t.createElement(e)).appendTo(t.body),
      r = pe.css(n[0], "display");
    return n.detach(), r;
  }
  function A(e) {
    var t = re,
      n = dt[e];
    return (
      n ||
        (("none" !== (n = D(e, t)) && n) ||
          ((t = (
            (ct = (
              ct || pe("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement))[0].contentWindow ||
            ct[0].contentDocument
          ).document).write(),
          t.close(),
          (n = D(e, t)),
          ct.detach()),
        (dt[e] = n)),
      n
    );
  }
  function L(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function H(e) {
    if (e in St) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = kt.length; n--; )
      if ((e = kt[n] + t) in St) return e;
  }
  function q(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
      (r = e[a]).style &&
        ((o[a] = pe._data(r, "olddisplay")),
        (n = r.style.display),
        t
          ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display &&
              Ie(r) &&
              (o[a] = pe._data(r, "olddisplay", A(r.nodeName))))
          : ((i = Ie(r)),
            ((n && "none" !== n) || !i) &&
              pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
    for (a = 0; a < s; a++)
      (r = e[a]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function F(e, t, n) {
    var r = Tt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function R(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += pe.css(e, n + Be[o], !0, i)),
        r
          ? ("content" === n && (a -= pe.css(e, "padding" + Be[o], !0, i)),
            "margin" !== n &&
              (a -= pe.css(e, "border" + Be[o] + "Width", !0, i)))
          : ((a += pe.css(e, "padding" + Be[o], !0, i)),
            "padding" !== n &&
              (a += pe.css(e, "border" + Be[o] + "Width", !0, i)));
    return a;
  }
  function _(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = gt(e),
      a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (
        (((i = vt(e, t, o)) < 0 || null == i) && (i = e.style[t]), pt.test(i))
      )
        return i;
      (r = a && (de.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + R(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function M(e, t, n, r, i) {
    return new M.prototype.init(e, t, n, r, i);
  }
  function O() {
    return (
      e.setTimeout(function () {
        Nt = void 0;
      }),
      (Nt = pe.now())
    );
  }
  function P(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = Be[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function B(e, t, n) {
    for (
      var r,
        i = ($.tweeners[t] || []).concat($.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function I(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      l,
      u,
      c = this,
      d = {},
      f = e.style,
      p = e.nodeType && Ie(e),
      h = pe._data(e, "fxshow");
    for (r in (n.queue ||
      (null == (s = pe._queueHooks(e, "fx")).unqueued &&
        ((s.unqueued = 0),
        (l = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || l();
        })),
      s.unqueued++,
      c.always(function () {
        c.always(function () {
          s.unqueued--, pe.queue(e, "fx").length || s.empty.fire();
        });
      })),
    1 === e.nodeType &&
      ("height" in t || "width" in t) &&
      ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
      "inline" ===
        ("none" === (u = pe.css(e, "display"))
          ? pe._data(e, "olddisplay") || A(e.nodeName)
          : u) &&
        "none" === pe.css(e, "float") &&
        (de.inlineBlockNeedsLayout && "inline" !== A(e.nodeName)
          ? (f.zoom = 1)
          : (f.display = "inline-block"))),
    n.overflow &&
      ((f.overflow = "hidden"),
      de.shrinkWrapBlocks() ||
        c.always(function () {
          (f.overflow = n.overflow[0]),
            (f.overflowX = n.overflow[1]),
            (f.overflowY = n.overflow[2]);
        })),
    t))
      if (((i = t[r]), Dt.exec(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (p ? "hide" : "show"))
        ) {
          if ("show" !== i || !h || void 0 === h[r]) continue;
          p = !0;
        }
        d[r] = (h && h[r]) || pe.style(e, r);
      } else u = void 0;
    if (pe.isEmptyObject(d))
      "inline" === ("none" === u ? A(e.nodeName) : u) && (f.display = u);
    else
      for (r in (h
        ? "hidden" in h && (p = h.hidden)
        : (h = pe._data(e, "fxshow", {})),
      o && (h.hidden = !p),
      p
        ? pe(e).show()
        : c.done(function () {
            pe(e).hide();
          }),
      c.done(function () {
        var t;
        for (t in (pe._removeData(e, "fxshow"), d)) pe.style(e, t, d[t]);
      }),
      d))
        (a = B(p ? h[r] : 0, r, c)),
          r in h ||
            ((h[r] = a.start),
            p &&
              ((a.end = a.start),
              (a.start = "width" === r || "height" === r ? 1 : 0)));
  }
  function W(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((i = t[(r = pe.camelCase(n))]),
        (o = e[n]),
        pe.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = pe.cssHooks[r]) && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete e[r], o))
          n in e || ((e[n] = o[n]), (t[n] = i));
      else t[r] = i;
  }
  function $(e, t, n) {
    var r,
      i,
      o = 0,
      a = $.prefilters.length,
      s = pe.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (i) return !1;
        for (
          var t = Nt || O(),
            n = Math.max(0, u.startTime + u.duration - t),
            r = 1 - (n / u.duration || 0),
            o = 0,
            a = u.tweens.length;
          o < a;
          o++
        )
          u.tweens[o].run(r);
        return (
          s.notifyWith(e, [u, r, n]),
          r < 1 && a ? n : (s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: pe.extend({}, t),
        opts: pe.extend(
          !0,
          { specialEasing: {}, easing: pe.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: Nt || O(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = pe.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? u.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) u.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
              : s.rejectWith(e, [u, t]),
            this
          );
        },
      }),
      c = u.props;
    for (W(c, u.opts.specialEasing); o < a; o++)
      if ((r = $.prefilters[o].call(u, e, c, u.opts)))
        return (
          pe.isFunction(r.stop) &&
            (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(r.stop, r)),
          r
        );
    return (
      pe.map(c, B, u),
      pe.isFunction(u.opts.start) && u.opts.start.call(e, u),
      pe.fx.timer(pe.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function z(e) {
    return pe.attr(e, "class") || "";
  }
  function X(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(Ae) || [];
      if (pe.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r.charAt(0)
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function U(e, t, n, r) {
    function i(s) {
      var l;
      return (
        (o[s] = !0),
        pe.each(e[s] || [], function (e, s) {
          var u = s(t, n, r);
          return "string" != typeof u || a || o[u]
            ? a
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), i(u), !1);
        }),
        l
      );
    }
    var o = {},
      a = e === en;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function V(e, t) {
    var n,
      r,
      i = pe.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && pe.extend(!0, e, n), e;
  }
  function G(e, t, n) {
    for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (a in s)
        if (s[a] && s[a].test(i)) {
          l.unshift(a);
          break;
        }
    if (l[0] in n) o = l[0];
    else {
      for (a in n) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          o = a;
          break;
        }
        r || (r = a);
      }
      o = o || r;
    }
    if (o) return o !== l[0] && l.unshift(o), n[o];
  }
  function Y(e, t, n, r) {
    var i,
      o,
      a,
      s,
      l,
      u = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = o),
        (o = c.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (!(a = u[l + " " + o] || u["* " + o]))
            for (i in u)
              if (
                (s = i.split(" "))[1] === o &&
                (a = u[l + " " + s[0]] || u["* " + s[0]])
              ) {
                !0 === a
                  ? (a = u[i])
                  : !0 !== u[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + l + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  function J(e) {
    return (e.style && e.style.display) || pe.css(e, "display");
  }
  function Q(e) {
    if (!pe.contains(e.ownerDocument || re, e)) return !0;
    for (; e && 1 === e.nodeType; ) {
      if ("none" === J(e) || "hidden" === e.type) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  function K(e, t, n, r) {
    var i;
    if (pe.isArray(t))
      pe.each(t, function (t, i) {
        n || an.test(e)
          ? r(e, i)
          : K(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== pe.type(t)) r(e, t);
    else for (i in t) K(e + "[" + i + "]", t[i], n, r);
  }
  function Z() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }
  function ee() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function te(e) {
    return pe.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var ne = [],
    re = e.document,
    ie = ne.slice,
    oe = ne.concat,
    ae = ne.push,
    se = ne.indexOf,
    le = {},
    ue = le.toString,
    ce = le.hasOwnProperty,
    de = {},
    fe = "1.12.4",
    pe = function (e, t) {
      return new pe.fn.init(e, t);
    },
    he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    me = /^-ms-/,
    ge = /-([\da-z])/gi,
    ve = function (e, t) {
      return t.toUpperCase();
    };
  (pe.fn = pe.prototype =
    {
      jquery: fe,
      constructor: pe,
      selector: "",
      length: 0,
      toArray: function () {
        return ie.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : ie.call(this);
      },
      pushStack: function (e) {
        var t = pe.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return pe.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          pe.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(ie.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ae,
      sort: ne.sort,
      splice: ne.splice,
    }),
    (pe.extend = pe.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || pe.isFunction(a) || (a = {}),
            s === l && ((a = this), s--);
          s < l;
          s++
        )
          if (null != (i = arguments[s]))
            for (r in i)
              (e = a[r]),
                a !== (n = i[r]) &&
                  (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n)))
                    ? (t
                        ? ((t = !1), (o = e && pe.isArray(e) ? e : []))
                        : (o = e && pe.isPlainObject(e) ? e : {}),
                      (a[r] = pe.extend(u, o, n)))
                    : void 0 !== n && (a[r] = n));
        return a;
      }),
    pe.extend({
      expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === pe.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === pe.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !ce.call(e, "constructor") &&
            !ce.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        if (!de.ownFirst) for (t in e) return ce.call(e, t);
        for (t in e);
        return void 0 === t || ce.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? le[ue.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (t) {
        t &&
          pe.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(me, "ms-").replace(ge, ve);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var r,
          i = 0;
        if (n(e))
          for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(he, "");
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? pe.merge(r, "string" == typeof e ? [e] : e)
              : ae.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (se) return se.call(t, e, n);
          for (
            r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
            n < r;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
        if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, r) {
        var i,
          o,
          a = 0,
          s = [];
        if (n(e))
          for (i = e.length; a < i; a++)
            null != (o = t(e[a], a, r)) && s.push(o);
        else for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
        return oe.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        if (
          ("string" == typeof t && ((i = e[t]), (t = e), (e = i)),
          pe.isFunction(e))
        )
          return (
            (n = ie.call(arguments, 2)),
            (r = function () {
              return e.apply(t || this, n.concat(ie.call(arguments)));
            }),
            (r.guid = e.guid = e.guid || pe.guid++),
            r
          );
      },
      now: function () {
        return +new Date();
      },
      support: de,
    }),
    "function" == typeof Symbol &&
      (pe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    pe.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        le["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var ye = (function (e) {
    function t(e, t, n, r) {
      var i,
        o,
        a,
        s,
        l,
        u,
        d,
        p,
        h = t && t.ownerDocument,
        m = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : B) !== H && L(t), (t = t || H), F)
      ) {
        if (11 !== m && (u = ve.exec(e)))
          if ((i = u[1])) {
            if (9 === m) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (h && (a = h.getElementById(i)) && O(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = u[3]) &&
              w.getElementsByClassName &&
              t.getElementsByClassName
            )
              return K.apply(n, t.getElementsByClassName(i)), n;
          }
        if (w.qsa && !X[e + " "] && (!R || !R.test(e))) {
          if (1 !== m) (h = t), (p = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(be, "\\$&"))
                : t.setAttribute("id", (s = P)),
                o = (d = k(e)).length,
                l = fe.test(s) ? "#" + s : "[id='" + s + "']";
              o--;

            )
              d[o] = l + " " + f(d[o]);
            (p = d.join(",")), (h = (ye.test(e) && c(t.parentNode)) || t);
          }
          if (p)
            try {
              return K.apply(n, h.querySelectorAll(p)), n;
            } catch (e) {
            } finally {
              s === P && t.removeAttribute("id");
            }
        }
      }
      return N(e.replace(se, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return (
          t.push(n + " ") > T.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[P] = !0), e;
    }
    function i(e) {
      var t = H.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) T.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function u(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function c(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function d() {}
    function f(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function p(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = W++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, a) {
            var s,
              l,
              u,
              c = [I, o];
            if (a) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    (s = (l =
                      (u = t[P] || (t[P] = {}))[t.uniqueID] ||
                      (u[t.uniqueID] = {}))[r]) &&
                    s[0] === I &&
                    s[1] === o
                  )
                    return (c[2] = s[2]);
                  if (((l[r] = c), (c[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function h(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function m(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
      return r;
    }
    function g(e, t, n, r, i) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
      return a;
    }
    function v(e, t, n, i, o, a) {
      return (
        i && !i[P] && (i = v(i)),
        o && !o[P] && (o = v(o, a)),
        r(function (r, a, s, l) {
          var u,
            c,
            d,
            f = [],
            p = [],
            h = a.length,
            v = r || m(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!r && t) ? v : g(v, f, e, s, l),
            b = n ? (o || (r ? e : h || i) ? [] : a) : y;
          if ((n && n(y, b, s, l), i))
            for (u = g(b, p), i(u, [], s, l), c = u.length; c--; )
              (d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (u = [], c = b.length; c--; )
                  (d = b[c]) && u.push((y[c] = d));
                o(null, (b = []), u, l);
              }
              for (c = b.length; c--; )
                (d = b[c]) &&
                  (u = o ? ee(r, d) : f[c]) > -1 &&
                  (r[u] = !(a[u] = d));
            }
          } else (b = g(b === a ? b.splice(h, b.length) : b)), o ? o(null, a, b, l) : K.apply(a, b);
        })
      );
    }
    function y(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = T.relative[e[0].type],
          a = o || T.relative[" "],
          s = o ? 1 : 0,
          l = p(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          u = p(
            function (e) {
              return ee(t, e) > -1;
            },
            a,
            !0
          ),
          c = [
            function (e, n, r) {
              var i =
                (!o && (r || n !== j)) ||
                ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
              return (t = null), i;
            },
          ];
        s < i;
        s++
      )
        if ((n = T.relative[e[s].type])) c = [p(h(c), n)];
        else {
          if ((n = T.filter[e[s].type].apply(null, e[s].matches))[P]) {
            for (r = ++s; r < i && !T.relative[e[r].type]; r++);
            return v(
              s > 1 && h(c),
              s > 1 &&
                f(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(se, "$1"),
              n,
              s < r && y(e.slice(s, r)),
              r < i && y((e = e.slice(r))),
              r < i && f(e)
            );
          }
          c.push(n);
        }
      return h(c);
    }
    function b(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function (r, a, s, l, u) {
          var c,
            d,
            f,
            p = 0,
            h = "0",
            m = r && [],
            v = [],
            y = j,
            b = r || (o && T.find.TAG("*", u)),
            x = (I += null == y ? 1 : Math.random() || 0.1),
            w = b.length;
          for (
            u && (j = a === H || a || u);
            h !== w && null != (c = b[h]);
            h++
          ) {
            if (o && c) {
              for (
                d = 0, a || c.ownerDocument === H || (L(c), (s = !F));
                (f = e[d++]);

              )
                if (f(c, a || H, s)) {
                  l.push(c);
                  break;
                }
              u && (I = x);
            }
            i && ((c = !f && c) && p--, r && m.push(c));
          }
          if (((p += h), i && h !== p)) {
            for (d = 0; (f = n[d++]); ) f(m, v, a, s);
            if (r) {
              if (p > 0) for (; h--; ) m[h] || v[h] || (v[h] = J.call(l));
              v = g(v);
            }
            K.apply(l, v),
              u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l);
          }
          return u && ((I = x), (j = y)), m;
        };
      return i ? r(a) : a;
    }
    var x,
      w,
      T,
      C,
      E,
      k,
      S,
      N,
      j,
      D,
      A,
      L,
      H,
      q,
      F,
      R,
      _,
      M,
      O,
      P = "sizzle" + 1 * new Date(),
      B = e.document,
      I = 0,
      W = 0,
      $ = n(),
      z = n(),
      X = n(),
      U = function (e, t) {
        return e === t && (A = !0), 0;
      },
      V = 1 << 31,
      G = {}.hasOwnProperty,
      Y = [],
      J = Y.pop,
      Q = Y.push,
      K = Y.push,
      Z = Y.slice,
      ee = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ie =
        "\\[" +
        ne +
        "*(" +
        re +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        re +
        "))|)" +
        ne +
        "*\\]",
      oe =
        ":(" +
        re +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ie +
        ")*)|.*)\\)|)",
      ae = new RegExp(ne + "+", "g"),
      se = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      le = new RegExp("^" + ne + "*," + ne + "*"),
      ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      de = new RegExp(oe),
      fe = new RegExp("^" + re + "$"),
      pe = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re + "|[*])"),
        ATTR: new RegExp("^" + ie),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      he = /^(?:input|select|textarea|button)$/i,
      me = /^h\d$/i,
      ge = /^[^{]+\{\s*\[native \w/,
      ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      be = /'|\\/g,
      xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      we = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      Te = function () {
        L();
      };
    try {
      K.apply((Y = Z.call(B.childNodes)), B.childNodes),
        Y[B.childNodes.length].nodeType;
    } catch (e) {
      K = {
        apply: Y.length
          ? function (e, t) {
              Q.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    for (x in ((w = t.support = {}),
    (E = t.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (L = t.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : B;
        return r !== H && 9 === r.nodeType && r.documentElement
          ? ((q = (H = r).documentElement),
            (F = !E(H)),
            (n = H.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", Te, !1)
                : n.attachEvent && n.attachEvent("onunload", Te)),
            (w.attributes = i(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (w.getElementsByTagName = i(function (e) {
              return (
                e.appendChild(H.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (w.getElementsByClassName = ge.test(H.getElementsByClassName)),
            (w.getById = i(function (e) {
              return (
                (q.appendChild(e).id = P),
                !H.getElementsByName || !H.getElementsByName(P).length
              );
            })),
            w.getById
              ? ((T.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && F) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }),
                (T.filter.ID = function (e) {
                  var t = e.replace(xe, we);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete T.find.ID,
                (T.filter.ID = function (e) {
                  var t = e.replace(xe, we);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                })),
            (T.find.TAG = w.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : w.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (T.find.CLASS =
              w.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && F)
                  return t.getElementsByClassName(e);
              }),
            (_ = []),
            (R = []),
            (w.qsa = ge.test(H.querySelectorAll)) &&
              (i(function (e) {
                (q.appendChild(e).innerHTML =
                  "<a id='" +
                  P +
                  "'></a><select id='" +
                  P +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    R.push("[*^$]=" + ne + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    R.push("\\[" + ne + "*(?:value|" + te + ")"),
                  e.querySelectorAll("[id~=" + P + "-]").length || R.push("~="),
                  e.querySelectorAll(":checked").length || R.push(":checked"),
                  e.querySelectorAll("a#" + P + "+*").length ||
                    R.push(".#.+[+~]");
              }),
              i(function (e) {
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    R.push("name" + ne + "*[*^$|!~]?="),
                  e.querySelectorAll(":enabled").length ||
                    R.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  R.push(",.*:");
              })),
            (w.matchesSelector = ge.test(
              (M =
                q.matches ||
                q.webkitMatchesSelector ||
                q.mozMatchesSelector ||
                q.oMatchesSelector ||
                q.msMatchesSelector)
            )) &&
              i(function (e) {
                (w.disconnectedMatch = M.call(e, "div")),
                  M.call(e, "[s!='']:x"),
                  _.push("!=", oe);
              }),
            (R = R.length && new RegExp(R.join("|"))),
            (_ = _.length && new RegExp(_.join("|"))),
            (t = ge.test(q.compareDocumentPosition)),
            (O =
              t || ge.test(q.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (U = t
              ? function (e, t) {
                  if (e === t) return (A = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!w.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === H || (e.ownerDocument === B && O(B, e))
                        ? -1
                        : t === H || (t.ownerDocument === B && O(B, t))
                        ? 1
                        : D
                        ? ee(D, e) - ee(D, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (A = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                  if (!i || !o)
                    return e === H
                      ? -1
                      : t === H
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : D
                      ? ee(D, e) - ee(D, t)
                      : 0;
                  if (i === o) return a(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) l.unshift(n);
                  for (; s[r] === l[r]; ) r++;
                  return r
                    ? a(s[r], l[r])
                    : s[r] === B
                    ? -1
                    : l[r] === B
                    ? 1
                    : 0;
                }),
            H)
          : H;
      }),
    (t.matches = function (e, n) {
      return t(e, null, null, n);
    }),
    (t.matchesSelector = function (e, n) {
      if (
        ((e.ownerDocument || e) !== H && L(e),
        (n = n.replace(ce, "='$1']")),
        w.matchesSelector &&
          F &&
          !X[n + " "] &&
          (!_ || !_.test(n)) &&
          (!R || !R.test(n)))
      )
        try {
          var r = M.call(e, n);
          if (
            r ||
            w.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {}
      return t(n, H, null, [e]).length > 0;
    }),
    (t.contains = function (e, t) {
      return (e.ownerDocument || e) !== H && L(e), O(e, t);
    }),
    (t.attr = function (e, t) {
      (e.ownerDocument || e) !== H && L(e);
      var n = T.attrHandle[t.toLowerCase()],
        r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
      return void 0 !== r
        ? r
        : w.attributes || !F
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (t.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((A = !w.detectDuplicates),
        (D = !w.sortStable && e.slice(0)),
        e.sort(U),
        A)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (D = null), e;
    }),
    (C = t.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += C(t);
        return n;
      }),
    (T = t.selectors =
      {
        cacheLength: 50,
        createPseudo: r,
        match: pe,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(xe, we)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || t.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && t.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return pe.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    de.test(n) &&
                    (t = k(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(xe, we).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = $[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                $(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, n, r) {
            return function (i) {
              var o = t.attr(i, e);
              return null == o
                ? "!=" === n
                : !n ||
                    ((o += ""),
                    "=" === n
                      ? o === r
                      : "!=" === n
                      ? o !== r
                      : "^=" === n
                      ? r && 0 === o.indexOf(r)
                      : "*=" === n
                      ? r && o.indexOf(r) > -1
                      : "$=" === n
                      ? r && o.slice(-r.length) === r
                      : "~=" === n
                      ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1
                      : "|=" === n &&
                        (o === r || o.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var u,
                    c,
                    d,
                    f,
                    p,
                    h,
                    m = o !== a ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = s && t.nodeName.toLowerCase(),
                    y = !l && !s,
                    b = !1;
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (f = t; (f = f[m]); )
                          if (
                            s
                              ? f.nodeName.toLowerCase() === v
                              : 1 === f.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                      for (
                        b =
                          (p =
                            (u =
                              (c =
                                (d = (f = g)[P] || (f[P] = {}))[f.uniqueID] ||
                                (d[f.uniqueID] = {}))[e] || [])[0] === I &&
                            u[1]) && u[2],
                          f = p && g.childNodes[p];
                        (f = (++p && f && f[m]) || (b = p = 0) || h.pop());

                      )
                        if (1 === f.nodeType && ++b && f === t) {
                          c[e] = [I, p, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = p =
                          (u =
                            (c =
                              (d = (f = t)[P] || (f[P] = {}))[f.uniqueID] ||
                              (d[f.uniqueID] = {}))[e] || [])[0] === I && u[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (f = (++p && f && f[m]) || (b = p = 0) || h.pop()) &&
                        ((s
                          ? f.nodeName.toLowerCase() !== v
                          : 1 !== f.nodeType) ||
                          !++b ||
                          (y &&
                            ((c =
                              (d = f[P] || (f[P] = {}))[f.uniqueID] ||
                              (d[f.uniqueID] = {}))[e] = [I, b]),
                          f !== t));

                      );
                    return (b -= i) === r || (b % r == 0 && b / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, n) {
            var i,
              o =
                T.pseudos[e] ||
                T.setFilters[e.toLowerCase()] ||
                t.error("unsupported pseudo: " + e);
            return o[P]
              ? o(n)
              : o.length > 1
              ? ((i = [e, e, "", n]),
                T.setFilters.hasOwnProperty(e.toLowerCase())
                  ? r(function (e, t) {
                      for (var r, i = o(e, n), a = i.length; a--; )
                        e[(r = ee(e, i[a]))] = !(t[r] = i[a]);
                    })
                  : function (e) {
                      return o(e, 0, i);
                    })
              : o;
          },
        },
        pseudos: {
          not: r(function (e) {
            var t = [],
              n = [],
              i = S(e.replace(se, "$1"));
            return i[P]
              ? r(function (e, t, n, r) {
                  for (var o, a = i(e, null, r, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: r(function (e) {
            return function (n) {
              return t(e, n).length > 0;
            };
          }),
          contains: r(function (e) {
            return (
              (e = e.replace(xe, we)),
              function (t) {
                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: r(function (e) {
            return (
              fe.test(e || "") || t.error("unsupported lang: " + e),
              (e = e.replace(xe, we).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = F
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === q;
          },
          focus: function (e) {
            return (
              e === H.activeElement &&
              (!H.hasFocus || H.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !T.pseudos.empty(e);
          },
          header: function (e) {
            return me.test(e.nodeName);
          },
          input: function (e) {
            return he.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: u(function () {
            return [0];
          }),
          last: u(function (e, t) {
            return [t - 1];
          }),
          eq: u(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: u(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: u(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: u(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: u(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }),
    (T.pseudos.nth = T.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      T.pseudos[x] = s(x);
    for (x in { submit: !0, reset: !0 }) T.pseudos[x] = l(x);
    return (
      (d.prototype = T.filters = T.pseudos),
      (T.setFilters = new d()),
      (k = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c = z[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (s = e, l = [], u = T.preFilter; s; ) {
            for (a in ((r && !(i = le.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), l.push((o = []))),
            (r = !1),
            (i = ue.exec(s)) &&
              ((r = i.shift()),
              o.push({ value: r, type: i[0].replace(se, " ") }),
              (s = s.slice(r.length))),
            T.filter))
              !(i = pe[a].exec(s)) ||
                (u[a] && !(i = u[a](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: a, matches: i }),
                (s = s.slice(r.length)));
            if (!r) break;
          }
          return n ? s.length : s ? t.error(e) : z(e, l).slice(0);
        }),
      (S = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = X[e + " "];
          if (!o) {
            for (t || (t = k(e)), n = t.length; n--; )
              (o = y(t[n]))[P] ? r.push(o) : i.push(o);
            (o = X(e, b(i, r))).selector = e;
          }
          return o;
        }),
      (N = t.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            l,
            u = "function" == typeof e && e,
            d = !r && k((e = u.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (o = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (a = o[0]).type &&
              w.getById &&
              9 === t.nodeType &&
              F &&
              T.relative[o[1].type]
            ) {
              if (!(t = (T.find.ID(a.matches[0].replace(xe, we), t) || [])[0]))
                return n;
              u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = pe.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !T.relative[(s = a.type)]);

            )
              if (
                (l = T.find[s]) &&
                (r = l(
                  a.matches[0].replace(xe, we),
                  (ye.test(o[0].type) && c(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && f(o))))
                  return K.apply(n, r), n;
                break;
              }
          }
          return (
            (u || S(e, d))(
              r,
              t,
              !F,
              n,
              !t || (ye.test(e) && c(t.parentNode)) || t
            ),
            n
          );
        }),
      (w.sortStable = P.split("").sort(U).join("") === P),
      (w.detectDuplicates = !!A),
      L(),
      (w.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(H.createElement("div"));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(te, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      t
    );
  })(e);
  (pe.find = ye),
    (pe.expr = ye.selectors),
    (pe.expr[":"] = pe.expr.pseudos),
    (pe.uniqueSort = pe.unique = ye.uniqueSort),
    (pe.text = ye.getText),
    (pe.isXMLDoc = ye.isXML),
    (pe.contains = ye.contains);
  var be = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && pe(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    xe = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    we = pe.expr.match.needsContext,
    Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    Ce = /^.[^:#\[\.,]*$/;
  (pe.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? pe.find.matchesSelector(r, e)
          ? [r]
          : []
        : pe.find.matches(
            e,
            pe.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    pe.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ("string" != typeof e)
          return this.pushStack(
            pe(e).filter(function () {
              for (t = 0; t < i; t++) if (pe.contains(r[t], this)) return !0;
            })
          );
        for (t = 0; t < i; t++) pe.find(e, r[t], n);
        return (
          ((n = this.pushStack(i > 1 ? pe.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(r(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(r(this, e || [], !0));
      },
      is: function (e) {
        return !!r(
          this,
          "string" == typeof e && we.test(e) ? pe(e) : e || [],
          !1
        ).length;
      },
    });
  var Ee,
    ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((pe.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || Ee), "string" == typeof e)) {
      if (
        !(r =
          "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
            ? [null, e, null]
            : ke.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof pe ? t[0] : t),
          pe.merge(
            this,
            pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)
          ),
          Te.test(r[1]) && pe.isPlainObject(t))
        )
          for (r in t)
            pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      if ((i = re.getElementById(r[2])) && i.parentNode) {
        if (i.id !== r[2]) return Ee.find(e);
        (this.length = 1), (this[0] = i);
      }
      return (this.context = re), (this.selector = e), this;
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : pe.isFunction(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(pe)
      : (void 0 !== e.selector &&
          ((this.selector = e.selector), (this.context = e.context)),
        pe.makeArray(e, this));
  }).prototype = pe.fn),
    (Ee = pe(re));
  var Se = /^(?:parents|prev(?:Until|All))/,
    Ne = { children: !0, contents: !0, next: !0, prev: !0 };
  pe.fn.extend({
    has: function (e) {
      var t,
        n = pe(e, this),
        r = n.length;
      return this.filter(function () {
        for (t = 0; t < r; t++) if (pe.contains(this, n[t])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0;
        r < i;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? a.index(n) > -1
              : 1 === n.nodeType && pe.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? pe.inArray(this[0], pe(e))
          : pe.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    pe.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return be(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return be(e, "parentNode", n);
        },
        next: function (e) {
          return i(e, "nextSibling");
        },
        prev: function (e) {
          return i(e, "previousSibling");
        },
        nextAll: function (e) {
          return be(e, "nextSibling");
        },
        prevAll: function (e) {
          return be(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return be(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return be(e, "previousSibling", n);
        },
        siblings: function (e) {
          return xe((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return xe(e.firstChild);
        },
        contents: function (e) {
          return pe.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : pe.merge([], e.childNodes);
        },
      },
      function (e, t) {
        pe.fn[e] = function (n, r) {
          var i = pe.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = pe.filter(r, i)),
            this.length > 1 &&
              (Ne[e] || (i = pe.uniqueSort(i)),
              Se.test(e) && (i = i.reverse())),
            this.pushStack(i)
          );
        };
      }
    );
  var je,
    De,
    Ae = /\S+/g;
  for (De in ((pe.Callbacks = function (e) {
    e = "string" == typeof e ? o(e) : pe.extend({}, e);
    var t,
      n,
      r,
      i,
      a = [],
      s = [],
      l = -1,
      u = function () {
        for (i = e.once, r = t = !0; s.length; l = -1)
          for (n = s.shift(); ++l < a.length; )
            !1 === a[l].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((l = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (a = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            a &&
              (n && !t && ((l = a.length - 1), s.push(n)),
              (function t(n) {
                pe.each(n, function (n, r) {
                  pe.isFunction(r)
                    ? (e.unique && c.has(r)) || a.push(r)
                    : r && r.length && "string" !== pe.type(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            pe.each(arguments, function (e, t) {
              for (var n; (n = pe.inArray(t, a, n)) > -1; )
                a.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? pe.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (i = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (i = !0), n || c.disable(), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return c;
  }),
  pe.extend({
    Deferred: function (e) {
      var t = [
          ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
          ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
          ["notify", "progress", pe.Callbacks("memory")],
        ],
        n = "pending",
        r = {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return pe
              .Deferred(function (n) {
                pe.each(t, function (t, o) {
                  var a = pe.isFunction(e[t]) && e[t];
                  i[o[1]](function () {
                    var e = a && a.apply(this, arguments);
                    e && pe.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(n.notify)
                          .done(n.resolve)
                          .fail(n.reject)
                      : n[o[0] + "With"](
                          this === r ? n.promise() : this,
                          a ? [e] : arguments
                        );
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? pe.extend(e, r) : r;
          },
        },
        i = {};
      return (
        (r.pipe = r.then),
        pe.each(t, function (e, o) {
          var a = o[2],
            s = o[3];
          (r[o[1]] = a.add),
            s &&
              a.add(
                function () {
                  n = s;
                },
                t[1 ^ e][2].disable,
                t[2][2].lock
              ),
            (i[o[0]] = function () {
              return i[o[0] + "With"](this === i ? r : this, arguments), this;
            }),
            (i[o[0] + "With"] = a.fireWith);
        }),
        r.promise(i),
        e && e.call(i, i),
        i
      );
    },
    when: function (e) {
      var t,
        n,
        r,
        i = 0,
        o = ie.call(arguments),
        a = o.length,
        s = 1 !== a || (e && pe.isFunction(e.promise)) ? a : 0,
        l = 1 === s ? e : pe.Deferred(),
        u = function (e, n, r) {
          return function (i) {
            (n[e] = this),
              (r[e] = arguments.length > 1 ? ie.call(arguments) : i),
              r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
          };
        };
      if (a > 1)
        for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)
          o[i] && pe.isFunction(o[i].promise)
            ? o[i]
                .promise()
                .progress(u(i, n, t))
                .done(u(i, r, o))
                .fail(l.reject)
            : --s;
      return s || l.resolveWith(r, o), l.promise();
    },
  }),
  (pe.fn.ready = function (e) {
    return pe.ready.promise().done(e), this;
  }),
  pe.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? pe.readyWait++ : pe.ready(!0);
    },
    ready: function (e) {
      (!0 === e ? --pe.readyWait : pe.isReady) ||
        ((pe.isReady = !0),
        (!0 !== e && --pe.readyWait > 0) ||
          (je.resolveWith(re, [pe]),
          pe.fn.triggerHandler &&
            (pe(re).triggerHandler("ready"), pe(re).off("ready"))));
    },
  }),
  (pe.ready.promise = function (t) {
    if (!je)
      if (
        ((je = pe.Deferred()),
        "complete" === re.readyState ||
          ("loading" !== re.readyState && !re.documentElement.doScroll))
      )
        e.setTimeout(pe.ready);
      else if (re.addEventListener)
        re.addEventListener("DOMContentLoaded", s),
          e.addEventListener("load", s);
      else {
        re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
        var n = !1;
        try {
          n = null == e.frameElement && re.documentElement;
        } catch (e) {}
        n &&
          n.doScroll &&
          (function t() {
            if (!pe.isReady) {
              try {
                n.doScroll("left");
              } catch (n) {
                return e.setTimeout(t, 50);
              }
              a(), pe.ready();
            }
          })();
      }
    return je.promise(t);
  }),
  pe.ready.promise(),
  pe(de)))
    break;
  (de.ownFirst = "0" === De),
    (de.inlineBlockNeedsLayout = !1),
    pe(function () {
      var e, t, n, r;
      (n = re.getElementsByTagName("body")[0]) &&
        n.style &&
        ((t = re.createElement("div")),
        ((r = re.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(r).appendChild(t),
        void 0 !== t.style.zoom &&
          ((t.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
          e && (n.style.zoom = 1)),
        n.removeChild(r));
    }),
    (function () {
      var e = re.createElement("div");
      de.deleteExpando = !0;
      try {
        delete e.test;
      } catch (e) {
        de.deleteExpando = !1;
      }
      e = null;
    })();
  var Le,
    He = function (e) {
      var t = pe.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (!0 !== t && e.getAttribute("classid") === t))
      );
    },
    qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Fe = /([A-Z])/g;
  pe.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return (
        !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !u(e)
      );
    },
    data: function (e, t, n) {
      return c(e, t, n);
    },
    removeData: function (e, t) {
      return d(e, t);
    },
    _data: function (e, t, n) {
      return c(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return d(e, t, !0);
    },
  }),
    pe.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = pe.data(o)), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                l(o, (r = pe.camelCase(r.slice(5))), i[r]);
            pe._data(o, "parsedAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              pe.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              pe.data(this, e, t);
            })
          : o
          ? l(o, e, pe.data(o, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          pe.removeData(this, e);
        });
      },
    }),
    pe.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = pe._data(e, t)),
            n &&
              (!r || pe.isArray(n)
                ? (r = pe._data(e, t, pe.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = pe.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = pe._queueHooks(e, t),
          a = function () {
            pe.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          pe._data(e, n) ||
          pe._data(e, n, {
            empty: pe.Callbacks("once memory").add(function () {
              pe._removeData(e, t + "queue"), pe._removeData(e, n);
            }),
          })
        );
      },
    }),
    pe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? pe.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          pe.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = pe.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = pe._data(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    }),
    (de.shrinkWrapBlocks = function () {
      return null != Le
        ? Le
        : ((Le = !1),
          (t = re.getElementsByTagName("body")[0]) && t.style
            ? ((e = re.createElement("div")),
              ((n = re.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              t.appendChild(n).appendChild(e),
              void 0 !== e.style.zoom &&
                ((e.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (e.appendChild(re.createElement("div")).style.width = "5px"),
                (Le = 3 !== e.offsetWidth)),
              t.removeChild(n),
              Le)
            : void 0);
      var e, t, n;
    });
  var Re,
    _e,
    Me,
    Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Pe = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
    Be = ["Top", "Right", "Bottom", "Left"],
    Ie = function (e, t) {
      return (
        (e = t || e),
        "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
      );
    },
    We = function (e, t, n, r, i, o, a) {
      var s = 0,
        l = e.length,
        u = null == n;
      if ("object" === pe.type(n))
        for (s in ((i = !0), n)) We(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        pe.isFunction(r) || (a = !0),
        u &&
          (a
            ? (t.call(e, r), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(pe(e), n);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    $e = /^(?:checkbox|radio)$/i,
    ze = /<([\w:-]+)/,
    Xe = /^$|\/(?:java|ecma)script/i,
    Ue = /^\s+/,
    Ve =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  (Re = re.createElement("div")),
    (_e = re.createDocumentFragment()),
    (Me = re.createElement("input")),
    (Re.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (de.leadingWhitespace = 3 === Re.firstChild.nodeType),
    (de.tbody = !Re.getElementsByTagName("tbody").length),
    (de.htmlSerialize = !!Re.getElementsByTagName("link").length),
    (de.html5Clone =
      "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML),
    (Me.type = "checkbox"),
    (Me.checked = !0),
    _e.appendChild(Me),
    (de.appendChecked = Me.checked),
    (Re.innerHTML = "<textarea>x</textarea>"),
    (de.noCloneChecked = !!Re.cloneNode(!0).lastChild.defaultValue),
    _e.appendChild(Re),
    (Me = re.createElement("input")).setAttribute("type", "radio"),
    Me.setAttribute("checked", "checked"),
    Me.setAttribute("name", "t"),
    Re.appendChild(Me),
    (de.checkClone = Re.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (de.noCloneEvent = !!Re.addEventListener),
    (Re[pe.expando] = 1),
    (de.attributes = !Re.getAttribute(pe.expando));
  var Ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (Ge.optgroup = Ge.option),
    (Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead),
    (Ge.th = Ge.td);
  var Ye = /<|&#?\w+;/,
    Je = /<tbody/i;
  !(function () {
    var t,
      n,
      r = re.createElement("div");
    for (t in { submit: !0, change: !0, focusin: !0 })
      (n = "on" + t),
        (de[t] = n in e) ||
          (r.setAttribute(n, "t"), (de[t] = !1 === r.attributes[n].expando));
    r = null;
  })();
  var Qe = /^(?:input|select|textarea)$/i,
    Ke = /^key/,
    Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    et = /^(?:focusinfocus|focusoutblur)$/,
    tt = /^([^.]*)(?:\.(.+)|)/;
  (pe.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        m,
        g = pe._data(e);
      if (g) {
        for (
          n.handler && ((n = (l = n).handler), (i = l.selector)),
            n.guid || (n.guid = pe.guid++),
            (a = g.events) || (a = g.events = {}),
            (c = g.handle) ||
              ((c = g.handle =
                function (e) {
                  return void 0 === pe || (e && pe.event.triggered === e.type)
                    ? void 0
                    : pe.event.dispatch.apply(c.elem, arguments);
                }),
              (c.elem = e)),
            s = (t = (t || "").match(Ae) || [""]).length;
          s--;

        )
          (p = m = (o = tt.exec(t[s]) || [])[1]),
            (h = (o[2] || "").split(".").sort()),
            p &&
              ((u = pe.event.special[p] || {}),
              (p = (i ? u.delegateType : u.bindType) || p),
              (u = pe.event.special[p] || {}),
              (d = pe.extend(
                {
                  type: p,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && pe.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                l
              )),
              (f = a[p]) ||
                (((f = a[p] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, r, h, c)) ||
                  (e.addEventListener
                    ? e.addEventListener(p, c, !1)
                    : e.attachEvent && e.attachEvent("on" + p, c))),
              u.add &&
                (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
              (pe.event.global[p] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        m,
        g = pe.hasData(e) && pe._data(e);
      if (g && (c = g.events)) {
        for (u = (t = (t || "").match(Ae) || [""]).length; u--; )
          if (
            ((p = m = (s = tt.exec(t[u]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              d = pe.event.special[p] || {},
                f = c[(p = (r ? d.delegateType : d.bindType) || p)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = o = f.length;
              o--;

            )
              (a = f[o]),
                (!i && m !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                  (f.splice(o, 1),
                  a.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, a));
            l &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                pe.removeEvent(e, p, g.handle),
              delete c[p]);
          } else for (p in c) pe.event.remove(e, p + t[u], n, r, !0);
        pe.isEmptyObject(c) && (delete g.handle, pe._removeData(e, "events"));
      }
    },
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        f = [r || re],
        p = ce.call(t, "type") ? t.type : t,
        h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = c = r = r || re),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !et.test(p + pe.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((h = p.split(".")), (p = h.shift()), h.sort()),
          (a = p.indexOf(":") < 0 && "on" + p),
          ((t = t[pe.expando]
            ? t
            : new pe.Event(p, "object" == typeof t && t)).isTrigger = i
            ? 2
            : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : pe.makeArray(n, [t])),
          (u = pe.event.special[p] || {}),
          i || !u.trigger || !1 !== u.trigger.apply(r, n)))
      ) {
        if (!i && !u.noBubble && !pe.isWindow(r)) {
          for (
            l = u.delegateType || p, et.test(l + p) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            f.push(s), (c = s);
          c === (r.ownerDocument || re) &&
            f.push(c.defaultView || c.parentWindow || e);
        }
        for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
          (t.type = d > 1 ? l : u.bindType || p),
            (o =
              (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle")) &&
              o.apply(s, n),
            (o = a && s[a]) &&
              o.apply &&
              He(s) &&
              ((t.result = o.apply(s, n)),
              !1 === t.result && t.preventDefault());
        if (
          ((t.type = p),
          !i &&
            !t.isDefaultPrevented() &&
            (!u._default || !1 === u._default.apply(f.pop(), n)) &&
            He(r) &&
            a &&
            r[p] &&
            !pe.isWindow(r))
        ) {
          (c = r[a]) && (r[a] = null), (pe.event.triggered = p);
          try {
            r[p]();
          } catch (e) {}
          (pe.event.triggered = void 0), c && (r[a] = c);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = pe.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        a = [],
        s = ie.call(arguments),
        l = (pe._data(this, "events") || {})[e.type] || [],
        u = pe.event.special[e.type] || {};
      if (
        ((s[0] = e),
        (e.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, e))
      ) {
        for (
          a = pe.event.handlers.call(this, e, l), t = 0;
          (i = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
              ((e.handleObj = o),
              (e.data = o.data),
              void 0 !==
                (r = (
                  (pe.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (e.result = r) &&
                (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        l = e.target;
      if (
        s &&
        l.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (r = [], n = 0; n < s; n++)
              void 0 === r[(i = (o = t[n]).selector + " ")] &&
                (r[i] = o.needsContext
                  ? pe(i, this).index(l) > -1
                  : pe.find(i, this, null, [l]).length),
                r[i] && r.push(o);
            r.length && a.push({ elem: l, handlers: r });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    fix: function (e) {
      if (e[pe.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (
        a ||
          (this.fixHooks[i] = a =
            Ze.test(i) ? this.mouseHooks : Ke.test(i) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new pe.Event(o),
          t = r.length;
        t--;

      )
        e[(n = r[t])] = o[n];
      return (
        e.target || (e.target = o.srcElement || re),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        a.filter ? a.filter(e, o) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button,
          a = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((i = (r = e.target.ownerDocument || re).documentElement),
            (n = r.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
              ((i && i.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            a &&
            (e.relatedTarget = a === e.target ? t.toElement : a),
          e.which ||
            void 0 === o ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== x() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === x() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            pe.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
        _default: function (e) {
          return pe.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n) {
      var r = pe.extend(new pe.Event(), n, { type: e, isSimulated: !0 });
      pe.event.trigger(r, null, t),
        r.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (pe.removeEvent = re.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }
      : function (e, t, n) {
          var r = "on" + t;
          e.detachEvent &&
            (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n));
        }),
    (pe.Event = function (e, t) {
      if (!(this instanceof pe.Event)) return new pe.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? y
              : b))
        : (this.type = e),
        t && pe.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || pe.now()),
        (this[pe.expando] = !0);
    }),
    (pe.Event.prototype = {
      constructor: pe.Event,
      isDefaultPrevented: b,
      isPropagationStopped: b,
      isImmediatePropagationStopped: b,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = y),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = y),
          e &&
            !this.isSimulated &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = y),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    pe.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        pe.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || pe.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    de.submit ||
      (pe.event.special.submit = {
        setup: function () {
          if (pe.nodeName(this, "form")) return !1;
          pe.event.add(this, "click._submit keypress._submit", function (e) {
            var t = e.target,
              n =
                pe.nodeName(t, "input") || pe.nodeName(t, "button")
                  ? pe.prop(t, "form")
                  : void 0;
            n &&
              !pe._data(n, "submit") &&
              (pe.event.add(n, "submit._submit", function (e) {
                e._submitBubble = !0;
              }),
              pe._data(n, "submit", !0));
          });
        },
        postDispatch: function (e) {
          e._submitBubble &&
            (delete e._submitBubble,
            this.parentNode &&
              !e.isTrigger &&
              pe.event.simulate("submit", this.parentNode, e));
        },
        teardown: function () {
          if (pe.nodeName(this, "form")) return !1;
          pe.event.remove(this, "._submit");
        },
      }),
    de.change ||
      (pe.event.special.change = {
        setup: function () {
          if (Qe.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (pe.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                pe.event.add(this, "click._change", function (e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    pe.event.simulate("change", this, e);
                })),
              !1
            );
          pe.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            Qe.test(t.nodeName) &&
              !pe._data(t, "change") &&
              (pe.event.add(t, "change._change", function (e) {
                !this.parentNode ||
                  e.isSimulated ||
                  e.isTrigger ||
                  pe.event.simulate("change", this.parentNode, e);
              }),
              pe._data(t, "change", !0));
          });
        },
        handle: function (e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return pe.event.remove(this, "._change"), !Qe.test(this.nodeName);
        },
      }),
    de.focusin ||
      pe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          pe.event.simulate(t, e.target, pe.event.fix(e));
        };
        pe.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = pe._data(r, t);
            i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = pe._data(r, t) - 1;
            i
              ? pe._data(r, t, i)
              : (r.removeEventListener(e, n, !0), pe._removeData(r, t));
          },
        };
      }),
    pe.fn.extend({
      on: function (e, t, n, r) {
        return w(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return w(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            pe(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = b),
          this.each(function () {
            pe.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          pe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return pe.event.trigger(e, t, n, !0);
      },
    });
  var nt = / jQuery\d+="(?:null|\d+)"/g,
    rt = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"),
    it =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    ot = /<script|<style|<link/i,
    at = /checked\s*(?:[^=]|=\s*.checked.)/i,
    st = /^true\/(.*)/,
    lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ut = p(re).appendChild(re.createElement("div"));
  pe.extend({
    htmlPrefilter: function (e) {
      return e.replace(it, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        l = pe.contains(e.ownerDocument, e);
      if (
        (de.html5Clone || pe.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">")
          ? (o = e.cloneNode(!0))
          : ((ut.innerHTML = e.outerHTML), ut.removeChild((o = ut.firstChild))),
        !(
          (de.noCloneEvent && de.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          pe.isXMLDoc(e)
        ))
      )
        for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a)
          r[a] && S(i, r[a]);
      if (t)
        if (n)
          for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++)
            k(i, r[a]);
        else k(e, o);
      return (
        (r = h(o, "script")).length > 0 && m(r, !l && h(e, "script")),
        (r = s = i = null),
        o
      );
    },
    cleanData: function (e, t) {
      for (
        var n,
          r,
          i,
          o,
          a = 0,
          s = pe.expando,
          l = pe.cache,
          u = de.attributes,
          c = pe.event.special;
        null != (n = e[a]);
        a++
      )
        if ((t || He(n)) && (o = (i = n[s]) && l[i])) {
          if (o.events)
            for (r in o.events)
              c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
          l[i] &&
            (delete l[i],
            u || void 0 === n.removeAttribute
              ? (n[s] = void 0)
              : n.removeAttribute(s),
            ne.push(i));
        }
    },
  }),
    pe.fn.extend({
      domManip: N,
      detach: function (e) {
        return j(this, e, !0);
      },
      remove: function (e) {
        return j(this, e);
      },
      text: function (e) {
        return We(
          this,
          function (e) {
            return void 0 === e
              ? pe.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || re).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return N(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            T(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return N(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = T(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return N(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return N(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && pe.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return pe.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return We(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e)
              return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : void 0;
            if (
              "string" == typeof e &&
              !ot.test(e) &&
              (de.htmlSerialize || !rt.test(e)) &&
              (de.leadingWhitespace || !Ue.test(e)) &&
              !Ge[(ze.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = pe.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (pe.cleanData(h(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return N(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            pe.inArray(this, e) < 0 &&
              (pe.cleanData(h(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    pe.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        pe.fn[e] = function (e) {
          for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; r <= a; r++)
            (n = r === a ? this : this.clone(!0)),
              pe(o[r])[t](n),
              ae.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var ct,
    dt = { HTML: "block", BODY: "block" },
    ft = /^margin/,
    pt = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
    ht = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    },
    mt = re.documentElement;
  !(function () {
    function t() {
      var t,
        c,
        d = re.documentElement;
      d.appendChild(l),
        (u.style.cssText =
          "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (n = i = s = !1),
        (r = a = !0),
        e.getComputedStyle &&
          ((c = e.getComputedStyle(u)),
          (n = "1%" !== (c || {}).top),
          (s = "2px" === (c || {}).marginLeft),
          (i = "4px" === (c || { width: "4px" }).width),
          (u.style.marginRight = "50%"),
          (r = "4px" === (c || { marginRight: "4px" }).marginRight),
          ((t = u.appendChild(re.createElement("div"))).style.cssText =
            u.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
          (t.style.marginRight = t.style.width = "0"),
          (u.style.width = "1px"),
          (a = !parseFloat((e.getComputedStyle(t) || {}).marginRight)),
          u.removeChild(t)),
        (u.style.display = "none"),
        (o = 0 === u.getClientRects().length) &&
          ((u.style.display = ""),
          (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
          (u.childNodes[0].style.borderCollapse = "separate"),
          ((t = u.getElementsByTagName("td"))[0].style.cssText =
            "margin:0;border:0;padding:0;display:none"),
          (o = 0 === t[0].offsetHeight) &&
            ((t[0].style.display = ""),
            (t[1].style.display = "none"),
            (o = 0 === t[0].offsetHeight))),
        d.removeChild(l);
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      l = re.createElement("div"),
      u = re.createElement("div");
    u.style &&
      ((u.style.cssText = "float:left;opacity:.5"),
      (de.opacity = "0.5" === u.style.opacity),
      (de.cssFloat = !!u.style.cssFloat),
      (u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (de.clearCloneStyle = "content-box" === u.style.backgroundClip),
      ((l = re.createElement("div")).style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      (u.innerHTML = ""),
      l.appendChild(u),
      (de.boxSizing =
        "" === u.style.boxSizing ||
        "" === u.style.MozBoxSizing ||
        "" === u.style.WebkitBoxSizing),
      pe.extend(de, {
        reliableHiddenOffsets: function () {
          return null == n && t(), o;
        },
        boxSizingReliable: function () {
          return null == n && t(), i;
        },
        pixelMarginRight: function () {
          return null == n && t(), r;
        },
        pixelPosition: function () {
          return null == n && t(), n;
        },
        reliableMarginRight: function () {
          return null == n && t(), a;
        },
        reliableMarginLeft: function () {
          return null == n && t(), s;
        },
      }));
  })();
  var gt,
    vt,
    yt = /^(top|right|bottom|left)$/;
  e.getComputedStyle
    ? ((gt = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      }),
      (vt = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          ("" !==
            (a = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : void 0) &&
            void 0 !== a) ||
            pe.contains(e.ownerDocument, e) ||
            (a = pe.style(e, t)),
          n &&
            !de.pixelMarginRight() &&
            pt.test(a) &&
            ft.test(t) &&
            ((r = s.width),
            (i = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = r),
            (s.minWidth = i),
            (s.maxWidth = o)),
          void 0 === a ? a : a + ""
        );
      }))
    : mt.currentStyle &&
      ((gt = function (e) {
        return e.currentStyle;
      }),
      (vt = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          null == (a = (n = n || gt(e)) ? n[t] : void 0) &&
            s &&
            s[t] &&
            (a = s[t]),
          pt.test(a) &&
            !yt.test(t) &&
            ((r = s.left),
            (o = (i = e.runtimeStyle) && i.left) &&
              (i.left = e.currentStyle.left),
            (s.left = "fontSize" === t ? "1em" : a),
            (a = s.pixelLeft + "px"),
            (s.left = r),
            o && (i.left = o)),
          void 0 === a ? a : a + "" || "auto"
        );
      }));
  var bt = /alpha\([^)]*\)/i,
    xt = /opacity\s*=\s*([^)]*)/i,
    wt = /^(none|table(?!-c[ea]).+)/,
    Tt = new RegExp("^(" + Oe + ")(.*)$", "i"),
    Ct = { position: "absolute", visibility: "hidden", display: "block" },
    Et = { letterSpacing: "0", fontWeight: "400" },
    kt = ["Webkit", "O", "Moz", "ms"],
    St = re.createElement("div").style;
  pe.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = vt(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: de.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = pe.camelCase(t),
          l = e.style;
        if (
          ((t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s)),
          (a = pe.cssHooks[t] || pe.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        if (
          !("string" === (o = typeof n) &&
            (i = Pe.exec(n)) &&
            i[1] &&
            ((n = f(e, t, i)), (o = "number")),
          null == n ||
            n != n ||
            ("number" === o &&
              (n += (i && i[3]) || (pe.cssNumber[s] ? "" : "px")),
            de.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            a && "set" in a && void 0 === (n = a.set(e, n, r))))
        )
          try {
            l[t] = n;
          } catch (e) {}
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = pe.camelCase(t);
      return (
        (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s)),
        (a = pe.cssHooks[t] || pe.cssHooks[s]) &&
          "get" in a &&
          (o = a.get(e, !0, n)),
        void 0 === o && (o = vt(e, t, r)),
        "normal" === o && t in Et && (o = Et[t]),
        "" === n || n
          ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
          : o
      );
    },
  }),
    pe.each(["height", "width"], function (e, t) {
      pe.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return wt.test(pe.css(e, "display")) && 0 === e.offsetWidth
              ? ht(e, Ct, function () {
                  return _(e, t, r);
                })
              : _(e, t, r);
        },
        set: function (e, n, r) {
          var i = r && gt(e);
          return F(
            e,
            n,
            r
              ? R(
                  e,
                  t,
                  r,
                  de.boxSizing &&
                    "border-box" === pe.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    de.opacity ||
      (pe.cssHooks.opacity = {
        get: function (e, t) {
          return xt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === pe.trim(o.replace(bt, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = bt.test(o) ? o.replace(bt, i) : o + " " + i);
        },
      }),
    (pe.cssHooks.marginRight = L(de.reliableMarginRight, function (e, t) {
      if (t) return ht(e, { display: "inline-block" }, vt, [e, "marginRight"]);
    })),
    (pe.cssHooks.marginLeft = L(de.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(vt(e, "marginLeft")) ||
            (pe.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                ht(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })
              : 0)) + "px"
        );
    })),
    pe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (pe.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + Be[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        ft.test(e) || (pe.cssHooks[e + t].set = F);
    }),
    pe.fn.extend({
      css: function (e, t) {
        return We(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (pe.isArray(t)) {
              for (r = gt(e), i = t.length; a < i; a++)
                o[t[a]] = pe.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return q(this, !0);
      },
      hide: function () {
        return q(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Ie(this) ? pe(this).show() : pe(this).hide();
            });
      },
    }),
    (pe.Tween = M),
    (M.prototype = {
      constructor: M,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || pe.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (pe.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = M.propHooks[this.prop];
        return e && e.get ? e.get(this) : M.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = M.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                pe.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : M.propHooks._default.set(this),
          this
        );
      },
    }),
    (M.prototype.init.prototype = M.prototype),
    (M.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          pe.fx.step[e.prop]
            ? pe.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[pe.cssProps[e.prop]] &&
                !pe.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : pe.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (M.propHooks.scrollTop = M.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (pe.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (pe.fx = M.prototype.init),
    (pe.fx.step = {});
  var Nt,
    jt,
    Dt = /^(?:toggle|show|hide)$/,
    At = /queueHooks$/;
  (pe.Animation = pe.extend($, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return f(n.elem, e, Pe.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      pe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ae));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          ($.tweeners[n] = $.tweeners[n] || []),
          $.tweeners[n].unshift(t);
    },
    prefilters: [I],
    prefilter: function (e, t) {
      t ? $.prefilters.unshift(e) : $.prefilters.push(e);
    },
  })),
    (pe.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? pe.extend({}, e)
          : {
              complete: n || (!n && t) || (pe.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !pe.isFunction(t) && t),
            };
      return (
        (r.duration = pe.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in pe.fx.speeds
          ? pe.fx.speeds[r.duration]
          : pe.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          pe.isFunction(r.old) && r.old.call(this),
            r.queue && pe.dequeue(this, r.queue);
        }),
        r
      );
    }),
    pe.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Ie)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = pe.isEmptyObject(e),
          o = pe.speed(t, n, r),
          a = function () {
            var t = $(this, pe.extend({}, e), o);
            (i || pe._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = pe.timers,
              a = pe._data(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && At.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || pe.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = pe._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = pe.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                pe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    pe.each(["toggle", "show", "hide"], function (e, t) {
      var n = pe.fn[t];
      pe.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(P(t, !0), e, r, i);
      };
    }),
    pe.each(
      {
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        pe.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (pe.timers = []),
    (pe.fx.tick = function () {
      var e,
        t = pe.timers,
        n = 0;
      for (Nt = pe.now(); n < t.length; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || pe.fx.stop(), (Nt = void 0);
    }),
    (pe.fx.timer = function (e) {
      pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
    }),
    (pe.fx.interval = 13),
    (pe.fx.start = function () {
      jt || (jt = e.setInterval(pe.fx.tick, pe.fx.interval));
    }),
    (pe.fx.stop = function () {
      e.clearInterval(jt), (jt = null);
    }),
    (pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (pe.fn.delay = function (t, n) {
      return (
        (t = (pe.fx && pe.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e,
        t = re.createElement("input"),
        n = re.createElement("div"),
        r = re.createElement("select"),
        i = r.appendChild(re.createElement("option"));
      (n = re.createElement("div")).setAttribute("className", "t"),
        (n.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (e = n.getElementsByTagName("a")[0]),
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        ((e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
        (de.getSetAttribute = "t" !== n.className),
        (de.style = /top/.test(e.getAttribute("style"))),
        (de.hrefNormalized = "/a" === e.getAttribute("href")),
        (de.checkOn = !!t.value),
        (de.optSelected = i.selected),
        (de.enctype = !!re.createElement("form").enctype),
        (r.disabled = !0),
        (de.optDisabled = !i.disabled),
        (t = re.createElement("input")).setAttribute("value", ""),
        (de.input = "" === t.getAttribute("value")),
        (t.value = "t"),
        t.setAttribute("type", "radio"),
        (de.radioValue = "t" === t.value);
    })();
  var Lt = /\r/g,
    Ht = /[\x20\t\r\n\f]+/g;
  pe.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = pe.isFunction(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, pe(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : pe.isArray(i) &&
                  (i = pe.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                pe.valHooks[this.type] ||
                pe.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(Lt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    pe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = pe.find.attr(e, "value");
            return null != t ? t : pe.trim(pe.text(e)).replace(Ht, " ");
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || i < 0,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                l = i < 0 ? s : o ? i : 0;
              l < s;
              l++
            )
              if (
                ((n = r[l]).selected || l === i) &&
                (de.optDisabled
                  ? !n.disabled
                  : null === n.getAttribute("disabled")) &&
                (!n.parentNode.disabled ||
                  !pe.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((t = pe(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = pe.makeArray(t), a = i.length;
              a--;

            )
              if (((r = i[a]), pe.inArray(pe.valHooks.option.get(r), o) > -1))
                try {
                  r.selected = n = !0;
                } catch (e) {
                  r.scrollHeight;
                }
              else r.selected = !1;
            return n || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    pe.each(["radio", "checkbox"], function () {
      (pe.valHooks[this] = {
        set: function (e, t) {
          if (pe.isArray(t))
            return (e.checked = pe.inArray(pe(e).val(), t) > -1);
        },
      }),
        de.checkOn ||
          (pe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var qt,
    Ft,
    Rt = pe.expr.attrHandle,
    _t = /^(?:checked|selected)$/i,
    Mt = de.getSetAttribute,
    Ot = de.input;
  pe.fn.extend({
    attr: function (e, t) {
      return We(this, pe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        pe.removeAttr(this, e);
      });
    },
  }),
    pe.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? pe.prop(e, t, n)
            : ((1 === o && pe.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i =
                  pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ft : qt))),
              void 0 !== n
                ? null === n
                  ? void pe.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = pe.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(Ae);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = pe.propFix[n] || n),
              pe.expr.match.bool.test(n)
                ? (Ot && Mt) || !_t.test(n)
                  ? (e[r] = !1)
                  : (e[pe.camelCase("default-" + n)] = e[r] = !1)
                : pe.attr(e, n, ""),
              e.removeAttribute(Mt ? n : r);
      },
    }),
    (Ft = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? pe.removeAttr(e, n)
            : (Ot && Mt) || !_t.test(n)
            ? e.setAttribute((!Mt && pe.propFix[n]) || n, n)
            : (e[pe.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Rt[t] || pe.find.attr;
      (Ot && Mt) || !_t.test(t)
        ? (Rt[t] = function (e, t, r) {
            var i, o;
            return (
              r ||
                ((o = Rt[t]),
                (Rt[t] = i),
                (i = null != n(e, t, r) ? t.toLowerCase() : null),
                (Rt[t] = o)),
              i
            );
          })
        : (Rt[t] = function (e, t, n) {
            if (!n)
              return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null;
          });
    }),
    (Ot && Mt) ||
      (pe.attrHooks.value = {
        set: function (e, t, n) {
          if (!pe.nodeName(e, "input")) return qt && qt.set(e, t, n);
          e.defaultValue = t;
        },
      }),
    Mt ||
      ((qt = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n);
          if (
            (r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
            (r.value = t += ""),
            "value" === n || t === e.getAttribute(n))
          )
            return t;
        },
      }),
      (Rt.id =
        Rt.name =
        Rt.coords =
          function (e, t, n) {
            var r;
            if (!n)
              return (r = e.getAttributeNode(t)) && "" !== r.value
                ? r.value
                : null;
          }),
      (pe.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          if (n && n.specified) return n.value;
        },
        set: qt.set,
      }),
      (pe.attrHooks.contenteditable = {
        set: function (e, t, n) {
          qt.set(e, "" !== t && t, n);
        },
      }),
      pe.each(["width", "height"], function (e, t) {
        pe.attrHooks[t] = {
          set: function (e, n) {
            if ("" === n) return e.setAttribute(t, "auto"), n;
          },
        };
      })),
    de.style ||
      (pe.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      });
  var Pt = /^(?:input|select|textarea|button|object)$/i,
    Bt = /^(?:a|area)$/i;
  pe.fn.extend({
    prop: function (e, t) {
      return We(this, pe.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = pe.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (e) {}
        })
      );
    },
  }),
    pe.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && pe.isXMLDoc(e)) ||
              ((t = pe.propFix[t] || t), (i = pe.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = pe.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Pt.test(e.nodeName) || (Bt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    de.hrefNormalized ||
      pe.each(["href", "src"], function (e, t) {
        pe.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    de.optSelected ||
      (pe.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    pe.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        pe.propFix[this.toLowerCase()] = this;
      }
    ),
    de.enctype || (pe.propFix.enctype = "encoding");
  var It = /[\t\r\n\f]/g;
  pe.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        l = 0;
      if (pe.isFunction(e))
        return this.each(function (t) {
          pe(this).addClass(e.call(this, t, z(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(Ae) || []; (n = this[l++]); )
          if (
            ((i = z(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(It, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = pe.trim(r)) && pe.attr(n, "class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        l = 0;
      if (pe.isFunction(e))
        return this.each(function (t) {
          pe(this).removeClass(e.call(this, t, z(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(Ae) || []; (n = this[l++]); )
          if (
            ((i = z(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(It, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(" " + o + " ") > -1; )
                r = r.replace(" " + o + " ", " ");
            i !== (s = pe.trim(r)) && pe.attr(n, "class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : pe.isFunction(e)
        ? this.each(function (n) {
            pe(this).toggleClass(e.call(this, n, z(this), t), t);
          })
        : this.each(function () {
            var t, r, i, o;
            if ("string" === n)
              for (r = 0, i = pe(this), o = e.match(Ae) || []; (t = o[r++]); )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (void 0 !== e && "boolean" !== n) ||
                ((t = z(this)) && pe._data(this, "__className__", t),
                pe.attr(
                  this,
                  "class",
                  t || !1 === e ? "" : pe._data(this, "__className__") || ""
                ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      for (t = " " + e + " "; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (" " + z(n) + " ").replace(It, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  }),
    pe.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        pe.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    pe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    });
  var Wt = e.location,
    $t = pe.now(),
    zt = /\?/,
    Xt =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (pe.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
      r = null,
      i = pe.trim(t + "");
    return i &&
      !pe.trim(
        i.replace(Xt, function (e, t, i, o) {
          return (
            n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), "")
          );
        })
      )
      ? Function("return " + i)()
      : pe.error("Invalid JSON: " + t);
  }),
    (pe.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser
          ? (n = new e.DOMParser().parseFromString(t, "text/xml"))
          : (((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            n.loadXML(t));
      } catch (e) {
        n = void 0;
      }
      return (
        (n &&
          n.documentElement &&
          !n.getElementsByTagName("parsererror").length) ||
          pe.error("Invalid XML: " + t),
        n
      );
    });
  var Ut = /#.*$/,
    Vt = /([?&])_=[^&]*/,
    Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Jt = /^(?:GET|HEAD)$/,
    Qt = /^\/\//,
    Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Zt = {},
    en = {},
    tn = "*/".concat("*"),
    nn = Wt.href,
    rn = Kt.exec(nn.toLowerCase()) || [];
  pe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: nn,
      type: "GET",
      isLocal: Yt.test(rn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": tn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": pe.parseJSON,
        "text xml": pe.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e);
    },
    ajaxPrefilter: X(Zt),
    ajaxTransport: X(en),
    ajax: function (t, n) {
      function r(t, n, r, i) {
        var o,
          d,
          y,
          b,
          w,
          C = n;
        2 !== x &&
          ((x = 2),
          l && e.clearTimeout(l),
          (c = void 0),
          (s = i || ""),
          (T.readyState = t > 0 ? 4 : 0),
          (o = (t >= 200 && t < 300) || 304 === t),
          r && (b = G(f, T, r)),
          (b = Y(f, b, T, o)),
          o
            ? (f.ifModified &&
                ((w = T.getResponseHeader("Last-Modified")) &&
                  (pe.lastModified[a] = w),
                (w = T.getResponseHeader("etag")) && (pe.etag[a] = w)),
              204 === t || "HEAD" === f.type
                ? (C = "nocontent")
                : 304 === t
                ? (C = "notmodified")
                : ((C = b.state), (d = b.data), (o = !(y = b.error))))
            : ((y = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
          (T.status = t),
          (T.statusText = (n || C) + ""),
          o ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]),
          T.statusCode(v),
          (v = void 0),
          u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? d : y]),
          g.fireWith(p, [T, C]),
          u &&
            (h.trigger("ajaxComplete", [T, f]),
            --pe.active || pe.event.trigger("ajaxStop")));
      }
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        a,
        s,
        l,
        u,
        c,
        d,
        f = pe.ajaxSetup({}, n),
        p = f.context || f,
        h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
        m = pe.Deferred(),
        g = pe.Callbacks("once memory"),
        v = f.statusCode || {},
        y = {},
        b = {},
        x = 0,
        w = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!d)
                for (d = {}; (t = Gt.exec(s)); ) d[t[1].toLowerCase()] = t[2];
              t = d[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === x ? s : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return x || ((e = b[n] = b[n] || e), (y[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return x || (f.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (x < 2) for (t in e) v[t] = [v[t], e[t]];
              else T.always(e[T.status]);
            return this;
          },
          abort: function (e) {
            var t = e || w;
            return c && c.abort(t), r(0, t), this;
          },
        };
      if (
        ((m.promise(T).complete = g.add),
        (T.success = T.done),
        (T.error = T.fail),
        (f.url = ((t || f.url || nn) + "")
          .replace(Ut, "")
          .replace(Qt, rn[1] + "//")),
        (f.type = n.method || n.type || f.method || f.type),
        (f.dataTypes = pe
          .trim(f.dataType || "*")
          .toLowerCase()
          .match(Ae) || [""]),
        null == f.crossDomain &&
          ((i = Kt.exec(f.url.toLowerCase())),
          (f.crossDomain = !(
            !i ||
            (i[1] === rn[1] &&
              i[2] === rn[2] &&
              (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                (rn[3] || ("http:" === rn[1] ? "80" : "443")))
          ))),
        f.data &&
          f.processData &&
          "string" != typeof f.data &&
          (f.data = pe.param(f.data, f.traditional)),
        U(Zt, f, n, T),
        2 === x)
      )
        return T;
      for (o in ((u = pe.event && f.global) &&
        0 == pe.active++ &&
        pe.event.trigger("ajaxStart"),
      (f.type = f.type.toUpperCase()),
      (f.hasContent = !Jt.test(f.type)),
      (a = f.url),
      f.hasContent ||
        (f.data &&
          ((a = f.url += (zt.test(a) ? "&" : "?") + f.data), delete f.data),
        !1 === f.cache &&
          (f.url = Vt.test(a)
            ? a.replace(Vt, "$1_=" + $t++)
            : a + (zt.test(a) ? "&" : "?") + "_=" + $t++)),
      f.ifModified &&
        (pe.lastModified[a] &&
          T.setRequestHeader("If-Modified-Since", pe.lastModified[a]),
        pe.etag[a] && T.setRequestHeader("If-None-Match", pe.etag[a])),
      ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
        T.setRequestHeader("Content-Type", f.contentType),
      T.setRequestHeader(
        "Accept",
        f.dataTypes[0] && f.accepts[f.dataTypes[0]]
          ? f.accepts[f.dataTypes[0]] +
              ("*" !== f.dataTypes[0] ? ", " + tn + "; q=0.01" : "")
          : f.accepts["*"]
      ),
      f.headers))
        T.setRequestHeader(o, f.headers[o]);
      if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === x))
        return T.abort();
      for (o in ((w = "abort"), { success: 1, error: 1, complete: 1 }))
        T[o](f[o]);
      if ((c = U(en, f, n, T))) {
        if (((T.readyState = 1), u && h.trigger("ajaxSend", [T, f]), 2 === x))
          return T;
        f.async &&
          f.timeout > 0 &&
          (l = e.setTimeout(function () {
            T.abort("timeout");
          }, f.timeout));
        try {
          (x = 1), c.send(y, r);
        } catch (e) {
          if (!(x < 2)) throw e;
          r(-1, e);
        }
      } else r(-1, "No Transport");
      return T;
    },
    getJSON: function (e, t, n) {
      return pe.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return pe.get(e, void 0, t, "script");
    },
  }),
    pe.each(["get", "post"], function (e, t) {
      pe[t] = function (e, n, r, i) {
        return (
          pe.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          pe.ajax(
            pe.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              pe.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (pe._evalUrl = function (e) {
      return pe.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    pe.fn.extend({
      wrapAll: function (e) {
        if (pe.isFunction(e))
          return this.each(function (t) {
            pe(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return pe.isFunction(e)
          ? this.each(function (t) {
              pe(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = pe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = pe.isFunction(e);
        return this.each(function (n) {
          pe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (pe.expr.filters.hidden = function (e) {
      return de.reliableHiddenOffsets()
        ? e.offsetWidth <= 0 &&
            e.offsetHeight <= 0 &&
            !e.getClientRects().length
        : Q(e);
    }),
    (pe.expr.filters.visible = function (e) {
      return !pe.expr.filters.hidden(e);
    });
  var on = /%20/g,
    an = /\[\]$/,
    sn = /\r?\n/g,
    ln = /^(?:submit|button|image|reset|file)$/i,
    un = /^(?:input|select|textarea|keygen)/i;
  (pe.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = pe.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional),
      pe.isArray(e) || (e.jquery && !pe.isPlainObject(e)))
    )
      pe.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) K(n, e[n], t, i);
    return r.join("&").replace(on, "+");
  }),
    pe.fn.extend({
      serialize: function () {
        return pe.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = pe.prop(this, "elements");
          return e ? pe.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !pe(this).is(":disabled") &&
              un.test(this.nodeName) &&
              !ln.test(e) &&
              (this.checked || !$e.test(e))
            );
          })
          .map(function (e, t) {
            var n = pe(this).val();
            return null == n
              ? null
              : pe.isArray(n)
              ? pe.map(n, function (e) {
                  return { name: t.name, value: e.replace(sn, "\r\n") };
                })
              : { name: t.name, value: n.replace(sn, "\r\n") };
          })
          .get();
      },
    }),
    (pe.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return this.isLocal
              ? ee()
              : re.documentMode > 8
              ? Z()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  Z()) ||
                ee();
          }
        : Z);
  var cn = 0,
    dn = {},
    fn = pe.ajaxSettings.xhr();
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in dn) dn[e](void 0, !0);
    }),
    (de.cors = !!fn && "withCredentials" in fn),
    (fn = de.ajax = !!fn) &&
      pe.ajaxTransport(function (t) {
        var n;
        if (!t.crossDomain || de.cors)
          return {
            send: function (r, i) {
              var o,
                a = t.xhr(),
                s = ++cn;
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (o in t.xhrFields) a[o] = t.xhrFields[o];
              for (o in (t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                r["X-Requested-With"] ||
                (r["X-Requested-With"] = "XMLHttpRequest"),
              r))
                void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
              a.send((t.hasContent && t.data) || null),
                (n = function (e, r) {
                  var o, l, u;
                  if (n && (r || 4 === a.readyState))
                    if (
                      (delete dn[s],
                      (n = void 0),
                      (a.onreadystatechange = pe.noop),
                      r)
                    )
                      4 !== a.readyState && a.abort();
                    else {
                      (u = {}),
                        (o = a.status),
                        "string" == typeof a.responseText &&
                          (u.text = a.responseText);
                      try {
                        l = a.statusText;
                      } catch (e) {
                        l = "";
                      }
                      o || !t.isLocal || t.crossDomain
                        ? 1223 === o && (o = 204)
                        : (o = u.text ? 200 : 404);
                    }
                  u && i(o, l, u, a.getAllResponseHeaders());
                }),
                t.async
                  ? 4 === a.readyState
                    ? e.setTimeout(n)
                    : (a.onreadystatechange = dn[s] = n)
                  : n();
            },
            abort: function () {
              n && n(void 0, !0);
            },
          };
      }),
    pe.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return pe.globalEval(e), e;
        },
      },
    }),
    pe.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    pe.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t,
          n = re.head || pe("head")[0] || re.documentElement;
        return {
          send: function (r, i) {
            ((t = re.createElement("script")).async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n ||
                    !t.readyState ||
                    /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || i(200, "success"));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          },
        };
      }
    });
  var pn = [],
    hn = /(=)\?(?=&|$)|\?\?/;
  pe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = pn.pop() || pe.expando + "_" + $t++;
      return (this[e] = !0), e;
    },
  }),
    pe.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (hn.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              hn.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            pe.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(hn, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (zt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || pe.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? pe(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), pn.push(i)),
              a && pe.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (pe.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || re);
      var r = Te.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = v([e], t, i)),
          i && i.length && pe(i).remove(),
          pe.merge([], r.childNodes));
    });
  var mn = pe.fn.load;
  (pe.fn.load = function (e, t, n) {
    if ("string" != typeof e && mn) return mn.apply(this, arguments);
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return (
      s > -1 && ((r = pe.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
      pe.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      a.length > 0 &&
        pe
          .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e);
          })
          .always(
            n &&
              function (e, t) {
                a.each(function () {
                  n.apply(this, o || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    pe.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        pe.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (pe.expr.filters.animated = function (e) {
      return pe.grep(pe.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (pe.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          l,
          u = pe.css(e, "position"),
          c = pe(e),
          d = {};
        "static" === u && (e.style.position = "relative"),
          (s = c.offset()),
          (o = pe.css(e, "top")),
          (l = pe.css(e, "left")),
          ("absolute" === u || "fixed" === u) && pe.inArray("auto", [o, l]) > -1
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
          pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, d) : c.css(d);
      },
    }),
    pe.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                pe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = { top: 0, left: 0 },
          i = this[0],
          o = i && i.ownerDocument;
        return o
          ? ((t = o.documentElement),
            pe.contains(t, i)
              ? (void 0 !== i.getBoundingClientRect &&
                  (r = i.getBoundingClientRect()),
                (n = te(o)),
                {
                  top:
                    r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    r.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0),
                })
              : r)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === pe.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                pe.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += pe.css(e[0], "borderTopWidth", !0)),
                (n.left += pe.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - pe.css(r, "marginTop", !0),
              left: t.left - n.left - pe.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");

          )
            e = e.offsetParent;
          return e || mt;
        });
      },
    }),
    pe.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function (r) {
          return We(
            this,
            function (e, r, i) {
              var o = te(e);
              if (void 0 === i)
                return o
                  ? t in o
                    ? o[t]
                    : o.document.documentElement[r]
                  : e[r];
              o
                ? o.scrollTo(
                    n ? pe(o).scrollLeft() : i,
                    n ? i : pe(o).scrollTop()
                  )
                : (e[r] = i);
            },
            e,
            r,
            arguments.length,
            null
          );
        };
      }
    ),
    pe.each(["top", "left"], function (e, t) {
      pe.cssHooks[t] = L(de.pixelPosition, function (e, n) {
        if (n)
          return (n = vt(e, t)), pt.test(n) ? pe(e).position()[t] + "px" : n;
      });
    }),
    pe.each({ Height: "height", Width: "width" }, function (e, t) {
      pe.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          pe.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
              a = n || (!0 === r || !0 === i ? "margin" : "border");
            return We(
              this,
              function (t, n, r) {
                var i;
                return pe.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? pe.css(t, n, a)
                  : pe.style(t, n, r, a);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    pe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (pe.fn.size = function () {
      return this.length;
    }),
    (pe.fn.andSelf = pe.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return pe;
      });
  var gn = e.jQuery,
    vn = e.$;
  return (
    (pe.noConflict = function (t) {
      return (
        e.$ === pe && (e.$ = vn), t && e.jQuery === pe && (e.jQuery = gn), pe
      );
    }),
    t || (e.jQuery = e.$ = pe),
    pe
  );
}),
  (function () {
    "use strict";
    var e = function (e, t) {
      var n;
      e.rails !== t && e.error("jquery-ujs has already been loaded!");
      var r = e(document);
      (e.rails = n =
        {
          linkClickSelector:
            "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
          buttonClickSelector:
            "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
          inputChangeSelector:
            "select[data-remote], input[data-remote], textarea[data-remote]",
          formSubmitSelector: "form:not([data-turbo=true])",
          formInputClickSelector:
            "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
          disableSelector:
            "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
          enableSelector:
            "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
          requiredInputSelector:
            "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
          fileInputSelector: "input[name][type=file]:not([disabled])",
          linkDisableSelector: "a[data-disable-with], a[data-disable]",
          buttonDisableSelector:
            "button[data-remote][data-disable-with], button[data-remote][data-disable]",
          csrfToken: function () {
            return e("meta[name=csrf-token]").attr("content");
          },
          csrfParam: function () {
            return e("meta[name=csrf-param]").attr("content");
          },
          CSRFProtection: function (e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t);
          },
          refreshCSRFTokens: function () {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken());
          },
          fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), !1 !== i.result;
          },
          confirm: function (e) {
            return confirm(e);
          },
          ajax: function (t) {
            return e.ajax(t);
          },
          href: function (e) {
            return e[0].href;
          },
          isRemote: function (e) {
            return e.data("remote") !== t && !1 !== e.data("remote");
          },
          handleRemote: function (r) {
            var i, o, a, s, l, u;
            if (n.fire(r, "ajax:before")) {
              if (
                ((s = r.data("with-credentials") || null),
                (l =
                  r.data("type") ||
                  (e.ajaxSettings && e.ajaxSettings.dataType)),
                r.is("form"))
              ) {
                (i =
                  r.data("ujs:submit-button-formmethod") || r.attr("method")),
                  (o =
                    r.data("ujs:submit-button-formaction") || r.attr("action")),
                  (a = e(r[0]).serializeArray());
                var c = r.data("ujs:submit-button");
                c && (a.push(c), r.data("ujs:submit-button", null)),
                  r.data("ujs:submit-button-formmethod", null),
                  r.data("ujs:submit-button-formaction", null);
              } else
                r.is(n.inputChangeSelector)
                  ? ((i = r.data("method")),
                    (o = r.data("url")),
                    (a = r.serialize()),
                    r.data("params") && (a = a + "&" + r.data("params")))
                  : r.is(n.buttonClickSelector)
                  ? ((i = r.data("method") || "get"),
                    (o = r.data("url")),
                    (a = r.serialize()),
                    r.data("params") && (a = a + "&" + r.data("params")))
                  : ((i = r.data("method")),
                    (o = n.href(r)),
                    (a = r.data("params") || null));
              return (
                (u = {
                  type: i || "GET",
                  data: a,
                  dataType: l,
                  beforeSend: function (e, i) {
                    if (
                      (i.dataType === t &&
                        e.setRequestHeader(
                          "accept",
                          "*/*;q=0.5, " + i.accepts.script
                        ),
                      !n.fire(r, "ajax:beforeSend", [e, i]))
                    )
                      return !1;
                    r.trigger("ajax:send", e);
                  },
                  success: function (e, t, n) {
                    r.trigger("ajax:success", [e, t, n]);
                  },
                  complete: function (e, t) {
                    r.trigger("ajax:complete", [e, t]);
                  },
                  error: function (e, t, n) {
                    r.trigger("ajax:error", [e, t, n]);
                  },
                  crossDomain: n.isCrossDomain(o),
                }),
                s && (u.xhrFields = { withCredentials: s }),
                o && (u.url = o),
                n.ajax(u)
              );
            }
            return !1;
          },
          isCrossDomain: function (e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
              return (
                (n.href = e),
                (n.href = n.href),
                !(
                  ((!n.protocol || ":" === n.protocol) && !n.host) ||
                  t.protocol + "//" + t.host == n.protocol + "//" + n.host
                )
              );
            } catch (e) {
              return !0;
            }
          },
          handleMethod: function (r) {
            var i = n.href(r),
              o = r.data("method"),
              a = r.attr("target"),
              s = n.csrfToken(),
              l = n.csrfParam(),
              u = e('<form method="post" action="' + i + '"></form>'),
              c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === t ||
              s === t ||
              n.isCrossDomain(i) ||
              (c +=
                '<input name="' + l + '" value="' + s + '" type="hidden" />'),
              a && u.attr("target", a),
              u.hide().append(c).appendTo("body"),
              u.submit();
          },
          formElements: function (t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n);
          },
          disableFormElements: function (t) {
            n.formElements(t, n.disableSelector).each(function () {
              n.disableFormElement(e(this));
            });
          },
          disableFormElement: function (e) {
            var n, r;
            (n = e.is("button") ? "html" : "val"),
              (r = e.data("disable-with")) !== t &&
                (e.data("ujs:enable-with", e[n]()), e[n](r)),
              e.prop("disabled", !0),
              e.data("ujs:disabled", !0);
          },
          enableFormElements: function (t) {
            n.formElements(t, n.enableSelector).each(function () {
              n.enableFormElement(e(this));
            });
          },
          enableFormElement: function (e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t &&
              (e[n](e.data("ujs:enable-with")),
              e.removeData("ujs:enable-with")),
              e.prop("disabled", !1),
              e.removeData("ujs:disabled");
          },
          allowAction: function (e) {
            var t,
              r = e.data("confirm"),
              i = !1;
            if (!r) return !0;
            if (n.fire(e, "confirm")) {
              try {
                i = n.confirm(r);
              } catch (e) {
                (console.error || console.log).call(console, e.stack || e);
              }
              t = n.fire(e, "confirm:complete", [i]);
            }
            return i && t;
          },
          blankInputs: function (t, n, r) {
            var i,
              o,
              a,
              s = e(),
              l = n || "input,textarea",
              u = t.find(l),
              c = {};
            return (
              u.each(function () {
                (i = e(this)).is("input[type=radio]")
                  ? ((a = i.attr("name")),
                    c[a] ||
                      (0 ===
                        t.find('input[type=radio]:checked[name="' + a + '"]')
                          .length &&
                        ((o = t.find('input[type=radio][name="' + a + '"]')),
                        (s = s.add(o))),
                      (c[a] = a)))
                  : (i.is("input[type=checkbox],input[type=radio]")
                      ? i.is(":checked")
                      : !!i.val()) === r && (s = s.add(i));
              }),
              !!s.length && s
            );
          },
          nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0);
          },
          stopEverything: function (t) {
            return (
              e(t.target).trigger("ujs:everythingStopped"),
              t.stopImmediatePropagation(),
              !1
            );
          },
          disableElement: function (e) {
            var r = e.data("disable-with");
            r !== t && (e.data("ujs:enable-with", e.html()), e.html(r)),
              e.on("click.railsDisable", function (e) {
                return n.stopEverything(e);
              }),
              e.data("ujs:disabled", !0);
          },
          enableElement: function (e) {
            e.data("ujs:enable-with") !== t &&
              (e.html(e.data("ujs:enable-with")),
              e.removeData("ujs:enable-with")),
              e.off("click.railsDisable"),
              e.removeData("ujs:disabled");
          },
        }),
        n.fire(r, "rails:attachBindings") &&
          (e.ajaxPrefilter(function (e, t, r) {
            e.crossDomain || n.CSRFProtection(r);
          }),
          e(window).on("pageshow.rails", function () {
            e(e.rails.enableSelector).each(function () {
              var t = e(this);
              t.data("ujs:disabled") && e.rails.enableFormElement(t);
            }),
              e(e.rails.linkDisableSelector).each(function () {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t);
              });
          }),
          r.on("ajax:complete", n.linkDisableSelector, function () {
            n.enableElement(e(this));
          }),
          r.on("ajax:complete", n.buttonDisableSelector, function () {
            n.enableFormElement(e(this));
          }),
          r.on("click.rails", n.linkClickSelector, function (t) {
            var r = e(this),
              i = r.data("method"),
              o = r.data("params"),
              a = t.metaKey || t.ctrlKey;
            if (!n.allowAction(r)) return n.stopEverything(t);
            if (
              (!a && r.is(n.linkDisableSelector) && n.disableElement(r),
              n.isRemote(r))
            ) {
              if (a && (!i || "GET" === i) && !o) return !0;
              var s = n.handleRemote(r);
              return (
                !1 === s
                  ? n.enableElement(r)
                  : s.fail(function () {
                      n.enableElement(r);
                    }),
                !1
              );
            }
            return i ? (n.handleMethod(r), !1) : void 0;
          }),
          r.on("click.rails", n.buttonClickSelector, function (t) {
            var r = e(this);
            if (!n.allowAction(r) || !n.isRemote(r)) return n.stopEverything(t);
            r.is(n.buttonDisableSelector) && n.disableFormElement(r);
            var i = n.handleRemote(r);
            return (
              !1 === i
                ? n.enableFormElement(r)
                : i.fail(function () {
                    n.enableFormElement(r);
                  }),
              !1
            );
          }),
          r.on("change.rails", n.inputChangeSelector, function (t) {
            var r = e(this);
            return n.allowAction(r) && n.isRemote(r)
              ? (n.handleRemote(r), !1)
              : n.stopEverything(t);
          }),
          r.on("submit.rails", n.formSubmitSelector, function (r) {
            var i,
              o,
              a = e(this),
              s = n.isRemote(a);
            if (!n.allowAction(a)) return n.stopEverything(r);
            if (a.attr("novalidate") === t)
              if (a.data("ujs:formnovalidate-button") === t) {
                if (
                  (i = n.blankInputs(a, n.requiredInputSelector, !1)) &&
                  n.fire(a, "ajax:aborted:required", [i])
                )
                  return n.stopEverything(r);
              } else a.data("ujs:formnovalidate-button", t);
            if (s) {
              if ((o = n.nonBlankInputs(a, n.fileInputSelector))) {
                setTimeout(function () {
                  n.disableFormElements(a);
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [o]);
                return (
                  l ||
                    setTimeout(function () {
                      n.enableFormElements(a);
                    }, 13),
                  l
                );
              }
              return n.handleRemote(a), !1;
            }
            setTimeout(function () {
              n.disableFormElements(a);
            }, 13);
          }),
          r.on("click.rails", n.formInputClickSelector, function (t) {
            var r = e(this);
            if (!n.allowAction(r)) return n.stopEverything(t);
            var i = r.attr("name"),
              o = i ? { name: i, value: r.val() } : null,
              a = r.closest("form");
            0 === a.length && (a = e("#" + r.attr("form"))),
              a.data("ujs:submit-button", o),
              a.data("ujs:formnovalidate-button", r.attr("formnovalidate")),
              a.data("ujs:submit-button-formaction", r.attr("formaction")),
              a.data("ujs:submit-button-formmethod", r.attr("formmethod"));
          }),
          r.on("ajax:send.rails", n.formSubmitSelector, function (t) {
            this === t.target && n.disableFormElements(e(this));
          }),
          r.on("ajax:complete.rails", n.formSubmitSelector, function (t) {
            this === t.target && n.enableFormElements(e(this));
          }),
          e(function () {
            n.refreshCSRFTokens();
          }));
    };
    window.jQuery
      ? e(jQuery)
      : "object" == typeof exports &&
        "object" == typeof module &&
        (module.exports = e);
  })();
