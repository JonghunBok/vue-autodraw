<template>
  <div class="hello">
    <v-container>
      <v-row>
        <v-col v-for="(icon, index) in icons" :key="index">{{ icon }}</v-col>
      </v-row>
    </v-container>
    <p>suggestion scroll</p>
  </div>
</template>

<script>
import stencils from '@/stencils.json'
export default {
  name: 'SuggestionScroll',
  props: {
    msg: String
  },
  data: () => ({
  }),
  computed: {
    suggestions () {
      console.log('somthing happend')
      return this.$store.state.suggestions
    },
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
  },
  mounted () {
    console.log(stencils)
    console.log(this.icons)
  }
}
</script>

<style scoped lang="scss">
</style>
