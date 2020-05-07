<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">转校管理</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="dialogVisible =true">新增转校</el-button>
		</div>
		<div class="center">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="datas" label="原订单编号" width="171">
				</el-table-column>
				<el-table-column prop="name" label="订单来源" width="171">
				</el-table-column>
				<el-table-column prop="address" label="订单日期" width="171">
				</el-table-column>
				<el-table-column prop="money" label="业务教师" width="171">
				</el-table-column>
				<el-table-column prop="age" label="家长手机号" width="171">
				</el-table-column>
				<el-table-column prop="sum" label="原校区" width="171">
				</el-table-column>
				<el-table-column prop="day" label="转入校区" width="171">
				</el-table-column>
				<el-table-column prop="dat" label="审核状态" width="171">
				</el-table-column>
				<el-table-column prop="ope" label="操作" width="171">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.ope}}</el-button>

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
		name: "Turn",
		data() {
			return {
				tableData: [{
						datas: '20190415001',
						name: '微信小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核拒绝',
						ope: '查看',
					},
					{
						datas: '20190415001',
						name: '支付宝小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核中',
						ope: '查看',
					},
					{
						datas: '20190415001',
						name: '支付宝小程序',
						address: '2019-4-15',
						money: '业务教师',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核通过',
						ope: '查看',
					},
					{
						datas: '20190415001',
						name: '微信小程序',
						address: '2019-4-15',
						money: '业务教师',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核拒绝',
						ope: '查看',
					},
					{
						datas: '20190415001',
						name: '支付宝小程序',
						address: '2019-4-15',
						money: '业务教师',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核中',
						ope: '查看',
					},
					{
						datas: '20190415001',
						name: '支付宝小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核通过',
						ope: '查看',
					},
					{
						datas: '20190415001',
						name: '微信小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核拒绝',
						ope: '查看',
					},
					{
						datas: '20190415001',
						name: '支付宝小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核中',
						ope: '查看',
					},
					{
						datas: '20190415001',
						name: '支付宝小程序',
						address: '2019-4-15',
						money: '',
						age: '家长手机号',
						sum: '原校区',
						day: '新校区',
						dat: '审核通过',
						ope: '查看',
					},
				]
			}
		}
	}
</script>

<style scoped>
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
</style>
