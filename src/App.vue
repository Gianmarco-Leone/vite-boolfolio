<script>
// COMPONENTS
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  components: {
    AppHeader,
    ProjectList,
  },

  data() {
    return {
      isPageLoading: false,
    };
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <ProjectList />
  </main>
</template>

<style lang="scss"></style>
