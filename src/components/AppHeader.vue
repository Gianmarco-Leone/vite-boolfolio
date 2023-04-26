<script>
export default {
  name: "AppHeader",

  props: {
    title: String,
  },
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand mb-0 h1">{{ title }}</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
