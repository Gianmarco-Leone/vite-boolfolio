<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: "AppPagination",

  data() {
    return {};
  },

  props: {
    pagination: Array,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav aria-label="Project pagination" class="mt-4">
    <ul class="pagination">
      <li class="page-item" v-for="page in pagination">
        <button
          type="button"
          class="page-link"
          @click="$emit('changePage', page.url)"
          :class="{
            disabled: !page.url,
            active: page.active,
          }"
          v-html="page.label"
        ></button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
