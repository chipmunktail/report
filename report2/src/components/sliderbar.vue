<template>
  <div class="sliderbar">
    <h1>{{ msg }}</h1>
    <router-link v-bind:to="to[0].link">{{to[0].name}}</router-link>
    <router-link v-bind:to="to[1].link">{{to[1].name}}</router-link>

    <hr>
    <yd-tab>
      <yd-tab-panel v-for='n in to' v-bind:label="n.name">{{n.name}}{{n.name}}{{n.name}}{{n.name}}</yd-tab-panel>
    </yd-tab>

    <router-view></router-view>
  </div>
</template>

<script>
  import Bus from '../assets/bus.js'

  export default{
    name: 'sliderbar',
    data () {
      return {
        msg: 'sliderbar',
        to: [
          {link: "/bar/ls", name: 'ls'},
          {link: "/bar/xs", name: 'xs'}
        ]
      }
    },
    mounted(){
        let o=this;
      Bus.$on('change', function (val) {
          o.to=[
            {link: "/bar/xs", name: 'xs'},
            {link: "/bar/ls", name: 'ls'}
          ]
          console.log(val+'66')
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
