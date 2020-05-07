<template>
  <div class="tuFouer">
	  <span  style=" font-weight: bold;">报班类型统计</span>
	  <ve-pie :data="chartData"></ve-pie>
  </div>
</template>

<script>
  export default {
	name:'Pictrue4',
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '课程续费30.00%', '访问用户': 1393 },
            { '日期': '新课程购买70.00%', '访问用户': 3530 }
          ]
        }
      }
    }
  }
</script>

<style scoped>
	.tuFouer{
		width: 40%;
		border: 1px solid lightgrey;
		box-shadow: 0px 0px 16px lightgrey;
		position: absolute;
		left: 0px;
		margin-left: 800px;
		margin-top: -425px;
		padding-top: 20px;
		}
		.tuFouer span:nth-of-type(1){
			position: absolute;
			margin-left: 20px;
		}
</style>
