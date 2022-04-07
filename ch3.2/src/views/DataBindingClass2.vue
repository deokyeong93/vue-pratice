<template>
  <div class="w-full" :class="[activeClass, errorClass]">Class Binding</div>
</template>
<script>
export default {
  name: "class-bind",
  components: {},
  data() {
    return {
      activeClass: "active",
      errorClass: "error",
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
<style scoped>
.active {
  background-color: yellow;
  font-weight: bold;
}
.error {
  color: red;
}
</style>
