<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">分班管理</span></p>
		</div>
		<div>
			<ul class="uls">
				<li><span>校区：</span>
					<el-input v-model="input" placeholder="请输入校区"></el-input>
				</li>
				<li><span>课程名称：</span>
					<el-select v-model="value" clearable placeholder="请输入内容">
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
				<el-table-column prop="address" label="校区" width="240">
				</el-table-column>
				<el-table-column prop="money" label="未排课人数" width="240">
				</el-table-column>
				<el-table-column prop="count" label="已分班数量" width="270">
				</el-table-column>
				<el-table-column prop="cart" label="操作" width="270">
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
		name: "fenban",
		data() {
			return {
				input: '',
				tableData: [{
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: '城南校区',
						money: '12',
						count: '1	',
						cart: '分班'
					}, {
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: '城南校区',
						money: '12',
						count: '0	',
						cart: '分班'
					}, {
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: '城南校区',
						money: '12',
						count: '1	',
						cart: '分班'
					}, {
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: '城南校区',
						money: '12',
						count: '0	',
						cart: '分班'
					}, {
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: '城南校区',
						money: '12',
						count: '1	',
						cart: '分班'
					}, {
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: '城南校区',
						money: '12',
						count: '0	',
						cart: '分班'
					},
					{
						date: 'BJKC -20190405',
						name: '初中一年级班级课程',
						address: '城南校区',
						money: '12',
						count: '1	',
						cart: '分班'
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
				value: '',
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
