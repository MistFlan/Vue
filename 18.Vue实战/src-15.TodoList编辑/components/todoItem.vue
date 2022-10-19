<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="updateDone(todo.id)" />
			<span v-show="!todo.isEdit">{{todo.title}}</span>
			<input type="text" v-show="todo.isEdit" :value="todo.title" @blur="todoTitleBlur($event, todo)"
				@keyup.enter="todoTitleBlur($event, todo)" />
		</label>
		<button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
		<button v-show="!todo.isEdit" class="btn btn-edit" @click="updateTodo(todo)">编辑</button>
	</li>
</template>

<script>
	export default {
		name: 'todoItem',
		data() {
			return {

			}
		},
		methods: {
			updateDone(id) {
				// this.updateTodoDone(id)
				this.$bus.$emit('updateTodoDone', id)
			},
			deleteTodo(id) {
				if (confirm('确定删除此数据？')) {
					// this.deleteTodo(id)
					this.$bus.$emit('deleteTodo', id)
				}
			},
			updateTodo(todo) {
				if (todo.hasOwnProperty('isEdit')) {
					todo.isEdit = true
				} else {
					this.$set(todo, 'isEdit', true)
				}
			},
			todoTitleBlur(event, todo) {
				todo.isEdit = false

				if (!event.target.value.trim()) return alert("请输入数据")

				console.log('updateTodo', todo.id, event.target.value)
				this.$bus.$emit('updateTodo', todo.id, event.target.value)
			}
		},
		props: ['todo'],
		mounted() {
			console.log(this.todo)
		}
	}
</script>

<style scoped>
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none
	}

	li:hover {
		background-color: #ddd;
	}

	li:hover button {
		display: block;
	}
</style>
