<template>
	<div>
		<h2>组织名称：{{name | slice}}</h2>
		<h2>组织地址：{{address}}</h2>
		<input type="text" v-fbind:value="name"/>
	</div>
</template>

<script>
	export default {
		name: 'org',
		data() {
			return {
				name: 'QQ群12100',
				address: '亚洲'
			}
		}
	}
</script>

<style>
</style>
