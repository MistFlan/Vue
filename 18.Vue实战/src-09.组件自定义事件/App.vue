<template>
	<!-- 
		组件的自定义事件
		1、一种组件间的通信方式 适用于 子组件向父组件
		2、绑定自定义事件方法
			第一种方式 在父组件中 <user v-on:事件名称="method"></user> 或 <user @事件名称="method"></user>
			第二种方式 在父组件中 <user ref="user"></user> mounted() {this.$refs.user.$on('事件名称', this.method)}
			如果想让自定义组件只触发一次 可以使用once修饰符
			
			在子组件中 this.$emit('flan', this.name, 233, 666, 999)
		
		3、解绑自定义事件 this.$off('method')
		4、可以绑定原生DOM事件 需要使用native修饰符 <user @click.native="method"></user>
		5、如果通过第二种方式{this.$refs.user.$on('事件名称', this.method)}绑定自定义事件时 建议直接调用父组件的方法
			否则请使用lambda函数 保证this指向当前组件
	 -->
	<div class="app">
		<h1>{{msg}}, {{name}}</h1>
		<!-- 通过回调函数实现 子组件向父组件传递数据 -->
		<org :getOrgName="getOrgName"></org>
		<!-- 给子组件绑定一个一次性自定义事件 -->
		<user v-on:flan.once="getUserName" @ayu="ayu"></user>
		<!-- 给子组件绑定一个一次性自定义事件 -->
		<user @flan.once="getUserName"></user>
		<!-- 通过持有子组件实例在mounted绑定自定义事件 -->
		<user ref="user" @click.native="eject"></user>
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
		},
		methods: {
			getOrgName(name) {
				console.log("orgName:   " + name)
			},
			getUserName(name, ...params) {
				console.log('userName:   ' + name, params)
				this.name = name
			},
			ayu() {
				console.log('ayu')
			},
			eject() {
				alert(233)
			}
		},
		mounted() {
			// 延迟绑定自定义事件
			setTimeout(() => {
				this.$refs.user.$on('flan', this.getUserName)
			}, 3000)
			// 绑定一次性自定义事件
			// this.$refs.user.$once('flan', this.getUserName)
		}
	}
</script>

<style lang="css">
	.app {
		background-color: gray;
		padding: 5px;
	}
</style>
