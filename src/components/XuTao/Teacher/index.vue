<template>
	<div class="container">
		<div id="add">
			<el-popover placement="right" width="900" trigger="click">
				<p class="xiang">教师详情</p>
				<div>
					<ul class='zhi'>
						<li>教师姓名：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li>手机号码：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li>身份证号：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li>联系地址：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li style="width: 100%;">教师头像：
							<el-upload class="upload-demo1" style="width: 250px;height: 200px;" drag action="https://jsonplaceholder.typicode.com/posts/"
							 multiple>
								<i class="el-icon-upload" style="font-size: 12px;">上传</i>
							</el-upload>
							<P style="width: 100%;margin: -170px 70px;">支持上传格式：.jpg单次上传文件限制大小2MB</P>
						</li>
						<li>所住校区：

							<el-select v-model="value" placeholder="请选择" style='width: 295px;'>
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</li>
						<li>教师类型：
							<el-select v-model="value1" placeholder="请选择" style='width: 295px;'>
								<el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.value1">
								</el-option>
							</el-select>
						</li>
						<li>教学学段：
							<el-select v-model="value2" placeholder="请选择" style='width: 295px;'>
								<el-option v-for="item in options2" :key="item.value2" :label="item.label2" :value="item.value2">
								</el-option>
							</el-select>
						</li>
						<li>教学科目：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li style="width: 8%;">教师简介：</li>
						<li>
							<el-input type="textarea" :rows="2" placeholder="请输入通知详细内容" v-model="textarea">
							</el-input>
						</li>
						<li style="width:10%;height:50px;line-height:50px;background:#5DABEC;margin-left:300px;text-align: center;;color:white;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;margin-top: 20px;">
							保存
						</li>
						<li style="width:10%;height:50px;line-height:50px;border:1px solid #5DABEC;margin-left:30px;text-align: center;;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;color:#5DABECmargin-top: 20px;">
							重置
						</li>
					</ul>
				</div>
				<el-button slot="reference" style='position:absolute;margin-top: -11px; margin-left:-46px;border:none;background: #5DABEC;
		color: white;'>新增教师管理</el-button>
			</el-popover>
		</div>
		<div class="zi">
			通知关键字：
			<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
		</div>
		<div id="sou">
			<span>搜索</span>
		</div>
		<div class="biao" style="text-align: center;">
			<el-table :data="tableData" style="width: 100%;text-align: center;">
				<el-table-column prop="ming" label="教师姓名" width="180" style="text-align: center;">
				</el-table-column>
				<el-table-column prop="ma" label="手机号码" width="180">
				</el-table-column>
				<el-table-column prop="qu" label="所任校区">
				</el-table-column>
				<el-table-column prop="xing" label="教师类型" width="180" style="text-align: center;">
				</el-table-column>
				<el-table-column prop="duan" label="教学学段" width="180">
				</el-table-column>
				<el-table-column prop="ke" label="教学科目" width="180">
				</el-table-column>
				<el-table-column prop="cha" label="查看">
				</el-table-column>
			</el-table>
			<el-popover placement="right" width="900" trigger="click">
				<p class="xiang">教师详情</p>
				<div>
					<ul class='zhi'>
						<li>教师姓名：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li>手机号码：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li>身份证号：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li>联系地址：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li style="width: 100%;">教师头像：
							<el-upload class="upload-demo" style="width: 250px;height: 200px;" drag action="https://jsonplaceholder.typicode.com/posts/"
							 multiple>
								<div class="el-upload-dragger">
									<i class="el-icon-upload" style="font-size: 12px;">上传</i>
								</div>

							</el-upload>
							<P style="width: 100%;margin: -170px 70px;">支持上传格式：.jpg单次上传文件限制大小2MB</P>
						</li>
						<li>所住校区：

							<el-select v-model="value" placeholder="请选择" style='width: 295px;'>
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</li>
						<li>教师类型：
							<el-select v-model="value1" placeholder="请选择" style='width: 295px;'>
								<el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.value1">
								</el-option>
							</el-select>
						</li>
						<li>教学学段：
							<el-select v-model="value2" placeholder="请选择" style='width: 295px;'>
								<el-option v-for="item in options2" :key="item.value2" :label="item.label2" :value="item.value2">
								</el-option>
							</el-select>
						</li>
						<li>教学科目：<span>
								<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
							</span></li>
						<li style="width: 8%;">教师简介：</li>
						<li>
							<el-input type="textarea" :rows="2" placeholder="请输入通知详细内容" v-model="textarea">
							</el-input>
						</li>
						<li style="width:10%;height:50px;line-height:50px;background:#5DABEC;margin-left:300px;text-align: center;;color:white;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;margin-top: 20px;">
							保存
						</li>
						<li style="width:10%;height:50px;line-height:50px;border:1px solid #5DABEC;margin-left:30px;text-align: center;;border-radiu:3px;box-shadow: 2px 0px 6px #5DABEC;color:#5DABECmargin-top: 20px;">
							重置
						</li>
					</ul>
				</div>
				<el-button slot="reference" style='position:absolute;margin-top:-480px;margin-left:440px;border:none'>查看</el-button>
			</el-popover>
			<div class="block" id="fenye">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
				 :page-size="100" layout="prev, pager, next, jumper" :total="1000">
				</el-pagination>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Teacher',
		data() {
			return {
				textarea: "",
				tableData: [{
					ming: '授课教师一',
					ma: '18801445543',
					qu: '城南校区',
					xing: '授课教师',
					duan: '初中',
					ke: '语文、历史',
					cha: '查看'
				}, {
					ming: '授课教师二',
					ma: '18801445546',
					qu: '城南校区',
					xing: '业务教师',
					duan: '',
					ke: '',
					cha: '查看'
				}, {
					ming: '授课教师一',
					ma: '18801445543',
					qu: '城南校区',
					xing: '授课教师',
					duan: '初中',
					ke: '语文、历史',
					cha: '查看'
				}, {
					ming: '授课教师二',
					ma: '18801445546',
					qu: '城南校区',
					xing: '业务教师',
					duan: '',
					ke: '',
					cha: '查看'
				}, {
					ming: '授课教师一',
					ma: '18801445543',
					qu: '城南校区',
					xing: '授课教师',
					duan: '初中',
					ke: '语文、历史',
					cha: '查看'
				}, {
					ming: '授课教师二',
					ma: '18801445546',
					qu: '城南校区',
					xing: '业务教师',
					duan: '',
					ke: '',
					cha: '查看'
				}, {
					ming: '授课教师一',
					ma: '18801445543',
					qu: '城南校区',
					xing: '授课教师',
					duan: '初中',
					ke: '语文、历史',
					cha: '查看'
				}, {
					ming: '授课教师二',
					ma: '18801445546',
					qu: '城南校区',
					xing: '业务教师',
					duan: '',
					ke: '',
					cha: '查看'
				}, {
					ming: '授课教师一',
					ma: '18801445543',
					qu: '城南校区',
					xing: '授课教师',
					duan: '初中',
					ke: '语文、历史',
					cha: '查看'
				}, {
					ming: '授课教师二',
					ma: '18801445546',
					qu: '业务教师',
					xing: '授课教师',
					duan: '',
					ke: '',
					cha: '查看'
				}],
				options: [{
					value: '选项1',
					label: '城南校区'
				}, {
					value: '选项2',
					label: '世贸校区'
				}, {
					value: '选项3',
					label: '滨江校区'
				}, {
					value: '选项4',
					label: '万达校区'
				}, {
					value: '选项5',
					label: '花之南校区'
				}],
				value: '',
				options1: [{
					value1: '选项1',
					label1: '授课教师'
				}, {
					value1: '选项2',
					label1: '业务教师'
				}],
				value1: '',
				options2: [{
					value2: '选项1',
					label2: '高中'
				}, {
					value2: '选项2',
					label2: '初中'
				}, {
					value2: '选项3',
					label2: '小学'
				}, {
					value2: '选项4',
					label2: '幼稚园'
				}],
				value2: ''
			}
		}
	}
