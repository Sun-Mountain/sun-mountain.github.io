<script setup>
import {RouterView} from 'vue-router'
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
</style>
