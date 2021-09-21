import Api from "@/api/Api.js";

const cart = {
  namespaced: true,
  state: {
    cart: [],
    total: 0,
  },
  mutations: {
    GET_CART(state, cart) {
      state.cart = cart;
    },
    TOTAL_CART(state, total) {
      state.total = total;
    },
  },
  actions: {
    addToCart({ commit }, { price, product_id, weight, quantity }) {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      Api.defaults.headers.common["Authorization"] = "Bearer " + token;

      Api.post("/cart", {
        price: price,
        product_id: product_id,
        weight: weight,
        quantity: quantity,
        customer_id: user.id,
      })
        .then(() => {
          //   get data cart
          Api.get("/cart").then((response) => {
            commit("GET_CART", response.data.cart);
          });
          //   get total
          Api.get("/cart/total").then((response) => {
            commit("TOTAL_CART", response.data.total);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cartCount({ commit }) {
      const token = localStorage.getItem("token");
      Api.defaults.headers.common["Authorization"] = "Bearer " + token;

      //   get total
      Api.get("/cart/total")
        .then((response) => {
          commit("TOTAL_CART", response.data.total);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cartTotal({ commit }) {
      const token = localStorage.getItem("token");
      Api.defaults.headers.common["Authorization"] = "Bearer " + token;

      Api.get("/cart")
        .then((response) => {
          commit("GET_CART", response.data.cart);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getTotalCart(state) {
      return state.total;
    },
    getCartCount(state) {
      return state.cart.length;
    },
  },
};

export default cart;
