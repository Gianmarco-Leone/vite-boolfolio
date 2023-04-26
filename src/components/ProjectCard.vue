<script>
export default {
  name: "ProjectCard",

  props: {
    project: Object,
    isDetailPage: Boolean,
  },
};
</script>

<template>
  <div class="card">
    <img :src="project.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
      <router-link
        v-if="!isDetailPage"
        :to="{
          name: 'project-detail',
          params: {
            slug: project.slug,
          },
        }"
        class="btn btn-primary mt-auto align-self-start"
      >
        Scopri di più
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
