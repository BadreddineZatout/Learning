<template>
  <Greet name='badreddine' />
  <Greet name='Zakaria' />
  <Greet :name='name' />
  <Article title="Article Title" :likes='50' />
</template>

<script>
import Greet from "./components/Greet.vue";
import Article from './components/Article';

export default {
  name: "App",
  data() {
    return {
      name: 'badro'
    }
  },
  components: {
    Greet,
    Article
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.sold-out {
  color: red;
}
</style>
