<template>
	<!-- 
		引入vuex npm i vuex
		vue2版本的引入 npm install vuex@3 --save
		卸载当前版本的vuex npm uninstall vuex
	 -->
	<div>
		<count></count>
	</div>
</template>

<script>
	import count from './components/count'

	export default {
		name: 'App',
		components: {
			count
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
