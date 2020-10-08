<template>
  <div>
    <v-row class="thumbs">
      <img v-for="(icon, index) in icons" :key="index" :src="icon">
    </v-row>
  </div>
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
  width: 100%;
  margin: 0;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-flow: row nowrap;
}

.thumbs img {
  position: relative;
  height: 100%;
  max-height: 60px;
}

.thumbs::-webkit-scrollbar {
    height: 8px;
}
</style>
