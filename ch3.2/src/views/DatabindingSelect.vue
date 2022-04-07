<template>
  <select v-model="city" class="select select-success w-full max-w-xs">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
  </select>
</template>
<script>
export default {
  name: "city-select",
  components: {},
  data() {
    return {
      city: "02",
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
