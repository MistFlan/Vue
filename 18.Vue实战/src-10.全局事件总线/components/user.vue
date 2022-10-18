<template>
	<div class="user">
		<h2>用户名称：{{name}}</h2>
		<h2>用户性别：{{sex}}</h2>
		<button @click="seedData">点击发送数据</button>
	</div>
</template>

<script>
	export default {
		name: 'user',
		data() {
			return {
				name: 'ayu',
				sex: '男'
			}
		},
		methods: {
			seedData() {
				this.$bus.$emit('hello', this.name)
			}
		}
	}
</script>

<style>
	.user {
		background-color: orange;
		padding: 5px;
		margin-top: 30px;
	}
</style>
