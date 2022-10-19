<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot>我是默认值</slot>
		
<!-- 		<ul>
			<li v-for="(l, index) in listData" key="index">{{l}}</li>
		</ul> -->
	</div>
</template>

<script>
	export default {
		name: 'category',
		props: ['title', 'listData'],
		data() {
			return {}
		}
	}
</script>

<style>
	.category {
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}

	h3 {
		text-align: center;
		background-color: orange;
	}
</style>
