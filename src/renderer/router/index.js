import Vue from 'vue'
import Router from 'vue-router'

import DbView from '@/components/views/DbView'
import SwatView from '@/components/views/SwatView'
import VizView from '@/components/views/VizView'
// db Views
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
import WeatherObsView from '@/components/views/DBViews/WeatherObsView'
import WRFView from '@/components/views/DBViews/WRFView'
// Vizualisation Views
import Agriculture2View from '@/components/views/VizViews/Agriculture2View'
import CGOandRP5View from '@/components/views/VizViews/CGOandRP5View'
import ClimateProjection2View from '@/components/views/VizViews/ClimateProjection2View'
import Gauges2View from '@/components/views/VizViews/Gauges2View'
import HydrometPogodaKlimatView from '@/components/views/VizViews/HydrometPogodaKlimatView'
import ReERA5View2 from '@/components/views/VizViews/ReERA5View2'
import StreamView from '@/components/views/VizViews/StreamView'
import SubbasinsView from '@/components/views/VizViews/SubbasinsView'
import SWAToutputsView from '@/components/views/VizViews/SWAToutputsView'
import WeatherFC2View from '@/components/views/VizViews/WeatherFC2View'
import WeatherObs2View from '@/components/views/VizViews/WeatherObs2View'

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
      path: '/climate-projection-view',
      component: ClimateProjectionView
    },
    {
      path: '/gauges-view',
      component: GaugesView
    },
    {
      path: '/hydro-center-view',
      component: HydroCenterView
    },
    {
      path: '/owm-api-view',
      component: OWMAPIView
    },
    {
      path: '/pogoda-klimat-view',
      component: PogodaKlimatView
    },
    {
      path: '/re-era5-view',
      component: ReERA5View
    },
    {
      path: '/rp5-view',
      component: RP5View
    },
    {
      path: '/weatherbit-api-view',
      component: WeatherbitAPIView
    },
    {
      path: '/weather-fc-view',
      component: WeatherFCView
    },
    {
      path: '/weather-obs-view',
      component: WeatherObsView
    },
    {
      path: '/wrf-view',
      component: WRFView
    },
    // start of vizualisation views
    {
      path: '/agriculture2-view',
      component: Agriculture2View
    },
    {
      path: '/cgo-and-rp5-view',
      component: CGOandRP5View
    },
    {
      path: '/climate-projection2-view',
      component: ClimateProjection2View
    },
    {
      path: '/gauges2-view',
      component: Gauges2View
    },
    {
      path: '/hydromet-pogodaklimat-view',
      component: HydrometPogodaKlimatView
    },
    {
      path: '/re-era5-view2',
      // exception in naming to except reERA52View misscomunication
      component: ReERA5View2
    },
    {
      path: '/stream-view',
      component: StreamView
    },
    {
      path: '/subbasins-view',
      component: SubbasinsView
    },
    {
      path: '/swat-outputs-view',
      component: SWAToutputsView
    },
    {
      path: '/weather-fc2-view',
      component: WeatherFC2View
    },
    {
      path: '/weather-obs2-view',
      component: WeatherObs2View
    }
  ]
})
