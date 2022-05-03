<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/panier">Panier</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.product {
  background-color: lightgrey;
  margin: 2em;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.panier {
  background-color: lightgrey;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-top: 1em;
}
.panier > .row {
  margin: 1em;
}
</style>
