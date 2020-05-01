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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})





export default router

