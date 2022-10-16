<template>
	<div class="org">
		<h2>组织名称：{{name}}</h2>
		<h2>组织地址：{{address}}</h2>
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

<style>
	.org {
		background-color: orange;
	}
</style>
