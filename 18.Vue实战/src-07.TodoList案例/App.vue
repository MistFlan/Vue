<template>
	<!-- 
		1、组件化编码流程
			1、拆分静态组件：组件按照功能区分 命名不能与html元素冲突
			2、实现动态组件：考虑好数据存放位置 数据是一个组件在用 还是一些组件在用
				一个组件在用：放在组件自身即可
				一些组件在用：放在他们共同的父组件上 也称状态提升
			3、实现交互：从绑定事件开始
	 
		2、props
			1、父组件 => 子组件通信
			2、子组件 => 父组件通信 要求父组件传递函数给子组件
		
		3、v-model绑定的值不能是props传递的值 因为props是不能被修改的
		
		4、props如果传递的是对象类型的值 可以修改对象中的属性 但不建议这么做
	 -->
	<div class="todo-wrap">
		<todoHeader :addTodo="addTodo"></todoHeader>
		<todoList :todoList="todoList" :updateTodoDone="updateTodoDone" :deleteTodo="deleteTodo"></todoList>
		<todoFooter :todoList="todoList" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></todoFooter>
	</div>
</template>

<script>
	import todoHeader from './components/todoHeader'
	import todoFooter from './components/todoFooter'
	import todoList from './components/todoList'

	export default {
		name: 'App',
		data() {
			return {
				todoList: [{
						id: '01',
						title: 'ayu',
						done: true
					},
					{
						id: '02',
						title: 'hajiang',
						done: false
					}
				]
			}
		},
		methods: {
			addTodo(data) {
				console.log('接收到数据:   ' + data)
				this.todoList.unshift(data)
			},
			updateTodoDone(id) {
				this.todoList.forEach((e) => {
					if (e.id === id) {
						e.done = !e.done
					}
				})
			},
			deleteTodo(id) {
				this.todoList = this.todoList.filter(todo => todo.id != id)
				console.log("deleteTodo", this.todoList)
			},
			checkAllTodo(done){
				this.todoList.forEach(e => e.done = done)
			},
			clearAllTodo(){
				this.todoList.forEach(e => e.done = false)
			}
		},
		components: {
			todoHeader,
			todoFooter,
			todoList
		},
		updated() {
			console.log(this.todoList)
		}
	}
</script>

<style>
	body {
		background: #fff;
	}

	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px
	}

	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}

	.btn-danger: hover {
		color: #fff;
		background-color: #bd362f;
	}

	.btn:focus {
		outline: none;
	}

	.todo-container {
		width: 600px;
		margin: 0 auto;
	}

	.todo-container {
		width: 600px;
		margin: 0 auto;
	}

	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
