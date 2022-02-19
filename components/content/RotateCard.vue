<!-- 
 @zsw
 2021-10-28 开始
 -->
<template>
	<view class="box">
		<view class="card bg-primary flex-column flex-center">
			<view class="text-roll">
				温馨提示
			</view>
			<view class="tips-content text-xs margin-top-sm text-break">
				{{ tipsContent }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"RotateCard",
		data() {
			return {
				
			};
		},
		props: {
			tipsContent: {
				type: String,
				default: `大学生创新创业中心成立于2017年
				，是软件学院三大组织之一，也是学院致力打造的一个突出专业学习、
				提供学习交流的平台。`
			},
			
		},
		
	}
</script>

<style lang="scss">
.box {
	position: relative;
	perspective: 90vw;
	transform-style: preserve-3d;
	// border: 2upx solid #333333;
	
	.card {
		height: 160px;
		width: 76vw;
		border-radius: 20upx;
		// rotateX 以x轴为中心轴 x轴下方面向自己为正旋转 
		transform: translateX(0px) rotateX(-2deg) rotateY(28deg);
		opacity: 0.9;
		
		.tips-content {
			// border: 2upx solid #333333;
			width: 80%;
			height: 74%;
			
		}
	}
}

.box::before {
	content: '';
	height: 160px;
	width: 76vw;
	border-radius: 20upx;
	position: absolute;
	margin-top: -2px;
	margin-left: -2px;
	border: 2px solid #000;
	transform: translateX(-30px) rotateY(-36deg) rotateX(15deg) scale(1.03);
}

.box:hover>view,
.box:hover::before{
	transform: none;
}

.box>view,
.box::before{
	transition: .3s;
}
</style>
