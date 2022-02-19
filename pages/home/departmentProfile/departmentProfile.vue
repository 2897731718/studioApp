<!-- 
 @zsw
 2021-10-24
 2021-10-28 样式完工
 -->

<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
			<block slot="backText">返回</block>
			<block slot="content">垂直导航</block>
		</cu-custom>
		<view class="you-page">
				<!-- 部门简介 -->
				<view class="top-box shadow-lg shadow-sm bg-primary flex-row flex-center">
					<view class="side-bar shadow-mi radius-sm bg-white grid row-6">
						<!-- <view class="btn text-sm text-primary flex-row flex-center"
							  :class="[]"
							  v-for="item in occupationList" :key="item.id"
							  @click="changeOccupationInstroduce(item.id)">
							{{ item.name }}
						</view> -->
						<view class="btn text-sm text-primary flex-row flex-center"
							  :class="[departmentIndex === 0? 'isSelect': '']"
							  @click="changeOccupationInstroduce(0)">
							  <text>理事长</text>
						</view>
						<view class="btn text-sm text-primary flex-row flex-center"
							  :class="[departmentIndex === 2? 'isSelect': '']"
							  @click="changeOccupationInstroduce(2)">
							<text>办公室</text>
						</view>
						<view class="btn text-sm text-primary flex-row flex-center"
							  :class="[departmentIndex === 3? 'isSelect': '']"
							  @click="changeOccupationInstroduce(3)">
							<text>竞赛部</text>
						</view>
						<view class="btn text-sm text-primary flex-row flex-center"
							  :class="[departmentIndex === 4? 'isSelect': '']"
							  @click="changeOccupationInstroduce(4)">
							<text>宣传策划部</text>
						</view>
						<view class="btn text-sm text-primary flex-row flex-center"
							  :class="[departmentIndex === 5? 'isSelect': '']"
							  @click="changeOccupationInstroduce(5)">
							<text>培训部</text>
						</view>
						<view class="btn text-sm text-primary flex-row flex-center"
							  :class="[departmentIndex === 6? 'isSelect': '']"
							  @click="changeOccupationInstroduce(6)">
							<text>工联部</text>
						</view>
					</view>
					<view class="content-box fade-in bg-white radius-sm margin-left-sm shadow-xs flex-column flex-center"
						  v-show="departmentIndex === 2"
						  :animation="animationData">
						<text class="text-lg text-roll">宣传策划部简介</text>
						<view class="instroduce-content margin-top-sm text-second">
							大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台。
						</view>
					</view>
					<view class="content-box fade-in bg-white radius-sm margin-left-sm shadow-xs flex-column flex-center"
						  v-show="departmentIndex === 3"
						  :animation="animationData">
						<text class="text-lg text-roll">宣传策划部简介</text>
						<view class="instroduce-content margin-top-sm text-second">
							大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台。
						</view>
					</view>
					<view class="content-box fade-in bg-white radius-sm margin-left-sm shadow-xs flex-column flex-center"
						  v-show="departmentIndex === 4"
						  :animation="animationData">
						<text class="text-lg text-roll">宣传策划部简介</text>
						<view class="instroduce-content margin-top-sm text-second">
							大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台。
						</view>
					</view>
					<view class="content-box fade-in bg-white radius-sm margin-left-sm shadow-xs flex-column flex-center"
						  v-show="departmentIndex === 5"
						  :animation="animationData">
						<text class="text-lg text-roll">宣传策划部简介</text>
						<view class="instroduce-content margin-top-sm text-second">
							大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台。
						</view>
					</view>
					<view class="content-box fade-in bg-white radius-sm margin-left-sm shadow-xs flex-column flex-center"
						  v-show="departmentIndex === 6"
						  :animation="animationData">
						<text class="text-lg text-roll">宣传策划部简介</text>
						<view class="instroduce-content margin-top-sm text-second">
							大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台。
						</view>
					</view>
				</view>
				
				<!-- 成员信息 -->
				<scroll-view class="scroll-view margin-top-sm"
							 scroll-y="true" show-scrollbar="false">
					<view class="content-box flex-column align-center" v-for="item in memberList" :key="item.id">
						<view class="member-box text-lg text-new shadow-xl radius-sm flex-row align-center justify-around">
							<view class="">{{ item.grade }}级</view>
							<view class="">{{ item.position }}</view>
							<view class="">{{ item.name }}</view>
							<view class="you-btn text-white bg-red flex-column flex-center" v-show="delectBtnShow" @click="delectMember">删除</view>
						</view>
					</view>
				</scroll-view>
				<!-- 底部流动特效 -->
				<view class="slider-box">
					<view class="slider"></view>
				</view>
				<!-- 添加成员信息 -->
				<view class="you-mask glass-morphism flex-column flex-center" v-show="addConfirmShow" @touchmove.stop.prevent>
					<view class="member-page shadow-mi bg-white radius-sm flex-column flex-center">
						<text class="fa fa-times text-lg" @click="cancelSendMember"></text>
						<view class="box-in margin-top-sm radius-xs flex-row align-center">
							<text class="margin-left-sm text-sm">职位</text>
							<picker class="text-black" :range="kindData" mode="selector" @change="choseKind">
								{{ kindData[kindIndex] }}
							</picker>
							<text class="fa fa-angle-right" aria-hidden="true"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">年级</text>
							<input class="text-black-accent text-xxs" type="text" v-model="grade" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
							<text class="margin-left-sm text-sm">姓名</text>
							<input class="text-black-accent text-xxs" type="text" v-model="realName" maxlength="15"/>
							<text class="fa fa-angle-right"></text>
						</view>
						<view class="you-btn text-lg bg-second text-white margin-top-lg flex-column flex-center" @click="sendMember">
							确认添加成员
						</view>
					</view>
				</view>
				
				<!-- 是否确认删除 -->
				<view class="mask flex-column flex-center" v-show="delectConfirmShow" @touchmove.stop.prevent>
					<view class="prompt-box bg-white radius-xs flex-column flex-center">
						<text>是否确认删除</text>
						<view class="btn-box margin-top-xl flex-row">
							<view class="you-btn bg-gray text-primary" @click.stop.prevent="cancelDelect()">取消</view>
							<view class="you-btn bg-red text-white margin-left-sm" @click.stop.prevent="confirmDelect()">确认</view>
						</view>
					</view>
				</view>
				
				<view class="fixed-box bg-white shadow-xs flex-row align-center justify-around" v-if="!identity">
					<view class="delete you-btn text-white bg-red" @click="delectSelect" v-show="!delectBtnShow">
						删除成员
					</view>
					<view class="delete you-btn text-white bg-four" @click="cancelDelectSelect" v-show="delectBtnShow">
						取消删除
					</view>
					<view class="add you-btn text-white bg-second" @click="addSelect">
						添加成员
					</view>
				</view>
			</view>
		
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				occupationList: [
					{
						id: 0,
						name: '理事'
					},{
						id: 2,
						name: '办公室'
					},{
						id: 3,
						name: '竞赛部'
					},{
						id: 4,
						name: '宣传策划部'
					},{
						id: 5,
						name: '培训部'
					},{
						id: 6,
						name: '工联部'
					}
				],
				memberList: [
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟'
					},
					{
						id: '0',
						grade: 2019,
						position: '副理事长',
						name: '曾书伟123'
					},
				],
				bottomBarShow: false,
				delectBtnShow: false,
				delectConfirmShow: false, // 删除确认遮罩层
				addConfirmShow: false, // 添加
				identity: 0,
				animationData: {},
				kindData: ['理事长', '副理事长', '办公室', '竞赛部', '宣传策划部', '培训部', '工联部'],
				kindIndex: 0,
				grade: 2019,
				realName: '曾书伟',
				
			};
		},
		onLoad(e) {
			const index = JSON.parse(decodeURIComponent(e.index))
			console.log(index)
			this.$store.commit('changeDepartmentIndex', index)
			let animation = uni.createAnimation({
				duration: '1000',
				timingFunction: "ease",
				
			})
			this.animationData = animation
		},
		computed: {
			...mapState(['departmentIndex'])
		},
		methods: {
			...mapMutations(['changeDepartmentIndex']),
			changeOccupationInstroduce(index) {
				this.$store.commit('changeDepartmentIndex', index)
				// setTimeout(() => {
				// 	this.animationData.width('62vw').step()
				// 	this.animationData.height(`340upx`).step()
				// 	this.animationData.export()
				// }, 300)
			},
			delectSelect() {
				this.delectBtnShow = !this.delectBtnShow
			},
			cancelDelectSelect() {
				this.delectBtnShow = !this.delectBtnShow
			},
			delectMember() {
				this.delectConfirmShow = !this.delectConfirmShow
			},
			cancelDelect() {
				this.delectConfirmShow = !this.delectConfirmShow
			},
			confirmDelect() { // 要写删除接口
				
				
				this.delectConfirmShow = !this.delectConfirmShow
			},
			addSelect() {
				this.addConfirmShow = !this.addConfirmShow
			},
			choseKind: function(e) {
				console.log(e)
				this.kindIndex= e.detail.value;
			},
			sendMember() { // 要添加成员接口 
				
				this.addConfirmShow = !this.addConfirmShow
			},
			cancelSendMember() {
				this.addConfirmShow = !this.addConfirmShow
			},
			
		}
	}
