<template>
  <div>hello {{ fullname }}</div>
  <button @click="sendEvent">call Heros</button>
</template>

<script>
import { computed } from "vue";
export default {
  setup(props, context) {
    const fullname = computed(() => {
      return `${props.firstname} ${props.lastname}`;
    });
    const sendEvent = () => {
      context.emit("callHeroes", fullname.value);
    };

    return { fullname, sendEvent };
  },
  props: ["firstname", "lastname"],
  emits: ["callHeroes"],
};
</script>

<style lang="scss" scoped>
</style>