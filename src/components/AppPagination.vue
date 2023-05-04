<script>
export default {
  name: "AppPagination",

  props: {
    pages: Array,
  },
};
</script>

<template>
  <nav aria-label="Project pagination" class="mt-4">
    <ul class="pagination">
      <li class="page-item" v-for="page in pages">
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

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.pagination {
  margin-bottom: 0;
  margin-left: auto;
  .page-link {
    color: $primary-color;

    &.active {
      background-color: $primary-color;
      border-color: $primary-color;
      color: #fff;
    }

    &.disabled {
      color: #6c757d;
    }
  }
}
</style>
