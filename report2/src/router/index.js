import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import topbar from '@/components/topbar'
import sliderbar from '@/components/sliderbar'
import ls from '@/components/lszt/ls'
import xs from '@/components/xszt/xs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/bar/',
      component: Hello,
      children:[
        {
          path:'ls',
          component:ls
        },
        {
          path:'xs',
          component:xs
        }
      ]
    }
  ]
})
// Hello就是容器
// App不要动
// 如果是一直存在页面上的组件则不加路由 引用
// 多次使用的a组件=> /a/b  /a/c  /a/d
