<template>
	<div class="container">
		<div style="margin-left: 50px;">
			<span>校区：</span>
			<el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div style="margin-left: 350px;margin-top: -40px;">
			<span>课程名称：</span>
			<el-input v-model="input" placeholder="请输入内容" style="width: 300px;"></el-input>
		</div>
		<div style="margin-left: 750px;margin-top: -40px;">
			<span>是否活动：</span>
			<el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options3"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div id="sou">
			<span>搜索</span>
		</div>
		<div style="width: 87%;margin-left: 50px;">
			<el-table
			    ref="multipleTable"
				 stripe
			    :data="tableData"
			    tooltip-effect="dark"
			    style="width: 100%"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="编码"
				  prop="ma"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="名称"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="校区"
			      width="120">
			    </el-table-column>
				<el-table-column
				  label="年级"
				  width="100"
				  prop="ji">
				</el-table-column>
				<el-table-column
				  prop="jia"
				  label="原价"
				  width="120">
				</el-table-column>
				<el-table-column
				  prop="shi"
				  label="是否参加活动"
				    width="120">
				</el-table-column>
			    <el-table-column
			      label="试学价格"
			      width="80"
				    prop="ge">
			    </el-table-column>
			    <el-table-column
			      prop="jian"
			      label="试学时间"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="cao"
			      label="操作"
			      show-overflow-tooltip>
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
	  name:'Trylearn',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '城南校区'
        }, {
          value: '选项2',
          label: '世贸校区'
        }, {
          value: '选项3',
          label: '万达校区'
        }, {
          value: '选项4',
          label: '滨江校区'
        }, {
          value: '选项5',
          label: '花之南校区'
        }],
		options3: [{
		  value: '选项1',
		  label: '是'
		}, {
		  value: '选项2',
		  label: '否'
		}],
        value: '',
		  input: '',
		  tableData: [{
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '城南校区',
					ji:'初中一年级',
					jia:'350',
					shi:'是',
					ge:'300',
					jian:'3课时',
					cao:'设置试学规则'
		          }, {
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '滨江小区',
					ji:'初中一年级',
					jia:'350',
					shi:'否',
					ge:'',
					jian:'',
					cao:'设置试学规则'
		          },{
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '城南校区',
					ji:'初中一年级',
					jia:'350',
					shi:'是',
					ge:'300',
					jian:'3课时',
					cao:'设置试学规则'
		          }, {
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '滨江小区',
					ji:'初中一年级',
					jia:'350',
					shi:'否',
					ge:'',
					jian:'',
					cao:'设置试学规则'
		          }, {
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '城南校区',
					ji:'初中一年级',
					jia:'350',
					shi:'是',
					ge:'300',
					jian:'3课时',
					cao:'设置试学规则'
		          }, {
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '滨江小区',
					ji:'初中一年级',
					jia:'350',
					shi:'否',
					ge:'',
					jian:'',
					cao:'设置试学规则'
		          },{
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '城南校区',
					ji:'初中一年级',
					jia:'350',
					shi:'是',
					ge:'300',
					jian:'3课时',
					cao:'设置试学规则'
		          }, {
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '滨江小区',
					ji:'初中一年级',
					jia:'350',
					shi:'否',
					ge:'',
					jian:'',
					cao:'设置试学规则'
		          },{
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '城南校区',
					ji:'初中一年级',
					jia:'350',
					shi:'是',
					ge:'300',
					jian:'3课时',
					cao:'设置试学规则'
		          }, {
		            ma: 'BJKC-20190405',
		            name: '初中一年级班级课程',
		            address: '滨江小区',
					ji:'初中一年级',
					jia:'350',
					shi:'否',
					ge:'',
					jian:'',
					cao:'设置试学规则'
		          }],
		          multipleSelection: []
		        }
		      },
		  
		      methods: {
		        toggleSelection(rows) {
		          if (rows) {
		            rows.forEach(row => {
		              this.$refs.multipleTable.toggleRowSelection(row);
		            });
		          } else {
		            this.$refs.multipleTable.clearSelection();
		          }
		        },
		        handleSelectionChange(val) {
		          this.multipleSelection = val;
		        }
      }
    }
  
</script>
<style>
	#sou{
		color: white;
		width: 5%;
		float: right;
		margin-right: 220px;
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
		margin-top: -40px;
		box-shadow: 0px 0px 5px #5DABEC;
	}
	#fenye{
		margin-left: 400px;
		margin-top: 20px;
	}
</style>