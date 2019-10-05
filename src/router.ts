import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ePaid from "./views/ePaid.vue";
import Fiti from "./views/projects/Fiti.vue";
import HealthLine from "./views/projects/HealthLine.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/ePaid",
      name: "ePaid",
      component: ePaid
    },
    {
      path: "/Fiti",
      name: "Fiti",
      component: Fiti
    },
    {
      path: "/HealthLine",
      name: "HealthLine",
      component: HealthLine
    }
  ]
});
