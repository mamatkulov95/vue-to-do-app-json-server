<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'home' }">
      <img src="@/assets/QD.png" alt="Logo Quick Deal" style="height: 60px" />
    </router-link>
    <div class="menus">
      <router-link v-for="link in menuLinks" :key="link.name" :to="link.name">{{
        link.label
      }}</router-link>
    </div>
  </nav>
</template>

<script>
import data from "../../data/data.json";

export default {
  data() {
    return {
      menuLinks: [],
    };
  },
  mounted() {
    this.menuLinks = data.menuLinks;
  },
};
</script>

<style>
@import "@/assets/style.css";
</style>
