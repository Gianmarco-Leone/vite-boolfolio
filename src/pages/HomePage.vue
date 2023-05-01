<script>
// COMPONENTS
import AppSideNav from "../components/AppSideNav.vue";

export default {
  name: "HomePage",

  components: {
    AppSideNav,
  },
};
</script>

<template>
  <section class="container py-4">
    <h1>Portfolio</h1>

    <AppSideNav />
  </section>
</template>

<style lang="scss" scoped></style>
