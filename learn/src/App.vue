<template>
	<div>
		<img src="./assets/logo.png" alt="logo"/>
		<org></org>
		<user />
	</div>
</template>

<script>
	// 引入组件
	import org from './components/org'
	import user from './components/user'

	export default {
		name: 'App',
		components: {
			org,
			user
		}
	}
</script>

<style>
</style>
