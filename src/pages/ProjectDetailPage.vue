<script>
// AXIOS
import axios from "axios";

// COMPONENTS
import ProjectCard from "../components/ProjectCard.vue";
import AppLoader from "../components/AppLoader.vue";
import AppSideNav from "../components/AppSideNav.vue";

export default {
  name: "ProjectDetailPage",

  components: {
    ProjectCard,
    AppLoader,
    AppSideNav,
  },

  data() {
    return {
      project: null,

      isPageLoading: false,
    };
  },

  methods: {
    fetchProjectDetail() {
      this.isPageLoading = true;

      axios
        .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then((response) => {
          this.project = response.data;
        })
        .catch((error) => {
          this.$router.push({ name: "not-found" });
        })
        .finally(() => {
          this.isPageLoading = false;
        });
    },
  },

  created() {
    this.fetchProjectDetail();
  },
};
</script>

<template>
  <section v-if="!isPageLoading" class="container py-4">
    <h1 class="text-center">{{ project?.title }}</h1>

    <ProjectCard v-if="project" :project="project" :isDetailPage="true" />

    <AppSideNav />
  </section>

  <AppLoader v-else />
</template>

<style lang="scss" scoped></style>
