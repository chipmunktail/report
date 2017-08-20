<template>
    <div id="sliderbar">
        <span v-for="n in items" class="yjkbs">
            <router-link to="yjkb" v-bind:to=n.to> {{n.name}} </router-link>
        </span>
        <router-view></router-view>
    </div>
</template>

<script>
    import Yjkb from './lszt/yjkb.vue'
    import Bus from '../assets/bus.js'
    export default {
        components: {Yjkb},
        name: 'sliderbar',
        data(){
            return{
                items: [{name: '业绩看板', to: 'yjkb'}, {name: '区域排行', to: 'phs'}, {name: '全国区域', to: 'qgs'}]
            }
        },
        created(){
            Bus.$on('change',function (val) {
                console.log(val+'666')
            })
        }
    }
</script>

<style scoped>
    #sliderbar {

    }
    .yjkbs{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: ;
        box-shadow: 0 0 1px #000;
        background-color: #ffffff;
    }
</style>
