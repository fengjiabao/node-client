<template>
    <div>
      <input type="text"/>
        <h1>{{ msg }}</h1>
        <h2 @click="postData">Essential Links</h2>
    </div>
</template>
<script>
import qs from 'qs'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'sendmsg'
    }
  },
  methods: {
    postData: function () {
      let data = {name: 'fjb', pwd: '123'}
      console.log('data', data)
      this.$http({
        method: 'post',
        url: '/process_post',
        headers: { 'content-type': 'application/x-www-form-urlencoded' }, // 'application/json'
        data: qs.stringify(data)
      }).then(function (response) {
        console.log(response)
      })
    }
  }
}
</script>