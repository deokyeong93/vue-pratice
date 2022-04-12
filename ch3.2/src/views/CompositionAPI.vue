<template>
  <div>
    <h2 class="text-4xl">Calculator</h2>
    <div>
      <!-- <input type="text" v-model="state.num1" @keyup="plusNumbers" /> -->
      <input type="text" v-model="state.num1" />
      <span>+</span>
      <!-- <input type="text" v-model="state.num2" @keyup="plusNumbers" /> -->
      <input type="text" v-model="state.num2" />
      <span>=</span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from "vue";
export default {
  name: "calculator-ex",
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
    });

    // function plusNumbers() {
    //   console.log(state.num1);
    //   state.result = parseInt(state.num1) + parseInt(state.num2);
    // }

    return {
      state,
      // plusNumbers,
    };
  },
};
</script>
