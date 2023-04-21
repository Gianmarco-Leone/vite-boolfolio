<script>
export default {
  name: "ProjectCard",

  props: {
    project: Object,
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
      <button type="button" class="btn btn-primary mt-auto align-self-start">
        Scopri di più
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
