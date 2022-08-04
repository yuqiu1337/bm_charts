import { Plot } from "../../core/plot";

export const TOP_COUNT = 5;
export const NAME_FIELD = "category";
export const VALUE_FIELD = "value";
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
      radius: "60%",
      center: ["50%", "50%"],
      encode: {
        itemName: NAME_FIELD,
        value: VALUE_FIELD,
      },
    },
  ],
});
