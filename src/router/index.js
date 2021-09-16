// import vue router
import { createRouter, createWebHistory } from "vue-router";

// define a routes
const routes = [
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/Login.vue"),
  },
];

// create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
