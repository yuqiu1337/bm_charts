/**
 * @author        levi <levidcd@outlook.com>
 * @date          2022-07-18 17:10:43
 * Copyright © YourCompanyName All rights reserved
 */
import { BaseOptionHandle } from '@agito/chart-core';
import { EChartsOption } from 'echarts';
import { defaultMainColor } from '../common';
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
    series: [
      {
        type: 'bar',
        data: [],
      },
    ],
  };
};
