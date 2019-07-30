module.exports = () => ({
  prod: {
    mode: 'production',
    output: {
      filename: 'main.js',
    },
    module: {
      rules: [{
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }]
    }
  },

  dev: {
    mode: 'development',
    output: {
      filename: 'main.js',
    },
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }]
    }
  }
});
