import Vue from 'vue'
import Router from 'vue-router'
import page from '@/components/page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/red' },
    {
      path: '/:color',
      name: 'page',
      component: page
    }
  ]
})
