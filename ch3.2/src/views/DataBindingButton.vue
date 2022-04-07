<template>
  <div class="form-control">
    <div class="input-group">
      <input
        type="text"
        placeholder="입력하시오"
        v-model="textValue"
        class="input input-bordered"
      />
      <button class="btn" :disabled="textValue === ''">등록</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "vue-button",
  components: {},
  data() {
    return {
      textValue: "",
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
