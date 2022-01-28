<template>
  <div>
    <input type="text" placeholder="Enter Color code" v-model="color" />
  </div>
</template>

<script>
export default {
  computed: {
    color: {
      get() {
        return this.$store.state.color;
      },
      set(newValue) {
        this.$store.commit("setColor", newValue);
      },
    },
  },
};
</script>

<style scoped>
</style>