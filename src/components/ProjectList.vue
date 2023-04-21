<script>
// COMPONENT
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectList",

  components: {
    ProjectCard,
  },

  props: {
    projectsList: Array,
    pagination: Array,
  },
};
</script>

<template>
  <section id="project_list" class="container py-4">
    <div v-if="projectsList.length">
      <h1 class="my-4">I miei progetti</h1>
      <div class="row g-4">
        <div class="col-6 d-flex" v-for="project in projectsList">
          <ProjectCard :project="project" />
        </div>
      </div>

      <!-- Paginazione -->
      <nav aria-label="Project pagination" class="mt-4">
        <ul class="pagination">
          <li class="page-item" v-for="page in pagination">
            <button
              type="button"
              class="page-link"
              @click="$emit('changePage', page.url)"
              :class="{
                disabled: !page.url,
                active: page.active,
              }"
              v-html="page.label"
            ></button>
          </li>
        </ul>
      </nav>
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
