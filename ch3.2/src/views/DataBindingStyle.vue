<template>
  <div class="" :style="active">Class Binding</div>
  <div class="" :style="[active, error]">Class Binding</div>
</template>
<script>
export default {
  name: "class-bind",
  components: {},
  data() {
    return {
      active: {
        backgroundColor: "yellow",
        fontWeight: "bold",
      },
      error: {
        color: "red",
      },
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
  methods: {},
};
</script>
