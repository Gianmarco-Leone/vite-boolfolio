<script>
// COMPONENTS
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectList",

  components: {
    ProjectCard,
  },

  props: {
    projectsList: Array,
  },
};
</script>

<template>
  <section id="project_list" class="container py-4">
    <h1 class="my-4">I miei progetti</h1>
    <div class="row">
      <div class="col d-flex" v-for="project in projectsList">
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#project_list {
  .card-body {
    min-height: 190px;
    display: flex;
    flex-direction: column;
  }
}
</style>
