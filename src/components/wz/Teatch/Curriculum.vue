<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">班级课程管理</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="dialogFormVisible =true">新增校区</el-button>
			<el-button type="primary">导出为Excel</el-button>
		</div>
		<div>
			<ul class="uls">
				<li><span>校区：</span>
					<el-select v-model="value1" clearable placeholder="请选择校区">
						<el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.value1">
						</el-option>
					</el-select>
				</li>
				<li>
					<span>年级：</span>
					<el-select v-model="value2" clearable placeholder="请选择年级">
						<el-option v-for="item in options2" :key="item.value" :label="item.label2" :value="item.value2">
						</el-option>
					</el-select>
				</li>
				<li>
					<span>状态：</span>
					<el-select v-model="value3" clearable placeholder="请选择状态">
						<el-option v-for="item in options3" :key="item.value" :label="item.label3" :value="item.value3">
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
						<el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.ope}}</el-button>
						<el-button type="text" size="small">{{scope.row.opes}}</el-button>
					</template>
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
				<el-form-item label="授课教师" :label-width="formLabelWidth" style="margin-top: -63px;margin-left: 441px;">
					<el-input placeholder="请输入内容" v-model="sums"></el-input>
				</el-form-item>
				<el-form-item label="立即开课" :label-width="formLabelWidth">
					<el-radio-group v-model="radio">
						<el-radio :label="3">是</el-radio>
						<el-radio :label="6">否</el-radio>
					</el-radio-group>
				</el-form-item>

				<el-form-item label="课程描述" :label-width="formLabelWidth">
					<el-input type="textarea" :rows="7" placeholder="请输入描述" v-model="textarea"></el-input>
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
		name: "Curriculum",
		data() {
			return {
				radio:'',
				bianma:'',
				names:'',
				textarea:'',
				moneys:'',
				sums:'',
				keshi:'',
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
				options: [{
						value: '选项1',
						label: '小学五年级'
					}, {
						value: '选项2',
						label: '小学六年级'
					}, {
						value: '选项3',
						label: '初中一年级'
					}, {
						value: '选项4',
						label: '初中二年级'
					}, {
						value: '选项5',
						label: '初中三年级'
					},
					{
						value: '选项6',
						label: '高中一年级'
					},
					{
						value: '选项7',
						label: '高中二年级'
					}
				],
				value:'',
				value1: '',
				value2: '',
				value3: '',
				options2: [{
						value2: '选项1',
						label2: '小学五年级'
					}, {
						value2: '选项2',
						label2: '小学六年级'
					}, {
						value2: '选项3',
						label2: '初中一年级'
					}, {
						value2: '选项4',
						label2: '初中二年级'
					}, {
						value2: '选项5',
						label2: '初中三年级'
					},
					{
						value2: '选项6',
						label2: '高中一年级'
					},
					{
						value2: '选项7',
						label2: '高中二年级'
					}
				],
				options3: [{
					value3: '选项1',
					label3: '是'
				}, {
					value3: '选项2',
					label3: '否'
				}],

				tableData: [{
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '已开课',
						ope: '编辑',
						opes: '停课'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '开课'
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
						opes: '停课'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '开课'
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
						opes: '停课'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '开课'
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
						opes: '停课'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '开课'
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
						opes: '停课'
					}, {


						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '滨江校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '未开课',
						ope: '编辑',
						opes: '开课'
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

	.el-table__header th {
		background: #D7D7D7;
		color: black;
		font-weight: normal;
	}

	.el-table__body tr:nth-child(even) td:last-child button:last-child {
		color: red;
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

	.uls>li {
		float: left;
		width: 340px;
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
	.el-input{
		width: 250px !important;
	}
</style>
