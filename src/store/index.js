// import vuex
import { createStore } from "vuex";
// import module
import auth from "./module/auth";
import carousel from "./module/carousel";
import category from "./module/category";
import product from "./module/product";
import cart from "./module/cart";

// create store vuex
export default createStore({
  modules: {
    auth,
    carousel,
    category,
    product,
    cart,
  },
});
