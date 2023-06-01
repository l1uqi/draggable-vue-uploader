import { ref as m, computed as B, openBlock as g, createElementBlock as _, createCommentVNode as U, createElementVNode as t, normalizeStyle as L, onMounted as F, createBlock as I, TransitionGroup as R, withCtx as j, Fragment as E, renderList as T, createVNode as q, pushScopeId as P, popScopeId as A, h as $ } from "vue";
const H = (v, s, o, a, l) => {
  const { action: h, headers: e } = v, i = new XMLHttpRequest();
  i.open("POST", h, !0), i.upload.onprogress = (p) => {
    if (p.lengthComputable) {
      const w = p.loaded / p.total * 100;
      o(Math.round(w));
    }
  }, i.onload = function() {
    i.status === 200 ? a(i.response) : l(i.statusText);
  }, i.onerror = function() {
    l(i.statusText);
  };
  const x = new FormData();
  x.append("file", s);
  for (const p of Object.keys(e))
    i.setRequestHeader(p, e[p]);
  i.send(x);
};
const N = { class: "draggable-upload" }, G = {
  key: 0,
  class: "draggable-upload-container"
}, X = /* @__PURE__ */ t("div", { class: "draggable-upload-icon" }, [
  /* @__PURE__ */ t("svg", {
    t: "1685080744217",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "3426",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "30",
    height: "30"
  }, [
    /* @__PURE__ */ t("path", {
      d: "M576 631.466667V725.333333h170.666667c59.733333-8.533333 106.666667-64 106.666666-128 0-72.533333-55.466667-128-128-128-17.066667 0-29.866667 4.266667-42.666666 8.533334V469.333333c0-93.866667-76.8-170.666667-170.666667-170.666666s-170.666667 76.8-170.666667 170.666666c0 17.066667 4.266667 29.866667 4.266667 46.933334-8.533333-4.266667-17.066667-4.266667-25.6-4.266667C260.266667 512 213.333333 558.933333 213.333333 618.666667S260.266667 725.333333 320 725.333333h170.666667v-93.866666l-46.933334 46.933333L384 618.666667l149.333333-149.333334 149.333334 149.333334-59.733334 59.733333-46.933333-46.933333z m0 93.866666v85.333334h-85.333333v-85.333334h-42.666667v85.333334h-128C213.333333 810.666667 128 725.333333 128 618.666667c0-85.333333 55.466667-157.866667 128-183.466667C273.066667 311.466667 379.733333 213.333333 512 213.333333c110.933333 0 209.066667 72.533333 243.2 170.666667 102.4 12.8 183.466667 102.4 183.466667 213.333333s-85.333333 200.533333-192 213.333334h-128v-85.333334h-42.666667z",
      fill: "#ccc",
      "p-id": "3427"
    })
  ])
], -1), J = [
  X
], K = {
  key: 1,
  class: "draggable-upload-picture"
}, Q = ["src"], W = { class: "draggable-upload-picture--mask" }, Y = { class: "draggable-upload-picture--mask-icon" }, Z = /* @__PURE__ */ t("path", {
  d: "M512 832c-156.448 0-296.021333-98.730667-418.410667-291.605333a52.938667 52.938667 0 0 1 0-56.789334C215.978667 290.730667 355.552 192 512 192c156.448 0 296.021333 98.730667 418.410667 291.605333a52.938667 52.938667 0 0 1 0 56.789334C808.021333 733.269333 668.448 832 512 832z m0-576c-129.514667 0-249.461333 83.850667-360.117333 256C262.538667 684.149333 382.485333 768 512 768c129.514667 0 249.461333-83.850667 360.117333-256C761.461333 339.850667 641.514667 256 512 256z m0 405.333333c-83.210667 0-150.666667-66.858667-150.666667-149.333333S428.789333 362.666667 512 362.666667s150.666667 66.858667 150.666667 149.333333S595.210667 661.333333 512 661.333333z m0-64c47.552 0 86.101333-38.208 86.101333-85.333333S559.552 426.666667 512 426.666667c-47.552 0-86.101333 38.208-86.101333 85.333333s38.549333 85.333333 86.101333 85.333333z",
  fill: "#ffffff",
  "p-id": "2410"
}, null, -1), e6 = [
  Z
], l6 = /* @__PURE__ */ t("path", {
  d: "M110.325 231.601h83.275l38.767 682.942c0.779 14.201 12.565 25.316 26.793 25.316h508.28c14.229 0 26.015-11.141 26.793-25.342l38.148-682.917h83.331c14.846 0 26.848-12.027 26.848-26.845 0-14.82-12.002-26.847-26.848-26.847h-210.236l-13.109-70.256c0-14.82-12-26.848-26.849-26.848h-305.029c-14.846 0-26.846 12.028-26.846 26.848l-13.109 70.256h-210.184c-14.847 0-26.847 12.027-26.847 26.847 0 14.819 11.974 26.846 26.821 26.846zM387.336 134.5h251.338l13.108 43.411h-277.554l13.109-43.411zM778.608 231.601l-36.563 654.593h-457.516l-37.156-654.592h531.234zM380.075 835.857c0.538 0 1.020 0 1.557-0.026 14.819-0.832 26.121-13.531 25.263-28.325l-28.242-497.594c-0.833-14.819-13.88-25.961-28.324-25.289-14.818 0.833-26.122 13.53-25.263 28.323l28.243 497.594c0.805 14.283 12.645 25.317 26.766 25.317zM643.436 835.832c0.539 0.026 1.022 0.026 1.557 0.026 14.121 0 25.961-11.033 26.767-25.317l28.242-497.594c0.833-14.792-10.469-27.489-25.262-28.323-14.579-0.618-27.465 10.47-28.324 25.289l-28.242 497.594c-0.833 14.794 10.47 27.492 25.261 28.325zM513.019 835.857c14.847 0 26.847-12.026 26.847-26.846v-497.595c0-14.818-12-26.847-26.847-26.847-14.846 0-26.846 12.029-26.846 26.847v497.595c0 14.82 12 26.846 26.846 26.846z",
  fill: "#fff",
  "p-id": "4492"
}, null, -1), t6 = [
  l6
], s6 = {
  key: 2,
  class: "progress"
}, o6 = { class: "progress-line" }, O = {
  __name: "upload",
  props: {
    action: String,
    name: String,
    data: Object,
    beforeUpload: Function,
    headers: {
      type: Object,
      default: {},
      required: !1
    },
    file: {
      type: Object,
      default: null,
      required: !1
    },
    url: {
      type: String,
      default: "",
      required: !1
    }
  },
  emits: [
    "change",
    "delete",
    "progress",
    "success",
    "error",
    "viewer"
  ],
  setup(v, { emit: s }) {
    const o = v, a = m(o.url), l = m(o.file), h = m(null), e = m({ loading: !1, percent: "" }), i = B(() => a.value !== "" && typeof a.value < "u" || l.value), x = (r) => {
      const M = r.target.files[0], S = new FileReader();
      h.value = "", S.onload = async () => {
        let V = !0;
        a.value = S.result, l.value = M, l.value.url = a.value, s("change", l.value), o.beforeUpload && (V = await o.beforeUpload(M)), V && (e.value.percent = "", e.value.loading = !0, H({
          ...o
        }, M, p, w, c));
      }, M && S.readAsDataURL(M);
    }, p = (r) => {
      e.value.percent = `${r}%`, s("progress", l.value, r);
    }, w = (r) => {
      e.value.loading = !1, s("success", l.value, r);
    }, c = (r) => {
      e.value.loading = !1, l.value = null, a.value = "", s("error", null, r);
    }, k = () => {
      s("delete", {
        file: l,
        url: a.value
      }), l.value = null, a.value = "";
    }, d = () => {
      s("viewer", a.value);
    };
    return (r, y) => (g(), _("div", N, [
      i.value ? U("", !0) : (g(), _("div", G, J)),
      t("input", {
        type: "file",
        class: "draggable-upload-input",
        ref: "fileInput",
        onChange: x
      }, null, 544),
      i.value ? (g(), _("div", K, [
        t("img", { src: a.value }, null, 8, Q),
        t("div", W, [
          t("div", Y, [
            (g(), _("svg", {
              t: "1685080359077",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "2409",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "20",
              height: "20",
              onClick: d
            }, e6)),
            (g(), _("svg", {
              t: "1685081236389",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "4491",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "20",
              height: "20",
              onClick: k
            }, t6))
          ])
        ])
      ])) : U("", !0),
      e.value.loading ? (g(), _("div", s6, [
        t("div", o6, [
          t("div", {
            class: "progress-line-inner",
            style: L({ width: e.value.percent })
          }, null, 4)
        ])
      ])) : U("", !0)
    ]));
  }
};
const n6 = ["draggable", "onDragstart", "onDragover"], a6 = {
  __name: "UploadList",
  props: {
    action: String,
    name: String,
    data: Object,
    beforeUpload: Function,
    fileList: Array,
    headers: {
      type: Object,
      default: {},
      required: !1
    },
    maximum: {
      type: Number,
      default: 10,
      required: !1
    }
  },
  emits: ["change", "delete", "progress", "success", "error"],
  setup(v, { emit: s }) {
    const o = v, a = m(null), l = m(0), h = m(-1), e = m(o.fileList);
    let i = 0, x = 200;
    F(() => {
      p();
    });
    const p = () => {
      e.value.length < o.maximum && e.value.push({ file: null, url: "", id: (/* @__PURE__ */ new Date()).getTime() });
    }, w = B(() => {
      let u = [];
      return e.value.forEach((n) => {
        (n.file !== null || n.url !== "") && u.push(n);
      }), u;
    }), c = (u, n) => {
      l.value = n, a.value = e.value[n];
    }, k = (u, n) => {
      const z = (/* @__PURE__ */ new Date()).getTime();
      u.preventDefault(), h.value = n, !(h.value === -1 || l.value === n || h.value === e.value.length - 1 || z - i <= x) && (i = z, e.value.splice(l.value, 1), e.value.splice(n, 0, a.value), l.value = n, a.value = e.value[n], s("change", w.value));
    }, d = (u, n) => {
      s("progress", u, n);
    }, r = (u, n, z) => {
      e.value[z].file = u, e.value[z].url = u.url, s("success", u, n);
    }, y = (u, n, z) => {
      e.value.splice(z, 1), s("error", u, n);
    }, M = (u, n) => {
      e.value[n].file = u, p(), s("change", w.value);
    }, S = (u, n) => {
      e.value.splice(n, 1), (e.value[e.value.length - 1].file !== null || e.value[e.value.length - 1].url !== "") && p(), s("delete", u, n);
    }, V = (u, n) => {
      s("viewer", u, n, w.value);
    };
    return (u, n) => (g(), I(R, {
      class: "draggable-upload-list",
      name: "flip-list",
      tag: "ul"
    }, {
      default: j(() => [
        (g(!0), _(E, null, T(e.value, (z, b) => (g(), _("li", {
          class: "draggable-upload-list--item",
          key: z.id,
          draggable: b < e.value.length - 1,
          onDragstart: (f) => c(f, b),
          onDragover: (f) => k(f, b)
        }, [
          q(O, {
            action: o.action,
            headers: o.headers,
            beforeUpload: o.beforeUpload,
            file: z.file,
            url: z.url,
            onChange: (f) => M(f, b),
            onDelete: (f) => S(f, b),
            onSuccess: (f, D) => r(f, D, b),
            onError: (f, D) => y(f, D, b),
            onProgress: d,
            onViewer: (f) => V(f, b)
          }, null, 8, ["action", "headers", "beforeUpload", "file", "url", "onChange", "onDelete", "onSuccess", "onError", "onViewer"])
        ], 40, n6))), 128))
      ]),
      _: 1
    }));
  }
};
const r6 = (v, s) => {
  const o = v.__vccOpts || v;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, C = (v) => (P("data-v-92b6ecc4"), v = v(), A(), v), i6 = { class: "viewer" }, c6 = /* @__PURE__ */ C(() => /* @__PURE__ */ t("svg", {
  t: "1685417633295",
  class: "icon viewer-close-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2365",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [
  /* @__PURE__ */ t("path", {
    d: "M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z",
    fill: "#ffffff",
    "p-id": "2366"
  })
], -1)), u6 = [
  c6
], d6 = { class: "viewer-container" }, v6 = ["src"], p6 = { class: "viewer-tools" }, h6 = /* @__PURE__ */ C(() => /* @__PURE__ */ t("svg", {
  t: "1685426295481",
  class: "viewer-tools-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3367",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [
  /* @__PURE__ */ t("path", {
    d: "M0 0h256v51.2H0z",
    fill: "#000",
    "p-id": "3368"
  }),
  /* @__PURE__ */ t("path", {
    d: "M51.2 0v256H0V0zM1024 0v256h-51.2V0z",
    fill: "#000",
    "p-id": "3369"
  }),
  /* @__PURE__ */ t("path", {
    d: "M1024 51.2h-256V0h256zM1024 1024h-256v-51.2h256z",
    fill: "#000",
    "p-id": "3370"
  }),
  /* @__PURE__ */ t("path", {
    d: "M972.8 1024v-256h51.2v256zM0 1024v-256h51.2v256z",
    fill: "#000",
    "p-id": "3371"
  }),
  /* @__PURE__ */ t("path", {
    d: "M0 972.8h256v51.2H0z",
    fill: "#000",
    "p-id": "3372"
  })
], -1)), g6 = ["fill"], w6 = ["fill"], f6 = /* @__PURE__ */ C(() => /* @__PURE__ */ t("path", {
  d: "M288 352v192h128v64h-128v64h192v-320h-192z m128 128h-64v-64h64v64zM544 352v320h192v-320h-192z m128 256h-64v-192h64v192zM957.44 531.84h1.344v-1.92l-1.344 1.92z",
  "p-id": "2456"
}, null, -1)), _6 = /* @__PURE__ */ C(() => /* @__PURE__ */ t("path", {
  d: "M46.72 474.88l35.84 55.04 1.28 1.92 35.84 55.04 60.16-119.04-32 1.92C168.96 277.76 331.52 128 529.28 128c211.904 0 384 172.16 384 384s-172.096 384-384 384c-140.16 0-263.04-75.52-329.6-188.16h-1.92l-0.64 0.64-53.12 31.36A446.592 446.592 0 0 0 529.28 960c247.744 0 448-200.32 448-448s-200.256-448-448-448C294.4 64 102.4 243.84 83.2 472.96l-36.48 1.92z",
  "p-id": "2457"
}, null, -1)), m6 = [
  f6,
  _6
], x6 = /* @__PURE__ */ C(() => /* @__PURE__ */ t("path", {
  d: "M288 352v192h128v64h-128v64h192v-320h-192z m128 128h-64v-64h64v64zM544 352v320h192v-320h-192z m128 256h-64v-192h64v192zM957.44 531.84h1.344v-1.92l-1.344 1.92z",
  "p-id": "5097"
}, null, -1)), z6 = /* @__PURE__ */ C(() => /* @__PURE__ */ t("path", {
  d: "M994.56 474.88l-35.84 55.04-1.28 1.92-35.84 55.04-60.16-119.04 32 1.92C872.32 277.76 709.76 128 512 128 300.16 128 128 300.16 128 512s172.16 384 384 384c140.16 0 263.04-75.52 329.6-188.16h1.856l0.704 0.704 53.056 31.296A446.4 446.4 0 0 1 512 960c-247.68 0-448-200.32-448-448s200.32-448 448-448c234.88 0 426.88 179.84 446.08 408.96l36.48 1.92z",
  "p-id": "5098"
}, null, -1)), k6 = [
  x6,
  z6
], b6 = {
  __name: "Viewer",
  props: {
    imgURL: String,
    index: Number,
    list: {
      type: Array,
      default: []
    },
    showImgViewer: Boolean
  },
  emits: ["close"],
  setup(v, { emit: s }) {
    const o = v, a = m(o.index), l = m(0), h = B(() => o.list.length > 1), e = m(o.imgURL), i = (w) => {
      if (!h.value)
        return;
      l.value = 0;
      let c = a.value + w;
      c > o.list.length - 1 && (c = 0), c < 0 && (c = o.list.length - 1), e.value = o.list[c].url, a.value = c;
    }, x = (w) => {
      l.value = l.value + w, (l.value === -360 || l.value === 360) && (l.value = 0);
    }, p = () => {
      s("close");
    };
    return (w, c) => (g(), _("div", i6, [
      t("div", {
        class: "viewer-close",
        onClick: p
      }, u6),
      t("div", d6, [
        t("img", {
          class: "viewer-container-img",
          style: L({ transform: "rotate(" + l.value + "deg)" }),
          src: e.value
        }, null, 12, v6)
      ]),
      t("div", p6, [
        h6,
        (g(), _("svg", {
          t: "1685428058884",
          class: "viewer-tools-icon",
          style: L(h.value ? "cursor: pointer;" : "cursor: not-allowed"),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "3191",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          onClick: c[0] || (c[0] = (k) => i(-1))
        }, [
          t("path", {
            d: "M768 278.624l-45.248-45.248L444.128 512l278.624 278.624L768 745.376 534.624 512zM288 832h64V192H288z",
            fill: h.value ? "#000" : "#dddddd",
            "p-id": "3192"
          }, null, 8, g6)
        ], 4)),
        (g(), _("svg", {
          t: "1685428125993",
          class: "viewer-tools-icon",
          style: L(h.value ? "cursor: pointer;" : "cursor: not-allowed"),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "3365",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          onClick: c[1] || (c[1] = (k) => i(1))
        }, [
          t("path", {
            d: "M256 278.624L489.376 512 256 745.376l45.248 45.248L579.872 512 301.248 233.376zM672 832h64V192h-64z",
            fill: h.value ? "#000" : "#dddddd",
            "p-id": "3366"
          }, null, 8, w6)
        ], 4)),
        (g(), _("svg", {
          t: "1685432878765",
          class: "viewer-tools-icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "2455",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          onClick: c[2] || (c[2] = (k) => x(-90))
        }, m6)),
        (g(), _("svg", {
          t: "1685432800892",
          class: "viewer-tools-icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "5096",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          onClick: c[3] || (c[3] = (k) => x(90))
        }, k6))
      ])
    ]));
  }
}, M6 = /* @__PURE__ */ r6(b6, [["__scopeId", "data-v-92b6ecc4"]]), y6 = {
  __name: "index",
  props: {
    action: String,
    name: String,
    data: Object,
    beforeUpload: Function,
    fileList: Array,
    url: String,
    maximum: Number,
    headers: Object
  },
  emits: ["change", "delete", "progress", "success", "error"],
  setup(v, { emit: s }) {
    const o = v, a = m(!1), l = m({
      imgURL: "",
      index: 0,
      list: []
    }), h = (d, r) => {
      s("progress", d, r);
    }, e = (d, r) => {
      s("success", d, r);
    }, i = (d, r) => {
      s("error", d, r);
    }, x = (d) => {
      s("change", d);
    }, p = (d, r) => {
      s("delete", d, r);
    }, w = (d, r, y) => {
      l.value.imgURL = d, y && (l.value.index = r, l.value.list = y), a.value = !0;
    }, c = () => {
      a.value = !1;
    }, k = () => {
      const d = {
        ...o,
        onChange: x,
        onDelete: p,
        onSuccess: e,
        onError: i,
        onProgress: h,
        onViewer: w
      };
      return $("div", null, [
        a.value ? $(M6, {
          ...l.value,
          showImgViewer: a.value,
          onClose: c
        }) : "",
        o.fileList ? $(a6, d) : $(O, d)
      ]);
    };
    return (d, r) => (g(), I(k));
  }
}, C6 = (v) => {
  v.component("draggable-upload", y6);
}, V6 = {
  install: C6
};
export {
  V6 as default
};
