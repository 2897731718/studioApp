<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-five text-white">
			<block slot="backText">返回</block>
			<block slot="content">提交考核</block>
		</cu-custom>
		<view class="container you-page">
			<view class="content">
				<!-- 姓名 -->
				<view class="small_box">
					<p>
						<text class="" style="color: red;">*</text>
						姓名
					</p>
					<input type="text" class="input_box" placeholder="请输入内容" v-model="name">
				</view>
				<!-- 班级 -->
				<view class="small_box">
					<p>
						<text class="" style="color: red;">*</text>
						班级
					</p>
					<input type="text" class="input_box" placeholder="请输入内容" v-model="classes">
				</view>
				<!-- 所属工作室 -->
				<view class="small_box">
					<p>
						<text class="" style="color: red;">*</text>
						{{asseStudio.title}}
					</p>
					<uni-data-picker :localdata="asseStudio.choice" popup-title="请选择" @change="onchange"
						@nodeclick="onnodeclickStudio">
					</uni-data-picker>
				</view>
				<!-- 考核轮次 -->
				<view class="small_box">
					<p>
						<text class="" style="color: red;">*</text>
						考核轮次
					</p>
					<uni-data-picker :localdata="asseRound.choice" popup-title="请选择" @change="onchange"
						@nodeclick="onnodeclickRound">
					</uni-data-picker>
				</view>
				<!-- 考核方向 -->
				<view class="small_box">
					<p>
						<text class="" style="color: red;">*</text>
						考核方向
					</p>
					<uni-data-picker :localdata="direction" popup-title="请选择" @change="onchange"
						@nodeclick="onnodeclickDirection">
					</uni-data-picker>
				</view>
				<!-- 上传 -->
				<!-- <view class="small_box">
					<p>
						<text class="" style="color: red;">*</text>
						上传文件
					</p>
					<l-file ref="lFile" @up-success="onSuccess"></l-file>
					<img src="/static/upload.png" alt="" @tap="onUpload">
				</view> -->
				<view class="small_box">
					<p>
						<text class="" style="color: red;">*</text>
						网盘链接
					</p>
					<input type="text" class="input_box" placeholder="请输入内容" v-model="link">
				</view>
			</view>
			<button type="default" @click="submit()">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		created() {
			this.getStudioLists()
		},
		data() {
			return {
				name: "",
				classes: "",
				round: "",
				directions: "",
				studio: "",
				taskId: "",
				filePath: "",
				link: "",
				asseRound: {
					// title: '考核轮次',
					// choice: [{
					// 		text: "第一轮",
					// 		value: "0210-001-1",
					// 	},
					// 	{
					// 		text: "第二轮",
					// 		value: "0210-001-2"
					// 	},
					// 	{
					// 		text: "第三轮",
					// 		value: "0210-001-3"
					// 	}
					// ]
				},
				asseStudio: {
					// title: '考核所属工作室',
					// choice: [{
					// 		text: "Π工作室",
					// 		value: "0210-001-4",
					// 	},
					// 	{
					// 		text: "764工作室",
					// 		value: "0210-001-5"
					// 	},
					// 	{
					// 		text: "蓝点工作室",
					// 		value: "0210-001-6"
					// 	}
					// ]
				},
				direction: {
					// title: '考核方向',
					// choice: [{
					// 		text: "前端",
					// 		value: "0210-001-7",
					// 	},
					// 	{
					// 		text: "后端",
					// 		value: "0210-001-8"
					// 	},
					// 	{
					// 		text: "算法",
					// 		value: "0210-001-9"
					// 	},
					// 	{
					// 		text: "大数据",
					// 		value: "0210-001-10"
					// 	}
					// ]
				}
			}
		},
		methods: {
			getStudioLists() {
				this.$get(
					'/studio/task/allstudio').then(res => {
					//console.log(res)
					console.log('请求成功')
					this.asseStudio = res.data
				}).catch(err => {
					console.log(err)
				})
			},
			submit() {
				if (this.name == "") {
					uni.showToast({
						title: '姓名不为空',
						icon: 'none',
						duration: 1000,
						mask: true
					})
				} else if (this.classes == "") {
					uni.showToast({
						title: '班级不为空',
						icon: 'none',
						duration: 1000,
						mask: true
					})
				} else if (this.studio == "") {
					uni.showToast({
						title: '考核所属工作室不为空',
						icon: 'none',
						duration: 1000,
						mask: true
					})
				} else if (this.round == "") {
					uni.showToast({
						title: '考核轮次不为空',
						icon: 'none',
						duration: 1000,
						mask: true
					})
				} else if (this.direction == "") {
					uni.showToast({
						title: '考核方向不为空',
						icon: 'none',
						duration: 1000,
						mask: true
					})
				} else if(this.link == "") {
					uni.showToast({
						title: '网盘链接不为空',
						icon: 'none',
						duration: 1000,
						mask: true
					})
				}else {
					this.$post(
						'studio/task/submit', {
							name: this.name,
							className: this.classes,
							assessRound: this.round,
							studio: this.studio,
							direction: this.directions,
							taskId: this.taskId,
							link: this.link
						}).then(res => {
						console.log('请求成功')
						uni.showToast({
							title: '提交成功',
							icon: 'none',
							duration: 1000,
							mask: true
						})
						this.name = "";
						this.classes = "";
						this.studio = "";
						this.round = "";
						this.directions = "";
						this.taskId = "";
						this.link = "";
					}).catch(err => {
						console.log(err)
					})
				}
			},
			onchange(e) {
				const value = e.detail.value
			},
			onnodeclickStudio(node) {
				this.studio = node.text;
				this.$get('/studio/task/round',{studioName:this.studio}).then(res => {
					//console.log(res)
					this.asseRound = res.data
				}).catch(err => {
					console.log(err)
				})
				this.$get('/studio/task/direction',{studioName:this.studio}).then(res => {
					//console.log(res)
					this.direction = res.data
				}).catch(err => {
					console.log(err)
				})
			},
			onnodeclickRound(node) {
				this.round = node.text;
				this.taskId = node.value
				console.log(this.taskId)
			},
			onnodeclickDirection(node) {
				this.directions = node.text
				//console.log(this.directions)
			},
			onUpload() {

				/**
				 * currentWebview: 当前webview
				 * url：上传接口地址
				 * name：附件key,服务端根据key值获取文件流，默认file,上传文件的key
				 * header: 上传接口请求头
				 */
				console.log('--------------------');
				this.$refs.lFile.upload({
//					 #ifdef APP-PLUS
					//（app端必传）nvue页面使用时请查阅nvue获取当前webview的api，当前示例为vue窗口
					currentWebview: this.$mp.page.$getAppWebview(),
					// #endif
					//替换为你的上传接口地址
					url: 'https://test.kabubuda.xyz/studio/task/upload',
					// 服务端接收附件的key
					name: 'file',
					//根据你接口需求自定义 (优先不传content-type,安卓端无法收到参数再传)
					header: {
						'token': uni.getStorageSync("token"),
					},
					tid:this.taskId,
					type:"taskEnroll"

				// 	// 限制选择附件的大小上限，默认10M
				// 	// maxSize: 20,

				// 	// 若需要在body单独添加附件名或附件大小如下方式传入组件：
				// 	// addName: '后端要的附件名称字段key,此处请勿写name的同值如(file)，会覆盖name',
				// 	// addSize: '后端要的附件大小字段key'

				// 	// body参数直接写key,value,如：
				// 	// date: '2020-1-1',
				// 	// key2: 'value2',
				})
				// wx.chooseMessageFile({
				// 	count: 1,
				// 	type: 'file',
				// 	success(res) {
				// 		console.log("1111"+res)
				// 		this.filePath = res.tempFiles[0].path
				// 		console.log(this.filePath)
				// 		// tempFilePath可以作为img标签的src属性显示图片
				// 	},
				// 	fail(err) {
				// 		console.log("选择失败")
				// 	}
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: rgb(255, 255, 255);

		// display: flex;
		// justify-content: center;
		// flex-wrap: wrap;
		.content {
			padding: 3vw;

			.small_box {
				margin-bottom: 1vh;

				p {
					padding-bottom: 1vh;
				}

				input {
					height: 6vh;
					border-radius: 5px;
					padding-left: 1vw;
					border: 2px solid rgb(242, 242, 242);
				}

				img {
					width: 40vw;
					height: 20vh;
				}

			}

		}

		button {
			width: 80vw;
			height: 5vh;
			color: white;
			background-color: rgb(75, 187, 250);
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
