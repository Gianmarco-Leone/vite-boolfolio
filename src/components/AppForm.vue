<script>
// AXIOS
import axios from "axios";
import AppLoader from "./AppLoader.vue";

export default {
  name: "AppForm",

  components: { AppLoader },

  data() {
    return {
      message: {
        author: "",
        email: "",
        text: "",
      },
      errors: [],
      success: false,
      isPageLoading: false,
    };
  },
  methods: {
    sendMessage() {
      this.isPageLoading = true;
      this.errors = [];
      this.success = false;
      const message = {
        author: this.message.author,
        email: this.message.email,
        text: this.message.text,
      };
      // Chiamata Axios
      axios
        .post("http://127.0.0.1:8000/api/messages", message)
        .then((response) => {
          this.message.author = "";
          this.message.email = "";
          this.message.text = "";
          this.success = true;
        })
        .catch((error) => {
          const response_errors = error.response.data.errors;
          for (const field in response_errors) {
            this.errors.push(response_errors[field][0]);
          }
        })
        .finally(() => {
          this.isPageLoading = false;
        });
    },
  },
};
</script>

<template>
  <AppLoader v-if="isPageLoading" />
  <!-- In caso di errore chiamata axios -->
  <div v-if="errors.length" class="alert alert-danger">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </div>

  <!-- In caso di invio messaggio effettuato -->
  <div v-if="success" class="alert alert-success">
    Messaggio inviato con successo
  </div>

  <form class="row" @submit.prevent="sendMessage">
    <div class="col-6">
      <input
        type="text"
        name="author"
        id="author"
        v-model="message.author"
        placeholder="Insert your name"
        class="w-100"
      />
    </div>

    <div class="col-6">
      <input
        type="email"
        name="email"
        id="email"
        v-model="message.email"
        placeholder="Insert your email"
        class="w-100"
      />
    </div>

    <div class="col-12 my-4">
      <textarea
        name="text"
        id="text"
        v-model="message.text"
        rows="5"
        class="w-100"
        placeholder="Fill out the form and send me your message, you'll be contacted"
      ></textarea>
    </div>

    <div class="col-12 text-end">
      <button type="submit" class="my-btn">Invia il form</button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
