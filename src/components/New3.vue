<template>
	<div class="new">
		<p><span>二手楼盘</span><br> - Second Hand -</p>
		<div class="lp" v-for='i in arr'>
			<img :src="i.img">
			<ul>
				<li>
					<a href="#">{{i.title}}</a>
				</li>
				<li>地区：{{i.diqu}}</li>
				<li>户型：{{i.hux}}</li>
				<li>价格：{{i.jiag}}</li>
			</ul>
		</div>
		<button>浏览更多新楼盘</button>
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
			this.$http.get('http://localhost:3001/three')
				.then(e => this.arr = e.body)
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.new {
		width: 66%;
		float: left;
		background: #F7F7F7;
		text-align: center;
		line-height: 36px;
	}
	.new span {
		font-size: 24px;
		font-weight: bolder;
	}
	.new p {
		font-size: 16px;
	}
	.lp {
		width: 32.555%;
		float: left;
		margin-left: 6px;
		background: #fff;
	}
	.lp img {
		width: 100%;
		height: 173px;
	}
	ul li {
		float: left;
		margin-left: 15px;
		line-height: 18px;
		text-align: left;
		width: 100%;
		list-style: none;
	}
	ul li a {
		text-decoration: none;
		float: left;
		margin-top: 20px;
		font-size: 18px;
		font-weight: bold;
		color: #000000;
	}
	.new button {
		margin: 40px 0;
		border: 1px solid blue;
		outline: none;
		width: 136px;
		height: 38px;
		cursor: pointer;
		background: #F7F7F7;
	}
	.new button:hover {
		border: 1px solid #000000;
	}
</style>