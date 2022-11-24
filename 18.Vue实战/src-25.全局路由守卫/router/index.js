import VueRouter from 'vue-router'
import about from '../pages/about'
import home from '../pages/home'
import news from '../pages/news'
import message from '../pages/message'
import detail from '../pages/detail'

const router = new VueRouter({
	routes: [{
		name: 'guanyu',
		path: '/about',
		component: about,
		meta: {
			title: '关于'
		}
	}, {
		name: 'zhuye',
		path: '/home',
		component: home,
		meta: {
			title: '主页'
		},
		children: [{
			name: 'xinwen',
			path: 'news',
			component: news,
			meta: {
				isAuth: true,
				title: '新闻'
			},
		}, {
			name: 'xiaoxi',
			path: 'message',
			component: message,
			meta: {
				isAuth: true,
				title: '消息'
			},
			children: [{
				name: 'xiangqing',
				path: 'detail',
				component: detail,
				meta: {
					title: '详情'
				},
				props($route) {
					return {
						id: $route.query.id,
						title: $route.query.title,
					}
				}
			}]
		}]
	}]
})

// 全局前置路由守卫 初始化时执行 路由切换之前执行
router.beforeEach((to, from, next) => {
	console.log(to, from)
	// if (to.path === '/home/news' || to.path === '/home/message') {
	// 	if (localStorage.getItem('org') === 'qq') {
	// 		next()
	// 	} else {
	// 		alert('您不属于此机构 无法查看')
	// 	}
	// } else {
	// 	next()
	// }

	if (to.meta.isAuth) {
		if (localStorage.getItem('org') === 'qq') {
			next()
		} else {
			alert('您不属于此机构 无法查看')
		}
	} else {
		next()
	}
})

// 全局后置路由守卫 初始化时执行 路由切换之后执行
router.afterEach((to, from) => {
	console.log(to, from)
	document.title = to.meta.title || 'Vue Router'
})

export default router
