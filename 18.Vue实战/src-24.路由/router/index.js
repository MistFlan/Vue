import VueRouter from 'vue-router'
import about from '../pages/about'
import home from '../pages/home'
import news from '../pages/news'
import message from '../pages/message'
import detail from '../pages/detail'

export default new VueRouter({
	routes: [{
		name: 'guanyu',
		path: '/about',
		component: about
	}, {
		path: '/home',
		component: home,
		children: [{
			path: 'news',
			component: news,
		}, {
			path: 'message',
			component: message,
			children: [{
				name: 'xiangqing',
				path: 'detail',
				// path: 'detail/:id/:title', // 通过这种方法指定参数
				component: detail,
				// 三、props的对象写法 所有定义的属性都会以props的形式传递给detail组件
				// 只能传递死数据
				// props: {
				// 	a: '001',
				// 	b: '消息1'
				// }

				// 四、props的布尔值写法 如果布尔值为真 就会把该路由组件收到的params参数 以props形式传给detail组件
				// props: true

				// 五、props的函数写法 需要配合query传参使用
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
