const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // נקודת הכניסה
  output: {
    path: path.resolve(__dirname, "dist"), // תיקיית הפלט
    filename: "bundle.js", // שם קובץ הפלט
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, // folder to be excluded
        use: "babel-loader", // loader which we are going to use
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/i,
        exclude: /node_modules/,
        use: ["url-loader"],
      },
      {
        test: /\.png$/i,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"], // ודא ש-Webpack תומך בקבצי JSON
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"), // הגדרת alias לנתיב
      "@lib": path.resolve(__dirname, "./src/lib"), // הגדרת alias לנתיב
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // תבנית HTML
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000, // הרצת השרת על פורט 3000
  },
  mode: "development", // מצב הפיתוח
};
