<template>
	<div>
		<h1>用户列表</h1>
		<h2>当前列表首个用户是 {{firstUserName}}</h2>
		<h2>当前计算机求和值为：{{mCountState.sum}}</h2>
		<input type="text" placeholder="请输入名称" v-model="name" />
		<button @click="addUser">添加</button>
		<button @click="addAdmin">添加管理员</button>
		<button @click="addRadomUser">添加随机用户</button>
		<ul>
			<li v-for="(u, index) in userList" :key="u.id">{{u.name}}</li>
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
				this.$store.commit('userAbout/ADD_USER', user)
				this.name = ''
			},
			addAdmin() {
				const user = {
					id: nanoid(),
					name: this.name
				}
				this.$store.dispatch('userAbout/addAdmin', user)
				this.name = ''
			},
			addRadomUser(){
				this.$store.dispatch('userAbout/addRadomUser')
			}
		},
		computed: {
			mCountState() {
				return this.$store.state.countAbout
			},
			mUserState() {
				return this.$store.state.userAbout
			},
			userList() {
				return this.$store.state.userAbout.userList
			},
			firstUserName() {
				return this.$store.getters['userAbout/firstUserName']
			}
		}
	}
</script>

<style>
</style>
