import Api from "@/api/Api.js";

const category = {
  namespaced: true,
  state: {
    headerCategories: [],
    allCategories: [],
  },
  mutations: {
    GET_CATEGORY_HEADER(state, category) {
      state.headerCategories = category;
    },
    GET_ALL_CATEGORIES(state, data) {
      state.allCategories = data;
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
  },
  getters: {
    getHeaderCategory(state) {
      return state.headerCategories;
    },
    getAllCategories(state) {
      return state.allCategories;
    },
  },
};

export default category;
