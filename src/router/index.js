import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'
import user from '@/pages/user.vue'
import myStudy from '@/pages/myStudy.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/myStudy',
      name: 'myStudy',
      component: myStudy
    }
  ]
})
