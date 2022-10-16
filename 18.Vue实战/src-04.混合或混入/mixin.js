export const mixin = {
	methods: {
		showName() {
			alert(this.name)
			console.log(this.x)
		}
	},
	mounted() {
		console.log("hello")
	}
}

export const mixin1 = {
	data() {
		return {
			x: 100,
			y: 20
		}
	}
}
