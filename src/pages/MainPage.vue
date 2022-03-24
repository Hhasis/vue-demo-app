<template>
  <v-container>
    <app-bar />
    <!-- <p>{{ $t('message') }}</p> -->
    <!-- <router-view></router-view> -->
  </v-container>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
// import message from "@/locales/en";
export default {
  name: "MainPage",
  components: {
    AppBar,
  },
  data() {
    return {
      // message,
    };
  },
};
</script>

<style></style>
