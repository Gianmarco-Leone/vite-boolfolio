<script>
// COMPONENTS
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "TypeProjectPage",

  components: {
    ProjectList,
  },
};
</script>

<template>
  <ProjectList request="by-type" />
</template>

<style lang="scss" scoped></style>
