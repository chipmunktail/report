<template>
    <div class="topbar">
        <siderbar></siderbar>
        <h1>{{ msg }}</h1>
        <searchbar></searchbar>
    </div>
</template>

<script>
    import Siderbar from './siderbar.vue'
    import Searchbar from './searchbar.vue'

    export default {
        components: {
            Searchbar,
            Siderbar
        },
        name: 'topbar',
        data () {
            return {
                msg: 'top name'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
