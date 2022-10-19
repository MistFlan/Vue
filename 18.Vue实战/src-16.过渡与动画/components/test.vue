<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- <h1 class="come" v-show="isShow">欢迎登录，{{name}}</h1> -->
		<transition name="hello" :appear="true">
			<h1 v-show="isShow">欢迎登录，{{name}}</h1>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'test',
		data() {
			return {
				name: 'flan',
				isShow: true
			}
		}
	}
</script>

<style scoped>
	h1 {
		background-color: orange
	}

	.hello-enter-active {
		animation: flan 0.5s linear;
	}

	.hello-leave-active {
		animation: flan 0.5s linear reverse;
	}

	@keyframes flan {
		from {
			transform: translateX(-100%);
		}

		to {
			transform: translateX(0);
		}
	}
</style>
