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
	*{ 
        margin: 0;
        padding: 0;
    }
	.dongxiang{
		float: right;
		width: 30%;
		background: #F7F7F7;
	}
	.bt{
		width: 90%;
		margin: 0 auto;
		margin-top: 20px;
		overflow: hidden;
	}
	.bt span{
		display: block;
		width: 20px;
		height: 20px;
		background: #000000;
		float: left;
	}
	.bt a{
		text-decoration: none;
		color: #000;
		font-size: 16px;
		float: left;
		margin-left: 15px;
	}
	.bt button{
		border: 1px solid black;
		outline: none;
		width: 66px;
		height: 24px;
		float: right;
		background: #F7F7F7;
	}
	.nr{
		width: 90%;
		margin: 0 auto;
	}
	.nr p{
		width: 100%;
		font-size: 16px;
		margin: 30px 0;
		color: black;
	}
	.nr span{
		font-size: 14px;
		color: gainsboro;
	}
</style>