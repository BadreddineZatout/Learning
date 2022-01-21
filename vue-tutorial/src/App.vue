<template>
  <div>Hello {{ name }}</div>
  <div v-text="nom"></div>
  <h2 :id="headingId" class="underline">Heading</h2>
  <button :disabled="isDisabled">Bind</button>
  <h2 class="underline" :class="status">Status</h2>
  <h2 :class="isPromoted && 'promoted'">promoted movie</h2>
  <h2 :class="isSoldOut ? 'sold-out' : ''">Soldout? movie</h2>
  <h2 :class="['new', 'promoted']">newly promoted movie</h2>
  <h2 :style="{
    color: highlightColor,
    'font-size': headerSize + 'px'
  }">Inline Style</h2>
  <h2 :style="headerStyleObject">Object Style</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Badreddine",
      nom: "Zatout",
      headingId: "heading",
      isDisabled: true,
      status: "danger",
      isPromoted: true,
      isSoldOut: true,
      highlightColor: 'orange',
      headerSize: 50,
      headerStyleObject: {
        color: 'orange',
        fontSize: 50 + 'px'
      }
    };
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
