<script>
// COMPONENTS
import AppForm from "../components/AppForm.vue";

export default {
  name: "ContactsPage;",

  components: {
    AppForm,
  },
};
</script>

<template>
  <section class="container py-4">
    <h1 class="my-3">Contattami</h1>
    <ul>
      <li><strong>Cellulare:</strong> 3929873496</li>
      <li><strong>Email:</strong> gianmarcoleone96@gmail.com</li>
    </ul>

    <ul id="social_icon_list">
      <li class="d-inline-block">
        <a
          href="https://www.linkedin.com/in/gianmarco-leone-843745212/"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" class="fs-3" />
        </a>
        <strong> Gianmarco Leone </strong>
      </li>
      <li class="d-inline-block ms-5">
        <a href="https://github.com/Gianmarco-Leone" target="_blank">
          <font-awesome-icon :icon="['fab', 'square-github']" class="fs-3" />
        </a>
        <strong> Gianmarco-Leone </strong>
      </li>
    </ul>

    <AppForm />
  </section>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;

  li {
    a {
      color: inherit;
    }
  }
}
</style>
