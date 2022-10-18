<template>
	<div class="todo-wrap">
		<todoHeader @addTodo="addTodo"></todoHeader>
		<todoList :todoList="todoList" :updateTodoDone="updateTodoDone" :deleteTodo="deleteTodo"></todoList>
		<todoFooter :todoList="todoList" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></todoFooter>
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
