import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
import headerRouter from './header/index.js'

Vue.use(VueRouter)

const routes = [
	headerRouter,
	// systemRouter,
	{
	path: '/',
	redirect: '/header'
}]

export default router
