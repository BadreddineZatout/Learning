import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    color: "brown",
  },
  mutations: {
    decreaseCounter(state, payload = 1) {
      state.counter -= payload;
    },
    increaseCounter(state, payload = 1) {
      state.counter += payload;
    },
    setColor(state, payload) {
      state.color = payload;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      console.log("increase counter");
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
      });
    },
    async decreaseCounter({ commit }) {
      console.log("decrease counter");
      let { data } = await axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      );
      commit("decreaseCounter", data);
    },
    setColor({ commit }, payload) {
      commit("setColor", payload);
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
