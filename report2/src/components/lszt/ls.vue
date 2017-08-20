<template>
  <div class="ls">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'ls',
    data () {
      return {
        msg: 'ls'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
