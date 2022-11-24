<template>
	<div>
		<ul>
			<h1 :style="{opacity: opacity}">欢迎登录，{{name}}</h1>
			<li v-for="n in newsList" :key="n.id">
				<a href="">{{n.title}}</a>
				<input type="text" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'news',
		data() {
			return {
				newsList: [{
					id: '001',
					title: '新闻1'
				}, {
					id: '002',
					title: '新闻2'
				}, {
					id: '003',
					title: '新闻3'
				}],
				name: 'Flan',
				opacity: 1
			}
		},
		mounted() {
			console.log('news挂载完毕')
			// this.timer = setInterval(() => {
			// 	console.log("test")
			// 	this.opacity -= 0.01

			// 	if (this.opacity <= 0) {
			// 		this.opacity = 1
			// 	}
			// }, 16)
		},
		beforeDestroy() {
			console.log('news即将被销毁')
			// clearInterval(this.timer)
		},
		activated() {
			this.timer = setInterval(() => {
				console.log("test")
				this.opacity -= 0.01

				if (this.opacity <= 0) {
					this.opacity = 1
				}
			}, 16)
		},
		deactivated() {
			clearInterval(this.timer)
		}
	}
</script>

<style>
</style>
