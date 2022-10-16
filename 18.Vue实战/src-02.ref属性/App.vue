<template>
	<div>
		<!-- 
			ref属性
			1、用来给元素或子组件注册引用信息 即id的替代
			2、应用在html标签上获取的是真实DOM元素 应用在组件标签上是组件实例对象vc
		 -->
		<h1 ref="title" v-text="msg"></h1>
		<button ref="btn" @click="showMsg">点击提示</button>
		<org ref="org" />
	</div>
</template>

<script>
	import org from './components/org.vue'

	export default {
		name: 'App',
		components: {
			org
		},
		data() {
			return {
				msg: '欢迎登录'
			}
		},
		methods: {
			showMsg() {
				console.log(this.msg)
				console.log(this.$refs)
				console.log(this.$refs.title)  //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.org)	// 组件实例对象vc
				console.log(this.$refs.org.$data.name)
			}
		}
	}
</script>

<style>
</style>
