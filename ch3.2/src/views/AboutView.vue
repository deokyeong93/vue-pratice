<template>
  <PageTitle title="전달하는 값이야" />
  <!-- 이하는 동적인 전달을 해보자 -->
  <PageTitle :title="title" />
  <ChildComponent ref="first" />
</template>
<script>
import PageTitle from "../components/PageTitle.vue";
import ChildComponent from "../components/ChildComponent.vue";

export default {
  name: "sample-",
  components: { PageTitle, ChildComponent },
  data() {
    return {
      title: "동적으로 전달해보자",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$refs.first.$refs.btn.click(); // 마운트 시 클릭 이벤트 생성, ref로 직접 dom에 접근
  },
  beforeUpdate() {},
  update() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
};
</script>
