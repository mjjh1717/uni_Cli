"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_counter = require("../../stores/counter.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const activeClass = common_vendor.ref("yellowPage");
    const statusBarHeight = common_vendor.ref(100);
    common_vendor.onLoad(() => {
      common_vendor.index.getSystemInfo({
        success: (e) => {
          statusBarHeight.value = e.statusBarHeight;
        }
      });
    });
    const counter = stores_counter.useCounterStore();
    const homeClick = () => {
      console.log("\u70B9\u51FB");
      counter.increment();
    };
    return (_ctx, _cache) => {
      return {
        a: statusBarHeight.value + "px",
        b: common_vendor.t(common_vendor.unref(counter).count),
        c: common_vendor.o(homeClick),
        d: common_vendor.n(activeClass.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/gs_workspace/bsgj_uni_app/water-manage-program/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
