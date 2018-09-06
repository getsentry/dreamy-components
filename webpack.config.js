const path = require('path').normalize;

module.exports = {
  entry: './index.js',
  output: {
    path: path(__dirname + '/dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env", "react"],
            plugins: ["babel-plugin-add-module-exports", "transform-es2015-modules-commonjs", "transform-object-rest-spread"]
          }
        }
      }
    ]
  }
};
