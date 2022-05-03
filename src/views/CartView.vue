<template>
  <h1>Votre panier</h1>
  <div class="container panier" v-if="this.$store.state.panier.length>0">
    <div
      class="row align-items-center"
      v-for="(item, index) in this.$store.state.panier"
      :key="index"
    >
    <div class="col-2">
      <img
            width="150"
            :src="item.produit.productPicture"
            onerror="this.src='https://demofree.sirv.com/nope-not-here.jpg';"
          />
    </div>
      <div class="col-6">
        <p>{{ item.produit.productName }}</p>
        <p>{{ displayPrice(item.produit.productPrice) }}</p>
      </div>
      <div class="col-2">
        <button @click="removeOne(item)">-</button>{{ item.quantite
        }}<button @click="addOne(item)">+</button>
      </div>
      <div class="col-2">
        <button class="btn btn-outline-danger" @click="removeFromCart(item)">X</button>
      </div>
    </div>
    <div class="row">
      <div class="col"><p>TOTAL :</p></div>
      <div class="col">
        <p>{{ getTotal }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Le panier est vide !</p>
  </div>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      total: 0,
    };
  },
  components: {},
  methods: {
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
    },
    addOne(product) {
      this.$store.commit("addOne", product);
    },
    removeOne(product) {
      this.$store.commit("removeOne", product);
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
    }
  },
  computed: {
    getTotal() {
      var tot = 0;
      for (let index = 0; index < this.$store.state.panier.length; index++) {
        const item = this.$store.state.panier[index];
        tot += item.produit.productPrice * item.quantite;
      }
      return this.displayPrice(tot);
    },
  },
};
</script>

<style>
</style>