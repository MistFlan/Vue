<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- <h1 class="come" v-show="isShow">欢迎登录，{{name}}</h1> -->
		<transition name="animate__animated animate__bounce" enter-active-class="animate__wobble"
			leave-active-class="animate__backOutUp" :appear="true">
			<h1 v-show="isShow">欢迎登录，{{name}}</h1>
		</transition>

		<transition-group name="animate__animated animate__bounce" enter-active-class="animate__wobble"
			leave-active-class="animate__backOutUp" :appear="true">
			<h1 v-show="isShow" key="1">欢迎登录，{{name}}</h1>
			<h1 v-show="!isShow" key="2">天气 {{weather}}</h1>
		</transition-group>
	</div>
</template>

<script>
	import 'animate.css'

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
</style>
