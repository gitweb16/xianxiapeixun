<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">晚辅导课程消耗</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="dialogVisible =true">批量消耗</el-button>
			<el-button type="primary" @click="dialogVisibles =true">批量设置自动消耗</el-button>
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
					<el-select v-model="value" clearable placeholder="请选择年级">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
				<el-table-column prop="sum" label="单价" width="171">
				</el-table-column>
				<el-table-column prop="day" label="学习中人数" width="171">
				</el-table-column>
				<el-table-column prop="dat" label="本周已消耗课时" width="171">
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

		<el-dialog :visible.sync="dialogVisible" width="30%">
			<span style="margin-left: 120px!important;">消耗课时：</span>
			<el-button @click="input--">-</el-button>
			<el-input v-model="input" placeholder="请输入课时数"></el-input>
			<el-button @click="input++">+</el-button>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog :visible.sync="dialogVisibles" width="30%">
			<span style="margin-left: 120px!important;">每周自动消耗课时：</span>
			<el-button @click="inputs--">-</el-button>
			<el-input v-model="inputs" placeholder="请输入课时数"></el-input>
			<el-button @click="inputs++">+</el-button>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisibles = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisibles = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: "consumptions",
		data() {
			return {
				inputs:''
				,
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
				value: '',
				value1: '',
				value2: '',
				value3: '',
				options3: [{
					value3: '选项1',
					label3: '进行中'
				}, {
					value3: '选项2',
					label3: '已结束'
				}],
				tableData: [{
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '0',
						ope: '消耗',
						opes: '消耗规则'
					}, {

						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '2',
						ope: '消耗',
						opes: '消耗规则'
					},
					{
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '0',
						ope: '消耗',
						opes: '消耗规则'
					}, {

						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '2',
						ope: '消耗',
						opes: '消耗规则'
					}, {
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '0',
						ope: '消耗',
						opes: '消耗规则'
					}, {

						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '2',
						ope: '消耗',
						opes: '消耗规则'
					}, {
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '0',
						ope: '消耗',
						opes: '消耗规则'
					}, {

						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '2',
						ope: '消耗',
						opes: '消耗规则'
					}, {
						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '0',
						ope: '消耗',
						opes: '消耗规则'
					}, {

						name: 'BJKC-20190405',
						address: '初中一年级班级课程',
						money: '城南校区',
						age: '初中一年级',
						sum: '350',
						day: '12',
						dat: '2',
						ope: '消耗',
						opes: '消耗规则'
					},

				],
				input: '',
				dialogVisible: false,
				dialogVisibles: false,
			}
		}
	}
</script>

<style scoped>
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

	.el-input {
		width: 100px;
		text-align: center !important;
	}
</style>
