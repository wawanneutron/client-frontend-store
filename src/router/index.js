// import vue router
import { createRouter, createWebHistory } from "vue-router";

// define a routes
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("@/views/Category.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/Product.vue"),
  },
  {
    path: "/customer/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/Index.vue"),
  },
  {
    path: "/customer/dashboard/order",
    name: "order",
    component: () => import("@/views/order/Index.vue"),
  },
  {
    path: "/customer/dashboard/order-detail",
    name: "detail-order",
    component: () => import("@/views/order/Detail.vue"),
  },
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
