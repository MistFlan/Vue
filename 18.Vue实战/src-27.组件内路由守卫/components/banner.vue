<template>
	<div>
		<h2>Vue Router Demo</h2>
		<button @click="back">后退</button>
		<button @click="forward">前进</button>
		<button @click="go">go方法</button>
	</div>
</template>

<script>
	export default {
		name: 'banner',
		methods: {
			back() {
				this.$router.back()
			},
			forward() {
				this.$router.forward()
			},
			go(){
				this.$router.go(-2)
			}
		}
	}
</script>

<style scoped>
	button {
		margin-left: 10px;
	}
</style>
