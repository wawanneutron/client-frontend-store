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
    moneyFormat(number) {
      let reverse = number
          .toString()
          .split("")
          .reverse()
          .join(""),
        thousands = reverse.match(/\d{1,3}/g);
      thousands = thousands
        .join(".")
        .split("")
        .reverse()
        .join("");
      return thousands;
    },

    //calculate discount
    calculateDiscount(product) {
      return product.price - (product.price * product.discount) / 100;
    },
  },
});
app.mount("#app");
