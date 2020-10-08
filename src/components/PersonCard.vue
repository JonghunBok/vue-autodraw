<template>
  <v-card
    outlined
  >
    <p>hi</p>
  </v-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: Object
  },
  mounted () {
    console.log(this.person)
  }
}
</script>

<style>
</style>
