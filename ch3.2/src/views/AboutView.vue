<template>
  <!-- <PageTitle title="전달하는 값이야" /> -->
  <!-- 이하는 동적인 전달을 해보자 -->
  <!-- <PageTitle :title="title" /> -->
  <PageTitle>
    <template #default> 디스코 팡팡 </template>
  </PageTitle>
  <ChildComponent1 />
  <ChildComponent ref="first" />
  <ChildComponent2 ref="second" />
  <ChildComponent3 ref="third" />
  <button class="btn" @click="makeChildMsg">클릭</button>
</template>
<script>
import PageTitle from "../components/PageTitle.vue";
import ChildComponent from "../components/ChildComponent.vue";
import ChildComponent2 from "../components/ChildComponent2.vue";
import ChildComponent3 from "../components/ChildComponent3.vue";
import ChildComponent1 from "../components/ChildComponent1.vue";

export default {
  name: "sample-",
  components: {
    PageTitle,
    ChildComponent,
    ChildComponent1,
    ChildComponent2,
    ChildComponent3,
  },
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
    this.$refs.second.callFromParent();
  },
  provide() {
    return {
      itemLength: 4,
    };
  },
  beforeUpdate() {},
  update() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    makeChildMsg() {
      this.$refs.third.msg = "지금은 입력이 되어있을거야";
    },
  },
};
</script>
