<template>
  <h1>Full Name: {{ fullname }}</h1>
</template>
<script>
export default {
  name: 'computed_test',
  components: {},
  data() {
    return {
      firstName: 'DeokHyeong',
      lastName: 'Heo',
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
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
