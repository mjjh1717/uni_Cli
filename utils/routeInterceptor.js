// 路由导航守卫

const routeInterceptor = () => {
	// 配置白名单
	const whiteList = ['/pages/login/index']
	const methodToPatch = ['navigateTo', 'redirectTo', 'switchTab', 'navigateBack']
	methodToPatch.map(item => {
		// 通过遍历的方式分别取出，uni.navigateTo、uni.redirectTo、uni.switchTab、uni.navigateBack
		// 并且对相应的方法做重写
		const original = uni[item]
		uni[item] = function(options = {}) {
			console.log(whiteList.includes(options.url))
			if (!whiteList.includes(options.url) && false) {
				// 判断是否存在token，不存在重定向到登录页
				// 此处的false是token的判断
				// !uni.getStorageSync("token")
				uni.reLaunch({ url: '/pages/login/index', })
			} else {
				return original.call(this, options)
			}
		}
	})
}

export default routeInterceptor
