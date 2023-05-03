<script>
// COMPONENTS
import AppForm from "../components/AppForm.vue";
import AppSideNav from "../components/AppSideNav.vue";

export default {
  name: "ContactsPage;",

  components: {
    AppForm,
    AppSideNav,
  },
};
</script>

<template>
  <section class="container py-4">
    <h1 class="primary-underline text-center my-3">Contatti</h1>

    <div class="pt-5">
      <h4>Contattami in uno dei seguenti modi</h4>
      <ul class="mt-4">
        <li><strong>Mobile:</strong> 3929873496</li>
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
    </div>

    <AppSideNav />

    <h4 class="mt-5">O compila il form e verrai ricontattato</h4>
    <AppForm />
  </section>
</template>

<style lang="scss" scoped>
ul {
  padding: 0;

  li {
    a {
      color: inherit;
    }
  }
}
</style>
