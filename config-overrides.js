module.exports = {
  webpack(config, env) {
    config.entry = './src/single-spa-entry.js';
    config.output = {
      ...config.output,
      filename: 'nickpith-app1.js',
      libraryTarget: 'system',
    }
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'HtmlWebpackPlugin' && plugin.constructor.name !== 'MiniCssExtractPlugin')
    delete config.optimization
    return config;
  },
  devServer(configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.disableHostCheck = true
      config.headers = config.headers || {}
      config.headers['Access-Control-Allow-Origin'] = '*'
      return config
    }
  }
}
