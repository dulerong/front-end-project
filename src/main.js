import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'

import './plugins/axios'
import './plugins/day'
import './plugins/apexcharts'
import './plugins/constantsAPP'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
