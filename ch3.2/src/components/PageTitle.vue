<template>
  <!-- <h2 class="text-4xl">{{ title }}</h2> -->
  <h2><slot></slot></h2>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "페이지 제목을 써주세요",
    },
    // numberProps: Number,
    // propsC: {
    //   type: String,
    //   required: true,
    // },
    // propsObj: {
    //   type: Object,
    //   default() {
    //     return { message: "message" };
    //   },
    // },
    // propsVal: {
    //   validator(value) {
    //     console.log("propsVal=>", value);
    //     return ["success", "warning", "danger"].indexOf(value) !== -1;
    //   },
    // },
    // propsFunc: {
    //   type: Function,
    //   default() {
    //     return "Default Function";
    //   },
    // },
  },
};
</script>
