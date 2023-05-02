<script>
export default {
  name: "HomePage",
};
</script>

<template>
  <section class="d-flex align-items-center py-4 my-fade-from-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3">
          <router-link :to="{ name: 'home' }" class="my-pill nav-link"
            >Home</router-link
          >
        </div>
        <div class="col-3 text-end">
          <router-link :to="{ name: 'projects' }" class="my-pill nav-link"
            >Projects</router-link
          >
        </div>
      </div>

      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <h1>Il mio Porfolio</h1>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-3">
          <router-link :to="{ name: 'contacts' }" class="my-pill nav-link"
            >Contacts</router-link
          >
        </div>
        <div class="col-3 text-end">
          <router-link :to="{ name: 'about-me' }" class="my-pill nav-link"
            >About Me</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/animation" as *;

section {
  min-height: 100vh;

  .col-12 {
    min-height: 400px;
  }
}
</style>
