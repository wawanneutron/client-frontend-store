// import vuex
import { createStore } from "vuex";
// import module
import auth from "./module/auth";
import product from "./module/product";

// create store vuex
export default createStore({
  modules: {
    auth,
    product,
  },
});
