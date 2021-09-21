import { createApp } from "vue";
import App from "./App.vue";
import "@/scss/main.css";
// import router
import router from "./router";

import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);

// mixin for global function
app.mixin({
  methods: {
    //money thousands
    moneyFormat(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    //calculate discount
    calculateDiscount(product) {
      return product.price - (product.price * product.discount) / 100;
    },
  },
});
app.mount("#app");
