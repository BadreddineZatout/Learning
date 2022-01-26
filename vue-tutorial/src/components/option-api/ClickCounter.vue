<template>
  <div>
    <button @click="increment">Clicked {{ count }} times</button>
  </div>
</template>

<script>
import CounterMixing from "../../mixings/counter";

export default {
  name: "ClickCounter",
  mixins: [CounterMixing]
};
</script>

<style scoped>
</style>