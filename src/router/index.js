// import vue router
import { createRouter, createWebHistory } from "vue-router";
// import store vuex
import store from "@/store";

// define a routes
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/product/:slug",
    name: "detail",
    component: () => import("@/views/Show.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("@/views/category/Index.vue"),
  },
  {
    path: "/category/:slug",
    name: "category",
    component: () => import("@/views/category/Show.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/Product.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/cart/Index.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/customer/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/Index.vue"),
    meta: {
      requiresAuth: true,
    },
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

// define route for handle authentication
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // cek nilai dari getters isLoggedIn di module auth
    if (store.getters["auth/isLoggedIn"]) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
