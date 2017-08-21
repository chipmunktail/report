<template>
  <div class="sliderbar">
    <h1>{{ msg }}</h1>

    <yd-tab id="tab">
      <yd-tab-panel v-for='n in to' :key="n.name" :label="n.name">
        <div class="h-touch" style="width: 100%;height: 200px;background-color: antiquewhite;">
          {{n.name}}
        </div>
      </yd-tab-panel>
    </yd-tab>

    <div class="hslider">
      <i v-for='n in to' :key="n.name" :label="n.name" class="btn">
        <router-link :to="n.link">{{n.name}}</router-link>
      </i>
    </div>

    <router-view class="hs-touch"></router-view>

  </div>
</template>

<script>
  import Bus from '../assets/bus.js'

  export default {
    name: 'sliderbar',
    data() {
      return {
        msg: 'sliderbar',
        to: [
          {link: "/bar/ls", name: 'ls'},
          {link: "/bar/phs/dppm", name: 'dppm'},
          {link: "/bar/phs/rmcp", name: 'rmcp'},
          {link: "/bar/qgs/qgqy", name: 'qgqy'},
          {link: "/bar/qgs/qgdb", name: 'qgdb'}
        ]
      }
    },
    mounted() {
      let o = this;
      Bus.$on('change', val=> {

        o.to = [
          {link: "/bar/qgs/qgqy", name: 'qgqy'},
          {link: "/bar/phs/dppm", name: 'dppm'},
          {link: "/bar/ls", name: 'ls', html: 'val'}
        ]
      })

//--------左右滑动-------
      let s, es;
      $('.h-touch').on('touchstart', e=> {
        let _touch = e.originalEvent.targetTouches[0];
        s = [_touch.pageY, _touch.pageX]
      }).on('touchend', e=> {
        let touch = e.originalEvent.changedTouches[0];
        es = [touch.pageY, touch.pageX]
      });
      $('#tab').on('touchend',  ()=> {
        let res = s[0] - es[0],
          sz = 70 > res && res > -70
        if (sz && s[1] < es[1]) {
          $('.tab-active').prev('.tab-nav-item').click()
        } else if (sz && s[1] > es[1]) {
          $('.tab-active').next('.tab-nav-item').click()
        }
      })
//--------左右滑动-------


    },
    watch: {
      to(newval, oldval) {
        console.log(this.to[0].link)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }

  .hslider {
    width: 100%;
    height: 20px;
    background-color: #b6e2ff;
    white-space: nowrap;
    overflow: scroll
  }
  .btn{
    background-color: #3e79b5;
    display: inline-block;
    margin: 0 5px 0 5px;
  }
</style>
