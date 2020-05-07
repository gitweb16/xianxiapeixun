
<template>
	<div class="tuOne">
		<span>今日考情总览</span>
		 <ve-ring :data="chartData1" :settings="chartSettings"></ve-ring>
		 <div class="ban">
			 <ul>
				 <li>未到</li>
				 <li>实到</li>
			 </ul>
		 </div>
		 <div class="shu">
			 <ul>
				 <li>应到<span>1400</span></li>
				 <li>实到<span>1330</span></li>
				 <li>未到<span>70</span></li>
			 </ul>
		 </div>
	</div>
</template>

<script>
	 export default {
		 name:'Check',
	    data () {
	      this.chartSettings = {
	        dimension: '日期',
	        metrics: '访问用户'
	      }
	      return {
	        chartData1: {
	          columns: ['日期', '访问用户'],
	          rows: [
	            { '日期': '未到5.00%', '访问用户': 593 },
	            { '日期': '实到95.00%', '访问用户': 3530 }
	          ]
	        }
	      }
	    }
	  }
</script>
<style scoped>
	.tuOne{
		width: 40%;
		border: 1px solid lightgrey;
		box-shadow: 0px 0px 16px lightgrey;
		overflow: hidden;
		margin-left: 50px;
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
			margin: 80px 20px;
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
			margin-top: -300px;
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