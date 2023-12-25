(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1439: function (t, e, n) {
      "use strict";
      n.d(e, {
        CR: function () {
          return l;
        },
        XA: function () {
          return s;
        },
        ZT: function () {
          return i;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return c;
        },
        pi: function () {
          return o;
        },
      });
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          o.apply(this, arguments)
        );
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      function s(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function l(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function c(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
    },
    8679: function (t, e, n) {
      "use strict";
      var r = n(1296),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function l(t) {
        return r.isMemo(t) ? a : s[t.$$typeof] || i;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      t.exports = function t(e, n, r) {
        if ("string" !== typeof n) {
          if (h) {
            var i = p(n);
            i && i !== h && t(e, i, r);
          }
          var a = u(n);
          d && (a = a.concat(d(n)));
          for (var s = l(e), m = l(n), v = 0; v < a.length; ++v) {
            var g = a[v];
            if (!o[g] && (!r || !r[g]) && (!m || !m[g]) && (!s || !s[g])) {
              var y = f(n, g);
              try {
                c(e, g, y);
              } catch (b) {}
            }
          }
        }
        return e;
      };
    },
    6103: function (t, e) {
      "use strict";
      var n = "function" === typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116,
        g = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;
      function x(t) {
        if ("object" === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch ((t = t.type)) {
                case u:
                case d:
                case o:
                case s:
                case a:
                case p:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case c:
                    case f:
                    case v:
                    case m:
                    case l:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      function k(t) {
        return x(t) === d;
      }
      (e.AsyncMode = u),
        (e.ConcurrentMode = d),
        (e.ContextConsumer = c),
        (e.ContextProvider = l),
        (e.Element = r),
        (e.ForwardRef = f),
        (e.Fragment = o),
        (e.Lazy = v),
        (e.Memo = m),
        (e.Portal = i),
        (e.Profiler = s),
        (e.StrictMode = a),
        (e.Suspense = p),
        (e.isAsyncMode = function (t) {
          return k(t) || x(t) === u;
        }),
        (e.isConcurrentMode = k),
        (e.isContextConsumer = function (t) {
          return x(t) === c;
        }),
        (e.isContextProvider = function (t) {
          return x(t) === l;
        }),
        (e.isElement = function (t) {
          return "object" === typeof t && null !== t && t.$$typeof === r;
        }),
        (e.isForwardRef = function (t) {
          return x(t) === f;
        }),
        (e.isFragment = function (t) {
          return x(t) === o;
        }),
        (e.isLazy = function (t) {
          return x(t) === v;
        }),
        (e.isMemo = function (t) {
          return x(t) === m;
        }),
        (e.isPortal = function (t) {
          return x(t) === i;
        }),
        (e.isProfiler = function (t) {
          return x(t) === s;
        }),
        (e.isStrictMode = function (t) {
          return x(t) === a;
        }),
        (e.isSuspense = function (t) {
          return x(t) === p;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" === typeof t ||
            "function" === typeof t ||
            t === o ||
            t === d ||
            t === s ||
            t === a ||
            t === p ||
            t === h ||
            ("object" === typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === m ||
                t.$$typeof === l ||
                t.$$typeof === c ||
                t.$$typeof === f ||
                t.$$typeof === y ||
                t.$$typeof === b ||
                t.$$typeof === w ||
                t.$$typeof === g))
          );
        }),
        (e.typeOf = x);
    },
    1296: function (t, e, n) {
      "use strict";
      t.exports = n(6103);
    },
    6267: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      }
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                a(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function c(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && d(t, e);
      }
      function u(t) {
        return (
          (u = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          u(t)
        );
      }
      function d(t, e) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          d(t, e)
        );
      }
      function f(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function p(t, e) {
        return !e || ("object" !== typeof e && "function" !== typeof e)
          ? f(t)
          : e;
      }
      function h(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = u(t);
          if (e) {
            var i = u(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      function m(t, e, n) {
        return (
          (m =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, n) {
                  var r = (function (t, e) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(t, e) &&
                      null !== (t = u(t));

                    );
                    return t;
                  })(t, e);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    return i.get ? i.get.call(n) : i.value;
                  }
                }),
          m(t, e, n || t)
        );
      }
      function v(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(t))
            )
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = t[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (l) {
              (i = !0), (o = l);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(t, e) ||
          y(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return b(t);
          })(t) ||
          (function (t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          y(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(t, e) {
        if (t) {
          if ("string" === typeof t) return b(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? b(t, e)
              : void 0
          );
        }
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n.r(e),
        n.d(e, {
          Native: function () {
            return mt;
          },
          Smooth: function () {
            return ht;
          },
        });
      var w = {
          el: document,
          name: "scroll",
          offset: [0, 0],
          repeat: !1,
          smooth: !1,
          initPosition: { x: 0, y: 0 },
          direction: "vertical",
          gestureDirection: "vertical",
          reloadOnContextChange: !1,
          lerp: 0.1,
          class: "is-inview",
          scrollbarContainer: !1,
          scrollbarClass: "c-scrollbar",
          scrollingClass: "has-scroll-scrolling",
          draggingClass: "has-scroll-dragging",
          smoothClass: "has-scroll-smooth",
          initClass: "has-scroll-init",
          getSpeed: !1,
          getDirection: !1,
          scrollFromAnywhere: !1,
          multiplier: 1,
          firefoxMultiplier: 50,
          touchMultiplier: 2,
          resetNativeScroll: !0,
          tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024,
          },
          smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
          },
        },
        x = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            r(this, t),
              Object.assign(this, w, e),
              (this.smartphone = w.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = w.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              (this.namespace = "locomotive"),
              (this.html = document.documentElement),
              (this.windowHeight = window.innerHeight),
              (this.windowWidth = window.innerWidth),
              (this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2,
              }),
              (this.els = {}),
              (this.currentElements = {}),
              (this.listeners = {}),
              (this.hasScrollTicking = !1),
              (this.hasCallEventSet = !1),
              (this.checkScroll = this.checkScroll.bind(this)),
              (this.checkResize = this.checkResize.bind(this)),
              (this.checkEvent = this.checkEvent.bind(this)),
              (this.instance = {
                scroll: { x: 0, y: 0 },
                limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
                currentElements: this.currentElements,
              }),
              this.isMobile
                ? this.isTablet
                  ? (this.context = "tablet")
                  : (this.context = "smartphone")
                : (this.context = "desktop"),
              this.isMobile && (this.direction = this[this.context].direction),
              "horizontal" === this.direction
                ? (this.directionAxis = "x")
                : (this.directionAxis = "y"),
              this.getDirection && (this.instance.direction = null),
              this.getDirection && (this.instance.speed = 0),
              this.html.classList.add(this.initClass),
              window.addEventListener("resize", this.checkResize, !1);
          }
          return (
            o(t, [
              {
                key: "init",
                value: function () {
                  this.initEvents();
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  this.dispatchScroll();
                },
              },
              {
                key: "checkResize",
                value: function () {
                  var t = this;
                  this.resizeTick ||
                    ((this.resizeTick = !0),
                    requestAnimationFrame(function () {
                      t.resize(), (t.resizeTick = !1);
                    }));
                },
              },
              { key: "resize", value: function () {} },
              {
                key: "checkContext",
                value: function () {
                  if (this.reloadOnContextChange) {
                    (this.isMobile =
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      ) ||
                      ("MacIntel" === navigator.platform &&
                        navigator.maxTouchPoints > 1) ||
                      this.windowWidth < this.tablet.breakpoint),
                      (this.isTablet =
                        this.isMobile &&
                        this.windowWidth >= this.tablet.breakpoint);
                    var t = this.context;
                    if (
                      (this.isMobile
                        ? this.isTablet
                          ? (this.context = "tablet")
                          : (this.context = "smartphone")
                        : (this.context = "desktop"),
                      t != this.context)
                    )
                      ("desktop" == t ? this.smooth : this[t].smooth) !=
                        ("desktop" == this.context
                          ? this.smooth
                          : this[this.context].smooth) &&
                        window.location.reload();
                  }
                },
              },
              {
                key: "initEvents",
                value: function () {
                  var t = this;
                  (this.scrollToEls = this.el.querySelectorAll(
                    "[data-".concat(this.name, "-to]")
                  )),
                    (this.setScrollTo = this.setScrollTo.bind(this)),
                    this.scrollToEls.forEach(function (e) {
                      e.addEventListener("click", t.setScrollTo, !1);
                    });
                },
              },
              {
                key: "setScrollTo",
                value: function (t) {
                  t.preventDefault(),
                    this.scrollTo(
                      t.currentTarget.getAttribute(
                        "data-".concat(this.name, "-href")
                      ) || t.currentTarget.getAttribute("href"),
                      {
                        offset: t.currentTarget.getAttribute(
                          "data-".concat(this.name, "-offset")
                        ),
                      }
                    );
                },
              },
              { key: "addElements", value: function () {} },
              {
                key: "detectElements",
                value: function (t) {
                  var e = this,
                    n = this.instance.scroll.y,
                    r = n + this.windowHeight,
                    i = this.instance.scroll.x,
                    o = i + this.windowWidth;
                  Object.entries(this.els).forEach(function (a) {
                    var s = v(a, 2),
                      l = s[0],
                      c = s[1];
                    if (
                      (!c ||
                        (c.inView && !t) ||
                        ("horizontal" === e.direction
                          ? o >= c.left && i < c.right && e.setInView(c, l)
                          : r >= c.top && n < c.bottom && e.setInView(c, l)),
                      c && c.inView)
                    )
                      if ("horizontal" === e.direction) {
                        var u = c.right - c.left;
                        (c.progress =
                          (e.instance.scroll.x - (c.left - e.windowWidth)) /
                          (u + e.windowWidth)),
                          (o < c.left || i > c.right) && e.setOutOfView(c, l);
                      } else {
                        var d = c.bottom - c.top;
                        (c.progress =
                          (e.instance.scroll.y - (c.top - e.windowHeight)) /
                          (d + e.windowHeight)),
                          (r < c.top || n > c.bottom) && e.setOutOfView(c, l);
                      }
                  }),
                    (this.hasScrollTicking = !1);
                },
              },
              {
                key: "setInView",
                value: function (t, e) {
                  (this.els[e].inView = !0),
                    t.el.classList.add(t.class),
                    (this.currentElements[e] = t),
                    t.call &&
                      this.hasCallEventSet &&
                      (this.dispatchCall(t, "enter"),
                      t.repeat || (this.els[e].call = !1));
                },
              },
              {
                key: "setOutOfView",
                value: function (t, e) {
                  var n = this;
                  (this.els[e].inView = !1),
                    Object.keys(this.currentElements).forEach(function (t) {
                      t === e && delete n.currentElements[t];
                    }),
                    t.call &&
                      this.hasCallEventSet &&
                      this.dispatchCall(t, "exit"),
                    t.repeat && t.el.classList.remove(t.class);
                },
              },
              {
                key: "dispatchCall",
                value: function (t, e) {
                  (this.callWay = e),
                    (this.callValue = t.call.split(",").map(function (t) {
                      return t.trim();
                    })),
                    (this.callObj = t),
                    1 == this.callValue.length &&
                      (this.callValue = this.callValue[0]);
                  var n = new Event(this.namespace + "call");
                  this.el.dispatchEvent(n);
                },
              },
              {
                key: "dispatchScroll",
                value: function () {
                  var t = new Event(this.namespace + "scroll");
                  this.el.dispatchEvent(t);
                },
              },
              {
                key: "setEvents",
                value: function (t, e) {
                  this.listeners[t] || (this.listeners[t] = []);
                  var n = this.listeners[t];
                  n.push(e),
                    1 === n.length &&
                      this.el.addEventListener(
                        this.namespace + t,
                        this.checkEvent,
                        !1
                      ),
                    "call" === t &&
                      ((this.hasCallEventSet = !0), this.detectElements(!0));
                },
              },
              {
                key: "unsetEvents",
                value: function (t, e) {
                  if (this.listeners[t]) {
                    var n = this.listeners[t],
                      r = n.indexOf(e);
                    r < 0 ||
                      (n.splice(r, 1),
                      0 === n.index &&
                        this.el.removeEventListener(
                          this.namespace + t,
                          this.checkEvent,
                          !1
                        ));
                  }
                },
              },
              {
                key: "checkEvent",
                value: function (t) {
                  var e = this,
                    n = t.type.replace(this.namespace, ""),
                    r = this.listeners[n];
                  r &&
                    0 !== r.length &&
                    r.forEach(function (t) {
                      switch (n) {
                        case "scroll":
                          return t(e.instance);
                        case "call":
                          return t(e.callValue, e.callWay, e.callObj);
                        default:
                          return t();
                      }
                    });
                },
              },
              { key: "startScroll", value: function () {} },
              { key: "stopScroll", value: function () {} },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.instance.scroll = { x: 0, y: 0 };
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t = this;
                  window.removeEventListener("resize", this.checkResize, !1),
                    Object.keys(this.listeners).forEach(function (e) {
                      t.el.removeEventListener(
                        t.namespace + e,
                        t.checkEvent,
                        !1
                      );
                    }),
                    (this.listeners = {}),
                    this.scrollToEls.forEach(function (e) {
                      e.removeEventListener("click", t.setScrollTo, !1);
                    }),
                    this.html.classList.remove(this.initClass);
                },
              },
            ]),
            t
          );
        })(),
        k =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof n.g
            ? n.g
            : "undefined" !== typeof self
            ? self
            : {};
      function S(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
      }
      var C = S(function (t, e) {
          t.exports = {
            polyfill: function () {
              var t = window,
                e = document;
              if (
                !("scrollBehavior" in e.documentElement.style) ||
                !0 === t.__forceSmoothScrollPolyfill__
              ) {
                var n,
                  r = t.HTMLElement || t.Element,
                  i = {
                    scroll: t.scroll || t.scrollTo,
                    scrollBy: t.scrollBy,
                    elementScroll: r.prototype.scroll || s,
                    scrollIntoView: r.prototype.scrollIntoView,
                  },
                  o =
                    t.performance && t.performance.now
                      ? t.performance.now.bind(t.performance)
                      : Date.now,
                  a =
                    ((n = t.navigator.userAgent),
                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n)
                      ? 1
                      : 0);
                (t.scroll = t.scrollTo =
                  function () {
                    void 0 !== arguments[0] &&
                      (!0 !== l(arguments[0])
                        ? h.call(
                            t,
                            e.body,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : t.scrollX || t.pageXOffset,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : t.scrollY || t.pageYOffset
                          )
                        : i.scroll.call(
                            t,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : "object" !== typeof arguments[0]
                              ? arguments[0]
                              : t.scrollX || t.pageXOffset,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : t.scrollY || t.pageYOffset
                          ));
                  }),
                  (t.scrollBy = function () {
                    void 0 !== arguments[0] &&
                      (l(arguments[0])
                        ? i.scrollBy.call(
                            t,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : "object" !== typeof arguments[0]
                              ? arguments[0]
                              : 0,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : 0
                          )
                        : h.call(
                            t,
                            e.body,
                            ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                            ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                          ));
                  }),
                  (r.prototype.scroll = r.prototype.scrollTo =
                    function () {
                      if (void 0 !== arguments[0])
                        if (!0 !== l(arguments[0])) {
                          var t = arguments[0].left,
                            e = arguments[0].top;
                          h.call(
                            this,
                            this,
                            "undefined" === typeof t ? this.scrollLeft : ~~t,
                            "undefined" === typeof e ? this.scrollTop : ~~e
                          );
                        } else {
                          if (
                            "number" === typeof arguments[0] &&
                            void 0 === arguments[1]
                          )
                            throw new SyntaxError(
                              "Value could not be converted"
                            );
                          i.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : "object" !== typeof arguments[0]
                              ? ~~arguments[0]
                              : this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : void 0 !== arguments[1]
                              ? ~~arguments[1]
                              : this.scrollTop
                          );
                        }
                    }),
                  (r.prototype.scrollBy = function () {
                    void 0 !== arguments[0] &&
                      (!0 !== l(arguments[0])
                        ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior,
                          })
                        : i.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left + this.scrollLeft
                              : ~~arguments[0] + this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top + this.scrollTop
                              : ~~arguments[1] + this.scrollTop
                          ));
                  }),
                  (r.prototype.scrollIntoView = function () {
                    if (!0 !== l(arguments[0])) {
                      var n = f(this),
                        r = n.getBoundingClientRect(),
                        o = this.getBoundingClientRect();
                      n !== e.body
                        ? (h.call(
                            this,
                            n,
                            n.scrollLeft + o.left - r.left,
                            n.scrollTop + o.top - r.top
                          ),
                          "fixed" !== t.getComputedStyle(n).position &&
                            t.scrollBy({
                              left: r.left,
                              top: r.top,
                              behavior: "smooth",
                            }))
                        : t.scrollBy({
                            left: o.left,
                            top: o.top,
                            behavior: "smooth",
                          });
                    } else
                      i.scrollIntoView.call(
                        this,
                        void 0 === arguments[0] || arguments[0]
                      );
                  });
              }
              function s(t, e) {
                (this.scrollLeft = t), (this.scrollTop = e);
              }
              function l(t) {
                if (
                  null === t ||
                  "object" !== typeof t ||
                  void 0 === t.behavior ||
                  "auto" === t.behavior ||
                  "instant" === t.behavior
                )
                  return !0;
                if ("object" === typeof t && "smooth" === t.behavior) return !1;
                throw new TypeError(
                  "behavior member of ScrollOptions " +
                    t.behavior +
                    " is not a valid value for enumeration ScrollBehavior."
                );
              }
              function c(t, e) {
                return "Y" === e
                  ? t.clientHeight + a < t.scrollHeight
                  : "X" === e
                  ? t.clientWidth + a < t.scrollWidth
                  : void 0;
              }
              function u(e, n) {
                var r = t.getComputedStyle(e, null)["overflow" + n];
                return "auto" === r || "scroll" === r;
              }
              function d(t) {
                var e = c(t, "Y") && u(t, "Y"),
                  n = c(t, "X") && u(t, "X");
                return e || n;
              }
              function f(t) {
                for (; t !== e.body && !1 === d(t); )
                  t = t.parentNode || t.host;
                return t;
              }
              function p(e) {
                var n,
                  r,
                  i,
                  a,
                  s = (o() - e.startTime) / 468;
                (a = s = s > 1 ? 1 : s),
                  (n = 0.5 * (1 - Math.cos(Math.PI * a))),
                  (r = e.startX + (e.x - e.startX) * n),
                  (i = e.startY + (e.y - e.startY) * n),
                  e.method.call(e.scrollable, r, i),
                  (r === e.x && i === e.y) ||
                    t.requestAnimationFrame(p.bind(t, e));
              }
              function h(n, r, a) {
                var l,
                  c,
                  u,
                  d,
                  f = o();
                n === e.body
                  ? ((l = t),
                    (c = t.scrollX || t.pageXOffset),
                    (u = t.scrollY || t.pageYOffset),
                    (d = i.scroll))
                  : ((l = n), (c = n.scrollLeft), (u = n.scrollTop), (d = s)),
                  p({
                    scrollable: l,
                    method: d,
                    startTime: f,
                    startX: c,
                    startY: u,
                    x: r,
                    y: a,
                  });
              }
            },
          };
        }),
        E =
          (C.polyfill,
          (function (t) {
            c(n, t);
            var e = h(n);
            function n() {
              var t,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                r(this, n),
                (t = e.call(this, i)).resetNativeScroll &&
                  (history.scrollRestoration &&
                    (history.scrollRestoration = "manual"),
                  window.scrollTo(0, 0)),
                window.addEventListener("scroll", t.checkScroll, !1),
                void 0 === window.smoothscrollPolyfill &&
                  ((window.smoothscrollPolyfill = C),
                  window.smoothscrollPolyfill.polyfill()),
                t
              );
            }
            return (
              o(n, [
                {
                  key: "init",
                  value: function () {
                    (this.instance.scroll.y = window.pageYOffset),
                      this.addElements(),
                      this.detectElements(),
                      m(u(n.prototype), "init", this).call(this);
                  },
                },
                {
                  key: "checkScroll",
                  value: function () {
                    var t = this;
                    m(u(n.prototype), "checkScroll", this).call(this),
                      this.getDirection && this.addDirection(),
                      this.getSpeed &&
                        (this.addSpeed(), (this.speedTs = Date.now())),
                      (this.instance.scroll.y = window.pageYOffset),
                      Object.entries(this.els).length &&
                        (this.hasScrollTicking ||
                          (requestAnimationFrame(function () {
                            t.detectElements();
                          }),
                          (this.hasScrollTicking = !0)));
                  },
                },
                {
                  key: "addDirection",
                  value: function () {
                    window.pageYOffset > this.instance.scroll.y
                      ? "down" !== this.instance.direction &&
                        (this.instance.direction = "down")
                      : window.pageYOffset < this.instance.scroll.y &&
                        "up" !== this.instance.direction &&
                        (this.instance.direction = "up");
                  },
                },
                {
                  key: "addSpeed",
                  value: function () {
                    window.pageYOffset != this.instance.scroll.y
                      ? (this.instance.speed =
                          (window.pageYOffset - this.instance.scroll.y) /
                          Math.max(1, Date.now() - this.speedTs))
                      : (this.instance.speed = 0);
                  },
                },
                {
                  key: "resize",
                  value: function () {
                    Object.entries(this.els).length &&
                      ((this.windowHeight = window.innerHeight),
                      this.updateElements());
                  },
                },
                {
                  key: "addElements",
                  value: function () {
                    var t = this;
                    (this.els = {}),
                      this.el
                        .querySelectorAll("[data-" + this.name + "]")
                        .forEach(function (e, n) {
                          e.getBoundingClientRect();
                          var r,
                            i,
                            o,
                            a = e.dataset[t.name + "Class"] || t.class,
                            s =
                              "string" === typeof e.dataset[t.name + "Id"]
                                ? e.dataset[t.name + "Id"]
                                : n,
                            l =
                              "string" === typeof e.dataset[t.name + "Offset"]
                                ? e.dataset[t.name + "Offset"].split(",")
                                : t.offset,
                            c = e.dataset[t.name + "Repeat"],
                            u = e.dataset[t.name + "Call"],
                            d = e.dataset[t.name + "Target"],
                            f = (o =
                              void 0 !== d
                                ? document.querySelector("".concat(d))
                                : e).getBoundingClientRect();
                          (r = f.top + t.instance.scroll.y),
                            (i = f.left + t.instance.scroll.x);
                          var p = r + o.offsetHeight,
                            h = i + o.offsetWidth;
                          c = "false" != c && (void 0 != c || t.repeat);
                          var m = t.getRelativeOffset(l),
                            v = {
                              el: e,
                              targetEl: o,
                              id: s,
                              class: a,
                              top: (r += m[0]),
                              bottom: (p -= m[1]),
                              left: i,
                              right: h,
                              offset: l,
                              progress: 0,
                              repeat: c,
                              inView: !1,
                              call: u,
                            };
                          (t.els[s] = v),
                            e.classList.contains(a) && t.setInView(t.els[s], s);
                        });
                  },
                },
                {
                  key: "updateElements",
                  value: function () {
                    var t = this;
                    Object.entries(this.els).forEach(function (e) {
                      var n = v(e, 2),
                        r = n[0],
                        i = n[1],
                        o =
                          i.targetEl.getBoundingClientRect().top +
                          t.instance.scroll.y,
                        a = o + i.targetEl.offsetHeight,
                        s = t.getRelativeOffset(i.offset);
                      (t.els[r].top = o + s[0]), (t.els[r].bottom = a - s[1]);
                    }),
                      (this.hasScrollTicking = !1);
                  },
                },
                {
                  key: "getRelativeOffset",
                  value: function (t) {
                    var e = [0, 0];
                    if (t)
                      for (var n = 0; n < t.length; n++)
                        "string" == typeof t[n]
                          ? t[n].includes("%")
                            ? (e[n] = parseInt(
                                (t[n].replace("%", "") * this.windowHeight) /
                                  100
                              ))
                            : (e[n] = parseInt(t[n]))
                          : (e[n] = t[n]);
                    return e;
                  },
                },
                {
                  key: "scrollTo",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = parseInt(e.offset) || 0,
                      r = !!e.callback && e.callback;
                    if ("string" === typeof t) {
                      if ("top" === t) t = this.html;
                      else if ("bottom" === t)
                        t = this.html.offsetHeight - window.innerHeight;
                      else if (!(t = document.querySelector(t))) return;
                    } else if ("number" === typeof t) t = parseInt(t);
                    else if (!t || !t.tagName)
                      return void console.warn(
                        "`target` parameter is not valid"
                      );
                    n =
                      "number" !== typeof t
                        ? t.getBoundingClientRect().top +
                          n +
                          this.instance.scroll.y
                        : t + n;
                    var i = function () {
                      return parseInt(window.pageYOffset) === parseInt(n);
                    };
                    if (r) {
                      if (i()) return void r();
                      var o = function t() {
                        i() && (window.removeEventListener("scroll", t), r());
                      };
                      window.addEventListener("scroll", o);
                    }
                    window.scrollTo({
                      top: n,
                      behavior: 0 === e.duration ? "auto" : "smooth",
                    });
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this.addElements(), this.detectElements();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    m(u(n.prototype), "destroy", this).call(this),
                      window.removeEventListener(
                        "scroll",
                        this.checkScroll,
                        !1
                      );
                  },
                },
              ]),
              n
            );
          })(x)),
        _ = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable;
      function P(t) {
        if (null === t || void 0 === t)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(t);
      }
      var j = (function () {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var e = {}, n = 0; n < 10; n++)
            e["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(e)
              .map(function (t) {
                return e[t];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (t) {
              r[t] = t;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (t, e) {
            for (var n, r, i = P(t), o = 1; o < arguments.length; o++) {
              for (var a in (n = Object(arguments[o])))
                T.call(n, a) && (i[a] = n[a]);
              if (_) {
                r = _(n);
                for (var s = 0; s < r.length; s++)
                  A.call(n, r[s]) && (i[r[s]] = n[r[s]]);
              }
            }
            return i;
          };
      function O() {}
      O.prototype = {
        on: function (t, e, n) {
          var r = this.e || (this.e = {});
          return (r[t] || (r[t] = [])).push({ fn: e, ctx: n }), this;
        },
        once: function (t, e, n) {
          var r = this;
          function i() {
            r.off(t, i), e.apply(n, arguments);
          }
          return (i._ = e), this.on(t, i, n);
        },
        emit: function (t) {
          for (
            var e = [].slice.call(arguments, 1),
              n = ((this.e || (this.e = {}))[t] || []).slice(),
              r = 0,
              i = n.length;
            r < i;
            r++
          )
            n[r].fn.apply(n[r].ctx, e);
          return this;
        },
        off: function (t, e) {
          var n = this.e || (this.e = {}),
            r = n[t],
            i = [];
          if (r && e)
            for (var o = 0, a = r.length; o < a; o++)
              r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
          return i.length ? (n[t] = i) : delete n[t], this;
        },
      };
      var I = O,
        M = S(function (t, e) {
          (function () {
            (null !== e ? e : this).Lethargy = (function () {
              function t(t, e, n, r) {
                (this.stability = null != t ? Math.abs(t) : 8),
                  (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                  (this.tolerance = null != n ? 1 + Math.abs(n) : 1.1),
                  (this.delay = null != r ? r : 150),
                  (this.lastUpDeltas = function () {
                    var t, e, n;
                    for (
                      n = [], t = 1, e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      n.push(null);
                    return n;
                  }.call(this)),
                  (this.lastDownDeltas = function () {
                    var t, e, n;
                    for (
                      n = [], t = 1, e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      n.push(null);
                    return n;
                  }.call(this)),
                  (this.deltasTimestamp = function () {
                    var t, e, n;
                    for (
                      n = [], t = 1, e = 2 * this.stability;
                      1 <= e ? t <= e : t >= e;
                      1 <= e ? t++ : t--
                    )
                      n.push(null);
                    return n;
                  }.call(this));
              }
              return (
                (t.prototype.check = function (t) {
                  var e;
                  return (
                    null != (t = t.originalEvent || t).wheelDelta
                      ? (e = t.wheelDelta)
                      : null != t.deltaY
                      ? (e = -40 * t.deltaY)
                      : (null == t.detail && 0 !== t.detail) ||
                        (e = -40 * t.detail),
                    this.deltasTimestamp.push(Date.now()),
                    this.deltasTimestamp.shift(),
                    e > 0
                      ? (this.lastUpDeltas.push(e),
                        this.lastUpDeltas.shift(),
                        this.isInertia(1))
                      : (this.lastDownDeltas.push(e),
                        this.lastDownDeltas.shift(),
                        this.isInertia(-1))
                  );
                }),
                (t.prototype.isInertia = function (t) {
                  var e, n, r, i, o, a, s;
                  return null ===
                    (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                    ? t
                    : !(
                        this.deltasTimestamp[2 * this.stability - 2] +
                          this.delay >
                          Date.now() && e[0] === e[2 * this.stability - 1]
                      ) &&
                        ((r = e.slice(0, this.stability)),
                        (n = e.slice(this.stability, 2 * this.stability)),
                        (s = r.reduce(function (t, e) {
                          return t + e;
                        })),
                        (o = n.reduce(function (t, e) {
                          return t + e;
                        })),
                        (a = s / r.length),
                        (i = o / n.length),
                        Math.abs(a) < Math.abs(i * this.tolerance) &&
                          this.sensitivity < Math.abs(i) &&
                          t);
                }),
                (t.prototype.showLastUpDeltas = function () {
                  return this.lastUpDeltas;
                }),
                (t.prototype.showLastDownDeltas = function () {
                  return this.lastDownDeltas;
                }),
                t
              );
            })();
          }).call(k);
        }),
        R = {
          hasWheelEvent: "onwheel" in document,
          hasMouseWheelEvent: "onmousewheel" in document,
          hasTouch:
            "ontouchstart" in window ||
            window.TouchEvent ||
            (window.DocumentTouch && document instanceof DocumentTouch),
          hasTouchWin:
            navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
          hasPointer: !!window.navigator.msPointerEnabled,
          hasKeyDown: "onkeydown" in document,
          isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
        },
        L = Object.prototype.toString,
        z = Object.prototype.hasOwnProperty;
      function D(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      var B = M.Lethargy,
        N = "virtualscroll",
        V = W,
        Y = 37,
        F = 38,
        H = 39,
        Z = 40,
        G = 32;
      function W(t) {
        !(function (t) {
          if (!t)
            return console.warn("bindAll requires at least one argument.");
          var e = Array.prototype.slice.call(arguments, 1);
          if (0 === e.length)
            for (var n in t)
              z.call(t, n) &&
                "function" == typeof t[n] &&
                "[object Function]" == L.call(t[n]) &&
                e.push(n);
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            t[i] = D(t[i], t);
          }
        })(
          this,
          "_onWheel",
          "_onMouseWheel",
          "_onTouchStart",
          "_onTouchMove",
          "_onKeyDown"
        ),
          (this.el = window),
          t && t.el && ((this.el = t.el), delete t.el),
          (this.options = j(
            {
              mouseMultiplier: 1,
              touchMultiplier: 2,
              firefoxMultiplier: 15,
              keyStep: 120,
              preventTouch: !1,
              unpreventTouchClass: "vs-touchmove-allowed",
              limitInertia: !1,
              useKeyboard: !0,
              useTouch: !0,
            },
            t
          )),
          this.options.limitInertia && (this._lethargy = new B()),
          (this._emitter = new I()),
          (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
          (this.touchStartX = null),
          (this.touchStartY = null),
          (this.bodyTouchAction = null),
          void 0 !== this.options.passive &&
            (this.listenerOptions = { passive: this.options.passive });
      }
      function U(t, e, n) {
        return (1 - n) * t + n * e;
      }
      function X(t) {
        var e = {};
        if (window.getComputedStyle) {
          var n = getComputedStyle(t),
            r = n.transform || n.webkitTransform || n.mozTransform,
            i = r.match(/^matrix3d\((.+)\)$/);
          return (
            i
              ? ((e.x = i ? parseFloat(i[1].split(", ")[12]) : 0),
                (e.y = i ? parseFloat(i[1].split(", ")[13]) : 0))
              : ((i = r.match(/^matrix\((.+)\)$/)),
                (e.x = i ? parseFloat(i[1].split(", ")[4]) : 0),
                (e.y = i ? parseFloat(i[1].split(", ")[5]) : 0)),
            e
          );
        }
      }
      function $(t) {
        for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
        return e;
      }
      (W.prototype._notify = function (t) {
        var e = this._event;
        (e.x += e.deltaX),
          (e.y += e.deltaY),
          this._emitter.emit(N, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t,
          });
      }),
        (W.prototype._onWheel = function (t) {
          var e = this.options;
          if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var n = this._event;
            (n.deltaX = t.wheelDeltaX || -1 * t.deltaX),
              (n.deltaY = t.wheelDeltaY || -1 * t.deltaY),
              R.isFirefox &&
                1 == t.deltaMode &&
                ((n.deltaX *= e.firefoxMultiplier),
                (n.deltaY *= e.firefoxMultiplier)),
              (n.deltaX *= e.mouseMultiplier),
              (n.deltaY *= e.mouseMultiplier),
              this._notify(t);
          }
        }),
        (W.prototype._onMouseWheel = function (t) {
          if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
              (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
              this._notify(t);
          }
        }),
        (W.prototype._onTouchStart = function (t) {
          var e = t.targetTouches ? t.targetTouches[0] : t;
          (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
        }),
        (W.prototype._onTouchMove = function (t) {
          var e = this.options;
          e.preventTouch &&
            !t.target.classList.contains(e.unpreventTouchClass) &&
            t.preventDefault();
          var n = this._event,
            r = t.targetTouches ? t.targetTouches[0] : t;
          (n.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier),
            (n.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier),
            (this.touchStartX = r.pageX),
            (this.touchStartY = r.pageY),
            this._notify(t);
        }),
        (W.prototype._onKeyDown = function (t) {
          var e = this._event;
          e.deltaX = e.deltaY = 0;
          var n = window.innerHeight - 40;
          switch (t.keyCode) {
            case Y:
            case F:
              e.deltaY = this.options.keyStep;
              break;
            case H:
            case Z:
              e.deltaY = -this.options.keyStep;
              break;
            case t.shiftKey:
              e.deltaY = n;
              break;
            case G:
              e.deltaY = -n;
              break;
            default:
              return;
          }
          this._notify(t);
        }),
        (W.prototype._bind = function () {
          R.hasWheelEvent &&
            this.el.addEventListener(
              "wheel",
              this._onWheel,
              this.listenerOptions
            ),
            R.hasMouseWheelEvent &&
              this.el.addEventListener(
                "mousewheel",
                this._onMouseWheel,
                this.listenerOptions
              ),
            R.hasTouch &&
              this.options.useTouch &&
              (this.el.addEventListener(
                "touchstart",
                this._onTouchStart,
                this.listenerOptions
              ),
              this.el.addEventListener(
                "touchmove",
                this._onTouchMove,
                this.listenerOptions
              )),
            R.hasPointer &&
              R.hasTouchWin &&
              ((this.bodyTouchAction = document.body.style.msTouchAction),
              (document.body.style.msTouchAction = "none"),
              this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
              this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
            R.hasKeyDown &&
              this.options.useKeyboard &&
              document.addEventListener("keydown", this._onKeyDown);
        }),
        (W.prototype._unbind = function () {
          R.hasWheelEvent &&
            this.el.removeEventListener("wheel", this._onWheel),
            R.hasMouseWheelEvent &&
              this.el.removeEventListener("mousewheel", this._onMouseWheel),
            R.hasTouch &&
              (this.el.removeEventListener("touchstart", this._onTouchStart),
              this.el.removeEventListener("touchmove", this._onTouchMove)),
            R.hasPointer &&
              R.hasTouchWin &&
              ((document.body.style.msTouchAction = this.bodyTouchAction),
              this.el.removeEventListener(
                "MSPointerDown",
                this._onTouchStart,
                !0
              ),
              this.el.removeEventListener(
                "MSPointerMove",
                this._onTouchMove,
                !0
              )),
            R.hasKeyDown &&
              this.options.useKeyboard &&
              document.removeEventListener("keydown", this._onKeyDown);
        }),
        (W.prototype.on = function (t, e) {
          this._emitter.on(N, t, e);
          var n = this._emitter.e;
          n && n[N] && 1 === n[N].length && this._bind();
        }),
        (W.prototype.off = function (t, e) {
          this._emitter.off(N, t, e);
          var n = this._emitter.e;
          (!n[N] || n[N].length <= 0) && this._unbind();
        }),
        (W.prototype.reset = function () {
          var t = this._event;
          (t.x = 0), (t.y = 0);
        }),
        (W.prototype.destroy = function () {
          this._emitter.off(), this._unbind();
        });
      var q = 0.1,
        K = "function" === typeof Float32Array;
      function J(t, e) {
        return 1 - 3 * e + 3 * t;
      }
      function Q(t, e) {
        return 3 * e - 6 * t;
      }
      function tt(t) {
        return 3 * t;
      }
      function et(t, e, n) {
        return ((J(e, n) * t + Q(e, n)) * t + tt(e)) * t;
      }
      function nt(t, e, n) {
        return 3 * J(e, n) * t * t + 2 * Q(e, n) * t + tt(e);
      }
      function rt(t) {
        return t;
      }
      var it = function (t, e, n, r) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
          if (t === e && n === r) return rt;
          for (
            var i = K ? new Float32Array(11) : new Array(11), o = 0;
            o < 11;
            ++o
          )
            i[o] = et(o * q, t, n);
          function a(e) {
            for (var r = 0, o = 1; 10 !== o && i[o] <= e; ++o) r += q;
            --o;
            var a = r + ((e - i[o]) / (i[o + 1] - i[o])) * q,
              s = nt(a, t, n);
            return s >= 0.001
              ? (function (t, e, n, r) {
                  for (var i = 0; i < 4; ++i) {
                    var o = nt(e, n, r);
                    if (0 === o) return e;
                    e -= (et(e, n, r) - t) / o;
                  }
                  return e;
                })(e, a, t, n)
              : 0 === s
              ? a
              : (function (t, e, n, r, i) {
                  var o,
                    a,
                    s = 0;
                  do {
                    (o = et((a = e + (n - e) / 2), r, i) - t) > 0
                      ? (n = a)
                      : (e = a);
                  } while (Math.abs(o) > 1e-7 && ++s < 10);
                  return a;
                })(e, r, r + q, t, n);
          }
          return function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : et(a(t), e, r);
          };
        },
        ot = 38,
        at = 40,
        st = 32,
        lt = 9,
        ct = 33,
        ut = 34,
        dt = 36,
        ft = 35,
        pt = (function (t) {
          c(n, t);
          var e = h(n);
          function n() {
            var t,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              r(this, n),
              history.scrollRestoration &&
                (history.scrollRestoration = "manual"),
              window.scrollTo(0, 0),
              (t = e.call(this, i)).inertia && (t.lerp = 0.1 * t.inertia),
              (t.isScrolling = !1),
              (t.isDraggingScrollbar = !1),
              (t.isTicking = !1),
              (t.hasScrollTicking = !1),
              (t.parallaxElements = {}),
              (t.stop = !1),
              (t.scrollbarContainer = i.scrollbarContainer),
              (t.checkKey = t.checkKey.bind(f(t))),
              window.addEventListener("keydown", t.checkKey, !1),
              t
            );
          }
          return (
            o(n, [
              {
                key: "init",
                value: function () {
                  var t = this;
                  this.html.classList.add(this.smoothClass),
                    this.html.setAttribute(
                      "data-".concat(this.name, "-direction"),
                      this.direction
                    ),
                    (this.instance = l(
                      {
                        delta: {
                          x: this.initPosition.x,
                          y: this.initPosition.y,
                        },
                        scroll: {
                          x: this.initPosition.x,
                          y: this.initPosition.y,
                        },
                      },
                      this.instance
                    )),
                    (this.vs = new V({
                      el: this.scrollFromAnywhere ? document : this.el,
                      mouseMultiplier:
                        navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                      firefoxMultiplier: this.firefoxMultiplier,
                      touchMultiplier: this.touchMultiplier,
                      useKeyboard: !1,
                      passive: !0,
                    })),
                    this.vs.on(function (e) {
                      t.stop ||
                        t.isDraggingScrollbar ||
                        requestAnimationFrame(function () {
                          t.updateDelta(e), t.isScrolling || t.startScrolling();
                        });
                    }),
                    this.setScrollLimit(),
                    this.initScrollBar(),
                    this.addSections(),
                    this.addElements(),
                    this.checkScroll(!0),
                    this.transformElements(!0, !0),
                    m(u(n.prototype), "init", this).call(this);
                },
              },
              {
                key: "setScrollLimit",
                value: function () {
                  if (
                    ((this.instance.limit.y =
                      this.el.offsetHeight - this.windowHeight),
                    "horizontal" === this.direction)
                  ) {
                    for (
                      var t = 0, e = this.el.children, n = 0;
                      n < e.length;
                      n++
                    )
                      t += e[n].offsetWidth;
                    this.instance.limit.x = t - this.windowWidth;
                  }
                },
              },
              {
                key: "startScrolling",
                value: function () {
                  (this.startScrollTs = Date.now()),
                    (this.isScrolling = !0),
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass);
                },
              },
              {
                key: "stopScrolling",
                value: function () {
                  cancelAnimationFrame(this.checkScrollRaf),
                    (this.startScrollTs = void 0),
                    this.scrollToRaf &&
                      (cancelAnimationFrame(this.scrollToRaf),
                      (this.scrollToRaf = null)),
                    (this.isScrolling = !1),
                    (this.instance.scroll.y = Math.round(
                      this.instance.scroll.y
                    )),
                    this.html.classList.remove(this.scrollingClass);
                },
              },
              {
                key: "checkKey",
                value: function (t) {
                  var e = this;
                  if (this.stop)
                    t.keyCode == lt &&
                      requestAnimationFrame(function () {
                        (e.html.scrollTop = 0),
                          (document.body.scrollTop = 0),
                          (e.html.scrollLeft = 0),
                          (document.body.scrollLeft = 0);
                      });
                  else {
                    switch (t.keyCode) {
                      case lt:
                        requestAnimationFrame(function () {
                          (e.html.scrollTop = 0),
                            (document.body.scrollTop = 0),
                            (e.html.scrollLeft = 0),
                            (document.body.scrollLeft = 0),
                            e.scrollTo(document.activeElement, {
                              offset: -window.innerHeight / 2,
                            });
                        });
                        break;
                      case ot:
                        this.instance.delta[this.directionAxis] -= 240;
                        break;
                      case at:
                        this.instance.delta[this.directionAxis] += 240;
                        break;
                      case ct:
                        this.instance.delta[this.directionAxis] -=
                          window.innerHeight;
                        break;
                      case ut:
                        this.instance.delta[this.directionAxis] +=
                          window.innerHeight;
                        break;
                      case dt:
                        this.instance.delta[this.directionAxis] -=
                          this.instance.limit[this.directionAxis];
                        break;
                      case ft:
                        this.instance.delta[this.directionAxis] +=
                          this.instance.limit[this.directionAxis];
                        break;
                      case st:
                        document.activeElement instanceof HTMLInputElement ||
                          document.activeElement instanceof
                            HTMLTextAreaElement ||
                          (t.shiftKey
                            ? (this.instance.delta[this.directionAxis] -=
                                window.innerHeight)
                            : (this.instance.delta[this.directionAxis] +=
                                window.innerHeight));
                        break;
                      default:
                        return;
                    }
                    this.instance.delta[this.directionAxis] < 0 &&
                      (this.instance.delta[this.directionAxis] = 0),
                      this.instance.delta[this.directionAxis] >
                        this.instance.limit[this.directionAxis] &&
                        (this.instance.delta[this.directionAxis] =
                          this.instance.limit[this.directionAxis]),
                      this.stopScrolling(),
                      (this.isScrolling = !0),
                      this.checkScroll(),
                      this.html.classList.add(this.scrollingClass);
                  }
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  if (e || this.isScrolling || this.isDraggingScrollbar) {
                    this.hasScrollTicking ||
                      ((this.checkScrollRaf = requestAnimationFrame(
                        function () {
                          return t.checkScroll();
                        }
                      )),
                      (this.hasScrollTicking = !0)),
                      this.updateScroll();
                    var r = Math.abs(
                        this.instance.delta[this.directionAxis] -
                          this.instance.scroll[this.directionAxis]
                      ),
                      i = Date.now() - this.startScrollTs;
                    if (
                      (!this.animatingScroll &&
                        i > 100 &&
                        ((r < 0.5 &&
                          0 != this.instance.delta[this.directionAxis]) ||
                          (r < 0.5 &&
                            0 == this.instance.delta[this.directionAxis])) &&
                        this.stopScrolling(),
                      Object.entries(this.sections).forEach(function (n) {
                        var r = v(n, 2),
                          i = (r[0], r[1]);
                        i.persistent ||
                        (t.instance.scroll[t.directionAxis] >
                          i.offset[t.directionAxis] &&
                          t.instance.scroll[t.directionAxis] <
                            i.limit[t.directionAxis])
                          ? ("horizontal" === t.direction
                              ? t.transform(
                                  i.el,
                                  -t.instance.scroll[t.directionAxis],
                                  0
                                )
                              : t.transform(
                                  i.el,
                                  0,
                                  -t.instance.scroll[t.directionAxis]
                                ),
                            i.inView ||
                              ((i.inView = !0),
                              (i.el.style.opacity = 1),
                              (i.el.style.pointerEvents = "all"),
                              i.el.setAttribute(
                                "data-".concat(t.name, "-section-inview"),
                                ""
                              )))
                          : ((i.inView || e) &&
                              ((i.inView = !1),
                              (i.el.style.opacity = 0),
                              (i.el.style.pointerEvents = "none"),
                              i.el.removeAttribute(
                                "data-".concat(t.name, "-section-inview")
                              )),
                            t.transform(i.el, 0, 0));
                      }),
                      this.getDirection && this.addDirection(),
                      this.getSpeed &&
                        (this.addSpeed(), (this.speedTs = Date.now())),
                      this.detectElements(),
                      this.transformElements(),
                      this.hasScrollbar)
                    ) {
                      var o =
                        (this.instance.scroll[this.directionAxis] /
                          this.instance.limit[this.directionAxis]) *
                        this.scrollBarLimit[this.directionAxis];
                      "horizontal" === this.direction
                        ? this.transform(this.scrollbarThumb, o, 0)
                        : this.transform(this.scrollbarThumb, 0, o);
                    }
                    m(u(n.prototype), "checkScroll", this).call(this),
                      (this.hasScrollTicking = !1);
                  }
                },
              },
              {
                key: "resize",
                value: function () {
                  (this.windowHeight = window.innerHeight),
                    (this.windowWidth = window.innerWidth),
                    this.checkContext(),
                    (this.windowMiddle = {
                      x: this.windowWidth / 2,
                      y: this.windowHeight / 2,
                    }),
                    this.update();
                },
              },
              {
                key: "updateDelta",
                value: function (t) {
                  var e,
                    n =
                      this[this.context] && this[this.context].gestureDirection
                        ? this[this.context].gestureDirection
                        : this.gestureDirection;
                  (e =
                    "both" === n
                      ? t.deltaX + t.deltaY
                      : "vertical" === n
                      ? t.deltaY
                      : "horizontal" === n
                      ? t.deltaX
                      : t.deltaY),
                    (this.instance.delta[this.directionAxis] -=
                      e * this.multiplier),
                    this.instance.delta[this.directionAxis] < 0 &&
                      (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] >
                      this.instance.limit[this.directionAxis] &&
                      (this.instance.delta[this.directionAxis] =
                        this.instance.limit[this.directionAxis]);
                },
              },
              {
                key: "updateScroll",
                value: function (t) {
                  this.isScrolling || this.isDraggingScrollbar
                    ? (this.instance.scroll[this.directionAxis] = U(
                        this.instance.scroll[this.directionAxis],
                        this.instance.delta[this.directionAxis],
                        this.lerp
                      ))
                    : this.instance.scroll[this.directionAxis] >
                      this.instance.limit[this.directionAxis]
                    ? this.setScroll(
                        this.instance.scroll[this.directionAxis],
                        this.instance.limit[this.directionAxis]
                      )
                    : this.instance.scroll.y < 0
                    ? this.setScroll(
                        this.instance.scroll[this.directionAxis],
                        0
                      )
                    : this.setScroll(
                        this.instance.scroll[this.directionAxis],
                        this.instance.delta[this.directionAxis]
                      );
                },
              },
              {
                key: "addDirection",
                value: function () {
                  this.instance.delta.y > this.instance.scroll.y
                    ? "down" !== this.instance.direction &&
                      (this.instance.direction = "down")
                    : this.instance.delta.y < this.instance.scroll.y &&
                      "up" !== this.instance.direction &&
                      (this.instance.direction = "up"),
                    this.instance.delta.x > this.instance.scroll.x
                      ? "right" !== this.instance.direction &&
                        (this.instance.direction = "right")
                      : this.instance.delta.x < this.instance.scroll.x &&
                        "left" !== this.instance.direction &&
                        (this.instance.direction = "left");
                },
              },
              {
                key: "addSpeed",
                value: function () {
                  this.instance.delta[this.directionAxis] !=
                  this.instance.scroll[this.directionAxis]
                    ? (this.instance.speed =
                        (this.instance.delta[this.directionAxis] -
                          this.instance.scroll[this.directionAxis]) /
                        Math.max(1, Date.now() - this.speedTs))
                    : (this.instance.speed = 0);
                },
              },
              {
                key: "initScrollBar",
                value: function () {
                  if (
                    ((this.scrollbar = document.createElement("span")),
                    (this.scrollbarThumb = document.createElement("span")),
                    this.scrollbar.classList.add(
                      "".concat(this.scrollbarClass)
                    ),
                    this.scrollbarThumb.classList.add(
                      "".concat(this.scrollbarClass, "_thumb")
                    ),
                    this.scrollbar.append(this.scrollbarThumb),
                    this.scrollbarContainer
                      ? this.scrollbarContainer.append(this.scrollbar)
                      : document.body.append(this.scrollbar),
                    (this.getScrollBar = this.getScrollBar.bind(this)),
                    (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                    (this.moveScrollBar = this.moveScrollBar.bind(this)),
                    this.scrollbarThumb.addEventListener(
                      "mousedown",
                      this.getScrollBar
                    ),
                    window.addEventListener("mouseup", this.releaseScrollBar),
                    window.addEventListener("mousemove", this.moveScrollBar),
                    (this.hasScrollbar = !1),
                    "horizontal" == this.direction)
                  ) {
                    if (
                      this.instance.limit.x + this.windowWidth <=
                      this.windowWidth
                    )
                      return;
                  } else if (
                    this.instance.limit.y + this.windowHeight <=
                    this.windowHeight
                  )
                    return;
                  (this.hasScrollbar = !0),
                    (this.scrollbarBCR =
                      this.scrollbar.getBoundingClientRect()),
                    (this.scrollbarHeight = this.scrollbarBCR.height),
                    (this.scrollbarWidth = this.scrollbarBCR.width),
                    "horizontal" === this.direction
                      ? (this.scrollbarThumb.style.width = "".concat(
                          (this.scrollbarWidth * this.scrollbarWidth) /
                            (this.instance.limit.x + this.scrollbarWidth),
                          "px"
                        ))
                      : (this.scrollbarThumb.style.height = "".concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit.y + this.scrollbarHeight),
                          "px"
                        )),
                    (this.scrollbarThumbBCR =
                      this.scrollbarThumb.getBoundingClientRect()),
                    (this.scrollBarLimit = {
                      x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                      y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                    });
                },
              },
              {
                key: "reinitScrollBar",
                value: function () {
                  if (
                    ((this.hasScrollbar = !1), "horizontal" == this.direction)
                  ) {
                    if (
                      this.instance.limit.x + this.windowWidth <=
                      this.windowWidth
                    )
                      return;
                  } else if (
                    this.instance.limit.y + this.windowHeight <=
                    this.windowHeight
                  )
                    return;
                  (this.hasScrollbar = !0),
                    (this.scrollbarBCR =
                      this.scrollbar.getBoundingClientRect()),
                    (this.scrollbarHeight = this.scrollbarBCR.height),
                    (this.scrollbarWidth = this.scrollbarBCR.width),
                    "horizontal" === this.direction
                      ? (this.scrollbarThumb.style.width = "".concat(
                          (this.scrollbarWidth * this.scrollbarWidth) /
                            (this.instance.limit.x + this.scrollbarWidth),
                          "px"
                        ))
                      : (this.scrollbarThumb.style.height = "".concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit.y + this.scrollbarHeight),
                          "px"
                        )),
                    (this.scrollbarThumbBCR =
                      this.scrollbarThumb.getBoundingClientRect()),
                    (this.scrollBarLimit = {
                      x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                      y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                    });
                },
              },
              {
                key: "destroyScrollBar",
                value: function () {
                  this.scrollbarThumb.removeEventListener(
                    "mousedown",
                    this.getScrollBar
                  ),
                    window.removeEventListener(
                      "mouseup",
                      this.releaseScrollBar
                    ),
                    window.removeEventListener("mousemove", this.moveScrollBar),
                    this.scrollbar.remove();
                },
              },
              {
                key: "getScrollBar",
                value: function (t) {
                  (this.isDraggingScrollbar = !0),
                    this.checkScroll(),
                    this.html.classList.remove(this.scrollingClass),
                    this.html.classList.add(this.draggingClass);
                },
              },
              {
                key: "releaseScrollBar",
                value: function (t) {
                  (this.isDraggingScrollbar = !1),
                    this.isScrolling &&
                      this.html.classList.add(this.scrollingClass),
                    this.html.classList.remove(this.draggingClass);
                },
              },
              {
                key: "moveScrollBar",
                value: function (t) {
                  var e = this;
                  this.isDraggingScrollbar &&
                    requestAnimationFrame(function () {
                      var n =
                          (((100 * (t.clientX - e.scrollbarBCR.left)) /
                            e.scrollbarWidth) *
                            e.instance.limit.x) /
                          100,
                        r =
                          (((100 * (t.clientY - e.scrollbarBCR.top)) /
                            e.scrollbarHeight) *
                            e.instance.limit.y) /
                          100;
                      r > 0 &&
                        r < e.instance.limit.y &&
                        (e.instance.delta.y = r),
                        n > 0 &&
                          n < e.instance.limit.x &&
                          (e.instance.delta.x = n);
                    });
                },
              },
              {
                key: "addElements",
                value: function () {
                  var t = this;
                  (this.els = {}),
                    (this.parallaxElements = {}),
                    this.el
                      .querySelectorAll("[data-".concat(this.name, "]"))
                      .forEach(function (e, n) {
                        var r,
                          i,
                          o,
                          a = $(e),
                          s = Object.entries(t.sections)
                            .map(function (t) {
                              var e = v(t, 2);
                              e[0];
                              return e[1];
                            })
                            .find(function (t) {
                              return a.includes(t.el);
                            }),
                          l = e.dataset[t.name + "Class"] || t.class,
                          c =
                            "string" === typeof e.dataset[t.name + "Id"]
                              ? e.dataset[t.name + "Id"]
                              : "el" + n,
                          u = e.dataset[t.name + "Repeat"],
                          d = e.dataset[t.name + "Call"],
                          f = e.dataset[t.name + "Position"],
                          p = e.dataset[t.name + "Delay"],
                          h = e.dataset[t.name + "Direction"],
                          m = "string" === typeof e.dataset[t.name + "Sticky"],
                          g =
                            !!e.dataset[t.name + "Speed"] &&
                            parseFloat(e.dataset[t.name + "Speed"]) / 10,
                          y =
                            "string" === typeof e.dataset[t.name + "Offset"]
                              ? e.dataset[t.name + "Offset"].split(",")
                              : t.offset,
                          b = e.dataset[t.name + "Target"],
                          w = (o =
                            void 0 !== b
                              ? document.querySelector("".concat(b))
                              : e).getBoundingClientRect();
                        null === s || s.inView
                          ? ((r = w.top + t.instance.scroll.y - X(o).y),
                            (i = w.left + t.instance.scroll.x - X(o).x))
                          : ((r = w.top - X(s.el).y - X(o).y),
                            (i = w.left - X(s.el).x - X(o).x));
                        var x = r + o.offsetHeight,
                          k = i + o.offsetWidth,
                          S = { x: (k - i) / 2 + i, y: (x - r) / 2 + r };
                        if (m) {
                          var C = e.getBoundingClientRect(),
                            E = C.top,
                            _ = C.left,
                            T = { x: _ - i, y: E - r };
                          (r += window.innerHeight),
                            (i += window.innerWidth),
                            (x =
                              E +
                              o.offsetHeight -
                              e.offsetHeight -
                              T[t.directionAxis]),
                            (S = {
                              x:
                                ((k =
                                  _ +
                                  o.offsetWidth -
                                  e.offsetWidth -
                                  T[t.directionAxis]) -
                                  i) /
                                  2 +
                                i,
                              y: (x - r) / 2 + r,
                            });
                        }
                        u = "false" != u && (void 0 != u || t.repeat);
                        var A = [0, 0];
                        if (y)
                          if ("horizontal" === t.direction) {
                            for (var P = 0; P < y.length; P++)
                              "string" == typeof y[P]
                                ? y[P].includes("%")
                                  ? (A[P] = parseInt(
                                      (y[P].replace("%", "") * t.windowWidth) /
                                        100
                                    ))
                                  : (A[P] = parseInt(y[P]))
                                : (A[P] = y[P]);
                            (i += A[0]), (k -= A[1]);
                          } else {
                            for (P = 0; P < y.length; P++)
                              "string" == typeof y[P]
                                ? y[P].includes("%")
                                  ? (A[P] = parseInt(
                                      (y[P].replace("%", "") * t.windowHeight) /
                                        100
                                    ))
                                  : (A[P] = parseInt(y[P]))
                                : (A[P] = y[P]);
                            (r += A[0]), (x -= A[1]);
                          }
                        var j = {
                          el: e,
                          id: c,
                          class: l,
                          section: s,
                          top: r,
                          middle: S,
                          bottom: x,
                          left: i,
                          right: k,
                          offset: y,
                          progress: 0,
                          repeat: u,
                          inView: !1,
                          call: d,
                          speed: g,
                          delay: p,
                          position: f,
                          target: o,
                          direction: h,
                          sticky: m,
                        };
                        (t.els[c] = j),
                          e.classList.contains(l) && t.setInView(t.els[c], c),
                          (!1 !== g || m) && (t.parallaxElements[c] = j);
                      });
                },
              },
              {
                key: "addSections",
                value: function () {
                  var t = this;
                  this.sections = {};
                  var e = this.el.querySelectorAll(
                    "[data-".concat(this.name, "-section]")
                  );
                  0 === e.length && (e = [this.el]),
                    e.forEach(function (e, n) {
                      var r =
                          "string" === typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : "section" + n,
                        i = e.getBoundingClientRect(),
                        o = {
                          x: i.left - 1.5 * window.innerWidth - X(e).x,
                          y: i.top - 1.5 * window.innerHeight - X(e).y,
                        },
                        a = {
                          x: o.x + i.width + 2 * window.innerWidth,
                          y: o.y + i.height + 2 * window.innerHeight,
                        },
                        s =
                          "string" === typeof e.dataset[t.name + "Persistent"];
                      e.setAttribute("data-scroll-section-id", r);
                      var l = {
                        el: e,
                        offset: o,
                        limit: a,
                        inView: !1,
                        persistent: s,
                        id: r,
                      };
                      t.sections[r] = l;
                    });
                },
              },
              {
                key: "transform",
                value: function (t, e, n, r) {
                  var i;
                  if (r) {
                    var o = X(t),
                      a = U(o.x, e, r),
                      s = U(o.y, n, r);
                    i = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                      .concat(a, ",")
                      .concat(s, ",0,1)");
                  } else
                    i = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                      .concat(e, ",")
                      .concat(n, ",0,1)");
                  (t.style.webkitTransform = i),
                    (t.style.msTransform = i),
                    (t.style.transform = i);
                },
              },
              {
                key: "transformElements",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.instance.scroll.x + this.windowWidth,
                    i = this.instance.scroll.y + this.windowHeight,
                    o = {
                      x: this.instance.scroll.x + this.windowMiddle.x,
                      y: this.instance.scroll.y + this.windowMiddle.y,
                    };
                  Object.entries(this.parallaxElements).forEach(function (a) {
                    var s = v(a, 2),
                      l = (s[0], s[1]),
                      c = !1;
                    if ((t && (c = 0), l.inView || n))
                      switch (l.position) {
                        case "top":
                        case "left":
                          c = e.instance.scroll[e.directionAxis] * -l.speed;
                          break;
                        case "elementTop":
                          c = (i - l.top) * -l.speed;
                          break;
                        case "bottom":
                          c =
                            (e.instance.limit[e.directionAxis] -
                              i +
                              e.windowHeight) *
                            l.speed;
                          break;
                        case "elementLeft":
                          c = (r - l.left) * -l.speed;
                          break;
                        case "right":
                          c =
                            (e.instance.limit[e.directionAxis] -
                              r +
                              e.windowHeight) *
                            l.speed;
                          break;
                        default:
                          c =
                            (o[e.directionAxis] - l.middle[e.directionAxis]) *
                            -l.speed;
                      }
                    l.sticky &&
                      (c = l.inView
                        ? "horizontal" === e.direction
                          ? e.instance.scroll.x - l.left + window.innerWidth
                          : e.instance.scroll.y - l.top + window.innerHeight
                        : "horizontal" === e.direction
                        ? e.instance.scroll.x < l.left - window.innerWidth &&
                          e.instance.scroll.x < l.left - window.innerWidth / 2
                          ? 0
                          : e.instance.scroll.x > l.right &&
                            e.instance.scroll.x > l.right + 100 &&
                            l.right - l.left + window.innerWidth
                        : e.instance.scroll.y < l.top - window.innerHeight &&
                          e.instance.scroll.y < l.top - window.innerHeight / 2
                        ? 0
                        : e.instance.scroll.y > l.bottom &&
                          e.instance.scroll.y > l.bottom + 100 &&
                          l.bottom - l.top + window.innerHeight),
                      !1 !== c &&
                        ("horizontal" === l.direction ||
                        ("horizontal" === e.direction &&
                          "vertical" !== l.direction)
                          ? e.transform(l.el, c, 0, !t && l.delay)
                          : e.transform(l.el, 0, c, !t && l.delay));
                  });
                },
              },
              {
                key: "scrollTo",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = parseInt(n.offset) || 0,
                    i = isNaN(parseInt(n.duration))
                      ? 1e3
                      : parseInt(n.duration),
                    o = n.easing || [0.25, 0, 0.35, 1],
                    a = !!n.disableLerp,
                    s = !!n.callback && n.callback;
                  if (((o = it.apply(void 0, g(o))), "string" === typeof t)) {
                    if ("top" === t) t = 0;
                    else if ("bottom" === t) t = this.instance.limit.y;
                    else if ("left" === t) t = 0;
                    else if ("right" === t) t = this.instance.limit.x;
                    else if (!(t = document.querySelector(t))) return;
                  } else if ("number" === typeof t) t = parseInt(t);
                  else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                  if ("number" !== typeof t) {
                    var l = $(t).includes(this.el);
                    if (!l) return;
                    var c = t.getBoundingClientRect(),
                      u = c.top,
                      d = c.left,
                      f = $(t),
                      p = f.find(function (t) {
                        return Object.entries(e.sections)
                          .map(function (t) {
                            var e = v(t, 2);
                            e[0];
                            return e[1];
                          })
                          .find(function (e) {
                            return e.el == t;
                          });
                      }),
                      h = 0;
                    (h = p
                      ? X(p)[this.directionAxis]
                      : -this.instance.scroll[this.directionAxis]),
                      (r =
                        "horizontal" === this.direction
                          ? d + r - h
                          : u + r - h);
                  } else r = t + r;
                  var m = parseFloat(this.instance.delta[this.directionAxis]),
                    y = Math.max(
                      0,
                      Math.min(r, this.instance.limit[this.directionAxis])
                    ),
                    b = y - m,
                    w = function (t) {
                      a
                        ? "horizontal" === e.direction
                          ? e.setScroll(m + b * t, e.instance.delta.y)
                          : e.setScroll(e.instance.delta.x, m + b * t)
                        : (e.instance.delta[e.directionAxis] = m + b * t);
                    };
                  (this.animatingScroll = !0),
                    this.stopScrolling(),
                    this.startScrolling();
                  var x = Date.now(),
                    k = function t() {
                      var n = (Date.now() - x) / i;
                      n > 1
                        ? (w(1),
                          (e.animatingScroll = !1),
                          0 == i && e.update(),
                          s && s())
                        : ((e.scrollToRaf = requestAnimationFrame(t)), w(o(n)));
                    };
                  k();
                },
              },
              {
                key: "update",
                value: function () {
                  this.setScrollLimit(),
                    this.addSections(),
                    this.addElements(),
                    this.detectElements(),
                    this.updateScroll(),
                    this.transformElements(!0),
                    this.reinitScrollBar(),
                    this.checkScroll(!0);
                },
              },
              {
                key: "startScroll",
                value: function () {
                  this.stop = !1;
                },
              },
              {
                key: "stopScroll",
                value: function () {
                  this.stop = !0;
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.instance = l(
                    l({}, this.instance),
                    {},
                    { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  m(u(n.prototype), "destroy", this).call(this),
                    this.stopScrolling(),
                    this.html.classList.remove(this.smoothClass),
                    this.vs.destroy(),
                    this.destroyScrollBar(),
                    window.removeEventListener("keydown", this.checkKey, !1);
                },
              },
            ]),
            n
          );
        })(x),
        ht = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            r(this, t),
              (this.options = e),
              Object.assign(this, w, e),
              (this.smartphone = w.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = w.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              this.smooth ||
                "horizontal" != this.direction ||
                console.warn(
                  "\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible"
                ),
              this.tablet.smooth ||
                "horizontal" != this.tablet.direction ||
                console.warn(
                  "\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
                ),
              this.smartphone.smooth ||
                "horizontal" != this.smartphone.direction ||
                console.warn(
                  "\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
                ),
              this.init();
          }
          return (
            o(t, [
              {
                key: "init",
                value: function () {
                  if (
                    ((this.options.isMobile =
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      ) ||
                      ("MacIntel" === navigator.platform &&
                        navigator.maxTouchPoints > 1) ||
                      window.innerWidth < this.tablet.breakpoint),
                    (this.options.isTablet =
                      this.options.isMobile &&
                      window.innerWidth >= this.tablet.breakpoint),
                    (this.smooth && !this.options.isMobile) ||
                    (this.tablet.smooth && this.options.isTablet) ||
                    (this.smartphone.smooth &&
                      this.options.isMobile &&
                      !this.options.isTablet)
                      ? (this.scroll = new pt(this.options))
                      : (this.scroll = new E(this.options)),
                    this.scroll.init(),
                    window.location.hash)
                  ) {
                    var t = window.location.hash.slice(
                        1,
                        window.location.hash.length
                      ),
                      e = document.getElementById(t);
                    e && this.scroll.scrollTo(e);
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  this.scroll.update();
                },
              },
              {
                key: "start",
                value: function () {
                  this.scroll.startScroll();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.scroll.stopScroll();
                },
              },
              {
                key: "scrollTo",
                value: function (t, e) {
                  this.scroll.scrollTo(t, e);
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.scroll.setScroll(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.scroll.setEvents(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.scroll.unsetEvents(t, e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.scroll.destroy();
                },
              },
            ]),
            t
          );
        })(),
        mt = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            r(this, t),
              (this.options = e),
              Object.assign(this, w, e),
              (this.smartphone = w.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = w.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              this.init();
          }
          return (
            o(t, [
              {
                key: "init",
                value: function () {
                  if (
                    ((this.scroll = new E(this.options)),
                    this.scroll.init(),
                    window.location.hash)
                  ) {
                    var t = window.location.hash.slice(
                        1,
                        window.location.hash.length
                      ),
                      e = document.getElementById(t);
                    e && this.scroll.scrollTo(e);
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  this.scroll.update();
                },
              },
              {
                key: "start",
                value: function () {
                  this.scroll.startScroll();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.scroll.stopScroll();
                },
              },
              {
                key: "scrollTo",
                value: function (t, e) {
                  this.scroll.scrollTo(t, e);
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.scroll.setScroll(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.scroll.setEvents(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.scroll.unsetEvents(t, e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.scroll.destroy();
                },
              },
            ]),
            t
          );
        })();
      e.default = ht;
    },
    4019: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getDomainLocale = function (t, e, n, r) {
          return !1;
        });
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7942: function (t, e, n) {
      "use strict";
      var r = n(5696);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i,
        o = (i = n(7294)) && i.__esModule ? i : { default: i },
        a = n(4957),
        s = n(7995),
        l = n(647),
        c = n(1992),
        u = n(639),
        d = n(4019),
        f = n(227);
      var p = "undefined" !== typeof o.default.useTransition,
        h = {};
      function m(t, e, n, r) {
        if (t && a.isLocalURL(e)) {
          t.prefetch(e, n, r).catch(function (t) {
            0;
          });
          var i =
            r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
          h[e + "%" + n + (i ? "%" + i : "")] = !0;
        }
      }
      var v = o.default.forwardRef(function (t, e) {
        var n,
          i = t.href,
          v = t.as,
          g = t.children,
          y = t.prefetch,
          b = t.passHref,
          w = t.replace,
          x = t.soft,
          k = t.shallow,
          S = t.scroll,
          C = t.locale,
          E = t.onClick,
          _ = t.onMouseEnter,
          T = t.legacyBehavior,
          A = void 0 === T ? !0 !== Boolean(!1) : T,
          P = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "soft",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "legacyBehavior",
          ]);
        (n = g),
          !A ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = o.default.createElement("a", null, n));
        var j = !1 !== y,
          O = p ? o.default.useTransition() : [],
          I = r(O, 2)[1],
          M = o.default.useContext(l.RouterContext),
          R = o.default.useContext(c.AppRouterContext);
        R && (M = R);
        var L,
          z = o.default.useMemo(
            function () {
              var t = a.resolveHref(M, i, !0),
                e = r(t, 2),
                n = e[0],
                o = e[1];
              return { href: n, as: v ? a.resolveHref(M, v) : o || n };
            },
            [M, i, v]
          ),
          D = z.href,
          B = z.as,
          N = o.default.useRef(D),
          V = o.default.useRef(B);
        A && (L = o.default.Children.only(n));
        var Y = A ? L && "object" === typeof L && L.ref : e,
          F = u.useIntersection({ rootMargin: "200px" }),
          H = r(F, 3),
          Z = H[0],
          G = H[1],
          W = H[2],
          U = o.default.useCallback(
            function (t) {
              (V.current === B && N.current === D) ||
                (W(), (V.current = B), (N.current = D)),
                Z(t),
                Y &&
                  ("function" === typeof Y
                    ? Y(t)
                    : "object" === typeof Y && (Y.current = t));
            },
            [B, Y, D, W, Z]
          );
        o.default.useEffect(
          function () {
            var t = G && j && a.isLocalURL(D),
              e = "undefined" !== typeof C ? C : M && M.locale,
              n = h[D + "%" + B + (e ? "%" + e : "")];
            t && !n && m(M, D, B, { locale: e });
          },
          [B, D, G, C, j, M]
        );
        var X = {
          ref: U,
          onClick: function (t) {
            A || "function" !== typeof E || E(t),
              A &&
                L.props &&
                "function" === typeof L.props.onClick &&
                L.props.onClick(t),
              t.defaultPrevented ||
                (function (t, e, n, r, i, o, s, l, c, u) {
                  if (
                    "A" !== t.currentTarget.nodeName.toUpperCase() ||
                    (!(function (t) {
                      var e = t.currentTarget.target;
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) &&
                      a.isLocalURL(n))
                  ) {
                    t.preventDefault();
                    var d = function () {
                      "softPush" in e && "softReplace" in e
                        ? e[
                            o
                              ? i
                                ? "softReplace"
                                : "softPush"
                              : i
                              ? "replace"
                              : "push"
                          ](n)
                        : e[i ? "replace" : "push"](n, r, {
                            shallow: s,
                            locale: c,
                            scroll: l,
                          });
                    };
                    u ? u(d) : d();
                  }
                })(t, M, D, B, w, x, k, S, C, R ? I : void 0);
          },
          onMouseEnter: function (t) {
            A || "function" !== typeof _ || _(t),
              A &&
                L.props &&
                "function" === typeof L.props.onMouseEnter &&
                L.props.onMouseEnter(t),
              a.isLocalURL(D) && m(M, D, B, { priority: !0 });
          },
        };
        if (!A || b || ("a" === L.type && !("href" in L.props))) {
          var $ = "undefined" !== typeof C ? C : M && M.locale,
            q =
              M &&
              M.isLocaleDomain &&
              d.getDomainLocale(B, $, M.locales, M.domainLocales);
          X.href = q || f.addBasePath(s.addLocale(B, $, M && M.defaultLocale));
        }
        return A
          ? o.default.cloneElement(L, X)
          : o.default.createElement("a", Object.assign({}, P, X), n);
      });
      (e.default = v),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          "undefined" === typeof e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    639: function (t, e, n) {
      "use strict";
      var r = n(5696);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          var e = t.rootRef,
            n = t.rootMargin,
            c = t.disabled || !a,
            u = i.useRef(),
            d = i.useState(!1),
            f = r(d, 2),
            p = f[0],
            h = f[1],
            m = i.useState(null),
            v = r(m, 2),
            g = v[0],
            y = v[1];
          i.useEffect(
            function () {
              if (a) {
                if ((u.current && (u.current(), (u.current = void 0)), c || p))
                  return;
                return (
                  g &&
                    g.tagName &&
                    (u.current = (function (t, e, n) {
                      var r = (function (t) {
                          var e,
                            n = {
                              root: t.root || null,
                              margin: t.rootMargin || "",
                            },
                            r = l.find(function (t) {
                              return t.root === n.root && t.margin === n.margin;
                            });
                          if (r && (e = s.get(r))) return e;
                          var i = new Map(),
                            o = new IntersectionObserver(function (t) {
                              t.forEach(function (t) {
                                var e = i.get(t.target),
                                  n =
                                    t.isIntersecting || t.intersectionRatio > 0;
                                e && n && e(n);
                              });
                            }, t);
                          return (
                            (e = { id: n, observer: o, elements: i }),
                            l.push(n),
                            s.set(n, e),
                            e
                          );
                        })(n),
                        i = r.id,
                        o = r.observer,
                        a = r.elements;
                      return (
                        a.set(t, e),
                        o.observe(t),
                        function () {
                          if ((a.delete(t), o.unobserve(t), 0 === a.size)) {
                            o.disconnect(), s.delete(i);
                            var e = l.findIndex(function (t) {
                              return t.root === i.root && t.margin === i.margin;
                            });
                            e > -1 && l.splice(e, 1);
                          }
                        }
                      );
                    })(
                      g,
                      function (t) {
                        return t && h(t);
                      },
                      { root: null == e ? void 0 : e.current, rootMargin: n }
                    )),
                  function () {
                    null == u.current || u.current(), (u.current = void 0);
                  }
                );
              }
              if (!p) {
                var t = o.requestIdleCallback(function () {
                  return h(!0);
                });
                return function () {
                  return o.cancelIdleCallback(t);
                };
              }
            },
            [g, c, n, e, p]
          );
          var b = i.useCallback(function () {
            h(!1);
          }, []);
          return [y, p, b];
        });
      var i = n(7294),
        o = n(6286),
        a = "function" === typeof IntersectionObserver;
      var s = new Map(),
        l = [];
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8e3: function (t, e, n) {
      "use strict";
      var r;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AmpStateContext = void 0);
      var i = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      e.AmpStateContext = i;
    },
    9470: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isInAmpMode = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.ampFirst,
            n = void 0 !== e && e,
            r = t.hybrid,
            i = void 0 !== r && r,
            o = t.hasQuery,
            a = void 0 !== o && o;
          return n || (i && a);
        });
    },
    1992: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FullAppTreeContext = e.AppTreeContext = e.AppRouterContext = void 0);
      var r,
        i = (r = n(7294)) && r.__esModule ? r : { default: r };
      var o = i.default.createContext(null);
      e.AppRouterContext = o;
      var a = i.default.createContext(null);
      e.AppTreeContext = a;
      var s = i.default.createContext(null);
      e.FullAppTreeContext = s;
    },
    2717: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.defaultHead = d),
        (e.default = void 0);
      var r,
        i = (function (t) {
          if (t && t.__esModule) return t;
          if (null === t || ("object" !== typeof t && "function" !== typeof t))
            return { default: t };
          var e = u();
          if (e && e.has(t)) return e.get(t);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in t)
            if (Object.prototype.hasOwnProperty.call(t, i)) {
              var o = r ? Object.getOwnPropertyDescriptor(t, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = t[i]);
            }
          (n.default = t), e && e.set(t, n);
          return n;
        })(n(7294)),
        o = (r = n(1585)) && r.__esModule ? r : { default: r },
        a = n(8e3),
        s = n(5850),
        l = n(9470);
      n(9475);
      function c() {
        return (
          (c =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          c.apply(this, arguments)
        );
      }
      function u() {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (u = function () {
            return t;
          }),
          t
        );
      }
      function d() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function f(t, e) {
        return "string" === typeof e || "number" === typeof e
          ? t
          : e.type === i.default.Fragment
          ? t.concat(
              i.default.Children.toArray(e.props.children).reduce(function (
                t,
                e
              ) {
                return "string" === typeof e || "number" === typeof e
                  ? t
                  : t.concat(e);
              },
              [])
            )
          : t.concat(e);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(t, e) {
        return t
          .reduce(f, [])
          .reverse()
          .concat(d(e.inAmpMode).reverse())
          .filter(
            (function () {
              var t = new Set(),
                e = new Set(),
                n = new Set(),
                r = {};
              return function (i) {
                var o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" !== typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  var s = i.key.slice(i.key.indexOf("$") + 1);
                  t.has(s) ? (o = !1) : t.add(s);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    e.has(i.type) ? (o = !1) : e.add(i.type);
                    break;
                  case "meta":
                    for (var l = 0, c = p.length; l < c; l++) {
                      var u = p[l];
                      if (i.props.hasOwnProperty(u))
                        if ("charSet" === u) n.has(u) ? (o = !1) : n.add(u);
                        else {
                          var d = i.props[u],
                            f = r[u] || new Set();
                          ("name" === u && a) || !f.has(d)
                            ? (f.add(d), (r[u] = f))
                            : (o = !1);
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (t, n) {
            var r = t.key || n;
            if (
              !e.inAmpMode &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (e) {
                return t.props.href.startsWith(e);
              })
            ) {
              var o = c({}, t.props || {});
              return (
                (o["data-href"] = o.href),
                (o.href = void 0),
                (o["data-optimized-fonts"] = !0),
                i.default.cloneElement(t, o)
              );
            }
            return i.default.cloneElement(t, { key: r });
          });
      }
      var m = function (t) {
        var e = t.children,
          n = i.useContext(a.AmpStateContext),
          r = i.useContext(s.HeadManagerContext);
        return i.default.createElement(
          o.default,
          {
            reduceComponentsToState: h,
            headManager: r,
            inAmpMode: l.isInAmpMode(n),
          },
          e
        );
      };
      (e.default = m),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          "undefined" === typeof e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    1585: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          var e = t.headManager,
            n = t.reduceComponentsToState;
          function i() {
            if (e && e.mountedInstances) {
              var i = r.Children.toArray(
                Array.from(e.mountedInstances).filter(Boolean)
              );
              e.updateHead(n(i, t));
            }
          }
          if (o) {
            var l;
            null == e || null == (l = e.mountedInstances) || l.add(t.children),
              i();
          }
          return (
            a(function () {
              var n;
              return (
                null == e ||
                  null == (n = e.mountedInstances) ||
                  n.add(t.children),
                function () {
                  var n;
                  null == e ||
                    null == (n = e.mountedInstances) ||
                    n.delete(t.children);
                }
              );
            }),
            a(function () {
              return (
                e && (e._pendingUpdate = i),
                function () {
                  e && (e._pendingUpdate = i);
                }
              );
            }),
            s(function () {
              return (
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null)),
                function () {
                  e &&
                    e._pendingUpdate &&
                    (e._pendingUpdate(), (e._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (function (t) {
        if (t && t.__esModule) return t;
        if (null === t || ("object" !== typeof t && "function" !== typeof t))
          return { default: t };
        var e = i();
        if (e && e.has(t)) return e.get(t);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in t)
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            var a = r ? Object.getOwnPropertyDescriptor(t, o) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(n, o, a)
              : (n[o] = t[o]);
          }
        (n.default = t), e && e.set(t, n);
        return n;
      })(n(7294));
      function i() {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (i = function () {
            return t;
          }),
          t
        );
      }
      var o = !1,
        a = o ? function () {} : r.useLayoutEffect,
        s = o ? function () {} : r.useEffect;
    },
    596: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return s;
        },
        z: function () {
          return a;
        },
      });
      var r = n(7294),
        i = n(5893),
        o = {
          cursorExpanded: function () {
            document.querySelector(".cursor").classList.add("cursorExpanded"),
              document
                .querySelector(".cursorBG")
                .classList.add("cursorBGExpanded");
          },
          cursorNormal: function () {
            document
              .querySelector(".cursor")
              .classList.remove("cursorExpanded"),
              document
                .querySelector(".cursorBG")
                .classList.remove("cursorBGExpanded"),
              (document.querySelector(".cursorBG").style.background = "");
          },
          removeCursor: function () {
            document.querySelector(".cursor").classList.add("removeCursor"),
              (document.querySelector("body").style.cursor = "default");
          },
          showCursor: function () {
            document.querySelector(".cursor").classList.remove("removeCursor"),
              (document.querySelector("body").style.cursor = "none");
          },
          cursorShowPreview: function (t, e) {
            (document.querySelector(".cursorBG").style.background =
              'url("/Images/CursorBG/'.concat(
                t,
                '.webp") no-repeat center center /contain'
              )),
              e.target.children[0].classList.add("fontBold");
          },
          bigCursor: function () {
            document.querySelector(".cursor").classList.add("BigCursor");
          },
          removeBigCursor: function () {
            document.querySelector(".cursor").classList.remove("BigCursor");
          },
          fontRegular: function (t) {
            t.target.children[0].classList.remove("fontBold");
          },
        },
        a = (0, r.createContext)(o);
      function s(t) {
        var e = t.children;
        return (0, i.jsx)(a.Provider, { value: o, children: e });
      }
    },
    2691: function (t, e, n) {
      "use strict";
      n.d(e, {
        IN: function () {
          return u;
        },
        Mj: function () {
          return o;
        },
        Os: function () {
          return l;
        },
        P_: function () {
          return c;
        },
        Rl: function () {
          return s;
        },
        UI: function () {
          return i;
        },
        yw: function () {
          return a;
        },
      });
      var r = n(7379),
        i = r.default.div.withConfig({
          displayName: "IntroStyles__IntroContainer",
          componentId: "sc-ze5m8i-0",
        })(
          [
            'width:100%;max-height:700px;height:82vh;position:relative;display:grid;align-items:center;justify-items:flex-start;margin-bottom:8rem;&::before{content:"";position:absolute;width:600px;height:600px;border-radius:50%;z-index:2;background-color:transparent;border:1px solid rgba(91,91,91,0.35);transform:scale(0);transition:transform 1.75s 2.5s ease-in-out;will-change:transform;}&.is-inview::before{top:30%;right:0%;transform:scale(1) translateY(-50px);animation:rollBefore 8s 4.25s ease-in-out infinite alternate;@keyframes rollBefore{0%{transform:rotateZ(0deg) translateX(0px) translateY(-50px);}100%{transform:rotateZ(360deg) translateX(-20px) translateY(-10px) scale(1.2);}}}@media only ',
            "{margin-bottom:0rem;}@media only ",
            "{max-height:600px;}@media only ",
            "{max-height:500px;}@media only ",
            "{max-height:85vh;height:85vh;}",
          ],
          function (t) {
            return t.theme.breakpoints.lgHover;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        o = r.default.div.withConfig({
          displayName: "IntroStyles__IntroWrapper",
          componentId: "sc-ze5m8i-1",
        })([
          'width:100%;height:auto;position:relative;z-index:4;margin-bottom:75px;&::after{content:"";position:absolute;width:500px;height:500px;top:-10%;right:30%;z-index:-1;border-radius:50%;background-color:transparent;border:1px solid rgba(91,91,91,0.35);transform:scale(0);transition:transform 1.75s 2.5s ease-in-out;will-change:transform;}&.is-inview::after{transform:scale(1);animation:rollCenterIntro 10s 4.25s ease-in-out infinite alternate;@keyframes rollCenterIntro{0%{transform:rotateZ(0deg) translateX(0px) scale(1);}100%{transform:rotateZ(360deg) translateX(50px) scale(1.1);}}}',
        ]),
        a = r.default.div.withConfig({
          displayName: "IntroStyles__TitleOverflowHero",
          componentId: "sc-ze5m8i-2",
        })(["width:fit-content;overflow:hidden;"]),
        s = r.default.h1.withConfig({
          displayName: "IntroStyles__IntroHead",
          componentId: "sc-ze5m8i-3",
        })(
          [
            "font-size:",
            ';margin:0;font-weight:500;font-variation-settings:"wght" 500;transform:translateY(100%) translateZ(0);will-change:transform;animation:revealIntro 1.25s cubic-bezier(0.77,0,0.175,1) forwards;',
            ";@keyframes revealIntro{to{transform:translateY(0px) translateZ(0);}}",
          ],
          function (t) {
            return t.large
              ? "clamp(2.3rem, 9vw, 5rem)"
              : "clamp(2rem, 5.5vw, 3rem)";
          },
          function (t) {
            return (
              t.delay &&
              "animation: revealIntro 1.25s 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;\n    "
            );
          }
        ),
        l = r.default.p.withConfig({
          displayName: "IntroStyles__Intropara",
          componentId: "sc-ze5m8i-4",
        })(
          [
            "max-width:75%;font-size:clamp(1.25rem,4vw,1.5rem);margin-top:1.5rem;line-height:1.28;transform:translateY(100%) translateZ(0);will-change:transform;animation:revealIntro 0.9s 1.5s cubic-bezier(0.77,0,0.175,1) forwards;@media only ",
            "{max-width:100%;}",
          ],
          function (t) {
            return t.theme.breakpoints.ip;
          }
        ),
        c = r.default.div.withConfig({
          displayName: "IntroStyles__IntroBtnWrapper",
          componentId: "sc-ze5m8i-5",
        })(
          [
            "width:fit-content;display:flex;overflow:hidden;gap:3rem;margin-top:3rem;& .aboutMeLink{display:block;will-change:transform;transform:translateY(105%) translateZ(0);animation:revealIntro 1.25s 1.85s cubic-bezier(0.77,0,0.175,1) forwards;.aboutMe{width:175px;height:55px;border-radius:4px;display:block;background-color:black;color:white;font-weight:400;display:grid;place-items:center;@media only ",
            "{width:150px;height:55px;font-size:18px;}}}@media only ",
            "{gap:2rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        u = r.default.div.withConfig({
          displayName: "IntroStyles__IntroBtn",
          componentId: "sc-ze5m8i-6",
        })(
          [
            "width:175px;height:55px;border-radius:4px;border:2px solid black;color:black;font-weight:400;background-color:transparent;cursor:pointer;display:none;place-items:center;will-change:transform;transform:translateY(105%) translateZ(0);animation:revealIntro 1.25s 2.35s cubic-bezier(0.77,0,0.175,1) forwards;@media only ",
            "{width:150px;height:55px;display:grid;font-size:18px;}& > span{font-weight:500;}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          }
        );
    },
    2623: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.r(e),
        n.d(e, {
          default: function () {
            return pt;
          },
        });
      var i = n(1653),
        o = n(9008),
        a = n.n(o),
        s = n(7294),
        l = n(8075),
        c = n(7379),
        u = c.default.div.withConfig({
          displayName: "CustomCusorStyles__Cursor",
          componentId: "sc-ky4yh-0",
        })([
          "@media screen and (hover:hover) and (pointer:fine){z-index:1000;width:30px;height:30px;position:fixed;border-radius:50%;background-color:white;pointer-events:none;opacity:0;transition:transform 0.1s cubic-bezier(0.23,1,0.32,1),background-color 0.5s cubic-bezier(0.23,1,0.32,1),width 0.3s cubic-bezier(0.23,1,0.32,1),height 0.3s cubic-bezier(0.23,1,0.32,1),opacity 0.3s cubic-bezier(0.23,1,0.32,1);transform:translate3d(200px,0px,0);will-change:transform;mix-blend-mode:difference;&.clicked{width:20px;height:20px;.cursorBGExpanded{width:330px;height:165px;}}&.addCursor{opacity:1;}&.removeCursor{opacity:0;}&.cursorExpanded{z-index:-1;background-color:transparent;mix-blend-mode:normal;}.cursorBG{width:20px;height:20px;border-radius:50%;transform:translate(-45%,-45%);background-color:transparent;transition:0.5s cubic-bezier(0.23,1,0.32,1);}.cursorBGExpanded{width:350px;height:175px;border-radius:0;}&.BigCursor{width:150px;height:150px;}}",
        ]),
        d = n(5893),
        f = function () {
          return (
            (0, s.useEffect)(function () {
              document
                .querySelector(".cursorBoundary")
                .addEventListener("mousemove", function (t) {
                  var e = t.clientX,
                    n = t.clientY;
                  document.querySelector(".cursor").style.transform =
                    "translate(-50%, -50%) translate3d("
                      .concat(e, "px, ")
                      .concat(n, "px, 0px) ");
                }),
                document.addEventListener("mousedown", function () {
                  document.querySelector(".cursor").classList.add("clicked");
                }),
                document.addEventListener("mouseup", function () {
                  document.querySelector(".cursor").classList.remove("clicked");
                }),
                document
                  .querySelector(".cursorBoundary")
                  .addEventListener("mousemove", function () {
                    document
                      .querySelector(".cursor")
                      .classList.add("addCursor");
                  }),
                document
                  .querySelector(".cursorBoundary")
                  .addEventListener("mouseleave", function () {
                    document
                      .querySelector(".cursor")
                      .classList.remove("addCursor");
                  });
            }, []),
            (0, d.jsx)(u, {
              className: "cursor",
              children: (0, d.jsx)("div", { className: "cursorBG" }),
            })
          );
        },
        p = n(1029),
        h = c.default.footer.withConfig({
          displayName: "FooterStyles__FooterWrapper",
          componentId: "sc-1e4jhnj-0",
        })(
          [
            "padding:4rem;text-align:center;@media only ",
            "{padding:4rem 3rem;}@media only ",
            "{padding:3rem 2rem;}@media only ",
            "{padding:2rem 1rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        m = c.default.div.withConfig({
          displayName: "FooterStyles__FooterTop",
          componentId: "sc-1e4jhnj-1",
        })(
          [
            "width:100%;display:flex;justify-content:space-between;align-items:center;padding-bottom:4rem;border-bottom:1px solid #ddd;@media only ",
            "{flex-direction:column;gap:2rem;padding-bottom:2rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        v = c.default.div.withConfig({
          displayName: "FooterStyles__FooterBottom",
          componentId: "sc-1e4jhnj-2",
        })(
          [
            "width:100%;padding-top:4rem;display:flex;justify-content:space-between;align-items:center;color:#555;& span{font-size:1.25rem;font-weight:400;}@media only ",
            "{flex-direction:column;padding-top:2rem;gap:2rem;& span{letter-spacing:0.25px;}}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        g = c.default.h2.withConfig({
          displayName: "FooterStyles__FooterTitle",
          componentId: "sc-1e4jhnj-3",
        })(["font-size:clamp(2rem,5.5vw,2.5rem);font-weight:450;"]),
        y = c.default.div.withConfig({
          displayName: "FooterStyles__EmailBtn",
          componentId: "sc-1e4jhnj-4",
        })([
          "width:200px;height:65px;background:black;display:grid;place-items:center;color:white;border-radius:4px;& span{font-weight:400;}",
        ]),
        b = function () {
          return (0, d.jsxs)(h, {
            "data-scroll-section": !0,
            children: [
              (0, d.jsx)(p.c6, {
                "data-scroll": !0,
                children: (0, d.jsxs)(m, {
                  children: [
                    (0, d.jsx)(g, { children: "Let's Work Together" }),
                    (0, d.jsx)("a", {
                      href: "mailto:irshadla2007@gmail.com",
                      "aria-label": "email",
                      children: (0, d.jsx)(y, {
                        role: "button",
                        children: (0, d.jsx)("span", {
                          children: "Write an Email",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, d.jsx)(p.c6, {
                "data-scroll": !0,
                children: (0, d.jsxs)(v, {
                  children: [
                    (0, d.jsx)("span", {
                      children: "Turning logic into pixels",
                    }),
                    (0, d.jsxs)("span", {
                      children: [
                        "Designed and developed by ",
                        (0, d.jsx)("span", { children: "me" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        w = n(1439),
        x = n(4735),
        k = n(5411);
      var S = n(240),
        C = n(6681),
        E = 0;
      function _() {
        var t = E;
        return E++, t;
      }
      var T = function (t) {
        var e = t.children,
          n = t.initial,
          r = t.isPresent,
          i = t.onExitComplete,
          o = t.custom,
          a = t.presenceAffectsLayout,
          l = (0, C.h)(A),
          c = (0, C.h)(_),
          u = (0, s.useMemo)(
            function () {
              return {
                id: c,
                initial: n,
                isPresent: r,
                custom: o,
                onExitComplete: function (t) {
                  var e, n;
                  l.set(t, !0);
                  try {
                    for (
                      var r = (0, w.XA)(l.values()), o = r.next();
                      !o.done;
                      o = r.next()
                    ) {
                      if (!o.value) return;
                    }
                  } catch (a) {
                    e = { error: a };
                  } finally {
                    try {
                      o && !o.done && (n = r.return) && n.call(r);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  null === i || void 0 === i || i();
                },
                register: function (t) {
                  return (
                    l.set(t, !1),
                    function () {
                      return l.delete(t);
                    }
                  );
                },
              };
            },
            a ? void 0 : [r]
          );
        return (
          (0, s.useMemo)(
            function () {
              l.forEach(function (t, e) {
                return l.set(e, !1);
              });
            },
            [r]
          ),
          s.useEffect(
            function () {
              !r && !l.size && (null === i || void 0 === i || i());
            },
            [r]
          ),
          s.createElement(S.O.Provider, { value: u }, e)
        );
      };
      function A() {
        return new Map();
      }
      var P = n(5364);
      function j(t) {
        return t.key || "";
      }
      var O = function (t) {
          var e = t.children,
            n = t.custom,
            r = t.initial,
            i = void 0 === r || r,
            o = t.onExitComplete,
            a = t.exitBeforeEnter,
            l = t.presenceAffectsLayout,
            c = void 0 === l || l,
            u = (0, w.CR)(
              (function () {
                var t = (0, s.useRef)(!1),
                  e = (0, w.CR)((0, s.useState)(0), 2),
                  n = e[0],
                  r = e[1];
                (0, k.z)(function () {
                  return (t.current = !0);
                });
                var i = (0, s.useCallback)(
                  function () {
                    !t.current && r(n + 1);
                  },
                  [n]
                );
                return [
                  (0, s.useCallback)(
                    function () {
                      return x.ZP.postRender(i);
                    },
                    [i]
                  ),
                  n,
                ];
              })(),
              1
            ),
            d = u[0],
            f = (0, s.useContext)(P.p).forceRender;
          f && (d = f);
          var p = (0, s.useRef)(!0),
            h = (0, s.useRef)(!0);
          (0, s.useEffect)(function () {
            return function () {
              h.current = !1;
            };
          }, []);
          var m = (function (t) {
              var e = [];
              return (
                s.Children.forEach(t, function (t) {
                  (0, s.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(e),
            v = (0, s.useRef)(m),
            g = (0, s.useRef)(new Map()).current,
            y = (0, s.useRef)(new Set()).current;
          if (
            ((function (t, e) {
              t.forEach(function (t) {
                var n = j(t);
                e.set(n, t);
              });
            })(m, g),
            p.current)
          )
            return (
              (p.current = !1),
              s.createElement(
                s.Fragment,
                null,
                m.map(function (t) {
                  return s.createElement(
                    T,
                    {
                      key: j(t),
                      isPresent: !0,
                      initial: !!i && void 0,
                      presenceAffectsLayout: c,
                    },
                    t
                  );
                })
              )
            );
          for (
            var b = (0, w.ev)([], (0, w.CR)(m), !1),
              S = v.current.map(j),
              C = m.map(j),
              E = S.length,
              _ = 0;
            _ < E;
            _++
          ) {
            var A = S[_];
            -1 === C.indexOf(A) ? y.add(A) : y.delete(A);
          }
          return (
            a && y.size && (b = []),
            y.forEach(function (t) {
              if (-1 === C.indexOf(t)) {
                var e = g.get(t);
                if (e) {
                  var r = S.indexOf(t);
                  b.splice(
                    r,
                    0,
                    s.createElement(
                      T,
                      {
                        key: j(e),
                        isPresent: !1,
                        onExitComplete: function () {
                          g.delete(t), y.delete(t);
                          var e = v.current.findIndex(function (e) {
                            return e.key === t;
                          });
                          if ((v.current.splice(e, 1), !y.size)) {
                            if (((v.current = m), !1 === h.current)) return;
                            d(), o && o();
                          }
                        },
                        custom: n,
                        presenceAffectsLayout: c,
                      },
                      e
                    )
                  );
                }
              }
            }),
            (b = b.map(function (t) {
              var e = t.key;
              return y.has(e)
                ? t
                : s.createElement(
                    T,
                    { key: j(t), isPresent: !0, presenceAffectsLayout: c },
                    t
                  );
            })),
            (v.current = b),
            s.createElement(
              s.Fragment,
              null,
              y.size
                ? b
                : b.map(function (t) {
                    return (0, s.cloneElement)(t);
                  })
            )
          );
        },
        I = n(1664),
        M = n.n(I),
        R = n(1163),
        L = n(3750),
        z = n(8357);
      function D(t) {
        return (0, z.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
              },
            },
          ],
        })(t);
      }
      function B(t) {
        return (0, z.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z",
              },
            },
          ],
        })(t);
      }
      function N(t) {
        return (0, z.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
              },
            },
          ],
        })(t);
      }
      var V = n(596),
        Y = n(2691),
        F = c.default.nav.withConfig({
          displayName: "NavigationStyles__Navigation",
          componentId: "sc-10cj8br-0",
        })(
          [
            "width:100%;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background-color:rgba(249,242,237,0.75);backdrop-filter:blur(4px);z-index:2;@media only ",
            "{padding:0rem 2rem;}@media only ",
            "{padding:0rem 1rem;}@media only ",
            "{padding:0rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        H = c.default.div.withConfig({
          displayName: "NavigationStyles__Wrap",
          componentId: "sc-10cj8br-1",
        })(
          [
            "width:50px;height:50px;display:grid;margin:1rem;place-items:center;@media only ",
            "{margin:1rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        Z = c.default.div.withConfig({
          displayName: "NavigationStyles__Logo",
          componentId: "sc-10cj8br-2",
        })(
          [
            "position:relative;width:40px;height:40px;border:2px solid #000;border-radius:50%;cursor:pointer;z-index:2;@media only screen and (hover:hover) and (pointer:fine){&:hover{&::after{opacity:1;}}}&::after{content:'';opacity:0;width:20px;height:20px;position:absolute;inset:0;margin:auto;border:2px solid #000;border-radius:50%;transition:opacity 0.09s cubic-bezier(0.39,0.575,0.565,1);}@media screen and (hover:none) and (pointer:coarse){border:6px solid #000;transform:scale(1) !important;",
            ";@keyframes LogoClicked{0%{transform:scale(1);}50%{transform:scale(0.7);}100%{transform:scale(1);}}&::after{display:none;}}",
          ],
          function (t) {
            return t.animatelogo
              ? "animation: LogoClicked 400ms cubic-bezier(0.39, 0.575, 0.565, 1) forwards;"
              : null;
          }
        ),
        G = c.default.div.withConfig({
          displayName: "NavigationStyles__HamBurger",
          componentId: "sc-10cj8br-3",
        })([
          "width:40px;height:40px;position:relative;cursor:pointer;z-index:10;",
        ]),
        W = c.default.div.withConfig({
          displayName: "NavigationStyles__LineOne",
          componentId: "sc-10cj8br-4",
        })(
          [
            "position:absolute;width:100%;height:2px;background-color:#000;top:30%;@media only ",
            "{background-color:black;}@media only ",
            "{height:4px !important;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.lgHover;
          }
        ),
        U = c.default.div.withConfig({
          displayName: "NavigationStyles__LineTwo",
          componentId: "sc-10cj8br-5",
        })(
          [
            "position:absolute;width:100%;height:2px;background-color:#000;bottom:30%;@media only ",
            "{background-color:black;}@media only ",
            "{height:4px !important;width:25px;transition:transform 0.4s cubic-bezier(0.445,0.05,0.55,0.95),width 0.4s cubic-bezier(0.445,0.05,0.55,0.95);",
            ";}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.lgHover;
          },
          function (t) {
            return t.isOpen
              ? "width: 40px; transform: translateX(0px) rotate(45deg) !important"
              : "transform: translateX(15px) !important;";
          }
        ),
        X = c.default.div.withConfig({
          displayName: "NavigationStyles__NavBox",
          componentId: "sc-10cj8br-6",
        })(
          [
            "width:min(1200px,100vw);margin:auto;height:100vh;min-height:600px;top:0;z-index:5;position:fixed;background-color:rgb(249,242,237);transform-origin:top;will-change:transform;@media only ",
            "{margin-left:-2rem;}@media only ",
            "{margin-left:-1rem;}@media only ",
            "{margin-left:0rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        $ = c.default.span.withConfig({
          displayName: "NavigationStyles__RouteTitle",
          componentId: "sc-10cj8br-7",
        })(
          [
            "font-size:2.25rem;cursor:pointer;display:block;width:max-content;transition:letter-spacing 0.5s cubic-bezier(0,-0.04,0,0.96);transform-origin:bottom;font-weight:475;padding-bottom:2px;margin-bottom:2px;position:relative;transform:translateY(100%);opacity:0;animation:reveal-link 0.75s cubic-bezier(0.77,0,0.175,1) ",
            " forwards;&:hover{letter-spacing:1px;}&::after{content:'';display:block;position:absolute;width:100%;height:1.5px;background:black;bottom:0;left:0;transform:scaleX(0);transform-origin:100% 50%;transition:transform 0.3s ease-in-out;}@media screen and (hover:hover) and (pointer:fine){&:hover::after{transform:scaleX(1);transform-origin:0% 50%;}}@keyframes reveal-link{100%{transform:translateY(0%);opacity:1;}}",
          ],
          function (t) {
            var e = t.delay;
            return "".concat(e, "s");
          }
        ),
        q = c.default.div.withConfig({
          displayName: "NavigationStyles__RouterLinksWrapper",
          componentId: "sc-10cj8br-8",
        })(
          [
            "width:100%;height:100%;display:flex;justify-content:center;align-items:center;@media only ",
            "{align-items:flex-end;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        K = c.default.div.withConfig({
          displayName: "NavigationStyles__RouterLinks",
          componentId: "sc-10cj8br-9",
        })(
          [
            "width:75%;gap:5rem;display:grid;grid-template-columns:1fr;.navAnchor{width:max-content;}@media only ",
            "{gap:3rem;place-items:center;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        J = c.default.div.withConfig({
          displayName: "NavigationStyles__NavWrap",
          componentId: "sc-10cj8br-10",
        })(
          [
            "width:100%;height:100%;display:grid;grid-template-columns:1fr 2fr;place-items:center;@media only ",
            "{grid-template-columns:1fr;grid-template-rows:50%;max-height:100vh;gap:5rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        Q = c.default.div.withConfig({
          displayName: "NavigationStyles__LinksWrap",
          componentId: "sc-10cj8br-11",
        })(
          [
            "width:100%;height:100%;display:grid;grid-template-columns:1fr 1fr;place-items:center;align-content:center;@media only screen and (max-height:820px) and (min-width:1024px){margin-top:2rem;}& div:nth-child(1){border-right:1px solid white;}& div:nth-child(3){border-top:0.5px solid white;border-right:1px solid white;}& div:nth-child(4){border-top:0.5px solid white;}@media only ",
            "{grid-template-columns:repeat(4,clamp(72px,10vw,110px));place-items:center;justify-content:center;align-content:flex-start;gap:clamp(0.75rem,6vw,6vw);}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        tt = c.default.div.withConfig({
          displayName: "NavigationStyles__Background",
          componentId: "sc-10cj8br-12",
        })(["width:100%;height:100%;position:absolute;z-index:4;"]),
        et = c.default.div.withConfig({
          displayName: "NavigationStyles__LinkBox",
          componentId: "sc-10cj8br-13",
        })(
          [
            "width:100%;height:40vh;max-height:400px;position:relative;overflow:hidden;cursor:pointer;transform:scale(0%);transform-origin:",
            ";animation:popup 1s cubic-bezier(0.77,0,0.175,1) ",
            " forwards;@media only ",
            "{transform-origin:center;}&::after{content:'';position:absolute;width:100%;height:100%;inset:0;margin:auto;opacity:1;z-index:20;background-color:#000;transition:opacity 0.8s cubic-bezier(0.445,0.05,0.55,0.95);}a{display:block;position:absolute;inset:0;}@media screen and (hover:hover) and (pointer:fine){&:hover::after{opacity:0;pointer-events:none;}}.Box1{background:url('/Images/Box1.jpeg') no-repeat center center / cover;}.Box2{background:url('/Images/Box2.jpeg') no-repeat center center / cover;}.Box3{background:url('/Images/Box3.jpeg') no-repeat center center / cover;}.Box4{background:url('/Images/Box4.jpeg') no-repeat center center / cover;}.Box1,.Box2,.Box3,.Box4{transition:transform 3.25s cubic-bezier(0.445,0.05,0.55,0.95);@media screen and (hover:hover) and (pointer:fine){&:hover{transform:scale(1.5) translateX(-40px) rotate(10deg);}}@media only ",
            "{&:hover{transform:scale(1.2) rotate(45deg);}}@media screen and (hover:none) and (pointer:coarse){display:none;}}@media only ",
            "{border-radius:50%;border:none !important;width:clamp(70px,10vw,110px);height:clamp(70px,10vw,110px);& a{width:100%;height:100%;position:static;display:grid;place-items:center;}}@keyframes popup{100%{transform:scale(100%);}}",
          ],
          function (t) {
            var e = t.origin;
            return "".concat(e);
          },
          function (t) {
            var e = t.delay;
            return "".concat(e, "s");
          },
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        nt = c.default.div.withConfig({
          displayName: "NavigationStyles__NavLinkInfoWrapper",
          componentId: "sc-10cj8br-14",
        })(
          [
            "width:max-content;position:absolute;z-index:25;bottom:40px;left:50px;& svg{color:white;}@media only ",
            "{position:static;display:grid;place-items:center;& svg{width:clamp(1.5rem,4vw,3rem);height:clamp(1.5rem,4vw,3rem);}}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        rt = c.default.h2.withConfig({
          displayName: "NavigationStyles__NavLinkTitle",
          componentId: "sc-10cj8br-15",
        })(
          [
            "font-size:2rem;color:white;font-weight:400;margin-top:0.75rem;transition:letter-spacing 0.5s cubic-bezier(0,-0.04,0,0.96);&:hover{letter-spacing:1.75px;}@media only ",
            "{display:none;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        it = function () {
          var t = (0, s.useState)(!1),
            e = t[0],
            n = t[1],
            r = (0, s.useState)(!1),
            o = r[0],
            a = r[1],
            c = (0, R.useRouter)(),
            u = (0, l.lh)().scroll,
            f = function () {
              n(!1);
            };
          (0, s.useEffect)(
            function () {
              u &&
                "/#gotoprojects" == c.asPath &&
                u.scrollTo("#projects", { offset: -110 });
            },
            [c, u]
          ),
            (0, s.useEffect)(
              function () {
                u && (e ? u.stop() : u.start());
              },
              [e, u]
            );
          var p = (0, s.useContext)(V.z),
            h = p.removeCursor,
            m = p.showCursor;
          (0, s.useLayoutEffect)(function () {
            var t = document.querySelector("body");
            "default" == t.style.cursor && (t.style.cursor = "none");
          }, []);
          var v = {
            hoverStart: { width: 25, x: 15, height: 4 },
            hoverStop: { width: 40, height: 4 },
            clickStart: e && {
              height: 4,
              rotate: 45,
              bottom: "44%",
              transition: { duration: 0.4 },
            },
            clickStop: {
              height: 2,
              rotate: 0,
              bottom: "30%",
              transition: { duration: 0.4 },
            },
          };
          return (0, d.jsxs)(F, {
            id: "top",
            as: i.E.div,
            initial: { y: "-50", opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: {
              type: "tween",
              duration: 1,
              ease: [0.77, 0.2, 0.05, 1],
            },
            children: [
              (0, d.jsx)(H, {
                onClick: function () {
                  u.scrollTo("top");
                },
                children: (0, d.jsx)(Z, {
                  onMouseEnter: h,
                  onMouseLeave: m,
                  as: i.E.div,
                  whileHover: { border: "6px solid #000", scale: 1.15 },
                  whileTap: { scale: 0.7, transition: { duration: 0.4 } },
                  onClick: function () {
                    a(!0),
                      setTimeout(function () {
                        a(!1);
                      }, 450);
                  },
                  animatelogo: o ? 1 : 0,
                  role: "button",
                }),
              }),
              (0, d.jsx)(H, {
                children: (0, d.jsxs)(G, {
                  onMouseEnter: h,
                  onMouseLeave: m,
                  as: i.E.div,
                  initial: "clickStop",
                  whileHover: e ? "hoverStop" : "hoverStart",
                  animate: e ? "clickStart" : "clickStop",
                  onClick: function () {
                    n(!e);
                  },
                  role: "button",
                  children: [
                    (0, d.jsx)(W, {
                      as: i.E.div,
                      variants: {
                        hoverStart: { height: 4 },
                        hoverStop: { height: 4 },
                        clickStart: {
                          height: 4,
                          rotate: -45,
                          top: "45%",
                          transition: { duration: 0.4 },
                        },
                        clickStop: {
                          height: 2,
                          rotate: 0,
                          top: "30%",
                          transition: { duration: 0.4 },
                        },
                      },
                      isOpen: e,
                    }),
                    (0, d.jsx)(U, { as: i.E.div, variants: v, isOpen: e }),
                  ],
                }),
              }),
              (0, d.jsx)(O, {
                children:
                  e &&
                  (0, d.jsx)(X, {
                    onMouseEnter: h,
                    onMouseLeave: m,
                    as: i.E.div,
                    initial: { translateY: "-100vh" },
                    animate: {
                      translateY: 0,
                      transition: {
                        type: "tween",
                        duration: 1,
                        ease: [0.77, 0, 0.175, 1],
                      },
                    },
                    exit: {
                      translateY: "-100vh",
                      transition: {
                        type: "tween",
                        duration: 1.2,
                        ease: [0.77, 0, 0.175, 1],
                      },
                    },
                    children: (0, d.jsxs)(J, {
                      children: [
                        (0, d.jsx)(q, {
                          children: (0, d.jsxs)(K, {
                            children: [
                              (0, d.jsx)(M(), {
                                href: "/",
                                passHref: !0,
                                children: (0, d.jsx)("a", {
                                  className: "navAnchor",
                                  children: (0, d.jsx)(Y.yw, {
                                    children: (0, d.jsx)($, {
                                      onClick: f,
                                      delay: 0.25,
                                      children: "Home",
                                    }),
                                  }),
                                }),
                              }),
                              (0, d.jsx)("a", {
                                className: "navAnchor",
                                children: (0, d.jsx)(Y.yw, {
                                  children: (0, d.jsx)($, {
                                    onClick: function () {
                                      "/" == c.asPath
                                        ? window.innerHeight > 950
                                          ? u.scrollTo("#projects", {
                                              offset: -140,
                                            })
                                          : u.scrollTo("#projects", {
                                              offset: -110,
                                            })
                                        : "/about" == c.asPath
                                        ? window.innerHeight > 800
                                          ? u.scrollTo("#projects", {
                                              offset: -110,
                                            })
                                          : u.scrollTo("#projects", {
                                              offset: -80,
                                            })
                                        : c.push("/#gotoprojects"),
                                        n(!1);
                                    },
                                    delay: 0.5,
                                    children: "Projects",
                                  }),
                                }),
                              }),
                              (0, d.jsx)(M(), {
                                href: "/#IntroStyles__TitleOverflowHero-sc-ze5m8i-2 dQTOq",
                                passHref: !0,
                                children: (0, d.jsx)("a", {
                                  className: "navAnchor",
                                  children: (0, d.jsx)(Y.yw, {
                                    children: (0, d.jsx)($, {
                                      onClick: f,
                                      delay: 0.75,
                                      children: "About Me",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, d.jsxs)(Q, {
                          children: [
                            (0, d.jsx)(et, {
                              delay: 1,
                              origin: "bottom right",
                              children: (0, d.jsxs)("a", {
                                href: "https://github.com/TayyabNazeerShaikh",
                                target: "_blank",
                                "aria-label": "github",
                                rel: "noreferrer",
                                children: [
                                  (0, d.jsx)(tt, { className: "Box1" }),
                                  (0, d.jsxs)(nt, {
                                    children: [
                                      (0, d.jsx)(L.rFR, { size: "2rem" }),
                                      (0, d.jsx)(rt, { children: "Github" }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, d.jsx)(et, {
                              delay: 1.2,
                              origin: "bottom left",
                              children: (0, d.jsxs)("a", {
                                href: "mailto:irshadla2007@gmail.com",
                                "aria-label": "email",
                                children: [
                                  (0, d.jsx)(tt, { className: "Box2" }),
                                  (0, d.jsxs)(nt, {
                                    children: [
                                      (0, d.jsx)(N, { size: "2rem" }),
                                      (0, d.jsx)(rt, { children: "Email" }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, d.jsx)(et, {
                              delay: 1.4,
                              origin: "top right",
                              children: (0, d.jsxs)("a", {
                                href: "https://www.linkedin.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  (0, d.jsx)(tt, { className: "Box3" }),
                                  (0, d.jsxs)(nt, {
                                    children: [
                                      (0, d.jsx)(D, { size: "2rem" }),
                                      (0, d.jsx)(rt, { children: "LinkedIn" }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, d.jsx)(et, {
                              delay: 1.6,
                              origin: "top left",
                              children: (0, d.jsxs)("a", {
                                href: "https://unsplash.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  (0, d.jsx)(tt, { className: "Box4" }),
                                  (0, d.jsxs)(nt, {
                                    children: [
                                      (0, d.jsx)(B, { size: "2rem" }),
                                      (0, d.jsx)(rt, { children: "Unsplash" }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              }),
            ],
          });
        },
        ot = c.default.div.withConfig({
          displayName: "LayoutStyles__Container",
          componentId: "sc-1u9qa94-0",
        })(["max-width:1700px;height:auto;margin:auto;"]),
        at = function (t) {
          var e = t.children,
            n = t.scrollRef;
          return (0, d.jsx)(ot, {
            "data-load-container": "",
            className: "cursorBoundary",
            children: (0, d.jsx)(ot, {
              "data-scroll-container": !0,
              ref: n,
              children: (0, d.jsxs)(p.im, {
                children: [(0, d.jsx)(it, {}), e, (0, d.jsx)(b, {})],
              }),
            }),
          });
        },
        st = {
          fonts: { main: "TTCommonsProVar, sans-serif" },
          colors: { background: "rgb(249, 242, 237)" },
          breakpoints: {
            xs: "screen and (max-width: 451px)",
            sm: "screen and (max-width: 641px)",
            md: "screen and (max-width: 769px)",
            mdHover:
              "screen and (max-width: 769px) and (hover: none) and (pointer: coarse)",
            ip: "screen and (max-width: 821px)",
            ipHover:
              "screen and (max-width: 821px) and (hover: none) and (pointer: coarse)",
            lg: "screen and (max-width: 1025px)",
            lgHover:
              "screen and (max-width: 1025px) and (hover: none) and (pointer: coarse)",
            xl: "screen and (max-width: 1281px)",
            hover: "screen and (hover: hover) and (pointer: fine)",
            hoverNone: "screen and (hover: none) and (pointer: coarse)",
          },
        },
        lt = n(7704),
        ct = (0, c.createGlobalStyle)(
          [
            "",
            ";@supports (font-variation-settings:normal){@font-face{font-family:'TTCommonsProVar';src:url('/Fonts/TTCommonsProVar.woff2') format('woff2 supports variations'),url('/Fonts/TTCommonsProVar.woff2') format('woff2-variations');font-weight:100 950;font-stretch:75% 125%;font-display:swap;font-style:oblique 0deg 20deg;}}*{box-sizing:border-box;margin:0;padding:0;}::-webkit-scrollbar{width:8px;}::-webkit-scrollbar-track{background:rgba(0,0,0,0);}::-webkit-scrollbar-thumb{background:#909090;border-radius:8px;}::-webkit-scrollbar-thumb:hover{background:#606060;}::-moz-selection{color:black;background:#ccc;}::selection{color:black;background:#ccc;}html{scroll-behavior:smooth !important;-webkit-tap-highlight-color:transparent;}body{font-family:",
            ";font-size:1.25rem;background:",
            ";color:#000;@media screen and (hover:hover) and (pointer:fine){cursor:none;}}h1,h2,h3,h4,h5,h6,button{font-family:",
            ';}p{font-size:1rem;}a{text-decoration:none;color:black;}li{list-style:none;}/*! locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */ html.has-scroll-smooth{overflow:hidden;}html.has-scroll-dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.has-scroll-smooth body{overflow:hidden;}[data-load-container]{position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;}.has-scroll-smooth [data-scroll-container]{min-height:100vh;}[data-scroll-direction="horizontal"] [data-scroll-container]{height:100vh;display:inline-block;white-space:nowrap;}[data-scroll-direction="horizontal"] [data-scroll-section]{display:inline-block;vertical-align:top;white-space:nowrap;height:100%;}.c-scrollbar{position:absolute;right:0;top:0;width:11px;height:100%;transform-origin:center right;transition:transform 0.3s,opacity 0.3s;opacity:0;}.c-scrollbar:hover{transform:scaleX(1.45);}.c-scrollbar:hover,.has-scroll-scrolling .c-scrollbar,.has-scroll-dragging .c-scrollbar{opacity:1;}[data-scroll-direction="horizontal"] .c-scrollbar{width:100%;height:10px;top:auto;bottom:0;transform:scaleY(1);}[data-scroll-direction="horizontal"] .c-scrollbar:hover{transform:scaleY(1.3);}.c-scrollbar_thumb{position:absolute;top:0;right:0;background-color:black;opacity:0.5;width:4px;border-radius:4px;margin:2px;cursor:-webkit-grab;cursor:grab;}.has-scroll-dragging .c-scrollbar_thumb{cursor:-webkit-grabbing;cursor:grabbing;}[data-scroll-direction="horizontal"] .c-scrollbar_thumb{right:auto;bottom:0;}',
          ],
          lt.Fv,
          function (t) {
            return t.theme.fonts.main;
          },
          function (t) {
            return t.theme.colors.background;
          },
          function (t) {
            return t.theme.fonts.main;
          }
        ),
        ut = function (t) {
          var e = t.children;
          return (0, d.jsxs)(c.ThemeProvider, {
            theme: st,
            children: [(0, d.jsx)(ct, {}), e],
          });
        };
      function dt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ft(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? dt(Object(n), !0).forEach(function (e) {
                r(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : dt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var pt = function (t) {
        var e = t.Component,
          n = t.pageProps,
          r = t.router,
          o = (0, s.useRef)(null),
          c = (0, s.useState)(!0),
          u = c[0],
          h = c[1];
        return (
          (0, s.useLayoutEffect)(
            function () {
              h(!0);
            },
            [r.asPath]
          ),
          (0, s.useEffect)(
            function () {
              setTimeout(function () {
                h(!1);
              }, 1500);
            },
            [r.asPath]
          ),
          (0, d.jsxs)(s.Fragment, {
            children: [
              (0, d.jsx)(a(), {
                children: (0, d.jsx)("title", { children: "Tayyab Shaikh" }),
              }),
              (0, d.jsx)(V.Z, {
                children: (0, d.jsx)(ut, {
                  children: u
                    ? (0, d.jsx)(p.aN, {
                        children: (0, d.jsx)("div", {
                          className: "loadingAnimation",
                        }),
                      })
                    : (0, d.jsxs)(d.Fragment, {
                        children: [
                          (0, d.jsx)(f, {}),
                          (0, d.jsx)(i.E.div, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { duration: 1 },
                            children: (0, d.jsx)(l.a5, {
                              options: {
                                smooth: !0,
                                touchMultiplier: 3,
                                smartphone: { smooth: !0 },
                                tablet: { smooth: !0 },
                              },
                              watch: [r.asPath],
                              scrollRef: o,
                              children: (0, d.jsx)(at, {
                                scrollRef: o,
                                children: (0, d.jsx)(e, ft({}, n)),
                              }),
                            }),
                          }),
                        ],
                      }),
                }),
              }),
            ],
          })
        );
      };
    },
    1029: function (t, e, n) {
      "use strict";
      n.d(e, {
        $O: function () {
          return b;
        },
        $o: function () {
          return P;
        },
        AX: function () {
          return A;
        },
        Ag: function () {
          return G;
        },
        As: function () {
          return a;
        },
        Be: function () {
          return et;
        },
        CV: function () {
          return E;
        },
        D$: function () {
          return f;
        },
        DP: function () {
          return R;
        },
        E2: function () {
          return yt;
        },
        Eg: function () {
          return Q;
        },
        G: function () {
          return Tt;
        },
        Gm: function () {
          return kt;
        },
        Go: function () {
          return $;
        },
        I2: function () {
          return U;
        },
        IB: function () {
          return v;
        },
        IH: function () {
          return Y;
        },
        Il: function () {
          return l;
        },
        In: function () {
          return M;
        },
        It: function () {
          return Ct;
        },
        Jy: function () {
          return m;
        },
        KE: function () {
          return C;
        },
        LR: function () {
          return k;
        },
        LZ: function () {
          return at;
        },
        Lh: function () {
          return vt;
        },
        M7: function () {
          return wt;
        },
        MA: function () {
          return ct;
        },
        Mu: function () {
          return o;
        },
        NU: function () {
          return bt;
        },
        OC: function () {
          return w;
        },
        OU: function () {
          return c;
        },
        Oj: function () {
          return xt;
        },
        Ox: function () {
          return mt;
        },
        P$: function () {
          return tt;
        },
        Ru: function () {
          return H;
        },
        Sb: function () {
          return D;
        },
        Tr: function () {
          return nt;
        },
        U3: function () {
          return d;
        },
        W6: function () {
          return ft;
        },
        Wf: function () {
          return rt;
        },
        X6: function () {
          return q;
        },
        XU: function () {
          return st;
        },
        XZ: function () {
          return Z;
        },
        Xg: function () {
          return pt;
        },
        Xw: function () {
          return B;
        },
        ZE: function () {
          return O;
        },
        ZO: function () {
          return J;
        },
        ZV: function () {
          return F;
        },
        Zg: function () {
          return W;
        },
        _M: function () {
          return lt;
        },
        _U: function () {
          return X;
        },
        _w: function () {
          return _t;
        },
        aN: function () {
          return i;
        },
        aV: function () {
          return N;
        },
        bZ: function () {
          return p;
        },
        bt: function () {
          return L;
        },
        c6: function () {
          return it;
        },
        dI: function () {
          return u;
        },
        dT: function () {
          return y;
        },
        fg: function () {
          return z;
        },
        gM: function () {
          return ut;
        },
        h0: function () {
          return At;
        },
        hQ: function () {
          return j;
        },
        iK: function () {
          return V;
        },
        im: function () {
          return s;
        },
        ir: function () {
          return h;
        },
        iz: function () {
          return ot;
        },
        ld: function () {
          return _;
        },
        li: function () {
          return x;
        },
        m2: function () {
          return dt;
        },
        nA: function () {
          return g;
        },
        ob: function () {
          return Pt;
        },
        qL: function () {
          return K;
        },
        qZ: function () {
          return S;
        },
        qr: function () {
          return T;
        },
        qv: function () {
          return gt;
        },
        t_: function () {
          return ht;
        },
        ur: function () {
          return I;
        },
        x$: function () {
          return St;
        },
        y$: function () {
          return Et;
        },
      });
      var r = n(7379),
        i = r.default.div.withConfig({
          displayName: "GlobalComponents__Loader",
          componentId: "sc-2fgrv0-0",
        })([
          "width:100vw;height:100vh;position:fixed;inset:0;background:rgb(249,242,237);display:grid;place-items:center;& .loadingAnimation{width:100vw;height:100vh;background:black;transform:scaleY(0) translateZ(0);animation:loader 1.5s cubic-bezier(0.85,0.01,0.4,1) forwards;@keyframes loader{0%{transform-origin:bottom;transform:scaleY(0) translateZ(0);}40%{transform-origin:bottom;transform:scaleY(1) translateZ(0);}60%{transform-origin:top;transform:scaleY(1) translateZ(0);}100%{transform-origin:top;transform:scaleY(0) translateZ(0);}}}",
        ]),
        o = r.default.div.withConfig({
          displayName: "GlobalComponents__MouseWrapper",
          componentId: "sc-2fgrv0-1",
        })(
          [
            "width:30px;height:60px;display:grid;place-items:center;background:transparent;position:absolute;z-index:5;align-self:flex-end;@media only ",
            "{display:none;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        a = r.default.div.withConfig({
          displayName: "GlobalComponents__MouseBody",
          componentId: "sc-2fgrv0-2",
        })([
          "width:100%;height:85%;border:2px solid black;border-radius:20px;overflow:hidden;position:absolute;&::after{content:'';width:4px;height:2px;inset:0;margin:auto;border-radius:10px;background:black;position:absolute;animation:mouseScroll 1.25s ease-in-out infinite;@keyframes mouseScroll{0%{transform:translateY(-20px);height:2px;opacity:0;}60%{opacity:1;transform:translateY(0px);height:15px;}100%{height:0px;transform:translateY(60px);}}}",
        ]),
        s = r.default.div.withConfig({
          displayName: "GlobalComponents__Wrapper",
          componentId: "sc-2fgrv0-3",
        })([
          "max-width:1200px;min-height:100vh;margin:auto;display:flex;flex-direction:column;justify-content:space-between;",
        ]),
        l = r.default.div.withConfig({
          displayName: "GlobalComponents__ScrollWrap",
          componentId: "sc-2fgrv0-4",
        })(["width:100%;height:auto;"]),
        c = r.default.div.withConfig({
          displayName: "GlobalComponents__HeroContainer",
          componentId: "sc-2fgrv0-5",
        })(
          [
            "width:100%;min-height:400px;padding:0rem 4rem;display:flex;justify-content:center;align-items:center;",
            ";@media only ",
            "{padding:0rem 3rem;}@media only ",
            "{",
            ";}@media only ",
            "{padding:0rem 2rem;}@media only ",
            "{padding:0rem 1rem;",
            ";}",
          ],
          function (t) {
            return t.mt && "margin-top: 12rem;";
          },
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.mt && "margin-top: 8rem;";
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          },
          function (t) {
            return t.mt && "margin-top: 0rem;";
          }
        ),
        u = r.default.div.withConfig({
          displayName: "GlobalComponents__HeroWrapper",
          componentId: "sc-2fgrv0-6",
        })(
          [
            "width:100%;aspect-ratio:1.261176 / 1;position:relative;@media only ",
            "{position:static;display:grid;align-items:center;justify-items:flex-start;grid-template-columns:1fr 1fr;aspect-ratio:0.55 / 1;& .projectTitle{position:static;order:2;transform:translateX(0.001px) !important;}}a{position:absolute;z-index:4;top:40%;margin-top:8rem;transform:translateY(50px) translateZ(0);opacity:0;transition:transform 0.75s ease-in-out,opacity 0.75s ease-in-out;@media only ",
            "{top:45%;}@media only ",
            "{position:static;justify-self:flex-end;margin-top:42.5px;order:3;grid-column:2 / 3;}}a.is-inview{opacity:1;transform:translateY(-20px) translateZ(0);}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        d = r.default.div.withConfig({
          displayName: "GlobalComponents__MainTitle",
          componentId: "sc-2fgrv0-7",
        })(
          [
            "position:absolute;width:max-content;opacity:0;overflow:hidden;z-index:4;top:30%;",
            ";@media only ",
            "{top:25%;",
            ";}&.is-inview{animation:HeroCaptionHeavenly 0.75s forwards ease-in-out;@keyframes HeroCaptionHeavenly{to{opacity:1;}}}",
          ],
          function (t) {
            return t.right ? "right:9.5%" : "left:0";
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.right ? "right:2.5vw" : "left:0";
          }
        ),
        f = r.default.div.withConfig({
          displayName: "GlobalComponents__BackOverflow",
          componentId: "sc-2fgrv0-8",
        })(
          [
            "width:50%;aspect-ratio:0.68717948 / 1;overflow:hidden;position:absolute;right:0;z-index:2;top:8%;@media only ",
            "{width:100%;grid-column:1 / span 2;position:static;}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        p = r.default.div.withConfig({
          displayName: "GlobalComponents__HeroBgContainer",
          componentId: "sc-2fgrv0-9",
        })([
          "width:100%;aspect-ratio:0.645783 / 1;clip-path:polygon(0 100%,100% 100%,100% 100%,0% 100%);will-change:clip-path;transition:clip-path 1.6s cubic-bezier(0.215,0.61,0.355,1);&.is-inview{clip-path:polygon(0 100%,100% 100%,100% 0,0 0);}",
        ]),
        h = r.default.div.withConfig({
          displayName: "GlobalComponents__HeroBg",
          componentId: "sc-2fgrv0-10",
        })(
          [
            "width:100%;height:100%;background:",
            ";transform:scale(1.4) translateZ(0);will-change:transform;transition:transform 1.6s 0.1s cubic-bezier(0.215,0.61,0.355,1);&.is-inview{transform:scale(1) translateZ(0);}",
          ],
          function (t) {
            var e = t.image;
            return "Url(".concat(e, ") no-repeat center center /\n    cover");
          }
        ),
        m = r.default.div.withConfig({
          displayName: "GlobalComponents__ExploreBtn",
          componentId: "sc-2fgrv0-11",
        })(
          [
            "width:100px;height:100px;display:grid;place-items:center;border:2px solid black;border-radius:50%;cursor:pointer;transform:scale(1) translateZ(0);transition:background-color 0.2s cubic-bezier(0.39,0.575,0.565,1),transform 0.2s cubic-bezier(0.39,0.575,0.565,1);animation:elementsReveal 1s forwards;@media only ",
            "{width:85px;height:85px;background-color:black;color:white;}@media only ",
            "{width:75px;height:75px;}@keyframes elementsReveal{from{opacity:0;}to{opacity:1;}}&::before{content:'';position:absolute;width:100%;height:100%;border:2px solid black;border-radius:50%;transform:scale(1) translateZ(0);opacity:0;transition:transform 0.75s cubic-bezier(0.39,0.575,0.565,1),opacity 0.25s cubic-bezier(0.39,0.575,0.565,1);}&::after{content:'';position:absolute;width:20px;height:20px;background-color:black;border-radius:50%;transform:rotateZ(0deg) translateX(74px);opacity:0;pointer-events:none;}@media only ",
            "{&:hover{background-color:black;transform:scale(0.95) translateZ(0);color:rgb(249,242,237);}&:hover::before{opacity:1;transform:scale(1.5);}&:hover::after{opacity:1;animation:orbit 4s 0.75s linear infinite;@keyframes orbit{to{transform:rotateZ(360deg) translateX(74px);}}}}.exploreText{font-size:1.1rem;font-weight:450;transition:color 0.325s cubic-bezier(0.39,0.575,0.565,1);@media only ",
            "{font-size:1rem;}@media only ",
            "{font-size:0.85rem;}}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          },
          function (t) {
            return t.theme.breakpoints.hover;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        v = r.default.div.withConfig({
          displayName: "GlobalComponents__HeroWrapperCine",
          componentId: "sc-2fgrv0-12",
        })(
          [
            "width:100%;aspect-ratio:1.307317 / 1;position:relative;a{position:absolute;z-index:4;top:55%;right:26%;transform:translateY(50px) translateZ(0);opacity:0;transition:transform 0.75s ease-in-out,opacity 0.75s ease-in-out;}@media only ",
            "{position:static;display:grid;align-items:center;justify-items:flex-start;grid-template-columns:1fr 1fr;aspect-ratio:0.55 / 1;& .projectTitle{position:static;transform:translateX(0.001px) !important;}a{@media only ",
            "{top:35%;}@media only ",
            "{position:static;justify-self:flex-end;margin-top:42.5px;}}}a.is-inview{opacity:1;transform:translateY(-20px) translateZ(0);}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        g = r.default.div.withConfig({
          displayName: "GlobalComponents__BackOverflowCine",
          componentId: "sc-2fgrv0-13",
        })(
          [
            "width:50%;aspect-ratio:0.6871794 / 1;overflow:hidden;position:absolute;left:0;bottom:5%;z-index:2;@media only ",
            "{width:100%;grid-column:1 / span 2;position:static;}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        y = r.default.div.withConfig({
          displayName: "GlobalComponents__HeroBgContainerCine",
          componentId: "sc-2fgrv0-14",
        })([
          "width:100%;aspect-ratio:0.67 / 1;clip-path:polygon(0 100%,100% 100%,100% 100%,0% 100%);will-change:clip-path;transition:clip-path 1.6s cubic-bezier(0.215,0.61,0.355,1);&.is-inview{clip-path:polygon(0 100%,100% 100%,100% 0,0 0);}",
        ]),
        b = r.default.div.withConfig({
          displayName: "GlobalComponents__HeroBgCine",
          componentId: "sc-2fgrv0-15",
        })([
          "width:100%;height:100%;background:Url('/Images/Cinephiled/Cinephiled_Banner.webp') no-repeat center center / cover;transform:scale(1.4) translateZ(0);transition:transform 1.6s 0.1s cubic-bezier(0.215,0.61,0.355,1);&.is-inview{transform:scale(1) translateZ(0);}",
        ]),
        w = r.default.div.withConfig({
          displayName: "GlobalComponents__ExploreBtnCine",
          componentId: "sc-2fgrv0-16",
        })(
          [
            "width:100px;height:100px;display:grid;place-items:center;border:2px solid black;border-radius:50%;cursor:pointer;transform:scale(1) translateZ(0);transition:background-color 0.325s cubic-bezier(0.39,0.575,0.565,1),transform 0.325s cubic-bezier(0.39,0.575,0.565,1);@media only ",
            "{width:85px;height:85px;background-color:black;color:white;}@media only ",
            "{width:75px;height:75px;}&::before{content:'';position:absolute;width:100%;height:100%;border:2px solid black;border-radius:50%;transform:scale(1) translateZ(0);opacity:0;}@media only ",
            "{&:hover{background-color:black;color:rgb(249,242,237);transform:scale(0.95) translateZ(0);}&:hover::before{opacity:1;animation:ripple 1.75s 0.2s linear infinite;@keyframes ripple{to{transform:scale(1.5) translateZ(0);opacity:0;}}}}.exploreText{font-size:1.1rem;font-weight:450;transition:color 0.325s cubic-bezier(0.39,0.575,0.565,1);@media only ",
            "{font-size:1rem;}@media only ",
            "{font-size:0.85rem;}}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          },
          function (t) {
            return t.theme.breakpoints.hover;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        x = r.default.div.withConfig({
          displayName: "GlobalComponents__TitleOverflowHeavenly",
          componentId: "sc-2fgrv0-17",
        })(
          [
            "position:absolute;width:max-content;margin-bottom:calc(4.5rem - 4.75vh);z-index:5;opacity:0;overflow:hidden;animation:HeroCaptionHeavenly 0.75s forwards ease-in-out;@media only ",
            "{margin:0;margin-top:4rem;}@media only ",
            "{margin-top:1.5rem;}@keyframes HeroCaptionHeavenly{to{opacity:1;}}",
          ],
          function (t) {
            return t.theme.breakpoints.lgHover;
          },
          function (t) {
            return t.theme.breakpoints.ipHover;
          }
        ),
        k = r.default.h1.withConfig({
          displayName: "GlobalComponents__HeroTitle",
          componentId: "sc-2fgrv0-18",
        })(
          [
            "font-size:clamp(2.25rem,7.5vw,3.5rem);font-weight:450;margin:0;& br{display:none;@media only ",
            "{display:block;}@media only ",
            "{display:none;}@media only screen and (max-width:400px){display:block;& ~ span.Span-9{margin-left:5rem;}}}& > span{display:inline-block;}&.captionAnimation{font-size:clamp(3rem,8.25vw,4rem);font-weight:550;@media only ",
            "{.xsBlock{display:block;margin-left:6.5rem;}}}&.captionAnimation,&.is-inview{& span{transform:translateY(80px) translateZ(0);@media only ",
            "{transform:translateY(110px) translateZ(0);}}.xsBlock{transform:none;& span{display:inline-block;}}.Span-1{animation:Span1 0.25s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span1{to{transform:translateY(0px) translateZ(0);}}}.Span-2{animation:Span2 0.3s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span2{to{transform:translateY(0px) translateZ(0);}}}.Span-3{animation:Span3 0.35s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span3{to{transform:translateY(0px) translateZ(0);}}}.Span-4{animation:Span4 0.4s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span4{to{transform:translateY(0px) translateZ(0);}}}.Span-5{animation:Span5 0.45s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span5{to{transform:translateY(0px) translateZ(0);}}}.Span-6{animation:Span6 0.5s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span6{to{transform:translateY(0px) translateZ(0);}}}.Span-7{animation:Span7 0.55s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span7{to{transform:translateY(0px) translateZ(0);}}}.Span-8{animation:Span8 0.6s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span8{to{transform:translateY(0px) translateZ(0);}}}.Span-9{animation:Span9 0.65s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span9{to{transform:translateY(0px) translateZ(0);}}}.Span-10{animation:Span10 0.7s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span10{to{transform:translateY(0px) translateZ(0);}}}.Span-11{animation:Span11 0.75s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span11{to{transform:translateY(0px) translateZ(0);}}}.Span-12{animation:Span12 0.8s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span12{to{transform:translateY(0px) translateZ(0);}}}.Span-13{animation:Span13 0.85s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span13{to{transform:translateY(0px) translateZ(0);}}}.Span-14{animation:Span14 0.9s 0.25s forwards cubic-bezier(1,0,0,1);@keyframes Span14{to{transform:translateY(0px) translateZ(0);}}}}",
          ],
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        S = r.default.div.withConfig({
          displayName: "GlobalComponents__Orbit",
          componentId: "sc-2fgrv0-19",
        })(
          [
            "width:400px;height:400px;outline:2px solid black;border-radius:50%;position:relative;z-index:2;transform:rotateY(0deg) skew(288deg,25deg) scale(0.2) translateZ(0);transform-style:preserve-3d;animation:orbitEnter 1s cubic-bezier(0.39,0.575,0.565,1) forwards;@keyframes orbitEnter{to{transform:rotateY(60deg) skew(288deg,25deg) scale(1) translateZ(0);}}&::after{content:'';position:absolute;width:20px;height:20px;background-color:black;border-radius:50%;left:190px;top:190px;transform:rotateZ(0deg) translateX(200px) rotateZ(-0deg) rotateY(-60deg) skew(58deg,346deg);animation:rotate 4s infinite linear;}@keyframes rotate{100%{transform:rotateZ(360deg) translateX(200px) rotateZ(-360deg) rotateY(-60deg) skew(58deg,346deg);}}@media only ",
            "{width:350px;height:350px;&::after{left:166.25px;top:166.25px;transform:rotateZ(0deg) translateX(175px) rotateZ(-0deg) rotateY(-60deg) skew(58deg,346deg);}@keyframes rotate{100%{transform:rotateZ(360deg) translateX(175px) rotateZ(-360deg) rotateY(-60deg) skew(58deg,346deg);}}}@media only ",
            "{width:225px;height:225px;&::after{left:103px;top:103px;transform:rotateZ(0deg) translateX(112px) rotateZ(-0deg) rotateY(-60deg) skew(58deg,346deg);}@keyframes rotate{100%{transform:rotateZ(360deg) translateX(112px) rotateZ(-360deg) rotateY(-60deg) skew(58deg,346deg);}}}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        C = r.default.div.withConfig({
          displayName: "GlobalComponents__Solar",
          componentId: "sc-2fgrv0-20",
        })(
          [
            "position:relative;width:100%;height:590px;display:grid;place-items:center;@media only ",
            "{height:475px;}@media only ",
            "{height:425px;}@media only ",
            "{height:350px;}",
          ],
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        E = r.default.div.withConfig({
          displayName: "GlobalComponents__ShowCaseGrid",
          componentId: "sc-2fgrv0-21",
        })(
          [
            "width:100%;height:100%;display:grid;grid-template-columns:repeat(2,1fr);justify-items:center;align-items:center;gap:2rem;@media only ",
            "{grid-template-columns:2fr 1fr;",
            ";}@media only ",
            "{grid-template-columns:1fr;}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.grow && "grid-template-columns: 1fr 2fr";
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        _ = r.default.div.withConfig({
          displayName: "GlobalComponents__BackOverflowHeavenly",
          componentId: "sc-2fgrv0-22",
        })(
          [
            "width:100%;aspect-ratio:",
            ";overflow:hidden;",
            ";position:relative;clip-path:polygon(0 100%,100% 100%,100% 100%,0% 100%);will-change:clip-path;transition:clip-path 1s cubic-bezier(0.215,0.61,0.355,1);&.is-inview{clip-path:polygon(0 100%,100% 100%,100% 0,0 0);}@media only ",
            "{",
            ";}",
          ],
          function (t) {
            return t.aspect;
          },
          function (t) {
            return t.shift && "grid-column: 2 / 3;";
          },
          function (t) {
            return t.theme.breakpoints.xs;
          },
          function (t) {
            return t.shift && "grid-column: 1 / 1;";
          }
        ),
        T = r.default.div.withConfig({
          displayName: "GlobalComponents__ShowCaseImgWrapper",
          componentId: "sc-2fgrv0-23",
        })(
          [
            "width:100%;aspect-ratio:",
            ";position:absolute;top:0;left:0;transform:scale(1.4) translateZ(0);transition:transform 1.4s 0.1s cubic-bezier(0.215,0.61,0.355,1);&.is-inview{transform:scale(1) translateZ(0);}",
          ],
          function (t) {
            return t.aspect;
          }
        ),
        A = r.default.div.withConfig({
          displayName: "GlobalComponents__ShowCaseImg",
          componentId: "sc-2fgrv0-24",
        })(
          [
            "width:100%;height:100%;background:",
            ";@media only ",
            "{margin-top:-3rem;}@media only ",
            "{margin-top:-1.75rem;}",
          ],
          function (t) {
            var e = t.background;
            return "url(".concat(e, ") no-repeat center center /cover");
          },
          function (t) {
            return t.theme.breakpoints.lgHover;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          }
        ),
        P = r.default.div.withConfig({
          displayName: "GlobalComponents__ShowcaseTitleWrap",
          componentId: "sc-2fgrv0-25",
        })(
          [
            "width:100%;height:100%;display:flex;align-items:center;",
            " @media only ",
            "{display:none;}",
          ],
          function (t) {
            return t.right
              ? "  justify-content: flex-end;\n"
              : "   justify-content: flex-start;\n";
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        j = r.default.div.withConfig({
          displayName: "GlobalComponents__ShowcaseTitle",
          componentId: "sc-2fgrv0-26",
        })(
          [
            "font-size:clamp(5rem,12vw,10rem);width:fit-content;color:grey;writing-mode:vertical-lr;transform-origin:center;font-weight:600;margin-right:2rem;clip-path:polygon(0 100%,100% 100%,100% 100%,0% 100%);will-change:clip-path;transition:clip-path 1s cubic-bezier(0.215,0.61,0.355,1);",
            " &.is-inview{clip-path:polygon(0 100%,100% 100%,100% 0,0 0);}",
          ],
          function (t) {
            return t.right && "margin-right: 0; margin-left: 2rem;";
          }
        ),
        O = r.default.div.withConfig({
          displayName: "GlobalComponents__BreakdownContainer",
          componentId: "sc-2fgrv0-27",
        })(
          [
            "width:100%;height:max-content;margin:4rem 0rem 2rem;padding:0rem 4rem;@media only ",
            "{padding:0rem 3rem;margin:2rem 0rem 2rem;",
            "}@media only ",
            "{padding:0rem 3rem;margin:1rem 0rem 1rem;",
            "}@media only ",
            "{padding:0rem 2rem;}@media only ",
            "{padding:0rem 1rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.margin && "margin-top: 4rem;";
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.margin && "margin-top: 3rem; margin-bottom: 2rem;";
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        I = r.default.div.withConfig({
          displayName: "GlobalComponents__BreakdownWrapper",
          componentId: "sc-2fgrv0-28",
        })(["width:100%;height:max-content;margin-top:4rem;"]),
        M = r.default.span.withConfig({
          displayName: "GlobalComponents__Bullets",
          componentId: "sc-2fgrv0-29",
        })(
          [
            "font-size:clamp(2rem,6vw,3rem);font-weight:450;@media only ",
            "{display:block;",
            ";}",
          ],
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.margin && "margin-top: 3rem; margin-bottom: 2rem;";
          }
        ),
        R = r.default.div.withConfig({
          displayName: "GlobalComponents__BulletsWrapper",
          componentId: "sc-2fgrv0-30",
        })(
          [
            "width:max-content;margin:4rem auto 0rem;display:grid;",
            ";place-items:center;gap:3rem 5rem;@media only ",
            "{width:100%;margin:4rem auto;gap:3rem 4rem;grid-template-columns:repeat(auto-fit,minmax(100px,max-content));justify-content:center;}@media only ",
            "{&.typography{grid-template-columns:repeat(auto-fit,minmax(100px,225px));text-align:center;}}@media only ",
            "{&.typography{gap:2rem;margin:3rem auto;}}",
          ],
          function (t) {
            var e = t.columns;
            return "grid-template-columns: repeat(".concat(
              null !== e && void 0 !== e ? e : "3",
              ", max-content)"
            );
          },
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        L = r.default.span.withConfig({
          displayName: "GlobalComponents__FontFamily",
          componentId: "sc-2fgrv0-31",
        })(
          [
            "font-size:clamp(2rem,4.5vw,3rem);font-family:",
            ";font-weight:",
            ";&.varFont{br{display:none;}@media only ",
            "{br{display:block;}span{width:100%;display:inline-block;text-align:center;}}text-rendering:auto;animation:5s varFont infinite alternate;@keyframes varFont{from{font-variation-settings:'wght' 100;}to{font-variation-settings:'wght' 900;}}}",
          ],
          function (t) {
            return t.family;
          },
          function (t) {
            return t.weight;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        z = r.default.div.withConfig({
          displayName: "GlobalComponents__ColorsTitle",
          componentId: "sc-2fgrv0-32",
        })([
          "font-size:2rem;text-align:center;font-weight:400;width:max-content;margin:3rem auto;&.celestials{margin-top:6rem;}",
        ]),
        D = r.default.div.withConfig({
          displayName: "GlobalComponents__ColorCode",
          componentId: "sc-2fgrv0-33",
        })(
          [
            "width:100px;height:100px;border-radius:50%;background:",
            ";color:",
            ";font-size:1rem;font-family:'manrope',sans-serif;display:grid;place-items:center;opacity:0;transform:translateY(50px) translateZ(0);transition:transform 0.75s ease-in-out,opacity 0.75s ease-in-out;&.white{color:white;}&.outline{outline:1px solid #ddd;}&.is-inview{opacity:1;transform:translateY(0px) translateZ(0);}",
          ],
          function (t) {
            return t.color;
          },
          function (t) {
            var e = t.color;
            return "#000" == e ||
              "#333333" == e ||
              "#121212" == e ||
              "#0d253f" == e
              ? "white"
              : "black";
          }
        ),
        B = r.default.div.withConfig({
          displayName: "GlobalComponents__IconsSvg",
          componentId: "sc-2fgrv0-34",
        })(
          [
            "width:70px;height:70px;background:",
            ";opacity:0;transform:translateY(50px) translateZ(0);transition:transform 0.75s ease-in-out,opacity 0.75s ease-in-out;&.outline{outline:2px solid #ddd;border-radius:12px;}&.is-inview{opacity:1;transform:translateY(0px) translateZ(0);}",
          ],
          function (t) {
            var e = t.image;
            return "url(".concat(e, ") no-repeat center center /contain");
          }
        ),
        N = r.default.div.withConfig({
          displayName: "GlobalComponents__UserFlowImg",
          componentId: "sc-2fgrv0-35",
        })(
          [
            "width:100%;margin-top:3rem;aspect-ratio:",
            ";background:",
            ";opacity:0;transform:translateY(50px) translateZ(0);transition:transform 0.75s ease-in-out,opacity 0.75s ease-in-out;@media only ",
            "{margin-top:2rem;}&.is-inview{opacity:1;transform:translateY(0px) translateZ(0);}",
          ],
          function (t) {
            return t.aspect;
          },
          function (t) {
            var e = t.flow;
            return "Url(".concat(e, ") no-repeat center center /contain");
          },
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        V = r.default.div.withConfig({
          displayName: "GlobalComponents__JupiterShowcase",
          componentId: "sc-2fgrv0-36",
        })(["width:100%;margin:2rem auto;"]),
        Y = r.default.div.withConfig({
          displayName: "GlobalComponents__BlendShowcaseContainer",
          componentId: "sc-2fgrv0-37",
        })(
          [
            "width:80%;aspect-ratio:1.4 / 1;margin:auto;background-color:#000000;transform-style:preserve-3d;transition:transform 0.75s cubic-bezier(0.39,0.575,0.565,1),box-shadow 0.75s cubic-bezier(0.39,0.575,0.565,1);",
            " ",
            " @media only ",
            "{width:100%;}@media only ",
            "{",
            "}",
          ],
          function (t) {
            return !t.isDestruct && "transition-delay: 1.25s;";
          },
          function (t) {
            return (
              t.isDestruct &&
              "transform: rotateX(51deg) rotateY(0deg) rotateZ(43deg) translateZ(0px) scale(0.65) translateZ(-5rem);\n    box-shadow: 70px 70px 1.5rem rgba(0 0 0 /0.25);\n    "
            );
          },
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return (
              t.isDestruct &&
              "transform: rotateX(51deg) rotateY(0deg) rotateZ(43deg) translateZ(0px) scale(0.725) translateZ(-2.5rem);\n    box-shadow: 70px 70px 1.5rem rgba(0 0 0 /0.25);\n    "
            );
          }
        ),
        F = r.default.div.withConfig({
          displayName: "GlobalComponents__BlendShowcaseBg",
          componentId: "sc-2fgrv0-38",
        })(
          [
            "width:100%;aspect-ratio:1.673 / 1;background:url('Images/HeavenlyBodies/Jupiter_Hero.webp') no-repeat center center / cover;position:relative;transition:transform 1.25s cubic-bezier(0.39,0.575,0.565,1);",
            " &::after{content:'';inset:0;height:100%;position:absolute;background:linear-gradient( 180deg,rgba(210,136,99,0.5) 0%,rgba(0,0,0,0.6) 100% );background:-webkit-linear-gradient( 270deg,rgba(210,136,99,0.5) 0%,rgba(0,0,0,0.6) 100% );z-index:2;mix-blend-mode:soft-light;transition:opacity 0.2s cubic-bezier(0.39,0.575,0.565,1),height 0.2s cubic-bezier(0.39,0.575,0.565,1),transform 1.25s cubic-bezier(0.39,0.575,0.565,1);",
            " ",
            "}&::before{content:'';inset:0;height:100%;position:absolute;background:linear-gradient(180deg,rgba(0,0,0,0) 50%,#000000 100%);background:-webkit-linear-gradient( 270deg,rgba(0,0,0,0) 50%,#000000 100% );z-index:4;transition:opacity 0.2s cubic-bezier(0.39,0.575,0.565,1),height 0.2s cubic-bezier(0.39,0.575,0.565,1),transform 1.25s cubic-bezier(0.39,0.575,0.565,1);",
            " ",
            ";}",
          ],
          function (t) {
            return (
              t.isDestruct &&
              "transform: translateX(calc(clamp(3rem, 7vw ,5rem) * -1)) translateY(calc(clamp(3rem, 7vw ,5rem) * -1)) translateZ(0);\n    "
            );
          },
          function (t) {
            return t.isOverlay ? "opacity: 1; height: 101%;" : "opacity: 0;";
          },
          function (t) {
            return (
              t.isDestruct &&
              "transform: translateX(calc(clamp(3rem, 7vw ,5rem) * -1)) translateY(calc(clamp(3rem, 7vw ,5rem) * -1))translateZ(0);\n      outline: 1px solid rgba(51 51 51 / 0.25);\n    "
            );
          },
          function (t) {
            return t.isBlend ? "opacity: 1; height: 102%;" : "opacity: 0;";
          },
          function (t) {
            return (
              t.isDestruct &&
              "transform: translateX(calc(clamp(6rem, 15vw ,10.25rem) * -1)) translateY(calc(clamp(6rem, 15vw ,10.25rem) * -1)) translateZ(0);\n      outline: 1px solid rgba(51 51 51 / 0.25);\n\n    "
            );
          }
        ),
        H = r.default.div.withConfig({
          displayName: "GlobalComponents__JupiterInfo",
          componentId: "sc-2fgrv0-39",
        })(
          [
            "position:absolute;width:80%;margin:auto;bottom:0;left:0;right:0;padding:1.5rem;z-index:6;text-align:center;transition:transform 1.25s cubic-bezier(0.39,0.575,0.565,1);",
            " & .paragraph{color:white;font-size:clamp(0.75rem,2vw,1rem);font-family:'Montserrat',sans-serif;}@media only ",
            "{padding:0.5rem;",
            "}",
          ],
          function (t) {
            return (
              t.isDestruct &&
              "transform: translateX(calc(clamp(4rem, 22vw ,14.5rem) * -1)) translateY(calc(clamp(4rem, 22vw ,14.5rem) * -1)) translateZ(0);\n    "
            );
          },
          function (t) {
            return t.theme.breakpoints.xs;
          },
          function (t) {
            return (
              t.isDestruct &&
              "transform: translateX(calc(clamp(4rem, 22vw ,14.5rem) * -1)) translateY(calc(clamp(4rem, 30vw ,14.5rem) * -1)) translateZ(0);\n    "
            );
          }
        ),
        Z = r.default.h2.withConfig({
          displayName: "GlobalComponents__JupiterTitle",
          componentId: "sc-2fgrv0-40",
        })([
          "font-size:clamp(1.5rem,6vw,4rem);letter-spacing:8px;font-weight:500;color:white;",
        ]),
        G = r.default.h3.withConfig({
          displayName: "GlobalComponents__JupiterDistance",
          componentId: "sc-2fgrv0-41",
        })(
          [
            "padding:1rem 0rem;font-size:clamp(0.9rem,2.25vw,1.25rem);letter-spacing:10px;color:#fff;font-weight:400;@media only ",
            "{padding:0.25rem 0rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        W = r.default.div.withConfig({
          displayName: "GlobalComponents__ButtonsWrapper",
          componentId: "sc-2fgrv0-42",
        })(
          [
            "width:100%;margin:4.5rem auto 0.5rem auto;display:grid;grid-template-columns:repeat(3,160px);justify-content:center;place-items:center;gap:0rem 8rem;@media only ",
            "{margin-top:3.5rem;}@media only ",
            "{gap:0rem 7vw;}@media only ",
            "{grid-template-columns:repeat(2,160px);gap:1.5rem;}.buttonGrid{display:grid;place-items:center;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          }
        ),
        U = r.default.button.withConfig({
          displayName: "GlobalComponents__ShowcaseBtn",
          componentId: "sc-2fgrv0-43",
        })(
          [
            "width:150px;height:60px;color:black;display:grid;place-items:center;border:none;font-size:1.1rem;cursor:pointer;background-color:transparent;border:2px solid black;transition:background-color 0.5s ease-in-out,color 0.5s ease-in-out;font-family:'Manrope',sans-serif;font-weight:500;",
            "",
          ],
          function (t) {
            return t.clicked && "background: black; color: white;";
          }
        ),
        X = r.default.h3.withConfig({
          displayName: "GlobalComponents__DesignGuide",
          componentId: "sc-2fgrv0-44",
        })(
          [
            "font-size:clamp(2.5rem,6vw,3rem);font-weight:450;margin:2rem 0rem 4rem 0rem;@media only ",
            "{margin:3rem 0rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        $ = r.default.div.withConfig({
          displayName: "GlobalComponents__GuideContainer",
          componentId: "sc-2fgrv0-45",
        })(["width:100%;padding:1rem 0rem;height:auto;"]),
        q = r.default.h2.withConfig({
          displayName: "GlobalComponents__Heading",
          componentId: "sc-2fgrv0-46",
        })(
          [
            "font-size:2rem;font-family:'Manrope',sans-serif;font-weight:600;width:85%;margin:auto;margin-bottom:2rem;@media only ",
            "{width:100%;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          }
        ),
        K = r.default.p.withConfig({
          displayName: "GlobalComponents__Para",
          componentId: "sc-2fgrv0-47",
        })(
          [
            "font-size:1.2rem;width:85%;margin:auto;line-height:1.5;font-family:'Manrope',sans-serif;font-weight:normal;& .code{font-family:'Space Mono',monospace;text-decoration:underline;}@media only ",
            "{width:100%;}@media only ",
            "{b{font-size:1.3rem;}}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        J =
          (r.default.div.withConfig({
            displayName: "GlobalComponents__LinkPage",
            componentId: "sc-2fgrv0-48",
          })([
            "width:40%;height:70px;position:relative;display:grid;place-items:center;margin:4rem auto;cursor:pointer;background-color:black;color:white;& svg{transition:transform 300ms ease-in-out;}&:hover{svg{transform:translateX(20px);}}& div{display:flex;gap:2.5rem;align-items:center;padding:1rem;}& h2{font-size:1.75rem;font-family:'Manrope',sans-serif;font-weight:500;white-space:pre;}",
          ]),
          r.default.div.withConfig({
            displayName: "GlobalComponents__PostersContainer",
            componentId: "sc-2fgrv0-49",
          })(
            [
              "width:100%;height:700px;position:relative;display:grid;place-items:center;@media only ",
              "{height:600px;}&::after{content:'';inset:0;height:101%;position:absolute;z-index:4;opacity:0;background:linear-gradient(0deg,#f9f2ed,rgb(255 255 255 / 0));animation:PosterGradient 0.75s 5s forwards ease-in-out;@media only ",
              "{animation-delay:3.85s;}@media only ",
              "{animation-delay:3.8s;}@keyframes PosterGradient{to{opacity:1;}}}",
            ],
            function (t) {
              return t.theme.breakpoints.lg;
            },
            function (t) {
              return t.theme.breakpoints.ip;
            },
            function (t) {
              return t.theme.breakpoints.sm;
            }
          )),
        Q = r.default.div.withConfig({
          displayName: "GlobalComponents__TitleOverflow",
          componentId: "sc-2fgrv0-50",
        })(
          [
            "position:absolute;z-index:5;opacity:0;overflow:hidden;animation:HeroCaption 0.75s 4.9s forwards ease-in-out;@keyframes HeroCaption{to{opacity:1;}}@media only ",
            "{animation-delay:3.9s;}@media only ",
            "{animation-delay:3.85s;}",
          ],
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        tt = r.default.h1.withConfig({
          displayName: "GlobalComponents__PosterHeroTitle",
          componentId: "sc-2fgrv0-51",
        })(
          [
            "font-size:clamp(3.65rem,8.25vw,5rem);font-weight:550;text-align:center;margin:0;& > span{display:inline-block;}.Span-1,.Span-2,.Span-3,.Span-4,.Span-5,.Span-6,.Span-7,.Span-8,.Span-9,.Span-10{transform:translateY(80px) translateZ(0);animation:SpanEnter 0s 5.2s forwards cubic-bezier(1,0,0,1);@keyframes SpanEnter{to{transform:translateY(0px) translateZ(0);}}@media only ",
            "{animation-delay:4.05s;}@media only ",
            "{animation-delay:4s;}}.Span-1{animation-duration:0.25s;}.Span-2{animation-duration:0.3s;}.Span-3{animation-duration:0.35s;}.Span-4{animation-duration:0.4s;}.Span-5{animation-duration:0.45s;}.Span-6{animation-duration:0.5s;}.Span-7{animation-duration:0.55s;}.Span-8{animation-duration:0.6s;}.Span-9{animation-duration:0.65s;}.Span-10{animation-duration:0.7s;}",
          ],
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        et = r.default.div.withConfig({
          displayName: "GlobalComponents__PostersWrapper",
          componentId: "sc-2fgrv0-52",
        })(
          [
            "width:100%;height:100%;display:flex;justify-content:center;align-items:center;gap:20px;position:absolute;overflow:hidden;.col-2,.col-4,.col-6{transform:translateY(112px) translateZ(0);will-change:transform;animation:heroLoadEven 0.5s 4.5s cubic-bezier(0.785,0.135,0.15,0.86) forwards;@keyframes heroLoadEven{to{transform:translateY(16.5px) translateZ(0);}}}.col-1,.col-3,.col-5,.col-7{animation:heroLoadOdd 0.5s 4.5s cubic-bezier(0.785,0.135,0.15,0.86) forwards;@keyframes heroLoadOdd{to{transform:translateY(85px) translateZ(0);}}}@media only ",
            "{.col-1,.col-3,.col-5,.col-7{transform:translateY(95px) translateZ(0);@keyframes heroLoadOdd{to{transform:translateY(190px) translateZ(0);}}}.col-2,.col-4,.col-6{transform:translateY(-10px) translateZ(0);@keyframes heroLoadEven{to{transform:translateY(-105px) translateZ(0);}}}}@media only ",
            "{.col-1,.col-7{display:none;}.col-3,.col-5{transform:translateY(70px) translateZ(0);animation-delay:3.6s;@keyframes heroLoadOdd{to{transform:translateY(162px) translateZ(0);}}}.col-2,.col-4,.col-6{transform:translateY(26px) translateZ(0);animation-delay:3.6s;@keyframes heroLoadEven{to{transform:translateY(-70px) translateZ(0);}}}}@media only ",
            "{.col-3,.col-5{transform:translateY(40px) translateZ(0);animation-delay:3.6s;@keyframes heroLoadOdd{to{transform:translateY(138px) translateZ(0);}}}.col-2,.col-4,.col-6{transform:translateY(56px) translateZ(0);animation-delay:3.6s;@keyframes heroLoadEven{to{transform:translateY(-35px) translateZ(0);}}}}@media only ",
            "{gap:15px;.col-2,.col-4,.col-6{transform:translateY(70px) translateZ(0);animation-delay:3.55s;@keyframes heroLoadEven{to{transform:translateY(-25px) translateZ(0);}}}.col-3,.col-5{animation-delay:3.55s;@keyframes heroLoadOdd{to{transform:translateY(110px) translateZ(0);}}}}@media only ",
            "{gap:10px;.col-2,.col-6{display:none;}.col-4{transform:translateY(62px) translateZ(0);}.col-3,.col-5{transform:translateY(25px) translateZ(0);@keyframes heroLoadOdd{to{transform:translateY(100px) translateZ(0);}}}}",
          ],
          function (t) {
            return t.theme.breakpoints.lgHover;
          },
          function (t) {
            return t.theme.breakpoints.ipHover;
          },
          function (t) {
            return t.theme.breakpoints.mdHover;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        nt = r.default.div.withConfig({
          displayName: "GlobalComponents__PosterColumn",
          componentId: "sc-2fgrv0-53",
        })(
          [
            "width:136px;display:grid;grid-template-columns:1fr;gap:20px 0px;@media only ",
            "{gap:15px;}@media only ",
            "{gap:10px;}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        rt = r.default.div.withConfig({
          displayName: "GlobalComponents__Poster",
          componentId: "sc-2fgrv0-54",
        })(
          [
            "width:100%;height:205px;background:",
            ";opacity:0;&.Sherlock{animation:Sherlock 0.75s 0.325s forwards ease-in-out;@keyframes Sherlock{to{opacity:1;}}}&.Joker,&.Get_Out,&.Breaking_Bad,&.Black_Mirror,&.Inception,&.Blade_Runner{animation:Circle1 0.75s 1.325s ease-in-out forwards;@keyframes Circle1{to{opacity:1;}}}&.R_M,&.Boys,&.Dune,&.Punisher,&.Squid_Game,&.You,&.Hill_House,&.Batman,&.Bojack,&.Nightcrawler{animation:Circle2 0.75s 2.325s ease-in-out forwards;@keyframes Circle2{to{opacity:1;}}}&.Daredevil,&.Arcane,&.Midsommar,&.AHS,&.Light_House,&.Green_Knight,&.Deadpool,&.Robot,&.Knives_Out,&.Ozark,&.Soho{animation:Circle3 0.75s 3.325s ease-in-out forwards;@keyframes Circle3{to{opacity:1;}}}",
          ],
          function (t) {
            var e = t.poster;
            return "Url(".concat(e, ") no-repeat center center /cover");
          }
        ),
        it = r.default.div.withConfig({
          displayName: "GlobalComponents__AnimateOnShow",
          componentId: "sc-2fgrv0-55",
        })([
          "width:100%;height:auto;opacity:0;transform:translateY(50px) translateZ(0);will-change:transform;transition:transform 0.75s ease-in-out,opacity 0.75s ease-in-out;&.is-inview{opacity:1;transform:translateY(0px) translateZ(0);}",
        ]),
        ot = r.default.div.withConfig({
          displayName: "GlobalComponents__Divider",
          componentId: "sc-2fgrv0-56",
        })(["border-bottom:1px solid #ddd;"]),
        at = r.default.div.withConfig({
          displayName: "GlobalComponents__InfoContainer",
          componentId: "sc-2fgrv0-57",
        })(
          [
            "width:100%;padding:0rem 0rem 4rem;margin-top:8rem;@media only ",
            "{margin-top:6rem;}@media only ",
            "{padding:0rem 0rem 3rem;}@media only ",
            "{margin-top:4rem;}&.whitespace{margin-top:6rem;@media only ",
            "{margin-top:4rem;}@media only ",
            "{padding:0rem 0rem 2rem;}@media only ",
            "{margin-top:1.5rem;}}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        st = r.default.p.withConfig({
          displayName: "GlobalComponents__InfoText",
          componentId: "sc-2fgrv0-58",
        })(
          [
            "font-size:2.25rem;font-weight:400;line-height:1.28;@media only ",
            "{font-size:2rem;}@media only ",
            "{font-size:1.75rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        lt = r.default.div.withConfig({
          displayName: "GlobalComponents__ProjectLinkWrapper",
          componentId: "sc-2fgrv0-59",
        })(
          [
            "margin-top:4rem;&.flex{display:flex;align-items:center;gap:5rem;@media only ",
            "{flex-direction:column;gap:2rem;align-items:flex-start;}}a{display:block;max-width:max-content;}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        ct = r.default.p.withConfig({
          displayName: "GlobalComponents__LinkTitle",
          componentId: "sc-2fgrv0-60",
        })([
          "font-size:1.35rem;width:max-content;font-weight:350;margin-bottom:1rem;",
        ]),
        ut = r.default.div.withConfig({
          displayName: "GlobalComponents__LinkWrapper",
          componentId: "sc-2fgrv0-61",
        })([
          "display:flex;justify-content:center;align-items:center;gap:0.75rem;& svg{transition:transform 0.325s ease-in-out;}",
        ]),
        dt = r.default.p.withConfig({
          displayName: "GlobalComponents__LinkUrl",
          componentId: "sc-2fgrv0-62",
        })(
          [
            "font-size:2rem;width:max-content;font-weight:550;position:relative;&.noAfter{&::after{display:none;}}&::after{content:'';position:absolute;width:100%;height:1.5px;background:black;bottom:0;left:0;transform:scaleX(0);transform-origin:100% 50%;transition:transform 0.3s ease-in-out;}@media only ",
            "{&:hover::after{transform:scaleX(1);transform-origin:0% 50%;}&:hover ~ svg{transform:translateX(10px) translateZ(0);}}",
          ],
          function (t) {
            return t.theme.breakpoints.hover;
          }
        ),
        ft = r.default.div.withConfig({
          displayName: "GlobalComponents__ScreenImgContainer",
          componentId: "sc-2fgrv0-63",
        })(
          [
            "width:100%;margin-top:4rem;@media only ",
            "{margin-top:3rem;}@media only ",
            "{margin-top:2rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        pt = r.default.div.withConfig({
          displayName: "GlobalComponents__ScreenImgHeavenlyContainer",
          componentId: "sc-2fgrv0-64",
        })(
          [
            "width:100%;margin-top:4rem;padding:0rem;@media only ",
            "{margin-top:3rem;}@media only ",
            "{margin-top:2rem;}@media only ",
            "{margin-top:1rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.ip;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        ht = r.default.div.withConfig({
          displayName: "GlobalComponents__ScreenImg",
          componentId: "sc-2fgrv0-65",
        })(
          [
            "width:100%;aspect-ratio:",
            ";background:",
            ";clip-path:polygon(0 100%,100% 100%,100% 100%,0% 100%);will-change:clip-path;transition:clip-path 1s cubic-bezier(0.215,0.61,0.355,1);&.bigImg{clip-path:polygon(0 20%,100% 20%,100% 100%,0% 100%);transition:clip-path 1.75s cubic-bezier(0.215,0.61,0.355,1);}&.bigImgX{clip-path:polygon(0 15%,100% 15%,100% 100%,0% 100%);transition:clip-path 1.5s cubic-bezier(0.215,0.61,0.355,1);}&.is-inview{clip-path:polygon(0 100%,100% 100%,100% 0,0 0);}",
          ],
          function (t) {
            return t.aspect;
          },
          function (t) {
            var e = t.screen;
            return "Url(".concat(e, ") no-repeat center center /contain");
          }
        ),
        mt = r.default.div.withConfig({
          displayName: "GlobalComponents__CommonHeroBgContainer",
          componentId: "sc-2fgrv0-66",
        })(
          [
            "width:100%;padding:0rem 4rem;display:flex;justify-content:center;align-items:center;@media only ",
            "{padding:0rem 3rem;}@media only ",
            "{padding:0rem 2rem;}@media only ",
            "{padding:0rem 1rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        vt = r.default.div.withConfig({
          displayName: "GlobalComponents__CommonHeroBgWrapper",
          componentId: "sc-2fgrv0-67",
        })([
          "width:100%;position:relative;display:grid;place-items:center;&.gradient{&::after{content:'';inset:0;height:101%;position:absolute;z-index:4;opacity:1;background:linear-gradient(0deg,#f9f2ed,rgb(255 255 255 / 0));}}",
        ]),
        gt = r.default.div.withConfig({
          displayName: "GlobalComponents__CommonHeroBg",
          componentId: "sc-2fgrv0-68",
        })(
          ["width:100%;aspect-ratio:", ";background:", ";"],
          function (t) {
            return t.aspect;
          },
          function (t) {
            var e = t.bg;
            return "Url(".concat(e, ") no-repeat center center /contain");
          }
        ),
        yt = r.default.div.withConfig({
          displayName: "GlobalComponents__MfourOverflow",
          componentId: "sc-2fgrv0-69",
        })(
          [
            "width:max-content;overflow:hidden;position:absolute;z-index:10;@media only ",
            "{margin-top:4rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.lgHover;
          }
        ),
        bt = r.default.span.withConfig({
          displayName: "GlobalComponents__MfourSpan",
          componentId: "sc-2fgrv0-70",
        })([
          "font-size:clamp(4rem,15vw,10rem);display:inline-block;font-family:'Manrope',sans-serif;animation:spanEnter 1s cubic-bezier(0.77,0,0.175,1) forwards;&.M{transform:translateY(60%) translateZ(0);}&.four{transform:translateY(-60%) translateZ(0);}@keyframes spanEnter{to{transform:translateY(0) translateZ(0);}}",
        ]),
        wt = r.default.div.withConfig({
          displayName: "GlobalComponents__AboutContainer",
          componentId: "sc-2fgrv0-71",
        })(
          [
            "width:100%;padding:0rem 4rem;margin-bottom:6rem;&.techStack{margin:6rem 0rem 8rem 0rem;@media only ",
            "{margin:4rem 0rem 6rem 0rem;}@media only ",
            "{margin:3rem 0rem 5rem 0rem;}}&.heroAbout{margin-bottom:8rem;@media only ",
            "{margin-bottom:6rem;}}@media only ",
            "{padding:0rem 3rem;}@media only ",
            "{padding:0rem 2rem;margin-bottom:4rem;}@media only ",
            "{padding:0rem 1rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.md;
          },
          function (t) {
            return t.theme.breakpoints.md;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.lg;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        xt = r.default.div.withConfig({
          displayName: "GlobalComponents__AboutOverflow",
          componentId: "sc-2fgrv0-72",
        })([
          "width:fit-content;overflow:hidden;line-height:1.28;&.margin{margin-top:clamp(3.5rem,6vw,6rem);margin-bottom:clamp(4rem,6vw,6rem);}",
        ]),
        kt = r.default.h1.withConfig({
          displayName: "GlobalComponents__AboutTitle",
          componentId: "sc-2fgrv0-73",
        })([
          "font-size:clamp(2rem,14vw,9rem);font-weight:450;margin:0;transform:translateY(100%) translateZ(0);animation:nameEnter 1.5s cubic-bezier(0.77,0,0.175,1) forwards;@keyframes nameEnter{to{transform:translateY(0) translateZ(0);}}",
        ]),
        St = r.default.p.withConfig({
          displayName: "GlobalComponents__AboutMe",
          componentId: "sc-2fgrv0-74",
        })([
          "font-size:clamp(1.5rem,6vw,2rem);opacity:0;transform:translateY(50px) translateZ(0);animation:paraEnter 0.55s 1s ease-out forwards;@keyframes paraEnter{to{opacity:1;transform:translateY(0) translateZ(0);}}",
        ]),
        Ct = r.default.p.withConfig({
          displayName: "GlobalComponents__AboutPara",
          componentId: "sc-2fgrv0-75",
        })([
          "margin-top:2.5rem;font-size:20px;opacity:0;transform:translateY(50px) translateZ(0);animation:paraEnter 0.55s 1.25s ease-out forwards;&.experience{line-height:1.6;animation:paraEnter 0.55s 1.5s ease-out forwards;}&.stack{line-height:1.6;animation:paraEnter 0.55s 1.75s ease-out forwards;}&.sPara{.services{line-height:1.6;font-size:20px;margin-top:0.35rem;display:block;}.p{padding-left:1.45rem;position:relative;&::before{content:'';width:8px;height:8px;background:black;position:absolute;border-radius:50%;left:0;top:calc(50% - 4px);}}animation:paraEnter 0.55s 2s ease-out forwards;}.jamstack{text-decoration:underline;}",
        ]),
        Et = r.default.div.withConfig({
          displayName: "GlobalComponents__TechStack",
          componentId: "sc-2fgrv0-76",
        })(
          [
            "width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,max-content));gap:3rem 6rem;p{font-size:20px;opacity:0.75;font-weight:450;line-height:1.4;}@media only ",
            "{gap:2rem 5rem;}@media only ",
            "{gap:2rem 4.5rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          }
        ),
        _t =
          (r.default.p.withConfig({
            displayName: "GlobalComponents__Paragraph",
            componentId: "sc-2fgrv0-77",
          })([
            "font-size:20px;line-height:1.6;margin-bottom:clamp(3rem,7.25vw,4rem);.video{text-decoration:underline;}",
          ]),
          r.default.div.withConfig({
            displayName: "GlobalComponents__HeroesGrid",
            componentId: "sc-2fgrv0-78",
          })(
            [
              "width:100%;display:grid;grid-template-columns:1fr 1fr;gap:4rem 5rem;margin-bottom:8rem;@media only ",
              "{grid-template-columns:1fr;gap:4rem;}",
            ],
            function (t) {
              return t.theme.breakpoints.ip;
            }
          )),
        Tt = r.default.div.withConfig({
          displayName: "GlobalComponents__InterestsWrapper",
          componentId: "sc-2fgrv0-79",
        })(
          [
            "width:100%;display:flex;align-items:flex-start;gap:55px;margin-bottom:5rem;& .interestsTitle{min-width:350px;width:350px;}&.marginTop{padding-top:1rem;}@media only ",
            "{& .interestsTitle{min-width:255px;width:255px;}}@media only ",
            "{gap:8.7vw;& .interestsTitle{min-width:200px;width:200px;}}@media only ",
            "{flex-direction:column;gap:2rem;& .interestsTitle{min-width:200px;width:200px;}}",
          ],
          function (t) {
            return t.theme.breakpoints.md;
          },
          function (t) {
            return t.theme.breakpoints.sm;
          },
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        At = r.default.span.withConfig({
          displayName: "GlobalComponents__InterestsTitle",
          componentId: "sc-2fgrv0-80",
        })(
          [
            "font-size:20px;opacity:0.75;font-weight:450;@media only ",
            "{padding-left:1.25rem;}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          }
        ),
        Pt = r.default.div.withConfig({
          displayName: "GlobalComponents__Interests",
          componentId: "sc-2fgrv0-81",
        })(
          [
            "width:fit-content;& div p{font-size:20px;font-weight:450;@media only ",
            "{padding-left:1.25rem;&::before{content:'';width:6px;height:6px;background:black;position:absolute;border-radius:50%;left:0;top:calc(50% - 3px);}}}& div:not(:last-child){margin-bottom:1.5rem;}& .under{text-decoration:underline;}",
          ],
          function (t) {
            return t.theme.breakpoints.xs;
          }
        );
    },
    3454: function (t, e, n) {
      "use strict";
      var r, i;
      t.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" === typeof (null == (i = n.g.process) ? void 0 : i.env)
          ? n.g.process
          : n(7663);
    },
    1118: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(2623);
        },
      ]);
    },
    7663: function (t) {
      !(function () {
        var e = {
            308: function (t) {
              var e,
                n,
                r = (t.exports = {});
              function i() {
                throw new Error("setTimeout has not been defined");
              }
              function o() {
                throw new Error("clearTimeout has not been defined");
              }
              function a(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === i || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(t, 0);
                try {
                  return e(t, 0);
                } catch (r) {
                  try {
                    return e.call(null, t, 0);
                  } catch (r) {
                    return e.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  e = "function" === typeof setTimeout ? setTimeout : i;
                } catch (t) {
                  e = i;
                }
                try {
                  n = "function" === typeof clearTimeout ? clearTimeout : o;
                } catch (t) {
                  n = o;
                }
              })();
              var s,
                l = [],
                c = !1,
                u = -1;
              function d() {
                c &&
                  s &&
                  ((c = !1),
                  s.length ? (l = s.concat(l)) : (u = -1),
                  l.length && f());
              }
              function f() {
                if (!c) {
                  var t = a(d);
                  c = !0;
                  for (var e = l.length; e; ) {
                    for (s = l, l = []; ++u < e; ) s && s[u].run();
                    (u = -1), (e = l.length);
                  }
                  (s = null),
                    (c = !1),
                    (function (t) {
                      if (n === clearTimeout) return clearTimeout(t);
                      if ((n === o || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(t);
                      try {
                        n(t);
                      } catch (e) {
                        try {
                          return n.call(null, t);
                        } catch (e) {
                          return n.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function p(t, e) {
                (this.fun = t), (this.array = e);
              }
              function h() {}
              (r.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                l.push(new p(t, e)), 1 !== l.length || c || a(f);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = h),
                (r.addListener = h),
                (r.once = h),
                (r.off = h),
                (r.removeListener = h),
                (r.removeAllListeners = h),
                (r.emit = h),
                (r.prependListener = h),
                (r.prependOnceListener = h),
                (r.listeners = function (t) {
                  return [];
                }),
                (r.binding = function (t) {
                  throw new Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (t) {
                  throw new Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(t) {
          var i = n[t];
          if (void 0 !== i) return i.exports;
          var o = (n[t] = { exports: {} }),
            a = !0;
          try {
            e[t](o, o.exports, r), (a = !1);
          } finally {
            a && delete n[t];
          }
          return o.exports;
        }
        r.ab = "//";
        var i = r(308);
        t.exports = i;
      })();
    },
    9008: function (t, e, n) {
      t.exports = n(2717);
    },
    1664: function (t, e, n) {
      t.exports = n(7942);
    },
    1163: function (t, e, n) {
      t.exports = n(9898);
    },
    3750: function (t, e, n) {
      "use strict";
      n.d(e, {
        lzl: function () {
          return i;
        },
        rFR: function () {
          return o;
        },
      });
      var r = n(8357);
      function i(t) {
        return (0, r.w_)({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z",
              },
            },
          ],
        })(t);
      }
      function o(t) {
        return (0, r.w_)({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
              },
            },
          ],
        })(t);
      }
    },
    8357: function (t, e, n) {
      "use strict";
      n.d(e, {
        w_: function () {
          return c;
        },
      });
      var r = n(7294),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = r.createContext && r.createContext(i),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }),
            a.apply(this, arguments)
          );
        },
        s = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          }
          return n;
        };
      function l(t) {
        return (
          t &&
          t.map(function (t, e) {
            return r.createElement(t.tag, a({ key: e }, t.attr), l(t.child));
          })
        );
      }
      function c(t) {
        return function (e) {
          return r.createElement(u, a({ attr: a({}, t.attr) }, e), l(t.child));
        };
      }
      function u(t) {
        var e = function (e) {
          var n,
            i = t.attr,
            o = t.size,
            l = t.title,
            c = s(t, ["attr", "size", "title"]),
            u = o || e.size || "1em";
          return (
            e.className && (n = e.className),
            t.className && (n = (n ? n + " " : "") + t.className),
            r.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                i,
                c,
                {
                  className: n,
                  style: a(a({ color: t.color || e.color }, e.style), t.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && r.createElement("title", null, l),
              t.children
            )
          );
        };
        return void 0 !== o
          ? r.createElement(o.Consumer, null, function (t) {
              return e(t);
            })
          : e(i);
      }
    },
    9921: function (t, e) {
      "use strict";
      var n = 60103,
        r = 60106,
        i = 60107,
        o = 60108,
        a = 60114,
        s = 60109,
        l = 60110,
        c = 60112,
        u = 60113,
        d = 60120,
        f = 60115,
        p = 60116,
        h = 60121,
        m = 60122,
        v = 60117,
        g = 60129,
        y = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var b = Symbol.for;
        (n = b("react.element")),
          (r = b("react.portal")),
          (i = b("react.fragment")),
          (o = b("react.strict_mode")),
          (a = b("react.profiler")),
          (s = b("react.provider")),
          (l = b("react.context")),
          (c = b("react.forward_ref")),
          (u = b("react.suspense")),
          (d = b("react.suspense_list")),
          (f = b("react.memo")),
          (p = b("react.lazy")),
          (h = b("react.block")),
          (m = b("react.server.block")),
          (v = b("react.fundamental")),
          (g = b("react.debug_trace_mode")),
          (y = b("react.legacy_hidden"));
      }
      function w(t) {
        if ("object" === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch ((t = t.type)) {
                case i:
                case a:
                case o:
                case u:
                case d:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case c:
                    case p:
                    case f:
                    case s:
                      return t;
                    default:
                      return e;
                  }
              }
            case r:
              return e;
          }
        }
      }
      (e.isValidElementType = function (t) {
        return (
          "string" === typeof t ||
          "function" === typeof t ||
          t === i ||
          t === a ||
          t === g ||
          t === o ||
          t === u ||
          t === d ||
          t === y ||
          ("object" === typeof t &&
            null !== t &&
            (t.$$typeof === p ||
              t.$$typeof === f ||
              t.$$typeof === s ||
              t.$$typeof === l ||
              t.$$typeof === c ||
              t.$$typeof === v ||
              t.$$typeof === h ||
              t[0] === m))
        );
      }),
        (e.typeOf = w);
    },
    9864: function (t, e, n) {
      "use strict";
      t.exports = n(9921);
    },
    8992: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LocomotiveScrollProvider = e.LocomotiveScrollContext = void 0);
      const r = n(655),
        i = n(5893),
        o = n(7294),
        a = n(9428),
        s = r.__importDefault(n(6388));
      function l({
        children: t,
        options: l,
        containerRef: c,
        watch: u,
        onUpdate: d,
        location: f,
        onLocationChange: p,
      }) {
        const { height: h } = s.default({ ref: c }),
          [m, v] = o.useState(!1),
          g = o.useRef(null),
          [y] = a.useDebounce(h, 100);
        return (
          u ||
            console.warn(
              "react-locomotive-scroll: you did not add any props to watch. Scroll may have weird behaviours if the instance is not updated when the route changes"
            ),
          o.useEffect(
            () => (
              (() => {
                r.__awaiter(this, void 0, void 0, function* () {
                  try {
                    const t = (yield Promise.resolve().then(() =>
                        r.__importStar(n(6267))
                      )).default,
                      e = document.querySelector("[data-scroll-container]");
                    e ||
                      console.warn(
                        "react-locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work."
                      ),
                      (g.current = new t(
                        Object.assign(
                          { el: null !== e && void 0 !== e ? e : void 0 },
                          l
                        )
                      )),
                      v(!0);
                  } catch (t) {
                    throw Error(`react-locomotive-scroll: ${t}`);
                  }
                });
              })(),
              () => {
                var t;
                null === (t = g.current) || void 0 === t || t.destroy(), v(!1);
              }
            ),
            []
          ),
          o.useEffect(
            () => {
              g.current && (g.current.update(), d && d(g.current));
            },
            u ? [...u, y] : [y]
          ),
          o.useEffect(() => {
            g.current && f && (g.current.update(), p && p(g.current));
          }, [f]),
          i.jsx(
            e.LocomotiveScrollContext.Provider,
            Object.assign(
              { value: { scroll: g.current, isReady: m } },
              { children: t }
            ),
            void 0
          )
        );
      }
      (e.LocomotiveScrollContext = o.createContext({
        scroll: null,
        isReady: !1,
      })),
        (e.LocomotiveScrollProvider = l),
        (e.LocomotiveScrollContext.displayName = "LocomotiveScrollContext"),
        (l.displayName = "LocomotiveScrollProvider");
    },
    8075: function (t, e, n) {
      "use strict";
      e.lh = e.a5 = void 0;
      var r = n(8992);
      Object.defineProperty(e, "a5", {
        enumerable: !0,
        get: function () {
          return r.LocomotiveScrollProvider;
        },
      });
      var i = n(6781);
      Object.defineProperty(e, "lh", {
        enumerable: !0,
        get: function () {
          return i.useLocomotiveScroll;
        },
      });
    },
    6781: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useLocomotiveScroll = void 0);
      const r = n(7294),
        i = n(8992);
      function o() {
        const t = r.useContext(i.LocomotiveScrollContext);
        return (
          r.useEffect(() => {
            t.scroll ||
              console.warn(
                "react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider."
              );
          }, [t.scroll]),
          t
        );
      }
      (e.useLocomotiveScroll = o), (o.displayName = "useLocomotiveScroll");
    },
    6774: function (t) {
      t.exports = function (t, e, n, r) {
        var i = n ? n.call(r, t, e) : void 0;
        if (void 0 !== i) return !!i;
        if (t === e) return !0;
        if ("object" !== typeof t || !t || "object" !== typeof e || !e)
          return !1;
        var o = Object.keys(t),
          a = Object.keys(e);
        if (o.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(e), l = 0;
          l < o.length;
          l++
        ) {
          var c = o[l];
          if (!s(c)) return !1;
          var u = t[c],
            d = e[c];
          if (
            !1 === (i = n ? n.call(r, u, d, c) : void 0) ||
            (void 0 === i && u !== d)
          )
            return !1;
        }
        return !0;
      };
    },
    7379: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          ServerStyleSheet: function () {
            return Yt;
          },
          StyleSheetConsumer: function () {
            return ot;
          },
          StyleSheetContext: function () {
            return it;
          },
          StyleSheetManager: function () {
            return dt;
          },
          ThemeConsumer: function () {
            return Mt;
          },
          ThemeContext: function () {
            return It;
          },
          ThemeProvider: function () {
            return Rt;
          },
          __PRIVATE__: function () {
            return Zt;
          },
          createGlobalStyle: function () {
            return Nt;
          },
          css: function () {
            return xt;
          },
          default: function () {
            return Gt;
          },
          isStyledComponent: function () {
            return x;
          },
          keyframes: function () {
            return Vt;
          },
          useTheme: function () {
            return Ht;
          },
          version: function () {
            return S;
          },
          withTheme: function () {
            return Ft;
          },
        });
      var r = n(9864),
        i = n(7294),
        o = n(6774),
        a = n.n(o);
      var s = function (t) {
          function e(t, r, l, c, f) {
            for (
              var p,
                h,
                m,
                v,
                w,
                k = 0,
                S = 0,
                C = 0,
                E = 0,
                _ = 0,
                I = 0,
                R = (m = p = 0),
                z = 0,
                D = 0,
                B = 0,
                N = 0,
                V = l.length,
                Y = V - 1,
                F = "",
                H = "",
                Z = "",
                G = "";
              z < V;

            ) {
              if (
                ((h = l.charCodeAt(z)),
                z === Y &&
                  0 !== S + E + C + k &&
                  (0 !== S && (h = 47 === S ? 10 : 47),
                  (E = C = k = 0),
                  V++,
                  Y++),
                0 === S + E + C + k)
              ) {
                if (
                  z === Y &&
                  (0 < D && (F = F.replace(d, "")), 0 < F.trim().length)
                ) {
                  switch (h) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      F += l.charAt(z);
                  }
                  h = 59;
                }
                switch (h) {
                  case 123:
                    for (
                      p = (F = F.trim()).charCodeAt(0), m = 1, N = ++z;
                      z < V;

                    ) {
                      switch ((h = l.charCodeAt(z))) {
                        case 123:
                          m++;
                          break;
                        case 125:
                          m--;
                          break;
                        case 47:
                          switch ((h = l.charCodeAt(z + 1))) {
                            case 42:
                            case 47:
                              t: {
                                for (R = z + 1; R < Y; ++R)
                                  switch (l.charCodeAt(R)) {
                                    case 47:
                                      if (
                                        42 === h &&
                                        42 === l.charCodeAt(R - 1) &&
                                        z + 2 !== R
                                      ) {
                                        z = R + 1;
                                        break t;
                                      }
                                      break;
                                    case 10:
                                      if (47 === h) {
                                        z = R + 1;
                                        break t;
                                      }
                                  }
                                z = R;
                              }
                          }
                          break;
                        case 91:
                          h++;
                        case 40:
                          h++;
                        case 34:
                        case 39:
                          for (; z++ < Y && l.charCodeAt(z) !== h; );
                      }
                      if (0 === m) break;
                      z++;
                    }
                    if (
                      ((m = l.substring(N, z)),
                      0 === p &&
                        (p = (F = F.replace(u, "").trim()).charCodeAt(0)),
                      64 === p)
                    ) {
                      switch (
                        (0 < D && (F = F.replace(d, "")), (h = F.charCodeAt(1)))
                      ) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          D = r;
                          break;
                        default:
                          D = O;
                      }
                      if (
                        ((N = (m = e(r, D, m, h, f + 1)).length),
                        0 < M &&
                          ((w = s(3, m, (D = n(O, F, B)), r, A, T, N, h, f, c)),
                          (F = D.join("")),
                          void 0 !== w &&
                            0 === (N = (m = w.trim()).length) &&
                            ((h = 0), (m = ""))),
                        0 < N)
                      )
                        switch (h) {
                          case 115:
                            F = F.replace(x, a);
                          case 100:
                          case 109:
                          case 45:
                            m = F + "{" + m + "}";
                            break;
                          case 107:
                            (m = (F = F.replace(g, "$1 $2")) + "{" + m + "}"),
                              (m =
                                1 === j || (2 === j && o("@" + m, 3))
                                  ? "@-webkit-" + m + "@" + m
                                  : "@" + m);
                            break;
                          default:
                            (m = F + m), 112 === c && ((H += m), (m = ""));
                        }
                      else m = "";
                    } else m = e(r, n(r, F, B), m, c, f + 1);
                    (Z += m),
                      (m = B = D = R = p = 0),
                      (F = ""),
                      (h = l.charCodeAt(++z));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (N = (F = (0 < D ? F.replace(d, "") : F).trim()).length)
                    )
                      switch (
                        (0 === R &&
                          ((p = F.charCodeAt(0)),
                          45 === p || (96 < p && 123 > p)) &&
                          (N = (F = F.replace(" ", ":")).length),
                        0 < M &&
                          void 0 !==
                            (w = s(1, F, r, t, A, T, H.length, c, f, c)) &&
                          0 === (N = (F = w.trim()).length) &&
                          (F = "\0\0"),
                        (p = F.charCodeAt(0)),
                        (h = F.charCodeAt(1)),
                        p)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === h || 99 === h) {
                            G += F + l.charAt(z);
                            break;
                          }
                        default:
                          58 !== F.charCodeAt(N - 1) &&
                            (H += i(F, p, h, F.charCodeAt(2)));
                      }
                    (B = D = R = p = 0), (F = ""), (h = l.charCodeAt(++z));
                }
              }
              switch (h) {
                case 13:
                case 10:
                  47 === S
                    ? (S = 0)
                    : 0 === 1 + p &&
                      107 !== c &&
                      0 < F.length &&
                      ((D = 1), (F += "\0")),
                    0 < M * L && s(0, F, r, t, A, T, H.length, c, f, c),
                    (T = 1),
                    A++;
                  break;
                case 59:
                case 125:
                  if (0 === S + E + C + k) {
                    T++;
                    break;
                  }
                default:
                  switch ((T++, (v = l.charAt(z)), h)) {
                    case 9:
                    case 32:
                      if (0 === E + k + S)
                        switch (_) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            v = "";
                            break;
                          default:
                            32 !== h && (v = " ");
                        }
                      break;
                    case 0:
                      v = "\\0";
                      break;
                    case 12:
                      v = "\\f";
                      break;
                    case 11:
                      v = "\\v";
                      break;
                    case 38:
                      0 === E + S + k && ((D = B = 1), (v = "\f" + v));
                      break;
                    case 108:
                      if (0 === E + S + k + P && 0 < R)
                        switch (z - R) {
                          case 2:
                            112 === _ && 58 === l.charCodeAt(z - 3) && (P = _);
                          case 8:
                            111 === I && (P = I);
                        }
                      break;
                    case 58:
                      0 === E + S + k && (R = z);
                      break;
                    case 44:
                      0 === S + C + E + k && ((D = 1), (v += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === S && (E = E === h ? 0 : 0 === E ? h : E);
                      break;
                    case 91:
                      0 === E + S + C && k++;
                      break;
                    case 93:
                      0 === E + S + C && k--;
                      break;
                    case 41:
                      0 === E + S + k && C--;
                      break;
                    case 40:
                      if (0 === E + S + k) {
                        if (0 === p)
                          if (2 * _ + 3 * I === 533);
                          else p = 1;
                        C++;
                      }
                      break;
                    case 64:
                      0 === S + C + E + k + R + m && (m = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < E + k + C))
                        switch (S) {
                          case 0:
                            switch (2 * h + 3 * l.charCodeAt(z + 1)) {
                              case 235:
                                S = 47;
                                break;
                              case 220:
                                (N = z), (S = 42);
                            }
                            break;
                          case 42:
                            47 === h &&
                              42 === _ &&
                              N + 2 !== z &&
                              (33 === l.charCodeAt(N + 2) &&
                                (H += l.substring(N, z + 1)),
                              (v = ""),
                              (S = 0));
                        }
                  }
                  0 === S && (F += v);
              }
              (I = _), (_ = h), z++;
            }
            if (0 < (N = H.length)) {
              if (
                ((D = r),
                0 < M &&
                  void 0 !== (w = s(2, H, D, t, A, T, N, c, f, c)) &&
                  0 === (H = w).length)
              )
                return G + H + Z;
              if (((H = D.join(",") + "{" + H + "}"), 0 !== j * P)) {
                switch ((2 !== j || o(H, 2) || (P = 0), P)) {
                  case 111:
                    H = H.replace(b, ":-moz-$1") + H;
                    break;
                  case 112:
                    H =
                      H.replace(y, "::-webkit-input-$1") +
                      H.replace(y, "::-moz-$1") +
                      H.replace(y, ":-ms-input-$1") +
                      H;
                }
                P = 0;
              }
            }
            return G + H + Z;
          }
          function n(t, e, n) {
            var i = e.trim().split(m);
            e = i;
            var o = i.length,
              a = t.length;
            switch (a) {
              case 0:
              case 1:
                var s = 0;
                for (t = 0 === a ? "" : t[0] + " "; s < o; ++s)
                  e[s] = r(t, e[s], n).trim();
                break;
              default:
                var l = (s = 0);
                for (e = []; s < o; ++s)
                  for (var c = 0; c < a; ++c)
                    e[l++] = r(t[c] + " ", i[s], n).trim();
            }
            return e;
          }
          function r(t, e, n) {
            var r = e.charCodeAt(0);
            switch ((33 > r && (r = (e = e.trim()).charCodeAt(0)), r)) {
              case 38:
                return e.replace(v, "$1" + t.trim());
              case 58:
                return t.trim() + e.replace(v, "$1" + t.trim());
              default:
                if (0 < 1 * n && 0 < e.indexOf("\f"))
                  return e.replace(
                    v,
                    (58 === t.charCodeAt(0) ? "" : "$1") + t.trim()
                  );
            }
            return t + e;
          }
          function i(t, e, n, r) {
            var a = t + ";",
              s = 2 * e + 3 * n + 4 * r;
            if (944 === s) {
              t = a.indexOf(":", 9) + 1;
              var l = a.substring(t, a.length - 1).trim();
              return (
                (l = a.substring(0, t).trim() + l + ";"),
                1 === j || (2 === j && o(l, 1)) ? "-webkit-" + l + l : l
              );
            }
            if (0 === j || (2 === j && !o(a, 1))) return a;
            switch (s) {
              case 1015:
                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
              case 951:
                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
              case 963:
                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
              case 1009:
                if (100 !== a.charCodeAt(4)) break;
              case 969:
              case 942:
                return "-webkit-" + a + a;
              case 978:
                return "-webkit-" + a + "-moz-" + a + a;
              case 1019:
              case 983:
                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
              case 883:
                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                if (0 < a.indexOf("image-set(", 11))
                  return a.replace(_, "$1-webkit-$2") + a;
                break;
              case 932:
                if (45 === a.charCodeAt(4))
                  switch (a.charCodeAt(5)) {
                    case 103:
                      return (
                        "-webkit-box-" +
                        a.replace("-grow", "") +
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("grow", "positive") +
                        a
                      );
                    case 115:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("shrink", "negative") +
                        a
                      );
                    case 98:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("basis", "preferred-size") +
                        a
                      );
                  }
                return "-webkit-" + a + "-ms-" + a + a;
              case 964:
                return "-webkit-" + a + "-ms-flex-" + a + a;
              case 1023:
                if (99 !== a.charCodeAt(8)) break;
                return (
                  "-webkit-box-pack" +
                  (l = a
                    .substring(a.indexOf(":", 15))
                    .replace("flex-", "")
                    .replace("space-between", "justify")) +
                  "-webkit-" +
                  a +
                  "-ms-flex-pack" +
                  l +
                  a
                );
              case 1005:
                return p.test(a)
                  ? a.replace(f, ":-webkit-") + a.replace(f, ":-moz-") + a
                  : a;
              case 1e3:
                switch (
                  ((e = (l = a.substring(13).trim()).indexOf("-") + 1),
                  l.charCodeAt(0) + l.charCodeAt(e))
                ) {
                  case 226:
                    l = a.replace(w, "tb");
                    break;
                  case 232:
                    l = a.replace(w, "tb-rl");
                    break;
                  case 220:
                    l = a.replace(w, "lr");
                    break;
                  default:
                    return a;
                }
                return "-webkit-" + a + "-ms-" + l + a;
              case 1017:
                if (-1 === a.indexOf("sticky", 9)) break;
              case 975:
                switch (
                  ((e = (a = t).length - 10),
                  (s =
                    (l = (33 === a.charCodeAt(e) ? a.substring(0, e) : a)
                      .substring(t.indexOf(":", 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | l.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > l.charCodeAt(8)) break;
                  case 115:
                    a = a.replace(l, "-webkit-" + l) + ";" + a;
                    break;
                  case 207:
                  case 102:
                    a =
                      a.replace(
                        l,
                        "-webkit-" + (102 < s ? "inline-" : "") + "box"
                      ) +
                      ";" +
                      a.replace(l, "-webkit-" + l) +
                      ";" +
                      a.replace(l, "-ms-" + l + "box") +
                      ";" +
                      a;
                }
                return a + ";";
              case 938:
                if (45 === a.charCodeAt(5))
                  switch (a.charCodeAt(6)) {
                    case 105:
                      return (
                        (l = a.replace("-items", "")),
                        "-webkit-" +
                          a +
                          "-webkit-box-" +
                          l +
                          "-ms-flex-" +
                          l +
                          a
                      );
                    case 115:
                      return (
                        "-webkit-" + a + "-ms-flex-item-" + a.replace(S, "") + a
                      );
                    default:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-flex-line-pack" +
                        a.replace("align-content", "").replace(S, "") +
                        a
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === E.test(t))
                  return 115 ===
                    (l = t.substring(t.indexOf(":") + 1)).charCodeAt(0)
                    ? i(
                        t.replace("stretch", "fill-available"),
                        e,
                        n,
                        r
                      ).replace(":fill-available", ":stretch")
                    : a.replace(l, "-webkit-" + l) +
                        a.replace(l, "-moz-" + l.replace("fill-", "")) +
                        a;
                break;
              case 962:
                if (
                  ((a =
                    "-webkit-" +
                    a +
                    (102 === a.charCodeAt(5) ? "-ms-" + a : "") +
                    a),
                  211 === n + r &&
                    105 === a.charCodeAt(13) &&
                    0 < a.indexOf("transform", 10))
                )
                  return (
                    a
                      .substring(0, a.indexOf(";", 27) + 1)
                      .replace(h, "$1-webkit-$2") + a
                  );
            }
            return a;
          }
          function o(t, e) {
            var n = t.indexOf(1 === e ? ":" : "{"),
              r = t.substring(0, 3 !== e ? n : 10);
            return (
              (n = t.substring(n + 1, t.length - 1)),
              R(2 !== e ? r : r.replace(C, "$1"), n, e)
            );
          }
          function a(t, e) {
            var n = i(e, e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2));
            return n !== e + ";"
              ? n.replace(k, " or ($1)").substring(4)
              : "(" + e + ")";
          }
          function s(t, e, n, r, i, o, a, s, l, u) {
            for (var d, f = 0, p = e; f < M; ++f)
              switch ((d = I[f].call(c, t, p, n, r, i, o, a, s, l, u))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  p = d;
              }
            if (p !== e) return p;
          }
          function l(t) {
            return (
              void 0 !== (t = t.prefix) &&
                ((R = null),
                t
                  ? "function" !== typeof t
                    ? (j = 1)
                    : ((j = 2), (R = t))
                  : (j = 0)),
              l
            );
          }
          function c(t, n) {
            var r = t;
            if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < M)) {
              var i = s(-1, n, r, r, A, T, 0, 0, 0, 0);
              void 0 !== i && "string" === typeof i && (n = i);
            }
            var o = e(O, r, n, 0, 0);
            return (
              0 < M &&
                void 0 !== (i = s(-2, o, r, r, A, T, o.length, 0, 0, 0)) &&
                (o = i),
              "",
              (P = 0),
              (T = A = 1),
              o
            );
          }
          var u = /^\0+/g,
            d = /[\0\r\f]/g,
            f = /: */g,
            p = /zoo|gra/,
            h = /([,: ])(transform)/g,
            m = /,\r+?/g,
            v = /([\t\r\n ])*\f?&/g,
            g = /@(k\w+)\s*(\S*)\s*/,
            y = /::(place)/g,
            b = /:(read-only)/g,
            w = /[svh]\w+-[tblr]{2}/,
            x = /\(\s*(.*)\s*\)/g,
            k = /([\s\S]*?);/g,
            S = /-self|flex-/g,
            C = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            E = /stretch|:\s*\w+\-(?:conte|avail)/,
            _ = /([^-])(image-set\()/,
            T = 1,
            A = 1,
            P = 0,
            j = 1,
            O = [],
            I = [],
            M = 0,
            R = null,
            L = 0;
          return (
            (c.use = function t(e) {
              switch (e) {
                case void 0:
                case null:
                  M = I.length = 0;
                  break;
                default:
                  if ("function" === typeof e) I[M++] = e;
                  else if ("object" === typeof e)
                    for (var n = 0, r = e.length; n < r; ++n) t(e[n]);
                  else L = 0 | !!e;
              }
              return t;
            }),
            (c.set = l),
            void 0 !== t && l(t),
            c
          );
        },
        l = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      var c =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        u = (function (t) {
          var e = {};
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n];
          };
        })(function (t) {
          return (
            c.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          );
        }),
        d = n(8679),
        f = n.n(d),
        p = n(3454);
      function h() {
        return (h =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var m = function (t, e) {
          for (var n = [t[0]], r = 0, i = e.length; r < i; r += 1)
            n.push(e[r], t[r + 1]);
          return n;
        },
        v = function (t) {
          return (
            null !== t &&
            "object" == typeof t &&
            "[object Object]" ===
              (t.toString ? t.toString() : Object.prototype.toString.call(t)) &&
            !(0, r.typeOf)(t)
          );
        },
        g = Object.freeze([]),
        y = Object.freeze({});
      function b(t) {
        return "function" == typeof t;
      }
      function w(t) {
        return t.displayName || t.name || "Component";
      }
      function x(t) {
        return t && "string" == typeof t.styledComponentId;
      }
      var k =
          ("undefined" != typeof p &&
            (p.env.REACT_APP_SC_ATTR || p.env.SC_ATTR)) ||
          "data-styled",
        S = "5.3.3",
        C = "undefined" != typeof window && "HTMLElement" in window,
        E = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof p &&
              void 0 !== p.env.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !== p.env.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !== p.env.REACT_APP_SC_DISABLE_SPEEDY &&
              p.env.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof p &&
              void 0 !== p.env.SC_DISABLE_SPEEDY &&
              "" !== p.env.SC_DISABLE_SPEEDY &&
              "false" !== p.env.SC_DISABLE_SPEEDY &&
              p.env.SC_DISABLE_SPEEDY
        ),
        _ = {};
      function T(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        throw new Error(
          "An error occurred. See https://git.io/JUIaE#" +
            t +
            " for more information." +
            (n.length > 0 ? " Args: " + n.join(", ") : "")
        );
      }
      var A = (function () {
          function t(t) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = t);
          }
          var e = t.prototype;
          return (
            (e.indexOfGroup = function (t) {
              for (var e = 0, n = 0; n < t; n++) e += this.groupSizes[n];
              return e;
            }),
            (e.insertRules = function (t, e) {
              if (t >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, i = r; t >= i; )
                  (i <<= 1) < 0 && T(16, "" + t);
                (this.groupSizes = new Uint32Array(i)),
                  this.groupSizes.set(n),
                  (this.length = i);
                for (var o = r; o < i; o++) this.groupSizes[o] = 0;
              }
              for (
                var a = this.indexOfGroup(t + 1), s = 0, l = e.length;
                s < l;
                s++
              )
                this.tag.insertRule(a, e[s]) && (this.groupSizes[t]++, a++);
            }),
            (e.clearGroup = function (t) {
              if (t < this.length) {
                var e = this.groupSizes[t],
                  n = this.indexOfGroup(t),
                  r = n + e;
                this.groupSizes[t] = 0;
                for (var i = n; i < r; i++) this.tag.deleteRule(n);
              }
            }),
            (e.getGroup = function (t) {
              var e = "";
              if (t >= this.length || 0 === this.groupSizes[t]) return e;
              for (
                var n = this.groupSizes[t],
                  r = this.indexOfGroup(t),
                  i = r + n,
                  o = r;
                o < i;
                o++
              )
                e += this.tag.getRule(o) + "/*!sc*/\n";
              return e;
            }),
            t
          );
        })(),
        P = new Map(),
        j = new Map(),
        O = 1,
        I = function (t) {
          if (P.has(t)) return P.get(t);
          for (; j.has(O); ) O++;
          var e = O++;
          return P.set(t, e), j.set(e, t), e;
        },
        M = function (t) {
          return j.get(t);
        },
        R = function (t, e) {
          e >= O && (O = e + 1), P.set(t, e), j.set(e, t);
        },
        L = "style[" + k + '][data-styled-version="5.3.3"]',
        z = new RegExp(
          "^" + k + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
        ),
        D = function (t, e, n) {
          for (var r, i = n.split(","), o = 0, a = i.length; o < a; o++)
            (r = i[o]) && t.registerName(e, r);
        },
        B = function (t, e) {
          for (
            var n = (e.textContent || "").split("/*!sc*/\n"),
              r = [],
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var a = n[i].trim();
            if (a) {
              var s = a.match(z);
              if (s) {
                var l = 0 | parseInt(s[1], 10),
                  c = s[2];
                0 !== l &&
                  (R(c, l), D(t, c, s[3]), t.getTag().insertRules(l, r)),
                  (r.length = 0);
              } else r.push(a);
            }
          }
        },
        N = function () {
          return "undefined" != typeof window &&
            void 0 !== window.__webpack_nonce__
            ? window.__webpack_nonce__
            : null;
        },
        V = function (t) {
          var e = document.head,
            n = t || e,
            r = document.createElement("style"),
            i = (function (t) {
              for (var e = t.childNodes, n = e.length; n >= 0; n--) {
                var r = e[n];
                if (r && 1 === r.nodeType && r.hasAttribute(k)) return r;
              }
            })(n),
            o = void 0 !== i ? i.nextSibling : null;
          r.setAttribute(k, "active"),
            r.setAttribute("data-styled-version", "5.3.3");
          var a = N();
          return a && r.setAttribute("nonce", a), n.insertBefore(r, o), r;
        },
        Y = (function () {
          function t(t) {
            var e = (this.element = V(t));
            e.appendChild(document.createTextNode("")),
              (this.sheet = (function (t) {
                if (t.sheet) return t.sheet;
                for (
                  var e = document.styleSheets, n = 0, r = e.length;
                  n < r;
                  n++
                ) {
                  var i = e[n];
                  if (i.ownerNode === t) return i;
                }
                T(17);
              })(e)),
              (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              try {
                return this.sheet.insertRule(e, t), this.length++, !0;
              } catch (t) {
                return !1;
              }
            }),
            (e.deleteRule = function (t) {
              this.sheet.deleteRule(t), this.length--;
            }),
            (e.getRule = function (t) {
              var e = this.sheet.cssRules[t];
              return void 0 !== e && "string" == typeof e.cssText
                ? e.cssText
                : "";
            }),
            t
          );
        })(),
        F = (function () {
          function t(t) {
            var e = (this.element = V(t));
            (this.nodes = e.childNodes), (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              if (t <= this.length && t >= 0) {
                var n = document.createTextNode(e),
                  r = this.nodes[t];
                return (
                  this.element.insertBefore(n, r || null), this.length++, !0
                );
              }
              return !1;
            }),
            (e.deleteRule = function (t) {
              this.element.removeChild(this.nodes[t]), this.length--;
            }),
            (e.getRule = function (t) {
              return t < this.length ? this.nodes[t].textContent : "";
            }),
            t
          );
        })(),
        H = (function () {
          function t(t) {
            (this.rules = []), (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              return (
                t <= this.length &&
                (this.rules.splice(t, 0, e), this.length++, !0)
              );
            }),
            (e.deleteRule = function (t) {
              this.rules.splice(t, 1), this.length--;
            }),
            (e.getRule = function (t) {
              return t < this.length ? this.rules[t] : "";
            }),
            t
          );
        })(),
        Z = C,
        G = { isServer: !C, useCSSOMInjection: !E },
        W = (function () {
          function t(t, e, n) {
            void 0 === t && (t = y),
              void 0 === e && (e = {}),
              (this.options = h({}, G, {}, t)),
              (this.gs = e),
              (this.names = new Map(n)),
              (this.server = !!t.isServer),
              !this.server &&
                C &&
                Z &&
                ((Z = !1),
                (function (t) {
                  for (
                    var e = document.querySelectorAll(L), n = 0, r = e.length;
                    n < r;
                    n++
                  ) {
                    var i = e[n];
                    i &&
                      "active" !== i.getAttribute(k) &&
                      (B(t, i), i.parentNode && i.parentNode.removeChild(i));
                  }
                })(this));
          }
          t.registerId = function (t) {
            return I(t);
          };
          var e = t.prototype;
          return (
            (e.reconstructWithOptions = function (e, n) {
              return (
                void 0 === n && (n = !0),
                new t(
                  h({}, this.options, {}, e),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.allocateGSInstance = function (t) {
              return (this.gs[t] = (this.gs[t] || 0) + 1);
            }),
            (e.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((n = (e = this.options).isServer),
                  (r = e.useCSSOMInjection),
                  (i = e.target),
                  (t = n ? new H(i) : r ? new Y(i) : new F(i)),
                  new A(t)))
              );
              var t, e, n, r, i;
            }),
            (e.hasNameForId = function (t, e) {
              return this.names.has(t) && this.names.get(t).has(e);
            }),
            (e.registerName = function (t, e) {
              if ((I(t), this.names.has(t))) this.names.get(t).add(e);
              else {
                var n = new Set();
                n.add(e), this.names.set(t, n);
              }
            }),
            (e.insertRules = function (t, e, n) {
              this.registerName(t, e), this.getTag().insertRules(I(t), n);
            }),
            (e.clearNames = function (t) {
              this.names.has(t) && this.names.get(t).clear();
            }),
            (e.clearRules = function (t) {
              this.getTag().clearGroup(I(t)), this.clearNames(t);
            }),
            (e.clearTag = function () {
              this.tag = void 0;
            }),
            (e.toString = function () {
              return (function (t) {
                for (
                  var e = t.getTag(), n = e.length, r = "", i = 0;
                  i < n;
                  i++
                ) {
                  var o = M(i);
                  if (void 0 !== o) {
                    var a = t.names.get(o),
                      s = e.getGroup(i);
                    if (a && s && a.size) {
                      var l = k + ".g" + i + '[id="' + o + '"]',
                        c = "";
                      void 0 !== a &&
                        a.forEach(function (t) {
                          t.length > 0 && (c += t + ",");
                        }),
                        (r += "" + s + l + '{content:"' + c + '"}/*!sc*/\n');
                    }
                  }
                }
                return r;
              })(this);
            }),
            t
          );
        })(),
        U = /(a)(d)/gi,
        X = function (t) {
          return String.fromCharCode(t + (t > 25 ? 39 : 97));
        };
      function $(t) {
        var e,
          n = "";
        for (e = Math.abs(t); e > 52; e = (e / 52) | 0) n = X(e % 52) + n;
        return (X(e % 52) + n).replace(U, "$1-$2");
      }
      var q = function (t, e) {
          for (var n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
          return t;
        },
        K = function (t) {
          return q(5381, t);
        };
      function J(t) {
        for (var e = 0; e < t.length; e += 1) {
          var n = t[e];
          if (b(n) && !x(n)) return !1;
        }
        return !0;
      }
      var Q = K("5.3.3"),
        tt = (function () {
          function t(t, e, n) {
            (this.rules = t),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && J(t)),
              (this.componentId = e),
              (this.baseHash = q(Q, e)),
              (this.baseStyle = n),
              W.registerId(e);
          }
          return (
            (t.prototype.generateAndInjectStyles = function (t, e, n) {
              var r = this.componentId,
                i = [];
              if (
                (this.baseStyle &&
                  i.push(this.baseStyle.generateAndInjectStyles(t, e, n)),
                this.isStatic && !n.hash)
              )
                if (this.staticRulesId && e.hasNameForId(r, this.staticRulesId))
                  i.push(this.staticRulesId);
                else {
                  var o = bt(this.rules, t, e, n).join(""),
                    a = $(q(this.baseHash, o) >>> 0);
                  if (!e.hasNameForId(r, a)) {
                    var s = n(o, "." + a, void 0, r);
                    e.insertRules(r, a, s);
                  }
                  i.push(a), (this.staticRulesId = a);
                }
              else {
                for (
                  var l = this.rules.length,
                    c = q(this.baseHash, n.hash),
                    u = "",
                    d = 0;
                  d < l;
                  d++
                ) {
                  var f = this.rules[d];
                  if ("string" == typeof f) u += f;
                  else if (f) {
                    var p = bt(f, t, e, n),
                      h = Array.isArray(p) ? p.join("") : p;
                    (c = q(c, h + d)), (u += h);
                  }
                }
                if (u) {
                  var m = $(c >>> 0);
                  if (!e.hasNameForId(r, m)) {
                    var v = n(u, "." + m, void 0, r);
                    e.insertRules(r, m, v);
                  }
                  i.push(m);
                }
              }
              return i.join(" ");
            }),
            t
          );
        })(),
        et = /^\s*\/\/.*$/gm,
        nt = [":", "[", ".", "#"];
      function rt(t) {
        var e,
          n,
          r,
          i,
          o = void 0 === t ? y : t,
          a = o.options,
          l = void 0 === a ? y : a,
          c = o.plugins,
          u = void 0 === c ? g : c,
          d = new s(l),
          f = [],
          p = (function (t) {
            function e(e) {
              if (e)
                try {
                  t(e + "}");
                } catch (t) {}
            }
            return function (n, r, i, o, a, s, l, c, u, d) {
              switch (n) {
                case 1:
                  if (0 === u && 64 === r.charCodeAt(0)) return t(r + ";"), "";
                  break;
                case 2:
                  if (0 === c) return r + "/*|*/";
                  break;
                case 3:
                  switch (c) {
                    case 102:
                    case 112:
                      return t(i[0] + r), "";
                    default:
                      return r + (0 === d ? "/*|*/" : "");
                  }
                case -2:
                  r.split("/*|*/}").forEach(e);
              }
            };
          })(function (t) {
            f.push(t);
          }),
          h = function (t, r, o) {
            return (0 === r && -1 !== nt.indexOf(o[n.length])) || o.match(i)
              ? t
              : "." + e;
          };
        function m(t, o, a, s) {
          void 0 === s && (s = "&");
          var l = t.replace(et, ""),
            c = o && a ? a + " " + o + " { " + l + " }" : l;
          return (
            (e = s),
            (n = o),
            (r = new RegExp("\\" + n + "\\b", "g")),
            (i = new RegExp("(\\" + n + "\\b){2,}")),
            d(a || !o ? "" : o, c)
          );
        }
        return (
          d.use(
            [].concat(u, [
              function (t, e, i) {
                2 === t &&
                  i.length &&
                  i[0].lastIndexOf(n) > 0 &&
                  (i[0] = i[0].replace(r, h));
              },
              p,
              function (t) {
                if (-2 === t) {
                  var e = f;
                  return (f = []), e;
                }
              },
            ])
          ),
          (m.hash = u.length
            ? u
                .reduce(function (t, e) {
                  return e.name || T(15), q(t, e.name);
                }, 5381)
                .toString()
            : ""),
          m
        );
      }
      var it = i.createContext(),
        ot = it.Consumer,
        at = i.createContext(),
        st = (at.Consumer, new W()),
        lt = rt();
      function ct() {
        return (0, i.useContext)(it) || st;
      }
      function ut() {
        return (0, i.useContext)(at) || lt;
      }
      function dt(t) {
        var e = (0, i.useState)(t.stylisPlugins),
          n = e[0],
          r = e[1],
          o = ct(),
          s = (0, i.useMemo)(
            function () {
              var e = o;
              return (
                t.sheet
                  ? (e = t.sheet)
                  : t.target &&
                    (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection &&
                  (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target]
          ),
          l = (0, i.useMemo)(
            function () {
              return rt({
                options: { prefix: !t.disableVendorPrefixes },
                plugins: n,
              });
            },
            [t.disableVendorPrefixes, n]
          );
        return (
          (0, i.useEffect)(
            function () {
              a()(n, t.stylisPlugins) || r(t.stylisPlugins);
            },
            [t.stylisPlugins]
          ),
          i.createElement(
            it.Provider,
            { value: s },
            i.createElement(at.Provider, { value: l }, t.children)
          )
        );
      }
      var ft = (function () {
          function t(t, e) {
            var n = this;
            (this.inject = function (t, e) {
              void 0 === e && (e = lt);
              var r = n.name + e.hash;
              t.hasNameForId(n.id, r) ||
                t.insertRules(n.id, r, e(n.rules, r, "@keyframes"));
            }),
              (this.toString = function () {
                return T(12, String(n.name));
              }),
              (this.name = t),
              (this.id = "sc-keyframes-" + t),
              (this.rules = e);
          }
          return (
            (t.prototype.getName = function (t) {
              return void 0 === t && (t = lt), this.name + t.hash;
            }),
            t
          );
        })(),
        pt = /([A-Z])/,
        ht = /([A-Z])/g,
        mt = /^ms-/,
        vt = function (t) {
          return "-" + t.toLowerCase();
        };
      function gt(t) {
        return pt.test(t) ? t.replace(ht, vt).replace(mt, "-ms-") : t;
      }
      var yt = function (t) {
        return null == t || !1 === t || "" === t;
      };
      function bt(t, e, n, r) {
        if (Array.isArray(t)) {
          for (var i, o = [], a = 0, s = t.length; a < s; a += 1)
            "" !== (i = bt(t[a], e, n, r)) &&
              (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
          return o;
        }
        return yt(t)
          ? ""
          : x(t)
          ? "." + t.styledComponentId
          : b(t)
          ? "function" != typeof (c = t) ||
            (c.prototype && c.prototype.isReactComponent) ||
            !e
            ? t
            : bt(t(e), e, n, r)
          : t instanceof ft
          ? n
            ? (t.inject(n, r), t.getName(r))
            : t
          : v(t)
          ? (function t(e, n) {
              var r,
                i,
                o = [];
              for (var a in e)
                e.hasOwnProperty(a) &&
                  !yt(e[a]) &&
                  ((Array.isArray(e[a]) && e[a].isCss) || b(e[a])
                    ? o.push(gt(a) + ":", e[a], ";")
                    : v(e[a])
                    ? o.push.apply(o, t(e[a], a))
                    : o.push(
                        gt(a) +
                          ": " +
                          ((r = a),
                          (null == (i = e[a]) ||
                          "boolean" == typeof i ||
                          "" === i
                            ? ""
                            : "number" != typeof i || 0 === i || r in l
                            ? String(i).trim()
                            : i + "px") + ";")
                      ));
              return n ? [n + " {"].concat(o, ["}"]) : o;
            })(t)
          : t.toString();
        var c;
      }
      var wt = function (t) {
        return Array.isArray(t) && (t.isCss = !0), t;
      };
      function xt(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        return b(t) || v(t)
          ? wt(bt(m(g, [t].concat(n))))
          : 0 === n.length && 1 === t.length && "string" == typeof t[0]
          ? t
          : wt(bt(m(t, n)));
      }
      new Set();
      var kt = function (t, e, n) {
          return (
            void 0 === n && (n = y),
            (t.theme !== n.theme && t.theme) || e || n.theme
          );
        },
        St = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Ct = /(^-|-$)/g;
      function Et(t) {
        return t.replace(St, "-").replace(Ct, "");
      }
      var _t = function (t) {
        return $(K(t) >>> 0);
      };
      function Tt(t) {
        return "string" == typeof t && !0;
      }
      var At = function (t) {
          return (
            "function" == typeof t ||
            ("object" == typeof t && null !== t && !Array.isArray(t))
          );
        },
        Pt = function (t) {
          return "__proto__" !== t && "constructor" !== t && "prototype" !== t;
        };
      function jt(t, e, n) {
        var r = t[n];
        At(e) && At(r) ? Ot(r, e) : (t[n] = e);
      }
      function Ot(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        for (var i = 0, o = n; i < o.length; i++) {
          var a = o[i];
          if (At(a)) for (var s in a) Pt(s) && jt(t, a[s], s);
        }
        return t;
      }
      var It = i.createContext(),
        Mt = It.Consumer;
      function Rt(t) {
        var e = (0, i.useContext)(It),
          n = (0, i.useMemo)(
            function () {
              return (function (t, e) {
                return t
                  ? b(t)
                    ? t(e)
                    : Array.isArray(t) || "object" != typeof t
                    ? T(8)
                    : e
                    ? h({}, e, {}, t)
                    : t
                  : T(14);
              })(t.theme, e);
            },
            [t.theme, e]
          );
        return t.children
          ? i.createElement(It.Provider, { value: n }, t.children)
          : null;
      }
      var Lt = {};
      function zt(t, e, n) {
        var r = x(t),
          o = !Tt(t),
          a = e.attrs,
          s = void 0 === a ? g : a,
          l = e.componentId,
          c =
            void 0 === l
              ? (function (t, e) {
                  var n = "string" != typeof t ? "sc" : Et(t);
                  Lt[n] = (Lt[n] || 0) + 1;
                  var r = n + "-" + _t("5.3.3" + n + Lt[n]);
                  return e ? e + "-" + r : r;
                })(e.displayName, e.parentComponentId)
              : l,
          d = e.displayName,
          p =
            void 0 === d
              ? (function (t) {
                  return Tt(t) ? "styled." + t : "Styled(" + w(t) + ")";
                })(t)
              : d,
          m =
            e.displayName && e.componentId
              ? Et(e.displayName) + "-" + e.componentId
              : e.componentId || c,
          v =
            r && t.attrs
              ? Array.prototype.concat(t.attrs, s).filter(Boolean)
              : s,
          k = e.shouldForwardProp;
        r &&
          t.shouldForwardProp &&
          (k = e.shouldForwardProp
            ? function (n, r, i) {
                return (
                  t.shouldForwardProp(n, r, i) && e.shouldForwardProp(n, r, i)
                );
              }
            : t.shouldForwardProp);
        var S,
          C = new tt(n, m, r ? t.componentStyle : void 0),
          E = C.isStatic && 0 === s.length,
          _ = function (t, e) {
            return (function (t, e, n, r) {
              var o = t.attrs,
                a = t.componentStyle,
                s = t.defaultProps,
                l = t.foldedComponentIds,
                c = t.shouldForwardProp,
                d = t.styledComponentId,
                f = t.target,
                p = (function (t, e, n) {
                  void 0 === t && (t = y);
                  var r = h({}, e, { theme: t }),
                    i = {};
                  return (
                    n.forEach(function (t) {
                      var e,
                        n,
                        o,
                        a = t;
                      for (e in (b(a) && (a = a(r)), a))
                        r[e] = i[e] =
                          "className" === e
                            ? ((n = i[e]),
                              (o = a[e]),
                              n && o ? n + " " + o : n || o)
                            : a[e];
                    }),
                    [r, i]
                  );
                })(kt(e, (0, i.useContext)(It), s) || y, e, o),
                m = p[0],
                v = p[1],
                g = (function (t, e, n, r) {
                  var i = ct(),
                    o = ut();
                  return e
                    ? t.generateAndInjectStyles(y, i, o)
                    : t.generateAndInjectStyles(n, i, o);
                })(a, r, m),
                w = n,
                x = v.$as || e.$as || v.as || e.as || f,
                k = Tt(x),
                S = v !== e ? h({}, e, {}, v) : e,
                C = {};
              for (var E in S)
                "$" !== E[0] &&
                  "as" !== E &&
                  ("forwardedAs" === E
                    ? (C.as = S[E])
                    : (c ? c(E, u, x) : !k || u(E)) && (C[E] = S[E]));
              return (
                e.style &&
                  v.style !== e.style &&
                  (C.style = h({}, e.style, {}, v.style)),
                (C.className = Array.prototype
                  .concat(l, d, g !== d ? g : null, e.className, v.className)
                  .filter(Boolean)
                  .join(" ")),
                (C.ref = w),
                (0, i.createElement)(x, C)
              );
            })(S, t, e, E);
          };
        return (
          (_.displayName = p),
          ((S = i.forwardRef(_)).attrs = v),
          (S.componentStyle = C),
          (S.displayName = p),
          (S.shouldForwardProp = k),
          (S.foldedComponentIds = r
            ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId)
            : g),
          (S.styledComponentId = m),
          (S.target = r ? t.target : t),
          (S.withComponent = function (t) {
            var r = e.componentId,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(e, ["componentId"]),
              o = r && r + "-" + (Tt(t) ? t : Et(w(t)));
            return zt(t, h({}, i, { attrs: v, componentId: o }), n);
          }),
          Object.defineProperty(S, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = r ? Ot({}, t.defaultProps, e) : e;
            },
          }),
          (S.toString = function () {
            return "." + S.styledComponentId;
          }),
          o &&
            f()(S, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          S
        );
      }
      var Dt = function (t) {
        return (function t(e, n, i) {
          if ((void 0 === i && (i = y), !(0, r.isValidElementType)(n)))
            return T(1, String(n));
          var o = function () {
            return e(n, i, xt.apply(void 0, arguments));
          };
          return (
            (o.withConfig = function (r) {
              return t(e, n, h({}, i, {}, r));
            }),
            (o.attrs = function (r) {
              return t(
                e,
                n,
                h({}, i, {
                  attrs: Array.prototype.concat(i.attrs, r).filter(Boolean),
                })
              );
            }),
            o
          );
        })(zt, t);
      };
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "textPath",
        "tspan",
      ].forEach(function (t) {
        Dt[t] = Dt(t);
      });
      var Bt = (function () {
        function t(t, e) {
          (this.rules = t),
            (this.componentId = e),
            (this.isStatic = J(t)),
            W.registerId(this.componentId + 1);
        }
        var e = t.prototype;
        return (
          (e.createStyles = function (t, e, n, r) {
            var i = r(bt(this.rules, e, n, r).join(""), ""),
              o = this.componentId + t;
            n.insertRules(o, o, i);
          }),
          (e.removeStyles = function (t, e) {
            e.clearRules(this.componentId + t);
          }),
          (e.renderStyles = function (t, e, n, r) {
            t > 2 && W.registerId(this.componentId + t),
              this.removeStyles(t, n),
              this.createStyles(t, e, n, r);
          }),
          t
        );
      })();
      function Nt(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        var o = xt.apply(void 0, [t].concat(n)),
          a = "sc-global-" + _t(JSON.stringify(o)),
          s = new Bt(o, a);
        function l(t) {
          var e = ct(),
            n = ut(),
            r = (0, i.useContext)(It),
            o = (0, i.useRef)(e.allocateGSInstance(a)).current;
          return (
            e.server && c(o, t, e, r, n),
            (0, i.useLayoutEffect)(
              function () {
                if (!e.server)
                  return (
                    c(o, t, e, r, n),
                    function () {
                      return s.removeStyles(o, e);
                    }
                  );
              },
              [o, t, e, r, n]
            ),
            null
          );
        }
        function c(t, e, n, r, i) {
          if (s.isStatic) s.renderStyles(t, _, n, i);
          else {
            var o = h({}, e, { theme: kt(e, r, l.defaultProps) });
            s.renderStyles(t, o, n, i);
          }
        }
        return i.memo(l);
      }
      function Vt(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        var i = xt.apply(void 0, [t].concat(n)).join(""),
          o = _t(i);
        return new ft(o, i);
      }
      var Yt = (function () {
          function t() {
            var t = this;
            (this._emitSheetCSS = function () {
              var e = t.instance.toString();
              if (!e) return "";
              var n = N();
              return (
                "<style " +
                [
                  n && 'nonce="' + n + '"',
                  k + '="true"',
                  'data-styled-version="5.3.3"',
                ]
                  .filter(Boolean)
                  .join(" ") +
                ">" +
                e +
                "</style>"
              );
            }),
              (this.getStyleTags = function () {
                return t.sealed ? T(2) : t._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var e;
                if (t.sealed) return T(2);
                var n =
                    (((e = {})[k] = ""),
                    (e["data-styled-version"] = "5.3.3"),
                    (e.dangerouslySetInnerHTML = {
                      __html: t.instance.toString(),
                    }),
                    e),
                  r = N();
                return (
                  r && (n.nonce = r),
                  [i.createElement("style", h({}, n, { key: "sc-0-0" }))]
                );
              }),
              (this.seal = function () {
                t.sealed = !0;
              }),
              (this.instance = new W({ isServer: !0 })),
              (this.sealed = !1);
          }
          var e = t.prototype;
          return (
            (e.collectStyles = function (t) {
              return this.sealed
                ? T(2)
                : i.createElement(dt, { sheet: this.instance }, t);
            }),
            (e.interleaveWithNodeStream = function (t) {
              return T(3);
            }),
            t
          );
        })(),
        Ft = function (t) {
          var e = i.forwardRef(function (e, n) {
            var r = (0, i.useContext)(It),
              o = t.defaultProps,
              a = kt(e, r, o);
            return i.createElement(t, h({}, e, { theme: a, ref: n }));
          });
          return f()(e, t), (e.displayName = "WithTheme(" + w(t) + ")"), e;
        },
        Ht = function () {
          return (0, i.useContext)(It);
        },
        Zt = { StyleSheet: W, masterSheet: st },
        Gt = Dt;
    },
    7704: function (t, e, n) {
      "use strict";
      e.Fv = void 0;
      var r = n(7379),
        i = (0, r.css)([
          'html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}',
        ]);
      (e.Fv = i), (0, r.createGlobalStyle)(i);
    },
    655: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __assign: function () {
            return o;
          },
          __asyncDelegator: function () {
            return w;
          },
          __asyncGenerator: function () {
            return b;
          },
          __asyncValues: function () {
            return x;
          },
          __await: function () {
            return y;
          },
          __awaiter: function () {
            return u;
          },
          __classPrivateFieldGet: function () {
            return E;
          },
          __classPrivateFieldSet: function () {
            return _;
          },
          __createBinding: function () {
            return f;
          },
          __decorate: function () {
            return s;
          },
          __exportStar: function () {
            return p;
          },
          __extends: function () {
            return i;
          },
          __generator: function () {
            return d;
          },
          __importDefault: function () {
            return C;
          },
          __importStar: function () {
            return S;
          },
          __makeTemplateObject: function () {
            return k;
          },
          __metadata: function () {
            return c;
          },
          __param: function () {
            return l;
          },
          __read: function () {
            return m;
          },
          __rest: function () {
            return a;
          },
          __spread: function () {
            return v;
          },
          __spreadArrays: function () {
            return g;
          },
          __values: function () {
            return h;
          },
        });
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function i(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          o.apply(this, arguments)
        );
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function s(t, e, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? e
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(e, n))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          a = Reflect.decorate(t, e, n, r);
        else
          for (var s = t.length - 1; s >= 0; s--)
            (i = t[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
        return o > 3 && a && Object.defineProperty(e, n, a), a;
      }
      function l(t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }
      function c(t, e) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(t, e);
      }
      function u(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              l(r.next(t));
            } catch (e) {
              o(e);
            }
          }
          function s(t) {
            try {
              l(r.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          l((r = r.apply(t, e || [])).next());
        });
      }
      function d(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = e.call(t, a);
                } catch (s) {
                  (o = [6, s]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      }
      function f(t, e, n, r) {
        void 0 === r && (r = n), (t[r] = e[n]);
      }
      function p(t, e) {
        for (var n in t)
          "default" === n || e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      function h(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function m(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function v() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(m(arguments[e]));
        return t;
      }
      function g() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      function y(t) {
        return this instanceof y ? ((this.v = t), this) : new y(t);
      }
      function b(t, e, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          i = n.apply(t, e || []),
          o = [];
        return (
          (r = {}),
          a("next"),
          a("throw"),
          a("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(t) {
          i[t] &&
            (r[t] = function (e) {
              return new Promise(function (n, r) {
                o.push([t, e, n, r]) > 1 || s(t, e);
              });
            });
        }
        function s(t, e) {
          try {
            (n = i[t](e)).value instanceof y
              ? Promise.resolve(n.value.v).then(l, c)
              : u(o[0][2], n);
          } catch (r) {
            u(o[0][3], r);
          }
          var n;
        }
        function l(t) {
          s("next", t);
        }
        function c(t) {
          s("throw", t);
        }
        function u(t, e) {
          t(e), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }
      function w(t) {
        var e, n;
        return (
          (e = {}),
          r("next"),
          r("throw", function (t) {
            throw t;
          }),
          r("return"),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
        function r(r, i) {
          e[r] = t[r]
            ? function (e) {
                return (n = !n)
                  ? { value: y(t[r](e)), done: "return" === r }
                  : i
                  ? i(e)
                  : e;
              }
            : i;
        }
      }
      function x(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var e,
          n = t[Symbol.asyncIterator];
        return n
          ? n.call(t)
          : ((t = h(t)),
            (e = {}),
            r("next"),
            r("throw"),
            r("return"),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function r(n) {
          e[n] =
            t[n] &&
            function (e) {
              return new Promise(function (r, i) {
                (function (t, e, n, r) {
                  Promise.resolve(r).then(function (e) {
                    t({ value: e, done: n });
                  }, e);
                })(r, i, (e = t[n](e)).done, e.value);
              });
            };
        }
      }
      function k(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, "raw", { value: e })
            : (t.raw = e),
          t
        );
      }
      function S(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      }
      function C(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function E(t, e) {
        if (!e.has(t))
          throw new TypeError("attempted to get private field on non-instance");
        return e.get(t);
      }
      function _(t, e, n) {
        if (!e.has(t))
          throw new TypeError("attempted to set private field on non-instance");
        return e.set(t, n), n;
      }
    },
    9428: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(8440);
      e.useDebounce = r.default;
      var i = n(3443);
      e.useDebouncedCallback = i.default;
      var o = n(8523);
      e.useThrottledCallback = o.default;
    },
    8440: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(7294),
        i = n(3443);
      function o(t, e) {
        return t === e;
      }
      function a(t) {
        return "function" === typeof t
          ? function () {
              return t;
            }
          : t;
      }
      e.default = function (t, e, n) {
        var s = (n && n.equalityFn) || o,
          l = (function (t) {
            var e = r.useState(a(t)),
              n = e[0],
              i = e[1];
            return [
              n,
              r.useCallback(function (t) {
                return i(a(t));
              }, []),
            ];
          })(t),
          c = l[0],
          u = l[1],
          d = i.default(
            r.useCallback(
              function (t) {
                return u(t);
              },
              [u]
            ),
            e,
            n
          ),
          f = r.useRef(t);
        return (
          r.useEffect(
            function () {
              s(f.current, t) || (d(t), (f.current = t));
            },
            [t, d, s]
          ),
          [c, { cancel: d.cancel, isPending: d.isPending, flush: d.flush }]
        );
      };
    },
    3443: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(7294);
      e.default = function (t, e, n) {
        var i = this,
          o = r.useRef(null),
          a = r.useRef(0),
          s = r.useRef(null),
          l = r.useRef([]),
          c = r.useRef(),
          u = r.useRef(),
          d = r.useRef(t),
          f = r.useRef(!0);
        d.current = t;
        var p = !e && 0 !== e && "undefined" !== typeof window;
        if ("function" !== typeof t) throw new TypeError("Expected a function");
        e = +e || 0;
        var h = !!(n = n || {}).leading,
          m = !("trailing" in n) || !!n.trailing,
          v = "maxWait" in n,
          g = v ? Math.max(+n.maxWait || 0, e) : null;
        r.useEffect(function () {
          return (
            (f.current = !0),
            function () {
              f.current = !1;
            }
          );
        }, []);
        var y = r.useMemo(
          function () {
            var t = function (t) {
                var e = l.current,
                  n = c.current;
                return (
                  (l.current = c.current = null),
                  (a.current = t),
                  (u.current = d.current.apply(n, e))
                );
              },
              n = function (t, e) {
                p && cancelAnimationFrame(s.current),
                  (s.current = p ? requestAnimationFrame(t) : setTimeout(t, e));
              },
              r = function (t) {
                if (!f.current) return !1;
                var n = t - o.current,
                  r = t - a.current;
                return !o.current || n >= e || n < 0 || (v && r >= g);
              },
              y = function (e) {
                return (
                  (s.current = null),
                  m && l.current
                    ? t(e)
                    : ((l.current = c.current = null), u.current)
                );
              },
              b = function () {
                var t = Date.now();
                if (r(t)) return y(t);
                if (f.current) {
                  var i = t - o.current,
                    s = t - a.current,
                    l = e - i,
                    c = v ? Math.min(l, g - s) : l;
                  n(b, c);
                }
              },
              w = function () {
                for (var d = [], p = 0; p < arguments.length; p++)
                  d[p] = arguments[p];
                var m = Date.now(),
                  g = r(m);
                if (((l.current = d), (c.current = i), (o.current = m), g)) {
                  if (!s.current && f.current)
                    return (
                      (a.current = o.current),
                      n(b, e),
                      h ? t(o.current) : u.current
                    );
                  if (v) return n(b, e), t(o.current);
                }
                return s.current || n(b, e), u.current;
              };
            return (
              (w.cancel = function () {
                s.current &&
                  (p
                    ? cancelAnimationFrame(s.current)
                    : clearTimeout(s.current)),
                  (a.current = 0),
                  (l.current = o.current = c.current = s.current = null);
              }),
              (w.isPending = function () {
                return !!s.current;
              }),
              (w.flush = function () {
                return s.current ? y(Date.now()) : u.current;
              }),
              w
            );
          },
          [h, v, e, g, m, p]
        );
        return y;
      };
    },
    8523: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(3443);
      e.default = function (t, e, n) {
        var i = void 0 === n ? {} : n,
          o = i.leading,
          a = void 0 === o || o,
          s = i.trailing,
          l = void 0 === s || s;
        return r.default(t, e, { maxWait: e, leading: a, trailing: l });
      };
    },
    6388: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(7294);
      e.default = function (t) {
        void 0 === t && (t = {});
        var e = (0, r.useRef)(null),
          n = t.onResize,
          i = (0, r.useRef)(void 0);
        i.current = n;
        var o = (0, r.useRef)(),
          a = t.ref || e,
          s = (0, r.useState)({ width: void 0, height: void 0 }),
          l = s[0],
          c = s[1],
          u = (0, r.useRef)({ width: void 0, height: void 0 });
        return (
          (0, r.useEffect)(function () {
            o.current ||
              (o.current = new ResizeObserver(function (t) {
                if (Array.isArray(t) && t.length) {
                  var e = t[0],
                    n = Math.round(e.contentRect.width),
                    r = Math.round(e.contentRect.height);
                  if (u.current.width !== n || u.current.height !== r) {
                    var o = { width: n, height: r };
                    i.current
                      ? i.current(o)
                      : ((u.current.width = n), (u.current.height = r), c(o));
                  }
                }
              }));
          }, []),
          (0, r.useEffect)(
            function () {
              if (
                "object" === typeof a &&
                null !== a &&
                a.current instanceof Element
              ) {
                var t = a.current;
                return (
                  o.current.observe(t),
                  function () {
                    return o.current.unobserve(t);
                  }
                );
              }
            },
            [a]
          ),
          (0, r.useMemo)(
            function () {
              return { ref: a, width: l.width, height: l.height };
            },
            [a, l ? l.width : null, l ? l.height : null]
          )
        );
      };
    },
    5364: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return r;
        },
      });
      var r = (0, n(7294).createContext)({});
    },
    240: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var r = (0, n(7294).createContext)(null);
    },
    1653: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return na;
        },
      });
      var r = n(1439),
        i = n(7294),
        o = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        a = {
          measureLayout: o(["layout", "layoutId", "drag"]),
          animation: o([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: o(["exit"]),
          drag: o(["drag", "dragControls"]),
          focus: o(["whileFocus"]),
          hover: o(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: o(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: o(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: o(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var s = (0, i.createContext)({ strict: !1 }),
        l = Object.keys(a),
        c = l.length;
      var u = (0, i.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
        }),
        d = (0, i.createContext)({});
      var f = n(240),
        p = "undefined" !== typeof window,
        h = p ? i.useLayoutEffect : i.useEffect;
      function m(t, e, n, r) {
        var o = (0, i.useContext)(s),
          a = (0, i.useContext)(d).visualElement,
          l = (0, i.useContext)(f.O),
          c = (0, i.useRef)(void 0);
        r || (r = o.renderer),
          !c.current &&
            r &&
            (c.current = r(t, {
              visualState: e,
              parent: a,
              props: n,
              presenceId: null === l || void 0 === l ? void 0 : l.id,
              blockInitialAnimation:
                !1 === (null === l || void 0 === l ? void 0 : l.initial),
            }));
        var u = c.current;
        return (
          h(function () {
            null === u || void 0 === u || u.syncRender();
          }),
          (0, i.useEffect)(function () {
            var t;
            null ===
              (t = null === u || void 0 === u ? void 0 : u.animationState) ||
              void 0 === t ||
              t.animateChanges();
          }),
          h(function () {
            return function () {
              return null === u || void 0 === u ? void 0 : u.notifyUnmount();
            };
          }, []),
          u
        );
      }
      function v(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function g(t) {
        return Array.isArray(t);
      }
      function y(t) {
        return "string" === typeof t || g(t);
      }
      function b(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          "string" === typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          e
        );
      }
      function w(t, e, n) {
        var r = t.getProps();
        return b(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function x(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          y(t.initial) ||
          y(t.animate) ||
          y(t.whileHover) ||
          y(t.whileDrag) ||
          y(t.whileTap) ||
          y(t.whileFocus) ||
          y(t.exit)
        );
      }
      function k(t) {
        return Boolean(x(t) || t.variants);
      }
      function S(t) {
        var e = (function (t, e) {
            if (x(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || y(n) ? n : void 0,
                animate: y(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, i.useContext)(d)),
          n = e.initial,
          r = e.animate;
        return (0, i.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [C(n), C(r)]
        );
      }
      function C(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var E = n(6681),
        _ = n(4735);
      const T = (t, e, n) => -n * t + n * e + t;
      function A(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      function P(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function j(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var O = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                P(this.subscriptions, t),
                function () {
                  return j(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        I = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new O()),
              (this.velocityUpdateSubscribers = new O()),
              (this.renderSubscribers = new O()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = (0, _.$B)(),
                  i = r.delta,
                  o = r.timestamp;
                n.lastUpdated !== o &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = o),
                  _.ZP.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return _.ZP.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? A(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function M(t) {
        return new I(t);
      }
      var R = function (t) {
        return Boolean(null !== t && "object" === typeof t && t.getVelocity);
      };
      function L(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      const z = (t, e, n) => Math.min(Math.max(n, t), e),
        D = 0.001;
      function B({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let i,
          o,
          a = 1 - e;
        (a = z(0.05, 1, a)),
          (t = z(0.01, 10, t / 1e3)),
          a < 1
            ? ((i = (e) => {
                const r = e * a,
                  i = r * t,
                  o = r - n,
                  s = N(e, a),
                  l = Math.exp(-i);
                return D - (o / s) * l;
              }),
              (o = (e) => {
                const r = e * a * t,
                  o = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  l = Math.exp(-r),
                  c = N(Math.pow(e, 2), a);
                return ((-i(e) + D > 0 ? -1 : 1) * ((o - s) * l)) / c;
              }))
            : ((i = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (o = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const s = (function (t, e, n) {
          let r = n;
          for (let i = 1; i < 12; i++) r -= t(r) / e(r);
          return r;
        })(i, o, 5 / t);
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(s, 2) * r;
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function N(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const V = ["duration", "bounce"],
        Y = ["stiffness", "damping", "mass"];
      function F(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function H(t) {
        var { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: i } = t,
          o = L(t, ["from", "to", "restSpeed", "restDelta"]);
        const a = { done: !1, value: e };
        let {
            stiffness: s,
            damping: l,
            mass: c,
            velocity: u,
            duration: d,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!F(t, Y) && F(t, V)) {
              const n = B(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(o),
          p = Z,
          h = Z;
        function m() {
          const t = u ? -u / 1e3 : 0,
            r = n - e,
            o = l / (2 * Math.sqrt(s * c)),
            a = Math.sqrt(s / c) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, 0.4)), o < 1)
          ) {
            const e = N(a, o);
            (p = (i) => {
              const s = Math.exp(-o * a * i);
              return (
                n -
                s *
                  (((t + o * a * r) / e) * Math.sin(e * i) +
                    r * Math.cos(e * i))
              );
            }),
              (h = (n) => {
                const i = Math.exp(-o * a * n);
                return (
                  o *
                    a *
                    i *
                    ((Math.sin(e * n) * (t + o * a * r)) / e +
                      r * Math.cos(e * n)) -
                  i *
                    (Math.cos(e * n) * (t + o * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === o)
            p = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(o * o - 1);
            p = (i) => {
              const s = Math.exp(-o * a * i),
                l = Math.min(e * i, 300);
              return (
                n -
                (s * ((t + o * a * r) * Math.sinh(l) + e * r * Math.cosh(l))) /
                  e
              );
            };
          }
        }
        return (
          m(),
          {
            next: (t) => {
              const e = p(t);
              if (f) a.done = t >= d;
              else {
                const o = 1e3 * h(t),
                  s = Math.abs(o) <= r,
                  l = Math.abs(n - e) <= i;
                a.done = s && l;
              }
              return (a.value = a.done ? n : e), a;
            },
            flipTarget: () => {
              (u = -u), ([e, n] = [n, e]), m();
            },
          }
        );
      }
      H.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const Z = (t) => 0,
        G = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        W = (t, e) => (n) => Math.max(Math.min(n, e), t),
        U = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        X = /(-)?([\d]*\.?[\d])+/g,
        $ =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        q =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function K(t) {
        return "string" === typeof t;
      }
      const J = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        Q = Object.assign(Object.assign({}, J), { transform: W(0, 1) }),
        tt = Object.assign(Object.assign({}, J), { default: 1 }),
        et = (t, e) => (n) =>
          Boolean(
            (K(n) && q.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        nt = (t, e, n) => (r) => {
          if (!K(r)) return r;
          const [i, o, a, s] = r.match(X);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        rt = W(0, 255),
        it = Object.assign(Object.assign({}, J), {
          transform: (t) => Math.round(rt(t)),
        }),
        ot = {
          test: et("rgb", "red"),
          parse: nt("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            it.transform(t) +
            ", " +
            it.transform(e) +
            ", " +
            it.transform(n) +
            ", " +
            U(Q.transform(r)) +
            ")",
        };
      const at = {
          test: et("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (i = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (i = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: ot.transform,
        },
        st = (t) => ({
          test: (e) => K(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        lt = st("deg"),
        ct = st("%"),
        ut = st("px"),
        dt = st("vh"),
        ft = st("vw"),
        pt = Object.assign(Object.assign({}, ct), {
          parse: (t) => ct.parse(t) / 100,
          transform: (t) => ct.transform(100 * t),
        }),
        ht = {
          test: et("hsl", "hue"),
          parse: nt("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            ct.transform(U(e)) +
            ", " +
            ct.transform(U(n)) +
            ", " +
            U(Q.transform(r)) +
            ")",
        };
      function mt(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function vt({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let i = 0,
          o = 0,
          a = 0;
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          (i = mt(s, r, t + 1 / 3)),
            (o = mt(s, r, t)),
            (a = mt(s, r, t - 1 / 3));
        } else i = o = a = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      const gt = (t, e, n) => {
          const r = t * t,
            i = e * e;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        yt = [at, ot, ht],
        bt = (t) => yt.find((e) => e.test(t)),
        wt = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        xt = (t, e) => {
          let n = bt(t),
            r = bt(e);
          wt(t), wt(e);
          let i = n.parse(t),
            o = r.parse(e);
          n === ht && ((i = vt(i)), (n = ot)),
            r === ht && ((o = vt(o)), (r = ot));
          const a = Object.assign({}, i);
          return (t) => {
            for (const e in a) "alpha" !== e && (a[e] = gt(i[e], o[e], t));
            return (a.alpha = T(i.alpha, o.alpha, t)), n.transform(a);
          };
        },
        kt = {
          test: (t) => ot.test(t) || at.test(t) || ht.test(t),
          parse: (t) =>
            ot.test(t) ? ot.parse(t) : ht.test(t) ? ht.parse(t) : at.parse(t),
          transform: (t) =>
            K(t)
              ? t
              : t.hasOwnProperty("red")
              ? ot.transform(t)
              : ht.transform(t),
        },
        St = "${c}",
        Ct = "${n}";
      function Et(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match($);
        r &&
          ((n = r.length), (t = t.replace($, St)), e.push(...r.map(kt.parse)));
        const i = t.match(X);
        return (
          i && ((t = t.replace(X, Ct)), e.push(...i.map(J.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function _t(t) {
        return Et(t).values;
      }
      function Tt(t) {
        const { values: e, numColors: n, tokenised: r } = Et(t),
          i = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < i; r++)
            e = e.replace(
              r < n ? St : Ct,
              r < n ? kt.transform(t[r]) : U(t[r])
            );
          return e;
        };
      }
      const At = (t) => ("number" === typeof t ? 0 : t);
      const Pt = {
          test: function (t) {
            var e, n, r, i;
            return (
              isNaN(t) &&
              K(t) &&
              (null !==
                (n =
                  null === (e = t.match(X)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match($)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: _t,
          createTransformer: Tt,
          getAnimatableNone: function (t) {
            const e = _t(t);
            return Tt(t)(e.map(At));
          },
        },
        jt = (t) => "number" === typeof t,
        Ot = (t, e) => (n) => e(t(n)),
        It = (...t) => t.reduce(Ot);
      function Mt(t, e) {
        return jt(t) ? (n) => T(t, e, n) : kt.test(t) ? xt(t, e) : Dt(t, e);
      }
      const Rt = (t, e) => {
          const n = [...t],
            r = n.length,
            i = t.map((t, n) => Mt(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        Lt = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = Mt(t[i], e[i]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        };
      function zt(t) {
        const e = Pt.parse(t),
          n = e.length;
        let r = 0,
          i = 0,
          o = 0;
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      const Dt = (t, e) => {
          const n = Pt.createTransformer(e),
            r = zt(t),
            i = zt(e);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? It(Rt(r.parsed, i.parsed), n)
            : (n) => `${n > 0 ? e : t}`;
        },
        Bt = (t, e) => (n) => T(t, e, n);
      function Nt(t, e, n) {
        const r = [],
          i =
            n ||
            ("number" === typeof (o = t[0])
              ? Bt
              : "string" === typeof o
              ? kt.test(o)
                ? xt
                : Dt
              : Array.isArray(o)
              ? Rt
              : "object" === typeof o
              ? Lt
              : void 0);
        var o;
        const a = t.length - 1;
        for (let s = 0; s < a; s++) {
          let n = i(t[s], t[s + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[s] : e;
            n = It(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function Vt(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
        const o = t.length;
        e.length,
          !r || !Array.isArray(r) || r.length,
          t[0] > t[o - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        const a = Nt(e, r, i),
          s =
            2 === o
              ? (function ([t, e], [n]) {
                  return (r) => n(G(t, e, r));
                })(t, a)
              : (function (t, e) {
                  const n = t.length,
                    r = n - 1;
                  return (i) => {
                    let o = 0,
                      a = !1;
                    if (
                      (i <= t[0]
                        ? (a = !0)
                        : i >= t[r] && ((o = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > i || e === r); e++);
                      o = e - 1;
                    }
                    const s = G(t[o], t[o + 1], i);
                    return e[o](s);
                  };
                })(t, a);
        return n ? (e) => s(z(t[0], t[o - 1], e)) : s;
      }
      const Yt = (t) => (e) => 1 - t(1 - e),
        Ft = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Ht = (t) => (e) => e * e * ((t + 1) * e - t),
        Zt = (t) => t,
        Gt = ((Wt = 2), (t) => Math.pow(t, Wt));
      var Wt;
      const Ut = Yt(Gt),
        Xt = Ft(Gt),
        $t = (t) => 1 - Math.sin(Math.acos(t)),
        qt = Yt($t),
        Kt = Ft(qt),
        Jt = Ht(1.525),
        Qt = Yt(Jt),
        te = Ft(Jt),
        ee = ((t) => {
          const e = Ht(t);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(1.525),
        ne = (t) => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        re = Yt(ne);
      function ie(t, e) {
        return t.map(() => e || Xt).splice(0, t.length - 1);
      }
      function oe({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300,
      }) {
        const o = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map((t) => t * e);
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a),
            i
          );
        function l() {
          return Vt(s, a, { ease: Array.isArray(n) ? n : ie(a, n) });
        }
        let c = l();
        return {
          next: (t) => ((o.value = c(t)), (o.done = t >= i), o),
          flipTarget: () => {
            a.reverse(), (c = l());
          },
        };
      }
      const ae = {
        keyframes: oe,
        spring: H,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o,
        }) {
          const a = { done: !1, value: e };
          let s = n * t;
          const l = e + s,
            c = void 0 === o ? l : o(l);
          return (
            c !== l && (s = c - e),
            {
              next: (t) => {
                const e = -s * Math.exp(-t / r);
                return (
                  (a.done = !(e > i || e < -i)),
                  (a.value = a.done ? c : c + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      function se(t, e, n = 0) {
        return t - e - n;
      }
      const le = (t) => {
        const e = ({ delta: e }) => t(e);
        return { start: () => _.ZP.update(e, !0), stop: () => _.qY.update(e) };
      };
      function ce(t) {
        var e,
          n,
          {
            from: r,
            autoplay: i = !0,
            driver: o = le,
            elapsed: a = 0,
            repeat: s = 0,
            repeatType: l = "loop",
            repeatDelay: c = 0,
            onPlay: u,
            onStop: d,
            onComplete: f,
            onRepeat: p,
            onUpdate: h,
          } = t,
          m = L(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let v,
          g,
          y,
          { to: b } = m,
          w = 0,
          x = m.duration,
          k = !1,
          S = !0;
        const C = (function (t) {
          if (Array.isArray(t.to)) return oe;
          if (ae[t.type]) return ae[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? oe
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? H
            : oe;
        })(m);
        (null === (n = (e = C).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, r, b)) &&
          ((y = Vt([0, 100], [r, b], { clamp: !1 })), (r = 0), (b = 100));
        const E = C(Object.assign(Object.assign({}, m), { from: r, to: b }));
        function _() {
          w++,
            "reverse" === l
              ? ((S = w % 2 === 0),
                (a = (function (t, e, n = 0, r = !0) {
                  return r ? se(e + -t, e, n) : e - (t - e) + n;
                })(a, x, c, S)))
              : ((a = se(a, x, c)), "mirror" === l && E.flipTarget()),
            (k = !1),
            p && p();
        }
        function T(t) {
          if ((S || (t = -t), (a += t), !k)) {
            const t = E.next(Math.max(0, a));
            (g = t.value), y && (g = y(g)), (k = S ? t.done : a <= 0);
          }
          null === h || void 0 === h || h(g),
            k &&
              (0 === w && ((null !== x && void 0 !== x) || (x = a)),
              w < s
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(a, x, c, S) && _()
                : (v.stop(), f && f()));
        }
        return (
          i && (null === u || void 0 === u || u(), (v = o(T)), v.start()),
          {
            stop: () => {
              null === d || void 0 === d || d(), v.stop();
            },
          }
        );
      }
      var ue = function (t) {
        return 1e3 * t;
      };
      const de = (t, e) => 1 - 3 * e + 3 * t,
        fe = (t, e) => 3 * e - 6 * t,
        pe = (t) => 3 * t,
        he = (t, e, n) => ((de(e, n) * t + fe(e, n)) * t + pe(e)) * t,
        me = (t, e, n) => 3 * de(e, n) * t * t + 2 * fe(e, n) * t + pe(e);
      const ve = 0.1;
      function ge(t, e, n, r) {
        if (t === e && n === r) return Zt;
        const i = new Float32Array(11);
        for (let a = 0; a < 11; ++a) i[a] = he(a * ve, t, n);
        function o(e) {
          let r = 0,
            o = 1;
          for (; 10 !== o && i[o] <= e; ++o) r += ve;
          --o;
          const a = r + ((e - i[o]) / (i[o + 1] - i[o])) * ve,
            s = me(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (let i = 0; i < 8; ++i) {
                  const i = me(e, n, r);
                  if (0 === i) return e;
                  e -= (he(e, n, r) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, i) {
                let o,
                  a,
                  s = 0;
                do {
                  (a = e + (n - e) / 2),
                    (o = he(a, r, i) - t),
                    o > 0 ? (n = a) : (e = a);
                } while (Math.abs(o) > 1e-7 && ++s < 10);
                return a;
              })(e, r, r + ve, t, n);
        }
        return (t) => (0 === t || 1 === t ? t : he(o(t), e, r));
      }
      var ye = {
          linear: Zt,
          easeIn: Gt,
          easeInOut: Xt,
          easeOut: Ut,
          circIn: $t,
          circInOut: Kt,
          circOut: qt,
          backIn: Jt,
          backInOut: te,
          backOut: Qt,
          anticipate: ee,
          bounceIn: re,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - ne(1 - 2 * t)) : 0.5 * ne(2 * t - 1) + 0.5,
          bounceOut: ne,
        },
        be = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = (0, r.CR)(t, 4);
            return ge(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? ("Invalid easing type '".concat(t, "'"), ye[t])
            : t;
        },
        we = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !Pt.test(e) || e.startsWith("url(")))
          );
        },
        xe = function (t) {
          return Array.isArray(t);
        },
        ke = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Se = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        Ce = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Ee = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        _e = {
          x: ke,
          y: ke,
          z: ke,
          rotate: ke,
          rotateX: ke,
          rotateY: ke,
          rotateZ: ke,
          scaleX: Se,
          scaleY: Se,
          scale: Se,
          opacity: Ce,
          backgroundColor: Ce,
          color: Ce,
          default: Se,
        };
      const Te = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Ae(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(X) || [];
        if (!r) return t;
        const i = n.replace(r, "");
        let o = Te.has(e) ? 1 : 0;
        return r !== n && (o *= 100), e + "(" + o + i + ")";
      }
      const Pe = /([a-z-]*)\(.*?\)/g,
        je = Object.assign(Object.assign({}, Pt), {
          getAnimatableNone: (t) => {
            const e = t.match(Pe);
            return e ? e.map(Ae).join(" ") : t;
          },
        });
      var Oe = (0, r.pi)((0, r.pi)({}, J), { transform: Math.round }),
        Ie = {
          borderWidth: ut,
          borderTopWidth: ut,
          borderRightWidth: ut,
          borderBottomWidth: ut,
          borderLeftWidth: ut,
          borderRadius: ut,
          radius: ut,
          borderTopLeftRadius: ut,
          borderTopRightRadius: ut,
          borderBottomRightRadius: ut,
          borderBottomLeftRadius: ut,
          width: ut,
          maxWidth: ut,
          height: ut,
          maxHeight: ut,
          size: ut,
          top: ut,
          right: ut,
          bottom: ut,
          left: ut,
          padding: ut,
          paddingTop: ut,
          paddingRight: ut,
          paddingBottom: ut,
          paddingLeft: ut,
          margin: ut,
          marginTop: ut,
          marginRight: ut,
          marginBottom: ut,
          marginLeft: ut,
          rotate: lt,
          rotateX: lt,
          rotateY: lt,
          rotateZ: lt,
          scale: tt,
          scaleX: tt,
          scaleY: tt,
          scaleZ: tt,
          skew: lt,
          skewX: lt,
          skewY: lt,
          distance: ut,
          translateX: ut,
          translateY: ut,
          translateZ: ut,
          x: ut,
          y: ut,
          z: ut,
          perspective: ut,
          transformPerspective: ut,
          opacity: Q,
          originX: pt,
          originY: pt,
          originZ: ut,
          zIndex: Oe,
          fillOpacity: Q,
          strokeOpacity: Q,
          numOctaves: Oe,
        },
        Me = (0, r.pi)((0, r.pi)({}, Ie), {
          color: kt,
          backgroundColor: kt,
          outlineColor: kt,
          fill: kt,
          stroke: kt,
          borderColor: kt,
          borderTopColor: kt,
          borderRightColor: kt,
          borderBottomColor: kt,
          borderLeftColor: kt,
          filter: je,
          WebkitFilter: je,
        }),
        Re = function (t) {
          return Me[t];
        };
      function Le(t, e) {
        var n,
          r = Re(t);
        return (
          r !== je && (r = Pt),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      var ze = !1,
        De = function (t) {
          return xe(t) ? t[t.length - 1] || 0 : t;
        };
      function Be(t) {
        var e = t.ease,
          n = t.times,
          i = t.yoyo,
          o = t.flip,
          a = t.loop,
          s = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          l = (0, r.pi)({}, s);
        return (
          n && (l.offset = n),
          s.duration && (l.duration = ue(s.duration)),
          s.repeatDelay && (l.repeatDelay = ue(s.repeatDelay)),
          e &&
            (l.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(be)
              : be(e)),
          "tween" === s.type && (l.type = "keyframes"),
          (i || a || o) &&
            (!0,
            i
              ? (l.repeatType = "reverse")
              : a
              ? (l.repeatType = "loop")
              : o && (l.repeatType = "mirror"),
            (l.repeat = a || i || o || s.repeat)),
          "spring" !== s.type && (l.type = "keyframes"),
          l
        );
      }
      function Ne(t, e, n) {
        var i;
        return (
          Array.isArray(e.to) &&
            ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, r.ev)([], (0, r.CR)(t.to), !1)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = (0, r._T)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = xe(e) ? Ee : _e[t] || _e.default),
                  (0, r.pi)({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          (0, r.pi)((0, r.pi)({}, e), Be(t))
        );
      }
      function Ve(t, e, n, i, o) {
        var a,
          s = He(i, t),
          l = null !== (a = s.from) && void 0 !== a ? a : e.get(),
          c = we(t, n);
        "none" === l && c && "string" === typeof n
          ? (l = Le(t, n))
          : Ye(l) && "string" === typeof n
          ? (l = Fe(n))
          : !Array.isArray(n) && Ye(n) && "string" === typeof l && (n = Fe(l));
        var u = we(t, l);
        return (
          "You are trying to animate "
            .concat(t, ' from "')
            .concat(l, '" to "')
            .concat(n, '". ')
            .concat(
              l,
              " is not an animatable value - to enable this animation set "
            )
            .concat(l, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          u && c && !1 !== s.type
            ? function () {
                var i = {
                  from: l,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: o,
                  onUpdate: function (t) {
                    return e.set(t);
                  },
                };
                return "inertia" === s.type || "decay" === s.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: n,
                      max: r,
                      power: i = 0.8,
                      timeConstant: o = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: s = 10,
                      restDelta: l = 1,
                      modifyTarget: c,
                      driver: u,
                      onUpdate: d,
                      onComplete: f,
                      onStop: p,
                    }) {
                      let h;
                      function m(t) {
                        return (
                          (void 0 !== n && t < n) || (void 0 !== r && t > r)
                        );
                      }
                      function v(t) {
                        return void 0 === n
                          ? r
                          : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
                          ? n
                          : r;
                      }
                      function g(t) {
                        null === h || void 0 === h || h.stop(),
                          (h = ce(
                            Object.assign(Object.assign({}, t), {
                              driver: u,
                              onUpdate: (e) => {
                                var n;
                                null === d || void 0 === d || d(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: f,
                              onStop: p,
                            })
                          ));
                      }
                      function y(t) {
                        g(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: a,
                              damping: s,
                              restDelta: l,
                            },
                            t
                          )
                        );
                      }
                      if (m(t)) y({ from: t, velocity: e, to: v(t) });
                      else {
                        let r = i * e + t;
                        "undefined" !== typeof c && (r = c(r));
                        const a = v(r),
                          s = a === n ? -1 : 1;
                        let u, d;
                        const f = (t) => {
                          (u = d),
                            (d = t),
                            (e = A(t - u, (0, _.$B)().delta)),
                            ((1 === s && t > a) || (-1 === s && t < a)) &&
                              y({ from: t, to: a, velocity: e });
                        };
                        g({
                          type: "decay",
                          from: t,
                          velocity: e,
                          timeConstant: o,
                          power: i,
                          restDelta: l,
                          modifyTarget: c,
                          onUpdate: m(r) ? f : void 0,
                        });
                      }
                      return {
                        stop: () =>
                          null === h || void 0 === h ? void 0 : h.stop(),
                      };
                    })((0, r.pi)((0, r.pi)({}, i), s))
                  : ce(
                      (0, r.pi)((0, r.pi)({}, Ne(s, i, t)), {
                        onUpdate: function (t) {
                          var e;
                          i.onUpdate(t),
                            null === (e = s.onUpdate) ||
                              void 0 === e ||
                              e.call(s, t);
                        },
                        onComplete: function () {
                          var t;
                          i.onComplete(),
                            null === (t = s.onComplete) ||
                              void 0 === t ||
                              t.call(s);
                        },
                      })
                    );
              }
            : function () {
                var t,
                  r,
                  i = De(n);
                return (
                  e.set(i),
                  o(),
                  null ===
                    (t = null === s || void 0 === s ? void 0 : s.onUpdate) ||
                    void 0 === t ||
                    t.call(s, i),
                  null ===
                    (r = null === s || void 0 === s ? void 0 : s.onComplete) ||
                    void 0 === r ||
                    r.call(s),
                  { stop: function () {} }
                );
              }
        );
      }
      function Ye(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function Fe(t) {
        return "number" === typeof t ? 0 : Le("", t);
      }
      function He(t, e) {
        return t[e] || t.default || t;
      }
      function Ze(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          ze && (r = { type: !1 }),
          e.start(function (i) {
            var o,
              a,
              s = Ve(t, e, n, r, i),
              l = (function (t, e) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (He(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, t),
              c = function () {
                return (a = s());
              };
            return (
              l ? (o = setTimeout(c, ue(l))) : c(),
              function () {
                clearTimeout(o), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      var Ge = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        We = Ge.length;
      function Ue(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var Xe = qe(0, 0.5, qt),
        $e = qe(0.5, 0.95, Zt);
      function qe(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(G(t, e, r));
        };
      }
      function Ke(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function Je(t, e) {
        Ke(t.x, e.x), Ke(t.y, e.y);
      }
      function Qe(t) {
        return void 0 === t || 1 === t;
      }
      function tn(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !Qe(e) || !Qe(n) || !Qe(r);
      }
      function en(t) {
        return (
          tn(t) ||
          nn(t.x) ||
          nn(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function nn(t) {
        return t && "0%" !== t;
      }
      function rn(t, e, n) {
        return n + e * (t - n);
      }
      function on(t, e, n, r, i) {
        return void 0 !== i && (t = rn(t, i, r)), rn(t, n, r) + e;
      }
      function an(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = on(t.min, e, n, r, i)),
          (t.max = on(t.max, e, n, r, i));
      }
      function sn(t, e) {
        var n = e.x,
          r = e.y;
        an(t.x, n.translate, n.scale, n.originPoint),
          an(t.y, r.translate, r.scale, r.originPoint);
      }
      function ln(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function cn(t, e, n) {
        var i = (0, r.CR)(n, 3),
          o = i[0],
          a = i[1],
          s = i[2],
          l = void 0 !== e[s] ? e[s] : 0.5,
          c = T(t.min, t.max, l);
        an(t, e[o], e[a], c, e.scale);
      }
      var un = ["x", "scaleX", "originX"],
        dn = ["y", "scaleY", "originY"];
      function fn(t, e) {
        cn(t.x, e, un), cn(t.y, e, dn);
      }
      const pn = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        hn = (t) => pn(t) && t.hasOwnProperty("z"),
        mn = (t, e) => Math.abs(t - e);
      function vn(t, e) {
        if (jt(t) && jt(e)) return mn(t, e);
        if (pn(t) && pn(e)) {
          const n = mn(t.x, e.x),
            r = mn(t.y, e.y),
            i = hn(t) && hn(e) ? mn(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      function gn(t) {
        return t.max - t.min;
      }
      function yn(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), vn(t, e) < n
        );
      }
      function bn(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = T(e.min, e.max, t.origin)),
          (t.scale = gn(n) / gn(e)),
          (yn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = T(n.min, n.max, t.origin) - t.originPoint),
          (yn(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function wn(t, e, n, r) {
        bn(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          bn(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function xn(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + gn(e));
      }
      function kn(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + gn(e));
      }
      function Sn(t, e, n) {
        kn(t.x, e.x, n.x), kn(t.y, e.y, n.y);
      }
      function Cn(t, e, n, r, i) {
        return (
          (t = rn((t -= e), 1 / n, r)), void 0 !== i && (t = rn(t, 1 / i, r)), t
        );
      }
      function En(t, e, n, i, o) {
        var a = (0, r.CR)(n, 3),
          s = a[0],
          l = a[1],
          c = a[2];
        !(function (t, e, n, r, i, o, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === a && (a = t),
            ct.test(e) &&
              ((e = parseFloat(e)), (e = T(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = T(o.min, o.max, r);
            t === o && (s -= e),
              (t.min = Cn(t.min, e, n, s, i)),
              (t.max = Cn(t.max, e, n, s, i));
          }
        })(t, e[s], e[l], e[c], e.scale, i, o);
      }
      var _n = ["x", "scaleX", "originX"],
        Tn = ["y", "scaleY", "originY"];
      function An(t, e, n, r) {
        En(
          t.x,
          e,
          _n,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          En(
            t.y,
            e,
            Tn,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function Pn(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function jn(t) {
        return Pn(t.x) && Pn(t.y);
      }
      function On(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var In = (function () {
          function t() {
            this.members = [];
          }
          return (
            (t.prototype.add = function (t) {
              P(this.members, t), t.scheduleRender();
            }),
            (t.prototype.remove = function (t) {
              if (
                (j(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead)
              ) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (t.prototype.relegate = function (t) {
              var e,
                n = this.members.findIndex(function (e) {
                  return t === e;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var i = this.members[r];
                if (!1 !== i.isPresent) {
                  e = i;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (t.prototype.promote = function (t, e) {
              var n,
                r = this.lead;
              t !== r &&
                ((this.prevLead = r),
                (this.lead = t),
                t.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = r),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && r.hide()));
            }),
            (t.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, n, r, i, o;
                null === (n = (e = t.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e),
                  null ===
                    (o =
                      null === (r = t.resumingFrom) || void 0 === r
                        ? void 0
                        : (i = r.options).onExitComplete) ||
                    void 0 === o ||
                    o.call(i);
              });
            }),
            (t.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (t.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            t
          );
        })(),
        Mn = {};
      function Rn(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (n) {
          var a = n.rotate,
            s = n.rotateX,
            l = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            l && (o += "rotateY(".concat(l, "deg) "));
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (o += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")"))
          ? "none"
          : o;
      }
      function Ln(t) {
        return [t("x"), t("y")];
      }
      var zn = ["", "X", "Y", "Z"],
        Dn = ["transformPerspective", "x", "y", "z"];
      function Bn(t, e) {
        return Dn.indexOf(t) - Dn.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return zn.forEach(function (e) {
          return Dn.push(t + e);
        });
      });
      var Nn = new Set(Dn);
      function Vn(t) {
        return Nn.has(t);
      }
      var Yn = new Set(["originX", "originY", "originZ"]);
      function Fn(t) {
        return Yn.has(t);
      }
      var Hn = function (t, e) {
          return t.depth - e.depth;
        },
        Zn = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              P(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              j(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(Hn),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function Gn(t) {
        var e,
          n = R(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      var Wn = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function Un(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          i = t.measureScroll,
          o = t.resetTransform;
        return (function () {
          function t(t, e, i) {
            var o = this;
            void 0 === e && (e = {}),
              void 0 === i && (i = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(tr), o.nodes.forEach(er);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = i ? i.root || i : this),
              (this.path = i
                ? (0, r.ev)((0, r.ev)([], (0, r.CR)(i.path), !1), [i], !1)
                : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var a = 0; a < this.path.length; a++)
              this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Zn());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) || this.eventHandlers.set(t, new O()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var i = this.eventHandlers.get(t);
              null === i ||
                void 0 === i ||
                i.notify.apply(i, (0, r.ev)([], (0, r.CR)(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var i,
                o = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var a = this.options,
                  s = a.layoutId,
                  l = a.layout,
                  c = a.visualElement;
                if (
                  (c && !c.getInstance() && c.mount(t),
                  this.root.nodes.add(this),
                  null === (i = this.parent) ||
                    void 0 === i ||
                    i.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (l || s) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var u,
                    d = function () {
                      return (o.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (o.root.updateBlockedByResize = !0),
                      clearTimeout(u),
                      (u = setTimeout(d, 250)),
                      Wn.hasAnimatedSinceResize &&
                        ((Wn.hasAnimatedSinceResize = !1), o.nodes.forEach(Qn));
                  });
                }
                s && this.root.registerSharedNode(s, this),
                  !1 !== this.options.animate &&
                    c &&
                    (s || l) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        i,
                        a,
                        s,
                        l = t.delta,
                        u = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        f = t.layout;
                      if (o.isTreeAnimationBlocked())
                        return (
                          (o.target = void 0), void (o.relativeTarget = void 0)
                        );
                      var p =
                          null !==
                            (n =
                              null !== (e = o.options.transition) &&
                              void 0 !== e
                                ? e
                                : c.getDefaultTransition()) && void 0 !== n
                            ? n
                            : sr,
                        h = c.getProps().onLayoutAnimationComplete,
                        m = !o.targetLayout || !On(o.targetLayout, f) || d,
                        v = !u && d;
                      (null === (i = o.resumeFrom) || void 0 === i
                        ? void 0
                        : i.instance) ||
                      v ||
                      (u && (m || !o.currentAnimation))
                        ? (o.resumeFrom &&
                            ((o.resumingFrom = o.resumeFrom),
                            (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(l, v),
                          o.startAnimation(
                            (0, r.pi)((0, r.pi)({}, He(p, "layout")), {
                              onComplete: h,
                            })
                          ))
                        : o.isLead() &&
                          (null === (s = (a = o.options).onExitComplete) ||
                            void 0 === s ||
                            s.call(a)),
                        (o.targetLayout = f);
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                _.qY.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(nr));
            }),
            (t.prototype.willUpdate = function (t) {
              var e, n, r;
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  l = a.layout;
                if (void 0 !== s || l) {
                  var c =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === c || void 0 === c
                      ? void 0
                      : c(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(Kn)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(lr),
                  this.potentialNodes.clear()),
                this.nodes.forEach(Jn),
                this.nodes.forEach(Xn),
                this.nodes.forEach($n),
                this.clearAllSnapshots(),
                _.iW.update(),
                _.iW.preRender(),
                _.iW.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(qn), this.sharedNodes.forEach(rr);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              _.ZP.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              _.ZP.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                ur(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              var t;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll();
                  }
                var n = this.measure();
                ur(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = i(this.instance));
            }),
            (t.prototype.resetTransform = function () {
              var t;
              if (o) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !jn(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  a = i !== this.prevTransformTemplateValue;
                e &&
                  (n || en(this.latestValues) || a) &&
                  (o(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (ln(e.x, n.x), ln(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Je(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options;
                r !== this.root &&
                  i &&
                  o.layoutScroll &&
                  (ln(e.x, i.x), ln(e.y, i.y));
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Je(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  fn(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  en(i.latestValues) && fn(n, i.latestValues);
              }
              return en(this.latestValues) && fn(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Je(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && en(i.latestValues)) {
                  tn(i.latestValues) && i.updateSnapshot();
                  var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Je(o, i.measure()),
                    An(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    );
                }
              }
              return en(this.latestValues) && An(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = (0, r.pi)(
                (0, r.pi)((0, r.pi)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              );
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId;
              this.layout &&
                (o || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Sn(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    Je(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target)
                    ? ((e = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      xn(e.x, n.x, r.x),
                      xn(e.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : Je(this.target, this.layout.actual),
                      sn(this.target, this.targetDelta))
                    : Je(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      Sn(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      Je(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !en(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                Je(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    var i, o;
                    void 0 === r && (r = !1);
                    var a = n.length;
                    if (a) {
                      var s, l;
                      e.x = e.y = 1;
                      for (var c = 0; c < a; c++)
                        (l = (s = n[c]).projectionDelta),
                          "contents" !==
                            (null ===
                              (o =
                                null === (i = s.instance) || void 0 === i
                                  ? void 0
                                  : i.style) || void 0 === o
                              ? void 0
                              : o.display) &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              fn(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            l &&
                              ((e.x *= l.x.scale),
                              (e.y *= l.y.scale),
                              sn(t, l)),
                            r && en(s.latestValues) && fn(t, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    l = this.projectionTransform;
                  wn(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = Rn(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === l &&
                      this.treeScale.x === a &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                i = this;
              void 0 === e && (e = !1);
              var o = this.snapshot,
                a =
                  (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                s = (0, r.pi)({}, this.latestValues),
                l = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var c = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                u = null === o || void 0 === o ? void 0 : o.isShared,
                d =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                f = Boolean(
                  u &&
                    !d &&
                    !0 === this.options.crossfade &&
                    !this.path.some(ar)
                );
              (this.mixTargetDelta = function (e) {
                var n,
                  r,
                  o,
                  p,
                  h,
                  m = e / 1e3;
                ir(l.x, t.x, m),
                  ir(l.y, t.y, m),
                  i.setTargetDelta(l),
                  i.relativeTarget &&
                    i.relativeTargetOrigin &&
                    i.layout &&
                    (null === (n = i.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (Sn(c, i.layout.actual, i.relativeParent.layout.actual),
                    (r = i.relativeTarget),
                    (o = i.relativeTargetOrigin),
                    (p = c),
                    (h = m),
                    or(r.x, o.x, p.x, h),
                    or(r.y, o.y, p.y, h)),
                  u &&
                    ((i.animationValues = s),
                    (function (t, e, n, r, i, o) {
                      var a, s, l, c;
                      i
                        ? ((t.opacity = T(
                            0,
                            null !== (a = n.opacity) && void 0 !== a ? a : 1,
                            Xe(r)
                          )),
                          (t.opacityExit = T(
                            null !== (s = e.opacity) && void 0 !== s ? s : 1,
                            0,
                            $e(r)
                          )))
                        : o &&
                          (t.opacity = T(
                            null !== (l = e.opacity) && void 0 !== l ? l : 1,
                            null !== (c = n.opacity) && void 0 !== c ? c : 1,
                            r
                          ));
                      for (var u = 0; u < We; u++) {
                        var d = "border".concat(Ge[u], "Radius"),
                          f = Ue(e, d),
                          p = Ue(n, d);
                        if (
                          (void 0 !== f || void 0 !== p) &&
                          (f || (f = 0),
                          p || (p = 0),
                          "number" === typeof f && "number" === typeof p)
                        ) {
                          var h = Math.max(T(f, p, r), 0);
                          t[d] = h;
                        }
                      }
                      (e.rotate || n.rotate) &&
                        (t.rotate = T(e.rotate || 0, n.rotate || 0, r));
                    })(s, a, i.latestValues, m, f, d)),
                  i.root.scheduleUpdateProjection(),
                  i.scheduleRender();
              }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                i = this;
              null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (_.qY.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = _.ZP.update(function () {
                  (Wn.hasAnimatedSinceResize = !0),
                    (i.currentAnimation = (function (t, e, n) {
                      void 0 === n && (n = {});
                      var r = R(t) ? t : M(t);
                      return (
                        Ze("", r, e, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      (0, r.pi)((0, r.pi)({}, t), {
                        onUpdate: function (e) {
                          var n;
                          i.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            i.completeAnimation();
                        },
                      })
                    )),
                    i.resumingFrom &&
                      (i.resumingFrom.currentAnimation = i.currentAnimation),
                    (i.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues;
              e &&
                n &&
                r &&
                (Je(e, n),
                fn(e, i),
                wn(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, i;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new In()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < zn.length; r++) {
                  var i = "rotate" + zn[r];
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0));
                }
                if (e) {
                  for (var i in (null === t || void 0 === t || t.syncRender(),
                  n))
                    t.setStaticValue(i, n[i]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, n, r, i, o, a;
              void 0 === t && (t = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var l =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = Gn(t.pointerEvents) || ""),
                  (s.transform = l ? l(this.latestValues, "") : "none"),
                  s
                );
              var c = this.getLead();
              if (!this.projectionDelta || !this.layout || !c.target) {
                var u = {};
                return (
                  this.options.layoutId &&
                    ((u.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (u.pointerEvents = Gn(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !en(this.latestValues) &&
                    ((u.transform = l ? l({}, "") : "none"),
                    (this.hasProjected = !1)),
                  u
                );
              }
              var d = c.animationValues || c.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = Rn(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                l && (s.transform = l(d, s.transform));
              var f = this.projectionDelta,
                p = f.x,
                h = f.y;
              for (var m in ((s.transformOrigin = ""
                .concat(100 * p.origin, "% ")
                .concat(100 * h.origin, "% 0")),
              c.animationValues
                ? (s.opacity =
                    c === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    c === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              Mn))
                if (void 0 !== d[m]) {
                  var v = Mn[m],
                    g = v.correct,
                    y = v.applyTo,
                    b = g(d[m], c);
                  if (y) for (var w = y.length, x = 0; x < w; x++) s[y[x]] = b;
                  else s[m] = b;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    c === this ? Gn(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(Kn),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function Xn(t) {
        t.updateLayout();
      }
      function $n(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            l = a.measured;
          "size" === t.options.animationType
            ? Ln(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = gn(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              Ln(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = gn(s[t]);
                e.max = e.min + n;
              });
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          wn(c, s, o.layout);
          var u = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          o.isShared
            ? wn(u, t.applyTransform(l, !0), o.measured)
            : wn(u, s, o.layout);
          var d = !jn(c),
            f = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var p = t.relativeParent,
              h = p.snapshot,
              m = p.layout;
            if (h && m) {
              var v = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Sn(v, o.layout, h.layout);
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Sn(g, s, m.actual), On(v, g) || (f = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: o,
            delta: u,
            layoutDelta: c,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f,
          });
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        t.options.transition = void 0;
      }
      function qn(t) {
        t.clearSnapshot();
      }
      function Kn(t) {
        t.clearMeasurements();
      }
      function Jn(t) {
        t.resetTransform();
      }
      function Qn(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function tr(t) {
        t.resolveTargetDelta();
      }
      function er(t) {
        t.calcProjection();
      }
      function nr(t) {
        t.resetRotation();
      }
      function rr(t) {
        t.removeLeadSnapshot();
      }
      function ir(t, e, n) {
        (t.translate = T(e.translate, 0, n)),
          (t.scale = T(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function or(t, e, n, r) {
        (t.min = T(e.min, n.min, r)), (t.max = T(e.max, n.max, r));
      }
      function ar(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var sr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function lr(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break;
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        i && t.mount(i, !0);
      }
      function cr(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function ur(t) {
        cr(t.x), cr(t.y);
      }
      var dr = 1;
      var fr = n(5364),
        pr = (0, i.createContext)({});
      var hr = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (0, r.ZT)(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(i.Component);
      function mr(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          o = t.projectionNodeConstructor,
          f = t.useRender,
          h = t.useVisualState,
          g = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] &&
                  ("projectionNodeConstructor" === e
                    ? (a.projectionNodeConstructor = t[e])
                    : (a[e].Component = t[e]));
            })(e),
          (0, i.forwardRef)(function (t, e) {
            var y = (function (t) {
              var e,
                n = t.layoutId,
                r =
                  null === (e = (0, i.useContext)(fr.p)) || void 0 === e
                    ? void 0
                    : e.id;
              return r && void 0 !== n ? r + "-" + n : n;
            })(t);
            t = (0, r.pi)((0, r.pi)({}, t), { layoutId: y });
            var b = (0, i.useContext)(u),
              w = null,
              x = S(t),
              k = b.isStatic
                ? void 0
                : (0, E.h)(function () {
                    if (Wn.hasEverUpdated) return dr++;
                  }),
              C = h(t, b.isStatic);
            return (
              !b.isStatic &&
                p &&
                ((x.visualElement = m(g, C, (0, r.pi)((0, r.pi)({}, b), t), n)),
                (function (t, e, n, r) {
                  var o,
                    a = e.layoutId,
                    s = e.layout,
                    l = e.drag,
                    c = e.dragConstraints,
                    u = e.layoutScroll,
                    d = (0, i.useContext)(pr);
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(
                      t,
                      n.getLatestValues(),
                      null === (o = n.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    n.projection.setOptions({
                      layoutId: a,
                      layout: s,
                      alwaysMeasureLayout: Boolean(l) || (c && v(c)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender();
                      },
                      animationType: "string" === typeof s ? s : "both",
                      initialPromotionConfig: d,
                      layoutScroll: u,
                    }));
                })(k, t, x.visualElement, o || a.projectionNodeConstructor),
                (w = (function (t, e, n) {
                  var o = [];
                  if (((0, i.useContext)(s), !e)) return null;
                  for (var u = 0; u < c; u++) {
                    var d = l[u],
                      f = a[d],
                      p = f.isEnabled,
                      h = f.Component;
                    p(t) &&
                      h &&
                      o.push(
                        i.createElement(
                          h,
                          (0, r.pi)({ key: d }, t, { visualElement: e })
                        )
                      );
                  }
                  return o;
                })(t, x.visualElement))),
              i.createElement(
                hr,
                {
                  visualElement: x.visualElement,
                  props: (0, r.pi)((0, r.pi)({}, b), t),
                },
                w,
                i.createElement(
                  d.Provider,
                  { value: x },
                  f(
                    g,
                    t,
                    k,
                    (function (t, e, n) {
                      return (0, i.useCallback)(
                        function (r) {
                          var i;
                          r &&
                            (null === (i = t.mount) ||
                              void 0 === i ||
                              i.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : v(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(C, x.visualElement, e),
                    C,
                    b.isStatic,
                    x.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function vr(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), mr(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var gr = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function yr(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(gr.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      function br(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          Vn(t) ||
          Fn(t) ||
          ((n || void 0 !== r) && (!!Mn[t] || "opacity" === t))
        );
      }
      var wr = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function xr(t) {
        return t.startsWith("--");
      }
      var kr = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t;
      };
      function Sr(t, e, n, r) {
        var i,
          o = t.style,
          a = t.vars,
          s = t.transform,
          l = t.transformKeys,
          c = t.transformOrigin;
        l.length = 0;
        var u = !1,
          d = !1,
          f = !0;
        for (var p in e) {
          var h = e[p];
          if (xr(p)) a[p] = h;
          else {
            var m = Ie[p],
              v = kr(h, m);
            if (Vn(p)) {
              if (((u = !0), (s[p] = v), l.push(p), !f)) continue;
              h !== (null !== (i = m.default) && void 0 !== i ? i : 0) &&
                (f = !1);
            } else Fn(p) ? ((c[p] = v), (d = !0)) : (o[p] = v);
          }
        }
        u
          ? (o.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                l = e.allowTransformNone,
                c = void 0 === l || l,
                u = "";
              o.sort(Bn);
              for (var d = !1, f = o.length, p = 0; p < f; p++) {
                var h = o[p];
                (u += "".concat(wr[h] || h, "(").concat(i[h], ") ")),
                  "z" === h && (d = !0);
              }
              return (
                !d && s ? (u += "translateZ(0)") : (u = u.trim()),
                r ? (u = r(i, n ? "" : u)) : c && n && (u = "none"),
                u
              );
            })(t, n, f, r))
          : r && (o.transform = r({}, "")),
          d &&
            (o.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                i = void 0 === r ? "50%" : r,
                o = t.originZ,
                a = void 0 === o ? 0 : o;
              return "".concat(n, " ").concat(i, " ").concat(a);
            })(c));
      }
      var Cr = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Er(t, e, n) {
        for (var r in e) R(e[r]) || br(r, n) || (t[r] = e[r]);
      }
      function _r(t, e, n) {
        var o = {};
        return (
          Er(o, t.style || {}, t),
          Object.assign(
            o,
            (function (t, e, n) {
              var o = t.transformTemplate;
              return (0, i.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  Sr(t, e, { enableHardwareAcceleration: !n }, o);
                  var i = t.vars,
                    a = t.style;
                  return (0, r.pi)((0, r.pi)({}, i), a);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (o = t.transformValues(o)),
          o
        );
      }
      function Tr(t, e, n) {
        var r = {},
          i = _r(t, e, n);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var Ar = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function Pr(t) {
        return Ar.has(t);
      }
      var jr = function (t) {
        return !Pr(t);
      };
      try {
        var Or = require("@emotion/is-prop-valid").default;
        jr = function (t) {
          return t.startsWith("on") ? !Pr(t) : Or(t);
        };
      } catch (ra) {}
      function Ir(t, e, n) {
        return "string" === typeof t ? t : ut.transform(e + n * t);
      }
      var Mr = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Rr = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Lr(t, e, n, i) {
        var o = e.attrX,
          a = e.attrY,
          s = e.originX,
          l = e.originY,
          c = e.pathLength,
          u = e.pathSpacing,
          d = void 0 === u ? 1 : u,
          f = e.pathOffset,
          p = void 0 === f ? 0 : f;
        Sr(
          t,
          (0, r._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          i
        ),
          (t.attrs = t.style),
          (t.style = {});
        var h = t.attrs,
          m = t.style,
          v = t.dimensions;
        h.transform && (v && (m.transform = h.transform), delete h.transform),
          v &&
            (void 0 !== s || void 0 !== l || m.transform) &&
            (m.transformOrigin = (function (t, e, n) {
              var r = Ir(e, t.x, t.width),
                i = Ir(n, t.y, t.height);
              return "".concat(r, " ").concat(i);
            })(v, void 0 !== s ? s : 0.5, void 0 !== l ? l : 0.5)),
          void 0 !== o && (h.x = o),
          void 0 !== a && (h.y = a),
          void 0 !== c &&
            (function (t, e, n, r, i) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                (t.pathLength = 1);
              var o = i ? Mr : Rr;
              t[o.offset] = ut.transform(-r);
              var a = ut.transform(e),
                s = ut.transform(n);
              t[o.array] = "".concat(a, " ").concat(s);
            })(h, c, d, p, !1);
      }
      var zr = function () {
        return (0, r.pi)(
          (0, r.pi)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Dr(t, e) {
        var n = (0, i.useMemo)(
          function () {
            var n = zr();
            return (
              Lr(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              (0, r.pi)((0, r.pi)({}, n.attrs), {
                style: (0, r.pi)({}, n.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var o = {};
          Er(o, t.style, t), (n.style = (0, r.pi)((0, r.pi)({}, o), n.style));
        }
        return n;
      }
      function Br(t) {
        void 0 === t && (t = !1);
        return function (e, n, o, a, s, l) {
          var c = s.latestValues,
            u = (yr(e) ? Dr : Tr)(n, c, l),
            d = (function (t, e, n) {
              var r = {};
              for (var i in t)
                (jr(i) ||
                  (!0 === n && Pr(i)) ||
                  (!e && !Pr(i)) ||
                  (t.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = t[i]);
              return r;
            })(n, "string" === typeof e, t),
            f = (0, r.pi)((0, r.pi)((0, r.pi)({}, d), u), { ref: a });
          return o && (f["data-projection-id"] = o), (0, i.createElement)(e, f);
        };
      }
      var Nr = /([a-z])([A-Z])/g,
        Vr = function (t) {
          return t.replace(Nr, "$1-$2").toLowerCase();
        };
      function Yr(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a]);
      }
      var Fr = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function Hr(t, e) {
        for (var n in (Yr(t, e), e.attrs))
          t.setAttribute(Fr.has(n) ? n : Vr(n), e.attrs[n]);
      }
      function Zr(t) {
        var e = t.style,
          n = {};
        for (var r in e) (R(e[r]) || br(r, t)) && (n[r] = e[r]);
        return n;
      }
      function Gr(t) {
        var e = Zr(t);
        for (var n in t) {
          if (R(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function Wr(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      function Ur(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          s = { latestValues: $r(e, n, r, i), renderState: o() };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var Xr = function (t) {
        return function (e, n) {
          var r = (0, i.useContext)(d),
            o = (0, i.useContext)(f.O);
          return n
            ? Ur(t, e, r, o)
            : (0, E.h)(function () {
                return Ur(t, e, r, o);
              });
        };
      };
      function $r(t, e, n, i) {
        var o = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          s = i(t);
        for (var l in s) o[l] = Gn(s[l]);
        var c = t.initial,
          u = t.animate,
          d = x(t),
          f = k(t);
        e &&
          f &&
          !d &&
          !1 !== t.inherit &&
          ((null !== c && void 0 !== c) || (c = e.initial),
          (null !== u && void 0 !== u) || (u = e.animate));
        var p = a || !1 === c,
          h = p ? u : c;
        h &&
          "boolean" !== typeof h &&
          !Wr(h) &&
          (Array.isArray(h) ? h : [h]).forEach(function (e) {
            var n = b(t, e);
            if (n) {
              var i = n.transitionEnd;
              n.transition;
              var a = (0, r._T)(n, ["transitionEnd", "transition"]);
              for (var s in a) {
                var l = a[s];
                if (Array.isArray(l)) l = l[p ? l.length - 1 : 0];
                null !== l && (o[s] = l);
              }
              for (var s in i) o[s] = i[s];
            }
          });
        return o;
      }
      var qr,
        Kr = {
          useVisualState: Xr({
            scrapeMotionValuesFromProps: Gr,
            createRenderState: zr,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Lr(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                Hr(e, r);
            },
          }),
        },
        Jr = {
          useVisualState: Xr({
            scrapeMotionValuesFromProps: Zr,
            createRenderState: Cr,
          }),
        };
      function Qr(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function ti(t, e, n, r) {
        (0, i.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return Qr(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function ei(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function ni(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(qr || (qr = {}));
      var ri = { pageX: 0, pageY: 0 };
      function ii(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || ri;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function oi(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function ai(t, e) {
        return (
          void 0 === e && (e = "page"), { point: ni(t) ? ii(t, e) : oi(t, e) }
        );
      }
      var si = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, ai(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        li = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        ci = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function ui(t) {
        return p && null === window.onpointerdown
          ? t
          : p && null === window.ontouchstart
          ? ci[t]
          : p && null === window.onmousedown
          ? li[t]
          : t;
      }
      function di(t, e, n, r) {
        return Qr(t, ui(e), si(n, "pointerdown" === e), r);
      }
      function fi(t, e, n, r) {
        return ti(t, ui(e), n && si(n, "pointerdown" === e), r);
      }
      function pi(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var hi = pi("dragHorizontal"),
        mi = pi("dragVertical");
      function vi(t) {
        var e = !1;
        if ("y" === t) e = mi();
        else if ("x" === t) e = hi();
        else {
          var n = hi(),
            r = mi();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function gi() {
        var t = vi(!0);
        return !t || (t(), !1);
      }
      function yi(t, e, n) {
        return function (r, i) {
          var o;
          ei(r) &&
            !gi() &&
            (null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(qr.Hover, e),
            null === n || void 0 === n || n(r, i));
        };
      }
      var bi = function (t, e) {
          return !!e && (t === e || bi(t, e.parentElement));
        },
        wi = n(5411);
      var xi = new WeakMap(),
        ki = new WeakMap(),
        Si = function (t) {
          var e;
          null === (e = xi.get(t.target)) || void 0 === e || e(t);
        },
        Ci = function (t) {
          t.forEach(Si);
        };
      function Ei(t, e, n) {
        var i = (function (t) {
          var e = t.root,
            n = (0, r._T)(t, ["root"]),
            i = e || document;
          ki.has(i) || ki.set(i, {});
          var o = ki.get(i),
            a = JSON.stringify(n);
          return (
            o[a] ||
              (o[a] = new IntersectionObserver(Ci, (0, r.pi)({ root: e }, n))),
            o[a]
          );
        })(e);
        return (
          xi.set(t, n),
          i.observe(t),
          function () {
            xi.delete(t), i.unobserve(t);
          }
        );
      }
      var _i = { some: 0, all: 1 };
      function Ti(t, e, n, r) {
        var o = r.root,
          a = r.margin,
          s = r.amount,
          l = void 0 === s ? "some" : s,
          c = r.once;
        (0, i.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: "number" === typeof l ? l : _i[l],
              };
              return Ei(n.getInstance(), r, function (t) {
                var r,
                  i = t.isIntersecting;
                if (
                  e.isInView !== i &&
                  ((e.isInView = i), !c || i || !e.hasEnteredView)
                ) {
                  i && (e.hasEnteredView = !0),
                    null === (r = n.animationState) ||
                      void 0 === r ||
                      r.setActive(qr.InView, i);
                  var o = n.getProps(),
                    a = i ? o.onViewportEnter : o.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, o, a, l]
        );
      }
      function Ai(t, e, n) {
        (0, i.useEffect)(
          function () {
            t &&
              requestAnimationFrame(function () {
                var t;
                e.hasEnteredView = !0;
                var r = n.getProps().onViewportEnter;
                null === r || void 0 === r || r(null),
                  null === (t = n.animationState) ||
                    void 0 === t ||
                    t.setActive(qr.InView, !0);
              });
          },
          [t]
        );
      }
      var Pi = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        ji = {
          inView: Pi(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              l = (0, i.useRef)({ hasEnteredView: !1, isInView: !1 }),
              c = Boolean(n || r || o);
            s.once && l.current.hasEnteredView && (c = !1),
              ("undefined" === typeof IntersectionObserver ? Ai : Ti)(
                c,
                l.current,
                e,
                s
              );
          }),
          tap: Pi(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = e || n || r || o,
              l = (0, i.useRef)(!1),
              c = (0, i.useRef)(null);
            function u() {
              var t;
              null === (t = c.current) || void 0 === t || t.call(c),
                (c.current = null);
            }
            function d() {
              var t;
              return (
                u(),
                (l.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(qr.Tap, !1),
                !gi()
              );
            }
            function f(t, n) {
              d() &&
                (bi(a.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function p(t, e) {
              d() && (null === r || void 0 === r || r(t, e));
            }
            fi(
              a,
              "pointerdown",
              s
                ? function (t, e) {
                    var r;
                    u(),
                      l.current ||
                        ((l.current = !0),
                        (c.current = It(
                          di(window, "pointerup", f),
                          di(window, "pointercancel", p)
                        )),
                        null === (r = a.animationState) ||
                          void 0 === r ||
                          r.setActive(qr.Tap, !0),
                        null === n || void 0 === n || n(t, e));
                  }
                : void 0
            ),
              (0, wi.z)(u);
          }),
          focus: Pi(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            ti(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(qr.Focus, !0);
                  }
                : void 0
            ),
              ti(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(qr.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Pi(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            fi(i, "pointerenter", e || r ? yi(i, !0, e) : void 0),
              fi(i, "pointerleave", n || r ? yi(i, !1, n) : void 0);
          }),
        };
      function Oi() {
        var t = (0, i.useContext)(f.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = Ri();
        (0, i.useEffect)(function () {
          return r(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(o);
              },
            ]
          : [!0];
      }
      var Ii = 0,
        Mi = function () {
          return Ii++;
        },
        Ri = function () {
          return (0, E.h)(Mi);
        };
      function Li(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var zi = function (t) {
          return /^0[^.\s]+$/.test(t);
        },
        Di = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        Bi = [
          J,
          ut,
          ct,
          lt,
          ft,
          dt,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        Ni = function (t) {
          return Bi.find(Di(t));
        },
        Vi = (0, r.ev)((0, r.ev)([], (0, r.CR)(Bi), !1), [kt, Pt], !1),
        Yi = function (t) {
          return Vi.find(Di(t));
        };
      function Fi(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, M(n));
      }
      function Hi(t, e) {
        var n = w(t, e),
          i = n ? t.makeTargetAnimatable(n, !1) : {},
          o = i.transitionEnd,
          a = void 0 === o ? {} : o;
        i.transition;
        var s = (0, r._T)(i, ["transitionEnd", "transition"]);
        for (var l in (s = (0, r.pi)((0, r.pi)({}, s), a))) {
          Fi(t, l, De(s[l]));
        }
      }
      function Zi(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function Gi(t, e, n) {
        var i;
        void 0 === n && (n = {});
        var o = w(t, e, n.custom),
          a = (o || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (s = n.transitionOverride);
        var l = o
            ? function () {
                return Wi(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size
          )
            ? function (i) {
                void 0 === i && (i = 0);
                var o = s.delayChildren,
                  a = void 0 === o ? 0 : o,
                  l = s.staggerChildren,
                  c = s.staggerDirection;
                return (function (t, e, n, i, o, a) {
                  void 0 === n && (n = 0);
                  void 0 === i && (i = 0);
                  void 0 === o && (o = 1);
                  var s = [],
                    l = (t.variantChildren.size - 1) * i,
                    c =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * i;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), l - t * i;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(Ui)
                      .forEach(function (t, i) {
                        s.push(
                          Gi(
                            t,
                            e,
                            (0, r.pi)((0, r.pi)({}, a), { delay: n + c(i) })
                          ).then(function () {
                            return t.notifyAnimationComplete(e);
                          })
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, e, a + i, l, c, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = s.when;
        if (u) {
          var d = (0, r.CR)("beforeChildren" === u ? [l, c] : [c, l], 2),
            f = d[0],
            p = d[1];
          return f().then(p);
        }
        return Promise.all([l(), c(n.delay)]);
      }
      function Wi(t, e, n) {
        var i,
          o = void 0 === n ? {} : n,
          a = o.delay,
          s = void 0 === a ? 0 : a,
          l = o.transitionOverride,
          c = o.type,
          u = t.makeTargetAnimatable(e),
          d = u.transition,
          f = void 0 === d ? t.getDefaultTransition() : d,
          p = u.transitionEnd,
          h = (0, r._T)(u, ["transition", "transitionEnd"]);
        l && (f = l);
        var m = [],
          v =
            c &&
            (null === (i = t.animationState) || void 0 === i
              ? void 0
              : i.getState()[c]);
        for (var g in h) {
          var y = t.getValue(g),
            b = h[g];
          if (!(!y || void 0 === b || (v && Xi(v, g)))) {
            var w = Ze(g, y, b, (0, r.pi)({ delay: s }, f));
            m.push(w);
          }
        }
        return Promise.all(m).then(function () {
          p && Hi(t, p);
        });
      }
      function Ui(t, e) {
        return t.sortNodePosition(e);
      }
      function Xi(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          i = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), i;
      }
      var $i = [
          qr.Animate,
          qr.InView,
          qr.Focus,
          qr.Hover,
          qr.Tap,
          qr.Drag,
          qr.Exit,
        ],
        qi = (0, r.ev)([], (0, r.CR)($i), !1).reverse(),
        Ki = $i.length;
      function Ji(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var i = e.map(function (e) {
                    return Gi(t, e, n);
                  });
                  r = Promise.all(i);
                } else if ("string" === typeof e) r = Gi(t, e, n);
                else {
                  var o = "function" === typeof e ? w(t, e, n.custom) : e;
                  r = Wi(t, o, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function Qi(t) {
        var e = Ji(t),
          n = (function () {
            var t;
            return (
              ((t = {})[qr.Animate] = to(!0)),
              (t[qr.InView] = to()),
              (t[qr.Hover] = to()),
              (t[qr.Tap] = to()),
              (t[qr.Drag] = to()),
              (t[qr.Focus] = to()),
              (t[qr.Exit] = to()),
              t
            );
          })(),
          i = {},
          o = !0,
          a = function (e, n) {
            var i = w(t, n);
            if (i) {
              i.transition;
              var o = i.transitionEnd,
                a = (0, r._T)(i, ["transition", "transitionEnd"]);
              e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), a), o);
            }
            return e;
          };
        function s(s, l) {
          for (
            var c,
              u = t.getProps(),
              d = t.getVariantContext(!0) || {},
              f = [],
              p = new Set(),
              h = {},
              m = 1 / 0,
              v = function (e) {
                var i = qi[e],
                  v = n[i],
                  b = null !== (c = u[i]) && void 0 !== c ? c : d[i],
                  w = y(b),
                  x = i === l ? v.isActive : null;
                !1 === x && (m = e);
                var k = b === d[i] && b !== u[i] && w;
                if (
                  (k && o && t.manuallyAnimateOnMount && (k = !1),
                  (v.protectedKeys = (0, r.pi)({}, h)),
                  (!v.isActive && null === x) ||
                    (!b && !v.prevProp) ||
                    Wr(b) ||
                    "boolean" === typeof b)
                )
                  return "continue";
                var S = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (g(e)) return !Li(e, t);
                    return !1;
                  })(v.prevProp, b),
                  C = S || (i === l && v.isActive && !k && w) || (e > m && w),
                  E = Array.isArray(b) ? b : [b],
                  _ = E.reduce(a, {});
                !1 === x && (_ = {});
                var T = v.prevResolvedValues,
                  A = void 0 === T ? {} : T,
                  P = (0, r.pi)((0, r.pi)({}, A), _),
                  j = function (t) {
                    (C = !0), p.delete(t), (v.needsAnimating[t] = !0);
                  };
                for (var O in P) {
                  var I = _[O],
                    M = A[O];
                  h.hasOwnProperty(O) ||
                    (I !== M
                      ? xe(I) && xe(M)
                        ? !Li(I, M) || S
                          ? j(O)
                          : (v.protectedKeys[O] = !0)
                        : void 0 !== I
                        ? j(O)
                        : p.add(O)
                      : void 0 !== I && p.has(O)
                      ? j(O)
                      : (v.protectedKeys[O] = !0));
                }
                (v.prevProp = b),
                  (v.prevResolvedValues = _),
                  v.isActive && (h = (0, r.pi)((0, r.pi)({}, h), _)),
                  o && t.blockInitialAnimation && (C = !1),
                  C &&
                    !k &&
                    f.push.apply(
                      f,
                      (0, r.ev)(
                        [],
                        (0, r.CR)(
                          E.map(function (t) {
                            return {
                              animation: t,
                              options: (0, r.pi)({ type: i }, s),
                            };
                          })
                        ),
                        !1
                      )
                    );
              },
              b = 0;
            b < Ki;
            b++
          )
            v(b);
          if (((i = (0, r.pi)({}, h)), p.size)) {
            var w = {};
            p.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (w[e] = n);
            }),
              f.push({ animation: w });
          }
          var x = Boolean(f.length);
          return (
            o && !1 === u.initial && !t.manuallyAnimateOnMount && (x = !1),
            (o = !1),
            x ? e(f) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== i[t];
          },
          animateChanges: s,
          setActive: function (e, r, i) {
            var o;
            return n[e].isActive === r
              ? Promise.resolve()
              : (null === (o = t.variantChildren) ||
                  void 0 === o ||
                  o.forEach(function (t) {
                    var n;
                    return null === (n = t.animationState) || void 0 === n
                      ? void 0
                      : n.setActive(e, r);
                  }),
                (n[e].isActive = r),
                s(i, e));
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function to(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var eo = {
          animation: Pi(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = Qi(e)),
              Wr(n) &&
                (0, i.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: Pi(function (t) {
            var e = t.custom,
              n = t.visualElement,
              o = (0, r.CR)(Oi(), 2),
              a = o[0],
              s = o[1],
              l = (0, i.useContext)(f.O);
            (0, i.useEffect)(
              function () {
                var t, r;
                n.isPresent = a;
                var i =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(qr.Exit, !a, {
                        custom:
                          null !==
                            (r =
                              null === l || void 0 === l ? void 0 : l.custom) &&
                          void 0 !== r
                            ? r
                            : e,
                      });
                !a && (null === i || void 0 === i || i.then(s));
              },
              [a]
            );
          }),
        },
        no = (function () {
          function t(t, e, n) {
            var i = this,
              o = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (i.lastMoveEvent && i.lastMoveEventInfo) {
                  var t = oo(i.lastMoveEventInfo, i.history),
                    e = null !== i.startEvent,
                    n = vn(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var o = t.point,
                      a = (0, _.$B)().timestamp;
                    i.history.push(
                      (0, r.pi)((0, r.pi)({}, o), { timestamp: a })
                    );
                    var s = i.handlers,
                      l = s.onStart,
                      c = s.onMove;
                    e ||
                      (l && l(i.lastMoveEvent, t),
                      (i.startEvent = i.lastMoveEvent)),
                      c && c(i.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                (i.lastMoveEvent = t),
                  (i.lastMoveEventInfo = ro(e, i.transformPagePoint)),
                  ei(t) && 0 === t.buttons
                    ? i.handlePointerUp(t, e)
                    : _.ZP.update(i.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, e) {
                i.end();
                var n = i.handlers,
                  r = n.onEnd,
                  o = n.onSessionEnd,
                  a = oo(ro(e, i.transformPagePoint), i.history);
                i.startEvent && r && r(t, a), o && o(t, a);
              }),
              !(ni(t) && t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = o);
              var a = ro(ai(t), this.transformPagePoint),
                s = a.point,
                l = (0, _.$B)().timestamp;
              this.history = [(0, r.pi)((0, r.pi)({}, s), { timestamp: l })];
              var c = e.onSessionStart;
              c && c(t, oo(a, this.history)),
                (this.removeListeners = It(
                  di(window, "pointermove", this.handlePointerMove),
                  di(window, "pointerup", this.handlePointerUp),
                  di(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                _.qY.update(this.updatePoint);
            }),
            t
          );
        })();
      function ro(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function io(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function oo(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: io(n, so(e)),
          offset: io(n, ao(e)),
          velocity: lo(e, 0.1),
        };
      }
      function ao(t) {
        return t[0];
      }
      function so(t) {
        return t[t.length - 1];
      }
      function lo(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, i = so(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > ue(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function co(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function uo(t, e) {
        var n,
          i = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((i = (n = (0, r.CR)([o, i], 2))[0]), (o = n[1])),
          { min: i, max: o }
        );
      }
      var fo = 0.35;
      function po(t, e, n) {
        return { min: ho(t, e), max: ho(t, n) };
      }
      function ho(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function mo(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function vo(t, e) {
        return mo(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var go = new WeakMap(),
        yo = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                i = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new no(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        i && n.snapToCursor(ai(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        i = n.getProps(),
                        o = i.drag,
                        a = i.dragPropagation,
                        s = i.onDragStart;
                      (!o ||
                        a ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = vi(o)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        Ln(function (t) {
                          var e,
                            r,
                            i = n.getAxisMotionValue(t).get() || 0;
                          if (ct.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            if (o) i = gn(o) * (parseFloat(i) / 100);
                          }
                          n.originPoint[t] = i;
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(qr.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var l = e.offset;
                        if (o && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10);
                              var n = null;
                              Math.abs(t.y) > e
                                ? (n = "y")
                                : Math.abs(t.x) > e && (n = "x");
                              return n;
                            })(l)),
                            void (
                              null !== n.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", e.point, l),
                          n.updateAxis("y", e.point, l),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null === i || void 0 === i || i(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(qr.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && bo(t, r, this.currentDirection)) {
                var i = this.getAxisMotionValue(t),
                  o = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  (o = (function (t, e, n) {
                    var r = e.min,
                      i = e.max;
                    return (
                      void 0 !== r && t < r
                        ? (t = n ? T(r, t, n.min) : Math.max(t, r))
                        : void 0 !== i &&
                          t > i &&
                          (t = n ? T(i, t, n.max) : Math.min(t, i)),
                      t
                    );
                  })(o, this.constraints[t], this.elastic[t])),
                  i.set(o);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                r = e.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                o = this.constraints;
              n && v(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !i) &&
                    (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right;
                      return { x: co(t.x, r, o), y: co(t.y, n, i) };
                    })(i.actual, n)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = fo),
                    !1 === t ? (t = 0) : !0 === t && (t = fo),
                    { x: po(t, "left", "right"), y: po(t, "top", "bottom") }
                  );
                })(r)),
                o !== this.constraints &&
                  i &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  Ln(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(i.actual[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !v(e)) return !1;
              var r = e.current,
                i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var o = (function (t, e, n) {
                  var r = vo(t, n),
                    i = e.scroll;
                  return i && (ln(r.x, i.x), ln(r.y, i.y)), r;
                })(r, i.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: uo(t.x, e.x), y: uo(t.y, e.y) };
                })(i.layout.actual, o);
              if (n) {
                var s = n(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return {
                      top: n.min,
                      right: e.max,
                      bottom: n.max,
                      left: e.min,
                    };
                  })(a)
                );
                (this.hasMutatedConstraints = !!s), s && (a = mo(s));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                l = n.dragSnapToOrigin,
                c = n.onDragTransitionEnd,
                u = this.constraints || {},
                d = Ln(function (n) {
                  var c;
                  if (bo(n, i, e.currentDirection)) {
                    var d =
                      null !==
                        (c = null === u || void 0 === u ? void 0 : u[n]) &&
                      void 0 !== c
                        ? c
                        : {};
                    l && (d = { min: 0, max: 0 });
                    var f = a ? 200 : 1e6,
                      p = a ? 40 : 1e7,
                      h = (0, r.pi)(
                        (0, r.pi)(
                          {
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: f,
                            bounceDamping: p,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        d
                      );
                    return e.startAxisValueAnimation(n, h);
                  }
                });
              return Promise.all(d).then(c);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return Ze(t, this.getAxisMotionValue(t), 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              Ln(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase(),
                i = this.visualElement.getProps()[r];
              return (
                i ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              Ln(function (n) {
                if (bo(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      s = o.max;
                    i.set(t[n] - T(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection;
              if (v(i) && o && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                Ln(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r = n.get();
                    a[t] = (function (t, e) {
                      var n = 0.5,
                        r = gn(t),
                        i = gn(e);
                      return (
                        i > r
                          ? (n = G(e.min, e.max - r, t.min))
                          : r > i && (n = G(t.min, t.max - i, e.min)),
                        z(0, 1, n)
                      );
                    })({ min: r, max: r }, e.constraints[t]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = o.root) || void 0 === t || t.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  Ln(function (t) {
                    if (bo(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        i = e.constraints[t],
                        o = i.min,
                        s = i.max;
                      n.set(T(o, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              go.set(this.visualElement, this);
              var n = di(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t);
                  }
                ),
                r = function () {
                  v(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
              var a = Qr(window, "resize", function () {
                e.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (Ln(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), o();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                l = t.dragConstraints,
                c = void 0 !== l && l,
                u = t.dragElastic,
                d = void 0 === u ? fo : u,
                f = t.dragMomentum,
                p = void 0 === f || f;
              return (0, r.pi)((0, r.pi)({}, t), {
                drag: n,
                dragDirectionLock: o,
                dragPropagation: s,
                dragConstraints: c,
                dragElastic: d,
                dragMomentum: p,
              });
            }),
            t
          );
        })();
      function bo(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var wo = {
          pan: Pi(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || r || o,
              l = (0, i.useRef)(null),
              c = (0, i.useContext)(u).transformPagePoint,
              d = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (l.current = null), r && r(t, e);
                },
              };
            (0, i.useEffect)(function () {
              null !== l.current && l.current.updateHandlers(d);
            }),
              fi(
                a,
                "pointerdown",
                s &&
                  function (t) {
                    l.current = new no(t, d, { transformPagePoint: c });
                  }
              ),
              (0, wi.z)(function () {
                return l.current && l.current.end();
              });
          }),
          drag: Pi(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = (0, E.h)(function () {
                return new yo(n);
              });
            (0, i.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, i.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        xo = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var ko = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            i = t.build,
            o = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            l = t.render,
            c = t.readValueFromInstance,
            u = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            f = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var p = t.parent,
              h = t.props,
              m = t.presenceId,
              v = t.blockInitialAnimation,
              g = t.visualState;
            void 0 === e && (e = {});
            var b,
              w,
              S = !1,
              C = g.latestValues,
              E = g.renderState,
              T = (function () {
                var t = xo.map(function () {
                    return new O();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function (t) {
                      xo.forEach(function (r) {
                        var i,
                          o = "on" + r,
                          a = t[o];
                        null === (i = e[r]) || void 0 === i || i.call(e),
                          a && (e[r] = n[o](a));
                      });
                    },
                  };
                return (
                  t.forEach(function (t, e) {
                    (n["on" + xo[e]] = function (e) {
                      return t.add(e);
                    }),
                      (n["notify" + xo[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        t.notify.apply(t, (0, r.ev)([], (0, r.CR)(e), !1));
                      });
                  }),
                  n
                );
              })(),
              A = new Map(),
              P = new Map(),
              j = {},
              I = (0, r.pi)({}, C);
            function L() {
              b && S && (z(), l(b, E, h.style, H.projection));
            }
            function z() {
              i(H, E, C, e, h);
            }
            function D() {
              T.notifyUpdate(C);
            }
            var B = f(h);
            for (var N in B) {
              var V = B[N];
              void 0 !== C[N] && R(V) && V.set(C[N], !1);
            }
            var Y = x(h),
              F = k(h),
              H = (0, r.pi)(
                (0, r.pi)(
                  {
                    treeType: n,
                    current: null,
                    depth: p ? p.depth + 1 : 0,
                    parent: p,
                    children: new Set(),
                    presenceId: m,
                    variantChildren: F ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === p || void 0 === p ? void 0 : p.isMounted()
                    ),
                    blockInitialAnimation: v,
                    isMounted: function () {
                      return Boolean(b);
                    },
                    mount: function (t) {
                      (S = !0),
                        (b = H.current = t),
                        H.projection && H.projection.mount(t),
                        F &&
                          p &&
                          !Y &&
                          (w =
                            null === p || void 0 === p
                              ? void 0
                              : p.addVariantChild(H)),
                        null === p || void 0 === p || p.children.add(H),
                        H.setProps(h);
                    },
                    unmount: function () {
                      var t;
                      null === (t = H.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        _.qY.update(D),
                        _.qY.render(L),
                        P.forEach(function (t) {
                          return t();
                        }),
                        null === w || void 0 === w || w(),
                        null === p || void 0 === p || p.children.delete(H),
                        T.clearAllListeners(),
                        (b = void 0),
                        (S = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = H.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return d && n === t.treeType
                        ? d(H.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return F
                        ? H
                        : null === p || void 0 === p
                        ? void 0
                        : p.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return h.layoutId;
                    },
                    getInstance: function () {
                      return b;
                    },
                    getStaticValue: function (t) {
                      return C[t];
                    },
                    setStaticValue: function (t, e) {
                      return (C[t] = e);
                    },
                    getLatestValues: function () {
                      return C;
                    },
                    setVisibility: function (t) {
                      H.isVisible !== t &&
                        ((H.isVisible = t), H.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), a(H, t, h, e);
                    },
                    measureViewportBox: function () {
                      return s(b, h);
                    },
                    addValue: function (t, e) {
                      H.hasValue(t) && H.removeValue(t),
                        A.set(t, e),
                        (C[t] = e.get()),
                        (function (t, e) {
                          var n = e.onChange(function (e) {
                              (C[t] = e), h.onUpdate && _.ZP.update(D, !1, !0);
                            }),
                            r = e.onRenderRequest(H.scheduleRender);
                          P.set(t, function () {
                            n(), r();
                          });
                        })(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      A.delete(t),
                        null === (e = P.get(t)) || void 0 === e || e(),
                        P.delete(t),
                        delete C[t],
                        u(t, E);
                    },
                    hasValue: function (t) {
                      return A.has(t);
                    },
                    getValue: function (t, e) {
                      var n = A.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = M(e)), H.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return A.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = C[t]) && void 0 !== n
                        ? n
                        : c(b, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      I[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(h, t);
                        if (void 0 !== e && !R(e)) return e;
                      }
                      return I[t];
                    },
                  },
                  T
                ),
                {
                  build: function () {
                    return z(), E;
                  },
                  scheduleRender: function () {
                    _.ZP.render(L, !1, !0);
                  },
                  syncRender: L,
                  setProps: function (t) {
                    (h = t),
                      T.updatePropListeners(t),
                      (j = (function (t, e, n) {
                        var r;
                        for (var i in e) {
                          var o = e[i],
                            a = n[i];
                          if (R(o)) t.addValue(i, o);
                          else if (R(a)) t.addValue(i, M(o));
                          else if (a !== o)
                            if (t.hasValue(i)) {
                              var s = t.getValue(i);
                              !s.hasAnimated && s.set(o);
                            } else
                              t.addValue(
                                i,
                                M(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(H, f(h), j));
                  },
                  getProps: function () {
                    return h;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = h.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return h.transition;
                  },
                  getTransformPagePoint: function () {
                    return h.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === p || void 0 === p
                        ? void 0
                        : p.getVariantContext();
                    if (!Y) {
                      var e =
                        (null === p || void 0 === p
                          ? void 0
                          : p.getVariantContext()) || {};
                      return void 0 !== h.initial && (e.initial = h.initial), e;
                    }
                    for (var n = {}, r = 0; r < Co; r++) {
                      var i = So[r],
                        o = h[i];
                      (y(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return H;
          };
        },
        So = (0, r.ev)(["initial"], (0, r.CR)($i), !1),
        Co = So.length;
      function Eo(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var _o = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function To(t, e, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          );
        var i = (0, r.CR)(
            (function (t) {
              var e = _o.exec(t);
              if (!e) return [,];
              var n = (0, r.CR)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = i[0],
          a = i[1];
        if (o) {
          var s = window.getComputedStyle(e).getPropertyValue(o);
          return s ? s.trim() : Eo(a) ? To(a, e, n + 1) : a;
        }
      }
      var Ao,
        Po = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        jo = function (t) {
          return Po.has(t);
        },
        Oo = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        Io = function (t) {
          return t === J || t === ut;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Ao || (Ao = {}));
      var Mo = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        Ro = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return Mo(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? Mo(a[1], t) : 0;
          };
        },
        Lo = new Set(["x", "y", "z"]),
        zo = Dn.filter(function (t) {
          return !Lo.has(t);
        });
      var Do = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = void 0 === r ? "0" : r,
              o = e.paddingRight,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = void 0 === r ? "0" : r,
              o = e.paddingBottom,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Ro(4, 13),
          y: Ro(5, 14),
        },
        Bo = function (t, e, n, i) {
          void 0 === n && (n = {}),
            void 0 === i && (i = {}),
            (e = (0, r.pi)({}, e)),
            (i = (0, r.pi)({}, i));
          var o = Object.keys(e).filter(jo),
            a = [],
            s = !1,
            l = [];
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r);
              if (t.hasValue(r)) {
                var c,
                  u = n[r],
                  d = Ni(u),
                  f = e[r];
                if (xe(f)) {
                  var p = f.length,
                    h = null === f[0] ? 1 : 0;
                  (u = f[h]), (d = Ni(u));
                  for (var m = h; m < p; m++)
                    c ? Ni(f[m]) : (c = Ni(f[m])) === d || (Io(d) && Io(c));
                } else c = Ni(f);
                if (d !== c)
                  if (Io(d) && Io(c)) {
                    var v = o.get();
                    "string" === typeof v && o.set(parseFloat(v)),
                      "string" === typeof f
                        ? (e[r] = parseFloat(f))
                        : Array.isArray(f) &&
                          c === ut &&
                          (e[r] = f.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === c || void 0 === c ? void 0 : c.transform) &&
                    (0 === u || 0 === f)
                      ? 0 === u
                        ? o.set(c.transform(u))
                        : (e[r] = d.transform(f))
                      : (s ||
                          ((a = (function (t) {
                            var e = [];
                            return (
                              zo.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (s = !0)),
                        l.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                        Oo(o, f));
              }
            }),
            l.length)
          ) {
            var c = (function (t, e, n) {
              var r = e.measureViewportBox(),
                i = e.getInstance(),
                o = getComputedStyle(i),
                a = o.display,
                s = {};
              "none" === a && e.setStaticValue("display", t.display || "block"),
                n.forEach(function (t) {
                  s[t] = Do[t](r, o);
                }),
                e.syncRender();
              var l = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = e.getValue(n);
                  Oo(r, s[n]), (t[n] = Do[n](l, o));
                }),
                t
              );
            })(e, t, l);
            return (
              a.length &&
                a.forEach(function (e) {
                  var n = (0, r.CR)(e, 2),
                    i = n[0],
                    o = n[1];
                  t.getValue(i).set(o);
                }),
              t.syncRender(),
              { target: c, transitionEnd: i }
            );
          }
          return { target: e, transitionEnd: i };
        };
      function No(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(jo);
        })(e)
          ? Bo(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var Vo = function (t, e, n, i) {
        var o = (function (t, e, n) {
          var i,
            o = (0, r._T)(e, []),
            a = t.getInstance();
          if (!(a instanceof Element)) return { target: o, transitionEnd: n };
          for (var s in (n && (n = (0, r.pi)({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Eo(e)) {
              var n = To(e, a);
              n && t.set(n);
            }
          }),
          o)) {
            var l = o[s];
            if (Eo(l)) {
              var c = To(l, a);
              c &&
                ((o[s] = c),
                n && ((null !== (i = n[s]) && void 0 !== i) || (n[s] = l)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, i);
        return No(t, (e = o.target), n, (i = o.transitionEnd));
      };
      var Yo = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (Vn(e)) {
              var n = Re(e);
              return (n && n.default) || 0;
            }
            var r,
              i = ((r = t), window.getComputedStyle(r));
            return (xr(e) ? i.getPropertyValue(e) : i[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return vo(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, i) {
            var o = n.transformValues;
            void 0 === i && (i = !0);
            var a = e.transition,
              s = e.transitionEnd,
              l = (0, r._T)(e, ["transition", "transitionEnd"]),
              c = (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var a in t)
                  o[a] =
                    null !== (r = Zi(a, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(l, a || {}, t);
            if ((o && (s && (s = o(s)), l && (l = o(l)), c && (c = o(c))), i)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  l = s.length;
                if (l)
                  for (var c = 0; c < l; c++) {
                    var u = s[c],
                      d = e[u],
                      f = null;
                    Array.isArray(d) && (f = d[0]),
                      null === f &&
                        (f =
                          null !==
                            (i =
                              null !== (r = n[u]) && void 0 !== r
                                ? r
                                : t.readValue(u)) && void 0 !== i
                            ? i
                            : e[u]),
                      void 0 !== f &&
                        null !== f &&
                        ("string" === typeof f &&
                        (/^\-?\d*\.?\d+$/.test(f) || zi(f))
                          ? (f = parseFloat(f))
                          : !Yi(f) && Pt.test(d) && (f = Le(u, d)),
                        t.addValue(u, M(f)),
                        (null !== (o = (a = n)[u]) && void 0 !== o) ||
                          (a[u] = f),
                        t.setBaseTarget(u, f));
                  }
              })(t, l, c);
              var u = Vo(t, l, c, s);
              (s = u.transitionEnd), (l = u.target);
            }
            return (0, r.pi)({ transition: a, transitionEnd: s }, l);
          },
          scrapeMotionValuesFromProps: Zr,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              Sr(e, n, r, i.transformTemplate);
          },
          render: Yr,
        },
        Fo = ko(Yo),
        Ho = ko(
          (0, r.pi)((0, r.pi)({}, Yo), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return Vn(e)
                ? (null === (n = Re(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = Fr.has(e) ? e : Vr(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: Gr,
            build: function (t, e, n, r, i) {
              Lr(e, n, r, i.transformTemplate);
            },
            render: Hr,
          })
        ),
        Zo = function (t, e) {
          return yr(t)
            ? Ho(e, { enableHardwareAcceleration: !1 })
            : Fo(e, { enableHardwareAcceleration: !0 });
        };
      function Go(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var Wo = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" === typeof t) {
              if (!ut.test(t)) return t;
              t = parseFloat(t);
            }
            var n = Go(t, e.target.x),
              r = Go(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Uo = "_$css",
        Xo = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              i = t,
              o = t.includes("var("),
              a = [];
            o &&
              (t = t.replace(_o, function (t) {
                return a.push(t), Uo;
              }));
            var s = Pt.parse(t);
            if (s.length > 5) return i;
            var l = Pt.createTransformer(t),
              c = "number" !== typeof s[0] ? 1 : 0,
              u = r.x.scale * n.x,
              d = r.y.scale * n.y;
            (s[0 + c] /= u), (s[1 + c] /= d);
            var f = T(u, d, 0.5);
            "number" === typeof s[2 + c] && (s[2 + c] /= f),
              "number" === typeof s[3 + c] && (s[3 + c] /= f);
            var p = l(s);
            if (o) {
              var h = 0;
              p = p.replace(Uo, function () {
                var t = a[h];
                return h++, t;
              });
            }
            return p;
          },
        },
        $o = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.ZT)(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                n = this.props,
                i = n.visualElement,
                o = n.layoutGroup,
                a = n.switchLayoutGroup,
                s = n.layoutId,
                l = i.projection;
              (t = qo),
                Object.assign(Mn, t),
                l &&
                  ((null === o || void 0 === o ? void 0 : o.group) &&
                    o.group.add(l),
                  (null === a || void 0 === a ? void 0 : a.register) &&
                    s &&
                    a.register(l),
                  l.root.didUpdate(),
                  l.addEventListener("animationComplete", function () {
                    e.safeToRemove();
                  }),
                  l.setOptions(
                    (0, r.pi)((0, r.pi)({}, l.options), {
                      onExitComplete: function () {
                        return e.safeToRemove();
                      },
                    })
                  )),
                (Wn.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                s = i.projection;
              return s
                ? ((s.isPresent = a),
                  o || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        _.ZP.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                i = e.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(i));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null === t || void 0 === t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(i.Component);
      var qo = {
          borderRadius: (0, r.pi)((0, r.pi)({}, Wo), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: Wo,
          borderTopRightRadius: Wo,
          borderBottomLeftRadius: Wo,
          borderBottomRightRadius: Wo,
          boxShadow: Xo,
        },
        Ko = {
          measureLayout: function (t) {
            var e = (0, r.CR)(Oi(), 2),
              n = e[0],
              o = e[1],
              a = (0, i.useContext)(fr.p);
            return i.createElement(
              $o,
              (0, r.pi)({}, t, {
                layoutGroup: a,
                switchLayoutGroup: (0, i.useContext)(pr),
                isPresent: n,
                safeToRemove: o,
              })
            );
          },
        },
        Jo = Un({
          attachResizeListener: function (t, e) {
            return (
              t.addEventListener("resize", e, { passive: !0 }),
              function () {
                return t.removeEventListener("resize", e);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        Qo = { current: void 0 },
        ta = Un({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!Qo.current) {
              var t = new Jo(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (Qo.current = t);
            }
            return Qo.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : "none";
          },
        }),
        ea = (0, r.pi)((0, r.pi)((0, r.pi)((0, r.pi)({}, eo), ji), wo), Ko),
        na = vr(function (t, e) {
          return (function (t, e, n, i, o) {
            var a = e.forwardMotionProps,
              s = void 0 !== a && a,
              l = yr(t) ? Kr : Jr;
            return (0,
            r.pi)((0, r.pi)({}, l), { preloadedFeatures: n, useRender: Br(s), createVisualElement: i, projectionNodeConstructor: o, Component: t });
          })(t, e, ea, Zo, ta);
        });
    },
    6681: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return i;
        },
      });
      var r = n(7294);
      function i(t) {
        var e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    5411: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(7294);
      function i(t) {
        return (0, r.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
    },
    4735: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return p;
        },
        ZP: function () {
          return b;
        },
        iW: function () {
          return h;
        },
        $B: function () {
          return y;
        },
      });
      const r = (1 / 60) * 1e3,
        i =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(i()), r);
      let a = !0,
        s = !1,
        l = !1;
      const c = { delta: 0, timestamp: 0 },
        u = ["read", "update", "preRender", "render", "postRender"],
        d = u.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1;
              const a = new WeakSet(),
                s = {
                  schedule: (t, o = !1, s = !1) => {
                    const l = s && i,
                      c = l ? e : n;
                    return (
                      o && a.add(t),
                      -1 === c.indexOf(t) &&
                        (c.push(t), l && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (l) => {
                    if (i) o = !0;
                    else {
                      if (
                        ((i = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n];
                          r(l), a.has(r) && (s.schedule(r), t());
                        }
                      (i = !1), o && ((o = !1), s.process(l));
                    }
                  },
                };
              return s;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        f = u.reduce((t, e) => {
          const n = d[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (s || g(), n.schedule(t, e, r))), t
          );
        }, {}),
        p = u.reduce((t, e) => ((t[e] = d[e].cancel), t), {}),
        h = u.reduce((t, e) => ((t[e] = () => d[e].process(c)), t), {}),
        m = (t) => d[t].process(c),
        v = (t) => {
          (s = !1),
            (c.delta = a ? r : Math.max(Math.min(t - c.timestamp, 40), 1)),
            (c.timestamp = t),
            (l = !0),
            u.forEach(m),
            (l = !1),
            s && ((a = !1), o(v));
        },
        g = () => {
          (s = !0), (a = !0), l || o(v);
        },
        y = () => c;
      var b = f;
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(1118), e(9898);
    });
    var n = t.O();
    _N_E = n;
  },
]);
