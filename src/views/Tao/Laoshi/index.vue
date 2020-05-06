
<template>
	<div class="container">
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">教师管理</span></p>
		</div>
				<Teacher></Teacher>
		
	</div>
</template>

<script>
	import Teacher from '../../../components/XuTao/Teacher'
	export default{
		name:'Laoshi',
		components:{
			Teacher
		}
	}
</script>

<style>
	.jinE{
			width: 100%;
			height: 40px;
			font-size: 12px;
			color: darkgray;
			line-height: 35px;
			background-color: #f9f9f9;
			z-index: 3;
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
