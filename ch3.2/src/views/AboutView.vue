<template>
  <PageTitle title="전달하는 값이야" />
  <!-- 이하는 동적인 전달을 해보자 -->
  <PageTitle :title="title" />
  <!-- 숫자형을 전달해보자 -->
</template>
<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "sample-",
  components: { PageTitle },
  data() {
    return {
      title: "동적으로 전달해보자",
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
