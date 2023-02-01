<template>
	<view>
		login
	</view>
</template>

<script setup>
	import { onShow } from '@dcloudio/uni-app';
	onShow(() => {
		// 隐藏返回按钮
		wx.hideHomeButton()
	})
</script>

<style lang="scss">

</style>
