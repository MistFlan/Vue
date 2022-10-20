<template>
	<div>
		<h1>欢迎登录，{{mState.name}} 天气{{weather}}</h1>
		<h1>当前求和为：{{sum}}</h1>
		<h2>计算后的和为：{{updatedSum}}</h2>
		<h3>历史使用人数：{{mState.userList.length}}</h3>
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
			increment() {
				// this.sum += this.n
				// this.$store.dispatch('jia', this.n)
				this.$store.commit('JIA', this.n)
			},
			decrement() {
				// this.sum -= this.n
				// this.$store.dispatch('jian', this.n)
				this.$store.commit('JIAN', this.n)
			},
			incrementOdd() {
				// if (this.sum % 2) {
				// 	this.sum += this.n
				// }
				this.$store.dispatch('jiaOdd', this.n)
			},
			incrementWait() {
				// setTimeout(() => {
				// 	this.sum += this.n
				// }, 1000)
				this.$store.dispatch('jiaWait', this.n)
			},
			
			// 在方法中调用commit去执行mutations的方法
			...mapMutations({increment:'JIA'}),
			// 简写
			...mapMutations(['JIAN']),
			// 在方法中调用dispatch去执行actions的方法
			...mapActions({incrementOdd:'jiaOdd'}),
			// 简写
			...mapActions(['jiaWait'])
		},
		computed: {
			mState() {
				return this.$store.state
			},
			sum() {
				return this.$store.state.sum
			},
			// 用于映射state中的数据为计算属性
			// ...mapState({weather:'weather'}),
			// 简写方式
			...mapState(['weather']),
			// 用于映射getters中的数据为计算属性
			...mapGetters(['updatedSum'])
		}
	}
</script>

<style>
	button {
		margin-left: 10px;
	}
</style>
