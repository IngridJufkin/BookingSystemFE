import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    date: new Date(),
    id: "",
    time: ""
  },
  mutations: {
    setName(state, payload  ) {
      state.name= payload;
    },
    setDate(state, newPayload ) {
      state.date = newPayload;
    },
    setID(state, newPayload ) {
      state.id = newPayload;
    },
    setTime(state, newPayload ) {
      state.time = newPayload;
    },
  },
  actions: {},
  modules: {},
});