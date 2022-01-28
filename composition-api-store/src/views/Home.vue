<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="counter" :style="{ color: store.state.color }">
      {{ store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ store.state.counter }}
      <sup>2</sup> = {{ store.getters.counterSquared() }}
    </div>
    <div class="buttons">
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
    <div>
      <input type="text" placeholder="enter color" v-model="color" />
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";

export default {
  name: "Home",
  setup() {
    const store = inject("store");
    //can be replaced with v-model
    const color = computed({
      get() {
        return store.state.color;
      },
      set(newValue) {
        store.methods.setColor(newValue);
      },
    });

    return {
      store,
      color,
    };
  },
};
</script>
<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
