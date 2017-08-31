<template>
  <div class="lists">
    <mt-button size="large" class="block" type="primary" disabled>选择</mt-button>
    <mt-button size="large" v-for="n in all" :key="n.furl" class="theme" v-on:click="fetchOne(n)">{{n.fname}}</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'lists',
    data() {
      return {
        all: null,
        arr: '66'
      }
    },
    mounted() {
      $.get('http://10.10.1.43:443/Dd/po.do', (re) => {
        this.all = JSON.parse(re)
        //this.arr=JSON.parse(re)[1].list
      });
    },
    methods: {
      fetchOne: function (val) {
        this.$emit('theme',val)
      }
    }
  }
</script>

<style scoped>
  .block {
    border-radius: 0;
    height: 40px;
  }

  .theme {
    border-radius: 0;
    margin: 1px 0;
  }
</style>
