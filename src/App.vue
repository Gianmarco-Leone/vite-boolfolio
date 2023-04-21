<script>
// AXIOS
import axios from "axios";

// COMPONENTS
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  components: {
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
    };
  },

  methods: {
    fetchProjects(endpoint = null) {
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/projects";
      axios.get(endpoint).then((response) => {
        this.projects.list = response.data.data;
        this.projects.pagination = response.data.links;
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
      :projectsList="projects.list"
      :pagination="projects.pagination"
      @changePage="fetchProjects"
    />
  </main>
</template>

<style lang="scss"></style>
