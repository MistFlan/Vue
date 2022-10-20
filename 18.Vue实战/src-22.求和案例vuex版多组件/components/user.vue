<template>
	<div>
		<h1>用户列表</h1>
		<h2>当前计算机求和值为：{{mState.sum}}</h2>
		<input type="text" placeholder="请输入名称" v-model="name" />
		<button @click="addUser">添加</button>
		<ul>
			<li v-for="(u, index) in mState.userList" :key="u.id">{{u.name}}</li>
		</ul>
	</div>
</template>

<script>
	import {
		nanoid
	} from 'nanoid'

	export default {
		name: 'user',
		data() {
			return {
				name: ''
			}
		},
		methods: {
			addUser() {
				const user = {
					id: nanoid(),
					name: this.name
				}
				this.$store.commit('ADD_USER', user)
				this.name = ''
			}
		},
		computed: {
			mState() {
				return this.$store.state
			}
		}
	}
</script>

<style>
</style>
