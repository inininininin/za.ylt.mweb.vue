<template>
	<div></div>
</template>

<script>
export default {
	name: 'tihuan',
	mounted(){
		let query = this.getQuery()
		console.log(this.$route.query.path)
		this.$router.replace({path:this.$route.query.path,query:query})
	},
	activated(){
		let query = this.getQuery()
		console.log(this.$route.query.path)
		this.$router.replace({path:this.$route.query.path,query:query})
	},
	methods: {
		getQuery(){
			let query = {}
			if(this.$route.query.query){
				query = JSON.parse(this.$route.query.query)
			}else{
				query = JSON.parse(this.$route.query)
				return query
			}
			return query
		}
	},
}
</script>
