<template>
  <div>테스트 버블</div>
  <ChildComponent4 @send-message="sendMessage" />
</template>
<script>
import ChildComponent4 from "../components/ChildComponent4.vue";

export default {
  name: "bubble_event",
  components: { ChildComponent4 },
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
    sendMessage(data) {
      console.log(data);
    },
  },
};
</script>
