window.$adManagementConfig = window.$adManagementConfig || {};
window.$adManagementConfig.web = window.$adManagementConfig.web || {};
window.$adManagementConfig.web.cmp_version =
  "13adaa586e1080440be72fa0a37b1cb5ff0595a8";
window.$adManagementConfig.web.model = {
  offering: {
    id: "1",
    name: "Mediavine Ad Management",
    gam_network_code: "1030006",
    offering_code: "mediavine",
  },
  gdpr: "0",
  bidRequests: {
    leaderboard_atf: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "leaderboard_atf", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168624",
          zoneId: "812708",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Mediavine_ron_leaderboard_atf_970x250_Prebid",
        },
      },
    ],
    leaderboard_btf: [{ bidder: "amazon" }],
    sidebar_atf: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "sidebar_atf", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168624",
          zoneId: "812700",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: { inventoryCode: "Mediavine_ron_sidebar_atf_300x600_Prebid" },
      },
    ],
    sidebar_btf: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "sidebar_btf", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168624",
          zoneId: "812698",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: { inventoryCode: "Mediavine_ron_sidebar_btf_300x600_Prebid" },
      },
    ],
    adhesion_tablet: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "adhesion_tablet", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168644",
          zoneId: "812712",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Mediavine_ron_adhesion_tablet_728x90_HDX_Prebid",
        },
      },
    ],
    adhesion_mobile: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "adhesion_mobile", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168644",
          zoneId: "812710",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Mediavine_ron_adhesion_mobile_320x50_HDX_Prebid",
        },
      },
    ],
    adhesion_desktop: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "adhesion_desktop", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168624",
          zoneId: "812702",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Mediavine_ron_adhesion_desktop_728x90_Prebid",
        },
      },
    ],
    content_mobile: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "content_mobile", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168644",
          zoneId: "812714",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Mediavine_ron_content_btf_mobile_300x250_Prebid",
        },
      },
    ],
    content_btf: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "content_btf", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168624",
          zoneId: "812704",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: { inventoryCode: "Mediavine_ron_content_btf_300x250_Prebid" },
      },
    ],
    recipe_mobile: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "recipe_mobile", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168644",
          zoneId: "812716",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: { inventoryCode: "Mediavine_ron_recipe_mobile_300x250_Prebid" },
      },
    ],
    recipe_btf: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "recipe_btf", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168624",
          zoneId: "812706",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: { inventoryCode: "Mediavine_ron_recipe_btf_300x250_Prebid" },
      },
    ],
    comments_mobile: [{ bidder: "amazon" }],
    comments_btf: [{ bidder: "amazon" }],
    feed_mobile: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "feed_mobile", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168644",
          zoneId: "1270458",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Mediavine_ron_feed_btf_mobile_300x250_Prebid",
        },
      },
    ],
    feed_btf: [
      { bidder: "amazon" },
      {
        bidder: "pubmatic",
        params: { publisherId: "157108", adSlot: "feed_btf", bcat: [] },
      },
      {
        bidder: "rubicon",
        params: {
          accountId: "17404",
          siteId: "168624",
          zoneId: "1270454",
          inventory: { category: ["hobbies-and-interests", "travel"] },
        },
      },
      {
        bidder: "triplelift",
        params: { inventoryCode: "Mediavine_ron_feed_btf_300x250_Prebid" },
      },
    ],
    content_ibv_desktop: [
      {
        bidder: "triplelift",
        params: {
          inventoryCode:
            "Mediavine_ron_content_btf_300x250_brandedvideo_Prebid",
        },
      },
    ],
    content_ibv_mobile: [
      {
        bidder: "triplelift",
        params: {
          inventoryCode:
            "Mediavine_ron_content_btf_mobile_300x250_brandedvideo_Prebid",
        },
      },
    ],
    recipe_ibv_desktop: [
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Mediavine_ron_recipe_btf_300x250_brandedvideo_Prebid",
        },
      },
    ],
    recipe_ibv_mobile: [
      {
        bidder: "triplelift",
        params: {
          inventoryCode:
            "Mediavine_ron_recipe_mobile_300x250_brandedvideo_Prebid",
        },
      },
    ],
    sidebar_ibv_desktop: [
      {
        bidder: "triplelift",
        params: {
          inventoryCode:
            "Mediavine_ron_sidebar_atf_300x600_brandedvideo_Prebid",
        },
      },
    ],
    sticky_sidebar_ibv_desktop: [
      {
        bidder: "triplelift",
        params: {
          inventoryCode:
            "Mediavine_ron_sidebar_btf_300x600_brandedvideo_Prebid",
        },
      },
    ],
    feed_ibv_desktop: [
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "Mediavine_ron_feed_btf_300x250_brandedvideo_Prebid",
        },
      },
    ],
    feed_ibv_mobile: [
      {
        bidder: "triplelift",
        params: {
          inventoryCode:
            "Mediavine_ron_feed_btf_mobile_300x250_brandedvideo_Prebid",
        },
      },
    ],
  },
  country: "INTL",
  productionVersion: "2.89.1",
  videoVersion: "9.1.9",
  iabOptouts: [],
  newRelicBidRequests: true,
  id: 3887,
  ccpa: "0",
  cpa: "0",
  growSiteID: "be4ea092-3687-4430-b041-1ddc3c359bac",
  growFavesEnabled: true,
  mcmNetworkCode: "24468401",
  mcmStatusApproved: true,
  wswy: "1,3,9",
  s2sBidders: [
    "appnexus",
    "bidtellect",
    "centro",
    "chicory",
    "conversant",
    "criteo",
    "emx_digital",
    "gumgum",
    "huddled_masses",
    "improvedigital",
    "indexExchange",
    "mediadotnet",
    "mediagrid",
    "openx",
    "pubmatic",
    "pulsepoint",
    "rhythmone",
    "roundel",
    "rubicon",
    "sharethrough",
    "smartmedia",
    "sovrn",
    "the_trade_desk",
    "thirty_three_across",
    "triplelift",
    "verizon",
    "yieldmo",
    "nativo",
  ],
  sellerId: "630d66fe323fdb9b8d2c1303707bf378",
  normalizedDomain: "bucketlistly.blog",
  llCpm: 5.9,
  validAmznp: {
    display: ["w3pr0g", "1vorocg", "1uktatc"],
    outstream: ["w3pr0g"],
    video: ["w3pr0g", "1vorocg", "1uktatc", "b32i9s", "eexmv4", "1idb5z4"],
  },
  slug: "bucketlistly",
  uuid: "97b00da3-aed7-472b-bfe7-92d0116d6579",
  deactivated: false,
  adunit: "bucketlistly",
  title: "Bucketlistly Blog",
  domain: "bucketlistly.blog",
  testSite: false,
  videoSettings: {
    default_vtt: 0,
    disable_overlay: false,
    midroll_enabled: true,
    featured_video_id: null,
    player_background: "#000000",
    featured_video_type: "none",
    player_aspect_ratio: "fluid",
    sticky_content_side: false,
    custom_hoist_position: "",
    custom_hoist_selector: "",
    default_video_headline: "",
    auto_insert_headline_el: "h2",
    mobile_popout_placement: "bottom_left",
    hoist_first_video_mobile: false,
    mobile_popout_top_margin: 0,
    default_video_headline_el: "h2",
    hoist_first_video_desktop: false,
    featured_video_allow_selector: "",
  },
  category: { slug: "travel", title: "Travel" },
  categories: [
    {
      slug: "hobbies-and-interests",
      title: "Hobbies & Interests",
      iabCode: "IAB9",
    },
    { slug: "travel", title: "Travel", iabCode: "IAB20" },
  ],
  slots: [],
  psas: [],
  topLevelCategory: { slug: "travel", title: "Travel" },
  floor: 0.5,
  cb_dn: false,
  index: false,
  sovrn: true,
  ad_box: true,
  google: true,
  chicory: false,
  verizon: true,
  zergnet: false,
  appnexus: true,
  gumgum_id: "55d6ed38",
  custom_css:
    ".body.adhesion {\r\npadding-bottom: 160px !important;\r\n}\r\n\r\n.sidebar_btf_placeholder {\r\n    padding-top: 25px !important;\r\n}\r\n.video-block .embed-container iframe{\r\n       background: unset !important; \r\n}",
  killswitch: false,
  triplelift: true,
  zergnet_id: 67735,
  brand_color: "#41A4A9",
  display_ads: true,
  launch_mode: false,
  leaderboard: false,
  mcm_tagging: true,
  jtr_selector: "",
  mcm_eligible: true,
  recipe_float: false,
  spm_approval: true,
  below_content: false,
  ccpa_link_loc: "footer",
  feed_position: "",
  feed_selector: "",
  gutter_enable: false,
  gutter_offset: 0,
  mobile_inview: true,
  adhesion_close: false,
  adhesion_light: false,
  content_mobile: true,
  desktop_inview: true,
  less_lazy_mode: false,
  ad_box_bg_color: "#fafafa",
  adhesion_mobile: true,
  adhesion_tablet: true,
  content_desktop: true,
  footer_selector: "",
  gdpr_compliance: 1,
  gumgum_in_image: false,
  recipe_position: "",
  recipe_selector: "",
  adhesion_desktop: true,
  content_selector: ".posts .post_body",
  custom_ccpa_text: "",
  custom_cmp_color: "#41A4A9",
  disable_newrelic: false,
  enable_divbuster: false,
  comments_position: "",
  comments_selector: "",
  custom_cmp_header: "",
  enable_listbuster: false,
  ga_excluded_query: null,
  mv_native_enabled: true,
  outstream_density: "medium",
  url_change_reload: false,
  verification_mode: false,
  ccpa_modal_enabled: true,
  content_buffer_end: null,
  mediavine_comscore: true,
  youtube_channel_id: "UCootGfTV_uEDeB9mdpW26NQ",
  zergnet_traffic_id: 67964,
  disable_local_model: false,
  enable_mvp_branding: true,
  jtr_button_selector: "",
  privacy_policy_link: "https://www.bucketlistly.blog/privacy",
  recipe_slot_density: "default",
  blockthrough_enabled: false,
  content_buffer_begin: null,
  content_require_text: 1,
  divbuster_exclusions: "",
  dynamic_recipe_slots: true,
  interscroller_mobile: true,
  sidebar_atf_position: "afterend",
  sidebar_atf_selector: ".sidebar .block.intro",
  sidebar_btf_position: "beforeend",
  sidebar_btf_selector: "#sidebar_btf_target",
  video_adhesion_color: "#000000",
  content_stop_selector: "",
  interscroller_desktop: false,
  sidebar_minimum_width: 993,
  recipe_mobile_position: "",
  recipe_mobile_selector: "",
  total_content_selector: "",
  ad_box_placeholder_text: null,
  adhesion_allow_selector: "",
  content_selector_mobile: "",
  enable_interstitial_ads: true,
  gumgum_skip_first_image: false,
  universal_player_mobile: true,
  content_cba_mobile_limit: -1,
  jtr_arrival_unit_enabled: true,
  leaderboard_atf_position: "",
  leaderboard_atf_selector: "",
  leaderboard_btf_position: "",
  leaderboard_btf_selector: "",
  universal_player_desktop: true,
  zergnet_content_position: "",
  zergnet_content_selector: "",
  content_cba_desktop_limit: -1,
  content_cba_mobile_buffer: 3,
  optimize_mobile_pagespeed: true,
  sidebar_btf_stop_selector: ".article_footer",
  content_cba_desktop_buffer: 3,
  desktop_outstream_adhesion: false,
  display_content_after_flex: false,
  optimize_desktop_pagespeed: true,
  recipe_instruction_density: "default",
  sidebar_btf_disable_sticky: false,
  content_skip_after_selector: "",
  optimize_short_form_content: false,
  optimize_sticky_sidebar_cls: false,
  content_skip_before_selector: "",
  content_cba_mobile_percentage: 30,
  content_cba_desktop_percentage: 25,
  enable_desktop_interstitial_ads: true,
  universal_player_allow_selector: "",
  enable_automatic_recipe_selectors: true,
  leaderboard_atf_disable_billboard: false,
  nextroll: true,
  footer_branding: false,
  sidebar_btf_sticky_offset: null,
  indexExchange: false,
  emx_digital: true,
  uam: true,
  openx: true,
  centro: true,
  gumgum: true,
  nativo: false,
  rubicon: true,
  yieldmo: true,
  oneVideo: true,
  pubmatic: true,
  districtm: true,
  mediagrid: true,
  rhythmone: true,
  conversant: true,
  pulsepoint: true,
  smartmedia: true,
  ad_you_like: true,
  mediadotnet: true,
  sharethrough: true,
  huddled_masses: true,
  group_m_approved: true,
  triplelift_sensitive: false,
  urlFilters: [],
  optouts: [],
  wrapperSrc: "https://scripts.mediavine.com/tags",
  s2sSrc: "https://exchange.mediavine.com",
  s2sStagingSrc: "https://exchange-staging.mediavine.com",
  keywordSrc: "https://keywords.mediavine.com/keyword",
  launcherUrl: "https://scripts.mediavine.com",
  uamCode: "38918095-8e45-4332-88bf-226b3514cb64",
  requestModel: {
    v2: "a2342e62c74f673164993042b83ea294:64c4806b927efea94e4fb38412f01911173393dd2ab0284fc1e4b66774d2ea38f23396712a9f865f66d1ddee4af989dc9ce7226937828905ed8242e8566cafd48107f4dc80ec43437db5cc9e68b09871cc4b6119d1adf4d982f2e72838e65c386e9677e7f748fb9a6bc726a10c4a670688be94a3742a58aa17a68d4bcbceb4b72576e9861e97b39a2bdd08dedc10a039a0eb91f31d2343e7402ac52d942da944c76b8a72572cffcdcb7b5951b1c3e022215d7c5fc3a984f2177d1d248842559534580ba9d141150566d2ccbb199d6d67c439a481732169135df3eb8a3d23d7c7cba2ace3d125b83a15a881f9dc446a9a9ebfd9cd8b6844e6dd7725ae6d51e5de6bd112ed2d72bf7faf944a1e85a85cf20714a591f810f570fc1107ab94a7a365c78e31b7800015ac2733a03123a952ff18c11f408d280f35a3acfff9023999ed423c4cd1786d375d753bb16dcf4ca0be60e14874013d8e01446468bc8f4e77dc14305351207f8f4cf681af78a0f8d24c9963a72de3fd1b1f007600f1847bfce26d2ee49d620ac3ca46fc12c4c1b3ecbb2ef7e330111fb7ed5058c158605e87f9bd71aae9f8217b65c185c86c4d85bdeb4859c7611e3b7fccf0c09ef133099e665f5886452f420c4bb16ca42037eda22f97a8eba96c3004c99caf330af408cc101f5b53d2c31f24436d1817f3b96a7850e5784c59749bc606eb16d5ee1b75d83510512a8ab3114a0d32d94638e3ebc7e2769797bb8038b2a67ca1b5e8381ee1252c72298a80807a032241ca0288a616ee710ab0af46ff6163d0952efecd97fea61f7a6b7a48b7f631ad4688cc8bc6989dc60497b60c1ed5fd4e543b5a6e6329df32e260a0da7fa09319dc95d10708e20744b7a86b9e40db31a04031d21daee17966a549e3881bb9711a7a48ee23bdd2ceb4324e4f193f67ca981bfbd8d1f344466ba1c9906d731aa3d3803c6745699a53d0257ab61a49959a4d1d09970d7036bd031a691b2055f65684344e94fb54fe8b16416255d8d89858271fef90f1615332a8dc4a05a9c18faa4f162d60f9a49213d7f8d4606ec9d2eab06a2e700a0b6127b350fdd32c4c0a16e0674b1d61ca06ae17c65208022fef1e7378cbd0f66aa783b462af3b61d414ae1ac83bc5e9f07898fa4ccfd30cd5ebf097deda838431645ef143ca6d4705ca6e13a8d004e560db9c49be65fa0d28fcaa34c7a84a9587b874499020bf",
  },
};

