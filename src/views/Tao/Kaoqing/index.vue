<template>
	<div class="content">
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">考情流水分析</span></p>
		</div>
		<div class="tp">
			<Check></Check>
			<Pictrue2></Pictrue2>
			<Pictrue5></Pictrue5>
		</div>
	</div>
</template>

<script>
	import Check from '../../../components/XuTao/Check'
	import Pictrue2 from '../../../components/XuTao/Pictrue2'
	import Pictrue5 from '../../../components/XuTao/Pictrue5'
	export default{
		name:'Tupian',
		components:{
		  Check,
		  Pictrue2,
		  Pictrue5
		}
	}
</script>

<style>
	.jinE{
			width:92%;
			height:40px;
			font-size: 12px;
			color: darkgray;
			line-height: 35px;
			background-color: #f9f9f9;
			margin-bottom: 40px;	
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
		
</style>
