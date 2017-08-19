<template>
    <div id="container">

        <topbar></topbar>
        <sliderbar>
            <!--<span slot="yjkb">56</span>-->
        </sliderbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Searchbar from './searchbar.vue'
    import Siderbar from './siderbar.vue'
    import Sliderbar from './sliderbar.vue'
    import Topbar from './topbar.vue'

    export default {
        components: {
            Topbar,
            Sliderbar,
            Siderbar,
            Searchbar},
        name: 'container'
    }
</script>

<style scoped>
    #container {

    }
</style>
