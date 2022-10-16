<template>
	<div class="todo-footer" v-show="totalNumber">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
			<input type="checkbox" v-model="isAll" />
		</label>
		<span>
			<span>已完成{{doneNumber}}</span> / 全部{{totalNumber}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name: 'todoFooter',
		data() {
			return {}
		},
		methods: {
			checkAll(event) {
				console.log('checkAll', event.target.checked)
				this.checkAllTodo(event.target.checked)
			},
			clearAll() {
				this.clearAllTodo()
			}
		},
		computed: {
			totalNumber() {
				return this.todoList.length
			},
			doneNumber() {
				// return this.todoList.filter(todo => todo.done).length
				// return this.todoList.reduce((pre, current) => {
				// 	console.log('@', pre)
				// 	return pre + (current.done ? 1 : 0)
				// }, 0)
				return this.todoList.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
			},
			// isAll() {
			// 	return this.doneNumber === this.totalNumber && this.totalNumber > 0
			// }
			isAll: {
				get() {
					return this.doneNumber === this.totalNumber && this.totalNumber > 0
				},
				set(value) {
					this.checkAllTodo(value)
				}
			}
		},
		props: ['todoList', 'checkAllTodo', 'clearAllTodo']
	}
</script>

<style scoped>
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
