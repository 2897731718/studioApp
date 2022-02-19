<!-- 
 @zsw
 2022-2-4
 -->
<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
		<block slot="backText">返回</block>
		<block slot="content">帖子详情</block>
	</cu-custom>
	<view class="you-page flex-column align-center">
		<view class="posts-list flex-column align-center">
			<view class="box-main margin-bottom-xl flex-column bg-white fade-in">
				<view >
					<view class="top-box active margin-lr-sm margin-top-sm flex align-center">
						<view class="img-box avatar-sm radius-cr">
							<image class="avatar-sm radius-cr shadow-xs" :src="postDetail.headImg" mode=""></image>
						</view>
						<view class="box-in flex-column justify-center">
							<text class="text-bloder text-lg margin-left-sm margin-bottom-xs">{{ postDetail.nickname }}</text>
							<view class="autograph text-xs margin-left-sm flex align-center">
								<text class= "autograph-in text-break margin-right-sm">{{ postDetail.autograph }}</text>
								<text class="time">{{ postDetail.time }}</text>
							</view>
						</view>
					</view>
					<view class="content-box active flex-column margin-lr-sm text-pre-wrap">
						<text class="content-in">{{ postDetail.postContent }}</text>
						<view class="link-box flex align-center">
							<text class="text-five">{{ postDetail.link }}</text>
							<view class="clipboard-btn radius-sm text-xxs bg-gray margin-left-sm flex flex-center" @tap.stop="clipboardClick">复制</view>
						</view>
						<view class="pic-box margin-top-sm" v-if="postDetail.contentImg">
							<image :src="postDetail.contentImg" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="main-box bg-white margin-top-xxs flex-column align-center">
			<view class="top-box flex align-center">
				<text class="text-lg text-bold margin-right-sm">全部评论</text>
				<text class="text-xl text-bloder padding-top-xs">999</text>
			</view>
			<view class="comment-box" v-for="(item, index) in commentList" :key="index">
				<view class="title-box margin-top-sm flex align-center">
					<view class="img-box avatar-sm radius-cr">
						<image class="avatar-sm radius-cr shadow-xs" :src="item.headImg" mode=""></image>
					</view>
					<view class="box-in flex-column justify-center">
						<text class="text-bloder text-five text-lg margin-left-sm margin-bottom-xs">{{ item.nickname }}</text>
						<view class="autograph text-xs margin-left-sm flex align-center">
							<text class= "autograph-in text-break margin-right-sm">{{ item.autograph }}</text>
							<text class="time">{{ item.time }}</text>
						</view>
					</view>
					<view class="right-box text-xl flex flex-center">
						<view class="fa fa-thumbs-o-up"></view>
						<view class="fa fa-comment-o margin-left-xl"></view>
					</view>
				</view>
				<view class="content-box active flex-column margin-lr-sm text-pre-wrap">
					<text class="content-in">{{ item.postContent }}</text>
					<tree-comment></tree-comment>
				</view>
			</view>
		</view>
		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow">发送</button>
		</view>
	</view>	
</view>
</template>

<script>
	import treeComment from '../../../components/content/treeComment.vue'
	export default {
		data() {
			return {
				postDetail: {
					postId: 1,
					headImg: '../../../static/logo.jpg',
					nickname: 'popopo',
					autograph: 'uiqureiwtuqietuioq',
					postContent: `hfjdshfjsjkdasjjjjjjjjjsaaaaaaaaaaa
			
			aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa无😊😊`,
					link: 'https://uniapp.dcloud.io/api/system/clipboard',
					contentImg: '../../../static/logo.jpg',
					encourageState: 0,
					
				},
				InputBottom: 0,
				commentList: [
					{	
						headImg: '../../../static/background.jpeg',
						nickname: 'popopo',
						autograph: 'uiqureiwtuqietuioq',
						postContent: 'shfjdfdjfdj',
						time: '2021-1-7',
						commentChildren: [
							{
								headImg: '../../../static/logo.jpg',
								nickname: 'popopo',
								autograph: 'uiqureiwtuqietuioq',
								time: '2021-1-7',
								postContent: 'shfjdfdjfdj',
							},
						]
					}
				]
			};
		},
		components: {
			treeComment,
			
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style lang="scss">
.you-page {
	
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
		
		
	}
	
	.main-box {
		width: 100vw;
		height: 100%;
		
		.top-box {
			border: 2upx solid #0081FF; 
			width: 94vw;
			height: 60upx;
		}
		
		.comment-box {
			border: 2upx solid #0081FF;
			width: 94vw;
			height: 100%;
			
			.title-box {
				// border: 2upx solid #0081FF;
				width: 94vw;
				// height: 140upx;
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
				
				.right-box {
					width: 200upx;
					height: 40upx;
					position: absolute;
					right: 0;
					// top: 0;
				}
			}
			
			.content-box {
				// border: 2upx solid #0081FF;
				// width: 94vw;
				padding: 20upx;
				margin-left: 100upx;
				
				.content-in {
					letter-spacing: 4upx;
					word-wrap: word-break;  // 指定如果足够长得话，应该换行
					word-break: break-all;
				}
				
			}
		}
	}
}
</style>
