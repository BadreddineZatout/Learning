<template>
    <h2 @mouseover="increment">Hovered {{ count }} times</h2>
</template>

<script>
import CounterMixing from "../mixings/counter";

export default {
  name: "HoverCounter",
  data() {
      return {
          count: 100
      }
  },
  mixins: [CounterMixing]
  
};
</script>

<style scoped>
</style>