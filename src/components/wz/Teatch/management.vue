<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">教室管理</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="dialogFormVisible =true">新增校区</el-button>
		</div>
		<div>
			<ul class="uls">
				<li><span>校区：</span>
					<el-select v-model="value" clearable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</li>
				<li>
				</li>
				<li style="margin-left: 200px;text-align: right;">
					<el-button type="primary">搜索</el-button>
				</li>
			</ul>
		</div>
		<div class="center">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="date" label="校区" width="375">
				</el-table-column>
				<el-table-column prop="name" label="教师名称" width="375">
				</el-table-column>
				<el-table-column prop="address" label="教师位置" width="375">
				</el-table-column>
				<el-table-column prop="money" label="操作" width="375">
				</el-table-column>
			</el-table>
			<div style="text-align: center;margin-top: 30px;">
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>

		<el-dialog :visible.sync="dialogFormVisible" style="width: 1200px!important;margin: 0px auto;">
			<el-form :model="form">
				<el-form-item label="校区" :label-width="formLabelWidth">
					<el-select v-model="values" clearable placeholder="请选择">
						<el-option v-for="item in optionss" :key="item.values" :label="item.labels" :value="item.values">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="教师名称" :label-width="formLabelWidth">
				      <el-input placeholder="请输入" v-model="names"></el-input>     
				</el-form-item>
				<el-form-item label="教师位置" :label-width="formLabelWidth">
				      <el-input placeholder="请输入" v-model="dates"></el-input>     
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: "management",
		data() {
			return {
				names:'',
				dates:'',
				value:'',
				values:'',
				optionss: [{
						values: '选项1',
						labels: '城南校区'
					}, {
						values: '选项2',
						labels: '水榭校区'
					}, {
						values: '选项3',
						labels: '世贸校区'
					}, {
						values: '选项4',
						labels: '花之南校区'
					}, {
						values: '选项5',
						labels: '滨江校区'
					},
					{
						values: '选项5',
						labels: '九桐桥校区'
					},
					{
						values: '选项5',
						labels: '万达校区'
					}
				],
				options: [{
						value: '选项1',
						label: '城南校区'
					}, {
						value: '选项2',
						label: '水榭校区'
					}, {
						value: '选项3',
						label: '世贸校区'
					}, {
						value: '选项4',
						label: '花之南校区'
					}, {
						value: '选项5',
						label: '滨江校区'
					},
					{
						value: '选项5',
						label: '九桐桥校区'
					},
					{
						value: '选项5',
						label: '万达校区'
					}
				],
				tableData: [{
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					},
					{
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					},
					{
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}, {
						date: '滨江校区',
						name: 'B1024',
						address: 'B1042',
						money: '删除',
					}
				],
				gridData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'
			}

		}
	}
</script>

<style>
	.jinE {
		width: 100%;
		/* 	margin-left:10px; */
		height: 40px;
		font-size: 12px;
		color: darkgray;
		line-height: 35px;
		background-color: #f9f9f9;
		z-index: 3;
		margin-bottom: 40px;
	}

	.uls {
		color: #999;
		font-size: 14px;
	}

	.heng {
		height: 20px;
		line-height: 40px;
		width: 5px;
		display: block;
		background-color: #19d4ae;
		z-index: 14;
		border: 1px solide red;
		position: absolute;
		margin-top: 8px;
	}

	.heng2 {
		height: 15px;
		display: block;
		margin-left: 10px;
		height: 40px;
		line-height: 40px;

	}

	.center {
		margin: 0px auto;
		width: 1550px;
	}

	.el-table th {
		background: #d7d7d7;
		color: black;
		font-weight: normal;
	}

	.el-table td,
	.el-table tr {
		border-bottom: 0px solid transparent !important;
	}

	.el-table tr:nth-child(even) {
		background: #e4e4e4;
	}

	.uls>li {
		float: left;
		width: 400px;
		margin-left: 40px;
		list-style: none;
		height: 50px;
		overflow: hidden;
		margin-bottom: 30px;
	}

	.el-table td:nth-child(4) {
		color: #2F78FF;
		cursor: pointer;
	}

	.el-input {
		width: 300px !important;
	}
</style>
