<!-- 
 @zsw
 在插件上修改
 -->
<template>
	<view class="wrap">
		<swiper class="swiper" 
		:style="{height: height + 'rpx'}" 
		:autoplay="autoplay" :interval="interval" 
		:duration="duration"
		:circular='loop' 
		:previous-margin='previousMargin + "rpx"' 
		:next-margin='nextMargin + "rpx"'
		:display-multiple-items='5'
		@change='change'>
			<swiper-item class="swiper-item" v-for="(item,index) in list" 
			:key='index' @click="$emit('clickItem',item)">
				<view v-if="list && list.length>0" class="item" 
					  :class="[!crown ? '' : current==index ? 'crown-active':'crown']"
					  
					  >
					<image v-if="!slots" class="item-img" 
						   :class="[imgShadow?'imgShadow':'']" 
						   :src="item[imgKey]" 
						   :style="{ borderRadius: imgRadius + 'px',width:imgWidth}"
						   mode=""></image>
					<slot v-else :data='item'></slot>
				</view>
				<view class="bg-green">
					fjskfeiio
				</view>
				<view class="bg-dark">
					ruewiuio
				</view>
			</swiper-item>
			
		</swiper>
		
		<view class="dots flex" :style="{bottom: bottom * 2 + 'rpx'}" v-if="dots">
			<view class="dot" :class="[current == i ? 'curr-dot' : '']" v-for="(d,i) in list" :key='i'>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			},
			// 轮播图片key
			imgKey: {
				type: String,
				required: true
			},
			// 高度
			height: {
				type: Number,
				default: 200
			},
			// 宽度
			itemWidth: {
				type: Number,
				default: 200
			},
			// 图片圆角
			imgRadius: {
				type: Number,
				default: 0
			},
			// 图片阴影
			imgShadow: {
				type: Boolean,
				default: false
			},
			// 前边距
			previousMargin: {
				type: Number,
				default: 0
			},
			// 后边距
			nextMargin: {
				type: Number,
				default: 0
			},
			// 图片宽度
			imgWidth: {
				type: String,
				default: '100%'
			},
			// 是否循环
			loop: {
				type: Boolean,
				default: false
			},
			// 自动播放
			autoplay: {
				type: Boolean,
				default: false
			},
			// 播放时间间隔
			interval: {
				type: Number,
				default: 2000
			},
			// 滑动速度
			duration: {
				type: Number,
				default: 1200
			},
			// 显示指示点
			dots: {
				type: Boolean,
				default: false
			},
			// 轮播点下边距
			bottom: {
				type: Number,
				default: 10
			},
			// 卡片特效
			crown: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				current: 0,
				slots: false
			};
		},
		watch: {
			// 判断异步数据源，是否使用插槽自定义样式
			list: {
				handler(val) {
					if (val.length > 0 && this.$slots.default) {
						this.slots = true
					}
				},
				immediate: true,
			}
		},
		methods: {
			change(event) {
				let current = event.detail.current
				this.current = current
				this.$emit('change', this.list[current])
				// console.log(this.current)
				// console.log(this.list[current])
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		position: relative;
		width: 96vw;
		.swiper {
			width: 100%;
			.swiper-item {
				.crown {
					transform: scale(0.85, 0.90);
				}
				
				.item {
					width: 100%;
					height: 100%;
					transition: 1.2s;
					// border: 2px solid #007AFF;
				}
				
				.item-img {
					width: 100%;
					height: 100%;
					// overflow: hidden;
				}
				
				.imgShadow {
					border: 2px solid #007AFF;
					// height: calc(100% - 10px);
					margin-bottom: 10px;
					box-shadow: 0 6px 6px rgba(0, 0, 0, .15);
				}
				
				.crown-active {
					transform: scale(1);
				}
				
			}
		}
		
		.dots {
			display: flex;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			.dot {
				width: 6rpx;
				height: 6rpx;
				border-radius: 50%;
				background-color: #D6D6D6;
				margin-right: 8rpx;
			}

			.curr-dot {
				height: 6rpx;
				width: 22rpx;
				border-radius: 6rpx;
				background-color: #fff;
			}
		}

	}
</style>
