import Api from "@/api/Api.js";

const category = {
  namespaced: true,
  state: {
    headerCategories: [],
    allCategories: [],
    productsCategory: [],
    categoryShow: {},
  },
  mutations: {
    GET_CATEGORY_HEADER(state, category) {
      state.headerCategories = category;
    },
    GET_ALL_CATEGORIES(state, data) {
      state.allCategories = data;
    },
    GET_PRODUCTS_ON_CATEGORY(state, products) {
      state.productsCategory = products;
    },
    GET_CATEGORY_SHOW(state, category) {
      state.categoryShow = category;
    },
  },
  actions: {
    headerCategory({ commit }) {
      Api.get("/categories-home")
        .then((response) => {
          commit("GET_CATEGORY_HEADER", response.data.categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    allCategories({ commit }) {
      Api.get("/categories-all")
        .then((response) => {
          commit("GET_ALL_CATEGORIES", response.data.categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    productsCategory({ commit }, slug) {
      Api.get(`/category-show/${slug}`)
        .then((response) => {
          commit("GET_PRODUCTS_ON_CATEGORY", response.data.product);
          commit("GET_CATEGORY_SHOW", response.data.category);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getHeaderCategory(state) {
      return state.headerCategories;
    },
    getAllCategories(state) {
      return state.allCategories;
    },
    getProductsCategory(state) {
      return state.productsCategory;
    },
    getCategoryShow(state) {
      return state.categoryShow;
    },
  },
};

export default category;
