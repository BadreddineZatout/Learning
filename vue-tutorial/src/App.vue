<template>
  <NameList>
    <template v-slot:default="slotProps">
        {{slotProps.firstname}} {{slotProps.lastname}}
    </template>
  </NameList>
  <NameList>
    <template v-slot:default="slotProps">
        {{slotProps.lastname}} {{slotProps.firstname}}
    </template>
  </NameList>
</template>

<script>
import NameList from "./components/NameList.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: { NameList },
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
