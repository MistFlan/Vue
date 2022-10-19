<template>
	<!-- 
		插槽 让父组件可以向子组件指定位置插入html结构 也是一种组件间的通信方式 适用于父组件到子组件
		
		1、默认插槽
			父组件中
			<category title="美食" :listData="foods">
				······
			</category>
			子组件中
			<div class="category">
					<h3>{{title}}分类</h3>
					<slot>我是默认值</slot>
			</div>
			
		2、具名插槽
			父组件中
			<category title="游戏" :listData="game">
				<ul slot="center">
					······
				</ul>
				<div slot="footer" class="footer">
					······
				</div>
			</category>
			子组件中
			<div class="category">
				<h3>{{title}}分类</h3>
				<slot name="center">我是默认值</slot>
				<slot name="footer">我是默认值</slot>
			</div>
			
		3、作用域插槽
			数据存放在组件自身 但html结构由使用者决定
			父组件中
			<category title="游戏">
				<template scope="data"> // 必须使用标签
					<ul>
						<li v-for="(g, index) in data.game" :key="index">{{g}}</li>
					</ul>
				</template>
			</category>
			子组件中
			<div class="category">
				<h3>{{title}}分类</h3>
				<slot :game="game" msg="更多游戏">我是默认值</slot>
			</div>
			
	 -->
	<div class="container">
		<category title="游戏">
			<template scope="data">
				<ul>
					<li v-for="(g, index) in data.game" :key="index">{{g}}</li>
				</ul>
			</template>
		</category>
		<category title="游戏">
			<template scope="data">
				<ul>
					<li style="color: red;" v-for="(g, index) in data.game" :key="index">{{g}}</li>
				</ul>
				<h4>
					<a href="www.baidu.com">{{data.msg}}</a>
				</h4>
			</template>
		</category>
		<category title="游戏">
			<!-- 新API<template slot-scope="{game}"> -->
			<template scope="{game}">
				<ul>
					<h4 v-for="(g, index) in game" :key="index">{{g}}</h4>
				</ul>
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
