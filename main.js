import App from './App'
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import routeInterceptor from '@/utils/routeInterceptor.js'

// 使用路由导航守卫
routeInterceptor()
// 第一次跳转一次判断是否有token
uni.redirectTo({ url: '/pages/home/index', })

export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	return {
		app,
		Pinia // 此处必须将 Pinia 返回
	}
}
