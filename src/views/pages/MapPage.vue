<template lang="pug">
LMap(
  v-if='mapReady'
  :zoom='zoom'
  :center="center"
  :minZoom='minZoom'
  @update:zoom="zoomUpdate"
  @update:center="centerUpdate"
  :options='mapOptions'
)
  LTileLayer(
    :url="url"
    :attribution="attribution"
    :options="{ crossOrigin: true }"
  )
  LControl(position="bottomleft")
    v-card-actions
      v-btn(@click='$router.push($_routePath.table)')
        v-icon(left) mdi-arrow-left
        | Go Back
  LMarker(
    v-for="(prov, i) in $_provinces"
    :key="i"
    :lat-lng="[prov.lat, prov.lng]"
    :icon='icon'
  )
    LTooltip {{ prov.text }}
    LPopup
      h3 Additional Info
</template>

<script>
import L from 'leaflet'
import { latLng } from 'leaflet'
import {
  LMap,
  LTileLayer,
  LMarker,
  LControl,
  LTooltip,
  LPopup,
  LIcon
} from 'vue2-leaflet'

const delay = time => new Promise(resolve => setTimeout(resolve, time))

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
    LTooltip,
    LPopup,
    LIcon
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 4,
    minZoom: 3,
    latitude: 62.31481,
    longitude: 260.12028,
    mapOptions: {
      zoomDelta: 0.5,
      zoomSnap: 0.5,
      zoomControl: true,
      wheelPxPerZoomLevel: 120
    },
    mapReady: false,
    icon: L.icon({
      iconUrl: '/assets/marker-icon.png'
    })
  }),
  computed: {
    center() {
      return latLng(this.latitude, this.longitude)
    }
  },
  async created() {
    await delay(250).then(() => (this.mapReady = true))
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler() {
      setTimeout(() => window.dispatchEvent(new Event('resize')), 250)
    },
    zoomUpdate(zoom) {
      this.zoom = zoom
    },
    centerUpdate(center) {
      this.latitude = center.lat
      this.longitude = center.lng
    }
  }
}
</script>
