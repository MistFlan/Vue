<template>
	<div class="container">
		<category title="美食" :listData="foods">
			<img slot="center" class="food" src="https://t7.baidu.com/it/u=760837404,2640971403&fm=193&f=GIF" />
			<a slot="footer" href="http://www.baidu.com">更多美食</a>
		</category>
		<category title="游戏" :listData="game">
			<ul slot="center">
				<li v-for="(g, index) in game" :key="index">{{g}}</li>
			</ul>
			<div slot="footer" class="footer">
				<a href="http://www.baidu.com">Steam</a>
				<a href="http://www.baidu.com">UPlay</a>
			</div>
		</category>
		<category title="影视" :listData="films">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<!-- <template v-slot:footer> -->
			<template slot="footer">
				<div class="footer">
					<a href="http://www.baidu.com">经典</a>
					<a href="http://www.baidu.com">热门</a>
					<a href="http://www.baidu.com">欧美</a>
				</div>
				<h4>欢迎观影</h4>
			</template>
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
	.container,
	.footer {
		display: flex;
		justify-content: space-around;
	}

	.food {
		width: 100%;
	}

	video {
		width: 100%;
	}

	h4 {
		text-align: center;
	}
</style>
