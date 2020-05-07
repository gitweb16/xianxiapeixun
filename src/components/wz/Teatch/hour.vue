<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">班级课程活动管理</span></p>
		</div>
		<div style="margin-left: 30px;margin-bottom:5px;">
			<el-button type="primary" @click="dialogVisible =true">新增课时</el-button>
		</div>
		<div class="center">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="name" label="节次" width="380">
				</el-table-column>
				<el-table-column prop="address" label="开始时间" width="380">
				</el-table-column>
				<el-table-column prop="age" label="结束时间" width="380">
				</el-table-column>
				<el-table-column prop="ope" label="操作" width="380">
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
		<div>
			<el-dialog :visible.sync="dialogVisible" width="30%">
				<el-form>
					<el-form-item label="教室名称" :label-width="formLabelWidth">
						<div class="block">
							<el-date-picker v-model="value1" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期"
							 :default-time="['12:00:00']">
							</el-date-picker>
						</div>
					</el-form-item>
				</el-form>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false">保存</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		name: "hour",
		data() {
			return {
				formLabelWidth: '120px',
				value1: '',
				value2: '',
				dialogVisible: false,
				tableData: [{
						name: '1',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '2',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '1',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '2',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '1',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '2',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '1',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '2',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '1',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					},
					{
						name: '2',
						address: '08:05',
						age: '08:50',
						ope: '删除',
					}
				]
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
		width: 1550px;
	}

	.el-table th {
		background: #d7d7d7 !important;
		color: black;
		font-weight: normal;
	}
</style>
