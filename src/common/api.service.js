import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { AUTODRAW_URL } from '@/common/config'

export const AutoDrawService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = AUTODRAW_URL
  },

  setHeader () {
  },

  post (params) {
    console.log('inside api service')
    console.log(params)
    return Vue.axios.post(AUTODRAW_URL, params)
      .catch(error => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}

// export default ApiService

// export const AutoDrawService = {
// }
