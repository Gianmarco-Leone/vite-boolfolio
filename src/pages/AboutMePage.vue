<script>
// COMPONENTS
import AppSideNav from "../components/AppSideNav.vue";
import AppSkills from "../components/AppSkills.vue";

export default {
  name: "AboutMePage",

  components: {
    AppSideNav,
    AppSkills,
  },
};
</script>

<template>
  <section class="container">
    <h1 class="text-center primary-underline">About Me</h1>
    <p>
      I have been passionate about technology since I was a child, but until
      recently I had never delved 100% inside this amazing world.
      <!-- Sono appassionato di tecnologia sin da quando ero bambino, ma fino a poco
      fa non mi ero mai addentrato al 100% all'interno di questo fantastico
      mondo. -->
      <br />
      Ever since I started programming, I can't get enough of it. I love to
      update all the time and experiment with new things every day, working on
      projects I already started or starting new ones.
      <!-- Da quando ho iniziato a programmare, non riesco più a farne a meno. Amo
      aggiornarmi in continuazione e sperimentare ogni giorno cose nuove,
      lavorando su progetti già avviati o iniziandone di nuovi. -->
      <br />
      I have a good knowledge of the languages and frameworks listed in my
      skills, but I plan to learn new ones and stay up to date with what is new
      in the industry. My goal is to grow more and more as a developer in order
      to work on and maintain innovative projects.
      <!-- Ho una buona conoscenza dei linguaggi e dei framework elencati nelle mie
      skills, ma ho intenzione di impararne di nuovi e rimanere sempre
      aggiornato con quelle che sono le novità richieste dal settore. Il mio
      obiettivo è di crescere sempre più come sviluppatore, per poter lavorare e
      mantenere progetti innovativi. -->
    </p>

    <AppSkills />

    <AppSideNav />
  </section>
</template>

<style lang="scss" scoped>
h1 {
  margin: 5rem;
}

p {
  color: #eee;
  padding: 0 5rem;
}
</style>
