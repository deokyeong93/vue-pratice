<template>
  <input
    type="text"
    v-model="valueModel"
    class="input input-bordered w-full max-w-xs text-slate-100"
  />
</template>
<script>
export default {
  name: "input_text",
  components: {},
  data() {
    return {
      valueModel: "한국인 입니다",
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
