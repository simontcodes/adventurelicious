(function () {
  var o, r, a, i, c, s, l, d, e, t, n, u, m, g, y, h, b, p, f, v, w, L, S, q;
  (window.applicationFlag = !0),
    new URLSearchParams(window.location.search).get("t"),
    (e = document.createEvent("Event")).initEvent("first_scroll", !0, !0),
    (q = !1),
    (t = function () {
      window.removeEventListener("scroll", t),
        q || ((q = !0), window.dispatchEvent(e));
    }),
    window.addEventListener("scroll", t),
    perfMetrics.onFirstInputDelay(function () {
      q || ((q = !0), window.dispatchEvent(e));
    }),
    (b = function () {
      if (document.querySelector(".non-critical-css"))
        return document
          .querySelectorAll(".non-critical-css")
          .forEach(function (e) {
            return e.setAttribute("rel", "stylesheet");
          });
    }),
    (h = function () {
      var e;
      return (
        (e = void 0),
        setTimeout(function () {
          if (document.getElementById("script-noncritical"))
            return (
              ((e = document.createElement("script")).src = document
                .getElementById("script-noncritical")
                .getAttribute("data-src")),
              (e.id = "script-noncritical-loaded"),
              document.getElementsByTagName("body")[0].appendChild(e)
            );
        }, 100)
      );
    }),
    (n = function (e, n) {
      var t, o;
      (o = document.createElement("script")),
        (t = document.getElementsByTagName("script")[0]),
        (o.async = 1),
        (o.onload = o.onreadystatechange =
          function (e, t) {
            (t || !o.readyState || /loaded|complete/.test(o.readyState)) &&
              ((o.onload = o.onreadystatechange = null),
              (o = void 0),
              !t && n && setTimeout(n, 0));
          }),
        (o.src = e),
        t.parentNode.insertBefore(o, t);
    }),
    (a = function () {
      if (document.querySelector(".call-to-a .btn, .extrabox .click-to-play"))
        return document
          .querySelectorAll(".call-to-a .btn, .extrabox .click-to-play")
          .forEach(function (e) {
            if (
              e.getAttribute("href") &&
              -1 !== e.getAttribute("href").indexOf("#")
            )
              return (e.onclick = function () {
                return (
                  document
                    .getElementById(e.getAttribute("href").replace("#", ""))
                    .scrollIntoView({ behavior: "auto" }),
                  "#newsletter" === e.getAttribute("href") &&
                    document
                      .getElementById("name-subscribe")
                      .focus({ preventScroll: !0 }),
                  !1
                );
              });
          });
    }),
    (i = function () {
      var t, n, o, r;
      if (
        document.querySelector("body").classList.contains("posts") ||
        document
          .querySelector("body")
          .classList.contains("travel-gear-guide") ||
        document.querySelector("body").classList.contains("home")
      )
        return (
          (r = window.innerWidth),
          (n = window.innerHeight),
          (o = !(t = 250)),
          window.addEventListener("resize", function () {
            var e;
            if (
              !o &&
              (window.innerWidth !== r ||
                120 < Math.abs(window.innerHeight - n))
            )
              return (
                (r = window.innerWidth),
                (n = window.innerHeight),
                (e = 0.01 * window.innerHeight),
                document.documentElement.style.setProperty("--vh", e + "px"),
                (o = !0),
                setTimeout(function () {
                  o = !1;
                }, t)
              );
          })
        );
    }),
    (p = function () {
      if (
        (document.querySelector(".icon-menu") &&
          (document.querySelector(".icon-menu").onclick = function () {
            var e;
            if ((e = document.querySelector(".navbar .nav-wrapper")))
              return (
                e.classList.contains("close")
                  ? (e.classList.remove("close"),
                    document
                      .querySelector(".icon-menu")
                      .classList.add("menu-open"))
                  : (e.classList.add("close"),
                    document
                      .querySelector(".icon-menu")
                      .classList.remove("menu-open")),
                !1
              );
          }),
        document.querySelector(".icon-search-mobile"))
      )
        return (document.querySelector(".icon-search-mobile").onclick =
          function () {
            var e;
            if ((e = document.querySelector(".navbar .search_wrapper")))
              return (
                e.classList.contains("open")
                  ? (e.classList.remove("open"),
                    document
                      .querySelector("body")
                      .classList.remove("search-open"))
                  : (e.classList.add("open"),
                    document.querySelector("body").classList.add("search-open"),
                    document.getElementById("search") &&
                      document.getElementById("search").focus()),
                !1
              );
          });
    }),
    (l = function () {
      return document
        .querySelectorAll(".dropdown-toggle")
        .forEach(function (d) {
          return (d.onclick = function (e) {
            var t, n, o, r, a, i, c, s, l;
            if (
              (e.stopPropagation(),
              (l = document.querySelector(d.getAttribute("data-target"))),
              (r = d.getAttribute("data-target").replace("#", "")),
              l.classList.add("animate"),
              l.classList.contains("simple-menu") &&
                ((l.style.position = "fixed"),
                (s = d.getBoundingClientRect()),
                (o =
                  900 +
                  document
                    .querySelector(".navbar .container")
                    .getBoundingClientRect().left),
                (l.style.top = s.bottom + "px"),
                s.left < 0
                  ? ((l.style.left = "0"), (l.style.right = "auto"))
                  : window.innerWidth < 980
                  ? s.left + 200 > window.innerWidth
                    ? ((l.style.left = "auto"), (l.style.right = "0"))
                    : s.left + 200 <= o
                    ? ((l.style.left = s.left + "px"), (l.style.right = "auto"))
                    : ((l.style.left = "auto"), (l.style.right = "0"))
                  : (s.left + 200 <= o
                      ? ((l.style.left = s.left + "px"),
                        (l.style.right = "auto"))
                      : (l.style.left = s.right - 200 + "px"),
                    (l.style.right = "auto")),
                (c = function () {
                  return (
                    window.removeEventListener("scroll", c),
                    window.removeEventListener("resize", c),
                    l.classList.remove("open")
                  );
                }),
                window.addEventListener("scroll", c),
                window.addEventListener("resize", c)),
              (n = function (e) {
                l.contains(e.target) ||
                  (window.removeEventListener("click", n),
                  l.classList.remove("open"),
                  document.querySelector("body.planning-from-btn") &&
                    "planning" === l.getAttribute("id") &&
                    document
                      .querySelector("body.planning-from-btn")
                      .classList.remove("planning-from-btn"),
                  document
                    .querySelector("body")
                    .classList.remove(r + "_dd_active"));
              }),
              l.classList.contains("open"))
            )
              document
                .querySelector("body." + r + "_dd_active")
                .classList.remove(r + "_dd_active"),
                l.classList.remove("open");
            else {
              if (
                (document.querySelector(".dropdown-toggle.open") &&
                  document
                    .querySelector(".dropdown-toggle.open")
                    .classList.remove("open"),
                document.querySelector(".dropdown-menu.open") &&
                  document
                    .querySelector(".dropdown-menu.open")
                    .classList.remove("open"),
                document.querySelector("body.planning-from-btn") &&
                  document
                    .querySelector("body.planning-from-btn")
                    .classList.remove("planning-from-btn"),
                document.querySelector("body[class$='_dd_active']"))
              )
                for (
                  i =
                    (a = document.querySelector("body[class$='_dd_active']"))
                      .classList.length - 1;
                  0 <= i;

                )
                  (t = a.classList[i]).endsWith("_dd_active") &&
                    a.classList.remove(t),
                    i--;
              l.classList.add("open"),
                document.querySelector("body").classList.add(r + "_dd_active"),
                window.addEventListener("click", n);
            }
            return !1;
          });
        });
    }),
    (f = function () {
      if (document.querySelector("body.photos .explore .searchbox"))
        return (document.querySelector(
          "body.photos .explore .searchbox"
        ).onfocus = function () {
          return document
            .querySelector("body.photos .explore")
            .classList.add("active");
        });
    }),
    (s = function () {
      if (document.querySelector(".click-to-play:not(.not-player)"))
        return document
          .querySelectorAll(".click-to-play:not(.not-player)")
          .forEach(function (i) {
            return (i.onclick = function () {
              var e, t, n, o, r, a;
              return (
                document.querySelector(".mediavine-video__player video") &&
                  document
                    .querySelectorAll(".mediavine-video__player video")
                    .forEach(function (e) {
                      return e.pause();
                    }),
                (r = i.getAttribute("data-url")),
                i.classList.contains("mediavine")
                  ? (a =
                      '<div class="mv-video-target mediavine-vid mv-video-id-' +
                      r +
                      '" data-video-id="' +
                      r +
                      '" data-volume="70" data-ratio="' +
                      i.getAttribute("data-ratio") +
                      '" data-disable-jsonld="1"></div>')
                  : -1 !== r.indexOf("youtube")
                  ? ((a = '<div id="ytplayer"></div>'),
                    (n = function (e) {
                      return e.target.playVideo();
                    }),
                    (window.onYouTubePlayerAPIReady = function () {
                      return new YT.Player("ytplayer", {
                        height: "500",
                        width: "1280",
                        playerVars: {
                          autoplay: 1,
                          modestbranding: 1,
                          widget_referrer: "https://www.bucketlistly.blog",
                        },
                        events: { onReady: n },
                        videoId: r.replace(
                          "https://www.youtube.com/embed/",
                          ""
                        ),
                      });
                    }),
                    ((o = document.createElement("script")).src =
                      "https://www.youtube.com/player_api"),
                    (t =
                      document.getElementsByTagName(
                        "script"
                      )[0]).parentNode.insertBefore(o, t))
                  : (a =
                      '<iframe class="loaded" src="' +
                      r +
                      '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="1280" height="500" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>'),
                document.cookie.split(";").some(function (e) {
                  return 0 <= e.indexOf("dontshowsubscribe=true");
                }) ||
                  ((e =
                    '<div class="subscribe-btns"><a href="http://www.youtube.com/@bucketlistly?sub_confirmation=1" target="_blank" class="btn red btn-primary subscribe"><svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="m27.7 6.9s-3.9-1.3-11.7-1.3-11.7 1.3-11.7 1.3-1.3 3.9-1.3 9.1 1.3 9.1 1.3 9.1 3.9 1.3 11.7 1.3 11.7-1.3 11.7-1.3 1.3-3.9 1.3-9.1-1.3-9.1-1.3-9.1zm-14.3 13.6v-9l7.8 4.5z"/></svg> <span>Subscribe <em class="hidden-sm hidden-xs">to my Channel</em></span></a><a href="#" data-google-interstitial="false" class="btn red btn-no-thanks"> <span>No Thanks!</span></a></div>'),
                  i.parentElement.parentElement.insertAdjacentHTML(
                    "beforeend",
                    e
                  ),
                  document.querySelectorAll("body .subscribe-btns .btn") &&
                    document
                      .querySelectorAll("body .subscribe-btns .btn")
                      .forEach(function (o) {
                        return (o.onclick = function () {
                          var e, t, n;
                          return (
                            (t = "GA4: Subscribe Youtube In Content"),
                            o.classList.contains("btn-no-thanks") &&
                              (t = "GA4: No Thanks Youtube In Content"),
                            gtag("event", t, {
                              event_category: "Videos",
                              event_label: document.title,
                              event_page: window.location.pathname,
                              event_content: document.title,
                            }),
                            !o.classList.contains("btn-no-thanks") ||
                              ((n = new Date()),
                              (e = new Date(
                                n.getFullYear() + 1,
                                n.getMonth(),
                                n.getDate()
                              )),
                              (document.cookie =
                                "dontshowsubscribe=true; path=/; expires=" +
                                e.toGMTString() +
                                ";"),
                              o.parentElement.remove(),
                              !1)
                          );
                        });
                      }),
                  setTimeout(function () {
                    return document
                      .querySelector("body .subscribe-btns")
                      .classList.add("loaded");
                  }, 100)),
                i.parentElement.classList.add("loaded"),
                (i.parentElement.innerHTML = a),
                !1
              );
            });
          });
    }),
    (m = function () {
      if (document.querySelector(".eo:not(.done)"))
        return document.querySelectorAll(".eo").forEach(function (e) {
          return (
            e.classList.add("done"),
            (e.onclick = function () {
              var e;
              return (
                (e = "golb.yltsiltekcub@etep"),
                (location.href = "mailto:" + e.split("").reverse().join("")),
                !1
              );
            })
          );
        });
    }),
    (r = function () {
      var e, r;
      if (
        ((e = [].slice.call(document.querySelectorAll(".lazy-atf"))),
        "IntersectionObserver" in window)
      )
        return (
          (r = new IntersectionObserver(function (e) {
            return e.forEach(function (e) {
              var t, n, o;
              return (
                (t = e.target),
                e.isIntersecting
                  ? "IMG" === t.tagName
                    ? (t.closest(".image-parallax-block")
                        ? ((n = t.closest(
                            ".image-parallax-block"
                          )).classList.add("animated-bg", "loading", "dark"),
                          n.classList.remove("lazy"),
                          (t.onload = function () {
                            return (
                              n.classList.remove(
                                "loading",
                                "animated-bg",
                                "dark"
                              ),
                              n.classList.add("loaded"),
                              (t.onload = null)
                            );
                          }))
                        : ((n = t.parentElement),
                          (t.closest(".img-wrapper") ||
                            t.closest(".thumb-bg")) &&
                            (t.closest(".img-wrapper") &&
                              (n = t.closest(".img-wrapper")),
                            t.closest(".thumb-bg") &&
                              (n = t.closest(".thumb-bg")),
                            n.classList.add("animated-bg", "loading")),
                          (t.onload = function () {
                            n.classList.contains("loading") &&
                              n.classList.remove("loading", "animated-bg"),
                              n.classList.add("loaded"),
                              t.classList.add("loaded"),
                              t.classList.remove("loading", "animated-bg");
                          })),
                      t.classList.add("lazyloaded"),
                      t.classList.remove("lazy"),
                      (o = t.parentNode) &&
                        "PICTURE" === o.tagName &&
                        o.querySelectorAll("source").forEach(function (e) {
                          if (e.hasAttribute("data-srcset"))
                            return e.setAttribute(
                              "srcset",
                              e.getAttribute("data-srcset")
                            );
                        }),
                      t.hasAttribute("data-srcset") &&
                        t.setAttribute("srcset", t.getAttribute("data-srcset")),
                      t.setAttribute("src", t.getAttribute("data-original")))
                    : "VIDEO" === t.tagName
                    ? (t.setAttribute("poster", t.getAttribute("data-poster")),
                      t
                        .querySelector("source")
                        .setAttribute(
                          "src",
                          t
                            .querySelector("source")
                            .getAttribute("data-original")
                        ),
                      t.load())
                    : t.classList.contains("lazy-script")
                    ? (t
                        .querySelector(".lazy-script-id")
                        .setAttribute(
                          "src",
                          t
                            .querySelector(".lazy-script-id")
                            .getAttribute("data-original")
                        ),
                      t.classList.remove("lazy"))
                    : (t.classList.add("lazyloaded"),
                      t.classList.remove("lazy"),
                      (t.style.backgroundImage =
                        "url(" + t.getAttribute("data-original") + ")"))
                  : (t.classList.contains("lazy-script") &&
                      t.classList.contains("mediavine-vid-wrapper") &&
                      (t
                        .querySelector(".mediavine-vid")
                        .classList.remove("loaded"),
                      t.querySelector(".lazy-script-id").remove()),
                    t.classList.remove("lazy-atf")),
                r.unobserve(e.target)
              );
            });
          })),
          e.forEach(function (e) {
            return r.observe(e);
          })
        );
    }),
    (g = function () {
      if (document.querySelector("body.search"))
        return (
          b(),
          n(
            "//cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js",
            function () {
              return n(
                "https://cdn.jsdelivr.net/npm/instantsearch.js@3.0.0",
                function () {
                  var e;
                  return (
                    (e = instantsearch({
                      indexName: "locomotive-production-bucketlistly-blog-en",
                      searchClient: algoliasearch(
                        "9WAEHJ4YGZ",
                        "f7c644294d2cc0f5379f0c4399b939a5"
                      ),
                      routing: {
                        router: instantsearch.routers.history({
                          windowTitle: function (e) {
                            return e.query
                              ? "Search Results for: " +
                                  e.query +
                                  " - BucketListly Blog"
                              : "Search for Travel Guides - BucketListly Blog";
                          },
                        }),
                      },
                    })).addWidget(
                      instantsearch.widgets.searchBox({
                        container: "#instantsearch",
                        placeholder: "Search",
                        autofocus: !0,
                      })
                    ),
                    e.addWidget(
                      instantsearch.widgets.analytics({
                        pushFunction: function (e, t, n) {
                          gtag("event", "GA4: Instant Search", {
                            event_category: "Search",
                            event_label:
                              document.title.replace(
                                " - BucketListly Blog",
                                ""
                              ) +
                              " - from " +
                              n.nbHits +
                              " results",
                            event_page: n.nbHits,
                            event_content: document.title.replace(
                              " - BucketListly Blog",
                              ""
                            ),
                          });
                        },
                      })
                    ),
                    e.addWidget(
                      instantsearch.widgets.infiniteHits({
                        container: "#search-result",
                        templates: {
                          empty:
                            '<div class="no-result-wrapper"><div class="no-result"> <meta name="robots" content="noindex"> <img class="svg-dark-contrast" src="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/icon-no-search.svg" width="200px" height="206.36px"> <h1 class="header-1">Sorry, your search didn\'t match any posts.</h1> </div></div>',
                          item: function (e) {
                            var t, n;
                            return (
                              (n =
                                "<h4>" +
                                instantsearch.highlight({
                                  attribute: "data._label",
                                  highlightedTagName: "em",
                                  hit: e,
                                }) +
                                "</h4>"),
                              (t = ""),
                              "posts" === e.data._content_type &&
                                (n =
                                  n +
                                  "<h5>" +
                                  instantsearch.highlight({
                                    attribute: "data.subtitle",
                                    highlightedTagName: "em",
                                    hit: e,
                                  }) +
                                  "</h5>"),
                              "videos" === e.data._content_type &&
                                ((n =
                                  '<h4><span class="play"></span> ' +
                                  instantsearch.highlight({
                                    attribute: "title",
                                    highlightedTagName: "em",
                                    hit: e,
                                  }) +
                                  "</h4>"),
                                (t = " click-to-play")),
                              "destinations" === e.data._content_type &&
                                (n =
                                  "<h4>" +
                                  instantsearch.highlight({
                                    attribute: "title",
                                    highlightedTagName: "em",
                                    hit: e,
                                  }) +
                                  "</h4>"),
                              '<a class="post-search-result" href="/' +
                                e.data._content_type +
                                "/" +
                                e.data._slug +
                                '"><div class="post-search-thumbnail' +
                                t +
                                '" style="background: var(--bg-third) url(' +
                                e.data.thumbnail +
                                ') no-repeat center center; background-size: cover;"></div><div class="post-search-content">' +
                                n +
                                "<p>" +
                                instantsearch.highlight({
                                  attribute: "data.description",
                                  highlightedTagName: "em",
                                  hit: e,
                                }) +
                                "</p></div></a>"
                            );
                          },
                        },
                      })
                    ),
                    e.start()
                  );
                }
              );
            }
          )
        );
    }),
    (d = function () {
      var e;
      document.querySelector("body.posts article .audio-block audio") &&
        document.querySelector(".call-to-a .btn") &&
        !0 ===
          (!!(e = window.navigator.userAgent).match(/iPad/i) ||
            !!e.match(/iPhone/i)) &&
        (document.querySelector(".call-to-a .btn").onclick = function () {
          document
            .querySelectorAll("body.posts article .audio-block audio")
            .forEach(function (e) {
              e.classList.remove("lazy"),
                e.classList.contains("loaded") ||
                  (e.classList.remove("lazy"),
                  e.classList.add("loaded"),
                  e
                    .querySelector("source")
                    .setAttribute(
                      "src",
                      e.querySelector("source").getAttribute("data-original")
                    ),
                  e.play(),
                  e.pause());
            });
        });
    }),
    (window.dataLayer = window.dataLayer || []),
    (window.gtag = function () {
      dataLayer.push(arguments);
    }),
    (w = function () {
      if (document.querySelector("body .navbar .subscribe"))
        return (document.querySelector("body .navbar .subscribe").onclick =
          function () {
            return (
              gtag("event", "GA4: Subscribe Youtube Topnav", {
                event_category: "Videos",
                event_label: document.title,
                event_page: window.location.pathname,
                event_content: document.title,
              }),
              !0
            );
          });
    }),
    (o = function () {
      var e, t;
      if ((t = document.querySelector(".animated-bg.loading img"))) {
        if (!t.complete)
          return (t.onload = function () {
            if ((e = t.closest(".animated-bg.loading")))
              return (
                e.classList.remove("loading", "animated-bg", "dark"),
                e.classList.add("loaded"),
                (e.onload = null)
              );
          });
        if ((e = t.closest(".animated-bg.loading")))
          return (
            e.classList.remove("loading", "animated-bg", "dark"),
            e.classList.add("loaded")
          );
      }
    }),
    (v = function () {
      if (document.querySelector(".expand-limit"))
        return document.querySelectorAll(".expand-limit").forEach(function (e) {
          return (e.onclick = function () {
            return (
              this.parentElement
                .querySelector(".desc-limit")
                .classList.toggle("active"),
              this.classList.toggle("active"),
              "Less" === this.querySelector(".change-text").innerHTML
                ? (this.querySelector(".change-text").innerHTML = "More")
                : (this.querySelector(".change-text").innerHTML = "Less"),
              !1
            );
          });
        });
    }),
    (c = function () {
      if (
        document.querySelector("body.posts") &&
        document.documentElement.style.getPropertyValue("--vh") !==
          0.01 * window.innerHeight + "px"
      )
        return document.documentElement.style.setProperty(
          "--vh",
          0.01 * window.innerHeight + "px"
        );
    }),
    (S = function () {
      var e;
      if (
        (document.querySelector(".destinations-tags a") &&
          document
            .querySelectorAll(".destinations-tags a")
            .forEach(function (t) {
              return (t.onclick = function () {
                var e;
                return (
                  (e = ""),
                  t.closest("#destination") && (e = " Dropdown"),
                  gtag(
                    "event",
                    "GA4: Destination" + e + " Highlight Tag Clicked",
                    {
                      event_category: "General",
                      event_label: document.title,
                      event_page: window.location.pathname,
                      event_content: document.title,
                    }
                  )
                );
              });
            }),
        document.querySelector(".nav-right .btn.presets"))
      )
        return ((e = document.querySelector(
          ".nav-right .btn.presets"
        )).onclick = function () {
          return (
            gtag("event", "GA4: Subscribe New Top Right Button Clicked", {
              event_category: "General",
              event_label: document.title,
              event_page: window.location.pathname,
              event_content: document.title,
            }),
            document
              .getElementById(e.getAttribute("href").replace("#", ""))
              .scrollIntoView({ behavior: "auto" }),
            "#newsletter" === e.getAttribute("href") &&
              document
                .getElementById("name-subscribe")
                .focus({ preventScroll: !0 }),
            !1
          );
        });
    }),
    (y = function () {
      if (document.querySelector(".critical-css"))
        return document.querySelectorAll(".critical-css").forEach(function (e) {
          return e.setAttribute("rel", "stylesheet");
        });
    }),
    (L = function () {
      if (!0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent))
        return document.querySelector("body").classList.add("is-safari");
    }),
    (u = function () {
      var t, e, n;
      if (
        (r(),
        a(),
        p(),
        l(),
        (n = [m, c, y, o, f, s, i, d, w, v, S, L]),
        (t = function (e) {
          for (; 0 < e.timeRemaining() && 0 < n.length; ) n.shift()();
          0 < n.length && requestIdleCallback(t);
        }),
        "requestIdleCallback" in window)
      )
        return requestIdleCallback(t);
      for (e = []; n.length; ) e.push(setTimeout(n.shift(), 1));
      return e;
    }),
    g(),
    u(),
    -1 !== location.href.indexOf("#")
      ? h()
      : window.addEventListener("first_scroll", h, !1);
}).call(this);
