const path = require("path");

module.exports = {
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: [path.resolve(__dirname, "src")],
        alias: {
          styles: "./assets/styles/",
          components: "./src/components/",
        },
      },
    ],
  ],
};
