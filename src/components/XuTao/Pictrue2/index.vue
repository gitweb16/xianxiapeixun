<template>
	<div>
		<div class="tuTwo">
			  <span  style=" font-weight: bold;">各校区报表金额统计</span>
			  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
		</div>
	</div>
</template>

<script>
  export default {
	name:'Pictrue2',
    data () {
      this.chartSettings = {
        stack: { '用户': ['本月', '本周'] }
      }
      return {
        chartData: {
          columns: ['日期', '本月', '本周', '本日'],
          rows: [
            { '日期': '百合校区', '本月': 44, '本周': 19, '本日': 0.12 },
            { '日期': '水南校区', '本月': 57, '本周': 32, '本日': 0.16 },
            { '日期': '龙山校区', '本月': 36, '本周': 26, '本日': 0.16 },
            { '日期': '玫瑰园校区', '本月': 45, '本周': 14, '本日': 0.09 },
            { '日期': '滨江校区', '本月': 78, '本周': 49, '本日': 0.23 },
            { '日期': '融侨城校区', '本月': 62, '本周': 29, '本日': 0.18 },
			{ '日期': '宏路校区', '本月': 100, '本周': 49, '本日': 0.18 }
          ]
        }
	}
  }
}
</script>


<style>
	.tuTwo{
		width: 40%;
		border: 1px solid lightgrey;
		box-shadow: 0px 0px 16px lightgrey;
		position: absolute;
		left: 0px;
		margin-left: 800px;
        margin-top: -425px;
		padding-top: 20px;
	}
	.tuTwo span:nth-of-type(1){
		position: absolute;
		margin-left: 20px;
	}
</style>


