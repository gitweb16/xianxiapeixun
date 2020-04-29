import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
import home from '../views/home/index.vue'
import homeRouter from './home/index.js'
Vue.use(VueRouter)

const routes = [
	homeRouter,
	{
	path: '/',
	redirect: '/home'
}]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
