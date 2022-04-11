<!-- 指导老师 -->
<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-five text-white">
			<block slot="backText">返回</block>
			<block slot="content">考核详情</block>
		</cu-custom>
		<view class="container you-page">
			<view class="flex justify-center align-center flex-wrap content">
				<!-- 照片 -->
				<img :src="picture" alt="">
				<!-- 姓名 -->
				<p style="font-size: 1.2rem;margin-bottom: 1vh;">{{teacherName}}</p>
				<!-- 职称 -->
				<p style="font-size: 1rem; color:rgb(185,185,185); font-weight: 600;">{{position}}</p>
				<!-- 介绍 -->
			</view>
			<p style="font-size: 0.9rem;padding: 4vw;"></p>
			<!-- 获奖信息 -->
			<view class="award_box">
				<view class="title"></view>
				<text>主要荣誉</text>
				<li v-for="(item,index) in awards" :key="index">{{item}}</li>
			</view>
		</view>
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				picture:"",
				teacherName:"",
				position:"",
				introduction:"主讲《物联网概论》、《单片机原理与应用》、《数字逻辑》等本科课程。自2009年入校创办软件学院大学生创新工作室——764工作室以来，他一直利用自己休息时间指导学生进行学习，在学校的支持下，十年间共获得了全国、全省奖项近100项，为学校争得了荣誉。",
				awards:[]
			}
		},
		mounted() {
			this.getTeacherInfor();
		},
		methods:{
			getTeacherInfor() {
				this.$get('/studio/info/teacher',{
					studioName:this.$store.state.studioName
				}).then(res => {
					console.log('请求成功')
					console.log(res)
					this.introduction = res.data.introduction;
					this.picture = res.data.picture,
					this.teacherName = res.data.name,
					this.position = res.data.title,
					this.awards = res.data.awards
				}).catch(err => {
					console.log("请求失败")
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: white;
		.content {
			img {
				display:block;
				width: 35vw;
				height: 20vh;
				margin-top: 2vh;
				margin-bottom: 2vh;
			}
			p {
				width: 90vw;
				text-align: center;
			}
		}
		.award_box {
			border-top: 2px solid rgb(233,233,233);
			display: flex;
			flex-wrap: wrap;
			.title {
				width: 1vw;
				height: 3vh;
				border-radius: 2px;
				background-color: skyblue;
				margin: 2vh 1vh;
				
			}
			text {
				font-size: 1rem;
				width: 90vw;
				// display: flex;
				// align-self: flex-end;
				margin-top: 2vh;
				// background-color: red;
			}
			li {
				font-size: 0.9rem;
				padding-left: 5vw;
				padding-right: 5vw;
			}
		}
		
		
	}
	
</style>
