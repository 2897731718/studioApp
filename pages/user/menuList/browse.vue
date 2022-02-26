<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content">浏览记录</block>
	</cu-custom>
	<view class="you-page flex-column align-center">
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
	</view>	
</view>
</template>

<script>
	export default {
		data() {
			return {
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
		}
	}
</script>

<style lang="scss">
.you-page {
	.posts-list {
		width: 100vw;
		
	}
}
</style>
