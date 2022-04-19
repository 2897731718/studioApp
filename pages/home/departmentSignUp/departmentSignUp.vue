<!-- 
 @zsw
 2021-10-28 完成样式
 
 -->
<!-- 
 班级
 姓名
 性别
 QQ
 第一志愿
 第二志愿
 自我介绍
 为什么想加大创
 
 -->
<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content">大创报名</block>
	</cu-custom>
	<view class="you-page bg-white radius-sm flex-column align-center">
			<!-- 提示卡片 -->
			<view class="top-box flex-column flex-center">
				<rotate-card :tipsContent="tipsContent"></rotate-card>
			</view>
			<!-- 报名内容 -->
			<view class="content-box radius-sm margin-top-sm margin-bottom-sm shadow-sm flex-column flex-center">
				<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
					<text class="margin-left-sm text-sm">班级</text>
					<input class="text-black-accent text-xxs" type="text" v-model="classNumber" placeholder="软件1910" maxlength="15"/>
					<text class="fa fa-angle-right"></text>
				</view>
				<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
					<text class="margin-left-sm text-sm">姓名</text>
					<input class="text-black-accent text-xxs" type="text" v-model="realName" placeholder="张三" maxlength="15"/>
					<text class="fa fa-angle-right"></text>
				</view>
				<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
					<text class="margin-left-sm text-sm">QQ</text>
					<input class="text-black-accent text-xxs" type="text" v-model="qNumber" placeholder="2897731718" maxlength="15"/>
					<text class="fa fa-angle-right"></text>
				</view>
				<view class="box-in margin-top-sm radius-xs flex-row align-center">
					<text class="margin-left-sm text-sm">性别</text>
					<picker class="text-black" :range="genderData" mode="selector" @change="choseGender">
						{{ genderData[genderIndex] }}
					</picker>
					<text class="fa fa-angle-right" aria-hidden="true"></text>
				</view>
				<view class="box-in margin-top-sm radius-xs flex-row align-center">
					<text class="margin-left-sm text-sm">第一志愿</text>
					<picker class="text-black" :range="firstKindData" mode="selector" @change="choseFirstKind">
						{{ firstKindData[firstKindIndex] }}
					</picker>
					<text class="fa fa-angle-right" aria-hidden="true"></text>
				</view>
				<view class="box-in margin-top-sm radius-xs flex-row align-center">
					<text class="margin-left-sm text-sm">第二志愿</text>
					<picker class="text-black" :range="secondKindData" mode="selector" @change="choseSecondKind">
						{{ secondKindData[secondKindIndex] }}
					</picker>
					<text class="fa fa-angle-right" aria-hidden="true"></text>
				</view>
				<view class="main-box margin-top-sm margin-bottom-sm radius-xs flex-column align-center">
					<text class=" margin-top-sm">自我介绍</text>
					<view class="detail-box radius-xs flex-column align-center">
						<textarea v-if="!submitShow" class="input-content border bg-white radius-xs" v-model="selfIntroduction" 
								  placeholder="随意发挥"></textarea>
						<text v-else class="input-content border bg-white radius-xs">{{ selfIntroduction }}</text>
					</view>
				</view>
				<view class="main-box margin-bottom-sm radius-xs flex-column align-center">
					<text class="margin-top-sm">为什么想加大创</text>
					<view class="detail-box radius-xs flex-column align-center">
						<textarea v-if="!submitShow" class="input-content border bg-white radius-xs" v-model="reason" 
								  placeholder="说明原因"></textarea>
						<text v-else class="input-content border bg-white radius-xs">{{ reason }}</text>
					</view>
				</view>
				<view class="you-btn margin-bottom-sm text-white bg-five flex-row flex-center" @click="confirmSignUp">
					提交报名
				</view>
				<view class="mask flex-column flex-center" v-show="submitShow" @touchmove.stop.prevent>
					<view class="prompt-box bg-white radius-xs flex-column flex-center">
						<text>是否确认提交</text>
						<view class="btn-box margin-top-xl flex-row">
							<view class="you-btn bg-gray text-five" @click.stop.prevent="cancelSubmit()">取消</view>
							<view class="you-btn bg-five text-white margin-left-sm" @click.stop.prevent="submit()">确认</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	
