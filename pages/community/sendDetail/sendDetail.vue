<!-- 
 @zsw
 2022-2-11
 -->
<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content"></block>
	</cu-custom>
	<view class="you-page bg-white flex-column">
		<!-- 
		 内容
		 种类
		 图片
		 链接
		 -->
		<view class="box-in margin-tb-xs radius-xs bg-five flex-row align-center justify-between">
			<view class="">选择类型</view>
			<picker class="text-black margin-right-sm" :range="kindData" mode="selector" @change="choseThirdKind">
				{{ kindData[kindIndex] }}
			</picker>
			<text class="fa fa-angle-right"></text>
		</view>
		<view class="content-box">
			<textarea :show-confirm-bar="false" v-model="content" placeholder="快来分享帖子吧~" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"/>
		</view>
		
		<view class="img-box bg-yellow-accent radius-sm flex-row flex-center">
			<!-- <view class="add fa fa-plus text-five"></view> -->
			<image  src="../../../static/background.jpeg" mode=""></image>
		</view>
		<view class="link-box flex align-center" >
			<text>{{ link }}</text>
			<view class="clipboard-btn radius-sm text-sm bg-gray margin-left-sm flex flex-center" @tap.stop="clipboardClick">复制</view>
		</view>
		<view class="cu-bar foot input flex-column align-center" v-show="linkShow" :style="[{bottom:InputBottom+'px'}]">
			<view class="top-box margin-bottom-sm flex-row align-center justify-between">
				<text class="fa fa-times" @tap="clickLink"></text>
				<text>添加链接</text>
				<view class="text-five" @tap="confirmAddLink">添加</view>
			</view>
			<input class="solid-bottom margin-tb-sm bg-gray radius-xs" 
				   :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
				   @focus="InputFocus" @blur="InputBlur" v-model="link" selectable="true"></input>
			
		</view>
		<view class="mask">
			
		</view>
		<view class="bottom-fixed bg-gray shadow-xs text-xl flex-row align-center" v-show="!linkShow" :style="[{bottom:InputBottom+'px'}]">
			<text class="fa fa-picture-o" @tap="addPicture"></text>
			<text class="fa fa-link margin-left-sm" @tap="clickLink"></text>
		</view>
	</view>	
</view>
</template>

<script>
	export default {
		data() {
			return {
				kindData: ['技术墙', '表白墙'],
				kindIndex: 0,
				InputBottom: 0,
				linkShow: false,
				link: 'https://uniapp.dcloud.io/api/system/clipboard',
				content: '',
				imageList: [],
				
			};
		},
		methods: {
			choseThirdKind: function(e) {
				this.kindIndex = e.detail.value
			},
			clipboardClick() {
				uni.setClipboardData({
				    data: this.link,
				    success: function () {
						uni.hideToast();
				        uni.getClipboardData({
				            success: function (res) {
								// console.log(res)
				                // this.$toast('复制成功', 1000, 'none', true)
				            }
				        })
				    }
				});
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			addPicture() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					// success: function(res) {
					// 	that.imageList.push (res.tempFilePaths); // push 是将新元素加到数组里
					// }
					success: (res => {
						// console.log(res.tempFiles);
						// this.imageList = res.tempFilePaths;
						// this.imageList.unshift(res.tempFilePaths); // 加到数组开头的 第一个
						// // let _imageList = this.imageList[0]
						// this.sendPicture(this.imageList[0])
						
						// this.newImageList = []
						
					})
				})
			},
			sendPicture() {
				uni.uploadFile({
					url: '', //仅为示例，非真实的接口地址
					filePath: path[0],
					name: 'file',
					formData: {
						orderId: this.orderId,
					},
					header: {
						'content-type': 'application/form-data',
						'token': uni.getStorageSync('token')
					},
					success: (res) => {
						console.log(res)
						
					}
				})
			},
			clickLink() {
				this.linkShow = !this.linkShow
			},
			confirmAddLink() {
				this.linkShow = !this.linkShow
			}
			
		}
	}
</script>

<style lang="scss">
.you-page {
	
	.box-in {
		width: 100vw;
		height: 80rpx;
		font-size: 14px;
		// background-color: #f1f2f6;
		position: relative;
		padding: 0 20upx;
		
		input {
			position: absolute;
			right: 80upx;
		}
		
		input {
			text-align: right; //控制 input 的显示方向
			width: 420upx;
			color: #606266;
		}
		
		.fa-angle-right {
			position: absolute;
			right: 20upx;
		}
	}

	.content-box {
		// border: 2upx solid #007AFF;
		width: 100vw;
		padding: 20upx;
		min-height: 100upx;
	}
	
	.img-box {
		margin: 20upx;
		width: 200upx;
		height: 200upx;
		
		image {
			width: inherit;
			height: inherit;
		}
		
		.add {
			font-size: 40px;
		}
	}
	
	.link-box {
		padding: 20upx;
		word-wrap: word-break;  // 指定如果足够长得话，应该换行
		word-break: break-all;
		
		.clipboard-btn {
			width: 80upx;
			border-radius: 20upx;
			font-size: 24upx;
			padding: 4upx 0;
		}
	}
	
	.cu-bar {
		padding: 20upx 20upx 20upx 40upx;
		height: 160upx;
		
		.top-box {
			width: 94%;
			
			.fa-times {
				font-size: 24px;
			}
		}
		
		.solid-bottom {
			padding: 0 20upx;
			width: 90%;
			height: 30upx;
		}
	}
	
	.bottom-fixed {
		width: 100vw;
		height: 80upx;
		position: fixed;
		bottom: 0;
		padding: 20upx;
	}
}
</style>
