import Api from "@/api/Api.js";

const product = {
  namespaced: true,

  state: {
    terlaris: [],
    homeProducts: [],
    allProducts: [],
  },
  mutations: {
    GET_TERLARIS(state, product) {
      state.terlaris = product;
    },
    GET_HOME_PRODUCTS(state, product) {
      state.homeProducts = product;
    },
    GET_PRODUCTS_ALL(state, data) {
      state.allProducts = data;
    },
  },
  actions: {
    terlaris({ commit }) {
      Api.get("/products-terlaris")
        .then((response) => {
          commit("GET_TERLARIS", response.data.terlaris);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    homeProducts({ commit }) {
      Api.get("/products-home")
        .then((response) => {
          commit("GET_HOME_PRODUCTS", response.data.product);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductsAll({ commit }) {
      Api.get("/products")
        .then((response) => {
          commit("GET_PRODUCTS_ALL", response.data.product);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getTerlaris(state) {
      return state.terlaris;
    },
    getHomeProducts(state) {
      return state.homeProducts;
    },
    getAllProducts(state) {
      return state.allProducts;
    },
  },
};

export default product;
