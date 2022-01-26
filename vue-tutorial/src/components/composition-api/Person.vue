<template>
  <div>
    <input type="text" v-model="fname" />
    <input type="text" v-model="lname" />
  </div>
  <PersonGreeting :firstname="fname" :lastname="lname" @callHeroes="callHeroes" />
</template>

<script>
import { ref } from "vue";
import PersonGreeting from "./PersonGreeting.vue";
export default {
  components: { PersonGreeting },
  setup() {
    const fname = ref("");
    const lname = ref("");
    function callHeroes(hero) {
      alert(`calling ${hero}`);
    }

    return { fname, lname, callHeroes };
  },
};
</script>
