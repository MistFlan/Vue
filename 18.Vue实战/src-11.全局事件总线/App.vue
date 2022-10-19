<template>
	<!-- 
		全局事件总线
		一种组件间通信的方式 适用于任意组件间通信
		
		1、创建全局事件总线
			创建Vue时 在生命周期beforeCreate的时候 在Vue原型对象上追加总线属性 并将vm实例赋值给它
			beforeCreate() {
				Vue.prototype.$bus = this
			}
		
		2、使用全局事件总线
			接收数据
			methods(){
				receptionData(){
					······
				}
			}
			mounted(){
				this.$bus.$on('xxx', this.receptionData)
			}
			
			发送数据
			this.$bus.$emit('xxx', data)
			
		3、在beforeDestroy中 使用$off解绑当前组件使用的所有事件
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
