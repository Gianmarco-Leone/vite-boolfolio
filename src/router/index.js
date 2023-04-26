import { createRouter, createWebHistory } from "vue-router";

// Pages file
import HomePage from "../pages/HomePage.vue";
import ProjectListPage from "../pages/ProjectListPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectListPage,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsPage,
    },
  ],
});

export { router };
