<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- <h1 class="come" v-show="isShow">欢迎登录，{{name}}</h1> -->
		<transition name="hello" :appear="true">
			<h1 v-show="isShow">欢迎登录，{{name}}</h1>
		</transition>

		<transition-group name="hello" :appear="true">
			<h1 v-show="isShow" key="1">欢迎登录，{{name}}</h1>
			<h1 v-show="!isShow" key="2">天气 {{weather}}</h1>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: 'test',
		data() {
			return {
				name: 'flan',
				weather: '晴',
				isShow: true
			}
		}
	}
</script>

<style scoped>
	h1 {
		background-color: orange;
	}

	.hello-enter-active,
	.hello-leave-active {
		transition: 0.5s linear;
	}

	/* 进入的起点, 离开的终点 */
	.hello-enter,
	.hello-leave-to {
		transform: translateX(-100%);
	}

	/* 进入的终点, 离开的起点 */
	.hello-enter-to,
	.hello-leave {
		transform: translateX(0);
	}
</style>
