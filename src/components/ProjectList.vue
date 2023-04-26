<script>
// COMPONENTS
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectList",

  components: {
    ProjectCard,
  },

  props: {
    projectList: Array,
  },
};
</script>

<template>
  <section id="project_list" class="container py-4">
    <div v-if="projectList.length">
      <h1 class="my-4">I miei progetti</h1>
      <div class="row g-4">
        <div class="col-6 d-flex" v-for="project in projectList">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>

    <div v-else>
      <h2>Nessun progetto da mostrare</h2>
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
