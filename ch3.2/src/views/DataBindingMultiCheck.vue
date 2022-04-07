<template>
  <div class="form-control">
    <label class="flex justify-center label cursor-pointer">
      <span class="label-text pr-4">서울</span>
      <input type="checkbox" class="checkbox" v-model="cities" value="서울" />
    </label>
    <label class="flex justify-center label cursor-pointer">
      <span class="label-text pr-4">부산</span>
      <input type="checkbox" class="checkbox" v-model="cities" value="부산" />
    </label>
    <label>
      <span class="label-text pr-4">울산</span>
      <input type="checkbox" class="checkbox" v-model="cities" value="울산" />
    </label>
  </div>

  <div>
    {{ cities }}
  </div>
</template>
<script>
export default {
  name: "checkbox-2",
  components: {},
  data() {
    return {
      cities: [],
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
