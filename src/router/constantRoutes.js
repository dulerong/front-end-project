import Vue from 'vue'

export const routePath = {
  home: {
    title: 'Home',
    path: '/',
    name: 'home',
    icon: 'mdi-home'
  },
  about: {
    title: 'About',
    path: '/about',
    name: 'about',
    icon: 'mdi-file-chart'
  }
}
Vue.prototype.$_routePath = routePath

export const navigation = [
  {
    title: 'GENERAL',
    children: [routePath.home, routePath.about]
  }
]
Vue.prototype.$_navigation = navigation

export const footer_navigation = [routePath.home, routePath.about]
Vue.prototype.$_footer_navigation = footer_navigation
