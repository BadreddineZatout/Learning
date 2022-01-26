<template>
  <h2 @mouseover="increment">Hovered {{ count }} times</h2>
</template>

<script>
import useCounter from "../../hooks/useCounter";

export default {
  name: "HoverCounter",
  setup() {
    const { count, increment } = useCounter();
    return {
      count,
      increment,
    };
  },
};
</script>

<style scoped>
</style>