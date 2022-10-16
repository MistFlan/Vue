<template>
	<div>
		<h2>用户名称：{{name}}</h2>
		<h2>用户性别：{{sex}}</h2>
		<button @click="userHello">点击调用hello方法</button>
	</div>
</template>

<script>
	export default {
		name: 'user',
		data() {
			return {
				name: 'ayu',
				sex: '男',
				x: 233
			}
		},
		methods: {
			userHello(){
				this.hello()
			}
		}
	}
</script>

<style>
</style>
