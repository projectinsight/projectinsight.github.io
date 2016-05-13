module.exports = {
  target: "web",
  entry: ["babel-polyfill", "./src"],
  output: {
    path: __dirname,
    filename: "app.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: ["node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
          // plugins: ["transform-es2015-modules-commonjs"]
        }
      }
    ]
  }
};
