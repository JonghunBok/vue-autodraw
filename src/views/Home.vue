<template>
  <v-container class="home">
    <v-row>
      <PeopleScroll />
    </v-row>
    <v-row>
      <SuggestionScroll class="suggestion-scroll"/>
    </v-row>
    <v-row>
      <v-col>
        <DrawToolBar />
      </v-col>
      <v-col>
        <CanvasWrapper />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import PeopleScroll from '@/components/PeopleScroll.vue'
import SuggestionScroll from '@/components/SuggestionScroll.vue'
import DrawToolBar from '@/components/DrawToolBar.vue'
import CanvasWrapper from '@/components/CanvasWrapper.vue'

export default {
  name: 'Home',
  components: {
    PeopleScroll,
    SuggestionScroll,
    DrawToolBar,
    CanvasWrapper
  }
}
</script>

<style scoped>
.home {
  height: 100%;
}

.suggestion-scroll {
  height: 15%;
}

</style>
