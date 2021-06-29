var glob = require("glob")

module.exports = {
  mode: 'development',
  entry: glob.sync('./src/js/**/*.js').reduce((acc, path) => {
    const folder = path.replace('./src/js/', '').split('/').shift()
    var name

    if (folder == 'pages') {
      name = path.split('/').pop().replace('.js', '')
      acc[name] = path
    }
    if (folder == 'common.js') {
      name = folder.replace('.js', '')
      acc[name] =  path
    }


    return acc

  }, {}),
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
  }
};