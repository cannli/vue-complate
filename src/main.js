import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import ku from './assets/js/ku.js'
import common from './assets/js/common'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './components/element/index.js'
import App from './App'
import './assets/icon/iconfont.js'
import Message from '@/components/pages/message/index.js'
import Directives from '@/components/directives/index.js'
Vue.use(Message)
Vue.use(ku)
Vue.use(common)
Vue.config.productionTip = false
Vue.use(Directives)
/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

