// route paths
import { routePath } from './constantRoutes'

// layouts
import DefaultLayout from '~layouts/DefaultLayout'

// pages
import TableDataPage from '~pages/TableDataPage'
import AboutPage from '~pages/AboutPage'

export default [
  {
    path: routePath.home.path,
    name: routePath.home.name,
    component: TableDataPage,
    meta: { layout: DefaultLayout }
  },
  {
    path: routePath.about.path,
    name: routePath.about.name,
    component: AboutPage,
    meta: { layout: DefaultLayout }
  }
]
