<template>
	<div></div>
</template>

<script>
export default {
	name: 'tihuan',
	mounted(){
		let query = {}
		if(this.$route.query.query){
			query = JSON.parse(this.$route.query.query)
		}
		console.log(this.$route.query.path)
		this.$router.replace({path:this.$route.query.path,query:query})
	},
	activated(){
		let query = {}
		if(this.$route.query.query){
			query = JSON.parse(this.$route.query.query)
		}
		console.log(this.$route.query.path)
		this.$router.replace({path:this.$route.query.path,query:query})
	},
	methods: {
		
	},
}
</script>
