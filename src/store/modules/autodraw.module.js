import {
  AutoDrawService
} from '@/common/api.service'
import {
  FETCH_SUGGESTIONS
} from '../actions.type'
import {
  SET_SUGGESTIONS
} from '../mutations.type'

const state = {
  suggestions: [],
  dbug: []
}

const getters = {
  suggestions (state) {
    return state.suggestions
  }
}

const mutations = {
  [SET_SUGGESTIONS] (state, suggestions) {
    state.suggestions = suggestions
  }
}

export const actions = {
  async [FETCH_SUGGESTIONS] (context, params) {
    console.log(params)
    const response = await AutoDrawService.post(params)
    console.log('inside autodraw module')
    console.log(response)
    context.commit(SET_SUGGESTIONS, response.data[1][0][1])
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
