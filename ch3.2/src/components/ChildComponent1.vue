<template>
  <div>깊이는 1</div>
  <ChildChildComponent />
</template>
<script>
import ChildChildComponent from "../components/ChildChildComponent.vue";
export default {
  name: "child_1",
  components: { ChildChildComponent },
  data() {
    return {
      sampleDate: "",
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
