import Vue from 'vue'
import Router from 'vue-router'
import bases from '@/bases.vue'
// import container from '@/components/container.vue'
import yjkb from '@/components/lszt/yjkb.vue'
import phs from '@/components/lszt/phs.vue'
import qgs from '@/components/lszt/qgs.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'bases',
            component: bases
        },
        {
            path: '/yjkb',
            name: 'yjkb',
            component: yjkb
        },
        {
            path: '/phs',
            name: 'phs',
            component: phs
        },
        {
            path: '/qgs',
            name: 'qgs',
            component: qgs
        }
    ]
})
