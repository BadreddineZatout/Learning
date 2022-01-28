<template>
    <h2>Mutations</h2>
    <div class="buttons">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.commit('increaseCounter')">+</button>
    </div>
    <h2>Actions</h2>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>