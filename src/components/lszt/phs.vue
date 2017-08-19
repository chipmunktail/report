<template>
    <div id="phs">
        <div class="saleType">
            <span>全部</span>
            <span>直营</span>
            <span>加盟</span>
        </div>
        <div class="select">
            <button>日</button>
            <button>周</button>
            <button>月</button>
            <button>search</button>
        </div>
        <div class="cell">
            <div ><span class="dp" v-for="n in title">{{n}}</span></div>
            <table border="0">
                <tbody>
                <tr v-for="(item, index) in items">
                    <td>{{index}}</td>
                    <td>{{item.num}}</td>
                    <td>{{item.amount}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <yd-button @click.native="change">
            上一日
        </yd-button>
        <div>
            <span>总数：63</span>
            <span>金额：8039</span>
        </div>
        <yd-button @click.native="change">
            下一日
        </yd-button>
    </div>
</template>

<script>
    export default {
        name: 'phs',
        data(){
            return{
                title:['序号','数量','金额'],
                items: [
                    {num: 'A', amount: '1'},
                    {num: 'B', amount: '2'},
                    {num: 'C', amount: '3'},
                    {num: 'D', amount: '4'},
                    {num: 'E', amount: '5'},
                    {num: 'F', amount: '6'},
                ]
            }
        },
        methods:{
            change:function () {
                let val={title:['序号1','数量1','金额1'],items:[
                    {num: 'A1', amount: '11'},
                    {num: 'B1', amount: '21'},
                    {num: 'C1', amount: '31'},
                    {num: 'D1', amount: '41'},
                    {num: 'E1', amount: '51'},
                    {num: 'F1', amount: '61'}
                ]}
                this.title=val.title
                this.items=val.items
            }
        }
    }
</script>

<style scoped>
    #phs {

    }
    .saleType{
        display: -webkit-flex; /* Safari */
        display: flex;
        justify-content: space-around;
        background-color: #ffffff;
        height: 30px;
        line-height: 30px;
    }
    .saleType span{
        display: inline-block;
        width: 33.3%;
        box-shadow: 0 0 1px #000;
    }
    .select{
        width: 100%;
        height:auto;
        background-color: #e9e9e9;
    }
    .dp{
        display: inline-block;
        width: 33%;
    }
    table{
        border: 1px solid #d6d6d6;
        width: 100%;
        border-collapse: collapse;
    }
    td{
        border: 1px solid #D6D6D6;
        width: 33.3%;
    }
</style>
