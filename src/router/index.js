import Vue from 'vue'
import Router from 'vue-router'
import Red from '@/components/pages/red'
import Green from '@/components/pages/green'
import Yellow from '@/components/pages/yellow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/red' },
    {
      path: '/red',
      name: 'Red',
      component: Red
    },
    {
      path: '/green',
      name: 'green',
      component: Green
    },
    {
      path: '/yellow',
      name: 'yellow',
      component: Yellow
    },

  ]
})