</view>
</template>

<script>
	import RotateCard from '../../../components/content/RotateCard.vue'
	export default {
		data() {
			return {
				tipsContent: '请按照下方示例格式填写报名信息，注意空格逗号等，提交过后无法查看提交信息，提示提交成功就是成功，如有疑问可以去QQ群问学长学姐，最后欢迎大家报名大创，加油！！！',
				classNumber: '',
				realName: '',
				qNumber: '',
				genderData: ['男','女'],
				genderIndex: 0,
				firstKindData: ['理事长', '副理事长', '办公室', '竞赛部', '宣传策划部', '培训部', '工联部'],
				firstKindIndex: 0,
				firstKindName: '理事长',
				secondKindData: ['理事长', '副理事长', '办公室', '竞赛部', '宣传策划部', '培训部', '工联部'],
				secondKindIndex: 0,
				secondKindName: '理事长',
				selfIntroduction: ``,
				reason: ``,
				submitShow: false,
				
			};
		},
		components: {
			RotateCard,
			
		},
		methods: {
			choseGender: function(e) {
				console.log(e)
				this.genderIndex = e.detail.value
			},
			choseFirstKind: function(e) {
				this.firstKindIndex = e.detail.value
				if(this.firstKindIndex === 0) {
					this.firstKindName = '理事长'
				} else if (this.firstKindIndex === 1) {
					this.firstKindName = '副理事长'
				} else if (this.firstKindIndex === 2) {
					this.firstKindName = '办公室'
				} else if (this.firstKindIndex === 3) {
					this.firstKindName = '竞赛部'
				} else if (this.firstKindIndex === 4) {
					this.firstKindName = '宣传策划部'
				} else if (this.firstKindIndex === 5) {
					this.firstKindName = '培训部'
				} else if (this.firstKindIndex === 6) {
					this.firstKindName = '工联部'
				}
			},
			choseSecondKind: function(e) {
				this.secondKindIndex = e.detail.value
				if(this.secondKindIndex === 0) {
					this.secondKindName = '理事长'
				} else if (this.secondKindIndex === 1) {
					this.secondKindName = '副理事长'
				} else if (this.secondKindIndex === 2) {
					this.secondKindName = '办公室'
				} else if (this.secondKindIndex === 3) {
					this.secondKindName = '竞赛部'
				} else if (this.secondKindIndex === 4) {
					this.secondKindName = '宣传策划部'
				} else if (this.secondKindIndex === 5) {
					this.secondKindName = '培训部'
				} else if (this.secondKindIndex === 6) {
					this.secondKindName = '工联部'
				}
			},
			confirmSignUp() {
				this.submitShow = !this.submitShow
			},
			cancelSubmit() {
				this.submitShow = !this.submitShow
			},
			submit() {
				console.log(this.firstKindName, this.secondKindName, +this.firstKindIndex + 1)
				this.$post('/cosi/dep/enroll', {
					name: this.realName,
					gender: +this.genderIndex + 1,
					className: this.classNumber,
					contact_number: this.qNumber,
					self_introduction: this.selfIntroduction,
					reason: this.reason,
					depId: +this.firstKindIndex + 1,
					firstWish: this.firstKindName,
					secondWish: this.secondKindName
				}).then(res => {
					console.log(res)
					this.$toast('报名成功', 2000, 'success', true);
					uni.navigateBack({
						delta: 1
					})
				})
				this.submitShow = !this.submitShow
			},
			
		}
	}
</script>

<style lang="scss">
.you-page {
	
	.top-box {
		width: 100vw;
		height: 420upx;
		
	}
	
	.content-box {
		width: 90vw;
		min-height: calc(100vh - 420upx);
		
		.box-in {
			width: 92%;
			height: 80upx;
			font-size: 14px;
			// background-color: #f1f2f6;
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
			width: 92%;
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
			width: 80vw;
			height: 80upx;
			
		}
		
		.mask{
		    position: fixed;
		    left: 0;
		    top: 0;
		    width: 100%;
		    height: 100%;
		    background-color: rgba(0,0,0,0.5);
		    z-index: 9999;
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
}
</style>
