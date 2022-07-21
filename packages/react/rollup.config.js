import postcss from "rollup-plugin-postcss";
import NpmImport from "less-plugin-npm-import";
import config from "../../config/rollup-config";

export default config({
  input: "./src/index.ts",
  output: [
    {
      name: "BMChartsReact",
      format: "umd",
      file: "umd/index.umd.js",
      sourcemap: true,
      globals: {
        antd: "antd",
        react: "React",
        lodash: "lodash",
        "react-dom": "ReactDOM",
        echarts: "echarts",
      },
    },
  ],
  external: ["antd", "react", "lodash", "react-dom", "echarts"],
  plugins: [
    postcss({
      minimize: true,
      sourceMap: false,
      extensions: [".less", ".css"],
      use: [
        [
          "less",
          {
            javascriptEnabled: true,
            plugins: [new NpmImport({ prefix: "~" })],
          },
        ],
      ],
    }),
  ],
});
