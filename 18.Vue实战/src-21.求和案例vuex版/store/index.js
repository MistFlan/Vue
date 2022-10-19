// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'

import Vuex from 'vuex'
// 准备actions用于相应组件中的动作
const actions = {
	// jia: function(context, value) {
	// 	// console.log(context, value)
	// 	context.commit('JIA', value)
	// },
	// jian: function(context, value) {
	// 	// console.log(context, value)
	// 	context.commit('JIAN', value)
	// },
	jiaOdd: function(context, value) {
		// console.log(context, value)
		if (context.state.sum % 2) {
			context.commit('JIA', value)
		}
	},
	jiaWait: function(context, value) {
		// console.log(context, value)
		setTimeout(() => {
			context.commit('JIA', value)
		}, 1000)
	}
}
// 准备mutations用于操作数据state
const mutations = {
	JIA: function(state, value) {
		// console.log(state, value)
		state.sum += value
	},
	JIAN: function(context, value) {
		// console.log(context, value)
		state.sum -= value
	}
}
// 准备state用于存储数据
const state = {
	sum: 0
}

Vue.use(Vuex)
// 创建并暴露store
const store = new Vuex.Store({
	actions: actions,
	mutations: mutations,
	state: state,
})
export default store
