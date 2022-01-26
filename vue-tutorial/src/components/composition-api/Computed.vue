<template>
  <div>
    <input type="text" placeholder="First Name" v-model="fname" />
    <input type="text" placeholder="Last Name" v-model="lname" />
    <h2>Hello {{ fullname }}</h2>
  </div>
  <div>
    <input type="text" placeholder="First Name" v-model="firstname" />
    <input type="text" placeholder="Last Name" v-model="lastname" />
    <h2>Hello {{ fullreactivename }}</h2>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from "vue";
export default {
  name: "Computed",
  setup() {
    const fname = ref("");
    const lname = ref("");
    const fullname = computed(() => {
      return `${fname.value} ${lname.value}`;
    });
    const state = reactive({
      firstname: "",
      lastname: "",
    });
    const fullreactivename = computed(() => {
      return `${state.firstname} ${state.lastname}`;
    });

    return {
      fname,
      lname,
      fullname,
      ...toRefs(state),
      fullreactivename,
    };
  },
};
</script>

<style scoped>
</style>