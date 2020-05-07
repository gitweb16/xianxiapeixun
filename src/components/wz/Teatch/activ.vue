<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">活动课程管理</span></p>
		</div>
		<div>
			<ul class="uls">
				<li><span>校区：</span>

					<el-select v-model="value1" placeholder="请选择校区">
						<el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.value1">
						</el-option>
					</el-select>

				</li>
				<li><span>课程名称：</span>
					<el-input placeholder="请输入内容" v-model="input"></el-input>
				</li>
				<li><span>是否活动：</span>
					<el-select v-model="value" placeholder="请选择内容">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</li>
				<li>
					<el-button type="primary">搜索</el-button>

				</li>
			</ul>
		</div>
		<div class="center">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column prop="name" label="编码" width="171">
				</el-table-column>
				<el-table-column prop="address" label="名称" width="171">
				</el-table-column>
				<el-table-column prop="money" label="校区" width="171">
				</el-table-column>
				<el-table-column prop="age" label="年级" width="171">
				</el-table-column>
				<el-table-column prop="sum" label="价格" width="171">
				</el-table-column>
				<el-table-column prop="day" label="学习中人数" width="171">
				</el-table-column>
				<el-table-column prop="dat" label="状态" width="171">
				</el-table-column>
				<el-table-column prop="ope" label="操作" width="171">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="dialogFormVisible = true">{{scope.row.opes}}</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div style="text-align: center;margin-top: 30px;">
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>

		<el-dialog title="设置活动价格" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="课程原价" :label-width="formLabelWidth">
					1500
				</el-form-item>
				<el-form-item label="活动价格" :label-width="formLabelWidth">
					<el-input v-model="input" placeholder="请输入活动价格"></el-input><br/>
					<span style="color: red;">注意:设置价格则代表参加活动</span>
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
		name: 'activ',
		data() {
			return {
				options1: [{
						value1: '选项1',
						label1: '城南校区'
					}, {
						value1: '选项2',
						label1: '水榭校区'
					}, {
						value1: '选项3',
						label1: '世贸校区'
					}, {
						value1: '选项4',
						label1: '花之南校区'
					}, {
						value1: '选项5',
						label1: '滨江校区'
					},
					{
						value1: '选项6',
						label1: '九桐桥校区'
					},
					{
						value1: '选项7',
						label1: '万达校区'
					}
				],
				value1: '',
				value: '',
				options: [{
					value: '选项1',
					label: '是'
				}, {
					value: '选项2',
					label: '否'
				}, ],
				tableData: [{
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '已开课',
						ope: '编辑',
						opes: '设置活动价'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '设置活动价'
					},
					{
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '已开课',
						ope: '编辑',
						opes: '设置活动价'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '设置活动价'
					},
					{
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '已开课',
						ope: '编辑',
						opes: '设置活动价'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '设置活动价'
					},
					{
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '已开课',
						ope: '编辑',
						opes: '设置活动价'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '设置活动价'
					},
					{
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '已开课',
						ope: '编辑',
						opes: '设置活动价'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '设置活动价'
					}
				],
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

	.uls {
		color: #999;
		font-size: 14px;
	}

	.el-input {
		width: 250px !important;
	}

	.uls>li {
		float: left;
		width: 350px;
		margin-left: 40px;
		list-style: none;
		height: 50px;
		overflow: hidden;
		margin-bottom: 30px;
	}

	.center {
		margin: 0px auto;
		width: 1550px;
	}
</style>
