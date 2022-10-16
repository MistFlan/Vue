export default {
	install(Vue, x, y, z) {
		// console.log('plugins.install', Vue)
		console.log('plugins.install', x, y, z)

		// 全局过滤器
		Vue.filter('slice', function(value) {
			return value.slice(0, 4)
		})

		// 全局自定义指令
		Vue.directive('fbind', { // 指令与元素成功绑定时
			bind(element, binding) {
				console.log('bind')
				element.value = binding.value
			},
			// 指令所在元素被插入页面时
			inserted(element, binding) {
				console.log('inserted')
				element.focus()
			},
			// 指令所在的模板被重新解析时
			update(element, binding) {
				console.log('update')
				element.focus()
				element.value = binding.value
			}
		})

		// 全局混入
		Vue.mixin({
			data() {
				return {
					x: 100,
					y: 20
				}
			}
		})
		
		// 给Vue原型上添加一个方法
		Vue.prototype.hello = ()=>{alert('hello')}
	}
}
