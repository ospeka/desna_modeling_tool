const accordionOneData = [
  {
    title: 'Weather Observations',
    to: '/weather-obs',
    isArrow: true,
    content: [
      'CGO',
      'rp5.ru',
      'Hydrometeorological Center',
      'pogodaiklimat.ru'
    ],
    id: 0
  },
  {
    title: 'Re-analysis ERA5',
    isArrow: false,
    content: [],
    id: 1
  },
  {
    title: 'Weather forecast',
    isArrow: true,
    content: [
      'OpenWeatherMap API',
      'Weatherbit API',
      'WRF'
    ],
    id: 2
  },
  {
    title: 'Climate projections',
    isArrow: false,
    content: [],
    id: 3
  },
  {
    title: 'Gauges',
    isArrow: false,
    content: [],
    id: 4
  },
  {
    title: 'Agriculture',
    isArrow: false,
    content: [],
    id: 5
  }
]
export default accordionOneData
