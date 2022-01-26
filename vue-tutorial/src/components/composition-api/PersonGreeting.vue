<template>
  <div>hello {{ fullname }}</div>
</template>

<script>
import { computed } from "vue";
export default {
  setup(props) {
    const fullname = computed(() => {
      return `${props.firstname} ${props.lastname}`;
    });

    return { fullname };
  },
  props: ["firstname", "lastname"],
};
</script>

<style lang="scss" scoped>
</style>