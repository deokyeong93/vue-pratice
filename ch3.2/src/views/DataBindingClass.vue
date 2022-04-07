<template>
  <div class="container" :class="{ active: isActive, 'text-error': hasError }">
    Class Binding
  </div>
</template>
<script>
export default {
  name: "class-bind",
  components: {},
  data() {
    return {
      isActive: false,
      hasError: true,
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
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-error {
  color: red;
}
</style>
