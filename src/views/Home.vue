<template>
  <div class="home">
    <PeopleScroll class="people-scroll"/>
    <CanvasWrapper />
  </div>
</template>

<script>
// @ is an alias to /src
import PeopleScroll from '@/components/PeopleScroll.vue'
import CanvasWrapper from '@/components/CanvasWrapper.vue'

export default {
  name: 'Home',
  components: {
    PeopleScroll,
    CanvasWrapper
  }
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100%;
  padding: 1em;
}

.drawing-frame {
}

</style>
