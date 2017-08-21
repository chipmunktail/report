<template>
  <div class="qgs">
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
  let axios=require('axios')
  export default {
    name: 'qgs',
    data () {
      return {
        msg: 'qgs'
      }
    },
    mounted(){
      console.log(this.$route.params.id)
//      ajax请求示例
//      axios.get('http://localhost:3000/'+this.$route.params.id)
//        .then(function (res) {
//        })
//        .catch(function (e) {
//
//        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
  .qgs{
    background-color: #93e9ff;
    width: 100%;
    height: 100px;
  }
</style>
