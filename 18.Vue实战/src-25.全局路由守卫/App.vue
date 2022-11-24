<template>
	<!-- 
	
	 -->
	<div>
		<banner></banner>
		<div>
			<!-- <a href="./about.html">About</a> -->
			<!-- <br /> -->
			<!-- <a href="./home.html">Home</a> -->
			
			<div class="about">
				<router-link :replace="true" :to="{name:'guanyu'}" active-class="acive">About</router-link>
			</div>
			<br />
			<div class="home">
				<router-link replace to="/home" active-class="acive">Home</router-link>
			</div>
		</div>

		<br />
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import banner from './components/banner.vue'

	export default {
		name: 'App',
		components: {
			banner
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style>
	.about {
		background-color: orange;
	}

	.home {
		background-color: rgb(87, 78, 89);
	}

	.acive {
		background-color: aliceblue;
	}
</style>
