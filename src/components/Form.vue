<template>
	<div class="form">
		<div class="form-text">
			<div class="lianx"></div>
			<p>在线表单 - FORM</p>
		</div>
		<div class="form-input">
			<input type="text" placeholder="称呼"/>
			<input type="text" placeholder="邮箱"/>
			<input type="text" placeholder="电话"/>
			<textarea placeholder="内容"></textarea>
			<input type="text" placeholder="验证码"/>
			<img src="../assets/yzm.jpg">
			<button>提交</button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.form{
		width: 30%;
		background-color: #F7F7F7;
		float: right;
		font-size: 14px;
		margin-top: 10px;
	}
	.form-text{
		height: 70px;
		line-height: 70px;
	}
	.lianx{
		width: 20px;
		height: 20px;
		background-color: #000000;
		float: left;
		margin: 25px 15px;
	}
	.form-input input{
		border: none;
		width: 90%;
		height: 38px;
		margin-left: 5%;
		text-indent: 10px;
		border-bottom: 1px solid #ccc;
		background-color: #F7F7F7;
		outline: none;
	}
	.form-input textarea{
		border: none;
		width: 90%;
		height: 70px;
		margin-left: 5%;
		text-indent: 10px;
		border-bottom: 1px solid #ccc;
		background-color: #F7F7F7;
		line-height: 40px;
		outline: none;
	}
	.form-input img{
		margin: 5px 5%;
	}
	.form-input button{
		width: 110px;
		height: 32px;
		background-color: #000000;
		border: none;
		display: block;
		color: #ccc;
		font-size: 12px;
		outline: none;
		margin-left: 5%;
		margin-top: 3px;
	}
</style>