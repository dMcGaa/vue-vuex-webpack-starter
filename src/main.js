// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    carData: {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    loadDataMut (state, data) {
      state.carData = data
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    loadData (context) {
      let uri = 'https://api.myjson.com/bins/9hdjn'
      return axiosGet(uri, context, 'loadDataMut')
    }
  }
})

function axiosGet (uri, context, mutation) {
  return axios.get(uri, {headers: {'Content-Type': 'application/json'}})
    .then((res) => {
      let data = res.data
      context.commit(mutation, data)
    })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
