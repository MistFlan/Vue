<template>
	<div>
		<h2>用户名称：{{name}}</h2>
		<h2>用户年龄：{{age}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'user',
		data() {
			return {
				name: '鱼先生',
				age: 18
			}
		}
	}
</script>

<style>
</style>
