import Vue from "vue";
import Vuex from "vuex";
import { BASE_URL } from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fruitList: [],
    fruitNotFound: false,
    fruitListError: false
  },
  getters: {
    fruitList: state => state.fruitList,
    fruitNotFound: state => state.notFound,
    fruitListError: state => state.fruitListError
  },
  mutations: {
    setFruit(state, payload) {
      Vue.set(state, "fruitList", payload);
    },
    setNotFound(state, payload) {
      Vue.set(state, "notFound", payload);
    },
    setError(state, payload) {
      Vue.set(state, "fruitListError", payload);
    }
  },
  actions: {
    async getFruit({ commit }, fruit) {
      // Reset
      commit("setNotFound", false);
      commit("setError", false);

      try {
        const response = await fetch(`${BASE_URL}/api/fruits?fruit=${fruit}`);
        if (response.status === 200) {
          const fruitList = await response.json();
          commit("setFruit", fruitList);
        } else if (response.status === 404) {
          commit("setFruit", []);
          commit("setNotFound", true);
        } else {
          commit("setError", true);
        }
      } catch (error) {
        commit("setError", true);
      }
    }
  }
});
