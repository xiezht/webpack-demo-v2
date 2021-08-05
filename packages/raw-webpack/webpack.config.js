module.exports = {
  mode: "development",
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'loader-demo-1',
          options: {
            name: 'this is loader optiosn-name'
          }
        }
      }
    ]
  }
}