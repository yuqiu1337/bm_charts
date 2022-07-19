import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import fileSize from "rollup-plugin-filesize";
import vue from "rollup-plugin-vue";
export default {
  input: "./src/index.ts",
  output: [
    {
      name: "vue",
      format: "esm",
      // dir: "umd",
      file: "umd/index.esm.js",
      sourcemap: true,
    },
  ],
  external: ["react", "lodash", "react-dom", "echarts", "vue"],
  plugins: [
    resolve(),
    vue({
      css: true,
      compileTemplate: false,
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    commonjs(),
    fileSize(),
  ],
};
