<script>
// COMPONENTS
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },

  data() {
    return {
      title: "Boolfolio",
    };
  },
};
</script>

<template>
  <AppHeader :title="title" />
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss"></style>
