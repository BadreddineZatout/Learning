<template>
  <h2>Volume Tracker (0-20)</h2>
  <h2>Current Volume - {{ volume }}</h2>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>
  <div>
    <input type="text" v-model="movie" />
    <input type="text" v-model="movieInfo.title" />
    <input type="text" v-model="movieInfo.actor" />
  </div>
  <button @click="movieList.push('superman')">add movie</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      volume: 0,
      movie: "",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["Batman", "Spider-man"],
    };
  },
  methods: {},
  computed: {},
  watch: {
    volume(newValue, oldValue) {
      if (newValue >= 16 && newValue > oldValue) alert("high volume");
    },
    movie: {
      handler(newValue) {
        console.log(newValue);
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log(newValue.title, newValue.actor);
      },
      deep: true,
    },
    movieList: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
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
