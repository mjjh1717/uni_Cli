"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const utils_routeInterceptor = require("./utils/routeInterceptor.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/statistics/index.js";
  "./pages/message/index.js";
  "./pages/me/index.js";
  "./pages/attendance/index.js";
  "./pages/qualityEvaluation/index.js";
  "./pages/logMonthlyRpt/index.js";
  "./pages/addrBook/index.js";
  "./pages/login/index.js";
}
const _sfc_main = {
  onLaunch: function(options) {
    console.log("App Launch", options);
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/gs_workspace/bsgj_uni_app/water-manage-program/App.vue"]]);
utils_routeInterceptor.routeInterceptor();
common_vendor.index.redirectTo({ url: "/pages/home/index" });
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
