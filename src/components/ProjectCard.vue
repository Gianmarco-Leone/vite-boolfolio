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
      <router-link
        :to="{
          name: 'type-projects',
          params: {
            type_id: project.type_id,
          },
        }"
        v-if="project.type"
        class="badge"
        :style="{ backgroundColor: project.type.color }"
      >
        {{ project.type.label }}
      </router-link>
    </div>
    <div
      v-if="project.technologies.length && isDetailPage"
      class="card-title d-flex align-items-center justify-content-center border-bottom py-3"
    >
      <span
        v-for="technology in project.technologies"
        :key="technology.id"
        class="rounded-pill me-2 px-3"
        :style="{ backgroundColor: technology.color, color: '#ffffff' }"
      >
        {{ technology.label }}
      </span>
    </div>
    <figure v-if="project.image" class="text-center">
      <img :src="project.image" class="card-img-top" />
    </figure>
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
    <div class="card-footer d-flex align-items-center justify-content-between">
      <span>
        <strong>Creato:</strong>
        {{ project.created_at }}
      </span>
      <span>
        <strong>Ultima modifica:</strong>
        {{ project.updated_at }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  img {
    max-width: 500px;
  }
}
</style>
