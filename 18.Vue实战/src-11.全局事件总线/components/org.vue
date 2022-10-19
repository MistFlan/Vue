<template>
	<div class="org">
		<h2 class="title">组织名称：{{name}}</h2>
		<h2 class="size">组织地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'org',
		data() {
			return {
				name: 'QQ群',
				address: '亚洲'
			}
		},
		mounted() {
			this.$bus.$on('hello', (data) => {
				console.log('org组件接收到了参数', data)
			})
		},
		beforeDestroy() {
			this.$bus.$off('hello')
		}
	}
</script>

<style scoped>
	.org {
		background-color: skyblue;
		padding: 5px;
	}
</style>
