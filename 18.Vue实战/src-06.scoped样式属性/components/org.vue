<template>
	<div class="test">
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
		}
	}
</script>

<style scoped>
	.test {
		background-color: skyblue;
	}
</style>
