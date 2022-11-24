const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath: '/learn/',
	transpileDependencies: true,
	lintOnSave: false,
	pages: {
		index: {
			entry: 'src/main.js'
		}
	},
	lintOnSave: false,
	// 开启代理服务器 方式一
	// devServer: {
	// 	proxy: 'http://localhost:8090'
	// }
	devServer: {
		proxy: {
			'/user': {
				target: 'http://localhost:8090',
				pathRewrite: {
					'^/user': ''
				},
				// ws: true, //用户支持ws
				// changeOrigin: true
			},
			'/car': {
				target: 'http://localhost:8091',
				pathRewrite: {
					'^/car': ''
				},
				// ws: true, //用户支持ws
				// changeOrigin: true
			}
		}
	}
})
