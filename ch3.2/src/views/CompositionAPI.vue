<template>
  <div>
    <h2 class="text-4xl">Calculator</h2>
    <div>
      <!-- <input type="text" v-model="state.num1" @keyup="plusNumbers" /> -->
      <input type="text" v-model="num1" />
      <span>+</span>
      <!-- <input type="text" v-model="state.num2" @keyup="plusNumbers" /> -->
      <input type="text" v-model="num2" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>
<script>
// import { computed, reactive, toRefs } from 'vue';
// function plusCalculator() {
//   let state = reactive({
//     num1: 0,
//     num2: 0,
//     result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
//   });

//   return toRefs(state);
// }

import { plusCalculator } from '../common';

export default {
  name: 'calculator-export',
  setup() {
    let { num1, num2, result } = plusCalculator();
    return {
      num1,
      num2,
      result,
    };
  },
};
</script>
