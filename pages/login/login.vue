<template>
<view >
	<view class="you-page flex-column flex-center">
		<image class="logo-img radius-cr" src="../../static/logo.jpg" mode=""></image>
		<text class="hello">登陆体验更多精彩</text>
		<text class="title text-bloder margin-tb-sm">大创-工作室小程序</text>
		<text class="school">Jiangxi Agricultural Software College</text>
		<!-- <button type="default">微信授权登录</button> -->
		<button class="cu-btn bg-gradual-green block margin-tb-sm lg" @click="login()">
			<text class="cuIcon-loading2 cuIconfont-spin" v-if="loadingShow"></text>
			<text class="fa fa-weixin margin-lr-xs"></text>
			微信授权登录</button>
		<!-- <view class="login-box flex-column flex-center" @tap="goLogin">
			<text class="fa fa-weixin margin-bottom-xs"></text>
			<text>一键登录</text>
		</view> -->
		<text class="studio-name text-sm">--- 由 π 工作室技术支持 ---</text>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				loadingShow: false,
				authPhone: false,
				session_id: '',
				WChatInfo: '',
				
			};
		},
		onLoad() {
			console.log('')
		},
		methods: {
			login:function() {
				this.loadingShow = !this.loadingShow
				// 获取微信信息
				uni.getUserProfile({
					desc: 'weixin',
					lang: 'zh_CN',
					success:(e) => {
						uni.login({
							provider: 'weixin',
							success: (loginRes) => {
								console.log(1)
								// console.log(loginRes.code)
								this.WChatInfo = e.userInfo;
								uni.setStorageSync('WChatInfo', e.userInfo);
								uni.request({
									url: 'https://test.kabubuda.xyz/user/login/authorize',
									method: 'POST',
									data: {
										code: loginRes.code
									},
									dataType: "json",
									header: {
										'content-type': 'application/json',
									},
									success: res => {
										console.log(res)

										console.log(res.header.token)

										uni.setStorageSync('token', res.header.token)
										uni.setStorageSync('openid', res.data.data.openid)
										uni.setStorageSync('sessionKey', res.data.data.session_key)
										
										this.$get('/user/login', {}) // 获取身份信息
										.then(res => {
											console.log(res, 1)
											uni.setStorageSync('identity', res.data.identity)
											// 刚开始身份为空 新用户 就要添加身份
											if (res.data.identity == -1) {
												this.$post('/user/info/add', {
													nickname: uni.getStorageSync('WChatInfo').nickName,
													avatarUrl: uni.getStorageSync('WChatInfo').avatarUrl,
													sex: uni.getStorageSync('WChatInfo').gender
												}).then(res => {
													console.log(res, 2)
													uni.setStorageSync('identity', res.data.identity)
													// 添加完
												})
											}
											// 获取到的身份发生改变 重新获取
											if (res.data.identity != uni.getStorageSync('identity')) {
												this.$get('/user/login', {})
												.then(res => {
													uni.setStorageSync('identity', res.data.identity)
												})
											}
											
											this.loadingShow = !this.loadingShow
											uni.redirectTo({
											    url: '/pages/index/index'
											});
										})
									}
								})
								
							}
						})
					}
				})
			},
			goLogin: function() {
				uni.redirectTo({
				    url: '/pages/index/index'
				});
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.you-page {
	position: relative;
	background-color: #FFFFFF;
	.logo-img {
		width: 140upx;
		height: 140upx;
	}
	
	.hello {
		margin: 50upx 0 20upx 0;
		font-size: 36upx;
	}
	
	.title {
		font-weight: 500;
		font-size: 54upx;
		letter-spacing: 6upx;
	}
	
	.cu-btn {
		margin-top: 100upx;
		width: 70vw;
	}
	
	.login-box {
		width: 300upx;
		height: 100upx;
		
		
		.fa-weixin {
			font-size: 44upx;
			color: #25DA6F;
		}
	}
	
	.studio-name {
		position: absolute;
		bottom: 80upx;
		font-weight: 200;
	}
}
</style>
