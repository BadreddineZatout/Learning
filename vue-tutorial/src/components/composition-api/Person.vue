<template>
  <div>
      <input type="text" v-model="fname">
      <input type="text" v-model="lname">
  </div>
  <PersonGreeting :firstname="fname" :lastname="lname" />
</template>

<script>
import { ref } from "vue";
import PersonGreeting from './PersonGreeting.vue'
export default {
    components: {PersonGreeting},
  setup() {
    const fname = ref("");
    const lname = ref("");

    return { fname, lname };
  },
};
</script>
