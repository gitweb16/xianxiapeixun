<template>
	<div class="container">
			<el-popover placement="right" width="900" trigger="click">
				<p>通知编辑</p>
				<div>
					<ul class='nei'>
						<li >通知内容：</li>
						<li>
							<el-input
							  type="textarea"
							  :rows="2"
							  placeholder="请输入通知详细内容"
							  v-model="textarea">
							</el-input>
						</li>
						<li><p>发送用户:<span style="width:20%;height:30px;border:1px solid #5DABEC;display:block;position:absolute;margin: -22px 69px;"></span></p>
						</li>
						<li  style="width:10%;height:50px;line-height:50px;background:#5DABEC;margin-left:250px;text-align: center;;color:white;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;">
							立即发送
						</li>
						<li  style="width:10%;height:50px;line-height:50px;border:1px solid #5DABEC;margin-left:50px;text-align: center;;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;color:#5DABEC">
							重置
						</li>
					</ul>
				</div>
				<el-button slot="reference" style='position:absolute;margin-top:0px;margin-left:100px;z-index:30;color:white;background: #5DABEC;
		box-shadow: 0px 0px 5px #5DABEC;'>新增机构通知</el-button>
			</el-popover>
		<div class="zi">
			通知关键字：
			<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
		</div>
		<div id="sou">
			<span>搜索</span>
		</div>
		<div class="biao">
			<el-table :data="tableData" stripe style="width: 100%;text-align: center;">
				<el-table-column prop="nei" label="通知内容" width="680" style="text-align: center;">
				</el-table-column>
				<el-table-column prop="date" label="日期" width="280">
				</el-table-column>
				<el-table-column prop="cao" label="操作">
				</el-table-column>
			</el-table>
			<el-popover placement="right" width="900" trigger="click">
				<p class="xiang">查看通知</p>
				<div>
					<ul class='zhi'>
						<li >通知内容：</li>
						<li>
							<!-- <p>各位家长请注意，本周因为上级检查临时休息,请安排好自己的工作,谢谢"</p> -->
							<el-input
							  type="textarea"
							  :rows="2"
							  placeholder="各位家长请注意，本周因为上级检查临时休息,请安排好自己的工作,谢谢"
							  v-model="textarea">
							</el-input>
						</li>
						<li>发送用户：<span style="background-color: #000088; width: 10%;text-align:center;height: 30px;line-height: 30px; color: white;display: block;position: absolute;margin:-25px 90px">授课老师</span>
							<span style="background-color: #000088; width: 10%;text-align:center;height: 30px;line-height: 30px; color: white;display: block;position: absolute;margin:-25px 200px">业务老师</span>
						</li>
						<li>
							<p style="height: 50px; line-height: 50px;">发送时间：2019-4-14 23:01:17</p>
						</li>
						<li>
							<butten>确认</butten>
						</li>
					</ul>
				</div>
				<el-button slot="reference" style='position:absolute;margin-top:-450px;margin-left:240px;border:none;z-index: 3;'>查看</el-button>
			</el-popover>
			
			

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
		name: 'Inform',
		data() {
			return {
				input: '',
				textarea: '',
				tableData: [{
					date: '2016-05-02  22:54:10',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-04  22:54:13',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-01  22:54:17',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-03  22:54:40',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-04  22:53:10',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-01  22:53:18',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-03  22:53:20',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-04  22:55:10',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-01  22:55:20',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}, {
					date: '2016-05-03  22:51:10',
					nei: '各位家长请注意，本周因为上级检查临时休息，请安排自己小孩的学习，谢谢！',
					cao: '查看'
				}]
			}
		}
	}
</script>

<style>
	#add {
		color: white;
		width: 6%;
		font-size: 12px;
		float: left;
		margin-left: 100px;
		border-radius: 3px;
		text-align: center;
		margin-top: -20px;
	}

	#add span {
		color: white;
		height: 37px;
		background: #5DABEC;
		text-align: center;
		line-height: 37px;
		display: block;
		margin-top: 12px;
		
	}

	.zi {
		width: 30%;
		margin-top: -5px;
		position: absolute;
		margin-left: 870px;
		font-size: 13px;
		color: darkgray;
	}

	#sou {
		color: white;
		width: 5%;
		float: right;
		margin-right: 330px;
		border-radius: 3px;
		text-align: center;
		font-size: 13px;
	}

	#sou span {
		color: white;
		height: 37px;
		background: #5DABEC;
		text-align: center;
		line-height: 37px;
		display: block;
		margin-top: -5px;
		box-shadow: 0px 0px 5px #5DABEC;
		
	}

	.biao {
		width: 81%;
		position: absolute;
		overflow: hidden;
		margin-left: 100px;
		margin-top: 70px;
		text-align: center;
	}

	/* #fenye {
		margin-left: 0px;
		margin-top: 20px;
	} */
	.zhi li{
		list-style:none;
		height:50px;
		width:50%;
		display:inline-block; 
	}
	.zhi li:nth-of-type(1){
		width:8%;
		margin-left:20px;
		text-align:-20px;
	}
	
	.zhi li:nth-of-type(2) .el-textarea__inner{
	    height: 150px;
		border:1px solid #5ab1ef;
		width:100%;
	}
	.zhi li:nth-of-type(4){
		width:100%;
			margin-left:20px;
	}
	.zhi li:nth-of-type(3){
			margin-left:20px;
	}
	.zhi li:nth-of-type(2){
		margin-left:20px;
	}
	.zhi li:nth-of-type(5){
		margin-left:370px;
		text-align:center;
		height:40px;
		line-height:40px;
		width:10%;
		color:white;
		background-color: #5ab1ef;
	}
	.nei li{
		list-style:none;
		height:50px;
		width:50%;
		display:inline-block; 
	}
	.nei li:nth-of-type(1){
		width:8%;
		margin-left:20px;
		text-align:-20px;
	}
	.nei li:nth-of-type(3){
		width:100%;
		margin-left:20px;
	}
	.nei li:nth-of-type(2) .el-textarea__inner{
	    height: 150px;
		border:1px solid #5ab1ef;
		width:100%;
	}
</style>
