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
    path: "/management",
    name: "Management",
    component: () => import("@/views/management/Index.vue")
  },
  {
    path: "/lists",
    name: "All Party and Event",
    component: () => import("@/views/party-event/Lists.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
