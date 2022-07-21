import config from "../../config/rollup-config";

export default config({
  input: "./src/index.ts",
  output: [
    {
      name: "core",
      format: "umd",
      file: "umd/index.umd.js",
      sourcemap: true,
      globals: {
        react: "React",
        lodash: "lodash",
        "react-dom": "ReactDOM",
        echarts: "echarts",
      },
    },
  ],
  external: ["react", "lodash", "react-dom", "echarts"],
  plugins: [],
});
