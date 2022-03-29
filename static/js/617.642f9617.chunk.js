"use strict";
(self.webpackChunkpresale_xrxs_website_contract =
  self.webpackChunkpresale_xrxs_website_contract || []).push([
  [617],
  {
    6617: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return ge;
          },
        });
      var a = t(7313),
        s = t(7890),
        r = t(1413),
        i = t(885),
        l = t(5987),
        c = t(9284),
        o = t.n(c),
        u = t(6417),
        d = ["children"],
        p = {
          overlay: {
            zIndex: 100,
            backgroundColor: "rgba(33, 36, 41, 0.8)",
            backdropFilter: "blur(0.75rem)",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 420,
            padding: 24,
            borderRadius: 24,
            border: "1px solid rgba(112, 112, 112, 0.1)",
            background: "rgb(33, 36, 41)",
          },
        },
        m = function (e) {
          var n = e.children,
            t = (0, l.Z)(e, d);
          return (0, u.jsx)(
            o(),
            (0, r.Z)((0, r.Z)({ style: p }, t), {}, { children: n })
          );
        },
        x = t(3394),
        h = t(9626),
        f = t(8146),
        y = function (e) {
          var n = e.connector,
            t = e.walletConfig,
            a = e.onDismiss;
          return (0, u.jsxs)("button", {
            variant: "tertiary",
            className: "flex blur-bg shadowed rounded-sm",
            onClick: function () {
              var e =
                /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !window.MMStream;
              "Trust Wallet" === t.title && e
                ? n(f.v.WalletConnect)
                : n(t.connectorId),
                a();
            },
            children: [t.icon, (0, u.jsx)("span", { children: t.title })],
          });
        },
        b = t(5861),
        j = t(7757),
        v = t.n(j),
        N = t(3478),
        g = t(4344),
        w = t(6210),
        T = 18,
        k = (function () {
          var e = (0, b.Z)(
            v().mark(function e() {
              var n, t;
              return v().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(n = window.ethereum)) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (t = parseInt("56", 10)),
                          (e.prev = 3),
                          (e.next = 6),
                          n.request({
                            method: "wallet_addEthereumChain",
                            params: [
                              {
                                chainId: "0x".concat(t.toString(16)),
                                chainName: "Binance Smart Chain Testnet",
                                nativeCurrency: {
                                  name: "tBNB",
                                  symbol: "tbnb",
                                  decimals: T,
                                },
                                rpcUrls: [w.$G[t]],
                                blockExplorerUrls: [w.Qh[t]],
                              },
                            ],
                          })
                        );
                      case 6:
                        return e.abrupt("return", !0);
                      case 9:
                        return (
                          (e.prev = 9),
                          (e.t0 = e.catch(3)),
                          console.error(
                            "Failed to setup the network in metamask:",
                            e.t0
                          ),
                          e.abrupt("return", !1)
                        );
                      case 13:
                        e.next = 17;
                        break;
                      case 15:
                        return (
                          console.error(
                            "Can't setup the BSC network on metamask because window.ethereum is undefined"
                          ),
                          e.abrupt("return", !1)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 9]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        _ = t(4310),
        S = function () {
          var e = (0, h.Ge)(),
            n = e.activate,
            t = e.deactivate,
            s = (0, a.useCallback)(
              function (e) {
                var t = _.y[e];
                t
                  ? n(
                      t,
                      (function () {
                        var e = (0, b.Z)(
                          v().mark(function e(a) {
                            return v().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!(a instanceof h.Uu)) {
                                      e.next = 8;
                                      break;
                                    }
                                    return console.log(a), (e.next = 4), k();
                                  case 4:
                                    e.sent && n(t), (e.next = 9);
                                    break;
                                  case 8:
                                    a instanceof N.A5
                                      ? console.error(
                                          "Provider Error: No provider was found"
                                        )
                                      : a instanceof N.ab || a instanceof g.ab
                                      ? (t instanceof g.zw &&
                                          (t.walletConnectProvider = null),
                                        console.error(
                                          "Authorization Error: Please authorize to access your account"
                                        ))
                                      : console.error(
                                          ""
                                            .concat(a.name, ": ")
                                            .concat(a.message)
                                        );
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (n) {
                          return e.apply(this, arguments);
                        };
                      })()
                    )
                  : console.error(
                      "Unable to find connector: The connector config is wrong"
                    );
              },
              [n]
            );
          return {
            login: s,
            logout: (0, a.useCallback)(
              function () {
                t(),
                  window.localStorage.getItem("walletconnect") &&
                    (_.y.walletconnect.close(),
                    (_.y.walletconnect.walletConnectProvider = null));
              },
              [t]
            ),
          };
        },
        C = ["children", "transaction", "walletConnectAction"],
        B = function (e) {
          var n = e.children,
            t = (e.transaction, e.walletConnectAction, (0, l.Z)(e, C)),
            s = (0, h.Ge)().account,
            c = S(),
            o = c.login,
            d = c.logout,
            p = (0, a.useState)(!1),
            b = (0, i.Z)(p, 2),
            j = b[0],
            v = b[1],
            N = function () {
              v(!1);
            };
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(
                "button",
                (0, r.Z)(
                  (0, r.Z)({}, t),
                  {},
                  {
                    onClick: function () {
                      v(!0);
                    },
                    children: n,
                  }
                )
              ),
              (0, u.jsxs)(m, {
                isOpen: j,
                onAfterOpen: function () {},
                onRequestClose: N,
                contentLabel: "Connect Wallet",
                ariaHideApp: !1,
                children: [
                  (0, u.jsxs)("div", {
                    className: "modal-header flex",
                    children: [
                      (0, u.jsx)("h3", { children: "Connect Wallet" }),
                      (0, u.jsx)(x.IOM, { onClick: N }),
                    ],
                  }),
                  f.Z.map(function (e, n) {
                    return (0,
                    u.jsx)(y, { connector: o, walletConfig: e, onDismiss: N }, n);
                  }),
                  s && "" !== s
                    ? (0, u.jsx)("div", {
                        className: "modal-control",
                        children: (0, u.jsxs)("button", {
                          className: "flex rounded-sm",
                          onClick: function () {
                            d(), N();
                          },
                          children: [
                            (0, u.jsx)("span", { children: "Disconnect" }),
                            (0, u.jsx)(x.wzU, { onClick: N }),
                          ],
                        }),
                      })
                    : (0, u.jsx)(u.Fragment, {}),
                ],
              }),
            ],
          });
        },
        O = t(8306),
        E = function () {
          var e = (0, h.Ge)().account;
          return (0, u.jsx)("div", {
            className: "navbar flex",
            children: (0, u.jsxs)("div", {
              className: "navbar-wrapper container flex",
              children: [
                (0, u.jsxs)("div", {
                  className: "navbar-first flex",
                  children: [
                    (0, u.jsx)("a", {
                      className: "navbar-logo",
                      href: "https://xrxstoken.com",
                      children: (0, u.jsx)("img", { src: O.T, alt: "logo" }),
                    }),
                    (0, u.jsx)("div", {
                      className: "navbar-anchors flex",
                      children: (0, u.jsx)("a", {
                        className: "flex",
                        href: "https://multisender.safutrendz.com",
                        children: "MultiSender",
                      }),
                    }),
                  ],
                }),
                (0, u.jsx)("div", {
                  className: "navbar-last",
                  children: (0, u.jsx)(B, {
                    children:
                      void 0 === e || "" === e
                        ? "Connect"
                        : "".concat(e.slice(0, 4), "...").concat(e.slice(-4)),
                  }),
                }),
              ],
            }),
          });
        },
        M = t(6031),
        A = { PRESALE: "/", NOTFOUND: "*" },
        Z = t(2709),
        D = {
          Twitter: {
            link: "https://twitter.com/safu_trendz",
            icon: (0, u.jsx)(Z.mWf, {}),
          },
          Telegram: {
            link: "https://t.me/safu_trendz",
            icon: (0, u.jsx)(Z.n26, {}),
          },
          Github: {
            link: "https://github.com/SaFuTrendz",
            icon: (0, u.jsx)(Z.pZu, {}),
          },
        },
        F = function () {
          return (0, u.jsx)("div", {
            className: "footer flex",
            children: (0, u.jsxs)("div", {
              className: "footer-wrapper container flex-column",
              children: [
                (0, u.jsx)("div", {
                  className: "footer-logo flex",
                  children: (0, u.jsx)("img", { src: O.T, alt: "logo" }),
                }),
                (0, u.jsx)("div", {
                  className: "footer-copyright",
                  children: "\xa9 2022 XRXS",
                }),
                (0, u.jsx)("div", {
                  className: "footer-socials flex",
                  children: (0, M.keysIn)(D).map(function (e, n) {
                    return (0,
                    u.jsx)("a", { className: "flex", href: D[e].link, target: "_blank", rel: "noreferrer", "aria-label": e.toLowerCase(), children: D[e].icon }, n);
                  }),
                }),
              ],
            }),
          });
        },
        P = t(9466),
        U = t(234),
        R = t.n(U),
        $ = function () {
          return (0, u.jsx)("div", {
            className: "notfound flex",
            children: (0, u.jsxs)(R(), {
              className: "notfound-wrapper container flex flex-column",
              children: [
                (0, u.jsx)("h1", { children: "404 Not Found" }),
                (0, u.jsx)("p", {
                  children: "There is no such page you are finding.",
                }),
                (0, u.jsx)(P.rU, {
                  to: A.DASHBOARD,
                  children: "Go back to Dashboard",
                }),
              ],
            }),
          });
        },
        L = t(9560),
        H = t(6955),
        z = t(4197),
        W = function (e) {
          return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        I = function (e) {
          var n = e.buyerAddress,
            t = e.startTimeLeft,
            a = e.endTimeLeft,
            s = e.token,
            r = e.tokenContract,
            i = e.presaleContract,
            l = e.presaleSupply,
            c = e.rate,
            o = e.softcap,
            d = e.hardcap,
            p = e.minbuy,
            m = e.maxbuy,
            x = e.startdate,
            h = e.enddate,
            f = e.raisedamount,
            y = e.sold,
            b = e.buyerBase,
            j = e.buyerSale,
            v = e.result,
            N = e.txStatus,
            g = e.onBaseChangeHandler,
            w = e.onDepositHandler,
            T = e.onClaimHandler,
            k = e.onWithdrawBaseHandler;
          return (0, u.jsx)("div", {
            className: "presale flex flex-column",
            children: (0, u.jsxs)(R(), {
              className: "presale-wrapper container flex flex-column",
              children: [
                (0, u.jsx)("h1", { children: "XRXS PreSale" }),
                (0, u.jsxs)("div", {
                  className:
                    "presale-main flex flex-column rounded blur-bg shadowed",
                  children: [
                    (0, u.jsx)("div", {
                      className: "divider flex flex-column",
                      children: (0, u.jsx)("p", {
                        className: "rounded-md",
                        children: "Token Information",
                      }),
                    }),
                    (0, u.jsxs)("div", {
                      className: "presale-main-block flex flex-column",
                      children: [
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Token Name:" }),
                            (0, u.jsx)("span", { children: s.name }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Token Symbol:" }),
                            (0, u.jsx)("span", { children: s.symbol }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Token Decimal:" }),
                            (0, u.jsx)("span", { children: s.decimal }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Token Address:" }),
                            (0, u.jsx)("a", {
                              href: r.explorerUrl,
                              target: "_blank",
                              rel: "noreferrer",
                              children: r.address,
                            }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Presale Supply:" }),
                            (0, u.jsxs)("span", {
                              children: [W(l), " ", s.symbol],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, u.jsx)("div", {
                      className: "divider flex flex-column",
                      children: (0, u.jsx)("p", {
                        className: "rounded-md",
                        children: "Presale Information",
                      }),
                    }),
                    (0, u.jsxs)("div", {
                      className: "presale-main-block flex flex-column",
                      children: [
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", {
                              children: "Presale Address:",
                            }),
                            (0, u.jsx)("a", {
                              href: i.explorerUrl,
                              target: "_blank",
                              rel: "noreferrer",
                              children: i.address,
                            }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Token Rate:" }),
                            (0, u.jsx)("span", { children: c.toExponential() }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Softcap:" }),
                            (0, u.jsxs)("span", {
                              children: [W(Number(o)), " BNB"],
                            }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Hardcap:" }),
                            (0, u.jsxs)("span", {
                              children: [W(Number(d)), " BNB"],
                            }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Min Buy:" }),
                            (0, u.jsxs)("span", {
                              children: [Number(p), " BNB"],
                            }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Max Buy:" }),
                            (0, u.jsxs)("span", {
                              children: [Number(m), " BNB"],
                            }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Start Date:" }),
                            (0, u.jsx)("span", {
                              children:
                                -1 === t
                                  ? "Coming soon"
                                  : new Date(1e3 * x).toUTCString(),
                            }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "End Date:" }),
                            (0, u.jsx)("span", {
                              children:
                                -1 === t
                                  ? "Coming soon"
                                  : new Date(1e3 * h).toUTCString(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, u.jsx)("div", {
                      className: "divider flex flex-column",
                      children: (0, u.jsx)("p", {
                        className: "rounded-md",
                        children: "Presale Status",
                      }),
                    }),
                    (0, u.jsxs)("div", {
                      className: "presale-main-block flex flex-column",
                      children: [
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Raised:" }),
                            (0, u.jsxs)("span", { children: [W(f), " BNB"] }),
                          ],
                        }),
                        (0, u.jsxs)("p", {
                          className: "flex",
                          children: [
                            (0, u.jsx)("span", { children: "Sold" }),
                            (0, u.jsxs)("span", {
                              children: [W(Number(y)), " ", s.symbol],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, u.jsx)("div", {
                      className: "presale-main-sale".concat(
                        void 0 === v
                          ? " presale-loading"
                          : 0 === v
                          ? " presale-queued"
                          : 1 === v
                          ? " presale-active"
                          : 2 === v
                          ? " presale-success"
                          : " presale-inactive",
                        " flex"
                      ),
                      children:
                        void 0 === v
                          ? (0, u.jsx)("span", {
                              className: "rounded-md",
                              children: "Loading",
                            })
                          : 0 === v
                          ? (0, u.jsx)("span", {
                              className: "rounded-md",
                              children: "Queued",
                            })
                          : 1 === v
                          ? (0, u.jsx)("span", {
                              className: "rounded-md",
                              children: "Active",
                            })
                          : 2 === v
                          ? -1 === t
                            ? (0, u.jsx)("span", {
                                className: "rounded-md",
                                children: "Coming soon",
                              })
                            : (0, u.jsx)("span", {
                                className: "rounded-md",
                                children: "Success",
                              })
                          : 3 === v
                          ? (0, u.jsx)("span", {
                              className: "rounded-md",
                              children: "Failure",
                            })
                          : (0, u.jsx)("span", {
                              className: "rounded-md",
                              children: "Wrong Network",
                            }),
                    }),
                    0 === Object.keys(t).length
                      ? void 0 === n || "" === n
                        ? (0, u.jsx)(B, { children: "Connect Wallet" })
                        : 0 === Number(b)
                        ? 3 === v || 2 === v
                          ? -1 === t
                            ? (0, u.jsx)("div", {
                                className:
                                  "presale-main-block flex flex-column",
                                children: (0, u.jsx)("h3", {
                                  children: "Coming Soon",
                                }),
                              })
                            : (0, u.jsx)("div", {
                                className:
                                  "presale-main-block flex flex-column",
                                children: (0, u.jsx)("h3", {
                                  children: "Presale has ended",
                                }),
                              })
                          : (0, u.jsxs)(u.Fragment, {
                              children: [
                                (0, u.jsxs)("div", {
                                  className:
                                    "presale-main-buy flex flex-column",
                                  children: [
                                    (0, u.jsxs)("span", {
                                      children: ["Buy ", s.symbol, " Token"],
                                    }),
                                    (0, u.jsx)("label", {
                                      htmlFor: "amount",
                                      children: "Amount to Buy",
                                    }),
                                    (0, u.jsx)("input", {
                                      id: "amount",
                                      type: "number",
                                      placeholder: "$BNB 1",
                                      onChange: function (e) {
                                        return g(e);
                                      },
                                    }),
                                  ],
                                }),
                                (0, u.jsx)("button", {
                                  onClick:
                                    "Pending" === N
                                      ? function () {}
                                      : function () {
                                          return w();
                                        },
                                  children: "Buy",
                                }),
                              ],
                            })
                        : (0, u.jsxs)(u.Fragment, {
                            children: [
                              (0, u.jsxs)("div", {
                                className:
                                  "presale-main-block flex flex-column",
                                children: [
                                  (0, u.jsxs)("p", {
                                    className: "flex",
                                    children: [
                                      (0, u.jsx)("span", { children: "Sent:" }),
                                      (0, u.jsxs)("span", {
                                        children: [W(b), " BNB"],
                                      }),
                                    ],
                                  }),
                                  (0, u.jsxs)("p", {
                                    className: "flex",
                                    children: [
                                      (0, u.jsx)("span", {
                                        children: "Bought:",
                                      }),
                                      (0, u.jsxs)("span", {
                                        children: [W(Number(j)), " ", s.symbol],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              0 === Object.keys(a).length
                                ? (0, u.jsx)(u.Fragment, {
                                    children:
                                      3 === v
                                        ? (0, u.jsx)("button", {
                                            onClick:
                                              "Pending" === N
                                                ? function () {}
                                                : function () {
                                                    return k();
                                                  },
                                            children: "Get Refund",
                                          })
                                        : (0, u.jsx)("button", {
                                            onClick:
                                              "Pending" === N
                                                ? function () {}
                                                : function () {
                                                    return T();
                                                  },
                                            children: "Claim",
                                          }),
                                  })
                                : (0, u.jsxs)("div", {
                                    className: "presale-timer grid",
                                    children: [
                                      (0, u.jsxs)("div", {
                                        className: "counter flex flex-column",
                                        children: [
                                          (0, u.jsxs)("div", {
                                            className:
                                              "flex rounded-sm blur-bg shadowed",
                                            children: [
                                              (0, u.jsx)("span", {
                                                children: a.days[0],
                                              }),
                                              (0, u.jsx)("span", {
                                                children: a.days[1],
                                              }),
                                            ],
                                          }),
                                          (0, u.jsx)("span", {
                                            children: "Day",
                                          }),
                                        ],
                                      }),
                                      (0, u.jsxs)("div", {
                                        className: "counter flex flex-column",
                                        children: [
                                          (0, u.jsxs)("div", {
                                            className:
                                              "flex rounded-sm blur-bg shadowed",
                                            children: [
                                              (0, u.jsx)("span", {
                                                children: a.hours[0],
                                              }),
                                              (0, u.jsx)("span", {
                                                children: a.hours[1],
                                              }),
                                            ],
                                          }),
                                          (0, u.jsx)("span", {
                                            children: "Hrs",
                                          }),
                                        ],
                                      }),
                                      (0, u.jsxs)("div", {
                                        className: "counter flex flex-column",
                                        children: [
                                          (0, u.jsxs)("div", {
                                            className:
                                              "flex rounded-sm blur-bg shadowed",
                                            children: [
                                              (0, u.jsx)("span", {
                                                children: a.minutes[0],
                                              }),
                                              (0, u.jsx)("span", {
                                                children: a.minutes[1],
                                              }),
                                            ],
                                          }),
                                          (0, u.jsx)("span", {
                                            children: "Min",
                                          }),
                                        ],
                                      }),
                                      (0, u.jsxs)("div", {
                                        className: "counter flex flex-column",
                                        children: [
                                          (0, u.jsxs)("div", {
                                            className:
                                              "flex rounded-sm blur-bg shadowed",
                                            children: [
                                              (0, u.jsx)("span", {
                                                children: a.seconds[0],
                                              }),
                                              (0, u.jsx)("span", {
                                                children: a.seconds[1],
                                              }),
                                            ],
                                          }),
                                          (0, u.jsx)("span", {
                                            children: "Sec",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                            ],
                          })
                      : (0, u.jsxs)("div", {
                          className: "presale-timer grid",
                          children: [
                            (0, u.jsxs)("div", {
                              className: "counter flex flex-column",
                              children: [
                                (0, u.jsxs)("div", {
                                  className: "flex rounded-sm blur-bg shadowed",
                                  children: [
                                    (0, u.jsx)("span", { children: t.days[0] }),
                                    (0, u.jsx)("span", { children: t.days[1] }),
                                  ],
                                }),
                                (0, u.jsx)("span", { children: "Day" }),
                              ],
                            }),
                            (0, u.jsxs)("div", {
                              className: "counter flex flex-column",
                              children: [
                                (0, u.jsxs)("div", {
                                  className: "flex rounded-sm blur-bg shadowed",
                                  children: [
                                    (0, u.jsx)("span", {
                                      children: t.hours[0],
                                    }),
                                    (0, u.jsx)("span", {
                                      children: t.hours[1],
                                    }),
                                  ],
                                }),
                                (0, u.jsx)("span", { children: "Hrs" }),
                              ],
                            }),
                            (0, u.jsxs)("div", {
                              className: "counter flex flex-column",
                              children: [
                                (0, u.jsxs)("div", {
                                  className: "flex rounded-sm blur-bg shadowed",
                                  children: [
                                    (0, u.jsx)("span", {
                                      children: t.minutes[0],
                                    }),
                                    (0, u.jsx)("span", {
                                      children: t.minutes[1],
                                    }),
                                  ],
                                }),
                                (0, u.jsx)("span", { children: "Min" }),
                              ],
                            }),
                            (0, u.jsxs)("div", {
                              className: "counter flex flex-column",
                              children: [
                                (0, u.jsxs)("div", {
                                  className: "flex rounded-sm blur-bg shadowed",
                                  children: [
                                    (0, u.jsx)("span", {
                                      children: t.seconds[0],
                                    }),
                                    (0, u.jsx)("span", {
                                      children: t.seconds[1],
                                    }),
                                  ],
                                }),
                                (0, u.jsx)("span", { children: "Sec" }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          });
        },
        G = function (e) {
          if (0 === e) return -1;
          var n = 1e3 * e - new Date(),
            t = {};
          return (
            n > 0 &&
              (t = {
                days:
                  Math.floor(n / 864e5) < 10
                    ? "0".concat(Math.floor(n / 864e5))
                    : "".concat(Math.floor(n / 864e5)),
                hours:
                  Math.floor((n / 36e5) % 24) < 10
                    ? "0".concat(Math.floor((n / 36e5) % 24))
                    : "".concat(Math.floor((n / 36e5) % 24)),
                minutes:
                  Math.floor((n / 1e3 / 60) % 60) < 10
                    ? "0".concat(Math.floor((n / 1e3 / 60) % 60))
                    : "".concat(Math.floor((n / 1e3 / 60) % 60)),
                seconds:
                  Math.floor((n / 1e3) % 60) < 10
                    ? "0".concat(Math.floor((n / 1e3) % 60))
                    : "".concat(Math.floor((n / 1e3) % 60)),
              }),
            t
          );
        },
        K = t(2851),
        q = t(3118),
        Q = function () {
          return new q.Q(window.ethereum);
        },
        V = function (e, n) {
          var t = Q().getSigner();
          return new K.CH(e, n, t);
        },
        J = function (e, n) {
          var t = Q();
          return new K.CH(e, n, t);
        },
        Y = t(4942),
        X = w.Kj.BSC_MAINNET,
        ee =
          (w.Kj.BSC_TESTNET,
          {
            PRESALE: (0, Y.Z)({}, X, {
              address: "0x3d85f68845768f25aabbd78b22a403a6d6e2c038",
              explorerUrl:
                "https://bscscan.com/address/0x3d85f68845768f25aabbd78b22a403a6d6e2c038",
            }),
            XRXS: (0, Y.Z)({}, X, {
              address: "0x4B3370B44A9E6A4EC28BfDb7C2C400758b59975d",
              explorerUrl:
                "https://bscscan.com/token/0x4B3370B44A9E6A4EC28BfDb7C2C400758b59975d",
            }),
          }),
        ne = function (e) {
          return String(e).toUpperCase();
        },
        te = parseInt("56", 10),
        ae = function (e) {
          var n = ne(e);
          return ee[n][te];
        },
        se = function (e) {
          return ae(e).address;
        },
        re = ae,
        ie = JSON.parse(
          '{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"UserDepsitedSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"UserWithdrawSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"UserWithdrawTokensSuccess","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"buyers","outputs":[{"internalType":"uint256","name":"base","type":"uint256"},{"internalType":"uint256","name":"sale","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lock_delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presale_info","outputs":[{"internalType":"address","name":"sale_token","type":"address"},{"internalType":"uint256","name":"token_rate","type":"uint256"},{"internalType":"uint256","name":"raise_min","type":"uint256"},{"internalType":"uint256","name":"raise_max","type":"uint256"},{"internalType":"uint256","name":"softcap","type":"uint256"},{"internalType":"uint256","name":"hardcap","type":"uint256"},{"internalType":"uint256","name":"presale_start","type":"uint256"},{"internalType":"uint256","name":"presale_end","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"bool","name":"force_failed","type":"bool"},{"internalType":"uint256","name":"raised_amount","type":"uint256"},{"internalType":"uint256","name":"sold_amount","type":"uint256"},{"internalType":"uint256","name":"token_withdraw","type":"uint256"},{"internalType":"uint256","name":"base_withdraw","type":"uint256"},{"internalType":"uint256","name":"num_buyers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokeninfo","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"totalsupply","type":"uint256"},{"internalType":"uint256","name":"decimal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sale_token","type":"address"},{"internalType":"uint256","name":"_token_rate","type":"uint256"},{"internalType":"uint256","name":"_raise_min","type":"uint256"},{"internalType":"uint256","name":"_raise_max","type":"uint256"},{"internalType":"uint256","name":"_softcap","type":"uint256"},{"internalType":"uint256","name":"_hardcap","type":"uint256"},{"internalType":"uint256","name":"_presale_start","type":"uint256"},{"internalType":"uint256","name":"_presale_end","type":"uint256"}],"name":"init_presale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"presaleStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"userDeposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"userWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userWithdrawBaseTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"withdrawICOCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"setLockDelay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"remainingBurn","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
        ),
        le = function () {
          return ie.Mt;
        },
        ce = (function () {
          var e = (0, b.Z)(
            v().mark(function e() {
              var n, t;
              return v().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = J(se("PRESALE"), le())),
                          (e.prev = 1),
                          (e.next = 4),
                          n.presale_info()
                        );
                      case 4:
                        return (t = e.sent), e.abrupt("return", t);
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          e.abrupt("return", {
                            sale_token: "",
                            raise_min: 0,
                            raise_max: 0,
                            softcap: 0,
                            hardcap: 0,
                            presale_start: 0,
                            presale_end: 0,
                          })
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        oe = (function () {
          var e = (0, b.Z)(
            v().mark(function e() {
              var n, t;
              return v().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = J(se("PRESALE"), le())),
                          (e.prev = 1),
                          (e.next = 4),
                          n.status()
                        );
                      case 4:
                        return (t = e.sent), e.abrupt("return", t);
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          e.abrupt("return", {
                            base_withdraw: 0,
                            forced_failed: !1,
                            num_buyers: 0,
                            raised_amount: 0,
                            sold_amount: 0,
                            token_withdraw: 0,
                          })
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ue = (function () {
          var e = (0, b.Z)(
            v().mark(function e() {
              var n, t;
              return v().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = J(se("PRESALE"), le())),
                          (e.prev = 1),
                          (e.next = 4),
                          n.presaleStatus()
                        );
                      case 4:
                        return (
                          (t = e.sent),
                          e.abrupt("return", L.O$.from(t).toNumber())
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          e.abrupt("return", -1)
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        de = (function () {
          var e = (0, b.Z)(
            v().mark(function e(n) {
              var t, a;
              return v().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = J(se("PRESALE"), le())),
                          (e.prev = 1),
                          (e.next = 4),
                          t.buyers(n)
                        );
                      case 4:
                        return (a = e.sent), e.abrupt("return", a);
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          e.abrupt("return", { base: 0, sale: 0 })
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        pe = (function () {
          var e = (0, b.Z)(
            v().mark(function e(n, t, a, s) {
              var r, i;
              return v().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = V(se("PRESALE"), le())),
                          (e.prev = 1),
                          (e.next = 4),
                          r.userDeposit({ value: H.vz(n.toString(), 18) })
                        );
                      case 4:
                        return (
                          (i = e.sent),
                          t("Tx Submitted"),
                          (e.next = 8),
                          i.wait()
                        );
                      case 8:
                        e.sent.transactionHash
                          ? a("Tx Succeed")
                          : s("Tx Failed"),
                          (e.next = 15);
                        break;
                      case 12:
                        (e.prev = 12),
                          (e.t0 = e.catch(1)),
                          e.t0.data ? s(e.t0.data.message) : s(e.t0.message);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 12]]
              );
            })
          );
          return function (n, t, a, s) {
            return e.apply(this, arguments);
          };
        })(),
        me = (function () {
          var e = (0, b.Z)(
            v().mark(function e(n, t, a) {
              var s, r;
              return v().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = V(se("PRESALE"), le())),
                          (e.prev = 1),
                          (e.next = 4),
                          s.userWithdrawTokens()
                        );
                      case 4:
                        return (
                          (r = e.sent),
                          n("Tx Submitted"),
                          (e.next = 8),
                          r.wait()
                        );
                      case 8:
                        e.sent.transactionHash
                          ? t("Tx Succeed")
                          : a("Tx Failed"),
                          (e.next = 15);
                        break;
                      case 12:
                        (e.prev = 12),
                          (e.t0 = e.catch(1)),
                          e.t0.data ? a(e.t0.data.message) : a(e.t0.message);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 12]]
              );
            })
          );
          return function (n, t, a) {
            return e.apply(this, arguments);
          };
        })(),
        xe = (function () {
          var e = (0, b.Z)(
            v().mark(function e(n, t, a) {
              var s, r;
              return v().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = V(se("PRESALE"), le())),
                          (e.prev = 1),
                          (e.next = 4),
                          s.userWithdrawBaseTokens()
                        );
                      case 4:
                        return (
                          (r = e.sent),
                          n("Tx Submitted"),
                          (e.next = 8),
                          r.wait()
                        );
                      case 8:
                        e.sent.transactionHash
                          ? t("Tx Succeed")
                          : a("Tx Failed"),
                          (e.next = 15);
                        break;
                      case 12:
                        (e.prev = 12),
                          (e.t0 = e.catch(1)),
                          e.t0.data ? a(e.t0.data.message) : a(e.t0.message);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 12]]
              );
            })
          );
          return function (n, t, a) {
            return e.apply(this, arguments);
          };
        })(),
        he = w.Kj.BSC_MAINNET,
        fe =
          (w.Kj.BSC_TESTNET,
          {
            xrxstoken: (0, Y.Z)({}, he, {
              name: "XRXS",
              symbol: "XRXS",
              decimal: 18,
              address: "0x4B3370B44A9E6A4EC28BfDb7C2C400758b59975d",
              projectUrl: "https://www.xrxstoken.com/",
            }),
          }),
        ye = parseInt("56", 10),
        be = function (e) {
          var n = ne(e);
          return fe[n][ye];
        },
        je = function () {
          var e = (0, h.Ge)(),
            n = e.account,
            t = e.chainId,
            s = (0, a.useState)(0),
            r = (0, i.Z)(s, 2),
            l = r[0],
            c = r[1],
            o = (0, a.useState)(0),
            d = (0, i.Z)(o, 2),
            p = d[0],
            m = d[1],
            x = (0, a.useState)(0),
            f = (0, i.Z)(x, 2),
            y = f[0],
            j = f[1],
            N = (0, a.useState)(0),
            g = (0, i.Z)(N, 2),
            w = g[0],
            k = g[1],
            _ = (0, a.useState)({}),
            S = (0, i.Z)(_, 2),
            C = S[0],
            B = S[1],
            O = (0, a.useState)({}),
            E = (0, i.Z)(O, 2),
            M = E[0],
            A = E[1],
            Z = (0, a.useState)({}),
            D = (0, i.Z)(Z, 2),
            F = D[0],
            P = D[1],
            U = (0, a.useState)(),
            R = (0, i.Z)(U, 2),
            $ = R[0],
            W = R[1],
            K = (0, a.useState)(""),
            q = (0, i.Z)(K, 2),
            Q = q[0],
            V = q[1],
            J = (0, z.VY)();
          (0, a.useEffect)(
            function () {
              var e = setTimeout(function () {
                  c(l + 1);
                }, 3e3),
                t = (function () {
                  var e = (0, b.Z)(
                    v().mark(function e() {
                      var t, a, s, r;
                      return v().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), de(n);
                            case 2:
                              return (t = e.sent), B(t), (e.next = 6), ce();
                            case 6:
                              return (a = e.sent), A(a), (e.next = 10), oe();
                            case 10:
                              return (s = e.sent), P(s), (e.next = 14), ue();
                            case 14:
                              (r = e.sent), W(r);
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
              return (
                t(),
                function () {
                  J.removeAll(), clearTimeout(e);
                }
              );
            },
            [n, t, l]
          ),
            (0, a.useEffect)(
              function () {
                var e = setTimeout(function () {
                  m(
                    G(
                      Object.keys(M).length > 0
                        ? L.O$.isBigNumber(M.presale_start)
                          ? L.O$.from(M.presale_start).toNumber()
                          : M.presale_start
                        : 0
                    )
                  );
                }, 1e3);
                return function () {
                  return clearTimeout(e);
                };
              },
              [p, l]
            ),
            (0, a.useEffect)(
              function () {
                var e = setTimeout(function () {
                  j(
                    G(
                      Object.keys(M).length > 0
                        ? L.O$.isBigNumber(M.presale_end)
                          ? L.O$.from(M.presale_end).toNumber()
                          : M.presale_end
                        : 0
                    )
                  );
                }, 1e3);
                return function () {
                  return clearTimeout(e);
                };
              },
              [y, l]
            );
          var Y = function (e) {
              return J.info(e, {
                onOpen: function () {
                  V("Pending");
                },
              });
            },
            X = function (e) {
              return J.success(e, {
                onOpen: function () {
                  V("Success");
                },
              });
            },
            ee = function (e) {
              return J.error(e, {
                onOpen: function () {
                  V("Error");
                },
              });
            };
          return (0, u.jsx)(I, {
            buyerAddress: n,
            startTimeLeft: p,
            endTimeLeft: y,
            token: be("XRXS"),
            tokenContract: re("XRXS"),
            presaleContract: re("PRESALE"),
            presaleSupply: 2.92125e3,
            rate: M.token_rate
              ? L.O$.isBigNumber(M.token_rate)
                ? L.O$.from(M.token_rate).toNumber()
                : M.token_rate
              : 0,
            softcap:
              Object.keys(M).length > 0
                ? !0 === L.O$.isBigNumber(M.softcap)
                  ? H.bM(M.softcap, T)
                  : M.softcap
                : 0,
            hardcap:
              Object.keys(M).length > 0
                ? L.O$.isBigNumber(M.hardcap)
                  ? H.bM(M.hardcap, T)
                  : M.hardcap
                : 0,
            minbuy:
              Object.keys(M).length > 0
                ? L.O$.isBigNumber(M.raise_min)
                  ? H.bM(M.raise_min, T)
                  : M.raise_min
                : 0,
            maxbuy:
              Object.keys(M).length > 0
                ? L.O$.isBigNumber(M.raise_max)
                  ? H.bM(M.raise_max, T)
                  : M.raise_max
                : 0,
            startdate:
              Object.keys(M).length > 0
                ? L.O$.isBigNumber(M.presale_start)
                  ? L.O$.from(M.presale_start).toNumber()
                  : M.presale_start
                : 0,
            enddate:
              Object.keys(M).length > 0
                ? L.O$.isBigNumber(M.presale_end)
                  ? L.O$.from(M.presale_end).toNumber()
                  : M.presale_end
                : 0,
            raisedamount:
              Object.keys(F).length > 0
                ? L.O$.isBigNumber(F.raised_amount)
                  ? H.bM(F.raised_amount, T)
                  : F.raised_amount
                : 0,
            sold:
              Object.keys(F).length > 0
                ? L.O$.isBigNumber(F.sold_amount)
                  ? H.bM(F.sold_amount, T)
                  : F.sold_amount
                : 0,
            buyerBase:
              Object.keys(C).length > 0
                ? L.O$.isBigNumber(C.base)
                  ? H.bM(C.base, T)
                  : C.base
                : 0,
            buyerSale:
              Object.keys(C).length > 0
                ? L.O$.isBigNumber(C.sale)
                  ? H.bM(C.sale, T)
                  : C.sale
                : 0,
            result: $,
            txStatus: Q,
            onBaseChangeHandler: function (e) {
              var n = e.target.value;
              k(n <= 0 ? -parseFloat(n) : parseFloat(n));
            },
            onDepositHandler: function () {
              pe(w, Y, X, ee);
            },
            onClaimHandler: function () {
              me(Y, X, ee);
            },
            onWithdrawBaseHandler: function () {
              xe(Y, X, ee);
            },
          });
        },
        ve = function () {
          return (0, u.jsx)(je, {});
        },
        Ne = function (e) {
          var n = e.children;
          return (
            (0, a.useEffect)(
              function () {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              },
              [n]
            ),
            n || null
          );
        },
        ge = function () {
          var e = (0, s.V$)([
            { path: A.PRESALE, element: (0, u.jsx)(ve, {}) },
            { path: A.NOTFOUND, element: (0, u.jsx)($, {}) },
          ]);
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(E, {}),
              (0, u.jsx)(Ne, { children: e }),
              (0, u.jsx)(F, {}),
            ],
          });
        };
    },
  },
]);
