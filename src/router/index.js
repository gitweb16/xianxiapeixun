import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test/test.vue'
import headerRouter from './header/index.js'
import loginRouter from './login/index.js'


Vue.use(VueRouter)

const routes = [
	headerRouter,
	loginRouter,
	// systemRouter,
	{
	path: '/',
	redirect: '/login'
}]

export default router
