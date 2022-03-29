<!-- 
 @zsw
 2021-09-14
 -->

<template name="home">
	<view class="you-page flex-column align-center">
		
		<view class="graphical-top bg-five"></view>
		<!-- 大创简介名片 -->
		<view class="header-box radius-sm margin-top-sm bg-white">
			<view class="top-box bg-five shadow-sm radius-sm  flex-row flex-center">
				<view class="img-box">
					<!-- <image src="../../static/logo.png" mode=""></image> -->
					<cubic-img class="img"></cubic-img>
				</view>
				<view class="introduce-box flex-column text-sm text-family">
					<text class="margin-bottom-xs text-lg text-bold">软件学院</text>
					<text>大学生创新创业中心</text>
				</view>
				<view class="btn-box radius-xs bg-white shadow-xs flex-column flex-center">
					<navigator class="text-xl text-seven" hover-class="other-navigator-hover" :url="'/pages/home/departmentSignUp/departmentSignUp'" navigateTo>
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
							   class="btn-glow bg-five" hover-class="other-navigator-hover">
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
		<event-list></event-list>
		
		<!-- 悬浮按钮 控制添加赛事信息显示隐藏 -->
		<navigator :url="'/pages/home/addEvent'" class="fixed-box radius-cr text-white flex-column flex-center" ></navigator>
		
		<!-- 添加赛事信息 -->
		<view class="you-mask glass-morphism flex-column align-center" v-show="addEventShow" @touchmove.stop.prevent>
			
		</view>
		
		<!-- <bottom-tab-bar class="bottom-tab"></bottom-tab-bar> -->
	</view>
</template>

<script>
	// import BottomTabBar from '../../components/BottomTabBar.vue'
	import CubicImg from '../../components/CubicImg.vue'
	import LsSwiper from '../../components/LsSwiper.vue'
	// import EventCard from '../../components/content/EventCard.vue'
	import StudioCard from '../../components/content/StudioCard.vue'
	import EventList from './EventList.vue'
	
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
				eventList: [],
				identity: 0,
				
				
			}
		},
		props: {
			
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
			
			
		},
		components: {
			
			CubicImg,
			// BottomTabBar,
			LsSwiper,
			// EventCard,
			StudioCard,
			EventList
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
		// box-shadow: 0 0 16upx rgba(114, 114, 114, 0.5);
		z-index: 3;
		
		.top-box {
			width: 100%;
			height: 200upx;
			// border: 2px solid #333333;
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
				
				width: 126upx;
				height: 70upx;
				
				z-index: 25;
				
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
					// background-color: #78BB7B;
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
	
	
}
</style>
