<!-- 
 @zsw
 2021-09-14
 -->

<template name="home">
	<view class="you-page flex-column align-center">
		
		<view class="graphical-top bg-primary"></view>
		<!-- 大创简介名片 -->
		<view class="header-box bg-primary radius-sm margin-top-sm">
			<view class="top-box radius-sm flex-row flex-center bg-second">
				<view class="img-box">
					<!-- <image src="../../static/logo.png" mode=""></image> -->
					<cubic-img class="img"></cubic-img>
				</view>
				<view class="introduce-box flex-column text-sm text-family">
					<text class="margin-bottom-xs text-lg text-bold">软件学院</text>
					<text>大学生创新创业中心</text>
				</view>
				<view class="btn-box flex-column flex-center">
					<navigator class="text-lg text-white" hover-class="other-navigator-hover" :url="'/pages/home/departmentSignUp/departmentSignUp'" navigateTo>
						报名
					</navigator>
				</view>
			</view>
			<view class="instroduce-detail flex-column align-center">
				<view class="title text-bloder">
					大创简介
				</view>
				<view class="detail-box margin-top-lg text-sm">
					<view class="margin-top-xs">
						大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台。
					</view>
				</view>
				
			</view>
			<view class="bottom-box display-grid col-5" >
				<view class="title text-bloder">
					大创部门
				</view>
				
				<view class="department-box margin-top-lg flex-row flex-center" v-for="item in departmentList" :key="item.id">
					<navigator :url="'/pages/home/departmentProfile/departmentProfile?index=' + encodeURIComponent(JSON.stringify(item.id))" 
							   class="btn-glow" hover-class="other-navigator-hover">
						<view class="">{{ item.name }}</view>
					</navigator>
				</view>
			</view>
			<!-- <view class="bottom-box flex flex-center">
				<navigator hover-class="navigator-hover" :url="'/pages/home/departmentProfile/departmentProfile'" navigatorTo>
					大创部门详情
				</navigator>
			</view> -->
		</view>
		
		<!-- <view class="graphical-center bg-primary"></view> -->
		<!-- <view class="new-page bg-primary"></view> -->
		<!-- 工作室logo -->
		<view class="studio-box margin-top-lg flex-column">
			<ls-swiper class="ls-swiper"
			:list="imageList" imgKey="imgUrl"
			:crown="true" :loop="true" :shadow='true' height='120' 
			previousMargin="0"
			nextMargin='120' imgRadius="500"
			@change="getImgId"/>
		</view>
		<!-- 工作室简介 -->
		<studio-card v-show="cardIsShow == 1"
					 :name='studioList.paiData.name'
					 :indruction='studioList.paiData.indruction'
					 :teacher='studioList.paiData.teacher'></studio-card>
		
		<!-- 
		 活动名称
		 开始时间
		 结束时间
		 地点
		 简介
		 -->
		<view class="event-box margin-top-sm flex-column align-center">
			<text class="title text-lg">赛事信息</text>
			<view class="tabs margin-top-sm display-grid col-5">
				<view class="tab text-xs radius-xs flex-column flex-center" 
					  v-for="(item,index) in tabList" 
					  :key="index"
					  :class="{'active': currentIndex == index }"
					  @click="selectTab(index)">{{ item }}</view>
				
			</view>
			
			<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 0">
				<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration'" class="you-btn bg-third text-sm text-white" @click="toSignUpPage">报名科技月评</navigator>
				<!-- 信息 使用 v-for  -->
				<event-card v-for="item in eventShowList" :key="item.id"
							:eventName="item.eventName"
							:address="item.address"
							:startTime="item.startTime"
							:endTime="item.endTime"
							:introduce="item.introduce"></event-card>
				
			</view>
			<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 1">
				<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration'" class="you-btn bg-third text-sm text-white" @click="toSignUpPage">报名软件创新</navigator>
				<!-- 信息 使用 v-for  -->
				<event-card v-for="item in eventShowList" :key="item.id"
							:eventName="item.eventName"
							:address="item.address"
							:startTime="item.startTime"
							:endTime="item.endTime"
							:introduce="item.introduce"></event-card>
				
			</view>
			<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 2">
				<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration'" class="you-btn bg-third text-sm text-white" @click="toSignUpPage">报名码上学习</navigator>
				<!-- 信息 使用 v-for  -->
				<event-card v-for="item in eventShowList" :key="item.id"
							:eventName="item.eventName"
							:address="item.address"
							:startTime="item.startTime"
							:endTime="item.endTime"
							:introduce="item.introduce"></event-card>
				
			</view>
			<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 3">
				<!-- 信息 使用 v-for  -->
				<event-card v-for="item in eventShowList" :key="item.id"
							:eventName="item.eventName"
							:address="item.address"
							:startTime="item.startTime"
							:endTime="item.endTime"
							:introduce="item.introduce"></event-card>
				
			</view>
			<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 4">
				<!-- 信息 使用 v-for  -->
				<event-card v-for="item in eventShowList" :key="item.id"
							:eventName="item.eventName"
							:address="item.address"
							:startTime="item.startTime"
							:endTime="item.endTime"
							:introduce="item.introduce"></event-card>
				
			</view>
		</view>
		
		<!-- 悬浮按钮 控制添加赛事信息显示隐藏 -->
		<view class="fixed-box radius-cr text-white flex-column flex-center" @click="showAddEvent"></view>
		
		<!-- 添加赛事信息 -->
		<view class="you-mask glass-morphism flex-column align-center" v-show="addEventShow" @touchmove.stop.prevent>
			<view class="add-page bg-gray flex-column align-center">
				<view class="cancel-box flex-row align-center">
					<text class="fa fa-times text-lg" @click="cancelSendEvent"></text>
				</view>
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
				<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
					<text class="margin-left-sm text-sm">开始时间</text>
					<input class="text-black-accent text-xxs" type="text" v-model="startTime" placeholder="2021-10-1 7:00" maxlength="15"/>
					<text class="fa fa-angle-right"></text>
				</view>
				<view class="box-in margin-top-sm radius-xs flex-row align-center text-left">
					<text class="margin-left-sm text-sm">结束时间</text>
					<input class="text-black-accent text-xxs" type="text" v-model="endTime" placeholder="2021-10-1 9:00" maxlength="15"/>
					<text class="fa fa-angle-right"></text>
				</view>
				<view class="main-box margin-top-sm radius-xs flex-column align-center">
					<text class=" margin-top-sm">自我介绍</text>
					<view class="detail-box radius-xs flex-column align-center">
						<textarea class="input-content border bg-white radius-xs" v-model="eventIntroduction" 
								  placeholder="例如:第XX次举办啥的"></textarea>
						<!-- <text v-else class="input-content border bg-white radius-xs">{{ selfIntroduction }}</text> -->
					</view>
				</view>
				<view class="you-btn bg-second text-white text-sm" @click="sendEvent">确认添加</view>
				<!-- <view class="btn-box margin-top-lg margin-bottom-sm flex-row flex-center">
					<view class="you-btn bg-four text-white text-sm" @click="cancelSendEvent">确认添加</view>
					
				</view> -->
				
			</view>
		</view>
		
		<!-- <bottom-tab-bar class="bottom-tab"></bottom-tab-bar> -->
	</view>
