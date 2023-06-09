import { createApp } from "vue";

// Router
import { router } from "./router/index.js";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

// FONT AWESOME
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faCircleNotch,
  faLinkedin,
  faSquareGithub,
  faHouse,
  faPhone,
  faAddressCard,
  faLaptop
);

import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
