<template>
  <div class="hello">
    <p>people scrool</p>
  </div>
</template>

<script>
export default {
  name: 'PeopleScroll',
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
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
