<template>
  <div>
    <h3>{{ greet }}</h3>
    <h3>{{ reactiveGreet }}</h3>
    <h3>{{ firstname }} - {{ lastname }}</h3>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "Data",
  setup() {
    const firstname = ref("badreddine");
    const lastname = ref("zatout");
    const greet = `hello ${firstname.value} ${lastname.value}`;
    console.log(greet);
    const state = reactive({
      firstname: "badi",
      lastname: "zatout",
    });
    state.firstname = 'zakaria';
    // const reactiveGreet = `Hello ${state.firstname} ${state.lastname}`;

    return toRefs(state)
  },
};
</script>

<style scoped>
</style>