<template>
	<div>
		<el-row class="header">
			<el-col :span="2">
				<el-avatar icon="el-icon-user-solid" :size="30" class="icons"></el-avatar>
			</el-col>

			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top">课程管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top">班级管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top">学员管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top">订单管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top">教师管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top">统计分析</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top">支付中心</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top">系统管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-ico">
					<i class="el-icon-user-solid" style="background: #cccccc;color: #464c5b;border-radius: 50%;"></i>
					账户设置</router-link>
			</el-col>
			<el-col :span="4">
				<router-link tag="div" to="/" class="header-ico">
					<i class="el-icon-orange" style="background: #cccccc;color: #464C5B;border-radius: 50%;"></i>
					退出登录</router-link>
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="6"></el-col>
			<el-col :span="18"></el-col>
		</el-row>
	</div>

</template>

<script>
	export default {
		name: "home"
	}
</script>

<style scoped>
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

	}

	.header-top:active {
		color: white;
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
