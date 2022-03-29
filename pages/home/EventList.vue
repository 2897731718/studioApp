<template>
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
			<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration?item='+ encodeURIComponent(JSON.stringify(currentIndex))" class="you-btn bg-third text-sm text-white">报名科技月评</navigator>
			<!-- 科技月评  -->
			<event-card v-for="item in eventShowList" :key="item.id"
						:eventName="item.eventName"
						:address="item.address"
						:startTime="item.startTime"
						:endTime="item.endTime"
						:introduce="item.introduce"></event-card>
			
		</view>
		<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 1">
			<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration?item='+ encodeURIComponent(JSON.stringify(currentIndex))" class="you-btn bg-third text-sm text-white">报名软件创新</navigator>
			<!-- 软件创新  -->
			<event-card v-for="item in eventShowList" :key="item.id"
						:eventName="item.eventName"
						:address="item.address"
						:startTime="item.startTime"
						:endTime="item.endTime"
						:introduce="item.introduce"></event-card>
			
		</view>
		<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 2">
			<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration?item='+ encodeURIComponent(JSON.stringify(currentIndex))" class="you-btn bg-third text-sm text-white">报名码上学习</navigator>
			<!-- 马上学习  -->
			<event-card v-for="item in eventShowList" :key="item.id"
						:eventName="item.eventName"
						:address="item.address"
						:startTime="item.startTime"
						:endTime="item.endTime"
						:introduce="item.introduce"></event-card>
			
		</view>
		<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 3">
			<!-- 马上开奖  -->
			<event-card v-for="item in eventShowList" :key="item.id"
						:eventName="item.eventName"
						:address="item.address"
						:startTime="item.startTime"
						:endTime="item.endTime"
						:introduce="item.introduce"></event-card>
			
		</view>
		<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 4">
			<!-- 先导课  -->
			<event-card v-for="item in eventShowList" :key="item.id"
						:eventName="item.eventName"
						:address="item.address"
						:startTime="item.startTime"
						:endTime="item.endTime"
						:introduce="item.introduce"></event-card>
			
		</view>
	</view>
</template>

<script>
	import EventCard from '../../components/content/EventCard.vue'
	export default {
		
		data() {
			return {
				tabList: ['科技月评', '软件创新', '码上学习', '码上开讲', '先导课'],
				currentIndex: 0,
				eventShowList: [
					{
						id: 0,
						eventName: '码上开讲',
						address: 'e教899',
						startTime: '2021-10-1',
						endTime: '2021-10-29',
						introduce: '大学生创新创业中心成立于2017年',
					},
					
				],
			}
		},
		created() {
			this.getEventList
		},
		methods:{
			selectTab: function(index) {
				this.currentIndex = index
				
			},
			getEventList() {
				this.$get('/cosi/contest/info', {
					openId: uni.getStorageInfoSync('openid')
				}).then(res => {
					console.log(res, 3)
				})
				
			},
		},
		components:{
			EventCard,
			
		}
	}
</script>

<style lang="scss" scoped>
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
</style>
