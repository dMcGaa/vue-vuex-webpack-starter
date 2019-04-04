import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import CarInfo from '@/components/CarInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CarInfo',
      component: CarInfo
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }

  ]
})
