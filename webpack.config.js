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
            plugins: ["transform-object-rest-spread"]
          }
        }
      }
    ]
  }
};
