"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onShow(() => {
      common_vendor.wx$1.hideHomeButton();
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/gs_workspace/bsgj_uni_app/water-manage-program/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
