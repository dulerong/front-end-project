<template lang="pug">
div
  div(class='d-flex')
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
    DatePicker(
      label='Start Date'
      :date='dateStart'
      ref='dateStartPicker'
      @date-change='dateStart = $event'
    )
    DatePicker(
      label='Final Date'
      :date='dateFinal'
      ref='dateFinalPicker'
      @date-change='dateFinal = $event'
    )
  ApexChart(
    :showChart='showChart'
  )
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  components: {
    ApexChart: require('~components/ApexChart').default,
    DatePicker: require('~components/DatePicker').default
  },
  data: vm => ({
    showChart: false,
    selectedProvince: '',
    dateStart: vm.$_dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
    dateFinal: vm.$_dayjs().format('YYYY-MM-DD')
  }),
  computed: {
    ...mapState('covidData', ['province'])
  },
  watch: {
    dateStart(newDate) {
      this.showChart = false
      this.SET_DATE_START(newDate)
      this.fetchData().then(() => (this.showChart = true))
    },
    dateFinal(newDate) {
      this.showChart = false
      this.SET_DATE_FINAL(newDate)
      this.fetchData().then(() => (this.showChart = true))
    }
  },
  mounted() {
    this.$refs.dateStartPicker.initializeDate(this.dateStart)
    this.$refs.dateFinalPicker.initializeDate(this.dateFinal)
    this.selectedProvince = this.province
    this.fetchData().then(() => (this.showChart = true))
  },
  methods: {
    ...mapActions('covidData', ['fetchData']),
    ...mapMutations('covidData', [
      'SET_PROVINCE',
      'SET_DATE_START',
      'SET_DATE_FINAL'
    ]),
    changeProvince() {
      this.showChart = false
      this.SET_PROVINCE(this.selectedProvince)
      this.fetchData().then(() => (this.showChart = true))
    }
  }
}
</script>
