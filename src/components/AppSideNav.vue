<script>
export default {
  name: "AppSideNav",
};
</script>

<template>
  <div class="side-nav d-flex flex-column">
    <div>
      <router-link :to="{ name: 'home' }" class="nav-link" title="Home">
        <font-awesome-icon :icon="['fas', 'house']" />
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'contacts' }" class="nav-link" title="Contacts">
        <font-awesome-icon :icon="['fas', 'phone']" />
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'about-me' }" class="nav-link" title="About Me">
        <font-awesome-icon :icon="['fas', 'address-card']" />
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'projects' }" class="nav-link" title="Projects">
        <font-awesome-icon :icon="['fas', 'laptop']" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-nav {
  position: absolute;
  right: 0;
  top: 10rem;
  gap: 1rem;

  div {
    margin: 0.5rem 1rem;

    &:hover {
      transform: scale(1.4);
    }
    .active {
      color: red;
    }
  }
}
</style>
