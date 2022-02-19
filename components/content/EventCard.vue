<template>
	<view class="box flex-row justify-center">
		<view class="event-information margin-top-sm shadow-mi radius-sm fade-in flex-column align-center">
			<view class="top-box margin-tb-xs flex-row align-center">
				<text class="event-name margin-left-sm">{{ eventName }}</text>
			</view>
			<text class="line-four"></text>
			<view class="center-box flex-column flex-center">
				<view class="box-in margin-tb-xs flex-row justify-between align-center">
					地点
					<text class="start-time">{{ address }}</text>
				</view>
				<view class="box-in margin-tb-xs flex-row justify-between align-center">
					开始时间
					<text class="start-time">{{ startTime }}</text>
				</view>
				<view class="box-in margin-tb-xs flex-row justify-between align-center">
					结束时间
					<text class="start-time">{{ endTime }}</text>
				</view>
			</view>
			<text>简介</text>
			<text class="instroduce margin-top-sm text-break">
				{{ introduce }}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'EventCard',
		data() {
			return {
				
			}
		},
		props: {
			eventName: {
				type: String,
				default: '码上学习'
			},
			address: {
				type: String,
				default: 'E教415'
			},
			startTime: {
				type: String,
				default: '2021-10-24 7:00'
			},
			endTime: {
				type: String,
				default: '2021-10-24 7:00'
			},
			introduce: {
				type: String,
				default: `大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台
				大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台
				大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台`
			},
			
		},
		
	}
</script>

<style lang="scss">
.box {
	width: 92vw;
	.event-information {
		// border: 2upx solid #333333;
		width: 100%;
		min-height: 300upx;
		padding: 20upx 0;
		background-color: #ffffff;
		
		.top-box {
			// border: 2upx solid #333333;
			width: 90%;
			height: 40upx;
			
			.event-name {
				position: relative;
				margin-left: 40upx;
			}
			
			.event-name::before {
				content: '';
				width: 18upx;
				height: 100%;
				position: absolute;
				top: 0;
				left: -30upx;
				border-radius: 20upx;
				background-color: #ffc940;
			}
		}
		
		// .linear {
		// 	width: inherit;
		// 	height: 4upx;
		// 	background: linear-gradient(to right, #ffc940, #ffffff);
		// }
		
		.center-box {
			// border: 4upx solid #333333;
			width: 90%;
			// height: 160upx;
			
			.box-in {
				width: 100%;
				height: 30upx;
				
			}
		}
		
		.instroduce {
			// border: 2upx solid #333333;
			width: 90%;
			min-height: 100upx;
			height: auto;
			
		}
	}
}
</style>