</template>

<script>
	// import BottomTabBar from '../../components/BottomTabBar.vue'
	import CubicImg from '../../components/CubicImg.vue'
	import LsSwiper from '../../components/LsSwiper.vue'
	import EventCard from '../../components/content/EventCard.vue'
	import StudioCard from '../../components/content/StudioCard.vue'
	
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				imageList: [
					{
						name: '1',
						imgUrl: '../static/logo.jpg',
					},
					{
						name: '2',
						imgUrl: 'https://pic3.zhimg.com/80/v2-1deed0eca463f87f36d6e88363ae2693_720w.jpg?source=1940ef5c',
					},
					{
						name: '3',
						imgUrl: 'https://picb.zhimg.com/80/v2-520f230f8cb8a0943b8582dcd77ec6ba_720w.jpg?source=1940ef5c',
					},
					{
						name: '4',
						imgUrl: '../static/logo.jpg',
					},
					{
						name: '5',
						imgUrl: '../static/logo.jpg',
					},
					{
						name: '6',
						imgUrl: '../static/logo.jpg',
					},
					
				],
				cardIsShow: 1,  // 图片
				studioList: {
					paiData: {
						name: 'π',
						indruction: '大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台。',
						teacher: 'yh'
					}
				},
				departmentList: [
					{
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
				tabList: ['科技月评', '软件创新', '码上学习', '码上开讲', '先导课'],
				currentIndex: 0,
				eventList: [],
				eventShowList: [
					{
						id: 0,
						eventName: '码上开讲',
						address: 'e教899',
						startTime: '2021-10-1',
						endTime: '2021-10-29',
						introduce: '大学生创新创业中心成立于2017年',
					},
					{
						id: 1,
						eventName: '码上开讲',
						address: 'e教899',
						startTime: '2021-10-1',
						endTime: '2021-10-29',
						introduce: '大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台',
					},
					{
						id: 2,
						eventName: '码上开讲',
						address: 'e教899',
						startTime: '2021-10-1',
						endTime: '2021-10-29',
						introduce: '大学生创新创业中心成立于2017年，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、提供学习交流的平台',
					},
				],
				identity: 0,
				addEventShow: false,
				kindData: ['科技月评', '软件创新', '码上学习', '码上开讲', '先导课'],
				kindIndex: 0,
				address: '',
				startTime: '',
				endTime: '',
				eventIntroduction: '',
				
			}
		},
		onLoad() {

		},
		computed: {
			...mapState(['departmentIndex']),
			
		},
		methods: {
			...mapMutations(['changeDepartmentIndex']),
			// toDepartmentSign() {
			// 	uni.navigateTo({
			// 		url: './departmentSignUp/departmentSignUp'
			// 	})
			// },
			toDepartmentPage(index) {
				this.$store.commit('changeDepartmentIndex', index)
			},
			getImgId(res) {
				console.log(res.name)
				this.cardIsShow = res.name
			},
			selectTab: function(index) {
				this.currentIndex = index
				
			},
			choseKind: function(e) {
				console.log(e)
				this.kindIndex= e.detail.value;
			},
			showAddEvent() {
				this.addEventShow = !this.addEventShow
			},
			cancelSendEvent() {
				this.addEventShow = !this.addEventShow
			},
			sendEvent() { // 写发送接口
				
				
				this.addEventShow = !this.addEventShow
			}
		},
		components: {
			CubicImg,
			// BottomTabBar,
			LsSwiper,
			EventCard,
			StudioCard,
			
		}
	}
