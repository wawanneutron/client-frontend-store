// import vuex
import { createStore } from "vuex";
// import module
import auth from "./module/auth";
import carousel from "./module/carousel";
import product from "./module/product";
import category from "./module/category";

// create store vuex
export default createStore({
  modules: {
    auth,
    carousel,
    product,
    category,
  },
});
