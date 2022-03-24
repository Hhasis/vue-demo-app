<template>
  <v-app-bar dark app dense>{{$t('message')}}</v-app-bar>
</template>

<script>
import message from "@/locales/en";

export default {
  data() {
    return {
      message
    };
  },
};
</script>

<style></style>
