import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

axios.defaults.baseURL = 'http://127.0.0.1:8888/'
axios.defaults.withCredentials = true
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App),
  router
  // template: '<App/>',
  // components: { App }
})
