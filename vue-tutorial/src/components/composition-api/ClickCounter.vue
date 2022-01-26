<template>
  <div>
    <button @click="increment">Clicked {{ count }} times</button>
  </div>
</template>

<script>
import useCounter from "../../hooks/useCounter";
export default {
  name: "ClickCounter",
  setup() {
    const { count, increment } = useCounter(10, 5);
    return {
      count,
      increment,
    };
  },
};
</script>

<style scoped>
</style>