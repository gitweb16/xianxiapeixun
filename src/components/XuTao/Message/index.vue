<template>
	<div id='app' style="height: 500px;">
		<!--是否活动选择-->
		<div class="gcd">
			<span class="gen">通知名称:</span>
			<div id="ii">
				<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
			</div>
			<span class="fu">发送用户:</span>
			<div id="fi">
				<el-select v-model="value2" placeholder="请选择用户">
					<el-option v-for="item2 in options2" :key="item2.value2" :label="item2.label2" :value="item2.value2">
					</el-option>
				</el-select>
			</div>
			<div id="sou">
				<span>搜索</span>
			</div>
			<div class="biao">
				<el-table :data="tableData" stripe style="width: 100%;">
					<el-table-column prop="cheng" label="通知名称" width="180">
					</el-table-column>
					<el-table-column prop="nong" label="通知内容" width="690">
					</el-table-column>
					<el-table-column prop="name" label="家长" width="180">
					</el-table-column>
					<el-table-column prop="address" label="操作">
					</el-table-column>
				</el-table>
				<el-popover placement="right" width="900" trigger="click">
					<p class="xiang" style="margin-left: 20px;">通知编辑</p>
					<div>
						<ul class='zhi'>
							<li>通知标题：<span><el-input v-model="input" placeholder="请输入内容" style="width: 250px;"></el-input></span></li>
							<li>发送用户：<span><el-input v-model="input" placeholder="请输入内容" style="width: 250px;"></el-input></span></li>
							<li>通知内容：</li>
							<li style="width: 67.5%;">
								<el-input
								  type="textarea"
								  :rows="6"
								  placeholder="亲爱的[UserName]，您已为[StuName]成功报名了[CourseName],请按时上课哦~"
								  v-model="textarea">
								</el-input>
							</li>
							<li style="cursor: pointer;width:10%;height:30px;line-height:30px;background:#5DABEC;margin-left:400px;text-align: center;color:white;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;">
								取消
							</li>
							<li style="cursor: pointer;width:10%;height:30px;line-height:30px;border:1px solid #5DABEC;margin-left:30px;text-align: center;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;color:#5DABEC">
											保存
							</li>
						</ul>
					</div>
					<el-button slot="reference" style='position:absolute;margin-top:-460px;margin-left:470px;border:none'>编辑</el-button>
				</el-popover>
				<div class="block" id="fenye">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
					 :page-size="100" layout="prev, pager, next, jumper" :total="1000">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>
<script scoped>
	export default {
		name: 'Message',
		data() {
			return {
				options2: [{
					value2: '选项1',
					label2: '家长'
				}, {
					value2: '选项2',
					label2: '授课老师'
				}, {
					value2: '选项3',
					label2: '业务老师'
				}],
				value2: '',
				tableData: [{
					cheng: '报名成功通知',
					nong: '亲爱的[UserName]，您已为[StuName]成功报名了[CourseName],请按时上课哦~',
					name: '家长',
					address: '编辑'
				}, {
					cheng: '考勤未到通知',
					nong: '亲爱的[UserName]，您的学员[StuNamel在[CourseDate]应 参加的[CourseName]考勤未到，请确认!',
					name: '家长',
					address: '编辑'
				}, {
					cheng: '课程结束提醒',
					nong: '亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束,请确认!',
					name: '家长',
					address: '编辑'
				}, {
					cheng: '课程准备提醒',
					nong: '亲爱的[TeacherName],您的[CourseName]课程即将 上课，请做好上课准备!',
					name: '授课教师',
					address: '编辑'
				}, {
					cheng: '报名成功通知',
					nong: '亲爱的[UserName],您已为[StuName]成功报名了[CourseName],请按时上课哦~',
					name: '家长',
					address: '编辑'
				}, {
					cheng: '考勤未到通知',
					nong: '亲爱的[UserName]，您的学员[StuName]在[CourseDate]应参加的[CourseName]考勤未到，请确认!',
					name: '家长',
					address: '编辑'
				}, {
					cheng: '课程结束提醒',
					nong: '亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束,请确认!',
					name: '家长',
					address: '编辑'
				}, {
					cheng: '课程准备提醒',
					nong: '亲爱的[TeacherName],您的[CourseName]课程即将 上课，请做好上课准备!',
					name: '授课教师',
					address: '编辑'
				}, {
					cheng: '报名成功通知',
					nong: '亲爱的[UserName],您已为[StuName]成功报名了[CourseName],请按时上课哦~',
					name: '家长',
					address: '编辑'
				}, {
					cheng: '考勤未到通知',
					nong: '亲爱的[UserName]，您的学员[StuName]在[CourseDate]应参加的[CourseName]考勤未到，请确认!',
					name: '家长',
					address: '编辑'
				}],
				gridData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}]
			}
		}
	}
</script>
<style scoped>
	#app {
		width: 100%;
	}

	.gcd {
		margin-top: 100px;

	}

	#ii {
		width: 250px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 140px;
		margin-top: 60px;

	}

	#ii el-option {
		float: right;
	}

	#fi {
		width: 250px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 620px;
		margin-top: 60px;
	}

	#fi el-option {
		float: right;
	}

	#cName {
		width: 250px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 860px;
		margin-top: 60px;
	}

	#sou {
		width: 5%;
		float: right;
		margin-right: 190px;
		border-radius: 3px;
		text-align: center;
		margin-top: -82px;
	}

	#sou span {
		color: white;
		height: 40px;
		background: #5DABEC;
		text-align: center;
		line-height: 40px;
		display: block;

		box-shadow: 0px 0px 5px #5DABEC;
	}

	.gen {
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 70px;
		margin-top: 70px;
		font-size: 13px;
		color: darkgray;
	}

	.fu {
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 540px;
		margin-top: 70px;
		font-size: 13px;
		color: darkgray;
	}

	.biao {
		width: 81%;
		position: absolute;
		overflow: hidden;
		margin-left: 70px;
		margin-top: -10px;
		text-align: center;
	}

	#fenye {
		margin-left: 40px;
		margin-top: 20px;
	}
	.zhi li{
		height: 60px;
		line-height: 60px;
		width: 40%;
		list-style: none;
		display: inline-block;
	}
	.zhi li:nth-of-type(1){
		margin-left: 20px;
	}
	.zhi li:nth-of-type(3){
		margin-left: 20px;
		margin-top: 20px;
		width: 18%;
	}
	.zhi li:nth-of-type(4){
		margin-left: -90px;
		margin-top: 20px;
		
	}
	.zhi li:nth-of-type(5){
		margin-top: 20px;
	}
	.zhi li:nth-of-type(6){
		margin-top: 20px;
	}
</style>
