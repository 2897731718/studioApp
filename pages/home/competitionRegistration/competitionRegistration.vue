<!-- 
 @zsw
 2021-10-30
 -->

<template>
<view >
	<cu-custom :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content">比赛报名</block>
	</cu-custom>
	<view class="you-page flex-column align-center">
		<!-- 提示卡片 -->
		<view class="top-box flex-column flex-center">
			<rotate-card :tipsContent="tipsContent"></rotate-card>
		</view>
		<!-- 这个滚动无效 不想改回来的了  -->
		<scroll-view class="scroll-view margin-top-sm"
					 scroll-y="true" show-scrollbar="true">
			<view class="scoll-box flex-column align-center">
				<!-- 科技月评 软件组报名 -->
				<view class="content-box radius-sm fade-in margin-top-sm margin-bottom-sm shadow-sm flex-column flex-center" v-show="competitionIndex === 0">
					<view class="box-in margin-top-sm radius-xs flex-row flex-center">
						<picker class="text-black" :range="firstKindData" mode="selector" @change="choseFirstKind">
							{{ firstKindData[firstKindIndex] }}
						</picker>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row flex-center">
						<picker class="text-black" :range="secondKindData" mode="selector" @change="choseSecondKind">
							{{ secondKindData[secondKindIndex] }}
						</picker>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row flex-center">
						<picker class="text-black" :range="thirdKindData" mode="selector" @change="choseThirdKind">
							{{ thirdKindData[thirdKindIndex] }}
						</picker>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">项目名称</text>
						<input class="text-black-accent text-xxs" type="text" v-model="projectName" placeholder="大创报名小程序" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">组长学号</text>
						<input class="text-black-accent text-xxs" type="text" v-model="stdNumberLeader" placeholder="软件1910" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">组长班级</text>
						<input class="text-black-accent text-xxs" type="text" v-model="classNumberLeader" placeholder="软件1910" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">组长姓名</text>
						<input class="text-black-accent text-xxs" type="text" v-model="realNameLeader" placeholder="张三" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">组长QQ</text>
						<input class="text-black-accent text-xxs" type="text" v-model="qNumberLeader" placeholder="2897731718" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="member-box radius-sm shadow-sm margin-top-sm flex-column align-center" v-show="thirdKindIndex == 1">
						<text>组员1</text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">班级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[0].classNameOne" placeholder="软件1910" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[0].realNameOne" placeholder="张三" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
					</view>
					<view class="member-box radius-sm shadow-sm margin-top-sm flex-column align-center" v-show="thirdKindIndex == 1">
						<text>组员2</text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">班级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[1].classNameTwo" placeholder="软件1910" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[1].realNameTwo" placeholder="张三" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
					</view>
					<view class="member-box radius-sm shadow-sm margin-top-sm flex-column align-center" v-show="thirdKindIndex == 1">
						<text>组员3</text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">班级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[2].classNameThree" placeholder="软件1910" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[2].realNameThree" placeholder="张三" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
					</view>
					<view class="member-box radius-sm shadow-sm margin-top-sm flex-column align-center" v-show="thirdKindIndex == 1">
						<text>组员4</text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">班级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[3].classNameFour" placeholder="软件1910" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[3].realNameFour" placeholder="张三" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
					</view>
					
					<view class="you-btn margin-tb-sm text-white bg-four flex-row flex-center" @click="confirmSignUpTechnology">
						提交报名
					</view>
				</view>
				<!-- 软件创新 软件组报名 -->
				<view class="content-box radius-sm fade-in margin-top-sm margin-bottom-sm shadow-sm flex-column flex-center" v-show="competitionIndex === 1">
					<view class="box-in margin-top-sm radius-xs flex-row flex-center">
						<picker class="text-black" :range="firstKindData" mode="selector" @change="choseFirstKind">
							{{ firstKindData[firstKindIndex] }}
						</picker>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row flex-center">
						<picker class="text-black" :range="secondKindData" mode="selector" @change="choseSecondKind">
							{{ secondKindData[secondKindIndex] }}
						</picker>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row flex-center">
						<picker class="text-black" :range="thirdKindData" mode="selector" @change="choseThirdKind">
							{{ thirdKindData[thirdKindIndex] }}
						</picker>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">项目名称</text>
						<input class="text-black-accent text-xxs" type="text" v-model="projectName" placeholder="大创报名小程序" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">组长学号</text>
						<input class="text-black-accent text-xxs" type="text" v-model="stdNumberLeader" placeholder="软件1910" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">组长班级</text>
						<input class="text-black-accent text-xxs" type="text" v-model="classNumberLeader" placeholder="软件1910" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">组长姓名</text>
						<input class="text-black-accent text-xxs" type="text" v-model="realNameLeader" placeholder="张三" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">组长QQ</text>
						<input class="text-black-accent text-xxs" type="text" v-model="qNumberLeader" placeholder="2897731718" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="member-box radius-sm shadow-sm margin-top-sm flex-column align-center" v-show="thirdKindIndex == 1">
						<text>组员1</text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">班级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[0].classNameOne" placeholder="软件1910" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[0].realNameOne" placeholder="张三" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
					</view>
					<view class="member-box radius-sm shadow-sm margin-top-sm flex-column align-center" v-show="thirdKindIndex == 1">
						<text>组员2</text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">班级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[1].classNameTwo" placeholder="软件1910" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[1].realNameTwo" placeholder="张三" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
					</view>
					<view class="member-box radius-sm shadow-sm margin-top-sm flex-column align-center" v-show="thirdKindIndex == 1">
						<text>组员3</text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">班级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[2].classNameThree" placeholder="软件1910" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[2].realNameThree" placeholder="张三" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
					</view>
					<view class="member-box radius-sm shadow-sm margin-top-sm flex-column align-center" v-show="thirdKindIndex == 1">
						<text>组员4</text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">班级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[3].classNameFour" placeholder="软件1910" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="memberList[3].realNameFour" placeholder="张三" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
					</view>
					
					<view class="you-btn margin-tb-sm text-white bg-four flex-row flex-center" @click="confirmSignUpInnovate">
						提交报名
					</view>
				</view>
				<!-- 码上学习报名 -->
				<view class="content-box radius-sm fade-in margin-top-sm margin-bottom-sm shadow-sm flex-column flex-center" v-show="competitionIndex === 2">
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">班级</text>
						<input class="text-black-accent text-xxs" type="text" v-model="classNumberStuding" placeholder="软件1910" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">姓名</text>
						<input class="text-black-accent text-xxs" type="text" v-model="realNameStuding" placeholder="张三" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					
					<view class="you-btn margin-tb-sm text-white bg-four flex-row flex-center" @click="confirmSignUpStuding">
						提交报名
					</view>
				</view>
				<!-- 算法比赛报名 -->
				<view class="content-box radius-sm fade-in margin-top-sm margin-bottom-sm shadow-sm flex-column flex-center" v-show="competitionIndex === 3">
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">班级</text>
						<input class="text-black-accent text-xxs" type="text" v-model="classNumberAlgorithm" placeholder="软件1910" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">姓名</text>
						<input class="text-black-accent text-xxs" type="text" v-model="realNameAlgorithm" placeholder="张三" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
						<text class="margin-left-sm text-sm">QQ</text>
						<input class="text-black-accent text-xxs" type="text" v-model="qNumberAlgorithm" placeholder="2897731718" maxlength="15"/>
						<text class="fa fa-angle-right"></text>
					</view>
					
					<view class="you-btn margin-tb-sm text-white bg-four flex-row flex-center" @click="confirmSignUpAlgorithm">
						提交报名
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- 顶部 tab 栏 -->
		<view class="fixed-bottom flex-column flex-center">
			<view class="tab-box bg-white shadow-mi glass radius-sm flex-row align-center justify-around">
				<view class="tab text-sm flex-column flex-center" v-for="(item, index) in competitionKind" 
					  :key="index"
					  :class="{'active': competitionIndex == index }"
					  @click="selectTab(index)">{{ item }}</view>
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
				tipsContent: '',
				groupNames: '',
				competitionKind: ['科技月评', '软件创新', '码上学习', '算法比赛'],
				competitionIndex: 0,
				firstKindData: ['嵌入式', '软件组(web/小程序)'],
				firstKindIndex: 0,
				secondKindData: ['大一组', '大二以上组'],
				secondKindIndex: 0,
				thirdKindData: ['个人赛', '小组赛'],
				thirdKindIndex: 0,
				projectName: '1',
				stdNumberLeader: '2', // 组长学号
				classNumberLeader: '3', // 组长班级
				realNameLeader: '4',  // 组长姓名
				qNumberLeader: '5',  // 组长qq
				memberList: [
					{
						classNameOne: '1',
						realNameOne: '1',
					},
					{
						classNameTwo: '2',
						realNameTwo: '2',
					},
					{
						classNameThree: '3',
						realNameThree: '3',
					},
					{
						classNameFour: '4',
						realNameFour: '4',
					}
				],
				classNameOne: '8',
				realNameOne: '9',
				classNameTwo: '8',
				realNameTwo: '9',
				classNameThree: '8',
				realNameThree: '9',
				classNameFour: '8',
				realNameFour: '9',
				classNumberAlgorithm: 'z',
				realNameAlgorithm: 's',
				qNumberAlgorithm: 'w',
				classNumberStuding: 'e',
				realNameStuding: 'r',
				
			};
		},
		onLoad(option) {
			// this.competitionIndex = JSON.parse(decodeURIComponent(option.item))
			this.getEnrollPre()
		},
		components: {
			RotateCard,
			
		},
		methods: {
			selectTab(index) {
				this.competitionIndex = index
			},
			choseFirstKind: function(e) {
				this.firstKindIndex = e.detail.value
			},
			choseSecondKind: function(e) {
				this.secondKindIndex = e.detail.value
			}, 
			choseThirdKind: function(e) {
				this.thirdKindIndex = e.detail.value
				console.log(this.thirdKindIndex)
			},
			confirmSignUpTechnology() {  // 科技月评软件组比赛报名
			console.log(this.thirdKindIndex + 1)
				this.$post('/cosi/contest/enroll', {
					contestName: '科技月评',
					contestId: '1',
					grapeName: this.secondKindIndex + 1,
					enrolleeNum: this.thirdKindIndex + 1,
					className: this.classNumberLeader,
					name: this.realNameLeader,
					contact: this.qNumberLeader,
					sno: this.stdNumberLeader,
					itemName: this.projectName,
					groupId: this.firstKindIndex + 1,
					crews: this.memberList,
					
				}).then(res => {
					console.log(res)
					this.$toast('科技月评报名成功', 1000, 'success', true);
				})
			},
			confirmSignUpInnovate() {  // 软件创新软件组比赛报名
				this.$post('/cosi/contest/enroll', {
					name: this.realNameLeader,
					className: this.classNumberLeader,
					contestName: '软件创新',
					contestId: '2',
					grapeName: this.secondKindIndex + 1,
					contact: this.qNumberLeader,
					sno: this.stdNumberLeader,
					itemName: this.projectName,
					groupId: this.firstKindIndex + 1,
					enrolleeNum: this.thirdKindIndex + 1,
					crews: this.memberList,
				}).then(res => {
					console.log(res)
					this.$toast('软件创新报名成功', 1000, 'success', true);
				})
			},
			confirmSignUpStuding() { // 码上学习报名
				this.$post('/cosi/contest/enroll', {
					contestName: '码上学习',
					contestId: '3',
					grapeName: '1',
					className: this.classNumberStuding,
					name: this.realNameStuding,
					contact: 'qq',
					sno: '20191923',
					itemName: '大创小程序',
					groupId: '1',
					enrolleeNum: '1'
					
					
				}).then(res => {
					console.log(res)
					this.$toast('码上学习报名成功', 1000, 'success', true);
				})
			},
			confirmSignUpAlgorithm() {  // 算法比赛报名
			console.log(this.realNameAlgorithm)
				this.$post('/cosi/contest/enroll', {
					contestName: '算法比赛',
					contestId: '4',
					grapeName: '1',
					className: this.classNumberAlgorithm,
					name: this.realNameAlgorithm,
					contact: this.qNumberAlgorithm,
					sno: '20191923',
					itemName: '大创小程序',
					groupId: '1',
					enrolleeNum: '1'
					
					
				}).then(res => {
					console.log(res)
					this.$toast('算法比赛报名成功', 1000, 'success', true);
				})
			},
			async getEnrollPre() {
				let result = await this.$get('/cosi/contest/pre', {
					test: '1'
				})
				this.firstKindData = result.data.groupNames
			}
		}
	}
</script>

<style lang="scss">
.you-page {
	position: relative;
	
	.top-box {
		width: 100vw;
		height: 440upx;
		margin-top: 120upx;
	}
	
	.scroll-view {
		.scoll-box {
			width: 100vw;
			min-height: 500upx;
			height: auto;
			
			.content-box {
				width: 90vw;
				height: auto;
				
				.box-in {
					width: 92%;
					height: 80upx;
					font-size: 14px;
					// background-color: #f1f2f6;
					position: relative;
					
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
				
				.member-box {
					// background-color: #0FB9B1;
					width: 92%;
					min-height: 200upx;
					height: auto;
					padding: 20upx 0;
					
					.box-in {
						width: 100%;
						height: 80upx;
						font-size: 14px;
						// background-color: #f1f2f6;
						position: relative;
						
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
	}
	
	
	
	.fixed-bottom {
		width: 100vw;
		height: 100upx;
		position: absolute;
		top: 40upx;
		
		.tab-box {
			width: 92%;
			height: inherit;
			
			.tab {
				width: 100%;
				height: inherit;
				font-size: 16px;
				color: #c8d6e5;
			}
			
			.active {
				transform: scale(1.1);
				color: #4BBBFA;
			}
		}
	}
	
}
</style>
