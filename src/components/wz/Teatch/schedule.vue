<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">课表管理</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="dialogFormVisible =true">新增校区</el-button>
			<el-button type="primary">导出为Excel</el-button>
			<span style="color: red;text-decoration: underline;margin-left: 10px;">下载Excel模板</span>
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
			<el-table :data="tableData" style="width: 100%" height="250">
				<el-table-column fixed prop="date" label="日期" width="150">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="province" label="省份" width="120">
				</el-table-column>
				<el-table-column prop="city" label="市区" width="120">
				</el-table-column>
				<el-table-column prop="address" label="地址" width="300">
				</el-table-column>
				<el-table-column prop="zip" label="邮编" width="120">
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		name: "schedule",
		data() {
			return{
				
		
			tableData: [{
				date: '2016-05-03',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-02',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-04',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-01',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-08',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-06',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-07',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}],
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
</style>
