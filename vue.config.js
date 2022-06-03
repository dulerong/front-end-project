const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
        '~layouts': path.resolve(__dirname, 'src/views/layouts'),
        '~pages': path.resolve(__dirname, 'src/views/pages'),
        '~components': path.resolve(__dirname, 'src/views/components')
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.covid19tracker.ca/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false
      }
    }
  }
})
