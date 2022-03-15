import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: "default",
  },
  mutations: {
    setFilter: function (state, payload) {
      state.filter = payload;
    },
  },
  actions: {
    setFilterAction: function ({ commit }, payload) {
      commit("setFilter", payload);
    },
  },
  getters: {
    getFilter: function (state) {
      return state.filter;
    },
  },
});
