<template>
  <div>
    <h2>Article</h2>
    <h2>{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    title: {
        type: String,
        required: true,
        default: 'Article default title'
    },
    likes: Number,
    isPublished: Boolean
  },
};
</script>

<style>
</style>