</script>

<style lang="scss" scoped>
.you-page {
	position: relative;
	
	.graphical-top {
		position: absolute;
		top: 0;
		width: 100vw;
		height: 100upx;
		border-radius:0 0 20% 20% ;
		z-index: 0;
	}
	
	.header-box {
		// border: 2upx solid #333333;
		width: 90vw;
		min-height: 500upx;
		box-shadow: 0 0 16upx rgba(114, 114, 114, 0.5);
		z-index: 3;
		
		.top-box {
			width: 100%;
			height: 200upx;
			// border: 2upx solid #333333;
			padding: 20upx;
			
			.img-box {
				width: 100upx;
				height: 100upx;
				margin-left: 20upx;
				margin-top: 30upx;
				.img {
					height: inherit;
					width: inherit;
					
				}
			}
			
			.introduce-box {
				flex: 1;
				margin-left: 20upx;
			}
			
			.btn-box {
				// position: absolute;
				// top: ;
				width: 140upx;
				height: 140upx;
				// border: 2px solid #333333;
				z-index: 25;
				
				// .btn-glow {
				// 	width: 100upx;
				// 	height: 100upx;
				// 	background-color: #78BB7B;
				// 	font-size: 20upx;
				// 	// padding: 20upx;
				// }
				
				.btn-rotate {
					width: 60px;
					height: 60px;
					.btn-name {
						width: 60px;
						height: 60px;
					}
				}
			}
		}
		
		.instroduce-detail {
			// border: 2upx solid #333333;
			width: 100%;
			padding: 20upx;
			height: 200upx;
			position: relative;
			
			.title {
				position: absolute;
				top: 20upx;
				left: 20upx;
			}
			
			.detail-box {
				width: inherit;
				height: 200upx;
			}
		}
		
		
		.bottom-box {
			// border: 2upx solid #333333;
			width: 100%;
			height: 150upx;
			padding: 24upx 0 0 0;
			position: relative;
			
			.title {
				position: absolute;
				top: 20upx;
				left: 20upx;
			}
			
			.department-box {
				// border: 2upx solid #333333;
				// justify-content: space-between;
				display: felx;
				align-items: center;
				justify-content: center;
				width: inherit;
				height: 80upx;
				// padding: 10upx;
				z-index: 25;
				
				.btn-glow {
					width: 120upx;
					height: 60upx;
					background-color: #78BB7B;
					font-size: 22upx;
					// margin:6upx;
					// padding: 20upx;
				}
			}
		}
		
		
	}
	
	.graphical-center {
		position: absolute;
		width: 100vw;
		height: 100upx;
		border-radius:20% 20% 0 0;
		z-index: 0;
		top: 44vh;
	}
	
	// .new-page {
	// 	width: 100vw;
	// 	min-height: 60vh;
	// 	top: -20upx;
	// }
	
	.studio-box {
		// border: 2upx solid #333333;
		box-shadow: 0 0 16upx rgba(114, 114, 114, 0.5);
		width: 90vw;
		min-height: 120upx;
		border-radius: 20upx;
		overflow: hidden;
		
		.ls-swiper {
			
		}
	}
	
	.event-box {
		width: 92vw;
		min-height: 400px;
		height: auto;
		// background: #f0f0f3;
		color: #808b9f;
		font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
		
		.tabs {
			width: 100%;
			padding: 4px;
			border-radius: 5px;
			background-color: #C4E1C5;
			box-shadow: -1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
			
			
			.tab {
				height: 60upx;
				transition: 0.3s;
			}
			
			.active {
				background: #eeeeee;
				box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
				  inset 1px 1px 2px rgba(174, 174, 192, 0.2);
				color: #78BB7B;
			}
		}
		
		.tab-content {
			width: 100%;
			min-height: 100%;
			height: auto;
			// background: #C4E1C5;
			padding: 20upx 0;
			// box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
			
			.you-btn {
				width: 40%;
				height: 80upx;
			}
			
			
		}
	}
	
	.fixed-box {
		width: 100upx;
		height: 100upx;
		position: fixed;
		right: 60upx;
		bottom: 120upx;
		z-index: 10;
		opacity: .7;
		background-color: #333333;
		transform: translateY(-50%);
	}
	
	.fixed-box::after {
	    position: absolute;
	    content: '';
	    width: 50%;
	    height: 3px;
	    border-radius: 3px;
	    background-color: #fff;
	    transition: 0.3s;
	}
	.fixed-box::before {
		position: absolute;
		content: '';
		width: 50%;
		height: 3px;
		border-radius: 3px;
		background-color: #fff;
		transition: 0.3s;
	    transform: rotate(90deg);
	}
	
	.you-mask {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		
		.add-page {
			width: 94vw;
			height: calc(100% - 300upx);
			position: absolute;
			bottom: 0;
			// left: 0;
			z-index: 199;
			border-radius: 30upx 30upx 0 0;
			
			.cancel-box {
				width: 100%;
				height: 40upx;
				position: relative;
				
				text:only-of-type {
					position: absolute;
					top: 20upx;
					right: 26upx;
					font-size: 20px;
				}
			}
			
			.box-in {
				width: 88%;
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
		}
	}
	
}
</style>
