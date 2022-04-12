<template>
  <SlotModalLayout>
    <template v-slot:header>
      <h1 class="text-4xl">팝업 타이틀</h1>
    </template>
    <template v-slot:default>
      <p>팝업 콘텐츠1</p>
      <p>팝업 콘텐츠2</p>
    </template>
    <template v-slot:footer>
      <button class="btn">닫기</button>
    </template>
  </SlotModalLayout>
</template>
<script>
import SlotModalLayout from "../components/SlotModalLayout.vue";

export default {
  name: "use-slot",
  components: { SlotModalLayout },
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
