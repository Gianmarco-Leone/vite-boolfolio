<script>
export default {};
</script>

<template>
  <section
    class="d-flex flex-column justify-content-center align-items-center text-white text-center"
  >
    <p>
      loading...
      <span>
        <font-awesome-icon :icon="['fas', 'circle-notch']" spin />
      </span>
    </p>
  </section>
</template>

<style lang="scss" scoped>
section.d-flex {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(200, 200, 200, 0.5);
}
</style>
