<template>
  <div>
    <h2>{{ username }} - {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "ComponentB",
  inject: ["username", "age"],
};
</script>

<style scoped>
</style>