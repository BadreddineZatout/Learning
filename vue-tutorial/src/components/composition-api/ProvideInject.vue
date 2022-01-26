<template>
  <button @click="increment">Increment</button>
  <ChildA />
</template>

<script>
import ChildA from "./ChildA.vue";
import { provide, ref, reactive, toRefs } from "vue";
export default {
  components: { ChildA },
  setup() {
    provide("username", "Badreddine");
    const count = ref(0);
    const state = reactive({
      firstname: "bruce",
      lastname: "wayne",
    });
    provide("count", count);
    provide("hero", state);

    const increment = () => {
      count.value++;
    };
    provide("increment", increment);

    return { count, ...toRefs(state), increment };
  },
};
</script>

<style lang="scss" scoped>
</style>