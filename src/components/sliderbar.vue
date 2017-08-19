<template>
    <div id="sliderbar">
        <span v-for="n in items">
            <router-link to="yjkb" v-bind:to=n.to> {{n.name}} </router-link>
        </span>
        <!--<slot name="yjkb"></slot>-->
    </div>
</template>

<script>
    export default {
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

    }
</style>
