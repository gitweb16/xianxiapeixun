
<template>
	<div class="container">
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">菜单管理</span></p>
		</div>
				<Menu></Menu>
		
	</div>
</template>

<script>
	import Menu from '../../../components/XuTao/Menu'
	export default{
		name:'Caidan',
		components:{
			Menu
		}
	}
</script>

<style>
	.jinE{
			width:90%;
			margin-left:60px;
			height:40px;
			font-size: 12px;
			color: darkgray;
			line-height: 35px;
			background-color: #f9f9f9;
			position: fixed;
			z-index: 3;
		    margin-top: -100px;
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

