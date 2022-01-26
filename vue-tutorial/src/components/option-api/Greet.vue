<template>
  <div>
    <h2>Hello {{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Greetings",
  props: ['name']
};
</script>
