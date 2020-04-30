import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
import home from '../views/home/index.vue'
import PictureRoter from './xutao/tupian'
import MenuRoter from './xutao/caidan'
import PremiumRoter from './xutao/tuifei'
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
	 PictureRoter,
	 MenuRoter,
	 PremiumRoter,
	 {
		 path:'/*',
		 redirect:'/xutao/caidan'
	 }
  ]
})

export default router
