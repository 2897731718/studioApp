<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
		<block slot="backText">返回</block>
		<block slot="content">浏览记录</block>
	</cu-custom>
	<view class="you-page flex-column align-center">
		browse
	</view>	
</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
