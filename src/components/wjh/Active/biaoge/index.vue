<template>
	<div id='app'>

		<!--是否活动选择-->
		<div>
			<span class="kecheng">课程名称</span>
			<div id="ii">
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
		</div>

		<!--搜索框-->
		<div id="sou">
			<span>搜索</span>
		</div>
		<div id="hai">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="110">
				</el-table-column>
				<el-table-column prop="bianma" label="编码" width="160">
				</el-table-column>
				<el-table-column prop="address" label="名称" width="200">
				</el-table-column>
				<el-table-column prop="xiaoqu" label="校区">
				</el-table-column>
				<el-table-column prop="nianji" label="年级">
				</el-table-column>
				<el-table-column prop="price" label="原价">
				</el-table-column>
				<el-table-column prop="shi" label="是否参加活动">
				</el-table-column>
				<el-table-column prop="active" label="活动价">
				</el-table-column>
				<el-table-column prop="caozuo" label="操作">
					<a id="shezhi" type="text" @click="open"> 设置活动价</a>
				</el-table-column>
			</el-table>

		</div>
		<div class="block" id="fenye">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
			 :page-size="100" layout="prev, pager, next, jumper" :total="1000">
			</el-pagination>
		</div>
	</div>



</template>

<script scoped> 
	export default {
		name: 'Huodong',
		data() {
			return {
				options: [{
					value: '选项1',
					label: '城南小区'
				}, {
					value: '选项2',
					label: '水榭校区'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '世贸校区'
				}, {
					value: '选项5',
					label: '话指南校区'
				}],
				oo: [{
					value: '选项1',
					label: '是'
				}, {
					value: '选项2',
					label: '否'
				}],

				value: '',
				input: '',
				tableData: [{
					bianma: 'BDASF456132654',
					address: '初中一年级班级课程',
					xiaoqu: '城南校区',
					nianji: '初中一年级',
					price: '350',
					shi: '是',
					active: '300',
				}, {
					bianma: 'BDASF456132654',
					address: '初中一年级班级课程',
					xiaoqu: '城南校区',
					nianji: '初中一年级',
					price: '350',
					shi: '是',
					active: '300',
				}, {
					bianma: 'BDASF456132654',
					address: '初中一年级班级课程',
					xiaoqu: '城南校区',
					nianji: '初中一年级',
					price: '350',
					shi: '是',
					active: '300',
				}, {
					bianma: 'BDASF456132654',
					address: '初中一年级班级课程',
					xiaoqu: '城南校区',
					nianji: '初中一年级',
					price: '350',
					shi: '是',
					active: '300',
				}, , {
					bianma: 'BDASF456132654',
					address: '初中一年级班级课程',
					xiaoqu: '城南校区',
					nianji: '初中一年级',
					price: '350',
					shi: '是',
					active: '300',
				}, , {
					bianma: 'BDASF456132654',
					address: '初中一年级班级课程',
					xiaoqu: '城南校区',
					nianji: '初中一年级',
					price: '350',
					shi: '是',
					active: '300',
				}],
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			open() {
				this.$prompt('课程原价：1500', '提示', {
					confirmButtonText: '保存',
					cancelButtonText: '取消',
				})
			}
		}
	}
</script>
<style>
	#app {
		margin-top: 20px;
	}

	#app .xiao {
		color: #a6a6a6;
		margin-left: 50px;
	}

	#app span {
		color: #a6a6a6;
		margin-right: 20px;
	}

	#app span:nth-last-of-type(1) {
		margin-left: 40px;
		margin-right: 1.25rem;
	}

	#ii {
		width: 350px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 440px;
		margin-top: 60px;
	}

	#ii input {
		float: right;
	}

	#sou {
		color: white;
		width: 12%;
		float: right;
		margin-right: 20px;
		border-radius: 3px;
		text-align: center;
	}

	#sou span {
		color: white;
		height: 40px;
		background: #5DABEC;
		text-align: center;
		line-height: 40px;
		display: block;
		margin-top: -22px;
		box-shadow: 0px 0px 5px #5DABEC;
	}

	.kecheng {
		position: relative;
		left: 325px;
		top: 6px;
	}

	#hai {
		width: 1280px;
		margin: 0px auto;
		text-align: center;
		margin-top: 1.875rem;
	}

	#xuanze {
		margin-left: 200px;
	}

	#fenye {
		margin-left: 400px;
		margin-top: 20px;
	}

	#shezhi {
		color: blue;
	}

	#shezhi:hover {
		pointer: curcor;
	}
</style>
