<script>
export default {
  name: "AppHeader",

  data() {
    return {
      textToType: "",
      typeStatus: false,
      typeArray: ["Sono un Web Deve", "Sono un Full Stack Web Developer."],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },

  methods: {
    // Funzione per autoscrittura
    typeText() {
      // SE l'indice del carattere è minore della lunghezza della frase da scrivere
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        // Setto lo stato a VERO se FALSO
        if (!this.typeStatus) this.typeStatus = true;

        // Aggiungo al testo da scrivere il carattere che corrisponde a quell'indice
        this.textToType += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );

        // Incremento l'indice del carattere di 1
        this.charIndex += 1;

        // Avvio un TimeOut che stampa il testo a seconda della velocità passata come variabile nei data()
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        // ALTRIMENTI setto lo stato a FALSO
        this.typeStatus = false;

        // Invoco funzione per cancellare il testo
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    // Funzione per cancellazione automatica del testo
    eraseText() {
      // SE l'indice del carattere è maggiore di 0 E è minore della lunghezza della seconda frase
      if (this.charIndex > 0 && this.charIndex < this.typeArray[1].length) {
        // Setto lo stato a VERO se FALSO
        if (!this.typeStatus) this.typeStatus = true;

        // Invoco metodo substring() per rimuovere un carattere dalla frase
        this.textToType = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );

        // Decremento indice del carattere di 1
        this.charIndex -= 1;

        // Avvio un TimeOut per cancellare carattere per carattere dato un periodo di tempo nei data
        setTimeout(this.eraseText, this.erasingSpeed);

        // ALTRIMENTI SE l'indice del carattere è uguale alla lunghezza della secondo frase
      } else if (this.charIndex == this.typeArray[1].length) {
        // Setto variabile VERA per stoppare animazione cursore
        this.typeStatus = true;

        // ALTRIMENTI
      } else {
        // Setto variabile FALSA
        this.typeStatus = false;

        // Passo alla seconda frase
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
            >Progetti</router-link
          >
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 d-flex flex-column justify-content-center align-items-center text-center"
        >
          <span class="d-block">Benvenuto, io sono Gianmarco. </span>
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
            >Contatti</router-link
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
