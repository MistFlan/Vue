<template>
	<ul class="todo-main">
		<transition-group name="todo" appear>
			<todoItem v-for="t in todoList" :key="t.id" :todo="t" :updateTodoDone="updateTodoDone"
				:deleteTodo="deleteTodo">
			</todoItem>
		</transition-group>
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

	/* 进入的起点, 离开的终点 */
	.todo-enter,
	.todo-leave-to {
		transform: translateX(100%);
	}

	/* 进入的终点, 离开的起点 */
	.todo-enter-to,
	.todo-leave {
		transform: translateX(0);
	}
</style>
