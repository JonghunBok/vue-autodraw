<template>
  <div class="hello">
    <v-container>
      <v-row>
        <v-col class="d-flex flex-column justify-space-between">
          <v-btn fab dark > down </v-btn>
          <v-btn fab dark > down </v-btn>
          <v-btn fab dark > down </v-btn>
          <v-btn fab dark > down </v-btn>
          <v-btn fab dark > down </v-btn>
          <v-btn fab dark > down </v-btn>
          <v-btn fab dark > down </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <p>DrawToolBar</p>
  </div>
</template>

<script>
export default {
  name: 'DrawToolBar',
  props: {
    msg: String
  }
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
