<template>
	<!-- 
		mixin(混入)
		功能：可以把多个组件共用的配置提取成一个混入对象
		
		定义混合：
			{
				data() {
					······
				},
				methods: {
					······
				}
			}
		
		使用混合：
			1、全局混合：在main.js中引入
			import {mixin, mixin1} from './mixin'
			Vue.mixin(xxx)
			
			2、局部混合：在组件中引入
			import { mixin, mixin1 } from '../mixin'
			mixins: [mixin, mixin1]
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
