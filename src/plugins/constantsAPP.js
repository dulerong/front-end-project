import Vue from 'vue'

export const provinces = [
  { text: 'Nation Wide', value: '', lat: 59.88813, lng: 258.26798 },
  { text: 'Alberta', value: 'ab', lat: 54.65151, lng: 244.78551 },
  { text: 'British Columbia', value: 'bc', lat: 54.65151, lng: 234.03136 },
  { text: 'Saskatchewan', value: 'sk', lat: 54.65151, lng: 253.83873 },
  { text: 'Manitoba', value: 'mb', lat: 54.65151, lng: 262.73451 },
  { text: 'Ontario', value: 'on', lat: 51.43981, lng: 272.84621 },
  { text: 'Quebec', value: 'qc', lat: 54.56317, lng: 286.67865 },
  { text: 'Yukon', value: 'yt', lat: 65.35501, lng: 223.23843 },
  { text: 'Northwest Territories', value: 'nt', lat: 64.17262, lng: 240.49194 },
  { text: 'Nunavut', value: 'nu', lat: 65.38083, lng: 264.16625 },
  { text: 'Newfoundland', value: 'nl', lat: 49.17048, lng: 303.30593 },
  { text: 'New Brunswick', value: 'nb', lat: 46.27329, lng: 294.08154 },
  { text: 'Nova Scotia', value: 'ns', lat: 45.51261, lng: 297.53121 },
  { text: 'Prince Edward Island', value: 'pe', lat: 46.66621, lng: 297.05212 }
]

Vue.prototype.$_provinces = provinces
