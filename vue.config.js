/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { defineConfig } = require('@vue/cli-service');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/variables/*.less'), path.resolve(__dirname, './src/styles/mixins/*.less')],
    });
}

module.exports = defineConfig({
  productionSourceMap: false, // 去除生产环境的 productionSourceMap
  publicPath: './',
  outputDir: `dist-${process.env.NODE_ENV}`,
  chainWebpack: (config) => {
    // 修改项目名称
    config.plugin('html').tap((args) => {
      args[0].title = 'vue2初始模板'; // 项目名称
      return args;
    });
    // 配置别名
    config.resolve.alias.set('@', path.resolve('src'));
    // 自动引入全局样式
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('less').oneOf(type)));
  },
});
