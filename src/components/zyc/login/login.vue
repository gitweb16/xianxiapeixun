<template>
	<div id="app">
		<div id="houtai">
			<p class="p">后台管理系统</p><br>
			<input type="text" id="yonghu" v-model="yhm" placeholder="请输入用户名称" style="border-radius: 8px;width: 266px;height: 44px;" /><br><br>
			<input type="password" id="password" placeholder="请输入登录密码" style="border-radius: 8px;width: 266px;height: 44px;" /><br><br>
			<p id="login"v-on:click="denglu()" >登录{{yhm}}</p>
		</div>
		<div id="wenzi">Copyright@&nbsp;All&nbsp;Rights&nbsp;Reserved</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		data: {
			yhm:"",
		},
		methods: {
			denglu: function() {
				if (this.yhm==undefined||this.yhm=="") {
					alert("请输入用户");
					return false;
				}else if(this.yhm=="rua"){
					alert("登陆成功");
				}else{
					alert("账号或密码输入错误")
				}
			}
		}
	}
</script>

<style export>
	* {
		cursor: pointer;
		margin: 0px;
		padding: 0px;
	}

	#app{
		width: 1510px;
		height: 623px;
		background: #2f78ff;
	}

	#houtai {
		position: absolute;
		top: 120px;
		margin-left: 588px;
		background-color: white;
		width: 350px;
		height: 416px;
		border-radius: 25px;
		text-align: center;
	}

	.p {
		padding-top: 82px;
		font-size: 25px;
		color: #2f78ff;
	}

	#login {
		margin-left: 40px;
		line-height: 48px;
		text-align: center;
		width: 266px;
		height: 48px;
		color: white;
		background-color: #2f78ff;
		border-radius: 7px;
	}

	#wenzi {
		color: white;
		padding-top: 580px;
		text-align: center;
	}
</style>
