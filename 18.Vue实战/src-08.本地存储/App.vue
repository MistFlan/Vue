<template>
	<!-- 
		webStorage
		localStorage和sessionStorage统称为webStorage
		
		1、存储内容大小一般支持5M左右 不同浏览器可能不同
		
		2、浏览器通过Window.sessionStorage和Window.localStorage属性来实现本地存储
		
		3、相关API
		xxxStorage.setItem(key, value)
			相当于map的put方法
		xxxStorage.getItem
			相当于map的get方法
		xxxStorage.removeItem
			相当于map的remove方法
		xxxStorage.clear
			相当于list的clear方法
			
		4、sessionStorage存储的内容会随着浏览器窗口关闭而消失 localStorage则不会
		5、如果getItem对应的值获取不到 会返回null
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
				todoList: JSON.parse(localStorage.getItem('todoList')) || []
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
			checkAllTodo(done) {
				this.todoList.forEach(e => e.done = done)
			},
			clearAllTodo() {
				this.todoList.forEach(e => e.done = false)
			}
		},
		watch: {
			todoList: {
				immediate: true,
				deep: true,
				handler(newValue, oldValue) {
					localStorage.setItem('todoList', JSON.stringify(newValue))
				}
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
