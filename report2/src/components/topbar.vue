<template>
  <div class="topbar">
    <h1>{{ msg }}</h1>
    <button v-on:click="showit('fk')">Greet</button>
  </div>
</template>

<script>
  import Bus from '../assets/bus.js'
  export default {
    name: 'topbar',
    data () {
      return {
        msg: 'topbar',
        counter: 0
      }
    },
    methods: {
      showit: function (event) {
        Bus.$emit('change',event)
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
