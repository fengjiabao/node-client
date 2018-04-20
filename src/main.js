import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.$http = axios

// axios.defaults.baseURL = 'http://127.0.0.1:8888/'
// axios.defaults.withCredentials = true;
// global.axios = axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
