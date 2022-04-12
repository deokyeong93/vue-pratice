<template>
  <div>하하하</div>
</template>
<script>
export default {
  name: "child_4",
  components: {},
  data() {
    return {
      msg: "자식 컴포넌트로부터 보내는 메시지",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$emit("send-message", this.msg);
  },
  beforeUpdate() {},
  update() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
};
</script>
