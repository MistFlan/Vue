<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>用户名称：{{name}}</h2>
		<h2>用户性别：{{sex}}</h2>
		<h2>用户年龄：{{age + 1}}</h2>
		<button @click="updateAge">点击修改年龄</button>
	</div>
</template>

<script>
	export default {
		name: 'user',
		data() {
			return {
				msg: '鱼先生天下第一！',
				newAge: this.age
			}
		},
		methods: {
			updateAge() {
				// 不允许直接修改传入的值
				// this.age = 22
				this.newAge++
			}
		},
		// 简单接收
		// props:['name', 'sex', 'age']

		// 接收时对数据进行类型限制
		// props: {
		// 	name: String,
		// 	sex: String,
		// 	age: Number
		// }

		// 接收时对数据进行类型限制 默认值指定 必要性限制
		props: {
			name: {
				type: String,
				required: true
			},
			sex: {
				type: String,
				required: true
			},
			age: {
				type: Number,
				default: 1
			}
		}
	}
</script>

<style>
</style>
