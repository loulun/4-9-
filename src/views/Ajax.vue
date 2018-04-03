<template>
	<div>
		{{keyword}}
		
	</div>

</template>
<script>
	export default {
	created(){
			this.$http.get("http://localhost:3001").then(e=>this.arr=e.body)
		},
		data(){
			return {
				keyword:"hello vue",
				arr:[]
			}
		}
		
	}
</script>

<style>
</style>