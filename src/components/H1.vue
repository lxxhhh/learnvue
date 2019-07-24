<template>
  <div class="left">
    <h1>{{ msg }}</h1>
   
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      temp: true,
      msg: 'Welcome to H1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
  background-color: red;
  width: 50%;
  float: left;
}
h1, h2 {
  font-weight: normal;
  color: #ffffff;
}

</style>
