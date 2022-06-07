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
  },
  map: {
    title: 'Map',
    path: '/map',
    name: 'map',
    icon: 'mdi-google-maps'
  }
}
Vue.prototype.$_routePath = routePath

export const navigation = [routePath.table, routePath.chart, routePath.map]
Vue.prototype.$_navigation = navigation
