<template>
  <div class="right">
    <h1>{{ msg }}</h1>
   
  </div>
</template>

<script>
export default {
  name: 'H2',
  data () {
    return {
      msg: 'Welcome to H2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right{
  float: left;;
  background-color:peru;
  width: 50%;
}
h1, h2 {
  font-weight: normal;
  color: #ffffff;
}
</style>
