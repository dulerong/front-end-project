// route paths
import { routePath } from './constantRoutes'

// layouts
import DefaultLayout from '~layouts/DefaultLayout'

// pages
import TableDataPage from '~pages/TableDataPage'
import ChartPage from '~pages/ChartPage'

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
  }
]
