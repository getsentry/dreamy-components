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
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      }
    ]
  }
};
