<template>
  <div class="form-control">
    <label class="flex justify-center label cursor-pointer">
      <span class="label-text pr-4">{{ isChecked }}</span>
      <input
        type="checkbox"
        class="checkbox"
        v-model="isChecked"
        true-value="yes"
        false-value="no"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "checkbox-1",
  components: {},
  data() {
    return {
      isChecked: "",
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
