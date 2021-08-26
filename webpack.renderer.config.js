const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push({
  test: /\.css$/,
  use: [
    {
      loader: "@teamsupercell/typings-for-css-modules-loader",
      options: {
        banner:
          "// autogenerated by typings-for-css-modules-loader. \n// Please do not change this file!",
      },
    },
    {
      loader: "css-loader",
      options: { modules: true },
    },
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".css",
      ".scss",
      ".sass",
      ".png",
      ".webp",
    ],
  },
};
