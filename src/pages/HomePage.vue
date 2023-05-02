<script>
export default {
  name: "HomePage",

  data() {
    return {
      textToType: "",
      typeStatus: false,
      typeArray: ["I'm Web Developer.", "I'm Full Stack Web Developer."],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },

  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.textToType += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.textToType = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;

        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;

        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<template>
  <section class="d-flex align-items-center py-4 my-fade-from-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3">
          <router-link :to="{ name: 'home' }" class="my-pill nav-link"
            >Home</router-link
          >
        </div>
        <div class="col-3 text-end">
          <router-link :to="{ name: 'projects' }" class="my-pill nav-link"
            >Projects</router-link
          >
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 d-flex flex-column justify-content-center align-items-center"
        >
          <span class="d-block">Hi, my name is Gianmarco. </span>
          <div>
            <span class="typed-text">
              {{ textToType }}
            </span>
            <span
              class="my-cursor my-cursor-blink"
              :class="{ typing: typeStatus }"
              >&nbsp;</span
            >
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-3">
          <router-link :to="{ name: 'contacts' }" class="my-pill nav-link"
            >Contacts</router-link
          >
        </div>
        <div class="col-3 text-end">
          <router-link :to="{ name: 'about-me' }" class="my-pill nav-link"
            >About Me</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/animation" as *;

section {
  min-height: 100vh;

  .col-12 {
    min-height: 400px;

    span {
      font-size: 2.5rem;
      font-weight: 500;
    }

    span.my-cursor {
      display: inline-block;
      margin-left: 6px;
      width: 2px;
      background-color: #fff;
    }

    span.my-cursor.typing {
      animation: none;
    }
  }
}
</style>
