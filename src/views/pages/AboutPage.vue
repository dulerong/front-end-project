<template lang="pug">
div
	v-select(
		class='mx-1'
		style="max-width: 200px"
		v-model='selectedProvince'
		:items="$_provinces"
		label="Province"
		item-text="text"
		item-value="value"
    return-object
		@change='changeProvince'
	)
	ApexChart(
		:showChart='showChart'
	)
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  components: {
    ApexChart: require('~components/ApexChart').default
  },
  data: () => ({
    showChart: false,
    selectedProvince: ''
  }),
  computed: {
    ...mapState('covidData', ['province'])
  },
  created() {
    this.selectedProvince = this.province
    this.fetchData().then(() => (this.showChart = true))
  },
  methods: {
    ...mapActions('covidData', ['fetchData']),
    ...mapMutations('covidData', ['SET_PROVINCE']),
    changeProvince() {
      this.showChart = false
      this.SET_PROVINCE(this.selectedProvince)
      this.fetchData().then(() => (this.showChart = true))
    }
  }
}
</script>
