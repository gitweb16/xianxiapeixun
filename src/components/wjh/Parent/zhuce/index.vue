<template>
	<!--校区下拉框-->
	
	<div id="oo">
		<span class="xiao">是否注册</span>
		<el-select v-model="value" placeholder="请选择校区" size="medium">
		  <el-option
		    v-for="item in options"
		    :key="item.value"
		    :label="item.label"
		    :value="item.value">
		  </el-option>
		</el-select>
	</div>
</template>

<script>
	export default {
	  name:'zhuce',
	data() {
	return {
	  options: [{
	    value: '选项1',
	    label: '城南小区'
	  }, {
	    value: '选项2',
	    label: '水榭校区'
	  }, {
	    value: '选项3',
	    label: '蚵仔煎'
	  }, {
	    value: '选项4',
	    label: '世贸校区'
	  }, {
	    value: '选项5',
	    label: '话指南校区'
	  }],
	}
}
	  }
</script>

<style>
	#oo{
		position: absolute;
		top: 0px;
		left: 0px;
		margin-left: 300px;
		margin-top: 59px;
	}
</style>
