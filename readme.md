appsercert : 67c0bf3e9eadb2fcd6d78db562249db8

像这种url中带有特殊字符的情况下，就用encodeURIComponent() 函数，把要编码的字符串传进去，比如，刚开始的js代码中的url关于密码的那块，可以这样改：

url = url + '?user.userName=' + userName + '&user.password=' + encodeURIComponent(password);
这样就不会把传过去的特殊字符“+”变为空格了。
注：encodeURIComponent不编码字符有71个：!， '，(，)，*，-，.，_，~，0-9，a-z，A-Z

登陆时身份信息情况
第一种：第一次登陆 默认游客身份
第二种：


console.log(uni.getStorageSync("token"))
				uni.request({
					url: 'https://test.kabubuda.xyz/cosi/contest/pre',
					method: 'GET',
					data: {
						test: '1'
					},
					dataType: "json",
					header: {
						'content-type': 'application/json',
						'token': uni.getStorageSync("token"),
						'Origin': 'https://test.kabubuda.xyz',
						// Authorization: uni.getStorageSync("sessionId"),
					},
					success: res => {
						console.log(res)
					}
				})
问题：分享 点赞是否显示点赞数 这样就要做组件

scrollView 

this.$toast('开启成功', 1000, 'success', true)
setTimeout(() => {
	uni.navigateBack({
		delta: 1
	});
}, 1500)
identy
大创管理员 2
工作室管理员 3
总管理员 4

isShowCommunity == 1 显示模块