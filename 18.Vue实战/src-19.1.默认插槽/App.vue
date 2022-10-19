<template>
	<div class="container">
		<category title="美食" :listData="foods">
			<img class="food" src="https://t7.baidu.com/it/u=760837404,2640971403&fm=193&f=GIF" />
		</category>
		<category title="游戏" :listData="game">
			<ul>
				<li v-for="(g, index) in game" :key="index">{{g}}</li>
			</ul>
		</category>
		<category title="影视" :listData="films">
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		</category>
	</div>
</template>

<script>
	import category from './components/category'

	export default {
		name: 'App',
		components: {
			category
		},
		data() {
			return {
				foods: ['火锅', '烧烤', '小龙虾'],
				game: ['浪漫世界', '我的世界', '泰拉瑞亚'],
				films: ['《来自新世界》', '《西游戏》', '《三国演义》']
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		display: flex;
		justify-content: space-around;
	}

	.food {
		width: 100%;
	}

	video {
		width: 100%;
	}
</style>
