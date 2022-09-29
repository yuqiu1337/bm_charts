import { Plot } from "../../core/plot";
import { IBarOptions } from "./types";

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
      type: "bar",
      encode: {
        x: "category",
        y: "value",
      },
    },
  ],
});

export const DEFAULT_PROPS: () => IBarOptions = (): IBarOptions => ({
  direction: "horizontal",
});
