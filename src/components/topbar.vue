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
            <yd-button type="hollow" @click.native="showit(n.name)" v-for="(n,i) in siderbar" :key="n.name" class="siderbtn">
                {{n.name}}
            </yd-button>
        </yd-popup>

        <yd-popup v-model="show4" position="right" width="100%">
            <span>开始时间</span><input type="date">
            <br>
            <span>结束时间</span><input type="date">
            <yd-button type="danger" @click.native="show4 = false" class="closed">关闭搜索</yd-button>
        </yd-popup>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    export default {
        name: 'topbar',
        data () {
            return {
                msg: 'top name',
                show3: false,
                show4: false,
                datetime2: '2018-03-29',
                siderbar: [
                    {name: '零售主体', link: 'a'},
                    {name: '销售主题', link: 'a'},
                    {name: '生产主题', link: 'a'},
                    {name: '门店主题', link: 'a'},
                    {name: '会员主题', link: 'a'},
                    {name: '企划主题', link: 'a'}
                ]
            }
        },
        methods:{
            showit(val){
                this.show3 = false
                this.msg=val
            }
        },
        mounted:function () {
            this.msg=this.siderbar[0].name;
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
        position: absolute;
        bottom: 0;
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
