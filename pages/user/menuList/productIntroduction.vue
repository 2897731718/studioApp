<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content">产品介绍</block>
	</cu-custom>
	<view class="you-page flex-column">
		<!-- <text class="title">开发人员</text>
		<view class="person-box bg-white flex-column">
			<text class="">前端:</text>
			<view class="margin-top-sm text-new">
				邓伊敏 高丰 曾书伟 (首字母排序)
			</view>
		</view>
		<view class="person-box bg-white flex-column">
			<text class="">后端:</text>
			<view class="margin-top-sm text-new">
				黄文杨 (首字母排序)
			</view>
		</view>
		<text class="title">开发背景</text> -->
		<view class="product-box text-new bg-white text-break">
			{{ productContent }}
		</view>
		<view class="name-box flex flex-center">
			<text class="studio-name text-sm">--- 由 π 工作室技术支持 ---</text>
		</view>
		
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				productContent: `该小程序是为软件学院服务，用于大创报名、赛事报名、赛事信息发布等，
				工作室考核以及文章分享、同时也为学院提供一个可以进行专业交流学习的平台，最后，希望这个平台能一直延续下去，
				也需要有新的学弟学妹进行维护升级`,
				
			};
		}
	}
</script>

<style lang="scss">
.you-page {
	position: relative;
	
	.title {
		margin: 20upx;
		font-weight: 300;
		font-size: 12px;
	}
	
	.person-box {
		width: 100vw;
		padding: 20upx;
	}
	
	.product-box {
		width: 100vw;
		padding: 20upx;
	}
	
	.name-box {
		position: absolute;
		width: 100vw;
		bottom: 160upx;
		font-weight: 200;
	}
}
</style>
