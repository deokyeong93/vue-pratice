<template>
  <button class="btn bg-blue-900" @click="checkChild">어른 클릭</button>
  <ChildComponent5 ref="five" />
</template>
<script>
import ChildComponent5 from "../components/ChildComponent5.vue";

export default {
  name: "child-parent",
  components: { ChildComponent5 },
  data() {
    return {
      sampleDate: "",
    };
  },
  computed: {
    message() {
      return this.$refs.five.msg;
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
  methods: {
    checkChild() {
      alert(this.message);
    },
  },
};
</script>
