// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'

// 组件中读取vuex中的数据 $store.state.sum
// 组件中修改vuex中的数据 $store.dispatch('actions中的方法名', 数据)
//  或 $store.commit('mutations中的方法名', 数据)
// 如果没有网络请求或其他业务处理 可以跳过actions 直接调用matations的commit方法

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
	JIAN: function(state, value) {
		// console.log(state, value)
		state.sum -= value
	},
	ADD_USER: function(state, value) {
		state.userList.unshift(value)
	}
}
// 准备state用于存储数据
const state = {
	sum: 0,
	name: 'flan',
	weather: '晴',
	userList: [{
		id: '001',
		name: 'ayu'
	}, {
		id: '002',
		name: 'hajiang'
	}]
}

// 准备getters用于加工存储数据
const getters = {
	updatedSum(state) {
		return state.sum * 10
	}
}

Vue.use(Vuex)
// 创建并暴露store
const store = new Vuex.Store({
	actions: actions,
	mutations: mutations,
	state: state,
	getters: getters
})
export default store
