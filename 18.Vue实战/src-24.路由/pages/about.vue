<template>
	<div>
		我是Adbout页面
	</div>
</template>

<script>
	export default {
		name: 'about',
		mounted() {
			console.log('about挂载完毕')
		},
		beforeDestroy() {
			console.log('about即将被销毁')
		}
	}
</script>

<style>
</style>