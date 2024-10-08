(self.webpackChunk_SK = self.webpackChunk_SK || []).push([
  ["application"],
  {
    "./app/ui/application/index.js": (e, t, n) => {
      "use strict";
      n.r(t);
      var s = n("../caches/app/node_modules/@shopify/dux/dist/index.js"),
        r =
          (n("../caches/app/node_modules/@shopify/polyfills/base.esnext"),
          n(
            "../caches/app/node_modules/@shopify/marketing-assets/dist/javascripts/index.js"
          )),
        i = n("../caches/app/node_modules/jquery/dist/jquery.js"),
        a = n.n(i);
      n("./app/ui/application/vendor/jquery.validationEngine.js"),
        n("./app/ui/application/vendor/jquery.validationEngine-en.js"),
        n("./app/ui/application/vendor/jquery.sticky.js");
      a().ajaxSetup({
        beforeSend: function (e, t) {
          t.skipHeaderOverride ||
            e.setRequestHeader("Accept", "text/javascript");
        },
      }),
        (a().cookie = function (e, t, n) {
          if (arguments.length > 1 && "[object Object]" !== String(t)) {
            if (
              ((n = a().extend({}, n)),
              null == t && (n.expires = -1),
              "number" == typeof n.expires)
            ) {
              var s = n.expires,
                r = (n.expires = new Date());
              r.setDate(r.getDate() + s);
            }
            return (
              (t = String(t)),
              (document.cookie = [
                encodeURIComponent(e),
                "=",
                n.raw ? t : encodeURIComponent(t),
                n.expires ? "; expires=" + n.expires.toUTCString() : "",
                n.path ? "; path=" + n.path : "",
                n.domain ? "; domain=" + n.domain : "",
                n.secure ? "; secure" : "",
              ].join(""))
            );
          }
          var i,
            o = (n = t || {}).raw
              ? function (e) {
                  return e;
                }
              : decodeURIComponent;
          return (i = new RegExp(
            "(?:^|; )" + encodeURIComponent(e) + "=([^;]*)"
          ).exec(document.cookie))
            ? o(i[1])
            : null;
        }),
        (window.getURLParameter = function (e) {
          return (
            decodeURIComponent(
              (new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(
                location.search
              ) || [, ""])[1].replace(/\+/g, "%20")
            ) || null
          );
        }),
        a().fn.extend({
          size: function () {
            return this.length;
          },
        }),
        (a().fn.putCursorAtEnd = function () {
          return this.each(function () {
            var e = a()(this),
              t = this;
            if ((e.is(":focus") || e.focus(), t.setSelectionRange)) {
              var n = 2 * e.val().length;
              setTimeout(function () {
                t.setSelectionRange(n, n);
              }, 1);
            } else e.val(e.val());
          });
        });
      n("./app/ui/application/vendor/modernizr.exec.js");
      var o = n("../caches/app/node_modules/@bugsnag/browser/dist/bugsnag.js"),
        l = n.n(o);
      function d(e) {
        l().notify(e);
      }
      const c = [
          {
            urlKey: "surface_type",
            monorailKey: "surfaceType",
            type: "string",
          },
          {
            urlKey: "surface_detail",
            monorailKey: "surfaceDetail",
            type: "string",
          },
          {
            urlKey: "surface_inter_position",
            monorailKey: "surfaceInterPosition",
            type: "number",
          },
          {
            urlKey: "surface_intra_position",
            monorailKey: "surfaceIntraPosition",
            type: "number",
          },
        ],
        u = [
          { urlKey: "utm_source", monorailKey: "utmSource", type: "string" },
          { urlKey: "utm_medium", monorailKey: "utmMedium", type: "string" },
          {
            urlKey: "utm_campaign",
            monorailKey: "utmCampaign",
            type: "string",
          },
          { urlKey: "utm_term", monorailKey: "utmTerm", type: "string" },
          { urlKey: "utm_content", monorailKey: "utmContent", type: "string" },
        ],
        h = [
          { urlKey: "st_source", monorailKey: "stSource", type: "string" },
          { urlKey: "st_campaign", monorailKey: "stCampaign", type: "string" },
        ];
      function p(e) {
        var t;
        const n = (
          null === (t = document) || void 0 === t
            ? void 0
            : t.cookie.split("; ")
        ).find((t) => (null == t ? void 0 : t.startsWith(e)));
        return n ? n.split("=")[1] : "";
      }
      function m(e) {
        return new URL(window.location.href).searchParams.get(e) ?? void 0;
      }
      function f(e) {
        return new URL(window.location.href).searchParams.getAll(e);
      }
      function v(e, t) {
        return e.getAttribute(t) ?? void 0;
      }
      function g(e, t) {
        const n = v(e, t);
        if (void 0 !== n && "" !== n) return parseInt(n);
      }
      function y() {
        return S(u);
      }
      function b() {
        return S(h);
      }
      function w(e) {
        return {
          userToken: p("_shopify_y"),
          sessionToken: p("_shopify_s"),
          shopId: g(e, "data-shop-id"),
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          locale: m("locale") || navigator.language,
          pageUrl: window.location.href,
          pageviewId: k(),
        };
      }
      function x(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (t) {
          return null;
        }
      }
      function k() {
        try {
          return window.trekkie.trekkie.defaultAttributes.microSessionId;
        } catch (e) {
          return d(e), "";
        }
      }
      function S(e) {
        const t = {};
        for (const n of e) {
          let e = m(n.urlKey);
          void 0 !== e && "" !== e.trim() && "number" === n.type
            ? (t[n.monorailKey] = parseInt(e))
            : (t[n.monorailKey] = e || void 0);
        }
        return t;
      }
      function T(e) {
        const t = x(v(e, "data-theme-filters")) || [],
          n = {};
        return (
          t.forEach((e) => {
            const t = f(e + "[]"),
              s = f(e),
              r = new Set([...t, ...s]);
            r.size > 0 && (n[e] = [...r]);
          }),
          JSON.stringify(n)
        );
      }
      function C() {
        var e;
        const t = document.querySelector("#SortBy");
        return null == t || null === (e = t.firstChild) || void 0 === e
          ? void 0
          : e.value;
      }
      function E(e) {
        e.on("change", function (e) {
          window.location.href = "/websites/" + a()(e.currentTarget).val();
        });
      }
      var F = "theme-search--is-active",
        A = "theme-search__results",
        $ = "theme-search__results-button",
        P = "theme-search__results-link",
        q = "theme-search__results-text",
        I = "theme-search__input-clear-button",
        L = "theme-search__results-section--is-visible",
        j = "theme-search-overlay--is-open",
        M = "page--search-is-open",
        R = "theme-search__results-button--is-active",
        O = {
          $window: a()(window),
          $html: a()("html"),
          $body: a()("body"),
          $searchOverlay: a()(".theme-search-overlay"),
          $searchOverlayActivators: a()(
            '[data-module="theme-search-activator"]'
          ),
          $pageContainer: a()("#PageContainer"),
        },
        z = /[\\^$.*+?()[\]{}|]/g,
        D = RegExp(z.source);
      function B(e, t) {
        var n,
          s =
            "\\b" +
            _.compact(
              ((n = t), (n = String(n)) && D.test(n) ? n.replace(z, "\\$&") : n)
                .trim()
                .split(" ")
            ).join("\\b|\\b");
        return e.replace(new RegExp(s, "gi"), function (e) {
          return "<em>" + e + "</em>";
        });
      }
      function N(e) {
        (!e.length && e instanceof jQuery) ||
          ((this.nodes = {
            $searchNode: e,
            $searchForm: e.find(".theme-search__form"),
            $searchInput: e.find(".theme-search__input"),
            $searchResults: e.find(".theme-search__results"),
            $searchSuggestions: e.find(
              ".theme-search__results-section--suggestions"
            ),
            $searchSuggestionsList: e.find(
              ".theme-search__results-section--suggestions .theme-search__results-list"
            ),
            $searchSuggestionsButtons: e.find(
              ".theme-search__results-section--suggestions .theme-search__results-button"
            ),
            $quickLinks: e.find(".theme-search__results-section--quick-links"),
            $quickLinksList: e.find(
              ".theme-search__results-section--quick-links .theme-search__results-list"
            ),
            $emptyState: e.find(".theme-search__results-section--empty"),
            $emptyStateList: e.find(
              ".theme-search__results-section--empty .theme-search__results-list"
            ),
            $emptyStateButtons: e.find(
              ".theme-search__results-section--empty .theme-search__result"
            ),
            $searchInputClearButton: e.find(
              ".theme-search__input-clear-button"
            ),
            $searchInputCloseButton: e.find(
              ".theme-search__input-close-button"
            ),
            $screenReaderText: e.find("#searchResultsScreenReaderText"),
          }),
          (this.isResultsOpen = !1),
          (this.isOverlayOpen = !1),
          (this.isNavigatingResults = !1),
          (this.currentQuickLinkUrl = null),
          this.currentResultsIndex,
          (this.previousQuery = ""),
          (this.queryOnLoad = this.nodes.$searchInput.val()),
          (this.queryBeforeNavigatingResults = this.nodes.$searchInput.val()),
          (this.numberOfResults = this.nodes.$emptyStateButtons.length),
          (this.$currentResults = this.nodes.$emptyStateButtons),
          O.$searchOverlayActivators.on("click", this.openOverlay.bind(this)),
          this.nodes.$searchInput
            .on("focus", this.openResults.bind(this))
            .on("keyup paste cut", this.onSearchInputChange.bind(this))
            .on("keydown", this.navigateResults.bind(this)),
          this.nodes.$searchNode.on(
            "blur",
            ".theme-search__input",
            this.closeResults.bind(this)
          ),
          this.nodes.$searchResults
            .on("click", this.goToResult.bind(this))
            .on("blur", this.closeResults.bind(this)),
          this.nodes.$searchInputClearButton.on(
            "click",
            this.resetSearch.bind(this)
          ),
          this.nodes.$searchInputCloseButton.on(
            "click",
            this.closeOverlay.bind(this)
          ),
          this.nodes.$searchForm.on(
            "submit",
            this.checkIfQuickLinkUrl.bind(this)
          ));
      }
      function V(e) {
        var t = e.find(".marketing-form__button"),
          n = e.find(".marketing-form__messages");
        function s(e) {
          n.html(a()("<span/>", { class: "error" }).text(e));
        }
        e.on("submit", function (n) {
          n.preventDefault(),
            t.attr("disabled", !0),
            a()
              .post({ url: "/login/authenticate_shop", data: e.serialize() })
              .done(function (e) {
                e.redirect && (window.location = e.redirect),
                  e.error && s(e.error);
              })
              .fail(function () {
                s(
                  r.ag.t("theme_store_frontend.unexpected_login_error", {
                    defaults: [
                      { scope: "theme_store_frontend.unexpected_login_error" },
                    ],
                  })
                );
              })
              .always(function () {
                t.attr("disabled", !1);
              });
        });
      }
      function U(e, t) {
        var n = _.extend(
          {
            reviewLink: "#ReviewLink",
            reviewForm: "#ReviewForm",
            submitReview: ".new_review, .edit_review",
          },
          t
        );
        (this.$nodes = {
          body: a()(document.body),
          reviewWrapper: e,
          reviewLink: e.find(n.reviewLink),
          reviewURL: e.find(n.reviewLink).attr("href"),
          reviewForm: e.find(n.reviewForm),
        }),
          (this.initReviewModalComplete = _.bind(
            this.initReviewModalComplete,
            this
          )),
          (this._getModalMarkup = _.bind(this._getModalMarkup, this));
        this.$nodes.reviewLink.data("disable-modal") ||
          (this.$nodes.reviewForm.length && this.initReviewModal());
      }
      function W(e) {
        var t = _.extend({ replyLinks: ".review_reply_links" });
        (this.$nodes = { reviewWrapper: e, replyLinks: e.find(t.replyLinks) }),
          this.$nodes.replyLinks.length && this.findReviewElement();
      }
      (N.prototype.checkIfQuickLinkUrl = function (e) {
        this.currentQuickLinkUrl &&
          (e.preventDefault(),
          (window.location.href = this.currentQuickLinkUrl));
      }),
        (N.prototype.openResults = function () {
          this.queryOnLoad
            ? (this.getResults(this.queryOnLoad), (this.queryOnLoad = ""))
            : this.nodes.$searchInput.val() ||
              this.nodes.$emptyState.addClass(L),
            this.nodes.$searchNode.addClass(F),
            (this.isResultsOpen = !0);
        }),
        (N.prototype.resetSearch = function () {
          this.abortRequest(),
            this.nodes.$searchInput.val(""),
            (this.currentQuickLinkUrl = null),
            this.showEmptyState(),
            this.openOverlay();
        }),
        (N.prototype.closeResults = function (e) {
          if (e) {
            var t = a()(e.relatedTarget);
            if (t.parents("." + A).length || t.hasClass(A) || t.hasClass(I))
              return;
            this.isNavigatingResults &&
              this.nodes.$searchInput.val(this.queryBeforeNavigatingResults);
          }
          this.nodes.$searchNode.removeClass(F),
            (this.isResultsOpen = !1),
            (this.isNavigatingResults = !1),
            (this.currentResultsIndex = 0),
            this.$currentResults.removeClass(R);
        }),
        (N.prototype.goToResult = function (e) {
          var t = a()(e.target),
            n = t.text().trim();
          t.hasClass($) &&
            (this.nodes.$searchInput.val(n),
            this.nodes.$searchForm.trigger("submit"));
        }),
        (N.prototype.onSearchInputChange = (0, r.Ds)(function (e) {
          (e = this.nodes.$searchInput.val().trim()) &&
          e !== this.previousQuery &&
          e !== this.queryBeforeNavigatingResults
            ? this.getResults(e)
            : "" === e &&
              ((this.previousQuery = ""),
              this.abortRequest(),
              this.showEmptyState());
        }, 250)),
        (N.prototype.navigateResults = function (e) {
          if (this.isResultsOpen) {
            var t = e.keyCode;
            t === r.gB.UP && this.isResultsOpen
              ? (e.preventDefault(), this.setActiveResult("up"))
              : t === r.gB.DOWN && this.isResultsOpen
              ? (e.preventDefault(), this.setActiveResult("down"))
              : t === r.gB.ESCAPE &&
                (e.preventDefault(),
                (this.queryBeforeNavigatingResults = ""),
                this.closeOverlay());
          }
        }),
        (N.prototype.setActiveResult = function (e) {
          var t,
            n,
            s,
            r = this.numberOfResults;
          if (!1 === this.isNavigatingResults)
            "up" === e ? (t = r - 1) : "down" === e && (t = 0),
              (this.queryBeforeNavigatingResults =
                this.nodes.$searchInput.val()),
              a()(this.$currentResults[t]).addClass(R),
              (s = a()(this.$currentResults[t])
                .find("." + q)
                .text()),
              (this.currentResultsIndex = t);
          else {
            if (
              ((t = this.currentResultsIndex),
              a()(this.$currentResults[t])
                .attr("aria-selected", !1)
                .removeClass(R),
              ("down" === e && t === r - 1) || ("up" === e && 0 === t))
            )
              return (
                (this.currentResultsIndex = 0),
                (this.isNavigatingResults = !1),
                this.$currentResults.removeClass(R),
                void this.nodes.$searchInput.val(
                  this.queryBeforeNavigatingResults
                )
              );
            "up" === e
              ? (n = this.currentResultsIndex - 1)
              : "down" === e && (n = this.currentResultsIndex + 1),
              a()(this.$currentResults[n])
                .attr("aria-selected", !0)
                .addClass(R),
              (this.currentResultsIndex = n),
              (s = a()(this.$currentResults[n])
                .find("." + q)
                .text());
          }
          a()(this.$currentResults[this.currentResultsIndex]).hasClass(P)
            ? (this.currentQuickLinkUrl =
                this.$currentResults[this.currentResultsIndex].href)
            : (this.currentQuickLinkUrl = null),
            (this.isNavigatingResults = !0),
            (this.previousQuery = s),
            this.nodes.$searchInput.val(s);
        }),
        (N.prototype.getResults = function (e) {
          this.abortRequest(),
            (this.previousQuery = e),
            (this.isNavigatingResults = !1),
            (this.currentResultsIndex = 0),
            (this.currentQuickLinkUrl = null),
            (this.request = a().ajax({
              url: "/search/autocomplete?q=" + e,
              success: this.showSearchResults.bind(this),
              error: function (e, t) {
                "abort" !== t && this.closeResults.bind(this);
              },
            }));
        }),
        (N.prototype.abortRequest = function () {
          this.request &&
            "function" == typeof this.request.abort &&
            this.request.abort();
        }),
        (N.prototype.showSearchResults = function (e) {
          if (e && e.length) {
            this.nodes.$searchSuggestionsList.html(""),
              this.nodes.$quickLinksList.html(""),
              (this.numberOfResults = e.length),
              e.forEach(
                function (e) {
                  var t = "";
                  e.type &&
                    (t = a()("<span/>", {
                      class: "theme-search__results-type",
                    }).text(e.type));
                  var n = B(e.value, this.previousQuery);
                  e.type
                    ? a()("<li/>", { class: "theme-search__results-list-item" })
                        .html(
                          a()("<a/>", {
                            href: e.quick_link,
                            class:
                              "theme-search__result theme-search__results-link",
                          }).html([
                            a()("<span/>", {
                              class: "theme-search__results-text",
                            }).html(n),
                            t,
                          ])
                        )
                        .appendTo(this.nodes.$quickLinksList)
                    : a()("<li/>", { class: "theme-search__results-list-item" })
                        .html(
                          a()("<button/>", {
                            href: e.quick_link,
                            class:
                              "theme-search__result theme-search__results-button",
                          }).html([
                            a()("<span/>", {
                              class: "theme-search__results-text",
                            }).html(n),
                            t,
                          ])
                        )
                        .appendTo(this.nodes.$searchSuggestionsList);
                }.bind(this),
                ""
              ),
              this.isResultsOpen || this.openResults();
            var t = this.nodes.$searchResults.find(
                ".theme-search__results-section--suggestions .theme-search__result"
              ),
              n = this.nodes.$searchResults.find(
                ".theme-search__results-section--quick-links .theme-search__result"
              );
            (this.$currentResults = t.add(n)),
              this.nodes.$emptyState.removeClass(L),
              this.nodes.$searchSuggestions.toggleClass(L, t.length > 0),
              this.nodes.$quickLinks.toggleClass(L, n.length > 0),
              this.nodes.$screenReaderText.text(
                r.ag.t("theme_store_frontend.theme_search.number_of_results", {
                  count: this.numberOfResults,
                  search_query: this.previousQuery,
                })
              );
          } else this.closeResults();
        }),
        (N.prototype.showEmptyState = function () {
          this.nodes.$emptyState.addClass(L),
            this.nodes.$searchSuggestions.removeClass(L),
            this.nodes.$quickLinks.removeClass(L),
            this.openResults(),
            (this.numberOfResults = this.nodes.$emptyStateButtons.length),
            (this.$currentResults = this.nodes.$emptyStateButtons);
        }),
        (N.prototype.openOverlay = function (e) {
          e && (this.$lastFocusedActivator = a()(e.currentTarget)),
            O.$pageContainer.off("click"),
            setTimeout(
              function () {
                O.$pageContainer.on("click", this.closeOverlay.bind(this));
              }.bind(this),
              0
            ),
            O.$html.addClass(j),
            O.$body.addClass(M),
            (this.isOverlayOpen = !0),
            this.nodes.$searchInput.focus(),
            this.nodes.$searchInput.putCursorAtEnd(),
            r.Mu.prototype.trapFocus(O.$searchOverlay.get(0));
        }),
        (N.prototype.closeOverlay = function () {
          this.isOverlayOpen &&
            (this.abortRequest(),
            (this.isOverlayOpen = !1),
            O.$html.removeClass(j),
            O.$body.removeClass(M),
            O.$searchOverlayActivators.attr("aria-expanded", !1),
            this.$lastFocusedActivator.focus(),
            r.Mu.prototype.removeTrapFocus(O.$searchOverlay.get(0)),
            this.nodes.$searchInput.val(""),
            this.showEmptyState());
        }),
        (U.prototype.initReviewModal = function () {
          this.$nodes.reviewForm.load(
            this.$nodes.reviewURL,
            this.initReviewModalComplete
          );
        }),
        (U.prototype.initReviewModalComplete = function () {
          this.marketingAssetsModal();
        }),
        (U.prototype.marketingAssetsModal = function () {
          new r.u_(this.$nodes.reviewLink, this._getModalMarkup).on(
            "opened",
            function () {
              new V(a()(".login-form"));
            }
          );
        }),
        (U.prototype._getModalMarkup = function (e) {
          return this.$nodes.reviewForm.html();
        }),
        (W.prototype.findReviewElement = function () {
          var e = this.$nodes.reviewWrapper;
          this.$nodes.replyLinks.each(function (t, n) {
            var s = e.find("#ReviewReplyForm-" + t);
            W.prototype.initModals(s, n);
          });
        }),
        (W.prototype.initModals = function (e, t) {
          e.load(t.href, function () {
            new r.u_(t, function () {
              return e.html();
            });
          });
        });
      const H = "data-initial-handle",
        G = "data-handle",
        K = "data-ui-color-light",
        Q = "data-state",
        Y = "data-theme-name";
      function J(e) {
        (this.$nodes = {
          themeScreenshotCarousel: a()(
            `[data-theme-card-id=${e}].theme-screenshot-carousel`
          ),
          linkCarousel: a()(`[data-theme-card-id=${e}].link-carousel`),
          themeHeroSectionBlock: a()(
            `[data-theme-card-id=${e}].theme-card__carousel-main-content`
          ),
          carouselNav: a()(".carousel-nav"),
          styleSelector: a()(`[data-theme-card-id=${e}].style-selector`),
        }),
          this.$nodes.themeScreenshotCarousel.length &&
            (this.themeScreenshotCarousel = new r.lr(
              this.$nodes.themeScreenshotCarousel.get(0)
            )),
          this.$nodes.linkCarousel.length &&
            (this.linkCarousel = new r.lr(this.$nodes.linkCarousel.get(0))),
          this.initCarousel(),
          this.$nodes.styleSelector.on(
            "click",
            this.updateSlideContent.bind(this)
          ),
          this.$nodes.styleSelector.attr("href", "");
      }
      (J.prototype.initCarousel = function () {
        const e = this.$nodes.styleSelector.attr(Y),
          t = this.$nodes.themeHeroSectionBlock.attr(H);
        var n = this.$nodes.carouselNav.find(`[${Y}="${e}"][${G}="${t}"]`),
          s = parseInt(n.attr(Q), 10),
          r = "carousel--is-loading";
        this.themeScreenshotCarousel.goToIndex(s),
          this.linkCarousel.goToIndex(s),
          this.$nodes.themeScreenshotCarousel.removeClass(r),
          this.$nodes.linkCarousel.removeClass(r);
      }),
        (J.prototype.updateSlideContent = function (e) {
          e.preventDefault();
          var t = a()(e.currentTarget),
            n = t.attr(K),
            s = parseInt(t.attr(Q), 10);
          this.$nodes.styleSelector.each(function () {
            a()(this).removeAttr("aria-selected");
          }),
            t.attr("aria-selected", "true"),
            this.themeScreenshotCarousel.goToIndex(s),
            this.linkCarousel.goToIndex(s),
            this.updateBackgroundColor(n);
        }),
        (J.prototype.updateBackgroundColor = function (e) {
          this.$nodes.themeHeroSectionBlock.css("background-color", e);
        });
      const Z = class {
        constructor(e) {
          (this.carousel = void 0), (this.carousel = new J(e));
        }
      };
      class X {
        constructor(e) {
          (this.element = void 0),
            (this.element = e),
            this.addClickListeners(this.element.querySelectorAll("label"));
        }
        addClickListeners(e) {
          e.forEach((e) => {
            e.addEventListener("click", (e) => {
              let t = e.target;
              this.switchToStyle(t, t.dataset.style);
            }),
              e.addEventListener("focus", (e) => {
                let t = e.target;
                this.switchToStyle(t, t.dataset.style);
              });
          });
        }
        switchToStyle(e, t) {
          if (!(e instanceof HTMLLabelElement && t)) return;
          this.element.querySelectorAll(".style-images").forEach((e) => {
            e instanceof HTMLElement &&
              (e.dataset.style === t
                ? e.classList.remove("hidden")
                : e.classList.add("hidden"));
          }),
            this.element.querySelectorAll("label").forEach((t) => {
              t === e
                ? t.classList.add("selected")
                : t.classList.remove("selected");
            });
          let [n, s] = t.split("-"),
            r = this.element.querySelector("a");
          r instanceof HTMLLinkElement && (r.href = `/themes/${n}/styles/${s}`);
        }
      }
      const ee =
          '<div class="block"><h3 class="block__heading heading--4">' +
          r.ag.t("theme_store_frontend.theme_filters.no_results_now", {
            defaults: [{ message: "No results row" }],
          }) +
          '</h3><p class="block__content"><p>' +
          r.ag.t(
            "theme_store_frontend.theme_filters.try_again_or_home_page_html",
            {
              defaults: [
                {
                  message:
                    'Try again later, or <a href="/">Visit the home page</a>',
                },
              ],
              visit_home_page:
                '<a href="/">' +
                r.ag.t("theme_store_frontend.theme_filters.visit_home_page", {
                  defaults: [{ message: "Visit the home page" }],
                }) +
                "</a>",
            }
          ) +
          "</p></div>",
        te = "filter-expanded",
        ne = "filter-param",
        se = "filter-show-count",
        re = "filter-value",
        ie = ".theme-filter__count",
        ae = ".theme-filter__element",
        oe = "applied-filters__filter--is-visible",
        le = "applied-filters--is-hidden",
        de = {
          $filters: a()("[data-filter]"),
          $filtersWrapper: a()(".theme-filter__wrapper"),
          $appliedFilters: a()(".applied-filters__filter"),
          $clearAppliedFilters: a()(".applied-filters__remove-all"),
          $appliedFiltersWrapper: a()(".applied-filters"),
          $searchButton: a()(".theme-search-overlay__activator"),
          $searchForm: a()('[name="q"]').closest("form"),
          $searchTrigger: a()(".search-trigger"),
          $sortBy: a()("#SortBy"),
          $themesContainer: a()("#Themes"),
          $themesTotal: a()(".filtered-themes-total"),
        },
        ce = {
          $otherIndustryForm: document.querySelector(
            ".theme-filter__other-industry-form"
          ),
          $otherIndustryButton: document.querySelector(
            ".theme-filter__other-industry-button"
          ),
          $otherIndustryInput: document.querySelector(
            ".theme-filter__other-industry-input"
          ),
        };
      class ue {
        constructor() {
          (this.initialize = this.initialize.bind(this)),
            (this.displayErrorMessage = this.displayErrorMessage.bind(this)),
            (this.fetchThemes = this.fetchThemes.bind(this)),
            (this.hideAppliedFilter = this.hideAppliedFilter.bind(this)),
            (this.openSearch = this.openSearch.bind(this)),
            (this.pushState = this.pushState.bind(this)),
            (this.removeAllFilters = this.removeAllFilters.bind(this)),
            (this.removeFilter = this.removeFilter.bind(this)),
            (this.renderThemes = this.renderThemes.bind(this)),
            (this.showAppliedFilter = this.showAppliedFilter.bind(this)),
            (this.updateAppliedFilter = this.updateAppliedFilter.bind(this)),
            (this.updateCounts = this.updateCounts.bind(this)),
            (this.updateFilter = this.updateFilter.bind(this)),
            (this.updateFilteredBy = this.updateFilteredBy.bind(this)),
            (this.updateFilteredByVisibility =
              this.updateFilteredByVisibility.bind(this)),
            (this.updateState = this.updateState.bind(this)),
            (this.updateThemes = this.updateThemes.bind(this)),
            (this.updateThemesTotal = this.updateThemesTotal.bind(this)),
            (this.searchByOtherIndustry =
              this.searchByOtherIndustry.bind(this)),
            de.$filtersWrapper.length &&
              (this.filterAccordion = new r.UQ(de.$filtersWrapper.get(0), {
                mobileOnly: !1,
                openFirst: !1,
                itemSelector: ".accordion-item",
              })),
            this.initialize(),
            de.$sortBy.on("change", this.updateThemes),
            de.$filters.on("change", ":checkbox", this.updateThemes),
            de.$appliedFilters.on("click", this.removeFilter),
            de.$clearAppliedFilters.on("click", this.removeAllFilters),
            de.$searchTrigger.on("click", this.openSearch),
            window.addEventListener("popstate", this.updateState),
            ce.$otherIndustryInput.addEventListener("keyup", (e) => {
              "Enter" === e.key && this.searchByOtherIndustry();
            }),
            ce.$otherIndustryButton.addEventListener(
              "click",
              this.searchByOtherIndustry
            );
        }
        initialize() {
          this.filterAccordion &&
            this.filterAccordion.$accordionItems.forEach((e) => {
              "true" === e.$el.getAttribute(`data-${te}`) && e.open(0);
            });
        }
        displayErrorMessage() {
          de.$themesTotal.empty(),
            de.$themesContainer.hide().html(ee).fadeIn("fast");
        }
        fetchThemes() {
          var e = location.href;
          a().ajax({
            url: e,
            dataType: "html",
            data: { ajax: !0 },
            success: this.renderThemes,
            error: this.displayErrorMessage,
            skipHeaderOverride: !0,
          });
        }
        openSearch(e) {
          return e.preventDefault(), de.$searchButton.trigger("click"), !1;
        }
        pushState(e) {
          var t = {};
          "string" == typeof (i = getURLParameter("q")) && (t.q = i);
          var n = getURLParameter("locale");
          "string" == typeof n && (t.locale = n),
            de.$filters.each(function (e, n) {
              var s = a()(n);
              if ("industry" !== s.data(ne)) {
                var r = s.find(":checkbox:checked");
                t[s.data(ne)] = r
                  .map(function () {
                    return a()(this).val();
                  })
                  .get();
              }
            });
          var s = new URLSearchParams(window.location.search).getAll(
            "industry[]"
          );
          if (e && "industry" === e.action && e.value) {
            var r = e.value;
            t.industry = s.includes(r)
              ? s.filter((e) => e !== r)
              : [r].concat(s);
          } else t.industry = s;
          var i,
            o = "string" == typeof (i = getURLParameter("q")) && i.length > 0,
            l = de.$sortBy.val();
          (t.sort_by = l),
            o
              ? (de.$sortBy.find('option[value="most_relevant"]').hide(),
                "most_recent" === l && de.$sortBy.val("most_recent"))
              : (de.$sortBy.find('option[value="most_relevant"]').show(),
                "most_relevant" === l && de.$sortBy.val("most_relevant"));
          var d = location.pathname,
            c = a().param(t);
          c.length && (d += "?" + c), history.pushState(t, null, d);
        }
        removeAllFilters() {
          de.$filters.find(":checkbox").prop("checked", !1),
            de.$appliedFilters.removeClass(oe),
            this.updateFilteredByVisibility(),
            this.updateThemes();
        }
        removeFilter(e) {
          var t = a()(e.currentTarget),
            n = t.data(re);
          this.hideAppliedFilter(t),
            de.$filters
              .find(':checkbox:checked[value="' + n + '"]')
              .prop("checked", !1)
              .trigger("change");
        }
        renderThemes(e) {
          de.$themesContainer.hide().html(e).fadeIn("fast");
          var t = a()("#ThemesInner").data("aggregations");
          t && "object" == typeof t && de.$filters.each(this.updateCounts);
          var n = a()("#ThemesInner").data("pagination-parts");
          de.$themesTotal.length &&
            n &&
            "object" == typeof n &&
            this.updateThemesTotal();
          document
            .querySelectorAll(".theme-card-presets-selector")
            .forEach((e) => new Z(e.id)),
            document.querySelector(".tailwindcss") &&
              document.querySelector(".theme-card") &&
              document.querySelectorAll(".theme-card").forEach((e) => new X(e));
        }
        updateAppliedFilter(e, t) {
          var n = a()(t),
            s = n.val(),
            r = de.$appliedFilters.filter(function (e, t) {
              return a()(t).data(re) === s;
            });
          n.is(":checked")
            ? this.showAppliedFilter(r)
            : this.hideAppliedFilter(r),
            this.updateFilteredByVisibility();
        }
        updateCounts(e, t) {
          var n = a()(t),
            s = n.data(ne),
            r = n.data(se),
            i = a()("#ThemesInner").data("aggregations")[s];
          r &&
            n.find(":checkbox").each(function () {
              var e = a()(this),
                t = e.val();
              e.parent(ae).find(ie).text(i[t]);
              var n = e.is(":not(:checked)") && 0 == i[t];
              e.prop("disabled", n);
            });
        }
        updateFilter(e, t) {
          var n = a()(t),
            s = n.val(),
            r = de.$appliedFilters.filter('[data-filter-value="' + s + '"]');
          -1 !== a().inArray(s, this.checkedValues)
            ? (n.prop("checked", !0), this.showAppliedFilter(r))
            : (n.prop("checked", !1), this.hideAppliedFilter(r));
        }
        hideAppliedFilter(e) {
          e.removeClass(oe);
        }
        showAppliedFilter(e) {
          e.addClass(oe);
        }
        updateFilteredBy() {
          de.$filters.find(":checkbox").each(this.updateAppliedFilter),
            this.updateFilteredByVisibility();
        }
        updateFilteredByVisibility() {
          de.$filters.find(":checkbox:checked").length
            ? de.$appliedFiltersWrapper.slideDown("fast").removeClass(le)
            : de.$appliedFiltersWrapper.slideUp("fast").addClass(le);
        }
        updateState(e) {
          var t = e.state || {};
          "string" == typeof t.sort_by && de.$sortBy.val(t.sort_by),
            (this.checkedValues = Object.values(t).flat()),
            de.$filters.find(":checkbox").each(this.updateFilter),
            this.updateFilteredByVisibility(),
            this.fetchThemes();
        }
        updateThemes(e) {
          var t = {};
          if (e) {
            var n = a()(e.currentTarget).data(),
              s = e.currentTarget.value;
            if (
              (r.co.track(n.filterGaEvent, n.filterGaAction, s),
              (t.action = n.filterGaAction),
              (t.value = s),
              (t.sortChanged = e.target === de.$sortBy[0]),
              "other" === t.value)
            )
              return void this.toggleOtherIndustryInput();
          }
          this.pushState(t), this.updateFilteredBy(), this.fetchThemes();
        }
        updateThemesTotal() {
          var e = a()("#ThemesInner").data("pagination-parts"),
            t = e.first_item_index,
            n = e.last_item_index,
            s = e.total_pages,
            i = e.total,
            o = "",
            l = r.ag.t("theme_store_frontend.theme_filters.themes_count", {
              count: i,
            });
          (o +=
            1 === s
              ? l
              : r.ag.t("theme_store_frontend.theme_filters.pagination", {
                  first_item_index: t,
                  last_item_index: n,
                  themes_count: l,
                })),
            de.$themesTotal.text(o);
        }
        toggleOtherIndustryInput() {
          ce.$otherIndustryForm.classList.toggle("display-flex"),
            ce.$otherIndustryForm.classList.toggle("display-none"),
            ce.$otherIndustryForm.classList.contains("display-flex") &&
              ce.$otherIndustryInput.focus();
        }
        searchByOtherIndustry() {
          const e = ce.$otherIndustryInput.value;
          e.length &&
            (window.location.href = this.updateQueryStringWithOtherIndustry(e));
        }
        updateQueryStringWithOtherIndustry(e) {
          const t = new URLSearchParams(window.location.search);
          return t.set("q", e), `${window.location.pathname}?${t.toString()}`;
        }
      }
      var he = !1,
        pe = "ui-sheet--is-open",
        me = "page--sheet-is-open",
        fe = {
          $window: a()(window),
          $html: a()("html"),
          $body: a()("body"),
          $activator: a()('[data-module="ui-sheet-activator"]'),
          $deactivator: a()('[data-module="ui-sheet-deactivator"]'),
        };
      function ve(e, t) {
        e.length &&
          e instanceof a() &&
          ((this.options = t),
          (this.nodes = {
            $sheet: e,
            $sheetBody: e.find('[data-module="ui-sheet-body"]'),
          }),
          (this.breakpoints = new r.u3()),
          fe.$window.on("resize", this.moveContent.bind(this)),
          fe.$activator
            .on("click", this.openSheet.bind(this))
            .on("click", this.moveContent.bind(this)),
          fe.$deactivator.on("click", this.closeSheet.bind(this)));
      }
      (ve.prototype.openSheet = function () {
        fe.$body.addClass(me),
          this.nodes.$sheet.addClass(pe),
          r.Mu.prototype.trapFocus(this.nodes.$sheet.get(0));
      }),
        (ve.prototype.closeSheet = function () {
          fe.$body.removeClass(me),
            this.nodes.$sheet.removeClass(pe),
            r.Mu.prototype.removeTrapFocus(this.nodes.$sheet.get(0));
        }),
        (ve.prototype.moveContent = (0, r.Ds)(function (e) {
          if (window.matchMedia(this.breakpoints.phone).matches) {
            if (he) return;
            a().each(
              this.options.$contentNodes,
              function (e, t) {
                var n = a()("<div/>", { class: "placeholder-" + e });
                t.parent().append(n), t.appendTo(this.nodes.$sheetBody);
              }.bind(this)
            ),
              (he = !0);
          } else
            a().each(
              this.options.$contentNodes,
              function (e, t) {
                var n = a()(".placeholder-" + e);
                t.insertAfter(n), n.remove();
              }.bind(this)
            ),
              (he = !1),
              this.closeSheet();
        }, 100));
      var ge,
        ye = "data-initial-handle",
        be = "data-handle",
        _e = "data-ui-color-light",
        we = "data-state",
        xe = "data-demo-url",
        ke = "data-style-name",
        Se = "data-style-slug",
        Te = "data-theme-name",
        Ce = "data-js-theme-action",
        Ee = a()(
          ".section-block--theme-hero, .theme-listing__hero-banner-main-content"
        ).attr(ye);
      function Fe() {
        (this.$nodes = {
          mobileCarousel: a()(".mobile-carousel"),
          tabletUpCarousel: a()(".tablet-up-carousel"),
          previewLinks: a()(".theme-preview-link"),
          themeHeroSectionBlock: a()(
            ".section-block--theme-hero, .theme-listing__hero-banner-main-content"
          ),
          primaryButton: a()(".theme-primary-cta"),
          secondaryButton: a()(".theme-secondary-cta"),
          carouselNav: a()(".mobile-carousel-nav"),
          styleSelector: a()(
            ".example-presets-selector__option.style-selector"
          ),
          demoOverlayLinks: a()(".demo-overlay"),
        }),
          this.$nodes.mobileCarousel.length &&
            (this.mobileCarousel = new r.lr(this.$nodes.mobileCarousel.get(0))),
          this.$nodes.tabletUpCarousel.length &&
            (this.tabletUpCarousel = new r.lr(
              this.$nodes.tabletUpCarousel.get(0)
            )),
          this.initCarousel(),
          a()(window).on(
            "popstate",
            { evt: window.event },
            this.updateActiveButton.bind(this)
          ),
          this.$nodes.styleSelector.on(
            "click",
            this.updateSlideContent.bind(this)
          );
      }
      function Ae() {
        const e = document.querySelector(".home-carousel"),
          t = document.querySelector(".home-carousel__container"),
          n = document.querySelectorAll(".home-carousel__current-index");
        e &&
          (new r.lr(e, {
            carouselPrevNavItem:
              ".home-carousel__navigation--desktop .carousel-arrow-left",
            carouselNextNavItem:
              ".home-carousel__navigation--desktop .carousel-arrow-right",
          }),
          new r.lr(e, {
            carouselPrevNavItem:
              ".home-carousel__navigation--mobile .carousel-arrow-left",
            carouselNextNavItem:
              ".home-carousel__navigation--mobile .carousel-arrow-right",
          }),
          e.addEventListener("slide-change", function (e) {
            const s = e.detail + 1,
              r = e.target.querySelector(`[data-index="${s}"]`),
              i = r.getAttribute("data-ui-color-light");
            (t.style.backgroundColor = i),
              n.forEach((e) => {
                e.textContent = s;
              }),
              t.querySelectorAll(".marketing-button").forEach((e) => {
                e.setAttribute("tabindex", -1);
              }),
              r.querySelector(".marketing-button").setAttribute("tabindex", 0);
          }));
      }
      (Fe.prototype.initCarousel = function () {
        var e = this.$nodes.carouselNav.find("[" + be + '="' + Ee + '"]'),
          t = parseInt(e.attr(we), 10),
          n = "carousel--is-loading";
        this.mobileCarousel.goToIndex(t),
          this.tabletUpCarousel.goToIndex(t),
          this.$nodes.mobileCarousel.removeClass(n),
          this.$nodes.tabletUpCarousel.removeClass(n);
      }),
        (Fe.prototype.updateSlideContent = function (e, t) {
          e.preventDefault();
          var n = a()(e.currentTarget),
            s = n.attr(_e),
            r = parseInt(n.attr(we), 10),
            i = n.attr(be),
            o = n.attr(xe),
            l = n.attr(ke),
            d = n.attr(Se),
            c = n.attr(Te),
            u = window.location.search;
          this.tabletUpCarousel.goToIndex(r),
            this.mobileCarousel.goToIndex(r),
            t || (ge != i && ((ge = i), this.updateUrl(i + u))),
            this.updateTitle(l, c),
            this.updateCtaUrls(d),
            this.updateBackgroundColor(s),
            this.updatePreviewLinks(o);
        }),
        (Fe.prototype.updateActiveButton = function (e) {
          var t = e.originalEvent.state;
          this.$nodes.mobileCarousel
            .find("[" + be + '="' + t + '"]')
            .trigger("click", { triggeredByPopState: !0 });
        }),
        (Fe.prototype.updateUrl = function (e) {
          history.replaceState(e, null, e);
        }),
        (Fe.prototype.updateTitle = function (e, t) {
          document.title = r.ag.t(
            "theme_store_frontend.styles_carousel.title",
            { themeName: t, styleName: e }
          );
        }),
        (Fe.prototype.updatePreviewLinks = function () {
          this.$nodes.previewLinks.each(function () {
            var e = window.location,
              t = e.search,
              n = e.origin + e.pathname + "/preview" + t;
            a()(this).attr("href", n);
          });
        }),
        (Fe.prototype.updateBackgroundColor = function (e) {
          this.$nodes.themeHeroSectionBlock.css("background-color", e);
        }),
        (Fe.prototype.updateCtaUrls = function (e) {
          var t = window.location,
            n = t.origin + t.pathname,
            s = t.search,
            r = this.$nodes.primaryButton.attr(Ce),
            i = n + "/" + r + "?theme_install_intent=" + e + s.split("?")[1],
            a = n + "/" + r + s,
            o = n + "/download" + s;
          "login" !== r &&
            (e && "download" == r
              ? this.$nodes.primaryButton.attr("href", i)
              : this.$nodes.primaryButton.attr("href", a),
            this.$nodes.secondaryButton.attr("href", o));
        });
      var $e,
        Pe,
        qe,
        Ie = n("../caches/app/node_modules/lodash/lodash.js"),
        Le = n.n(Ie);
      function je() {
        (this.$nodes = {
          body: a()(document.body),
          themeForm: a()(".theme-form"),
          submitTheme: a()(".submit-theme"),
          addTranslation: a()("#AddNewTranslation"),
        }),
          (this.onValidateSuccess = Le().bind(this.onValidateSuccess, this)),
          (this.onValidateFail = Le().bind(this.onValidateFail, this)),
          (this.addTranslation = Le().bind(this.addTranslation, this)),
          (this.templateSettings = { interpolate: /\{\{(.+?)\}\}/g }),
          this.$nodes.addTranslation.on("click", this.addTranslation),
          this.validate();
      }
      function Me() {
        (this.$nodes = {
          installingTheme: document.querySelector("#InstallingTheme"),
          progressBar: document.querySelector(".progress-bar"),
        }),
          this.$nodes.installingTheme &&
            this.$nodes.progressBar &&
            this.startAnimation();
      }
      (je.prototype.addTranslation = function () {
        if (this.$nodes.addTranslation.length) {
          var e = a()("#new-translation-template"),
            t = a()("#new-translation-select option:selected"),
            n = {
              translations_index: a()("input.translation-checkbox").length,
              language_code: t.attr("value"),
              language_name: t.text(),
            },
            s = Le().template(e.text(), n, this.templateSettings);
          a()(s).insertBefore(e), t.remove();
        }
      }),
        (je.prototype.validate = function () {
          this.$nodes.themeForm.length &&
            this.$nodes.themeForm.validationEngine({
              success: this.onValidateSuccess,
              failure: this.onValidateFail,
            });
        }),
        (je.prototype.onValidateSuccess = function () {
          this.$nodes.submitTheme.html(
            '<span class="spinner" aria-hidden="true"></span>'
          ),
            this.$nodes.themeForm.submit();
        }),
        (je.prototype.onValidateFail = function () {}),
        (Me.prototype.startAnimation = function () {
          const { progressBar: e, installingTheme: t } = this.$nodes;
          e.addEventListener("animationend", () => {
            e.setAttribute("aria-valuenow", 100),
              e.setAttribute("aria-busy", "false"),
              (window.location.href = t.dataset.redirectUrl);
          }),
            e.classList.add("with-animation"),
            e.setAttribute("aria-busy", "true");
        });
      class Re {
        constructor() {
          if (
            ((this.nodes = void 0),
            (this.nodes = {
              $previewFrameContainer: document.querySelector(
                "#PreviewFrameContainer"
              ),
              $desktopPreview: document.querySelector("#DesktopPreview"),
              $mobilePreview: document.querySelector("#MobilePreview"),
              $deviceSelectors: document.querySelectorAll(
                ".device-preview-controls__toggle"
              ),
              $styleSelectors: document.querySelectorAll(
                ".device-preview__selector"
              ),
            }),
            !this.nodes.$previewFrameContainer ||
              !this.nodes.$desktopPreview ||
              !this.nodes.$mobilePreview)
          )
            return;
          const e = { maxWidth: "360px", maxHeight: "800px" },
            t = { maxWidth: "100%", maxHeight: "100%" };
          this.nodes.$desktopPreview.addEventListener("click", (e) =>
            this.setFrameSize(e, t)
          ),
            this.nodes.$mobilePreview.addEventListener("click", (t) =>
              this.setFrameSize(t, e)
            ),
            /[?&]mobile/.test(location.href) &&
              !document.querySelector("html").classList.contains("touch") &&
              this.nodes.$mobilePreview.click();
        }
        setFrameSize(e, t) {
          e.preventDefault(),
            this.nodes.$deviceSelectors.forEach((e) =>
              e.classList.remove("active")
            );
          const n = e.target;
          n &&
            (n.classList.add("active"),
            (this.nodes.$previewFrameContainer.style.maxWidth = t.maxWidth),
            (this.nodes.$previewFrameContainer.style.maxHeight = t.maxHeight),
            this.updateURL(n));
        }
        updateURL(e) {
          if ("MobilePreview" === e.id)
            window.location.href.includes("?mobile=true") ||
              history.replaceState(
                null,
                "",
                window.location.href + "?mobile=true"
              ),
              this.addQueryToDeviceSelectors();
          else {
            const e = window.location.href.split("?mobile=true");
            history.replaceState(null, "", e[0]),
              this.removeQueryToDeviceSelectors();
          }
        }
        addQueryToDeviceSelectors() {
          this.nodes.$styleSelectors.forEach((e) => {
            e.href.includes("?mobile=true") || (e.href += "?mobile=true");
          });
        }
        removeQueryToDeviceSelectors() {
          this.nodes.$styleSelectors.forEach((e) => {
            e.href = e.href.replace("?mobile=true", "");
          });
        }
      }
      !(function (e) {
        (e.Left = "ArrowLeft"), (e.Right = "ArrowRight");
      })($e || ($e = {})),
        (function (e) {
          (e.Home = "Home"), (e.End = "End");
        })(Pe || (Pe = {})),
        (function (e) {
          (e.Click = "click"), (e.Keyup = "keyup"), (e.Keydown = "keydown");
        })(qe || (qe = {}));
      const Oe = class {
        constructor(e) {
          (this.container = void 0),
            (this.tablist = void 0),
            (this.tabs = void 0),
            (this.panels = void 0),
            (this.shortcuts = void 0),
            (this.mobileTabs = void 0),
            (this.activateTab = (e) => {
              var t;
              e.removeAttribute("tabindex"),
                e.setAttribute("aria-selected", "true");
              const n = e.getAttribute("aria-controls") || "";
              null === (t = document.getElementById(n)) ||
                void 0 === t ||
                t.removeAttribute("hidden");
            }),
            (this.deactivateTabs = () => {
              var e, t;
              null === (e = this.tabs) ||
                void 0 === e ||
                e.forEach((e) => this.deselectTab(e)),
                null === (t = this.panels) ||
                  void 0 === t ||
                  t.forEach((e) => this.hidePanel(e));
            }),
            (this.resetTabs = () => {
              this.deactivateTabs(), this.activateTab(this.tabs[0]);
            }),
            (this.updateTabs = (e) => {
              this.deactivateTabs(), this.activateTab(e);
            }),
            (this.deselectTab = (e) => {
              e.setAttribute("tabindex", "-1"),
                e.setAttribute("aria-selected", "false");
            }),
            (this.hidePanel = (e) => {
              e.setAttribute("hidden", "true");
            }),
            (this.onCollapseButtonClick = (e) => {
              const t = e.target,
                n = document.getElementById(
                  t.getAttribute("aria-controls") || ""
                );
              n &&
                (this.scrollOnMobileTabCollapse(n),
                this.mobileTabs.toggle(n),
                this.resetTabs());
            }),
            (this.onClick = (e) => {
              const t = e.target;
              this.updateTabs(t), this.mobileTabs && this.updateMobileTabs(t);
            }),
            (this.onShortcutClick = (e) => {
              this.deactivateTabs();
              const t = this.container.querySelector(`[aria-controls=${e}]`);
              t && this.activateTab(t);
            }),
            (this.onKeyup = (e) => {
              const { target: t, key: n } = e;
              Object.values($e).includes(n) &&
                (e.preventDefault(), this.switchTabOnKeyPress(t, n));
            }),
            (this.onKeydown = (e) => {
              const t = e.key;
              if (Object.values(Pe).includes(t))
                switch ((e.preventDefault(), t)) {
                  case Pe.Home:
                    this.focusFirstTab();
                    break;
                  case Pe.End:
                    this.focusLastTab();
                }
            }),
            (this.switchTabOnKeyPress = (e, t) => {
              const n = Array.from(this.tabs).indexOf(e);
              if (n >= 0)
                switch (t) {
                  case $e.Right:
                    this.focusNextTab(n + 1);
                    break;
                  case $e.Left:
                    this.focusPreviousTab(n - 1);
                }
            }),
            (this.focusNextTab = (e) => {
              e <= this.tabs.length - 1
                ? this.tabs[e].focus()
                : this.focusFirstTab();
            }),
            (this.focusPreviousTab = (e) => {
              e < 0 ? this.focusLastTab() : this.tabs[e].focus();
            }),
            (this.focusFirstTab = () => {
              this.tabs[0].focus();
            }),
            (this.focusLastTab = () => {
              this.tabs[this.tabs.length - 1].focus();
            }),
            (this.onMobileTabClick = (e) => {
              const t = e.target.closest(".accordion-item"),
                n = null == t ? void 0 : t.id,
                s = !t.classList.contains("js-is-active");
              if (
                (this.mobileTabs.toggleAll(
                  `.accordion-item.js-is-active:not(#${n})`
                ),
                s)
              )
                this.scrollOnMobileTabCollapse(t), this.resetTabs();
              else {
                this.scrollMobileTabIntoView(t);
                const e = document.querySelector(
                  `[aria-controls="${
                    null == n ? void 0 : n.replace("--MobileTabs", "")
                  }"]`
                );
                this.updateTabs(e);
              }
            }),
            (this.updateMobileTabs = (e) => {
              var t;
              this.mobileTabs.$accordionItems
                .map((e) => e.$el)
                .forEach((e) => {
                  e.classList.contains("js-is-active") &&
                    this.mobileTabs.toggle(e);
                });
              const n = document.getElementById(
                `${e.getAttribute("aria-controls")}--MobileTabs`
              );
              null === (t = this.mobileTabs) || void 0 === t || t.toggle(n);
            }),
            (this.scrollOnMobileTabCollapse = (e) => {
              this.scrollMobileTabIntoView(
                null == e ? void 0 : e.querySelector(".mobile-tabs__toggle"),
                { block: "end", inline: "nearest", behavior: "smooth" }
              );
            }),
            (this.scrollMobileTabIntoView = (e, t) => {
              const n = t || {};
              e.scrollIntoView({ block: "start", ...n });
            }),
            (this.container = e),
            (this.tablist = e.querySelector('[role="tablist"]')),
            (this.tabs = e.querySelectorAll('[role="tab"]') || []),
            (this.panels = e.querySelectorAll('[role="tabpanel"]') || []),
            (this.shortcuts = e.querySelectorAll("[data-tab-shortcut]") || []);
          const t = e.getAttribute("data-mobile-tabs"),
            n = t ? document.getElementById(t) : null;
          if (
            ((this.mobileTabs = n
              ? new r.UQ(n, {
                  itemSelector: ".mobile-tabs__item",
                  itemLink: ".mobile-tabs__toggle",
                  itemContent: ".mobile-tabs__content",
                  mobileOnly: !1,
                  openFirst: !0,
                })
              : null),
            this.tabs.forEach((e) => {
              e.addEventListener(qe.Click, this.onClick),
                e.addEventListener(qe.Keyup, (e) => this.onKeyup(e)),
                e.addEventListener(qe.Keydown, (e) => this.onKeydown(e));
            }),
            this.shortcuts.forEach((e) => {
              e.addEventListener(qe.Click, () => {
                const t = e.getAttribute("data-tab-shortcut");
                t && this.onShortcutClick(t);
              });
            }),
            this.mobileTabs)
          ) {
            const e = this.mobileTabs.$accordionItems.map((e) => e.$el),
              t = this.mobileTabs.$el.querySelectorAll(
                ".mobile-tabs__toggle--collapse"
              );
            e.forEach((e) =>
              e.addEventListener(qe.Click, this.onMobileTabClick)
            ),
              t.forEach((e) =>
                e.addEventListener(qe.Click, this.onCollapseButtonClick)
              );
          }
        }
      };
      const ze = class {
        constructor(e) {
          (this.showButton = void 0),
            (this.hideButton = void 0),
            (this.content = void 0),
            (this.createShowButton = () => {
              const e = document.createElement("a");
              return (
                e.appendChild(
                  document.createTextNode(
                    r.ag.t("theme_store_frontend.show_button_text")
                  )
                ),
                (e.className =
                  "toggle tw-link-base tw-link-sm tw-text-body-sm"),
                e.setAttribute("href", "#"),
                e.addEventListener("click", (e) => {
                  e.preventDefault(),
                    this.showButton.style.setProperty("display", "none"),
                    this.content.style.setProperty("display", "inline-block");
                }),
                e
              );
            }),
            (this.createHideButton = () => {
              const e = document.createElement("a");
              return (
                e.appendChild(
                  document.createTextNode(
                    r.ag.t("theme_store_frontend.hide_button_text")
                  )
                ),
                (e.className =
                  "toggle tw-link-base tw-link-sm tw-text-body-sm"),
                e.setAttribute("href", "#"),
                e.addEventListener("click", (e) => {
                  e.preventDefault(),
                    this.showButton.style.setProperty(
                      "display",
                      "inline-block"
                    ),
                    this.content.style.setProperty("display", "none");
                }),
                e
              );
            }),
            (this.content = e),
            (this.showButton = this.createShowButton()),
            (this.hideButton = this.createHideButton());
          const t = e.parentElement;
          null == t || t.insertBefore(this.showButton, e),
            e.append(this.hideButton);
        }
      };
      const De = function () {
        const e = document.querySelector(".theme-listing__tabs");
        if (!e) return;
        document
          .querySelectorAll(".release-note .more-details")
          .forEach((e) => {
            new ze(e);
          }),
          document.querySelectorAll(".release-note li").forEach((e) => {
            var t;
            null !== (t = e.textContent) &&
              void 0 !== t &&
              t.match(/^Important:/) &&
              e.classList.add("important-release-note");
          });
        const t = new Oe(e);
        if ("#Reviews" === window.location.hash) {
          const e = t.tablist.querySelector("#TabButton__Reviews");
          t.updateTabs(e), t.updateMobileTabs(e);
          const n = document.querySelector("#ReviewsTabContent--MobileTabs");
          window.scroll({ top: n.offsetTop, left: 0, behavior: "smooth" });
        }
        if ("#ReleaseNotes" === window.location.hash) {
          const e = t.tablist.querySelector("#TabButton__Support");
          t.updateTabs(e), t.updateMobileTabs(e);
          const n = document.querySelector("#SupportTabContent--MobileTabs");
          window.scroll({ top: n.offsetTop, left: 0, behavior: "smooth" });
        }
      };
      var Be, Ne;
      !(function (e) {
        (e.Up = "ArrowUp"),
          (e.Down = "ArrowDown"),
          (e.Home = "Home"),
          (e.End = "End"),
          (e.PageUp = "PageUp"),
          (e.PageDown = "PageDown");
      })(Be || (Be = {})),
        (function (e) {
          (e.Enter = "Enter"), (e.Spacebar = " ");
        })(Ne || (Ne = {}));
      const Ve = class {
        constructor(e, t = {}) {
          (this.container = void 0),
            (this.listboxButton = void 0),
            (this.listboxOptions = void 0),
            (this.popover = void 0),
            (this.callbackFns = void 0),
            (this.onPopoverShow = () => {
              const e = this.container.querySelector("[aria-selected]");
              e.setAttribute("tabindex", "0"),
                setTimeout(() => {
                  e.focus();
                }, 100);
            }),
            (this.onKeydown = (e) => {
              const { key: t } = e;
              Object.values(Be).includes(t)
                ? (e.preventDefault(), this.focusListboxOptionWithKeyboard(e))
                : Object.values(Ne).includes(t) &&
                  (e.preventDefault(), this.onListOptionClick(e));
            }),
            (this.onListOptionClick = (e) => {
              const t = e.target,
                n =
                  "option" === t.getAttribute("role")
                    ? t
                    : t.closest('[role="option"]'),
                s = this.container.querySelector("[aria-selected]");
              this.shiftFocus(s, n),
                this.updateSelectedOption(s, n, e),
                this.popover.hide();
            }),
            (this.focusListboxOptionWithKeyboard = (e) => {
              const { key: t, target: n } = e;
              e.preventDefault();
              const s = Array.from(this.listboxOptions).indexOf(n);
              if (s >= 0) {
                const e = this.getOptionToFocus(t, s);
                if (!e) return;
                this.shiftKeyboardFocus(n, e);
              }
            }),
            (this.getOptionToFocus = (e, t) => {
              switch (e) {
                case Be.Down:
                case Be.PageDown:
                  return this.listboxOptions[t + 1];
                case Be.Up:
                case Be.PageUp:
                  return this.listboxOptions[t - 1];
                case Be.Home:
                  return this.listboxOptions[0];
                case Be.End:
                  const e = this.listboxOptions.length - 1;
                  return this.listboxOptions[e];
                default:
                  return;
              }
            }),
            (this.shiftKeyboardFocus = (e, t) => {
              e.classList.remove("listbox__option--focus"),
                t.classList.add("listbox__option--focus"),
                this.shiftFocus(e, t);
            }),
            (this.shiftFocus = (e, t) => {
              e.blur(),
                e.removeAttribute("tabindex"),
                t.setAttribute("tabindex", "0"),
                t.focus(),
                this.container.setAttribute("aria-activedescendant", t.id);
            }),
            (this.updateSelectedOption = (e, t, n) => {
              var s;
              const r = t.getAttribute("data-option-label") || "";
              if (!r) return;
              e.removeAttribute("aria-selected"),
                t.setAttribute("aria-selected", "true"),
                this.container.setAttribute("aria-activedescendant", t.id);
              this.listboxButton.querySelector(
                ".listbox__selected-option-label"
              ).innerHTML = r;
              const i =
                null === (s = this.callbackFns) || void 0 === s
                  ? void 0
                  : s.onSelect;
              i && i(n, t);
            }),
            (this.onPopoverHide = () => {
              this.listboxOptions.forEach((e) => {
                e.blur(),
                  e.removeAttribute("tabindex"),
                  e.classList.remove("listbox__option--focus");
              }),
                setTimeout(() => {
                  this.listboxButton.focus();
                }, 100);
            }),
            (this.container = e),
            (this.listboxButton = e.querySelector(".popover__trigger")),
            (this.listboxOptions = e.querySelectorAll('[role="option"]')),
            (this.callbackFns = t),
            this.listboxOptions.forEach((e) => {
              e.addEventListener("click", this.onListOptionClick),
                e.addEventListener("keydown", this.onKeydown);
            }),
            (this.popover = new r.J2(e, {
              onShow: this.onPopoverShow,
              onHide: this.onPopoverHide,
            }));
        }
      };
      class Ue {
        constructor(e, t, n) {
          (this.carousel = void 0),
            (this.listbox = void 0),
            (this.onSelectProp = void 0),
            (this.onSelect = (e, t) => {
              this.updateExamplePresetsHexCode(t),
                this.carousel && this.carousel.updateSlideContent(e),
                this.onSelectProp && this.onSelectProp(e, t);
            }),
            (this.updateExamplePresetsHexCode = (e) => {
              const t = e.getAttribute("data-example-presets-hex-code");
              this.listbox.listboxButton.setAttribute(
                "style",
                `--palette-hex-code: ${t}`
              );
            }),
            (this.listbox = new Ve(e, { onSelect: this.onSelect })),
            t && (this.carousel = new Fe()),
            (this.onSelectProp = n);
        }
      }
      const We = "theme-listing__lightbox-content";
      const He = function () {
        document
          .querySelectorAll(".theme-listing__highlight-overlay")
          .forEach((e) =>
            (function (e) {
              const t = e.getAttribute("data-lightbox-media"),
                n = e.getAttribute("data-lightbox-media-title") || "",
                s = e.getAttribute("data-lightbox-media-desc") || "";
              if (!t) return;
              const i = t.includes("youtube"),
                a = [
                  "theme-listing__lightbox-content-container modal-container--lowlight",
                  ...(i
                    ? ["theme-listing__lightbox-content-container--video"]
                    : ["theme-listing__lightbox-content-container--image"]),
                ],
                o = i
                  ? (function (e, t) {
                      const n = document.createElement("iframe");
                      return (
                        n.setAttribute("src", e),
                        n.setAttribute("title", t),
                        n.setAttribute("allowfullscreen", "true"),
                        n.setAttribute("frameborder", "0"),
                        n.classList.add(We),
                        n
                      );
                    })(t, n)
                  : (function (e, t, n) {
                      const s = document.createElement("figure"),
                        r = document.createElement("img"),
                        i = document.createElement("figcaption");
                      return (
                        r.setAttribute("src", e),
                        r.setAttribute("alt", t),
                        (i.innerText = n),
                        i.classList.add("visuallyhidden"),
                        s.classList.add(We),
                        s.appendChild(r),
                        s.appendChild(i),
                        s
                      );
                    })(t, n, s);
              return new r.u_(e, () => o, {
                modalStyleModifierClasses: {
                  container: a.join(" "),
                  closeIcon: "icon-modules-close-white",
                },
              });
            })(e)
          );
      };
      var Ge = n("./app/ui/utilities/bugsnag.ts");
      const Ke = ["#AddTheme", "#MobileAddTheme", ".theme-preview-link"],
        Qe = [
          "surface_type",
          "surface_detail",
          "surface_inter_position",
          "surface_intra_position",
        ];
      function Ye() {
        Ke.forEach((e) => {
          document.querySelectorAll(e).forEach((e) => {
            e.href &&
              (e.href = (function (e) {
                const t = new URL(e),
                  n = t.searchParams;
                return (
                  n.forEach((e, t) => {
                    if (Qe.includes(t)) {
                      const e = m(t);
                      e && n.set(t, e);
                    }
                  }),
                  t.href
                );
              })(e.href));
          });
        });
      }
      const Je = "marketing-nav--theme-listing--hide",
        Ze = "marketing-nav--theme-listing--show",
        Xe = [".mobile-sticky-footer--wrapper"],
        et = (e) => {
          const t = e.offsetHeight;
          let n = 0;
          window.addEventListener("scroll", () => {
            const s = window.pageYOffset || document.documentElement.scrollTop,
              r = n + t,
              i = n - t;
            s > r
              ? ((e) => {
                  e.classList.remove(Ze), e.classList.add(Je);
                })(e)
              : s < i &&
                ((e) => {
                  e.classList.remove(Je), e.classList.add(Ze);
                })(e),
              (s > r || s < i) && (n = s <= 0 ? 0 : s);
          });
        },
        tt = () => {
          const e = document.querySelector(".marketing-nav--theme-listing");
          if (!e) return;
          new IntersectionObserver(
            ([e]) =>
              e.target.classList.toggle(
                "marketing-nav-pinned",
                e.intersectionRatio < 1
              ),
            { threshold: [1] }
          ).observe(e),
            (() => {
              for (const e of Xe) if (document.querySelector(e)) return !0;
              return !1;
            })() && et(e);
        },
        nt = "mobile-sticky-footer--hide",
        st = "mobile-sticky-footer--show",
        rt = document.querySelector(".mobile-sticky-footer--wrapper"),
        it = (e) => {
          if (e && rt) {
            const t = rt.offsetHeight;
            let n = !1,
              s = 0;
            new IntersectionObserver(
              ([e]) => {
                n = e.isIntersecting;
              },
              { threshold: [0.5] }
            ).observe(e),
              window.addEventListener("scroll", () => {
                const e =
                    window.pageYOffset || document.documentElement.scrollTop,
                  r = s + t,
                  i = s - t;
                e > r && !n
                  ? (rt.classList.remove(nt), rt.classList.add(st))
                  : (e < i || n) &&
                    (rt.classList.remove(st), rt.classList.add(nt)),
                  (e > r || e < i) && (s = e <= 0 ? 0 : e);
              });
          }
        };
      async function at() {
        const e = document.querySelector(".theme-listing-page"),
          t = g(e, "data-theme-id"),
          n = "true" === v(e, "data-paid");
        if (t && n)
          try {
            const e = await fetch(
              `/services/v2/theme_listings/${t}/local_currency_price`
            );
            if (e.ok) {
              const {
                billing_currency: t,
                conversion_rate: n,
                converted_price: i,
                converted_price_formatted: a,
              } = await e.json();
              i &&
                ((s = a),
                (document.querySelector(
                  ".theme-meta__price--container .theme-meta__price_local_currency"
                ).innerHTML = r.ag.t(
                  "theme_store_frontend.local_currency.estimated_price",
                  { calculated_price: s }
                )),
                (function (e, t) {
                  const n = document.querySelector(
                      ".theme-meta__price--local-currency-notice"
                    ),
                    s =
                      "https://help.shopify.com/manual/your-account/manage-billing/local-currency";
                  n.innerHTML = [
                    r.ag.t(
                      "theme_store_frontend.local_currency.local_currency_exchange",
                      { currency_rate: `${Number(e).toFixed(2)} ${t}` }
                    ),
                    r.ag.t(
                      "theme_store_frontend.local_currency.local_currency_charges_notice"
                    ),
                    r.ag.t(
                      "theme_store_frontend.local_currency.local_currency_learn_more_link_html",
                      { url: s }
                    ),
                  ].join(" ");
                })(n, t));
            }
          } catch (i) {
            d(i);
          }
        var s;
      }
      const ot = () => {
          const { hash: e } = window.location,
            t = document.querySelector("#ShopPickerShowCTA");
          if (!t) return;
          const n = document.querySelector("#LoginForm"),
            s = document.querySelector("#ShopPicker");
          n &&
            s &&
            (e.includes("login-form") && lt(n, s, t),
            window.addEventListener("popstate", () => {
              lt(n, s, t);
            }));
        },
        lt = (...e) => {
          e.map(dt);
        },
        dt = (e, t, n) => {
          e.classList.toggle("display-block"),
            e.classList.toggle("display-none");
        };
      class ct {
        constructor() {
          (this.enabled = void 0),
            (this.modal = void 0),
            (this.template = void 0);
          const e = document.getElementById("root_login_modal");
          if (!e) throw new Error("#root_login_modal must exist on the DOM.");
          (this.template = e),
            (this.enabled = "true" === e.dataset.enabled),
            (this.modal = this.initModal()),
            this.enabled &&
              this.fetchShopSelectPartial()
                .then((e) => {
                  e && ((this.template.innerHTML = e), this.modal.open(), ot());
                })
                .catch(d);
        }
        initModal() {
          const e = document.createElement("div"),
            t = new r.u_(e, () => this.template, {
              clickingOverlayClosesModal: !1,
            });
          return (
            t.on("closed", () => {
              !(function (e) {
                const t = new URLSearchParams(location.search);
                t.delete(e);
                const n = new URL(location.href);
                (n.search = t.toString()),
                  (n.hash = ""),
                  history.replaceState(null, "", n.toString());
              })("prompt_login_modal");
            }),
            t.on("opened", () => {
              t.modalDom.$container.blur();
            }),
            t
          );
        }
        async fetchShopSelectPartial() {
          return (
            await fetch("/login/select_shop", {
              headers: { "X-Requested-With": "XMLHttpRequest" },
            })
          ).text();
        }
      }
      const ut = n(
        "../caches/app/node_modules/@shopify/monorail/lib/esnext/producers/monorail-edge-producer.esnext"
      ).h.createHttpProducer({ production: !0 });
      function ht(e) {
        ut.produce(e);
      }
      function pt(e, t) {
        null == e ||
          e.addEventListener("click", (n) => {
            const s = null == n ? void 0 : n.target,
              r =
                null == (i = n.path)
                  ? void 0
                  : i.filter(ft).find((e) => vt(e.id));
            var i;
            if (vt(s.id) || r) {
              const n = r ? r.id : s.id;
              ht({
                schemaId: "theme_store_element_click/1.0",
                payload: mt(e, t, n),
              });
            }
          });
      }
      function mt(e, t, n) {
        return {
          userToken: p("_shopify_y"),
          sessionToken: p("_shopify_s"),
          shopId: g(e, "data-shop-id"),
          pageUrl: window.location.href,
          pageType: t,
          element: n,
          locale: m("locale") || navigator.language,
          clientIp: void 0,
          userAgent: navigator.userAgent,
        };
      }
      function ft(e) {
        return void 0 !== e.id;
      }
      function vt(e) {
        return e.startsWith("ThemeCard");
      }
      const gt = ["LegacyThemesExploreThemesLink", "LegacyThemesLearnMoreLink"];
      function yt(e) {
        null == e ||
          e.addEventListener("click", (t) => {
            const n = null == t ? void 0 : t.target;
            var s;
            (s = n.id),
              gt.some((e) => s.startsWith(e)) &&
                ht({
                  schemaId: "theme_store_legacy_theme_banner_click/2.0",
                  payload: { ..._t(e), clickIdentifier: n.id },
                });
          });
      }
      function bt(e) {
        if (!e) return;
        e.querySelector(".theme-listing__hero-warning-banner") &&
          (!(function (e) {
            ht({
              schemaId: "theme_store_legacy_theme_banner_view/2.0",
              payload: _t(e),
            });
          })(e),
          yt(e));
      }
      function _t(e) {
        return {
          ...w(e),
          ...y(),
          ...b(),
          themeId: g(e, "data-theme-id"),
          themeName: v(e, "data-theme-name"),
          styleId: g(e, "data-style-id"),
          styleName: v(e, "data-style-name"),
          paid: "true" === v(e, "data-paid"),
          clientIp: v(e, "data-client-ip"),
          searchFilters: T(e),
        };
      }
      function wt() {
        Array.from(document.querySelectorAll(".theme__link")).forEach((e) => {
          e.addEventListener("click", Tt),
            e.addEventListener("mouseenter", Ct, { passive: !0 });
        });
        Array.from(
          document.querySelectorAll(".style-selector__option")
        ).forEach((e) => {
          e.addEventListener("click", Et),
            e.addEventListener("mouseenter", Ft, { passive: !0 });
        });
      }
      function xt(e) {
        Array.from(e[0].removedNodes).forEach((e) => {
          const t = e;
          "ThemesInner" === t.id && St(t);
        });
      }
      function kt() {
        const e = document.querySelector("#theme-home-data"),
          t = document.querySelector("#theme-collections-data"),
          n = document.querySelector("#theme-search-results");
        return e || t || n;
      }
      function St(e) {
        0 !== e.children.length &&
          (e.classList.contains("theme__link")
            ? (e.removeEventListener("click", Tt),
              e.removeEventListener("mouseenter", Ct))
            : e.classList.contains("style-selector__option")
            ? (e.removeEventListener("click", Et),
              e.removeEventListener("mouseenter", Ft))
            : Array.from(e.children).forEach((e) => {
                St(e);
              }));
      }
      function Tt(e) {
        const t = kt();
        t &&
          ht({
            schemaId: "theme_store_theme_card_click/1.0",
            payload: At(e.currentTarget, t),
          });
      }
      function Ct(e) {
        const t = kt();
        t &&
          ht({
            schemaId: "theme_store_theme_card_hover/1.0",
            payload: At(e.currentTarget, t),
          });
      }
      function Et(e) {
        const t = kt();
        t &&
          ht({
            schemaId: "theme_store_theme_card_color_swatch_click/1.0",
            payload: At(e.currentTarget, t),
          });
      }
      function Ft(e) {
        const t = kt();
        t &&
          ht({
            schemaId: "theme_store_theme_card_color_swatch_hover/1.0",
            payload: At(e.currentTarget, t),
          });
      }
      function At(e, t) {
        const { referrer: n, pageUrl: s, ...r } = w(t);
        return {
          themeId: g(e, "data-theme-id"),
          themeName: v(e, "data-theme-name"),
          styleId: g(e, "data-style-id"),
          styleName: v(e, "data-style-name"),
          paid: "true" === v(e, "data-paid"),
          searchFilters: T(t),
          searchQuery: m("q") || "",
          sortBy: m("sort_by") || C(),
          surfaceType: v(e, "data-surface-type"),
          surfaceIntraPosition: g(e, "data-surface-intra-position"),
          surfaceInterPosition: g(e, "data-surface-inter-position"),
          totalResults: g(t, "data-total"),
          ...r,
        };
      }
      const $t = [
        "UnlimitedFreeTrialLink",
        "TabButton",
        "MobileTabButton",
        "ExamplePresetsSelection",
        "ImageHighlight",
        "VideoHighlight",
        "OnlineStoreBlurbCta",
        "ReviewLink",
        "GetSupportLink",
        "ReadDocumentationLink",
        "SupportEmailLink",
        "MobileThemeListingSecondaryCTA",
      ];
      function Pt(e, t) {
        return {
          userToken: p("_shopify_y"),
          sessionToken: p("_shopify_s"),
          shopId: g(e, "data-shop-id"),
          themeId: g(e, "data-theme-id"),
          clickIdentifier: t,
          locale: navigator.language,
          clientIp: v(e, "data-client-ip"),
          userAgent: navigator.userAgent,
        };
      }
      function qt(e) {
        return $t.some((t) => e.startsWith(t));
      }
      function It(e) {
        e &&
          ht({
            schemaId: "theme_store_surface_impression/4.0",
            payload: Lt(e),
          });
      }
      function Lt(e) {
        const t = v(e, "data-theme-ids");
        return {
          filters: T(e),
          surfaceType: v(e, "data-surface-type"),
          surfaceDetail: v(e, "data-surface-detail"),
          surfaceInterPosition: g(e, "data-surface-inter-position"),
          themeIds: x(t) || [],
          ...w(e),
          ...y(),
          ...b(),
        };
      }
      function jt(e) {
        return {
          themeId: g(e, "data-theme-id"),
          themeName: v(e, "data-theme-name"),
          searchFilters: T(e),
          styleId: g(e, "data-style-id"),
          styleName: v(e, "data-style-name"),
          paid: "true" === v(e, "data-paid"),
          ...w(e),
          ...S(c),
          ...y(),
          ...b(),
        };
      }
      function Mt(e) {
        return {
          filters: v(e, "data-search-filters"),
          surfaceType: v(e, "data-surface-type"),
          surfaceDetail: v(e, "data-surface-detail"),
          surfaceInterPosition: g(e, "data-surface-inter-position"),
          ...Rt(e),
          ...w(e),
          ...y(),
          ...b(),
        };
      }
      function Rt(e) {
        return { themeIds: x(e.getAttribute("data-theme-ids")) || [] };
      }
      function Ot(e, t) {
        ht({
          schemaId: "theme_store_surface_impression/4.0",
          payload: zt(e, t),
        });
      }
      function zt(e, t) {
        return { themeIds: e.themeIds, ...w(t), ...Dt(e), ...y(), ...b() };
      }
      function Dt(e) {
        return {
          surfaceType: e.surfaceType,
          surfaceDetail: e.surfaceDetail,
          surfaceInterPosition: e.surfaceInterPosition,
        };
      }
      function Bt() {
        const e = (function () {
          const e = document.querySelector("#theme-search-results"),
            t = document.querySelector("#theme-search-no-results");
          return e || t;
        })();
        var t;
        e &&
          (ht({
            schemaId: "theme_store_search_impression/4.0",
            payload:
              ((t = e),
              {
                totalResults: g(t, "data-total"),
                page: parseInt(m("page") || "") || 1,
                searchQuery: m("q") || "",
                sortBy: m("sort_by") || C(),
                searchFilters: T(t),
                ...Vt(t),
                ...w(t),
                ...y(),
                ...b(),
              }),
          }),
          ht({
            schemaId: "theme_store_surface_impression/4.0",
            payload: Nt(e),
          }));
      }
      function Nt(e) {
        return {
          filters: T(e),
          surfaceType: v(e, "data-surface-type"),
          surfaceDetail: v(e, "data-surface-detail"),
          surfaceInterPosition: g(e, "data-surface-inter-position"),
          ...Vt(e),
          ...w(e),
          ...y(),
          ...b(),
        };
      }
      function Vt(e) {
        return { themeIds: x(v(e, "data-theme-ids")) || [] };
      }
      function Ut(e, t) {
        const n = t.id,
          s = t.getAttribute("data-variant") || void 0;
        return {
          userToken: p("_shopify_y"),
          sessionToken: p("_shopify_s"),
          shopId: g(e, "data-shop-id"),
          themeId: g(e, "data-theme-id"),
          locale: navigator.language,
          clientIp: v(e, "data-client-ip"),
          userAgent: navigator.userAgent,
          experimentName: "app_recommendations_theme_listing",
          experimentGroup: s,
          clickIdentifier: n,
        };
      }
      class Wt {
        constructor(e) {
          (this.element = void 0),
            (this.inner = void 0),
            (this.slides = void 0),
            (this.element = e),
            (this.inner = this.element.querySelector(".inner-slider")),
            (this.slides = this.element.querySelectorAll(".slide")),
            this.addClickListeners();
        }
        addClickListeners() {
          var e, t;
          null === (e = this.element.querySelectorAll(".next")) ||
            void 0 === e ||
            e.forEach((e) =>
              e.addEventListener("click", () => {
                this.next();
              })
            ),
            null === (t = this.element.querySelectorAll(".prev")) ||
              void 0 === t ||
              t.forEach((e) =>
                e.addEventListener("click", () => {
                  this.prev();
                })
              );
        }
        next() {
          let e = 0;
          this.slides.forEach((t, n) => {
            t.classList.contains("active") &&
              (e = n < this.slides.length - 1 ? n + 1 : 0),
              t.classList.remove("active");
          }),
            this.slides[e].classList.add("active"),
            this.updateSlideNum(e);
        }
        prev() {
          let e = 0;
          this.slides.forEach((t, n) => {
            t.classList.contains("active") &&
              (e = n > 0 ? n - 1 : this.slides.length - 1),
              t.classList.remove("active");
          }),
            this.slides[e].classList.add("active"),
            this.updateSlideNum(e);
        }
        updateSlideNum(e) {
          this.element.querySelectorAll(".slide-num").forEach((t) => {
            t && (t.innerHTML = `${e + 1}`);
          });
        }
      }
      function Ht() {
        if (!window.partnersDataLayer) return;
        const e = document.querySelectorAll(
            '[data-partner-tracking-enabled="true"]'
          ),
          t = document.getElementById("AddTheme");
        t &&
          gtag("event", "view_item", {
            currency: t.dataset.partnerTrackingCurrency,
            value: t.dataset.partnerTrackingValue,
            items: [
              {
                item_id: t.dataset.partnerTrackingId,
                item_name: t.dataset.partnerTrackingName,
              },
            ],
          });
        const n = {
          add_to_cart: (e) => {
            gtag("event", e.action, {
              currency: e.currency,
              value: e.value,
              items: [{ item_id: e.id, item_name: e.name }],
            });
          },
          default: (e) => {
            gtag("event", e.action, {
              event_category: e.category,
              event_label: e.label,
            });
          },
        };
        e.forEach((e) => {
          const t = e;
          t.addEventListener("click", () => {
            const e = {
                action: t.dataset.partnerTrackingAction,
                value: t.dataset.partnerTrackingValue,
                name: t.dataset.partnerTrackingName,
                id: t.dataset.partnerTrackingId,
                currency: t.dataset.partnerTrackingCurrency,
                category: t.dataset.partnerTrackingCategory,
                label: t.dataset.partnerTrackingLabel,
              },
              s = t.dataset.partnerGoogleAnalyticsId;
            if (
              (window.partnersDataLayer.find((e) => e[1] === s) ||
                (function (e) {
                  e && gtag("config", e, {});
                })(s),
              e.action)
            ) {
              (n[e.action] || n.default)(e);
            }
          });
        });
      }
      (window.ThemeStore = window.ThemeStore || {}),
        (0, Ge.q)(),
        window.addEventListener("load", function () {
          var e;
          const t = document.querySelector(".theme-listing-page");
          (r = t),
            null == r ||
              r.addEventListener("click", (e) => {
                const t = null == e ? void 0 : e.target,
                  n = t.parentNode;
                if (qt(t.id) || qt(n.id)) {
                  const e = qt(n.id) ? n.id : t.id;
                  ht({
                    schemaId: "theme_store_listing_click/1.0",
                    payload: Pt(r, e),
                  });
                }
              }),
            (n = t),
            n &&
              ht({ schemaId: "theme_store_listing_view/3.0", payload: jt(n) }),
            (function (e) {
              if (!e) return;
              e.querySelectorAll("[data-app-recommendation]").forEach((t) => {
                t.addEventListener("click", () => {
                  ht({
                    schemaId: "theme_store_listing_click/1.1",
                    payload: Ut(e, t),
                  });
                });
              });
            })(t),
            bt(t);
          var n;
          var r;
          It(document.querySelector(".theme-listing__recommendations-grid"));
          It(document.querySelector("#theme-designer-styles-data"));
          !(function (e) {
            e &&
              ht({
                schemaId: "theme_store_surface_impression/4.0",
                payload: Mt(e),
              });
          })(document.querySelector("#theme-collections-data"));
          (function (e) {
            if (!e) return;
            [
              "data-themes-grid-first-row-surface-impression",
              "data-themes-grid-second-row-surface-impression",
              "data-themes-grid-third-row-surface-impression",
              "data-testimonials-surface-impression",
              "data-community-first-row-surface-impression",
              "data-community-second-row-surface-impression",
            ].forEach((t) => {
              const n = x(e.getAttribute(t));
              n && Ot(n, e);
            });
            const t = x(
              e.getAttribute("data-promoted-styles-surface-impression")
            );
            t && Ot(t, e);
            const n = x(
              e.getAttribute("data-featured-styles-surface-impression")
            );
            n && Ot(n, e);
            const s = x(e.getAttribute("data-collections-surface-impressions"));
            s &&
              s.forEach((t) => {
                Ot(t, e);
              });
          })(document.querySelector("#theme-home-data")),
            (function () {
              Bt();
              const e = document.querySelector("#Themes");
              if (!e) return;
              new MutationObserver((e) => {
                xt(e), wt(), Bt();
              }).observe(e, {
                childList: !0,
                subtree: !1,
                attributes: !1,
                characterData: !1,
              });
            })();
          document.querySelectorAll(".theme__link").forEach((e) => pt(e)), wt();
          const i = document.getElementById("server-data"),
            a = "production",
            o =
              (["production", "staging"].includes(a)
                ? "/"
                : "https://themes.shopify.com/") + ".well-known/dux";
          (0,
          s.S1)({ service: "themestore", mode: a, eventHandlerEndpoint: o, emitTrekkiePageViewEvent: !1, enableGtm: !0, enableGtmLoader: !1, enableActiveConsent: !1, shopId: null != i && null !== (e = i.dataset) && void 0 !== e && e.shop_id ? i.dataset.shop_id : void 0, metadata: { page: {}, regions: [] } });
        }),
        document.addEventListener("DOMContentLoaded", () => {
          (r.u3.prototype = {
            ...r.u3.prototype,
            desktop: r.u3.prototype.desktop.replace("67.5em", "78.125em"),
            tablet: r.u3.prototype.tablet.replace("67.4375em", "78.0625em"),
            tabletDown: r.u3.prototype.tabletDown.replace(
              "67.4375em",
              "78.0625em"
            ),
          }),
            r.vc.set("customGoogleAnalyticsNamespace", "_other"),
            (0, r.S1)(),
            new E(a()("#ExampleProducts")),
            new N(a()("#SearchThemes")),
            new V(a()(".login-form")),
            Ht(),
            ot();
          var e = a()("#Reviews, .theme-listing__tabpanel-aside");
          e.length && (new U(e), new W(e)),
            a()(".section-block--theme-hero-v1").length &&
            a()(".carousel-nav").length
              ? new Fe()
              : new Ae(),
            document.querySelector(".theme-listing-page") && at(),
            document.querySelector(".flex-fader") &&
              document
                .querySelectorAll(".flex-fader")
                .forEach((e) => new Wt(e)),
            document.querySelector(".tailwindcss") &&
              document.querySelector(".theme-card") &&
              document.querySelectorAll(".theme-card").forEach((e) => new X(e)),
            a()('[data-module="theme-filters"]').length &&
              (new ue(),
              new ve(a()('[data-module="ui-sheet"]'), {
                $contentNodes: [
                  a()('[data-module="filters-sort-by-selector"]'),
                  a()('[data-module="theme-filters"]'),
                ],
              })),
            He();
          const t = document.querySelector(".js-announcement");
          t && new r.I7(t),
            (() => {
              const e = document.querySelectorAll(".example-presets-selector");
              if (e.length) {
                const t = (e, t) => {
                  window.location.href = t.href;
                };
                e.forEach((e) => {
                  const n = e.classList.contains("with-carousel");
                  new Ue(e, n, n ? void 0 : t);
                });
              }
            })();
          document
            .querySelectorAll(".theme-card-presets-selector")
            .forEach((e) => new Z(e.id)),
            tt();
          const n = document.querySelector(".theme-ctas--mobile-only");
          n && it(n),
            Ye(),
            new je(),
            new Me(),
            new Re(),
            De(),
            "true" === m("prompt_login_modal") && new ct();
        });
    },
    "./app/ui/application/vendor/jquery.sticky.js": function (e, t, n) {
      var s, r, i;
      (r = [n("../caches/app/node_modules/jquery/dist/jquery.js")]),
        (s = function (e) {
          var t = Array.prototype.slice,
            n = Array.prototype.splice,
            s = {
              topSpacing: 0,
              bottomSpacing: 0,
              className: "is-sticky",
              wrapperClassName: "sticky-wrapper",
              center: !1,
              getWidthFrom: "",
              widthFromWrapper: !0,
              responsiveWidth: !1,
            },
            r = e(window),
            i = e(document),
            a = [],
            o = r.height(),
            l = function () {
              for (
                var t = r.scrollTop(),
                  n = i.height(),
                  s = n - o,
                  l = t > s ? s - t : 0,
                  d = 0;
                d < a.length;
                d++
              ) {
                var c = a[d];
                if (t <= c.stickyWrapper.offset().top - c.topSpacing - l)
                  null !== c.currentTop &&
                    (c.stickyElement.css({ width: "", position: "", top: "" }),
                    c.stickyElement.parent().removeClass(c.className),
                    c.stickyElement.trigger("sticky-end", [c]),
                    (c.currentTop = null));
                else {
                  var u,
                    h =
                      n -
                      c.stickyElement.outerHeight() -
                      c.topSpacing -
                      c.bottomSpacing -
                      t -
                      l;
                  h < 0 ? (h += c.topSpacing) : (h = c.topSpacing),
                    c.currentTop != h &&
                      (c.getWidthFrom
                        ? (u = e(c.getWidthFrom).width() || null)
                        : c.widthFromWrapper && (u = c.stickyWrapper.width()),
                      null == u && (u = c.stickyElement.width()),
                      c.stickyElement
                        .css("width", u)
                        .css("position", "fixed")
                        .css("top", h),
                      c.stickyElement.parent().addClass(c.className),
                      null === c.currentTop
                        ? c.stickyElement.trigger("sticky-start", [c])
                        : c.stickyElement.trigger("sticky-update", [c]),
                      (c.currentTop === c.topSpacing && c.currentTop > h) ||
                      (null === c.currentTop && h < c.topSpacing)
                        ? c.stickyElement.trigger("sticky-bottom-reached", [c])
                        : null !== c.currentTop &&
                          h === c.topSpacing &&
                          c.currentTop < h &&
                          c.stickyElement.trigger("sticky-bottom-unreached", [
                            c,
                          ]),
                      (c.currentTop = h));
                }
              }
            },
            d = function () {
              o = r.height();
              for (var t = 0; t < a.length; t++) {
                var n = a[t],
                  s = null;
                n.getWidthFrom
                  ? !0 === n.responsiveWidth && (s = e(n.getWidthFrom).width())
                  : n.widthFromWrapper && (s = n.stickyWrapper.width()),
                  null != s && n.stickyElement.css("width", s);
              }
            },
            c = {
              init: function (t) {
                var n = e.extend({}, s, t);
                return this.each(function () {
                  var t = e(this),
                    r = t.attr("id"),
                    i = t.outerHeight(),
                    o = r ? r + "-" + s.wrapperClassName : s.wrapperClassName,
                    l = e("<div></div>")
                      .attr("id", o)
                      .addClass(n.wrapperClassName);
                  t.wrapAll(l);
                  var d = t.parent();
                  n.center &&
                    d.css({
                      width: t.outerWidth(),
                      marginLeft: "auto",
                      marginRight: "auto",
                    }),
                    "right" == t.css("float") &&
                      t.css({ float: "none" }).parent().css({ float: "right" }),
                    d.css("height", i),
                    (n.stickyElement = t),
                    (n.stickyWrapper = d),
                    (n.currentTop = null),
                    a.push(n);
                });
              },
              update: l,
              unstick: function (t) {
                return this.each(function () {
                  for (var t = this, s = e(t), r = -1, i = a.length; i-- > 0; )
                    a[i].stickyElement.get(0) === t &&
                      (n.call(a, i, 1), (r = i));
                  -1 != r &&
                    (s.unwrap(),
                    s.css({ width: "", position: "", top: "", float: "" }));
                });
              },
            };
          window.addEventListener
            ? (window.addEventListener("scroll", l, !1),
              window.addEventListener("resize", d, !1))
            : window.attachEvent &&
              (window.attachEvent("onscroll", l),
              window.attachEvent("onresize", d)),
            (e.fn.sticky = function (n) {
              return c[n]
                ? c[n].apply(this, t.call(arguments, 1))
                : "object" != typeof n && n
                ? void e.error(
                    "Method " + n + " does not exist on jQuery.sticky"
                  )
                : c.init.apply(this, arguments);
            }),
            (e.fn.unstick = function (n) {
              return c[n]
                ? c[n].apply(this, t.call(arguments, 1))
                : "object" != typeof n && n
                ? void e.error(
                    "Method " + n + " does not exist on jQuery.sticky"
                  )
                : c.unstick.apply(this, arguments);
            }),
            e(function () {
              setTimeout(l, 0);
            });
        }),
        void 0 === (i = "function" == typeof s ? s.apply(t, r) : s) ||
          (e.exports = i);
    },
    "./app/ui/application/vendor/jquery.validationEngine-en.js": function (
      e,
      t,
      n
    ) {
      var s, r, i;
      (r = [n("../caches/app/node_modules/jquery/dist/jquery.js")]),
        void 0 ===
          (i =
            "function" ==
            typeof (s = function (e) {
              (e.fn.validationEngineLanguage = function () {}),
                (e.validationEngineLanguage = {
                  newLang: function () {
                    e.validationEngineLanguage.allRules = {
                      required: {
                        regex: "none",
                        alertText: "* This field is required",
                        alertTextCheckboxMultiple: "* Please select an option",
                        alertTextCheckboxe: "* This checkbox is required",
                        alertTextDateRange:
                          "* Both date range fields are required",
                      },
                      requiredInFunction: {
                        func: function (e, t, n, s) {
                          return "test" == e.val();
                        },
                        alertText: "* Field must equal test",
                      },
                      dateRange: {
                        regex: "none",
                        alertText: "* Invalid ",
                        alertText2: "Date Range",
                      },
                      dateTimeRange: {
                        regex: "none",
                        alertText: "* Invalid ",
                        alertText2: "Date Time Range",
                      },
                      minSize: {
                        regex: "none",
                        alertText: "* Minimum ",
                        alertText2: " characters required",
                      },
                      maxSize: {
                        regex: "none",
                        alertText: "* Maximum ",
                        alertText2: " characters allowed",
                      },
                      groupRequired: {
                        regex: "none",
                        alertText:
                          "* You must fill one of the following fields",
                        alertTextCheckboxMultiple: "* Please select an option",
                        alertTextCheckboxe: "* This checkbox is required",
                      },
                      min: { regex: "none", alertText: "* Minimum value is " },
                      max: { regex: "none", alertText: "* Maximum value is " },
                      past: { regex: "none", alertText: "* Date prior to " },
                      future: { regex: "none", alertText: "* Date past " },
                      maxCheckbox: {
                        regex: "none",
                        alertText: "* Maximum ",
                        alertText2: " options allowed",
                      },
                      minCheckbox: {
                        regex: "none",
                        alertText: "* Please select ",
                        alertText2: " options",
                      },
                      equals: {
                        regex: "none",
                        alertText: "* Fields do not match",
                      },
                      creditCard: {
                        regex: "none",
                        alertText: "* Invalid credit card number",
                      },
                      phone: {
                        regex:
                          /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                        alertText: "* Invalid phone number",
                      },
                      email: {
                        regex:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        alertText: "* Invalid email address",
                      },
                      fullname: {
                        regex:
                          /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                        alertText: "* Must be first and last name",
                      },
                      zip: {
                        regex: /^\d{5}$|^\d{5}-\d{4}$/,
                        alertText: "* Invalid zip format",
                      },
                      integer: {
                        regex: /^[\-\+]?\d+$/,
                        alertText: "* Not a valid integer",
                      },
                      number: {
                        regex:
                          /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                        alertText: "* Invalid floating decimal number",
                      },
                      date: {
                        func: function (e) {
                          var t = new RegExp(
                            /^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/
                          ).exec(e.val());
                          if (null == t) return !1;
                          var n = t[1],
                            s = 1 * t[2],
                            r = 1 * t[3],
                            i = new Date(n, s - 1, r);
                          return (
                            i.getFullYear() == n &&
                            i.getMonth() == s - 1 &&
                            i.getDate() == r
                          );
                        },
                        alertText:
                          "* Invalid date, must be in YYYY-MM-DD format",
                      },
                      ipv4: {
                        regex:
                          /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                        alertText: "* Invalid IP address",
                      },
                      url: {
                        regex:
                          /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                        alertText: "* Invalid URL",
                      },
                      onlyNumberSp: {
                        regex: /^[0-9\ ]+$/,
                        alertText: "* Numbers only",
                      },
                      onlyLetterSp: {
                        regex: /^[a-zA-Z\ \']+$/,
                        alertText: "* Letters only",
                      },
                      onlyLetterAccentSp: {
                        regex: /^[a-z\u00C0-\u017F\ ]+$/i,
                        alertText: "* Letters only (accents allowed)",
                      },
                      onlyLetterNumber: {
                        regex: /^[0-9a-zA-Z]+$/,
                        alertText: "* No special characters allowed",
                      },
                      ajaxUserCall: {
                        url: "ajaxValidateFieldUser",
                        extraData: "name=eric",
                        alertText: "* This user is already taken",
                        alertTextLoad: "* Validating, please wait",
                      },
                      ajaxUserCallPhp: {
                        url: "phpajax/ajaxValidateFieldUser.php",
                        extraData: "name=eric",
                        alertTextOk: "* This username is available",
                        alertText: "* This user is already taken",
                        alertTextLoad: "* Validating, please wait",
                      },
                      ajaxNameCall: {
                        url: "ajaxValidateFieldName",
                        alertText: "* This name is already taken",
                        alertTextOk: "* This name is available",
                        alertTextLoad: "* Validating, please wait",
                      },
                      ajaxNameCallPhp: {
                        url: "phpajax/ajaxValidateFieldName.php",
                        alertText: "* This name is already taken",
                        alertTextLoad: "* Validating, please wait",
                      },
                      validate2fields: { alertText: "* Please input HELLO" },
                      dateFormat: {
                        regex:
                          /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                        alertText: "* Invalid Date",
                      },
                      dateTimeFormat: {
                        regex:
                          /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                        alertText: "* Invalid Date or Date Format",
                        alertText2: "Expected Format: ",
                        alertText3: "mm/dd/yyyy hh:mm:ss AM|PM or ",
                        alertText4: "yyyy-mm-dd hh:mm:ss AM|PM",
                      },
                      customPrice: {
                        alertText:
                          "* Price must greater than $100 and below $500, rounded to the nearest tenth",
                      },
                    };
                  },
                }),
                e.validationEngineLanguage.newLang();
            })
              ? s.apply(t, r)
              : s) || (e.exports = i);
    },
    "./app/ui/application/vendor/jquery.validationEngine.js": function (
      e,
      t,
      n
    ) {
      var s, r, i;
      (r = [n("../caches/app/node_modules/jquery/dist/jquery.js")]),
        (s = function (e) {
          "use strict";
          var t = {
            init: function (n) {
              var s = this;
              return (
                (s.data("jqv") && null != s.data("jqv")) ||
                  ((n = t._saveOptions(s, n)),
                  e(document).on("click", ".formError", function () {
                    e(this).fadeOut(150, function () {
                      e(this).closest(".formError").remove();
                    });
                  })),
                this
              );
            },
            attach: function (n) {
              var s,
                r = this;
              return (
                ((s = n
                  ? t._saveOptions(r, n)
                  : r.data("jqv")).validateAttribute = r.find(
                  "[data-validation-engine*=validate]"
                ).length
                  ? "data-validation-engine"
                  : "class"),
                s.binded &&
                  (r.on(
                    s.validationEventTrigger,
                    "[" +
                      s.validateAttribute +
                      "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)",
                    t._onFieldEvent
                  ),
                  r.on(
                    "click",
                    "[" +
                      s.validateAttribute +
                      "*=validate][type=checkbox],[" +
                      s.validateAttribute +
                      "*=validate][type=radio]",
                    t._onFieldEvent
                  ),
                  r.on(
                    s.validationEventTrigger,
                    "[" +
                      s.validateAttribute +
                      "*=validate][class*=datepicker]",
                    { delay: 300 },
                    t._onFieldEvent
                  )),
                s.autoPositionUpdate &&
                  e(window).bind(
                    "resize",
                    { noAnimation: !0, formElem: r },
                    t.updatePromptsPosition
                  ),
                r.on(
                  "click",
                  "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']",
                  t._submitButtonClick
                ),
                r.removeData("jqv_submitButton"),
                r.on("submit", t._onSubmitEvent),
                this
              );
            },
            detach: function () {
              var n = this,
                s = n.data("jqv");
              return (
                n.off(
                  s.validationEventTrigger,
                  "[" +
                    s.validateAttribute +
                    "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)",
                  t._onFieldEvent
                ),
                n.off(
                  "click",
                  "[" +
                    s.validateAttribute +
                    "*=validate][type=checkbox],[" +
                    s.validateAttribute +
                    "*=validate][type=radio]",
                  t._onFieldEvent
                ),
                n.off(
                  s.validationEventTrigger,
                  "[" + s.validateAttribute + "*=validate][class*=datepicker]",
                  t._onFieldEvent
                ),
                n.off("submit", t._onSubmitEvent),
                n.removeData("jqv"),
                n.off(
                  "click",
                  "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']",
                  t._submitButtonClick
                ),
                n.removeData("jqv_submitButton"),
                s.autoPositionUpdate &&
                  e(window).off("resize", t.updatePromptsPosition),
                this
              );
            },
            validate: function (n) {
              var s,
                r = e(this),
                i = null;
              if (r.is("form") || r.hasClass("validationEngineContainer")) {
                if (r.hasClass("validating")) return !1;
                r.addClass("validating"),
                  (s = n ? t._saveOptions(r, n) : r.data("jqv")),
                  (i = t._validateFields(this)),
                  setTimeout(function () {
                    r.removeClass("validating");
                  }, 100),
                  i && s.onSuccess
                    ? s.onSuccess()
                    : !i && s.onFailure && s.onFailure();
              } else {
                if (!r.is("form") && !r.hasClass("validationEngineContainer")) {
                  var a = r.closest("form, .validationEngineContainer");
                  return (
                    (s = a.data("jqv")
                      ? a.data("jqv")
                      : e.validationEngine.defaults),
                    (i = t._validateField(r, s)) && s.onFieldSuccess
                      ? s.onFieldSuccess()
                      : s.onFieldFailure &&
                        s.InvalidFields.length > 0 &&
                        s.onFieldFailure(),
                    !i
                  );
                }
                r.removeClass("validating");
              }
              return s.onValidationComplete
                ? !!s.onValidationComplete(a, i)
                : i;
            },
            updatePromptsPosition: function (n) {
              if (n && this == window)
                var s = n.data.formElem,
                  r = n.data.noAnimation;
              else s = e(this.closest("form, .validationEngineContainer"));
              var i = s.data("jqv");
              return (
                i || (i = t._saveOptions(s, i)),
                s
                  .find("[" + i.validateAttribute + "*=validate]")
                  .not(":disabled")
                  .each(function () {
                    var n = e(this);
                    i.prettySelect &&
                      n.is(":hidden") &&
                      (n = s.find(
                        "#" + i.usePrefix + n.attr("id") + i.useSuffix
                      ));
                    var a = t._getPrompt(n),
                      o = e(a).find(".formErrorContent").html();
                    a && t._updatePrompt(n, e(a), o, void 0, !1, i, r);
                  }),
                this
              );
            },
            showPrompt: function (e, n, s, r) {
              var i = this.closest("form, .validationEngineContainer").data(
                "jqv"
              );
              return (
                i || (i = t._saveOptions(this, i)),
                s && (i.promptPosition = s),
                (i.showArrow = 1 == r),
                t._showPrompt(this, e, n, !1, i),
                this
              );
            },
            hide: function () {
              var n = e(this).closest("form, .validationEngineContainer"),
                s = n.data("jqv");
              s || (s = t._saveOptions(n, s));
              var r,
                i = s && s.fadeDuration ? s.fadeDuration : 0.3;
              return (
                (r =
                  n.is("form") || n.hasClass("validationEngineContainer")
                    ? "parentForm" + t._getClassName(e(n).attr("id"))
                    : t._getClassName(e(n).attr("id")) + "formError"),
                e("." + r).fadeTo(i, 0, function () {
                  e(this).closest(".formError").remove();
                }),
                this
              );
            },
            hideAll: function () {
              var t = this.data("jqv"),
                n = t ? t.fadeDuration : 300;
              return (
                e(".formError").fadeTo(n, 0, function () {
                  e(this).closest(".formError").remove();
                }),
                this
              );
            },
            _onFieldEvent: function (n) {
              var s = e(this),
                r = s.closest("form, .validationEngineContainer"),
                i = r.data("jqv");
              i || (i = t._saveOptions(r, i)),
                (i.eventTrigger = "field"),
                1 == i.notEmpty
                  ? s.val().length > 0 &&
                    window.setTimeout(
                      function () {
                        t._validateField(s, i);
                      },
                      n.data ? n.data.delay : 0
                    )
                  : window.setTimeout(
                      function () {
                        t._validateField(s, i);
                      },
                      n.data ? n.data.delay : 0
                    );
            },
            _onSubmitEvent: function () {
              var n = e(this),
                s = n.data("jqv");
              if (n.data("jqv_submitButton")) {
                var r = e("#" + n.data("jqv_submitButton"));
                if (
                  r &&
                  r.length > 0 &&
                  (r.hasClass("validate-skip") ||
                    "true" == r.attr("data-validation-engine-skip"))
                )
                  return !0;
              }
              s.eventTrigger = "submit";
              var i = t._validateFields(n);
              return i && s.ajaxFormValidation
                ? (t._validateFormWithAjax(n, s), !1)
                : s.onValidationComplete
                ? !!s.onValidationComplete(n, i)
                : i;
            },
            _checkAjaxStatus: function (t) {
              var n = !0;
              return (
                e.each(t.ajaxValidCache, function (e, t) {
                  if (!t) return (n = !1), !1;
                }),
                n
              );
            },
            _checkAjaxFieldStatus: function (e, t) {
              return 1 == t.ajaxValidCache[e];
            },
            _validateFields: function (n) {
              var s = n.data("jqv"),
                r = !1;
              n.trigger("jqv.form.validating");
              var i = null;
              if (
                (n
                  .find("[" + s.validateAttribute + "*=validate]")
                  .not(":disabled")
                  .each(function () {
                    var a = e(this),
                      o = [];
                    if (e.inArray(a.attr("name"), o) < 0) {
                      if (
                        ((r |= t._validateField(a, s)) &&
                          null == i &&
                          (a.is(":hidden") && s.prettySelect
                            ? (i = a =
                                n.find(
                                  "#" +
                                    s.usePrefix +
                                    t._jqSelector(a.attr("id")) +
                                    s.useSuffix
                                ))
                            : (a.data("jqv-prompt-at") instanceof jQuery
                                ? (a = a.data("jqv-prompt-at"))
                                : a.data("jqv-prompt-at") &&
                                  (a = e(a.data("jqv-prompt-at"))),
                              (i = a))),
                        s.doNotShowAllErrosOnSubmit)
                      )
                        return !1;
                      if ((o.push(a.attr("name")), 1 == s.showOneMessage && r))
                        return !1;
                    }
                  }),
                n.trigger("jqv.form.result", [r]),
                r)
              ) {
                if (s.scroll) {
                  var a = i.offset().top,
                    o = i.offset().left,
                    l = s.promptPosition;
                  if (
                    ("string" == typeof l &&
                      -1 != l.indexOf(":") &&
                      (l = l.substring(0, l.indexOf(":"))),
                    "bottomRight" != l && "bottomLeft" != l)
                  ) {
                    var d = t._getPrompt(i);
                    d && (a = d.offset().top);
                  }
                  if (
                    (s.scrollOffset && (a -= s.scrollOffset), s.isOverflown)
                  ) {
                    var c = e(s.overflownDIV);
                    if (!c.length) return !1;
                    (a += c.scrollTop() + -parseInt(c.offset().top) - 5),
                      e(s.overflownDIV)
                        .filter(":not(:animated)")
                        .animate({ scrollTop: a }, 1100, function () {
                          s.focusFirstField && i.focus();
                        });
                  } else
                    e("html, body").animate(
                      { scrollTop: a },
                      1100,
                      function () {
                        s.focusFirstField && i.focus();
                      }
                    ),
                      e("html, body").animate({ scrollLeft: o }, 1100);
                } else s.focusFirstField && i.focus();
                return !1;
              }
              return !0;
            },
            _validateFormWithAjax: function (n, s) {
              var r = n.serialize(),
                i = s.ajaxFormValidationMethod
                  ? s.ajaxFormValidationMethod
                  : "GET",
                a = s.ajaxFormValidationURL
                  ? s.ajaxFormValidationURL
                  : n.attr("action"),
                o = s.dataType ? s.dataType : "json";
              e.ajax({
                type: i,
                url: a,
                cache: !1,
                dataType: o,
                data: r,
                form: n,
                methods: t,
                options: s,
                beforeSend: function () {
                  return s.onBeforeAjaxFormValidation(n, s);
                },
                error: function (e, n) {
                  s.onFailure ? s.onFailure(e, n) : t._ajaxError(e, n);
                },
                success: function (r) {
                  if ("json" == o && !0 !== r) {
                    for (var i = !1, a = 0; a < r.length; a++) {
                      var l = r[a],
                        d = l[0],
                        c = e(e("#" + d)[0]);
                      if (1 == c.length) {
                        var u,
                          h = l[2];
                        if (1 == l[1])
                          "" != h && h
                            ? (s.allrules[h] &&
                                (u = s.allrules[h].alertTextOk) &&
                                (h = u),
                              s.showPrompts &&
                                t._showPrompt(c, h, "pass", !1, s, !0))
                            : t._closePrompt(c);
                        else
                          (i |= !0),
                            s.allrules[h] &&
                              (u = s.allrules[h].alertText) &&
                              (h = u),
                            s.showPrompts && t._showPrompt(c, h, "", !1, s, !0);
                      }
                    }
                    s.onAjaxFormComplete(!i, n, r, s);
                  } else s.onAjaxFormComplete(!0, n, r, s);
                },
              });
            },
            _validateField: function (n, s, r) {
              if (
                (n.attr("id") ||
                  (n.attr(
                    "id",
                    "form-validation-field-" + e.validationEngine.fieldIdCounter
                  ),
                  ++e.validationEngine.fieldIdCounter),
                n.hasClass(s.ignoreFieldsWithClass))
              )
                return !1;
              if (
                !s.validateNonVisibleFields &&
                ((n.is(":hidden") && !s.prettySelect) ||
                  n.parent().is(":hidden"))
              )
                return !1;
              var i = n.attr(s.validateAttribute),
                a = /validate\[(.*)\]/.exec(i);
              if (!a) return !1;
              var o = a[1],
                l = o.split(/\[|,|\]/),
                d = !1,
                c = n.attr("name"),
                u = "",
                h = "",
                p = !1,
                m = !1;
              (s.isError = !1),
                (s.showArrow = !0),
                s.maxErrorsPerField > 0 && (m = !0);
              for (
                var f = e(n.closest("form, .validationEngineContainer")), v = 0;
                v < l.length;
                v++
              )
                (l[v] = l[v].replace(" ", "")), "" === l[v] && delete l[v];
              v = 0;
              for (var g = 0; v < l.length; v++) {
                if (m && g >= s.maxErrorsPerField) {
                  if (!p) {
                    var y = e.inArray("required", l);
                    p = -1 != y && y >= v;
                  }
                  break;
                }
                var b = void 0;
                switch (l[v]) {
                  case "required":
                    (p = !0),
                      (b = t._getErrorMessage(
                        f,
                        n,
                        l[v],
                        l,
                        v,
                        s,
                        t._required
                      ));
                    break;
                  case "custom":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._custom);
                    break;
                  case "groupRequired":
                    var _ = "[" + s.validateAttribute + "*=" + l[v + 1] + "]",
                      w = f.find(_).eq(0);
                    w[0] != n[0] &&
                      (t._validateField(w, s, r), (s.showArrow = !0)),
                      (b = t._getErrorMessage(
                        f,
                        n,
                        l[v],
                        l,
                        v,
                        s,
                        t._groupRequired
                      )) && (p = !0),
                      (s.showArrow = !1);
                    break;
                  case "ajax":
                    (b = t._ajax(n, l, v, s)) && (h = "load");
                    break;
                  case "minSize":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._minSize);
                    break;
                  case "maxSize":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._maxSize);
                    break;
                  case "min":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._min);
                    break;
                  case "max":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._max);
                    break;
                  case "past":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._past);
                    break;
                  case "future":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._future);
                    break;
                  case "dateRange":
                    (_ = "[" + s.validateAttribute + "*=" + l[v + 1] + "]"),
                      (s.firstOfGroup = f.find(_).eq(0)),
                      (s.secondOfGroup = f.find(_).eq(1)),
                      (s.firstOfGroup[0].value || s.secondOfGroup[0].value) &&
                        (b = t._getErrorMessage(
                          f,
                          n,
                          l[v],
                          l,
                          v,
                          s,
                          t._dateRange
                        )),
                      b && (p = !0),
                      (s.showArrow = !1);
                    break;
                  case "dateTimeRange":
                    (_ = "[" + s.validateAttribute + "*=" + l[v + 1] + "]"),
                      (s.firstOfGroup = f.find(_).eq(0)),
                      (s.secondOfGroup = f.find(_).eq(1)),
                      (s.firstOfGroup[0].value || s.secondOfGroup[0].value) &&
                        (b = t._getErrorMessage(
                          f,
                          n,
                          l[v],
                          l,
                          v,
                          s,
                          t._dateTimeRange
                        )),
                      b && (p = !0),
                      (s.showArrow = !1);
                    break;
                  case "maxCheckbox":
                    (n = e(f.find("input[name='" + c + "']"))),
                      (b = t._getErrorMessage(
                        f,
                        n,
                        l[v],
                        l,
                        v,
                        s,
                        t._maxCheckbox
                      ));
                    break;
                  case "minCheckbox":
                    (n = e(f.find("input[name='" + c + "']"))),
                      (b = t._getErrorMessage(
                        f,
                        n,
                        l[v],
                        l,
                        v,
                        s,
                        t._minCheckbox
                      ));
                    break;
                  case "equals":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._equals);
                    break;
                  case "funcCall":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._funcCall);
                    break;
                  case "creditCard":
                    b = t._getErrorMessage(f, n, l[v], l, v, s, t._creditCard);
                    break;
                  case "condRequired":
                    void 0 !==
                      (b = t._getErrorMessage(
                        f,
                        n,
                        l[v],
                        l,
                        v,
                        s,
                        t._condRequired
                      )) && (p = !0);
                    break;
                  case "funcCallRequired":
                    void 0 !==
                      (b = t._getErrorMessage(
                        f,
                        n,
                        l[v],
                        l,
                        v,
                        s,
                        t._funcCallRequired
                      )) && (p = !0);
                }
                var x = !1;
                if ("object" == typeof b)
                  switch (b.status) {
                    case "_break":
                      x = !0;
                      break;
                    case "_error":
                      b = b.message;
                      break;
                    case "_error_no_prompt":
                      return !0;
                  }
                if (
                  (0 == v &&
                    0 == o.indexOf("funcCallRequired") &&
                    void 0 !== b &&
                    ((u += b + "<br/>"), (s.isError = !0), g++, (x = !0)),
                  x)
                )
                  break;
                "string" == typeof b &&
                  ((u += b + "<br/>"), (s.isError = !0), g++);
              }
              !p &&
                !n.val() &&
                n.val().length < 1 &&
                e.inArray("equals", l) < 0 &&
                (s.isError = !1);
              var k = n.prop("type"),
                S = n.data("promptPosition") || s.promptPosition;
              ("radio" == k || "checkbox" == k) &&
                f.find("input[name='" + c + "']").size() > 1 &&
                ((n = e(
                  "inline" === S
                    ? f.find("input[name='" + c + "'][type!=hidden]:last")
                    : f.find("input[name='" + c + "'][type!=hidden]:first")
                )),
                (s.showArrow = s.showArrowOnRadioAndCheckbox)),
                n.is(":hidden") &&
                  s.prettySelect &&
                  (n = f.find(
                    "#" +
                      s.usePrefix +
                      t._jqSelector(n.attr("id")) +
                      s.useSuffix
                  )),
                s.isError && s.showPrompts
                  ? t._showPrompt(n, u, h, !1, s)
                  : d || t._closePrompt(n),
                d || n.trigger("jqv.field.result", [n, s.isError, u]);
              var T = e.inArray(n[0], s.InvalidFields);
              return (
                -1 == T
                  ? s.isError && s.InvalidFields.push(n[0])
                  : s.isError || s.InvalidFields.splice(T, 1),
                t._handleStatusCssClasses(n, s),
                s.isError && s.onFieldFailure && s.onFieldFailure(n),
                !s.isError && s.onFieldSuccess && s.onFieldSuccess(n),
                s.isError
              );
            },
            _handleStatusCssClasses: function (e, t) {
              t.addSuccessCssClassToField &&
                e.removeClass(t.addSuccessCssClassToField),
                t.addFailureCssClassToField &&
                  e.removeClass(t.addFailureCssClassToField),
                t.addSuccessCssClassToField &&
                  !t.isError &&
                  e.addClass(t.addSuccessCssClassToField),
                t.addFailureCssClassToField &&
                  t.isError &&
                  e.addClass(t.addFailureCssClassToField);
            },
            _getErrorMessage: function (n, s, r, i, a, o, l) {
              var d = jQuery.inArray(r, i);
              ("custom" !== r &&
                "funcCall" !== r &&
                "funcCallRequired" !== r) ||
                ((r = r + "[" + i[d + 1] + "]"), delete i[d]);
              var c,
                u = r,
                h = (
                  s.attr("data-validation-engine")
                    ? s.attr("data-validation-engine")
                    : s.attr("class")
                ).split(" ");
              if (
                null !=
                (c =
                  "future" == r ||
                  "past" == r ||
                  "maxCheckbox" == r ||
                  "minCheckbox" == r
                    ? l(n, s, i, a, o)
                    : l(s, i, a, o))
              ) {
                var p = t._getCustomErrorMessage(e(s), h, u, o);
                p && (c = p);
              }
              return c;
            },
            _getCustomErrorMessage: function (e, n, s, r) {
              var i = !1,
                a = /^custom\[.*\]$/.test(s)
                  ? t._validityProp.custom
                  : t._validityProp[s];
              if (null != a && null != (i = e.attr("data-errormessage-" + a)))
                return i;
              if (null != (i = e.attr("data-errormessage"))) return i;
              var o = "#" + e.attr("id");
              if (
                void 0 !== r.custom_error_messages[o] &&
                void 0 !== r.custom_error_messages[o][s]
              )
                i = r.custom_error_messages[o][s].message;
              else if (n.length > 0)
                for (var l = 0; l < n.length && n.length > 0; l++) {
                  var d = "." + n[l];
                  if (
                    void 0 !== r.custom_error_messages[d] &&
                    void 0 !== r.custom_error_messages[d][s]
                  ) {
                    i = r.custom_error_messages[d][s].message;
                    break;
                  }
                }
              return (
                i ||
                  void 0 === r.custom_error_messages[s] ||
                  void 0 === r.custom_error_messages[s].message ||
                  (i = r.custom_error_messages[s].message),
                i
              );
            },
            _validityProp: {
              required: "value-missing",
              custom: "custom-error",
              groupRequired: "value-missing",
              ajax: "custom-error",
              minSize: "range-underflow",
              maxSize: "range-overflow",
              min: "range-underflow",
              max: "range-overflow",
              past: "type-mismatch",
              future: "type-mismatch",
              dateRange: "type-mismatch",
              dateTimeRange: "type-mismatch",
              maxCheckbox: "range-overflow",
              minCheckbox: "range-underflow",
              equals: "pattern-mismatch",
              funcCall: "custom-error",
              funcCallRequired: "custom-error",
              creditCard: "pattern-mismatch",
              condRequired: "value-missing",
            },
            _required: function (t, n, s, r, i) {
              switch (t.prop("type")) {
                case "radio":
                case "checkbox":
                  if (i) {
                    if (!t.prop("checked"))
                      return r.allrules[n[s]].alertTextCheckboxMultiple;
                    break;
                  }
                  var a = t.closest("form, .validationEngineContainer"),
                    o = t.attr("name");
                  if (0 == a.find("input[name='" + o + "']:checked").size())
                    return 1 == a.find("input[name='" + o + "']:visible").size()
                      ? r.allrules[n[s]].alertTextCheckboxe
                      : r.allrules[n[s]].alertTextCheckboxMultiple;
                  break;
                default:
                  var l = e.trim(t.val()),
                    d = e.trim(t.attr("data-validation-placeholder")),
                    c = e.trim(t.attr("placeholder"));
                  if (!l || (d && l == d) || (c && l == c))
                    return r.allrules[n[s]].alertText;
              }
            },
            _groupRequired: function (n, s, r, i) {
              var a = "[" + i.validateAttribute + "*=" + s[r + 1] + "]",
                o = !1;
              if (
                (n
                  .closest("form, .validationEngineContainer")
                  .find(a)
                  .each(function () {
                    if (!t._required(e(this), s, r, i)) return (o = !0), !1;
                  }),
                !o)
              )
                return i.allrules[s[r]].alertText;
            },
            _custom: function (e, t, n, s) {
              var r,
                i = t[n + 1],
                a = s.allrules[i];
              if (a)
                if (a.regex) {
                  var o = a.regex;
                  if (!o)
                    return void alert("jqv:custom regex not found - " + i);
                  if (!new RegExp(o).test(e.val()))
                    return s.allrules[i].alertText;
                } else {
                  if (!a.func)
                    return void alert("jqv:custom type not allowed " + i);
                  if ("function" != typeof (r = a.func))
                    return void alert(
                      "jqv:custom parameter 'function' is no function - " + i
                    );
                  if (!r(e, t, n, s)) return s.allrules[i].alertText;
                }
              else alert("jqv:custom rule not found - " + i);
            },
            _funcCall: function (e, t, n, s) {
              var r,
                i = t[n + 1];
              if (i.indexOf(".") > -1) {
                for (var a = i.split("."), o = window; a.length; )
                  o = o[a.shift()];
                r = o;
              } else r = window[i] || s.customFunctions[i];
              if ("function" == typeof r) return r(e, t, n, s);
            },
            _funcCallRequired: function (e, n, s, r) {
              return t._funcCall(e, n, s, r);
            },
            _equals: function (t, n, s, r) {
              var i = n[s + 1];
              if (t.val() != e("#" + i).val())
                return r.allrules.equals.alertText;
            },
            _maxSize: function (e, t, n, s) {
              var r = t[n + 1];
              if (e.val().length > r) {
                var i = s.allrules.maxSize;
                return i.alertText + r + i.alertText2;
              }
            },
            _minSize: function (e, t, n, s) {
              var r = t[n + 1];
              if (e.val().length < r) {
                var i = s.allrules.minSize;
                return i.alertText + r + i.alertText2;
              }
            },
            _min: function (e, t, n, s) {
              var r = parseFloat(t[n + 1]);
              if (parseFloat(e.val()) < r) {
                var i = s.allrules.min;
                return i.alertText2
                  ? i.alertText + r + i.alertText2
                  : i.alertText + r;
              }
            },
            _max: function (e, t, n, s) {
              var r = parseFloat(t[n + 1]);
              if (parseFloat(e.val()) > r) {
                var i = s.allrules.max;
                return i.alertText2
                  ? i.alertText + r + i.alertText2
                  : i.alertText + r;
              }
            },
            _past: function (n, s, r, i, a) {
              var o,
                l = r[i + 1],
                d = e(n.find("*[name='" + l.replace(/^#+/, "") + "']"));
              if ("now" == l.toLowerCase()) o = new Date();
              else if (null != d.val()) {
                if (d.is(":disabled")) return;
                o = t._parseDate(d.val());
              } else o = t._parseDate(l);
              if (t._parseDate(s.val()) > o) {
                var c = a.allrules.past;
                return c.alertText2
                  ? c.alertText + t._dateToString(o) + c.alertText2
                  : c.alertText + t._dateToString(o);
              }
            },
            _future: function (n, s, r, i, a) {
              var o,
                l = r[i + 1],
                d = e(n.find("*[name='" + l.replace(/^#+/, "") + "']"));
              if ("now" == l.toLowerCase()) o = new Date();
              else if (null != d.val()) {
                if (d.is(":disabled")) return;
                o = t._parseDate(d.val());
              } else o = t._parseDate(l);
              if (t._parseDate(s.val()) < o) {
                var c = a.allrules.future;
                return c.alertText2
                  ? c.alertText + t._dateToString(o) + c.alertText2
                  : c.alertText + t._dateToString(o);
              }
            },
            _isDate: function (e) {
              return new RegExp(
                /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/
              ).test(e);
            },
            _isDateTime: function (e) {
              return new RegExp(
                /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/
              ).test(e);
            },
            _dateCompare: function (e, t) {
              return new Date(e.toString()) < new Date(t.toString());
            },
            _dateRange: function (e, n, s, r) {
              return (!r.firstOfGroup[0].value && r.secondOfGroup[0].value) ||
                (r.firstOfGroup[0].value && !r.secondOfGroup[0].value)
                ? r.allrules[n[s]].alertText + r.allrules[n[s]].alertText2
                : t._isDate(r.firstOfGroup[0].value) &&
                  t._isDate(r.secondOfGroup[0].value) &&
                  t._dateCompare(
                    r.firstOfGroup[0].value,
                    r.secondOfGroup[0].value
                  )
                ? void 0
                : r.allrules[n[s]].alertText + r.allrules[n[s]].alertText2;
            },
            _dateTimeRange: function (e, n, s, r) {
              return (!r.firstOfGroup[0].value && r.secondOfGroup[0].value) ||
                (r.firstOfGroup[0].value && !r.secondOfGroup[0].value)
                ? r.allrules[n[s]].alertText + r.allrules[n[s]].alertText2
                : t._isDateTime(r.firstOfGroup[0].value) &&
                  t._isDateTime(r.secondOfGroup[0].value) &&
                  t._dateCompare(
                    r.firstOfGroup[0].value,
                    r.secondOfGroup[0].value
                  )
                ? void 0
                : r.allrules[n[s]].alertText + r.allrules[n[s]].alertText2;
            },
            _maxCheckbox: function (e, t, n, s, r) {
              var i = n[s + 1],
                a = t.attr("name");
              if (e.find("input[name='" + a + "']:checked").size() > i)
                return (
                  (r.showArrow = !1),
                  r.allrules.maxCheckbox.alertText2
                    ? r.allrules.maxCheckbox.alertText +
                      " " +
                      i +
                      " " +
                      r.allrules.maxCheckbox.alertText2
                    : r.allrules.maxCheckbox.alertText
                );
            },
            _minCheckbox: function (e, t, n, s, r) {
              var i = n[s + 1],
                a = t.attr("name");
              if (e.find("input[name='" + a + "']:checked").size() < i)
                return (
                  (r.showArrow = !1),
                  r.allrules.minCheckbox.alertText +
                    " " +
                    i +
                    " " +
                    r.allrules.minCheckbox.alertText2
                );
            },
            _creditCard: function (e, t, n, s) {
              var r = !1,
                i = e.val().replace(/ +/g, "").replace(/-+/g, ""),
                a = i.length;
              if (a >= 14 && a <= 16 && parseInt(i) > 0) {
                var o,
                  l = 0,
                  d = ((n = a - 1), 1),
                  c = new String();
                do {
                  (o = parseInt(i.charAt(n))), (c += d++ % 2 == 0 ? 2 * o : o);
                } while (--n >= 0);
                for (n = 0; n < c.length; n++) l += parseInt(c.charAt(n));
                r = l % 10 == 0;
              }
              if (!r) return s.allrules.creditCard.alertText;
            },
            _ajax: function (n, s, r, i) {
              var a = s[r + 1],
                o = i.allrules[a],
                l = o.extraData,
                d = o.extraDataDynamic,
                c = { fieldId: n.attr("id"), fieldValue: n.val() };
              if ("object" == typeof l) e.extend(c, l);
              else if ("string" == typeof l) {
                var u = l.split("&");
                for (r = 0; r < u.length; r++) {
                  var h = u[r].split("=");
                  h[0] && h[0] && (c[h[0]] = h[1]);
                }
              }
              if (d) {
                var p = String(d).split(",");
                for (r = 0; r < p.length; r++) {
                  var m = p[r];
                  if (e(m).length) {
                    var f = n
                      .closest("form, .validationEngineContainer")
                      .find(m)
                      .val();
                    m.replace("#", ""), escape(f), (c[m.replace("#", "")] = f);
                  }
                }
              }
              if (
                ("field" == i.eventTrigger &&
                  delete i.ajaxValidCache[n.attr("id")],
                !i.isError && !t._checkAjaxFieldStatus(n.attr("id"), i))
              )
                return (
                  e.ajax({
                    type: i.ajaxFormValidationMethod,
                    url: o.url,
                    cache: !1,
                    dataType: "json",
                    data: c,
                    field: n,
                    rule: o,
                    methods: t,
                    options: i,
                    beforeSend: function () {},
                    error: function (e, n) {
                      i.onFailure ? i.onFailure(e, n) : t._ajaxError(e, n);
                    },
                    success: function (s) {
                      var r = s[0],
                        a = e("#" + r).eq(0);
                      if (1 == a.length) {
                        var l,
                          d = s[1],
                          c = s[2];
                        if (d)
                          (i.ajaxValidCache[r] = !0),
                            c
                              ? i.allrules[c] &&
                                (l = i.allrules[c].alertTextOk) &&
                                (c = l)
                              : (c = o.alertTextOk),
                            i.showPrompts &&
                              (c
                                ? t._showPrompt(a, c, "pass", !0, i)
                                : t._closePrompt(a)),
                            "submit" == i.eventTrigger &&
                              n.closest("form").submit();
                        else
                          (i.ajaxValidCache[r] = !1),
                            (i.isError = !0),
                            c
                              ? i.allrules[c] &&
                                (l = i.allrules[c].alertText) &&
                                (c = l)
                              : (c = o.alertText),
                            i.showPrompts && t._showPrompt(a, c, "", !0, i);
                      }
                      a.trigger("jqv.field.result", [a, i.isError, c]);
                    },
                  }),
                  o.alertTextLoad
                );
            },
            _ajaxError: function (e, t) {
              0 == e.status && null == t
                ? alert(
                    "The page is not served from a server! ajax call failed"
                  )
                : "undefined" != typeof console &&
                  console.log("Ajax error: " + e.status + " " + t);
            },
            _dateToString: function (e) {
              return (
                e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
              );
            },
            _parseDate: function (e) {
              var t = e.split("-");
              return (
                t == e && (t = e.split("/")),
                t == e
                  ? ((t = e.split(".")), new Date(t[2], t[1] - 1, t[0]))
                  : new Date(t[0], t[1] - 1, t[2])
              );
            },
            _showPrompt: function (n, s, r, i, a, o) {
              n.data("jqv-prompt-at") instanceof jQuery
                ? (n = n.data("jqv-prompt-at"))
                : n.data("jqv-prompt-at") && (n = e(n.data("jqv-prompt-at")));
              var l = t._getPrompt(n);
              o && (l = !1),
                e.trim(s) &&
                  (l
                    ? t._updatePrompt(n, l, s, r, i, a)
                    : t._buildPrompt(n, s, r, i, a));
            },
            _buildPrompt: function (n, s, r, i, a) {
              var o = e("<div>");
              switch (
                (o.addClass(t._getClassName(n.attr("id")) + "formError"),
                o.addClass(
                  "parentForm" +
                    t._getClassName(
                      n.closest("form, .validationEngineContainer").attr("id")
                    )
                ),
                o.addClass("formError"),
                r)
              ) {
                case "pass":
                  o.addClass("greenPopup");
                  break;
                case "load":
                  o.addClass("blackPopup");
              }
              i && o.addClass("ajaxed"),
                e("<div>").addClass("formErrorContent").html(s).appendTo(o);
              var l = n.data("promptPosition") || a.promptPosition;
              if (a.showArrow) {
                var d = e("<div>").addClass("formErrorArrow");
                switch (
                  ("string" == typeof l &&
                    -1 != (h = l.indexOf(":")) &&
                    (l = l.substring(0, h)),
                  l)
                ) {
                  case "bottomLeft":
                  case "bottomRight":
                    o.find(".formErrorContent").before(d),
                      d
                        .addClass("formErrorArrowBottom")
                        .html(
                          '<div class="line1">\x3c!-- --\x3e</div><div class="line2">\x3c!-- --\x3e</div><div class="line3">\x3c!-- --\x3e</div><div class="line4">\x3c!-- --\x3e</div><div class="line5">\x3c!-- --\x3e</div><div class="line6">\x3c!-- --\x3e</div><div class="line7">\x3c!-- --\x3e</div><div class="line8">\x3c!-- --\x3e</div><div class="line9">\x3c!-- --\x3e</div><div class="line10">\x3c!-- --\x3e</div>'
                        );
                    break;
                  case "topLeft":
                  case "topRight":
                    d.html(
                      '<div class="line10">\x3c!-- --\x3e</div><div class="line9">\x3c!-- --\x3e</div><div class="line8">\x3c!-- --\x3e</div><div class="line7">\x3c!-- --\x3e</div><div class="line6">\x3c!-- --\x3e</div><div class="line5">\x3c!-- --\x3e</div><div class="line4">\x3c!-- --\x3e</div><div class="line3">\x3c!-- --\x3e</div><div class="line2">\x3c!-- --\x3e</div><div class="line1">\x3c!-- --\x3e</div>'
                    ),
                      o.append(d);
                }
              }
              a.addPromptClass && o.addClass(a.addPromptClass);
              var c = n.attr("data-required-class");
              if (void 0 !== c) o.addClass(c);
              else if (
                a.prettySelect &&
                e("#" + n.attr("id"))
                  .next()
                  .is("select")
              ) {
                var u = e(
                  "#" +
                    n
                      .attr("id")
                      .substr(a.usePrefix.length)
                      .substring(a.useSuffix.length)
                ).attr("data-required-class");
                void 0 !== u && o.addClass(u);
              }
              o.css({ opacity: 0 }),
                "inline" === l
                  ? (o.addClass("inline"),
                    void 0 !== n.attr("data-prompt-target") &&
                    e("#" + n.attr("data-prompt-target")).length > 0
                      ? o.appendTo(e("#" + n.attr("data-prompt-target")))
                      : n.after(o))
                  : n.before(o);
              var h = t._calculatePosition(n, o, a);
              return (
                o
                  .css({
                    position: "inline" === l ? "relative" : "absolute",
                    top: h.callerTopPosition,
                    left: h.callerleftPosition,
                    marginTop: h.marginTopSize,
                    opacity: 0,
                  })
                  .data("callerField", n),
                a.autoHidePrompt &&
                  setTimeout(function () {
                    o.animate({ opacity: 0 }, function () {
                      o.closest(".formError").remove();
                    });
                  }, a.autoHideDelay),
                o.animate({ opacity: 0.87 })
              );
            },
            _updatePrompt: function (e, n, s, r, i, a, o) {
              if (n) {
                void 0 !== r &&
                  ("pass" == r
                    ? n.addClass("greenPopup")
                    : n.removeClass("greenPopup"),
                  "load" == r
                    ? n.addClass("blackPopup")
                    : n.removeClass("blackPopup")),
                  i ? n.addClass("ajaxed") : n.removeClass("ajaxed"),
                  n.find(".formErrorContent").html(s);
                var l = t._calculatePosition(e, n, a),
                  d = {
                    top: l.callerTopPosition,
                    left: l.callerleftPosition,
                    marginTop: l.marginTopSize,
                    opacity: 0.87,
                  };
                n.css({ opacity: 0, display: "block" }),
                  o ? n.css(d) : n.animate(d);
              }
            },
            _closePrompt: function (e) {
              var n = t._getPrompt(e);
              n &&
                n.fadeTo("fast", 0, function () {
                  n.closest(".formError").remove();
                });
            },
            closePrompt: function (e) {
              return t._closePrompt(e);
            },
            _getPrompt: function (n) {
              var s = e(n)
                  .closest("form, .validationEngineContainer")
                  .attr("id"),
                r = t._getClassName(n.attr("id")) + "formError",
                i = e(
                  "." +
                    t._escapeExpression(r) +
                    ".parentForm" +
                    t._getClassName(s)
                )[0];
              if (i) return e(i);
            },
            _escapeExpression: function (e) {
              return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
            },
            isRTL: function (t) {
              var n = e(document),
                s = e("body"),
                r =
                  (t && t.hasClass("rtl")) ||
                  (t && "rtl" === (t.attr("dir") || "").toLowerCase()) ||
                  n.hasClass("rtl") ||
                  "rtl" === (n.attr("dir") || "").toLowerCase() ||
                  s.hasClass("rtl") ||
                  "rtl" === (s.attr("dir") || "").toLowerCase();
              return Boolean(r);
            },
            _calculatePosition: function (e, t, n) {
              var s,
                r,
                i,
                a = e.width(),
                o = e.position().left,
                l = e.position().top;
              e.height(), (s = r = 0), (i = -t.height());
              var d = e.data("promptPosition") || n.promptPosition,
                c = "",
                u = "",
                h = 0,
                p = 0;
              switch (
                ("string" == typeof d &&
                  -1 != d.indexOf(":") &&
                  ((c = d.substring(d.indexOf(":") + 1)),
                  (d = d.substring(0, d.indexOf(":"))),
                  -1 != c.indexOf(",") &&
                    ((u = c.substring(c.indexOf(",") + 1)),
                    (c = c.substring(0, c.indexOf(","))),
                    (p = parseInt(u)),
                    isNaN(p) && (p = 0)),
                  (h = parseInt(c)),
                  isNaN(c) && (c = 0)),
                d)
              ) {
                default:
                case "topRight":
                  (r += o + a - 27), (s += l);
                  break;
                case "topLeft":
                  (s += l), (r += o);
                  break;
                case "centerRight":
                  (s = l + 4), (i = 0), (r = o + e.outerWidth(!0) + 5);
                  break;
                case "centerLeft":
                  (r = o - (t.width() + 2)), (s = l + 4), (i = 0);
                  break;
                case "bottomLeft":
                  (s = l + e.height() + 5), (i = 0), (r = o);
                  break;
                case "bottomRight":
                  (r = o + a - 27), (s = l + e.height() + 5), (i = 0);
                  break;
                case "inline":
                  (r = 0), (s = 0), (i = 0);
              }
              return {
                callerTopPosition: (s += p) + "px",
                callerleftPosition: (r += h) + "px",
                marginTopSize: i + "px",
              };
            },
            _saveOptions: function (t, n) {
              if (e.validationEngineLanguage)
                var s = e.validationEngineLanguage.allRules;
              else
                e.error(
                  "jQuery.validationEngine rules are not loaded, plz add localization files to the page"
                );
              e.validationEngine.defaults.allrules = s;
              var r = e.extend(!0, {}, e.validationEngine.defaults, n);
              return t.data("jqv", r), r;
            },
            _getClassName: function (e) {
              if (e) return e.replace(/:/g, "_").replace(/\./g, "_");
            },
            _jqSelector: function (e) {
              return e.replace(
                /([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,
                "\\$1"
              );
            },
            _condRequired: function (e, n, s, r) {
              var i, a;
              for (i = s + 1; i < n.length; i++)
                if (
                  (a = jQuery("#" + n[i]).first()).length &&
                  null == t._required(a, ["required"], 0, r, !0)
                )
                  return t._required(e, ["required"], 0, r);
            },
            _submitButtonClick: function (t) {
              var n = e(this);
              n.closest("form, .validationEngineContainer").data(
                "jqv_submitButton",
                n.attr("id")
              );
            },
          };
          (e.fn.validationEngine = function (n) {
            var s = e(this);
            return s[0]
              ? "string" == typeof n && "_" != n.charAt(0) && t[n]
                ? ("showPrompt" != n &&
                    "hide" != n &&
                    "hideAll" != n &&
                    t.init.apply(s),
                  t[n].apply(s, Array.prototype.slice.call(arguments, 1)))
                : "object" != typeof n && n
                ? void e.error(
                    "Method " + n + " does not exist in jQuery.validationEngine"
                  )
                : (t.init.apply(s, arguments), t.attach.apply(s))
              : s;
          }),
            (e.validationEngine = {
              fieldIdCounter: 0,
              defaults: {
                validationEventTrigger: "blur",
                scroll: !0,
                focusFirstField: !0,
                showPrompts: !0,
                validateNonVisibleFields: !1,
                ignoreFieldsWithClass: "ignoreMe",
                promptPosition: "topRight",
                bindMethod: "bind",
                inlineAjax: !1,
                ajaxFormValidation: !1,
                ajaxFormValidationURL: !1,
                ajaxFormValidationMethod: "get",
                onAjaxFormComplete: e.noop,
                onBeforeAjaxFormValidation: e.noop,
                onValidationComplete: !1,
                doNotShowAllErrosOnSubmit: !1,
                custom_error_messages: {},
                binded: !0,
                notEmpty: !1,
                showArrow: !0,
                showArrowOnRadioAndCheckbox: !1,
                isError: !1,
                maxErrorsPerField: !1,
                ajaxValidCache: {},
                autoPositionUpdate: !1,
                InvalidFields: [],
                onFieldSuccess: !1,
                onFieldFailure: !1,
                onSuccess: !1,
                onFailure: !1,
                validateAttribute: "class",
                addSuccessCssClassToField: "",
                addFailureCssClassToField: "",
                autoHidePrompt: !1,
                autoHideDelay: 1e4,
                fadeDuration: 300,
                prettySelect: !1,
                addPromptClass: "",
                usePrefix: "",
                useSuffix: "",
                showOneMessage: !1,
              },
            }),
            e(function () {
              e.validationEngine.defaults.promptPosition = t.isRTL()
                ? "topLeft"
                : "topRight";
            });
        }),
        void 0 === (i = "function" == typeof s ? s.apply(t, r) : s) ||
          (e.exports = i);
    },
    "./app/ui/application/vendor/modernizr.exec.js": (e, t, n) => {
      n("../caches/app/node_modules/script-loader/addScript.js")(
        n(
          "../caches/app/node_modules/raw-loader/index.js!./app/ui/application/vendor/modernizr.exec.js"
        )
      );
    },
    "./app/ui/utilities/bugsnag.ts": (e, t, n) => {
      "use strict";
      n.d(t, { q: () => a });
      var s = n("../caches/app/node_modules/@bugsnag/js/browser/notifier.js"),
        r = n.n(s);
      const i = {
          apiKey: "69ced3d4ebd0a4b47a519d21073060f9",
          appVersion: n("../caches/app/node_modules/process/browser.js").env
            .REVISION,
          releaseStage: "production",
          enabledReleaseStages: ["production", "staging"],
          onError: (e) => {
            var t;
            if (
              null !== (t = e.request.url) &&
              void 0 !== t &&
              t.startsWith("file://")
            )
              return !1;
          },
        },
        a = (e) => {
          const t = { ...i, ...e };
          r().start(t);
        };
    },
    "../caches/app/node_modules/raw-loader/index.js!./app/ui/application/vendor/modernizr.exec.js":
      (e) => {
        e.exports =
          "/*!\n * modernizr v3.3.1\n * Build https://modernizr.com/download?-csstransforms3d-flexbox-placeholder-setclasses-dontmin\n *\n * Copyright (c)\n *  Faruk Ates\n *  Paul Irish\n *  Alex Sexton\n *  Ryan Seddon\n *  Patrick Kettner\n *  Stu Cox\n *  Richard Herrera\n\n * MIT License\n */\n\n/*\n * Modernizr tests which native CSS3 and HTML5 features are available in the\n * current UA and makes the results available to you in two ways: as properties on\n * a global `Modernizr` object, and as classes on the `<html>` element. This\n * information allows you to progressively enhance your pages with a granular level\n * of control over the experience.\n*/\n\n;(function(window, document, undefined){\n  var classes = [];\n\n\n  var tests = [];\n\n\n  /**\n   *\n   * ModernizrProto is the constructor for Modernizr\n   *\n   * @class\n   * @access public\n   */\n\n  var ModernizrProto = {\n    // The current version, dummy\n    _version: '3.3.1',\n\n    // Any settings that don't work as separate modules\n    // can go in here as configuration.\n    _config: {\n      'classPrefix': '',\n      'enableClasses': true,\n      'enableJSClass': true,\n      'usePrefixes': true\n    },\n\n    // Queue of tests\n    _q: [],\n\n    // Stub these for people who are listening\n    on: function(test, cb) {\n      // I don't really think people should do this, but we can\n      // safe guard it a bit.\n      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.\n      // This is in case people listen to synchronous tests. I would leave it out,\n      // but the code to *disallow* sync tests in the real version of this\n      // function is actually larger than this.\n      var self = this;\n      setTimeout(function() {\n        cb(self[test]);\n      }, 0);\n    },\n\n    addTest: function(name, fn, options) {\n      tests.push({name: name, fn: fn, options: options});\n    },\n\n    addAsyncTest: function(fn) {\n      tests.push({name: null, fn: fn});\n    }\n  };\n\n\n\n  // Fake some of Object.create so we can force non test results to be non \"own\" properties.\n  var Modernizr = function() {};\n  Modernizr.prototype = ModernizrProto;\n\n  // Leak modernizr globally when you `require` it rather than force it here.\n  // Overwrite name so constructor name is nicer :D\n  Modernizr = new Modernizr();\n\n\n\n  /**\n   * is returns a boolean if the typeof an obj is exactly type.\n   *\n   * @access private\n   * @function is\n   * @param {*} obj - A thing we want to check the type of\n   * @param {string} type - A string to compare the typeof against\n   * @returns {boolean}\n   */\n\n  function is(obj, type) {\n    return typeof obj === type;\n  }\n  ;\n\n  /**\n   * Run through all tests and detect their support in the current UA.\n   *\n   * @access private\n   */\n\n  function testRunner() {\n    var featureNames;\n    var feature;\n    var aliasIdx;\n    var result;\n    var nameIdx;\n    var featureName;\n    var featureNameSplit;\n\n    for (var featureIdx in tests) {\n      if (tests.hasOwnProperty(featureIdx)) {\n        featureNames = [];\n        feature = tests[featureIdx];\n        // run the test, throw the return value into the Modernizr,\n        // then based on that boolean, define an appropriate className\n        // and push it into an array of classes we'll join later.\n        //\n        // If there is no name, it's an 'async' test that is run,\n        // but not directly added to the object. That should\n        // be done with a post-run addTest call.\n        if (feature.name) {\n          featureNames.push(feature.name.toLowerCase());\n\n          if (feature.options && feature.options.aliases && feature.options.aliases.length) {\n            // Add all the aliases into the names list\n            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {\n              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());\n            }\n          }\n        }\n\n        // Run the test, or use the raw value if it's not a function\n        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;\n\n\n        // Set each of the names on the Modernizr object\n        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {\n          featureName = featureNames[nameIdx];\n          // Support dot properties as sub tests. We don't do checking to make sure\n          // that the implied parent tests have been added. You must call them in\n          // order (either in the test, or make the parent test a dependency).\n          //\n          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting\n          // hashtag famous last words\n          featureNameSplit = featureName.split('.');\n\n          if (featureNameSplit.length === 1) {\n            Modernizr[featureNameSplit[0]] = result;\n          } else {\n            // cast to a Boolean, if not one already\n            /* jshint -W053 */\n            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {\n              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);\n            }\n\n            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;\n          }\n\n          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));\n        }\n      }\n    }\n  }\n  ;\n\n  /**\n   * docElement is a convenience wrapper to grab the root element of the document\n   *\n   * @access private\n   * @returns {HTMLElement|SVGElement} The root element of the document\n   */\n\n  var docElement = document.documentElement;\n\n\n  /**\n   * A convenience helper to check if the document we are running in is an SVG document\n   *\n   * @access private\n   * @returns {boolean}\n   */\n\n  var isSVG = docElement.nodeName.toLowerCase() === 'svg';\n\n\n  /**\n   * setClasses takes an array of class names and adds them to the root element\n   *\n   * @access private\n   * @function setClasses\n   * @param {string[]} classes - Array of class names\n   */\n\n  // Pass in an and array of class names, e.g.:\n  //  ['no-webp', 'borderradius', ...]\n  function setClasses(classes) {\n    var className = docElement.className;\n    var classPrefix = Modernizr._config.classPrefix || '';\n\n    if (isSVG) {\n      className = className.baseVal;\n    }\n\n    // Change `no-js` to `js` (independently of the `enableClasses` option)\n    // Handle classPrefix on this too\n    if (Modernizr._config.enableJSClass) {\n      var reJS = new RegExp('(^|\\\\s)' + classPrefix + 'no-js(\\\\s|$)');\n      className = className.replace(reJS, '$1' + classPrefix + 'js$2');\n    }\n\n    if (Modernizr._config.enableClasses) {\n      // Add the new classes\n      className += ' ' + classPrefix + classes.join(' ' + classPrefix);\n      isSVG ? docElement.className.baseVal = className : docElement.className = className;\n    }\n\n  }\n\n  ;\n/*!\n{\n  \"name\": \"CSS Supports\",\n  \"property\": \"supports\",\n  \"caniuse\": \"css-featurequeries\",\n  \"tags\": [\"css\"],\n  \"builderAliases\": [\"css_supports\"],\n  \"notes\": [{\n    \"name\": \"W3 Spec\",\n    \"href\": \"http://dev.w3.org/csswg/css3-conditional/#at-supports\"\n  },{\n    \"name\": \"Related Github Issue\",\n    \"href\": \"github.com/Modernizr/Modernizr/issues/648\"\n  },{\n    \"name\": \"W3 Info\",\n    \"href\": \"http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface\"\n  }]\n}\n!*/\n\n  var newSyntax = 'CSS' in window && 'supports' in window.CSS;\n  var oldSyntax = 'supportsCSS' in window;\n  Modernizr.addTest('supports', newSyntax || oldSyntax);\n\n\n  /**\n   * createElement is a convenience wrapper around document.createElement. Since we\n   * use createElement all over the place, this allows for (slightly) smaller code\n   * as well as abstracting away issues with creating elements in contexts other than\n   * HTML documents (e.g. SVG documents).\n   *\n   * @access private\n   * @function createElement\n   * @returns {HTMLElement|SVGElement} An HTML or SVG element\n   */\n\n  function createElement() {\n    if (typeof document.createElement !== 'function') {\n      // This is the case in IE7, where the type of createElement is \"object\".\n      // For this reason, we cannot call apply() as Object is not a Function.\n      return document.createElement(arguments[0]);\n    } else if (isSVG) {\n      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);\n    } else {\n      return document.createElement.apply(document, arguments);\n    }\n  }\n\n  ;\n/*!\n{\n  \"name\": \"placeholder attribute\",\n  \"property\": \"placeholder\",\n  \"tags\": [\"forms\", \"attribute\"],\n  \"builderAliases\": [\"forms_placeholder\"]\n}\n!*/\n/* DOC\nTests for placeholder attribute in inputs and textareas\n*/\n\n  Modernizr.addTest('placeholder', ('placeholder' in createElement('input') && 'placeholder' in createElement('textarea')));\n\n\n  /**\n   * getBody returns the body of a document, or an element that can stand in for\n   * the body if a real body does not exist\n   *\n   * @access private\n   * @function getBody\n   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an\n   * artificially created element that stands in for the body\n   */\n\n  function getBody() {\n    // After page load injecting a fake body doesn't work so check if body exists\n    var body = document.body;\n\n    if (!body) {\n      // Can't use the real body create a fake one.\n      body = createElement(isSVG ? 'svg' : 'body');\n      body.fake = true;\n    }\n\n    return body;\n  }\n\n  ;\n\n  /**\n   * injectElementWithStyles injects an element with style element and some CSS rules\n   *\n   * @access private\n   * @function injectElementWithStyles\n   * @param {string} rule - String representing a css rule\n   * @param {function} callback - A function that is used to test the injected element\n   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected\n   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes\n   * @returns {boolean}\n   */\n\n  function injectElementWithStyles(rule, callback, nodes, testnames) {\n    var mod = 'modernizr';\n    var style;\n    var ret;\n    var node;\n    var docOverflow;\n    var div = createElement('div');\n    var body = getBody();\n\n    if (parseInt(nodes, 10)) {\n      // In order not to give false positives we create a node for each test\n      // This also allows the method to scale for unspecified uses\n      while (nodes--) {\n        node = createElement('div');\n        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);\n        div.appendChild(node);\n      }\n    }\n\n    style = createElement('style');\n    style.type = 'text/css';\n    style.id = 's' + mod;\n\n    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.\n    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270\n    (!body.fake ? div : body).appendChild(style);\n    body.appendChild(div);\n\n    if (style.styleSheet) {\n      style.styleSheet.cssText = rule;\n    } else {\n      style.appendChild(document.createTextNode(rule));\n    }\n    div.id = mod;\n\n    if (body.fake) {\n      //avoid crashing IE8, if background image is used\n      body.style.background = '';\n      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible\n      body.style.overflow = 'hidden';\n      docOverflow = docElement.style.overflow;\n      docElement.style.overflow = 'hidden';\n      docElement.appendChild(body);\n    }\n\n    ret = callback(div, rule);\n    // If this is done after page load we don't want to remove the body so check if body exists\n    if (body.fake) {\n      body.parentNode.removeChild(body);\n      docElement.style.overflow = docOverflow;\n      // Trigger layout so kinetic scrolling isn't disabled in iOS6+\n      docElement.offsetHeight;\n    } else {\n      div.parentNode.removeChild(div);\n    }\n\n    return !!ret;\n\n  }\n\n  ;\n\n  /**\n   * testStyles injects an element with style element and some CSS rules\n   *\n   * @memberof Modernizr\n   * @name Modernizr.testStyles\n   * @optionName Modernizr.testStyles()\n   * @optionProp testStyles\n   * @access public\n   * @function testStyles\n   * @param {string} rule - String representing a css rule\n   * @param {function} callback - A function that is used to test the injected element\n   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected\n   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes\n   * @returns {boolean}\n   * @example\n   *\n   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page\n   * along with (possibly multiple) DOM elements. This lets you check for features\n   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).\n   *\n   * ```js\n   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {\n   *   // elem is the first DOM node in the page (by default #modernizr)\n   *   // rule is the first argument you supplied - the CSS rule in string form\n   *\n   *   addTest('widthworks', elem.style.width === '9px')\n   * });\n   * ```\n   *\n   * If your test requires multiple nodes, you can include a third argument\n   * indicating how many additional div elements to include on the page. The\n   * additional nodes are injected as children of the `elem` that is returned as\n   * the first argument to the callback.\n   *\n   * ```js\n   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {\n   *   document.getElementById('modernizr').style.width === '1px'; // true\n   *   document.getElementById('modernizr2').style.width === '2px'; // true\n   *   elem.firstChild === document.getElementById('modernizr2'); // true\n   * }, 1);\n   * ```\n   *\n   * By default, all of the additional elements have an ID of `modernizr[n]`, where\n   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,\n   * the second additional is `#modernizr3`, etc.).\n   * If you want to have more meaningful IDs for your function, you can provide\n   * them as the fourth argument, as an array of strings\n   *\n   * ```js\n   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {\n   *   elem.firstChild === document.getElementById('foo'); // true\n   *   elem.lastChild === document.getElementById('bar'); // true\n   * }, 2, ['foo', 'bar']);\n   * ```\n   *\n   */\n\n  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;\n\n\n  /**\n   * If the browsers follow the spec, then they would expose vendor-specific style as:\n   *   elem.style.WebkitBorderRadius\n   * instead of something like the following, which would be technically incorrect:\n   *   elem.style.webkitBorderRadius\n\n   * Webkit ghosts their properties in lowercase but Opera & Moz do not.\n   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+\n   *   erik.eae.net/archives/2008/03/10/21.48.10/\n\n   * More here: github.com/Modernizr/Modernizr/issues/issue/21\n   *\n   * @access private\n   * @returns {string} The string representing the vendor-specific style properties\n   */\n\n  var omPrefixes = 'Moz O ms Webkit';\n\n\n  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);\n  ModernizrProto._cssomPrefixes = cssomPrefixes;\n\n\n  /**\n   * List of JavaScript DOM values used for tests\n   *\n   * @memberof Modernizr\n   * @name Modernizr._domPrefixes\n   * @optionName Modernizr._domPrefixes\n   * @optionProp domPrefixes\n   * @access public\n   * @example\n   *\n   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather\n   * than kebab-case properties, all properties are their Capitalized variant\n   *\n   * ```js\n   * Modernizr._domPrefixes === [ \"Moz\", \"O\", \"ms\", \"Webkit\" ];\n   * ```\n   */\n\n  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);\n  ModernizrProto._domPrefixes = domPrefixes;\n\n\n\n  /**\n   * contains checks to see if a string contains another string\n   *\n   * @access private\n   * @function contains\n   * @param {string} str - The string we want to check for substrings\n   * @param {string} substr - The substring we want to search the first string for\n   * @returns {boolean}\n   */\n\n  function contains(str, substr) {\n    return !!~('' + str).indexOf(substr);\n  }\n\n  ;\n\n  /**\n   * cssToDOM takes a kebab-case string and converts it to camelCase\n   * e.g. box-sizing -> boxSizing\n   *\n   * @access private\n   * @function cssToDOM\n   * @param {string} name - String name of kebab-case prop we want to convert\n   * @returns {string} The camelCase version of the supplied name\n   */\n\n  function cssToDOM(name) {\n    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {\n      return m1 + m2.toUpperCase();\n    }).replace(/^-/, '');\n  }\n  ;\n\n  /**\n   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.\n   *\n   * @access private\n   * @function fnBind\n   * @param {function} fn - a function you want to change `this` reference to\n   * @param {object} that - the `this` you want to call the function with\n   * @returns {function} The wrapped version of the supplied function\n   */\n\n  function fnBind(fn, that) {\n    return function() {\n      return fn.apply(that, arguments);\n    };\n  }\n\n  ;\n\n  /**\n   * testDOMProps is a generic DOM property test; if a browser supports\n   *   a certain property, it won't return undefined for it.\n   *\n   * @access private\n   * @function testDOMProps\n   * @param {array.<string>} props - An array of properties to test for\n   * @param {object} obj - An object or Element you want to use to test the parameters again\n   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check\n   */\n  function testDOMProps(props, obj, elem) {\n    var item;\n\n    for (var i in props) {\n      if (props[i] in obj) {\n\n        // return the property name as a string\n        if (elem === false) {\n          return props[i];\n        }\n\n        item = obj[props[i]];\n\n        // let's bind a function\n        if (is(item, 'function')) {\n          // bind to obj unless overriden\n          return fnBind(item, elem || obj);\n        }\n\n        // return the unbound function or obj or value\n        return item;\n      }\n    }\n    return false;\n  }\n\n  ;\n\n  /**\n   * Create our \"modernizr\" element that we do most feature tests on.\n   *\n   * @access private\n   */\n\n  var modElem = {\n    elem: createElement('modernizr')\n  };\n\n  // Clean up this element\n  Modernizr._q.push(function() {\n    delete modElem.elem;\n  });\n\n\n\n  var mStyle = {\n    style: modElem.elem.style\n  };\n\n  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to\n  // the front of the queue.\n  Modernizr._q.unshift(function() {\n    delete mStyle.style;\n  });\n\n\n\n  /**\n   * domToCSS takes a camelCase string and converts it to kebab-case\n   * e.g. boxSizing -> box-sizing\n   *\n   * @access private\n   * @function domToCSS\n   * @param {string} name - String name of camelCase prop we want to convert\n   * @returns {string} The kebab-case version of the supplied name\n   */\n\n  function domToCSS(name) {\n    return name.replace(/([A-Z])/g, function(str, m1) {\n      return '-' + m1.toLowerCase();\n    }).replace(/^ms-/, '-ms-');\n  }\n  ;\n\n  /**\n   * nativeTestProps allows for us to use native feature detection functionality if available.\n   * some prefixed form, or false, in the case of an unsupported rule\n   *\n   * @access private\n   * @function nativeTestProps\n   * @param {array} props - An array of property names\n   * @param {string} value - A string representing the value we want to check via @supports\n   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise\n   */\n\n  // Accepts a list of property names and a single value\n  // Returns `undefined` if native detection not available\n  function nativeTestProps(props, value) {\n    var i = props.length;\n    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface\n    if ('CSS' in window && 'supports' in window.CSS) {\n      // Try every prefixed variant of the property\n      while (i--) {\n        if (window.CSS.supports(domToCSS(props[i]), value)) {\n          return true;\n        }\n      }\n      return false;\n    }\n    // Otherwise fall back to at-rule (for Opera 12.x)\n    else if ('CSSSupportsRule' in window) {\n      // Build a condition string for every prefixed variant\n      var conditionText = [];\n      while (i--) {\n        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');\n      }\n      conditionText = conditionText.join(' or ');\n      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {\n        return getComputedStyle(node, null).position == 'absolute';\n      });\n    }\n    return undefined;\n  }\n  ;\n\n  // testProps is a generic CSS / DOM property test.\n\n  // In testing support for a given CSS property, it's legit to test:\n  //    `elem.style[styleName] !== undefined`\n  // If the property is supported it will return an empty string,\n  // if unsupported it will return undefined.\n\n  // We'll take advantage of this quick test and skip setting a style\n  // on our modernizr element, but instead just testing undefined vs\n  // empty string.\n\n  // Property names can be provided in either camelCase or kebab-case.\n\n  function testProps(props, prefixed, value, skipValueTest) {\n    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;\n\n    // Try native detect first\n    if (!is(value, 'undefined')) {\n      var result = nativeTestProps(props, value);\n      if (!is(result, 'undefined')) {\n        return result;\n      }\n    }\n\n    // Otherwise do it properly\n    var afterInit, i, propsLength, prop, before;\n\n    // If we don't have a style element, that means we're running async or after\n    // the core tests, so we'll need to create our own elements to use\n\n    // inside of an SVG element, in certain browsers, the `style` element is only\n    // defined for valid tags. Therefore, if `modernizr` does not have one, we\n    // fall back to a less used element and hope for the best.\n    // for strict XHTML browsers the hardly used samp element is used\n    var elems = ['modernizr', 'tspan', 'samp'];\n    while (!mStyle.style && elems.length) {\n      afterInit = true;\n      mStyle.modElem = createElement(elems.shift());\n      mStyle.style = mStyle.modElem.style;\n    }\n\n    // Delete the objects if we created them.\n    function cleanElems() {\n      if (afterInit) {\n        delete mStyle.style;\n        delete mStyle.modElem;\n      }\n    }\n\n    propsLength = props.length;\n    for (i = 0; i < propsLength; i++) {\n      prop = props[i];\n      before = mStyle.style[prop];\n\n      if (contains(prop, '-')) {\n        prop = cssToDOM(prop);\n      }\n\n      if (mStyle.style[prop] !== undefined) {\n\n        // If value to test has been passed in, do a set-and-check test.\n        // 0 (integer) is a valid property value, so check that `value` isn't\n        // undefined, rather than just checking it's truthy.\n        if (!skipValueTest && !is(value, 'undefined')) {\n\n          // Needs a try catch block because of old IE. This is slow, but will\n          // be avoided in most cases because `skipValueTest` will be used.\n          try {\n            mStyle.style[prop] = value;\n          } catch (e) {}\n\n          // If the property value has changed, we assume the value used is\n          // supported. If `value` is empty string, it'll fail here (because\n          // it hasn't changed), which matches how browsers have implemented\n          // CSS.supports()\n          if (mStyle.style[prop] != before) {\n            cleanElems();\n            return prefixed == 'pfx' ? prop : true;\n          }\n        }\n        // Otherwise just return true, or the property name if this is a\n        // `prefixed()` call\n        else {\n          cleanElems();\n          return prefixed == 'pfx' ? prop : true;\n        }\n      }\n    }\n    cleanElems();\n    return false;\n  }\n\n  ;\n\n  /**\n   * testPropsAll tests a list of DOM properties we want to check against.\n   * We specify literally ALL possible (known and/or likely) properties on\n   * the element including the non-vendor prefixed one, for forward-\n   * compatibility.\n   *\n   * @access private\n   * @function testPropsAll\n   * @param {string} prop - A string of the property to test for\n   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip\n   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against\n   * @param {string} [value] - A string of a css value\n   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set\n   */\n  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {\n\n    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),\n    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');\n\n    // did they call .prefixed('boxSizing') or are we just testing a prop?\n    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {\n      return testProps(props, prefixed, value, skipValueTest);\n\n      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])\n    } else {\n      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');\n      return testDOMProps(props, prefixed, elem);\n    }\n  }\n\n  // Modernizr.testAllProps() investigates whether a given style property,\n  // or any of its vendor-prefixed variants, is recognized\n  //\n  // Note that the property names must be provided in the camelCase variant.\n  // Modernizr.testAllProps('boxSizing')\n  ModernizrProto.testAllProps = testPropsAll;\n\n\n\n  /**\n   * testAllProps determines whether a given CSS property is supported in the browser\n   *\n   * @memberof Modernizr\n   * @name Modernizr.testAllProps\n   * @optionName Modernizr.testAllProps()\n   * @optionProp testAllProps\n   * @access public\n   * @function testAllProps\n   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)\n   * @param {string} [value] - String of the value to test\n   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection\n   * @example\n   *\n   * testAllProps determines whether a given CSS property, in some prefixed form,\n   * is supported by the browser.\n   *\n   * ```js\n   * testAllProps('boxSizing')  // true\n   * ```\n   *\n   * It can optionally be given a CSS value in string form to test if a property\n   * value is valid\n   *\n   * ```js\n   * testAllProps('display', 'block') // true\n   * testAllProps('display', 'penguin') // false\n   * ```\n   *\n   * A boolean can be passed as a third parameter to skip the value check when\n   * native detection (@supports) isn't available.\n   *\n   * ```js\n   * testAllProps('shapeOutside', 'content-box', true);\n   * ```\n   */\n\n  function testAllProps(prop, value, skipValueTest) {\n    return testPropsAll(prop, undefined, undefined, value, skipValueTest);\n  }\n  ModernizrProto.testAllProps = testAllProps;\n\n/*!\n{\n  \"name\": \"Flexbox\",\n  \"property\": \"flexbox\",\n  \"caniuse\": \"flexbox\",\n  \"tags\": [\"css\"],\n  \"notes\": [{\n    \"name\": \"The _new_ flexbox\",\n    \"href\": \"http://dev.w3.org/csswg/css3-flexbox\"\n  }],\n  \"warnings\": [\n    \"A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect.\"\n  ]\n}\n!*/\n/* DOC\nDetects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.\n*/\n\n  Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));\n\n/*!\n{\n  \"name\": \"CSS Transforms 3D\",\n  \"property\": \"csstransforms3d\",\n  \"caniuse\": \"transforms3d\",\n  \"tags\": [\"css\"],\n  \"warnings\": [\n    \"Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004\"\n  ]\n}\n!*/\n\n  Modernizr.addTest('csstransforms3d', function() {\n    var ret = !!testAllProps('perspective', '1px', true);\n    var usePrefix = Modernizr._config.usePrefixes;\n\n    // Webkit's 3D transforms are passed off to the browser's own graphics renderer.\n    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in\n    //   some conditions. As a result, Webkit typically recognizes the syntax but\n    //   will sometimes throw a false positive, thus we must do a more thorough check:\n    if (ret && (!usePrefix || 'webkitPerspective' in docElement.style)) {\n      var mq;\n      var defaultStyle = '#modernizr{width:0;height:0}';\n      // Use CSS Conditional Rules if available\n      if (Modernizr.supports) {\n        mq = '@supports (perspective: 1px)';\n      } else {\n        // Otherwise, Webkit allows this media query to succeed only if the feature is enabled.\n        // `@media (transform-3d),(-webkit-transform-3d){ ... }`\n        mq = '@media (transform-3d)';\n        if (usePrefix) {\n          mq += ',(-webkit-transform-3d)';\n        }\n      }\n\n      mq += '{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}';\n\n      testStyles(defaultStyle + mq, function(elem) {\n        ret = elem.offsetWidth === 7 && elem.offsetHeight === 18;\n      });\n    }\n\n    return ret;\n  });\n\n\n  // Run each test\n  testRunner();\n\n  // Remove the \"no-js\" class if it exists\n  setClasses(classes);\n\n  delete ModernizrProto.addTest;\n  delete ModernizrProto.addAsyncTest;\n\n  // Run the things that are supposed to run after the tests\n  for (var i = 0; i < Modernizr._q.length; i++) {\n    Modernizr._q[i]();\n  }\n\n  // Leak Modernizr namespace\n  window.Modernizr = Modernizr;\n\n\n;\n\n})(window, document);\n";
      },
  },
  (e) => {
    e.O(
      0,
      [
        "vendors-caches_app_node_modules_shopify_polyfills_base_esnext",
        "vendors-caches_app_node_modules_shopify_marketing-assets_dist_javascripts_index_js-caches_app-5f2387",
        "vendors-caches_app_node_modules_bugsnag_js_browser_notifier_js-caches_app_node_modules_shopif-6e6b58",
        "vendors-caches_app_node_modules_lodash_lodash_js-caches_app_node_modules_script-loader_addScr-05e084",
      ],
      () => {
        return (t = "./app/ui/application/index.js"), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _SK = t;
  },
]);
