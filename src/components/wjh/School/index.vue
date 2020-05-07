<template>
	<div id='app'>

		<!--新增校区-->
		<div id="xin">
			
				<el-popover placement="right" width="1000" trigger="click" height="500">
					<h2>校区详情</h2>
					<div>
						<ul class='zhi'>
							
							<li>校区名称：<span><el-input v-model="input" placeholder="请输入内容" style="width: 350px;"></el-input></span></li>
							<li>校区地址：<span><el-input v-model="input" placeholder="请输入内容" style="width: 350px;"></el-input></span></li>
							<li>联系方式：<span><el-input v-model="input" placeholder="请输入内容" style="width: 350px;"></el-input></span></li>
							<li style=" cursor: pointer;width:10%;height:30px;line-height:30px;background:#5DABEC;margin-left:470px;text-align: center;color:white;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;">
								取消
							</li>
							<li style="cursor: pointer;width:10%;height:30px;line-height:30px;border:1px solid #5DABEC;margin-left:350px;text-align: center;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;color:#5DABEC">
											保存
							</li>
						</ul>
					</div>
					<el-button slot="reference" style='color:white;width:120px;text-align: center;'>开始</el-button>
				</el-popover>
			<el-button slot="reference" style='color:white;width:120px;text-align:center;margin-left: 10px;'>导出Excel</el-button>
		</div>


		<div id="hai">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
				<el-table-column prop="bianma" label="序">
				</el-table-column>
				<el-table-column prop="address" label="校区名称">
				</el-table-column>
				<el-table-column prop="xiaoqu" label="校区地址">
				</el-table-column>
				<el-table-column prop="nianji" label="联系方式">
				</el-table-column>
				<el-table-column prop="caozuo" label="操作">
					<a id="shezhi" type="text" @click="open"> 修改</a>
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
		name: 'xue',
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
					bianma: '1',
					address: '城南校区',
					xiaoqu: '湖南省岳阳市岳阳楼区',
					nianji: '153214654',
					
				}, {
					bianma: '1',
					address: '城南校区',
					xiaoqu: '湖南省岳阳市岳阳楼区',
					nianji: '153214654',
					
				}, {
					bianma: '1',
					address: '城南校区',
					xiaoqu: '湖南省岳阳市岳阳楼区',
					nianji: '153214654',
					
				}, {
					bianma: '1',
					address: '城南校区',
					xiaoqu: '湖南省岳阳市岳阳楼区',
					nianji: '153214654',
					
				},{
					bianma: '1',
					address: '城南校区',
					xiaoqu: '湖南省岳阳市岳阳楼区',
					nianji: '153214654',
					
				},{
					bianma: '1',
					address: '城南校区',
					xiaoqu: '湖南省岳阳市岳阳楼区',
					nianji: '153214654',
					
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
	.xiang{
		margin-left: 50px;
		margin-top: 50px;
	}
	#xin{
		margin-left:120px ;
	}
	#app {
		margin-top: 20px;
	}

	#app .xiao {
		color: #a6a6a6;
		margin-left: 50px;
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
		text-align: center;
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
	#xin .el-button{
	    text-align:center;
		background: #5584ff;
		
	}
	.zhi{
		list-style-type: none;
	}
	.zhi li:nth-of-type(1) {
		margin-top: 45px;

	}
	.zhi li:nth-of-type(2) {
		margin-top: -38px;
		margin-left: 500px;
	}
	.zhi li:nth-of-type(3) {
		margin-top: 45px;

	}
	.zhi li:nth-of-type(4) {
		margin-top: 40px;
		display: inline-block;
		position: absolute;
	
	}
	.zhi li:nth-of-type(5) {
		margin-top: 40px;
		margin-left: 300px;
		display: inline-block;
		border: 1px solid red;
	}	
	#xin .el-button:nth-of-type(1){
		height: 40px;
	}
</style>
