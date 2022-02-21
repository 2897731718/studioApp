<!-- 
 @zsw
 2022-1-27
 -->
<template>
	<view class="box-main margin-bottom-xl flex-column bg-white fade-in">
		<navigator :url="'/pages/community/postPage/postPage?post_id=' + postId">
			<view class="top-box active margin-lr-sm margin-top-sm flex align-center">
				<navigator class="img-box avatar-sm radius-cr" url="/pages/user/menuList/personDetail">
					<image class="avatar-sm radius-cr shadow-xs" :src="headImg" mode=""></image>
				</navigator>
				<view class="box-in flex-column justify-center">
					<text class="text-bloder text-lg margin-left-sm margin-bottom-xs">{{ nickname }}</text>
					<view class="autograph text-xs margin-left-sm flex align-center">
						<text class= "autograph-in text-break margin-right-sm">{{ autograph }}</text>
						<text class="time">{{ time }}</text>
					</view>
				</view>
			</view>
			<view class="content-box active flex-column margin-lr-sm text-pre-wrap">
				<text class="content-in">{{ postContent }}</text>
				<view class="link-box flex align-center" v-if="false">
					<text class="text-five">{{ link }}</text>
					<view class="clipboard-btn radius-sm text-xxs bg-gray margin-left-sm flex flex-center" @tap.stop="clipboardClick">复制</view>
				</view>
				<view class="pic-box margin-top-sm" v-if="contentImg">
					<image :src="contentImg" mode=""></image>
				</view>
			</view>
		</navigator>
		<view class="bottom-box margin-lr-sm flex justify-between" v-if="true">
			<view class="btn-box flex flex-center" @tap.stop="handleShare">
				<view class="fa fa-share-alt"></view>
				<!-- <view class="">分享</view> -->
			</view>
			<navigator :url="'/pages/community/postPage/postPage?post_id=' + postId" 
					   class="btn-box flex flex-center" @tap.stop="handleComment" hover-class="other-navigator-hover">
				<view class="fa fa-commenting-o"></view>
				<!-- <view class="">0</view> -->
			</navigator>
			<view class="btn-box flex flex-center" @tap.stop="handleEncourage">
				<view class="fa fa-thumbs-o-up" :class="{'': encourageState == 0, 'text-second': encourageState == 1}"></view>
				<!-- <view class="">0</view> -->
			</view>	
		</view>
	</view>
</template>

<script>
export default {
	name: 'postDetail',
	data() {
		return {
			
		}
	},
	props:{
		postId: {
			type: Number,
			default: 0,
		},
		headImg: {
			type: String,
			default: '../../static/background.jpeg',
		},
		nickname: {
			type: String,
			default: 'popoppop',
		},
		autograph: {
			type: String,
			default: '欧拉欧拉欧拉欧拉欧拉',
		},
		time: {
			type: String,
			default: '2022-1-22',
		},
		postContent: {
			type: String,
			default: `hfjdshfjsjkdasjjjjjjjjjsaaaaaaaaaaa
				
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa无😊😊`,
		},
		link: {
			type: String,
			default: '',
		},
		contentImg: {
			type: String,
			default: '',
		},
		encourageState: {
			type: Number,
			default: 0
		}
	},
	methods: {
		handleShare() {
			this.$emit('share')
		},
		// handleComment() {
		// 	this.$emit('comment')
		// },
		handleEncourage() {
			this.$emit('encourage')
		},
		clipboardClick() {
			uni.setClipboardData({
			    data: this.link,
			    success: function () {
					uni.hideToast()
			        // uni.getClipboardData({
			        //     success: function (res) {
			        //         this.$toast('复制成功', 1000, 'none', true)
			        //     }
			        // })
			    }
			});
		}
	}
}
</script>

<style lang="scss" scoped>	
.box-main {
	// border: 2upx solid #0081FF;
	width: 100vw;
	// min-height: 400upx;
	height: auto;
	position: relative;
	
	.top-box {
		// border: 2upx solid #0081FF;
		width: 94vw;
		height: 160upx;
		
		
		.box-in {
			// border: 2upx solid #0081FF;
			width: 80%;
			height: 100upx;
			
			.autograph {
				width: 100%;
				height: 36upx;
				
				.autograph-in {
					width: 36%;
					height: inherit;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				
				.time {
					font-weight: 100;
				}
			}
		}
	}
	
	.content-box {
		// border: 2upx solid #0081FF;
		width: 94vw;
		padding: 20upx;
		
		.content-in {
			letter-spacing: 4upx;
			word-wrap: word-break;  // 指定如果足够长得话，应该换行
			word-break: break-all;
		}
		
		.link-box {
			word-wrap: word-break;  // 指定如果足够长得话，应该换行
			word-break: break-all;
			
			.clipboard-btn {
				width: 80upx;
				border-radius: 20upx;
				font-size: 24upx;
				padding: 4upx 0;
			}
		}
		
		.pic-box {
			width: 260upx;
			height: 260upx;
			
			image {
				width: inherit;
				height: inherit;
			}
		}
	}
	
	.bottom-box {
		border-top: 2upx solid #C4E1C5;
		height: 80upx;
		width: 94vw;
		
		.btn-box {
			height: inherit;
			width: 100upx;
		}
		
		.btn-box:active {
			background-color: #ffffff;
		}
	}
	
}

.active:active {
	background-color: #F1F2F6;
	opacity: .4;
}
</style>
