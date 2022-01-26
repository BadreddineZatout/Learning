<template>
  <div>
    <input type="text" v-model.lazy="firstname" />
    <input type="text" v-model.lazy="lastname" />
  </div>
  <div>
    <input type="text" v-model.lazy="fname" />
    <input type="text" v-model.lazy="lname" />
    <input type="text" v-model.lazy="options.heroName" />
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "vue";
export default {
  setup() {
    const firstname = ref("");
    const lastname = ref("");

    watch(
      [firstname, lastname],
      (newValues, oldValues) => {
        console.log(newValues, oldValues);
      },
      {
        immediate: true,
      }
    );

    const state = reactive({
      fname: "",
      lname: "",
      options: {
        heroName: "",
      },
    });

    //watch reactive state in this case oldValue and newValue are the same
    /*watch(state, (newValue, oldValue) => {
        console.log(newValue, oldValue);
    });*/

    //this fixes it :D
    /*watch(
      () => {
        return { ...state };
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );*/

    //to watch only one property
    /*watch(
      () => state.fname,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );*/
    //deep watcher
    watch(
      () => state.options,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      {
        deep: true,
      }
    );

    return { firstname, lastname, ...toRefs(state) };
  },
};
</script>

<style scoped>
</style>