<template>
  <div class="hello">
    <!--header ber-->
    <mt-header v-bind:title="title">
      <router-link to="/" slot="left">
        <mt-button icon="more" @click="popupListClick(true)"></mt-button>
      </router-link>
      <mt-button icon="search" slot="right" @click="popupSearchClick(true)"></mt-button>
    </mt-header>
    <!--slider bar-->
    <div class="nav">
      <mt-button size="small" @click.native="getPage(n)" class="tab" v-for="n in sliderLists" :key="n.fname"
                 :id="n.forder">{{n.fname}}
      </mt-button>
    </div>

    <!--content-->
    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
      <mt-tab-container-item v-for="n in sliderLists" :key="n.forder" :id="n.forder" class="page-container">
      </mt-tab-container-item>
    </mt-tab-container>
    <!--theme list-->
    <mt-popup
      v-model="popupList"
      position="left" class="list">
      <lists v-on:theme="sliderList">{{slots}}</lists>
      <mt-button @click="popupListClick(false)" class="closeList" type="danger">关闭</mt-button>
    </mt-popup>
    <!--search-->
    <mt-popup
      v-model="popupSearch"
      position="right" class="list">
      {{slots}}
      <mt-button @click="popupSearchClick(false)" class="closeList" type="danger">关闭</mt-button>
    </mt-popup>
  </div>
</template>

<script>
  import Lists from "./lists.vue";

  export default {
    components: {Lists},
    name: 'hello',
    data() {
      return {
        title: '零售主题',
        popupList: false,
        popupSearch: false,
        active: '0000100002',
        slots: 1,
        //selected: '1',
        sliderLists: '',
        allInfo: ''
      }
    },
    methods: {
      //隐藏侧边主题导航
      popupListClick: function (val) {
        this.popupList = val
      },
      //隐藏侧边搜索
      popupSearchClick: function (val) {
        this.popupSearch = val
      },
      //点击theme list bar事件
      sliderList: function (val) {
        //做三件小事：
        //一.（1.设置title 2.关闭popupList 3.循环渲染sliderLists）
        //二. 循环获取页面并渲染
        //三. 点击slider list第一个按钮
        let _ = this;

        async function xs() {
          _.title = val.fname;
          _.popupList = false;
          _.sliderLists = val.list;
          return 0
        }

        xs().then(function () {
            let container = $('.page-container');
            for (let i = 0; i < container.length; i++) {
              $.get('http://10.10.1.43:443/Dd/ph.do?code=' + val.list[i].fid, {}, result => {
                let beg = result.indexOf("<body>");
                result = result.substr(beg + 6, result.length).replace("</body>", "").replace("</html>", "");
                $('.page-container').eq(i).html(result)
              })
            }
          }
        ).then(function () {
          $('#' + val.list[0].forder).click()
        })

      },
      //获取页面&&设置active
      getPage: function (val) {
        this.active = val.forder;
        //获取页面
        //不要点击slider btn的时候在获取页面，在点击them list的时候获取页面
      }
    },
    watch: {
      active(n, o) {
        //todo
        let tar = $('#' + n);
        console.log(tar.offset().left)
        tar.parent().children().css({color:'#656b79'})
        tar.css({color:'#26a2ff'})
        $('.nav').animate({scrollLeft: tar.offset().left})
      }
    },
    mounted() {
      //页面加载完后点击第一个主题
      document.onreadystatechange = function () {
        if (document.readyState === "complete") {
          console.log('*---------------------')
          setTimeout(function () {
            $('.lists').children().eq(1).click()
          },500)
        }
      }

    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1.mint-header-title {
    margin: 0;
    color: #ffffff;
  }

  .list {
    height: 100%;
    width: 60%;
  }

  .nav {
    height: 35px;
    background-color: #ffffff;
    white-space: nowrap;
    overflow: scroll;
  }

  .tab {
    border-radius: 0;
  }

  .sale {
    height: 10px;
    padding: 10px 0;
  }

  .date {
    border-radius: 0;
    width: 32%;
  }

  .closeList {
    height: 40px;
    width: 100%;
    border-radius: 0;
  }
</style>
