<template>
	<!-- 
		打包并部署到tomcat
		vue.config.js中
		publicPath: '/learn/',
		
		路由文件index.js中
		base: '/learn/',
		mode: 'history',
		
		路由文件中的base必须配置为publicPath同名 否则三级路由刷新后将变为空白页
		
		在打包后的文件夹中添加WEB-INF文件夹 并添加web.xml文件 解决刷新404问题
	 -->
	<div>
		<banner></banner>
		<div>
			<!-- <a href="./about.html">About</a> -->
			<!-- <br /> -->
			<!-- <a href="./home.html">Home</a> -->
			
			<div class="about">
				<router-link :replace="true" :to="{name:'guanyu'}" active-class="acive">About</router-link>
			</div>
			<br />
			<div class="home">
				<router-link replace to="/home" active-class="acive">Home</router-link>
			</div>
		</div>

		<br />
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import banner from './components/banner.vue'

	export default {
		name: 'App',
		components: {
			banner
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style>
	.about {
		background-color: orange;
	}

	.home {
		background-color: rgb(87, 78, 89);
	}

	.acive {
		background-color: aliceblue;
	}
</style>
