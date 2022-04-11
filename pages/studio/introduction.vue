<!-- 工作室介绍 -->
<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-five text-white">
			<block slot="backText">返回</block>
			<block slot="content">考核详情</block>
		</cu-custom>
		<view class="you-page">
			<!-- 照片轮播图 -->
			<view class="swiper_box">
				<swiper class="swiper" :indicator-dots="true" indicator-color="rgb(51,136,255)">
					<swiper-item v-for="(item,index) in pictures" :key="index">
						<view>
							<img :src="item" alt="" class="">
						</view>
					</swiper-item>
				</swiper>
			</view>
			<p class="studio_title">{{studioName}}工作室</p>
			<!-- 简介 -->
			<view class="award_box">
				<view class="title"></view>
				<text>简介</text>
				<!-- π工作室主要立足于前端、后台技术，是一个专注于web开发的校园IT技术团体，团队成员由数名大三、大二的优秀学子组成，努力为学校的信息化、多元化做出自己的贡献。工作室成员之间团结互助、共同开发项目，在实践中不断深化理解所学知识。同时也坚持安排成员为新生答疑解惑，并定期组织开展专业学习方面的考核，营造浓厚的学习氛围。 -->
				<p>
					{{introduction}}
				</p>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				studioName: 'pai',
				introduction: 'π工作室主要立足于前端、后台技术，是一个专注于web开发的校园IT技术团体，团队成员由数名大三、大二的优秀学子组成，努力为学校的信息化、多元化做出自己的贡献。工作室成员之间团结互助、共同开发项目，在实践中不断深化理解所学知识。同时也坚持安排成员为新生答疑解惑，并定期组织开展专业学习方面的考核，营造浓厚的学习氛围。',
				pictures: []
			}
		},
		mounted() {
			this.getStudioInfor()
		},
		methods: {
			getStudioInfor() {
				this.$get('/studio/info',{
					studioName:this.$store.state.studioName
				}).then(res => {
					console.log('请求成功')
					console.log(res)
					this.introduction = res.data.introduction;
					this.pictures = res.data.picture,
					this.studioName = res.data.name
				}).catch(err => {
					console.log("请求失败")
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.studio_title {
		margin: 2vh 4vw;
		font-weight: bolder;
		font-size: 1.2rem;

	}

	.award_box {
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
			font-weight: bold;
			// background-color: red;
		}

		p {
			font-size: 0.9rem;
			padding-left: 5vw;
			padding-right: 5vw;
			font-weight: bold;
		}
	}
</style>
