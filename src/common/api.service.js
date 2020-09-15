import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { AUTODRAW_URL } from '@/common/config'

const AutoDrawService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = AUTODRAW_URL
  },

  setHeader () {
  },

  post(resource, params) {
    return Vue.axios(`${resource}/${slug}`)
      .catch(error => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }

}

export default ApiService


export const AutoDrawService = {
  query(
  
  
}
