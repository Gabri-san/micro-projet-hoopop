<template>
  <div class="home">
    <table class="table">
      <thead>
          <tr>
              <th>Image</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Ajout</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(product, index) in this.$store.state.catalogue" :key="index">
            <td>image</td>
            <!-- <td><img :src="product.productPicture" alt=""></td> -->
            <td>{{product.productName}}</td>
            <td>{{product.productPrice}}</td>
            <td>
              <button @click="addToCart(product)">+panier</button>
            </td>
          </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {},
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product)
      console.log('panier :')
      for(let index = 0; index < this.$store.state.panier.length; index++) {
        const element = this.$store.state.panier[index];
        console.log(element.produit.productName+' x'+element.quantite)
      }
    }
  }
}
</script>
