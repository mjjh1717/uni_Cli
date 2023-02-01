<template>
	<view class="homePage" :class="[activeClass]">
		<view :style="{ height: statusBarHeight + 'px' }" class="status"></view>
		<view class="homePage_header">MOUMOUMOU工程</view>
		<view>{{ counter.count }}</view>
		<button @click="homeClick">111111</button>
	</view>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
// 背景颜色的属性
const activeClass = ref('yellowPage')
const styleChange = () => {
	activeClass.value = 'grayPage'
}

const statusBarHeight = ref(100)
onLoad(() => {
	uni.getSystemInfo({
		success: e => {
			// 1as
			statusBarHeight.value = e.statusBarHeight
		}
	})
})

const counter = useCounterStore()
const homeClick = () => {
	console.log('点击')
	counter.increment()
}
</script>

<style lang="scss">
.homePage {
	width: 100%;
	height: 367px;
	left: 0px;
	top: 0px;
	.status {
		width: 100%;
	}
	.homePage_header {
		height: 85rpx;
		width: 100%;
		line-height: 85rpx;
		padding-left: 20px;
		font-size: 16px;
	}
}
// 背景样式
.yellowPage {
	background: linear-gradient(180deg, #fecf3c 0%, #f7f8fa 100%);
}
.grayPage {
	background: linear-gradient(180deg, #cbd0db 0%, #f7f8fa 100%);
}
.bluePage {
	background: linear-gradient(180deg, #8fb2ff 0%, #f7f8fa 100%);
}
</style>
