// input data(payload) for first accordio that contained in db view
const accordionTwoData = [
  {
    title: 'Weather Observations',
    to: '/weather-obs2-view',
    isArrow: true,
    content: [
      {
        title: 'CGO & rp5.ru',
        to: '/cgo-and-rp5-view'
      },
      {
        title: 'Hydromet & pogodaklimat',
        to: '/hydromet-pogodaklimat-view'
      }
    ],
    id: 0
  },
  {
    title: 'Re-analysis ERA5',
    to: '/re-era5-view2',
    isArrow: false,
    content: [],
    id: 1
  },
  {
    title: 'Weather forecast',
    to: '/weather-fc2-view',
    isArrow: true,
    content: [],
    id: 2
  },
  {
    title: 'Climate projections',
    to: '/climate-projection2-view',
    isArrow: true,
    content: [],
    id: 3
  },
  {
    title: 'Gauges',
    to: '/gauges2-view',
    isArrow: false,
    content: [],
    id: 4
  },
  {
    title: 'Agriculture',
    to: '/agriculture2-view',
    isArrow: false,
    content: [],
    id: 5
  },
  {
    title: 'SWAT outputs',
    to: '/swat-outputs-view',
    isArrow: true,
    content: [
      {
        title: 'Stream (output.rch)',
        to: '/stream-view'
      },
      {
        title: 'Subbasins (output.sub)',
        to: '/subbasins-view'
      }
    ],
    id: 6
  }
]
export default accordionTwoData
