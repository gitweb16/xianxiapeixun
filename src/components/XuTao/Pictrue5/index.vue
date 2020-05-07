<template>
	<div class="tuFive">
		<span  style=" font-weight: bold;">最近报班金额趋势</span>
		<span id="xuan">
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</span>
		<ve-line :data="chartData" :settings="chartSettings"></ve-line>
		<div class="bao">
			<ul>
				<li><span></span><span>手机报班</span></li>
				<li><span></span><span>业务报班</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Pictrue5',

		data() {
			this.chartSettings = {
				metrics: ['本月', '本周', '本日'],
				dimension: ['日期']

			}

			return {
				chartData: {
					columns: ['日期', '本月', '本周', '本日', '下单率'],
					rows: [{
							'日期': '2019-04-09',
							'本月': 450,
							'本周': 50,
							'下单率': 0.32
						},
						{
							'日期': '2019-04-10',
							'本月': 470,
							'本周': 70,
							'下单率': 0.76
						},
						{
							'日期': '2019-04-11',
							'本月': 460,
							'本周': 60,
							'下单率': 0.49
						},
						{
							'日期': '2019-04-12',
							'本月': 442,
							'本周': 42,
							'下单率': 0.323
						},
						{
							'日期': '2019-04-13',
							'本月': 400,
							'本周': 80,
							'下单率': 0.28
						},
						{
							'日期': '2019-04-14',
							'本月': 600,
							'本周': 100,
							'下单率': 0.78
						}
					]

				},
				options: [{
					value: '选项1',
					label: '百合校区'
				}, {
					value: '选项2',
					label: '水南校区'
				}, {
					value: '选项3',
					label: '龙山校区'
				}, {
					value: '选项4',
					label: '玫瑰园校区'
				}, {
					value: '选项5',
					label: '滨江校区'
				}],
				value: '',
			}
		}
	}
</script>

<style scoped>
	.tuFive {
		border: 1px solid lightgrey;
		margin-top: 20px;
		width: 84%;
		margin-left: 100px;
		padding-top: 20px;
	}

	.tuFive span:nth-of-type(1) {
		position: absolute;
		margin-left: 20px;
	}

	.bao ul {
		text-align: center;
		height: 40px;
		margin-top: -30px;
		font-size: 12px;
	}

	.bao ul li {
		list-style: none;
		display: inline-block;
		width: 20%;
	}

	.bao ul li span:nth-of-type(1) {
		width: 3%;
		display: block;
		height: 5px;
		margin-top: 7px;
		margin-left: 40px;
	}

	.bao ul li:nth-of-type(1) span:nth-of-type(1) {
		background-color: #5ab1ef;
	}

	.bao ul li:nth-of-type(2) span:nth-of-type(1) {
		background-color: #19d4ae;
	}
	#xuan {
		margin-left: 190px;
		
	}
</style>
