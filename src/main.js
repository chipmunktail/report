// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import bases from './bases'
import router from './router'
import flexable from '../static/flexable'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import Vuex from 'vuex'
// import echarts from 'echarts'
// import axios from 'axios'

Vue.use(YDUI)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(bases),
    router,
    template: '<App/>',
    components: {bases}
})
