<template>
  <h1>Votre panier</h1>
  <div class="container panier" v-if="this.$store.state.panier.length>0">
    <div
      class="row align-items-center"
      v-for="(item, index) in this.$store.state.panier"
      :key="index"
    >
    <div class="col">
      <img
            width="150"
            :src="item.produit.productPicture"
            onerror="this.src='https://demofree.sirv.com/nope-not-here.jpg';"
          />
    </div>
      <div class="col">
        <p>{{ item.produit.productName }}</p>
        <p>{{ item.produit.productPrice }}</p>
      </div>
      <div class="col">
        <button @click="removeOne(item)">-</button>{{ item.quantite
        }}<button @click="addOne(item)">+</button>
      </div>
      <div class="col">
        <button class="btn btn-outline-danger" @click="removeFromCart(item)">
          Supprimer
        </button>
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
  },
  computed: {
    getTotal() {
      var tot = 0;
      for (let index = 0; index < this.$store.state.panier.length; index++) {
        const item = this.$store.state.panier[index];
        tot += item.produit.productPrice * item.quantite;
      }
      return tot;
    },
  },
};
</script>

<style>
</style>