import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
import home from '../views/home/index.vue'
import PictureRoter from './tupian'
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
	 {
		 path:'/*',
		 redirect:'/tupian'
	 }
  ]
})

export default router
