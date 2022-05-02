import { createStore } from 'vuex'
import productsData from '../assets/products.json'

export default createStore({
  state() {
    return {
      catalogue: productsData,
      panier: [],
      test: 'coucou'
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
