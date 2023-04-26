<script>
// AXIOS
import axios from "axios";

// COMPONENT
import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";
import AppLoader from "./AppLoader.vue";

export default {
  name: "ProjectList",

  components: {
    ProjectCard,
    AppPagination,
    AppLoader,
  },

  emits: ["changePage"],

  data() {
    return {
      projects: {
        list: [],
        pagination: [],
      },

      isPageLoading: false,
    };
  },

  methods: {
    fetchProjects(endpoint = null) {
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/projects";

      // Avvio caricamento pagina
      this.isPageLoading = true;

      axios
        .get(endpoint)
        .then((response) => {
          this.projects.list = response.data.data;
          this.projects.pagination = response.data.links;
        })

        // Infine
        .finally(() => {
          // Stoppo caricamento pagina
          this.isPageLoading = false;
        });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div v-if="!isPageLoading">
    <section id="project_list" class="container py-4">
      <div v-if="projects.list.length">
        <h1 class="my-4">I miei progetti</h1>
        <div class="row g-4">
          <div class="col-6 d-flex" v-for="project in projects.list">
            <ProjectCard :project="project" />
          </div>
        </div>

        <!-- Paginazione -->
        <AppPagination
          :pagination="projects.pagination"
          @changePage="fetchProjects"
        />
      </div>

      <div v-else>
        <h2>Nessun progetto da mostrare</h2>
      </div>
    </section>
  </div>

  <AppLoader v-else />
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