if (!window.$adManagementConfig.web.model.disable_local_model) {
  var mediavineLocalModel =
    (window.$mediavine &&
      window.$mediavine.web &&
      window.$mediavine.web.localModel) ||
    {};
  var amcLocalModel =
    (window.$adManagementConfig &&
      window.$adManagementConfig.web &&
      window.$adManagementConfig.web.localModel) ||
    {};
  var localModel = { ...mediavineLocalModel, ...amcLocalModel };
  var localModelOverrides =
    !!localModel && localModel.constructor === Object ? localModel : {};
  window.$adManagementConfig.web.localModel = localModel;
  window.$adManagementConfig.web.model = {
    ...window.$adManagementConfig.web.model,
    ...localModelOverrides,
  };
}
var proxyHandler = {
  get: function (target, prop, receiver) {
    return Reflect.get(...arguments);
  },
};
window.$mediavine = new Proxy(window.$adManagementConfig, proxyHandler);
/*! For license information please see launcher.min.js.LICENSE.txt */
(() => {
  var e = {
      1206: function (e) {
        e.exports = (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var i = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var i in e)
                  r.d(
                    n,
                    i,
                    function (t) {
                      return e[t];
                    }.bind(null, i)
                  );
              return n;
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 90))
          );
        })({
          17: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n = r(18),
              i = (function () {
                function e() {}
                return (
                  (e.getFirstMatch = function (e, t) {
                    var r = t.match(e);
                    return (r && r.length > 0 && r[1]) || "";
                  }),
                  (e.getSecondMatch = function (e, t) {
                    var r = t.match(e);
                    return (r && r.length > 1 && r[2]) || "";
                  }),
                  (e.matchAndReturnConst = function (e, t, r) {
                    if (e.test(t)) return r;
                  }),
                  (e.getWindowsVersionName = function (e) {
                    switch (e) {
                      case "NT":
                        return "NT";
                      case "XP":
                      case "NT 5.1":
                        return "XP";
                      case "NT 5.0":
                        return "2000";
                      case "NT 5.2":
                        return "2003";
                      case "NT 6.0":
                        return "Vista";
                      case "NT 6.1":
                        return "7";
                      case "NT 6.2":
                        return "8";
                      case "NT 6.3":
                        return "8.1";
                      case "NT 10.0":
                        return "10";
                      default:
                        return;
                    }
                  }),
                  (e.getMacOSVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), 10 === t[0]))
                      switch (t[1]) {
                        case 5:
                          return "Leopard";
                        case 6:
                          return "Snow Leopard";
                        case 7:
                          return "Lion";
                        case 8:
                          return "Mountain Lion";
                        case 9:
                          return "Mavericks";
                        case 10:
                          return "Yosemite";
                        case 11:
                          return "El Capitan";
                        case 12:
                          return "Sierra";
                        case 13:
                          return "High Sierra";
                        case 14:
                          return "Mojave";
                        case 15:
                          return "Catalina";
                        default:
                          return;
                      }
                  }),
                  (e.getAndroidVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                      return 1 === t[0] && t[1] < 6
                        ? "Cupcake"
                        : 1 === t[0] && t[1] >= 6
                        ? "Donut"
                        : 2 === t[0] && t[1] < 2
                        ? "Eclair"
                        : 2 === t[0] && 2 === t[1]
                        ? "Froyo"
                        : 2 === t[0] && t[1] > 2
                        ? "Gingerbread"
                        : 3 === t[0]
                        ? "Honeycomb"
                        : 4 === t[0] && t[1] < 1
                        ? "Ice Cream Sandwich"
                        : 4 === t[0] && t[1] < 4
                        ? "Jelly Bean"
                        : 4 === t[0] && t[1] >= 4
                        ? "KitKat"
                        : 5 === t[0]
                        ? "Lollipop"
                        : 6 === t[0]
                        ? "Marshmallow"
                        : 7 === t[0]
                        ? "Nougat"
                        : 8 === t[0]
                        ? "Oreo"
                        : 9 === t[0]
                        ? "Pie"
                        : void 0;
                  }),
                  (e.getVersionPrecision = function (e) {
                    return e.split(".").length;
                  }),
                  (e.compareVersions = function (t, r, n) {
                    void 0 === n && (n = !1);
                    var i = e.getVersionPrecision(t),
                      o = e.getVersionPrecision(r),
                      s = Math.max(i, o),
                      a = 0,
                      u = e.map([t, r], function (t) {
                        var r = s - e.getVersionPrecision(t),
                          n = t + new Array(r + 1).join(".0");
                        return e
                          .map(n.split("."), function (e) {
                            return new Array(20 - e.length).join("0") + e;
                          })
                          .reverse();
                      });
                    for (n && (a = s - Math.min(i, o)), s -= 1; s >= a; ) {
                      if (u[0][s] > u[1][s]) return 1;
                      if (u[0][s] === u[1][s]) {
                        if (s === a) return 0;
                        s -= 1;
                      } else if (u[0][s] < u[1][s]) return -1;
                    }
                  }),
                  (e.map = function (e, t) {
                    var r,
                      n = [];
                    if (Array.prototype.map)
                      return Array.prototype.map.call(e, t);
                    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                    return n;
                  }),
                  (e.find = function (e, t) {
                    var r, n;
                    if (Array.prototype.find)
                      return Array.prototype.find.call(e, t);
                    for (r = 0, n = e.length; r < n; r += 1) {
                      var i = e[r];
                      if (t(i, r)) return i;
                    }
                  }),
                  (e.assign = function (e) {
                    for (
                      var t,
                        r,
                        n = e,
                        i = arguments.length,
                        o = new Array(i > 1 ? i - 1 : 0),
                        s = 1;
                      s < i;
                      s++
                    )
                      o[s - 1] = arguments[s];
                    if (Object.assign)
                      return Object.assign.apply(Object, [e].concat(o));
                    var a = function () {
                      var e = o[t];
                      "object" == typeof e &&
                        null !== e &&
                        Object.keys(e).forEach(function (t) {
                          n[t] = e[t];
                        });
                    };
                    for (t = 0, r = o.length; t < r; t += 1) a();
                    return e;
                  }),
                  (e.getBrowserAlias = function (e) {
                    return n.BROWSER_ALIASES_MAP[e];
                  }),
                  (e.getBrowserTypeByAlias = function (e) {
                    return n.BROWSER_MAP[e] || "";
                  }),
                  e
                );
              })();
            (t.default = i), (e.exports = t.default);
          },
          18: function (e, t, r) {
            "use strict";
            (t.__esModule = !0),
              (t.ENGINE_MAP =
                t.OS_MAP =
                t.PLATFORMS_MAP =
                t.BROWSER_MAP =
                t.BROWSER_ALIASES_MAP =
                  void 0),
              (t.BROWSER_ALIASES_MAP = {
                "Amazon Silk": "amazon_silk",
                "Android Browser": "android",
                Bada: "bada",
                BlackBerry: "blackberry",
                Chrome: "chrome",
                Chromium: "chromium",
                Electron: "electron",
                Epiphany: "epiphany",
                Firefox: "firefox",
                Focus: "focus",
                Generic: "generic",
                "Google Search": "google_search",
                Googlebot: "googlebot",
                "Internet Explorer": "ie",
                "K-Meleon": "k_meleon",
                Maxthon: "maxthon",
                "Microsoft Edge": "edge",
                "MZ Browser": "mz",
                "NAVER Whale Browser": "naver",
                Opera: "opera",
                "Opera Coast": "opera_coast",
                PhantomJS: "phantomjs",
                Puffin: "puffin",
                QupZilla: "qupzilla",
                QQ: "qq",
                QQLite: "qqlite",
                Safari: "safari",
                Sailfish: "sailfish",
                "Samsung Internet for Android": "samsung_internet",
                SeaMonkey: "seamonkey",
                Sleipnir: "sleipnir",
                Swing: "swing",
                Tizen: "tizen",
                "UC Browser": "uc",
                Vivaldi: "vivaldi",
                "WebOS Browser": "webos",
                WeChat: "wechat",
                "Yandex Browser": "yandex",
                Roku: "roku",
              }),
              (t.BROWSER_MAP = {
                amazon_silk: "Amazon Silk",
                android: "Android Browser",
                bada: "Bada",
                blackberry: "BlackBerry",
                chrome: "Chrome",
                chromium: "Chromium",
                electron: "Electron",
                epiphany: "Epiphany",
                firefox: "Firefox",
                focus: "Focus",
                generic: "Generic",
                googlebot: "Googlebot",
                google_search: "Google Search",
                ie: "Internet Explorer",
                k_meleon: "K-Meleon",
                maxthon: "Maxthon",
                edge: "Microsoft Edge",
                mz: "MZ Browser",
                naver: "NAVER Whale Browser",
                opera: "Opera",
                opera_coast: "Opera Coast",
                phantomjs: "PhantomJS",
                puffin: "Puffin",
                qupzilla: "QupZilla",
                qq: "QQ Browser",
                qqlite: "QQ Browser Lite",
                safari: "Safari",
                sailfish: "Sailfish",
                samsung_internet: "Samsung Internet for Android",
                seamonkey: "SeaMonkey",
                sleipnir: "Sleipnir",
                swing: "Swing",
                tizen: "Tizen",
                uc: "UC Browser",
                vivaldi: "Vivaldi",
                webos: "WebOS Browser",
                wechat: "WeChat",
                yandex: "Yandex Browser",
              }),
              (t.PLATFORMS_MAP = {
                tablet: "tablet",
                mobile: "mobile",
                desktop: "desktop",
                tv: "tv",
              }),
              (t.OS_MAP = {
                WindowsPhone: "Windows Phone",
                Windows: "Windows",
                MacOS: "macOS",
                iOS: "iOS",
                Android: "Android",
                WebOS: "WebOS",
                BlackBerry: "BlackBerry",
                Bada: "Bada",
                Tizen: "Tizen",
                Linux: "Linux",
                ChromeOS: "Chrome OS",
                PlayStation4: "PlayStation 4",
                Roku: "Roku",
              }),
              (t.ENGINE_MAP = {
                EdgeHTML: "EdgeHTML",
                Blink: "Blink",
                Trident: "Trident",
                Presto: "Presto",
                Gecko: "Gecko",
                WebKit: "WebKit",
              });
          },
          90: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(91)) && n.__esModule ? n : { default: n },
              o = r(18);
            function s(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            var a = (function () {
              function e() {}
              var t, r, n;
              return (
                (e.getParser = function (e, t) {
                  if ((void 0 === t && (t = !1), "string" != typeof e))
                    throw new Error("UserAgent should be a string");
                  return new i.default(e, t);
                }),
                (e.parse = function (e) {
                  return new i.default(e).getResult();
                }),
                (t = e),
                (n = [
                  {
                    key: "BROWSER_MAP",
                    get: function () {
                      return o.BROWSER_MAP;
                    },
                  },
                  {
                    key: "ENGINE_MAP",
                    get: function () {
                      return o.ENGINE_MAP;
                    },
                  },
                  {
                    key: "OS_MAP",
                    get: function () {
                      return o.OS_MAP;
                    },
                  },
                  {
                    key: "PLATFORMS_MAP",
                    get: function () {
                      return o.PLATFORMS_MAP;
                    },
                  },
                ]),
                (r = null) && s(t.prototype, r),
                n && s(t, n),
                e
              );
            })();
            (t.default = a), (e.exports = t.default);
          },
          91: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n = u(r(92)),
              i = u(r(93)),
              o = u(r(94)),
              s = u(r(95)),
              a = u(r(17));
            function u(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var c = (function () {
              function e(e, t) {
                if ((void 0 === t && (t = !1), null == e || "" === e))
                  throw new Error("UserAgent parameter can't be empty");
                (this._ua = e),
                  (this.parsedResult = {}),
                  !0 !== t && this.parse();
              }
              var t = e.prototype;
              return (
                (t.getUA = function () {
                  return this._ua;
                }),
                (t.test = function (e) {
                  return e.test(this._ua);
                }),
                (t.parseBrowser = function () {
                  var e = this;
                  this.parsedResult.browser = {};
                  var t = a.default.find(n.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.browser = t.describe(this.getUA())),
                    this.parsedResult.browser
                  );
                }),
                (t.getBrowser = function () {
                  return this.parsedResult.browser
                    ? this.parsedResult.browser
                    : this.parseBrowser();
                }),
                (t.getBrowserName = function (e) {
                  return e
                    ? String(this.getBrowser().name).toLowerCase() || ""
                    : this.getBrowser().name || "";
                }),
                (t.getBrowserVersion = function () {
                  return this.getBrowser().version;
                }),
                (t.getOS = function () {
                  return this.parsedResult.os
                    ? this.parsedResult.os
                    : this.parseOS();
                }),
                (t.parseOS = function () {
                  var e = this;
                  this.parsedResult.os = {};
                  var t = a.default.find(i.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.os = t.describe(this.getUA())),
                    this.parsedResult.os
                  );
                }),
                (t.getOSName = function (e) {
                  var t = this.getOS().name;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.getOSVersion = function () {
                  return this.getOS().version;
                }),
                (t.getPlatform = function () {
                  return this.parsedResult.platform
                    ? this.parsedResult.platform
                    : this.parsePlatform();
                }),
                (t.getPlatformType = function (e) {
                  void 0 === e && (e = !1);
                  var t = this.getPlatform().type;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.parsePlatform = function () {
                  var e = this;
                  this.parsedResult.platform = {};
                  var t = a.default.find(o.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t &&
                      (this.parsedResult.platform = t.describe(this.getUA())),
                    this.parsedResult.platform
                  );
                }),
                (t.getEngine = function () {
                  return this.parsedResult.engine
                    ? this.parsedResult.engine
                    : this.parseEngine();
                }),
                (t.getEngineName = function (e) {
                  return e
                    ? String(this.getEngine().name).toLowerCase() || ""
                    : this.getEngine().name || "";
                }),
                (t.parseEngine = function () {
                  var e = this;
                  this.parsedResult.engine = {};
                  var t = a.default.find(s.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.engine = t.describe(this.getUA())),
                    this.parsedResult.engine
                  );
                }),
                (t.parse = function () {
                  return (
                    this.parseBrowser(),
                    this.parseOS(),
                    this.parsePlatform(),
                    this.parseEngine(),
                    this
                  );
                }),
                (t.getResult = function () {
                  return a.default.assign({}, this.parsedResult);
                }),
                (t.satisfies = function (e) {
                  var t = this,
                    r = {},
                    n = 0,
                    i = {},
                    o = 0;
                  if (
                    (Object.keys(e).forEach(function (t) {
                      var s = e[t];
                      "string" == typeof s
                        ? ((i[t] = s), (o += 1))
                        : "object" == typeof s && ((r[t] = s), (n += 1));
                    }),
                    n > 0)
                  ) {
                    var s = Object.keys(r),
                      u = a.default.find(s, function (e) {
                        return t.isOS(e);
                      });
                    if (u) {
                      var c = this.satisfies(r[u]);
                      if (void 0 !== c) return c;
                    }
                    var d = a.default.find(s, function (e) {
                      return t.isPlatform(e);
                    });
                    if (d) {
                      var f = this.satisfies(r[d]);
                      if (void 0 !== f) return f;
                    }
                  }
                  if (o > 0) {
                    var l = Object.keys(i),
                      p = a.default.find(l, function (e) {
                        return t.isBrowser(e, !0);
                      });
                    if (void 0 !== p) return this.compareVersion(i[p]);
                  }
                }),
                (t.isBrowser = function (e, t) {
                  void 0 === t && (t = !1);
                  var r = this.getBrowserName().toLowerCase(),
                    n = e.toLowerCase(),
                    i = a.default.getBrowserTypeByAlias(n);
                  return t && i && (n = i.toLowerCase()), n === r;
                }),
                (t.compareVersion = function (e) {
                  var t = [0],
                    r = e,
                    n = !1,
                    i = this.getBrowserVersion();
                  if ("string" == typeof i)
                    return (
                      ">" === e[0] || "<" === e[0]
                        ? ((r = e.substr(1)),
                          "=" === e[1]
                            ? ((n = !0), (r = e.substr(2)))
                            : (t = []),
                          ">" === e[0] ? t.push(1) : t.push(-1))
                        : "=" === e[0]
                        ? (r = e.substr(1))
                        : "~" === e[0] && ((n = !0), (r = e.substr(1))),
                      t.indexOf(a.default.compareVersions(i, r, n)) > -1
                    );
                }),
                (t.isOS = function (e) {
                  return this.getOSName(!0) === String(e).toLowerCase();
                }),
                (t.isPlatform = function (e) {
                  return this.getPlatformType(!0) === String(e).toLowerCase();
                }),
                (t.isEngine = function (e) {
                  return this.getEngineName(!0) === String(e).toLowerCase();
                }),
                (t.is = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                  );
                }),
                (t.some = function (e) {
                  var t = this;
                  return (
                    void 0 === e && (e = []),
                    e.some(function (e) {
                      return t.is(e);
                    })
                  );
                }),
                e
              );
            })();
            (t.default = c), (e.exports = t.default);
          },
          92: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(17)) && n.__esModule ? n : { default: n },
              o = /version\/(\d+(\.?_?\d+)+)/i,
              s = [
                {
                  test: [/googlebot/i],
                  describe: function (e) {
                    var t = { name: "Googlebot" },
                      r =
                        i.default.getFirstMatch(
                          /googlebot\/(\d+(\.\d+))/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/opera/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/opr\/|opios/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      r =
                        i.default.getFirstMatch(
                          /(?:opr|opios)[\s/](\S+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/SamsungBrowser/i],
                  describe: function (e) {
                    var t = { name: "Samsung Internet for Android" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/Whale/i],
                  describe: function (e) {
                    var t = { name: "NAVER Whale Browser" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/MZBrowser/i],
                  describe: function (e) {
                    var t = { name: "MZ Browser" },
                      r =
                        i.default.getFirstMatch(
                          /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/focus/i],
                  describe: function (e) {
                    var t = { name: "Focus" },
                      r =
                        i.default.getFirstMatch(
                          /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/swing/i],
                  describe: function (e) {
                    var t = { name: "Swing" },
                      r =
                        i.default.getFirstMatch(
                          /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/coast/i],
                  describe: function (e) {
                    var t = { name: "Opera Coast" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/opt\/\d+(?:.?_?\d+)+/i],
                  describe: function (e) {
                    var t = { name: "Opera Touch" },
                      r =
                        i.default.getFirstMatch(
                          /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/yabrowser/i],
                  describe: function (e) {
                    var t = { name: "Yandex Browser" },
                      r =
                        i.default.getFirstMatch(
                          /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/ucbrowser/i],
                  describe: function (e) {
                    var t = { name: "UC Browser" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/Maxthon|mxios/i],
                  describe: function (e) {
                    var t = { name: "Maxthon" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/epiphany/i],
                  describe: function (e) {
                    var t = { name: "Epiphany" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/puffin/i],
                  describe: function (e) {
                    var t = { name: "Puffin" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/sleipnir/i],
                  describe: function (e) {
                    var t = { name: "Sleipnir" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/k-meleon/i],
                  describe: function (e) {
                    var t = { name: "K-Meleon" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/micromessenger/i],
                  describe: function (e) {
                    var t = { name: "WeChat" },
                      r =
                        i.default.getFirstMatch(
                          /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/qqbrowser/i],
                  describe: function (e) {
                    var t = {
                        name: /qqbrowserlite/i.test(e)
                          ? "QQ Browser Lite"
                          : "QQ Browser",
                      },
                      r =
                        i.default.getFirstMatch(
                          /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/msie|trident/i],
                  describe: function (e) {
                    var t = { name: "Internet Explorer" },
                      r = i.default.getFirstMatch(
                        /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/\sedg\//i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      r = i.default.getFirstMatch(
                        /\sedg\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/edg([ea]|ios)/i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      r = i.default.getSecondMatch(
                        /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/vivaldi/i],
                  describe: function (e) {
                    var t = { name: "Vivaldi" },
                      r = i.default.getFirstMatch(
                        /vivaldi\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/seamonkey/i],
                  describe: function (e) {
                    var t = { name: "SeaMonkey" },
                      r = i.default.getFirstMatch(
                        /seamonkey\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/sailfish/i],
                  describe: function (e) {
                    var t = { name: "Sailfish" },
                      r = i.default.getFirstMatch(
                        /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/silk/i],
                  describe: function (e) {
                    var t = { name: "Amazon Silk" },
                      r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/phantom/i],
                  describe: function (e) {
                    var t = { name: "PhantomJS" },
                      r = i.default.getFirstMatch(
                        /phantomjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/slimerjs/i],
                  describe: function (e) {
                    var t = { name: "SlimerJS" },
                      r = i.default.getFirstMatch(
                        /slimerjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t = { name: "BlackBerry" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = { name: "WebOS Browser" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = { name: "Bada" },
                      r = i.default.getFirstMatch(
                        /dolfin\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = { name: "Tizen" },
                      r =
                        i.default.getFirstMatch(
                          /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/qupzilla/i],
                  describe: function (e) {
                    var t = { name: "QupZilla" },
                      r =
                        i.default.getFirstMatch(
                          /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/firefox|iceweasel|fxios/i],
                  describe: function (e) {
                    var t = { name: "Firefox" },
                      r = i.default.getFirstMatch(
                        /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/electron/i],
                  describe: function (e) {
                    var t = { name: "Electron" },
                      r = i.default.getFirstMatch(
                        /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/MiuiBrowser/i],
                  describe: function (e) {
                    var t = { name: "Miui" },
                      r = i.default.getFirstMatch(
                        /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/chromium/i],
                  describe: function (e) {
                    var t = { name: "Chromium" },
                      r =
                        i.default.getFirstMatch(
                          /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/chrome|crios|crmo/i],
                  describe: function (e) {
                    var t = { name: "Chrome" },
                      r = i.default.getFirstMatch(
                        /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/GSA/i],
                  describe: function (e) {
                    var t = { name: "Google Search" },
                      r = i.default.getFirstMatch(
                        /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      r = e.test(/android/i);
                    return t && r;
                  },
                  describe: function (e) {
                    var t = { name: "Android Browser" },
                      r = i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/playstation 4/i],
                  describe: function (e) {
                    var t = { name: "PlayStation 4" },
                      r = i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/safari|applewebkit/i],
                  describe: function (e) {
                    var t = { name: "Safari" },
                      r = i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/.*/i],
                  describe: function (e) {
                    var t =
                      -1 !== e.search("\\(")
                        ? /^(.*)\/(.*)[ \t]\((.*)/
                        : /^(.*)\/(.*) /;
                    return {
                      name: i.default.getFirstMatch(t, e),
                      version: i.default.getSecondMatch(t, e),
                    };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          93: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(17)) && n.__esModule ? n : { default: n },
              o = r(18),
              s = [
                {
                  test: [/Roku\/DVP/],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                    return { name: o.OS_MAP.Roku, version: t };
                  },
                },
                {
                  test: [/windows phone/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.WindowsPhone, version: t };
                  },
                },
                {
                  test: [/windows /i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /Windows ((NT|XP)( \d\d?.\d)?)/i,
                        e
                      ),
                      r = i.default.getWindowsVersionName(t);
                    return {
                      name: o.OS_MAP.Windows,
                      version: t,
                      versionName: r,
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function (e) {
                    var t = { name: o.OS_MAP.iOS },
                      r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/macintosh/i],
                  describe: function (e) {
                    var t = i.default
                        .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                        .replace(/[_\s]/g, "."),
                      r = i.default.getMacOSVersionName(t),
                      n = { name: o.OS_MAP.MacOS, version: t };
                    return r && (n.versionName = r), n;
                  },
                },
                {
                  test: [/(ipod|iphone|ipad)/i],
                  describe: function (e) {
                    var t = i.default
                      .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                      .replace(/[_\s]/g, ".");
                    return { name: o.OS_MAP.iOS, version: t };
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      r = e.test(/android/i);
                    return t && r;
                  },
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /android[\s/-](\d+(\.\d+)*)/i,
                        e
                      ),
                      r = i.default.getAndroidVersionName(t),
                      n = { name: o.OS_MAP.Android, version: t };
                    return r && (n.versionName = r), n;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                        e
                      ),
                      r = { name: o.OS_MAP.WebOS };
                    return t && t.length && (r.version = t), r;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t =
                      i.default.getFirstMatch(
                        /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                        e
                      ) ||
                      i.default.getFirstMatch(
                        /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                        e
                      ) ||
                      i.default.getFirstMatch(/\bbb(\d+)/i, e);
                    return { name: o.OS_MAP.BlackBerry, version: t };
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                    return { name: o.OS_MAP.Bada, version: t };
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /tizen[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.Tizen, version: t };
                  },
                },
                {
                  test: [/linux/i],
                  describe: function () {
                    return { name: o.OS_MAP.Linux };
                  },
                },
                {
                  test: [/CrOS/],
                  describe: function () {
                    return { name: o.OS_MAP.ChromeOS };
                  },
                },
                {
                  test: [/PlayStation 4/],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.PlayStation4, version: t };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          94: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(17)) && n.__esModule ? n : { default: n },
              o = r(18),
              s = [
                {
                  test: [/googlebot/i],
                  describe: function () {
                    return { type: "bot", vendor: "Google" };
                  },
                },
                {
                  test: [/huawei/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                      r = { type: o.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                    return t && (r.model = t), r;
                  },
                },
                {
                  test: [/nexus\s*(?:7|8|9|10).*/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                  },
                },
                {
                  test: [/ipad/i],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/kftt build/i],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Amazon",
                      model: "Kindle Fire HD 7",
                    };
                  },
                },
                {
                  test: [/silk/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                  },
                },
                {
                  test: [/tablet(?! pc)/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/ipod|iphone/i),
                      r = e.test(/like (ipod|iphone)/i);
                    return t && !r;
                  },
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "Apple",
                      model: t,
                    };
                  },
                },
                {
                  test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                  },
                },
                {
                  test: [/[^-]mobi/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "blackberry" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "BlackBerry",
                    };
                  },
                },
                {
                  test: function (e) {
                    return "bada" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "windows phone" === e.getBrowserName();
                  },
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "Microsoft",
                    };
                  },
                },
                {
                  test: function (e) {
                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                    return "android" === e.getOSName(!0) && t >= 3;
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    return "android" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "macos" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop, vendor: "Apple" };
                  },
                },
                {
                  test: function (e) {
                    return "windows" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "linux" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "playstation 4" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tv };
                  },
                },
                {
                  test: function (e) {
                    return "roku" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tv };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          95: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(17)) && n.__esModule ? n : { default: n },
              o = r(18),
              s = [
                {
                  test: function (e) {
                    return "microsoft edge" === e.getBrowserName(!0);
                  },
                  describe: function (e) {
                    if (/\sedg\//i.test(e)) return { name: o.ENGINE_MAP.Blink };
                    var t = i.default.getFirstMatch(
                      /edge\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                    return { name: o.ENGINE_MAP.EdgeHTML, version: t };
                  },
                },
                {
                  test: [/trident/i],
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Trident },
                      r = i.default.getFirstMatch(
                        /trident\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: function (e) {
                    return e.test(/presto/i);
                  },
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Presto },
                      r = i.default.getFirstMatch(
                        /presto\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/gecko/i),
                      r = e.test(/like gecko/i);
                    return t && !r;
                  },
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Gecko },
                      r = i.default.getFirstMatch(
                        /gecko\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/(apple)?webkit\/537\.36/i],
                  describe: function () {
                    return { name: o.ENGINE_MAP.Blink };
                  },
                },
                {
                  test: [/(apple)?webkit/i],
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.WebKit },
                      r = i.default.getFirstMatch(
                        /webkit\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
        });
      },
      6808: (e, t, r) => {
        var n, i;
        !(function (o) {
          if (
            (void 0 ===
              (i = "function" == typeof (n = o) ? n.call(t, r, t, e) : n) ||
              (e.exports = i),
            !0,
            (e.exports = o()),
            !!0)
          ) {
            var s = window.Cookies,
              a = (window.Cookies = o());
            a.noConflict = function () {
              return (window.Cookies = s), a;
            };
          }
        })(function () {
          function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r) t[n] = r[n];
            }
            return t;
          }
          function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          }
          return (function r(n) {
            function i() {}
            function o(t, r, o) {
              if ("undefined" != typeof document) {
                "number" ==
                  typeof (o = e({ path: "/" }, i.defaults, o)).expires &&
                  (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
                  (o.expires = o.expires ? o.expires.toUTCString() : "");
                try {
                  var s = JSON.stringify(r);
                  /^[\{\[]/.test(s) && (r = s);
                } catch (e) {}
                (r = n.write
                  ? n.write(r, t)
                  : encodeURIComponent(String(r)).replace(
                      /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                      decodeURIComponent
                    )),
                  (t = encodeURIComponent(String(t))
                    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[\(\)]/g, escape));
                var a = "";
                for (var u in o)
                  o[u] &&
                    ((a += "; " + u),
                    !0 !== o[u] && (a += "=" + o[u].split(";")[0]));
                return (document.cookie = t + "=" + r + a);
              }
            }
            function s(e, r) {
              if ("undefined" != typeof document) {
                for (
                  var i = {},
                    o = document.cookie ? document.cookie.split("; ") : [],
                    s = 0;
                  s < o.length;
                  s++
                ) {
                  var a = o[s].split("="),
                    u = a.slice(1).join("=");
                  r || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                  try {
                    var c = t(a[0]);
                    if (((u = (n.read || n)(u, c) || t(u)), r))
                      try {
                        u = JSON.parse(u);
                      } catch (e) {}
                    if (((i[c] = u), e === c)) break;
                  } catch (e) {}
                }
                return e ? i[e] : i;
              }
            }
            return (
              (i.set = o),
              (i.get = function (e) {
                return s(e, !1);
              }),
              (i.getJSON = function (e) {
                return s(e, !0);
              }),
              (i.remove = function (t, r) {
                o(t, "", e(r, { expires: -1 }));
              }),
              (i.defaults = {}),
              (i.withConverter = r),
              i
            );
          })(function () {});
        });
      },
      3692: (e) => {
        var t = (e.exports = function (e) {
          return new r(e);
        });
        function r(e) {
          this.value = e;
        }
        function n(e, t, r) {
          var n = [],
            s = [],
            d = !0;
          return (function e(f) {
            var l = r ? i(f) : f,
              p = {},
              g = !0,
              h = {
                node: l,
                node_: f,
                path: [].concat(n),
                parent: s[s.length - 1],
                parents: s,
                key: n.slice(-1)[0],
                isRoot: 0 === n.length,
                level: n.length,
                circular: null,
                update: function (e, t) {
                  h.isRoot || (h.parent.node[h.key] = e),
                    (h.node = e),
                    t && (g = !1);
                },
                delete: function (e) {
                  delete h.parent.node[h.key], e && (g = !1);
                },
                remove: function (e) {
                  a(h.parent.node)
                    ? h.parent.node.splice(h.key, 1)
                    : delete h.parent.node[h.key],
                    e && (g = !1);
                },
                keys: null,
                before: function (e) {
                  p.before = e;
                },
                after: function (e) {
                  p.after = e;
                },
                pre: function (e) {
                  p.pre = e;
                },
                post: function (e) {
                  p.post = e;
                },
                stop: function () {
                  d = !1;
                },
                block: function () {
                  g = !1;
                },
              };
            if (!d) return h;
            function m() {
              if ("object" == typeof h.node && null !== h.node) {
                (h.keys && h.node_ === h.node) || (h.keys = o(h.node)),
                  (h.isLeaf = 0 == h.keys.length);
                for (var e = 0; e < s.length; e++)
                  if (s[e].node_ === f) {
                    h.circular = s[e];
                    break;
                  }
              } else (h.isLeaf = !0), (h.keys = null);
              (h.notLeaf = !h.isLeaf), (h.notRoot = !h.isRoot);
            }
            m();
            var v = t.call(h, h.node);
            return (
              void 0 !== v && h.update && h.update(v),
              p.before && p.before.call(h, h.node),
              g
                ? ("object" != typeof h.node ||
                    null === h.node ||
                    h.circular ||
                    (s.push(h),
                    m(),
                    u(h.keys, function (t, i) {
                      n.push(t), p.pre && p.pre.call(h, h.node[t], t);
                      var o = e(h.node[t]);
                      r && c.call(h.node, t) && (h.node[t] = o.node),
                        (o.isLast = i == h.keys.length - 1),
                        (o.isFirst = 0 == i),
                        p.post && p.post.call(h, o),
                        n.pop();
                    }),
                    s.pop()),
                  p.after && p.after.call(h, h.node),
                  h)
                : h
            );
          })(e).node;
        }
        function i(e) {
          if ("object" == typeof e && null !== e) {
            var t;
            if (a(e)) t = [];
            else if ("[object Date]" === s(e))
              t = new Date(e.getTime ? e.getTime() : e);
            else if (
              (function (e) {
                return "[object RegExp]" === s(e);
              })(e)
            )
              t = new RegExp(e);
            else if (
              (function (e) {
                return "[object Error]" === s(e);
              })(e)
            )
              t = { message: e.message };
            else if (
              (function (e) {
                return "[object Boolean]" === s(e);
              })(e)
            )
              t = new Boolean(e);
            else if (
              (function (e) {
                return "[object Number]" === s(e);
              })(e)
            )
              t = new Number(e);
            else if (
              (function (e) {
                return "[object String]" === s(e);
              })(e)
            )
              t = new String(e);
            else if (Object.create && Object.getPrototypeOf)
              t = Object.create(Object.getPrototypeOf(e));
            else if (e.constructor === Object) t = {};
            else {
              var r =
                  (e.constructor && e.constructor.prototype) ||
                  e.__proto__ ||
                  {},
                n = function () {};
              (n.prototype = r), (t = new n());
            }
            return (
              u(o(e), function (r) {
                t[r] = e[r];
              }),
              t
            );
          }
          return e;
        }
        (r.prototype.get = function (e) {
          for (var t = this.value, r = 0; r < e.length; r++) {
            var n = e[r];
            if (!t || !c.call(t, n)) {
              t = void 0;
              break;
            }
            t = t[n];
          }
          return t;
        }),
          (r.prototype.has = function (e) {
            for (var t = this.value, r = 0; r < e.length; r++) {
              var n = e[r];
              if (!t || !c.call(t, n)) return !1;
              t = t[n];
            }
            return !0;
          }),
          (r.prototype.set = function (e, t) {
            for (var r = this.value, n = 0; n < e.length - 1; n++) {
              var i = e[n];
              c.call(r, i) || (r[i] = {}), (r = r[i]);
            }
            return (r[e[n]] = t), t;
          }),
          (r.prototype.map = function (e) {
            return n(this.value, e, !0);
          }),
          (r.prototype.forEach = function (e) {
            return (this.value = n(this.value, e, !1)), this.value;
          }),
          (r.prototype.reduce = function (e, t) {
            var r = 1 === arguments.length,
              n = r ? this.value : t;
            return (
              this.forEach(function (t) {
                (this.isRoot && r) || (n = e.call(this, n, t));
              }),
              n
            );
          }),
          (r.prototype.paths = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(this.path);
              }),
              e
            );
          }),
          (r.prototype.nodes = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(this.node);
              }),
              e
            );
          }),
          (r.prototype.clone = function () {
            var e = [],
              t = [];
            return (function r(n) {
              for (var s = 0; s < e.length; s++) if (e[s] === n) return t[s];
              if ("object" == typeof n && null !== n) {
                var a = i(n);
                return (
                  e.push(n),
                  t.push(a),
                  u(o(n), function (e) {
                    a[e] = r(n[e]);
                  }),
                  e.pop(),
                  t.pop(),
                  a
                );
              }
              return n;
            })(this.value);
          });
        var o =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
        function s(e) {
          return Object.prototype.toString.call(e);
        }
        var a =
            Array.isArray ||
            function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            },
          u = function (e, t) {
            if (e.forEach) return e.forEach(t);
            for (var r = 0; r < e.length; r++) t(e[r], r, e);
          };
        u(o(r.prototype), function (e) {
          t[e] = function (t) {
            var n = [].slice.call(arguments, 1),
              i = new r(t);
            return i[e].apply(i, n);
          };
        });
        var c =
          Object.hasOwnProperty ||
          function (e, t) {
            return t in e;
          };
      },
    },
    t = {};
  function r(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var o = (t[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, r), o.exports;
  }
  (r.p = "/"),
    (() => {
      "use strict";
      const e = (e) => Math.floor(Math.random() * e) + 1;
      class t {
        constructor(e) {
          this.allExperiments = e;
        }
        activate(t) {
          const r = this.allExperiments.filter((e) => e && e.flag === t);
          if (!r.length) return null;
          let n;
          for (let e = 0; e < r.length; e++)
            if (r[e].default && !0 === r[e].default) {
              n = r[e];
              break;
            }
          if (!n) throw Error(`No default experiment provided for ${t}`);
          const i = r.reduce(
            (e, t) => (t && !t.default && t.percent + e) || e,
            0
          );
          let o = 10 * Math.max(100, i);
          const s = e(o);
          for (const e of r)
            if (!e.default && ((o -= 10 * e.percent), s > o)) {
              n = e;
              break;
            }
          const a = /random\((\d+.?\d*),\s*(\d+.?\d*),?\s*(\d+)\)/.exec(
            n.value
          );
          if (a) {
            return (function (e, t, r) {
              const n = Math.random() * (t - e) + e,
                i = Math.pow(10, r);
              return Math.floor(n * i) / i;
            })(parseFloat(a[1]), parseFloat(a[2]), parseInt(a[3], 10));
          }
          return n.value;
        }
      }
      var n = ((e) => (
        (e.velocityCheck = "velocityCheck"),
        (e.version = "version"),
        (e.contentMobileOffsetMultiplier = "content_mobile offset multiplier"),
        (e.contentBtfOffsetMultiplier = "content_btf offset multiplier"),
        (e.contentMobileTimeout = "Content Mobile Timeout"),
        (e.s2sBeta = "s2sBeta"),
        (e.recipeOffset = "Recipe Offset Multiplier"),
        (e.feedBtfOffsetMultiplier = "feed_btf Offset Multiplier"),
        (e.feedMobileOffsetMultiplier = "feed_mobile Offset Multiplier"),
        (e.feedMobileTimeout = "Feed Mobile Timeout"),
        e
      ))(n || {});
      function i(e, t = window.location.search) {
        return o(t)[e];
      }
      function o(e) {
        return e
          ? e
              .replace(/^\?/, "")
              .split("&")
              .reduce((e, t) => {
                let r = t.indexOf("=");
                r = -1 === r ? t.length : r;
                let n = t.slice(0, r);
                const i = decodeURIComponent(t.slice(r + 1));
                return (
                  /\[\]$/.test(n)
                    ? ((n = n.replace("[]", "")),
                      (e[n] = e[n] || []),
                      e[n].push(i))
                    : (e[n] = i || ""),
                  e
                );
              }, {})
          : {};
      }
      const s = (e) => {
        const t = e.map((e) => ({
          flag: n.s2sBeta,
          percent: parseFloat(e.trafficPercentage),
          value: e.version,
        }));
        return t.push({ default: !0, value: "production", flag: n.s2sBeta }), t;
      };
      const a = new (class {
        constructor(e) {
          (this.logLevel = e),
            (this.debug = (...e) => this.custom("debug", ...e));
        }
        custom(e, ...t) {
          return this.isCurrentLogLevel(e) && window.console.log(...t), this;
        }
        isCurrentLogLevel(e) {
          return (
            this.logLevel === e ||
            (Array.isArray(e) && -1 !== e.indexOf(this.logLevel))
          );
        }
      })(i("loglevel", window.location.search) || "silent");
      var u = ((e) => (
          (e.strict = "strict"), (e.lax = "lax"), (e.none = "none"), e
        ))(u || {}),
        c = Object.defineProperty,
        d = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        p = (e, t, r) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        g = (e, t) => {
          for (var r in t || (t = {})) f.call(t, r) && p(e, r, t[r]);
          if (d) for (var r of d(t)) l.call(t, r) && p(e, r, t[r]);
          return e;
        };
      const h = r(6808);
      r(3692);
      const m = Object.keys;
      var v;
      ((e) => {
        e.parse = function (e) {
          for (
            var r = t,
              n =
                r.parser[r.strictMode ? "strict" : "loose"].exec(e) || "strict",
              i = {},
              o = 14;
            o--;

          )
            i[r.key[o]] = n[o] || "";
          return (
            (i[r.q.name] = {}),
            i[r.key[12]].replace(r.q.parser, function (e, t, n) {
              t && (i[r.q.name][t] = n);
            }),
            i
          );
        };
        const t = {
          strictMode: !1,
          key: [
            "source",
            "protocol",
            "authority",
            "userInfo",
            "user",
            "password",
            "host",
            "port",
            "relative",
            "path",
            "directory",
            "file",
            "query",
            "anchor",
          ],
          q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
          parser: {
            strict:
              /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose:
              /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          },
        };
        (e.getParam = function (e) {
          for (
            var t = {},
              r = (e || window.location.search.substring(1)).split("&"),
              n = 0;
            n < r.length;
            n++
          ) {
            var i = r[n].split("=");
            if (void 0 === t[i[0]]) t[i[0]] = i[1];
            else if ("string" == typeof t[i[0]]) {
              var o = [t[i[0]], i[1]];
              t[i[0]] = o;
            } else t[i[0]].push(i[1]);
          }
          return t;
        }),
          (e.getHost = function (t) {
            return e.parse(t).host.replace("www.", "");
          });
      })(v || (v = {}));
      const b = class {
        constructor(e) {
          (this.depth = 0), (this.referrer = "");
          const t = !("1" === window.$adManagementConfig.web.model.gdpr && !e);
          if (window.$adManagementConfig.web.session || b.singletonSession)
            return (
              (b.singletonSession =
                b.singletonSession || window.$adManagementConfig.web.session),
              t && b.cookie.set(b.singletonSession),
              b.singletonSession
            );
          const r = b.cookie.value || {};
          var n;
          ((n = r),
          {
            onto: (e, t) =>
              n &&
              m(n).map((r) => {
                const i = n[r];
                (t && -1 !== t.indexOf(r)) || (e[r] = i);
              }),
          }).onto(this);
          const i = this.getReferrer();
          (this.referrer && this.referrer === i) || (this.depth = 0),
            this.depth++,
            (this.referrer = i),
            (b.singletonSession = this),
            (window.$adManagementConfig.web.session = this),
            t && b.cookie.set(this);
        }
        static updateSession() {
          return (
            delete b.singletonSession,
            delete window.$adManagementConfig.web.session,
            (b.singletonSession = new b()),
            (window.$adManagementConfig.web.session = b.singletonSession),
            b.singletonSession
          );
        }
        static resetSession() {
          return (
            delete b.singletonSession,
            delete window.$adManagementConfig.web.session,
            (b.singletonSession = new b()),
            (b.singletonSession.depth = 0),
            (b.singletonSession.referrer = ""),
            b.cookie.set(b.singletonSession),
            (window.$adManagementConfig.web.session = b.singletonSession),
            b.singletonSession
          );
        }
        setWrapperVersionGroup(e) {
          this.wrapperVersionGroup = e;
        }
        setVideoVersionGroup(e) {
          this.videoVersionGroup = e;
        }
        getReferrer() {
          const e = v.getHost(window.location.hostname),
            t = document.referrer,
            r = v.getHost(t),
            n = r.includes(e);
          return this.referrer
            ? t && this.referrer !== t && !n
              ? t
              : this.referrer
            : "" === r || n
            ? "DIRECT"
            : t;
        }
      };
      let w = b;
      w.cookie = new (class {
        constructor({ name: e, sameSite: t, maxAge: r }) {
          (this.name = e), (this.sameSite = t || u.strict), (this.maxAge = r);
        }
        set(e, t = {}) {
          const r = { sameSite: this.sameSite };
          this.maxAge && (t["max-age"] = String(this.maxAge)),
            h.set(this.name, e, g(g({}, r), t));
        }
        get value() {
          const e = h.get(this.name);
          try {
            return JSON.parse(e);
          } catch (t) {
            return e || "";
          }
        }
      })({ name: "mediavine_session", maxAge: 1800 });
      new w();
      var M = Object.defineProperty,
        y = Object.defineProperties,
        S = Object.getOwnPropertyDescriptors,
        O = Object.getOwnPropertySymbols,
        _ = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        P = (e, t, r) =>
          t in e
            ? M(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function F(r, o, s) {
        const u = i("wrapperVersion"),
          c = new w();
        if (u)
          return "prod" === u
            ? { version: r, name: r }
            : { version: u, name: "local" };
        if (window.$adManagementConfig.web.model.versionGroup)
          return window.$adManagementConfig.web.model.versionGroup;
        const d = o.find((e) => e.hotfix);
        if (d)
          return (
            a.debug("HOTFIXING VERSION:", {
              version: d.version,
              name: `${d.version}-beta-test`,
            }),
            { version: d.version, name: `${d.version}-beta-test` }
          );
        if (c.depth > 1 && c.wrapperVersionGroup) {
          const e = c.wrapperVersionGroup.version;
          if (e === r || o.some((t) => t.version === e))
            return c.wrapperVersionGroup;
        }
        const f = (function (e, t, r) {
            const n = "version",
              i = [];
            return (
              t
                .filter((e) => !e.slugs || e.slugs[r])
                .forEach((e) => {
                  i.push({
                    flag: n,
                    percent: parseInt(e.trafficPercentage, 10),
                    value: e.version,
                  });
                }),
              i.push({ flag: n, default: !0, value: "production" }),
              i
            );
          })(0, o, s),
          l = new t(f).activate(n.version);
        let p;
        if (l && r)
          if ("production" === l) p = { version: r, name: r };
          else {
            const t = 1e3,
              n = 0.5,
              i = e(t) <= t * n;
            p = {
              version: i ? l : r,
              name: i ? `${l}-beta-test` : `${l}-beta-control`,
            };
          }
        else p = { version: "", name: "local" };
        return c.setWrapperVersionGroup(p), p;
      }
      function k(e, t) {
        return t
          .filter((t) => {
            try {
              return (
                (!t.slugs && !t.modelRequirement) ||
                ((n = e),
                !!(r = t).slugs && Object.keys(r.slugs).includes(n.slug)) ||
                (function ({ modelRequirement: e }, t) {
                  if (!e) return !1;
                  const r = e.modelProperty
                    .split(".")
                    .reduce((e, t) => e && e[t], t);
                  return e.modelValue === r;
                })(t, e)
              );
            } catch (e) {
              return a.debug("ERROR: beta filter failed", e), !1;
            }
            var r, n;
          })
          .map((e) => {
            return (
              (t = ((e, t) => {
                for (var r in t || (t = {})) _.call(t, r) && P(e, r, t[r]);
                if (O) for (var r of O(t)) A.call(t, r) && P(e, r, t[r]);
                return e;
              })({}, e)),
              y(t, S({ slugs: void 0, modelRequirement: void 0 }))
            );
            var t;
          });
      }
      function B(e, t) {
        let r = [];
        return e
          ? (Object.values(e).forEach((e) => {
              const n = Object.keys(e.slugs || []);
              (n.includes(t) || 0 === n.length) &&
                (r = r.concat(e.experiments));
            }),
            r)
          : null;
      }
      function E(e, t) {
        const r = document.getElementsByTagName("script")[0],
          n = r.parentNode,
          i = `Error loading asset ${e.getAttribute("src")}`;
        n.insertBefore(e, r),
          e.addEventListener("load", () => (t ? t() : null)),
          e.addEventListener("error", () => (t ? t(i) : null));
      }
      function R(e) {
        const t = document.createElement("script");
        return (
          t.setAttribute("src", e), t.setAttribute("type", "text/javascript"), t
        );
      }
      var x = r(1206);
      const C = {
        fetch: function (e, t = "GET", r = null, n) {
          return new Promise((i, o) => {
            const s = new XMLHttpRequest();
            (s.onloadend = function () {
              try {
                (s.readyState === XMLHttpRequest.DONE && 200 === s.status) ||
                204 === s.status
                  ? i(s)
                  : o(s);
              } catch (e) {
                o(e);
              }
            }),
              s.open(t, e),
              "function" == typeof n && n(s),
              s.send(r);
          });
        },
        fetchJson: function (e, t = "GET", r = null, n) {
          return (
            (i = this),
            (o = null),
            (s = function* () {
              return C.fetch(e, t, r, n).then((e) =>
                JSON.parse(e.responseText)
              );
            }),
            new Promise((e, t) => {
              var r = (e) => {
                  try {
                    a(s.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                n = (e) => {
                  try {
                    a(s.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                a = (t) =>
                  t.done ? e(t.value) : Promise.resolve(t.value).then(r, n);
              a((s = s.apply(i, o)).next());
            })
          );
          var i, o, s;
        },
      };
      var N = Object.defineProperty,
        j = Object.defineProperties,
        L = Object.getOwnPropertyDescriptors,
        T = Object.getOwnPropertySymbols,
        $ = Object.prototype.hasOwnProperty,
        V = Object.prototype.propertyIsEnumerable,
        I = (e, t, r) =>
          t in e
            ? N(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const {
        slug: G,
        wrapperSrc: W,
        keywordSrc: q,
        launcherUrl: z,
        launch_mode: U,
        mcmNetworkCode: D,
      } = window.$adManagementConfig.web.model;
      (r.p =
        "development" === "MISSING_ENV_VAR".ENV
          ? "MISSING_ENV_VAR".WEBPACK_PUBLIC_PATH
          : `${window.$adManagementConfig.web.model.wrapperSrc}/`),
        U &&
          (function (e) {
            var t;
            E(R("https://securepubads.g.doubleclick.net/tag/js/gpt.js"));
            const r = document.createElement("div");
            (r.id = "mcm-verification"), document.body.appendChild(r);
            const n =
              (null == (t = window.$adManagementConfig.web.model.offering)
                ? void 0
                : t.gam_network_code) || "1030006";
            (window.googletag = window.googletag || { cmd: [] }),
              googletag.cmd.push(function () {
                googletag.pubads().disableInitialLoad(),
                  googletag.enableServices();
                const t = googletag
                  .defineSlot(
                    `/${n},${e}/verification`,
                    [1, 1],
                    "mcm-verification"
                  )
                  .addService(googletag.pubads());
                googletag.display("mcm-verification"),
                  googletag.pubads().refresh([t]);
              });
          })(D),
        (window.$adManagementConfig.bowser = x);
      const Q = `${z}/launcher/settings.json?off=${window.$adManagementConfig.web.model.offering.offering_code}`;
      C.fetchJson(Q)
        .catch((e) => ({
          productionVersion:
            window.$adManagementConfig.web.model.productionVersion,
          videoVersion: window.$adManagementConfig.web.model.videoVersion,
          betas: [],
          videoBetas: [],
          ampBetas: [],
          experiments: [],
          samplingRate: 0.1,
          overrides: {},
        }))
        .then((e) => {
          const r = (function (e) {
              return (
                (t = ((e, t) => {
                  for (var r in t || (t = {})) $.call(t, r) && I(e, r, t[r]);
                  if (T) for (var r of T(t)) V.call(t, r) && I(e, r, t[r]);
                  return e;
                })({}, e)),
                (r = {
                  betas: k(window.$adManagementConfig.web.model, e.betas),
                  videoBetas: k(
                    window.$adManagementConfig.web.model,
                    e.videoBetas
                  ),
                  ampBetas: k(window.$adManagementConfig.web.model, e.ampBetas),
                  experiments: B(
                    e.experiments,
                    window.$adManagementConfig.web.model.slug
                  ),
                }),
                j(t, L(r))
              );
              var t, r;
            })(e),
            o = (function (e) {
              const t = {};
              e &&
                Object.entries(e).forEach(([e, r]) => {
                  t[e] = r.value;
                });
              return t;
            })(e.overrides);
          Object.assign(window.$adManagementConfig.web.model, r),
            Object.assign(window.$adManagementConfig.web.model, o);
          const a = F(r.productionVersion, r.betas, G),
            u = ((e = window.$adManagementConfig.web.model.s2sBetas || []) => {
              const r = i("s2sVersion");
              if (r) return { group: "t", version: r, name: r };
              if (window.$adManagementConfig.web.s2sBetaSelection)
                return window.$adManagementConfig.web.s2sBetaSelection;
              const o = s(e),
                a = new t(o).activate(n.s2sBeta) || "production",
                u = Math.random() > 0.5 ? "t" : "c",
                c = {
                  group: u,
                  version: a,
                  name: "production" === a ? "production" : `${a}-${u}`,
                };
              return (window.$adManagementConfig.web.s2sBetaSelection = c), c;
            })(),
            c = (({ s2sSrc: e, s2sStagingSrc: t }, { name: r }) =>
              new RegExp("(.*)s2sStagingEnv-t$").test(r) ? t : e)(
              window.$adManagementConfig.web.model,
              u
            ),
            d = (function (e) {
              let t,
                r,
                n = 0;
              if (0 === e.length) return n;
              for (t = 0; t < e.length; t++)
                (r = e.charCodeAt(t)), (n = (n << 5) - n + r), (n |= 0);
              return n;
            })(a.name),
            f = `${W}/${a.version}/wrapper.min.js?bust=${d}`,
            l = `${c}/usersync.min.js?s2sVersion=${u.name}`,
            p = `${q}/web.keywords.js?pageUrl=${(() => {
              const e = document.querySelector('link[rel="canonical"]');
              return e && e.href ? e.href : window.location.href;
            })()}`;
          (window.$adManagementConfig.web.model.versionGroup =
            window.$adManagementConfig.web.model.versionGroup || a),
            (window.$adManagementConfig.web.startTime = Date.now());
          const g = R(f),
            h = R(l),
            m = R(p);
          E(g, () => window.$adManagementConfig.web.init()), E(h), E(m);
        });
    })();
})();
