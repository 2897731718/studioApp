<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content">提交考核</block>
	</cu-custom>
	<view class="container you-page">
		<view class="content">
			<view class="small_box" v-for="(item,index) in submitList">
				<p>
					<text class="" style="color: red;">*</text>
					{{item}}
				</p>
				<input type="text" class="input_box" placeholder="请输入内容">
			</view>
			<view class="small_box" v-for="(item,index) in subList">
				<p>
					<text class="" style="color: red;">*</text>
					{{item.title}}
				</p>
				<uni-data-picker :localdata="item.choice" popup-title="请选择" @change="onchange" @nodeclick="onnodeclick">
				</uni-data-picker>
			</view>
			<l-file ref="lFile" @up-success="onSuccess"></l-file>
			<view class="small_box">
				<p>
					<text class="" style="color: red;">*</text>
					上传文件
				</p>
				<img src="/static/upload.png" alt="" @tap="onUpload">
			</view>
		</view>
		<button type="default">提交</button>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				submitList: ['姓名', '班级'],
				subList: [{
					title: '考核',
					choice: [{
							text: "第一轮",
							value: "0210-001-1",
						},
						{
							text: "第二轮",
							value: "0210-001-2"
						},
						{
							text: "第三轮",
							value: "0210-001-3"
						}
					]
				}, {
					title: '考核所属工作室',
					choice: [{
							text: "Π工作室",
							value: "0210-001-1",
						},
						{
							text: "764工作室",
							value: "0210-001-2"
						},
						{
							text: "蓝点工作室",
							value: "0210-001-3"
						},
					]
				}, {
					title: '考核方向',
					choice: [{
							text: "前端",
							value: "0210-001-1",
						},
						{
							text: "后端",
							value: "0210-001-2"
						},
						{
							text: "算法",
							value: "0210-001-3"
						},
						{
							text: "大数据",
							value: "0210-001-4"
						}
					]
				}]
			}
		},
		methods: {
			onUpload() {
				/**
				 * currentWebview: 当前webview
				 * url：上传接口地址
				 * name：附件key,服务端根据key值获取文件流，默认file,上传文件的key
				 * header: 上传接口请求头
				 */
				console.log('--------------------');
				this.$refs.lFile.upload({
					// #ifdef APP-PLUS
					//（app端必传）nvue页面使用时请查阅nvue获取当前webview的api，当前示例为vue窗口
					currentWebview: this.$mp.page.$getAppWebview(),
					// #endif
					//替换为你的上传接口地址
					url: 'http://hlapi.jwell56.com/dropbox/document/upload',
					// 服务端接收附件的key
					name: 'file',
					//根据你接口需求自定义 (优先不传content-type,安卓端无法收到参数再传)
					header: {
						'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJ1c2VyTmFtZSI6',
						'uid': '27682',
						'client': 'app',
						'accountid': 'DPOA9487'
					}

					// 限制选择附件的大小上限，默认10M
					// maxSize: 20,

					// 若需要在body单独添加附件名或附件大小如下方式传入组件：
					// addName: '后端要的附件名称字段key,此处请勿写name的同值如(file)，会覆盖name',
					// addSize: '后端要的附件大小字段key'

					// body参数直接写key,value,如：
					// date: '2020-1-1',
					// key2: 'value2',
				})
			}
		},
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
