<script>
export default {
  name: "ProjectCard",

  props: {
    project: Object,
    isDetailPage: Boolean,
  },

  data() {
    return {
      substr: "",
    };
  },

  methods: {
    getAbstract(characters) {
      return (this.substr =
        this.project.description.substr(0, characters) + "...");
    },
  },
};
</script>

<template>
  <div
    class="card"
    :class="isDetailPage ? 'card-detail-page' : 'card-list-page'"
  >
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
      class="card-title d-flex flex-wrap align-items-center justify-content-center border-bottom py-3"
    >
      <span
        v-for="technology in project.technologies"
        :key="technology.id"
        class="rounded-pill me-2 px-3 my-2 my-lg-0"
        :style="{ backgroundColor: technology.color, color: '#ffffff' }"
      >
        {{ technology.label }}
      </span>
    </div>
    <figure v-if="project.image" class="text-center">
      <img :src="project.image" class="card-img-top" />
    </figure>
    <div class="card-body">
      <p v-if="!isDetailPage" class="card-text">
        {{ getAbstract(51) }}
      </p>
      <p v-else-if="isDetailPage" class="card-text">
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
        class="my-btn mt-auto align-self-start"
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
@use "../assets/scss/partials/animation" as *;

.card {
  color: #111;

  img {
    max-width: 500px;
  }

  .card-text {
    min-height: 3rem;
    max-height: 10rem;
    overflow-y: auto;
  }

  &.card-list-page:hover {
    animation: shake 0.5s linear;
  }
}
</style>
