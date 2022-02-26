<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content">关注</block>
	</cu-custom>
	<view class="you-page flex-column align-center">
		<fans-box v-for="(item, index) in fansList" :key="index"
				  :userAge="item.userAge"
				  :sex="item.sex"
				  :time="item.time"
				  :userName="item.userName"
				  :userAvatar="item.userAvatar"
				  :isFocus='item.isFocus'
				  :nick="'你'"
				  @cancel="cancelAttention(index)"
				  @attention="attention(index)">
		</fans-box>
	</view>	
</view>
</template>

<script>
	import fansBox from '../../../components/content/fansBox.vue'
	export default {
		data() {
			return {
				fansList: [
					{
						userAge: 18,
						sex: 2,
						time: '2021-3-5',
						userName: 'popop',
						userAvatar: '../../static/background.jpeg',
						isFocus: '0',
						
					},
					{
						userAge: 18,
						sex: 2,
						time: '2021-3-5',
						userName: 'popop',
						userAvatar: '../../static/background.jpeg',
						isFocus: '0',
						
					},
				]
			};
		},
		components: {
			fansBox
		},
		methods: {
			cancelAttention(index) {
				
			},
			attention(index) {
				
			},
			
		}
	}
</script>

<style lang="scss">

</style>
