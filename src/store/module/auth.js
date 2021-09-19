import Api from "../../api/Api";

const auth = {
  // set namspaced true
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || {},
  },
  mutations: {
    AUTH_SUCCESS(state, token, user) {
      state.token = token;
      state.user = user;
    },
    GET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    register({ commit }, user) {
      // define callback promise
      return new Promise((resolve, reject) => {
        // kirim data ke server
        Api.post("/register", {
          name: user.name,
          email: user.email,
          password: user.password,
          password_confirmation: user.confirm,
        })
          .then((response) => {
            const token = response.data.token;
            const user = response.data.user;

            //set localStorage untuk menyimpan token dan data user
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            Api.defaults.headers.common["Authorization"] = "Bearer " + token;

            // kirim data ke mutation
            commit("AUTH_SUCCESS", token, user);
            resolve(response);
          })
          .catch((error) => {
            localStorage.removeItem("token");
            reject(error.response.data);
          });
      });
    },

    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        Api.post("/login", {
          email: user.email,
          password: user.pass,
        })
          .then((response) => {
            const token = response.data.token;
            const user = response.data.user;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            // set default header axios dengan token
            Api.defaults.headers.common["Authorization"] = "Bearer " + token;

            commit("AUTH_SUCCESS", token, user);
            commit("GET_USER", user);

            resolve(response);
          })
          .catch((error) => {
            localStorage.removeItem("token");
            // reject ke komponent dengan hasil response
            reject(error.response.data);
          });
      });
    },

    // action getUser
    getUser({ commit }) {
      // ambil data token dari localStorage
      const token = localStorage.getItem("token");

      Api.defaults.headers.common["Authorization"] = "Bearer " + token;
      Api.get("/user").then((response) => {
        // commit ke mutation GET_USER dengan hasil response
        commit("GET_USER", response.data.user);
      });
    },

    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      //delete header axios
      delete Api.defaults.headers.common["Authorization"];
    },
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    // LoggedIn
    isLoggedIn(state) {
      return state.token; //return dengan data token
    },
  },
};
export default auth;