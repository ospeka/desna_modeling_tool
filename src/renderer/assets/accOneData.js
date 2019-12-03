// input data(payload) for first accordio that contained in db view
const accordionOneData = [
  {
    title: 'Weather Observations',
    to: '/weather-obs-view',
    isArrow: true,
    content: [
      {
        title: 'CGO',
        to: '/cgo-view'
      },
      {
        title: 'rp5.ru',
        to: '/rp5-view'
      },
      {
        title: 'Hydrometeorological Center',
        to: '/hydro-center-view'
      },
      {
        title: 'pogodaiklimat.ru',
        to: '/pogoda-klimat-view'
      }
    ],
    id: 0
  },
  {
    title: 'Re-analysis ERA5',
    to: '/re-era5-view',
    isArrow: false,
    content: [],
    id: 1
  },
  {
    title: 'Weather forecast',
    to: '/weather-fc-view',
    isArrow: true,
    content: [
      {
        title: 'OpenWeatherMap API',
        to: '/owm-api-view'
      },
      {
        title: 'Weatherbit API',
        to: '/weatherbit-api-view'
      },
      {
        title: 'WRF',
        to: '/wrf-view'
      }
    ],
    id: 2
  },
  {
    title: 'Climate projections',
    to: '/climate-projection-view',
    isArrow: false,
    content: [],
    id: 3
  },
  {
    title: 'Gauges',
    to: '/gauges-view',
    isArrow: false,
    content: [],
    id: 4
  },
  {
    title: 'Agriculture',
    to: '/agriculture-view',
    isArrow: false,
    content: [],
    id: 5
  }
]
export default accordionOneData
