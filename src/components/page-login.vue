<template>
    <div>
      <article v-if="!showRegisterTips">
        <p>
          <span>用户名:</span><input type="text" v-model="user"/>
        </p>
        <p>
          <span>密码:</span><input type="password" v-model="password"/>
        </p>
        <p> 
          <h1>{{ tips }}</h1>
          <button @click="dologin">登录</button>
          <p @click="doregister">还没帐户？马上注册。</p>
          <h2 @click="download">下载文件</h2>
        </p>
      </article>
      <page-register v-if="showRegisterTips"></page-register>
    </div>
</template>
<script>
import qs from 'qs'
import pageRegister from './page-register'
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      password: '',
      tips: '',
      showRegisterTips: false
    }
  },
  components: {
    pageRegister
  },
  methods: {
    dologin: function () { // 此处使用箭头函数会改变this指向
      let data = {name: this.user, pwd: this.password}
      this.$http({
        method: 'post',
        url: '/login',
        headers: { 'content-type': 'application/x-www-form-urlencoded' }, // 'application/json'
        data: qs.stringify(data)
      }).then((response) => {
        console.log(response)
        response.data.code === 200 ? this.$router.replace({ path: '/Monitor' }) : this.tips = '用户名或密码不正确'
      })
    },
    doregister: function () {
      this.showRegisterTips = true
    },
    download: function (params) {
      this.$http({
        method: 'get',
        url: '/downloadfile'
      })
      .then((res) => {
        console.log(res)
        let link = document.createElement('a')
        let absoluteUrl = 'http://127.0.0.1:8888/downloadfile/'
        link.setAttribute('href', absoluteUrl)
        link.setAttribute('target', '_blank')
        link.setAttribute('download', 'expTest.xlsx')
        link.click()
      })
    }
  }
}
</script>