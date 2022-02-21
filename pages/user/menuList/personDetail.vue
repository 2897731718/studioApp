<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-primary text-white" v-show="topShow">
		<block slot="backText">返回</block>
		<block slot="content">个人详情</block>
	</cu-custom>	
	<view class="you-page bg-white flex-column align-center">
		<view class="left-box flex-row flex-center" @click="BackPage" v-show="!topShow" :style="[{top:StatusBar + 'px'}, {height:StatusBar + 'px'}]">
			<view class="fa fa-angle-left radius-cr text-center" ></view>
		</view>
		<view class="bg-box">
			<image src="../../../static/13.jpg" mode=""></image>
			
			<view class="hed-img avatar-lg radius-cr shadow-mi">
				<image class="avatar-lg radius-cr" src="../../../static/background.jpeg" mode=""></image>
			</view>
		</view>
		<scroll-view scroll-y="true" @scroll="scroll">
			<view>
				<image style="width: 100vw; height: 300upx;" src="../../../static/13.jpg" mode=""></image>
				<image style="width: 100vw; height: 300upx;" src="../../../static/13.jpg" mode=""></image>
				<image style="width: 100vw; height: 300upx;" src="../../../static/13.jpg" mode=""></image>
			</view>
		</scroll-view>
		<view class="">
			hsdjfhjsd
		</view>
		
	</view>
	
</view>
</template>

<script>
	
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				topShow: false,
				
				
			};
		},
		mounted() {
			
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			},
			scroll(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
.you-page {
	height: 800upx;
	.left-box {
		width: 60upx;
		// height: 60upx;
		position: fixed;
		// top: 90upx;
		left: 30upx;
		z-index: 999;
		background-color: rgba(0, 0, 0, 0.3);
		font-size: 24px;
	}
	
	.bg-box {
		width: 100vw;
		min-height: 100upx;
		position: relative;
		
		image {
			width: 100vw;
			height: 360upx;
			
			
		}
		
		.hed-img {
			position: absolute;
			bottom: -60upx;
			left: 30upx;
			border: solid 4upx #ffffff;
			image {
				height: inherit;
				width: inherit;
			}
		}
	}
}
</style>
