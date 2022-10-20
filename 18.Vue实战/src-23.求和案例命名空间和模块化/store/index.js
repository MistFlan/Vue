// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'

import countOptions from './count.js'
import userOptions from './user.js'

Vue.use(Vuex)
// 创建并暴露store
const store = new Vuex.Store({
	modules: {
		countAbout: countOptions,
		userAbout: userOptions
	}
})
export default store
