<template>
  <div class="phs">
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'phs',
    data () {
      return {
        msg: 'phs'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
  .phs{
    background-color: #9eb6ff;
    width: 100%;
    height: 100px;
  }
</style>
