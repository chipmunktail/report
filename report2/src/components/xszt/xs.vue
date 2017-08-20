<template>
  <div class="xs">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'xs',
    data () {
      return {
        msg: 'xs'
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
