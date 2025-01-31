(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(require("clappr"));
  else if (typeof define === "function" && define.amd)
    define(["clappr"], factory);
  else if (typeof exports === "object")
    exports["DashShakaPlayback"] = factory(require("clappr"));
  else root["DashShakaPlayback"] = factory(root["Clappr"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE_clappr__) {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "dist/";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(
      (__webpack_require__.s = "./src/clappr-dash-shaka-playback.js")
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ "./node_modules/shaka-player/dist/shaka-player.compiled.js":
        /*!*****************************************************************!*\
  !*** ./node_modules/shaka-player/dist/shaka-player.compiled.js ***!
  \*****************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */ (function (global) {
            (function () {
              var innerGlobal = typeof window != "undefined" ? window : global;
              var exportTo = {};
              (function (window, global) {
                var p,
                  aa =
                    "function" == typeof Object.defineProperties
                      ? Object.defineProperty
                      : function (b, c, d) {
                          b != Array.prototype &&
                            b != Object.prototype &&
                            (b[c] = d.value);
                        },
                  ca =
                    "undefined" != typeof window && window === this
                      ? this
                      : "undefined" != typeof global && null != global
                      ? global
                      : this;
                function da() {
                  da = function () {};
                  ca.Symbol || (ca.Symbol = ea);
                }
                var ea = (function () {
                  var b = 0;
                  return function (c) {
                    return "jscomp_symbol_" + (c || "") + b++;
                  };
                })();
                function fa() {
                  da();
                  var b = ca.Symbol.iterator;
                  b || (b = ca.Symbol.iterator = ca.Symbol("iterator"));
                  "function" != typeof Array.prototype[b] &&
                    aa(Array.prototype, b, {
                      configurable: !0,
                      writable: !0,
                      value: function () {
                        return ha(this);
                      },
                    });
                  fa = function () {};
                }
                function ha(b) {
                  var c = 0;
                  return ia(function () {
                    return c < b.length
                      ? { done: !1, value: b[c++] }
                      : { done: !0 };
                  });
                }
                function ia(b) {
                  fa();
                  b = { next: b };
                  b[ca.Symbol.iterator] = function () {
                    return this;
                  };
                  return b;
                }
                function r(b) {
                  fa();
                  var c = b[Symbol.iterator];
                  return c ? c.call(b) : ha(b);
                }
                function ka(b, c) {
                  if (c) {
                    for (
                      var d = ca, e = b.split("."), f = 0;
                      f < e.length - 1;
                      f++
                    ) {
                      var g = e[f];
                      g in d || (d[g] = {});
                      d = d[g];
                    }
                    e = e[e.length - 1];
                    f = d[e];
                    g = c(f);
                    g != f &&
                      null != g &&
                      aa(d, e, { configurable: !0, writable: !0, value: g });
                  }
                }
                ka("Promise", function (b) {
                  function c(b) {
                    this.b = 0;
                    this.g = void 0;
                    this.a = [];
                    var c = this.c();
                    try {
                      b(c.resolve, c.reject);
                    } catch (l) {
                      c.reject(l);
                    }
                  }
                  function d() {
                    this.a = null;
                  }
                  function e(b) {
                    return b instanceof c
                      ? b
                      : new c(function (c) {
                          c(b);
                        });
                  }
                  if (b) return b;
                  d.prototype.b = function (b) {
                    null == this.a && ((this.a = []), this.f());
                    this.a.push(b);
                  };
                  d.prototype.f = function () {
                    var b = this;
                    this.c(function () {
                      b.h();
                    });
                  };
                  var f = ca.setTimeout;
                  d.prototype.c = function (b) {
                    f(b, 0);
                  };
                  d.prototype.h = function () {
                    for (; this.a && this.a.length; ) {
                      var b = this.a;
                      this.a = [];
                      for (var c = 0; c < b.length; ++c) {
                        var d = b[c];
                        b[c] = null;
                        try {
                          d();
                        } catch (m) {
                          this.g(m);
                        }
                      }
                    }
                    this.a = null;
                  };
                  d.prototype.g = function (b) {
                    this.c(function () {
                      throw b;
                    });
                  };
                  c.prototype.c = function () {
                    function b(b) {
                      return function (e) {
                        d || ((d = !0), b.call(c, e));
                      };
                    }
                    var c = this,
                      d = !1;
                    return { resolve: b(this.o), reject: b(this.f) };
                  };
                  c.prototype.o = function (b) {
                    if (b === this)
                      this.f(
                        new TypeError("A Promise cannot resolve to itself")
                      );
                    else if (b instanceof c) this.v(b);
                    else {
                      a: switch (typeof b) {
                        case "object":
                          var d = null != b;
                          break a;
                        case "function":
                          d = !0;
                          break a;
                        default:
                          d = !1;
                      }
                      d ? this.m(b) : this.h(b);
                    }
                  };
                  c.prototype.m = function (b) {
                    var c = void 0;
                    try {
                      c = b.then;
                    } catch (l) {
                      this.f(l);
                      return;
                    }
                    "function" == typeof c ? this.w(c, b) : this.h(b);
                  };
                  c.prototype.f = function (b) {
                    this.i(2, b);
                  };
                  c.prototype.h = function (b) {
                    this.i(1, b);
                  };
                  c.prototype.i = function (b, c) {
                    if (0 != this.b)
                      throw Error(
                        "Cannot settle(" +
                          b +
                          ", " +
                          c +
                          "): Promise already settled in state" +
                          this.b
                      );
                    this.b = b;
                    this.g = c;
                    this.j();
                  };
                  c.prototype.j = function () {
                    if (null != this.a) {
                      for (var b = 0; b < this.a.length; ++b) g.b(this.a[b]);
                      this.a = null;
                    }
                  };
                  var g = new d();
                  c.prototype.v = function (b) {
                    var c = this.c();
                    b.Vb(c.resolve, c.reject);
                  };
                  c.prototype.w = function (b, c) {
                    var d = this.c();
                    try {
                      b.call(c, d.resolve, d.reject);
                    } catch (m) {
                      d.reject(m);
                    }
                  };
                  c.prototype.then = function (b, d) {
                    function e(b, c) {
                      return "function" == typeof b
                        ? function (c) {
                            try {
                              f(b(c));
                            } catch (C) {
                              g(C);
                            }
                          }
                        : c;
                    }
                    var f,
                      g,
                      h = new c(function (b, c) {
                        f = b;
                        g = c;
                      });
                    this.Vb(e(b, f), e(d, g));
                    return h;
                  };
                  c.prototype["catch"] = function (b) {
                    return this.then(void 0, b);
                  };
                  c.prototype.Vb = function (b, c) {
                    function d() {
                      switch (e.b) {
                        case 1:
                          b(e.g);
                          break;
                        case 2:
                          c(e.g);
                          break;
                        default:
                          throw Error("Unexpected state: " + e.b);
                      }
                    }
                    var e = this;
                    null == this.a ? g.b(d) : this.a.push(d);
                  };
                  c.resolve = e;
                  c.reject = function (b) {
                    return new c(function (c, d) {
                      d(b);
                    });
                  };
                  c.race = function (b) {
                    return new c(function (c, d) {
                      for (var f = r(b), g = f.next(); !g.done; g = f.next())
                        e(g.value).Vb(c, d);
                    });
                  };
                  c.all = function (b) {
                    var d = r(b),
                      f = d.next();
                    return f.done
                      ? e([])
                      : new c(function (b, c) {
                          function g(c) {
                            return function (d) {
                              h[c] = d;
                              k--;
                              0 == k && b(h);
                            };
                          }
                          var h = [],
                            k = 0;
                          do
                            h.push(void 0),
                              k++,
                              e(f.value).Vb(g(h.length - 1), c),
                              (f = d.next());
                          while (!f.done);
                        });
                  };
                  return c;
                });
                ka("Promise.prototype.finally", function (b) {
                  return b
                    ? b
                    : function (b) {
                        return this.then(
                          function (c) {
                            return Promise.resolve(b()).then(function () {
                              return c;
                            });
                          },
                          function (c) {
                            return Promise.resolve(b()).then(function () {
                              throw c;
                            });
                          }
                        );
                      };
                });
                function la(b) {
                  function c(c) {
                    return b.next(c);
                  }
                  function d(c) {
                    return b["throw"](c);
                  }
                  return new Promise(function (e, f) {
                    function g(b) {
                      b.done
                        ? e(b.value)
                        : Promise.resolve(b.value).then(c, d).then(g, f);
                    }
                    g(b.next());
                  });
                }
                function t(b) {
                  return la(b());
                }
                var ma =
                    "function" == typeof Object.create
                      ? Object.create
                      : function (b) {
                          function c() {}
                          c.prototype = b;
                          return new c();
                        },
                  oa;
                if ("function" == typeof Object.setPrototypeOf)
                  oa = Object.setPrototypeOf;
                else {
                  var pa;
                  a: {
                    var qa = { je: !0 },
                      ra = {};
                    try {
                      ra.__proto__ = qa;
                      pa = ra.je;
                      break a;
                    } catch (b) {}
                    pa = !1;
                  }
                  oa = pa
                    ? function (b, c) {
                        b.__proto__ = c;
                        if (b.__proto__ !== c)
                          throw new TypeError(b + " is not extensible");
                        return b;
                      }
                    : null;
                }
                var sa = oa;
                function ta() {
                  this.g = !1;
                  this.c = null;
                  this.s = void 0;
                  this.l = 1;
                  this.b = this.f = 0;
                  this.i = this.a = null;
                }
                function ua(b) {
                  if (b.g) throw new TypeError("Generator is already running");
                  b.g = !0;
                }
                ta.prototype.h = function (b) {
                  this.s = b;
                };
                function va(b, c) {
                  b.a = { sd: c, Dd: !0 };
                  b.l = b.f || b.b;
                }
                ta.prototype["return"] = function (b) {
                  this.a = { return: b };
                  this.l = this.b;
                };
                function u(b, c, d) {
                  b.l = d;
                  return { value: c };
                }
                ta.prototype.A = function (b) {
                  this.l = b;
                };
                function v(b) {
                  b.l = 0;
                }
                function ya(b, c, d) {
                  b.f = c;
                  void 0 != d && (b.b = d);
                }
                function za(b, c) {
                  b.f = 0;
                  b.b = c || 0;
                }
                function Aa(b, c) {
                  b.l = c;
                  b.f = 0;
                }
                function Da(b) {
                  b.f = 0;
                  var c = b.a.sd;
                  b.a = null;
                  return c;
                }
                function Ea(b) {
                  b.i = [b.a];
                  b.f = 0;
                  b.b = 0;
                }
                function Fa(b, c) {
                  var d = b.i.splice(0)[0];
                  (d = b.a = b.a || d)
                    ? d.Dd
                      ? (b.l = b.f || b.b)
                      : void 0 != d.A && b.b < d.A
                      ? ((b.l = d.A), (b.a = null))
                      : (b.l = b.b)
                    : (b.l = c);
                }
                function Ga(b) {
                  this.a = new ta();
                  this.b = b;
                }
                function Ha(b, c) {
                  ua(b.a);
                  var d = b.a.c;
                  if (d)
                    return La(
                      b,
                      "return" in d
                        ? d["return"]
                        : function (b) {
                            return { value: b, done: !0 };
                          },
                      c,
                      b.a["return"]
                    );
                  b.a["return"](c);
                  return Ma(b);
                }
                function La(b, c, d, e) {
                  try {
                    var f = c.call(b.a.c, d);
                    if (!(f instanceof Object))
                      throw new TypeError(
                        "Iterator result " + f + " is not an object"
                      );
                    if (!f.done) return (b.a.g = !1), f;
                    var g = f.value;
                  } catch (h) {
                    return (b.a.c = null), va(b.a, h), Ma(b);
                  }
                  b.a.c = null;
                  e.call(b.a, g);
                  return Ma(b);
                }
                function Ma(b) {
                  for (; b.a.l; )
                    try {
                      var c = b.b(b.a);
                      if (c) return (b.a.g = !1), { value: c.value, done: !1 };
                    } catch (d) {
                      (b.a.s = void 0), va(b.a, d);
                    }
                  b.a.g = !1;
                  if (b.a.a) {
                    c = b.a.a;
                    b.a.a = null;
                    if (c.Dd) throw c.sd;
                    return { value: c["return"], done: !0 };
                  }
                  return { value: void 0, done: !0 };
                }
                function Na(b) {
                  this.next = function (c) {
                    ua(b.a);
                    b.a.c
                      ? (c = La(b, b.a.c.next, c, b.a.h))
                      : (b.a.h(c), (c = Ma(b)));
                    return c;
                  };
                  this["throw"] = function (c) {
                    ua(b.a);
                    b.a.c
                      ? (c = La(b, b.a.c["throw"], c, b.a.h))
                      : (va(b.a, c), (c = Ma(b)));
                    return c;
                  };
                  this["return"] = function (c) {
                    return Ha(b, c);
                  };
                  fa();
                  this[Symbol.iterator] = function () {
                    return this;
                  };
                }
                function y(b, c) {
                  Na.prototype = b.prototype;
                  return new Na(new Ga(c));
                }
                function Oa(b, c) {
                  return Object.prototype.hasOwnProperty.call(b, c);
                }
                ka("WeakMap", function (b) {
                  function c(b) {
                    this.a = (g += Math.random() + 1).toString();
                    if (b) {
                      da();
                      fa();
                      b = r(b);
                      for (var c; !(c = b.next()).done; )
                        (c = c.value), this.set(c[0], c[1]);
                    }
                  }
                  function d(b) {
                    Oa(b, f) || aa(b, f, { value: {} });
                  }
                  function e(b) {
                    var c = Object[b];
                    c &&
                      (Object[b] = function (b) {
                        d(b);
                        return c(b);
                      });
                  }
                  if (
                    (function () {
                      if (!b || !Object.seal) return !1;
                      try {
                        var c = Object.seal({}),
                          d = Object.seal({}),
                          e = new b([
                            [c, 2],
                            [d, 3],
                          ]);
                        if (2 != e.get(c) || 3 != e.get(d)) return !1;
                        e["delete"](c);
                        e.set(d, 4);
                        return !e.has(c) && 4 == e.get(d);
                      } catch (m) {
                        return !1;
                      }
                    })()
                  )
                    return b;
                  var f = "$jscomp_hidden_" + Math.random();
                  e("freeze");
                  e("preventExtensions");
                  e("seal");
                  var g = 0;
                  c.prototype.set = function (b, c) {
                    d(b);
                    if (!Oa(b, f)) throw Error("WeakMap key fail: " + b);
                    b[f][this.a] = c;
                    return this;
                  };
                  c.prototype.get = function (b) {
                    return Oa(b, f) ? b[f][this.a] : void 0;
                  };
                  c.prototype.has = function (b) {
                    return Oa(b, f) && Oa(b[f], this.a);
                  };
                  c.prototype["delete"] = function (b) {
                    return Oa(b, f) && Oa(b[f], this.a)
                      ? delete b[f][this.a]
                      : !1;
                  };
                  return c;
                });
                ka("Map", function (b) {
                  function c() {
                    var b = {};
                    return (b.Aa = b.next = b.head = b);
                  }
                  function d(b, c) {
                    var d = b.a;
                    return ia(function () {
                      if (d) {
                        for (; d.head != b.a; ) d = d.Aa;
                        for (; d.next != d.head; )
                          return (d = d.next), { done: !1, value: c(d) };
                        d = null;
                      }
                      return { done: !0, value: void 0 };
                    });
                  }
                  function e(b, c) {
                    var d = c && typeof c;
                    "object" == d || "function" == d
                      ? g.has(c)
                        ? (d = g.get(c))
                        : ((d = "" + ++h), g.set(c, d))
                      : (d = "p_" + c);
                    var e = b.b[d];
                    if (e && Oa(b.b, d))
                      for (var f = 0; f < e.length; f++) {
                        var k = e[f];
                        if ((c !== c && k.key !== k.key) || c === k.key)
                          return { id: d, list: e, index: f, X: k };
                      }
                    return { id: d, list: e, index: -1, X: void 0 };
                  }
                  function f(b) {
                    this.b = {};
                    this.a = c();
                    this.size = 0;
                    if (b) {
                      b = r(b);
                      for (var d; !(d = b.next()).done; )
                        (d = d.value), this.set(d[0], d[1]);
                    }
                  }
                  if (
                    (function () {
                      if (
                        !b ||
                        "function" != typeof b ||
                        !b.prototype.entries ||
                        "function" != typeof Object.seal
                      )
                        return !1;
                      try {
                        var c = Object.seal({ x: 4 }),
                          d = new b(r([[c, "s"]]));
                        if (
                          "s" != d.get(c) ||
                          1 != d.size ||
                          d.get({ x: 4 }) ||
                          d.set({ x: 4 }, "t") != d ||
                          2 != d.size
                        )
                          return !1;
                        var e = d.entries(),
                          f = e.next();
                        if (f.done || f.value[0] != c || "s" != f.value[1])
                          return !1;
                        f = e.next();
                        return f.done ||
                          4 != f.value[0].x ||
                          "t" != f.value[1] ||
                          !e.next().done
                          ? !1
                          : !0;
                      } catch (q) {
                        return !1;
                      }
                    })()
                  )
                    return b;
                  da();
                  fa();
                  var g = new WeakMap();
                  f.prototype.set = function (b, c) {
                    var d = e(this, b);
                    d.list || (d.list = this.b[d.id] = []);
                    d.X
                      ? (d.X.value = c)
                      : ((d.X = {
                          next: this.a,
                          Aa: this.a.Aa,
                          head: this.a,
                          key: b,
                          value: c,
                        }),
                        d.list.push(d.X),
                        (this.a.Aa.next = d.X),
                        (this.a.Aa = d.X),
                        this.size++);
                    return this;
                  };
                  f.prototype["delete"] = function (b) {
                    b = e(this, b);
                    return b.X && b.list
                      ? (b.list.splice(b.index, 1),
                        b.list.length || delete this.b[b.id],
                        (b.X.Aa.next = b.X.next),
                        (b.X.next.Aa = b.X.Aa),
                        (b.X.head = null),
                        this.size--,
                        !0)
                      : !1;
                  };
                  f.prototype.clear = function () {
                    this.b = {};
                    this.a = this.a.Aa = c();
                    this.size = 0;
                  };
                  f.prototype.has = function (b) {
                    return !!e(this, b).X;
                  };
                  f.prototype.get = function (b) {
                    return (b = e(this, b).X) && b.value;
                  };
                  f.prototype.entries = function () {
                    return d(this, function (b) {
                      return [b.key, b.value];
                    });
                  };
                  f.prototype.keys = function () {
                    return d(this, function (b) {
                      return b.key;
                    });
                  };
                  f.prototype.values = function () {
                    return d(this, function (b) {
                      return b.value;
                    });
                  };
                  f.prototype.forEach = function (b, c) {
                    for (var d = this.entries(), e; !(e = d.next()).done; )
                      (e = e.value), b.call(c, e[1], e[0], this);
                  };
                  f.prototype[Symbol.iterator] = f.prototype.entries;
                  var h = 0;
                  return f;
                });
                ka("Set", function (b) {
                  function c(b) {
                    this.a = new Map();
                    if (b) {
                      b = r(b);
                      for (var c; !(c = b.next()).done; ) this.add(c.value);
                    }
                    this.size = this.a.size;
                  }
                  if (
                    (function () {
                      if (
                        !b ||
                        "function" != typeof b ||
                        !b.prototype.entries ||
                        "function" != typeof Object.seal
                      )
                        return !1;
                      try {
                        var c = Object.seal({ x: 4 }),
                          e = new b(r([c]));
                        if (
                          !e.has(c) ||
                          1 != e.size ||
                          e.add(c) != e ||
                          1 != e.size ||
                          e.add({ x: 4 }) != e ||
                          2 != e.size
                        )
                          return !1;
                        var f = e.entries(),
                          g = f.next();
                        if (g.done || g.value[0] != c || g.value[1] != c)
                          return !1;
                        g = f.next();
                        return g.done ||
                          g.value[0] == c ||
                          4 != g.value[0].x ||
                          g.value[1] != g.value[0]
                          ? !1
                          : f.next().done;
                      } catch (h) {
                        return !1;
                      }
                    })()
                  )
                    return b;
                  da();
                  fa();
                  c.prototype.add = function (b) {
                    this.a.set(b, b);
                    this.size = this.a.size;
                    return this;
                  };
                  c.prototype["delete"] = function (b) {
                    b = this.a["delete"](b);
                    this.size = this.a.size;
                    return b;
                  };
                  c.prototype.clear = function () {
                    this.a.clear();
                    this.size = 0;
                  };
                  c.prototype.has = function (b) {
                    return this.a.has(b);
                  };
                  c.prototype.entries = function () {
                    return this.a.entries();
                  };
                  c.prototype.values = function () {
                    return this.a.values();
                  };
                  c.prototype.keys = c.prototype.values;
                  c.prototype[Symbol.iterator] = c.prototype.values;
                  c.prototype.forEach = function (b, c) {
                    var d = this;
                    this.a.forEach(function (e) {
                      return b.call(c, e, e, d);
                    });
                  };
                  return c;
                });
                function Pa(b, c, d) {
                  b instanceof String && (b = String(b));
                  for (var e = b.length, f = 0; f < e; f++) {
                    var g = b[f];
                    if (c.call(d, g, f, b)) return { zd: f, ee: g };
                  }
                  return { zd: -1, ee: void 0 };
                }
                ka("Array.prototype.findIndex", function (b) {
                  return b
                    ? b
                    : function (b, d) {
                        return Pa(this, b, d).zd;
                      };
                });
                function Qa(b, c) {
                  fa();
                  b instanceof String && (b += "");
                  var d = 0,
                    e = {
                      next: function () {
                        if (d < b.length) {
                          var f = d++;
                          return { value: c(f, b[f]), done: !1 };
                        }
                        e.next = function () {
                          return { done: !0, value: void 0 };
                        };
                        return e.next();
                      },
                    };
                  e[Symbol.iterator] = function () {
                    return e;
                  };
                  return e;
                }
                ka("Array.prototype.keys", function (b) {
                  return b
                    ? b
                    : function () {
                        return Qa(this, function (b) {
                          return b;
                        });
                      };
                });
                ka("Object.is", function (b) {
                  return b
                    ? b
                    : function (b, d) {
                        return b === d
                          ? 0 !== b || 1 / b === 1 / d
                          : b !== b && d !== d;
                      };
                });
                ka("Array.prototype.includes", function (b) {
                  return b
                    ? b
                    : function (b, d) {
                        var c = this;
                        c instanceof String && (c = String(c));
                        var f = c.length,
                          g = d || 0;
                        for (0 > g && (g = Math.max(g + f, 0)); g < f; g++) {
                          var h = c[g];
                          if (h === b || Object.is(h, b)) return !0;
                        }
                        return !1;
                      };
                });
                function Ra(b, c, d) {
                  if (null == b)
                    throw new TypeError(
                      "The 'this' value for String.prototype." +
                        d +
                        " must not be null or undefined"
                    );
                  if (c instanceof RegExp)
                    throw new TypeError(
                      "First argument to String.prototype." +
                        d +
                        " must not be a regular expression"
                    );
                  return b + "";
                }
                ka("String.prototype.includes", function (b) {
                  return b
                    ? b
                    : function (b, d) {
                        return (
                          -1 !== Ra(this, b, "includes").indexOf(b, d || 0)
                        );
                      };
                });
                ka("Array.from", function (b) {
                  return b
                    ? b
                    : function (b, d, e) {
                        fa();
                        d =
                          null != d
                            ? d
                            : function (b) {
                                return b;
                              };
                        var c = [],
                          g = b[Symbol.iterator];
                        if ("function" == typeof g)
                          for (b = g.call(b); !(g = b.next()).done; )
                            c.push(d.call(e, g.value));
                        else {
                          g = b.length;
                          for (var h = 0; h < g; h++) c.push(d.call(e, b[h]));
                        }
                        return c;
                      };
                });
                ka("String.prototype.startsWith", function (b) {
                  return b
                    ? b
                    : function (b, d) {
                        for (
                          var c = Ra(this, b, "startsWith"),
                            f = c.length,
                            g = b.length,
                            h = Math.max(0, Math.min(d | 0, c.length)),
                            k = 0;
                          k < g && h < f;

                        )
                          if (c[h++] != b[k++]) return !1;
                        return k >= g;
                      };
                });
                ka("Array.prototype.find", function (b) {
                  return b
                    ? b
                    : function (b, d) {
                        return Pa(this, b, d).ee;
                      };
                });
                var Sa = this;
                Sa.a = !0;
                function z(b, c) {
                  var d = b.split("."),
                    e = Sa;
                  d[0] in e || !e.execScript || e.execScript("var " + d[0]);
                  for (var f; d.length && (f = d.shift()); )
                    d.length || void 0 === c
                      ? e[f]
                        ? (e = e[f])
                        : (e = e[f] = {})
                      : (e[f] = c);
                }
                function Ta(b, c) {
                  function d() {}
                  d.prototype = c.prototype;
                  b.$f = c.prototype;
                  b.prototype = new d();
                  b.prototype.constructor = b;
                  b.ng = function (b, d, g) {
                    return c.prototype[d].apply(
                      b,
                      Array.prototype.slice.call(arguments, 2)
                    );
                  };
                } /*

 Copyright 2016 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
                function Ua(b) {
                  this.c = Math.exp(Math.log(0.5) / b);
                  this.b = this.a = 0;
                }
                function Wa(b, c, d) {
                  var e = Math.pow(b.c, c);
                  d = d * (1 - e) + e * b.a;
                  isNaN(d) || ((b.a = d), (b.b += c));
                }
                function Xa(b) {
                  return b.a / (1 - Math.pow(b.c, b.b));
                }
                function Ya() {
                  this.b = new Ua(2);
                  this.c = new Ua(5);
                  this.a = 0;
                }
                Ya.prototype.getBandwidthEstimate = function (b) {
                  return 128e3 > this.a ? b : Math.min(Xa(this.b), Xa(this.c));
                };
                function Za() {}
                function $a() {}
                function ab() {}
                window.console &&
                  window.console.log.bind &&
                  (($a = console.warn.bind(console)),
                  (Za = console.error.bind(console)));
                var bb =
                  /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
                function cb(b) {
                  var c;
                  b instanceof cb
                    ? (db(this, b.sa),
                      (this.Xa = b.Xa),
                      (this.oa = b.oa),
                      hb(this, b.tb),
                      (this.fa = b.fa),
                      ib(this, b.a.clone()),
                      (this.Oa = b.Oa))
                    : b && (c = String(b).match(bb))
                    ? (db(this, c[1] || "", !0),
                      (this.Xa = jb(c[2] || "")),
                      (this.oa = jb(c[3] || "", !0)),
                      hb(this, c[4]),
                      (this.fa = jb(c[5] || "", !0)),
                      ib(this, c[6] || "", !0),
                      (this.Oa = jb(c[7] || "")))
                    : (this.a = new kb(null));
                }
                p = cb.prototype;
                p.sa = "";
                p.Xa = "";
                p.oa = "";
                p.tb = null;
                p.fa = "";
                p.Oa = "";
                p.toString = function () {
                  var b = [],
                    c = this.sa;
                  c && b.push(lb(c, mb, !0), ":");
                  if ((c = this.oa)) {
                    b.push("//");
                    var d = this.Xa;
                    d && b.push(lb(d, mb, !0), "@");
                    b.push(
                      encodeURIComponent(c).replace(
                        /%25([0-9a-fA-F]{2})/g,
                        "%$1"
                      )
                    );
                    c = this.tb;
                    null != c && b.push(":", String(c));
                  }
                  if ((c = this.fa))
                    this.oa && "/" != c.charAt(0) && b.push("/"),
                      b.push(lb(c, "/" == c.charAt(0) ? nb : ob, !0));
                  (c = this.a.toString()) && b.push("?", c);
                  (c = this.Oa) && b.push("#", lb(c, pb));
                  return b.join("");
                };
                p.resolve = function (b) {
                  var c = this.clone();
                  "data" === c.sa && (c = new cb());
                  var d = !!b.sa;
                  d ? db(c, b.sa) : (d = !!b.Xa);
                  d ? (c.Xa = b.Xa) : (d = !!b.oa);
                  d ? (c.oa = b.oa) : (d = null != b.tb);
                  var e = b.fa;
                  if (d) hb(c, b.tb);
                  else if ((d = !!b.fa)) {
                    if ("/" != e.charAt(0))
                      if (this.oa && !this.fa) e = "/" + e;
                      else {
                        var f = c.fa.lastIndexOf("/");
                        -1 != f && (e = c.fa.substr(0, f + 1) + e);
                      }
                    if (".." == e || "." == e) e = "";
                    else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                      f = 0 == e.lastIndexOf("/", 0);
                      e = e.split("/");
                      for (var g = [], h = 0; h < e.length; ) {
                        var k = e[h++];
                        "." == k
                          ? f && h == e.length && g.push("")
                          : ".." == k
                          ? ((1 < g.length || (1 == g.length && "" != g[0])) &&
                              g.pop(),
                            f && h == e.length && g.push(""))
                          : (g.push(k), (f = !0));
                      }
                      e = g.join("/");
                    }
                  }
                  d ? (c.fa = e) : (d = "" !== b.a.toString());
                  d ? ib(c, b.a.clone()) : (d = !!b.Oa);
                  d && (c.Oa = b.Oa);
                  return c;
                };
                p.clone = function () {
                  return new cb(this);
                };
                function db(b, c, d) {
                  b.sa = d ? jb(c, !0) : c;
                  b.sa && (b.sa = b.sa.replace(/:$/, ""));
                }
                function hb(b, c) {
                  if (c) {
                    c = Number(c);
                    if (isNaN(c) || 0 > c) throw Error("Bad port number " + c);
                    b.tb = c;
                  } else b.tb = null;
                }
                function ib(b, c, d) {
                  c instanceof kb
                    ? (b.a = c)
                    : (d || (c = lb(c, qb)), (b.a = new kb(c)));
                }
                function jb(b, c) {
                  return b ? (c ? decodeURI(b) : decodeURIComponent(b)) : "";
                }
                function lb(b, c, d) {
                  return "string" == typeof b
                    ? ((b = encodeURI(b).replace(c, rb)),
                      d && (b = b.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                      b)
                    : null;
                }
                function rb(b) {
                  b = b.charCodeAt(0);
                  return (
                    "%" + ((b >> 4) & 15).toString(16) + (b & 15).toString(16)
                  );
                }
                var mb = /[#\/\?@]/g,
                  ob = /[#\?:]/g,
                  nb = /[#\?]/g,
                  qb = /[#\?@]/g,
                  pb = /#/g;
                function kb(b) {
                  this.a = b || null;
                }
                p = kb.prototype;
                p.ea = null;
                p.Xb = null;
                p.add = function (b, c) {
                  if (!this.ea && ((this.ea = {}), (this.Xb = 0), this.a))
                    for (var d = this.a.split("&"), e = 0; e < d.length; e++) {
                      var f = d[e].indexOf("="),
                        g = null;
                      if (0 <= f) {
                        var h = d[e].substring(0, f);
                        g = d[e].substring(f + 1);
                      } else h = d[e];
                      h = decodeURIComponent(h.replace(/\+/g, " "));
                      g = g || "";
                      this.add(h, decodeURIComponent(g.replace(/\+/g, " ")));
                    }
                  this.a = null;
                  (d = this.ea.hasOwnProperty(b) && this.ea[b]) ||
                    (this.ea[b] = d = []);
                  d.push(c);
                  this.Xb++;
                  return this;
                };
                p.toString = function () {
                  if (this.a) return this.a;
                  if (!this.ea) return "";
                  var b = [],
                    c;
                  for (c in this.ea)
                    for (
                      var d = encodeURIComponent(c), e = this.ea[c], f = 0;
                      f < e.length;
                      f++
                    ) {
                      var g = d;
                      "" !== e[f] && (g += "=" + encodeURIComponent(e[f]));
                      b.push(g);
                    }
                  return (this.a = b.join("&"));
                };
                p.clone = function () {
                  var b = new kb();
                  b.a = this.a;
                  if (this.ea) {
                    var c = {},
                      d;
                    for (d in this.ea) c[d] = this.ea[d].concat();
                    b.ea = c;
                    b.Xb = this.Xb;
                  }
                  return b;
                };
                function sb(b) {
                  this.b = b;
                  this.a = null;
                }
                sb.prototype.O = function (b) {
                  var c = this;
                  this.stop();
                  var d = !0,
                    e = null;
                  this.a = function () {
                    window.clearTimeout(e);
                    d = !1;
                  };
                  e = window.setTimeout(function () {
                    d && c.b();
                  }, 1e3 * b);
                  return this;
                };
                sb.prototype.stop = function () {
                  this.a && (this.a(), (this.a = null));
                };
                function B(b) {
                  this.b = b;
                  this.a = null;
                }
                z("shaka.util.Timer", B);
                B.prototype.oc = function () {
                  this.stop();
                  this.b();
                  return this;
                };
                B.prototype.tickNow = B.prototype.oc;
                B.prototype.O = function (b) {
                  var c = this;
                  this.stop();
                  this.a = new sb(function () {
                    c.b();
                  }).O(b);
                  return this;
                };
                B.prototype.tickAfter = B.prototype.O;
                B.prototype.Ia = function (b) {
                  var c = this;
                  this.stop();
                  this.a = new sb(function () {
                    c.a.O(b);
                    c.b();
                  }).O(b);
                  return this;
                };
                B.prototype.tickEvery = B.prototype.Ia;
                B.prototype.stop = function () {
                  this.a && (this.a.stop(), (this.a = null));
                };
                B.prototype.stop = B.prototype.stop;
                function tb(b, c) {
                  var d = ub();
                  this.i =
                    null == b.maxAttempts ? d.maxAttempts : b.maxAttempts;
                  this.f = null == b.baseDelay ? d.baseDelay : b.baseDelay;
                  this.h = null == b.fuzzFactor ? d.fuzzFactor : b.fuzzFactor;
                  this.g =
                    null == b.backoffFactor ? d.backoffFactor : b.backoffFactor;
                  this.a = 0;
                  this.b = this.f;
                  if ((this.c = void 0 === c ? !1 : c)) this.a = 1;
                }
                function zb(b) {
                  return t(function d() {
                    var e, f;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          if (b.a >= b.i)
                            if (b.c) (b.a = 1), (b.b = b.f);
                            else return d["return"](Promise.reject());
                          e = b.a;
                          b.a++;
                          if (0 == e) return d["return"]();
                          f = b.b * (1 + (2 * Math.random() - 1) * b.h);
                          return u(
                            d,
                            new Promise(function (b) {
                              new B(b).O(f / 1e3);
                            }),
                            2
                          );
                        case 2:
                          (b.b *= b.g), v(d);
                      }
                    });
                  });
                }
                function ub() {
                  return {
                    maxAttempts: 2,
                    baseDelay: 1e3,
                    backoffFactor: 2,
                    fuzzFactor: 0.5,
                    timeout: 0,
                  };
                }
                function D(b, c, d, e) {
                  for (var f = [], g = 3; g < arguments.length; ++g)
                    f[g - 3] = arguments[g];
                  this.severity = b;
                  this.category = c;
                  this.code = d;
                  this.data = f;
                  this.handled = !1;
                }
                z("shaka.util.Error", D);
                D.prototype.toString = function () {
                  return "shaka.util.Error " + JSON.stringify(this, null, "  ");
                };
                D.Severity = { RECOVERABLE: 1, CRITICAL: 2 };
                D.Category = {
                  NETWORK: 1,
                  TEXT: 2,
                  MEDIA: 3,
                  MANIFEST: 4,
                  STREAMING: 5,
                  DRM: 6,
                  PLAYER: 7,
                  CAST: 8,
                  STORAGE: 9,
                };
                D.Code = {
                  UNSUPPORTED_SCHEME: 1e3,
                  BAD_HTTP_STATUS: 1001,
                  HTTP_ERROR: 1002,
                  TIMEOUT: 1003,
                  MALFORMED_DATA_URI: 1004,
                  UNKNOWN_DATA_URI_ENCODING: 1005,
                  REQUEST_FILTER_ERROR: 1006,
                  RESPONSE_FILTER_ERROR: 1007,
                  MALFORMED_TEST_URI: 1008,
                  UNEXPECTED_TEST_REQUEST: 1009,
                  INVALID_TEXT_HEADER: 2e3,
                  INVALID_TEXT_CUE: 2001,
                  UNABLE_TO_DETECT_ENCODING: 2003,
                  BAD_ENCODING: 2004,
                  INVALID_XML: 2005,
                  INVALID_MP4_TTML: 2007,
                  INVALID_MP4_VTT: 2008,
                  UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
                  BUFFER_READ_OUT_OF_BOUNDS: 3e3,
                  JS_INTEGER_OVERFLOW: 3001,
                  EBML_OVERFLOW: 3002,
                  EBML_BAD_FLOATING_POINT_SIZE: 3003,
                  MP4_SIDX_WRONG_BOX_TYPE: 3004,
                  MP4_SIDX_INVALID_TIMESCALE: 3005,
                  MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
                  WEBM_CUES_ELEMENT_MISSING: 3007,
                  WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
                  WEBM_SEGMENT_ELEMENT_MISSING: 3009,
                  WEBM_INFO_ELEMENT_MISSING: 3010,
                  WEBM_DURATION_ELEMENT_MISSING: 3011,
                  WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
                  WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
                  MEDIA_SOURCE_OPERATION_FAILED: 3014,
                  MEDIA_SOURCE_OPERATION_THREW: 3015,
                  VIDEO_ERROR: 3016,
                  QUOTA_EXCEEDED_ERROR: 3017,
                  TRANSMUXING_FAILED: 3018,
                  UNABLE_TO_GUESS_MANIFEST_TYPE: 4e3,
                  DASH_INVALID_XML: 4001,
                  DASH_NO_SEGMENT_INFO: 4002,
                  DASH_EMPTY_ADAPTATION_SET: 4003,
                  DASH_EMPTY_PERIOD: 4004,
                  DASH_WEBM_MISSING_INIT: 4005,
                  DASH_UNSUPPORTED_CONTAINER: 4006,
                  DASH_PSSH_BAD_ENCODING: 4007,
                  DASH_NO_COMMON_KEY_SYSTEM: 4008,
                  DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
                  DASH_CONFLICTING_KEY_IDS: 4010,
                  UNPLAYABLE_PERIOD: 4011,
                  RESTRICTIONS_CANNOT_BE_MET: 4012,
                  NO_PERIODS: 4014,
                  HLS_PLAYLIST_HEADER_MISSING: 4015,
                  INVALID_HLS_TAG: 4016,
                  HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
                  DASH_DUPLICATE_REPRESENTATION_ID: 4018,
                  HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
                  HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,
                  HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
                  HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
                  HLS_REQUIRED_TAG_MISSING: 4024,
                  HLS_COULD_NOT_GUESS_CODECS: 4025,
                  HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
                  DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
                  DASH_XLINK_DEPTH_LIMIT: 4028,
                  HLS_COULD_NOT_PARSE_SEGMENT_START_TIME: 4030,
                  CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
                  CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
                  HLS_AES_128_ENCRYPTION_NOT_SUPPORTED: 4034,
                  INVALID_STREAMS_CHOSEN: 5005,
                  NO_RECOGNIZED_KEY_SYSTEMS: 6e3,
                  REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
                  FAILED_TO_CREATE_CDM: 6002,
                  FAILED_TO_ATTACH_TO_VIDEO: 6003,
                  INVALID_SERVER_CERTIFICATE: 6004,
                  FAILED_TO_CREATE_SESSION: 6005,
                  FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
                  LICENSE_REQUEST_FAILED: 6007,
                  LICENSE_RESPONSE_REJECTED: 6008,
                  ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
                  NO_LICENSE_SERVER_GIVEN: 6012,
                  OFFLINE_SESSION_REMOVED: 6013,
                  EXPIRED: 6014,
                  LOAD_INTERRUPTED: 7e3,
                  OPERATION_ABORTED: 7001,
                  NO_VIDEO_ELEMENT: 7002,
                  CAST_API_UNAVAILABLE: 8e3,
                  NO_CAST_RECEIVERS: 8001,
                  ALREADY_CASTING: 8002,
                  UNEXPECTED_CAST_ERROR: 8003,
                  CAST_CANCELED_BY_USER: 8004,
                  CAST_CONNECTION_TIMED_OUT: 8005,
                  CAST_RECEIVER_APP_UNAVAILABLE: 8006,
                  STORAGE_NOT_SUPPORTED: 9e3,
                  INDEXED_DB_ERROR: 9001,
                  DEPRECATED_OPERATION_ABORTED: 9002,
                  REQUESTED_ITEM_NOT_FOUND: 9003,
                  MALFORMED_OFFLINE_URI: 9004,
                  CANNOT_STORE_LIVE_OFFLINE: 9005,
                  STORE_ALREADY_IN_PROGRESS: 9006,
                  NO_INIT_DATA_FOR_OFFLINE: 9007,
                  LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
                  NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
                  KEY_NOT_FOUND: 9012,
                  MISSING_STORAGE_CELL: 9013,
                };
                function G() {
                  var b,
                    c,
                    d = new Promise(function (d, f) {
                      b = d;
                      c = f;
                    });
                  d.resolve = b;
                  d.reject = c;
                  return d;
                }
                G.prototype.resolve = function () {};
                G.prototype.reject = function () {};
                function H(b, c) {
                  this.promise = b;
                  this.Fd = c;
                  this.a = !1;
                }
                z("shaka.util.AbortableOperation", H);
                function Ab(b) {
                  return new H(Promise.reject(b), function () {
                    return Promise.resolve();
                  });
                }
                H.failed = Ab;
                function Bb() {
                  var b = Promise.reject(new D(2, 7, 7001));
                  b["catch"](function () {});
                  return new H(b, function () {
                    return Promise.resolve();
                  });
                }
                H.aborted = Bb;
                function Cb(b) {
                  return new H(Promise.resolve(b), function () {
                    return Promise.resolve();
                  });
                }
                H.completed = Cb;
                function Db(b) {
                  return new H(b, function () {
                    return b["catch"](function () {});
                  });
                }
                H.notAbortable = Db;
                H.prototype.abort = function () {
                  this.a = !0;
                  return this.Fd();
                };
                H.prototype.abort = H.prototype.abort;
                function Eb(b) {
                  return new H(
                    Promise.all(
                      b.map(function (b) {
                        return b.promise;
                      })
                    ),
                    function () {
                      return Promise.all(
                        b.map(function (b) {
                          return b.abort();
                        })
                      );
                    }
                  );
                }
                H.all = Eb;
                H.prototype["finally"] = function (b) {
                  this.promise.then(
                    function () {
                      return b(!0);
                    },
                    function () {
                      return b(!1);
                    }
                  );
                  return this;
                };
                H.prototype["finally"] = H.prototype["finally"];
                H.prototype.T = function (b, c) {
                  function d() {
                    f.reject(new D(2, 7, 7001));
                    return e.abort();
                  }
                  var e = this,
                    f = new G();
                  this.promise.then(
                    function (c) {
                      e.a
                        ? f.reject(new D(2, 7, 7001))
                        : b
                        ? (d = Fb(b, c, f))
                        : f.resolve(c);
                    },
                    function (b) {
                      c ? (d = Fb(c, b, f)) : f.reject(b);
                    }
                  );
                  return new H(f, function () {
                    return d();
                  });
                };
                H.prototype.chain = H.prototype.T;
                function Fb(b, c, d) {
                  try {
                    var e = b(c);
                    if (e && e.promise && e.abort)
                      return (
                        d.resolve(e.promise),
                        function () {
                          return e.abort();
                        }
                      );
                    d.resolve(e);
                    return function () {
                      return Promise.resolve(e)
                        .then(function () {})
                        ["catch"](function () {});
                    };
                  } catch (f) {
                    return (
                      d.reject(f),
                      function () {
                        return Promise.resolve();
                      }
                    );
                  }
                }
                function I(b, c) {
                  c = void 0 === c ? {} : c;
                  for (var d in c) this[d] = c[d];
                  this.defaultPrevented = this.cancelable = this.bubbles = !1;
                  this.timeStamp =
                    window.performance && window.performance.now
                      ? window.performance.now()
                      : Date.now();
                  this.type = b;
                  this.isTrusted = !1;
                  this.target = this.currentTarget = null;
                  this.a = !1;
                }
                I.prototype.preventDefault = function () {
                  this.cancelable && (this.defaultPrevented = !0);
                };
                I.prototype.stopImmediatePropagation = function () {
                  this.a = !0;
                };
                I.prototype.stopPropagation = function () {};
                function Hb() {
                  this.a = {};
                }
                p = Hb.prototype;
                p.push = function (b, c) {
                  this.a.hasOwnProperty(b)
                    ? this.a[b].push(c)
                    : (this.a[b] = [c]);
                };
                p.get = function (b) {
                  return (b = this.a[b]) ? b.slice() : null;
                };
                p.getAll = function () {
                  var b = [],
                    c;
                  for (c in this.a) b.push.apply(b, this.a[c]);
                  return b;
                };
                p.remove = function (b, c) {
                  var d = this.a[b];
                  if (d)
                    for (var e = 0; e < d.length; ++e)
                      d[e] == c && (d.splice(e, 1), --e);
                };
                p.forEach = function (b) {
                  for (var c in this.a) b(c, this.a[c]);
                };
                function J() {
                  this.tc = new Hb();
                  this.Sb = this;
                }
                J.prototype.addEventListener = function (b, c) {
                  this.tc.push(b, c);
                };
                J.prototype.removeEventListener = function (b, c) {
                  this.tc.remove(b, c);
                };
                J.prototype.dispatchEvent = function (b) {
                  for (
                    var c = this.tc.get(b.type) || [], d = 0;
                    d < c.length;
                    ++d
                  ) {
                    b.target = this.Sb;
                    b.currentTarget = this.Sb;
                    var e = c[d];
                    try {
                      e.handleEvent ? e.handleEvent(b) : e.call(this, b);
                    } catch (f) {}
                    if (b.a) break;
                  }
                  return b.defaultPrevented;
                };
                function Ib(b) {
                  function c(b) {
                    switch (typeof b) {
                      case "undefined":
                      case "boolean":
                      case "number":
                      case "string":
                      case "symbol":
                      case "function":
                        return b;
                      default:
                        if (
                          !b ||
                          (b.buffer && b.buffer.constructor == ArrayBuffer)
                        )
                          return b;
                        if (d.has(b)) return null;
                        var e = b.constructor == Array;
                        if (b.constructor != Object && !e) return null;
                        d.add(b);
                        var g = e ? [] : {},
                          h;
                        for (h in b) g[h] = c(b[h]);
                        e && (g.length = b.length);
                        return g;
                    }
                  }
                  var d = new Set();
                  return c(b);
                }
                function Jb(b, c) {
                  return "number" === typeof b &&
                    "number" === typeof c &&
                    isNaN(b) &&
                    isNaN(c)
                    ? !0
                    : b === c;
                }
                function Kb(b, c) {
                  var d = b.indexOf(c);
                  -1 < d && b.splice(d, 1);
                }
                function Lb(b, c) {
                  var d = 0;
                  b.forEach(function (b) {
                    d += c(b) ? 1 : 0;
                  });
                  return d;
                }
                function Mb(b, c, d) {
                  d || (d = Jb);
                  if (b.length != c.length) return !1;
                  c = c.slice();
                  var e = {};
                  b = r(b);
                  for (
                    var f = b.next();
                    !f.done;
                    e = { item: e.item }, f = b.next()
                  ) {
                    e.item = f.value;
                    f = c.findIndex(
                      (function (b) {
                        return function (c) {
                          return d(b.item, c);
                        };
                      })(e)
                    );
                    if (-1 == f) return !1;
                    c[f] = c[c.length - 1];
                    c.pop();
                  }
                  return 0 == c.length;
                }
                function Nb() {
                  this.a = [];
                }
                function Ob(b, c) {
                  b.a.push(
                    c["finally"](function () {
                      Kb(b.a, c);
                    })
                  );
                }
                Nb.prototype.destroy = function () {
                  var b = [];
                  this.a.forEach(function (c) {
                    c.promise["catch"](function () {});
                    b.push(c.abort());
                  });
                  this.a = [];
                  return Promise.all(b);
                };
                function K(b) {
                  J.call(this);
                  this.f = !1;
                  this.g = new Nb();
                  this.a = new Set();
                  this.b = new Set();
                  this.c = b || null;
                }
                Ta(K, J);
                z("shaka.net.NetworkingEngine", K);
                var Pb = {
                  MANIFEST: 0,
                  SEGMENT: 1,
                  LICENSE: 2,
                  APP: 3,
                  TIMING: 4,
                };
                K.RequestType = Pb;
                K.PluginPriority = {
                  FALLBACK: 1,
                  PREFERRED: 2,
                  APPLICATION: 3,
                };
                var Qb = {};
                function Rb(b, c, d) {
                  d = d || 3;
                  var e = Qb[b];
                  if (!e || d >= e.priority) Qb[b] = { priority: d, uf: c };
                }
                K.registerScheme = Rb;
                K.unregisterScheme = function (b) {
                  delete Qb[b];
                };
                K.prototype.wf = function (b) {
                  this.a.add(b);
                };
                K.prototype.registerRequestFilter = K.prototype.wf;
                K.prototype.bg = function (b) {
                  this.a["delete"](b);
                };
                K.prototype.unregisterRequestFilter = K.prototype.bg;
                K.prototype.re = function () {
                  this.a.clear();
                };
                K.prototype.clearAllRequestFilters = K.prototype.re;
                K.prototype.xf = function (b) {
                  this.b.add(b);
                };
                K.prototype.registerResponseFilter = K.prototype.xf;
                K.prototype.cg = function (b) {
                  this.b["delete"](b);
                };
                K.prototype.unregisterResponseFilter = K.prototype.cg;
                K.prototype.se = function () {
                  this.b.clear();
                };
                K.prototype.clearAllResponseFilters = K.prototype.se;
                function Sb(b, c) {
                  return {
                    uris: b,
                    method: "GET",
                    body: null,
                    headers: {},
                    allowCrossSiteCredentials: !1,
                    retryParameters: c,
                    licenseRequestType: null,
                  };
                }
                K.prototype.destroy = function () {
                  this.f = !0;
                  this.a.clear();
                  this.b.clear();
                  return this.g.destroy();
                };
                K.prototype.destroy = K.prototype.destroy;
                K.prototype.request = function (b, c) {
                  var d = this,
                    e = new Tb();
                  if (this.f) {
                    var f = Promise.reject(new D(2, 7, 7001));
                    f["catch"](function () {});
                    return new Ub(
                      f,
                      function () {
                        return Promise.resolve();
                      },
                      e
                    );
                  }
                  c.method = c.method || "GET";
                  c.headers = c.headers || {};
                  c.retryParameters = c.retryParameters
                    ? Ib(c.retryParameters)
                    : ub();
                  c.uris = Ib(c.uris);
                  f = Vb(this, b, c);
                  var g = f.T(function () {
                      return Wb(
                        d,
                        b,
                        c,
                        new tb(c.retryParameters, !1),
                        0,
                        null,
                        e
                      );
                    }),
                    h = g.T(function (c) {
                      return Xb(d, b, c);
                    }),
                    k = Date.now(),
                    l = 0;
                  f.promise.then(
                    function () {
                      l = Date.now() - k;
                    },
                    function () {}
                  );
                  var m = 0;
                  g.promise.then(
                    function () {
                      m = Date.now();
                    },
                    function () {}
                  );
                  f = h.T(
                    function (c) {
                      var e = Date.now() - m,
                        f = c.response;
                      f.timeMs += l;
                      f.timeMs += e;
                      c.Ue ||
                        !d.c ||
                        f.fromCache ||
                        1 != b ||
                        d.c(f.timeMs, f.data.byteLength);
                      return f;
                    },
                    function (b) {
                      b && (b.severity = 2);
                      throw b;
                    }
                  );
                  f = new Ub(f.promise, f.Fd, e);
                  Ob(this.g, f);
                  return f;
                };
                K.prototype.request = K.prototype.request;
                function Vb(b, c, d) {
                  var e = Cb(void 0),
                    f = {};
                  b = r(b.a);
                  for (
                    var g = b.next();
                    !g.done;
                    f = { $c: f.$c }, g = b.next()
                  )
                    (f.$c = g.value),
                      (e = e.T(
                        (function (b) {
                          return function () {
                            return b.$c(c, d);
                          };
                        })(f)
                      ));
                  return e.T(void 0, function (b) {
                    if (b && 7001 == b.code) throw b;
                    throw new D(2, 1, 1006, b);
                  });
                }
                function Wb(b, c, d, e, f, g, h) {
                  var k = new cb(d.uris[f]),
                    l = k.sa,
                    m = !1;
                  l ||
                    ((l = location.protocol),
                    (l = l.slice(0, -1)),
                    db(k, l),
                    (d.uris[f] = k.toString()));
                  var n = (l = Qb[l]) ? l.uf : null;
                  if (!n) return Ab(new D(2, 1, 1e3, k));
                  var q;
                  return Db(zb(e))
                    .T(function () {
                      if (b.f) return Bb();
                      q = Date.now();
                      return n(d.uris[f], d, c, function (d, e, f) {
                        b.c && 1 == c && (b.c(d, e), (m = !0), (h.a = f));
                      });
                    })
                    .T(
                      function (b) {
                        void 0 == b.timeMs && (b.timeMs = Date.now() - q);
                        return { response: b, Ue: m };
                      },
                      function (h) {
                        if (h && 7001 == h.code) throw h;
                        if (b.f) return Bb();
                        if (h && 1 == h.severity)
                          return (
                            b.dispatchEvent(
                              new I("retry", {
                                error: h instanceof D ? h : null,
                              })
                            ),
                            (f = (f + 1) % d.uris.length),
                            Wb(b, c, d, e, f, h)
                          );
                        throw h || g;
                      }
                    );
                }
                function Xb(b, c, d) {
                  var e = Cb(void 0);
                  b = r(b.b);
                  for (var f = b.next(); !f.done; f = b.next())
                    e = e.T(f.value.bind(null, c, d.response));
                  return e.T(
                    function () {
                      return d;
                    },
                    function (b) {
                      if (b && 7001 == b.code) throw b;
                      var c = 2;
                      b instanceof D && (c = b.severity);
                      throw new D(c, 1, 1007, b);
                    }
                  );
                }
                function Tb() {
                  this.a = 0;
                }
                K.NumBytesRemainingClass = Tb;
                function Ub(b, c, d) {
                  H.call(this, b, c);
                  this.b = d;
                }
                var Yb = Ub;
                Yb.prototype = ma(H.prototype);
                Yb.prototype.constructor = Yb;
                if (sa) sa(Yb, H);
                else
                  for (var Zb in H)
                    if ("prototype" != Zb)
                      if (Object.defineProperties) {
                        var $b = Object.getOwnPropertyDescriptor(H, Zb);
                        $b && Object.defineProperty(Yb, Zb, $b);
                      } else Yb[Zb] = H[Zb];
                Yb.$f = H.prototype;
                K.PendingRequest = Ub;
                Ub.all = Eb;
                Ub.notAbortable = Db;
                Ub.completed = Cb;
                Ub.aborted = Bb;
                Ub.failed = Ab;
                function ac() {
                  this.b = new Hb();
                }
                ac.prototype.a = function () {
                  bc(this);
                  this.b = null;
                };
                function L(b, c, d, e) {
                  b.b && ((c = new cc(c, d, e)), b.b.push(d, c));
                }
                function dc(b, c, d, e) {
                  function f(g) {
                    b.ma(c, d, f);
                    e(g);
                  }
                  L(b, c, d, f);
                }
                ac.prototype.ma = function (b, c, d) {
                  if (this.b)
                    for (
                      var e = this.b.get(c) || [], f = 0;
                      f < e.length;
                      ++f
                    ) {
                      var g = e[f];
                      g.target != b ||
                        (d != g.listener && d) ||
                        (g.ma(), this.b.remove(c, g));
                    }
                };
                function bc(b) {
                  if (b.b) {
                    for (var c = b.b.getAll(), d = 0; d < c.length; ++d)
                      c[d].ma();
                    b.b.a = {};
                  }
                }
                function cc(b, c, d) {
                  this.target = b;
                  this.type = c;
                  this.listener = d;
                  this.target.addEventListener(c, d, !1);
                }
                cc.prototype.ma = function () {
                  this.target.removeEventListener(this.type, this.listener, !1);
                  this.listener = this.target = null;
                };
                function ec(b, c) {
                  for (
                    var d = [], e = r(b), f = e.next();
                    !f.done;
                    f = e.next()
                  )
                    d.push(c(f.value));
                  return d;
                }
                function fc(b, c) {
                  for (var d = r(b), e = d.next(); !e.done; e = d.next())
                    if (!c(e.value)) return !1;
                  return !0;
                }
                function gc(b) {
                  var c = new Map();
                  Object.keys(b).forEach(function (d) {
                    c.set(d, b[d]);
                  });
                  return c;
                }
                function hc(b) {
                  var c = {};
                  b.forEach(function (b, e) {
                    c[e] = b;
                  });
                  return c;
                }
                function ic(b, c) {
                  var d = b;
                  c && (d += '; codecs="' + c + '"');
                  return d;
                }
                function jc(b) {
                  var c = [b.mimeType];
                  kc.forEach(function (d, e) {
                    var f = b[e];
                    f && c.push(d + '="' + f + '"');
                  });
                  return c.join(";");
                }
                function lc(b) {
                  b = b.split(".");
                  var c = b[0];
                  b.pop();
                  return [c, b.join(".")];
                }
                var kc = new Map()
                  .set("codecs", "codecs")
                  .set("frameRate", "framerate")
                  .set("bandwidth", "bitrate")
                  .set("width", "width")
                  .set("height", "height")
                  .set("channelsCount", "channels");
                function mc() {
                  return window.MediaSource && MediaSource.isTypeSupported
                    ? !0
                    : !1;
                }
                function nc(b) {
                  return "" != oc().canPlayType(b);
                }
                function pc(b) {
                  return (navigator.userAgent || "").includes(b);
                }
                function oc() {
                  if (qc) return qc;
                  rc ||
                    (rc = new B(function () {
                      qc = null;
                    }));
                  (qc =
                    document.querySelector("video") ||
                    document.querySelector("audio")) ||
                    (qc = document.createElement("video"));
                  rc.O(1);
                  return qc;
                }
                var rc = null,
                  qc = null;
                function sc(b) {
                  if (!b) return "";
                  b = new Uint8Array(b);
                  239 == b[0] &&
                    187 == b[1] &&
                    191 == b[2] &&
                    (b = b.subarray(3));
                  b = escape(tc(b));
                  try {
                    return decodeURIComponent(b);
                  } catch (c) {
                    throw new D(2, 2, 2004);
                  }
                }
                z("shaka.util.StringUtils.fromUTF8", sc);
                function uc(b, c, d) {
                  if (!b) return "";
                  if (!d && 0 != b.byteLength % 2) throw new D(2, 2, 2004);
                  if (b instanceof ArrayBuffer) var e = b;
                  else
                    (d = new Uint8Array(b.byteLength)),
                      d.set(new Uint8Array(b)),
                      (e = d.buffer);
                  b = Math.floor(b.byteLength / 2);
                  d = new Uint16Array(b);
                  e = new DataView(e);
                  for (var f = 0; f < b; f++) d[f] = e.getUint16(2 * f, c);
                  return tc(d);
                }
                z("shaka.util.StringUtils.fromUTF16", uc);
                function xc(b) {
                  var c = new Uint8Array(b);
                  if (239 == c[0] && 187 == c[1] && 191 == c[2]) return sc(c);
                  if (254 == c[0] && 255 == c[1]) return uc(c.subarray(2), !1);
                  if (255 == c[0] && 254 == c[1]) return uc(c.subarray(2), !0);
                  var d = function (b, c) {
                    return b.byteLength <= c || (32 <= b[c] && 126 >= b[c]);
                  }.bind(null, c);
                  if (0 == c[0] && 0 == c[2]) return uc(b, !1);
                  if (0 == c[1] && 0 == c[3]) return uc(b, !0);
                  if (d(0) && d(1) && d(2) && d(3)) return sc(b);
                  throw new D(2, 2, 2003);
                }
                z("shaka.util.StringUtils.fromBytesAutoDetect", xc);
                function yc(b) {
                  b = encodeURIComponent(b);
                  b = unescape(b);
                  for (
                    var c = new Uint8Array(b.length), d = 0;
                    d < b.length;
                    ++d
                  )
                    c[d] = b.charCodeAt(d);
                  return c.buffer;
                }
                z("shaka.util.StringUtils.toUTF8", yc);
                function zc(b, c) {
                  for (
                    var d = new Uint8Array(2 * b.length),
                      e = new DataView(d.buffer),
                      f = 0;
                    f < b.length;
                    ++f
                  )
                    e.setUint16(2 * f, b.charCodeAt(f), c);
                  return d.buffer;
                }
                z("shaka.util.StringUtils.toUTF16", zc);
                function tc(b) {
                  for (var c = "", d = 0; d < b.length; d += 16e3)
                    c += String.fromCharCode.apply(
                      null,
                      b.subarray(d, d + 16e3)
                    );
                  return c;
                }
                function Ac(b, c) {
                  var d = tc(b);
                  c = void 0 == c ? !0 : c;
                  d = window.btoa(d).replace(/\+/g, "-").replace(/\//g, "_");
                  return c ? d : d.replace(/=*$/, "");
                }
                z("shaka.util.Uint8ArrayUtils.toBase64", Ac);
                function Bc(b) {
                  b = window.atob(b.replace(/-/g, "+").replace(/_/g, "/"));
                  for (
                    var c = new Uint8Array(b.length), d = 0;
                    d < b.length;
                    ++d
                  )
                    c[d] = b.charCodeAt(d);
                  return c;
                }
                z("shaka.util.Uint8ArrayUtils.fromBase64", Bc);
                function Cc(b) {
                  for (
                    var c = new Uint8Array(b.length / 2), d = 0;
                    d < b.length;
                    d += 2
                  )
                    c[d / 2] = window.parseInt(b.substr(d, 2), 16);
                  return c;
                }
                z("shaka.util.Uint8ArrayUtils.fromHex", Cc);
                function Dc(b) {
                  for (var c = "", d = 0; d < b.length; ++d) {
                    var e = b[d].toString(16);
                    1 == e.length && (e = "0" + e);
                    c += e;
                  }
                  return c;
                }
                z("shaka.util.Uint8ArrayUtils.toHex", Dc);
                function Ec(b, c) {
                  if (!b && !c) return !0;
                  if (!b || !c || b.length != c.length) return !1;
                  for (var d = 0; d < b.length; ++d)
                    if (b[d] != c[d]) return !1;
                  return !0;
                }
                z("shaka.util.Uint8ArrayUtils.equal", Ec);
                function Fc(b) {
                  for (var c = [], d = 0; d < arguments.length; ++d)
                    c[d] = arguments[d];
                  for (var e = (d = 0); e < c.length; ++e) d += c[e].length;
                  d = new Uint8Array(d);
                  for (var f = (e = 0); f < c.length; ++f)
                    d.set(c[f], e), (e += c[f].length);
                  return d;
                }
                z("shaka.util.Uint8ArrayUtils.concat", Fc);
                function Gc(b) {
                  var c = this;
                  this.w = b;
                  this.v = new Set();
                  this.m = this.h = null;
                  this.N = !1;
                  this.a = null;
                  this.i = new ac();
                  this.b = new Map();
                  this.o = [];
                  this.j = new G();
                  this.f = null;
                  this.g = function (d) {
                    c.j.reject(d);
                    b.onError(d);
                  };
                  this.ka = new Map();
                  this.S = new Map();
                  this.K = new B(function () {
                    return Hc(c);
                  });
                  this.c = !1;
                  this.W = new G();
                  this.C = !1;
                  this.F = [];
                  this.ja = !1;
                  this.V = new B(function () {
                    Ic(c);
                  }).Ia(1);
                  this.j["catch"](function () {});
                }
                p = Gc.prototype;
                p.destroy = function () {
                  var b = this;
                  return t(function d() {
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          if (b.c) return u(d, b.W, 0);
                          b.c = !0;
                          return u(d, Jc(b), 4);
                        case 4:
                          b.W.resolve(), d.A(0);
                      }
                    });
                  });
                };
                function Jc(b) {
                  return t(function d() {
                    var e;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            b.i.a(),
                            (b.i = null),
                            b.j.reject(),
                            b.V.stop(),
                            (b.V = null),
                            b.K.stop(),
                            (b.K = null),
                            (e = Array.from(b.b.keys())),
                            b.b.clear(),
                            u(
                              d,
                              Promise.all(
                                e.map(function (b) {
                                  return Promise.resolve().then(function () {
                                    return t(function k() {
                                      return y(k, function (d) {
                                        switch (d.l) {
                                          case 1:
                                            return ya(d, 2), u(d, Kc(b), 4);
                                          case 4:
                                            Aa(d, 0);
                                            break;
                                          case 2:
                                            Da(d), v(d);
                                        }
                                      });
                                    });
                                  });
                                })
                              ),
                              2
                            )
                          );
                        case 2:
                          if (!b.m) {
                            d.A(3);
                            break;
                          }
                          ya(d, 4);
                          return u(d, b.m.setMediaKeys(null), 6);
                        case 6:
                          Aa(d, 5);
                          break;
                        case 4:
                          Da(d);
                        case 5:
                          b.m = null;
                        case 3:
                          (b.a = null),
                            b.v.clear(),
                            (b.h = null),
                            (b.o = []),
                            (b.f = null),
                            (b.g = null),
                            (b.w = null),
                            v(d);
                      }
                    });
                  });
                }
                p.configure = function (b) {
                  this.f = b;
                };
                function Lc(b, c, d) {
                  b.o = [];
                  b.C = d;
                  return Mc(b, c);
                }
                function Nc(b, c, d) {
                  b.o = d;
                  b.C = 0 < d.length;
                  return Mc(b, c);
                }
                function Oc(b, c, d, e, f, g) {
                  var h = new Map();
                  h.set(c, {
                    audioCapabilities: f,
                    videoCapabilities: g,
                    distinctiveIdentifier: "optional",
                    persistentState: "required",
                    sessionTypes: ["persistent-license"],
                    label: c,
                    drmInfos: [
                      {
                        keySystem: c,
                        licenseServerUri: d,
                        distinctiveIdentifierRequired: !1,
                        persistentStateRequired: !0,
                        audioRobustness: "",
                        videoRobustness: "",
                        serverCertificate: e,
                        initData: null,
                        keyIds: null,
                      },
                    ],
                  });
                  return Pc(b, h);
                }
                function Mc(b, c) {
                  var d = c.some(function (b) {
                    return 0 < b.drmInfos.length;
                  });
                  if (!d) {
                    var e = gc(b.f.servers);
                    Qc(c, e);
                  }
                  var f = Rc(b);
                  if (f) {
                    var g = r(c);
                    for (e = g.next(); !e.done; e = g.next())
                      e.value.drmInfos = [f];
                  }
                  f = r(c);
                  for (e = f.next(); !e.done; e = f.next())
                    for (
                      e = r(e.value.drmInfos), g = e.next();
                      !g.done;
                      g = e.next()
                    )
                      Sc(g.value, gc(b.f.servers), gc(b.f.advanced || {}));
                  e = Tc(b, c);
                  if (!e.size) return (b.N = !0), Promise.resolve();
                  e = Pc(b, e);
                  return d ? e : e["catch"](function () {});
                }
                p.zb = function (b) {
                  var c = this;
                  if (!this.h)
                    return (
                      dc(this.i, b, "encrypted", function () {
                        c.g(new D(2, 6, 6010));
                      }),
                      Promise.resolve()
                    );
                  this.m = b;
                  dc(this.i, this.m, "play", function () {
                    for (var b = 0; b < c.F.length; b++) Uc(c, c.F[b]);
                    c.ja = !0;
                    c.F = [];
                  });
                  b = this.m.setMediaKeys(this.h);
                  b = b["catch"](function (b) {
                    return Promise.reject(new D(2, 6, 6003, b.message));
                  });
                  var d = Vc(this);
                  return Promise.all([b, d])
                    .then(function () {
                      if (c.c) return Promise.reject();
                      Wc(c);
                      c.a.initData.length ||
                        c.o.length ||
                        L(c.i, c.m, "encrypted", function (b) {
                          return Xc(
                            c,
                            b.initDataType,
                            new Uint8Array(b.initData)
                          );
                        });
                    })
                    ["catch"](function (b) {
                      if (!c.c) return Promise.reject(b);
                    });
                };
                function Vc(b) {
                  return t(function d() {
                    var e;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          if (
                            !(
                              b.h &&
                              b.a &&
                              b.a.serverCertificate &&
                              b.a.serverCertificate.length
                            )
                          ) {
                            d.A(0);
                            break;
                          }
                          ya(d, 3);
                          return u(
                            d,
                            b.h.setServerCertificate(b.a.serverCertificate),
                            5
                          );
                        case 5:
                          Aa(d, 0);
                          break;
                        case 3:
                          return (
                            (e = Da(d)),
                            d["return"](
                              Promise.reject(new D(2, 6, 6004, e.message))
                            )
                          );
                      }
                    });
                  });
                }
                function Yc(b, c) {
                  return t(function e() {
                    var f, g, h;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return u(e, Zc(b, c), 2);
                        case 2:
                          f = e.s;
                          if (!f) return e["return"]();
                          g = [];
                          if ((h = b.b.get(f))) (h.ua = new G()), g.push(h.ua);
                          g.push(f.remove());
                          return u(e, Promise.all(g), 0);
                      }
                    });
                  });
                }
                function Wc(b) {
                  var c = b.a ? b.a.initData : [];
                  c.forEach(function (c) {
                    return $c(b, c.initDataType, c.initData);
                  });
                  b.o.forEach(function (c) {
                    return Zc(b, c);
                  });
                  c.length || b.o.length || b.j.resolve();
                  return b.j;
                }
                function Xc(b, c, d) {
                  var e = b.b.values();
                  e = r(e);
                  for (var f = e.next(); !f.done; f = e.next())
                    if (Ec(d, f.value.initData)) return;
                  $c(b, c, d);
                }
                p.keySystem = function () {
                  return this.a ? this.a.keySystem : "";
                };
                function ad(b, c) {
                  return pc("Edge/") ? !0 : b.v.has(c);
                }
                function bd(b) {
                  b = b.b.keys();
                  b = ec(b, function (b) {
                    return b.sessionId;
                  });
                  return Array.from(b);
                }
                p.bc = function () {
                  var b = Infinity,
                    c = this.b.keys();
                  c = r(c);
                  for (var d = c.next(); !d.done; d = c.next())
                    (d = d.value),
                      isNaN(d.expiration) || (b = Math.min(b, d.expiration));
                  return b;
                };
                function Tc(b, c) {
                  for (
                    var d = new Set(), e = r(c), f = e.next();
                    !f.done;
                    f = e.next()
                  ) {
                    var g = r(f.value.drmInfos);
                    for (f = g.next(); !f.done; f = g.next()) d.add(f.value);
                  }
                  e = r(d);
                  for (f = e.next(); !f.done; f = e.next())
                    Sc(f.value, gc(b.f.servers), gc(b.f.advanced || {}));
                  g = b.C ? "required" : "optional";
                  var h = b.C ? ["persistent-license"] : ["temporary"];
                  e = new Map();
                  d = r(d);
                  for (f = d.next(); !f.done; f = d.next())
                    (f = f.value),
                      e.set(f.keySystem, {
                        audioCapabilities: [],
                        videoCapabilities: [],
                        distinctiveIdentifier: "optional",
                        persistentState: g,
                        sessionTypes: h,
                        label: f.keySystem,
                        drmInfos: [],
                      });
                  d = r(c);
                  for (f = d.next(); !f.done; f = d.next()) {
                    f = f.value;
                    g = f.audio;
                    h = f.video;
                    var k = g ? ic(g.mimeType, g.codecs) : "",
                      l = h ? ic(h.mimeType, h.codecs) : "",
                      m = r(f.drmInfos);
                    for (f = m.next(); !f.done; f = m.next()) {
                      f = f.value;
                      var n = e.get(f.keySystem);
                      n.drmInfos.push(f);
                      f.distinctiveIdentifierRequired &&
                        (n.distinctiveIdentifier = "required");
                      f.persistentStateRequired &&
                        (n.persistentState = "required");
                      g &&
                        n.audioCapabilities.push({
                          robustness: f.audioRobustness || "",
                          contentType: k,
                        });
                      h &&
                        n.videoCapabilities.push({
                          robustness: f.videoRobustness || "",
                          contentType: l,
                        });
                    }
                  }
                  return e;
                }
                function Pc(b, c) {
                  if (1 == c.size && c.has(""))
                    return Promise.reject(new D(2, 6, 6e3));
                  for (
                    var d = r(c.values()), e = d.next();
                    !e.done;
                    e = d.next()
                  )
                    (e = e.value),
                      0 == e.audioCapabilities.length &&
                        delete e.audioCapabilities,
                      0 == e.videoCapabilities.length &&
                        delete e.videoCapabilities;
                  var f = (d = new G());
                  [!0, !1].forEach(
                    function (b) {
                      var d = this;
                      c.forEach(function (c, e) {
                        c.drmInfos.some(function (b) {
                          return !!b.licenseServerUri;
                        }) == b &&
                          (f = f["catch"](
                            function () {
                              if (!this.c)
                                return navigator.requestMediaKeySystemAccess(
                                  e,
                                  [c]
                                );
                            }.bind(d)
                          ));
                      });
                    }.bind(b)
                  );
                  f = f["catch"](function () {
                    return Promise.reject(new D(2, 6, 6001));
                  });
                  f = f
                    .then(
                      function (b) {
                        if (this.c) return Promise.reject();
                        this.v.clear();
                        var d = b.getConfiguration(),
                          e = d.videoCapabilities || [],
                          f = r(d.audioCapabilities || []);
                        for (d = f.next(); !d.done; d = f.next())
                          this.v.add(d.value.contentType);
                        e = r(e);
                        for (d = e.next(); !d.done; d = e.next())
                          this.v.add(d.value.contentType);
                        e = b.keySystem;
                        d = c.get(b.keySystem);
                        f = [];
                        var g = [],
                          n = [],
                          q = [];
                        cd(d.drmInfos, f, g, n, q);
                        this.a = {
                          keySystem: e,
                          licenseServerUri: f[0],
                          distinctiveIdentifierRequired:
                            "required" == d.distinctiveIdentifier,
                          persistentStateRequired:
                            "required" == d.persistentState,
                          audioRobustness: d.audioCapabilities
                            ? d.audioCapabilities[0].robustness
                            : "",
                          videoRobustness: d.videoCapabilities
                            ? d.videoCapabilities[0].robustness
                            : "",
                          serverCertificate: g[0],
                          initData: n,
                          keyIds: q,
                        };
                        return this.a.licenseServerUri
                          ? b.createMediaKeys()
                          : Promise.reject(new D(2, 6, 6012, this.a.keySystem));
                      }.bind(b)
                    )
                    .then(
                      function (b) {
                        if (this.c) return Promise.reject();
                        this.h = b;
                        this.N = !0;
                      }.bind(b)
                    )
                    ["catch"](
                      function (b) {
                        if (!this.c)
                          return (
                            (this.a = null),
                            this.v.clear(),
                            b instanceof D
                              ? Promise.reject(b)
                              : Promise.reject(new D(2, 6, 6002, b.message))
                          );
                      }.bind(b)
                    );
                  d.reject();
                  return f;
                }
                function Rc(b) {
                  b = gc(b.f.clearKeys);
                  if (0 == b.size) return null;
                  var c = [],
                    d = [];
                  b.forEach(function (b, e) {
                    var f = Cc(e),
                      g = Cc(b);
                    f = { kty: "oct", kid: Ac(f, !1), k: Ac(g, !1) };
                    c.push(f);
                    d.push(f.kid);
                  });
                  b = JSON.stringify({ keys: c });
                  var e = JSON.stringify({ kids: d });
                  e = [
                    { initData: new Uint8Array(yc(e)), initDataType: "keyids" },
                  ];
                  return {
                    keySystem: "org.w3.clearkey",
                    licenseServerUri:
                      "data:application/json;base64," + window.btoa(b),
                    distinctiveIdentifierRequired: !1,
                    persistentStateRequired: !1,
                    audioRobustness: "",
                    videoRobustness: "",
                    serverCertificate: null,
                    initData: e,
                    keyIds: [],
                  };
                }
                function Zc(b, c) {
                  try {
                    var d = b.h.createSession("persistent-license");
                  } catch (g) {
                    var e = new D(2, 6, 6005, g.message);
                    b.g(e);
                    return Promise.reject(e);
                  }
                  L(b.i, d, "message", b.Nd.bind(b));
                  L(b.i, d, "keystatuseschange", b.Ld.bind(b));
                  var f = {
                    initData: null,
                    loaded: !1,
                    Tc: Infinity,
                    ua: null,
                  };
                  b.b.set(d, f);
                  return d.load(c).then(
                    function (b) {
                      if (this.c) return Promise.reject();
                      if (b)
                        return (f.loaded = !0), dd(this) && this.j.resolve(), d;
                      this.b["delete"](d);
                      this.g(new D(2, 6, 6013));
                    }.bind(b),
                    function (b) {
                      this.c ||
                        (this.b["delete"](d),
                        this.g(new D(2, 6, 6005, b.message)));
                    }.bind(b)
                  );
                }
                function $c(b, c, d) {
                  try {
                    var e = b.C
                      ? b.h.createSession("persistent-license")
                      : b.h.createSession();
                  } catch (f) {
                    b.g(new D(2, 6, 6005, f.message));
                    return;
                  }
                  L(b.i, e, "message", b.Nd.bind(b));
                  L(b.i, e, "keystatuseschange", b.Ld.bind(b));
                  b.b.set(e, {
                    initData: d,
                    loaded: !1,
                    Tc: Infinity,
                    ua: null,
                  });
                  e.generateRequest(c, d.buffer)["catch"](function (c) {
                    if (!b.c) {
                      b.b["delete"](e);
                      if (c.errorCode && c.errorCode.systemCode) {
                        var d = c.errorCode.systemCode;
                        0 > d && (d += Math.pow(2, 32));
                        d = "0x" + d.toString(16);
                      }
                      b.g(new D(2, 6, 6006, c.message, c, d));
                    }
                  });
                }
                p.Nd = function (b) {
                  this.f.delayLicenseRequestUntilPlayed &&
                  this.m.paused &&
                  !this.ja
                    ? this.F.push(b)
                    : Uc(this, b);
                };
                function Uc(b, c) {
                  var d = c.target,
                    e = b.b.get(d),
                    f = b.a.licenseServerUri,
                    g = b.f.advanced[b.a.keySystem];
                  "individualization-request" == c.messageType &&
                    g &&
                    g.individualizationServer &&
                    (f = g.individualizationServer);
                  f = Sb([f], b.f.retryParameters);
                  f.body = c.message;
                  f.method = "POST";
                  f.licenseRequestType = c.messageType;
                  ("com.microsoft.playready" != b.a.keySystem &&
                    "com.chromecast.playready" != b.a.keySystem) ||
                    ed(f);
                  b.a.keySystem.startsWith("com.apple.fps") && fd(f);
                  b.w.nb
                    .request(2, f)
                    .promise.then(
                      function (b) {
                        if (this.c) return Promise.reject();
                        this.a.keySystem.startsWith("com.apple.fps") && gd(b);
                        return d.update(b.data).then(
                          function () {
                            var b = this;
                            this.w.onEvent(new I("drmsessionupdate"));
                            e &&
                              (e.ua && e.ua.resolve(),
                              new B(function () {
                                e.loaded = !0;
                                dd(b) && b.j.resolve();
                              }).O(hd));
                          }.bind(this)
                        );
                      }.bind(b),
                      function (b) {
                        this.c ||
                          ((b = new D(2, 6, 6007, b)),
                          this.g(b),
                          e && e.ua && e.ua.reject(b));
                      }.bind(b)
                    )
                    ["catch"](
                      function (b) {
                        this.c ||
                          ((b = new D(2, 6, 6008, b.message)),
                          this.g(b),
                          e && e.ua && e.ua.reject(b));
                      }.bind(b)
                    );
                }
                function ed(b) {
                  var c = uc(b.body, !0, !0);
                  if (c.includes("PlayReadyKeyMessage")) {
                    c = new DOMParser().parseFromString(c, "application/xml");
                    for (
                      var d = c.getElementsByTagName("HttpHeader"), e = 0;
                      e < d.length;
                      ++e
                    )
                      b.headers[d[e].querySelector("name").textContent] =
                        d[e].querySelector("value").textContent;
                    b.body = Bc(
                      c.querySelector("Challenge").textContent
                    ).buffer;
                  } else b.headers["Content-Type"] = "text/xml; charset=utf-8";
                }
                function fd(b) {
                  var c = new Uint8Array(b.body);
                  c = "spc=" + Ac(c);
                  b.headers["Content-Type"] =
                    "application/x-www-form-urlencoded";
                  b.body = yc(c);
                }
                function gd(b) {
                  try {
                    var c = sc(b.data);
                  } catch (d) {
                    return;
                  }
                  c = c.trim();
                  "<ckc>" === c.substr(0, 5) &&
                    "</ckc>" === c.substr(-6) &&
                    (c = c.slice(5, -6));
                  try {
                    c = JSON.parse(c).ckc;
                  } catch (d) {}
                  b.data = Bc(c).buffer;
                }
                p.Ld = function (b) {
                  b = b.target;
                  var c = this.b.get(b),
                    d = !1;
                  b.keyStatuses.forEach(
                    function (b, e) {
                      if ("string" == typeof e) {
                        var f = e;
                        e = b;
                        b = f;
                      }
                      if (
                        "com.microsoft.playready" == this.a.keySystem &&
                        16 == e.byteLength &&
                        !pc("Tizen")
                      ) {
                        f = new DataView(e);
                        var g = f.getUint32(0, !0),
                          l = f.getUint16(4, !0),
                          m = f.getUint16(6, !0);
                        f.setUint32(0, g, !1);
                        f.setUint16(4, l, !1);
                        f.setUint16(6, m, !1);
                      }
                      "com.microsoft.playready" == this.a.keySystem &&
                        "status-pending" == b &&
                        (b = "usable");
                      "status-pending" != b && (c.loaded = !0);
                      "expired" == b && (d = !0);
                      f = Dc(new Uint8Array(e));
                      this.ka.set(f, b);
                    }.bind(this)
                  );
                  var e = b.expiration - Date.now();
                  (0 > e || (d && 1e3 > e)) &&
                    c &&
                    !c.ua &&
                    (this.b["delete"](b), b.close()["catch"](function () {}));
                  dd(this) && (this.j.resolve(), this.K.O(id));
                };
                function Hc(b) {
                  var c = b.ka,
                    d = b.S;
                  d.clear();
                  c.forEach(function (b, c) {
                    return d.set(c, b);
                  });
                  c = Array.from(d.values());
                  c.length &&
                    c.every(function (b) {
                      return "expired" == b;
                    }) &&
                    b.g(new D(2, 6, 6014));
                  b.w.gc(hc(d));
                }
                function jd() {
                  function b(b) {
                    return t(function h() {
                      var c, f, m;
                      return y(h, function (h) {
                        switch (h.l) {
                          case 1:
                            return (
                              ya(h, 2),
                              u(
                                h,
                                navigator.requestMediaKeySystemAccess(b, d),
                                4
                              )
                            );
                          case 4:
                            return (
                              (c = h.s),
                              (m = (f = c.getConfiguration().sessionTypes)
                                ? f.includes("persistent-license")
                                : !1),
                              pc("Tizen 3") && (m = !1),
                              e.set(b, { persistentState: m }),
                              u(h, c.createMediaKeys(), 5)
                            );
                          case 5:
                            Aa(h, 0);
                            break;
                          case 2:
                            Da(h), e.set(b, null), v(h);
                        }
                      });
                    });
                  }
                  var c = [
                      { contentType: 'video/mp4; codecs="avc1.42E01E"' },
                      { contentType: 'video/webm; codecs="vp8"' },
                    ],
                    d = [
                      {
                        videoCapabilities: c,
                        persistentState: "required",
                        sessionTypes: ["persistent-license"],
                      },
                      { videoCapabilities: c },
                    ],
                    e = new Map();
                  c =
                    "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime"
                      .split(" ")
                      .map(function (c) {
                        return b(c);
                      });
                  return Promise.all(c).then(function () {
                    return hc(e);
                  });
                }
                function kd(b, c) {
                  var d = c.audio,
                    e = c.video;
                  if (
                    (d && d.encrypted && !ad(b, ic(d.mimeType, d.codecs))) ||
                    (e && e.encrypted && !ad(b, ic(e.mimeType, e.codecs)))
                  )
                    return !1;
                  var f = b.keySystem();
                  return (
                    0 == c.drmInfos.length ||
                    c.drmInfos.some(function (b) {
                      return b.keySystem == f;
                    })
                  );
                }
                function ld(b, c) {
                  if (!b.length) return c;
                  if (!c.length) return b;
                  for (var d = [], e = 0; e < b.length; e++)
                    for (var f = 0; f < c.length; f++)
                      if (b[e].keySystem == c[f].keySystem) {
                        var g = b[e];
                        f = c[f];
                        var h = [];
                        h = h.concat(g.initData || []);
                        h = h.concat(f.initData || []);
                        var k = [];
                        k = k.concat(g.keyIds);
                        k = k.concat(f.keyIds);
                        d.push({
                          keySystem: g.keySystem,
                          licenseServerUri:
                            g.licenseServerUri || f.licenseServerUri,
                          distinctiveIdentifierRequired:
                            g.distinctiveIdentifierRequired ||
                            f.distinctiveIdentifierRequired,
                          persistentStateRequired:
                            g.persistentStateRequired ||
                            f.persistentStateRequired,
                          videoRobustness:
                            g.videoRobustness || f.videoRobustness,
                          audioRobustness:
                            g.audioRobustness || f.audioRobustness,
                          serverCertificate:
                            g.serverCertificate || f.serverCertificate,
                          initData: h,
                          keyIds: k,
                        });
                        break;
                      }
                  return d;
                }
                function Ic(b) {
                  b.b.forEach(function (c, d) {
                    var e = c.Tc,
                      f = d.expiration;
                    isNaN(f) && (f = Infinity);
                    f != e &&
                      (b.w.onExpirationUpdated(d.sessionId, f), (c.Tc = f));
                  });
                }
                function dd(b) {
                  b = b.b.values();
                  return fc(b, function (b) {
                    return b.loaded;
                  });
                }
                function Qc(b, c) {
                  var d = [];
                  c.forEach(function (b, c) {
                    d.push({
                      keySystem: c,
                      licenseServerUri: b,
                      distinctiveIdentifierRequired: !1,
                      persistentStateRequired: !1,
                      audioRobustness: "",
                      videoRobustness: "",
                      serverCertificate: null,
                      initData: [],
                      keyIds: [],
                    });
                  });
                  for (var e = r(b), f = e.next(); !f.done; f = e.next())
                    f.value.drmInfos = d;
                }
                function cd(b, c, d, e, f) {
                  b.forEach(function (b) {
                    c.includes(b.licenseServerUri) ||
                      c.push(b.licenseServerUri);
                    b.serverCertificate &&
                      (d.some(function (c) {
                        return Ec(c, b.serverCertificate);
                      }) ||
                        d.push(b.serverCertificate));
                    b.initData &&
                      b.initData.forEach(function (b) {
                        e.some(function (c) {
                          return c.keyId && c.keyId == b.keyId
                            ? !0
                            : c.initDataType == b.initDataType &&
                                Ec(c.initData, b.initData);
                        }) || e.push(b);
                      });
                    if (b.keyIds)
                      for (var g = 0; g < b.keyIds.length; ++g)
                        f.includes(b.keyIds[g]) || f.push(b.keyIds[g]);
                  });
                }
                function Sc(b, c, d) {
                  if (
                    b.keySystem &&
                    ("org.w3.clearkey" != b.keySystem || !b.licenseServerUri)
                  ) {
                    c.size &&
                      ((c = c.get(b.keySystem) || ""),
                      (b.licenseServerUri = c));
                    b.keyIds || (b.keyIds = []);
                    if ((d = d.get(b.keySystem)))
                      b.distinctiveIdentifierRequired ||
                        (b.distinctiveIdentifierRequired =
                          d.distinctiveIdentifierRequired),
                        b.persistentStateRequired ||
                          (b.persistentStateRequired =
                            d.persistentStateRequired),
                        b.videoRobustness ||
                          (b.videoRobustness = d.videoRobustness),
                        b.audioRobustness ||
                          (b.audioRobustness = d.audioRobustness),
                        b.serverCertificate ||
                          (b.serverCertificate = d.serverCertificate);
                    window.cast &&
                      window.cast.__platform__ &&
                      "com.microsoft.playready" == b.keySystem &&
                      (b.keySystem = "com.chromecast.playready");
                  }
                }
                function Kc(b) {
                  return t(function d() {
                    var e;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (e = new Promise(function (b) {
                              new B(b).O(md);
                            })),
                            u(
                              d,
                              Promise.race([
                                b.close().then(function () {
                                  return !0;
                                }),
                                e.then(function () {
                                  return !1;
                                }),
                              ]),
                              2
                            )
                          );
                        case 2:
                          v(d);
                      }
                    });
                  });
                }
                var md = 1,
                  hd = 5,
                  id = 0.5;
                function nd() {
                  this.a = new muxjs.mp4.CaptionParser();
                  this.g = [];
                  this.f = {};
                }
                nd.prototype.init = function (b) {
                  var c = muxjs.mp4.probe;
                  b = new Uint8Array(b);
                  this.g = c.videoTrackIds(b);
                  this.f = c.timescale(b);
                  this.a.init();
                };
                nd.prototype.b = function (b, c) {
                  var d = new Uint8Array(b);
                  (d = this.a.parse(d, this.g, this.f)) &&
                    d.captions &&
                    c(d.captions);
                  this.a.clearParsedCaptions();
                };
                nd.prototype.c = function () {
                  this.a.resetCaptionStream();
                };
                function od() {}
                od.prototype.init = function () {};
                od.prototype.b = function () {};
                od.prototype.c = function () {};
                function pd(b) {
                  return !b || (1 == b.length && 1e-6 > b.end(0) - b.start(0))
                    ? null
                    : b.length
                    ? b.end(b.length - 1)
                    : null;
                }
                function qd(b, c, d) {
                  d = void 0 === d ? 0 : d;
                  return !b ||
                    !b.length ||
                    (1 == b.length && 1e-6 > b.end(0) - b.start(0)) ||
                    c > b.end(b.length - 1)
                    ? !1
                    : c + d >= b.start(0);
                }
                function rd(b, c) {
                  if (
                    !b ||
                    !b.length ||
                    (1 == b.length && 1e-6 > b.end(0) - b.start(0))
                  )
                    return 0;
                  for (var d = 0, e = b.length - 1; 0 <= e && b.end(e) > c; --e)
                    d += b.end(e) - Math.max(b.start(e), c);
                  return d;
                }
                function sd(b) {
                  if (!b) return [];
                  for (var c = [], d = 0; d < b.length; d++)
                    c.push({ start: b.start(d), end: b.end(d) });
                  return c;
                }
                var td = {
                  te: function (b, c) {
                    return b.reduce(
                      function (b, c, f) {
                        return c["catch"](b.bind(null, f));
                      }.bind(null, c),
                      Promise.reject()
                    );
                  },
                  uc: function (b, c) {
                    return b.concat(c);
                  },
                  Gb: function () {},
                  Da: function (b) {
                    return null != b;
                  },
                };
                function ud(b, c) {
                  if (0 == c.length) return b;
                  var d = c.map(function (b) {
                    return new cb(b);
                  });
                  return b
                    .map(function (b) {
                      return new cb(b);
                    })
                    .map(function (b) {
                      return d.map(b.resolve.bind(b));
                    })
                    .reduce(td.uc, [])
                    .map(function (b) {
                      return b.toString();
                    });
                }
                function vd(b, c) {
                  return {
                    keySystem: b,
                    licenseServerUri: "",
                    distinctiveIdentifierRequired: !1,
                    persistentStateRequired: !1,
                    audioRobustness: "",
                    videoRobustness: "",
                    serverCertificate: null,
                    initData: c || [],
                    keyIds: [],
                  };
                }
                var wd = {
                    La: "video",
                    wb: "audio",
                    na: "text",
                    jg: "application",
                  },
                  xd = 1 / 15;
                function yd() {
                  this.a = new muxjs.mp4.Transmuxer({
                    keepOriginalTimestamps: !0,
                  });
                  this.b = null;
                  this.g = [];
                  this.c = [];
                  this.f = !1;
                  this.a.on("data", this.i.bind(this));
                  this.a.on("done", this.h.bind(this));
                }
                yd.prototype.destroy = function () {
                  this.a.dispose();
                  this.a = null;
                  return Promise.resolve();
                };
                function zd(b, c) {
                  return window.muxjs && "mp2t" == b.split(";")[0].split("/")[1]
                    ? c
                      ? MediaSource.isTypeSupported(Bd(c, b))
                      : MediaSource.isTypeSupported(Bd("audio", b)) ||
                        MediaSource.isTypeSupported(Bd("video", b))
                    : !1;
                }
                function Bd(b, c) {
                  var d = c.replace("mp2t", "mp4");
                  "audio" == b && (d = d.replace("video", "audio"));
                  var e = /avc1\.(66|77|100)\.(\d+)/.exec(d);
                  if (e) {
                    var f = "avc1.",
                      g = e[1],
                      h = Number(e[2]);
                    f =
                      ("66" == g
                        ? f + "4200"
                        : "77" == g
                        ? f + "4d00"
                        : f + "6400") + (h >> 4).toString(16);
                    f += (h & 15).toString(16);
                    d = d.replace(e[0], f);
                  }
                  return d;
                }
                function Cd(b, c) {
                  b.f = !0;
                  b.b = new G();
                  b.g = [];
                  b.c = [];
                  var d = new Uint8Array(c);
                  b.a.push(d);
                  b.a.flush();
                  b.f && b.b.reject(new D(2, 3, 3018));
                  return b.b;
                }
                yd.prototype.i = function (b) {
                  this.c = b.captions;
                  var c = new Uint8Array(
                    b.data.byteLength + b.initSegment.byteLength
                  );
                  c.set(b.initSegment, 0);
                  c.set(b.data, b.initSegment.byteLength);
                  this.g.push(c);
                };
                yd.prototype.h = function () {
                  var b = { data: Fc.apply(null, this.g), captions: this.c };
                  this.b.resolve(b);
                  this.f = !1;
                };
                function Dd(b, c, d) {
                  this.startTime = b;
                  this.direction = Ed;
                  this.endTime = c;
                  this.payload = d;
                  this.region = new Fd();
                  this.position = null;
                  this.positionAlign = Gd;
                  this.size = 100;
                  this.textAlign = Hd;
                  this.writingMode = Id;
                  this.lineInterpretation = Jd;
                  this.line = null;
                  this.lineHeight = "";
                  this.lineAlign = Kd;
                  this.displayAlign = Ld;
                  this.backgroundColor = this.color = "";
                  this.backgroundImage = null;
                  this.fontSize = "";
                  this.fontWeight = Md;
                  this.fontStyle = Nd;
                  this.fontFamily = "";
                  this.textDecoration = [];
                  this.wrapLine = !0;
                  this.id = "";
                }
                z("shaka.text.Cue", Dd);
                var Gd = "auto";
                Dd.positionAlign = {
                  LEFT: "line-left",
                  RIGHT: "line-right",
                  CENTER: "center",
                  AUTO: Gd,
                };
                var Hd = "center",
                  Od = {
                    LEFT: "left",
                    RIGHT: "right",
                    CENTER: Hd,
                    START: "start",
                    END: "end",
                  };
                Dd.textAlign = Od;
                var Ld = "after",
                  Pd = { BEFORE: "before", CENTER: "center", AFTER: Ld };
                Dd.displayAlign = Pd;
                var Ed = "ltr";
                Dd.direction = {
                  HORIZONTAL_LEFT_TO_RIGHT: Ed,
                  HORIZONTAL_RIGHT_TO_LEFT: "rtl",
                };
                var Id = "horizontal-tb";
                Dd.writingMode = {
                  HORIZONTAL_TOP_TO_BOTTOM: Id,
                  VERTICAL_LEFT_TO_RIGHT: "vertical-lr",
                  VERTICAL_RIGHT_TO_LEFT: "vertical-rl",
                };
                var Jd = 0;
                Dd.lineInterpretation = { LINE_NUMBER: Jd, PERCENTAGE: 1 };
                var Kd = "start",
                  Qd = { CENTER: "center", START: Kd, END: "end" };
                Dd.lineAlign = Qd;
                var Md = 400;
                Dd.fontWeight = { NORMAL: Md, BOLD: 700 };
                var Nd = "normal",
                  Rd = { NORMAL: Nd, ITALIC: "italic", OBLIQUE: "oblique" };
                Dd.fontStyle = Rd;
                Dd.textDecoration = {
                  UNDERLINE: "underline",
                  LINE_THROUGH: "lineThrough",
                  OVERLINE: "overline",
                };
                function Fd() {
                  this.id = "";
                  this.regionAnchorY =
                    this.regionAnchorX =
                    this.viewportAnchorY =
                    this.viewportAnchorX =
                      0;
                  this.height = this.width = 100;
                  this.viewportAnchorUnits =
                    this.widthUnits =
                    this.heightUnits =
                      Sd;
                  this.scroll = Td;
                }
                z("shaka.text.CueRegion", Fd);
                var Sd = 1;
                Fd.units = { PX: 0, PERCENTAGE: Sd, LINES: 2 };
                var Td = "";
                Fd.scrollMode = { NONE: Td, UP: "up" };
                function Ud(b) {
                  this.g = null;
                  this.c = b;
                  this.f = this.m = 0;
                  this.h = Infinity;
                  this.b = this.a = null;
                  this.j = "";
                  this.i = new Map();
                }
                var Vd = {};
                z("shaka.text.TextEngine.registerParser", function (b, c) {
                  Vd[b] = c;
                });
                z("shaka.text.TextEngine.unregisterParser", function (b) {
                  delete Vd[b];
                });
                function Wd(b) {
                  return Vd[b] || (window.muxjs && "application/cea-608" == b)
                    ? !0
                    : !1;
                }
                Ud.prototype.destroy = function () {
                  this.c = this.g = null;
                  this.i.clear();
                  return Promise.resolve();
                };
                function Xd(b, c) {
                  "application/cea-608" != c && (b.g = new Vd[c]());
                }
                Ud.prototype.Gc = function (b) {
                  var c = { periodStart: 0, segmentStart: null, segmentEnd: 0 };
                  try {
                    return this.g.parseMedia(new Uint8Array(b), c)[0].startTime;
                  } catch (d) {
                    throw new D(2, 2, 2009, d);
                  }
                };
                function Yd(b, c, d, e) {
                  return Promise.resolve().then(
                    function () {
                      if (this.g && this.c)
                        if (null == d || null == e)
                          this.g.parseInit(new Uint8Array(c));
                        else {
                          var b = {
                            periodStart: this.m,
                            segmentStart: d,
                            segmentEnd: e,
                          };
                          b = this.g.parseMedia(new Uint8Array(c), b).filter(
                            function (b) {
                              return (
                                b.startTime >= this.f && b.startTime < this.h
                              );
                            }.bind(this)
                          );
                          this.c.append(b);
                          null == this.a && (this.a = Math.max(d, this.f));
                          this.b = Math.min(e, this.h);
                        }
                    }.bind(b)
                  );
                }
                Ud.prototype.remove = function (b, c) {
                  return Promise.resolve().then(
                    function () {
                      !this.c ||
                        !this.c.remove(b, c) ||
                        null == this.a ||
                        c <= this.a ||
                        b >= this.b ||
                        (b <= this.a && c >= this.b
                          ? (this.a = this.b = null)
                          : b <= this.a && c < this.b
                          ? (this.a = c)
                          : b > this.a && c >= this.b && (this.b = b));
                    }.bind(this)
                  );
                };
                Ud.prototype.me = function (b) {
                  this.c.append(b);
                };
                Ud.prototype.appendCues = Ud.prototype.me;
                Ud.prototype.nc = function (b, c) {
                  this.j = b;
                  var d = this.i.get(b);
                  if (d)
                    for (
                      var e = r(d.keys()), f = e.next();
                      !f.done;
                      f = e.next()
                    )
                      if ((f = d.get(f.value)))
                        (f = f.filter(function (b) {
                          return b.endTime <= c;
                        })),
                          this.c.append(f);
                };
                Ud.prototype.setSelectedClosedCaptionId = Ud.prototype.nc;
                function Zd(b, c, d, e, f) {
                  var g = d + " " + e,
                    h = new Map();
                  c = r(c);
                  for (var k = c.next(); !k.done; k = c.next()) {
                    var l = k.value;
                    k = l.stream;
                    h.has(k) || h.set(k, new Map());
                    h.get(k).has(g) || h.get(k).set(g, []);
                    l.startTime += f;
                    l.endTime += f;
                    l.startTime >= b.f &&
                      l.startTime < b.h &&
                      ((l = new Dd(l.startTime, l.endTime, l.text)),
                      h.get(k).get(g).push(l),
                      k == b.j && b.c.append([l]));
                  }
                  f = r(h.keys());
                  for (g = f.next(); !g.done; g = f.next())
                    for (
                      g = g.value,
                        b.i.has(g) || b.i.set(g, new Map()),
                        c = r(h.get(g).keys()),
                        k = c.next();
                      !k.done;
                      k = c.next()
                    )
                      (k = k.value),
                        (l = h.get(g).get(k)),
                        b.i.get(g).set(k, l);
                  b.a =
                    null == b.a
                      ? Math.max(d, b.f)
                      : Math.min(b.a, Math.max(d, b.f));
                  b.b = Math.max(b.b, Math.min(e, b.h));
                }
                function $d(b, c, d) {
                  this.f = b;
                  this.h = d;
                  this.b = {};
                  this.a = null;
                  this.c = {};
                  this.i = new ac();
                  this.v = !1;
                  this.j = {};
                  this.m = c;
                  b = this.o = new G();
                  c = new MediaSource();
                  dc(this.i, c, "sourceopen", b.resolve);
                  this.f.src = ae(c);
                  this.g = c;
                }
                var ae = window.URL.createObjectURL;
                function be(b) {
                  var c = ic(b.mimeType, b.codecs),
                    d = jc(b);
                  return (
                    Wd(c) || MediaSource.isTypeSupported(d) || zd(c, b.type)
                  );
                }
                p = $d.prototype;
                p.destroy = function () {
                  var b = this;
                  this.v = !0;
                  var c = [],
                    d;
                  for (d in this.c) {
                    var e = this.c[d],
                      f = e[0];
                    this.c[d] = e.slice(0, 1);
                    f && c.push(f.p["catch"](td.Gb));
                    for (f = 1; f < e.length; ++f)
                      e[f].p["catch"](td.Gb), e[f].p.reject();
                  }
                  this.a && c.push(this.a.destroy());
                  this.h && c.push(this.h.destroy());
                  for (var g in this.j) c.push(this.j[g].destroy());
                  return Promise.all(c).then(function () {
                    b.i && (b.i.a(), (b.i = null));
                    b.f &&
                      (b.f.removeAttribute("src"), b.f.load(), (b.f = null));
                    b.g = null;
                    b.a = null;
                    b.h = null;
                    b.b = {};
                    b.j = {};
                    b.m = null;
                    b.c = {};
                  });
                };
                p.init = function (b, c) {
                  var d = this;
                  return t(function f() {
                    var g;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (g = wd), u(f, d.o, 2);
                        case 2:
                          b.forEach(function (b, f) {
                            var h = ic(b.mimeType, b.codecs);
                            f == g.na
                              ? ce(d, h)
                              : ((!c && MediaSource.isTypeSupported(h)) ||
                                  !zd(h, f) ||
                                  ((d.j[f] = new yd()), (h = Bd(f, h))),
                                (h = d.g.addSourceBuffer(h)),
                                L(d.i, h, "error", d.Sf.bind(d, f)),
                                L(d.i, h, "updateend", d.qb.bind(d, f)),
                                (d.b[f] = h),
                                (d.c[f] = []));
                          }),
                            v(f);
                      }
                    });
                  });
                };
                function ce(b, c) {
                  b.a || (b.a = new Ud(b.h));
                  Xd(b.a, c);
                }
                function de(b, c) {
                  if ("text" == c) var d = b.a.a;
                  else
                    (d = ee(b, c)),
                      (d =
                        !d || (1 == d.length && 1e-6 > d.end(0) - d.start(0))
                          ? null
                          : 1 == d.length && 0 > d.start(0)
                          ? 0
                          : d.length
                          ? d.start(0)
                          : null);
                  return d;
                }
                function fe(b, c) {
                  return "text" == c ? b.a.b : pd(ee(b, c));
                }
                function ge(b, c, d) {
                  if ("text" == c)
                    return (
                      (b = b.a),
                      null == b.b || b.b < d ? 0 : b.b - Math.max(d, b.a)
                    );
                  b = ee(b, c);
                  return rd(b, d);
                }
                p.Dc = function (b) {
                  b.total = sd(this.f.buffered);
                  b.audio = sd(ee(this, "audio"));
                  b.video = sd(ee(this, "video"));
                  b.text = [];
                  if (this.a) {
                    var c = this.a.a,
                      d = this.a.b;
                    null != c && null != d && b.text.push({ start: c, end: d });
                  }
                };
                function ee(b, c) {
                  try {
                    return b.b[c].buffered;
                  } catch (d) {
                    return null;
                  }
                }
                function he(b, c, d, e, f, g) {
                  if ("text" == c) return Yd(b.a, d, e, f);
                  if (b.j[c])
                    return Cd(b.j[c], d).then(
                      function (b) {
                        this.a || ce(this, "text/vtt");
                        b.captions &&
                          Zd(
                            this.a,
                            b.captions,
                            e,
                            f,
                            this.b.video.timestampOffset
                          );
                        return ie(
                          this,
                          c,
                          this.ae.bind(this, c, b.data.buffer)
                        );
                      }.bind(b)
                    );
                  g &&
                    window.muxjs &&
                    (b.a || ce(b, "text/vtt"),
                    null == e && null == f
                      ? b.m.init(d)
                      : b.m.b(d, function (c) {
                          c.length &&
                            Zd(b.a, c, e, f, b.b.video.timestampOffset);
                        }));
                  return ie(b, c, b.ae.bind(b, c, d));
                }
                p.nc = function (b) {
                  var c = fe(this, "video") || 0;
                  this.a.nc(b, c);
                };
                p.remove = function (b, c, d) {
                  return "text" == b
                    ? this.a.remove(c, d)
                    : ie(this, b, this.be.bind(this, b, c, d));
                };
                function je(b, c) {
                  if ("text" == c) {
                    if (!b.a) return Promise.resolve();
                    b.m.c();
                    return b.a.remove(0, Infinity);
                  }
                  return ie(b, c, b.be.bind(b, c, 0, b.g.duration));
                }
                p.flush = function (b) {
                  return "text" == b
                    ? Promise.resolve()
                    : ie(this, b, this.xe.bind(this, b));
                };
                function ke(b, c, d, e, f) {
                  return "text" == c
                    ? ((b.a.m = d),
                      (b = b.a),
                      (b.f = e),
                      (b.h = f),
                      Promise.resolve())
                    : Promise.all([
                        ie(b, c, b.ke.bind(b, c)),
                        ie(b, c, b.Nf.bind(b, c, d)),
                        ie(b, c, b.Kf.bind(b, c, e, f)),
                      ]);
                }
                p.endOfStream = function (b) {
                  return le(
                    this,
                    function () {
                      b ? this.g.endOfStream(b) : this.g.endOfStream();
                    }.bind(this)
                  );
                };
                p.ta = function (b) {
                  return le(
                    this,
                    function () {
                      this.g.duration = b;
                    }.bind(this)
                  );
                };
                p.Y = function () {
                  return this.g.duration;
                };
                p.ae = function (b, c) {
                  this.b[b].appendBuffer(c);
                };
                p.be = function (b, c, d) {
                  d <= c ? this.qb(b) : this.b[b].remove(c, d);
                };
                p.ke = function (b) {
                  var c = this.b[b].appendWindowStart,
                    d = this.b[b].appendWindowEnd;
                  this.b[b].abort();
                  this.b[b].appendWindowStart = c;
                  this.b[b].appendWindowEnd = d;
                  this.qb(b);
                };
                p.xe = function (b) {
                  this.f.currentTime -= 0.001;
                  this.qb(b);
                };
                p.Nf = function (b, c) {
                  0 > c && (c += 0.001);
                  this.b[b].timestampOffset = c;
                  this.qb(b);
                };
                p.Kf = function (b, c, d) {
                  this.b[b].appendWindowStart = 0;
                  this.b[b].appendWindowEnd = d;
                  this.b[b].appendWindowStart = c;
                  this.qb(b);
                };
                p.Sf = function (b) {
                  this.c[b][0].p.reject(
                    new D(2, 3, 3014, this.f.error ? this.f.error.code : 0)
                  );
                };
                p.qb = function (b) {
                  var c = this.c[b][0];
                  c && (c.p.resolve(), me(this, b));
                };
                function ie(b, c, d) {
                  if (b.v) return Promise.reject();
                  d = { start: d, p: new G() };
                  b.c[c].push(d);
                  if (1 == b.c[c].length)
                    try {
                      d.start();
                    } catch (e) {
                      "QuotaExceededError" == e.name
                        ? d.p.reject(new D(2, 3, 3017, c))
                        : d.p.reject(new D(2, 3, 3015, e)),
                        me(b, c);
                    }
                  return d.p;
                }
                function le(b, c) {
                  if (b.v) return Promise.reject();
                  var d = [],
                    e;
                  for (e in b.b) {
                    var f = new G(),
                      g = {
                        start: function (b) {
                          b.resolve();
                        }.bind(null, f),
                        p: f,
                      };
                    b.c[e].push(g);
                    d.push(f);
                    1 == b.c[e].length && g.start();
                  }
                  return Promise.all(d).then(
                    function () {
                      try {
                        c();
                      } catch (l) {
                        var b = Promise.reject(new D(2, 3, 3015, l));
                      }
                      for (var d in this.b) me(this, d);
                      return b;
                    }.bind(b),
                    function () {
                      return Promise.reject();
                    }.bind(b)
                  );
                }
                function me(b, c) {
                  b.c[c].shift();
                  var d = b.c[c][0];
                  if (d)
                    try {
                      d.start();
                    } catch (e) {
                      d.p.reject(new D(2, 3, 3015, e)), me(b, c);
                    }
                }
                function ne(b, c) {
                  b = M(b);
                  c = M(c);
                  return b.split("-")[0] == c.split("-")[0];
                }
                function oe(b, c) {
                  b = M(b);
                  c = M(c);
                  var d = b.split("-"),
                    e = c.split("-");
                  return d[0] == e[0] && 1 == d.length && 2 == e.length;
                }
                function M(b) {
                  var c = b.split("-");
                  b = c[0] || "";
                  c = c[1] || "";
                  b = b.toLowerCase();
                  b = pe.get(b) || b;
                  return (c = c.toUpperCase()) ? b + "-" + c : b;
                }
                function qe(b) {
                  return b.language
                    ? M(b.language)
                    : b.audio && b.audio.language
                    ? M(b.audio.language)
                    : b.video && b.video.language
                    ? M(b.video.language)
                    : "und";
                }
                function re(b, c) {
                  for (
                    var d = M(b), e = new Set(), f = r(c), g = f.next();
                    !g.done;
                    g = f.next()
                  )
                    e.add(M(g.value));
                  f = r(e);
                  for (g = f.next(); !g.done; g = f.next())
                    if (((g = g.value), g == d)) return g;
                  f = r(e);
                  for (g = f.next(); !g.done; g = f.next())
                    if (((g = g.value), oe(g, d))) return g;
                  f = r(e);
                  for (g = f.next(); !g.done; g = f.next()) {
                    var h = (g = g.value),
                      k = d;
                    h = M(h);
                    k = M(k);
                    h = h.split("-");
                    k = k.split("-");
                    if (2 == h.length && 2 == k.length && h[0] == k[0])
                      return g;
                  }
                  e = r(e);
                  for (g = e.next(); !g.done; g = e.next())
                    if (((f = g.value), oe(d, f))) return f;
                  return null;
                }
                var pe = new Map([
                  ["aar", "aa"],
                  ["abk", "ab"],
                  ["afr", "af"],
                  ["aka", "ak"],
                  ["alb", "sq"],
                  ["amh", "am"],
                  ["ara", "ar"],
                  ["arg", "an"],
                  ["arm", "hy"],
                  ["asm", "as"],
                  ["ava", "av"],
                  ["ave", "ae"],
                  ["aym", "ay"],
                  ["aze", "az"],
                  ["bak", "ba"],
                  ["bam", "bm"],
                  ["baq", "eu"],
                  ["bel", "be"],
                  ["ben", "bn"],
                  ["bih", "bh"],
                  ["bis", "bi"],
                  ["bod", "bo"],
                  ["bos", "bs"],
                  ["bre", "br"],
                  ["bul", "bg"],
                  ["bur", "my"],
                  ["cat", "ca"],
                  ["ces", "cs"],
                  ["cha", "ch"],
                  ["che", "ce"],
                  ["chi", "zh"],
                  ["chu", "cu"],
                  ["chv", "cv"],
                  ["cor", "kw"],
                  ["cos", "co"],
                  ["cre", "cr"],
                  ["cym", "cy"],
                  ["cze", "cs"],
                  ["dan", "da"],
                  ["deu", "de"],
                  ["div", "dv"],
                  ["dut", "nl"],
                  ["dzo", "dz"],
                  ["ell", "el"],
                  ["eng", "en"],
                  ["epo", "eo"],
                  ["est", "et"],
                  ["eus", "eu"],
                  ["ewe", "ee"],
                  ["fao", "fo"],
                  ["fas", "fa"],
                  ["fij", "fj"],
                  ["fin", "fi"],
                  ["fra", "fr"],
                  ["fre", "fr"],
                  ["fry", "fy"],
                  ["ful", "ff"],
                  ["geo", "ka"],
                  ["ger", "de"],
                  ["gla", "gd"],
                  ["gle", "ga"],
                  ["glg", "gl"],
                  ["glv", "gv"],
                  ["gre", "el"],
                  ["grn", "gn"],
                  ["guj", "gu"],
                  ["hat", "ht"],
                  ["hau", "ha"],
                  ["heb", "he"],
                  ["her", "hz"],
                  ["hin", "hi"],
                  ["hmo", "ho"],
                  ["hrv", "hr"],
                  ["hun", "hu"],
                  ["hye", "hy"],
                  ["ibo", "ig"],
                  ["ice", "is"],
                  ["ido", "io"],
                  ["iii", "ii"],
                  ["iku", "iu"],
                  ["ile", "ie"],
                  ["ina", "ia"],
                  ["ind", "id"],
                  ["ipk", "ik"],
                  ["isl", "is"],
                  ["ita", "it"],
                  ["jav", "jv"],
                  ["jpn", "ja"],
                  ["kal", "kl"],
                  ["kan", "kn"],
                  ["kas", "ks"],
                  ["kat", "ka"],
                  ["kau", "kr"],
                  ["kaz", "kk"],
                  ["khm", "km"],
                  ["kik", "ki"],
                  ["kin", "rw"],
                  ["kir", "ky"],
                  ["kom", "kv"],
                  ["kon", "kg"],
                  ["kor", "ko"],
                  ["kua", "kj"],
                  ["kur", "ku"],
                  ["lao", "lo"],
                  ["lat", "la"],
                  ["lav", "lv"],
                  ["lim", "li"],
                  ["lin", "ln"],
                  ["lit", "lt"],
                  ["ltz", "lb"],
                  ["lub", "lu"],
                  ["lug", "lg"],
                  ["mac", "mk"],
                  ["mah", "mh"],
                  ["mal", "ml"],
                  ["mao", "mi"],
                  ["mar", "mr"],
                  ["may", "ms"],
                  ["mkd", "mk"],
                  ["mlg", "mg"],
                  ["mlt", "mt"],
                  ["mon", "mn"],
                  ["mri", "mi"],
                  ["msa", "ms"],
                  ["mya", "my"],
                  ["nau", "na"],
                  ["nav", "nv"],
                  ["nbl", "nr"],
                  ["nde", "nd"],
                  ["ndo", "ng"],
                  ["nep", "ne"],
                  ["nld", "nl"],
                  ["nno", "nn"],
                  ["nob", "nb"],
                  ["nor", "no"],
                  ["nya", "ny"],
                  ["oci", "oc"],
                  ["oji", "oj"],
                  ["ori", "or"],
                  ["orm", "om"],
                  ["oss", "os"],
                  ["pan", "pa"],
                  ["per", "fa"],
                  ["pli", "pi"],
                  ["pol", "pl"],
                  ["por", "pt"],
                  ["pus", "ps"],
                  ["que", "qu"],
                  ["roh", "rm"],
                  ["ron", "ro"],
                  ["rum", "ro"],
                  ["run", "rn"],
                  ["rus", "ru"],
                  ["sag", "sg"],
                  ["san", "sa"],
                  ["sin", "si"],
                  ["slk", "sk"],
                  ["slo", "sk"],
                  ["slv", "sl"],
                  ["sme", "se"],
                  ["smo", "sm"],
                  ["sna", "sn"],
                  ["snd", "sd"],
                  ["som", "so"],
                  ["sot", "st"],
                  ["spa", "es"],
                  ["sqi", "sq"],
                  ["srd", "sc"],
                  ["srp", "sr"],
                  ["ssw", "ss"],
                  ["sun", "su"],
                  ["swa", "sw"],
                  ["swe", "sv"],
                  ["tah", "ty"],
                  ["tam", "ta"],
                  ["tat", "tt"],
                  ["tel", "te"],
                  ["tgk", "tg"],
                  ["tgl", "tl"],
                  ["tha", "th"],
                  ["tib", "bo"],
                  ["tir", "ti"],
                  ["ton", "to"],
                  ["tsn", "tn"],
                  ["tso", "ts"],
                  ["tuk", "tk"],
                  ["tur", "tr"],
                  ["twi", "tw"],
                  ["uig", "ug"],
                  ["ukr", "uk"],
                  ["urd", "ur"],
                  ["uzb", "uz"],
                  ["ven", "ve"],
                  ["vie", "vi"],
                  ["vol", "vo"],
                  ["wel", "cy"],
                  ["wln", "wa"],
                  ["wol", "wo"],
                  ["xho", "xh"],
                  ["yid", "yi"],
                  ["yor", "yo"],
                  ["zha", "za"],
                  ["zho", "zh"],
                  ["zul", "zu"],
                ]);
                function se(b, c, d) {
                  function e(b, c, d) {
                    return b >= c && b <= d;
                  }
                  var f = b.video;
                  return (f &&
                    f.width &&
                    f.height &&
                    !(
                      e(f.width, c.minWidth, Math.min(c.maxWidth, d.width)) &&
                      e(
                        f.height,
                        c.minHeight,
                        Math.min(c.maxHeight, d.height)
                      ) &&
                      e(f.width * f.height, c.minPixels, c.maxPixels)
                    )) ||
                    !e(b.bandwidth, c.minBandwidth, c.maxBandwidth)
                    ? !1
                    : !0;
                }
                function te(b, c, d) {
                  var e = !1;
                  b.forEach(function (b) {
                    var f = b.allowedByApplication;
                    b.allowedByApplication = se(b, c, d);
                    f != b.allowedByApplication && (e = !0);
                  });
                  return e;
                }
                function ue(b, c, d, e) {
                  e.variants = e.variants.filter(function (e) {
                    if (b && b.N && !kd(b, e)) return !1;
                    var f = e.audio;
                    e = e.video;
                    return (f && !be(f)) ||
                      (e && !be(e)) ||
                      (f && c && !ve(f, c)) ||
                      (e && d && !ve(e, d))
                      ? !1
                      : !0;
                  });
                  e.textStreams = e.textStreams.filter(function (b) {
                    return Wd(ic(b.mimeType, b.codecs));
                  });
                }
                function ve(b, c) {
                  return b.mimeType != c.mimeType ||
                    b.codecs.split(".")[0] != c.codecs.split(".")[0]
                    ? !1
                    : !0;
                }
                function we(b) {
                  var c = b.audio,
                    d = b.video,
                    e = c ? c.codecs : null,
                    f = d ? d.codecs : null,
                    g = [];
                  f && g.push(f);
                  e && g.push(e);
                  var h = [];
                  d && h.push(d.mimeType);
                  c && h.push(c.mimeType);
                  h = h[0] || null;
                  var k = [];
                  c && k.push(c.kind);
                  d && k.push(d.kind);
                  k = k[0] || null;
                  var l = new Set();
                  c &&
                    c.roles.forEach(function (b) {
                      return l.add(b);
                    });
                  d &&
                    d.roles.forEach(function (b) {
                      return l.add(b);
                    });
                  b = {
                    id: b.id,
                    active: !1,
                    type: "variant",
                    bandwidth: b.bandwidth,
                    language: b.language,
                    label: null,
                    kind: k,
                    width: null,
                    height: null,
                    frameRate: null,
                    mimeType: h,
                    codecs: g.join(", "),
                    audioCodec: e,
                    videoCodec: f,
                    primary: b.primary,
                    roles: Array.from(l),
                    audioRoles: null,
                    videoId: null,
                    audioId: null,
                    channelsCount: null,
                    audioBandwidth: null,
                    videoBandwidth: null,
                    originalVideoId: null,
                    originalAudioId: null,
                    originalTextId: null,
                  };
                  d &&
                    ((b.videoId = d.id),
                    (b.originalVideoId = d.originalId),
                    (b.width = d.width || null),
                    (b.height = d.height || null),
                    (b.frameRate = d.frameRate || null),
                    (b.videoBandwidth = d.bandwidth || null));
                  c &&
                    ((b.audioId = c.id),
                    (b.originalAudioId = c.originalId),
                    (b.channelsCount = c.channelsCount),
                    (b.audioBandwidth = c.bandwidth || null),
                    (b.label = c.label),
                    (b.audioRoles = c.roles));
                  return b;
                }
                function xe(b) {
                  return {
                    id: b.id,
                    active: !1,
                    type: "text",
                    bandwidth: 0,
                    language: b.language,
                    label: b.label,
                    kind: b.kind || null,
                    width: null,
                    height: null,
                    frameRate: null,
                    mimeType: b.mimeType,
                    codecs: b.codecs || null,
                    audioCodec: null,
                    videoCodec: null,
                    primary: b.primary,
                    roles: b.roles,
                    audioRoles: null,
                    videoId: null,
                    audioId: null,
                    channelsCount: null,
                    audioBandwidth: null,
                    videoBandwidth: null,
                    originalVideoId: null,
                    originalAudioId: null,
                    originalTextId: b.originalId,
                  };
                }
                function ye(b) {
                  b.__shaka_id || (b.__shaka_id = ze++);
                  return b.__shaka_id;
                }
                var ze = 0;
                function Ae(b) {
                  return {
                    id: ye(b),
                    active: !1,
                    type: "",
                    bandwidth: 0,
                    language: M(b.language),
                    label: b.label,
                    kind: b.kind,
                    width: null,
                    height: null,
                    frameRate: null,
                    mimeType: null,
                    codecs: null,
                    audioCodec: null,
                    videoCodec: null,
                    primary: !1,
                    roles: [],
                    audioRoles: null,
                    videoId: null,
                    audioId: null,
                    channelsCount: null,
                    audioBandwidth: null,
                    videoBandwidth: null,
                    originalVideoId: null,
                    originalAudioId: null,
                    originalTextId: null,
                  };
                }
                function Be(b) {
                  return b.allowedByApplication && b.allowedByKeySystem;
                }
                function Ce(b) {
                  return b.filter(function (b) {
                    return Be(b);
                  });
                }
                function De(b, c) {
                  var d = b.filter(function (b) {
                      return b.audio && b.audio.channelsCount;
                    }),
                    e = new Map();
                  d = r(d);
                  for (var f = d.next(); !f.done; f = d.next()) {
                    f = f.value;
                    var g = f.audio.channelsCount;
                    e.has(g) || e.set(g, []);
                    e.get(g).push(f);
                  }
                  d = Array.from(e.keys());
                  if (0 == d.length) return b;
                  f = d.filter(function (b) {
                    return b <= c;
                  });
                  return f.length
                    ? e.get(Math.max.apply(null, f))
                    : e.get(Math.min.apply(null, d));
                }
                function Ee(b, c, d) {
                  var e = b,
                    f = b.filter(function (b) {
                      return b.primary;
                    });
                  f.length && (e = f);
                  var g = e.length ? e[0].language : "";
                  e = e.filter(function (b) {
                    return b.language == g;
                  });
                  if (c) {
                    var h = re(
                      M(c),
                      b.map(function (b) {
                        return b.language;
                      })
                    );
                    h &&
                      (e = b.filter(function (b) {
                        return M(b.language) == h;
                      }));
                  }
                  if (d) {
                    if (((b = Fe(e, d)), b.length)) return b;
                  } else if (
                    ((b = e.filter(function (b) {
                      return 0 == b.roles.length;
                    })),
                    b.length)
                  )
                    return b;
                  b = e
                    .map(function (b) {
                      return b.roles;
                    })
                    .reduce(td.uc, []);
                  return b.length ? Fe(e, b[0]) : e;
                }
                function Fe(b, c) {
                  return b.filter(function (b) {
                    return b.roles.includes(c);
                  });
                }
                function Ge(b, c, d) {
                  for (var e = 0; e < d.length; e++)
                    if (d[e].audio == b && d[e].video == c) return d[e];
                  return null;
                }
                function He(b) {
                  var c = [];
                  b.audio && c.push(b.audio);
                  b.video && c.push(b.video);
                  return c;
                }
                function N() {
                  this.h = null;
                  this.f = !1;
                  this.b = new Ya();
                  this.c = [];
                  this.i = !1;
                  this.a = this.g = null;
                }
                z("shaka.abr.SimpleAbrManager", N);
                N.prototype.stop = function () {
                  this.h = null;
                  this.f = !1;
                  this.c = [];
                  this.g = null;
                };
                N.prototype.stop = N.prototype.stop;
                N.prototype.init = function (b) {
                  this.h = b;
                };
                N.prototype.init = N.prototype.init;
                N.prototype.chooseVariant = function () {
                  var b = Ie(this.a.restrictions, this.c),
                    c = this.b.getBandwidthEstimate(
                      this.a.defaultBandwidthEstimate
                    );
                  this.c.length &&
                    !b.length &&
                    ((b = Ie(null, this.c)), (b = [b[0]]));
                  for (var d = b[0] || null, e = 0; e < b.length; ++e) {
                    var f = b[e],
                      g =
                        (b[e + 1] || { bandwidth: Infinity }).bandwidth /
                        this.a.bandwidthUpgradeTarget;
                    c >= f.bandwidth / this.a.bandwidthDowngradeTarget &&
                      c <= g &&
                      (d = f);
                  }
                  this.g = Date.now();
                  return d;
                };
                N.prototype.chooseVariant = N.prototype.chooseVariant;
                N.prototype.enable = function () {
                  this.f = !0;
                };
                N.prototype.enable = N.prototype.enable;
                N.prototype.disable = function () {
                  this.f = !1;
                };
                N.prototype.disable = N.prototype.disable;
                N.prototype.segmentDownloaded = function (b, c) {
                  var d = this.b;
                  if (!(16e3 > c)) {
                    var e = (8e3 * c) / b,
                      f = b / 1e3;
                    d.a += c;
                    Wa(d.b, f, e);
                    Wa(d.c, f, e);
                  }
                  if (null != this.g && this.f)
                    a: {
                      if (!this.i) {
                        if (!(128e3 <= this.b.a)) break a;
                        this.i = !0;
                      } else if (
                        Date.now() - this.g <
                        1e3 * this.a.switchInterval
                      )
                        break a;
                      d = this.chooseVariant();
                      this.b.getBandwidthEstimate(
                        this.a.defaultBandwidthEstimate
                      );
                      this.h(d);
                    }
                };
                N.prototype.segmentDownloaded = N.prototype.segmentDownloaded;
                N.prototype.getBandwidthEstimate = function () {
                  return this.b.getBandwidthEstimate(
                    this.a.defaultBandwidthEstimate
                  );
                };
                N.prototype.getBandwidthEstimate =
                  N.prototype.getBandwidthEstimate;
                N.prototype.setVariants = function (b) {
                  this.c = b;
                };
                N.prototype.setVariants = N.prototype.setVariants;
                N.prototype.configure = function (b) {
                  this.a = b;
                };
                N.prototype.configure = N.prototype.configure;
                function Ie(b, c) {
                  b &&
                    (c = c.filter(function (c) {
                      return se(c, b, { width: Infinity, height: Infinity });
                    }));
                  return c.sort(function (b, c) {
                    return b.bandwidth - c.bandwidth;
                  });
                }
                function Je(b, c) {
                  this.a = b;
                  this.b = c;
                }
                Je.prototype.toString = function () {
                  return "v" + this.a + "." + this.b;
                };
                function Ke(b, c) {
                  var d = new Je(2, 6),
                    e = Le,
                    f = e.a,
                    g = d.b - f.b;
                  (0 < (d.a - f.a || g) ? e.c : e.b)(e.a, d, b, c);
                }
                function Me(b, c, d, e) {
                  $a(
                    [
                      d,
                      "has been deprecated and will be removed in",
                      c,
                      ". We are currently at version",
                      b,
                      ". Additional information:",
                      e,
                    ].join(" ")
                  );
                }
                function Ne(b, c, d, e) {
                  Za(
                    [
                      d,
                      "has been deprecated and has been removed in",
                      c,
                      ". We are now at version",
                      b,
                      ". Additional information:",
                      e,
                    ].join("")
                  );
                }
                var Le = null;
                var Oe =
                    "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(
                      " "
                    ),
                  Pe =
                    "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(
                      " "
                    ),
                  Qe = ["loop", "playbackRate"],
                  Re = ["pause", "play"],
                  Se =
                    "abrstatuschanged adaptation buffering emsg error loading streaming texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading variantchanged textchanged".split(
                      " "
                    ),
                  Te = {
                    getAssetUri: 2,
                    getAudioLanguages: 2,
                    getAudioLanguagesAndRoles: 2,
                    getBufferedInfo: 2,
                    getConfiguration: 2,
                    getExpiration: 2,
                    getPlaybackRate: 2,
                    getTextLanguages: 2,
                    getTextLanguagesAndRoles: 2,
                    getTextTracks: 2,
                    getStats: 5,
                    getVariantTracks: 2,
                    isAudioOnly: 10,
                    isBuffering: 1,
                    isInProgress: 1,
                    isLive: 10,
                    isTextTrackVisible: 1,
                    keySystem: 10,
                    seekRange: 1,
                    usingEmbeddedTextTrack: 2,
                    getLoadMode: 10,
                  },
                  Ue = {
                    getPlayheadTimeAsDate: 1,
                    getPresentationStartTimeAsDate: 20,
                  },
                  Ve = [["getConfiguration", "configure"]],
                  We = [["isTextTrackVisible", "setTextTrackVisibility"]],
                  Xe =
                    "addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectEmbeddedTextTrack selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(
                      " "
                    ),
                  Ye = ["attach", "detach", "load", "unload"];
                function Ze(b) {
                  return JSON.stringify(b, function (b, d) {
                    if ("function" != typeof d) {
                      if (d instanceof Event || d instanceof I) {
                        var c = {},
                          f;
                        for (f in d) {
                          var g = d[f];
                          g && "object" == typeof g
                            ? "detail" == f && (c[f] = g)
                            : f in Event || (c[f] = g);
                        }
                        return c;
                      }
                      if (d instanceof TimeRanges)
                        for (
                          c = {
                            __type__: "TimeRanges",
                            length: d.length,
                            start: [],
                            end: [],
                          },
                            f = 0;
                          f < d.length;
                          ++f
                        )
                          c.start.push(d.start(f)), c.end.push(d.end(f));
                      else
                        c =
                          d instanceof Uint8Array
                            ? { __type__: "Uint8Array", entries: Array.from(d) }
                            : "number" == typeof d
                            ? isNaN(d)
                              ? "NaN"
                              : isFinite(d)
                              ? d
                              : 0 > d
                              ? "-Infinity"
                              : "Infinity"
                            : d;
                      return c;
                    }
                  });
                }
                function $e(b) {
                  return JSON.parse(b, function (b, d) {
                    return "NaN" == d
                      ? NaN
                      : "-Infinity" == d
                      ? -Infinity
                      : "Infinity" == d
                      ? Infinity
                      : d && "object" == typeof d && "TimeRanges" == d.__type__
                      ? af(d)
                      : d && "object" == typeof d && "Uint8Array" == d.__type__
                      ? new Uint8Array(d.entries)
                      : d;
                  });
                }
                function af(b) {
                  return {
                    length: b.length,
                    start: function (c) {
                      return b.start[c];
                    },
                    end: function (c) {
                      return b.end[c];
                    },
                  };
                }
                function bf(b, c, d, e, f, g) {
                  this.N = b;
                  this.f = new B(c);
                  this.S = d;
                  this.j = !1;
                  this.F = e;
                  this.K = f;
                  this.w = g;
                  this.b = this.h = !1;
                  this.C = "";
                  this.i = null;
                  this.m = this.Jd.bind(this);
                  this.o = this.ef.bind(this);
                  this.a = { video: {}, player: {} };
                  this.v = 0;
                  this.c = {};
                  this.g = null;
                }
                var cf = !1,
                  df = null;
                p = bf.prototype;
                p.destroy = function () {
                  ef(this);
                  df && ff(this);
                  this.f && (this.f.stop(), (this.f = null));
                  this.K = this.F = null;
                  this.b = this.h = !1;
                  this.o = this.m = this.g = this.c = this.a = this.i = null;
                  return Promise.resolve();
                };
                p.da = function () {
                  return this.b;
                };
                p.Xc = function () {
                  return this.C;
                };
                p.init = function () {
                  if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
                    delete window.__onGCastApiAvailable;
                    this.h = !0;
                    this.f.oc();
                    var b = new chrome.cast.SessionRequest(this.N);
                    b = new chrome.cast.ApiConfig(
                      b,
                      this.Kd.bind(this),
                      this.jf.bind(this),
                      "origin_scoped"
                    );
                    chrome.cast.initialize(
                      b,
                      function () {},
                      function () {}
                    );
                    cf && this.f.O(0.02);
                    (b = df) && b.status != chrome.cast.SessionStatus.STOPPED
                      ? this.Kd(b)
                      : (df = null);
                  } else
                    window.__onGCastApiAvailable = function (b) {
                      b && this.init();
                    }.bind(this);
                };
                p.cd = function (b) {
                  this.i = b;
                  this.b && gf({ type: "appData", appData: this.i });
                };
                p.cast = function (b) {
                  if (!this.h) return Promise.reject(new D(1, 8, 8e3));
                  if (!cf) return Promise.reject(new D(1, 8, 8001));
                  if (this.b) return Promise.reject(new D(1, 8, 8002));
                  this.g = new G();
                  chrome.cast.requestSession(
                    this.Vc.bind(this, b),
                    this.Id.bind(this)
                  );
                  return this.g;
                };
                p.Zb = function () {
                  this.b &&
                    (ef(this),
                    df &&
                      (ff(this),
                      df.stop(
                        function () {},
                        function () {}
                      ),
                      (df = null)));
                };
                p.get = function (b, c) {
                  if ("video" == b) {
                    if (Re.includes(c)) return this.Ud.bind(this, b, c);
                  } else if ("player" == b) {
                    if (Ue[c] && !this.get("player", "isLive")())
                      return function () {};
                    if (Xe.includes(c)) return this.Ud.bind(this, b, c);
                    if (Ye.includes(c)) return this.zf.bind(this, b, c);
                    if (Te[c]) return this.Rd.bind(this, b, c);
                  }
                  return this.Rd(b, c);
                };
                p.set = function (b, c, d) {
                  this.a[b][c] = d;
                  gf({ type: "set", targetName: b, property: c, value: d });
                };
                p.Vc = function (b, c) {
                  df = c;
                  c.addUpdateListener(this.m);
                  c.addMessageListener(
                    "urn:x-cast:com.google.shaka.v2",
                    this.o
                  );
                  this.Jd();
                  gf({ type: "init", initState: b, appData: this.i });
                  this.g.resolve();
                };
                p.Id = function (b) {
                  var c = 8003;
                  switch (b.code) {
                    case "cancel":
                      c = 8004;
                      break;
                    case "timeout":
                      c = 8005;
                      break;
                    case "receiver_unavailable":
                      c = 8006;
                  }
                  this.g.reject(new D(2, 8, c, b));
                };
                p.Rd = function (b, c) {
                  return this.a[b][c];
                };
                p.Ud = function (b, c, d) {
                  for (var e = [], f = 2; f < arguments.length; ++f)
                    e[f - 2] = arguments[f];
                  gf({ type: "call", targetName: b, methodName: c, args: e });
                };
                p.zf = function (b, c, d) {
                  for (var e = [], f = 2; f < arguments.length; ++f)
                    e[f - 2] = arguments[f];
                  f = new G();
                  var g = this.v.toString();
                  this.v++;
                  this.c[g] = f;
                  gf({
                    type: "asyncCall",
                    targetName: b,
                    methodName: c,
                    args: e,
                    id: g,
                  });
                  return f;
                };
                p.Kd = function (b) {
                  var c = this.w();
                  this.g = new G();
                  this.j = !0;
                  this.Vc(c, b);
                };
                p.jf = function (b) {
                  cf = "available" == b;
                  this.f.oc();
                };
                function ff(b) {
                  var c = df;
                  c.removeUpdateListener(b.m);
                  c.removeMessageListener(
                    "urn:x-cast:com.google.shaka.v2",
                    b.o
                  );
                }
                p.Jd = function () {
                  var b = df ? "connected" == df.status : !1;
                  if (this.b && !b) {
                    this.K();
                    for (var c in this.a) this.a[c] = {};
                    ef(this);
                  }
                  this.C = (this.b = b) ? df.receiver.friendlyName : "";
                  this.f.oc();
                };
                function ef(b) {
                  for (var c in b.c) {
                    var d = b.c[c];
                    delete b.c[c];
                    d.reject(new D(1, 7, 7e3));
                  }
                }
                p.ef = function (b, c) {
                  var d = $e(c);
                  switch (d.type) {
                    case "event":
                      var e = d.event;
                      this.F(d.targetName, new I(e.type, e));
                      break;
                    case "update":
                      e = d.update;
                      for (var f in e) {
                        d = this.a[f] || {};
                        for (var g in e[f]) d[g] = e[f][g];
                      }
                      this.j && (this.S(), (this.j = !1));
                      break;
                    case "asyncComplete":
                      if (
                        ((f = d.id),
                        (d = d.error),
                        (g = this.c[f]),
                        delete this.c[f],
                        g)
                      )
                        if (d) {
                          f = new D(d.severity, d.category, d.code);
                          for (e in d) f[e] = d[e];
                          g.reject(f);
                        } else g.resolve();
                  }
                };
                function gf(b) {
                  b = Ze(b);
                  df.sendMessage(
                    "urn:x-cast:com.google.shaka.v2",
                    b,
                    function () {},
                    ab
                  );
                }
                function O(b, c, d) {
                  J.call(this);
                  this.c = b;
                  this.b = c;
                  this.i = this.g = this.f = this.j = this.h = null;
                  this.a = new bf(
                    d,
                    this.Of.bind(this),
                    this.Pf.bind(this),
                    this.Qf.bind(this),
                    this.Rf.bind(this),
                    this.xd.bind(this)
                  );
                  hf(this);
                }
                Ta(O, J);
                z("shaka.cast.CastProxy", O);
                O.prototype.destroy = function (b) {
                  b && this.a && this.a.Zb();
                  this.i && (this.i.a(), (this.i = null));
                  b = [];
                  this.b && (b.push(this.b.destroy()), (this.b = null));
                  this.a && (b.push(this.a.destroy()), (this.a = null));
                  this.j = this.h = this.c = null;
                  return Promise.all(b);
                };
                O.prototype.destroy = O.prototype.destroy;
                O.prototype.Te = function () {
                  return this.h;
                };
                O.prototype.getVideo = O.prototype.Te;
                O.prototype.Me = function () {
                  return this.j;
                };
                O.prototype.getPlayer = O.prototype.Me;
                O.prototype.oe = function () {
                  return this.a ? this.a.h && cf : !1;
                };
                O.prototype.canCast = O.prototype.oe;
                O.prototype.da = function () {
                  return this.a ? this.a.da() : !1;
                };
                O.prototype.isCasting = O.prototype.da;
                O.prototype.Xc = function () {
                  return this.a ? this.a.Xc() : "";
                };
                O.prototype.receiverName = O.prototype.Xc;
                O.prototype.cast = function () {
                  var b = this.xd();
                  return this.a.cast(b).then(
                    function () {
                      if (this.b) return this.b.ld();
                    }.bind(this)
                  );
                };
                O.prototype.cast = O.prototype.cast;
                O.prototype.cd = function (b) {
                  this.a.cd(b);
                };
                O.prototype.setAppData = O.prototype.cd;
                O.prototype.Zf = function () {
                  var b = this.a;
                  if (b.b) {
                    var c = b.w();
                    chrome.cast.requestSession(b.Vc.bind(b, c), b.Id.bind(b));
                  }
                };
                O.prototype.suggestDisconnect = O.prototype.Zf;
                O.prototype.Zb = function () {
                  this.a.Zb();
                };
                O.prototype.forceDisconnect = O.prototype.Zb;
                function hf(b) {
                  b.a.init();
                  b.i = new ac();
                  Oe.forEach(
                    function (b) {
                      L(this.i, this.c, b, this.hg.bind(this));
                    }.bind(b)
                  );
                  Se.forEach(
                    function (b) {
                      L(this.i, this.b, b, this.tf.bind(this));
                    }.bind(b)
                  );
                  b.h = {};
                  for (var c in b.c)
                    Object.defineProperty(b.h, c, {
                      configurable: !1,
                      enumerable: !0,
                      get: b.gg.bind(b, c),
                      set: b.ig.bind(b, c),
                    });
                  b.j = {};
                  for (var d in b.b)
                    Object.defineProperty(b.j, d, {
                      configurable: !1,
                      enumerable: !0,
                      get: b.Qd.bind(b, d),
                    });
                  b.f = new J();
                  b.f.Sb = b.h;
                  b.g = new J();
                  b.g.Sb = b.j;
                }
                p = O.prototype;
                p.xd = function () {
                  var b = {
                    video: {},
                    player: {},
                    playerAfterLoad: {},
                    manifest: this.b.$b(),
                    startTime: null,
                  };
                  this.c.pause();
                  Qe.forEach(
                    function (c) {
                      b.video[c] = this.c[c];
                    }.bind(this)
                  );
                  this.c.ended || (b.startTime = this.c.currentTime);
                  Ve.forEach(
                    function (c) {
                      var d = c[1];
                      c = this.b[c[0]]();
                      b.player[d] = c;
                    }.bind(this)
                  );
                  We.forEach(
                    function (c) {
                      var d = c[1];
                      c = this.b[c[0]]();
                      b.playerAfterLoad[d] = c;
                    }.bind(this)
                  );
                  return b;
                };
                p.Of = function () {
                  this.dispatchEvent(new I("caststatuschanged"));
                };
                p.Pf = function () {
                  this.f.dispatchEvent(new I(this.h.paused ? "pause" : "play"));
                };
                p.Rf = function () {
                  var b = this;
                  Ve.forEach(
                    function (b) {
                      var c = b[1];
                      b = this.a.get("player", b[0])();
                      this.b[c](b);
                    }.bind(this)
                  );
                  var c = this.a.get("player", "getAssetUri")(),
                    d = this.a.get("video", "ended"),
                    e = Promise.resolve(),
                    f = this.c.autoplay,
                    g = null;
                  d || (g = this.a.get("video", "currentTime"));
                  c && ((this.c.autoplay = !1), (e = this.b.load(c, g)));
                  var h = {};
                  Qe.forEach(
                    function (b) {
                      h[b] = this.a.get("video", b);
                    }.bind(this)
                  );
                  e.then(
                    function () {
                      b.c &&
                        (Qe.forEach(
                          function (b) {
                            this.c[b] = h[b];
                          }.bind(b)
                        ),
                        We.forEach(
                          function (b) {
                            var c = b[1];
                            b = this.a.get("player", b[0])();
                            this.b[c](b);
                          }.bind(b)
                        ),
                        (b.c.autoplay = f),
                        c && b.c.play());
                    },
                    function (c) {
                      b.b.dispatchEvent(new I("error", { detail: c }));
                    }
                  );
                };
                p.gg = function (b) {
                  if ("addEventListener" == b)
                    return this.f.addEventListener.bind(this.f);
                  if ("removeEventListener" == b)
                    return this.f.removeEventListener.bind(this.f);
                  if (this.a.da() && 0 == Object.keys(this.a.a.video).length) {
                    var c = this.c[b];
                    if ("function" != typeof c) return c;
                  }
                  return this.a.da()
                    ? this.a.get("video", b)
                    : ((b = this.c[b]),
                      "function" == typeof b && (b = b.bind(this.c)),
                      b);
                };
                p.ig = function (b, c) {
                  this.a.da() ? this.a.set("video", b, c) : (this.c[b] = c);
                };
                p.hg = function (b) {
                  this.a.da() || this.f.dispatchEvent(new I(b.type, b));
                };
                p.Qd = function (b) {
                  if ("addEventListener" == b)
                    return this.g.addEventListener.bind(this.g);
                  if ("removeEventListener" == b)
                    return this.g.removeEventListener.bind(this.g);
                  if ("getMediaElement" == b)
                    return function () {
                      return this.h;
                    }.bind(this);
                  if ("getSharedConfiguration" == b)
                    return this.a.get("player", "getConfiguration");
                  if ("getNetworkingEngine" == b) return this.b.Bb.bind(this.b);
                  if (this.a.da()) {
                    if ("getManifest" == b || "drmInfo" == b)
                      return function () {
                        $a(b + "() does not work while casting!");
                        return null;
                      };
                    if ("getManifestUri" == b)
                      return (
                        Ke(
                          "getManifestUri",
                          'Please use "getAssetUri" instead.'
                        ),
                        this.Qd("getAssetUri")
                      );
                    if ("attach" == b || "detach" == b)
                      return function () {
                        $a(b + "() does not work while casting!");
                        return Promise.resolve();
                      };
                  }
                  return (this.a.da() &&
                    0 == Object.keys(this.a.a.video).length &&
                    Te[b]) ||
                    !this.a.da()
                    ? this.b[b].bind(this.b)
                    : this.a.get("player", b);
                };
                p.tf = function (b) {
                  this.a.da() || this.g.dispatchEvent(b);
                };
                p.Qf = function (b, c) {
                  this.a.da() &&
                    ("video" == b
                      ? this.f.dispatchEvent(c)
                      : "player" == b && this.g.dispatchEvent(c));
                };
                function jf(b, c, d, e) {
                  var f = this;
                  J.call(this);
                  this.a = b;
                  this.b = c;
                  this.c = new ac();
                  this.w = { video: b, player: c };
                  this.C = d || function () {};
                  this.F =
                    e ||
                    function (b) {
                      return b;
                    };
                  this.o = !1;
                  this.h = !0;
                  this.g = 0;
                  this.m = !1;
                  this.j = !0;
                  this.i = this.f = null;
                  this.v = new B(function () {
                    kf(f);
                  });
                  lf(this);
                }
                Ta(jf, J);
                z("shaka.cast.CastReceiver", jf);
                jf.prototype.isConnected = function () {
                  return this.o;
                };
                jf.prototype.isConnected = jf.prototype.isConnected;
                jf.prototype.Xe = function () {
                  return this.h;
                };
                jf.prototype.isIdle = jf.prototype.Xe;
                jf.prototype.destroy = function () {
                  var b = this;
                  return t(function d() {
                    var e, f;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            b.c && (b.c.a(), (b.c = null)),
                            (e = []),
                            b.b && (e.push(b.b.destroy()), (b.b = null)),
                            b.v && (b.v.stop(), (b.v = null)),
                            (b.a = null),
                            (b.w = null),
                            (b.C = null),
                            (b.o = !1),
                            (b.h = !0),
                            (b.f = null),
                            (b.i = null),
                            u(d, Promise.all(e), 2)
                          );
                        case 2:
                          (f = cast.receiver.CastReceiverManager.getInstance()),
                            f.stop(),
                            v(d);
                      }
                    });
                  });
                };
                jf.prototype.destroy = jf.prototype.destroy;
                function lf(b) {
                  var c = cast.receiver.CastReceiverManager.getInstance();
                  c.onSenderConnected = b.Md.bind(b);
                  c.onSenderDisconnected = b.Md.bind(b);
                  c.onSystemVolumeChanged = b.we.bind(b);
                  b.i = c.getCastMessageBus("urn:x-cast:com.google.cast.media");
                  b.i.onMessage = b.$e.bind(b);
                  b.f = c.getCastMessageBus("urn:x-cast:com.google.shaka.v2");
                  b.f.onMessage = b.lf.bind(b);
                  c.start();
                  Oe.forEach(
                    function (b) {
                      L(this.c, this.a, b, this.Sd.bind(this, "video"));
                    }.bind(b)
                  );
                  Se.forEach(
                    function (b) {
                      L(this.c, this.b, b, this.Sd.bind(this, "player"));
                    }.bind(b)
                  );
                  cast.__platform__ &&
                  cast.__platform__.canDisplayType(
                    'video/mp4; codecs="avc1.640028"; width=3840; height=2160'
                  )
                    ? b.b.dd(3840, 2160)
                    : b.b.dd(1920, 1080);
                  L(
                    b.c,
                    b.a,
                    "loadeddata",
                    function () {
                      this.m = !0;
                    }.bind(b)
                  );
                  L(
                    b.c,
                    b.b,
                    "loading",
                    function () {
                      this.h = !1;
                      mf(this);
                    }.bind(b)
                  );
                  L(
                    b.c,
                    b.a,
                    "playing",
                    function () {
                      this.h = !1;
                      mf(this);
                    }.bind(b)
                  );
                  L(
                    b.c,
                    b.a,
                    "pause",
                    function () {
                      mf(this);
                    }.bind(b)
                  );
                  L(
                    b.c,
                    b.b,
                    "unloading",
                    function () {
                      this.h = !0;
                      mf(this);
                    }.bind(b)
                  );
                  L(
                    b.c,
                    b.a,
                    "ended",
                    function () {
                      var b = this;
                      new B(function () {
                        b.a && b.a.ended && ((b.h = !0), mf(b));
                      }).O(5);
                    }.bind(b)
                  );
                }
                p = jf.prototype;
                p.Md = function () {
                  this.g = 0;
                  this.j = !0;
                  this.o =
                    0 !=
                    cast.receiver.CastReceiverManager.getInstance().getSenders()
                      .length;
                  mf(this);
                };
                function mf(b) {
                  Promise.resolve().then(
                    function () {
                      this.b &&
                        (this.dispatchEvent(new I("caststatuschanged")),
                        nf(this) || of(this, 0));
                    }.bind(b)
                  );
                }
                function pf(b, c, d) {
                  for (var e in c.player) b.b[e](c.player[e]);
                  b.C(d);
                  d = Promise.resolve();
                  var f = b.a.autoplay;
                  c.manifest &&
                    ((b.a.autoplay = !1),
                    (d = b.b.load(c.manifest, c.startTime)));
                  d.then(
                    function () {
                      if (b.b) {
                        for (var d in c.video) b.a[d] = c.video[d];
                        for (var e in c.playerAfterLoad)
                          b.b[e](c.playerAfterLoad[e]);
                        b.a.autoplay = f;
                        c.manifest && (b.a.play(), of(b, 0));
                      }
                    },
                    function (c) {
                      b.b.dispatchEvent(new I("error", { detail: c }));
                    }
                  );
                }
                p.Sd = function (b, c) {
                  this.b &&
                    (kf(this),
                    qf(
                      this,
                      { type: "event", targetName: b, event: c },
                      this.f
                    ));
                };
                function kf(b) {
                  b.v.O(0.5);
                  var c = { video: {}, player: {} };
                  Pe.forEach(
                    function (b) {
                      c.video[b] = this.a[b];
                    }.bind(b)
                  );
                  if (b.b.U())
                    for (var d in Ue)
                      0 == b.g % Ue[d] && (c.player[d] = b.b[d]());
                  for (var e in Te)
                    0 == b.g % Te[e] && (c.player[e] = b.b[e]());
                  if (
                    (d =
                      cast.receiver.CastReceiverManager.getInstance().getSystemVolume())
                  )
                    (c.video.volume = d.level), (c.video.muted = d.muted);
                  b.m && (b.g += 1);
                  qf(b, { type: "update", update: c }, b.f);
                  nf(b);
                }
                function nf(b) {
                  return b.j && (b.a.duration || b.b.U())
                    ? (rf(b), (b.j = !1), !0)
                    : !1;
                }
                function rf(b) {
                  var c = {
                    contentId: b.b.$b(),
                    streamType: b.b.U() ? "LIVE" : "BUFFERED",
                    duration: b.a.duration,
                    contentType: "",
                  };
                  of(b, 0, c);
                }
                p.we = function () {
                  var b =
                    cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
                  b &&
                    qf(
                      this,
                      {
                        type: "update",
                        update: { video: { volume: b.level, muted: b.muted } },
                      },
                      this.f
                    );
                  qf(
                    this,
                    {
                      type: "event",
                      targetName: "video",
                      event: { type: "volumechange" },
                    },
                    this.f
                  );
                };
                p.lf = function (b) {
                  var c = $e(b.data);
                  switch (c.type) {
                    case "init":
                      this.g = 0;
                      this.m = !1;
                      this.j = !0;
                      pf(this, c.initState, c.appData);
                      kf(this);
                      break;
                    case "appData":
                      this.C(c.appData);
                      break;
                    case "set":
                      var d = c.targetName,
                        e = c.property;
                      c = c.value;
                      if ("video" == d) {
                        var f = cast.receiver.CastReceiverManager.getInstance();
                        if ("volume" == e) {
                          f.setSystemVolumeLevel(c);
                          break;
                        } else if ("muted" == e) {
                          f.setSystemVolumeMuted(c);
                          break;
                        }
                      }
                      this.w[d][e] = c;
                      break;
                    case "call":
                      d = this.w[c.targetName];
                      d[c.methodName].apply(d, c.args);
                      break;
                    case "asyncCall":
                      d = c.targetName;
                      e = c.methodName;
                      "player" == d &&
                        "load" == e &&
                        ((this.g = 0), (this.m = !1));
                      f = c.id;
                      b = b.senderId;
                      var g = this.w[d];
                      c = g[e].apply(g, c.args);
                      "player" == d &&
                        "load" == e &&
                        (c = c.then(
                          function () {
                            this.j = !0;
                          }.bind(this)
                        ));
                      c.then(
                        this.Yd.bind(this, b, f, null),
                        this.Yd.bind(this, b, f)
                      );
                  }
                };
                p.$e = function (b) {
                  var c = $e(b.data);
                  switch (c.type) {
                    case "PLAY":
                      this.a.play();
                      of(this, 0);
                      break;
                    case "PAUSE":
                      this.a.pause();
                      of(this, 0);
                      break;
                    case "SEEK":
                      b = c.currentTime;
                      var d = c.resumeState;
                      null != b && (this.a.currentTime = Number(b));
                      d && "PLAYBACK_START" == d
                        ? (this.a.play(), of(this, 0))
                        : d &&
                          "PLAYBACK_PAUSE" == d &&
                          (this.a.pause(), of(this, 0));
                      break;
                    case "STOP":
                      this.b.ld().then(
                        function () {
                          this.b && of(this, 0);
                        }.bind(this)
                      );
                      break;
                    case "GET_STATUS":
                      of(this, Number(c.requestId));
                      break;
                    case "VOLUME":
                      d = c.volume;
                      b = d.level;
                      d = d.muted;
                      var e = this.a.volume,
                        f = this.a.muted;
                      null != b && (this.a.volume = Number(b));
                      null != d && (this.a.muted = d);
                      (e == this.a.volume && f == this.a.muted) || of(this, 0);
                      break;
                    case "LOAD":
                      this.g = 0;
                      this.j = this.m = !1;
                      b = c.currentTime;
                      d = this.F(c.media.contentId);
                      this.a.autoplay = !0;
                      this.b
                        .load(d, b)
                        .then(
                          function () {
                            this.b && rf(this);
                          }.bind(this)
                        )
                        ["catch"](
                          function (b) {
                            var d = "LOAD_FAILED";
                            7 == b.category &&
                              7e3 == b.code &&
                              (d = "LOAD_CANCELLED");
                            qf(
                              this,
                              { requestId: Number(c.requestId), type: d },
                              this.i
                            );
                          }.bind(this)
                        );
                      break;
                    default:
                      qf(
                        this,
                        {
                          requestId: Number(c.requestId),
                          type: "INVALID_REQUEST",
                          reason: "INVALID_COMMAND",
                        },
                        this.i
                      );
                  }
                };
                p.Yd = function (b, c, d) {
                  this.b &&
                    qf(
                      this,
                      { type: "asyncComplete", id: c, error: d },
                      this.f,
                      b
                    );
                };
                function qf(b, c, d, e) {
                  b.o &&
                    ((b = Ze(c)),
                    e ? d.getCastChannel(e).send(b) : d.broadcast(b));
                }
                function of(b, c, d) {
                  var e = b.a.playbackRate;
                  var f = sf;
                  f = b.h ? f.IDLE : b.b.Ic() ? f.fe : b.a.paused ? f.he : f.ie;
                  e = {
                    mediaSessionId: 0,
                    playbackRate: e,
                    playerState: f,
                    currentTime: b.a.currentTime,
                    supportedMediaCommands: 15,
                    volume: { level: b.a.volume, muted: b.a.muted },
                  };
                  d && (e.media = d);
                  qf(
                    b,
                    { requestId: c, type: "MEDIA_STATUS", status: [e] },
                    b.i
                  );
                }
                var sf = {
                  IDLE: "IDLE",
                  ie: "PLAYING",
                  fe: "BUFFERING",
                  he: "PAUSED",
                };
                var P = {
                  Yb: function (b, c) {
                    var d = P.P(b, c);
                    return 1 != d.length ? null : d[0];
                  },
                  td: function (b, c, d) {
                    b = P.ud(b, c, d);
                    return 1 != b.length ? null : b[0];
                  },
                  P: function (b, c) {
                    return Array.prototype.filter.call(
                      b.childNodes,
                      function (b) {
                        return b instanceof Element && b.tagName == c;
                      }
                    );
                  },
                  ud: function (b, c, d) {
                    return Array.prototype.filter.call(
                      b.childNodes,
                      function (b) {
                        return (
                          b instanceof Element &&
                          b.localName == d &&
                          b.namespaceURI == c
                        );
                      }
                    );
                  },
                  getAttributeNS: function (b, c, d) {
                    return b.hasAttributeNS(c, d)
                      ? b.getAttributeNS(c, d)
                      : null;
                  },
                  ac: function (b) {
                    return Array.prototype.every.call(
                      b.childNodes,
                      function (b) {
                        return (
                          b.nodeType == Node.TEXT_NODE ||
                          b.nodeType == Node.CDATA_SECTION_NODE
                        );
                      }
                    )
                      ? b.textContent.trim()
                      : null;
                  },
                  H: function (b, c, d, e) {
                    e = void 0 === e ? null : e;
                    var f = null;
                    b = b.getAttribute(c);
                    null != b && (f = d(b));
                    return null == f ? e : f;
                  },
                  qf: function (b) {
                    if (!b) return null;
                    /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(b) && (b += "Z");
                    b = Date.parse(b);
                    return isNaN(b) ? null : Math.floor(b / 1e3);
                  },
                  za: function (b) {
                    if (!b) return null;
                    b =
                      /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(
                        b
                      );
                    if (!b) return null;
                    b =
                      31536e3 * Number(b[1] || null) +
                      2592e3 * Number(b[2] || null) +
                      86400 * Number(b[3] || null) +
                      3600 * Number(b[4] || null) +
                      60 * Number(b[5] || null) +
                      Number(b[6] || null);
                    return isFinite(b) ? b : null;
                  },
                  kc: function (b) {
                    var c = /([0-9]+)-([0-9]+)/.exec(b);
                    if (!c) return null;
                    b = Number(c[1]);
                    if (!isFinite(b)) return null;
                    c = Number(c[2]);
                    return isFinite(c) ? { start: b, end: c } : null;
                  },
                  parseInt: function (b) {
                    b = Number(b);
                    return 0 === b % 1 ? b : null;
                  },
                  jc: function (b) {
                    b = Number(b);
                    return 0 === b % 1 && 0 < b ? b : null;
                  },
                  rb: function (b) {
                    b = Number(b);
                    return 0 === b % 1 && 0 <= b ? b : null;
                  },
                  parseFloat: function (b) {
                    b = Number(b);
                    return isNaN(b) ? null : b;
                  },
                  ve: function (b) {
                    var c;
                    b = (c = b.match(/^(\d+)\/(\d+)$/))
                      ? Number(c[1]) / Number(c[2])
                      : Number(b);
                    return isNaN(b) ? null : b;
                  },
                  Pd: function (b, c) {
                    var d = new DOMParser();
                    try {
                      var e = d.parseFromString(b, "text/xml");
                    } catch (g) {}
                    if (e && e.documentElement.tagName == c)
                      var f = e.documentElement;
                    return f && 0 < f.getElementsByTagName("parsererror").length
                      ? null
                      : f;
                  },
                  Od: function (b, c) {
                    try {
                      var d = sc(b);
                      return P.Pd(d, c);
                    } catch (e) {}
                  },
                };
                var tf = new Map()
                  .set(
                    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",
                    "org.w3.clearkey"
                  )
                  .set(
                    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
                    "com.widevine.alpha"
                  )
                  .set(
                    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95",
                    "com.microsoft.playready"
                  )
                  .set(
                    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb",
                    "com.adobe.primetime"
                  );
                function uf(b, c, d) {
                  var e = vf(b),
                    f = null;
                  b = [];
                  var g = [],
                    h = new Set(
                      e.map(function (b) {
                        return b.keyId;
                      })
                    );
                  h["delete"](null);
                  if (1 < h.size) throw new D(2, 4, 4010);
                  d ||
                    ((g = e.filter(function (b) {
                      return "urn:mpeg:dash:mp4protection:2011" == b.Xd
                        ? ((f = b.init || f), !1)
                        : !0;
                    })),
                    g.length &&
                      ((b = wf(f, c, g)), 0 == b.length && (b = [vd("", f)])));
                  if (e.length && (d || !g.length))
                    for (
                      b = [], c = r(tf.values()), d = c.next();
                      !d.done;
                      d = c.next()
                    )
                      (d = d.value), "org.w3.clearkey" != d && b.push(vd(d, f));
                  if ((h = Array.from(h)[0] || null))
                    for (c = r(b), d = c.next(); !d.done; d = c.next())
                      for (
                        d = r(d.value.initData), e = d.next();
                        !e.done;
                        e = d.next()
                      )
                        e.value.keyId = h;
                  return { qd: h, og: f, drmInfos: b, vd: !0 };
                }
                function xf(b, c, d, e) {
                  var f = uf(b, c, e);
                  if (d.vd) {
                    b = 1 == d.drmInfos.length && !d.drmInfos[0].keySystem;
                    c = 0 == f.drmInfos.length;
                    if (0 == d.drmInfos.length || (b && !c))
                      d.drmInfos = f.drmInfos;
                    d.vd = !1;
                  } else if (
                    0 < f.drmInfos.length &&
                    ((d.drmInfos = d.drmInfos.filter(function (b) {
                      return f.drmInfos.some(function (c) {
                        return c.keySystem == b.keySystem;
                      });
                    })),
                    0 == d.drmInfos.length)
                  )
                    throw new D(2, 4, 4008);
                  return f.qd || d.qd;
                }
                function yf(b) {
                  var c = 0,
                    d = new DataView(b).getUint32(c, !0);
                  if (d !== b.byteLength) return [];
                  c += 6;
                  d = [];
                  for (var e = new DataView(b); c < b.byteLength - 1; ) {
                    var f = e.getUint16(c, !0);
                    c += 2;
                    var g = e.getUint16(c, !0);
                    c += 2;
                    var h = new Uint8Array(b, c, g);
                    d.push({ type: f, value: h });
                    c += g;
                  }
                  return d;
                }
                function zf(b) {
                  return (b = b.querySelector("DATA > LA_URL"))
                    ? b.textContent
                    : "";
                }
                function wf(b, c, d) {
                  var e = [];
                  d = r(d);
                  for (var f = d.next(); !f.done; f = d.next()) {
                    f = f.value;
                    var g = tf.get(f.Xd);
                    if (g) {
                      var h = vd(g, f.init || b);
                      if ((g = Af.get(g))) h.licenseServerUri = g(f);
                      e.push(h);
                    } else
                      for (
                        f = c(f.node) || [], f = r(f), h = f.next();
                        !h.done;
                        h = f.next()
                      )
                        e.push(h.value);
                  }
                  return e;
                }
                var Af = new Map()
                  .set("com.widevine.alpha", function (b) {
                    return (b = P.td(b.node, "urn:microsoft", "laurl"))
                      ? b.getAttribute("licenseUrl") || ""
                      : "";
                  })
                  .set("com.microsoft.playready", function (b) {
                    b = P.td(b.node, "urn:microsoft:playready", "pro");
                    if (!b) return "";
                    b = Bc(b.textContent);
                    b = yf(b.buffer).filter(function (b) {
                      return 1 === b.type;
                    })[0];
                    if (!b) return "";
                    b = uc(b.value, !0);
                    return (b = P.Pd(b, "WRMHEADER")) ? zf(b) : "";
                  });
                function vf(b) {
                  var c = [];
                  b = r(b);
                  for (var d = b.next(); !d.done; d = b.next())
                    (d = Bf(d.value)) && c.push(d);
                  return c;
                }
                function Bf(b) {
                  var c = b.getAttribute("schemeIdUri"),
                    d = P.getAttributeNS(
                      b,
                      "urn:mpeg:cenc:2013",
                      "default_KID"
                    ),
                    e = P.ud(b, "urn:mpeg:cenc:2013", "pssh").map(P.ac);
                  if (!c) return null;
                  c = c.toLowerCase();
                  if (
                    d &&
                    ((d = d.replace(/-/g, "").toLowerCase()), d.includes(" "))
                  )
                    throw new D(2, 4, 4009);
                  var f = [];
                  try {
                    f = e.map(function (b) {
                      return {
                        initDataType: "cenc",
                        initData: Bc(b),
                        keyId: null,
                      };
                    });
                  } catch (g) {
                    throw new D(2, 4, 4007);
                  }
                  return {
                    node: b,
                    Xd: c,
                    keyId: d,
                    init: 0 < f.length ? f : null,
                  };
                }
                function Cf(b, c, d, e, f) {
                  var g = {
                    RepresentationID: c,
                    Number: d,
                    Bandwidth: e,
                    Time: f,
                  };
                  return b.replace(
                    /\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,
                    function (b, c, d, e) {
                      if ("$$" == b) return "$";
                      var f = g[c];
                      if (null == f) return b;
                      "RepresentationID" == c && d && (d = void 0);
                      "Time" == c && (f = Math.round(f));
                      switch (e) {
                        case void 0:
                        case "d":
                        case "i":
                        case "u":
                          b = f.toString();
                          break;
                        case "o":
                          b = f.toString(8);
                          break;
                        case "x":
                          b = f.toString(16);
                          break;
                        case "X":
                          b = f.toString(16).toUpperCase();
                          break;
                        default:
                          b = f.toString();
                      }
                      d = window.parseInt(d, 10) || 1;
                      return Array(Math.max(0, d - b.length) + 1).join("0") + b;
                    }
                  );
                }
                function Df(b, c) {
                  var d = Ef(b, c, "timescale"),
                    e = 1;
                  d && (e = P.jc(d) || 1);
                  d = Ef(b, c, "duration");
                  (d = P.jc(d || "")) && (d /= e);
                  var f = Ef(b, c, "startNumber"),
                    g = Number(Ef(b, c, "presentationTimeOffset")) || 0,
                    h = P.rb(f || "");
                  if (null == f || null == h) h = 1;
                  var k = Ff(b, c, "SegmentTimeline");
                  f = null;
                  if (k) {
                    f = e;
                    var l = b.R.duration || Infinity;
                    k = P.P(k, "S");
                    for (var m = [], n = 0, q = 0; q < k.length; ++q) {
                      var x = k[q],
                        w = P.H(x, "t", P.rb),
                        A = P.H(x, "d", P.rb);
                      x = P.H(x, "r", P.parseInt);
                      null != w && (w -= g);
                      if (!A) break;
                      w = null != w ? w : n;
                      x = x || 0;
                      if (0 > x)
                        if (q + 1 < k.length) {
                          x = P.H(k[q + 1], "t", P.rb);
                          if (null == x) break;
                          else if (w >= x) break;
                          x = Math.ceil((x - w) / A) - 1;
                        } else {
                          if (Infinity == l) break;
                          else if (w / f >= l) break;
                          x = Math.ceil((l * f - w) / A) - 1;
                        }
                      0 < m.length && w != n && (m[m.length - 1].end = w / f);
                      for (var C = 0; C <= x; ++C)
                        (n = w + A),
                          m.push({ start: w / f, end: n / f, dg: w }),
                          (w = n);
                    }
                    f = m;
                  }
                  return {
                    timescale: e,
                    Z: d,
                    Wa: h,
                    ia: g / e || 0,
                    md: g,
                    M: f,
                  };
                }
                function Ef(b, c, d) {
                  return [c(b.B), c(b.ba), c(b.ga)]
                    .filter(td.Da)
                    .map(function (b) {
                      return b.getAttribute(d);
                    })
                    .reduce(function (b, c) {
                      return b || c;
                    });
                }
                function Ff(b, c, d) {
                  return [c(b.B), c(b.ba), c(b.ga)]
                    .filter(td.Da)
                    .map(function (b) {
                      return P.Yb(b, d);
                    })
                    .reduce(function (b, c) {
                      return b || c;
                    });
                }
                function Gf(b, c, d, e, f, g) {
                  for (
                    var h = P.getAttributeNS(
                        b,
                        "http://www.w3.org/1999/xlink",
                        "href"
                      ),
                      k =
                        P.getAttributeNS(
                          b,
                          "http://www.w3.org/1999/xlink",
                          "actuate"
                        ) || "onRequest",
                      l = 0;
                    l < b.attributes.length;
                    l++
                  ) {
                    var m = b.attributes[l];
                    "http://www.w3.org/1999/xlink" == m.namespaceURI &&
                      (b.removeAttributeNS(m.namespaceURI, m.localName), --l);
                  }
                  if (5 <= g) return Ab(new D(2, 4, 4028));
                  if ("onLoad" != k) return Ab(new D(2, 4, 4027));
                  var n = ud([e], [h]);
                  return f.request(0, Sb(n, c)).T(function (e) {
                    e = P.Od(e.data, b.tagName);
                    if (!e) return Ab(new D(2, 4, 4001, h));
                    for (; b.childNodes.length; )
                      b.removeChild(b.childNodes[0]);
                    for (; e.childNodes.length; ) {
                      var k = e.childNodes[0];
                      e.removeChild(k);
                      b.appendChild(k);
                    }
                    for (k = 0; k < e.attributes.length; k++) {
                      var l = e.attributes[k].nodeName,
                        m = e.getAttribute(l);
                      b.setAttribute(l, m);
                    }
                    return Hf(b, c, d, n[0], f, g + 1);
                  });
                }
                function Hf(b, c, d, e, f, g) {
                  g = void 0 === g ? 0 : g;
                  if (
                    P.getAttributeNS(b, "http://www.w3.org/1999/xlink", "href")
                  ) {
                    var h = Gf(b, c, d, e, f, g);
                    d &&
                      (h = h.T(void 0, function () {
                        return Hf(b, c, d, e, f, g);
                      }));
                    return h;
                  }
                  h = [];
                  for (var k = 0; k < b.childNodes.length; k++) {
                    var l = b.childNodes[k];
                    l instanceof Element &&
                      ("urn:mpeg:dash:resolve-to-zero:2013" ==
                      P.getAttributeNS(
                        l,
                        "http://www.w3.org/1999/xlink",
                        "href"
                      )
                        ? (b.removeChild(l), --k)
                        : "SegmentTimeline" != l.tagName &&
                          h.push(Hf(l, c, d, e, f, g)));
                  }
                  return Eb(h).T(function () {
                    return b;
                  });
                }
                function If(b, c, d) {
                  this.c = b;
                  this.b = c;
                  this.a = d;
                }
                z("shaka.media.InitSegmentReference", If);
                If.prototype.wc = function () {
                  return this.c();
                };
                If.prototype.createUris = If.prototype.wc;
                If.prototype.Fc = function () {
                  return this.b;
                };
                If.prototype.getStartByte = If.prototype.Fc;
                If.prototype.Ec = function () {
                  return this.a;
                };
                If.prototype.getEndByte = If.prototype.Ec;
                function Q(b, c, d, e, f, g) {
                  this.position = b;
                  this.startTime = c;
                  this.endTime = d;
                  this.c = e;
                  this.b = f;
                  this.a = g;
                }
                z("shaka.media.SegmentReference", Q);
                Q.prototype.aa = function () {
                  return this.position;
                };
                Q.prototype.getPosition = Q.prototype.aa;
                Q.prototype.Gc = function () {
                  return this.startTime;
                };
                Q.prototype.getStartTime = Q.prototype.Gc;
                Q.prototype.Be = function () {
                  return this.endTime;
                };
                Q.prototype.getEndTime = Q.prototype.Be;
                Q.prototype.wc = function () {
                  return this.c();
                };
                Q.prototype.createUris = Q.prototype.wc;
                Q.prototype.Fc = function () {
                  return this.b;
                };
                Q.prototype.getStartByte = Q.prototype.Fc;
                Q.prototype.Ec = function () {
                  return this.a;
                };
                Q.prototype.getEndByte = Q.prototype.Ec;
                function R(b, c) {
                  this.I = b;
                  this.b = c == Jf;
                  this.a = 0;
                }
                z("shaka.util.DataViewReader", R);
                var Jf = 1;
                R.Endianness = { kg: 0, lg: Jf };
                R.prototype.pa = function () {
                  return this.a < this.I.byteLength;
                };
                R.prototype.hasMoreData = R.prototype.pa;
                R.prototype.aa = function () {
                  return this.a;
                };
                R.prototype.getPosition = R.prototype.aa;
                R.prototype.De = function () {
                  return this.I.byteLength;
                };
                R.prototype.getLength = R.prototype.De;
                R.prototype.ha = function () {
                  try {
                    var b = this.I.getUint8(this.a);
                    this.a += 1;
                    return b;
                  } catch (c) {
                    Kf();
                  }
                };
                R.prototype.readUint8 = R.prototype.ha;
                R.prototype.Jb = function () {
                  try {
                    var b = this.I.getUint16(this.a, this.b);
                    this.a += 2;
                    return b;
                  } catch (c) {
                    Kf();
                  }
                };
                R.prototype.readUint16 = R.prototype.Jb;
                R.prototype.D = function () {
                  try {
                    var b = this.I.getUint32(this.a, this.b);
                    this.a += 4;
                    return b;
                  } catch (c) {
                    Kf();
                  }
                };
                R.prototype.readUint32 = R.prototype.D;
                R.prototype.Td = function () {
                  try {
                    var b = this.I.getInt32(this.a, this.b);
                    this.a += 4;
                    return b;
                  } catch (c) {
                    Kf();
                  }
                };
                R.prototype.readInt32 = R.prototype.Td;
                R.prototype.ub = function () {
                  try {
                    if (this.b) {
                      var b = this.I.getUint32(this.a, !0);
                      var c = this.I.getUint32(this.a + 4, !0);
                    } else
                      (c = this.I.getUint32(this.a, !1)),
                        (b = this.I.getUint32(this.a + 4, !1));
                  } catch (d) {
                    Kf();
                  }
                  if (2097151 < c) throw new D(2, 3, 3001);
                  this.a += 8;
                  return c * Math.pow(2, 32) + b;
                };
                R.prototype.readUint64 = R.prototype.ub;
                R.prototype.Va = function (b) {
                  this.a + b > this.I.byteLength && Kf();
                  var c = new Uint8Array(
                    this.I.buffer,
                    this.I.byteOffset + this.a,
                    b
                  );
                  this.a += b;
                  return new Uint8Array(c);
                };
                R.prototype.readBytes = R.prototype.Va;
                R.prototype.J = function (b) {
                  this.a + b > this.I.byteLength && Kf();
                  this.a += b;
                };
                R.prototype.skip = R.prototype.J;
                R.prototype.Wd = function (b) {
                  this.a < b && Kf();
                  this.a -= b;
                };
                R.prototype.rewind = R.prototype.Wd;
                R.prototype.seek = function (b) {
                  (0 > b || b > this.I.byteLength) && Kf();
                  this.a = b;
                };
                R.prototype.seek = R.prototype.seek;
                R.prototype.Wc = function () {
                  for (
                    var b = this.a;
                    this.pa() && 0 != this.I.getUint8(this.a);

                  )
                    this.a += 1;
                  b = new Uint8Array(
                    this.I.buffer,
                    this.I.byteOffset + b,
                    this.a - b
                  );
                  this.a += 1;
                  return sc(b);
                };
                R.prototype.readTerminatedString = R.prototype.Wc;
                function Kf() {
                  throw new D(2, 3, 3e3);
                }
                function S() {
                  this.c = [];
                  this.b = [];
                  this.a = !1;
                }
                z("shaka.util.Mp4Parser", S);
                S.prototype.G = function (b, c) {
                  var d = Lf(b);
                  this.c[d] = 0;
                  this.b[d] = c;
                  return this;
                };
                S.prototype.box = S.prototype.G;
                S.prototype.ca = function (b, c) {
                  var d = Lf(b);
                  this.c[d] = 1;
                  this.b[d] = c;
                  return this;
                };
                S.prototype.fullBox = S.prototype.ca;
                S.prototype.stop = function () {
                  this.a = !0;
                };
                S.prototype.stop = S.prototype.stop;
                S.prototype.parse = function (b, c) {
                  var d = new Uint8Array(b);
                  d = new R(
                    new DataView(d.buffer, d.byteOffset, d.byteLength),
                    0
                  );
                  for (this.a = !1; d.pa() && !this.a; ) this.ic(0, d, c);
                };
                S.prototype.parse = S.prototype.parse;
                S.prototype.ic = function (b, c, d) {
                  var e = c.aa(),
                    f = c.D(),
                    g = c.D();
                  switch (f) {
                    case 0:
                      f = c.I.byteLength - e;
                      break;
                    case 1:
                      f = c.ub();
                  }
                  var h = this.b[g];
                  if (h) {
                    var k = null,
                      l = null;
                    1 == this.c[g] &&
                      ((l = c.D()), (k = l >>> 24), (l &= 16777215));
                    g = e + f;
                    d && g > c.I.byteLength && (g = c.I.byteLength);
                    g -= c.aa();
                    c = 0 < g ? c.Va(g) : new Uint8Array(0);
                    c = new R(
                      new DataView(c.buffer, c.byteOffset, c.byteLength),
                      0
                    );
                    h({
                      parser: this,
                      partialOkay: d || !1,
                      version: k,
                      flags: l,
                      reader: c,
                      size: f,
                      start: e + b,
                    });
                  } else c.J(Math.min(e + f - c.aa(), c.I.byteLength - c.aa()));
                };
                S.prototype.parseNext = S.prototype.ic;
                function Mf(b) {
                  for (; b.reader.pa() && !b.parser.a; )
                    b.parser.ic(b.start, b.reader, b.partialOkay);
                }
                S.children = Mf;
                function Nf(b) {
                  for (var c = b.reader.D(); 0 < c && !b.parser.a; --c)
                    b.parser.ic(b.start, b.reader, b.partialOkay);
                }
                S.sampleDescription = Nf;
                function Of(b) {
                  return function (c) {
                    b(c.reader.Va(c.reader.I.byteLength - c.reader.aa()));
                  };
                }
                S.allData = Of;
                function Lf(b) {
                  for (var c = 0, d = 0; d < b.length; d++)
                    c = (c << 8) | b.charCodeAt(d);
                  return c;
                }
                function Pf(b) {
                  return String.fromCharCode(
                    (b >> 24) & 255,
                    (b >> 16) & 255,
                    (b >> 8) & 255,
                    b & 255
                  );
                }
                S.typeToString = Pf;
                function Qf(b, c, d, e) {
                  var f,
                    g = new S().ca("sidx", function (b) {
                      f = Rf(c, e, d, b);
                    });
                  b && g.parse(b);
                  if (f) return f;
                  throw new D(2, 3, 3004);
                }
                function Rf(b, c, d, e) {
                  var f = [];
                  e.reader.J(4);
                  var g = e.reader.D();
                  if (0 == g) throw new D(2, 3, 3005);
                  if (0 == e.version) {
                    var h = e.reader.D();
                    var k = e.reader.D();
                  } else (h = e.reader.ub()), (k = e.reader.ub());
                  e.reader.J(2);
                  var l = e.reader.Jb();
                  b = b + e.size + k;
                  for (k = 0; k < l; k++) {
                    var m = e.reader.D(),
                      n = (m & 2147483648) >>> 31;
                    m &= 2147483647;
                    var q = e.reader.D();
                    e.reader.J(4);
                    if (1 == n) throw new D(2, 3, 3006);
                    f.push(
                      new Q(
                        f.length,
                        h / g - c,
                        (h + q) / g - c,
                        function () {
                          return d;
                        },
                        b,
                        b + m - 1
                      )
                    );
                    h += q;
                    b += m;
                  }
                  e.parser.stop();
                  return f;
                }
                function T(b) {
                  this.a = b;
                }
                z("shaka.media.SegmentIndex", T);
                T.prototype.destroy = function () {
                  this.a = null;
                  return Promise.resolve();
                };
                T.prototype.destroy = T.prototype.destroy;
                T.prototype.find = function (b) {
                  for (var c = this.a.length - 1; 0 <= c; --c) {
                    var d = this.a[c];
                    if (b >= d.startTime && b < d.endTime) return d.position;
                  }
                  return this.a.length && b < this.a[0].startTime
                    ? this.a[0].position
                    : null;
                };
                T.prototype.find = T.prototype.find;
                T.prototype.get = function (b) {
                  if (0 == this.a.length) return null;
                  b -= this.a[0].position;
                  return 0 > b || b >= this.a.length ? null : this.a[b];
                };
                T.prototype.get = T.prototype.get;
                T.prototype.offset = function (b) {
                  for (var c = 0; c < this.a.length; ++c)
                    (this.a[c].startTime += b), (this.a[c].endTime += b);
                };
                T.prototype.offset = T.prototype.offset;
                T.prototype.Oc = function (b) {
                  for (
                    var c = [], d = 0, e = 0;
                    d < this.a.length && e < b.length;

                  ) {
                    var f = this.a[d],
                      g = b[e];
                    f.startTime < g.startTime
                      ? (c.push(f), d++)
                      : (f.startTime > g.startTime
                          ? 0 == d && c.push(g)
                          : (0.1 < Math.abs(f.endTime - g.endTime)
                              ? c.push(
                                  new Q(
                                    f.position,
                                    g.startTime,
                                    g.endTime,
                                    g.c,
                                    g.b,
                                    g.a
                                  )
                                )
                              : c.push(f),
                            d++),
                        e++);
                  }
                  for (; d < this.a.length; ) c.push(this.a[d++]);
                  if (c.length)
                    for (d = c[c.length - 1].position + 1; e < b.length; )
                      (f = b[e++]),
                        (f = new Q(d++, f.startTime, f.endTime, f.c, f.b, f.a)),
                        c.push(f);
                  else c = b;
                  this.a = c;
                };
                T.prototype.merge = T.prototype.Oc;
                T.prototype.zc = function (b) {
                  for (var c = 0; c < this.a.length; ++c)
                    if (this.a[c].endTime > b) {
                      this.a.splice(0, c);
                      return;
                    }
                  this.a = [];
                };
                T.prototype.evict = T.prototype.zc;
                function Sf(b, c) {
                  for (; b.a.length; )
                    if (b.a[b.a.length - 1].startTime >= c) b.a.pop();
                    else break;
                  for (; b.a.length; )
                    if (0 >= b.a[0].endTime) b.a.shift();
                    else break;
                  if (0 != b.a.length) {
                    var d = b.a[b.a.length - 1];
                    b.a[b.a.length - 1] = new Q(
                      d.position,
                      d.startTime,
                      c,
                      d.c,
                      d.b,
                      d.a
                    );
                  }
                }
                function Tf(b) {
                  this.b = b;
                  this.a = new R(b, 0);
                  Uf ||
                    (Uf = [
                      new Uint8Array([255]),
                      new Uint8Array([127, 255]),
                      new Uint8Array([63, 255, 255]),
                      new Uint8Array([31, 255, 255, 255]),
                      new Uint8Array([15, 255, 255, 255, 255]),
                      new Uint8Array([7, 255, 255, 255, 255, 255]),
                      new Uint8Array([3, 255, 255, 255, 255, 255, 255]),
                      new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255]),
                    ]);
                }
                var Uf;
                Tf.prototype.pa = function () {
                  return this.a.pa();
                };
                function Vf(b) {
                  var c = Wf(b);
                  if (7 < c.length) throw new D(2, 3, 3002);
                  for (var d = 0, e = 0; e < c.length; e++) d = 256 * d + c[e];
                  c = d;
                  d = Wf(b);
                  a: {
                    for (e = 0; e < Uf.length; e++)
                      if (Ec(d, Uf[e])) {
                        e = !0;
                        break a;
                      }
                    e = !1;
                  }
                  if (e) d = b.b.byteLength - b.a.aa();
                  else {
                    if (8 == d.length && d[1] & 224) throw new D(2, 3, 3001);
                    e = d[0] & ((1 << (8 - d.length)) - 1);
                    for (var f = 1; f < d.length; f++) e = 256 * e + d[f];
                    d = e;
                  }
                  d =
                    b.a.aa() + d <= b.b.byteLength
                      ? d
                      : b.b.byteLength - b.a.aa();
                  e = new DataView(b.b.buffer, b.b.byteOffset + b.a.aa(), d);
                  b.a.J(d);
                  return new Xf(c, e);
                }
                function Wf(b) {
                  var c = b.a.ha(),
                    d;
                  for (d = 1; 8 >= d && !(c & (1 << (8 - d))); d++);
                  if (8 < d) throw new D(2, 3, 3002);
                  var e = new Uint8Array(d);
                  e[0] = c;
                  for (c = 1; c < d; c++) e[c] = b.a.ha();
                  return e;
                }
                function Xf(b, c) {
                  this.id = b;
                  this.a = c;
                }
                function Yf(b) {
                  if (8 < b.a.byteLength) throw new D(2, 3, 3002);
                  if (8 == b.a.byteLength && b.a.getUint8(0) & 224)
                    throw new D(2, 3, 3001);
                  for (var c = 0, d = 0; d < b.a.byteLength; d++) {
                    var e = b.a.getUint8(d);
                    c = 256 * c + e;
                  }
                  return c;
                }
                function Zf() {}
                Zf.prototype.parse = function (b, c, d, e) {
                  var f;
                  c = new Tf(new DataView(c));
                  if (440786851 != Vf(c).id) throw new D(2, 3, 3008);
                  var g = Vf(c);
                  if (408125543 != g.id) throw new D(2, 3, 3009);
                  c = g.a.byteOffset;
                  g = new Tf(g.a);
                  for (f = null; g.pa(); ) {
                    var h = Vf(g);
                    if (357149030 == h.id) {
                      f = h;
                      break;
                    }
                  }
                  if (!f) throw new D(2, 3, 3010);
                  g = new Tf(f.a);
                  f = 1e6;
                  for (h = null; g.pa(); ) {
                    var k = Vf(g);
                    if (2807729 == k.id) f = Yf(k);
                    else if (17545 == k.id)
                      if (((h = k), 4 == h.a.byteLength)) h = h.a.getFloat32(0);
                      else if (8 == h.a.byteLength) h = h.a.getFloat64(0);
                      else throw new D(2, 3, 3003);
                  }
                  if (null == h) throw new D(2, 3, 3011);
                  g = f / 1e9;
                  f = h * g;
                  b = Vf(new Tf(new DataView(b)));
                  if (475249515 != b.id) throw new D(2, 3, 3007);
                  return $f(b, c, g, f, d, e);
                };
                function $f(b, c, d, e, f, g) {
                  function h() {
                    return f;
                  }
                  var k = [];
                  b = new Tf(b.a);
                  for (var l = null, m = null; b.pa(); ) {
                    var n = Vf(b);
                    if (187 == n.id) {
                      var q = ag(n);
                      q &&
                        ((n = d * q.eg),
                        (q = c + q.yf),
                        null != l &&
                          k.push(new Q(k.length, l - g, n - g, h, m, q - 1)),
                        (l = n),
                        (m = q));
                    }
                  }
                  null != l &&
                    k.push(new Q(k.length, l - g, e - g, h, m, null));
                  return k;
                }
                function ag(b) {
                  var c = new Tf(b.a);
                  b = Vf(c);
                  if (179 != b.id) throw new D(2, 3, 3013);
                  b = Yf(b);
                  c = Vf(c);
                  if (183 != c.id) throw new D(2, 3, 3012);
                  c = new Tf(c.a);
                  for (var d = 0; c.pa(); ) {
                    var e = Vf(c);
                    if (241 == e.id) {
                      d = Yf(e);
                      break;
                    }
                  }
                  return { eg: b, yf: d };
                }
                function bg(b, c) {
                  var d = Ff(b, c, "Initialization");
                  if (!d) return null;
                  var e = b.B.la,
                    f = d.getAttribute("sourceURL");
                  f && (e = ud(b.B.la, [f]));
                  f = 0;
                  var g = null;
                  if ((d = P.H(d, "range", P.kc))) (f = d.start), (g = d.end);
                  return new If(
                    function () {
                      return e;
                    },
                    f,
                    g
                  );
                }
                function cg(b, c) {
                  var d = Number(Ef(b, dg, "presentationTimeOffset")) || 0,
                    e = Ef(b, dg, "timescale"),
                    f = 1;
                  e && (f = P.jc(e) || 1);
                  d = d / f || 0;
                  e = bg(b, dg);
                  var g = b.B.contentType;
                  f = b.B.mimeType.split("/")[1];
                  if ("text" != g && "mp4" != f && "webm" != f)
                    throw new D(2, 4, 4006);
                  if ("webm" == f && !e) throw new D(2, 4, 4005);
                  g = Ff(b, dg, "RepresentationIndex");
                  var h = Ef(b, dg, "indexRange"),
                    k = b.B.la;
                  h = P.kc(h || "");
                  if (g) {
                    var l = g.getAttribute("sourceURL");
                    l && (k = ud(b.B.la, [l]));
                    h = P.H(g, "range", P.kc, h);
                  }
                  if (!h) throw new D(2, 4, 4002);
                  f = eg(b, c, e, k, h.start, h.end, f, d);
                  return {
                    createSegmentIndex: f.createSegmentIndex,
                    findSegmentPosition: f.findSegmentPosition,
                    getSegmentReference: f.getSegmentReference,
                    initSegmentReference: e,
                    ia: d,
                  };
                }
                function eg(b, c, d, e, f, g, h, k) {
                  var l = b.presentationTimeline,
                    m = !b.gb || !b.R.Kc,
                    n = b.R.start,
                    q = b.R.duration,
                    x = c,
                    w = null;
                  return {
                    createSegmentIndex: function () {
                      var b = [
                        x(e, f, g),
                        "webm" == h ? x(d.c(), d.b, d.a) : null,
                      ];
                      x = null;
                      return Promise.all(b).then(function (b) {
                        var c = b[0];
                        b = b[1] || null;
                        c =
                          "mp4" == h
                            ? Qf(c, f, e, k)
                            : new Zf().parse(c, b, e, k);
                        l.ob(c, n);
                        w = new T(c);
                        m && Sf(w, q);
                      });
                    },
                    findSegmentPosition: function (b) {
                      return w.find(b);
                    },
                    getSegmentReference: function (b) {
                      return w.get(b);
                    },
                  };
                }
                function dg(b) {
                  return b.Lb;
                }
                function fg(b, c) {
                  var d = bg(b, gg);
                  var e = hg(b);
                  var f = Df(b, gg),
                    g = f.Wa;
                  0 == g && (g = 1);
                  var h = 0;
                  f.Z
                    ? (h = f.Z * (g - 1))
                    : f.M && 0 < f.M.length && (h = f.M[0].start);
                  e = { Z: f.Z, startTime: h, Wa: g, ia: f.ia, M: f.M, mb: e };
                  if (!e.Z && !e.M && 1 < e.mb.length) throw new D(2, 4, 4002);
                  if (!e.Z && !b.R.duration && !e.M && 1 == e.mb.length)
                    throw new D(2, 4, 4002);
                  if (e.M && 0 == e.M.length) throw new D(2, 4, 4002);
                  g = f = null;
                  b.ga.id &&
                    b.B.id &&
                    ((g = b.ga.id + "," + b.B.id), (f = c[g]));
                  h = ig(b.R.duration, e.Wa, b.B.la, e);
                  f
                    ? (f.Oc(h),
                      (g = b.presentationTimeline.Db()),
                      f.zc(g - b.R.start))
                    : (b.presentationTimeline.ob(h, b.R.start),
                      (f = new T(h)),
                      g && b.gb && (c[g] = f));
                  (b.gb && b.R.Kc) || Sf(f, b.R.duration);
                  return {
                    createSegmentIndex: Promise.resolve.bind(Promise),
                    findSegmentPosition: f.find.bind(f),
                    getSegmentReference: f.get.bind(f),
                    initSegmentReference: d,
                    ia: e.ia,
                  };
                }
                function gg(b) {
                  return b.Ga;
                }
                function ig(b, c, d, e) {
                  var f = e.mb.length;
                  e.M &&
                    e.M.length != e.mb.length &&
                    (f = Math.min(e.M.length, e.mb.length));
                  for (var g = [], h = e.startTime, k = 0; k < f; k++) {
                    var l = e.mb[k],
                      m = ud(d, [l.Ye]),
                      n = void 0;
                    n = null != e.Z ? h + e.Z : e.M ? e.M[k].end : h + b;
                    g.push(
                      new Q(
                        k + c,
                        h,
                        n,
                        function (b) {
                          return b;
                        }.bind(null, m),
                        l.start,
                        l.end
                      )
                    );
                    h = n;
                  }
                  return g;
                }
                function hg(b) {
                  return [b.B.Ga, b.ba.Ga, b.ga.Ga]
                    .filter(td.Da)
                    .map(function (b) {
                      return P.P(b, "SegmentURL");
                    })
                    .reduce(function (b, d) {
                      return 0 < b.length ? b : d;
                    })
                    .map(function (c) {
                      c.getAttribute("indexRange") && !b.Cd && (b.Cd = !0);
                      var d = c.getAttribute("media");
                      c = P.H(c, "mediaRange", P.kc, { start: 0, end: null });
                      return { Ye: d, start: c.start, end: c.end };
                    });
                }
                function jg(b, c, d, e) {
                  var f = kg(b);
                  var g = Df(b, lg);
                  var h = Ef(b, lg, "media"),
                    k = Ef(b, lg, "index");
                  g = {
                    Z: g.Z,
                    timescale: g.timescale,
                    Wa: g.Wa,
                    ia: g.ia,
                    md: g.md,
                    M: g.M,
                    Nc: h,
                    Fb: k,
                  };
                  h = g.Fb ? 1 : 0;
                  h += g.M ? 1 : 0;
                  h += g.Z ? 1 : 0;
                  if (0 == h) throw new D(2, 4, 4002);
                  1 != h && (g.Fb && (g.M = null), (g.Z = null));
                  if (!g.Fb && !g.Nc) throw new D(2, 4, 4002);
                  if (g.Fb) {
                    d = b.B.mimeType.split("/")[1];
                    if ("mp4" != d && "webm" != d) throw new D(2, 4, 4006);
                    if ("webm" == d && !f) throw new D(2, 4, 4005);
                    e = Cf(g.Fb, b.B.id, null, b.bandwidth || null, null);
                    e = ud(b.B.la, [e]);
                    b = eg(b, c, f, e, 0, null, d, g.ia);
                  } else
                    g.Z
                      ? (e ||
                          (b.presentationTimeline.Qc(g.Z),
                          b.presentationTimeline.Rc(b.R.start)),
                        (b = mg(b, g)))
                      : ((h = c = null),
                        b.ga.id &&
                          b.B.id &&
                          ((h = b.ga.id + "," + b.B.id), (c = d[h])),
                        (k = ng(b, g)),
                        (e = !b.gb || !b.R.Kc),
                        c
                          ? (e && Sf(new T(k), b.R.duration),
                            c.Oc(k),
                            (d = b.presentationTimeline.Db()),
                            c.zc(d - b.R.start))
                          : (b.presentationTimeline.ob(k, b.R.start),
                            (c = new T(k)),
                            h && b.gb && (d[h] = c)),
                        e && Sf(c, b.R.duration),
                        (b = {
                          createSegmentIndex: Promise.resolve.bind(Promise),
                          findSegmentPosition: c.find.bind(c),
                          getSegmentReference: c.get.bind(c),
                        }));
                  return {
                    createSegmentIndex: b.createSegmentIndex,
                    findSegmentPosition: b.findSegmentPosition,
                    getSegmentReference: b.getSegmentReference,
                    initSegmentReference: f,
                    ia: g.ia,
                  };
                }
                function lg(b) {
                  return b.Nb;
                }
                function mg(b, c) {
                  var d = b.R.duration,
                    e = c.Z,
                    f = c.Wa,
                    g = c.timescale,
                    h = c.Nc,
                    k = b.bandwidth || null,
                    l = b.B.id,
                    m = b.B.la;
                  return {
                    createSegmentIndex: Promise.resolve.bind(Promise),
                    findSegmentPosition: function (b) {
                      return 0 > b || (d && b >= d) ? null : Math.floor(b / e);
                    },
                    getSegmentReference: function (b) {
                      var c = b * e,
                        n = c + e;
                      d && (n = Math.min(n, d));
                      return 0 > n || (d && c >= d)
                        ? null
                        : new Q(
                            b,
                            c,
                            n,
                            function () {
                              var d = Cf(h, l, b + f, k, c * g);
                              return ud(m, [d]);
                            },
                            0,
                            null
                          );
                    },
                  };
                }
                function ng(b, c) {
                  for (var d = [], e = 0; e < c.M.length; e++) {
                    var f = e + c.Wa;
                    d.push(
                      new Q(
                        f,
                        c.M[e].start,
                        c.M[e].end,
                        function (b, c, d, e, f, n) {
                          b = Cf(b, c, f, d, n);
                          return ud(e, [b]).map(function (b) {
                            return b.toString();
                          });
                        }.bind(
                          null,
                          c.Nc,
                          b.B.id,
                          b.bandwidth || null,
                          b.B.la,
                          f,
                          c.M[e].dg + c.md
                        ),
                        0,
                        null
                      )
                    );
                  }
                  return d;
                }
                function kg(b) {
                  var c = Ef(b, lg, "initialization");
                  if (!c) return null;
                  var d = b.B.id,
                    e = b.bandwidth || null,
                    f = b.B.la;
                  return new If(
                    function () {
                      var b = Cf(c, d, null, e, null);
                      return ud(f, [b]);
                    },
                    0,
                    null
                  );
                }
                var U = {
                  sb: {},
                  Ib: {},
                  Zc: function (b, c) {
                    U.Ib[b] = c;
                  },
                };
                z("shaka.media.ManifestParser.registerParserByExtension", U.Zc);
                U.Kb = function (b, c) {
                  U.sb[b] = c;
                };
                z("shaka.media.ManifestParser.registerParserByMime", U.Kb);
                U.vf = function () {
                  var b = {};
                  if (mc()) {
                    for (var c in U.sb) b[c] = !0;
                    for (var d in U.Ib) b[d] = !0;
                  }
                  c = {
                    mpd: "application/dash+xml",
                    m3u8: "application/x-mpegurl",
                    ism: "application/vnd.ms-sstr+xml",
                  };
                  d = r([
                    "application/dash+xml",
                    "application/x-mpegurl",
                    "application/vnd.apple.mpegurl",
                    "application/vnd.ms-sstr+xml",
                  ]);
                  for (var e = d.next(); !e.done; e = d.next())
                    (e = e.value), (b[e] = mc() ? !!U.sb[e] : nc(e));
                  for (var f in c) b[f] = mc() ? !!U.Ib[f] : nc(c[f]);
                  return b;
                };
                U.create = function (b, c, d, e) {
                  return t(function g() {
                    var h, k;
                    return y(g, function (g) {
                      switch (g.l) {
                        case 1:
                          return ya(g, 2), u(g, U.Ce(b, c, d, e), 4);
                        case 4:
                          return (h = g.s), g["return"](new h());
                        case 2:
                          throw ((k = Da(g)), (k.severity = 2), k);
                      }
                    });
                  });
                };
                U.Ce = function (b, c, d, e) {
                  return t(function g() {
                    var h, k, l, m, n;
                    return y(g, function (g) {
                      switch (g.l) {
                        case 1:
                          h = U;
                          if (e && (k = h.sb[e.toLowerCase()]))
                            return g["return"](k);
                          if ((l = h.getExtension(b)))
                            if ((m = h.Ib[l])) return g["return"](m);
                          if (e) {
                            g.A(2);
                            break;
                          }
                          return u(g, h.Je(b, c, d), 3);
                        case 3:
                          if ((e = g.s))
                            if ((n = U.sb[e])) return g["return"](n);
                        case 2:
                          throw new D(2, 4, 4e3, b);
                      }
                    });
                  });
                };
                U.Je = function (b, c, d) {
                  return t(function f() {
                    var g, h, k;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (
                            (g = Sb([b], d)),
                            (g.method = "HEAD"),
                            u(f, c.request(0, g).promise, 2)
                          );
                        case 2:
                          return (
                            (h = f.s),
                            (k = h.headers["content-type"]),
                            f["return"](k ? k.toLowerCase() : "")
                          );
                      }
                    });
                  });
                };
                U.getExtension = function (b) {
                  b = new cb(b).fa.split("/").pop().split(".");
                  return 1 == b.length ? "" : b.pop().toLowerCase();
                };
                U.isSupported = function (b, c) {
                  return mc()
                    ? c in U.sb || U.getExtension(b) in U.Ib
                      ? !0
                      : !1
                    : !1;
                };
                function W(b, c, d) {
                  this.f = b;
                  this.lc = c;
                  this.h = this.g = Infinity;
                  this.a = 1;
                  this.b = this.c = null;
                  this.j = 0;
                  this.m = !0;
                  this.i = 0;
                  this.o = void 0 === d ? !0 : d;
                }
                z("shaka.media.PresentationTimeline", W);
                W.prototype.Y = function () {
                  return this.g;
                };
                W.prototype.getDuration = W.prototype.Y;
                W.prototype.ta = function (b) {
                  this.g = b;
                };
                W.prototype.setDuration = W.prototype.ta;
                W.prototype.Oe = function () {
                  return this.f;
                };
                W.prototype.getPresentationStartTime = W.prototype.Oe;
                W.prototype.Zd = function (b) {
                  this.j = b;
                };
                W.prototype.setClockOffset = W.prototype.Zd;
                W.prototype.Ob = function (b) {
                  this.m = b;
                };
                W.prototype.setStatic = W.prototype.Ob;
                W.prototype.fd = function (b) {
                  this.h = b;
                };
                W.prototype.setSegmentAvailabilityDuration = W.prototype.fd;
                W.prototype.Lf = function (b) {
                  this.lc = b;
                };
                W.prototype.setDelay = W.prototype.Lf;
                W.prototype.Ae = function () {
                  return this.lc;
                };
                W.prototype.getDelay = W.prototype.Ae;
                W.prototype.ob = function (b, c) {
                  if (0 != b.length) {
                    var d = b[b.length - 1].endTime + c;
                    this.Rc(b[0].startTime + c);
                    this.a = b.reduce(function (b, c) {
                      return Math.max(b, c.endTime - c.startTime);
                    }, this.a);
                    this.b = Math.max(this.b, d);
                    null != this.f &&
                      this.o &&
                      (this.f = (Date.now() + this.j) / 1e3 - this.b - this.a);
                  }
                };
                W.prototype.notifySegments = W.prototype.ob;
                W.prototype.Rc = function (b) {
                  this.c = null == this.c ? b : Math.min(this.c, b);
                };
                W.prototype.notifyMinSegmentStartTime = W.prototype.Rc;
                W.prototype.Qc = function (b) {
                  this.a = Math.max(this.a, b);
                };
                W.prototype.notifyMaxSegmentDuration = W.prototype.Qc;
                W.prototype.offset = function (b) {
                  null != this.c && (this.c += b);
                  null != this.b && (this.b += b);
                };
                W.prototype.offset = W.prototype.offset;
                W.prototype.U = function () {
                  return Infinity == this.g && !this.m;
                };
                W.prototype.isLive = W.prototype.U;
                W.prototype.Ta = function () {
                  return Infinity != this.g && !this.m;
                };
                W.prototype.isInProgress = W.prototype.Ta;
                W.prototype.Db = function () {
                  if (Infinity == this.h) return this.i;
                  var b = this.jb() - this.h;
                  return Math.max(this.i, b);
                };
                W.prototype.getSegmentAvailabilityStart = W.prototype.Db;
                W.prototype.$d = function (b) {
                  this.i = b;
                };
                W.prototype.setUserSeekStart = W.prototype.$d;
                W.prototype.jb = function () {
                  return this.U() || this.Ta()
                    ? Math.min(
                        Math.max(
                          0,
                          (Date.now() + this.j) / 1e3 - this.a - this.f
                        ),
                        this.g
                      )
                    : this.g;
                };
                W.prototype.getSegmentAvailabilityEnd = W.prototype.jb;
                W.prototype.Cb = function (b) {
                  var c = Math.max(this.c, this.i);
                  if (Infinity == this.h) return c;
                  var d = this.jb() - this.h;
                  b = Math.min(d + b, this.wa());
                  return Math.max(c, b);
                };
                W.prototype.getSafeSeekRangeStart = W.prototype.Cb;
                W.prototype.ib = function () {
                  return this.Cb(0);
                };
                W.prototype.getSeekRangeStart = W.prototype.ib;
                W.prototype.wa = function () {
                  var b = this.U() || this.Ta() ? this.lc : 0;
                  return Math.max(0, this.jb() - b);
                };
                W.prototype.getSeekRangeEnd = W.prototype.wa;
                W.prototype.de = function () {
                  return null == this.f || null != this.b ? !1 : !0;
                };
                W.prototype.usingPresentationStartTime = W.prototype.de;
                function og(b, c, d, e) {
                  b = Sb(b, e);
                  if (0 != c || null != d)
                    b.headers.Range = d
                      ? "bytes=" + c + "-" + d
                      : "bytes=" + c + "-";
                  return b;
                }
                function pg() {
                  var b = this;
                  this.a = this.b = null;
                  this.f = [];
                  this.c = null;
                  this.j = [];
                  this.h = 1;
                  this.m = {};
                  this.o = 0;
                  this.v = new Ua(5);
                  this.i = new B(function () {
                    qg(b);
                  });
                  this.g = new Nb();
                }
                z("shaka.dash.DashParser", pg);
                p = pg.prototype;
                p.configure = function (b) {
                  this.b = b;
                };
                p.start = function (b, c) {
                  var d = this;
                  return t(function f() {
                    var g;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (d.f = [b]), (d.a = c), u(f, rg(d), 2);
                        case 2:
                          g = f.s;
                          d.a && sg(d, g);
                          if (!d.a) throw new D(2, 7, 7001);
                          return f["return"](d.c);
                      }
                    });
                  });
                };
                p.stop = function () {
                  this.b = this.a = null;
                  this.f = [];
                  this.c = null;
                  this.j = [];
                  this.m = {};
                  null != this.i && (this.i.stop(), (this.i = null));
                  return this.g.destroy();
                };
                p.update = function () {
                  rg(this)["catch"](
                    function (b) {
                      if (this.a) this.a.onError(b);
                    }.bind(this)
                  );
                };
                p.onExpirationUpdated = function () {};
                function rg(b) {
                  var c = Date.now(),
                    d = b.a.networkingEngine.request(
                      0,
                      Sb(b.f, b.b.retryParameters)
                    );
                  Ob(b.g, d);
                  return d.promise
                    .then(function (c) {
                      if (b.a)
                        return (
                          c.uri && !b.f.includes(c.uri) && b.f.unshift(c.uri),
                          tg(b, c.data, c.uri)
                        );
                    })
                    .then(function () {
                      var d = (Date.now() - c) / 1e3;
                      Wa(b.v, 1, d);
                      return d;
                    });
                }
                function tg(b, c, d) {
                  c = P.Od(c, "MPD");
                  if (!c) throw new D(2, 4, 4001, d);
                  c = Hf(
                    c,
                    b.b.retryParameters,
                    b.b.dash.xlinkFailGracefully,
                    d,
                    b.a.networkingEngine
                  );
                  Ob(b.g, c);
                  return c.promise.then(function (c) {
                    return ug(b, c, d);
                  });
                }
                function ug(b, c, d) {
                  return t(function f() {
                    var g,
                      h,
                      k,
                      l,
                      m,
                      n,
                      q,
                      x,
                      w,
                      A,
                      C,
                      E,
                      F,
                      V,
                      Y,
                      wa,
                      Ba,
                      ba,
                      na,
                      xa,
                      ja,
                      Va,
                      Ca,
                      vb,
                      Ia,
                      eb;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          l = td;
                          m = P;
                          n = [d];
                          q = m.P(c, "Location").map(m.ac).filter(l.Da);
                          0 < q.length && ((x = ud(n, q)), (n = b.f = x));
                          w = m.P(c, "BaseURL").map(m.ac);
                          A = ud(n, w);
                          (C = b.b.dash.ignoreMinBufferTime) ||
                            (E = m.H(c, "minBufferTime", m.za));
                          b.o = m.H(c, "minimumUpdatePeriod", m.za, -1);
                          F = m.H(c, "availabilityStartTime", m.qf);
                          V = m.H(c, "timeShiftBufferDepth", m.za);
                          Y = m.H(c, "suggestedPresentationDelay", m.za);
                          wa = m.H(c, "maxSegmentDuration", m.za);
                          Ba = c.getAttribute("type") || "static";
                          b.c
                            ? (ba = b.c.presentationTimeline)
                            : ((na = Math.max(
                                b.b.dash.defaultPresentationDelay,
                                1.5 * E
                              )),
                              (xa = null != Y ? Y : na),
                              (ba = new W(F, xa, b.b.dash.autoCorrectDrift)));
                          ja = {
                            gb: "static" != Ba,
                            presentationTimeline: ba,
                            ga: null,
                            R: null,
                            ba: null,
                            B: null,
                            bandwidth: 0,
                            Cd: !1,
                          };
                          for (
                            var vc = ja,
                              wb = A,
                              Gb = P.H(c, "mediaPresentationDuration", P.za),
                              xb = [],
                              Ja = 0,
                              wc = P.P(c, "Period"),
                              gb = 0;
                            gb < wc.length;
                            gb++
                          ) {
                            var Ka = wc[gb];
                            Ja = P.H(Ka, "start", P.za, Ja);
                            var Ad = P.H(Ka, "duration", P.za),
                              yb = null;
                            if (gb != wc.length - 1) {
                              var fb = P.H(wc[gb + 1], "start", P.za);
                              null != fb && (yb = fb - Ja);
                            } else null != Gb && (yb = Gb - Ja);
                            null == yb && (yb = Ad);
                            Ka = vg(b, vc, wb, {
                              start: Ja,
                              duration: yb,
                              node: Ka,
                              Kc: null == yb || gb == wc.length - 1,
                            });
                            xb.push(Ka);
                            Ad = vc.ga.id;
                            b.j.includes(Ad) ||
                              (b.j.push(Ad),
                              b.c &&
                                (b.a.filterNewPeriod(Ka),
                                b.c.periods.push(Ka)));
                            if (null == yb) {
                              Ja = null;
                              break;
                            }
                            Ja += yb;
                          }
                          null == b.c && b.a.filterAllPeriods(xb);
                          null != Gb
                            ? ((g = xb), (h = Gb), (k = !1))
                            : ((g = xb), (h = Ja), (k = !0));
                          Va = h;
                          Ca = g;
                          ba.Ob("static" == Ba);
                          ("static" != Ba && k) || ba.ta(Va || Infinity);
                          (vb = ba.U()) &&
                            !isNaN(b.b.availabilityWindowOverride) &&
                            (V = b.b.availabilityWindowOverride);
                          null == V && (V = Infinity);
                          ba.fd(V);
                          ba.Qc(wa || 1);
                          if (b.c) {
                            f.A(0);
                            break;
                          }
                          b.c = {
                            presentationTimeline: ba,
                            periods: Ca,
                            offlineSessionIds: [],
                            minBufferTime: E || 0,
                          };
                          if (!ba.de()) {
                            f.A(0);
                            break;
                          }
                          Ia = m.P(c, "UTCTiming");
                          return u(f, wg(b, A, Ia), 4);
                        case 4:
                          eb = f.s;
                          if (!b.a) return f["return"]();
                          ba.Zd(eb);
                          v(f);
                      }
                    });
                  });
                }
                function vg(b, c, d, e) {
                  c.ga = xg(e.node, null, d);
                  c.R = e;
                  c.ga.id || (c.ga.id = "__shaka_period_" + e.start);
                  P.P(e.node, "EventStream").forEach(
                    b.rf.bind(b, e.start, e.duration)
                  );
                  d = P.P(e.node, "AdaptationSet")
                    .map(b.pf.bind(b, c))
                    .filter(td.Da);
                  if (c.gb) {
                    c = [];
                    for (var f = r(d), g = f.next(); !g.done; g = f.next()) {
                      g = r(g.value.Bf);
                      for (var h = g.next(); !h.done; h = g.next())
                        c.push(h.value);
                    }
                    if (c.length != new Set(c).size) throw new D(2, 4, 4018);
                  }
                  var k = d.filter(function (b) {
                    return !b.kd;
                  });
                  d.filter(function (b) {
                    return b.kd;
                  }).forEach(function (b) {
                    var c = b.streams[0],
                      d = b.kd;
                    k.forEach(function (b) {
                      b.id == d &&
                        b.streams.forEach(function (b) {
                          b.trickModeVideo = c;
                        });
                    });
                  });
                  c = yg(k, "video");
                  f = yg(k, "audio");
                  if (!c.length && !f.length) throw new D(2, 4, 4004);
                  f.length || (f = [null]);
                  c.length || (c = [null]);
                  d = [];
                  for (g = 0; g < f.length; g++)
                    for (h = 0; h < c.length; h++) zg(b, f[g], c[h], d);
                  b = yg(k, "text");
                  c = [];
                  for (f = 0; f < b.length; f++) c.push.apply(c, b[f].streams);
                  return { startTime: e.start, textStreams: c, variants: d };
                }
                function yg(b, c) {
                  return b.filter(function (b) {
                    return b.contentType == c;
                  });
                }
                function zg(b, c, d, e) {
                  if (c || d)
                    if (c && d) {
                      var f = c.drmInfos;
                      var g = d.drmInfos;
                      if (f.length && g.length ? 0 < ld(f, g).length : 1) {
                        g = ld(c.drmInfos, d.drmInfos);
                        for (var h = 0; h < c.streams.length; h++)
                          for (var k = 0; k < d.streams.length; k++)
                            (f =
                              (d.streams[k].bandwidth || 0) +
                              (c.streams[h].bandwidth || 0)),
                              (f = {
                                id: b.h++,
                                language: c.language,
                                primary: c.Mc || d.Mc,
                                audio: c.streams[h],
                                video: d.streams[k],
                                bandwidth: f,
                                drmInfos: g,
                                allowedByApplication: !0,
                                allowedByKeySystem: !0,
                              }),
                              e.push(f);
                      }
                    } else
                      for (g = c || d, h = 0; h < g.streams.length; h++)
                        (f = g.streams[h].bandwidth || 0),
                          (f = {
                            id: b.h++,
                            language: g.language || "und",
                            primary: g.Mc,
                            audio: c ? g.streams[h] : null,
                            video: d ? g.streams[h] : null,
                            bandwidth: f,
                            drmInfos: g.drmInfos,
                            allowedByApplication: !0,
                            allowedByKeySystem: !0,
                          }),
                          e.push(f);
                }
                p.pf = function (b, c) {
                  b.ba = xg(c, b.ga, null);
                  var d = !1,
                    e = P.P(c, "Role"),
                    f = e
                      .map(function (b) {
                        return b.getAttribute("value");
                      })
                      .filter(td.Da),
                    g = void 0,
                    h = "text" == b.ba.contentType;
                  h && (g = "subtitle");
                  for (var k = 0; k < e.length; k++) {
                    var l = e[k].getAttribute("schemeIdUri");
                    if (null == l || "urn:mpeg:dash:role:2011" == l)
                      switch (((l = e[k].getAttribute("value")), l)) {
                        case "main":
                          d = !0;
                          break;
                        case "caption":
                        case "subtitle":
                          g = l;
                      }
                  }
                  var m = null,
                    n = !1;
                  P.P(c, "EssentialProperty").forEach(function (b) {
                    "http://dashif.org/guidelines/trickmode" ==
                    b.getAttribute("schemeIdUri")
                      ? (m = b.getAttribute("value"))
                      : (n = !0);
                  });
                  k = P.P(c, "Accessibility");
                  var q = new Map();
                  e = {};
                  k = r(k);
                  for (l = k.next(); !l.done; e = { Ab: e.Ab }, l = k.next()) {
                    l = l.value;
                    var x = l.getAttribute("schemeIdUri");
                    if (
                      "urn:scte:dash:cc:cea-608:2015" == x ||
                      "urn:scte:dash:cc:cea-708:2015" == x
                    )
                      (e.Ab = 1),
                        (l = l.getAttribute("value")),
                        null != l
                          ? l.split(";").forEach(
                              (function (b) {
                                return function (c) {
                                  if (c.includes("=")) {
                                    c = c.split("=");
                                    var d = c[0].startsWith("CC")
                                      ? c[0]
                                      : "CC" + c[0];
                                    c = c[1].split(",")[0].split(":").pop();
                                  } else (d = "CC" + b.Ab), (b.Ab += 2);
                                  q.set(d, M(c));
                                };
                              })(e)
                            )
                          : q.set("CC1", "und");
                  }
                  if (n) return null;
                  e = P.P(c, "ContentProtection");
                  var w = uf(
                    e,
                    this.b.dash.customScheme,
                    this.b.dash.ignoreDrmInfo
                  );
                  e = M(c.getAttribute("lang") || "und");
                  l = c.getAttribute("label");
                  k = P.P(c, "Representation");
                  f = k
                    .map(this.sf.bind(this, b, w, g, e, l, d, f, q))
                    .filter(function (b) {
                      return !!b;
                    });
                  if (0 == f.length) {
                    if (h) return null;
                    throw new D(2, 4, 4003);
                  }
                  (b.ba.contentType && "application" != b.ba.contentType) ||
                    ((b.ba.contentType = Ag(f[0].mimeType, f[0].codecs)),
                    f.forEach(function (c) {
                      c.type = b.ba.contentType;
                    }));
                  f.forEach(function (b) {
                    w.drmInfos.forEach(function (c) {
                      b.keyId && c.keyIds.push(b.keyId);
                    });
                  });
                  h = k
                    .map(function (b) {
                      return b.getAttribute("id");
                    })
                    .filter(td.Da);
                  return {
                    id: b.ba.id || "__fake__" + this.h++,
                    contentType: b.ba.contentType,
                    language: e,
                    Mc: d,
                    streams: f,
                    drmInfos: w.drmInfos,
                    kd: m,
                    Bf: h,
                  };
                };
                p.sf = function (b, c, d, e, f, g, h, k, l) {
                  b.B = xg(l, b.ba, null);
                  if (!Bg(b.B)) return null;
                  b.bandwidth = P.H(l, "bandwidth", P.jc) || 0;
                  var m = b.B.contentType;
                  m = "text" == m || "application" == m;
                  try {
                    var n = this.Cf.bind(this);
                    if (b.B.Lb) var q = cg(b, n);
                    else if (b.B.Ga) q = fg(b, this.m);
                    else if (b.B.Nb) q = jg(b, n, this.m, !!this.c);
                    else {
                      var x = b.B.la,
                        w = b.R.duration || 0;
                      q = {
                        createSegmentIndex: Promise.resolve.bind(Promise),
                        findSegmentPosition: function (b) {
                          return 0 <= b && b < w ? 1 : null;
                        },
                        getSegmentReference: function (b) {
                          return 1 != b
                            ? null
                            : new Q(
                                1,
                                0,
                                w,
                                function () {
                                  return x;
                                },
                                0,
                                null
                              );
                        },
                        initSegmentReference: null,
                        ia: 0,
                      };
                    }
                  } catch (A) {
                    if (m && 4002 == A.code) return null;
                    throw A;
                  }
                  l = P.P(l, "ContentProtection");
                  l = xf(
                    l,
                    this.b.dash.customScheme,
                    c,
                    this.b.dash.ignoreDrmInfo
                  );
                  return {
                    id: this.h++,
                    originalId: b.B.id,
                    createSegmentIndex: q.createSegmentIndex,
                    findSegmentPosition: q.findSegmentPosition,
                    getSegmentReference: q.getSegmentReference,
                    initSegmentReference: q.initSegmentReference,
                    presentationTimeOffset: q.ia,
                    mimeType: b.B.mimeType,
                    codecs: b.B.codecs,
                    frameRate: b.B.frameRate,
                    bandwidth: b.bandwidth,
                    width: b.B.width,
                    height: b.B.height,
                    kind: d,
                    encrypted: 0 < c.drmInfos.length,
                    keyId: l,
                    language: e,
                    label: f,
                    type: b.ba.contentType,
                    primary: g,
                    trickModeVideo: null,
                    emsgSchemeIdUris: b.B.emsgSchemeIdUris,
                    roles: h,
                    channelsCount: b.B.Sc,
                    closedCaptions: k,
                  };
                };
                function qg(b) {
                  t(function d() {
                    var e, f;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (e = 0), ya(d, 2), u(d, rg(b), 4);
                        case 4:
                          e = d.s;
                          Aa(d, 3);
                          break;
                        case 2:
                          (f = Da(d)),
                            b.a && ((f.severity = 1), b.a.onError(f));
                        case 3:
                          if (!b.a) return d["return"]();
                          sg(b, e);
                          v(d);
                      }
                    });
                  });
                }
                function sg(b, c) {
                  0 > b.o || b.i.O(Math.max(3, b.o - c, Xa(b.v)));
                }
                function xg(b, c, d) {
                  c = c || {
                    contentType: "",
                    mimeType: "",
                    codecs: "",
                    emsgSchemeIdUris: [],
                    frameRate: void 0,
                    Sc: null,
                  };
                  d = d || c.la;
                  var e = P.rb,
                    f = P.ve,
                    g = P.P(b, "BaseURL").map(P.ac),
                    h = b.getAttribute("contentType") || c.contentType,
                    k = b.getAttribute("mimeType") || c.mimeType,
                    l = b.getAttribute("codecs") || c.codecs;
                  f = P.H(b, "frameRate", f) || c.frameRate;
                  var m = P.P(b, "InbandEventStream"),
                    n = c.emsgSchemeIdUris.slice();
                  m = r(m);
                  for (var q = m.next(); !q.done; q = m.next())
                    (q = q.value.getAttribute("schemeIdUri")),
                      n.includes(q) || n.push(q);
                  m = P.P(b, "AudioChannelConfiguration");
                  m = Cg(m) || c.Sc;
                  h || (h = Ag(k, l));
                  return {
                    la: ud(d, g),
                    Lb: P.Yb(b, "SegmentBase") || c.Lb,
                    Ga: P.Yb(b, "SegmentList") || c.Ga,
                    Nb: P.Yb(b, "SegmentTemplate") || c.Nb,
                    width: P.H(b, "width", e) || c.width,
                    height: P.H(b, "height", e) || c.height,
                    contentType: h,
                    mimeType: k,
                    codecs: l,
                    frameRate: f,
                    emsgSchemeIdUris: n,
                    id: b.getAttribute("id"),
                    Sc: m,
                  };
                }
                function Cg(b) {
                  for (var c = 0; c < b.length; ++c) {
                    var d = b[c],
                      e = d.getAttribute("schemeIdUri");
                    if (e && (d = d.getAttribute("value")))
                      switch (e) {
                        case "urn:mpeg:dash:outputChannelPositionList:2012":
                          return d.trim().split(/ +/).length;
                        case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
                        case "urn:dts:dash:audio_channel_configuration:2012":
                          e = parseInt(d, 10);
                          if (!e) continue;
                          return e;
                        case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
                        case "urn:dolby:dash:audio_channel_configuration:2011":
                          if ((e = parseInt(d, 16))) {
                            for (b = 0; e; ) e & 1 && ++b, (e >>= 1);
                            return b;
                          }
                      }
                  }
                  return null;
                }
                function Bg(b) {
                  var c = b.Lb ? 1 : 0;
                  c += b.Ga ? 1 : 0;
                  c += b.Nb ? 1 : 0;
                  if (0 == c)
                    return "text" == b.contentType ||
                      "application" == b.contentType
                      ? !0
                      : !1;
                  1 != c && (b.Lb && (b.Ga = null), (b.Nb = null));
                  return !0;
                }
                function Dg(b, c, d, e) {
                  c = ud(c, [d]);
                  c = Sb(c, b.b.retryParameters);
                  c.method = e;
                  c = b.a.networkingEngine.request(4, c);
                  Ob(b.g, c);
                  return c.promise.then(function (b) {
                    if ("HEAD" == e) {
                      if (!b.headers || !b.headers.date) return 0;
                      b = b.headers.date;
                    } else b = sc(b.data);
                    b = Date.parse(b);
                    return isNaN(b) ? 0 : b - Date.now();
                  });
                }
                function wg(b, c, d) {
                  d = d.map(function (b) {
                    return {
                      scheme: b.getAttribute("schemeIdUri"),
                      value: b.getAttribute("value"),
                    };
                  });
                  var e = b.b.dash.clockSyncUri;
                  !d.length &&
                    e &&
                    d.push({
                      scheme: "urn:mpeg:dash:utc:http-head:2014",
                      value: e,
                    });
                  return td
                    .te(
                      d,
                      function (b) {
                        var d = b.scheme;
                        b = b.value;
                        switch (d) {
                          case "urn:mpeg:dash:utc:http-head:2014":
                          case "urn:mpeg:dash:utc:http-head:2012":
                            return Dg(this, c, b, "HEAD");
                          case "urn:mpeg:dash:utc:http-xsdate:2014":
                          case "urn:mpeg:dash:utc:http-iso:2014":
                          case "urn:mpeg:dash:utc:http-xsdate:2012":
                          case "urn:mpeg:dash:utc:http-iso:2012":
                            return Dg(this, c, b, "GET");
                          case "urn:mpeg:dash:utc:direct:2014":
                          case "urn:mpeg:dash:utc:direct:2012":
                            return (
                              (d = Date.parse(b)), isNaN(d) ? 0 : d - Date.now()
                            );
                          case "urn:mpeg:dash:utc:http-ntp:2014":
                          case "urn:mpeg:dash:utc:ntp:2014":
                          case "urn:mpeg:dash:utc:sntp:2014":
                            return (
                              $a("NTP UTCTiming scheme is not supported"),
                              Promise.reject()
                            );
                          default:
                            return (
                              $a("Unrecognized scheme in UTCTiming element", d),
                              Promise.reject()
                            );
                        }
                      }.bind(b)
                    )
                    ["catch"](function () {
                      $a(
                        "A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"
                      );
                      return 0;
                    });
                }
                p.rf = function (b, c, d) {
                  var e = P.rb,
                    f = d.getAttribute("schemeIdUri") || "",
                    g = d.getAttribute("value") || "",
                    h = P.H(d, "timescale", e) || 1;
                  P.P(d, "Event").forEach(
                    function (d) {
                      var k = P.H(d, "presentationTime", e) || 0,
                        m = P.H(d, "duration", e) || 0;
                      k = k / h + b;
                      m = k + m / h;
                      null != c &&
                        ((k = Math.min(k, b + c)), (m = Math.min(m, b + c)));
                      d = {
                        schemeIdUri: f,
                        value: g,
                        startTime: k,
                        endTime: m,
                        id: d.getAttribute("id") || "",
                        eventElement: d,
                      };
                      this.a.onTimelineRegionAdded(d);
                    }.bind(this)
                  );
                };
                p.Cf = function (b, c, d) {
                  b = og(b, c, d, this.b.retryParameters);
                  b = this.a.networkingEngine.request(1, b);
                  Ob(this.g, b);
                  return b.promise.then(function (b) {
                    return b.data;
                  });
                };
                function Ag(b, c) {
                  return Wd(ic(b, c)) ? "text" : b.split("/")[0];
                }
                U.Zc("mpd", pg);
                U.Kb("application/dash+xml", pg);
                function Eg(b, c, d, e) {
                  this.b = b;
                  this.type = c;
                  this.a = d;
                  this.segments = e || null;
                }
                function Fg(b, c, d, e) {
                  this.id = b;
                  this.name = c;
                  this.a = d;
                  this.value = void 0 === e ? null : e;
                }
                Fg.prototype.toString = function () {
                  function b(b) {
                    return (
                      b.name +
                      "=" +
                      (isNaN(Number(b.value)) ? '"' + b.value + '"' : b.value)
                    );
                  }
                  var c = "#" + this.name,
                    d = this.a ? this.a.map(b) : [];
                  this.value && d.unshift(this.value);
                  0 < d.length && (c += ":" + d.join(","));
                  return c;
                };
                function Gg(b, c) {
                  this.name = b;
                  this.value = c;
                }
                Fg.prototype.getAttribute = function (b) {
                  var c = this.a.filter(function (c) {
                    return c.name == b;
                  });
                  return c.length ? c[0] : null;
                };
                function Hg(b, c, d) {
                  return (b = b.getAttribute(c)) ? b.value : d || null;
                }
                function Ig(b, c) {
                  this.b = c;
                  this.a = b;
                }
                var Jg = {
                  hb: function (b, c) {
                    return b.filter(function (b) {
                      return b.name == c;
                    });
                  },
                  Pa: function (b, c) {
                    var d = Jg.hb(b, c);
                    return d.length ? d[0] : null;
                  },
                  Cc: function (b, c, d) {
                    return b.filter(function (b) {
                      var e = b.getAttribute("TYPE");
                      b = b.getAttribute("GROUP-ID");
                      return e.value == c && b.value == d;
                    });
                  },
                  vc: function (b, c) {
                    return ud([b], [c])[0];
                  },
                  Jc: function (b) {
                    return /^#(?!EXT)/m.test(b);
                  },
                };
                function Kg(b) {
                  this.b = b;
                  this.a = 0;
                }
                function Lg(b) {
                  Mg(b, /[ \t]+/gm);
                }
                function Mg(b, c) {
                  c.lastIndex = b.a;
                  var d = c.exec(b.b);
                  d =
                    null == d
                      ? null
                      : { position: d.index, length: d[0].length, Ef: d };
                  if (b.a == b.b.length || null == d || d.position != b.a)
                    return null;
                  b.a += d.length;
                  return d.Ef;
                }
                function Ng(b) {
                  return b.a == b.b.length
                    ? null
                    : (b = Mg(b, /[^ \t\n]*/gm))
                    ? b[0]
                    : null;
                }
                function Og() {
                  this.a = 0;
                }
                function Pg(b, c, d) {
                  c = sc(c);
                  c = c.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim();
                  var e = c.split(/\n+/m);
                  if (!/^#EXTM3U($|[ \t\n])/m.test(e[0]))
                    throw new D(2, 4, 4015);
                  c = 0;
                  for (var f = 1; f < e.length; f++)
                    if (!Jg.Jc(e[f])) {
                      var g = Qg(b, e[f]);
                      --b.a;
                      if (Rg.includes(g.name)) {
                        c = 1;
                        break;
                      } else "EXT-X-STREAM-INF" == g.name && (f += 1);
                    }
                  f = [];
                  for (g = 1; g < e.length; )
                    if (Jg.Jc(e[g])) g += 1;
                    else {
                      var h = Qg(b, e[g]);
                      if (Sg.includes(h.name)) {
                        if (1 != c) throw new D(2, 4, 4017);
                        e = e.splice(g, e.length - g);
                        b = Tg(b, d, e, f);
                        return new Eg(d, c, f, b);
                      }
                      f.push(h);
                      g += 1;
                      "EXT-X-STREAM-INF" == h.name &&
                        (h.a.push(new Gg("URI", e[g])), (g += 1));
                    }
                  return new Eg(d, c, f);
                }
                function Tg(b, c, d, e) {
                  var f = [],
                    g = [];
                  d.forEach(function (d) {
                    if (/^(#EXT)/.test(d))
                      (d = Qg(b, d)),
                        Rg.includes(d.name) ? e.push(d) : g.push(d);
                    else {
                      if (Jg.Jc(d)) return [];
                      d = Jg.vc(c, d.trim());
                      f.push(new Ig(d, g));
                      g = [];
                    }
                  });
                  return f;
                }
                function Qg(b, c) {
                  var d = b.a++,
                    e = c.match(/^#(EXT[^:]*)(?::(.*))?$/);
                  if (!e) throw new D(2, 4, 4016, c);
                  var f = e[1],
                    g = e[2];
                  e = [];
                  var h;
                  if (g) {
                    g = new Kg(g);
                    var k;
                    (k = Mg(g, /^([^,=]+)(?:,|$)/g)) && (h = k[1]);
                    for (
                      var l = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;
                      (k = Mg(g, l));

                    )
                      e.push(new Gg(k[1], k[2] || k[3]));
                  }
                  return new Fg(d, f, e, h);
                }
                var Rg =
                    "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(
                      " "
                    ),
                  Sg =
                    "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(
                      " "
                    );
                function Ug(b) {
                  try {
                    var c = Ug.parse(b);
                    return Cb({
                      uri: b,
                      data: c.data,
                      headers: { "content-type": c.contentType },
                    });
                  } catch (d) {
                    return Ab(d);
                  }
                }
                z("shaka.net.DataUriPlugin", Ug);
                Ug.parse = function (b) {
                  var c = b.split(":");
                  if (2 > c.length || "data" != c[0])
                    throw new D(2, 1, 1004, b);
                  c = c.slice(1).join(":").split(",");
                  if (2 > c.length) throw new D(2, 1, 1004, b);
                  var d = c[0];
                  c = window.decodeURIComponent(c.slice(1).join(","));
                  d = d.split(";");
                  var e = null;
                  1 < d.length && (e = d[1]);
                  if ("base64" == e) b = Bc(c).buffer;
                  else {
                    if (e) throw new D(2, 1, 1005, b);
                    b = yc(c);
                  }
                  return { data: b, contentType: d[0] };
                };
                Rb("data", Ug);
                function Vg() {
                  var b = this;
                  this.c = this.g = null;
                  this.W = 1;
                  this.C = new Map();
                  this.S = new Set();
                  this.a = new Map();
                  this.b = null;
                  this.v = "";
                  this.o = new Og();
                  this.N = 0;
                  this.h = new B(function () {
                    Wg(b);
                  });
                  this.f = Xg;
                  this.m = null;
                  this.w = 0;
                  this.F = Infinity;
                  this.i = new Nb();
                  this.K = [];
                  this.j = new Map();
                  this.V = !1;
                }
                z("shaka.hls.HlsParser", Vg);
                p = Vg.prototype;
                p.configure = function (b) {
                  this.c = b;
                };
                p.start = function (b, c) {
                  var d = this;
                  return t(function f() {
                    var g, h;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (d.g = c), u(f, Yg(d, b), 2);
                        case 2:
                          return (
                            (g = f.s), (d.v = g.uri), u(f, Zg(d, g.data), 3)
                          );
                        case 3:
                          return (h = d.N), 0 < h && d.h.O(h), f["return"](d.m);
                      }
                    });
                  });
                };
                p.stop = function () {
                  this.h && (this.h.stop(), (this.h = null));
                  var b = [];
                  this.i && (b.push(this.i.destroy()), (this.i = null));
                  this.c = this.g = null;
                  this.C.clear();
                  this.S.clear();
                  this.a.clear();
                  this.m = null;
                  return Promise.all(b);
                };
                p.update = function () {
                  if (this.f != $g.Ma) {
                    for (
                      var b = [], c = r(this.a.values()), d = c.next();
                      !d.done;
                      d = c.next()
                    )
                      b.push(ah(this, d.value));
                    return Promise.all(b);
                  }
                };
                function ah(b, c) {
                  return t(function e() {
                    var f, g, h, k, l, m, n, q, x, w, A;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return (
                            (f = Jg), (g = $g), (h = c.le), u(e, Yg(b, h), 2)
                          );
                        case 2:
                          k = e.s;
                          l = Pg(b.o, k.data, k.uri);
                          if (1 != l.type) throw new D(2, 4, 4017);
                          n = (m = f.Pa(l.a, "EXT-X-MEDIA-SEQUENCE"))
                            ? Number(m.value)
                            : 0;
                          q = c.stream;
                          return u(
                            e,
                            bh(b, c.pc, l, n, q.mimeType, q.codecs),
                            3
                          );
                        case 3:
                          x = e.s;
                          c.Mb.a = x;
                          w = x[x.length - 1];
                          if ((A = f.Pa(l.a, "EXT-X-ENDLIST")))
                            ch(b, g.Ma), b.b.ta(w.endTime);
                          v(e);
                      }
                    });
                  });
                }
                p.onExpirationUpdated = function () {};
                function Zg(b, c) {
                  return t(function e() {
                    var f, g, h, k, l, m, n, q, x, w, A;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          f = Pg(b.o, c, b.v);
                          if (0 != f.type) throw new D(2, 4, 4022);
                          return u(e, dh(b, f), 2);
                        case 2:
                          g = e.s;
                          if (!b.g) throw new D(2, 7, 7001);
                          if (b.V && 0 == g.variants.length)
                            throw new D(2, 4, 4034);
                          b.g.filterAllPeriods([g]);
                          h = Infinity;
                          k = 0;
                          l = Infinity;
                          for (
                            var E = r(b.a.values()), F = E.next();
                            !F.done;
                            F = E.next()
                          )
                            (m = F.value),
                              (h = Math.min(h, m.Pc)),
                              (k = Math.max(k, m.Pc)),
                              "text" != m.stream.type &&
                                (l = Math.min(l, m.duration));
                          b.f != $g.Ma
                            ? ((b.b = new W(0, 3 * b.w)), b.b.Ob(!1))
                            : ((b.b = new W(null, 0)), b.b.Ob(!0));
                          eh(b);
                          if (b.f != $g.Ma) {
                            b.N = b.F;
                            n = $g;
                            b.f == n.nd &&
                              ((q = b.b.lc),
                              isNaN(b.c.availabilityWindowOverride) ||
                                (q = b.c.availabilityWindowOverride),
                              b.b.fd(q));
                            for (x = 0; 95443.7176888889 <= k; )
                              (x += 95443.7176888889), (k -= 95443.7176888889);
                            if (x)
                              for (
                                E = r(b.a.values()), F = E.next();
                                !F.done;
                                F = E.next()
                              )
                                (w = F.value),
                                  95443.7176888889 > w.Pc &&
                                    ((w.stream.presentationTimeOffset = -x),
                                    w.Mb.offset(x));
                          } else for (b.b.ta(l), b.b.offset(-h), E = r(b.a.values()), F = E.next(); !F.done; F = E.next()) (A = F.value), (A.stream.presentationTimeOffset = h), A.Mb.offset(-h), Sf(A.Mb, l);
                          b.m = {
                            presentationTimeline: b.b,
                            periods: [g],
                            offlineSessionIds: [],
                            minBufferTime: 0,
                          };
                          v(e);
                      }
                    });
                  });
                }
                function dh(b, c) {
                  return t(function e() {
                    var f, g, h, k, l, m, n, q, x, w, A, C;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return (
                            (f = Jg),
                            (g = td),
                            (h = c.a),
                            (k = f.hb(c.a, "EXT-X-MEDIA")),
                            (l = k.filter(
                              function (b) {
                                return "SUBTITLES" == fh(b, "TYPE");
                              }.bind(b)
                            )),
                            (m = l.map(
                              function (b) {
                                return gh(this, b);
                              }.bind(b)
                            )),
                            (n = k.filter(function (b) {
                              return "CLOSED-CAPTIONS" == fh(b, "TYPE");
                            })),
                            hh(b, n),
                            u(e, Promise.all(m), 2)
                          );
                        case 2:
                          return (
                            (q = e.s),
                            (x = f.hb(h, "EXT-X-STREAM-INF")),
                            (w = x.map(
                              function (b) {
                                return ih(this, b, c);
                              }.bind(b)
                            )),
                            u(e, Promise.all(w), 3)
                          );
                        case 3:
                          return (
                            (A = e.s),
                            (C = A.reduce(g.uc, [])),
                            (C = C.filter(function (b) {
                              return null != b;
                            })),
                            e["return"]({
                              startTime: 0,
                              variants: C,
                              textStreams: q,
                            })
                          );
                      }
                    });
                  });
                }
                function ih(b, c, d) {
                  return t(function f() {
                    var g,
                      h,
                      k,
                      l,
                      m,
                      n,
                      q,
                      x,
                      w,
                      A,
                      C,
                      E,
                      F,
                      V,
                      Y,
                      wa,
                      Ba,
                      ba,
                      na,
                      xa,
                      ja,
                      Va,
                      Ca,
                      vb,
                      Ia,
                      eb,
                      fb;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          g = wd;
                          h = Jg;
                          k = Hg(c, "CODECS", "avc1.42E01E,mp4a.40.2");
                          l = jh(k.split(/\s*,\s*/));
                          m = c.getAttribute("RESOLUTION");
                          q = n = null;
                          x = Hg(c, "FRAME-RATE");
                          w = Number(fh(c, "BANDWIDTH"));
                          m &&
                            ((A = m.value.split("x")), (n = A[0]), (q = A[1]));
                          C = h.hb(d.a, "EXT-X-MEDIA");
                          C = C.filter(function (b) {
                            return "CLOSED-CAPTIONS" != fh(b, "TYPE");
                          });
                          C = C.filter(function (b) {
                            var c = Hg(b, "URI") || "";
                            return (
                              "SUBTITLES" == (Hg(b, "TYPE") || "") || "" != c
                            );
                          });
                          E = Hg(c, "AUDIO");
                          F = Hg(c, "VIDEO");
                          E
                            ? (C = h.Cc(C, "AUDIO", E))
                            : F && (C = h.Cc(C, "VIDEO", F));
                          if ((V = kh(g.na, l))) {
                            if ((Y = Hg(c, "SUBTITLES")))
                              (wa = h.Cc(C, "SUBTITLES", Y)),
                                wa.length &&
                                  ((Ba = b.C.get(wa[0].id)),
                                  (Ba.stream.codecs = V));
                            Kb(l, V);
                          }
                          ba = C.map(
                            function (b) {
                              return lh(this, b, l);
                            }.bind(b)
                          );
                          na = [];
                          xa = [];
                          return u(f, Promise.all(ba), 2);
                        case 2:
                          Va = f.s;
                          Va = Va.filter(function (b) {
                            return null != b;
                          });
                          E ? (na = Va) : F && (xa = Va);
                          vb = !1;
                          na.length || xa.length
                            ? na.length
                              ? ((eb = fh(c, "URI")),
                                (fb = na[0].pc),
                                eb == fb
                                  ? ((Ca = g.wb), (vb = !0))
                                  : (Ca = g.La))
                              : (Ca = g.wb)
                            : 1 == l.length
                            ? ((Ia = kh(g.La, l)),
                              (Ca = m || x || Ia ? g.La : g.wb))
                            : ((Ca = g.La), (l = [l.join(",")]));
                          if (vb) {
                            f.A(3);
                            break;
                          }
                          return u(f, mh(b, c, l, Ca), 4);
                        case 4:
                          ja = f.s;
                        case 3:
                          if (ja)
                            ja.stream.type == g.wb ? (na = [ja]) : (xa = [ja]);
                          else if (null === ja) return f["return"]([]);
                          xa && nh(xa);
                          na && nh(na);
                          return f["return"](oh(b, na, xa, w, n, q, x));
                      }
                    });
                  });
                }
                function nh(b) {
                  b.forEach(function (b) {
                    var c = b.stream.codecs.split(",");
                    c = c.filter(function (b) {
                      return "mp4a.40.34" != b;
                    });
                    b.stream.codecs = c.join(",");
                  });
                }
                function oh(b, c, d, e, f, g, h) {
                  d.forEach(
                    function (b) {
                      if ((b = b.stream))
                        (b.width = Number(f) || void 0),
                          (b.height = Number(g) || void 0),
                          (b.frameRate = Number(h) || void 0);
                    }.bind(b)
                  );
                  c.length || (c = [null]);
                  d.length || (d = [null]);
                  var k = [];
                  c = r(c);
                  for (var l = c.next(); !l.done; l = c.next()) {
                    l = l.value;
                    for (var m = r(d), n = m.next(); !n.done; n = m.next()) {
                      var q = n.value;
                      n = l ? l.stream : null;
                      var x = q ? q.stream : null,
                        w = l ? l.drmInfos : null,
                        A = q ? q.drmInfos : null;
                      q = (q ? q.pc : "") + " - " + (l ? l.pc : "");
                      var C = void 0;
                      if (n && x)
                        if (w.length && A.length ? 0 < ld(w, A).length : 1)
                          C = ld(w, A);
                        else continue;
                      else n ? (C = w) : x && (C = A);
                      b.S.has(q) ||
                        ((n = ph(b, n, x, e, C)), k.push(n), b.S.add(q));
                    }
                  }
                  return k;
                }
                function ph(b, c, d, e, f) {
                  return {
                    id: b.W++,
                    language: c ? c.language : "und",
                    primary: (!!c && c.primary) || (!!d && d.primary),
                    audio: c,
                    video: d,
                    bandwidth: e,
                    drmInfos: f,
                    allowedByApplication: !0,
                    allowedByKeySystem: !0,
                  };
                }
                function gh(b, c) {
                  return t(function e() {
                    var f;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return fh(c, "TYPE"), u(e, lh(b, c, []), 2);
                        case 2:
                          return (f = e.s), e["return"](f.stream);
                      }
                    });
                  });
                }
                function hh(b, c) {
                  for (var d = r(c), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    fh(e, "TYPE");
                    var f = Hg(e, "LANGUAGE") || "und";
                    f = M(f);
                    var g = fh(e, "GROUP-ID");
                    e = fh(e, "INSTREAM-ID");
                    b.j.get(g) || b.j.set(g, new Map());
                    b.j.get(g).set(e, f);
                  }
                }
                function lh(b, c, d) {
                  return t(function f() {
                    var g, h, k, l, m, n, q, x, w, A, C;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          g = fh(c, "URI");
                          if (b.a.has(g)) return f["return"](b.a.get(g));
                          h = fh(c, "TYPE").toLowerCase();
                          k = wd;
                          "subtitles" == h && (h = k.na);
                          l = M(Hg(c, "LANGUAGE", "und"));
                          m = Hg(c, "NAME");
                          n = c.getAttribute("DEFAULT");
                          q = c.getAttribute("AUTOSELECT");
                          x = Hg(c, "CHANNELS");
                          if ("audio" == h)
                            if (x) {
                              var E = x.split("/")[0];
                              E = parseInt(E, 10);
                            } else E = null;
                          else E = null;
                          w = E;
                          A = !!n || !!q;
                          return u(f, qh(b, g, d, h, l, A, m, w, null), 2);
                        case 2:
                          C = f.s;
                          if (null == C) return f["return"](null);
                          if (b.a.has(g)) return f["return"](b.a.get(g));
                          b.C.set(c.id, C);
                          b.a.set(g, C);
                          return f["return"](C);
                      }
                    });
                  });
                }
                function mh(b, c, d, e) {
                  return t(function g() {
                    var h, k, l, m, n;
                    return y(g, function (g) {
                      switch (g.l) {
                        case 1:
                          h = wd;
                          k = fh(c, "URI");
                          if (b.a.has(k)) return g["return"](b.a.get(k));
                          l = Hg(c, "CLOSED-CAPTIONS");
                          m = null;
                          e == h.La && l && "NONE" != l && (m = b.j.get(l));
                          return u(
                            g,
                            qh(b, k, d, e, "und", !1, null, null, m),
                            2
                          );
                        case 2:
                          n = g.s;
                          if (null == n) return g["return"](null);
                          if (b.a.has(k)) return g["return"](b.a.get(k));
                          b.a.set(k, n);
                          return g["return"](n);
                      }
                    });
                  });
                }
                function qh(b, c, d, e, f, g, h, k, l) {
                  return t(function n() {
                    var q,
                      x,
                      w,
                      A,
                      C,
                      E,
                      F,
                      V,
                      Y,
                      wa,
                      Ba,
                      ba,
                      na,
                      xa,
                      ja,
                      Va,
                      Ca,
                      vb,
                      Ia,
                      eb,
                      fb,
                      vc,
                      wb,
                      Gb,
                      xb,
                      Ja;
                    return y(n, function (n) {
                      switch (n.l) {
                        case 1:
                          return (
                            (q = Jg),
                            (x = q.vc(b.v, c)),
                            (A = ""),
                            u(n, Yg(b, x), 2)
                          );
                        case 2:
                          E = n.s;
                          x = E.uri;
                          w = Pg(b.o, E.data, x);
                          if (1 != w.type) throw new D(2, 4, 4017);
                          F = [];
                          w.segments.forEach(function (b) {
                            b = q.hb(b.b, "EXT-X-KEY");
                            F.push.apply(F, b);
                          });
                          V = !1;
                          Y = [];
                          wa = null;
                          for (
                            var gb = r(F), Ka = gb.next();
                            !Ka.done;
                            Ka = gb.next()
                          )
                            if (
                              ((Ba = Ka.value),
                              (ba = fh(Ba, "METHOD")),
                              "NONE" != ba)
                            ) {
                              V = !0;
                              if ("AES-128" == ba)
                                return (b.V = !0), n["return"](null);
                              na = fh(Ba, "KEYFORMAT");
                              if ((ja = (xa = rh[na]) ? xa(Ba) : null))
                                ja.keyIds.length && (wa = ja.keyIds[0]),
                                  Y.push(ja);
                            }
                          if (V && !Y.length) throw new D(2, 4, 4026);
                          sh(b, w);
                          A = th(e, d);
                          return u(n, uh(b, e, A, w), 3);
                        case 3:
                          return (
                            (C = Va = n.s),
                            (vb = (Ca = q.Pa(w.a, "EXT-X-MEDIA-SEQUENCE"))
                              ? Number(Ca.value)
                              : 0),
                            u(n, bh(b, c, w, vb, C, A), 4)
                          );
                        case 4:
                          return (
                            (Ia = n.s),
                            (eb = Ia[0].startTime),
                            (fb = Ia[Ia.length - 1].endTime),
                            (vc = fb - eb),
                            (wb = new T(Ia)),
                            (Gb = vh(w)),
                            (xb = void 0),
                            "text" == e && (xb = "subtitle"),
                            (Ja = {
                              id: b.W++,
                              originalId: h,
                              createSegmentIndex: Promise.resolve.bind(Promise),
                              findSegmentPosition: wb.find.bind(wb),
                              getSegmentReference: wb.get.bind(wb),
                              initSegmentReference: Gb,
                              presentationTimeOffset: 0,
                              mimeType: C,
                              codecs: A,
                              kind: xb,
                              encrypted: V,
                              keyId: wa,
                              language: f,
                              label: h,
                              type: e,
                              primary: g,
                              trickModeVideo: null,
                              emsgSchemeIdUris: null,
                              frameRate: void 0,
                              width: void 0,
                              height: void 0,
                              bandwidth: void 0,
                              roles: [],
                              channelsCount: k,
                              closedCaptions: l,
                            }),
                            n["return"]({
                              stream: Ja,
                              Mb: wb,
                              drmInfos: Y,
                              pc: c,
                              le: x,
                              Pc: eb,
                              pg: fb,
                              duration: vc,
                            })
                          );
                      }
                    });
                  });
                }
                function sh(b, c) {
                  var d = $g,
                    e = Jg.Pa(c.a, "EXT-X-PLAYLIST-TYPE"),
                    f = Jg.Pa(c.a, "EXT-X-ENDLIST");
                  f = (e && "VOD" == e.value) || f;
                  e = e && "EVENT" == e.value && !f;
                  e = !f && !e;
                  f
                    ? ch(b, d.Ma)
                    : (e ? ch(b, d.nd) : ch(b, d.ge),
                      (d = wh(c.a, "EXT-X-TARGETDURATION")),
                      (d = Number(d.value)),
                      (b.w = Math.max(d, b.w)),
                      (b.F = Math.min(d, b.F)));
                }
                function vh(b) {
                  var c = Jg.hb(b.a, "EXT-X-MAP");
                  if (!c.length) return null;
                  if (1 < c.length) throw new D(2, 4, 4020);
                  c = c[0];
                  var d = fh(c, "URI"),
                    e = Jg.vc(b.b, d);
                  b = 0;
                  d = null;
                  if ((c = Hg(c, "BYTERANGE")))
                    (b = c.split("@")),
                      (c = Number(b[0])),
                      (b = Number(b[1])),
                      (d = b + c - 1);
                  return new If(
                    function () {
                      return [e];
                    },
                    b,
                    d
                  );
                }
                function xh(b, c, d, e) {
                  var f = c.b,
                    g = c.a;
                  c = wh(f, "EXTINF").value.split(",");
                  c = e + Number(c[0]);
                  var h = 0,
                    k = null;
                  if ((f = Jg.Pa(f, "EXT-X-BYTERANGE")))
                    (h = f.value.split("@")),
                      (f = Number(h[0])),
                      (h = h[1] ? Number(h[1]) : b.a + 1),
                      (k = h + f - 1);
                  return new Q(
                    d,
                    e,
                    c,
                    function () {
                      return [g];
                    },
                    h,
                    k
                  );
                }
                function eh(b) {
                  b.b &&
                    (b.K.forEach(function (c) {
                      b.b.ob(c, 0);
                    }),
                    (b.K = []));
                }
                function bh(b, c, d, e, f, g) {
                  return t(function k() {
                    var l, m, n, q, x, w, A, C, E, F, V;
                    return y(k, function (k) {
                      switch (k.l) {
                        case 1:
                          return (
                            (l = d.segments),
                            (m = []),
                            (n = l[0].a),
                            (q = xh(null, l[0], e, 0)),
                            (x = vh(d)),
                            u(k, yh(b, c, x, q, f, g), 2)
                          );
                        case 2:
                          w = k.s;
                          n.split("/").pop();
                          for (var Y = 0; Y < l.length; ++Y)
                            (A = l[Y]),
                              (C = m[m.length - 1]),
                              (E = 0 == Y ? w : C.endTime),
                              (F = e + Y),
                              (V = xh(C, A, F, E)),
                              m.push(V);
                          b.K.push(m);
                          eh(b);
                          return k["return"](m);
                      }
                    });
                  });
                }
                function zh(b, c) {
                  return t(function e() {
                    var f, g, h, k, l, m;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return (
                            (f = Pb),
                            (g = og(
                              c.c(),
                              c.b,
                              c.b + 2048 - 1,
                              b.c.retryParameters
                            )),
                            (h = og(c.c(), c.b, c.a, b.c.retryParameters)),
                            ya(e, 2),
                            u(e, Ah(b, g, f.od), 4)
                          );
                        case 4:
                          return (k = e.s), e["return"](k);
                        case 2:
                          l = Da(e);
                          if (7001 == l.code) throw l;
                          $a(
                            "Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",
                            g.uris[0]
                          );
                          return u(e, Ah(b, h, f.od), 5);
                        case 5:
                          return (m = e.s), e["return"](m);
                      }
                    });
                  });
                }
                function yh(b, c, d, e, f, g) {
                  return t(function k() {
                    var l, m, n, q, x, w, A, C, E;
                    return y(k, function (k) {
                      switch (k.l) {
                        case 1:
                          if (
                            b.m &&
                            ((l = b.a.get(c)),
                            (m = l.Mb),
                            (n = m.get(e.position)))
                          )
                            return k["return"](n.startTime);
                          if ("audio/mpeg" == f) return k["return"](0);
                          if ("video/mp4" != f && "audio/mp4" != f) {
                            k.A(2);
                            break;
                          }
                          q = [zh(b, e)];
                          d && q.push(zh(b, d));
                          return u(k, Promise.all(q), 3);
                        case 3:
                          return (
                            (x = k.s),
                            (w = x[0]),
                            (A = x[1] || x[0]),
                            k["return"](Bh(w.data, A.data))
                          );
                        case 2:
                          if ("video/mp2t" != f) {
                            k.A(4);
                            break;
                          }
                          return u(k, zh(b, e), 5);
                        case 5:
                          return (C = k.s), k["return"](Ch(C.data));
                        case 4:
                          if (
                            "application/mp4" != f &&
                            !f.startsWith("text/")
                          ) {
                            k.A(6);
                            break;
                          }
                          return u(k, zh(b, e), 7);
                        case 7:
                          return (E = k.s), k["return"](Dh(f, g, E.data));
                        case 6:
                          throw new D(2, 4, 4030);
                      }
                    });
                  });
                }
                function Bh(b, c) {
                  var d = 0;
                  new S()
                    .G("moov", Mf)
                    .G("trak", Mf)
                    .G("mdia", Mf)
                    .ca("mdhd", function (b) {
                      b.reader.J(0 == b.version ? 8 : 16);
                      d = b.reader.D();
                      b.parser.stop();
                    })
                    .parse(c, !0);
                  if (!d) throw new D(2, 4, 4030);
                  var e = 0,
                    f = !1;
                  new S()
                    .G("moof", Mf)
                    .G("traf", Mf)
                    .ca("tfdt", function (b) {
                      e = (0 == b.version ? b.reader.D() : b.reader.ub()) / d;
                      f = !0;
                      b.parser.stop();
                    })
                    .parse(b, !0);
                  if (!f) throw new D(2, 4, 4030);
                  return e;
                }
                function Ch(b) {
                  function c() {
                    throw new D(2, 4, 4030);
                  }
                  b = new R(new DataView(b), 0);
                  for (var d = 0, e = 0; ; )
                    if (
                      ((d = b.aa()),
                      (e = b.ha()),
                      71 != e && c(),
                      b.Jb() & 16384 || c(),
                      (e = (b.ha() & 48) >> 4),
                      (0 != e && 2 != e) || c(),
                      3 == e && ((e = b.ha()), b.J(e)),
                      1 != b.D() >> 8)
                    )
                      b.seek(d + 188),
                        (e = b.ha()),
                        71 != e && (b.seek(d + 192), (e = b.ha())),
                        71 != e && (b.seek(d + 204), (e = b.ha())),
                        71 != e && c(),
                        b.Wd(1);
                    else
                      return (
                        b.J(3),
                        (d = b.ha() >> 6),
                        (0 != d && 1 != d) || c(),
                        0 == b.ha() && c(),
                        (d = b.ha()),
                        (e = b.Jb()),
                        (b = b.Jb()),
                        (1073741824 * ((d & 14) >> 1) +
                          (((e & 65534) << 14) | ((b & 65534) >> 1))) /
                          9e4
                      );
                }
                function Dh(b, c, d) {
                  b = ic(b, c);
                  if (!Wd(b)) return 0;
                  c = new Ud(null);
                  Xd(c, b);
                  return c.Gc(d);
                }
                function jh(b) {
                  var c = new Set(),
                    d = [];
                  b = r(b);
                  for (var e = b.next(); !e.done; e = b.next()) {
                    e = e.value;
                    var f = lc(e)[0];
                    c.has(f) || (d.push(e), c.add(f));
                  }
                  return d;
                }
                function kh(b, c) {
                  for (var d = Eh[b], e = 0; e < d.length; e++)
                    for (var f = 0; f < c.length; f++)
                      if (d[e].test(c[f].trim())) return c[f].trim();
                  return "text" == b ? "" : null;
                }
                function th(b, c) {
                  if (1 == c.length) return c[0];
                  var d = kh(b, c);
                  if (null != d) return d;
                  throw new D(2, 4, 4025, c);
                }
                function uh(b, c, d, e) {
                  return t(function g() {
                    var h, k, l, m, n, q, x, w, A, C;
                    return y(g, function (g) {
                      switch (g.l) {
                        case 1:
                          h = wd;
                          k = Pb;
                          l = e.segments[0].a;
                          m = new cb(l);
                          n = m.fa.split(".").pop();
                          q = Fh[c];
                          if ((x = q[n])) return g["return"](x);
                          if (c == h.na)
                            return d && "vtt" != d
                              ? g["return"]("application/mp4")
                              : g["return"]("text/vtt");
                          w = Sb([l], b.c.retryParameters);
                          w.method = "HEAD";
                          return u(g, Ah(b, w, k.od), 2);
                        case 2:
                          A = g.s;
                          C = A.headers["content-type"];
                          if (!C) throw new D(2, 4, 4021, n);
                          return g["return"](C.split(";")[0]);
                      }
                    });
                  });
                }
                function fh(b, c) {
                  var d = b.getAttribute(c);
                  if (!d) throw new D(2, 4, 4023, c);
                  return d.value;
                }
                function wh(b, c) {
                  var d = Jg.Pa(b, c);
                  if (!d) throw new D(2, 4, 4024, c);
                  return d;
                }
                function Yg(b, c) {
                  return Ah(b, Sb([c], b.c.retryParameters), Pb.mg);
                }
                var Eh = {
                    audio: [
                      /^vorbis$/,
                      /^opus$/,
                      /^flac$/,
                      /^mp4a/,
                      /^[ae]c-3$/,
                    ],
                    video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
                    text: [/^vtt$/, /^wvtt/, /^stpp/],
                  },
                  Fh = {
                    audio: {
                      mp4: "audio/mp4",
                      m4s: "audio/mp4",
                      m4i: "audio/mp4",
                      m4a: "audio/mp4",
                      ts: "video/mp2t",
                    },
                    video: {
                      mp4: "video/mp4",
                      m4s: "video/mp4",
                      m4i: "video/mp4",
                      m4v: "video/mp4",
                      ts: "video/mp2t",
                    },
                    text: {
                      mp4: "application/mp4",
                      m4s: "application/mp4",
                      m4i: "application/mp4",
                      vtt: "text/vtt",
                      ttml: "application/ttml+xml",
                    },
                  };
                function Wg(b) {
                  t(function d() {
                    var e, f;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          if (!b.g) return d["return"]();
                          ya(d, 2);
                          return u(d, b.update(), 4);
                        case 4:
                          e = b.N;
                          b.h.O(e);
                          Aa(d, 0);
                          break;
                        case 2:
                          (f = Da(d)),
                            (f.severity = 1),
                            b.g.onError(f),
                            b.h.O(0.1),
                            v(d);
                      }
                    });
                  });
                }
                function ch(b, c) {
                  b.f = c;
                  b.b && b.b.Ob(b.f == $g.Ma);
                  b.f != $g.Ma || b.h.stop();
                }
                function Ah(b, c, d) {
                  if (!b.i) throw new D(2, 7, 7001);
                  c = b.g.networkingEngine.request(d, c);
                  Ob(b.i, c);
                  return c.promise;
                }
                var rh = {
                    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function (
                      b
                    ) {
                      var c = fh(b, "METHOD");
                      Ke(
                        "HLS SAMPLE-AES-CENC",
                        "SAMPLE-AES-CENC will no longer be supported, see Issue #1227"
                      );
                      if (
                        ![
                          "SAMPLE-AES",
                          "SAMPLE-AES-CTR",
                          "SAMPLE-AES-CENC",
                        ].includes(c)
                      )
                        return null;
                      c = fh(b, "URI");
                      c = Ug.parse(c);
                      c = new Uint8Array(c.data);
                      c = vd("com.widevine.alpha", [
                        { initDataType: "cenc", initData: c },
                      ]);
                      if ((b = Hg(b, "KEYID")))
                        c.keyIds = [b.substr(2).toLowerCase()];
                      return c;
                    },
                  },
                  Xg = "VOD",
                  $g = { Ma: Xg, ge: "EVENT", nd: "LIVE" };
                U.Zc("m3u8", Vg);
                U.Kb("application/x-mpegurl", Vg);
                U.Kb("application/vnd.apple.mpegurl", Vg);
                function Gh() {
                  this.a = new Map();
                }
                function Hh(b, c, d) {
                  Ih(b, c).text = d;
                }
                function Ih(b, c) {
                  b.a.has(c) || b.a.set(c, new Jh());
                  return b.a.get(c);
                }
                function Jh() {
                  this.text = this.variant = null;
                }
                function Kh(b, c) {
                  this.a = b;
                  this.b = new Set([b]);
                  c = c || [];
                  for (var d = r(c), e = d.next(); !e.done; e = d.next())
                    this.add(e.value);
                }
                Kh.prototype.add = function (b) {
                  return Lh(this.a, b) ? (this.b.add(b), !0) : !1;
                };
                function Lh(b, c) {
                  var d;
                  if (
                    !(d =
                      !!b.audio != !!c.audio ||
                      !!b.video != !!c.video ||
                      b.language != c.language) &&
                    (d = b.audio && c.audio)
                  ) {
                    d = b.audio;
                    var e = c.audio;
                    d = !(
                      d.channelsCount == e.channelsCount &&
                      Mh(d, e) &&
                      Nh(d.roles, e.roles)
                    );
                  }
                  !d &&
                    (d = b.video && c.video) &&
                    ((d = b.video),
                    (e = c.video),
                    (d = !(Mh(d, e) && Nh(d.roles, e.roles))));
                  return d ? !1 : !0;
                }
                Kh.prototype.values = function () {
                  return this.b.values();
                };
                function Mh(b, c) {
                  if (b.mimeType != c.mimeType) return !1;
                  var d = b.codecs.split(",").map(function (b) {
                      return lc(b)[0];
                    }),
                    e = c.codecs.split(",").map(function (b) {
                      return lc(b)[0];
                    });
                  if (d.length != e.length) return !1;
                  d.sort();
                  e.sort();
                  for (var f = 0; f < d.length; f++)
                    if (d[f] != e[f]) return !1;
                  return !0;
                }
                function Nh(b, c) {
                  var d = new Set(b),
                    e = new Set(c);
                  d["delete"]("main");
                  e["delete"]("main");
                  if (d.size != e.size) return !1;
                  d = r(d);
                  for (var f = d.next(); !f.done; f = d.next())
                    if (!e.has(f.value)) return !1;
                  return !0;
                }
                function Oh(b) {
                  this.a = b;
                  this.b = new Ph(
                    b.language,
                    "",
                    b.audio && b.audio.channelsCount ? b.audio.channelsCount : 0
                  );
                }
                Oh.prototype.create = function (b) {
                  var c = this,
                    d = b.filter(function (b) {
                      return Lh(c.a, b);
                    });
                  return d.length ? new Kh(d[0], d) : this.b.create(b);
                };
                function Ph(b, c, d) {
                  this.c = b;
                  this.b = c;
                  this.a = d;
                }
                Ph.prototype.create = function (b) {
                  var c = [];
                  c = Qh(b, this.c);
                  var d = b.filter(function (b) {
                    return b.primary;
                  });
                  c = c.length ? c : d.length ? d : b;
                  this.b && ((b = Rh(c, this.b)), b.length && (c = b));
                  this.a && ((b = De(c, this.a)), b.length && (c = b));
                  b = new Kh(c[0]);
                  c = r(c);
                  for (d = c.next(); !d.done; d = c.next())
                    (d = d.value), Lh(b.a, d) && b.add(d);
                  return b;
                };
                function Qh(b, c) {
                  var d = M(c),
                    e = re(
                      d,
                      b.map(function (b) {
                        return qe(b);
                      })
                    );
                  return e
                    ? b.filter(function (b) {
                        return e == qe(b);
                      })
                    : [];
                }
                function Rh(b, c) {
                  return b.filter(function (b) {
                    var d = b.audio;
                    b = b.video;
                    return (
                      (d && 0 <= d.roles.indexOf(c)) ||
                      (b && 0 <= b.roles.indexOf(c))
                    );
                  });
                }
                function Sh(b, c) {
                  this.a = Th;
                  this.b = new Map().set(Th, c).set(Uh, b);
                }
                var Uh = 0,
                  Th = 1;
                function Vh(b, c) {
                  this.g = b;
                  this.h = Wh(b);
                  this.c = b.a.currentTime;
                  this.f = Date.now() / 1e3;
                  this.i = c;
                  this.b = function () {};
                }
                Vh.prototype.a = function () {
                  this.g = null;
                  this.b = function () {};
                };
                function Xh(b, c) {
                  b.b = c;
                }
                function Yh(b) {
                  this.a = b;
                }
                function Wh(b) {
                  if (
                    b.a.paused ||
                    0 == b.a.playbackRate ||
                    null == b.a.buffered
                  )
                    var c = !1;
                  else
                    a: {
                      c = b.a.buffered;
                      b = b.a.currentTime;
                      for (var d = 0; d < c.length; d++) {
                        var e = c.start(d),
                          f = c.end(d);
                        if (!(b < e || b > f - 0.5)) {
                          c = !0;
                          break a;
                        }
                      }
                      c = !1;
                    }
                  return c;
                }
                function Zh(b, c, d, e, f) {
                  var g = this;
                  this.b = b;
                  this.w = c;
                  this.v = d;
                  this.m = f;
                  this.g = new ac();
                  this.j = !1;
                  this.o = b.readyState;
                  this.f = !1;
                  this.c = e;
                  this.i = !1;
                  L(this.g, b, "waiting", function () {
                    return $h(g);
                  });
                  this.h = new B(function () {
                    $h(g);
                  }).Ia(0.25);
                }
                Zh.prototype.a = function () {
                  this.g && (this.g.a(), (this.g = null));
                  null != this.h && (this.h.stop(), (this.h = null));
                  this.c && (this.c.a(), (this.c = null));
                  this.b = this.w = this.m = null;
                };
                Zh.prototype.Uc = function () {
                  this.i = !0;
                  $h(this);
                };
                function $h(b) {
                  if (0 != b.b.readyState) {
                    if (b.b.seeking) {
                      if (!b.j) return;
                    } else b.j = !1;
                    if (!b.b.paused) {
                      b.b.readyState != b.o &&
                        ((b.f = !1), (b.o = b.b.readyState));
                      var c = b.v.smallGapLimit,
                        d = b.b.currentTime,
                        e = b.b.buffered;
                      a: {
                        if (
                          e &&
                          e.length &&
                          !(1 == e.length && 1e-6 > e.end(0) - e.start(0))
                        ) {
                          var f =
                            pc("Edge/") ||
                            pc("Trident/") ||
                            pc("Tizen") ||
                            pc("CrKey")
                              ? 0.5
                              : 0.1;
                          for (var g = 0; g < e.length; g++)
                            if (
                              e.start(g) > d &&
                              (0 == g || e.end(g - 1) - d <= f)
                            ) {
                              f = g;
                              break a;
                            }
                        }
                        f = null;
                      }
                      if (null == f) {
                        if (b.c) {
                          b = b.c;
                          d = b.g;
                          e = Wh(d);
                          d = d.a.currentTime;
                          f = Date.now() / 1e3;
                          if (b.c != d || b.h != e)
                            (b.f = f), (b.c = d), (b.h = e);
                          d = f - b.f;
                          d >= b.i && e && b.b(b.c, d);
                        }
                      } else if (0 != f || b.i) {
                        g = e.start(f);
                        var h = b.w.wa();
                        if (!(g >= h)) {
                          h = g - d;
                          c = h <= c;
                          var k = !1;
                          0.001 > h ||
                            (c ||
                              b.f ||
                              ((b.f = !0),
                              (d = new I("largegap", {
                                currentTime: d,
                                gapSize: h,
                              })),
                              (d.cancelable = !0),
                              b.m(d),
                              b.v.jumpLargeGaps &&
                                !d.defaultPrevented &&
                                (k = !0)),
                            !c && !k) ||
                            (0 != f && e.end(f - 1), (b.b.currentTime = g));
                        }
                      }
                    }
                  }
                }
                function ai(b) {
                  var c = this;
                  this.f = b;
                  this.b = new Set();
                  this.c = new B(function () {
                    bi(c, !1);
                  }).Ia(0.25);
                }
                ai.prototype.a = function () {
                  this.c.stop();
                  for (var b = r(this.b), c = b.next(); !c.done; c = b.next())
                    c.value.a();
                  this.b.clear();
                };
                function bi(b, c) {
                  for (var d = r(b.b), e = d.next(); !e.done; e = d.next())
                    e.value.h(b.f.currentTime, c);
                }
                function ci(b) {
                  var c = [];
                  b = r(b);
                  for (var d = b.next(); !d.done; d = b.next()) {
                    d = r(d.value.variants);
                    for (var e = d.next(); !e.done; e = d.next())
                      c.push(e.value);
                  }
                  return c;
                }
                function di(b, c) {
                  for (
                    var d = null, e = r(b), f = e.next();
                    !f.done;
                    f = e.next()
                  )
                    (f = f.value), c >= f.startTime && (d = f);
                  return d;
                }
                function ei(b) {
                  this.f = b;
                  this.b = null;
                  this.c = function () {};
                }
                ei.prototype.a = function () {
                  this.b = this.f = null;
                  this.c = function () {};
                };
                ei.prototype.h = function (b) {
                  var c = this.b,
                    d = this.f.periods;
                  b = di(d, b) || d[0];
                  c != b && this.c(b);
                  this.b = b;
                };
                function fi(b, c) {
                  b.c = c;
                }
                function gi(b) {
                  var c = this;
                  this.b = b;
                  this.g = !1;
                  this.f = this.b.cc();
                  this.c = new B(function () {
                    c.b.Ed(0.25 * c.f);
                  });
                }
                gi.prototype.a = function () {
                  this.c && (this.c.stop(), (this.c = null));
                  this.b = null;
                };
                gi.prototype.set = function (b) {
                  this.f = b;
                  hi(this);
                };
                function hi(b) {
                  b.c.stop();
                  var c = b.g ? 0 : b.f;
                  0 <= c
                    ? b.b.cc() != c && b.b.ed(c)
                    : (b.c.Ia(0.25), 0 != b.b.cc() && b.b.ed(0));
                }
                function ii(b, c, d) {
                  this.b = b;
                  this.g = c;
                  this.h = d;
                  this.c = new ac();
                  this.f = new ji(b);
                  0 < b.readyState ? ki(this, d) : li(this, d);
                }
                ii.prototype.a = function () {
                  this.c && (this.c.a(), (this.c = null));
                  null != this.f && (this.f.a(), (this.f = null));
                  this.g = function () {};
                  this.b = null;
                };
                function mi(b) {
                  return 0 < b.b.readyState ? b.b.currentTime : b.h;
                }
                function li(b, c) {
                  b.h = c;
                  b.c.ma(b.b, "loadedmetadata");
                  dc(b.c, b.b, "loadedmetadata", function () {
                    ki(b, c);
                  });
                }
                function ki(b, c) {
                  0.001 > Math.abs(b.b.currentTime - c)
                    ? ni(b)
                    : (dc(b.c, b.b, "seeking", function () {
                        ni(b);
                      }),
                      oi(b.f, 0 == b.b.currentTime ? c : b.b.currentTime));
                }
                function ni(b) {
                  L(b.c, b.b, "seeking", function () {
                    return b.g();
                  });
                }
                function ji(b) {
                  var c = this;
                  this.c = b;
                  this.i = 10;
                  this.h = this.g = this.f = 0;
                  this.b = new B(function () {
                    0 >= c.f
                      ? c.b.stop()
                      : c.c.currentTime != c.g
                      ? c.b.stop()
                      : ((c.c.currentTime = c.h), c.f--);
                  });
                }
                ji.prototype.a = function () {
                  this.b && (this.b.stop(), (this.b = null));
                  this.c = null;
                };
                function oi(b, c) {
                  b.g = b.c.currentTime;
                  b.h = c;
                  b.f = b.i;
                  b.c.currentTime = c;
                  b.b.Ia(0.1);
                }
                function pi(b) {
                  function c() {
                    d.g = !0;
                    null != d.c && (d.b.currentTime = d.c);
                  }
                  var d = this;
                  this.b = b;
                  this.g = !1;
                  this.c = null;
                  this.f = new ac();
                  0 == this.b.readyState
                    ? dc(this.f, this.b, "loadedmetadata", c)
                    : c();
                }
                pi.prototype.a = function () {
                  this.f && (this.f.a(), (this.f = null));
                  this.b = null;
                };
                pi.prototype.o = function (b) {
                  this.c = this.g ? this.c : b;
                };
                pi.prototype.i = function () {
                  return (this.g ? this.b.currentTime : this.c) || 0;
                };
                pi.prototype.v = function () {};
                function qi(b, c, d, e, f, g) {
                  var h = this;
                  this.c = b;
                  this.b = c.presentationTimeline;
                  this.C = c.minBufferTime || 0;
                  this.h = d;
                  this.w = f;
                  this.m = null;
                  this.g = new Zh(b, c.presentationTimeline, d, ri(b, d), g);
                  this.f = new ii(
                    b,
                    function () {
                      a: {
                        var b = h.g;
                        b.j = !0;
                        b.i = !1;
                        b.f = !1;
                        var c = mi(h.f);
                        b = si(h, c);
                        if (
                          0.001 < Math.abs(b - c) &&
                          ((c = new Date().getTime() / 1e3),
                          !h.m || h.m < c - 1)
                        ) {
                          h.m = c;
                          c = h.f;
                          0 < c.b.readyState ? oi(c.f, b) : li(c, b);
                          b = void 0;
                          break a;
                        }
                        h.w();
                        b = void 0;
                      }
                      return b;
                    },
                    ti(this, e)
                  );
                  this.j = new B(function () {
                    if (0 != h.c.readyState && !h.c.paused) {
                      var b = h.c.currentTime,
                        c = h.b.ib(),
                        d = h.b.wa();
                      3 > d - c && (c = d - 3);
                      b < c && ((b = si(h, b)), (h.c.currentTime = b));
                    }
                  }).Ia(0.25);
                }
                qi.prototype.a = function () {
                  this.f && (this.f.a(), (this.f = null));
                  this.g && (this.g.a(), (this.g = null));
                  this.j && (this.j.stop(), (this.j = null));
                  this.c = this.f = this.b = this.h = null;
                  this.w = function () {};
                };
                qi.prototype.o = function (b) {
                  var c = this.f;
                  0 < c.b.readyState ? oi(c.f, b) : li(c, b);
                };
                qi.prototype.i = function () {
                  var b = mi(this.f);
                  return 0 < this.c.readyState && !this.c.paused
                    ? ui(this, b)
                    : b;
                };
                function ti(b, c) {
                  null == c
                    ? (c = Infinity > b.b.Y() ? b.b.ib() : b.b.wa())
                    : 0 > c && (c = b.b.wa() + c);
                  return vi(b, ui(b, c));
                }
                qi.prototype.v = function () {
                  this.g.Uc();
                };
                function vi(b, c) {
                  var d = b.b.Y();
                  return c >= d ? d - b.h.durationBackoff : c;
                }
                function si(b, c) {
                  var d = qd.bind(null, b.c.buffered),
                    e = Math.max(b.C, b.h.rebufferingGoal),
                    f = b.h.safeSeekOffset,
                    g = b.b.ib(),
                    h = b.b.wa(),
                    k = b.b.Y();
                  3 > h - g && (g = h - 3);
                  var l = b.b.Cb(e),
                    m = b.b.Cb(f);
                  e = b.b.Cb(e + f);
                  return c >= k
                    ? vi(b, c)
                    : c > h
                    ? h
                    : c < g
                    ? d(m)
                      ? m
                      : e
                    : c >= l || d(c)
                    ? c
                    : e;
                }
                function ui(b, c) {
                  var d = b.b.ib();
                  if (c < d) return d;
                  d = b.b.wa();
                  return c > d ? d : c;
                }
                function ri(b, c) {
                  if (!c.stallEnabled) return null;
                  var d = c.stallSkip,
                    e = new Vh(new Yh(b), c.stallThreshold);
                  Xh(e, function () {
                    b.currentTime += d;
                  });
                  return e;
                }
                function wi() {
                  this.c = function () {};
                  this.b = new Set();
                }
                wi.prototype.a = function () {
                  this.c = function () {};
                  this.b.clear();
                };
                function xi(b, c) {
                  b.c = c;
                }
                function yi(b) {
                  var c = this;
                  this.i = b;
                  this.g = new Map();
                  this.b = function () {};
                  this.c = function () {};
                  this.f = function () {};
                  this.j = [
                    {
                      Za: null,
                      Ya: zi,
                      Sa: function (b, e) {
                        return c.b(b, e);
                      },
                    },
                    {
                      Za: Ai,
                      Ya: zi,
                      Sa: function (b, e) {
                        return c.b(b, e);
                      },
                    },
                    {
                      Za: Bi,
                      Ya: zi,
                      Sa: function (b, e) {
                        return c.b(b, e);
                      },
                    },
                    {
                      Za: zi,
                      Ya: Ai,
                      Sa: function (b, e) {
                        return c.c(b, e);
                      },
                    },
                    {
                      Za: zi,
                      Ya: Bi,
                      Sa: function (b, e) {
                        return c.c(b, e);
                      },
                    },
                    {
                      Za: Ai,
                      Ya: Bi,
                      Sa: function (b, e) {
                        return c.f(b, e);
                      },
                    },
                    {
                      Za: Bi,
                      Ya: Ai,
                      Sa: function (b, e) {
                        return c.f(b, e);
                      },
                    },
                  ];
                }
                yi.prototype.a = function () {
                  this.i = null;
                  this.g.clear();
                  this.b = function () {};
                  this.c = function () {};
                  this.f = function () {};
                };
                yi.prototype.h = function (b, c) {
                  for (
                    var d = r(this.i.b), e = d.next();
                    !e.done;
                    e = d.next()
                  ) {
                    e = e.value;
                    var f = this.g.get(e),
                      g = b < e.startTime ? Ai : b > e.endTime ? Bi : zi;
                    this.g.set(e, g);
                    for (var h = r(this.j), k = h.next(); !k.done; k = h.next())
                      (k = k.value), k.Za == f && k.Ya == g && k.Sa(e, c);
                  }
                };
                function Ci(b, c, d, e) {
                  b.b = c;
                  b.c = d;
                  b.f = e;
                }
                var Ai = 1,
                  zi = 2,
                  Bi = 3;
                function Di(b, c) {
                  this.a = c;
                  this.c = b;
                  this.g = null;
                  this.j = 1;
                  this.v = Promise.resolve();
                  this.h = [];
                  this.i = new Map();
                  this.b = new Map();
                  this.o = !1;
                  this.F = null;
                  this.C = this.f = this.m = !1;
                  this.w = 0;
                }
                Di.prototype.destroy = function () {
                  for (
                    var b = r(this.b.values()), c = b.next();
                    !c.done;
                    c = b.next()
                  )
                    Ei(c.value);
                  this.b.clear();
                  this.i.clear();
                  this.g = this.h = this.v = this.c = this.a = null;
                  this.f = !0;
                  return Promise.resolve();
                };
                Di.prototype.configure = function (b) {
                  this.g = b;
                  this.F = new tb(
                    {
                      maxAttempts: Math.max(b.retryParameters.maxAttempts, 2),
                      baseDelay: b.retryParameters.baseDelay,
                      backoffFactor: b.retryParameters.backoffFactor,
                      fuzzFactor: b.retryParameters.fuzzFactor,
                      timeout: 0,
                    },
                    !0
                  );
                };
                Di.prototype.start = function () {
                  var b = this;
                  return t(function d() {
                    var e, f, g;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (e = b.a.Qa()),
                            (f = Fi(b, e)),
                            (g = b.a.Hd(b.c.periods[f])),
                            g.variant || g.text
                              ? u(
                                  d,
                                  Gi(
                                    b,
                                    g.variant ? g.variant.audio : null,
                                    g.variant ? g.variant.video : null,
                                    g.text,
                                    e
                                  ),
                                  2
                                )
                              : d["return"](new D(2, 5, 5005))
                          );
                        case 2:
                          if (b.f) return d["return"]();
                          b.a && b.a.bf && b.a.bf();
                          v(d);
                      }
                    });
                  });
                };
                function Hi(b) {
                  return Ii(b, "audio");
                }
                function Ji(b) {
                  return Ii(b, "video");
                }
                function Ii(b, c) {
                  var d = b.b.get(c);
                  return d ? d.Fa || d.stream : null;
                }
                function Ki(b, c) {
                  return t(function e() {
                    var f, g, h, k, l, m, n, q;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return (f = wd), u(e, je(b.a.L, f.na), 2);
                        case 2:
                          return (
                            b.w++,
                            (b.C = !1),
                            (g = b.w),
                            (h = b.a.L),
                            (k = new Map()),
                            (l = new Set()),
                            k.set(f.na, c),
                            l.add(c),
                            u(e, h.init(k, !1), 3)
                          );
                        case 3:
                          return b.f ? e["return"]() : u(e, Li(b, l), 4);
                        case 4:
                          if (b.f) return e["return"]();
                          b.w != g ||
                            b.b.has(f.na) ||
                            b.C ||
                            ((m = b.a.Qa()),
                            (n = Fi(b, m)),
                            (q = Mi(c, n, 0)),
                            b.b.set(f.na, q),
                            Ni(b, q, 0));
                          v(e);
                      }
                    });
                  });
                }
                function Oi(b, c) {
                  var d = b.b.get("video");
                  if (d) {
                    var e = d.stream;
                    if (e)
                      if (c) {
                        var f = e.trickModeVideo;
                        f && !d.Fa && (Pi(b, f, !1, 0), (d.Fa = e));
                      } else if ((e = d.Fa)) (d.Fa = null), Pi(b, e, !0, 0);
                  }
                }
                function Qi(b, c, d, e) {
                  c.video && Pi(b, c.video, d, e);
                  c.audio && Pi(b, c.audio, d, e);
                }
                function Pi(b, c, d, e) {
                  var f = b.b.get(c.type);
                  if (!f && "text" == c.type && b.g.ignoreTextStreamFailures)
                    Ki(b, c);
                  else if (f) {
                    var g = Ri(b, c);
                    if (d && g != f.ya)
                      b.b.forEach(function (c) {
                        Si(b, c);
                      });
                    else {
                      f.Fa &&
                        (c.trickModeVideo
                          ? ((f.Fa = c), (c = c.trickModeVideo))
                          : (f.Fa = null));
                      var h = b.h[g];
                      h &&
                        h.vb &&
                        (h = b.i.get(c.id)) &&
                        h.vb &&
                        f.stream != c &&
                        ("text" == c.type &&
                          ce(b.a.L, ic(c.mimeType, c.codecs)),
                        (f.stream = c),
                        (f.ec = !0),
                        Ti(b, f, g) && f.Hb.abort(),
                        d &&
                          (f.Na
                            ? (f.qc = !0)
                            : f.Ea
                            ? ((f.Ja = !0), (f.Wb = e), (f.qc = !0))
                            : (Ei(f), Ui(b, f, !0, e))));
                    }
                  }
                }
                function Ti(b, c, d) {
                  if (!c.Hb) return !1;
                  var e = b.a.Qa(),
                    f = fe(b.a.L, c.type);
                  b = (b = Vi(b, c, e, f, d)) ? (b.a ? b.a - b.b : null) : null;
                  if (null == b) return !1;
                  (d = c.stream.initSegmentReference) &&
                    (b += (d.a ? d.a - d.b : null) || 0);
                  return c.Hb.b.a > b;
                }
                function Wi(b) {
                  function c(c) {
                    var f = b.a.L;
                    "text" == c
                      ? ((c = f.a),
                        (c =
                          null == c.a || null == c.b
                            ? !1
                            : d >= c.a && d < c.b))
                      : ((c = ee(f, c)), (c = qd(c, d, e)));
                    return c;
                  }
                  var d = b.a.Qa(),
                    e = b.g.smallGapLimit,
                    f = Fi(b, d);
                  if (
                    fc(b.b.values(), function (b) {
                      return b.ya == f;
                    })
                  )
                    for (
                      var g = r(b.b.keys()), h = g.next();
                      !h.done;
                      h = g.next()
                    )
                      (h = h.value), c(h) || Si(b, b.b.get(h));
                  else
                    fc(b.b.keys(), c) ||
                      b.b.forEach(function (c) {
                        Si(b, c);
                      });
                }
                function Si(b, c) {
                  c.Na ||
                    c.Ja ||
                    (c.Ea
                      ? ((c.Ja = !0), (c.Wb = 0))
                      : null == de(b.a.L, c.type)
                      ? null == c.Ba && Ni(b, c, 0)
                      : (Ei(c), Ui(b, c, !1, 0)));
                }
                function Gi(b, c, d, e, f) {
                  return t(function h() {
                    var k, l, m, n, q, x, w;
                    return y(h, function (h) {
                      switch (h.l) {
                        case 1:
                          return (
                            (k = b.a.Qa()),
                            (l = Fi(b, k)),
                            (m = wd),
                            (n = new Map()),
                            (q = new Set()),
                            c && (n.set(m.wb, c), q.add(c)),
                            d && (n.set(m.La, d), q.add(d)),
                            e && (n.set(m.na, e), q.add(e)),
                            (x = b.a.L),
                            (w = b.g.forceTransmuxTS),
                            u(h, x.init(n, w), 2)
                          );
                        case 2:
                          if (b.f) return h["return"]();
                          Xi(b);
                          return u(h, Li(b, q), 3);
                        case 3:
                          if (b.f) return h["return"]();
                          n.forEach(function (c, d) {
                            if (!b.b.has(d)) {
                              var e = Mi(c, l, f);
                              b.b.set(d, e);
                              Ni(b, e, 0);
                            }
                          });
                          v(h);
                      }
                    });
                  });
                }
                function Mi(b, c, d) {
                  return {
                    stream: b,
                    type: b.type,
                    lb: null,
                    xa: null,
                    Fa: null,
                    ec: !0,
                    ya: c,
                    endOfStream: !1,
                    Ea: !1,
                    Ba: null,
                    Ja: !1,
                    Wb: 0,
                    qc: !1,
                    Na: !1,
                    Yc: !1,
                    Eb: !1,
                    Vd: d || 0,
                    Hb: null,
                  };
                }
                function Yi(b, c) {
                  var d = b.h[c];
                  if (d) return d.promise;
                  d = { promise: new G(), vb: !1 };
                  b.h[c] = d;
                  for (
                    var e = new Set(),
                      f = r(b.c.periods[c].variants),
                      g = f.next();
                    !g.done;
                    g = f.next()
                  )
                    (g = g.value),
                      g.video && e.add(g.video),
                      g.video &&
                        g.video.trickModeVideo &&
                        e.add(g.video.trickModeVideo),
                      g.audio && e.add(g.audio);
                  f = r(b.c.periods[c].textStreams);
                  for (g = f.next(); !g.done; g = f.next()) e.add(g.value);
                  b.v = b.v
                    .then(
                      function () {
                        if (!this.f) return Li(this, e);
                      }.bind(b)
                    )
                    .then(
                      function () {
                        this.f ||
                          (this.h[c].promise.resolve(), (this.h[c].vb = !0));
                      }.bind(b)
                    )
                    ["catch"](
                      function (b) {
                        this.f ||
                          (this.h[c].promise["catch"](function () {}),
                          this.h[c].promise.reject(),
                          delete this.h[c],
                          this.a.onError(b));
                      }.bind(b)
                    );
                  return d.promise;
                }
                function Li(b, c) {
                  return t(function e() {
                    var f, g, h, k, l, m, n;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          f = [];
                          for (
                            var q = r(c), w = q.next();
                            !w.done;
                            w = q.next()
                          )
                            (g = w.value),
                              (h = b.i.get(g.id))
                                ? f.push(h.promise)
                                : (b.i.set(g.id, { promise: new G(), vb: !1 }),
                                  f.push(g.createSegmentIndex()));
                          ya(e, 2);
                          return u(e, Promise.all(f), 4);
                        case 4:
                          if (b.f) return e["return"]();
                          Aa(e, 3);
                          break;
                        case 2:
                          k = Da(e);
                          if (b.f) return e["return"]();
                          e = r(c);
                          for (w = e.next(); !w.done; w = e.next())
                            (l = w.value),
                              b.i.get(l.id).promise["catch"](function () {}),
                              b.i.get(l.id).promise.reject(),
                              b.i["delete"](l.id);
                          throw k;
                        case 3:
                          q = r(c);
                          for (w = q.next(); !w.done; w = q.next())
                            (m = w.value),
                              (n = b.i.get(m.id)),
                              n.vb || (n.promise.resolve(), (n.vb = !0));
                          v(e);
                      }
                    });
                  });
                }
                function Xi(b) {
                  var c = b.c.presentationTimeline.Y();
                  Infinity > c ? b.a.L.ta(c) : b.a.L.ta(Math.pow(2, 32));
                }
                function Zi(b, c) {
                  if (!b.f && !c.Ea && null != c.Ba && !c.Na)
                    if (((c.Ba = null), c.Ja)) Ui(b, c, c.qc, c.Wb);
                    else {
                      try {
                        var d = $i(b, c);
                        null != d && (Ni(b, c, d), (c.Eb = !1));
                      } catch (e) {
                        aj(b, e);
                        return;
                      }
                      d = Array.from(b.b.values());
                      bj(b, c);
                      b.o &&
                        d.every(function (b) {
                          return b.endOfStream;
                        }) &&
                        b.a.L.endOfStream().then(
                          function () {
                            if (!this.f) {
                              var b = this.a.L.Y();
                              b < this.c.presentationTimeline.Y() &&
                                this.c.presentationTimeline.ta(b);
                            }
                          }.bind(b)
                        );
                    }
                }
                function $i(b, c) {
                  function d(b) {
                    return (
                      "text" == b.type &&
                      "application/cea-608" == b.stream.mimeType
                    );
                  }
                  if (d(c)) return b.a.L.nc(c.stream.originalId || ""), null;
                  var e = b.a.Qa(),
                    f = cj(b, c, e),
                    g = Ri(b, c.stream),
                    h = Fi(b, f),
                    k = ge(b.a.L, c.type, e),
                    l =
                      Math.max(
                        b.c.minBufferTime || 0,
                        b.g.rebufferingGoal,
                        b.g.bufferingGoal
                      ) * b.j;
                  if (f >= b.c.presentationTimeline.Y())
                    return (
                      (c.endOfStream = !0),
                      "video" == c.type &&
                        (f = b.b.get("text")) &&
                        "application/cea-608" == f.stream.mimeType &&
                        (f.endOfStream = !0),
                      null
                    );
                  c.endOfStream = !1;
                  c.ya = h;
                  if (h != g) return null;
                  if (k >= l) return 0.5;
                  h = fe(b.a.L, c.type);
                  h = Vi(b, c, e, h, g);
                  if (!h) return 1;
                  var m = Infinity;
                  Array.from(b.b.values()).forEach(function (c) {
                    d(c) || ((c = cj(b, c, e)), (m = Math.min(m, c)));
                  });
                  if (f >= m + b.c.presentationTimeline.a) return 1;
                  c.Vd = 0;
                  dj(b, c, e, g, h);
                  return null;
                }
                function cj(b, c, d) {
                  if (!c.lb || !c.xa) return Math.max(d, c.Vd);
                  d = Ri(b, c.lb);
                  return b.c.periods[d].startTime + c.xa.endTime;
                }
                function Vi(b, c, d, e, f) {
                  if (c.xa && c.stream == c.lb)
                    return ej(b, c, f, c.xa.position + 1);
                  c.xa
                    ? ((d = Ri(b, c.lb)),
                      (d = c.stream.findSegmentPosition(
                        Math.max(
                          0,
                          b.c.periods[d].startTime +
                            c.xa.endTime -
                            b.c.periods[f].startTime
                        )
                      )))
                    : (d = c.stream.findSegmentPosition(
                        Math.max(0, (e || d) - b.c.periods[f].startTime)
                      ));
                  if (null == d) return null;
                  var g = null;
                  null == e && (g = ej(b, c, f, Math.max(0, d - 1)));
                  return g || ej(b, c, f, d);
                }
                function ej(b, c, d, e) {
                  d = b.c.periods[d];
                  c = c.stream.getSegmentReference(e);
                  if (!c) return null;
                  e = b.c.presentationTimeline;
                  b = e.Db();
                  e = e.jb();
                  return d.startTime + c.endTime < b ||
                    d.startTime + c.startTime > e
                    ? null
                    : c;
                }
                function dj(b, c, d, e, f) {
                  var g = b.c.periods[e],
                    h = c.stream,
                    k = b.c.presentationTimeline.Y(),
                    l = b.c.periods[e + 1];
                  e = fj(
                    b,
                    c,
                    e,
                    Math.max(0, g.startTime - 0.1),
                    l ? l.startTime + 0.01 : k
                  );
                  c.Ea = !0;
                  c.ec = !1;
                  k = gj(b, c, f);
                  Promise.all([e, k])
                    .then(
                      function (b) {
                        if (!this.f && !this.m)
                          return hj(this, c, d, g, h, f, b[1]);
                      }.bind(b)
                    )
                    .then(
                      function () {
                        this.f ||
                          this.m ||
                          ((c.Ea = !1),
                          (c.Yc = !1),
                          c.Ja || this.a.Uc(),
                          Ni(this, c, 0),
                          ij(this, h));
                      }.bind(b)
                    )
                    ["catch"](
                      function (b) {
                        this.f ||
                          this.m ||
                          ((c.Ea = !1),
                          "text" == c.type && this.g.ignoreTextStreamFailures
                            ? this.b["delete"]("text")
                            : 7001 == b.code
                            ? ((c.Ea = !1), (c.Ba = null), Ni(this, c, 0))
                            : 3017 == b.code
                            ? jj(this, c, b)
                            : ((c.Eb = !0), (b.severity = 2), aj(this, b)));
                      }.bind(b)
                    );
                }
                function jj(b, c, d) {
                  if (
                    !Array.from(b.b.values()).some(function (b) {
                      return b != c && b.Yc;
                    })
                  ) {
                    var e = Math.round(100 * b.j);
                    if (20 < e) b.j -= 0.2;
                    else if (4 < e) b.j -= 0.04;
                    else {
                      c.Eb = !0;
                      b.m = !0;
                      b.a.onError(d);
                      return;
                    }
                    c.Yc = !0;
                  }
                  Ni(b, c, 4);
                }
                function fj(b, c, d, e, f) {
                  if (!c.ec) return Promise.resolve();
                  d = ke(
                    b.a.L,
                    c.type,
                    b.c.periods[d].startTime - c.stream.presentationTimeOffset,
                    e,
                    f
                  );
                  if (!c.stream.initSegmentReference) return d;
                  b = gj(b, c, c.stream.initSegmentReference)
                    .then(
                      function (b) {
                        if (!this.f)
                          return he(
                            this.a.L,
                            c.type,
                            b,
                            null,
                            null,
                            c.stream.closedCaptions &&
                              0 < c.stream.closedCaptions.size
                          );
                      }.bind(b)
                    )
                    ["catch"](function (b) {
                      c.ec = !0;
                      return Promise.reject(b);
                    });
                  return Promise.all([d, b]);
                }
                function hj(b, c, d, e, f, g, h) {
                  var k = f.closedCaptions && 0 < f.closedCaptions.size;
                  null != f.emsgSchemeIdUris &&
                    0 < f.emsgSchemeIdUris.length &&
                    new S()
                      .ca("emsg", b.K.bind(b, e, g, f.emsgSchemeIdUris))
                      .parse(h);
                  return kj(b, c, d)
                    .then(
                      function () {
                        if (!this.f)
                          return he(
                            this.a.L,
                            c.type,
                            h,
                            g.startTime + e.startTime,
                            g.endTime + e.startTime,
                            k
                          );
                      }.bind(b)
                    )
                    .then(
                      function () {
                        if (!this.f)
                          return (c.lb = f), (c.xa = g), Promise.resolve();
                      }.bind(b)
                    );
                }
                Di.prototype.K = function (b, c, d, e) {
                  var f = e.reader.Wc(),
                    g = e.reader.Wc(),
                    h = e.reader.D(),
                    k = e.reader.D(),
                    l = e.reader.D(),
                    m = e.reader.D();
                  e = e.reader.Va(e.reader.I.byteLength - e.reader.aa());
                  b = b.startTime + c.startTime + k / h;
                  if (d.includes(f))
                    if ("urn:mpeg:dash:event:2012" == f) this.a.cf();
                    else
                      this.a.onEvent(
                        new I("emsg", {
                          detail: {
                            startTime: b,
                            endTime: b + l / h,
                            schemeIdUri: f,
                            value: g,
                            timescale: h,
                            presentationTimeDelta: k,
                            eventDuration: l,
                            id: m,
                            messageData: e,
                          },
                        })
                      );
                };
                function kj(b, c, d) {
                  var e = Math.max(
                      b.g.bufferBehind,
                      b.c.presentationTimeline.a
                    ),
                    f = de(b.a.L, c.type);
                  if (null == f) return Promise.resolve();
                  d = d - f - e;
                  return 0 >= d
                    ? Promise.resolve()
                    : b.a.L.remove(c.type, f, f + d).then(
                        function () {}.bind(b)
                      );
                }
                function ij(b, c) {
                  if (!b.o) {
                    var d = Array.from(b.b.values());
                    if (1 != d.length || "text" != d[0].type)
                      b.o = d.every(function (b) {
                        return "text" == b.type ? !0 : !b.Ja && !b.Na && b.xa;
                      });
                    if (b.o) {
                      d = Ri(b, c);
                      b.h[d] ||
                        Yi(b, d)
                          .then(
                            function () {
                              this.f || this.a.Gd();
                            }.bind(b)
                          )
                          ["catch"](td.Gb);
                      for (d = 0; d < b.c.periods.length; ++d)
                        Yi(b, d)["catch"](td.Gb);
                      b.a.mf && b.a.mf();
                    }
                  }
                }
                function bj(b, c) {
                  var d = Ri(b, c.stream);
                  if (c.ya != d) {
                    var e = c.ya,
                      f = Array.from(b.b.values());
                    f.every(function (b) {
                      return b.ya == e;
                    }) &&
                      f.every(lj) &&
                      Yi(b, e)
                        .then(
                          function () {
                            if (
                              !this.f &&
                              f.every(
                                function (b) {
                                  var c = lj(b),
                                    d = Ri(this, b.stream);
                                  return c && b.ya == e && d != e;
                                }.bind(this)
                              )
                            ) {
                              var b = this.c.periods[e],
                                c = this.a.Hd(b),
                                d = new Map();
                              c.variant &&
                                c.variant.video &&
                                d.set("video", c.variant.video);
                              c.variant &&
                                c.variant.audio &&
                                d.set("audio", c.variant.audio);
                              c.text && d.set("text", c.text);
                              var l = r(this.b.keys());
                              for (c = l.next(); !c.done; c = l.next())
                                if (((c = c.value), !d.has(c) && "text" != c)) {
                                  this.a.onError(new D(2, 5, 5005));
                                  return;
                                }
                              l = r(Array.from(d.keys()));
                              for (c = l.next(); !c.done; c = l.next())
                                if (((c = c.value), !this.b.has(c)))
                                  if ("text" == c)
                                    Gi(
                                      this,
                                      null,
                                      null,
                                      d.get("text"),
                                      b.startTime
                                    ),
                                      d["delete"](c);
                                  else {
                                    this.a.onError(new D(2, 5, 5005));
                                    return;
                                  }
                              b = r(Array.from(this.b.keys()));
                              for (c = b.next(); !c.done; c = b.next())
                                (c = c.value),
                                  (l = d.get(c))
                                    ? (Pi(this, l, !1, 0),
                                      Ni(this, this.b.get(c), 0))
                                    : this.b["delete"](c);
                              this.a.Gd();
                            }
                          }.bind(b)
                        )
                        ["catch"](td.Gb);
                  }
                }
                function lj(b) {
                  return !b.Ea && null == b.Ba && !b.Ja && !b.Na;
                }
                function Fi(b, c) {
                  var d = di(b.c.periods, c + xd);
                  return d ? b.c.periods.indexOf(d) : 0;
                }
                function Ri(b, c) {
                  for (var d = b.c.periods, e = 0; e < d.length; e++) {
                    for (
                      var f = d[e],
                        g = new Set(),
                        h = r(f.variants),
                        k = h.next();
                      !k.done;
                      k = h.next()
                    )
                      (k = k.value),
                        k.audio && g.add(k.audio),
                        k.video && g.add(k.video),
                        k.video &&
                          k.video.trickModeVideo &&
                          g.add(k.video.trickModeVideo);
                    f = r(f.textStreams);
                    for (h = f.next(); !h.done; h = f.next()) g.add(h.value);
                    if (g.has(c)) return e;
                  }
                  return -1;
                }
                function gj(b, c, d) {
                  d = og(d.c(), d.b, d.a, b.g.retryParameters);
                  b = b.a.nb.request(1, d);
                  c.Hb = b;
                  return b.promise.then(function (b) {
                    c.Hb = null;
                    return b.data;
                  });
                }
                function Ui(b, c, d, e) {
                  t(function g() {
                    var h, k, l;
                    return y(g, function (g) {
                      switch (g.l) {
                        case 1:
                          return (
                            (c.Ja = !1),
                            (c.qc = !1),
                            (c.Wb = 0),
                            (c.Na = !0),
                            e
                              ? ((k = b.a.Qa()),
                                (l = b.a.L.Y()),
                                (h = b.a.L.remove(c.type, k + e, l)))
                              : (h = je(b.a.L, c.type).then(
                                  function () {
                                    if (!this.f && d)
                                      return this.a.L.flush(c.type);
                                  }.bind(b)
                                )),
                            u(g, h, 2)
                          );
                        case 2:
                          if (b.f) return g["return"]();
                          c.lb = null;
                          c.xa = null;
                          c.Na = !1;
                          c.endOfStream = !1;
                          Ni(b, c, 0);
                          v(g);
                      }
                    });
                  });
                }
                function Ni(b, c, d) {
                  c.Ba = new sb(function () {
                    Zi(b, c);
                  }).O(d);
                }
                function Ei(b) {
                  null != b.Ba && (b.Ba.stop(), (b.Ba = null));
                }
                function aj(b, c) {
                  zb(b.F).then(
                    function () {
                      this.f ||
                        (this.a.onError(c),
                        c.handled || this.g.failureCallback(c));
                    }.bind(b)
                  );
                }
                function mj(b, c, d, e, f, g) {
                  if (200 <= d && 299 >= d && 202 != d)
                    return (
                      f && (e = f),
                      {
                        uri: e,
                        data: c,
                        headers: b,
                        fromCache: !!b["x-shaka-from-cache"],
                      }
                    );
                  f = null;
                  try {
                    f = xc(c);
                  } catch (h) {}
                  throw new D(
                    401 == d || 403 == d ? 2 : 1,
                    1,
                    1001,
                    e,
                    d,
                    f,
                    b,
                    g
                  );
                }
                function nj(b, c, d, e) {
                  var f = new nj.b();
                  gc(c.headers).forEach(function (b, c) {
                    f.append(c, b);
                  });
                  var g = new nj.a(),
                    h = { pd: !1, ce: !1 };
                  b = nj.h(
                    b,
                    d,
                    {
                      body: c.body || void 0,
                      headers: f,
                      method: c.method,
                      signal: g.signal,
                      credentials: c.allowCrossSiteCredentials
                        ? "include"
                        : void 0,
                    },
                    h,
                    e
                  );
                  b = new H(b, function () {
                    h.pd = !0;
                    g.abort();
                    return Promise.resolve();
                  });
                  if ((c = c.retryParameters.timeout)) {
                    var k = new B(function () {
                      h.ce = !0;
                      g.abort();
                    });
                    k.O(c / 1e3);
                    b["finally"](function () {
                      k.stop();
                    });
                  }
                  return b;
                }
                z("shaka.net.HttpFetchPlugin", nj);
                nj.h = function (b, c, d, e, f) {
                  return t(function h() {
                    var k, l, m, n, q, x, w, A, C, E, F, V, Y, wa;
                    return y(h, function (h) {
                      switch (h.l) {
                        case 1:
                          return (
                            (k = nj.g),
                            (l = nj.c),
                            (x = q = 0),
                            (w = Date.now()),
                            ya(h, 2),
                            u(h, k(b, d), 4)
                          );
                        case 4:
                          return (
                            (m = h.s),
                            (A = m.clone().body.getReader()),
                            (E = (C = m.headers.get("Content-Length"))
                              ? parseInt(C, 10)
                              : 0),
                            (F = function (b) {
                              function c() {
                                return t(function ja() {
                                  var d, e;
                                  return y(ja, function (h) {
                                    switch (h.l) {
                                      case 1:
                                        return ya(h, 2), u(h, A.read(), 4);
                                      case 4:
                                        d = h.s;
                                        Aa(h, 3);
                                        break;
                                      case 2:
                                        return Da(h), h["return"]();
                                      case 3:
                                        d.done || (q += d.value.byteLength);
                                        e = Date.now();
                                        if (100 < e - w || d.done)
                                          f(e - w, q - x, E - q),
                                            (x = q),
                                            (w = e);
                                        d.done
                                          ? b.close()
                                          : (b.enqueue(d.value), c());
                                        v(h);
                                    }
                                  });
                                });
                              }
                              c();
                            }),
                            new l({ start: F }),
                            u(h, m.arrayBuffer(), 5)
                          );
                        case 5:
                          n = h.s;
                          Aa(h, 3);
                          break;
                        case 2:
                          V = Da(h);
                          if (e.pd) throw new D(1, 1, 7001, b, c);
                          if (e.ce) throw new D(1, 1, 1003, b, c);
                          throw new D(1, 1, 1002, b, V, c);
                        case 3:
                          return (
                            (Y = {}),
                            (wa = m.headers),
                            wa.forEach(function (b, c) {
                              Y[c.trim()] = b;
                            }),
                            h["return"](mj(Y, n, m.status, b, m.url, c))
                          );
                      }
                    });
                  });
                };
                nj.isSupported = function () {
                  if (window.ReadableStream)
                    try {
                      new ReadableStream({});
                    } catch (b) {
                      return !1;
                    }
                  else return !1;
                  return !(!window.fetch || !window.AbortController);
                };
                nj.isSupported = nj.isSupported;
                nj.g = window.fetch;
                nj.a = window.AbortController;
                nj.c = window.ReadableStream;
                nj.b = window.Headers;
                nj.isSupported() && (Rb("http", nj, 2), Rb("https", nj, 2));
                function oj(b, c, d, e) {
                  var f = new oj.f(),
                    g = Date.now(),
                    h = 0,
                    k = new Promise(function (k, m) {
                      f.open(c.method, b, !0);
                      f.responseType = "arraybuffer";
                      f.timeout = c.retryParameters.timeout;
                      f.withCredentials = c.allowCrossSiteCredentials;
                      f.onabort = function () {
                        m(new D(1, 1, 7001, b, d));
                      };
                      f.onload = function (c) {
                        c = c.target;
                        var e = c.getAllResponseHeaders().trim().split("\r\n"),
                          f = {};
                        e = r(e);
                        for (var g = e.next(); !g.done; g = e.next())
                          (g = g.value.split(": ")),
                            (f[g[0].toLowerCase()] = g.slice(1).join(": "));
                        try {
                          var h = mj(
                            f,
                            c.response,
                            c.status,
                            b,
                            c.responseURL,
                            d
                          );
                          k(h);
                        } catch (E) {
                          m(E);
                        }
                      };
                      f.onerror = function (c) {
                        m(new D(1, 1, 1002, b, c, d));
                      };
                      f.ontimeout = function () {
                        m(new D(1, 1, 1003, b, d));
                      };
                      f.onprogress = function (b) {
                        var c = Date.now();
                        if (
                          100 < c - g ||
                          (b.lengthComputable && b.loaded == b.total)
                        )
                          e(c - g, b.loaded - h, b.total - b.loaded),
                            (h = b.loaded),
                            (g = c);
                      };
                      for (var l in c.headers)
                        f.setRequestHeader(l.toLowerCase(), c.headers[l]);
                      f.send(c.body);
                    });
                  return new H(k, function () {
                    f.abort();
                    return Promise.resolve();
                  });
                }
                z("shaka.net.HttpXHRPlugin", oj);
                oj.f = window.XMLHttpRequest;
                Rb("http", oj, 1);
                Rb("https", oj, 1);
                function pj() {
                  this.a = this.f = this.b = 0;
                  this.c = new Map();
                  this.g = 0;
                }
                function qj(b, c) {
                  b.b += c;
                  var d = b.g;
                  b.g++;
                  b.c.set(d, c);
                  return d;
                }
                pj.prototype.close = function (b, c) {
                  if (this.c.has(b)) {
                    var d = this.c.get(b);
                    this.c["delete"](b);
                    this.f += d;
                    this.a += c;
                  }
                };
                function rj(b, c) {
                  this.g = b;
                  this.b = new Map();
                  this.c = !1;
                  this.f = c;
                  this.a = new pj();
                }
                rj.prototype.destroy = function () {
                  this.c = !0;
                  return Promise.all(this.b.values()).then(
                    function () {},
                    function () {}
                  );
                };
                function sj(b, c, d, e, f) {
                  var g = qj(b.a, e);
                  e = b.b.get(c) || Promise.resolve();
                  b.b.set(
                    c,
                    e.then(function () {
                      return t(function k() {
                        var c;
                        return y(k, function (e) {
                          switch (e.l) {
                            case 1:
                              return u(e, tj(b, d), 2);
                            case 2:
                              c = e.s;
                              if (b.c) throw new D(2, 9, 7001);
                              b.a.close(g, c.byteLength);
                              var k = b.a;
                              b.f(0 == k.b ? 0 : k.f / k.b, b.a.a);
                              return e["return"](f(c));
                          }
                        });
                      });
                    })
                  );
                }
                function uj(b) {
                  return t(function d() {
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return u(d, Promise.all(b.b.values()), 2);
                        case 2:
                          return d["return"](b.a.a);
                      }
                    });
                  });
                }
                function tj(b, c) {
                  return t(function e() {
                    var f, g;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return (f = b.g.request(1, c)), u(e, f.promise, 2);
                        case 2:
                          return (g = e.s), e["return"](g.data);
                      }
                    });
                  });
                }
                function vj(b, c) {
                  var d = this;
                  this.c = b;
                  this.b = b.objectStore(c);
                  this.a = new G();
                  b.onabort = function (b) {
                    b.preventDefault();
                    d.a.reject();
                  };
                  b.onerror = function (b) {
                    b.preventDefault();
                    d.a.reject();
                  };
                  b.oncomplete = function () {
                    d.a.resolve();
                  };
                }
                vj.prototype.abort = function () {
                  try {
                    this.c.abort();
                  } catch (b) {}
                  return this.a["catch"](function () {});
                };
                function wj(b, c) {
                  return new Promise(function (d, e) {
                    var f = b.b.openCursor();
                    f.onerror = e;
                    f.onsuccess = function (b) {
                      b = b.target.result;
                      if (!b) return d();
                      c(b.key, b.value, b);
                      b["continue"]();
                    };
                  });
                }
                vj.prototype.store = function () {
                  return this.b;
                };
                vj.prototype.promise = function () {
                  return this.a;
                };
                function xj(b) {
                  this.b = b;
                  this.a = [];
                }
                xj.prototype.destroy = function () {
                  return Promise.all(
                    this.a.map(function (b) {
                      return b.abort();
                    })
                  );
                };
                function yj(b, c) {
                  return zj(b, c, "readonly");
                }
                function Aj(b, c) {
                  return zj(b, c, "readwrite");
                }
                function zj(b, c, d) {
                  d = b.b.transaction([c], d);
                  var e = new vj(d, c);
                  b.a.push(e);
                  e.promise().then(
                    function () {
                      Kb(b.a, e);
                    },
                    function () {
                      Kb(b.a, e);
                    }
                  );
                  return e;
                }
                function Bj(b) {
                  this.a = new xj(b);
                }
                Bj.prototype.destroy = function () {
                  return this.a.destroy();
                };
                Bj.prototype.getAll = function () {
                  var b = this;
                  return t(function d() {
                    var e, f;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (e = yj(b.a, "session-ids")),
                            (f = []),
                            u(
                              d,
                              wj(e, function (b, d) {
                                f.push(d);
                              }),
                              2
                            )
                          );
                        case 2:
                          return u(d, e.promise(), 3);
                        case 3:
                          return d["return"](f);
                      }
                    });
                  });
                };
                Bj.prototype.add = function (b) {
                  var c = Aj(this.a, "session-ids"),
                    d = c.store();
                  b = r(b);
                  for (var e = b.next(); !e.done; e = b.next()) d.add(e.value);
                  return c.promise();
                };
                Bj.prototype.remove = function (b) {
                  var c = this;
                  return t(function e() {
                    var f;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return (
                            (f = Aj(c.a, "session-ids")),
                            u(
                              e,
                              wj(f, function (c, e, f) {
                                0 <= b.indexOf(e.sessionId) && f["delete"]();
                              }),
                              2
                            )
                          );
                        case 2:
                          return u(e, f.promise(), 0);
                      }
                    });
                  });
                };
                function Cj() {
                  this.a = new Map();
                }
                Cj.prototype.destroy = function () {
                  for (
                    var b = [], c = r(this.a.values()), d = c.next();
                    !d.done;
                    d = c.next()
                  )
                    b.push(d.value.destroy());
                  this.a.clear();
                  return Promise.all(b);
                };
                Cj.prototype.init = function () {
                  var b = this;
                  Dj.forEach(function (c, d) {
                    var e = c();
                    e && b.a.set(d, e);
                  });
                  for (
                    var c = [], d = r(this.a.values()), e = d.next();
                    !e.done;
                    e = d.next()
                  )
                    c.push(e.value.init());
                  return Promise.all(c);
                };
                function Ej(b) {
                  var c = null;
                  b.a.forEach(function (b, e) {
                    b.getCells().forEach(function (b, d) {
                      b.hasFixedKeySpace() ||
                        c ||
                        (c = { path: { ra: e, $: d }, $: b });
                    });
                  });
                  if (c) return c;
                  throw new D(
                    2,
                    9,
                    9013,
                    "Could not find a cell that supports add-operations"
                  );
                }
                function Fj(b, c) {
                  b.a.forEach(function (b, e) {
                    b.getCells().forEach(function (b, d) {
                      c({ ra: e, $: d }, b);
                    });
                  });
                }
                function Gj(b, c, d) {
                  b = b.a.get(c);
                  if (!b)
                    throw new D(
                      2,
                      9,
                      9013,
                      "Could not find mechanism with name " + c
                    );
                  c = b.getCells().get(d);
                  if (!c)
                    throw new D(
                      2,
                      9,
                      9013,
                      "Could not find cell with name " + d
                    );
                  return c;
                }
                function Hj(b, c) {
                  b.a.forEach(function (b) {
                    c(b.getEmeSessionCell());
                  });
                }
                function Ij(b) {
                  var c = Array.from(b.a.keys());
                  if (!c.length)
                    throw new D(
                      2,
                      9,
                      9e3,
                      "No supported storage mechanisms found"
                    );
                  return b.a.get(c[0]).getEmeSessionCell();
                }
                Cj.prototype.erase = function () {
                  var b = this;
                  return t(function d() {
                    var e, f, g;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (e = Array.from(b.a.values())),
                            (f = 0 < e.length),
                            f ||
                              ((g = Dj),
                              g.forEach(function (b) {
                                (b = b()) && e.push(b);
                              })),
                            u(
                              d,
                              Promise.all(
                                e.map(function (b) {
                                  return b.erase();
                                })
                              ),
                              2
                            )
                          );
                        case 2:
                          if (f) d.A(0);
                          else
                            return u(
                              d,
                              Promise.all(
                                e.map(function (b) {
                                  return b.destroy();
                                })
                              ),
                              0
                            );
                      }
                    });
                  });
                };
                function Jj(b, c) {
                  Dj.set(b, c);
                }
                z("shaka.offline.StorageMuxer.register", Jj);
                z("shaka.offline.StorageMuxer.unregister", function (b) {
                  Dj["delete"](b);
                });
                var Dj = new Map();
                function Kj(b) {
                  this.a = new xj(b);
                }
                p = Kj.prototype;
                p.destroy = function () {
                  return this.a.destroy();
                };
                p.hasFixedKeySpace = function () {
                  return !0;
                };
                p.addSegments = function () {
                  return Lj("segment");
                };
                p.removeSegments = function (b, c) {
                  return Mj(this, "segment", b, c);
                };
                p.getSegments = function (b) {
                  return Nj(this, "segment", b).then(function (b) {
                    return b.map(Oj);
                  });
                };
                p.addManifests = function () {
                  return Lj("manifest");
                };
                p.updateManifestExpiration = function (b, c) {
                  var d = Aj(this.a, "manifest"),
                    e = d.store(),
                    f = new G();
                  e.get(b).onsuccess = function (d) {
                    (d = d.target.result)
                      ? ((d.expiration = c), e.put(d), f.resolve())
                      : f.reject(
                          new D(2, 9, 9012, "Could not find values for " + b)
                        );
                  };
                  return d.promise().then(function () {
                    return f;
                  });
                };
                p.removeManifests = function (b, c) {
                  return Mj(this, "manifest", b, c);
                };
                p.getManifests = function (b) {
                  return Nj(this, "manifest", b).then(function (b) {
                    return b.map(Pj);
                  });
                };
                p.getAllManifests = function () {
                  var b = this;
                  return t(function d() {
                    var e, f;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (e = yj(b.a, "manifest")),
                            (f = new Map()),
                            u(
                              d,
                              wj(e, function (b, d) {
                                f.set(b, Pj(d));
                              }),
                              2
                            )
                          );
                        case 2:
                          return u(d, e.promise(), 3);
                        case 3:
                          return d["return"](f);
                      }
                    });
                  });
                };
                function Lj(b) {
                  return Promise.reject(
                    new D(2, 9, 9011, "Cannot add new value to " + b)
                  );
                }
                function Mj(b, c, d, e) {
                  b = Aj(b.a, c);
                  var f = b.store();
                  d.forEach(function (b) {
                    f["delete"](b).onsuccess = function () {
                      return e(b);
                    };
                  });
                  return b.promise();
                }
                function Nj(b, c, d) {
                  b = yj(b.a, c);
                  var e = b.store(),
                    f = {},
                    g = [];
                  d.forEach(function (b) {
                    e.get(b).onsuccess = function (c) {
                      c = c.target.result;
                      void 0 == c && g.push(b);
                      f[b] = c;
                    };
                  });
                  return b.promise().then(function () {
                    return g.length
                      ? Promise.reject(
                          new D(2, 9, 9012, "Could not find values for " + g)
                        )
                      : d.map(function (b) {
                          return f[b];
                        });
                  });
                }
                function Pj(b) {
                  return {
                    originalManifestUri: b.originalManifestUri,
                    duration: b.duration,
                    size: b.size,
                    expiration: null == b.expiration ? Infinity : b.expiration,
                    periods: b.periods.map(Qj),
                    sessionIds: b.sessionIds,
                    drmInfo: b.drmInfo,
                    appMetadata: b.appMetadata,
                  };
                }
                function Qj(b) {
                  Rj(b);
                  b.streams.forEach(function () {});
                  return { startTime: b.startTime, streams: b.streams.map(Sj) };
                }
                function Sj(b) {
                  var c = b.Ve ? Tj(b.Ve) : null;
                  return {
                    id: b.id,
                    originalId: null,
                    primary: b.primary,
                    presentationTimeOffset: b.presentationTimeOffset,
                    contentType: b.contentType,
                    mimeType: b.mimeType,
                    codecs: b.codecs,
                    frameRate: b.frameRate,
                    kind: b.kind,
                    language: b.language,
                    label: b.label,
                    width: b.width,
                    height: b.height,
                    initSegmentKey: c,
                    encrypted: b.encrypted,
                    keyId: b.keyId,
                    segments: b.segments.map(Uj),
                    variantIds: b.variantIds,
                  };
                }
                function Uj(b) {
                  var c = Tj(b.uri);
                  return {
                    startTime: b.startTime,
                    endTime: b.endTime,
                    dataKey: c,
                  };
                }
                function Oj(b) {
                  return { data: b.data };
                }
                function Tj(b) {
                  var c;
                  if (
                    (c = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(b)) ||
                    (c = /^offline:segment\/([0-9]+)$/.exec(b))
                  )
                    return Number(c[1]);
                  throw new D(2, 9, 9004, "Could not parse uri " + b);
                }
                function Rj(b) {
                  var c = b.streams.filter(function (b) {
                      return "audio" == b.contentType;
                    }),
                    d = b.streams.filter(function (b) {
                      return "video" == b.contentType;
                    });
                  if (
                    !c.every(function (b) {
                      return b.variantIds;
                    }) ||
                    !d.every(function (b) {
                      return b.variantIds;
                    })
                  ) {
                    c.forEach(function (b) {
                      b.variantIds = [];
                    });
                    d.forEach(function (b) {
                      b.variantIds = [];
                    });
                    var e = 0;
                    if (d.length && !c.length) {
                      var f = e++;
                      d.forEach(function (b) {
                        b.variantIds.push(f);
                      });
                    }
                    if (!d.length && c.length) {
                      var g = e++;
                      c.forEach(function (b) {
                        b.variantIds.push(g);
                      });
                    }
                    d.length &&
                      c.length &&
                      c.forEach(function (b) {
                        d.forEach(function (c) {
                          var d = e++;
                          b.variantIds.push(d);
                          c.variantIds.push(d);
                        });
                      });
                  }
                }
                function Vj(b, c, d, e) {
                  this.a = new xj(b);
                  this.c = c;
                  this.b = d;
                  this.f = e;
                }
                p = Vj.prototype;
                p.destroy = function () {
                  return this.a.destroy();
                };
                p.hasFixedKeySpace = function () {
                  return this.f;
                };
                p.addSegments = function (b) {
                  return Wj(this, this.c, b);
                };
                p.removeSegments = function (b, c) {
                  return Xj(this, this.c, b, c);
                };
                p.getSegments = function (b) {
                  return Yj(this, this.c, b);
                };
                p.addManifests = function (b) {
                  return Wj(this, this.b, b);
                };
                p.updateManifestExpiration = function (b, c) {
                  var d = Aj(this.a, this.b),
                    e = d.store();
                  e.get(b).onsuccess = function (d) {
                    if ((d = d.target.result)) (d.expiration = c), e.put(d, b);
                  };
                  return d.promise();
                };
                p.removeManifests = function (b, c) {
                  return Xj(this, this.b, b, c);
                };
                p.getManifests = function (b) {
                  return Yj(this, this.b, b);
                };
                p.getAllManifests = function () {
                  var b = this;
                  return t(function d() {
                    var e, f;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (e = yj(b.a, b.b)),
                            (f = new Map()),
                            u(
                              d,
                              wj(e, function (b, d) {
                                f.set(b, d);
                              }),
                              2
                            )
                          );
                        case 2:
                          return u(d, e.promise(), 3);
                        case 3:
                          return d["return"](f);
                      }
                    });
                  });
                };
                function Wj(b, c, d) {
                  if (b.f)
                    return Promise.reject(
                      new D(1, 9, 9011, "Cannot add new value to " + c)
                    );
                  b = Aj(b.a, c);
                  var e = b.store(),
                    f = [];
                  d.forEach(function (b) {
                    e.add(b).onsuccess = function (b) {
                      f.push(b.target.result);
                    };
                  });
                  return b.promise().then(function () {
                    return f;
                  });
                }
                function Xj(b, c, d, e) {
                  b = Aj(b.a, c);
                  var f = b.store();
                  d.forEach(function (b) {
                    f["delete"](b).onsuccess = function () {
                      return e(b);
                    };
                  });
                  return b.promise();
                }
                function Yj(b, c, d) {
                  b = yj(b.a, c);
                  var e = b.store(),
                    f = {},
                    g = [];
                  d.forEach(function (b) {
                    var c = e.get(b);
                    c.onsuccess = function () {
                      void 0 == c.result && g.push(b);
                      f[b] = c.result;
                    };
                  });
                  return b.promise().then(function () {
                    return g.length
                      ? Promise.reject(
                          new D(1, 9, 9012, "Could not find values for " + g)
                        )
                      : d.map(function (b) {
                          return f[b];
                        });
                  });
                }
                function Zj() {
                  this.g = this.c = this.b = this.a = this.f = null;
                }
                p = Zj.prototype;
                p.init = function () {
                  var b = this,
                    c = new G(),
                    d = window.indexedDB.open("shaka_offline_db", 4);
                  d.onsuccess = function (d) {
                    d = d.target.result;
                    b.f = d;
                    var e = d.objectStoreNames;
                    e =
                      e.contains("manifest") && e.contains("segment")
                        ? new Kj(d)
                        : null;
                    b.a = e;
                    e = d.objectStoreNames;
                    e =
                      e.contains("manifest-v2") && e.contains("segment-v2")
                        ? new Vj(d, "segment-v2", "manifest-v2", !0)
                        : null;
                    b.b = e;
                    e = d.objectStoreNames;
                    e =
                      e.contains("manifest-v3") && e.contains("segment-v3")
                        ? new Vj(d, "segment-v3", "manifest-v3", !1)
                        : null;
                    b.c = e;
                    d = d.objectStoreNames.contains("session-ids")
                      ? new Bj(d)
                      : null;
                    b.g = d;
                    c.resolve();
                  };
                  d.onupgradeneeded = function (b) {
                    b = b.target.result;
                    for (
                      var c = r(["segment-v3", "manifest-v3", "session-ids"]),
                        d = c.next();
                      !d.done;
                      d = c.next()
                    )
                      (d = d.value),
                        b.objectStoreNames.contains(d) ||
                          b.createObjectStore(d, { autoIncrement: !0 });
                  };
                  d.onerror = function (b) {
                    c.reject(new D(2, 9, 9001, d.error));
                    b.preventDefault();
                  };
                  return c;
                };
                p.destroy = function () {
                  var b = this;
                  return t(function d() {
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          if (!b.a) {
                            d.A(2);
                            break;
                          }
                          return u(d, b.a.destroy(), 2);
                        case 2:
                          if (!b.b) {
                            d.A(4);
                            break;
                          }
                          return u(d, b.b.destroy(), 4);
                        case 4:
                          if (!b.c) {
                            d.A(6);
                            break;
                          }
                          return u(d, b.c.destroy(), 6);
                        case 6:
                          if (!b.g) {
                            d.A(8);
                            break;
                          }
                          return u(d, b.g.destroy(), 8);
                        case 8:
                          b.f && b.f.close(), v(d);
                      }
                    });
                  });
                };
                p.getCells = function () {
                  var b = new Map();
                  this.a && b.set("v1", this.a);
                  this.b && b.set("v2", this.b);
                  this.c && b.set("v3", this.c);
                  return b;
                };
                p.getEmeSessionCell = function () {
                  return this.g;
                };
                p.erase = function () {
                  var b = this;
                  return t(function d() {
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          if (!b.a) {
                            d.A(2);
                            break;
                          }
                          return u(d, b.a.destroy(), 2);
                        case 2:
                          if (!b.b) {
                            d.A(4);
                            break;
                          }
                          return u(d, b.b.destroy(), 4);
                        case 4:
                          if (!b.c) {
                            d.A(6);
                            break;
                          }
                          return u(d, b.c.destroy(), 6);
                        case 6:
                          return b.f && b.f.close(), u(d, ak(), 8);
                        case 8:
                          return (
                            (b.f = null),
                            (b.a = null),
                            (b.b = null),
                            (b.c = null),
                            u(d, b.init(), 0)
                          );
                      }
                    });
                  });
                };
                function ak() {
                  var b = new G(),
                    c = window.indexedDB.deleteDatabase("shaka_offline_db");
                  c.onblocked = function () {};
                  c.onsuccess = function () {
                    b.resolve();
                  };
                  c.onerror = function (d) {
                    b.reject(new D(2, 9, 9001, c.error));
                    d.preventDefault();
                  };
                  return b;
                }
                Jj("idb", function () {
                  return window.indexedDB ? new Zj() : null;
                });
                function bk(b, c, d, e) {
                  this.a = b;
                  this.g = c;
                  this.f = d;
                  this.c = e;
                  this.b = ["offline:", b, "/", c, "/", d, "/", e].join("");
                }
                bk.prototype.ra = function () {
                  return this.g;
                };
                bk.prototype.$ = function () {
                  return this.f;
                };
                bk.prototype.key = function () {
                  return this.c;
                };
                bk.prototype.toString = function () {
                  return this.b;
                };
                function ck(b) {
                  b = /^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(b);
                  if (null == b) return null;
                  var c = b[1];
                  if ("manifest" != c && "segment" != c) return null;
                  var d = b[2];
                  if (!d) return null;
                  var e = b[3];
                  return e && null != c ? new bk(c, d, e, Number(b[4])) : null;
                }
                function dk(b, c) {
                  this.b = b;
                  this.a = c;
                }
                function ek(b, c) {
                  var d = new W(null, 0);
                  d.ta(c.duration);
                  var e = c.periods.map(function (c) {
                      return fk(b, c, d);
                    }),
                    f = c.drmInfo ? [c.drmInfo] : [];
                  c.drmInfo &&
                    e.forEach(function (b) {
                      b.variants.forEach(function (b) {
                        b.drmInfos = f;
                      });
                    });
                  return {
                    presentationTimeline: d,
                    minBufferTime: 2,
                    offlineSessionIds: c.sessionIds,
                    periods: e,
                  };
                }
                function fk(b, c, d) {
                  var e = c.streams.filter(function (b) {
                      return "audio" == b.contentType;
                    }),
                    f = c.streams.filter(function (b) {
                      return "video" == b.contentType;
                    });
                  e = gk(b, e, f);
                  f = c.streams
                    .filter(function (b) {
                      return "text" == b.contentType;
                    })
                    .map(function (c) {
                      return hk(b, c);
                    });
                  c.streams.forEach(function (e) {
                    e = e.segments.map(function (c, d) {
                      return ik(b, d, c);
                    });
                    d.ob(e, c.startTime);
                  });
                  return {
                    startTime: c.startTime,
                    variants: Array.from(e.values()),
                    textStreams: f,
                  };
                }
                function gk(b, c, d) {
                  for (
                    var e = new Set(), f = r(c), g = f.next();
                    !g.done;
                    g = f.next()
                  ) {
                    var h = r(g.value.variantIds);
                    for (g = h.next(); !g.done; g = h.next()) e.add(g.value);
                  }
                  f = r(d);
                  for (g = f.next(); !g.done; g = f.next())
                    for (
                      h = r(g.value.variantIds), g = h.next();
                      !g.done;
                      g = h.next()
                    )
                      e.add(g.value);
                  f = new Map();
                  e = r(e);
                  for (g = e.next(); !g.done; g = e.next())
                    (g = g.value),
                      f.set(g, {
                        id: g,
                        language: "",
                        primary: !1,
                        audio: null,
                        video: null,
                        bandwidth: 0,
                        drmInfos: [],
                        allowedByApplication: !0,
                        allowedByKeySystem: !0,
                      });
                  c = r(c);
                  for (e = c.next(); !e.done; e = c.next())
                    for (
                      e = e.value,
                        g = hk(b, e),
                        h = r(e.variantIds),
                        e = h.next();
                      !e.done;
                      e = h.next()
                    )
                      (e = f.get(e.value)),
                        (e.language = g.language),
                        (e.primary = e.primary || g.primary),
                        (e.audio = g);
                  d = r(d);
                  for (c = d.next(); !c.done; c = d.next())
                    for (
                      e = c.value,
                        c = hk(b, e),
                        g = r(e.variantIds),
                        e = g.next();
                      !e.done;
                      e = g.next()
                    )
                      (e = f.get(e.value)),
                        (e.primary = e.primary || c.primary),
                        (e.video = c);
                  return f;
                }
                function hk(b, c) {
                  var d = c.segments.map(function (c, d) {
                      return ik(b, d, c);
                    }),
                    e = new T(d);
                  d = {
                    id: c.id,
                    originalId: c.originalId,
                    createSegmentIndex: function () {
                      return Promise.resolve();
                    },
                    findSegmentPosition: function (b) {
                      return e.find(b);
                    },
                    getSegmentReference: function (b) {
                      return e.get(b);
                    },
                    initSegmentReference: null,
                    presentationTimeOffset: c.presentationTimeOffset,
                    mimeType: c.mimeType,
                    codecs: c.codecs,
                    width: c.width || void 0,
                    height: c.height || void 0,
                    frameRate: c.frameRate || void 0,
                    kind: c.kind,
                    encrypted: c.encrypted,
                    keyId: c.keyId,
                    language: c.language,
                    label: c.label || null,
                    type: c.contentType,
                    primary: c.primary,
                    trickModeVideo: null,
                    emsgSchemeIdUris: null,
                    roles: [],
                    channelsCount: null,
                    closedCaptions: null,
                  };
                  null != c.initSegmentKey &&
                    (d.initSegmentReference = jk(b, c.initSegmentKey));
                  return d;
                }
                function ik(b, c, d) {
                  var e = new bk("segment", b.b, b.a, d.dataKey);
                  return new Q(
                    c,
                    d.startTime,
                    d.endTime,
                    function () {
                      return [e.toString()];
                    },
                    0,
                    null
                  );
                }
                function jk(b, c) {
                  var d = new bk("segment", b.b, b.a, c);
                  return new If(
                    function () {
                      return [d.toString()];
                    },
                    0,
                    null
                  );
                }
                function kk() {
                  this.a = null;
                }
                p = kk.prototype;
                p.configure = function () {};
                p.start = function (b) {
                  var c = this;
                  return t(function e() {
                    var f, g, h, k, l, m;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          f = ck(b);
                          c.a = f;
                          if (null == f || "manifest" != f.a)
                            return e["return"](
                              Promise.reject(new D(2, 1, 9004, f))
                            );
                          g = new Cj();
                          za(e, 2);
                          return u(e, g.init(), 4);
                        case 4:
                          return u(e, Gj(g, f.ra(), f.$()), 5);
                        case 5:
                          return (h = e.s), u(e, h.getManifests([f.key()]), 6);
                        case 6:
                          return (
                            (k = e.s),
                            (l = k[0]),
                            (m = new dk(f.ra(), f.$())),
                            e["return"](ek(m, l))
                          );
                        case 2:
                          return Ea(e), u(e, g.destroy(), 7);
                        case 7:
                          Fa(e, 0);
                      }
                    });
                  });
                };
                p.stop = function () {
                  return Promise.resolve();
                };
                p.update = function () {};
                p.onExpirationUpdated = function (b, c) {
                  var d = this;
                  return t(function f() {
                    var g, h, k, l, m, n, q;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (
                            (g = d.a),
                            (h = new Cj()),
                            ya(f, 2, 3),
                            u(f, h.init(), 5)
                          );
                        case 5:
                          return u(f, Gj(h, g.ra(), g.$()), 6);
                        case 6:
                          return (k = f.s), u(f, k.getManifests([g.key()]), 7);
                        case 7:
                          l = f.s;
                          m = l[0];
                          n = m.sessionIds.includes(b);
                          q = void 0 == m.expiration || m.expiration > c;
                          if (!n || !q) {
                            f.A(3);
                            break;
                          }
                          return u(
                            f,
                            k.updateManifestExpiration(g.key(), c),
                            3
                          );
                        case 3:
                          return Ea(f), u(f, h.destroy(), 10);
                        case 10:
                          Fa(f, 0);
                          break;
                        case 2:
                          Da(f), f.A(3);
                      }
                    });
                  });
                };
                U.Kb("application/x-offline-manifest", kk);
                function lk(b) {
                  var c = ck(b);
                  return c && "manifest" == c.a
                    ? lk.a(b)
                    : c && "segment" == c.a
                    ? lk.b(c.key(), c)
                    : Ab(new D(2, 1, 9004, b));
                }
                z("shaka.offline.OfflineScheme", lk);
                lk.a = function (b) {
                  b = {
                    uri: b,
                    data: new ArrayBuffer(0),
                    headers: {
                      "content-type": "application/x-offline-manifest",
                    },
                  };
                  return Cb(b);
                };
                lk.b = function (b, c) {
                  var d = new Cj();
                  return Cb(void 0)
                    .T(function () {
                      return d.init();
                    })
                    .T(function () {
                      return Gj(d, c.ra(), c.$());
                    })
                    .T(function (b) {
                      return b.getSegments([c.key()]);
                    })
                    .T(function (b) {
                      return { uri: c, data: b[0].data, headers: {} };
                    })
                    ["finally"](function () {
                      return d.destroy();
                    });
                };
                Rb("offline", lk);
                function mk(b, c, d) {
                  return t(function f() {
                    var g, h, k, l, m, n;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          g = [];
                          for (
                            var q = [], w = r(d), A = w.next();
                            !A.done;
                            A = w.next()
                          ) {
                            A = A.value;
                            for (
                              var C = !1, E = r(q), F = E.next();
                              !F.done;
                              F = E.next()
                            )
                              if (((F = F.value), nk(F.info, A))) {
                                F.sessionIds.push(A.sessionId);
                                C = !0;
                                break;
                              }
                            C || q.push({ info: A, sessionIds: [A.sessionId] });
                          }
                          h = r(q);
                          k = h.next();
                        case 2:
                          if (k.done) {
                            f.A(4);
                            break;
                          }
                          l = k.value;
                          m = ok(b, c, l);
                          return u(f, m, 5);
                        case 5:
                          n = f.s;
                          g = g.concat(n);
                          k = h.next();
                          f.A(2);
                          break;
                        case 4:
                          return f["return"](g);
                      }
                    });
                  });
                }
                function ok(b, c, d) {
                  return t(function f() {
                    var g, h;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (
                            (g = new Gc({
                              nb: c,
                              onError: function () {},
                              gc: function () {},
                              onExpirationUpdated: function () {},
                              onEvent: function () {},
                            })),
                            ya(f, 2),
                            g.configure(b),
                            u(
                              f,
                              Oc(
                                g,
                                d.info.keySystem,
                                d.info.licenseUri,
                                d.info.serverCertificate,
                                d.info.audioCapabilities,
                                d.info.videoCapabilities
                              ),
                              4
                            )
                          );
                        case 4:
                          Aa(f, 3);
                          break;
                        case 2:
                          return Da(f), u(f, g.destroy(), 5);
                        case 5:
                          return f["return"]([]);
                        case 3:
                          return ya(f, 6), u(f, Vc(g), 8);
                        case 8:
                          Aa(f, 7);
                          break;
                        case 6:
                          return Da(f), u(f, g.destroy(), 9);
                        case 9:
                          return f["return"]([]);
                        case 7:
                          return (
                            (h = []),
                            u(
                              f,
                              Promise.all(
                                d.sessionIds.map(function (b) {
                                  return t(function n() {
                                    return y(n, function (c) {
                                      switch (c.l) {
                                        case 1:
                                          return ya(c, 2), u(c, Yc(g, b), 4);
                                        case 4:
                                          h.push(b);
                                          Aa(c, 0);
                                          break;
                                        case 2:
                                          Da(c), v(c);
                                      }
                                    });
                                  });
                                })
                              ),
                              10
                            )
                          );
                        case 10:
                          return u(f, g.destroy(), 11);
                        case 11:
                          return f["return"](h);
                      }
                    });
                  });
                }
                function nk(b, c) {
                  function d(b, c) {
                    return (
                      b.robustness == c.robustness &&
                      b.contentType == c.contentType
                    );
                  }
                  return (
                    b.keySystem == c.keySystem &&
                    b.licenseUri == c.licenseUri &&
                    Mb(b.audioCapabilities, c.audioCapabilities, d) &&
                    Mb(b.videoCapabilities, c.videoCapabilities, d)
                  );
                }
                function pk(b, c) {
                  var d = qk(),
                    e = this;
                  this.g = c;
                  this.c = b;
                  this.i = d;
                  this.h = null;
                  this.f = [];
                  this.b = this.a = null;
                  this.j = !0;
                  this.m = Promise.resolve().then(function () {
                    return rk(e);
                  });
                }
                pk.prototype.destroy = function () {
                  var b = this;
                  return t(function d() {
                    var e;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (b.j = !1), b.b && b.b.abort(), sk(b), u(d, b.m, 2)
                          );
                        case 2:
                          b.a && b.a.qa.Ua();
                          for (
                            var f = r(b.f), h = f.next();
                            !h.done;
                            h = f.next()
                          )
                            (e = h.value), e.qa.Ua();
                          b.a = null;
                          b.f = [];
                          b.g = null;
                          v(d);
                      }
                    });
                  });
                };
                function tk(b, c) {
                  var d = {
                    pb: function () {},
                    fc: function () {},
                    Ua: function () {},
                    onError: function () {},
                    hc: function () {},
                    rg: function () {},
                  };
                  b.f.push({ create: c, qa: d });
                  b.b && b.b.abort();
                  sk(b);
                  return d;
                }
                function rk(b) {
                  return t(function d() {
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          if (b.j) {
                            if (0 == b.f.length || (b.a && !b.a.Ra)) var e = !1;
                            else {
                              b.a && (b.a.qa.Ua(), (b.a = null));
                              e = b.f.shift();
                              var g = e.create(b.i);
                              g
                                ? (e.qa.pb(),
                                  (b.a = {
                                    node: g.node,
                                    payload: g.payload,
                                    Ra: g.Ra,
                                    qa: e.qa,
                                  }))
                                : e.qa.hc();
                              e = !0;
                            }
                            e
                              ? (e = Promise.resolve())
                              : b.a
                              ? (e = uk(b))
                              : (b.g.af(b.c), (b.h = new G()), (e = b.h));
                            return u(d, e, 1);
                          }
                          d.A(0);
                      }
                    });
                  });
                }
                function uk(b) {
                  return t(function d() {
                    var e, f;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (b.c = b.g.Ke(b.c, b.i, b.a.node, b.a.payload)),
                            ya(d, 2),
                            (b.b = b.g.ue(b.c, b.i, b.a.payload)),
                            u(d, b.b.promise, 4)
                          );
                        case 4:
                          b.b = null;
                          b.c == b.a.node && (b.a.qa.fc(), (b.a = null));
                          Aa(d, 0);
                          break;
                        case 2:
                          e = Da(d);
                          if (7001 == e.code) b.a.qa.Ua();
                          else b.a.qa.onError(e);
                          b.a = null;
                          b.b = null;
                          f = b;
                          return u(d, b.g.handleError(b.i, e), 5);
                        case 5:
                          (f.c = d.s), v(d);
                      }
                    });
                  });
                }
                function sk(b) {
                  b.h && (b.h.resolve(), (b.h = null));
                }
                function vk(b) {
                  this.a = null;
                  for (var c = 0; c < b.textTracks.length; ++c) {
                    var d = b.textTracks[c];
                    d.mode = "disabled";
                    "Shaka Player TextTrack" == d.label && (this.a = d);
                  }
                  this.a ||
                    (this.a = b.addTextTrack(
                      "subtitles",
                      "Shaka Player TextTrack"
                    ));
                  this.a.mode = "hidden";
                }
                z("shaka.text.SimpleTextDisplayer", vk);
                vk.prototype.remove = function (b, c) {
                  if (!this.a) return !1;
                  wk(this.a, function (d) {
                    return d.startTime < c && d.endTime > b;
                  });
                  return !0;
                };
                vk.prototype.remove = vk.prototype.remove;
                vk.prototype.append = function (b) {
                  for (var c = xk, d = [], e = 0; e < b.length; e++) {
                    var f = c(b[e]);
                    f && d.push(f);
                  }
                  d.slice()
                    .sort(function (b, c) {
                      return b.startTime != c.startTime
                        ? b.startTime - c.startTime
                        : b.endTime != c.endTime
                        ? b.endTime - c.startTime
                        : d.indexOf(c) - d.indexOf(b);
                    })
                    .forEach(
                      function (b) {
                        this.a.addCue(b);
                      }.bind(this)
                    );
                };
                vk.prototype.append = vk.prototype.append;
                vk.prototype.destroy = function () {
                  this.a &&
                    wk(this.a, function () {
                      return !0;
                    });
                  this.a = null;
                  return Promise.resolve();
                };
                vk.prototype.destroy = vk.prototype.destroy;
                vk.prototype.isTextVisible = function () {
                  return "showing" == this.a.mode;
                };
                vk.prototype.isTextVisible = vk.prototype.isTextVisible;
                vk.prototype.setTextVisibility = function (b) {
                  this.a.mode = b ? "showing" : "hidden";
                };
                vk.prototype.setTextVisibility = vk.prototype.setTextVisibility;
                function xk(b) {
                  if (b.startTime >= b.endTime) return null;
                  var c = new VTTCue(b.startTime, b.endTime, b.payload);
                  c.lineAlign = b.lineAlign;
                  c.positionAlign = b.positionAlign;
                  c.size = b.size;
                  try {
                    c.align = b.textAlign;
                  } catch (d) {}
                  "center" == b.textAlign &&
                    "center" != c.align &&
                    (c.align = "middle");
                  "vertical-lr" == b.writingMode
                    ? (c.vertical = "lr")
                    : "vertical-rl" == b.writingMode && (c.vertical = "rl");
                  1 == b.lineInterpretation && (c.snapToLines = !1);
                  null != b.line && (c.line = b.line);
                  null != b.position && (c.position = b.position);
                  return c;
                }
                function wk(b, c) {
                  var d = b.mode;
                  b.mode = "showing" == d ? "showing" : "hidden";
                  for (var e = b.cues, f = e.length - 1; 0 <= f; f--) {
                    var g = e[f];
                    g && c(g) && b.removeCue(g);
                  }
                  b.mode = d;
                }
                function yk(b, c, d, e, f) {
                  var g = f in e,
                    h = !0,
                    k;
                  for (k in c) {
                    var l = f + "." + k,
                      m = g ? e[f] : d[k];
                    g || k in d
                      ? void 0 === c[k]
                        ? void 0 === m || g
                          ? delete b[k]
                          : (b[k] = Ib(m))
                        : m.constructor == Object &&
                          c[k] &&
                          c[k].constructor == Object
                        ? (b[k] || (b[k] = Ib(m)),
                          (l = yk(b[k], c[k], m, e, l)),
                          (h = h && l))
                        : typeof c[k] != typeof m ||
                          null == c[k] ||
                          c[k].constructor != m.constructor
                        ? (h = !1)
                        : (b[k] = c[k])
                      : (h = !1);
                  }
                  return h;
                }
                z("shaka.util.ConfigUtils.mergeConfigObjects", yk);
                function zk() {
                  var b = 5e5,
                    c = Infinity;
                  navigator.connection &&
                    navigator.connection.type &&
                    ((b = 1e6 * navigator.connection.downlink),
                    navigator.connection.saveData && (c = 360));
                  var d = {
                      retryParameters: ub(),
                      servers: {},
                      clearKeys: {},
                      advanced: {},
                      delayLicenseRequestUntilPlayed: !1,
                    },
                    e = {
                      retryParameters: ub(),
                      availabilityWindowOverride: NaN,
                      dash: {
                        customScheme: function (b) {
                          if (b) return null;
                        },
                        clockSyncUri: "",
                        ignoreDrmInfo: !1,
                        xlinkFailGracefully: !1,
                        defaultPresentationDelay: 10,
                        ignoreMinBufferTime: !1,
                        autoCorrectDrift: !0,
                      },
                    },
                    f = {
                      retryParameters: ub(),
                      failureCallback: function () {},
                      rebufferingGoal: 2,
                      bufferingGoal: 10,
                      bufferBehind: 30,
                      ignoreTextStreamFailures: !1,
                      alwaysStreamText: !1,
                      startAtSegmentBoundary: !1,
                      smallGapLimit: 0.5,
                      jumpLargeGaps: !1,
                      durationBackoff: 1,
                      forceTransmuxTS: !1,
                      safeSeekOffset: 5,
                      stallEnabled: !0,
                      stallThreshold: 1,
                      stallSkip: 0.1,
                    };
                  pc("Web0S") && (f.stallEnabled = !1);
                  var g = {
                      trackSelectionCallback: function (b) {
                        return b;
                      },
                      progressCallback: function () {},
                      usePersistentLicense: !0,
                    },
                    h = {
                      drm: d,
                      manifest: e,
                      streaming: f,
                      offline: g,
                      abrFactory: N,
                      abr: {
                        enabled: !0,
                        defaultBandwidthEstimate: b,
                        switchInterval: 8,
                        bandwidthUpgradeTarget: 0.85,
                        bandwidthDowngradeTarget: 0.95,
                        restrictions: {
                          minWidth: 0,
                          maxWidth: Infinity,
                          minHeight: 0,
                          maxHeight: c,
                          minPixels: 0,
                          maxPixels: Infinity,
                          minBandwidth: 0,
                          maxBandwidth: Infinity,
                        },
                      },
                      preferredAudioLanguage: "",
                      preferredTextLanguage: "",
                      preferredVariantRole: "",
                      preferredTextRole: "",
                      preferredAudioChannelCount: 2,
                      restrictions: {
                        minWidth: 0,
                        maxWidth: Infinity,
                        minHeight: 0,
                        maxHeight: Infinity,
                        minPixels: 0,
                        maxPixels: Infinity,
                        minBandwidth: 0,
                        maxBandwidth: Infinity,
                      },
                      playRangeStart: 0,
                      playRangeEnd: Infinity,
                      textDisplayFactory: function () {
                        return null;
                      },
                    };
                  g.trackSelectionCallback = function (b) {
                    return Ak(b, h.preferredAudioLanguage);
                  };
                  return h;
                }
                function Bk(b, c, d) {
                  var e = {
                    ".drm.servers": "",
                    ".drm.clearKeys": "",
                    ".drm.advanced": {
                      distinctiveIdentifierRequired: !1,
                      persistentStateRequired: !1,
                      videoRobustness: "",
                      audioRobustness: "",
                      serverCertificate: new Uint8Array(0),
                      individualizationServer: "",
                    },
                  };
                  return yk(b, c, d || zk(), e, "");
                }
                function Ak(b, c) {
                  var d = b.filter(function (b) {
                      return "variant" == b.type;
                    }),
                    e = [],
                    f = re(
                      c,
                      d.map(function (b) {
                        return b.language;
                      })
                    );
                  f &&
                    (e = d.filter(function (b) {
                      return M(b.language) == f;
                    }));
                  0 == e.length &&
                    (e = d.filter(function (b) {
                      return b.primary;
                    }));
                  0 == e.length &&
                    (d.map(function (b) {
                      return b.language;
                    }),
                    (e = d));
                  var g = e.filter(function (b) {
                    return b.height && 480 >= b.height;
                  });
                  g.length &&
                    (g.sort(function (b, c) {
                      return c.height - b.height;
                    }),
                    (e = g.filter(function (b) {
                      return b.height == g[0].height;
                    })));
                  d = [];
                  if (e.length) {
                    var h = Math.floor(e.length / 2);
                    e.sort(function (b, c) {
                      return b.bandwidth - c.bandwidth;
                    });
                    d.push(e[h]);
                  }
                  e = r(b);
                  for (h = e.next(); !h.done; h = e.next())
                    (h = h.value), "text" == h.type && d.push(h);
                  return d;
                }
                function Ck() {
                  this.a = null;
                  this.b = [];
                }
                function Dk(b, c) {
                  if (null == b.a)
                    b.a = {
                      timestamp: Date.now() / 1e3,
                      state: c,
                      duration: 0,
                    };
                  else {
                    var d = Date.now() / 1e3;
                    b.a.duration = d - b.a.timestamp;
                    b.a.state != c &&
                      (b.b.push(b.a),
                      (b.a = { timestamp: d, state: c, duration: 0 }));
                  }
                }
                function Ek(b, c) {
                  var d = 0;
                  b.a && b.a.state == c && (d += b.a.duration);
                  for (var e = r(b.b), f = e.next(); !f.done; f = e.next())
                    (f = f.value), (d += f.state == c ? f.duration : 0);
                  return d;
                }
                function Fk(b) {
                  function c(b) {
                    return {
                      timestamp: b.timestamp,
                      state: b.state,
                      duration: b.duration,
                    };
                  }
                  for (
                    var d = [], e = r(b.b), f = e.next();
                    !f.done;
                    f = e.next()
                  )
                    d.push(c(f.value));
                  b.a && d.push(c(b.a));
                  return d;
                }
                function Gk() {
                  this.b = this.c = null;
                  this.a = [];
                }
                function Hk(b, c, d) {
                  b.b != c &&
                    ((b.b = c),
                    b.a.push({
                      timestamp: Date.now() / 1e3,
                      id: c.id,
                      type: "text",
                      fromAdaptation: d,
                      bandwidth: null,
                    }));
                }
                function Ik() {
                  this.f =
                    this.j =
                    this.c =
                    this.h =
                    this.i =
                    this.g =
                    this.m =
                      NaN;
                  this.a = new Ck();
                  this.b = new Gk();
                }
                function X(b, c) {
                  var d = this;
                  J.call(this);
                  this.g = Jk;
                  this.a = null;
                  this.$a = !1;
                  this.i = new ac();
                  this.rc =
                    this.j =
                    this.xb =
                    this.b =
                    this.m =
                    this.f =
                    this.Pb =
                    this.V =
                    this.Qb =
                    this.K =
                    this.bb =
                    this.o =
                    this.F =
                    this.h =
                    this.N =
                      null;
                  this.Ad = 1e9;
                  this.Tb = new Set();
                  this.eb = !0;
                  this.ka = null;
                  this.yd = !1;
                  this.wd = 0;
                  this.ja = null;
                  this.C = new Gh();
                  this.c = Kk(this);
                  this.Ub = { width: Infinity, height: Infinity };
                  this.v = null;
                  this.Rb = new Ph(
                    this.c.preferredAudioLanguage,
                    this.c.preferredVariantRole,
                    this.c.preferredAudioChannelCount
                  );
                  this.Ka = this.c.preferredTextLanguage;
                  this.yb = this.c.preferredTextRole;
                  c && c(this);
                  this.N = Lk(this);
                  L(this.i, window, "online", function () {
                    d.ad();
                  });
                  this.w = { name: "detach" };
                  this.S = { name: "attach" };
                  this.Ca = { name: "unload" };
                  this.yc = { name: "manifest-parser" };
                  this.xc = { name: "manifest" };
                  this.ab = { name: "media-source" };
                  this.sc = { name: "drm-engine" };
                  this.W = { name: "load" };
                  this.Ac = { name: "src-equals-drm-engine" };
                  this.cb = { name: "src-equals" };
                  var e = new Map();
                  e.set(this.S, function (b, c) {
                    return Db(Mk(d, b, c));
                  });
                  e.set(this.w, function (b) {
                    b.u && (d.i.ma(b.u, "error"), (b.u = null));
                    d.a = null;
                    b = Promise.resolve();
                    return Db(b);
                  });
                  e.set(this.Ca, function (b) {
                    return Db(Nk(d, b));
                  });
                  e.set(this.ab, function (b) {
                    b = Ok(d, b);
                    return Db(b);
                  });
                  e.set(this.yc, function (b, c) {
                    var e = Pk(d, b, c);
                    return Db(e);
                  });
                  e.set(this.xc, function (b) {
                    return Qk(d, b);
                  });
                  e.set(this.sc, function () {
                    var b = Rk(d);
                    return Db(b);
                  });
                  e.set(this.W, function (b, c) {
                    return Db(Sk(d, b, c));
                  });
                  e.set(this.Ac, function (b) {
                    b = Tk(d, b);
                    return Db(b);
                  });
                  e.set(this.cb, function (b, c) {
                    return Uk(d, b, c);
                  });
                  this.fb = new pk(this.w, {
                    Ke: function (b, c, e, k) {
                      var f = null;
                      b == d.w && (f = e == d.w ? d.w : d.S);
                      b == d.S &&
                        (f =
                          e == d.w || c.u != k.u
                            ? d.w
                            : e == d.S
                            ? d.S
                            : e == d.ab || e == d.W
                            ? d.ab
                            : e == d.cb
                            ? d.Ac
                            : null);
                      b == d.ab && (f = e == d.W && c.u == k.u ? d.yc : d.Ca);
                      b == d.yc && (f = Vk(d.W, d.xc, d.Ca, e, c, k));
                      b == d.xc && (f = Vk(d.W, d.sc, d.Ca, e, c, k));
                      b == d.sc && (f = Vk(d.W, d.W, d.Ca, e, c, k));
                      b == d.Ac && (f = e == d.cb && c.u == k.u ? d.cb : d.Ca);
                      if (b == d.W || b == d.cb) f = d.Ca;
                      b == d.Ca && (f = k.u && c.u == k.u ? d.S : d.w);
                      return f;
                    },
                    ue: function (b, c, h) {
                      d.dispatchEvent(
                        new I("onstatechange", { state: b.name })
                      );
                      return e.get(b)(c, h);
                    },
                    handleError: function (b) {
                      return t(function h() {
                        return y(h, function (c) {
                          switch (c.l) {
                            case 1:
                              return u(c, Nk(d, b), 2);
                            case 2:
                              return c["return"](b.u ? d.S : d.w);
                          }
                        });
                      });
                    },
                    af: function (b) {
                      d.dispatchEvent(new I("onstateidle", { state: b.name }));
                    },
                  });
                  b && this.zb(b, !0);
                }
                Ta(X, J);
                z("shaka.Player", X);
                X.prototype.destroy = function () {
                  var b = this;
                  return t(function d() {
                    var e;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          if (b.g == Wk) return d["return"]();
                          b.g = Wk;
                          e = tk(b.fb, function () {
                            return { node: b.w, payload: qk(), Ra: !1 };
                          });
                          return u(
                            d,
                            new Promise(function (b) {
                              e.pb = function () {};
                              e.fc = function () {
                                b();
                              };
                              e.Ua = function () {
                                b();
                              };
                              e.onError = function () {
                                b();
                              };
                              e.hc = function () {
                                b();
                              };
                            }),
                            2
                          );
                        case 2:
                          return u(d, b.fb.destroy(), 3);
                        case 3:
                          b.i && (b.i.a(), (b.i = null));
                          b.rc = null;
                          b.j = null;
                          b.c = null;
                          if (!b.N) {
                            d.A(0);
                            break;
                          }
                          return u(d, b.N.destroy(), 5);
                        case 5:
                          (b.N = null), v(d);
                      }
                    });
                  });
                };
                X.prototype.destroy = X.prototype.destroy;
                X.version = "v2.5.0";
                var Xk = ["2", "5"];
                Le = new (function (b) {
                  this.a = b;
                  this.c = Me;
                  this.b = Ne;
                })(new Je(Number(Xk[0]), Number(Xk[1])));
                var Yk = ["output-restricted", "internal-error"],
                  Zk = {};
                X.registerSupportPlugin = function (b, c) {
                  Zk[b] = c;
                };
                X.isBrowserSupported = function () {
                  return window.Promise &&
                    window.Uint8Array &&
                    Array.prototype.forEach &&
                    window.MediaKeys &&
                    window.navigator &&
                    window.navigator.requestMediaKeySystemAccess &&
                    window.MediaKeySystemAccess &&
                    window.MediaKeySystemAccess.prototype.getConfiguration
                    ? mc()
                      ? !0
                      : nc("application/x-mpegurl")
                    : !1;
                };
                X.probeSupport = function () {
                  return jd().then(function (b) {
                    for (
                      var c = U.vf(),
                        d = {},
                        e = r(
                          'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(
                            ","
                          )
                        ),
                        f = e.next();
                      !f.done;
                      f = e.next()
                    ) {
                      f = f.value;
                      d[f] = mc()
                        ? Wd(f)
                          ? !0
                          : MediaSource.isTypeSupported(f) || zd(f)
                        : nc(f);
                      var g = f.split(";")[0];
                      d[g] = d[g] || d[f];
                    }
                    b = { manifest: c, media: d, drm: b };
                    for (var h in Zk) b[h] = Zk[h]();
                    return b;
                  });
                };
                X.prototype.zb = function (b, c) {
                  c = void 0 === c ? !0 : c;
                  if (this.g == Wk) return Promise.reject($k());
                  var d = qk();
                  d.u = b;
                  mc() || (c = !1);
                  var e = c ? this.ab : this.S,
                    f = tk(this.fb, function () {
                      return { node: e, payload: d, Ra: !1 };
                    });
                  f.pb = function () {};
                  return al(f);
                };
                X.prototype.attach = X.prototype.zb;
                X.prototype.detach = function () {
                  var b = this;
                  if (this.g == Wk) return Promise.reject($k());
                  var c = tk(this.fb, function () {
                    return { node: b.w, payload: qk(), Ra: !1 };
                  });
                  c.pb = function () {};
                  return al(c);
                };
                X.prototype.detach = X.prototype.detach;
                X.prototype.ld = function (b) {
                  var c = this;
                  b = void 0 === b ? !0 : b;
                  if (this.g == Wk) return Promise.reject($k());
                  mc() || (b = !1);
                  var d = qk(),
                    e = tk(this.fb, function (e) {
                      var f = e.u && b ? c.ab : e.u ? c.S : c.w;
                      d.u = e.u;
                      return { node: f, payload: d, Ra: !1 };
                    });
                  e.pb = function () {};
                  return al(e);
                };
                X.prototype.unload = X.prototype.ld;
                X.prototype.load = function (b, c, d) {
                  if (this.g == Wk) return Promise.reject($k());
                  this.dispatchEvent(new I("loading"));
                  var e = qk();
                  e.uri = b;
                  e.hd = Date.now() / 1e3;
                  d &&
                    "string" != typeof d &&
                    (Ke(
                      "Loading with a manifest parser factory",
                      "Please register a manifest parser and for the mime-type."
                    ),
                    (e.va = function () {
                      return new d();
                    }));
                  d && "string" == typeof d && (e.mimeType = d);
                  void 0 !== c && (e.startTime = c);
                  var f = bl(e) ? this.cb : this.W,
                    g = tk(this.fb, function (b) {
                      if (null == b.u) return null;
                      e.u = b.u;
                      return { node: f, payload: e, Ra: !0 };
                    });
                  g.pb = function () {};
                  return new Promise(function (b, c) {
                    g.hc = function () {
                      return c(new D(2, 7, 7002));
                    };
                    g.fc = function () {
                      return b();
                    };
                    g.Ua = function () {
                      return c($k());
                    };
                    g.onError = function (b) {
                      return c(b);
                    };
                  });
                };
                X.prototype.load = X.prototype.load;
                function bl(b) {
                  if (b.va) return !1;
                  if (!mc()) return !0;
                  var c = b.mimeType;
                  b = b.uri || "";
                  c ||
                    (c = {
                      mp4: "video/mp4",
                      m4v: "video/mp4",
                      m4a: "audio/mp4",
                      webm: "video/webm",
                      ts: "video/mp2t",
                      m3u8: "application/x-mpegurl",
                      mp3: "audio/mpeg",
                      aac: "audio/aac",
                      flac: "audio/flac",
                    }[U.getExtension(b)]);
                  return c
                    ? nc(c)
                      ? U.isSupported(b, c)
                        ? !!navigator.vendor &&
                          navigator.vendor.includes("Apple")
                        : !0
                      : !1
                    : !1;
                }
                function Mk(b, c, d) {
                  null == c.u &&
                    ((c.u = d.u),
                    L(b.i, c.u, "error", function () {
                      var c = cl(b);
                      c && b.Ha(c);
                    }));
                  b.a = c.u;
                  return Promise.resolve();
                }
                function Nk(b, c) {
                  return t(function e() {
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          b.g != Wk && (b.g = Jk);
                          b.dispatchEvent(new I("unloading"));
                          c.currentTime = null;
                          c.va = null;
                          c.mimeType = null;
                          c.startTime = null;
                          c.uri = null;
                          c.u &&
                            (b.i.ma(c.u, "loadeddata"),
                            b.i.ma(c.u, "playing"),
                            b.i.ma(c.u, "pause"),
                            b.i.ma(c.u, "ended"),
                            b.i.ma(c.u, "ratechange"));
                          b.bb && (b.bb.a(), (b.bb = null));
                          b.Qb && (b.Qb.stop(), (b.Qb = null));
                          if (!b.m) {
                            e.A(2);
                            break;
                          }
                          return u(e, b.m.stop(), 3);
                        case 3:
                          b.m = null;
                        case 2:
                          if (!b.j) {
                            e.A(4);
                            break;
                          }
                          return u(e, b.j.stop(), 4);
                        case 4:
                          if (!b.f) {
                            e.A(6);
                            break;
                          }
                          return u(e, b.f.destroy(), 7);
                        case 7:
                          b.f = null;
                        case 6:
                          b.o && (b.o.a(), (b.o = null));
                          if (!b.F) {
                            e.A(8);
                            break;
                          }
                          return u(e, b.F.destroy(), 9);
                        case 9:
                          b.F = null;
                        case 8:
                          c.u &&
                            c.u.src &&
                            (c.u.removeAttribute("src"), c.u.load());
                          if (!b.h) {
                            e.A(10);
                            break;
                          }
                          return u(e, b.h.destroy(), 11);
                        case 11:
                          b.h = null;
                        case 10:
                          b.C.a.clear(),
                            (b.xb = null),
                            (b.V = null),
                            b.Tb.clear(),
                            (b.b = null),
                            (b.v = null),
                            (b.eb = !0),
                            dl(b),
                            v(e);
                      }
                    });
                  });
                }
                function Ok(b, c) {
                  return t(function e() {
                    var f, g, h, k;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return (
                            (f = window.muxjs ? new nd() : new od()),
                            (g = b.c.textDisplayFactory),
                            (h = new g()),
                            (k = new $d(c.u, f, h)),
                            u(e, k.o, 2)
                          );
                        case 2:
                          (b.F = k), v(e);
                      }
                    });
                  });
                }
                function Pk(b, c, d) {
                  return t(function f() {
                    var g, h, k;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          c.va = d.va;
                          c.mimeType = d.mimeType;
                          c.uri = d.uri;
                          g = c.uri;
                          h = b.N;
                          b.xb = g;
                          if (c.va) {
                            b.m = c.va();
                            f.A(2);
                            break;
                          }
                          k = b;
                          return u(
                            f,
                            U.create(
                              g,
                              h,
                              b.c.manifest.retryParameters,
                              c.mimeType
                            ),
                            3
                          );
                        case 3:
                          k.m = f.s;
                        case 2:
                          b.m.configure(b.c.manifest), v(f);
                      }
                    });
                  });
                }
                function Qk(b, c) {
                  var d = c.uri,
                    e = b.N;
                  b.Pb = new wi();
                  xi(b.Pb, function (c) {
                    el(b, "timelineregionadded", c);
                  });
                  var f = {
                    networkingEngine: e,
                    filterNewPeriod: function (c) {
                      return b.Bc(c);
                    },
                    filterAllPeriods: function (c) {
                      return fl(b, c);
                    },
                    onTimelineRegionAdded: function (c) {
                      var d = b.Pb;
                      a: {
                        var e = r(d.b);
                        for (var f = e.next(); !f.done; f = e.next())
                          if (
                            ((f = f.value),
                            f.schemeIdUri == c.schemeIdUri &&
                              f.startTime == c.startTime &&
                              f.endTime == c.endTime)
                          ) {
                            e = f;
                            break a;
                          }
                        e = null;
                      }
                      null == e && (d.b.add(c), d.c(c));
                    },
                    onEvent: function (c) {
                      return b.dispatchEvent(c);
                    },
                    onError: function (c) {
                      return b.Ha(c);
                    },
                  };
                  return new H(
                    Promise.resolve().then(function () {
                      return t(function h() {
                        var c;
                        return y(h, function (e) {
                          switch (e.l) {
                            case 1:
                              return (c = b), u(e, b.m.start(d, f), 2);
                            case 2:
                              c.b = e.s;
                              b.dispatchEvent(new I("manifestparsed"));
                              if (0 == b.b.periods.length)
                                throw new D(2, 4, 4014);
                              gl(b.b.periods);
                              v(e);
                          }
                        });
                      });
                    }),
                    function () {
                      return b.m.stop();
                    }
                  );
                }
                function Rk(b) {
                  return t(function d() {
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            (b.h = new Gc({
                              nb: b.N,
                              onError: function (d) {
                                b.Ha(d);
                              },
                              gc: function (d) {
                                hl(b, d);
                              },
                              onExpirationUpdated: function (d, e) {
                                il(b, d, e);
                              },
                              onEvent: function (d) {
                                b.dispatchEvent(d);
                              },
                            })),
                            b.h.configure(b.c.drm),
                            u(
                              d,
                              Nc(b.h, ci(b.b.periods), b.b.offlineSessionIds),
                              2
                            )
                          );
                        case 2:
                          fl(b, b.b.periods), v(d);
                      }
                    });
                  });
                }
                function Sk(b, c, d) {
                  return t(function f() {
                    var g, h, k, l, m, n, q, x, w;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (
                            (c.startTime = d.startTime),
                            (g = c.u),
                            (h = c.uri),
                            (b.xb = h),
                            (b.v = new Ik()),
                            (k = function () {
                              return jl(b);
                            }),
                            (l = function () {
                              var c = b.a.playbackRate;
                              0 != c && b.K.set(c);
                            }),
                            L(b.i, g, "playing", k),
                            L(b.i, g, "pause", k),
                            L(b.i, g, "ended", k),
                            L(b.i, g, "ratechange", l),
                            (m = b.c.abrFactory),
                            (b.j && b.rc == m) ||
                              ((b.rc = m),
                              (b.j = new m()),
                              b.j.configure(b.c.abr)),
                            kl(b, b.b.periods),
                            (b.Rb = new Ph(
                              b.c.preferredAudioLanguage,
                              b.c.preferredVariantRole,
                              b.c.preferredAudioChannelCount
                            )),
                            (b.Ka = b.c.preferredTextLanguage),
                            ll(
                              b.b.presentationTimeline,
                              b.c.playRangeStart,
                              b.c.playRangeEnd
                            ),
                            u(f, b.h.zb(g), 2)
                          );
                        case 2:
                          return (
                            b.j.init(function (c, d, f) {
                              d = void 0 === d ? !1 : d;
                              f = void 0 === f ? 0 : f;
                              a: {
                                var g = r(b.b.periods);
                                for (var h = g.next(); !h.done; h = g.next())
                                  if (((h = h.value), h.variants.includes(c))) {
                                    g = h;
                                    break a;
                                  }
                                g = null;
                              }
                              ml(b, g, c, !0);
                              b.f && (Qi(b.f, c, d, f), nl(b));
                            }),
                            (b.o = ol(b, c.startTime)),
                            (b.bb = pl(b)),
                            (b.K = new gi({
                              cc: function () {
                                return c.u.playbackRate;
                              },
                              ed: function (b) {
                                c.u.playbackRate = b;
                              },
                              Ed: function (b) {
                                c.u.currentTime += b;
                              },
                            })),
                            (n = Math.max(
                              b.b.minBufferTime,
                              b.c.streaming.rebufferingGoal
                            )),
                            ql(b, n),
                            (b.f = rl(b)),
                            b.f.configure(b.c.streaming),
                            sl(b),
                            (b.g = tl),
                            b.dispatchEvent(new I("streaming")),
                            u(f, b.f.start(), 3)
                          );
                        case 3:
                          b.c.streaming.startAtSegmentBoundary &&
                            ((q = b.o.i()), (x = ul(b, q)), b.o.o(x)),
                            b.b.periods.forEach(b.Bc.bind(b)),
                            vl(b),
                            nl(b),
                            (w = wl(b)),
                            w.variants.some(function (b) {
                              return b.primary;
                            }),
                            xl(b, w.variants),
                            dc(b.i, g, "loadeddata", function () {
                              b.v.c = Date.now() / 1e3 - d.hd;
                            }),
                            v(f);
                      }
                    });
                  });
                }
                function Tk(b, c) {
                  return t(function e() {
                    var f, g;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return (
                            (f = wd),
                            (b.h = new Gc({
                              nb: b.N,
                              onError: function (c) {
                                b.Ha(c);
                              },
                              gc: function (c) {
                                hl(b, c);
                              },
                              onExpirationUpdated: function (c, e) {
                                il(b, c, e);
                              },
                              onEvent: function (c) {
                                b.dispatchEvent(c);
                              },
                            })),
                            b.h.configure(b.c.drm),
                            (g = {
                              id: 0,
                              language: "und",
                              primary: !1,
                              audio: null,
                              video: {
                                id: 0,
                                originalId: null,
                                createSegmentIndex:
                                  Promise.resolve.bind(Promise),
                                findSegmentPosition: function () {
                                  return null;
                                },
                                getSegmentReference: function () {
                                  return null;
                                },
                                initSegmentReference: null,
                                presentationTimeOffset: 0,
                                mimeType: "video/mp4",
                                codecs: "",
                                encrypted: !0,
                                keyId: null,
                                language: "und",
                                label: null,
                                type: f.La,
                                primary: !1,
                                trickModeVideo: null,
                                emsgSchemeIdUris: null,
                                roles: [],
                                channelsCount: null,
                                closedCaptions: null,
                              },
                              bandwidth: 100,
                              drmInfos: [],
                              allowedByApplication: !0,
                              allowedByKeySystem: !0,
                            }),
                            u(e, Nc(b.h, [g], []), 2)
                          );
                        case 2:
                          return u(e, b.h.zb(c.u), 0);
                      }
                    });
                  });
                }
                function Uk(b, c, d) {
                  function e() {
                    return jl(b);
                  }
                  c.uri = d.uri;
                  c.startTime = d.startTime;
                  b.xb = c.uri;
                  b.v = new Ik();
                  b.o = new pi(c.u);
                  null != c.startTime && b.o.o(c.startTime);
                  b.K = new gi({
                    cc: function () {
                      return c.u.playbackRate;
                    },
                    ed: function (b) {
                      c.u.playbackRate = b;
                    },
                    Ed: function (b) {
                      c.u.currentTime += b;
                    },
                  });
                  ql(b, b.c.streaming.rebufferingGoal);
                  L(b.i, c.u, "playing", e);
                  L(b.i, c.u, "pause", e);
                  L(b.i, c.u, "ended", e);
                  dc(b.i, c.u, "loadeddata", function () {
                    b.v.c = Date.now() / 1e3 - d.hd;
                  });
                  b.a.audioTracks &&
                    (L(b.i, b.a.audioTracks, "addtrack", function () {
                      return vl(b);
                    }),
                    L(b.i, b.a.audioTracks, "removetrack", function () {
                      return vl(b);
                    }));
                  if (b.a.textTracks) {
                    var f = b.a.textTracks;
                    L(b.i, f, "addtrack", function () {
                      return vl(b);
                    });
                    L(b.i, f, "removetrack", function () {
                      return vl(b);
                    });
                  }
                  c.u.src = c.uri;
                  b.g = yl;
                  b.dispatchEvent(new I("streaming"));
                  var g = new G();
                  b.a.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
                    ? g.resolve()
                    : b.a.error
                    ? g.reject(cl(b))
                    : (dc(b.i, b.a, "loadeddata", function () {
                        g.resolve();
                      }),
                      dc(b.i, b.a, "error", function () {
                        g.reject(cl(b));
                      }));
                  return new H(g, function () {
                    g.reject(new D(2, 7, 7001));
                    return Promise.resolve();
                  });
                }
                function gl(b) {
                  function c(b) {
                    return (
                      (b.video && b.audio) ||
                      (b.video && b.video.codecs.includes(","))
                    );
                  }
                  b.some(function (b) {
                    return b.variants.some(c);
                  }) &&
                    b.forEach(function (b) {
                      b.variants = b.variants.filter(c);
                    });
                }
                function sl(b) {
                  function c(b) {
                    var c = "";
                    b.video && (c = lc(b.video.codecs)[0]);
                    var d = "";
                    b.audio && (d = lc(b.audio.codecs)[0]);
                    return c + "-" + d;
                  }
                  var d = b.b.periods.reduce(function (b, c) {
                    return b.concat(c.variants);
                  }, []);
                  d = De(d, b.c.preferredAudioChannelCount);
                  var e = new Hb();
                  d.forEach(function (b) {
                    var d = c(b);
                    e.push(d, b);
                  });
                  var f = null,
                    g = Infinity;
                  e.forEach(function (b, c) {
                    var d = 0,
                      e = 0;
                    c.forEach(function (b) {
                      d += b.bandwidth || 0;
                      ++e;
                    });
                    var h = d / e;
                    h < g && ((f = b), (g = h));
                  });
                  b.b.periods.forEach(function (b) {
                    b.variants = b.variants.filter(function (b) {
                      return c(b) == f ? !0 : !1;
                    });
                  });
                }
                function Lk(b) {
                  return new K(function (c, d) {
                    b.j && b.j.segmentDownloaded(c, d);
                  });
                }
                function ol(b, c) {
                  return new qi(
                    b.a,
                    b.b,
                    b.c.streaming,
                    c,
                    function () {
                      b.bb && bi(b.bb, !0);
                      b.f && Wi(b.f);
                    },
                    function (c) {
                      return b.dispatchEvent(c);
                    }
                  );
                }
                function pl(b) {
                  var c = new ei(b.b);
                  fi(c, function () {
                    vl(b);
                  });
                  var d = new yi(b.Pb);
                  Ci(
                    d,
                    function (c) {
                      el(b, "timelineregionenter", c);
                    },
                    function (c) {
                      el(b, "timelineregionexit", c);
                    },
                    function (c, d) {
                      d ||
                        (el(b, "timelineregionenter", c),
                        el(b, "timelineregionexit", c));
                    }
                  );
                  var e = new ai(b.a);
                  e.b.add(c);
                  e.b.add(d);
                  return e;
                }
                function ql(b, c) {
                  b.V = new Sh(c, Math.min(0.5, c / 2));
                  b.V.a = Uh;
                  dl(b);
                  b.Qb = new B(function () {
                    switch (b.g) {
                      case yl:
                        var c = b.a.ended
                          ? !0
                          : pd(b.a.buffered) >= b.a.duration - 0.1;
                        break;
                      case tl:
                        a: {
                          var e;
                          (e = b.a.ended) ||
                            ((e = b.F),
                            (e = e.g ? "ended" == e.g.readyState : !0));
                          if (e) c = !0;
                          else {
                            if (
                              b.b.presentationTimeline.U() &&
                              ((e = b.b.presentationTimeline.jb()),
                              pd(b.a.buffered) >= e)
                            ) {
                              c = !0;
                              break a;
                            }
                            c = !1;
                          }
                        }
                        break;
                      default:
                        c = !1;
                    }
                    var f = rd(b.a.buffered, b.a.currentTime);
                    e = b.V;
                    var g = c,
                      h = e.b.get(e.a);
                    c = e.a;
                    f = g || f >= h ? Th : Uh;
                    e.a = f;
                    c != f && dl(b);
                  }).Ia(0.25);
                }
                function rl(b) {
                  return new Di(b.b, {
                    Qa: function () {
                      return b.o.i();
                    },
                    L: b.F,
                    nb: b.N,
                    Hd: b.Ze.bind(b),
                    Gd: b.pe.bind(b),
                    onError: b.Ha.bind(b),
                    onEvent: function (c) {
                      return b.dispatchEvent(c);
                    },
                    cf: b.df.bind(b),
                    Uc: b.kf.bind(b),
                  });
                }
                X.prototype.configure = function (b, c) {
                  if (2 == arguments.length && "string" == typeof b) {
                    for (var d = b, e = {}, f = e, g = 0, h = 0; ; ) {
                      g = d.indexOf(".", g);
                      if (0 > g) break;
                      if (0 == g || "\\" != d[g - 1])
                        (h = d.substring(h, g).replace(/\\\./g, ".")),
                          (f[h] = {}),
                          (f = f[h]),
                          (h = g + 1);
                      g += 1;
                    }
                    f[d.substring(h).replace(/\\\./g, ".")] = c;
                    b = e;
                  }
                  d = Bk(this.c, b, Kk(this));
                  zl(this);
                  return d;
                };
                X.prototype.configure = X.prototype.configure;
                function zl(b) {
                  b.m && b.m.configure(b.c.manifest);
                  b.h && b.h.configure(b.c.drm);
                  if (b.f) {
                    b.f.configure(b.c.streaming);
                    try {
                      b.b.periods.forEach(b.Bc.bind(b));
                    } catch (f) {
                      b.Ha(f);
                    }
                    var c = Hi(b.f),
                      d = Ji(b.f),
                      e = wl(b);
                    c = Ge(c, d, e.variants);
                    b.j && c && c.allowedByApplication && c.allowedByKeySystem
                      ? xl(b, e.variants)
                      : Al(b, e);
                  }
                  b.j &&
                    (b.j.configure(b.c.abr),
                    b.c.abr.enabled && !b.eb ? b.j.enable() : b.j.disable(),
                    Bl(b));
                }
                X.prototype.getConfiguration = function () {
                  var b = Kk(this);
                  Bk(b, this.c, Kk(this));
                  return b;
                };
                X.prototype.getConfiguration = X.prototype.getConfiguration;
                X.prototype.Df = function () {
                  for (var b in this.c) delete this.c[b];
                  Bk(this.c, Kk(this), Kk(this));
                  zl(this);
                };
                X.prototype.resetConfiguration = X.prototype.Df;
                X.prototype.Ee = function () {
                  return this.g;
                };
                X.prototype.getLoadMode = X.prototype.Ee;
                X.prototype.Ie = function () {
                  return this.a;
                };
                X.prototype.getMediaElement = X.prototype.Ie;
                X.prototype.Bb = function () {
                  return this.N;
                };
                X.prototype.getNetworkingEngine = X.prototype.Bb;
                X.prototype.$b = function () {
                  return this.xb;
                };
                X.prototype.getAssetUri = X.prototype.$b;
                X.prototype.He = function () {
                  Ke("getManifestUri", 'Please use "getAssetUri" instead.');
                  return this.$b();
                };
                X.prototype.getManifestUri = X.prototype.He;
                X.prototype.U = function () {
                  return this.b
                    ? this.b.presentationTimeline.U()
                    : this.a && this.a.src
                    ? Infinity == this.a.duration
                    : !1;
                };
                X.prototype.isLive = X.prototype.U;
                X.prototype.Ta = function () {
                  return this.b ? this.b.presentationTimeline.Ta() : !1;
                };
                X.prototype.isInProgress = X.prototype.Ta;
                X.prototype.We = function () {
                  if (this.b) {
                    if (!this.b.periods.length) return !1;
                    var b = this.b.periods[0].variants;
                    return b.length ? !b[0].video : !1;
                  }
                  return this.a && this.a.src
                    ? this.a.videoTracks
                      ? 0 == this.a.videoTracks.length
                      : 0 == this.a.videoHeight
                    : !1;
                };
                X.prototype.isAudioOnly = X.prototype.We;
                X.prototype.Ff = function () {
                  if (this.b) {
                    var b = this.b.presentationTimeline;
                    return { start: b.ib(), end: b.wa() };
                  }
                  return this.a &&
                    this.a.src &&
                    ((b = this.a.seekable), b.length)
                    ? { start: b.start(0), end: b.end(b.length - 1) }
                    : { start: 0, end: 0 };
                };
                X.prototype.seekRange = X.prototype.Ff;
                X.prototype.keySystem = function () {
                  return this.h ? this.h.keySystem() : "";
                };
                X.prototype.keySystem = X.prototype.keySystem;
                X.prototype.drmInfo = function () {
                  return this.h ? this.h.a : null;
                };
                X.prototype.drmInfo = X.prototype.drmInfo;
                X.prototype.bc = function () {
                  return this.h ? this.h.bc() : Infinity;
                };
                X.prototype.getExpiration = X.prototype.bc;
                X.prototype.Ic = function () {
                  return this.V ? this.V.a == Uh : !1;
                };
                X.prototype.isBuffering = X.prototype.Ic;
                X.prototype.Le = function () {
                  if (this.K) {
                    var b = this.K;
                    b = b.g ? 0 : b.f;
                  } else b = 0;
                  return b;
                };
                X.prototype.getPlaybackRate = X.prototype.Le;
                X.prototype.ag = function (b) {
                  0 == b
                    ? $a("A trick play rate of 0 is unsupported!")
                    : (this.g == yl && this.K.set(b),
                      this.g == tl &&
                        (this.K.set(b), Oi(this.f, 1 < Math.abs(b))));
                };
                X.prototype.trickPlay = X.prototype.ag;
                X.prototype.qe = function () {
                  this.g == yl && this.K.set(1);
                  this.g == tl && (this.K.set(1), Oi(this.f, !1));
                };
                X.prototype.cancelTrickPlay = X.prototype.qe;
                X.prototype.Hc = function () {
                  if (this.b && this.o) {
                    for (
                      var b = Cl(this), c = [], d = r(Dl(this)), e = d.next();
                      !e.done;
                      e = d.next()
                    ) {
                      e = e.value;
                      var f = we(e);
                      f.active = e == b;
                      c.push(f);
                    }
                    return c;
                  }
                  return this.a && this.a.audioTracks
                    ? Array.from(this.a.audioTracks).map(function (b) {
                        var c = Ae(b);
                        c.active = b.enabled;
                        c.type = "variant";
                        c.originalAudioId = b.id;
                        "main" == b.kind
                          ? ((c.primary = !0),
                            (c.roles = ["main"]),
                            (c.audioRoles = ["main"]))
                          : (c.audioRoles = []);
                        return c;
                      })
                    : [];
                };
                X.prototype.getVariantTracks = X.prototype.Hc;
                X.prototype.kb = function () {
                  if (this.b && this.o) {
                    for (
                      var b = El(this), c = [], d = r(Fl(this)), e = d.next();
                      !e.done;
                      e = d.next()
                    ) {
                      e = e.value;
                      var f = xe(e);
                      f.active = e == b;
                      c.push(f);
                    }
                    return c;
                  }
                  return this.a && this.a.src && this.a.textTracks
                    ? Array.from(this.a.textTracks).map(function (b) {
                        var c = Ae(b);
                        c.active = "disabled" != b.mode;
                        c.type = "text";
                        c.originalTextId = b.id;
                        "captions" == b.kind &&
                          (c.mimeType = "application/cea-608");
                        return c;
                      })
                    : [];
                };
                X.prototype.getTextTracks = X.prototype.kb;
                X.prototype.bd = function (b) {
                  if (this.b && this.f) {
                    var c = wl(this),
                      d = c.textStreams.find(function (c) {
                        return c.id == b.id;
                      });
                    d &&
                      (Hh(this.C, c, d),
                      Hk(this.v.b, d, !1),
                      Gl(this, d),
                      (this.Ka = d.language));
                  } else if (this.a && this.a.src && this.a.textTracks) {
                    c = Array.from(this.a.textTracks);
                    c = r(c);
                    for (d = c.next(); !d.done; d = c.next())
                      (d = d.value),
                        ye(d) == b.id
                          ? (d.mode = this.$a ? "showing" : "hidden")
                          : (d.mode = "disabled");
                    Hl(this);
                  }
                };
                X.prototype.selectTextTrack = X.prototype.bd;
                X.prototype.Hf = function () {
                  Ke(
                    "selectEmbeddedTextTrack",
                    "If closed captions are signaled in the manifest, a text stream will be created to represent them. Please use SelectTextTrack."
                  );
                  var b = this.kb().filter(function (b) {
                    return "application/cea-608" == b.mimeType;
                  });
                  0 < b.length && this.bd(b[0]);
                };
                X.prototype.selectEmbeddedTextTrack = X.prototype.Hf;
                X.prototype.fg = function () {
                  Ke(
                    "usingEmbeddedTextTrack",
                    "If closed captions are signaled in the manifest, a text stream will be created to represent them. There should be no reason to know if the player is playing embedded text."
                  );
                  var b = this.kb().filter(function (b) {
                    return b.active;
                  })[0];
                  return b ? "application/cea-608" == b.mimeType : !1;
                };
                X.prototype.usingEmbeddedTextTrack = X.prototype.fg;
                X.prototype.Jf = function (b, c, d) {
                  d = void 0 === d ? 0 : d;
                  if (this.b && this.f) {
                    var e = wl(this);
                    this.c.abr.enabled &&
                      $a(
                        "Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack()."
                      );
                    var f = e.variants.find(function (c) {
                      return c.id == b.id;
                    });
                    f &&
                      Be(f) &&
                      (ml(this, e, f, !1),
                      Il(this, f, c, d),
                      (this.Rb = new Oh(f)),
                      xl(this, e.variants));
                  } else if (this.a && this.a.audioTracks) {
                    c = Array.from(this.a.audioTracks);
                    c = r(c);
                    for (d = c.next(); !d.done; d = c.next())
                      (d = d.value), ye(d) == b.id && (d.enabled = !0);
                    Jl(this);
                  }
                };
                X.prototype.selectVariantTrack = X.prototype.Jf;
                X.prototype.ze = function () {
                  return Kl(this.Hc());
                };
                X.prototype.getAudioLanguagesAndRoles = X.prototype.ze;
                X.prototype.Se = function () {
                  return Kl(this.kb());
                };
                X.prototype.getTextLanguagesAndRoles = X.prototype.Se;
                X.prototype.ye = function () {
                  return Array.from(Ll(this.Hc()));
                };
                X.prototype.getAudioLanguages = X.prototype.ye;
                X.prototype.Re = function () {
                  return Array.from(Ll(this.kb()));
                };
                X.prototype.getTextLanguages = X.prototype.Re;
                X.prototype.Gf = function (b, c) {
                  if (this.b && this.o) {
                    var d = wl(this);
                    this.Rb = new Ph(b, c || "", 0);
                    Al(this, d);
                  } else if (this.a && this.a.audioTracks) {
                    d = Array.from(this.a.audioTracks);
                    d = r(d);
                    for (var e = d.next(); !e.done; e = d.next())
                      (e = e.value), e.language == b && (e.enabled = !0);
                    Jl(this);
                  }
                };
                X.prototype.selectAudioLanguage = X.prototype.Gf;
                X.prototype.If = function (b, c) {
                  if (this.b && this.o) {
                    var d = wl(this);
                    this.Ka = b;
                    this.yb = c || "";
                    Al(this, d);
                  } else
                    (d = this.kb().filter(function (c) {
                      return c.language == b;
                    })[0]) && this.bd(d);
                };
                X.prototype.selectTextLanguage = X.prototype.If;
                X.prototype.Lc = function () {
                  var b = this.$a;
                  return this.b
                    ? this.F.h.isTextVisible()
                    : this.a && this.a.src && this.a.textTracks
                    ? Array.from(this.a.textTracks).some(function (b) {
                        return "showing" == b.mode;
                      })
                    : b;
                };
                X.prototype.isTextTrackVisible = X.prototype.Lc;
                X.prototype.Mf = function (b) {
                  var c = this;
                  return t(function e() {
                    var f, g, h, k, l, m;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          f = c.$a;
                          g = b;
                          if (f == g) return e["return"]();
                          c.$a = g;
                          if (c.g != tl) {
                            if (c.a && c.a.src && c.a.textTracks) {
                              h = Array.from(c.a.textTracks);
                              for (
                                var n = r(h), x = n.next();
                                !x.done;
                                x = n.next()
                              )
                                (k = x.value),
                                  "disabled" != k.mode &&
                                    (k.mode = b ? "showing" : "hidden");
                            }
                            e.A(2);
                            break;
                          }
                          c.F.h.setTextVisibility(b);
                          if (c.c.streaming.alwaysStreamText) {
                            e.A(2);
                            break;
                          }
                          if (!b) {
                            n = c.f;
                            n.C = !0;
                            if ((x = n.b.get("text")))
                              Ei(x), n.b["delete"]("text");
                            e.A(2);
                            break;
                          }
                          l = wl(c);
                          m = Ee(l.textStreams, c.Ka, c.yb);
                          if (!(0 < m.length)) {
                            e.A(2);
                            break;
                          }
                          return u(e, Ki(c.f, m[0]), 2);
                        case 2:
                          Ml(c), v(e);
                      }
                    });
                  });
                };
                X.prototype.setTextTrackVisibility = X.prototype.Mf;
                X.prototype.Ne = function () {
                  if (!this.U()) return null;
                  if (this.b)
                    return new Date(
                      1e3 * (this.b.presentationTimeline.f + this.a.currentTime)
                    );
                  if (this.a && this.a.getStartDate) {
                    var b = this.a.getStartDate();
                    return isNaN(b.getTime())
                      ? null
                      : new Date(b.getTime() + 1e3 * this.a.currentTime);
                  }
                  return null;
                };
                X.prototype.getPlayheadTimeAsDate = X.prototype.Ne;
                X.prototype.Pe = function () {
                  if (!this.U()) return null;
                  if (this.b)
                    return new Date(1e3 * this.b.presentationTimeline.f);
                  if (this.a && this.a.getStartDate) {
                    var b = this.a.getStartDate();
                    return isNaN(b.getTime()) ? null : b;
                  }
                  return null;
                };
                X.prototype.getPresentationStartTimeAsDate = X.prototype.Pe;
                X.prototype.Dc = function () {
                  var b = { total: [], audio: [], video: [], text: [] };
                  this.g == yl && (b.total = sd(this.a.buffered));
                  this.g == tl && this.F.Dc(b);
                  return b;
                };
                X.prototype.getBufferedInfo = X.prototype.Dc;
                X.prototype.getStats = function () {
                  if (this.g != tl && this.g != yl)
                    return {
                      width: NaN,
                      height: NaN,
                      streamBandwidth: NaN,
                      decodedFrames: NaN,
                      droppedFrames: NaN,
                      estimatedBandwidth: NaN,
                      loadLatency: NaN,
                      playTime: NaN,
                      pauseTime: NaN,
                      bufferingTime: NaN,
                      switchHistory: [],
                      stateHistory: [],
                    };
                  jl(this);
                  var b = this.a;
                  if (b.getVideoPlaybackQuality) {
                    b = b.getVideoPlaybackQuality();
                    var c = this.v,
                      d = Number(b.totalVideoFrames);
                    c.i = Number(b.droppedVideoFrames);
                    c.h = d;
                  }
                  if (this.g == tl) {
                    if ((b = Cl(this))) this.v.j = b.bandwidth;
                    b &&
                      b.video &&
                      ((c = this.v),
                      (d = b.video.height || NaN),
                      (c.m = b.video.width || NaN),
                      (c.g = d));
                    b = this.j.getBandwidthEstimate();
                    this.v.f = b;
                  }
                  var e = this.v;
                  b = e.m;
                  c = e.g;
                  d = e.j;
                  var f = e.h,
                    g = e.i,
                    h = e.f,
                    k = e.c,
                    l = Ek(e.a, "playing"),
                    m = Ek(e.a, "paused"),
                    n = Ek(e.a, "buffering"),
                    q = Fk(e.a),
                    x = [];
                  e = r(e.b.a);
                  for (var w = e.next(); !w.done; w = e.next())
                    (w = w.value),
                      x.push({
                        timestamp: w.timestamp,
                        id: w.id,
                        type: w.type,
                        fromAdaptation: w.fromAdaptation,
                        bandwidth: w.bandwidth,
                      });
                  return {
                    width: b,
                    height: c,
                    streamBandwidth: d,
                    decodedFrames: f,
                    droppedFrames: g,
                    estimatedBandwidth: h,
                    loadLatency: k,
                    playTime: l,
                    pauseTime: m,
                    bufferingTime: n,
                    stateHistory: q,
                    switchHistory: x,
                  };
                };
                X.prototype.getStats = X.prototype.getStats;
                X.prototype.addTextTrack = function (b, c, d, e, f, g) {
                  var h = this;
                  return t(function l() {
                    var m, n, q, x, w, A, C, E, F;
                    return y(l, function (l) {
                      switch (l.l) {
                        case 1:
                          if (h.g == yl) throw Error("State error!");
                          if (h.g != tl) throw Error("State error!");
                          m = wl(h);
                          n = wd;
                          q = h.b.periods.indexOf(m);
                          x = q + 1;
                          w =
                            x >= h.b.periods.length
                              ? h.b.presentationTimeline.Y()
                              : h.b.periods[x].startTime;
                          A = w - m.startTime;
                          if (Infinity == A) throw new D(1, 4, 4033);
                          C = new Q(
                            1,
                            0,
                            A,
                            function () {
                              return [b];
                            },
                            0,
                            null
                          );
                          E = {
                            id: h.Ad++,
                            originalId: null,
                            createSegmentIndex: Promise.resolve.bind(Promise),
                            findSegmentPosition: function () {
                              return 1;
                            },
                            getSegmentReference: function (b) {
                              return 1 == b ? C : null;
                            },
                            initSegmentReference: null,
                            presentationTimeOffset: 0,
                            mimeType: e,
                            codecs: f || "",
                            kind: d,
                            encrypted: !1,
                            keyId: null,
                            language: c,
                            label: g || null,
                            type: n.na,
                            primary: !1,
                            trickModeVideo: null,
                            emsgSchemeIdUris: null,
                            roles: [],
                            channelsCount: null,
                            closedCaptions: null,
                          };
                          h.Tb.add(E);
                          m.textStreams.push(E);
                          return u(l, Ki(h.f, E), 2);
                        case 2:
                          return (
                            (F = Ii(h.f, "text")) && Hh(h.C, m, F),
                            h.Tb["delete"](E),
                            Al(h, m),
                            vl(h),
                            l["return"](xe(E))
                          );
                      }
                    });
                  });
                };
                X.prototype.addTextTrack = X.prototype.addTextTrack;
                X.prototype.dd = function (b, c) {
                  this.Ub.width = b;
                  this.Ub.height = c;
                };
                X.prototype.setMaxHardwareResolution = X.prototype.dd;
                X.prototype.ad = function () {
                  if (this.g == tl) {
                    var b = this.f;
                    if (b.f) b = !1;
                    else if (b.m) b = !1;
                    else {
                      for (
                        var c = r(b.b.values()), d = c.next();
                        !d.done;
                        d = c.next()
                      )
                        (d = d.value), d.Eb && ((d.Eb = !1), Ni(b, d, 0.1));
                      b = !0;
                    }
                  } else b = !1;
                  return b;
                };
                X.prototype.retryStreaming = X.prototype.ad;
                X.prototype.Fe = function () {
                  return this.b;
                };
                X.prototype.getManifest = X.prototype.Fe;
                X.prototype.Ge = function () {
                  return this.m ? this.m.constructor : null;
                };
                X.prototype.getManifestParserFactory = X.prototype.Ge;
                function ml(b, c, d, e) {
                  Ih(b.C, c).variant = d;
                  b = b.v.b;
                  b.c != d &&
                    ((b.c = d),
                    b.a.push({
                      timestamp: Date.now() / 1e3,
                      id: d.id,
                      type: "variant",
                      fromAdaptation: e,
                      bandwidth: d.bandwidth,
                    }));
                }
                function Kk(b) {
                  var c = zk();
                  c.streaming.failureCallback = function (c) {
                    var d = [1001, 1002, 1003];
                    b.U() && d.includes(c.code) && ((c.severity = 1), b.ad());
                  };
                  c.textDisplayFactory = function () {
                    return new vk(b.a);
                  };
                  return c;
                }
                function kl(b, c) {
                  for (var d = 0; d < c.length; d++) {
                    for (
                      var e = c[d],
                        f = new Map(),
                        g = r(e.variants),
                        h = g.next();
                      !h.done;
                      h = g.next()
                    )
                      if (((h = h.value), h.video && h.video.closedCaptions)) {
                        h = h.video;
                        for (
                          var k = r(h.closedCaptions.keys()), l = k.next();
                          !l.done;
                          l = k.next()
                        )
                          if (((l = l.value), !f.has(l))) {
                            var m = {
                              id: b.Ad++,
                              originalId: l,
                              createSegmentIndex: Promise.resolve.bind(Promise),
                              findSegmentPosition: function () {
                                return null;
                              },
                              getSegmentReference: function () {
                                return null;
                              },
                              initSegmentReference: null,
                              presentationTimeOffset: 0,
                              mimeType: "application/cea-608",
                              codecs: "",
                              kind: "caption",
                              encrypted: !1,
                              keyId: null,
                              language: h.closedCaptions.get(l),
                              label: null,
                              type: "text",
                              primary: !1,
                              trickModeVideo: null,
                              emsgSchemeIdUris: null,
                              roles: h.roles,
                              channelsCount: null,
                              closedCaptions: null,
                            };
                            f.set(l, m);
                          }
                      }
                    f = r(f.values());
                    for (g = f.next(); !g.done; g = f.next())
                      e.textStreams.push(g.value);
                  }
                }
                function fl(b, c) {
                  var d = b.f ? Hi(b.f) : null,
                    e = b.f ? Ji(b.f) : null;
                  c.forEach(ue.bind(null, b.h, d, e));
                  d = Lb(c, function (b) {
                    return b.variants.some(Be);
                  });
                  if (0 == d) throw new D(2, 4, 4032);
                  if (d < c.length) throw new D(2, 4, 4011);
                  c.forEach(
                    function (b) {
                      te(b.variants, this.c.restrictions, this.Ub) &&
                        this.f &&
                        wl(this) == b &&
                        vl(this);
                      Nl(this, b.variants);
                    }.bind(b)
                  );
                }
                p = X.prototype;
                p.Bc = function (b) {
                  var c = this.f ? Hi(this.f) : null,
                    d = this.f ? Ji(this.f) : null;
                  ue(this.h, c, d, b);
                  c = b.variants;
                  if (!c.some(Be)) throw new D(2, 4, 4011);
                  Nl(this, b.variants);
                  te(c, this.c.restrictions, this.Ub) &&
                    this.f &&
                    wl(this) == b &&
                    vl(this);
                  if ((b = this.h ? this.h.a : null))
                    for (c = r(c), d = c.next(); !d.done; d = c.next()) {
                      d = r(d.value.drmInfos);
                      for (var e = d.next(); !e.done; e = d.next())
                        if (((e = e.value), e.keySystem == b.keySystem)) {
                          e = r(e.initData || []);
                          for (var f = e.next(); !f.done; f = e.next())
                            (f = f.value),
                              Xc(this.h, f.initDataType, f.initData);
                        }
                    }
                };
                function Il(b, c, d, e) {
                  d = void 0 === d ? !1 : d;
                  e = void 0 === e ? 0 : e;
                  b.eb
                    ? ((b.ka = c), (b.yd = d), (b.wd = e))
                    : (Qi(b.f, c, d, e), Jl(b));
                }
                function Gl(b, c) {
                  b.eb ? (b.ja = c) : (Pi(b.f, c, !0, 0), Hl(b));
                }
                function ul(b, c) {
                  function d(b, c) {
                    if (!b) return null;
                    var d = b.findSegmentPosition(c - g.startTime);
                    return null == d
                      ? null
                      : (d = b.getSegmentReference(d))
                      ? d.startTime + g.startTime
                      : null;
                  }
                  var e = Hi(b.f),
                    f = Ji(b.f),
                    g = wl(b);
                  e = d(e, c);
                  f = d(f, c);
                  return null != f && null != e
                    ? Math.max(f, e)
                    : null != f
                    ? f
                    : null != e
                    ? e
                    : c;
                }
                function dl(b) {
                  var c = b.Ic();
                  if (b.v && b.V && b.o) {
                    var d = b.K;
                    d.g = c;
                    hi(d);
                    jl(b);
                  }
                  b.dispatchEvent(new I("buffering", { buffering: c }));
                }
                function jl(b) {
                  if (b.v && b.V) {
                    var c = b.v.a;
                    b.V.a == Uh
                      ? Dk(c, "buffering")
                      : b.a.paused
                      ? Dk(c, "paused")
                      : b.a.ended
                      ? Dk(c, "ended")
                      : Dk(c, "playing");
                  }
                }
                function xl(b, c) {
                  try {
                    Nl(b, c);
                  } catch (e) {
                    return b.Ha(e), null;
                  }
                  var d = c.filter(function (b) {
                    return Be(b);
                  });
                  d = b.Rb.create(d);
                  b.j.setVariants(Array.from(d.values()));
                  return b.j.chooseVariant();
                }
                function Al(b, c) {
                  var d = xl(b, c.variants);
                  d && (ml(b, c, d, !0), Il(b, d, !0));
                  (d = Ee(c.textStreams, b.Ka, b.yb)[0] || null) &&
                    (b.c.streaming.alwaysStreamText || b.Lc()) &&
                    (Hh(b.C, c, d), Hk(b.v.b, d, !0), Gl(b, d));
                  nl(b);
                }
                p.Ze = function (b) {
                  try {
                    this.eb = !0;
                    this.j.disable();
                    Bl(this);
                    var c = xl(this, b.variants),
                      d = Ee(b.textStreams, this.Ka, this.yb)[0] || null;
                    this.ka &&
                      (b.variants.includes(this.ka) && (c = this.ka),
                      (this.ka = null));
                    this.ja &&
                      (b.textStreams.includes(this.ja) && (d = this.ja),
                      (this.ja = null));
                    c && ml(this, b, c, !0);
                    if (d) {
                      var e = d;
                      Hh(this.C, b, e);
                      Hk(this.v.b, e, !0);
                    }
                    var f = this.f,
                      g = f.b.get("video");
                    if (g) var h = f.c.periods[g.ya];
                    else {
                      var k = f.b.get("audio");
                      h = k ? f.c.periods[k.ya] : null;
                    }
                    var l = c ? c.audio : null;
                    if (!h && d) {
                      var m;
                      if ((m = l)) {
                        b = d;
                        var n = M(this.c.preferredTextLanguage),
                          q = M(l.language),
                          x = M(b.language);
                        m = ne(x, n) && !ne(q, x);
                      }
                      m && (this.$a = !0);
                      this.$a && this.F.h.setTextVisibility(!0);
                      Ml(this);
                    }
                    return this.c.streaming.alwaysStreamText || this.Lc()
                      ? { variant: c, text: d }
                      : { variant: c, text: null };
                  } catch (w) {
                    return this.Ha(w), { variant: null, text: null };
                  }
                };
                p.pe = function () {
                  this.eb = !1;
                  this.c.abr.enabled && (this.j.enable(), Bl(this));
                  this.ka &&
                    (Qi(this.f, this.ka, this.yd, this.wd),
                    Jl(this),
                    (this.ka = null));
                  this.ja &&
                    (Pi(this.f, this.ja, !0, 0), Hl(this), (this.ja = null));
                };
                p.df = function () {
                  this.m && this.m.update && this.m.update();
                };
                p.kf = function () {
                  this.o && this.o.v();
                };
                function nl(b) {
                  Ol(b, new I("adaptation"));
                }
                function vl(b) {
                  Ol(b, new I("trackschanged"));
                }
                function Jl(b) {
                  Ol(b, new I("variantchanged"));
                }
                function Hl(b) {
                  Ol(b, new I("textchanged"));
                }
                function Ml(b) {
                  Ol(b, new I("texttrackvisibility"));
                }
                function Bl(b) {
                  Ol(b, new I("abrstatuschanged", { qg: b.c.abr.enabled }));
                }
                p.Ha = function (b) {
                  if (this.g != Wk) {
                    var c = new I("error", { detail: b });
                    this.dispatchEvent(c);
                    c.defaultPrevented && (b.handled = !0);
                  }
                };
                function el(b, c, d) {
                  b.dispatchEvent(
                    new I(c, {
                      detail: {
                        schemeIdUri: d.schemeIdUri,
                        value: d.value,
                        startTime: d.startTime,
                        endTime: d.endTime,
                        id: d.id,
                        eventElement: d.eventElement,
                      },
                    })
                  );
                }
                function cl(b) {
                  if (!b.a.error) return null;
                  var c = b.a.error.code;
                  if (1 == c) return null;
                  var d = b.a.error.msExtendedCode;
                  d && (0 > d && (d += Math.pow(2, 32)), (d = d.toString(16)));
                  return new D(2, 3, 3016, c, d, b.a.error.message);
                }
                function hl(b, c) {
                  if (b.f) {
                    var d = wl(b),
                      e = !1,
                      f = Object.keys(c),
                      g = 1 == f.length && "00" == f[0];
                    f.length &&
                      d.variants.forEach(function (b) {
                        He(b).forEach(function (d) {
                          var f = b.allowedByKeySystem;
                          d.keyId &&
                            ((d = c[g ? "00" : d.keyId]),
                            (b.allowedByKeySystem = !!d && !Yk.includes(d)));
                          f != b.allowedByKeySystem && (e = !0);
                        });
                      });
                    f = Hi(b.f);
                    var h = Ji(b.f);
                    (f = Ge(f, h, d.variants)) &&
                      !f.allowedByKeySystem &&
                      Al(b, d);
                    e && (vl(b), xl(b, d.variants));
                  }
                }
                function il(b, c, d) {
                  if (b.m && b.m.onExpirationUpdated)
                    b.m.onExpirationUpdated(c, d);
                  b.dispatchEvent(new I("expirationupdated"));
                }
                function ll(b, c, d) {
                  0 < c && (b.U() || b.$d(c));
                  d < b.Y() && (b.U() || b.ta(d));
                }
                function Nl(b, c) {
                  var d = b.h ? hc(b.h.S) : {},
                    e = Object.keys(d);
                  e = e.length && "00" == e[0];
                  for (
                    var f = !1, g = !1, h = [], k = [], l = r(c), m = l.next();
                    !m.done;
                    m = l.next()
                  ) {
                    m = m.value;
                    var n = [];
                    m.audio && n.push(m.audio);
                    m.video && n.push(m.video);
                    n = r(n);
                    for (var q = n.next(); !q.done; q = n.next())
                      if (((q = q.value), q.keyId)) {
                        var x = d[e ? "00" : q.keyId];
                        x
                          ? Yk.includes(x) && (k.includes(x) || k.push(x))
                          : h.includes(q.keyId) || h.push(q.keyId);
                      }
                    m.allowedByApplication
                      ? m.allowedByKeySystem && (f = !0)
                      : (g = !0);
                  }
                  if (!f)
                    throw new D(2, 4, 4012, {
                      hasAppRestrictions: g,
                      missingKeys: h,
                      restrictedKeyStatuses: k,
                    });
                }
                function Ol(b, c) {
                  t(function e() {
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return u(e, Promise.resolve(), 2);
                        case 2:
                          b.g != Wk && b.dispatchEvent(c), v(e);
                      }
                    });
                  });
                }
                function Ll(b) {
                  var c = new Set();
                  b = r(b);
                  for (var d = b.next(); !d.done; d = b.next())
                    (d = d.value),
                      d.language ? c.add(M(d.language)) : c.add("und");
                  return c;
                }
                function Kl(b) {
                  var c = new Map();
                  b = r(b);
                  for (var d = b.next(); !d.done; d = b.next()) {
                    var e = d.value;
                    d = "und";
                    var f = [];
                    e.language && (d = M(e.language));
                    "variant" == e.type ? (f = e.audioRoles) : (f = e.roles);
                    (f && f.length) || (f = [""]);
                    c.has(d) || c.set(d, new Set());
                    e = r(f);
                    for (f = e.next(); !f.done; f = e.next())
                      (f = f.value), c.get(d).add(f);
                  }
                  var g = [];
                  c.forEach(function (b, c) {
                    for (var d = r(b), e = d.next(); !e.done; e = d.next())
                      g.push({ language: c, role: e.value });
                  });
                  return g;
                }
                function Dl(b) {
                  b = wl(b);
                  return null == b
                    ? []
                    : b.variants.filter(function (b) {
                        return Be(b);
                      });
                }
                function Fl(b) {
                  var c = wl(b);
                  return null == c
                    ? []
                    : c.textStreams.filter(function (c) {
                        return !b.Tb.has(c);
                      });
                }
                function wl(b) {
                  var c = b.o.i(),
                    d = null;
                  b = r(b.b.periods);
                  for (var e = b.next(); !e.done; e = b.next())
                    (e = e.value), e.startTime <= c && (d = e);
                  return d;
                }
                function Cl(b) {
                  var c = wl(b);
                  return Ih(b.C, c).variant;
                }
                function El(b) {
                  var c = wl(b);
                  if (null == c) return null;
                  if (!Ih(b.C, c).text) {
                    var d = Ee(c.textStreams, b.Ka, b.yb);
                    d.length && Hh(b.C, c, d[0]);
                  }
                  return Ih(b.C, c).text;
                }
                function $k() {
                  return new D(2, 7, 7e3);
                }
                function Vk(b, c, d, e, f, g) {
                  return e == b &&
                    f.u == g.u &&
                    f.uri == g.uri &&
                    f.mimeType == g.mimeType &&
                    f.va == g.va
                    ? c
                    : d;
                }
                function qk() {
                  return {
                    va: null,
                    u: null,
                    mimeType: null,
                    startTime: null,
                    hd: null,
                    uri: null,
                  };
                }
                function al(b) {
                  return new Promise(function (c, d) {
                    b.Ua = function () {
                      return d($k());
                    };
                    b.fc = function () {
                      return c();
                    };
                    b.onError = function (b) {
                      return d(b);
                    };
                    b.hc = function () {
                      return d($k());
                    };
                  });
                }
                var Wk = 0,
                  Jk = 1,
                  tl = 2,
                  yl = 3;
                X.LoadMode = {
                  DESTROYED: Wk,
                  NOT_LOADED: Jk,
                  MEDIA_SOURCE: tl,
                  SRC_EQUALS: yl,
                };
                function Pl(b, c, d) {
                  var e = void 0 == c.expiration ? Infinity : c.expiration,
                    f = c.presentationTimeline.Y();
                  c = Ql(c.periods[0]);
                  return {
                    offlineUri: null,
                    originalManifestUri: b,
                    duration: f,
                    size: 0,
                    expiration: e,
                    tracks: c,
                    appMetadata: d,
                  };
                }
                function Rl(b, c) {
                  var d = fk(
                      new dk(b.ra(), b.$()),
                      c.periods[0],
                      new W(null, 0)
                    ),
                    e = c.appMetadata || {};
                  d = Ql(d);
                  return {
                    offlineUri: b.toString(),
                    originalManifestUri: c.originalManifestUri,
                    duration: c.duration,
                    size: c.size,
                    expiration: c.expiration,
                    tracks: d,
                    appMetadata: e,
                  };
                }
                function Ql(b) {
                  var c = [],
                    d = Ce(b.variants);
                  d = r(d);
                  for (var e = d.next(); !e.done; e = d.next())
                    c.push(we(e.value));
                  b = r(b.textStreams);
                  for (d = b.next(); !d.done; d = b.next()) c.push(xe(d.value));
                  return c;
                }
                function Sl() {
                  this.a = {};
                }
                function Tl(b, c, d) {
                  d = d.endTime - d.startTime;
                  return Ul(b, c) * d;
                }
                function Ul(b, c) {
                  var d = b.a[c];
                  null == d && (d = 0);
                  return d;
                }
                function Vl(b) {
                  this.a = !1;
                  this.b = new G();
                  this.c = b;
                }
                Vl.prototype.destroy = function () {
                  var b = this;
                  if (this.a) return this.b;
                  this.a = !0;
                  return this.c().then(
                    function () {
                      b.b.resolve();
                    },
                    function () {
                      b.b.resolve();
                    }
                  );
                };
                function Wl(b, c) {
                  for (
                    var d = { width: Infinity, height: Infinity },
                      e = r(b.periods),
                      f = e.next();
                    !f.done;
                    f = e.next()
                  )
                    (f = f.value),
                      (f.variants = f.variants.filter(function (b) {
                        return se(b, c, d);
                      }));
                }
                function Xl(b) {
                  b = r(b.periods);
                  for (var c = b.next(); !c.done; c = b.next())
                    (c = c.value),
                      (c.variants = c.variants.filter(function (b) {
                        var c = !0;
                        b.audio && (c = c && be(b.audio));
                        b.video && (c = c && be(b.video));
                        return c;
                      }));
                }
                function Yl(b, c) {
                  for (
                    var d = r(b.periods), e = d.next();
                    !e.done;
                    e = d.next()
                  )
                    (e = e.value),
                      (e.variants = e.variants.filter(function (b) {
                        return kd(c, b);
                      }));
                }
                function Zl(b) {
                  var c = new $l();
                  b.periods.forEach(function (b, d) {
                    var e = am(b.variants);
                    if (0 == d) {
                      e = r(e.a);
                      for (var f = e.next(); !f.done; f = e.next())
                        c.add(f.value);
                    } else bm(c, e);
                  });
                  b = r(b.periods);
                  for (var d = b.next(); !d.done; d = b.next())
                    (d = d.value),
                      (d.variants = d.variants.filter(function (b) {
                        return cm(c, new dm(b));
                      }));
                }
                function em(b, c) {
                  var d = new $l();
                  b.periods.forEach(function (b, f) {
                    0 < f &&
                      (b.variants = b.variants.filter(function (b) {
                        return cm(d, new dm(b));
                      }));
                    c(b);
                    d = am(b.variants);
                  });
                }
                function dm(b) {
                  var c = b.audio;
                  b = b.video;
                  this.b = c ? c.mimeType : null;
                  this.a = c ? c.codecs.split(".")[0] : null;
                  this.f = b ? b.mimeType : null;
                  this.c = b ? b.codecs.split(".")[0] : null;
                }
                function $l() {
                  this.a = [];
                }
                $l.prototype.add = function (b) {
                  cm(this, b) || this.a.push(b);
                };
                function bm(b, c) {
                  b.a = b.a.filter(function (b) {
                    return cm(c, b);
                  });
                }
                function cm(b, c) {
                  return b.a.some(function (b) {
                    return c.b == b.b && c.a == b.a && c.f == b.f && c.c == b.c;
                  });
                }
                function am(b) {
                  var c = new $l();
                  b = r(b);
                  for (var d = b.next(); !d.done; d = b.next())
                    c.add(new dm(d.value));
                  return c;
                }
                function Z(b) {
                  var c = this;
                  if (b && b.constructor != X) throw new D(2, 9, 9008);
                  this.b = this.a = null;
                  b
                    ? ((this.a = b.c), (this.b = b.Bb()))
                    : ((this.a = zk()), (this.b = new K()));
                  this.f = !1;
                  this.c = [];
                  this.g = [];
                  var d = !b;
                  this.h = new Vl(function () {
                    return t(function f() {
                      var b;
                      return y(f, function (f) {
                        switch (f.l) {
                          case 1:
                            return (
                              (b = function () {}),
                              u(
                                f,
                                Promise.all(
                                  c.g.map(function (c) {
                                    return c.then(b, b);
                                  })
                                ),
                                2
                              )
                            );
                          case 2:
                            if (!d) {
                              f.A(3);
                              break;
                            }
                            return u(f, c.b.destroy(), 3);
                          case 3:
                            (c.a = null), (c.b = null), v(f);
                        }
                      });
                    });
                  });
                }
                z("shaka.offline.Storage", Z);
                function fm() {
                  if (mc())
                    a: {
                      var b = r(Dj.values());
                      for (var c = b.next(); !c.done; c = b.next())
                        if (((c = c.value), (c = c()))) {
                          c.destroy();
                          b = !0;
                          break a;
                        }
                      b = !1;
                    }
                  else b = !1;
                  return b;
                }
                Z.support = fm;
                Z.prototype.destroy = function () {
                  return this.h.destroy();
                };
                Z.prototype.destroy = Z.prototype.destroy;
                Z.prototype.configure = function (b) {
                  var c = !1;
                  null != b.trackSelectionCallback &&
                    ((c = !0),
                    (b.offline = b.offline || {}),
                    (b.offline.trackSelectionCallback =
                      b.trackSelectionCallback),
                    delete b.trackSelectionCallback);
                  null != b.progressCallback &&
                    ((c = !0),
                    (b.offline = b.offline || {}),
                    (b.offline.progressCallback = b.progressCallback),
                    delete b.progressCallback);
                  null != b.usePersistentLicense &&
                    ((c = !0),
                    (b.offline = b.offline || {}),
                    (b.offline.usePersistentLicense = b.usePersistentLicense),
                    delete b.usePersistentLicense);
                  c &&
                    Ke(
                      "Storage.configure with OfflineConfig",
                      "Please configure storage with a player configuration."
                    );
                  return Bk(this.a, b);
                };
                Z.prototype.configure = Z.prototype.configure;
                Z.prototype.getConfiguration = function () {
                  var b = zk();
                  Bk(b, this.a, zk());
                  return b;
                };
                Z.prototype.getConfiguration = Z.prototype.getConfiguration;
                Z.prototype.Bb = function () {
                  return this.b;
                };
                Z.prototype.getNetworkingEngine = Z.prototype.Bb;
                Z.prototype.store = function (b, c, d) {
                  var e = this;
                  return gm(
                    this,
                    hm(this, b, c || {}, function () {
                      return t(function g() {
                        var c, k;
                        return y(g, function (g) {
                          switch (g.l) {
                            case 1:
                              return d && "string" != typeof d
                                ? (Ke(
                                    "Storing with a manifest parser factory",
                                    "Please register a manifest parser and for the mime-type."
                                  ),
                                  (c = d),
                                  g["return"](new c()))
                                : u(
                                    g,
                                    U.create(
                                      b,
                                      e.b,
                                      e.a.manifest.retryParameters,
                                      d
                                    ),
                                    2
                                  );
                            case 2:
                              return (k = g.s), g["return"](k);
                          }
                        });
                      });
                    })
                  );
                };
                Z.prototype.store = Z.prototype.store;
                Z.prototype.Qe = function () {
                  return this.f;
                };
                Z.prototype.getStoreInProgress = Z.prototype.Qe;
                function hm(b, c, d, e) {
                  return t(function g() {
                    var h, k, l, m, n, q, x, w, A, C;
                    return y(g, function (g) {
                      switch (g.l) {
                        case 1:
                          im();
                          if (b.f)
                            return g["return"](
                              Promise.reject(new D(2, 9, 9006))
                            );
                          b.f = !0;
                          return u(g, jm(b, c, e), 2);
                        case 2:
                          h = g.s;
                          km(b);
                          k =
                            !h.presentationTimeline.U() &&
                            !h.presentationTimeline.Ta();
                          if (!k) throw new D(2, 9, 9005, c);
                          l = null;
                          m = new Cj();
                          q = n = null;
                          ya(g, 3, 4);
                          return u(
                            g,
                            lm(b, h, function (b) {
                              q = q || b;
                            }),
                            6
                          );
                        case 6:
                          l = g.s;
                          km(b);
                          if (q) throw q;
                          mm(b, h, l);
                          return u(g, m.init(), 7);
                        case 7:
                          return km(b), u(g, Ej(m), 8);
                        case 8:
                          return (
                            (n = g.s), km(b), u(g, nm(b, n.$, l, h, c, d), 9)
                          );
                        case 9:
                          x = g.s;
                          km(b);
                          if (q) throw q;
                          return u(g, n.$.addManifests([x]), 10);
                        case 10:
                          return (
                            (w = g.s),
                            km(b),
                            (A = new bk("manifest", n.path.ra, n.path.$, w[0])),
                            g["return"](Rl(A, x))
                          );
                        case 4:
                          return (
                            Ea(g), (b.f = !1), (b.c = []), u(g, m.destroy(), 11)
                          );
                        case 11:
                          if (!l) {
                            g.A(12);
                            break;
                          }
                          return u(g, l.destroy(), 12);
                        case 12:
                          Fa(g, 0);
                          break;
                        case 3:
                          C = Da(g);
                          if (!n) {
                            g.A(14);
                            break;
                          }
                          return u(
                            g,
                            n.$.removeSegments(b.c, function () {}),
                            14
                          );
                        case 14:
                          throw q || C;
                      }
                    });
                  });
                }
                function mm(b, c, d) {
                  Wl(c, b.a.restrictions);
                  Xl(c);
                  Yl(c, d);
                  Zl(c);
                  em(c, function (c) {
                    for (
                      var d = [], e = r(c.variants), h = e.next();
                      !h.done;
                      h = e.next()
                    )
                      d.push(we(h.value));
                    e = r(c.textStreams);
                    for (h = e.next(); !h.done; h = e.next())
                      d.push(xe(h.value));
                    d = b.a.offline.trackSelectionCallback(d);
                    var k = new Set(),
                      l = new Set();
                    d = r(d);
                    for (e = d.next(); !e.done; e = d.next())
                      (e = e.value),
                        "variant" == e.type && k.add(e.id),
                        "text" == e.type && l.add(e.id);
                    c.variants = c.variants.filter(function (b) {
                      return k.has(b.id);
                    });
                    c.textStreams = c.textStreams.filter(function (b) {
                      return l.has(b.id);
                    });
                  });
                  om(c);
                }
                function nm(b, c, d, e, f, g) {
                  return t(function k() {
                    var l, m, n, q;
                    return y(k, function (k) {
                      switch (k.l) {
                        case 1:
                          return (
                            (l = Pl(f, e, g)),
                            (m = new rj(b.b, function (c, d) {
                              l.size = d;
                              b.a.offline.progressCallback(l, c);
                            })),
                            za(k, 2),
                            (q = n = pm(b, m, c, d, e, f, g)),
                            u(k, uj(m), 4)
                          );
                        case 4:
                          return (q.size = k.s), k["return"](n);
                        case 2:
                          return Ea(k), u(k, m.destroy(), 5);
                        case 5:
                          Fa(k, 0);
                      }
                    });
                  });
                }
                Z.prototype.remove = function (b) {
                  return gm(this, qm(this, b));
                };
                Z.prototype.remove = Z.prototype.remove;
                function qm(b, c) {
                  return t(function e() {
                    var f, g, h, k, l, m;
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          im();
                          f = ck(c);
                          if (null == f || "manifest" != f.a)
                            return e["return"](
                              Promise.reject(new D(2, 9, 9004, c))
                            );
                          g = f;
                          h = new Cj();
                          za(e, 2);
                          return u(e, h.init(), 4);
                        case 4:
                          return u(e, Gj(h, g.ra(), g.$()), 5);
                        case 5:
                          return (k = e.s), u(e, k.getManifests([g.key()]), 6);
                        case 6:
                          return (
                            (l = e.s),
                            (m = l[0]),
                            u(e, Promise.all([rm(b, m, h), sm(b, k, g, m)]), 2)
                          );
                        case 2:
                          return Ea(e), u(e, h.destroy(), 8);
                        case 8:
                          Fa(e, 0);
                      }
                    });
                  });
                }
                function tm(b, c) {
                  for (
                    var d = [], e = r(b.periods), f = e.next();
                    !f.done;
                    f = e.next()
                  ) {
                    f = r(f.value.streams);
                    for (var g = f.next(); !g.done; g = f.next())
                      (g = g.value),
                        c && "video" == g.contentType
                          ? d.push({
                              contentType: ic(g.mimeType, g.codecs),
                              robustness: b.drmInfo.videoRobustness,
                            })
                          : c ||
                            "audio" != g.contentType ||
                            d.push({
                              contentType: ic(g.mimeType, g.codecs),
                              robustness: b.drmInfo.audioRobustness,
                            });
                  }
                  return d;
                }
                function rm(b, c, d) {
                  return t(function f() {
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return u(f, um(b.b, b.a.drm, d, c), 0);
                      }
                    });
                  });
                }
                function sm(b, c, d, e) {
                  function f() {
                    k += 1;
                    b.a.offline.progressCallback(l, k / h);
                  }
                  var g = vm(e),
                    h = g.length + 1,
                    k = 0,
                    l = Rl(d, e);
                  return Promise.all([
                    c.removeSegments(g, f),
                    c.removeManifests([d.key()], f),
                  ]);
                }
                Z.prototype.Af = function () {
                  return gm(this, wm(this));
                };
                Z.prototype.removeEmeSessions = Z.prototype.Af;
                function wm(b) {
                  return t(function d() {
                    var e, f, g, h, k, l, m, n, q;
                    return y(d, function (d) {
                      switch (d.l) {
                        case 1:
                          return (
                            im(),
                            (e = b.b),
                            (f = b.a.drm),
                            (g = new Cj()),
                            (h = !1),
                            za(d, 2),
                            u(d, g.init(), 4)
                          );
                        case 4:
                          k = [];
                          Hj(g, function (b) {
                            return k.push(b);
                          });
                          l = Promise.resolve();
                          m = {};
                          n = r(k);
                          for (
                            q = n.next();
                            !q.done;
                            m = { mc: m.mc }, q = n.next()
                          )
                            (m.mc = q.value),
                              (l = l.then(
                                (function (b) {
                                  return function () {
                                    return t(function C() {
                                      var d, g;
                                      return y(C, function (k) {
                                        switch (k.l) {
                                          case 1:
                                            return u(k, b.mc.getAll(), 2);
                                          case 2:
                                            return (
                                              (d = k.s), u(k, mk(f, e, d), 3)
                                            );
                                          case 3:
                                            return (
                                              (g = k.s), u(k, b.mc.remove(g), 4)
                                            );
                                          case 4:
                                            g.length != d.length && (h = !0),
                                              v(k);
                                        }
                                      });
                                    });
                                  };
                                })(m)
                              ));
                          return u(d, l, 2);
                        case 2:
                          return Ea(d), u(d, g.destroy(), 6);
                        case 6:
                          Fa(d, 3);
                          break;
                        case 3:
                          return d["return"](!h);
                      }
                    });
                  });
                }
                Z.prototype.list = function () {
                  return gm(this, xm());
                };
                Z.prototype.list = Z.prototype.list;
                function xm() {
                  return t(function c() {
                    var d, e, f;
                    return y(c, function (c) {
                      switch (c.l) {
                        case 1:
                          return (
                            im(),
                            (d = []),
                            (e = new Cj()),
                            za(c, 2),
                            u(c, e.init(), 4)
                          );
                        case 4:
                          return (
                            (f = Promise.resolve()),
                            Fj(e, function (c, e) {
                              f = f.then(function () {
                                return t(function m() {
                                  var f;
                                  return y(m, function (g) {
                                    switch (g.l) {
                                      case 1:
                                        return u(g, e.getAllManifests(), 2);
                                      case 2:
                                        (f = g.s),
                                          f.forEach(function (e, f) {
                                            var g = Rl(
                                              new bk("manifest", c.ra, c.$, f),
                                              e
                                            );
                                            d.push(g);
                                          }),
                                          v(g);
                                    }
                                  });
                                });
                              });
                            }),
                            u(c, f, 2)
                          );
                        case 2:
                          return Ea(c), u(c, e.destroy(), 6);
                        case 6:
                          Fa(c, 3);
                          break;
                        case 3:
                          return c["return"](d);
                      }
                    });
                  });
                }
                function jm(b, c, d) {
                  return t(function f() {
                    var g, h, k, l, m, n;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (
                            (g = null),
                            (h = b.b),
                            (k = {
                              networkingEngine: h,
                              filterAllPeriods: function () {},
                              filterNewPeriod: function () {},
                              onTimelineRegionAdded: function () {},
                              onEvent: function () {},
                              onError: function (b) {
                                g = b;
                              },
                            }),
                            u(f, d(), 2)
                          );
                        case 2:
                          return (
                            (l = f.s),
                            l.configure(b.a.manifest),
                            km(b),
                            za(f, 3),
                            u(f, l.start(c, k), 5)
                          );
                        case 5:
                          return (
                            (m = f.s),
                            km(b),
                            (n = ym(m)),
                            u(
                              f,
                              Promise.all(
                                Array.from(n).map(function (b) {
                                  return b.createSegmentIndex();
                                })
                              ),
                              6
                            )
                          );
                        case 6:
                          km(b);
                          if (g) throw g;
                          return f["return"](m);
                        case 3:
                          return Ea(f), u(f, l.stop(), 7);
                        case 7:
                          Fa(f, 0);
                      }
                    });
                  });
                }
                function lm(b, c, d) {
                  return t(function f() {
                    var g, h, k;
                    return y(f, function (f) {
                      switch (f.l) {
                        case 1:
                          return (
                            (g = new Gc({
                              nb: b.b,
                              onError: d,
                              gc: function () {},
                              onExpirationUpdated: function () {},
                              onEvent: function () {},
                            })),
                            (h = ci(c.periods)),
                            (k = b.a),
                            g.configure(k.drm),
                            u(f, Lc(g, h, k.offline.usePersistentLicense), 2)
                          );
                        case 2:
                          return u(f, Vc(g), 3);
                        case 3:
                          return u(f, Wc(g), 4);
                        case 4:
                          return f["return"](g);
                      }
                    });
                  });
                }
                function pm(b, c, d, e, f, g, h) {
                  var k = new Sl(),
                    l = f.periods.map(function (e) {
                      return zm(b, c, d, k, f, e);
                    }),
                    m = e.a,
                    n = bd(e);
                  if (m && b.a.offline.usePersistentLicense) {
                    if (!n.length) throw new D(2, 9, 9007, g);
                    m.initData = [];
                  }
                  return {
                    originalManifestUri: g,
                    duration: f.presentationTimeline.Y(),
                    size: 0,
                    expiration: e.bc(),
                    periods: l,
                    sessionIds: b.a.offline.usePersistentLicense ? n : [],
                    drmInfo: m,
                    appMetadata: h,
                  };
                }
                function zm(b, c, d, e, f, g) {
                  f.periods.forEach(function (b) {
                    b.variants.forEach(function (b) {
                      var c = b.audio,
                        d = b.video;
                      c && !d && (e.a[c.id] = c.bandwidth || b.bandwidth);
                      !c && d && (e.a[d.id] = d.bandwidth || b.bandwidth);
                      if (c && d) {
                        var f = c.bandwidth || 393216,
                          g = d.bandwidth || b.bandwidth - f;
                        0 >= g && (g = b.bandwidth);
                        e.a[c.id] = f;
                        e.a[d.id] = g;
                      }
                    });
                    b.textStreams.forEach(function (b) {
                      e.a[b.id] = 52;
                    });
                  });
                  var h = ym(f),
                    k = new Map();
                  h = r(h);
                  for (var l = h.next(); !l.done; l = h.next()) {
                    l = l.value;
                    var m = Am(b, c, d, e, f, l);
                    k.set(l.id, m);
                  }
                  g.variants.forEach(function (b) {
                    b.audio && k.get(b.audio.id).variantIds.push(b.id);
                    b.video && k.get(b.video.id).variantIds.push(b.id);
                  });
                  return {
                    startTime: g.startTime,
                    streams: Array.from(k.values()),
                  };
                }
                function Am(b, c, d, e, f, g) {
                  var h = {
                    id: g.id,
                    originalId: g.originalId,
                    primary: g.primary,
                    presentationTimeOffset: g.presentationTimeOffset || 0,
                    contentType: g.type,
                    mimeType: g.mimeType,
                    codecs: g.codecs,
                    frameRate: g.frameRate,
                    kind: g.kind,
                    language: g.language,
                    label: g.label,
                    width: g.width || null,
                    height: g.height || null,
                    initSegmentKey: null,
                    encrypted: g.encrypted,
                    keyId: g.keyId,
                    segments: [],
                    variantIds: [],
                  };
                  f = f.presentationTimeline.Db();
                  var k = g.id;
                  Bm(g, f, function (f) {
                    var l = og(f.c(), f.b, f.a, b.a.streaming.retryParameters);
                    sj(c, k, l, Tl(e, g.id, f), function (c) {
                      return d.addSegments([{ data: c }]).then(function (c) {
                        b.c.push(c[0]);
                        h.segments.push({
                          startTime: f.startTime,
                          endTime: f.endTime,
                          dataKey: c[0],
                        });
                      });
                    });
                  });
                  if ((f = g.initSegmentReference))
                    (f = og(f.c(), f.b, f.a, b.a.streaming.retryParameters)),
                      sj(c, k, f, 0.5 * Ul(e, g.id), function (c) {
                        return d.addSegments([{ data: c }]).then(function (c) {
                          b.c.push(c[0]);
                          h.initSegmentKey = c[0];
                        });
                      });
                  return h;
                }
                function Bm(b, c, d) {
                  c = b.findSegmentPosition(c);
                  for (var e = null == c ? null : b.getSegmentReference(c); e; )
                    d(e), (e = b.getSegmentReference(++c));
                }
                function km(b) {
                  if (b.h.a) throw new D(2, 9, 7001);
                }
                function im() {
                  if (!fm()) throw new D(2, 9, 9e3);
                }
                function gm(b, c) {
                  return t(function e() {
                    return y(e, function (e) {
                      switch (e.l) {
                        case 1:
                          return b.g.push(c), za(e, 2), u(e, c, 4);
                        case 4:
                          return e["return"](e.s);
                        case 2:
                          Ea(e), Kb(b.g, c), Fa(e, 0);
                      }
                    });
                  });
                }
                function vm(b) {
                  var c = [];
                  b.periods.forEach(function (b) {
                    b.streams.forEach(function (b) {
                      null != b.initSegmentKey && c.push(b.initSegmentKey);
                      b.segments.forEach(function (b) {
                        c.push(b.dataKey);
                      });
                    });
                  });
                  return c;
                }
                Z.deleteAll = function () {
                  return t(function c() {
                    var d;
                    return y(c, function (c) {
                      switch (c.l) {
                        case 1:
                          return (d = new Cj()), za(c, 2), u(c, d.erase(), 2);
                        case 2:
                          return Ea(c), u(c, d.destroy(), 5);
                        case 5:
                          Fa(c, 0);
                      }
                    });
                  });
                };
                function um(b, c, d, e) {
                  return t(function g() {
                    var h, k, l;
                    return y(g, function (g) {
                      switch (g.l) {
                        case 1:
                          if (!e.drmInfo) return g["return"]();
                          h = Ij(d);
                          k = e.sessionIds.map(function (b) {
                            return {
                              sessionId: b,
                              keySystem: e.drmInfo.keySystem,
                              licenseUri: e.drmInfo.licenseServerUri,
                              serverCertificate: e.drmInfo.serverCertificate,
                              audioCapabilities: tm(e, !1),
                              videoCapabilities: tm(e, !0),
                            };
                          });
                          return u(g, mk(c, b, k), 2);
                        case 2:
                          return (l = g.s), u(g, h.remove(l), 3);
                        case 3:
                          return u(
                            g,
                            h.add(
                              k.filter(function (b) {
                                return -1 == l.indexOf(b.sessionId);
                              })
                            ),
                            0
                          );
                      }
                    });
                  });
                }
                function ym(b) {
                  var c = new Set();
                  b = r(b.periods);
                  for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    for (
                      var e = r(d.textStreams), f = e.next();
                      !f.done;
                      f = e.next()
                    )
                      c.add(f.value);
                    d = r(d.variants);
                    for (e = d.next(); !e.done; e = d.next())
                      (e = e.value),
                        e.audio && c.add(e.audio),
                        e.video && c.add(e.video);
                  }
                  return c;
                }
                function om(b) {
                  if (0 == b.periods.length) throw new D(2, 4, 4014);
                  b = r(b.periods);
                  for (var c = b.next(); !c.done; c = b.next()) Cm(c.value);
                }
                function Cm(b) {
                  b.variants.map(function (b) {
                    return b.video;
                  });
                  var c = new Set(
                    b.variants.map(function (b) {
                      return b.audio;
                    })
                  );
                  b = b.textStreams;
                  for (var d = r(c), e = d.next(); !e.done; e = d.next()) {
                    e = r(c);
                    for (var f = e.next(); !f.done; f = e.next());
                  }
                  c = r(b);
                  for (d = c.next(); !d.done; d = c.next())
                    for (d = r(b), e = d.next(); !e.done; e = d.next());
                }
                Zk.offline = fm;
                z("shaka.polyfill.installAll", function () {
                  for (var b = 0; b < Dm.length; ++b) Dm[b].ne();
                });
                var Dm = [];
                function Em(b, c) {
                  c = c || 0;
                  for (
                    var d = { priority: c, ne: b }, e = 0;
                    e < Dm.length;
                    e++
                  )
                    if (Dm[e].priority < c) {
                      Dm.splice(e, 0, d);
                      return;
                    }
                  Dm.push(d);
                }
                z("shaka.polyfill.register", Em);
                function Fm(b) {
                  var c = b.type.replace(/^(webkit|moz|MS)/, "").toLowerCase();
                  if ("function" === typeof Event) var d = new Event(c, b);
                  else
                    (d = document.createEvent("Event")),
                      d.initEvent(c, b.bubbles, b.cancelable);
                  b.target.dispatchEvent(d);
                }
                Em(function () {
                  if (window.Document) {
                    var b = Element.prototype;
                    b.requestFullscreen =
                      b.requestFullscreen ||
                      b.mozRequestFullScreen ||
                      b.msRequestFullscreen ||
                      b.webkitRequestFullscreen;
                    b = Document.prototype;
                    b.exitFullscreen =
                      b.exitFullscreen ||
                      b.mozCancelFullScreen ||
                      b.msExitFullscreen ||
                      b.webkitExitFullscreen;
                    "fullscreenElement" in document ||
                      (Object.defineProperty(document, "fullscreenElement", {
                        get: function () {
                          return (
                            document.mozFullScreenElement ||
                            document.msFullscreenElement ||
                            document.webkitFullscreenElement
                          );
                        },
                      }),
                      Object.defineProperty(document, "fullscreenEnabled", {
                        get: function () {
                          return (
                            document.mozFullScreenEnabled ||
                            document.msFullscreenEnabled ||
                            document.webkitSupportsFullscreen ||
                            document.webkitFullscreenEnabled
                          );
                        },
                      }));
                    document.addEventListener("webkitfullscreenchange", Fm);
                    document.addEventListener("webkitfullscreenerror", Fm);
                    document.addEventListener("mozfullscreenchange", Fm);
                    document.addEventListener("mozfullscreenerror", Fm);
                    document.addEventListener("MSFullscreenChange", Fm);
                    document.addEventListener("MSFullscreenError", Fm);
                  }
                });
                Em(function () {
                  pc("CrKey") && delete window.indexedDB;
                });
                var Gm;
                function Hm(b, c, d) {
                  if ("input" == b)
                    switch (this.type) {
                      case "range":
                        b = "change";
                    }
                  Gm.call(this, b, c, d);
                }
                Em(function () {
                  pc("Trident/") &&
                    HTMLInputElement.prototype.addEventListener != Hm &&
                    ((Gm = HTMLInputElement.prototype.addEventListener),
                    (HTMLInputElement.prototype.addEventListener = Hm));
                });
                Em(function () {
                  navigator.languages ||
                    Object.defineProperty(navigator, "languages", {
                      get: function () {
                        return navigator.language
                          ? [navigator.language]
                          : ["en"];
                      },
                    });
                });
                Em(function () {});
                function Im() {
                  var b = MediaSource.prototype.addSourceBuffer;
                  MediaSource.prototype.addSourceBuffer = function (c) {
                    for (var d = [], e = 0; e < arguments.length; ++e)
                      d[e] = arguments[e];
                    d = b.apply(this, d);
                    d.abort = function () {};
                    return d;
                  };
                }
                function Jm() {
                  var b = SourceBuffer.prototype.remove;
                  SourceBuffer.prototype.remove = function (c, d) {
                    return b.call(this, c, d - 0.001);
                  };
                }
                function Km() {
                  var b = MediaSource.prototype.endOfStream;
                  MediaSource.prototype.endOfStream = function (c) {
                    for (var d = [], e = 0; e < arguments.length; ++e)
                      d[e] = arguments[e];
                    for (var h = (e = 0); h < this.sourceBuffers.length; ++h) {
                      var k = this.sourceBuffers[h];
                      k = k.buffered.end(k.buffered.length - 1);
                      e = Math.max(e, k);
                    }
                    if (!isNaN(this.duration) && e < this.duration)
                      for (
                        this.Bd = !0, e = 0;
                        e < this.sourceBuffers.length;
                        ++e
                      )
                        this.sourceBuffers[e].rd = !1;
                    return b.apply(this, d);
                  };
                  var c = !1,
                    d = MediaSource.prototype.addSourceBuffer;
                  MediaSource.prototype.addSourceBuffer = function (b) {
                    for (var e = [], g = 0; g < arguments.length; ++g)
                      e[g] = arguments[g];
                    e = d.apply(this, e);
                    e.mediaSource_ = this;
                    e.addEventListener("updateend", Lm, !1);
                    c ||
                      (this.addEventListener("sourceclose", Mm, !1), (c = !0));
                    return e;
                  };
                }
                function Lm(b) {
                  var c = b.target,
                    d = c.mediaSource_;
                  if (d.Bd) {
                    b.preventDefault();
                    b.stopPropagation();
                    b.stopImmediatePropagation();
                    c.rd = !0;
                    for (b = 0; b < d.sourceBuffers.length; ++b)
                      if (0 == d.sourceBuffers[b].rd) return;
                    d.Bd = !1;
                  }
                }
                function Mm(b) {
                  b = b.target;
                  for (var c = 0; c < b.sourceBuffers.length; ++c)
                    b.sourceBuffers[c].removeEventListener("updateend", Lm, !1);
                  b.removeEventListener("sourceclose", Mm, !1);
                }
                function Nm() {
                  var b = MediaSource.isTypeSupported;
                  MediaSource.isTypeSupported = function (c) {
                    return "mp2t" == c.split(/ *; */)[0].split("/")[1]
                      ? !1
                      : b(c);
                  };
                }
                function Om() {
                  var b = MediaSource.isTypeSupported;
                  MediaSource.isTypeSupported = function (c) {
                    return "opus" != lc(c)[0] && b(c);
                  };
                }
                function Pm() {
                  var b = MediaSource.isTypeSupported,
                    c = /^dv(?:h[e1]|a[v1])\./;
                  MediaSource.isTypeSupported = function (d) {
                    for (
                      var e = d.split(/ *; */), f = e[0], g = {}, h = 1;
                      h < e.length;
                      ++h
                    ) {
                      var k = e[h].split("="),
                        l = k[0];
                      k = k[1].replace(/"(.*)"/, "$1");
                      g[l] = k;
                    }
                    e = g.codecs;
                    if (!e) return b(d);
                    var m = !1,
                      n = !1;
                    d = e.split(",").filter(function (b) {
                      c.test(b) && (n = !0);
                      /^(hev|hvc)1\.2/.test(b) && (m = !0);
                      return !0;
                    });
                    n && (m = !1);
                    g.codecs = d.join(",");
                    m && (g.eotf = "smpte2084");
                    for (var q in g) f += "; " + q + '="' + g[q] + '"';
                    return cast.__platform__.canDisplayType(f);
                  };
                }
                Em(function () {
                  if (window.MediaSource)
                    if (
                      window.cast &&
                      cast.__platform__ &&
                      cast.__platform__.canDisplayType
                    )
                      Pm();
                    else if (
                      navigator.vendor &&
                      navigator.vendor.includes("Apple")
                    ) {
                      var b = navigator.appVersion;
                      Nm();
                      if (b.includes("Version/8")) window.MediaSource = null;
                      else if (b.includes("Version/9")) Im();
                      else if (b.includes("Version/10")) Im(), Km();
                      else if (
                        b.includes("Version/11") ||
                        b.includes("Version/12")
                      )
                        Im(), Jm();
                    } else pc("Tizen") && Om();
                });
                function Qm(b, c) {
                  try {
                    var d = new Rm(b, c);
                    return Promise.resolve(d);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }
                function Rm(b, c) {
                  this.keySystem = b;
                  if (b.startsWith("com.apple.fps"))
                    for (var d = r(c), e = d.next(); !e.done; e = d.next()) {
                      var f = e.value;
                      if ("required" == f.persistentState) e = null;
                      else {
                        e = {
                          audioCapabilities: [],
                          videoCapabilities: [],
                          persistentState: "optional",
                          distinctiveIdentifier: "optional",
                          initDataTypes: f.initDataTypes,
                          sessionTypes: ["temporary"],
                          label: f.label,
                        };
                        var g = !1,
                          h = !1;
                        if (f.audioCapabilities)
                          for (
                            var k = r(f.audioCapabilities), l = k.next();
                            !l.done;
                            l = k.next()
                          )
                            if (((l = l.value), l.contentType)) {
                              g = !0;
                              var m = l.contentType.split(";")[0];
                              WebKitMediaKeys.isTypeSupported(
                                this.keySystem,
                                m
                              ) && (e.audioCapabilities.push(l), (h = !0));
                            }
                        if (f.videoCapabilities)
                          for (
                            f = r(f.videoCapabilities), l = f.next();
                            !l.done;
                            l = f.next()
                          )
                            (k = l.value),
                              k.contentType &&
                                ((g = !0),
                                (l = k.contentType.split(";")[0]),
                                WebKitMediaKeys.isTypeSupported(
                                  this.keySystem,
                                  l
                                ) && (e.videoCapabilities.push(k), (h = !0)));
                        g ||
                          (h = WebKitMediaKeys.isTypeSupported(
                            this.keySystem,
                            "video/mp4"
                          ));
                        e = h ? e : null;
                      }
                      if (e) {
                        this.a = e;
                        return;
                      }
                    }
                  d = Error("Unsupported keySystem");
                  d.name = "NotSupportedError";
                  d.code = DOMException.NOT_SUPPORTED_ERR;
                  throw d;
                }
                Rm.prototype.createMediaKeys = function () {
                  var b = new Sm(this.keySystem);
                  return Promise.resolve(b);
                };
                Rm.prototype.getConfiguration = function () {
                  return this.a;
                };
                function Tm(b) {
                  var c = this.mediaKeys;
                  c && c != b && Um(c, null);
                  delete this.mediaKeys;
                  return (this.mediaKeys = b) ? Um(b, this) : Promise.resolve();
                }
                function Sm(b) {
                  this.b = new WebKitMediaKeys(b);
                  this.a = new ac();
                  this.c = null;
                }
                Sm.prototype.createSession = function (b) {
                  b = b || "temporary";
                  if ("temporary" != b)
                    throw new TypeError(
                      "Session type " + b + " is unsupported on this platform."
                    );
                  return new Vm(this.b, b);
                };
                Sm.prototype.setServerCertificate = function (b) {
                  this.c = b ? new Uint8Array(b) : null;
                  return Promise.resolve(!0);
                };
                function Um(b, c) {
                  bc(b.a);
                  if (!c) return Promise.resolve();
                  L(b.a, c, "webkitneedkey", Wm);
                  try {
                    return (
                      1 <= c.readyState
                        ? c.webkitSetMediaKeys(b.b)
                        : dc(b.a, c, "loadedmetadata", function () {
                            c.webkitSetMediaKeys(b.b);
                          }),
                      Promise.resolve()
                    );
                  } catch (d) {
                    return Promise.reject(d);
                  }
                }
                function Vm(b) {
                  J.call(this);
                  this.c = null;
                  this.g = b;
                  this.b = this.a = null;
                  this.f = new ac();
                  this.sessionId = "";
                  this.expiration = NaN;
                  this.closed = new G();
                  this.keyStatuses = new Xm();
                }
                Ta(Vm, J);
                p = Vm.prototype;
                p.generateRequest = function (b, c) {
                  this.a = new G();
                  try {
                    (this.c = this.g.createSession(
                      "video/mp4",
                      new Uint8Array(c)
                    )),
                      L(this.f, this.c, "webkitkeymessage", this.Vf.bind(this)),
                      L(this.f, this.c, "webkitkeyadded", this.Tf.bind(this)),
                      L(this.f, this.c, "webkitkeyerror", this.Uf.bind(this)),
                      Ym(this, "status-pending");
                  } catch (d) {
                    this.a.reject(d);
                  }
                  return this.a;
                };
                p.load = function () {
                  return Promise.reject(
                    Error("MediaKeySession.load not yet supported")
                  );
                };
                p.update = function (b) {
                  this.b = new G();
                  try {
                    this.c.update(new Uint8Array(b));
                  } catch (c) {
                    this.b.reject(c);
                  }
                  return this.b;
                };
                p.close = function () {
                  try {
                    this.c.close(), this.closed.resolve(), bc(this.f);
                  } catch (b) {
                    this.closed.reject(b);
                  }
                  return this.closed;
                };
                p.remove = function () {
                  return Promise.reject(
                    Error(
                      "MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"
                    )
                  );
                };
                function Zm(b, c) {
                  function d(b) {
                    new DataView(g.buffer).setUint32(h, b.byteLength, !0);
                    h += 4;
                    g.set(b, h);
                    h += b.byteLength;
                  }
                  var e = new Uint8Array(b);
                  if (
                    new DataView(e.buffer).getUint32(0, !0) + 4 !=
                    e.byteLength
                  )
                    throw Error("Malformed init data!");
                  var f = uc(e.slice(4), !0);
                  f = new cb(f).oa;
                  f = new Uint8Array(zc(f, !0));
                  var g = new Uint8Array(
                      e.byteLength + 4 + f.byteLength + 4 + c.byteLength
                    ),
                    h = 0;
                  g.set(e, h);
                  h += e.byteLength;
                  d(f);
                  d(new Uint8Array(c));
                  return g;
                }
                function Wm(b) {
                  var c = this.mediaKeys.c,
                    d = new Event("encrypted");
                  d.initDataType = "cenc";
                  d.initData = Zm(b.initData, c);
                  this.dispatchEvent(d);
                }
                p.Vf = function (b) {
                  this.a && (this.a.resolve(), (this.a = null));
                  this.dispatchEvent(
                    new I("message", {
                      messageType:
                        void 0 == this.keyStatuses.a
                          ? "license-request"
                          : "license-renewal",
                      message: b.message.buffer,
                    })
                  );
                };
                p.Tf = function () {
                  this.b &&
                    (Ym(this, "usable"), this.b.resolve(), (this.b = null));
                };
                p.Uf = function () {
                  var b = Error("EME PatchedMediaKeysApple key error");
                  b.errorCode = this.c.error;
                  if (null != this.a) this.a.reject(b), (this.a = null);
                  else if (null != this.b) this.b.reject(b), (this.b = null);
                  else
                    switch (this.c.error.code) {
                      case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:
                      case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:
                        Ym(this, "output-not-allowed");
                        break;
                      default:
                        Ym(this, "internal-error");
                    }
                };
                function Ym(b, c) {
                  var d = b.keyStatuses;
                  d.size = void 0 == c ? 0 : 1;
                  d.a = c;
                  b.dispatchEvent(new I("keystatuseschange"));
                }
                function Xm() {
                  this.size = 0;
                  this.a = void 0;
                }
                var $m;
                p = Xm.prototype;
                p.forEach = function (b) {
                  this.a && b(this.a, $m);
                };
                p.get = function (b) {
                  if (this.has(b)) return this.a;
                };
                p.has = function (b) {
                  var c = $m;
                  return this.a && Ec(new Uint8Array(b), new Uint8Array(c))
                    ? !0
                    : !1;
                };
                p.entries = function () {};
                p.keys = function () {};
                p.values = function () {};
                Em(function () {
                  window.HTMLVideoElement &&
                    window.WebKitMediaKeys &&
                    (($m = new Uint8Array([0]).buffer),
                    delete HTMLMediaElement.prototype.mediaKeys,
                    (HTMLMediaElement.prototype.mediaKeys = null),
                    (HTMLMediaElement.prototype.setMediaKeys = Tm),
                    (window.MediaKeys = Sm),
                    (window.MediaKeySystemAccess = Rm),
                    (navigator.requestMediaKeySystemAccess = Qm));
                });
                function an(b) {
                  this.f = [];
                  this.b = [];
                  this.a = [];
                  new S().ca("pssh", this.c.bind(this)).parse(b.buffer);
                }
                an.prototype.c = function (b) {
                  if (!(1 < b.version)) {
                    var c = Dc(b.reader.Va(16)),
                      d = [];
                    if (0 < b.version)
                      for (var e = b.reader.D(), f = 0; f < e; ++f) {
                        var g = Dc(b.reader.Va(16));
                        d.push(g);
                      }
                    e = b.reader.D();
                    b.reader.J(e);
                    this.b.push.apply(this.b, d);
                    this.f.push(c);
                    this.a.push({ start: b.start, end: b.start + b.size - 1 });
                  }
                };
                function bn(b, c) {
                  try {
                    var d = new cn(b, c);
                    return Promise.resolve(d);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }
                function cn(b, c) {
                  this.keySystem = b;
                  for (var d = !1, e = 0; e < c.length; ++e) {
                    var f = c[e],
                      g = {
                        audioCapabilities: [],
                        videoCapabilities: [],
                        persistentState: "optional",
                        distinctiveIdentifier: "optional",
                        initDataTypes: f.initDataTypes,
                        sessionTypes: ["temporary"],
                        label: f.label,
                      },
                      h = !1;
                    if (f.audioCapabilities)
                      for (var k = 0; k < f.audioCapabilities.length; ++k) {
                        var l = f.audioCapabilities[k];
                        if (l.contentType) {
                          h = !0;
                          var m = l.contentType.split(";")[0];
                          MSMediaKeys.isTypeSupported(this.keySystem, m) &&
                            (g.audioCapabilities.push(l), (d = !0));
                        }
                      }
                    if (f.videoCapabilities)
                      for (k = 0; k < f.videoCapabilities.length; ++k)
                        (l = f.videoCapabilities[k]),
                          l.contentType &&
                            ((h = !0),
                            (m = l.contentType.split(";")[0]),
                            MSMediaKeys.isTypeSupported(this.keySystem, m) &&
                              (g.videoCapabilities.push(l), (d = !0)));
                    h ||
                      (d = MSMediaKeys.isTypeSupported(
                        this.keySystem,
                        "video/mp4"
                      ));
                    "required" == f.persistentState && (d = !1);
                    if (d) {
                      this.a = g;
                      return;
                    }
                  }
                  d = Error("Unsupported keySystem");
                  d.name = "NotSupportedError";
                  d.code = DOMException.NOT_SUPPORTED_ERR;
                  throw d;
                }
                cn.prototype.createMediaKeys = function () {
                  var b = new dn(this.keySystem);
                  return Promise.resolve(b);
                };
                cn.prototype.getConfiguration = function () {
                  return this.a;
                };
                function en(b) {
                  var c = this.mediaKeys;
                  c && c != b && fn(c, null);
                  delete this.mediaKeys;
                  return (this.mediaKeys = b) ? fn(b, this) : Promise.resolve();
                }
                function dn(b) {
                  this.a = new MSMediaKeys(b);
                  this.b = new ac();
                }
                dn.prototype.createSession = function (b) {
                  b = b || "temporary";
                  if ("temporary" != b)
                    throw new TypeError(
                      "Session type " + b + " is unsupported on this platform."
                    );
                  return new gn(this.a, b);
                };
                dn.prototype.setServerCertificate = function () {
                  return Promise.resolve(!1);
                };
                function fn(b, c) {
                  function d() {
                    c.msSetMediaKeys(e.a);
                    c.removeEventListener("loadedmetadata", d);
                  }
                  bc(b.b);
                  if (!c) return Promise.resolve();
                  L(b.b, c, "msneedkey", hn);
                  var e = b;
                  try {
                    return (
                      1 <= c.readyState
                        ? c.msSetMediaKeys(b.a)
                        : c.addEventListener("loadedmetadata", d),
                      Promise.resolve()
                    );
                  } catch (f) {
                    return Promise.reject(f);
                  }
                }
                function gn(b) {
                  J.call(this);
                  this.c = null;
                  this.g = b;
                  this.b = this.a = null;
                  this.f = new ac();
                  this.sessionId = "";
                  this.expiration = NaN;
                  this.closed = new G();
                  this.keyStatuses = new jn();
                }
                Ta(gn, J);
                p = gn.prototype;
                p.generateRequest = function (b, c) {
                  this.a = new G();
                  try {
                    (this.c = this.g.createSession(
                      "video/mp4",
                      new Uint8Array(c),
                      null
                    )),
                      L(this.f, this.c, "mskeymessage", this.hf.bind(this)),
                      L(this.f, this.c, "mskeyadded", this.ff.bind(this)),
                      L(this.f, this.c, "mskeyerror", this.gf.bind(this)),
                      kn(this, "status-pending");
                  } catch (d) {
                    this.a.reject(d);
                  }
                  return this.a;
                };
                p.load = function () {
                  return Promise.reject(
                    Error("MediaKeySession.load not yet supported")
                  );
                };
                p.update = function (b) {
                  this.b = new G();
                  try {
                    this.c.update(new Uint8Array(b));
                  } catch (c) {
                    this.b.reject(c);
                  }
                  return this.b;
                };
                p.close = function () {
                  try {
                    this.c.close(), this.closed.resolve(), bc(this.f);
                  } catch (b) {
                    this.closed.reject(b);
                  }
                  return this.closed;
                };
                p.remove = function () {
                  return Promise.reject(
                    Error(
                      "MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"
                    )
                  );
                };
                function hn(b) {
                  if (b.initData) {
                    var c = document.createEvent("CustomEvent");
                    c.initCustomEvent("encrypted", !1, !1, null);
                    c.initDataType = "cenc";
                    c.initData = ln(b.initData);
                    this.dispatchEvent(c);
                  }
                }
                function ln(b) {
                  if (!b) return b;
                  var c = new an(b);
                  if (1 >= c.a.length) return b;
                  for (var d = [], e = 0; e < c.a.length; e++)
                    d.push(b.subarray(c.a[e].start, c.a[e].end + 1));
                  b = [];
                  c = {};
                  e = r(d);
                  for (d = e.next(); !d.done; c = { dc: c.dc }, d = e.next())
                    (c.dc = d.value),
                      b.some(
                        (function (b) {
                          return function (c) {
                            return Ec(c, b.dc);
                          };
                        })(c)
                      ) || b.push(c.dc);
                  c = 0;
                  e = r(b);
                  for (d = e.next(); !d.done; d = e.next()) c += d.value.length;
                  c = new Uint8Array(c);
                  e = 0;
                  b = r(b);
                  for (d = b.next(); !d.done; d = b.next())
                    (d = d.value), c.set(d, e), (e += d.length);
                  return c;
                }
                p.hf = function (b) {
                  this.a && (this.a.resolve(), (this.a = null));
                  this.dispatchEvent(
                    new I("message", {
                      messageType:
                        void 0 == this.keyStatuses.a
                          ? "license-request"
                          : "license-renewal",
                      message: b.message.buffer,
                    })
                  );
                };
                p.ff = function () {
                  this.a
                    ? (kn(this, "usable"), this.a.resolve(), (this.a = null))
                    : this.b &&
                      (kn(this, "usable"), this.b.resolve(), (this.b = null));
                };
                p.gf = function () {
                  var b = Error("EME PatchedMediaKeysMs key error");
                  b.errorCode = this.c.error;
                  if (null != this.a) this.a.reject(b), (this.a = null);
                  else if (null != this.b) this.b.reject(b), (this.b = null);
                  else
                    switch (this.c.error.code) {
                      case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
                      case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                        kn(this, "output-not-allowed");
                        break;
                      default:
                        kn(this, "internal-error");
                    }
                };
                function kn(b, c) {
                  var d = b.keyStatuses;
                  d.size = void 0 == c ? 0 : 1;
                  d.a = c;
                  b.dispatchEvent(new I("keystatuseschange"));
                }
                function jn() {
                  this.size = 0;
                  this.a = void 0;
                }
                var mn;
                p = jn.prototype;
                p.forEach = function (b) {
                  this.a && b(this.a, mn);
                };
                p.get = function (b) {
                  if (this.has(b)) return this.a;
                };
                p.has = function (b) {
                  var c = mn;
                  return this.a && Ec(new Uint8Array(b), new Uint8Array(c))
                    ? !0
                    : !1;
                };
                p.entries = function () {};
                p.keys = function () {};
                p.values = function () {};
                Em(function () {
                  !window.HTMLVideoElement ||
                    !window.MSMediaKeys ||
                    (navigator.requestMediaKeySystemAccess &&
                      MediaKeySystemAccess.prototype.getConfiguration) ||
                    ((mn = new Uint8Array([0]).buffer),
                    delete HTMLMediaElement.prototype.mediaKeys,
                    (HTMLMediaElement.prototype.mediaKeys = null),
                    (HTMLMediaElement.prototype.setMediaKeys = en),
                    (window.MediaKeys = dn),
                    (window.MediaKeySystemAccess = cn),
                    (navigator.requestMediaKeySystemAccess = bn));
                });
                function nn() {
                  return Promise.reject(
                    Error("The key system specified is not supported.")
                  );
                }
                function on(b) {
                  return null == b
                    ? Promise.resolve()
                    : Promise.reject(Error("MediaKeys not supported."));
                }
                function pn() {
                  throw new TypeError("Illegal constructor.");
                }
                pn.prototype.createSession = function () {};
                pn.prototype.setServerCertificate = function () {};
                function qn() {
                  throw new TypeError("Illegal constructor.");
                }
                qn.prototype.getConfiguration = function () {};
                qn.prototype.createMediaKeys = function () {};
                Em(function () {
                  !window.HTMLVideoElement ||
                    (navigator.requestMediaKeySystemAccess &&
                      MediaKeySystemAccess.prototype.getConfiguration) ||
                    ((navigator.requestMediaKeySystemAccess = nn),
                    delete HTMLMediaElement.prototype.mediaKeys,
                    (HTMLMediaElement.prototype.mediaKeys = null),
                    (HTMLMediaElement.prototype.setMediaKeys = on),
                    (window.MediaKeys = pn),
                    (window.MediaKeySystemAccess = qn));
                }, -10);
                var rn = "";
                function sn(b) {
                  var c = rn;
                  return c ? c + b.charAt(0).toUpperCase() + b.slice(1) : b;
                }
                function tn(b, c) {
                  try {
                    var d = new un(b, c);
                    return Promise.resolve(d);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }
                function vn(b) {
                  var c = this.mediaKeys;
                  c && c != b && wn(c, null);
                  delete this.mediaKeys;
                  (this.mediaKeys = b) && wn(b, this);
                  return Promise.resolve();
                }
                function un(b, c) {
                  this.a = this.keySystem = b;
                  var d = !1;
                  "org.w3.clearkey" == b &&
                    ((this.a = "webkit-org.w3.clearkey"), (d = !1));
                  var e = !1;
                  var f = document.getElementsByTagName("video");
                  f = f.length ? f[0] : document.createElement("video");
                  for (var g = 0; g < c.length; ++g) {
                    var h = c[g],
                      k = {
                        audioCapabilities: [],
                        videoCapabilities: [],
                        persistentState: "optional",
                        distinctiveIdentifier: "optional",
                        initDataTypes: h.initDataTypes,
                        sessionTypes: ["temporary"],
                        label: h.label,
                      },
                      l = !1;
                    if (h.audioCapabilities)
                      for (var m = 0; m < h.audioCapabilities.length; ++m) {
                        var n = h.audioCapabilities[m];
                        if (n.contentType) {
                          l = !0;
                          var q = n.contentType.split(";")[0];
                          f.canPlayType(q, this.a) &&
                            (k.audioCapabilities.push(n), (e = !0));
                        }
                      }
                    if (h.videoCapabilities)
                      for (m = 0; m < h.videoCapabilities.length; ++m)
                        (n = h.videoCapabilities[m]),
                          n.contentType &&
                            ((l = !0),
                            f.canPlayType(n.contentType, this.a) &&
                              (k.videoCapabilities.push(n), (e = !0)));
                    l ||
                      (e =
                        f.canPlayType("video/mp4", this.a) ||
                        f.canPlayType("video/webm", this.a));
                    "required" == h.persistentState &&
                      (d
                        ? ((k.persistentState = "required"),
                          (k.sessionTypes = ["persistent-license"]))
                        : (e = !1));
                    if (e) {
                      this.b = k;
                      return;
                    }
                  }
                  d = "Unsupported keySystem";
                  if ("org.w3.clearkey" == b || "com.widevine.alpha" == b)
                    d = "None of the requested configurations were supported.";
                  d = Error(d);
                  d.name = "NotSupportedError";
                  d.code = DOMException.NOT_SUPPORTED_ERR;
                  throw d;
                }
                un.prototype.createMediaKeys = function () {
                  var b = new xn(this.a);
                  return Promise.resolve(b);
                };
                un.prototype.getConfiguration = function () {
                  return this.b;
                };
                function xn(b) {
                  this.g = b;
                  this.b = null;
                  this.a = new ac();
                  this.c = [];
                  this.f = {};
                }
                function wn(b, c) {
                  b.b = c;
                  bc(b.a);
                  var d = rn;
                  c &&
                    (L(b.a, c, d + "needkey", b.nf.bind(b)),
                    L(b.a, c, d + "keymessage", b.Yf.bind(b)),
                    L(b.a, c, d + "keyadded", b.Wf.bind(b)),
                    L(b.a, c, d + "keyerror", b.Xf.bind(b)));
                }
                p = xn.prototype;
                p.createSession = function (b) {
                  b = b || "temporary";
                  if ("temporary" != b && "persistent-license" != b)
                    throw new TypeError(
                      "Session type " + b + " is unsupported on this platform."
                    );
                  var c = this.b || document.createElement("video");
                  c.src || (c.src = "about:blank");
                  b = new yn(c, this.g, b);
                  this.c.push(b);
                  return b;
                };
                p.setServerCertificate = function () {
                  return Promise.resolve(!1);
                };
                p.nf = function (b) {
                  var c = document.createEvent("CustomEvent");
                  c.initCustomEvent("encrypted", !1, !1, null);
                  c.initDataType = "webm";
                  c.initData = b.initData;
                  this.b.dispatchEvent(c);
                };
                p.Yf = function (b) {
                  var c = zn(this, b.sessionId);
                  c &&
                    ((b = new I("message", {
                      messageType:
                        void 0 == c.keyStatuses.a
                          ? "licenserequest"
                          : "licenserenewal",
                      message: b.message,
                    })),
                    c.b && (c.b.resolve(), (c.b = null)),
                    c.dispatchEvent(b));
                };
                p.Wf = function (b) {
                  if ((b = zn(this, b.sessionId)))
                    An(b, "usable"), b.a && b.a.resolve(), (b.a = null);
                };
                p.Xf = function (b) {
                  var c = zn(this, b.sessionId);
                  c && c.handleError(b);
                };
                function zn(b, c) {
                  var d = b.f[c];
                  return d
                    ? d
                    : (d = b.c.shift())
                    ? ((d.sessionId = c), (b.f[c] = d))
                    : null;
                }
                function yn(b, c, d) {
                  J.call(this);
                  this.f = b;
                  this.h = !1;
                  this.a = this.b = null;
                  this.c = c;
                  this.g = d;
                  this.sessionId = "";
                  this.expiration = NaN;
                  this.closed = new G();
                  this.keyStatuses = new Bn();
                }
                Ta(yn, J);
                p = yn.prototype;
                p.handleError = function (b) {
                  var c = Error("EME v0.1b key error");
                  c.errorCode = b.errorCode;
                  c.errorCode.systemCode = b.systemCode;
                  !b.sessionId && this.b
                    ? ((c.method = "generateRequest"),
                      45 == b.systemCode &&
                        (c.message = "Unsupported session type."),
                      this.b.reject(c),
                      (this.b = null))
                    : b.sessionId && this.a
                    ? ((c.method = "update"), this.a.reject(c), (this.a = null))
                    : ((c = b.systemCode),
                      b.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT
                        ? An(this, "output-restricted")
                        : 1 == c
                        ? An(this, "expired")
                        : An(this, "internal-error"));
                };
                function Cn(b, c, d) {
                  if (b.h)
                    return Promise.reject(
                      Error("The session is already initialized.")
                    );
                  b.h = !0;
                  try {
                    if ("persistent-license" == b.g)
                      if (d) var e = new Uint8Array(yc("LOAD_SESSION|" + d));
                      else {
                        var f = yc("PERSISTENT|"),
                          g = new Uint8Array(f.byteLength + c.byteLength);
                        g.set(new Uint8Array(f), 0);
                        g.set(new Uint8Array(c), f.byteLength);
                        e = g;
                      }
                    else e = new Uint8Array(c);
                  } catch (k) {
                    return Promise.reject(k);
                  }
                  b.b = new G();
                  var h = sn("generateKeyRequest");
                  try {
                    b.f[h](b.c, e);
                  } catch (k) {
                    if ("InvalidStateError" != k.name)
                      return (b.b = null), Promise.reject(k);
                    new B(function () {
                      try {
                        b.f[h](b.c, e);
                      } catch (l) {
                        b.b.reject(l), (b.b = null);
                      }
                    }).O(0.01);
                  }
                  return b.b;
                }
                p.gd = function (b, c) {
                  if (this.a)
                    this.a
                      .then(this.gd.bind(this, b, c))
                      ["catch"](this.gd.bind(this, b, c));
                  else {
                    this.a = b;
                    if ("webkit-org.w3.clearkey" == this.c) {
                      var d = sc(c);
                      var e = JSON.parse(d);
                      "oct" != e.keys[0].kty &&
                        (this.a.reject(
                          Error("Response is not a valid JSON Web Key Set.")
                        ),
                        (this.a = null));
                      d = Bc(e.keys[0].k);
                      e = Bc(e.keys[0].kid);
                    } else (d = new Uint8Array(c)), (e = null);
                    var f = sn("addKey");
                    try {
                      this.f[f](this.c, d, e, this.sessionId);
                    } catch (g) {
                      this.a.reject(g), (this.a = null);
                    }
                  }
                };
                function An(b, c) {
                  var d = b.keyStatuses;
                  d.size = void 0 == c ? 0 : 1;
                  d.a = c;
                  b.dispatchEvent(new I("keystatuseschange"));
                }
                p.generateRequest = function (b, c) {
                  return Cn(this, c, null);
                };
                p.load = function (b) {
                  return "persistent-license" == this.g
                    ? Cn(this, null, b)
                    : Promise.reject(Error("Not a persistent session."));
                };
                p.update = function (b) {
                  var c = new G();
                  this.gd(c, b);
                  return c;
                };
                p.close = function () {
                  if ("persistent-license" != this.g) {
                    if (!this.sessionId)
                      return (
                        this.closed.reject(
                          Error("The session is not callable.")
                        ),
                        this.closed
                      );
                    var b = sn("cancelKeyRequest");
                    try {
                      this.f[b](this.c, this.sessionId);
                    } catch (c) {}
                  }
                  this.closed.resolve();
                  return this.closed;
                };
                p.remove = function () {
                  return "persistent-license" != this.g
                    ? Promise.reject(Error("Not a persistent session."))
                    : this.close();
                };
                function Bn() {
                  this.size = 0;
                  this.a = void 0;
                }
                var Dn;
                p = Bn.prototype;
                p.forEach = function (b) {
                  this.a && b(this.a, Dn);
                };
                p.get = function (b) {
                  if (this.has(b)) return this.a;
                };
                p.has = function (b) {
                  var c = Dn;
                  return this.a && Ec(new Uint8Array(b), new Uint8Array(c))
                    ? !0
                    : !1;
                };
                p.entries = function () {};
                p.keys = function () {};
                p.values = function () {};
                Em(function () {
                  if (
                    !(
                      !window.HTMLVideoElement ||
                      (navigator.requestMediaKeySystemAccess &&
                        MediaKeySystemAccess.prototype.getConfiguration)
                    )
                  ) {
                    if (HTMLMediaElement.prototype.webkitGenerateKeyRequest)
                      rn = "webkit";
                    else if (!HTMLMediaElement.prototype.generateKeyRequest)
                      return;
                    Dn = new Uint8Array([0]).buffer;
                    navigator.requestMediaKeySystemAccess = tn;
                    delete HTMLMediaElement.prototype.mediaKeys;
                    HTMLMediaElement.prototype.mediaKeys = null;
                    HTMLMediaElement.prototype.setMediaKeys = vn;
                    window.MediaKeys = xn;
                    window.MediaKeySystemAccess = un;
                  }
                });
                function En(b) {
                  b = b.target;
                  if ("picture-in-picture" == b.webkitPresentationMode) {
                    document.pictureInPictureElement = b;
                    var c = new Event("enterpictureinpicture");
                    b.dispatchEvent(c);
                  } else
                    document.pictureInPictureElement == b &&
                      (document.pictureInPictureElement = null),
                      (c = new Event("leavepictureinpicture")),
                      b.dispatchEvent(c);
                }
                function Fn() {
                  return this.webkitSupportsPresentationMode(
                    "picture-in-picture"
                  )
                    ? (this.webkitSetPresentationMode("picture-in-picture"),
                      (document.pictureInPictureElement = this),
                      Promise.resolve())
                    : Promise.reject(Error("PiP not allowed by video element"));
                }
                function Gn() {
                  var b = document.pictureInPictureElement;
                  return b
                    ? (b.webkitSetPresentationMode("inline"),
                      (document.pictureInPictureElement = null),
                      Promise.resolve())
                    : Promise.reject(
                        Error("No picture in picture element found")
                      );
                }
                Em(function () {
                  if (window.HTMLVideoElement) {
                    var b = HTMLVideoElement.prototype;
                    (b.requestPictureInPicture &&
                      document.exitPictureInPicture) ||
                      !b.webkitSupportsPresentationMode ||
                      ((document.pictureInPictureEnabled = !0),
                      (document.pictureInPictureElement = null),
                      (b.requestPictureInPicture = Fn),
                      (document.exitPictureInPicture = Gn),
                      document.addEventListener(
                        "webkitpresentationmodechanged",
                        En,
                        !0
                      ));
                  }
                });
                Em(function () {
                  if (window.HTMLMediaElement) {
                    var b = HTMLMediaElement.prototype.play;
                    HTMLMediaElement.prototype.play = function () {
                      var c = b.apply(this);
                      c && c["catch"](function () {});
                      return c;
                    };
                  }
                });
                function Hn() {
                  return {
                    droppedVideoFrames: this.webkitDroppedFrameCount,
                    totalVideoFrames: this.webkitDecodedFrameCount,
                    corruptedVideoFrames: 0,
                    creationTime: NaN,
                    totalFrameDelay: 0,
                  };
                }
                Em(function () {
                  if (window.HTMLVideoElement) {
                    var b = HTMLVideoElement.prototype;
                    !b.getVideoPlaybackQuality &&
                      "webkitDroppedFrameCount" in b &&
                      (b.getVideoPlaybackQuality = Hn);
                  }
                });
                function In(b, c, d) {
                  return new window.TextTrackCue(b, c, d);
                }
                function Jn(b, c, d) {
                  return new window.TextTrackCue(
                    b + "-" + c + "-" + d,
                    b,
                    c,
                    d
                  );
                }
                Em(function () {
                  if (!window.VTTCue && window.TextTrackCue) {
                    var b = TextTrackCue.length;
                    if (3 == b) window.VTTCue = In;
                    else if (6 == b) window.VTTCue = Jn;
                    else {
                      try {
                        var c = !!In(1, 2, "");
                      } catch (d) {
                        c = !1;
                      }
                      c && (window.VTTCue = In);
                    }
                  }
                });
                function Kn() {}
                Kn.prototype.parseInit = function () {};
                Kn.prototype.parseMedia = function (b, c) {
                  var d = sc(b),
                    e = [],
                    f = new DOMParser(),
                    g = null;
                  try {
                    g = f.parseFromString(d, "text/xml");
                  } catch (Y) {
                    throw new D(2, 2, 2005);
                  }
                  if (g) {
                    if ((g = g.getElementsByTagName("tt")[0])) {
                      var h = P.getAttributeNS(
                        g,
                        "http://www.w3.org/ns/ttml#parameter",
                        "frameRate"
                      );
                      var k = P.getAttributeNS(
                        g,
                        "http://www.w3.org/ns/ttml#parameter",
                        "subFrameRate"
                      );
                      var l = P.getAttributeNS(
                        g,
                        "http://www.w3.org/ns/ttml#parameter",
                        "frameRateMultiplier"
                      );
                      var m = P.getAttributeNS(
                        g,
                        "http://www.w3.org/ns/ttml#parameter",
                        "tickRate"
                      );
                      d = g.getAttribute("xml:space") || "default";
                      f = g.getAttribute("tts:extent");
                    } else throw new D(2, 2, 2005);
                    if ("default" != d && "preserve" != d)
                      throw new D(2, 2, 2005);
                    d = "default" == d;
                    h = new Ln(h, k, l, m);
                    k = Mn(g.getElementsByTagName("metadata")[0]);
                    l = Mn(g.getElementsByTagName("styling")[0]);
                    m = Mn(g.getElementsByTagName("layout")[0]);
                    for (var n = [], q = 0; q < m.length; q++) {
                      var x = m[q],
                        w = l,
                        A = f;
                      var C = new Fd();
                      var E = x.getAttribute("xml:id");
                      if (E) {
                        C.id = E;
                        E = null;
                        A && (E = Nn.exec(A) || On.exec(A));
                        A = E ? Number(E[1]) : null;
                        E = E ? Number(E[2]) : null;
                        var F, V;
                        if ((F = Pn(x, w, "extent")))
                          (F = (V = Nn.exec(F)) || On.exec(F)),
                            null != F &&
                              ((C.width =
                                null != A
                                  ? (100 * Number(F[1])) / A
                                  : Number(F[1])),
                              (C.height =
                                null != E
                                  ? (100 * Number(F[2])) / E
                                  : Number(F[2])),
                              (C.widthUnits = V || null != A ? Sd : 0),
                              (C.heightUnits = V || null != E ? Sd : 0));
                        if ((x = Pn(x, w, "origin")))
                          (F = (V = Nn.exec(x)) || On.exec(x)),
                            null != F &&
                              ((C.viewportAnchorX =
                                null != E
                                  ? (100 * Number(F[1])) / E
                                  : Number(F[1])),
                              (C.viewportAnchorY =
                                null != A
                                  ? (100 * Number(F[2])) / A
                                  : Number(F[2])),
                              (C.viewportAnchorUnits =
                                V || null != A ? Sd : 0));
                      } else C = null;
                      C && n.push(C);
                    }
                    f = Mn(g.getElementsByTagName("body")[0]);
                    for (g = 0; g < f.length; g++)
                      (q = Qn(f[g], c.periodStart, h, k, l, m, n, d)) &&
                        e.push(q);
                  }
                  return e;
                };
                var Nn = /^(\d{1,2}|100)% (\d{1,2}|100)%$/,
                  Rn = /^(\d+px|\d+em)$/,
                  On = /^(\d+)px (\d+)px$/,
                  Sn = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                  Tn = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
                  Un = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
                  Vn = /^(\d*(?:\.\d*)?)f$/,
                  Wn = /^(\d*(?:\.\d*)?)t$/,
                  Xn =
                    /^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,
                  Yn = {
                    left: Kd,
                    center: "center",
                    right: "end",
                    start: Kd,
                    end: "end",
                  },
                  Zn = {
                    left: "line-left",
                    center: "center",
                    right: "line-right",
                  };
                function Mn(b) {
                  var c = [];
                  if (!b) return c;
                  for (var d = b.childNodes, e = 0; e < d.length; e++) {
                    var f = "span" == d[e].nodeName && "p" == b.nodeName;
                    d[e].nodeType != Node.ELEMENT_NODE ||
                      "br" == d[e].nodeName ||
                      f ||
                      ((f = Mn(d[e])), (c = c.concat(f)));
                  }
                  c.length || c.push(b);
                  return c;
                }
                function $n(b, c) {
                  for (var d = b.childNodes, e = 0; e < d.length; e++)
                    if ("br" == d[e].nodeName && 0 < e)
                      d[e - 1].textContent += "\n";
                    else if (0 < d[e].childNodes.length) $n(d[e], c);
                    else if (c) {
                      var f = d[e].textContent.trim();
                      f = f.replace(/\s+/g, " ");
                      d[e].textContent = f;
                    }
                }
                function Qn(b, c, d, e, f, g, h, k) {
                  if (
                    !b.hasAttribute("begin") &&
                    !b.hasAttribute("end") &&
                    /^\s*$/.test(b.textContent)
                  )
                    return null;
                  $n(b, k);
                  k = ao(b.getAttribute("begin"), d);
                  var l = ao(b.getAttribute("end"), d);
                  d = ao(b.getAttribute("dur"), d);
                  var m = b.textContent;
                  null == l && null != d && (l = k + d);
                  if (null == k || null == l) throw new D(2, 2, 2001);
                  c = new Dd(k + c, l + c, m);
                  if (
                    (g = bo(b, "region", g, "")) &&
                    g.getAttribute("xml:id")
                  ) {
                    var n = g.getAttribute("xml:id");
                    h = h.filter(function (b) {
                      return b.id == n;
                    });
                    c.region = h[0];
                  }
                  e = bo(b, "smpte:backgroundImage", e, "#");
                  co(c, b, g, e, f);
                  return c;
                }
                function co(b, c, d, e, f) {
                  "rtl" == eo(c, d, f, "direction") && (b.direction = "rtl");
                  var g = eo(c, d, f, "writingMode");
                  "tb" == g || "tblr" == g
                    ? (b.writingMode = "vertical-lr")
                    : "tbrl" == g
                    ? (b.writingMode = "vertical-rl")
                    : "rltb" == g || "rl" == g
                    ? (b.direction = "rtl")
                    : g && (b.direction = Ed);
                  if ((g = eo(c, d, f, "textAlign")))
                    (b.positionAlign = Zn[g]),
                      (b.lineAlign = Yn[g]),
                      (b.textAlign = Od[g.toUpperCase()]);
                  if ((g = eo(c, d, f, "displayAlign")))
                    b.displayAlign = Pd[g.toUpperCase()];
                  if ((g = eo(c, d, f, "color"))) b.color = g;
                  if ((g = eo(c, d, f, "backgroundColor")))
                    b.backgroundColor = g;
                  if ((g = eo(c, d, f, "fontFamily"))) b.fontFamily = g;
                  (g = eo(c, d, f, "fontWeight")) &&
                    "bold" == g &&
                    (b.fontWeight = 700);
                  (g = eo(c, d, f, "wrapOption")) &&
                    "noWrap" == g &&
                    (b.wrapLine = !1);
                  (g = eo(c, d, f, "lineHeight")) &&
                    g.match(Rn) &&
                    (b.lineHeight = g);
                  (g = eo(c, d, f, "fontSize")) &&
                    g.match(Rn) &&
                    (b.fontSize = g);
                  if ((g = eo(c, d, f, "fontStyle")))
                    b.fontStyle = Rd[g.toUpperCase()];
                  if (e) {
                    g = e.getAttribute("imagetype");
                    var h = e.getAttribute("encoding");
                    e = e.textContent;
                    "PNG" == g &&
                      "Base64" == h &&
                      e &&
                      (b.backgroundImage = "data:image/png;base64," + e);
                  }
                  (d = Pn(d, f, "textDecoration")) && fo(b, d);
                  (c = go(c, f, "textDecoration")) && fo(b, c);
                }
                function fo(b, c) {
                  for (var d = c.split(" "), e = 0; e < d.length; e++)
                    switch (d[e]) {
                      case "underline":
                        b.textDecoration.includes("underline") ||
                          b.textDecoration.push("underline");
                        break;
                      case "noUnderline":
                        b.textDecoration.includes("underline") &&
                          Kb(b.textDecoration, "underline");
                        break;
                      case "lineThrough":
                        b.textDecoration.includes("lineThrough") ||
                          b.textDecoration.push("lineThrough");
                        break;
                      case "noLineThrough":
                        b.textDecoration.includes("lineThrough") &&
                          Kb(b.textDecoration, "lineThrough");
                        break;
                      case "overline":
                        b.textDecoration.includes("overline") ||
                          b.textDecoration.push("overline");
                        break;
                      case "noOverline":
                        b.textDecoration.includes("overline") &&
                          Kb(b.textDecoration, "overline");
                    }
                }
                function eo(b, c, d, e) {
                  return (b = go(b, d, e)) ? b : Pn(c, d, e);
                }
                function Pn(b, c, d) {
                  for (var e = Mn(b), f = 0; f < e.length; f++) {
                    var g = P.getAttributeNS(
                      e[f],
                      "http://www.w3.org/ns/ttml#styling",
                      d
                    );
                    if (g) return g;
                  }
                  return (b = bo(b, "style", c, ""))
                    ? P.getAttributeNS(
                        b,
                        "http://www.w3.org/ns/ttml#styling",
                        d
                      )
                    : null;
                }
                function go(b, c, d) {
                  return (b = bo(b, "style", c, ""))
                    ? P.getAttributeNS(
                        b,
                        "http://www.w3.org/ns/ttml#styling",
                        d
                      )
                    : null;
                }
                function bo(b, c, d, e) {
                  if (!b || 1 > d.length) return null;
                  var f = null,
                    g = b;
                  for (
                    b = null;
                    g &&
                    !(b = g.getAttribute(c)) &&
                    ((g = g.parentNode), g instanceof Element);

                  );
                  if ((c = b))
                    for (b = 0; b < d.length; b++)
                      if (e + d[b].getAttribute("xml:id") == c) {
                        f = d[b];
                        break;
                      }
                  return f;
                }
                function ao(b, c) {
                  var d = null;
                  if (Sn.test(b)) {
                    d = Sn.exec(b);
                    var e = Number(d[1]),
                      f = Number(d[2]),
                      g = Number(d[3]),
                      h = Number(d[4]);
                    h += (Number(d[5]) || 0) / c.b;
                    g += h / c.frameRate;
                    d = g + 60 * f + 3600 * e;
                  } else
                    Tn.test(b)
                      ? (d = ho(Tn, b))
                      : Un.test(b)
                      ? (d = ho(Un, b))
                      : Vn.test(b)
                      ? ((d = Vn.exec(b)), (d = Number(d[1]) / c.frameRate))
                      : Wn.test(b)
                      ? ((d = Wn.exec(b)), (d = Number(d[1]) / c.a))
                      : Xn.test(b) && (d = ho(Xn, b));
                  return d;
                }
                function ho(b, c) {
                  var d = b.exec(c);
                  return null == d || "" == d[0]
                    ? null
                    : (Number(d[4]) || 0) / 1e3 +
                        (Number(d[3]) || 0) +
                        60 * (Number(d[2]) || 0) +
                        3600 * (Number(d[1]) || 0);
                }
                function Ln(b, c, d, e) {
                  this.frameRate = Number(b) || 30;
                  this.b = Number(c) || 1;
                  this.a = Number(e);
                  0 == this.a && (this.a = b ? this.frameRate * this.b : 1);
                  d &&
                    (b = /^(\d+) (\d+)$/g.exec(d)) &&
                    (this.frameRate *= Number(b[1]) / Number(b[2]));
                }
                Vd["application/ttml+xml"] = Kn;
                function io() {
                  this.a = new Kn();
                }
                io.prototype.parseInit = function (b) {
                  var c = !1;
                  new S()
                    .G("moov", Mf)
                    .G("trak", Mf)
                    .G("mdia", Mf)
                    .G("minf", Mf)
                    .G("stbl", Mf)
                    .ca("stsd", Nf)
                    .G("stpp", function (b) {
                      c = !0;
                      b.parser.stop();
                    })
                    .parse(b);
                  if (!c) throw new D(2, 2, 2007);
                };
                io.prototype.parseMedia = function (b, c) {
                  var d = !1,
                    e = [];
                  new S()
                    .G(
                      "mdat",
                      Of(
                        function (b) {
                          d = !0;
                          e = e.concat(this.a.parseMedia(b, c));
                        }.bind(this)
                      )
                    )
                    .parse(b);
                  if (!d) throw new D(2, 2, 2007);
                  return e;
                };
                Vd['application/mp4; codecs="stpp"'] = io;
                Vd['application/mp4; codecs="stpp.TTML.im1t"'] = io;
                function jo() {}
                jo.prototype.parseInit = function () {};
                jo.prototype.parseMedia = function (b, c) {
                  var d = sc(b);
                  d = d.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
                  d = d.split(/\n{2,}/m);
                  if (!/^WEBVTT($|[ \t\n])/m.test(d[0])) throw new D(2, 2, 2e3);
                  var e = c.segmentStart;
                  if (
                    null == e &&
                    ((e = 0), d[0].includes("X-TIMESTAMP-MAP"))
                  ) {
                    var f = d[0].match(
                        /LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m
                      ),
                      g = d[0].match(/MPEGTS:(\d+)/m);
                    if (f && g) {
                      e = ko(new Kg(f[1]));
                      if (null == e) throw new D(2, 2, 2e3);
                      e = c.periodStart + (Number(g[1]) / 9e4 - e);
                    }
                  }
                  g = [];
                  var h = d[0].split("\n");
                  for (f = 1; f < h.length; f++)
                    if (/^Region:/.test(h[f])) {
                      var k = new Kg(h[f]),
                        l = new Fd();
                      Ng(k);
                      Lg(k);
                      for (var m = Ng(k); m; ) {
                        var n = l,
                          q = m;
                        (m = /^id=(.*)$/.exec(q))
                          ? (n.id = m[1])
                          : (m = /^width=(\d{1,2}|100)%$/.exec(q))
                          ? (n.width = Number(m[1]))
                          : (m = /^lines=(\d+)$/.exec(q))
                          ? ((n.height = Number(m[1])), (n.heightUnits = 2))
                          : (m =
                              /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(
                                q
                              ))
                          ? ((n.regionAnchorX = Number(m[1])),
                            (n.regionAnchorY = Number(m[2])))
                          : (m =
                              /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(
                                q
                              ))
                          ? ((n.viewportAnchorX = Number(m[1])),
                            (n.viewportAnchorY = Number(m[2])))
                          : /^scroll=up$/.exec(q) && (n.scroll = "up");
                        Lg(k);
                        m = Ng(k);
                      }
                      g.push(l);
                    }
                  f = [];
                  for (k = 1; k < d.length; k++) {
                    h = d[k].split("\n");
                    m = h;
                    q = e;
                    h = g;
                    if (
                      (1 == m.length && !m[0]) ||
                      /^NOTE($|[ \t])/.test(m[0]) ||
                      "STYLE" == m[0]
                    )
                      h = null;
                    else {
                      l = null;
                      m[0].includes("--\x3e") || ((l = m[0]), m.splice(0, 1));
                      n = new Kg(m[0]);
                      var x = ko(n),
                        w = Mg(n, /[ \t]+--\x3e[ \t]+/g),
                        A = ko(n);
                      if (null == x || null == w || null == A)
                        throw new D(2, 2, 2001);
                      m = new Dd(x + q, A + q, m.slice(1).join("\n").trim());
                      Lg(n);
                      for (q = Ng(n); q; ) lo(m, q, h), Lg(n), (q = Ng(n));
                      null != l && (m.id = l);
                      h = m;
                    }
                    h && f.push(h);
                  }
                  return f;
                };
                function lo(b, c, d) {
                  var e;
                  if (
                    (e = /^align:(start|middle|center|end|left|right)$/.exec(c))
                  )
                    (c = e[1]),
                      "middle" == c
                        ? (b.textAlign = Hd)
                        : (b.textAlign = Od[c.toUpperCase()]);
                  else if ((e = /^vertical:(lr|rl)$/.exec(c)))
                    b.writingMode =
                      "lr" == e[1] ? "vertical-lr" : "vertical-rl";
                  else if ((e = /^size:([\d.]+)%$/.exec(c)))
                    b.size = Number(e[1]);
                  else if (
                    (e =
                      /^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(
                        c
                      ))
                  )
                    (b.position = Number(e[1])),
                      e[2] &&
                        ((c = e[2]),
                        (b.positionAlign =
                          "line-left" == c || "start" == c
                            ? "line-left"
                            : "line-right" == c || "end" == c
                            ? "line-right"
                            : "center"));
                  else if ((e = /^region:(.*)$/.exec(c))) {
                    if ((c = mo(d, e[1]))) b.region = c;
                  } else if (
                    (d = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(c))
                  )
                    (b.lineInterpretation = 1),
                      (b.line = Number(d[1])),
                      d[2] && (b.lineAlign = Qd[d[2].toUpperCase()]);
                  else if (
                    (d = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(c))
                  )
                    (b.lineInterpretation = Jd),
                      (b.line = Number(d[1])),
                      d[2] && (b.lineAlign = Qd[d[2].toUpperCase()]);
                }
                function mo(b, c) {
                  var d = b.filter(function (b) {
                    return b.id == c;
                  });
                  return d.length ? d[0] : null;
                }
                function ko(b) {
                  b = Mg(b, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);
                  if (null == b) return null;
                  var c = Number(b[2]),
                    d = Number(b[3]);
                  return 59 < c || 59 < d
                    ? null
                    : Number(b[4]) / 1e3 +
                        d +
                        60 * c +
                        3600 * (Number(b[1]) || 0);
                }
                Vd["text/vtt"] = jo;
                Vd['text/vtt; codecs="vtt"'] = jo;
                function no() {
                  this.a = null;
                }
                no.prototype.parseInit = function (b) {
                  var c = !1;
                  new S()
                    .G("moov", Mf)
                    .G("trak", Mf)
                    .G("mdia", Mf)
                    .ca(
                      "mdhd",
                      function (b) {
                        0 == b.version
                          ? (b.reader.J(4),
                            b.reader.J(4),
                            (this.a = b.reader.D()),
                            b.reader.J(4))
                          : (b.reader.J(8),
                            b.reader.J(8),
                            (this.a = b.reader.D()),
                            b.reader.J(8));
                        b.reader.J(4);
                      }.bind(this)
                    )
                    .G("minf", Mf)
                    .G("stbl", Mf)
                    .ca("stsd", Nf)
                    .G("wvtt", function () {
                      c = !0;
                    })
                    .parse(b);
                  if (!this.a) throw new D(2, 2, 2008);
                  if (!c) throw new D(2, 2, 2008);
                };
                no.prototype.parseMedia = function (b, c) {
                  var d = this;
                  if (!this.a) throw new D(2, 2, 2008);
                  var e = 0,
                    f = [],
                    g,
                    h = [],
                    k = !1,
                    l = !1,
                    m = !1,
                    n = null;
                  new S()
                    .G("moof", Mf)
                    .G("traf", Mf)
                    .ca("tfdt", function (b) {
                      k = !0;
                      e = 0 == b.version ? b.reader.D() : b.reader.ub();
                    })
                    .ca("tfhd", function (b) {
                      var c = b.flags;
                      b = b.reader;
                      b.J(4);
                      c & 1 && b.J(8);
                      c & 2 && b.J(4);
                      n = c & 8 ? b.D() : null;
                    })
                    .ca("trun", function (b) {
                      l = !0;
                      var c = b.version,
                        d = b.flags;
                      b = b.reader;
                      var e = b.D();
                      d & 1 && b.J(4);
                      d & 4 && b.J(4);
                      for (var g = [], h = 0; h < e; h++) {
                        var k = { duration: null, sampleSize: null, jd: null };
                        d & 256 && (k.duration = b.D());
                        d & 512 && (k.sampleSize = b.D());
                        d & 1024 && b.J(4);
                        d & 2048 && (k.jd = 0 == c ? b.D() : b.Td());
                        g.push(k);
                      }
                      f = g;
                    })
                    .G(
                      "mdat",
                      Of(function (b) {
                        m = !0;
                        g = b;
                      })
                    )
                    .parse(b);
                  if (!m && !k && !l) throw new D(2, 2, 2008);
                  var q = e,
                    x = new DataView(g.buffer, g.byteOffset, g.byteLength),
                    w = new R(x, 0);
                  f.forEach(function (b) {
                    var f = b.duration || n,
                      g = b.jd ? e + b.jd : q;
                    q = g + (f || 0);
                    var k = 0;
                    do {
                      var l = w.D();
                      k += l;
                      var m = w.D(),
                        x = null;
                      "vttc" == Pf(m) ? 8 < l && (x = w.Va(l - 8)) : w.J(l - 8);
                      f &&
                        x &&
                        h.push(
                          oo(
                            x,
                            c.periodStart + g / d.a,
                            c.periodStart + q / d.a
                          )
                        );
                    } while (b.sampleSize && k < b.sampleSize);
                  });
                  return h.filter(td.Da);
                };
                function oo(b, c, d) {
                  var e, f, g;
                  new S()
                    .G(
                      "payl",
                      Of(function (b) {
                        e = sc(b);
                      })
                    )
                    .G(
                      "iden",
                      Of(function (b) {
                        f = sc(b);
                      })
                    )
                    .G(
                      "sttg",
                      Of(function (b) {
                        g = sc(b);
                      })
                    )
                    .parse(b);
                  return e ? po(e, f, g, c, d) : null;
                }
                function po(b, c, d, e, f) {
                  b = new Dd(e, f, b);
                  c && (b.id = c);
                  if (d)
                    for (c = new Kg(d), d = Ng(c); d; )
                      lo(b, d, []), Lg(c), (d = Ng(c));
                  return b;
                }
                Vd['application/mp4; codecs="wvtt"'] = no;
                z("shaka.util.Dom.createHTMLElement", function (b) {
                  return document.createElement(b);
                });
                z("shaka.util.Dom.createVideoElement", function () {
                  var b = document.createElement("video");
                  b.muted = !0;
                  b.width = 600;
                  b.height = 400;
                  return b;
                });
                z("shaka.util.Dom.asHTMLElement", function (b) {
                  return b;
                });
                z("shaka.util.Dom.asHTMLMediaElement", function (b) {
                  return b;
                });
                z("shaka.util.Dom.removeAllChildren", function (b) {
                  for (; b.firstChild; ) b.removeChild(b.firstChild);
                });
              }).call(exportTo, innerGlobal, innerGlobal);
              if (true)
                for (var k in exportTo.shaka) exports[k] = exportTo.shaka[k];
              else {
              }
            })();

            //# sourceMappingURL=shaka-player.compiled.map
            /* WEBPACK VAR INJECTION */
          }).call(
            this,
            __webpack_require__(
              /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"
            )
          );

          /***/
        },

      /***/ "./node_modules/webpack/buildin/global.js":
        /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          var g;

          // This works in non-strict mode
          g = (function () {
            return this;
          })();

          try {
            // This works if eval is allowed (see CSP)
            g = g || new Function("return this")();
          } catch (e) {
            // This works if the window reference is available
            if (typeof window === "object") g = window;
          }

          // g can still be undefined, but nothing to do about it...
          // We return undefined, instead of nothing here, so it's
          // easier to handle this case. if(!global) { ...}

          module.exports = g;

          /***/
        },

      /***/ "./src/clappr-dash-shaka-playback.js":
        /*!*******************************************!*\
  !*** ./src/clappr-dash-shaka-playback.js ***!
  \*******************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true,
          });

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);
              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;
              if (getter === undefined) {
                return undefined;
              }
              return getter.call(receiver);
            }
          };

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _clappr = __webpack_require__(/*! clappr */ "clappr");

          var _shakaPlayer = __webpack_require__(
            /*! shaka-player */ "./node_modules/shaka-player/dist/shaka-player.compiled.js"
          );

          var _shakaPlayer2 = _interopRequireDefault(_shakaPlayer);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          var SEND_STATS_INTERVAL_MS = 30 * 1e3;
          var DEFAULT_LEVEL_AUTO = -1;

          var DashShakaPlayback = (function (_HTML5Video) {
            _inherits(DashShakaPlayback, _HTML5Video);

            _createClass(
              DashShakaPlayback,
              [
                {
                  key: "getDuration",
                  value: function getDuration() {
                    return this._duration;
                  },
                },
                {
                  key: "getCurrentTime",
                  value: function getCurrentTime() {
                    return (
                      this.shakaPlayerInstance.getMediaElement().currentTime -
                      this.seekRange.start
                    );
                  },
                },
                {
                  key: "name",
                  get: function get() {
                    return "dash_shaka_playback";
                  },
                },
                {
                  key: "shakaVersion",
                  get: function get() {
                    return _shakaPlayer2.default.player.Player.version;
                  },
                },
                {
                  key: "shakaPlayerInstance",
                  get: function get() {
                    return this._player;
                  },
                },
                {
                  key: "levels",
                  get: function get() {
                    return this._levels;
                  },
                },
                {
                  key: "seekRange",
                  get: function get() {
                    return this.shakaPlayerInstance.seekRange();
                  },
                },
                {
                  key: "currentLevel",
                  set: function set(id) {
                    var _this2 = this;

                    this._currentLevelId = id;
                    var isAuto = this._currentLevelId === DEFAULT_LEVEL_AUTO;

                    this.trigger(_clappr.Events.PLAYBACK_LEVEL_SWITCH_START);
                    if (!isAuto) {
                      this._player.configure({ abr: { enabled: false } });
                      this._pendingAdaptationEvent = true;
                      this.selectTrack(
                        this.videoTracks.filter(function (t) {
                          return t.id === _this2._currentLevelId;
                        })[0]
                      );
                    } else {
                      this._player.configure({ abr: { enabled: true } });
                      this.trigger(_clappr.Events.PLAYBACK_LEVEL_SWITCH_END);
                    }
                  },
                  get: function get() {
                    return this._currentLevelId || DEFAULT_LEVEL_AUTO;
                  },
                },
                {
                  key: "dvrEnabled",
                  get: function get() {
                    return (
                      this._duration >= this._minDvrSize &&
                      this.getPlaybackType() === "live"
                    );
                  },
                },
                {
                  key: "_duration",
                  get: function get() {
                    if (!this.shakaPlayerInstance) return 0;

                    return this.seekRange.end - this.seekRange.start;
                  },
                },
                {
                  key: "_startTime",
                  get: function get() {
                    return this.seekRange.start;
                  },
                },
                {
                  key: "presentationTimeline",
                  get: function get() {
                    return this.shakaPlayerInstance.getManifest()
                      .presentationTimeline;
                  },
                },
              ],
              [
                {
                  key: "canPlay",
                  value: function canPlay(resource) {
                    var mimeType =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : "";

                    _shakaPlayer2.default.polyfill.installAll();
                    var browserSupported =
                      _shakaPlayer2.default.Player.isBrowserSupported();
                    var resourceParts =
                      resource.split("?")[0].match(/.*\.(.*)$/) || [];
                    return (
                      browserSupported &&
                      (resourceParts[1] === "mpd" ||
                        mimeType.indexOf("application/dash+xml") > -1)
                    );
                  },
                },
                {
                  key: "Events",
                  get: function get() {
                    return {
                      SHAKA_READY: "shaka:ready",
                    };
                  },
                },
              ]
            );

            function DashShakaPlayback() {
              var _ref;

              _classCallCheck(this, DashShakaPlayback);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              var _this = _possibleConstructorReturn(
                this,
                (_ref =
                  DashShakaPlayback.__proto__ ||
                  Object.getPrototypeOf(DashShakaPlayback)).call.apply(
                  _ref,
                  [this].concat(args)
                )
              );

              _this._levels = [];
              _this._pendingAdaptationEvent = false;
              _this._isShakaReadyState = false;

              _this._minDvrSize =
                typeof _this.options.shakaMinimumDvrSize === "undefined"
                  ? 60
                  : _this.options.shakaMinimumDvrSize;
              return _this;
            }

            _createClass(DashShakaPlayback, [
              {
                key: "getProgramDateTime",
                value: function getProgramDateTime() {
                  return new Date(
                    (this.presentationTimeline.getPresentationStartTime() +
                      this.seekRange.start) *
                      1000
                  );
                },
              },
              {
                key: "_updateDvr",
                value: function _updateDvr(status) {
                  this.trigger(_clappr.Events.PLAYBACK_DVR, status);
                  this.trigger(_clappr.Events.PLAYBACK_STATS_ADD, {
                    dvr: status,
                  });
                },
              },
              {
                key: "seek",
                value: function seek(time) {
                  if (time < 0) {
                    _clappr.Log.warn(
                      "Attempt to seek to a negative time. Resetting to live point. Use seekToLivePoint() to seek to the live point."
                    );
                    time = this._duration;
                  }
                  // assume live if time within 3 seconds of end of stream
                  this.dvrEnabled && this._updateDvr(time < this._duration - 3);
                  time += this._startTime;
                  _get(
                    DashShakaPlayback.prototype.__proto__ ||
                      Object.getPrototypeOf(DashShakaPlayback.prototype),
                    "seek",
                    this
                  ).call(this, time);
                },
              },
              {
                key: "pause",
                value: function pause() {
                  _get(
                    DashShakaPlayback.prototype.__proto__ ||
                      Object.getPrototypeOf(DashShakaPlayback.prototype),
                    "pause",
                    this
                  ).call(this);

                  if (this.dvrEnabled) this._updateDvr(true);
                },
              },
              {
                key: "play",
                value: function play() {
                  if (!this._player) {
                    this._setup();
                  }

                  if (!this.isReady) {
                    this.once(DashShakaPlayback.Events.SHAKA_READY, this.play);
                    return;
                  }

                  this._stopped = false;
                  this._src = this.el.src;
                  _get(
                    DashShakaPlayback.prototype.__proto__ ||
                      Object.getPrototypeOf(DashShakaPlayback.prototype),
                    "play",
                    this
                  ).call(this);
                  this._startTimeUpdateTimer();
                },
              },
              {
                key: "_startTimeUpdateTimer",
                value: function _startTimeUpdateTimer() {
                  var _this3 = this;

                  this._stopTimeUpdateTimer();
                  this._timeUpdateTimer = setInterval(function () {
                    _this3._onTimeUpdate();
                  }, 100);
                },
              },
              {
                key: "_stopTimeUpdateTimer",
                value: function _stopTimeUpdateTimer() {
                  this._timeUpdateTimer && clearInterval(this._timeUpdateTimer);
                },

                // skipping HTML5Video `_setupSrc` (on tag video)
              },
              {
                key: "_setupSrc",
                value: function _setupSrc() {},

                // skipping ready event on video tag in favor of ready on shaka
              },
              {
                key: "_ready",
                value: function _ready() {
                  // override with no-op
                },
              },
              {
                key: "_onShakaReady",
                value: function _onShakaReady() {
                  this._isShakaReadyState = true;
                  this.trigger(DashShakaPlayback.Events.SHAKA_READY);
                  this.trigger(_clappr.Events.PLAYBACK_READY, this.name);
                },
              },
              {
                key: "error",

                // skipping error handling on video tag in favor of error on shaka
                value: function error(event) {
                  _clappr.Log.error(
                    "an error was raised by the video tag",
                    event,
                    this.el.error
                  );
                },
              },
              {
                key: "isHighDefinitionInUse",
                value: function isHighDefinitionInUse() {
                  return !!this.highDefinition;
                },
              },
              {
                key: "stop",
                value: function stop() {
                  var _this4 = this;

                  this._stopTimeUpdateTimer();
                  clearInterval(this.sendStatsId);
                  this._stopped = true;

                  if (this._player) {
                    this._sendStats();

                    this._player
                      .unload()
                      .then(function () {
                        _get(
                          DashShakaPlayback.prototype.__proto__ ||
                            Object.getPrototypeOf(DashShakaPlayback.prototype),
                          "stop",
                          _this4
                        ).call(_this4);
                        _this4._player = null;
                        _this4._isShakaReadyState = false;
                      })
                      .catch(function () {
                        _clappr.Log.error("shaka could not be unloaded");
                      });
                  } else {
                    _get(
                      DashShakaPlayback.prototype.__proto__ ||
                        Object.getPrototypeOf(DashShakaPlayback.prototype),
                      "stop",
                      this
                    ).call(this);
                  }
                },
              },
              {
                key: "getPlaybackType",
                value: function getPlaybackType() {
                  return (
                    (this.isReady && this._player.isLive() ? "live" : "vod") ||
                    ""
                  );
                },
              },
              {
                key: "selectTrack",
                value: function selectTrack(track) {
                  if (track.type === "text") {
                    this._player.selectTextTrack(track);
                  } else if (track.type === "variant") {
                    this._player.selectVariantTrack(track);
                    if (track.mimeType.startsWith("video/")) {
                      // we trigger the adaptation event here
                      // because Shaka doesn't trigger its event on "manual" selection.
                      this._onAdaptation();
                    }
                  } else {
                    throw new Error("Unhandled track type:", track.type);
                  }
                },

                /**
                 * @override
                 */
              },
              {
                key: "_enableShakaTextTrack",
                value: function _enableShakaTextTrack(isEnable) {
                  // Shaka player use only one TextTrack object with video element to handle all text tracks
                  // It must be enabled or disabled in addition to call selectTextTrack()
                  if (!this.el.textTracks) {
                    return;
                  }

                  this._shakaTTVisible = isEnable;

                  Array.from(this.el.textTracks)
                    .filter(function (track) {
                      return track.kind === "subtitles";
                    })
                    .forEach(function (track) {
                      return (track.mode =
                        isEnable === true ? "showing" : "hidden");
                    });
                },
              },
              {
                key: "_checkForClosedCaptions",
                value: function _checkForClosedCaptions() {
                  if (this._ccIsSetup) {
                    return;
                  }

                  if (this.hasClosedCaptionsTracks) {
                    this.trigger(_clappr.Events.PLAYBACK_SUBTITLE_AVAILABLE);
                    var trackId = this.closedCaptionsTrackId;
                    this.closedCaptionsTrackId = trackId;
                  }
                  this._ccIsSetup = true;
                },
              },
              {
                key: "destroy",
                value: function destroy() {
                  var _this5 = this;

                  this._stopTimeUpdateTimer();
                  clearInterval(this.sendStatsId);

                  if (this._player) {
                    this._player
                      .destroy()
                      .then(function () {
                        return _this5._destroy();
                      })
                      .catch(function () {
                        _this5._destroy();
                        _clappr.Log.error("shaka could not be destroyed");
                      });
                  } else {
                    this._destroy();
                  }

                  _get(
                    DashShakaPlayback.prototype.__proto__ ||
                      Object.getPrototypeOf(DashShakaPlayback.prototype),
                    "destroy",
                    this
                  ).call(this);
                },
              },
              {
                key: "_setup",
                value: function _setup() {
                  var _this6 = this;

                  this._isShakaReadyState = false;
                  this._ccIsSetup = false;
                  this._player = this._createPlayer();
                  this._options.shakaConfiguration &&
                    this._player.configure(this._options.shakaConfiguration);
                  this._options.shakaOnBeforeLoad &&
                    this._options.shakaOnBeforeLoad(this._player);

                  var playerLoaded = this._player.load(this._options.src);
                  playerLoaded
                    .then(function () {
                      return _this6._loaded();
                    })
                    .catch(function (e) {
                      return _this6._setupError(e);
                    });
                },
              },
              {
                key: "_createPlayer",
                value: function _createPlayer() {
                  var player = new _shakaPlayer2.default.Player(this.el);
                  player.addEventListener("error", this._onError.bind(this));
                  player.addEventListener(
                    "adaptation",
                    this._onAdaptation.bind(this)
                  );
                  player.addEventListener(
                    "buffering",
                    this._onBuffering.bind(this)
                  );
                  return player;
                },
              },
              {
                key: "_onTimeUpdate",
                value: function _onTimeUpdate() {
                  if (!this.shakaPlayerInstance) return;

                  var update = {
                    current: this.getCurrentTime(),
                    total: this.getDuration(),
                    firstFragDateTime: this.getProgramDateTime(),
                  };
                  var isSame =
                    this._lastTimeUpdate &&
                    update.current === this._lastTimeUpdate.current &&
                    update.total === this._lastTimeUpdate.total;
                  if (isSame) return;

                  this._lastTimeUpdate = update;
                  this.trigger(
                    _clappr.Events.PLAYBACK_TIMEUPDATE,
                    update,
                    this.name
                  );
                },
              },
              {
                key: "_onBuffering",
                value: function _onBuffering(e) {
                  if (this._stopped) return;
                  var event = e.buffering
                    ? _clappr.Events.PLAYBACK_BUFFERING
                    : _clappr.Events.PLAYBACK_BUFFERFULL;
                  this.trigger(event);
                },
              },
              {
                key: "_loaded",
                value: function _loaded() {
                  this._onShakaReady();
                  this._startToSendStats();
                  this._fillLevels();
                  this._checkForClosedCaptions();
                },
              },
              {
                key: "_fillLevels",
                value: function _fillLevels() {
                  if (this._levels.length === 0) {
                    this._levels = this.videoTracks
                      .map(function (videoTrack) {
                        return {
                          id: videoTrack.id,
                          label: videoTrack.height + "p",
                        };
                      })
                      .reverse();
                    this.trigger(
                      _clappr.Events.PLAYBACK_LEVELS_AVAILABLE,
                      this.levels
                    );
                  }
                },
              },
              {
                key: "_startToSendStats",
                value: function _startToSendStats() {
                  var _this7 = this;

                  var intervalMs =
                    this._options.shakaSendStatsInterval ||
                    SEND_STATS_INTERVAL_MS;
                  this.sendStatsId = setInterval(function () {
                    return _this7._sendStats();
                  }, intervalMs);
                },
              },
              {
                key: "_sendStats",
                value: function _sendStats() {
                  this.trigger(
                    _clappr.Events.PLAYBACK_STATS_ADD,
                    this._player.getStats()
                  );
                },
              },
              {
                key: "_setupError",
                value: function _setupError(err) {
                  this._onError(err);
                },
              },
              {
                key: "_onError",
                value: function _onError(err) {
                  var error = {
                    shakaError: err,
                    videoError: this.el.error,
                  };

                  var _ref2 = error.shakaError.detail || error.shakaError,
                    category = _ref2.category,
                    code = _ref2.code,
                    severity = _ref2.severity;

                  if (error.videoError || (!code && !category))
                    return _get(
                      DashShakaPlayback.prototype.__proto__ ||
                        Object.getPrototypeOf(DashShakaPlayback.prototype),
                      "_onError",
                      this
                    ).call(this);

                  var isCritical =
                    severity ===
                    _shakaPlayer2.default.util.Error.Severity.CRITICAL;
                  var errorData = {
                    code: category + "_" + code,
                    description:
                      "Category: " +
                      category +
                      ", code: " +
                      code +
                      ", severity: " +
                      severity,
                    level: isCritical
                      ? _clappr.PlayerError.Levels.FATAL
                      : _clappr.PlayerError.Levels.WARN,
                    raw: err,
                  };
                  var formattedError = this.createError(errorData);
                  _clappr.Log.error("Shaka error event:", formattedError);
                  this.trigger(_clappr.Events.PLAYBACK_ERROR, formattedError);
                },
              },
              {
                key: "_onAdaptation",
                value: function _onAdaptation() {
                  var activeVideo = this.videoTracks.filter(function (t) {
                    return t.active === true;
                  })[0];

                  this._fillLevels();

                  // update stats that may have changed before we trigger event
                  // so that user can rely on stats data when handling event
                  this._sendStats();

                  if (this._pendingAdaptationEvent) {
                    this.trigger(_clappr.Events.PLAYBACK_LEVEL_SWITCH_END);
                    this._pendingAdaptationEvent = false;
                  }

                  _clappr.Log.debug("an adaptation has happened:", activeVideo);
                  this.highDefinition = activeVideo.height >= 720;
                  this.trigger(
                    _clappr.Events.PLAYBACK_HIGHDEFINITIONUPDATE,
                    this.highDefinition
                  );
                  this.trigger(_clappr.Events.PLAYBACK_BITRATE, {
                    bandwidth: activeVideo.bandwidth,
                    width: activeVideo.width,
                    height: activeVideo.height,
                    level: activeVideo.id,
                  });
                },
              },
              {
                key: "_updateSettings",
                value: function _updateSettings() {
                  if (this.getPlaybackType() === "vod")
                    this.settings.left = ["playpause", "position", "duration"];
                  else if (this.dvrEnabled) this.settings.left = ["playpause"];
                  else this.settings.left = ["playstop"];

                  this.settings.seekEnabled = this.isSeekEnabled();
                  this.trigger(_clappr.Events.PLAYBACK_SETTINGSUPDATE);
                },
              },
              {
                key: "_destroy",
                value: function _destroy() {
                  this._isShakaReadyState = false;
                  _clappr.Log.debug("shaka was destroyed");
                },
              },
              {
                key: "isReady",
                get: function get() {
                  return this._isShakaReadyState;
                },
              },
              {
                key: "textTracks",
                get: function get() {
                  return this.isReady && this._player.getTextTracks();
                },
              },
              {
                key: "audioTracks",
                get: function get() {
                  return (
                    this.isReady &&
                    this._player.getVariantTracks().filter(function (t) {
                      return t.mimeType.startsWith("audio/");
                    })
                  );
                },
              },
              {
                key: "videoTracks",
                get: function get() {
                  return (
                    this.isReady &&
                    this._player.getVariantTracks().filter(function (t) {
                      return t.mimeType.startsWith("video/");
                    })
                  );
                },
              },
              {
                key: "closedCaptionsTracks",
                get: function get() {
                  var id = 0;
                  var trackId = function trackId() {
                    return id++;
                  };
                  var tracks = this.textTracks || [];

                  return tracks
                    .filter(function (track) {
                      return track.kind === "subtitle";
                    })
                    .map(function (track) {
                      return {
                        id: trackId(),
                        name: track.label || track.language,
                        track: track,
                      };
                    });
                },

                /**
                 * @override
                 */
              },
              {
                key: "closedCaptionsTrackId",
                get: function get() {
                  return _get(
                    DashShakaPlayback.prototype.__proto__ ||
                      Object.getPrototypeOf(DashShakaPlayback.prototype),
                    "closedCaptionsTrackId",
                    this
                  );
                },

                /**
                 * @override
                 */
                set: function set(trackId) {
                  if (!this._player) {
                    return;
                  }

                  var tracks = this.closedCaptionsTracks;
                  var showingTrack = void 0;

                  // Note: -1 is for hide all tracks
                  if (trackId !== -1) {
                    showingTrack = tracks.find(function (track) {
                      return track.id === trackId;
                    });
                    if (!showingTrack) {
                      _clappr.Log.warn('Track id "' + trackId + '" not found');
                      return;
                    }
                    if (
                      this._shakaTTVisible &&
                      showingTrack.track.active === true
                    ) {
                      _clappr.Log.info(
                        'Track id "' + trackId + '" already showing'
                      );
                      return;
                    }
                  }

                  if (showingTrack) {
                    this._player.selectTextTrack(showingTrack.track);
                    this._player.setTextTrackVisibility(true);
                    this._enableShakaTextTrack(true);
                  } else {
                    this._player.setTextTrackVisibility(false);
                    this._enableShakaTextTrack(false);
                  }

                  this._ccTrackId = trackId;
                  this.trigger(_clappr.Events.PLAYBACK_SUBTITLE_CHANGED, {
                    id: trackId,
                  });
                },
              },
            ]);

            return DashShakaPlayback;
          })(_clappr.HTML5Video);

          exports.default = DashShakaPlayback;
          module.exports = exports["default"];

          /***/
        },

      /***/ clappr:
        /*!******************************************************************************************!*\
  !*** external {"amd":"clappr","commonjs":"clappr","commonjs2":"clappr","root":"Clappr"} ***!
  \******************************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_clappr__;

          /***/
        },

      /******/
    }
  );
});
//# sourceMappingURL=dash-shaka-playback.js.map
