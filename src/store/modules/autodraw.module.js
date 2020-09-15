import Vue from 'vue'
import {
  AutoDrawService 
} from '@/common/api.service'
import {
  FETCH_SUGGESTIONS
} from './actions.type'
import {
  SET_SUGGESTIONS
} from './mutations.type'


const initialState = {
  suggestions: [],
  dbug: []
}

export const actions = {
  async [FETCH_SUGGESTIONS] (context, slug, shapes) {
    const { data } = await AutoDrawService.post(shapes)
    context.commit(SET_SUGGESTIONS, data.suggestions)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
