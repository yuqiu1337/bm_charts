import { Plot } from "../../core/plot";

/**
 * 条形图默认配置项
 */
export const DEFAULT_OPTIONS = Object.assign({}, Plot.getDefaultOptions(), {
  xAxis: {
    type: "category"
  },
  yAxis: {
    type: "value"
  },
  legend: {
    show: true,
  },
  series: [
    {
      type: "line",
      encode: {
        x: "category",
        y: "value"
      }
    }
  ]
});
