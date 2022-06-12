<!-- 
 @zsw
 如果是移动端 tabar 栏
 1.使用 vuex 状态管理跳转页面
 2.建立一个 main-index 切换 各个 page 的主页面
 3.配置默认的 tabbar 然后隐藏掉 使用 uni.switchTab
 -->
<template>
<view>
	<cu-custom :isBack="false" bgColor="bg-five text-white"></cu-custom>
	<view class="you-page flex-column align-center">
		
		<home v-if="pageName=='home'"></home>
		<studio v-if="pageName=='studio'"></studio>
		<community v-if="pageName=='community'"></community>
		<user v-if="pageName=='user'"></user>
		<bottom-tab-bar class="bottom-tab"></bottom-tab-bar>
	</view>
	<!-- <list-scroll>
		<view class="you-page flex-column align-center">
			
			<home v-if="pageName=='home'"></home>
			<studio v-if="pageName=='studio'"></studio>
			<community v-if="pageName=='community'"></community>
			<user v-if="pageName=='user'"></user>
			<bottom-tab-bar class="bottom-tab"></bottom-tab-bar>
		</view>
	</list-scroll> -->
</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import ListScroll from '../../components/ListScroll.vue'
	export default {
		data() {
			return {
				eventShowList: [],
				
			}
		},
		computed: {
			...mapState(['pageName']),
			
		},
		created() {
			// this.getPostList()
		},
		onLoad() {
			this.$toast('登陆成功', 1000, 'success', true);
			// this.getEventList()
			// this.getPostList()
		},
		methods: {
			getEventList() {
				this.$get('/cosi/contest/info', {
					openId: uni.getStorageInfoSync('openid')
				}).then(res => {
					console.log(res, 3)
				})
				
			},
			getPostList() {
				this.$get('/community/post/list', {
					openId: uni.getStorageInfoSync('openid')
				}).then(res => {
					console.log(res, 4)
				})
			},
			loadmore(e) {
				console.log(e, 11)
				this.$emit('loadMore')
			}
		},
		components: {
			ListScroll
		}
		
	}
</script>

<style lang="scss">
.you-page {
	position: relative;
	padding-bottom: 70upx;
	
	.bottom-tab {
		position: fixed;
		top: 91vh;
	}
}
</style>
