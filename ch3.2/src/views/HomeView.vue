<template>
  <div class="home">
    <img alt="Vue logo" :src="image" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      image:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfMjcg%2FMDAxNjI3NjMzODUwMDY5.k93yEOLnRFih7UrQKysypQZKuCT8kRCp7WmCFAkYK2og.ptur40TNNuGFsN0048KyGmjBIz9VfvYo2XeGhvqWitEg.PNG.xlvldh7%2F%25B3%25D7%25C0%25CC%25B9%25F6_%25B9%25EA%25B5%25E5_PC%25B9%25F6%25C0%25FC_%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25BC%25B3%25C4%25A1_01.png&type=f54_54",
    };
  },
};
</script>
