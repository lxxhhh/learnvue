<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //路由的钩子函数  组件内写法
      beforeRouteEnter:(to,from,next) => {
            console.log('I am coming');
            next(); //这个必须要写，不然无法跳转
      },
      beforeRouteLeave (to, from, next) {
        console.log('I am leaving');
            next();
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
