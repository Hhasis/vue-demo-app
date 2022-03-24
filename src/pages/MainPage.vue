<template>
  <v-container>
    <app-bar></app-bar>
    <router-view></router-view>
  </v-container>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "MainPage",
  components: {
    AppBar,
  },
};
</script>

<style></style>
