<template>
	<view class="loves">
		<view class="loves-item"
		      v-for="(item,index) in titles"
			  :class="{active : lovesIndex === index}"
			  @click="handleClickLovesitem(index)"
			  >
			  {{item}}
		</view>
		<view class="bottom" :style="{transform: 'translateX('+ (lovesIndex * 376) +'rpx)'}"></view>
		
	</view>
</template>

<script>
	export default {
		name:"MyLoves",
		data() {
			return {
				lovesIndex:0,
			};
		},
		props:{
			titles:{
				type:Array,
				default:[]
			}
		},
		methods:{
			handleClickLovesitem(index){
				this.lovesIndex = index;
				this.$emit('ClickLovesitem',index)
			}
		}
	}
</script>

<style scoped>
	.loves{
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-around;
		line-height: 40px;
		font-size: 32rpx;
		position: relative;
		background-color: #fff;
	}
	.loves-item{
		width: 210rpx;
		text-align: center;
		font-weight: 700;
		color: #b2b6ba;
	}
	.active{
		color:#30a8fe;
		animation: click .5s;
		transition: .5s;
	}
	.bottom{
		position: absolute;
		width: 210rpx;
		height: 2px;
		background-color: #30a8fe;
		bottom: 0;
		left: 42px;
		transition: .5s;
	}
	@keyframes click{
		from{
			background-color: #929598;
			border-radius: 20px;
		}
		to{
			background-color: #f7f7f7;
			border-radius: 20px;
		}
	}
	
</style>