</script>

<style lang="scss">
.you-page {
	// margin-top: 40px;
	position: relative;
	.top-box {
		// border: 2px solid #333333;
		width: 100vw;
		height: 400upx;
		border-radius: 0 0 20upx 20upx;
		position: absolute;
		top: 0;
		
		.side-bar {
			// border: 2px solid #333333;
			width: 180upx;
			height: 360upx;
			
			.btn {
				font-size: 14px;
			}
			
			.isSelect {
				background-color: #78BB7B;
				color: #FFFFFF;
				border-radius: 20upx;
				
				text {
					transform: scale(1.1);
					transition: 0.4s;
				}
			}
		}
		
		.content-box {
			// border: 2upx solid #333333;
			width: 64vw;
			height: 360upx;
			padding: 20upx;
			transition: 0.5s;
			
			.instroduce-content {
				// border: 2upx solid #333333;
				width: 94%;
				min-height: 80%;
				word-wrap: word-break;
				word-break: break-all;
			}
		}
	}
	
	.scroll-view {
		width: 100vh;
		height: calc(100vh - 530upx);
		position: absolute;
		top: 400upx;
		margin-bottom: 20upx;
		
		.content-box {
			// border: 2upx solid #333333;
			width: 100vw;
			height: 100upx;
			margin: 20upx 0;
			
			.member-box {
				// background-color: #0FB9B1;
				width: 90%;
				height: inherit;
				
				.you-btn {
					width: 120upx;
					height: 50upx;
					font-size: 14px;
					background-color: #e74c3c;
					
				}
			}
		}
	}
	
	.slider-box {
		width: 100vw;
		height: 100upx;
		position: fixed;
		bottom: 0;
		.slider {
			height: 80upx;
		}
	}
	
	.you-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 20;
		
		.member-page {
			width: 70vw;
			height: 500upx;
			position: relative;
			
			text:only-of-type {
				position: absolute;
				top: 20upx;
				right: 26upx;
				font-size: 20px;
			}
			
			.box-in {
				width: 92%;
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
		}
		
		.you-btn {
			width: 80%;
			height: 76upx;
			
		}
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
	
	.fixed-box {
		width: 100vw;
		height: 120upx;
		position: fixed;
		bottom: 0;
		z-index: 10;
		
		.delete {
			width: 40%;
			height: 60%;
		}
		
		.add {
			width: 40%;
			height: 60%;
			
		}
	}
}
</style>
