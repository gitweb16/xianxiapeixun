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
			]
		},
		{
			path: "course",
			component: () => import('../../components/wz/course/index.vue')
		},
		{
			path: "mana",
			component: () => import('../../components/wz/mana/index.vue'),
			children: [
				{
					path: 'management',
					component: () => import('../../components/wz/Teatch/management.vue'),
				},
			],
		},
		{
			path: "order",
			component: () => import('../../components/wz/order/index.vue'),
			children: [{
				path: 'Tufei',
				component: () => import('../../views/Tao/Tuifei/index.vue'),
			}]
		},
		{
			path: "teacher",
			component: () => import('../../components/wz/teacher/index.vue'),
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
				}
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