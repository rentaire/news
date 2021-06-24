module.exports = {
  mode: 'development',
  entry: {
    pages: "./src/js/pages/main.js",  //glob.sync
    common: "./src/js/common.js",

  },
  output: {
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    }
},
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};