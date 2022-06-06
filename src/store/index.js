import Vue from 'vue'
import Vuex from 'vuex'

import { covidData } from './storeModules/covidData'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    covidData
  }
})
