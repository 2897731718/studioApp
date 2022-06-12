<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-five text-white">
			<block slot="backText">返回</block>
			<block slot="content">考核详情</block>
		</cu-custom>
		<view class="you-page">
			<p class="studio_title">{{title}}</p>
			<!-- 简介 -->
			<view class="award_box">
				<view class="title"></view>
				<text>考核内容</text>
				<p>{{content}}</p>
			</view>
			<view class="bottom_box">
				<button @click="DownLoad">下载文档</button>
				<button @click="assClick">提交考核</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			console.log(options)
			this.title = options.title
			this.content = options.content
		},
		data() {
			return {
				title: "",
				content: ""
			}
		},
		methods: {
			assClick() {
				uni.navigateTo({
					url: "submit"
				})
			},
			DownLoad() {
				uni.downloadFile({
					url: 'http://192.168.0.200:8058/files/200200711.doc', //下载地址接口返回
					success: (data) => {
						if (data.statusCode === 200) {
							//文件保存到本地
							uni.saveFile({
								tempFilePath: data.tempFilePath, //临时路径
								success: function(res) {
									uni.showToast({
										icon: 'none',
										mask: true,
										title: '文件已保存：' + res.savedFilePath, //保存路径
										duration: 3000,
									});
									setTimeout(() => {
										//打开文档查看
										uni.openDocument({
											filePath: res.savedFilePath,
											success: function(res) {
												// console.log('打开文档成功');
											}
										});
									}, 3000)
								}
							});
						}
					},
					fail: (err) => {
						console.log(err);
						uni.showToast({
							icon: 'none',
							mask: true,
							title: '失败请重新下载',
						});
					},
				});
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

	.bottom_box {
		width: 100vw;
		height: 12vh;
		display: flex;
		justify-content: center;
		align-items: center;

		button {
			width: 45vw;
			height: 8vh;
			background-color: rgb(75, 187, 250);
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
