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
      <div v-for='n in to' :key="n.name" :label="n.name" class="btn">
        <router-link :to="n.link">{{n.name}}</router-link>
      </div>
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
          {link: "/bar/ls/8a8a81ab5b1da5cf015b226cddf603cd", name: 'ls'},
          {link: "/bar/phs/40288a4e58f59d970158f7285d6f028b", name: 'dppm'},
          {link: "/bar/phs/40288a4e58fb1d450158fc7c831401e5", name: 'rmcp'},
          {link: "/bar/qgs/8a8a81a95a63e115015a68ea3bad007b", name: 'qgqy'},
          {link: "/bar/qgs/8a8a81a95a63e115015a68f1ed24007d", name: 'qgdb'}
        ]
      }
    },
    mounted() {
      let o = this;
      Bus.$on('change', val => {
        if (val === 'lszt') {
          o.to = [
            {link: "/bar/ls/8a8a81ab5b1da5cf015b226cddf603cd", name: 'ls'},
            {link: "/bar/phs/40288a4e58f59d970158f7285d6f028b", name: 'dppm'},
            {link: "/bar/phs/40288a4e58fb1d450158fc7c831401e5", name: 'rmcp'},
            {link: "/bar/qgs/8a8a81a95a63e115015a68ea3bad007b", name: 'qgqy'},
            {link: "/bar/qgs/8a8a81a95a63e115015a68f1ed24007d", name: 'qgdb'}
          ]
        } else if (val === 'xszt') {
          o.to = [
            {link: "/bar/fhzb/8a8a815e589911170158bdf7ba640013", name: 'fhzb'}
          ]
        }
      })

//--------左右滑动-------
      let s, es;
      $('.h-touch').on('touchstart', e => {
        let _touch = e.originalEvent.targetTouches[0];
        s = [_touch.pageY, _touch.pageX]
      }).on('touchend', e => {
        let touch = e.originalEvent.changedTouches[0];
        es = [touch.pageY, touch.pageX]
      });
      $('#tab').on('touchend', () => {
        let res = s[0] - es[0],
          sz = 70 > res && res > -70
        if (sz && s[1] < es[1]) {
          $('.tab-active').prev('.tab-nav-item').click()
        } else if (sz && s[1] > es[1]) {
          $('.tab-active').next('.tab-nav-item').click()
        }
      })
//--------左右滑动-------

//      let l, r;
//      $('.hs-touch').on('touchstart', e => {
//        let _touch = e.originalEvent.targetTouches[0];
//        l = [_touch.pageY, _touch.pageX]
//      }).on('touchend', e => {
//        let touch = e.originalEvent.changedTouches[0];
//        r = [touch.pageY, touch.pageX]
//        //----------------------------
//        let lr = l[0] - r[0],
//          c = 70 > lr && lr > -70
//        if (c && l[1] < r[1]) {
//          let num = (n) => {
//            for (let i = 0; i < this.to.length; i++) {
//              if (this.to[this.to.length - 1] === n) {
//                return 'rs'
//              }
//              if (this.to[i].name === n) {
//                return this.to[i + 1].name
//              }
//            }
//          };
//          console.log('r')
//        } else if (c && l[1] > r[1]) {
//          console.log('l')
//        }
//      });
    },
    watch: {
      to(newval, oldval) {
        this.$router.push({path: newval[0].link})
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
  #tab{
    display: none;
    position: fixed;
    top: 40px;
    width: 100%;
  }
  .hslider {
    position: fixed;
    top: 40px;
    width: 100%;
    height: 20px;
    background-color: #b6e2ff;
    white-space: nowrap;
    overflow: scroll
  }
  .hs-touch{
    margin-top: 26px;
  }
  .btn {
    height: 20px;
    background-color: #3e79b5;
    color: #ffffff;
    display: inline-block;
    margin: 0 0.5px 0 0.5px;
    border-radius: 0;
  }

</style>
