<template>
	<!-- 
		一种组件间通信的方式 适用于任意组件间通信
		1、安装 npm i pubsub-js
		2、引入 import pubsub from 'pubsub-js'
		3、接收数据
			methods: {
				method(pubsubName, data) {
					······
				}
			}
			······
			mounted() {
				this.pubId = pubsub.subscribe('pubsubName', this.method)
			}
		4、发送数据
			pubsub.publish('pubsubName', data)
		5、在beforeDestroy中取消订阅
			pubsub.unsubscribe(this.pubId)
	 -->
	<div class="app">
		<h1>{{msg}}, {{name}}</h1>
		<org></org>
		<user></user>
	</div>
</template>

<script>
	import org from './components/org.vue'
	import user from './components/user.vue'


	export default {
		name: 'App',
		components: {
			user,
			org
		},
		data() {
			return {
				msg: '欢迎登录',
				name: ''
			}
		}
	}
</script>

<style lang="css">
	.app {
		background-color: gray;
		padding: 5px;
	}
</style>
