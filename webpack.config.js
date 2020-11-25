const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    library: 'ReactMediaControl',
    libraryTarget: 'umd',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: [
    {
      react: 'react',
      'react-dom': 'react-dom',
    },
    /@material-ui\/.*/
  ]
}