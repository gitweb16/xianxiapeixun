<template>
	<div>
		<el-row class="header">
			<el-col :span="2">
				<el-avatar icon="el-icon-user-solid" :size="30" class="icons"></el-avatar>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/header/course" class="header-top" tabindex="0">课程管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/header/mana" class="header-top" tabindex="0">班级管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/header/student" class="header-top" tabindex="0">学员管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/header/order" class="header-top" tabindex="0">订单管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/header/teacher" class="header-top" tabindex="0">教师管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/header/stati" class="header-top" tabindex="0">统计分析</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/header/pay" class="header-top" tabindex="0">支付中心</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/header/system" class="header-top" tabindex="0">系统管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-ico">
					<i class="el-icon-user-solid" style="background: #cccccc;color: #464c5b;border-radius: 50%;"></i>
					账户设置</router-link>
			</el-col>
			<el-col :span="4">
				<template>
					<button type="text" class="header-ico iconss" @click="open">
						<i class="el-icon-orange" style="background: #cccccc;color: #464C5B;border-radius: 50%;"></i>
						退出登录
					</button>
				</template>
			</el-col>
		</el-row>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>


	</div>

</template>

<script>
	export default {
		name: "header",
		methods: {
			open() {
				this.$confirm('确认退出登录么？', '退出提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(action => {
					this.$message({
						type: 'warning',
						message: '退出成功',
					
					});
					if (action ==='confirm') {
						this.$router.push({path:'../../login'})     
						// this.$router.replace({path:'/header/student'})
						//   设置登录页面	
					}
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '退出取消',

					});
				});
			}

		},
	}
</script>

<style scoped>
	.iconss {
		background: transparent !important;
		outline: none;
		border: 0px solid transparent;
	}

	.views {
		background-color: transparent;
		height: 557px;
		overflow: auto;

	}

	.tites {
		color: #999999 !important;
	}

	.tit {
		background: #999999 !important;
		border-bottom: 1px solid #999999;

	}

	.el-submenu {
		background: #f9f9f9 !important;
		border-bottom: 1px solid #f2f2f2 !important;
	}


	.el-menu-item:focus {
		color: #48c9b0 !important;

	}

	.el-menu-item {
		background-color: transparent !important;
	}


	.tac {
		margin: 0px !important;
		padding: 0px !important
	}

	.tacs {
		position: absolute;
		height: 557px;
		overflow: auto;
	}

	.header {
		height: 52px;
		line-height: 52px;
		background: #464c5b;

	}

	.icons {
		margin-top: 10px;
		margin-left: 21px;
		margin-right: 60px;
	}

	.header-top {
		cursor: pointer;
		color: #cccccc;
		font-size: 16px;
		text-align: center;

	}

	.header-top:focus {
		color: white;
		outline: none;
		background: #1abc9c !important;
	}

	.header-ico {
		margin-left: 50px;
		color: #CCCCCC;
		cursor: pointer;
		font-size: 14px;

	}

	.header-ico:active {
		color: white;
	}

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
