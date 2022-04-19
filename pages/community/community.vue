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
				<post-detail v-for="item in postList" :key="item.post.postId"
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
						tabId: 1
					},
					{
						name: '生活帖',
						tabId: 2
					},
				],
				currentIndex: 1,
				postList:[],
				pageCurrent: 1,
				pageSize: 20,
				isLoading: true,
				
			};
		},
		components: {
			postDetail,
			ListScroll,
			
		},
		created() {
			this.isLoading = false
			this.getPostList(1)
		},
		methods: {
			tabSelect: function(index) {
				this.currentIndex = index;
				this.pageCurrent = 1 // 切换了之后要重新开始计数请求
				this.postList = []
				this.getPostList(index)
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
				this.getPostList(this.currentIndex)
				
			},
			getPostList(postType) {
				/* 
				 加载更多的时候 会页数增加 但是之前的数据要保留才行
				 所以要拼接
				 */
				this.$get('/community/post/all', {
					current: this.pageCurrent,
					size: this.pageSize,
					sort: 1,
					type: postType
				}).then(res => {
					console.log(res.data)
					let oldPostList = this.postList
					this.postList = [...oldPostList, ...res.data.posts]
					this.$toast('加载成功', 1000, 'success', true)
					this.isLoading = true
					// console.log(this.postList)
				})
			},
			// firstGet() {
			// 	this.pageCurrent = 1
			// 	this.$get('/community/post/posts', {
			// 		current: this.pageCurrent,
			// 		size: this.pageSize
			// 	}).then(res => {
			// 		this.postList = res.data.posts
			// 		this.currentList = this.postList.filter(item => {
			// 			return item.post.postType == 0
			// 		}) // 进入页面 默认显示
			// 		this.$toast('加载成功', 1000, 'success', true)
			// 		this.isLoading = true
			// 		console.log(this.postList)
			// 		// console.log(res)
			// 	})
			// },
			handleDelete(postId) {
				this.$get('/community/post/delete', {
					postId 
				}).then(res => { // 删除之后重新加载
					this.getPostList(1)
					this.pageCurrent = 1 
					this.postList = []
					this.$toast('删除成功', 1000, 'success', true)
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
