const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    // path는 절대 경로
    path: path.resolve("./dist"),
    // [name] 표시는 entry에서 표시한 main으로 치환됨
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          // 파일로더가 처리하는 파일을 모듈로 사용했을 때 경로앞에 추가되는 문자열
          // output 경로를 dist로 처리했으니 동일하게 함
          // publicPath: "./dist/",
          // 파일로더가 변경할 파일 이름
          // name: "[path][name].[ext]?[hash]",
          publicPath: "./dist/",
        },
      },
    ],
  },
};
