const path = require('path')

module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /.html$/,
            loader: "vue-template-loader",
            exclude: /index.html/
          }
        ]
      }
    },
    chainWebpack: config => {
      config.resolve.alias.set(
        'vue$',
        // If using the runtime only build
        path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
        // Or if using full build of Vue (runtime + compiler)
        // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
      )
      }
  }