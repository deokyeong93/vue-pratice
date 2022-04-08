<template>
  <h1>Full Name: {{ fullName }}</h1>
  <input
    class="w-full max-w-xs input input-bordered"
    type="text"
    v-model="firstName"
  />
  <input
    class="w-full max-w-xs input input-bordered"
    type="text"
    v-model="lastName"
  />
</template>
<script>
export default {
  name: 'computed_test',
  components: {},
  data() {
    return {
      firstName: 'DeokHyeong',
      lastName: 'Heo',
      fullName: '',
    };
  },
  computed: {},
  watch: {
    firstName() {
      console.log('firstName함수 실행');
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      console.log('lastName함수 실행');
      this.fullName = this.firstName + ' ' + this.lastName;
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
