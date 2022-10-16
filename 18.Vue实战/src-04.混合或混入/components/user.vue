<template>
	<div>
		<h2 @click="showName">用户名称：{{name}}</h2>
		<h2>用户性别：{{sex}}</h2>
	</div>
</template>

<script>
	// import {
	// 	mixin,
	// 	mixin1
	// } from '../mixin'

	export default {
		name: 'user',
		data() {
			return {
				name: 'ayu',
				sex: '男',
				x: 233
			}
		},
		mounted() {
			console.log("hello!")
		},
		// mixins: [mixin, mixin1]
	}
</script>

<style>
</style>
