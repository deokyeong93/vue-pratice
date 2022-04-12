<template>
  <div></div>
</template>
<script>
export default {
  name: "ChildComponent2",
  components: {},
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
  methods: {
    callFromParent() {
      console.log("부모 컴포넌트에서 직접 호출한 함수, 이거 22");
    },
  },
};
</script>
