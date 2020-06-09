import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/authentication/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/authentication/Signup.vue")
  },
  {
    path: "/home",
    name: "Home",
    meta: { layout: true },
    component: () => import("@/views/home/Index.vue")
  },
  {
    path: "/lists",
    name: "All Party and Event",
    meta: { layout: true },
    component: () => import("@/views/party-event/Lists.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
