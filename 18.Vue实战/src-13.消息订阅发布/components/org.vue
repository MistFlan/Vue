<template>
	<div class="org">
		<h2 class="title">组织名称：{{name}}</h2>
		<h2 class="size">组织地址：{{address}}</h2>
		<button @click="unSubscribe">点击取消订阅</button>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'

	export default {
		name: 'org',
		data() {
			return {
				name: 'QQ群',
				address: '亚洲'
			}
		},
		methods: {
			showUserName(pubsubName, data) {
				console.log('欢迎登录', data)
			},
			unSubscribe() {
				pubsub.unsubscribe(this.pubId)
			}
		},
		mounted() {
			// this.$bus.$on('hello', (data) => {
			// 	console.log('org组件接收到了参数', data)
			// })

			// 不推荐写法 使用lambda表达式才能使this指向vc
			// this.pubId = pubsub.subscribe('hello', (pubsubName, data) => console.log('欢迎登录', data))
			// 推荐写法 
			this.pubId = pubsub.subscribe('hello', this.showUserName)
		},
		beforeDestroy() {
			// this.$bus.$off('hello')

			pubsub.unsubscribe(this.pubId)
		}
	}
</script>

<style scoped>
	.org {
		background-color: skyblue;
		padding: 5px;
	}
</style>
