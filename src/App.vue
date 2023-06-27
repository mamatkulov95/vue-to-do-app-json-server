<template>
  <Navbar />

  <router-view />
</template>

<script>
import Home from "./views/HomeView.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Home,
    Navbar,
  },
};
</script>

<style>
body {
  background-color: #2c2c2c;
}
</style>
