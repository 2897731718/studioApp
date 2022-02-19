<!-- 
 @zsw
 2022-2-12
 -->
<template>
<view>
	<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
		<block slot="backText">返回</block>
		<block slot="content">身份申请</block>
	</cu-custom>
	<view class="you-page flex-column">
		<!-- 
		 班级
		 姓名
		 担任职位
		 申请管理类型
		 上传学生证
		 备注信息
		 -->
		<view class="title">信息填报</view>
		<view class="box-in bg-white radius-xs flex-row align-center text-left">
			<text class="margin-left-sm text-bold text-sm">班级:</text>
			<input class="text-black-accent text-xxs" type="text" v-model="className" placeholder="软件1910" maxlength="15"/>
			<text class="fa fa-angle-right"></text>
		</view>
		<view class="box-in bg-white radius-xs flex-row align-center text-left">
			<text class="margin-left-sm text-bold text-sm">姓名:</text>
			<input class="text-black-accent text-xxs" type="text" v-model="realName" placeholder="张三" maxlength="15"/>
			<text class="fa fa-angle-right"></text>
		</view>
		<view class="box-in bg-white radius-xs flex-row align-center text-left">
			<text class="margin-left-sm text-bold text-sm">担任职位:</text>
			<input class="text-black-accent text-xxs" type="text" v-model="positionName" placeholder="大创副理事长" maxlength="15"/>
			<text class="fa fa-angle-right"></text>
		</view>
		<view class="box-in bg-white radius-xs flex-row align-center">
			<text class="margin-left-sm text-bold text-sm">管理员类型:</text>
			<picker class="text-black" :range="manageKindData" mode="selector" @change="choseKind">
				{{ manageKindData[kindIndex] }}
			</picker>
			<text class="fa fa-angle-right" aria-hidden="true"></text>
		</view>
		<text class="title">证件信息</text>
		<view class="identity-box bg-white flex-column align-center">
			<view class="add-btn radius-sm flex flex-center" @tap="addPicture">上传学生证正面</view>
			<!-- <view class="picture-box margin-top-sm">
				<image src="../../../static/background.jpeg" mode=""></image>
			</view> -->
		</view>
		<text class="title">备注信息</text>
		<view class="content-box bg-white">
			<input class=""
				   :adjust-position="false" placeholder="请输入备注信息~" maxlength="300" cursor-spacing="10"
				    v-model="content" selectable="true"></input>
		</view>
		<view class="btn-box margin-top-sm flex flex-center">
			<view class="you-btn bg-four text-white">
				<text class="fa fa-check margin-right-sm"></text>
				提交
			</view>
		</view>
	</view>	
</view>
</template>

<script>
	export default {
		data() {
			return {
				className: '',
				realName: '',
				positionName: '',
				manageKindData: ['大创管理员', '工作室管理员'],
				kindIndex: 0,
				content: '',
				
			};
		},
		methods: {
			choseKind(e) {
				this.kindIndex= e.detail.value
			},
			addPicture() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					// success: function(res) {
					// 	that.imageList.push (res.tempFilePaths); // push 是将新元素加到数组里
					// }
					success: (res => {
						// console.log(res.tempFiles);
						// this.imageList = res.tempFilePaths;
						// this.imageList.unshift(res.tempFilePaths); // 加到数组开头的 第一个
						// // let _imageList = this.imageList[0]
						// this.sendPicture(this.imageList[0])
						
						// this.newImageList = []
						
					})
				})
			},
			sendPicture() {
				uni.uploadFile({
					url: '', //仅为示例，非真实的接口地址
					filePath: path[0],
					name: 'file',
					formData: {
						orderId: this.orderId,
					},
					header: {
						'content-type': 'application/form-data',
						'token': uni.getStorageSync('token')
					},
					success: (res) => {
						console.log(res)
						
					}
				})
			},
			
		},
		
	}
</script>

<style lang="scss">
.you-page {
	
	.title {
		margin: 20upx;
		font-weight: 300;
		font-size: 12px;
	}
	.box-in {
		width: 100vw;
		height: 80upx;
		font-size: 12px;
		position: relative;
		
		picker,
		input {
			position: absolute;
			right: 40upx;
		}
		
		input {
			text-align: right; //控制 input 的显示方向
			width: 420upx;
			color: #606266;
		}
		
		.fa-angle-right {
			position: absolute;
			right: 20upx;
		}
	}
	
	.identity-box {
		width: 100vw;
		min-height: 100upx;
		padding: 20upx;
		
		.add-btn {
			width: 98%;
			height: 80upx;
			border: solid 2upx #333333;
		}
		
		.picture-box {
			width: 80%;
			height: 240upx;
			
			image {
				height: 100%;
				width: 100%;
			}
		}
	}
	
	.content-box {
		padding: 20upx;
		width: 100vw;
		height: 160upx;
		
		
	}
	
	.btn-box {
		width: 100vw;
		
		.you-btn {
			width: 90%;
			height: 80upx;
		}
	}
	
	
}
</style>
