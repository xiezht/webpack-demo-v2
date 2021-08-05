module.exports = {
  mode: "development",
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'loader-demo-1'
      }
    ]
  }
}