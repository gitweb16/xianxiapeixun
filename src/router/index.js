import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
import home from '../views/home/index.vue'
import PictureRoter from './tupian'
import huodongRoter from './wjh/huodong'
import parentRoter from './wjh/parent'
Vue.use(VueRouter)

  const routes = [	
  {
	   path:'/',
	   component:home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
	  huodongRoter,
	 {
		 path:'/*',
		 redirect:'/wjh/huodong'
	 }
  ]
})

export default router
