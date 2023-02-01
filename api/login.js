import bsgjRequest from '@/utils/service/index.js'

// 获取login code
export function getLoginCode() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        const code = res.code
        console.log(code);
        resolve(code)
      },
      fail: err => {
        console.log(err)
        reject(err)
      }
    })
  })
}
// 登出
export function loginOut() {
  return bsgjRequest.post("/weiXin/logout")
}
// 账号密码登录
export function accLogin(username, password, type, code) {
  return bsgjRequest.postGet("/operator/login", { username,password,type,code })
}
// 微信登录
export function wxLogin(code) {
  return bsgjRequest.post("/weiXin/login", { code })
}
// 切换工程
export function groupLogin(type, group) {
  return bsgjRequest.postGet("/operator/login", { type,group })
}