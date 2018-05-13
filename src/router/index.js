import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'

//  user
import user from '@/pages/user.vue'
import userIndex from '@/pages/user/index.vue'
import collection from '@/pages/user/collection.vue'
import integral from '@/pages/user/integral.vue'
import introduce from '@/pages/user/introduce.vue'
//  survey
import survey from '@/pages/survey.vue'
import surveyIndex from '@/pages/survey/index.vue'
import surveyList from '@/pages/survey/list.vue'

//  dynamic
import dynamic from '@/pages/dynamic.vue'
import dynamicIndex from '@/pages/dynamic/index.vue'
import dynamicList from '@/pages/dynamic/list.vue'

//  history
import history from '@/pages/history.vue'
import historyIndex from '@/pages/history/index.vue'
import historyList from '@/pages/history/list.vue'

// latestLesson
import latestLesson from '@/pages/latestLesson.vue'

//recommended
import recommended from '@/pages/recommended.vue'

//materialIndex
import materialIndex from '@/pages/materialIndex.vue'

import myStudy from '@/pages/myStudy.vue'
import material from '@/pages/material.vue'
import trainPlan from '@/pages/trainPlan.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/user',
      component: user,
      children: [{
          path: '',
          name: 'user',
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
        }, {
          path: 'introduce',
          name: 'introduce',
          component: introduce
        }
      ]
    },
    {
      path: '/trainPlan',
      name: 'trainPlan',
      component: trainPlan
    },
    {
      path: '/myStudy',
      name: 'myStudy',
      component: myStudy
    },
    {
      path: '/survey',
      component: survey,
      children: [{
        path: '',
        name: 'survey',
        component: surveyIndex
      }, {
        path: 'list',
        name: 'surveyList',
        component: surveyList
      }]
    },
    {
      path: '/dynamic',
      component: dynamic,
      children: [{
        path: '',
        name: 'dynamic',
        component: dynamicIndex
      }, {
        path: 'list',
        name: 'dynamicList',
        component: dynamicList
      }]
    },
    {
      path: '/history',
      component: history,
      children: [{
        path: '',
        name: 'history',
        component: historyIndex
      }, {
        path: 'list',
        name: 'historyList',
        component: historyList
      }]
    },
    {
      path: '/latestLesson',
      name: 'latestLesson',
      component: latestLesson
    },
    {
      path: '/recommended',
      name: 'recommended',
      component: recommended
    },
    {
      path: '/materialIndex',
      name: 'materialIndex',
      component: materialIndex
    },
    {
      path: '/material',
      name: 'material',
      component: material
    }

  ]
})
