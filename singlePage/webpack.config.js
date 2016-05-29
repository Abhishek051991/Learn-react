module.exports = {
  context: __dirname,
  entry: "./src/js/client.js",

  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
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
