<template>
	<div>
		<div class="jinE">
			<p><span class="heng"></span><span class="heng2">班级活动管理</span></p>
		</div>
		<Huodong></Huodong>
		<xiaoqu></xiaoqu>
		<yes></yes>
	</div>
</template>

<script>
import Huodong from'../../../components/wjh/Active/biaoge'
import xiaoqu from'../../../components/wjh/Active/xiaoqu'
import yes from'../../../components/wjh/Active/yes'
export default{
	name:'huodong1',
	components: {
		Huodong,
		xiaoqu,
		yes
		
	}
}
</script>

<style>
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
