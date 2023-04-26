import { createRouter, createWebHistory } from "vue-router";

// Pages file
import HomePage from "../pages/HomePage.vue";
import ProjectListPage from "../pages/ProjectListPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
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
    {
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
  ],
});

export { router };
