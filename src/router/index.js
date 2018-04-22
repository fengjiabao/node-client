import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page-login'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
