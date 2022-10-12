// import App from './App.vue'

// new Vue({
// 	template: `<App></App>`
// 	el: 'root',
// 	components: {
// 		App
// 	}
// })

/* 
	1、vue.js与vue.runtime.xxx.js的区别
		1、vue.js是完整版的Vue 包含核心功能+模板解析器
		2、vue.runtime.xxx.js是运行版的Vue 只包含核心功能没有模板解析器
		
	2、因为vue.runtime.xxx.js没有模板解析器 所以在main.js中创建Vue实例的时候不能使用template配置项
	   需要使用render函数接收到的createElement函数去指定具体内容
	   .vue文件的template解析使用了vue-template-compiler库
 */

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	//  render(createElement){
	// return createElement('h1', 'HelloWorld')
	//  }
	// render: (createElement) => {
	// 	return createElement('h1', 'HelloWorld')
	// }
	// render: createElement => {
	// 	return createElement('h1', 'HelloWorld')
	// }
	// render: createElement => createElement('h1', 'HelloWorld')
	// render: e => e('h1', 'HelloWorld')
}).$mount('#app')
