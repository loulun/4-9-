<template>
  		<div class="tu">
  			<img src="../assets/c1.jpg" id="img1">
  			<img src="../assets/c2.jpg" id="img2">
  			<img src="../assets/c3.jpg" id="img3">
  			<img src="../assets/c4.jpg" id="img4">
  		</div>
  		
</template>


<style>
	*{
        margin: 0;
        padding: 0;
    }
.tu {
		width: 66%;
		float: left;
		overflow: hidden;
		margin-bottom: 40px;
	}
	.tu img {
		width: 49%;
		float: left;
	}
	.tu #img2,#img4 {
		float: right;
	}
	.tu #img3,#img4 {
		margin-top: 13px;
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
		cursor: pointer;
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
	}
</style>