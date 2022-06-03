import axios from 'axios'
import Vue from 'vue'

const baseURL = '/api'

const myAPI = axios.create({
  baseURL: baseURL,
  timeout: 30000, // unit = millisecond
  headers: {
    'Content-Type': 'application/json'
  }
})

export default myAPI

Vue.prototype.$_api = myAPI
