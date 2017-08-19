<template>
    <div id="bases">
        <container></container>
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
    import Container from './components/container.vue'

    export default {
        components: {Container},
        name: 'bases'
    }
</script>

<style scoped>
    #bases {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
