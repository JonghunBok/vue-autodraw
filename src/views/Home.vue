<template>
  <div class="home">
    <v-container>
      <v-row>
        <PeopleScroll />
      </v-row>
      <v-row>
        <SuggestionScroll />
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
  </div>
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
