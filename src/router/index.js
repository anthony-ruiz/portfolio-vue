import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WorkLocationDetails from "../views/WorkLocationDetails.vue";
import ProjectDetails from "../views/ProjectDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work-location/:id",
    name: "Work Location",
    component: WorkLocationDetails,
    props: true,
  },
  {
    path: "/project-details/:id",
    name: "Project Details",
    component: ProjectDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
