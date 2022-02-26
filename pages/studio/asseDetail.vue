<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content">考核详情</block>
	</cu-custom>
	<view class="you-page">
		<p class="studio_title">764工作室大一第一次考核题</p>
		<!-- 简介 -->
		<view class="award_box">
			<view class="title"></view>
			<text>考核内容</text>
			<p>前端方向：使用html，css，js完成农大官网的开发工作</p>
		</view>
		<view class="bottom_box">
			<button>下载文档</button>
			<button @click="assClick">提交考核</button>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		methods:{
			assClick() {
				uni.navigateTo({
					url:"submit"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.studio_title {
		margin: 2vh 4vw;
		font-weight: bolder;
		font-size: 1.2rem;
		
	}
	.award_box {
		display: flex;
		flex-wrap: wrap;
		.title {
			width: 1vw;
			height: 3vh;
			border-radius: 2px;
			background-color: skyblue;
			margin: 2vh 1vh;
			
		}
		text {
			font-size: 1rem;
			width: 90vw;
			// display: flex;
			// align-self: flex-end;
			margin-top: 2vh;
			font-weight: bold;
			// background-color: red;
		}
		p {
			font-size: 0.9rem;
			padding-left: 5vw;
			padding-right: 5vw;
			font-weight: bold;
		}
	}
	.bottom_box {
		width: 100vw;
		height: 12vh;
		display: flex;
		justify-content: center;
		align-items: center;
		button {
			width: 45vw;
			height: 8vh;
			background-color: skyblue;
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
