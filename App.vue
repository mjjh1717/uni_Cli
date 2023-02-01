<!-- 不支持steup语法 -->
<script>
export default {
	// App应用的生命周期函数
	onLaunch: function (options) {
		// 在这里可以获取到小程序设置的启动参数
		console.log('App Launch', options)
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	}
	// 定义全局的数据
}
</script>

<!-- App.vue 中的style标签不支持写scoped属性 -->
<style lang="scss">
/*每个页面公共css */
@import '@/static/css/base.scss';
</style>
