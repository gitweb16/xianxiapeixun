<template>
	<div id='app' style="height: 500px;">
		<!--是否活动选择-->
		<div class="gcd">
		<span class="gen">根菜单:</span>
		<div id="ii">
			<el-select v-model="value1" placeholder="请选择根菜单" >
			    <el-option 
			      v-for="item in options"
			      :key="item.value1"
			      :label="item.label1"
			      :value="item.value1">
			     </el-option>
				</el-select>
		</div>
		<span class="fu">父菜单:</span>
		<div id="fi">
			<el-select v-model="value2" placeholder="请选择父菜单" >
			    <el-option 
			      v-for="item2 in options2"
			      :key="item2.value2"
			      :label="item2.label2"
			      :value="item2.value2">
			    </el-option>
			  </el-select>
		</div>
		<span class="cdm">菜单名称:</span>
		<div id="cName">
			<el-autocomplete
			  popper-class="my-autocomplete"
			  v-model="state"
			  :fetch-suggestions="querySearch"
			  placeholder="请输入菜单名称"
			  @select="handleSelect">
			  <i
			    class="el-icon-edit el-input__icon"
			    slot="suffix"
			    @click="handleIconClick">
			  </i>
			  <template slot-scope="{ item }">
			    <div class="name">{{ item.value }}</div>
			  </template>
			</el-autocomplete>
		</div>
		</div>
		<div id="sou">
			<span>搜索</span>
		</div>
		<div id="add">
			<span>新增菜单</span>
		</div>
		<div class="biao">
			<el-table
			    :data="tableData"
			    stripe
			    style="width: 100%;">
				<el-table-column
				  prop="xu"
				  label="序"
				  width="180">
				</el-table-column>
				<el-table-column
				  prop="lei"
				  label="菜单类型"
				  width="180">
				</el-table-column>
				<el-table-column
				  prop="cming"
				  label="菜单名称"
				  width="180">
				</el-table-column>
			    <el-table-column
			      prop="fuming"
			      label="父菜单名"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="genming"
			      label="根菜单名"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="地址">
			    </el-table-column>
				<el-table-column
				  prop="xuhao"
				  label="排序序号">
				  </el-table-column>
				  <el-table-column
				    prop="sf"
				    label="是否激活">
				  </el-table-column>
				  <el-table-column
				    prop="cao"
				    label="操操作">
				    </el-table-column>
			  </el-table> 
			  <el-popover class="cai"
			     placement="right"
			     width="900"
			     trigger="click">
			      <p class="li">菜单管理</p>
			  	<div>
			  		<ul class="xiang">
			  			<li>菜单类型：
						<el-select v-model="value2" placeholder="请选择父菜单" >
						    <el-option 
						      v-for="item2 in options2"
						      :key="item2.value2"
						      :label="item2.label2"
						      :value="item2.value2">
						    </el-option>
						  </el-select>
						</li>
			  			<li>菜单名称：
						<el-autocomplete style="margin-left: -20px;"
						  popper-class="my-autocomplete"
						  v-model="state"
						  :fetch-suggestions="querySearch"
						  placeholder="请输入菜单名称"
						  @select="handleSelect">
						  <i
						    class="el-icon-edit el-input__icon"
						    slot="suffix"
						    @click="handleIconClick">
						  </i>
						  <template slot-scope="{ item }">
						    <div class="name">{{ item.value }}</div>
						  </template>
						</el-autocomplete>
						</li>
			  		    <li>父级菜单名称：
						<el-select v-model="value2" placeholder="请选择父菜单" style="padding-left: 0px;"  >
						    <el-option 
						      v-for="item2 in options2"
						      :key="item2.value2"
						      :label="item2.label2"
						      :value="item2.value2">
						    </el-option>
						  </el-select>
						</li>
			  			<li>根菜单名称：
						<el-select v-model="value1" placeholder="请选择根菜单" >
						    <el-option 
						      v-for="item in options"
						      :key="item.value1"
						      :label="item.label1"
						      :value="item.value1">
						     </el-option>
							</el-select>
						</li>
			  			<li>配置地址：
						<el-input v-model="input" placeholder="请输入内容" style="width: 670px;" ></el-input>
						</li>
			  			<li>排序序号：
						<el-input v-model="input" placeholder="请输入内容" style="width: 250px;"></el-input>
						</li>
			  			<li>立即激活:
						 <el-radio-group v-model="radio">
						    <el-radio :label="1" style="width: 7%;float: left;">是</el-radio>
						    <el-radio :label="2" style="width: 5%;float: left;">否</el-radio>
						  </el-radio-group>
						</li>
			  		</ul>
					<el-row style="height: 100px;margin-top: 20px;">
					  <el-button class="bc">保存</el-button>
					  <el-button class="cz">充值</el-button>
					</el-row>
			  	</div>
			     <el-button slot="reference" style="border:none">修改启用</el-button>
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
		  name:'Menu',
	     data() {
	          return {
				  restaurants: [],
				  state: '',
				  radio: 2,
	            options: [{
				  value1: '选项1',
				  label1: '首页'
				}, {
				  value1: '选项2',
				  label1: '课程管理'
				}, {
				  value1: '选项3',
				  label1: '学员管理'
				}, {
				  value1: '选项4',
				  label1: '订单管理'
				}, {
				  value1: '选项5',
				  label1: '教师管理'
				}, {
				  value1: '选项6',
				  label1: '统计分析'
				}, {
				  value1: '选项7',
				  label1: '支付中心'
				}, {
				  value1: '选项8',
				  label1: '系统管理'
				}],
				 value1: '',
				options2: [{
				  value2: '选项1',
				  label2: '首页'
				}, {
				  value2: '选项2',
				  label2: '课程管理'
				}, {
				  value2: '选项3',
				  label2: '学员管理'
				}, {
				  value2: '选项4',
				  label2: '订单管理'
				}, {
				  value2: '选项5',
				  label2: '教师管理'
				}, {
				  value2: '选项6',
				  label2: '统计分析'
				}, {
				  value2: '选项7',
				  label2: '支付中心'
				}, {
				  value2: '选项8',
				  label2: '系统管理'
				}],
				 value2: '',
				 tableData: [{
				   xu:'1',
				   lei:'小程序菜单',
				   cming: '课程',
				   fuming:'',
				   genming: '',
				   address: '',
				   xuhao:'1',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'2',
				   lei:'小程序菜单',
				   cming: '消息',
				   fuming:'',
				   genming: '',
				   address: '',
				   xuhao:'2',
				   sf: '否',
				   cao:'修改   启用'
				 },{
				   xu:'3',
				   lei:'小程序菜单',
				   cming: '个人中心',
				   fuming:'',
				   genming: '',
				   address: '',
				   xuhao:'3',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'4',
				   lei:'后台菜单',
				   cming: '首页',
				   fuming:'',
				   genming: '',
				   address: '',
				   xuhao:'1',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'5',
				   lei:'后台菜单',
				   cming: '课程管理',
				   fuming:'',
				   genming: '',
				   address: '',
				   xuhao:'1',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'6',
				   lei:'后台管理',
				   cming: '课程管理',
				   fuming:'',
				   genming: '课程管理',
				   address: '',
				   xuhao:'1',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'7',
				   lei:'后台管理',
				   cming: '课程消耗',
				   fuming:'',
				   genming: '课程管理',
				   address: '',
				   xuhao:'2',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'8',
				   lei:'后台管理',
				   cming: '班级课程管理',
				   fuming:'课程管理',
				   genming: '课程管理',
				   address: '',
				   xuhao:'1',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'9',
				   lei:'后台管理',
				   cming: '晚辅导课程管理',
				   fuming:'课程管理',
				   genming: '课程管理',
				   address: '',
				   xuhao:'2',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'10',
				   lei:'后台管理',
				   cming: '班级课程消耗',
				   fuming:'课程消耗',
				   genming: '课程管理',
				   address: '',
				   xuhao:'1',
				   sf: '是',
				   cao:'修改   启用'
				 },{
				   xu:'11',
				   lei:'后台管理',
				   cming: '晚辅导课程消耗',
				   fuming:'课程消耗',
				   genming: '课程管理',
				   address: '',
				   xuhao:'2',
				   sf: '是',
				   cao:'修改   启用'
				 }]
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
    }, methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "课程"},
          { "value": "消息" },
          { "value": "个人中心"},
          { "value": "首页"},
          { "value": "课程管理" },
          { "value": "课程消耗"},
          { "value": "班级课程管理"},
          { "value": "晚辅导课程消耗" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
	    
 
</script>
<style>
	#app{
		width: 100%;
	}
	.gcd{
		margin-top: 100px;
		
	}
	#ii{
		width: 250px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 160px;
		margin-top: 60px;
	}
	#ii el-option{
		float: right;
	}
	#fi{
		width: 250px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 560px;
		margin-top: 60px;
	}
	#fi el-option{
		float: right;
	}
	#cName{
		width: 250px;
		position: absolute;
		left: 0px;
		top: 0px;
		margin-left: 960px;
		margin-top: 60px;
	}
	#cName el-autocomplete{
		float: right;
	}
	.gen{
		position: absolute;
		left: 0px;
		top:0px;
		margin-left: 100px;
		margin-top: 70px;
		font-size: 13px;
		color: darkgray;
	}
	.fu{
		position: absolute;
		left: 0px;
		top:0px;
		margin-left: 500px;
		margin-top: 70px;
		font-size: 13px;
		color: darkgray;
	}
	.cdm{
		position: absolute;
		left: 0px;
		top:0px;
		margin-left: 900px;
		margin-top: 70px;
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
	}
	#sou span{
		color: white;
		height: 40px;
		background: #5DABEC;
		text-align: center;
		line-height: 40px;
		display: block;
		margin-top: -42px;
		box-shadow: 0px 0px 5px #5DABEC;
	}
	.my-autocomplete {
	  li {
	    line-height: normal;
	    padding: 7px;
	
	    .name {
	      text-overflow: ellipsis;
	      overflow: hidden;
	    }
	    .addr {
	      font-size: 12px;
	      color: #b4b4b4;
	    }
	
	    .highlighted .addr {
	      color: #ddd;
	    }
	  }
	}
	#add{
		color: white;
		width: 4%;
		font-size: 12px;
		float: left;
		margin-left: 100px;
		border-radius: 3px;
		text-align: center;
	}
	#add span{
		color: white;
		height: 30px;
		background: #5DABEC;
		text-align: center;
		line-height: 30px;
		display: block;
		margin-top: 12px;
		box-shadow: 0px 0px 5px #5DABEC;
	}
	.biao{		
		width: 81%;
		margin-left: 100px;
		margin-top: 50px;
	}
	#fenye{
		margin-left: 500px;
		margin-top: 20px;
	}
	.cai{
		position: absolute;	
		margin-top: -515px;
		margin-left: 1140px;
		height:500px ;
	}
	.xiang  li{
			width: 45%;
			height: 70px;
			line-height: 70px;
			list-style: none;
			display: inline-block;
			font-size: 12px;
			text-indent: 30px;
			overflow: hidden;
	}
	.li{
		font-weight: bold;
	}
	.xiang  li:nth-of-type(5){
		width: 100%;
	}
	.xiang  li:nth-of-type(3){
		margin-left: -23px;
	}
	.xiang  li:nth-of-type(4){
		margin-left: 23px;
	}
	.xiang  li:nth-of-type(2){
		width: 50%;
	}
	.xiang  li:nth-of-type(6){
		width: 100%;
	}
	.xiang{
	font-weight: bold;	
	margin-top: 10px;
	}
	.xiang li el-select el-option{
		float: left;
	}
	.bc{
		margin-left: 300px;
		text-align: center;
		width: 12%;
		background: #5DABEC;
		color: white;
	}
	.cz{
		width: 12%;
		margin-left: 350px;
		text-align: center;
		color:#5DABEC;
		border: 1px solid #5DABEC;
	}
</style>

