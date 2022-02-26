<!-- 
 @zsw
 如果是移动端 tabar 栏
 1.使用 vuex 状态管理跳转页面
 2.建立一个 main-index 切换 各个 page 的主页面
 3.配置默认的 tabbar 然后隐藏掉 使用 uni.switchTab
 -->
<template name='bottom-tab-bar'>
	<view class="tab-box">
		<!-- 这里不能带 () @click="NavChange() 获取不到 data 数据-->
		<view class="tab" @tap="NavChange" data-cur="home">
			<view class="iconfont" :class="[pageName == 'home'? isSelected: '']">&#xe822;</view>
		</view>
		<view class="tab" @tap="NavChange" data-cur="studio">
			<view class="iconfont" :class="[pageName == 'studio'? isSelected: '']">&#xe605;</view>
		</view>
		<view class="tab" @click.self="selectTab" :class="[isShow ? activeClass: '', 'middle']">
			<view class="add" style="--angle:-45deg">
				<view class="iconfont" @click="toNoPage">&#xe606;</view>
			</view>
			<view class="add" style="--angle:0deg">
				<view class="iconfont" @click="toNoPage">&#xe679;</view>
			</view>
			<view class="add" style="--angle:45deg">
				<view class="iconfont" @click="toNoPage">&#xe606;</view>
			</view>
		</view>
		<view class="tab" @tap="NavChange" data-cur="community">
			<view class="iconfont" :class="[pageName == 'community'? isSelected: '']">&#xe696;</view>
		</view>
		<view class="tab" @tap="NavChange" data-cur="user">
			<view class="iconfont" :class="[pageName == 'user'? isSelected: '']">&#xe66c;</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		name:"BottomTabBar",
		data() {
			return {
				isShow: false,
				activeClass: 'open',
				isSelected: 'isSelected'
				
			}
		},
		computed: {
			...mapState(['pageName']),
			
		},
		methods: {
			...mapMutations(['changePageindex']),
			selectTab() {
				this.isShow = !this.isShow
				console.log(this.isShow)
			},
			// 精简版
			NavChange: function(e) {
				this.$store.commit('changePageindex', e.currentTarget.dataset.cur)
			},
			toNoPage() {
				this.$toast('功能暂未开发', 1000, 'none', true)
				console.log(12)
			}
		}
	}
</script>

<style lang="scss">


.tab-box {
	width: 96vw;
	height: 60px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	// justify-content: space-between;
	// align-items: center;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(114, 114, 114, 0.5);
	
	.tab {
		width: 60px;
		height: 60px;
		display:  flex;
		justify-content: center;
		align-items: center;
		// border: 1px solid #2C405A;
		
		.isSelected {
			color: #4BBBFA;
		}
	}
	
	.tab>view {
		font-size: 30px;
		color: #c8d6e5;
	}
	
	
	// .tab:hover>view {
	//     color: #78BB7B;
	// }
	
	.middle {
		position: relative;
		background-color: #c8d6e5;
		border-radius: 50%;
		border: 10px solid #e5e5e5;
		transform: translateY(-50%);
		transition: 0.3s;
		
		.add {
			position: absolute;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.3s;
			opacity: 0;
			box-shadow: 0 0 20px rgba(114, 114, 114, 0.5);
		}
		
		.add>view {
			font-size: 14px;
			color: #686868;
			transition: 0.3s;
		}
		
		.add:hover {
			background-color: #4BBBFA;
		}
		
		.add:hover>view {
			color: #fff;
		}
	}
	
	.middle::after {
	    position: absolute;
	    content: '';
	    width: 50%;
	    height: 3px;
	    border-radius: 3px;
	    background-color: #fff;
	    transition: 0.3s;
	}
	.middle::before {
		position: absolute;
		content: '';
		width: 50%;
		height: 3px;
		border-radius: 3px;
		background-color: #fff;
		transition: 0.3s;
	    transform: rotate(90deg);
	}
	
	.open {
		background-color: #4BBBFA;
	}
	
	.open::after {
	    transform: rotate(135deg);
	}
	
	.open::before {
	    transform: rotate(225deg);
	}
	
	.open .add {
	    opacity: 1;
	    transform: rotate(var(--angle)) translateY(-60px);
	}
	
	.open .add>view {
	    transform: rotate(calc(0deg - var(--angle)));
	}
}







@font-face {
  font-family: 'iconfont';  /* Project id 2887653 */
  src: url('//at.alicdn.com/t/font_2887653_haow8eyj8bn.woff2?t=1634976491543') format('woff2'),
       url('//at.alicdn.com/t/font_2887653_haow8eyj8bn.woff?t=1634976491543') format('woff'),
       url('//at.alicdn.com/t/font_2887653_haow8eyj8bn.ttf?t=1634976491543') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>
