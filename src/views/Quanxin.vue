<template>
	<div class="about">
		<div class="new">
			<p>首页 ＞ {{ll}}</p>
		</div>
		<!--<div v-for="i in state">
			<router-link :to="'/detail/'+i.id">
				<Item :content="i" />
			</router-link>
		</div>-->
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
					<!--<ul id="ul" v-for='i in arr'>
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
					</ul>-->
			</div>
  		<List></List>
		</div>
	</div>
</template>

<script type="text/javascript">
	import List from '@/components/List.vue'
	import Item from './Item.vue'

	export default {
//		data() {
//				return {
//					state: [],
//					ll: ""
//				}
//			},
//			components: {
//				Item,
//				List
//			},
//			watch: {
//				arr: function() {},
//				'$route' () {
//					if(this.$route.params.fenlei == 1) {
//						this.ll = "全新楼盘"
//					}
//					if(this.$route.params.fenlei == 2) {
//						this.ll = "二手楼盘"
//					}
//					if(this.$route.params.fenlei == 3) {
//						this.ll = "全新商铺"
//					}
//					this.$http.post('http://localhost:3001', {
//						fenlei: this.$route.params.fenlei
//					}, {
//						emulateJSON: true
//					}).then(e => this.state = e.body)
//				}
//			},
//			created() {
//				if(this.$route.params.fenlei == 1) {
//					this.ll = "全新楼盘"
//				}
//				if(this.$route.params.fenlei == 2) {
//					this.ll = "二手楼盘"
//				}
//				if(this.$route.params.fenlei == 3) {
//					this.ll = "全新商铺"
//				}
//				this.$http.post('http://localhost:3001/', {
//					fenlei: this.$route.params.fenlei
//				}, {
//					emulateJSON: true
//				}).then(e => this.state = e.body)
//			},

				props: {
					
				},
//				name: 'right',
				components: {
					List,
				},
				data() {
					return {
						arr: []
					}
				},
				created() {
					this.$http.post('http://localhost:3001/')
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
	}
	
	.new p {
		width: 88%;
		margin: 0px auto;
		text-align: left;
		line-height: 80px;
		margin-bottom: 50px;
	}
	
	.con {
		width: 88%;
		margin: 0 auto;
		overflow: hidden;
		margin-bottom: 180px;
	}
	
	.con-text {
		width: 65%;
		float: left;
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
	
	#ul {
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
</style>
