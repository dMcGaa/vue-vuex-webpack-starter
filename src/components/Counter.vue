<template>
  <div class="counter">
    <h1>{{ msg }}</h1>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Counter',
  computed: mapState([
    'count'
  ]),
  data () {
    return {
      msg: 'Counter'
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
