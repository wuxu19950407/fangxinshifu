// 在此添加新网页

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Outter from '@/components/Outter'
import Login from '@/view/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/Outter',
      name: 'Outter',
      component: Outter,
      children:[
        {
          path: 'login',
          alias:'/',
          name: 'Login',
          component: Login,
        }
      ]
    }
  ]
})
