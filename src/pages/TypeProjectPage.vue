<script>
// COMPONENTS
import ProjectList from "../components/ProjectList.vue";
import AppSideNav from "../components/AppSideNav.vue";

export default {
  name: "TypeProjectPage",

  components: {
    ProjectList,
    AppSideNav,
  },
};
</script>

<template>
  <ProjectList request="by-type" />
  <AppSideNav />
</template>

<style lang="scss" scoped></style>
