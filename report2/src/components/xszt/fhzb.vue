<template>
  <div class="fhzb">
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.id }}</h1>
    <span>数据：</span>
    <p>{{datas}}</p>
  </div>
</template>

<script>
  export default {
    name: 'fhzb',
    data () {
      return {
        msg: 'fhzb',
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
        $.get('http://10.10.1.43:443/pages/sysb/SysbQuery/p.do?fidSysbquery=8a8a815e589911170158bdf7ba640013&time=1503367412584',
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
</style>
