<!-- 
 @zsw
 2022-1-27
 -->
<template name="community">
	<view class="my-page flex-column align-center">
		<view class="head-tab bg-white display-grid col-2">
			<view class="tab-item flex-row flex-center fade-in" 
				  v-for="tabItem in tabList" :key="tabItem.tabId"
				  :class="{'activeTab': currentIndex == tabItem.tabId, 'text-black-accent': currentIndex != tabItem.tabId}"
				  @click="tabSelect(tabItem.tabId)">
				<text :class="{'text-five': currentIndex == tabItem.tabId}">{{ tabItem.name }}</text>
			</view>
		</view>
		<list-scroll @loadMore="loadMore">
			<view class="posts-list flex-column align-center" >
				<post-detail v-for="item in currentList" :key="item.post.postId"
							 :openId="item.post.openid"
							 :postId='item.post.postId'
							 :headImg='item.user.avatar'
							 :nickname='item.user.nickName'
							 :autograph='item.user.sign'
							 :time='item.post.postTime'
							 :postContent='item.postContent' 
							 :contentImg='item.images'
							 :encourageState='item.post.postStatus'
							 @share='handleShare'
							 @encourage='handleEncourage'
							 @deletePost='handleDelete(item.post.postId)'></post-detail>
			</view>
			<view class="loding-box flex-column align-center">
				<view class="" v-show="!isLoading">加载中....</view>
				<view class="" v-show="isLoading">没有更多了</view>
			</view>
		</list-scroll>
		
		<navigator url="/pages/community/sendDetail/sendDetail"
				   class="send-box bg-five radius-cr shadow-mi flex flex-center">
			<view class="send text-white fa fa-send-o"></view>
		</navigator>
	</view>
</template>

<script>
	import postDetail from '../../components/content/postDetail.vue'
	import ListScroll from '../../components/ListScroll.vue'
	export default {
		data() {
			return {
				tabList: [
					{
						name: '技术帖',
						tabId: 0
					},
					{
						name: '生活帖',
						tabId: 1
					},
				],
				currentIndex: 0,
				currentList: [],
				postList:[],
				pageCurrent: 1,
				pageSize: 10,
				isLoading: true,
				
			};
		},
		components: {
			postDetail,
			ListScroll,
			
		},
		created() {
			this.getPostList()
		},
		methods: {
			tabSelect: function(index) {
				this.currentIndex = index;
				if (index == 0) {
					this.currentList = this.postList.filter(item => {
						console.log(item.post.postType)
						return item.post.postType == 0
					})
				} else if (index == 1) {
					this.currentList = this.postList.filter(item => {
						console.log(item.post.postType)
						return item.post.postType == 1
					})
				}
			},
			handleShare: function() {
				console.log('handleShare')
			},
			handleEncourage: function() {
				console.log('handleEncourage')
			},
			clipboardClick() {
				
			},
			loadMore() {
				console.log('加载更多')
				this.pageCurrent++
				this.isLoading = false
				this.getPostList()
				// this.page
			},
			getPostList() {
				/* 
				 加载更多的时候 会页数增加 但是之前的数据要保留才行
				 所以要拼接
				 */
				this.$get('/community/post/posts', {
					current: this.pageCurrent,
					size: this.pageSize
				}).then(res => {
					let oldPostList = this.postList
					this.postList = [...oldPostList, ...res.data.posts]
					this.isLoading = true
					console.log(this.postList)
					// console.log(res)
				})
			},
			handleDelete(postId) {
				this.$get('/community/post/delete', {
					postId 
				}).then(res => {
					console.log(res)
				})
			},
			
			
		}
	}
</script>

<style lang="scss">
.my-page {
	position: relative;
	padding-bottom: 70upx;
	
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
	
	.loding-box {
		width: 100vw;
		height: 120upx;
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
