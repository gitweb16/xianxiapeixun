<template>
	<div class="container">
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">退费管理</span></p>
		</div>
			<Premium></Premium>
	</div>
</template>

<script>
	import Premium from '../../../components/XuTao/Premium'
	export default{
		name:'Tufei',
		components:{
		 Premium
		}
	}
</script>

<style>
	.jinE{
		width:90%;
		margin-left:10px;
		height:40px;
		font-size: 12px;
		color: darkgray;
		line-height: 35px;
		background-color: #f9f9f9;
		position: fixed;
		z-index: 3;
		margin-top: -50px;
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

