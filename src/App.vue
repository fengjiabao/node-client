<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2 @click="postData">Essential Links</h2>
    
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "app",
  data() {
    return {
      msg: "sendmsg"
    };
  },
  methods: {
    postData: function() {
      //  const that = this;
      // axios.post('/process_post', {
      //     name: '122',
      //     pwd: '22'
      // }).then(function (response) {
      //     console.log(response);

      //     // that.$router.push('/home');
      // })
      let data ={name:'fjb',pwd: '123'}
      console.log('data',data)
      this.$http({
        method: "post",
        url: "http://127.0.0.1:8888/process_post",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },//'application/json'       
        data: qs.stringify(data),
        withCredentials: true
      
      }).then(function (response) {
        console.log(response);
      })
    }
    // test: function (params) {
    //    let data ={name:'liy',pwd: '12344'}
    //   console.log('data',data)
    //   this.$http({
    //     method: "post",
    //     url: "http://127.0.0.1:8888/process_post",
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },//'application/json'       
    //     data: qs.stringify(data),
    //     withCredentials: true
    //   }).then(function (response) {
    //     console.log(response);
    //   })
    // }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
