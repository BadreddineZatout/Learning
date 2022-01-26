<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="setName('badi')">Chnage Name</button>

    <h2> {{first}} - {{last}}</h2>
    <button @click="changeHero">Change Hero</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  setup() {
    const name = ref("badreddine");
    const state = reactive({
        first: "Bruce",
        last: "Wayne"
    })

    const setName = (value) => {
      name.value = value;
    };
    const changeHero = () => {
        state.first = "Clark";
        state.last = "kent"
    }

    return { 
        name, 
        setName,
        changeHero,
        ...toRefs(state)
    };
  },
};
</script>

<style scoped>
</style>