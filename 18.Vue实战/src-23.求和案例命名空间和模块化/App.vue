<template>
	<!-- 
		引入vuex npm i vuex
		vue2版本的引入 npm install vuex@3 --save
		卸载当前版本的vuex npm uninstall vuex
	 -->
	<div>
		<count></count>
		<hr />
		<user></user>
	</div>
</template>

<script>
	import count from './components/count'
	import user from './components/user'

	export default {
		name: 'App',
		components: {
			count,
			user
		},
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {
			console.log('App', this)
		}
	}
</script>

<style>
</style>
