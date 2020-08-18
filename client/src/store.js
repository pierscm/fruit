import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fruitList: ["banana", "apple"]
  },
  getters: {
    fruitList: state => state.fruitList
  },
  mutations: {}
});
