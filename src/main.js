import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  VCharts from 'v-charts'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(ElementUI)
Vue.use(VCharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
