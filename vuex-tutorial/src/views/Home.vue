<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <CounterSquared />
    <Buttons />
    <Color />
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue";
import Color from '../components/Color.vue';
import Counter from "../components/Counter.vue";
import CounterSquared from "../components/CounterSquared.vue";

export default {
  name: "Home",
  components: { Counter, CounterSquared, Buttons, Color },
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
