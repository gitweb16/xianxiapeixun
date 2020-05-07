<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">晚辅导课程活动管理</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="dialogFormVisible =true">新增活动</el-button>
		</div>
		<div class="center">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="name" label="序" width="310">
				</el-table-column>
				<el-table-column prop="address" label="活动名称" width="310">
				</el-table-column>
				<el-table-column prop="age" label="开始时间" width="310">
				</el-table-column>
				<el-table-column prop="sum" label="结束时间" width="310">
				</el-table-column>
				<el-table-column prop="ope" label="操作" width="310">
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

		<el-dialog title="活动管理" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="活动名称" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入名称"></el-input>
				</el-form-item>
				<el-form-item label="活动开始时间" :label-width="formLabelWidth">
					<template>
						<div class="block">
							<el-date-picker v-model="value1" type="date" placeholder="单击选择时间">
							</el-date-picker>
						</div>
					</template>
				</el-form-item>
				<el-form-item label="活动结束时间" :label-width="formLabelWidth">
					<template>
						<div class="block">
							<el-date-picker v-model="value2" type="date" placeholder="单击选择时间">
							</el-date-picker>
						</div>
					</template>
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
		name: "Evening",
		data() {
			return {
				tableData: [{
						name: '1 ',
						address: '2018续班节',
						age: '2018.6.1',
						sum: '2018.6.10',
						ope: '修改',
						opes: '查看'
					},
					{
						name: '2 ',
						address: '2018双十二报班市',
						age: '2018.6.1',
						sum: '2018.6.10',
						ope: '修改',
						opes: '查看'
					},
					{
						name: '1 ',
						address: '2018续班节',
						age: '2018.6.1',
						sum: '2018.6.10',
						ope: '修改',
						opes: '查看'
					},
					{
						name: '2 ',
						address: '2018双十二报班市',
						age: '2018.6.1',
						sum: '2018.6.10',
						ope: '修改',
						opes: '查看'
					}, {
						name: '1 ',
						address: '2018续班节',
						age: '2018.6.1',
						sum: '2018.6.10',
						ope: '修改',
						opes: '查看'
					},
					{
						name: '2 ',
						address: '2018双十二报班市',
						age: '2018.6.1',
						sum: '2018.6.10',
						ope: '修改',
						opes: '查看'
					}, {
						name: '1 ',
						address: '2018续班节',
						age: '2018.6.1',
						sum: '2018.6.10',
						ope: '修改',
						opes: '查看'
					},
					{
						name: '2 ',
						address: '2018双十二报班市',
						age: '2018.6.1',
						sum: '2018.6.10',
						ope: '修改',
						opes: '查看'
					},
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
				formLabelWidth: '120px',
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value1: '',
				value2: '',

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
</style>
