(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8060: function (e, r, s) {
      "use strict";
      var a = s(1664),
        n = s.n(a),
        l = s(1163),
        i = s(7294),
        t = s(3750),
        o = s(596),
        c = s(1029),
        d = s(787),
        p = s(5893);
      r.Z = function () {
        var e = (0, l.useRouter)(),
          r = (0, i.useContext)(o.z),
          s = r.cursorExpanded,
          a = r.cursorNormal,
          h = r.cursorShowPreview,
          m = r.fontRegular;
        return (0, p.jsxs)(d.O3, {
          home: "/" == e.asPath,
          isAbout: "/about" == e.asPath ? 1 : 0,
          children: [
            (0, p.jsx)(c.c6, {
              "data-scroll": !0,
              children: (0, p.jsx)(d.CF, {
                children: "/about" == e.asPath ? "Projects" : "More Projects",
              }),
            }),
            (0, p.jsxs)("div", {
              onMouseEnter: s,
              onMouseLeave: a,
              children: [
                "/" != e.asPath &&
                  "/heavenly-bodies" != e.asPath &&
                  "/#gotoprojects" != e.asPath &&
                  (0, p.jsx)(n(), {
                    href: "#",
                    passHref: !0,
                    scroll: !1,
                    children: (0, p.jsx)("a", {
                      children: (0, p.jsx)(c.c6, {
                        "data-scroll": !0,
                        onMouseEnter: function (e) {
                          return h("Solar", e);
                        },
                        onMouseLeave: function (e) {
                          return m(e);
                        },
                        children: (0, p.jsxs)(d.IK, {
                          children: [
                            (0, p.jsx)(d.vU, { children: "Heavenly Bodies" }),
                            (0, p.jsx)(d.xk, {
                              className: "Bubble",
                              children: (0, p.jsx)(t.lzl, {
                                size: "24px",
                                className: "arrow",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                "/" != e.asPath &&
                  "/cinephiled" != e.asPath &&
                  "/#gotoprojects" != e.asPath &&
                  (0, p.jsx)(n(), {
                    href: "#",
                    passHref: !0,
                    scroll: !1,
                    children: (0, p.jsx)("a", {
                      children: (0, p.jsx)(c.c6, {
                        "data-scroll": !0,
                        onMouseEnter: function (e) {
                          return h("cinephiled", e);
                        },
                        onMouseLeave: function (e) {
                          return m(e);
                        },
                        children: (0, p.jsxs)(d.IK, {
                          children: [
                            (0, p.jsx)(d.vU, { children: "Cinephiled" }),
                            (0, p.jsx)(d.xk, {
                              className: "Bubble",
                              children: (0, p.jsx)(t.lzl, {
                                size: "24px",
                                className: "arrow",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                "/bmw-m4" != e.asPath &&
                  "/" != e.asPath &&
                  "/#gotoprojects" != e.asPath &&
                  (0, p.jsx)(n(), {
                    href: "#",
                    children: (0, p.jsx)("a", {
                      children: (0, p.jsx)(c.c6, {
                        "data-scroll": !0,
                        onMouseEnter: function (e) {
                          return h("BMW", e);
                        },
                        onMouseLeave: function (e) {
                          return m(e);
                        },
                        children: (0, p.jsxs)(d.IK, {
                          children: [
                            (0, p.jsx)(d.vU, { children: "503hp" }),
                            (0, p.jsx)(d.xk, {
                              className: "Bubble",
                              children: (0, p.jsx)(t.lzl, {
                                size: "24px",
                                className: "arrow",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                "/UnityHub" != e.asPath &&
                  (0, p.jsx)(n(), {
                    href: "https://mohsinkumarkiri.github.io/UnityHub",
                    passHref: !0,
                    scroll: !1,
                    children: (0, p.jsx)("a", {
                      children: (0, p.jsx)(c.c6, {
                        "data-scroll": !0,
                        onMouseEnter: function (e) {
                          return h("UnityHub", e);
                        },
                        onMouseLeave: function (e) {
                          return m(e);
                        },
                        children: (0, p.jsxs)(d.IK, {
                          children: [
                            (0, p.jsx)(d.vU, { children: "Unity Hub" }),
                            (0, p.jsx)(d.xk, {
                              className: "Bubble",
                              children: (0, p.jsx)(t.lzl, {
                                size: "24px",
                                className: "arrow",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                (0, p.jsx)("a", {
                  href: "https://how-old-am-i.vercel.app",
                  target: "_blank",
                  rel: "noreferrer",
                  children: (0, p.jsx)(c.c6, {
                    "data-scroll": !0,
                    onMouseEnter: function (e) {
                      return h("ageCalc", e);
                    },
                    onMouseLeave: function (e) {
                      return m(e);
                    },
                    children: (0, p.jsxs)(d.IK, {
                      children: [
                        (0, p.jsx)(d.vU, { children: "How old am i ?" }),
                        (0, p.jsx)(d.xk, {
                          className: "Bubble",
                          children: (0, p.jsx)(t.lzl, {
                            size: "24px",
                            className: "arrow",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    787: function (e, r, s) {
      "use strict";
      s.d(r, {
        Ag: function () {
          return t;
        },
        CF: function () {
          return i;
        },
        IK: function () {
          return l;
        },
        O3: function () {
          return n;
        },
        vU: function () {
          return o;
        },
        xk: function () {
          return c;
        },
      });
      var a = s(7379),
        n = a.default.div.withConfig({
          displayName: "ProjectsStyles__ProjectsWrapper",
          componentId: "sc-1y7m4pr-0",
        })(
          [
            "width:100%;padding:0rem 4rem;margin:",
            ";@media only ",
            "{padding:0rem 3rem;margin:",
            ";}@media only ",
            "{padding:0rem 2rem;margin:",
            ";}@media only ",
            "{padding:0rem 1rem;margin:",
            ";}",
            "{}",
          ],
          function (e) {
            return e.home ? "5rem 0rem 2rem 0rem" : "6rem 0rem 2rem 0rem";
          },
          function (e) {
            return e.theme.breakpoints.lg;
          },
          function (e) {
            return e.home ? "5rem 0rem 2rem 0rem" : "6rem 0rem 2rem 0rem";
          },
          function (e) {
            return e.theme.breakpoints.sm;
          },
          function (e) {
            return e.home ? "5rem 0rem 3rem 0rem" : "6rem 0rem 3rem 0rem";
          },
          function (e) {
            return e.theme.breakpoints.xs;
          },
          function (e) {
            return e.home ? "3rem 0rem 2rem 0rem" : "4rem 0rem 2rem 0rem";
          },
          function (e) {
            return e.isAbout && "margin: 0rem !important;";
          }
        ),
        l = a.default.div.withConfig({
          displayName: "ProjectsStyles__Project",
          componentId: "sc-1y7m4pr-1",
        })(
          [
            "width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;padding-bottom:1.25rem;border-bottom:1px solid #ddd;margin-bottom:1.5rem;.arrow{color:white;}&::after{content:'';width:100%;height:1.25px;background:#000;position:absolute;bottom:-1.25px;transform:scaleX(0);transition:0.4s ease-in-out;transform-origin:0% 50%;}@media only ",
            "{&:hover{border-bottom:1px solid transparent;&::after{transform:scaleX(1);}.Bubble{background-color:black;transform:scale(1);}.arrow{animation:arrow 0.4s 0.1s ease-in-out forwards;@keyframes arrow{0%{transform:translateX(0px);border:none;}50%{transform:translateX(100px);}55%{color:black;transform:translateX(-100px);}100%{transform:translateX(0px);}}}}}",
          ],
          function (e) {
            return e.theme.breakpoints.hover;
          }
        ),
        i = a.default.h2.withConfig({
          displayName: "ProjectsStyles__ProjectsHead",
          componentId: "sc-1y7m4pr-2",
        })(
          [
            "font-size:clamp(3rem,8vw,5rem);margin-bottom:clamp(3rem,8vw,5rem);font-weight:450;&.index{@media only ",
            "{margin-bottom:2rem;}}",
          ],
          function (e) {
            return e.theme.breakpoints.ip;
          }
        ),
        t = a.default.div.withConfig({
          displayName: "ProjectsStyles__ProjectsHeadWrapper",
          componentId: "sc-1y7m4pr-3",
        })(
          [
            "width:100%;padding:0rem 4rem;h2{margin-bottom:0rem;}@media only ",
            "{padding:0rem 3rem;}@media only ",
            "{padding:0rem 2rem;}@media only ",
            "{padding:0rem 1rem;}",
          ],
          function (e) {
            return e.theme.breakpoints.lg;
          },
          function (e) {
            return e.theme.breakpoints.sm;
          },
          function (e) {
            return e.theme.breakpoints.xs;
          }
        ),
        o = a.default.h3.withConfig({
          displayName: "ProjectsStyles__ProjectTitle",
          componentId: "sc-1y7m4pr-4",
        })([
          "font-size:clamp(2rem,5.5vw,2.5rem);font-weight:450;font-variation-settings:'wdth' 100,'wght' 450;pointer-events:none;transition:font-variation-settings 0.3s ease-in-out;&.fontBold{font-variation-settings:'wdth' 110,'wght' 600;}",
        ]),
        c = a.default.div.withConfig({
          displayName: "ProjectsStyles__LinkBubble",
          componentId: "sc-1y7m4pr-5",
        })([
          "width:75px;height:75px;display:grid;place-items:center;border-radius:50%;background-color:black;overflow:hidden;transform:scale(0.8);transition:0.2s transform ease-in-out;pointer-events:none;",
        ]);
    },
    6783: function (e, r, s) {
      "use strict";
      s.r(r),
        s.d(r, {
          default: function () {
            return f;
          },
        });
      var a = s(1653),
        n = s(1664),
        l = s.n(n),
        i = s(8075),
        t = s(1029),
        o = s(2691),
        c = s(5893),
        d = function () {
          var e = (0, i.lh)().scroll;
          return (0, c.jsxs)(o.UI, {
            "data-scroll": !0,
            children: [
              (0, c.jsxs)(o.Mj, {
                "data-scroll": !0,
                children: [
                  (0, c.jsx)(o.yw, {
                    children: (0, c.jsx)(o.Rl, {
                      children: "Hi, I'm Tayyab Shaikh",
                    }),
                  }),
                  (0, c.jsx)(o.yw, {
                    children: (0, c.jsx)(o.Rl, {
                      large: 1,
                      delay: 1,
                      children: "I turn logic into pixels",
                    }),
                  }),
                  (0, c.jsx)(o.yw, {
                    children: (0, c.jsx)(o.Os, {
                      children:
                        "I am a dedicated and passionate .NET full-stack developer hailing from the vibrant state of Maharashtra, India. Currently navigating the realm of software engineering as a student, my journey is fueled by a profound enthusiasm for building robust solutions and a relentless pursuit of knowledge.",
                    }),
                  }),
                  (0, c.jsxs)(o.P_, {
                    children: [
                      (0, c.jsx)(l(), {
                        href: "#",
                        passHref: !0,
                        children: (0, c.jsx)("a", {
                          className: "aboutMeLink",
                          children: (0, c.jsx)(a.E.div, {
                            className: "aboutMe",
                            whileTap: { scale: 0.9 },
                            role: "button",
                            children: (0, c.jsx)("span", {
                              children: "About Me",
                            }),
                          }),
                        }),
                      }),
                      (0, c.jsx)(a.E.div, {
                        whileTap: { scale: 0.9 },
                        children: (0, c.jsx)(o.IN, {
                          role: "button",
                          onClick: function () {
                            window.innerHeight > 950
                              ? e.scrollTo("#projects", { offset: -140 })
                              : e.scrollTo("#projects", { offset: -110 });
                          },
                          children: (0, c.jsx)("span", { children: "Archive" }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, c.jsx)(t.Mu, {
                as: a.E.div,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 1, delay: 4 },
                children: (0, c.jsx)(t.As, {}),
              }),
            ],
          });
        },
        p = s(9008),
        h = s.n(p),
        m = [
          "AHS.jpg",
          "Arcane.jpg",
          "Batman.jpg",
          "Black_Mirror.jpg",
          "Blade_Runner.jpg",
          "Bojack.jpg",
          "Boys.jpg",
          "Breaking_Bad.jpg",
          "Daredevil.jpg",
          "Deadpool.jpg",
          "Dune.jpg",
          "Get_Out.jpg",
          "Green_Knight.jpg",
          "Hill_House.jpg",
          "Inception.jpg",
          "Joker.jpg",
          "Knives_Out.jpg",
          "Light_House.jpg",
          "Midsommar.jpg",
          "Nightcrawler.jpg",
          "Ozark.jpg",
          "Punisher.jpg",
          "R_M.jpg",
          "Robot.jpg",
          "Sherlock.jpg",
          "Soho.jpg",
          "Squid_Game.jpg",
          "You.jpg",
        ],
        x = function () {
          return (0, c.jsxs)(h(), {
            children: [
              (0, c.jsx)("title", { children: "Tayyab Shaikh - Home" }),
              m.map(function (e, r) {
                return (0,
                c.jsx)("link", { rel: "preload", href: "/Images/Cinephiled/Posters/".concat(e), as: "image" }, r);
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/Box1.jpeg",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/Box2.jpeg",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/Box3.jpeg",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/Box4.jpeg",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/BMW/BMW_M4.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/PixelOS/pixelos.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/CursorBG/Solar.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/CursorBG/BMW.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/CursorBG/prettyPixels.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/CursorBG/thermal-radar.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/CursorBG/ageCalc.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/CursorBG/cinephiled.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/CursorBG/pixelos.webp",
                as: "image",
              }),
              (0, c.jsx)("link", {
                rel: "preload",
                href: "/Images/CursorBG/pokemon.webp",
                as: "image",
              }),
            ],
          });
        },
        j = s(8060),
        u = s(787);
      function f() {
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(x, {}),
            (0, c.jsx)(t.Il, {
              "data-scroll-section": !0,
              children: (0, c.jsx)(t.OU, {
                "data-scroll": !0,
                children: (0, c.jsx)(d, {}),
              }),
            }),
            (0, c.jsxs)(t.Il, {
              "data-scroll-section": !0,
              id: "projects",
              children: [
                (0, c.jsx)(t.c6, {
                  "data-scroll": !0,
                  "data-scroll-offset": "20%",
                  children: (0, c.jsx)(u.Ag, {
                    "data-scroll": !0,
                    children: (0, c.jsx)(u.CF, {
                      className: "index",
                      children: "Projects",
                    }),
                  }),
                }),
                (0, c.jsx)(t.OU, {
                  "data-scroll": !0,
                  children: (0, c.jsxs)(t.dI, {
                    "data-scroll": !0,
                    "data-scroll-speed": "2",
                    children: [
                      (0, c.jsx)(t.U3, {
                        "data-scroll": !0,
                        "data-scroll-speed": "1",
                        className: "projectTitle",
                        children: (0, c.jsxs)(t.LR, {
                          "data-scroll": !0,
                          children: [
                            (0, c.jsx)("span", {
                              className: "Span-1",
                              children: "H",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-2",
                              children: "e",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-3",
                              children: "a",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-4",
                              children: "v",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-5",
                              children: "e",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-6",
                              children: "n",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-7",
                              children: "l",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-8",
                              children: "y",
                            }),
                            " ",
                            (0, c.jsx)("br", {}),
                            " ",
                            (0, c.jsx)("span", {
                              className: "Span-9",
                              children: "B",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-10",
                              children: "o",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-11",
                              children: "d",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-12",
                              children: "i",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-13",
                              children: "e",
                            }),
                            (0, c.jsx)("span", {
                              className: "Span-14",
                              children: "s",
                            }),
                          ],
                        }),
                      }),
                      (0, c.jsx)(t.D$, {
                        "data-scroll": !0,
                        children: (0, c.jsx)(t.bZ, {
                          "data-scroll": !0,
                          "data-scroll-speed": "-1.6",
                          "data-scroll-offset": "25%",
                          children: (0, c.jsx)(t.ir, {
                            image: "/Images/HeavenlyBodies/Planets.webp",
                            "data-scroll": !0,
                            "data-scroll-offset": "25%",
                          }),
                        }),
                      }),
                      (0, c.jsx)(l(), {
                        href: "#",
                        passHref: !0,
                        children: (0, c.jsx)("a", {
                          "data-scroll": !0,
                          children: (0, c.jsx)(t.Jy, {
                            as: a.E.div,
                            whileTap: {
                              scale: 0.7,
                              transition: { duration: 0.3 },
                            },
                            role: "button",
                            children: (0, c.jsx)("span", {
                              className: "exploreText",
                              children: "Explore",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, c.jsx)(t.Il, {
              "data-scroll-section": !0,
              children: (0, c.jsx)(t.OU, {
                children: (0, c.jsxs)(t.IB, {
                  "data-scroll": !0,
                  "data-scroll-speed": "3",
                  children: [
                    (0, c.jsx)(t.nA, {
                      "data-scroll": !0,
                      children: (0, c.jsx)(t.dT, {
                        "data-scroll": !0,
                        "data-scroll-speed": "-1.5",
                        "data-scroll-offset": "35%",
                        children: (0, c.jsx)(t.$O, {
                          "data-scroll": !0,
                          "data-scroll-offset": "35%",
                        }),
                      }),
                    }),
                    (0, c.jsx)(t.U3, {
                      right: !0,
                      "data-scroll": !0,
                      "data-scroll-speed": "1",
                      className: "projectTitle",
                      children: (0, c.jsxs)(t.LR, {
                        "data-scroll": !0,
                        children: [
                          (0, c.jsx)("span", {
                            className: "Span-1",
                            children: "C",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-2",
                            children: "i",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-3",
                            children: "n",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-4",
                            children: "e",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-5",
                            children: "p",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-6",
                            children: "h",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-7",
                            children: "i",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-8",
                            children: "l",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-9",
                            children: "e",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-10",
                            children: "d",
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)(l(), {
                      href: "#",
                      passHref: !0,
                      scroll: !1,
                      children: (0, c.jsx)("a", {
                        "data-scroll": !0,
                        children: (0, c.jsx)(t.OC, {
                          as: a.E.div,
                          whileTap: {
                            scale: 0.7,
                            transition: { duration: 0.3 },
                          },
                          role: "button",
                          children: (0, c.jsx)("span", {
                            className: "exploreText",
                            children: "Explore",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, c.jsx)(t.Il, {
              "data-scroll-section": !0,
              id: "projects",
              children: (0, c.jsx)(t.OU, {
                "data-scroll": !0,
                children: (0, c.jsxs)(t.dI, {
                  "data-scroll": !0,
                  "data-scroll-speed": "2",
                  children: [
                    (0, c.jsx)(t.U3, {
                      "data-scroll": !0,
                      "data-scroll-speed": "1",
                      className: "projectTitle",
                      children: (0, c.jsxs)(t.LR, {
                        "data-scroll": !0,
                        children: [
                          (0, c.jsx)("span", {
                            className: "Span-1",
                            children: "5",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-2",
                            children: "0",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-3",
                            children: "3",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-4",
                            children: "h",
                          }),
                          (0, c.jsx)("span", {
                            className: "Span-5",
                            children: "p",
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)(t.D$, {
                      "data-scroll": !0,
                      children: (0, c.jsx)(t.bZ, {
                        "data-scroll": !0,
                        "data-scroll-speed": "-1.6",
                        "data-scroll-offset": "25%",
                        children: (0, c.jsx)(t.ir, {
                          image: "/Images/BMW/BMW_Banner.webp",
                          "data-scroll": !0,
                          "data-scroll-offset": "25%",
                        }),
                      }),
                    }),
                    (0, c.jsx)(l(), {
                      href: "#",
                      passHref: !0,
                      children: (0, c.jsx)("a", {
                        "data-scroll": !0,
                        children: (0, c.jsx)(t.OC, {
                          as: a.E.div,
                          whileTap: {
                            scale: 0.7,
                            transition: { duration: 0.3 },
                          },
                          role: "button",
                          children: (0, c.jsx)("span", {
                            className: "exploreText",
                            children: "Explore",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, c.jsx)(t.Il, {
              "data-scroll-section": !0,
              children: (0, c.jsx)(j.Z, {}),
            }),
          ],
        });
      }
    },
    5557: function (e, r, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(6783);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (r = 5557), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
