<template>
    <div id="yjkb">
        <div class="head">
            <span>零售额：{{retailSales}}万</span>
            <span>全部：{{total}}（家）</span>
            <span>直营：{{totalZy}}（家）{{numZy}}万</span>
            <span>加盟：{{totalJm}}（家）{{numJm}}万</span>
        </div>
        <div class="middle">
            <span>{{time}}</span>
            <span>达成率：{{rate}}</span>
        </div>
        <div class="select">
            <button>日</button>
            <button>周</button>
            <button>月</button>
            <button>search</button>
        </div>
        <div class="chart">
            <div id="myChart"></div>
            <div id="myChart2"></div>
        </div>
    </div>
</template>

<script>
//    let echarts = require('echarts')
    import echarts from 'echarts'
    import axios from 'axios'
    export default {
        name: 'yjkb',
        data(){
            return{
                retailSales: '.8',
                total: 32,
                totalZy:'23',
                totalJm:'9',
                numZy:'.73',
                numJm:'.07',
                time:'2017-8-19',
                rate:'1.53%',
                authour: 'd',
                zzchartdata: {
                    title: {text: '每日销售总额(万/百双)'},
                    tooltip: {},
                    xAxis: {
                        data: ['0814', '0815', '0816', '0817', '0818', '0819']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                },
                zxchartdata: {
                    title: {
                        text: '日销售金额(万)'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['邮件营销','联盟广告']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        }
                    ]
                }
            }
        },
        mounted: function () {
            let o=this;
            let myChart = echarts.init(document.getElementById('myChart'))
            let myChart2 = echarts.init(document.getElementById('myChart2'))
            myChart.setOption(o.zzchartdata)
            myChart2.setOption(o.zxchartdata)
            axios.get('http://localhost:3000/users')
                .then(function (res) {
//                    在这里获取数据，将数据赋值给data里的chartdata
                })
                .catch(function (e) {
                })
        }
    }
</script>

<style scoped>
    #yjkb {

    }
    .head{
        width: 100%;
        height: auto;
        background-color: #c32b23;
        color: #ffffff;
    }
    .middle{
        width: 100%;
        height: auto;
        background: #f2f2f2;
    }
    .select{
        width: 100%;
        height:auto;
        background-color: #e9e9e9;
    }
    .chart {
        background-color: rgb(240, 240, 240);
        width: 100%;
        height: 100%;
    }
    #myChart {
        width: 100%;
        height: 300px;
    }
    #myChart2 {
        width: 100%;
        height: 350px;
    }
</style>
