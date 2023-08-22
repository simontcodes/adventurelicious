function initBootstrapValidation() {
  function e(w) {
    function n(e) {
      switch (w) {
        case "subscribe":
          var c = escapeHtml($(".subscribeForm input#name-subscribe").val()),
            u = escapeHtml($(".subscribeForm input#email-subscribe").val()),
            t = escapeHtml($(".subscribeForm input#subscribed").val());
          0 <= (m = c).indexOf(" ") &&
            (m = c.split(" ").slice(0, -1).join(" ")),
            $.ajax({
              url: e.attr("action"),
              type: "POST",
              data: $.extend({}, e.serializeObject(), {
                entry: { name: c, email: u, subscribed: t, token: k() },
              }),
              cache: !1,
              success: function () {
                var e = new Date();
                grecaptcha.ready(function () {
                  var e = "6Lc88ywlAAAAANCLq87hJbKPjR9_8wG8XcrPxN7z";
                  grecaptcha
                    .execute(e, { action: "form_submit" })
                    .then(function (e) {
                      $('input[name="g-recaptcha-response"]').attr("value", e);
                    });
                });
                var t = new Date(
                  e.getFullYear() + 1,
                  e.getMonth(),
                  e.getDate()
                );
                $.get(
                  "/ajax/subscribers/onboard?email=" + encodeURIComponent(u)
                ),
                  (document.cookie =
                    "hide_newsletter_popup=true; path=/; expires=" +
                    t.toGMTString() +
                    ";"),
                  gtag("event", "GA4: Subscribe", {
                    event_category: "Newsletter",
                    event_label: document.title,
                  }),
                  $(".subscribeForm #success-subscribe").html(
                    "<div class='alert alert-success'><button type='button' class='close' onclick='this.parentNode.remove();return false;' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Thank you for subscribing! I will notify you directly when there is a new article on the blog. Stay tuned!</strong></div>"
                  ),
                  $(".subscribeForm").trigger("reset");
              },
              error: function (e) {
                if (
                  ($(".subscribeForm #success-subscribe").html(
                    "<div class='alert alert-danger'><button type='button' class='close' onclick='this.parentNode.remove();return false;' data-dismiss='alert' aria-hidden='true'>&times;</button></div>"
                  ),
                  (error_messages = []),
                  "500" == e.status)
                )
                  error_messages.push(
                    "Something went wrong. Please try again later."
                  );
                else
                  for (var t in ((errors = $.parseJSON(e.responseText).errors),
                  errors))
                    if (errors.hasOwnProperty(t)) {
                      var n = errors[t];
                      "recaptcha_invalid" == t && "true" == n
                        ? error_messages.push(
                            "Invalid Recaptcha. Please try again."
                          )
                        : error_messages.push(t + " " + n);
                    }
                for (var o = 0; o < error_messages.length; o++)
                  (a = error_messages[o]),
                    ("email must be unique" != a &&
                      "email is already taken" != a) ||
                      (a =
                        "Oop! It seems you are already subscribed to BucketListly Blog newsletter."),
                    $(
                      ".subscribeForm #success-subscribe > .alert-danger"
                    ).append("<strong>" + a + "</strong>");
                $(".subscribeForm").trigger("reset");
              },
              beforeSend: function () {
                e.find(":submit").attr("disabled", "disabled"),
                  e.find(":submit").html("Subscribing.."),
                  e
                    .find(":submit")
                    .prepend(
                      '<span role="alert" aria-busy="true" id="loading-spinner" class="spinner" role="spinner"><strong class="spinner-icon"></strong></span>'
                    );
              },
              complete: function () {
                e.find(":submit").removeAttr("disabled"),
                  e.find(":submit").html("Subscribe");
              },
            });
          break;
        case "contact":
          (c = escapeHtml($("input#name").val())),
            (u = escapeHtml($("input#email").val()));
          var n = escapeHtml($("textarea#message").val());
          if (
            (0 <= (m = c).indexOf(" ") &&
              (m = c.split(" ").slice(0, -1).join(" ")),
            -1 != n.indexOf("guest") &&
              ((result = confirm(
                "We do not accept guest post during this time and we will ignore the message unless you know us personally. \n\nAre you sure you want to send this message? "
              )),
              !result))
          )
            return !1;
          $.ajax({
            url: e.attr("action"),
            type: "POST",
            data: $.extend({}, e.serializeObject(), {
              entry: { name: c, email: u, message: n },
            }),
            cache: !1,
            success: function () {
              $("#success").html(
                "<div class='alert alert-success'><button type='button' class='close' onclick='this.parentNode.remove();return false;' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Your message has been sent.</strong></div>"
              ),
                $("#contactForm").trigger("reset"),
                grecaptcha.ready(function () {
                  var e = "6Lc88ywlAAAAANCLq87hJbKPjR9_8wG8XcrPxN7z";
                  grecaptcha
                    .execute(e, { action: "form_submit" })
                    .then(function (e) {
                      $('input[name="g-recaptcha-response"]').attr("value", e);
                    });
                });
            },
            error: function () {
              $("#success").html(
                "<div class='alert alert-danger'><button type='button' class='close' onclick='this.parentNode.remove();return false;' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Sorry " +
                  m +
                  ", it seems that my mail server is not responding. Please try again later or you can email directly!</strong></div>"
              ),
                $("#contactForm").trigger("reset");
            },
            beforeSend: function () {
              e.find(":submit").attr("disabled", "disabled"),
                e.find(":submit").html("Sending.."),
                e
                  .find(":submit")
                  .prepend(
                    '<span role="alert" aria-busy="true" id="loading-spinner" class="spinner" role="spinner"><strong class="spinner-icon"></strong></span>'
                  );
            },
            complete: function () {
              e.find(":submit").removeAttr("disabled"),
                e.find(":submit").html("Send");
            },
          });
          break;
        case "comments":
          x = "#mainCommentForm input, #mainCommentForm textarea";
          var o =
              /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]+(\/\S*)?/g,
            i = $(
              "<div>" + $("#mainCommentForm textarea#body").val() + "</div>"
            ).text(),
            r =
              ((c = escapeHtml($("#mainCommentForm input#name").val())),
              (u = escapeHtml($("#mainCommentForm input#email").val())),
              C(u)),
            d = escapeHtml($("#mainCommentForm input#url").val()),
            p = $("#mainCommentForm input#remember_me")[0].checked,
            s = escapeHtml($("#mainCommentForm input#parent_comment").val()),
            l = !1;
          if (
            "Pete Rojwongsuriya" != c &&
            "pete@bucketlistly.blog" != u &&
            -1 == d.indexOf("https://www.bucketlistly.blog")
          ) {
            i = i.replace(o, "[link redacted]");
            var f = !1;
            if (-1 != i.indexOf("[link redacted]")) {
              if (
                ((result = confirm(
                  "Links are not allowed in the comments so it will be redacted. Are you sure you want to submit this comment without the link?"
                )),
                !result)
              )
                return !1;
              f = !0;
            }
            (blacklist_words = [
              "ashlee\u2019s work from home",
              "we use badge layout for apps",
              "openrice",
              "ryan triplett",
              "csm training",
              "gmguru",
              "infotechservice",
              "infortechservice",
              "triplettrj",
              "kenan1@verizon.net",
              "samara trip",
              "qcfixer",
              "qc fixer solutions",
              "qcfixersolutions",
              "lfu.edu",
            ]),
              new RegExp(blacklist_words.join("|")).test(i.toLowerCase()) &&
                (l = f = !0),
              new RegExp(blacklist_words.join("|")).test(d.toLowerCase()) &&
                (l = f = !0),
              new RegExp(blacklist_words.join("|")).test(u.toLowerCase()) &&
                (l = f = !0),
              new RegExp(blacklist_words.join("|")).test(c.toLowerCase()) &&
                (l = f = !0);
          }
          var h = i;
          0 < d.length && (f = !0),
            -1 != i.indexOf("@") && (f = !0),
            "Pete Rojwongsuriya" == c &&
              "pete@bucketlistly.blog" == u &&
              -1 != d.indexOf("https://www.bucketlistly.blog") &&
              (f = !1);
          var m,
            g = "",
            v = "",
            y = "";
          if (
            (0 < $("#mainCommentForm input#post").length &&
              ((g = $("#mainCommentForm input#post").val()),
              (y = $.extend({}, e.serializeObject(), {
                entry: {
                  name: c,
                  email: u,
                  email_md5: r,
                  url: d,
                  post: g,
                  spam: f,
                  parent_comment: s,
                  body: h,
                },
              })),
              "&post=" + g),
            0 < $("#mainCommentForm input#video").length &&
              ((v = $("#mainCommentForm input#video").val()),
              (y = $.extend({}, e.serializeObject(), {
                entry: {
                  name: c,
                  email: u,
                  email_md5: r,
                  url: d,
                  video: v,
                  spam: f,
                  parent_comment: s,
                  body: h,
                },
              })),
              "&video=" + v),
            0 <= (m = c).indexOf(" ") &&
              (m = c.split(" ").slice(0, -1).join(" ")),
            0 != l)
          ) {
            clearReply();
            var b =
              '<div class="comment" itemprop="comment" itemscope itemtype="https://schema.org/Comment">' +
              '<p class="alert-warning">Your comment is under moderation so it may not appear immediately.</p>' +
              "<hr></div>";
            return $(".parent-comment-roll").append(b), !1;
          }
          $.ajax({
            url: e.attr("action"),
            type: "POST",
            data: y,
            cache: !1,
            success: function (e) {
              if (
                (grecaptcha.ready(function () {
                  var e = "6Lc88ywlAAAAANCLq87hJbKPjR9_8wG8XcrPxN7z";
                  grecaptcha
                    .execute(e, { action: "form_submit" })
                    .then(function (e) {
                      $('input[name="g-recaptcha-response"]').attr("value", e);
                    });
                }),
                1 == p)
              ) {
                var t = new Date(),
                  n = new Date(t.getFullYear(), t.getMonth() + 1, t.getDate());
                document.cookie =
                  "remember_me=" +
                  window.btoa(c + "," + u + "," + d) +
                  "; path=/; expires=" +
                  n.toGMTString() +
                  ";";
              } else
                document.cookie =
                  "remember_me= ; expires= Thu, 21 Aug 2014 20:00:00 UTC";
              var o = "",
                i = "",
                a = "";
              "" != e.parent_comment &&
                ((o = "reply"),
                (a =
                  '<blockquote style="white-space:pre-wrap;">' +
                  $("#comment-" + e.parent_comment + " .comment_body").html() +
                  "</blockquote>"),
                (i =
                  ' replying to <a href="#comment-' +
                  e.parent_comment +
                  '">' +
                  $("#comment-" + e.parent_comment + " .commenter").html() +
                  "</a>")),
                clearReply();
              var r = "";
              if (1 == f)
                r =
                  '<p class="alert-warning">Your comment is under moderation so it may not appear immediately.</p>';
              else {
                r =
                  '<div class="comment-footer"><a href="#" data-google-interstitial="false" class="comment-reply" onclick="replyFn(\'' +
                  e._slug.en +
                  "', '" +
                  escape(e.name) +
                  "'); $.scrollTo('#mainCommentForm', 300); return false;\">Reply</a></div>";
                var s = e._slug;
                e._slug.en && (s = e._slug.en),
                  $.get("/ajax/comments/sendmail?id=" + s + "&post=" + g);
              }
              var l =
                '<div class="comment ' +
                o +
                '" id="comment-' +
                e._slug.en +
                '" itemprop="comment" itemscope itemtype="https://schema.org/Comment"><a class="avatar" href="' +
                e.url +
                '" rel="external nofollow" target="_blank"><img class="avatar" src="https://www.gravatar.com/avatar/' +
                e.email_md5 +
                '?s=48&d=https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/default-avatar.jpg" /></a><div class="comment_header"><div class="comment-meta"><a class="commenter" href="' +
                e.url +
                '" rel="external nofollow" target="_blank">' +
                e.name +
                "</a>" +
                i +
                '<time class="comment-time" datetime="' +
                e.created_at +
                '" itemprop="datePublished"><a href="#comment-' +
                e.parent_comment +
                '" itemprop="url">Just now</a></time></div></div>' +
                a +
                '<p class="comment_body" itemprop="text" style="white-space:pre-wrap;">' +
                e.body +
                "</p>" +
                r +
                "<hr></div>";
              $(".parent-comment-roll").append(l),
                $("#mainCommentForm #success").html(
                  "<div class='alert alert-success'><button type='button' class='close'  onclick='this.parentNode.remove();return false;' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Your comment has been posted.</strong></div>"
                ),
                $("#mainCommentForm").trigger("reset"),
                autoFillComment(),
                0 < $("#mainCommentForm input#post").length
                  ? $.get("/ajax/comments/posts/update/" + g)
                  : $.get("/ajax/comments/videos/update/" + v);
            },
            error: function () {
              $("#mainCommentForm #success").html(
                "<div class='alert alert-danger'><button type='button' class='close'  onclick='this.parentNode.remove();return false;' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Sorry " +
                  m +
                  ", it seems that there is something wrong with the server. Please try again later!</strong></div>"
              ),
                $("#mainCommentForm #mainCommentForm").trigger("reset");
            },
            beforeSend: function () {
              e.find(":submit").attr("disabled", "disabled"),
                e.find(":submit").html("Commenting.."),
                e
                  .find(":submit")
                  .prepend(
                    '<span role="alert" aria-busy="true" id="loading-spinner" class="spinner" role="spinner"><strong class="spinner-icon"></strong></span>'
                  );
            },
            complete: function () {
              e.find(":submit").removeAttr("disabled"),
                e.find(":submit").html("Comment");
            },
          });
          break;
        default:
          return !1;
      }
    }
    var x = ".subscribeForm input, .subscribeForm textarea";
    switch (w) {
      case "subscribe":
        x = ".subscribeForm input, .subscribeForm textarea";
        break;
      case "comments":
        x = "#mainCommentForm input, #mainCommentForm textarea";
        break;
      case "contact":
        x = "#contactForm input, #contactForm textarea";
    }
    $(x).jqBootstrapValidation({
      preventSubmit: !0,
      submitSuccess: function (e, t) {
        t.preventDefault(), n(e);
      },
      filter: function () {
        return $(this).is(":visible");
      },
    });
  }
  function k() {
    for (var e = "", t = 0; t < 32; )
      e +=
        (~[8, 12, 16, 20].indexOf(t++) ? "-" : "") +
        Math.floor(16 * Math.random())
          .toString(16)
          .toUpperCase();
    return e;
  }
  var C = function (e) {
    function s(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function l(e, t) {
      var n, o, i, a, r;
      return (
        (i = 2147483648 & e),
        (a = 2147483648 & t),
        (r = (1073741823 & e) + (1073741823 & t)),
        (n = 1073741824 & e) & (o = 1073741824 & t)
          ? 2147483648 ^ r ^ i ^ a
          : n | o
          ? 1073741824 & r
            ? 3221225472 ^ r ^ i ^ a
            : 1073741824 ^ r ^ i ^ a
          : r ^ i ^ a
      );
    }
    function c(e, t, n) {
      return (e & t) | (~e & n);
    }
    function u(e, t, n) {
      return (e & n) | (t & ~n);
    }
    function d(e, t, n) {
      return e ^ t ^ n;
    }
    function p(e, t, n) {
      return t ^ (e | ~n);
    }
    function t(e, t, n, o, i, a, r) {
      return l(s((e = l(e, l(l(c(t, n, o), i), r))), a), t);
    }
    function n(e, t, n, o, i, a, r) {
      return l(s((e = l(e, l(l(u(t, n, o), i), r))), a), t);
    }
    function o(e, t, n, o, i, a, r) {
      return l(s((e = l(e, l(l(d(t, n, o), i), r))), a), t);
    }
    function i(e, t, n, o, i, a, r) {
      return l(s((e = l(e, l(l(p(t, n, o), i), r))), a), t);
    }
    function a(e) {
      for (
        var t,
          n = e.length,
          o = n + 8,
          i = 16 * ((o - (o % 64)) / 64 + 1),
          a = Array(i - 1),
          r = 0,
          s = 0;
        s < n;

      )
        (r = (s % 4) * 8),
          (a[(t = (s - (s % 4)) / 4)] = a[t] | (e.charCodeAt(s) << r)),
          s++;
      return (
        (r = (s % 4) * 8),
        (a[(t = (s - (s % 4)) / 4)] = a[t] | (128 << r)),
        (a[i - 2] = n << 3),
        (a[i - 1] = n >>> 29),
        a
      );
    }
    function r(e) {
      var t,
        n = "",
        o = "";
      for (t = 0; t <= 3; t++)
        n += (o = "0" + ((e >>> (8 * t)) & 255).toString(16)).substr(
          o.length - 2,
          2
        );
      return n;
    }
    function f(e) {
      e = e.replace(/rn/g, "n");
      for (var t = "", n = 0; n < e.length; n++) {
        var o = e.charCodeAt(n);
        o < 128
          ? (t += String.fromCharCode(o))
          : (127 < o && o < 2048
              ? (t += String.fromCharCode((o >> 6) | 192))
              : ((t += String.fromCharCode((o >> 12) | 224)),
                (t += String.fromCharCode(((o >> 6) & 63) | 128))),
            (t += String.fromCharCode((63 & o) | 128)));
      }
      return t;
    }
    var h,
      m,
      g,
      v,
      y,
      b,
      w,
      x,
      k,
      $ = Array(),
      C = 7,
      _ = 12,
      T = 17,
      S = 22,
      A = 5,
      E = 9,
      j = 14,
      L = 20,
      q = 4,
      N = 11,
      D = 16,
      I = 23,
      P = 6,
      F = 10,
      O = 15,
      M = 21;
    for (
      $ = a((e = f(e))),
        b = 1732584193,
        w = 4023233417,
        x = 2562383102,
        k = 271733878,
        h = 0;
      h < $.length;
      h += 16
    )
      (w = i(
        (w = i(
          (w = i(
            (w = i(
              (w = o(
                (w = o(
                  (w = o(
                    (w = o(
                      (w = n(
                        (w = n(
                          (w = n(
                            (w = n(
                              (w = t(
                                (w = t(
                                  (w = t(
                                    (w = t(
                                      (g = w),
                                      (x = t(
                                        (v = x),
                                        (k = t(
                                          (y = k),
                                          (b = t(
                                            (m = b),
                                            w,
                                            x,
                                            k,
                                            $[h + 0],
                                            C,
                                            3614090360
                                          )),
                                          w,
                                          x,
                                          $[h + 1],
                                          _,
                                          3905402710
                                        )),
                                        b,
                                        w,
                                        $[h + 2],
                                        T,
                                        606105819
                                      )),
                                      k,
                                      b,
                                      $[h + 3],
                                      S,
                                      3250441966
                                    )),
                                    (x = t(
                                      x,
                                      (k = t(
                                        k,
                                        (b = t(
                                          b,
                                          w,
                                          x,
                                          k,
                                          $[h + 4],
                                          C,
                                          4118548399
                                        )),
                                        w,
                                        x,
                                        $[h + 5],
                                        _,
                                        1200080426
                                      )),
                                      b,
                                      w,
                                      $[h + 6],
                                      T,
                                      2821735955
                                    )),
                                    k,
                                    b,
                                    $[h + 7],
                                    S,
                                    4249261313
                                  )),
                                  (x = t(
                                    x,
                                    (k = t(
                                      k,
                                      (b = t(
                                        b,
                                        w,
                                        x,
                                        k,
                                        $[h + 8],
                                        C,
                                        1770035416
                                      )),
                                      w,
                                      x,
                                      $[h + 9],
                                      _,
                                      2336552879
                                    )),
                                    b,
                                    w,
                                    $[h + 10],
                                    T,
                                    4294925233
                                  )),
                                  k,
                                  b,
                                  $[h + 11],
                                  S,
                                  2304563134
                                )),
                                (x = t(
                                  x,
                                  (k = t(
                                    k,
                                    (b = t(
                                      b,
                                      w,
                                      x,
                                      k,
                                      $[h + 12],
                                      C,
                                      1804603682
                                    )),
                                    w,
                                    x,
                                    $[h + 13],
                                    _,
                                    4254626195
                                  )),
                                  b,
                                  w,
                                  $[h + 14],
                                  T,
                                  2792965006
                                )),
                                k,
                                b,
                                $[h + 15],
                                S,
                                1236535329
                              )),
                              (x = n(
                                x,
                                (k = n(
                                  k,
                                  (b = n(b, w, x, k, $[h + 1], A, 4129170786)),
                                  w,
                                  x,
                                  $[h + 6],
                                  E,
                                  3225465664
                                )),
                                b,
                                w,
                                $[h + 11],
                                j,
                                643717713
                              )),
                              k,
                              b,
                              $[h + 0],
                              L,
                              3921069994
                            )),
                            (x = n(
                              x,
                              (k = n(
                                k,
                                (b = n(b, w, x, k, $[h + 5], A, 3593408605)),
                                w,
                                x,
                                $[h + 10],
                                E,
                                38016083
                              )),
                              b,
                              w,
                              $[h + 15],
                              j,
                              3634488961
                            )),
                            k,
                            b,
                            $[h + 4],
                            L,
                            3889429448
                          )),
                          (x = n(
                            x,
                            (k = n(
                              k,
                              (b = n(b, w, x, k, $[h + 9], A, 568446438)),
                              w,
                              x,
                              $[h + 14],
                              E,
                              3275163606
                            )),
                            b,
                            w,
                            $[h + 3],
                            j,
                            4107603335
                          )),
                          k,
                          b,
                          $[h + 8],
                          L,
                          1163531501
                        )),
                        (x = n(
                          x,
                          (k = n(
                            k,
                            (b = n(b, w, x, k, $[h + 13], A, 2850285829)),
                            w,
                            x,
                            $[h + 2],
                            E,
                            4243563512
                          )),
                          b,
                          w,
                          $[h + 7],
                          j,
                          1735328473
                        )),
                        k,
                        b,
                        $[h + 12],
                        L,
                        2368359562
                      )),
                      (x = o(
                        x,
                        (k = o(
                          k,
                          (b = o(b, w, x, k, $[h + 5], q, 4294588738)),
                          w,
                          x,
                          $[h + 8],
                          N,
                          2272392833
                        )),
                        b,
                        w,
                        $[h + 11],
                        D,
                        1839030562
                      )),
                      k,
                      b,
                      $[h + 14],
                      I,
                      4259657740
                    )),
                    (x = o(
                      x,
                      (k = o(
                        k,
                        (b = o(b, w, x, k, $[h + 1], q, 2763975236)),
                        w,
                        x,
                        $[h + 4],
                        N,
                        1272893353
                      )),
                      b,
                      w,
                      $[h + 7],
                      D,
                      4139469664
                    )),
                    k,
                    b,
                    $[h + 10],
                    I,
                    3200236656
                  )),
                  (x = o(
                    x,
                    (k = o(
                      k,
                      (b = o(b, w, x, k, $[h + 13], q, 681279174)),
                      w,
                      x,
                      $[h + 0],
                      N,
                      3936430074
                    )),
                    b,
                    w,
                    $[h + 3],
                    D,
                    3572445317
                  )),
                  k,
                  b,
                  $[h + 6],
                  I,
                  76029189
                )),
                (x = o(
                  x,
                  (k = o(
                    k,
                    (b = o(b, w, x, k, $[h + 9], q, 3654602809)),
                    w,
                    x,
                    $[h + 12],
                    N,
                    3873151461
                  )),
                  b,
                  w,
                  $[h + 15],
                  D,
                  530742520
                )),
                k,
                b,
                $[h + 2],
                I,
                3299628645
              )),
              (x = i(
                x,
                (k = i(
                  k,
                  (b = i(b, w, x, k, $[h + 0], P, 4096336452)),
                  w,
                  x,
                  $[h + 7],
                  F,
                  1126891415
                )),
                b,
                w,
                $[h + 14],
                O,
                2878612391
              )),
              k,
              b,
              $[h + 5],
              M,
              4237533241
            )),
            (x = i(
              x,
              (k = i(
                k,
                (b = i(b, w, x, k, $[h + 12], P, 1700485571)),
                w,
                x,
                $[h + 3],
                F,
                2399980690
              )),
              b,
              w,
              $[h + 10],
              O,
              4293915773
            )),
            k,
            b,
            $[h + 1],
            M,
            2240044497
          )),
          (x = i(
            x,
            (k = i(
              k,
              (b = i(b, w, x, k, $[h + 8], P, 1873313359)),
              w,
              x,
              $[h + 15],
              F,
              4264355552
            )),
            b,
            w,
            $[h + 6],
            O,
            2734768916
          )),
          k,
          b,
          $[h + 13],
          M,
          1309151649
        )),
        (x = i(
          x,
          (k = i(
            k,
            (b = i(b, w, x, k, $[h + 4], P, 4149444226)),
            w,
            x,
            $[h + 11],
            F,
            3174756917
          )),
          b,
          w,
          $[h + 2],
          O,
          718787259
        )),
        k,
        b,
        $[h + 9],
        M,
        3951481745
      )),
        (b = l(b, m)),
        (w = l(w, g)),
        (x = l(x, v)),
        (k = l(k, y));
    return (r(b) + r(w) + r(x) + r(k)).toLowerCase();
  };
  ($.fn.serializeObject = function () {
    var e = {},
      t = this.serializeArray();
    return (
      $.each(t, function () {
        e[this.name]
          ? (e[this.name].push || (e[this.name] = [e[this.name]]),
            e[this.name].push(this.value || ""))
          : (e[this.name] = this.value || "");
      }),
      e
    );
  }),
    $(function () {
      0 < $(".subscribeForm").length && e("subscribe"),
        0 < $("#mainCommentForm").length && e("comments"),
        0 < $("#contactForm").length && e("contact");
    }),
    $("#name").focus(function () {
      $("#success").html("");
    }),
    (function (u) {
      function n(e) {
        return new RegExp("^" + e + "$");
      }
      function a(e, t) {
        for (
          var n = Array.prototype.slice.call(arguments).splice(2),
            o = e.split("."),
            i = o.pop(),
            a = 0;
          a < o.length;
          a++
        )
          t = t[o[a]];
        return t[i].apply(this, n);
      }
      var d = [],
        o = {
          options: {
            prependExistingHelpBlock: !1,
            sniffHtml: !0,
            preventSubmit: !0,
            submitError: !1,
            submitSuccess: !1,
            semanticallyStrict: !1,
            autoAdd: { helpBlocks: !0 },
            filter: function () {
              return !0;
            },
          },
          methods: {
            init: function (e) {
              var c = u.extend(!0, {}, o);
              c.options = u.extend(!0, c.options, e);
              var t = this,
                n = u.uniqueSort(
                  t
                    .map(function () {
                      return u(this).parents("form")[0];
                    })
                    .toArray()
                );
              return (
                u(n).on("submit", function (e) {
                  var t = u(this),
                    o = 0,
                    n = t
                      .find("input,textarea,select")
                      .not("[type=submit],[type=image]")
                      .filter(c.options.filter);
                  n
                    .trigger("submit.validation")
                    .trigger("validationLostFocus.validation"),
                    n.each(function (e, t) {
                      var n = u(t).parents(".form-group").first();
                      n.hasClass("warning") &&
                        (n.removeClass("warning").addClass("error"), o++);
                    }),
                    n.trigger("validationLostFocus.validation"),
                    o
                      ? (c.options.preventSubmit && e.preventDefault(),
                        t.addClass("error"),
                        u.isFunction(c.options.submitError) &&
                          c.options.submitError(
                            t,
                            e,
                            n.jqBootstrapValidation("collectErrors", !0)
                          ))
                      : (t.removeClass("error"),
                        u.isFunction(c.options.submitSuccess) &&
                          c.options.submitSuccess(t, e));
                }),
                this.each(function () {
                  var s = u(this),
                    n = s.parents(".form-group").first(),
                    o = n.find(".help-block").first(),
                    r = s.parents("form").first(),
                    i = [];
                  if (
                    (!o.length &&
                      c.options.autoAdd &&
                      c.options.autoAdd.helpBlocks &&
                      ((o = u('<div class="help-block" />')),
                      n.find(".controls").append(o),
                      d.push(o[0])),
                    c.options.sniffHtml)
                  ) {
                    var e = "";
                    (s.attr("required") === undefined &&
                      s.attr("aria-required") === undefined) ||
                      ((e = c.builtInValidators.required.message),
                      s.data("validationRequiredMessage") &&
                        (e = s.data("validationRequiredMessage")),
                      s.data("validationRequiredMessage", e)),
                      s.attr("type") !== undefined &&
                        "email" === s.attr("type").toLowerCase() &&
                        ((e =
                          "Not a valid email address<!-- data-validator-validemail-message to override -->"),
                        s.data("validationreMessage")
                          ? (e = s.data("validationValidemailMessage"))
                          : s.data("validationEmailMessage") &&
                            (e = s.data("validationEmailMessage")),
                        s.data("validationValidemailMessage", e));
                  }
                  s.data("validation") !== undefined &&
                    (i = s.data("validation").split(",")),
                    u.each(s.data(), function (e) {
                      var t = e.replace(/([A-Z])/g, ",$1").split(",");
                      "validation" === t[0] && t[1] && i.push(t[1]);
                    });
                  for (
                    var t = i, a = [];
                    u.each(i, function (e, t) {
                      i[e] = p(t);
                    }),
                      (i = u.uniqueSort(i)),
                      (a = []),
                      u.each(t, function (e, t) {
                        if (s.data("validation" + t + "Shortcut") !== undefined)
                          u.each(
                            s.data("validation" + t + "Shortcut").split(","),
                            function (e, t) {
                              a.push(t);
                            }
                          );
                        else if (c.builtInValidators[t.toLowerCase()]) {
                          var n = c.builtInValidators[t.toLowerCase()];
                          "shortcut" === n.type.toLowerCase() &&
                            u.each(n.shortcut.split(","), function (e, t) {
                              (t = p(t)), a.push(t), i.push(t);
                            });
                        }
                      }),
                      0 < (t = a).length;

                  );
                  var l = {};
                  u.each(i, function (e, n) {
                    var o = s.data("validation" + n + "Message"),
                      t = o !== undefined,
                      i = !1;
                    if (
                      ((o =
                        o ||
                        "'" +
                          n +
                          "' validation failed <!-- Add attribute 'data-validation-" +
                          n.toLowerCase() +
                          "-message' to input to change this message -->"),
                      u.each(c.validatorTypes, function (e, t) {
                        l[e] === undefined && (l[e] = []),
                          i ||
                            s.data("validation" + n + p(t.name)) ===
                              undefined ||
                            (l[e].push(
                              u.extend(
                                !0,
                                { name: p(t.name), message: o },
                                t.init(s, n)
                              )
                            ),
                            (i = !0));
                      }),
                      !i && c.builtInValidators[n.toLowerCase()])
                    ) {
                      var a = u.extend(
                        !0,
                        {},
                        c.builtInValidators[n.toLowerCase()]
                      );
                      t && (a.message = o);
                      var r = a.type.toLowerCase();
                      "shortcut" === r
                        ? (i = !0)
                        : u.each(c.validatorTypes, function (e, t) {
                            l[e] === undefined && (l[e] = []),
                              i ||
                                r !== e.toLowerCase() ||
                                (s.data(
                                  "validation" + n + p(t.name),
                                  a[t.name.toLowerCase()]
                                ),
                                l[r].push(u.extend(a, t.init(s, n))),
                                (i = !0));
                          });
                    }
                    i || u.error("Cannot find validation info for '" + n + "'");
                  }),
                    o.data(
                      "original-contents",
                      o.data("original-contents")
                        ? o.data("original-contents")
                        : o.html()
                    ),
                    o.data(
                      "original-role",
                      o.data("original-role")
                        ? o.data("original-role")
                        : o.attr("role")
                    ),
                    n.data(
                      "original-classes",
                      n.data("original-clases")
                        ? n.data("original-classes")
                        : n.attr("class")
                    ),
                    s.data(
                      "original-aria-invalid",
                      s.data("original-aria-invalid")
                        ? s.data("original-aria-invalid")
                        : s.attr("aria-invalid")
                    ),
                    s.on("validation.validation", function (e, t) {
                      var o = f(s),
                        i = [];
                      return (
                        u.each(l, function (n, e) {
                          (o ||
                            o.length ||
                            (t && t.includeEmpty) ||
                            (c.validatorTypes[n].blockSubmit &&
                              t &&
                              t.submitting)) &&
                            u.each(e, function (e, t) {
                              c.validatorTypes[n].validate(s, o, t) &&
                                i.push(t.message);
                            });
                        }),
                        i
                      );
                    }),
                    s.on("getValidators.validation", function () {
                      return l;
                    }),
                    s.on("submit.validation", function () {
                      return s.triggerHandler("change.validation", {
                        submitting: !0,
                      });
                    }),
                    s.on(
                      [
                        "keyup",
                        "focus",
                        "blur",
                        "click",
                        "keydown",
                        "keypress",
                        "change",
                      ].join(".validation ") + ".validation",
                      function (e, i) {
                        var t = f(s),
                          a = [];
                        n.find("input,textarea,select").each(function (e, t) {
                          var n = a.length;
                          if (
                            (u.each(
                              u(t).triggerHandler("validation.validation", i),
                              function (e, t) {
                                a.push(t);
                              }
                            ),
                            a.length > n)
                          )
                            u(t).attr("aria-invalid", "true");
                          else {
                            var o = s.data("original-aria-invalid");
                            u(t).attr("aria-invalid", o !== undefined && o);
                          }
                        }),
                          r
                            .find("input,select,textarea")
                            .not(s)
                            .not('[name="' + s.attr("name") + '"]')
                            .trigger("validationLostFocus.validation"),
                          (a = u.uniqueSort(a.sort())).length
                            ? (n
                                .removeClass("success error")
                                .addClass("warning"),
                              c.options.semanticallyStrict && 1 === a.length
                                ? o.html(
                                    a[0] +
                                      (c.options.prependExistingHelpBlock
                                        ? o.data("original-contents")
                                        : "")
                                  )
                                : o.html(
                                    '<ul role="alert"><li>' +
                                      a.join("</li><li>") +
                                      "</li></ul>" +
                                      (c.options.prependExistingHelpBlock
                                        ? o.data("original-contents")
                                        : "")
                                  ))
                            : (n.removeClass("warning error success"),
                              0 < t.length && n.addClass("success"),
                              o.html(o.data("original-contents"))),
                          "blur" === e.type && n.removeClass("success");
                      }
                    ),
                    s.on("validationLostFocus.validation", function () {
                      n.removeClass("success");
                    });
                })
              );
            },
            destroy: function () {
              return this.each(function () {
                var e = u(this),
                  t = e.parents(".form-group").first(),
                  n = t.find(".help-block").first();
                e.off(".validation"),
                  n.html(n.data("original-contents")),
                  t.attr("class", t.data("original-classes")),
                  e.attr("aria-invalid", e.data("original-aria-invalid")),
                  n.attr("role", e.data("original-role")),
                  -1 < d.indexOf(n[0]) && n.remove();
              });
            },
            collectErrors: function () {
              var a = {};
              return (
                this.each(function (e, t) {
                  var n = u(t),
                    o = n.attr("name"),
                    i = n.triggerHandler("validation.validation", {
                      includeEmpty: !0,
                    });
                  a[o] = u.extend(!0, i, a[o]);
                }),
                u.each(a, function (e, t) {
                  0 === t.length && delete a[e];
                }),
                a
              );
            },
            hasErrors: function () {
              var n = [];
              return (
                this.each(function (e, t) {
                  n = n.concat(
                    u(t).triggerHandler("getValidators.validation")
                      ? u(t).triggerHandler("validation.validation", {
                          submitting: !0,
                        })
                      : []
                  );
                }),
                0 < n.length
              );
            },
            override: function (e) {
              o = u.extend(!0, o, e);
            },
          },
          validatorTypes: {
            callback: {
              name: "callback",
              init: function (e, t) {
                return {
                  validatorName: t,
                  callback: e.data("validation" + t + "Callback"),
                  lastValue: e.val(),
                  lastValid: !0,
                  lastFinished: !0,
                };
              },
              validate: function (e, t, n) {
                if (n.lastValue === t && n.lastFinished) return !n.lastValid;
                if (!0 === n.lastFinished) {
                  (n.lastValue = t), (n.lastValid = !0), (n.lastFinished = !1);
                  var o = n,
                    i = e;
                  a(n.callback, window, e, t, function (e) {
                    o.lastValue === e.value &&
                      ((o.lastValid = e.valid),
                      e.message && (o.message = e.message),
                      (o.lastFinished = !0),
                      i.data(
                        "validation" + o.validatorName + "Message",
                        o.message
                      ),
                      setTimeout(function () {
                        i.trigger("change.validation");
                      }, 1));
                  });
                }
                return !1;
              },
            },
            ajax: {
              name: "ajax",
              init: function (e, t) {
                return {
                  validatorName: t,
                  url: e.data("validation" + t + "Ajax"),
                  lastValue: e.val(),
                  lastValid: !0,
                  lastFinished: !0,
                };
              },
              validate: function (t, e, n) {
                return "" + n.lastValue == "" + e && !0 === n.lastFinished
                  ? !1 === n.lastValid
                  : (!0 === n.lastFinished &&
                      ((n.lastValue = e),
                      (n.lastValid = !0),
                      (n.lastFinished = !1),
                      u.ajax({
                        url: n.url,
                        data: "value=" + e + "&field=" + t.attr("name"),
                        dataType: "json",
                        success: function (e) {
                          "" + n.lastValue == "" + e.value &&
                            ((n.lastValid = !!e.valid),
                            e.message && (n.message = e.message),
                            (n.lastFinished = !0),
                            t.data(
                              "validation" + n.validatorName + "Message",
                              n.message
                            ),
                            setTimeout(function () {
                              t.trigger("change.validation");
                            }, 1));
                        },
                        failure: function () {
                          (n.lastValid = !0),
                            (n.message = "ajax call failed"),
                            (n.lastFinished = !0),
                            t.data(
                              "validation" + n.validatorName + "Message",
                              n.message
                            ),
                            setTimeout(function () {
                              t.trigger("change.validation");
                            }, 1);
                        },
                      })),
                    !1);
              },
            },
            regex: {
              name: "regex",
              init: function (e, t) {
                return { regex: n(e.data("validation" + t + "Regex")) };
              },
              validate: function (e, t, n) {
                return (
                  (!n.regex.test(t) && !n.negative) ||
                  (n.regex.test(t) && n.negative)
                );
              },
            },
            required: {
              name: "required",
              init: function () {
                return {};
              },
              validate: function (e, t, n) {
                return (
                  !(0 !== t.length || n.negative) ||
                  !!(0 < t.length && n.negative)
                );
              },
              blockSubmit: !0,
            },
          },
          builtInValidators: {
            email: { name: "Email", type: "shortcut", shortcut: "validemail" },
            validemail: {
              name: "Validemail",
              type: "regex",
              regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
              message:
                "Not a valid email address<!-- data-validator-validemail-message to override -->",
            },
            required: {
              name: "Required",
              type: "required",
              message:
                "This is required<!-- data-validator-required-message to override -->",
            },
          },
        },
        p = function (e) {
          return e.toLowerCase().replace(/(^|\s)([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase();
          });
        },
        f = function (e) {
          var t = e.val(),
            n = e.attr("type");
          return (
            "checkbox" === n && (t = e.is(":checked") ? t : ""),
            "radio" === n &&
              (t =
                0 < u('input[name="' + e.attr("name") + '"]:checked').length
                  ? t
                  : ""),
            t
          );
        };
      (u.fn.jqBootstrapValidation = function (e) {
        return o.methods[e]
          ? o.methods[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? (u.error(
              "Method " + e + " does not exist on jQuery.jqBootstrapValidation"
            ),
            null)
          : o.methods.init.apply(this, arguments);
      }),
        (u.jqBootstrapValidation = function (e) {
          u(":input")
            .not("[type=image],[type=submit]")
            .jqBootstrapValidation.apply(this, arguments);
        });
    })(jQuery);
}
function DialogTrigger(e, t) {
  var n = {
    trigger: "timeout",
    target: "",
    timeout: 0,
    percentDown: 50,
    percentUp: 10,
    scrollInterval: 1e3,
  };
  (this.complete = !1),
    (this.callback = e),
    (this.timer = null),
    (this.interval = null),
    (this.options = jQuery.extend(n, t)),
    (this.init = function () {
      if (
        "exitIntent" == this.options.trigger ||
        "exit_intent" == this.options.trigger
      ) {
        var t = this;
        jQuery(document).on("mouseleave", function (e) {
          !t.complete &&
            e.clientY < 0 &&
            (t.callback(),
            (t.complete = !0),
            jQuery(document).off("mouseleave"));
        });
      } else if ("target" == this.options.trigger) {
        if ("" !== this.options.target)
          if (0 == jQuery(this.options.target).length) this.complete = !0;
          else {
            var e = jQuery(this.options.target).offset().top;
            t = this;
            this.interval = setInterval(function () {
              jQuery(window).scrollTop() >= e &&
                (clearInterval(t.interval),
                (t.interval = null),
                t.complete || (t.callback(), (t.complete = !0)));
            }, this.options.scrollInterval);
          }
      } else if ("scrollDown" == this.options.trigger) {
        var n = jQuery(window).scrollTop(),
          o = jQuery(document).height();
        t = this;
        0 < o &&
          (this.interval = setInterval(function () {
            var e = jQuery(window).scrollTop() - n;
            e < 0 && ((e = 0), (n = jQuery(window).scrollTop())),
              parseFloat(e) / parseFloat(o) >
                parseFloat(t.options.percentDown) / 100 &&
                (clearInterval(t.interval),
                (t.interval = null),
                t.complete || (t.callback(), (t.complete = !0)));
          }, this.options.scrollInterval));
      } else if ("scrollUp" == this.options.trigger) {
        (n = jQuery(window).scrollTop()),
          (o = jQuery(document).height()),
          (t = this);
        0 < o &&
          (this.interval = setInterval(function () {
            var e = n - jQuery(window).scrollTop();
            e < 0 && ((e = 0), (n = jQuery(window).scrollTop())),
              parseFloat(e) / parseFloat(o) >
                parseFloat(t.options.percentUp) / 100 &&
                (clearInterval(t.interval),
                (t.interval = null),
                t.complete || (t.callback(), (t.complete = !0)));
          }, this.options.scrollInterval));
      } else
        "timeout" == this.options.trigger &&
          (this.timer = setTimeout(this.callback, this.options.timeout));
    }),
    (this.cancel = function () {
      null !== this.timer && (clearTimeout(this.timer), (this.timer = null)),
        null !== this.interval &&
          (clearInterval(this.interval), (this.interval = null)),
        (this.complete = !0);
    }),
    this.init();
}
function drags(r, s, l) {
  r.on("mousedown.ba-events touchstart.ba-events", function (e) {
    r.addClass("ba-draggable"), s.addClass("ba-resizable");
    var t = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX,
      n = r.outerWidth(),
      o = r.offset().left + n - t,
      i = l.offset().left,
      a = l.outerWidth();
    (minLeft = i + 10),
      (maxLeft = i + a - n - 10),
      r
        .parents()
        .on("mousemove.ba-events touchmove.ba-events", function (e) {
          var t = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
          (leftValue = t + o - n),
            leftValue < minLeft
              ? (leftValue = minLeft)
              : leftValue > maxLeft && (leftValue = maxLeft),
            (widthValue = (100 * (leftValue + n / 2 - i)) / a + "%"),
            $(".ba-draggable").css("left", widthValue),
            $(".ba-resizable").css("width", widthValue);
        })
        .on(
          "mouseup.ba-events touchend.ba-events touchcancel.ba-events",
          function () {
            r.removeClass("ba-draggable"),
              s.removeClass("ba-resizable"),
              $(this).off(".ba-events");
          }
        ),
      e.preventDefault();
  });
}
function initAutocompleteSearch() {
  var e = algoliasearch(
      "9WAEHJ4YGZ",
      "f7c644294d2cc0f5379f0c4399b939a5"
    ).initIndex("locomotive-production-bucketlistly-blog-en"),
    t = !1;
  "search" == document.activeElement.id && (t = !0),
    autocomplete("#search", { hint: !1, autoselect: !0 }, [
      {
        source: autocomplete.sources.hits(e, { hitsPerPage: 10 }),
        displayKey: "title",
        templates: {
          suggestion: function o(e) {
            var t = "<h4>" + e._highlightResult.data._label.value + "</h4>",
              n = "";
            return (
              "posts" == e.data._content_type &&
                (t =
                  t +
                  "<h5>" +
                  e._highlightResult.data.subtitle.value +
                  "</h5>"),
              "videos" == e.data._content_type &&
                ((t = "<h4>" + e._highlightResult.title.value + "</h4>"),
                (n = " click-to-play")),
              "destinations" == e.data._content_type &&
                (t = "<h4>" + e._highlightResult.title.value + "</h4>"),
              '<a class="post-search-result" href="/' +
                e.data._content_type +
                "/" +
                e.data._slug +
                '"><div class="post-search-thumbnail' +
                n +
                '" style="background: var(--bg-third) url(' +
                e.data.thumbnail +
                ') no-repeat center center; background-size: cover;"></div><div class="post-search-content">' +
                t +
                "<p>" +
                e._highlightResult.data.description.value +
                "</p></div></a>"
            );
          },
        },
      },
    ])
      .on("autocomplete:selected", function (e, t) {
        (query = $("#search").next().text()),
          gtag("event", "GA4: Autocomplete Search", {
            event_category: "Search",
            event_label:
              'Query:"' +
              query +
              '" -> /' +
              t.data._content_type +
              "/" +
              t.data._slug,
            event_page: "/" + t.data._content_type + "/" + t.data._slug,
            event_content: query.substring(0, 150),
          }),
          (window.location.href =
            "/" + t.data._content_type + "/" + t.data._slug);
      })
      .on("autocomplete:updated", function () {
        $(".aa-dropdown-menu").scrollTo(0);
      }),
    1 == t && document.getElementById("search").focus();
}
function backgroundTask(e) {
  for (; 0 < e.timeRemaining() && 0 < task.length; ) task.shift()();
  0 < task.length && requestIdleCallback(backgroundTask);
}
if (
  ((function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (ie, e) {
    "use strict";
    function m(e, t, n) {
      var o,
        i,
        a = (n = n || de).createElement("script");
      if (((a.text = e), t))
        for (o in pe)
          (i = t[o] || (t.getAttribute && t.getAttribute(o))) &&
            a.setAttribute(o, i);
      n.head.appendChild(a).parentNode.removeChild(a);
    }
    function g(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? J[Z.call(e)] || "object"
        : typeof e;
    }
    function s(e) {
      var t = !!e && "length" in e && e.length,
        n = g(e);
      return (
        !ne(e) &&
        !oe(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    function ae(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function t(e, t) {
      return t
        ? "\0" === e
          ? "\ufffd"
          : e.slice(0, -1) +
            "\\" +
            e.charCodeAt(e.length - 1).toString(16) +
            " "
        : "\\" + e;
    }
    function n(e, n, o) {
      return ne(n)
        ? me.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== o;
          })
        : n.nodeType
        ? me.grep(e, function (e) {
            return (e === n) !== o;
          })
        : "string" != typeof n
        ? me.grep(e, function (e) {
            return -1 < le.call(n, e) !== o;
          })
        : me.filter(n, e, o);
    }
    function o(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function u(e) {
      return e;
    }
    function d(e) {
      throw e;
    }
    function l(e, t, n, o) {
      var i;
      try {
        e && ne((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && ne((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(o));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    function i() {
      de.removeEventListener("DOMContentLoaded", i),
        ie.removeEventListener("load", i),
        me.ready();
    }
    function a(e, t) {
      return t.toUpperCase();
    }
    function p(e) {
      return e.replace(Pe, "ms-").replace(Fe, a);
    }
    function r() {
      this.expando = me.expando + r.uid++;
    }
    function c(e, t, n) {
      var o, i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((o = "data-" + t.replace(ze, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(o)))
        ) {
          try {
            n =
              "true" === (i = n) ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : i === +i + ""
                  ? +i
                  : He.test(i)
                  ? JSON.parse(i)
                  : i));
          } catch (e) {}
          Re.set(e, t, n);
        } else n = void 0;
      return n;
    }
    function f(e, t, n, o) {
      var i,
        a,
        r = 20,
        s = o
          ? function () {
              return o.cur();
            }
          : function () {
              return me.css(e, t, "");
            },
        l = s(),
        c = (n && n[3]) || (me.cssNumber[t] ? "" : "px"),
        u =
          e.nodeType &&
          (me.cssNumber[t] || ("px" !== c && +l)) &&
          We.exec(me.css(e, t));
      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; r--; )
          me.style(e, t, u + c),
            (1 - a) * (1 - (a = s() / l || 0.5)) <= 0 && (r = 0),
            (u /= a);
        (u *= 2), me.style(e, t, u + c), (n = n || []);
      }
      return (
        n &&
          ((u = +u || +l || 0),
          (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
          o && ((o.unit = c), (o.start = u), (o.end = i))),
        i
      );
    }
    function v(e, t) {
      for (var n, o, i, a, r, s, l, c = [], u = 0, d = e.length; u < d; u++)
        (o = e[u]).style &&
          ((n = o.style.display),
          t
            ? ("none" === n &&
                ((c[u] = Me.get(o, "display") || null),
                c[u] || (o.style.display = "")),
              "" === o.style.display &&
                Xe(o) &&
                (c[u] =
                  ((l = r = a = void 0),
                  (r = (i = o).ownerDocument),
                  (s = i.nodeName),
                  (l = Qe[s]) ||
                    ((a = r.body.appendChild(r.createElement(s))),
                    (l = me.css(a, "display")),
                    a.parentNode.removeChild(a),
                    "none" === l && (l = "block"),
                    (Qe[s] = l)))))
            : "none" !== n && ((c[u] = "none"), Me.set(o, "display", n)));
      for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
      return e;
    }
    function y(e, t) {
      var n;
      return (
        (n =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && ae(e, t)) ? me.merge([e], n) : n
      );
    }
    function b(e, t) {
      for (var n = 0, o = e.length; n < o; n++)
        Me.set(e[n], "globalEval", !t || Me.get(t[n], "globalEval"));
    }
    function w(e, t, n, o, i) {
      for (
        var a,
          r,
          s,
          l,
          c,
          u,
          d = t.createDocumentFragment(),
          p = [],
          f = 0,
          h = e.length;
        f < h;
        f++
      )
        if ((a = e[f]) || 0 === a)
          if ("object" === g(a)) me.merge(p, a.nodeType ? [a] : a);
          else if (ot.test(a)) {
            for (
              r = r || d.appendChild(t.createElement("div")),
                s = (et.exec(a) || ["", ""])[1].toLowerCase(),
                l = nt[s] || nt._default,
                r.innerHTML = l[1] + me.htmlPrefilter(a) + l[2],
                u = l[0];
              u--;

            )
              r = r.lastChild;
            me.merge(p, r.childNodes), ((r = d.firstChild).textContent = "");
          } else p.push(t.createTextNode(a));
      for (d.textContent = "", f = 0; (a = p[f++]); )
        if (o && -1 < me.inArray(a, o)) i && i.push(a);
        else if (
          ((c = Ue(a)), (r = y(d.appendChild(a), "script")), c && b(r), n)
        )
          for (u = 0; (a = r[u++]); ) tt.test(a.type || "") && n.push(a);
      return d;
    }
    function h() {
      return !0;
    }
    function x() {
      return !1;
    }
    function k(e, t, n, o, i, a) {
      var r, s;
      if ("object" == typeof t) {
        for (s in ("string" != typeof n && ((o = o || n), (n = void 0)), t))
          k(e, s, n, o, t[s], a);
        return e;
      }
      if (
        (null == o && null == i
          ? ((i = n), (o = n = void 0))
          : null == i &&
            ("string" == typeof n
              ? ((i = o), (o = void 0))
              : ((i = o), (o = n), (n = void 0))),
        !1 === i)
      )
        i = x;
      else if (!i) return e;
      return (
        1 === a &&
          ((r = i),
          ((i = function (e) {
            return me().off(e), r.apply(this, arguments);
          }).guid = r.guid || (r.guid = me.guid++))),
        e.each(function () {
          me.event.add(this, t, i, o, n);
        })
      );
    }
    function $(e, o, t) {
      t
        ? (Me.set(e, o, !1),
          me.event.add(e, o, {
            namespace: !1,
            handler: function (e) {
              var t,
                n = Me.get(this, o);
              if (1 & e.isTrigger && this[o]) {
                if (n)
                  (me.event.special[o] || {}).delegateType &&
                    e.stopPropagation();
                else if (
                  ((n = se.call(arguments)),
                  Me.set(this, o, n),
                  this[o](),
                  (t = Me.get(this, o)),
                  Me.set(this, o, !1),
                  n !== t)
                )
                  return e.stopImmediatePropagation(), e.preventDefault(), t;
              } else
                n &&
                  (Me.set(this, o, me.event.trigger(n[0], n.slice(1), this)),
                  e.stopPropagation(),
                  (e.isImmediatePropagationStopped = h));
            },
          }))
        : void 0 === Me.get(e, o) && me.event.add(e, o, h);
    }
    function C(e, t) {
      return (
        (ae(e, "table") &&
          ae(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          me(e).children("tbody")[0]) ||
        e
      );
    }
    function _(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function T(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function S(e, t) {
      var n, o, i, a, r, s;
      if (1 === t.nodeType) {
        if (Me.hasData(e) && (s = Me.get(e).events))
          for (i in (Me.remove(t, "handle events"), s))
            for (n = 0, o = s[i].length; n < o; n++)
              me.event.add(t, i, s[i][n]);
        Re.hasData(e) &&
          ((a = Re.access(e)), (r = me.extend({}, a)), Re.set(t, r));
      }
    }
    function A(n, o, i, a) {
      o = Q(o);
      var e,
        t,
        r,
        s,
        l,
        c,
        u = 0,
        d = n.length,
        p = d - 1,
        f = o[0],
        h = ne(f);
      if (h || (1 < d && "string" == typeof f && !ue.checkClone && rt.test(f)))
        return n.each(function (e) {
          var t = n.eq(e);
          h && (o[0] = f.call(this, e, t.html())), A(t, o, i, a);
        });
      if (
        d &&
        ((t = (e = w(o, n[0].ownerDocument, !1, n, a)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || a)
      ) {
        for (s = (r = me.map(y(e, "script"), _)).length; u < d; u++)
          (l = e),
            u !== p &&
              ((l = me.clone(l, !0, !0)), s && me.merge(r, y(l, "script"))),
            i.call(n[u], l, u);
        if (s)
          for (
            c = r[r.length - 1].ownerDocument, me.map(r, T), u = 0;
            u < s;
            u++
          )
            (l = r[u]),
              tt.test(l.type || "") &&
                !Me.access(l, "globalEval") &&
                me.contains(c, l) &&
                (l.src && "module" !== (l.type || "").toLowerCase()
                  ? me._evalUrl &&
                    !l.noModule &&
                    me._evalUrl(
                      l.src,
                      { nonce: l.nonce || l.getAttribute("nonce") },
                      c
                    )
                  : m(l.textContent.replace(st, ""), l, c));
      }
      return n;
    }
    function E(e, t, n) {
      for (var o, i = t ? me.filter(t, e) : e, a = 0; null != (o = i[a]); a++)
        n || 1 !== o.nodeType || me.cleanData(y(o)),
          o.parentNode &&
            (n && Ue(o) && b(y(o, "script")), o.parentNode.removeChild(o));
      return e;
    }
    function j(e, t, n) {
      var o,
        i,
        a,
        r,
        s = ct.test(t),
        l = e.style;
      return (
        (n = n || ut(e)) &&
          ((r = n.getPropertyValue(t) || n[t]),
          s && r && (r = r.replace(we, "$1") || void 0),
          "" !== r || Ue(e) || (r = me.style(e, t)),
          !ue.pixelBoxStyles() &&
            lt.test(r) &&
            pt.test(t) &&
            ((o = l.width),
            (i = l.minWidth),
            (a = l.maxWidth),
            (l.minWidth = l.maxWidth = l.width = r),
            (r = n.width),
            (l.width = o),
            (l.minWidth = i),
            (l.maxWidth = a))),
        void 0 !== r ? r + "" : r
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
    function q(e) {
      return (
        me.cssProps[e] ||
        mt[e] ||
        (e in ht
          ? e
          : (mt[e] =
              (function (e) {
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = ft.length;
                  n--;

                )
                  if ((e = ft[n] + t) in ht) return e;
              })(e) || e))
      );
    }
    function N(e, t, n) {
      var o = We.exec(t);
      return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t;
    }
    function D(e, t, n, o, i, a) {
      var r = "width" === t ? 1 : 0,
        s = 0,
        l = 0,
        c = 0;
      if (n === (o ? "border" : "content")) return 0;
      for (; r < 4; r += 2)
        "margin" === n && (c += me.css(e, n + Ge[r], !0, i)),
          o
            ? ("content" === n && (l -= me.css(e, "padding" + Ge[r], !0, i)),
              "margin" !== n &&
                (l -= me.css(e, "border" + Ge[r] + "Width", !0, i)))
            : ((l += me.css(e, "padding" + Ge[r], !0, i)),
              "padding" !== n
                ? (l += me.css(e, "border" + Ge[r] + "Width", !0, i))
                : (s += me.css(e, "border" + Ge[r] + "Width", !0, i)));
      return (
        !o &&
          0 <= a &&
          (l +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - 0.5
              )
            ) || 0),
        l + c
      );
    }
    function I(e, t, n) {
      var o = ut(e),
        i =
          (!ue.boxSizingReliable() || n) &&
          "border-box" === me.css(e, "boxSizing", !1, o),
        a = i,
        r = j(e, t, o),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (lt.test(r)) {
        if (!n) return r;
        r = "auto";
      }
      return (
        ((!ue.boxSizingReliable() && i) ||
          (!ue.reliableTrDimensions() && ae(e, "tr")) ||
          "auto" === r ||
          (!parseFloat(r) && "inline" === me.css(e, "display", !1, o))) &&
          e.getClientRects().length &&
          ((i = "border-box" === me.css(e, "boxSizing", !1, o)),
          (a = s in e) && (r = e[s])),
        (r = parseFloat(r) || 0) +
          D(e, t, n || (i ? "border" : "content"), a, o, r) +
          "px"
      );
    }
    function P(e, t, n, o, i) {
      return new P.prototype.init(e, t, n, o, i);
    }
    function F() {
      wt &&
        (!1 === de.hidden && ie.requestAnimationFrame
          ? ie.requestAnimationFrame(F)
          : ie.setTimeout(F, me.fx.interval),
        me.fx.tick());
    }
    function O() {
      return (
        ie.setTimeout(function () {
          bt = void 0;
        }),
        (bt = Date.now())
      );
    }
    function M(e, t) {
      var n,
        o = 0,
        i = { height: e };
      for (t = t ? 1 : 0; o < 4; o += 2 - t)
        i["margin" + (n = Ge[o])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
    }
    function R(e, t, n) {
      for (
        var o,
          i = (H.tweeners[t] || []).concat(H.tweeners["*"]),
          a = 0,
          r = i.length;
        a < r;
        a++
      )
        if ((o = i[a].call(n, t, e))) return o;
    }
    function H(a, e, t) {
      var n,
        r,
        o = 0,
        i = H.prefilters.length,
        s = me.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (
            var e = bt || O(),
              t = Math.max(0, c.startTime + c.duration - e),
              n = 1 - (t / c.duration || 0),
              o = 0,
              i = c.tweens.length;
            o < i;
            o++
          )
            c.tweens[o].run(n);
          return (
            s.notifyWith(a, [c, n, t]),
            n < 1 && i
              ? t
              : (i || s.notifyWith(a, [c, 1, 0]), s.resolveWith(a, [c]), !1)
          );
        },
        c = s.promise({
          elem: a,
          props: me.extend({}, e),
          opts: me.extend(
            !0,
            { specialEasing: {}, easing: me.easing._default },
            t
          ),
          originalProperties: e,
          originalOptions: t,
          startTime: bt || O(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var n = me.Tween(
              a,
              c.opts,
              e,
              t,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(n), n;
          },
          stop: function (e) {
            var t = 0,
              n = e ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; t < n; t++) c.tweens[t].run(1);
            return (
              e
                ? (s.notifyWith(a, [c, 1, 0]), s.resolveWith(a, [c, e]))
                : s.rejectWith(a, [c, e]),
              this
            );
          },
        }),
        u = c.props;
      for (
        (function (e, t) {
          var n, o, i, a, r;
          for (n in e)
            if (
              ((i = t[(o = p(n))]),
              (a = e[n]),
              Array.isArray(a) && ((i = a[1]), (a = e[n] = a[0])),
              n !== o && ((e[o] = a), delete e[n]),
              (r = me.cssHooks[o]) && ("expand" in r))
            )
              for (n in ((a = r.expand(a)), delete e[o], a))
                (n in e) || ((e[n] = a[n]), (t[n] = i));
            else t[o] = i;
        })(u, c.opts.specialEasing);
        o < i;
        o++
      )
        if ((n = H.prefilters[o].call(c, a, u, c.opts)))
          return (
            ne(n.stop) &&
              (me._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        me.map(u, R, c),
        ne(c.opts.start) && c.opts.start.call(a, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        me.fx.timer(me.extend(l, { elem: a, anim: c, queue: c.opts.queue })),
        c
      );
    }
    function z(e) {
      return (e.match(qe) || []).join(" ");
    }
    function B(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function W(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(qe)) || [];
    }
    function G(n, e, o, i) {
      var t;
      if (Array.isArray(e))
        me.each(e, function (e, t) {
          o || It.test(n)
            ? i(n, t)
            : G(
                n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                t,
                o,
                i
              );
        });
      else if (o || "object" !== g(e)) i(n, e);
      else for (t in e) G(n + "[" + t + "]", e[t], o, i);
    }
    function V(a) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          o = 0,
          i = e.toLowerCase().match(qe) || [];
        if (ne(t))
          for (; (n = i[o++]); )
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (a[n] = a[n] || []).unshift(t))
              : (a[n] = a[n] || []).push(t);
      };
    }
    function U(t, i, a, r) {
      function s(e) {
        var o;
        return (
          (l[e] = !0),
          me.each(t[e] || [], function (e, t) {
            var n = t(i, a, r);
            return "string" != typeof n || c || l[n]
              ? c
                ? !(o = n)
                : void 0
              : (i.dataTypes.unshift(n), s(n), !1);
          }),
          o
        );
      }
      var l = {},
        c = t === Vt;
      return s(i.dataTypes[0]) || (!l["*"] && s("*"));
    }
    function Y(e, t) {
      var n,
        o,
        i = me.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
      return o && me.extend(!0, e, o), e;
    }
    var re = [],
      X = Object.getPrototypeOf,
      se = re.slice,
      Q = re.flat
        ? function (e) {
            return re.flat.call(e);
          }
        : function (e) {
            return re.concat.apply([], e);
          },
      K = re.push,
      le = re.indexOf,
      J = {},
      Z = J.toString,
      ce = J.hasOwnProperty,
      ee = ce.toString,
      te = ee.call(Object),
      ue = {},
      ne = function (e) {
        return (
          "function" == typeof e &&
          "number" != typeof e.nodeType &&
          "function" != typeof e.item
        );
      },
      oe = function (e) {
        return null != e && e === e.window;
      },
      de = ie.document,
      pe = { type: !0, src: !0, nonce: !0, noModule: !0 },
      fe = "3.7.0",
      he = /HTML$/i,
      me = function (e, t) {
        return new me.fn.init(e, t);
      };
    (me.fn = me.prototype =
      {
        jquery: fe,
        constructor: me,
        length: 0,
        toArray: function () {
          return se.call(this);
        },
        get: function (e) {
          return null == e
            ? se.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = me.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return me.each(this, e);
        },
        map: function (n) {
          return this.pushStack(
            me.map(this, function (e, t) {
              return n.call(e, t, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(se.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            me.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            me.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: K,
        sort: re.sort,
        splice: re.splice,
      }),
      (me.extend = me.fn.extend =
        function (e) {
          var t,
            n,
            o,
            i,
            a,
            r,
            s = e || {},
            l = 1,
            c = arguments.length,
            u = !1;
          for (
            "boolean" == typeof s && ((u = s), (s = arguments[l] || {}), l++),
              "object" == typeof s || ne(s) || (s = {}),
              l === c && ((s = this), l--);
            l < c;
            l++
          )
            if (null != (t = arguments[l]))
              for (n in t)
                (i = t[n]),
                  "__proto__" !== n &&
                    s !== i &&
                    (u && i && (me.isPlainObject(i) || (a = Array.isArray(i)))
                      ? ((o = s[n]),
                        (r =
                          a && !Array.isArray(o)
                            ? []
                            : a || me.isPlainObject(o)
                            ? o
                            : {}),
                        (a = !1),
                        (s[n] = me.extend(u, r, i)))
                      : void 0 !== i && (s[n] = i));
          return s;
        }),
      me.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return !(
            !e ||
            "[object Object]" !== Z.call(e) ||
            ((t = X(e)) &&
              ("function" !=
                typeof (n = ce.call(t, "constructor") && t.constructor) ||
                ee.call(n) !== te))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          m(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            o = 0;
          if (s(e))
            for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
          else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
          return e;
        },
        text: function (e) {
          var t,
            n = "",
            o = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) return e.textContent;
            if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[o++]); ) n += me.text(t);
          return n;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (s(Object(e))
                ? me.merge(n, "string" == typeof e ? [e] : e)
                : K.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : le.call(t, e, n);
        },
        isXMLDoc: function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !he.test(t || (n && n.nodeName) || "HTML");
        },
        merge: function (e, t) {
          for (var n = +t.length, o = 0, i = e.length; o < n; o++)
            e[i++] = t[o];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var o = [], i = 0, a = e.length, r = !n; i < a; i++)
            !t(e[i], i) !== r && o.push(e[i]);
          return o;
        },
        map: function (e, t, n) {
          var o,
            i,
            a = 0,
            r = [];
          if (s(e))
            for (o = e.length; a < o; a++)
              null != (i = t(e[a], a, n)) && r.push(i);
          else for (a in e) null != (i = t(e[a], a, n)) && r.push(i);
          return Q(r);
        },
        guid: 1,
        support: ue,
      }),
      "function" == typeof Symbol &&
        (me.fn[Symbol.iterator] = re[Symbol.iterator]),
      me.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          J["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var ge = re.pop,
      ve = re.sort,
      ye = re.splice,
      be = "[\\x20\\t\\r\\n\\f]",
      we = new RegExp(
        "^" + be + "+|((?:^|[^\\\\])(?:\\\\.)*)" + be + "+$",
        "g"
      );
    me.contains = function (e, t) {
      var n = t && t.parentNode;
      return (
        e === n ||
        !(
          !n ||
          1 !== n.nodeType ||
          !(e.contains
            ? e.contains(n)
            : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
        )
      );
    };
    var xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    me.escapeSelector = function (e) {
      return (e + "").replace(xe, t);
    };
    var ke = de,
      $e = K;
    !(function () {
      function y(e, t, n, o) {
        var i,
          a,
          r,
          s,
          l,
          c,
          u,
          d = t && t.ownerDocument,
          p = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
        )
          return n;
        if (!o && (w(t), (t = t || _), S)) {
          if (11 !== p && (l = J.exec(e)))
            if ((i = l[1])) {
              if (9 === p) {
                if (!(r = t.getElementById(i))) return n;
                if (r.id === i) return j.call(n, r), n;
              } else if (
                d &&
                (r = d.getElementById(i)) &&
                y.contains(t, r) &&
                r.id === i
              )
                return j.call(n, r), n;
            } else {
              if (l[2]) return j.apply(n, t.getElementsByTagName(e)), n;
              if ((i = l[3]) && t.getElementsByClassName)
                return j.apply(n, t.getElementsByClassName(i)), n;
            }
          if (!(F[e + " "] || (A && A.test(e)))) {
            if (((u = e), (d = t), 1 === p && (V.test(e) || G.test(e)))) {
              for (
                ((d = (Z.test(e) && f(t.parentNode)) || t) == t && ue.scope) ||
                  ((s = t.getAttribute("id"))
                    ? (s = me.escapeSelector(s))
                    : t.setAttribute("id", (s = L))),
                  a = (c = h(e)).length;
                a--;

              )
                c[a] = (s ? "#" + s : ":scope") + " " + m(c[a]);
              u = c.join(",");
            }
            try {
              return j.apply(n, d.querySelectorAll(u)), n;
            } catch (t) {
              F(e, !0);
            } finally {
              s === L && t.removeAttribute("id");
            }
          }
        }
        return v(e.replace(we, "$1"), t, n, o);
      }
      function e() {
        var n = [];
        return function o(e, t) {
          return (
            n.push(e + " ") > $.cacheLength && delete o[n.shift()],
            (o[e + " "] = t)
          );
        };
      }
      function l(e) {
        return (e[L] = !0), e;
      }
      function o(e) {
        var t = _.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function t(t) {
        return function (e) {
          return ae(e, "input") && e.type === t;
        };
      }
      function n(t) {
        return function (e) {
          return (ae(e, "input") || ae(e, "button")) && e.type === t;
        };
      }
      function i(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && oe(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function a(r) {
        return l(function (a) {
          return (
            (a = +a),
            l(function (e, t) {
              for (var n, o = r([], e.length, a), i = o.length; i--; )
                e[(n = o[i])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function f(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function w(e) {
        var t,
          n = e ? e.ownerDocument || e : ke;
        return (
          n != _ &&
            9 === n.nodeType &&
            n.documentElement &&
            ((T = (_ = n).documentElement),
            (S = !me.isXMLDoc(_)),
            (E = T.matches || T.webkitMatchesSelector || T.msMatchesSelector),
            ke != _ &&
              (t = _.defaultView) &&
              t.top !== t &&
              t.addEventListener("unload", ne),
            (ue.getById = o(function (e) {
              return (
                (T.appendChild(e).id = me.expando),
                !_.getElementsByName || !_.getElementsByName(me.expando).length
              );
            })),
            (ue.disconnectedMatch = o(function (e) {
              return E.call(e, "*");
            })),
            (ue.scope = o(function () {
              return _.querySelectorAll(":scope");
            })),
            (ue.cssHas = o(function () {
              try {
                return _.querySelector(":has(*,:jqfake)"), !1;
              } catch (e) {
                return !0;
              }
            })),
            ue.getById
              ? (($.filter.ID = function (e) {
                  var t = e.replace(ee, te);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                ($.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && S) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : (($.filter.ID = function (e) {
                  var n = e.replace(ee, te);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                ($.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && S) {
                    var n,
                      o,
                      i,
                      a = t.getElementById(e);
                    if (a) {
                      if ((n = a.getAttributeNode("id")) && n.value === e)
                        return [a];
                      for (i = t.getElementsByName(e), o = 0; (a = i[o++]); )
                        if ((n = a.getAttributeNode("id")) && n.value === e)
                          return [a];
                    }
                    return [];
                  }
                })),
            ($.find.TAG = function (e, t) {
              return "undefined" != typeof t.getElementsByTagName
                ? t.getElementsByTagName(e)
                : t.querySelectorAll(e);
            }),
            ($.find.CLASS = function (e, t) {
              if ("undefined" != typeof t.getElementsByClassName && S)
                return t.getElementsByClassName(e);
            }),
            (A = []),
            o(function (e) {
              var t;
              (T.appendChild(e).innerHTML =
                "<a id='" +
                L +
                "' href='' disabled='disabled'></a><select id='" +
                L +
                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                e.querySelectorAll("[selected]").length ||
                  A.push("\\[" + be + "*(?:value|" + M + ")"),
                e.querySelectorAll("[id~=" + L + "-]").length || A.push("~="),
                e.querySelectorAll("a#" + L + "+*").length ||
                  A.push(".#.+[+~]"),
                e.querySelectorAll(":checked").length || A.push(":checked"),
                (t = _.createElement("input")).setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                (T.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(":disabled").length &&
                  A.push(":enabled", ":disabled"),
                (t = _.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length ||
                  A.push(
                    "\\[" + be + "*name" + be + "*=" + be + "*(?:''|\"\")"
                  );
            }),
            ue.cssHas || A.push(":has"),
            (A = A.length && new RegExp(A.join("|"))),
            (O = function (e, t) {
              if (e === t) return (u = !0), 0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return (
                n ||
                (1 &
                  (n =
                    (e.ownerDocument || e) == (t.ownerDocument || t)
                      ? e.compareDocumentPosition(t)
                      : 1) ||
                (!ue.sortDetached && t.compareDocumentPosition(e) === n)
                  ? e === _ || (e.ownerDocument == ke && y.contains(ke, e))
                    ? -1
                    : t === _ || (t.ownerDocument == ke && y.contains(ke, t))
                    ? 1
                    : c
                    ? le.call(c, e) - le.call(c, t)
                    : 0
                  : 4 & n
                  ? -1
                  : 1)
              );
            })),
          _
        );
      }
      function r() {}
      function h(e, t) {
        var n,
          o,
          i,
          a,
          r,
          s,
          l,
          c = I[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (r = e, s = [], l = $.preFilter; r; ) {
          for (a in ((n && !(o = W.exec(r))) ||
            (o && (r = r.slice(o[0].length) || r), s.push((i = []))),
          (n = !1),
          (o = G.exec(r)) &&
            ((n = o.shift()),
            i.push({ value: n, type: o[0].replace(we, " ") }),
            (r = r.slice(n.length))),
          $.filter))
            !(o = X[a].exec(r)) ||
              (l[a] && !(o = l[a](o))) ||
              ((n = o.shift()),
              i.push({ value: n, type: a, matches: o }),
              (r = r.slice(n.length)));
          if (!n) break;
        }
        return t ? r.length : r ? y.error(e) : I(e, s).slice(0);
      }
      function m(e) {
        for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
        return o;
      }
      function d(r, e, t) {
        var s = e.dir,
          l = e.next,
          c = l || s,
          u = t && "parentNode" === c,
          d = N++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[s]); ) if (1 === e.nodeType || u) return r(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var o,
                i,
                a = [q, d];
              if (n) {
                for (; (e = e[s]); )
                  if ((1 === e.nodeType || u) && r(e, t, n)) return !0;
              } else
                for (; (e = e[s]); )
                  if (1 === e.nodeType || u)
                    if (((i = e[L] || (e[L] = {})), l && ae(e, l)))
                      e = e[s] || e;
                    else {
                      if ((o = i[c]) && o[0] === q && o[1] === d)
                        return (a[2] = o[2]);
                      if (((i[c] = a)[2] = r(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function p(i) {
        return 1 < i.length
          ? function (e, t, n) {
              for (var o = i.length; o--; ) if (!i[o](e, t, n)) return !1;
              return !0;
            }
          : i[0];
      }
      function x(e, t, n, o, i) {
        for (var a, r = [], s = 0, l = e.length, c = null != t; s < l; s++)
          (a = e[s]) && ((n && !n(a, o, i)) || (r.push(a), c && t.push(s)));
        return r;
      }
      function b(f, h, m, g, v, e) {
        return (
          g && !g[L] && (g = b(g)),
          v && !v[L] && (v = b(v, e)),
          l(function (e, t, n, o) {
            var i,
              a,
              r,
              s,
              l = [],
              c = [],
              u = t.length,
              d =
                e ||
                (function (e, t, n) {
                  for (var o = 0, i = t.length; o < i; o++) y(e, t[o], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              p = !f || (!e && h) ? d : x(d, l, f, n, o);
            if (
              (m ? m(p, (s = v || (e ? f : u || g) ? [] : t), n, o) : (s = p),
              g)
            )
              for (i = x(s, c), g(i, [], n, o), a = i.length; a--; )
                (r = i[a]) && (s[c[a]] = !(p[c[a]] = r));
            if (e) {
              if (v || f) {
                if (v) {
                  for (i = [], a = s.length; a--; )
                    (r = s[a]) && i.push((p[a] = r));
                  v(null, (s = []), i, o);
                }
                for (a = s.length; a--; )
                  (r = s[a]) &&
                    -1 < (i = v ? le.call(e, r) : l[a]) &&
                    (e[i] = !(t[i] = r));
              }
            } else (s = x(s === t ? s.splice(u, s.length) : s)), v ? v(null, t, s, o) : j.apply(t, s);
          })
        );
      }
      function k(e) {
        for (
          var i,
            t,
            n,
            o = e.length,
            a = $.relative[e[0].type],
            r = a || $.relative[" "],
            s = a ? 1 : 0,
            l = d(
              function (e) {
                return e === i;
              },
              r,
              !0
            ),
            c = d(
              function (e) {
                return -1 < le.call(i, e);
              },
              r,
              !0
            ),
            u = [
              function (e, t, n) {
                var o =
                  (!a && (n || t != C)) ||
                  ((i = t).nodeType ? l(e, t, n) : c(e, t, n));
                return (i = null), o;
              },
            ];
          s < o;
          s++
        )
          if ((t = $.relative[e[s].type])) u = [d(p(u), t)];
          else {
            if ((t = $.filter[e[s].type].apply(null, e[s].matches))[L]) {
              for (n = ++s; n < o && !$.relative[e[n].type]; n++);
              return b(
                1 < s && p(u),
                1 < s &&
                  m(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(we, "$1"),
                t,
                s < n && k(e.slice(s, n)),
                n < o && k((e = e.slice(n))),
                n < o && m(e)
              );
            }
            u.push(t);
          }
        return p(u);
      }
      function g(e, t) {
        var n,
          g,
          v,
          y,
          b,
          o,
          i = [],
          a = [],
          r = P[e + " "];
        if (!r) {
          for (t || (t = h(e)), n = t.length; n--; )
            (r = k(t[n]))[L] ? i.push(r) : a.push(r);
          (r = P(
            e,
            ((g = a),
            (y = 0 < (v = i).length),
            (b = 0 < g.length),
            (o = function (e, t, n, o, i) {
              var a,
                r,
                s,
                l = 0,
                c = "0",
                u = e && [],
                d = [],
                p = C,
                f = e || (b && $.find.TAG("*", i)),
                h = (q += null == p ? 1 : Math.random() || 0.1),
                m = f.length;
              for (
                i && (C = t == _ || t || i);
                c !== m && null != (a = f[c]);
                c++
              ) {
                if (b && a) {
                  for (
                    r = 0, t || a.ownerDocument == _ || (w(a), (n = !S));
                    (s = g[r++]);

                  )
                    if (s(a, t || _, n)) {
                      j.call(o, a);
                      break;
                    }
                  i && (q = h);
                }
                y && ((a = !s && a) && l--, e && u.push(a));
              }
              if (((l += c), y && c !== l)) {
                for (r = 0; (s = v[r++]); ) s(u, d, t, n);
                if (e) {
                  if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = ge.call(o));
                  d = x(d);
                }
                j.apply(o, d),
                  i &&
                    !e &&
                    0 < d.length &&
                    1 < l + v.length &&
                    me.uniqueSort(o);
              }
              return i && ((q = h), (C = p)), u;
            }),
            y ? l(o) : o)
          )).selector = e;
        }
        return r;
      }
      function v(e, t, n, o) {
        var i,
          a,
          r,
          s,
          l,
          c = "function" == typeof e && e,
          u = !o && h((e = c.selector || e));
        if (((n = n || []), 1 === u.length)) {
          if (
            2 < (a = u[0] = u[0].slice(0)).length &&
            "ID" === (r = a[0]).type &&
            9 === t.nodeType &&
            S &&
            $.relative[a[1].type]
          ) {
            if (!(t = ($.find.ID(r.matches[0].replace(ee, te), t) || [])[0]))
              return n;
            c && (t = t.parentNode), (e = e.slice(a.shift().value.length));
          }
          for (
            i = X.needsContext.test(e) ? 0 : a.length;
            i-- && ((r = a[i]), !$.relative[(s = r.type)]);

          )
            if (
              (l = $.find[s]) &&
              (o = l(
                r.matches[0].replace(ee, te),
                (Z.test(a[0].type) && f(t.parentNode)) || t
              ))
            ) {
              if ((a.splice(i, 1), !(e = o.length && m(a))))
                return j.apply(n, o), n;
              break;
            }
        }
        return (
          (c || g(e, u))(
            o,
            t,
            !S,
            n,
            !t || (Z.test(e) && f(t.parentNode)) || t
          ),
          n
        );
      }
      var s,
        $,
        C,
        c,
        u,
        _,
        T,
        S,
        A,
        E,
        j = $e,
        L = me.expando,
        q = 0,
        N = 0,
        D = e(),
        I = e(),
        P = e(),
        F = e(),
        O = function (e, t) {
          return e === t && (u = !0), 0;
        },
        M =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        R =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          be +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        H =
          "\\[" +
          be +
          "*(" +
          R +
          ")(?:" +
          be +
          "*([*^$|!~]?=)" +
          be +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          R +
          "))|)" +
          be +
          "*\\]",
        z =
          ":(" +
          R +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          H +
          ")*)|.*)\\)|)",
        B = new RegExp(be + "+", "g"),
        W = new RegExp("^" + be + "*," + be + "*"),
        G = new RegExp("^" + be + "*([>+~]|" + be + ")" + be + "*"),
        V = new RegExp(be + "|>"),
        U = new RegExp(z),
        Y = new RegExp("^" + R + "$"),
        X = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + H),
          PSEUDO: new RegExp("^" + z),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              be +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              be +
              "*(?:([+-]|)" +
              be +
              "*(\\d+)|))" +
              be +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + M + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              be +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              be +
              "*((?:-\\d)?\\d*)" +
              be +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Q = /^(?:input|select|textarea|button)$/i,
        K = /^h\d$/i,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        ee = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + be + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        te = function (e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return (
            t ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        ne = function () {
          w();
        },
        oe = d(
          function (e) {
            return !0 === e.disabled && ae(e, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        j.apply((re = se.call(ke.childNodes)), ke.childNodes),
          re[ke.childNodes.length].nodeType;
      } catch (s) {
        j = {
          apply: function (e, t) {
            $e.apply(e, se.call(t));
          },
          call: function (e) {
            $e.apply(e, se.call(arguments, 1));
          },
        };
      }
      for (s in ((y.matches = function (e, t) {
        return y(e, null, null, t);
      }),
      (y.matchesSelector = function (e, t) {
        if ((w(e), S && !F[t + " "] && (!A || !A.test(t))))
          try {
            var n = E.call(e, t);
            if (
              n ||
              ue.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            F(t, !0);
          }
        return 0 < y(t, _, null, [e]).length;
      }),
      (y.contains = function (e, t) {
        return (e.ownerDocument || e) != _ && w(e), me.contains(e, t);
      }),
      (y.attr = function (e, t) {
        (e.ownerDocument || e) != _ && w(e);
        var n = $.attrHandle[t.toLowerCase()],
          o =
            n && ce.call($.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
        return void 0 !== o ? o : e.getAttribute(t);
      }),
      (y.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (me.uniqueSort = function (e) {
        var t,
          n = [],
          o = 0,
          i = 0;
        if (
          ((u = !ue.sortStable),
          (c = !ue.sortStable && se.call(e, 0)),
          ve.call(e, O),
          u)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (o = n.push(i));
          for (; o--; ) ye.call(e, n[o], 1);
        }
        return (c = null), e;
      }),
      (me.fn.uniqueSort = function () {
        return this.pushStack(me.uniqueSort(se.apply(this)));
      }),
      (($ = me.expr =
        {
          cacheLength: 50,
          createPseudo: l,
          match: X,
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
                (e[1] = e[1].replace(ee, te)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || y.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && y.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return X.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      U.test(n) &&
                      (t = h(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(ee, te).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return ae(e, t);
                  };
            },
            CLASS: function (e) {
              var t = D[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + be + ")" + e + "(" + be + "|$)")) &&
                  D(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, o, i) {
              return function (e) {
                var t = y.attr(e, n);
                return null == t
                  ? "!=" === o
                  : !o ||
                      ((t += ""),
                      "=" === o
                        ? t === i
                        : "!=" === o
                        ? t !== i
                        : "^=" === o
                        ? i && 0 === t.indexOf(i)
                        : "*=" === o
                        ? i && -1 < t.indexOf(i)
                        : "$=" === o
                        ? i && t.slice(-i.length) === i
                        : "~=" === o
                        ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                        : "|=" === o &&
                          (t === i || t.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (f, e, t, h, m) {
              var g = "nth" !== f.slice(0, 3),
                v = "last" !== f.slice(-4),
                y = "of-type" === e;
              return 1 === h && 0 === m
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var o,
                      i,
                      a,
                      r,
                      s,
                      l = g !== v ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      u = y && e.nodeName.toLowerCase(),
                      d = !n && !y,
                      p = !1;
                    if (c) {
                      if (g) {
                        for (; l; ) {
                          for (a = e; (a = a[l]); )
                            if (y ? ae(a, u) : 1 === a.nodeType) return !1;
                          s = l = "only" === f && !s && "nextSibling";
                        }
                        return !0;
                      }
                      if (((s = [v ? c.firstChild : c.lastChild]), v && d)) {
                        for (
                          p =
                            (r =
                              (o = (i = c[L] || (c[L] = {}))[f] || [])[0] ===
                                q && o[1]) && o[2],
                            a = r && c.childNodes[r];
                          (a = (++r && a && a[l]) || (p = r = 0) || s.pop());

                        )
                          if (1 === a.nodeType && ++p && a === e) {
                            i[f] = [q, r, p];
                            break;
                          }
                      } else if (
                        (d &&
                          (p = r =
                            (o = (i = e[L] || (e[L] = {}))[f] || [])[0] === q &&
                            o[1]),
                        !1 === p)
                      )
                        for (
                          ;
                          (a = (++r && a && a[l]) || (p = r = 0) || s.pop()) &&
                          ((y ? !ae(a, u) : 1 !== a.nodeType) ||
                            !++p ||
                            (d && ((i = a[L] || (a[L] = {}))[f] = [q, p]),
                            a !== e));

                        );
                      return (p -= m) === h || (p % h == 0 && 0 <= p / h);
                    }
                  };
            },
            PSEUDO: function (e, a) {
              var t,
                r =
                  $.pseudos[e] ||
                  $.setFilters[e.toLowerCase()] ||
                  y.error("unsupported pseudo: " + e);
              return r[L]
                ? r(a)
                : 1 < r.length
                ? ((t = [e, e, "", a]),
                  $.setFilters.hasOwnProperty(e.toLowerCase())
                    ? l(function (e, t) {
                        for (var n, o = r(e, a), i = o.length; i--; )
                          e[(n = le.call(e, o[i]))] = !(t[n] = o[i]);
                      })
                    : function (e) {
                        return r(e, 0, t);
                      })
                : r;
            },
          },
          pseudos: {
            not: l(function (e) {
              var o = [],
                i = [],
                s = g(e.replace(we, "$1"));
              return s[L]
                ? l(function (e, t, n, o) {
                    for (var i, a = s(e, null, o, []), r = e.length; r--; )
                      (i = a[r]) && (e[r] = !(t[r] = i));
                  })
                : function (e, t, n) {
                    return (
                      (o[0] = e), s(o, null, n, i), (o[0] = null), !i.pop()
                    );
                  };
            }),
            has: l(function (t) {
              return function (e) {
                return 0 < y(t, e).length;
              };
            }),
            contains: l(function (t) {
              return (
                (t = t.replace(ee, te)),
                function (e) {
                  return -1 < (e.textContent || me.text(e)).indexOf(t);
                }
              );
            }),
            lang: l(function (n) {
              return (
                Y.test(n || "") || y.error("unsupported lang: " + n),
                (n = n.replace(ee, te).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = S
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = ie.location && ie.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === T;
            },
            focus: function (e) {
              return (
                e ===
                  (function () {
                    try {
                      return _.activeElement;
                    } catch (e) {}
                  })() &&
                _.hasFocus() &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: i(!1),
            disabled: i(!0),
            checked: function (e) {
              return (
                (ae(e, "input") && !!e.checked) ||
                (ae(e, "option") && !!e.selected)
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
              return !$.pseudos.empty(e);
            },
            header: function (e) {
              return K.test(e.nodeName);
            },
            input: function (e) {
              return Q.test(e.nodeName);
            },
            button: function (e) {
              return (ae(e, "input") && "button" === e.type) || ae(e, "button");
            },
            text: function (e) {
              var t;
              return (
                ae(e, "input") &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: a(function () {
              return [0];
            }),
            last: a(function (e, t) {
              return [t - 1];
            }),
            eq: a(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: a(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: a(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: a(function (e, t, n) {
              var o;
              for (o = n < 0 ? n + t : t < n ? t : n; 0 <= --o; ) e.push(o);
              return e;
            }),
            gt: a(function (e, t, n) {
              for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
              return e;
            }),
          },
        }).pseudos.nth = $.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        $.pseudos[s] = t(s);
      for (s in { submit: !0, reset: !0 }) $.pseudos[s] = n(s);
      (r.prototype = $.filters = $.pseudos),
        ($.setFilters = new r()),
        (ue.sortStable = L.split("").sort(O).join("") === L),
        w(),
        (ue.sortDetached = o(function (e) {
          return 1 & e.compareDocumentPosition(_.createElement("fieldset"));
        })),
        (me.find = y),
        (me.expr[":"] = me.expr.pseudos),
        (me.unique = me.uniqueSort),
        (y.compile = g),
        (y.select = v),
        (y.setDocument = w),
        (y.escape = me.escapeSelector),
        (y.getText = me.text),
        (y.isXML = me.isXMLDoc),
        (y.selectors = me.expr),
        (y.support = me.support),
        (y.uniqueSort = me.uniqueSort);
    })();
    var Ce = function (e, t, n) {
        for (var o = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (i && me(e).is(n)) break;
            o.push(e);
          }
        return o;
      },
      _e = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      Te = me.expr.match.needsContext,
      Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (me.filter = function (e, t, n) {
      var o = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === o.nodeType
          ? me.find.matchesSelector(o, e)
            ? [o]
            : []
          : me.find.matches(
              e,
              me.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      me.fn.extend({
        find: function (e) {
          var t,
            n,
            o = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              me(e).filter(function () {
                for (t = 0; t < o; t++) if (me.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < o; t++) me.find(e, i[t], n);
          return 1 < o ? me.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(n(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(n(this, e || [], !0));
        },
        is: function (e) {
          return !!n(
            this,
            "string" == typeof e && Te.test(e) ? me(e) : e || [],
            !1
          ).length;
        },
      });
    var Ae,
      Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((me.fn.init = function (e, t, n) {
      var o, i;
      if (!e) return this;
      if (((n = n || Ae), "string" != typeof e))
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : ne(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(me)
          : me.makeArray(e, this);
      if (
        !(o =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : Ee.exec(e)) ||
        (!o[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (o[1]) {
        if (
          ((t = t instanceof me ? t[0] : t),
          me.merge(
            this,
            me.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : de, !0)
          ),
          Se.test(o[1]) && me.isPlainObject(t))
        )
          for (o in t) ne(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        return this;
      }
      return (
        (i = de.getElementById(o[2])) && ((this[0] = i), (this.length = 1)),
        this
      );
    }).prototype = me.fn),
      (Ae = me(de));
    var je = /^(?:parents|prev(?:Until|All))/,
      Le = { children: !0, contents: !0, next: !0, prev: !0 };
    me.fn.extend({
      has: function (e) {
        var t = me(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (me.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          o = 0,
          i = this.length,
          a = [],
          r = "string" != typeof e && me(e);
        if (!Te.test(e))
          for (; o < i; o++)
            for (n = this[o]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (r
                  ? -1 < r.index(n)
                  : 1 === n.nodeType && me.find.matchesSelector(n, e))
              ) {
                a.push(n);
                break;
              }
        return this.pushStack(1 < a.length ? me.uniqueSort(a) : a);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? le.call(me(e), this[0])
            : le.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      me.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return Ce(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return Ce(e, "parentNode", n);
          },
          next: function (e) {
            return o(e, "nextSibling");
          },
          prev: function (e) {
            return o(e, "previousSibling");
          },
          nextAll: function (e) {
            return Ce(e, "nextSibling");
          },
          prevAll: function (e) {
            return Ce(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return Ce(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return Ce(e, "previousSibling", n);
          },
          siblings: function (e) {
            return _e((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return _e(e.firstChild);
          },
          contents: function (e) {
            return null != e.contentDocument && X(e.contentDocument)
              ? e.contentDocument
              : (ae(e, "template") && (e = e.content || e),
                me.merge([], e.childNodes));
          },
        },
        function (o, i) {
          me.fn[o] = function (e, t) {
            var n = me.map(this, i, e);
            return (
              "Until" !== o.slice(-5) && (t = e),
              t && "string" == typeof t && (n = me.filter(t, n)),
              1 < this.length &&
                (Le[o] || me.uniqueSort(n), je.test(o) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var qe = /[^\x20\t\r\n\f]+/g;
    (me.Callbacks = function (o) {
      var e, n;
      o =
        "string" == typeof o
          ? ((e = o),
            (n = {}),
            me.each(e.match(qe) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : me.extend({}, o);
      var i,
        t,
        a,
        r,
        s = [],
        l = [],
        c = -1,
        u = function () {
          for (r = r || o.once, a = i = !0; l.length; c = -1)
            for (t = l.shift(); ++c < s.length; )
              !1 === s[c].apply(t[0], t[1]) &&
                o.stopOnFalse &&
                ((c = s.length), (t = !1));
          o.memory || (t = !1), (i = !1), r && (s = t ? [] : "");
        },
        d = {
          add: function () {
            return (
              s &&
                (t && !i && ((c = s.length - 1), l.push(t)),
                (function n(e) {
                  me.each(e, function (e, t) {
                    ne(t)
                      ? (o.unique && d.has(t)) || s.push(t)
                      : t && t.length && "string" !== g(t) && n(t);
                  });
                })(arguments),
                t && !i && u()),
              this
            );
          },
          remove: function () {
            return (
              me.each(arguments, function (e, t) {
                for (var n; -1 < (n = me.inArray(t, s, n)); )
                  s.splice(n, 1), n <= c && c--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < me.inArray(e, s) : 0 < s.length;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (r = l = []), (s = t = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (r = l = []), t || i || (s = t = ""), this;
          },
          locked: function () {
            return !!r;
          },
          fireWith: function (e, t) {
            return (
              r ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                l.push(t),
                i || u()),
              this
            );
          },
          fire: function () {
            return d.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!a;
          },
        };
      return d;
    }),
      me.extend({
        Deferred: function (e) {
          var a = [
              [
                "notify",
                "progress",
                me.Callbacks("memory"),
                me.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                me.Callbacks("once memory"),
                me.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                me.Callbacks("once memory"),
                me.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            r = {
              state: function () {
                return i;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return r.then(null, e);
              },
              pipe: function () {
                var i = arguments;
                return me
                  .Deferred(function (o) {
                    me.each(a, function (e, t) {
                      var n = ne(i[t[4]]) && i[t[4]];
                      s[t[1]](function () {
                        var e = n && n.apply(this, arguments);
                        e && ne(e.promise)
                          ? e
                              .promise()
                              .progress(o.notify)
                              .done(o.resolve)
                              .fail(o.reject)
                          : o[t[0] + "With"](this, n ? [e] : arguments);
                      });
                    }),
                      (i = null);
                  })
                  .promise();
              },
              then: function (t, n, o) {
                function l(i, a, r, s) {
                  return function () {
                    var n = this,
                      o = arguments,
                      e = function () {
                        var e, t;
                        if (!(i < c)) {
                          if ((e = r.apply(n, o)) === a.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            ne(t)
                              ? s
                                ? t.call(e, l(c, a, u, s), l(c, a, d, s))
                                : (c++,
                                  t.call(
                                    e,
                                    l(c, a, u, s),
                                    l(c, a, d, s),
                                    l(c, a, u, a.notifyWith)
                                  ))
                              : (r !== u && ((n = void 0), (o = [e])),
                                (s || a.resolveWith)(n, o));
                        }
                      },
                      t = s
                        ? e
                        : function () {
                            try {
                              e();
                            } catch (e) {
                              me.Deferred.exceptionHook &&
                                me.Deferred.exceptionHook(e, t.error),
                                c <= i + 1 &&
                                  (r !== d && ((n = void 0), (o = [e])),
                                  a.rejectWith(n, o));
                            }
                          };
                    i
                      ? t()
                      : (me.Deferred.getErrorHook
                          ? (t.error = me.Deferred.getErrorHook())
                          : me.Deferred.getStackHook &&
                            (t.error = me.Deferred.getStackHook()),
                        ie.setTimeout(t));
                  };
                }
                var c = 0;
                return me
                  .Deferred(function (e) {
                    a[0][3].add(l(0, e, ne(o) ? o : u, e.notifyWith)),
                      a[1][3].add(l(0, e, ne(t) ? t : u)),
                      a[2][3].add(l(0, e, ne(n) ? n : d));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? me.extend(e, r) : r;
              },
            },
            s = {};
          return (
            me.each(a, function (e, t) {
              var n = t[2],
                o = t[5];
              (r[t[1]] = n.add),
                o &&
                  n.add(
                    function () {
                      i = o;
                    },
                    a[3 - e][2].disable,
                    a[3 - e][3].disable,
                    a[0][2].lock,
                    a[0][3].lock
                  ),
                n.add(t[3].fire),
                (s[t[0]] = function () {
                  return (
                    s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                  );
                }),
                (s[t[0] + "With"] = n.fireWith);
            }),
            r.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function (e) {
          var n = arguments.length,
            t = n,
            o = Array(t),
            i = se.call(arguments),
            a = me.Deferred(),
            r = function (t) {
              return function (e) {
                (o[t] = this),
                  (i[t] = 1 < arguments.length ? se.call(arguments) : e),
                  --n || a.resolveWith(o, i);
              };
            };
          if (
            n <= 1 &&
            (l(e, a.done(r(t)).resolve, a.reject, !n),
            "pending" === a.state() || ne(i[t] && i[t].then))
          )
            return a.then();
          for (; t--; ) l(i[t], r(t), a.reject);
          return a.promise();
        },
      });
    var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (me.Deferred.exceptionHook = function (e, t) {
      ie.console &&
        ie.console.warn &&
        e &&
        Ne.test(e.name) &&
        ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (me.readyException = function (e) {
        ie.setTimeout(function () {
          throw e;
        });
      });
    var De = me.Deferred();
    (me.fn.ready = function (e) {
      return (
        De.then(e)["catch"](function (e) {
          me.readyException(e);
        }),
        this
      );
    }),
      me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --me.readyWait : me.isReady) ||
            ((me.isReady = !0) !== e && 0 < --me.readyWait) ||
            De.resolveWith(de, [me]);
        },
      }),
      (me.ready.then = De.then),
      "complete" === de.readyState ||
      ("loading" !== de.readyState && !de.documentElement.doScroll)
        ? ie.setTimeout(me.ready)
        : (de.addEventListener("DOMContentLoaded", i),
          ie.addEventListener("load", i));
    var Ie = function (e, t, n, o, i, a, r) {
        var s = 0,
          l = e.length,
          c = null == n;
        if ("object" === g(n))
          for (s in ((i = !0), n)) Ie(e, t, s, n[s], !0, a, r);
        else if (
          void 0 !== o &&
          ((i = !0),
          ne(o) || (r = !0),
          c &&
            (r
              ? (t.call(e, o), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(me(e), n);
                }))),
          t)
        )
          for (; s < l; s++) t(e[s], n, r ? o : o.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : a;
      },
      Pe = /^-ms-/,
      Fe = /-([a-z])/g,
      Oe = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (r.uid = 1),
      (r.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              Oe(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var o,
            i = this.cache(e);
          if ("string" == typeof t) i[p(t)] = n;
          else for (o in t) i[p(o)] = t[o];
          return i;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][p(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            o = e[this.expando];
          if (void 0 !== o) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(p)
                : (t = p(t)) in o
                ? [t]
                : t.match(qe) || []).length;
              for (; n--; ) delete o[t[n]];
            }
            (void 0 === t || me.isEmptyObject(o)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !me.isEmptyObject(t);
        },
      });
    var Me = new r(),
      Re = new r(),
      He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ze = /[A-Z]/g;
    me.extend({
      hasData: function (e) {
        return Re.hasData(e) || Me.hasData(e);
      },
      data: function (e, t, n) {
        return Re.access(e, t, n);
      },
      removeData: function (e, t) {
        Re.remove(e, t);
      },
      _data: function (e, t, n) {
        return Me.access(e, t, n);
      },
      _removeData: function (e, t) {
        Me.remove(e, t);
      },
    }),
      me.fn.extend({
        data: function (n, e) {
          var t,
            o,
            i,
            a = this[0],
            r = a && a.attributes;
          if (void 0 !== n)
            return "object" == typeof n
              ? this.each(function () {
                  Re.set(this, n);
                })
              : Ie(
                  this,
                  function (e) {
                    var t;
                    if (a && void 0 === e)
                      return void 0 !== (t = Re.get(a, n))
                        ? t
                        : void 0 !== (t = c(a, n))
                        ? t
                        : void 0;
                    this.each(function () {
                      Re.set(this, n, e);
                    });
                  },
                  null,
                  e,
                  1 < arguments.length,
                  null,
                  !0
                );
          if (
            this.length &&
            ((i = Re.get(a)), 1 === a.nodeType && !Me.get(a, "hasDataAttrs"))
          ) {
            for (t = r.length; t--; )
              r[t] &&
                0 === (o = r[t].name).indexOf("data-") &&
                ((o = p(o.slice(5))), c(a, o, i[o]));
            Me.set(a, "hasDataAttrs", !0);
          }
          return i;
        },
        removeData: function (e) {
          return this.each(function () {
            Re.remove(this, e);
          });
        },
      }),
      me.extend({
        queue: function (e, t, n) {
          var o;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (o = Me.get(e, t)),
              n &&
                (!o || Array.isArray(n)
                  ? (o = Me.access(e, t, me.makeArray(n)))
                  : o.push(n)),
              o || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = me.queue(e, t),
            o = n.length,
            i = n.shift(),
            a = me._queueHooks(e, t);
          "inprogress" === i && ((i = n.shift()), o--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete a.stop,
              i.call(
                e,
                function () {
                  me.dequeue(e, t);
                },
                a
              )),
            !o && a && a.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Me.get(e, n) ||
            Me.access(e, n, {
              empty: me.Callbacks("once memory").add(function () {
                Me.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      me.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? me.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = me.queue(this, t, n);
                  me._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && me.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            me.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            o = 1,
            i = me.Deferred(),
            a = this,
            r = this.length,
            s = function () {
              --o || i.resolveWith(a, [a]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            r--;

          )
            (n = Me.get(a[r], e + "queueHooks")) &&
              n.empty &&
              (o++, n.empty.add(s));
          return s(), i.promise(t);
        },
      });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      We = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
      Ge = ["Top", "Right", "Bottom", "Left"],
      Ve = de.documentElement,
      Ue = function (e) {
        return me.contains(e.ownerDocument, e);
      },
      Ye = { composed: !0 };
    Ve.getRootNode &&
      (Ue = function (e) {
        return (
          me.contains(e.ownerDocument, e) ||
          e.getRootNode(Ye) === e.ownerDocument
        );
      });
    var Xe = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && Ue(e) && "none" === me.css(e, "display"))
        );
      },
      Qe = {};
    me.fn.extend({
      show: function () {
        return v(this, !0);
      },
      hide: function () {
        return v(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Xe(this) ? me(this).show() : me(this).hide();
            });
      },
    });
    var Ke,
      Je,
      Ze = /^(?:checkbox|radio)$/i,
      et = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      tt = /^$|^module$|\/(?:java|ecma)script/i;
    (Ke = de.createDocumentFragment().appendChild(de.createElement("div"))),
      (Je = de.createElement("input")).setAttribute("type", "radio"),
      Je.setAttribute("checked", "checked"),
      Je.setAttribute("name", "t"),
      Ke.appendChild(Je),
      (ue.checkClone = Ke.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (Ke.innerHTML = "<textarea>x</textarea>"),
      (ue.noCloneChecked = !!Ke.cloneNode(!0).lastChild.defaultValue),
      (Ke.innerHTML = "<option></option>"),
      (ue.option = !!Ke.lastChild);
    var nt = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    (nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead),
      (nt.th = nt.td),
      ue.option ||
        (nt.optgroup = nt.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var ot = /<|&#?\w+;/,
      it = /^([^.]*)(?:\.(.+)|)/;
    (me.event = {
      global: {},
      add: function (t, e, n, o, i) {
        var a,
          r,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          m,
          g = Me.get(t);
        if (Oe(t))
          for (
            n.handler && ((n = (a = n).handler), (i = a.selector)),
              i && me.find.matchesSelector(Ve, i),
              n.guid || (n.guid = me.guid++),
              (l = g.events) || (l = g.events = Object.create(null)),
              (r = g.handle) ||
                (r = g.handle =
                  function (e) {
                    return void 0 !== me && me.event.triggered !== e.type
                      ? me.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              c = (e = (e || "").match(qe) || [""]).length;
            c--;

          )
            (f = m = (s = it.exec(e[c]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              f &&
                ((d = me.event.special[f] || {}),
                (f = (i ? d.delegateType : d.bindType) || f),
                (d = me.event.special[f] || {}),
                (u = me.extend(
                  {
                    type: f,
                    origType: m,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && me.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  a
                )),
                (p = l[f]) ||
                  (((p = l[f] = []).delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(t, o, h, r)) ||
                    (t.addEventListener && t.addEventListener(f, r))),
                d.add &&
                  (d.add.call(t, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                i ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                (me.event.global[f] = !0));
      },
      remove: function (e, t, n, o, i) {
        var a,
          r,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          m,
          g = Me.hasData(e) && Me.get(e);
        if (g && (l = g.events)) {
          for (c = (t = (t || "").match(qe) || [""]).length; c--; )
            if (
              ((f = m = (s = it.exec(t[c]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              f)
            ) {
              for (
                d = me.event.special[f] || {},
                  p = l[(f = (o ? d.delegateType : d.bindType) || f)] || [],
                  s =
                    s[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  r = a = p.length;
                a--;

              )
                (u = p[a]),
                  (!i && m !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (s && !s.test(u.namespace)) ||
                    (o && o !== u.selector && ("**" !== o || !u.selector)) ||
                    (p.splice(a, 1),
                    u.selector && p.delegateCount--,
                    d.remove && d.remove.call(e, u));
              r &&
                !p.length &&
                ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                  me.removeEvent(e, f, g.handle),
                delete l[f]);
            } else for (f in l) me.event.remove(e, f + t[c], n, o, !0);
          me.isEmptyObject(l) && Me.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          o,
          i,
          a,
          r,
          s = new Array(arguments.length),
          l = me.event.fix(e),
          c = (Me.get(this, "events") || Object.create(null))[l.type] || [],
          u = me.event.special[l.type] || {};
        for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
        if (
          ((l.delegateTarget = this),
          !u.preDispatch || !1 !== u.preDispatch.call(this, l))
        ) {
          for (
            r = me.event.handlers.call(this, l, c), t = 0;
            (i = r[t++]) && !l.isPropagationStopped();

          )
            for (
              l.currentTarget = i.elem, n = 0;
              (a = i.handlers[n++]) && !l.isImmediatePropagationStopped();

            )
              (l.rnamespace &&
                !1 !== a.namespace &&
                !l.rnamespace.test(a.namespace)) ||
                ((l.handleObj = a),
                (l.data = a.data),
                void 0 !==
                  (o = (
                    (me.event.special[a.origType] || {}).handle || a.handler
                  ).apply(i.elem, s)) &&
                  !1 === (l.result = o) &&
                  (l.preventDefault(), l.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function (e, t) {
        var n,
          o,
          i,
          a,
          r,
          s = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (a = [], r = {}, n = 0; n < l; n++)
                void 0 === r[(i = (o = t[n]).selector + " ")] &&
                  (r[i] = o.needsContext
                    ? -1 < me(i, this).index(c)
                    : me.find(i, this, null, [c]).length),
                  r[i] && a.push(o);
              a.length && s.push({ elem: c, handlers: a });
            }
        return (
          (c = this),
          l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
          s
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(me.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: ne(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (e) {
        return e[me.expando] ? e : new me.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              Ze.test(t.type) && t.click && ae(t, "input") && $(t, "click", !0),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              Ze.test(t.type) && t.click && ae(t, "input") && $(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (Ze.test(t.type) &&
                t.click &&
                ae(t, "input") &&
                Me.get(t, "click")) ||
              ae(t, "a")
            );
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
    }),
      (me.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (me.Event = function (e, t) {
        if (!(this instanceof me.Event)) return new me.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? h
                : x),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && me.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[me.expando] = !0);
      }),
      (me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = h),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = h),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = h),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      me.each(
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
        me.event.addProp
      ),
      me.each({ focus: "focusin", blur: "focusout" }, function (o, i) {
        function a(e) {
          if (de.documentMode) {
            var t = Me.get(this, "handle"),
              n = me.event.fix(e);
            (n.type = "focusin" === e.type ? "focus" : "blur"),
              (n.isSimulated = !0),
              t(e),
              n.target === n.currentTarget && t(n);
          } else me.event.simulate(i, e.target, me.event.fix(e));
        }
        (me.event.special[o] = {
          setup: function () {
            var e;
            if (($(this, o, !0), !de.documentMode)) return !1;
            (e = Me.get(this, i)) || this.addEventListener(i, a),
              Me.set(this, i, (e || 0) + 1);
          },
          trigger: function () {
            return $(this, o), !0;
          },
          teardown: function () {
            var e;
            if (!de.documentMode) return !1;
            (e = Me.get(this, i) - 1)
              ? Me.set(this, i, e)
              : (this.removeEventListener(i, a), Me.remove(this, i));
          },
          _default: function (e) {
            return Me.get(e.target, o);
          },
          delegateType: i,
        }),
          (me.event.special[i] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = de.documentMode ? this : e,
                n = Me.get(t, i);
              n ||
                (de.documentMode
                  ? this.addEventListener(i, a)
                  : e.addEventListener(o, a, !0)),
                Me.set(t, i, (n || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = de.documentMode ? this : e,
                n = Me.get(t, i) - 1;
              n
                ? Me.set(t, i, n)
                : (de.documentMode
                    ? this.removeEventListener(i, a)
                    : e.removeEventListener(o, a, !0),
                  Me.remove(t, i));
            },
          });
      }),
      me.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, i) {
          me.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                o = e.handleObj;
              return (
                (n && (n === this || me.contains(this, n))) ||
                  ((e.type = o.origType),
                  (t = o.handler.apply(this, arguments)),
                  (e.type = i)),
                t
              );
            },
          };
        }
      ),
      me.fn.extend({
        on: function (e, t, n, o) {
          return k(this, e, t, n, o);
        },
        one: function (e, t, n, o) {
          return k(this, e, t, n, o, 1);
        },
        off: function (e, t, n) {
          var o, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (o = e.handleObj),
              me(e.delegateTarget).off(
                o.namespace ? o.origType + "." + o.namespace : o.origType,
                o.selector,
                o.handler
              ),
              this
            );
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = x),
              this.each(function () {
                me.event.remove(this, e, n, t);
              })
            );
          for (i in e) this.off(i, t, e[i]);
          return this;
        },
      });
    var at = /<script|<style|<link/i,
      rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      st = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    me.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var o,
          i,
          a,
          r,
          s,
          l,
          c,
          u = e.cloneNode(!0),
          d = Ue(e);
        if (
          !(
            ue.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            me.isXMLDoc(e)
          )
        )
          for (r = y(u), o = 0, i = (a = y(e)).length; o < i; o++)
            (s = a[o]),
              "input" === (c = (l = r[o]).nodeName.toLowerCase()) &&
              Ze.test(s.type)
                ? (l.checked = s.checked)
                : ("input" !== c && "textarea" !== c) ||
                  (l.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (a = a || y(e), r = r || y(u), o = 0, i = a.length; o < i; o++)
              S(a[o], r[o]);
          else S(e, u);
        return 0 < (r = y(u, "script")).length && b(r, !d && y(e, "script")), u;
      },
      cleanData: function (e) {
        for (
          var t, n, o, i = me.event.special, a = 0;
          void 0 !== (n = e[a]);
          a++
        )
          if (Oe(n)) {
            if ((t = n[Me.expando])) {
              if (t.events)
                for (o in t.events)
                  i[o] ? me.event.remove(n, o) : me.removeEvent(n, o, t.handle);
              n[Me.expando] = void 0;
            }
            n[Re.expando] && (n[Re.expando] = void 0);
          }
      },
    }),
      me.fn.extend({
        detach: function (e) {
          return E(this, e, !0);
        },
        remove: function (e) {
          return E(this, e);
        },
        text: function (e) {
          return Ie(
            this,
            function (e) {
              return void 0 === e
                ? me.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return A(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              C(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return A(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = C(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return A(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return A(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (me.cleanData(y(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return me.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Ie(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                o = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !at.test(e) &&
                !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = me.htmlPrefilter(e);
                try {
                  for (; n < o; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (me.cleanData(y(t, !1)), (t.innerHTML = e));
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
          var n = [];
          return A(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              me.inArray(this, n) < 0 &&
                (me.cleanData(y(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      me.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, r) {
          me.fn[e] = function (e) {
            for (var t, n = [], o = me(e), i = o.length - 1, a = 0; a <= i; a++)
              (t = a === i ? this : this.clone(!0)),
                me(o[a])[r](t),
                K.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var lt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
      ct = /^--/,
      ut = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = ie), t.getComputedStyle(e);
      },
      dt = function (e, t, n) {
        var o,
          i,
          a = {};
        for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = n.call(e)), t)) e.style[i] = a[i];
        return o;
      },
      pt = new RegExp(Ge.join("|"), "i");
    !(function () {
      function e() {
        if (c) {
          (l.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (c.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            Ve.appendChild(l).appendChild(c);
          var e = ie.getComputedStyle(c);
          (n = "1%" !== e.top),
            (s = 12 === t(e.marginLeft)),
            (c.style.right = "60%"),
            (a = 36 === t(e.right)),
            (o = 36 === t(e.width)),
            (c.style.position = "absolute"),
            (i = 12 === t(c.offsetWidth / 3)),
            Ve.removeChild(l),
            (c = null);
        }
      }
      function t(e) {
        return Math.round(parseFloat(e));
      }
      var n,
        o,
        i,
        a,
        r,
        s,
        l = de.createElement("div"),
        c = de.createElement("div");
      c.style &&
        ((c.style.backgroundClip = "content-box"),
        (c.cloneNode(!0).style.backgroundClip = ""),
        (ue.clearCloneStyle = "content-box" === c.style.backgroundClip),
        me.extend(ue, {
          boxSizingReliable: function () {
            return e(), o;
          },
          pixelBoxStyles: function () {
            return e(), a;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), s;
          },
          scrollboxSize: function () {
            return e(), i;
          },
          reliableTrDimensions: function () {
            var e, t, n, o;
            return (
              null == r &&
                ((e = de.createElement("table")),
                (t = de.createElement("tr")),
                (n = de.createElement("div")),
                (e.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (t.style.cssText = "border:1px solid"),
                (t.style.height = "1px"),
                (n.style.height = "9px"),
                (n.style.display = "block"),
                Ve.appendChild(e).appendChild(t).appendChild(n),
                (o = ie.getComputedStyle(t)),
                (r =
                  parseInt(o.height, 10) +
                    parseInt(o.borderTopWidth, 10) +
                    parseInt(o.borderBottomWidth, 10) ===
                  t.offsetHeight),
                Ve.removeChild(e)),
              r
            );
          },
        }));
    })();
    var ft = ["Webkit", "Moz", "ms"],
      ht = de.createElement("div").style,
      mt = {},
      gt = /^(none|table(?!-c[ea]).+)/,
      vt = { position: "absolute", visibility: "hidden", display: "block" },
      yt = { letterSpacing: "0", fontWeight: "400" };
    me.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = j(e, "opacity");
              return "" === n ? "1" : n;
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
      style: function (e, t, n, o) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            a,
            r,
            s = p(t),
            l = ct.test(t),
            c = e.style;
          if (
            (l || (t = q(s)),
            (r = me.cssHooks[t] || me.cssHooks[s]),
            void 0 === n)
          )
            return r && "get" in r && void 0 !== (i = r.get(e, !1, o))
              ? i
              : c[t];
          "string" == (a = typeof n) &&
            (i = We.exec(n)) &&
            i[1] &&
            ((n = f(e, t, i)), (a = "number")),
            null != n &&
              n == n &&
              ("number" !== a ||
                l ||
                (n += (i && i[3]) || (me.cssNumber[s] ? "" : "px")),
              ue.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (c[t] = "inherit"),
              (r && "set" in r && void 0 === (n = r.set(e, n, o))) ||
                (l ? c.setProperty(t, n) : (c[t] = n)));
        }
      },
      css: function (e, t, n, o) {
        var i,
          a,
          r,
          s = p(t);
        return (
          ct.test(t) || (t = q(s)),
          (r = me.cssHooks[t] || me.cssHooks[s]) &&
            "get" in r &&
            (i = r.get(e, !0, n)),
          void 0 === i && (i = j(e, t, o)),
          "normal" === i && t in yt && (i = yt[t]),
          "" === n || n
            ? ((a = parseFloat(i)), !0 === n || isFinite(a) ? a || 0 : i)
            : i
        );
      },
    }),
      me.each(["height", "width"], function (e, l) {
        me.cssHooks[l] = {
          get: function (e, t, n) {
            if (t)
              return !gt.test(me.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? I(e, l, n)
                : dt(e, vt, function () {
                    return I(e, l, n);
                  });
          },
          set: function (e, t, n) {
            var o,
              i = ut(e),
              a = !ue.scrollboxSize() && "absolute" === i.position,
              r = (a || n) && "border-box" === me.css(e, "boxSizing", !1, i),
              s = n ? D(e, l, n, r, i) : 0;
            return (
              r &&
                a &&
                (s -= Math.ceil(
                  e["offset" + l[0].toUpperCase() + l.slice(1)] -
                    parseFloat(i[l]) -
                    D(e, l, "border", !1, i) -
                    0.5
                )),
              s &&
                (o = We.exec(t)) &&
                "px" !== (o[3] || "px") &&
                ((e.style[l] = t), (t = me.css(e, l))),
              N(0, t, s)
            );
          },
        };
      }),
      (me.cssHooks.marginLeft = L(ue.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(j(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                dt(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      me.each({ margin: "", padding: "", border: "Width" }, function (i, a) {
        (me.cssHooks[i + a] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, o = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + Ge[t] + a] = o[t] || o[t - 2] || o[0];
            return n;
          },
        }),
          "margin" !== i && (me.cssHooks[i + a].set = N);
      }),
      me.fn.extend({
        css: function (e, t) {
          return Ie(
            this,
            function (e, t, n) {
              var o,
                i,
                a = {},
                r = 0;
              if (Array.isArray(t)) {
                for (o = ut(e), i = t.length; r < i; r++)
                  a[t[r]] = me.css(e, t[r], !1, o);
                return a;
              }
              return void 0 !== n ? me.style(e, t, n) : me.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((me.Tween = P).prototype = {
        constructor: P,
        init: function (e, t, n, o, i, a) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || me.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = o),
            (this.unit = a || (me.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = P.propHooks[this.prop];
          return e && e.get ? e.get(this) : P.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = P.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  me.easing[this.easing](
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
            n && n.set ? n.set(this) : P.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = P.prototype),
      ((P.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = me.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            me.fx.step[e.prop]
              ? me.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!me.cssHooks[e.prop] && null == e.elem.style[q(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : me.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = P.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (me.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (me.fx = P.prototype.init),
      (me.fx.step = {});
    var bt,
      wt,
      xt,
      kt,
      $t = /^(?:toggle|show|hide)$/,
      Ct = /queueHooks$/;
    (me.Animation = me.extend(H, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return f(n.elem, e, We.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        ne(e) ? ((t = e), (e = ["*"])) : (e = e.match(qe));
        for (var n, o = 0, i = e.length; o < i; o++)
          (n = e[o]),
            (H.tweeners[n] = H.tweeners[n] || []),
            H.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var o,
            i,
            a,
            r,
            s,
            l,
            c,
            u,
            d = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            m = e.nodeType && Xe(e),
            g = Me.get(e, "fxshow");
          for (o in (n.queue ||
            (null == (r = me._queueHooks(e, "fx")).unqueued &&
              ((r.unqueued = 0),
              (s = r.empty.fire),
              (r.empty.fire = function () {
                r.unqueued || s();
              })),
            r.unqueued++,
            p.always(function () {
              p.always(function () {
                r.unqueued--, me.queue(e, "fx").length || r.empty.fire();
              });
            })),
          t))
            if (((i = t[o]), $t.test(i))) {
              if (
                (delete t[o],
                (a = a || "toggle" === i),
                i === (m ? "hide" : "show"))
              ) {
                if ("show" !== i || !g || void 0 === g[o]) continue;
                m = !0;
              }
              f[o] = (g && g[o]) || me.style(e, o);
            }
          if ((l = !me.isEmptyObject(t)) || !me.isEmptyObject(f))
            for (o in (d &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (c = g && g.display) && (c = Me.get(e, "display")),
              "none" === (u = me.css(e, "display")) &&
                (c
                  ? (u = c)
                  : (v([e], !0),
                    (c = e.style.display || c),
                    (u = me.css(e, "display")),
                    v([e]))),
              ("inline" === u || ("inline-block" === u && null != c)) &&
                "none" === me.css(e, "float") &&
                (l ||
                  (p.done(function () {
                    h.display = c;
                  }),
                  null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (l = !1),
            f))
              l ||
                (g
                  ? "hidden" in g && (m = g.hidden)
                  : (g = Me.access(e, "fxshow", { display: c })),
                a && (g.hidden = !m),
                m && v([e], !0),
                p.done(function () {
                  for (o in (m || v([e]), Me.remove(e, "fxshow"), f))
                    me.style(e, o, f[o]);
                })),
                (l = R(m ? g[o] : 0, o, p)),
                o in g ||
                  ((g[o] = l.start), m && ((l.end = l.start), (l.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? H.prefilters.unshift(e) : H.prefilters.push(e);
      },
    })),
      (me.speed = function (e, t, n) {
        var o =
          e && "object" == typeof e
            ? me.extend({}, e)
            : {
                complete: n || (!n && t) || (ne(e) && e),
                duration: e,
                easing: (n && t) || (t && !ne(t) && t),
              };
        return (
          me.fx.off
            ? (o.duration = 0)
            : "number" != typeof o.duration &&
              (o.duration in me.fx.speeds
                ? (o.duration = me.fx.speeds[o.duration])
                : (o.duration = me.fx.speeds._default)),
          (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
          (o.old = o.complete),
          (o.complete = function () {
            ne(o.old) && o.old.call(this), o.queue && me.dequeue(this, o.queue);
          }),
          o
        );
      }),
      me.fn.extend({
        fadeTo: function (e, t, n, o) {
          return this.filter(Xe)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, o);
        },
        animate: function (t, e, n, o) {
          var i = me.isEmptyObject(t),
            a = me.speed(e, n, o),
            r = function () {
              var e = H(this, me.extend({}, t), a);
              (i || Me.get(this, "finish")) && e.stop(!0);
            };
          return (
            (r.finish = r),
            i || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
          );
        },
        stop: function (i, e, a) {
          var r = function (e) {
            var t = e.stop;
            delete e.stop, t(a);
          };
          return (
            "string" != typeof i && ((a = e), (e = i), (i = void 0)),
            e && this.queue(i || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != i && i + "queueHooks",
                n = me.timers,
                o = Me.get(this);
              if (t) o[t] && o[t].stop && r(o[t]);
              else for (t in o) o[t] && o[t].stop && Ct.test(t) && r(o[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != i && n[t].queue !== i) ||
                  (n[t].anim.stop(a), (e = !1), n.splice(t, 1));
              (!e && a) || me.dequeue(this, i);
            })
          );
        },
        finish: function (r) {
          return (
            !1 !== r && (r = r || "fx"),
            this.each(function () {
              var e,
                t = Me.get(this),
                n = t[r + "queue"],
                o = t[r + "queueHooks"],
                i = me.timers,
                a = n ? n.length : 0;
              for (
                t.finish = !0,
                  me.queue(this, r, []),
                  o && o.stop && o.stop.call(this, !0),
                  e = i.length;
                e--;

              )
                i[e].elem === this &&
                  i[e].queue === r &&
                  (i[e].anim.stop(!0), i.splice(e, 1));
              for (e = 0; e < a; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      me.each(["toggle", "show", "hide"], function (e, o) {
        var i = me.fn[o];
        me.fn[o] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? i.apply(this, arguments)
            : this.animate(M(o, !0), e, t, n);
        };
      }),
      me.each(
        {
          slideDown: M("show"),
          slideUp: M("hide"),
          slideToggle: M("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, o) {
          me.fn[e] = function (e, t, n) {
            return this.animate(o, e, t, n);
          };
        }
      ),
      (me.timers = []),
      (me.fx.tick = function () {
        var e,
          t = 0,
          n = me.timers;
        for (bt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || me.fx.stop(), (bt = void 0);
      }),
      (me.fx.timer = function (e) {
        me.timers.push(e), me.fx.start();
      }),
      (me.fx.interval = 13),
      (me.fx.start = function () {
        wt || ((wt = !0), F());
      }),
      (me.fx.stop = function () {
        wt = null;
      }),
      (me.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (me.fn.delay = function (o, e) {
        return (
          (o = (me.fx && me.fx.speeds[o]) || o),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = ie.setTimeout(e, o);
            t.stop = function () {
              ie.clearTimeout(n);
            };
          })
        );
      }),
      (xt = de.createElement("input")),
      (kt = de.createElement("select").appendChild(de.createElement("option"))),
      (xt.type = "checkbox"),
      (ue.checkOn = "" !== xt.value),
      (ue.optSelected = kt.selected),
      ((xt = de.createElement("input")).value = "t"),
      (xt.type = "radio"),
      (ue.radioValue = "t" === xt.value);
    var _t,
      Tt = me.expr.attrHandle;
    me.fn.extend({
      attr: function (e, t) {
        return Ie(this, me.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          me.removeAttr(this, e);
        });
      },
    }),
      me.extend({
        attr: function (e, t, n) {
          var o,
            i,
            a = e.nodeType;
          if (3 !== a && 8 !== a && 2 !== a)
            return "undefined" == typeof e.getAttribute
              ? me.prop(e, t, n)
              : ((1 === a && me.isXMLDoc(e)) ||
                  (i =
                    me.attrHooks[t.toLowerCase()] ||
                    (me.expr.match.bool.test(t) ? _t : void 0)),
                void 0 !== n
                  ? null === n
                    ? void me.removeAttr(e, t)
                    : i && "set" in i && void 0 !== (o = i.set(e, n, t))
                    ? o
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (o = i.get(e, t))
                  ? o
                  : null == (o = me.find.attr(e, t))
                  ? void 0
                  : o);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!ue.radioValue && "radio" === t && ae(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            o = 0,
            i = t && t.match(qe);
          if (i && 1 === e.nodeType)
            for (; (n = i[o++]); ) e.removeAttribute(n);
        },
      }),
      (_t = {
        set: function (e, t, n) {
          return !1 === t ? me.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      me.each(me.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var r = Tt[t] || me.find.attr;
        Tt[t] = function (e, t, n) {
          var o,
            i,
            a = t.toLowerCase();
          return (
            n ||
              ((i = Tt[a]),
              (Tt[a] = o),
              (o = null != r(e, t, n) ? a : null),
              (Tt[a] = i)),
            o
          );
        };
      });
    var St = /^(?:input|select|textarea|button)$/i,
      At = /^(?:a|area)$/i;
    me.fn.extend({
      prop: function (e, t) {
        return Ie(this, me.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[me.propFix[e] || e];
        });
      },
    }),
      me.extend({
        prop: function (e, t, n) {
          var o,
            i,
            a = e.nodeType;
          if (3 !== a && 8 !== a && 2 !== a)
            return (
              (1 === a && me.isXMLDoc(e)) ||
                ((t = me.propFix[t] || t), (i = me.propHooks[t])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                  ? o
                  : (e[t] = n)
                : i && "get" in i && null !== (o = i.get(e, t))
                ? o
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = me.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : St.test(e.nodeName) || (At.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      ue.optSelected ||
        (me.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      me.each(
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
          me.propFix[this.toLowerCase()] = this;
        }
      ),
      me.fn.extend({
        addClass: function (t) {
          var e, n, o, i, a, r;
          return ne(t)
            ? this.each(function (e) {
                me(this).addClass(t.call(this, e, B(this)));
              })
            : (e = W(t)).length
            ? this.each(function () {
                if (
                  ((o = B(this)), (n = 1 === this.nodeType && " " + z(o) + " "))
                ) {
                  for (a = 0; a < e.length; a++)
                    (i = e[a]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  (r = z(n)), o !== r && this.setAttribute("class", r);
                }
              })
            : this;
        },
        removeClass: function (t) {
          var e, n, o, i, a, r;
          return ne(t)
            ? this.each(function (e) {
                me(this).removeClass(t.call(this, e, B(this)));
              })
            : arguments.length
            ? (e = W(t)).length
              ? this.each(function () {
                  if (
                    ((o = B(this)),
                    (n = 1 === this.nodeType && " " + z(o) + " "))
                  ) {
                    for (a = 0; a < e.length; a++)
                      for (i = e[a]; -1 < n.indexOf(" " + i + " "); )
                        n = n.replace(" " + i + " ", " ");
                    (r = z(n)), o !== r && this.setAttribute("class", r);
                  }
                })
              : this
            : this.attr("class", "");
        },
        toggleClass: function (t, n) {
          var e,
            o,
            i,
            a,
            r = typeof t,
            s = "string" === r || Array.isArray(t);
          return ne(t)
            ? this.each(function (e) {
                me(this).toggleClass(t.call(this, e, B(this), n), n);
              })
            : "boolean" == typeof n && s
            ? n
              ? this.addClass(t)
              : this.removeClass(t)
            : ((e = W(t)),
              this.each(function () {
                if (s)
                  for (a = me(this), i = 0; i < e.length; i++)
                    (o = e[i]),
                      a.hasClass(o) ? a.removeClass(o) : a.addClass(o);
                else
                  (void 0 !== t && "boolean" !== r) ||
                    ((o = B(this)) && Me.set(this, "__className__", o),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        o || !1 === t ? "" : Me.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (e) {
          var t,
            n,
            o = 0;
          for (t = " " + e + " "; (n = this[o++]); )
            if (1 === n.nodeType && -1 < (" " + z(B(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var Et = /\r/g;
    me.fn.extend({
      val: function (n) {
        var o,
          e,
          i,
          t = this[0];
        return arguments.length
          ? ((i = ne(n)),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = i ? n.call(this, e, me(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = me.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((o =
                  me.valHooks[this.type] ||
                  me.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in o &&
                  void 0 !== o.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (o =
              me.valHooks[t.type] || me.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in o &&
            void 0 !== (e = o.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
            ? e.replace(Et, "")
            : null == e
            ? ""
            : e
          : void 0;
      },
    }),
      me.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = me.find.attr(e, "value");
              return null != t ? t : z(me.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                o,
                i = e.options,
                a = e.selectedIndex,
                r = "select-one" === e.type,
                s = r ? null : [],
                l = r ? a + 1 : i.length;
              for (o = a < 0 ? l : r ? a : 0; o < l; o++)
                if (
                  ((n = i[o]).selected || o === a) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !ae(n.parentNode, "optgroup"))
                ) {
                  if (((t = me(n).val()), r)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              for (
                var n, o, i = e.options, a = me.makeArray(t), r = i.length;
                r--;

              )
                ((o = i[r]).selected =
                  -1 < me.inArray(me.valHooks.option.get(o), a)) && (n = !0);
              return n || (e.selectedIndex = -1), a;
            },
          },
        },
      }),
      me.each(["radio", "checkbox"], function () {
        (me.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < me.inArray(me(e).val(), t));
          },
        }),
          ue.checkOn ||
            (me.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var jt = ie.location,
      Lt = { guid: Date.now() },
      qt = /\?/;
    me.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        t = new ie.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          me.error(
            "Invalid XML: " +
              (n
                ? me
                    .map(n.childNodes, function (e) {
                      return e.textContent;
                    })
                    .join("\n")
                : e)
          ),
        t
      );
    };
    var Nt = /^(?:focusinfocus|focusoutblur)$/,
      Dt = function (e) {
        e.stopPropagation();
      };
    me.extend(me.event, {
      trigger: function (e, t, n, o) {
        var i,
          a,
          r,
          s,
          l,
          c,
          u,
          d,
          p = [n || de],
          f = ce.call(e, "type") ? e.type : e,
          h = ce.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((a = d = r = n = n || de),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Nt.test(f + me.event.triggered) &&
            (-1 < f.indexOf(".") &&
              ((f = (h = f.split(".")).shift()), h.sort()),
            (l = f.indexOf(":") < 0 && "on" + f),
            ((e = e[me.expando]
              ? e
              : new me.Event(f, "object" == typeof e && e)).isTrigger = o
              ? 2
              : 3),
            (e.namespace = h.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : me.makeArray(t, [e])),
            (u = me.event.special[f] || {}),
            o || !u.trigger || !1 !== u.trigger.apply(n, t)))
        ) {
          if (!o && !u.noBubble && !oe(n)) {
            for (
              s = u.delegateType || f, Nt.test(s + f) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              p.push(a), (r = a);
            r === (n.ownerDocument || de) &&
              p.push(r.defaultView || r.parentWindow || ie);
          }
          for (i = 0; (a = p[i++]) && !e.isPropagationStopped(); )
            (d = a),
              (e.type = 1 < i ? s : u.bindType || f),
              (c =
                (Me.get(a, "events") || Object.create(null))[e.type] &&
                Me.get(a, "handle")) && c.apply(a, t),
              (c = l && a[l]) &&
                c.apply &&
                Oe(a) &&
                ((e.result = c.apply(a, t)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = f),
            o ||
              e.isDefaultPrevented() ||
              (u._default && !1 !== u._default.apply(p.pop(), t)) ||
              !Oe(n) ||
              (l &&
                ne(n[f]) &&
                !oe(n) &&
                ((r = n[l]) && (n[l] = null),
                (me.event.triggered = f),
                e.isPropagationStopped() && d.addEventListener(f, Dt),
                n[f](),
                e.isPropagationStopped() && d.removeEventListener(f, Dt),
                (me.event.triggered = void 0),
                r && (n[l] = r))),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var o = me.extend(new me.Event(), n, { type: e, isSimulated: !0 });
        me.event.trigger(o, null, t);
      },
    }),
      me.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            me.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return me.event.trigger(e, t, n, !0);
        },
      });
    var It = /\[\]$/,
      Pt = /\r?\n/g,
      Ft = /^(?:submit|button|image|reset|file)$/i,
      Ot = /^(?:input|select|textarea|keygen)/i;
    (me.param = function (e, t) {
      var n,
        o = [],
        i = function (e, t) {
          var n = ne(t) ? t() : t;
          o[o.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !me.isPlainObject(e)))
        me.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) G(n, e[n], t, i);
      return o.join("&");
    }),
      me.fn.extend({
        serialize: function () {
          return me.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = me.prop(this, "elements");
            return e ? me.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !me(this).is(":disabled") &&
                Ot.test(this.nodeName) &&
                !Ft.test(e) &&
                (this.checked || !Ze.test(e))
              );
            })
            .map(function (e, t) {
              var n = me(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? me.map(n, function (e) {
                    return { name: t.name, value: e.replace(Pt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Pt, "\r\n") };
            })
            .get();
        },
      });
    var Mt = /%20/g,
      Rt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Bt = /^(?:GET|HEAD)$/,
      Wt = /^\/\//,
      Gt = {},
      Vt = {},
      Ut = "*/".concat("*"),
      Yt = de.createElement("a");
    (Yt.href = jt.href),
      me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: jt.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              jt.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Ut,
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
            "text xml": me.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Y(Y(e, me.ajaxSettings), t) : Y(me.ajaxSettings, e);
        },
        ajaxPrefilter: V(Gt),
        ajaxTransport: V(Vt),
        ajax: function (e, t) {
          function n(e, t, n, o) {
            var i,
              a,
              r,
              s,
              l,
              c = t;
            h ||
              ((h = !0),
              f && ie.clearTimeout(f),
              (u = void 0),
              (p = o || ""),
              (k.readyState = 0 < e ? 4 : 0),
              (i = (200 <= e && e < 300) || 304 === e),
              n &&
                (s = (function (e, t, n) {
                  for (
                    var o, i, a, r, s = e.contents, l = e.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === o &&
                        (o = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (o)
                    for (i in s)
                      if (s[i] && s[i].test(o)) {
                        l.unshift(i);
                        break;
                      }
                  if (l[0] in n) a = l[0];
                  else {
                    for (i in n) {
                      if (!l[0] || e.converters[i + " " + l[0]]) {
                        a = i;
                        break;
                      }
                      r || (r = i);
                    }
                    a = a || r;
                  }
                  if (a) return a !== l[0] && l.unshift(a), n[a];
                })(g, k, n)),
              !i &&
                -1 < me.inArray("script", g.dataTypes) &&
                me.inArray("json", g.dataTypes) < 0 &&
                (g.converters["text script"] = function () {}),
              (s = (function (e, t, n, o) {
                var i,
                  a,
                  r,
                  s,
                  l,
                  c = {},
                  u = e.dataTypes.slice();
                if (u[1])
                  for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                for (a = u.shift(); a; )
                  if (
                    (e.responseFields[a] && (n[e.responseFields[a]] = t),
                    !l &&
                      o &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (l = a),
                    (a = u.shift()))
                  )
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                      if (!(r = c[l + " " + a] || c["* " + a]))
                        for (i in c)
                          if (
                            (s = i.split(" "))[1] === a &&
                            (r = c[l + " " + s[0]] || c["* " + s[0]])
                          ) {
                            !0 === r
                              ? (r = c[i])
                              : !0 !== c[i] && ((a = s[0]), u.unshift(s[1]));
                            break;
                          }
                      if (!0 !== r)
                        if (r && e["throws"]) t = r(t);
                        else
                          try {
                            t = r(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: r
                                ? e
                                : "No conversion from " + l + " to " + a,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(g, s, k, i)),
              i
                ? (g.ifModified &&
                    ((l = k.getResponseHeader("Last-Modified")) &&
                      (me.lastModified[d] = l),
                    (l = k.getResponseHeader("etag")) && (me.etag[d] = l)),
                  204 === e || "HEAD" === g.type
                    ? (c = "nocontent")
                    : 304 === e
                    ? (c = "notmodified")
                    : ((c = s.state), (a = s.data), (i = !(r = s.error))))
                : ((r = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
              (k.status = e),
              (k.statusText = (t || c) + ""),
              i ? b.resolveWith(v, [a, c, k]) : b.rejectWith(v, [k, c, r]),
              k.statusCode(x),
              (x = void 0),
              m &&
                y.trigger(i ? "ajaxSuccess" : "ajaxError", [k, g, i ? a : r]),
              w.fireWith(v, [k, c]),
              m &&
                (y.trigger("ajaxComplete", [k, g]),
                --me.active || me.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var u,
            d,
            p,
            o,
            f,
            i,
            h,
            m,
            a,
            r,
            g = me.ajaxSetup({}, t),
            v = g.context || g,
            y = g.context && (v.nodeType || v.jquery) ? me(v) : me.event,
            b = me.Deferred(),
            w = me.Callbacks("once memory"),
            x = g.statusCode || {},
            s = {},
            l = {},
            c = "canceled",
            k = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (h) {
                  if (!o)
                    for (o = {}; (t = zt.exec(p)); )
                      o[t[1].toLowerCase() + " "] = (
                        o[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  t = o[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return h ? p : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == h &&
                    ((e = l[e.toLowerCase()] = l[e.toLowerCase()] || e),
                    (s[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == h && (g.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (h) k.always(e[k.status]);
                  else for (t in e) x[t] = [x[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || c;
                return u && u.abort(t), n(0, t), this;
              },
            };
          if (
            (b.promise(k),
            (g.url = ((e || g.url || jt.href) + "").replace(
              Wt,
              jt.protocol + "//"
            )),
            (g.type = t.method || t.type || g.method || g.type),
            (g.dataTypes = (g.dataType || "*").toLowerCase().match(qe) || [""]),
            null == g.crossDomain)
          ) {
            i = de.createElement("a");
            try {
              (i.href = g.url),
                (i.href = i.href),
                (g.crossDomain =
                  Yt.protocol + "//" + Yt.host != i.protocol + "//" + i.host);
            } catch (e) {
              g.crossDomain = !0;
            }
          }
          if (
            (g.data &&
              g.processData &&
              "string" != typeof g.data &&
              (g.data = me.param(g.data, g.traditional)),
            U(Gt, g, t, k),
            h)
          )
            return k;
          for (a in ((m = me.event && g.global) &&
            0 == me.active++ &&
            me.event.trigger("ajaxStart"),
          (g.type = g.type.toUpperCase()),
          (g.hasContent = !Bt.test(g.type)),
          (d = g.url.replace(Rt, "")),
          g.hasContent
            ? g.data &&
              g.processData &&
              0 ===
                (g.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (g.data = g.data.replace(Mt, "+"))
            : ((r = g.url.slice(d.length)),
              g.data &&
                (g.processData || "string" == typeof g.data) &&
                ((d += (qt.test(d) ? "&" : "?") + g.data), delete g.data),
              !1 === g.cache &&
                ((d = d.replace(Ht, "$1")),
                (r = (qt.test(d) ? "&" : "?") + "_=" + Lt.guid++ + r)),
              (g.url = d + r)),
          g.ifModified &&
            (me.lastModified[d] &&
              k.setRequestHeader("If-Modified-Since", me.lastModified[d]),
            me.etag[d] && k.setRequestHeader("If-None-Match", me.etag[d])),
          ((g.data && g.hasContent && !1 !== g.contentType) || t.contentType) &&
            k.setRequestHeader("Content-Type", g.contentType),
          k.setRequestHeader(
            "Accept",
            g.dataTypes[0] && g.accepts[g.dataTypes[0]]
              ? g.accepts[g.dataTypes[0]] +
                  ("*" !== g.dataTypes[0] ? ", " + Ut + "; q=0.01" : "")
              : g.accepts["*"]
          ),
          g.headers))
            k.setRequestHeader(a, g.headers[a]);
          if (g.beforeSend && (!1 === g.beforeSend.call(v, k, g) || h))
            return k.abort();
          if (
            ((c = "abort"),
            w.add(g.complete),
            k.done(g.success),
            k.fail(g.error),
            (u = U(Vt, g, t, k)))
          ) {
            if (((k.readyState = 1), m && y.trigger("ajaxSend", [k, g]), h))
              return k;
            g.async &&
              0 < g.timeout &&
              (f = ie.setTimeout(function () {
                k.abort("timeout");
              }, g.timeout));
            try {
              (h = !1), u.send(s, n);
            } catch (e) {
              if (h) throw e;
              n(-1, e);
            }
          } else n(-1, "No Transport");
          return k;
        },
        getJSON: function (e, t, n) {
          return me.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return me.get(e, void 0, t, "script");
        },
      }),
      me.each(["get", "post"], function (e, i) {
        me[i] = function (e, t, n, o) {
          return (
            ne(t) && ((o = o || n), (n = t), (t = void 0)),
            me.ajax(
              me.extend(
                { url: e, type: i, dataType: o, data: t, success: n },
                me.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      me.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (me._evalUrl = function (e, t, n) {
        return me.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            me.globalEval(e, t, n);
          },
        });
      }),
      me.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (ne(e) && (e = e.call(this[0])),
              (t = me(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (n) {
          return ne(n)
            ? this.each(function (e) {
                me(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = me(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = ne(t);
          return this.each(function (e) {
            me(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                me(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (me.expr.pseudos.hidden = function (e) {
        return !me.expr.pseudos.visible(e);
      }),
      (me.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (me.ajaxSettings.xhr = function () {
        try {
          return new ie.XMLHttpRequest();
        } catch (e) {}
      });
    var Xt = { 0: 200, 1223: 204 },
      Qt = me.ajaxSettings.xhr();
    (ue.cors = !!Qt && "withCredentials" in Qt),
      (ue.ajax = Qt = !!Qt),
      me.ajaxTransport(function (i) {
        var a, r;
        if (ue.cors || (Qt && !i.crossDomain))
          return {
            send: function (e, t) {
              var n,
                o = i.xhr();
              if (
                (o.open(i.type, i.url, i.async, i.username, i.password),
                i.xhrFields)
              )
                for (n in i.xhrFields) o[n] = i.xhrFields[n];
              for (n in (i.mimeType &&
                o.overrideMimeType &&
                o.overrideMimeType(i.mimeType),
              i.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                o.setRequestHeader(n, e[n]);
              (a = function (e) {
                return function () {
                  a &&
                    ((a =
                      r =
                      o.onload =
                      o.onerror =
                      o.onabort =
                      o.ontimeout =
                      o.onreadystatechange =
                        null),
                    "abort" === e
                      ? o.abort()
                      : "error" === e
                      ? "number" != typeof o.status
                        ? t(0, "error")
                        : t(o.status, o.statusText)
                      : t(
                          Xt[o.status] || o.status,
                          o.statusText,
                          "text" !== (o.responseType || "text") ||
                            "string" != typeof o.responseText
                            ? { binary: o.response }
                            : { text: o.responseText },
                          o.getAllResponseHeaders()
                        ));
                };
              }),
                (o.onload = a()),
                (r = o.onerror = o.ontimeout = a("error")),
                void 0 !== o.onabort
                  ? (o.onabort = r)
                  : (o.onreadystatechange = function () {
                      4 === o.readyState &&
                        ie.setTimeout(function () {
                          a && r();
                        });
                    }),
                (a = a("abort"));
              try {
                o.send((i.hasContent && i.data) || null);
              } catch (e) {
                if (a) throw e;
              }
            },
            abort: function () {
              a && a();
            },
          };
      }),
      me.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      me.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return me.globalEval(e), e;
          },
        },
      }),
      me.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      me.ajaxTransport("script", function (n) {
        var o, i;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (e, t) {
              (o = me("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (i = function (e) {
                    o.remove(),
                      (i = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                de.head.appendChild(o[0]);
            },
            abort: function () {
              i && i();
            },
          };
      });
    var Kt,
      Jt = [],
      Zt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Jt.pop() || me.expando + "_" + Lt.guid++;
        return (this[e] = !0), e;
      },
    }),
      me.ajaxPrefilter("json jsonp", function (e, t, n) {
        var o,
          i,
          a,
          r =
            !1 !== e.jsonp &&
            (Zt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Zt.test(e.data) &&
                "data");
        if (r || "jsonp" === e.dataTypes[0])
          return (
            (o = e.jsonpCallback =
              ne(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            r
              ? (e[r] = e[r].replace(Zt, "$1" + o))
              : !1 !== e.jsonp &&
                (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
            (e.converters["script json"] = function () {
              return a || me.error(o + " was not called"), a[0];
            }),
            (e.dataTypes[0] = "json"),
            (i = ie[o]),
            (ie[o] = function () {
              a = arguments;
            }),
            n.always(function () {
              void 0 === i ? me(ie).removeProp(o) : (ie[o] = i),
                e[o] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(o)),
                a && ne(i) && i(a[0]),
                (a = i = void 0);
            }),
            "script"
          );
      }),
      (ue.createHTMLDocument =
        (((Kt = de.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Kt.childNodes.length)),
      (me.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (ue.createHTMLDocument
                ? (((o = (t =
                    de.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = de.location.href),
                  t.head.appendChild(o))
                : (t = de)),
            (a = !n && []),
            (i = Se.exec(e))
              ? [t.createElement(i[1])]
              : ((i = w([e], t, a)),
                a && a.length && me(a).remove(),
                me.merge([], i.childNodes)));
        var o, i, a;
      }),
      (me.fn.load = function (e, t, n) {
        var o,
          i,
          a,
          r = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((o = z(e.slice(s))), (e = e.slice(0, s))),
          ne(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (i = "POST"),
          0 < r.length &&
            me
              .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
              .done(function (e) {
                (a = arguments),
                  r.html(o ? me("<div>").append(me.parseHTML(e)).find(o) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    r.each(function () {
                      n.apply(this, a || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (me.expr.pseudos.animated = function (t) {
        return me.grep(me.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (me.offset = {
        setOffset: function (e, t, n) {
          var o,
            i,
            a,
            r,
            s,
            l,
            c = me.css(e, "position"),
            u = me(e),
            d = {};
          "static" === c && (e.style.position = "relative"),
            (s = u.offset()),
            (a = me.css(e, "top")),
            (l = me.css(e, "left")),
            ("absolute" === c || "fixed" === c) && -1 < (a + l).indexOf("auto")
              ? ((r = (o = u.position()).top), (i = o.left))
              : ((r = parseFloat(a) || 0), (i = parseFloat(l) || 0)),
            ne(t) && (t = t.call(e, n, me.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + r),
            null != t.left && (d.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, d) : u.css(d);
        },
      }),
      me.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  me.offset.setOffset(this, t, e);
                });
          var e,
            n,
            o = this[0];
          return o
            ? o.getClientRects().length
              ? ((e = o.getBoundingClientRect()),
                (n = o.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              o = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === me.css(o, "position"))
              t = o.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = o.ownerDocument,
                  e = o.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === me.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== o &&
                1 === e.nodeType &&
                (((i = me(e).offset()).top += me.css(e, "borderTopWidth", !0)),
                (i.left += me.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - me.css(o, "marginTop", !0),
              left: t.left - i.left - me.css(o, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === me.css(e, "position");

            )
              e = e.offsetParent;
            return e || Ve;
          });
        },
      }),
      me.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, i) {
          var a = "pageYOffset" === i;
          me.fn[t] = function (e) {
            return Ie(
              this,
              function (e, t, n) {
                var o;
                if (
                  (oe(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                  void 0 === n)
                )
                  return o ? o[i] : e[t];
                o
                  ? o.scrollTo(a ? o.pageXOffset : n, a ? n : o.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      me.each(["top", "left"], function (e, n) {
        me.cssHooks[n] = L(ue.pixelPosition, function (e, t) {
          if (t)
            return (t = j(e, n)), lt.test(t) ? me(e).position()[n] + "px" : t;
        });
      }),
      me.each({ Height: "height", Width: "width" }, function (r, s) {
        me.each(
          { padding: "inner" + r, content: s, "": "outer" + r },
          function (o, a) {
            me.fn[a] = function (e, t) {
              var n = arguments.length && (o || "boolean" != typeof e),
                i = o || (!0 === e || !0 === t ? "margin" : "border");
              return Ie(
                this,
                function (e, t, n) {
                  var o;
                  return oe(e)
                    ? 0 === a.indexOf("outer")
                      ? e["inner" + r]
                      : e.document.documentElement["client" + r]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + r],
                        o["scroll" + r],
                        e.body["offset" + r],
                        o["offset" + r],
                        o["client" + r]
                      ))
                    : void 0 === n
                    ? me.css(e, t, i)
                    : me.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      me.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          me.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      me.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, o) {
          return this.on(t, e, n, o);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      me.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          me.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      );
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (me.proxy = function (e, t) {
      var n, o, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ne(e)))
        return (
          (o = se.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, o.concat(se.call(arguments)));
          }).guid = e.guid =
            e.guid || me.guid++),
          i
        );
    }),
      (me.holdReady = function (e) {
        e ? me.readyWait++ : me.ready(!0);
      }),
      (me.isArray = Array.isArray),
      (me.parseJSON = JSON.parse),
      (me.nodeName = ae),
      (me.isFunction = ne),
      (me.isWindow = oe),
      (me.camelCase = p),
      (me.type = g),
      (me.now = Date.now),
      (me.isNumeric = function (e) {
        var t = me.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (me.trim = function (e) {
        return null == e ? "" : (e + "").replace(en, "$1");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return me;
        });
    var tn = ie.jQuery,
      nn = ie.$;
    return (
      (me.noConflict = function (e) {
        return (
          ie.$ === me && (ie.$ = nn),
          e && ie.jQuery === me && (ie.jQuery = tn),
          me
        );
      }),
      void 0 === e && (ie.jQuery = ie.$ = me),
      me
    );
  }),
  (window.initBootstrapValidation = initBootstrapValidation),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
!(function () {
  "use strict";
  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    3 < e[0]
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(),
  (function (r) {
    "use strict";
    function i(e) {
      var t,
        n =
          e.attr("data-target") ||
          ((t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
      return r(document).find(n);
    }
    function s(o) {
      return this.each(function () {
        var e = r(this),
          t = e.data("bs.collapse"),
          n = r.extend({}, l.DEFAULTS, e.data(), "object" == typeof o && o);
        !t && n.toggle && /show|hide/.test(o) && (n.toggle = !1),
          t || e.data("bs.collapse", (t = new l(this, n))),
          "string" == typeof o && t[o]();
      });
    }
    var l = function (e, t) {
      (this.$element = r(e)),
        (this.options = r.extend({}, l.DEFAULTS, t)),
        (this.$trigger = r(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (l.VERSION = "4.3.2.custom"),
      (l.TRANSITION_DURATION = 350),
      (l.DEFAULTS = { toggle: !0 }),
      (l.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (l.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            t =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(t && t.length && (e = t.data("bs.collapse")) && e.transitioning)
          ) {
            var n = r.Event("show.bs.collapse");
            if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
              t &&
                t.length &&
                (s.call(t, "hide"), e || t.data("bs.collapse", null));
              var o = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [o](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var i = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [o](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!r.support.transition) return i.call(this);
              var a = r.camelCase(["scroll", o].join("-"));
              this.$element
                .one("bsTransitionEnd", r.proxy(i, this))
                .emulateTransitionEnd(l.TRANSITION_DURATION)
                [o](this.$element[0][a]);
            }
          }
        }
      }),
      (l.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = r.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var t = this.dimension();
            this.$element[t](this.$element[t]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var n = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return r.support.transition
              ? void this.$element[t](0)
                  .one("bsTransitionEnd", r.proxy(n, this))
                  .emulateTransitionEnd(l.TRANSITION_DURATION)
              : n.call(this);
          }
        }
      }),
      (l.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (l.prototype.getParent = function () {
        return r(document)
          .find(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            r.proxy(function (e, t) {
              var n = r(t);
              this.addAriaAndCollapsedClass(i(n), n);
            }, this)
          )
          .end();
      }),
      (l.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
          t.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var e = r.fn.collapse;
    (r.fn.collapse = s),
      (r.fn.collapse.Constructor = l),
      (r.fn.collapse.noConflict = function () {
        return (r.fn.collapse = e), this;
      }),
      r(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (e) {
          var t = r(this);
          t.attr("data-target") || e.preventDefault();
          var n = i(t),
            o = n.data("bs.collapse") ? "toggle" : t.data();
          s.call(n, o);
        }
      );
  })(jQuery),
  (function (o) {
    "use strict";
    function e() {
      var e = document.createElement("bootstrap"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in t) if (void 0 !== e.style[n]) return { end: t[n] };
      return !1;
    }
    (o.fn.emulateTransitionEnd = function (e) {
      var t = !1,
        n = this;
      return (
        o(this).one("bsTransitionEnd", function () {
          t = !0;
        }),
        setTimeout(function () {
          t || o(n).trigger(o.support.transition.end);
        }, e),
        this
      );
    }),
      o(function () {
        (o.support.transition = e()),
          o.support.transition &&
            (o.event.special.bsTransitionEnd = {
              bindType: o.support.transition.end,
              delegateType: o.support.transition.end,
              handle: function (e) {
                return o(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  (function (o, t) {
    function i(e) {
      o.pagelessReset(),
        v.inited || (v.inited = !0),
        e && o.extend(v, e),
        v.pagination,
        n();
    }
    function a(e) {
      (f = e), u && (f ? u.fadeIn("normal") : u.fadeOut("normal"));
    }
    function r() {
      return d === t
        ? o(document).height() - p.scrollTop() - p.height()
        : p[0].scrollHeight - p.scrollTop() - p.height();
    }
    function s(e) {
      var t = v[e];
      return o.isFunction(v[e]) ? t() : t;
    }
    function l() {
      p && p.unbind(h);
    }
    function n() {
      p.bind(m + " " + g, e).trigger(m);
    }
    function e() {
      var e = s("currentPage");
      if (s("totalPages") <= e)
        o.isFunction(v.currentPage) ||
          o.isFunction(v.totalPages) ||
          (l(), v.end && v.end.call());
      else if (!f && r() < v.distance) {
        var t = s("url"),
          n = s("params");
        a(!0),
          e++,
          o.isFunction(v.currentPage) || (v.currentPage = e),
          o.extend(n, { page: e }),
          setTimeout(function () {
            o.ajax({
              data: n,
              dataType: "html",
              url: t,
              method: v.method,
              success: function (e) {
                o.isFunction(v.scrape) && (e = v.scrape(e)),
                  u ? u.before(e) : c.append(e),
                  a(!1),
                  v.complete && v.complete.call();
              },
            });
          }, v.delay);
      }
    }
    var c,
      u,
      d,
      p,
      f = !1,
      h = ".pageless",
      m = "scroll" + h,
      g = "resize" + h,
      v = {};
    (o.pageless = function (e) {
      o.isFunction(e) ? e.call() : i(e);
    }),
      (o.pagelessReset = function () {
        var e = v.inited;
        (v = {
          container: t,
          currentPage: 1,
          delay: 0,
          distance: 100,
          pagination: ".pagination",
          params: {},
          url: location.href,
          loaderImage: "images/load.gif",
          method: "get",
        }),
          (d = v.container),
          (p = o(d)),
          e && l(),
          v.end && v.end.call();
      }),
      (o.pagelessCurrentPage = function () {
        return s("currentPage");
      });
    var y = function () {
      var e =
        '<img src="' +
        v.loaderImage +
        '" alt="loading more results" style="margin:10px auto" />';
      return (
        "spinner" == v.loaderImage &&
          (e =
            '<div role="alert" aria-busy="true" id="loading-spinner" class="spinner" role="spinner"><div class="spinner-icon"></div></div>'),
        v.loaderHtml ||
          '<div id="pageless-loader" style="display:none;text-align:center;width:100%;"><div class="msg" style="color:#e9e9e9;font-size:2em"></div>' +
            e +
            "</div>"
      );
    };
    o.fn.pageless = function (e) {
      var t = o(this),
        n = o(e.loader, t);
      i(e),
        (c = t),
        e.loader && n.length
          ? (u = n)
          : ((u = o(y())),
            t.append(u),
            e.loaderHtml ||
              o("#pageless-loader .msg")
                .html(e.loaderMsg)
                .css(e.msgStyles || {}));
    };
  })(jQuery, window),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof module && module.exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (r) {
    "use strict";
    function v(e) {
      return (
        !e.nodeName ||
        -1 !==
          r.inArray(e.nodeName.toLowerCase(), [
            "iframe",
            "#document",
            "html",
            "body",
          ])
      );
    }
    function t(e) {
      return "function" == typeof e || r.isPlainObject(e)
        ? e
        : { top: e, left: e };
    }
    var y = (r.scrollTo = function (e, t, n) {
      return r(window).scrollTo(e, t, n);
    });
    return (
      (y.defaults = { axis: "xy", duration: 0, limit: !0 }),
      (r.fn.scrollTo = function (e, n, m) {
        "object" == typeof n && ((m = n), (n = 0)),
          "function" == typeof m && (m = { onAfter: m }),
          "max" === e && (e = 9e9),
          (m = r.extend({}, y.defaults, m)),
          (n = n || m.duration);
        var g = m.queue && 1 < m.axis.length;
        return (
          g && (n /= 2),
          (m.offset = t(m.offset)),
          (m.over = t(m.over)),
          this.each(function () {
            function s(e) {
              var t = r.extend({}, m, {
                queue: !0,
                duration: n,
                complete:
                  e &&
                  function () {
                    e.call(u, p, m);
                  },
              });
              d.animate(f, t);
            }
            if (null !== e) {
              var l,
                c = v(this),
                u = c ? this.contentWindow || window : this,
                d = r(u),
                p = e,
                f = {};
              switch (typeof p) {
                case "number":
                case "string":
                  if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                    p = t(p);
                    break;
                  }
                  p = c ? r(p) : r(p, u);
                case "object":
                  if (0 === p.length) return;
                  (p.is || p.style) && (l = (p = r(p)).offset());
              }
              var h =
                ("function" == typeof m.offset && m.offset(u, p)) || m.offset;
              r.each(m.axis.split(""), function (e, t) {
                var n = "x" === t ? "Left" : "Top",
                  o = n.toLowerCase(),
                  i = "scroll" + n,
                  a = d[i](),
                  r = y.max(u, t);
                l
                  ? ((f[i] = l[o] + (c ? 0 : a - d.offset()[o])),
                    m.margin &&
                      ((f[i] -= parseInt(p.css("margin" + n), 10) || 0),
                      (f[i] -=
                        parseInt(p.css("border" + n + "Width"), 10) || 0)),
                    (f[i] += h[o] || 0),
                    m.over[o] &&
                      (f[i] += p["x" === t ? "width" : "height"]() * m.over[o]))
                  : ((n = p[o]),
                    (f[i] =
                      n.slice && "%" === n.slice(-1)
                        ? (parseFloat(n) / 100) * r
                        : n)),
                  m.limit &&
                    /^\d+$/.test(f[i]) &&
                    (f[i] = f[i] <= 0 ? 0 : Math.min(f[i], r)),
                  !e &&
                    1 < m.axis.length &&
                    (a === f[i]
                      ? (f = {})
                      : g && (s(m.onAfterFirst), (f = {})));
              }),
                s(m.onAfter);
            }
          })
        );
      }),
      (y.max = function (e, t) {
        var n = "scroll" + (o = "x" === t ? "Width" : "Height");
        if (!v(e)) return e[n] - r(e)[o.toLowerCase()]();
        var o = "client" + o,
          i = (a = e.ownerDocument || e.document).documentElement,
          a = a.body;
        return Math.max(i[n], a[n]) - Math.min(i[o], a[o]);
      }),
      (r.Tween.propHooks.scrollLeft = r.Tween.propHooks.scrollTop =
        {
          get: function (e) {
            return r(e.elem)[e.prop]();
          },
          set: function (e) {
            var t = this.get(e);
            if (e.options.interrupt && e._last && e._last !== t)
              return r(e.elem).stop();
            var n = Math.round(e.now);
            t !== n && (r(e.elem)[e.prop](n), (e._last = this.get(e)));
          },
        }),
      y
    );
  }),
  (function (a, r, s) {
    function t(e, n) {
      function t(t) {
        a(o).each(function () {
          var e = a(this);
          this === t.target ||
            e.has(t.target).length ||
            e.triggerHandler(n, [t.target]);
        });
      }
      n = n || e + s;
      var o = a(),
        i = e + "." + n + "-special-event";
      a.event.special[n] = {
        setup: function () {
          1 === (o = o.add(this)).length && a(r).bind(i, t);
        },
        teardown: function () {
          0 === (o = o.not(this)).length && a(r).unbind(i);
        },
        add: function (e) {
          var n = e.handler;
          e.handler = function (e, t) {
            (e.target = t), n.apply(this, arguments);
          };
        },
      };
    }
    a.map(
      "click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(
        " "
      ),
      function (e) {
        t(e);
      }
    ),
      t("focusin", "focus" + s),
      t("focusout", "blur" + s),
      (a.addOutsideEvent = t);
  })(jQuery, document, "outside"),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).LazyLoad = t());
  })(this, function () {
    "use strict";
    function t() {
      return (t =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
    }
    var n = "undefined" != typeof window,
      o =
        (n && !("onscroll" in window)) ||
        ("undefined" != typeof navigator &&
          /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
      i = n && "IntersectionObserver" in window,
      a = n && "classList" in document.createElement("p"),
      r = n && 1 < window.devicePixelRatio,
      s = {
        elements_selector: "img",
        container: o || n ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !1,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
      },
      l = function l(e) {
        return t({}, s, e);
      },
      c = function c(e, t) {
        var n,
          o = "LazyLoad::Initialized",
          i = new e(t);
        try {
          n = new CustomEvent(o, { detail: { instance: i } });
        } catch (a) {
          (n = document.createEvent("CustomEvent")).initCustomEvent(o, !1, !1, {
            instance: i,
          });
        }
        window.dispatchEvent(n);
      },
      u = function u(e, t) {
        if (t)
          if (t.length) for (var n, o = 0; (n = t[o]); o += 1) c(e, n);
          else c(e, t);
      },
      d = "loading",
      p = "loaded",
      f = "applied",
      h = "error",
      m = "native",
      g = "data-",
      v = "ll-status",
      y = function y(e, t) {
        return e.getAttribute(g + t);
      },
      b = function b(e, t, n) {
        var o = g + t;
        null !== n ? e.setAttribute(o, n) : e.removeAttribute(o);
      },
      w = function w(e) {
        return y(e, v);
      },
      x = function x(e, t) {
        return b(e, v, t);
      },
      k = function k(e) {
        return x(e, null);
      },
      $ = function $(e) {
        return null === w(e);
      },
      C = function C(e) {
        return w(e) === d;
      },
      _ = function _(e) {
        return w(e) === h;
      },
      T = [d, f, p, h],
      S = function S(e) {
        return -1 < T.indexOf(w(e));
      },
      A = function A(e, t, n, o) {
        e &&
          (o === undefined ? (n === undefined ? e(t) : e(t, n)) : e(t, n, o));
      },
      E = function E(e, t) {
        a ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
      },
      j = function j(e, t) {
        a
          ? e.classList.remove(t)
          : (e.className = e.className
              .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
              .replace(/^\s+/, "")
              .replace(/\s+$/, ""));
      },
      L = function L(e) {
        e.llTempImage = document.createElement("img");
      },
      q = function q(e) {
        delete e.llTempImage;
      },
      N = function N(e) {
        return e.llTempImage;
      },
      D = function D(e, t) {
        if (t) {
          var n = t._observer;
          n && n.unobserve(e);
        }
      },
      I = function I(e) {
        e.disconnect();
      },
      P = function P(e, t) {
        e && (e.loadingCount += t);
      },
      F = function F(e) {
        e && (e.toLoadCount -= 1);
      },
      O = function O(e, t) {
        e && (e.toLoadCount = t);
      },
      M = function M(e) {
        return 0 < e.loadingCount;
      },
      R = function R(e) {
        return 0 < e.toLoadCount;
      },
      H = "src",
      z = "srcset",
      B = "sizes",
      W = "poster",
      G = "PICTURE",
      V = function V(e) {
        for (var t, n = [], o = 0; (t = e.children[o]); o += 1)
          "SOURCE" === t.tagName && n.push(t);
        return n;
      },
      U = function U(e, t, n) {
        n && e.setAttribute(t, n);
      },
      Y = function Y(e, t) {
        e.removeAttribute(t);
      },
      X = function X(e) {
        return !!e.llOriginalAttrs;
      },
      Q = function Q(e) {
        if (!X(e)) {
          var t = {};
          (t[H] = e.getAttribute(H)),
            (t[z] = e.getAttribute(z)),
            (t[B] = e.getAttribute(B)),
            (e.llOriginalAttrs = t);
        }
      },
      K = function K(e) {
        if (X(e)) {
          var t = e.llOriginalAttrs;
          U(e, H, t[H]), U(e, z, t[z]), U(e, B, t[B]);
        }
      },
      J = function J(e, t) {
        U(e, B, y(e, t.data_sizes)),
          U(e, z, y(e, t.data_srcset)),
          U(e, H, y(e, t.data_src));
      },
      Z = function Z(e) {
        Y(e, H), Y(e, z), Y(e, B);
      },
      ee = function ee(e, t) {
        var n = e.parentNode;
        n && n.tagName === G && V(n).forEach(t);
      },
      te = function te(e) {
        ee(e, function (e) {
          K(e);
        }),
          K(e);
      },
      ne = function ne(e, t) {
        ee(e, function (e) {
          Q(e), J(e, t);
        }),
          Q(e),
          J(e, t);
      },
      oe = function oe(e) {
        ee(e, function (e) {
          Z(e);
        }),
          Z(e);
      },
      ie = function ie(e, t) {
        U(e, H, y(e, t.data_src));
      },
      ae = function ae(e, t) {
        V(e).forEach(function (e) {
          U(e, H, y(e, t.data_src));
        }),
          U(e, W, y(e, t.data_poster)),
          U(e, H, y(e, t.data_src)),
          e.load();
      },
      re = function re(e, t) {
        V(e).forEach(function (e) {
          U(e, H, y(e, t.data_src));
        }),
          e.load();
      },
      se = { IMG: ne, IFRAME: ie, VIDEO: ae, AUDIO: re },
      le = function le(e, t, n) {
        var o = y(e, t.data_bg),
          i = y(e, t.data_bg_hidpi),
          a = r && i ? i : o;
        a &&
          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
          N(e).setAttribute(H, a),
          P(n, 1),
          E(e, t.class_loading),
          x(e, d),
          A(t.callback_loading, e, n));
      },
      ce = function ce(e, t, n) {
        var o = y(e, t.data_bg_multi),
          i = y(e, t.data_bg_multi_hidpi),
          a = r && i ? i : o;
        a &&
          ((e.style.backgroundImage = a),
          E(e, t.class_applied),
          x(e, f),
          A(t.callback_applied, e, n),
          t.unobserve_completed && D(e, t));
      },
      ue = function ue(e, t, n) {
        var o = se[e.tagName];
        o &&
          (o(e, t),
          P(n, 1),
          E(e, t.class_loading),
          x(e, d),
          A(t.callback_loading, e, n));
      },
      de = "load",
      pe = "loadeddata",
      fe = "error",
      he = ["IMG", "IFRAME", "VIDEO", "AUDIO"],
      me = function me(e) {
        return -1 < he.indexOf(e.tagName);
      },
      ge = function ge(e, t) {
        !t || M(t) || R(t) || A(e.callback_finish, t);
      },
      ve = function ve(e, t, n) {
        e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
      },
      ye = function ye(e, t, n) {
        e.removeEventListener(t, n);
      },
      be = function be(e) {
        return !!e.llEvLisnrs;
      },
      we = function we(e, t, n) {
        be(e) || (e.llEvLisnrs = {}),
          ve(e, de, t),
          ve(e, fe, n),
          ("VIDEO" !== e.tagName && "AUDIO" !== e.tagName) || ve(e, pe, t);
      },
      xe = function xe(e) {
        if (be(e)) {
          var t = e.llEvLisnrs;
          for (var n in t) {
            var o = t[n];
            ye(e, n, o);
          }
          delete e.llEvLisnrs;
        }
      },
      ke = function ke(e, t, n) {
        q(e),
          P(n, -1),
          F(n),
          j(e, t.class_loading),
          t.unobserve_completed && D(e, n);
      },
      $e = function $e(e, t, n, o) {
        ke(t, n, o),
          E(t, n.class_loaded),
          x(t, p),
          A(n.callback_loaded, t, o),
          ge(n, o);
      },
      Ce = function Ce(e, t, n, o) {
        ke(t, n, o),
          E(t, n.class_error),
          x(t, h),
          A(n.callback_error, t, o),
          ge(n, o);
      },
      _e = function _e(t, n, o) {
        var i = N(t) || t;
        if (!be(i)) {
          var a = function a(e) {
              $e(e, t, n, o), xe(i);
            },
            r = function r(e) {
              Ce(e, t, n, o), xe(i);
            };
          we(i, a, r);
        }
      },
      Te = function Te(e, t, n) {
        L(e), _e(e, t, n), le(e, t, n), ce(e, t, n);
      },
      Se = function Se(e, t, n) {
        _e(e, t, n), ue(e, t, n);
      },
      Ae = function Ae(e, t, n) {
        me(e) ? Se(e, t, n) : Te(e, t, n), ge(t, n);
      },
      Ee = function Ee(e, t, n) {
        _e(e, t, n), ue(e, t, n), x(e, m), ge(t, n);
      },
      je = function je(e, t, n, o) {
        "IMG" === e.tagName &&
          (xe(e),
          oe(e),
          te(e),
          j(e, n.class_loading),
          P(o, -1),
          A(n.callback_cancel, e, t, o),
          setTimeout(function () {
            k(e);
          }, 0));
      },
      Le = function Le(e, t, n, o) {
        A(n.callback_enter, e, t, o),
          S(e) || (n.unobserve_entered && D(e, o), Ae(e, n, o));
      },
      qe = function qe(e, t, n, o) {
        $(e) ||
          (n.cancel_on_exit && C(e) && je(e, t, n, o),
          A(n.callback_exit, e, t, o));
      },
      Ne = ["IMG", "IFRAME"],
      De = "loading",
      Ie = function Ie(e) {
        return e.use_native && De in HTMLImageElement.prototype;
      },
      Pe = function Pe(e, t, n) {
        e.forEach(function (e) {
          -1 !== Ne.indexOf(e.tagName) &&
            (e.setAttribute(De, "lazy"), Ee(e, t, n));
        }),
          O(n, 0);
      },
      Fe = function Fe(e) {
        return e.isIntersecting || 0 < e.intersectionRatio;
      },
      Oe = function Oe(e) {
        return {
          root: e.container === document ? null : e.container,
          rootMargin: e.thresholds || e.threshold + "px",
        };
      },
      Me = function Me(e, t, n) {
        e.forEach(function (e) {
          return Fe(e) ? Le(e.target, e, t, n) : qe(e.target, e, t, n);
        });
      },
      Re = function Re(t, e) {
        e.forEach(function (e) {
          t.observe(e);
        });
      },
      He = function He(e, t) {
        I(e), Re(e, t);
      },
      ze = function ze(t, n) {
        i &&
          !Ie(t) &&
          (n._observer = new IntersectionObserver(function (e) {
            Me(e, t, n);
          }, Oe(t)));
      },
      Be = function Be(e) {
        return Array.prototype.slice.call(e);
      },
      We = function We(e) {
        return e.container.querySelectorAll(e.elements_selector);
      },
      Ge = function Ge(e) {
        return Be(e).filter($);
      },
      Ve = function Ve(e) {
        return _(e);
      },
      Ue = function Ue(e) {
        return Be(e).filter(Ve);
      },
      Ye = function Ye(e, t) {
        return Ge(e || We(t));
      },
      Xe = function Xe(t, e) {
        Ue(We(t)).forEach(function (e) {
          j(e, t.class_error), k(e);
        }),
          e.update();
      },
      Qe = function Qe(e, t) {
        n &&
          window.addEventListener("online", function () {
            Xe(e, t);
          });
      },
      Ke = function Ke(e, t) {
        var n = l(e);
        (this._settings = n),
          (this.loadingCount = 0),
          ze(n, this),
          Qe(n, this),
          this.update(t);
      };
    return (
      (Ke.prototype = {
        update: function Je(e) {
          var t = this._settings,
            n = Ye(e, t);
          O(this, n.length),
            !o && i
              ? Ie(t)
                ? Pe(n, t, this)
                : He(this._observer, n)
              : this.loadAll(n);
        },
        destroy: function e() {
          this._observer && this._observer.disconnect(),
            delete this._observer,
            delete this._settings,
            delete this.loadingCount,
            delete this.toLoadCount;
        },
        loadAll: function Ze(e) {
          var t = this,
            n = this._settings;
          Ye(e, n).forEach(function (e) {
            Ae(e, n, t);
          });
        },
      }),
      (Ke.load = function (e, t) {
        var n = l(t);
        Ae(e, n);
      }),
      (Ke.resetStatus = function (e) {
        k(e);
      }),
      n && u(Ke, window.lazyLoadOptions),
      Ke
    );
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.Rellax = t());
  })("undefined" != typeof window ? window : global, function () {
    var l = function (e, t) {
      var p = Object.create(l.prototype),
        i = 0,
        f = 0,
        a = 0,
        h = 0,
        m = [],
        g = !0,
        n =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          function (e) {
            setTimeout(e, 1e3 / 60);
          },
        r =
          window.transformProp ||
          (function () {
            var e = document.createElement("div");
            if (null === e.style.transform) {
              var t,
                n = ["Webkit", "Moz", "ms"];
              for (t in n)
                if (void 0 !== e.style[n[t] + "Transform"])
                  return n[t] + "Transform";
            }
            return "transform";
          })();
      (p.options = {
        speed: -2,
        center: !1,
        wrapper: null,
        round: !0,
        vertical: !0,
        horizontal: !1,
        callback: function () {},
      }),
        t &&
          Object.keys(t).forEach(function (e) {
            p.options[e] = t[e];
          }),
        e || (e = ".rellax");
      var o = "string" == typeof e ? document.querySelectorAll(e) : [e];
      if (!(0 < o.length))
        throw Error("The elements you're trying to select don't exist.");
      if (((p.elems = o), p.options.wrapper && !p.options.wrapper.nodeType)) {
        if (!(o = document.querySelector(p.options.wrapper)))
          throw Error("The wrapper you're trying to use don't exist.");
        p.options.wrapper = o;
      }
      var v = function () {
          for (var e = 0; e < m.length; e++)
            p.elems[e].style.cssText = m[e].style;
          for (
            m = [], f = window.innerHeight, h = window.innerWidth, y(), e = 0;
            e < p.elems.length;
            e++
          ) {
            var t = p.elems[e],
              n = t.getAttribute("data-rellax-percentage"),
              o = t.getAttribute("data-rellax-speed"),
              i = t.getAttribute("data-rellax-zindex") || 0,
              a = "false" != t.getAttribute("data-center"),
              r = p.options.wrapper
                ? p.options.wrapper.scrollTop
                : window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop,
              s = p.options.vertical && (n || a) ? r : 0,
              l =
                p.options.horizontal && (n || a)
                  ? window.pageXOffset ||
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft
                  : 0;
            r = s + t.getBoundingClientRect().top;
            var c = t.clientHeight || t.offsetHeight || t.scrollHeight,
              u = l + t.getBoundingClientRect().left,
              d = t.clientWidth || t.offsetWidth || t.scrollWidth;
            (s = n || (s - r + f) / (c + f)),
              (n = n || (l - u + h) / (d + h)),
              a && (s = n = 0.5),
              (o = o || p.options.speed),
              (n = b(n, s, o)),
              (s = ""),
              0 <= (t = t.style.cssText).indexOf("transform") &&
                ((s = t.indexOf("transform")),
                (s = (l = (s = t.slice(s)).indexOf(";"))
                  ? " " + s.slice(11, l).replace(/\s/g, "")
                  : " " + s.slice(11).replace(/\s/g, ""))),
              m.push({
                baseX: n.x,
                baseY: n.y,
                top: r,
                left: u,
                height: c,
                width: d,
                speed: o,
                style: t,
                transform: s,
                zindex: i,
              });
          }
          g && (window.addEventListener("resize", v), (g = !1)), w();
        },
        y = function () {
          var e = i,
            t = a;
          return (
            (i = p.options.wrapper
              ? p.options.wrapper.scrollTop
              : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
                ).scrollTop || window.pageYOffset),
            (a = p.options.wrapper
              ? p.options.wrapper.scrollLeft
              : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
                ).scrollLeft || window.pageXOffset),
            !!(
              (e != i && p.options.vertical) ||
              (t != a && p.options.horizontal)
            )
          );
        },
        b = function (e, t, n) {
          var o = {};
          return (
            (e = 100 * n * (1 - e)),
            (t = 100 * n * (1 - t)),
            (o.x = p.options.round ? Math.round(e) : Math.round(100 * e) / 100),
            (o.y = p.options.round ? Math.round(t) : Math.round(100 * t) / 100),
            o
          );
        },
        s = function () {
          y() && !1 === g && w(), n(s);
        },
        w = function () {
          for (var e, t = 0; t < p.elems.length; t++) {
            var n =
                (e = b(
                  (a - m[t].left + h) / (m[t].width + h),
                  (i - m[t].top + f) / (m[t].height + f),
                  m[t].speed
                )).y - m[t].baseY,
              o = e.x - m[t].baseX;
            p.elems[t].style[r] =
              "translate3d(" +
              (p.options.horizontal ? o : "0") +
              "px," +
              (p.options.vertical ? n : "0") +
              "px," +
              m[t].zindex +
              "px) " +
              m[t].transform;
          }
          p.options.callback(e);
        };
      return (
        (p.destroy = function () {
          for (var e = 0; e < p.elems.length; e++)
            p.elems[e].style.cssText = m[e].style;
          g || (window.removeEventListener("resize", v), (g = !0));
        }),
        v(),
        s(),
        (p.refresh = v),
        p
      );
    };
    return l;
  }),
  ($.fn.beforeAfter = function () {
    var t = this,
      e = t.width() + "px";
    t.find(".resize img").css("width", e),
      drags(t.find(".handle"), t.find(".resize"), t),
      $(window).resize(function () {
        var e = t.width() + "px";
        t.find(".resize img").css("width", e);
      });
  }),
  (window.nonCriticalFlag = !0),
  (urlParams = new URLSearchParams(window.location.search)),
  (myParam = urlParams.get("t"));
var changeNav,
  dot,
  latestKnownScrollY,
  new_destination,
  observer,
  options,
  rellax,
  requestTick,
  sections,
  social,
  socialLimit,
  socialOffset,
  socialSticky,
  ticking,
  toTop,
  toTopOffset,
  toTopSticky,
  toc,
  tocLimit,
  tocOffset,
  tocSticky,
  update,
  newsletter_validation = !1,
  close_btn =
    '<svg enable-background="new 0 0 612 612" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg"><path d="m612 36-35.5-35.4-270.5 270-270.5-270-35.5 35.4 270.5 270-270.5 270 35.5 35.4 270.5-270 270.5 270 35.5-35.4-270.5-270z"/></svg>',
  listFilter = function (e, t) {
    e.find("input.filterinput")
      .change(function () {
        var e;
        return (
          (e = $(this).val().toLowerCase()),
          t.filter(function () {
            $(this).toggle(
              -1 < $(this).find(".hidden-title").text().toLowerCase().indexOf(e)
            );
          }),
          !1
        );
      })
      .keyup(function () {
        $(this).change();
      });
  },
  escapeHtml = function (e) {
    var t = document.createElement("div");
    return t.appendChild(document.createTextNode(e)), t.innerHTML;
  };
window.escapeHtml = escapeHtml;
var updateQueryParam = function (e, a, r) {
  var t = new RegExp("([?&])(" + a + ")=[^&]*|$", "i");
  return e.replace(t, function (e, t, n, o, i) {
    return (t || (-1 === i.indexOf("?") ? "?" : "&")) + (n || a) + "=" + r;
  });
};
window.updateQueryParam = updateQueryParam;
var clearReply = function () {
  return (
    $("#mainCommentForm .comments-title span").html("Leave a Comment"),
    $("#mainCommentForm #parent_comment").val(""),
    $("#mainCommentForm .cancel-reply").remove(),
    $("#mainCommentForm  textarea").blur(),
    !1
  );
};
window.clearReply = clearReply;
var replyFn = function (e, t) {
  $("#mainCommentForm .comments-title span").html("Replying to " + unescape(t)),
    $("#mainCommentForm #parent_comment").val(escapeHtml(e)),
    $("#mainCommentForm .comments-title .cancel-reply").length < 1 &&
      ($("#mainCommentForm .comments-title").append(
        "<a href='#' data-google-interstitial='false' class='cancel-reply'>Cancel Reply</a>"
      ),
      $("#mainCommentForm .cancel-reply").on("click", function () {
        return clearReply(), !1;
      })),
    $("#mainCommentForm textarea").focus();
};
window.replyFn = replyFn;
var autoFillComment = function () {
  var e, t, n, o, i;
  if (
    0 < $("#mainCommentForm").length &&
    (o = document.cookie.replace(
      /(?:(?:^|.*;\s*)remember_me\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    ))
  )
    try {
      return (
        (n = (e = window.atob(o).split(","))[0]),
        (t = e[1]),
        (i = e[2]),
        $("#mainCommentForm #remember_me").prop("checked", !0),
        $("#mainCommentForm #name").val(escapeHtml(n)),
        $("#mainCommentForm #email").val(escapeHtml(t)),
        $("#mainCommentForm #url").val(escapeHtml(i))
      );
    } catch (a) {
      document.cookie = "remember_me= ; expires= Thu, 21 Aug 2014 20:00:00 UTC";
    }
};
window.autoFillComment = autoFillComment;
var initLazyLoad = function () {
    var e;
    if (e) return e.update();
    (e = new LazyLoad({
      elements_selector: ".lazy:not(.lazyloaded)",
      data_src: "original",
      data_bg: "original",
      data_srcset: "srcset",
      threshold: 2e3,
      callback_enter: function (e) {
        $(e).parent(".image-block, .lightbox-full") &&
          $(e).parent().addClass("loading"),
          $(e).closest(".img-wrapper") &&
            $(e).closest(".img-wrapper").addClass("loading"),
          $(e).closest(".image-parallax-block") &&
            $(e)
              .closest(".image-parallax-block")
              .addClass("loading dark animated-bg"),
          $(e).closest(".post-image") &&
            $(e).closest(".post-image").addClass("loading animated-bg"),
          $(e).closest(".thumb-bg") &&
            $(e).closest(".thumb-bg").addClass("loading dark animated-bg"),
          $(e).closest(".video-block") &&
            $(e)
              .closest(".video-block")
              .find(".embed-container")
              .addClass("loading"),
          $(e).closest(".ps-names") &&
            $(e).closest(".ps-names").addClass("loaded");
      },
      callback_loaded: function (e) {
        $(e).parent(".image-block, .lightbox-full") &&
          ($(e).parent().removeClass("loading dark"),
          $(e).parent().addClass("loaded")),
          $(e).closest(".img-wrapper") &&
            ($(e).closest(".img-wrapper").removeClass("loading dark"),
            $(e).closest(".img-wrapper").addClass("loaded")),
          $(e).closest(".video-block") &&
            ($(e)
              .closest(".video-block")
              .find(".embed-container")
              .removeClass("loading"),
            $(e)
              .closest(".video-block")
              .find(".embed-container")
              .addClass("loaded"),
            e.paused && e.play()),
          $(e).closest(".post-image") &&
            ($(e).closest(".post-image").removeClass("loading animated-bg"),
            $(e).closest(".post-image").addClass("loaded")),
          $(e).closest(".image-parallax-block") &&
            $(e)
              .closest(".image-parallax-block")
              .removeClass("loaded dark animated-bg");
      },
    })),
      $(".lazy").addClass("lazyloaded");
  },
  trackingEventPosts = function () {
    var t = $("a:not(.ps-row)[href*='amzn.to']");
    if (
      (0 < t.length &&
        t.on("click", function () {
          (e = $(this)),
            0 < e.find(".header-1").length
              ? gtag("event", "GA4: Amazon Affiliate Clicked", {
                  event_category: "Posts",
                  event_label:
                    e.find(".header-1").text() +
                    " - " +
                    window.location.pathname,
                  event_page: window.location.pathname,
                  event_content: e.find(".header-1").text().substring(0, 150),
                })
              : e.text().toLowerCase().includes("check price")
              ? gtag("event", "GA4: Amazon Affiliate Clicked", {
                  event_category: "Posts",
                  event_label:
                    e.parent().prevAll("h2,h3").first().text() +
                    " - " +
                    window.location.pathname,
                  event_page: window.location.pathname,
                  event_content: e
                    .parent()
                    .prevAll("h2,h3")
                    .first()
                    .text()
                    .substring(0, 150),
                })
              : 0 < e.find("img").length
              ? gtag("event", "GA4: Amazon Affiliate Clicked", {
                  event_category: "Posts",
                  event_label:
                    e.find("img").first().attr("alt") +
                    " - " +
                    window.location.pathname,
                  event_page: window.location.pathname,
                  event_content: e
                    .find("img")
                    .first()
                    .attr("alt")
                    .substring(0, 150),
                })
              : gtag("event", "GA4: Amazon Affiliate Clicked", {
                  event_category: "Posts",
                  event_label: e.text() + " - " + window.location.pathname,
                  event_page: window.location.pathname,
                  event_content: e.text().substring(0, 150),
                });
        }),
      "undefined" == typeof $mediavine)
    ) {
      var n = $("a[href*='tidd.ly']");
      0 < n.length &&
        n.each(function () {
          $(this).removeAttr("target");
        });
    }
    0 < $('.btn-wrap a:contains("View More Hotels")').length &&
      $('.btn-wrap a:contains("View More Hotels")').on("click", function () {
        (e = $(this)),
          0 < e.text().trim().length &&
            gtag("event", "GA4: Hotel More Button Clicked", {
              event_category: "Posts",
              event_label: e.text() + " - " + window.location.pathname,
              event_page: window.location.pathname,
              event_content: e.text().substring(0, 150),
            });
      }),
      0 < $(".viator-extra .btn-primary").length &&
        $(".viator-extra .btn-primary").on("click", function () {
          (e = $(this)),
            0 < e.text().trim().length &&
              gtag("event", "GA4: Tour Section More Button Clicked", {
                event_category: "Posts",
                event_label: e.text() + " - " + window.location.pathname,
                event_page: window.location.pathname,
                event_content: e.text().substring(0, 150),
              });
        }),
      0 < $("body:not(.planning_dd_active) #totop .btn-planning").length &&
        $("body #totop .btn-planning").on("click", function () {
          (e = $(this)),
            0 < $("#planning.open").length
              ? ($("body").addClass("planning-from-btn"),
                gtag("event", "GA4: Planning Button Clicked", {
                  event_category: "General",
                  event_label: document.title,
                  event_page: window.location.pathname,
                  event_content: document.title.substring(0, 150),
                }))
              : $("body.planning-from-btn").removeClass("planning-from-btn");
        }),
      0 < $(".navbar .nav-wrapper  a").length &&
        $(".navbar .nav-wrapper  a").on("click", function () {
          (e = $(this)),
            0 < e.text().trim().length &&
              gtag("event", "GA4: Nav Link Clicked", {
                event_category: "General",
                event_label: e.text().trim(),
                event_page: window.location.pathname,
                event_content: e.text().trim().substring(0, 150),
              });
        }),
      0 < $(".posts .more_presets").length &&
        $(".posts .more_presets").on("click", function () {
          (e = $(this)),
            gtag("event", "GA4: More Presets Link Clicked", {
              event_category: "Posts",
              event_label: window.location.pathname,
              event_page: window.location.pathname,
            });
        }),
      0 < $(".product-summary").length &&
        $(".product-summary:not(#packing-list) a").on("click", function () {
          (e = $(this)),
            (ext = "Product"),
            e.closest(".product-summary").hasClass("accommodation") &&
              (ext = "Accommodation"),
            gtag(
              "event",
              "GA4: Affliate Links in " + ext + " Summary Clicked",
              {
                event_category: "Posts",
                event_label:
                  e.find(".ps-name").text() + " - " + window.location.pathname,
                event_page: window.location.pathname,
                event_content: e.find(".ps-name").text().substring(0, 150),
              }
            );
        }),
      0 < $("#planning").length &&
        $("#planning a").on("click", function () {
          (e = $(this)),
            gtag("event", "GA4: Planning Affiliate Link Clicked", {
              event_category: "General",
              event_label: e.text(),
              event_page: window.location.pathname,
              event_content: e.text().substring(0, 150),
            });
        }),
      0 < $(".further_reading").length &&
        $(".further_reading a").on("click", function () {
          (e = $(this)),
            gtag("event", "GA4: Further Reading Link Clicked", {
              event_category: "Posts",
              event_label: e.text() + " | " + window.location.pathname,
              event_page: window.location.pathname,
              event_content: e.text().substring(0, 150),
            });
        }),
      0 < $(".sidebar .btn.instagram").length &&
        $(".sidebar .btn.instagram").on("click", function () {
          (e = $(this)),
            gtag("event", "GA4: Sidebar Prominent Instagram Clicked", {
              event_category: "Posts",
              event_label: window.location.pathname,
              event_page: window.location.pathname,
            });
        }),
      0 < $(".scroll-helper").length &&
        $(".scroll-helper .left-arrow, .scroll-helper .right-arrow").on(
          "click",
          function () {
            (e = $(this)),
              gtag("event", "GA4: Scroll Helper Arrow Clicked", {
                event_category: "General",
                event_label: document.title,
                event_page: window.location.pathname,
              });
          }
        ),
      0 < $(".icon-nav a").length &&
        $(".icon-nav a").on("click", function () {
          (e = $(this)),
            gtag("event", "GA4: Affiliate Links in Icon Nav Menu Clicked", {
              event_category: "General",
              event_label: e.text(),
              event_page: window.location.pathname,
              event_content: e.text().substring(0, 150),
            });
        }),
      $("footer a").on("click", function () {
        (e = $(this)),
          gtag("event", "GA4: Footer Links Clicked", {
            event_category: "General",
            event_label: e.text(),
            event_page: window.location.pathname,
            event_content: e.text().substring(0, 150),
          });
      }),
      0 < $("body.videos").length &&
        $("body.videos .pin-it-section a").on("click", function () {
          gtag("event", "GA4: Pinterest Image Clicked", {
            event_category: "Videos",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
      0 < $("body.posts").length &&
        ($("body.posts #packing-list a").on("click", function () {
          (e = $(this)),
            (text = e.text()),
            $("body.posts #packing-list").hasClass("product-summary") &&
              (text = e.find(".ps-name").text()),
            gtag("event", "GA4: Links in Packing List Clicked", {
              event_category: "Posts",
              event_label: text,
              event_page: window.location.pathname,
              event_content: text.substring(0, 150),
            });
        }),
        $("body.posts .related_category").on("click", function () {
          gtag("event", "GA4: Clicked Related Category", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts .extra-links a").on("click", function () {
          (e = $(this)),
            gtag("event", "GA4: Links in Affiliate Extend Clicked", {
              event_category: "Posts",
              event_label: e.text(),
              event_page: window.location.pathname,
              event_content: e.text().substring(0, 150),
            });
        }),
        $("body.posts .pin-it-section a").on("click", function () {
          gtag("event", "GA4: Pinterest Image Clicked", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts .author-meta .datePublished a").on("click", function () {
          gtag("event", "GA4: Scroll to Comment", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts #recommended .share-box a").on("click", function () {
          gtag("event", "GA4: Sticky Share", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts .click-to-play").on("click", function () {
          gtag("event", "GA4: Video Play", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts .itinerary").on("click", function () {
          gtag("event", "GA4: Image Itinerary", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts .lightbox-full").on("click", function () {
          gtag("event", "GA4: Image Lightbox", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts #totop .totop").on("click", function () {
          gtag("event", "GA4: Back to Top", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts .insurance-btn").on("click", function () {
          gtag("event", "GA4: Insurance", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        }),
        $("body.posts .readmore-block a").on("click", function () {
          gtag("event", "GA4: Read More Block Click", {
            event_category: "Posts",
            event_label: document.title,
            event_page: window.location.pathname,
            event_content: document.title.substring(0, 150),
          });
        })),
      0 < $("body.photos").length &&
        $(document).on("click", ".download-photo", function () {
          gtag("event", "GA4: Download", {
            event_category: "Photos",
            event_label: $(this).attr("data-photo-title"),
            event_page: window.location.pathname,
            event_content: $(this).attr("data-photo-title").substring(0, 150),
          });
        }),
      $(document).on("click", "body.search .post-search-result", function () {
        var e = "GA4: Instant Search",
          t = $("#instantsearch .ais-SearchBox-input").val();
        "" == t && (t = "Empty"),
          gtag("event", e, {
            event_category: "Search",
            event_label: 'Query:"' + t + '" -> ' + $(this).attr("href"),
            event_page: $(this).attr("href"),
            event_content: t.substring(0, 150),
          });
      });
  };
window.trackingEventPosts = trackingEventPosts;
var initGettyImages = function () {
    if (0 < $(".getty_images:not(.loaded)").length)
      return $(".getty_images:not(.loaded)").each(function () {
        var l;
        if (((l = $(this)).addClass("loaded"), "" !== l.attr("data-terms")))
          return $.ajax({
            url:
              "/photos/gettyimages/search?page=" +
              l.attr("data-page") +
              "&terms=" +
              encodeURIComponent(l.attr("data-terms")) +
              "&size=" +
              l.attr("data-size"),
            success: function (e) {
              var t, n, o, i, a, r, s;
              for (
                a = 0,
                  i = "",
                  s = JSON.parse(e),
                  n = !1,
                  l.parent().hasClass("photos-list") && (n = !0);
                a < s.images.length;

              ) {
                for (
                  0 === a &&
                    !1 === n &&
                    (i +=
                      '<h2 class="header-4">Related Photos from iStock</h2>'),
                    o = "#",
                    t = "",
                    !(r = 0) === n &&
                      (t = "<span class='label'>From iStock</span>");
                  r < s.images[a].referral_destinations.length;

                )
                  "istockphoto" ===
                    s.images[a].referral_destinations[r].site_name &&
                    (o =
                      "http://istockphoto.7eer.net/c/1262409/258824/4205?u=" +
                      encodeURIComponent(
                        s.images[a].referral_destinations[r].uri
                      )),
                    r++;
                (i +=
                  '<div class="photo-preview col-md"> <a href="' +
                  o +
                  '" target="_blank" id="gettyimage_' +
                  s.images[a].id +
                  '" data-original="' +
                  s.images[a].display_sizes[0].uri +
                  '" class="lazy getty_image" style="background: no-repeat center center; background-size: cover;">' +
                  t +
                  "</a> </div>"),
                  a++;
              }
              return !0 === n ? l.replaceWith(i) : l.html(i), initLazyLoad();
            },
          });
      });
  },
  deactivateModal = function () {
    $("#modal .modal-guts").removeClass("modal-animated"),
      setTimeout(function () {
        return (
          $("body").removeClass("modal-open"),
          $(".modal-overlay").remove(),
          void 0 !== $(".modal").attr("data-prev-url") &&
            (gtag("config", "G-2HN10R7ZXW", {
              page_path: $(".modal")
                .attr("data-prev-url")
                .replace("https://www.bucketlistly.blog/", ""),
            }),
            gtag("config", "G-6F88HCFTDF", {
              page_path: $(".modal")
                .attr("data-prev-url")
                .replace("https://www.bucketlistly.blog/", ""),
            }),
            window.history.replaceState(
              {},
              document.title,
              $(".modal").attr("data-prev-url")
            )),
          $(window).off("popstate"),
          $(".modal").remove()
        );
      }, 100);
  };
window.deactivateModal = deactivateModal;
var activateModal = function (e) {
  var t = "";
  if (
    (0 < $(e).find("#current-lightbox-image").length && (t = "photo-lightbox"),
    $("#modal-overlay").length < 1 &&
      $("body").prepend('<div class="modal-overlay" id="modal-overlay"></div>'),
    void 0 !== e &&
      ($("#modal").length < 1
        ? $("body").append(
            '<div class="modal" tabindex="-1" id="modal"><div class="modal-guts container ' +
              t +
              '"><button class="close-button" id="close-button">' +
              close_btn +
              "</button>" +
              e +
              "</div></div>"
          )
        : $("#modal .modal-guts").html(
            '<button onclick="return false;" class="close-button" id="close-button">' +
              close_btn +
              "</button>" +
              e
          )),
    0 < $("#modal").length && $("#modal .modal-guts").focus(),
    $("body").addClass("modal-open"),
    "photo-lightbox" == t)
  ) {
    $("body").addClass("modal-non-overflow");
    var n = function () {
      deactivateModal(), window.removeEventListener("scroll", n, !1);
    };
    window.addEventListener("scroll", n, !0);
  }
  $(".modal .modal-guts").bind("clickoutside", function () {
    deactivateModal(), $(this).unbind("clickoutside");
  }),
    $(".modal .close-button:not(.close-loaded)").on("click", function () {
      $(this).addClass("close-loaded"), deactivateModal();
    });
};
window.activateModal = activateModal;
var async_click = function () {
    if (0 < $(".async-click:not(.async-click-loaded)").length)
      return $(".async-click:not(.async-click-loaded)").each(function () {
        var i;
        return (
          (i = $(this)).addClass("async-click-loaded"),
          i.on("click", function () {
            var e, t, n, o;
            return (
              (o = window.location.href),
              $("body").append(
                '<div id="loading-spinner" role="alert" aria-busy="true" class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              ),
              (e = i.find("img").attr("src")),
              (t = i.parent().find(".photo-preview-footer .tags").html()),
              (n = i.find("img").attr("alt").split("#")[0]),
              $("body").prepend(
                '<div class="modal-overlay" id="modal-overlay"></div>'
              ),
              $("body").addClass("modal-open"),
              (exclass = ""),
              $("body").append(
                '<div class="modal" data-prev-url="' +
                  o +
                  '" tabindex="-1" id="modal"><div class="modal-guts container ' +
                  exclass +
                  '"><button onclick="return false;" class="close-button" id="close-button">' +
                  close_btn +
                  '</button><div class="row photo-layout fixed-layout"> <div class="col-md-9 photo-desc"> <div class="main-photo "> <div class="img-wrapper"> <i class="img-sizer" style="padding-top: 66.640625%; background: url(' +
                  e +
                  ') center center no-repeat; background-size: cover;"></i></div></div><div class="sidebar"> <div class="block photo-info"> <h1 class="header-1">' +
                  n +
                  '</h1> <div class="author-meta"> <div class="author">By <strong><a href="">Pete R.</a></strong></div></div></div> <div class="block download-btn"> <a href="' +
                  e.replace("photo-thumb.jpg", "main-image.jpg") +
                  "\" onclick=\"gtag('event','GA4: Download',{'event_category': 'Photos','event_page': window.location.pathname,'event_content': e.find(\"img\").attr(\"alt\").substring(0, 150),'event_label': '" +
                  i.find("img").attr("alt") +
                  '\'});" download="" class="btn btn-primary btn-large"> <svg version="1.1" x="0px" y="0px" width="18px" height="19px" viewBox="0 0 18 19" xml:space="preserve"> <defs> </defs> <g> <path d="M8.6,18.9C8.6,18.9,8.6,18.9,8.6,18.9c-0.1,0-0.2-0.1-0.3-0.2C8.4,18.8,8.5,18.9,8.6,18.9z"></path> <path d="M9.4,18.9C9.3,19,9.1,19,9,19C9.1,19,9.3,19,9.4,18.9z"></path> <path d="M17.7,9.3c-0.4-0.4-1-0.4-1.4,0L10,15.6V18c0,0.3-0.1,0.5-0.3,0.7c0,0,0,0,0,0l8-8C18.1,10.3,18.1,9.7,17.7,9.3z"></path> <path d="M9.4,18.9c0.1,0,0.2-0.1,0.3-0.2C9.6,18.8,9.5,18.9,9.4,18.9C9.4,18.9,9.4,18.9,9.4,18.9z"></path> <path d="M8,15.6L1.7,9.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l8,8c0,0,0,0,0,0C8.1,18.5,8,18.3,8,18V15.6z"></path> <path d="M9,19c-0.1,0-0.3,0-0.4-0.1C8.7,19,8.9,19,9,19z"></path> <path d="M10,15.6V1c0-0.6-0.4-1-1-1S8,0.4,8,1v14.6V18c0,0.3,0.1,0.5,0.3,0.7c0.1,0.1,0.2,0.2,0.3,0.2C8.7,19,8.9,19,9,19 s0.3,0,0.4-0.1c0.1,0,0.2-0.1,0.3-0.2C9.9,18.5,10,18.3,10,18V15.6z"></path> </g> </svg> Download this Photo </a> <p class="sidenote">License: CC BY-NC 4.0 Attribution-Noncommercial.<br><a href="#license" class="btn-learnmore">Learn more</a>. </p></div><div class="block"></div><div class="block camera-info"> <div class="panel-group collapse-wrap photo-details" id="photo-accordion" role="tablist" aria-multiselectable="false"> <div class="accordian_btn"> <div role="tab" id="headingOne"> <button class="btn btn-default" type="button" data-toggle="collapse" onclick="return false;" data-parent="#photo-accordion" data-target="#photo-details" aria-expanded="false" aria-controls="photo-details"> Photo Details <span class="caret"></span> </button> </div></div><div class="accordian_btn visible-sm visible-xs"> <div role="tab" id="headingTwo"> <button onclick="return false;" class="btn btn-default" type="button" data-toggle="collapse" data-parent="#photo-accordion" data-target="#photo-license" aria-expanded="false" aria-controls="photo-details"> Licensing <span class="caret"></span> </button> </div><div id="photo-license" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo"> <p>If you decided to use the low res version of this photo on your website, you are allowed to do so <strong>for free as long as it is non-commercial</strong> but make sure to <strong>provide credit</strong> to the owner of the photos by copying and pasting the code shown below:</p><pre><code>&lt;a href="https://www.bucketlistly.blog/" target="_blank"&gt;Photos by Pete Rojwongsuriya&lt;/a&gt;</code></pre> <p>You can read more about the licensing on my <a href="/photos/licensing">License page</a>.</p><p>If you are looking to license a higher quality version of this photo, please <a href="mailto:znvygb:crgr@ohpxrgyvfgyl.pbz" class="eo">email me</a> the URL of the photo for the licensing price.</p></div></div></div></div><div class="block social_share"> <div class="share-box"> <span class="list-label">Share</span> <a href="#" data-google-interstitial="false" onclick="return false;" class="social-circle facebook" target="_blank"><img src="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/icon-facebook.svg?fc57a78f34812b485501bbdff02c9429" title="Share on Facebook"></a> <a href="#" data-google-interstitial="false" onclick="return false;" class="social-circle twitter" target="_blank"><img src="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/icon-twitter.svg?bcc3e927c4815ca4f99f6aa3ace88c4c" title="Share on Twitter"></a> <a data-pin-custom="true" href="#" data-google-interstitial="false" onclick="return false;" class="social-circle pinterest"><img src="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/icon-pinterest.svg?ecaff620445d3dce7179002e9efed44e" title="Share on Pinterest"></a> </div></div><div class="block tags"> <span class="list-label">Tags</span>' +
                  t +
                  ' </div></div><article class="hidden-sm hidden-xs"> <h2 class="header-4" id="license">Licensing:</h2> <p>If you decided to use the low res version of this photo on your website, you are allowed to do so <strong>for free as long as it is non-commercial</strong> but make sure to <strong>provide credit</strong> to the owner of the photos by copying and pasting the code shown below:</p><pre><code>&lt;a href="https://www.bucketlistly.blog/" target="_blank"&gt;Photos by Pete Rojwongsuriya&lt;/a&gt;</code></pre> <p>You can read more about the licensing on my <a href="/photos/licensing">License page</a>.</p><p>If you are looking to license a higher quality version of this photo, please <a href="mailto:znvygb:crgr@ohpxrgyvfgyl.pbz" class="eo">email me</a> the URL of the photo for the licensing price.</p><hr> </article> </div><div class="col-md-3"></div></div></div></div>'
              ),
              $(".modal .close-button:not(.close-loaded)").on(
                "click",
                function () {
                  return (
                    $(this).addClass("close-loaded"),
                    $("body #loading-spinner").remove(),
                    deactivateModal()
                  );
                }
              ),
              gtag("config", "G-2HN10R7ZXW", { page_path: i.attr("href") }),
              gtag("config", "G-6F88HCFTDF", { page_path: i.attr("href") }),
              setTimeout(function () {
                $("#modal .modal-guts").addClass("modal-animated");
              }, 100),
              window.history.pushState({}, document.title, i.attr("href")),
              $(window).on("popstate", function () {
                $("body #loading-spinner").remove(), deactivateModal();
              }),
              $.ajax({
                url: i.attr("href"),
                dataType: "html",
                success: function (e) {
                  var t;
                  if ($("body").hasClass("modal-open")) {
                    $("body #loading-spinner").remove(),
                      (t = $("<div/>").html(e)),
                      activateModal($(t).find("#content .container").html()),
                      initLearnMore(),
                      initEO(),
                      async_load(),
                      initLazyLoad();
                    try {
                      if ("undefined" != typeof $mediavine)
                        return $mediavine.web.fillContentHints();
                    } catch (n) {}
                  }
                },
              }),
              !1
            );
          })
        );
      });
  },
  initEO = function () {
    document.querySelector(".eo:not(.done)") &&
      document.querySelectorAll(".eo").forEach(function (e) {
        e.classList.add("done"),
          (e.onclick = function () {
            return (
              (s = "golb.yltsiltekcub@etep"),
              (location.href = "mailto:" + s.split("").reverse().join("")),
              !1
            );
          });
      });
  },
  async_load = function () {
    var f, e;
    if (0 < $(".async-load:not(.loaded)").length) {
      if (
        ((e = [].slice.call(document.querySelectorAll(".async-load"))),
        "IntersectionObserver" in window)
      )
        return (
          (f = new IntersectionObserver(function (e) {
            e.forEach(function (p) {
              p.isIntersecting &&
                ($(p.target).addClass("loaded"),
                0 < $(p.target).find(".animated-bg").length &&
                  $(p.target).find(".animated-bg").addClass("loading"),
                $.ajax({
                  url: $(p.target).attr("data-url"),
                  success: function (e) {
                    var t, n, o, i, a, r;
                    if (
                      (0 < $(p.target).find(".animated-bg").length &&
                        $(p.target)
                          .find(".animated-bg")
                          .removeClass("loading")
                          .addClass("loaded"),
                      $(p.target).hasClass("getty_images_async"))
                    ) {
                      for (
                        i = 0, o = "", r = JSON.parse(e), !1;
                        i < r.images.length;

                      ) {
                        for (
                          0 === i &&
                            (o +=
                              '<h2 class="header-4"><a href="http://istockphoto.7eer.net/c/1262409/258824/4205?u=https://www.istockphoto.com/search/2/image?phrase=' +
                              $(p.target).attr("data-terms") +
                              '" target="_blank">Related Photos from iStock</a> <a href="http://istockphoto.7eer.net/c/1262409/258824/4205?u=https://www.istockphoto.com/search/2/image?phrase=' +
                              $(p.target).attr("data-terms") +
                              '" class="right-opt btn btn-default" target="_blank">View more on iStock</a></h2>'),
                            n = "#",
                            t = "",
                            a = 0;
                          a < r.images[i].referral_destinations.length;

                        )
                          "istockphoto" ===
                            r.images[i].referral_destinations[a].site_name &&
                            (n =
                              "http://istockphoto.7eer.net/c/1262409/258824/4205?u=" +
                              encodeURIComponent(
                                r.images[i].referral_destinations[a].uri
                              )),
                            a++;
                        (o +=
                          '<div class="photo-preview col-md"> <a href="' +
                          n +
                          '" target="_blank" id="gettyimage_' +
                          r.images[i].id +
                          '" data-original="' +
                          r.images[i].display_sizes[0].uri +
                          '" class="lazy getty_image" style="background: no-repeat center center; background-size: cover;">' +
                          t +
                          "</a> </div>"),
                          i++;
                      }
                      $(p.target).html(o);
                    } else if (
                      $(p.target).attr("data-remove-id") ||
                      "related-container" == $(p.target).attr("id")
                    ) {
                      var s = "nothing";
                      $(p.target).attr("data-remove-id") &&
                        (s = $(p.target).attr("data-remove-id"));
                      var l = $("<div>", { id: "result" }),
                        c = $.parseHTML(e),
                        u = !1,
                        d = l.html(c);
                      0 < d.find("#" + s).length
                        ? (d.find("#" + s).remove(), (u = !0))
                        : 4 < d.find(".col-md").length &&
                          ((u = !0), d.find(".col-md").last().remove()),
                        1 == u
                          ? $(p.target).html(d.html())
                          : $(p.target).html(e);
                    } else $(p.target).html(e);
                    return (
                      0 < $(p.target).find(".lazy:not(.lazyloaded)").length &&
                        initLazyLoad(),
                      f.unobserve(p.target)
                    );
                  },
                }));
            });
          })),
          e.forEach(function (e) {
            f.observe(e);
          })
        );
      document.querySelectorAll(".async-load").forEach(function (s) {
        $(s).addClass("loaded"),
          $.ajax({
            url: $(s).attr("data-url"),
            success: function (e) {
              var t, n, o, i, a, r;
              if (-1 === e.indexOf("Error Code 500")) {
                if ($(s).hasClass("getty_images_async")) {
                  for (
                    i = 0, o = "", r = JSON.parse(e), !1;
                    i < r.images.length;

                  ) {
                    for (
                      0 === i &&
                        (o +=
                          '<h2 class="header-4"><a href="http://istockphoto.7eer.net/c/1262409/258824/4205?u=https://www.istockphoto.com/search/2/image?phrase=' +
                          $(s).attr("data-terms") +
                          '" target="_blank">Related Photos from iStock</a> <a href="http://istockphoto.7eer.net/c/1262409/258824/4205?u=https://www.istockphoto.com/search/2/image?phrase=' +
                          $(s).attr("data-terms") +
                          '" class="right-opt btn btn-default" target="_blank">View more on iStock</a></h2>'),
                        n = "#",
                        t = "",
                        a = 0;
                      a < r.images[i].referral_destinations.length;

                    )
                      "istockphoto" ===
                        r.images[i].referral_destinations[a].site_name &&
                        (n =
                          "http://istockphoto.7eer.net/c/1262409/258824/4205?u=" +
                          encodeURIComponent(
                            r.images[i].referral_destinations[a].uri
                          )),
                        a++;
                    (o +=
                      '<div class="photo-preview col-md"> <a href="' +
                      n +
                      '" target="_blank" id="gettyimage_' +
                      r.images[i].id +
                      '" data-original="' +
                      r.images[i].display_sizes[0].uri +
                      '" class="lazy" style="background: no-repeat center center; background-size: cover;">' +
                      t +
                      "</a> </div>"),
                      i++;
                  }
                  $(s).html(o);
                } else $(s).html(e);
                return initLazyLoad();
              }
            },
          });
      });
    }
  };
window.async_load = async_load;
var initLearnMore = function () {
  if (0 < $(".btn-learnmore").length)
    return $(".btn-learnmore").on("click", function () {
      return (
        $(window).width() < 992
          ? ($("#headingTwo button").click(),
            0 < $(".modal").length
              ? $(".modal").scrollTo("#headingTwo", 300)
              : $.scrollTo("#headingTwo", 300))
          : 0 < $(".modal").length
          ? $(".modal").scrollTo("#license", 300)
          : $.scrollTo("#license", 300),
        !1
      );
    });
};
window.initLearnMore = initLearnMore;
var collapseToc = function () {
    $("#table-of-contents-copy").hasClass("expanded") &&
      ($("#table-of-contents-copy").removeClass("expanded"),
      $("body").removeClass("toc-expanded"),
      $("#table-of-contents-copy .toc-list").scrollTo(".active", 0));
  },
  expandToc = function () {
    $("#table-of-contents-copy").addClass("expanded"),
      $("body").addClass("toc-expanded"),
      $(
        "body #table-of-contents-copy.active.expanded .toc-list-wrapper .toc-list"
      ).scrollTo(
        $(
          "body #table-of-contents-copy.active.expanded .toc-list-wrapper .toc-list li .active"
        )
      );
  },
  initTocSentinel = function () {
    0 < $("#table-of-contents-copy").length
      ? $("#table-of-contents-copy").after(
          '<div class="toc_sentinel toc_sentinel--top"></div>'
        )
      : $(".table-of-contents-wrapper").append(
          '<div class="toc_sentinel toc_sentinel--top"></div>'
        ),
      $(".table-of-contents-wrapper")
        .closest(".post_body")
        .append('<div class="toc_sentinel toc_sentinel--bottom"></div>'),
      (observeHeaders = new IntersectionObserver(
        function (e) {
          e.forEach(function (e) {
            var t = e.boundingClientRect,
              n =
                (document.querySelector("#table-of-contents-copy"),
                e.rootBounds);
            if (
              t.bottom < n.top &&
              (document
                .querySelector("#table-of-contents-copy")
                .classList.add("sticky"),
              $("#table-of-contents-copy .toc-list").scrollTo(".active", 0, {
                offset: 0,
              }),
              document.querySelector("body").classList.add("toc-active"),
              0 == $("#table-of-contents-copy .active").length)
            ) {
              var o = $("#table-of-contents-copy li a").first();
              o.addClass("active"),
                setTimeout(function () {
                  o[0].clientWidth < o.find("span")[0].clientWidth + 35 &&
                    o.find("span").addClass("marquee");
                }, 300);
            }
            t.bottom >= n.top &&
              t.bottom < n.bottom &&
              (document
                .querySelector("#table-of-contents-copy")
                .classList.remove("sticky"),
              document.querySelector("body").classList.remove("toc-active"));
          });
        },
        { threshold: [0] }
      )),
      (observeFooters = new IntersectionObserver(
        function (e) {
          e.forEach(function (e) {
            var t = e.boundingClientRect,
              n =
                (document.querySelector("#table-of-contents-copy"),
                e.rootBounds),
              o = e.intersectionRatio;
            t.bottom > n.top &&
              1 === o &&
              (document.querySelector("body").classList.remove("at-the-bottom"),
              document
                .querySelector("#table-of-contents-copy")
                .classList.add("sticky"),
              $("#table-of-contents-copy .toc-list").scrollTo(".active", 0, {
                offset: 0,
              })),
              t.top < n.top &&
                t.bottom < n.bottom &&
                (document.querySelector("body").classList.add("at-the-bottom"),
                document
                  .querySelector("#table-of-contents-copy")
                  .classList.remove("sticky"));
          });
        },
        { threshold: [1] }
      )),
      observeHeaders.observe(document.querySelector(".toc_sentinel--top")),
      observeFooters.observe(document.querySelector(".toc_sentinel--bottom"));
  },
  tableOfContentInit = function () {
    if (0 < $(".table-of-contents-wrapper").length) {
      toc = document.getElementById("table-of-contents");
      var e = $(".table-of-contents-wrapper");
      $("#table-of-contents")
        .clone()
        .prop("id", "table-of-contents-copy")
        .prop("class", "toc active container--force ")
        .insertAfter(e),
        $("#table-of-contents-copy .toc-list-wrapper").append(
          "<a href='#' data-google-interstitial='false' class='btn-toc-expand'><span class='caret'></span></a>"
        ),
        $("#table-of-contents-copy .toc-list").after(
          "<div class='cover-toc'></div>"
        ),
        $("#table-of-contents-copy .btn-toc-expand, .cover-toc").on(
          "click",
          function () {
            return (
              gtag("event", "GA4: Table of Contents Expanded While Fixed", {
                event_category: "Posts",
                event_label: document.title,
                event_page: window.location.pathname,
                event_content: document.title.substring(0, 150),
              }),
              $("#table-of-contents-copy").hasClass("expanded")
                ? collapseToc()
                : expandToc(),
              !1
            );
          }
        ),
        initTocSentinel(),
        (tocSticky = !1),
        $(".toc li a").on("click", function () {
          var e, t;
          return (
            $("body").hasClass("toc-expanded") ||
              $("#table-of-contents-copy.active").addClass("disableAnimation"),
            collapseToc(),
            (t = (e = $(this)).attr("href")),
            $("#table-of-contents-copy li a.active").removeClass("active"),
            $("#table-of-contents-copy li a span").removeClass("marquee"),
            0 < e.closest("#table-of-contents").length
              ? ($('#table-of-contents-copy a[href="' + t + '"]').addClass(
                  "active"
                ),
                $("#table-of-contents-copy .toc-list").scrollTo(".active", 0, {
                  offset: 0,
                }))
              : e.addClass("active"),
            setTimeout(function () {
              e[0].clientWidth < e.find("span")[0].clientWidth + 35 &&
                e.find("span").addClass("marquee");
            }, 300),
            $("#table-of-contents-copy.active").addClass(
              "disableAnimation scrolling"
            ),
            $("body").attr("style", "overflow: hidden !important;"),
            gtag("event", "GA4: Table of Contents", {
              event_category: "Posts",
              event_label: document.title,
              event_page: window.location.pathname,
              event_content: document.title.substring(0, 150),
            }),
            $.scrollTo(t, 0, {
              easing: "swing",
              onAfter: function () {
                $("#table-of-contents-copy.active").removeClass(
                  "disableAnimation scrolling"
                ),
                  setTimeout(function () {
                    $("body").attr("style", "overflow: visible !important;");
                  }, 300);
              },
            }),
            $("#table-of-contents-copy .toc-list").scrollTo(".active", 0, {
              offset: 0,
            }),
            !1
          );
        }),
        0 < $(".toggle-toc").length &&
          $(".toggle-toc").on("click", function () {
            return (
              "[Show More]" === $(this).text()
                ? ($(this).html("[Show Less]"),
                  $(this).parent().find(".collapsable").addClass("expand"))
                : ($(this).parent().find(".collapsable").removeClass("expand"),
                  $(this).html("[Show More]")),
              !1
            );
          }),
        (options = { threshold: 0.55, rootMargin: "50% 0px -50% 0px" }),
        (sections = document.querySelectorAll("h2[id], h3[id]")),
        (observer = new IntersectionObserver(
          (changeNav = function (e) {
            e.forEach(function (e) {
              var t;
              e.isIntersecting &&
                0.55 <= e.intersectionRatio &&
                ($("#table-of-contents-copy").hasClass("disableAnimation")
                  ? $("#table-of-contents-copy").hasClass("scrolling") ||
                    $("#table-of-contents-copy").removeClass("disableAnimation")
                  : (document.querySelector(
                      "#table-of-contents-copy .active"
                    ) &&
                      (document
                        .querySelector("#table-of-contents-copy .active")
                        .classList.remove("active"),
                      0 < $("#table-of-contents-copy a span.marquee").length &&
                        $("#table-of-contents-copy a span.marquee")
                          .first()
                          .parent()
                          .attr("href") !=
                          "#" + e.target.getAttribute("id") &&
                        $("#table-of-contents-copy a span.marquee").removeClass(
                          "marquee"
                        )),
                    (t = e.target.getAttribute("id")),
                    document.querySelector(
                      '#table-of-contents-copy [href="#' + t + '"]'
                    ) &&
                      (document
                        .querySelector(
                          '#table-of-contents-copy [href="#' + t + '"]'
                        )
                        .classList.add("active"),
                      $("#table-of-contents-copy .toc-list").scrollTo(
                        ".active",
                        0,
                        { offset: 0 }
                      ),
                      setTimeout(function () {
                        var e = $(
                          '#table-of-contents-copy [href="#' +
                            t +
                            '"]:not(.marquee)'
                        );
                        e[0].clientWidth < e.find("span")[0].clientWidth + 35 &&
                          e.find("span").addClass("marquee");
                      }, 300))));
            });
          }),
          options
        )),
        sections.forEach(function (e) {
          observer.observe(e);
        });
    }
  },
  initDestinationFilter = function () {
    0 < $(".destinations .d-guides").length &&
      (listFilter($(".destinations .filter-box"), $(".destinations .d-block")),
      $(".filter-on-click").on("click", function () {
        var e;
        return (
          (e = $(this).attr("data-filter")),
          $(".filter-on-click").removeClass("active"),
          $(this).addClass("active"),
          "all" !== e
            ? ($(".destinations .d-guides").addClass("filtered"),
              $(
                ".destinations .d-guides .d-block .d-content .hidden-title:not(:Contains(" +
                  e +
                  "))"
              )
                .parent()
                .parent()
                .parent()
                .parent()
                .hide(),
              $(
                ".destinations .d-guides .d-block .d-content .hidden-title:Contains(" +
                  e +
                  ")"
              )
                .parent()
                .parent()
                .parent()
                .parent()
                .show())
            : ($(".destinations .d-guides").removeClass("filtered"),
              $(".destinations .d-guides .d-block").show()),
          !1
        );
      }));
  },
  pageLessPhotoPage = function () {
    0 < $("body.photos .explore").length &&
      $("body.photos .explore").on("focusoutside clickoutside", function () {
        $(this).removeClass("active");
      }),
      0 < $("#photo-results").length &&
        0 < $(".pager_wrapper .pager .next a").length &&
        $("#photo-results").pageless({
          distance: 200,
          delay: 1e3,
          totalPages: escapeHtml($("#photo-results").attr("data-total-pages")),
          currentPage: parseInt($("#photo-results").attr("data-current-page")),
          pagination: ".pager_wrapper",
          url: escapeHtml($("#photo-results").attr("data-url-with-param")),
          loaderImage: escapeHtml($("#photo-results").attr("data-loader")),
          scrape: function (e) {
            var t, n, o, i, a, r;
            (o = $(".pager_wrapper").last().find(".next a").attr("href")),
              (t = $(e).find("#photo-results")).find(".watch-this").remove(),
              $("#photo-results").append(t.html()),
              async_click();
            try {
              "undefined" != typeof $mediavine &&
                $mediavine.web.fillContentHints();
            } catch (s) {}
            initLazyLoad(),
              (n = escapeHtml(
                $(e).find("#photo-results").attr("data-current-page")
              )),
              $("#photo-results").attr("data-current-page", n),
              null !== o &&
                ((i = (r = new URL(window.location.href)).search),
                (a = new URLSearchParams(i)).set("page", n),
                (r.search = a.toString()),
                r.toString());
          },
        });
  },
  rellaxInit = function () {
    0 < $(".rellax").length &&
      (rellax = new Rellax(".rellax", {
        speed: -2,
        center: !0,
        round: !0,
        vertical: !0,
      }));
  },
  toTopInit = function () {
    0 < $("#totop").length &&
      ((toTop = document.getElementById("totop")),
      (ticking = toTopSticky = !(toTopOffset = 1e3)));
  },
  stickyBuyInit = function () {
    0 < $("#stickybuy").length &&
      ((stickyBuy = document.getElementById("stickybuy")),
      (stickyBuyOffset = 1080),
      (stickyBuyLimit =
        $(".col-md-9.photo-desc").outerHeight(!0) +
        161 -
        $("#stickybuy").outerHeight(!0)),
      (stickyBuySticky = $(".sidebar").outerHeight(!0) + 161),
      (ticking = !1));
  };
(latestKnownScrollY = 0), (st = 0);
var onScroll = function () {
  (latestKnownScrollY =
    window.pageYOffset || window.scrollY || document.documentElement.scrollTop),
    requestTick();
};
(requestTick = function () {
  ticking || requestAnimationFrame(update), (ticking = !0);
}),
  (update = function () {
    if (
      ((ticking = !1),
      (offset_up = 7),
      (offset_down = 15),
      latestKnownScrollY < st && latestKnownScrollY <= st - offset_up
        ? document.body.classList.add("scrolling-up")
        : latestKnownScrollY >= st + offset_down &&
          document.body.classList.remove("scrolling-up"),
      (st = latestKnownScrollY),
      null != toTop &&
        toTopOffset < latestKnownScrollY &&
        !toTopSticky &&
        ((toTopSticky = !0),
        toTop.classList.add("active"),
        setTimeout(function () {
          document.querySelector("#totop .btn-planning") &&
            (document
              .querySelector("#totop .btn-planning")
              .classList.contains("done") ||
              document
                .querySelector("#totop .btn-planning")
                .classList.add("shown"),
            setTimeout(function () {
              document
                .querySelector("#totop .btn-planning ")
                .classList.remove("shown"),
                document
                  .querySelector("#totop .btn-planning ")
                  .classList.add("done");
            }, 2500));
        }, 200),
        document.querySelector("nav.navbar").classList.add("active"),
        document.querySelector("body").classList.add("navbar-sticky")),
      null != toTop &&
        latestKnownScrollY < toTopOffset &&
        toTopSticky &&
        ((toTopSticky = !1),
        toTop.classList.remove("active"),
        document.querySelector("nav.navbar").classList.remove("active"),
        document.querySelector("body").classList.remove("navbar-sticky")),
      "undefined" != typeof stickyBuy &&
        (latestKnownScrollY >= stickyBuyOffset &&
          latestKnownScrollY <= stickyBuyLimit &&
          !stickyBuySticky &&
          ((stickyBuySticky = !0),
          $(stickyBuy)
            .parent()
            .css({
              height: $(stickyBuy).innerHeight(),
              width: $(stickyBuy).innerWidth(),
            }),
          stickyBuy.classList.add("active")),
        (latestKnownScrollY <= stickyBuyOffset ||
          (latestKnownScrollY >= stickyBuyLimit && stickyBuySticky)) &&
          ((stickyBuySticky = !1),
          stickyBuy.classList.remove("active"),
          $(stickyBuy).parent().css({ height: "auto", width: "auto" }))),
      document.getElementById("table-of-contents-copy"))
    ) {
      if (
        0 < $("#table-of-contents-copy:not(.sticky)").length &&
        ($("#table-of-contents-copy").addClass("sticky"),
        document.querySelector("body").classList.add("toc-active"),
        0 == $("#table-of-contents-copy .active").length)
      ) {
        var e = $("#table-of-contents-copy li a").first();
        e.addClass("active"),
          setTimeout(function () {
            e[0].clientWidth < e.find("span")[0].clientWidth + 35 &&
              e.find("span").addClass("marquee");
          }, 300);
      }
      latestKnownScrollY <=
        parseInt($(".toc_sentinel--top").offset().top + 50) &&
        0 < $("#table-of-contents-copy.sticky").length &&
        (collapseToc(),
        $("#table-of-contents-copy.sticky").removeClass("sticky"),
        document.querySelector("body").classList.remove("toc-active"));
    }
  });
var makeEverythingStickyInit = function () {
    (0 < $("#totop").length || 0 < $("#stickybuy").length) &&
      (document.addEventListener("scroll", onScroll, { passive: !0 }),
      (latestKnownScrollY = 0));
  },
  lightboxInit = function () {
    0 < $(".lightbox-full").length &&
      $(".lightbox-full").on("click", function () {
        loading = "loading";
        var e = "padding-top:66.640625%;";
        return (
          0 < $(this).find(".img-sizer").length
            ? (e = $(this).find(".img-sizer").attr("style"))
            : $(this).attr("data-dimension") &&
              (e = $(this).attr("data-dimension")),
          activateModal(
            '<span class="img-wrapper ' +
              loading +
              ' dark"><i class="img-sizer" style="' +
              e +
              '"></i><img id="current-lightbox-image" style="cursor:zoom-out" onclick="deactivateModal(); return false;" src="' +
              $(this).attr("href") +
              '"></span>'
          ),
          parseInt($(this).find("img").attr("height")) >
            parseInt($(this).find("img").attr("width")) &&
            $("#modal .modal-guts").addClass("portrait"),
          $("#current-lightbox-image").on("load", function () {
            0 < $("#current-lightbox-image").length &&
              $("#current-lightbox-image")
                .parent()
                .removeClass("loading")
                .addClass("loaded");
          }),
          setTimeout(function () {
            $("#modal .modal-guts").addClass("modal-animated"),
              $(this).find("img").attr("height") >
                $(this).find("img").attr("width") &&
                $("#modal .modal-guts").addClass("portrait");
          }, 100),
          !1
        );
      });
  },
  addNewDotInDropdown = function () {
    0 < $(".new-dropdown").length &&
      ((new_destination =
        ".code-kz, .code-ro, .code-xk, .code-rs, .code-is, .code-it, .code-th"),
      (dot = "<div class='dot-new'></div>"),
      $(".new-dropdown")
        .find(new_destination)
        .each(function () {
          return (
            $(this).hasClass("photo-tag")
              ? $(this).attr("title", "New photos available!")
              : $(this).attr("title", "New travel guide available!"),
            $(this).append(dot)
          );
        }));
  },
  searchInit = function () {
    $("body.search").length < 1
      ? $("#search").is(":focus")
        ? ($("#search")
            .parent()
            .append(
              '<div role="alert" aria-busy="true" id="loading-spinner" class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            ),
          $.getScript(
            "https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js",
            function (e, t, n) {
              200 == n.status &&
                $.getScript(
                  "https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js",
                  function (e, t, n) {
                    200 == n.status &&
                      ($("#search").parent().find("#loading-spinner").remove(),
                      initAutocompleteSearch());
                  }
                );
            }
          ))
        : $("#search").one("focus", function () {
            $("#search")
              .parent()
              .append(
                '<div role="alert" aria-busy="true" id="loading-spinner" class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              ),
              $.getScript(
                "https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js",
                function (e, t, n) {
                  200 == n.status &&
                    $.getScript(
                      "https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js",
                      function (e, t, n) {
                        200 == n.status &&
                          ($("#search")
                            .parent()
                            .find("#loading-spinner")
                            .remove(),
                          initAutocompleteSearch());
                      }
                    );
                }
              );
          })
      : $.getScript(
          "https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js",
          function (e, t, n) {
            200 == n.status && initAutocompleteSearch();
          }
        );
  },
  smallMicroTasks = function () {
    0 < $(".click-to-comment").length &&
      $(".click-to-comment").on("click", function () {
        return $.scrollTo("#comment", 0), !1;
      }),
      0 < $("article p > a[href^='#']").length &&
        $("article p > a[href^='#']").on("click", function () {
          return $.scrollTo($(this).attr("href"), 300, { offset: -75 }), !1;
        });
  },
  bootstrapValidationinitIO = function () {
    document.querySelector(".subscribeForm, #mainCommentForm, #contactForm") &&
      $(".subscribeForm, #mainCommentForm, #contactForm").each(function () {
        $(this)
          .find("input, textarea")
          .each(function () {
            $(this).one("focus", function () {
              if (
                !$("body").hasClass("form_validation_done") &&
                ($("body").addClass("form_validation_done"),
                initBootstrapValidation(),
                (newsletter_validation = !0),
                0 < $(".recaptcha-lazyload").length)
              ) {
                $(".recaptcha-lazyload").first();
                if ($("#recaptchaDone").length < 1) {
                  var e = "6Lc88ywlAAAAANCLq87hJbKPjR9_8wG8XcrPxN7z";
                  (t = document),
                    (n = "script"),
                    (o = "https://www.google.com/recaptcha/api.js?render=" + e),
                    (i = t.createElement(n)),
                    (a = t.getElementsByTagName(n)[0]),
                    (i.type = "text/javascript"),
                    (i.src = o),
                    (i.id = "recaptchaDone"),
                    (i.onload = function () {
                      grecaptcha.ready(function () {
                        grecaptcha
                          .execute(e, { action: "form_submit" })
                          .then(function (e) {
                            $('input[name="g-recaptcha-response"]').attr(
                              "value",
                              e
                            );
                          });
                      });
                    }),
                    a.parentNode.insertBefore(i, a);
                }
              }
              var t, n, o, i, a;
            });
          });
      });
  },
  playPauseAudio = function () {
    if (document.querySelector("article .audio-block audio")) {
      var e = [].slice.call(
          document.querySelectorAll("article .audio-block audio")
        ),
        t = new IntersectionObserver(
          function (e) {
            e.forEach(function (e) {
              1 == e.intersectionRatio &&
                e.target.paused &&
                setTimeout(function () {
                  1 == e.intersectionRatio &&
                    e.target.paused &&
                    e.target.play();
                }, 300);
            });
          },
          { threshold: 1 }
        );
      return e.forEach(function (e) {
        t.observe(e);
      });
    }
  },
  playPauseVideo = function () {
    if (
      document.querySelector(
        "article .video-block:not(.mediavine-vid-wrapper) video"
      )
    ) {
      var e = [].slice.call(
          document.querySelectorAll(
            "article .video-block:not(.mediavine-vid-wrapper) video"
          )
        ),
        t = new IntersectionObserver(
          function (e) {
            e.forEach(function (e) {
              0 !== e.intersectionRatio
                ? e.target.paused &&
                  (e.target.querySelector("source").getAttribute("src") ||
                    (e.target
                      .querySelector("source")
                      .setAttribute(
                        "src",
                        e.target
                          .querySelector("source")
                          .getAttribute("data-original")
                      ),
                    e.target.load()),
                  e.target.play())
                : e.target.paused ||
                  (e.target.pause(),
                  e.target.querySelector("source").removeAttribute("src"),
                  e.target.load());
            });
          },
          { threshold: [0, 1] }
        );
      return e.forEach(function (e) {
        t.observe(e);
      });
    }
  },
  loadHDImageInPost = function () {
    if (document.querySelector("body.posts") && 1 < window.devicePixelRatio) {
      var e,
        t,
        n,
        o,
        i = document.querySelector(
          ".image-parallax-block .image-parallax img:not(.image-preload)"
        );
      if (!i.classList.contains("hd-image-loaded"))
        if (
          (i.classList.add("hd-image-loaded"),
          "PICTURE" == i.parentNode.tagName)
        )
          (o = (t = i.parentElement.querySelector("source")
            ? i.parentElement.querySelector("source")
            : i).getAttribute("srcset")),
            t.removeAttribute("srcset"),
            (e = (n = o.split(","))[n.length - 1].trim().split(" ")[0]),
            t.setAttribute("srcset", e.trim());
    }
  },
  newsletterModal = function () {
    activateModal(),
      $("#newsletter").css({
        height: $("#newsletter").outerHeight(!0),
        width: $("#newsletter").outerWidth(!0),
      }),
      $("#newsletter").addClass("modal popup"),
      0 == newsletter_validation && initBootstrapValidation(),
      $("#newsletter .newsletter").append(
        '<button class="close-button remove_temp" id="close-button">' +
          close_btn +
          "</button>"
      ),
      $("#newsletter .newsletter .scrollable-wrapper").prepend(
        '<div class="bg-image remove_temp"><img class="lazy" data-original="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/bg-topography.svg" alt="pattern background"></div><a title="See all presets." onclick="gtag(\'event\',\'GA4: Presets Clicked from Newsletter\',{\'event_category\': \'General\',\'event_label\': document.title,\'event_page\': window.location.pathname,\'event_content\': document.title.substring(0, 150)});" href="/travel-lightroom-presets" class="remove_temp free-preset"><img data-original="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/presets/cityscape-vertical.jpg" class="preset3 lazy"><img data-original="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/presets/landscape-vertical.jpg" class="preset2 lazy"><img data-original="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/theme/images/presets/worldwide-vertical.jpg" class="preset1 lazy"></div>'
      ),
      initLazyLoad();
    var e = function () {
      if (
        ($("#newsletter").removeClass("modal popup"),
        $("#newsletter .remove_temp").remove(),
        $("#newsletter").css({ height: "", width: "" }),
        "true" !=
          document.cookie.replace(
            /(?:(?:^|.*;\s*)hide_newsletter_popup\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
          ))
      ) {
        var e = new Date(),
          t = new Date(e.getFullYear(), e.getMonth() + 1, e.getDate());
        document.cookie =
          "hide_newsletter_popup=true; path=/; expires=" +
          t.toGMTString() +
          ";";
      }
      gtag("event", "GA4: Newsletter Popup Close", {
        event_category: "Posts",
        event_label: document.title,
        event_page: window.location.pathname,
        event_content: document.title.substring(0, 150),
      }),
        deactivateModal();
    };
    $("#newsletter #close-button").one("click", function () {
      e();
    }),
      $(".modal-overlay").one("click", function () {
        e();
      }),
      setTimeout(function () {
        $("#newsletter.popup").addClass("on");
      }, 300);
  },
  initNewsletterModal = function () {
    var e = document.cookie.replace(
      /(?:(?:^|.*;\s*)hide_newsletter_popup\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (document.querySelector("body.posts") && "true" != e)
      if ("ontouchstart" in document.documentElement)
        new DialogTrigger(
          function () {
            new DialogTrigger(newsletterModal, {
              trigger: "scrollUp",
              percentUp: 10,
            });
          },
          { trigger: "scrollDown", percentDown: 30 }
        );
      else
        new DialogTrigger(
          function () {
            new DialogTrigger(newsletterModal, { trigger: "exitIntent" });
          },
          { trigger: "scrollDown", percentDown: 30 }
        );
  },
  initScrollHelper = function () {
    if (0 < $(".scroll-helper:not(.loaded)").length) {
      var e =
          '<a href="#" data-google-interstitial="false" class="left-arrow"><svg class="svg-dark-contrast" enable-background="new 0 0 19 18" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg"><path d="m9.7 17.7c.4-.4.4-1 0-1.4l-6.3-6.3h14.6c.6 0 1-.4 1-1s-.4-1-1-1h-14.6l6.3-6.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-8 8c-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4s0 .3.1.4c0 .1.1.2.2.3l8 8c.4.4 1 .4 1.4 0z" fill="#000"/></svg></a>',
        t =
          '<a href="#" data-google-interstitial="false" class="right-arrow"><svg class="svg-dark-contrast" enable-background="new 0 0 19 18" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg"><path d="m9.3.3c-.4.4-.4 1 0 1.4l6.3 6.3h-14.6c-.6 0-1 .4-1 1s.4 1 1 1h14.6l-6.3 6.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l8-8c.1-.1.2-.2.2-.3.1-.1.1-.3.1-.4s0-.3-.1-.4c0-.1-.1-.2-.2-.3l-8-8c-.4-.4-1-.4-1.4 0z" fill="#000"/></svg></a>';
      $(".scroll-helper").each(function () {
        $(this).addClass("loaded"),
          $(this).prepend(e),
          $(this).append(t),
          $(this)
            .find(".left-arrow, .right-arrow")
            .on("click", function () {
              var e = $(this),
                t = e.parent().find(".scroll-helper-container");
              if (((scrollAmount = 0), e.hasClass("right-arrow")))
                var n = setInterval(function () {
                  (t[0].scrollLeft += t.width() / 10),
                    (scrollAmount += 10),
                    100 <= scrollAmount && window.clearInterval(n);
                }, 25);
              else
                n = setInterval(function () {
                  (t[0].scrollLeft -= t.width() / 10),
                    (scrollAmount += 10),
                    100 <= scrollAmount && window.clearInterval(n);
                }, 25);
              return !1;
            });
      });
    }
  },
  beforeAfter = function () {
    $(".ba-slider").each(function () {
      var e = $(this),
        t = e.width() + "px";
      e.find(".resize img").css("width", t),
        drags(e.find(".handle"), e.find(".resize"), e);
    }),
      0 < $("body.presets").length &&
        $(window).resize(function () {
          $(".ba-slider").each(function () {
            var e = $(this),
              t = e.width() + "px";
            e.find(".resize img").css("width", t);
          });
        });
  },
  // darkModeSwtich = function () {
  //   if (document.querySelector(".btn-darkmode"))
  //     return (document.querySelector(".btn-darkmode").onclick = function () {
  //       return (
  //         "dark" === document.documentElement.getAttribute("data-theme")
  //           ? (document.documentElement.setAttribute("data-theme", "light"),
  //             localStorage.setItem("theme", "light"),
  //             gtag("event", "GA4: Switch to Light Mode", {
  //               event_category: "General",
  //               event_label: document.title,
  //               event_page: window.location.pathname,
  //               event_content: document.title.substring(0, 150),
  //             }))
  //           : (document.documentElement.setAttribute("data-theme", "dark"),
  //             localStorage.setItem("theme", "dark"),
  //             gtag("event", "GA4: Switch to Dark Mode", {
  //               event_category: "General",
  //               event_label: document.title,
  //               event_page: window.location.pathname,
  //               event_content: document.title.substring(0, 150),
  //             })),
  //         !1
  //       );
  //     });
  // },
  addAdTag = function () {
    var e;
    document.getElementById("mediavine-script") ||
      (((e = document.createElement("script")).src =
        "https://scripts.mediavine.com/tags/bucketlistly.js"),
      (e.data_nooptimize = 1),
      (e.data_cfasync = !1),
      (e.async = !0),
      (e.id = "mediavine-script"),
      (e.onerror = function () {}),
      document.getElementsByTagName("body")[0].appendChild(e));
  },
  addStay22 = function () {
    var e, t, n, o, i, a;
    (e = window),
      (t = document),
      (n = "script"),
      (o = "https://scripts.stay22.com/letmeallez.js"),
      (e.Stay22 = e.Stay22 || {}),
      (e.Stay22.params = { aid: "bucketlistlyblog", excludes: ["booking"] }),
      (i = t.createElement(n)),
      (a = t.getElementsByTagName(n)[0]),
      (i.async = 1),
      (i.src = o),
      a.parentNode.insertBefore(i, a);
  },
  addWidgetsImmediately = function () {
    function e() {
      if (
        "undefined" == typeof sbRenDone &&
        0 != document.querySelectorAll("[data-sb-affid]").length
      ) {
        sbRenDone = !0;
        var c = 0;
        document.querySelectorAll("[data-sb-affid]").forEach(function (e) {
          var t = e.getAttribute("data-sb-affid"),
            n = e.getAttribute("data-sb-affurl"),
            o = e.getAttribute("data-sb-affnr"),
            i = e.getAttribute("data-sb-affset"),
            a = "www.safaribookings.com";
          void 0 !== document.domain &&
            0 <= document.domain.indexOf("safaribookings") &&
            "safaribookings.com" == (a = document.domain) &&
            (a = "www.safaribookings.com");
          var r = document.createElement("iframe"),
            s = "sbaff-" + Math.floor(1e6 * Math.random()),
            l =
              "https://" +
              a +
              n +
              (n.includes("?") ? "&sbaff=" : "?sbaff=") +
              t +
              "&nr=" +
              o +
              "&set=" +
              i +
              "&i=" +
              c;
          e.getAttribute("data-sb-tool") && (l += "&tool=1"),
            (e.style.display = "none"),
            r.setAttribute("id", s),
            r.setAttribute("data-index", c),
            r.setAttribute("frameborder", "1"),
            r.setAttribute("scrolling", "no"),
            r.setAttribute(
              "style",
              "border:none;position:relative;display:block;margin:0;padding:0;width:100%"
            ),
            r.setAttribute("src", l),
            e.appendChild(r),
            (e.style.display = "block"),
            c++;
        });
        var e = window.addEventListener ? "addEventListener" : "attachEvent";
        (0, window[e])(
          "attachEvent" == e ? "onmessage" : "message",
          function (e) {
            if (
              "https://www.safaribookings.com" == e.origin ||
              "http://www.safaribookings.com" == e.origin ||
              "https://dev.safaribookings.com" == e.origin ||
              "http://dev.safaribookings.com" == e.origin ||
              "https://local.frontend.safaribookings.com" == e.origin
            ) {
              var t = 0;
              if (
                void 0 !== e.data &&
                0 == e.data.toString().indexOf("_sb_iframe_resize")
              ) {
                var n = e.data.split("|"),
                  o = document.querySelector(
                    'iframe[data-index="' + n[1] + '"]'
                  );
                (o.style.height = parseInt(n[2]) + "px"),
                  0 < t && o.scrollIntoView(!0),
                  t++;
              }
            }
          },
          !1
        );
      }
    }
    var t, n, o, i, a, r, s, l, c, u;
    0 < $(".widget-block.viator").length &&
      (console.log("Loading Viator..."),
      (t = document),
      (n = "script"),
      (o = "https://www.viator.com/orion/partner/widget.js"),
      (i = t.createElement(n)),
      (a = t.getElementsByTagName(n)[0]),
      (i.id = "viator-script"),
      (i.type = "text/javascript"),
      (i.src = o),
      a.parentNode.insertBefore(i, a)),
      0 < $(".widget-block.getyourguide").length &&
        (console.log("Loading GetYourGuide..."),
        (r = document),
        (s = "script"),
        (l = "https://widget.getyourguide.com/dist/pa.umd.production.min.js"),
        (c = r.createElement(s)),
        (u = r.getElementsByTagName(s)[0]),
        c.setAttribute("data-gyg-partner-id", "TD8T478"),
        (c.async = !0),
        (c.src = l),
        u.parentNode.insertBefore(c, u)),
      0 < $(".widget-block.safaribookings").length &&
        (console.log("Loading SafariBookings..."),
        "undefined" == typeof sbRenDone && e());
  },
  addWidgets = function () {
    function e() {
      if (
        "undefined" == typeof sbRenDone &&
        0 != document.querySelectorAll("[data-sb-affid]").length
      ) {
        sbRenDone = !0;
        var c = 0;
        document.querySelectorAll("[data-sb-affid]").forEach(function (e) {
          var t = e.getAttribute("data-sb-affid"),
            n = e.getAttribute("data-sb-affurl"),
            o = e.getAttribute("data-sb-affnr"),
            i = e.getAttribute("data-sb-affset"),
            a = "www.safaribookings.com";
          void 0 !== document.domain &&
            0 <= document.domain.indexOf("safaribookings") &&
            "safaribookings.com" == (a = document.domain) &&
            (a = "www.safaribookings.com");
          var r = document.createElement("iframe"),
            s = "sbaff-" + Math.floor(1e6 * Math.random()),
            l =
              "https://" +
              a +
              n +
              (n.includes("?") ? "&sbaff=" : "?sbaff=") +
              t +
              "&nr=" +
              o +
              "&set=" +
              i +
              "&i=" +
              c;
          e.getAttribute("data-sb-tool") && (l += "&tool=1"),
            (e.style.display = "none"),
            r.setAttribute("id", s),
            r.setAttribute("data-index", c),
            r.setAttribute("frameborder", "1"),
            r.setAttribute("scrolling", "no"),
            r.setAttribute(
              "style",
              "border:none;position:relative;display:block;margin:0;padding:0;width:100%"
            ),
            r.setAttribute("src", l),
            e.appendChild(r),
            (e.style.display = "block"),
            c++;
        });
        var e = window.addEventListener ? "addEventListener" : "attachEvent";
        (0, window[e])(
          "attachEvent" == e ? "onmessage" : "message",
          function (e) {
            if (
              "https://www.safaribookings.com" == e.origin ||
              "http://www.safaribookings.com" == e.origin ||
              "https://dev.safaribookings.com" == e.origin ||
              "http://dev.safaribookings.com" == e.origin ||
              "https://local.frontend.safaribookings.com" == e.origin
            ) {
              var t = 0;
              if (
                void 0 !== e.data &&
                0 == e.data.toString().indexOf("_sb_iframe_resize")
              ) {
                var n = e.data.split("|"),
                  o = document.querySelector(
                    'iframe[data-index="' + n[1] + '"]'
                  );
                (o.style.height = parseInt(n[2]) + "px"),
                  0 < t && o.scrollIntoView(!0),
                  t++;
              }
            }
          },
          !1
        );
      }
    }
    if (0 < $(".widget-block.viator").length) {
      var r = new IntersectionObserver(
        function (e) {
          e.forEach(function (e) {
            var t, n, o, i, a;
            e.isIntersecting &&
              (console.log("Loading Viator..."),
              (t = document),
              (n = "script"),
              (o = "https://www.viator.com/orion/partner/widget.js"),
              (i = t.createElement(n)),
              (a = t.getElementsByTagName(n)[0]),
              (i.id = "viator-script"),
              (i.type = "text/javascript"),
              (i.src = o),
              a.parentNode.insertBefore(i, a),
              r.disconnect());
          });
        },
        { rootMargin: "0px 0px 2500px 0px" }
      );
      $(".widget-block.viator").each(function () {
        r.observe(this);
      });
    }
    if (0 < $(".widget-block.getyourguide").length) {
      var s = new IntersectionObserver(
        function (e) {
          e.forEach(function (e) {
            var t, n, o, i, a;
            e.isIntersecting &&
              (console.log("Loading GetYourGuide..."),
              (t = document),
              (n = "script"),
              (o =
                "https://widget.getyourguide.com/dist/pa.umd.production.min.js"),
              (i = t.createElement(n)),
              (a = t.getElementsByTagName(n)[0]),
              i.setAttribute("data-gyg-partner-id", "TD8T478"),
              (i.async = !0),
              (i.src = o),
              a.parentNode.insertBefore(i, a),
              s.disconnect());
          });
        },
        { rootMargin: "0px 0px 2500px 0px" }
      );
      $(".widget-block.getyourguide").each(function () {
        s.observe(this);
      });
    }
    0 < $(".widget-block.safaribookings").length &&
      "undefined" == typeof sbRenDone &&
      e();
  },
  initSkimlink = function () {
    var e, t, n, o, i;
    (e = document),
      (t = "script"),
      (n = "https://s.skimresources.com/js/197270X1675198.skimlinks.js"),
      (o = e.createElement(t)),
      (i = e.getElementsByTagName(t)[0]),
      (o.type = "text/javascript"),
      (o.src = n),
      i.parentNode.insertBefore(o, i);
  },
  delayedScript = function () {
    setTimeout(function () {
      addWidgetsImmediately(),
        setTimeout(underPopBooking, 3500),
        setTimeout(initNewsletterModal, 4500),
        setTimeout(addStay22, 5500),
        setTimeout(initSkimlink, 6500);
    }, 1e3);
  },
  loadNonCriticalCSS = function () {
    document.querySelector(".non-critical-css") &&
      document.querySelectorAll(".non-critical-css").forEach(function (e) {
        e.setAttribute("rel", "stylesheet");
      });
  },
  initHotJar = function () {
    var e, t, n, o, i, a;
    (e = window),
      (t = document),
      (n = "https://static.hotjar.com/c/hotjar-"),
      (o = ".js?sv="),
      (e.hj =
        e.hj ||
        function () {
          (e.hj.q = e.hj.q || []).push(arguments);
        }),
      (e._hjSettings = { hjid: 1136218, hjsv: 6 }),
      (i = t.getElementsByTagName("head")[0]),
      ((a = t.createElement("script")).async = 1),
      (a.src = n + e._hjSettings.hjid + o + e._hjSettings.hjsv),
      i.appendChild(a);
  },
  isSmartPhone = function () {
    return (
      (result = !1),
      ((window.matchMedia &&
        window.matchMedia(
          " only screen and (min-device-width : 280px) and (max-device-width : 480px)"
        ).matches) ||
        /(iPhone|iPod)/g.test(navigator.userAgent)) &&
        (result = !0),
      result
    );
  },
  isTablet = function () {
    return (
      (result = !1),
      ((window.matchMedia &&
        window.matchMedia(
          " only screen and (min-device-width : 768px) and (max-device-width : 1024px)"
        ).matches) ||
        /(iPhone|iPod)/g.test(navigator.userAgent)) &&
        (result = !0),
      result
    );
  },
  isDesktop = function () {
    return (result = !1), !(isTablet() || isSmartPhone());
  },
  underPopBooking = function () {
    0 < $("body.posts").length &&
      0 < $(".hotel-link").length &&
      isDesktop() &&
      !/^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
      ((hotel_link = $(".hotel-link").attr("href")),
      (links_to_apply = 'a[href*="goo.gl"], a.itinerary'),
      $(links_to_apply).click(function () {
        if (-1 === document.cookie.indexOf("booking_referral=true")) {
          (document.cookie = "booking_referral=true; path=/; max-age=2592000;"),
            gtag("event", "GA4: Underpop Activated", {
              event_category: "Posts",
              event_label: document.title,
              event_page: window.location.pathname,
              event_content: hotel_link,
            });
          var e = screen.width - 100,
            t = screen.height - 100,
            n = window.open(
              "",
              "mywindow",
              "width=100,height=100,left=" + e + ",top=" + t
            );
          n.onblur = function () {
            (n.document.location = hotel_link),
              n.resizeTo(
                window.document.body.clientWidth,
                window.document.body.clientHeight
              );
          };
        }
      }));
  },
  initGA = function () {
    gtag("js", new Date()),
      gtag("config", "G-6F88HCFTDF"),
      gtag("config", "G-2HN10R7ZXW"),
      document.querySelector("script.lazy-script") &&
        document.querySelectorAll("script.lazy-script").forEach(function (e) {
          return e.setAttribute("src", e.getAttribute("data-src"));
        });
  },
  task = [
    initGA,
    loadNonCriticalCSS,
    initLazyLoad,
    toTopInit,
    tableOfContentInit,
    makeEverythingStickyInit,
    addAdTag,
    initDestinationFilter,
    async_click,
    async_load,
    rellaxInit,
    stickyBuyInit,
    lightboxInit,
    autoFillComment,
    initLearnMore,
    searchInit,
    initGettyImages,
    bootstrapValidationinitIO,
    smallMicroTasks,
    pageLessPhotoPage,
    playPauseVideo,
    playPauseAudio,
    loadHDImageInPost,
    beforeAfter,
    // darkModeSwtich,
    trackingEventPosts,
    addNewDotInDropdown,
    initHotJar,
    delayedScript,
  ];
if ("requestIdleCallback" in window) requestIdleCallback(backgroundTask);
else for (; task.length; ) setTimeout(task.shift(), 1);
