<script>
export default {
  name: "AppForm",

  data() {
    return {
      message: {
        author: "",
        email: "",
        text: "",
      },
      errors: [],
      success: false,
    };
  },

  methods: {
    sendMessage() {
      this.errors = [];
      const message = {
        author: this.message.author,
        email: this.message.email,
        text: this.message.text,
      };
    },
  },
};
</script>

<template>
  <form class="row" @submit.prevent="sendMessage">
    <div class="col-6">
      <input
        type="text"
        name=""
        id="author"
        placeholder="Inserisci il tuo nome"
        class="w-100"
      />
    </div>

    <div class="col-6">
      <input
        type="email"
        name=""
        id="email"
        placeholder="Inserisci la tua email"
        class="w-100"
      />
    </div>

    <div class="col-12 my-4">
      <textarea
        name=""
        id="text"
        rows="5"
        class="w-100"
        placeholder="Lascia un messaggio qui e verrai ricontattato"
      ></textarea>
    </div>

    <div class="col-12 text-end">
      <button type="submit" class="btn btn-primary">Invia il form</button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
