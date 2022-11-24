<template>
	<div>
		我是Home页面
		<div class="news">
			<router-link to="/home/news" active-class="acive">News</router-link>
		</div>
		<br />
		<div class="message">
			<router-link to="/home/message" active-class="acive">Message</router-link>
		</div>

		<br />
		
		<!-- keep-alive使组件不会被销毁 通过include指定组件名缓存对应的组件 -->
		<!-- <keep-alive include="news"> -->
		<keep-alive :include="['news']">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {

			}
		},
		mounted() {
			console.log('home挂载完毕')
		},
		beforeDestroy() {
			console.log('home即将被销毁')
		}
	}
</script>

<style>
	.news {
		background-color: skyblue;
	}

	.message {
		background-color: aqua;
	}
</style>
