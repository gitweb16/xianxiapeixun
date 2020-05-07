<template>
	<div class="container">
		<div>
			<ul class="uls">
				<li><span>订单来源：</span>
					<el-select v-model="value" clearable placeholder="请选择订单来源">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</li>
				<li><span>家长手机号</span>
					<el-input v-model="input" placeholder="请输入内容"></el-input>
				</li>
			</ul>
		</div>
		<div class="biao">
			<el-table :data="tableData" stripe style="width: 100%;text-align: center;">
				<el-table-column prop="nei" label="订单编号" style="text-align: center;">
				</el-table-column>
				<el-table-column prop="cao" label="订单来源">
				</el-table-column>
				<el-table-column prop="date" label="订单日期">
				</el-table-column>
				<el-table-column prop="yewu" label="业务教师">
				</el-table-column>
				<el-table-column prop="shouji" label="家长手机号">
				</el-table-column>
				<el-table-column prop="xueyuan" label="学员姓名">
				</el-table-column>
				<el-table-column prop="kecheng" label="课程名称">
				</el-table-column>
				<el-table-column prop="xuex" label="学习状态">
				</el-table-column>
				<el-table-column prop="dingdan" label="订单总价">
				</el-table-column>
				<el-table-column prop="chak" label="查看">
				</el-table-column>
			</el-table>
			<el-popover placement="right" width="1000"  trigger="click">
					<p class="xiang">订单详情</p>
				<div>
					<ul class="ding">
						<li>订单编号: 20190415001</li>
						<li>订单来源:微信小程序</li>
						<li>订单时间: 2019-4-14</li>
						<li>业务教师:无</li>
						<li>课程名称:英语个性化一对-教学</li>
						<li>课程校区:城南校区</li>
						<li>课程教师:授课教师一</li>
						<li>家长ID:耐寒教育</li>
						<li>家长手机号: 18809122232</li>
						<li>学员姓名:学员一.学员二</li>
						<li>课程单价: 100</li>
						<li>剩余课时: 12</li>
						<li>剩余总价: 1200</li>
					</ul>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
					</div>
				</div>
				
				<el-button slot="reference" style='position:absolute;margin-top:-440px;margin-left:395px;border:none'>查看</el-button>
			</el-popover>
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
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				}, {
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				},
				{
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					yewu: '业务教师',
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				},
				{
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					yewu: '业务教师',
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				}, 
				{
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					yewu: '业务教师',
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				}, 
				{
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				}, 
				{
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					yewu: '业务教师',
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				},
				{
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					yewu: '业务教师',
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				}, 
				{
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					yewu: '业务教师',
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				}, 
				{
					nei: '2019401500',
					cao: '微信小程序',
					date: '2016-05-02',
					yewu: '业务教师',
					shouji: '家长手机号',
					xueyuan: '学院姓名',
					kecheng: '课程名称',
					xuex: '学习中',
					dingdan: '￥1500',
					chak: '查看',
				}],
				options: [{
						value: '选项1',
						label: '支付宝'
					}, {
						value: '选项2',
						label: '微信'
					}, {
						value: '选项3',
						label: '业务扫码收款'
					}, {
						value: '选项4',
						label: '业务线下收款'
					}
				],
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
	.dialog-footer{
		margin-top: 50px;
		margin-left: 800px;
	}
		.container {
		width: 90%;
	}
	
	.nei {
		position: absolute;
		margin-top: -550px;
		margin-left: 1090px;
	}
	
	.xiang {
		font-weight: bold;
		margin-top: 10px;
	}
	
	.ding li {
		width: 50%;
		height: 20px;
		line-height: 20px;
		list-style: none;
		display: inline-block;
		font-size: 12px;
		text-indent: 30px;
	}
	
	.ding li:nth-of-type(7) {
		width: 100%;
	}
	
	.ding li:nth-of-type(10) {
		width: 100%;
	}
	
	.ding li:nth-of-type(13) {
		width: 100%;
	}
	
	.ding li:nth-of-type(1) {
		margin-top: 30px;
	}
	
	.ding li:nth-of-type(2) {
		margin-top: 30px;
	}
	
	.ding li:nth-of-type(5) {
		margin-top: 50px;
	}
	
	.ding li:nth-of-type(6) {
		margin-top: 50px;
	}
	
	.ding li:nth-of-type(8) {
		margin-top: 50px;
	}
	
	.ding li:nth-of-type(9) {
		margin-top: 50px;
	}
	
	.ding li:nth-of-type(11) {
		margin-top: 50px;
	}
	
	.ding li:nth-of-type(12) {
		margin-top: 50px;
	}
	
	.ding li:nth-of-type(14) {
		height: 260px;
		width: 100%;
	}
	
	.ze {
		height: 100px;
	}
	
	.shi {
		margin-top: 12px;
		position: absolute;
		display: block;
		width: 10%;
		display: block;
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
		margin-left: 730px;
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
	.zhi li {
		list-style: none;
		height: 50px;
		width: 50%;
		display: inline-block;
	}

	.zhi li:nth-of-type(1) {
		width: 8%;
		margin-left: 20px;
		text-align: -20px;
	}

	.zhi li:nth-of-type(2) .el-textarea__inner {
		height: 150px;
		border: 1px solid #5ab1ef;
		width: 100%;
	}

	.zhi li:nth-of-type(4) {
		width: 100%;
		margin-left: 20px;
	}

	.zhi li:nth-of-type(3) {
		margin-left: 20px;
	}

	.zhi li:nth-of-type(2) {
		margin-left: 20px;
	}

	.zhi li:nth-of-type(5) {
		margin-left: 370px;
		text-align: center;
		height: 40px;
		line-height: 40px;
		width: 10%;
		color: white;
		background-color: #5ab1ef;
	}

	.nei li {
		list-style: none;
		height: 50px;
		width: 50%;
		display: inline-block;
	}

	.nei li:nth-of-type(1) {
		width: 8%;
		margin-left: 20px;
		text-align: -20px;
	}

	.nei li:nth-of-type(3) {
		width: 100%;
		margin-left: 20px;
	}

	.nei li:nth-of-type(2) .el-textarea__inner {
		height: 150px;
		border: 1px solid #5ab1ef;
		width: 100%;
	}
</style>
