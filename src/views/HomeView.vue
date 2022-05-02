<template>
  <div class="home">
    <p>{{this.$store.state.test}}</p>
    <table class="table">
      <thead>
          <tr>
              <th>Image</th>
              <th>Nom</th>
              <th>Prix</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(user, index) in list" :key="index">
              <td>{{index+1}}</td>
              <td>{{user.name.first}} {{user.name.last}}</td>
              <td>{{user.email}}</td>
              <td>{{user.location.city}}</td>
          </tr>
          <tr v-for="(product, index) in this.$store.state.catalogue" :key="index">
            <td>image</td>
            <td>{{product.productName}}</td>
            <td>{{product.productPrice}}</td>
          </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {}
}
</script>
