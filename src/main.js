import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

axios.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    token: '12321edanrh324n3211312321'
  }
  return config
}, (err) => {
  return err
})

axios.interceptors.response.use((res) => {
  return res
}, (err) => {
  return err
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
