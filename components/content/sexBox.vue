<template>
	<view class="sex-box flex-row bg-pink flex-center text-white"
		  :class="{'bg-pink': sex == '2', 'bg-blue': sex == '1'}">
		<text class="fa"
			  :class="{'fa-mars': sex == '1', 'fa-venus': sex == '2'}"></text>
		<!-- <text>{{ age }}</text> -->
	</view>
</template>

<script>
	export default {
		name: "sexBox",
		props: {
			sex: {
				type: Number,
				default: 1,
			},
			age: {
				type: Number,
				default: 18
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.sex-box {
		width: 32upx;
		height: 32upx;
		border-radius: 6upx;
		
		text {
			&:first-of-type {
				font-size: 10px;
			}
			
			&:last-of-type {
				// margin-left: 6upx;
				font-size: 10px;
				font-weight: 600;
			}
		}
	}
</style>
