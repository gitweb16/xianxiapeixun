<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">分班管理</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="dialogFormVisible =true">新增校区</el-button>
		</div>
		<el-popover placement="right" width="1200" height="2000" trigger="click">
			<div>111111111111</div>
			<el-button slot="reference" class="sos">搜索</el-button>
		</el-popover>
		<div>
			<ul class="uls">
				<li><span>校区：</span>
					<el-select v-model="value" clearable placeholder="请输入校区">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</li>
			</ul>
		</div>
		<div class="center">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="date" label="课程编码" width="240">
				</el-table-column>
				<el-table-column prop="name" label="课程名称" width="240">
				</el-table-column>
				<el-table-column prop="address" label="班级编码" width="240">
				</el-table-column>
				<el-table-column prop="money" label="班级名称" width="240">
				</el-table-column>
				<el-table-column prop="instructor" label="授课教师" width="170">
				</el-table-column>
				<el-table-column prop="count" label="学员数量" width="170">
				</el-table-column>
				<el-table-column prop="cart" label="操作" width="170">
				</el-table-column>
			</el-table>
			<div style="text-align: center;margin-top: 30px;">
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>
		<el-dialog :visible.sync="dialogFormVisible" style="width: 2000px!important;margin: 0px auto;">
			<el-form :model="form">
				<el-form-item label="课程编码" :label-width="formLabelWidth">
					<el-input placeholder="请输入内容" v-model="bianma"></el-input>
				</el-form-item>
				<el-form-item label="课程名称" :label-width="formLabelWidth" style="margin-top: -63px;margin-left: 441px;">
					<el-input placeholder="请输入" v-model="names"></el-input>
				</el-form-item>
				<el-form-item label="年级" :label-width="formLabelWidth">
					<el-select v-model="value" clearable placeholder="请选择年级">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth">
					<el-input placeholder="请输入内容" v-model="moneys"></el-input>
				</el-form-item>
				<el-form-item label="课时" :label-width="formLabelWidth" style="margin-top: -63px;margin-left: 441px;">
					<el-input placeholder="请输入内容" v-model="keshi"></el-input>
				</el-form-item>
				<el-form-item label="校区" :label-width="formLabelWidth">
					<p>城南校区</p>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth" style="margin-top: -63px;margin-left: 441px;">
					<el-input placeholder="请输入内容" v-model="sums"></el-input>
				</el-form-item>
				<el-form-item label="立即开课" :label-width="formLabelWidth">
					<el-radio-group v-model="radio">
						<el-radio :label="3">是</el-radio>
						<el-radio :label="6">否</el-radio>
					</el-radio-group>
				</el-form-item>

				<el-form-item label="课程描述" :label-width="formLabelWidth">
					<el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="textarea"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		name: "banfenliebiao",
		data() {
			return {
				radio: '',
				bianma: '',
				names: '',
				textarea: '',
				moneys: '',
				sums: '',
				keshi: '',
				textarea: '',
				radio: 2,
				input: '',
				tableData: [{
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: 'BJKC-20190405002',
						money: '初中一年级一班',
						instructor: '授课教师',
						count: '20',
						cart: '管理 移除'
					},
					{
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: 'BJKC-20190405002',
						money: '初中一年级一班',
						"instructor": '授课教师',
						count: '20',
						cart: '管理 移除'
					},
					{
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: 'BJKC-20190405002',
						money: '初中一年级一班',
						"instructor": '授课教师',
						count: '20',
						cart: '管理 移除'
					}, {
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: 'BJKC-20190405002',
						money: '初中一年级一班',
						"instructor": '授课教师',
						count: '20',
						cart: '管理 移除'
					}, {
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: 'BJKC-20190405002',
						money: '初中一年级一班',
						"instructor": '授课教师',
						count: '20',
						cart: '管理 移除'
					}, {
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: 'BJKC-20190405002',
						money: '初中一年级一班',
						"instructor": '授课教师',
						count: '20',
						cart: '管理 移除'
					},
					{
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: 'BJKC-20190405002',
						money: '初中一年级一班',
						"instructor": '授课教师',
						count: '20',
						cart: '管理 移除'
					}
				],
				options: [{
						value: '选项1',
						label: '初中一年级一班'
					}, {
						value: '选项2',
						label: '初中一年级一班'
					}, {
						value: '选项3',
						label: '初中一年级一班'
					}, {
						value: '选项4',
						label: '初中一年级一班'
					}, {
						value: '选项5',
						label: '初中一年级一班'
					},
					{
						value: '选项5',
						label: '初中一年级一班'
					},
					{
						value: '选项5',
						label: '初中一年级一班'
					}
				],
				value: '',
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

<style scoped>
	.sos {
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 86px;
		margin-right: 90px;
		color: #FFF;
		background-color: #409EFF;
		border-color: #409EFF;
	}

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
		width: 1500px;
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

	.uls {
		color: #999;
		font-size: 14px;
	}

	.el-table td:nth-child(5) {
		color: #2F78FF;
		cursor: pointer;
	}

	.el-table tr:nth-child(even) td:last-child {
		color: red;
	}

	.el-table tr:nth-child(odd) td:last-child {
		color: #2F78FF;
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

	.el-input {
		width: 300px !important;
	}
</style>
