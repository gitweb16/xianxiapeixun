<template>
	<!--校区下拉框-->
	
	<div id="oo">
		<span class="xiao">校区</span>
		<el-select v-model="value" placeholder="请选择">
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
		name:'xiaoqu',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '城南校区'
        }, {
          value: '选项2',
          label: '分离小区'
        }, {
          value: '选项3',
          label: '哈哈校区'
        }, {
          value: '选项4',
          label: '你好校区'
        }, {
          value: '选项5',
          label: '他哈后校区'
        }],
        value: ''
      }
    }
  }
</script>

<style>
	#oo{
		position: absolute;
		top: 0px;
		left: 0px;
		margin-left: 0px;
		margin-top: 59px;
	}
</style>
