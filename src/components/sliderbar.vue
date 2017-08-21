<template>
    <div id="sliderbar">
        <div class="sliderbars">
            <span v-for="n in items" class="yjkbs">
                <router-link v-bind:to=n.to> {{n.name}} </router-link>
            </span>
        </div>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import Yjkb from './lszt/yjkb.vue'

    export default {
        components: {Yjkb},
        name: 'sliderbar',
        data(){
            return{
                items: [{name: '业绩看板', to: 'yjkb'}, {name: '区域排行', to: 'phs'}, {name: '全国区域', to: 'qgs'}]
            }
        }
    }
</script>

<style scoped>
    #sliderbar {
        margin-top: 40px;
    }
    .sliderbars{
        position: fixed;
        top: 40px;
        width: 100%;
        text-align: left;
        z-index: 5;
        background-color: #ffffff;
    }
    .yjkbs{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        box-shadow: 0 0 1px #000;
        background-color: #ffffff;
    }
    .view{
        margin-top: 70px;
    }
</style>
