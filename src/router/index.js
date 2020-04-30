import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
<<<<<<< HEAD
import home from '../views/home/index.vue'
import PictureRoter from './xutao/tupian'
import MenuRoter from './xutao/caidan'
import PremiumRoter from './xutao/tuifei'
=======
import headerRouter from './header/index.js'



>>>>>>> 03c268080b5acd73e402e2f2667682da67a840ee
Vue.use(VueRouter)

const routes = [
	headerRouter,
	// systemRouter,
	{
	path: '/',
	redirect: '/header'
}]

const router = new VueRouter({

  mode: 'history',
  base: process.env.BASE_URL,
<<<<<<< HEAD
  routes:[
	 PictureRoter,
	 MenuRoter,
	 PremiumRoter,
	 {
		 path:'/*',
		 redirect:'/xutao/caidan'
	 }
  ]
=======
  routes

>>>>>>> 03c268080b5acd73e402e2f2667682da67a840ee
})

export default router
