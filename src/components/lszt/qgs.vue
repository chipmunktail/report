<template>
    <div id="qgs">
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
        <div>总数：0 金额：0</div>
    </div>
</template>

<script>
    export default {
        name: 'qgs',
        data(){
            return{
                title:['序号','代理商','昨日排名'],
                items: [
                    {num: 'A', amount: '1'},
                    {num: 'B', amount: '2'},
                    {num: 'C', amount: '3'},
                    {num: 'D', amount: '4'},
                    {num: 'E', amount: '5'},
                    {num: 'F', amount: '6'},
                ]
            }
        }
    }
</script>

<style scoped>
    #qgs {

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
