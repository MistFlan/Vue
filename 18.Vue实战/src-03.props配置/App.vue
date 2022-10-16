<template>
	<!-- 
		配置项props让组件接收外部传递的数据
		props是只读的 Vue的底层会检测对props的修改 如果进行了修改 就会提示警告
		如果确实需要修改 需要复制props的内容到data中 再修改data的属性并进行展示
	 -->
	<div>
		<user name="hajiang" sex="男" :age="20" />
		<user name="ayu" sex="男" :age="18" />
	</div>
</template>

<script>
	import user from './components/user.vue'

	export default {
		name: 'App',
		components: {
			user
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
</style>
