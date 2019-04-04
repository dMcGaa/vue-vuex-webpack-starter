<template>
  <div class="car-info">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <span>Car Name</span>
        <span>Model Year</span>
        <span>Cylinders</span>
        <span>Displacement</span>
        <span>Horsepower</span>
        <span>Acceleration</span>
        <span>Weight</span>
        <span>MPG</span>
      </li>
      <li v-for="(car, index) in carData" :key="index">
        <span>{{ car["car name"] }}</span>
        <span>{{ car["model year"] }}</span>
        <span>{{ car.cylinders }}</span>
        <span>{{ car.displacement }}</span>
        <span>{{ car.horsepower }}</span>
        <span>{{ car.acceleration }}</span>
        <span>{{ car.weight }}</span>
        <span>{{ car["miles"]["gallon"] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CarInfo',
  computed: mapState([
    'carData'
  ]),
  created () {
    this.loadData()
  },
  data () {
    return {
      msg: 'Car Data'
    }
  },
  methods: {
    loadData () {
      this.$store.dispatch('loadData')
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
  display: flex;
  flex-direction: column;
}
li {
  margin: 0 10px;
  flex: 1;
  display: flex;
}
li:hover {
  background: lightgray;
}
li > span {
  flex: 1;
}
a {
  color: #42b983;
}
</style>
