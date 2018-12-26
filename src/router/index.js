import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import Shouji from '@/components/shouji'
import Zhuce from '@/components/zhuce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/shouji',
      name: 'Shouji',
      component: Shouji
    },
    {
      path:'/zhuce',
      name: 'zhuce',
      component: Zhuce
    }
  ]
})
