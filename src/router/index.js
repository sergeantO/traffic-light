import Vue from 'vue'
import Router from 'vue-router'
import page from '@/components/page.vue'

Vue.use(Router)
let savedPath = localStorage.getItem('color')

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: `/${savedPath}` },
    {
      path: '/:color',
      name: 'page',
      component: page
    }
  ]
})
