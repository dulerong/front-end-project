import Vue from 'vue'

export const provinces = [
  { text: 'Nation Wide', value: '' },
  { text: 'Alberta', value: 'ab' },
  { text: 'British Columbia', value: 'bc' },
  { text: 'Saskatchewan', value: 'sk' },
  { text: 'Manitoba', value: 'mb' },
  { text: 'Ontario', value: 'on' },
  { text: 'Quebec', value: 'qc' },
  { text: 'Yukon', value: 'yt' },
  { text: 'Northwest Territories', value: 'nt' },
  { text: 'Nunavut', value: 'nu' },
  { text: 'Newfoundland', value: 'nl' },
  { text: 'New Brunswick', value: 'nb' },
  { text: 'Nova Scotia', value: 'ns' },
  { text: 'Prince Edward Island', value: 'pe' }
]

Vue.prototype.$_provinces = provinces