</script>

<style scoped>
	#add {
		color: white;
		width: 6%;
		font-size: 12px;
		float: left;
		height: 20px;
		line-height: 20px;
		margin-left: 100px;
		border-radius: 3px;
		text-align: center;
		box-shadow: 0px 0px 5px #5DABEC;
		background: #5DABEC;
		color: white;
	}

	.zi {
		width: 30%;
		position: absolute;
		margin-left: 700px;
		font-size: 13px;
		color: darkgray;
	}

	#sou {
		color: white;
		width: 5%;
		float: right;
		margin-right: 190px;
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

	#fenye {
		margin-left: 0px;
		margin-top: 20px;
	}

	.el-upload-dragger {
		background-color: #fff;
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		box-sizing: border-box;
		width: 360px;
		height: 180px;
		text-align: center;
		position: relative;
		overflow: hidden;
		height: 77px;
		width: 184px;
		margin: -77px 69px;
		position: absolute;
	}

	.zhi li {
		list-style: none;
		width: 50%;
		height: 70px;
		line-height: 70px;
		display: inline-block;
	}

	.upload-demo1 .el-upload-dragger {
		background-color: #fff;
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		box-sizing: border-box;
		width: 136px;
		height: 107px;
		text-align: center;
		position: relative;
		overflow: hidden;
		margin: -33px 76px;
	}
</style>
