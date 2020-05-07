<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">请选择需转校的订单</span></p>
		</div>
		<div>
			<ul class="uls">
				<li><span>订单来源：</span>

					<el-select v-model="value1" placeholder="请选择订单来源">
						<el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.value1">
						</el-option>
					</el-select>

				</li>
				<li><span>家长手机号：</span>
					<el-input placeholder="请输入内容" v-model="input"></el-input>
				</li>
				<li>
					<el-form>
						<el-form-item label="订单日期">
							<div class="block">

								<el-date-picker v-model="daes" type="date" placeholder="选择日期">
								</el-date-picker>
							</div>
						</el-form-item>
					</el-form>
				</li>
				<li>
					<el-button type="primary">搜索</el-button>

				</li>
			</ul>
		</div>
		<div class="center">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column width="155" prop="name" label="订单编号">
				</el-table-column>
				<el-table-column prop="names" label="订单来源" width="155">
				</el-table-column>
				<el-table-column prop="address" label="订单日期" width="155">
				</el-table-column>
				<el-table-column prop="money" label="业务教师" width="155">
				</el-table-column>
				<el-table-column prop="age" label="家长手机号" width="155">
				</el-table-column>
				<el-table-column prop="sum" label="学员姓名" width="155">
				</el-table-column>
				<el-table-column prop="day" label="课程名称" width="155">
				</el-table-column>
				<el-table-column prop="dat" label="学习状态" width="155">
				</el-table-column>
				<el-table-column prop="num" label="订单总价" width="155">
				</el-table-column>
				<el-table-column prop="ope" label="操作" width="155">
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
	</div>
</template>

<script>
	export default {
		name: 'Transfer',
		data() {
			return {
				daes: '',
				options1: [{
						value1: '选项1',
						label1: '支付宝'
					}, {
						value1: '选项2',
						label1: '微信'
					}, {
						value1: '选项3',
						label1: '业务扫码收款'
					}, {
						value1: '选项4',
						label1: '业务线下收款'
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
						name: '20190415001',
						names: '微信小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '学习中',
						num: '￥1500',
						opes: '转校'
					}, {
						name: '20190415001',
						names: '支付宝小程序',
						address: '2019-4-15',
						money: '业务教师',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '已结束',
						num: '￥1500',
						opes: ''
					},
					{
						name: '20190415001',
						names: '业务扫码收款',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '学习中',
						num: '￥1500',
						opes: '转校'
					},
					{
						name: '20190415001',
						names: '微信小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '学习中',
						num: '￥1500',
						opes: '转校'
					}, {
						name: '20190415001',
						names: '支付宝小程序',
						address: '2019-4-15',
						money: '业务教师',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '已结束',
						num: '￥1500',
						opes: ''
					},
					{
						name: '20190415001',
						names: '业务扫码收款',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '学习中',
						num: '￥1500',
						opes: '转校'
					},
					{
						name: '20190415001',
						names: '微信小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '学习中',
						num: '￥1500',
						opes: '转校'
					}, {
						name: '20190415001',
						names: '支付宝小程序',
						address: '2019-4-15',
						money: '业务教师',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '已结束',
						num: '￥1500',
						opes: ''
					},
					{
						name: '20190415001',
						names: '业务扫码收款',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '学习中',
						num: '￥1500',
						opes: '转校'
					},
					{
						name: '20190415001',
						names: '微信小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '学习中',
						num: '￥1500',
						opes: '转校'
					}, {
						name: '20190415001',
						names: '支付宝小程序',
						address: '2019-4-15',
						money: '业务教师',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '已结束',
						num: '￥1500',
						opes: ''
					},
					{
						name: '20190415001',
						names: '业务扫码收款',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '学员姓名',
						day: '课程名称',
						dat: '学习中',
						num: '￥1500',
						opes: '转校'
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
