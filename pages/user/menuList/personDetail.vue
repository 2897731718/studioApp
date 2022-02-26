<template>
<view class="page">
	<cu-custom class="top-return" :isBack="true" :style="{opacity: opacityNum}" bgColor="bg-five text-white" v-show="topShow">
		<block slot="backText">返回</block>
		<block slot="content">个人详情</block>
	</cu-custom>
	<view class="head-tab-show bg-white flex-row justify-around" v-show="tabShow" :style="[{top:CustomBar + 'px'}]">
		<view class="tab-item flex-row flex-center" 
			  v-for="(tabItem, index) in tabList" :key="index"
			  :class="{'activeTab': currentIndex == index, '': currentIndex != index}"
			  @click="tabSelect(index)">
			<text>{{ tabItem }}</text>
		</view>
	</view>
	
	<scroll-view class="scoll-box" scroll-y="true" @scroll="scroll" show-scrollbar="false">
		<view class="page flex-column align-center">
			<view class="left-box radius-lg flex-row flex-center" @click="BackPage" v-show="!topShow" :style="[{top:StatusBar + 'px'}, {height:StatusBar + 'px'}]">
				<view class="fa fa-angle-left radius-cr text-center" ></view>
			</view>
			<view class="bg-box">
				<image src="../../../static/13.jpg" mode=""></image>
				
				<view class="detail-box flex-row align-center">
					<view class="hed-img avatar-lg radius-cr shadow-mi">
						<image class="avatar-lg radius-cr" src="../../../static/background.jpeg" mode=""></image>
					</view>
					<view class="content-box flex-column justify-center">
						<text class="nickname text-lg text-white text-bold margin-bottom-xl">opopop</text>
						<text>手机号: 暂未填写手机号</text>
					</view>
					<view class="btn-box flex-row flex-center">
						<!-- 关注页面的灰色按钮 -->
						<view class="btn flex-row flex-center bg-white shadow-xs comment-btn" v-show="isFocus == '1'" @click="handleCancel">
							<text>已关注</text>
						</view>
						<view class="btn flex-row flex-center text-second bg-white shadow-xs common-btn" v-show="isFocus == '0'" @click="handleAttention">
							<text>关注</text>
						</view>
						<!-- 粉丝页面未关注的蓝色按钮 -->
					</view>
				</view>
				
			</view>
			<view class="person-box">
				<view class="menu-box flex-row justify-around">
					<view class="item-box text-xs flex-column flex-center"
						  v-for="(item, index) in menuList" :key="index" @tap="toPage(index)">
						<text class="text-bloder">{{ item.count }}</text>
						<text>{{ item.name }}</text>
					</view>
				</view>
				<view class="box-in bg-white flex-row align-center">
					<text class="fa fa-user-circle margin-left-xl text-xl"></text>
					<text class="margin-left-xl">男</text>
					<text class="fa fa-angle-right" @click="toInformation" aria-hidden="true"></text>
				</view>
				<view class="box-in bg-white flex-row align-center">
					<text class="fa fa-pencil margin-left-xl text-xl"></text>
					<text class="margin-left-xl">按时吃饭 按时长肉</text>
					<text class="fa fa-angle-right" @click="toInformation" aria-hidden="true"></text>
				</view>
			</view>
			<view class="head-tab bg-white flex-row justify-around">
				<view class="tab-item flex-row flex-center" 
					  v-for="(tabItem, index) in tabList" :key="index"
					  :class="{'activeTab': currentIndex == index, '': currentIndex != index}"
					  @click="tabSelect(index)">
					<text>{{ tabItem }}</text>
				</view>
			</view>
			<view class="posts-list bg-gray flex-column align-center" >
				<post-detail v-for="item in postList" :key="item.postId"
							 :postId='item.postId'
							 :img='item.headImg'
							 :nickname='item.nickname'
							 :autograph='item.autograph'
							 :time="item.time"
							 :postContent='item.postContent'
							 :link='item.link'
							 :contentImg='item.contentImg'
							 :encourageState='item.encourageState'
							 @share='handleShare'
							 @encourage='handleEncourage'></post-detail>
			</view>
			
		</view>
		
	</scroll-view>
</view>
</template>

