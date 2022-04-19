<!-- 
 @zsw
 -->
<template>
	<view class="cube">
		<img class="img1" src="https://s2.loli.net/2022/04/18/DMjlYqdctXL218m.jpg">
		<img class="img2" src="https://s2.loli.net/2022/04/18/DMjlYqdctXL218m.jpg">
		<img class="img3" src="https://s2.loli.net/2022/04/18/DMjlYqdctXL218m.jpg">
		<img class="img4" src="https://s2.loli.net/2022/04/18/DMjlYqdctXL218m.jpg">
		<img class="img5" src="https://s2.loli.net/2022/04/18/DMjlYqdctXL218m.jpg">
		<img class="img6" src="https://s2.loli.net/2022/04/18/DMjlYqdctXL218m.jpg">
	</view>
</template>

<script>
	export default {
		name:"CubicImg",
		data() {
			return {
				
			};
		},
		
	}
</script>

<style lang="scss">
.cube {
	width: 40px;
	height: 40px;
	transform-style: preserve-3d;
	// transform-origin: 125px 125px 0;
	animation: rotate-cube 10s ease-in-out infinite;
	
	img {
		width: 40px;
		height: 40px;
		border-radius: 20%;
		background-size: cover;
		background-position: center center;
		opacity: 0.9;
		position: absolute;
		box-shadow: inset 0 0 4px 2px rgba(106, 106, 106, 0.4);
	}
	// 前
	.img1 {
		transform: rotateY(0deg) translateZ(20px);
	}
	// 右
	.img2 {
		transform: rotateY(90deg) translateZ(20px);
	}
	// 左
	.img3 {
		transform: rotateY(-90deg) translateZ(20px);
	}
	// 下
	.img4 {
		transform: rotateX(90deg) translateZ(20px);
	}
	// 上
	.img5 {
		transform: rotateX(-90deg) translateZ(20px);
	}
	// 后
	.img6 {
		transform: rotateY(180deg) translateZ(0px);
	}
	@keyframes rotate-cube {
	  0% {
	    transform: rotateX(0deg) rotateY(0deg);
	  }
	  20% {
	    /* 右边图片 */
	    transform: rotateY(-90deg);
	  }
	  40% {
	    /* 上 */
	    transform: rotateX(-90deg);
	  }
	  60% {
	    /* 左 */
	    transform: rotateY(90deg);
	  }
	  80% {
	    /* 下 */
	    transform: rotateX(90deg);
	  }
	  100% {
	    transform: rotateX(0deg) rotateY(0deg);
	  }
	}
}
</style>
