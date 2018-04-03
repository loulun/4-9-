<template>
  <div id="app">
    <div class="top">
       <div class="top1">
          <div class="top-l">
          <span>REALSTATE地产，您居家置业最信赖的地产！</span>
          <img src="./assets/a1.jpg">
      </div>
       </div>
    </div>
    <div class="header">
      <div class="logo">
      	<img src="./assets/logo.png">
      </div>
      <div class="nav">
      	<router-link to="/">首页</router-link> 
        <router-link to="/about">全新楼盘</router-link> 
        <router-link to="/three">二手楼盘</router-link> 
        <router-link to="/quanxin">全新商铺</router-link> 
        <router-link to="/dongtai">楼市动态</router-link> 
        <router-link to="/lianxi">联系我们</router-link>
      </div>
      <div class="phone">
      	<img src="./assets/a2.jpg">
      	<span>008-6666 6666</span>
      	<a href="#">咨询电话</a>
      </div>
      
    </div>
    <router-view/>
    <!--footer-->
      <div class="footer">地产REALSTATE  © 2020 All Rights Reserved.
      	<a href="#">^</a></div>
      
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
.top{
  width: 100%;
  height: 64px;
  background: #262626;
}
.top1{
  width: 88%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.top1 span{
	float: left;
	line-height: 64px;
	color: #8e8e8e;
}
.top1 img{
	float: right;
	height: 100%;
}
.header{
  width: 88%;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
}
.logo{
	width: 20%;
	float: left;
	margin-top: 24px;;
}
.nav{
	width: 60%;
	float: left;
  text-align: center;
  line-height: 100px;
}
.nav a{
	text-decoration: none;
	font-size: 14px;
	color: #2c3e50;
	padding: 5px;
	margin-right: 30px;
	
}
.nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 1px solid black;
}
.phone{
	width: 20%;
	float: right;
	line-height: 100px;
}
.phone img{
	float: left;
	margin-top: 40px;
}
.phone span{
	float: left;
	margin-left: 10px;
	font-size: 16px;
}
.phone a{
	text-decoration: none;
	float: right;
	margin-top: 35px;
	width: 86px;
	height: 31px;
	text-align: center;
	line-height: 31px;
	background: blue;
	border-radius: 5px;
	color: #fff;
}
.footer{
	width: 100%;
	line-height: 80px;
	color: gray;
	font-size: 14px;
	background: #262626;
	text-align: center;
	position: relative;
}
.footer a{
	text-decoration: none;
	position: absolute;
	top: 0;
	right: 30px;
	color: #fff;
	font-size: 26px;
}
</style>
