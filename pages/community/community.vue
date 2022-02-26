<!-- 
 @zsw
 2022-1-27
 -->
<template name="community">
	<view class="you-page flex-column align-center">
		<view class="head-tab bg-white display-grid col-2">
			<view class="tab-item flex-row flex-center fade-in" 
				  v-for="(tabItem, index) in tabList" :key="index"
				  :class="{'activeTab': currentIndex == index, 'text-black-accent': currentIndex != index}"
				  @click="tabSelect(index)">
				<text :class="{'text-five': currentIndex == index}">{{ tabItem }}</text>
			</view>
		</view>
		<view class="posts-list flex-column align-center" >
			<post-detail v-for="item in postList" :key="item.postId"
						 :postId='item.postId'
						 :img='item.headImg'
						 :nickname='item.nickname'
						 :autograph='item.autograph'
						 :time="item.time"
						 :postContent='item.postContent'
						 :link='item.link'
						 :contentImg='item.contentImg'
						 :encourageState='item.encourageState'
						 @share='handleShare'
						 @encourage='handleEncourage'></post-detail>
		</view>
		<navigator url="/pages/community/sendDetail/sendDetail"
				   class="send-box bg-five radius-cr shadow-mi flex flex-center">
			<view class="send text-white fa fa-send-o"></view>
		</navigator>
	</view>
</template>

<script>
	import postDetail from '../../components/content/postDetail.vue'
	export default {
		data() {
			return {
				tabList: ['技术墙', '表白墙'],
				currentIndex: 0,
				postList:[
					{
						postId: 1,
						headImg: '../../static/logo.jpg',
						nickname: 'popopo',
						autograph: 'uiqureiwtuqietuioq',
						time: '2021-1-7',
						postContent: `hfjdshfjsjkdasjjjjjjjjjsaaaaaaaaaaa
				
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa无😊😊`,
						link: 'https://uniapp.dcloud.io/api/system/clipboard',
						contentImg: '',
						encourageState: 0,
						
					},
					{
						postId: 1,
						headImg: '../../static/logo.jpg',
						nickname: 'popopo',
						autograph: 'uiqureiwtuqietuioq',
						time: '2021-1-7',
						postContent: `hfjdshfjsjkdasjjjjjjjjjsaaaaaaaaaaa
				
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa无😊😊`,
						link: 'https://uniapp.dcloud.io/api/system/clipboardsfddfsdf',
						contentImg: '../../static/background.jpeg',
						encourageState: 1,
					},
					{
						postId: 1,
						headImg: '../../static/logo.jpg',
						nickname: 'popopo',
						autograph: 'uiqureiwtuqietuioq',
						time: '2021-1-7',
						postContent: `hfjdshfjsjkdasjjjjjjjjjsaaaaaaaaaaa
				
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa无😊😊`,
						link: 'https://uniapp.dcloud.io/api/system/clipboardsafdsfsdfsadfdfdsf',
						contentImg: '../../static/background.jpeg',
						encourageState: 1,
					},
				]
			};
		},
		components: {
			postDetail,
			
		},
		methods: {
			tabSelect: function(index) {
				this.currentIndex = index;
			},
			handleShare: function() {
				console.log('handleShare')
			},
			handleEncourage: function() {
				console.log('handleEncourage')
			},
			clipboardClick() {
				
			},
			
		}
	}
</script>

<style lang="scss">
.you-page {
	position: relative;
	
	.head-tab {
		width: 100vw;
		height: 100upx;
		border-bottom: 2upx solid #F4F5F5;
		position: absolute;
		top: 0;
		z-index: 99;
		
		.tab-item {
			height: 100upx;
			position: relative;
			
			
		}
		
		.activeTab {
			color: #4BBBFA;
			
			&::after {
				content: '';
				width: 80upx;
				height: 10upx;
				border-radius: 10upx;
				background-color: #4BBBFA;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				top: 90upx;
				animation: fadeIn 1.3s;
			}
		}
		
		@keyframes fadeIn {
			  from {
			    opacity: 0;
			  }
			  to {
			    opacity: 1;
			  }
		}
	}
	
	.posts-list {
		width: 100vw;
		padding-top: 110upx;
		
	}
	
	.send-box {
		width: 100upx;
		height: 100upx;
		position: fixed;
		bottom: 180upx;
		right: 54upx;
		
		.send {
			font-size: 26px;
		}
	}
}
</style>
