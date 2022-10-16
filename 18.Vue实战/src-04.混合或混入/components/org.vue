<template>
	<div>
		<h2 @click="showName">组织名称：{{name}}</h2>
		<h2>组织地址：{{address}}</h2>
	</div>
</template>

<script>
	// import {
	// 	mixin
	// } from '../mixin'
	
	export default {
		name: 'org',
		data() {
			return {
				name: 'QQ群',
				address: '亚洲'
			}
		},
		// mixins: [mixin]
	}
</script>

<style>
</style>
