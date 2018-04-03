<template>
	<div class="home">
		<Lunbo></Lunbo>
		<div class="content">
		<Tu></Tu>
		<List></List>
		<New></New>
		<Lxwm></Lxwm>
		<Form></Form>
		<New2></New2>
		<Address></Address>
		<New3></New3>
		
		</div>
	</div>
</template>

<script>
	import Lunbo from '@/components/Lunbo.vue'
	import Tu from '@/components/Tu.vue'
	import New from '@/components/New.vue'
	import New2 from '@/components/New2.vue'
	import New3 from '@/components/New3.vue'
	import List from '@/components/List.vue'
	import Lxwm from '@/components/Lxwm.vue'
	import Form from '@/components/Form.vue'
	import Address from '@/components/Address.vue'
	
	export default {
		name: 'home',
		components: {
			Lunbo,
			Tu,
			New,
			New2,
			New3,
			List,
			Lxwm,
			Form,
			Address
		},
		data() {
			return {
				arr: []
			}
		},
		methods: {

		},
		created() {
			this.$http.get('http://localhost:3001')
				.then(e => this.arr = e.body)
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.home {
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.content {
		width: 88%;
		margin: 0 auto;
		margin-top: 50px;
		background: red;
	}
	.tu {
		width: 65%;
		float: left;
		overflow: hidden;
	}
	
	.tu img {
		width: 49%;
		float: left;
	}
	
	.tu #img2,#img4 {
		margin-left: 2%;
	}
	
	.tu #img3,#img4 {
		margin-top: 13px;
	}
	.new {
		width: 68%;
		float: left;
		margin-top: 40px;
		background: #F7F7F7;
		text-align: center;
		padding-top: 30px;
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
		height: 300px;
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
	}
</style>