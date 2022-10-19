<template>
	<!-- 
		配置代理服务器
		方法一
			在vue.config.js中添加配置
			devServer: {
				proxy: 'http://localhost:8090'
			}
		优点 配置简单 请求资源时直接发给客户端端口即可
		缺点  不能配置多个代理 不能灵活控制请求是否通过代理
		当请求前端不存在的资源时 请求会转发给服务器
		
		方法二
			在vue.config.js中添加配置
			devServer: {
				proxy: {
					'/user': { //匹配所有以/user开口的请求路径
						target: 'http://localhost:8090', // 代理目标的基础路径
						pathRewrite: {
							'^/user': '' // 重写向服务器请求的接口路径
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
		优点 可以配置多个代理 可以灵活控制请求是否通过代理
		缺点 配置较为繁琐 请求资源时必须添加前缀
		
		引入axios npm i axios
	 -->
	<div>
		<button @click="getUser">获取用户信息</button>
		<button @click="getCar">获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'App',
		methods: {
			getUser() {
				axios.get('http://127.0.0.1:8080/user/getUser').then(
					response => {
						console.log('请求成功', response.data)
					},
					error => {
						console.log('请求失败', error.message)
					}
				)
			},
			getCar() {
				axios.get('http://127.0.0.1:8080/car/getCar').then(
					response => {
						console.log('请求成功', response.data)
					},
					error => {
						console.log('请求失败', error.message)
					}
				)
			}
		}
	}
</script>

<style>
</style>
