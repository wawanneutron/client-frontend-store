// import vuex
import { createStore } from "vuex";
// import module
import auth from "./module/auth";

// create store vuex
export default createStore({
  modules: {
    auth,
  },
});
