<template>
  <div class="topbar">
    <div class="flexbox">
      <yd-button size="small" type="danger" @click.native="show3 = true" class="popup">
        <yd-icon name="type" size="20px"></yd-icon>
      </yd-button>

      <h1 class="title">{{ msg }}</h1>

      <yd-button type="danger" class="search" @click.native="show4 = true">
        <yd-icon name="search" size="20px"></yd-icon>
      </yd-button>
    </div>
    <yd-popup v-model="show3" position="left" width="60%" class="silderbar-c">
      <yd-button type="danger" class="siderbtn">&nbsp</yd-button>
      <yd-button type="hollow" @click.native="showit(n.link)" v-for="(n,i) in siderbar" :key="n.name" class="siderbtn">
        {{n.name}}
      </yd-button>
    </yd-popup>

    <yd-popup v-model="show4" position="right" width="80%" class="silderbar-c">
      <yd-accordion accordion style="margin-bottom: 30px">
        <yd-accordion-item title="选择时间" open>
            <yd-cell-item arrow>
              <span slot="left">开始时间：</span>
              <yd-datetime type="date" v-model="datetime1" slot="right"></yd-datetime>
            </yd-cell-item>
            <yd-cell-item arrow>
              <span slot="left">结束时间：</span>
              <yd-datetime type="date" v-model="datetime2" slot="right"></yd-datetime>
            </yd-cell-item>
        </yd-accordion-item>
        <yd-accordion-item title="选择经销商" open>
          <yd-cell-item type="checkbox">
            <span slot="left">杭州总经销商</span>
            <input slot="right" type="checkbox" value="杭州总经销商" v-model="jxs"/>
          </yd-cell-item>

          <yd-cell-item type="checkbox">
            <span slot="left">合肥总经销商</span>
            <input slot="right" type="checkbox" value="合肥总经销商" v-model="jxs"/>
          </yd-cell-item>

          <yd-cell-item type="checkbox">
            <span slot="left">路桥总经销商</span>
            <input slot="right" type="checkbox" value="路桥总经销商" v-model="jxs"/>
          </yd-cell-item>

          <yd-cell-item>
            <span slot="left">选中的经销商数量：</span>
            <span slot="right">{{jxs.length}}</span>
          </yd-cell-item>
        </yd-accordion-item>
        <yd-accordion-item title="商品大类" open>
          <yd-cell-item type="checkbox">
            <span slot="left">鞋</span>
            <input slot="right" type="checkbox" value="鞋" v-model="checkedNames3"/>
          </yd-cell-item>
          <yd-cell-item type="checkbox">
            <span slot="left">包</span>
            <input slot="right" type="checkbox" value="包" v-model="checkedNames3"/>
          </yd-cell-item>
          <yd-cell-item type="checkbox">
            <span slot="left">其他</span>
            <input slot="right" type="checkbox" value="其他" v-model="checkedNames3"/>
          </yd-cell-item>
        </yd-accordion-item>
        <yd-accordion-item title="商品年份" open>
          <yd-cell-item type="checkbox">
            <span slot="left">2017</span>
            <input slot="right" type="checkbox" value="2017" v-model="checkedNames4"/>
          </yd-cell-item>
          <yd-cell-item type="checkbox">
            <span slot="left">2016</span>
            <input slot="right" type="checkbox" value="2016" v-model="checkedNames4"/>
          </yd-cell-item>
          <yd-cell-item type="checkbox">
            <span slot="left">2015</span>
            <input slot="right" type="checkbox" value="2015" v-model="checkedNames4"/>
          </yd-cell-item>
        </yd-accordion-item>
        <yd-accordion-item title="商品季节" open>
          <yd-cell-item type="checkbox">
            <span slot="left">春</span>
            <input slot="right" type="checkbox" value="春" v-model="checkedNames5"/>
          </yd-cell-item>
          <yd-cell-item type="checkbox">
            <span slot="left">夏</span>
            <input slot="right" type="checkbox" value="夏" v-model="checkedNames5"/>
          </yd-cell-item>
          <yd-cell-item type="checkbox">
            <span slot="left">秋</span>
            <input slot="right" type="checkbox" value="秋" v-model="checkedNames5"/>
          </yd-cell-item>
          <yd-cell-item type="checkbox">
            <span slot="left">冬</span>
            <input slot="right" type="checkbox" value="冬" v-model="checkedNames5"/>
          </yd-cell-item>
        </yd-accordion-item>
      </yd-accordion>
      <yd-button size="large" type="danger" @click.native="show4 = false" class="closed">关闭搜索</yd-button>
    </yd-popup>
  </div>
</template>

<script>
  import Bus from '../assets/bus.js'
  export default {
    name: 'topbar',
    data () {
      return {
        msg: 'top name',
        show3: false,
        show4: false,
        datetime1: '2018-01-20',
        datetime2: '2018-03-28',
        siderbar: [
          {name: '零售主体', link: 'lszt'},
          {name: '销售主题', link: 'xszt'},
          {name: '生产主题', link: 'a'},
          {name: '门店主题', link: 'a'},
          {name: '会员主题', link: 'a'},
          {name: '企划主题', link: 'a'}
        ],
        jxs: [],
        checkedNames4:[],
        checkedNames5:[],
        checkedNames3:[]
      }
    },
    methods: {
      showit: function (val) {
        this.show3 = false
        this.msg=val
        Bus.$emit('change',val)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topbar{
    position: fixed;
    z-index: 10;
    top:0;
    background-color: #ef4f4f;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .flexbox{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:space-between;
  }
  .popup {
    height: 40px;
    line-height: 40px;
  }
  .title{
    color: #ffffff;
  }
  .search{
    height: 40px;
    line-height: 40px;
  }
  .closed{
    border-radius: 0;
    height: 50px;
  }

  .silderbar-c{
    overflow-y: scroll;
  }
  .siderbtn{
    margin:0;
    padding: 0;
    width: 100%;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #d6d6d6;
    font-family: "Microsoft YaHei";
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }


</style>
