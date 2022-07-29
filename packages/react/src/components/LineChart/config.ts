import { defaultMainColor } from "../common";

/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 17:10:43
 * Copyright © YourCompanyName All rights reserved
 */
export const getChartOptions = function () {
  return {
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    color: defaultMainColor(),
    legend: {
      show: true,
    },
    series: [{ type: 'line', seriesLayoutBy: 'row' }],
  };
};
