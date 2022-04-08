<template>
  <select
    v-model="city"
    @change="onChangeCity"
    class="w-full max-w-xs select select-success"
  >
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="대구">대구</option>
  </select>
</template>
<script>
export default {
  name: 'onCahngeEvent',
  components: {},
  data() {
    return {
      city: '대구',
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
  methods: {
    onChangeCity: function () {
      alert(this.city);
    },
  },
};
</script>
