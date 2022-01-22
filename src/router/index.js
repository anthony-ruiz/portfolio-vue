import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WorkLocationDetails from "../views/WorkLocationDetails.vue";
import WorkExperince from "../views/WorkExperince.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/work-location/:id",
    name: "Work Location",
    component: WorkLocationDetails,
    props: true,
  },
  {
    path: "/work-experince",
    name: "WorkExperince",
    component: WorkExperince,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
