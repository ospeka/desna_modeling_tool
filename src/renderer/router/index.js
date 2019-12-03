import Vue from 'vue'
import Router from 'vue-router'

import DbView from '@/components/views/dbView'
import SwatView from '@/components/views/swatView'
import VizView from '@/components/views/vizView'

import AgricultureView from '@/components/views/DBViews/AgricultureView'
import CGOView from '@/components/views/DBViews/CGOView'
import climateProjectionView from '@/components/views/DBViews/climateProjectionView'
import GaugesView from '@/components/views/DBViews/GaugesView'
import HydroCenterView from '@/components/views/DBViews/HydroCenterView'
import OWMAPIView from '@/components/views/DBViews/OWMAPIView'
import pogodaKlimatView from '@/components/views/DBViews/pogodaKlimatView'
import reERA5View from '@/components/views/DBViews/reERA5View'
import RP5View from '@/components/views/DBViews/RP5View'
import weatherbitAPIView from '@/components/views/DBViews/weatherbitAPIView'
import weatherFCView from '@/components/views/DBViews/weatherFCView'
import weatherObs from '@/components/views/DBViews/weatherObs'
import WRFView from '@/components/views/DBViews/WRFView'

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
      path: '/agriculture-view',
      component: AgricultureView
    },
    {
      path: '/cgo-view',
      component: CGOView
    },
    {
      path: '/climateProjection-view',
      component: climateProjectionView
    },
    {
      path: '/gauges-view',
      component: GaugesView
    },
    {
      path: '/hydroCenter-view',
      component: HydroCenterView
    },
    {
      path: '/OWMAPI-view',
      component: OWMAPIView
    },
    {
      path: '/pogodaKlimat-view',
      component: pogodaKlimatView
    },
    {
      path: '/reERA5-view',
      component: reERA5View
    },
    {
      path: '/rp5-view',
      component: RP5View
    },
    {
      path: '/weatherbitAPI-view',
      component: weatherbitAPIView
    },
    {
      path: '/weatherFC-view',
      component: weatherFCView
    },
    {
      path: '/weather-obs',
      component: weatherObs
    },
    {
      path: '/wrf-view',
      component: WRFView
    }
  ]
})
