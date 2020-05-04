<template>
	<div class="content">
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">教师业务流水分析</span></p>
		</div>
		<div class="box">
			<div class="row1">
				<h3>今日业务报班量统计</h3>
				<ul>
					<li tabindex="3">本日</li>
					<li tabindex="2">本 周</li>
					<li tabindex="1">本月</li>
				</ul>
				<ve-ring :data="chartData" :settings="chartSettings" legend-position="bottom" :colors="color"></ve-ring>
			</div>
			<div class="row1">
				<h3>今日业务报金额统计</h3>
				<ul>
					<li tabindex="3">本日</li>
					<li tabindex="2">本 周</li>
					<li tabindex="1">本月</li>
				</ul>
				<ve-ring :data="chartData" :settings="chartSettingss" legend-position="bottom" :colors="color"></ve-ring>
			</div>
		</div>
		<div>
			<div class="row2">
				<h3>业务报表统计表</h3>
				<ul>
					<li tabindex="3">本日</li>
					<li tabindex="2">本 周</li>
					<li tabindex="1">本月</li>
				</ul>
				<el-table :data="tableData" style="width: 100%">
					<el-table-column prop="date" label="排名" width="240">
					</el-table-column>
					<el-table-column prop="name" label="业务教师" width="240">
					</el-table-column>
					<el-table-column prop="address" label="报班数量" width="240">
					</el-table-column>
					<el-table-column prop="money" label="报班金额" width="240">
					</el-table-column>
					<el-table-column prop="count" label="排名" width="270">
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'teas',
		data() {
			this.chartSettings = {
					radius: ['70px', '100px'],
					itemStyle: {
						borderColor: 'white',
						borderType: 'solid',

					}
				},
				this.chartSettingss = {
					radius: ['0px', '100px'],
					itemStyle: {
						borderColor: 'white',
						borderType: 'solid'
					}
				}
			return {
				chartData: {
					columns: ['校区', '访问用户'],
					rows: [{
							'校区': '宏湖校区',
							'访问用户': 20.22
						},
						{
							'校区': '百合校区',
							'访问用户': 11.24
						},
						{
							'校区': '水南校区',
							'访问用户': 13.48
						},
						{
							'校区': '龙山校区',
							'访问用户': 22.47
						},
						{
							'校区': '玫瑰园校区',
							'访问用户': 15.73
						},
						{
							'校区': '滨江校区',
							'访问用户': 3.37
						},
						{
							'校区': '融侨城校区',
							'访问用户': 13.48
						},
						{
							'校区': '宏路校区',
							'访问用户': 20.22
						}
					]
				},
				color: [
					'#3a4b68',
					"#3a4b68",
					"#7687e8",
					"#34d4f1",
					"#262626",
					"#262626",
					"#fc7a5c"
				],
				tableData: [{
					date: '3',
					name: '业务教师一',
					address: '2',
					money: '￥1.000.00',
					count: '上升1'
				}, {
					date: '2',
					name: '业务教师一',
					address: '12',
					money: '￥1.000.00',
					count: '上升1'
				}, {
					date: '3',
					name: '业务教师一',
					address: '2',
					money: '￥1.000.00',
					count: '上升1'
				}, {
					date: '2',
					name: '业务教师一',
					address: '12',
					money: '￥1.000.00',
					count: '下降10'
				}, {
					date: '2',
					name: '业务教师一',
					address: '2',
					money: '￥1.000.00',
					count: '上升1'
				}, {
					date: '3',
					name: '业务教师一',
					address: '12',
					money: '￥1.000.00',
					count: '下降10'
				}]
			}
		}
	}
</script>

<style>
	.el-table th{
	   background: #f6f9fc; 	
	}
	
	.box {
		width: 100%;
	}

	.row2 {
		clear: both;
		background-color: white;
		box-shadow: #E9E9EB 0px 0px 10px 5px;
		margin-left: 40px;
		float: left;
		position: relative;
		height: 450px;
		width: 1230px;
		margin-top: 20px;
		padding-left: 10px;

	}

	.row2>h3 {
		color: #666666;
		margin-left: 10px;
		margin-top: 10px;
	}

	.row2>ul>li:focus {
		background: #5584ff;
		color: white;
	}

	.row2>ul {
		margin-right: 30px;
	}

	.row2>ul>li {
		list-style: none;
		float: right;
		display: inline-block;
		font-size: 12px;
		cursor: pointer;
		position: relative;
		bottom: 20px;
		border: 1px solid #e6e7eb;
		width: 50px;
		text-align: center;
	}

	.row1 {
		width: 600px;
		/* border: 1px solid red; */
		background-color: white;
		box-shadow: #E9E9EB 0px 0px 10px 5px;
		margin-left: 40px;
		float: left;
		position: relative;
		height: 450px;
	}

	.row1>h3 {
		color: #666666;
		margin-left: 10px;
		margin-top: 10px;
	}

	.row1>ul>li {
		list-style: none;
		float: right;
		display: inline-block;
		font-size: 12px;
		cursor: pointer;
		position: relative;
		bottom: 20px;
		border: 1px solid #e6e7eb;
		width: 50px;
		text-align: center;
	}

	.row1>ul {
		margin-right: 10px;
	}

	.row1>ul>li:focus {
		background: #5584ff;
		color: white;
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
		margin-left: 20px;
		height: 40px;
		line-height: 40px;

	}
</style>
