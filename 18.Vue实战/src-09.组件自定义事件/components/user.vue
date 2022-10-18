<template>
	<div class="user">
		<h2>用户名称：{{name}}</h2>
		<h2>用户性别：{{sex}}</h2>
		<h2>{{number}}</h2>
		<button @click="add">点击更新number</button>
		<button @click="sendUserName">点击返回用户名称</button>
		<button @click="unbind">点击解绑事件</button>
		<button @click="destroyVC">销毁当前组件实例</button>
	</div>
</template>

<script>
	export default {
		name: 'user',
		data() {
			return {
				name: 'ayu',
				sex: '男',
				number: 0
			}
		},
		methods: {
			add() {
				console.log('add')
				this.number++
			},
			sendUserName() {
				// 触发当前组件实例身上的事件
				this.$emit('flan', this.name, 233, 666, 999)
				this.$emit('ayu')
			},
			unbind() {
				// 解绑单个自定义事件
				// this.$off('flan')

				// 解绑多个自定义事件
				// this.$off(['flan', 'ayu'])

				// 解绑所有自定义事件
				this.$off()
			},
			destroyVC() {
				this.$destroy()
			}
		}
	}
</script>

<style>
	.user {
		background-color: orange;
		padding: 5px;
		margin-top: 30px;
	}
</style>
