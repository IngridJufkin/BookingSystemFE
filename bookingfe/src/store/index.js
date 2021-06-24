import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    date: new Date(),
  },
  mutations: {
    setName(state, payload  ) {
      state.name= payload;
    },
    setDate(state, newPayload ) {
      state.date = newPayload;
    },
  },
  actions: {},
  modules: {},
});