<template>
	<div class="tuOne">
		<span>报班统计</span>
		 <ve-ring :data="chartData1" :settings="chartSettings"></ve-ring>
		 <div class="ban">
			 <ul>
				 <li>业务报班</li>
				 <li>自主报班</li>
			 </ul>
		 </div>
		 <div class="shu">
			 <ul>
				 <li>总量<span>100</span></li>
				 <li>自主报班<span>90</span></li>
				 <li>业务报班<span>10</span></li>
			 </ul>
		 </div>
	</div>
</template>

<script>
	 export default {
		 name:'Pictrue',
	    data () {
	      this.chartSettings = {
	        dimension: '日期',
	        metrics: '访问用户'
	      }
	      return {
	        chartData1: {
	          columns: ['日期', '访问用户'],
	          rows: [
	            { '日期': '业务报班10.00%', '访问用户': 1393 },
	            { '日期': '自主报班90.00%', '访问用户': 3530 }
	          ]
	        }
	      }
	    }
	  }
</script>
<style>
	.tuOne{
		width: 40%;
		margin-top: 20px;
		border: 1px solid lightgrey;
		box-shadow: 0px 0px 16px lightgrey;
		overflow: hidden;
		margin-left: 100px;
		}
		.tuOne span:nth-of-type(1){
			position: absolute;
			margin-left: 20px;
		}
		.ban{
			position: absolute;
			margin-top: 340px;
			left: 0px;
			top: 0px;
			margin-left: 200px;
            width: 30%;
		}
		.ban ul{
			font-size: 12px;
			margin: 0px 20px;
		}
		.ban ul li:nth-of-type(1){
				text-align: right;
		}
		.ban ul li{
			display: inline-block;
			width: 35%;
			text-align: center;
		}
	    .shu{
			width: 10%;
			margin-top: -350px;
			position: absolute;
			margin-left: 450px;	
			font-size: 13px;
			font-weight: bold;
		}
		.shu li{
			height: 75px;
			line-height: 75px;
		}
</style>



























