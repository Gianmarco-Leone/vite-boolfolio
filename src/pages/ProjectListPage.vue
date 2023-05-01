<script>
// COMPONENTS
import ProjectList from "../components/ProjectList.vue";
import AppSideNav from "../components/AppSideNav.vue";

export default {
  name: "ProjectListPage",

  components: {
    ProjectList,
    AppSideNav,
  },
};
</script>

<template>
  <ProjectList request="all-projects" />
  <AppSideNav />
</template>

<style lang="scss" scoped></style>
