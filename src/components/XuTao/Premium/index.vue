<template>
	<div class="container">
		<el-table
		    :data="tableData"
		    stripe
		    style="width: 100%;margin-left: 80px;margin-top: -40px;">
			<el-table-column
			  prop="hao"
			  label="原订单号"
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="yuan"
			  label="订单来源"
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="date"
			  label="原订日期"
			  width="180">
			</el-table-column>
		    <el-table-column
		      prop="teacher"
		      label="业务教师"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="phone"
		      label="家长手机号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="退费状态">
		    </el-table-column>
			<el-table-column
			  prop="fei"
			  label="退费">
			  </el-table-column>
		  </el-table>
		 <el-popover class="nei"
		   placement="right"
		   width="900"
		   trigger="click">
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
					<li><span class="shi">退费方式:</span>
					<div style="margin-left: 50px;">
								<el-select v-model="value" placeholder="请选择退款方式" style="border:none;width: 250px;"  >
								   <el-option style="border: none;"
								     v-for="item in options"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								 </el-select>
					</div>
					</li>
				</ul>
			</div>
		   <el-button slot="reference" style="border:none">退费</el-button>
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
</template>

<script>
	 export default {
		 name:'Premium',
	    data() {
	      return {
	        tableData: [{
			  hao:'20190415001',
			  yuan:'微信小程序',
	          date: '2016-05-02',
			  teacher:'',
	          phone: '家长手机号',
	          address: '未退费',
			  fei:'退费'
	        }, {
			  hao:'20190415002',
			  yuan:'支付宝小程序',
	          date: '2016-05-02',
			  teacher:'',
	          phone: '家长手机号',
	          address: '已退费',
			  fei:'查看'
	        },{
			  hao:'20190415003',
			  yuan:'业务扫收款',
	          date: '2016-05-02',
			  teacher:'业务教师',
	          phone: '家长手机号',
	          address: '未退费',
			  fei:'退费'
	        },{
			  hao:'20190415004',
			  yuan:'业务线下收款',
	          date: '2016-05-02',
			  teacher:'业务教师',
	          phone: '家长手机号',
	          address: '已退费',
			  fei:'查看'
	        },{
			  hao:'20190415005',
			  yuan:'业务线下收款',
	          date: '2016-05-02',
			  teacher:'',
	          phone: '家长手机号',
	          address: '已退费',
			  fei:'查看'
	        },{
			  hao:'20190415006',
			  yuan:'微信小程序',
	          date: '2016-05-02',
			  teacher:'',
	          phone: '家长手机号',
	          address: '已退费',
			  fei:'查看'
	        },{
			  hao:'20190415007',
			  yuan:'业务扫收款',
	          date: '2016-05-02',
			  teacher:'业务教师',
	          phone: '家长手机号',
	          address: '未退费',
			  fei:'退费'
	        },{
			  hao:'20190415008',
			  yuan:'微信小程序',
	          date: '2016-05-02',
			  teacher:'业务教师',
	          phone: '家长手机号',
	          address: '已退费',
			  fei:'查看'
	        },{
			  hao:'20190415009',
			  yuan:'微信小程序',
	          date: '2016-05-02',
			  teacher:'',
	          phone: '家长手机号',
	          address: '未退费',
			  fei:'退费'
	        },{
			  hao:'20190415010',
			  yuan:'业务扫收款',
	          date: '2016-05-02',
			  teacher:'业务教师',
	          phone: '家长手机号',
	          address: '未退费',
			  fei:'退费'
	        },{
			  hao:'20190415011',
			  yuan:'微信小程序',
	          date: '2016-05-02',
			  teacher:'',
	          phone: '家长手机号',
	          address: '已退费',
			  fei:'查看'
	        },{
			  hao:'20190415012',
			  yuan:'支付宝小程序',
	          date: '2016-05-02',
			  teacher:'业务教师',
	          phone: '家长手机号',
	          address: '已退费',
			  fei:'查看'
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
			}],
			 options: [{
			          value: '选项1',
			          label: '微信小程序'
			        }, {
			          value: '选项2',
			          label: '业务扫退款'
			        }, {
			          value: '选项3',
			          label: '业务线下退款'
			        }, {
			          value: '选项4',
			          label: '支付宝小程序'
			        }, {
			          value: '选项5',
			          label: '业务扫码退款'
			        }],
			        value: ''
			      }
	      },data2() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },methods: {
      open() {
        this.$prompt('课程原价：1500', '提示', {
          confirmButtonText: '保存',
          cancelButtonText: '取消',
        })
      }
    }
	    }
	 
</script>

<style scoped>
	.container{
		width: 90%;
	}
	.nei{
		position: absolute;	
		margin-top: -572px;
		margin-left: 1235px;
	}
	.xiang{
	font-weight: bold;	
	margin-top: 10px;
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
		height: 260px;
		width: 100%;
	}
	.ze{
		height: 100px;
	}
	.shi{
		margin-top: 12px;
		position: absolute;
		display: block;
		width: 10%;
		display: block;
	}
	#fenye{
		margin-left: 400px;
		margin-top: 20px;
	}
	#shezhi{
		color: blue;
	}
	#shezhi:hover{
		pointer:curcor;
	}
</style>