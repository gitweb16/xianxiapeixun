<template>
	<div class="container">
		<div id="add">
			<span>新增教师管理</span>
		</div>
		<div class="zi">
			通知关键字：
			<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
		</div>
		<div id="sou">
			<span>搜索</span>
		</div>
		<div class="biao" style="text-align: center;">
			<el-table 
					    :data="tableData"
					    style="width: 100%;text-align: center;">
						<el-table-column 
						  prop="ming"
						  label="教师姓名"
						  width="180" style="text-align: center;">
						</el-table-column>
					    <el-table-column
					      prop="ma"
					      label="手机号码"
					      width="180">
					    </el-table-column>  
					    <el-table-column
					      prop="qu"
					      label="所任校区">
					    </el-table-column>
						<el-table-column
						  prop="xing"
						  label="教师类型"
						  width="180" style="text-align: center;">
						</el-table-column>
						<el-table-column
						  prop="duan"
						  label="教学学段"
						  width="180">
						</el-table-column>  
						<el-table-column
						  prop="ke"
						  label="教学科目"
						  width="180">
						</el-table-column>
						<el-table-column
						  prop="cha"
						  label="查看">
						</el-table-column>
					  </el-table>
					  <div class="block" id="fenye">
					   	<el-pagination
					   	  @size-change="handleSizeChange"
					   	  @current-change="handleCurrentChange"
					   	  :current-page.sync="currentPage3"
					   	  :page-size="100"
					   	  layout="prev, pager, next, jumper"
					   	  :total="1000">
					   	</el-pagination>
					  </div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'Teacher',
	    data() {
	      return {
	        tableData: [{
	          ming:'授课教师一',
			  ma:'18801445543',
			  qu:'城南校区',
			  xing:'授课教师',
			  duan:'初中',
			  ke:'语文、历史',
			  cha:'查看'
	        },{
	          ming:'授课教师二',
			  ma:'18801445546',
			  qu:'城南校区',
			  xing:'业务教师',
			  duan:'',
			  ke:'',
			  cha:'查看'
	        }, {
	          ming:'授课教师一',
			  ma:'18801445543',
			  qu:'城南校区',
			  xing:'授课教师',
			  duan:'初中',
			  ke:'语文、历史',
			  cha:'查看'
	        }, {
	          ming:'授课教师二',
			  ma:'18801445546',
			  qu:'城南校区',
			  xing:'业务教师',
			  duan:'',
			  ke:'',
			  cha:'查看'
	        }, {
	          ming:'授课教师一',
			  ma:'18801445543',
			  qu:'城南校区',
			  xing:'授课教师',
			  duan:'初中',
			  ke:'语文、历史',
			  cha:'查看'
	        },{
	          ming:'授课教师二',
			  ma:'18801445546',
			  qu:'城南校区',
			  xing:'业务教师',
			  duan:'',
			  ke:'',
			  cha:'查看'
	        },{
	          ming:'授课教师一',
			  ma:'18801445543',
			  qu:'城南校区',
			  xing:'授课教师',
			  duan:'初中',
			  ke:'语文、历史',
			  cha:'查看'
	        }, {
	          ming:'授课教师二',
			  ma:'18801445546',
			  qu:'城南校区',
			  xing:'业务教师',
			  duan:'',
			  ke:'',
			  cha:'查看'
	        }, {
	          ming:'授课教师一',
			  ma:'18801445543',
			  qu:'城南校区',
			  xing:'授课教师',
			  duan:'初中',
			  ke:'语文、历史',
			  cha:'查看'
	        }, {
	          ming:'授课教师二',
			  ma:'18801445546',
			  qu:'业务教师',
			  xing:'授课教师',
			  duan:'',
			  ke:'',
			  cha:'查看'
	        }]
	      }
	    }
	  }
</script>

<style>
	#add{
		color: white;
		width: 6%;
		font-size: 12px;
		float: left;
		margin-left: 100px;
		border-radius: 3px;
		text-align: center;
	}
	#add span{
		color: white;
		height: 37px;
		background: #5DABEC;
		text-align: center;
		line-height: 37px;
		display: block;
		box-shadow: 0px 0px 5px #5DABEC;
	}
	.zi{
		width: 30%;
		position: absolute;
		margin-left: 700px;
		font-size: 13px;
		color: darkgray;
	}
	#sou{
		color: white;
		width: 5%;
		float: right;
		margin-right: 190px;
		border-radius: 3px;
		text-align: center;
		font-size: 13px;
	}
	#sou span{
		color: white;
		height: 37px;
		background: #5DABEC;
		text-align: center;
		line-height: 37px;
		display: block;
		box-shadow: 0px 0px 5px #5DABEC;
	}
	.biao{
		width: 81%;
	    position: absolute;
		overflow: hidden;
		margin-left: 100px;
		margin-top: 70px;
		text-align: center;
	}
	#fenye{
		margin-left: 0px;
		margin-top: 20px;
	}
</style>