<template>
	<div class="test">
		<h2 class="title">用户名称：{{name}}</h2>
		<h2>用户性别：{{sex}}</h2>
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
		}
	}
</script>

<style>
	.test {
		background-color: orange;
	}
</style>
