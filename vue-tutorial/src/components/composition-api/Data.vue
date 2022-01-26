<template>
  <div>
    <h3>{{ firstname }}</h3>
    <h3>{{ greet }}</h3>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Data",
  setup() {
    const firstname = ref("badreddine zatout");
    firstname.value = "zakaria";
    const greet = `hello ${firstname.value}`;
    return {
      firstname,
      greet,
    };
  },
};
</script>

<style scoped>
</style>