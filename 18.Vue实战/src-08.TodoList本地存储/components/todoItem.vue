<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="updateDone(todo.id)" />
			<span>{{todo.title}}</span>
		</label>
		<button class="btn btn-danger" @click="deleteTodo1(todo.id)">删除</button>
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
				this.updateTodoDone(id)
			},
			deleteTodo1(id) {
				if (confirm('确定删除此数据？')) {
					this.deleteTodo(id)
				}
			}
		},
		props: ['todo', 'updateTodoDone', 'deleteTodo'],
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
