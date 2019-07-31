<template>
  <div id="app">
    <img src="./assets/logo.png">    
    <button @click="goBack">后退</button>
    <button @click="goAhand">前进</button>
    <button @click="goHome">返回首页</button>
    <router-link to="/">Home</router-link>|
    <!-- 重新定向路径 不同的url跳转到相同的页面 -->
    <router-link to="/gohome">gohome</router-link>|

    <router-link to="/sissi">sissi</router-link>|
    
    <!-- 路由利用url传递参数 -->
    <router-link to="/params/1010/sissi">params</router-link>|  <!--url传值-->
    <!-- 带参数的不同的url重新定向路径跳转到相同的页面 -->
    <router-link to="/goparams/0001/lxx">goparams</router-link>|  <!--url传值-->
    
    
    
    <!-- 不同的路径但是使用同样的组件 -->
    <router-link to="/hi1">hi1</router-link>|
    <!-- /hi1这个路径的别名/aliass，路径名不同但是页面内容相同 -->
     <router-link to="/aliass">aliass</router-link>|


     <router-link to="/temp">temp</router-link>| 

     <router-link to="/props">props</router-link>| 
     
   

    <!-- 单页面 多路由 -->
    <router-view></router-view>
     <transition name="fade" mode="out-in">
       <!-- mode="out-in" 进入方式，in-out先进后出，out-in先出后进 -->
          <router-view name="left"></router-view>
     </transition>
   
    <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack(){
      this.$router.go(-1);//返回
    },
    goAhand(){
      this.$router.go(1);//前进
    },
    goHome(){
      this.$router.push('/');//跳转到指定页面
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
