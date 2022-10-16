import Vue from 'vue'
import App from './App.vue'
import {mixin, mixin1} from './mixin'

Vue.config.productionTip = false
Vue.mixin(mixin)
Vue.mixin(mixin1)

new Vue({
	el: '#app',
	render: h => h(App)
})
