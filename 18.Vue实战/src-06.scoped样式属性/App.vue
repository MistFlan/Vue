<template>
	<!-- 
		scoped样式属性
			使样式在局部生效 防止冲突
	 -->
	<div>
		<h1 class="size">欢迎登录</h1>
		<org></org>
		<hr />
		<user></user>
	</div>
</template>

<script>
	import org from './components/org.vue'
	import user from './components/user.vue'


	export default {
		name: 'App',
		components: {
			user,
			org
		}
	}
</script>

<style lang="less">
	.title {
		color: red;
		.size {
			font-size: 400px;
		}
	}
</style>
