<!-- 
 @zsw
 
 -->
<template>
	<view class="box">
		<view class="fa fa-weibo btn"></view>
	</view>
</template>

<script>
	export default {
		name:"BtnRotate",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.box {
	font-size:20px;
	color:#70a1ff;
	width:40px;
	height:40px;
	// line-height:100px;
	// margin:0 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: .5s linear;
	// border: 2px solid #0FB9B1;
	position: relative;
}
.box::before {
	content:"";
	position: absolute;
	box-sizing: border-box;
	width:100%;
	height:100%;
	left:0;
	top:0;
	transition: .3s linear;
}

.box::after{
	content:"";
	position: absolute;
	box-sizing: border-box;
	width:100%;
	height:100%;
	left:0;
	top:0;
	transition: .3s linear;
}

.box:hover{
	// 改变大小 原始宽度的 0.8 倍
    transform: scale(.8);
}

.box:hover::before{
    border-left:2px solid;
    border-right:2px solid;
	// 延 x 轴倾斜给定角度
    transform: skewX(20deg);
}

.box:hover::after{
    border-top:2px solid;
    border-bottom:2px solid;
    transform: skewY(-20deg);
}

</style>
