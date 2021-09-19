import Api from "@/api/Api.js";

const carousel = {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    GET_CAROUSEL(state, carousel) {
      state.data = carousel;
    },
  },
  actions: {
    carousel({ commit }) {
      Api.get("/sliders")
        .then((response) => {
          commit("GET_CAROUSEL", response.data.sliders);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getCarousel(state) {
      return state.data;
    },
  },
};

export default carousel;
