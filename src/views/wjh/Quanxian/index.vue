<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">家长账号管理</span></p>
		</div>
		<quanxian></quanxian>
	</div>
</template>

<script>
import quanxian from'../../../components/wjh/Quan'

export default{
	name:'qx',
	components:{
		quanxian,
	}
}
</script>

<style scoped>
	.jinE{
		width:95%;
		margin-left:30px;
		margin-top:20px;
		height:40px;
		font-size: 12px;
		color: darkgray;
		line-height: 35px;
		background-color: #f9f9f9;
		
	}
	.heng{
		height:15px;
		width:5px;
		display:block;
		background-color: #19d4ae;
		margin-top: 10px;
		position: absolute;
	}
	.heng2{
		height:15px;
		display:block;
		border:1px solide red;
		margin-top: -18px;
		margin-left: 20px;
		}
</style>
