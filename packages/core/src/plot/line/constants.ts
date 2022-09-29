import { Plot } from "../../core/plot";

/**
 * 条形图默认配置项
 */
export const DEFAULT_OPTIONS = Object.assign({}, Plot.getDefaultOptions(), {
  xAxis: {

  },
  yAxis: {

  },
  legend: {
    show: true,
  },
  series: [
    {
      type: "line",
      encode: {
        x: "category",
        y: "value",
      },
    },
  ],
});
