module.exports = {
  context: __dirname,
  entry: "./src/js/helloworld.js",

  output: {
    path: __dirname + "/src/js",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
