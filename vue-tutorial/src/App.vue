<template>
  <div>
    <Data />
  </div>
</template>

<script>
import Data from './components/composition-api/Data.vue';
export default {
  name: "App",
  data() {
    return {};
  },
  components: {Data},
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
