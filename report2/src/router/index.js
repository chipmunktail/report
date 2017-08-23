import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import topbar from '@/components/topbar'
import sliderbar from '@/components/sliderbar'
import ls from '@/components/lszt/ls'
import phs from '@/components/lszt/phs'
import qgs from '@/components/lszt/qgs'
import fhzb from '@/components/xszt/fhzb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect:'/bar/ls/8a8a81ab5b1da5cf015b226cddf603cd'
    },
    {
      path: '/bar/',
      component: Hello,
      children:[
        {
          path:'ls/:id',
          component:ls
        },
        {
          path:'phs/:id',
          component:phs
        },
        {
          path:'qgs/:id',
          component:qgs
        },
        {
          path:'fhzb/:id',
          component:fhzb
        }
      ]
    }
  ]
})
// Hello就是容器
// App不要动
// 如果是一直存在页面上的组件则不加路由 引用
// 多次使用的a组件=> /a/b  /a/c  /a/d
