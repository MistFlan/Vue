<template>
	<!-- 组件的结构 -->
	<div id="org">
		<h2>组织名称：{{name}}</h2>
		<h2>组织地址：{{address}}</h2>
	</div>
</template>

<script>
	// 组件交互相关的代码 数据 方法等
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
	/* 组件的样式 */
	.org {
		background-color: orange;
	}
</style>
