<<<<<<< HEAD
<!-- <script setup>
  import {RouterLink} from 'vue-router'
</script> -->

<template>
  <nav>
    <div>
      <img alt="Vue logo" src="../assets/images/rainbow-sheep.gif">
    </div>
  </nav>
</template>

<style>
  nav {
    padding: 30px 0 15px 0;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
=======
<template>
  <nav>
    <img alt="Portfolio logo" src="../assets/img/rainbow-sheep.gif">
    <h1>Nicole Zonnenberg</h1>
    <h2><a href="https://fearless.tech/" target="_blank">Fearless</a> Software Engineer</h2>
    <RouterLink to="/"  class="navLink" active-class="active">About</RouterLink>
    <RouterLink to="/projects" class="navLink" active-class="active">Projects</RouterLink>
  </nav>
</template>
>>>>>>> main
