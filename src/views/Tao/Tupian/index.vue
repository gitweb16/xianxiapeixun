<template>
	<div class="content">
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">报班金额统计分析</span></p>
		</div>
		<div class="tp">
			<Pictrue></Pictrue>
			<Pictrue2></Pictrue2>
			<Pictrue3></Pictrue3>
			<Pictrue4></Pictrue4>
			<Pictrue5></Pictrue5>
		</div>
	</div>
</template>

<script>
	import Pictrue from '../../../components/XuTao/Pictrue'
	import Pictrue2 from '../../../components/XuTao/Pictrue2'
	import Pictrue3 from '../../../components/XuTao/Pictrue3'
	import Pictrue4 from '../../../components/XuTao/Pictrue4'
	import Pictrue5 from '../../../components/XuTao/Pictrue5'
	export default{
		name:'Tupian',
		components:{
		  Pictrue,
		  Pictrue2,
		  Pictrue3,
		  Pictrue4,
		  Pictrue5
		}
	}
</script>

<style>
	.jinE{
			width:92%;
			margin-left:10px;
			height:40px;
			font-size: 12px;
			color: darkgray;
			line-height: 35px;
			background-color: #f9f9f9;
			position: fixed;
			z-index: 3;
			margin-top: -50px;
			margin-left:60px ;
			
		}
		.heng{
			height:20px;
			line-height: 40px;
			width:5px;
			display:block;
			background-color: #19d4ae;
			z-index: 14;
			border:1px solide red;
			position: absolute;
			margin-top: 8px;
	}
		.heng2{
			height:15px;
			display:block;
			margin-left: 20px;
			height:40px;
			line-height: 40px;
			
		}
		.tp{
			margin-top: 50px;
		}
</style>
