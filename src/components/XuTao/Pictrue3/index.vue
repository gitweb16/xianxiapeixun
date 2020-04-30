<template>
	<div class="tuThree">
		<span>手机报表转化分析</span>
	<ve-funnel :data="chartData" :settings="chartSettings"></ve-funnel>	
	</div>
  
</template>

<script>
  export default {
	  name:'Pictrue3',
    data () {
      this.chartSettings = {
        sequence: ['查看课程', '添加订单', '成功支付']
      }
      return {
        chartData: {
          columns: ['状态', '数值'],
          rows: [
            { '状态': '查看课程', '数值': 600 },
            { '状态': '添加订单', '数值': 300 },
            { '状态': '成功支付', '数值': 200 }
          ]
        }
      }
    }
  }
</script>

<style>
	.tuThree{
		width: 40%;
		margin-top: 20px;
		border: 1px solid lightgrey;
		box-shadow: 0px 0px 16px lightgrey;
		overflow: hidden;
		margin-left: 100px;
		}
		.tuThree span:nth-of-type(1){
			position: absolute;
			margin-left: 20px;
		}
</style>
