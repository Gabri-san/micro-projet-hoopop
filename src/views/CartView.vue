<template>
  <h1>Votre panier</h1>
  <table class="table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Nom</th>
        <th>Prix</th>
        <th>Supprimer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in this.$store.state.panier" :key="index">
        <td>image</td>
        <!-- <td><img :src="product.productPicture" alt=""></td> -->
        <td>{{ item.produit.productName }}</td>
        <td>{{ item.produit.productPrice }}</td>
        <td>
          <button @click="removeFromCart(item)">x</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CartView",
  components: {},
  methods: {
      removeFromCart(product) {
          this.$store.commit('removeFromCart', product)
      }
  }
};
</script>

<style>
</style>