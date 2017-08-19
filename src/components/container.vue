<template>
    <div id="container">
        <topbar></topbar>
        <sliderbar>
        </sliderbar>
    </div>
</template>

<script>
    import Sliderbar from './sliderbar.vue'
    import Topbar from './topbar.vue'

    export default {
        components: {
            Topbar,
            Sliderbar
        },
        name: 'container'
    }
</script>

<style scoped>
    #container {

    }
</style>
