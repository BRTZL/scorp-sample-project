import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      firstName: "Bartu",
      middleName: "",
      lastName: "OZEL",
      email: "bartuozel@gmail.com"
    },
    loginDialog: false,
    drawer: false,
  },
  getters: {
    fullName(state) {
      if (state.user) {
        return (
          state.user.firstName +
          " " +
          (state.user.middleName && (
            state.user.middleName +
            " ")) +
          state.user.lastName
        );
      } else {
        return "";
      }
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    showLoginDialog(state) {
      state.loginDialog = true;
    },
    hideLoginDialog(state) {
      state.loginDialog = false;
    },
    showDrawer(state) {
      state.drawer = true;
    },
    hideDrawer(state) {
      state.drawer = false;
    }
  },
  actions: {
  },
  modules: {
  },
});
