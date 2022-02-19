<template>
	<view class="box flex-row justify-center">
		<view class="studio-brief-box margin-top-sm shadow-xs radius-sm flex-column">
			<view class="studio-name text-roll text-bold text-lg">
				{{ name }} 工作室
			</view>
			<view class="brief-box margin-top-lg text-sm">
				<view class="margin-top-xs">
					{{ indruction }}
				</view>
			</view>
			<view class="teacher-box">
				指导老师: {{ teacher }}老师
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'StudioCard',
		props: {
			name: {
				type: String,
				default: ''
			},
			indruction: {
				type: String,
				default: ''
			},
			teacher: {
				type: String,
				default: ''
			},
		}
	}
</script>

<style lang="scss">
.box {
	// width: 100vw;
	// height: 400upx;
	.studio-brief-box {
		width: 90vw;
		min-height: 300upx;
		border-radius: 10upx;
		padding: 26upx;
		position: relative;
		
		.studio-name {
			position: absolute;
			left: 26upx;
		}
		
		.teacher-box {
			position: absolute;
			bottom: 20upx;
			right: 20upx;
		}
	}
}
</style>
