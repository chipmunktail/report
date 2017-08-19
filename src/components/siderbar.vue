<template>
    <div id="siderbar">
        <div class="flexbox">
            <yd-button size="small" type="danger" @click.native="show3 = true" class="popup">
                <yd-icon name="type" size="20px"></yd-icon>
            </yd-button>
        </div>
        <yd-popup v-model="show3" position="left" width="60%" class="silderbar-c">
            <yd-button type="danger" class="siderbtn">&nbsp</yd-button>
            <yd-button type="hollow" @click.native="show3 = false" v-for="n in siderbar" :key="n.name" class="siderbtn">
                {{n.name}}
            </yd-button>
        </yd-popup>
    </div>
</template>

<script>
    export default {
        name: 'siderbar',
        data(){
            return {
                show3: false,
                siderbar: [
                    {name: '零售主体', link: 'a'},
                    {name: '销售主题', link: 'a'},
                    {name: '生产主题', link: 'a'},
                    {name: '门店主题', link: 'a'},
                    {name: '会员主题', link: 'a'},
                    {name: '企划主题', link: 'a'}
                ]
            }
        }
    }
</script>

<style scoped>
    #siderbar {

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
