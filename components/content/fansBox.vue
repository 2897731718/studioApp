<template>
	<view class="box-main flex-row align-center bg-white" @click.stop="handleCardClick">
		<!-- 头像 -->
		<image class="avatar-sm margin-left-sm" :src="userAvatar"></image>
		<!-- 信息栏 -->
		<view class="content flex-column justify-center margin-left-sm">
			<view class="content-in flex-row align-center">
				<text class="web-name text-xl text-bold">{{ userName }}</text>
				<sex-box :sex="sex" class="margin-left-sm" :age="userAge"></sex-box>
			</view>
			<text class="last-online text-black-accent margin-top-xs">{{ time }}关注了{{ nick }}</text>
		</view>
		<!-- 按钮 -->
		<view class="btn-box flex-row flex-center">
			<!-- 关注页面的灰色按钮 -->
			<view class="btn flex-row flex-center bg-gray comment-btn" v-show="isFocus == '1'" @click="handleCancel">
				<text>已关注</text>
			</view>
			<view class="btn flex-row flex-center bg-second text-white common-btn" v-show="isFocus == '0'" @click="handleAttention">
				<text>关注</text>
			</view>
			<!-- 粉丝页面未关注的蓝色按钮 -->
		</view>
	</view>
</template>

<script>
	import sexBox from '@/components/content/sexBox.vue';

	export default {
		props: {
			userName: {
				type: String,
				default: ''
			},
			time: {
				type: String,
				default: ''
			},
			userAge: {
				type: Number,
				default: ''
			},
			sex: {
				type: Number,
				default: ''
			},
			userAvatar: {
				type: String,
				default: ''
			},
			nick: {
				type: String,
				default: ''
			},
			isFocus: {
				type: String,
				default: ''
			},
		},
		name: "fansBox",
		data() {
			return {

			};
		},
		components: {
			sexBox,

		},
		methods: {
			handleCardClick: function() {

			},
			handleCancel: function() {
				this.$emit('cancel');
			},
			handleAttention: function() {
				this.$emit('attention');
			},


		}
	}
</script>

<style lang="scss">
	.box-main {
		width: 100vw;
		height: 140upx;

		.content {
			width: calc(100% - 300upx);
			height: 100upx;

			.last-online {
				font-size: 12px;
				overflow: hidden;
				white-space: nowrap;
				/* 不换行 */
				text-overflow: ellipsis;
			}
		}

		.btn-box {
			height: 100upx;
			width: 160upx;

			.btn {
				width: 120upx;
				height: 50upx;
				border-radius: 10upx;
				font-size: 12px;
			}

		}
	}
</style>
