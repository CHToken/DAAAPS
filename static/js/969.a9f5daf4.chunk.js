/*! For license information please see 969.a9f5daf4.chunk.js.LICENSE.txt */
(self.webpackChunkpresale_xrxs_website_contract =
  self.webpackChunkpresale_xrxs_website_contract || []).push([
  [969],
  {
    7228: function (t) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    2858: function (t) {
      (t.exports = function (t) {
        if (Array.isArray(t)) return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    3646: function (t, e, n) {
      var r = n(7228);
      (t.exports = function (t) {
        if (Array.isArray(t)) return r(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    3269: function (t, e, n) {
      var r = n(379);
      (t.exports = function (t, e) {
        var n =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = r(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            n && (t = n);
            var o = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return o >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[o++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var s,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (s = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw s;
            }
          },
        };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    6860: function (t) {
      (t.exports = function (t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    3884: function (t) {
      (t.exports = function (t, e) {
        var n =
          null == t
            ? null
            : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != n) {
          var r,
            o,
            i = [],
            s = !0,
            a = !1;
          try {
            for (
              n = n.call(t);
              !(s = (r = n.next()).done) &&
              (i.push(r.value), !e || i.length !== e);
              s = !0
            );
          } catch (u) {
            (a = !0), (o = u);
          } finally {
            try {
              s || null == n.return || n.return();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    521: function (t) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    8206: function (t) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    3038: function (t, e, n) {
      var r = n(2858),
        o = n(3884),
        i = n(379),
        s = n(521);
      (t.exports = function (t, e) {
        return r(t) || o(t, e) || i(t, e) || s();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    319: function (t, e, n) {
      var r = n(3646),
        o = n(6860),
        i = n(379),
        s = n(8206);
      (t.exports = function (t) {
        return r(t) || o(t) || i(t) || s();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    379: function (t, e, n) {
      var r = n(7228);
      (t.exports = function (t, e) {
        if (t) {
          if ("string" === typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    9795: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          detectEnv: function () {
            return v;
          },
          detectOS: function () {
            return y;
          },
          formatIOSMobile: function () {
            return J;
          },
          formatMobileRegistry: function () {
            return X;
          },
          formatMobileRegistryEntry: function () {
            return $;
          },
          getClientMeta: function () {
            return L;
          },
          getCrypto: function () {
            return B;
          },
          getCryptoOrThrow: function () {
            return O;
          },
          getDappRegistryUrl: function () {
            return Q;
          },
          getDocument: function () {
            return S;
          },
          getDocumentOrThrow: function () {
            return R;
          },
          getFromWindow: function () {
            return k;
          },
          getFromWindowOrThrow: function () {
            return E;
          },
          getLocal: function () {
            return H;
          },
          getLocalStorage: function () {
            return U;
          },
          getLocalStorageOrThrow: function () {
            return P;
          },
          getLocation: function () {
            return I;
          },
          getLocationOrThrow: function () {
            return T;
          },
          getMobileLinkRegistry: function () {
            return K;
          },
          getMobileRegistryEntry: function () {
            return W;
          },
          getNavigator: function () {
            return C;
          },
          getNavigatorOrThrow: function () {
            return A;
          },
          getWalletRegistryUrl: function () {
            return V;
          },
          isAndroid: function () {
            return _;
          },
          isBrowser: function () {
            return M;
          },
          isIOS: function () {
            return w;
          },
          isMobile: function () {
            return b;
          },
          isNode: function () {
            return x;
          },
          mobileLinkChoiceKey: function () {
            return F;
          },
          removeLocal: function () {
            return Z;
          },
          safeJsonParse: function () {
            return q;
          },
          safeJsonStringify: function () {
            return j;
          },
          saveMobileLinkInfo: function () {
            return z;
          },
          setLocal: function () {
            return D;
          },
        });
      var r = n(5210),
        o = n(8783),
        i = function () {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
          var r = Array(t),
            o = 0;
          for (e = 0; e < n; e++)
            for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++)
              r[o] = i[s];
          return r;
        },
        s = function (t, e, n) {
          (this.name = t),
            (this.version = e),
            (this.os = n),
            (this.type = "browser");
        },
        a = function (t) {
          (this.version = t),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = process.platform);
        },
        u = function (t, e, n, r) {
          (this.name = t),
            (this.version = e),
            (this.os = n),
            (this.bot = r),
            (this.type = "bot-device");
        },
        c = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        l = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        h =
          /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        f = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FBAV\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        p = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function d(t) {
        return t
          ? g(t)
          : "undefined" === typeof document &&
            "undefined" !== typeof navigator &&
            "ReactNative" === navigator.product
          ? new l()
          : "undefined" !== typeof navigator
          ? g(navigator.userAgent)
          : "undefined" !== typeof process && process.version
          ? new a(process.version.slice(1))
          : null;
      }
      function m(t) {
        return (
          "" !== t &&
          f.reduce(function (e, n) {
            var r = n[0],
              o = n[1];
            if (e) return e;
            var i = o.exec(t);
            return !!i && [r, i];
          }, !1)
        );
      }
      function g(t) {
        var e = m(t);
        if (!e) return null;
        var n = e[0],
          r = e[1];
        if ("searchbot" === n) return new c();
        var o = r[1] && r[1].split(/[._]/).slice(0, 3);
        o
          ? o.length < 3 &&
            (o = i(
              o,
              (function (t) {
                for (var e = [], n = 0; n < t; n++) e.push("0");
                return e;
              })(3 - o.length)
            ))
          : (o = []);
        var a = o.join("."),
          l = (function (t) {
            for (var e = 0, n = p.length; e < n; e++) {
              var r = p[e],
                o = r[0];
              if (r[1].exec(t)) return o;
            }
            return null;
          })(t),
          f = h.exec(t);
        return f && f[1] ? new u(n, a, l, f[1]) : new s(n, a, l);
      }
      function v(t) {
        return d(t);
      }
      function y() {
        var t = v();
        return t && t.os ? t.os : void 0;
      }
      function _() {
        var t = y();
        return !!t && t.toLowerCase().includes("android");
      }
      function w() {
        var t = y();
        return (
          !!t &&
          (t.toLowerCase().includes("ios") ||
            (t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1))
        );
      }
      function b() {
        return !!y() && (_() || w());
      }
      function x() {
        var t = v();
        return !(!t || !t.name) && "node" === t.name.toLowerCase();
      }
      function M() {
        return !x() && !!C();
      }
      var k = o.getFromWindow,
        E = o.getFromWindowOrThrow,
        R = o.getDocumentOrThrow,
        S = o.getDocument,
        A = o.getNavigatorOrThrow,
        C = o.getNavigator,
        T = o.getLocationOrThrow,
        I = o.getLocation,
        O = o.getCryptoOrThrow,
        B = o.getCrypto,
        P = o.getLocalStorageOrThrow,
        U = o.getLocalStorage;
      function L() {
        return r.D();
      }
      var N = n(6090),
        q = N.D,
        j = N.u;
      function D(t, e) {
        var n = j(e),
          r = U();
        r && r.setItem(t, n);
      }
      function H(t) {
        var e = null,
          n = U();
        return n && (e = n.getItem(t)), e ? q(e) : e;
      }
      function Z(t) {
        var e = U();
        e && e.removeItem(t);
      }
      var F = "WALLETCONNECT_DEEPLINK_CHOICE";
      function J(t, e) {
        var n = encodeURIComponent(t);
        return e.universalLink
          ? "".concat(e.universalLink, "/wc?uri=").concat(n)
          : e.deepLink
          ? ""
              .concat(e.deepLink)
              .concat(e.deepLink.endsWith(":") ? "//" : "/", "wc?uri=")
              .concat(n)
          : "";
      }
      function z(t) {
        var e = t.href.split("?")[0];
        D(F, Object.assign(Object.assign({}, t), { href: e }));
      }
      function W(t, e) {
        return t.filter(function (t) {
          return t.name.toLowerCase().includes(e.toLowerCase());
        })[0];
      }
      function K(t, e) {
        var n = t;
        return (
          e &&
            (n = e
              .map(function (e) {
                return W(t, e);
              })
              .filter(Boolean)),
          n
        );
      }
      var Y = "https://registry.walletconnect.com";
      function V() {
        return Y + "/api/v2/wallets";
      }
      function Q() {
        return Y + "/api/v2/dapps";
      }
      function $(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "mobile";
        return {
          name: t.name || "",
          shortName: t.metadata.shortName || "",
          color: t.metadata.colors.primary || "",
          logo: null !== (e = t.image_url.sm) && void 0 !== e ? e : "",
          universalLink: t[n].universal || "",
          deepLink: t[n].native || "",
        };
      }
      function X(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "mobile";
        return Object.values(t)
          .filter(function (t) {
            return !!t[e].universal || !!t[e].native;
          })
          .map(function (t) {
            return $(t, e);
          });
      }
    },
    2080: function (t, e, n) {
      "use strict";
      var r = n(319).default,
        o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.removeHexLeadingZeros =
          e.sanitizeHex =
          e.addHexPrefix =
          e.removeHexPrefix =
          e.padRight =
          e.padLeft =
          e.sanitizeBytes =
          e.swapHex =
          e.swapBytes =
          e.splitBytes =
          e.calcByteLength =
          e.trimRight =
          e.trimLeft =
          e.concatArrays =
          e.concatBuffers =
          e.getEncoding =
          e.getType =
          e.isArrayBuffer =
          e.isTypedArray =
          e.isBuffer =
          e.isHexString =
          e.isBinaryString =
          e.binaryToNumber =
          e.binaryToUtf8 =
          e.binaryToHex =
          e.binaryToArray =
          e.binaryToBuffer =
          e.numberToBinary =
          e.numberToUtf8 =
          e.numberToHex =
          e.numberToArray =
          e.numberToBuffer =
          e.utf8ToBinary =
          e.utf8ToNumber =
          e.utf8ToHex =
          e.utf8ToArray =
          e.utf8ToBuffer =
          e.hexToBinary =
          e.hexToNumber =
          e.hexToUtf8 =
          e.hexToArray =
          e.hexToBuffer =
          e.arrayToBinary =
          e.arrayToNumber =
          e.arrayToUtf8 =
          e.arrayToHex =
          e.arrayToBuffer =
          e.bufferToBinary =
          e.bufferToNumber =
          e.bufferToUtf8 =
          e.bufferToHex =
          e.bufferToArray =
            void 0);
      var i = o(n(6170)),
        s = o(n(4122)),
        a = "hex",
        u = "utf8",
        c = "0";
      function l(t) {
        return new Uint8Array(t);
      }
      function h(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t.toString(a);
        return e ? j(n) : n;
      }
      function f(t) {
        return t.toString(u);
      }
      function p(t) {
        return t.readUIntBE(0, t.length);
      }
      function d(t) {
        return s.default(t);
      }
      function m(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return h(d(t), e);
      }
      function g(t) {
        return f(d(t));
      }
      function v(t) {
        return p(d(t));
      }
      function y(t) {
        return Array.from(t).map(k).join("");
      }
      function _(t) {
        return Buffer.from(q(t), a);
      }
      function w(t) {
        return l(_(t));
      }
      function b(t) {
        return y(w(t));
      }
      function x(t) {
        return Buffer.from(t, u);
      }
      function M(t) {
        return l(x(t));
      }
      function k(t) {
        return L((t >>> 0).toString(2));
      }
      function E(t) {
        return d(R(t));
      }
      function R(t) {
        return new Uint8Array(
          P(t).map(function (t) {
            return parseInt(t, 2);
          })
        );
      }
      function S(t, e) {
        return m(R(t), e);
      }
      function A(t) {
        return (
          !("string" !== typeof t || !new RegExp(/^[01]+$/).test(t)) &&
          t.length % 8 === 0
        );
      }
      function C(t, e) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || t.length === 2 + 2 * e)
        );
      }
      function T(t) {
        return Buffer.isBuffer(t);
      }
      function I(t) {
        return i.default.strict(t) && !T(t);
      }
      function O(t) {
        return !I(t) && !T(t) && "undefined" !== typeof t.byteLength;
      }
      function B(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          n = t % e;
        return n ? ((t - n) / e) * e + e : t;
      }
      function P(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          n = L(t).match(new RegExp(".{".concat(e, "}"), "gi"));
        return Array.from(n || []);
      }
      function U(t) {
        return P(t).map(D).join("");
      }
      function L(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
        return N(t, B(t.length, e), n);
      }
      function N(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
        return H(t, e, !0, n);
      }
      function q(t) {
        return t.replace(/^0x/, "");
      }
      function j(t) {
        return t.startsWith("0x") ? t : "0x".concat(t);
      }
      function D(t) {
        return t.split("").reverse().join("");
      }
      function H(t, e, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c,
          o = e - t.length,
          i = t;
        if (o > 0) {
          var s = r.repeat(o);
          i = n ? s + t : t + s;
        }
        return i;
      }
      (e.bufferToArray = l),
        (e.bufferToHex = h),
        (e.bufferToUtf8 = f),
        (e.bufferToNumber = p),
        (e.bufferToBinary = function (t) {
          return y(l(t));
        }),
        (e.arrayToBuffer = d),
        (e.arrayToHex = m),
        (e.arrayToUtf8 = g),
        (e.arrayToNumber = v),
        (e.arrayToBinary = y),
        (e.hexToBuffer = _),
        (e.hexToArray = w),
        (e.hexToUtf8 = function (t) {
          return f(_(t));
        }),
        (e.hexToNumber = function (t) {
          return v(w(t));
        }),
        (e.hexToBinary = b),
        (e.utf8ToBuffer = x),
        (e.utf8ToArray = M),
        (e.utf8ToHex = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return h(x(t), e);
        }),
        (e.utf8ToNumber = function (t) {
          var e = parseInt(t, 10);
          return (
            (function (t, e) {
              if (!t) throw new Error(e);
            })(
              !(function (t) {
                return "undefined" === typeof t;
              })(e),
              "Number can only safely store up to 53 bits"
            ),
            e
          );
        }),
        (e.utf8ToBinary = function (t) {
          return y(M(t));
        }),
        (e.numberToBuffer = function (t) {
          return E(k(t));
        }),
        (e.numberToArray = function (t) {
          return R(k(t));
        }),
        (e.numberToHex = function (t, e) {
          return S(k(t), e);
        }),
        (e.numberToUtf8 = function (t) {
          return "".concat(t);
        }),
        (e.numberToBinary = k),
        (e.binaryToBuffer = E),
        (e.binaryToArray = R),
        (e.binaryToHex = S),
        (e.binaryToUtf8 = function (t) {
          return g(R(t));
        }),
        (e.binaryToNumber = function (t) {
          return v(R(t));
        }),
        (e.isBinaryString = A),
        (e.isHexString = C),
        (e.isBuffer = T),
        (e.isTypedArray = I),
        (e.isArrayBuffer = O),
        (e.getType = function (t) {
          return T(t)
            ? "buffer"
            : I(t)
            ? "typed-array"
            : O(t)
            ? "array-buffer"
            : Array.isArray(t)
            ? "array"
            : typeof t;
        }),
        (e.getEncoding = function (t) {
          return A(t) ? "binary" : C(t) ? a : u;
        }),
        (e.concatBuffers = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = Buffer.concat(e);
          return r;
        }),
        (e.concatArrays = function () {
          for (
            var t = [], e = arguments.length, n = new Array(e), o = 0;
            o < e;
            o++
          )
            n[o] = arguments[o];
          return (
            n.forEach(function (e) {
              return (t = t.concat(Array.from(e)));
            }),
            new Uint8Array(r(t))
          );
        }),
        (e.trimLeft = function (t, e) {
          var n = t.length - e;
          return n > 0 && (t = t.slice(n)), t;
        }),
        (e.trimRight = function (t, e) {
          return t.slice(0, e);
        }),
        (e.calcByteLength = B),
        (e.splitBytes = P),
        (e.swapBytes = U),
        (e.swapHex = function (t) {
          return S(U(b(t)));
        }),
        (e.sanitizeBytes = L),
        (e.padLeft = N),
        (e.padRight = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
          return H(t, e, !1, n);
        }),
        (e.removeHexPrefix = q),
        (e.addHexPrefix = j),
        (e.sanitizeHex = function (t) {
          return (t = L((t = q(t)), 2)) && (t = j(t)), t;
        }),
        (e.removeHexLeadingZeros = function (t) {
          var e = t.startsWith("0x");
          return (
            (t = (t = q(t)).startsWith(c) ? t.substring(1) : t), e ? j(t) : t
          );
        });
    },
    2760: function (t, e, n) {
      "use strict";
      function r() {
        return (
          (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) ||
          (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) ||
          {}
        );
      }
      function o() {
        var t = r();
        return t.subtle || t.webkitSubtle;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowserCryptoAvailable =
          e.getSubtleCrypto =
          e.getBrowerCrypto =
            void 0),
        (e.getBrowerCrypto = r),
        (e.getSubtleCrypto = o),
        (e.isBrowserCryptoAvailable = function () {
          return !!r() && !!o();
        });
    },
    4300: function (t, e) {
      "use strict";
      function n() {
        return (
          "undefined" === typeof document &&
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function r() {
        return (
          "undefined" !== typeof process &&
          "undefined" !== typeof process.versions &&
          "undefined" !== typeof process.versions.node
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowser = e.isNode = e.isReactNative = void 0),
        (e.isReactNative = n),
        (e.isNode = r),
        (e.isBrowser = function () {
          return !n() && !r();
        });
    },
    5503: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n || e.hasOwnProperty(n) || r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        o(n(2760), e),
        o(n(4300), e);
    },
    5969: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return jt;
          },
        });
      var r = {};
      n.r(r),
        n.d(r, {
          decrypt: function () {
            return Ot;
          },
          encrypt: function () {
            return Tt;
          },
          generateKey: function () {
            return Rt;
          },
          verifyHmac: function () {
            return At;
          },
        });
      var o = n(5861),
        i = n(5671),
        s = n(3144),
        a = n(7757),
        u = n.n(a),
        c = n(548),
        l = n.n(c),
        h = n(136),
        f = n(8505),
        p = n(8041),
        d = n(1567),
        m = (function (t) {
          (0, h.Z)(n, t);
          var e = (0, f.Z)(n);
          function n(t) {
            var r;
            return (
              (0, i.Z)(this, n),
              ((r = e.call(this, t)).events = new p.EventEmitter()),
              (r.connection = r.setConnection(t)),
              r.registerEventListeners(),
              r
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "connect",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      var e,
                        n = arguments;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.connection),
                                  (t.next = 3),
                                  this.open(e)
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "disconnect",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.close();
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "request",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e, n) {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this.requestStrict(
                                    (0, d.formatJsonRpcRequest)(
                                      e.method,
                                      e.params || []
                                    ),
                                    n
                                  )
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "requestStrict",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e, n) {
                      var r = this;
                      return u().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                "return",
                                new Promise(
                                  (function () {
                                    var t = (0, o.Z)(
                                      u().mark(function t(o, i) {
                                        return u().wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  if (r.connection.connected) {
                                                    t.next = 9;
                                                    break;
                                                  }
                                                  return (
                                                    (t.prev = 1),
                                                    (t.next = 4),
                                                    r.open()
                                                  );
                                                case 4:
                                                  t.next = 9;
                                                  break;
                                                case 6:
                                                  (t.prev = 6),
                                                    (t.t0 = t.catch(1)),
                                                    i(t.t0);
                                                case 9:
                                                  return (
                                                    r.events.on(
                                                      "".concat(e.id),
                                                      function (t) {
                                                        (0, d.isJsonRpcError)(t)
                                                          ? i(t.error.message)
                                                          : o(t.result);
                                                      }
                                                    ),
                                                    (t.prev = 10),
                                                    (t.next = 13),
                                                    r.connection.send(e, n)
                                                  );
                                                case 13:
                                                  t.next = 18;
                                                  break;
                                                case 15:
                                                  (t.prev = 15),
                                                    (t.t1 = t.catch(10)),
                                                    i(t.t1);
                                                case 18:
                                                case "end":
                                                  return t.stop();
                                              }
                                          },
                                          t,
                                          null,
                                          [
                                            [1, 6],
                                            [10, 15],
                                          ]
                                        );
                                      })
                                    );
                                    return function (e, n) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setConnection",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.connection;
                  return t;
                },
              },
              {
                key: "onPayload",
                value: function (t) {
                  this.events.emit("payload", t),
                    (0, d.isJsonRpcResponse)(t)
                      ? this.events.emit("".concat(t.id), t)
                      : this.events.emit("message", {
                          type: t.method,
                          data: t.params,
                        });
                },
              },
              {
                key: "open",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      var e,
                        n = arguments;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.connection),
                                  this.connection !== e ||
                                    !this.connection.connected)
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return");
                              case 3:
                                if (
                                  (this.connection.connected && this.close(),
                                  "string" !== typeof e)
                                ) {
                                  t.next = 8;
                                  break;
                                }
                                return (t.next = 7), this.connection.open(e);
                              case 7:
                                e = this.connection;
                              case 8:
                                return (
                                  (this.connection = this.setConnection(e)),
                                  (t.next = 11),
                                  this.connection.open()
                                );
                              case 11:
                                this.events.emit("connect");
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "close",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.connection.close();
                              case 2:
                                this.events.emit("disconnect");
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var t = this;
                  this.connection.on("payload", function (e) {
                    return t.onPayload(e);
                  }),
                    this.connection.on("close", function () {
                      return t.events.emit("disconnect");
                    }),
                    this.connection.on("error", function (e) {
                      return t.events.emit("error", e);
                    });
                },
              },
            ]),
            n
          );
        })(d.IJsonRpcProvider),
        g = n(7605),
        v = n.n(g),
        y = n(6090),
        _ = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
        },
        w = (function () {
          function t(e) {
            if (
              ((0, i.Z)(this, t),
              (this.url = e),
              (this.events = new p.EventEmitter()),
              (this.isAvailable = !1),
              (this.registering = !1),
              !(0, d.isHttpUrl)(e))
            )
              throw new Error(
                "Provided URL is not compatible with HTTP connection: ".concat(
                  e
                )
              );
            this.url = e;
          }
          return (
            (0, s.Z)(t, [
              {
                key: "connected",
                get: function () {
                  return this.isAvailable;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return this.registering;
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "open",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      var e,
                        n = arguments;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.url),
                                  (t.next = 3),
                                  this.register(e)
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "close",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.isAvailable) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error("Connection already closed");
                              case 2:
                                this.onClose();
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "send",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e, n) {
                      var r, o, i;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.isAvailable) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.register();
                              case 3:
                                return (
                                  (t.prev = 3),
                                  (r = (0, y.u)(e)),
                                  (t.next = 7),
                                  v()(
                                    this.url,
                                    Object.assign(Object.assign({}, _), {
                                      body: r,
                                    })
                                  )
                                );
                              case 7:
                                return (o = t.sent), (t.next = 10), o.json();
                              case 10:
                                (i = t.sent),
                                  this.onPayload({ data: i }),
                                  (t.next = 17);
                                break;
                              case 14:
                                (t.prev = 14),
                                  (t.t0 = t.catch(3)),
                                  this.onError(e.id, t.t0);
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[3, 14]]
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "register",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      var e,
                        n,
                        r,
                        o = this,
                        i = arguments;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e =
                                    i.length > 0 && void 0 !== i[0]
                                      ? i[0]
                                      : this.url),
                                  (0, d.isHttpUrl)(e))
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                throw new Error(
                                  "Provided URL is not compatible with HTTP connection: ".concat(
                                    e
                                  )
                                );
                              case 3:
                                if (!this.registering) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt(
                                  "return",
                                  new Promise(function (t, e) {
                                    o.events.once(
                                      "register_error",
                                      function (t) {
                                        e(t);
                                      }
                                    ),
                                      o.events.once("open", function () {
                                        if (
                                          "undefined" === typeof o.isAvailable
                                        )
                                          return e(
                                            new Error(
                                              "HTTP connection is missing or invalid"
                                            )
                                          );
                                        t();
                                      });
                                  })
                                );
                              case 5:
                                return (
                                  (this.url = e),
                                  (this.registering = !0),
                                  (t.prev = 7),
                                  (n = (0, y.u)({
                                    id: 1,
                                    jsonrpc: "2.0",
                                    method: "test",
                                    params: [],
                                  })),
                                  (t.next = 11),
                                  v()(
                                    e,
                                    Object.assign(Object.assign({}, _), {
                                      body: n,
                                    })
                                  )
                                );
                              case 11:
                                this.onOpen(), (t.next = 20);
                                break;
                              case 14:
                                throw (
                                  ((t.prev = 14),
                                  (t.t0 = t.catch(7)),
                                  (r = this.parseError(t.t0)),
                                  this.events.emit("register_error", r),
                                  this.onClose(),
                                  r)
                                );
                              case 20:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[7, 14]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onOpen",
                value: function () {
                  (this.isAvailable = !0),
                    (this.registering = !1),
                    this.events.emit("open");
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.isAvailable = !1),
                    (this.registering = !1),
                    this.events.emit("close");
                },
              },
              {
                key: "onPayload",
                value: function (t) {
                  if ("undefined" !== typeof t.data) {
                    var e =
                      "string" === typeof t.data ? (0, y.D)(t.data) : t.data;
                    this.events.emit("payload", e);
                  }
                },
              },
              {
                key: "onError",
                value: function (t, e) {
                  var n = this.parseError(e),
                    r = n.message || n.toString(),
                    o = (0, d.formatJsonRpcError)(t, r);
                  this.events.emit("payload", o);
                },
              },
              {
                key: "parseError",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.url;
                  return (0, d.parseConnectionError)(t, e, "HTTP");
                },
              },
            ]),
            t
          );
        })(),
        b = n(9795),
        x = [
          "session_request",
          "session_update",
          "exchange_key",
          "connect",
          "disconnect",
          "display_uri",
          "modal_closed",
          "transport_open",
          "transport_close",
          "transport_error",
        ],
        M = [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "eth_signTypedData",
          "eth_signTypedData_v1",
          "eth_signTypedData_v2",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "personal_sign",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        k = {
          1: "mainnet",
          3: "ropsten",
          4: "rinkeby",
          5: "goerli",
          42: "kovan",
        },
        E = n(8058),
        R = n.n(E),
        S = n(2080);
      function A(t) {
        return S.arrayToBuffer(new Uint8Array(t));
      }
      function C(t) {
        return S.bufferToArray(t).buffer;
      }
      function T(t, e) {
        var n = S.removeHexPrefix(S.sanitizeHex(new (R())(t).toString(16)));
        return e ? n : S.addHexPrefix(n);
      }
      var I = n(7676);
      function O(t) {
        return S.sanitizeHex(t);
      }
      var B = d.payloadId;
      function P() {
        return (function (t, e) {
          for (
            e = t = "";
            t++ < 36;
            e +=
              (51 * t) & 52
                ? (15 ^ t
                    ? 8 ^ (Math.random() * (20 ^ t ? 16 : 4))
                    : 4
                  ).toString(16)
                : "-"
          );
          return e;
        })();
      }
      function U(t, e) {
        var n,
          r = (function (t, e) {
            var n,
              r = k[t];
            return (
              r && (n = "https://".concat(r, ".infura.io/v3/").concat(e)), n
            );
          })(t, e.infuraId);
        return e.custom && e.custom[t] ? (n = e.custom[t]) : r && (n = r), n;
      }
      function L(t, e) {
        return S.isHexString(t, e);
      }
      function N(t) {
        return "undefined" !== typeof t.result;
      }
      function q(t) {
        return "undefined" !== typeof t.error;
      }
      function j(t) {
        return "undefined" !== typeof t.event;
      }
      function D(t) {
        return !!t.method.startsWith("wc_") || !M.includes(t.method);
      }
      function H(t) {
        t = (0, S.removeHexPrefix)(t.toLowerCase());
        for (
          var e,
            n = (0, S.removeHexPrefix)(
              (0, I.keccak_256)(((e = t), S.utf8ToBuffer(e)))
            ),
            r = "",
            o = 0;
          o < t.length;
          o++
        )
          parseInt(n[o], 16) > 7 ? (r += t[o].toUpperCase()) : (r += t[o]);
        return (0, S.addHexPrefix)(r);
      }
      function Z(t) {
        var e, n, r;
        return (
          (r = t) &&
            r.length &&
            !L(t[0]) &&
            (t[0] = ((e = t[0]), S.utf8ToHex(e, !n))),
          t
        );
      }
      function F(t) {
        if ("undefined" !== typeof t.type && "0" !== t.type) return t;
        if (
          "undefined" === typeof t.from ||
          !(e = t.from) ||
          "0x" !== e.toLowerCase().substring(0, 2) ||
          !/^(0x)?[0-9a-f]{40}$/i.test(e) ||
          (!/^(0x)?[0-9a-f]{40}$/.test(e) &&
            !/^(0x)?[0-9A-F]{40}$/.test(e) &&
            e !== H(e))
        )
          throw new Error(
            "Transaction object must include a valid 'from' value."
          );
        var e;
        function n(t) {
          var e,
            n = t;
          return (
            ("number" === typeof t ||
              ("string" === typeof t &&
                !(function (t) {
                  return "" === t || ("string" === typeof t && "" === t.trim());
                })(t))) &&
              (L(t) ? "string" === typeof t && (n = O(t)) : (n = T(t))),
            "string" === typeof n &&
              ((e = n), (n = S.removeHexLeadingZeros(S.addHexPrefix(e)))),
            n
          );
        }
        var r = {
            from: O(t.from),
            to: "undefined" === typeof t.to ? "" : O(t.to),
            gasPrice: "undefined" === typeof t.gasPrice ? "" : n(t.gasPrice),
            gas:
              "undefined" === typeof t.gas
                ? "undefined" === typeof t.gasLimit
                  ? ""
                  : n(t.gasLimit)
                : n(t.gas),
            value: "undefined" === typeof t.value ? "" : n(t.value),
            nonce: "undefined" === typeof t.nonce ? "" : n(t.nonce),
            data: "undefined" === typeof t.data ? "" : O(t.data) || "0x",
          },
          o = ["gasPrice", "gas", "value", "nonce"];
        return (
          Object.keys(r).forEach(function (t) {
            !r[t].trim().length && o.includes(t) && delete r[t];
          }),
          r
        );
      }
      var J = n(1172);
      function z(t, e) {
        var n = W(t);
        return (t = (function (t) {
          return J.stringify(t);
        })((n = Object.assign(Object.assign({}, n), e))));
      }
      function W(t) {
        return J.parse(t);
      }
      var K = n(2982),
        Y = (function () {
          function t() {
            var e = this;
            (0, i.Z)(this, t),
              (this._eventEmitters = []),
              "undefined" !== typeof window &&
                "undefined" !== typeof window.addEventListener &&
                (window.addEventListener("online", function () {
                  return e.trigger("online");
                }),
                window.addEventListener("offline", function () {
                  return e.trigger("offline");
                }));
          }
          return (
            (0, s.Z)(t, [
              {
                key: "on",
                value: function (t, e) {
                  this._eventEmitters.push({ event: t, callback: e });
                },
              },
              {
                key: "trigger",
                value: function (t) {
                  var e = [];
                  t &&
                    (e = this._eventEmitters.filter(function (e) {
                      return e.event === t;
                    })),
                    e.forEach(function (t) {
                      t.callback();
                    });
                },
              },
            ]),
            t
          );
        })(),
        V = "undefined" !== typeof n.g.WebSocket ? n.g.WebSocket : n(7610),
        Q = (function () {
          function t(e) {
            var n = this;
            if (
              ((0, i.Z)(this, t),
              (this.opts = e),
              (this._queue = []),
              (this._events = []),
              (this._subscriptions = []),
              (this._protocol = e.protocol),
              (this._version = e.version),
              (this._url = ""),
              (this._netMonitor = null),
              (this._socket = null),
              (this._nextSocket = null),
              (this._subscriptions = e.subscriptions || []),
              (this._netMonitor = e.netMonitor || new Y()),
              !e.url || "string" !== typeof e.url)
            )
              throw new Error("Missing or invalid WebSocket url");
            (this._url = e.url),
              this._netMonitor.on("online", function () {
                return n._socketCreate();
              });
          }
          return (
            (0, s.Z)(t, [
              {
                key: "readyState",
                get: function () {
                  return this._socket ? this._socket.readyState : -1;
                },
                set: function (t) {},
              },
              {
                key: "connecting",
                get: function () {
                  return 0 === this.readyState;
                },
                set: function (t) {},
              },
              {
                key: "connected",
                get: function () {
                  return 1 === this.readyState;
                },
                set: function (t) {},
              },
              {
                key: "closing",
                get: function () {
                  return 2 === this.readyState;
                },
                set: function (t) {},
              },
              {
                key: "closed",
                get: function () {
                  return 3 === this.readyState;
                },
                set: function (t) {},
              },
              {
                key: "open",
                value: function () {
                  this._socketCreate();
                },
              },
              {
                key: "close",
                value: function () {
                  this._socketClose();
                },
              },
              {
                key: "send",
                value: function (t, e, n) {
                  if (!e || "string" !== typeof e)
                    throw new Error("Missing or invalid topic field");
                  this._socketSend({
                    topic: e,
                    type: "pub",
                    payload: t,
                    silent: !!n,
                  });
                },
              },
              {
                key: "subscribe",
                value: function (t) {
                  this._socketSend({
                    topic: t,
                    type: "sub",
                    payload: "",
                    silent: !0,
                  });
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this._events.push({ event: t, callback: e });
                },
              },
              {
                key: "_socketCreate",
                value: function () {
                  var t = this;
                  if (!this._nextSocket) {
                    var e = (function (t, e, n) {
                      var r,
                        o,
                        i = (
                          t.startsWith("https")
                            ? t.replace("https", "wss")
                            : t.startsWith("http")
                            ? t.replace("http", "ws")
                            : t
                        ).split("?"),
                        s = (0, b.isBrowser)()
                          ? {
                              protocol: e,
                              version: n,
                              env: "browser",
                              host:
                                (null === (r = (0, b.getLocation)()) ||
                                void 0 === r
                                  ? void 0
                                  : r.host) || "",
                            }
                          : {
                              protocol: e,
                              version: n,
                              env:
                                (null === (o = (0, b.detectEnv)()) ||
                                void 0 === o
                                  ? void 0
                                  : o.name) || "",
                            },
                        a = z(
                          (function (t) {
                            var e =
                              -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
                            return "undefined" !== typeof e ? t.substr(e) : "";
                          })(i[1] || ""),
                          s
                        );
                      return i[0] + "?" + a;
                    })(this._url, this._protocol, this._version);
                    if (((this._nextSocket = new V(e)), !this._nextSocket))
                      throw new Error("Failed to create socket");
                    (this._nextSocket.onmessage = function (e) {
                      return t._socketReceive(e);
                    }),
                      (this._nextSocket.onopen = function () {
                        return t._socketOpen();
                      }),
                      (this._nextSocket.onerror = function (e) {
                        return t._socketError(e);
                      }),
                      (this._nextSocket.onclose = function () {
                        setTimeout(function () {
                          (t._nextSocket = null), t._socketCreate();
                        }, 1e3);
                      });
                  }
                },
              },
              {
                key: "_socketOpen",
                value: function () {
                  this._socketClose(),
                    (this._socket = this._nextSocket),
                    (this._nextSocket = null),
                    this._queueSubscriptions(),
                    this._pushQueue();
                },
              },
              {
                key: "_socketClose",
                value: function () {
                  this._socket &&
                    ((this._socket.onclose = function () {}),
                    this._socket.close());
                },
              },
              {
                key: "_socketSend",
                value: function (t) {
                  var e = JSON.stringify(t);
                  this._socket && 1 === this._socket.readyState
                    ? this._socket.send(e)
                    : (this._setToQueue(t), this._socketCreate());
                },
              },
              {
                key: "_socketReceive",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (t.prev = 0),
                                  (n = JSON.parse(e.data)),
                                  (t.next = 7);
                                break;
                              case 4:
                                return (
                                  (t.prev = 4),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt("return")
                                );
                              case 7:
                                this._socketSend({
                                  topic: n.topic,
                                  type: "ack",
                                  payload: "",
                                  silent: !0,
                                }),
                                  this._socket &&
                                    1 === this._socket.readyState &&
                                    ((r = this._events.filter(function (t) {
                                      return "message" === t.event;
                                    })),
                                    r &&
                                      r.length &&
                                      r.forEach(function (t) {
                                        return t.callback(n);
                                      }));
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 4]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_socketError",
                value: function (t) {
                  var e = this._events.filter(function (t) {
                    return "error" === t.event;
                  });
                  e &&
                    e.length &&
                    e.forEach(function (e) {
                      return e.callback(t);
                    });
                },
              },
              {
                key: "_queueSubscriptions",
                value: function () {
                  var t = this;
                  this._subscriptions.forEach(function (e) {
                    return t._queue.push({
                      topic: e,
                      type: "sub",
                      payload: "",
                      silent: !0,
                    });
                  }),
                    (this._subscriptions = this.opts.subscriptions || []);
                },
              },
              {
                key: "_setToQueue",
                value: function (t) {
                  this._queue.push(t);
                },
              },
              {
                key: "_pushQueue",
                value: function () {
                  var t = this;
                  this._queue.forEach(function (e) {
                    return t._socketSend(e);
                  }),
                    (this._queue = []);
                },
              },
            ]),
            t
          );
        })();
      var $ = Q,
        X = "Session currently connected",
        G = "Session currently disconnected",
        tt = "JSON RPC response format is invalid",
        et = "User close QRCode Modal",
        nt = (function () {
          function t() {
            (0, i.Z)(this, t), (this._eventEmitters = []);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "subscribe",
                value: function (t) {
                  this._eventEmitters.push(t);
                },
              },
              {
                key: "unsubscribe",
                value: function (t) {
                  this._eventEmitters = this._eventEmitters.filter(function (
                    e
                  ) {
                    return e.event !== t;
                  });
                },
              },
              {
                key: "trigger",
                value: function (t) {
                  var e,
                    n = [];
                  (e =
                    "undefined" !== typeof t.method
                      ? t.method
                      : N(t) || q(t)
                      ? "response:".concat(t.id)
                      : j(t)
                      ? t.event
                      : "") &&
                    (n = this._eventEmitters.filter(function (t) {
                      return t.event === e;
                    })),
                    (n && n.length) ||
                      (function (t) {
                        return x.includes(t) || t.startsWith("wc_");
                      })(e) ||
                      j(e) ||
                      (n = this._eventEmitters.filter(function (t) {
                        return "call_request" === t.event;
                      })),
                    n.forEach(function (e) {
                      if (q(t)) {
                        var n = new Error(t.error.message);
                        e.callback(n, null);
                      } else e.callback(null, t);
                    });
                },
              },
            ]),
            t
          );
        })(),
        rt = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "walletconnect";
            (0, i.Z)(this, t), (this.storageId = e);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "getSession",
                value: function () {
                  var t = null,
                    e = (0, b.getLocal)(this.storageId);
                  return e && "undefined" !== typeof e.bridge && (t = e), t;
                },
              },
              {
                key: "setSession",
                value: function (t) {
                  return (0, b.setLocal)(this.storageId, t), t;
                },
              },
              {
                key: "removeSession",
                value: function () {
                  (0, b.removeLocal)(this.storageId);
                },
              },
            ]),
            t
          );
        })(),
        ot = rt,
        it = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(function (t) {
          return "https://".concat(t, ".bridge.walletconnect.org");
        });
      function st() {
        return it[Math.floor(Math.random() * it.length)];
      }
      var at = (function () {
          function t(e) {
            if (
              ((0, i.Z)(this, t),
              (this.protocol = "wc"),
              (this.version = 1),
              (this._bridge = ""),
              (this._key = null),
              (this._clientId = ""),
              (this._clientMeta = null),
              (this._peerId = ""),
              (this._peerMeta = null),
              (this._handshakeId = 0),
              (this._handshakeTopic = ""),
              (this._connected = !1),
              (this._accounts = []),
              (this._chainId = 0),
              (this._networkId = 0),
              (this._rpcUrl = ""),
              (this._eventManager = new nt()),
              (this._clientMeta =
                (0, b.getClientMeta)() || e.connectorOpts.clientMeta || null),
              (this._cryptoLib = e.cryptoLib),
              (this._sessionStorage =
                e.sessionStorage || new ot(e.connectorOpts.storageId)),
              (this._qrcodeModal = e.connectorOpts.qrcodeModal),
              (this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions),
              (this._signingMethods = [].concat(
                (0, K.Z)(M),
                (0, K.Z)(e.connectorOpts.signingMethods || [])
              )),
              !e.connectorOpts.bridge &&
                !e.connectorOpts.uri &&
                !e.connectorOpts.session)
            )
              throw new Error(
                "Missing one of the required parameters: bridge / uri / session"
              );
            var n;
            e.connectorOpts.bridge &&
              (this.bridge = (function (t) {
                return (
                  "walletconnect.org" ===
                  (function (t) {
                    return (function (t) {
                      var e =
                        t.indexOf("//") > -1
                          ? t.split("/")[2]
                          : t.split("/")[0];
                      return (e = e.split(":")[0]).split("?")[0];
                    })(t)
                      .split(".")
                      .slice(-2)
                      .join(".");
                  })(t)
                );
              })((n = e.connectorOpts.bridge))
                ? st()
                : n),
              e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
            var r = e.connectorOpts.session || this._getStorageSession();
            r && (this.session = r),
              this.handshakeId &&
                this._subscribeToSessionResponse(
                  this.handshakeId,
                  "Session request rejected"
                ),
              (this._transport =
                e.transport ||
                new $({
                  protocol: this.protocol,
                  version: this.version,
                  url: this.bridge,
                  subscriptions: [this.clientId],
                })),
              this._subscribeToInternalEvents(),
              this._initTransport(),
              e.connectorOpts.uri && this._subscribeToSessionRequest(),
              e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "bridge",
                get: function () {
                  return this._bridge;
                },
                set: function (t) {
                  t && (this._bridge = t);
                },
              },
              {
                key: "key",
                get: function () {
                  var t, e;
                  return this._key
                    ? ((t = this._key),
                      (e = !0),
                      S.arrayToHex(new Uint8Array(t), !e))
                    : "";
                },
                set: function (t) {
                  if (t) {
                    var e,
                      n = ((e = t), S.hexToArray(e).buffer);
                    this._key = n;
                  }
                },
              },
              {
                key: "clientId",
                get: function () {
                  var t = this._clientId;
                  return t || (t = this._clientId = P()), this._clientId;
                },
                set: function (t) {
                  t && (this._clientId = t);
                },
              },
              {
                key: "peerId",
                get: function () {
                  return this._peerId;
                },
                set: function (t) {
                  t && (this._peerId = t);
                },
              },
              {
                key: "clientMeta",
                get: function () {
                  var t = this._clientMeta;
                  return (
                    t || (t = this._clientMeta = (0, b.getClientMeta)()), t
                  );
                },
                set: function (t) {},
              },
              {
                key: "peerMeta",
                get: function () {
                  return this._peerMeta;
                },
                set: function (t) {
                  this._peerMeta = t;
                },
              },
              {
                key: "handshakeTopic",
                get: function () {
                  return this._handshakeTopic;
                },
                set: function (t) {
                  t && (this._handshakeTopic = t);
                },
              },
              {
                key: "handshakeId",
                get: function () {
                  return this._handshakeId;
                },
                set: function (t) {
                  t && (this._handshakeId = t);
                },
              },
              {
                key: "uri",
                get: function () {
                  return this._formatUri();
                },
                set: function (t) {
                  if (t) {
                    var e = this._parseUri(t),
                      n = e.handshakeTopic,
                      r = e.bridge,
                      o = e.key;
                    (this.handshakeTopic = n),
                      (this.bridge = r),
                      (this.key = o);
                  }
                },
              },
              {
                key: "chainId",
                get: function () {
                  return this._chainId;
                },
                set: function (t) {
                  this._chainId = t;
                },
              },
              {
                key: "networkId",
                get: function () {
                  return this._networkId;
                },
                set: function (t) {
                  this._networkId = t;
                },
              },
              {
                key: "accounts",
                get: function () {
                  return this._accounts;
                },
                set: function (t) {
                  this._accounts = t;
                },
              },
              {
                key: "rpcUrl",
                get: function () {
                  return this._rpcUrl;
                },
                set: function (t) {
                  this._rpcUrl = t;
                },
              },
              {
                key: "connected",
                get: function () {
                  return this._connected;
                },
                set: function (t) {},
              },
              {
                key: "pending",
                get: function () {
                  return !!this._handshakeTopic;
                },
                set: function (t) {},
              },
              {
                key: "session",
                get: function () {
                  return {
                    connected: this.connected,
                    accounts: this.accounts,
                    chainId: this.chainId,
                    bridge: this.bridge,
                    key: this.key,
                    clientId: this.clientId,
                    clientMeta: this.clientMeta,
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    handshakeId: this.handshakeId,
                    handshakeTopic: this.handshakeTopic,
                  };
                },
                set: function (t) {
                  t &&
                    ((this._connected = t.connected),
                    (this.accounts = t.accounts),
                    (this.chainId = t.chainId),
                    (this.bridge = t.bridge),
                    (this.key = t.key),
                    (this.clientId = t.clientId),
                    (this.clientMeta = t.clientMeta),
                    (this.peerId = t.peerId),
                    (this.peerMeta = t.peerMeta),
                    (this.handshakeId = t.handshakeId),
                    (this.handshakeTopic = t.handshakeTopic));
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  var n = { event: t, callback: e };
                  this._eventManager.subscribe(n);
                },
              },
              {
                key: "off",
                value: function (t) {
                  this._eventManager.unsubscribe(t);
                },
              },
              {
                key: "createInstantRequest",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n,
                        r,
                        o,
                        i = this;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._generateKey();
                              case 2:
                                return (
                                  (this._key = t.sent),
                                  (n = this._formatRequest({
                                    method: "wc_instantRequest",
                                    params: [
                                      {
                                        peerId: this.clientId,
                                        peerMeta: this.clientMeta,
                                        request: this._formatRequest(e),
                                      },
                                    ],
                                  })),
                                  (this.handshakeId = n.id),
                                  (this.handshakeTopic = P()),
                                  this._eventManager.trigger({
                                    event: "display_uri",
                                    params: [this.uri],
                                  }),
                                  this.on("modal_closed", function () {
                                    throw new Error(et);
                                  }),
                                  (r = function () {
                                    i.killSession();
                                  }),
                                  (t.prev = 9),
                                  (t.next = 12),
                                  this._sendCallRequest(n)
                                );
                              case 12:
                                return (
                                  (o = t.sent) && r(), t.abrupt("return", o)
                                );
                              case 17:
                                throw (
                                  ((t.prev = 17),
                                  (t.t0 = t.catch(9)),
                                  r(),
                                  t.t0)
                                );
                              case 21:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[9, 17]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "connect",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n = this;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._qrcodeModal) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error("QRCode Modal not provided");
                              case 2:
                                if (!this.connected) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return", {
                                  chainId: this.chainId,
                                  accounts: this.accounts,
                                });
                              case 4:
                                return (t.next = 6), this.createSession(e);
                              case 6:
                                return t.abrupt(
                                  "return",
                                  new Promise(
                                    (function () {
                                      var t = (0, o.Z)(
                                        u().mark(function t(e, r) {
                                          return u().wrap(function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  n.on(
                                                    "modal_closed",
                                                    function () {
                                                      return r(new Error(et));
                                                    }
                                                  ),
                                                    n.on(
                                                      "connect",
                                                      function (t, n) {
                                                        if (t) return r(t);
                                                        e(n.params[0]);
                                                      }
                                                    );
                                                case 2:
                                                case "end":
                                                  return t.stop();
                                              }
                                          }, t);
                                        })
                                      );
                                      return function (e, n) {
                                        return t.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "createSession",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(X);
                              case 2:
                                if (!this.pending) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return");
                              case 4:
                                return (t.next = 6), this._generateKey();
                              case 6:
                                (this._key = t.sent),
                                  (n = this._formatRequest({
                                    method: "wc_sessionRequest",
                                    params: [
                                      {
                                        peerId: this.clientId,
                                        peerMeta: this.clientMeta,
                                        chainId:
                                          e && e.chainId ? e.chainId : null,
                                      },
                                    ],
                                  })),
                                  (this.handshakeId = n.id),
                                  (this.handshakeTopic = P()),
                                  this._sendSessionRequest(
                                    n,
                                    "Session update rejected",
                                    { topic: this.handshakeTopic }
                                  ),
                                  this._eventManager.trigger({
                                    event: "display_uri",
                                    params: [this.uri],
                                  });
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "approveSession",
                value: function (t) {
                  if (this._connected) throw new Error(X);
                  (this.chainId = t.chainId),
                    (this.accounts = t.accounts),
                    (this.networkId = t.networkId || 0),
                    (this.rpcUrl = t.rpcUrl || "");
                  var e = {
                      approved: !0,
                      chainId: this.chainId,
                      networkId: this.networkId,
                      accounts: this.accounts,
                      rpcUrl: this.rpcUrl,
                      peerId: this.clientId,
                      peerMeta: this.clientMeta,
                    },
                    n = { id: this.handshakeId, jsonrpc: "2.0", result: e };
                  this._sendResponse(n),
                    (this._connected = !0),
                    this._setStorageSession(),
                    this._eventManager.trigger({
                      event: "connect",
                      params: [
                        {
                          peerId: this.peerId,
                          peerMeta: this.peerMeta,
                          chainId: this.chainId,
                          accounts: this.accounts,
                        },
                      ],
                    });
                },
              },
              {
                key: "rejectSession",
                value: function (t) {
                  if (this._connected) throw new Error(X);
                  var e = t && t.message ? t.message : "Session Rejected",
                    n = this._formatResponse({
                      id: this.handshakeId,
                      error: { message: e },
                    });
                  this._sendResponse(n),
                    (this._connected = !1),
                    this._eventManager.trigger({
                      event: "disconnect",
                      params: [{ message: e }],
                    }),
                    this._removeStorageSession();
                },
              },
              {
                key: "updateSession",
                value: function (t) {
                  if (!this._connected) throw new Error(G);
                  (this.chainId = t.chainId),
                    (this.accounts = t.accounts),
                    (this.networkId = t.networkId || 0),
                    (this.rpcUrl = t.rpcUrl || "");
                  var e = {
                      approved: !0,
                      chainId: this.chainId,
                      networkId: this.networkId,
                      accounts: this.accounts,
                      rpcUrl: this.rpcUrl,
                    },
                    n = this._formatRequest({
                      method: "wc_sessionUpdate",
                      params: [e],
                    });
                  this._sendSessionRequest(n, "Session update rejected"),
                    this._eventManager.trigger({
                      event: "session_update",
                      params: [
                        { chainId: this.chainId, accounts: this.accounts },
                      ],
                    }),
                    this._manageStorageSession();
                },
              },
              {
                key: "killSession",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r, o;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e ? e.message : "Session Disconnected"),
                                  (r = {
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null,
                                  }),
                                  (o = this._formatRequest({
                                    method: "wc_sessionUpdate",
                                    params: [r],
                                  })),
                                  (t.next = 5),
                                  this._sendRequest(o)
                                );
                              case 5:
                                this._handleSessionDisconnect(n);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sendTransaction",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r, o;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(G);
                              case 2:
                                return (
                                  (n = F(e)),
                                  (r = this._formatRequest({
                                    method: "eth_sendTransaction",
                                    params: [n],
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(r)
                                );
                              case 6:
                                return (o = t.sent), t.abrupt("return", o);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signTransaction",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r, o;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(G);
                              case 2:
                                return (
                                  (n = F(e)),
                                  (r = this._formatRequest({
                                    method: "eth_signTransaction",
                                    params: [n],
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(r)
                                );
                              case 6:
                                return (o = t.sent), t.abrupt("return", o);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signMessage",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(G);
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "eth_sign",
                                    params: e,
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signPersonalMessage",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(G);
                              case 2:
                                return (
                                  (e = Z(e)),
                                  (n = this._formatRequest({
                                    method: "personal_sign",
                                    params: e,
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(n)
                                );
                              case 6:
                                return (r = t.sent), t.abrupt("return", r);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signTypedData",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(G);
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "eth_signTypedData",
                                    params: e,
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "updateChain",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "wallet_updateChain",
                                    params: [e],
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unsafeSend",
                value: function (t, e) {
                  var n = this;
                  return (
                    this._sendRequest(t, e),
                    this._eventManager.trigger({
                      event: "call_request_sent",
                      params: [{ request: t, options: e }],
                    }),
                    new Promise(function (e, r) {
                      n._subscribeToResponse(t.id, function (t, n) {
                        if (t) r(t);
                        else {
                          if (!n) throw new Error("Missing JSON RPC response");
                          e(n);
                        }
                      });
                    })
                  );
                },
              },
              {
                key: "sendCustomRequest",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e, n) {
                      var r, o;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(G);
                              case 2:
                                (t.t0 = e.method),
                                  (t.next =
                                    "eth_accounts" === t.t0
                                      ? 5
                                      : "eth_chainId" === t.t0
                                      ? 6
                                      : "eth_sendTransaction" === t.t0 ||
                                        "eth_signTransaction" === t.t0
                                      ? 7
                                      : "personal_sign" === t.t0
                                      ? 9
                                      : 11);
                                break;
                              case 5:
                                return t.abrupt("return", this.accounts);
                              case 6:
                                return t.abrupt("return", T(this.chainId));
                              case 7:
                                return (
                                  e.params && (e.params[0] = F(e.params[0])),
                                  t.abrupt("break", 12)
                                );
                              case 9:
                                return (
                                  e.params && (e.params = Z(e.params)),
                                  t.abrupt("break", 12)
                                );
                              case 11:
                                return t.abrupt("break", 12);
                              case 12:
                                return (
                                  (r = this._formatRequest(e)),
                                  (t.next = 15),
                                  this._sendCallRequest(r, n)
                                );
                              case 15:
                                return (o = t.sent), t.abrupt("return", o);
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "approveRequest",
                value: function (t) {
                  if (!N(t))
                    throw new Error(
                      'JSON-RPC success response must include "result" field'
                    );
                  var e = this._formatResponse(t);
                  this._sendResponse(e);
                },
              },
              {
                key: "rejectRequest",
                value: function (t) {
                  if (!q(t))
                    throw new Error(
                      'JSON-RPC error response must include "error" field'
                    );
                  var e = this._formatResponse(t);
                  this._sendResponse(e);
                },
              },
              {
                key: "transportClose",
                value: function () {
                  this._transport.close();
                },
              },
              {
                key: "_sendRequest",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e, n) {
                      var r, o, i, s, a;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (r = this._formatRequest(e)),
                                  (t.next = 3),
                                  this._encrypt(r)
                                );
                              case 3:
                                (o = t.sent),
                                  (i =
                                    "undefined" !==
                                    typeof (null === n || void 0 === n
                                      ? void 0
                                      : n.topic)
                                      ? n.topic
                                      : this.peerId),
                                  (s = JSON.stringify(o)),
                                  (a =
                                    "undefined" !==
                                    typeof (null === n || void 0 === n
                                      ? void 0
                                      : n.forcePushNotification)
                                      ? !n.forcePushNotification
                                      : D(r)),
                                  this._transport.send(s, i, a);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendResponse",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r, o;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._encrypt(e);
                              case 2:
                                (n = t.sent),
                                  (r = this.peerId),
                                  (o = JSON.stringify(n)),
                                  !0,
                                  this._transport.send(o, r, true);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendSessionRequest",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e, n, r) {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                this._sendRequest(e, r),
                                  this._subscribeToSessionResponse(e.id, n);
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n, r) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendCallRequest",
                value: function (t, e) {
                  return (
                    this._sendRequest(t, e),
                    this._eventManager.trigger({
                      event: "call_request_sent",
                      params: [{ request: t, options: e }],
                    }),
                    this._subscribeToCallResponse(t.id)
                  );
                },
              },
              {
                key: "_formatRequest",
                value: function (t) {
                  if ("undefined" === typeof t.method)
                    throw new Error(
                      'JSON RPC request must have valid "method" value'
                    );
                  return {
                    id: "undefined" === typeof t.id ? B() : t.id,
                    jsonrpc: "2.0",
                    method: t.method,
                    params: "undefined" === typeof t.params ? [] : t.params,
                  };
                },
              },
              {
                key: "_formatResponse",
                value: function (t) {
                  if ("undefined" === typeof t.id)
                    throw new Error(
                      'JSON RPC request must have valid "id" value'
                    );
                  var e = { id: t.id, jsonrpc: "2.0" };
                  if (q(t)) {
                    var n = (function (t) {
                      var e = t.message || "Failed or Rejected Request",
                        n = -32e3;
                      if (t && !t.code)
                        switch (e) {
                          case "Parse error":
                            n = -32700;
                            break;
                          case "Invalid request":
                            n = -32600;
                            break;
                          case "Method not found":
                            n = -32601;
                            break;
                          case "Invalid params":
                            n = -32602;
                            break;
                          case "Internal error":
                            n = -32603;
                            break;
                          default:
                            n = -32e3;
                        }
                      return { code: n, message: e };
                    })(t.error);
                    return Object.assign(
                      Object.assign(Object.assign({}, e), t),
                      { error: n }
                    );
                  }
                  if (N(t)) return Object.assign(Object.assign({}, e), t);
                  throw new Error(tt);
                },
              },
              {
                key: "_handleSessionDisconnect",
                value: function (t) {
                  var e = t || "Session Disconnected";
                  this._connected ||
                    (this._qrcodeModal && this._qrcodeModal.close(),
                    (0, b.removeLocal)(b.mobileLinkChoiceKey)),
                    this._connected && (this._connected = !1),
                    this._handshakeId && (this._handshakeId = 0),
                    this._handshakeTopic && (this._handshakeTopic = ""),
                    this._peerId && (this._peerId = ""),
                    this._eventManager.trigger({
                      event: "disconnect",
                      params: [{ message: e }],
                    }),
                    this._removeStorageSession(),
                    this.transportClose();
                },
              },
              {
                key: "_handleSessionResponse",
                value: function (t, e) {
                  e && e.approved
                    ? (this._connected
                        ? (e.chainId && (this.chainId = e.chainId),
                          e.accounts && (this.accounts = e.accounts),
                          this._eventManager.trigger({
                            event: "session_update",
                            params: [
                              {
                                chainId: this.chainId,
                                accounts: this.accounts,
                              },
                            ],
                          }))
                        : ((this._connected = !0),
                          e.chainId && (this.chainId = e.chainId),
                          e.accounts && (this.accounts = e.accounts),
                          e.peerId && !this.peerId && (this.peerId = e.peerId),
                          e.peerMeta &&
                            !this.peerMeta &&
                            (this.peerMeta = e.peerMeta),
                          this._eventManager.trigger({
                            event: "connect",
                            params: [
                              {
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts,
                              },
                            ],
                          })),
                      this._manageStorageSession())
                    : this._handleSessionDisconnect(t);
                },
              },
              {
                key: "_handleIncomingMessages",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  [this.clientId, this.handshakeTopic].includes(
                                    e.topic
                                  )
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return");
                              case 3:
                                (t.prev = 3),
                                  (n = JSON.parse(e.payload)),
                                  (t.next = 10);
                                break;
                              case 7:
                                return (
                                  (t.prev = 7),
                                  (t.t0 = t.catch(3)),
                                  t.abrupt("return")
                                );
                              case 10:
                                return (t.next = 12), this._decrypt(n);
                              case 12:
                                (r = t.sent) && this._eventManager.trigger(r);
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[3, 7]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_subscribeToSessionRequest",
                value: function () {
                  this._transport.subscribe(this.handshakeTopic);
                },
              },
              {
                key: "_subscribeToResponse",
                value: function (t, e) {
                  this.on("response:".concat(t), e);
                },
              },
              {
                key: "_subscribeToSessionResponse",
                value: function (t, e) {
                  var n = this;
                  this._subscribeToResponse(t, function (t, r) {
                    t
                      ? n._handleSessionResponse(t.message)
                      : r.result
                      ? n._handleSessionResponse(e, r.result)
                      : r.error && r.error.message
                      ? n._handleSessionResponse(r.error.message)
                      : n._handleSessionResponse(e);
                  });
                },
              },
              {
                key: "_subscribeToCallResponse",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, r) {
                    e._subscribeToResponse(t, function (t, e) {
                      t
                        ? r(t)
                        : e.result
                        ? n(e.result)
                        : e.error && e.error.message
                        ? r(new Error(e.error.message))
                        : r(new Error(tt));
                    });
                  });
                },
              },
              {
                key: "_subscribeToInternalEvents",
                value: function () {
                  var t = this;
                  this.on("display_uri", function () {
                    t._qrcodeModal &&
                      t._qrcodeModal.open(
                        t.uri,
                        function () {
                          t._eventManager.trigger({
                            event: "modal_closed",
                            params: [],
                          });
                        },
                        t._qrcodeModalOptions
                      );
                  }),
                    this.on("connect", function () {
                      t._qrcodeModal && t._qrcodeModal.close();
                    }),
                    this.on("call_request_sent", function (e, n) {
                      var r = n.params[0].request;
                      if (
                        (0, b.isMobile)() &&
                        t._signingMethods.includes(r.method)
                      ) {
                        var o = (0, b.getLocal)(b.mobileLinkChoiceKey);
                        o && (window.location.href = o.href);
                      }
                    }),
                    this.on("wc_sessionRequest", function (e, n) {
                      e &&
                        t._eventManager.trigger({
                          event: "error",
                          params: [
                            {
                              code: "SESSION_REQUEST_ERROR",
                              message: e.toString(),
                            },
                          ],
                        }),
                        (t.handshakeId = n.id),
                        (t.peerId = n.params[0].peerId),
                        (t.peerMeta = n.params[0].peerMeta);
                      var r = Object.assign(Object.assign({}, n), {
                        method: "session_request",
                      });
                      t._eventManager.trigger(r);
                    }),
                    this.on("wc_sessionUpdate", function (e, n) {
                      e && t._handleSessionResponse(e.message),
                        t._handleSessionResponse(
                          "Session disconnected",
                          n.params[0]
                        );
                    });
                },
              },
              {
                key: "_initTransport",
                value: function () {
                  var t = this;
                  this._transport.on("message", function (e) {
                    return t._handleIncomingMessages(e);
                  }),
                    this._transport.on("open", function () {
                      return t._eventManager.trigger({
                        event: "transport_open",
                        params: [],
                      });
                    }),
                    this._transport.on("close", function () {
                      return t._eventManager.trigger({
                        event: "transport_close",
                        params: [],
                      });
                    }),
                    this._transport.on("error", function () {
                      return t._eventManager.trigger({
                        event: "transport_error",
                        params: ["Websocket connection failed"],
                      });
                    }),
                    this._transport.open();
                },
              },
              {
                key: "_formatUri",
                value: function () {
                  var t = this.protocol,
                    e = this.handshakeTopic,
                    n = this.version,
                    r = encodeURIComponent(this.bridge),
                    o = this.key;
                  return ""
                    .concat(t, ":")
                    .concat(e, "@")
                    .concat(n, "?bridge=")
                    .concat(r, "&key=")
                    .concat(o);
                },
              },
              {
                key: "_parseUri",
                value: function (t) {
                  var e = (function (t) {
                    var e = t.indexOf(":"),
                      n = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                      r = t.substring(0, e),
                      o = (function (t) {
                        var e = t.split("@");
                        return {
                          handshakeTopic: e[0],
                          version: parseInt(e[1], 10),
                        };
                      })(t.substring(e + 1, n)),
                      i = (function (t) {
                        var e = W(t);
                        return { key: e.key || "", bridge: e.bridge || "" };
                      })("undefined" !== typeof n ? t.substr(n) : "");
                    return Object.assign(Object.assign({ protocol: r }, o), i);
                  })(t);
                  if (e.protocol === this.protocol) {
                    if (!e.handshakeTopic)
                      throw Error(
                        "Invalid or missing handshakeTopic parameter value"
                      );
                    var n = e.handshakeTopic;
                    if (!e.bridge)
                      throw Error(
                        "Invalid or missing bridge url parameter value"
                      );
                    var r = decodeURIComponent(e.bridge);
                    if (!e.key)
                      throw Error("Invalid or missing key parameter value");
                    return { handshakeTopic: n, bridge: r, key: e.key };
                  }
                  throw new Error("URI format is invalid");
                },
              },
              {
                key: "_generateKey",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      var e;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._cryptoLib) {
                                  t.next = 5;
                                  break;
                                }
                                return (
                                  (t.next = 3), this._cryptoLib.generateKey()
                                );
                              case 3:
                                return (e = t.sent), t.abrupt("return", e);
                              case 5:
                                return t.abrupt("return", null);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_encrypt",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((n = this._key), !this._cryptoLib || !n)) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  (t.next = 4), this._cryptoLib.encrypt(e, n)
                                );
                              case 4:
                                return (r = t.sent), t.abrupt("return", r);
                              case 6:
                                return t.abrupt("return", null);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_decrypt",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n, r;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((n = this._key), !this._cryptoLib || !n)) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  (t.next = 4), this._cryptoLib.decrypt(e, n)
                                );
                              case 4:
                                return (r = t.sent), t.abrupt("return", r);
                              case 6:
                                return t.abrupt("return", null);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getStorageSession",
                value: function () {
                  var t = null;
                  return (
                    this._sessionStorage &&
                      (t = this._sessionStorage.getSession()),
                    t
                  );
                },
              },
              {
                key: "_setStorageSession",
                value: function () {
                  this._sessionStorage &&
                    this._sessionStorage.setSession(this.session);
                },
              },
              {
                key: "_removeStorageSession",
                value: function () {
                  this._sessionStorage && this._sessionStorage.removeSession();
                },
              },
              {
                key: "_manageStorageSession",
                value: function () {
                  this._connected
                    ? this._setStorageSession()
                    : this._removeStorageSession();
                },
              },
              {
                key: "_registerPushServer",
                value: function (t) {
                  if (!t.url || "string" !== typeof t.url)
                    throw Error(
                      "Invalid or missing pushServerOpts.url parameter value"
                    );
                  if (!t.type || "string" !== typeof t.type)
                    throw Error(
                      "Invalid or missing pushServerOpts.type parameter value"
                    );
                  if (!t.token || "string" !== typeof t.token)
                    throw Error(
                      "Invalid or missing pushServerOpts.token parameter value"
                    );
                  var e = {
                    bridge: this.bridge,
                    topic: this.clientId,
                    type: t.type,
                    token: t.token,
                    peerName: "",
                    language: t.language || "",
                  };
                  this.on(
                    "connect",
                    (function () {
                      var n = (0, o.Z)(
                        u().mark(function n(r, o) {
                          var i, s;
                          return u().wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    if (!r) {
                                      n.next = 2;
                                      break;
                                    }
                                    throw r;
                                  case 2:
                                    return (
                                      t.peerMeta &&
                                        ((i = o.params[0].peerMeta.name),
                                        (e.peerName = i)),
                                      (n.prev = 3),
                                      (n.next = 6),
                                      fetch("".concat(t.url, "/new"), {
                                        method: "POST",
                                        headers: {
                                          Accept: "application/json",
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(e),
                                      })
                                    );
                                  case 6:
                                    return (s = n.sent), (n.next = 9), s.json();
                                  case 9:
                                    if (n.sent.success) {
                                      n.next = 12;
                                      break;
                                    }
                                    throw Error(
                                      "Failed to register in Push Server"
                                    );
                                  case 12:
                                    n.next = 17;
                                    break;
                                  case 14:
                                    throw (
                                      ((n.prev = 14),
                                      (n.t0 = n.catch(3)),
                                      Error(
                                        "Failed to register in Push Server"
                                      ))
                                    );
                                  case 17:
                                  case "end":
                                    return n.stop();
                                }
                            },
                            n,
                            null,
                            [[3, 14]]
                          );
                        })
                      );
                      return function (t, e) {
                        return n.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
            ]),
            t
          );
        })(),
        ut = at,
        ct = n(5503);
      function lt(t) {
        return ct.getBrowerCrypto().getRandomValues(new Uint8Array(t));
      }
      var ht = "AES-CBC",
        ft = "SHA-".concat(256),
        pt = "HMAC";
      "aes-".concat(256, "-cbc"), "sha".concat(256);
      function dt(t) {
        return t === ht
          ? { length: 256, name: ht }
          : { hash: { name: ft }, name: pt };
      }
      function mt(t) {
        return t === ht ? ["encrypt", "decrypt"] : ["sign", "verify"];
      }
      function gt(t) {
        return vt.apply(this, arguments);
      }
      function vt() {
        return (
          (vt = (0, o.Z)(
            u().mark(function t(e) {
              var n,
                r = arguments;
              return u().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = r.length > 1 && void 0 !== r[1] ? r[1] : ht),
                        t.abrupt(
                          "return",
                          ct
                            .getSubtleCrypto()
                            .importKey("raw", e, dt(n), !0, mt(n))
                        )
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          vt.apply(this, arguments)
        );
      }
      function yt() {
        return (yt = (0, o.Z)(
          u().mark(function t(e, n, r) {
            var o, i, s;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (o = ct.getSubtleCrypto()), (t.next = 3), gt(n, ht);
                  case 3:
                    return (
                      (i = t.sent),
                      (t.next = 6),
                      o.encrypt({ iv: e, name: ht }, i, r)
                    );
                  case 6:
                    return (s = t.sent), t.abrupt("return", new Uint8Array(s));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function _t() {
        return (_t = (0, o.Z)(
          u().mark(function t(e, n, r) {
            var o, i, s;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (o = ct.getSubtleCrypto()), (t.next = 3), gt(n, ht);
                  case 3:
                    return (
                      (i = t.sent),
                      (t.next = 6),
                      o.decrypt({ iv: e, name: ht }, i, r)
                    );
                  case 6:
                    return (s = t.sent), t.abrupt("return", new Uint8Array(s));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function wt(t, e) {
        return bt.apply(this, arguments);
      }
      function bt() {
        return (bt = (0, o.Z)(
          u().mark(function t(e, n) {
            var r, o, i;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (r = ct.getSubtleCrypto()), (t.next = 3), gt(e, pt);
                  case 3:
                    return (
                      (o = t.sent),
                      (t.next = 6),
                      r.sign({ length: 256, name: pt }, o, n)
                    );
                  case 6:
                    return (i = t.sent), t.abrupt("return", new Uint8Array(i));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function xt(t, e, n) {
        return (function (t, e, n) {
          return yt.apply(this, arguments);
        })(t, e, n);
      }
      function Mt(t, e, n) {
        return (function (t, e, n) {
          return _t.apply(this, arguments);
        })(t, e, n);
      }
      function kt(t, e) {
        return Et.apply(this, arguments);
      }
      function Et() {
        return (Et = (0, o.Z)(
          u().mark(function t(e, n) {
            var r;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), wt(e, n);
                  case 2:
                    return (r = t.sent), t.abrupt("return", r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Rt(t) {
        return St.apply(this, arguments);
      }
      function St() {
        return (St = (0, o.Z)(
          u().mark(function t(e) {
            var n, r;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = lt((e || 256) / 8)),
                      (r = C(S.arrayToBuffer(n))),
                      t.abrupt("return", r)
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function At(t, e) {
        return Ct.apply(this, arguments);
      }
      function Ct() {
        return (Ct = (0, o.Z)(
          u().mark(function t(e, n) {
            var r, o, i, s, a, c, l;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = S.hexToArray(e.data)),
                      (o = S.hexToArray(e.iv)),
                      (i = S.hexToArray(e.hmac)),
                      (s = S.arrayToHex(i, !1)),
                      (a = S.concatArrays(r, o)),
                      (t.next = 7),
                      kt(n, a)
                    );
                  case 7:
                    if (
                      ((c = t.sent),
                      (l = S.arrayToHex(c, !1)),
                      S.removeHexPrefix(s) !== S.removeHexPrefix(l))
                    ) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt("return", !0);
                  case 11:
                    return t.abrupt("return", !1);
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Tt(t, e, n) {
        return It.apply(this, arguments);
      }
      function It() {
        return (It = (0, o.Z)(
          u().mark(function t(e, n, r) {
            var o, i, s, a, c, l, h, f, p, d, m;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (((o = S.bufferToArray(A(n))), (t.t0 = r), t.t0)) {
                      t.next = 6;
                      break;
                    }
                    return (t.next = 5), Rt(128);
                  case 5:
                    t.t0 = t.sent;
                  case 6:
                    return (
                      (i = t.t0),
                      (s = S.bufferToArray(A(i))),
                      (a = S.arrayToHex(s, !1)),
                      (c = JSON.stringify(e)),
                      (l = S.utf8ToArray(c)),
                      (t.next = 13),
                      xt(s, o, l)
                    );
                  case 13:
                    return (
                      (h = t.sent),
                      (f = S.arrayToHex(h, !1)),
                      (p = S.concatArrays(h, s)),
                      (t.next = 18),
                      kt(o, p)
                    );
                  case 18:
                    return (
                      (d = t.sent),
                      (m = S.arrayToHex(d, !1)),
                      t.abrupt("return", { data: f, hmac: m, iv: a })
                    );
                  case 21:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Ot(t, e) {
        return Bt.apply(this, arguments);
      }
      function Bt() {
        return (Bt = (0, o.Z)(
          u().mark(function t(e, n) {
            var r, o, i, s, a, c;
            return u().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((r = S.bufferToArray(A(n)))) {
                        t.next = 3;
                        break;
                      }
                      throw new Error("Missing key: required for decryption");
                    case 3:
                      return (t.next = 5), At(e, r);
                    case 5:
                      if (t.sent) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 8:
                      return (
                        (o = S.hexToArray(e.data)),
                        (i = S.hexToArray(e.iv)),
                        (t.next = 12),
                        Mt(i, r, o)
                      );
                    case 12:
                      (s = t.sent),
                        (a = S.arrayToUtf8(s)),
                        (t.prev = 14),
                        (c = JSON.parse(a)),
                        (t.next = 21);
                      break;
                    case 18:
                      return (
                        (t.prev = 18),
                        (t.t0 = t.catch(14)),
                        t.abrupt("return", null)
                      );
                    case 21:
                      return t.abrupt("return", c);
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[14, 18]]
            );
          })
        )).apply(this, arguments);
      }
      var Pt = (function (t) {
          (0, h.Z)(n, t);
          var e = (0, f.Z)(n);
          function n(t, o) {
            return (
              (0, i.Z)(this, n),
              e.call(this, {
                cryptoLib: r,
                connectorOpts: t,
                pushServerOpts: o,
              })
            );
          }
          return (0, s.Z)(n);
        })(ut),
        Ut = n(2397),
        Lt = n.n(Ut),
        Nt = (function (t) {
          (0, h.Z)(n, t);
          var e = (0, f.Z)(n);
          function n(t) {
            var r;
            return (
              (0, i.Z)(this, n),
              ((r = e.call(this)).events = new (l())()),
              (r.accounts = []),
              (r.chainId = 1),
              (r.pending = !1),
              (r.bridge = "https://bridge.walletconnect.org"),
              (r.qrcode = !0),
              (r.qrcodeModalOptions = void 0),
              (r.opts = t),
              (r.chainId =
                (null === t || void 0 === t ? void 0 : t.chainId) || r.chainId),
              (r.wc = r.register(t)),
              r
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "connected",
                get: function () {
                  return "undefined" !== typeof this.wc && this.wc.connected;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return this.pending;
                },
              },
              {
                key: "connector",
                get: function () {
                  return (this.wc = this.register(this.opts)), this.wc;
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "open",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n = this;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.connected) {
                                  t.next = 3;
                                  break;
                                }
                                return this.onOpen(), t.abrupt("return");
                              case 3:
                                return t.abrupt(
                                  "return",
                                  new Promise(function (t, r) {
                                    n.on("error", function (t) {
                                      r(t);
                                    }),
                                      n.on("open", function () {
                                        t();
                                      }),
                                      n.create(e);
                                  })
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "close",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ("undefined" !== typeof this.wc) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                this.wc.connected && this.wc.killSession(),
                                  this.onClose();
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "send",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n = this;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((this.wc = this.register(this.opts)),
                                  this.connected)
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return (t.next = 4), this.open();
                              case 4:
                                this.sendPayload(e)
                                  .then(function (t) {
                                    return n.events.emit("payload", t);
                                  })
                                  .catch(function (t) {
                                    return n.events.emit(
                                      "payload",
                                      (0, d.formatJsonRpcError)(e.id, t.message)
                                    );
                                  });
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "register",
                value: function (t) {
                  if (this.wc) return this.wc;
                  (this.opts = t || this.opts),
                    (this.bridge = (
                      null === t || void 0 === t ? void 0 : t.connector
                    )
                      ? t.connector.bridge
                      : (null === t || void 0 === t ? void 0 : t.bridge) ||
                        "https://bridge.walletconnect.org"),
                    (this.qrcode =
                      "undefined" ===
                        typeof (null === t || void 0 === t
                          ? void 0
                          : t.qrcode) || !1 !== t.qrcode),
                    (this.chainId =
                      "undefined" !==
                      typeof (null === t || void 0 === t ? void 0 : t.chainId)
                        ? t.chainId
                        : this.chainId),
                    (this.qrcodeModalOptions =
                      null === t || void 0 === t
                        ? void 0
                        : t.qrcodeModalOptions);
                  var e = {
                    bridge: this.bridge,
                    qrcodeModal: this.qrcode ? Lt() : void 0,
                    qrcodeModalOptions: this.qrcodeModalOptions,
                    storageId:
                      null === t || void 0 === t ? void 0 : t.storageId,
                    signingMethods:
                      null === t || void 0 === t ? void 0 : t.signingMethods,
                    clientMeta:
                      null === t || void 0 === t ? void 0 : t.clientMeta,
                  };
                  if (
                    ((this.wc =
                      "undefined" !==
                      typeof (null === t || void 0 === t ? void 0 : t.connector)
                        ? t.connector
                        : new Pt(e)),
                    "undefined" === typeof this.wc)
                  )
                    throw new Error(
                      "Failed to register WalletConnect connector"
                    );
                  return (
                    this.wc.accounts.length &&
                      (this.accounts = this.wc.accounts),
                    this.wc.chainId && (this.chainId = this.wc.chainId),
                    this.registerConnectorEvents(),
                    this.wc
                  );
                },
              },
              {
                key: "onOpen",
                value: function (t) {
                  (this.pending = !1),
                    t && (this.wc = t),
                    this.events.emit("open");
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.pending = !1),
                    this.wc && (this.wc = void 0),
                    this.events.emit("close");
                },
              },
              {
                key: "onError",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "Failed or Rejected Request",
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : -32e3,
                    r = {
                      id: t.id,
                      jsonrpc: t.jsonrpc,
                      error: { code: n, message: e },
                    };
                  return this.events.emit("payload", r), r;
                },
              },
              {
                key: "create",
                value: function (t) {
                  var e = this;
                  (this.wc = this.register(this.opts)),
                    (this.chainId = t || this.chainId),
                    this.connected ||
                      this.pending ||
                      ((this.pending = !0),
                      this.registerConnectorEvents(),
                      this.wc
                        .createSession({ chainId: this.chainId })
                        .then(function () {
                          return e.events.emit("created");
                        })
                        .catch(function (t) {
                          return e.events.emit("error", t);
                        }));
                },
              },
              {
                key: "registerConnectorEvents",
                value: function () {
                  var t = this;
                  (this.wc = this.register(this.opts)),
                    this.wc.on("connect", function (e) {
                      var n, r;
                      e
                        ? t.events.emit("error", e)
                        : ((t.accounts =
                            (null === (n = t.wc) || void 0 === n
                              ? void 0
                              : n.accounts) || []),
                          (t.chainId =
                            (null === (r = t.wc) || void 0 === r
                              ? void 0
                              : r.chainId) || t.chainId),
                          t.onOpen());
                    }),
                    this.wc.on("disconnect", function (e) {
                      e ? t.events.emit("error", e) : t.onClose();
                    }),
                    this.wc.on("modal_closed", function () {
                      t.events.emit("error", new Error("User closed modal"));
                    }),
                    this.wc.on("session_update", function (e, n) {
                      var r = n.params[0],
                        o = r.accounts,
                        i = r.chainId;
                      (!t.accounts || (o && t.accounts !== o)) &&
                        ((t.accounts = o), t.events.emit("accountsChanged", o)),
                        (!t.chainId || (i && t.chainId !== i)) &&
                          ((t.chainId = i), t.events.emit("chainChanged", i));
                    });
                },
              },
              {
                key: "sendPayload",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      var n;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (this.wc = this.register(this.opts)),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  this.wc.unsafeSend(e)
                                );
                              case 4:
                                return (
                                  (n = t.sent),
                                  t.abrupt("return", this.sanitizeResponse(n))
                                );
                              case 8:
                                return (
                                  (t.prev = 8),
                                  (t.t0 = t.catch(1)),
                                  t.abrupt(
                                    "return",
                                    this.onError(e, t.t0.message)
                                  )
                                );
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 8]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sanitizeResponse",
                value: function (t) {
                  return "undefined" !== typeof t.error &&
                    "undefined" === typeof t.error.code
                    ? (0, d.formatJsonRpcError)(t.id, t.error.message)
                    : t;
                },
              },
            ]),
            n
          );
        })(n(3594).XR),
        qt = (function () {
          function t(e) {
            (0, i.Z)(this, t),
              (this.events = new (l())()),
              (this.rpc = {
                infuraId: null === e || void 0 === e ? void 0 : e.infuraId,
                custom: null === e || void 0 === e ? void 0 : e.rpc,
              }),
              (this.signer = new m(new Nt(e)));
            var n =
              this.signer.connection.chainId ||
              (null === e || void 0 === e ? void 0 : e.chainId) ||
              1;
            (this.http = this.setHttpProvider(n)),
              this.registerEventListeners();
          }
          return (
            (0, s.Z)(t, [
              {
                key: "connected",
                get: function () {
                  return this.signer.connection.connected;
                },
              },
              {
                key: "connector",
                get: function () {
                  return this.signer.connection.connector;
                },
              },
              {
                key: "accounts",
                get: function () {
                  return this.signer.connection.accounts;
                },
              },
              {
                key: "chainId",
                get: function () {
                  return this.signer.connection.chainId;
                },
              },
              {
                key: "rpcUrl",
                get: function () {
                  var t;
                  return (
                    (null === (t = this.http) || void 0 === t
                      ? void 0
                      : t.connection
                    ).url || ""
                  );
                },
              },
              {
                key: "request",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t(e) {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (t.t0 = e.method),
                                  (t.next =
                                    "eth_requestAccounts" === t.t0
                                      ? 3
                                      : "eth_accounts" === t.t0
                                      ? 6
                                      : "eth_chainId" === t.t0
                                      ? 7
                                      : 8);
                                break;
                              case 3:
                                return (t.next = 5), this.connect();
                              case 5:
                              case 6:
                                return t.abrupt(
                                  "return",
                                  this.signer.connection.accounts
                                );
                              case 7:
                                return t.abrupt(
                                  "return",
                                  this.signer.connection.chainId
                                );
                              case 8:
                                return t.abrupt("break", 9);
                              case 9:
                                if (!M.includes(e.method)) {
                                  t.next = 11;
                                  break;
                                }
                                return t.abrupt(
                                  "return",
                                  this.signer.request(e)
                                );
                              case 11:
                                if ("undefined" !== typeof this.http) {
                                  t.next = 13;
                                  break;
                                }
                                throw new Error(
                                  "Cannot request JSON-RPC method (".concat(
                                    e.method,
                                    ") without provided rpc url"
                                  )
                                );
                              case 13:
                                return t.abrupt("return", this.http.request(e));
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sendAsync",
                value: function (t, e) {
                  this.request(t)
                    .then(function (t) {
                      return e(null, t);
                    })
                    .catch(function (t) {
                      return e(t, void 0);
                    });
                },
              },
              {
                key: "enable",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      var e;
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.request({
                                    method: "eth_requestAccounts",
                                  })
                                );
                              case 2:
                                return (e = t.sent), t.abrupt("return", e);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "connect",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.signer.connection.connected) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.signer.connect();
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "disconnect",
                value: (function () {
                  var t = (0, o.Z)(
                    u().mark(function t() {
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.signer.connection.connected) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.signer.disconnect();
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "isWalletConnect",
                get: function () {
                  return !0;
                },
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var t = this;
                  this.signer.connection.on("accountsChanged", function (e) {
                    t.events.emit("accountsChanged", e);
                  }),
                    this.signer.connection.on("chainChanged", function (e) {
                      (t.http = t.setHttpProvider(e)),
                        t.events.emit("chainChanged", e);
                    }),
                    this.signer.on("disconnect", function () {
                      t.events.emit("disconnect");
                    });
                },
              },
              {
                key: "setHttpProvider",
                value: function (t) {
                  var e = U(t, this.rpc);
                  if ("undefined" !== typeof e) return new m(new w(e));
                },
              },
            ]),
            t
          );
        })(),
        jt = qt;
    },
    1379: function (t, e, n) {
      "use strict";
      n.d(e, {
        IJsonRpcProvider: function () {
          return o.x0;
        },
      });
      var r = n(2028);
      n.o(r, "IJsonRpcProvider") &&
        n.d(e, {
          IJsonRpcProvider: function () {
            return r.IJsonRpcProvider;
          },
        }),
        n.o(r, "isHttpUrl") &&
          n.d(e, {
            isHttpUrl: function () {
              return r.isHttpUrl;
            },
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return r.isJsonRpcError;
            },
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return r.isJsonRpcResponse;
            },
          });
      var o = n(3594),
        i = n(8488);
      n.o(i, "isHttpUrl") &&
        n.d(e, {
          isHttpUrl: function () {
            return i.isHttpUrl;
          },
        }),
        n.o(i, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return i.isJsonRpcError;
            },
          }),
        n.o(i, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return i.isJsonRpcResponse;
            },
          });
    },
    2028: function () {},
    3594: function (t, e, n) {
      "use strict";
      n.d(e, {
        XR: function () {
          return u;
        },
        x0: function () {
          return c;
        },
      });
      var r = n(3144),
        o = n(5671),
        i = n(136),
        s = n(8505),
        a = (0, r.Z)(function t() {
          (0, o.Z)(this, t);
        }),
        u = (function (t) {
          (0, i.Z)(n, t);
          var e = (0, s.Z)(n);
          function n(t) {
            return (0, o.Z)(this, n), e.call(this);
          }
          return (0, r.Z)(n);
        })(a),
        c = (function (t) {
          (0, i.Z)(n, t);
          var e = (0, s.Z)(n);
          function n(t) {
            return (0, o.Z)(this, n), e.call(this);
          }
          return (0, r.Z)(n);
        })(
          (function (t) {
            (0, i.Z)(n, t);
            var e = (0, s.Z)(n);
            function n() {
              return (0, o.Z)(this, n), e.call(this);
            }
            return (0, r.Z)(n);
          })(a)
        );
    },
    8488: function () {},
    2182: function (t, e, n) {
      "use strict";
      n.d(e, {
        CA: function () {
          return s;
        },
        O4: function () {
          return i;
        },
        dQ: function () {
          return a;
        },
        xK: function () {
          return u;
        },
      });
      var r,
        o = n(4942),
        i = "INTERNAL_ERROR",
        s = "SERVER_ERROR",
        a = [-32700, -32600, -32601, -32602, -32603],
        u =
          ((r = {}),
          (0, o.Z)(r, "PARSE_ERROR", { code: -32700, message: "Parse error" }),
          (0, o.Z)(r, "INVALID_REQUEST", {
            code: -32600,
            message: "Invalid Request",
          }),
          (0, o.Z)(r, "METHOD_NOT_FOUND", {
            code: -32601,
            message: "Method not found",
          }),
          (0, o.Z)(r, "INVALID_PARAMS", {
            code: -32602,
            message: "Invalid params",
          }),
          (0, o.Z)(r, i, { code: -32603, message: "Internal error" }),
          (0, o.Z)(r, s, { code: -32e3, message: "Server error" }),
          r);
    },
    6362: function (t, e, n) {
      "use strict";
      var r = n(5503);
      n.o(r, "IJsonRpcProvider") &&
        n.d(e, {
          IJsonRpcProvider: function () {
            return r.IJsonRpcProvider;
          },
        }),
        n.o(r, "formatJsonRpcError") &&
          n.d(e, {
            formatJsonRpcError: function () {
              return r.formatJsonRpcError;
            },
          }),
        n.o(r, "formatJsonRpcRequest") &&
          n.d(e, {
            formatJsonRpcRequest: function () {
              return r.formatJsonRpcRequest;
            },
          }),
        n.o(r, "isHttpUrl") &&
          n.d(e, {
            isHttpUrl: function () {
              return r.isHttpUrl;
            },
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return r.isJsonRpcError;
            },
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return r.isJsonRpcResponse;
            },
          }),
        n.o(r, "payloadId") &&
          n.d(e, {
            payloadId: function () {
              return r.payloadId;
            },
          });
    },
    1140: function (t, e, n) {
      "use strict";
      n.d(e, {
        CX: function () {
          return a;
        },
        L2: function () {
          return s;
        },
        by: function () {
          return i;
        },
        i5: function () {
          return o;
        },
      });
      var r = n(2182);
      function o(t) {
        return r.dQ.includes(t);
      }
      function i(t) {
        return Object.keys(r.xK).includes(t) ? r.xK[t] : r.xK[r.O4];
      }
      function s(t) {
        var e = Object.values(r.xK).find(function (e) {
          return e.code === t;
        });
        return e || r.xK[r.O4];
      }
      function a(t, e, n) {
        return t.message.includes("getaddrinfo ENOTFOUND") ||
          t.message.includes("connect ECONNREFUSED")
          ? new Error("Unavailable ".concat(n, " RPC url at ").concat(e))
          : t;
      }
    },
    4352: function (t, e, n) {
      "use strict";
      n.d(e, {
        RI: function () {
          return a;
        },
        o0: function () {
          return i;
        },
        sT: function () {
          return s;
        },
      });
      var r = n(1140),
        o = n(2182);
      function i() {
        return (
          Date.now() * Math.pow(10, 3) +
          Math.floor(Math.random() * Math.pow(10, 3))
        );
      }
      function s(t, e, n) {
        return { id: n || i(), jsonrpc: "2.0", method: t, params: e };
      }
      function a(t, e) {
        return { id: t, jsonrpc: "2.0", error: u(e) };
      }
      function u(t) {
        return "undefined" === typeof t
          ? (0, r.by)(o.O4)
          : ("string" === typeof t &&
              (t = Object.assign(Object.assign({}, (0, r.by)(o.CA)), {
                message: t,
              })),
            (0, r.i5)(t.code) && (t = (0, r.L2)(t.code)),
            t);
      }
    },
    1567: function (t, e, n) {
      "use strict";
      n.d(e, {
        formatJsonRpcError: function () {
          return i.RI;
        },
        formatJsonRpcRequest: function () {
          return i.sT;
        },
        isHttpUrl: function () {
          return a.jK;
        },
        isJsonRpcError: function () {
          return u.jg;
        },
        isJsonRpcResponse: function () {
          return u.u;
        },
        parseConnectionError: function () {
          return r.CX;
        },
        payloadId: function () {
          return i.o0;
        },
      });
      n(2182);
      var r = n(1140),
        o = n(6362);
      n.o(o, "IJsonRpcProvider") &&
        n.d(e, {
          IJsonRpcProvider: function () {
            return o.IJsonRpcProvider;
          },
        }),
        n.o(o, "formatJsonRpcError") &&
          n.d(e, {
            formatJsonRpcError: function () {
              return o.formatJsonRpcError;
            },
          }),
        n.o(o, "formatJsonRpcRequest") &&
          n.d(e, {
            formatJsonRpcRequest: function () {
              return o.formatJsonRpcRequest;
            },
          }),
        n.o(o, "isHttpUrl") &&
          n.d(e, {
            isHttpUrl: function () {
              return o.isHttpUrl;
            },
          }),
        n.o(o, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return o.isJsonRpcError;
            },
          }),
        n.o(o, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return o.isJsonRpcResponse;
            },
          }),
        n.o(o, "payloadId") &&
          n.d(e, {
            payloadId: function () {
              return o.payloadId;
            },
          });
      var i = n(4352),
        s = n(9519);
      n.o(s, "IJsonRpcProvider") &&
        n.d(e, {
          IJsonRpcProvider: function () {
            return s.IJsonRpcProvider;
          },
        }),
        n.o(s, "isHttpUrl") &&
          n.d(e, {
            isHttpUrl: function () {
              return s.isHttpUrl;
            },
          }),
        n.o(s, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return s.isJsonRpcError;
            },
          }),
        n.o(s, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return s.isJsonRpcResponse;
            },
          });
      var a = n(948),
        u = n(6063);
    },
    9519: function (t, e, n) {
      "use strict";
      n.d(e, {
        IJsonRpcProvider: function () {
          return r.IJsonRpcProvider;
        },
      });
      var r = n(1379);
      n.o(r, "isHttpUrl") &&
        n.d(e, {
          isHttpUrl: function () {
            return r.isHttpUrl;
          },
        }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, {
            isJsonRpcError: function () {
              return r.isJsonRpcError;
            },
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, {
            isJsonRpcResponse: function () {
              return r.isJsonRpcResponse;
            },
          });
    },
    948: function (t, e, n) {
      "use strict";
      n.d(e, {
        jK: function () {
          return o;
        },
      });
      function r(t, e) {
        var n = (function (t) {
          var e = t.match(new RegExp(/^\w+:/, "gi"));
          if (e && e.length) return e[0];
        })(t);
        return "undefined" !== typeof n && new RegExp(e).test(n);
      }
      function o(t) {
        return r(t, "^https?:");
      }
    },
    6063: function (t, e, n) {
      "use strict";
      function r(t) {
        return "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc;
      }
      function o(t) {
        return (
          r(t) &&
          ((function (t) {
            return "result" in t;
          })(t) ||
            i(t))
        );
      }
      function i(t) {
        return "error" in t;
      }
      n.d(e, {
        jg: function () {
          return i;
        },
        u: function () {
          return o;
        },
      });
    },
    2397: function (t, e, n) {
      function r(t) {
        return t && "object" === typeof t && "default" in t ? t.default : t;
      }
      var o = n(9795),
        i = r(n(6316)),
        s = r(n(2229)),
        a = n(7812);
      "undefined" !== typeof Symbol &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" !== typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      var u = "walletconnect-wrapper",
        c = "walletconnect-style-sheet",
        l = "walletconnect-qrcode-modal",
        h = "walletconnect-qrcode-text";
      function f(t) {
        return a.createElement(
          "div",
          { className: "walletconnect-modal__header" },
          a.createElement("img", {
            src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
            className: "walletconnect-modal__headerLogo",
          }),
          a.createElement("p", null, "WalletConnect"),
          a.createElement(
            "div",
            {
              className: "walletconnect-modal__close__wrapper",
              onClick: t.onClose,
            },
            a.createElement(
              "div",
              {
                id: "walletconnect-qrcode-close",
                className: "walletconnect-modal__close__icon",
              },
              a.createElement("div", {
                className: "walletconnect-modal__close__line1",
              }),
              a.createElement("div", {
                className: "walletconnect-modal__close__line2",
              })
            )
          )
        );
      }
      function p(t) {
        return a.createElement(
          "a",
          {
            className: "walletconnect-connect__button",
            href: t.href,
            id: "walletconnect-connect-button-" + t.name,
            onClick: t.onClick,
            rel: "noopener noreferrer",
            style: { backgroundColor: t.color },
            target: "_blank",
          },
          t.name
        );
      }
      function d(t) {
        var e = t.color,
          n = t.href,
          r = t.name,
          o = t.logo,
          i = t.onClick;
        return a.createElement(
          "a",
          {
            className: "walletconnect-modal__base__row",
            href: n,
            onClick: i,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          a.createElement(
            "h3",
            { className: "walletconnect-modal__base__row__h3" },
            r
          ),
          a.createElement(
            "div",
            { className: "walletconnect-modal__base__row__right" },
            a.createElement("div", {
              className: "walletconnect-modal__base__row__right__app-icon",
              style: {
                background: "url('" + o + "') " + e,
                backgroundSize: "100%",
              },
            }),
            a.createElement("img", {
              src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
              className: "walletconnect-modal__base__row__right__caret",
            })
          )
        );
      }
      function m(t) {
        var e = t.color,
          n = t.href,
          r = t.name,
          o = t.logo,
          i = t.onClick,
          s =
            window.innerWidth < 768
              ? (r.length > 8 ? 2.5 : 2.7) + "vw"
              : "inherit";
        return a.createElement(
          "a",
          {
            className: "walletconnect-connect__button__icon_anchor",
            href: n,
            onClick: i,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          a.createElement("div", {
            className: "walletconnect-connect__button__icon",
            style: {
              background: "url('" + o + "') " + e,
              backgroundSize: "100%",
            },
          }),
          a.createElement(
            "div",
            {
              style: { fontSize: s },
              className: "walletconnect-connect__button__text",
            },
            r
          )
        );
      }
      function g(t) {
        var e = o.isAndroid(),
          n = a.useState(""),
          r = n[0],
          i = n[1],
          s = a.useState(""),
          u = s[0],
          c = s[1],
          l = a.useState(1),
          f = l[0],
          g = l[1],
          v = u
            ? t.links.filter(function (t) {
                return t.name.toLowerCase().includes(u.toLowerCase());
              })
            : t.links,
          y = t.errorMessage,
          _ = u || v.length > 5,
          w = Math.ceil(v.length / 12),
          b = [12 * (f - 1) + 1, 12 * f],
          x = v.length
            ? v.filter(function (t, e) {
                return e + 1 >= b[0] && e + 1 <= b[1];
              })
            : [],
          M = !(e || !(w > 1)),
          k = void 0;
        return a.createElement(
          "div",
          null,
          a.createElement(
            "p",
            { id: h, className: "walletconnect-qrcode__text" },
            e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet
          ),
          !e &&
            a.createElement("input", {
              className: "walletconnect-search__input",
              placeholder: "Search",
              value: r,
              onChange: function (t) {
                i(t.target.value),
                  clearTimeout(k),
                  t.target.value
                    ? (k = setTimeout(function () {
                        c(t.target.value), g(1);
                      }, 1e3))
                    : (i(""), c(""), g(1));
              },
            }),
          a.createElement(
            "div",
            {
              className:
                "walletconnect-connect__buttons__wrapper" +
                (e ? "__android" : _ && v.length ? "__wrap" : ""),
            },
            e
              ? a.createElement(p, {
                  name: t.text.connect,
                  color: "rgb(64, 153, 255)",
                  href: t.uri,
                  onClick: a.useCallback(function () {
                    o.saveMobileLinkInfo({ name: "Unknown", href: t.uri });
                  }, []),
                })
              : x.length
              ? x.map(function (e) {
                  var n = e.color,
                    r = e.name,
                    i = e.shortName,
                    s = e.logo,
                    u = o.formatIOSMobile(t.uri, e),
                    c = a.useCallback(
                      function () {
                        o.saveMobileLinkInfo({ name: r, href: u });
                      },
                      [x]
                    );
                  return _
                    ? a.createElement(m, {
                        color: n,
                        href: u,
                        name: i || r,
                        logo: s,
                        onClick: c,
                      })
                    : a.createElement(d, {
                        color: n,
                        href: u,
                        name: r,
                        logo: s,
                        onClick: c,
                      });
                })
              : a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    "p",
                    null,
                    y.length
                      ? t.errorMessage
                      : t.links.length && !v.length
                      ? t.text.no_wallets_found
                      : t.text.loading
                  )
                )
          ),
          M &&
            a.createElement(
              "div",
              { className: "walletconnect-modal__footer" },
              Array(w)
                .fill(0)
                .map(function (t, e) {
                  var n = e + 1,
                    r = f === n;
                  return a.createElement(
                    "a",
                    {
                      style: {
                        margin: "auto 10px",
                        fontWeight: r ? "bold" : "normal",
                      },
                      onClick: function () {
                        return g(n);
                      },
                    },
                    n
                  );
                })
            )
        );
      }
      function v(t) {
        var e = !!t.message.trim();
        return a.createElement(
          "div",
          {
            className:
              "walletconnect-qrcode__notification" +
              (e ? " notification__show" : ""),
          },
          t.message
        );
      }
      function y(t) {
        var e = a.useState(""),
          n = e[0],
          r = e[1],
          o = a.useState(""),
          u = o[0],
          c = o[1];
        a.useEffect(function () {
          try {
            return Promise.resolve(
              (function (t) {
                try {
                  var e = "";
                  return Promise.resolve(
                    i.toString(t, { margin: 0, type: "svg" })
                  ).then(function (t) {
                    return (
                      "string" === typeof t &&
                        (e = t.replace(
                          "<svg",
                          '<svg class="walletconnect-qrcode__image"'
                        )),
                      e
                    );
                  });
                } catch (n) {
                  return Promise.reject(n);
                }
              })(t.uri)
            ).then(function (t) {
              c(t);
            });
          } catch (e) {
            Promise.reject(e);
          }
        }, []);
        return a.createElement(
          "div",
          null,
          a.createElement(
            "p",
            { id: h, className: "walletconnect-qrcode__text" },
            t.text.scan_qrcode_with_wallet
          ),
          a.createElement("div", { dangerouslySetInnerHTML: { __html: u } }),
          a.createElement(
            "div",
            { className: "walletconnect-modal__footer" },
            a.createElement(
              "a",
              {
                onClick: function () {
                  s(t.uri)
                    ? (r(t.text.copied_to_clipboard),
                      setInterval(function () {
                        return r("");
                      }, 1200))
                    : (r("Error"),
                      setInterval(function () {
                        return r("");
                      }, 1200));
                },
              },
              t.text.copy_to_clipboard
            )
          ),
          a.createElement(v, { message: n })
        );
      }
      function _(t) {
        var e = o.isAndroid(),
          n = o.isMobile(),
          r = n
            ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks
              ? t.qrcodeModalOptions.mobileLinks
              : void 0
            : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks
            ? t.qrcodeModalOptions.desktopLinks
            : void 0,
          i = a.useState(!1),
          s = i[0],
          u = i[1],
          c = a.useState(!1),
          h = c[0],
          p = c[1],
          d = a.useState(!n),
          m = d[0],
          v = d[1],
          _ = {
            mobile: n,
            text: t.text,
            uri: t.uri,
            qrcodeModalOptions: t.qrcodeModalOptions,
          },
          w = a.useState(""),
          b = w[0],
          x = w[1],
          M = a.useState(!1),
          k = M[0],
          E = M[1],
          R = a.useState([]),
          S = R[0],
          A = R[1],
          C = a.useState(""),
          T = C[0],
          I = C[1],
          O = function () {
            h ||
              s ||
              (r && !r.length) ||
              S.length > 0 ||
              a.useEffect(function () {
                !(function () {
                  try {
                    if (e) return Promise.resolve();
                    u(!0);
                    var i = (function (t, e) {
                      try {
                        var n = t();
                      } catch (r) {
                        return e(r);
                      }
                      return n && n.then ? n.then(void 0, e) : n;
                    })(
                      function () {
                        var e =
                          t.qrcodeModalOptions &&
                          t.qrcodeModalOptions.registryUrl
                            ? t.qrcodeModalOptions.registryUrl
                            : o.getWalletRegistryUrl();
                        return Promise.resolve(fetch(e)).then(function (e) {
                          return Promise.resolve(e.json()).then(function (e) {
                            var i = e.listings,
                              s = n ? "mobile" : "desktop",
                              a = o.getMobileLinkRegistry(
                                o.formatMobileRegistry(i, s),
                                r
                              );
                            u(!1),
                              p(!0),
                              I(a.length ? "" : t.text.no_supported_wallets),
                              A(a);
                            var c = 1 === a.length;
                            c && (x(o.formatIOSMobile(t.uri, a[0])), v(!0)),
                              E(c);
                          });
                        });
                      },
                      function (e) {
                        u(!1),
                          p(!0),
                          I(t.text.something_went_wrong),
                          console.error(e);
                      }
                    );
                    Promise.resolve(
                      i && i.then ? i.then(function () {}) : void 0
                    );
                  } catch (s) {
                    return Promise.reject(s);
                  }
                })();
              });
          };
        O();
        var B = n ? m : !m;
        return a.createElement(
          "div",
          { id: l, className: "walletconnect-qrcode__base animated fadeIn" },
          a.createElement(
            "div",
            { className: "walletconnect-modal__base" },
            a.createElement(f, { onClose: t.onClose }),
            k && m
              ? a.createElement(
                  "div",
                  { className: "walletconnect-modal__single_wallet" },
                  a.createElement(
                    "a",
                    {
                      onClick: function () {
                        return o.saveMobileLinkInfo({
                          name: S[0].name,
                          href: b,
                        });
                      },
                      href: b,
                      rel: "noopener noreferrer",
                      target: "_blank",
                    },
                    t.text.connect_with + " " + (k ? S[0].name : "") + " \u203a"
                  )
                )
              : e || s || (!s && S.length)
              ? a.createElement(
                  "div",
                  {
                    className:
                      "walletconnect-modal__mobile__toggle" +
                      (B ? " right__selected" : ""),
                  },
                  a.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector",
                  }),
                  n
                    ? a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                          "a",
                          {
                            onClick: function () {
                              return v(!1), O();
                            },
                          },
                          t.text.mobile
                        ),
                        a.createElement(
                          "a",
                          {
                            onClick: function () {
                              return v(!0);
                            },
                          },
                          t.text.qrcode
                        )
                      )
                    : a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                          "a",
                          {
                            onClick: function () {
                              return v(!0);
                            },
                          },
                          t.text.qrcode
                        ),
                        a.createElement(
                          "a",
                          {
                            onClick: function () {
                              return v(!1), O();
                            },
                          },
                          t.text.desktop
                        )
                      )
                )
              : null,
            a.createElement(
              "div",
              null,
              m || (!e && !s && !S.length)
                ? a.createElement(y, Object.assign({}, _))
                : a.createElement(
                    g,
                    Object.assign({}, _, { links: S, errorMessage: T })
                  )
            )
          )
        );
      }
      var w = {
        de: {
          choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
          connect_mobile_wallet: "Verbinde mit Mobile Wallet",
          scan_qrcode_with_wallet:
            "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
          connect: "Verbinden",
          qrcode: "QR-Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "In die Zwischenablage kopieren",
          copied_to_clipboard: "In die Zwischenablage kopiert!",
          connect_with: "Verbinden mit Hilfe von",
          loading: "Laden...",
          something_went_wrong: "Etwas ist schief gelaufen",
          no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
          no_wallets_found: "keine Wallet gefunden",
        },
        en: {
          choose_preferred_wallet: "Choose your preferred wallet",
          connect_mobile_wallet: "Connect to Mobile Wallet",
          scan_qrcode_with_wallet:
            "Scan QR code with a WalletConnect-compatible wallet",
          connect: "Connect",
          qrcode: "QR Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "Copy to clipboard",
          copied_to_clipboard: "Copied to clipboard!",
          connect_with: "Connect with",
          loading: "Loading...",
          something_went_wrong: "Something went wrong",
          no_supported_wallets: "There are no supported wallets yet",
          no_wallets_found: "No wallets found",
        },
        es: {
          choose_preferred_wallet: "Elige tu billetera preferida",
          connect_mobile_wallet: "Conectar a billetera m\xf3vil",
          scan_qrcode_with_wallet:
            "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
          connect: "Conectar",
          qrcode: "C\xf3digo QR",
          mobile: "M\xf3vil",
          desktop: "Desktop",
          copy_to_clipboard: "Copiar",
          copied_to_clipboard: "Copiado!",
          connect_with: "Conectar mediante",
          loading: "Cargando...",
          something_went_wrong: "Algo sali\xf3 mal",
          no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
          no_wallets_found: "No se encontraron billeteras",
        },
        fr: {
          choose_preferred_wallet:
            "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
          connect_mobile_wallet: "Se connecter au portefeuille mobile",
          scan_qrcode_with_wallet:
            "Scannez le QR code avec un portefeuille compatible WalletConnect",
          connect: "Se connecter",
          qrcode: "QR Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "Copier",
          copied_to_clipboard: "Copi\xe9!",
          connect_with: "Connectez-vous \xe0 l'aide de",
          loading: "Chargement...",
          something_went_wrong: "Quelque chose a mal tourn\xe9",
          no_supported_wallets:
            "Il n'y a pas encore de portefeuilles pris en charge",
          no_wallets_found: "Aucun portefeuille trouv\xe9",
        },
        ko: {
          choose_preferred_wallet:
            "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
          connect_mobile_wallet:
            "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
          scan_qrcode_with_wallet:
            "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
          connect: "\uc5f0\uacb0",
          qrcode: "QR \ucf54\ub4dc",
          mobile: "\ubaa8\ubc14\uc77c",
          desktop: "\ub370\uc2a4\ud06c\ud0d1",
          copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
          copied_to_clipboard:
            "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
          connect_with: "\uc640 \uc5f0\uacb0\ud558\ub2e4",
          loading: "\ub85c\ub4dc \uc911...",
          something_went_wrong:
            "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
          no_supported_wallets:
            "\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
          no_wallets_found:
            "\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",
        },
        pt: {
          choose_preferred_wallet: "Escolha sua carteira preferida",
          connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
          scan_qrcode_with_wallet:
            "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
          connect: "Conectar",
          qrcode: "C\xf3digo QR",
          mobile: "M\xf3vel",
          desktop: "Desktop",
          copy_to_clipboard: "Copiar",
          copied_to_clipboard: "Copiado!",
          connect_with: "Ligar por meio de",
          loading: "Carregamento...",
          something_went_wrong: "Algo correu mal",
          no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
          no_wallets_found: "Nenhuma carteira encontrada",
        },
        zh: {
          choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
          connect_mobile_wallet:
            "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
          scan_qrcode_with_wallet:
            "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
          connect: "\u8fde\u63a5",
          qrcode: "\u4e8c\u7ef4\u7801",
          mobile: "\u79fb\u52a8",
          desktop: "\u684c\u9762",
          copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
          copied_to_clipboard:
            "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
          connect_with: "\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",
          loading: "\u6b63\u5728\u52a0\u8f7d...",
          something_went_wrong: "\u51fa\u4e86\u95ee\u9898",
          no_supported_wallets:
            "\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",
          no_wallets_found: "\u6ca1\u6709\u627e\u5230\u94b1\u5305",
        },
        fa: {
          choose_preferred_wallet:
            "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
          connect_mobile_wallet:
            "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
          scan_qrcode_with_wallet:
            "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
          connect: "\u0627\u062a\u0635\u0627\u0644",
          qrcode: "\u06a9\u062f QR",
          mobile: "\u0633\u06cc\u0627\u0631",
          desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e",
          copy_to_clipboard:
            "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
          copied_to_clipboard:
            "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
          connect_with: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",
          loading: "...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",
          something_went_wrong:
            "\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",
          no_supported_wallets:
            "\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",
          no_wallets_found:
            "\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f",
        },
      };
      function b() {
        var t = o.getDocumentOrThrow(),
          e = t.getElementById(l);
        e &&
          ((e.className = e.className.replace("fadeIn", "fadeOut")),
          setTimeout(function () {
            var e = t.getElementById(u);
            e && t.body.removeChild(e);
          }, 300));
      }
      function x(t) {
        return function () {
          b(), t && t();
        };
      }
      function M() {
        var t = o.getNavigatorOrThrow().language.split("-")[0] || "en";
        return w[t] || w.en;
      }
      function k(t, e, n) {
        !(function () {
          var t = o.getDocumentOrThrow(),
            e = t.getElementById(c);
          e && t.head.removeChild(e);
          var n = t.createElement("style");
          n.setAttribute("id", c),
            (n.innerText =
              ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n'),
            t.head.appendChild(n);
        })();
        var r = (function () {
          var t = o.getDocumentOrThrow(),
            e = t.createElement("div");
          return e.setAttribute("id", u), t.body.appendChild(e), e;
        })();
        a.render(
          a.createElement(_, {
            text: M(),
            uri: t,
            onClose: x(e),
            qrcodeModalOptions: n,
          }),
          r
        );
      }
      var E = function () {
        return (
          "undefined" !== typeof process &&
          "undefined" !== typeof process.versions &&
          "undefined" !== typeof process.versions.node
        );
      };
      var R = {
        open: function (t, e, n) {
          console.log(t),
            E()
              ? (function (t) {
                  i.toString(t, { type: "terminal" }).then(console.log);
                })(t)
              : k(t, e, n);
        },
        close: function () {
          E() || b();
        },
      };
      t.exports = R;
    },
    6090: function (t, e, n) {
      "use strict";
      function r(t) {
        if ("string" !== typeof t)
          throw new Error(
            "Cannot safe json parse value of type ".concat(typeof t)
          );
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function o(t) {
        return "string" === typeof t ? t : JSON.stringify(t);
      }
      n.d(e, {
        D: function () {
          return r;
        },
        u: function () {
          return o;
        },
      });
    },
    7610: function (t) {
      "use strict";
      t.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    8058: function (t, e, n) {
      !(function (t, e) {
        "use strict";
        function r(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function o(t, e) {
          t.super_ = e;
          var n = function () {};
          (n.prototype = e.prototype),
            (t.prototype = new n()),
            (t.prototype.constructor = t);
        }
        function i(t, e, n) {
          if (i.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((n = e), (e = 10)),
              this._init(t || 0, e || 10, n || "be"));
        }
        var s;
        "object" === typeof t ? (t.exports = i) : (e.BN = i),
          (i.BN = i),
          (i.wordSize = 26);
        try {
          s = n(6563).Buffer;
        } catch (k) {}
        function a(t, e, n) {
          for (var r = 0, o = Math.min(t.length, n), i = e; i < o; i++) {
            var s = t.charCodeAt(i) - 48;
            (r <<= 4),
              (r |=
                s >= 49 && s <= 54
                  ? s - 49 + 10
                  : s >= 17 && s <= 22
                  ? s - 17 + 10
                  : 15 & s);
          }
          return r;
        }
        function u(t, e, n, r) {
          for (var o = 0, i = Math.min(t.length, n), s = e; s < i; s++) {
            var a = t.charCodeAt(s) - 48;
            (o *= r), (o += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a);
          }
          return o;
        }
        (i.isBN = function (t) {
          return (
            t instanceof i ||
            (null !== t &&
              "object" === typeof t &&
              t.constructor.wordSize === i.wordSize &&
              Array.isArray(t.words))
          );
        }),
          (i.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (i.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (i.prototype._init = function (t, e, n) {
            if ("number" === typeof t) return this._initNumber(t, e, n);
            if ("object" === typeof t) return this._initArray(t, e, n);
            "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
            var o = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && o++,
              16 === e ? this._parseHex(t, o) : this._parseBase(t, e, o),
              "-" === t[0] && (this.negative = 1),
              this.strip(),
              "le" === n && this._initArray(this.toArray(), e, n);
          }),
          (i.prototype._initNumber = function (t, e, n) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (r(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === n && this._initArray(this.toArray(), e, n);
          }),
          (i.prototype._initArray = function (t, e, n) {
            if ((r("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var o = 0; o < this.length; o++) this.words[o] = 0;
            var i,
              s,
              a = 0;
            if ("be" === n)
              for (o = t.length - 1, i = 0; o >= 0; o -= 3)
                (s = t[o] | (t[o - 1] << 8) | (t[o - 2] << 16)),
                  (this.words[i] |= (s << a) & 67108863),
                  (this.words[i + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ("le" === n)
              for (o = 0, i = 0; o < t.length; o += 3)
                (s = t[o] | (t[o + 1] << 8) | (t[o + 2] << 16)),
                  (this.words[i] |= (s << a) & 67108863),
                  (this.words[i + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this.strip();
          }),
          (i.prototype._parseHex = function (t, e) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var r,
              o,
              i = 0;
            for (n = t.length - 6, r = 0; n >= e; n -= 6)
              (o = a(t, n, n + 6)),
                (this.words[r] |= (o << i) & 67108863),
                (this.words[r + 1] |= (o >>> (26 - i)) & 4194303),
                (i += 24) >= 26 && ((i -= 26), r++);
            n + 6 !== e &&
              ((o = a(t, e, n + 6)),
              (this.words[r] |= (o << i) & 67108863),
              (this.words[r + 1] |= (o >>> (26 - i)) & 4194303)),
              this.strip();
          }),
          (i.prototype._parseBase = function (t, e, n) {
            (this.words = [0]), (this.length = 1);
            for (var r = 0, o = 1; o <= 67108863; o *= e) r++;
            r--, (o = (o / e) | 0);
            for (
              var i = t.length - n,
                s = i % r,
                a = Math.min(i, i - s) + n,
                c = 0,
                l = n;
              l < a;
              l += r
            )
              (c = u(t, l, l + r, e)),
                this.imuln(o),
                this.words[0] + c < 67108864
                  ? (this.words[0] += c)
                  : this._iaddn(c);
            if (0 !== s) {
              var h = 1;
              for (c = u(t, l, t.length, e), l = 0; l < s; l++) h *= e;
              this.imuln(h),
                this.words[0] + c < 67108864
                  ? (this.words[0] += c)
                  : this._iaddn(c);
            }
          }),
          (i.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (i.prototype.clone = function () {
            var t = new i(null);
            return this.copy(t), t;
          }),
          (i.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (i.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (i.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (i.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          l = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          h = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function f(t, e, n) {
          n.negative = e.negative ^ t.negative;
          var r = (t.length + e.length) | 0;
          (n.length = r), (r = (r - 1) | 0);
          var o = 0 | t.words[0],
            i = 0 | e.words[0],
            s = o * i,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          n.words[0] = a;
          for (var c = 1; c < r; c++) {
            for (
              var l = u >>> 26,
                h = 67108863 & u,
                f = Math.min(c, e.length - 1),
                p = Math.max(0, c - t.length + 1);
              p <= f;
              p++
            ) {
              var d = (c - p) | 0;
              (l +=
                ((s = (o = 0 | t.words[d]) * (i = 0 | e.words[p]) + h) /
                  67108864) |
                0),
                (h = 67108863 & s);
            }
            (n.words[c] = 0 | h), (u = 0 | l);
          }
          return 0 !== u ? (n.words[c] = 0 | u) : n.length--, n.strip();
        }
        (i.prototype.toString = function (t, e) {
          var n;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            n = "";
            for (var o = 0, i = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << o) | i)).toString(16);
              (n =
                0 !== (i = (a >>> (24 - o)) & 16777215) || s !== this.length - 1
                  ? c[6 - u.length] + u + n
                  : u + n),
                (o += 2) >= 26 && ((o -= 26), s--);
            }
            for (0 !== i && (n = i.toString(16) + n); n.length % e !== 0; )
              n = "0" + n;
            return 0 !== this.negative && (n = "-" + n), n;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var f = l[t],
              p = h[t];
            n = "";
            var d = this.clone();
            for (d.negative = 0; !d.isZero(); ) {
              var m = d.modn(p).toString(t);
              n = (d = d.idivn(p)).isZero() ? m + n : c[f - m.length] + m + n;
            }
            for (this.isZero() && (n = "0" + n); n.length % e !== 0; )
              n = "0" + n;
            return 0 !== this.negative && (n = "-" + n), n;
          }
          r(!1, "Base should be between 2 and 36");
        }),
          (i.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  r(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (i.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (i.prototype.toBuffer = function (t, e) {
            return r("undefined" !== typeof s), this.toArrayLike(s, t, e);
          }),
          (i.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (i.prototype.toArrayLike = function (t, e, n) {
            var o = this.byteLength(),
              i = n || Math.max(1, o);
            r(o <= i, "byte array longer than desired length"),
              r(i > 0, "Requested array length <= 0"),
              this.strip();
            var s,
              a,
              u = "le" === e,
              c = new t(i),
              l = this.clone();
            if (u) {
              for (a = 0; !l.isZero(); a++)
                (s = l.andln(255)), l.iushrn(8), (c[a] = s);
              for (; a < i; a++) c[a] = 0;
            } else {
              for (a = 0; a < i - o; a++) c[a] = 0;
              for (a = 0; !l.isZero(); a++)
                (s = l.andln(255)), l.iushrn(8), (c[i - a - 1] = s);
            }
            return c;
          }),
          Math.clz32
            ? (i.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (i.prototype._countBits = function (t) {
                var e = t,
                  n = 0;
                return (
                  e >= 4096 && ((n += 13), (e >>>= 13)),
                  e >= 64 && ((n += 7), (e >>>= 7)),
                  e >= 8 && ((n += 4), (e >>>= 4)),
                  e >= 2 && ((n += 2), (e >>>= 2)),
                  n + e
                );
              }),
          (i.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              n = 0;
            return (
              0 === (8191 & e) && ((n += 13), (e >>>= 13)),
              0 === (127 & e) && ((n += 7), (e >>>= 7)),
              0 === (15 & e) && ((n += 4), (e >>>= 4)),
              0 === (3 & e) && ((n += 2), (e >>>= 2)),
              0 === (1 & e) && n++,
              n
            );
          }),
          (i.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (i.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var n = this._zeroBits(this.words[e]);
              if (((t += n), 26 !== n)) break;
            }
            return t;
          }),
          (i.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (i.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (i.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (i.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (i.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (i.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (i.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (i.prototype.ior = function (t) {
            return r(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (i.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (i.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (i.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var n = 0; n < e.length; n++)
              this.words[n] = this.words[n] & t.words[n];
            return (this.length = e.length), this.strip();
          }),
          (i.prototype.iand = function (t) {
            return r(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (i.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (i.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (i.prototype.iuxor = function (t) {
            var e, n;
            this.length > t.length
              ? ((e = this), (n = t))
              : ((e = t), (n = this));
            for (var r = 0; r < n.length; r++)
              this.words[r] = e.words[r] ^ n.words[r];
            if (this !== e)
              for (; r < e.length; r++) this.words[r] = e.words[r];
            return (this.length = e.length), this.strip();
          }),
          (i.prototype.ixor = function (t) {
            return r(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (i.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (i.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (i.prototype.inotn = function (t) {
            r("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              n = t % 26;
            this._expand(e), n > 0 && e--;
            for (var o = 0; o < e; o++)
              this.words[o] = 67108863 & ~this.words[o];
            return (
              n > 0 &&
                (this.words[o] = ~this.words[o] & (67108863 >> (26 - n))),
              this.strip()
            );
          }),
          (i.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (i.prototype.setn = function (t, e) {
            r("number" === typeof t && t >= 0);
            var n = (t / 26) | 0,
              o = t % 26;
            return (
              this._expand(n + 1),
              (this.words[n] = e
                ? this.words[n] | (1 << o)
                : this.words[n] & ~(1 << o)),
              this.strip()
            );
          }),
          (i.prototype.iadd = function (t) {
            var e, n, r;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((n = this), (r = t))
              : ((n = t), (r = this));
            for (var o = 0, i = 0; i < r.length; i++)
              (e = (0 | n.words[i]) + (0 | r.words[i]) + o),
                (this.words[i] = 67108863 & e),
                (o = e >>> 26);
            for (; 0 !== o && i < n.length; i++)
              (e = (0 | n.words[i]) + o),
                (this.words[i] = 67108863 & e),
                (o = e >>> 26);
            if (((this.length = n.length), 0 !== o))
              (this.words[this.length] = o), this.length++;
            else if (n !== this)
              for (; i < n.length; i++) this.words[i] = n.words[i];
            return this;
          }),
          (i.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (i.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var n,
              r,
              o = this.cmp(t);
            if (0 === o)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            o > 0 ? ((n = this), (r = t)) : ((n = t), (r = this));
            for (var i = 0, s = 0; s < r.length; s++)
              (i = (e = (0 | n.words[s]) - (0 | r.words[s]) + i) >> 26),
                (this.words[s] = 67108863 & e);
            for (; 0 !== i && s < n.length; s++)
              (i = (e = (0 | n.words[s]) + i) >> 26),
                (this.words[s] = 67108863 & e);
            if (0 === i && s < n.length && n !== this)
              for (; s < n.length; s++) this.words[s] = n.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              n !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (i.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var p = function (t, e, n) {
          var r,
            o,
            i,
            s = t.words,
            a = e.words,
            u = n.words,
            c = 0,
            l = 0 | s[0],
            h = 8191 & l,
            f = l >>> 13,
            p = 0 | s[1],
            d = 8191 & p,
            m = p >>> 13,
            g = 0 | s[2],
            v = 8191 & g,
            y = g >>> 13,
            _ = 0 | s[3],
            w = 8191 & _,
            b = _ >>> 13,
            x = 0 | s[4],
            M = 8191 & x,
            k = x >>> 13,
            E = 0 | s[5],
            R = 8191 & E,
            S = E >>> 13,
            A = 0 | s[6],
            C = 8191 & A,
            T = A >>> 13,
            I = 0 | s[7],
            O = 8191 & I,
            B = I >>> 13,
            P = 0 | s[8],
            U = 8191 & P,
            L = P >>> 13,
            N = 0 | s[9],
            q = 8191 & N,
            j = N >>> 13,
            D = 0 | a[0],
            H = 8191 & D,
            Z = D >>> 13,
            F = 0 | a[1],
            J = 8191 & F,
            z = F >>> 13,
            W = 0 | a[2],
            K = 8191 & W,
            Y = W >>> 13,
            V = 0 | a[3],
            Q = 8191 & V,
            $ = V >>> 13,
            X = 0 | a[4],
            G = 8191 & X,
            tt = X >>> 13,
            et = 0 | a[5],
            nt = 8191 & et,
            rt = et >>> 13,
            ot = 0 | a[6],
            it = 8191 & ot,
            st = ot >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ct = at >>> 13,
            lt = 0 | a[8],
            ht = 8191 & lt,
            ft = lt >>> 13,
            pt = 0 | a[9],
            dt = 8191 & pt,
            mt = pt >>> 13;
          (n.negative = t.negative ^ e.negative), (n.length = 19);
          var gt =
            (((c + (r = Math.imul(h, H))) | 0) +
              ((8191 & (o = ((o = Math.imul(h, Z)) + Math.imul(f, H)) | 0)) <<
                13)) |
            0;
          (c = ((((i = Math.imul(f, Z)) + (o >>> 13)) | 0) + (gt >>> 26)) | 0),
            (gt &= 67108863),
            (r = Math.imul(d, H)),
            (o = ((o = Math.imul(d, Z)) + Math.imul(m, H)) | 0),
            (i = Math.imul(m, Z));
          var vt =
            (((c + (r = (r + Math.imul(h, J)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, z)) | 0) + Math.imul(f, J)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, z)) | 0) + (o >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (r = Math.imul(v, H)),
            (o = ((o = Math.imul(v, Z)) + Math.imul(y, H)) | 0),
            (i = Math.imul(y, Z)),
            (r = (r + Math.imul(d, J)) | 0),
            (o = ((o = (o + Math.imul(d, z)) | 0) + Math.imul(m, J)) | 0),
            (i = (i + Math.imul(m, z)) | 0);
          var yt =
            (((c + (r = (r + Math.imul(h, K)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, Y)) | 0) + Math.imul(f, K)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, Y)) | 0) + (o >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (r = Math.imul(w, H)),
            (o = ((o = Math.imul(w, Z)) + Math.imul(b, H)) | 0),
            (i = Math.imul(b, Z)),
            (r = (r + Math.imul(v, J)) | 0),
            (o = ((o = (o + Math.imul(v, z)) | 0) + Math.imul(y, J)) | 0),
            (i = (i + Math.imul(y, z)) | 0),
            (r = (r + Math.imul(d, K)) | 0),
            (o = ((o = (o + Math.imul(d, Y)) | 0) + Math.imul(m, K)) | 0),
            (i = (i + Math.imul(m, Y)) | 0);
          var _t =
            (((c + (r = (r + Math.imul(h, Q)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, $)) | 0) + Math.imul(f, Q)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, $)) | 0) + (o >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (r = Math.imul(M, H)),
            (o = ((o = Math.imul(M, Z)) + Math.imul(k, H)) | 0),
            (i = Math.imul(k, Z)),
            (r = (r + Math.imul(w, J)) | 0),
            (o = ((o = (o + Math.imul(w, z)) | 0) + Math.imul(b, J)) | 0),
            (i = (i + Math.imul(b, z)) | 0),
            (r = (r + Math.imul(v, K)) | 0),
            (o = ((o = (o + Math.imul(v, Y)) | 0) + Math.imul(y, K)) | 0),
            (i = (i + Math.imul(y, Y)) | 0),
            (r = (r + Math.imul(d, Q)) | 0),
            (o = ((o = (o + Math.imul(d, $)) | 0) + Math.imul(m, Q)) | 0),
            (i = (i + Math.imul(m, $)) | 0);
          var wt =
            (((c + (r = (r + Math.imul(h, G)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, tt)) | 0) + Math.imul(f, G)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, tt)) | 0) + (o >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (r = Math.imul(R, H)),
            (o = ((o = Math.imul(R, Z)) + Math.imul(S, H)) | 0),
            (i = Math.imul(S, Z)),
            (r = (r + Math.imul(M, J)) | 0),
            (o = ((o = (o + Math.imul(M, z)) | 0) + Math.imul(k, J)) | 0),
            (i = (i + Math.imul(k, z)) | 0),
            (r = (r + Math.imul(w, K)) | 0),
            (o = ((o = (o + Math.imul(w, Y)) | 0) + Math.imul(b, K)) | 0),
            (i = (i + Math.imul(b, Y)) | 0),
            (r = (r + Math.imul(v, Q)) | 0),
            (o = ((o = (o + Math.imul(v, $)) | 0) + Math.imul(y, Q)) | 0),
            (i = (i + Math.imul(y, $)) | 0),
            (r = (r + Math.imul(d, G)) | 0),
            (o = ((o = (o + Math.imul(d, tt)) | 0) + Math.imul(m, G)) | 0),
            (i = (i + Math.imul(m, tt)) | 0);
          var bt =
            (((c + (r = (r + Math.imul(h, nt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, rt)) | 0) + Math.imul(f, nt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, rt)) | 0) + (o >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (r = Math.imul(C, H)),
            (o = ((o = Math.imul(C, Z)) + Math.imul(T, H)) | 0),
            (i = Math.imul(T, Z)),
            (r = (r + Math.imul(R, J)) | 0),
            (o = ((o = (o + Math.imul(R, z)) | 0) + Math.imul(S, J)) | 0),
            (i = (i + Math.imul(S, z)) | 0),
            (r = (r + Math.imul(M, K)) | 0),
            (o = ((o = (o + Math.imul(M, Y)) | 0) + Math.imul(k, K)) | 0),
            (i = (i + Math.imul(k, Y)) | 0),
            (r = (r + Math.imul(w, Q)) | 0),
            (o = ((o = (o + Math.imul(w, $)) | 0) + Math.imul(b, Q)) | 0),
            (i = (i + Math.imul(b, $)) | 0),
            (r = (r + Math.imul(v, G)) | 0),
            (o = ((o = (o + Math.imul(v, tt)) | 0) + Math.imul(y, G)) | 0),
            (i = (i + Math.imul(y, tt)) | 0),
            (r = (r + Math.imul(d, nt)) | 0),
            (o = ((o = (o + Math.imul(d, rt)) | 0) + Math.imul(m, nt)) | 0),
            (i = (i + Math.imul(m, rt)) | 0);
          var xt =
            (((c + (r = (r + Math.imul(h, it)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, st)) | 0) + Math.imul(f, it)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, st)) | 0) + (o >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (r = Math.imul(O, H)),
            (o = ((o = Math.imul(O, Z)) + Math.imul(B, H)) | 0),
            (i = Math.imul(B, Z)),
            (r = (r + Math.imul(C, J)) | 0),
            (o = ((o = (o + Math.imul(C, z)) | 0) + Math.imul(T, J)) | 0),
            (i = (i + Math.imul(T, z)) | 0),
            (r = (r + Math.imul(R, K)) | 0),
            (o = ((o = (o + Math.imul(R, Y)) | 0) + Math.imul(S, K)) | 0),
            (i = (i + Math.imul(S, Y)) | 0),
            (r = (r + Math.imul(M, Q)) | 0),
            (o = ((o = (o + Math.imul(M, $)) | 0) + Math.imul(k, Q)) | 0),
            (i = (i + Math.imul(k, $)) | 0),
            (r = (r + Math.imul(w, G)) | 0),
            (o = ((o = (o + Math.imul(w, tt)) | 0) + Math.imul(b, G)) | 0),
            (i = (i + Math.imul(b, tt)) | 0),
            (r = (r + Math.imul(v, nt)) | 0),
            (o = ((o = (o + Math.imul(v, rt)) | 0) + Math.imul(y, nt)) | 0),
            (i = (i + Math.imul(y, rt)) | 0),
            (r = (r + Math.imul(d, it)) | 0),
            (o = ((o = (o + Math.imul(d, st)) | 0) + Math.imul(m, it)) | 0),
            (i = (i + Math.imul(m, st)) | 0);
          var Mt =
            (((c + (r = (r + Math.imul(h, ut)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, ct)) | 0) + Math.imul(f, ut)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, ct)) | 0) + (o >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (r = Math.imul(U, H)),
            (o = ((o = Math.imul(U, Z)) + Math.imul(L, H)) | 0),
            (i = Math.imul(L, Z)),
            (r = (r + Math.imul(O, J)) | 0),
            (o = ((o = (o + Math.imul(O, z)) | 0) + Math.imul(B, J)) | 0),
            (i = (i + Math.imul(B, z)) | 0),
            (r = (r + Math.imul(C, K)) | 0),
            (o = ((o = (o + Math.imul(C, Y)) | 0) + Math.imul(T, K)) | 0),
            (i = (i + Math.imul(T, Y)) | 0),
            (r = (r + Math.imul(R, Q)) | 0),
            (o = ((o = (o + Math.imul(R, $)) | 0) + Math.imul(S, Q)) | 0),
            (i = (i + Math.imul(S, $)) | 0),
            (r = (r + Math.imul(M, G)) | 0),
            (o = ((o = (o + Math.imul(M, tt)) | 0) + Math.imul(k, G)) | 0),
            (i = (i + Math.imul(k, tt)) | 0),
            (r = (r + Math.imul(w, nt)) | 0),
            (o = ((o = (o + Math.imul(w, rt)) | 0) + Math.imul(b, nt)) | 0),
            (i = (i + Math.imul(b, rt)) | 0),
            (r = (r + Math.imul(v, it)) | 0),
            (o = ((o = (o + Math.imul(v, st)) | 0) + Math.imul(y, it)) | 0),
            (i = (i + Math.imul(y, st)) | 0),
            (r = (r + Math.imul(d, ut)) | 0),
            (o = ((o = (o + Math.imul(d, ct)) | 0) + Math.imul(m, ut)) | 0),
            (i = (i + Math.imul(m, ct)) | 0);
          var kt =
            (((c + (r = (r + Math.imul(h, ht)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, ft)) | 0) + Math.imul(f, ht)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, ft)) | 0) + (o >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (r = Math.imul(q, H)),
            (o = ((o = Math.imul(q, Z)) + Math.imul(j, H)) | 0),
            (i = Math.imul(j, Z)),
            (r = (r + Math.imul(U, J)) | 0),
            (o = ((o = (o + Math.imul(U, z)) | 0) + Math.imul(L, J)) | 0),
            (i = (i + Math.imul(L, z)) | 0),
            (r = (r + Math.imul(O, K)) | 0),
            (o = ((o = (o + Math.imul(O, Y)) | 0) + Math.imul(B, K)) | 0),
            (i = (i + Math.imul(B, Y)) | 0),
            (r = (r + Math.imul(C, Q)) | 0),
            (o = ((o = (o + Math.imul(C, $)) | 0) + Math.imul(T, Q)) | 0),
            (i = (i + Math.imul(T, $)) | 0),
            (r = (r + Math.imul(R, G)) | 0),
            (o = ((o = (o + Math.imul(R, tt)) | 0) + Math.imul(S, G)) | 0),
            (i = (i + Math.imul(S, tt)) | 0),
            (r = (r + Math.imul(M, nt)) | 0),
            (o = ((o = (o + Math.imul(M, rt)) | 0) + Math.imul(k, nt)) | 0),
            (i = (i + Math.imul(k, rt)) | 0),
            (r = (r + Math.imul(w, it)) | 0),
            (o = ((o = (o + Math.imul(w, st)) | 0) + Math.imul(b, it)) | 0),
            (i = (i + Math.imul(b, st)) | 0),
            (r = (r + Math.imul(v, ut)) | 0),
            (o = ((o = (o + Math.imul(v, ct)) | 0) + Math.imul(y, ut)) | 0),
            (i = (i + Math.imul(y, ct)) | 0),
            (r = (r + Math.imul(d, ht)) | 0),
            (o = ((o = (o + Math.imul(d, ft)) | 0) + Math.imul(m, ht)) | 0),
            (i = (i + Math.imul(m, ft)) | 0);
          var Et =
            (((c + (r = (r + Math.imul(h, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(h, mt)) | 0) + Math.imul(f, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(f, mt)) | 0) + (o >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (r = Math.imul(q, J)),
            (o = ((o = Math.imul(q, z)) + Math.imul(j, J)) | 0),
            (i = Math.imul(j, z)),
            (r = (r + Math.imul(U, K)) | 0),
            (o = ((o = (o + Math.imul(U, Y)) | 0) + Math.imul(L, K)) | 0),
            (i = (i + Math.imul(L, Y)) | 0),
            (r = (r + Math.imul(O, Q)) | 0),
            (o = ((o = (o + Math.imul(O, $)) | 0) + Math.imul(B, Q)) | 0),
            (i = (i + Math.imul(B, $)) | 0),
            (r = (r + Math.imul(C, G)) | 0),
            (o = ((o = (o + Math.imul(C, tt)) | 0) + Math.imul(T, G)) | 0),
            (i = (i + Math.imul(T, tt)) | 0),
            (r = (r + Math.imul(R, nt)) | 0),
            (o = ((o = (o + Math.imul(R, rt)) | 0) + Math.imul(S, nt)) | 0),
            (i = (i + Math.imul(S, rt)) | 0),
            (r = (r + Math.imul(M, it)) | 0),
            (o = ((o = (o + Math.imul(M, st)) | 0) + Math.imul(k, it)) | 0),
            (i = (i + Math.imul(k, st)) | 0),
            (r = (r + Math.imul(w, ut)) | 0),
            (o = ((o = (o + Math.imul(w, ct)) | 0) + Math.imul(b, ut)) | 0),
            (i = (i + Math.imul(b, ct)) | 0),
            (r = (r + Math.imul(v, ht)) | 0),
            (o = ((o = (o + Math.imul(v, ft)) | 0) + Math.imul(y, ht)) | 0),
            (i = (i + Math.imul(y, ft)) | 0);
          var Rt =
            (((c + (r = (r + Math.imul(d, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(d, mt)) | 0) + Math.imul(m, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(m, mt)) | 0) + (o >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (r = Math.imul(q, K)),
            (o = ((o = Math.imul(q, Y)) + Math.imul(j, K)) | 0),
            (i = Math.imul(j, Y)),
            (r = (r + Math.imul(U, Q)) | 0),
            (o = ((o = (o + Math.imul(U, $)) | 0) + Math.imul(L, Q)) | 0),
            (i = (i + Math.imul(L, $)) | 0),
            (r = (r + Math.imul(O, G)) | 0),
            (o = ((o = (o + Math.imul(O, tt)) | 0) + Math.imul(B, G)) | 0),
            (i = (i + Math.imul(B, tt)) | 0),
            (r = (r + Math.imul(C, nt)) | 0),
            (o = ((o = (o + Math.imul(C, rt)) | 0) + Math.imul(T, nt)) | 0),
            (i = (i + Math.imul(T, rt)) | 0),
            (r = (r + Math.imul(R, it)) | 0),
            (o = ((o = (o + Math.imul(R, st)) | 0) + Math.imul(S, it)) | 0),
            (i = (i + Math.imul(S, st)) | 0),
            (r = (r + Math.imul(M, ut)) | 0),
            (o = ((o = (o + Math.imul(M, ct)) | 0) + Math.imul(k, ut)) | 0),
            (i = (i + Math.imul(k, ct)) | 0),
            (r = (r + Math.imul(w, ht)) | 0),
            (o = ((o = (o + Math.imul(w, ft)) | 0) + Math.imul(b, ht)) | 0),
            (i = (i + Math.imul(b, ft)) | 0);
          var St =
            (((c + (r = (r + Math.imul(v, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(v, mt)) | 0) + Math.imul(y, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(y, mt)) | 0) + (o >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (r = Math.imul(q, Q)),
            (o = ((o = Math.imul(q, $)) + Math.imul(j, Q)) | 0),
            (i = Math.imul(j, $)),
            (r = (r + Math.imul(U, G)) | 0),
            (o = ((o = (o + Math.imul(U, tt)) | 0) + Math.imul(L, G)) | 0),
            (i = (i + Math.imul(L, tt)) | 0),
            (r = (r + Math.imul(O, nt)) | 0),
            (o = ((o = (o + Math.imul(O, rt)) | 0) + Math.imul(B, nt)) | 0),
            (i = (i + Math.imul(B, rt)) | 0),
            (r = (r + Math.imul(C, it)) | 0),
            (o = ((o = (o + Math.imul(C, st)) | 0) + Math.imul(T, it)) | 0),
            (i = (i + Math.imul(T, st)) | 0),
            (r = (r + Math.imul(R, ut)) | 0),
            (o = ((o = (o + Math.imul(R, ct)) | 0) + Math.imul(S, ut)) | 0),
            (i = (i + Math.imul(S, ct)) | 0),
            (r = (r + Math.imul(M, ht)) | 0),
            (o = ((o = (o + Math.imul(M, ft)) | 0) + Math.imul(k, ht)) | 0),
            (i = (i + Math.imul(k, ft)) | 0);
          var At =
            (((c + (r = (r + Math.imul(w, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(w, mt)) | 0) + Math.imul(b, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(b, mt)) | 0) + (o >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (r = Math.imul(q, G)),
            (o = ((o = Math.imul(q, tt)) + Math.imul(j, G)) | 0),
            (i = Math.imul(j, tt)),
            (r = (r + Math.imul(U, nt)) | 0),
            (o = ((o = (o + Math.imul(U, rt)) | 0) + Math.imul(L, nt)) | 0),
            (i = (i + Math.imul(L, rt)) | 0),
            (r = (r + Math.imul(O, it)) | 0),
            (o = ((o = (o + Math.imul(O, st)) | 0) + Math.imul(B, it)) | 0),
            (i = (i + Math.imul(B, st)) | 0),
            (r = (r + Math.imul(C, ut)) | 0),
            (o = ((o = (o + Math.imul(C, ct)) | 0) + Math.imul(T, ut)) | 0),
            (i = (i + Math.imul(T, ct)) | 0),
            (r = (r + Math.imul(R, ht)) | 0),
            (o = ((o = (o + Math.imul(R, ft)) | 0) + Math.imul(S, ht)) | 0),
            (i = (i + Math.imul(S, ft)) | 0);
          var Ct =
            (((c + (r = (r + Math.imul(M, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(M, mt)) | 0) + Math.imul(k, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(k, mt)) | 0) + (o >>> 13)) | 0) +
              (Ct >>> 26)) |
            0),
            (Ct &= 67108863),
            (r = Math.imul(q, nt)),
            (o = ((o = Math.imul(q, rt)) + Math.imul(j, nt)) | 0),
            (i = Math.imul(j, rt)),
            (r = (r + Math.imul(U, it)) | 0),
            (o = ((o = (o + Math.imul(U, st)) | 0) + Math.imul(L, it)) | 0),
            (i = (i + Math.imul(L, st)) | 0),
            (r = (r + Math.imul(O, ut)) | 0),
            (o = ((o = (o + Math.imul(O, ct)) | 0) + Math.imul(B, ut)) | 0),
            (i = (i + Math.imul(B, ct)) | 0),
            (r = (r + Math.imul(C, ht)) | 0),
            (o = ((o = (o + Math.imul(C, ft)) | 0) + Math.imul(T, ht)) | 0),
            (i = (i + Math.imul(T, ft)) | 0);
          var Tt =
            (((c + (r = (r + Math.imul(R, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(R, mt)) | 0) + Math.imul(S, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(S, mt)) | 0) + (o >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (r = Math.imul(q, it)),
            (o = ((o = Math.imul(q, st)) + Math.imul(j, it)) | 0),
            (i = Math.imul(j, st)),
            (r = (r + Math.imul(U, ut)) | 0),
            (o = ((o = (o + Math.imul(U, ct)) | 0) + Math.imul(L, ut)) | 0),
            (i = (i + Math.imul(L, ct)) | 0),
            (r = (r + Math.imul(O, ht)) | 0),
            (o = ((o = (o + Math.imul(O, ft)) | 0) + Math.imul(B, ht)) | 0),
            (i = (i + Math.imul(B, ft)) | 0);
          var It =
            (((c + (r = (r + Math.imul(C, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(C, mt)) | 0) + Math.imul(T, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(T, mt)) | 0) + (o >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (r = Math.imul(q, ut)),
            (o = ((o = Math.imul(q, ct)) + Math.imul(j, ut)) | 0),
            (i = Math.imul(j, ct)),
            (r = (r + Math.imul(U, ht)) | 0),
            (o = ((o = (o + Math.imul(U, ft)) | 0) + Math.imul(L, ht)) | 0),
            (i = (i + Math.imul(L, ft)) | 0);
          var Ot =
            (((c + (r = (r + Math.imul(O, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(O, mt)) | 0) + Math.imul(B, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(B, mt)) | 0) + (o >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (r = Math.imul(q, ht)),
            (o = ((o = Math.imul(q, ft)) + Math.imul(j, ht)) | 0),
            (i = Math.imul(j, ft));
          var Bt =
            (((c + (r = (r + Math.imul(U, dt)) | 0)) | 0) +
              ((8191 &
                (o =
                  ((o = (o + Math.imul(U, mt)) | 0) + Math.imul(L, dt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((i = (i + Math.imul(L, mt)) | 0) + (o >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863);
          var Pt =
            (((c + (r = Math.imul(q, dt))) | 0) +
              ((8191 & (o = ((o = Math.imul(q, mt)) + Math.imul(j, dt)) | 0)) <<
                13)) |
            0;
          return (
            (c =
              ((((i = Math.imul(j, mt)) + (o >>> 13)) | 0) + (Pt >>> 26)) | 0),
            (Pt &= 67108863),
            (u[0] = gt),
            (u[1] = vt),
            (u[2] = yt),
            (u[3] = _t),
            (u[4] = wt),
            (u[5] = bt),
            (u[6] = xt),
            (u[7] = Mt),
            (u[8] = kt),
            (u[9] = Et),
            (u[10] = Rt),
            (u[11] = St),
            (u[12] = At),
            (u[13] = Ct),
            (u[14] = Tt),
            (u[15] = It),
            (u[16] = Ot),
            (u[17] = Bt),
            (u[18] = Pt),
            0 !== c && ((u[19] = c), n.length++),
            n
          );
        };
        function d(t, e, n) {
          return new m().mulp(t, e, n);
        }
        function m(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (p = f),
          (i.prototype.mulTo = function (t, e) {
            var n,
              r = this.length + t.length;
            return (
              (n =
                10 === this.length && 10 === t.length
                  ? p(this, t, e)
                  : r < 63
                  ? f(this, t, e)
                  : r < 1024
                  ? (function (t, e, n) {
                      (n.negative = e.negative ^ t.negative),
                        (n.length = t.length + e.length);
                      for (var r = 0, o = 0, i = 0; i < n.length - 1; i++) {
                        var s = o;
                        o = 0;
                        for (
                          var a = 67108863 & r,
                            u = Math.min(i, e.length - 1),
                            c = Math.max(0, i - t.length + 1);
                          c <= u;
                          c++
                        ) {
                          var l = i - c,
                            h = (0 | t.words[l]) * (0 | e.words[c]),
                            f = 67108863 & h;
                          (a = 67108863 & (f = (f + a) | 0)),
                            (o +=
                              (s =
                                ((s = (s + ((h / 67108864) | 0)) | 0) +
                                  (f >>> 26)) |
                                0) >>> 26),
                            (s &= 67108863);
                        }
                        (n.words[i] = a), (r = s), (s = o);
                      }
                      return 0 !== r ? (n.words[i] = r) : n.length--, n.strip();
                    })(this, t, e)
                  : d(this, t, e)),
              n
            );
          }),
          (m.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), n = i.prototype._countBits(t) - 1, r = 0;
              r < t;
              r++
            )
              e[r] = this.revBin(r, n, t);
            return e;
          }),
          (m.prototype.revBin = function (t, e, n) {
            if (0 === t || t === n - 1) return t;
            for (var r = 0, o = 0; o < e; o++)
              (r |= (1 & t) << (e - o - 1)), (t >>= 1);
            return r;
          }),
          (m.prototype.permute = function (t, e, n, r, o, i) {
            for (var s = 0; s < i; s++) (r[s] = e[t[s]]), (o[s] = n[t[s]]);
          }),
          (m.prototype.transform = function (t, e, n, r, o, i) {
            this.permute(i, t, e, n, r, o);
            for (var s = 1; s < o; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  c = Math.sin((2 * Math.PI) / a),
                  l = 0;
                l < o;
                l += a
              )
                for (var h = u, f = c, p = 0; p < s; p++) {
                  var d = n[l + p],
                    m = r[l + p],
                    g = n[l + p + s],
                    v = r[l + p + s],
                    y = h * g - f * v;
                  (v = h * v + f * g),
                    (g = y),
                    (n[l + p] = d + g),
                    (r[l + p] = m + v),
                    (n[l + p + s] = d - g),
                    (r[l + p + s] = m - v),
                    p !== a &&
                      ((y = u * h - c * f), (f = u * f + c * h), (h = y));
                }
          }),
          (m.prototype.guessLen13b = function (t, e) {
            var n = 1 | Math.max(e, t),
              r = 1 & n,
              o = 0;
            for (n = (n / 2) | 0; n; n >>>= 1) o++;
            return 1 << (o + 1 + r);
          }),
          (m.prototype.conjugate = function (t, e, n) {
            if (!(n <= 1))
              for (var r = 0; r < n / 2; r++) {
                var o = t[r];
                (t[r] = t[n - r - 1]),
                  (t[n - r - 1] = o),
                  (o = e[r]),
                  (e[r] = -e[n - r - 1]),
                  (e[n - r - 1] = -o);
              }
          }),
          (m.prototype.normalize13b = function (t, e) {
            for (var n = 0, r = 0; r < e / 2; r++) {
              var o =
                8192 * Math.round(t[2 * r + 1] / e) +
                Math.round(t[2 * r] / e) +
                n;
              (t[r] = 67108863 & o),
                (n = o < 67108864 ? 0 : (o / 67108864) | 0);
            }
            return t;
          }),
          (m.prototype.convert13b = function (t, e, n, o) {
            for (var i = 0, s = 0; s < e; s++)
              (i += 0 | t[s]),
                (n[2 * s] = 8191 & i),
                (i >>>= 13),
                (n[2 * s + 1] = 8191 & i),
                (i >>>= 13);
            for (s = 2 * e; s < o; ++s) n[s] = 0;
            r(0 === i), r(0 === (-8192 & i));
          }),
          (m.prototype.stub = function (t) {
            for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
            return e;
          }),
          (m.prototype.mulp = function (t, e, n) {
            var r = 2 * this.guessLen13b(t.length, e.length),
              o = this.makeRBT(r),
              i = this.stub(r),
              s = new Array(r),
              a = new Array(r),
              u = new Array(r),
              c = new Array(r),
              l = new Array(r),
              h = new Array(r),
              f = n.words;
            (f.length = r),
              this.convert13b(t.words, t.length, s, r),
              this.convert13b(e.words, e.length, c, r),
              this.transform(s, i, a, u, r, o),
              this.transform(c, i, l, h, r, o);
            for (var p = 0; p < r; p++) {
              var d = a[p] * l[p] - u[p] * h[p];
              (u[p] = a[p] * h[p] + u[p] * l[p]), (a[p] = d);
            }
            return (
              this.conjugate(a, u, r),
              this.transform(a, u, f, i, r, o),
              this.conjugate(f, i, r),
              this.normalize13b(f, r),
              (n.negative = t.negative ^ e.negative),
              (n.length = t.length + e.length),
              n.strip()
            );
          }),
          (i.prototype.mul = function (t) {
            var e = new i(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (i.prototype.mulf = function (t) {
            var e = new i(null);
            return (e.words = new Array(this.length + t.length)), d(this, t, e);
          }),
          (i.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (i.prototype.imuln = function (t) {
            r("number" === typeof t), r(t < 67108864);
            for (var e = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                i = (67108863 & o) + (67108863 & e);
              (e >>= 26),
                (e += (o / 67108864) | 0),
                (e += i >>> 26),
                (this.words[n] = 67108863 & i);
            }
            return 0 !== e && ((this.words[n] = e), this.length++), this;
          }),
          (i.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (i.prototype.sqr = function () {
            return this.mul(this);
          }),
          (i.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (i.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
                var r = (n / 26) | 0,
                  o = n % 26;
                e[n] = (t.words[r] & (1 << o)) >>> o;
              }
              return e;
            })(t);
            if (0 === e.length) return new i(1);
            for (
              var n = this, r = 0;
              r < e.length && 0 === e[r];
              r++, n = n.sqr()
            );
            if (++r < e.length)
              for (var o = n.sqr(); r < e.length; r++, o = o.sqr())
                0 !== e[r] && (n = n.mul(o));
            return n;
          }),
          (i.prototype.iushln = function (t) {
            r("number" === typeof t && t >= 0);
            var e,
              n = t % 26,
              o = (t - n) / 26,
              i = (67108863 >>> (26 - n)) << (26 - n);
            if (0 !== n) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & i,
                  u = ((0 | this.words[e]) - a) << n;
                (this.words[e] = u | s), (s = a >>> (26 - n));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== o) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + o] = this.words[e];
              for (e = 0; e < o; e++) this.words[e] = 0;
              this.length += o;
            }
            return this.strip();
          }),
          (i.prototype.ishln = function (t) {
            return r(0 === this.negative), this.iushln(t);
          }),
          (i.prototype.iushrn = function (t, e, n) {
            var o;
            r("number" === typeof t && t >= 0),
              (o = e ? (e - (e % 26)) / 26 : 0);
            var i = t % 26,
              s = Math.min((t - i) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> i) << i),
              u = n;
            if (((o -= s), (o = Math.max(0, o)), u)) {
              for (var c = 0; c < s; c++) u.words[c] = this.words[c];
              u.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, c = 0; c < this.length; c++)
                this.words[c] = this.words[c + s];
            else (this.words[0] = 0), (this.length = 1);
            var l = 0;
            for (c = this.length - 1; c >= 0 && (0 !== l || c >= o); c--) {
              var h = 0 | this.words[c];
              (this.words[c] = (l << (26 - i)) | (h >>> i)), (l = h & a);
            }
            return (
              u && 0 !== l && (u.words[u.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (i.prototype.ishrn = function (t, e, n) {
            return r(0 === this.negative), this.iushrn(t, e, n);
          }),
          (i.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (i.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (i.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (i.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (i.prototype.testn = function (t) {
            r("number" === typeof t && t >= 0);
            var e = t % 26,
              n = (t - e) / 26,
              o = 1 << e;
            return !(this.length <= n) && !!(this.words[n] & o);
          }),
          (i.prototype.imaskn = function (t) {
            r("number" === typeof t && t >= 0);
            var e = t % 26,
              n = (t - e) / 26;
            if (
              (r(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= n)
            )
              return this;
            if (
              (0 !== e && n++,
              (this.length = Math.min(n, this.length)),
              0 !== e)
            ) {
              var o = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= o;
            }
            return this.strip();
          }),
          (i.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (i.prototype.iaddn = function (t) {
            return (
              r("number" === typeof t),
              r(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (i.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (i.prototype.isubn = function (t) {
            if ((r("number" === typeof t), r(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (i.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (i.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (i.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (i.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (i.prototype._ishlnsubmul = function (t, e, n) {
            var o,
              i,
              s = t.length + n;
            this._expand(s);
            var a = 0;
            for (o = 0; o < t.length; o++) {
              i = (0 | this.words[o + n]) + a;
              var u = (0 | t.words[o]) * e;
              (a = ((i -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[o + n] = 67108863 & i);
            }
            for (; o < this.length - n; o++)
              (a = (i = (0 | this.words[o + n]) + a) >> 26),
                (this.words[o + n] = 67108863 & i);
            if (0 === a) return this.strip();
            for (r(-1 === a), a = 0, o = 0; o < this.length; o++)
              (a = (i = -(0 | this.words[o]) + a) >> 26),
                (this.words[o] = 67108863 & i);
            return (this.negative = 1), this.strip();
          }),
          (i.prototype._wordDiv = function (t, e) {
            var n = (this.length, t.length),
              r = this.clone(),
              o = t,
              s = 0 | o.words[o.length - 1];
            0 !== (n = 26 - this._countBits(s)) &&
              ((o = o.ushln(n)), r.iushln(n), (s = 0 | o.words[o.length - 1]));
            var a,
              u = r.length - o.length;
            if ("mod" !== e) {
              ((a = new i(null)).length = u + 1),
                (a.words = new Array(a.length));
              for (var c = 0; c < a.length; c++) a.words[c] = 0;
            }
            var l = r.clone()._ishlnsubmul(o, 1, u);
            0 === l.negative && ((r = l), a && (a.words[u] = 1));
            for (var h = u - 1; h >= 0; h--) {
              var f =
                67108864 * (0 | r.words[o.length + h]) +
                (0 | r.words[o.length + h - 1]);
              for (
                f = Math.min((f / s) | 0, 67108863), r._ishlnsubmul(o, f, h);
                0 !== r.negative;

              )
                f--,
                  (r.negative = 0),
                  r._ishlnsubmul(o, 1, h),
                  r.isZero() || (r.negative ^= 1);
              a && (a.words[h] = f);
            }
            return (
              a && a.strip(),
              r.strip(),
              "div" !== e && 0 !== n && r.iushrn(n),
              { div: a || null, mod: r }
            );
          }),
          (i.prototype.divmod = function (t, e, n) {
            return (
              r(!t.isZero()),
              this.isZero()
                ? { div: new i(0), mod: new i(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  "mod" !== e && (o = a.div.neg()),
                  "div" !== e &&
                    ((s = a.mod.neg()), n && 0 !== s.negative && s.iadd(t)),
                  { div: o, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)),
                  "mod" !== e && (o = a.div.neg()),
                  { div: o, mod: a.mod })
                : 0 !== (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((s = a.mod.neg()), n && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new i(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new i(this.modn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new i(this.modn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var o, s, a;
          }),
          (i.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (i.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (i.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (i.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              r = t.ushrn(1),
              o = t.andln(1),
              i = n.cmp(r);
            return i < 0 || (1 === o && 0 === i)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (i.prototype.modn = function (t) {
            r(t <= 67108863);
            for (var e = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--)
              n = (e * n + (0 | this.words[o])) % t;
            return n;
          }),
          (i.prototype.idivn = function (t) {
            r(t <= 67108863);
            for (var e = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 67108864 * e;
              (this.words[n] = (o / t) | 0), (e = o % t);
            }
            return this.strip();
          }),
          (i.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (i.prototype.egcd = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var e = this,
              n = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var o = new i(1), s = new i(0), a = new i(0), u = new i(1), c = 0;
              e.isEven() && n.isEven();

            )
              e.iushrn(1), n.iushrn(1), ++c;
            for (var l = n.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var f = 0, p = 1;
                0 === (e.words[0] & p) && f < 26;
                ++f, p <<= 1
              );
              if (f > 0)
                for (e.iushrn(f); f-- > 0; )
                  (o.isOdd() || s.isOdd()) && (o.iadd(l), s.isub(h)),
                    o.iushrn(1),
                    s.iushrn(1);
              for (
                var d = 0, m = 1;
                0 === (n.words[0] & m) && d < 26;
                ++d, m <<= 1
              );
              if (d > 0)
                for (n.iushrn(d); d-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(h)),
                    a.iushrn(1),
                    u.iushrn(1);
              e.cmp(n) >= 0
                ? (e.isub(n), o.isub(a), s.isub(u))
                : (n.isub(e), a.isub(o), u.isub(s));
            }
            return { a: a, b: u, gcd: n.iushln(c) };
          }),
          (i.prototype._invmp = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var e = this,
              n = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var o, s = new i(1), a = new i(0), u = n.clone();
              e.cmpn(1) > 0 && n.cmpn(1) > 0;

            ) {
              for (
                var c = 0, l = 1;
                0 === (e.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              for (
                var h = 0, f = 1;
                0 === (n.words[0] & f) && h < 26;
                ++h, f <<= 1
              );
              if (h > 0)
                for (n.iushrn(h); h-- > 0; )
                  a.isOdd() && a.iadd(u), a.iushrn(1);
              e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
            }
            return (o = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && o.iadd(t), o;
          }),
          (i.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              n = t.clone();
            (e.negative = 0), (n.negative = 0);
            for (var r = 0; e.isEven() && n.isEven(); r++)
              e.iushrn(1), n.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; n.isEven(); ) n.iushrn(1);
              var o = e.cmp(n);
              if (o < 0) {
                var i = e;
                (e = n), (n = i);
              } else if (0 === o || 0 === n.cmpn(1)) break;
              e.isub(n);
            }
            return n.iushln(r);
          }),
          (i.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (i.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (i.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (i.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (i.prototype.bincn = function (t) {
            r("number" === typeof t);
            var e = t % 26,
              n = (t - e) / 26,
              o = 1 << e;
            if (this.length <= n)
              return this._expand(n + 1), (this.words[n] |= o), this;
            for (var i = o, s = n; 0 !== i && s < this.length; s++) {
              var a = 0 | this.words[s];
              (i = (a += i) >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== i && ((this.words[s] = i), this.length++), this;
          }),
          (i.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (i.prototype.cmpn = function (t) {
            var e,
              n = t < 0;
            if (0 !== this.negative && !n) return -1;
            if (0 === this.negative && n) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              n && (t = -t), r(t <= 67108863, "Number is too big");
              var o = 0 | this.words[0];
              e = o === t ? 0 : o < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (i.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (i.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, n = this.length - 1; n >= 0; n--) {
              var r = 0 | this.words[n],
                o = 0 | t.words[n];
              if (r !== o) {
                r < o ? (e = -1) : r > o && (e = 1);
                break;
              }
            }
            return e;
          }),
          (i.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (i.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (i.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (i.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (i.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (i.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (i.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (i.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (i.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (i.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (i.red = function (t) {
            return new x(t);
          }),
          (i.prototype.toRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              r(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (i.prototype.fromRed = function () {
            return (
              r(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (i.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (i.prototype.forceRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (i.prototype.redAdd = function (t) {
            return (
              r(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (i.prototype.redIAdd = function (t) {
            return (
              r(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (i.prototype.redSub = function (t) {
            return (
              r(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (i.prototype.redISub = function (t) {
            return (
              r(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (i.prototype.redShl = function (t) {
            return (
              r(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (i.prototype.redMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (i.prototype.redIMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (i.prototype.redSqr = function () {
            return (
              r(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (i.prototype.redISqr = function () {
            return (
              r(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (i.prototype.redSqrt = function () {
            return (
              r(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (i.prototype.redInvm = function () {
            return (
              r(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (i.prototype.redNeg = function () {
            return (
              r(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (i.prototype.redPow = function (t) {
            return (
              r(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var g = { k256: null, p224: null, p192: null, p25519: null };
        function v(t, e) {
          (this.name = t),
            (this.p = new i(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new i(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function y() {
          v.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function _() {
          v.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function w() {
          v.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function b() {
          v.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function x(t) {
          if ("string" === typeof t) {
            var e = i._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            r(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function M(t) {
          x.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new i(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (v.prototype._tmp = function () {
          var t = new i(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (v.prototype.ireduce = function (t) {
            var e,
              n = t;
            do {
              this.split(n, this.tmp),
                (e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var r = e < this.n ? -1 : n.ucmp(this.p);
            return (
              0 === r
                ? ((n.words[0] = 0), (n.length = 1))
                : r > 0
                ? n.isub(this.p)
                : n.strip(),
              n
            );
          }),
          (v.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (v.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          o(y, v),
          (y.prototype.split = function (t, e) {
            for (var n = 4194303, r = Math.min(t.length, 9), o = 0; o < r; o++)
              e.words[o] = t.words[o];
            if (((e.length = r), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var i = t.words[9];
            for (e.words[e.length++] = i & n, o = 10; o < t.length; o++) {
              var s = 0 | t.words[o];
              (t.words[o - 10] = ((s & n) << 4) | (i >>> 22)), (i = s);
            }
            (i >>>= 22),
              (t.words[o - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (y.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, n = 0; n < t.length; n++) {
              var r = 0 | t.words[n];
              (e += 977 * r),
                (t.words[n] = 67108863 & e),
                (e = 64 * r + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          o(_, v),
          o(w, v),
          o(b, v),
          (b.prototype.imulK = function (t) {
            for (var e = 0, n = 0; n < t.length; n++) {
              var r = 19 * (0 | t.words[n]) + e,
                o = 67108863 & r;
              (r >>>= 26), (t.words[n] = o), (e = r);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (i._prime = function (t) {
            if (g[t]) return g[t];
            var e;
            if ("k256" === t) e = new y();
            else if ("p224" === t) e = new _();
            else if ("p192" === t) e = new w();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new b();
            }
            return (g[t] = e), e;
          }),
          (x.prototype._verify1 = function (t) {
            r(0 === t.negative, "red works only with positives"),
              r(t.red, "red works only with red numbers");
          }),
          (x.prototype._verify2 = function (t, e) {
            r(0 === (t.negative | e.negative), "red works only with positives"),
              r(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (x.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this);
          }),
          (x.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (x.prototype.add = function (t, e) {
            this._verify2(t, e);
            var n = t.add(e);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
          }),
          (x.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var n = t.iadd(e);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n;
          }),
          (x.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var n = t.sub(e);
            return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
          }),
          (x.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var n = t.isub(e);
            return n.cmpn(0) < 0 && n.iadd(this.m), n;
          }),
          (x.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (x.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (x.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (x.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (x.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (x.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((r(e % 2 === 1), 3 === e)) {
              var n = this.m.add(new i(1)).iushrn(2);
              return this.pow(t, n);
            }
            for (
              var o = this.m.subn(1), s = 0;
              !o.isZero() && 0 === o.andln(1);

            )
              s++, o.iushrn(1);
            r(!o.isZero());
            var a = new i(1).toRed(this),
              u = a.redNeg(),
              c = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();
            for (
              l = new i(2 * l * l).toRed(this);
              0 !== this.pow(l, c).cmp(u);

            )
              l.redIAdd(u);
            for (
              var h = this.pow(l, o),
                f = this.pow(t, o.addn(1).iushrn(1)),
                p = this.pow(t, o),
                d = s;
              0 !== p.cmp(a);

            ) {
              for (var m = p, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              r(g < d);
              var v = this.pow(h, new i(1).iushln(d - g - 1));
              (f = f.redMul(v)), (h = v.redSqr()), (p = p.redMul(h)), (d = g);
            }
            return f;
          }),
          (x.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (x.prototype.pow = function (t, e) {
            if (e.isZero()) return new i(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var n = new Array(16);
            (n[0] = new i(1).toRed(this)), (n[1] = t);
            for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
            var o = n[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), r = e.length - 1; r >= 0; r--) {
              for (var c = e.words[r], l = u - 1; l >= 0; l--) {
                var h = (c >> l) & 1;
                o !== n[0] && (o = this.sqr(o)),
                  0 !== h || 0 !== s
                    ? ((s <<= 1),
                      (s |= h),
                      (4 === ++a || (0 === r && 0 === l)) &&
                        ((o = this.mul(o, n[s])), (a = 0), (s = 0)))
                    : (a = 0);
              }
              u = 26;
            }
            return o;
          }),
          (x.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (x.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (i.mont = function (t) {
            return new M(t);
          }),
          o(M, x),
          (M.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (M.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (M.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var n = t.imul(e),
              r = n
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              o = n.isub(r).iushrn(this.shift),
              i = o;
            return (
              o.cmp(this.m) >= 0
                ? (i = o.isub(this.m))
                : o.cmpn(0) < 0 && (i = o.iadd(this.m)),
              i._forceRed(this)
            );
          }),
          (M.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new i(0)._forceRed(this);
            var n = t.mul(e),
              r = n
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              o = n.isub(r).iushrn(this.shift),
              s = o;
            return (
              o.cmp(this.m) >= 0
                ? (s = o.isub(this.m))
                : o.cmpn(0) < 0 && (s = o.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (M.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = n.nmd(t)), this);
    },
    8783: function (t, e) {
      "use strict";
      function n(t) {
        var e = void 0;
        return (
          "undefined" !== typeof window &&
            "undefined" !== typeof window[t] &&
            (e = window[t]),
          e
        );
      }
      function r(t) {
        var e = n(t);
        if (!e) throw new Error("".concat(t, " is not defined in Window"));
        return e;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getLocalStorage =
          e.getLocalStorageOrThrow =
          e.getCrypto =
          e.getCryptoOrThrow =
          e.getLocation =
          e.getLocationOrThrow =
          e.getNavigator =
          e.getNavigatorOrThrow =
          e.getDocument =
          e.getDocumentOrThrow =
          e.getFromWindowOrThrow =
          e.getFromWindow =
            void 0),
        (e.getFromWindow = n),
        (e.getFromWindowOrThrow = r),
        (e.getDocumentOrThrow = function () {
          return r("document");
        }),
        (e.getDocument = function () {
          return n("document");
        }),
        (e.getNavigatorOrThrow = function () {
          return r("navigator");
        }),
        (e.getNavigator = function () {
          return n("navigator");
        }),
        (e.getLocationOrThrow = function () {
          return r("location");
        }),
        (e.getLocation = function () {
          return n("location");
        }),
        (e.getCryptoOrThrow = function () {
          return r("crypto");
        }),
        (e.getCrypto = function () {
          return n("crypto");
        }),
        (e.getLocalStorageOrThrow = function () {
          return r("localStorage");
        }),
        (e.getLocalStorage = function () {
          return n("localStorage");
        });
    },
    5210: function (t, e, n) {
      "use strict";
      e.D = void 0;
      var r = n(8783);
      e.D = function () {
        var t, e;
        try {
          (t = r.getDocumentOrThrow()), (e = r.getLocationOrThrow());
        } catch (i) {
          return null;
        }
        function n() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          for (
            var o = t.getElementsByTagName("meta"),
              i = function (t) {
                var e = o[t],
                  r = ["itemprop", "property", "name"]
                    .map(function (t) {
                      return e.getAttribute(t);
                    })
                    .filter(function (t) {
                      return !!t && n.includes(t);
                    });
                if (r.length && r) {
                  var i = e.getAttribute("content");
                  if (i) return { v: i };
                }
              },
              s = 0;
            s < o.length;
            s++
          ) {
            var a = i(s);
            if ("object" === typeof a) return a.v;
          }
          return "";
        }
        var o = (function () {
          var e = n("name", "og:site_name", "og:title", "twitter:title");
          return e || (e = t.title), e;
        })();
        return {
          description: n(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          url: e.origin,
          icons: (function () {
            for (
              var n = t.getElementsByTagName("link"), r = [], o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o],
                s = i.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                var a = i.getAttribute("href");
                if (a)
                  if (
                    -1 === a.toLowerCase().indexOf("https:") &&
                    -1 === a.toLowerCase().indexOf("http:") &&
                    0 !== a.indexOf("//")
                  ) {
                    var u = e.protocol + "//" + e.host;
                    if (0 === a.indexOf("/")) u += a;
                    else {
                      var c = e.pathname.split("/");
                      c.pop(), (u += c.join("/") + "/" + a);
                    }
                    r.push(u);
                  } else if (0 === a.indexOf("//")) {
                    var l = e.protocol + a;
                    r.push(l);
                  } else r.push(a);
              }
            }
            return r;
          })(),
          name: o,
        };
      };
    },
    2470: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          n = e[0],
          r = e[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (e.toByteArray = function (t) {
          var e,
            n,
            i = u(t),
            s = i[0],
            a = i[1],
            c = new o(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, s, a)
            ),
            l = 0,
            h = a > 0 ? s - 4 : s;
          for (n = 0; n < h; n += 4)
            (e =
              (r[t.charCodeAt(n)] << 18) |
              (r[t.charCodeAt(n + 1)] << 12) |
              (r[t.charCodeAt(n + 2)] << 6) |
              r[t.charCodeAt(n + 3)]),
              (c[l++] = (e >> 16) & 255),
              (c[l++] = (e >> 8) & 255),
              (c[l++] = 255 & e);
          2 === a &&
            ((e = (r[t.charCodeAt(n)] << 2) | (r[t.charCodeAt(n + 1)] >> 4)),
            (c[l++] = 255 & e));
          1 === a &&
            ((e =
              (r[t.charCodeAt(n)] << 10) |
              (r[t.charCodeAt(n + 1)] << 4) |
              (r[t.charCodeAt(n + 2)] >> 2)),
            (c[l++] = (e >> 8) & 255),
            (c[l++] = 255 & e));
          return c;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, r = t.length, o = r % 3, i = [], s = 16383, a = 0, u = r - o;
            a < u;
            a += s
          )
            i.push(c(t, a, a + s > u ? u : a + s));
          1 === o
            ? ((e = t[r - 1]), i.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
            : 2 === o &&
              ((e = (t[r - 2] << 8) + t[r - 1]),
              i.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
          return i.join("");
        });
      for (
        var n = [],
          r = [],
          o = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          i =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = i.length;
        s < a;
        ++s
      )
        (n[s] = i[s]), (r[i.charCodeAt(s)] = s);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function c(t, e, r) {
        for (var o, i, s = [], a = e; a < r; a += 3)
          (o =
            ((t[a] << 16) & 16711680) +
            ((t[a + 1] << 8) & 65280) +
            (255 & t[a + 2])),
            s.push(
              n[((i = o) >> 18) & 63] +
                n[(i >> 12) & 63] +
                n[(i >> 6) & 63] +
                n[63 & i]
            );
        return s.join("");
      }
      (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
    },
    918: function (t, e, n) {
      "use strict";
      var r = n(2470),
        o = n(545),
        i =
          "function" === typeof Symbol && "function" === typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (e.lW = u), (e.h2 = 50);
      var s = 2147483647;
      function a(t) {
        if (t > s)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        var e = new Uint8Array(t);
        return Object.setPrototypeOf(e, u.prototype), e;
      }
      function u(t, e, n) {
        if ("number" === typeof t) {
          if ("string" === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return h(t);
        }
        return c(t, e, n);
      }
      function c(t, e, n) {
        if ("string" === typeof t)
          return (function (t, e) {
            ("string" === typeof e && "" !== e) || (e = "utf8");
            if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
            var n = 0 | m(t, e),
              r = a(n),
              o = r.write(t, e);
            o !== n && (r = r.slice(0, o));
            return r;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (H(t, Uint8Array)) {
              var e = new Uint8Array(t);
              return p(e.buffer, e.byteOffset, e.byteLength);
            }
            return f(t);
          })(t);
        if (null == t)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (H(t, ArrayBuffer) || (t && H(t.buffer, ArrayBuffer)))
          return p(t, e, n);
        if (
          "undefined" !== typeof SharedArrayBuffer &&
          (H(t, SharedArrayBuffer) || (t && H(t.buffer, SharedArrayBuffer)))
        )
          return p(t, e, n);
        if ("number" === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        var r = t.valueOf && t.valueOf();
        if (null != r && r !== t) return u.from(r, e, n);
        var o = (function (t) {
          if (u.isBuffer(t)) {
            var e = 0 | d(t.length),
              n = a(e);
            return 0 === n.length || t.copy(n, 0, 0, e), n;
          }
          if (void 0 !== t.length)
            return "number" !== typeof t.length || Z(t.length) ? a(0) : f(t);
          if ("Buffer" === t.type && Array.isArray(t.data)) return f(t.data);
        })(t);
        if (o) return o;
        if (
          "undefined" !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" === typeof t[Symbol.toPrimitive]
        )
          return u.from(t[Symbol.toPrimitive]("string"), e, n);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function l(t) {
        if ("number" !== typeof t)
          throw new TypeError('"size" argument must be of type number');
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function h(t) {
        return l(t), a(t < 0 ? 0 : 0 | d(t));
      }
      function f(t) {
        for (
          var e = t.length < 0 ? 0 : 0 | d(t.length), n = a(e), r = 0;
          r < e;
          r += 1
        )
          n[r] = 255 & t[r];
        return n;
      }
      function p(t, e, n) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (n || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        var r;
        return (
          (r =
            void 0 === e && void 0 === n
              ? new Uint8Array(t)
              : void 0 === n
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, n)),
          Object.setPrototypeOf(r, u.prototype),
          r
        );
      }
      function d(t) {
        if (t >= s)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              s.toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function m(t, e) {
        if (u.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || H(t, ArrayBuffer)) return t.byteLength;
        if ("string" !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        var n = t.length,
          r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === n) return 0;
        for (var o = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
              return q(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return j(t).length;
            default:
              if (o) return r ? -1 : q(t).length;
              (e = ("" + e).toLowerCase()), (o = !0);
          }
      }
      function g(t, e, n) {
        var r = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return "";
        if ((n >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return T(this, e, n);
            case "utf8":
            case "utf-8":
              return R(this, e, n);
            case "ascii":
              return A(this, e, n);
            case "latin1":
            case "binary":
              return C(this, e, n);
            case "base64":
              return E(this, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I(this, e, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (r = !0);
          }
      }
      function v(t, e, n) {
        var r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function y(t, e, n, r, o) {
        if (0 === t.length) return -1;
        if (
          ("string" === typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          Z((n = +n)) && (n = o ? 0 : t.length - 1),
          n < 0 && (n = t.length + n),
          n >= t.length)
        ) {
          if (o) return -1;
          n = t.length - 1;
        } else if (n < 0) {
          if (!o) return -1;
          n = 0;
        }
        if (("string" === typeof e && (e = u.from(e, r)), u.isBuffer(e)))
          return 0 === e.length ? -1 : _(t, e, n, r, o);
        if ("number" === typeof e)
          return (
            (e &= 255),
            "function" === typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, n)
                : Uint8Array.prototype.lastIndexOf.call(t, e, n)
              : _(t, [e], n, r, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function _(t, e, n, r, o) {
        var i,
          s = 1,
          a = t.length,
          u = e.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (n /= 2);
        }
        function c(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (o) {
          var l = -1;
          for (i = n; i < a; i++)
            if (c(t, i) === c(e, -1 === l ? 0 : i - l)) {
              if ((-1 === l && (l = i), i - l + 1 === u)) return l * s;
            } else -1 !== l && (i -= i - l), (l = -1);
        } else
          for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
            for (var h = !0, f = 0; f < u; f++)
              if (c(t, i + f) !== c(e, f)) {
                h = !1;
                break;
              }
            if (h) return i;
          }
        return -1;
      }
      function w(t, e, n, r) {
        n = Number(n) || 0;
        var o = t.length - n;
        r ? (r = Number(r)) > o && (r = o) : (r = o);
        var i = e.length;
        r > i / 2 && (r = i / 2);
        for (var s = 0; s < r; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16);
          if (Z(a)) return s;
          t[n + s] = a;
        }
        return s;
      }
      function b(t, e, n, r) {
        return D(q(e, t.length - n), t, n, r);
      }
      function x(t, e, n, r) {
        return D(
          (function (t) {
            for (var e = [], n = 0; n < t.length; ++n)
              e.push(255 & t.charCodeAt(n));
            return e;
          })(e),
          t,
          n,
          r
        );
      }
      function M(t, e, n, r) {
        return D(j(e), t, n, r);
      }
      function k(t, e, n, r) {
        return D(
          (function (t, e) {
            for (
              var n, r, o, i = [], s = 0;
              s < t.length && !((e -= 2) < 0);
              ++s
            )
              (r = (n = t.charCodeAt(s)) >> 8),
                (o = n % 256),
                i.push(o),
                i.push(r);
            return i;
          })(e, t.length - n),
          t,
          n,
          r
        );
      }
      function E(t, e, n) {
        return 0 === e && n === t.length
          ? r.fromByteArray(t)
          : r.fromByteArray(t.slice(e, n));
      }
      function R(t, e, n) {
        n = Math.min(t.length, n);
        for (var r = [], o = e; o < n; ) {
          var i,
            s,
            a,
            u,
            c = t[o],
            l = null,
            h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + h <= n)
            switch (h) {
              case 1:
                c < 128 && (l = c);
                break;
              case 2:
                128 === (192 & (i = t[o + 1])) &&
                  (u = ((31 & c) << 6) | (63 & i)) > 127 &&
                  (l = u);
                break;
              case 3:
                (i = t[o + 1]),
                  (s = t[o + 2]),
                  128 === (192 & i) &&
                    128 === (192 & s) &&
                    (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (l = u);
                break;
              case 4:
                (i = t[o + 1]),
                  (s = t[o + 2]),
                  (a = t[o + 3]),
                  128 === (192 & i) &&
                    128 === (192 & s) &&
                    128 === (192 & a) &&
                    (u =
                      ((15 & c) << 18) |
                      ((63 & i) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (l = u);
            }
          null === l
            ? ((l = 65533), (h = 1))
            : l > 65535 &&
              ((l -= 65536),
              r.push(((l >>> 10) & 1023) | 55296),
              (l = 56320 | (1023 & l))),
            r.push(l),
            (o += h);
        }
        return (function (t) {
          var e = t.length;
          if (e <= S) return String.fromCharCode.apply(String, t);
          var n = "",
            r = 0;
          for (; r < e; )
            n += String.fromCharCode.apply(String, t.slice(r, (r += S)));
          return n;
        })(r);
      }
      (u.TYPED_ARRAY_SUPPORT = (function () {
        try {
          var t = new Uint8Array(1),
            e = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(e, Uint8Array.prototype),
            Object.setPrototypeOf(t, e),
            42 === t.foo()
          );
        } catch (n) {
          return !1;
        }
      })()),
        u.TYPED_ARRAY_SUPPORT ||
          "undefined" === typeof console ||
          "function" !== typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(u.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(u.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.byteOffset;
          },
        }),
        (u.poolSize = 8192),
        (u.from = function (t, e, n) {
          return c(t, e, n);
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function (t, e, n) {
          return (function (t, e, n) {
            return (
              l(t),
              t <= 0
                ? a(t)
                : void 0 !== e
                ? "string" === typeof n
                  ? a(t).fill(e, n)
                  : a(t).fill(e)
                : a(t)
            );
          })(t, e, n);
        }),
        (u.allocUnsafe = function (t) {
          return h(t);
        }),
        (u.allocUnsafeSlow = function (t) {
          return h(t);
        }),
        (u.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== u.prototype;
        }),
        (u.compare = function (t, e) {
          if (
            (H(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            H(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          for (
            var n = t.length, r = e.length, o = 0, i = Math.min(n, r);
            o < i;
            ++o
          )
            if (t[o] !== e[o]) {
              (n = t[o]), (r = e[o]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (u.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u.alloc(0);
          var n;
          if (void 0 === e)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var r = u.allocUnsafe(e),
            o = 0;
          for (n = 0; n < t.length; ++n) {
            var i = t[n];
            if (H(i, Uint8Array))
              o + i.length > r.length
                ? u.from(i).copy(r, o)
                : Uint8Array.prototype.set.call(r, i, o);
            else {
              if (!u.isBuffer(i))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              i.copy(r, o);
            }
            o += i.length;
          }
          return r;
        }),
        (u.byteLength = m),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) v(this, e, e + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4)
            v(this, e, e + 3), v(this, e + 1, e + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            v(this, e, e + 7),
              v(this, e + 1, e + 6),
              v(this, e + 2, e + 5),
              v(this, e + 3, e + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          var t = this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
            ? R(this, 0, t)
            : g.apply(this, arguments);
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function (t) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === u.compare(this, t);
        }),
        (u.prototype.inspect = function () {
          var t = "",
            n = e.h2;
          return (
            (t = this.toString("hex", 0, n)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > n && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        i && (u.prototype[i] = u.prototype.inspect),
        (u.prototype.compare = function (t, e, n, r, o) {
          if (
            (H(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = t ? t.length : 0),
            void 0 === r && (r = 0),
            void 0 === o && (o = this.length),
            e < 0 || n > t.length || r < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= o && e >= n) return 0;
          if (r >= o) return -1;
          if (e >= n) return 1;
          if (this === t) return 0;
          for (
            var i = (o >>>= 0) - (r >>>= 0),
              s = (n >>>= 0) - (e >>>= 0),
              a = Math.min(i, s),
              c = this.slice(r, o),
              l = t.slice(e, n),
              h = 0;
            h < a;
            ++h
          )
            if (c[h] !== l[h]) {
              (i = c[h]), (s = l[h]);
              break;
            }
          return i < s ? -1 : s < i ? 1 : 0;
        }),
        (u.prototype.includes = function (t, e, n) {
          return -1 !== this.indexOf(t, e, n);
        }),
        (u.prototype.indexOf = function (t, e, n) {
          return y(this, t, e, n, !0);
        }),
        (u.prototype.lastIndexOf = function (t, e, n) {
          return y(this, t, e, n, !1);
        }),
        (u.prototype.write = function (t, e, n, r) {
          if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
          else if (void 0 === n && "string" === typeof e)
            (r = e), (n = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e >>>= 0),
              isFinite(n)
                ? ((n >>>= 0), void 0 === r && (r = "utf8"))
                : ((r = n), (n = void 0));
          }
          var o = this.length - e;
          if (
            ((void 0 === n || n > o) && (n = o),
            (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var i = !1; ; )
            switch (r) {
              case "hex":
                return w(this, t, e, n);
              case "utf8":
              case "utf-8":
                return b(this, t, e, n);
              case "ascii":
              case "latin1":
              case "binary":
                return x(this, t, e, n);
              case "base64":
                return M(this, t, e, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return k(this, t, e, n);
              default:
                if (i) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (i = !0);
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var S = 4096;
      function A(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
        return r;
      }
      function C(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
        return r;
      }
      function T(t, e, n) {
        var r = t.length;
        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
        for (var o = "", i = e; i < n; ++i) o += F[t[i]];
        return o;
      }
      function I(t, e, n) {
        for (var r = t.slice(e, n), o = "", i = 0; i < r.length - 1; i += 2)
          o += String.fromCharCode(r[i] + 256 * r[i + 1]);
        return o;
      }
      function O(t, e, n) {
        if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function B(t, e, n, r, o, i) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length) throw new RangeError("Index out of range");
      }
      function P(t, e, n, r, o, i) {
        if (n + r > t.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function U(t, e, n, r, i) {
        return (
          (e = +e),
          (n >>>= 0),
          i || P(t, 0, n, 4),
          o.write(t, e, n, r, 23, 4),
          n + 4
        );
      }
      function L(t, e, n, r, i) {
        return (
          (e = +e),
          (n >>>= 0),
          i || P(t, 0, n, 8),
          o.write(t, e, n, r, 52, 8),
          n + 8
        );
      }
      (u.prototype.slice = function (t, e) {
        var n = this.length;
        (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          (e = void 0 === e ? n : ~~e) < 0
            ? (e += n) < 0 && (e = 0)
            : e > n && (e = n),
          e < t && (e = t);
        var r = this.subarray(t, e);
        return Object.setPrototypeOf(r, u.prototype), r;
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE =
          function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
              r += this[t + i] * o;
            return r;
          }),
        (u.prototype.readUintBE = u.prototype.readUIntBE =
          function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
            for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); )
              r += this[t + --e] * o;
            return r;
          }),
        (u.prototype.readUint8 = u.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || O(t, 1, this.length), this[t];
          }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || O(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || O(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || O(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || O(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (u.prototype.readIntLE = function (t, e, n) {
          (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
          for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
            r += this[t + i] * o;
          return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r;
        }),
        (u.prototype.readIntBE = function (t, e, n) {
          (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
          for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); )
            i += this[t + --r] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
        }),
        (u.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || O(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (u.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || O(t, 2, this.length);
          var n = this[t] | (this[t + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (u.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || O(t, 2, this.length);
          var n = this[t + 1] | (this[t] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (u.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || O(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || O(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (u.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || O(t, 4, this.length), o.read(this, t, !0, 23, 4)
          );
        }),
        (u.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || O(t, 4, this.length), o.read(this, t, !1, 23, 4)
          );
        }),
        (u.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || O(t, 8, this.length), o.read(this, t, !0, 52, 8)
          );
        }),
        (u.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || O(t, 8, this.length), o.read(this, t, !1, 52, 8)
          );
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE =
          function (t, e, n, r) {
            ((t = +t), (e >>>= 0), (n >>>= 0), r) ||
              B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1,
              i = 0;
            for (this[e] = 255 & t; ++i < n && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + n;
          }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE =
          function (t, e, n, r) {
            ((t = +t), (e >>>= 0), (n >>>= 0), r) ||
              B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1,
              i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + n;
          }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || B(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || B(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || B(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || B(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || B(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (u.prototype.writeIntLE = function (t, e, n, r) {
          if (((t = +t), (e >>>= 0), !r)) {
            var o = Math.pow(2, 8 * n - 1);
            B(this, t, e, n, o - 1, -o);
          }
          var i = 0,
            s = 1,
            a = 0;
          for (this[e] = 255 & t; ++i < n && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
              (this[e + i] = (((t / s) >> 0) - a) & 255);
          return e + n;
        }),
        (u.prototype.writeIntBE = function (t, e, n, r) {
          if (((t = +t), (e >>>= 0), !r)) {
            var o = Math.pow(2, 8 * n - 1);
            B(this, t, e, n, o - 1, -o);
          }
          var i = n - 1,
            s = 1,
            a = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
              (this[e + i] = (((t / s) >> 0) - a) & 255);
          return e + n;
        }),
        (u.prototype.writeInt8 = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (u.prototype.writeInt16LE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (u.prototype.writeInt16BE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (u.prototype.writeInt32LE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (u.prototype.writeInt32BE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || B(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (u.prototype.writeFloatLE = function (t, e, n) {
          return U(this, t, e, !0, n);
        }),
        (u.prototype.writeFloatBE = function (t, e, n) {
          return U(this, t, e, !1, n);
        }),
        (u.prototype.writeDoubleLE = function (t, e, n) {
          return L(this, t, e, !0, n);
        }),
        (u.prototype.writeDoubleBE = function (t, e, n) {
          return L(this, t, e, !1, n);
        }),
        (u.prototype.copy = function (t, e, n, r) {
          if (!u.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            t.length - e < r - n && (r = t.length - e + n);
          var o = r - n;
          return (
            this === t && "function" === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, n, r)
              : Uint8Array.prototype.set.call(t, this.subarray(n, r), e),
            o
          );
        }),
        (u.prototype.fill = function (t, e, n, r) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((r = e), (e = 0), (n = this.length))
                : "string" === typeof n && ((r = n), (n = this.length)),
              void 0 !== r && "string" !== typeof r)
            )
              throw new TypeError("encoding must be a string");
            if ("string" === typeof r && !u.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
            if (1 === t.length) {
              var o = t.charCodeAt(0);
              (("utf8" === r && o < 128) || "latin1" === r) && (t = o);
            }
          } else
            "number" === typeof t
              ? (t &= 255)
              : "boolean" === typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= e) return this;
          var i;
          if (
            ((e >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            t || (t = 0),
            "number" === typeof t)
          )
            for (i = e; i < n; ++i) this[i] = t;
          else {
            var s = u.isBuffer(t) ? t : u.from(t, r),
              a = s.length;
            if (0 === a)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < n - e; ++i) this[i + e] = s[i % a];
          }
          return this;
        });
      var N = /[^+/0-9A-Za-z-_]/g;
      function q(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
          if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((e -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return i;
      }
      function j(t) {
        return r.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(N, "")).length < 2)
              return "";
            for (; t.length % 4 !== 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function D(t, e, n, r) {
        for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o)
          e[o + n] = t[o];
        return o;
      }
      function H(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      function Z(t) {
        return t !== t;
      }
      var F = (function () {
        for (var t = "0123456789abcdef", e = new Array(256), n = 0; n < 16; ++n)
          for (var r = 16 * n, o = 0; o < 16; ++o) e[r + o] = t[n] + t[o];
        return e;
      })();
    },
    2229: function (t, e, n) {
      "use strict";
      var r = n(3071),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      t.exports = function (t, e) {
        var n,
          i,
          s,
          a,
          u,
          c,
          l = !1;
        e || (e = {}), (n = e.debug || !1);
        try {
          if (
            ((s = r()),
            (a = document.createRange()),
            (u = document.getSelection()),
            ((c = document.createElement("span")).textContent = t),
            (c.style.all = "unset"),
            (c.style.position = "fixed"),
            (c.style.top = 0),
            (c.style.clip = "rect(0, 0, 0, 0)"),
            (c.style.whiteSpace = "pre"),
            (c.style.webkitUserSelect = "text"),
            (c.style.MozUserSelect = "text"),
            (c.style.msUserSelect = "text"),
            (c.style.userSelect = "text"),
            c.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), e.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = o[e.format] || o.default;
                  window.clipboardData.setData(i, t);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(e.format, t);
              e.onCopy && (r.preventDefault(), e.onCopy(r.clipboardData));
            }),
            document.body.appendChild(c),
            a.selectNodeContents(c),
            u.addRange(a),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          l = !0;
        } catch (h) {
          n && console.error("unable to copy using execCommand: ", h),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(e.format || "text", t),
              e.onCopy && e.onCopy(window.clipboardData),
              (l = !0);
          } catch (h) {
            n && console.error("unable to copy using clipboardData: ", h),
              n && console.error("falling back to prompt"),
              (i = (function (t) {
                var e =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return t.replace(/#{\s*key\s*}/g, e);
              })(
                "message" in e ? e.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, t);
          }
        } finally {
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(a)
              : u.removeAllRanges()),
            c && document.body.removeChild(c),
            s();
        }
        return l;
      };
    },
    7605: function (t, e) {
      var n = "undefined" !== typeof self ? self : this,
        r = (function () {
          function t() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (t.prototype = n), new t();
        })();
      !(function (t) {
        !(function (e) {
          var n = "URLSearchParams" in t,
            r = "Symbol" in t && "iterator" in Symbol,
            o =
              "FileReader" in t &&
              "Blob" in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            i = "FormData" in t,
            s = "ArrayBuffer" in t;
          if (s)
            var a = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              u =
                ArrayBuffer.isView ||
                function (t) {
                  return t && a.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          function c(t) {
            if (
              ("string" !== typeof t && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
            )
              throw new TypeError("Invalid character in header field name");
            return t.toLowerCase();
          }
          function l(t) {
            return "string" !== typeof t && (t = String(t)), t;
          }
          function h(t) {
            var e = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              r &&
                (e[Symbol.iterator] = function () {
                  return e;
                }),
              e
            );
          }
          function f(t) {
            (this.map = {}),
              t instanceof f
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function p(t) {
            if (t.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
          }
          function d(t) {
            return new Promise(function (e, n) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  n(t.error);
                });
            });
          }
          function m(t) {
            var e = new FileReader(),
              n = d(e);
            return e.readAsArrayBuffer(t), n;
          }
          function g(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function v() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                var e;
                (this._bodyInit = t),
                  t
                    ? "string" === typeof t
                      ? (this._bodyText = t)
                      : o && Blob.prototype.isPrototypeOf(t)
                      ? (this._bodyBlob = t)
                      : i && FormData.prototype.isPrototypeOf(t)
                      ? (this._bodyFormData = t)
                      : n && URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : s && o && (e = t) && DataView.prototype.isPrototypeOf(e)
                      ? ((this._bodyArrayBuffer = g(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : s && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t))
                      ? (this._bodyArrayBuffer = g(t))
                      : (this._bodyText = t = Object.prototype.toString.call(t))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" === typeof t
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : n &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              o &&
                ((this.blob = function () {
                  var t = p(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? p(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(m);
                })),
              (this.text = function () {
                var t = p(this);
                if (t) return t;
                if (this._bodyBlob)
                  return (function (t) {
                    var e = new FileReader(),
                      n = d(e);
                    return e.readAsText(t), n;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (t) {
                      for (
                        var e = new Uint8Array(t),
                          n = new Array(e.length),
                          r = 0;
                        r < e.length;
                        r++
                      )
                        n[r] = String.fromCharCode(e[r]);
                      return n.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              i &&
                (this.formData = function () {
                  return this.text().then(w);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (f.prototype.append = function (t, e) {
            (t = c(t)), (e = l(e));
            var n = this.map[t];
            this.map[t] = n ? n + ", " + e : e;
          }),
            (f.prototype.delete = function (t) {
              delete this.map[c(t)];
            }),
            (f.prototype.get = function (t) {
              return (t = c(t)), this.has(t) ? this.map[t] : null;
            }),
            (f.prototype.has = function (t) {
              return this.map.hasOwnProperty(c(t));
            }),
            (f.prototype.set = function (t, e) {
              this.map[c(t)] = l(e);
            }),
            (f.prototype.forEach = function (t, e) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
            }),
            (f.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push(n);
                }),
                h(t)
              );
            }),
            (f.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                h(t)
              );
            }),
            (f.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push([n, e]);
                }),
                h(t)
              );
            }),
            r && (f.prototype[Symbol.iterator] = f.prototype.entries);
          var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function _(t, e) {
            var n = (e = e || {}).body;
            if (t instanceof _) {
              if (t.bodyUsed) throw new TypeError("Already read");
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new f(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                n ||
                  null == t._bodyInit ||
                  ((n = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials =
                e.credentials || this.credentials || "same-origin"),
              (!e.headers && this.headers) || (this.headers = new f(e.headers)),
              (this.method = (function (t) {
                var e = t.toUpperCase();
                return y.indexOf(e) > -1 ? e : t;
              })(e.method || this.method || "GET")),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && n)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n);
          }
          function w(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split("&")
                .forEach(function (t) {
                  if (t) {
                    var n = t.split("="),
                      r = n.shift().replace(/\+/g, " "),
                      o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o));
                  }
                }),
              e
            );
          }
          function b(t) {
            var e = new f();
            return (
              t
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (t) {
                  var n = t.split(":"),
                    r = n.shift().trim();
                  if (r) {
                    var o = n.join(":").trim();
                    e.append(r, o);
                  }
                }),
              e
            );
          }
          function x(t, e) {
            e || (e = {}),
              (this.type = "default"),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in e ? e.statusText : "OK"),
              (this.headers = new f(e.headers)),
              (this.url = e.url || ""),
              this._initBody(t);
          }
          (_.prototype.clone = function () {
            return new _(this, { body: this._bodyInit });
          }),
            v.call(_.prototype),
            v.call(x.prototype),
            (x.prototype.clone = function () {
              return new x(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new f(this.headers),
                url: this.url,
              });
            }),
            (x.error = function () {
              var t = new x(null, { status: 0, statusText: "" });
              return (t.type = "error"), t;
            });
          var M = [301, 302, 303, 307, 308];
          (x.redirect = function (t, e) {
            if (-1 === M.indexOf(e))
              throw new RangeError("Invalid status code");
            return new x(null, { status: e, headers: { location: t } });
          }),
            (e.DOMException = t.DOMException);
          try {
            new e.DOMException();
          } catch (E) {
            (e.DOMException = function (t, e) {
              (this.message = t), (this.name = e);
              var n = Error(t);
              this.stack = n.stack;
            }),
              (e.DOMException.prototype = Object.create(Error.prototype)),
              (e.DOMException.prototype.constructor = e.DOMException);
          }
          function k(t, n) {
            return new Promise(function (r, i) {
              var s = new _(t, n);
              if (s.signal && s.signal.aborted)
                return i(new e.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function u() {
                a.abort();
              }
              (a.onload = function () {
                var t = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: b(a.getAllResponseHeaders() || ""),
                };
                t.url =
                  "responseURL" in a
                    ? a.responseURL
                    : t.headers.get("X-Request-URL");
                var e = "response" in a ? a.response : a.responseText;
                r(new x(e, t));
              }),
                (a.onerror = function () {
                  i(new TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                  i(new TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                  i(new e.DOMException("Aborted", "AbortError"));
                }),
                a.open(s.method, s.url, !0),
                "include" === s.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === s.credentials && (a.withCredentials = !1),
                "responseType" in a && o && (a.responseType = "blob"),
                s.headers.forEach(function (t, e) {
                  a.setRequestHeader(e, t);
                }),
                s.signal &&
                  (s.signal.addEventListener("abort", u),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      s.signal.removeEventListener("abort", u);
                  })),
                a.send("undefined" === typeof s._bodyInit ? null : s._bodyInit);
            });
          }
          (k.polyfill = !0),
            t.fetch ||
              ((t.fetch = k),
              (t.Headers = f),
              (t.Request = _),
              (t.Response = x)),
            (e.Headers = f),
            (e.Request = _),
            (e.Response = x),
            (e.fetch = k),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })({});
      })(r),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill;
      var o = r;
      ((e = o.fetch).default = o.fetch),
        (e.fetch = o.fetch),
        (e.Headers = o.Headers),
        (e.Request = o.Request),
        (e.Response = o.Response),
        (t.exports = e);
    },
    8271: function (t) {
      "use strict";
      var e = "%[a-f0-9]{2}",
        n = new RegExp(e, "gi"),
        r = new RegExp("(" + e + ")+", "gi");
      function o(t, e) {
        try {
          return decodeURIComponent(t.join(""));
        } catch (i) {}
        if (1 === t.length) return t;
        e = e || 1;
        var n = t.slice(0, e),
          r = t.slice(e);
        return Array.prototype.concat.call([], o(n), o(r));
      }
      function i(t) {
        try {
          return decodeURIComponent(t);
        } catch (i) {
          for (var e = t.match(n), r = 1; r < e.length; r++)
            e = (t = o(e, r).join("")).match(n);
          return t;
        }
      }
      t.exports = function (t) {
        if ("string" !== typeof t)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof t +
              "`"
          );
        try {
          return (t = t.replace(/\+/g, " ")), decodeURIComponent(t);
        } catch (e) {
          return (function (t) {
            for (
              var n = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" },
                o = r.exec(t);
              o;

            ) {
              try {
                n[o[0]] = decodeURIComponent(o[0]);
              } catch (e) {
                var s = i(o[0]);
                s !== o[0] && (n[o[0]] = s);
              }
              o = r.exec(t);
            }
            n["%C2"] = "\ufffd";
            for (var a = Object.keys(n), u = 0; u < a.length; u++) {
              var c = a[u];
              t = t.replace(new RegExp(c, "g"), n[c]);
            }
            return t;
          })(t);
        }
      };
    },
    1664: function (t) {
      "use strict";
      var e = {
        single_source_shortest_paths: function (t, n, r) {
          var o = {},
            i = {};
          i[n] = 0;
          var s,
            a,
            u,
            c,
            l,
            h,
            f,
            p = e.PriorityQueue.make();
          for (p.push(n, 0); !p.empty(); )
            for (u in ((a = (s = p.pop()).value),
            (c = s.cost),
            (l = t[a] || {})))
              l.hasOwnProperty(u) &&
                ((h = c + l[u]),
                (f = i[u]),
                ("undefined" === typeof i[u] || f > h) &&
                  ((i[u] = h), p.push(u, h), (o[u] = a)));
          if ("undefined" !== typeof r && "undefined" === typeof i[r]) {
            var d = ["Could not find a path from ", n, " to ", r, "."].join("");
            throw new Error(d);
          }
          return o;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var n = [], r = e; r; ) n.push(r), t[r], (r = t[r]);
          return n.reverse(), n;
        },
        find_path: function (t, n, r) {
          var o = e.single_source_shortest_paths(t, n, r);
          return e.extract_shortest_path_from_predecessor_list(o, r);
        },
        PriorityQueue: {
          make: function (t) {
            var n,
              r = e.PriorityQueue,
              o = {};
            for (n in ((t = t || {}), r)) r.hasOwnProperty(n) && (o[n] = r[n]);
            return (o.queue = []), (o.sorter = t.sorter || r.default_sorter), o;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            var n = { value: t, cost: e };
            this.queue.push(n), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = e;
    },
    548: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function i(t, e, r, i, s) {
        if ("function" !== typeof r)
          throw new TypeError("The listener must be a function");
        var a = new o(r, i || t, s),
          u = n ? n + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 === --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function a() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (a.prototype.eventNames = function () {
          var t,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (t = this._events))
            e.call(t, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(t))
            : o;
        }),
        (a.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, s = new Array(i); o < i; o++)
            s[o] = r[o].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (a.prototype.emit = function (t, e, r, o, i, s) {
          var a = n ? n + t : t;
          if (!this._events[a]) return !1;
          var u,
            c,
            l = this._events[a],
            h = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), h)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, e), !0;
              case 3:
                return l.fn.call(l.context, e, r), !0;
              case 4:
                return l.fn.call(l.context, e, r, o), !0;
              case 5:
                return l.fn.call(l.context, e, r, o, i), !0;
              case 6:
                return l.fn.call(l.context, e, r, o, i, s), !0;
            }
            for (c = 1, u = new Array(h - 1); c < h; c++)
              u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
          } else {
            var f,
              p = l.length;
            for (c = 0; c < p; c++)
              switch (
                (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h)
              ) {
                case 1:
                  l[c].fn.call(l[c].context);
                  break;
                case 2:
                  l[c].fn.call(l[c].context, e);
                  break;
                case 3:
                  l[c].fn.call(l[c].context, e, r);
                  break;
                case 4:
                  l[c].fn.call(l[c].context, e, r, o);
                  break;
                default:
                  if (!u)
                    for (f = 1, u = new Array(h - 1); f < h; f++)
                      u[f - 1] = arguments[f];
                  l[c].fn.apply(l[c].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, n) {
          return i(this, t, e, n, !1);
        }),
        (a.prototype.once = function (t, e, n) {
          return i(this, t, e, n, !0);
        }),
        (a.prototype.removeListener = function (t, e, r, o) {
          var i = n ? n + t : t;
          if (!this._events[i]) return this;
          if (!e) return s(this, i), this;
          var a = this._events[i];
          if (a.fn)
            a.fn !== e ||
              (o && !a.once) ||
              (r && a.context !== r) ||
              s(this, i);
          else {
            for (var u = 0, c = [], l = a.length; u < l; u++)
              (a[u].fn !== e ||
                (o && !a[u].once) ||
                (r && a[u].context !== r)) &&
                c.push(a[u]);
            c.length
              ? (this._events[i] = 1 === c.length ? c[0] : c)
              : s(this, i);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && s(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = n),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    545: function (t, e) {
      (e.read = function (t, e, n, r, o) {
        var i,
          s,
          a = 8 * o - r - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          l = -7,
          h = n ? o - 1 : 0,
          f = n ? -1 : 1,
          p = t[e + h];
        for (
          h += f, i = p & ((1 << -l) - 1), p >>= -l, l += a;
          l > 0;
          i = 256 * i + t[e + h], h += f, l -= 8
        );
        for (
          s = i & ((1 << -l) - 1), i >>= -l, l += r;
          l > 0;
          s = 256 * s + t[e + h], h += f, l -= 8
        );
        if (0 === i) i = 1 - c;
        else {
          if (i === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, r)), (i -= c);
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - r);
      }),
        (e.write = function (t, e, n, r, o, i) {
          var s,
            a,
            u,
            c = 8 * i - o - 1,
            l = (1 << c) - 1,
            h = l >> 1,
            f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : i - 1,
            d = r ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = l))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (e += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 &&
                    (s++, (u /= 2)),
                  s + h >= l
                    ? ((a = 0), (s = l))
                    : s + h >= 1
                    ? ((a = (e * u - 1) * Math.pow(2, o)), (s += h))
                    : ((a = e * Math.pow(2, h - 1) * Math.pow(2, o)), (s = 0)));
            o >= 8;
            t[n + p] = 255 & a, p += d, a /= 256, o -= 8
          );
          for (
            s = (s << o) | a, c += o;
            c > 0;
            t[n + p] = 255 & s, p += d, s /= 256, c -= 8
          );
          t[n + p - d] |= 128 * m;
        });
    },
    6170: function (t) {
      (t.exports = r), (r.strict = o), (r.loose = i);
      var e = Object.prototype.toString,
        n = {
          "[object Int8Array]": !0,
          "[object Int16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Uint16Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0,
        };
      function r(t) {
        return o(t) || i(t);
      }
      function o(t) {
        return (
          t instanceof Int8Array ||
          t instanceof Int16Array ||
          t instanceof Int32Array ||
          t instanceof Uint8Array ||
          t instanceof Uint8ClampedArray ||
          t instanceof Uint16Array ||
          t instanceof Uint32Array ||
          t instanceof Float32Array ||
          t instanceof Float64Array
        );
      }
      function i(t) {
        return n[e.call(t)];
      }
    },
    7812: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Children: function () {
            return yt;
          },
          Component: function () {
            return _;
          },
          Fragment: function () {
            return y;
          },
          PureComponent: function () {
            return pt;
          },
          Suspense: function () {
            return bt;
          },
          SuspenseList: function () {
            return kt;
          },
          cloneElement: function () {
            return Dt;
          },
          createContext: function () {
            return q;
          },
          createElement: function () {
            return m;
          },
          createFactory: function () {
            return qt;
          },
          createPortal: function () {
            return At;
          },
          createRef: function () {
            return v;
          },
          default: function () {
            return Jt;
          },
          findDOMNode: function () {
            return Zt;
          },
          forwardRef: function () {
            return gt;
          },
          hydrate: function () {
            return Ot;
          },
          isValidElement: function () {
            return jt;
          },
          lazy: function () {
            return Mt;
          },
          memo: function () {
            return dt;
          },
          render: function () {
            return It;
          },
          unmountComponentAtNode: function () {
            return Ht;
          },
          unstable_batchedUpdates: function () {
            return Ft;
          },
          useCallback: function () {
            return nt;
          },
          useContext: function () {
            return rt;
          },
          useDebugValue: function () {
            return ot;
          },
          useEffect: function () {
            return $;
          },
          useErrorBoundary: function () {
            return it;
          },
          useImperativeHandle: function () {
            return tt;
          },
          useLayoutEffect: function () {
            return X;
          },
          useMemo: function () {
            return et;
          },
          useReducer: function () {
            return Q;
          },
          useRef: function () {
            return G;
          },
          useState: function () {
            return V;
          },
          version: function () {
            return Nt;
          },
        });
      var r,
        o,
        i,
        s,
        a,
        u,
        c,
        l = {},
        h = [],
        f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function p(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function d(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function m(t, e, n) {
        var r,
          o = arguments,
          i = {};
        for (r in e) "key" !== r && "ref" !== r && (i[r] = e[r]);
        if (arguments.length > 3)
          for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
        if (
          (null != n && (i.children = n),
          "function" == typeof t && null != t.defaultProps)
        )
          for (r in t.defaultProps)
            void 0 === i[r] && (i[r] = t.defaultProps[r]);
        return g(t, i, e && e.key, e && e.ref, null);
      }
      function g(t, e, n, o, i) {
        var s = {
          type: t,
          props: e,
          key: n,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: i,
        };
        return null == i && (s.__v = s), r.vnode && r.vnode(s), s;
      }
      function v() {
        return {};
      }
      function y(t) {
        return t.children;
      }
      function _(t, e) {
        (this.props = t), (this.context = e);
      }
      function w(t, e) {
        if (null == e) return t.__ ? w(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? w(t) : null;
      }
      function b(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return b(t);
        }
      }
      function x(t) {
        ((!t.__d && (t.__d = !0) && o.push(t) && !i++) ||
          a !== r.debounceRendering) &&
          ((a = r.debounceRendering) || s)(M);
      }
      function M() {
        for (var t; (i = o.length); )
          (t = o.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (o = []),
            t.some(function (t) {
              var e, n, r, o, i, s, a;
              t.__d &&
                ((s = (i = (e = t).__v).__e),
                (a = e.__P) &&
                  ((n = []),
                  ((r = p({}, i)).__v = r),
                  (o = C(
                    a,
                    i,
                    r,
                    e.__n,
                    void 0 !== a.ownerSVGElement,
                    null,
                    n,
                    null == s ? w(i) : s
                  )),
                  T(n, i),
                  o != s && b(i)));
            });
      }
      function k(t, e, n, r, o, i, s, a, u) {
        var c,
          f,
          p,
          m,
          g,
          v,
          y,
          _ = (n && n.__k) || h,
          b = _.length;
        if (
          (a == l && (a = null != i ? i[0] : b ? w(n, 0) : null),
          (c = 0),
          (e.__k = E(e.__k, function (n) {
            if (null != n) {
              if (
                ((n.__ = e),
                (n.__b = e.__b + 1),
                null === (p = _[c]) ||
                  (p && n.key == p.key && n.type === p.type))
              )
                _[c] = void 0;
              else
                for (f = 0; f < b; f++) {
                  if ((p = _[f]) && n.key == p.key && n.type === p.type) {
                    _[f] = void 0;
                    break;
                  }
                  p = null;
                }
              if (
                ((m = C(t, n, (p = p || l), r, o, i, s, a, u)),
                (f = n.ref) &&
                  p.ref != f &&
                  (y || (y = []),
                  p.ref && y.push(p.ref, null, n),
                  y.push(f, n.__c || m, n)),
                null != m)
              ) {
                var h;
                if ((null == v && (v = m), void 0 !== n.__d))
                  (h = n.__d), (n.__d = void 0);
                else if (i == p || m != a || null == m.parentNode) {
                  t: if (null == a || a.parentNode !== t)
                    t.appendChild(m), (h = null);
                  else {
                    for (g = a, f = 0; (g = g.nextSibling) && f < b; f += 2)
                      if (g == m) break t;
                    t.insertBefore(m, a), (h = a);
                  }
                  "option" == e.type && (t.value = "");
                }
                (a = void 0 !== h ? h : m.nextSibling),
                  "function" == typeof e.type && (e.__d = a);
              } else a && p.__e == a && a.parentNode != t && (a = w(p));
            }
            return c++, n;
          })),
          (e.__e = v),
          null != i && "function" != typeof e.type)
        )
          for (c = i.length; c--; ) null != i[c] && d(i[c]);
        for (c = b; c--; ) null != _[c] && B(_[c], _[c]);
        if (y) for (c = 0; c < y.length; c++) O(y[c], y[++c], y[++c]);
      }
      function E(t, e, n) {
        if ((null == n && (n = []), null == t || "boolean" == typeof t))
          e && n.push(e(null));
        else if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) E(t[r], e, n);
        else
          n.push(
            e
              ? e(
                  "string" == typeof t || "number" == typeof t
                    ? g(null, t, null, null, t)
                    : null != t.__e || null != t.__c
                    ? g(t.type, t.props, t.key, null, t.__v)
                    : t
                )
              : t
          );
        return n;
      }
      function R(t, e, n) {
        "-" === e[0]
          ? t.setProperty(e, n)
          : (t[e] =
              "number" == typeof n && !1 === f.test(e)
                ? n + "px"
                : null == n
                ? ""
                : n);
      }
      function S(t, e, n, r, o) {
        var i, s, a, u, c;
        if (
          (o
            ? "className" === e && (e = "class")
            : "class" === e && (e = "className"),
          "style" === e)
        )
          if (((i = t.style), "string" == typeof n)) i.cssText = n;
          else {
            if (("string" == typeof r && ((i.cssText = ""), (r = null)), r))
              for (u in r) (n && u in n) || R(i, u, "");
            if (n) for (c in n) (r && n[c] === r[c]) || R(i, c, n[c]);
          }
        else
          "o" === e[0] && "n" === e[1]
            ? ((s = e !== (e = e.replace(/Capture$/, ""))),
              (a = e.toLowerCase()),
              (e = (a in t ? a : e).slice(2)),
              n
                ? (r || t.addEventListener(e, A, s),
                  ((t.l || (t.l = {}))[e] = n))
                : t.removeEventListener(e, A, s))
            : "list" !== e &&
              "tagName" !== e &&
              "form" !== e &&
              "type" !== e &&
              "size" !== e &&
              !o &&
              e in t
            ? (t[e] = null == n ? "" : n)
            : "function" != typeof n &&
              "dangerouslySetInnerHTML" !== e &&
              (e !== (e = e.replace(/^xlink:?/, ""))
                ? null == n || !1 === n
                  ? t.removeAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      e.toLowerCase()
                    )
                  : t.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      e.toLowerCase(),
                      n
                    )
                : null == n || (!1 === n && !/^ar/.test(e))
                ? t.removeAttribute(e)
                : t.setAttribute(e, n));
      }
      function A(t) {
        this.l[t.type](r.event ? r.event(t) : t);
      }
      function C(t, e, n, o, i, s, a, u, c) {
        var l,
          h,
          f,
          d,
          m,
          g,
          v,
          w,
          b,
          x,
          M = e.type;
        if (void 0 !== e.constructor) return null;
        (l = r.__b) && l(e);
        try {
          t: if ("function" == typeof M) {
            if (
              ((w = e.props),
              (b = (l = M.contextType) && o[l.__c]),
              (x = l ? (b ? b.props.value : l.__) : o),
              n.__c
                ? (v = (h = e.__c = n.__c).__ = h.__E)
                : ("prototype" in M && M.prototype.render
                    ? (e.__c = h = new M(w, x))
                    : ((e.__c = h = new _(w, x)),
                      (h.constructor = M),
                      (h.render = P)),
                  b && b.sub(h),
                  (h.props = w),
                  h.state || (h.state = {}),
                  (h.context = x),
                  (h.__n = o),
                  (f = h.__d = !0),
                  (h.__h = [])),
              null == h.__s && (h.__s = h.state),
              null != M.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = p({}, h.__s)),
                p(h.__s, M.getDerivedStateFromProps(w, h.__s))),
              (d = h.props),
              (m = h.state),
              f)
            )
              null == M.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == M.getDerivedStateFromProps &&
                  w !== d &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(w, x),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(w, h.__s, x)) ||
                  (e.__v === n.__v && !h.__))
              ) {
                for (
                  h.props = w,
                    h.state = h.__s,
                    e.__v !== n.__v && (h.__d = !1),
                    h.__v = e,
                    e.__e = n.__e,
                    e.__k = n.__k,
                    h.__h.length && a.push(h),
                    l = 0;
                  l < e.__k.length;
                  l++
                )
                  e.__k[l] && (e.__k[l].__ = e);
                break t;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(w, h.__s, x),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(d, m, g);
                  });
            }
            (h.context = x),
              (h.props = w),
              (h.state = h.__s),
              (l = r.__r) && l(e),
              (h.__d = !1),
              (h.__v = e),
              (h.__P = t),
              (l = h.render(h.props, h.state, h.context)),
              (e.__k =
                null != l && l.type == y && null == l.key
                  ? l.props.children
                  : Array.isArray(l)
                  ? l
                  : [l]),
              null != h.getChildContext &&
                (o = p(p({}, o), h.getChildContext())),
              f ||
                null == h.getSnapshotBeforeUpdate ||
                (g = h.getSnapshotBeforeUpdate(d, m)),
              k(t, e, n, o, i, s, a, u, c),
              (h.base = e.__e),
              h.__h.length && a.push(h),
              v && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == s && e.__v === n.__v
              ? ((e.__k = n.__k), (e.__e = n.__e))
              : (e.__e = I(n.__e, e, n, o, i, s, a, c));
          (l = r.diffed) && l(e);
        } catch (t) {
          (e.__v = null), r.__e(t, e, n);
        }
        return e.__e;
      }
      function T(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function I(t, e, n, r, o, i, s, a) {
        var u,
          c,
          f,
          p,
          d,
          m = n.props,
          g = e.props;
        if (((o = "svg" === e.type || o), null != i))
          for (u = 0; u < i.length; u++)
            if (
              null != (c = i[u]) &&
              ((null === e.type ? 3 === c.nodeType : c.localName === e.type) ||
                t == c)
            ) {
              (t = c), (i[u] = null);
              break;
            }
        if (null == t) {
          if (null === e.type) return document.createTextNode(g);
          (t = o
            ? document.createElementNS("http://www.w3.org/2000/svg", e.type)
            : document.createElement(e.type, g.is && { is: g.is })),
            (i = null),
            (a = !1);
        }
        if (null === e.type) m !== g && t.data != g && (t.data = g);
        else {
          if (
            (null != i && (i = h.slice.call(t.childNodes)),
            (f = (m = n.props || l).dangerouslySetInnerHTML),
            (p = g.dangerouslySetInnerHTML),
            !a)
          ) {
            if (m === l)
              for (m = {}, d = 0; d < t.attributes.length; d++)
                m[t.attributes[d].name] = t.attributes[d].value;
            (p || f) &&
              ((p && f && p.__html == f.__html) ||
                (t.innerHTML = (p && p.__html) || ""));
          }
          (function (t, e, n, r, o) {
            var i;
            for (i in n)
              "children" === i ||
                "key" === i ||
                i in e ||
                S(t, i, null, n[i], r);
            for (i in e)
              (o && "function" != typeof e[i]) ||
                "children" === i ||
                "key" === i ||
                "value" === i ||
                "checked" === i ||
                n[i] === e[i] ||
                S(t, i, e[i], n[i], r);
          })(t, g, m, o, a),
            p
              ? (e.__k = [])
              : ((e.__k = e.props.children),
                k(t, e, n, r, "foreignObject" !== e.type && o, i, s, l, a)),
            a ||
              ("value" in g &&
                void 0 !== (u = g.value) &&
                u !== t.value &&
                S(t, "value", u, m.value, !1),
              "checked" in g &&
                void 0 !== (u = g.checked) &&
                u !== t.checked &&
                S(t, "checked", u, m.checked, !1));
        }
        return t;
      }
      function O(t, e, n) {
        try {
          "function" == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function B(t, e, n) {
        var o, i, s;
        if (
          (r.unmount && r.unmount(t),
          (o = t.ref) && ((o.current && o.current !== t.__e) || O(o, null, e)),
          n || "function" == typeof t.type || (n = null != (i = t.__e)),
          (t.__e = t.__d = void 0),
          null != (o = t.__c))
        ) {
          if (o.componentWillUnmount)
            try {
              o.componentWillUnmount();
            } catch (t) {
              r.__e(t, e);
            }
          o.base = o.__P = null;
        }
        if ((o = t.__k)) for (s = 0; s < o.length; s++) o[s] && B(o[s], e, n);
        null != i && d(i);
      }
      function P(t, e, n) {
        return this.constructor(t, n);
      }
      function U(t, e, n) {
        var o, i, s;
        r.__ && r.__(t, e),
          (i = (o = n === u) ? null : (n && n.__k) || e.__k),
          (t = m(y, null, [t])),
          (s = []),
          C(
            e,
            ((o ? e : n || e).__k = t),
            i || l,
            l,
            void 0 !== e.ownerSVGElement,
            n && !o ? [n] : i ? null : h.slice.call(e.childNodes),
            s,
            n || l,
            o
          ),
          T(s, t);
      }
      function L(t, e) {
        U(t, e, u);
      }
      function N(t, e) {
        var n, r;
        for (r in ((e = p(p({}, t.props), e)),
        arguments.length > 2 && (e.children = h.slice.call(arguments, 2)),
        (n = {}),
        e))
          "key" !== r && "ref" !== r && (n[r] = e[r]);
        return g(t.type, n, e.key || t.key, e.ref || t.ref, null);
      }
      function q(t) {
        var e = {},
          n = {
            __c: "__cC" + c++,
            __: t,
            Consumer: function (t, e) {
              return t.children(e);
            },
            Provider: function (t) {
              var r,
                o = this;
              return (
                this.getChildContext ||
                  ((r = []),
                  (this.getChildContext = function () {
                    return (e[n.__c] = o), e;
                  }),
                  (this.shouldComponentUpdate = function (t) {
                    o.props.value !== t.value &&
                      r.some(function (e) {
                        (e.context = t.value), x(e);
                      });
                  }),
                  (this.sub = function (t) {
                    r.push(t);
                    var e = t.componentWillUnmount;
                    t.componentWillUnmount = function () {
                      r.splice(r.indexOf(t), 1), e && e.call(t);
                    };
                  })),
                t.children
              );
            },
          };
        return (n.Consumer.contextType = n), (n.Provider.__ = n), n;
      }
      (r = {
        __e: function (t, e) {
          for (var n, r; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  (n.constructor &&
                    null != n.constructor.getDerivedStateFromError &&
                    ((r = !0),
                    n.setState(n.constructor.getDerivedStateFromError(t))),
                  null != n.componentDidCatch &&
                    ((r = !0), n.componentDidCatch(t)),
                  r)
                )
                  return x((n.__E = n));
              } catch (e) {
                t = e;
              }
          throw t;
        },
      }),
        (_.prototype.setState = function (t, e) {
          var n;
          (n =
            this.__s !== this.state
              ? this.__s
              : (this.__s = p({}, this.state))),
            "function" == typeof t && (t = t(n, this.props)),
            t && p(n, t),
            null != t && this.__v && (e && this.__h.push(e), x(this));
        }),
        (_.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), x(this));
        }),
        (_.prototype.render = y),
        (o = []),
        (i = 0),
        (s =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = l),
        (c = 0);
      var j,
        D,
        H,
        Z = 0,
        F = [],
        J = r.__r,
        z = r.diffed,
        W = r.__c,
        K = r.unmount;
      function Y(t, e) {
        r.__h && r.__h(D, t, Z || e), (Z = 0);
        var n = D.__H || (D.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({}), n.__[t];
      }
      function V(t) {
        return (Z = 1), Q(lt, t);
      }
      function Q(t, e, n) {
        var r = Y(j++, 2);
        return (
          r.__c ||
            ((r.__c = D),
            (r.__ = [
              n ? n(e) : lt(void 0, e),
              function (e) {
                var n = t(r.__[0], e);
                r.__[0] !== n && ((r.__[0] = n), r.__c.setState({}));
              },
            ])),
          r.__
        );
      }
      function $(t, e) {
        var n = Y(j++, 3);
        !r.__s && ct(n.__H, e) && ((n.__ = t), (n.__H = e), D.__H.__h.push(n));
      }
      function X(t, e) {
        var n = Y(j++, 4);
        !r.__s && ct(n.__H, e) && ((n.__ = t), (n.__H = e), D.__h.push(n));
      }
      function G(t) {
        return (
          (Z = 5),
          et(function () {
            return { current: t };
          }, [])
        );
      }
      function tt(t, e, n) {
        (Z = 6),
          X(
            function () {
              "function" == typeof t ? t(e()) : t && (t.current = e());
            },
            null == n ? n : n.concat(t)
          );
      }
      function et(t, e) {
        var n = Y(j++, 7);
        return ct(n.__H, e) ? ((n.__H = e), (n.__h = t), (n.__ = t())) : n.__;
      }
      function nt(t, e) {
        return (
          (Z = 8),
          et(function () {
            return t;
          }, e)
        );
      }
      function rt(t) {
        var e = D.context[t.__c],
          n = Y(j++, 9);
        return (
          (n.__c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(D)), e.props.value) : t.__
        );
      }
      function ot(t, e) {
        r.useDebugValue && r.useDebugValue(e ? e(t) : t);
      }
      function it(t) {
        var e = Y(j++, 10),
          n = V();
        return (
          (e.__ = t),
          D.componentDidCatch ||
            (D.componentDidCatch = function (t) {
              e.__ && e.__(t), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function st() {
        F.some(function (t) {
          if (t.__P)
            try {
              t.__H.__h.forEach(at), t.__H.__h.forEach(ut), (t.__H.__h = []);
            } catch (o) {
              return (t.__H.__h = []), r.__e(o, t.__v), !0;
            }
        }),
          (F = []);
      }
      function at(t) {
        t.t && t.t();
      }
      function ut(t) {
        var e = t.__();
        "function" == typeof e && (t.t = e);
      }
      function ct(t, e) {
        return (
          !t ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function lt(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
      function ht(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function ft(t, e) {
        for (var n in t) if ("__source" !== n && !(n in e)) return !0;
        for (var r in e) if ("__source" !== r && t[r] !== e[r]) return !0;
        return !1;
      }
      (r.__r = function (t) {
        J && J(t),
          (j = 0),
          (D = t.__c).__H &&
            (D.__H.__h.forEach(at), D.__H.__h.forEach(ut), (D.__H.__h = []));
      }),
        (r.diffed = function (t) {
          z && z(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            n &&
              n.__h.length &&
              ((1 !== F.push(e) && H === r.requestAnimationFrame) ||
                (
                  (H = r.requestAnimationFrame) ||
                  function (t) {
                    var e,
                      n = function () {
                        clearTimeout(r), cancelAnimationFrame(e), setTimeout(t);
                      },
                      r = setTimeout(n, 100);
                    "undefined" != typeof window &&
                      (e = requestAnimationFrame(n));
                  }
                )(st));
          }
        }),
        (r.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(at),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || ut(t);
                }));
            } catch (a) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                r.__e(a, t.__v);
            }
          }),
            W && W(t, e);
        }),
        (r.unmount = function (t) {
          K && K(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            if (n)
              try {
                n.__.forEach(function (t) {
                  return t.t && t.t();
                });
              } catch (t) {
                r.__e(t, e.__v);
              }
          }
        });
      var pt = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return ((n = t.call(this, e) || this).isPureReactComponent = !0), n;
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          (r.prototype.shouldComponentUpdate = function (t, e) {
            return ft(this.props, t) || ft(this.state, e);
          }),
          r
        );
      })(_);
      function dt(t, e) {
        function n(t) {
          var n = this.props.ref,
            r = n == t.ref;
          return (
            !r && n && (n.call ? n(null) : (n.current = null)),
            e ? !e(this.props, t) || !r : ft(this.props, t)
          );
        }
        function r(e) {
          return (this.shouldComponentUpdate = n), m(t, ht({}, e));
        }
        return (
          (r.prototype.isReactComponent = !0),
          (r.displayName = "Memo(" + (t.displayName || t.name) + ")"),
          (r.t = !0),
          r
        );
      }
      var mt = r.__b;
      function gt(t) {
        function e(e) {
          var n = ht({}, e);
          return delete n.ref, t(n, e.ref);
        }
        return (
          (e.prototype.isReactComponent = e.t = !0),
          (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
          e
        );
      }
      r.__b = function (t) {
        t.type && t.type.t && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
          mt && mt(t);
      };
      var vt = function (t, e) {
          return t
            ? E(t).reduce(function (t, n, r) {
                return t.concat(e(n, r));
              }, [])
            : null;
        },
        yt = {
          map: vt,
          forEach: vt,
          count: function (t) {
            return t ? E(t).length : 0;
          },
          only: function (t) {
            if (1 !== (t = E(t)).length)
              throw new Error("Children.only() expects only one child.");
            return t[0];
          },
          toArray: E,
        },
        _t = r.__e;
      function wt(t) {
        return (
          t && (((t = ht({}, t)).__c = null), (t.__k = t.__k && t.__k.map(wt))),
          t
        );
      }
      function bt() {
        (this.__u = 0), (this.o = null), (this.__b = null);
      }
      function xt(t) {
        var e = t.__.__c;
        return e && e.u && e.u(t);
      }
      function Mt(t) {
        var e, n, r;
        function o(o) {
          if (
            (e ||
              (e = t()).then(
                function (t) {
                  n = t.default || t;
                },
                function (t) {
                  r = t;
                }
              ),
            r)
          )
            throw r;
          if (!n) throw e;
          return m(n, o);
        }
        return (o.displayName = "Lazy"), (o.t = !0), o;
      }
      function kt() {
        (this.i = null), (this.l = null);
      }
      (r.__e = function (t, e, n) {
        if (t.then)
          for (var r, o = e; (o = o.__); )
            if ((r = o.__c) && r.__c) return r.__c(t, e.__c);
        _t(t, e, n);
      }),
        ((bt.prototype = new _()).__c = function (t, e) {
          var n = this;
          null == n.o && (n.o = []), n.o.push(e);
          var r = xt(n.__v),
            o = !1,
            i = function () {
              o || ((o = !0), r ? r(s) : s());
            };
          (e.__c = e.componentWillUnmount),
            (e.componentWillUnmount = function () {
              i(), e.__c && e.__c();
            });
          var s = function () {
            var t;
            if (!--n.__u)
              for (
                n.__v.__k[0] = n.state.u, n.setState({ u: (n.__b = null) });
                (t = n.o.pop());

              )
                t.forceUpdate();
          };
          n.__u++ || n.setState({ u: (n.__b = n.__v.__k[0]) }), t.then(i, i);
        }),
        (bt.prototype.render = function (t, e) {
          return (
            this.__b && ((this.__v.__k[0] = wt(this.__b)), (this.__b = null)),
            [m(_, null, e.u ? null : t.children), e.u && t.fallback]
          );
        });
      var Et = function (t, e, n) {
        if (
          (++n[1] === n[0] && t.l.delete(e),
          t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
        )
          for (n = t.i; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            t.i = n = n[2];
          }
      };
      ((kt.prototype = new _()).u = function (t) {
        var e = this,
          n = xt(e.__v),
          r = e.l.get(t);
        return (
          r[0]++,
          function (o) {
            var i = function () {
              e.props.revealOrder ? (r.push(o), Et(e, t, r)) : o();
            };
            n ? n(i) : i();
          }
        );
      }),
        (kt.prototype.render = function (t) {
          (this.i = null), (this.l = new Map());
          var e = E(t.children);
          t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
          for (var n = e.length; n--; )
            this.l.set(e[n], (this.i = [1, 0, this.i]));
          return t.children;
        }),
        (kt.prototype.componentDidUpdate = kt.prototype.componentDidMount =
          function () {
            var t = this;
            t.l.forEach(function (e, n) {
              Et(t, n, e);
            });
          });
      var Rt = (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.getChildContext = function () {
            return this.props.context;
          }),
          (e.render = function (t) {
            return t.children;
          }),
          t
        );
      })();
      function St(t) {
        var e = this,
          n = t.container,
          r = m(Rt, { context: e.context }, t.vnode);
        return (
          e.s &&
            e.s !== n &&
            (e.v.parentNode && e.s.removeChild(e.v), B(e.h), (e.p = !1)),
          t.vnode
            ? e.p
              ? ((n.__k = e.__k), U(r, n), (e.__k = n.__k))
              : ((e.v = document.createTextNode("")),
                L("", n),
                n.appendChild(e.v),
                (e.p = !0),
                (e.s = n),
                U(r, n, e.v),
                (e.__k = e.v.__k))
            : e.p && (e.v.parentNode && e.s.removeChild(e.v), B(e.h)),
          (e.h = r),
          (e.componentWillUnmount = function () {
            e.v.parentNode && e.s.removeChild(e.v), B(e.h);
          }),
          null
        );
      }
      function At(t, e) {
        return m(St, { vnode: t, container: e });
      }
      var Ct =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      _.prototype.isReactComponent = {};
      var Tt =
        ("undefined" != typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103;
      function It(t, e, n) {
        if (null == e.__k) for (; e.firstChild; ) e.removeChild(e.firstChild);
        return U(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      function Ot(t, e, n) {
        return L(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      var Bt = r.event;
      function Pt(t, e) {
        t["UNSAFE_" + e] &&
          !t[e] &&
          Object.defineProperty(t, e, {
            configurable: !1,
            get: function () {
              return this["UNSAFE_" + e];
            },
            set: function (t) {
              this["UNSAFE_" + e] = t;
            },
          });
      }
      r.event = function (t) {
        Bt && (t = Bt(t)), (t.persist = function () {});
        var e = !1,
          n = !1,
          r = t.stopPropagation;
        t.stopPropagation = function () {
          r.call(t), (e = !0);
        };
        var o = t.preventDefault;
        return (
          (t.preventDefault = function () {
            o.call(t), (n = !0);
          }),
          (t.isPropagationStopped = function () {
            return e;
          }),
          (t.isDefaultPrevented = function () {
            return n;
          }),
          (t.nativeEvent = t)
        );
      };
      var Ut = {
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        Lt = r.vnode;
      r.vnode = function (t) {
        t.$$typeof = Tt;
        var e = t.type,
          n = t.props;
        if (e) {
          if (
            (n.class != n.className &&
              ((Ut.enumerable = "className" in n),
              null != n.className && (n.class = n.className),
              Object.defineProperty(n, "className", Ut)),
            "function" != typeof e)
          ) {
            var r, o, i;
            for (i in (n.defaultValue &&
              void 0 !== n.value &&
              (n.value || 0 === n.value || (n.value = n.defaultValue),
              delete n.defaultValue),
            Array.isArray(n.value) &&
              n.multiple &&
              "select" === e &&
              (E(n.children).forEach(function (t) {
                -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0);
              }),
              delete n.value),
            n))
              if ((r = Ct.test(i))) break;
            if (r)
              for (i in ((o = t.props = {}), n))
                o[Ct.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] =
                  n[i];
          }
          !(function (e) {
            var n = t.type,
              r = t.props;
            if (r && "string" == typeof n) {
              var o = {};
              for (var i in r)
                /^on(Ani|Tra|Tou)/.test(i) &&
                  ((r[i.toLowerCase()] = r[i]), delete r[i]),
                  (o[i.toLowerCase()] = i);
              if (
                (o.ondoubleclick &&
                  ((r.ondblclick = r[o.ondoubleclick]),
                  delete r[o.ondoubleclick]),
                o.onbeforeinput &&
                  ((r.onbeforeinput = r[o.onbeforeinput]),
                  delete r[o.onbeforeinput]),
                o.onchange &&
                  ("textarea" === n ||
                    ("input" === n.toLowerCase() &&
                      !/^fil|che|ra/i.test(r.type))))
              ) {
                var s = o.oninput || "oninput";
                r[s] || ((r[s] = r[o.onchange]), delete r[o.onchange]);
              }
            }
          })(),
            "function" == typeof e &&
              !e.m &&
              e.prototype &&
              (Pt(e.prototype, "componentWillMount"),
              Pt(e.prototype, "componentWillReceiveProps"),
              Pt(e.prototype, "componentWillUpdate"),
              (e.m = !0));
        }
        Lt && Lt(t);
      };
      var Nt = "16.8.0";
      function qt(t) {
        return m.bind(null, t);
      }
      function jt(t) {
        return !!t && t.$$typeof === Tt;
      }
      function Dt(t) {
        return jt(t) ? N.apply(null, arguments) : t;
      }
      function Ht(t) {
        return !!t.__k && (U(null, t), !0);
      }
      function Zt(t) {
        return (t && (t.base || (1 === t.nodeType && t))) || null;
      }
      var Ft = function (t, e) {
          return t(e);
        },
        Jt = {
          useState: V,
          useReducer: Q,
          useEffect: $,
          useLayoutEffect: X,
          useRef: G,
          useImperativeHandle: tt,
          useMemo: et,
          useCallback: nt,
          useContext: rt,
          useDebugValue: ot,
          version: "16.8.0",
          Children: yt,
          render: It,
          hydrate: It,
          unmountComponentAtNode: Ht,
          createPortal: At,
          createElement: m,
          createContext: q,
          createFactory: qt,
          cloneElement: Dt,
          createRef: v,
          Fragment: y,
          isValidElement: jt,
          findDOMNode: Zt,
          Component: _,
          PureComponent: pt,
          memo: dt,
          forwardRef: gt,
          unstable_batchedUpdates: Ft,
          Suspense: bt,
          SuspenseList: kt,
          lazy: Mt,
        };
    },
    6316: function (t, e, n) {
      var r = n(8451),
        o = n(8886),
        i = n(9783),
        s = n(9123);
      function a(t, e, n, i, s) {
        var a = [].slice.call(arguments, 1),
          u = a.length,
          c = "function" === typeof a[u - 1];
        if (!c && !r()) throw new Error("Callback required as last argument");
        if (!c) {
          if (u < 1) throw new Error("Too few arguments provided");
          return (
            1 === u
              ? ((n = e), (e = i = void 0))
              : 2 !== u || e.getContext || ((i = n), (n = e), (e = void 0)),
            new Promise(function (r, s) {
              try {
                var a = o.create(n, i);
                r(t(a, e, i));
              } catch (u) {
                s(u);
              }
            })
          );
        }
        if (u < 2) throw new Error("Too few arguments provided");
        2 === u
          ? ((s = n), (n = e), (e = i = void 0))
          : 3 === u &&
            (e.getContext && "undefined" === typeof s
              ? ((s = i), (i = void 0))
              : ((s = i), (i = n), (n = e), (e = void 0)));
        try {
          var l = o.create(n, i);
          s(null, t(l, e, i));
        } catch (h) {
          s(h);
        }
      }
      (e.create = o.create),
        (e.toCanvas = a.bind(null, i.render)),
        (e.toDataURL = a.bind(null, i.renderToDataURL)),
        (e.toString = a.bind(null, function (t, e, n) {
          return s.render(t, n);
        }));
    },
    8451: function (t) {
      t.exports = function () {
        return (
          "function" === typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    6877: function (t, e, n) {
      var r = n(8970).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        for (
          var e = Math.floor(t / 7) + 2,
            n = r(t),
            o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
            i = [n - 7],
            s = 1;
          s < e - 1;
          s++
        )
          i[s] = i[s - 1] - o;
        return i.push(6), i.reverse();
      }),
        (e.getPositions = function (t) {
          for (
            var n = [], r = e.getRowColCoords(t), o = r.length, i = 0;
            i < o;
            i++
          )
            for (var s = 0; s < o; s++)
              (0 === i && 0 === s) ||
                (0 === i && s === o - 1) ||
                (i === o - 1 && 0 === s) ||
                n.push([r[i], r[s]]);
          return n;
        });
    },
    5890: function (t, e, n) {
      var r = n(8952),
        o = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function i(t) {
        (this.mode = r.ALPHANUMERIC), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            var n = 45 * o.indexOf(this.data[e]);
            (n += o.indexOf(this.data[e + 1])), t.put(n, 11);
          }
          this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
        }),
        (t.exports = i);
    },
    8333: function (t) {
      function e() {
        (this.buffer = []), (this.length = 0);
      }
      (e.prototype = {
        get: function (t) {
          var e = Math.floor(t / 8);
          return 1 === ((this.buffer[e] >>> (7 - (t % 8))) & 1);
        },
        put: function (t, e) {
          for (var n = 0; n < e; n++)
            this.putBit(1 === ((t >>> (e - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          var e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = e);
    },
    2015: function (t, e, n) {
      var r = n(1794);
      function o(t) {
        if (!t || t < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = r.alloc(t * t)),
          (this.reservedBit = r.alloc(t * t));
      }
      (o.prototype.set = function (t, e, n, r) {
        var o = t * this.size + e;
        (this.data[o] = n), r && (this.reservedBit[o] = !0);
      }),
        (o.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (o.prototype.xor = function (t, e, n) {
          this.data[t * this.size + e] ^= n;
        }),
        (o.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = o);
    },
    6094: function (t, e, n) {
      var r = n(1794),
        o = n(8952);
      function i(t) {
        (this.mode = o.BYTE), (this.data = r.from(t));
      }
      (i.getBitsLength = function (t) {
        return 8 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          for (var e = 0, n = this.data.length; e < n; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = i);
    },
    1451: function (t, e, n) {
      var r = n(8089),
        o = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        i = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case r.L:
            return o[4 * (t - 1) + 0];
          case r.M:
            return o[4 * (t - 1) + 1];
          case r.Q:
            return o[4 * (t - 1) + 2];
          case r.H:
            return o[4 * (t - 1) + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case r.L:
              return i[4 * (t - 1) + 0];
            case r.M:
              return i[4 * (t - 1) + 1];
            case r.Q:
              return i[4 * (t - 1) + 2];
            case r.H:
              return i[4 * (t - 1) + 3];
            default:
              return;
          }
        });
    },
    8089: function (t, e) {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && "undefined" !== typeof t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" !== typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "l":
                case "low":
                  return e.L;
                case "m":
                case "medium":
                  return e.M;
                case "q":
                case "quartile":
                  return e.Q;
                case "h":
                case "high":
                  return e.H;
                default:
                  throw new Error("Unknown EC Level: " + t);
              }
            })(t);
          } catch (r) {
            return n;
          }
        });
    },
    2841: function (t, e, n) {
      var r = n(8970).getSymbolSize;
      e.getPositions = function (t) {
        var e = r(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    8744: function (t, e, n) {
      var r = n(8970),
        o = r.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        for (var n = (t.bit << 3) | e, i = n << 10; r.getBCHDigit(i) - o >= 0; )
          i ^= 1335 << (r.getBCHDigit(i) - o);
        return 21522 ^ ((n << 10) | i);
      };
    },
    9634: function (t, e, n) {
      var r = n(1794),
        o = r.alloc(512),
        i = r.alloc(256);
      !(function () {
        for (var t = 1, e = 0; e < 255; e++)
          (o[e] = t), (i[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (e = 255; e < 512; e++) o[e] = o[e - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw new Error("log(" + t + ")");
          return i[t];
        }),
        (e.exp = function (t) {
          return o[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : o[i[t] + i[e]];
        });
    },
    8134: function (t, e, n) {
      var r = n(8952),
        o = n(8970);
      function i(t) {
        (this.mode = r.KANJI), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 13 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e < this.data.length; e++) {
            var n = o.toSJIS(this.data[e]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else {
              if (!(n >= 57408 && n <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[e] +
                    "\nMake sure your charset is UTF-8"
                );
              n -= 49472;
            }
            (n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13);
          }
        }),
        (t.exports = i);
    },
    3385: function (t, e) {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      var n = 3,
        r = 3,
        o = 40,
        i = 10;
      function s(t, n, r) {
        switch (t) {
          case e.Patterns.PATTERN000:
            return (n + r) % 2 === 0;
          case e.Patterns.PATTERN001:
            return n % 2 === 0;
          case e.Patterns.PATTERN010:
            return r % 3 === 0;
          case e.Patterns.PATTERN011:
            return (n + r) % 3 === 0;
          case e.Patterns.PATTERN100:
            return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
          case e.Patterns.PATTERN101:
            return ((n * r) % 2) + ((n * r) % 3) === 0;
          case e.Patterns.PATTERN110:
            return (((n * r) % 2) + ((n * r) % 3)) % 2 === 0;
          case e.Patterns.PATTERN111:
            return (((n * r) % 3) + ((n + r) % 2)) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + t);
        }
      }
      (e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          for (
            var e = t.size, r = 0, o = 0, i = 0, s = null, a = null, u = 0;
            u < e;
            u++
          ) {
            (o = i = 0), (s = a = null);
            for (var c = 0; c < e; c++) {
              var l = t.get(u, c);
              l === s ? o++ : (o >= 5 && (r += n + (o - 5)), (s = l), (o = 1)),
                (l = t.get(c, u)) === a
                  ? i++
                  : (i >= 5 && (r += n + (i - 5)), (a = l), (i = 1));
            }
            o >= 5 && (r += n + (o - 5)), i >= 5 && (r += n + (i - 5));
          }
          return r;
        }),
        (e.getPenaltyN2 = function (t) {
          for (var e = t.size, n = 0, o = 0; o < e - 1; o++)
            for (var i = 0; i < e - 1; i++) {
              var s =
                t.get(o, i) +
                t.get(o, i + 1) +
                t.get(o + 1, i) +
                t.get(o + 1, i + 1);
              (4 !== s && 0 !== s) || n++;
            }
          return n * r;
        }),
        (e.getPenaltyN3 = function (t) {
          for (var e = t.size, n = 0, r = 0, i = 0, s = 0; s < e; s++) {
            r = i = 0;
            for (var a = 0; a < e; a++)
              (r = ((r << 1) & 2047) | t.get(s, a)),
                a >= 10 && (1488 === r || 93 === r) && n++,
                (i = ((i << 1) & 2047) | t.get(a, s)),
                a >= 10 && (1488 === i || 93 === i) && n++;
          }
          return n * o;
        }),
        (e.getPenaltyN4 = function (t) {
          for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
          return Math.abs(Math.ceil((100 * e) / n / 5) - 10) * i;
        }),
        (e.applyMask = function (t, e) {
          for (var n = e.size, r = 0; r < n; r++)
            for (var o = 0; o < n; o++)
              e.isReserved(o, r) || e.xor(o, r, s(t, o, r));
        }),
        (e.getBestMask = function (t, n) {
          for (
            var r = Object.keys(e.Patterns).length, o = 0, i = 1 / 0, s = 0;
            s < r;
            s++
          ) {
            n(s), e.applyMask(s, t);
            var a =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(s, t), a < i && ((i = a), (o = s));
          }
          return o;
        });
    },
    8952: function (t, e, n) {
      var r = n(2979),
        o = n(3423);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw new Error("Invalid mode: " + t);
          if (!r.isValid(e)) throw new Error("Invalid version: " + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return o.testNumeric(t)
            ? e.NUMERIC
            : o.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : o.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw new Error("Invalid mode");
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" !== typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "numeric":
                  return e.NUMERIC;
                case "alphanumeric":
                  return e.ALPHANUMERIC;
                case "kanji":
                  return e.KANJI;
                case "byte":
                  return e.BYTE;
                default:
                  throw new Error("Unknown mode: " + t);
              }
            })(t);
          } catch (r) {
            return n;
          }
        });
    },
    9715: function (t, e, n) {
      var r = n(8952);
      function o(t) {
        (this.mode = r.NUMERIC), (this.data = t.toString());
      }
      (o.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          var e, n, r;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (n = this.data.substr(e, 3)), (r = parseInt(n, 10)), t.put(r, 10);
          var o = this.data.length - e;
          o > 0 &&
            ((n = this.data.substr(e)),
            (r = parseInt(n, 10)),
            t.put(r, 3 * o + 1));
        }),
        (t.exports = o);
    },
    1435: function (t, e, n) {
      var r = n(1794),
        o = n(9634);
      (e.mul = function (t, e) {
        for (var n = r.alloc(t.length + e.length - 1), i = 0; i < t.length; i++)
          for (var s = 0; s < e.length; s++) n[i + s] ^= o.mul(t[i], e[s]);
        return n;
      }),
        (e.mod = function (t, e) {
          for (var n = r.from(t); n.length - e.length >= 0; ) {
            for (var i = n[0], s = 0; s < e.length; s++) n[s] ^= o.mul(e[s], i);
            for (var a = 0; a < n.length && 0 === n[a]; ) a++;
            n = n.slice(a);
          }
          return n;
        }),
        (e.generateECPolynomial = function (t) {
          for (var n = r.from([1]), i = 0; i < t; i++)
            n = e.mul(n, [1, o.exp(i)]);
          return n;
        });
    },
    8886: function (t, e, n) {
      var r = n(1794),
        o = n(8970),
        i = n(8089),
        s = n(8333),
        a = n(2015),
        u = n(6877),
        c = n(2841),
        l = n(3385),
        h = n(1451),
        f = n(2149),
        p = n(5741),
        d = n(8744),
        m = n(8952),
        g = n(3787),
        v = n(7864);
      function y(t, e, n) {
        var r,
          o,
          i = t.size,
          s = d.getEncodedBits(e, n);
        for (r = 0; r < 15; r++)
          (o = 1 === ((s >> r) & 1)),
            r < 6
              ? t.set(r, 8, o, !0)
              : r < 8
              ? t.set(r + 1, 8, o, !0)
              : t.set(i - 15 + r, 8, o, !0),
            r < 8
              ? t.set(8, i - r - 1, o, !0)
              : r < 9
              ? t.set(8, 15 - r - 1 + 1, o, !0)
              : t.set(8, 15 - r - 1, o, !0);
        t.set(i - 8, 8, 1, !0);
      }
      function _(t, e, n) {
        var i = new s();
        n.forEach(function (e) {
          i.put(e.mode.bit, 4),
            i.put(e.getLength(), m.getCharCountIndicator(e.mode, t)),
            e.write(i);
        });
        var a =
          8 * (o.getSymbolTotalCodewords(t) - h.getTotalCodewordsCount(t, e));
        for (
          i.getLengthInBits() + 4 <= a && i.put(0, 4);
          i.getLengthInBits() % 8 !== 0;

        )
          i.putBit(0);
        for (var u = (a - i.getLengthInBits()) / 8, c = 0; c < u; c++)
          i.put(c % 2 ? 17 : 236, 8);
        return (function (t, e, n) {
          for (
            var i = o.getSymbolTotalCodewords(e),
              s = h.getTotalCodewordsCount(e, n),
              a = i - s,
              u = h.getBlocksCount(e, n),
              c = u - (i % u),
              l = Math.floor(i / u),
              p = Math.floor(a / u),
              d = p + 1,
              m = l - p,
              g = new f(m),
              v = 0,
              y = new Array(u),
              _ = new Array(u),
              w = 0,
              b = r.from(t.buffer),
              x = 0;
            x < u;
            x++
          ) {
            var M = x < c ? p : d;
            (y[x] = b.slice(v, v + M)),
              (_[x] = g.encode(y[x])),
              (v += M),
              (w = Math.max(w, M));
          }
          var k,
            E,
            R = r.alloc(i),
            S = 0;
          for (k = 0; k < w; k++)
            for (E = 0; E < u; E++) k < y[E].length && (R[S++] = y[E][k]);
          for (k = 0; k < m; k++) for (E = 0; E < u; E++) R[S++] = _[E][k];
          return R;
        })(i, t, e);
      }
      function w(t, e, n, r) {
        var i;
        if (v(t)) i = g.fromArray(t);
        else {
          if ("string" !== typeof t) throw new Error("Invalid data");
          var s = e;
          if (!s) {
            var h = g.rawSplit(t);
            s = p.getBestVersionForData(h, n);
          }
          i = g.fromString(t, s || 40);
        }
        var f = p.getBestVersionForData(i, n);
        if (!f)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code"
          );
        if (e) {
          if (e < f)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                f +
                ".\n"
            );
        } else e = f;
        var d = _(e, n, i),
          m = o.getSymbolSize(e),
          w = new a(m);
        return (
          (function (t, e) {
            for (
              var n = t.size, r = c.getPositions(e), o = 0;
              o < r.length;
              o++
            )
              for (var i = r[o][0], s = r[o][1], a = -1; a <= 7; a++)
                if (!(i + a <= -1 || n <= i + a))
                  for (var u = -1; u <= 7; u++)
                    s + u <= -1 ||
                      n <= s + u ||
                      ((a >= 0 && a <= 6 && (0 === u || 6 === u)) ||
                      (u >= 0 && u <= 6 && (0 === a || 6 === a)) ||
                      (a >= 2 && a <= 4 && u >= 2 && u <= 4)
                        ? t.set(i + a, s + u, !0, !0)
                        : t.set(i + a, s + u, !1, !0));
          })(w, e),
          (function (t) {
            for (var e = t.size, n = 8; n < e - 8; n++) {
              var r = n % 2 === 0;
              t.set(n, 6, r, !0), t.set(6, n, r, !0);
            }
          })(w),
          (function (t, e) {
            for (var n = u.getPositions(e), r = 0; r < n.length; r++)
              for (var o = n[r][0], i = n[r][1], s = -2; s <= 2; s++)
                for (var a = -2; a <= 2; a++)
                  -2 === s ||
                  2 === s ||
                  -2 === a ||
                  2 === a ||
                  (0 === s && 0 === a)
                    ? t.set(o + s, i + a, !0, !0)
                    : t.set(o + s, i + a, !1, !0);
          })(w, e),
          y(w, n, 0),
          e >= 7 &&
            (function (t, e) {
              for (
                var n, r, o, i = t.size, s = p.getEncodedBits(e), a = 0;
                a < 18;
                a++
              )
                (n = Math.floor(a / 3)),
                  (r = (a % 3) + i - 8 - 3),
                  (o = 1 === ((s >> a) & 1)),
                  t.set(n, r, o, !0),
                  t.set(r, n, o, !0);
            })(w, e),
          (function (t, e) {
            for (
              var n = t.size, r = -1, o = n - 1, i = 7, s = 0, a = n - 1;
              a > 0;
              a -= 2
            )
              for (6 === a && a--; ; ) {
                for (var u = 0; u < 2; u++)
                  if (!t.isReserved(o, a - u)) {
                    var c = !1;
                    s < e.length && (c = 1 === ((e[s] >>> i) & 1)),
                      t.set(o, a - u, c),
                      -1 === --i && (s++, (i = 7));
                  }
                if ((o += r) < 0 || n <= o) {
                  (o -= r), (r = -r);
                  break;
                }
              }
          })(w, d),
          isNaN(r) && (r = l.getBestMask(w, y.bind(null, w, n))),
          l.applyMask(r, w),
          y(w, n, r),
          {
            modules: w,
            version: e,
            errorCorrectionLevel: n,
            maskPattern: r,
            segments: i,
          }
        );
      }
      e.create = function (t, e) {
        if ("undefined" === typeof t || "" === t)
          throw new Error("No input text");
        var n,
          r,
          s = i.M;
        return (
          "undefined" !== typeof e &&
            ((s = i.from(e.errorCorrectionLevel, i.M)),
            (n = p.from(e.version)),
            (r = l.from(e.maskPattern)),
            e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
          w(t, n, s, r)
        );
      };
    },
    2149: function (t, e, n) {
      var r = n(1794),
        o = n(1435),
        i = n(918).lW;
      function s(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (s.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
      }),
        (s.prototype.encode = function (t) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          var e = r.alloc(this.degree),
            n = i.concat([t, e], t.length + this.degree),
            s = o.mod(n, this.genPoly),
            a = this.degree - s.length;
          if (a > 0) {
            var u = r.alloc(this.degree);
            return s.copy(u, a), u;
          }
          return s;
        }),
        (t.exports = s);
    },
    3423: function (t, e) {
      var n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        o =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (e.KANJI = new RegExp(r, "g")),
        (e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = new RegExp(o, "g")),
        (e.NUMERIC = new RegExp(n, "g")),
        (e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      var i = new RegExp("^" + r + "$"),
        s = new RegExp("^[0-9]+$"),
        a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return i.test(t);
      }),
        (e.testNumeric = function (t) {
          return s.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return a.test(t);
        });
    },
    3787: function (t, e, n) {
      var r = n(8952),
        o = n(9715),
        i = n(5890),
        s = n(6094),
        a = n(8134),
        u = n(3423),
        c = n(8970),
        l = n(1664);
      function h(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function f(t, e, n) {
        for (var r, o = []; null !== (r = t.exec(n)); )
          o.push({ data: r[0], index: r.index, mode: e, length: r[0].length });
        return o;
      }
      function p(t) {
        var e,
          n,
          o = f(u.NUMERIC, r.NUMERIC, t),
          i = f(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
        return (
          c.isKanjiModeEnabled()
            ? ((e = f(u.BYTE, r.BYTE, t)), (n = f(u.KANJI, r.KANJI, t)))
            : ((e = f(u.BYTE_KANJI, r.BYTE, t)), (n = [])),
          o
            .concat(i, e, n)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function d(t, e) {
        switch (e) {
          case r.NUMERIC:
            return o.getBitsLength(t);
          case r.ALPHANUMERIC:
            return i.getBitsLength(t);
          case r.KANJI:
            return a.getBitsLength(t);
          case r.BYTE:
            return s.getBitsLength(t);
        }
      }
      function m(t, e) {
        var n,
          u = r.getBestModeForData(t);
        if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit)
          throw new Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(u)
          );
        switch ((n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new o(t);
          case r.ALPHANUMERIC:
            return new i(t);
          case r.KANJI:
            return new a(t);
          case r.BYTE:
            return new s(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" === typeof e
              ? t.push(m(e, null))
              : e.data && t.push(m(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, n) {
          for (
            var o = (function (t) {
                for (var e = [], n = 0; n < t.length; n++) {
                  var o = t[n];
                  switch (o.mode) {
                    case r.NUMERIC:
                      e.push([
                        o,
                        {
                          data: o.data,
                          mode: r.ALPHANUMERIC,
                          length: o.length,
                        },
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      e.push([
                        o,
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.KANJI:
                      e.push([
                        o,
                        { data: o.data, mode: r.BYTE, length: h(o.data) },
                      ]);
                      break;
                    case r.BYTE:
                      e.push([
                        { data: o.data, mode: r.BYTE, length: h(o.data) },
                      ]);
                  }
                }
                return e;
              })(p(t, c.isKanjiModeEnabled())),
              i = (function (t, e) {
                for (
                  var n = {}, o = { start: {} }, i = ["start"], s = 0;
                  s < t.length;
                  s++
                ) {
                  for (var a = t[s], u = [], c = 0; c < a.length; c++) {
                    var l = a[c],
                      h = "" + s + c;
                    u.push(h), (n[h] = { node: l, lastCount: 0 }), (o[h] = {});
                    for (var f = 0; f < i.length; f++) {
                      var p = i[f];
                      n[p] && n[p].node.mode === l.mode
                        ? ((o[p][h] =
                            d(n[p].lastCount + l.length, l.mode) -
                            d(n[p].lastCount, l.mode)),
                          (n[p].lastCount += l.length))
                        : (n[p] && (n[p].lastCount = l.length),
                          (o[p][h] =
                            d(l.length, l.mode) +
                            4 +
                            r.getCharCountIndicator(l.mode, e)));
                    }
                  }
                  i = u;
                }
                for (f = 0; f < i.length; f++) o[i[f]].end = 0;
                return { map: o, table: n };
              })(o, n),
              s = l.find_path(i.map, "start", "end"),
              a = [],
              u = 1;
            u < s.length - 1;
            u++
          )
            a.push(i.table[s[u]].node);
          return e.fromArray(
            (function (t) {
              return t.reduce(function (t, e) {
                var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                return n && n.mode === e.mode
                  ? ((t[t.length - 1].data += e.data), t)
                  : (t.push(e), t);
              }, []);
            })(a)
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(p(t, c.isKanjiModeEnabled()));
        });
    },
    8970: function (t, e) {
      var n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (e.getSymbolSize = function (t) {
        if (!t) throw new Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return r[t];
        }),
        (e.getBCHDigit = function (t) {
          for (var e = 0; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ("function" !== typeof t)
            throw new Error('"toSJISFunc" is not a valid function.');
          n = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return "undefined" !== typeof n;
        }),
        (e.toSJIS = function (t) {
          return n(t);
        });
    },
    2979: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    5741: function (t, e, n) {
      var r = n(8970),
        o = n(1451),
        i = n(8089),
        s = n(8952),
        a = n(2979),
        u = n(7864),
        c = r.getBCHDigit(7973);
      function l(t, e) {
        return s.getCharCountIndicator(t, e) + 4;
      }
      function h(t, e) {
        var n = 0;
        return (
          t.forEach(function (t) {
            var r = l(t.mode, e);
            n += r + t.getBitsLength();
          }),
          n
        );
      }
      (e.from = function (t, e) {
        return a.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, n) {
          if (!a.isValid(t)) throw new Error("Invalid QR Code version");
          "undefined" === typeof n && (n = s.BYTE);
          var i =
            8 * (r.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e));
          if (n === s.MIXED) return i;
          var u = i - l(n, t);
          switch (n) {
            case s.NUMERIC:
              return Math.floor((u / 10) * 3);
            case s.ALPHANUMERIC:
              return Math.floor((u / 11) * 2);
            case s.KANJI:
              return Math.floor(u / 13);
            case s.BYTE:
            default:
              return Math.floor(u / 8);
          }
        }),
        (e.getBestVersionForData = function (t, n) {
          var r,
            o = i.from(n, i.M);
          if (u(t)) {
            if (t.length > 1)
              return (function (t, n) {
                for (var r = 1; r <= 40; r++)
                  if (h(t, r) <= e.getCapacity(r, n, s.MIXED)) return r;
              })(t, o);
            if (0 === t.length) return 1;
            r = t[0];
          } else r = t;
          return (function (t, n, r) {
            for (var o = 1; o <= 40; o++)
              if (n <= e.getCapacity(o, r, t)) return o;
          })(r.mode, r.getLength(), o);
        }),
        (e.getEncodedBits = function (t) {
          if (!a.isValid(t) || t < 7)
            throw new Error("Invalid QR Code version");
          for (var e = t << 12; r.getBCHDigit(e) - c >= 0; )
            e ^= 7973 << (r.getBCHDigit(e) - c);
          return (t << 12) | e;
        });
    },
    9783: function (t, e, n) {
      var r = n(4425);
      (e.render = function (t, e, n) {
        var o = n,
          i = e;
        "undefined" !== typeof o ||
          (e && e.getContext) ||
          ((o = e), (e = void 0)),
          e ||
            (i = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (o = r.getOptions(o));
        var s = r.getImageWidth(t.modules.size, o),
          a = i.getContext("2d"),
          u = a.createImageData(s, s);
        return (
          r.qrToImageData(u.data, t, o),
          (function (t, e, n) {
            t.clearRect(0, 0, e.width, e.height),
              e.style || (e.style = {}),
              (e.height = n),
              (e.width = n),
              (e.style.height = n + "px"),
              (e.style.width = n + "px");
          })(a, i, s),
          a.putImageData(u, 0, 0),
          i
        );
      }),
        (e.renderToDataURL = function (t, n, r) {
          var o = r;
          "undefined" !== typeof o ||
            (n && n.getContext) ||
            ((o = n), (n = void 0)),
            o || (o = {});
          var i = e.render(t, n, o),
            s = o.type || "image/png",
            a = o.rendererOpts || {};
          return i.toDataURL(s, a.quality);
        });
    },
    9123: function (t, e, n) {
      var r = n(4425);
      function o(t, e) {
        var n = t.a / 255,
          r = e + '="' + t.hex + '"';
        return n < 1
          ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function i(t, e, n) {
        var r = t + e;
        return "undefined" !== typeof n && (r += " " + n), r;
      }
      e.render = function (t, e, n) {
        var s = r.getOptions(e),
          a = t.modules.size,
          u = t.modules.data,
          c = a + 2 * s.margin,
          l = s.color.light.a
            ? "<path " +
              o(s.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          h =
            "<path " +
            o(s.color.dark, "stroke") +
            ' d="' +
            (function (t, e, n) {
              for (var r = "", o = 0, s = !1, a = 0, u = 0; u < t.length; u++) {
                var c = Math.floor(u % e),
                  l = Math.floor(u / e);
                c || s || (s = !0),
                  t[u]
                    ? (a++,
                      (u > 0 && c > 0 && t[u - 1]) ||
                        ((r += s ? i("M", c + n, 0.5 + l + n) : i("m", o, 0)),
                        (o = 0),
                        (s = !1)),
                      (c + 1 < e && t[u + 1]) || ((r += i("h", a)), (a = 0)))
                    : o++;
              }
              return r;
            })(u, a, s.margin) +
            '"/>',
          f = 'viewBox="0 0 ' + c + " " + c + '"',
          p =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (s.width
              ? 'width="' + s.width + '" height="' + s.width + '" '
              : "") +
            f +
            ' shape-rendering="crispEdges">' +
            l +
            h +
            "</svg>\n";
        return "function" === typeof n && n(null, p), p;
      };
    },
    4425: function (t, e) {
      function n(t) {
        if (
          ("number" === typeof t && (t = t.toString()), "string" !== typeof t)
        )
          throw new Error("Color should be defined as hex string");
        var e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw new Error("Invalid hex color: " + t);
        (3 !== e.length && 4 !== e.length) ||
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push("F", "F");
        var n = parseInt(e.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        var e =
            "undefined" === typeof t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          r = t.width && t.width >= 21 ? t.width : void 0,
          o = t.scale || 4;
        return {
          width: r,
          scale: r ? 4 : o,
          margin: e,
          color: {
            dark: n(t.color.dark || "#000000ff"),
            light: n(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, n) {
          var r = e.getScale(t, n);
          return Math.floor((t + 2 * n.margin) * r);
        }),
        (e.qrToImageData = function (t, n, r) {
          for (
            var o = n.modules.size,
              i = n.modules.data,
              s = e.getScale(o, r),
              a = Math.floor((o + 2 * r.margin) * s),
              u = r.margin * s,
              c = [r.color.light, r.color.dark],
              l = 0;
            l < a;
            l++
          )
            for (var h = 0; h < a; h++) {
              var f = 4 * (l * a + h),
                p = r.color.light;
              if (l >= u && h >= u && l < a - u && h < a - u)
                p =
                  c[
                    i[Math.floor((l - u) / s) * o + Math.floor((h - u) / s)]
                      ? 1
                      : 0
                  ];
              (t[f++] = p.r), (t[f++] = p.g), (t[f++] = p.b), (t[f] = p.a);
            }
        });
    },
    1794: function (t, e, n) {
      "use strict";
      var r = n(7864);
      i.TYPED_ARRAY_SUPPORT = (function () {
        try {
          var t = new Uint8Array(1);
          return (
            (t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            42 === t.foo()
          );
        } catch (e) {
          return !1;
        }
      })();
      var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      function i(t, e, n) {
        return i.TYPED_ARRAY_SUPPORT || this instanceof i
          ? "number" === typeof t
            ? u(this, t)
            : (function (t, e, n, r) {
                if ("number" === typeof e)
                  throw new TypeError('"value" argument must not be a number');
                if (
                  "undefined" !== typeof ArrayBuffer &&
                  e instanceof ArrayBuffer
                )
                  return (function (t, e, n, r) {
                    if (n < 0 || e.byteLength < n)
                      throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < n + (r || 0))
                      throw new RangeError("'length' is out of bounds");
                    var o;
                    o =
                      void 0 === n && void 0 === r
                        ? new Uint8Array(e)
                        : void 0 === r
                        ? new Uint8Array(e, n)
                        : new Uint8Array(e, n, r);
                    i.TYPED_ARRAY_SUPPORT
                      ? (o.__proto__ = i.prototype)
                      : (o = c(t, o));
                    return o;
                  })(t, e, n, r);
                if ("string" === typeof e)
                  return (function (t, e) {
                    var n = 0 | h(e),
                      r = a(t, n),
                      o = r.write(e);
                    o !== n && (r = r.slice(0, o));
                    return r;
                  })(t, e);
                return (function (t, e) {
                  if (i.isBuffer(e)) {
                    var n = 0 | s(e.length),
                      r = a(t, n);
                    return 0 === r.length || e.copy(r, 0, 0, n), r;
                  }
                  if (e) {
                    if (
                      ("undefined" !== typeof ArrayBuffer &&
                        e.buffer instanceof ArrayBuffer) ||
                      "length" in e
                    )
                      return "number" !== typeof e.length ||
                        (o = e.length) !== o
                        ? a(t, 0)
                        : c(t, e);
                    if ("Buffer" === e.type && Array.isArray(e.data))
                      return c(t, e.data);
                  }
                  var o;
                  throw new TypeError(
                    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                  );
                })(t, e);
              })(this, t, e, n)
          : new i(t, e, n);
      }
      function s(t) {
        if (t >= o)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              o.toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function a(t, e) {
        var n;
        return (
          i.TYPED_ARRAY_SUPPORT
            ? ((n = new Uint8Array(e)).__proto__ = i.prototype)
            : (null === (n = t) && (n = new i(e)), (n.length = e)),
          n
        );
      }
      function u(t, e) {
        var n = a(t, e < 0 ? 0 : 0 | s(e));
        if (!i.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) n[r] = 0;
        return n;
      }
      function c(t, e) {
        for (
          var n = e.length < 0 ? 0 : 0 | s(e.length), r = a(t, n), o = 0;
          o < n;
          o += 1
        )
          r[o] = 255 & e[o];
        return r;
      }
      function l(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
          if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((e -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return i;
      }
      function h(t) {
        return i.isBuffer(t)
          ? t.length
          : "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          ? t.byteLength
          : ("string" !== typeof t && (t = "" + t),
            0 === t.length ? 0 : l(t).length);
      }
      i.TYPED_ARRAY_SUPPORT &&
        ((i.prototype.__proto__ = Uint8Array.prototype),
        (i.__proto__ = Uint8Array),
        "undefined" !== typeof Symbol &&
          Symbol.species &&
          i[Symbol.species] === i &&
          Object.defineProperty(i, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1,
          })),
        (i.prototype.write = function (t, e, n) {
          void 0 === e || (void 0 === n && "string" === typeof e)
            ? ((n = this.length), (e = 0))
            : isFinite(e) && ((e |= 0), isFinite(n) ? (n |= 0) : (n = void 0));
          var r = this.length - e;
          if (
            ((void 0 === n || n > r) && (n = r),
            (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          return (function (t, e, n, r) {
            return (function (t, e, n, r) {
              for (
                var o = 0;
                o < r && !(o + n >= e.length || o >= t.length);
                ++o
              )
                e[o + n] = t[o];
              return o;
            })(l(e, t.length - n), t, n, r);
          })(this, t, e, n);
        }),
        (i.prototype.slice = function (t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t),
            i.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = i.prototype;
          else {
            var o = e - t;
            n = new i(o, void 0);
            for (var s = 0; s < o; ++s) n[s] = this[s + t];
          }
          return n;
        }),
        (i.prototype.copy = function (t, e, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            t.length - e < r - n && (r = t.length - e + n);
          var o,
            s = r - n;
          if (this === t && n < e && e < r)
            for (o = s - 1; o >= 0; --o) t[o + e] = this[o + n];
          else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < s; ++o) t[o + e] = this[o + n];
          else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
          return s;
        }),
        (i.prototype.fill = function (t, e, n) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((e = 0), (n = this.length))
                : "string" === typeof n && (n = this.length),
              1 === t.length)
            ) {
              var r = t.charCodeAt(0);
              r < 256 && (t = r);
            }
          } else "number" === typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= e) return this;
          var o;
          if (
            ((e >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            t || (t = 0),
            "number" === typeof t)
          )
            for (o = e; o < n; ++o) this[o] = t;
          else {
            var s = i.isBuffer(t) ? t : new i(t),
              a = s.length;
            for (o = 0; o < n - e; ++o) this[o + e] = s[o % a];
          }
          return this;
        }),
        (i.concat = function (t, e) {
          if (!r(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a(null, 0);
          var n;
          if (void 0 === e)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var o = u(null, e),
            s = 0;
          for (n = 0; n < t.length; ++n) {
            var c = t[n];
            if (!i.isBuffer(c))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            c.copy(o, s), (s += c.length);
          }
          return o;
        }),
        (i.byteLength = h),
        (i.prototype._isBuffer = !0),
        (i.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (t.exports.alloc = function (t) {
          var e = new i(t);
          return e.fill(0), e;
        }),
        (t.exports.from = function (t) {
          return new i(t);
        });
    },
    7864: function (t) {
      var e = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == e.call(t);
        };
    },
    1172: function (t, e, n) {
      "use strict";
      var r = n(3038).default,
        o = n(3269).default,
        i = n(319).default,
        s = n(2376),
        a = n(8271),
        u = n(4266);
      function c(t) {
        if ("string" !== typeof t || 1 !== t.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function l(t, e) {
        return e.encode ? (e.strict ? s(t) : encodeURIComponent(t)) : t;
      }
      function h(t, e) {
        return e.decode ? a(t) : t;
      }
      function f(t) {
        return Array.isArray(t)
          ? t.sort()
          : "object" === typeof t
          ? f(Object.keys(t))
              .sort(function (t, e) {
                return Number(t) - Number(e);
              })
              .map(function (e) {
                return t[e];
              })
          : t;
      }
      function p(t) {
        var e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t;
      }
      function d(t) {
        var e = (t = p(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1);
      }
      function m(t, e) {
        return (
          e.parseNumbers &&
          !Number.isNaN(Number(t)) &&
          "string" === typeof t &&
          "" !== t.trim()
            ? (t = Number(t))
            : !e.parseBooleans ||
              null === t ||
              ("true" !== t.toLowerCase() && "false" !== t.toLowerCase()) ||
              (t = "true" === t.toLowerCase()),
          t
        );
      }
      function g(t, e) {
        c(
          (e = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            e
          )).arrayFormatSeparator
        );
        var n = (function (t) {
            var e;
            switch (t.arrayFormat) {
              case "index":
                return function (t, n, r) {
                  (e = /\[(\d*)\]$/.exec(t)),
                    (t = t.replace(/\[\d*\]$/, "")),
                    e
                      ? (void 0 === r[t] && (r[t] = {}), (r[t][e[1]] = n))
                      : (r[t] = n);
                };
              case "bracket":
                return function (t, n, r) {
                  (e = /(\[\])$/.exec(t)),
                    (t = t.replace(/\[\]$/, "")),
                    e
                      ? void 0 !== r[t]
                        ? (r[t] = [].concat(r[t], n))
                        : (r[t] = [n])
                      : (r[t] = n);
                };
              case "comma":
              case "separator":
                return function (e, n, r) {
                  var o =
                    "string" === typeof n &&
                    n.split("").indexOf(t.arrayFormatSeparator) > -1
                      ? n.split(t.arrayFormatSeparator).map(function (e) {
                          return h(e, t);
                        })
                      : null === n
                      ? n
                      : h(n, t);
                  r[e] = o;
                };
              default:
                return function (t, e, n) {
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], e)) : (n[t] = e);
                };
            }
          })(e),
          i = Object.create(null);
        if ("string" !== typeof t) return i;
        if (!(t = t.trim().replace(/^[?#&]/, ""))) return i;
        var s,
          a = o(t.split("&"));
        try {
          for (a.s(); !(s = a.n()).done; ) {
            var l = s.value,
              p = u(e.decode ? l.replace(/\+/g, " ") : l, "="),
              d = r(p, 2),
              g = d[0],
              v = d[1];
            (v =
              void 0 === v
                ? null
                : ["comma", "separator"].includes(e.arrayFormat)
                ? v
                : h(v, e)),
              n(h(g, e), v, i);
          }
        } catch (E) {
          a.e(E);
        } finally {
          a.f();
        }
        for (var y = 0, _ = Object.keys(i); y < _.length; y++) {
          var w = _[y],
            b = i[w];
          if ("object" === typeof b && null !== b)
            for (var x = 0, M = Object.keys(b); x < M.length; x++) {
              var k = M[x];
              b[k] = m(b[k], e);
            }
          else i[w] = m(b, e);
        }
        return !1 === e.sort
          ? i
          : (!0 === e.sort
              ? Object.keys(i).sort()
              : Object.keys(i).sort(e.sort)
            ).reduce(function (t, e) {
              var n = i[e];
              return (
                Boolean(n) && "object" === typeof n && !Array.isArray(n)
                  ? (t[e] = f(n))
                  : (t[e] = n),
                t
              );
            }, Object.create(null));
      }
      (e.extract = d),
        (e.parse = g),
        (e.stringify = function (t, e) {
          if (!t) return "";
          c(
            (e = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              e
            )).arrayFormatSeparator
          );
          for (
            var n = function (n) {
                return (
                  (e.skipNull && (null === (r = t[n]) || void 0 === r)) ||
                  (e.skipEmptyString && "" === t[n])
                );
                var r;
              },
              r = (function (t) {
                switch (t.arrayFormat) {
                  case "index":
                    return function (e) {
                      return function (n, r) {
                        var o = n.length;
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              i(n),
                              null === r
                                ? [[l(e, t), "[", o, "]"].join("")]
                                : [
                                    [l(e, t), "[", l(o, t), "]=", l(r, t)].join(
                                      ""
                                    ),
                                  ]
                            );
                      };
                    };
                  case "bracket":
                    return function (e) {
                      return function (n, r) {
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              i(n),
                              null === r
                                ? [[l(e, t), "[]"].join("")]
                                : [[l(e, t), "[]=", l(r, t)].join("")]
                            );
                      };
                    };
                  case "comma":
                  case "separator":
                    return function (e) {
                      return function (n, r) {
                        return null === r || void 0 === r || 0 === r.length
                          ? n
                          : 0 === n.length
                          ? [[l(e, t), "=", l(r, t)].join("")]
                          : [[n, l(r, t)].join(t.arrayFormatSeparator)];
                      };
                    };
                  default:
                    return function (e) {
                      return function (n, r) {
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              i(n),
                              null === r
                                ? [l(e, t)]
                                : [[l(e, t), "=", l(r, t)].join("")]
                            );
                      };
                    };
                }
              })(e),
              o = {},
              s = 0,
              a = Object.keys(t);
            s < a.length;
            s++
          ) {
            var u = a[s];
            n(u) || (o[u] = t[u]);
          }
          var h = Object.keys(o);
          return (
            !1 !== e.sort && h.sort(e.sort),
            h
              .map(function (n) {
                var o = t[n];
                return void 0 === o
                  ? ""
                  : null === o
                  ? l(n, e)
                  : Array.isArray(o)
                  ? o.reduce(r(n), []).join("&")
                  : l(n, e) + "=" + l(o, e);
              })
              .filter(function (t) {
                return t.length > 0;
              })
              .join("&")
          );
        }),
        (e.parseUrl = function (t, e) {
          e = Object.assign({ decode: !0 }, e);
          var n = u(t, "#"),
            o = r(n, 2),
            i = o[0],
            s = o[1];
          return Object.assign(
            { url: i.split("?")[0] || "", query: g(d(t), e) },
            e && e.parseFragmentIdentifier && s
              ? { fragmentIdentifier: h(s, e) }
              : {}
          );
        }),
        (e.stringifyUrl = function (t, n) {
          n = Object.assign({ encode: !0, strict: !0 }, n);
          var r = p(t.url).split("?")[0] || "",
            o = e.extract(t.url),
            i = e.parse(o, { sort: !1 }),
            s = Object.assign(i, t.query),
            a = e.stringify(s, n);
          a && (a = "?".concat(a));
          var u = (function (t) {
            var e = "",
              n = t.indexOf("#");
            return -1 !== n && (e = t.slice(n)), e;
          })(t.url);
          return (
            t.fragmentIdentifier &&
              (u = "#".concat(l(t.fragmentIdentifier, n))),
            "".concat(r).concat(a).concat(u)
          );
        });
    },
    4266: function (t) {
      "use strict";
      t.exports = function (t, e) {
        if ("string" !== typeof t || "string" !== typeof e)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === e) return [t];
        var n = t.indexOf(e);
        return -1 === n ? [t] : [t.slice(0, n), t.slice(n + e.length)];
      };
    },
    2376: function (t) {
      "use strict";
      t.exports = function (t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
          return "%".concat(t.charCodeAt(0).toString(16).toUpperCase());
        });
      };
    },
    3071: function (t) {
      t.exports = function () {
        var t = document.getSelection();
        if (!t.rangeCount) return function () {};
        for (
          var e = document.activeElement, n = [], r = 0;
          r < t.rangeCount;
          r++
        )
          n.push(t.getRangeAt(r));
        switch (e.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            e.blur();
            break;
          default:
            e = null;
        }
        return (
          t.removeAllRanges(),
          function () {
            "Caret" === t.type && t.removeAllRanges(),
              t.rangeCount ||
                n.forEach(function (e) {
                  t.addRange(e);
                }),
              e && e.focus();
          }
        );
      };
    },
    4122: function (t, e, n) {
      var r = n(6170).strict;
      t.exports = function (t) {
        if (r(t)) {
          var e = Buffer.from(t.buffer);
          return (
            t.byteLength !== t.buffer.byteLength &&
              (e = e.slice(t.byteOffset, t.byteOffset + t.byteLength)),
            e
          );
        }
        return Buffer.from(t);
      };
    },
    5861: function (t, e, n) {
      "use strict";
      function r(t, e, n, r, o, i, s) {
        try {
          var a = t[i](s),
            u = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function o(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, i) {
            var s = t.apply(e, n);
            function a(t) {
              r(s, o, i, a, u, "next", t);
            }
            function u(t) {
              r(s, o, i, a, u, "throw", t);
            }
            a(void 0);
          });
        };
      }
      n.d(e, {
        Z: function () {
          return o;
        },
      });
    },
    2982: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(907);
      var o = n(181);
      function i(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return (0, r.Z)(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (0, o.Z)(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
]);
