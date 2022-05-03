import { createStore } from 'vuex'
import productsData from '../assets/products.json'

export default createStore({
  state() {
    return {
      catalogue: productsData,
      panier: []
    }
  },
  getters: {},
  mutations: {
    addToCart(state, product) {
      var incart = false;
      for(let index = 0; index < state.panier.length; index++) {
        if(state.panier[index].produit.productId == product.productId) {
          incart = true;
          var key = index;
        }
      }
      if(!incart) {
        state.panier.push({
          produit: product,
          quantite: 1
        });
      } else {
        state.panier[key].quantite++
      }
    },
    removeFromCart(state, product) {
      for(let index = 0; index < state.panier.length; index++) {
        if(state.panier[index] == product) {
          state.panier.splice(index, 1);
        }
      }
    },
    addOne(state, product) {
      for(let index = 0; index < state.panier.length; index++) {
        if(state.panier[index].produit.productId == product.produit.productId) {
          product.quantite++
        }
      }
    },
    removeOne(state, product) {
      for(let index = 0; index < state.panier.length; index++) {
        if(state.panier[index].produit.productId == product.produit.productId) {
          product.quantite >1 ? product.quantite-- : state.panier.splice(index, 1);
        }
      }
    }
  },
  actions: {},
  modules: {}
})
