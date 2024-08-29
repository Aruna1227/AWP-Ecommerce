(() => {
  "use strict";
  var e,
    c,
    d,
    a,
    f,
    t = {},
    b = {};
  function r(e) {
    var c = b[e];
    if (void 0 !== c) return c.exports;
    var d = (b[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(d.exports, d, d.exports, r), (d.loaded = !0), d.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (c, d, a, f) => {
      if (!d) {
        var t = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [d, a, f] = e[o], b = !0, n = 0; n < d.length; n++)
            (!1 & f || t >= f) && Object.keys(r.O).every((e) => r.O[e](d[n]))
              ? d.splice(n--, 1)
              : ((b = !1), f < t && (t = f));
          if (b) {
            e.splice(o--, 1);
            var i = a();
            void 0 !== i && (c = i);
          }
        }
        return c;
      }
      f = f || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > f; o--) e[o] = e[o - 1];
      e[o] = [d, a, f];
    }),
    (r.n = (e) => {
      var c = e && e.__esModule ? () => e.default : () => e;
      return r.d(c, { a: c }), c;
    }),
    (d = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (r.t = function (e, a) {
      if ((1 & a && (e = this(e)), 8 & a)) return e;
      if ("object" == typeof e && e) {
        if (4 & a && e.__esModule) return e;
        if (16 & a && "function" == typeof e.then) return e;
      }
      var f = Object.create(null);
      r.r(f);
      var t = {};
      c = c || [null, d({}), d([]), d(d)];
      for (var b = 2 & a && e; "object" == typeof b && !~c.indexOf(b); b = d(b))
        Object.getOwnPropertyNames(b).forEach((c) => (t[c] = () => e[c]));
      return (t.default = () => e), r.d(f, t), f;
    }),
    (r.d = (e, c) => {
      for (var d in c)
        r.o(c, d) &&
          !r.o(e, d) &&
          Object.defineProperty(e, d, { enumerable: !0, get: c[d] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((c, d) => (r.f[d](e, c), c), []))),
    (r.u = (e) =>
      "latest/" +
      e +
      "-" +
      {
        "use-validation-errors_1n1x4pn-i18n":
          "5e34e1653250a523b2cae29b66332d518edfb23b697f05b7726d214bc066893c",
        "use-fields-metadata-translations_u23f5n-i18n":
          "326af643e1c4beb5171be983b48f57c5b2e90ca3dd858b71c49f5aaf8c6a1404",
        "FileUpload_1lacsmn-i18n":
          "76360949ad89efe597ddf9c2da61b2aa52c6985704653af1611837f06482b2ab",
        "use-fetcher_1hd0nff-i18n":
          "fbef1ce00d9f89500d51930d789d961a4aeb8b3fcf536a99541bfb2ded069778",
        "use-theme-section-labels_tuos63-i18n":
          "7a176d61738886b44f97b1e6243cf080fc511479ec86f016e902ee5c244ac7d4",
        "NewThemeForm_z5097z-i18n":
          "548ad81d601101daa3c587511c59612d36c9460cde4a5c2846521b06102c8558",
        "ServerErrorsBanner_4ddewo-i18n":
          "08859a97455cc7f8bcca4aa3529869ae299c17ba59b29ef7a42fb62c40e8ec16",
        "NewThemePage_1iuc4c8-i18n":
          "9ee14ca46adbbe5bcc342d1bb312a7a1ec4c40910d3d8ae1f546c0d20f10c140",
        "ErrorScreen_1mwkui7-i18n":
          "5830e2b1dcc7a2c79a8957b1d45e056bd45439bbca1efbbd17116208e21078dc",
        "UpdateSourceForm_kojsy7-i18n":
          "51fd103e0a8e5987817de9b8d2b20732e363174660a440e9c9164e762e6b7cb9",
        "UpdateSourcePage_1ct102g-i18n":
          "6f7442643da79cfafc9d2b5d12bad8e7e6164d5d759a2ecbd9002d64c9678713",
        "ThemeStyle_1uq9tup-i18n":
          "e8e3042f3b02416475e72949c4b392b730635d4d9e8be712596492a119bd4141",
        "KeyHighlight_3ibou9-i18n":
          "5ff01a95b129627fc12dec66559a471bbfeeb2112c474a2feae7c5de9ff6b741",
        "TaxonomyTags_2rbjju-i18n":
          "9bb235f35e4a6f0e6de0c0255cca23bb30c4632c8500407fddbe20ac4260edb0",
        "ValuePropositionSection_wbhpaz-i18n":
          "98bc0938562c35d64eea7c0d7ced773e5bbf14ef4a4a87a01932a44cc05c82c2",
        "ThemeFileSection_1pd5xbv-i18n":
          "2a10f16d8d9e2337750194e4aa7aa031d586d0c2cfd426fdb9d27bd68a3a2895",
        "ExampleShop_izaj9d-i18n":
          "94f60694e9e3b45758d99ab155add8d1d28911503a09feed3a77cffdca189520",
        "AnalyticsSection_1lhdc63-i18n":
          "4cf2081c9189f54034e7fcb452ac77cf4626aa5c5696f0cdee61b6534ccf608e",
        "ThemeFeaturesSection_37rivv-i18n":
          "4cd30d3049e945e5598602f4950f9ce22c37643b93cf1bb2f5a849aeef48c638",
        "LookAndFeelSection_10v1w0r-i18n":
          "a7bc71c3a4bd7bbfa5013e219c2ed33c82e081a22895c22c9b2e15125a7fb478",
        "ContactSupportSection_hd0na3-i18n":
          "04d407ff583443853be609717f815a1297935b29bcc4d4a5ddea3a3a1db6127a",
        "ReviewNotesSection_1qfi2kb-i18n":
          "fe9c0f101bdf9a100d71fb3d26d73844c52f04225e39d517da4d6ba9e15c14eb",
        "EditListingForm_1eiw227-i18n":
          "01a64ff07fa61926ad47abf6a27e3059f659dee2c94ec0d9daf9652ffd8bd497",
        "ThemeSectionNavigation_1f08rnc-i18n":
          "d7464d73460c551289bac1797a1f1b692963e5f704eca142d2de68274b178c81",
        "SuccessScreen_gwcb2h-i18n":
          "e1d1c0fe3a555957792131a72a3eb7d357c6b1e7e3bda9c54f9c7c44c57dadab",
        "InlineErrorsBanner_1d2osix-i18n":
          "c3347ec5af6e695b6699f3c462238baf882521c90da715f18527b003c3aaac70",
        "EditListingContextualBanners_1dqebu1-i18n":
          "3dc7677641680ea90d519dcf141dfa18d908a2f240a6927cf33922a99b0973a6",
        "EditListingPage_1d82di0-i18n":
          "765447a77d62e2634ad44dacb43dfce66cb6922858cb875157305ebdc79219fa",
        "PageNotFound_1xsd9yw-i18n":
          "a30f932974380adc7a59fd3fb5e7da088f4a7cc807264cf6072308c8c8bf1375",
        "UploadZipForm_6o5ctr-i18n":
          "551d0cff2fac74dbfca405ff7f0f8edd3d36a183e2b05bd19254f2ba1f7c7672",
        "UploadZipPage_11cfhp4-i18n":
          "f03fb1b7776cb38e21daa49faf070ddd725fce3b10e72af7fe0c092e9d2162cb",
      }[e] +
      ".js"),
    (r.miniCssF = (e) => {}),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, c) => Object.prototype.hasOwnProperty.call(e, c)),
    (a = {}),
    (f = "_SK:"),
    (r.l = (e, c, d, t) => {
      if (a[e]) a[e].push(c);
      else {
        var b, n;
        if (void 0 !== d)
          for (
            var i = document.getElementsByTagName("script"), o = 0;
            o < i.length;
            o++
          ) {
            var l = i[o];
            if (
              l.getAttribute("src") == e ||
              l.getAttribute("data-webpack") == f + d
            ) {
              b = l;
              break;
            }
          }
        b ||
          ((n = !0),
          ((b = document.createElement("script")).charset = "utf-8"),
          (b.timeout = 120),
          r.nc && b.setAttribute("nonce", r.nc),
          b.setAttribute("data-webpack", f + d),
          (b.src = e)),
          (a[e] = [c]);
        var u = (c, d) => {
            (b.onerror = b.onload = null), clearTimeout(s);
            var f = a[e];
            if (
              (delete a[e],
              b.parentNode && b.parentNode.removeChild(b),
              f && f.forEach((e) => e(d)),
              c)
            )
              return c(d);
          },
          s = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: b }),
            12e4
          );
        (b.onerror = u.bind(null, b.onerror)),
          (b.onload = u.bind(null, b.onload)),
          n && document.head.appendChild(b);
      }
    }),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (r.p = "https://cdn.shopify.com/shopifycloud/theme_store/bundles/"),
    (() => {
      var e = { runtime: 0 };
      (r.f.j = (c, d) => {
        var a = r.o(e, c) ? e[c] : void 0;
        if (0 !== a)
          if (a) d.push(a[2]);
          else if ("runtime" != c) {
            var f = new Promise((d, f) => (a = e[c] = [d, f]));
            d.push((a[2] = f));
            var t = r.p + r.u(c),
              b = new Error();
            r.l(
              t,
              (d) => {
                if (r.o(e, c) && (0 !== (a = e[c]) && (e[c] = void 0), a)) {
                  var f = d && ("load" === d.type ? "missing" : d.type),
                    t = d && d.target && d.target.src;
                  (b.message =
                    "Loading chunk " + c + " failed.\n(" + f + ": " + t + ")"),
                    (b.name = "ChunkLoadError"),
                    (b.type = f),
                    (b.request = t),
                    a[1](b);
                }
              },
              "chunk-" + c,
              c
            );
          } else e[c] = 0;
      }),
        (r.O.j = (c) => 0 === e[c]);
      var c = (c, d) => {
          var a,
            f,
            [t, b, n] = d,
            i = 0;
          if (t.some((c) => 0 !== e[c])) {
            for (a in b) r.o(b, a) && (r.m[a] = b[a]);
            if (n) var o = n(r);
          }
          for (c && c(d); i < t.length; i++)
            (f = t[i]), r.o(e, f) && e[f] && e[f][0](), (e[f] = 0);
          return r.O(o);
        },
        d = (self.webpackChunk_SK = self.webpackChunk_SK || []);
      d.forEach(c.bind(null, 0)), (d.push = c.bind(null, d.push.bind(d)));
    })();
})();
