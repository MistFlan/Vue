<template>
	<div>
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前数为奇数执行加法</button>
		<button @click="incrementWait">延迟执行加法</button>
	</div>
</template>

<script>
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
			}
		}
	}
</script>

<style>
	button {
		margin-left: 10px;
	}
</style>
