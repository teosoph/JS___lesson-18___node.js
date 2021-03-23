const path = require("path");

console.log("-----", path.resolve(__dirname, "dist"));

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
