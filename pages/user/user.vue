<!-- 
 @zsw
 2022-1-22 start
 
 -->
<template name="user">
<view>
	<view class="you-page flex-column align-center">
		<!-- 个人信息 -->
		<view class="information-box flex align-center">
			<image class="shadow-sm margin-tb-sm radius-cr" src="../../static/logo.jpg" mode=""></image>
			<!-- <text class="nickname margin-left-sm text-bloder text-lg">popopoppo</text> -->
			<view class="content-box margin-left-sm flex-column justify-center">
				<text class="nickname text-bloder text-lg margin-bottom-sm">opopop</text>
				<text>暂未填写签名</text>
			</view>
			<navigator url="/pages/user/menuList/personDetail" 
					   class="right-box flex flex-center text-xs" hover-class="other-navigator-hover">
				<text>个人主页</text>
				<text class="fa fa-angle-right margin-left-sm"></text>
			</navigator>
		</view>
		<!-- 信息统计 -->
		<view class="number-box margin-top-xs flex align-center justify-around">
			<navigator class="item-box flex-column flex-center" 
				  v-for="(item, index) in menuList" :key="index"
				  :url="'/pages/user/menuList/' + item.path"
				  hover-class="other-navigator-hover">
				<text class="text-bloder text-xl">{{ item.count }}</text>
				<text>{{ item.name }}</text>
			</navigator>
		</view>
		<!-- 菜单 -->
		<!-- <view class="menu-list margin-top-xl radius-xs">
			<view class="menu-item flex-row align-center bg-white radius-xs" 
				  v-for="(item,index) in menuList" :key="index"
				  @click="toMenuPage(index)">
				<image class="margin-left-sm" :src="item.icon"></image>
				<text class="text-sm margin-left-sm ">{{ item.name }}</text>
				<text class="fa fa-angle-right"></text>
			</view>
		</view> -->
		<view class="menu-list flex-column align-center">
			<navigator url="/pages/user/menuList/productIntroduction" class=" margin-top-sm box-in bg-white flex-row align-center" @click="toProductIntroduction">
				<text class="fa fa-file-text-o margin-left-sm text-xl"></text>
				<text class="margin-left-xs">产品简介</text>
				<text class="fa fa-angle-right" aria-hidden="true"></text>
			</navigator>
			<navigator url="/pages/user/menuList/identity" class=" margin-top-sm box-in bg-white flex-row align-center" @click="toIdentity">
				<text class="fa fa-address-book-o margin-left-sm text-xl"></text>
				<text class="margin-left-xs">身份申请</text>
				<text class="fa fa-angle-right" aria-hidden="true"></text>
			</navigator>
			<view class=" margin-top-sm box-in bg-white flex-row align-center">
				<text class="fa fa-paper-plane-o margin-left-sm text-xl"></text>
				<text class="margin-left-xs">用户反馈</text>
				<text class="fa fa-angle-right" aria-hidden="true"></text>
				<button open-type="contact"></button>
			</view>
			<view class=" margin-top-sm box-in bg-white flex-row align-center" @click="toVitify">
				<text class="fa fa-arrow-left margin-left-sm text-xl"></text>
				<text class="margin-left-xs">退出登录</text>
				<text class="fa fa-angle-right" aria-hidden="true"></text>
			</view>
		</view>
		<!-- 退出登录确认 -->
		<view class="mask flex-column flex-center" v-show="vitifyShow" @touchmove.stop.prevent>
			<view class="prompt-box bg-white radius-xs flex-column flex-center">
				<text>是否退出登录</text>
				<view class="btn-box margin-top-xl flex-row">
					<view class="you-btn bg-gray text-black" @click.stop="cancel()">取消</view>
					<view class="you-btn bg-second text-white margin-left-sm" @click.stop="vitify()">确认</view>
				</view>
			</view>
		</view>
	</view>
</view>
</template>

<script>
	
	export default {
		data() {
			return {
				vitifyShow: false,
				menuList: [
					{
						path: 'browse',
						count: 0,
						name: '浏览'
					},
					{
						path: 'collection',
						count: 9999,
						name: '收藏'
					},
					{
						path: 'follow',
						count: 9999,
						name: '关注'
					},
				]
			};
		},
		methods: {
			// 跳转菜单页
			toGridMenuPage:function(index) {
				console.log('1')
				uni.navigateTo({
					url: this.menuList[index].path
				})
			},
			toProductIntroduction: function() {
				console.log('1')
				uni.navigateTo({
					url: 'pages/user/menuList/productIntroduction'
				})
			},
			toIdentity: function() {
				console.log('1')
				uni.navigateTo({
					url: 'pages/user/menuList/identity'
				})
			},
			cancel: function() {
				this.vitifyShow = !this.vitifyShow;
			},
			toVitify: function() {
				this.vitifyShow = !this.vitifyShow;
			},
			vitify: function () {
				uni.showLoading({
					title: '加载中...',
					mask: true
				});
				uni.clearStorageSync();
				setTimeout(() => {
					uni.reLaunch({
						url: 'pages/login/login'
					});
					uni.showToast({
						title: '退出成功',
						icon: 'success',
						duration: 1000,
						mask: true
					});
					this.vitifyShow = !this.vitifyShow;
				}, 1000)
			},
		}
	}
</script>

<style lang="scss">
.you-page {
	
	.information-box {
		// border: 2upx solid #0FB9B1;
		width: 94vw;
		height: 200upx;
		position: relative;
		
		image {
			border: 4upx solid #ffffff;
			height: 140upx;
			width: 140upx;
		}
		
		.content-box {
			
		}
		
		.right-box {
			// border: 2upx solid #0FB9B1;
			position: absolute;
			right: 0upx;
			height: 40upx;
			width: 160upx;
			font-weight: 200;
			
		}
	}
	
	.number-box {
		// border: 2upx solid #0FB9B1;
		width: 100vw;
		height: 100upx;
		
		.item-box {
			// border: 2upx solid #0FB9B1;
			height: inherit;
			
		}
	}
	
	.menu-list {
		width: 100vw;
		
		.box-in {
			width: 94vw;
			height: 100upx;
			font-size: 14px;
			border-radius: 10upx;
			position: relative;
			
			.fa-angle-right {
				position: absolute;
				right: 30upx;
				
			}
			
		}
		
		.box-in:active {
			background-color: #F1F2F6;
		}
	}
	
	.mask{
	    position: fixed;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    background-color: rgba(0,0,0,0.5);
	    z-index: 100;
	    // display: none;
		
		.prompt-box {
			width: 80%;
			height: 300upx;
			font-size: 18px;
			
			.btn-box{
				.you-btn {
					width: 220upx;
					height: 80upx;
				}
			}
		}
	}
}
</style>
