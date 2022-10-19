<template>
	<!-- 
		Vue封装的过渡与动画
			在插入、更新和移除DOM元素时 在合适的时候给元素添加样式
			
		1、定义样式
			元素进入的样式
				v-enter: 进入的起点
				v-enter-active: 进入过程
				v-enter-to: 进入的终点
			
			元素离开的方式
				v-leave: 离开的起点
				v-leave-active: 离开过程
				v-leave-to: 离开的终点
		
		2、使用<transition>包裹需要过渡的元素 并配置name属性
			<transition name="hello">
				<h1 v-show="isShow">欢迎登录，{{name}}</h1>
			</transition>
		
		如果有多个元素需要过渡 需要使用<transition-group>属性 并给每个元素指定key值
	 -->
	<div>
		<test></test>
		<test1></test1>
		<test2></test2>
	</div>
</template>

<script>
	// 引入组件
	import test from './components/test'
	import test1 from './components/test1'
	import test2 from './components/test2'

	export default {
		name: 'App',
		components: {
			test,
			test1,
			test2
		}
	}
</script>

<style>
</style>