<script>
	import postDetail from '../../../components/content/postDetail.vue'
	export default {
		data() {
			return {
				opacityNum: '',
				styleOpacity: {opacity: 1},
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				topShow: false,
				tabShow: false,
				isFocus: '1',
				menuList: [
					{
						path: 'collection',
						count: 9999,
						name: '收藏'
					},
					{
						path: 'follow',
						count: 9999,
						name: '关注'
					},
				],
				tabList: ['技术墙', '表白墙'],
				currentIndex: 0,
				postList:[
					{
						postId: 1,
						headImg: '../../static/logo.jpg',
						nickname: 'popopo',
						autograph: 'uiqureiwtuqietuioq',
						time: '2021-1-7',
						postContent: `hfjdshfjsjkdasjjjjjjjjjsaaaaaaaaaaa
				
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa无😊😊`,
						link: 'https://uniapp.dcloud.io/api/system/clipboard',
						contentImg: '',
						encourageState: 0,
						
					},
					{
						postId: 1,
						headImg: '../../static/logo.jpg',
						nickname: 'popopo',
						autograph: 'uiqureiwtuqietuioq',
						time: '2021-1-7',
						postContent: `hfjdshfjsjkdasjjjjjjjjjsaaaaaaaaaaa
				
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa无😊😊`,
						link: 'https://uniapp.dcloud.io/api/system/clipboardsfddfsdf',
						contentImg: '../../static/background.jpeg',
						encourageState: 1,
					},
					{
						postId: 1,
						headImg: '../../static/logo.jpg',
						nickname: 'popopo',
						autograph: 'uiqureiwtuqietuioq',
						time: '2021-1-7',
						postContent: `hfjdshfjsjkdasjjjjjjjjjsaaaaaaaaaaa
				
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa无😊😊`,
						link: 'https://uniapp.dcloud.io/api/system/clipboardsafdsfsdfsadfdfdsf',
						contentImg: '../../static/background.jpeg',
						encourageState: 1,
					},
				],
				
			};
		},
		components: {
			postDetail,
		},
		mounted() {
			
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			},
			scroll(e) { // 监听滚动
				let opacity = e.detail.scrollTop / 10
				this.opacityNum = opacity > 1 ? 1 : opacity
				if (e.detail.scrollTop < 100) {
					this.topShow = false
					this.tabShow = false
				}else if (e.detail.scrollTop >= 100 && e.detail.scrollTop < 244) {
					this.topShow = true
					this.tabShow = false
				}else if (e.detail.scrollTop >= 244) {
					this.topShow = true
					this.tabShow = true
				}
			},
			handleCancel() {
				this.isFocus = '0'
			},
			handleAttention() {
				this.isFocus = '1'
			},
			toPage(index) {
				if (index == 0) {
					uni.navigateTo({
					    url: './collection'
					});
				} else {
					uni.navigateTo({
					    url: './follow'
					});
				}
			},
			toInformation() {
				uni.navigateTo({
				    url: '../modifyInformation/modifyInformation'
				});
			},
			tabSelect(index) {
				console.log(index)
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss">
.top-return {
	position: fixed;
	top: 0;
	z-index: 999;
}	

.head-tab-show {
		width: 100vw;
		height: 100upx;
		z-index: 999;
		position: absolute;
		// top: 0;
		// border-top: 20upx solid #f1f2f6;
		// border-bottom: 2upx solid rgba(0, 0, 0, .3);
		
		.tab-item {
			height: 100upx;
			position: relative;
			
			
		}
		
		.activeTab {
			color: #4BBBFA;
			animation: click 1.3s;
			// transition: .5s;
			
			&::after {
				content: '';
				width: 80upx;
				height: 10upx;
				border-radius: 10upx;
				background-color: #4BBBFA;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				top: 90upx;
			}
			
			@keyframes click{
				from{
					opacity: 0;
				}
				to{
					opacity: 1;
				}
			}
		}
	}


.scoll-box {
	// background-color: #25CCF7;
	width: 100vw;
	height: 100vh;
	
	.page {
		background-color: #ffffff;
		// overflow: hidden;
		position: relative;
		
		.left-box {
			width: 80upx;
			// height: 60upx;
			position: fixed;
			// top: 90upx;
			left: 0upx;
			z-index: 999;
			// background-color: rgba(0, 0, 0, 0.3);
			font-size: 34px;
			color: #ffffff;
		}
		
		.bg-box {
			width: 100vw;
			min-height: 100upx;
			position: relative;
			
			image {
				width: 100vw;
				height: 340upx;
			}
			
			.detail-box {
				width: 100vw;
				height: 150upx;
				position: absolute;
				bottom: -62upx;
				
				.hed-img {
					margin: 0 20upx 0 30upx;
					image {
						border: solid 4upx #ffffff;
						height: inherit;
						width: inherit;
					}
				}
				
				.content-box {
					
					.nickname {
						font-size: 26px;
					}
				}
				
				.btn-box {
					height: 100upx;
					width: 160upx;
					position: absolute;
					right: 10upx;
				
					.btn {
						width: 140upx;
						height: 60upx;
						border-radius: 10upx;
						font-size: 13px;
						// border: 4upx solid #78BB7B;
					}
				
				}
			}
			
			
		}
		
		.menu-box {
			width: 34vw;
			height: 80upx;
			.item-box {
				// border: 2upx solid #0FB9B1;
				height: inherit;
				
			}
		}
		
		.person-box {
			margin-top: 80upx;
			min-height: 0;
			padding-bottom: 20upx;
			.box-in {
				// border: 2upx solid #007AFF;
				width: 100vw;
				height: 40upx;
				position: relative;
				font-weight: 600;
				padding: 34upx 0;
				
				.fa-angle-right {
					position: absolute;
					width: 50upx;
					right: 0;
					font-size: 24px;
					font-weight: 200;
				}
				
			}
		}
		
		.head-tab {
			width: 100vw;
			height: 100upx;
			// border-top: 20upx solid #f1f2f6;
			// border-bottom: 2upx solid rgba(0, 0, 0, .3);
			
			.tab-item {
				height: 100upx;
				position: relative;
				
				
			}
			
			.activeTab {
				color: #78BB7B;
				animation: click 1.3s;
				// transition: .5s;
				
				&::after {
					content: '';
					width: 80upx;
					height: 10upx;
					border-radius: 10upx;
					background-color: #78BB7B;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					top: 90upx;
				}
				
				@keyframes click{
					from{
						opacity: 0;
					}
					to{
						opacity: 1;
					}
				}
			}
		}
		
		.posts-list {
			width: 100vw;
		}
		
		
	}
}
</style>
