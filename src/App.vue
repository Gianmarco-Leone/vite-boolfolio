<script>
// COMPONENTS
import AppHeader from "./components/AppHeader.vue";
import ProjectListPage from "./pages/ProjectListPage.vue";

export default {
  components: {
    AppHeader,
    ProjectListPage,
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
    <ProjectListPage />
  </main>
</template>

<style lang="scss"></style>
