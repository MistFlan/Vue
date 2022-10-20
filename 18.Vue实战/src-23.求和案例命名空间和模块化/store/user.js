import axios from 'axios'
import {
	nanoid
} from 'nanoid'
export default {
	namespaced: true,
	actions: {
		addAdmin(context, value) {
			if (value.name.indexOf('f') === 0) {
				context.commit('ADD_USER', value)
			} else {
				alert('用户名错误')
			}
		},
		addRadomUser(context) {
			axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
				response => {
					context.commit('ADD_USER', {
						id: nanoid(),
						name: response.data
					})
				},
				error => {
					alert(error.message)
				}
			)
		}
	},
	mutations: {
		ADD_USER: function(state, value) {
			state.userList.unshift(value)
		}
	},
	state: {
		userList: [{
			id: '001',
			name: 'ayu'
		}, {
			id: '002',
			name: 'hajiang'
		}]
	},
	getters: {
		firstUserName(state) {
			return state.userList[0].name
		}
	}
}
