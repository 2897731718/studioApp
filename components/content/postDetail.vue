<!-- 
 @zsw
 2022-1-27
 -->
<template>
	<view class="box-main margin-bottom-xl flex-column bg-white fade-in">
		<!-- <navigator :url="'/pages/community/postPage/postPage?post_id=' + postId">
			<view class="top-box active margin-lr-sm margin-top-sm flex align-center">
				<navigator class="img-box avatar-sm radius-cr" :url="'/pages/user/menuList/personDetail?openid=' + encodeURIComponent(JSON.stringify(openid))">
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
		</navigator> -->
		<view>
			<view class="top-box active margin-lr-sm margin-top-sm flex align-center">
				<navigator class="img-box avatar-sm radius-cr" v-if="openId" :url="'/pages/user/menuList/personDetail?openid=' + encodeURIComponent(JSON.stringify(openId))">
					<image class="avatar-sm radius-cr shadow-xs" :src="headImg" mode=""></image>
				</navigator>
				<view class="img-box avatar-sm radius-cr" v-if="!openId">
					<image class="avatar-sm radius-cr shadow-xs" :src="headImg" mode=""></image>
				</view>
				<view class="box-in flex-column justify-center">
					<text class="text-bloder text-lg margin-left-sm margin-bottom-xs">{{ nickname }}</text>
					<view class="autograph text-xs margin-left-sm flex align-center">
						<text class= "autograph-in text-break margin-right-sm">{{ autograph }}</text>
						<text class="time">{{ time }}</text>
					</view>
				</view>
				<view class="comment-btn you-btn bg-red text-xxs radius-sm shadow-xs text-white flex flex-center" 
					  @click="handleDelete()" v-if="openId == myOpenId">删除</view>
			</view>
			<view class="content-box active flex-column margin-lr-sm text-pre-wrap">
				<text class="content-in margin-left-sm" v-if='postContent != undefined'>{{ postContent }}</text>
				<view class="link-box flex align-center" v-if="false">
					<text class="text-five">{{ link }}</text>
					<view class="clipboard-btn radius-sm text-xxs bg-gray margin-left-sm flex flex-center" @tap.stop="clipboardClick">复制</view>
				</view>
				<view class="photo-box margin-top-sm margin-bottom-sm display-grid col-3" v-if="contentImg[0]">
					<view class="img-box" v-for="item in contentImg" :key="item.imageId">
						<image :src="item.imageUrl" ></image>
					</view>
				</view>
				
			</view>
		</view>
		<view class="bottom-box margin-lr-sm flex justify-between" v-if="true">
			<!-- <view class="btn-box flex flex-center" @tap.stop="handleShare">
				<view class="fa fa-share-alt"></view>
			</view>
			<navigator :url="'/pages/community/postPage/postPage?post_id=' + postId" 
					   class="btn-box flex flex-center" @tap.stop="handleComment" hover-class="other-navigator-hover">
				<view class="fa fa-commenting-o"></view>
			</navigator>
			<view class="btn-box flex flex-center" @tap.stop="handleEncourage">
				<view class="fa fa-thumbs-o-up" :class="{'': encourageState == 0, 'text-second': encourageState == 1}"></view>
			</view>	 -->
		</view>
	</view>
</template>

<script>
export default {
	name: 'postDetail',
	data() {
		return {
			myOpenId: ''
		}
	},
	created() {
		this.myOpenId = uni.getStorageSync('openid')
	},
	props:{
		postId: {
			type: String,
			default: 0,
		},
		openId: {
			type: String,
			default: '',
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
			// type: String,
			default: '欧拉欧拉欧拉欧拉欧拉',
		},
		time: {
			// type: String,
			default: '2022-1-22',
		},
		postContent: {
			// type: String,
			default: '',
		},
		link: {
			type: String,
			default: '',
		},
		contentImg: {
			type: Array,
			default: [],
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
		},
		handleDelete() {
			this.$emit('deletePost')
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
	
	
	.top-box {
		// border: 2upx solid #0081FF;
		width: 94vw;
		height: 160upx;
		position: relative;
		
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
		
		.comment-btn {
			width: 100upx;
			height: 50upx;
			position: absolute;
			top: 20upx;
			right: 20upx;
			font-size: 14px;
			
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
		
		.photo-box {
			width: 100%;
			min-height: 210upx;
			height: auto;
			place-items: center;
			
			.img-box {
				// width: 170rpx;
				height: 210upx;
				width: 210upx;
				padding: 10upx;
				
				image {
					width: 100%;
					height: 100%;
					
				}
				
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

// .active:active {
// 	background-color: #F1F2F6;
// 	opacity: .4;
// }
</style>
