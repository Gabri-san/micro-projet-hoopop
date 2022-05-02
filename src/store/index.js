import { createStore } from 'vuex'
import productsData from '../assets/products.json'

export default createStore({
  state() {
    return {
      catalogue: productsData,
      panier: []
    }
  },
  getters: {
  },
  mutations: {
    addToCart(state, id) {
      state.panier.push(id)
    }
  },
  actions: {
  },
  modules: {
  }
})
