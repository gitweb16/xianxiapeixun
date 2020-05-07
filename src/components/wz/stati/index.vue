<template>
	<div>
		<el-row class="tac">
			<el-col :span="4" class="tacs">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :default-openeds="['1']">
					<el-submenu index="1">
						<template slot="title" class="tit">
							<span class="tites">统计分析</span>
						</template>
						<el-menu-item-group>
							<router-link tag="el-menu-item" index="1-1" to="/header/stati/Kaoqing">考勤流水分析</router-link>
							<router-link tag="el-menu-item" index="1-2" to="">报班量统计分析</router-link>
							<router-link tag="el-menu-item" index="1-3" to="/header/stati/Tupian">报班金额统计分析</router-link>
							<router-link tag="el-menu-item" index="1-4" to="/header/stati/teas">教师业务流水分析</router-link>

							<router-link tag="el-menu-item" index="1-5" to="">学员支付流水分析</router-link>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" :offset="4" class="views">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
	</div>

</template>

<script>
	export default {
		name: "stati",
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
		/* background-color: black; */
		height: 885px;
		overflow: auto;
		padding: 0px !important; 
		position: absolute;
		border: 1px solid red;
	/* 	padding-left: 20px;
		padding-top: 0px !important;
		margin-top: 0px !important; */
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
			height: 885px;
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
