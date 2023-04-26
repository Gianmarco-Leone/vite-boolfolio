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
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="card-title">{{ project.title }}</h5>
      <span
        v-if="project.type"
        class="badge"
        :style="{ backgroundColor: project.type.color }"
      >
        {{ project.type.label }}
      </span>
    </div>
    <div
      v-if="project.technologies.length && isDetailPage"
      class="card-title d-flex align-items-center justify-content-center border-bottom py-3"
    >
      <span
        v-for="technology in project.technologies"
        :key="technology.id"
        class="rounded-pill me-2 px-3"
        :style="{ backgroundColor: technology.color }"
      >
        {{ technology.label }}
      </span>
    </div>
    <img :src="project.image" class="card-img-top" />
    <div class="card-body">
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
