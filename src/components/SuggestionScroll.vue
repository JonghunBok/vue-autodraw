<template>
  <v-container>
    <v-row class="thumbs">
      <v-col v-for="(icon, index) in icons" :key="index">
        <img :src="icon">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import stencils from '@/stencils.json'

export default {
  name: 'SuggestionScroll',
  props: {
    msg: String
  },
  data: () => ({
    icons: []
  }),
  computed: {
    ...mapGetters(['suggestions']),
    icons () {
      return this.suggestions ? this.suggestions.reduce((acc, val) => {
        stencils[val].map(obj => {
          acc.push(obj.src)
        })

        return acc
      }, []) : []
    }
  },
  watch: {
    suggestions (newSuggestions) {
      this.icons = newSuggestions.reduce((acc, name) => {
        (stencils[name] || []).map(obj => {
          acc.push(obj.src)
        })

        return acc
      }, [])
      /*
      this.icons = newSuggestions.reduce((acc, name) => {
        stencils[name].map(obj => {
          acc.push(obj.src)
        })

        return acc
      }, [])

      console.log('icons: ', this.icons)
      */
    }
  },
  mounted () {
    console.log(stencils)
    console.log(this.icons)

    console.log(this.suggestions)
  }
}
</script>

<style scoped>
.thumbs {
  height: 100%;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
}

.thumbs div {
  position: relative;
  height: 100%;
}

.thumbs::-webkit-scrollbar {
    height: 8px;
}
</style>
