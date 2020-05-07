<template>
	<div id='app'>
		<!--用户来源下拉框-->
		<div id="oo">
			<span class="xiao">根菜单:</span>
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</div>
		<!--是否注册下拉框-->
		<div id="xiala">
			<span>父菜单:</span>
			<el-select v-model="value2" placeholder="请选择">
				<el-option v-for="item in oo" :key="item.value2" :label="item.label2" :value="item.value2">
				</el-option>
			</el-select>
		</div>

		<!--是否活动选择-->
		<div id="shuru">
			<span class="kecheng">课程名称</span>
			<div id="ii">
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
		</div>

		<!--搜索框-->
		<div id="sou">
			<span>搜索</span>
		</div>
		<div id="hai">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
				<el-table-column prop="address" label="菜单类型" width="200">
				</el-table-column>
				<el-table-column prop="xiaoqu" label="菜单名称">
				</el-table-column>
				<el-table-column prop="nianji" label="父菜单名称">
				</el-table-column>
				<el-table-column prop="price" label="根菜单名称">
				</el-table-column>
				<el-table-column prop="shi" label="家长" width="100">
					<el-checkbox  style='overflow: hidden;margin-left: -60px;'></el-checkbox>	
				</el-table-column>
				<el-table-column prop="active" label="业务教师" width="100">
						<el-checkbox  style='overflow: hidden;margin-left: -60px;'></el-checkbox>
				</el-table-column>
				<el-table-column prop="caozuo" label="授课教师">
					<el-checkbox  style='overflow: hidden;margin-left: -60px;'></el-checkbox>
				</el-table-column>
			</el-table>
		</div>
		<div class="block" id="fenye">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
			 :page-size="100" layout="prev, pager, next, jumper" :total="1000">
			</el-pagination>
		</div>
	</div>
	</div>


</template>

<script scoped>
	export default {
		name: 'quanxian',
		data() {
			return {
				options: [{
						value: '选项1',
						label: '首页'
					}, {
						value: '选项2',
						label: '课程管理'
					}, {
						value: '选项3',
						label: '学员管理'
					}, {
						value: '选项4',
						label: '订单管理'
					}, {
						value: '选项5',
						label: '教师管理'
					}, {
						value: '选项6',
						label: '统计分析'
					}, {
						value: '选项7',
						label: '支付中新'
					}, {
						value: '选项8',
						label: '系统管理'
					},

				],

				oo: [{
					value2: '选项1',
					label2: '首页'
				}, {
					value2: '选项2',
					label2: '课程管理'
				}, {
					value2: '选项3',
					label2: '学员管理'
				}, {
					value2: '选项4',
					label2: '订单管理'
				}, {
					value2: '选项5',
					label2: '教师管理'
				}, {
					value2: '选项6',
					label2: '统计分析'
				}, {
					value2: '选项7',
					label2: '支付中新'
				}, {
					value2: '选项8',
					label2: '系统管理'
				}],

				value: '',
				value2: '',
				input: '',
				tableData: [{
					bianma: '1',
					address: '后台管理',
					xiaoqu: '课程消耗',
					nianji: '课程小号',
					price: "课程管理",
				}, {
					bianma: '2',
					address: '后台管理',
					xiaoqu: '课程消耗',
					nianji: '课程小号',
					price: "课程管理",
					shi: '1'
				}, {
					bianma: '3',
					address: '后台管理',
					xiaoqu: '课程消耗',
					nianji: '课程小号',
					price: "课程管理",
				}, {
					bianma: '4',
					address: '后台管理',
					xiaoqu: '课程消耗',
					nianji: '课程小号',
					price: "课程管理",
				}, , {
					bianma: '5',
					address: '后台管理',
					xiaoqu: '课程消耗',
					nianji: '课程小号',
					price: "课程管理",
				}, , {
					bianma: '6',
					address: '后台管理',
					xiaoqu: '课程消耗',
					nianji: '课程小号',
					price: "课程管理",
				}],
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			open() {
				this.$prompt('课程原价：1500', '提示', {
					confirmButtonText: '保存',
					cancelButtonText: '取消',
				})
			}
		}
	}
</script>
<style scoped>
	#close {
		width: 140px;
		height: 40px;
		background: #5584ff;
		position: absolute;
		margin-top: 110px;
		margin-left: 350px;
		line-height: 40px;
	}

	#close span {
		width: 100%;
		height: 100%;
		display: block;
		text-align: center;
		text-indent: 0px;
	}

	.nei {
		position: absolute;
		margin-top: -285px;
		margin-right: 90px;
	}

	.ding li {
		width: 50%;
		height: 20px;
		line-height: 20px;
		list-style: none;
		display: inline-block;
		font-size: 12px;
		text-indent: 30px;
	}

	.ding li:nth-of-type(7) {
		width: 100%;
	}

	.ding li:nth-of-type(10) {
		width: 100%;
	}

	.ding li:nth-of-type(13) {
		width: 100%;
	}

	.ding li:nth-of-type(1) {
		margin-top: 30px;
	}

	.ding li:nth-of-type(2) {
		margin-top: 30px;
	}

	.ding li:nth-of-type(5) {
		margin-top: 50px;
	}

	.ding li:nth-of-type(6) {
		margin-top: 50px;
	}

	.ding li:nth-of-type(8) {
		margin-top: 50px;
	}

	.ding li:nth-of-type(9) {
		margin-top: 50px;
	}

	.ding li:nth-of-type(11) {
		margin-top: 50px;
	}

	.ding li:nth-of-type(12) {
		margin-top: 50px;
	}

	.ding li:nth-of-type(14) {
		height: 160px;
		width: 100%;
	}

	#app {
		margin-top: 20px;
	}

	#app .xiao {
		color: #a6a6a6;
		margin-left: 50px;
	}

	#app span {
		color: #a6a6a6;
		margin-right: 20px;
	}

	#app span:nth-last-of-type(1) {
		margin-left: 40px;
		margin-right: 1.25rem;
	}

	#ii {
		width: 200px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 740px;
		margin-top: 72px;
	}

	#ii input {
		float: right;
	}

	#sou {
		color: white;
		width: 12%;
		float: right;
		margin-right: 20px;
		border-radius: 3px;
		margin-top: -55px;
		text-align: center;
	}

	#sou span {
		color: white;
		height: 40px;
		background: #5DABEC;
		text-align: center;
		line-height: 40px;
		display: block;
		margin-top: 15px;
		box-shadow: 0px 0px 5px #5DABEC;
	}

	.kecheng {
		position: relative;
		left: 615px;
		top: 80px;

	}

	#hai {
		width: 1280px;
		margin: 0px auto;
		text-align: center;
		margin-top: 20px;
	}

	#xuanze {
		margin-left: 200px;
	}

	#fenye {
		margin-left: 400px;
		margin-top: 20px;
	}

	#shezhi {
		color: blue;
	}

	#shezhi:hover {
		pointer: curcor;
	}

	.el-input {
		width: 200px;
	}

	#shuru {
		position: absolute;
		top: 0px;
		left: 0px;
		margin-top: -10px;
		margin-left: 300px;
	}

	#xiala {
		position: absolute;
		top: 0px;
		left: 0px;
		margin-top: 62px;
		margin-left: 450px;
	}

	#xiaofei {
		position: absolute;
		top: 0px;
		left: 0px;
		margin-top: 62px;
		margin-left: 680px;
	}

	#ii .el-input__inner {
		width: 400px;
	}

	#oo .el-input__inner {
		width: 280px;
	}

	#xiala .el-input__inner {
		width: 280px;
	}
	#oo{
		margin-left: 70px;
	}
</style>
