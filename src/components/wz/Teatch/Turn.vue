<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">转校管理</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="go">新增转校</el-button>
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
						<el-button size="mini" @click="dialogFormVisible=true">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div style="text-align: center;margin-top: 30px;">
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>
		<el-dialog :visible.sync="dialogFormVisible" style="width: 2000px!important;margin: 0px auto;" @click="dialogFormVisible">
			<h3>原订单管理</h3>

			<div>
				<span class="spans">订单编号:20190415001</span><span class="spanss">订单来源：微信小程序</span>
				<span class="spans">订单时间:2019-4-14</span><span class="spanss spanmar">业务教师：无</span><br />

				<span class="spans">课程名称:英语个性化一对一教学</span><span class="spanss">课程校区：城南校区</span>
				<span class="spans spanmar">课程教师:授课教师</span><br />

				<span class="spans">家长ID:耐寒教育</span><span class="spanss">家长手机号：18809122232</span>
				<span class="spans spanmar">学员姓名:学员一，学员二</span><br />


				<span class="spans">课程单价:100</span><span class="spanss">剩余课时：12</span>
				<span class="spans spanmar">剩余总价:1200</span><br />
			</div>
			<h3>转校订单详情</h3>
			<div>
				<span class="spans">订单时间:2019-4-14</span><span class="spanss spanmar">业务教师：无</span><br />

				<span class="spans">课程名称:英语个性化一对一教学</span><span class="spanss">课程校区：城南校区</span>
				<span class="spans spanmar">课程教师:授课教师</span><br />

				<span class="spans">课程单价:120</span><span class="spanss">剩余课时：12</span>
				<span class="spans">总价:1200</span><br />
				<span class="spans">需补差价240</span><span class="spanss">支付状态:已支付</span>
			</div>

		</el-dialog>
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
				],
				dialogFormVisible: false
			}

		},
		methods:{
			go(){
				this.$router.push({path:'../../header/order/Transfer'})     
			}
		}
	}
</script>

<style scoped>
	.center {
		margin: 0px auto;
		width: 1550px;
	}

	.spans {
		margin-left: 200px;
		margin-bottom: 10px;
		display: inline-block;
		width: 200px;

	}

	.spanss {
		margin-left: 300px !important;
		display: inline-block;
		width: 200px;


	}

	.spanmar {
		margin-bottom: 90px;
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
