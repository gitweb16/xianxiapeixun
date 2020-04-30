export default {
	path: "/header",
	component: () => import('../../views/header/index.vue'),
	children: [{
			path: "system",
			component: () => import('../../components/wz/system/system.vue'),
		},
		{
			path: "course",
			component: () => import('../../components/wz/course/index.vue'),
		},
		{
			path: "mana",
			component: () => import('../../components/wz/mana/index.vue'),
		},
		{
			path: "order",
			component: () => import('../../components/wz/order/index.vue'),
		},
		{
			path: "teacher",
			component: () => import('../../components/wz/teacher/index.vue'),
		},
		{
			path: "stati",
			component: () => import('../../components/wz/stati/index.vue'),
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
			redirect: '/header/system'
		}
	]
}
