<template>
  <div>
    <button class="btn btn-primary" @click="increaseCount">Add 1</button>
    <p>The counter count is {{ count }}</p>
    <button class="btn btn-primary" @click="setCount(7)">setCount 7</button>
    <p>The counter count is {{ count }}</p>
    <button class="btn btn-primary" @click="one(), two()">one two</button>
    <p>The counter count is {{ count }}</p>
  </div>
</template>
<script>
export default {
  name: "event-click",
  components: {},
  data() {
    return {
      count: 0,
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  update() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    increaseCount() {
      this.count++;
    },
    setCount(count) {
      this.count = count;
    },
    one() {
      return alert("one");
    },
    two() {
      return alert("two");
    },
  },
};
</script>
