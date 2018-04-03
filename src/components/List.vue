<template>
  		<div class="dongxiang">
  			<div class="bt">
  				<span></span>
  				<a href="#">楼市动向 - NEWS</a>
  				<button>阅读更多</button>
  			</div>
  			<div class="nr" v-for='i in arr'>
  				<p>{{i.zhong}}<br>
                <span>{{i.ying}}</span></p>
  			</div>
  		</div>
</template>

<script type="text/javascript">
	export default {
		props: {

		},
		data() {
			return {
				arr: []
			}
		},
		created() {
			this.$http.get('http://localhost:3001/list')
				.then(e => this.arr = e.body)
		}
	}
</script>

<style>
	
	
</style>