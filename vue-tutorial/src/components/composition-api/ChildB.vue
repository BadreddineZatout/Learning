<template>
  <h2>ChildB - {{ username }}</h2>
  <h2>ChildB - {{ count }}</h2>
  <h2>ChildB - {{ firstname }} {{ lastname }}</h2>
  <button @click="increment">Increment</button>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  setup() {
    const username = inject("username", "Default username");
    const count = inject("count", 0);
    const hero = inject("hero", {});
    const increment = inject("increment");
    
    return {
      username,
      count,
      ...toRefs(hero),
      increment,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>