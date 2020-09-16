import Vue from 'vue'
import Vuex from 'vuex'

import autodraw from './modules/autodraw.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    autodraw
  }
})
