<template>
  <input
    type="number"
    v-model.number="valueModel"
    class="input input-bordered w-full max-w-xs"
  />
</template>
<script>
export default {
  name: "input_number",
  components: {},
  data() {
    return {
      valueModel: 3,
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
