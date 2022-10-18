<template>
	<div class="org">
		<h2 class="title">组织名称：{{name}}</h2>
		<h2 class="size">组织地址：{{address}}</h2>
		<button @click="sendOrgName">点击返回组织名称</button>
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
		methods: {
			sendOrgName() {
				this.getOrgName(this.name)
			}
		},
		props: ['getOrgName']
	}
</script>

<style scoped>
	.org {
		background-color: skyblue;
		padding: 5px;
	}
</style>
