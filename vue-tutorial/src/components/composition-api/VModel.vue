<template>
  <div>
    <input type="text" placeholder="Hero Name"  v-model="heroname"/>
    <input type="text" placeholder="First Name"  v-model="firstname" />
    <input type="text" placeholder="Last Name"  v-model="lastname" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  setup() {
    const heroname = ref("");
    const state = reactive({
      firstname: "",
      lastname: "",
    });

    return { heroname, ...toRefs(state) };
  },
};
</script>

<style scoped>
</style>