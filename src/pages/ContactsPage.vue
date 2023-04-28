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
      <li class="d-inline-block fs-3">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </li>
      <li class="d-inline-block fs-3 ms-5">
        <font-awesome-icon :icon="['fab', 'square-github']" />
      </li>
    </ul>

    <AppForm />
  </section>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
