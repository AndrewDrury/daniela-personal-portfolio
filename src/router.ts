import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ePaid from "./views/projects/ePaid.vue";
import Fiti from "./views/projects/Fiti.vue";
import HealthLine from "./views/projects/HealthLine.vue";

Vue.use(Router);

export default new Router({
  // mode: "history", //If commented out, use hash mode
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
    },
    {
      path: "/Projects",
      name: "Projects",
      component: Home
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: "smooth"
      });
    } else {
      return { x: 0, y: 0 };
    }
  }
});
