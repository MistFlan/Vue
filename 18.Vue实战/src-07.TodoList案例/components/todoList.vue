<template>
	<ul class="todo-main">
		<todoItem v-for="t in todoList" :key="t.id" :todo="t" :updateTodoDone="updateTodoDone" :deleteTodo="deleteTodo">
		</todoItem>
	</ul>
</template>

<script>
	import todoItem from './todoItem'

	export default {
		name: 'todoList',
		data() {
			return {

			}
		},
		props: ['todoList', 'updateTodoDone', 'deleteTodo'],
		components: {
			todoItem
		}
	}
</script>

<style scoped>
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px
	}
</style>
