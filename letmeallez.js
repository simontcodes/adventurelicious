//scripts version - 0.29.0
"use strict";
(() => {
  var uf = Object.create;
  var un = Object.defineProperty,
    ff = Object.defineProperties,
    cf = Object.getOwnPropertyDescriptor,
    lf = Object.getOwnPropertyDescriptors,
    df = Object.getOwnPropertyNames,
    ca = Object.getOwnPropertySymbols,
    pf = Object.getPrototypeOf,
    da = Object.prototype.hasOwnProperty,
    hf = Object.prototype.propertyIsEnumerable;
  var la = (e, t, i) =>
      t in e
        ? un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
        : (e[t] = i),
    D = (e, t) => {
      for (var i in t || (t = {})) da.call(t, i) && la(e, i, t[i]);
      if (ca) for (var i of ca(t)) hf.call(t, i) && la(e, i, t[i]);
      return e;
    },
    ie = (e, t) => ff(e, lf(t));
  var xt = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    pa = (e, t) => {
      for (var i in t) un(e, i, { get: t[i], enumerable: !0 });
    },
    mf = (e, t, i, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let f of df(t))
          !da.call(e, f) &&
            f !== i &&
            un(e, f, {
              get: () => t[f],
              enumerable: !(a = cf(t, f)) || a.enumerable,
            });
      return e;
    };
  var Qe = (e, t, i) => (
    (i = e != null ? uf(pf(e)) : {}),
    mf(
      t || !e || !e.__esModule
        ? un(i, "default", { value: e, enumerable: !0 })
        : i,
      e
    )
  );
  var ue = (e, t, i) =>
    new Promise((a, f) => {
      var d = (_) => {
          try {
            x(i.next(_));
          } catch (T) {
            f(T);
          }
        },
        m = (_) => {
          try {
            x(i.throw(_));
          } catch (T) {
            f(T);
          }
        },
        x = (_) => (_.done ? a(_.value) : Promise.resolve(_.value).then(d, m));
      x((i = i.apply(e, t)).next());
    });
  var vt = xt((ha, fn) => {
    (function (e, t) {
      "use strict";
      typeof fn == "object" && typeof fn.exports == "object"
        ? (fn.exports = e.document
            ? t(e, !0)
            : function (i) {
                if (!i.document)
                  throw new Error("jQuery requires a window with a document");
                return t(i);
              })
        : t(e);
    })(typeof window != "undefined" ? window : ha, function (e, t) {
      "use strict";
      var i = [],
        a = Object.getPrototypeOf,
        f = i.slice,
        d = i.flat
          ? function (r) {
              return i.flat.call(r);
            }
          : function (r) {
              return i.concat.apply([], r);
            },
        m = i.push,
        x = i.indexOf,
        _ = {},
        T = _.toString,
        O = _.hasOwnProperty,
        C = O.toString,
        z = C.call(Object),
        I = {},
        M = function (n) {
          return (
            typeof n == "function" &&
            typeof n.nodeType != "number" &&
            typeof n.item != "function"
          );
        },
        xe = function (n) {
          return n != null && n === n.window;
        },
        H = e.document,
        be = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function kt(r, n, o) {
        o = o || H;
        var s,
          c,
          l = o.createElement("script");
        if (((l.text = r), n))
          for (s in be)
            (c = n[s] || (n.getAttribute && n.getAttribute(s))),
              c && l.setAttribute(s, c);
        o.head.appendChild(l).parentNode.removeChild(l);
      }
      function Ge(r) {
        return r == null
          ? r + ""
          : typeof r == "object" || typeof r == "function"
          ? _[T.call(r)] || "object"
          : typeof r;
      }
      var ne = "3.7.0",
        Ee = /HTML$/i,
        u = function (r, n) {
          return new u.fn.init(r, n);
        };
      (u.fn = u.prototype =
        {
          jquery: ne,
          constructor: u,
          length: 0,
          toArray: function () {
            return f.call(this);
          },
          get: function (r) {
            return r == null
              ? f.call(this)
              : r < 0
              ? this[r + this.length]
              : this[r];
          },
          pushStack: function (r) {
            var n = u.merge(this.constructor(), r);
            return (n.prevObject = this), n;
          },
          each: function (r) {
            return u.each(this, r);
          },
          map: function (r) {
            return this.pushStack(
              u.map(this, function (n, o) {
                return r.call(n, o, n);
              })
            );
          },
          slice: function () {
            return this.pushStack(f.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              u.grep(this, function (r, n) {
                return (n + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              u.grep(this, function (r, n) {
                return n % 2;
              })
            );
          },
          eq: function (r) {
            var n = this.length,
              o = +r + (r < 0 ? n : 0);
            return this.pushStack(o >= 0 && o < n ? [this[o]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: m,
          sort: i.sort,
          splice: i.splice,
        }),
        (u.extend = u.fn.extend =
          function () {
            var r,
              n,
              o,
              s,
              c,
              l,
              p = arguments[0] || {},
              y = 1,
              g = arguments.length,
              b = !1;
            for (
              typeof p == "boolean" && ((b = p), (p = arguments[y] || {}), y++),
                typeof p != "object" && !M(p) && (p = {}),
                y === g && ((p = this), y--);
              y < g;
              y++
            )
              if ((r = arguments[y]) != null)
                for (n in r)
                  (s = r[n]),
                    !(n === "__proto__" || p === s) &&
                      (b && s && (u.isPlainObject(s) || (c = Array.isArray(s)))
                        ? ((o = p[n]),
                          c && !Array.isArray(o)
                            ? (l = [])
                            : !c && !u.isPlainObject(o)
                            ? (l = {})
                            : (l = o),
                          (c = !1),
                          (p[n] = u.extend(b, l, s)))
                        : s !== void 0 && (p[n] = s));
            return p;
          }),
        u.extend({
          expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (r) {
            throw new Error(r);
          },
          noop: function () {},
          isPlainObject: function (r) {
            var n, o;
            return !r || T.call(r) !== "[object Object]"
              ? !1
              : ((n = a(r)),
                n
                  ? ((o = O.call(n, "constructor") && n.constructor),
                    typeof o == "function" && C.call(o) === z)
                  : !0);
          },
          isEmptyObject: function (r) {
            var n;
            for (n in r) return !1;
            return !0;
          },
          globalEval: function (r, n, o) {
            kt(r, { nonce: n && n.nonce }, o);
          },
          each: function (r, n) {
            var o,
              s = 0;
            if (he(r))
              for (o = r.length; s < o && n.call(r[s], s, r[s]) !== !1; s++);
            else for (s in r) if (n.call(r[s], s, r[s]) === !1) break;
            return r;
          },
          text: function (r) {
            var n,
              o = "",
              s = 0,
              c = r.nodeType;
            if (c) {
              if (c === 1 || c === 9 || c === 11) return r.textContent;
              if (c === 3 || c === 4) return r.nodeValue;
            } else for (; (n = r[s++]); ) o += u.text(n);
            return o;
          },
          makeArray: function (r, n) {
            var o = n || [];
            return (
              r != null &&
                (he(Object(r))
                  ? u.merge(o, typeof r == "string" ? [r] : r)
                  : m.call(o, r)),
              o
            );
          },
          inArray: function (r, n, o) {
            return n == null ? -1 : x.call(n, r, o);
          },
          isXMLDoc: function (r) {
            var n = r && r.namespaceURI,
              o = r && (r.ownerDocument || r).documentElement;
            return !Ee.test(n || (o && o.nodeName) || "HTML");
          },
          merge: function (r, n) {
            for (var o = +n.length, s = 0, c = r.length; s < o; s++)
              r[c++] = n[s];
            return (r.length = c), r;
          },
          grep: function (r, n, o) {
            for (var s, c = [], l = 0, p = r.length, y = !o; l < p; l++)
              (s = !n(r[l], l)), s !== y && c.push(r[l]);
            return c;
          },
          map: function (r, n, o) {
            var s,
              c,
              l = 0,
              p = [];
            if (he(r))
              for (s = r.length; l < s; l++)
                (c = n(r[l], l, o)), c != null && p.push(c);
            else for (l in r) (c = n(r[l], l, o)), c != null && p.push(c);
            return d(p);
          },
          guid: 1,
          support: I,
        }),
        typeof Symbol == "function" &&
          (u.fn[Symbol.iterator] = i[Symbol.iterator]),
        u.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (r, n) {
            _["[object " + n + "]"] = n.toLowerCase();
          }
        );
      function he(r) {
        var n = !!r && "length" in r && r.length,
          o = Ge(r);
        return M(r) || xe(r)
          ? !1
          : o === "array" ||
              n === 0 ||
              (typeof n == "number" && n > 0 && n - 1 in r);
      }
      function Z(r, n) {
        return r.nodeName && r.nodeName.toLowerCase() === n.toLowerCase();
      }
      var Nt = i.pop,
        hr = i.sort,
        zn = i.splice,
        te = "[\\x20\\t\\r\\n\\f]",
        mr = new RegExp(
          "^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$",
          "g"
        );
      u.contains = function (r, n) {
        var o = n && n.parentNode;
        return (
          r === o ||
          !!(
            o &&
            o.nodeType === 1 &&
            (r.contains
              ? r.contains(o)
              : r.compareDocumentPosition && r.compareDocumentPosition(o) & 16)
          )
        );
      };
      var iu = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function ou(r, n) {
        return n
          ? r === "\0"
            ? "\uFFFD"
            : r.slice(0, -1) +
              "\\" +
              r.charCodeAt(r.length - 1).toString(16) +
              " "
          : "\\" + r;
      }
      u.escapeSelector = function (r) {
        return (r + "").replace(iu, ou);
      };
      var rt = H,
        Vn = m;
      (function () {
        var r,
          n,
          o,
          s,
          c,
          l = Vn,
          p,
          y,
          g,
          b,
          k,
          R = u.expando,
          S = 0,
          A = 0,
          G = rn(),
          ee = rn(),
          V = rn(),
          ge = rn(),
          pe = function (h, v) {
            return h === v && (c = !0), 0;
          },
          ze =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          Ve =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            te +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          Q =
            "\\[" +
            te +
            "*(" +
            Ve +
            ")(?:" +
            te +
            "*([*^$|!~]?=)" +
            te +
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
            Ve +
            "))|)" +
            te +
            "*\\]",
          Ot =
            ":(" +
            Ve +
            `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
            Q +
            ")*)|.*)\\)|)",
          re = new RegExp(te + "+", "g"),
          ce = new RegExp("^" + te + "*," + te + "*"),
          Tr = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
          li = new RegExp(te + "|>"),
          Je = new RegExp(Ot),
          wr = new RegExp("^" + Ve + "$"),
          Ke = {
            ID: new RegExp("^#(" + Ve + ")"),
            CLASS: new RegExp("^\\.(" + Ve + ")"),
            TAG: new RegExp("^(" + Ve + "|[*])"),
            ATTR: new RegExp("^" + Q),
            PSEUDO: new RegExp("^" + Ot),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                te +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                te +
                "*(?:([+-]|)" +
                te +
                "*(\\d+)|))" +
                te +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + ze + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                te +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                te +
                "*((?:-\\d)?\\d*)" +
                te +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          gt = /^(?:input|select|textarea|button)$/i,
          yt = /^h\d$/i,
          Ae = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          di = /[+~]/,
          ot = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          at = function (h, v) {
            var E = "0x" + h.slice(1) - 65536;
            return (
              v ||
              (E < 0
                ? String.fromCharCode(E + 65536)
                : String.fromCharCode((E >> 10) | 55296, (E & 1023) | 56320))
            );
          },
          ef = function () {
            _t();
          },
          tf = an(
            function (h) {
              return h.disabled === !0 && Z(h, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
        function rf() {
          try {
            return p.activeElement;
          } catch (h) {}
        }
        try {
          l.apply((i = f.call(rt.childNodes)), rt.childNodes),
            i[rt.childNodes.length].nodeType;
        } catch (h) {
          l = {
            apply: function (v, E) {
              Vn.apply(v, f.call(E));
            },
            call: function (v) {
              Vn.apply(v, f.call(arguments, 1));
            },
          };
        }
        function oe(h, v, E, w) {
          var N,
            P,
            L,
            U,
            j,
            J,
            q,
            W = v && v.ownerDocument,
            K = v ? v.nodeType : 9;
          if (
            ((E = E || []),
            typeof h != "string" || !h || (K !== 1 && K !== 9 && K !== 11))
          )
            return E;
          if (!w && (_t(v), (v = v || p), g)) {
            if (K !== 11 && (j = Ae.exec(h)))
              if ((N = j[1])) {
                if (K === 9)
                  if ((L = v.getElementById(N))) {
                    if (L.id === N) return l.call(E, L), E;
                  } else return E;
                else if (
                  W &&
                  (L = W.getElementById(N)) &&
                  oe.contains(v, L) &&
                  L.id === N
                )
                  return l.call(E, L), E;
              } else {
                if (j[2]) return l.apply(E, v.getElementsByTagName(h)), E;
                if ((N = j[3]) && v.getElementsByClassName)
                  return l.apply(E, v.getElementsByClassName(N)), E;
              }
            if (!ge[h + " "] && (!b || !b.test(h))) {
              if (((q = h), (W = v), K === 1 && (li.test(h) || Tr.test(h)))) {
                for (
                  W = (di.test(h) && pi(v.parentNode)) || v,
                    (W != v || !I.scope) &&
                      ((U = v.getAttribute("id"))
                        ? (U = u.escapeSelector(U))
                        : v.setAttribute("id", (U = R))),
                    J = nn(h),
                    P = J.length;
                  P--;

                )
                  J[P] = (U ? "#" + U : ":scope") + " " + on(J[P]);
                q = J.join(",");
              }
              try {
                return l.apply(E, W.querySelectorAll(q)), E;
              } catch ($) {
                ge(h, !0);
              } finally {
                U === R && v.removeAttribute("id");
              }
            }
          }
          return fa(h.replace(mr, "$1"), v, E, w);
        }
        function rn() {
          var h = [];
          function v(E, w) {
            return (
              h.push(E + " ") > n.cacheLength && delete v[h.shift()],
              (v[E + " "] = w)
            );
          }
          return v;
        }
        function Ue(h) {
          return (h[R] = !0), h;
        }
        function rr(h) {
          var v = p.createElement("fieldset");
          try {
            return !!h(v);
          } catch (E) {
            return !1;
          } finally {
            v.parentNode && v.parentNode.removeChild(v), (v = null);
          }
        }
        function nf(h) {
          return function (v) {
            return Z(v, "input") && v.type === h;
          };
        }
        function of(h) {
          return function (v) {
            return (Z(v, "input") || Z(v, "button")) && v.type === h;
          };
        }
        function sa(h) {
          return function (v) {
            return "form" in v
              ? v.parentNode && v.disabled === !1
                ? "label" in v
                  ? "label" in v.parentNode
                    ? v.parentNode.disabled === h
                    : v.disabled === h
                  : v.isDisabled === h || (v.isDisabled !== !h && tf(v) === h)
                : v.disabled === h
              : "label" in v
              ? v.disabled === h
              : !1;
          };
        }
        function At(h) {
          return Ue(function (v) {
            return (
              (v = +v),
              Ue(function (E, w) {
                for (var N, P = h([], E.length, v), L = P.length; L--; )
                  E[(N = P[L])] && (E[N] = !(w[N] = E[N]));
              })
            );
          });
        }
        function pi(h) {
          return h && typeof h.getElementsByTagName != "undefined" && h;
        }
        function _t(h) {
          var v,
            E = h ? h.ownerDocument || h : rt;
          return (
            E == p ||
              E.nodeType !== 9 ||
              !E.documentElement ||
              ((p = E),
              (y = p.documentElement),
              (g = !u.isXMLDoc(p)),
              (k = y.matches || y.webkitMatchesSelector || y.msMatchesSelector),
              rt != p &&
                (v = p.defaultView) &&
                v.top !== v &&
                v.addEventListener("unload", ef),
              (I.getById = rr(function (w) {
                return (
                  (y.appendChild(w).id = u.expando),
                  !p.getElementsByName || !p.getElementsByName(u.expando).length
                );
              })),
              (I.disconnectedMatch = rr(function (w) {
                return k.call(w, "*");
              })),
              (I.scope = rr(function () {
                return p.querySelectorAll(":scope");
              })),
              (I.cssHas = rr(function () {
                try {
                  return p.querySelector(":has(*,:jqfake)"), !1;
                } catch (w) {
                  return !0;
                }
              })),
              I.getById
                ? ((n.filter.ID = function (w) {
                    var N = w.replace(ot, at);
                    return function (P) {
                      return P.getAttribute("id") === N;
                    };
                  }),
                  (n.find.ID = function (w, N) {
                    if (typeof N.getElementById != "undefined" && g) {
                      var P = N.getElementById(w);
                      return P ? [P] : [];
                    }
                  }))
                : ((n.filter.ID = function (w) {
                    var N = w.replace(ot, at);
                    return function (P) {
                      var L =
                        typeof P.getAttributeNode != "undefined" &&
                        P.getAttributeNode("id");
                      return L && L.value === N;
                    };
                  }),
                  (n.find.ID = function (w, N) {
                    if (typeof N.getElementById != "undefined" && g) {
                      var P,
                        L,
                        U,
                        j = N.getElementById(w);
                      if (j) {
                        if (
                          ((P = j.getAttributeNode("id")), P && P.value === w)
                        )
                          return [j];
                        for (U = N.getElementsByName(w), L = 0; (j = U[L++]); )
                          if (
                            ((P = j.getAttributeNode("id")), P && P.value === w)
                          )
                            return [j];
                      }
                      return [];
                    }
                  })),
              (n.find.TAG = function (w, N) {
                return typeof N.getElementsByTagName != "undefined"
                  ? N.getElementsByTagName(w)
                  : N.querySelectorAll(w);
              }),
              (n.find.CLASS = function (w, N) {
                if (typeof N.getElementsByClassName != "undefined" && g)
                  return N.getElementsByClassName(w);
              }),
              (b = []),
              rr(function (w) {
                var N;
                (y.appendChild(w).innerHTML =
                  "<a id='" +
                  R +
                  "' href='' disabled='disabled'></a><select id='" +
                  R +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  w.querySelectorAll("[selected]").length ||
                    b.push("\\[" + te + "*(?:value|" + ze + ")"),
                  w.querySelectorAll("[id~=" + R + "-]").length || b.push("~="),
                  w.querySelectorAll("a#" + R + "+*").length ||
                    b.push(".#.+[+~]"),
                  w.querySelectorAll(":checked").length || b.push(":checked"),
                  (N = p.createElement("input")),
                  N.setAttribute("type", "hidden"),
                  w.appendChild(N).setAttribute("name", "D"),
                  (y.appendChild(w).disabled = !0),
                  w.querySelectorAll(":disabled").length !== 2 &&
                    b.push(":enabled", ":disabled"),
                  (N = p.createElement("input")),
                  N.setAttribute("name", ""),
                  w.appendChild(N),
                  w.querySelectorAll("[name='']").length ||
                    b.push(
                      "\\[" + te + "*name" + te + "*=" + te + `*(?:''|"")`
                    );
              }),
              I.cssHas || b.push(":has"),
              (b = b.length && new RegExp(b.join("|"))),
              (pe = function (w, N) {
                if (w === N) return (c = !0), 0;
                var P = !w.compareDocumentPosition - !N.compareDocumentPosition;
                return (
                  P ||
                  ((P =
                    (w.ownerDocument || w) == (N.ownerDocument || N)
                      ? w.compareDocumentPosition(N)
                      : 1),
                  P & 1 ||
                  (!I.sortDetached && N.compareDocumentPosition(w) === P)
                    ? w === p || (w.ownerDocument == rt && oe.contains(rt, w))
                      ? -1
                      : N === p || (N.ownerDocument == rt && oe.contains(rt, N))
                      ? 1
                      : s
                      ? x.call(s, w) - x.call(s, N)
                      : 0
                    : P & 4
                    ? -1
                    : 1)
                );
              })),
            p
          );
        }
        (oe.matches = function (h, v) {
          return oe(h, null, null, v);
        }),
          (oe.matchesSelector = function (h, v) {
            if ((_t(h), g && !ge[v + " "] && (!b || !b.test(v))))
              try {
                var E = k.call(h, v);
                if (
                  E ||
                  I.disconnectedMatch ||
                  (h.document && h.document.nodeType !== 11)
                )
                  return E;
              } catch (w) {
                ge(v, !0);
              }
            return oe(v, p, null, [h]).length > 0;
          }),
          (oe.contains = function (h, v) {
            return (h.ownerDocument || h) != p && _t(h), u.contains(h, v);
          }),
          (oe.attr = function (h, v) {
            (h.ownerDocument || h) != p && _t(h);
            var E = n.attrHandle[v.toLowerCase()],
              w =
                E && O.call(n.attrHandle, v.toLowerCase())
                  ? E(h, v, !g)
                  : void 0;
            return w !== void 0 ? w : h.getAttribute(v);
          }),
          (oe.error = function (h) {
            throw new Error("Syntax error, unrecognized expression: " + h);
          }),
          (u.uniqueSort = function (h) {
            var v,
              E = [],
              w = 0,
              N = 0;
            if (
              ((c = !I.sortStable),
              (s = !I.sortStable && f.call(h, 0)),
              hr.call(h, pe),
              c)
            ) {
              for (; (v = h[N++]); ) v === h[N] && (w = E.push(N));
              for (; w--; ) zn.call(h, E[w], 1);
            }
            return (s = null), h;
          }),
          (u.fn.uniqueSort = function () {
            return this.pushStack(u.uniqueSort(f.apply(this)));
          }),
          (n = u.expr =
            {
              cacheLength: 50,
              createPseudo: Ue,
              match: Ke,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (h) {
                  return (
                    (h[1] = h[1].replace(ot, at)),
                    (h[3] = (h[3] || h[4] || h[5] || "").replace(ot, at)),
                    h[2] === "~=" && (h[3] = " " + h[3] + " "),
                    h.slice(0, 4)
                  );
                },
                CHILD: function (h) {
                  return (
                    (h[1] = h[1].toLowerCase()),
                    h[1].slice(0, 3) === "nth"
                      ? (h[3] || oe.error(h[0]),
                        (h[4] = +(h[4]
                          ? h[5] + (h[6] || 1)
                          : 2 * (h[3] === "even" || h[3] === "odd"))),
                        (h[5] = +(h[7] + h[8] || h[3] === "odd")))
                      : h[3] && oe.error(h[0]),
                    h
                  );
                },
                PSEUDO: function (h) {
                  var v,
                    E = !h[6] && h[2];
                  return Ke.CHILD.test(h[0])
                    ? null
                    : (h[3]
                        ? (h[2] = h[4] || h[5] || "")
                        : E &&
                          Je.test(E) &&
                          (v = nn(E, !0)) &&
                          (v = E.indexOf(")", E.length - v) - E.length) &&
                          ((h[0] = h[0].slice(0, v)), (h[2] = E.slice(0, v))),
                      h.slice(0, 3));
                },
              },
              filter: {
                TAG: function (h) {
                  var v = h.replace(ot, at).toLowerCase();
                  return h === "*"
                    ? function () {
                        return !0;
                      }
                    : function (E) {
                        return Z(E, v);
                      };
                },
                CLASS: function (h) {
                  var v = G[h + " "];
                  return (
                    v ||
                    ((v = new RegExp(
                      "(^|" + te + ")" + h + "(" + te + "|$)"
                    )) &&
                      G(h, function (E) {
                        return v.test(
                          (typeof E.className == "string" && E.className) ||
                            (typeof E.getAttribute != "undefined" &&
                              E.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (h, v, E) {
                  return function (w) {
                    var N = oe.attr(w, h);
                    return N == null
                      ? v === "!="
                      : v
                      ? ((N += ""),
                        v === "="
                          ? N === E
                          : v === "!="
                          ? N !== E
                          : v === "^="
                          ? E && N.indexOf(E) === 0
                          : v === "*="
                          ? E && N.indexOf(E) > -1
                          : v === "$="
                          ? E && N.slice(-E.length) === E
                          : v === "~="
                          ? (" " + N.replace(re, " ") + " ").indexOf(E) > -1
                          : v === "|="
                          ? N === E || N.slice(0, E.length + 1) === E + "-"
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (h, v, E, w, N) {
                  var P = h.slice(0, 3) !== "nth",
                    L = h.slice(-4) !== "last",
                    U = v === "of-type";
                  return w === 1 && N === 0
                    ? function (j) {
                        return !!j.parentNode;
                      }
                    : function (j, J, q) {
                        var W,
                          K,
                          $,
                          se,
                          ke,
                          _e = P !== L ? "nextSibling" : "previousSibling",
                          Ie = j.parentNode,
                          Xe = U && j.nodeName.toLowerCase(),
                          nr = !q && !U,
                          ve = !1;
                        if (Ie) {
                          if (P) {
                            for (; _e; ) {
                              for ($ = j; ($ = $[_e]); )
                                if (U ? Z($, Xe) : $.nodeType === 1) return !1;
                              ke = _e = h === "only" && !ke && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((ke = [L ? Ie.firstChild : Ie.lastChild]), L && nr)
                          ) {
                            for (
                              K = Ie[R] || (Ie[R] = {}),
                                W = K[h] || [],
                                se = W[0] === S && W[1],
                                ve = se && W[2],
                                $ = se && Ie.childNodes[se];
                              ($ =
                                (++se && $ && $[_e]) ||
                                (ve = se = 0) ||
                                ke.pop());

                            )
                              if ($.nodeType === 1 && ++ve && $ === j) {
                                K[h] = [S, se, ve];
                                break;
                              }
                          } else if (
                            (nr &&
                              ((K = j[R] || (j[R] = {})),
                              (W = K[h] || []),
                              (se = W[0] === S && W[1]),
                              (ve = se)),
                            ve === !1)
                          )
                            for (
                              ;
                              ($ =
                                (++se && $ && $[_e]) ||
                                (ve = se = 0) ||
                                ke.pop()) &&
                              !(
                                (U ? Z($, Xe) : $.nodeType === 1) &&
                                ++ve &&
                                (nr &&
                                  ((K = $[R] || ($[R] = {})), (K[h] = [S, ve])),
                                $ === j)
                              );

                            );
                          return (
                            (ve -= N), ve === w || (ve % w === 0 && ve / w >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (h, v) {
                  var E,
                    w =
                      n.pseudos[h] ||
                      n.setFilters[h.toLowerCase()] ||
                      oe.error("unsupported pseudo: " + h);
                  return w[R]
                    ? w(v)
                    : w.length > 1
                    ? ((E = [h, h, "", v]),
                      n.setFilters.hasOwnProperty(h.toLowerCase())
                        ? Ue(function (N, P) {
                            for (var L, U = w(N, v), j = U.length; j--; )
                              (L = x.call(N, U[j])), (N[L] = !(P[L] = U[j]));
                          })
                        : function (N) {
                            return w(N, 0, E);
                          })
                    : w;
                },
              },
              pseudos: {
                not: Ue(function (h) {
                  var v = [],
                    E = [],
                    w = yi(h.replace(mr, "$1"));
                  return w[R]
                    ? Ue(function (N, P, L, U) {
                        for (var j, J = w(N, null, U, []), q = N.length; q--; )
                          (j = J[q]) && (N[q] = !(P[q] = j));
                      })
                    : function (N, P, L) {
                        return (
                          (v[0] = N), w(v, null, L, E), (v[0] = null), !E.pop()
                        );
                      };
                }),
                has: Ue(function (h) {
                  return function (v) {
                    return oe(h, v).length > 0;
                  };
                }),
                contains: Ue(function (h) {
                  return (
                    (h = h.replace(ot, at)),
                    function (v) {
                      return (v.textContent || u.text(v)).indexOf(h) > -1;
                    }
                  );
                }),
                lang: Ue(function (h) {
                  return (
                    wr.test(h || "") || oe.error("unsupported lang: " + h),
                    (h = h.replace(ot, at).toLowerCase()),
                    function (v) {
                      var E;
                      do
                        if (
                          (E = g
                            ? v.lang
                            : v.getAttribute("xml:lang") ||
                              v.getAttribute("lang"))
                        )
                          return (
                            (E = E.toLowerCase()),
                            E === h || E.indexOf(h + "-") === 0
                          );
                      while ((v = v.parentNode) && v.nodeType === 1);
                      return !1;
                    }
                  );
                }),
                target: function (h) {
                  var v = e.location && e.location.hash;
                  return v && v.slice(1) === h.id;
                },
                root: function (h) {
                  return h === y;
                },
                focus: function (h) {
                  return (
                    h === rf() &&
                    p.hasFocus() &&
                    !!(h.type || h.href || ~h.tabIndex)
                  );
                },
                enabled: sa(!1),
                disabled: sa(!0),
                checked: function (h) {
                  return (
                    (Z(h, "input") && !!h.checked) ||
                    (Z(h, "option") && !!h.selected)
                  );
                },
                selected: function (h) {
                  return (
                    h.parentNode && h.parentNode.selectedIndex,
                    h.selected === !0
                  );
                },
                empty: function (h) {
                  for (h = h.firstChild; h; h = h.nextSibling)
                    if (h.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (h) {
                  return !n.pseudos.empty(h);
                },
                header: function (h) {
                  return yt.test(h.nodeName);
                },
                input: function (h) {
                  return gt.test(h.nodeName);
                },
                button: function (h) {
                  return (
                    (Z(h, "input") && h.type === "button") || Z(h, "button")
                  );
                },
                text: function (h) {
                  var v;
                  return (
                    Z(h, "input") &&
                    h.type === "text" &&
                    ((v = h.getAttribute("type")) == null ||
                      v.toLowerCase() === "text")
                  );
                },
                first: At(function () {
                  return [0];
                }),
                last: At(function (h, v) {
                  return [v - 1];
                }),
                eq: At(function (h, v, E) {
                  return [E < 0 ? E + v : E];
                }),
                even: At(function (h, v) {
                  for (var E = 0; E < v; E += 2) h.push(E);
                  return h;
                }),
                odd: At(function (h, v) {
                  for (var E = 1; E < v; E += 2) h.push(E);
                  return h;
                }),
                lt: At(function (h, v, E) {
                  var w;
                  for (
                    E < 0 ? (w = E + v) : E > v ? (w = v) : (w = E);
                    --w >= 0;

                  )
                    h.push(w);
                  return h;
                }),
                gt: At(function (h, v, E) {
                  for (var w = E < 0 ? E + v : E; ++w < v; ) h.push(w);
                  return h;
                }),
              },
            }),
          (n.pseudos.nth = n.pseudos.eq);
        for (r in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          n.pseudos[r] = nf(r);
        for (r in { submit: !0, reset: !0 }) n.pseudos[r] = of(r);
        function ua() {}
        (ua.prototype = n.filters = n.pseudos), (n.setFilters = new ua());
        function nn(h, v) {
          var E,
            w,
            N,
            P,
            L,
            U,
            j,
            J = ee[h + " "];
          if (J) return v ? 0 : J.slice(0);
          for (L = h, U = [], j = n.preFilter; L; ) {
            (!E || (w = ce.exec(L))) &&
              (w && (L = L.slice(w[0].length) || L), U.push((N = []))),
              (E = !1),
              (w = Tr.exec(L)) &&
                ((E = w.shift()),
                N.push({ value: E, type: w[0].replace(mr, " ") }),
                (L = L.slice(E.length)));
            for (P in n.filter)
              (w = Ke[P].exec(L)) &&
                (!j[P] || (w = j[P](w))) &&
                ((E = w.shift()),
                N.push({ value: E, type: P, matches: w }),
                (L = L.slice(E.length)));
            if (!E) break;
          }
          return v ? L.length : L ? oe.error(h) : ee(h, U).slice(0);
        }
        function on(h) {
          for (var v = 0, E = h.length, w = ""; v < E; v++) w += h[v].value;
          return w;
        }
        function an(h, v, E) {
          var w = v.dir,
            N = v.next,
            P = N || w,
            L = E && P === "parentNode",
            U = A++;
          return v.first
            ? function (j, J, q) {
                for (; (j = j[w]); )
                  if (j.nodeType === 1 || L) return h(j, J, q);
                return !1;
              }
            : function (j, J, q) {
                var W,
                  K,
                  $ = [S, U];
                if (q) {
                  for (; (j = j[w]); )
                    if ((j.nodeType === 1 || L) && h(j, J, q)) return !0;
                } else
                  for (; (j = j[w]); )
                    if (j.nodeType === 1 || L)
                      if (((K = j[R] || (j[R] = {})), N && Z(j, N)))
                        j = j[w] || j;
                      else {
                        if ((W = K[P]) && W[0] === S && W[1] === U)
                          return ($[2] = W[2]);
                        if (((K[P] = $), ($[2] = h(j, J, q)))) return !0;
                      }
                return !1;
              };
        }
        function hi(h) {
          return h.length > 1
            ? function (v, E, w) {
                for (var N = h.length; N--; ) if (!h[N](v, E, w)) return !1;
                return !0;
              }
            : h[0];
        }
        function af(h, v, E) {
          for (var w = 0, N = v.length; w < N; w++) oe(h, v[w], E);
          return E;
        }
        function sn(h, v, E, w, N) {
          for (var P, L = [], U = 0, j = h.length, J = v != null; U < j; U++)
            (P = h[U]) && (!E || E(P, w, N)) && (L.push(P), J && v.push(U));
          return L;
        }
        function mi(h, v, E, w, N, P) {
          return (
            w && !w[R] && (w = mi(w)),
            N && !N[R] && (N = mi(N, P)),
            Ue(function (L, U, j, J) {
              var q,
                W,
                K,
                $,
                se = [],
                ke = [],
                _e = U.length,
                Ie = L || af(v || "*", j.nodeType ? [j] : j, []),
                Xe = h && (L || !v) ? sn(Ie, se, h, j, J) : Ie;
              if (
                (E
                  ? (($ = N || (L ? h : _e || w) ? [] : U), E(Xe, $, j, J))
                  : ($ = Xe),
                w)
              )
                for (q = sn($, ke), w(q, [], j, J), W = q.length; W--; )
                  (K = q[W]) && ($[ke[W]] = !(Xe[ke[W]] = K));
              if (L) {
                if (N || h) {
                  if (N) {
                    for (q = [], W = $.length; W--; )
                      (K = $[W]) && q.push((Xe[W] = K));
                    N(null, ($ = []), q, J);
                  }
                  for (W = $.length; W--; )
                    (K = $[W]) &&
                      (q = N ? x.call(L, K) : se[W]) > -1 &&
                      (L[q] = !(U[q] = K));
                }
              } else ($ = sn($ === U ? $.splice(_e, $.length) : $)), N ? N(null, U, $, J) : l.apply(U, $);
            })
          );
        }
        function gi(h) {
          for (
            var v,
              E,
              w,
              N = h.length,
              P = n.relative[h[0].type],
              L = P || n.relative[" "],
              U = P ? 1 : 0,
              j = an(
                function (W) {
                  return W === v;
                },
                L,
                !0
              ),
              J = an(
                function (W) {
                  return x.call(v, W) > -1;
                },
                L,
                !0
              ),
              q = [
                function (W, K, $) {
                  var se =
                    (!P && ($ || K != o)) ||
                    ((v = K).nodeType ? j(W, K, $) : J(W, K, $));
                  return (v = null), se;
                },
              ];
            U < N;
            U++
          )
            if ((E = n.relative[h[U].type])) q = [an(hi(q), E)];
            else {
              if (((E = n.filter[h[U].type].apply(null, h[U].matches)), E[R])) {
                for (w = ++U; w < N && !n.relative[h[w].type]; w++);
                return mi(
                  U > 1 && hi(q),
                  U > 1 &&
                    on(
                      h
                        .slice(0, U - 1)
                        .concat({ value: h[U - 2].type === " " ? "*" : "" })
                    ).replace(mr, "$1"),
                  E,
                  U < w && gi(h.slice(U, w)),
                  w < N && gi((h = h.slice(w))),
                  w < N && on(h)
                );
              }
              q.push(E);
            }
          return hi(q);
        }
        function sf(h, v) {
          var E = v.length > 0,
            w = h.length > 0,
            N = function (P, L, U, j, J) {
              var q,
                W,
                K,
                $ = 0,
                se = "0",
                ke = P && [],
                _e = [],
                Ie = o,
                Xe = P || (w && n.find.TAG("*", J)),
                nr = (S += Ie == null ? 1 : Math.random() || 0.1),
                ve = Xe.length;
              for (
                J && (o = L == p || L || J);
                se !== ve && (q = Xe[se]) != null;
                se++
              ) {
                if (w && q) {
                  for (
                    W = 0, !L && q.ownerDocument != p && (_t(q), (U = !g));
                    (K = h[W++]);

                  )
                    if (K(q, L || p, U)) {
                      l.call(j, q);
                      break;
                    }
                  J && (S = nr);
                }
                E && ((q = !K && q) && $--, P && ke.push(q));
              }
              if ((($ += se), E && se !== $)) {
                for (W = 0; (K = v[W++]); ) K(ke, _e, L, U);
                if (P) {
                  if ($ > 0)
                    for (; se--; ) ke[se] || _e[se] || (_e[se] = Nt.call(j));
                  _e = sn(_e);
                }
                l.apply(j, _e),
                  J &&
                    !P &&
                    _e.length > 0 &&
                    $ + v.length > 1 &&
                    u.uniqueSort(j);
              }
              return J && ((S = nr), (o = Ie)), ke;
            };
          return E ? Ue(N) : N;
        }
        function yi(h, v) {
          var E,
            w = [],
            N = [],
            P = V[h + " "];
          if (!P) {
            for (v || (v = nn(h)), E = v.length; E--; )
              (P = gi(v[E])), P[R] ? w.push(P) : N.push(P);
            (P = V(h, sf(N, w))), (P.selector = h);
          }
          return P;
        }
        function fa(h, v, E, w) {
          var N,
            P,
            L,
            U,
            j,
            J = typeof h == "function" && h,
            q = !w && nn((h = J.selector || h));
          if (((E = E || []), q.length === 1)) {
            if (
              ((P = q[0] = q[0].slice(0)),
              P.length > 2 &&
                (L = P[0]).type === "ID" &&
                v.nodeType === 9 &&
                g &&
                n.relative[P[1].type])
            ) {
              if (
                ((v = (n.find.ID(L.matches[0].replace(ot, at), v) || [])[0]), v)
              )
                J && (v = v.parentNode);
              else return E;
              h = h.slice(P.shift().value.length);
            }
            for (
              N = Ke.needsContext.test(h) ? 0 : P.length;
              N-- && ((L = P[N]), !n.relative[(U = L.type)]);

            )
              if (
                (j = n.find[U]) &&
                (w = j(
                  L.matches[0].replace(ot, at),
                  (di.test(P[0].type) && pi(v.parentNode)) || v
                ))
              ) {
                if ((P.splice(N, 1), (h = w.length && on(P)), !h))
                  return l.apply(E, w), E;
                break;
              }
          }
          return (
            (J || yi(h, q))(
              w,
              v,
              !g,
              E,
              !v || (di.test(h) && pi(v.parentNode)) || v
            ),
            E
          );
        }
        (I.sortStable = R.split("").sort(pe).join("") === R),
          _t(),
          (I.sortDetached = rr(function (h) {
            return h.compareDocumentPosition(p.createElement("fieldset")) & 1;
          })),
          (u.find = oe),
          (u.expr[":"] = u.expr.pseudos),
          (u.unique = u.uniqueSort),
          (oe.compile = yi),
          (oe.select = fa),
          (oe.setDocument = _t),
          (oe.escape = u.escapeSelector),
          (oe.getText = u.text),
          (oe.isXML = u.isXMLDoc),
          (oe.selectors = u.expr),
          (oe.support = u.support),
          (oe.uniqueSort = u.uniqueSort);
      })();
      var Vt = function (r, n, o) {
          for (var s = [], c = o !== void 0; (r = r[n]) && r.nodeType !== 9; )
            if (r.nodeType === 1) {
              if (c && u(r).is(o)) break;
              s.push(r);
            }
          return s;
        },
        To = function (r, n) {
          for (var o = []; r; r = r.nextSibling)
            r.nodeType === 1 && r !== n && o.push(r);
          return o;
        },
        wo = u.expr.match.needsContext,
        ko = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Jn(r, n, o) {
        return M(n)
          ? u.grep(r, function (s, c) {
              return !!n.call(s, c, s) !== o;
            })
          : n.nodeType
          ? u.grep(r, function (s) {
              return (s === n) !== o;
            })
          : typeof n != "string"
          ? u.grep(r, function (s) {
              return x.call(n, s) > -1 !== o;
            })
          : u.filter(n, r, o);
      }
      (u.filter = function (r, n, o) {
        var s = n[0];
        return (
          o && (r = ":not(" + r + ")"),
          n.length === 1 && s.nodeType === 1
            ? u.find.matchesSelector(s, r)
              ? [s]
              : []
            : u.find.matches(
                r,
                u.grep(n, function (c) {
                  return c.nodeType === 1;
                })
              )
        );
      }),
        u.fn.extend({
          find: function (r) {
            var n,
              o,
              s = this.length,
              c = this;
            if (typeof r != "string")
              return this.pushStack(
                u(r).filter(function () {
                  for (n = 0; n < s; n++) if (u.contains(c[n], this)) return !0;
                })
              );
            for (o = this.pushStack([]), n = 0; n < s; n++) u.find(r, c[n], o);
            return s > 1 ? u.uniqueSort(o) : o;
          },
          filter: function (r) {
            return this.pushStack(Jn(this, r || [], !1));
          },
          not: function (r) {
            return this.pushStack(Jn(this, r || [], !0));
          },
          is: function (r) {
            return !!Jn(
              this,
              typeof r == "string" && wo.test(r) ? u(r) : r || [],
              !1
            ).length;
          },
        });
      var No,
        au = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        su = (u.fn.init = function (r, n, o) {
          var s, c;
          if (!r) return this;
          if (((o = o || No), typeof r == "string"))
            if (
              (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3
                ? (s = [null, r, null])
                : (s = au.exec(r)),
              s && (s[1] || !n))
            )
              if (s[1]) {
                if (
                  ((n = n instanceof u ? n[0] : n),
                  u.merge(
                    this,
                    u.parseHTML(
                      s[1],
                      n && n.nodeType ? n.ownerDocument || n : H,
                      !0
                    )
                  ),
                  ko.test(s[1]) && u.isPlainObject(n))
                )
                  for (s in n) M(this[s]) ? this[s](n[s]) : this.attr(s, n[s]);
                return this;
              } else
                return (
                  (c = H.getElementById(s[2])),
                  c && ((this[0] = c), (this.length = 1)),
                  this
                );
            else
              return !n || n.jquery
                ? (n || o).find(r)
                : this.constructor(n).find(r);
          else {
            if (r.nodeType) return (this[0] = r), (this.length = 1), this;
            if (M(r)) return o.ready !== void 0 ? o.ready(r) : r(u);
          }
          return u.makeArray(r, this);
        });
      (su.prototype = u.fn), (No = u(H));
      var uu = /^(?:parents|prev(?:Until|All))/,
        fu = { children: !0, contents: !0, next: !0, prev: !0 };
      u.fn.extend({
        has: function (r) {
          var n = u(r, this),
            o = n.length;
          return this.filter(function () {
            for (var s = 0; s < o; s++) if (u.contains(this, n[s])) return !0;
          });
        },
        closest: function (r, n) {
          var o,
            s = 0,
            c = this.length,
            l = [],
            p = typeof r != "string" && u(r);
          if (!wo.test(r)) {
            for (; s < c; s++)
              for (o = this[s]; o && o !== n; o = o.parentNode)
                if (
                  o.nodeType < 11 &&
                  (p
                    ? p.index(o) > -1
                    : o.nodeType === 1 && u.find.matchesSelector(o, r))
                ) {
                  l.push(o);
                  break;
                }
          }
          return this.pushStack(l.length > 1 ? u.uniqueSort(l) : l);
        },
        index: function (r) {
          return r
            ? typeof r == "string"
              ? x.call(u(r), this[0])
              : x.call(this, r.jquery ? r[0] : r)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (r, n) {
          return this.pushStack(u.uniqueSort(u.merge(this.get(), u(r, n))));
        },
        addBack: function (r) {
          return this.add(
            r == null ? this.prevObject : this.prevObject.filter(r)
          );
        },
      });
      function Ro(r, n) {
        for (; (r = r[n]) && r.nodeType !== 1; );
        return r;
      }
      u.each(
        {
          parent: function (r) {
            var n = r.parentNode;
            return n && n.nodeType !== 11 ? n : null;
          },
          parents: function (r) {
            return Vt(r, "parentNode");
          },
          parentsUntil: function (r, n, o) {
            return Vt(r, "parentNode", o);
          },
          next: function (r) {
            return Ro(r, "nextSibling");
          },
          prev: function (r) {
            return Ro(r, "previousSibling");
          },
          nextAll: function (r) {
            return Vt(r, "nextSibling");
          },
          prevAll: function (r) {
            return Vt(r, "previousSibling");
          },
          nextUntil: function (r, n, o) {
            return Vt(r, "nextSibling", o);
          },
          prevUntil: function (r, n, o) {
            return Vt(r, "previousSibling", o);
          },
          siblings: function (r) {
            return To((r.parentNode || {}).firstChild, r);
          },
          children: function (r) {
            return To(r.firstChild);
          },
          contents: function (r) {
            return r.contentDocument != null && a(r.contentDocument)
              ? r.contentDocument
              : (Z(r, "template") && (r = r.content || r),
                u.merge([], r.childNodes));
          },
        },
        function (r, n) {
          u.fn[r] = function (o, s) {
            var c = u.map(this, n, o);
            return (
              r.slice(-5) !== "Until" && (s = o),
              s && typeof s == "string" && (c = u.filter(s, c)),
              this.length > 1 &&
                (fu[r] || u.uniqueSort(c), uu.test(r) && c.reverse()),
              this.pushStack(c)
            );
          };
        }
      );
      var We = /[^\x20\t\r\n\f]+/g;
      function cu(r) {
        var n = {};
        return (
          u.each(r.match(We) || [], function (o, s) {
            n[s] = !0;
          }),
          n
        );
      }
      u.Callbacks = function (r) {
        r = typeof r == "string" ? cu(r) : u.extend({}, r);
        var n,
          o,
          s,
          c,
          l = [],
          p = [],
          y = -1,
          g = function () {
            for (c = c || r.once, s = n = !0; p.length; y = -1)
              for (o = p.shift(); ++y < l.length; )
                l[y].apply(o[0], o[1]) === !1 &&
                  r.stopOnFalse &&
                  ((y = l.length), (o = !1));
            r.memory || (o = !1), (n = !1), c && (o ? (l = []) : (l = ""));
          },
          b = {
            add: function () {
              return (
                l &&
                  (o && !n && ((y = l.length - 1), p.push(o)),
                  (function k(R) {
                    u.each(R, function (S, A) {
                      M(A)
                        ? (!r.unique || !b.has(A)) && l.push(A)
                        : A && A.length && Ge(A) !== "string" && k(A);
                    });
                  })(arguments),
                  o && !n && g()),
                this
              );
            },
            remove: function () {
              return (
                u.each(arguments, function (k, R) {
                  for (var S; (S = u.inArray(R, l, S)) > -1; )
                    l.splice(S, 1), S <= y && y--;
                }),
                this
              );
            },
            has: function (k) {
              return k ? u.inArray(k, l) > -1 : l.length > 0;
            },
            empty: function () {
              return l && (l = []), this;
            },
            disable: function () {
              return (c = p = []), (l = o = ""), this;
            },
            disabled: function () {
              return !l;
            },
            lock: function () {
              return (c = p = []), !o && !n && (l = o = ""), this;
            },
            locked: function () {
              return !!c;
            },
            fireWith: function (k, R) {
              return (
                c ||
                  ((R = R || []),
                  (R = [k, R.slice ? R.slice() : R]),
                  p.push(R),
                  n || g()),
                this
              );
            },
            fire: function () {
              return b.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!s;
            },
          };
        return b;
      };
      function Jt(r) {
        return r;
      }
      function Jr(r) {
        throw r;
      }
      function Co(r, n, o, s) {
        var c;
        try {
          r && M((c = r.promise))
            ? c.call(r).done(n).fail(o)
            : r && M((c = r.then))
            ? c.call(r, n, o)
            : n.apply(void 0, [r].slice(s));
        } catch (l) {
          o.apply(void 0, [l]);
        }
      }
      u.extend({
        Deferred: function (r) {
          var n = [
              [
                "notify",
                "progress",
                u.Callbacks("memory"),
                u.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                u.Callbacks("once memory"),
                u.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                u.Callbacks("once memory"),
                u.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            o = "pending",
            s = {
              state: function () {
                return o;
              },
              always: function () {
                return c.done(arguments).fail(arguments), this;
              },
              catch: function (l) {
                return s.then(null, l);
              },
              pipe: function () {
                var l = arguments;
                return u
                  .Deferred(function (p) {
                    u.each(n, function (y, g) {
                      var b = M(l[g[4]]) && l[g[4]];
                      c[g[1]](function () {
                        var k = b && b.apply(this, arguments);
                        k && M(k.promise)
                          ? k
                              .promise()
                              .progress(p.notify)
                              .done(p.resolve)
                              .fail(p.reject)
                          : p[g[0] + "With"](this, b ? [k] : arguments);
                      });
                    }),
                      (l = null);
                  })
                  .promise();
              },
              then: function (l, p, y) {
                var g = 0;
                function b(k, R, S, A) {
                  return function () {
                    var G = this,
                      ee = arguments,
                      V = function () {
                        var pe, ze;
                        if (!(k < g)) {
                          if (((pe = S.apply(G, ee)), pe === R.promise()))
                            throw new TypeError("Thenable self-resolution");
                          (ze =
                            pe &&
                            (typeof pe == "object" ||
                              typeof pe == "function") &&
                            pe.then),
                            M(ze)
                              ? A
                                ? ze.call(pe, b(g, R, Jt, A), b(g, R, Jr, A))
                                : (g++,
                                  ze.call(
                                    pe,
                                    b(g, R, Jt, A),
                                    b(g, R, Jr, A),
                                    b(g, R, Jt, R.notifyWith)
                                  ))
                              : (S !== Jt && ((G = void 0), (ee = [pe])),
                                (A || R.resolveWith)(G, ee));
                        }
                      },
                      ge = A
                        ? V
                        : function () {
                            try {
                              V();
                            } catch (pe) {
                              u.Deferred.exceptionHook &&
                                u.Deferred.exceptionHook(pe, ge.error),
                                k + 1 >= g &&
                                  (S !== Jr && ((G = void 0), (ee = [pe])),
                                  R.rejectWith(G, ee));
                            }
                          };
                    k
                      ? ge()
                      : (u.Deferred.getErrorHook
                          ? (ge.error = u.Deferred.getErrorHook())
                          : u.Deferred.getStackHook &&
                            (ge.error = u.Deferred.getStackHook()),
                        e.setTimeout(ge));
                  };
                }
                return u
                  .Deferred(function (k) {
                    n[0][3].add(b(0, k, M(y) ? y : Jt, k.notifyWith)),
                      n[1][3].add(b(0, k, M(l) ? l : Jt)),
                      n[2][3].add(b(0, k, M(p) ? p : Jr));
                  })
                  .promise();
              },
              promise: function (l) {
                return l != null ? u.extend(l, s) : s;
              },
            },
            c = {};
          return (
            u.each(n, function (l, p) {
              var y = p[2],
                g = p[5];
              (s[p[1]] = y.add),
                g &&
                  y.add(
                    function () {
                      o = g;
                    },
                    n[3 - l][2].disable,
                    n[3 - l][3].disable,
                    n[0][2].lock,
                    n[0][3].lock
                  ),
                y.add(p[3].fire),
                (c[p[0]] = function () {
                  return (
                    c[p[0] + "With"](this === c ? void 0 : this, arguments),
                    this
                  );
                }),
                (c[p[0] + "With"] = y.fireWith);
            }),
            s.promise(c),
            r && r.call(c, c),
            c
          );
        },
        when: function (r) {
          var n = arguments.length,
            o = n,
            s = Array(o),
            c = f.call(arguments),
            l = u.Deferred(),
            p = function (y) {
              return function (g) {
                (s[y] = this),
                  (c[y] = arguments.length > 1 ? f.call(arguments) : g),
                  --n || l.resolveWith(s, c);
              };
            };
          if (
            n <= 1 &&
            (Co(r, l.done(p(o)).resolve, l.reject, !n),
            l.state() === "pending" || M(c[o] && c[o].then))
          )
            return l.then();
          for (; o--; ) Co(c[o], p(o), l.reject);
          return l.promise();
        },
      });
      var lu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (u.Deferred.exceptionHook = function (r, n) {
        e.console &&
          e.console.warn &&
          r &&
          lu.test(r.name) &&
          e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, n);
      }),
        (u.readyException = function (r) {
          e.setTimeout(function () {
            throw r;
          });
        });
      var Kn = u.Deferred();
      (u.fn.ready = function (r) {
        return (
          Kn.then(r).catch(function (n) {
            u.readyException(n);
          }),
          this
        );
      }),
        u.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (r) {
            (r === !0 ? --u.readyWait : u.isReady) ||
              ((u.isReady = !0),
              !(r !== !0 && --u.readyWait > 0) && Kn.resolveWith(H, [u]));
          },
        }),
        (u.ready.then = Kn.then);
      function Kr() {
        H.removeEventListener("DOMContentLoaded", Kr),
          e.removeEventListener("load", Kr),
          u.ready();
      }
      H.readyState === "complete" ||
      (H.readyState !== "loading" && !H.documentElement.doScroll)
        ? e.setTimeout(u.ready)
        : (H.addEventListener("DOMContentLoaded", Kr),
          e.addEventListener("load", Kr));
      var nt = function (r, n, o, s, c, l, p) {
          var y = 0,
            g = r.length,
            b = o == null;
          if (Ge(o) === "object") {
            c = !0;
            for (y in o) nt(r, n, y, o[y], !0, l, p);
          } else if (
            s !== void 0 &&
            ((c = !0),
            M(s) || (p = !0),
            b &&
              (p
                ? (n.call(r, s), (n = null))
                : ((b = n),
                  (n = function (k, R, S) {
                    return b.call(u(k), S);
                  }))),
            n)
          )
            for (; y < g; y++) n(r[y], o, p ? s : s.call(r[y], y, n(r[y], o)));
          return c ? r : b ? n.call(r) : g ? n(r[0], o) : l;
        },
        du = /^-ms-/,
        pu = /-([a-z])/g;
      function hu(r, n) {
        return n.toUpperCase();
      }
      function Ye(r) {
        return r.replace(du, "ms-").replace(pu, hu);
      }
      var gr = function (r) {
        return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType;
      };
      function yr() {
        this.expando = u.expando + yr.uid++;
      }
      (yr.uid = 1),
        (yr.prototype = {
          cache: function (r) {
            var n = r[this.expando];
            return (
              n ||
                ((n = {}),
                gr(r) &&
                  (r.nodeType
                    ? (r[this.expando] = n)
                    : Object.defineProperty(r, this.expando, {
                        value: n,
                        configurable: !0,
                      }))),
              n
            );
          },
          set: function (r, n, o) {
            var s,
              c = this.cache(r);
            if (typeof n == "string") c[Ye(n)] = o;
            else for (s in n) c[Ye(s)] = n[s];
            return c;
          },
          get: function (r, n) {
            return n === void 0
              ? this.cache(r)
              : r[this.expando] && r[this.expando][Ye(n)];
          },
          access: function (r, n, o) {
            return n === void 0 || (n && typeof n == "string" && o === void 0)
              ? this.get(r, n)
              : (this.set(r, n, o), o !== void 0 ? o : n);
          },
          remove: function (r, n) {
            var o,
              s = r[this.expando];
            if (s !== void 0) {
              if (n !== void 0)
                for (
                  Array.isArray(n)
                    ? (n = n.map(Ye))
                    : ((n = Ye(n)), (n = (n in s) ? [n] : n.match(We) || [])),
                    o = n.length;
                  o--;

                )
                  delete s[n[o]];
              (n === void 0 || u.isEmptyObject(s)) &&
                (r.nodeType
                  ? (r[this.expando] = void 0)
                  : delete r[this.expando]);
            }
          },
          hasData: function (r) {
            var n = r[this.expando];
            return n !== void 0 && !u.isEmptyObject(n);
          },
        });
      var F = new yr(),
        Se = new yr(),
        mu = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        gu = /[A-Z]/g;
      function yu(r) {
        return r === "true"
          ? !0
          : r === "false"
          ? !1
          : r === "null"
          ? null
          : r === +r + ""
          ? +r
          : mu.test(r)
          ? JSON.parse(r)
          : r;
      }
      function Do(r, n, o) {
        var s;
        if (o === void 0 && r.nodeType === 1)
          if (
            ((s = "data-" + n.replace(gu, "-$&").toLowerCase()),
            (o = r.getAttribute(s)),
            typeof o == "string")
          ) {
            try {
              o = yu(o);
            } catch (c) {}
            Se.set(r, n, o);
          } else o = void 0;
        return o;
      }
      u.extend({
        hasData: function (r) {
          return Se.hasData(r) || F.hasData(r);
        },
        data: function (r, n, o) {
          return Se.access(r, n, o);
        },
        removeData: function (r, n) {
          Se.remove(r, n);
        },
        _data: function (r, n, o) {
          return F.access(r, n, o);
        },
        _removeData: function (r, n) {
          F.remove(r, n);
        },
      }),
        u.fn.extend({
          data: function (r, n) {
            var o,
              s,
              c,
              l = this[0],
              p = l && l.attributes;
            if (r === void 0) {
              if (
                this.length &&
                ((c = Se.get(l)), l.nodeType === 1 && !F.get(l, "hasDataAttrs"))
              ) {
                for (o = p.length; o--; )
                  p[o] &&
                    ((s = p[o].name),
                    s.indexOf("data-") === 0 &&
                      ((s = Ye(s.slice(5))), Do(l, s, c[s])));
                F.set(l, "hasDataAttrs", !0);
              }
              return c;
            }
            return typeof r == "object"
              ? this.each(function () {
                  Se.set(this, r);
                })
              : nt(
                  this,
                  function (y) {
                    var g;
                    if (l && y === void 0)
                      return (
                        (g = Se.get(l, r)),
                        g !== void 0 || ((g = Do(l, r)), g !== void 0)
                          ? g
                          : void 0
                      );
                    this.each(function () {
                      Se.set(this, r, y);
                    });
                  },
                  null,
                  n,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (r) {
            return this.each(function () {
              Se.remove(this, r);
            });
          },
        }),
        u.extend({
          queue: function (r, n, o) {
            var s;
            if (r)
              return (
                (n = (n || "fx") + "queue"),
                (s = F.get(r, n)),
                o &&
                  (!s || Array.isArray(o)
                    ? (s = F.access(r, n, u.makeArray(o)))
                    : s.push(o)),
                s || []
              );
          },
          dequeue: function (r, n) {
            n = n || "fx";
            var o = u.queue(r, n),
              s = o.length,
              c = o.shift(),
              l = u._queueHooks(r, n),
              p = function () {
                u.dequeue(r, n);
              };
            c === "inprogress" && ((c = o.shift()), s--),
              c &&
                (n === "fx" && o.unshift("inprogress"),
                delete l.stop,
                c.call(r, p, l)),
              !s && l && l.empty.fire();
          },
          _queueHooks: function (r, n) {
            var o = n + "queueHooks";
            return (
              F.get(r, o) ||
              F.access(r, o, {
                empty: u.Callbacks("once memory").add(function () {
                  F.remove(r, [n + "queue", o]);
                }),
              })
            );
          },
        }),
        u.fn.extend({
          queue: function (r, n) {
            var o = 2;
            return (
              typeof r != "string" && ((n = r), (r = "fx"), o--),
              arguments.length < o
                ? u.queue(this[0], r)
                : n === void 0
                ? this
                : this.each(function () {
                    var s = u.queue(this, r, n);
                    u._queueHooks(this, r),
                      r === "fx" && s[0] !== "inprogress" && u.dequeue(this, r);
                  })
            );
          },
          dequeue: function (r) {
            return this.each(function () {
              u.dequeue(this, r);
            });
          },
          clearQueue: function (r) {
            return this.queue(r || "fx", []);
          },
          promise: function (r, n) {
            var o,
              s = 1,
              c = u.Deferred(),
              l = this,
              p = this.length,
              y = function () {
                --s || c.resolveWith(l, [l]);
              };
            for (
              typeof r != "string" && ((n = r), (r = void 0)), r = r || "fx";
              p--;

            )
              (o = F.get(l[p], r + "queueHooks")),
                o && o.empty && (s++, o.empty.add(y));
            return y(), c.promise(n);
          },
        });
      var Oo = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _r = new RegExp("^(?:([+-])=|)(" + Oo + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        Rt = H.documentElement,
        Kt = function (r) {
          return u.contains(r.ownerDocument, r);
        },
        _u = { composed: !0 };
      Rt.getRootNode &&
        (Kt = function (r) {
          return (
            u.contains(r.ownerDocument, r) ||
            r.getRootNode(_u) === r.ownerDocument
          );
        });
      var Xr = function (r, n) {
        return (
          (r = n || r),
          r.style.display === "none" ||
            (r.style.display === "" && Kt(r) && u.css(r, "display") === "none")
        );
      };
      function Ao(r, n, o, s) {
        var c,
          l,
          p = 20,
          y = s
            ? function () {
                return s.cur();
              }
            : function () {
                return u.css(r, n, "");
              },
          g = y(),
          b = (o && o[3]) || (u.cssNumber[n] ? "" : "px"),
          k =
            r.nodeType &&
            (u.cssNumber[n] || (b !== "px" && +g)) &&
            _r.exec(u.css(r, n));
        if (k && k[3] !== b) {
          for (g = g / 2, b = b || k[3], k = +g || 1; p--; )
            u.style(r, n, k + b),
              (1 - l) * (1 - (l = y() / g || 0.5)) <= 0 && (p = 0),
              (k = k / l);
          (k = k * 2), u.style(r, n, k + b), (o = o || []);
        }
        return (
          o &&
            ((k = +k || +g || 0),
            (c = o[1] ? k + (o[1] + 1) * o[2] : +o[2]),
            s && ((s.unit = b), (s.start = k), (s.end = c))),
          c
        );
      }
      var Io = {};
      function xu(r) {
        var n,
          o = r.ownerDocument,
          s = r.nodeName,
          c = Io[s];
        return (
          c ||
          ((n = o.body.appendChild(o.createElement(s))),
          (c = u.css(n, "display")),
          n.parentNode.removeChild(n),
          c === "none" && (c = "block"),
          (Io[s] = c),
          c)
        );
      }
      function Xt(r, n) {
        for (var o, s, c = [], l = 0, p = r.length; l < p; l++)
          (s = r[l]),
            s.style &&
              ((o = s.style.display),
              n
                ? (o === "none" &&
                    ((c[l] = F.get(s, "display") || null),
                    c[l] || (s.style.display = "")),
                  s.style.display === "" && Xr(s) && (c[l] = xu(s)))
                : o !== "none" && ((c[l] = "none"), F.set(s, "display", o)));
        for (l = 0; l < p; l++) c[l] != null && (r[l].style.display = c[l]);
        return r;
      }
      u.fn.extend({
        show: function () {
          return Xt(this, !0);
        },
        hide: function () {
          return Xt(this);
        },
        toggle: function (r) {
          return typeof r == "boolean"
            ? r
              ? this.show()
              : this.hide()
            : this.each(function () {
                Xr(this) ? u(this).show() : u(this).hide();
              });
        },
      });
      var xr = /^(?:checkbox|radio)$/i,
        Po = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Lo = /^$|^module$|\/(?:java|ecma)script/i;
      (function () {
        var r = H.createDocumentFragment(),
          n = r.appendChild(H.createElement("div")),
          o = H.createElement("input");
        o.setAttribute("type", "radio"),
          o.setAttribute("checked", "checked"),
          o.setAttribute("name", "t"),
          n.appendChild(o),
          (I.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (n.innerHTML = "<textarea>x</textarea>"),
          (I.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue),
          (n.innerHTML = "<option></option>"),
          (I.option = !!n.lastChild);
      })();
      var Oe = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      (Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead),
        (Oe.th = Oe.td),
        I.option ||
          (Oe.optgroup = Oe.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      function Te(r, n) {
        var o;
        return (
          typeof r.getElementsByTagName != "undefined"
            ? (o = r.getElementsByTagName(n || "*"))
            : typeof r.querySelectorAll != "undefined"
            ? (o = r.querySelectorAll(n || "*"))
            : (o = []),
          n === void 0 || (n && Z(r, n)) ? u.merge([r], o) : o
        );
      }
      function Xn(r, n) {
        for (var o = 0, s = r.length; o < s; o++)
          F.set(r[o], "globalEval", !n || F.get(n[o], "globalEval"));
      }
      var vu = /<|&#?\w+;/;
      function jo(r, n, o, s, c) {
        for (
          var l,
            p,
            y,
            g,
            b,
            k,
            R = n.createDocumentFragment(),
            S = [],
            A = 0,
            G = r.length;
          A < G;
          A++
        )
          if (((l = r[A]), l || l === 0))
            if (Ge(l) === "object") u.merge(S, l.nodeType ? [l] : l);
            else if (!vu.test(l)) S.push(n.createTextNode(l));
            else {
              for (
                p = p || R.appendChild(n.createElement("div")),
                  y = (Po.exec(l) || ["", ""])[1].toLowerCase(),
                  g = Oe[y] || Oe._default,
                  p.innerHTML = g[1] + u.htmlPrefilter(l) + g[2],
                  k = g[0];
                k--;

              )
                p = p.lastChild;
              u.merge(S, p.childNodes),
                (p = R.firstChild),
                (p.textContent = "");
            }
        for (R.textContent = "", A = 0; (l = S[A++]); ) {
          if (s && u.inArray(l, s) > -1) {
            c && c.push(l);
            continue;
          }
          if (
            ((b = Kt(l)), (p = Te(R.appendChild(l), "script")), b && Xn(p), o)
          )
            for (k = 0; (l = p[k++]); ) Lo.test(l.type || "") && o.push(l);
        }
        return R;
      }
      var Mo = /^([^.]*)(?:\.(.+)|)/;
      function Qt() {
        return !0;
      }
      function Zt() {
        return !1;
      }
      function Qn(r, n, o, s, c, l) {
        var p, y;
        if (typeof n == "object") {
          typeof o != "string" && ((s = s || o), (o = void 0));
          for (y in n) Qn(r, y, o, s, n[y], l);
          return r;
        }
        if (
          (s == null && c == null
            ? ((c = o), (s = o = void 0))
            : c == null &&
              (typeof o == "string"
                ? ((c = s), (s = void 0))
                : ((c = s), (s = o), (o = void 0))),
          c === !1)
        )
          c = Zt;
        else if (!c) return r;
        return (
          l === 1 &&
            ((p = c),
            (c = function (g) {
              return u().off(g), p.apply(this, arguments);
            }),
            (c.guid = p.guid || (p.guid = u.guid++))),
          r.each(function () {
            u.event.add(this, n, c, s, o);
          })
        );
      }
      u.event = {
        global: {},
        add: function (r, n, o, s, c) {
          var l,
            p,
            y,
            g,
            b,
            k,
            R,
            S,
            A,
            G,
            ee,
            V = F.get(r);
          if (gr(r))
            for (
              o.handler && ((l = o), (o = l.handler), (c = l.selector)),
                c && u.find.matchesSelector(Rt, c),
                o.guid || (o.guid = u.guid++),
                (g = V.events) || (g = V.events = Object.create(null)),
                (p = V.handle) ||
                  (p = V.handle =
                    function (ge) {
                      return typeof u != "undefined" &&
                        u.event.triggered !== ge.type
                        ? u.event.dispatch.apply(r, arguments)
                        : void 0;
                    }),
                n = (n || "").match(We) || [""],
                b = n.length;
              b--;

            )
              (y = Mo.exec(n[b]) || []),
                (A = ee = y[1]),
                (G = (y[2] || "").split(".").sort()),
                A &&
                  ((R = u.event.special[A] || {}),
                  (A = (c ? R.delegateType : R.bindType) || A),
                  (R = u.event.special[A] || {}),
                  (k = u.extend(
                    {
                      type: A,
                      origType: ee,
                      data: s,
                      handler: o,
                      guid: o.guid,
                      selector: c,
                      needsContext: c && u.expr.match.needsContext.test(c),
                      namespace: G.join("."),
                    },
                    l
                  )),
                  (S = g[A]) ||
                    ((S = g[A] = []),
                    (S.delegateCount = 0),
                    (!R.setup || R.setup.call(r, s, G, p) === !1) &&
                      r.addEventListener &&
                      r.addEventListener(A, p)),
                  R.add &&
                    (R.add.call(r, k),
                    k.handler.guid || (k.handler.guid = o.guid)),
                  c ? S.splice(S.delegateCount++, 0, k) : S.push(k),
                  (u.event.global[A] = !0));
        },
        remove: function (r, n, o, s, c) {
          var l,
            p,
            y,
            g,
            b,
            k,
            R,
            S,
            A,
            G,
            ee,
            V = F.hasData(r) && F.get(r);
          if (!(!V || !(g = V.events))) {
            for (n = (n || "").match(We) || [""], b = n.length; b--; ) {
              if (
                ((y = Mo.exec(n[b]) || []),
                (A = ee = y[1]),
                (G = (y[2] || "").split(".").sort()),
                !A)
              ) {
                for (A in g) u.event.remove(r, A + n[b], o, s, !0);
                continue;
              }
              for (
                R = u.event.special[A] || {},
                  A = (s ? R.delegateType : R.bindType) || A,
                  S = g[A] || [],
                  y =
                    y[2] &&
                    new RegExp("(^|\\.)" + G.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  p = l = S.length;
                l--;

              )
                (k = S[l]),
                  (c || ee === k.origType) &&
                    (!o || o.guid === k.guid) &&
                    (!y || y.test(k.namespace)) &&
                    (!s || s === k.selector || (s === "**" && k.selector)) &&
                    (S.splice(l, 1),
                    k.selector && S.delegateCount--,
                    R.remove && R.remove.call(r, k));
              p &&
                !S.length &&
                ((!R.teardown || R.teardown.call(r, G, V.handle) === !1) &&
                  u.removeEvent(r, A, V.handle),
                delete g[A]);
            }
            u.isEmptyObject(g) && F.remove(r, "handle events");
          }
        },
        dispatch: function (r) {
          var n,
            o,
            s,
            c,
            l,
            p,
            y = new Array(arguments.length),
            g = u.event.fix(r),
            b = (F.get(this, "events") || Object.create(null))[g.type] || [],
            k = u.event.special[g.type] || {};
          for (y[0] = g, n = 1; n < arguments.length; n++) y[n] = arguments[n];
          if (
            ((g.delegateTarget = this),
            !(k.preDispatch && k.preDispatch.call(this, g) === !1))
          ) {
            for (
              p = u.event.handlers.call(this, g, b), n = 0;
              (c = p[n++]) && !g.isPropagationStopped();

            )
              for (
                g.currentTarget = c.elem, o = 0;
                (l = c.handlers[o++]) && !g.isImmediatePropagationStopped();

              )
                (!g.rnamespace ||
                  l.namespace === !1 ||
                  g.rnamespace.test(l.namespace)) &&
                  ((g.handleObj = l),
                  (g.data = l.data),
                  (s = (
                    (u.event.special[l.origType] || {}).handle || l.handler
                  ).apply(c.elem, y)),
                  s !== void 0 &&
                    (g.result = s) === !1 &&
                    (g.preventDefault(), g.stopPropagation()));
            return k.postDispatch && k.postDispatch.call(this, g), g.result;
          }
        },
        handlers: function (r, n) {
          var o,
            s,
            c,
            l,
            p,
            y = [],
            g = n.delegateCount,
            b = r.target;
          if (g && b.nodeType && !(r.type === "click" && r.button >= 1)) {
            for (; b !== this; b = b.parentNode || this)
              if (
                b.nodeType === 1 &&
                !(r.type === "click" && b.disabled === !0)
              ) {
                for (l = [], p = {}, o = 0; o < g; o++)
                  (s = n[o]),
                    (c = s.selector + " "),
                    p[c] === void 0 &&
                      (p[c] = s.needsContext
                        ? u(c, this).index(b) > -1
                        : u.find(c, this, null, [b]).length),
                    p[c] && l.push(s);
                l.length && y.push({ elem: b, handlers: l });
              }
          }
          return (
            (b = this),
            g < n.length && y.push({ elem: b, handlers: n.slice(g) }),
            y
          );
        },
        addProp: function (r, n) {
          Object.defineProperty(u.Event.prototype, r, {
            enumerable: !0,
            configurable: !0,
            get: M(n)
              ? function () {
                  if (this.originalEvent) return n(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[r];
                },
            set: function (o) {
              Object.defineProperty(this, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              });
            },
          });
        },
        fix: function (r) {
          return r[u.expando] ? r : new u.Event(r);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (r) {
              var n = this || r;
              return (
                xr.test(n.type) &&
                  n.click &&
                  Z(n, "input") &&
                  Qr(n, "click", !0),
                !1
              );
            },
            trigger: function (r) {
              var n = this || r;
              return (
                xr.test(n.type) && n.click && Z(n, "input") && Qr(n, "click"),
                !0
              );
            },
            _default: function (r) {
              var n = r.target;
              return (
                (xr.test(n.type) &&
                  n.click &&
                  Z(n, "input") &&
                  F.get(n, "click")) ||
                Z(n, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (r) {
              r.result !== void 0 &&
                r.originalEvent &&
                (r.originalEvent.returnValue = r.result);
            },
          },
        },
      };
      function Qr(r, n, o) {
        if (!o) {
          F.get(r, n) === void 0 && u.event.add(r, n, Qt);
          return;
        }
        F.set(r, n, !1),
          u.event.add(r, n, {
            namespace: !1,
            handler: function (s) {
              var c,
                l = F.get(this, n);
              if (s.isTrigger & 1 && this[n]) {
                if (l)
                  (u.event.special[n] || {}).delegateType &&
                    s.stopPropagation();
                else if (
                  ((l = f.call(arguments)),
                  F.set(this, n, l),
                  this[n](),
                  (c = F.get(this, n)),
                  F.set(this, n, !1),
                  l !== c)
                )
                  return s.stopImmediatePropagation(), s.preventDefault(), c;
              } else
                l &&
                  (F.set(this, n, u.event.trigger(l[0], l.slice(1), this)),
                  s.stopPropagation(),
                  (s.isImmediatePropagationStopped = Qt));
            },
          });
      }
      (u.removeEvent = function (r, n, o) {
        r.removeEventListener && r.removeEventListener(n, o);
      }),
        (u.Event = function (r, n) {
          if (!(this instanceof u.Event)) return new u.Event(r, n);
          r && r.type
            ? ((this.originalEvent = r),
              (this.type = r.type),
              (this.isDefaultPrevented =
                r.defaultPrevented ||
                (r.defaultPrevented === void 0 && r.returnValue === !1)
                  ? Qt
                  : Zt),
              (this.target =
                r.target && r.target.nodeType === 3
                  ? r.target.parentNode
                  : r.target),
              (this.currentTarget = r.currentTarget),
              (this.relatedTarget = r.relatedTarget))
            : (this.type = r),
            n && u.extend(this, n),
            (this.timeStamp = (r && r.timeStamp) || Date.now()),
            (this[u.expando] = !0);
        }),
        (u.Event.prototype = {
          constructor: u.Event,
          isDefaultPrevented: Zt,
          isPropagationStopped: Zt,
          isImmediatePropagationStopped: Zt,
          isSimulated: !1,
          preventDefault: function () {
            var r = this.originalEvent;
            (this.isDefaultPrevented = Qt),
              r && !this.isSimulated && r.preventDefault();
          },
          stopPropagation: function () {
            var r = this.originalEvent;
            (this.isPropagationStopped = Qt),
              r && !this.isSimulated && r.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var r = this.originalEvent;
            (this.isImmediatePropagationStopped = Qt),
              r && !this.isSimulated && r.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        u.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          u.event.addProp
        ),
        u.each({ focus: "focusin", blur: "focusout" }, function (r, n) {
          function o(s) {
            if (H.documentMode) {
              var c = F.get(this, "handle"),
                l = u.event.fix(s);
              (l.type = s.type === "focusin" ? "focus" : "blur"),
                (l.isSimulated = !0),
                c(s),
                l.target === l.currentTarget && c(l);
            } else u.event.simulate(n, s.target, u.event.fix(s));
          }
          (u.event.special[r] = {
            setup: function () {
              var s;
              if ((Qr(this, r, !0), H.documentMode))
                (s = F.get(this, n)),
                  s || this.addEventListener(n, o),
                  F.set(this, n, (s || 0) + 1);
              else return !1;
            },
            trigger: function () {
              return Qr(this, r), !0;
            },
            teardown: function () {
              var s;
              if (H.documentMode)
                (s = F.get(this, n) - 1),
                  s
                    ? F.set(this, n, s)
                    : (this.removeEventListener(n, o), F.remove(this, n));
              else return !1;
            },
            _default: function (s) {
              return F.get(s.target, r);
            },
            delegateType: n,
          }),
            (u.event.special[n] = {
              setup: function () {
                var s = this.ownerDocument || this.document || this,
                  c = H.documentMode ? this : s,
                  l = F.get(c, n);
                l ||
                  (H.documentMode
                    ? this.addEventListener(n, o)
                    : s.addEventListener(r, o, !0)),
                  F.set(c, n, (l || 0) + 1);
              },
              teardown: function () {
                var s = this.ownerDocument || this.document || this,
                  c = H.documentMode ? this : s,
                  l = F.get(c, n) - 1;
                l
                  ? F.set(c, n, l)
                  : (H.documentMode
                      ? this.removeEventListener(n, o)
                      : s.removeEventListener(r, o, !0),
                    F.remove(c, n));
              },
            });
        }),
        u.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (r, n) {
            u.event.special[r] = {
              delegateType: n,
              bindType: n,
              handle: function (o) {
                var s,
                  c = this,
                  l = o.relatedTarget,
                  p = o.handleObj;
                return (
                  (!l || (l !== c && !u.contains(c, l))) &&
                    ((o.type = p.origType),
                    (s = p.handler.apply(this, arguments)),
                    (o.type = n)),
                  s
                );
              },
            };
          }
        ),
        u.fn.extend({
          on: function (r, n, o, s) {
            return Qn(this, r, n, o, s);
          },
          one: function (r, n, o, s) {
            return Qn(this, r, n, o, s, 1);
          },
          off: function (r, n, o) {
            var s, c;
            if (r && r.preventDefault && r.handleObj)
              return (
                (s = r.handleObj),
                u(r.delegateTarget).off(
                  s.namespace ? s.origType + "." + s.namespace : s.origType,
                  s.selector,
                  s.handler
                ),
                this
              );
            if (typeof r == "object") {
              for (c in r) this.off(c, n, r[c]);
              return this;
            }
            return (
              (n === !1 || typeof n == "function") && ((o = n), (n = void 0)),
              o === !1 && (o = Zt),
              this.each(function () {
                u.event.remove(this, r, o, n);
              })
            );
          },
        });
      var bu = /<script|<style|<link/i,
        Eu = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Su = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Uo(r, n) {
        return (
          (Z(r, "table") &&
            Z(n.nodeType !== 11 ? n : n.firstChild, "tr") &&
            u(r).children("tbody")[0]) ||
          r
        );
      }
      function Tu(r) {
        return (r.type = (r.getAttribute("type") !== null) + "/" + r.type), r;
      }
      function wu(r) {
        return (
          (r.type || "").slice(0, 5) === "true/"
            ? (r.type = r.type.slice(5))
            : r.removeAttribute("type"),
          r
        );
      }
      function Bo(r, n) {
        var o, s, c, l, p, y, g;
        if (n.nodeType === 1) {
          if (F.hasData(r) && ((l = F.get(r)), (g = l.events), g)) {
            F.remove(n, "handle events");
            for (c in g)
              for (o = 0, s = g[c].length; o < s; o++)
                u.event.add(n, c, g[c][o]);
          }
          Se.hasData(r) &&
            ((p = Se.access(r)), (y = u.extend({}, p)), Se.set(n, y));
        }
      }
      function ku(r, n) {
        var o = n.nodeName.toLowerCase();
        o === "input" && xr.test(r.type)
          ? (n.checked = r.checked)
          : (o === "input" || o === "textarea") &&
            (n.defaultValue = r.defaultValue);
      }
      function er(r, n, o, s) {
        n = d(n);
        var c,
          l,
          p,
          y,
          g,
          b,
          k = 0,
          R = r.length,
          S = R - 1,
          A = n[0],
          G = M(A);
        if (G || (R > 1 && typeof A == "string" && !I.checkClone && Eu.test(A)))
          return r.each(function (ee) {
            var V = r.eq(ee);
            G && (n[0] = A.call(this, ee, V.html())), er(V, n, o, s);
          });
        if (
          R &&
          ((c = jo(n, r[0].ownerDocument, !1, r, s)),
          (l = c.firstChild),
          c.childNodes.length === 1 && (c = l),
          l || s)
        ) {
          for (p = u.map(Te(c, "script"), Tu), y = p.length; k < R; k++)
            (g = c),
              k !== S &&
                ((g = u.clone(g, !0, !0)), y && u.merge(p, Te(g, "script"))),
              o.call(r[k], g, k);
          if (y)
            for (
              b = p[p.length - 1].ownerDocument, u.map(p, wu), k = 0;
              k < y;
              k++
            )
              (g = p[k]),
                Lo.test(g.type || "") &&
                  !F.access(g, "globalEval") &&
                  u.contains(b, g) &&
                  (g.src && (g.type || "").toLowerCase() !== "module"
                    ? u._evalUrl &&
                      !g.noModule &&
                      u._evalUrl(
                        g.src,
                        { nonce: g.nonce || g.getAttribute("nonce") },
                        b
                      )
                    : kt(g.textContent.replace(Su, ""), g, b));
        }
        return r;
      }
      function Fo(r, n, o) {
        for (var s, c = n ? u.filter(n, r) : r, l = 0; (s = c[l]) != null; l++)
          !o && s.nodeType === 1 && u.cleanData(Te(s)),
            s.parentNode &&
              (o && Kt(s) && Xn(Te(s, "script")), s.parentNode.removeChild(s));
        return r;
      }
      u.extend({
        htmlPrefilter: function (r) {
          return r;
        },
        clone: function (r, n, o) {
          var s,
            c,
            l,
            p,
            y = r.cloneNode(!0),
            g = Kt(r);
          if (
            !I.noCloneChecked &&
            (r.nodeType === 1 || r.nodeType === 11) &&
            !u.isXMLDoc(r)
          )
            for (p = Te(y), l = Te(r), s = 0, c = l.length; s < c; s++)
              ku(l[s], p[s]);
          if (n)
            if (o)
              for (
                l = l || Te(r), p = p || Te(y), s = 0, c = l.length;
                s < c;
                s++
              )
                Bo(l[s], p[s]);
            else Bo(r, y);
          return (
            (p = Te(y, "script")),
            p.length > 0 && Xn(p, !g && Te(r, "script")),
            y
          );
        },
        cleanData: function (r) {
          for (
            var n, o, s, c = u.event.special, l = 0;
            (o = r[l]) !== void 0;
            l++
          )
            if (gr(o)) {
              if ((n = o[F.expando])) {
                if (n.events)
                  for (s in n.events)
                    c[s] ? u.event.remove(o, s) : u.removeEvent(o, s, n.handle);
                o[F.expando] = void 0;
              }
              o[Se.expando] && (o[Se.expando] = void 0);
            }
        },
      }),
        u.fn.extend({
          detach: function (r) {
            return Fo(this, r, !0);
          },
          remove: function (r) {
            return Fo(this, r);
          },
          text: function (r) {
            return nt(
              this,
              function (n) {
                return n === void 0
                  ? u.text(this)
                  : this.empty().each(function () {
                      (this.nodeType === 1 ||
                        this.nodeType === 11 ||
                        this.nodeType === 9) &&
                        (this.textContent = n);
                    });
              },
              null,
              r,
              arguments.length
            );
          },
          append: function () {
            return er(this, arguments, function (r) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var n = Uo(this, r);
                n.appendChild(r);
              }
            });
          },
          prepend: function () {
            return er(this, arguments, function (r) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var n = Uo(this, r);
                n.insertBefore(r, n.firstChild);
              }
            });
          },
          before: function () {
            return er(this, arguments, function (r) {
              this.parentNode && this.parentNode.insertBefore(r, this);
            });
          },
          after: function () {
            return er(this, arguments, function (r) {
              this.parentNode &&
                this.parentNode.insertBefore(r, this.nextSibling);
            });
          },
          empty: function () {
            for (var r, n = 0; (r = this[n]) != null; n++)
              r.nodeType === 1 &&
                (u.cleanData(Te(r, !1)), (r.textContent = ""));
            return this;
          },
          clone: function (r, n) {
            return (
              (r = r == null ? !1 : r),
              (n = n == null ? r : n),
              this.map(function () {
                return u.clone(this, r, n);
              })
            );
          },
          html: function (r) {
            return nt(
              this,
              function (n) {
                var o = this[0] || {},
                  s = 0,
                  c = this.length;
                if (n === void 0 && o.nodeType === 1) return o.innerHTML;
                if (
                  typeof n == "string" &&
                  !bu.test(n) &&
                  !Oe[(Po.exec(n) || ["", ""])[1].toLowerCase()]
                ) {
                  n = u.htmlPrefilter(n);
                  try {
                    for (; s < c; s++)
                      (o = this[s] || {}),
                        o.nodeType === 1 &&
                          (u.cleanData(Te(o, !1)), (o.innerHTML = n));
                    o = 0;
                  } catch (l) {}
                }
                o && this.empty().append(n);
              },
              null,
              r,
              arguments.length
            );
          },
          replaceWith: function () {
            var r = [];
            return er(
              this,
              arguments,
              function (n) {
                var o = this.parentNode;
                u.inArray(this, r) < 0 &&
                  (u.cleanData(Te(this)), o && o.replaceChild(n, this));
              },
              r
            );
          },
        }),
        u.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (r, n) {
            u.fn[r] = function (o) {
              for (
                var s, c = [], l = u(o), p = l.length - 1, y = 0;
                y <= p;
                y++
              )
                (s = y === p ? this : this.clone(!0)),
                  u(l[y])[n](s),
                  m.apply(c, s.get());
              return this.pushStack(c);
            };
          }
        );
      var Zn = new RegExp("^(" + Oo + ")(?!px)[a-z%]+$", "i"),
        ei = /^--/,
        Zr = function (r) {
          var n = r.ownerDocument.defaultView;
          return (!n || !n.opener) && (n = e), n.getComputedStyle(r);
        },
        Ho = function (r, n, o) {
          var s,
            c,
            l = {};
          for (c in n) (l[c] = r.style[c]), (r.style[c] = n[c]);
          s = o.call(r);
          for (c in n) r.style[c] = l[c];
          return s;
        },
        Nu = new RegExp(it.join("|"), "i");
      (function () {
        function r() {
          if (b) {
            (g.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (b.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Rt.appendChild(g).appendChild(b);
            var k = e.getComputedStyle(b);
            (o = k.top !== "1%"),
              (y = n(k.marginLeft) === 12),
              (b.style.right = "60%"),
              (l = n(k.right) === 36),
              (s = n(k.width) === 36),
              (b.style.position = "absolute"),
              (c = n(b.offsetWidth / 3) === 12),
              Rt.removeChild(g),
              (b = null);
          }
        }
        function n(k) {
          return Math.round(parseFloat(k));
        }
        var o,
          s,
          c,
          l,
          p,
          y,
          g = H.createElement("div"),
          b = H.createElement("div");
        b.style &&
          ((b.style.backgroundClip = "content-box"),
          (b.cloneNode(!0).style.backgroundClip = ""),
          (I.clearCloneStyle = b.style.backgroundClip === "content-box"),
          u.extend(I, {
            boxSizingReliable: function () {
              return r(), s;
            },
            pixelBoxStyles: function () {
              return r(), l;
            },
            pixelPosition: function () {
              return r(), o;
            },
            reliableMarginLeft: function () {
              return r(), y;
            },
            scrollboxSize: function () {
              return r(), c;
            },
            reliableTrDimensions: function () {
              var k, R, S, A;
              return (
                p == null &&
                  ((k = H.createElement("table")),
                  (R = H.createElement("tr")),
                  (S = H.createElement("div")),
                  (k.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (R.style.cssText = "border:1px solid"),
                  (R.style.height = "1px"),
                  (S.style.height = "9px"),
                  (S.style.display = "block"),
                  Rt.appendChild(k).appendChild(R).appendChild(S),
                  (A = e.getComputedStyle(R)),
                  (p =
                    parseInt(A.height, 10) +
                      parseInt(A.borderTopWidth, 10) +
                      parseInt(A.borderBottomWidth, 10) ===
                    R.offsetHeight),
                  Rt.removeChild(k)),
                p
              );
            },
          }));
      })();
      function vr(r, n, o) {
        var s,
          c,
          l,
          p,
          y = ei.test(n),
          g = r.style;
        return (
          (o = o || Zr(r)),
          o &&
            ((p = o.getPropertyValue(n) || o[n]),
            y && p && (p = p.replace(mr, "$1") || void 0),
            p === "" && !Kt(r) && (p = u.style(r, n)),
            !I.pixelBoxStyles() &&
              Zn.test(p) &&
              Nu.test(n) &&
              ((s = g.width),
              (c = g.minWidth),
              (l = g.maxWidth),
              (g.minWidth = g.maxWidth = g.width = p),
              (p = o.width),
              (g.width = s),
              (g.minWidth = c),
              (g.maxWidth = l))),
          p !== void 0 ? p + "" : p
        );
      }
      function $o(r, n) {
        return {
          get: function () {
            if (r()) {
              delete this.get;
              return;
            }
            return (this.get = n).apply(this, arguments);
          },
        };
      }
      var qo = ["Webkit", "Moz", "ms"],
        Go = H.createElement("div").style,
        Wo = {};
      function Ru(r) {
        for (var n = r[0].toUpperCase() + r.slice(1), o = qo.length; o--; )
          if (((r = qo[o] + n), r in Go)) return r;
      }
      function ti(r) {
        var n = u.cssProps[r] || Wo[r];
        return n || (r in Go ? r : (Wo[r] = Ru(r) || r));
      }
      var Cu = /^(none|table(?!-c[ea]).+)/,
        Du = { position: "absolute", visibility: "hidden", display: "block" },
        Yo = { letterSpacing: "0", fontWeight: "400" };
      function zo(r, n, o) {
        var s = _r.exec(n);
        return s ? Math.max(0, s[2] - (o || 0)) + (s[3] || "px") : n;
      }
      function ri(r, n, o, s, c, l) {
        var p = n === "width" ? 1 : 0,
          y = 0,
          g = 0,
          b = 0;
        if (o === (s ? "border" : "content")) return 0;
        for (; p < 4; p += 2)
          o === "margin" && (b += u.css(r, o + it[p], !0, c)),
            s
              ? (o === "content" && (g -= u.css(r, "padding" + it[p], !0, c)),
                o !== "margin" &&
                  (g -= u.css(r, "border" + it[p] + "Width", !0, c)))
              : ((g += u.css(r, "padding" + it[p], !0, c)),
                o !== "padding"
                  ? (g += u.css(r, "border" + it[p] + "Width", !0, c))
                  : (y += u.css(r, "border" + it[p] + "Width", !0, c)));
        return (
          !s &&
            l >= 0 &&
            (g +=
              Math.max(
                0,
                Math.ceil(
                  r["offset" + n[0].toUpperCase() + n.slice(1)] -
                    l -
                    g -
                    y -
                    0.5
                )
              ) || 0),
          g + b
        );
      }
      function Vo(r, n, o) {
        var s = Zr(r),
          c = !I.boxSizingReliable() || o,
          l = c && u.css(r, "boxSizing", !1, s) === "border-box",
          p = l,
          y = vr(r, n, s),
          g = "offset" + n[0].toUpperCase() + n.slice(1);
        if (Zn.test(y)) {
          if (!o) return y;
          y = "auto";
        }
        return (
          ((!I.boxSizingReliable() && l) ||
            (!I.reliableTrDimensions() && Z(r, "tr")) ||
            y === "auto" ||
            (!parseFloat(y) && u.css(r, "display", !1, s) === "inline")) &&
            r.getClientRects().length &&
            ((l = u.css(r, "boxSizing", !1, s) === "border-box"),
            (p = g in r),
            p && (y = r[g])),
          (y = parseFloat(y) || 0),
          y + ri(r, n, o || (l ? "border" : "content"), p, s, y) + "px"
        );
      }
      u.extend({
        cssHooks: {
          opacity: {
            get: function (r, n) {
              if (n) {
                var o = vr(r, "opacity");
                return o === "" ? "1" : o;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
        },
        cssProps: {},
        style: function (r, n, o, s) {
          if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
            var c,
              l,
              p,
              y = Ye(n),
              g = ei.test(n),
              b = r.style;
            if (
              (g || (n = ti(y)),
              (p = u.cssHooks[n] || u.cssHooks[y]),
              o !== void 0)
            ) {
              if (
                ((l = typeof o),
                l === "string" &&
                  (c = _r.exec(o)) &&
                  c[1] &&
                  ((o = Ao(r, n, c)), (l = "number")),
                o == null || o !== o)
              )
                return;
              l === "number" &&
                !g &&
                (o += (c && c[3]) || (u.cssNumber[y] ? "" : "px")),
                !I.clearCloneStyle &&
                  o === "" &&
                  n.indexOf("background") === 0 &&
                  (b[n] = "inherit"),
                (!p || !("set" in p) || (o = p.set(r, o, s)) !== void 0) &&
                  (g ? b.setProperty(n, o) : (b[n] = o));
            } else
              return p && "get" in p && (c = p.get(r, !1, s)) !== void 0
                ? c
                : b[n];
          }
        },
        css: function (r, n, o, s) {
          var c,
            l,
            p,
            y = Ye(n),
            g = ei.test(n);
          return (
            g || (n = ti(y)),
            (p = u.cssHooks[n] || u.cssHooks[y]),
            p && "get" in p && (c = p.get(r, !0, o)),
            c === void 0 && (c = vr(r, n, s)),
            c === "normal" && n in Yo && (c = Yo[n]),
            o === "" || o
              ? ((l = parseFloat(c)), o === !0 || isFinite(l) ? l || 0 : c)
              : c
          );
        },
      }),
        u.each(["height", "width"], function (r, n) {
          u.cssHooks[n] = {
            get: function (o, s, c) {
              if (s)
                return Cu.test(u.css(o, "display")) &&
                  (!o.getClientRects().length ||
                    !o.getBoundingClientRect().width)
                  ? Ho(o, Du, function () {
                      return Vo(o, n, c);
                    })
                  : Vo(o, n, c);
            },
            set: function (o, s, c) {
              var l,
                p = Zr(o),
                y = !I.scrollboxSize() && p.position === "absolute",
                g = y || c,
                b = g && u.css(o, "boxSizing", !1, p) === "border-box",
                k = c ? ri(o, n, c, b, p) : 0;
              return (
                b &&
                  y &&
                  (k -= Math.ceil(
                    o["offset" + n[0].toUpperCase() + n.slice(1)] -
                      parseFloat(p[n]) -
                      ri(o, n, "border", !1, p) -
                      0.5
                  )),
                k &&
                  (l = _r.exec(s)) &&
                  (l[3] || "px") !== "px" &&
                  ((o.style[n] = s), (s = u.css(o, n))),
                zo(o, s, k)
              );
            },
          };
        }),
        (u.cssHooks.marginLeft = $o(I.reliableMarginLeft, function (r, n) {
          if (n)
            return (
              (parseFloat(vr(r, "marginLeft")) ||
                r.getBoundingClientRect().left -
                  Ho(r, { marginLeft: 0 }, function () {
                    return r.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        u.each({ margin: "", padding: "", border: "Width" }, function (r, n) {
          (u.cssHooks[r + n] = {
            expand: function (o) {
              for (
                var s = 0,
                  c = {},
                  l = typeof o == "string" ? o.split(" ") : [o];
                s < 4;
                s++
              )
                c[r + it[s] + n] = l[s] || l[s - 2] || l[0];
              return c;
            },
          }),
            r !== "margin" && (u.cssHooks[r + n].set = zo);
        }),
        u.fn.extend({
          css: function (r, n) {
            return nt(
              this,
              function (o, s, c) {
                var l,
                  p,
                  y = {},
                  g = 0;
                if (Array.isArray(s)) {
                  for (l = Zr(o), p = s.length; g < p; g++)
                    y[s[g]] = u.css(o, s[g], !1, l);
                  return y;
                }
                return c !== void 0 ? u.style(o, s, c) : u.css(o, s);
              },
              r,
              n,
              arguments.length > 1
            );
          },
        });
      function we(r, n, o, s, c) {
        return new we.prototype.init(r, n, o, s, c);
      }
      (u.Tween = we),
        (we.prototype = {
          constructor: we,
          init: function (r, n, o, s, c, l) {
            (this.elem = r),
              (this.prop = o),
              (this.easing = c || u.easing._default),
              (this.options = n),
              (this.start = this.now = this.cur()),
              (this.end = s),
              (this.unit = l || (u.cssNumber[o] ? "" : "px"));
          },
          cur: function () {
            var r = we.propHooks[this.prop];
            return r && r.get ? r.get(this) : we.propHooks._default.get(this);
          },
          run: function (r) {
            var n,
              o = we.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = n =
                    u.easing[this.easing](
                      r,
                      this.options.duration * r,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = n = r),
              (this.now = (this.end - this.start) * n + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              o && o.set ? o.set(this) : we.propHooks._default.set(this),
              this
            );
          },
        }),
        (we.prototype.init.prototype = we.prototype),
        (we.propHooks = {
          _default: {
            get: function (r) {
              var n;
              return r.elem.nodeType !== 1 ||
                (r.elem[r.prop] != null && r.elem.style[r.prop] == null)
                ? r.elem[r.prop]
                : ((n = u.css(r.elem, r.prop, "")), !n || n === "auto" ? 0 : n);
            },
            set: function (r) {
              u.fx.step[r.prop]
                ? u.fx.step[r.prop](r)
                : r.elem.nodeType === 1 &&
                  (u.cssHooks[r.prop] || r.elem.style[ti(r.prop)] != null)
                ? u.style(r.elem, r.prop, r.now + r.unit)
                : (r.elem[r.prop] = r.now);
            },
          },
        }),
        (we.propHooks.scrollTop = we.propHooks.scrollLeft =
          {
            set: function (r) {
              r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now);
            },
          }),
        (u.easing = {
          linear: function (r) {
            return r;
          },
          swing: function (r) {
            return 0.5 - Math.cos(r * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (u.fx = we.prototype.init),
        (u.fx.step = {});
      var tr,
        en,
        Ou = /^(?:toggle|show|hide)$/,
        Au = /queueHooks$/;
      function ni() {
        en &&
          (H.hidden === !1 && e.requestAnimationFrame
            ? e.requestAnimationFrame(ni)
            : e.setTimeout(ni, u.fx.interval),
          u.fx.tick());
      }
      function Jo() {
        return (
          e.setTimeout(function () {
            tr = void 0;
          }),
          (tr = Date.now())
        );
      }
      function tn(r, n) {
        var o,
          s = 0,
          c = { height: r };
        for (n = n ? 1 : 0; s < 4; s += 2 - n)
          (o = it[s]), (c["margin" + o] = c["padding" + o] = r);
        return n && (c.opacity = c.width = r), c;
      }
      function Ko(r, n, o) {
        for (
          var s,
            c = (Me.tweeners[n] || []).concat(Me.tweeners["*"]),
            l = 0,
            p = c.length;
          l < p;
          l++
        )
          if ((s = c[l].call(o, n, r))) return s;
      }
      function Iu(r, n, o) {
        var s,
          c,
          l,
          p,
          y,
          g,
          b,
          k,
          R = "width" in n || "height" in n,
          S = this,
          A = {},
          G = r.style,
          ee = r.nodeType && Xr(r),
          V = F.get(r, "fxshow");
        o.queue ||
          ((p = u._queueHooks(r, "fx")),
          p.unqueued == null &&
            ((p.unqueued = 0),
            (y = p.empty.fire),
            (p.empty.fire = function () {
              p.unqueued || y();
            })),
          p.unqueued++,
          S.always(function () {
            S.always(function () {
              p.unqueued--, u.queue(r, "fx").length || p.empty.fire();
            });
          }));
        for (s in n)
          if (((c = n[s]), Ou.test(c))) {
            if (
              (delete n[s],
              (l = l || c === "toggle"),
              c === (ee ? "hide" : "show"))
            )
              if (c === "show" && V && V[s] !== void 0) ee = !0;
              else continue;
            A[s] = (V && V[s]) || u.style(r, s);
          }
        if (((g = !u.isEmptyObject(n)), !(!g && u.isEmptyObject(A)))) {
          R &&
            r.nodeType === 1 &&
            ((o.overflow = [G.overflow, G.overflowX, G.overflowY]),
            (b = V && V.display),
            b == null && (b = F.get(r, "display")),
            (k = u.css(r, "display")),
            k === "none" &&
              (b
                ? (k = b)
                : (Xt([r], !0),
                  (b = r.style.display || b),
                  (k = u.css(r, "display")),
                  Xt([r]))),
            (k === "inline" || (k === "inline-block" && b != null)) &&
              u.css(r, "float") === "none" &&
              (g ||
                (S.done(function () {
                  G.display = b;
                }),
                b == null && ((k = G.display), (b = k === "none" ? "" : k))),
              (G.display = "inline-block"))),
            o.overflow &&
              ((G.overflow = "hidden"),
              S.always(function () {
                (G.overflow = o.overflow[0]),
                  (G.overflowX = o.overflow[1]),
                  (G.overflowY = o.overflow[2]);
              })),
            (g = !1);
          for (s in A)
            g ||
              (V
                ? "hidden" in V && (ee = V.hidden)
                : (V = F.access(r, "fxshow", { display: b })),
              l && (V.hidden = !ee),
              ee && Xt([r], !0),
              S.done(function () {
                ee || Xt([r]), F.remove(r, "fxshow");
                for (s in A) u.style(r, s, A[s]);
              })),
              (g = Ko(ee ? V[s] : 0, s, S)),
              s in V ||
                ((V[s] = g.start), ee && ((g.end = g.start), (g.start = 0)));
        }
      }
      function Pu(r, n) {
        var o, s, c, l, p;
        for (o in r)
          if (
            ((s = Ye(o)),
            (c = n[s]),
            (l = r[o]),
            Array.isArray(l) && ((c = l[1]), (l = r[o] = l[0])),
            o !== s && ((r[s] = l), delete r[o]),
            (p = u.cssHooks[s]),
            p && "expand" in p)
          ) {
            (l = p.expand(l)), delete r[s];
            for (o in l) o in r || ((r[o] = l[o]), (n[o] = c));
          } else n[s] = c;
      }
      function Me(r, n, o) {
        var s,
          c,
          l = 0,
          p = Me.prefilters.length,
          y = u.Deferred().always(function () {
            delete g.elem;
          }),
          g = function () {
            if (c) return !1;
            for (
              var R = tr || Jo(),
                S = Math.max(0, b.startTime + b.duration - R),
                A = S / b.duration || 0,
                G = 1 - A,
                ee = 0,
                V = b.tweens.length;
              ee < V;
              ee++
            )
              b.tweens[ee].run(G);
            return (
              y.notifyWith(r, [b, G, S]),
              G < 1 && V
                ? S
                : (V || y.notifyWith(r, [b, 1, 0]), y.resolveWith(r, [b]), !1)
            );
          },
          b = y.promise({
            elem: r,
            props: u.extend({}, n),
            opts: u.extend(
              !0,
              { specialEasing: {}, easing: u.easing._default },
              o
            ),
            originalProperties: n,
            originalOptions: o,
            startTime: tr || Jo(),
            duration: o.duration,
            tweens: [],
            createTween: function (R, S) {
              var A = u.Tween(
                r,
                b.opts,
                R,
                S,
                b.opts.specialEasing[R] || b.opts.easing
              );
              return b.tweens.push(A), A;
            },
            stop: function (R) {
              var S = 0,
                A = R ? b.tweens.length : 0;
              if (c) return this;
              for (c = !0; S < A; S++) b.tweens[S].run(1);
              return (
                R
                  ? (y.notifyWith(r, [b, 1, 0]), y.resolveWith(r, [b, R]))
                  : y.rejectWith(r, [b, R]),
                this
              );
            },
          }),
          k = b.props;
        for (Pu(k, b.opts.specialEasing); l < p; l++)
          if (((s = Me.prefilters[l].call(b, r, k, b.opts)), s))
            return (
              M(s.stop) &&
                (u._queueHooks(b.elem, b.opts.queue).stop = s.stop.bind(s)),
              s
            );
        return (
          u.map(k, Ko, b),
          M(b.opts.start) && b.opts.start.call(r, b),
          b
            .progress(b.opts.progress)
            .done(b.opts.done, b.opts.complete)
            .fail(b.opts.fail)
            .always(b.opts.always),
          u.fx.timer(u.extend(g, { elem: r, anim: b, queue: b.opts.queue })),
          b
        );
      }
      (u.Animation = u.extend(Me, {
        tweeners: {
          "*": [
            function (r, n) {
              var o = this.createTween(r, n);
              return Ao(o.elem, r, _r.exec(n), o), o;
            },
          ],
        },
        tweener: function (r, n) {
          M(r) ? ((n = r), (r = ["*"])) : (r = r.match(We));
          for (var o, s = 0, c = r.length; s < c; s++)
            (o = r[s]),
              (Me.tweeners[o] = Me.tweeners[o] || []),
              Me.tweeners[o].unshift(n);
        },
        prefilters: [Iu],
        prefilter: function (r, n) {
          n ? Me.prefilters.unshift(r) : Me.prefilters.push(r);
        },
      })),
        (u.speed = function (r, n, o) {
          var s =
            r && typeof r == "object"
              ? u.extend({}, r)
              : {
                  complete: o || (!o && n) || (M(r) && r),
                  duration: r,
                  easing: (o && n) || (n && !M(n) && n),
                };
          return (
            u.fx.off
              ? (s.duration = 0)
              : typeof s.duration != "number" &&
                (s.duration in u.fx.speeds
                  ? (s.duration = u.fx.speeds[s.duration])
                  : (s.duration = u.fx.speeds._default)),
            (s.queue == null || s.queue === !0) && (s.queue = "fx"),
            (s.old = s.complete),
            (s.complete = function () {
              M(s.old) && s.old.call(this), s.queue && u.dequeue(this, s.queue);
            }),
            s
          );
        }),
        u.fn.extend({
          fadeTo: function (r, n, o, s) {
            return this.filter(Xr)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: n }, r, o, s);
          },
          animate: function (r, n, o, s) {
            var c = u.isEmptyObject(r),
              l = u.speed(n, o, s),
              p = function () {
                var y = Me(this, u.extend({}, r), l);
                (c || F.get(this, "finish")) && y.stop(!0);
              };
            return (
              (p.finish = p),
              c || l.queue === !1 ? this.each(p) : this.queue(l.queue, p)
            );
          },
          stop: function (r, n, o) {
            var s = function (c) {
              var l = c.stop;
              delete c.stop, l(o);
            };
            return (
              typeof r != "string" && ((o = n), (n = r), (r = void 0)),
              n && this.queue(r || "fx", []),
              this.each(function () {
                var c = !0,
                  l = r != null && r + "queueHooks",
                  p = u.timers,
                  y = F.get(this);
                if (l) y[l] && y[l].stop && s(y[l]);
                else for (l in y) y[l] && y[l].stop && Au.test(l) && s(y[l]);
                for (l = p.length; l--; )
                  p[l].elem === this &&
                    (r == null || p[l].queue === r) &&
                    (p[l].anim.stop(o), (c = !1), p.splice(l, 1));
                (c || !o) && u.dequeue(this, r);
              })
            );
          },
          finish: function (r) {
            return (
              r !== !1 && (r = r || "fx"),
              this.each(function () {
                var n,
                  o = F.get(this),
                  s = o[r + "queue"],
                  c = o[r + "queueHooks"],
                  l = u.timers,
                  p = s ? s.length : 0;
                for (
                  o.finish = !0,
                    u.queue(this, r, []),
                    c && c.stop && c.stop.call(this, !0),
                    n = l.length;
                  n--;

                )
                  l[n].elem === this &&
                    l[n].queue === r &&
                    (l[n].anim.stop(!0), l.splice(n, 1));
                for (n = 0; n < p; n++)
                  s[n] && s[n].finish && s[n].finish.call(this);
                delete o.finish;
              })
            );
          },
        }),
        u.each(["toggle", "show", "hide"], function (r, n) {
          var o = u.fn[n];
          u.fn[n] = function (s, c, l) {
            return s == null || typeof s == "boolean"
              ? o.apply(this, arguments)
              : this.animate(tn(n, !0), s, c, l);
          };
        }),
        u.each(
          {
            slideDown: tn("show"),
            slideUp: tn("hide"),
            slideToggle: tn("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (r, n) {
            u.fn[r] = function (o, s, c) {
              return this.animate(n, o, s, c);
            };
          }
        ),
        (u.timers = []),
        (u.fx.tick = function () {
          var r,
            n = 0,
            o = u.timers;
          for (tr = Date.now(); n < o.length; n++)
            (r = o[n]), !r() && o[n] === r && o.splice(n--, 1);
          o.length || u.fx.stop(), (tr = void 0);
        }),
        (u.fx.timer = function (r) {
          u.timers.push(r), u.fx.start();
        }),
        (u.fx.interval = 13),
        (u.fx.start = function () {
          en || ((en = !0), ni());
        }),
        (u.fx.stop = function () {
          en = null;
        }),
        (u.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (u.fn.delay = function (r, n) {
          return (
            (r = (u.fx && u.fx.speeds[r]) || r),
            (n = n || "fx"),
            this.queue(n, function (o, s) {
              var c = e.setTimeout(o, r);
              s.stop = function () {
                e.clearTimeout(c);
              };
            })
          );
        }),
        (function () {
          var r = H.createElement("input"),
            n = H.createElement("select"),
            o = n.appendChild(H.createElement("option"));
          (r.type = "checkbox"),
            (I.checkOn = r.value !== ""),
            (I.optSelected = o.selected),
            (r = H.createElement("input")),
            (r.value = "t"),
            (r.type = "radio"),
            (I.radioValue = r.value === "t");
        })();
      var Xo,
        br = u.expr.attrHandle;
      u.fn.extend({
        attr: function (r, n) {
          return nt(this, u.attr, r, n, arguments.length > 1);
        },
        removeAttr: function (r) {
          return this.each(function () {
            u.removeAttr(this, r);
          });
        },
      }),
        u.extend({
          attr: function (r, n, o) {
            var s,
              c,
              l = r.nodeType;
            if (!(l === 3 || l === 8 || l === 2)) {
              if (typeof r.getAttribute == "undefined") return u.prop(r, n, o);
              if (
                ((l !== 1 || !u.isXMLDoc(r)) &&
                  (c =
                    u.attrHooks[n.toLowerCase()] ||
                    (u.expr.match.bool.test(n) ? Xo : void 0)),
                o !== void 0)
              ) {
                if (o === null) {
                  u.removeAttr(r, n);
                  return;
                }
                return c && "set" in c && (s = c.set(r, o, n)) !== void 0
                  ? s
                  : (r.setAttribute(n, o + ""), o);
              }
              return c && "get" in c && (s = c.get(r, n)) !== null
                ? s
                : ((s = u.find.attr(r, n)), s == null ? void 0 : s);
            }
          },
          attrHooks: {
            type: {
              set: function (r, n) {
                if (!I.radioValue && n === "radio" && Z(r, "input")) {
                  var o = r.value;
                  return r.setAttribute("type", n), o && (r.value = o), n;
                }
              },
            },
          },
          removeAttr: function (r, n) {
            var o,
              s = 0,
              c = n && n.match(We);
            if (c && r.nodeType === 1)
              for (; (o = c[s++]); ) r.removeAttribute(o);
          },
        }),
        (Xo = {
          set: function (r, n, o) {
            return n === !1 ? u.removeAttr(r, o) : r.setAttribute(o, o), o;
          },
        }),
        u.each(u.expr.match.bool.source.match(/\w+/g), function (r, n) {
          var o = br[n] || u.find.attr;
          br[n] = function (s, c, l) {
            var p,
              y,
              g = c.toLowerCase();
            return (
              l ||
                ((y = br[g]),
                (br[g] = p),
                (p = o(s, c, l) != null ? g : null),
                (br[g] = y)),
              p
            );
          };
        });
      var Lu = /^(?:input|select|textarea|button)$/i,
        ju = /^(?:a|area)$/i;
      u.fn.extend({
        prop: function (r, n) {
          return nt(this, u.prop, r, n, arguments.length > 1);
        },
        removeProp: function (r) {
          return this.each(function () {
            delete this[u.propFix[r] || r];
          });
        },
      }),
        u.extend({
          prop: function (r, n, o) {
            var s,
              c,
              l = r.nodeType;
            if (!(l === 3 || l === 8 || l === 2))
              return (
                (l !== 1 || !u.isXMLDoc(r)) &&
                  ((n = u.propFix[n] || n), (c = u.propHooks[n])),
                o !== void 0
                  ? c && "set" in c && (s = c.set(r, o, n)) !== void 0
                    ? s
                    : (r[n] = o)
                  : c && "get" in c && (s = c.get(r, n)) !== null
                  ? s
                  : r[n]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (r) {
                var n = u.find.attr(r, "tabindex");
                return n
                  ? parseInt(n, 10)
                  : Lu.test(r.nodeName) || (ju.test(r.nodeName) && r.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        I.optSelected ||
          (u.propHooks.selected = {
            get: function (r) {
              var n = r.parentNode;
              return n && n.parentNode && n.parentNode.selectedIndex, null;
            },
            set: function (r) {
              var n = r.parentNode;
              n &&
                (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex);
            },
          }),
        u.each(
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
            u.propFix[this.toLowerCase()] = this;
          }
        );
      function Ct(r) {
        var n = r.match(We) || [];
        return n.join(" ");
      }
      function Dt(r) {
        return (r.getAttribute && r.getAttribute("class")) || "";
      }
      function ii(r) {
        return Array.isArray(r)
          ? r
          : typeof r == "string"
          ? r.match(We) || []
          : [];
      }
      u.fn.extend({
        addClass: function (r) {
          var n, o, s, c, l, p;
          return M(r)
            ? this.each(function (y) {
                u(this).addClass(r.call(this, y, Dt(this)));
              })
            : ((n = ii(r)),
              n.length
                ? this.each(function () {
                    if (
                      ((s = Dt(this)),
                      (o = this.nodeType === 1 && " " + Ct(s) + " "),
                      o)
                    ) {
                      for (l = 0; l < n.length; l++)
                        (c = n[l]),
                          o.indexOf(" " + c + " ") < 0 && (o += c + " ");
                      (p = Ct(o)), s !== p && this.setAttribute("class", p);
                    }
                  })
                : this);
        },
        removeClass: function (r) {
          var n, o, s, c, l, p;
          return M(r)
            ? this.each(function (y) {
                u(this).removeClass(r.call(this, y, Dt(this)));
              })
            : arguments.length
            ? ((n = ii(r)),
              n.length
                ? this.each(function () {
                    if (
                      ((s = Dt(this)),
                      (o = this.nodeType === 1 && " " + Ct(s) + " "),
                      o)
                    ) {
                      for (l = 0; l < n.length; l++)
                        for (c = n[l]; o.indexOf(" " + c + " ") > -1; )
                          o = o.replace(" " + c + " ", " ");
                      (p = Ct(o)), s !== p && this.setAttribute("class", p);
                    }
                  })
                : this)
            : this.attr("class", "");
        },
        toggleClass: function (r, n) {
          var o,
            s,
            c,
            l,
            p = typeof r,
            y = p === "string" || Array.isArray(r);
          return M(r)
            ? this.each(function (g) {
                u(this).toggleClass(r.call(this, g, Dt(this), n), n);
              })
            : typeof n == "boolean" && y
            ? n
              ? this.addClass(r)
              : this.removeClass(r)
            : ((o = ii(r)),
              this.each(function () {
                if (y)
                  for (l = u(this), c = 0; c < o.length; c++)
                    (s = o[c]),
                      l.hasClass(s) ? l.removeClass(s) : l.addClass(s);
                else
                  (r === void 0 || p === "boolean") &&
                    ((s = Dt(this)),
                    s && F.set(this, "__className__", s),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        s || r === !1 ? "" : F.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (r) {
          var n,
            o,
            s = 0;
          for (n = " " + r + " "; (o = this[s++]); )
            if (o.nodeType === 1 && (" " + Ct(Dt(o)) + " ").indexOf(n) > -1)
              return !0;
          return !1;
        },
      });
      var Mu = /\r/g;
      u.fn.extend({
        val: function (r) {
          var n,
            o,
            s,
            c = this[0];
          return arguments.length
            ? ((s = M(r)),
              this.each(function (l) {
                var p;
                this.nodeType === 1 &&
                  (s ? (p = r.call(this, l, u(this).val())) : (p = r),
                  p == null
                    ? (p = "")
                    : typeof p == "number"
                    ? (p += "")
                    : Array.isArray(p) &&
                      (p = u.map(p, function (y) {
                        return y == null ? "" : y + "";
                      })),
                  (n =
                    u.valHooks[this.type] ||
                    u.valHooks[this.nodeName.toLowerCase()]),
                  (!n || !("set" in n) || n.set(this, p, "value") === void 0) &&
                    (this.value = p));
              }))
            : c
            ? ((n = u.valHooks[c.type] || u.valHooks[c.nodeName.toLowerCase()]),
              n && "get" in n && (o = n.get(c, "value")) !== void 0
                ? o
                : ((o = c.value),
                  typeof o == "string"
                    ? o.replace(Mu, "")
                    : o == null
                    ? ""
                    : o))
            : void 0;
        },
      }),
        u.extend({
          valHooks: {
            option: {
              get: function (r) {
                var n = u.find.attr(r, "value");
                return n != null ? n : Ct(u.text(r));
              },
            },
            select: {
              get: function (r) {
                var n,
                  o,
                  s,
                  c = r.options,
                  l = r.selectedIndex,
                  p = r.type === "select-one",
                  y = p ? null : [],
                  g = p ? l + 1 : c.length;
                for (l < 0 ? (s = g) : (s = p ? l : 0); s < g; s++)
                  if (
                    ((o = c[s]),
                    (o.selected || s === l) &&
                      !o.disabled &&
                      (!o.parentNode.disabled || !Z(o.parentNode, "optgroup")))
                  ) {
                    if (((n = u(o).val()), p)) return n;
                    y.push(n);
                  }
                return y;
              },
              set: function (r, n) {
                for (
                  var o, s, c = r.options, l = u.makeArray(n), p = c.length;
                  p--;

                )
                  (s = c[p]),
                    (s.selected =
                      u.inArray(u.valHooks.option.get(s), l) > -1) && (o = !0);
                return o || (r.selectedIndex = -1), l;
              },
            },
          },
        }),
        u.each(["radio", "checkbox"], function () {
          (u.valHooks[this] = {
            set: function (r, n) {
              if (Array.isArray(n))
                return (r.checked = u.inArray(u(r).val(), n) > -1);
            },
          }),
            I.checkOn ||
              (u.valHooks[this].get = function (r) {
                return r.getAttribute("value") === null ? "on" : r.value;
              });
        });
      var Er = e.location,
        Qo = { guid: Date.now() },
        oi = /\?/;
      u.parseXML = function (r) {
        var n, o;
        if (!r || typeof r != "string") return null;
        try {
          n = new e.DOMParser().parseFromString(r, "text/xml");
        } catch (s) {}
        return (
          (o = n && n.getElementsByTagName("parsererror")[0]),
          (!n || o) &&
            u.error(
              "Invalid XML: " +
                (o
                  ? u.map(o.childNodes, function (s) {
                      return s.textContent;
                    }).join(`
`)
                  : r)
            ),
          n
        );
      };
      var Zo = /^(?:focusinfocus|focusoutblur)$/,
        ea = function (r) {
          r.stopPropagation();
        };
      u.extend(u.event, {
        trigger: function (r, n, o, s) {
          var c,
            l,
            p,
            y,
            g,
            b,
            k,
            R,
            S = [o || H],
            A = O.call(r, "type") ? r.type : r,
            G = O.call(r, "namespace") ? r.namespace.split(".") : [];
          if (
            ((l = R = p = o = o || H),
            !(o.nodeType === 3 || o.nodeType === 8) &&
              !Zo.test(A + u.event.triggered) &&
              (A.indexOf(".") > -1 &&
                ((G = A.split(".")), (A = G.shift()), G.sort()),
              (g = A.indexOf(":") < 0 && "on" + A),
              (r = r[u.expando]
                ? r
                : new u.Event(A, typeof r == "object" && r)),
              (r.isTrigger = s ? 2 : 3),
              (r.namespace = G.join(".")),
              (r.rnamespace = r.namespace
                ? new RegExp("(^|\\.)" + G.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (r.result = void 0),
              r.target || (r.target = o),
              (n = n == null ? [r] : u.makeArray(n, [r])),
              (k = u.event.special[A] || {}),
              !(!s && k.trigger && k.trigger.apply(o, n) === !1)))
          ) {
            if (!s && !k.noBubble && !xe(o)) {
              for (
                y = k.delegateType || A, Zo.test(y + A) || (l = l.parentNode);
                l;
                l = l.parentNode
              )
                S.push(l), (p = l);
              p === (o.ownerDocument || H) &&
                S.push(p.defaultView || p.parentWindow || e);
            }
            for (c = 0; (l = S[c++]) && !r.isPropagationStopped(); )
              (R = l),
                (r.type = c > 1 ? y : k.bindType || A),
                (b =
                  (F.get(l, "events") || Object.create(null))[r.type] &&
                  F.get(l, "handle")),
                b && b.apply(l, n),
                (b = g && l[g]),
                b &&
                  b.apply &&
                  gr(l) &&
                  ((r.result = b.apply(l, n)),
                  r.result === !1 && r.preventDefault());
            return (
              (r.type = A),
              !s &&
                !r.isDefaultPrevented() &&
                (!k._default || k._default.apply(S.pop(), n) === !1) &&
                gr(o) &&
                g &&
                M(o[A]) &&
                !xe(o) &&
                ((p = o[g]),
                p && (o[g] = null),
                (u.event.triggered = A),
                r.isPropagationStopped() && R.addEventListener(A, ea),
                o[A](),
                r.isPropagationStopped() && R.removeEventListener(A, ea),
                (u.event.triggered = void 0),
                p && (o[g] = p)),
              r.result
            );
          }
        },
        simulate: function (r, n, o) {
          var s = u.extend(new u.Event(), o, { type: r, isSimulated: !0 });
          u.event.trigger(s, null, n);
        },
      }),
        u.fn.extend({
          trigger: function (r, n) {
            return this.each(function () {
              u.event.trigger(r, n, this);
            });
          },
          triggerHandler: function (r, n) {
            var o = this[0];
            if (o) return u.event.trigger(r, n, o, !0);
          },
        });
      var Uu = /\[\]$/,
        ta = /\r?\n/g,
        Bu = /^(?:submit|button|image|reset|file)$/i,
        Fu = /^(?:input|select|textarea|keygen)/i;
      function ai(r, n, o, s) {
        var c;
        if (Array.isArray(n))
          u.each(n, function (l, p) {
            o || Uu.test(r)
              ? s(r, p)
              : ai(
                  r + "[" + (typeof p == "object" && p != null ? l : "") + "]",
                  p,
                  o,
                  s
                );
          });
        else if (!o && Ge(n) === "object")
          for (c in n) ai(r + "[" + c + "]", n[c], o, s);
        else s(r, n);
      }
      (u.param = function (r, n) {
        var o,
          s = [],
          c = function (l, p) {
            var y = M(p) ? p() : p;
            s[s.length] =
              encodeURIComponent(l) +
              "=" +
              encodeURIComponent(y == null ? "" : y);
          };
        if (r == null) return "";
        if (Array.isArray(r) || (r.jquery && !u.isPlainObject(r)))
          u.each(r, function () {
            c(this.name, this.value);
          });
        else for (o in r) ai(o, r[o], n, c);
        return s.join("&");
      }),
        u.fn.extend({
          serialize: function () {
            return u.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var r = u.prop(this, "elements");
              return r ? u.makeArray(r) : this;
            })
              .filter(function () {
                var r = this.type;
                return (
                  this.name &&
                  !u(this).is(":disabled") &&
                  Fu.test(this.nodeName) &&
                  !Bu.test(r) &&
                  (this.checked || !xr.test(r))
                );
              })
              .map(function (r, n) {
                var o = u(this).val();
                return o == null
                  ? null
                  : Array.isArray(o)
                  ? u.map(o, function (s) {
                      return {
                        name: n.name,
                        value: s.replace(
                          ta,
                          `\r
`
                        ),
                      };
                    })
                  : {
                      name: n.name,
                      value: o.replace(
                        ta,
                        `\r
`
                      ),
                    };
              })
              .get();
          },
        });
      var Hu = /%20/g,
        $u = /#.*$/,
        qu = /([?&])_=[^&]*/,
        Gu = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Wu = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Yu = /^(?:GET|HEAD)$/,
        zu = /^\/\//,
        ra = {},
        si = {},
        na = "*/".concat("*"),
        ui = H.createElement("a");
      ui.href = Er.href;
      function ia(r) {
        return function (n, o) {
          typeof n != "string" && ((o = n), (n = "*"));
          var s,
            c = 0,
            l = n.toLowerCase().match(We) || [];
          if (M(o))
            for (; (s = l[c++]); )
              s[0] === "+"
                ? ((s = s.slice(1) || "*"), (r[s] = r[s] || []).unshift(o))
                : (r[s] = r[s] || []).push(o);
        };
      }
      function oa(r, n, o, s) {
        var c = {},
          l = r === si;
        function p(y) {
          var g;
          return (
            (c[y] = !0),
            u.each(r[y] || [], function (b, k) {
              var R = k(n, o, s);
              if (typeof R == "string" && !l && !c[R])
                return n.dataTypes.unshift(R), p(R), !1;
              if (l) return !(g = R);
            }),
            g
          );
        }
        return p(n.dataTypes[0]) || (!c["*"] && p("*"));
      }
      function fi(r, n) {
        var o,
          s,
          c = u.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== void 0 && ((c[o] ? r : s || (s = {}))[o] = n[o]);
        return s && u.extend(!0, r, s), r;
      }
      function Vu(r, n, o) {
        for (var s, c, l, p, y = r.contents, g = r.dataTypes; g[0] === "*"; )
          g.shift(),
            s === void 0 &&
              (s = r.mimeType || n.getResponseHeader("Content-Type"));
        if (s) {
          for (c in y)
            if (y[c] && y[c].test(s)) {
              g.unshift(c);
              break;
            }
        }
        if (g[0] in o) l = g[0];
        else {
          for (c in o) {
            if (!g[0] || r.converters[c + " " + g[0]]) {
              l = c;
              break;
            }
            p || (p = c);
          }
          l = l || p;
        }
        if (l) return l !== g[0] && g.unshift(l), o[l];
      }
      function Ju(r, n, o, s) {
        var c,
          l,
          p,
          y,
          g,
          b = {},
          k = r.dataTypes.slice();
        if (k[1]) for (p in r.converters) b[p.toLowerCase()] = r.converters[p];
        for (l = k.shift(); l; )
          if (
            (r.responseFields[l] && (o[r.responseFields[l]] = n),
            !g && s && r.dataFilter && (n = r.dataFilter(n, r.dataType)),
            (g = l),
            (l = k.shift()),
            l)
          ) {
            if (l === "*") l = g;
            else if (g !== "*" && g !== l) {
              if (((p = b[g + " " + l] || b["* " + l]), !p)) {
                for (c in b)
                  if (
                    ((y = c.split(" ")),
                    y[1] === l &&
                      ((p = b[g + " " + y[0]] || b["* " + y[0]]), p))
                  ) {
                    p === !0
                      ? (p = b[c])
                      : b[c] !== !0 && ((l = y[0]), k.unshift(y[1]));
                    break;
                  }
              }
              if (p !== !0)
                if (p && r.throws) n = p(n);
                else
                  try {
                    n = p(n);
                  } catch (R) {
                    return {
                      state: "parsererror",
                      error: p ? R : "No conversion from " + g + " to " + l,
                    };
                  }
            }
          }
        return { state: "success", data: n };
      }
      u.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Er.href,
          type: "GET",
          isLocal: Wu.test(Er.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": na,
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
            "text json": JSON.parse,
            "text xml": u.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (r, n) {
          return n ? fi(fi(r, u.ajaxSettings), n) : fi(u.ajaxSettings, r);
        },
        ajaxPrefilter: ia(ra),
        ajaxTransport: ia(si),
        ajax: function (r, n) {
          typeof r == "object" && ((n = r), (r = void 0)), (n = n || {});
          var o,
            s,
            c,
            l,
            p,
            y,
            g,
            b,
            k,
            R,
            S = u.ajaxSetup({}, n),
            A = S.context || S,
            G = S.context && (A.nodeType || A.jquery) ? u(A) : u.event,
            ee = u.Deferred(),
            V = u.Callbacks("once memory"),
            ge = S.statusCode || {},
            pe = {},
            ze = {},
            Ve = "canceled",
            Q = {
              readyState: 0,
              getResponseHeader: function (re) {
                var ce;
                if (g) {
                  if (!l)
                    for (l = {}; (ce = Gu.exec(c)); )
                      l[ce[1].toLowerCase() + " "] = (
                        l[ce[1].toLowerCase() + " "] || []
                      ).concat(ce[2]);
                  ce = l[re.toLowerCase() + " "];
                }
                return ce == null ? null : ce.join(", ");
              },
              getAllResponseHeaders: function () {
                return g ? c : null;
              },
              setRequestHeader: function (re, ce) {
                return (
                  g == null &&
                    ((re = ze[re.toLowerCase()] = ze[re.toLowerCase()] || re),
                    (pe[re] = ce)),
                  this
                );
              },
              overrideMimeType: function (re) {
                return g == null && (S.mimeType = re), this;
              },
              statusCode: function (re) {
                var ce;
                if (re)
                  if (g) Q.always(re[Q.status]);
                  else for (ce in re) ge[ce] = [ge[ce], re[ce]];
                return this;
              },
              abort: function (re) {
                var ce = re || Ve;
                return o && o.abort(ce), Ot(0, ce), this;
              },
            };
          if (
            (ee.promise(Q),
            (S.url = ((r || S.url || Er.href) + "").replace(
              zu,
              Er.protocol + "//"
            )),
            (S.type = n.method || n.type || S.method || S.type),
            (S.dataTypes = (S.dataType || "*").toLowerCase().match(We) || [""]),
            S.crossDomain == null)
          ) {
            y = H.createElement("a");
            try {
              (y.href = S.url),
                (y.href = y.href),
                (S.crossDomain =
                  ui.protocol + "//" + ui.host != y.protocol + "//" + y.host);
            } catch (re) {
              S.crossDomain = !0;
            }
          }
          if (
            (S.data &&
              S.processData &&
              typeof S.data != "string" &&
              (S.data = u.param(S.data, S.traditional)),
            oa(ra, S, n, Q),
            g)
          )
            return Q;
          (b = u.event && S.global),
            b && u.active++ === 0 && u.event.trigger("ajaxStart"),
            (S.type = S.type.toUpperCase()),
            (S.hasContent = !Yu.test(S.type)),
            (s = S.url.replace($u, "")),
            S.hasContent
              ? S.data &&
                S.processData &&
                (S.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                (S.data = S.data.replace(Hu, "+"))
              : ((R = S.url.slice(s.length)),
                S.data &&
                  (S.processData || typeof S.data == "string") &&
                  ((s += (oi.test(s) ? "&" : "?") + S.data), delete S.data),
                S.cache === !1 &&
                  ((s = s.replace(qu, "$1")),
                  (R = (oi.test(s) ? "&" : "?") + "_=" + Qo.guid++ + R)),
                (S.url = s + R)),
            S.ifModified &&
              (u.lastModified[s] &&
                Q.setRequestHeader("If-Modified-Since", u.lastModified[s]),
              u.etag[s] && Q.setRequestHeader("If-None-Match", u.etag[s])),
            ((S.data && S.hasContent && S.contentType !== !1) ||
              n.contentType) &&
              Q.setRequestHeader("Content-Type", S.contentType),
            Q.setRequestHeader(
              "Accept",
              S.dataTypes[0] && S.accepts[S.dataTypes[0]]
                ? S.accepts[S.dataTypes[0]] +
                    (S.dataTypes[0] !== "*" ? ", " + na + "; q=0.01" : "")
                : S.accepts["*"]
            );
          for (k in S.headers) Q.setRequestHeader(k, S.headers[k]);
          if (S.beforeSend && (S.beforeSend.call(A, Q, S) === !1 || g))
            return Q.abort();
          if (
            ((Ve = "abort"),
            V.add(S.complete),
            Q.done(S.success),
            Q.fail(S.error),
            (o = oa(si, S, n, Q)),
            !o)
          )
            Ot(-1, "No Transport");
          else {
            if (((Q.readyState = 1), b && G.trigger("ajaxSend", [Q, S]), g))
              return Q;
            S.async &&
              S.timeout > 0 &&
              (p = e.setTimeout(function () {
                Q.abort("timeout");
              }, S.timeout));
            try {
              (g = !1), o.send(pe, Ot);
            } catch (re) {
              if (g) throw re;
              Ot(-1, re);
            }
          }
          function Ot(re, ce, Tr, li) {
            var Je,
              wr,
              Ke,
              gt,
              yt,
              Ae = ce;
            g ||
              ((g = !0),
              p && e.clearTimeout(p),
              (o = void 0),
              (c = li || ""),
              (Q.readyState = re > 0 ? 4 : 0),
              (Je = (re >= 200 && re < 300) || re === 304),
              Tr && (gt = Vu(S, Q, Tr)),
              !Je &&
                u.inArray("script", S.dataTypes) > -1 &&
                u.inArray("json", S.dataTypes) < 0 &&
                (S.converters["text script"] = function () {}),
              (gt = Ju(S, gt, Q, Je)),
              Je
                ? (S.ifModified &&
                    ((yt = Q.getResponseHeader("Last-Modified")),
                    yt && (u.lastModified[s] = yt),
                    (yt = Q.getResponseHeader("etag")),
                    yt && (u.etag[s] = yt)),
                  re === 204 || S.type === "HEAD"
                    ? (Ae = "nocontent")
                    : re === 304
                    ? (Ae = "notmodified")
                    : ((Ae = gt.state),
                      (wr = gt.data),
                      (Ke = gt.error),
                      (Je = !Ke)))
                : ((Ke = Ae),
                  (re || !Ae) && ((Ae = "error"), re < 0 && (re = 0))),
              (Q.status = re),
              (Q.statusText = (ce || Ae) + ""),
              Je
                ? ee.resolveWith(A, [wr, Ae, Q])
                : ee.rejectWith(A, [Q, Ae, Ke]),
              Q.statusCode(ge),
              (ge = void 0),
              b &&
                G.trigger(Je ? "ajaxSuccess" : "ajaxError", [
                  Q,
                  S,
                  Je ? wr : Ke,
                ]),
              V.fireWith(A, [Q, Ae]),
              b &&
                (G.trigger("ajaxComplete", [Q, S]),
                --u.active || u.event.trigger("ajaxStop")));
          }
          return Q;
        },
        getJSON: function (r, n, o) {
          return u.get(r, n, o, "json");
        },
        getScript: function (r, n) {
          return u.get(r, void 0, n, "script");
        },
      }),
        u.each(["get", "post"], function (r, n) {
          u[n] = function (o, s, c, l) {
            return (
              M(s) && ((l = l || c), (c = s), (s = void 0)),
              u.ajax(
                u.extend(
                  { url: o, type: n, dataType: l, data: s, success: c },
                  u.isPlainObject(o) && o
                )
              )
            );
          };
        }),
        u.ajaxPrefilter(function (r) {
          var n;
          for (n in r.headers)
            n.toLowerCase() === "content-type" &&
              (r.contentType = r.headers[n] || "");
        }),
        (u._evalUrl = function (r, n, o) {
          return u.ajax({
            url: r,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (s) {
              u.globalEval(s, n, o);
            },
          });
        }),
        u.fn.extend({
          wrapAll: function (r) {
            var n;
            return (
              this[0] &&
                (M(r) && (r = r.call(this[0])),
                (n = u(r, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && n.insertBefore(this[0]),
                n
                  .map(function () {
                    for (var o = this; o.firstElementChild; )
                      o = o.firstElementChild;
                    return o;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (r) {
            return M(r)
              ? this.each(function (n) {
                  u(this).wrapInner(r.call(this, n));
                })
              : this.each(function () {
                  var n = u(this),
                    o = n.contents();
                  o.length ? o.wrapAll(r) : n.append(r);
                });
          },
          wrap: function (r) {
            var n = M(r);
            return this.each(function (o) {
              u(this).wrapAll(n ? r.call(this, o) : r);
            });
          },
          unwrap: function (r) {
            return (
              this.parent(r)
                .not("body")
                .each(function () {
                  u(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (u.expr.pseudos.hidden = function (r) {
          return !u.expr.pseudos.visible(r);
        }),
        (u.expr.pseudos.visible = function (r) {
          return !!(
            r.offsetWidth ||
            r.offsetHeight ||
            r.getClientRects().length
          );
        }),
        (u.ajaxSettings.xhr = function () {
          try {
            return new e.XMLHttpRequest();
          } catch (r) {}
        });
      var Ku = { 0: 200, 1223: 204 },
        Sr = u.ajaxSettings.xhr();
      (I.cors = !!Sr && "withCredentials" in Sr),
        (I.ajax = Sr = !!Sr),
        u.ajaxTransport(function (r) {
          var n, o;
          if (I.cors || (Sr && !r.crossDomain))
            return {
              send: function (s, c) {
                var l,
                  p = r.xhr();
                if (
                  (p.open(r.type, r.url, r.async, r.username, r.password),
                  r.xhrFields)
                )
                  for (l in r.xhrFields) p[l] = r.xhrFields[l];
                r.mimeType &&
                  p.overrideMimeType &&
                  p.overrideMimeType(r.mimeType),
                  !r.crossDomain &&
                    !s["X-Requested-With"] &&
                    (s["X-Requested-With"] = "XMLHttpRequest");
                for (l in s) p.setRequestHeader(l, s[l]);
                (n = function (y) {
                  return function () {
                    n &&
                      ((n =
                        o =
                        p.onload =
                        p.onerror =
                        p.onabort =
                        p.ontimeout =
                        p.onreadystatechange =
                          null),
                      y === "abort"
                        ? p.abort()
                        : y === "error"
                        ? typeof p.status != "number"
                          ? c(0, "error")
                          : c(p.status, p.statusText)
                        : c(
                            Ku[p.status] || p.status,
                            p.statusText,
                            (p.responseType || "text") !== "text" ||
                              typeof p.responseText != "string"
                              ? { binary: p.response }
                              : { text: p.responseText },
                            p.getAllResponseHeaders()
                          ));
                  };
                }),
                  (p.onload = n()),
                  (o = p.onerror = p.ontimeout = n("error")),
                  p.onabort !== void 0
                    ? (p.onabort = o)
                    : (p.onreadystatechange = function () {
                        p.readyState === 4 &&
                          e.setTimeout(function () {
                            n && o();
                          });
                      }),
                  (n = n("abort"));
                try {
                  p.send((r.hasContent && r.data) || null);
                } catch (y) {
                  if (n) throw y;
                }
              },
              abort: function () {
                n && n();
              },
            };
        }),
        u.ajaxPrefilter(function (r) {
          r.crossDomain && (r.contents.script = !1);
        }),
        u.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (r) {
              return u.globalEval(r), r;
            },
          },
        }),
        u.ajaxPrefilter("script", function (r) {
          r.cache === void 0 && (r.cache = !1),
            r.crossDomain && (r.type = "GET");
        }),
        u.ajaxTransport("script", function (r) {
          if (r.crossDomain || r.scriptAttrs) {
            var n, o;
            return {
              send: function (s, c) {
                (n = u("<script>")
                  .attr(r.scriptAttrs || {})
                  .prop({ charset: r.scriptCharset, src: r.url })
                  .on(
                    "load error",
                    (o = function (l) {
                      n.remove(),
                        (o = null),
                        l && c(l.type === "error" ? 404 : 200, l.type);
                    })
                  )),
                  H.head.appendChild(n[0]);
              },
              abort: function () {
                o && o();
              },
            };
          }
        });
      var aa = [],
        ci = /(=)\?(?=&|$)|\?\?/;
      u.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var r = aa.pop() || u.expando + "_" + Qo.guid++;
          return (this[r] = !0), r;
        },
      }),
        u.ajaxPrefilter("json jsonp", function (r, n, o) {
          var s,
            c,
            l,
            p =
              r.jsonp !== !1 &&
              (ci.test(r.url)
                ? "url"
                : typeof r.data == "string" &&
                  (r.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) === 0 &&
                  ci.test(r.data) &&
                  "data");
          if (p || r.dataTypes[0] === "jsonp")
            return (
              (s = r.jsonpCallback =
                M(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback),
              p
                ? (r[p] = r[p].replace(ci, "$1" + s))
                : r.jsonp !== !1 &&
                  (r.url += (oi.test(r.url) ? "&" : "?") + r.jsonp + "=" + s),
              (r.converters["script json"] = function () {
                return l || u.error(s + " was not called"), l[0];
              }),
              (r.dataTypes[0] = "json"),
              (c = e[s]),
              (e[s] = function () {
                l = arguments;
              }),
              o.always(function () {
                c === void 0 ? u(e).removeProp(s) : (e[s] = c),
                  r[s] && ((r.jsonpCallback = n.jsonpCallback), aa.push(s)),
                  l && M(c) && c(l[0]),
                  (l = c = void 0);
              }),
              "script"
            );
        }),
        (I.createHTMLDocument = (function () {
          var r = H.implementation.createHTMLDocument("").body;
          return (
            (r.innerHTML = "<form></form><form></form>"),
            r.childNodes.length === 2
          );
        })()),
        (u.parseHTML = function (r, n, o) {
          if (typeof r != "string") return [];
          typeof n == "boolean" && ((o = n), (n = !1));
          var s, c, l;
          return (
            n ||
              (I.createHTMLDocument
                ? ((n = H.implementation.createHTMLDocument("")),
                  (s = n.createElement("base")),
                  (s.href = H.location.href),
                  n.head.appendChild(s))
                : (n = H)),
            (c = ko.exec(r)),
            (l = !o && []),
            c
              ? [n.createElement(c[1])]
              : ((c = jo([r], n, l)),
                l && l.length && u(l).remove(),
                u.merge([], c.childNodes))
          );
        }),
        (u.fn.load = function (r, n, o) {
          var s,
            c,
            l,
            p = this,
            y = r.indexOf(" ");
          return (
            y > -1 && ((s = Ct(r.slice(y))), (r = r.slice(0, y))),
            M(n)
              ? ((o = n), (n = void 0))
              : n && typeof n == "object" && (c = "POST"),
            p.length > 0 &&
              u
                .ajax({ url: r, type: c || "GET", dataType: "html", data: n })
                .done(function (g) {
                  (l = arguments),
                    p.html(s ? u("<div>").append(u.parseHTML(g)).find(s) : g);
                })
                .always(
                  o &&
                    function (g, b) {
                      p.each(function () {
                        o.apply(this, l || [g.responseText, b, g]);
                      });
                    }
                ),
            this
          );
        }),
        (u.expr.pseudos.animated = function (r) {
          return u.grep(u.timers, function (n) {
            return r === n.elem;
          }).length;
        }),
        (u.offset = {
          setOffset: function (r, n, o) {
            var s,
              c,
              l,
              p,
              y,
              g,
              b,
              k = u.css(r, "position"),
              R = u(r),
              S = {};
            k === "static" && (r.style.position = "relative"),
              (y = R.offset()),
              (l = u.css(r, "top")),
              (g = u.css(r, "left")),
              (b =
                (k === "absolute" || k === "fixed") &&
                (l + g).indexOf("auto") > -1),
              b
                ? ((s = R.position()), (p = s.top), (c = s.left))
                : ((p = parseFloat(l) || 0), (c = parseFloat(g) || 0)),
              M(n) && (n = n.call(r, o, u.extend({}, y))),
              n.top != null && (S.top = n.top - y.top + p),
              n.left != null && (S.left = n.left - y.left + c),
              "using" in n ? n.using.call(r, S) : R.css(S);
          },
        }),
        u.fn.extend({
          offset: function (r) {
            if (arguments.length)
              return r === void 0
                ? this
                : this.each(function (c) {
                    u.offset.setOffset(this, r, c);
                  });
            var n,
              o,
              s = this[0];
            if (s)
              return s.getClientRects().length
                ? ((n = s.getBoundingClientRect()),
                  (o = s.ownerDocument.defaultView),
                  { top: n.top + o.pageYOffset, left: n.left + o.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var r,
                n,
                o,
                s = this[0],
                c = { top: 0, left: 0 };
              if (u.css(s, "position") === "fixed")
                n = s.getBoundingClientRect();
              else {
                for (
                  n = this.offset(),
                    o = s.ownerDocument,
                    r = s.offsetParent || o.documentElement;
                  r &&
                  (r === o.body || r === o.documentElement) &&
                  u.css(r, "position") === "static";

                )
                  r = r.parentNode;
                r &&
                  r !== s &&
                  r.nodeType === 1 &&
                  ((c = u(r).offset()),
                  (c.top += u.css(r, "borderTopWidth", !0)),
                  (c.left += u.css(r, "borderLeftWidth", !0)));
              }
              return {
                top: n.top - c.top - u.css(s, "marginTop", !0),
                left: n.left - c.left - u.css(s, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var r = this.offsetParent;
                r && u.css(r, "position") === "static";

              )
                r = r.offsetParent;
              return r || Rt;
            });
          },
        }),
        u.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (r, n) {
            var o = n === "pageYOffset";
            u.fn[r] = function (s) {
              return nt(
                this,
                function (c, l, p) {
                  var y;
                  if (
                    (xe(c) ? (y = c) : c.nodeType === 9 && (y = c.defaultView),
                    p === void 0)
                  )
                    return y ? y[n] : c[l];
                  y
                    ? y.scrollTo(o ? y.pageXOffset : p, o ? p : y.pageYOffset)
                    : (c[l] = p);
                },
                r,
                s,
                arguments.length
              );
            };
          }
        ),
        u.each(["top", "left"], function (r, n) {
          u.cssHooks[n] = $o(I.pixelPosition, function (o, s) {
            if (s)
              return (s = vr(o, n)), Zn.test(s) ? u(o).position()[n] + "px" : s;
          });
        }),
        u.each({ Height: "height", Width: "width" }, function (r, n) {
          u.each(
            { padding: "inner" + r, content: n, "": "outer" + r },
            function (o, s) {
              u.fn[s] = function (c, l) {
                var p = arguments.length && (o || typeof c != "boolean"),
                  y = o || (c === !0 || l === !0 ? "margin" : "border");
                return nt(
                  this,
                  function (g, b, k) {
                    var R;
                    return xe(g)
                      ? s.indexOf("outer") === 0
                        ? g["inner" + r]
                        : g.document.documentElement["client" + r]
                      : g.nodeType === 9
                      ? ((R = g.documentElement),
                        Math.max(
                          g.body["scroll" + r],
                          R["scroll" + r],
                          g.body["offset" + r],
                          R["offset" + r],
                          R["client" + r]
                        ))
                      : k === void 0
                      ? u.css(g, b, y)
                      : u.style(g, b, k, y);
                  },
                  n,
                  p ? c : void 0,
                  p
                );
              };
            }
          );
        }),
        u.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (r, n) {
            u.fn[n] = function (o) {
              return this.on(n, o);
            };
          }
        ),
        u.fn.extend({
          bind: function (r, n, o) {
            return this.on(r, null, n, o);
          },
          unbind: function (r, n) {
            return this.off(r, null, n);
          },
          delegate: function (r, n, o, s) {
            return this.on(n, r, o, s);
          },
          undelegate: function (r, n, o) {
            return arguments.length === 1
              ? this.off(r, "**")
              : this.off(n, r || "**", o);
          },
          hover: function (r, n) {
            return this.mouseenter(r).mouseleave(n || r);
          },
        }),
        u.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (r, n) {
            u.fn[n] = function (o, s) {
              return arguments.length > 0
                ? this.on(n, null, o, s)
                : this.trigger(n);
            };
          }
        );
      var Xu = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (u.proxy = function (r, n) {
        var o, s, c;
        if ((typeof n == "string" && ((o = r[n]), (n = r), (r = o)), !!M(r)))
          return (
            (s = f.call(arguments, 2)),
            (c = function () {
              return r.apply(n || this, s.concat(f.call(arguments)));
            }),
            (c.guid = r.guid = r.guid || u.guid++),
            c
          );
      }),
        (u.holdReady = function (r) {
          r ? u.readyWait++ : u.ready(!0);
        }),
        (u.isArray = Array.isArray),
        (u.parseJSON = JSON.parse),
        (u.nodeName = Z),
        (u.isFunction = M),
        (u.isWindow = xe),
        (u.camelCase = Ye),
        (u.type = Ge),
        (u.now = Date.now),
        (u.isNumeric = function (r) {
          var n = u.type(r);
          return (
            (n === "number" || n === "string") && !isNaN(r - parseFloat(r))
          );
        }),
        (u.trim = function (r) {
          return r == null ? "" : (r + "").replace(Xu, "$1");
        }),
        typeof define == "function" &&
          define.amd &&
          define("jquery", [], function () {
            return u;
          });
      var Qu = e.jQuery,
        Zu = e.$;
      return (
        (u.noConflict = function (r) {
          return (
            e.$ === u && (e.$ = Zu), r && e.jQuery === u && (e.jQuery = Qu), u
          );
        }),
        typeof t == "undefined" && (e.jQuery = e.$ = u),
        u
      );
    });
  });
  var ka = xt((dn) => {
    "use strict";
    dn.__esModule = !0;
    dn.detectIncognito = void 0;
    var zf = function () {
      return new Promise(function (e, t) {
        var i = "Unknown";
        function a(ne) {
          e({ isPrivate: ne, browserName: i });
        }
        function f() {
          var ne = navigator.userAgent;
          return ne.match(/Chrome/)
            ? navigator.brave !== void 0
              ? "Brave"
              : ne.match(/Edg/)
              ? "Edge"
              : ne.match(/OPR/)
              ? "Opera"
              : "Chrome"
            : "Chromium";
        }
        function d(ne) {
          return ne === eval.toString().length;
        }
        function m() {
          var ne = navigator.vendor;
          return ne !== void 0 && ne.indexOf("Apple") === 0 && d(37);
        }
        function x() {
          var ne = navigator.vendor;
          return ne !== void 0 && ne.indexOf("Google") === 0 && d(33);
        }
        function _() {
          return (
            document.documentElement !== void 0 &&
            document.documentElement.style.MozAppearance !== void 0 &&
            d(37)
          );
        }
        function T() {
          return navigator.msSaveBlob !== void 0 && d(39);
        }
        function O() {
          var ne = String(Math.random());
          try {
            var Ee = window.indexedDB.open(ne, 1);
            Ee.onupgradeneeded = function (u) {
              var he,
                Z,
                Nt =
                  (he = u.target) === null || he === void 0
                    ? void 0
                    : he.result;
              try {
                Nt.createObjectStore("test", { autoIncrement: !0 }).put(
                  new Blob()
                ),
                  a(!1);
              } catch (te) {
                var hr = te;
                if (
                  (te instanceof Error &&
                    (hr = (Z = te.message) !== null && Z !== void 0 ? Z : te),
                  typeof hr != "string")
                )
                  return a(!1);
                var zn = /BlobURLs are not yet supported/.test(hr);
                return a(zn);
              } finally {
                Nt.close(), window.indexedDB.deleteDatabase(ne);
              }
            };
          } catch (u) {
            return a(!1);
          }
        }
        function C() {
          var ne = window.openDatabase,
            Ee = window.localStorage;
          try {
            ne(null, null, null, null);
          } catch (u) {
            return a(!0);
          }
          try {
            Ee.setItem("test", "1"), Ee.removeItem("test");
          } catch (u) {
            return a(!0);
          }
          return a(!1);
        }
        function z() {
          navigator.maxTouchPoints !== void 0 ? O() : C();
        }
        function I() {
          var ne = window;
          return ne.performance !== void 0 &&
            ne.performance.memory !== void 0 &&
            ne.performance.memory.jsHeapSizeLimit !== void 0
            ? performance.memory.jsHeapSizeLimit
            : 1073741824;
        }
        function M() {
          navigator.webkitTemporaryStorage.queryUsageAndQuota(
            function (ne, Ee) {
              var u = Math.round(Ee / 1048576),
                he = Math.round(I() / (1024 * 1024)) * 2;
              a(u < he);
            },
            function (ne) {
              t(
                new Error(
                  "detectIncognito somehow failed to query storage quota: " +
                    ne.message
                )
              );
            }
          );
        }
        function xe() {
          var ne = window.webkitRequestFileSystem,
            Ee = function () {
              a(!1);
            },
            u = function () {
              a(!0);
            };
          ne(0, 1, Ee, u);
        }
        function H() {
          self.Promise !== void 0 && self.Promise.allSettled !== void 0
            ? M()
            : xe();
        }
        function be() {
          a(navigator.serviceWorker === void 0);
        }
        function kt() {
          a(window.indexedDB === void 0);
        }
        function Ge() {
          m()
            ? ((i = "Safari"), z())
            : x()
            ? ((i = f()), H())
            : _()
            ? ((i = "Firefox"), be())
            : T()
            ? ((i = "Internet Explorer"), kt())
            : t(new Error("detectIncognito cannot determine the browser"));
        }
        Ge();
      });
    };
    dn.detectIncognito = zf;
  });
  var Na = xt((pn) => {
    "use strict";
    Object.defineProperty(pn, "__esModule", { value: !0 });
    pn.AdblockDetector = void 0;
    var bi = class {
      constructor() {
        (this.bannerIds = [
          "AdHeader",
          "AdContainer",
          "AD_Top",
          "homead",
          "ad-lead",
        ]),
          this.init();
      }
      init() {
        let t = document.createElement("div");
        (t.innerHTML = this.generatesBannersString()),
          document.body.appendChild(t);
      }
      detect() {
        return !this.bannerIds.every((t) => this.checkVisibility(t));
      }
      generatesBannersString() {
        return this.bannerIds.map((t) => `<div id="${t}"></div>`).join("");
      }
      checkVisibility(t) {
        let i = document.querySelector(`#${t}`);
        return i ? i.offsetParent : null;
      }
    };
    pn.AdblockDetector = bi;
  });
  var mn = xt((Cr, Ti) => {
    "use strict";
    Object.defineProperty(Cr, "__esModule", { value: !0 });
    Cr.default = Kf;
    function hn(e) {
      "@babel/helpers - typeof";
      return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? (hn = function (i) {
              return typeof i;
            })
          : (hn = function (i) {
              return i &&
                typeof Symbol == "function" &&
                i.constructor === Symbol &&
                i !== Symbol.prototype
                ? "symbol"
                : typeof i;
            }),
        hn(e)
      );
    }
    function Kf(e) {
      var t = typeof e == "string" || e instanceof String;
      if (!t) {
        var i = hn(e);
        throw (
          (e === null
            ? (i = "null")
            : i === "object" && (i = e.constructor.name),
          new TypeError("Expected a string but received a ".concat(i)))
        );
      }
    }
    Ti.exports = Cr.default;
    Ti.exports.default = Cr.default;
  });
  var ki = xt((Dr, wi) => {
    "use strict";
    Object.defineProperty(Dr, "__esModule", { value: !0 });
    Dr.default = Xf;
    function Xf() {
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;
      for (var i in t) typeof e[i] == "undefined" && (e[i] = t[i]);
      return e;
    }
    wi.exports = Dr.default;
    wi.exports.default = Dr.default;
  });
  var Ia = xt((Or, Ni) => {
    "use strict";
    Object.defineProperty(Or, "__esModule", { value: !0 });
    Or.default = tc;
    var Qf = Aa(mn()),
      Zf = Aa(ki());
    function Aa(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ec = {
      require_tld: !0,
      allow_underscores: !1,
      allow_trailing_dot: !1,
      allow_numeric_tld: !1,
      allow_wildcard: !1,
      ignore_max_length: !1,
    };
    function tc(e, t) {
      (0, Qf.default)(e),
        (t = (0, Zf.default)(t, ec)),
        t.allow_trailing_dot &&
          e[e.length - 1] === "." &&
          (e = e.substring(0, e.length - 1)),
        t.allow_wildcard === !0 &&
          e.indexOf("*.") === 0 &&
          (e = e.substring(2));
      var i = e.split("."),
        a = i[i.length - 1];
      return (t.require_tld &&
        (i.length < 2 ||
          (!t.allow_numeric_tld &&
            !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(
              a
            )) ||
          /\s/.test(a))) ||
        (!t.allow_numeric_tld && /^\d+$/.test(a))
        ? !1
        : i.every(function (f) {
            return !(
              (f.length > 63 && !t.ignore_max_length) ||
              !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(f) ||
              /[\uff01-\uff5e]/.test(f) ||
              /^-|-$/.test(f) ||
              (!t.allow_underscores && /_/.test(f))
            );
          });
    }
    Ni.exports = Or.default;
    Ni.exports.default = Or.default;
  });
  var La = xt((Ar, Ci) => {
    "use strict";
    Object.defineProperty(Ar, "__esModule", { value: !0 });
    Ar.default = Ri;
    var rc = nc(mn());
    function nc(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Pa = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
      bt = "(".concat(Pa, "[.]){3}").concat(Pa),
      ic = new RegExp("^".concat(bt, "$")),
      le = "(?:[0-9a-fA-F]{1,4})",
      oc = new RegExp(
        "^(" +
          "(?:".concat(le, ":){7}(?:").concat(le, "|:)|") +
          "(?:".concat(le, ":){6}(?:").concat(bt, "|:").concat(le, "|:)|") +
          "(?:"
            .concat(le, ":){5}(?::")
            .concat(bt, "|(:")
            .concat(le, "){1,2}|:)|") +
          "(?:"
            .concat(le, ":){4}(?:(:")
            .concat(le, "){0,1}:")
            .concat(bt, "|(:")
            .concat(le, "){1,3}|:)|") +
          "(?:"
            .concat(le, ":){3}(?:(:")
            .concat(le, "){0,2}:")
            .concat(bt, "|(:")
            .concat(le, "){1,4}|:)|") +
          "(?:"
            .concat(le, ":){2}(?:(:")
            .concat(le, "){0,3}:")
            .concat(bt, "|(:")
            .concat(le, "){1,5}|:)|") +
          "(?:"
            .concat(le, ":){1}(?:(:")
            .concat(le, "){0,4}:")
            .concat(bt, "|(:")
            .concat(le, "){1,6}|:)|") +
          "(?::((?::"
            .concat(le, "){0,5}:")
            .concat(bt, "|(?::")
            .concat(le, "){1,7}|:))") +
          ")(%[0-9a-zA-Z-.:]{1,})?$"
      );
    function Ri(e) {
      var t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return (
        (0, rc.default)(e),
        (t = String(t)),
        t
          ? t === "4"
            ? ic.test(e)
            : t === "6"
            ? oc.test(e)
            : !1
          : Ri(e, 4) || Ri(e, 6)
      );
    }
    Ci.exports = Ar.default;
    Ci.exports.default = Ar.default;
  });
  var Ba = xt((Ir, Di) => {
    "use strict";
    Object.defineProperty(Ir, "__esModule", { value: !0 });
    Ir.default = yc;
    var ac = gn(mn()),
      sc = gn(Ia()),
      ja = gn(La()),
      uc = gn(ki());
    function gn(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function fc(e, t) {
      return pc(e) || dc(e, t) || lc(e, t) || cc();
    }
    function cc() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function lc(e, t) {
      if (e) {
        if (typeof e == "string") return Ma(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        if (
          (i === "Object" && e.constructor && (i = e.constructor.name),
          i === "Map" || i === "Set")
        )
          return Array.from(e);
        if (
          i === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
        )
          return Ma(e, t);
      }
    }
    function Ma(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
      return a;
    }
    function dc(e, t) {
      if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
        var i = [],
          a = !0,
          f = !1,
          d = void 0;
        try {
          for (
            var m = e[Symbol.iterator](), x;
            !(a = (x = m.next()).done) &&
            (i.push(x.value), !(t && i.length === t));
            a = !0
          );
        } catch (_) {
          (f = !0), (d = _);
        } finally {
          try {
            !a && m.return != null && m.return();
          } finally {
            if (f) throw d;
          }
        }
        return i;
      }
    }
    function pc(e) {
      if (Array.isArray(e)) return e;
    }
    var hc = {
        protocols: ["http", "https", "ftp"],
        require_tld: !0,
        require_protocol: !1,
        require_host: !0,
        require_port: !1,
        require_valid_protocol: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1,
        allow_protocol_relative_urls: !1,
        allow_fragments: !0,
        allow_query_components: !0,
        validate_length: !0,
      },
      mc = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function gc(e) {
      return Object.prototype.toString.call(e) === "[object RegExp]";
    }
    function Ua(e, t) {
      for (var i = 0; i < t.length; i++) {
        var a = t[i];
        if (e === a || (gc(a) && a.test(e))) return !0;
      }
      return !1;
    }
    function yc(e, t) {
      if (
        ((0, ac.default)(e),
        !e ||
          /[\s<>]/.test(e) ||
          e.indexOf("mailto:") === 0 ||
          ((t = (0, uc.default)(t, hc)),
          t.validate_length && e.length >= 2083) ||
          (!t.allow_fragments && e.includes("#")) ||
          (!t.allow_query_components && (e.includes("?") || e.includes("&"))))
      )
        return !1;
      var i, a, f, d, m, x, _, T;
      if (
        ((_ = e.split("#")),
        (e = _.shift()),
        (_ = e.split("?")),
        (e = _.shift()),
        (_ = e.split("://")),
        _.length > 1)
      ) {
        if (
          ((i = _.shift().toLowerCase()),
          t.require_valid_protocol && t.protocols.indexOf(i) === -1)
        )
          return !1;
      } else {
        if (t.require_protocol) return !1;
        if (e.slice(0, 2) === "//") {
          if (!t.allow_protocol_relative_urls) return !1;
          _[0] = e.slice(2);
        }
      }
      if (((e = _.join("://")), e === "")) return !1;
      if (((_ = e.split("/")), (e = _.shift()), e === "" && !t.require_host))
        return !0;
      if (((_ = e.split("@")), _.length > 1)) {
        if (
          t.disallow_auth ||
          _[0] === "" ||
          ((a = _.shift()), a.indexOf(":") >= 0 && a.split(":").length > 2)
        )
          return !1;
        var O = a.split(":"),
          C = fc(O, 2),
          z = C[0],
          I = C[1];
        if (z === "" && I === "") return !1;
      }
      (d = _.join("@")), (x = null), (T = null);
      var M = d.match(mc);
      if (
        (M
          ? ((f = ""), (T = M[1]), (x = M[2] || null))
          : ((_ = d.split(":")),
            (f = _.shift()),
            _.length && (x = _.join(":"))),
        x !== null && x.length > 0)
      ) {
        if (((m = parseInt(x, 10)), !/^[0-9]+$/.test(x) || m <= 0 || m > 65535))
          return !1;
      } else if (t.require_port) return !1;
      return t.host_whitelist
        ? Ua(f, t.host_whitelist)
        : f === "" && !t.require_host
        ? !0
        : !(
            (!(0, ja.default)(f) &&
              !(0, sc.default)(f, t) &&
              (!T || !(0, ja.default)(T, 6))) ||
            ((f = f || T), t.host_blacklist && Ua(f, t.host_blacklist))
          );
    }
    Di.exports = Ir.default;
    Di.exports.default = Ir.default;
  });
  var tu = Qe(vt(), 1);
  var gf =
      typeof global == "object" && global && global.Object === Object && global,
    ma = gf;
  var yf = typeof self == "object" && self && self.Object === Object && self,
    _f = ma || yf || Function("return this")(),
    cn = _f;
  var xf = cn.Symbol,
    ir = xf;
  var ga = Object.prototype,
    vf = ga.hasOwnProperty,
    bf = ga.toString,
    kr = ir ? ir.toStringTag : void 0;
  function Ef(e) {
    var t = vf.call(e, kr),
      i = e[kr];
    try {
      e[kr] = void 0;
      var a = !0;
    } catch (d) {}
    var f = bf.call(e);
    return a && (t ? (e[kr] = i) : delete e[kr]), f;
  }
  var ya = Ef;
  var Sf = Object.prototype,
    Tf = Sf.toString;
  function wf(e) {
    return Tf.call(e);
  }
  var _a = wf;
  var kf = "[object Null]",
    Nf = "[object Undefined]",
    xa = ir ? ir.toStringTag : void 0;
  function Rf(e) {
    return e == null
      ? e === void 0
        ? Nf
        : kf
      : xa && xa in Object(e)
      ? ya(e)
      : _a(e);
  }
  var va = Rf;
  function Cf(e) {
    return e != null && typeof e == "object";
  }
  var ba = Cf;
  var Df = "[object Symbol]";
  function Of(e) {
    return typeof e == "symbol" || (ba(e) && va(e) == Df);
  }
  var Ea = Of;
  var Af = /\s/;
  function If(e) {
    for (var t = e.length; t-- && Af.test(e.charAt(t)); );
    return t;
  }
  var Sa = If;
  var Pf = /^\s+/;
  function Lf(e) {
    return e && e.slice(0, Sa(e) + 1).replace(Pf, "");
  }
  var Ta = Lf;
  function jf(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Nr = jf;
  var wa = 0 / 0,
    Mf = /^[-+]0x[0-9a-f]+$/i,
    Uf = /^0b[01]+$/i,
    Bf = /^0o[0-7]+$/i,
    Ff = parseInt;
  function Hf(e) {
    if (typeof e == "number") return e;
    if (Ea(e)) return wa;
    if (Nr(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = Nr(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = Ta(e);
    var i = Uf.test(e);
    return i || Bf.test(e) ? Ff(e.slice(2), i ? 2 : 8) : Mf.test(e) ? wa : +e;
  }
  var _i = Hf;
  var $f = function () {
      return cn.Date.now();
    },
    ln = $f;
  var qf = "Expected a function",
    Gf = Math.max,
    Wf = Math.min;
  function Yf(e, t, i) {
    var a,
      f,
      d,
      m,
      x,
      _,
      T = 0,
      O = !1,
      C = !1,
      z = !0;
    if (typeof e != "function") throw new TypeError(qf);
    (t = _i(t) || 0),
      Nr(i) &&
        ((O = !!i.leading),
        (C = "maxWait" in i),
        (d = C ? Gf(_i(i.maxWait) || 0, t) : d),
        (z = "trailing" in i ? !!i.trailing : z));
    function I(u) {
      var he = a,
        Z = f;
      return (a = f = void 0), (T = u), (m = e.apply(Z, he)), m;
    }
    function M(u) {
      return (T = u), (x = setTimeout(be, t)), O ? I(u) : m;
    }
    function xe(u) {
      var he = u - _,
        Z = u - T,
        Nt = t - he;
      return C ? Wf(Nt, d - Z) : Nt;
    }
    function H(u) {
      var he = u - _,
        Z = u - T;
      return _ === void 0 || he >= t || he < 0 || (C && Z >= d);
    }
    function be() {
      var u = ln();
      if (H(u)) return kt(u);
      x = setTimeout(be, xe(u));
    }
    function kt(u) {
      return (x = void 0), z && a ? I(u) : ((a = f = void 0), m);
    }
    function Ge() {
      x !== void 0 && clearTimeout(x), (T = 0), (a = _ = f = x = void 0);
    }
    function ne() {
      return x === void 0 ? m : kt(ln());
    }
    function Ee() {
      var u = ln(),
        he = H(u);
      if (((a = arguments), (f = this), (_ = u), he)) {
        if (x === void 0) return M(_);
        if (C) return clearTimeout(x), (x = setTimeout(be, t)), I(_);
      }
      return x === void 0 && (x = setTimeout(be, t)), m;
    }
    return (Ee.cancel = Ge), (Ee.flush = ne), Ee;
  }
  var xi = Yf;
  var It = "https://scripts.stay22.com";
  var Rr = "production";
  var Ce = "https://www.stay22.com";
  var Ra = Qe(vt(), 1),
    Ca = Qe(ka(), 1),
    Da = Qe(Na(), 1);
  var Y = {
    cachedCampaign: null,
    readLS(e) {
      try {
        return window.localStorage[e];
      } catch (t) {
        return;
      }
    },
    saveToLS(e, t) {
      try {
        window.localStorage[e] = t;
      } catch (i) {}
    },
    saveToLSE(e, t, i) {
      i = i * 864e5 || 864e5;
      let a = { value: t, expires_at: Date.now() + i / 1 };
      this.saveToLS(e.toString(), JSON.stringify(a));
    },
    readLSE(e) {
      if (((e = e.toString()), this.readLS(e))) {
        let t = JSON.parse(this.readLS(e));
        if (t)
          if (t.expires_at && t.expires_at < Date.now()) this.deleteLS(e);
          else return t.value;
      }
    },
    deleteLS(e) {
      try {
        delete window.localStorage[e];
      } catch (t) {}
    },
    isLocalStorageAvailable() {
      let e = "test";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch (t) {
        return !1;
      }
    },
    getNumCapitals(e) {
      return e.replace(/[^A-Z]/g, "").length;
    },
    noConsecutiveCapitals(e) {
      return e.replace(/([A-Z]){2,}/g, function (t) {
        return (t = t.toLowerCase()), t.charAt(0).toUpperCase() + t.slice(1);
      });
    },
    slugify(e) {
      return (
        (e = (e || "").toString()),
        e
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9 ]/g, "")
          .replace(/\s+/g, "_")
      );
    },
    autoGenCampaign() {
      if (this.cachedCampaign) return this.cachedCampaign;
      let e = window.location.pathname === "/",
        t = e
          ? ""
          : decodeURIComponent(
              window.location.pathname
                .replace(/\/$/, "")
                .substring(
                  window.location.pathname.replace(/\/$/, "").lastIndexOf("/") +
                    1
                )
            );
      t = t.replace(/\.[^/.]+$/, "");
      let i = /^https?:\/\/[^/]+\/([a-z]{2})\//,
        a = window.location.href.match(i),
        f = "";
      a && a[1].length === 2 && (f = a[1]);
      let d = !e && t !== f ? Y.slugify(t) : "",
        _ = (() => {
          if (window.Stay22.params.campaign)
            return window.Stay22.params.campaign;
          let T = window.location.hostname;
          return (
            T.startsWith("www.") && (T = T.substring(4)),
            T.endsWith(".com") && (T = T.substring(0, T.length - 4)),
            Y.slugify(T)
          );
        })();
      return (
        f && (_ = `${_}-${f}`),
        !e && d && (_ = `${_}-${d}`),
        (this.cachedCampaign = _),
        _
      );
    },
    calculateMatrixDistance: function (e, t) {
      if (!e || !e.length || !t || !t.length) return;
      function i(T) {
        return T * (Math.PI / 180);
      }
      let a = 6371,
        f = i(t[0] - e[0]),
        d = i(t[1] - e[1]),
        m =
          Math.sin(f / 2) * Math.sin(f / 2) +
          Math.cos(i(e[0])) *
            Math.cos(i(t[0])) *
            Math.sin(d / 2) *
            Math.sin(d / 2),
        x = 2 * Math.atan2(Math.sqrt(m), Math.sqrt(1 - m));
      return a * x * 1e3;
    },
    getUserDistanceToDestination(e, t) {
      let i = null;
      if (t) {
        let a = this.calculateMatrixDistance(t.latLng, e.userLatLng);
        a && (i = Math.round(a));
      }
      return i;
    },
    extendDefaults(e, t) {
      let i = {};
      for (let a in e)
        if (typeof e[a] == "object" && e[a] !== null)
          if (Array.isArray(e[a])) {
            let f = e[a],
              d = t[a];
            i[a] = d !== void 0 ? Array.from(new Set(f.concat(d))) : f;
          } else i[a] = this.extendDefaults(e[a], t[a] || {});
        else i[a] = t[a] !== void 0 ? t[a] : e[a];
      return i;
    },
    getAllezURL(e, t) {
      let i = new URL(`${Ce}${e}`);
      i.searchParams.set("aid", window.Stay22.params.aid),
        i.searchParams.set("campaign", this.autoGenCampaign()),
        i.searchParams.set("product", "lma"),
        i.searchParams.set("habl", String(window.Stay22.habl)),
        i.searchParams.set("isinc", String(window.Stay22.isInc));
      for (let a in t) t[a] !== null && i.searchParams.set(a, t[a]);
      return i.toString();
    },
  };
  var Pt = Object.freeze({
    booking: {
      config: {
        allowRoot: !0,
        includePath: [],
        excludePath: [],
        defaultCategory: "accommodation",
      },
      domains: ["booking.com"],
      categories: ["accommodation"],
    },
    vrbo: {
      config: {
        allowRoot: !0,
        includePath: [],
        excludePath: [],
        defaultCategory: "accommodation",
      },
      categories: ["accommodation"],
      domains: [
        "abritel.fr",
        "bookabach.co.nz",
        "fewo-direkt.de",
        "homeaway.ca",
        "homeaway.co.id",
        "homeaway.co.in",
        "homeaway.co.kr",
        "homeaway.co.nz",
        "homeaway.co.uk",
        "homeaway.com.au",
        "homeaway.com.br",
        "homeaway.com.sg",
        "homeaway.com",
        "homeaway.es",
        "homeaway.it",
        "stayz.com.au",
        "vrbo.com",
      ],
    },
    expedia: {
      config: {
        allowRoot: !0,
        includePath: [],
        excludePath: ["/inspire/"],
        defaultCategory: "accommodation",
      },
      categories: [
        "flight",
        "accommodation",
        "activity",
        "car",
        "package",
        "cruise",
      ],
      domains: [
        "ebookers.co.uk",
        "ebookers.com",
        "ebookers.de",
        "ebookers.fr",
        "ebookers.nl",
        "expedia.at",
        "expedia.be",
        "expedia.ca",
        "expedia.ch",
        "expedia.co.id",
        "expedia.co.in",
        "expedia.co.jp",
        "expedia.co.kr",
        "expedia.co.nz",
        "expedia.co.th",
        "expedia.co.uk",
        "expedia.com.ar",
        "expedia.com.au",
        "expedia.com.br",
        "expedia.com.hk",
        "expedia.com.my",
        "expedia.com.ph",
        "expedia.com.sg",
        "expedia.com.tw",
        "expedia.com.vn",
        "expedia.com",
        "expedia.de",
        "expedia.dk",
        "expedia.es",
        "expedia.fi",
        "expedia.fr",
        "expedia.ie",
        "expedia.it",
        "expedia.mx",
        "expedia.nl",
        "expedia.no",
        "expedia.se",
        "orbitz.ca",
        "orbitz.com",
        "travelocity.ca",
        "travelocity.com",
        "wotif.co.nz",
        "wotif.com.au",
        "wotif.com",
      ],
    },
    hotelscom: {
      config: {
        allowRoot: !0,
        includePath: [],
        excludePath: [],
        defaultCategory: "accommodation",
      },
      categories: ["accommodation"],
      domains: ["hoteis.com", "hoteles.com", "hotels.com"],
    },
    tripadvisor: {
      config: {
        allowRoot: !0,
        includePath: [
          "/tourism",
          "/hotels",
          "/hotel",
          "/Hotel_Review",
          "/HotelHighlight",
          "/VacationRentals",
          "/SmartDeals",
        ],
        excludePath: [],
        defaultCategory: "accommodation",
      },
      categories: ["accommodation"],
      domains: [
        "tripadvisor.ar",
        "tripadvisor.at",
        "tripadvisor.ca",
        "tripadvisor.ch",
        "tripadvisor.cn",
        "tripadvisor.co.hu",
        "tripadvisor.co.id",
        "tripadvisor.co.il",
        "tripadvisor.co.kr",
        "tripadvisor.co.nz",
        "tripadvisor.co.uk",
        "tripadvisor.co",
        "tripadvisor.com.au",
        "tripadvisor.com.br",
        "tripadvisor.com.hk",
        "tripadvisor.com.my",
        "tripadvisor.com.pe",
        "tripadvisor.com.ph",
        "tripadvisor.com.sg",
        "tripadvisor.com.tw",
        "tripadvisor.com.vn",
        "tripadvisor.com",
        "tripadvisor.cz",
        "tripadvisor.de",
        "tripadvisor.dk",
        "tripadvisor.es",
        "tripadvisor.fi",
        "tripadvisor.ie",
        "tripadvisor.in",
        "tripadvisor.it",
        "tripadvisor.jp",
        "tripadvisor.nl",
        "tripadvisor.rs",
        "tripadvisor.ru",
        "tripadvisor.sk",
        "tripadvisor.tr",
      ],
    },
    kayak: {
      config: {
        allowRoot: !0,
        includePath: [],
        excludePath: [],
        defaultCategory: "flight",
      },
      categories: [
        "flight",
        "accommodation",
        "car",
        "package",
        "transportation",
      ],
      domains: [
        "cheapflights.ca",
        "cheapflights.co.nz",
        "cheapflights.co.uk",
        "cheapflights.co.za",
        "cheapflights.com.au",
        "cheapflights.com.hk",
        "cheapflights.com.ph",
        "cheapflights.com.sg",
        "cheapflights.com",
        "cheapflights.id",
        "cheapflights.my",
        "cheapflights.qa",
        "kayak.ae",
        "kayak.cat",
        "kayak.ch",
        "kayak.cl",
        "kayak.co.id",
        "kayak.co.in",
        "kayak.co.jp",
        "kayak.co.kr",
        "kayak.co.th",
        "kayak.co.uk",
        "kayak.com.ar",
        "kayak.com.au",
        "kayak.com.au",
        "kayak.com.br",
        "kayak.com.co",
        "kayak.com.hk",
        "kayak.com.mx",
        "kayak.com.my",
        "kayak.com.pe",
        "kayak.com.tr",
        "kayak.com",
        "kayak.de",
        "kayak.dk",
        "kayak.es",
        "kayak.fr",
        "kayak.ie",
        "kayak.it",
        "kayak.nl",
        "kayak.no",
        "kayak.pl",
        "kayak.pt",
        "kayak.ru",
        "kayak.se",
        "kayak.sg",
        "momondo.at",
        "momondo.be",
        "momondo.by",
        "momondo.ca",
        "momondo.ch",
        "momondo.cl",
        "momondo.co.nz",
        "momondo.co.uk",
        "momondo.co.za",
        "momondo.com.ar",
        "momondo.com.au",
        "momondo.com.br",
        "momondo.com.co",
        "momondo.com.pe",
        "momondo.com.tr",
        "momondo.com",
        "momondo.cz",
        "momondo.de",
        "momondo.dk",
        "momondo.ee",
        "momondo.es",
        "momondo.fi",
        "momondo.fr",
        "momondo.hk",
        "momondo.ie",
        "momondo.in",
        "momondo.it",
        "momondo.kz",
        "momondo.mx",
        "momondo.nl",
        "momondo.no",
        "momondo.pl",
        "momondo.pt",
        "momondo.ro",
        "momondo.ru",
        "momondo.se",
        "momondo.tw",
        "momondo.ua",
        "mundi.com.br",
        "swoodoo.at",
        "swoodoo.ch",
        "swoodoo.com",
      ],
    },
  });
  var Ei = [
      "fave.co/",
      "anrdoezrs.net/",
      "kqzyfj.com/",
      "dpbolvw.net/",
      "tkqlhce.com/",
      "jdoqocy.com/",
      "tp.st/",
      "tp.media/",
      "prf.hn/",
      "skimresources.com/",
      "awin1.com/",
    ],
    Oa = function () {
      return ue(this, null, function* () {
        var d, m, x, _, T, O, C, z, I, M, xe, H;
        let e = window.Stay22;
        (e.params = e.params || {}),
          (e.version = "0.29.0"),
          (e.params.aid = e.params.aid || ""),
          (e.params.installationMethod =
            e.params.installationMethod || "manual"),
          Array.isArray(e.params.excludes) ||
            (e.params.excludes = e.params.excludes
              ? e.params.excludes.split(",")
              : []),
          Array.isArray(e.params.deepStruct) ||
            (e.params.deepStruct = e.params.deepStruct
              ? e.params.deepStruct.split(",")
              : []),
          (e.params.deepStruct = Jf(e.params.deepStruct)),
          (e.params.campaign = e.params.campaign || ""),
          (e.params.disablePop = e.params.disablePop || !1),
          e.params.disablePop && (e.params.maxPLevel = "under"),
          (e.params.maxPLevel = e.params.maxPLevel || "full"),
          (e.params.allowPropagation = e.params.allowPropagation || !1),
          (e.params.inline = {
            enabled: ((d = e.params.inline) == null ? void 0 : d.enabled) || !1,
            medium:
              ((m = e.params.inline) == null ? void 0 : m.medium) || "inline",
            providers:
              (((_ = (x = e.params.inline) == null ? void 0 : x.providers) ==
              null
                ? void 0
                : _.length) &&
                ((T = e.params.inline) == null ? void 0 : T.providers)) ||
              [],
            categories:
              (((C = (O = e.params.inline) == null ? void 0 : O.categories) ==
              null
                ? void 0
                : C.length) &&
                ((z = e.params.inline) == null ? void 0 : z.categories)) ||
              [],
            presentationText:
              ((I = e.params.inline) == null ? void 0 : I.presentationText) ||
              "",
          }),
          (e.params.keepItPretty = e.params.keepItPretty || !1),
          (e.params.ab = {
            allez: ((M = e.params.ab) == null ? void 0 : M.allez) || !1,
            pop: ((xe = e.params.ab) == null ? void 0 : xe.pop) || !1,
            inline: ((H = e.params.ab) == null ? void 0 : H.inline) || !1,
          });
        let t = Object.values(e.params.ab).some((be) => be === !0),
          i = !1;
        try {
          i = new Da.AdblockDetector().detect();
        } catch (be) {
          i = !1;
        }
        let a = !1;
        try {
          a = (yield (0, Ca.detectIncognito)()).isPrivate;
        } catch (be) {
          a = !1;
        }
        (e.habl = i), (e.isInc = a);
        let f = null;
        try {
          f = yield Ra.default.ajax({
            url: `${Ce}/ext/partner`,
            data: {
              aid: e.params.aid,
              campaign: Y.autoGenCampaign(),
              product: "lma",
              installationMethod: e.params.installationMethod,
              version: e.version,
              hasadblocker: e.habl,
              isinc: e.isInc,
              excludes: e.params.excludes,
              ab: t,
              referrer: String(window.location.href).substring(0, 512),
            },
            dataType: "jsonp",
          });
        } catch (be) {}
        return (
          f
            ? ((e.params.aid = f.name),
              f.lmaSettings &&
                (e.params = Y.extendDefaults(e.params, f.lmaSettings)),
              (e.userData = f.userData || {}),
              (e.supportedSa = f.supportedSa || []))
            : Rr !== "production" &&
              console.log(
                "Error loading partner data, make sure frontend.git is running via `npm run dev`"
              ),
          (e.params.included = Vf(e.params.excludes)),
          e
        );
      });
    };
  function Vf(e = []) {
    let t = [];
    for (let i in Pt) e.includes(i) || t.push(...Pt[i].domains);
    return t.sort();
  }
  function Jf(e) {
    return [...new Set([...e, ...Ei])];
  }
  var st = Qe(vt(), 1);
  var Si = {
    canCookResult: null,
    hit(e) {
      return ue(this, null, function* () {
        let t = "lma22-ttpu",
          i = "p, h1, h2, h3, h4, h5, h6",
          a = yield this.getPopProvider(
            window.Stay22.userData,
            window.Stay22.params.aid
          );
        if (!(Y.readLSE(t) || !a)) {
          if (yield this.pit(a, !1)) return !1;
          window.Stay22.userData.browserName.toLowerCase().includes("chrome") &&
            (i = "h1, h2, h3, h4, h5, h6"),
            (0, st.default)(i).on("click.ttpu", (f) => {
              let d = f.target;
              for (; d && !(0, st.default)(d).is(i); ) {
                if (d.href || d.onclick) return;
                d = d.parentElement;
              }
              if (!Y.readLSE(t)) {
                if (
                  (f.stopImmediatePropagation(),
                  f.preventDefault(),
                  window.Stay22.userData.isDesktop)
                ) {
                  let m = Y.getAllezURL(`/allez/${a}`, {
                    address: e,
                    source: "pop",
                    medium: "underpop",
                  });
                  this.underPop(m);
                } else if (window.Stay22.params.maxPLevel === "full") {
                  let m = Y.getAllezURL(`/allez/${a}`, {
                    address: e,
                    source: "pop",
                    medium: "overpop",
                  });
                  this.overPop(m);
                }
                (0, st.default)(i).off("click.ttpu"),
                  Y.saveToLSE(t, !0, 40),
                  this.pit(a, !0);
              }
            });
        }
      });
    },
    underPop(e) {
      let t = screen.width - 100,
        i = screen.height - 100,
        a = window.open("", "sa", `width=1,height=1,left=${t},top=${i}`);
      a &&
        (a.onblur = function () {
          a.resizeTo(
            window.document.body.clientWidth,
            window.document.body.clientHeight
          ),
            (a.document.location = e);
        });
    },
    overPop(e) {
      window.open(e, "_blank");
    },
    loadSa(e, t) {
      return ue(this, null, function* () {
        let i = window.Stay22.userData;
        if (i.device === "desktop") {
          let a = i.browserName.toLowerCase();
          if (!(a.includes("chrome") || a.includes("safari"))) return;
          let f = yield this.canCook(),
            d = f.supported,
            m = f.timedOut;
          if (!d || m) return !1;
          (yield this.getPixProviders(
            window.Stay22.userData,
            (t == null ? void 0 : t.geoData) || null,
            window.Stay22.params.aid
          )).forEach((_) =>
            ue(this, null, function* () {
              e.includes(_) ||
                this.pix(_, (t == null ? void 0 : t.destination) || null);
            })
          );
        }
      });
    },
    getPixProviders(e, t, i) {
      return ue(this, null, function* () {
        let a = Y.getUserDistanceToDestination(e, t),
          f = {
            product: "lma",
            userCountry: e.countryCode,
            distanceUserFromVenue: a,
            baseAID: i,
            destCountry: t == null ? void 0 : t.country,
            geo_gap: t == null ? void 0 : t.gap,
            destTimezone: t == null ? void 0 : t.timezone,
            userTimezone: e.userTimezone,
            osName: e.osName,
          };
        try {
          return (yield st.default.ajax({
            url: `${Ce}/ext/predict/pixguardian`,
            data: f,
            dataType: "jsonp",
          })).supportedSa;
        } catch (d) {
          return [];
        }
      });
    },
    getPopProvider(e, t) {
      return ue(this, null, function* () {
        let i = {
          product: "lma",
          userCountry: e.countryCode,
          baseAID: t,
          userTimezone: e.userTimezone,
          osName: e.osName,
          device: e.device,
        };
        try {
          return (yield st.default.ajax({
            url: `${Ce}/ext/predict/ouguardian`,
            data: i,
            dataType: "jsonp",
          })).supportedOu;
        } catch (a) {
          return null;
        }
      });
    },
    pit(e, t) {
      return ue(this, null, function* () {
        let i = null;
        try {
          let a = yield st.default.ajax({
            url: `${Ce}/ext/verifyll`,
            data: { supplier: e, save: t },
            dataType: "jsonp",
          });
          i = a && a.result;
        } catch (a) {}
        return i;
      });
    },
    pix(e, t) {
      return ue(this, null, function* () {
        let i = `blb-${e}`;
        if (Y.readLSE(i) || (Y.saveToLSE(i, !0, 40), yield this.pit(e, !0)))
          return !1;
        (0, st.default)("<img/>")
          .attr({
            src: Y.getAllezURL(`/allez/${e}`, {
              address: t,
              source: "pop",
              medium: "llpop",
              framable: "true",
            }),
            width: 1,
            height: 1,
            id: i,
          })
          .appendTo("body"),
          window.setTimeout(function () {
            (0, st.default)(`#${i}`).remove();
          }, 18222);
      });
    },
    canCook() {
      return ue(this, null, function* () {
        return this.canCookResult
          ? this.canCookResult
          : new Promise((e) => {
              let t = document.createElement("iframe");
              (t.id = "3pc"),
                t.setAttribute("sandbox", "allow-scripts allow-same-origin"),
                (t.src = "https://www.kit22.com/22pccheck"),
                (t.style.display = "none"),
                (t.style.position = "fixed");
              let i,
                a = (f) => {
                  if (f.data === "22pccheck.s" || f.data === "22pccheck.u") {
                    i = f.data === "22pccheck.s";
                    let d = { supported: i, timedOut: !1 };
                    (this.canCookResult = d),
                      e(d),
                      document.getElementById("3pc") &&
                        document.body.removeChild(t),
                      window.removeEventListener("message", a);
                  }
                };
              window.addEventListener("message", a, !1),
                setTimeout(() => {
                  if (!i) {
                    i = !1;
                    let f = { supported: i, timedOut: !0 };
                    (this.canCookResult = f),
                      e(f),
                      document.getElementById("3pc") &&
                        document.body.removeChild(t);
                  }
                }, 4200),
                document.body.appendChild(t);
            });
      });
    },
  };
  var ut = Qe(vt(), 1);
  var Lt = {
    _getLocationSummary: null,
    _requestLocationSummary: null,
    getLocationSummary() {
      if (this._getLocationSummary) return this._getLocationSummary;
      let e = document.title || "",
        t = e;
      try {
        t = (0, ut.default)("meta[property='og:title']").attr("content") || "";
      } catch (O) {}
      let i = "";
      try {
        i = (0, ut.default)("meta[name='description']").attr("content") || "";
      } catch (O) {}
      let a = i;
      try {
        a =
          (0, ut.default)("meta[property='og:description']").attr("content") ||
          "";
      } catch (O) {}
      let f = "";
      try {
        let O = (0, ut.default)("p:first")[0];
        f = this.getTextNodes(O).join(" ").trim();
      } catch (O) {}
      let d = "";
      try {
        let O = (0, ut.default)("h1:first")[0];
        d = this.getTextNodes(O).join(" ").trim();
      } catch (O) {}
      let m = "";
      try {
        let O = (0, ut.default)("h2:first")[0];
        m = this.getTextNodes(O).join(" ").trim();
      } catch (O) {}
      (e = Y.noConsecutiveCapitals(e.trim())),
        (i = Y.noConsecutiveCapitals(i.trim())),
        (t = Y.noConsecutiveCapitals(t.trim())),
        (a = Y.noConsecutiveCapitals(a.trim())),
        (f = f.trim()),
        (d = Y.noConsecutiveCapitals(d.trim())),
        (m = Y.noConsecutiveCapitals(m.trim()));
      let x, _;
      if (e !== t) {
        let O = Y.getNumCapitals(e),
          C = Y.getNumCapitals(t);
        O > C ? (x = e) : (x = t);
      } else x = e;
      if (i !== a) {
        let O = Y.getNumCapitals(i),
          C = Y.getNumCapitals(a);
        O > C ? (_ = i) : (_ = a);
      } else _ = i;
      let T = (`${x} ${_} ${f} ${d} ${m}` || "").trim().replace(/\s+/g, " ");
      return (this._getLocationSummary = T), T;
    },
    requestLocationSummary(e) {
      return ue(this, null, function* () {
        if (!e) return null;
        if (this._requestLocationSummary)
          return yield this._requestLocationSummary;
        let t = (() =>
          ue(this, null, function* () {
            try {
              let i = yield ut.default.ajax({
                  url: `${It}/api/lehf`,
                  type: "POST",
                  data: JSON.stringify({
                    ref: window.location.href,
                    content: e,
                  }),
                  dataType: "json",
                  jsonp: !1,
                  crossDomain: !0,
                  headers: { "Content-Type": "application/json" },
                }),
                a = i.location;
              return a ? { destination: a, geoData: i.formatedGeoData } : null;
            } catch (i) {
              return (this._requestLocationSummary = null), null;
            }
          }))();
        return (this._requestLocationSummary = t), yield t;
      });
    },
    getTextNodes(e) {
      let t = [];
      if (e.nodeType === Node.TEXT_NODE)
        e.textContent !== null && t.push(e.textContent);
      else if (!(0, ut.default)(e).is("script, img, iframe, video, noscript"))
        for (let i of e.childNodes) t = t.concat(this.getTextNodes(i));
      return t;
    },
  };
  var Ne = Qe(vt(), 1),
    Ha = Qe(Ba(), 1);
  var _c = function (e) {
    let t = (0, Ne.default)(e.currentTarget);
    window.Stay22.params.allowPropagation || e.stopImmediatePropagation();
    let i = t.attr("href");
    if (i && i.includes(Ce)) return !0;
    e.preventDefault();
    let a = t.data("s22url") || i;
    window.open(a);
  };
  function Fa(e, t) {
    window.Stay22.params.keepItPretty || e.attr("href", t),
      e.attr("target", "_blank"),
      e.data("s22url", t),
      e.off("click mousedown touchstart"),
      e.removeAttr("onclick"),
      e.on("click", _c);
  }
  var Pr = {
      addModifiedHref(e) {
        return e.filter((t, i) => {
          var d, m;
          let a = (0, Ne.default)(i),
            f = (d = a.attr("href")) != null ? d : "";
          return f
            ? (f.startsWith("http") ||
                (f = f.startsWith("//")
                  ? window.location.protocol + f
                  : f.startsWith("/")
                  ? window.location.origin + f
                  : window.location.origin + "/" + f),
              (f = (m = bc(f)) != null ? m : ""),
              f ? (a.data("modifiedHref", f), !0) : !1)
            : !1;
        });
      },
      unfurlHrefs(e, t) {
        return ue(this, null, function* () {
          let i = e.filter((f, d) => {
              let x = (0, Ne.default)(d).data("modifiedHref");
              return t.some((_) => x.includes(_));
            }),
            a = i
              .map((f, d) => (0, Ne.default)(d).data("modifiedHref"))
              .toArray();
          if (a.length)
            try {
              (yield Ne.default.ajax({
                url: `${It}/api/deep22`,
                type: "POST",
                data: JSON.stringify({ urls: a }),
                dataType: "json",
                jsonp: !1,
                crossDomain: !0,
                headers: { "Content-Type": "application/json" },
              })).responses.forEach((d) => {
                if (!d.finalUrl) return;
                i.filter(function () {
                  return (0, Ne.default)(this).data("modifiedHref") === d.url;
                }).data("modifiedHref", d.finalUrl);
              });
            } catch (f) {}
        });
      },
      transformANYtoANYAllez(e, t) {
        let i = e.filter((f, d) => {
            let x = (0, Ne.default)(d).data("modifiedHref");
            return t.some(
              (_) =>
                x.includes(_) &&
                (x[x.indexOf(_) - 1] === "." || x[x.indexOf(_) - 1] === "/")
            );
          }),
          a = [];
        return (
          i.each((f, d) => {
            let m = (0, Ne.default)(d),
              x = m.data("modifiedHref");
            if (!x) return;
            let _ = new URL(x),
              T = xc(_);
            if (T) {
              if (!vc(_, Pt[T].config)) return;
            } else return;
            let O = Y.getAllezURL(`/allez/${T}`, {
              source: "direct",
              medium: "deeplink",
              link: encodeURIComponent(x),
            });
            Fa(m, O), a.push(m);
          }),
          a
        );
      },
      transformHCtoBK(e) {
        return ue(this, null, function* () {
          let t = e.filter(function (f, d) {
              return (
                (0, Ne.default)(d)
                  .data("modifiedHref")
                  .indexOf("hotelscombined.") > -1
              );
            }),
            i = [];
          if (
            (t.each(function (f, d) {
              var C, z;
              let m = (0, Ne.default)(d),
                x = m.data("modifiedHref");
              if (!x) return;
              let _ = new URL(x),
                T = "",
                O = !1;
              if (
                (_.searchParams.forEach(function (I, M) {
                  M === "fileName" && ((O = !0), (T = I));
                }),
                T ||
                  _.searchParams.forEach(function (I, M) {
                    (M === "placeName" || M === "destination") &&
                      ((T = I), T.toLowerCase().includes("hotel:") && (O = !0));
                  }),
                (T = T.substring(T.indexOf(":") + 1)),
                !T)
              ) {
                let I = _.pathname.split("/");
                (T = I.length > 2 ? I[2] : ""),
                  I[1] || (I[1] = ""),
                  I[1].toLowerCase().includes("hotel") && (O = !0),
                  (T =
                    (z =
                      (C = T == null ? void 0 : T.split(",")) == null
                        ? void 0
                        : C.shift()) == null
                      ? void 0
                      : z.replaceAll("-", "_").split(".").shift());
              }
              (T = T || ""),
                i.push({
                  $link: m,
                  hc_key: T,
                  campaign: Y.autoGenCampaign(),
                  isConvertable: O,
                });
            }),
            !i.length)
          )
            return;
          let a = {};
          try {
            a = (yield Ne.default.ajax({
              url: `${It}/api/hcbk`,
              type: "POST",
              data: JSON.stringify({
                hc_keys: i
                  .filter(function (d) {
                    return d.isConvertable;
                  })
                  .map(function (d) {
                    return d.hc_key;
                  }),
              }),
              dataType: "json",
              jsonp: !1,
              crossDomain: !0,
              headers: { "Content-Type": "application/json" },
            })).responses.reduce(function (d, m) {
              return (d[m.hc_key] = m), d;
            }, {});
          } catch (f) {}
          i.forEach(function (f) {
            let d = Y.getAllezURL("/allez/booking", {
              source: "direct",
              medium: "deeplink",
              address: f.hc_key,
            });
            a[f.hc_key] &&
              ((f.fortified = a[f.hc_key]),
              f.fortified.bkid
                ? (d = Y.getAllezURL(`/allez/booking/${f.fortified.bkid}`, {
                    source: "direct",
                    medium: "deeplink",
                  }))
                : f.fortified.data &&
                  (d = Y.getAllezURL("/allez/booking", {
                    source: "direct",
                    medium: "deeplink",
                    address: f.fortified.data.address,
                  }))),
              Fa(f.$link, d);
          });
        });
      },
    },
    $a = {
      findAllHrefs() {
        return (0, Ne.default)("a[href]").not((e, t) => {
          let a = (0, Ne.default)(t).attr("href") || "";
          return !a || a.includes(Ce);
        });
      },
    };
  function xc(e) {
    for (let t in Pt)
      if (Pt[t].domains.some((i) => e.host.includes(i))) return t;
  }
  function vc(e, t) {
    return e.pathname.length <= 1
      ? t.allowRoot
      : t.includePath.length
      ? t.includePath.some((a) =>
          e.pathname.toLowerCase().startsWith(a.toLowerCase())
        )
      : t.excludePath.length
      ? !t.excludePath.some((a) =>
          e.pathname.toLowerCase().startsWith(a.toLowerCase())
        )
      : !0;
  }
  function bc(e) {
    let t;
    try {
      if (
        ((t = new URL(e)),
        !(0, Ha.default)(e, {
          protocols: ["http", "https"],
          require_tld: !0,
          require_protocol: !0,
          validate_length: !1,
        }))
      ) {
        let f = Ec(e);
        t = new URL(f);
      }
    } catch (a) {
      return;
    }
    for (let [a, f] of t.searchParams.entries())
      f.includes("_amcid") && t.searchParams.delete(a),
        (a === "ssp_iabi" || a === "journey_id" || a === "trace_id") &&
          t.searchParams.delete(a);
    let i = t.pathname;
    return (
      i.includes("_amcid") && (i = i.replace(/\/[^/]*_amcid[^/]*\//, "/")),
      (i = i.replace(/\/$/, "") || "/"),
      (e = t.origin + i + t.search),
      e
    );
  }
  function Ec(e) {
    if (
      ((e = e.replace(/\s+/g, "")),
      (e = decodeURIComponent(e)),
      e.indexOf("http://") === 0 ||
        e.indexOf("http://=") === 0 ||
        e.indexOf("https://https//") === 0)
    ) {
      let t = e.indexOf("https", e.indexOf("//") + 2),
        i = e.indexOf("http", e.indexOf("//") + 2),
        a = Math.min(t !== -1 ? t : 1 / 0, i !== -1 ? i : 1 / 0);
      if (a !== 1 / 0) {
        let f = e.substring(a, a + 5) === "https" ? "https://" : "http://";
        e = f + e.substring(a + (f.length - 1));
      } else e = e.replace(/http:\/\/=|http:\/\/|https:\/\/https\/\//gi, "");
    }
    return e;
  }
  var Oi = class {
      constructor() {
        this.initialize();
      }
      getVersion() {
        return Y.readLS("abTestVersion22");
      }
      setVersion(t) {
        if (t !== "control" && t !== "test")
          throw new Error(
            `Invalid version "${t}". Must be either "control" or "test".`
          );
        Y.saveToLS("abTestVersion22", t);
      }
      initialize() {
        if (!this.getVersion()) {
          let t = Math.random() < 0.5 ? "control" : "test";
          this.setVersion(t);
        }
      }
    },
    qa = Oi;
  var Ga = Object.prototype.toString;
  function Lr(e) {
    switch (Ga.call(e)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return ft(e, Error);
    }
  }
  function or(e, t) {
    return Ga.call(e) === `[object ${t}]`;
  }
  function ar(e) {
    return or(e, "ErrorEvent");
  }
  function yn(e) {
    return or(e, "DOMError");
  }
  function Ai(e) {
    return or(e, "DOMException");
  }
  function Pe(e) {
    return or(e, "String");
  }
  function sr(e) {
    return e === null || (typeof e != "object" && typeof e != "function");
  }
  function Be(e) {
    return or(e, "Object");
  }
  function jt(e) {
    return typeof Event != "undefined" && ft(e, Event);
  }
  function Ii(e) {
    return typeof Element != "undefined" && ft(e, Element);
  }
  function Pi(e) {
    return or(e, "RegExp");
  }
  function Mt(e) {
    return !!(e && e.then && typeof e.then == "function");
  }
  function Li(e) {
    return (
      Be(e) &&
      "nativeEvent" in e &&
      "preventDefault" in e &&
      "stopPropagation" in e
    );
  }
  function ji(e) {
    return typeof e == "number" && e !== e;
  }
  function ft(e, t) {
    try {
      return e instanceof t;
    } catch (i) {
      return !1;
    }
  }
  function _n(e) {
    return e && e.Math == Math ? e : void 0;
  }
  var me =
    (typeof globalThis == "object" && _n(globalThis)) ||
    (typeof window == "object" && _n(window)) ||
    (typeof self == "object" && _n(self)) ||
    (typeof global == "object" && _n(global)) ||
    (function () {
      return this;
    })() ||
    {};
  function Fe() {
    return me;
  }
  function Ut(e, t, i) {
    let a = i || me,
      f = (a.__SENTRY__ = a.__SENTRY__ || {});
    return f[e] || (f[e] = t());
  }
  var Sc = Fe(),
    Tc = 80;
  function ur(e, t = {}) {
    try {
      let i = e,
        a = 5,
        f = [],
        d = 0,
        m = 0,
        x = " > ",
        _ = x.length,
        T,
        O = Array.isArray(t) ? t : t.keyAttrs,
        C = (!Array.isArray(t) && t.maxStringLength) || Tc;
      for (
        ;
        i &&
        d++ < a &&
        ((T = wc(i, O)),
        !(T === "html" || (d > 1 && m + f.length * _ + T.length >= C)));

      )
        f.push(T), (m += T.length), (i = i.parentNode);
      return f.reverse().join(x);
    } catch (i) {
      return "<unknown>";
    }
  }
  function wc(e, t) {
    let i = e,
      a = [],
      f,
      d,
      m,
      x,
      _;
    if (!i || !i.tagName) return "";
    a.push(i.tagName.toLowerCase());
    let T =
      t && t.length
        ? t.filter((C) => i.getAttribute(C)).map((C) => [C, i.getAttribute(C)])
        : null;
    if (T && T.length)
      T.forEach((C) => {
        a.push(`[${C[0]}="${C[1]}"]`);
      });
    else if ((i.id && a.push(`#${i.id}`), (f = i.className), f && Pe(f)))
      for (d = f.split(/\s+/), _ = 0; _ < d.length; _++) a.push(`.${d[_]}`);
    let O = ["aria-label", "type", "name", "title", "alt"];
    for (_ = 0; _ < O.length; _++)
      (m = O[_]), (x = i.getAttribute(m)), x && a.push(`[${m}="${x}"]`);
    return a.join("");
  }
  function Mi() {
    try {
      return Sc.document.location.href;
    } catch (e) {
      return "";
    }
  }
  var kc = "Sentry Logger ",
    fr = ["debug", "info", "warn", "error", "log", "assert", "trace"];
  function xn(e) {
    if (!("console" in me)) return e();
    let t = me.console,
      i = {};
    fr.forEach((a) => {
      let f = t[a] && t[a].__sentry_original__;
      a in t && f && ((i[a] = t[a]), (t[a] = f));
    });
    try {
      return e();
    } finally {
      Object.keys(i).forEach((a) => {
        t[a] = i[a];
      });
    }
  }
  function Wa() {
    let e = !1,
      t = {
        enable: () => {
          e = !0;
        },
        disable: () => {
          e = !1;
        },
      };
    return (
      typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__
        ? fr.forEach((i) => {
            t[i] = (...a) => {
              e &&
                xn(() => {
                  me.console[i](`${kc}[${i}]:`, ...a);
                });
            };
          })
        : fr.forEach((i) => {
            t[i] = () => {};
          }),
      t
    );
  }
  var B;
  typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__
    ? (B = Ut("logger", Wa))
    : (B = Wa());
  var Nc = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function Rc(e) {
    return e === "http" || e === "https";
  }
  function Ze(e, t = !1) {
    let {
      host: i,
      path: a,
      pass: f,
      port: d,
      projectId: m,
      protocol: x,
      publicKey: _,
    } = e;
    return `${x}://${_}${t && f ? `:${f}` : ""}@${i}${d ? `:${d}` : ""}/${
      a && `${a}/`
    }${m}`;
  }
  function Ya(e) {
    let t = Nc.exec(e);
    if (!t) {
      console.error(`Invalid Sentry Dsn: ${e}`);
      return;
    }
    let [i, a, f = "", d, m = "", x] = t.slice(1),
      _ = "",
      T = x,
      O = T.split("/");
    if ((O.length > 1 && ((_ = O.slice(0, -1).join("/")), (T = O.pop())), T)) {
      let C = T.match(/^\d+/);
      C && (T = C[0]);
    }
    return za({
      host: d,
      pass: f,
      path: _,
      projectId: T,
      port: m,
      protocol: i,
      publicKey: a,
    });
  }
  function za(e) {
    return {
      protocol: e.protocol,
      publicKey: e.publicKey || "",
      pass: e.pass || "",
      host: e.host,
      port: e.port || "",
      path: e.path || "",
      projectId: e.projectId,
    };
  }
  function Cc(e) {
    if (!(typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__))
      return !0;
    let { port: t, projectId: i, protocol: a } = e;
    return ["protocol", "publicKey", "host", "projectId"].find((m) =>
      e[m] ? !1 : (B.error(`Invalid Sentry Dsn: ${m} missing`), !0)
    )
      ? !1
      : i.match(/^\d+$/)
      ? Rc(a)
        ? t && isNaN(parseInt(t, 10))
          ? (B.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (B.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), !1)
      : (B.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), !1);
  }
  function vn(e) {
    let t = typeof e == "string" ? Ya(e) : za(e);
    if (!(!t || !Cc(t))) return t;
  }
  var ye = class extends Error {
    constructor(t, i = "warn") {
      super(t),
        (this.message = t),
        (this.name = new.target.prototype.constructor.name),
        Object.setPrototypeOf(this, new.target.prototype),
        (this.logLevel = i);
    }
  };
  function Et(e, t = 0) {
    return typeof e != "string" || t === 0 || e.length <= t
      ? e
      : `${e.slice(0, t)}...`;
  }
  function bn(e, t) {
    if (!Array.isArray(e)) return "";
    let i = [];
    for (let a = 0; a < e.length; a++) {
      let f = e[a];
      try {
        i.push(String(f));
      } catch (d) {
        i.push("[value cannot be serialized]");
      }
    }
    return i.join(t);
  }
  function Va(e, t, i = !1) {
    return Pe(e)
      ? Pi(t)
        ? t.test(e)
        : Pe(t)
        ? i
          ? e === t
          : e.includes(t)
        : !1
      : !1;
  }
  function cr(e, t = [], i = !1) {
    return t.some((a) => Va(e, a, i));
  }
  function de(e, t, i) {
    if (!(t in e)) return;
    let a = e[t],
      f = i(a);
    if (typeof f == "function")
      try {
        En(f, a);
      } catch (d) {}
    e[t] = f;
  }
  function lr(e, t, i) {
    Object.defineProperty(e, t, { value: i, writable: !0, configurable: !0 });
  }
  function En(e, t) {
    let i = t.prototype || {};
    (e.prototype = t.prototype = i), lr(e, "__sentry_original__", t);
  }
  function Bt(e) {
    return e.__sentry_original__;
  }
  function Bi(e) {
    return Object.keys(e)
      .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
      .join("&");
  }
  function Sn(e) {
    if (Lr(e))
      return D({ message: e.message, name: e.name, stack: e.stack }, Ka(e));
    if (jt(e)) {
      let t = D(
        {
          type: e.type,
          target: Ja(e.target),
          currentTarget: Ja(e.currentTarget),
        },
        Ka(e)
      );
      return (
        typeof CustomEvent != "undefined" &&
          ft(e, CustomEvent) &&
          (t.detail = e.detail),
        t
      );
    } else return e;
  }
  function Ja(e) {
    try {
      return Ii(e) ? ur(e) : Object.prototype.toString.call(e);
    } catch (t) {
      return "<unknown>";
    }
  }
  function Ka(e) {
    if (typeof e == "object" && e !== null) {
      let t = {};
      for (let i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    } else return {};
  }
  function Fi(e, t = 40) {
    let i = Object.keys(Sn(e));
    if ((i.sort(), !i.length)) return "[object has no keys]";
    if (i[0].length >= t) return Et(i[0], t);
    for (let a = i.length; a > 0; a--) {
      let f = i.slice(0, a).join(", ");
      if (!(f.length > t)) return a === i.length ? f : Et(f, t);
    }
    return "";
  }
  function dr(e) {
    return Ui(e, new Map());
  }
  function Ui(e, t) {
    if (Be(e)) {
      let i = t.get(e);
      if (i !== void 0) return i;
      let a = {};
      t.set(e, a);
      for (let f of Object.keys(e))
        typeof e[f] != "undefined" && (a[f] = Ui(e[f], t));
      return a;
    }
    if (Array.isArray(e)) {
      let i = t.get(e);
      if (i !== void 0) return i;
      let a = [];
      return (
        t.set(e, a),
        e.forEach((f) => {
          a.push(Ui(f, t));
        }),
        a
      );
    }
    return e;
  }
  var Qa = 50,
    Xa = /\(error: (.*)\)/;
  function Tn(...e) {
    let t = e.sort((i, a) => i[0] - a[0]).map((i) => i[1]);
    return (i, a = 0) => {
      let f = [],
        d = i.split(`
`);
      for (let m = a; m < d.length; m++) {
        let x = d[m];
        if (x.length > 1024) continue;
        let _ = Xa.test(x) ? x.replace(Xa, "$1") : x;
        if (!_.match(/\S*Error: /)) {
          for (let T of t) {
            let O = T(_);
            if (O) {
              f.push(O);
              break;
            }
          }
          if (f.length >= Qa) break;
        }
      }
      return Za(f);
    };
  }
  function $i(e) {
    return Array.isArray(e) ? Tn(...e) : e;
  }
  function Za(e) {
    if (!e.length) return [];
    let t = e.slice(0, Qa),
      i = t[t.length - 1].function;
    i && /sentryWrapped/.test(i) && t.pop(), t.reverse();
    let a = t[t.length - 1].function;
    return (
      a && /captureMessage|captureException/.test(a) && t.pop(),
      t.map((f) =>
        ie(D({}, f), {
          filename: f.filename || t[t.length - 1].filename,
          function: f.function || "?",
        })
      )
    );
  }
  var Hi = "<anonymous>";
  function Le(e) {
    try {
      return !e || typeof e != "function" ? Hi : e.name || Hi;
    } catch (t) {
      return Hi;
    }
  }
  var qi = Fe();
  function wn() {
    if (!("fetch" in qi)) return !1;
    try {
      return (
        new Headers(), new Request("http://www.example.com"), new Response(), !0
      );
    } catch (e) {
      return !1;
    }
  }
  function jr(e) {
    return (
      e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    );
  }
  function Gi() {
    if (!wn()) return !1;
    if (jr(qi.fetch)) return !0;
    let e = !1,
      t = qi.document;
    if (t && typeof t.createElement == "function")
      try {
        let i = t.createElement("iframe");
        (i.hidden = !0),
          t.head.appendChild(i),
          i.contentWindow &&
            i.contentWindow.fetch &&
            (e = jr(i.contentWindow.fetch)),
          t.head.removeChild(i);
      } catch (i) {
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            i
          );
      }
    return e;
  }
  var kn = Fe();
  function es() {
    let e = kn.chrome,
      t = e && e.app && e.app.runtime,
      i =
        "history" in kn && !!kn.history.pushState && !!kn.history.replaceState;
    return !t && i;
  }
  var fe = Fe(),
    Ft = "__sentry_xhr_v2__",
    Mr = {},
    ts = {};
  function Dc(e) {
    if (!ts[e])
      switch (((ts[e] = !0), e)) {
        case "console":
          Oc();
          break;
        case "dom":
          Uc();
          break;
        case "xhr":
          Ic();
          break;
        case "fetch":
          Ac();
          break;
        case "history":
          Pc();
          break;
        case "error":
          Bc();
          break;
        case "unhandledrejection":
          Fc();
          break;
        default:
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            B.warn("unknown instrumentation type:", e);
          return;
      }
  }
  function je(e, t) {
    (Mr[e] = Mr[e] || []), Mr[e].push(t), Dc(e);
  }
  function He(e, t) {
    if (!(!e || !Mr[e]))
      for (let i of Mr[e] || [])
        try {
          i(t);
        } catch (a) {
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            B.error(
              `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Le(i)}
Error:`,
              a
            );
        }
  }
  function Oc() {
    "console" in fe &&
      fr.forEach(function (e) {
        e in fe.console &&
          de(fe.console, e, function (t) {
            return function (...i) {
              He("console", { args: i, level: e }), t && t.apply(fe.console, i);
            };
          });
      });
  }
  function Ac() {
    Gi() &&
      de(fe, "fetch", function (e) {
        return function (...t) {
          let { method: i, url: a } = is(t),
            f = {
              args: t,
              fetchData: { method: i, url: a },
              startTimestamp: Date.now(),
            };
          return (
            He("fetch", D({}, f)),
            e.apply(fe, t).then(
              (d) => (
                He(
                  "fetch",
                  ie(D({}, f), { endTimestamp: Date.now(), response: d })
                ),
                d
              ),
              (d) => {
                throw (
                  (He(
                    "fetch",
                    ie(D({}, f), { endTimestamp: Date.now(), error: d })
                  ),
                  d)
                );
              }
            )
          );
        };
      });
  }
  function Wi(e, t) {
    return !!e && typeof e == "object" && !!e[t];
  }
  function rs(e) {
    return typeof e == "string"
      ? e
      : e
      ? Wi(e, "url")
        ? e.url
        : e.toString
        ? e.toString()
        : ""
      : "";
  }
  function is(e) {
    if (e.length === 0) return { method: "GET", url: "" };
    if (e.length === 2) {
      let [i, a] = e;
      return {
        url: rs(i),
        method: Wi(a, "method") ? String(a.method).toUpperCase() : "GET",
      };
    }
    let t = e[0];
    return {
      url: rs(t),
      method: Wi(t, "method") ? String(t.method).toUpperCase() : "GET",
    };
  }
  function Ic() {
    if (!("XMLHttpRequest" in fe)) return;
    let e = XMLHttpRequest.prototype;
    de(e, "open", function (t) {
      return function (...i) {
        let a = i[1],
          f = (this[Ft] = {
            method: Pe(i[0]) ? i[0].toUpperCase() : i[0],
            url: i[1],
            request_headers: {},
          });
        Pe(a) &&
          f.method === "POST" &&
          a.match(/sentry_key/) &&
          (this.__sentry_own_request__ = !0);
        let d = () => {
          let m = this[Ft];
          if (m && this.readyState === 4) {
            try {
              m.status_code = this.status;
            } catch (x) {}
            He("xhr", {
              args: i,
              endTimestamp: Date.now(),
              startTimestamp: Date.now(),
              xhr: this,
            });
          }
        };
        return (
          "onreadystatechange" in this &&
          typeof this.onreadystatechange == "function"
            ? de(this, "onreadystatechange", function (m) {
                return function (...x) {
                  return d(), m.apply(this, x);
                };
              })
            : this.addEventListener("readystatechange", d),
          de(this, "setRequestHeader", function (m) {
            return function (...x) {
              let [_, T] = x,
                O = this[Ft];
              return (
                O && (O.request_headers[_.toLowerCase()] = T), m.apply(this, x)
              );
            };
          }),
          t.apply(this, i)
        );
      };
    }),
      de(e, "send", function (t) {
        return function (...i) {
          let a = this[Ft];
          return (
            a && i[0] !== void 0 && (a.body = i[0]),
            He("xhr", { args: i, startTimestamp: Date.now(), xhr: this }),
            t.apply(this, i)
          );
        };
      });
  }
  var Nn;
  function Pc() {
    if (!es()) return;
    let e = fe.onpopstate;
    fe.onpopstate = function (...i) {
      let a = fe.location.href,
        f = Nn;
      if (((Nn = a), He("history", { from: f, to: a }), e))
        try {
          return e.apply(this, i);
        } catch (d) {}
    };
    function t(i) {
      return function (...a) {
        let f = a.length > 2 ? a[2] : void 0;
        if (f) {
          let d = Nn,
            m = String(f);
          (Nn = m), He("history", { from: d, to: m });
        }
        return i.apply(this, a);
      };
    }
    de(fe.history, "pushState", t), de(fe.history, "replaceState", t);
  }
  var Lc = 1e3,
    Rn,
    Cn;
  function jc(e, t) {
    if (!e || e.type !== t.type) return !0;
    try {
      if (e.target !== t.target) return !0;
    } catch (i) {}
    return !1;
  }
  function Mc(e) {
    if (e.type !== "keypress") return !1;
    try {
      let t = e.target;
      if (!t || !t.tagName) return !0;
      if (
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.isContentEditable
      )
        return !1;
    } catch (t) {}
    return !0;
  }
  function ns(e, t = !1) {
    return (i) => {
      if (!i || Cn === i || Mc(i)) return;
      let a = i.type === "keypress" ? "input" : i.type;
      Rn === void 0
        ? (e({ event: i, name: a, global: t }), (Cn = i))
        : jc(Cn, i) && (e({ event: i, name: a, global: t }), (Cn = i)),
        clearTimeout(Rn),
        (Rn = fe.setTimeout(() => {
          Rn = void 0;
        }, Lc));
    };
  }
  function Uc() {
    if (!("document" in fe)) return;
    let e = He.bind(null, "dom"),
      t = ns(e, !0);
    fe.document.addEventListener("click", t, !1),
      fe.document.addEventListener("keypress", t, !1),
      ["EventTarget", "Node"].forEach((i) => {
        let a = fe[i] && fe[i].prototype;
        !a ||
          !a.hasOwnProperty ||
          !a.hasOwnProperty("addEventListener") ||
          (de(a, "addEventListener", function (f) {
            return function (d, m, x) {
              if (d === "click" || d == "keypress")
                try {
                  let _ = this,
                    T = (_.__sentry_instrumentation_handlers__ =
                      _.__sentry_instrumentation_handlers__ || {}),
                    O = (T[d] = T[d] || { refCount: 0 });
                  if (!O.handler) {
                    let C = ns(e);
                    (O.handler = C), f.call(this, d, C, x);
                  }
                  O.refCount++;
                } catch (_) {}
              return f.call(this, d, m, x);
            };
          }),
          de(a, "removeEventListener", function (f) {
            return function (d, m, x) {
              if (d === "click" || d == "keypress")
                try {
                  let _ = this,
                    T = _.__sentry_instrumentation_handlers__ || {},
                    O = T[d];
                  O &&
                    (O.refCount--,
                    O.refCount <= 0 &&
                      (f.call(this, d, O.handler, x),
                      (O.handler = void 0),
                      delete T[d]),
                    Object.keys(T).length === 0 &&
                      delete _.__sentry_instrumentation_handlers__);
                } catch (_) {}
              return f.call(this, d, m, x);
            };
          }));
      });
  }
  var Dn = null;
  function Bc() {
    (Dn = fe.onerror),
      (fe.onerror = function (e, t, i, a, f) {
        return (
          He("error", { column: a, error: f, line: i, msg: e, url: t }),
          Dn && !Dn.__SENTRY_LOADER__ ? Dn.apply(this, arguments) : !1
        );
      }),
      (fe.onerror.__SENTRY_INSTRUMENTED__ = !0);
  }
  var On = null;
  function Fc() {
    (On = fe.onunhandledrejection),
      (fe.onunhandledrejection = function (e) {
        return (
          He("unhandledrejection", e),
          On && !On.__SENTRY_LOADER__ ? On.apply(this, arguments) : !0
        );
      }),
      (fe.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
  }
  function os() {
    let e = typeof WeakSet == "function",
      t = e ? new WeakSet() : [];
    function i(f) {
      if (e) return t.has(f) ? !0 : (t.add(f), !1);
      for (let d = 0; d < t.length; d++) if (t[d] === f) return !0;
      return t.push(f), !1;
    }
    function a(f) {
      if (e) t.delete(f);
      else
        for (let d = 0; d < t.length; d++)
          if (t[d] === f) {
            t.splice(d, 1);
            break;
          }
    }
    return [i, a];
  }
  function et() {
    let e = me,
      t = e.crypto || e.msCrypto;
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    let i =
      t && t.getRandomValues
        ? () => t.getRandomValues(new Uint8Array(1))[0]
        : () => Math.random() * 16;
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (a) =>
      (a ^ ((i() & 15) >> (a / 4))).toString(16)
    );
  }
  function as(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0;
  }
  function $e(e) {
    let { message: t, event_id: i } = e;
    if (t) return t;
    let a = as(e);
    return a
      ? a.type && a.value
        ? `${a.type}: ${a.value}`
        : a.type || a.value || i || "<unknown>"
      : i || "<unknown>";
  }
  function pr(e, t, i) {
    let a = (e.exception = e.exception || {}),
      f = (a.values = a.values || []),
      d = (f[0] = f[0] || {});
    d.value || (d.value = t || ""), d.type || (d.type = i || "Error");
  }
  function ct(e, t) {
    let i = as(e);
    if (!i) return;
    let a = { type: "generic", handled: !0 },
      f = i.mechanism;
    if (((i.mechanism = D(D(D({}, a), f), t)), t && "data" in t)) {
      let d = D(D({}, f && f.data), t.data);
      i.mechanism.data = d;
    }
  }
  function An(e) {
    if (e && e.__sentry_captured__) return !0;
    try {
      lr(e, "__sentry_captured__", !0);
    } catch (t) {}
    return !1;
  }
  function Ur(e) {
    return Array.isArray(e) ? e : [e];
  }
  function Yi() {
    return (
      typeof __SENTRY_BROWSER_BUNDLE__ != "undefined" &&
      !!__SENTRY_BROWSER_BUNDLE__
    );
  }
  function zi() {
    return "npm";
  }
  function ss() {
    return (
      !Yi() &&
      Object.prototype.toString.call(
        typeof process != "undefined" ? process : 0
      ) === "[object process]"
    );
  }
  function us(e, t) {
    return e.require(t);
  }
  function qe(e, t = 100, i = 1 / 0) {
    try {
      return In("", e, t, i);
    } catch (a) {
      return { ERROR: `**non-serializable** (${a})` };
    }
  }
  function Pn(e, t = 3, i = 100 * 1024) {
    let a = qe(e, t);
    return Gc(a) > i ? Pn(e, t - 1, i) : a;
  }
  function In(e, t, i = 1 / 0, a = 1 / 0, f = os()) {
    let [d, m] = f;
    if (
      t == null ||
      (["number", "boolean", "string"].includes(typeof t) && !ji(t))
    )
      return t;
    let x = Hc(e, t);
    if (!x.startsWith("[object ")) return x;
    if (t.__sentry_skip_normalization__) return t;
    let _ =
      typeof t.__sentry_override_normalization_depth__ == "number"
        ? t.__sentry_override_normalization_depth__
        : i;
    if (_ === 0) return x.replace("object ", "");
    if (d(t)) return "[Circular ~]";
    let T = t;
    if (T && typeof T.toJSON == "function")
      try {
        let I = T.toJSON();
        return In("", I, _ - 1, a, f);
      } catch (I) {}
    let O = Array.isArray(t) ? [] : {},
      C = 0,
      z = Sn(t);
    for (let I in z) {
      if (!Object.prototype.hasOwnProperty.call(z, I)) continue;
      if (C >= a) {
        O[I] = "[MaxProperties ~]";
        break;
      }
      let M = z[I];
      (O[I] = In(I, M, _ - 1, a, f)), C++;
    }
    return m(t), O;
  }
  function Hc(e, t) {
    try {
      if (e === "domain" && t && typeof t == "object" && t._events)
        return "[Domain]";
      if (e === "domainEmitter") return "[DomainEmitter]";
      if (typeof global != "undefined" && t === global) return "[Global]";
      if (typeof window != "undefined" && t === window) return "[Window]";
      if (typeof document != "undefined" && t === document) return "[Document]";
      if (Li(t)) return "[SyntheticEvent]";
      if (typeof t == "number" && t !== t) return "[NaN]";
      if (typeof t == "function") return `[Function: ${Le(t)}]`;
      if (typeof t == "symbol") return `[${String(t)}]`;
      if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
      let i = $c(t);
      return /^HTML(\w*)Element$/.test(i)
        ? `[HTMLElement: ${i}]`
        : `[object ${i}]`;
    } catch (i) {
      return `**non-serializable** (${i})`;
    }
  }
  function $c(e) {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : "null prototype";
  }
  function qc(e) {
    return ~-encodeURI(e).split(/%..|./).length;
  }
  function Gc(e) {
    return qc(JSON.stringify(e));
  }
  var lt;
  (function (e) {
    e[(e.PENDING = 0)] = "PENDING";
    let i = 1;
    e[(e.RESOLVED = i)] = "RESOLVED";
    let a = 2;
    e[(e.REJECTED = a)] = "REJECTED";
  })(lt || (lt = {}));
  function Re(e) {
    return new De((t) => {
      t(e);
    });
  }
  function St(e) {
    return new De((t, i) => {
      i(e);
    });
  }
  var De = class e {
    __init() {
      this._state = lt.PENDING;
    }
    __init2() {
      this._handlers = [];
    }
    constructor(t) {
      e.prototype.__init.call(this),
        e.prototype.__init2.call(this),
        e.prototype.__init3.call(this),
        e.prototype.__init4.call(this),
        e.prototype.__init5.call(this),
        e.prototype.__init6.call(this);
      try {
        t(this._resolve, this._reject);
      } catch (i) {
        this._reject(i);
      }
    }
    then(t, i) {
      return new e((a, f) => {
        this._handlers.push([
          !1,
          (d) => {
            if (!t) a(d);
            else
              try {
                a(t(d));
              } catch (m) {
                f(m);
              }
          },
          (d) => {
            if (!i) f(d);
            else
              try {
                a(i(d));
              } catch (m) {
                f(m);
              }
          },
        ]),
          this._executeHandlers();
      });
    }
    catch(t) {
      return this.then((i) => i, t);
    }
    finally(t) {
      return new e((i, a) => {
        let f, d;
        return this.then(
          (m) => {
            (d = !1), (f = m), t && t();
          },
          (m) => {
            (d = !0), (f = m), t && t();
          }
        ).then(() => {
          if (d) {
            a(f);
            return;
          }
          i(f);
        });
      });
    }
    __init3() {
      this._resolve = (t) => {
        this._setResult(lt.RESOLVED, t);
      };
    }
    __init4() {
      this._reject = (t) => {
        this._setResult(lt.REJECTED, t);
      };
    }
    __init5() {
      this._setResult = (t, i) => {
        if (this._state === lt.PENDING) {
          if (Mt(i)) {
            i.then(this._resolve, this._reject);
            return;
          }
          (this._state = t), (this._value = i), this._executeHandlers();
        }
      };
    }
    __init6() {
      this._executeHandlers = () => {
        if (this._state === lt.PENDING) return;
        let t = this._handlers.slice();
        (this._handlers = []),
          t.forEach((i) => {
            i[0] ||
              (this._state === lt.RESOLVED && i[1](this._value),
              this._state === lt.REJECTED && i[2](this._value),
              (i[0] = !0));
          });
      };
    }
  };
  function Vi(e) {
    let t = [];
    function i() {
      return e === void 0 || t.length < e;
    }
    function a(m) {
      return t.splice(t.indexOf(m), 1)[0];
    }
    function f(m) {
      if (!i())
        return St(
          new ye("Not adding Promise because buffer limit was reached.")
        );
      let x = m();
      return (
        t.indexOf(x) === -1 && t.push(x),
        x.then(() => a(x)).then(null, () => a(x).then(null, () => {})),
        x
      );
    }
    function d(m) {
      return new De((x, _) => {
        let T = t.length;
        if (!T) return x(!0);
        let O = setTimeout(() => {
          m && m > 0 && x(!1);
        }, m);
        t.forEach((C) => {
          Re(C).then(() => {
            --T || (clearTimeout(O), x(!0));
          }, _);
        });
      });
    }
    return { $: t, add: f, drain: d };
  }
  function Br(e) {
    if (!e) return {};
    let t = e.match(
      /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
    );
    if (!t) return {};
    let i = t[6] || "",
      a = t[8] || "";
    return {
      host: t[4],
      path: t[5],
      protocol: t[2],
      search: i,
      hash: a,
      relative: t[5] + i + a,
    };
  }
  var fs = ["fatal", "error", "warning", "log", "info", "debug"];
  function Ji(e) {
    return e === "warn" ? "warning" : fs.includes(e) ? e : "log";
  }
  var ls = Fe(),
    Xi = { nowSeconds: () => Date.now() / 1e3 };
  function Wc() {
    let { performance: e } = ls;
    if (!e || !e.now) return;
    let t = Date.now() - e.now();
    return { now: () => e.now(), timeOrigin: t };
  }
  function Yc() {
    try {
      return us(module, "perf_hooks").performance;
    } catch (e) {
      return;
    }
  }
  var Ki = ss() ? Yc() : Wc(),
    cs =
      Ki === void 0
        ? Xi
        : { nowSeconds: () => (Ki.timeOrigin + Ki.now()) / 1e3 },
    dt = Xi.nowSeconds.bind(Xi),
    Ln = cs.nowSeconds.bind(cs);
  var Fr,
    zc = (() => {
      let { performance: e } = ls;
      if (!e || !e.now) {
        Fr = "none";
        return;
      }
      let t = 3600 * 1e3,
        i = e.now(),
        a = Date.now(),
        f = e.timeOrigin ? Math.abs(e.timeOrigin + i - a) : t,
        d = f < t,
        m = e.timing && e.timing.navigationStart,
        _ = typeof m == "number" ? Math.abs(m + i - a) : t,
        T = _ < t;
      return d || T
        ? f <= _
          ? ((Fr = "timeOrigin"), e.timeOrigin)
          : ((Fr = "navigationStart"), m)
        : ((Fr = "dateNow"), a);
    })();
  function tt(e, t = []) {
    return [e, t];
  }
  function Zi(e, t) {
    let [i, a] = e;
    return [i, [...a, t]];
  }
  function jn(e, t) {
    let i = e[1];
    for (let a of i) {
      let f = a[0].type;
      if (t(a, f)) return !0;
    }
    return !1;
  }
  function Qi(e, t) {
    return (t || new TextEncoder()).encode(e);
  }
  function eo(e, t) {
    let [i, a] = e,
      f = JSON.stringify(i);
    function d(m) {
      typeof f == "string"
        ? (f = typeof m == "string" ? f + m : [Qi(f, t), m])
        : f.push(typeof m == "string" ? Qi(m, t) : m);
    }
    for (let m of a) {
      let [x, _] = m;
      if (
        (d(`
${JSON.stringify(x)}
`),
        typeof _ == "string" || _ instanceof Uint8Array)
      )
        d(_);
      else {
        let T;
        try {
          T = JSON.stringify(_);
        } catch (O) {
          T = JSON.stringify(qe(_));
        }
        d(T);
      }
    }
    return typeof f == "string" ? f : Vc(f);
  }
  function Vc(e) {
    let t = e.reduce((f, d) => f + d.length, 0),
      i = new Uint8Array(t),
      a = 0;
    for (let f of e) i.set(f, a), (a += f.length);
    return i;
  }
  function to(e, t) {
    let i = typeof e.data == "string" ? Qi(e.data, t) : e.data;
    return [
      dr({
        type: "attachment",
        length: i.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType,
      }),
      i,
    ];
  }
  var Jc = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
  };
  function Mn(e) {
    return Jc[e];
  }
  function Un(e) {
    if (!e || !e.sdk) return;
    let { name: t, version: i } = e.sdk;
    return { name: t, version: i };
  }
  function ro(e, t, i, a) {
    let f =
      e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return D(
      D(
        D(
          { event_id: e.event_id, sent_at: new Date().toISOString() },
          t && { sdk: t }
        ),
        !!i && { dsn: Ze(a) }
      ),
      f && { trace: dr(D({}, f)) }
    );
  }
  function no(e, t, i) {
    let a = [
      { type: "client_report" },
      { timestamp: i || dt(), discarded_events: e },
    ];
    return tt(t ? { dsn: t } : {}, [a]);
  }
  function ds(e, t = Date.now()) {
    let i = parseInt(`${e}`, 10);
    if (!isNaN(i)) return i * 1e3;
    let a = Date.parse(`${e}`);
    return isNaN(a) ? 6e4 : a - t;
  }
  function ps(e, t) {
    return e[t] || e.all || 0;
  }
  function io(e, t, i = Date.now()) {
    return ps(e, t) > i;
  }
  function oo(e, { statusCode: t, headers: i }, a = Date.now()) {
    let f = D({}, e),
      d = i && i["x-sentry-rate-limits"],
      m = i && i["retry-after"];
    if (d)
      for (let x of d.trim().split(",")) {
        let [_, T] = x.split(":", 2),
          O = parseInt(_, 10),
          C = (isNaN(O) ? 60 : O) * 1e3;
        if (!T) f.all = a + C;
        else for (let z of T.split(";")) f[z] = a + C;
      }
    else m ? (f.all = a + ds(m, a)) : t === 429 && (f.all = a + 60 * 1e3);
    return f;
  }
  var Bn = "production";
  function hs(e) {
    let t = Ln(),
      i = {
        sid: et(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => Kc(i),
      };
    return e && pt(i, e), i;
  }
  function pt(e, t = {}) {
    if (
      (t.user &&
        (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        !e.did &&
          !t.did &&
          (e.did = t.user.id || t.user.email || t.user.username)),
      (e.timestamp = t.timestamp || Ln()),
      t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
      t.sid && (e.sid = t.sid.length === 32 ? t.sid : et()),
      t.init !== void 0 && (e.init = t.init),
      !e.did && t.did && (e.did = `${t.did}`),
      typeof t.started == "number" && (e.started = t.started),
      e.ignoreDuration)
    )
      e.duration = void 0;
    else if (typeof t.duration == "number") e.duration = t.duration;
    else {
      let i = e.timestamp - e.started;
      e.duration = i >= 0 ? i : 0;
    }
    t.release && (e.release = t.release),
      t.environment && (e.environment = t.environment),
      !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
      !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
      typeof t.errors == "number" && (e.errors = t.errors),
      t.status && (e.status = t.status);
  }
  function ms(e, t) {
    let i = {};
    t ? (i = { status: t }) : e.status === "ok" && (i = { status: "exited" }),
      pt(e, i);
  }
  function Kc(e) {
    return dr({
      sid: `${e.sid}`,
      init: e.init,
      started: new Date(e.started * 1e3).toISOString(),
      timestamp: new Date(e.timestamp * 1e3).toISOString(),
      status: e.status,
      errors: e.errors,
      did:
        typeof e.did == "number" || typeof e.did == "string"
          ? `${e.did}`
          : void 0,
      duration: e.duration,
      attrs: {
        release: e.release,
        environment: e.environment,
        ip_address: e.ipAddress,
        user_agent: e.userAgent,
      },
    });
  }
  var Xc = 100,
    Tt = class e {
      constructor() {
        (this._notifyingListeners = !1),
          (this._scopeListeners = []),
          (this._eventProcessors = []),
          (this._breadcrumbs = []),
          (this._attachments = []),
          (this._user = {}),
          (this._tags = {}),
          (this._extra = {}),
          (this._contexts = {}),
          (this._sdkProcessingMetadata = {});
      }
      static clone(t) {
        let i = new e();
        return (
          t &&
            ((i._breadcrumbs = [...t._breadcrumbs]),
            (i._tags = D({}, t._tags)),
            (i._extra = D({}, t._extra)),
            (i._contexts = D({}, t._contexts)),
            (i._user = t._user),
            (i._level = t._level),
            (i._span = t._span),
            (i._session = t._session),
            (i._transactionName = t._transactionName),
            (i._fingerprint = t._fingerprint),
            (i._eventProcessors = [...t._eventProcessors]),
            (i._requestSession = t._requestSession),
            (i._attachments = [...t._attachments]),
            (i._sdkProcessingMetadata = D({}, t._sdkProcessingMetadata))),
          i
        );
      }
      addScopeListener(t) {
        this._scopeListeners.push(t);
      }
      addEventProcessor(t) {
        return this._eventProcessors.push(t), this;
      }
      setUser(t) {
        return (
          (this._user = t || {}),
          this._session && pt(this._session, { user: t }),
          this._notifyScopeListeners(),
          this
        );
      }
      getUser() {
        return this._user;
      }
      getRequestSession() {
        return this._requestSession;
      }
      setRequestSession(t) {
        return (this._requestSession = t), this;
      }
      setTags(t) {
        return (
          (this._tags = D(D({}, this._tags), t)),
          this._notifyScopeListeners(),
          this
        );
      }
      setTag(t, i) {
        return (
          (this._tags = ie(D({}, this._tags), { [t]: i })),
          this._notifyScopeListeners(),
          this
        );
      }
      setExtras(t) {
        return (
          (this._extra = D(D({}, this._extra), t)),
          this._notifyScopeListeners(),
          this
        );
      }
      setExtra(t, i) {
        return (
          (this._extra = ie(D({}, this._extra), { [t]: i })),
          this._notifyScopeListeners(),
          this
        );
      }
      setFingerprint(t) {
        return (this._fingerprint = t), this._notifyScopeListeners(), this;
      }
      setLevel(t) {
        return (this._level = t), this._notifyScopeListeners(), this;
      }
      setTransactionName(t) {
        return (this._transactionName = t), this._notifyScopeListeners(), this;
      }
      setContext(t, i) {
        return (
          i === null ? delete this._contexts[t] : (this._contexts[t] = i),
          this._notifyScopeListeners(),
          this
        );
      }
      setSpan(t) {
        return (this._span = t), this._notifyScopeListeners(), this;
      }
      getSpan() {
        return this._span;
      }
      getTransaction() {
        let t = this.getSpan();
        return t && t.transaction;
      }
      setSession(t) {
        return (
          t ? (this._session = t) : delete this._session,
          this._notifyScopeListeners(),
          this
        );
      }
      getSession() {
        return this._session;
      }
      update(t) {
        if (!t) return this;
        if (typeof t == "function") {
          let i = t(this);
          return i instanceof e ? i : this;
        }
        return (
          t instanceof e
            ? ((this._tags = D(D({}, this._tags), t._tags)),
              (this._extra = D(D({}, this._extra), t._extra)),
              (this._contexts = D(D({}, this._contexts), t._contexts)),
              t._user && Object.keys(t._user).length && (this._user = t._user),
              t._level && (this._level = t._level),
              t._fingerprint && (this._fingerprint = t._fingerprint),
              t._requestSession && (this._requestSession = t._requestSession))
            : Be(t) &&
              ((t = t),
              (this._tags = D(D({}, this._tags), t.tags)),
              (this._extra = D(D({}, this._extra), t.extra)),
              (this._contexts = D(D({}, this._contexts), t.contexts)),
              t.user && (this._user = t.user),
              t.level && (this._level = t.level),
              t.fingerprint && (this._fingerprint = t.fingerprint),
              t.requestSession && (this._requestSession = t.requestSession)),
          this
        );
      }
      clear() {
        return (
          (this._breadcrumbs = []),
          (this._tags = {}),
          (this._extra = {}),
          (this._user = {}),
          (this._contexts = {}),
          (this._level = void 0),
          (this._transactionName = void 0),
          (this._fingerprint = void 0),
          (this._requestSession = void 0),
          (this._span = void 0),
          (this._session = void 0),
          this._notifyScopeListeners(),
          (this._attachments = []),
          this
        );
      }
      addBreadcrumb(t, i) {
        let a = typeof i == "number" ? i : Xc;
        if (a <= 0) return this;
        let f = D({ timestamp: dt() }, t);
        return (
          (this._breadcrumbs = [...this._breadcrumbs, f].slice(-a)),
          this._notifyScopeListeners(),
          this
        );
      }
      getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
      }
      clearBreadcrumbs() {
        return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
      }
      addAttachment(t) {
        return this._attachments.push(t), this;
      }
      getAttachments() {
        return this._attachments;
      }
      clearAttachments() {
        return (this._attachments = []), this;
      }
      applyToEvent(t, i = {}) {
        if (
          (this._extra &&
            Object.keys(this._extra).length &&
            (t.extra = D(D({}, this._extra), t.extra)),
          this._tags &&
            Object.keys(this._tags).length &&
            (t.tags = D(D({}, this._tags), t.tags)),
          this._user &&
            Object.keys(this._user).length &&
            (t.user = D(D({}, this._user), t.user)),
          this._contexts &&
            Object.keys(this._contexts).length &&
            (t.contexts = D(D({}, this._contexts), t.contexts)),
          this._level && (t.level = this._level),
          this._transactionName && (t.transaction = this._transactionName),
          this._span)
        ) {
          t.contexts = D({ trace: this._span.getTraceContext() }, t.contexts);
          let a = this._span.transaction;
          if (a) {
            t.sdkProcessingMetadata = D(
              { dynamicSamplingContext: a.getDynamicSamplingContext() },
              t.sdkProcessingMetadata
            );
            let f = a.name;
            f && (t.tags = D({ transaction: f }, t.tags));
          }
        }
        return (
          this._applyFingerprint(t),
          (t.breadcrumbs = [...(t.breadcrumbs || []), ...this._breadcrumbs]),
          (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
          (t.sdkProcessingMetadata = D(
            D({}, t.sdkProcessingMetadata),
            this._sdkProcessingMetadata
          )),
          this._notifyEventProcessors([...gs(), ...this._eventProcessors], t, i)
        );
      }
      setSDKProcessingMetadata(t) {
        return (
          (this._sdkProcessingMetadata = D(
            D({}, this._sdkProcessingMetadata),
            t
          )),
          this
        );
      }
      _notifyEventProcessors(t, i, a, f = 0) {
        return new De((d, m) => {
          let x = t[f];
          if (i === null || typeof x != "function") d(i);
          else {
            let _ = x(D({}, i), a);
            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              x.id &&
              _ === null &&
              B.log(`Event processor "${x.id}" dropped event`),
              Mt(_)
                ? _.then((T) =>
                    this._notifyEventProcessors(t, T, a, f + 1).then(d)
                  ).then(null, m)
                : this._notifyEventProcessors(t, _, a, f + 1)
                    .then(d)
                    .then(null, m);
          }
        });
      }
      _notifyScopeListeners() {
        this._notifyingListeners ||
          ((this._notifyingListeners = !0),
          this._scopeListeners.forEach((t) => {
            t(this);
          }),
          (this._notifyingListeners = !1));
      }
      _applyFingerprint(t) {
        (t.fingerprint = t.fingerprint ? Ur(t.fingerprint) : []),
          this._fingerprint &&
            (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
          t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
      }
    };
  function gs() {
    return Ut("globalEventProcessors", () => []);
  }
  function Ht(e) {
    gs().push(e);
  }
  var ys = 4,
    Qc = 100,
    Hr = class {
      constructor(t, i = new Tt(), a = ys) {
        (this._version = a),
          (this._stack = [{ scope: i }]),
          t && this.bindClient(t);
      }
      isOlderThan(t) {
        return this._version < t;
      }
      bindClient(t) {
        let i = this.getStackTop();
        (i.client = t), t && t.setupIntegrations && t.setupIntegrations();
      }
      pushScope() {
        let t = Tt.clone(this.getScope());
        return this.getStack().push({ client: this.getClient(), scope: t }), t;
      }
      popScope() {
        return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
      }
      withScope(t) {
        let i = this.pushScope();
        try {
          t(i);
        } finally {
          this.popScope();
        }
      }
      getClient() {
        return this.getStackTop().client;
      }
      getScope() {
        return this.getStackTop().scope;
      }
      getStack() {
        return this._stack;
      }
      getStackTop() {
        return this._stack[this._stack.length - 1];
      }
      captureException(t, i) {
        let a = (this._lastEventId = i && i.event_id ? i.event_id : et()),
          f = new Error("Sentry syntheticException");
        return (
          this._withClient((d, m) => {
            d.captureException(
              t,
              ie(D({ originalException: t, syntheticException: f }, i), {
                event_id: a,
              }),
              m
            );
          }),
          a
        );
      }
      captureMessage(t, i, a) {
        let f = (this._lastEventId = a && a.event_id ? a.event_id : et()),
          d = new Error(t);
        return (
          this._withClient((m, x) => {
            m.captureMessage(
              t,
              i,
              ie(D({ originalException: t, syntheticException: d }, a), {
                event_id: f,
              }),
              x
            );
          }),
          f
        );
      }
      captureEvent(t, i) {
        let a = i && i.event_id ? i.event_id : et();
        return (
          t.type || (this._lastEventId = a),
          this._withClient((f, d) => {
            f.captureEvent(t, ie(D({}, i), { event_id: a }), d);
          }),
          a
        );
      }
      lastEventId() {
        return this._lastEventId;
      }
      addBreadcrumb(t, i) {
        let { scope: a, client: f } = this.getStackTop();
        if (!f) return;
        let { beforeBreadcrumb: d = null, maxBreadcrumbs: m = Qc } =
          (f.getOptions && f.getOptions()) || {};
        if (m <= 0) return;
        let x = dt(),
          _ = D({ timestamp: x }, t),
          T = d ? xn(() => d(_, i)) : _;
        T !== null &&
          (f.emit && f.emit("beforeAddBreadcrumb", T, i),
          a.addBreadcrumb(T, m));
      }
      setUser(t) {
        this.getScope().setUser(t);
      }
      setTags(t) {
        this.getScope().setTags(t);
      }
      setExtras(t) {
        this.getScope().setExtras(t);
      }
      setTag(t, i) {
        this.getScope().setTag(t, i);
      }
      setExtra(t, i) {
        this.getScope().setExtra(t, i);
      }
      setContext(t, i) {
        this.getScope().setContext(t, i);
      }
      configureScope(t) {
        let { scope: i, client: a } = this.getStackTop();
        a && t(i);
      }
      run(t) {
        let i = ao(this);
        try {
          t(this);
        } finally {
          ao(i);
        }
      }
      getIntegration(t) {
        let i = this.getClient();
        if (!i) return null;
        try {
          return i.getIntegration(t);
        } catch (a) {
          return (
            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              B.warn(
                `Cannot retrieve integration ${t.id} from the current Hub`
              ),
            null
          );
        }
      }
      startTransaction(t, i) {
        let a = this._callExtensionMethod("startTransaction", t, i);
        return (
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            !a &&
            console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),
          a
        );
      }
      traceHeaders() {
        return this._callExtensionMethod("traceHeaders");
      }
      captureSession(t = !1) {
        if (t) return this.endSession();
        this._sendSessionUpdate();
      }
      endSession() {
        let i = this.getStackTop().scope,
          a = i.getSession();
        a && ms(a), this._sendSessionUpdate(), i.setSession();
      }
      startSession(t) {
        let { scope: i, client: a } = this.getStackTop(),
          { release: f, environment: d = Bn } = (a && a.getOptions()) || {},
          { userAgent: m } = me.navigator || {},
          x = hs(
            D(
              D(
                { release: f, environment: d, user: i.getUser() },
                m && { userAgent: m }
              ),
              t
            )
          ),
          _ = i.getSession && i.getSession();
        return (
          _ && _.status === "ok" && pt(_, { status: "exited" }),
          this.endSession(),
          i.setSession(x),
          x
        );
      }
      shouldSendDefaultPii() {
        let t = this.getClient(),
          i = t && t.getOptions();
        return !!(i && i.sendDefaultPii);
      }
      _sendSessionUpdate() {
        let { scope: t, client: i } = this.getStackTop(),
          a = t.getSession();
        a && i && i.captureSession && i.captureSession(a);
      }
      _withClient(t) {
        let { scope: i, client: a } = this.getStackTop();
        a && t(a, i);
      }
      _callExtensionMethod(t, ...i) {
        let f = $r().__SENTRY__;
        if (f && f.extensions && typeof f.extensions[t] == "function")
          return f.extensions[t].apply(this, i);
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(`Extension method ${t} couldn't be found, doing nothing.`);
      }
    };
  function $r() {
    return (
      (me.__SENTRY__ = me.__SENTRY__ || { extensions: {}, hub: void 0 }), me
    );
  }
  function ao(e) {
    let t = $r(),
      i = Fn(t);
    return so(t, e), i;
  }
  function ae() {
    let e = $r();
    if (e.__SENTRY__ && e.__SENTRY__.acs) {
      let t = e.__SENTRY__.acs.getCurrentHub();
      if (t) return t;
    }
    return Zc(e);
  }
  function Zc(e = $r()) {
    return (!el(e) || Fn(e).isOlderThan(ys)) && so(e, new Hr()), Fn(e);
  }
  function el(e) {
    return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
  }
  function Fn(e) {
    return Ut("hub", () => new Hr(), e);
  }
  function so(e, t) {
    if (!e) return !1;
    let i = (e.__SENTRY__ = e.__SENTRY__ || {});
    return (i.hub = t), !0;
  }
  function uo(e, t) {
    return ae().captureException(e, { captureContext: t });
  }
  function fo(e) {
    ae().withScope(e);
  }
  var tl = "7";
  function rl(e) {
    let t = e.protocol ? `${e.protocol}:` : "",
      i = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${i}${e.path ? `/${e.path}` : ""}/api/`;
  }
  function nl(e) {
    return `${rl(e)}${e.projectId}/envelope/`;
  }
  function il(e, t) {
    return Bi(
      D(
        { sentry_key: e.publicKey, sentry_version: tl },
        t && { sentry_client: `${t.name}/${t.version}` }
      )
    );
  }
  function _s(e, t = {}) {
    let i = typeof t == "string" ? t : t.tunnel,
      a = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
    return i || `${nl(e)}?${il(e, a)}`;
  }
  function ol(e, t) {
    return (
      t &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.name = e.sdk.name || t.name),
        (e.sdk.version = e.sdk.version || t.version),
        (e.sdk.integrations = [
          ...(e.sdk.integrations || []),
          ...(t.integrations || []),
        ]),
        (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
      e
    );
  }
  function xs(e, t, i, a) {
    let f = Un(i),
      d = D(
        D({ sent_at: new Date().toISOString() }, f && { sdk: f }),
        !!a && { dsn: Ze(t) }
      ),
      m =
        "aggregates" in e
          ? [{ type: "sessions" }, e]
          : [{ type: "session" }, e.toJSON()];
    return tt(d, [m]);
  }
  function vs(e, t, i, a) {
    let f = Un(i),
      d = e.type && e.type !== "replay_event" ? e.type : "event";
    ol(e, i && i.sdk);
    let m = ro(e, f, a, t);
    return delete e.sdkProcessingMetadata, tt(m, [[{ type: d }, e]]);
  }
  var bs = [];
  function al(e) {
    let t = {};
    return (
      e.forEach((i) => {
        let { name: a } = i,
          f = t[a];
        (f && !f.isDefaultInstance && i.isDefaultInstance) || (t[a] = i);
      }),
      Object.keys(t).map((i) => t[i])
    );
  }
  function co(e) {
    let t = e.defaultIntegrations || [],
      i = e.integrations;
    t.forEach((m) => {
      m.isDefaultInstance = !0;
    });
    let a;
    Array.isArray(i)
      ? (a = [...t, ...i])
      : typeof i == "function"
      ? (a = Ur(i(t)))
      : (a = t);
    let f = al(a),
      d = sl(f, (m) => m.name === "Debug");
    if (d !== -1) {
      let [m] = f.splice(d, 1);
      f.push(m);
    }
    return f;
  }
  function Es(e) {
    let t = {};
    return (
      e.forEach((i) => {
        i && lo(i, t);
      }),
      t
    );
  }
  function lo(e, t) {
    (t[e.name] = e),
      bs.indexOf(e.name) === -1 &&
        (e.setupOnce(Ht, ae),
        bs.push(e.name),
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.log(`Integration installed: ${e.name}`));
  }
  function sl(e, t) {
    for (let i = 0; i < e.length; i++) if (t(e[i]) === !0) return i;
    return -1;
  }
  function Ts(e, t, i, a) {
    let { normalizeDepth: f = 3, normalizeMaxBreadth: d = 1e3 } = e,
      m = ie(D({}, t), {
        event_id: t.event_id || i.event_id || et(),
        timestamp: t.timestamp || dt(),
      }),
      x = i.integrations || e.integrations.map((O) => O.name);
    ul(m, e), ll(m, x), t.type === void 0 && fl(m, e.stackParser);
    let _ = a;
    i.captureContext && (_ = Tt.clone(_).update(i.captureContext));
    let T = Re(m);
    if (_) {
      if (_.getAttachments) {
        let O = [...(i.attachments || []), ..._.getAttachments()];
        O.length && (i.attachments = O);
      }
      T = _.applyToEvent(m, i);
    }
    return T.then(
      (O) => (O && cl(O), typeof f == "number" && f > 0 ? dl(O, f, d) : O)
    );
  }
  function ul(e, t) {
    let { environment: i, release: a, dist: f, maxValueLength: d = 250 } = t;
    "environment" in e || (e.environment = "environment" in t ? i : Bn),
      e.release === void 0 && a !== void 0 && (e.release = a),
      e.dist === void 0 && f !== void 0 && (e.dist = f),
      e.message && (e.message = Et(e.message, d));
    let m = e.exception && e.exception.values && e.exception.values[0];
    m && m.value && (m.value = Et(m.value, d));
    let x = e.request;
    x && x.url && (x.url = Et(x.url, d));
  }
  var Ss = new WeakMap();
  function fl(e, t) {
    let i = me._sentryDebugIds;
    if (!i) return;
    let a,
      f = Ss.get(t);
    f ? (a = f) : ((a = new Map()), Ss.set(t, a));
    let d = Object.keys(i).reduce((m, x) => {
      let _,
        T = a.get(x);
      T ? (_ = T) : ((_ = t(x)), a.set(x, _));
      for (let O = _.length - 1; O >= 0; O--) {
        let C = _[O];
        if (C.filename) {
          m[C.filename] = i[x];
          break;
        }
      }
      return m;
    }, {});
    try {
      e.exception.values.forEach((m) => {
        m.stacktrace.frames.forEach((x) => {
          x.filename && (x.debug_id = d[x.filename]);
        });
      });
    } catch (m) {}
  }
  function cl(e) {
    let t = {};
    try {
      e.exception.values.forEach((a) => {
        a.stacktrace.frames.forEach((f) => {
          f.debug_id &&
            (f.abs_path
              ? (t[f.abs_path] = f.debug_id)
              : f.filename && (t[f.filename] = f.debug_id),
            delete f.debug_id);
        });
      });
    } catch (a) {}
    if (Object.keys(t).length === 0) return;
    (e.debug_meta = e.debug_meta || {}),
      (e.debug_meta.images = e.debug_meta.images || []);
    let i = e.debug_meta.images;
    Object.keys(t).forEach((a) => {
      i.push({ type: "sourcemap", code_file: a, debug_id: t[a] });
    });
  }
  function ll(e, t) {
    t.length > 0 &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
  }
  function dl(e, t, i) {
    if (!e) return null;
    let a = D(
      D(
        D(
          D(
            D({}, e),
            e.breadcrumbs && {
              breadcrumbs: e.breadcrumbs.map((f) =>
                D(D({}, f), f.data && { data: qe(f.data, t, i) })
              ),
            }
          ),
          e.user && { user: qe(e.user, t, i) }
        ),
        e.contexts && { contexts: qe(e.contexts, t, i) }
      ),
      e.extra && { extra: qe(e.extra, t, i) }
    );
    return (
      e.contexts &&
        e.contexts.trace &&
        a.contexts &&
        ((a.contexts.trace = e.contexts.trace),
        e.contexts.trace.data &&
          (a.contexts.trace.data = qe(e.contexts.trace.data, t, i))),
      e.spans &&
        (a.spans = e.spans.map(
          (f) => (f.data && (f.data = qe(f.data, t, i)), f)
        )),
      a
    );
  }
  var ws = "Not capturing exception because it's already been captured.",
    qr = class e {
      __init() {
        this._integrations = {};
      }
      __init2() {
        this._integrationsInitialized = !1;
      }
      __init3() {
        this._numProcessing = 0;
      }
      __init4() {
        this._outcomes = {};
      }
      __init5() {
        this._hooks = {};
      }
      constructor(t) {
        if (
          (e.prototype.__init.call(this),
          e.prototype.__init2.call(this),
          e.prototype.__init3.call(this),
          e.prototype.__init4.call(this),
          e.prototype.__init5.call(this),
          (this._options = t),
          t.dsn
            ? (this._dsn = vn(t.dsn))
            : (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              B.warn("No DSN provided, client will not do anything."),
          this._dsn)
        ) {
          let i = _s(this._dsn, t);
          this._transport = t.transport(
            ie(
              D(
                { recordDroppedEvent: this.recordDroppedEvent.bind(this) },
                t.transportOptions
              ),
              { url: i }
            )
          );
        }
      }
      captureException(t, i, a) {
        if (An(t)) {
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            B.log(ws);
          return;
        }
        let f = i && i.event_id;
        return (
          this._process(
            this.eventFromException(t, i)
              .then((d) => this._captureEvent(d, i, a))
              .then((d) => {
                f = d;
              })
          ),
          f
        );
      }
      captureMessage(t, i, a, f) {
        let d = a && a.event_id,
          m = sr(t)
            ? this.eventFromMessage(String(t), i, a)
            : this.eventFromException(t, a);
        return (
          this._process(
            m
              .then((x) => this._captureEvent(x, a, f))
              .then((x) => {
                d = x;
              })
          ),
          d
        );
      }
      captureEvent(t, i, a) {
        if (i && i.originalException && An(i.originalException)) {
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            B.log(ws);
          return;
        }
        let f = i && i.event_id;
        return (
          this._process(
            this._captureEvent(t, i, a).then((d) => {
              f = d;
            })
          ),
          f
        );
      }
      captureSession(t) {
        if (!this._isEnabled()) {
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            B.warn("SDK not enabled, will not capture session.");
          return;
        }
        typeof t.release != "string"
          ? (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            B.warn("Discarded session because of missing or non-string release")
          : (this.sendSession(t), pt(t, { init: !1 }));
      }
      getDsn() {
        return this._dsn;
      }
      getOptions() {
        return this._options;
      }
      getSdkMetadata() {
        return this._options._metadata;
      }
      getTransport() {
        return this._transport;
      }
      flush(t) {
        let i = this._transport;
        return i
          ? this._isClientDoneProcessing(t).then((a) =>
              i.flush(t).then((f) => a && f)
            )
          : Re(!0);
      }
      close(t) {
        return this.flush(t).then((i) => ((this.getOptions().enabled = !1), i));
      }
      setupIntegrations() {
        this._isEnabled() &&
          !this._integrationsInitialized &&
          ((this._integrations = Es(this._options.integrations)),
          (this._integrationsInitialized = !0));
      }
      getIntegrationById(t) {
        return this._integrations[t];
      }
      getIntegration(t) {
        try {
          return this._integrations[t.id] || null;
        } catch (i) {
          return (
            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
              B.warn(
                `Cannot retrieve integration ${t.id} from the current Client`
              ),
            null
          );
        }
      }
      addIntegration(t) {
        lo(t, this._integrations);
      }
      sendEvent(t, i = {}) {
        if (this._dsn) {
          let a = vs(
            t,
            this._dsn,
            this._options._metadata,
            this._options.tunnel
          );
          for (let d of i.attachments || [])
            a = Zi(
              a,
              to(
                d,
                this._options.transportOptions &&
                  this._options.transportOptions.textEncoder
              )
            );
          let f = this._sendEnvelope(a);
          f && f.then((d) => this.emit("afterSendEvent", t, d), null);
        }
      }
      sendSession(t) {
        if (this._dsn) {
          let i = xs(
            t,
            this._dsn,
            this._options._metadata,
            this._options.tunnel
          );
          this._sendEnvelope(i);
        }
      }
      recordDroppedEvent(t, i, a) {
        if (this._options.sendClientReports) {
          let f = `${t}:${i}`;
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            B.log(`Adding outcome: "${f}"`),
            (this._outcomes[f] = this._outcomes[f] + 1 || 1);
        }
      }
      on(t, i) {
        this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(i);
      }
      emit(t, ...i) {
        this._hooks[t] && this._hooks[t].forEach((a) => a(...i));
      }
      _updateSessionFromEvent(t, i) {
        let a = !1,
          f = !1,
          d = i.exception && i.exception.values;
        if (d) {
          f = !0;
          for (let _ of d) {
            let T = _.mechanism;
            if (T && T.handled === !1) {
              a = !0;
              break;
            }
          }
        }
        let m = t.status === "ok";
        ((m && t.errors === 0) || (m && a)) &&
          (pt(
            t,
            ie(D({}, a && { status: "crashed" }), {
              errors: t.errors || Number(f || a),
            })
          ),
          this.captureSession(t));
      }
      _isClientDoneProcessing(t) {
        return new De((i) => {
          let a = 0,
            f = 1,
            d = setInterval(() => {
              this._numProcessing == 0
                ? (clearInterval(d), i(!0))
                : ((a += f), t && a >= t && (clearInterval(d), i(!1)));
            }, f);
        });
      }
      _isEnabled() {
        return this.getOptions().enabled !== !1 && this._dsn !== void 0;
      }
      _prepareEvent(t, i, a) {
        let f = this.getOptions(),
          d = Object.keys(this._integrations);
        return (
          !i.integrations && d.length > 0 && (i.integrations = d),
          Ts(f, t, i, a)
        );
      }
      _captureEvent(t, i = {}, a) {
        return this._processEvent(t, i, a).then(
          (f) => f.event_id,
          (f) => {
            if (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) {
              let d = f;
              d.logLevel === "log" ? B.log(d.message) : B.warn(d);
            }
          }
        );
      }
      _processEvent(t, i, a) {
        let f = this.getOptions(),
          { sampleRate: d } = f;
        if (!this._isEnabled())
          return St(new ye("SDK not enabled, will not capture event.", "log"));
        let m = Ns(t),
          x = ks(t),
          _ = t.type || "error",
          T = `before send for type \`${_}\``;
        if (x && typeof d == "number" && Math.random() > d)
          return (
            this.recordDroppedEvent("sample_rate", "error", t),
            St(
              new ye(
                `Discarding event because it's not included in the random sample (sampling rate = ${d})`,
                "log"
              )
            )
          );
        let O = _ === "replay_event" ? "replay" : _;
        return this._prepareEvent(t, i, a)
          .then((C) => {
            if (C === null)
              throw (
                (this.recordDroppedEvent("event_processor", O, t),
                new ye(
                  "An event processor returned `null`, will not send event.",
                  "log"
                ))
              );
            if (i.data && i.data.__sentry__ === !0) return C;
            let I = hl(f, C, i);
            return pl(I, T);
          })
          .then((C) => {
            if (C === null)
              throw (
                (this.recordDroppedEvent("before_send", O, t),
                new ye(`${T} returned \`null\`, will not send event.`, "log"))
              );
            let z = a && a.getSession();
            !m && z && this._updateSessionFromEvent(z, C);
            let I = C.transaction_info;
            if (m && I && C.transaction !== t.transaction) {
              let M = "custom";
              C.transaction_info = ie(D({}, I), { source: M });
            }
            return this.sendEvent(C, i), C;
          })
          .then(null, (C) => {
            throw C instanceof ye
              ? C
              : (this.captureException(C, {
                  data: { __sentry__: !0 },
                  originalException: C,
                }),
                new ye(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${C}`));
          });
      }
      _process(t) {
        this._numProcessing++,
          t.then(
            (i) => (this._numProcessing--, i),
            (i) => (this._numProcessing--, i)
          );
      }
      _sendEnvelope(t) {
        if (this._transport && this._dsn)
          return (
            this.emit("beforeEnvelope", t),
            this._transport.send(t).then(null, (i) => {
              (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                B.error("Error while sending event:", i);
            })
          );
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.error("Transport disabled");
      }
      _clearOutcomes() {
        let t = this._outcomes;
        return (
          (this._outcomes = {}),
          Object.keys(t).map((i) => {
            let [a, f] = i.split(":");
            return { reason: a, category: f, quantity: t[i] };
          })
        );
      }
    };
  function pl(e, t) {
    let i = `${t} must return \`null\` or a valid event.`;
    if (Mt(e))
      return e.then(
        (a) => {
          if (!Be(a) && a !== null) throw new ye(i);
          return a;
        },
        (a) => {
          throw new ye(`${t} rejected with ${a}`);
        }
      );
    if (!Be(e) && e !== null) throw new ye(i);
    return e;
  }
  function hl(e, t, i) {
    let { beforeSend: a, beforeSendTransaction: f } = e;
    return ks(t) && a ? a(t, i) : Ns(t) && f ? f(t, i) : t;
  }
  function ks(e) {
    return e.type === void 0;
  }
  function Ns(e) {
    return e.type === "transaction";
  }
  function po(e, t) {
    t.debug === !0 &&
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__
        ? B.enable()
        : console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
          ));
    let i = ae();
    i.getScope().update(t.initialScope);
    let f = new e(t);
    i.bindClient(f);
  }
  var ml = 30;
  function Gr(e, t, i = Vi(e.bufferSize || ml)) {
    let a = {},
      f = (m) => i.drain(m);
    function d(m) {
      let x = [];
      if (
        (jn(m, (C, z) => {
          let I = Mn(z);
          if (io(a, I)) {
            let M = Rs(C, z);
            e.recordDroppedEvent("ratelimit_backoff", I, M);
          } else x.push(C);
        }),
        x.length === 0)
      )
        return Re();
      let _ = tt(m[0], x),
        T = (C) => {
          jn(_, (z, I) => {
            let M = Rs(z, I);
            e.recordDroppedEvent(C, Mn(I), M);
          });
        },
        O = () =>
          t({ body: eo(_, e.textEncoder) }).then(
            (C) => (
              C.statusCode !== void 0 &&
                (C.statusCode < 200 || C.statusCode >= 300) &&
                (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                B.warn(
                  `Sentry responded with status code ${C.statusCode} to sent event.`
                ),
              (a = oo(a, C)),
              C
            ),
            (C) => {
              throw (T("network_error"), C);
            }
          );
      return i.add(O).then(
        (C) => C,
        (C) => {
          if (C instanceof ye)
            return (
              (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                B.error("Skipped sending event because buffer is full."),
              T("queue_overflow"),
              Re()
            );
          throw C;
        }
      );
    }
    return (d.__sentry__baseTransport__ = !0), { send: d, flush: f };
  }
  function Rs(e, t) {
    if (!(t !== "event" && t !== "transaction"))
      return Array.isArray(e) ? e[1] : void 0;
  }
  var Hn = "7.57.0";
  var $t = {};
  pa($t, { FunctionToString: () => Wr, InboundFilters: () => Yr });
  var Cs,
    Wr = class e {
      constructor() {
        e.prototype.__init.call(this);
      }
      static __initStatic() {
        this.id = "FunctionToString";
      }
      __init() {
        this.name = e.id;
      }
      setupOnce() {
        Cs = Function.prototype.toString;
        try {
          Function.prototype.toString = function (...t) {
            let i = Bt(this) || this;
            return Cs.apply(i, t);
          };
        } catch (t) {}
      }
    };
  Wr.__initStatic();
  var gl = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
    ],
    yl = [
      /^.*healthcheck.*$/,
      /^.*healthy.*$/,
      /^.*live.*$/,
      /^.*ready.*$/,
      /^.*heartbeat.*$/,
      /^.*\/health$/,
      /^.*\/healthz$/,
    ],
    Yr = class e {
      static __initStatic() {
        this.id = "InboundFilters";
      }
      __init() {
        this.name = e.id;
      }
      constructor(t = {}) {
        (this._options = t), e.prototype.__init.call(this);
      }
      setupOnce(t, i) {
        let a = (f) => {
          let d = i();
          if (d) {
            let m = d.getIntegration(e);
            if (m) {
              let x = d.getClient(),
                _ = x ? x.getOptions() : {},
                T = _l(m._options, _);
              return xl(f, T) ? null : f;
            }
          }
          return f;
        };
        (a.id = this.name), t(a);
      }
    };
  Yr.__initStatic();
  function _l(e = {}, t = {}) {
    return {
      allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
      denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
      ignoreErrors: [
        ...(e.ignoreErrors || []),
        ...(t.ignoreErrors || []),
        ...(e.disableErrorDefaults ? [] : gl),
      ],
      ignoreTransactions: [
        ...(e.ignoreTransactions || []),
        ...(t.ignoreTransactions || []),
        ...(e.disableTransactionDefaults ? [] : yl),
      ],
      ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
    };
  }
  function xl(e, t) {
    return t.ignoreInternal && wl(e)
      ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(`Event dropped due to being internal Sentry Error.
Event: ${$e(e)}`),
        !0)
      : vl(e, t.ignoreErrors)
      ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${$e(e)}`),
        !0)
      : bl(e, t.ignoreTransactions)
      ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${$e(e)}`),
        !0)
      : El(e, t.denyUrls)
      ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${$e(e)}.
Url: ${$n(e)}`),
        !0)
      : Sl(e, t.allowUrls)
      ? !1
      : ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${$e(e)}.
Url: ${$n(e)}`),
        !0);
  }
  function vl(e, t) {
    return e.type || !t || !t.length ? !1 : Tl(e).some((i) => cr(i, t));
  }
  function bl(e, t) {
    if (e.type !== "transaction" || !t || !t.length) return !1;
    let i = e.transaction;
    return i ? cr(i, t) : !1;
  }
  function El(e, t) {
    if (!t || !t.length) return !1;
    let i = $n(e);
    return i ? cr(i, t) : !1;
  }
  function Sl(e, t) {
    if (!t || !t.length) return !0;
    let i = $n(e);
    return i ? cr(i, t) : !0;
  }
  function Tl(e) {
    if (e.message) return [e.message];
    if (e.exception) {
      let { values: t } = e.exception;
      try {
        let { type: i = "", value: a = "" } = (t && t[t.length - 1]) || {};
        return [`${a}`, `${i}: ${a}`];
      } catch (i) {
        return (
          (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
            B.error(`Cannot extract message for event ${$e(e)}`),
          []
        );
      }
    }
    return [];
  }
  function wl(e) {
    try {
      return e.exception.values[0].type === "SentryError";
    } catch (t) {}
    return !1;
  }
  function kl(e = []) {
    for (let t = e.length - 1; t >= 0; t--) {
      let i = e[t];
      if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]")
        return i.filename || null;
    }
    return null;
  }
  function $n(e) {
    try {
      let t;
      try {
        t = e.exception.values[0].stacktrace.frames;
      } catch (i) {}
      return t ? kl(t) : null;
    } catch (t) {
      return (
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.error(`Cannot extract url for event ${$e(e)}`),
        null
      );
    }
  }
  var X = me,
    ho = 0;
  function mo() {
    return ho > 0;
  }
  function Nl() {
    ho++,
      setTimeout(() => {
        ho--;
      });
  }
  function wt(e, t = {}, i) {
    if (typeof e != "function") return e;
    try {
      let f = e.__sentry_wrapped__;
      if (f) return f;
      if (Bt(e)) return e;
    } catch (f) {
      return e;
    }
    let a = function () {
      let f = Array.prototype.slice.call(arguments);
      try {
        i && typeof i == "function" && i.apply(this, arguments);
        let d = f.map((m) => wt(m, t));
        return e.apply(this, d);
      } catch (d) {
        throw (
          (Nl(),
          fo((m) => {
            m.addEventProcessor(
              (x) => (
                t.mechanism && (pr(x, void 0, void 0), ct(x, t.mechanism)),
                (x.extra = ie(D({}, x.extra), { arguments: f })),
                x
              )
            ),
              uo(d);
          }),
          d)
        );
      }
    };
    try {
      for (let f in e)
        Object.prototype.hasOwnProperty.call(e, f) && (a[f] = e[f]);
    } catch (f) {}
    En(a, e), lr(e, "__sentry_wrapped__", a);
    try {
      Object.getOwnPropertyDescriptor(a, "name").configurable &&
        Object.defineProperty(a, "name", {
          get() {
            return e.name;
          },
        });
    } catch (f) {}
    return a;
  }
  function _o(e, t) {
    let i = xo(e, t),
      a = { type: t && t.name, value: Ol(t) };
    return (
      i.length && (a.stacktrace = { frames: i }),
      a.type === void 0 &&
        a.value === "" &&
        (a.value = "Unrecoverable error caught"),
      a
    );
  }
  function Rl(e, t, i, a) {
    let d = ae().getClient(),
      m = d && d.getOptions().normalizeDepth,
      x = {
        exception: {
          values: [
            {
              type: jt(t)
                ? t.constructor.name
                : a
                ? "UnhandledRejection"
                : "Error",
              value: Al(t, { isUnhandledRejection: a }),
            },
          ],
        },
        extra: { __serialized__: Pn(t, m) },
      };
    if (i) {
      let _ = xo(e, i);
      _.length && (x.exception.values[0].stacktrace = { frames: _ });
    }
    return x;
  }
  function go(e, t) {
    return { exception: { values: [_o(e, t)] } };
  }
  function xo(e, t) {
    let i = t.stacktrace || t.stack || "",
      a = Dl(t);
    try {
      return e(i, a);
    } catch (f) {}
    return [];
  }
  var Cl = /Minified React error #\d+;/i;
  function Dl(e) {
    if (e) {
      if (typeof e.framesToPop == "number") return e.framesToPop;
      if (Cl.test(e.message)) return 1;
    }
    return 0;
  }
  function Ol(e) {
    let t = e && e.message;
    return t
      ? t.error && typeof t.error.message == "string"
        ? t.error.message
        : t
      : "No error message";
  }
  function Ds(e, t, i, a) {
    let f = (i && i.syntheticException) || void 0,
      d = qn(e, t, f, a);
    return (
      ct(d),
      (d.level = "error"),
      i && i.event_id && (d.event_id = i.event_id),
      Re(d)
    );
  }
  function Os(e, t, i = "info", a, f) {
    let d = (a && a.syntheticException) || void 0,
      m = yo(e, t, d, f);
    return (m.level = i), a && a.event_id && (m.event_id = a.event_id), Re(m);
  }
  function qn(e, t, i, a, f) {
    let d;
    if (ar(t) && t.error) return go(e, t.error);
    if (yn(t) || Ai(t)) {
      let m = t;
      if ("stack" in t) d = go(e, t);
      else {
        let x = m.name || (yn(m) ? "DOMError" : "DOMException"),
          _ = m.message ? `${x}: ${m.message}` : x;
        (d = yo(e, _, i, a)), pr(d, _);
      }
      return (
        "code" in m &&
          (d.tags = ie(D({}, d.tags), { "DOMException.code": `${m.code}` })),
        d
      );
    }
    return Lr(t)
      ? go(e, t)
      : Be(t) || jt(t)
      ? ((d = Rl(e, t, i, f)), ct(d, { synthetic: !0 }), d)
      : ((d = yo(e, t, i, a)),
        pr(d, `${t}`, void 0),
        ct(d, { synthetic: !0 }),
        d);
  }
  function yo(e, t, i, a) {
    let f = { message: t };
    if (a && i) {
      let d = xo(e, i);
      d.length &&
        (f.exception = { values: [{ value: t, stacktrace: { frames: d } }] });
    }
    return f;
  }
  function Al(e, { isUnhandledRejection: t }) {
    let i = Fi(e),
      a = t ? "promise rejection" : "exception";
    return ar(e)
      ? `Event \`ErrorEvent\` captured as ${a} with message \`${e.message}\``
      : jt(e)
      ? `Event \`${Il(e)}\` (type=${e.type}) captured as ${a}`
      : `Object captured as ${a} with keys: ${i}`;
  }
  function Il(e) {
    try {
      let t = Object.getPrototypeOf(e);
      return t ? t.constructor.name : void 0;
    } catch (t) {}
  }
  var Gn = 1024,
    vo = "Breadcrumbs",
    qt = class e {
      static __initStatic() {
        this.id = vo;
      }
      __init() {
        this.name = e.id;
      }
      constructor(t) {
        e.prototype.__init.call(this),
          (this.options = D(
            {
              console: !0,
              dom: !0,
              fetch: !0,
              history: !0,
              sentry: !0,
              xhr: !0,
            },
            t
          ));
      }
      setupOnce() {
        this.options.console && je("console", Ll),
          this.options.dom && je("dom", Pl(this.options.dom)),
          this.options.xhr && je("xhr", jl),
          this.options.fetch && je("fetch", Ml),
          this.options.history && je("history", Ul);
      }
      addSentryBreadcrumb(t) {
        this.options.sentry &&
          ae().addBreadcrumb(
            {
              category: `sentry.${
                t.type === "transaction" ? "transaction" : "event"
              }`,
              event_id: t.event_id,
              level: t.level,
              message: $e(t),
            },
            { event: t }
          );
      }
    };
  qt.__initStatic();
  function Pl(e) {
    function t(i) {
      let a,
        f = typeof e == "object" ? e.serializeAttribute : void 0,
        d =
          typeof e == "object" && typeof e.maxStringLength == "number"
            ? e.maxStringLength
            : void 0;
      d &&
        d > Gn &&
        ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(
            `\`dom.maxStringLength\` cannot exceed ${Gn}, but a value of ${d} was configured. Sentry will use ${Gn} instead.`
          ),
        (d = Gn)),
        typeof f == "string" && (f = [f]);
      try {
        let m = i.event;
        a = Bl(m)
          ? ur(m.target, { keyAttrs: f, maxStringLength: d })
          : ur(m, { keyAttrs: f, maxStringLength: d });
      } catch (m) {
        a = "<unknown>";
      }
      a.length !== 0 &&
        ae().addBreadcrumb(
          { category: `ui.${i.name}`, message: a },
          { event: i.event, name: i.name, global: i.global }
        );
    }
    return t;
  }
  function Ll(e) {
    for (let i = 0; i < e.args.length; i++)
      if (e.args[i] === "ref=Ref<") {
        e.args[i + 1] = "viewRef";
        break;
      }
    let t = {
      category: "console",
      data: { arguments: e.args, logger: "console" },
      level: Ji(e.level),
      message: bn(e.args, " "),
    };
    if (e.level === "assert")
      if (e.args[0] === !1)
        (t.message = `Assertion failed: ${
          bn(e.args.slice(1), " ") || "console.assert"
        }`),
          (t.data.arguments = e.args.slice(1));
      else return;
    ae().addBreadcrumb(t, { input: e.args, level: e.level });
  }
  function jl(e) {
    let { startTimestamp: t, endTimestamp: i } = e,
      a = e.xhr[Ft];
    if (!t || !i || !a) return;
    let { method: f, url: d, status_code: m, body: x } = a,
      _ = { method: f, url: d, status_code: m },
      T = { xhr: e.xhr, input: x, startTimestamp: t, endTimestamp: i };
    ae().addBreadcrumb({ category: "xhr", data: _, type: "http" }, T);
  }
  function Ml(e) {
    let { startTimestamp: t, endTimestamp: i } = e;
    if (
      i &&
      !(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST")
    )
      if (e.error) {
        let a = e.fetchData,
          f = {
            data: e.error,
            input: e.args,
            startTimestamp: t,
            endTimestamp: i,
          };
        ae().addBreadcrumb(
          { category: "fetch", data: a, level: "error", type: "http" },
          f
        );
      } else {
        let a = ie(D({}, e.fetchData), {
            status_code: e.response && e.response.status,
          }),
          f = {
            input: e.args,
            response: e.response,
            startTimestamp: t,
            endTimestamp: i,
          };
        ae().addBreadcrumb({ category: "fetch", data: a, type: "http" }, f);
      }
  }
  function Ul(e) {
    let t = e.from,
      i = e.to,
      a = Br(X.location.href),
      f = Br(t),
      d = Br(i);
    f.path || (f = a),
      a.protocol === d.protocol && a.host === d.host && (i = d.relative),
      a.protocol === f.protocol && a.host === f.host && (t = f.relative),
      ae().addBreadcrumb({ category: "navigation", data: { from: t, to: i } });
  }
  function Bl(e) {
    return !!e && !!e.target;
  }
  function As(e, { metadata: t, tunnel: i, dsn: a }) {
    let f = D(
        D(
          { event_id: e.event_id, sent_at: new Date().toISOString() },
          t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }
        ),
        !!i && !!a && { dsn: Ze(a) }
      ),
      d = Fl(e);
    return tt(f, [d]);
  }
  function Fl(e) {
    return [{ type: "user_report" }, e];
  }
  var Wn = class extends qr {
    constructor(t) {
      let i = X.SENTRY_SDK_SOURCE || zi();
      (t._metadata = t._metadata || {}),
        (t._metadata.sdk = t._metadata.sdk || {
          name: "sentry.javascript.browser",
          packages: [{ name: `${i}:@sentry/browser`, version: Hn }],
          version: Hn,
        }),
        super(t),
        t.sendClientReports &&
          X.document &&
          X.document.addEventListener("visibilitychange", () => {
            X.document.visibilityState === "hidden" && this._flushOutcomes();
          });
    }
    eventFromException(t, i) {
      return Ds(
        this._options.stackParser,
        t,
        i,
        this._options.attachStacktrace
      );
    }
    eventFromMessage(t, i = "info", a) {
      return Os(
        this._options.stackParser,
        t,
        i,
        a,
        this._options.attachStacktrace
      );
    }
    sendEvent(t, i) {
      let a = this.getIntegrationById(vo);
      a && a.addSentryBreadcrumb && a.addSentryBreadcrumb(t),
        super.sendEvent(t, i);
    }
    captureUserFeedback(t) {
      if (!this._isEnabled()) {
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn("SDK not enabled, will not capture user feedback.");
        return;
      }
      let i = As(t, {
        metadata: this.getSdkMetadata(),
        dsn: this.getDsn(),
        tunnel: this.getOptions().tunnel,
      });
      this._sendEnvelope(i);
    }
    _prepareEvent(t, i, a) {
      return (
        (t.platform = t.platform || "javascript"), super._prepareEvent(t, i, a)
      );
    }
    _flushOutcomes() {
      let t = this._clearOutcomes();
      if (t.length === 0) {
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.log("No dsn provided, will not send outcomes");
        return;
      }
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
        B.log("Sending outcomes:", t);
      let i = no(t, this._options.tunnel && Ze(this._dsn));
      this._sendEnvelope(i);
    }
  };
  var zr;
  function Is() {
    if (zr) return zr;
    if (jr(X.fetch)) return (zr = X.fetch.bind(X));
    let e = X.document,
      t = X.fetch;
    if (e && typeof e.createElement == "function")
      try {
        let i = e.createElement("iframe");
        (i.hidden = !0), e.head.appendChild(i);
        let a = i.contentWindow;
        a && a.fetch && (t = a.fetch), e.head.removeChild(i);
      } catch (i) {
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
          B.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            i
          );
      }
    return (zr = t.bind(X));
  }
  function Ps() {
    zr = void 0;
  }
  function Ls(e, t = Is()) {
    let i = 0,
      a = 0;
    function f(d) {
      let m = d.body.length;
      (i += m), a++;
      let x = D(
        {
          body: d.body,
          method: "POST",
          referrerPolicy: "origin",
          headers: e.headers,
          keepalive: i <= 6e4 && a < 15,
        },
        e.fetchOptions
      );
      try {
        return t(e.url, x).then(
          (_) => (
            (i -= m),
            a--,
            {
              statusCode: _.status,
              headers: {
                "x-sentry-rate-limits": _.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": _.headers.get("Retry-After"),
              },
            }
          )
        );
      } catch (_) {
        return Ps(), (i -= m), a--, St(_);
      }
    }
    return Gr(e, f);
  }
  var Hl = 4;
  function js(e) {
    function t(i) {
      return new De((a, f) => {
        let d = new XMLHttpRequest();
        (d.onerror = f),
          (d.onreadystatechange = () => {
            d.readyState === Hl &&
              a({
                statusCode: d.status,
                headers: {
                  "x-sentry-rate-limits": d.getResponseHeader(
                    "X-Sentry-Rate-Limits"
                  ),
                  "retry-after": d.getResponseHeader("Retry-After"),
                },
              });
          }),
          d.open("POST", e.url);
        for (let m in e.headers)
          Object.prototype.hasOwnProperty.call(e.headers, m) &&
            d.setRequestHeader(m, e.headers[m]);
        d.send(i.body);
      });
    }
    return Gr(e, t);
  }
  var Yn = "?";
  var $l = 30,
    ql = 40,
    Gl = 50;
  function bo(e, t, i, a) {
    let f = { filename: e, function: t, in_app: !0 };
    return i !== void 0 && (f.lineno = i), a !== void 0 && (f.colno = a), f;
  }
  var Wl =
      /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    Yl = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    zl = (e) => {
      let t = Wl.exec(e);
      if (t) {
        if (t[2] && t[2].indexOf("eval") === 0) {
          let d = Yl.exec(t[2]);
          d && ((t[2] = d[1]), (t[3] = d[2]), (t[4] = d[3]));
        }
        let [a, f] = Us(t[1] || Yn, t[2]);
        return bo(f, a, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
      }
    },
    Vl = [$l, zl],
    Jl =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    Kl = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    Xl = (e) => {
      let t = Jl.exec(e);
      if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
          let d = Kl.exec(t[3]);
          d &&
            ((t[1] = t[1] || "eval"),
            (t[3] = d[1]),
            (t[4] = d[2]),
            (t[5] = ""));
        }
        let a = t[3],
          f = t[1] || Yn;
        return (
          ([f, a] = Us(f, a)),
          bo(a, f, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        );
      }
    },
    Ql = [Gl, Xl],
    Zl =
      /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    ed = (e) => {
      let t = Zl.exec(e);
      return t ? bo(t[2], t[1] || Yn, +t[3], t[4] ? +t[4] : void 0) : void 0;
    },
    td = [ql, ed];
  var rd = [Vl, Ql, td],
    Ms = Tn(...rd),
    Us = (e, t) => {
      let i = e.indexOf("safari-extension") !== -1,
        a = e.indexOf("safari-web-extension") !== -1;
      return i || a
        ? [
            e.indexOf("@") !== -1 ? e.split("@")[0] : Yn,
            i ? `safari-extension:${t}` : `safari-web-extension:${t}`,
          ]
        : [e, t];
    };
  var ht = class e {
    static __initStatic() {
      this.id = "GlobalHandlers";
    }
    __init() {
      this.name = e.id;
    }
    __init2() {
      this._installFunc = { onerror: nd, onunhandledrejection: id };
    }
    constructor(t) {
      e.prototype.__init.call(this),
        e.prototype.__init2.call(this),
        (this._options = D({ onerror: !0, onunhandledrejection: !0 }, t));
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      let t = this._options;
      for (let i in t) {
        let a = this._installFunc[i];
        a && t[i] && (sd(i), a(), (this._installFunc[i] = void 0));
      }
    }
  };
  ht.__initStatic();
  function nd() {
    je("error", (e) => {
      let [t, i, a] = Hs();
      if (!t.getIntegration(ht)) return;
      let { msg: f, url: d, line: m, column: x, error: _ } = e;
      if (mo() || (_ && _.__sentry_own_request__)) return;
      let T =
        _ === void 0 && Pe(f)
          ? ad(f, d, m, x)
          : Bs(qn(i, _ || f, void 0, a, !1), d, m, x);
      (T.level = "error"), Fs(t, _, T, "onerror");
    });
  }
  function id() {
    je("unhandledrejection", (e) => {
      let [t, i, a] = Hs();
      if (!t.getIntegration(ht)) return;
      let f = e;
      try {
        "reason" in e
          ? (f = e.reason)
          : "detail" in e && "reason" in e.detail && (f = e.detail.reason);
      } catch (m) {}
      if (mo() || (f && f.__sentry_own_request__)) return !0;
      let d = sr(f) ? od(f) : qn(i, f, void 0, a, !0);
      (d.level = "error"), Fs(t, f, d, "onunhandledrejection");
    });
  }
  function od(e) {
    return {
      exception: {
        values: [
          {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(
              e
            )}`,
          },
        ],
      },
    };
  }
  function ad(e, t, i, a) {
    let f =
        /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      d = ar(e) ? e.message : e,
      m = "Error",
      x = d.match(f);
    return (
      x && ((m = x[1]), (d = x[2])),
      Bs({ exception: { values: [{ type: m, value: d }] } }, t, i, a)
    );
  }
  function Bs(e, t, i, a) {
    let f = (e.exception = e.exception || {}),
      d = (f.values = f.values || []),
      m = (d[0] = d[0] || {}),
      x = (m.stacktrace = m.stacktrace || {}),
      _ = (x.frames = x.frames || []),
      T = isNaN(parseInt(a, 10)) ? void 0 : a,
      O = isNaN(parseInt(i, 10)) ? void 0 : i,
      C = Pe(t) && t.length > 0 ? t : Mi();
    return (
      _.length === 0 &&
        _.push({ colno: T, filename: C, function: "?", in_app: !0, lineno: O }),
      e
    );
  }
  function sd(e) {
    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
      B.log(`Global Handler attached: ${e}`);
  }
  function Fs(e, t, i, a) {
    ct(i, { handled: !1, type: a }),
      e.captureEvent(i, { originalException: t });
  }
  function Hs() {
    let e = ae(),
      t = e.getClient(),
      i = (t && t.getOptions()) || {
        stackParser: () => [],
        attachStacktrace: !1,
      };
    return [e, i.stackParser, i.attachStacktrace];
  }
  var ud = [
      "EventTarget",
      "Window",
      "Node",
      "ApplicationCache",
      "AudioTrackList",
      "ChannelMergerNode",
      "CryptoOperation",
      "EventSource",
      "FileReader",
      "HTMLUnknownElement",
      "IDBDatabase",
      "IDBRequest",
      "IDBTransaction",
      "KeyOperation",
      "MediaController",
      "MessagePort",
      "ModalWindow",
      "Notification",
      "SVGElementInstance",
      "Screen",
      "TextTrack",
      "TextTrackCue",
      "TextTrackList",
      "WebSocket",
      "WebSocketWorker",
      "Worker",
      "XMLHttpRequest",
      "XMLHttpRequestEventTarget",
      "XMLHttpRequestUpload",
    ],
    Gt = class e {
      static __initStatic() {
        this.id = "TryCatch";
      }
      __init() {
        this.name = e.id;
      }
      constructor(t) {
        e.prototype.__init.call(this),
          (this._options = D(
            {
              XMLHttpRequest: !0,
              eventTarget: !0,
              requestAnimationFrame: !0,
              setInterval: !0,
              setTimeout: !0,
            },
            t
          ));
      }
      setupOnce() {
        this._options.setTimeout && de(X, "setTimeout", $s),
          this._options.setInterval && de(X, "setInterval", $s),
          this._options.requestAnimationFrame &&
            de(X, "requestAnimationFrame", fd),
          this._options.XMLHttpRequest &&
            "XMLHttpRequest" in X &&
            de(XMLHttpRequest.prototype, "send", cd);
        let t = this._options.eventTarget;
        t && (Array.isArray(t) ? t : ud).forEach(ld);
      }
    };
  Gt.__initStatic();
  function $s(e) {
    return function (...t) {
      let i = t[0];
      return (
        (t[0] = wt(i, {
          mechanism: {
            data: { function: Le(e) },
            handled: !0,
            type: "instrument",
          },
        })),
        e.apply(this, t)
      );
    };
  }
  function fd(e) {
    return function (t) {
      return e.apply(this, [
        wt(t, {
          mechanism: {
            data: { function: "requestAnimationFrame", handler: Le(e) },
            handled: !0,
            type: "instrument",
          },
        }),
      ]);
    };
  }
  function cd(e) {
    return function (...t) {
      let i = this;
      return (
        ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
          (f) => {
            f in i &&
              typeof i[f] == "function" &&
              de(i, f, function (d) {
                let m = {
                    mechanism: {
                      data: { function: f, handler: Le(d) },
                      handled: !0,
                      type: "instrument",
                    },
                  },
                  x = Bt(d);
                return x && (m.mechanism.data.handler = Le(x)), wt(d, m);
              });
          }
        ),
        e.apply(this, t)
      );
    };
  }
  function ld(e) {
    let t = X,
      i = t[e] && t[e].prototype;
    !i ||
      !i.hasOwnProperty ||
      !i.hasOwnProperty("addEventListener") ||
      (de(i, "addEventListener", function (a) {
        return function (f, d, m) {
          try {
            typeof d.handleEvent == "function" &&
              (d.handleEvent = wt(d.handleEvent, {
                mechanism: {
                  data: { function: "handleEvent", handler: Le(d), target: e },
                  handled: !0,
                  type: "instrument",
                },
              }));
          } catch (x) {}
          return a.apply(this, [
            f,
            wt(d, {
              mechanism: {
                data: {
                  function: "addEventListener",
                  handler: Le(d),
                  target: e,
                },
                handled: !0,
                type: "instrument",
              },
            }),
            m,
          ]);
        };
      }),
      de(i, "removeEventListener", function (a) {
        return function (f, d, m) {
          let x = d;
          try {
            let _ = x && x.__sentry_wrapped__;
            _ && a.call(this, f, _, m);
          } catch (_) {}
          return a.call(this, f, x, m);
        };
      }));
  }
  var dd = "cause",
    pd = 5,
    Wt = class e {
      static __initStatic() {
        this.id = "LinkedErrors";
      }
      __init() {
        this.name = e.id;
      }
      constructor(t = {}) {
        e.prototype.__init.call(this),
          (this._key = t.key || dd),
          (this._limit = t.limit || pd);
      }
      setupOnce() {
        let t = ae().getClient();
        t &&
          Ht((i, a) => {
            let f = ae().getIntegration(e);
            return f
              ? hd(t.getOptions().stackParser, f._key, f._limit, i, a)
              : i;
          });
      }
    };
  Wt.__initStatic();
  function hd(e, t, i, a, f) {
    if (
      !a.exception ||
      !a.exception.values ||
      !f ||
      !ft(f.originalException, Error)
    )
      return a;
    let d = qs(e, i, f.originalException, t);
    return (a.exception.values = [...d, ...a.exception.values]), a;
  }
  function qs(e, t, i, a, f = []) {
    if (!ft(i[a], Error) || f.length + 1 >= t) return f;
    let d = _o(e, i[a]);
    return qs(e, t, i[a], a, [d, ...f]);
  }
  var Yt = class e {
    constructor() {
      e.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "HttpContext";
    }
    __init() {
      this.name = e.id;
    }
    setupOnce() {
      Ht((t) => {
        if (ae().getIntegration(e)) {
          if (!X.navigator && !X.location && !X.document) return t;
          let i =
              (t.request && t.request.url) || (X.location && X.location.href),
            { referrer: a } = X.document || {},
            { userAgent: f } = X.navigator || {},
            d = D(
              D(D({}, t.request && t.request.headers), a && { Referer: a }),
              f && { "User-Agent": f }
            ),
            m = ie(D(D({}, t.request), i && { url: i }), { headers: d });
          return ie(D({}, t), { request: m });
        }
        return t;
      });
    }
  };
  Yt.__initStatic();
  var zt = class e {
    constructor() {
      e.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "Dedupe";
    }
    __init() {
      this.name = e.id;
    }
    setupOnce(t, i) {
      let a = (f) => {
        if (f.type) return f;
        let d = i().getIntegration(e);
        if (d) {
          try {
            if (md(f, d._previousEvent))
              return (
                (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
                  B.warn(
                    "Event dropped due to being a duplicate of previously captured event."
                  ),
                null
              );
          } catch (m) {
            return (d._previousEvent = f);
          }
          return (d._previousEvent = f);
        }
        return f;
      };
      (a.id = this.name), t(a);
    }
  };
  zt.__initStatic();
  function md(e, t) {
    return t ? !!(gd(e, t) || yd(e, t)) : !1;
  }
  function gd(e, t) {
    let i = e.message,
      a = t.message;
    return !(
      (!i && !a) ||
      (i && !a) ||
      (!i && a) ||
      i !== a ||
      !zs(e, t) ||
      !Ys(e, t)
    );
  }
  function yd(e, t) {
    let i = Gs(t),
      a = Gs(e);
    return !(
      !i ||
      !a ||
      i.type !== a.type ||
      i.value !== a.value ||
      !zs(e, t) ||
      !Ys(e, t)
    );
  }
  function Ys(e, t) {
    let i = Ws(e),
      a = Ws(t);
    if (!i && !a) return !0;
    if ((i && !a) || (!i && a) || ((i = i), (a = a), a.length !== i.length))
      return !1;
    for (let f = 0; f < a.length; f++) {
      let d = a[f],
        m = i[f];
      if (
        d.filename !== m.filename ||
        d.lineno !== m.lineno ||
        d.colno !== m.colno ||
        d.function !== m.function
      )
        return !1;
    }
    return !0;
  }
  function zs(e, t) {
    let i = e.fingerprint,
      a = t.fingerprint;
    if (!i && !a) return !0;
    if ((i && !a) || (!i && a)) return !1;
    (i = i), (a = a);
    try {
      return i.join("") === a.join("");
    } catch (f) {
      return !1;
    }
  }
  function Gs(e) {
    return e.exception && e.exception.values && e.exception.values[0];
  }
  function Ws(e) {
    let t = e.exception;
    if (t)
      try {
        return t.values[0].stacktrace.frames;
      } catch (i) {
        return;
      }
  }
  var Js = [
    new $t.InboundFilters(),
    new $t.FunctionToString(),
    new Gt(),
    new qt(),
    new ht(),
    new Wt(),
    new zt(),
    new Yt(),
  ];
  function Eo(e = {}) {
    e.defaultIntegrations === void 0 && (e.defaultIntegrations = Js),
      e.release === void 0 &&
        (typeof __SENTRY_RELEASE__ == "string" &&
          (e.release = __SENTRY_RELEASE__),
        X.SENTRY_RELEASE &&
          X.SENTRY_RELEASE.id &&
          (e.release = X.SENTRY_RELEASE.id)),
      e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
      e.sendClientReports === void 0 && (e.sendClientReports = !0);
    let t = ie(D({}, e), {
      stackParser: $i(e.stackParser || Ms),
      integrations: co(e),
      transport: e.transport || (wn() ? Ls : js),
    });
    po(Wn, t), e.autoSessionTracking && _d();
  }
  function Vs(e) {
    e.startSession({ ignoreDuration: !0 }), e.captureSession();
  }
  function _d() {
    if (typeof X.document == "undefined") {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) &&
        B.warn(
          "Session tracking in non-browser environment with @sentry/browser is not supported."
        );
      return;
    }
    let e = ae();
    e.captureSession &&
      (Vs(e),
      je("history", ({ from: t, to: i }) => {
        t === void 0 || t === i || Vs(ae());
      }));
  }
  var So = {};
  pa(So, {
    Breadcrumbs: () => qt,
    Dedupe: () => zt,
    GlobalHandlers: () => ht,
    HttpContext: () => Yt,
    LinkedErrors: () => Wt,
    TryCatch: () => Gt,
  });
  var Ks = {};
  X.Sentry && X.Sentry.Integrations && (Ks = X.Sentry.Integrations);
  var I_ = D(D(D({}, Ks), $t), So);
  var vd = !1 === "true",
    Xs = (() => {
      let e = !1;
      return () => {
        var t;
        e ||
          ((e = !0),
          Eo({
            dsn: "https://5c5fd3fab037487d8c15378e0831ba37@o92392.ingest.sentry.io/4505466709344256",
            release: "scripts@0.29.0",
            tracesSampleRate: 0.4,
            allowUrls: [/scripts\.stay22\.com/, /stay22\.com/, /kit22\.com/],
            enabled: vd,
            initialScope: {
              tags: {
                product: "lma",
                aid: `${
                  ((t = window.Stay22) == null ? void 0 : t.params.aid) ||
                  "not set"
                }`,
              },
            },
          }));
      };
    })();
  var mt = Qe(vt(), 1);
  var Qs = `
<style>
  .s22-title {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .s22-responsive-wrap {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
  }

  .s22-responsive-wrap:before {
    content: "";  
    display: block;
    padding-top: 66%;
  }

  .s22-responsive-embed {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  /* mobile */
  @media (max-width: 767px) {
    .s22-responsive-wrap {
      min-height: 420px;
    }
  }
</style>
`;
  var Vr = Qe(vt(), 1),
    Zs = {
      getNearEndOfArticleNodeBind() {
        let e;
        try {
          let t = this.detectArticle();
          if (!(t != null && t.length))
            return (
              console.log(
                "[STAY22](INLINE) Warn: Can't find main article element"
              ),
              null
            );
          let i = t.find("p"),
            a = Math.floor(i.length / 2),
            f = i.eq(a);
          if (!f.length)
            return (
              console.log(
                "[STAY22](INLINE) Warn: Can't find place for attachment"
              ),
              null
            );
          let d = f.next();
          for (; d.length && !/^H[1-4]$/.test(d.prop("tagName")); )
            d = d.next();
          if (d != null && d.length) e = d.before.bind(d);
          else if (t != null && t.length) {
            let m = t.find("*"),
              x = Math.floor(m.length * 0.5),
              _ = m.eq(x),
              T = 4,
              O = _.parents().length - t.parents().length;
            for (; O > T && _.length; )
              (_ = _.parent()), (O = _.parents().length - t.parents().length);
            _.length ? (e = _.after.bind(_)) : (e = null);
          } else e = null;
        } catch (t) {
          console.log(`[STAY22] Error inserting inline: ${t}`);
        }
        return e;
      },
      detectArticle() {
        let i = ["h1", "h2", "h3", "h4", "h5", "h6"],
          f = function (O) {
            let C = O.prop("tagName").toLowerCase();
            return i.includes(C) || C === "p";
          },
          d = function (O) {
            let C = !1;
            return (
              O.siblings().each(function () {
                if (f((0, Vr.default)(this))) return (C = !0), !1;
              }),
              C
            );
          },
          m = function (O) {
            let C = O.find("p"),
              z = 0;
            C.each(function () {
              let M = (0, Vr.default)(this),
                xe = M.text().trim(),
                H = d(M);
              xe.length >= 100 && H && z++;
            });
            let I = O.text().trim().length;
            return { count: z, length: I };
          },
          x = (0, Vr.default)("article"),
          _ = null,
          T = 0;
        if (
          (x.each(function () {
            let O = (0, Vr.default)(this),
              { count: C, length: z } = m(O);
            z >= 3e3 && C >= 6 && C > T && ((_ = O), (T = C));
          }),
          _)
        )
          return _;
        if (x.length > 1) {
          let O = !1;
          if (
            (x.each(function (C) {
              if (C === 0) return;
              let z = x[C - 1],
                I = x[C];
              if (z.nextElementSibling === I) return (O = !0), !1;
            }),
            O)
          )
            return null;
        }
        return null;
      },
    };
  var eu = {
    init(e) {
      if (!e || !e.destination) return;
      let t = Zs.getNearEndOfArticleNodeBind();
      if (!t) {
        console.log(
          "[STAY22](INLINE) Warn: Can't find a suitable method to insert the widget"
        );
        return;
      }
      document.head.insertAdjacentHTML("beforeend", Qs),
        this.setSuppliersAndCategories(
          window.Stay22.userData,
          (e == null ? void 0 : e.geoData) || null
        );
      let i = this.renderInline(e.destination);
      t(i), this.generateTitle(e);
    },
    setSuppliersAndCategories(e, t) {
      if (
        (window.Stay22.params.inline.providers.length ||
          (window.Stay22.params.inline.providers = [
            "kayak",
            "booking",
            "stay22",
          ]),
        !window.Stay22.params.inline.categories.length)
      ) {
        let i = Y.getUserDistanceToDestination(e, t),
          a;
        i
          ? i < 1e5
            ? (a = "car")
            : i < 1e6
            ? (a = "accommodation")
            : (a = "flight")
          : (a = "accommodation"),
          (window.Stay22.params.inline.categories = [
            a,
            "accommodation",
            "map",
          ]);
      }
    },
    renderInline(e) {
      let t = Y.autoGenCampaign(),
        i = "inline",
        a = new URLSearchParams({
          habl: window.Stay22.habl,
          isinc: window.Stay22.isInc,
          aid: window.Stay22.params.aid,
          product: "lma",
          address: e,
          campaign: t,
          source: "embed",
          medium: i,
        });
      window.Stay22.params.inline.providers.forEach((m) => {
        a.append("providers", m);
      }),
        window.Stay22.params.inline.categories.forEach((m) => {
          a.append("categories", m);
        });
      let f = `${Ce}/embed/inline?${a.toString()}`,
        d = (0, mt.default)("<iframe>").attr({
          src: f,
          class: "s22-responsive-embed",
          id: "s22-iframe",
        });
      return (0, mt.default)("<p>", {
        class: "s22-responsive-wrap",
        id: "s22-inline",
        html: d.prop("outerHTML"),
      });
    },
    generateTitle(e) {
      return ue(this, null, function* () {
        let t = (0, mt.default)("h1, h2")
            .slice(0, 2)
            .map(function () {
              let _ = (0, mt.default)(this).text().trim();
              if (_) return "- " + _;
            })
            .get()
            .filter((_) => _).join(`
`),
          i = Lt.getLocationSummary(),
          a = e.destination,
          f = window.Stay22.params.inline.categories,
          d =
            window.Stay22.params.inline.presentationText ||
            "Your ticket to adventure: book your flight and hotel in one go!";
        try {
          d = (yield mt.default.ajax({
            url: `${It}/gpt/inline/headline`,
            type: "POST",
            data: JSON.stringify({
              hs: t,
              destination: a,
              categories: f,
              mainContent: i,
            }),
            dataType: "json",
            jsonp: !1,
            crossDomain: !0,
            headers: { "Content-Type": "application/json" },
          })).results.headline;
        } catch (_) {
          console.log("[STAY22](INLINE) Error: Can't generate headline");
        }
        let m = new Set();
        (0, mt.default)("h2").each(function () {
          let _ = (0, mt.default)(this).attr("class");
          _ &&
            _.split(/\s+/).forEach((T) => {
              T.includes("screen-") || m.add(T);
            });
        });
        let x = Array.from(m).join(" ");
        (0, mt.default)("<h2>", {
          class: `s22-title ${x}`,
          text: d,
        }).insertBefore("#s22-inline");
      });
    },
  };
  function ru(e) {
    return ue(this, null, function* () {
      let t = $a.findAllHrefs();
      t.length && nu(t, e, 0);
    });
  }
  function nu(e, t, i) {
    return ue(this, null, function* () {
      let f = Math.min(i + 100, e.length),
        d = e.slice(i, f);
      (d = Pr.addModifiedHref(d)),
        t.params.deepStruct.length &&
          (yield Pr.unfurlHrefs(d, t.params.deepStruct));
      let m = Pr.transformANYtoANYAllez(d, t.params.included);
      t.params.excludes.includes("hotelscombined") || Pr.transformHCtoBK(d),
        m.forEach((x) => {
          x.css("pointer-events") === "none" && x.css("pointer-events", "auto");
          let _ = x.attr("rel");
          if (_) {
            let O = _.split(" ").filter(
              (C) => C !== "noreferrer" && C !== "noopener"
            );
            O.length > 0 ? x.attr("rel", O.join(" ")) : x.removeAttr("rel");
          }
        }),
        f < e.length ? requestAnimationFrame(() => nu(e, t, f)) : Sd(t);
    });
  }
  function bd(e) {
    return ue(this, null, function* () {
      if (
        !e.userData ||
        Rr === "development" ||
        e.userData.isBot ||
        e.isInc ||
        e.habl ||
        !Y.isLocalStorageAvailable()
      )
        return;
      let t = Lt.getLocationSummary(),
        i = yield Lt.requestLocationSummary(t),
        a = i == null ? void 0 : i.destination;
      Si.loadSa([], i), e.params.maxPLevel !== "none" && a && Si.hit(a);
    });
  }
  function Ed(e) {
    return ue(this, null, function* () {
      var a;
      if (
        ((a = window.Stay22.userData) != null && a.isBot) ||
        !e.params.inline.enabled
      )
        return;
      let t = Lt.getLocationSummary(),
        i = yield Lt.requestLocationSummary(t);
      eu.init(i);
    });
  }
  function Sd(e) {
    if (e.observerActive) return;
    e.observerActive = !0;
    let t = {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href", "onclick"],
      },
      i = xi(() => {
        ru(e);
      }, 2222);
    new MutationObserver(i).observe(document.body, t), i();
  }
  function Td(e) {
    let t = " * ".repeat(22);
    console.log(`%c${t}`, "color: #293BFF;"),
      console.log(
        "%c LetMeAllez",
        "font-weight: bold; font-size: 50px; color: #293BFF; text-shadow: 3px 3px 0 #2BCCCC , 6px 6px 0 #57CCFF , 9px 9px 0 #33FF57 , 12px 12px 0 #FFC300 , 15px 15px 0 #FF5733 , 18px 18px 0 #F52B9A , 21px 21px 0 #9A2BF5;"
      );
    let i = Object.keys(e.params.ab)
        .filter((m) => e.params.ab[m])
        .join(", "),
      a = Rr === "development" ? "0.29.0 Dev" : "0.29.0",
      f = e.params.deepStruct.filter((m) => !Ei.includes(m));
    [
      ["[LMA] \u{1F516} Version   ", a],
      ["[LMA] \u{1F465} Partner ID", e.params.aid],
      ["[LMA] \u{1F6AB} Excludes  ", e.params.excludes.join(", ") || "(none)"],
      ["[LMA] \u{1F50E} deepStruct", f.join(", ") || "(none)"],
      ["[LMA] \u{1F3D5}\uFE0F Campaign  ", Y.autoGenCampaign() || "(none)"],
      [
        "[LMA] \u{1F961} Inline    ",
        e.params.inline.enabled ? "Enabled" : "Disabled",
      ],
      ["[LMA] \u{1F9EA} AB Test   ", i || "(off)"],
    ].forEach((m, x) => {
      let _ = x === 1,
        T = x === 2,
        O = x === 6,
        C = "color: #6B8FFF;";
      T && (C = m[1] === "(none)" ? "color: #33FF57;" : "color: #FF5733;"),
        _ && (C = m[1] === "stay22" ? "color: #FF5733;" : C),
        O && (C = m[1] !== "(off)" ? "color: #FF5733;" : C),
        console.log(`${m[0]}: %c${m[1]}`, `${C} font-weight: bold;`);
    }),
      console.log(`%c${t}`, "color: #293BFF;");
  }
  (0, tu.default)(function () {
    return ue(this, null, function* () {
      var f;
      if ((f = window.Stay22) != null && f.scriptLoaded) return;
      (window.Stay22 = window.Stay22 || {}),
        (window.Stay22.scriptLoaded = !0),
        Xs();
      let e = yield Oa();
      Td(e);
      let i = new qa().getVersion() === "control",
        a = { allez: ru, pop: bd, inline: Ed };
      for (let [d, m] of Object.entries(a)) (i || !e.params.ab[d]) && m(e);
    });
  });
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.0
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-05-11T18:29Z
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=letmeallez.js.map
