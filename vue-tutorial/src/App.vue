<template>
  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>

  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>
</template>

<script>
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";

export default {
  name: "App",
  data() {
    return {
      activeTab: "TabA",
    };
  },
  components: { TabA, TabB },
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
