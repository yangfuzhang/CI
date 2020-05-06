import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// if (process.env.NODE_ENV === 'development') {
//   require('./mock.js')
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
