<template>
	<div id='app'>
		<!--用户来源下拉框-->
		<div id="oo">
				<span class="xiao">用户来源:</span>
				<el-select v-model="value" placeholder="请选择">
		  <el-option
		    v-for="item in options"
		    :key="item.value"
		    :label="item.label"
		    :value="item.value">
		  </el-option>
		</el-select>
		
		<!--是否注册下拉框-->
		<div id="xiala">
			<span>是否注册:</span>
			<el-select v-model="value2" placeholder="请选择">
			  <el-option
			    v-for="item in oo"
			    :key="item.value2"
			    :label="item.label2"
			    :value="item.value2">
			  </el-option>
			</el-select>
		</div>
		
		<!--消费下拉框-->
		<div id="xiaofei">
			<span>是否消费:</span>
			<el-select v-model="value3" placeholder="请选择">
			  <el-option
			    v-for="item in ii"
			    :key="item.value3"
			    :label="item.label3"
			    :value="item.value3">
			  </el-option>
			</el-select>
		</div>
		<!--是否活动选择-->
		<div id="shuru">
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
				<el-table-column prop="bianma" label="用户来源" width="160">
				</el-table-column>
				<el-table-column prop="address" label="用户昵称" width="200">
				</el-table-column>
				<el-table-column prop="xiaoqu" label="性别">
				</el-table-column>
				<el-table-column prop="nianji" label="是否注册">
				</el-table-column>
				<el-table-column prop="price" label="手机号码">
				</el-table-column>
				<el-table-column prop="shi" label="学员数">
				</el-table-column>
				<el-table-column prop="active" label="是否消费">
				</el-table-column>
				<el-table-column prop="caozuo" label="查看">
					<a id="shezhi" type="text" @click="open"> 查看</a>
				</el-table-column>
			</el-table>
<el-popover class="nei"
		   placement="right"
		   width="900"
		   trigger="click">
		    <p class="xiang">订单详情</p>
			<div>
				<ul class="ding">
					<li>用户来源: 微信小程序</li>
					<li>用户昵称:ABB</li>
				    <li>性别: 男</li>
					<li>获取时间:2019-9-7</li>
					<li>是否注册:是</li>
					<li>手机号码:110120</li>
					<li>注册时间:20.1544</li>
				    <li>学员数量:2</li>
				    <li>学员姓名: 学员1 学员2</li>
				    <li>是否消费:是</li>
				    <li>消费次数: 2</li>
					<li>消费金额: 12000.00</li>
					<li>剩余总价: 1200</li>
					<li>
						<div id="close"><span>关</span></div>
					
					</li>
				</ul>
			</div>
		   <el-button slot="reference" style="border:none;margin-left: 395px;color:#0000FF;showClose:true">查看</el-button>
		 </el-popover>
		</div>
		<div class="block" id="fenye">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
			 :page-size="100" layout="prev, pager, next, jumper" :total="1000">
			</el-pagination>
		</div>
	</div>
</div>


</template>

<script scoped>
	export default {
		name: 'parent',
		data() {
			return {
				options: [{
					value: '选项1',
					label: '微信小程序'
				}, {
					value: '选项2',
					label: '支付宝小程序'
				}],
				
				oo: [{
					value2: '选项1',
					label2: '是'
				}, {
					value2: '选项2',
					label2: '否'
				}],
				ii: [{
					value3: '选项1',
					label3: '是'
				}, {
					value3: '选项2',
					label3: '否'
				}],

				value: '',
				value2: '',
				value3: '',
				input: '',
				tableData: [{
					bianma: '微信小程序',
					address: '微信名称——ABB',
					xiaoqu: '男',
					nianji: '是',
					price: '15173075028',
					shi: '2',
					active: '是',
				}, {
					bianma: '微信小程序',
					address: '微信名称——ABB',
					xiaoqu: '男',
					nianji: '是',
					price: '15173075028',
					shi: '2',
					active: '是',
				}, {
					bianma: '微信小程序',
					address: '微信名称——ABB',
					xiaoqu: '男',
					nianji: '是',
					price: '15173075028',
					shi: '2',
					active: '是',
				}, {
					bianma: '微信小程序',
					address: '微信名称——ABB',
					xiaoqu: '男',
					nianji: '是',
					price: '15173075028',
					shi: '2',
					active: '是',
				}, , {
					bianma: '微信小程序',
					address: '微信名称——ABB',
					xiaoqu: '男',
					nianji: '是',
					price: '15173075028',
					shi: '2',
					active: '是',
				}, , {
					bianma: '微信小程序',
					address: '微信名称——ABB',
					xiaoqu: '男',
					nianji: '是',
					price: '15173075028',
					shi: '2',
					active: '是',
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
<style scope>
	
	#close{
		width: 140px;
		height: 40px;
		background: #5584ff;
		position: absolute;
		margin-top: 110px;
		margin-left: 350px;
		line-height: 40px;
	}
	#close span{
		width: 100%;
		height: 100%;
		display: block;
		text-align: center;
		text-indent: 0px;
	}
	.nei{
		position: absolute;	
		margin-top: -285px;
		margin-right: 90px;
	}
	.ding li{
		width: 50%;
		height: 20px;
		line-height: 20px;
		list-style: none;
		display: inline-block;
		font-size: 12px;
		text-indent: 30px;
	}
	.ding li:nth-of-type(7){
		width: 100%;
	}
	.ding li:nth-of-type(10){
		width: 100%;
	}
	.ding li:nth-of-type(13){
		width: 100%;
	}
	.ding li:nth-of-type(1){
	   margin-top: 30px;
	}
	.ding li:nth-of-type(2){
		margin-top: 30px;
	}
	.ding li:nth-of-type(5){
	   margin-top: 50px;
	}
	.ding li:nth-of-type(6){
		margin-top: 50px;
	}
	.ding li:nth-of-type(8){
	   margin-top: 50px;
	}
	.ding li:nth-of-type(9){
		margin-top: 50px;
	}
	.ding li:nth-of-type(11){
	   margin-top: 50px;
	}
	.ding li:nth-of-type(12){
		margin-top: 50px;
	}
	.ding li:nth-of-type(14){
		height: 160px;
		width: 100%;
	}
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
		width: 200px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 740px;
		margin-top: 72px;
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
		margin-top: -15px;
		text-align: center;
	}

	#sou span {
		color: white;
		height: 40px;
		background: #5DABEC;
		text-align: center;
		line-height: 40px;
		display: block;
		margin-top: 15px;
		box-shadow: 0px 0px 5px #5DABEC;
	}

	.kecheng {
		position: relative;
		left: 615px;
		top: 80px;
		
	}

	#hai {
		width: 1280px;
		margin: 0px auto;
		text-align: center;
		margin-top: 2.375rem;
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
	.el-input{
		width: 200px;
	}
	#shuru{
		position: absolute;
		top:0px;
		left: 0px;
		margin-top: -10px;
		margin-left: 400px;
	}
	#xiala{
		position: absolute;
		top:0px;
		left:0px;
		margin-top: 62px;
		margin-left: 330px;
	}
	#xiaofei{
		position: absolute;
		top:0px;
		left:0px;
		margin-top: 62px;
		margin-left: 680px;
	}
</style>
