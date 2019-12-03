import Vue from 'vue'
import Router from 'vue-router'

import DbView from '@/components/views/DbView'
import SwatView from '@/components/views/SwatView'
import VizView from '@/components/views/VizView'

import AgricultureView from '@/components/views/DBViews/AgricultureView'
import CGOView from '@/components/views/DBViews/CGOView'
import ClimateProjectionView from '@/components/views/DBViews/ClimateProjectionView'
import GaugesView from '@/components/views/DBViews/GaugesView'
import HydroCenterView from '@/components/views/DBViews/HydroCenterView'
import OWMAPIView from '@/components/views/DBViews/OWMAPIView'
import PogodaKlimatView from '@/components/views/DBViews/PogodaKlimatView'
import ReERA5View from '@/components/views/DBViews/ReERA5View'
import RP5View from '@/components/views/DBViews/RP5View'
import WeatherbitAPIView from '@/components/views/DBViews/WeatherbitAPIView'
import WeatherFCView from '@/components/views/DBViews/WeatherFCView'
import WeatherObs from '@/components/views/DBViews/WeatherObs'
import WRFView from '@/components/views/DBViews/WRFView'

// import Agriculture2View from '@/components/views/VizViews/Agriculture2View'

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
      component: ClimateProjectionView
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
      component: PogodaKlimatView
    },
    {
      path: '/reERA5-view',
      component: ReERA5View
    },
    {
      path: '/rp5-view',
      component: RP5View
    },
    {
      path: '/weatherbitAPI-view',
      component: WeatherbitAPIView
    },
    {
      path: '/weatherFC-view',
      component: WeatherFCView
    },
    {
      path: '/weather-obs',
      component: WeatherObs
    },
    {
      path: '/wrf-view',
      component: WRFView
    }
  ]
})
