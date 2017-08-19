import Vue from 'vue'
import Router from 'vue-router'
import container from '@/components/container.vue'
import yjkb from '@/components/lszt/yjkb.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'container',
            component: container
        },
        {
            path: '/yjkb',
            name: 'yjkb',
            component: yjkb
        }
    ]
})
