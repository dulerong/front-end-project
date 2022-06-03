<template lang="pug">
ApexChart(
  v-if='showChart'
  ref="chart"
  type="line"
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
    chartDate() {
      return this.covidData.map(item => item.date)
    },
    chartTitle() {
      return {
        text: this.province.text,
        align: 'left'
      }
    },
    chartXAxis() {
      return {
        categories: this.chartDate,
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
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: 'smooth'
        },
        title: this.chartTitle,
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: this.chartXAxis,
        yaxis: this.chartYAxis,
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    }
  }
}
</script>
