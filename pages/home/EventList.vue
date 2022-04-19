<template>
	<!--
	 活动名称
	 开始时间
	 结束时间
	 地点
	 简介
	 这里最好还是后端写接口 筛选比较好
	 -->
	<view class="event-box margin-top-sm flex-column align-center">
		<text class="title text-lg">赛事信息</text>
		<view class="tabs margin-top-sm display-grid col-4">
			<view class="tab text-xs radius-xs flex-column flex-center" 
				  v-for="item in tabList" 
				  :key="item.tabId"
				  :class="{'active': currentIndex == item.tabId }"
				  @click="selectTab(item.tabId)">{{ item.name }}</view>
			
		</view>
		
		<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 0">
			<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration?item='+ encodeURIComponent(JSON.stringify(currentIndex))" class="you-btn bg-third text-sm text-white">报名科技月评</navigator>
			<!-- 科技月评  -->
			<event-card v-for="item in currentList" :key="item.contestId" v-show="item.status"
						:eventName="item.contestName"
						:address="item.contestPlace"
						:startTime="item.beginTime"
						:endTime="item.endTime"
						:introduce="item.contestIntroduction"
						@deleteEvent="handleDelete(item.contestId)"></event-card>
			
		</view>
		<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 1">
			<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration?item='+ encodeURIComponent(JSON.stringify(currentIndex))" class="you-btn bg-third text-sm text-white">报名软件创新</navigator>
			<!-- 软件创新  -->
			<event-card v-for="item in currentList" :key="item.contestId" v-show="item.status"
						:eventName="item.contestName"
						:address="item.contestPlace"
						:startTime="item.beginTime"
						:endTime="item.endTime"
						:introduce="item.contestIntroduction"
						@deleteEvent="handleDelete(item.contestId)"></event-card>
			
		</view>
		<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 2">
			<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration?item='+ encodeURIComponent(JSON.stringify(currentIndex))" class="you-btn bg-third text-sm text-white">报名码上学习</navigator>
			<!-- 马上学习  -->
			<event-card v-for="item in currentList" :key="item.contestId" v-show="item.status"
						:eventName="item.contestName"
						:address="item.contestPlace"
						:startTime="item.beginTime"
						:endTime="item.endTime"
						:introduce="item.contestIntroduction"
						@deleteEvent="handleDelete(item.contestId)"></event-card>
			
		</view>
		<view class="tab-content margin-top-sm radius-sm flex-column align-center" v-show="currentIndex === 3">
			<navigator navigatorTo :url="'/pages/home/competitionRegistration/competitionRegistration?item='+ encodeURIComponent(JSON.stringify(currentIndex))" class="you-btn bg-third text-sm text-white">报名算法比赛</navigator>
			<!-- 算法比赛  -->
			<event-card v-for="item in currentList" :key="item.contestId" v-show="item.status"
						:eventName="item.contestName"
						:address="item.contestPlace"
						:startTime="item.beginTime"
						:endTime="item.endTime"
						:introduce="item.contestIntroduction"
						@deleteEvent="handleDelete(item.contestId)"></event-card>
			
		</view>
	</view>
</template>

<script>
	import EventCard from '../../components/content/EventCard.vue'
	export default {
		
		data() {
			return {
				tabList: [
					{
						name: '科技月评',
						tabId: 0
					},{
						name: '软件创新',
						tabId: 1
					},{
						name: '码上学习',
						tabId: 2
					},{
						name: '算法比赛',
						tabId: 3
					}
				],
				currentIndex: 0,
				currentList: [],
				eventShowList: [],
				// contestName: '科技月评'
			}
		},
		created() {
			this.getEventList()
			
			setTimeout(() => {
				this.currentList = this.eventShowList.filter(item => {
					return item.contestName == '科技月评'
				})
			}, 1000)
		},
		methods:{
			selectTab: function(index) {
				this.currentIndex = index
				this.getEventList()
				if (index == 0) {
					this.currentList = this.eventShowList.filter(item => {
						return item.contestName == '科技月评'
					})
				} else if (index == 1) {
					this.currentList = this.eventShowList.filter(item => {
						return item.contestName == '软件创新'
					})
				} else if (index == 2) {
					this.currentList = this.eventShowList.filter(item => {
						return item.contestName == '码上学习'
					})
				} else if (index == 3) {
					this.currentList = this.eventShowList.filter(item => {
						return item.contestName == '算法比赛'
					})
				} else if (index == 4) {
					this.currentList = this.eventShowList.filter(item => {
						return item.contestName == '先导课'
					})
				}
			},
			getEventList(contestName) {
				this.$get('/cosi/contest/list', {
					// contestName
				}).then(res => {
					console.log(res)
					if(res) {
						this.eventShowList = res.data
					}
					
				})
				
			},
			handleDelete(contestId) { // 删除完了之后重新加载 并且将 tab 栏切换会第一个
				this.$get('/cosi/contest/close', {
					contestId
				}).then(res => {
					console.log(res)
					this.$toast('关闭成功', 1000, 'success', true)
					this.getEventList()
					this.selectTab(0)
				})
			}
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
