import { Plot } from "../../core/plot";
import { ILineOptions } from "./types";

/**
 * 条形图默认配置项
 */
export const DEFAULT_OPTIONS = Object.assign({}, Plot.getDefaultOptions(), {
  xAxis: {
    type: "category",
  },
  yAxis: {
    type: "value",
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
export const DEFAULT_PROPS: () => ILineOptions = (): ILineOptions => ({
  chartType: "line",
  boundaryGap: false,
});
