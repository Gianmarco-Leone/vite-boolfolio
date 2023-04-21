<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },

  data() {
    return {
      title: "Hello world",
    };
  },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        console.log(response.data);
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
  <h1>{{ title }}</h1>
</template>

<style lang="scss"></style>
