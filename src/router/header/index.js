export default {
	path: "/header",
	component: () => import('../../views/header/index.vue'),
	children: [{
			path: "system",
			component: () => import('../../components/wz/system/system.vue'),
			children: [{
					path: 'Caidan',
					component: () => import('../../views/Tao/Caidan/index.vue'),
				},
				{
					path: 'account',
					component: () => import('../../components/wz/Teatch/account.vue'),
				},
				{
					path: 'jiazhang',
					component: () => import('../../views/wjh/Parent/index.vue'),
				},
				{
					path: 'Guanli',
					component: () => import('../../views/Tao/Guanli/index.vue'),
				},
				{
					path: 'Tongzhi',
					component: () => import('../../views/Tao/Tongzhi/index.vue'),
				}
			]
		},
		{
			path: "course",
			component: () => import('../../components/wz/course/index.vue'),
			children: [{
					path: 'active',
					component: () => import('../../views/wjh/Huodong/index.vue'),
				},
				{
					path: 'Curriculum',
					component: () => import('../../components/wz/Teatch/Curriculum.vue')
				},
				{
					path: 'Shixue',
					component: () => import('../../views/Tao/Shixue/index.vue')
				},
				{
					path: 'activity',
					component: () => import('../../components/wz/Teatch/activity.vue')
				},
				{
					path: 'activ',
					component: () => import('../../components/wz/Teatch/activ.vue')
				},
				{
					path: 'Try',
					component: () => import('../../components/wz/Teatch/Try.vue')
				},
				{
					path: 'consumption',
					component: () => import('../../components/wz/Teatch/consumption.vue')
				},
				{
					path: 'Night',
					component: () => import('../../components/wz/Teatch/Night.vue')
				},
				{
					path: 'Evening',
					component: () => import('../../components/wz/Teatch/Evening.vue')
				},
				{
					path: 'tutorial',
					component: () => import('../../components/wz/Teatch/tutorial.vue')
				},
				{
					path: 'consumptions',
					component: () => import('../../components/wz/Teatch/consumptions.vue')
				},

			]
		},
		{
			path: "mana",
			component: () => import('../../components/wz/mana/index.vue'),
			children: [{
					path: 'management',
					component: () => import('../../components/wz/Teatch/management.vue'),
				},
				{
					path: 'fenban',
					component: () => import('../../components/zyc/fenban/fenbanguanli.vue'),
				},
				{
					path: 'banfenliebiao',
					component: () => import('../../components/zyc/fenban/banfenliebiao.vue'),
				},
				{
					path: 'schedule',
					component: () => import('../../components/wz/Teatch/schedule.vue'),
				},
				{
					path: 'hour',
					component: () => import('../../components/wz/Teatch/hour.vue'),
				},
			],
		},
		{
			path: "order",
			component: () => import('../../components/wz/order/index.vue'),
			children: [{
					path: 'Tufei',
					component: () => import('../../views/Tao/Tuifei/index.vue'),
				},
				{
					path: 'Inform',
					component: () => import('../../components/zyc/dingdan/dingdanguanli.vue'),
				},
				{
					path: 'Turn',
					component: () => import('../../components/wz/Teatch/Turn.vue'),
				},
				{
					path: 'Transfer',
					component: () => import('../../components/wz/Teatch/Transfer.vue'),
				},
			]
		},
		{
			path: "teacher",
			component: () => import('../../components/wz/teacher/index.vue'),
			children: [{
				path: 'Laoshi',
				component: () => import('../../views/Tao/Laoshi/index.vue'),
			}]
		},
		{
			path: "stati",
			component: () => import('../../components/wz/stati/index.vue'),
			children: [{
					path: 'teas',
					component: () => import('../../components/wz/Teatch/teas.vue'),
				},
				{
					path: 'Tupian',
					component: () => import('../../views/Tao/Tupian/index.vue'),
				},
<<<<<<< HEAD
=======

>>>>>>> 43174f41657e1968a48a11875b663a523c0fdfb8
				{
					path: 'Kaoqing',
					component: () => import('../../views/Tao/Kaoqing/index.vue'),
				},
			],

		},
		{
			path: "student",
			component: () => import('../../components/wz/student/index.vue'),
		},
		{
			path: "pay",
			component: () => import('../../components/wz/pay/index.vue'),
		},
		{
			path: '/header',
			redirect: '/header/course'
		}
	]
}
