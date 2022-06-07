<template lang="pug">
ApexChart(
  v-if='showChart'
  ref="chart"
  type="bar"
  :height='screenHeight'
  :options="chartOptions"
  :series="chartData"
)
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    showChart: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState('covidData', ['covidData', 'province']),
    screenHeight() {
      return screen.height - 275
    },
    chartData() {
      return [
        {
          name: 'New Cases',
          data: this.covidData.map(item => item.change_cases)
        }
      ]
    },
    chartTitle() {
      return {
        text: this.province.text,
        align: 'center'
      }
    },
    chartXAxis() {
      return {
        categories: this.covidData.map(item => item.date),
        title: {
          text: 'Date'
        }
      }
    },
    chartYAxis() {
      return {
        title: {
          text: 'Cases'
        }
      }
    },
    chartOptions() {
      return {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        title: this.chartTitle,
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          }
        },
        xaxis: this.chartXAxis,
        yaxis: this.chartYAxis,
        tooltip: {
          y: {
            formatter: function (val) {
              return val.toLocaleString()
            }
          }
        }
      }
    }
  }
}
</script>
