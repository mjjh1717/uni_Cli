"use strict";
const common_vendor = require("../common/vendor.js");
const routeInterceptor = () => {
  const whiteList = ["/pages/login/index"];
  const methodToPatch = ["navigateTo", "redirectTo", "switchTab", "navigateBack"];
  methodToPatch.map((item) => {
    const original = common_vendor.index[item];
    common_vendor.index[item] = function(options = {}) {
      console.log(whiteList.includes(options.url));
      if (!whiteList.includes(options.url) && false) {
        common_vendor.index.reLaunch({ url: "/pages/login/index" });
      } else {
        return original.call(this, options);
      }
    };
  });
};
exports.routeInterceptor = routeInterceptor;
