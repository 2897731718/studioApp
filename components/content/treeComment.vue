<template>
	<view class="reply">
		<view class="reply-box flex-column align-center" >
			<view class="reply-content flex-row align-center">
				<view class="img-box radius-cr">
					<image class="avatar-xs radius-cr" src="../../static/background.jpeg" mode=""></image>
				</view>
				<view class="box-in flex-column justify-center">
					<text class="text-bloder text-five text-lg margin-left-sm margin-bottom-xs">popop</text>
					<view class="time text-xs margin-left-sm flex align-center">
						<text class="time-in text-break margin-right-sm flex-row align-center">2021-3-18</text>
						<text class="fa fa-comment-o"></text>
					</view>
				</view>
				
			</view>
			<view class="from-content text-break">
				回复 ppopo: jdsghjkdfagjkdfhgkadfgdfjsghdfsjhgdfsjkg
				dhktglh
			</view>
		</view>
		<view class="reply-box flex-column align-center" >
			<view class="reply-content flex-row align-center">
				<view class="img-box radius-cr">
					<image class="avatar-xs radius-cr" src="../../static/background.jpeg" mode=""></image>
				</view>
				<view class="box-in flex-column justify-center">
					<text class="text-bloder text-five text-lg margin-left-sm margin-bottom-xs">popop</text>
					<view class="time text-xs margin-left-sm flex align-center">
						<text class="time-in text-break margin-right-sm flex-row align-center">2021-3-18</text>
						<text class="fa fa-comment-o"></text>
					</view>
				</view>
				
			</view>
			<view class="from-content text-break">
				回复 ppopo: jdsghjkdfagjkdfhgkadfgdfjsghdfsjhgdfsjkg
				dhktglh
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	props: {
		reply: {
			type: Array,
			default: [
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
		}
	},
	
}
</script>

<style lang="scss" scoped>
.reply {
	width: 100%;
	min-height: 100%;
	padding: 10upx;
	
	.reply-box {
		width: 100%;
		.reply-content {
			width: 100%;
			.box-in {
				width: 80%;
				height: 100upx;
			
				.time {
					width: 100%;
					height: 36upx;
			
					.time-in {
						width: 120upx;
						height: inherit;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
					}
			
					
				}
			}
			
			
		}
		.from-content {
			width: 100%;
			padding: 10upx 20upx;
		}
	}
	
}
</style>
