<template>
	<div id="xiala">
		<span>是否活动</span>
		<el-select v-model="value" placeholder="请选择内容">
		  <el-option
		    v-for="item in oo"
		    :key="item.value"
		    :label="item.label"
		    :value="item.value">
		  </el-option>
		</el-select>
	</div>
</template>

<script>
	export default {
	  name:'yes',
	data() {
	return {
	  oo: [{
	     value: '选项1',
	     label: '是'
	   }, {
	     value: '选项2',
	     label: '否'
	   }],
	 
	  value: ''
	}
	
	}
	}
</script>

<style>
	#xiala{
		position: absolute;
		top: 0px;
		left: 0px;
		margin-left: 800px;
		margin-top: 60px;
	}
</style>
