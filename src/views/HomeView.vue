<template>
  <div class="home">
    <!-- <table class="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Ajout</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in this.$store.state.catalogue"
          :key="index"
        >
          <td><img :src="product.productPicture" alt=""></td>
          <td>{{ product.productName }}</td>
          <td>{{ product.productPrice }}</td>
          <td>
            <button @click="addToCart(product)">+panier</button>
          </td>
        </tr>
      </tbody>
    </table> -->
    <div class="container">
      <div
        class="row align-items-center product"
        v-for="(product, index) in this.$store.state.catalogue"
        :key="index"
      >
        <div class="col-2">
          <img
            width="150"
            :src="product.productPicture"
            onerror="this.src='https://demofree.sirv.com/nope-not-here.jpg';"
          />
        </div>
        <div class="col-8">
          <p>{{ product.productName }}</p>
          <p>{{ displayPrice(product.productPrice) }}</p>
        </div>
        <div class="col-2">
          <button class="btn btn-primary" @click="addToCart(product)">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "HomeView",
  components: {},
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
      console.log("panier :");
      for (let index = 0; index < this.$store.state.panier.length; index++) {
        const element = this.$store.state.panier[index];
        console.log(element.produit.productName + " x" + element.quantite);
      }
    },
    displayPrice(value) {
      if (value < 100) {
        return "0," + value + " €";
      } else {
        return (
          value.toString().slice(0, -2) +
          "," +
          value.toString().slice(-2) +
          " €"
        );
      }
    },
  },
};
</script>
