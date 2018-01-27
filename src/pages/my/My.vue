<template>
  <div>
    <div>my</div>
    <div class="app-container">
      <bind-mobile></bind-mobile>
    </div>
  </div>
</template>

<script>
  import bindMobile from '../../components/bind-mobile.vue';

  export default {

  name: 'HelloWorld',
    components: {
      'bind-mobile': bindMobile,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
