<script>
export default {
  name: "AppSkills",
};
</script>

<template>
  <div class="row justify-content-center py-3 g-3">
    <h2 class="text-center primary-underline my-5">Competenze</h2>

    <div class="col-10 col-md-5">
      <div class="my-card">
        <div class="my-card-header">
          <h3>Frontend</h3>
        </div>
        <div class="my-card-body">
          <h4 class="mb-3">Tecnologie conosciute:</h4>
          <p>HTML, CSS, Bootstrap, Tailwind, Sass, Javascript, Vue</p>
        </div>
      </div>
    </div>

    <div class="col-10 col-md-5">
      <div class="my-card">
        <div class="my-card-header">
          <h3>Backend</h3>
        </div>
        <div class="my-card-body">
          <h4 class="mb-3">Tecnologie conosciute:</h4>
          <p>PHP, SQL, MySql, Laravel</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.col-10 {
  flex-grow: 1;

  .my-card {
    text-align: center;
    background-color: $primary-color;
    border-radius: 20px;
    min-height: 220px;

    .my-card-header {
      margin: 0 1rem;
      padding: 1rem 0;
      border-bottom: 2px dashed $bg-color;
    }

    .my-card-body {
      padding: 1rem 3rem;
    }
  }
}
</style>
