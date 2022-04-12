<template>
  <button class="btn" @click="childFunc" ref="btn">
    버튼을 누르자, 자식 컴포넌트의 데이터 변경
  </button>
</template>
<script>
export default {
  name: "child-parent",
  components: {},
  data() {
    return {
      msg: "메시지",
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
    childFunc() {
      this.msg = "변경된 메시지";
    },
  },
};
</script>
