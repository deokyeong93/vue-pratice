<template>
  <div>깊이가 2</div>
</template>
<script>
export default {
  name: "child_2",
  components: {},
  data() {
    return {
      sampleDate: "",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    console.log("어린이 2 ", this.itemLength);
  },
  beforeUpdate() {},
  update() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
  inject: ["itemLength"],
};
</script>
