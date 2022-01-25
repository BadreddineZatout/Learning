<template>
  <h3 v-for="name in names" :key="name.id">
    <slot :firstname="name.firstname" :lastname="name.lastname"></slot>
  </h3>
</template>

<script>
export default {
  name: "NameList",
  data() {
    return {
      names: [
        {
          id: 1,
          firstname: "Bruce",
          lastname: "Wayne",
        },
        {
          id: 2,
          firstname: "Clark",
          lastname: "Kent",
        },
        {
          id: 3,
          firstname: "Badreddine",
          lastname: "Zatout",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>