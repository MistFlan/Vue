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
