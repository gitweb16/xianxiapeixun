import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
import home from '../views/home/index.vue'
<<<<<<< HEAD
import homeRouter from './home/index.js'
=======
import PictureRoter from './tupian'
>>>>>>> be6625057c045ae288ba4d29bb765a5e8cccdaaf
Vue.use(VueRouter)

const routes = [
	homeRouter,
	{
	path: '/',
	redirect: '/home'
}]

const router = new VueRouter({
<<<<<<< HEAD
	mode: 'history',
	base: process.env.BASE_URL,
	routes
=======
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
	  PictureRoter,
	 {
		 path:'/*',
		 redirect:'/tupian'
	 }
  ]
>>>>>>> be6625057c045ae288ba4d29bb765a5e8cccdaaf
})

export default router
