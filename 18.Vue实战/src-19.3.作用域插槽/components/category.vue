<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot :game="game" msg="更多游戏">我是默认值</slot>
	</div>
</template>

<script>
	export default {
		name: 'category',
		props: ['title'],
		data() {
			return {
				game: ['浪漫世界', '我的世界', '泰拉瑞亚']
			}
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
