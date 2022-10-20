<template>
	<!-- 
		引入路由器组件 npm i vue-router
		引入低版本 npm i vue-router@3
		
		1、路由组件通常存放在pages文件夹 一般组件通常存放在components文件夹
		2、通过切换 隐藏的路由组件 默认是会被销毁
		3、每个组件携带自己的$route属性 存放自己的路由信息
		4、整个应用只有一个router 可以用过组件自身的$router属性获取到
		5、通过指定replace属性 控制操作浏览器历史
		6、路由器独有的两个生命周期
			activated 路由组件被激活时触发
			deactivated 路由组件失活时触发
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
