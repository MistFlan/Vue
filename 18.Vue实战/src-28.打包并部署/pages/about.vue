<template>
	<div>
		我是Adbout页面
	</div>
</template>

<script>
	export default {
		name: 'about',
		mounted() {
			console.log('about挂载完毕')
		},
		beforeDestroy() {
			console.log('about即将被销毁')
		},
		// 通过路由规则 进入组件时执行
		beforeRouterEnter(to, from, next) {
			console.log(to, from)

			if (to.meta.isAuth) {
				if (localStorage.getItem('org') === 'qq') {
					next()
				} else {
					alert('您不属于此机构 无法查看')
				}
			} else {
				next()
			}
		},
		// 通过路由规则 离开该组件时执行
		beforeRouterLeave(to, from, next) {
			console.log(to, from)
			next()
		}
	}
</script>

<style>
</style>
