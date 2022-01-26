<template>
  <div>
    <Watch />
  </div>
</template>

<script>
import Watch from './components/composition-api/Watch.vue';
export default {
  name: "App",
  components: {Watch},
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
