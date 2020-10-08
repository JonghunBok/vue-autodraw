<template>
  <div class="people-scroll">
    <PersonCard v-for="(person, index) in dummyPeople" :key="index" :person="person"/>
  </div>
</template>

<script>
import PersonCard from '@/components/PersonCard'

export default {
  name: 'PeopleScroll',
  components: {
    PersonCard
  },
  props: {
    msg: String
  },
  data: () => ({
    dummyPeople: [
      {
        name: '철수',
        mediaStream: null
      },
      {
        name: '영희',
        mediaStream: null
      },
      {
        name: '민수',
        mediaStream: null
      },
      {
        name: '로버트 다우니 주니어',
        mediaStream: null
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.people-scroll {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
