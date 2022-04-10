<template name="studio">
<view>
	<cu-custom class="top-return" :isBack="true" bgColor="bg-five text-white">
		<block slot="backText">返回</block>
		<block slot="content">修改信息</block>
	</cu-custom>
	<view class="you-page flex-column align-center">
		<view class="box-in shadow-xs margin-top-sm radius-xs flex-row align-center text-left">
			<text class="margin-left-sm text-sm">昵称</text>
			<input class="text-black-accent text-xxs" type="text" v-model="nickName" placeholder="" maxlength="15"/>
			<text class="fa fa-angle-right"></text>
		</view>
		<view class="box-in shadow-xs margin-top-sm radius-xs flex-row align-center text-left">
			<text class="margin-left-sm text-sm">签名</text>
			<input class="text-black-accent text-xxs" type="text" v-model="signature" placeholder="" maxlength="15"/>
			<text class="fa fa-angle-right"></text>
		</view>
		<view class="box-in shadow-xs margin-top-sm radius-xs flex-row align-center text-left">
			<text class="margin-left-sm text-sm">QQ</text>
			<input class="text-black-accent text-xxs" type="text" v-model="contactNumber" placeholder="" maxlength="15"/>
			<text class="fa fa-angle-right"></text>
		</view>
		<view class="box-in shadow-xs margin-top-sm radius-xs flex-row align-center text-left">
			<text class="margin-left-sm text-sm">学号</text>
			<input class="text-black-accent text-xxs" type="text" v-model="sno" placeholder="" maxlength="15"/>
			<text class="fa fa-angle-right"></text>
		</view>
		<view class="btn-box margin-top-sm flex flex-center">
			<view class="you-btn bg-four text-white" @tap="sendChange">
				<text class="fa fa-check margin-right-sm"></text>
				修改个人信息
			</view>
		</view>
	</view>
</view>
</template>

<script>
	// import BottomTabBar from '../../components/BottomTabBar.vue'
	
	export default {
		data() {
			return {
				nickName: '',
				// userName: '',
				signature: '',
				contactNumber: '',
				sno: ''
			};
		},
		components: {
			
		},
		methods: {
			sendChange() {
				this.$post('/user/info/update', {
					nickName: this.nickName,
					// userName: this.userName,
					signature: this.signature,
					contactNumber: this.contactNumber,
					sno: this.sno
				}).then(res => {
					console.log(res)
					this.$toast('修改信息成功', 1000, 'success', true)
					uni.navigateBack({
						delta: 1
					});
				})
			}
		}
	}
</script>

<style lang="scss">
.you-page {
	
	
	.box-in {
		width: 100vw;
		height: 80upx;
		font-size: 14px;
		position: relative;
		background-color: #ffffff;
		
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
	
	.btn-box {
		width: 100vw;
		
		.you-btn {
			width: 90%;
			height: 80upx;
		}
	}
}
</style>
