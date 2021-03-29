const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log("-----", path.resolve(__dirname, "dist"));

module.exports = {
  entry: "./src/js/index.js",

  // entry: {
  //   index: "./src/js/index.js",
  //   newScript: "./src/js/newJS.js",
  // },

  output: {
    filename: "bundle.js",
    // filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    contentBase: "./dist",
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
