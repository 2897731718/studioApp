<template>
	<view>
		<view class="content">
			<!-- 自定义标题部分 -->
			<!-- <view class="header ">
			<img src="https://cos.color-ui.com/gif/wave.gif" alt="" class="titlePart">
		</view> -->
			<!-- 工作室选择框 -->
			<view class="flex align-center justify-center flex-wrap">
				<scroll-view scroll-x="true" class="choose_box shadow margin-top-sm">
					<view class="studio_box" v-for="(item,index) in studioBox" @click="studioClick(item,index)">
						<img :src='item.picture' alt="" class="round_box"
							:class="index==studioIndex?'round_box twinkle':'round_box'" :key="item.name">
						<text class="studio_text">{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
			<!-- 一排闪字：向左滑动查看更多工作室 -->
			<!-- <view class="flex margin-top-sm justify-center">
			<view class="twkle_text">向左滑动查看更多工作室</view>
		</view> -->
			<!-- 工作室相关栏 -->
			<view class="flex align-center justify-center margin-top-lg related_box">
				<navigator url="/pages/studio/submit" class="submit_answer flex justify-center align-center">
					<!-- <text class="submit_name">764工作室</text> -->
					<img src="/static/yes.png" alt="" style="width: 100%; height:90%;margin-bottom:-3vh ;">
					<view class="submit_name">提交考核</view>
				</navigator>
				<view class="flex flex-wrap stu_infor">
					<navigator url="/pages/studio/introduction" class="stu_introduce  margin-bottom-sm margin-left-xl ">
						<view class="img_bac"
							style="background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);">
							<img src="/static/fire.png" alt="" class="intro_img">
						</view>
						<text class="intro_text" @click="introClick">工作室介绍</text>
					</navigator>
					<navigator url="/pages/studio/teacher" class="stu_introduce margin-left-xl">
						<view class="img_bac">
							<img src="/static/fire.png" alt="" class="intro_img">
						</view>
						<text class="intro_text" style="letter-spacing:5px" @click="teacherClick">指导老师</text>
					</navigator>
				</view>
			</view>
			<!-- 考核查看栏 -->
			<view class="check_box margin-top-lg flex align-center justify-center">
				<view class="choose_title">
					<view class="condition_title" :class="index==menuIndex?'choosed':''"
						v-for="(item,index) in chooseTitle" :key="index" @click="chooseChange(index)">
						{{item}}
					</view>
				</view>
			</view>
			<!-- 考核卡片 -->
			<view class="check_area" @click="cardClick" v-if="menuIndex==0">
				<navigator url="/pages/studio/asseDetail" class="check_card">
					<p class="check_title">764工作室大一第一次考核题</p>
					<p class="check_time" style="color: red;">
						<text class="fa fa-clock-o text-red margin-right-sm"></text>
						结束时间：2021.01.20 18:00
						<view class="check_state flex-row flex-center">进行中</view>
					</p>
					<p class="check_time">
						<text class="fa fa-clock-o margin-right-sm"></text>
						开始时间：2021.01.15 18:00
					</p>
				</navigator>
			</view>
			<!-- 已提交 -->
			<view class="check_area" @click="cardClick" v-if="menuIndex==1">
				<navigator url="/pages/studio/asseDetail" class="check_card">
					<p class="check_title">764工作室大一第一次考核题</p>
					<p class="check_time" style="color: red;">
						<text class="fa fa-clock-o text-red margin-right-sm"></text>
						结束时间：2021.01.20 18:00
						<view class="check_state flex-row flex-center">进行中</view>
					</p>
					<p class="check_time">
						<text class="fa fa-clock-o margin-right-sm"></text>
						开始时间：2021.01.15 18:00
					</p>
				</navigator>
			</view>
			<!-- 答案 -->
			<view class="check_area" @click="cardClick" v-if="menuIndex==2">
				<navigator url="/pages/studio/asseDetail" class="check_card">
					<p class="check_title">764工作室大一第一次考核题</p>
					<p class="check_time" style="color: red;">
						<text class="fa fa-clock-o text-red margin-right-sm"></text>
						结束时间：2021.01.20 18:00
						<view class="check_state flex-row flex-center">进行中</view>
					</p>
					<p class="check_time">
						<text class="fa fa-clock-o margin-right-sm"></text>
						开始时间：2021.01.15 18:00
					</p>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				chooseTitle: ['考核题', '已提交', '答案'],
				menuIndex: 0,
				studioBox: [
					// {
					// 	picture: '/static/logo.png',
					// 	name: 'π'
					// },
					// {
					// 	picture: '/static/logo.png',
					// 	name: '764'
					// },
					// {
					// 	picture: '/static/logo.png',
					// 	name: 'brunin home'
					// },
					// {
					// 	picture: '/static/logo.png',
					// 	name: 'kdd'
					// }
				],
				studioIndex: 0,
				currentStudio: '764',
				asseBox:[],
				compledBox:[],
				answerBox:[]
			}

		},
		mounted() {
			this.getStudioList()
		},
		watch: {
		    currentStudio: {
		        handler (newStudio, oldStudio) {
		            this.getAsseList()
					this.getCompledList()
		        },
		        immediate: true
		    }
		},
		methods: {
			chooseChange(index) {
				this.menuIndex = index
			},
			studioClick(item, index) {
				this.studioIndex = index
				this.currentStudio = item.name
				this.$store.commit('changeStudioName', item.name)
			},
			getStudioList() {
				this.$get('/studio/list').then(res => {
					this.studioBox = res.data
				}).catch(err => {
					console.log("请求失败")
					console.log(err)
				})
			},
			getAsseList() {
				this.$get('/studio/info/taskList/studio',{
					studio:this.$store.state.studioName
				}).then(res => {
					console.log('请求成功')
					console.log(res)
				}).catch(err => {
					console.log("请求失败")
					console.log(err)
				})
			},
			getCompledList() {
				this.$get('/studio/info/taskList/my').then(res => {
					console.log('请求成功')
					console.log(res)
				}).catch(err => {
					console.log("请求失败")
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.content {
		background-color: white;
		height: 100vh;

		.header {
			position: sticky;
			top: 0;
			height: 13vh;
			z-index: 999;
			background: linear-gradient(to bottom, #56ccf2, #2f80ed);

			.titlePart {
				position: absolute;
				left: 0;
				bottom: -2rpx;
				mix-blend-mode: screen; //混合两个图层
				width: 100vw;
				height: 13vh;
			}

		}

		.choose_box {
			width: 95vw;
			height: 15vh;
			border-radius: 10px;
			white-space: nowrap;
			box-shadow: 0px 2px 23px 0px #E4E4E4;

			.studio_box {
				width: 80px;
				height: 12vh;
				position: relative;
				top: 50%;
				/*偏移*/
				transform: translateY(-50%);
				//background-color: red;
				display: inline-block;
				margin: 0 auto;
				margin-left: 25rpx;

				.round_box {
					width: 10vh;
					height: 10vh;
					border-radius: 10vh;
					display: block;
					//background-color:rgb(75,187,250);
					margin: 0 auto;
					/*水平居中*/
				}

				.studio_text {
					display: block;
					margin: 0 auto;
					/*水平居中*/
					//background-color: blue;
					text-align: center
				}

				.twinkle {
					box-shadow: 0 0 4px 4px rgba(71, 167, 235, .86);
				}
			}
		}

		.twkle_text {
			width: 95vw;
			height: 2vh;
			padding-left: 10rpx;
		}

		.related_box {
			width: 100%;

			.submit_answer {
				width: 40vw;
				height: 20vh;
				background-color: white;
				// background-color: rgb(75,187,250);
				// background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
				//background: linear-gradient(to bottom, #56ccf2, #2f80ed);
				border-radius: 20px;
				text-align: center;
				flex-wrap: wrap;
				box-shadow: 0px 2px 23px 0px #E4E4E4;

				.submit_name {
					// color: white;
					height: 5vh;
					color: white;
					font-weight: bold;
					font-size: 1rem;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: auto;
					width: 100%;
					background-color: rgb(75, 187, 250);
					border-radius: 0 0 20px 20px;
				}

				button {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 26vw;
					height: 5vh;
					font-size: 1rem;
					font-weight: bolder;
					background-color: rgb(75, 187, 250);
					border-radius: 20px;
					color: white;
					// box-shadow: 0px 2px 5px 0px #E4E4E4;
				}
			}

			.stu_infor {
				width: 45vw;

				.stu_introduce {
					display: flex;
					width: 45vw;
					height: 9vh;
					box-shadow: 0px 2px 23px 0px #E4E4E4;
					background-color: white;
					// justify-content: center;
					align-items: center;
					// background-color: rgb(51,178,253);
					// background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
					border-radius: 8px;

					.img_bac {
						width: 8vw;
						height: 8vw;
						border-radius: 8vw;
						background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
						display: flex;
						justify-content: center;
						margin-left: 5vw;

						.intro_img {
							width: 6vw;
							height: 6vw;
							//background-color: red;
							margin: auto;
						}
					}

					.intro_text {
						font-size: 0.9rem;
						padding-left: 5vw;
						font-weight: bold;
						//color: white;
						// padding-right:30rpx;
					}
				}
			}
		}

		.check_box {
			.choose_title {
				width: 90vw;
				height: 6vh;
				//background-color: white;
				// background-color: white;
				border: none;
				border-bottom: 1px rgb(202, 204, 206) solid;
				display: flex;

				.condition_title {
					//background-color: white;
					height: 6vh;
					width: 30vw;
					line-height: 6vh;
					text-align: center;
				}

				.choosed {
					border-bottom: 2px solid rgb(75, 187, 250);
					color: rgb(75, 187, 250);

				}
			}
		}

		.check_area {
			// background-color: rgb(241,241,241);
			margin-top: 2vh;
			width: 100vw;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			// background-color: red;
			.check_card {
				width: 92vw;
				height: 15vh;
				background-color: white;
				border-radius: 10px;
				box-shadow: 0px 2px 23px 0px #E4E4E4;
				margin-bottom: 2vh;

				.check_title {
					font-size: 20px;
					padding: 1vh;
					font-weight: bold;
				}

				.check_time {
					font-size: 15px;
					padding-left: 1vh;
					padding-bottom: 1vh;
					color: rgb(138, 138, 138);
					display: flex;
					// justify-content: center;
					align-items: center;
					position: relative;

					text {}

					.check_state {
						position: absolute;
						width: 15vw;
						height: 3vh;
						background-color: rgba(75, 187, 250, .7);
						color: white;
						border-radius: 10px;
						text-align: center;
						right: 5vw;
						top: 2vh;
						font-weight: bold;
					}
				}


			}
		}
	}
</style>
