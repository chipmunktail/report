<template>
  <div class="qgs">
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.id }}</h1>
    <span>数据：</span>
    <p>{{datas}}</p>
  </div>
</template>

<script>
  let axios=require('axios')
  export default {
    name: 'qgs',
    data () {
      return {
        msg: 'qgs',
        datas:''
      }
    },
    mounted(){
      console.log(this.$route.params.id)
      //      axios请求示例
//      axios({method:'get',
//      url:'http://10.10.1.43:443/pages/sysb/SysbQuery/p.do?fidSysbquery=8a8a81ab5b1da5cf015b226cddf603cd&&date=20170822&pageSize=32&time=1503363116761&'})
//        .then(function (res) {
//          console.log('--------'+res.data.msg)
//        })
//        .catch(function (e) {
//          console.log('++++++++'+e)
//        })
//      ajax请求示例
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods:{
      fetchData(){
        $.get('http://10.10.1.43:443/pages/sysb/SysbQuery/p.do?fidSysbquery='+this.$route.params.id+'&&date=20170822&pageSize=32&time=1503363116761&',
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
  .qgs{
    background-color: #93e9ff;
    width: 100%;
    height: auto;
  }
</style>
