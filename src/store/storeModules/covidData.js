import dayjs from 'dayjs'
export const covidData = {
  namespaced: true,

  state: {
    covidData: [],
    province: { text: 'Nation Wide', value: '' },
    dateStart: dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
    dateFinal: dayjs().format('YYYY-MM-DD')
  },
  getters: {
    getApiURL: state => {
      return state.province.value.length === 0
        ? `/reports`
        : `/reports/province/${state.province.value}`
    },
    queryDateParam: state => ({
      params: { after: state.dateStart, before: state.dateFinal }
    })
  },
  actions: {
    async fetchData({ commit, getters }) {
      return new Promise((resolve, reject) => {
        this._vm.$_api
          .get(getters.getApiURL, getters.queryDateParam)
          .then(res => {
            commit('SET_DATA', res.data.data)
            resolve()
          })
          .catch(err => {
            console.log(err)
            reject()
          })
      })
    }
  },
  mutations: {
    SET_DATA: (state, data) => (state.covidData = data),
    SET_PROVINCE: (state, province) => (state.province = province),
    SET_DATE_START: (state, date) => (state.dateStart = date),
    SET_DATE_FINAL: (state, date) => (state.dateFinal = date)
  }
}
