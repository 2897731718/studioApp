<!-- 
 @zsw
 2022-2-4
 -->
<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-primary text-white">
			<block slot="backText">返回</block>
			<block slot="content">帖子详情</block>
		</cu-custom>
		<view class="you-page flex-column align-center">
			<view class="posts-list flex-column align-center">
				<view class="box-main margin-bottom-xl flex-column bg-white fade-in">
					<view>
						<view class="top-box active margin-lr-sm margin-top-sm flex align-center">
							<view class="img-box avatar-sm radius-cr"><image class="avatar-sm radius-cr shadow-xs" :src="postDetail.headImg" mode=""></image></view>
							<view class="box-in flex-column justify-center">
								<text class="text-bloder text-lg margin-left-sm margin-bottom-xs">{{ postDetail.nickname }}</text>
								<view class="autograph text-xs margin-left-sm flex align-center">
									<text class="autograph-in text-break margin-right-sm">{{ postDetail.autograph }}</text>
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
							<view class="pic-box margin-top-sm" v-if="postDetail.contentImg"><image :src="postDetail.contentImg" mode=""></image></view>
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
						<view class="img-box avatar-sm radius-cr"><image class="avatar-sm radius-cr shadow-xs" :src="item.fromAvatar" mode=""></image></view>
						<view class="box-in flex-column justify-center">
							<text class="text-bloder text-five text-lg margin-left-sm margin-bottom-xs">{{ item.nickname }}</text>
							<view class="autograph text-xs margin-left-sm flex align-center">
								<text class="autograph-in text-break margin-right-sm">{{ item.autograph }}</text>
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
				<view class="comment-box" v-for="(item, index) in commentList" :key="index">
					<view class="title-box margin-top-sm flex align-center">
						<view class="img-box avatar-sm radius-cr"><image class="avatar-sm radius-cr shadow-xs" :src="item.fromAvatar" mode=""></image></view>
						<view class="box-in flex-column justify-center">
							<text class="text-bloder text-five text-lg margin-left-sm margin-bottom-xs">{{ item.nickname }}</text>
							<view class="autograph text-xs margin-left-sm flex align-center">
								<text class="autograph-in text-break margin-right-sm">{{ item.autograph }}</text>
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
			<!-- <view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"></input>
			<view class="flex-row align-center">
				<text class="fa fa-commenting-o"></text>
				<text>999</text>
			</view>
			<button class="cu-btn bg-green shadow">发送</button>
		</view> -->
			<view class="cu-bar foot input flex-column align-center" v-show="linkShow" :style="[{ bottom: InputBottom + 'px' }]">
				<textarea
					class="solid-bottom bg-gray radius-xs"
					:adjust-position="false"
					maxlength="300"
					cursor-spacing="10"
					@focus="InputFocus"
					@blur="InputBlur"
					v-model="comment"
					selectable="true"
					placeholder="回复"
					ref="comment"
				></textarea>
				<view class="bottom-box margin-top-sm flex-row align-center justify-between">
					<text class="fa fa-times" @tap.stop="clickComment"></text>
					<!-- <text>发送评论</text> -->
					<view class="text-five" @tap.stop="confirmComment">发送</view>
				</view>
			</view>
			<view class="bottom-fixed bg-white shadow-xs text-sm flex-row align-center" v-show="!linkShow" :style="[{ bottom: InputBottom + 'px' }]">
				<text class="comment-click margin-right-sm radius-lg" @tap.stop="clickComment">输入评论...</text>
				<view class="flex-row align-center margin-lr-sm">
					<text class="fa fa-commenting-o margin-right-sm"></text>
					<text>999</text>
				</view>
				<view class="margin-lr-sm flex-row align-center">
					<text class="fa fa-thumbs-o-up margin-right-sm"></text>
					<text>999</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import treeComment from '../../../components/content/treeComment.vue';
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
				encourageState: 0
			},
			InputBottom: 0,
			linkShow: false,
			comment: '',
			commentListData: [
				{
					id: 'comment0001', //主键id
					date: '2018-07-05 08:30', //评论时间
					ownerId: 'talents100020', //文章的id
					fromId: 'errhefe232213', //评论者id
					fromName: '犀利的评论家', //评论者昵称
					fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
					likeNum: 3, //点赞人数
					content: '非常靠谱的程序员', //评论内容
					reply: [
						//回复，或子评论
						{
							id: '34523244545', //主键id
							commentId: 'comment0001', //父评论id，即父亲的id
							fromId: 'observer223432', //评论者id
							fromName: '夕阳红', //评论者昵称
							fromAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
							toId: 'errhefe232213', //被评论者id
							toName: '犀利的评论家', //被评论者昵称
							toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //被评论者头像
							content: '赞同，很靠谱，水平很高', //评论内容
							date: '2018-07-05 08:35' //评论时间
						},
						{
							id: '34523244545',
							commentId: 'comment0001',
							fromId: 'observer567422',
							fromName: '清晨一缕阳光',
							fromAvatar: 'http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg',
							toId: 'observer223432',
							toName: '夕阳红',
							toAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
							content: '大神一个！',
							date: '2018-07-05 08:50'
						}
					]
				},
				{
					id: 'comment0002',
					date: '2018-07-05 08:30',
					ownerId: 'talents100020',
					fromId: 'errhefe232213',
					fromName: '毒蛇郭德纲',
					fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
					likeNum: 0,
					content: '从没见过这么优秀的人',
					reply: []
				}
			],

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
							postContent: 'shfjdfdjfdj'
						}
					]
				}
			]
		};
	},
	components: {
		treeComment
	},
	methods: {
		InputFocus(e) {
			this.InputBottom = e.detail.height;
		},
		InputBlur(e) {
			this.InputBottom = 0;
		},
		clickComment() {
			console.log(this.$refs);
			this.linkShow = !this.linkShow;
			this.$refs.comment.focus();
		},
		confirmComment() {
			this.linkShow = !this.linkShow;
		}
	}
};
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
				word-wrap: word-break; // 指定如果足够长得话，应该换行
				word-break: break-all;
			}

			.link-box {
				word-wrap: word-break; // 指定如果足够长得话，应该换行
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
			
			width: 94vw;
			height: 60upx;
		}

		.comment-box {
			
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
				// margin-left: 100upx;

				.content-in {
					letter-spacing: 4upx;
					word-wrap: word-break; // 指定如果足够长得话，应该换行
					word-break: break-all;
				}
			}
		}
	}

	.cu-bar {
		padding: 20upx 20upx 20upx 40upx;
		min-height: 100upx;

		.bottom-box {
			width: 94%;

			.fa-times {
				font-size: 24px;
			}
		}

		.solid-bottom {
			padding: 20upx 20upx;
			width: 90%;
			height: 140upx;
		}
	}

	.bottom-fixed {
		width: 100vw;
		height: 100upx;
		position: fixed;
		bottom: 0;
		padding: 20upx;

		.comment-click {
			padding: 10upx 20upx;
			font-weight: 200;
			background-color: #f1f1f1;
			width: 50%;
		}
	}
}
</style>
