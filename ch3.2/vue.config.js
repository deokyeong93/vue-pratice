const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 우선 기본적으로 prefetch를 비활성화 한 후에
    // 각각의 lazyLoad에서 prefetch할지말지 결정하는 것이 좋다.
    config.module.delete('prefetch');
  }
});
