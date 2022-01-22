<template>
  <h2>{{ name }}</h2>
  <div>
    <button v-on:mouseover="name='batman'">change name</button>
  </div>
  <h2>{{ count }}</h2>
  <div>
    <button @click="increment()">increment</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: 'BAdreddine',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count +=1;
    }
  }
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
