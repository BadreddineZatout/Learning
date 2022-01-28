import { reactive, readonly } from "vue";

const state = reactive({
  counter: 0,
  color: "brown",
});

const methods = {
  increaseCounter() {
    state.counter++;
  },
  decreaseCounter() {
    state.counter--;
  },
  setColor(color) {
    state.color = color;
  },
};

const getters = {
  counterSquared() {
    return state.counter * state.counter;
  },
};

export default {
  state: readonly(state),
  methods,
  getters,
};
