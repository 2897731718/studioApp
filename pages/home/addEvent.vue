<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-five text-white">
			<block slot="backText">返回</block>
			<block slot="content">添加赛事</block>
		</cu-custom>
		<view class="you-page flex-column align-center">
			<view class="box-in margin-top-sm radius-xs flex-row align-center">
				<text class="margin-left-sm text-sm">活动类型</text>
				<picker class="text-black" :range="kindData" mode="selector" @change="choseKind">
					{{ kindData[kindIndex] }}
				</picker>
				<text class="fa fa-angle-right" aria-hidden="true"></text>
			</view>
			<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
				<text class="margin-left-sm text-sm">地点</text>
				<input class="text-black-accent text-xxs" type="text" v-model="address" placeholder="e教415" maxlength="15"/>
				<text class="fa fa-angle-right"></text>
			</view>
			<view class="example-body">
				<uni-datetime-picker v-model="datetimerange" type="datetimerange" rangeSeparator="至" />
			</view>
			<view class="main-box margin-top-sm radius-xs flex-column align-center">
				<text class=" margin-top-sm">活动介绍</text>
				<view class="detail-box radius-xs flex-column align-center">
					<textarea class="input-content border bg-white radius-xs" v-model="eventIntroduction" 
							  placeholder="例如:第XX次举办啥的"></textarea>
					<!-- <text v-else class="input-content border bg-white radius-xs">{{ selfIntroduction }}</text> -->
				</view>
			</view>
			<view class="you-btn bg-four text-white text-sm" @click="sendEvent">确认添加</view>
			
			<uni-section :title="'日期时间范围用法：' + '[' + datetimerange + ']' " type="line"></uni-section>
			
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kindData: ['科技月评', '软件创新', '码上学习', '码上开讲', '先导课'],
				kindIndex: 0,
				datetimerange: [],
				endTime: '',
				eventIntroduction: '',
				address: 'e教207',
				eventIntroduction: '无',
				contestName: '科技月评',
				
			};
		},
		methods: {
			choseKind: function(e) {
				this.kindIndex= e.detail.value;
				if(e.detail.value == 0) {
					this.contestName = '科技月评'
				} else if (e.detail.value == 1) {
					this.contestName = '软件创新'
				} else if (e.detail.value == 2) {
					this.contestName = '码上学习'
				} else if (e.detail.value == 3) {
					this.contestName = '码上开讲'
				} else if (e.detail.value == 4) {
					this.contestName = '先导课'
				}
			},
			sendEvent() { // 写发送接口
				console.log(this.contestName, this.datetimerange[1])
				this.$post('/cosi/contest/open', {
					contestName: this.contestName,
					place: this.address,
					introduction: this.eventIntroduction,
					beginTime: this.datetimerange[0],
					endTime: this.datetimerange[1]

				}).then(res => {
					console.log(res)
				})
				// console.log(this.datetimerange[0].substring(0, 16))
				
				this.addEventShow = !this.addEventShow
			},
			
		},
		
	}
</script>

<style lang="scss">
.you-page {
	// background-color: #ffffff;
	
	.box-in {
		width: 94vw;
		height: 80upx;
		font-size: 14px;
		position: relative;
		
		picker,
		input {
			position: absolute;
			right: 40upx;
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
	
	.main-box {
		// background-color: #f1f2f6;
		width: 88%;
		min-height: 200upx;
		height: auto;
		
		.detail-box {
			width: 96%;
			min-height: 50upx;
			height: auto;
			padding: 20upx;
			
			.input-content {
				width: 100%;
				min-height: 260upx;
				height: auto;
				padding: 10upx;
				word-wrap: word-break;
				word-break: break-all;
			}
		}
	}
	
	.you-btn {
		width: 86%;
		height: 80upx;
	}
	.add-page {
		width: 94vw;
		height: calc(100% - 300upx);
		position: absolute;
		bottom: 0;
		// left: 0;
		z-index: 199;
		border-radius: 30upx 30upx 0 0;
		
		
	}
}
</style>
