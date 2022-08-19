<<<<<<< HEAD
/* eslint-disable */
<script setup>
  import {RouterView} from 'vue-router'
  import Navigation from "./components/Navigation.vue";

  import './assets/javascripts/linkNumbering';
</script>
<template>
  <header>
    <Navigation />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
=======
<script setup>
  import {RouterView} from 'vue-router';
  import Navigation from "./components/Navigation.vue";
  import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <div class="container">
    <header>
      <Navigation/>
    </header>

    <main>
      <RouterView/>
    </main>

    <footer>
      <SiteFooter/>
    </footer>
  </div>
</template>

<style lang="scss">
  @import "./assets/globals";
  @import "./assets/theme/color_palette";
  @import "./assets/theme/screen_sizes";
>>>>>>> main
</style>
