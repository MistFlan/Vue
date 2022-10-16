<template>
	<!-- 
		插件 用于增加Vue
		本质是包含install方法的一个对象 install第一个参数是Vue 第二个参数是插件使用者传递的数据
		
		定义插件
			install = function(Vue, options) {
				// 全局过滤器
				Vue.filter(······)
				
				// 全局自定义指令
				Vue.directive(······)
				
				// 全局混入
				Vue.mixin(······)
				
				// 增加实例方法
				Vue.prototype.$method = function() {······}
				Vue.prototype.$property = xxx
			}
			
		使用插件 在main.js
			引入import plugins from './plugins'
			使用Vue.use(plugins, 1, 2, 3)
	 -->
	<div>
		<org></org>
		<hr />
		<user></user>
	</div>
</template>

<script>
	import user from './components/user.vue'
	import org from './components/org.vue'

	export default {
		name: 'App',
		components: {
			user,
			org
		}
	}
</script>

<style>
</style>
