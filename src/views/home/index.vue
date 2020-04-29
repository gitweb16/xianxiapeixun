<template>
	<div>
		<el-row class="header">
			<el-col :span="2">
				<el-avatar icon="el-icon-user-solid" :size="30" class="icons"></el-avatar>
			</el-col>

			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top" tabindex="0">课程管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top" tabindex="0">班级管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top" tabindex="0">学员管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top" tabindex="0">订单管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top" tabindex="0">教师管理</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top" tabindex="0">统计分析</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top" tabindex="0">支付中心</router-link>
			</el-col>
			<el-col :span="2">
				<router-link tag="div" to="/" class="header-top" tabindex="0">系统管理</router-link>
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


		<el-row class="tac">
			<el-col :span="4" class="tacs">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :default-openeds="['1','2','3']" >
					<el-submenu index="1" >
						<template slot="title" class="tit">
							<span class="tites">账号管理</span>
						</template>
						<el-menu-item-group>
							<router-link tag="el-menu-item" index="1-1" to="/">家长账号管理</router-link>
							<router-link tag="el-menu-item" index="1-2" to="/">教师账号管理</router-link>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<span class="tites">系统配置</span>
						</template>
						<el-menu-item-group>
							<router-link tag="el-menu-item" index="1-1" to="/">菜单管理</router-link>
							<router-link tag="el-menu-item" index="1-2" to="/">权限管理</router-link>
							<router-link tag="el-menu-item" index="1-3" to="/">组织架构管理</router-link>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<span class="tites">系统数据</span>
						</template>
						<el-menu-item-group>
							<router-link tag="el-menu-item" index="1-1" to="/">数据字典</router-link>
							<router-link tag="el-menu-item" index="1-2" to="/">日历管理</router-link>
							<router-link tag="el-menu-item" index="1-3" to="/">通知管理</router-link>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" :offset="2"  class="views">
				 <keep-alive>
					 <router-view></router-view>
				 </keep-alive>
			</el-col>
		</el-row>
	</div>

</template>

<script>
	export default {
		name: "home",
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped>
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
