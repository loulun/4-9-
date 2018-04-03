<template>
	<div class="about">
		<div class="new">
			<p>首页 ＞ 全新楼盘</p>
		</div>
		<div class="con">
			<div class="con-text">
				<span></span>
				<p>全新楼盘
					<a href="#"> / NEW APARTMENT</a>
				</p>
					<ul id="ul" v-for='i in arr'>
						<img :src="i.img">
						<li>
							<a href="#">{{i.title}}</a>
						</li>
						<li>地区：{{i.diqu}}</li>
						<li>户型：{{i.hux}}</li>
						<li>价格：{{i.jiag}}</li>
					</ul>
					<ul id="ul" v-for='i in arr'>
						<img :src="i.img">
						<li>
							<a href="#">{{i.title}}</a>
						</li>
						<li>地区：{{i.diqu}}</li>
						<li>户型：{{i.hux}}</li>
						<li>价格：{{i.jiag}}</li>
					</ul>
					<ul id="ul" v-for='i in arr'>
						<img :src="i.img">
						<li>
							<a href="#">{{i.title}}</a>
						</li>
						<li>地区：{{i.diqu}}</li>
						<li>户型：{{i.hux}}</li>
						<li>价格：{{i.jiag}}</li>
					</ul>
			</div>
			<!--右边-->
		<!--<div class="dongxiang">-->
			<div class="dongxiang-right">
		  <input type="text" placeholder="输入楼盘名称">
  		<List></List>
  		</div>
		<!--</div>-->
		</div>
		
		
	</div>
</template>

<script type="text/javascript">
import List from '@/components/List.vue'
	export default {
		props: {
			
		},
		name: 'right',
		components: {
			List,
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

<style type="text/css">
	* {
		margin: 0;
		padding: 0;
	}
	.new {
		width: 100%;
		height: auto;
		background: #f4f4f4;
		overflow: hidden;
	}
	.new p {
		width: 88%;
		margin: 0px auto;
		text-align: left;
		line-height: 80px;
	}
	.con {
		width: 88%;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.con-text {
		width: 65%;
		float: left;
		margin-top: 50px;
		overflow: hidden;
	}
	.con-text span {
		display: block;
		width: 20px;
		height: 20px;
		background: #000000;
		float: left;
	}
	.con-text p {
		width: 90%;
		color: #000;
		font-size: 16px;
		font-weight: bold;
		float: left;
		margin-left: 15px;
	}
	.con-text a {
		text-decoration: none;
		font-size: 12px;
		color: #000;
	}
	#ul{
		width: 32.55%;
		float: left;
		margin-top: 40px;
		margin-left: 6px;
		overflow: hidden;
	}
	#ul li {
		float: left;
		margin-left: 15px;
		line-height: 18px;
		text-align: left;
		width: 100%;
		list-style: none;
	}
	#ul li a {
		text-decoration: none;
		float: left;
		margin-top: 20px;
		font-size: 18px;
		font-weight: bold;
		color: #000000;
	}
	.dongxiang{
		overflow: hidden;
	}
	 .dongxiang-right{
	 	width: 30%;
	 	float: right;
	 	background: #F7F7F7;
	 }

	
	.bt{
		margin: 0 auto;
		overflow: hidden;
		padding-top: 10px;
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
	.dongxiang-right input{
		width: 240px;
		height: 40px;
		/*margin: 20px;*/   
	}
</style>