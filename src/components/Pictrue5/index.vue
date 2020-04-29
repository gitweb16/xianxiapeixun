<template>
  <div class="tuFive">
	   <span>最近报班金额趋势</span>
	   <!-- <span>
		    <el-select v-model="value" placeholder="请选择">
		       <el-option
		         v-for="item in options"
		         :key="item.value"
		         :label="item.label"
		         :value="item.value">
		       </el-option>
		     </el-select>
	   </span> -->
	  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
  export default {
	name:'Pictrue5',
    data () {
      this.chartSettings = {
        metrics: ['访问用户', '下单用户'],
        dimension: ['日期']
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '2019-04-09', '访问用户': 50, '下单用户': 37, '下单率': 0.32 },
            { '日期': '2019-04-10', '访问用户': 70, '下单用户': 45, '下单率': 0.76 },
            { '日期': '2019-04-11', '访问用户': 60, '下单用户': 30, '下单率': 0.49 },
            { '日期': '2019-04-12', '访问用户': 42, '下单用户': 19, '下单率': 0.323 },
            { '日期': '2019-04-13', '访问用户': 100, '下单用户': 55, '下单率': 0.78 },
			{ '日期': '2019-04-14', '访问用户': 100, '下单用户': 55, '下单率': 0.78 }
          ]
        }
      }
	  }
	  }
</script>

<style>
	.tuFive{
		border: 1px solid lightgrey;
		margin-top: 20px;
		width: 86.5%;
		margin-left: 100px;
	}
	.tuFive span:nth-of-type(1){
		position: absolute;
		margin-left: 20px;
	}
</style>