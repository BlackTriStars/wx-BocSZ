import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'

//  user
import user from '@/pages/user.vue'
  import userIndex from '@/pages/user/index.vue'
  import collection from '@/pages/user/collection.vue'
  import integral from '@/pages/user/integral.vue'
  import introduce from '@/pages/user/introduce.vue'
  import study from '@/pages/user/study.vue'
  import survey from '@/pages/user/survey.vue'

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
      component: user,
      children:[
        {
          path:'',
          name:'user',
          component: userIndex
        },
        {
          path: 'collection',
          name: 'collection',
          component: collection
        }, {
          path: 'integral',
          name: 'integral',
          component: integral
        },{
          path: 'introduce',
          name: 'introduce',
          component: introduce
        }, {
          path: 'study',
          name: 'study',
          component: study
        }, {
          path: 'survey',
          name: 'survey',
          component: survey
        },


      ]
    }
  ]
})
