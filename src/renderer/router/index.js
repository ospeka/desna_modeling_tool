import Vue from 'vue'
import Router from 'vue-router'

import DbView from '@/components/views/dbView'
import SwatView from '@/components/views/swatView'
import VizView from '@/components/views/vizView'
import WeatherObs from '@/components/views/weatherObs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/db-view',
      component: DbView
    },
    {
      path: '/swat-view',
      component: SwatView
    },
    {
      path: '/viz-view',
      component: VizView
    },
    {
      path: '/weather-obs',
      component: WeatherObs
    }
  ]
})
