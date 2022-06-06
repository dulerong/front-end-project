<template lang="pug">
div
	h1(class='ml-1') Table Data Page
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
	v-data-table(
		:headers="headers"
		:items="displayData"
		:items-per-page="50"
		class="elevation-1"
	)
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data: () => ({
    headers: [
      {
        text: 'Date',
        align: 'start',
        sortable: false,
        value: 'date'
      },
      { text: 'New Cases', value: 'change_cases' },
      { text: 'New Fatalities', value: 'change_fatalities' },
      { text: 'New Tests', value: 'change_tests' },
      { text: 'Total Cases', value: 'total_cases' },
      { text: 'Total Fatalities', value: 'total_fatalities' },
      { text: 'Total Tests', value: 'total_tests' }
    ],
    selectedProvince: ''
  }),
  computed: {
    ...mapState('covidData', ['covidData', 'province']),
    displayData() {
      return this.covidData
        .map(item => ({ ...item }))
        .map(item => this.addSeparator(item))
        .sort((a, b) => this.sortDate(a, b))
    }
  },
  created() {
    this.selectedProvince = this.province
    this.fetchData()
  },
  methods: {
    ...mapActions('covidData', ['fetchData']),
    ...mapMutations('covidData', ['SET_PROVINCE']),
    changeProvince() {
      this.SET_PROVINCE(this.selectedProvince)
      this.fetchData()
    },
    addSeparator(item) {
      Object.keys(item).forEach(key => {
        if (key !== 'date') item[key] = item[key].toLocaleString()
      })
      return item
    },
    sortDate(a, b) {
      return this.$_dayjs(b.date) - this.$_dayjs(a.date)
    }
  }
}
</script>
