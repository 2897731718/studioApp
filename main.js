import Vue from 'vue'
import App from './App'
// 引入封装的请求库
import request from '@/utils/request.js'
// 引入封装的提示库
import toast from '@/utils/toast.js'
import loading from '@/utils/toast.js'
import store from './store'
// 注册全局组件
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import postDetail from './components/content/postDetail.vue'
Vue.component('post-detail', postDetail)

import BottomTabBar from './components/BottomTabBar.vue'
Vue.component('bottom-tab-bar',BottomTabBar)

import home from 'pages/home/home.vue'
Vue.component('home', home)

import community from 'pages/community/community.vue'
Vue.component('community', community)

import studio from 'pages/studio/studio.vue'
Vue.component('studio', studio)

import user from 'pages/user/user.vue'
Vue.component('user', user)

// import basics from './pages/home/home.vue'
// Vue.component('basics', basics)


// 使用
Vue.use(request)
Vue.use(toast)
Vue.use(loading);

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App,
	
})
app.$mount()
