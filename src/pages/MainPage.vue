<template>
  <v-container>
    <app-bar />
    <!-- <router-view/> -->
  </v-container>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "MainPage",
  components: {
    AppBar,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
