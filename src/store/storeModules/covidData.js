export const covidData = {
  namespaced: true,

  state: {
    covidData: [],
    province: { text: 'Nation Wide', value: '' }
  },
  getters: {
    getApiURL: state => {
      return state.province.value.length === 0
        ? '/reports?&after=2022-05-01&before'
        : `/reports/province/${state.province.value}?&after=2022-05-01&before`
    }
  },
  actions: {
    async fetchData({ commit, getters }) {
      return new Promise((resolve, reject) => {
        this._vm.$_api
          .get(getters.getApiURL)
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
    SET_PROVINCE: (state, province) => (state.province = province)
  }
}
