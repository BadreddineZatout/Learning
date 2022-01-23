<template>
  <div>fullname - {{ fullname }}</div>
  <button v-on:click="fullname = 'badi dahmani'">change name</button>
  <h2>Total - {{ total }}</h2>
  <template v-for="item in expensiveItems" :key="item.id">
    <h2>{{ item.title }} {{ item.price }}</h2>
  </template>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstname: "badreddine",
      lastname: "zatout",
      items: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 1,
          title: "phone",
          price: 400,
        },
        {
          id: 1,
          title: "Bike",
          price: 50,
        },
      ],
    };
  },
  methods: {},
  computed: {
    fullname: {
      get() {
        return this.firstname + " " + this.lastname;
      },
      set(value) {
        const names = value.split(' ');
        this.firstname = names[0];
        this.lastname = names[1];
      },
    },
    total() {
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
    expensiveItems() {
      return this.items.filter((item) => item.price > 100);
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
