<script>
// COMPONENTS
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "ProjectListPage",

  components: {
    ProjectList,
  },
};
</script>

<template>
  <ProjectList request="all-projects" />
</template>

<style lang="scss" scoped></style>
