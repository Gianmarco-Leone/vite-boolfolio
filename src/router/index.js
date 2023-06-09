import { createRouter, createWebHistory } from "vue-router";

// Pages file
import HomePage from "../pages/HomePage.vue";
import ProjectListPage from "../pages/ProjectListPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";
import AboutMePage from "../pages/AboutMePage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import TypeProjectPage from "../pages/TypeProjectPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

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
      path: "/about-me",
      name: "about-me",
      component: AboutMePage,
    },
    {
      path: "/projects/:slug",
      name: "project-detail",
      component: ProjectDetailPage,
    },
    {
      path: "/type/:type_id/projects",
      name: "type-projects",
      component: TypeProjectPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export { router };
