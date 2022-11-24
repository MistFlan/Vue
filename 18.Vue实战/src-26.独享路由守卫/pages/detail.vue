<template>
	<div>
		<!-- 一、接收跳转路由器并携带query参数 -->
		<!-- <h2>消息编号：{{$route.query.id}}</h2> -->
		<!-- <h2>消息内容：{{$route.query.title}}</h2> -->

		<!-- 二、接收跳转路由器并携带params参数 -->
		<!-- <h2>消息编号：{{$route.params.id}}</h2> -->
		<!-- <h2>消息内容：{{$route.params.title}}</h2> -->

		<!-- 二、通过计算属性通常获取params参数 -->
		<!-- <h2>消息编号：{{detail.id}}</h2> -->
		<!-- <h2>消息内容：{{detail.title}}</h2> -->
		
		<!-- 三、props的对象写法 -->
		<!-- <h2>消息编号：{{a}}</h2> -->
		<!-- <h2>消息内容：{{b}}</h2> -->

		<!-- 四、props的布尔值写法 -->
		<!-- <h2>消息编号：{{id}}</h2> -->
		<!-- <h2>消息内容：{{title}}</h2> -->
		
		<!-- 五、props的函数写法 -->
		<h2>消息编号：{{id}}</h2>
		<h2>消息内容：{{title}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'detail',
		// 三、props的对象写法
		// props: ['a', 'b'],
		// 四、props的布尔值写法
		// props: ['id', 'title'],
		// 五、props的函数写法
		props: ['id', 'title'],
		computed: {
			detail() {
				return this.$route.params
			}
		},
		mounted() {
			console.log(this.$route)
		}
	}
</script>

<style>
</style>
