<template>
	<!-- 
	 使用 如果是直接在最外层的话 不用设定高度也可以直接使用 
	 不然要设定高度 vh
	 -->
	<view class="scroll">
		<scroll-view class="list-scroll" scroll-y @scrolltolower="loadmore">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"ListScroll",
		data() {
			return {
				
			};
		},
		methods: {
			loadmore() {
				this.$emit('loadMore')
			}
		},
		
	}
</script>

<style lang="scss">
	.scroll {
		// flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.list-scroll {
			height: 100vh;
			display: flex;
			flex-direction: column;
		}
	}
</style>
