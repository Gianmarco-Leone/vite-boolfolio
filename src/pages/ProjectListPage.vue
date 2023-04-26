<script>
// AXIOS
import axios from "axios";

// COMPONENTS
import ProjectList from "../components/ProjectList.vue";
import AppPagination from "../components/AppPagination.vue";
import AppLoader from "../components/AppLoader.vue";

export default {
  name: "ProjectListPage",

  components: {
    ProjectList,
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
      errorMessage: null,
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
    <ProjectList :projectList="projects.list" />

    <!-- Paginazione -->
    <AppPagination :pages="projects.pagination" @changePage="fetchProjects" />
  </div>

  <AppLoader v-else />
</template>

<style lang="scss" scoped></style>
