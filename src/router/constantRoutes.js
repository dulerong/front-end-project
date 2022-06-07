import Vue from 'vue'
import { mdiTableLarge } from '@mdi/js'

export const routePath = {
  table: {
    title: 'Table',
    path: '/',
    name: 'table',
    icon: mdiTableLarge
  },
  chart: {
    title: 'Chart',
    path: '/chart',
    name: 'chart',
    icon: 'mdi-file-chart'
  }
}
Vue.prototype.$_routePath = routePath

export const navigation = [
  {
    title: 'GENERAL',
    children: [routePath.table, routePath.chart]
  }
]
Vue.prototype.$_navigation = navigation

export const footer_navigation = [routePath.table, routePath.chart]
Vue.prototype.$_footer_navigation = footer_navigation
