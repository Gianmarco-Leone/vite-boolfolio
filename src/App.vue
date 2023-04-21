<script>
// AXIOS
import axios from "axios";

// COMPONENTS
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";
import AppLoader from "./components/AppLoader.vue";

export default {
  components: {
    AppLoader,
    AppHeader,
    ProjectList,
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

      this.isPageLoading = true;

      axios
        .get(endpoint)
        .then((response) => {
          this.projects.list = response.data.data;
          this.projects.pagination = response.data.links;
        })

        // Se la chiamata ha un errore
        .catch((error) => {
          store.cards = [];
          console.error(error);
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
  <AppHeader />
  <main>
    <ProjectList
      v-if="!isPageLoading"
      :projectsList="projects.list"
      :pagination="projects.pagination"
      @changePage="fetchProjects"
    />

    <AppLoader v-else />
  </main>
</template>

<style lang="scss"></style>
