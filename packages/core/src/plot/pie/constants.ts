import { Plot } from "../../core/plot";

/**
 * 条形图默认配置项
 */
export const DEFAULT_OPTIONS = Object.assign({}, Plot.getDefaultOptions(), {
  legend: {
    show: true,
  },
  series: [
    {
      type: "pie",
      encode: {
        itemName: "name",
        value: "value",
      },
    },
  ],
});
