<template>
  <div>
    <ComponentA />
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";

export default {
  name: "App",
  data() {
    return {
      age: 52,
    };
  },
  components: { ComponentA },
  provide() {
    return {
      username: "badreddine",
      age: this.age,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
