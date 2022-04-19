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
		<view class="box-in margin-tb-sm shadow-xs flex-row align-center justify-between">
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
		
		<!-- <view class="img-box bg-yellow-accent radius-sm flex-row flex-center" v-show="!imageShow">
			<view class="add fa fa-picture-o" @tap="addPicture"></view>
		</view>
		<view class="img-box bg-yellow-accent radius-sm flex-row flex-center" v-show="imageShow">
			<image  :src="imageList[0]" ></image>
		</view> -->
		<!-- <view class="link-box flex align-center" >
			<text>{{ link }}</text>
			<view class="clipboard-btn radius-sm text-sm bg-gray margin-left-sm flex flex-center" @tap.stop="clipboardClick">复制</view>
		</view> -->
		<view class="state-detail margin-bottom-sm bg-white radius-xs flex-column align-center">
			<!-- <text class="remind margin-top-sm text-xs text-o">图片上传至最新生成订单，生成新订单，图片重新上传</text> -->
			
			<view class="photo-box border margin-top-sm margin-bottom-sm display-grid col-3">
				<view class="add-box flex-column flex-center">
					<view class="add fa fa-picture-o" @tap="firstAddPicture"></view>
					<!-- <image src="../../static/add.png" @click="addImage()"></image> -->
				</view>
				<view class="img-box" v-for="(item, index) in imageList" :key="index">
					<image :src="item" @click="previewImage(index)"></image>
					<view class="delete-btn radius-cr flex-row flex-center" @click="deleteImage(index)">
						<text class="fa fa-times text-lg text-red"></text>
					</view>
				</view>
				
				
			</view>
			
		</view>
		<view class="btn-box flex flex-center margin-top-lg">
			<view class="you-btn bg-four text-white comment-btn" @click="firstAddPost()">发布</view>
		</view>
		<!-- <view class="cu-bar foot input flex-column align-center" v-show="linkShow" :style="[{bottom:InputBottom+'px'}]">
			<view class="top-box margin-bottom-sm flex-row align-center justify-between">
				<text class="fa fa-times" @tap="clickLink"></text>
				<text>添加链接</text>
				<view class="text-five" @tap="confirmAddLink">添加</view>
			</view>
			<input class="solid-bottom margin-tb-sm bg-gray radius-xs" 
				   :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
				   @focus="InputFocus" @blur="InputBlur" v-model="link" selectable="true"></input>
			
		</view>
		
		<view class="bottom-fixed bg-gray shadow-xs text-xl flex-row align-center" v-show="!linkShow" :style="[{bottom:InputBottom+'px'}]">
			<text class="fa fa-picture-o" ></text>
			<text class="fa fa-link margin-left-sm" @tap="clickLink"></text>
		</view> -->
	</view>	
</view>
</template>

<script>
	export default {
		data() {
			return {
				kindData: ['技术帖', '生活帖'],
				kindIndex: 0,
				postTag: '技术帖',
				InputBottom: 0,
				linkShow: false,
				link: 'https://uniapp.dcloud.io/api/system/clipboard',
				content: '',
				imageList: [],
				imageShow: false,
				postId: '',
				
			};
		},
		methods: {
			choseThirdKind: function(e) {
				this.kindIndex = e.detail.value
				if(this.kindIndex == 0) {
					this.postTag = '技术帖'
				} else {
					this.postTag = '生活帖'
				}
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
			// 第一次添加图片时 会先发布帖子 获取 postId  
			firstAddPicture() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: (res => {
						this.imageList.unshift(res.tempFilePaths)
						console.log(this.imageList)
						
					})
				})
			},
			sendPicture: function(path) {
				// console.log(path)
				// let imageList = path
				console.log(this.postId, 111)
				console.log(path[0], 11)
				uni.uploadFile({
					url: 'https://test.kabubuda.xyz/community/image/upload', //仅为示例，非真实的接口地址
					filePath: path[0],
					name: 'file',
					formData: {
						postId: this.postId,
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
			deleteImage: function(index) {
				this.imageList.splice(index, 1)
			},
			// 预览图片
			previewImage: function(index) {
				let imgList = this.imageList[index];
				console.log(imgList);
				uni.previewImage({
					// 如果 是电脑相对路径的话 会一直转圈 无法预览
					current: index,
					urls: imgList,
					loop: true,
					success: function(res) {
						
					}
				})
				
			},
			clickLink() {
				this.linkShow = !this.linkShow
			},
			confirmAddLink() {
				this.linkShow = !this.linkShow
			},
			firstAddPost() {
				console.log(this.content, +this.kindIndex + 1, this.postTag)
				this.$post('/community/post/publish', {
					postContent: this.content,
					postType: +this.kindIndex + 1,
					postTag: this.postTag,
				}).then(res => {
					console.log(res)
					this.postId = res.data.postId
					// this.sendPicture(this.imageList)
					this.imageList.forEach(e => {
						console.log(e[0])
						this.sendPicture(e)
					})
					console.log(this.postId)
				})
			},
			modifyPost() {
				console.log(this.content, +this.kindIndex + 1, this.postTag)
				this.$post('/community/post/publish', {
					postContent: this.content,
					postType: this.kindIndex + 1,
					postTag: this.postTag,
					postId: this.postId
				}).then(res => {
					console.log(res)
					// this.postId = res.data.postId
					// this.sendPicture(this.imageList)
					console.log(this.postId)
				})
			},
			handleDelete() {
				this.$emit('deleteEvent')
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
	
	// .img-box {
	// 	margin: 20upx;
	// 	width: 200upx;
	// 	height: 200upx;
		
	// 	image {
	// 		width: inherit;
	// 		height: inherit;
	// 	}
		
	// 	.add {
	// 		font-size: 60px;
	// 	}
	// }
	
	.state-detail {
		width: 100vw;
		min-height: 100rpx;
		height: auto;
		
		.remind {
			width: 92%;
			word-wrap: word-break;
			word-break: break-all;
			
		}
		
		.photo-box {
			width: 100vw;
			min-height: 210upx;
			height: auto;
			place-items: center;
			
			.img-box {
				// width: 170rpx;
				height: 200upx;
				width: 200upx;
				padding: 20upx;
				position: relative;
				
				image {
					width: 100%;
					height: 100%;
					
				}
				
				.delete-btn {
					position: absolute;
					width: 60rpx;
					height: 60rpx;
					top: 50%;
					right: 50%;
					transform: translate(50%, -50%);
					background-color: rgba(0,0,0,.3);
					
				}
				
			}
			
			.add-box {
				width: 200upx;
				height: 200upx;
				padding: 20upx;
				
				.add {
					font-size: 60px;
				}
				// image {
				// 	width: 70%;
				// 	height: 70%;
				// }
			}
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
	
	.btn-box {
		width: 100vw;
		height: 80rpx;
		
		.you-btn {
			width: 200rpx;
			height: 80rpx;
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
