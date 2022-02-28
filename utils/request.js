// 接口公共部分
// 本地接口
// const commonUrl = "http://localhost:8080/";
// 线上接口
const commonUrl = "https://test.kabubuda.xyz:8443/"

/**
 * @description POST请求封装
 * @param { String } url 请求的接口
 * @param { Object } data 请求的参数
 * @example 
 * this.$post(
 * 	'app/api', 
 * 	{name: 'yzp'}).then(res => {
 *     console.log('请求成功')}).catch(err => {console.log(err)})
 */
export function postRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		var that = this;
		var postData = data;
		this.$loading('加载中...', true);
		uni.request({
			url: commonUrl + url,
			data: postData,
			method: "POST",
			header: {
				"content-type": "application/json",
				token: uni.getStorageSync("token"),
				// Authorization: uni.getStorageSync("sessionId")
			},
			success: function(res) {
				console.log(res.header.token)
				uni.hideLoading();
				//返回什么就相应的做调整
				if (res.statusCode == 200) {
					resolve(res.data); // 直接将 后台传过来的data返回给调用的 .then() 中的res
				} else {
					resolve(res.errMsg);
				}
			},
			error: function(e) {
				uni.hideLoading(); // 隐藏提示框
				reject("网络出错");
			}
		});
	});
	return promise;
}

/**
 * @description GET请求封装
 * @param { String } url 请求的接口
 * @param { Object } data 请求的参数
 * @example 
 * this.$get(
 * 	'app/api', 
 * 	{name: 'yzp'}).then(res => {
 *     console.log('请求成功')}).catch(err => {console.log(err)})
 */
export function getRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		var that = this;
		var postData = data;
		// this.$loading('加载中...', true);
		uni.request({
			url: commonUrl + url,
			data: postData,
			method: "GET",
			dataType: "json",
			header: {
				"content-type": "application/json",
				token: uni.getStorageSync("token"),
				// Authorization: uni.getStorageSync("sessionId"),
				// 'Origin': 'http://47.119.155.5:8081'
			},
			success: function(res) {
				uni.hideLoading();
				if (res.statusCode == 200) {
					resolve(res.data);
				} else {
					// 请求服务器成功，但是由于服务器没有数据返回，此时无code。会导致这个空数据
					// 接口后面的then执行
					// 不下去，导致报错，所以还是要resolve下，这样起码有个返回值，
					// 不会被阻断在那里执行不下去！
					resolve(res.errMsg);
				}
			},
			error: function(e) {
				uni.hideLoading();
				reject("网络出错");
			}
		});
	});
	return promise;
}

function install(Vue) {
	Vue.prototype.$post = postRequest
	Vue.prototype.$get = getRequest
}

export default {
	install
}
