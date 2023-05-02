<script>
export default {
  name: "AppPagination",

  props: {
    pages: Array,
  },
};
</script>

<template>
  <div class="container">
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
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.pagination {
  .page-link.active {
    background-color: $primary-color;
    border-color: $primary-color;
  }
}
</style>
