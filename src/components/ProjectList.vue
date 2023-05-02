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
      errorMessage: null,
      isPageLoading: false,
      type: null,

      projects: {
        list: [],
        pagination: [],
      },
    };
  },

  props: {
    request: String,
  },

  methods: {
    fetchProjects(endpoint = null) {
      // Avvio caricamento pagina
      this.isPageLoading = true;

      if (!endpoint) endpoint = this.baseEndpoint;

      axios
        .get(endpoint)
        .then((response) => {
          this.projects.list = response.data.projects.data;
          this.projects.pagination = response.data.projects.links;

          if (response.data.type) this.type = response.data.type;
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

  computed: {
    title() {
      if (this.request == "all-projects") return "I miei progetti";

      if (this.request == "by-type") return "Progetti per tipologia";

      return "I miei progetti";
    },

    baseEndpoint() {
      if (this.request == "all-projects")
        return "http://127.0.0.1:8000/api/projects";
      if (this.request == "by-type")
        return `http://127.0.0.1:8000/api/type/${this.$route.params.type_id}/projects`;
      return "http://127.0.0.1:8000/api/projects";
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
        <div class="row justify-content-between">
          <div class="col-5">
            <h1 class="my-4">{{ title }}</h1>
          </div>
          <div class="col-3">
            <!-- Paginazione -->
            <AppPagination
              :pages="projects.pagination"
              @changePage="fetchProjects"
            />
          </div>
        </div>
        <div class="row g-4">
          <div class="col-4 d-flex" v-for="project in projects.list">
            <ProjectCard :project="project" :isDetailPage="false" />
          </div>
        </div>

        <div class="text-center mt-5">
          <a
            href="https://github.com/Gianmarco-Leone"
            target="_blank"
            class="my-btn"
          >
            Visualizza gli altri miei progetti su GitHub
          </a>
        </div>
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

  .my-btn:hover {
    transform: scale(1.2);
    transition: 2s;
  }
}
</style>
