<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入任务名称 点击回车键确认" v-model="todoTitle" @keyup.enter="addTodo1" />
	</div>
</template>

<script>
	import {
		nanoid
	} from 'nanoid'

	export default {
		name: 'todoHeader',
		data() {
			return {
				todoTitle: ''
			}
		},
		methods: {
			addTodo1(event) {
				if (!this.todoTitle.trim()) return alert("请输入数据")
				
				console.log(event.target.value)
				const todo = {
					id: nanoid(),
					title: event.target.value,
					done: false
				}
				console.log(todo)
				this.addTodo(todo)
				this.todoTitle = ''
			}
		},
		props: ['addTodo']
	}
</script>

<style scoped>
	.todo-header input {
		width: 56px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
