<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 一、跳转路由器并携带query参数 to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
				<!-- 一、跳转路由器并携带query参数 to的对象写法 -->
				<!-- 				 <router-link :to="{
					 path:'/home/message/detail',
					 query:{
						 id: m.id,
						 title: m.title
					 }
				 }">{{m.title}}</router-link> -->

				<!-- 命名路由 在配置中添加name属性 简化跳转连接 -->
				<router-link :to="{
					 name:'xiangqing',
					 query:{
						 id: m.id,
						 title: m.title
					 }
				 }">{{m.title}}</router-link>

				<!-- 二、需要在路由配置参数名的占位值 path: 'detail/:id/:title' -->
				<!-- 跳转路由器并携带params参数 to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

				<!-- 二、需要在路由配置命名路由使用 name: 'xiangqing'  -->
				<!-- 跳转路由器并携带params参数 to的对象写法 -->
				<!-- 				<router-link :to="{
					 name: 'xiangqing',
					 params:{
						 id: m.id,
						 title: m.title
					 }
				}">{{m.title}}</router-link> -->

				<button @click="pushShow(m)">push查看</button>
				<button @click="replaceShow(m)">replace查看</button>
			</li>
		</ul>

		<br />
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'message',
		data() {
			return {
				messageList: [{
					id: '001',
					title: '消息1'
				}, {
					id: '002',
					title: '消息2'
				}, {
					id: '003',
					title: '消息3'
				}]
			}
		},
		methods: {
			pushShow(m) {
				this.$router.push({
					name: 'xiangqing',
					query: {
						id: m.id,
						title: m.title
					}
				})
			},
			replaceShow(m) {
				this.$router.replace({
					name: 'xiangqing',
					query: {
						id: m.id,
						title: m.title
					}
				})
			}
		},
		mounted() {
			console.log('message挂载完毕')
		},
		beforeDestroy() {
			console.log('message即将被销毁')
		}
	}
</script>

<style>
</style>
