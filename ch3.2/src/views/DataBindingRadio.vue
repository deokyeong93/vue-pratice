<template>
  <div class="form-control">
    <label class="label flex justify-center cursor-pointer">
      <span class="label-text pr-4">서울</span>
      <input
        v-model="picked"
        v-bind:value="city1"
        type="radio"
        name="radio-4"
        class="radio radio-accent"
      />
    </label>
    <label class="label flex justify-center cursor-pointer">
      <span class="label-text pr-4">부산</span>
      <input
        v-model="picked"
        v-bind:value="city2"
        type="radio"
        name="radio-4"
        class="radio radio-accent"
      />
    </label>
    <label class="label flex justify-center cursor-pointer">
      <span class="label-text pr-4">대구</span>
      <input
        v-model="picked"
        v-bind:value="city3"
        type="radio"
        name="radio-4"
        class="radio radio-accent"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "radio-check",
  components: {},
  data() {
    return {
      picked: "",
      city1: "서울",
      city2: "부산",
      city3: "대구",
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
