import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
import homeRouter from './header/index.js'



Vue.use(VueRouter)

const routes = [
	homeRouter,
	// systemRouter,
	{
	path: '/',
	redirect: '/header'
}]

const router = new VueRouter({

  mode: 'history',
  base: process.env.BASE_URL,
  routes

})

export default router
