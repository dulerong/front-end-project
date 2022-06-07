// route paths
import { routePath } from './constantRoutes'

// layouts
import DefaultLayout from '~layouts/DefaultLayout'
import MapLayout from '~layouts/MapLayout'

// pages
import TableDataPage from '~pages/TableDataPage'
import ChartPage from '~pages/ChartPage'
import MapPage from '~pages/MapPage'

export default [
  {
    path: routePath.table.path,
    name: routePath.table.name,
    component: TableDataPage,
    meta: { layout: DefaultLayout }
  },
  {
    path: routePath.chart.path,
    name: routePath.chart.name,
    component: ChartPage,
    meta: { layout: DefaultLayout }
  },
  {
    path: routePath.map.path,
    name: routePath.map.name,
    component: MapPage,
    meta: { layout: MapLayout }
  }
]
