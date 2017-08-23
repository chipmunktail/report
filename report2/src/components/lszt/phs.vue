<template>
  <div class="phs">
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.id }}</h1>
    <span>数据：</span>
    <p>{{datas}}</p>
  </div>
</template>

<script>
  export default {
    name: 'phs',
    data () {
      return {
        msg: 'phs',
        datas:''
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods:{
      fetchData(){
        $.get('http://10.10.1.43:443/pages/sysb/SysbQuery/p.do?fidSysbquery='+this.$route.params.id+'&&time=1503366447603&',
          {},res=>{
            this.datas=res;
          },'json')
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
