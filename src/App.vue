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

  data() {
    return {
      projects: {
        list: [],
      },
    };
  },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects.list = response.data;
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
    <ProjectList :projectsList="projects.list" />
  </main>
</template>

<style lang="scss"></style>
