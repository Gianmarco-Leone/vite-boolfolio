<script>
// AXIOS
import axios from "axios";

// COMPONENTS
import ProjectCard from "./ProjectCard.vue";
import AppPagination from "../components/AppPagination.vue";
import AppLoader from "../components/AppLoader.vue";

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

      errorMessage: null,
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

        // SE c'è un errore nella chiamata axios
        .catch((error) => {
          // this.$router.push({ name: "not-found" });
          this.errorMessage = error.message;
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
    <div v-if="errorMessage" class="container py-4">
      <div class="alert alert-danger">
        <strong>404 | NOT FOUND</strong>
        <span>: {{ errorMessage }} </span>
      </div>
    </div>

    <section id="project_list" class="container py-4">
      <div v-if="projects.list.length">
        <h1 class="my-4">I miei progetti</h1>
        <div class="row g-4">
          <div class="col-6 d-flex" v-for="project in projects.list">
            <ProjectCard :project="project" :isDetailPage="false" />
          </div>
        </div>
      </div>

      <div v-else>
        <h2>Nessun progetto da mostrare</h2>
      </div>
    </section>

    <!-- Paginazione -->
    <AppPagination :pages="projects.pagination" @changePage="fetchProjects" />
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
