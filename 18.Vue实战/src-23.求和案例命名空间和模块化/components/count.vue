<template>
	<div>
		<h1>欢迎登录，{{mCountState.name}} 天气{{weather}}</h1>
		<h1>当前求和为：{{sum}}</h1>
		<h2>计算后的和为：{{updatedSum}}</h2>
		<h3>历史使用人数：{{mUserState.userList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="JIAN(n)">-</button>
		<button @click="incrementOdd(n)">当前数为奇数执行加法</button>
		<button @click="jiaWait(n)">延迟执行加法</button>
	</div>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapActions,
		mapMutations
	} from 'vuex'

	export default {
		name: 'count',
		data() {
			return {
				n: 1
			}
		},
		methods: {
			// 在方法中调用commit去执行mutations的方法
			...mapMutations('countAbout', {
				increment: 'JIA'
			}),
			// 简写
			...mapMutations('countAbout', ['JIAN']),
			// 在方法中调用dispatch去执行actions的方法
			...mapActions('countAbout', {
				incrementOdd: 'jiaOdd'
			}),
			// 简写
			...mapActions('countAbout', ['jiaWait'])
		},
		computed: {
			mCountState() {
				return this.$store.state.countAbout
			},
			mUserState() {
				return this.$store.state.userAbout
			},
			sum() {
				return this.$store.state.countAbout.sum
			},
			// 用于映射state中的数据为计算属性 必须在store中配置namespaced属性为真
			// ...mapState('countAbout', {weather:'weather'}),
			// 简写方式
			...mapState('countAbout', ['weather']),
			// 用于映射getters中的数据为计算属性
			...mapGetters('countAbout', ['updatedSum'])
		}
	}
</script>

<style>
	button {
		margin-left: 10px;
	}
</style>
