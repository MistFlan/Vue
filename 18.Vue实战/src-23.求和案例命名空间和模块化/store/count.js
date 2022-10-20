export default {
	namespaced: true,
	actions: {
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
	},
	mutations: {
		JIA: function(state, value) {
			// console.log(state, value)
			state.sum += value
		},
		JIAN: function(state, value) {
			// console.log(state, value)
			state.sum -= value
		}
	},
	state: {
		sum: 0,
		name: 'flan',
		weather: '晴'
	},
	getters: {
		updatedSum(state) {
			return state.sum * 10
		}
	}
}
