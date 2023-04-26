<script>
// AXIOS
import axios from "axios";

// COMPONENTS
import ProjectList from "../components/ProjectList.vue";
import AppPagination from "../components/AppPagination.vue";
import AppLoader from "../components/AppLoader.vue";

export default {
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
    <ProjectList :projectList="projects.list" />

    <!-- Paginazione -->
    <AppPagination :pages="projects.pagination" @changePage="fetchProjects" />
  </div>

  <AppLoader v-else />
</template>

<style lang="scss" scoped></style>
